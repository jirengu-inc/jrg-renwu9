# line-height有什么作用？
在CSS范畴里，唯独`height`与`line-height`是可以显式规定`高度`的样式，所以值得分析一番。顾名思义，这是用来指定行内元素的高度的，这个高度指的是：**两行文字`基线`之间的距离。**
## 什么是 `基线`？`顶线`、`中线`、`底线` 又是什么？
我们将用示例来进行演示，***以下演示将基于以下代码：***

```  
<html>
	<head>
		<meta charset="UTF-8">
		<style>
		html,body{
			padding:50px;
		}
		p{
			margin: 0;
			font-size:200px;
			line-height: 250px;
			color:#34424c;
			font-family: "Helvetica Neue Light";
		}
	</style>
	</head>
		<body>
		<p>hey you</p>
		<p>hey you</p>
	    </body>
</html>
```
**效果：**
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/8332d10d-eab4-4026-8df3-8a9e10b710e3) 
**你可能会注意到**: 为什么顶线下面还有点`空白`呢？这根`字体`与`字号`有关，在不同的输入、输出环境下都有不一样的结果，具体机制本文暂不讨论，有个简单的办法去确定范围，就是常见的`选中文字`，会看到如下效果：
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/dbd55b92-f219-4e1b-a9c0-19e65b3794ea) 
这块蓝色的区域，我们称之为`内容区`：`content-area`，我们通过演示可以给其范围做一个定义：
- **文本顶线与底线所包裹的区域**称为`内容区`, ***请记住`内容区`这个概念，后面我们会用上它。***

根据篇头的定义，行高`line-height`呈现如此：![](http://7xpvnv.com2.z0.glb.qiniucdn.com/c6ab792b-f88f-43a9-b644-1f421b916d76) 
通过观察我们可以发现：`行间距`即第一行文字`底线`到下一行文字`顶线`的距离。
观察上图我们得到一个公式：
- **内容区(content area)** + **行间距(vertical spacing)** = **行高 (line-height)**

## 那么在以”一行“为单位下的多行显示里，行高的表现是怎样呢？
我们将用示例来进行演示，***以下演示将基于以下代码：***

```
<html>
<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
		html,body{
			padding:50px;
		}
		div{
			line-height: 250px;
			font-size:200px;		
		}
		span{
			color:#34424c;
			background: white;;
		}
		#div1{
			background: #36c77a;
			font-family: helvetica;
		}
		#div2{
			background: #f6dc25;
			font-family: simhei;
		}
	</style>
</head>
	<body>
		<div id="div1">
			<span>hey you</span>
		</div>
		<div id="div2">
			<span>hey you</span>		
		</div>
</body>
</html>
```
**效果：**
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/c9e0e535-b909-4a77-a60e-9168e83104e0) 
我们可以观察到：
1. 第一个div的底线与第二个div顶线之间的绿区域的高度为第一个div顶部绿色区域的`两倍`，**则我们可以看出在单行表现下：行高组成部分的行间距被拆分为两个`半行间距`，分别填补在`内容区`(白色)的上方与下方。**
2. 在第二个div里我们使用字体`helvetica`的内容区比第二个div中使用字体`simhei`的内容区要**大**一些
3. 更直观的反应在两个div背景色绿色与黄色交界处，表现为绿色`半行间距`小于黄色`半行间距`。这里可以说明`字体(font-family)`对内容区的影响。



**结论：**
1. 网上盛传的***内容区的高度即font-size*** 这句话是错误的。
2. 内容区的高度与`字体(font-family)`及`字号(font-size)`共同决定。
3. 单行表现下，存在`行内框`，其高度为`行高`(line-height)，又可以叫它`内联盒子`(inline-boxes)，数值上由 内容区高度 + 行间距 组成，表现形式上为：半行间距 + 内容区 + 半行间距  =  行内框  (排除padding,margin的情况下)
4. 由于内容区的高度改变，对应的半行间距也相应改变，二者数值达到`互补`，是的其和刚好等于`行高(line-height)`。（行间距甚至可能是负值：内容区高度大于行高）

