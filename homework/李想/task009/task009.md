---
title: task009
author: Li Xiang
date: 2016-10-20 18:13:53
layout: post
tags: [CSS,盒模型]
categories: [CSS]
---

> 课程目标
> 掌握盒模型相关知识点
> 了解IE盒模型和W3C 盒模型区别

# 课程任务 #

## 问答 ##

### 盒模型包括哪些属性 ###

盒模型是 CSS 中的一个很重要的概念，它是元素大小的呈现方式。盒模型是浏览器用来计算元素总宽度和高度的保证。页面中任何一个元素都是一个矩形盒子。

> 盒子模型最典型的应用是这样：我们有一段内容，可以为这段内容设置一个边框，为了让内容不至于紧挨着边框，可以设置 padding ，为了让这个盒子不至于和别的盒子靠得太紧，可以设置 margin。

margin：外边距，盒子与盒子之间的距离
border：外边框，盒子的边框
padding：内边距，盒子内容的留白
content：内容

### text-align: center的作用是什么，作用在什么元素上？能让什么元素水平居中 ###

`text-align: center` 行内元素的水平居中对齐，作用在行内元素上，能让行内元素水平居中。

### 如果遇到一个属性想知道兼容性，在哪查看? ###

caniuse.com

### IE 盒模型和W3C盒模型有什么区别? ###

传统 IE 盒模型和 W3C 盒模型的差别在于计算元素尺寸上。传统 IE 盒子模型中，盒子的尺寸包含了内容区，padding， border 和 margin 这四个部分，而 W3C 的盒子模型中，盒子的尺寸只包含内容区，padding，border 和 margin 被排除在盒子尺寸之外。

### 以下代码的作用？兼容性？ ###

``` css
*{
    box-sizing: border-box;
}
```
页面所有元素都以 `border-box` 盒模型为标准，即传统 IE 的盒模型，计算内容宽度时以 border 为分界。浏览器默认盒模型为 `content-box`。

[border-box 兼容性](http://caniuse.com/#feat=css3-boxsizing)

## 代码 ##

写一个 btn 的class， 任何 a，span,div,button 添加此class后后变成如下按钮的样式(鼠标hover背景色#c14d21, 鼠标按下背景色#e25f31)

``` html
<a class="btn" href="#">确定</a>
<span class="btn" >取消</span>
<div class="btn">提交</div>
<button class="btn"> 发送</button>
```

![图片](http://7xpvnv.com2.z0.glb.qiniucdn.com/49bf909c-9ad6-420c-be68-2f68d8f12d60)

[按钮效果图](http://codepen.io/lix90/pen/qaQvRv?editors=1100)

---

# 笔记 #

## 关于 inline-block 的问题 ##

真正意义上的 inline-block 水平呈现的元素间，换行显示或空格分隔的情况下会有间距。IE8-9、Firefox、Safari等浏览器，inline-block 之间会留下空隙（4px）。而在 Chrome 下空隙为 8px。

消除空白间隙有多种方法：

1. 改变 HTML 结构
2. 负 margin 方法：`margin-right: -4px`。这种解决方法并不完美，如果你的父元素设置的字号不一样，可能你的“-4px”就不能解决问题。况且在 Chrome 中你需要另外设置一个负的 margin 值才能实现同等的效果。这种方法受字体大小影响。
3. 设置父元素字体为 0：在 safari 下问题依然存在。
4. 丢失结束标签
5. jQuery 方法
6. 使用 float 或者 flexbox 替代

全兼容的样式解决方法：在父元素中设置 `font-size: 0;` 来兼容 Chrome，而使用 `letter-spacing: -4px;` 兼容 safari。

- [如何解决inline-block元素的空白间距](http://www.w3cplus.com/css/fighting-the-space-between-inline-block-elements)
- [去除inline-block元素间间距的N种方法](http://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)
- [Fighting the Space Between Inline Block Elements](https://css-tricks.com/fighting-the-space-between-inline-block-elements/)

---

FrankFang：搜索引擎一般只看 meta title a h1
