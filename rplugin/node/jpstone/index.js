const { Plugin, Command, Autocmd } = require('neovim');

const initFile = '~/.config/nvim/init.vim';
const jsFile = '~/.config/nvim/rplugin/node/jpstone/index.js';

function keyPath(key) {
  return (k) => k ? keyPath(key + k) : key;
}

function getMap(keys, action, prefix = 'n', suffix = '<CR>') {
  const map = `${prefix}map`;
  return `${map} <Leader>${keys} ${action}${suffix}`;
}

// leader paths
const file = keyPath('f');
const edit = file('e');
const win = keyPath('w');
const buffer = keyPath('b');

const leaderMap = [
  [edit('d')(), `:e ${initFile}`],
  [edit('R')(), `:source ${initFile}`],
  [win('w')(), '<C-w>w', 'nore', null],
  [edit('j')(), `:e ${jsFile}`],
  [buffer('b')(), `:bn`],
];

class ConfigPlugin {
  init() {
    this.nvim.command('let mapleader="\\<Space>"');
    leaderMap.forEach(m => this.nvim.command(getMap(...m))); 
  }

  autorun() {
    this.nvim.command('JpstoneInit');
  }
}

Command('JpstoneInit')(ConfigPlugin.prototype.init);
Autocmd('VimEnter', { pattern: '*', sync: true })(ConfigPlugin.prototype.autorun);

module.exports = Plugin({ dev: true })(ConfigPlugin);
