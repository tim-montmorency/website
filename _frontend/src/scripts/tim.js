import '../styles/tim.scss';
import 'mdn-polyfills/CustomEvent';
import 'mdn-polyfills/NodeList.prototype.forEach';
import smoothscroll from 'smoothscroll-polyfill';
import DetectKeyboardUser from 'detect-keyboard-user';
import JSvh from './helpers/JSvh';
import UserAgentParser from './helpers/UserAgentParser';

/* eslint-disable global-require */
new UserAgentParser().addClasses();
/* eslint-disable-next-line */
const vh = new JSvh();
/* eslint-disable-next-line */
const myDKU = new DetectKeyboardUser();

smoothscroll.polyfill();

const Modules = {
  MagicLine: require('./modules/MagicLine').default,
  ScrollDirection: require('./modules/ScrollDirection').default,
  ToggleAria: require('./modules/ToggleAria').default,
  Youtube: require('./modules/Youtube').default,
};

window.init = function init() {
  const items = document.querySelectorAll('[data-module]');
  const styles = `background: ${'#18314f'}; color: #fff; padding: 0 0.25em;`;

  items.forEach((item) => {
    const list = item.getAttribute('data-module').split(/\s+/);

    list.forEach((name) => {
      if (Modules[name] !== undefined) {
        console.log(`%c✔️${name}%O`, styles, { el: item });
        new Modules[name](item).init();
      } else if (Modules.Default !== undefined) {
        console.warn(`%c⚠️${name}%O`, styles, { el: item });
        new Modules.Default(item).init();
      } else {
        console.error(`%c❌️${name}%O`, styles, { el: item });
      }
    });
  });
};

if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
  window.init();
} else {
  document.addEventListener('DOMContentLoaded', window.init());
}
