export default class {
  constructor(el) {
    this.dom = {
      ...window.dom,
      el,
    };

    this.count = 0;
  }

  // -- Methods
  // --------------------------------------------------------------
  init() {
    this.bindEvents();
  }

  bindEvents() {
    console.log('work');
  }
}
