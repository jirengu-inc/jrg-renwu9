## 一、dom对象的innerText和innerHTML属性有什么区别？
- innertext是一个属性（在jqury中是函数）。给元素内部做一个遍历，返回元素内部的**文本内容**（在多层次的时候由浅到深的顺序拼接内容）。
```Js
<p>段落
<span>ssss</span>
</p>
<script>
    document.getElementsByTagName('p');
    p = document.getElementsByTagName('p')[0];
    p.innerText;//"段落 ssss"
    p.innerHTML; //"段落<span>ssss</span>"
    p.innerHTML = '<a href="#">aaa</a>'//"<a href="#">aaa</a>";  将p里面修改为一个a链接
    p.innerText = '<a href='#'>asd</a>'//将p里面修改为这段<a href="#">asd</a> 文本。
</script>
```
- 而innerHTML则是返回元素内部的**HTML结构**。
- 比如在展示用户评论的时候更适合用innerText。为什么呢？比如我们过滤（过滤用户输入的标签或者其他东西，如script标签）不是特别充分的时候，或者是用户输入一些其他构造XSS工具的方法。输入一些特殊字符，这些特殊字符被存入数据库，其他用户刷新的时候，就能看到这个用户输入的这些东西。用innerHTML的话很容易受到xss的注入脚本攻击。相当于我执行了这些东西。
- 但是Node.innerText 是一个非标准的属性，在生产环境中，尽量不用innerText，用node.TextContent就可以取代他，来实现想要的功能。
## 二、elem.children和elem.childNodes的区别？
- elem.children返回该元素内的**Element节点**。
- elem.childNodes返回元素内**所有节点内容**（注意的一点是空格回车等也算Text节点）
```js
/*Gecko内核的浏览器会在源代码中标签内部有空白符的地方插入一个文本结点到文档中.因此,使用诸如 Node.firstChild 和 Node.previousSibling 之类的方法可能会引用到一个空白符文本节点*/
<div id="div-01">Here is div-01</div>
    <div id="div-02">Here is div-02</div>
<script>
 var el = document.getElementById('div-01').nextSibling,
    i = 1;
    console.log('sibling os div-01:');

    /*while (el) {
        console.log(i + '.' + el.nodeName);
        el = el.nextSibling;
        ++i;
    }*/
    for(el; el !== null; el = el.nextSibling) {
        console.log(i + '.' + el.nodeName);
        ++i;
    }
</script>
/*-------------------------------
sibling os div-01:
1.#text
2.DIV
3.#text
4.SCRIPT
5.DIV
从上面的例子中可以看出，在两个标签之间（即一个元素的闭合标签之后，下一个元素的起始标签之前）有空白出现时，会有#text 节点被插入到 DOM 中。使用 document.write 语句插入的两个元素之间不会有空白。
-------------------------------*/
```
## 三、查询元素有几种常见的方法？
- Element和Document对象**通用**的几个方法，只是范围不同(**整个文档VS当前元素节点**)。
1. `getElementsByClassName()`
 - 方法返回一个类似数组的对象（HTMLCollection实例对象），包括了所有class名字符合指定条件的元素，元素的变化实时反映在返回结果中。
 - 如果参数是一个空格分隔的字符串，元素的class必须符合所有字符串之中所有的class才会返回。
 - 正常模式下，CSS的class是大小写敏感的。（quirks mode下，大小写不敏感。）
2. `getElementsByTagName()`
 - 返回所有指定HTML标签的元素，返回值是一个类似数组的HTMLCollection对象，可以实时反映HTML文档的变化。如果没有任何匹配的元素，就返回一个空集。
 - 大小写不敏感。
 - 参数为*返回所有html元素
3. `querySelector() `
 - 接受参数为css选择器(可以多个，支持复杂选择器，不支持伪类选择器)，返回匹配该选择器的**第一个元素节点**，若没有，返回null。
 - 注意：放在Element对象中时，返回的还是**整个文档的第一个匹配元素**。
4. `querySelectorAll()`
 - 执行机制与querySelector()类似。区别是:
  (1) 返回一个Nodelist对象（**很像数组但不是**！），**包含所有**匹配给定选择器的节点。
  (2) querySelectorAll的返回结果不是动态集合，不会实时反映元素节点的变化。（**这个不懂**）
- Document专用
1. `document.getElementsByName()`
 - 用于选择拥有name属性的HTML元素（比如`<form>、<radio>、<img>、<frame>、<embed>和<object>`等），返回一个类似数组的的对象（NodeList对象的实例），因为name属性相同的元素可能不止一个。
2. `getElementById()`
 - 返回匹配指定id属性的元素节点。如果没有发现匹配的节点，则返回null。
 - 大小写敏感
 - 和document.querySelector方法的区别，并且getElementById效率高
 ```
document.getElementById('myElement')
document.querySelector('#myElement')
 ```
