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

* push 向一个数组的末尾添加一个或多个元素，并返回新的长度的数据。
* pop 将数组末尾的元素从数组中移除，并且返回该元素，该方法会改变数组的长度。
* shift 将数组的第一个元素从数组中移除，并且返回该元素，该方法会改变数组的长度。
* unshift 向一个数组的前端添加一个或多个元素，并返回新的长度的数组。
* join 将数组中的元素连接成字符串；该方法可以传入一个可选参数 `separator`，即元素之间连接起来的分隔符。
* split 将一个字符串对象以某一个分隔符来分割成字符串数组。该方法可以传入两个可选参数，一个是分隔符，一个是代表分割数目的限制的整数。

``` javascript
var stringToSplit = "hello, javascript!";

// 没有参数传入
stringToSplit.split();

// 直接返回长度为1的数组
// ["hello, javascript!"]

// 传入分隔符在字符串中不存在
stringToSplit.split("-");

// 仍然返回长度为1的数组
// ["hello, javascript!"]

// 传入在字符串中存在的分隔符
stringToSplit.split(",");

// 返回被分割的字符串数组
// ["hello", " javascript!"]

// 传入 limit 参数
stringToSplit.split(",", 1);

// 返回的数组长度为限制数
// ["hello"]

// 传入空字符串分隔符
stringToSplit.split("");

// 返回所有字符组成的数组

// 还可以传入正则表达式
stringToSplit.split(/([eoai])/);
```

# 代码题

## 数组

### 用 splice 实现 push、pop、shift、unshift方法

``` javascript
// push
function Push(arr, add) {
    arr.splice(arr.length, 0, add);
    console.log(arr[arr.length-1]);
    return arr;
}
```

``` javascript
// pop
function Pop(arr) {
    arr.splice(-1);
    return arr;
}
```

``` javascript
// shift
function Shift(arr) {
    arr.splice(0);
    return arr;
}
```

``` javascript
// unshift
function unShift(arr, add) {
    if (typeof(add)=="number") {
        arr.splice(0,0,add);
    } else if (typeof(add)=="object") {
        for (var i = add.length-1; i >= 0; i--) {
        arr.splice(0,0,add[i]);
        }
    }
    return arr;
}
```

### 使用数组拼接出如下字符串

``` javascript
var prod = {
    name: '女装',
    styles: ['短款', '冬季', '春装']
};

function getTplStr(data){

    var dldt = ["<dl class='product'>\n", "\t<dt>", "</dt>\n", "</dl>"];
    dldt.splice(2,0,data.name);
    var dd = [];
    var styles = data.styles;

    for (var i = 0; i < styles.length; i++) {
        var ddtmp = ["\t<dd>", "</dd>\n"];
        ddtmp.splice(1,0,styles[i]);
        dd.push(ddtmp.join(""));
    }

    dldt.splice(4,0,dd.join(""));
    return dldt.join("");
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

-------------------------------------------------------------------------------

### 写一个find函数，实现下面的功能

``` javascript
var arr = [ "test", 2, 1.5, false ]

// find
function find(arr, element) {
    return arr.indexOf(element);
}

find(arr, "test") // 0
find(arr, 2) // 1
find(arr, 0) // -1
```

### 写一个函数filterNumeric，把数组 arr 中的数字过滤出来赋值给新数组newarr， 原数组arr不变

``` javascript
arr = ["a", "b", 1, 3, 5, "b", 2];

// filterNumeric
function filterNumeric(arr) {
    var outArray = [];
    for (i = 0; i<arr.length; i++) {
        if (typeof(arr[i])==="number") {
             outArray.push(arr[i]);
        }
    };
    return outArray;
}

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

``` javascript
// addClass
function addClass(obj, str) {
    var objArray = obj.className.split(/\s/);
    if (objArray.indexOf(str)===-1) { objArray.push(str); }
    if (objArray[0]==="" && objArray.length===2) {
        return obj.className = objArray.join('');
    } else {
        return obj.className = objArray.join(' ');
    }
}

// removeClass
function removeClass(obj, str) {
    var objArray = obj.className.split(/\s/);
    var indx = objArray.indexOf(str);
    if (indx>=0) {
        objArray.splice(indx, 1);
        return obj.className = objArray.join(' ');
    }
}
```


