based on the [Sass Guidelines](https://sass-guidelin.es/)


## Stylelint config
extend [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
and [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines)
> ref: [.stylelintrc.js](../.stylelintrc.js)


## BEM-like naming & selector conventions
hyphen (-) delimited strings, with BEM-like naming for more complex pieces of code.
- Block: The sole root of the component.
- Element: A component part of the Block.
- Modifier: A variant or extension of the Block.
~~~~
.block {}
.block__element {}
.block--modifier {}
~~~~
> ref: [BEM Naming Cheat Sheet by 9elements](https://9elements.com/bem-cheat-sheet/)