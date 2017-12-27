set showcmd

" Path settings
set runtimepath+="~/.config/nvim"

"
" - Specify a directory for plugins
" - For Neovim: ~/.local/share/nvim/plugged
" - Avoid using standard Vim directory names like 'plugin'
call plug#begin('~/.local/share/nvim/plugged')

" Initialize plugin system
call plug#end()
