import 'mdn-polyfills/Array.prototype.find';
import 'mdn-polyfills/CustomEvent';
import debounce from 'lodash/debounce';

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];

/**
 * BootstrapBreakpoints
 * Detect Bootstrap breakpoints change and console.log the new breakpoint
 */
export default class BootstrapBreakpoints {
  constructor() {
    this.currentBreakpoint = null;
    this.el = window.document.createElement('div');
    this.reversedBreakpoints = breakpoints.reverse();
  }

  detect() {
    this.update();
    window.addEventListener('resize', debounce(() => this.update(), 300));
  }

  static dispatch(breakpoint) {
    window.dispatchEvent(new CustomEvent('breakpoint:change', { detail: breakpoint }));
  }

  static log(breakpoint) {
    console.log(`%cBootstrap: ${breakpoint}`, 'background: #563d7c; color: #fff; padding: 0 .5em;');
  }

  update() {
    document.body.appendChild(this.el);

    const newBreakpoint = this.reversedBreakpoints.find((breakpoint) => {
      this.el.className = `d-${breakpoint}-none`;
      return window.getComputedStyle(this.el).display === 'none';
    }) || 'xs';

    document.body.removeChild(this.el);

    if (this.currentBreakpoint !== newBreakpoint) {
      this.currentBreakpoint = newBreakpoint;
      BootstrapBreakpoints.dispatch(newBreakpoint);
      BootstrapBreakpoints.log(newBreakpoint);
    }
  }
}
