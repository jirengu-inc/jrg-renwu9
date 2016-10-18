---
title: task004
author: Li Xiang
date: 2016-10-11 09:54:53
layout: post
tags: []
categories: []
---

# 任务四学习记录

> # 课程目标
> 知道网页的构成，知道 HTML CSS JS的作用。
> 可写一个简单的 HTML 页面
> 了解 Chrome 审查元素的使用方式
> 对乱码的成因了解
> # 学习建议
> 做首先要把视频完完整整的看一遍，看的过程中可使用leanote做知识整理，记录关键点。
> 之后打开翻墙软件，使用google搜索对应任务的优秀文章、帖子。
> 在理解的基础上，使用自己的语言来回答，切忌直接拷贝。
> 作业使用 markdown 语法来写，包括标题、段落、列表，代码一定要格式化。如需图片可直接将图片拖入或者粘贴到 jscode 即可。保证作业格式的美观、整洁
> 动手才是王道
> 问答题多查一些资料，挖的更深入一些。都是常见面试题，一两句话应付面试官恐怕不会特别满意。

## 课程任务

### 问答

  * **网页乱码**的问题是如何产生的？怎样解决？

  字符集的编码方式和原始字符不匹配导致网页乱码。通过重新设置编码方式解决。

  * **颜色**有几种写法？红色、 绿色、蓝色、白色、黑色如何表示？透明黑色如何表示？`#ccc` 的颜色，#eee的颜色？#333 的颜色？

  写法：颜色名称、RGB、RGB（十六进制）、HSL

  颜色 | 名称 | 十六进制 | RGB
  :---|:-----|:-------|:-----
  红色 | Red | #ff0000/#f00 | `rgb(255,0,0);`
  绿色 | Green | #008000 | `rgb(0,128,0);`
  蓝色 | Blue | #0000ff/#00f | `rgb(0,0,255);`
  白色 | White | #ffffff/#fff | `rgb(255,255,255)`
  黑色 | Black | #000000/#000 | `rgb(0,0,0);`

  透明黑色：rgba(0,0,0,0.3);

  `#ccc`: #cccccc, `rgb(204,204,204);`
  `#eee`: #eeeeee, `rgb(238, 238, 238);`,
  `#333`: #333333, `rgb(51, 51, 51);`

  * `<!DOCTYPE html>` 的作用是什么？

    <!DOCTYPE> 告诉浏览页面使用哪个版本的 HTML。<!DOCTYPE html> 则是告诉浏览器页面是基于 HTML5 标准。

  * **严格模式** 和 **混杂模式** 指什么？

  严格模式（标准模式）：浏览器以其支持的最高标准呈现页面。
  混杂模式（怪异模式）：页面以一种比较宽松的向后兼容的方式显示。混杂模式通常模拟老式浏览器的行为以防止老站点无法工作。
  html5 没有 DTD，也就没有严格模式与宽松模式的区别，html5 有相对宽松的语法，实现时，已经尽可能大的实现了向后兼容。

  参考资料：
  - [HTML_严格模式与混杂模式](http://www.jianshu.com/p/2c381cd4fcf9)

  * `meta` 有什么作用？常见的值有哪些？

    展示元数据信息。常见的值包括：`name` `http-equiv` `charset` `itemprop`。

  * `<meta http-equiv="X-UA-Compatible" content="ie=edge,chrome=1">` 有什么作用？

    定义文档兼容性。

    - http-equiv="X-UA-Compatible": `X-UA-Compatible` 是 IE8 专有的 `<meta>` 属性，它告诉 IE8 采用何种 IE 版本去渲染网页。
    - content="ie=edge,chrome=1": `IE=edge` 告诉IE使用最新的 IE 引擎渲染网页，`chrome=1` 激活Chrome Frame，优先采用 Chrome 渲染。使用 Chrome Frame 可以让用户的 IE 浏览器外观不变，但用户在浏览网页时实际上使用的是 Chrome 的内核，并且支持Windows XP及以上系统的IE6/7/8。这样做的前提是，用户必须已经安装了 Google Chrome Frame。总的来说，如果用户安装了 Chrome Frame 那么使用 Chrome Frame 渲染；如果没有，那么使用最高版本 IE 内核进行渲染。

参考资料：
- [给网站添加X-UA-Compatible标签](http://lightcss.com/add-x-ua-compatible-meta-to-your-website/)
- [关于content=”IE=edge,chrome=1″介绍-让网页优先采用Chrome渲染](http://ziren.org/html-css/content-ie-edge-chrome-1-introduction-web-page-using-chrome-rendering.html)
- [Is it still valid to use IE=edge,chrome=1?](http://stackoverflow.com/questions/22059060/is-it-still-valid-to-use-ie-edge-chrome-1)

  * 常见的浏览器有哪些？什么内核？

  浏览器 | 内核/引擎
  :-----|:--------
  Google Chrome/Chromium | WebKit/**Blink**
  Opera | Presto/**Blink**
  Firefox | Gecko
  Safari | WebKit
  Internet Explorer | Trident
  Microsoft Edge | EdgeHTML

### 参考

[MDN-color](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)

---
其他内容：

HTML：内容 ---> 水泥砖头的毛坯房
CSS：样式 ---> 豪华装修
JS：操作内容，实现功能或效果 ---> 水电防火防盗房诈骗

JS/CSS 前 or 后？

- [JS、CSS 之间的顺序与 HTML 页面的性能关系](http://frontenddev.org/link/js-css-between-the-order-of-the-relationship-with-the-performance-of-the-html-page.html)
- [JS 和 CSS 的位置对其他资源加载顺序的影响](https://lifesinger.wordpress.com/2012/02/03/performance-impact-of-js-css-loading-order/)
- [网站前端性能优化之javascript和css](http://www.haorooms.com/post/web_xnyh_jscss)
- [网站性能优化35计](http://www.w3ctech.com/topic/1416)
- [前端工程与性能优化](http://div.io/topic/371)
- [网站性能优化的三重境界](http://www.raychase.net/311)
- [关于网站性能优化准则](https://segmentfault.com/a/1190000003901620)