## 那么当一行里多个行内元素，且它们的`行高`不同时，又会是什么情况呢？
首先我们用三个div分别包含`<span>`,`<strong>`,`<em>`，且分别行高设置为：100px，120px，140px，将div设置左浮动，效果如下：
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/f43092df-4f77-40fa-a3f1-e9012632866a) 
可见其行高依次增高，由于字体大小未改变它们的内容区大小保持一致，半行间距依次增加，满足`行高计算公式`及`结论4`。
以下我们将三对行内标签包含在一个div当中，效果如下：
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/04cd710a-fffd-45dd-9afb-b69e0f66deee) 
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/aeec7016-b1da-408a-bab1-24f419ead0a1) 
可以看到其高度，即行高为：`140px`
根据网上盛传的一句结论：`行框`的高度等于其包含的最高的`行内框`的高度。
在这里最高的行内框即`<em>`，高为`140px`，结论貌似是正确的。
**`行框`又是什么？**
根据CSS权威规范，行框的定义为：
- **包含行中出现的行内框的`最高点`和`最低点`的最小框**。

不愧是权威指南，这句话对于验证行框高度网传结论至关重要，下面用一个例子来证伪，我们将上面的例子中第一个`<span>`添加样式`vertical-align:50px`，效果如下：
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/e8249ce6-3afa-4169-9f7d-c978d9ceafd0) 
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/844f3514-c4cb-4cba-aeac-0de1d456cb55) 
可见行框的高度为：`170px`，我们再测量一下`<span>`的上升高度：
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/967e0201-2d37-48ef-8d9c-be783485ee0a)
可以发现其上升高度正是`vertical-align`中的`50px`，由于我们所量的位置为当前底线至原先底线的距离，我们等价可视作：其位置相对原先基线上升了50px。
根据第三个标签`<em>`是显式设置`line-height`中数值最大的`140px`，其`半行间距` = ( 140px - 100px(内容区) ) / 2 = 20px. 再观察第一个标签`<span>`,其确定的行框高度可以表示为：
`<em>`半行间距20px + 三个标签共同的内容区高度100px +  `<span>`的vertical-align：50px = 170px;
请再回想一下这个过程：
在未设置`vertical-align`时`<span>`由于所在的行框高度被`line-height`最高的`<em>`所决定，表现为自己内容区的上下两端也具有20px的`半行间距`。（而其本身`line-height`设置为100px，跟自己的内容区高度一致，行半间距应该为0px，则不会看到包裹它的div的绿色背景）.
在设置了`vertical-align：50px`后，它相对以前的高度上升了50px，此时，其顶线也上升了50px，而在之前，它的顶线至`行框`最高点仅有20px(`<em>`的半行间距)，此时它**冲破**了这20px，又继续上升了30px。
**最终使得原有的行框上边界上升了30px，行框下边界不变。**
再回顾一下权威指南对于行框的定义：
根据`css权威规范`里的定义：**包含行中出现的行内框的`最高点`和`最低点`的最小框**
- 这里的`最高点`对应各`行内框`的最高上边界
- 这里的`最低点`对应各`行内框`的最低下边界 （使用vertical-align：负值即可创造）

**结论：**
1. 网传结论：`行框`的高度等于其包含的最高的`行内框`的高度 **是错误的**
2. 疑难杂症，请倾向信任CSS权威指南 ：）


## line-height的取值
取值**Inherit** 
这条样式是可以继承的，看个sample：   [JSBin](http://js.jirengu.com/nozo/4/edit?html,css)
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/7dca8ac2-526e-4dc3-b73a-b0f118a9710c)
为了能区别父子级的height，我们分别给他们加上背景色。
此时我们将子元素`p`的`line-height`设置为了30px，其父元素的背景色露了出来，如果我们把这条显式行高设置去掉：
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/d5e12361-598f-4716-840c-ed469abc8eef) 
黄色消失了，证明子元素`p`继承了父元素的行高`line-height:40px`.
将其line-height设置为inherit也是一样的效果。
值得**注意**的地方：
如果我们将`div`的line-height设为40px,将`p`的line-height设为`30px`, `div`的高度将塌陷为`30px`，这可以说明父元素`div`的高度是由子元素的内容撑起来的，而显式的给父元素设置`line-height`并不能决定性的固定其`高度`，这个等下我们会继续讨论。

- 取值**length、percentage、number**，需要分类讨论
- 取值为1.5时，其子元素行高为子元素字体font-size*1.5，是`重新计算`的结果。    
- 取值为150%，1.5em时，其行高为当前元素font-size*数值，且子元素的行高不再重新计算，`直接继承`此结果，也就是说子元素的font-size不再影响行高。

