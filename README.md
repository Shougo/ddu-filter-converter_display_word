# ddu-filter-converter_display_word

Convert display to word for ddu.vim

## Required

### denops.vim

https://github.com/vim-denops/denops.vim

### ddu.vim

https://github.com/Shougo/ddu.vim

## Configuration

```vim
" Use the filter.
call ddu#custom#patch_global({
    \   'sourceOptions': {
    \     '_': {
    \       'converters': ['converter_display_word'],
    \     },
    \   }
    \ })
```
