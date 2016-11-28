---
title: 任务16-JS语法
author: Li Xiang
date: 2016-11-12
layout: post
tags: [JavaScript]
categories: []
---

> JavaScript基本概念、基础数据类型、运算符、流程控制语句作业

# 问答

## CSS 和 JS 在网页中的放置顺序是怎样的？

`head` 头部用来声明非渲染的元数据，所以 `script` `link` `style` 按道理应该都放在 `head` 里。
CSS 文件一般在 `head` 处载入；但是，由于 `script` 的加载会阻塞后续网站数据的加载和渲染，所以 JS 也会放在 `body` 的最后载入。如果有多个 CSS 文件，后面的 CSS 文件的优先级更高，即后面的会覆盖前面的，如果存在相同样式。

## 解释白屏和 FOUC

### 白屏

白屏就是在加载页面时，由于样式表没有在页面加载前加载，内容不是渐进渲染，于是会出现一段时间的白屏。等到样式表加载完之后，才对页面进行渲染。

有几种情况会出现：
- 样式表放在底部加载，IE 浏览器在加载页面时会出现白屏
- 使用 `@import` 标签加载样式表也会出现白屏
- 把 JS 脚本放入页面顶部

### FOUC (Flash of Unstyled Content) 无样式内容闪烁

对于 IE 浏览器，在某些场景下，先逐步加载无样式的内容，然后在CSS加载后页面突然出现样式，给人一种闪屏的感觉。
样式放在底部加载会造成 FOUC。

## async 和 defer 的作用是什么？有什么区别

对于没有传入 `async` 和 `defer` 属性的 `script`，浏览器在下载 script 时会静止并发，阻碍后面的资源和文档的加载。并且，浏览器会立即加载并执行脚本。

如果传入了 `async` 属性，脚本的加载与执行并不会阻塞后面的资源和内容的加载。此时，脚本仍然加载后便执行。
如果传入了 `defer` 属性，脚本的加载与资源和内容的加载并行进行，但脚本的执行要在所有元素解析完成后，DOMContentLoaded 事件触发之前完成。

区别：`defer` 会延迟脚本的执行，有顺序；`async` 并不保证顺序。

## 简述网页的渲染机制

网页的渲染由渲染引擎实现。渲染引擎的作用就是在浏览器的屏幕上呈现请求的页面内容。首先渲染引擎从网络层获取请求文档的内容。获取内容之后，开始解析 HTML 文档，并将标签逐个转化成内容树上的 DOM 节点。同时解析外部 CSS 文件以及样式元素中的样式，从而构建 CSSOM 树。然后将 DOM 和 CSSOM 整合成渲染树。渲染树包含多个带有视觉属性的矩形。矩形的顺序就是它们在屏幕上显示的顺序。渲染树构建完成之后，进入布局处理阶段。布局就是计算每个节点在屏幕上的确切坐标。布局之后进行绘制，由用户界面后端层将每个节点绘制出来。

参考：[浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

## JavaScript 定义了几种数据类型? 哪些是简单类型? 哪些是复杂类型?

JS 定义了6种数据类型（ES6新增了 SYMBOL）。
- Number 数值
- String 字符串
- Boolean 布尔值
- undefined 未定义
- null 空值
- Object 对象

简单类型包括：Number，String，Boolean，它们是最基本的数据类型。
复杂类型为 Object，对象往往由多个基础类型的值的合成。

## NaN、undefined、null 分别代表什么?

undefined 和 null 具有一些相似性，都表示“无”的状态。使用`undefined == null;` 会返回 `true`。在 `if` 语句中，两者均被自动转换为 `false`。undefined 表示变量未定义，在对未声明的变量使用 `typeof` 时，返回为 `undefined`。`undefined` 的类型为 `undefined`，而 `typeof null` 返回 `object`。`null` 转换为数值时为 `0`，而 `undefined` 转换数值后为 `NaN`，即 not a number。

`NaN` 是一个特殊的数值，表示“非数值”，用来表示一个本来要返回数值的操作未返回数值的情况。任何涉及 NaN 的操作都会返回 `NaN`。NaN 与任何值都不相等，包括自身。

两者的用法和含义：
`null` 表示空值，即该处的值现在为空。
- 作为函数的参数，表示该函数的参数是一个没有任何内容的对象。
- 作为对象原型链的终点。
`undefined` 表示不存在值。
- 变量被声明，但未被赋值，等同于 `undefined`
- 调用函数时，应该提供的参数没有提供，该参数为 `undefined`
- 对象没有赋值的属性，该属性的值为 `undefined`
- 函数没有返回值时，默认返回 `undefined`

## typeof 和 instanceof 的作用和区别?

- `typeof` 用来判断变量的数据类型。
- `instanceof` 用来判断实例继承关系。`instanceof` 方法要求开发者明确地确认对象为某特定类型。`instanceof` 可以在继承关系中用来判断一个实例是否属于它的父类型。

# 代码

1. 完成如下代码判断一个变量是否是数字、字符串、布尔、函数 （难度*）
ps: 做完后可参考 underscore.js 源码中部分实现

``` javascript
function isNumber(el){
    // todo ...
    console.log(typeof(el)=="number")
}
function isString(el){
    //todo ...
    console.log(typeof(el)=="string")
}
function isBoolean(el){
    //todo ...
    console.log(typeof(el)=="boolean")
}
function isFunction(el){
    //todo ...
    console.log(typeof(el)=="function")
}

var a = 2,
    b = "jirengu",
    c = false;
alert( isNumber(a) );  //true
alert( isString(a) );  //false
alert( isString(b) );  //true
alert( isBoolean(c) ); //true
alert( isFunction(a)); //false
alert( isFunction( isNumber ) ); //true
```

2. 以下代码的输出结果是?（难度**）

``` javascript
console.log(1+1); // 2
console.log("2"+"4"); // 24
console.log(2+"4"); // 24
console.log(+new Date()); // 当前时间距1970-1-1 UTC午夜的时间，转换单位为毫秒，如 1479352704104
console.log(+"4"); // 4
```

3. 以下代码的输出结果是? （难度***）

``` javascript
var a = 1;
a+++a; // 3, a++ = 2, a++ + a = 3

typeof a+2; // number2
```

4. 遍历数组，把数组里的打印数组每一项的平方 （难度**）

``` javascript
var arr = [3,4,5]
// todo..
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]**2)
}
// 输出 9, 16, 25
```

5. 遍历 JSON, 打印里面的值 （难度**）

``` javascript
var obj = {
  name: 'hunger',
  sex: 'male',
  age: 28
}
//todo ...
for (var key in obj) {
    console.log(key + ": " + obj[key]);
}
// 输出 name: hunger, sex: male, age:28
```

6. 下面代码的输出是? 为什么 （难度***）

``` javascript
console.log(a); // undefined
var a = 1;
console.log(a); // 1
console.log(b); // ReferenceError
```