### 写一个camelize函数，把my-short-string形式的字符串转化成myShortString形式的字符串，如

``` javascript
camelize("background-color") == 'backgroundColor'
camelize("list-style-image") == 'listStyleImage'
```

``` javascript
function camelize(str) {
    var str2Array = str.split('-');
    for (i = 1; i < str2Array.length; i++) {
        str2Array[i] = str2Array[i].substr(0,1).toUpperCase()+str2Array[i].substr(1,str2Array[i].length-1);
    }
    return str2Array.join('');
}
```

### 如下代码输出什么？为什么?

``` javascript
arr = ["a", "b"];
arr.push( function() { alert(console.log('hello hunger valley')) } );
arr[arr.length-1]()  // hello hunger valley 因为push到数组的为一个匿名函数。
```

### 写一个函数isPalindrome,判断一个字符串是不是回文字符串（正读和反读一样，比如 abcdcba 是回文字符串， abcdefg不是）

``` javascript
//isPalindrome
function isPalindrome(str){
    var arr = str.split('');
    var arr2 = [];
    for (i = arr.length-1; i >= 0; i--) {
        arr2.push(arr[i]);
    }
    return str===arr2.join('');
}
```

-------------------------------------------------------------------------------

### 写一个ageSort函数实现数组中对象按age从小到大排序

``` javascript
var john = { name: "John Smith", age: 23 }
var mary = { name: "Mary Key", age: 18 }
var bob = { name: "Bob-small", age: 6 }
var people = [ john, mary, bob ]
ageSort(people) // [ bob, mary, john ]
```

``` javascript
function ageSort(arr) {
    var oldArrAge = arr.map(function(el) { return el.age; });
    var newArrAge = oldArrAge.sort().reverse();
    var newArr = [];
    for (i=0;i<arr.length;i++) {
        var indx = oldArrAge.indexOf(newArrAge[i]);
        newArr.push(arr[indx]);
    }
    return newArr;
}
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

``` javascript
function filter(arr, callback) {
    var outArray = [];
    if (typeof(callback)!=="function") {
        Console.error('The 2nd parameter must be a function.');
    }
    for (i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            outArray.push(arr[i]);
        }
    }
    return outArray;
}
```

## 字符串

### 写一个 ucFirst函数，返回第一个字母为大写的字符

``` javascript
ucFirst("hunger") == "Hunger"
```

``` javascript
function ucFirst(str) {
    if (str.length>=1) {
        return str[0].toUpperCase()+str.slice(1,str.length);
    }
}
```

### 写一个函数truncate(str, maxlength), 如果str的长度大于maxlength，会把str截断到maxlength长，并加上...，如

``` javascript
truncate("hello, this is hunger valley,", 10) == "hello, thi...";
truncate("hello world", 20)) == "hello world"
```

``` javascript
function truncate(str, maxLength){
    while (str.length > maxLength) {
        return str.slice(0,maxLength)+'...';
    }
    return str;
}
```

## 数学函数

### 写一个函数，获取从min到max之间的随机整数，包括min不包括max

``` javascript
function randInt(min, max) {
    return Math.floor(min+Math.random()*(max-min));
}
```

### 写一个函数，获取从min都max之间的随机整数，包括min包括max

``` javascript
function randInt(min, max) {
    return Math.floor(min+Math.random()*(max-min+1));
}
```

### 写一个函数，获取一个随机数组，数组中元素为长度为len，最小值为min，最大值为max(包括)的随机整数

``` javascript
function randIntArray(min, max, len) {
    var i = 0, newArray = [];
    while (i < len) {
        newArray.push(randInt(min, max));
        i++;
    }
    return newArray;
    function randInt(min, max) {
        return Math.floor(min+Math.random()*(max-min+1));
    }
}
```

### 写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z

``` javascript
function getRandStr(len){
  var i = 0,
  newStr = '';
  var str = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  while(i < len) {
    newStr += str[randInt()];
    i++;
  }
  return newStr;
  function randInt(){
    return Math.floor(Math.random()*(str.length+1));
  }
}

var str = getRandStr(10); // 0a3iJiRZap
```

ps：自己全部实现一遍后再看我写的参考答案 http://jscode.me/topic/413/部分答案
