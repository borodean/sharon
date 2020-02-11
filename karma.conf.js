module.exports = config => {
  const customLaunchers = {
    sl_chrome_26: {
      base: 'SauceLabs',
      browserName: 'chrome',
      version: 26
    },
    sl_edge_13: {
      base: 'SauceLabs',
      browserName: 'microsoftedge',
      version: 13
    },
    sl_firefox_4: {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: 4
    },
    sl_ie_9: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: 9
    },
    sl_iphone_8_1: {
      base: 'SauceLabs',
      browserName: 'iphone',
      version: 8.1
    },
    sl_safari_6: {
      base: 'SauceLabs',
      browserName: 'safari',
      version: 6
    }
  };

  config.set({
    browserify: {
      debug: true,
      plugin: [
        'proxyquire-universal',
        ['browserify-wrap', {
          prefix: `
            window.open = function () {};
            (function () {
            var location = 'http://foo.share/';
            var screen = { width: 1920, height: 1080 };
          `,
          suffix: `
            })();
          `
        }]
      ]
    },
    files: ['test/*'],
    frameworks: ['browserify', 'chai', 'mocha', 'sinon'],
    preprocessors: {
      'test/*': ['browserify']
    },
    reporters: ['dots']
  });

  if (!config.local) {
    config.set({
      browsers: Object.keys(customLaunchers),
      customLaunchers,
      reporters: [...config.reporters, 'saucelabs']
    });
  }
};
