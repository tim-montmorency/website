based on the [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/),
and [Sass Guidelines](https://sass-guidelin.es/)


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


## Import order
a mixed of the [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)
and the [7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)
~~~~
1. abstracts/
2. vendors/
3. base/
4. layout/
5. components/
6. pages/
7. themes/ (optional)
~~~~
> ref: [tim.scss](../src/styles/tim.scss)


## Architecture

### Abstracts folder
The abstracts/ folder gathers all Sass tools and helpers used across the project. 
Every global variable, function, mixin and placeholder should be put in here. 
The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. 
These are nothing but Sass helpers.

#### Functions
```
1) Colors
   |– palette
2) Math
   |– abs (absolute)
   |– acos (arccos)
   |– asin (arcsin)
   |– atan (arctan)
   |– cos
   |– pow (power)
   |– sin
   |– sqrt (square)
   |– tan
   |– unitless-rad
3) Types
   |– is-absolute-length
   |– is-angle
   |– is-color
   |– is-frequency
   |– is-integer
   |– is-length
   |– is-number
   |– is-percentage
   |– is-position
   |– is-relative-length
   |– is-resolution
   |– is-time
4) Typography
   |– font
```

#### Mixins
```
1) Animations
   |– fade
2) Positions
   |– center
3) Shapes
   |– angle
   |– ratio
   |– triangle
```

#### Placeholders
They're meant to be used with the @extend directive. 
On their own, without any use of @extend, rulesets that use placeholder selectors will not be rendered to CSS.
```
1) Accessibility
   |– sr-only
   |– sr-only-focusable
2) Elements
 * |– blockquote
 * |– headings
 * |– list (ol, ul)
 * |– paragraph
3) Resets
 * |– button-reset
 * |– list-reset
4) Spacings
 * |– remove-ends-horizontal-margin
 * |– remove-ends-vertical-margin
5) Typography
 * |– ellipsis
 * |– uppercase
```

### Vendors folder
Most projects will have a vendors/ folder containing all the CSS files from external libraries 
and frameworks – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on. 
Putting those aside in the same folder is a good way to say 
“Hey, this is not from me, not my code, not my responsibility”.

### Base folder
The base/ folder holds what we might call the boilerplate code for the project. 
In there, you might find the reset file, some typographic rules, 
and probably a stylesheet defining some standard styles for commonly used HTML elements.

### Layout folder
The layout/ folder contains everything that takes part in laying out the site or application. 
This folder could have stylesheets for the main parts of the site (header, footer, navigation, sidebar…), 
the grid system or even CSS styles for all the forms.

### Components folder
For smaller components, there is the components/ folder. 
While layout/ is macro (defining the global wireframe), components/ is more focused on widgets. 
It contains all kind of specific modules like a slider, a loader, a widget, and basically anything along those lines. 
There are usually a lot of files in components/ since 
the whole site/application should be mostly composed of tiny modules.

### Pages folder
If you have page-specific styles, it is better to put them in a pages/ folder, in a file named after the page. 
For instance, it’s not uncommon to have very specific styles 
for the home page hence the need for a _home.scss file in pages/.

### Themes folder (optional)
On large sites and applications, it is not unusual to have different themes. 
There are certainly different ways of dealing with themes but I personally like having them all in a themes/ folder.
