

# JS



## 1. var / let / const 的区别

**reference**：https://chinese.freecodecamp.org/news/javascript-var-let-and-const/



 ES6  => **let** / **const**  => block-scoped variable

```js
function start() {
  for(let i =0; i <5; i++ ) {
    console.log(i) //return: 0 1 2 3 4
  }
  console.log(i) // Error: i is undefined
}

```

```js
function start() {
  for (let i =0; i <5; i++ ) {
    if(true) {
      var color = "red"
    }
  }
  console.log(i)  // return: color is undefind
}
```

**var** => function-scoped variable

```js
function start() {
  for(var i =0; i <5; i++ ) {
    console.log(i) //return: 0 1 2 3 4
  }
  console.log(i) // return: 5
}
```

```js
function start() {
  for (var i =0; i <5; i++ ) {
    if(true) {
      var color = "red"
    }
  }
  console.log(i)  // return: red
}
```

Window Object：

var将会把值放入window中，当三方library时如果和var变量重名， 那么变量会被重写，引发不必要的麻烦

```js
var color = 'red';
//将被放入window object中 =>  window.color: red

let age = 30;
//不会被放入  => window.age : undefind
```

+ **var** : 	var是全局变量， let / const 不是；

  ​			var 和 let可以不赋值直接定义，const不可以;

  ​			 可以随时直接更改值或形式（reassigned）

  

  ```js
  if(true) {
    var color = "purple"
  }
  
  console.log(color)   
  //it will return purple
  
  ------------------------------------------------
  
  if(true) {
    let/const color = "purple"
  }
  
  console.log(color)
  //Error: color is indefined
  
  
  -------------------------------------------------
  var color;
  color = "bule"
  
  let animal;
  animal = "dog"
  
  //Error:const在设定时就必须赋值 
  const people;
  
  ---------------------------------------------------
  
   // var can reassigned value
  var x = 10;
  var x = "safd";  
  
  ```

  

+  **let** :   let可以被修改但是不能被重新声明

        ```js
        //Correct: 修改
        let animal = "pig";
        animal = 1234;
        
        //Error： Identifier "x" has already been declared
        let x = 10;
        let x = "safd";
        ```



+  **const** :   不能被修改也不能被重新声明；

   				const声明的变量保持常量值；

  ​				block-scope；

```js
const pet = 'pig'
// Error: 不能直接改变值，只能update
pet = 'dog'

---------------------------------------------
//Correct:  
const people = ["Steph", "Klay"]
people[1] = "David"
people.push("Kevien")


---------------------------------------------
const greeting = {
  words: 'Hello';
  number: 'five'; 
}
greeting.message = 'say hello instead'

//return:
greeting {
  words:'Hello';
  number:'five';
  message:'say hello instead'
}
```



## 2. JS 与 ES6 的关系

reference：https://blog.csdn.net/asahinokawa/article/details/81289852 



+ **ES6是一种标准，JavaScript是ES6的一种实现**



### 2.1 js与node.js

JS是由ES(ECMAScript)、DOM(浏览器文档对象)、BOM(浏览器对象模型)组成。

其中Node.Js就只有ES，目前浏览器比较流行的版本就是ES6(ES2015)，老浏览器的版本基本上都是ES5。所以alert和document不能在Node运行(因为Node没有dom和bom)


### 2.2 ES6简介

ES6是JavaScript语言的下一代标准，在2015年6月正式发布。它的目标是使得JavaScript语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

### 2.3 ES6与JS的关系

JavaScript的创造者Netscape公司，决定将JavaScript提交给国际标准化组织ECMA，希望这种语言能够成为国际标准。次年，ECMA发布262号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为ECMAScript，这个版本就是1.0版。

因此，ECMAScript和JavaScript的关系是，前者是后者的规格，后者是前者的一种实现（另外的ECMAScript方言还有Jscript和ActionScript）。日常场合，这两个词是可以互换的。



## HTML

## 1. figure与img标签的区别

Figure 允许包含img标签，并且可以给img添加底部的描述内容，通过<figcaption>完成

```html
<figure>
    <img src="/media/cc0-images/elephant-660-480.jpg"
         alt="Elephant at sunset">
    <figcaption>An elephant at sunset</figcaption>
</figure>
```



## 2. Strong / bold

```html
<strong> Contents... </strong>
```

```html
<b> Contents... </b>
```

<b>这个标签对应bold，即文本加粗，其目的仅仅是为了加粗显示文本，是一种样式／风格需求； <strong>这个标签意思是加强，表示该文本比较重要，提醒读者／终端注意。 为了达到这个目的，浏览器等终端将其加粗显示；

 总结：<b>为了加粗而加粗，<strong>为了标明重点而加粗。



## 3. i / em标签



### 3.1 i标签

<i> 标签显示斜体文本效果。

<i> 标签和基于内容的样式标签 <em>类似。它告诉浏览器将包含其中的文本以斜体字（italic）或者倾斜（oblique）字体显示。如果这种斜体字对该浏览器不可用的话，可以使用高亮、反白或加下划线等样式。



### 3.2 em标签

<em> 标签告诉浏览器把其中的文本表示为强调的内容。对于所有浏览器来说，这意味着要把这段文字用斜体来显示。

在文本中加入强调也需要有技巧。如果强调太多，有些重要的短语就会被漏掉；如果强调太少，就无法真正突出重要的部分。这与调味品一样，最好还是不要滥用强调。

尽管现在 <em> 标签修饰的内容都是用斜体字来显示，但这些内容也具有更广泛的含义，将来的某一天，浏览器也可能会使用其他的特殊效果来显示强调的文本。

**如果你只想使用斜体字来显示文本的话，请使用 <i> 标签。**除此之外，文档中还可以包括用来改变文本显示的级联样式定义。

除强调之外，当引入新的术语或在引用特定类型的术语或概念时作为固定样式的时候，也可以考虑使用 <em> 标签。



## 4. Blockquote / q  / cite 标签的区别

reference: https://www.php.cn/div-tutorial-374533.html

### 4.1 格式不同

1、：q标签是行内元素，在内容的开始和结尾处会包有【“”】；
2、：blockquote是块级元素，默认带有左右40px的外间距，不带【“”】。

### 4.2语义不同

1、：引用的是小段文字；
2、：引用的是大段的内容块

不同的是，q标签是行内元素，在内容的开始和结尾处会包有“”，而 blockquote是块级元素，默认带有左右40px的外间距，不带“”。

从语义上讲，前者引用的是小段文字，后者引用的是大段的内容块





