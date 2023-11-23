# ddu-filter-converter_display_word

Convert display to word(matcherKey) for ddu.vim

NOTE: It must be applied before matchers.

## Required

### denops.vim

https://github.com/vim-denops/denops.vim

### ddu.vim

https://github.com/Shougo/ddu.vim

## Configuration

```vim
call ddu#custom#patch_global(#{
    \   sourceOptions: #{
    \     _: #{
    \       matchers: [
    \         'converter_display_word', 'matcher_substring',
    \       ],
    \     },
    \   }
    \ })
```
