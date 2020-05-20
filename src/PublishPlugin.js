const cmd = require('node-cmd');

class PublishPlugin {
  constructor(config) {
    this.config = config;
  }

  apply(compiler) {
    let line = ['php', this.config.path, 'vendor:publish'];

    if (this.config.provider) {
      line.push('--provider', `"${this.config.provider}"`);
    }

    if (this.config.tag) {
      line.push('--tag', `"${this.config.tag}"`);
    }

    if (this.config.force) {
      line.push('--force');
    }

    line = line.join(' ');

    compiler.hooks.afterEmit.tap('PublishPlugin', compilation => {
      cmd.get(line, (err, stdout, stderr) => {
        console.log(err ? stderr : stdout);
      });
    });
  }
}

module.exports = PublishPlugin;
