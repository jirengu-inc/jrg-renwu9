> 样式几种引入方式？link和@import有什么区别？

#### **样式**：又称`层叠样式表 Cascading Stylesheet`，就是我们常说的CSS，在html文档里对它的引入方式有三种，我们按使用`频率`来介绍。
#### **1. link标记** 
link标记是一个很少使用但完全合法的标记，它在HTML规范里存在很久了，基本目的是：允许HTML创作者将包含link标记的文档与其他文档相关联。比如被引进的样式表会被称为：外部样式表。
``` html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <!-- 开始 -->
  <link rel="stylesheet" type="text/css" href="sheet1.css" media="all" />//必须放在head标签中.
  <!-- End -->
  <title>JS Bin</title>
</head>
<body>

</body>
</html>
```
**属性**：
- `rel`：relation，表示关系，这里的关系为`stylesheet`，告诉html我是你的衣服。（样式表）
- `type`：`css/text`，描述了使用link加载的数据的类型。
- `href`：表示外部样式表的url。可以是相对路径，也可以是绝对路径，一般使用相对路径以保证项目可移植性。
- `media`：表示要应用于需要表现的媒体类型，这里使用的是`all`，表示应用于所有媒体类型。

#### **2. style元素**
可以用style元素包含样式表，它在文档中单独出现，又称`嵌套样式表`。
```
<style type ="text/css"></style> <!--同样放在head标签内-->
```

#### **3. 内联样式**
我们甚至可以不需要style标签，直接在元素标签内书写：
```
   <p style="font-size:2em">Hi</p>
```
#### **4. @import指令**
属于CSS中的内容，它的表现形式与link相似：
```
     @import url(sheet.css);
```
在编写样式的时候我们可以使用这条语句引入外部样式。

#### **link与imoprt的区别**
1. link是XJTML标签，可以用来引入CSS、JS等文档。 而@import是style标签里的内容，只能引入CSS。
2. link引入CSS时，浏览器会预加载CSS，再加载HTML，这样显示出来的文档是样式完全的。而@import引入时浏览器会先加载HTML再加载CSS，这样可能导致页面在最初呈现时样式空白。
3. link是XHTML标签，没有兼容问题。而@import是CSS2.1提出的，无法兼容老式浏览器。

#### **总结：一般情况下都使用link方式最好。**
---
> 文件路径../main.css、./main.css、main.css、/main.css有什么区别

#### **绝对路径**
直接把完整的路径写出来，可移植性很差。
```
    <img alt='image' src="C:/image/tupian1.img">
    <!--绝对路径对象是当期系统，如果换了一台电脑，很有可能找不到此文件-->
```
#### **相对路径**
相对路径提供了一种更宽松的访问方法    
`"./"`：代表目前所在目录
``` html
     <img alt="test" src="./main.css" />
     <!--代表访问当前目录下的main.css-->
     <img alt="test" src="main.css" />
     <!-- 等价写法，只要main.css与html同处一个目录下即可-->
```
`"../"`：代表上一层目录
``` html
     <img alt="test" src="../main.css" />
     <!--表示访问在上一层目录里的main.css-->
```
`"/"`：代表根目录
``` html
    <img alt="test" src="main.css" />
    <!-- 访问根目录下的main.css-->
    <!--根目录根据系统的不同来变化-->
```
---
> console.log()是做什么用的？

console.log()用于在控制台输出信息。常用来插入代码段里进行测试。如果括号内是html文档元素，会以HTML-tree的形式返回。

---
> text-align有几个值，分别有什么用？

#### **text-align**
它用来操控`块级元素`内文本的`水平对齐`方式
一共有5个值，最后一个是inherit，它表示继承父级的水平对齐样式值。
### left
这是默认值，根据正常阅读习惯.    
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/62af4f75-0260-4315-9d6e-b90aa3f64e3e) 
### right
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/b8d6de2d-afd1-434f-86e7-7983bda445a9) 
### center
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/c63a6a32-a6cd-4720-98a9-ef90a6e52ba2) 
### justify
这个值会使得文本调整词与字之间的间距，使得两边文本两端对齐。    
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/30c96e9e-2f3f-4a11-b790-f97665eb4425) 

