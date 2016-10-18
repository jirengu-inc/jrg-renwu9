---
title: task008
author: Li Xiang
date: 2016-10-18 08:32:46
layout: post
tags: [CSS,selectors]
categories: [CSS]
---

> 课程目标
> 掌握常见 CSS 选择器的用法
> 对选择器优先级有一定认识

# 课程任务 #

## 问答 ##

### CSS选择器常见的有几种? ###

严格来说包括三种：标签选择器、类选择器、ID选择器。属性选择器和关系选择器（后代选择器、子元素选择器、兄弟选择器）也可以是看作前三种的扩充。

### 选择器的优先级是怎样的? ###

元素（或标签）选择器和伪元素选择器 > 类选择器，属性选择器，伪类选择器 > ID 选择器

通用选择器（*），组合选择器（+,>,~,''）和否定伪类（:not()）不会影响优先级（但是，在 `:not()` 内部声明的选择器是会影响优先级的）。

给元素添加内联样式（行内）总会覆盖外部样式表的任何样式，可以看作是具有最高的优先级。

> important > 内联 > id > class > E:hover > E[attr = value] > tag > *

### class 和 id 的使用场景? ###

id 用于 html 页面中仅出现一次的标签，如 `body` `footer` 等。
class 可用于反复出现的标签，合理地对于标签设置类，区分元素，方便样式表的使用。

### 使用CSS选择器时为什么要划定适当的命名空间？ ###

在html中，部分标签使用频繁。如果没有划分区块划定命名空间，在选取时就会导致混乱。一个选择器可能会选取到所有的元素，这导致我们就没办法针对部分元素修改其样式；划定命名空间后，样式修改具有针对性。

### 以下选择器分别是什么意思? ###

``` css
#header{
}
.header{
}
.header .logo{
}
.header.mobile{
}
.header p, .header h3{
}
#header .nav>li{
}
#header a:hover{
}
```

- #header 选择 header id 元素
- .header 选择 header 类元素
- .header .logo 选择 header 类元素下的 logo 类元素
- .header.mobile 选择同时具有 header 和 mobile 类的元素
- .header p, .header h3 选择 header 类下的 p 标签和 h3 标签元素
- #header .nav>li 选择 header id 元素下的 nav 类的第一代 li 标签元素
- #header a:hover 选择 header id 元素下的 a 标签元素，修改鼠标悬停在该元素上时的样式

### 列出你知道的伪类选择器 ###

`:hover` `:visited` `:active`
`:first-line` `:first-letter`
`:first-child` `:nth-child` `:nth-of-type` `:nth-last-child` `:nth-last-of-type`

### :first-child和:first-of-type的作用和区别 ###

`:first-child` 选择父元素的第一个子元素；仅仅选择一个元素；
`:first-of-type` 选择父元素的子元素的所有类的第一个子元素；可能选择多个元素，选择的标准为标签类，每个标签类选第一个子元素。

### 运行如下代码，解析下输出样式的原因。 ###

``` css
<style>
.item1:first-child{
  color: red;
}
.item1:first-of-type{
  background: blue;
}
</style>
 <div class="ct">
   <p class="item1">aa</p>
   <h3 class="item1">bb</h3>
   <h3 class="item1">ccc</h3>
 </div>
```

`.item1:first-child { color: red; }` 将 item1 类的第一个子元素的颜色改为 red；
`.item1:first-of-type { background: blue; }` 将 item1 类的所有类的第一个元素颜色改为 blue；
所以最终 aa 标签元素和 bb 被修改为蓝色，而 ccc 不受影响。

### text-align: center的作用是什么，作用在什么元素上？能让什么元素水平居中 ###

`text-align: center;` 用于行内元素的水平居中对齐；作用在行内元素上。

### 如果遇到一个属性想知道兼容性，在哪查看? ###

可以去 [caniuse](https://caniuse.com) 查看。
