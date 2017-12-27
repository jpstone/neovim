" Misc globals
set showcmd

" Path settings
set runtimepath+="~/.config/nvim"

" Buffers
set hidden

" Misc bindings
nnoremap ; :
nnoremap : ;
vnoremap ; :
vnoremap : ;

" Leader bindings
let mapleader="\<Space>"
nmap <Leader>fed ;e ~/.config/nvim/init.vim<CR>
nmap <Leader>feR ;so ~/.config/nvim/init.vim<CR>
nmap <Leader>fej ;e ~/.config/nvim/rplugin/node/jpstone/index.js<CR>
nnoremap <Leader>ww <C-w>w
nmap <Leader>bb ;bn<CR>
nmap <Leader>tt ;NERDTreeToggle<CR>

" - Specify a directory for plugins
" - For Neovim: ~/.local/share/nvim/plugged
" - Avoid using standard Vim directory names like 'plugin'
" Initialize plugin system
call plug#begin('~/.local/share/nvim/plugged')
Plug 'scrooloose/nerdtree'
call plug#end()
