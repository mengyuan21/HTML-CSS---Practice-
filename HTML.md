# HTML 



## 1. 什么是HTML ？

HTML: 一种超文本标记语言，它定义了网页内容的含义与结构。

CSS ： 定义了网页的表现与展示效果

Js： 定义了功能与行为能力

(HTML标签不区分大小写)




## 2. 怎么使用HTML ？

Structor:

```js
<html>
  <head>
  	<title> ... <title>
  <head>
  
  <body>
  ...
  <body>
  
  <footer> ... <footer>
<html>
```



+ HTML中的图片

1. 直接嵌入图片

```js
<img src = "path.jpg" 
	   alt = "text describtion of this img"
		 width = "400"
	   height = "300"
     title = "title of this pic">
```



2. 使用css背景图片

```js
p {
  background-image: url("path.jpg");
}
```



+ 音频与视频

```js
<video>  <video>
```





## 3. HTML与CSS和JS的结合 ？



###  3.1 HTML引入CSS的四种方法

#### （1）行内式

直接在标签中定义CSS样式

```js
<p style = "color: red"> 网页中css的导入方式 <p>
```

适用于格式要求不多且无需复用的标签中



#### （2） 嵌入式

```js
<style type = "text/css"> 
p {
  color = "red"
}  
<style>
```

优点：

速度快，所有的 CSS 控制都是针对本页面标签的，没有多余的 CSS 命令；

不用外链 CSS 文件，直接在 HTML 文档中读取样式。

缺点：

难维护，单个页面代码量相对较多。



#### （3）导入式

```js
<style type="text/css">  

 @import "jisuan.css";  

<style>
```

会在页面装在完成后再装载CSS样式，如果网页体积较大则会先显示无样式的页面，影响用户体验。

#### （4） 链接式

```js
<link href="jisuan.css" rel=”stylesheet” type=”text/css” />
```

会在装载页面主体部分之前装载 CSS 文件，这样显示出来的网页从一开始就是带有样式效果的。



### 

### 3.2 HTML中引入JS的三种方法













