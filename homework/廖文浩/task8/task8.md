## 块级元素 VS 行内元素
### 块级元素
- div
- 标题 h1 h2 h3 h4 h5 h6
- 段落 p
- list: ul ol li
- 表格: dd dt tr th td
- 表单: form
- 代码 pre
- H5: header nav section article

### 行内元素
- 强调 em strong
- 小块文字 span
- 链接 a
- 换行 br
- 图片 img
- 表单项： input button textarea select label
- code
- script


块级元素都各自独占一行，行内元素都只占自己的内容宽度。   
加深印象，一图流[点击查看demo](http://js.jirengu.com/joze/2/edit?html,css,output)：    
![](https://ww4.sinaimg.cn/large/006y8lVagw1fb58b6fa2wj31e90l1gou.jpg)    


### Difference   

| Difference | block | inline |    
| :--------: | :---: | :----: |    
| **Width**      | 自然充满父级元素的宽度 | 宽度就是内容宽度,忽略显式width设置 |
| **Height**     | 可以设置,如果没有设置，高度自适应为子元素高度 | 忽略这个属性 |
| **Margin&Padding**     | 上下左右都生效 | 上下不生效，左右可以生效 |
| **放置形式**     | 默认放在前一个元素的下面(below) | 文字流形式 |
| **浮动**        | 不再独占一行，如果上一行有足够宽度空间便会挤进去 | 浮动时具有所有块级元素的性质 |
| **vertical-align** | 对包含的行内元素生效 | 无效 |

- 块级元素可以嵌套块级元素，也可以嵌套行内元素。
- 一般来说，行内元素则只能嵌套行内元素。 一个特殊的行内元素是a，我们经常会把块级元素或者inline-block元素放置其中。
- img是一个很特殊的元素，它属于一个类别叫： [replaced elements](http://reference.sitepoint.com/css/replacedelements), 它们具有inline&block二者的特性

> Basically, these are neither block nor inline. But you might classify them as something closer to inline, but with block-like structure.

## 继承
继承一般指在元素本身没有被显式设置某样式的值时，取得父元素计算后(computed value)的样式值。    

### 常见不可继承的属性：
1. display
2. 文本： vertical-align, text-decoration, text-shadow, white-space, unicode-bidi(文本方向)
3. 盒模型样式： height, width, margin&padding系列, border系列
4. 背景系列： background-
5. 定位系列： float, clear, position系列(TRBL), Min/Max高宽系列, overflow, clip, z-index.
6. 轮廓样式： outline-

### 常见可继承属性：
1. 字体系列 font-
2. 文本： text-indent, text-align, line-height, word-spacing, letter-spacing, text-transform, direction, color.
3. 表格布局： caption-side, border-collapse, border-spacing, empty-cells, table-layout.
4. 列表布局： list-style-type, list-style-image, list-style-position, list-style.

### 共有继承属性
- visibility 
- cursor

### 内联元素可继承属性
1. 字体系列
2. 除了text-indent, text-align之外的文本系列。

### 块级元素可继承属性
1. text-indent
2. text-align

## Annoying Centering：居中一瞥
### 块级元素水平居中
1. 显式设置宽度，使用`margin:0 auto`
2. 父级`position:relative`,子元素`position:absolute`, `left:50%`, `translateX(-50%)`,适用于一些特殊情况（不知道宽度是多少）
3. flex-box大法， 父级: `display: flex`,`justify-content:center`
4. 负边距法，一般用于水平垂直居中，原理跟第2条差不多，区别是需要知道宽度，然后设置负边距为宽度的一半，双飞翼就是利用负边距。
5. 如果有多个块级元素，我们想让其排列在一行并且总宽度依然相对父元素居中

```css
.inline-block-center { /* wrapper */
  text-align: center;
}
.inline-block-center div {
  display: inline-block;
  text-align: left;
}
```


### 行内元素水平居中
对行内元素父级设置`text-align:center`

## 画个三角形
首先思考一个问题，我们都知道边框这个属性，而且知道它是可以分四边分别进行设置的，如果我将四边的颜色都设置成不一样的，那会是什么样子？画几张图来表示一下：    
![](https://ww3.sinaimg.cn/large/006y8lVagw1fb5dp4mt5xj30ro0m5q55.jpg)
![](https://ww4.sinaimg.cn/large/006y8lVagw1fb5dxxpq5pj30rr0m4abw.jpg)

一目了然，把图像翻译成代码：

```css
div{
  border-style: solid;
  border-width: 100px;
  height: 0;
  width: 0;
  border-color: blue yellow green red;
  /* 尖朝下的蓝色三角形 */
  /* border-color:blue transparent transparent transparent; */
  /* 尖朝左的黄色三角形 */
  /* border-color:transparent yellow transparent transparent; */
  /* 尖朝上的绿色三角形 */
  /* border-color:transparent transparent green transparent; */
  /* 尖朝右的红色三角形 */
  /* border-color:transparent transparent red transparent; */
}
```

## 文本trick
文字的container宽度有限的时候我们想要文本自动省略超出container的部分并且加上省略号...    

```css
.text{
/*有专门处理省略号的一个样式*/
text-overflow: ellipsis;
/*强制不换行*/
white-space: nowrap;
/*溢出隐藏*/
overflow: hidden;
}
```

## px,em,rem
这个问题前面总结过，直接copy过来:    
> px、em、rem分别是什么？有什么区别？如何使用？

### px
像素单位，一种绝对值单位，给定文字绝对大小。IE无法调整使用px作为单位的字体大小。
### em
em的值并不是固定的；em会继承父级元素的字体大小。
### rem
rem是CSS3新增的一个相对单位（`root em`）,看名字，所以它是以html为根元素，且大小相对于根元素。

### 实践
文字太抽象，直接写个JsBin截图我们来看看效果:[JSbin](http://js.jirengu.com/cexaweyujo/2/edit?html,output)
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/eab67d48-348f-45c3-8e3c-3e79604ed928) 
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/ff79c982-93e1-482e-be3f-ca1ab2d19087) 
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/6c0883b5-e838-46de-ba34-64194613b52c)    

使用rem作为字体单位还有一个妙用：响应式！ 当屏幕大小变化时使用媒体查询，此时只要设置html根元素的大小，就可以使所有文字同样进行响应式缩放！

## 解释下面代码的作用?为什么要加引号? 字体里的数字符号代表什么?
```css
body{
  font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
}
/*一锅端的字体设置： 顺序依次是：
字体大小： 12px
行高： 重新计算： 1.5*子元素font-size
字体： 优雅降级？一个个试验，如果用户系统无法匹配这个字体就匹配下一个直到最后tahoma, airal, ‘Hiragino Sans GB', '\5b8b\4f53`（这是unicode，最精准的办法）, sans-serif 
*/
```

### 关于字体什么时候加上引号？
1. 中文
2. 英文，但是有空格或者其他符号

--- 
## 代码
-  实现如下效果: [【参考】](http://book.jirengu.com/jrg-team/frontend-knowledge-ppt/code/hunger-ui/container.html)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <div><p>我爱方方！我爱若愚！不分先后！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p></div>
  <div><p>我爱方方！我爱若愚！不分先后！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p></div>
  <div><p>我爱方方！我爱若愚！不分先后！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p></div>
  <div><p>我爱方方！我爱若愚！不分先后！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p></div>
</body>
</html>
```

```css
/*If there is no border, padding, inline content, or clearance to separate the margin-top of a block from the margin-top of its first child block, or no border, padding, inline content, height, min-height, or max-height to separate the margin-bottom of a block from the margin-bottom of its last child, then those margins collapse. The collapsed margin ends up outside the parent.*/

/* so we need a 1px top&bottom padding in parent */
div{
  width: 600px;
  margin: 30px auto;
  line-height: 1.5;
  text-align: left;
  padding: 1px 16px;
  box-sizing: border-box;
}

div:nth-child(1){
  border: 1px solid #ccc;
  border-radius: 3px;
  background: white;
}
div:nth-child(2){
  border-right: 6px solid red;
  border-left: 6px solid red;
  background: #ffe7e7;
}

div:nth-child(3){
  border-top: 7px solid #ffeb3b;
  border-bottom: 7px solid #ffeb3b;
  background: #ffffd7;
}

div:nth-child(4){
  border: 1px solid #4CAF50;
  border-bottom: 7px solid #4CAF50;
  background: #e7ffe7;
}
```

[点击查看demo](http://js.jirengu.com/yivo/6/edit?html,css,output)    

- 实现如下按钮效果: [【参考】](http://book.jirengu.com/jrg-team/frontend-knowledge-ppt/code/hunger-ui/button.html)

 ```html
 <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>a btn</title>
</head>
<body>
<div class="container">
  <a href="#">steal</a>
  <a href="#">yellow</a>
  <a href="#">orange</a>
  <a href="#">red</a>
  <a href="#">green</a>
</div>
</body>
</html>
 ```
 
 ```css
 .container>a{
  text-decoration: none;
  display: inline-block;
  border-radius: 3px;
  padding: 8px 10px;
  cursor: pointer;
/*   text-shadow: 1px 1px 1px #a9a9a9; */
}
.container>a:hover{
  box-shadow: 1px 8px 12px 1px #bcbcbb;
}
.container>a:nth-of-type(1){
  color: white;
  background: #009688;
}
.container>a:nth-of-type(2){
  color: black;
  background: #ffeb3b;
}
.container>a:nth-of-type(3){
  color: black;
  background: #ff9800;
}
.container>a:nth-of-type(4){
  color: white;
  background: #ff4436;
}
.container>a:nth-of-type(5){
  color: white;
  background: #4CAF50;
}
 ```
 
 [点击查看demo](http://js.jirengu.com/xaku/1/edit?html,css,output)    
 
 - 实现如下表格:[【参考】](http://book.jirengu.com/jrg-team/frontend-knowledge-ppt/code/hunger-ui/table.html)    

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <table class="t1">
    <tbody>
      <tr>
        <th>first Name</th>
        <th>last Name</th>
        <th>points</th>
      </tr>
      <tr>
        <td>jill</td>
        <td>smith</td>
        <td>50</td>
      </tr>
      <tr>
        <td>eve</td>
        <td>johnson</td>
        <td>67</td>
      </tr>
      <tr>
        <td>adam</td>
        <td>johnson</td>
        <td>67</td>
      </tr>
      <tr>
        <td>bo</td>
        <td>nilsson</td>
        <td>50</td>
      </tr>
      <tr>
        <td>mike</td>
        <td>ross</td>
        <td>35</td>
      </tr>
    </tbody>
  </table>
  <table class="t2">
  <tbody>
    <tr>
      <th>first Name</th>
      <th>last Name</th>
      <th>points</th>
    </tr>
    <tr>
      <td>jill</td>
      <td>smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>eve</td>
      <td>johnson</td>
      <td>67</td>
    </tr>
    <tr>
      <td>adam</td>
      <td>johnson</td>
      <td>67</td>
    </tr>
    <tr>
      <td>bo</td>
      <td>nilsson</td>
      <td>50</td>
    </tr>
    <tr>
      <td>mike</td>
      <td>ross</td>
      <td>35</td>
    </tr>
  </tbody>
</table>
</body>
</html>
```


```css
/*table 1*/
table{
  border-collapse: collapse ;
  width: 600px;
  margin-bottom: 50px;
}

table th, table td{
  text-transform: capitalize;
  border: 1px solid #ccc;
  padding: 8px 8px;
  font-family: arial;
}

table th{
  color: white;
  background: #4CAF50;
  font-weight: bold;
  text-align: left;
  border-left: none;
  border-right: none;
}

table tr:nth-child(even){
  background: #f1f1f1;
}

table tr:nth-child(odd){
  background: white;
}

/*table 2*/
.t2 th, table td{
  border: none;
  border-bottom: 1px solid #ccc;
}

.t2 th{
  background: white;
  color: black;
  font-weight: bold;
  text-align: left;
}


```

[点击查看demo](http://js.jirengu.com/lewo/3/edit?html,css,output)    

- 实现如下三角形 (上面涉及过啦)
- 实现如下Card: [【参考】](http://book.jirengu.com/jrg-team/frontend-knowledge-ppt/code/hunger-ui/card.html)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Card example</title>
</head>
<body>
  <div class="container">
    <div class="card">
      <img src="https://ww4.sinaimg.cn/large/006y8lVagw1fb5gd04aa2j30dw0dwju8.jpg" alt="Kylewh">
      <div class="meta">
        <h2>KYLEWH</h2>
        <p>前端Newbie，爱方方，爱若愚，哈哈哈哈哈哈哈哈哈</p>
      </div>
      
    </div>
    <div class="card">
      <img src="https://ww2.sinaimg.cn/large/006y8lVagw1fb5gr2e55sj30dw0af43a.jpg" alt="">
      <div class="meta">
        <p>Celtics VS Knicks</p>
      </div>
    </div>
  </div>
</body>
</html>
```

```css
.container{
  width: 500px;
  margin: 0 auto;
  padding-top: 30px;
  font-family: Helvetica;
}

.card{
  width: 300px;
  margin: 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important;
  margin-bottom: 20px;
}

.card img{
  width: 100%;
}

.card .meta{
  padding: 1px 15px;
}

.card:nth-child(2) .meta{
  text-align: center;
}

.card h2{
  font-size: 20px;
  font-weight: bold;
}

.card p{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
```

[点击查看demo](http://js.jirengu.com/bifo/6/edit?html,css,output)