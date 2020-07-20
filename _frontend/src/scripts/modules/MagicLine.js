import debounce from 'lodash/debounce';

export default class {
  constructor(el) {
    this.settings = {
      linksSelector: 'a',
      padding: 15,
      activeSelector: 'is-active',
      height: '5px',
      ready: false,
    };

    this.dom = {
      el,
      linksList: el.querySelectorAll(this.settings.linksSelector),
    };

    this.settings.active = Array.from(this.dom.linksList)
      .find((link) => link.classList.contains(this.settings.activeSelector));
  }

  // -- Methods
  // --------------------------------------------------------------
  init() {
    this.createLine();
    this.setReady(true);
    this.bindEvents();
  }

  createLine() {
    this.dom.el.insertAdjacentHTML('beforeend', '<span class="magic-line"></span>');
    this.dom.line = this.dom.el.querySelector('.magic-line');
  }

  bindEvents() {
    this.dom.el.addEventListener('mouseleave', () => this.setLine(this.settings.active));
    this.dom.linksList.forEach((link) => link.addEventListener('mouseenter', () => this.setLine(link)));

    window.addEventListener('resize', () => this.setReady(false));
    window.addEventListener('resize', debounce(() => this.setReady(), 300));
  }

  setReady(state = false) {
    if (window.innerWidth < 768) {
      this.settings.ready = false;
      this.dom.line.classList.remove('is-ready');
    } else {
      if (this.settings.ready === state) return;

      this.settings.ready = state;
      if (state) {
        this.setLine(this.settings.active);
        setTimeout(() => {
          if (state) {
            this.dom.line.classList.add('is-ready');
          } else {
            this.dom.line.classList.remove('is-ready');
          }
        }, 0);
      } else if (state) {
        this.dom.line.classList.add('is-ready');
      } else {
        this.dom.line.classList.remove('is-ready');
      }
    }
  }

  setLine(link) {
    if (link instanceof HTMLElement) {
      const left = link.offsetLeft + this.settings.padding;
      const width = link.offsetWidth - this.settings.padding * 2;

      this.dom.line.style.width = `${width}px`;
      this.dom.line.style.height = this.settings.height;
      this.dom.line.style.transform = `translateX(${left}px)`;
    } else {
      this.dom.line.style.height = 0;
    }
  }
}
