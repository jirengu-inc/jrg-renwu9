---
title: 任务17-函数
author: Li Xiang
date: 2016-11-21
layout: post
tags: [JS]
categories: []
---

# 问答

## 函数声明和函数表达式有什么区别

函数声明

``` javascript
function func(arg0, arg1, ...) {
    // body
}
```

函数表达式：类似于将一个匿名函数赋值给了一个变量。

``` javascript
var func = function(arg0, arg1, ...) {
    // body
}
```

函数声明和函数表达式的区别在于**函数提升**。函数声明具有函数提升，而函数表达式则不行。函数表达式在使用前必须赋值。因为解析器会率先读取函数声明，并使其在执行任何代码之前可用；而函数表达式，必须等到解析器执行到它所在的代码行，才会真正被解释执行。

## 什么是变量的声明前置？什么是函数的声明前置？

**变量的声明前置**
JS 脚本在执行的时候会自动将变量声明前置，在写 JS 脚本时应该尽量将变量声明放在作用域的开始地方。

``` javascript
var a = 1;
function main() {
    console.log(a);
    var a = 2;
}
main() // 输出 undefined
```
事实上，在 `console.log(a)` 之前变量声明前置，即为：

``` javascript
var a; // undefined
console.log(a); // undefined
```

**函数声明前置**
JS 脚本在执行时，也会自动将函数声明前置。

``` javascript
func1(); // 输入：我是函数声明

func2(); // 报错

function func1(){
    console.log("我是函数声明");
}

var func2 = function(){
    console.log("我是函数表达式");
}
```

