# SCSS

## 什么是SCSS ？

scss是css的超集，**所有有效的 CSS 也同样都是有效的 SCSS** ，可以通过vs code插件转换CSS和SCSS的语法



## SCSS的特点 ？ 

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