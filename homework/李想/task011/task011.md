---
title: 任务11-inline-block、BFC、边距合并
author: Li Xiang
date: 2016-10-23 21:02:04
layout: post
tags: []
categories: []
---

# 问题 #

## 在什么场景下会出现外边距合并？如何合并？如何不让相邻元素外边距合并？给个父子外边距合并的范例 ##

> 块级元素的 上外边距（margin-top） 与 下外边距（margin-bottom） 有时会合并（塌陷）为单个外边距（较大者），这样的现象称之为 外边距合并(塌陷)。

三种情形会出现外边距合并：

- 毗邻兄弟元素
- 块级父元素与其第一个/最后一个子元素
- 空块元素

浮动及绝对定位元素外边距不会合并。

阻止父子元素外边距合并：
- 设置 overflow: hidden;（不为 visible 都可）。
- 由于 margin 需要直接接触才能够合并，根据盒子模型，我们可以设置父元素的边框或内边距，或者使用某些元素将第一个元素和父元素隔开（那就不是第一个元素了）。

> 相邻块级盒子（同胞）之间的垂直外边距只有在它们处于同一个BFC时才会发生折叠。如果它们分属于不同的BFC，就不会折叠了。所以，通过创建新的BFC我们可以避免外边距折叠。

阻止以上三种情况的外边距合并：
- 只有在静态流的元素才会发生外边距合并，故设置 float, position: absolute; 都可以使得外边距在何种情况都不合并。
- inline-block 是个例外，它既没有脱离文档流，但是它的所有的外边距都不会合并。

父子外边距合并范例：

[Codepen](http://codepen.io/lix90/pen/ozOaLj?editors=1100#0)

参考资料：

[Collapsing margins——合并的外边距](http://geekplux.com/2014/03/14/collapsing_margins.html)

## 去除 inline-block 内缝隙有哪几种常见方法? ##

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


## 父容器使用 overflow: auto | hidden 撑开高度的原理是什么？ ##

- `overflow: auto;` 自动溢出
- `overflow: hidden;` 隐藏溢出

上面两种 overflow 属性值通过创建新的块级格式化上下文来撑开高度。

## BFC 是什么？如何形成 BFC，有什么作用? ##

块级格式化上下文（Block formatting context，BFC）是网页 CSS 视觉渲染的一部分，用于决定块盒子的布局。

> 浮动、绝对定位元素（position 为 absolute 或 fixed）、行内块元素 display:inline-block、表格单元格 display:table-cell、表格标题 display:table-caption 以及 overflow 属性值不为 visible 的元素（除了该值被传播到视点 viewport 的情况）将创建一个新的块级格式化上下文。

以下几种属性值都能创建新的块级格式化上下文：

- float 的值不为 none
- position 的值不为 static 或 relative
- display 的值为 table-cell、table-caption、inline-block、flex 或 inline-flex
- overflow 的值不为 visiable

可以通过 BFC：

- 避免外边距折叠
- 包含浮动
- 使用 BFC 避免文字环绕
- 避免多列布局最后一列的下掉

## 浮动导致的父容器高度塌陷指什么？为什么会产生？有几种解决方法 ##

浮动的元素脱离了普通流，这样使得包含它的父元素并不会因为这个浮动元素的存在而自动撑高，这样就会造成高度塌陷。

可以通过触发浮动元素父元素的 BFC 使得该父元素可以包含浮动元素。

- 使用空 DIV 方法
- overflow 法：触发 BFC
- clearfix 法：构建 after 伪元素

## 以下代码每一行的作用是什么？为什么会产生作用？和 BFC 撑开空间有什么区别？ ##

``` css
.clearfix:after{
    content: '';
    display: block;
    clear: both;
}
.clearfix{
    *zoom: 1;
}
```

`.clearfix:after` 声明 clearfix 类元素的 after 伪元素样式
`content: '';` 添加内容属性
`display: block;` 将 after 伪元素显示模式为块级元素
`clear: both;` 清除左右浮动
`zoom: 1;` 触发 IE 浏览器的 haslayout；解决 IE 下的浮动，margin 重叠等问题。

上面的代码可用于浮动清除。这种清除浮动的方式使用的是清除属性，并未触发 BFC。触发 BFC 时，父元素总会包裹其子元素，从而解决清除浮动对容器的高度塌陷问题。（疑问？）

# 代码 #

## 实现如下效果的导航条 ##

[Codepen](http://codepen.io/lix90/pen/GjLzVx)

## 利用BFC的原理实现下图所示两栏布局 ##

``` html
<div id="header">header</div>
<div id="content">
    <div class="aside">aside</div>
    <div class="main">
        我是main
        我是main 我是main 我是main 我是main 我是main 我是main 我是main 我是main 我是main 我是main 我是main...
    </div>
</div>
<div id="footer"></div>
```

[Codepen](http://codepen.io/lix90/pen/jrRRNA)
