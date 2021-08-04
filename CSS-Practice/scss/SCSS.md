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



### 2. 嵌套

在编写 HTML 时，您可能已经注意到它有一个清晰的嵌套和可视化层次结构。 而 CSS 则没有。

Sass 允许您嵌套 CSS 选择器，嵌套方式 与 HTML 的视觉层次结构相同。请注意，过度嵌套的规则 将导致过度限定的 CSS，这可能会导致CSS很难维护



### 3. k



##  

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