## 行框高度是由line-height决定的##
又是一个网传结论：**div中具有字符后，其高度被文字撑开** ,结合之前的讨论，很可疑
证伪：[JSBin](http://js.jirengu.com/wila/1/edit?html,css,output)
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/6ee97b84-678f-4571-b71d-565a93c365da) 
可见就算第一个div我们给其设置了`font-size：20px`，它依然塌陷了。
而第二个div我们就算给设置`font-size:0px`,由于`line-height:20px`，它看不见字符却依然拥有高度。
所以啊…
![](http://s9.sinaimg.cn/middle/4d55dd7a496ac162aa988&690)

### 想一想我们在讨论宽度的时候，讨论的最多也是争论最多的话题是？
没错，`居中`，所以我们在讨论高度的时候，也无法逃出`居中`的阴影。

line-height适用于**单行文本**的垂直居中，请注意确保文本一定不会换行，否则垂直居中效果将失效。
方法：将想要居中的文本的父元素的`line-height`设置想要的高度，`height`是不必要的。
多行文本居中的情况下需要用到`vertical-align：middle`，这里暂不讨论，不然又得写很长...

**总结： line-height的作用为1. 设置行框高度 2. 单行文本居中**
- - - 
# 如何去查CSS属性的兼容性？比如inline-block哪些浏览器支持？
1. [caniuse](http://caniuse.com/)
2. IE真的反人类，或者，还用IE8及以下的，你是原始人吗！！兼容万年大坑IE。
![0_1477604259954_upload-e526125e-f7d8-4fee-8ae8-c2a4bd4c0109](http://7xpvnv.com2.z0.glb.qiniucdn.com/a90f854f-f0f3-42f4-95e1-820dc146d2a0) 

- - -
# a 标签的href, title, target 是什么？ title 和 alt有什么区别？如何新窗口打开链接?
### a标签用来创造一个超链接，它的链接对象可以是一个页面，文件，甚至是当前页的某个地方。
`href`，`tiltle`，`target`是它的三个属性.
- href： 如果一个`<a>`标签里没有这个属性，那么它便不是一个`超链接`。它用来规定指向的页面的URL。如果这里的取值以#开始，后面跟本页面某标签id的名字，`<a>`将成为一个`锚点`，鼠标点击后则会跳至这个标签处。
- title：鼠标移动到`<a>`标签上时显示的短描述性文字。
- target：规定在哪里打开链接文档，它的取值有如下几种：
	- _blank： 在新窗口或者新标签页里打开连接。
	- _self： 在同一个框架或者窗口里打开。
	- _parent： 在主框架里打开，要使用标签`<iframe>`.
	- _top： 在整个窗口中打开被链接文档。（去掉框架）

### title与alt的区别是什么？
- alt是图像的替代文本，它的使用原则为：
	1. 如果图像包含信息，使用 alt 描述图像
	2. 如果图像在 <a> 元素中，使用 alt 描述目标链接
	3. 如果图像仅供装饰，请使用 alt=""
	4. 如果图像无法显示，显示alt的value作为描述性文字。

- 我们前面已经说了title是作为一种短描述性文字，那么当`<a>`里嵌套了`<img>`元素时，title不再显示，显示的是`<alt>`的值。

示例：
```
<a title="一个链接" href="#">
	<img alt="一张图片" src="img/1.jpg" style="height: 200px;"/>
</a>
```
![0_1477608393059_yzwOE8xfQz.gif](http://7xpvnv.com2.z0.glb.qiniucdn.com/6a55d242-b83c-4bc2-904f-94f7b665644e.gif) 
如果将图片的src输错导致无法找到图片：
![0_1477608539007_834rhdqofH.gif](http://7xpvnv.com2.z0.glb.qiniucdn.com/f4f2224d-d30a-4ec2-a81a-61c51c6847a1.gif) 
### 打开新窗口： 
`<a href=“….” target=”_blank”> link </a>`
- - - 
# display: none , visibility: hidden, opacity:0 有什么作用？有什么区别？
先看一个demo：    
[JSBin](http://js.jirengu.com/kudo/1/edit?html,css,output)
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/abe69081-59f5-4164-8c5b-c08d7ed95b85.gif)    

1. **display： none**
在此样式下，浏览器会判定无法从DOM中获得这个元素，因此这个元素也不会占用文档对象模型中的空间，其因此子元素也无法访问。
2. **visibility： hidden**
这个样式会将该元素对用户隐藏，其子元素也隐藏，无法访问。但是这个元素存在于DOM中，并且消耗了DOM的空间。从demo上来看，它的wrapper div依然具有对应的子元素高度，证明其在DOM中占据空间，只是无法看见。
3. **opacity： 0**
单纯地在外表上将其透明度设为0，即元素存在，子元素可访问，只是外貌上透明，依旧占据DOM空间。在demo上我们将鼠标移到上面会发现鼠标变成pointer(GIF录制的时候鼠标没有变化，店点击JSBin可以看到效果），且点击可以访问对应google网页。
- - - 
# 如何去除 a 链接的默认样式？直接在 a 链接父容器添加颜色，能否继承到当前 a 链接上？
### <a>标签的默认样式有哪些呢？
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/d8437268-4a06-4c46-9674-3157aa684452) 
在chrome浏览器下结果如图，可见定义了三个样式：
1. `color`：用来改变文字的颜色，`active`状态下即点击后改变为另一个颜色。
2. `text-decoration`：用来给链接添加下划线。
3. `cursor`：用来规定当鼠标指向它的时候指针的形状。

### 如何去除这些默认样式？
对a标签进行样式复写：
1. `color`: “你想要的颜色”
2. `text-decoration: none;`
3. `cursor: default;`（箭头）一般为了保留其链接的特性不建议修改。

### 直接在 A 链接父容器添加颜色，能否继承到当前 A 链接上？
试验：
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/a3b0a5cf-f54f-4c2d-9576-8e5be1d9b837) 
**全军覆没！**
浏览器对于`<a>`的默认样式设置会覆盖父元素的继承样式.
**为什么直接对a进行样式复写就可以呢？**看图：
![0_1477611287148_upload-3695ec13-9282-48d5-bac8-8a6073cf4a28](http://7xpvnv.com2.z0.glb.qiniucdn.com/a3c41fa5-0e0e-42b6-9e9c-45c3dac122fb) 
第二段，告诉我们这个样式层叠优先级是升序的，这里的`user agent`代表浏览器，`user`代表用户。我们可以发现user都在user agent下面，证明user的优先级更高，所以我们在显式设置`<a>`样式时由于优先级更高，浏览器渲染时只会按照user的设置方式来渲染，否则则按照浏览器默认样式。    

- **补充： 关于继承样式的问题**   
考虑如下代码：

```css
.box{
	color: red;
}

/* 继承隐式赋值 */
.box(inherit) a{
	color: red;
}

a:-webkit-any-link{
	color: -webkit-link;
}

.box a{
	color: red;
}
```

我们可以发现的是如果将连接放在一个div里并且给div（父级）设置color是不会使a变色的。原因是虽然color属性具有继承，但是继承是**不具有特殊性的**，也就是意味着特殊性计算值为0也比继承拥有更高的优先性，继承在样式优先级里毫无地位可言，所以非常容易被覆盖。而浏览器默认的样式设置具有特殊性，所以它的样式依然保持。再根据来源规则，用户显示设置a的color，就算特殊性值计算结果相同，也具有更高优先级，遂可覆盖之。    
总之： **任何一条与css继承值冲突的属性值都会覆盖继承的属性值！！！**

- - -
# 代码题：
1. 写个div，边框为1px, #ccc, 宽度为200px, 高度为80px, 内有一行文字这里是饥人谷，文字字体大小14px, 颜色#f0f, 文字在div里垂直水平居中
[JSBin](http://js.jirengu.com/mita/1/edit)
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/437216d0-09f2-4fa9-8187-5951ad78d81b) 
2. 给header设置高度40px, 左对齐，左内边距10px, 文字16px, 颜色#f00,下边框#ccc 1px。
[JSBin](http://js.jirengu.com/xate/1/edit?html,css,output)
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/d777293e-ce37-4010-b872-1ac5b875ec72) 
3. 写一个如下表格
表头是蓝色，表行是白色。 当鼠标放置到表行时背景色变为淡灰色
[JSBin](http://js.jirengu.com/zuno/1/edit?html,css,output)
![0_1477612899922_upload-640b07f6-aa8b-4ed7-85a8-dc1e8dc71e69](http://7xpvnv.com2.z0.glb.qiniucdn.com/9c759069-a323-4964-944f-21f7f92439e4) 
4. 下面代码有什么作用？手抄一遍如下代码，改变浏览器宽度看看效果

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    .wrap{
      width: 900px;
      margin: 0 auto;
    }
  
  </style>
</head>
<body>
 <div id="header">
   <div class="wrap">这里是标题</div>
 </div>
  <div id="content">
    <div class="wrap">这里是内容</div>
  </div>
<div id="footer">
  <div class="wrap">这里是 footer</div>
</div>
</body>
</html>
```

header、content、footer三个div铺满浏览器可用宽度（减去body的margin），它们包含的wrap div宽度为900，在父元素div居中显示。当浏览器宽度小于`900px+8px`（body默认`margin:8px`，chrome浏览器下）时，出现滚动条。
**一般情况下，**浏览器宽度可用html标签宽度指代。