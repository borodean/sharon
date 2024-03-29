module.exports = (config) => {
  const customLaunchers = {
    'SL Chrome 49': {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Linux',
      version: '49',
    },
    'SL Edge 13': {
      base: 'SauceLabs',
      browserName: 'MicrosoftEdge',
      platform: 'Windows 10',
      version: '13',
    },
    'SL Firefox 42': {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'Linux',
      version: '42',
    },
    'SL Safari 10': {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.11',
      version: '10',
    },
  };

  config.set({
    browserify: {
      debug: true,
      plugin: [
        'proxyquire-universal',
        [
          'browserify-wrap',
          {
            prefix: `
            window.open = function () {};
            (function () {
            var location = 'http://foo.share/';
            var screen = { width: 1920, height: 1080 };
          `,
            suffix: `
            })();
          `,
          },
        ],
      ],
    },
    files: [{pattern: 'test/*', type: 'js'}],
    frameworks: ['browserify', 'chai', 'mocha', 'sinon'],
    preprocessors: {
      'test/*': ['browserify'],
    },
    reporters: ['dots'],
    singleRun: true,
  });

  if (!config.local) {
    config.set({
      browsers: Object.keys(customLaunchers),
      concurrency: 1,
      customLaunchers,
      reporters: [...config.reporters, 'saucelabs'],
    });
  }
};