参考：
- [变量声明前置](http://www.cnblogs.com/xiyangbaixue/p/3934702.html)
- [函数声明前置](http://blog.5ibc.net/p/85833.html)

## arguments 是什么

`arguments` 作为函数的属性用来指代一个类数组的对象，储存传入函数的参数。在递归时，函数多次调用，`arguments` 表示最近调用的函数的参数。当没有函数被调用时，此时 `arguments` 为 `null`。

``` javascript
function f(n) { g(n - 1); }

function g(n) {
  console.log('before: ' + g.arguments[0]);
  if (n > 0) { f(n); }
  console.log('after: ' + g.arguments[0]);
}

f(2);

console.log('returned: ' + g.arguments);

// Output

// before: 1 f(2) = g(2-1) = g(1), g.arguments[0] = 1
// before: 0 1>0, 执行 if 语句, f(1) = g(1-1) = g(0), g.arguments[0] = 0
// after: 0 if语句中的递归，最近调用的为 g(0), g.arguments[0] = 0
// after: 1 回到外层，g(1), g.arguments[0] = 0
// returned: null
```

## 函数的重载怎样实现

**函数重载**：指在一个类中，可以定义多个方法名相同但是方法参数和顺序不相同的方法，以此来实现不同的功能和操作。

实现重载，关键就是使用 JS 中函数的 `arguments` 对象。JS 函数的参数是在函数内部以一个数组来表示传入的参数。无论传入多少参数，什么类型的参数，最终所有参数在 JS 函数里面都是以一个 arguments 对象（参数数组）来表示。

``` javascript
function Sum() {
    if (arguments.length==1) {
        console.log(arguments[0]);
    }
    else if (arguments.length == 2) {
        console.log(arguments[0] + arguments[1]);
    }
    else if (arguments.length > 2) {
        console.log("The number of parameters must be two.");
    } else {
        console.log("Not enough parameters.");
    }
}
```

参考：
- [javascript 实现函数/方法重载效果](http://shiyousan.com/post/635475247708919685)

## 立即执行函数表达式是什么？有什么作用

> 立即调用函数表达式可以令其函数中声明的变量绕过 JavaScript 的变量置顶声明规则，还可以避免新的变量被解释成全域变量或函数名占用全域变量名的情况。与此同时它能在禁止访问函数内声明变量的情况下允许外部对函数的调用。

常见的“立即执行函数表达式”如下：

``` javascript
(function(){
  /* code */
})();
```

``` javascript
(function(){
  /* code */
}());
```

- JavaScript 解释器会在默认情况下把遇到的 `function` 关键字当作函数声明语句（statement） 来进行解释。
- 在 JavaScript 中 `()` 之间只能包含表达式（expression）。
- 解释器把 `()` 中的内容当作表达式（expression）而不是语句（statement）来执行。

`()` 中的匿名函数会被当作表达式执行，然后返回匿名函数，紧接着匿名函数被调用。
拓展开来，只要在函数能被当作表达式的情况下，就能够构建立即执行函数表达式。

例如

``` javascript
var i = function(){ /* code */ }();
true && function(){ /* code */ }();
0, function(){ /* code */ }();
```

### 作用 ###

- 模拟块级作用域，避免变量的污染。
- 解决闭包冲突。
- 模拟单例。

参考：
- [[译] JavaScript：立即执行函数表达式](https://segmentfault.com/a/1190000003985390)
- [JavaScript中的立即执行函数表达式](http://weizhifeng.net/immediately-invoked-function-expression.html)

## 什么是函数的作用域链

在函数被执行时，会创建该函数对象的一个作用域链。作用域链保证了对执行环境有权访问的所有变量和函数的有序访问。当前执行的代码所在环境的变量对象位于作用域链的最前端。如果这个环境是函数，则将其活动对象作为变量对象。函数对象最开始时只包含一个变量，即 arguments 对象。arguments 时函数内部的变量，在全局中并不存在。函数作用域链中的下一个变量对象来自函数外层包含环境，在下一个变量来自又向外一层包含环境，一直延续到全局执行环境。全局执行环境的变量对象始终都是作用域链中最后一个对象。对不同层级执行环境的变量对象的查找是一级一级地由内至外的过程。作用域链实现了内部环境对象对外部环境的访问，而禁止外部环境对象访问内部环境。

# 代码

1.以下代码输出什么？

``` javascript
function getInfo(name, age, sex){
    console.log('name:',name);
    console.log('age:', age);
    console.log('sex:', sex);
    console.log(arguments);
    arguments[0] = 'valley';
    console.log('name', name);
}

getInfo('hunger', 28, '男');
// name: hunger
// age: 28
// sex: 男
// ["hunger", 28, "男"]
// name valley

getInfo('hunger', 28);
// name: hunger
// age: 28
// sex: undefined
// ["hunger", 28]
// name valley

getInfo('男');
// name: 男
// age: undefined
// sex: undefined
// ["男"]
// name valley

```

2. 写一个函数，返回参数的平方和？

``` javascript
function sumOfSquares(){
    var args = arguments;
    if (args.length==1) {
        console.log(args[0]**2);
    } else if (args.length==2) {
        console.log(args[0]**2+args[1]**2);
    } else if (args.length==3) {
        console.log(args[0]**2+args[1]**2+args[2]**2);
    }
}

sumOfSquares(2,3,4);   // 29
sumOfSquares(1,3);   // 10
```

3. 如下代码的输出？为什么

``` javascript
console.log(a);
var a = 1;
console.log(b);

// undefined 变量提升，但此时未赋值
// ReferenceError 变量未声明，故不存在
```

4. 如下代码的输出？为什么

``` javascript
sayName('world');
sayAge(10);
function sayName(name){
    console.log('hello ', name);
}
var sayAge = function(age){
    console.log(age);
};

//hello world 函数声明会提升，所以能够调用通过函数声明创建的函数
//Uncaught TypeError: sayAge is not a function 函数表达式不会提升，此时 sayAge 仅仅是 undefined
```

5. 如下代码的输出？为什么

``` javascript
function fn(){}
var fn = 3;
console.log(fn);

// 3 前面的fn被后面的变量声明覆盖
```

6. 如下代码的输出？为什么

``` javascript
function fn(fn2){
    console.log(fn2);
    var fn2 = 3;
    console.log(fn2);
    console.log(fn);
    function fn2(){
        console.log('fnnn2');
    }
}
fn(10);

// function fn2(){
//      console.log('fnnn2');
//  }
// 在 fn 函数内部执行环境，fn2 函数声明被提升到执行环境前端，
// fn2 实参被覆盖掉。所以 console.log(fn2) 返回的是 fn2 函数内容
//
// 3
// 此时, fn2 又把函数对象 fn2 给覆盖，故第二个 console.log(fn2) 返回
//
// function fn(fn2){
//    console.log(fn2);
//    var fn2 = 3;
//    console.log(fn2);
//    console.log(fn);
//    function fn2(){
//        console.log('fnnn2');
//   }
//}
// console.log(fn); 在局部作用域未找到 fn 但是全局作用域找到，返回 fn 函数内容
```

7. 如下代码的输出？为什么

``` javascript
var fn = 1;
function fn(fn){
    console.log(fn);
}
console.log(fn(fn));

// Uncaught TypeError
// 因为函数声明会提升，之后 fn 被变量声明覆盖，所以 fn 已不是函数，不能对其进行调用
```

8. 如下代码的输出？为什么

``` javascript
//作用域
console.log(j);
console.log(i);
for(var i=0; i<10; i++){
    var j = 100;
}
console.log(i);
console.log(j);

//undefined
//undefined
// 变量声明提升，赋值为 undefined
//
// 10
// 100
//
// for 语句没有块级作用域，声明的变量在全局也能进行访问
// 而 i 在递增到 10 时，for 循环语句结束
// 故 i 为 10，j 为 100
```

9. 如下代码的输出？为什么

``` javascript
fn();
var i = 10;
var fn = 20;
console.log(i);
function fn(){
    console.log(i);
    var i = 99;
    fn2();
    console.log(i);
    function fn2(){
        i = 100;
    }
}

// undefined 函数 fn 提升，然后被调用，console.log(i) 返回 undefined
// 100 函数 fn2 提升，然后被调用，i 覆盖前面声明的 i，被重新赋值为 100，结果 console.log(i) 返回 100
// 10 然后全局变量 i 为 10，console.log(i) 返回 10
```

10. 如下代码的输出？为什么

``` javascript
var say = 0;
(function say(n){
    console.log(n);
    if(n<3) return;
    say(n-1);
}( 10 ));
console.log(say);

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 0
//
// 立即执行函数会立即执行，执行完便从内容中被销毁
// 所以 say 函数并不会覆盖 say 变量，在函数执行完毕
// console.log(say) 仍然返回 say 变量的值
```
