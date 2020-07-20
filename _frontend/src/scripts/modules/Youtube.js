import { v1 as uuid } from 'uuid';

export default class {
  constructor(el) {
    this.dom = {
      el,
      link: el.querySelector('.youtube__link'),
      frame: el.querySelector('.youtube__frame'),
    };

    // -- Properties
    //--------------------------------------------------------------
    this.keys = {
      enter: 13,
      escape: 27,
      space: 32,
    };

    this.player = {
      el: null,
      guid: uuid(),
      state: null,
      isInitialized: false,
      key: this.videoId,
      settings: {
        enablejsapi: 1,
        modestbranding: 1,
        rel: 0,
      },
    };
  }

  // -- Methods
  //--------------------------------------------------------------
  get videoId() {
    const src = this.dom.link.getAttribute('href');
    let result = false;

    if (src && typeof src === 'string') {
      if (src.length === 11) {
        result = src; // The src is a Youtube key, not an url
      } else {
        // eslint-disable-next-line max-len
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        // eslint-disable-next-line prefer-destructuring
        result = src.match(regex)[1];
      }
    } else {
      console.error('The Youtube src/href is not properly defined');
    }

    return result;
  }

  init() {
    this.createPlayerHtml();
    this.loadApi();
    document.addEventListener('youtube-ready', () => this.ready());
  }

  createPlayerHtml() {
    const player = `<div class="youtube__player" id="youtube-player-${this.player.guid}">
      <div id="youtube-${this.player.guid}"></div>
    </div>
    <button class="youtube__button" disabled><span class="sr-only">play</span></button>`;
    this.dom.frame.insertAdjacentHTML('beforeend', player);
    this.dom.player = this.dom.el.querySelector(`#youtube-player-${this.player.guid}`);
    this.dom.button = this.dom.el.querySelector('.youtube__button');
  }

  loadApi() {
    const youtubeApiScriptInjected = document.body.querySelector('#youtube-api');

    if (typeof YT !== 'undefined') {
      this.ready();
    } else if (!youtubeApiScriptInjected) {
      const tag = document.createElement('script');
      tag.id = 'youtube-api';
      tag.src = '//www.youtube.com/iframe_api';
      document.body.insertAdjacentElement('beforeend', tag);

      window.onYouTubeIframeAPIReady = () => document.dispatchEvent(new CustomEvent('youtube-ready'));
    }
  }

  ready() {
    if (this.player.isInitialized || !this.player.key) return;

    this.player.isInitialized = true;

    this.player.el = new YT.Player(`youtube-${this.player.guid}`, {
      videoId: this.player.key,
      playerVars: this.player.settings,
      events: {
        onReady: () => {
          this.dom.link.addEventListener('click', (e) => this.play(e));
          this.dom.link.addEventListener('keydown', (e) => this.toggleAction(e));
          this.dom.link.addEventListener('youtube:stop', () => this.stop());
          this.dom.button.disabled = false;
        },
        onStateChange: (e) => this.onPlayerStateChange(e),
      },
    });
  }

  toggleAction(e) {
    e.preventDefault();
    const isPlaying = this.player.state === YT.PlayerState.PLAYING;
    const isPaused = this.player.state === YT.PlayerState.PAUSED;
    const togglePlay = e.which === this.keys.space || e.which === this.keys.enter;
    const requestStop = e.which === this.keys.escape;

    if ((isPlaying || isPaused) && requestStop) this.stop();
    else if (isPlaying && togglePlay) this.pause(e);
    else if (!isPlaying && togglePlay) this.play(e);
  }

  onPlayerStateChange(e) {
    this.player.state = e.data;
    if (this.player.state === YT.PlayerState.ENDED) this.stop(); // Video ended
  }

  play(e) {
    e.preventDefault();
    this.dom.el.classList.add('is-playing');
    if (this.player.state !== YT.PlayerState.PLAYING) {
      this.player.el.playVideo();
      this.stopOthersYoutubeModules();
    }
  }

  pause(e) {
    e.preventDefault();
    if (this.player.state === YT.PlayerState.PLAYING) {
      this.player.el.pauseVideo();
    }
  }

  stop() {
    this.dom.el.classList.remove('is-playing');
    if (this.player.state === YT.PlayerState.PLAYING || this.player.state === YT.PlayerState.BUFFERING) {
      this.player.el.stopVideo();
    }
  }

  stopOthersYoutubeModules() {
    const youtubeModules = this.dom.html.querySelectorAll('[data-module="Youtube"]');
    youtubeModules.forEach((youtube) => {
      if (youtube !== this.dom.el) {
        youtube.dispatchEvent(new CustomEvent('youtube:stop'));
      }
    });
  }
}
