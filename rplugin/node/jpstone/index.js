const fs = require('fs');
const path = require('path');
const { Plugin, Command, Autocmd } = require('neovim');

const a = __dirname;

const nvimDir = path.resolve('~/.local/share/nvim');
const pluginPath = path.join(nvimDir, 'plugged');
const plugins = [
	'scrooloose/nerdtree',
];

function getPluginDir(p) {
	return path.join(pluginPath, p.split('/')[1]);
}

function doesExist({ isDirectory }) {
	return isDirectory();
}

class ConfigPlugin {
  loadPlugins() {
		let _isInstalled = true;
    this.nvim.command(`call plug#begin(${pluginPath})`);
		plugins.forEach(p => this.nvim.command(`Plug ${p}`));
		plugins.forEach((p, i) => fs.stat(getPluginDir(p), (err, stat) => {
			if (!doesExist(stat)) _isInstalled = false;
			if (i === plugins.length - 1 && !_isInstalled) return this.nvim.command('PluginInstall');
			console.log('All plugins loaded');
		}));
  }

  autorun() {
		this.loadPlugins();
  }
}

Autocmd('VimEnter', { pattern: '*', sync: true })(ConfigPlugin.prototype.autorun);

module.exports = Plugin({ dev: true })(ConfigPlugin);
