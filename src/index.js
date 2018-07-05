/**
 * React Iterable Track Module
 *
 * @package react-iterable-track
 * @author  C19 <classone2010@gmail.com>
 */

//
let initialized = false;
let debug = false;

/**
 * Utilities
 */

const verifyInit = () => {
  if (!initialized) {
    console.warn('Iterable not initialized, before using call Iterable.init with required params');
  }
  return initialized;
};

//
const log = (...args) => {
  console.info(...['[react-iterable-track]'].concat(args));
};

//
const defaultOptions = {
  autoConfig: true,
  debug: false
};

const genFunc = name => function (...arg) {
  if (!verifyInit()) {
    return;
  }

  window._iaq[name](...arg);

  if (debug) {
    log(`called ${name} with ${arg}`);
  }
};

//
export default {
  init(API_KEY, options = defaultOptions) {
    if (initialized) {
      console.warn('Already initialized Iterable.');
    }
    window._iaq = window._iaq || [];
    /* eslint-disable */
    (function () {
    var b = document.createElement('script'); b.type = 'text/javascript'; b.async = true;
    b.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'js.iterable.com/analytics.js';
    var a = document.getElementsByTagName('script')[0]; a.parentNode.insertBefore(b, a);
    })();
    /* eslint-enable */
    if (!API_KEY) {
      console.warn('Please init with API_KEY for initializing');
    } else {
      window._iaq.push(['account', API_KEY]); // eslint-disable-line no-undef
      initialized = true;
      debug = options.debug;
      Object.assign(this, {
        identify: genFunc('identify'),
        track: genFunc('track'),
        updateCart: genFunc('updateCart'),
        trackPurchase: genFunc('trackPurchase'),
      });
    }
  },
};
