export default class {
  constructor(el) {
    this.settings = {
      controlName: el.getAttribute('aria-controls'),
    };

    this.dom = {
      el,
      controlsList: document.querySelectorAll(`[aria-controls='${this.settings.controlName}']`),
    };
  }

  // -- Methods
  // --------------------------------------------------------------
  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.dom.el.addEventListener('click', () => this.toggle());
  }

  toggle() {
    const state = this.dom.el.getAttribute('aria-expanded') !== 'true';
    this.dom.controlsList.forEach((control) => control.setAttribute('aria-expanded', state));
  }
}
