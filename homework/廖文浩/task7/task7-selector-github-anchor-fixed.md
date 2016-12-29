![](https://ww3.sinaimg.cn/large/006y8lVagw1fb335whl33j30rs078mxd.jpg)
# 基本选择器
- 通配选择器： `*` 选中所有的的元素，性能极差，不建议使用。性能问题： CSS选择器也是通过遍历dom-tree去寻找，稍微有点了解就明白，基于dom的查找与操作都是占用资源的，所以在进行命名的时候考虑性能进行相应调整可以*make your website faster*. 提高用户体验至上，这是前端工程师的使命。
- 元素选择器：`标签名`，比如`div`,`li`， 实践中不要直接裸用，`a{}`比如这样，破坏性极大，常常带来不希望的结果，可控性太差。最好配合其他选择器使用，比如用类选择器指定父级 `.father ul`

```css
/*假设我们有一个footer，下面列出了contact方式，都是用<a>标签包裹，我们想要给它一个样式可以这样写*/
.footer a{
	color: green;
}
/*如果footer下还有其他的a链接，为了区分我们可以给contact角色的a标签加上类名：contact，那么可以这样写，这种写法在下面类选择器里有提。*/
.footer a.contact{
	color: green;
}
```
- ID选择器：`#id`，一个页面里只能有一个特定名字的id。用来选择被标记为特定idName的元素，最佳实践里要尽量减少对id的使用，因为这不利于元素的重利用。规模较大时，id的数量变多会导致重构效率非常低下，在选择元素时，如果追踪的是特定相对位置或者某些有规律可循的定位可使用**[结构伪类选择器](#结构伪类选择器)**(点击跳转)
- 类选择器： `.className`， 选中所有具有此类名的元素。同样还可以在类名前加上标签名如： `ul.ul-class` . 在追求最佳性能时，尽可能使用其他高级选择器，id与class选择器的性能不如它们。比如nth-child\last-child之类。
- 群组选择器： 将具有相同样式的元素分组在一起，每个选择器之间用逗号隔开，例如`.class1,.class2,.class3`告诉浏览器选择类名分别为class1, class2, class3的元素。比较常见的使用场景： 整站字体排版。
# 层次选择器
1. **E F** 选择后代
2. **E>F** 选择子元素（第一层后代）PS：要搞清楚一个概念，子元素一般只代表第一层后代，而第二层后代一般叫孙元素，不要混淆了，这样就能分的清楚。
3. **E+F** 选择相邻兄弟选择器 （E元素后面的相邻的元素）兄弟的意思是说大家都处于dom-tree的同一父元素下的同一级。
4. **E~ F** 通用兄弟选择器 （E元素后面相邻的所有元素）

[层次选择器demo 点击查看JSBin](http://js.jirengu.com/soka/1/edit?html,output)
![](https://ww3.sinaimg.cn/large/006y8lVagw1fb428i61u5j30f50g2ab4.jpg)
# 动态伪类选择器
1. **E：link** 选择E匹配的元素，而且元素为超链接且**未被访问过**，常用于链接锚点上。
2. **E：visited** 选择E匹配的元素，而且元素为超链接且**已被访问过** 一旦被访问过以后，它具有比其他动态伪类选择器更高的优先级.
3. **E：active** 选择E匹配的元素，且元素被激活
4. **E：hover** 匹配元素鼠标悬停时
5. **E：focus** 匹配元素获得焦点时
6. 锚点伪类设置需要遵循“爱恨原则”：<a name=”LoVeHAte">**LoVe/HAte**</a>, 即顺序为：link-visited-hover-active. 这是为什呢？这涉及到**[选择器优先级](#优先级问题)**(点击跳转)问题。首先一个结论：它们4个的特殊性值一样，所以遵循在后面出现的具有更高优先级的原则。那么来思考一个a链接的点击过程： 1.未点击(**E: link**) 2.点击 (**E:hover - E:active**) 3.点击完毕(**E:visited**),在点击事件完成后的显示结果里过程3造成的结果影响下一个点击事件发生时的原始状态。如果我们打乱顺序进行样式设置：

```css
:active {
    color: orange;
}
:hover {
    color: red;
}
:link {
    color: blue;
}
:visited {
 color: purple;
}
```
我们会发现active和hover的样式不会生效，因为link和visited出现在后面，会具有更高的优先级，所有的链接无非处于两个状态：未访问，已访问。所以结果是所有的链接归入两种状态后拥有对应的样式，然后active和hover的样式都被覆写了，不会出现。如果遵循a链接的点击过程进行设置，则后出现的状态对应样式可以由于设置时出场顺序导致的优先级获得显示。所以记住按照爱恨原则进行设置就好：

```css
:link { /*过程1： 未点击*/
    color: blue;
}
:visited { /*过程3： 未点击 同样也是过程1（体会一下）*/
 color: purple;
}
:hover { /* 过程2 点击ing-1 */
    color: red;
}
:active { /* 过程2 点击ing-2 */
    color: orange;
}
```

应用： [demo:按钮的状态 点击查看JSBin](http://js.jirengu.com/sabi/19/edit?html,output) 想体验更多一点可以直接google **css button generator**
# 目标伪类选择器
- **：targert** 匹配锚点指向的元素`<a href="#id"><a>`,  鼠标点击后`#id`会被选中，掌握了这个可以做出一些有趣且常见的效果，比如手风琴(accordian各种UI库里的常见组件)： [demo:利用target实现手风琴效果 点击查看JSBin](http://js.jirengu.com/qoyo/2/edit?html,output)
![](https://ww3.sinaimg.cn/large/006y8lVagw1fb427swaidj30mg06hwfk.jpg)
# 语言伪类选择器
- 用的太少，暂时不研究，在html标签处指定lang=“XX”后使用。

# UI元素状态伪类选择器
1. **E: checked** 匹配选中的复选按钮或者单选按钮表单元素
2. **E: enabled** 匹配所有启用的表单元素
3. **E: disabled** 匹配所有禁用的表单元素

例子：

```css
input[type="text"]{
  -webkit-appearance: none; 
  border: 1px solid #ededed;
  outline: 0;
  display: block;
  margin-bottom: 20px;
  width: 200px;
  height: 30px;
}
input:enabled{
  background-color: #f2fdf2;
}
input:disabled{
  background-color: #fff8f7;
}
input:checked + label{
  color: red;
}
```
![未点击radio前](https://ww1.sinaimg.cn/large/006y8lVagw1fb445oqc4ej3064044gli.jpg)
![点击radio后](https://ww3.sinaimg.cn/large/006y8lVagw1fb446nvxd0j306n042q2u.jpg)    

[点击查看demo效果](http://js.jirengu.com/juqiq/3/edit?html,output)

# <a name="structure_s">结构伪类选择器</a>
1. **E:first-child**： 作为父元素的第一个子元素的元素E,这里有两个条件： 第一个子元素，且是元素E。
2. **E：last-child**: 选择最后一个，如上同理。使用场景：导航条里每个导航项目我们想设置**右边框**以示区分，但是最后一个不想设置，就可以用last-child进行覆写。 博客的最后一个post也可以不用margin-bottom, 同理也可以用last-child.
3. **E F：nth-child(n)**: 双重条件： E的子元素第N个，元素是F。如果E的第N个不是F,不会生效。
4. **E F：nth-last-child(n)**: 同上，相反顺序。
5. **E：nth-of-type(n)**: 父元素内具有指定类型（E的类型）的第n个E元素
6. **first-of-tyep**/**last-of-type**： 如上，第一个与最后一个。
7. **E:only-child**: 选择父元素只包含一个子元素，且该元素与E匹配。(如果有其他元素，不能匹配）
8. **E:only-of-type**: 选择父元素只包含一个同类型的子元素，且该元素与E匹配，如果有其他类型的元素也无所谓，只要只有一个E同类的元素就会选中。如果有两个同类的元素就不行了。
9. **E:empty**: 选择没有子元素的元素，且不包含文本节点。（连字也不能有，空格都算字
10. 需要注意的点：
	- **nth-child**与**nth-type**区别：**nth-child**是双重约束，寻找第N个元素，且这个元素必须是指定元素，如果不是，则失效。而**nth-type**是追踪指定类型的序数，只将同类型计算在序数内，而不会像**nth-child**一样把非指定元素也计入排序中。
	- 例子： 假设有li li li div div li li， 使用`li:nth-child(4)`并不会生效，因为第四个是div。但是如果使用`li:nth-type(4)`，就会找到第4个li，可以认为nth-child是一种严苛的选择器，不是那么友好。

这个就有点乱了，写demo太费时间，奉上一个自己试验的demo，太丑不要嫌弃，里面对各种选择器都注释解释了原理和注意事项，建议自己都去试验一遍才会有印象。[点击查看demo](http://js.jirengu.com/favi/1/edit?html,output)
# 结构伪类选择器中的n
- 常见表达有： `n*length` , **n+length**, `-n+length`, **n*length+b**;
- 计算方法，n从0开始，往里面代入即可，直到元素耗尽无法选择。
- 当计算值小于等于0的时候，不选择任何元素。
- **odd**/**even**分别选择奇数和偶数个数的元素example: `nth-child(odd/even)`
- 一些使用场景：
	- **-n+length**，可以观察到当**n=length**的时候和为0，不再选择元素，所以选择的就是前length个元素，比如我们在排行榜里想高亮前三的元素，就可以使用`nth-child(-n+3)`;
	- `n*length+b`，从b开始，每隔length个就选中一个元素。

示例：

```css
.wrapper div{
  text-align: center;
  color:white;
  line-height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #299e63;
  float: left;
}

.clearfix{ /*由于要给warpper加上margin，清浮动解决塌陷*/
  overflow: auto;
  zoom: 1;
}

.wrapper{
  width:250px;
  margin: 20px;
  float: left;
}

.sample-1 div:first-child{
  background-color: #ffb200;
}

.sample-1 div:last-child{
  background-color: #ff0070;
}

.sample-2 div:nth-child(-n+3){ 
  /*
  数学问题： n=0时， -n+3 = 3;
           n = 1, 2;
           n = 2, 1;
           n = 3, 0; 不再生效
           n = 4, -1; 不再生效
  */
  background-color: #00b7ff;
}

/*奇偶*/
.sample-3 div:nth-child(odd){
  background-color: #7915bb;
}

.sample-3 div:nth-child(even){
  background-color: #6b5812;
}

/*3的倍数*/
.sample-4 div:nth-child(3n){ 
  background-color: #ffa63a;
}

/*length*n+b： 每隔length-1个选一个， b决定起点*/
.sample-5 div:nth-child(3n+1){ 
  background-color: #fb1983;
}

```

![](https://ww2.sinaimg.cn/large/006y8lVagw1fb451bxlf6j30gq0kdtbr.jpg)
[效果（点击查看demo）](http://js.jirengu.com/wura/1/edit?html,css,output)

# 否定伪类选择器
- **E:not(F)** 匹配所有除元素F之外的E元素，F还可以是E的状态。比如`input:not([type=submit])`. 这个选择器非常好用，想象一下这个场景:有一组div，大小一样，颜色各不相同，我们想要设置当我的鼠标悬停在某一个div上时，它显示出自己本身的颜色，其他的非处于鼠标悬停状态下的div都呈现灰色。这时我们可以用：`div:not(hover)`

# 伪元素
伪元素以`::`开头，用来与伪类的`:`做区分。

- **::first-letter** 用来选择文本块的第一个字母，通常用于给文本元素添加排版细节。例如下沉字母或者首字母。

```css
p::first-letter{
	float: left;
	color: #903;
	padding: 4px 8px 0 3px;
	font: 75px/60px Georiga;
}
```
效果：![](https://ww4.sinaimg.cn/large/006y8lVagw1fb46aj7vdtj30fc03r0tl.jpg)

- **::first-line** 用来匹配元素的第一行文本

```css
p::first-line{
	font: italic 16px/18px Georiga;
	color: #903;
}
```
效果：![](https://ww2.sinaimg.cn/large/006y8lVagw1fb46dv3plcj30fc03bdgp.jpg)

- 伪元素 **::before**和::**after** 可以插入额外内容的位置，**生成的内容不会成DOM的一部分！！！** **生成的内容不会成DOM的一部分！！！** **生成的内容不会成DOM的一部分！！！** 说三遍！，需要生成内容需要配合content使用，比如大家大学的时候写paper，会要求加上引用，还需要加上link地址，在网页里我们可以这样写：

```css
a[herf^=http]::after{
	content:"(" attr(herf) ")";
}
```

还有很多常用用法，比如箭头啦，icon啦。精细化UI对于伪元素的使用频率很高。


# 属性选择器
- **E[attr]** 选择匹配具有属性attr的E元素，其中E可以省略，表示选择了定义了attr属性的任意类型元素。
- **E[attr=val]** 双重约束：具有属性attr，且属性值为val。
- **E[attr|=val]** 双重约束的变种： 具有属性attr，但是属性值是可以具有val 或者以 val-开头的属性值。
- **E[attr ~=val]** 具有属性attr，且属性具有**多个空格分隔的值**，其中一个等于val，比如： `a[title~=this]` 对应 `<a herf="#" title="this is a link">Link</a>`
- E[attr*=val] 具有属性attr，**且属性任意位置含有val**。（字符串匹配）
- **E[attr^ =val]** 属性attr的值是以val**开头的任何字符串**
- **E[attr$=val]** **以val结尾**
- 通配符：
	- ^ : 匹配起始符，匹配的是开头具有对应字符的元素。
	- $ : 匹配终止符，同上匹配的是尾部。
	- * : 匹配任意字符，任意位置的匹配。

使用场景，举个例子：比如想显示对应链接的文件类型：`a[href$="exe"]::after`,`a[href$="pdf"]::after`，然后就可以给其添加对应文件类型的icon啦。

# <a name="priority">优先级问题</a>
每种选择器是具有特殊性的，通过计算选择器的特殊性值，最高者即具有最高优先级
#### 特殊性值的计算
首先列出特殊性权重的排名：

1. 内联样式
2. 选择器中给定的各个ID属性值
3. 选择器中给定的各个类属性值、属性选择或者伪类
4. 选择器中给定的各个元素和伪元素
5. 结合符和通配选择器 * (对特殊性没有任何贡献)

一共6项，我们将特殊性看做一个5位十进制的值，排名n对应特殊性值1*10^(5-n)，那么`内联样式`的特殊性值就是10000.对于多组复杂组合选择器，只要将它们各自的特殊性相加再进行比较就行了。
#### 层叠
如果特殊性值计算结果一样怎么办？   
1. 有`!important`的话，直接逾越所有特殊性，置为优先级首位。   
2. 来源排序：    

![0_1477611287148_upload-3695ec13-9282-48d5-bac8-8a6073cf4a28](http://7xpvnv.com2.z0.glb.qiniucdn.com/a3c41fa5-0e0e-42b6-9e9c-45c3dac122fb)    
如果来源排序排名高的获胜。   （比如我们覆写浏览器默认样式就是利用来源排序）
3. 按顺序排序，如果两个规则的**权重、来源和特殊性完全相同**，那么在样式表中**后出现的一个会胜出**。
