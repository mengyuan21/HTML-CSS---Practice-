# SCSS

## 什么是SCSS ？

scss是css的超集，**所有有效的 CSS 也同样都是有效的 SCSS** ，可以通过vs code插件转换CSS和SCSS的语法



## SCSS的特性 ？

### 1. 变量

​	变量是存储信息并在将来重复利用的一种方式，在整个样式表中都可访问。 你可以在变量中存储颜色、字体 或任何 CSS 值，并在将来重复利用。

#### 1.1 变量声明

​	Sass 使用 `$` 符号 作为变量的标志。任何可以用作`css`属性值的赋值都可以用作`sass`的变量值，甚至是以空格或其他符号来分割的多个属性值

#### 1.2 变量引用

​	凡是`css`属性的标准值（比如说1px或者bold）可存在的地方，变量就可以使用。

#### 1.3 变量名用中划线还是下划线分隔

​	`sass`的变量名可以与`css`中的属性名和选择器名称相同，包括中划线和下划线。这完全取决于个人的喜好，使用中划线的方式更为普遍。



### 2. 混合器

当固定样式的重复率不高时可以使用单个变量定义并使用，但当变量过需要大段代码重复使用时可以使用混合器

设定：

```css
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```

在scss中使用：

```css
notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}
```



生成CSS：

```css
.notice {
  background-color: green;
  border: 2px solid #00aa00;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

/* @mixin中的属性被复制过来了 */
```



#### 2.1 给混合器传参

混合器并不一定总得生成相同的样式。可以通过在`@include`混合器时给混合器传参，来定制混合器生成的精确样式。当`@include`混合器时，参数其实就是可以赋值给`css`属性值的变量。

```css
@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
```

当混合器被`@include`时，你可以把它当作一个`css`函数来传参：

```css
a {
  @include link-colors(blue, red, green);
}
```

那么最终将生成：

```css
a { color: blue; }
a:hover { color: red; }
a:visited { color: green; }
```



#### 2.2 默认参数值

为了在`@include`混合器时不必传入所有的参数，我们可以给参数指定一个默认值。参数默认值使用`$name: default-value`的声明形式，默认值可以是任何有效的`css`属性值，甚至是其他参数的引用

```css
@mixin link-colors(
    $normal,
    $hover: $normal,
    $visited: $normal
  )
{
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
```



### 3. 选择器继承

第三种减少重复的主要特性就是选择性继承。指选择器可以通过 @extemd 语法继承另一个选择器定义的所有样式，例如：

```css
/*通过选择器继承继承样式*/
.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```



### 4. 嵌套

在编写 HTML 时，您可能已经注意到它有一个清晰的嵌套和可视化层次结构。 而 CSS 则没有。

Sass 允许您嵌套 CSS 选择器，嵌套方式 与 HTML 的视觉层次结构相同。请注意，过度嵌套的规则 将导致过度限定的 CSS，这可能会导致CSS很难维护



```css
/*使用父选择器*/
article a {
  color: blue;
  &:hover { color: red }
}

/*当包含父选择器标识符的嵌套规则被打开时，它不会像后代选择器那样进行拼接，而是&被父选择器直接替换：*/

article a { color: blue }
article a:hover { color: red }
```



### 5. 导入SASS文件

`@import`规则允许在一个`css`文件中导入其他`css`文件。然而，后果是只有执行到`@import`时，浏览器才会去下载其他`css`文件，这导致页面加载起来特别慢。

`sass`也有一个`@import`规则，但不同的是，`sass`的`@import`规则在生成`css`文件时就把相关文件导入进来。这意味着所有相关的样式被归纳到了同一个`css`文件中，而无需发起额外的下载请求。

import时可以省略文件名的“.scss” 或 “.sass” 后缀 , 如 colors.scss 写作： @import "colors"



#### 局部文件的导入

那些专门为`@import`命令而编写的`sass`文件，并不需要生成对应的独立`css`文件，这样的`sass`文件称为局部文件。

**局部文件的命名**：下划线开头



#### 默认变量值

如果一个变量被多次声明，那么将只有最后一次声明有效



#### 嵌套导入

若有一文件名为“_blue-theme.scss”，内容为：

```css
aside {
  background: blue;
  color: white;
}
```

name将它导入到css中：

```css
.blue-theme {@import "blue-theme"}
```

生成的结果将与如下文件相同：

```css
.blue-theme {
  aside {
    background: blue;
    color: #fff;
  }
}
```

注：

你不能用`sass`的`@import`直接导入一个原始的`css`文件，因为`sass`会认为你想用`css`原生的`@import`。但是，因为`sass`的语法完全兼容`css`，所以你可以把原始的`css`文件改名为`.scss`后缀，即可直接导入了。



在CSS中，我们编写了如下所示的完整代码。

```css
body{
 width: 800px;
 color: #ffffff;
}
body content{
 width:750px;
 background:#ffffff;
}
```



在SCSS中，我们可以使用来缩短此代码，`@mixin`因此我们不必一次又一次地编写`color`和`width`属性。我们可以通过类似于PHP或其他语言的函数来定义它。

```css
$color: #ffffff;
$width: 800px;

@mixin body{
 width: $width;
 color: $color;

 content{
  width: $width;
  background:$color;
 }
}
```



当然，css中也可以设置变量，写法如下：

```css
--primaryColor: #ffffff;
--width: 800px;

body {
    width: var(--width);
    color: var(--primaryColor);
}
.content{
    width: var(--width);
    background: var(--primaryColor);
}
```

但是与`CSS`属性不同，变量可以在`css`规则块定义之外存在。当变量定义在`css`规则块内，那么该变量只能在此规则块内使用。例如：

Nav-color可以在其他规则块中使用，但width只能在nav中使用

```css
$nav-color: #F90;
nav {
  $width: 100px;
  width: $width;
  color: $nav-color;
}

```



## 补充： SASS 

空格敏感，不需要括号，视觉上更干净

```css
$color: #ffffff
$width: 800px
$stack: Helvetica, sans-serif

body
  width: $width
  color: $color
  font: 100% $stack

  content
    width: $width
    background:$color
```


#  