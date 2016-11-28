## 问答

### 一、CSS和JS在网页中的放置顺序是怎样的？
-  使用link标签将css样式表放在顶部
-  将`<script></script>`放在尾部

### 二、解释白屏和FOUC

1. 先把样式加载完汇总再渲染的浏览器
2. 先把内容加载出来等发现样式的时候再去绘制一遍的浏览器

- 如果是1类浏览器如果将css放在后面，因为等待时间加上自身的下载时间，会出现长时间白屏,如果是使用@import标签引入css也会出现白屏现象[@import见简书](http://www.jianshu.com/p/d35dca8dea3e)
- 如果是2类浏览器会出现Flash of Unstyled Content
- 若未将js放在底部，脚本禁用并发并阻塞其他内容下载并呈现，导致白屏或者内容加载到一半停住的情况。

### 三、async和defer的作用是什么？有什么区别
- 作用：如果将js放在`<head>`内，ayync和defer延迟加载script.js，实现异步加载防止阻塞后面内容呈现和在组件下载。
- 区别：

1. defer延迟到文档解析和显示后执行，有顺序（在现实中浏览器不一定按顺序执行也不一定在DomContentload执行之前完成。但是未来肯定会越来越遵从ECMA而规范。）
2. async加载完js后马上执行，无顺序。谁快谁先上。
3. 兼容性：async>IE9，defer<=9会有bug.

- 操作dom的脚本不用async和defer(或者该部分脚本回调)
- 执行脚本和页面执行共用一个线程，不能同时进行。
- [携程](http://ued.ctrip.com/blog/script-defer-and-async.html#)
- [segmentfault1](https://segmentfault.com/q/1010000000640869)
- [segmentfault2](https://segmentfault.com/a/1190000006778717)

### 四、简述网页的渲染机制
- 解析HTML标签，构建DOM树
- 解析CSS标签，构建CSSOM树
- 把DOM和CSSOM组合成渲染树(render tree)
- 在渲染树的基础上进行Layout，定位坐标和大小，是否换行，各种positiono，verflow，z-index属性
- 把每个节点绘制到屏幕上
- 某些动态Js修改DOM属性或是修改css属性会导致重新layout
- Reflow重新验证并计算Render Tree并layout，Repaint重新layout

- [参考](http://coolshell.cn/articles/9666.html)
- [How to browsers work译文](http://www.cnblogs.com/lhb25/p/how-browsers-work.html#CSS_parsing)

### 五、JavaScript 定义了几种数据类型? 哪些是简单类型?哪些是复杂类型?

- 6+Symbol类型
- 简单：number/string/boolean/undefined/null
- 复杂：object{object狭义/数组/函数}

### 六、NaN、undefined、null分别代表什么?

- NaN（not a number）:本质是number类型，是js的特殊值，主要出现在将字符串解析成数字出错的场合。
- underfined和null是两种特殊的数据类型。
- undefined:系统为变量分配了内存地址有指针。但未给变量赋值。

1. 如调用函数时该传递的参数未提供
2. 对象没有赋值的属性
3. 函数没有返回值时默认返回undefined

- null:空指针。表示一个值被定义了，定义为空值，即该处的值现在为空。比如，调用函数时，不需要传入某个参数，这时就可以传入null。

### 七、typeof和instanceof的作用和区别?

- 两者都是数据类型

1. typeof运算符：返回一个值的数据类型（number|string|boolean|function|undefined|object）
2. instanceof运算符:区分object类型里面{window|函数|数组|null}instanceof运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
