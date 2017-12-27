const { Plugin, Command, Autocmd } = require('neovim');

class ConfigPlugin {
  init() {
  }

  autorun() {
    this.nvim.command('JPStoneInit');
  }
}

Command('JPStoneInit')(ConfigPlugin.prototype.init);
Autocmd('VimEnter', { pattern: '*', sync: true })(ConfigPlugin.prototype.autorun);

module.exports = Plugin({ dev: true })(ConfigPlugin);
