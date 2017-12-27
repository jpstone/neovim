" Tab size
set tabstop=2
set shiftwidth=0

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
nmap <Leader>fem ;e ~/.local/share/nvim/rplugin.vim<CR>
nmap <Leader>bb ;bn<CR>
nmap <Leader>tt ;NERDTreeToggle<CR>
nnoremap <Leader>ww <C-w>w

" vim-plugged config
call plug#begin('~/.local/share/nvim/plugged')
Plug 'scrooloose/nerdtree'
call plug#end()

" Auto commands

