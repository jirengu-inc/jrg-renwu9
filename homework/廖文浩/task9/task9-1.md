### 盒模型
先用一个demo直观的表示一下content, padding, border, margin的数值与结构关系：    
[点击查看Box_model_demo](http://js.jirengu.com/riya/1/edit?html,css,output)
![示意图](https://ww1.sinaimg.cn/large/006y8lVagw1fb6jjckxfcj30ed0gvt99.jpg)    
根据这张图，在不设置box-sizing的默认(content-box)盒子模型下，我们可以得到一个公式：
> 总高/宽(占据的实际空间) = width or height + 2padding + 2border_width + 2margin;    

**注意： 此时width的数值是样式设置值，也就是内容区的宽度**    

- 以上属于W3C标准盒子模型(chrome/ie9+/ie6/7/8, 有doctype)的计算方式    
- 而在i.e.这个老大难中，有一个怪异模式(ie6/7/8)，即在文档开头不声明文档头<!DOCTYPE html>时，盒子模型里的`width`的计算方式是：     

> width or height = content_(width or height) + 2padding + 2boder_width;

所以它们的区别仅在与`width`的计算规则，使用`box-sizing: border-box；`即可模拟i.e.盒模型。

#### 相关属性
- 内容流系列： `overflow`, `overflow-x`, `overflow-y`, `box-sizing`, `box-decoration-break` (这个比较有意思，[点击看demo](http://js.jirengu.com/tolu/7/edit?html,css,output));
- size系列： `height`, `width`, `min-height`, `max-height`, `max-width`, `min-width`
- `margin`/`padding`: top, right, bottom, left
- 其他： `box-shadow`

---
### text-align: center的作用是什么，作用在什么元素上？能让什么元素水平居中
使块级元素的inline or inline-block or 文字子元素居中对齐。    

### 如果遇到一个属性想知道兼容性，在哪查看?
[caniuse](http://caniuse.com/);

### 以下代码的作用？兼容性？
```css
*{
  box-sizing: border-box;
}
/*令所有元素的width计算方式切换到ie盒子模型的width计算方式*/
```
当没有设置box-sizing的时候,给padding:10px：    
![](https://ww4.sinaimg.cn/large/006y8lVagw1fb6ldh9oqyj30zr05ogmw.jpg)    
我们可以看到元素的content区域的width依然是120px.    
当设置了box-sizing的时候：    
![](https://ww2.sinaimg.cn/large/006y8lVagw1fb6lg9xwr4j312h05h75m.jpg)    
我们可以看到元素的content区域的width居然成了98px, 120-98=22px，刚好等于padding的两倍+border的两倍，而此时表现出来的元素的实际所占空间并没有因为padding而扩大，实际上只要padding(水平方向)的设置值<width的设置值的一半，视觉上就不会有变化: [点击查看demo](http://js.jirengu.com/sise/1/edit?html,css,output)    

---
### 代码
写一个 btn 的class， 任何 a，span,div,button 添加此class后后变成如下按钮的样式(鼠标hover背景色#c14d21, 鼠标按下背景色#e25f31)

```html
<a class="btn" href="#">确定</a>
<span class="btn" >取消</span>
<div class="btn">提交</div>
<button class="btn"> 发送</button>
```

[点击查看demo](http://js.jirengu.com/saca/1/edit?html,css,output)