const mix = require('laravel-mix');
const PublishPlugin = require('./src/PublishPlugin');

class Publish {
  name() {
    return 'publish';
  }

  register(userConfig) {
    const defaultConfig = {
      tag: '',
      provider: '',
      path: '../../../artisan',
      force: true,
    };

    if (userConfig !== undefined) {
      this.config = { ...defaultConfig, ...userConfig };
    } else {
      this.config = defaultConfig;
    }
  }

  webpackPlugins() {
    return new PublishPlugin(this.config);
  }
}

mix.extend('publish', new Publish());