3. `document.elementFromPoint()` 参数为坐标值，返回位于页面指定位置最上层的Element子节点。
- Element专用
1. `Element.match()`方法返回一个布尔值，表示当前元素是否匹配给定的CSS选择器。
2. `Element.closest()`返回当前元素节点的最接近的父元素（或者当前节点本身），条件是必须匹配给定的CSS选择器。如果不满足匹配，则返回null。
- 常用的只有`document.detElementById()`和`querySelector()`返回元素节点，其他都返回类数组对象。
``` Js
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <p id="p1" > <span class="span1">ssss</span></p>
    <p id="p2" > <span class="span1">ssss</span></p>
    <article>
        <div id="div-01">Here is div-01
            <div id="div-02">Here is div-02
                <div id="div-03">Here is div-03</div>
            </div>
        </div>
        <div>test</div>
        <div id="div-01">Here is another div-01</div>;
    </article>
    <form name="x">I am a form.</form>
    <script>
        var a =  document.querySelectorAll('#div-02') ;
        console.log( document.getElementsByClassName('span1') );
        console.log( document.getElementsByTagName('div') );
        console.log( document.querySelector('#div-01') );
        console.log( document.querySelectorAll('#div-02') );
        console.log( document.getElementsByName('x') );
        console.log( document.getElementById('div-03') );
        console.log(a[0].matches('#div-02') ); //true
    </script>
</body>
</html>
```
![Paste_Image.png](http://upload-images.jianshu.io/upload_images/3415120-6d699e61196fb553.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 四、如何创建一个元素？如何给元素设置属性？
```Js
<script>
    //Create Element
    var div = document.createElement('div');
    var text = document.createTextNode('<p>"Hello-C"</p> ');
    div.appendChild(text);
    document.body.appendChild(div);
    //Create Attribute
    var attr = document.createAttribute('id');
    attr.value = 'div1';
    div.setAttributeNode(attr);
    //Or
    div.setAttribute('random', 'bilibili');
</script>
```
## 五、元素的添加、删除？
- 注意点：
1. 移除后的节点依然在内存中可以被使用。
2. `Node.cloneNode`会拷贝该节点所有属性，但丧失`addEventListener`方法和`on-`属性（即`node.onclick =  fn`），添加在这个节点上的事件回调函数。如果拷贝的是相同id的节点，应该修改id
3. 当用hasChildNode方法结合firstChild和nextSibling属性遍历后代所有节点时注意在Gecko内核浏览器下会遍历到空文本节点（详见MDN nextSibling一节）

```Js
<script>
    var div1 = document.createElement('div');
    var text = document.createTextNode('text');
    document.body.appendChild(div1);
    div1.parentNode.insertBefore(text, div1.nextSibling);//将text放到div1后面
    div1.appendChild(text);//移动原来text在dom中位置，放到div1内部最后一个节点位置
    if( div1.hasChildNodes() ) {
        var cloneTEXT = div1.firstChild.cloneNode(true); //深复制
    }
    text.parentNode.insertBefore(cloneTEXT, text);
    console.log(cloneTEXT.isEqualNode(text)); //true
    console.log(div1.contains(text)); //true
    console.log(div1.contains(cloneTEXT)); //false
    console.log( div1.compareDocumentPosition(text) ); //输出20 表明参数节点在当前节点内部和后面。010000 + 000100
    div1.normalize(); //将两个文本子节点合成一个  前面的那个包含文本节点包含所有文本节点，后面的文本节点还是找得到。(注意后面的节点已经不在dom中，但是在内存中)

    var span = document.createElement('span').appendChild(document.createTextNode('我是来replace的'));
    div1.replaceChild(span,cloneTEXT);
    //div1.replaceChild(span, text); 会报错，normalize后面的节点已经不在dom中，但是在内存中！！输出text节点还是可以的。
    while (div1.firstChild) {  //移除元素内所有节点。
        div1.removeChild(div1.firstChild);
    }
</script>
```
## 六、DOM0 事件和DOM2级在事件监听使用方式上有什么区别？
- DOM0：
1. 直接写在行内`onclick = "doSomeThing()"`;
2. `node.onclick = function () {}`;
3. `node.setAttribute('attri', 'value')`;
- 实例
```Js
<input type="button" value="Click Here" onclick="fn1(); fn2()" /> //依次执行fn1 fn2
```
``` Js
<input id="btn" type="button" onclick="fn1();fn2()" value="Click Here2" />
    function fn1() {
        console.log(2);
    }
    function fn2() {
        console.log(3);
    }
    function fn3() {
        console.log(1);
    }
    var btn = document.getElementById('btn');
    btn.onclick = fn3; //fn3覆盖fn1和fn2
```
```Js
<input id="btnClick" type="button" value="Click Here" />

<script type="text/javascript">
    var btnClick = document.getElementById('btnClick');
    btnClick.onclick = function showMessage() {
        alert(this.id);//输出btnClick
    };
</script>
```
```Js
<input id="btnClick" type="button" value="Click Here" />

<script type="text/javascript">
    var btnClick = document.getElementById('btnClick');
    function f() {
        console.log(1);
    }
    btnClick.setAttribute('onclick', 'f()');
</script>
```
- DOM2：
1. `node.addEventListener('事件类型', 函数, bool)`兼容性>=ie9
2. 可以添加多个事件到一个元素上
3. `node.attachEvent('事件处理函数名', 函数)`
- 实例
```Js
<input id="btnClick" type="button" value="Click Here" />

<script type="text/javascript">
    var btnClick = document.getElementById('btnClick');

    btnClick.addEventListener('click', function() {
        alert(this.id);
    }, false);

     var handler=function() {
        alert(this.id);
    }
    //输出btnclick和Hello 不会覆盖，但是被后面移除了所以不输出
    btnClick.addEventListener('click', handler, false);
    btnClick.removeEventListener('click', handler, false); //移除监听函数
</script>
```
```
<input id="btnClick" type="button" value="Click Here" />

<script type="text/javascript">
    var btnClick = document.getElementById('btnClick');
    var handler=function() {
        alert(this.id);
    }//输出undefined
    btnClick.attachEvent('onclick', handler);
    btnClick.detachEvent('onclick', handler);//但是这里又被移除了，所以上面没有输出
</script>
```
### 总结：主要的问题是浏览器兼容性和必要性。目前是否需要添加一个以上的事件到一个元素上？未来是否需要？大部分时候，你是需要的。所以，使用 attachEvent 和 addEventListener 是非常有必要的，不然用内联事件就好了。
## 七、`attachEvent`与`addEventListener`的区别？
1. **参数个数不相同**，这个最直观，addEventListener有三个参数，attachEvent只有两个，attachEvent添加的事件处理程序只能发生在冒泡阶段，addEventListener第三个参数可以决定添加的事件处理程序是在捕获阶段还是冒泡阶段处理（我们一般为了浏览器兼容性都设置为冒泡阶段）

2. **第一个参数意义不同**，addEventListener第一个参数是事件类型（比如click，load），而attachEvent第一个参数指明的是事件处理函数名称（onclick，onload）

3. **事件处理程序的作用域不相同**，addEventListener的作用域是元素本身，this是指的触发元素，而attachEvent事件处理程序会在全局变量内运行，this是window，所以刚才例子才会返回undefined，而不是元素id

4. **为一个事件添加多个事件处理程序时，执行顺序不同**，addEventListener添加会按照添加顺序执行，而attachEvent添加多个事件处理程序时顺序无规律(添加的方法少的时候大多是按添加顺序的反顺序执行的，但是添加的多了就无规律了)，所以添加多个的时候，不依赖执行顺序的还好，若是依赖于函数执行顺序，最好自己处理，不要指望浏览器
5. attachEvent只能ie用，addEventLisener主流都可以
[segmentFault](https://segmentfault.com/q/1010000000766310/a-1020000000777355)
[课件1](http://book.jirengu.com/fe/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/Javascript/event.html)
## 八、解释IE事件冒泡和DOM2事件传播机制？
1. IE事件冒泡：事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的元素
2. DOM2事件传播机制：事件捕获阶段，处于目标阶段，事件冒泡阶段，首先发生的是事件捕获，为截取事件提供机会，然后是实际目标接收事件，最后是冒泡阶段。
![](leanote://file/getImage?fileId=585211ba88747817f0000003)
## 九、如何阻止事件冒泡？ 如何阻止默认事件？
```Js
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Year!</title>
</head>
<body>
<input id="btnClick" type="button" value="Click Here" />

<script type="text/javascript">
    var btnClick = document.getElementById('btnClick');
    function getEvent(e) {
        console.log( e || window.event ); //在ie中不能将event对象作为参数传递，但是是window的属性
    }

    function getTarget(e) { // 事件的目标元素
        console.log( e.target || e.scrElement );
    }

    function preventDefault(e) { //取消该事件的默认方法
        if (e.preventDefault)
            e.preventDefault(); 
        else
            e.returnValue = false;
    }

    function stopPropagation(e) { //阻止事件在DOM中继续传播
        if (e.stopPropagation)
            e.stopPropagation(); 
        else
            e.cancelBubble = true;
    }
    function addEvent(node, type, handler) { //绑定监听函数到该节点上
        if (!node) return false;
        if (node.addEventListener) {
            node.addEventListener(type, handler, false); 
            return true;
        }
        else if (node.attachEvent) {
            node['e' + type + handler] = handler;
            node[type + handler] = function() {
                node['e' + type + handler](window.event);
            };
            node.attachEvent('on' + type, node[type + handler]);
            return true;
        }
        return false;
    }
    function removeEvent(node, type, handler) { //移除该事件的监听函数
        if (!node) return false;
        if (node.removeEventListener) {
            node.removeEventListener(type, handler, false);
            return true;
        }
        else if (node.detachEvent) {  
            node.detachEvent('on' + type, node[type + handler]);
            node[type + handler] = null;
        }
        return false;
    }
    addEvent(btnClick, 'click',getEvent);
</script>
</body>
</html>
```