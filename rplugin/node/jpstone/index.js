const fs = require('fs');
const path = require('path');
const { Plugin, Command, Autocmd } = require('neovim');

const nvimDir = path.join(process.env.HOME, '.local/share/nvim');
const pluginPath = path.join(nvimDir, 'plugged');
const plugins = [
	'scrooloose/nerdtree',
];

function getPluginDir(p) {
	return path.join(pluginPath, p.split('/')[1]);
}

class ConfigPlugin {
  loadPlugins() {
		let _isInstalled = true;
    this.nvim.command(`call plug#begin(${pluginPath})`);
		plugins.forEach(p => this.nvim.command(`Plug ${p}`));
		plugins.forEach(p => {
			try {
			  fs.lstatSync(getPluginDir(p));
			} catch (e) {
				if (e.code === 'ENOENT') _isInstalled = false;
				debugger;
			}
		});
		if (!_isInstalled) return this.nvim.command('PlugInstall');
  }

  autorun() {
		this.loadPlugins();
  }
}

Autocmd('VimEnter', { pattern: '*', sync: true })(ConfigPlugin.prototype.autorun);

module.exports = Plugin({ dev: true })(ConfigPlugin);
