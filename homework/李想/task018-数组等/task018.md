---
title: 任务18-数组-字符串-数学函数
author: Li Xiang
date: 2016-11-21
layout: post
tags: []
categories: []
---

# 问答

## 数组方法里 push、pop、shift、unshift、join、split 分别是什么作用。

# 代码题

## 数组

### 用 splice 实现 push、pop、shift、unshift方法

### 使用数组拼接出如下字符串

``` javascript
var prod = {
    name: '女装',
    styles: ['短款', '冬季', '春装']
};
function getTpl(data){
//todo...
};
var result = getTplStr(prod);  //result为下面的字符串
```

``` html
<dl class="product">
    <dt>女装</dt>
    <dd>短款</dd>
    <dd>冬季</dd>
    <dd>春装</dd>
</dl>
```

### 写一个find函数，实现下面的功能

``` javascript
var arr = [ "test", 2, 1.5, false ]
find(arr, "test") // 0
find(arr, 2) // 1
find(arr, 0) // -1
```

### 写一个函数filterNumeric，把数组 arr 中的数字过滤出来赋值给新数组newarr， 原数组arr不变

``` javascript
arr = ["a", "b", 1, 3, 5, "b", 2];
newarr = filterNumeric(arr);  //   [1,3,5,2]
```

### 对象obj有个className属性，里面的值为的是空格分割的字符串(和html元素的class特性类似)，写addClass、removeClass函数，有如下功能：

``` javascript
var obj = {
  className: 'open menu'
}
addClass(obj, 'new') // obj.className='open menu new'
addClass(obj, 'open')  // 因为open已经存在，所以不会再次添加open
addClass(obj, 'me') // me不存在，所以 obj.className变为'open menu new me'
console.log(obj.className)  // "open menu new me"

removeClass(obj, 'open') // 去掉obj.className里面的 open，变成'menu new me'
removeClass(obj, 'blabla')  // 因为blabla不存在，所以此操作无任何影响
```

### 写一个camelize函数，把my-short-string形式的字符串转化成myShortString形式的字符串，如

``` javascript
camelize("background-color") == 'backgroundColor'
camelize("list-style-image") == 'listStyleImage'
```

### 如下代码输出什么？为什么?

``` javascript
arr = ["a", "b"];
arr.push( function() { alert(console.log('hello hunger valley')) } );
arr[arr.length-1]()  // ?
```

### 写一个函数isPalindrome,判断一个字符串是不是回文字符串（正读和反读一样，比如 abcdcba 是回文字符串， abcdefg不是）


### 写一个ageSort函数实现数组中对象按age从小到大排序

``` javascript
var john = { name: "John Smith", age: 23 }
var mary = { name: "Mary Key", age: 18 }
var bob = { name: "Bob-small", age: 6 }
var people = [ john, mary, bob ]
ageSort(people) // [ bob, mary, john ]
```

### 写一个filter(arr, func) 函数用于过滤数组，接受两个参数，第一个是要处理的数组，第二个参数是回调函数(回调函数遍历接受每一个数组元素，当函数返回true时保留该元素，否则删除该元素)。实现如下功能：

``` javascript
function isNumeric (el){
    return typeof el === 'number';
}
arr = ["a",3,4,true, -1, 2, "b"]

arr = filter(arr, isNumeric) ; // arr = [3,4,-1, 2],  过滤出数字
arr = filter(arr, function(val) { return  typeof val === "number" && val > 0 });  // arr = [3,4,2] 过滤出大于0的整数
```

## 字符串

### 写一个 ucFirst函数，返回第一个字母为大写的字符

``` javascript
ucFirst("hunger") == "Hunger"
```

### 写一个函数truncate(str, maxlength), 如果str的长度大于maxlength，会把str截断到maxlength长，并加上...，如

``` javascript
truncate("hello, this is hunger valley,", 10)) == "hello, thi...";
truncate("hello world", 20)) == "hello world"
```

## 数学函数

### 写一个函数，获取从min到max之间的随机整数，包括min不包括max
### 写一个函数，获取从min都max之间的随机整数，包括min包括max
### 写一个函数，获取一个随机数组，数组中元素为长度为len，最小值为min，最大值为max(包括)的随机整数
### 写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z

``` javascript
function getRandStr(len){
  //todo...
}
var str = getRandStr(10); // 0a3iJiRZap
```

ps：自己全部实现一遍后再看我写的参考答案 http://jscode.me/topic/413/部分答案