---
> px、em、rem分别是什么？有什么区别？如何使用？

### px
像素单位，一种绝对值单位，给定文字绝对大小。IE无法调整使用px作为单位的字体大小。
### em
em的值并不是固定的；em会继承父级元素的字体大小。
### rem
rem是CSS3新增的一个相对单位（`root em`）,看名字，所以它是以html为根元素，且大小相对于根元素。

## 实践
文字太抽象，直接写个JsBin截图我们来看看效果:[JSbin](http://js.jirengu.com/cexaweyujo/2/edit?html,output)    
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/eab67d48-348f-45c3-8e3c-3e79604ed928)    
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/ff79c982-93e1-482e-be3f-ca1ab2d19087)    
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/6c0883b5-e838-46de-ba34-64194613b52c) 

### 使用rem作为字体单位还有一个妙用：
##### 响应式！ 当屏幕大小变化时使用媒体查询，此时只要设置html根元素的大小，就可以使所有文字同样进行响应式缩放！

---
> 对chrome 审查元素的功能做个简单的截图介绍

![](http://7xpvnv.com2.z0.glb.qiniucdn.com/6e4c4e53-37d6-461f-8ce0-ad6b90e7f236) 
- Element：用来查看网页的文档，可以展开，看到所有元素，以及元素具体的样式。
- Console：Console可以查看网页运行后提示的消息，错误或者警告以及输出内容等，网页后台可以使用`Console.debug("输出内容")`；来在Console输出显示，可以做到调试的作用吧，不过一般真正调试不是拿Console。`console.debug`;console是小写形式，不然提示没有Console
- Sources：在左侧的脚本代码编号，鼠标点击即可添加断点，添加断点后，刷新网页，程序运行到断点即可看到断点调式的状态了，具体调试需要在自己想查看某个方法里边是否有问题，一步步排除，效果很好
- NetWork：可以看到网页加载的脚本和资源的时间，还可以看到某些不能加载成功的资源；
- Timeline：提供了加载页面时花费时间的完整分析，所有事件，从下载资源到处理Javascript，计算CSS样式等花费的时间都展示在Timeline中；
- Profiles：分析web应用或者页面的执行时间以及内存使用情况；
- Application：记录网站加载的所有资源信息，包括存储数据（`Local Storage`、`Session Storage`、`IndexedDB`、`Web SQL`、`Cookies`）、缓存数据、字体、图片、脚本、样式表等。
- Security：判断当前网页是否安全。
- Audits：对当前网页进行网络利用情况、网页性能方面的诊断，并给出一些优化建议。比如列出所有没有用到的CSS文件等。
---

>如下代码，设置 p为几 rem，让h1和p的字体大小相等?

``` html
<h1>饥人谷</h1> 
<p>饥人谷</p> 

<style> 
    html{
        font-size: 62.5%; 
    } 
    p{ 
        font-size: ?rem;
    }
    h1{
        font-size: 60px;
    }
 </style>
```
#### Answer
html设置为62.5%，此时`1rem = 10px`; h1的font-size为60，即6rem，令p与h1字体大小一致，设为`6rem`即可。

### 代码
[JSbin](http://js.jirengu.com/qekamiviru/1/edit?html,output)
``` html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
  <style>
    body{
      font-family:"微软雅黑";
      font-size:16px; <!--设不设都一样，默认值-->
      line-height:1.5em;
      color:#333;
    }
    p{
      color:#000;
      line-height:1.5em;
      text-indent:2em
    }
  </style>
</head>
<body>
  <p>最后一题！</p>
</body>
</html>
```
