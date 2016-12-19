## һ��dom�����innerText��innerHTML������ʲô����
- innertext��һ�����ԣ���jqury���Ǻ���������Ԫ���ڲ���һ������������Ԫ���ڲ���**�ı�����**���ڶ��ε�ʱ����ǳ�����˳��ƴ�����ݣ���
```Js
<p>����
<span>ssss</span>
</p>
<script>
    document.getElementsByTagName('p');
    p = document.getElementsByTagName('p')[0];
    p.innerText;//"���� ssss"
    p.innerHTML; //"����<span>ssss</span>"
    p.innerHTML = '<a href="#">aaa</a>'//"<a href="#">aaa</a>";  ��p�����޸�Ϊһ��a����
    p.innerText = '<a href='#'>asd</a>'//��p�����޸�Ϊ���<a href="#">asd</a> �ı���
</script>
```
- ��innerHTML���Ƿ���Ԫ���ڲ���**HTML�ṹ**��
- ������չʾ�û����۵�ʱ����ʺ���innerText��Ϊʲô�أ��������ǹ��ˣ������û�����ı�ǩ����������������script��ǩ�������ر��ֵ�ʱ�򣬻������û�����һЩ��������XSS���ߵķ���������һЩ�����ַ�����Щ�����ַ����������ݿ⣬�����û�ˢ�µ�ʱ�򣬾��ܿ�������û��������Щ��������innerHTML�Ļ��������ܵ�xss��ע��ű��������൱����ִ������Щ������
- ����Node.innerText ��һ���Ǳ�׼�����ԣ������������У���������innerText����node.TextContent�Ϳ���ȡ��������ʵ����Ҫ�Ĺ��ܡ�
## ����elem.children��elem.childNodes������
- elem.children���ظ�Ԫ���ڵ�**Element�ڵ�**��
- elem.childNodes����Ԫ����**���нڵ�����**��ע���һ���ǿո�س���Ҳ��Text�ڵ㣩
```js
/*Gecko�ں˵����������Դ�����б�ǩ�ڲ��пհ׷��ĵط�����һ���ı���㵽�ĵ���.���,ʹ������ Node.firstChild �� Node.previousSibling ֮��ķ������ܻ����õ�һ���հ׷��ı��ڵ�*/
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
������������п��Կ�������������ǩ֮�䣨��һ��Ԫ�صıպϱ�ǩ֮����һ��Ԫ�ص���ʼ��ǩ֮ǰ���пհ׳���ʱ������#text �ڵ㱻���뵽 DOM �С�ʹ�� document.write �����������Ԫ��֮�䲻���пհס�
-------------------------------*/
```
## ������ѯԪ���м��ֳ����ķ�����
- Element��Document����**ͨ��**�ļ���������ֻ�Ƿ�Χ��ͬ(**�����ĵ�VS��ǰԪ�ؽڵ�**)��
1. `getElementsByClassName()`
 - ��������һ����������Ķ���HTMLCollectionʵ�����󣩣�����������class���ַ���ָ��������Ԫ�أ�Ԫ�صı仯ʵʱ��ӳ�ڷ��ؽ���С�
 - ���������һ���ո�ָ����ַ�����Ԫ�ص�class������������ַ���֮�����е�class�Ż᷵�ء�
 - ����ģʽ�£�CSS��class�Ǵ�Сд���еġ���quirks mode�£���Сд�����С���
2. `getElementsByTagName()`
 - ��������ָ��HTML��ǩ��Ԫ�أ�����ֵ��һ�����������HTMLCollection���󣬿���ʵʱ��ӳHTML�ĵ��ı仯�����û���κ�ƥ���Ԫ�أ��ͷ���һ���ռ���
 - ��Сд�����С�
 - ����Ϊ*��������htmlԪ��
3. `querySelector() `
 - ���ܲ���Ϊcssѡ����(���Զ����֧�ָ���ѡ��������֧��α��ѡ����)������ƥ���ѡ������**��һ��Ԫ�ؽڵ�**����û�У�����null��
 - ע�⣺����Element������ʱ�����صĻ���**�����ĵ��ĵ�һ��ƥ��Ԫ��**��
4. `querySelectorAll()`
 - ִ�л�����querySelector()���ơ�������:
  (1) ����һ��Nodelist����**�������鵫����**������**��������**ƥ�����ѡ�����Ľڵ㡣
  (2) querySelectorAll�ķ��ؽ�����Ƕ�̬���ϣ�����ʵʱ��ӳԪ�ؽڵ�ı仯����**�������**��
- Documentר��
1. `document.getElementsByName()`
 - ����ѡ��ӵ��name���Ե�HTMLԪ�أ�����`<form>��<radio>��<img>��<frame>��<embed>��<object>`�ȣ�������һ����������ĵĶ���NodeList�����ʵ��������Ϊname������ͬ��Ԫ�ؿ��ܲ�ֹһ����
2. `getElementById()`
 - ����ƥ��ָ��id���Ե�Ԫ�ؽڵ㡣���û�з���ƥ��Ľڵ㣬�򷵻�null��
 - ��Сд����
 - ��document.querySelector���������𣬲���getElementByIdЧ�ʸ�
 ```
document.getElementById('myElement')
document.querySelector('#myElement')
 ```
3. `document.elementFromPoint()` ����Ϊ����ֵ������λ��ҳ��ָ��λ�����ϲ��Element�ӽڵ㡣
- Elementר��
1. `Element.match()`��������һ������ֵ����ʾ��ǰԪ���Ƿ�ƥ�������CSSѡ������
2. `Element.closest()`���ص�ǰԪ�ؽڵ����ӽ��ĸ�Ԫ�أ����ߵ�ǰ�ڵ㱾���������Ǳ���ƥ�������CSSѡ���������������ƥ�䣬�򷵻�null��
- ���õ�ֻ��`document.detElementById()`��`querySelector()`����Ԫ�ؽڵ㣬�������������������
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

## �ġ���δ���һ��Ԫ�أ���θ�Ԫ���������ԣ�
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
## �塢Ԫ�ص���ӡ�ɾ����
- ע��㣺
1. �Ƴ���Ľڵ���Ȼ���ڴ��п��Ա�ʹ�á�
2. `Node.cloneNode`�´���ýڵ��������ԣ���ɥʧ`addEventListener`������`on-`���ԣ���`node.onclick =  fn`�������������ڵ��ϵ��¼��ص��������������������ͬid�Ľڵ㣬Ӧ���޸�id
3. ����hasChildNode�������firstChild��nextSibling���Ա���������нڵ�ʱע����Gecko�ں�������»���������ı��ڵ㣨���MDN nextSiblingһ�ڣ�

```Js
<script>
    var div1 = document.createElement('div');
    var text = document.createTextNode('text');
    document.body.appendChild(div1);
    div1.parentNode.insertBefore(text, div1.nextSibling);//��text�ŵ�div1����
    div1.appendChild(text);//�ƶ�ԭ��text��dom��λ�ã��ŵ�div1�ڲ����һ���ڵ�λ��
    if( div1.hasChildNodes() ) {
        var cloneTEXT = div1.firstChild.cloneNode(true); //���
    }
    text.parentNode.insertBefore(cloneTEXT, text);
    console.log(cloneTEXT.isEqualNode(text)); //true
    console.log(div1.contains(text)); //true
    console.log(div1.contains(cloneTEXT)); //false
    console.log( div1.compareDocumentPosition(text) ); //���20 ���������ڵ��ڵ�ǰ�ڵ��ڲ��ͺ��档010000 + 000100
    div1.normalize(); //�������ı��ӽڵ�ϳ�һ��  ǰ����Ǹ������ı��ڵ���������ı��ڵ㣬������ı��ڵ㻹���ҵõ���(ע�����Ľڵ��Ѿ�����dom�У��������ڴ���)

    var span = document.createElement('span').appendChild(document.createTextNode('������replace��'));
    div1.replaceChild(span,cloneTEXT);
    //div1.replaceChild(span, text); �ᱨ��normalize����Ľڵ��Ѿ�����dom�У��������ڴ��У������text�ڵ㻹�ǿ��Եġ�
    while (div1.firstChild) {  //�Ƴ�Ԫ�������нڵ㡣
        div1.removeChild(div1.firstChild);
    }
</script>
```
## ����DOM0 �¼���DOM2�����¼�����ʹ�÷�ʽ����ʲô����
- DOM0��
1. ֱ��д������`onclick = "doSomeThing()"`;
2. `node.onclick = function () {}`;
3. `node.setAttribute('attri', 'value')`;
- ʵ��
```Js
<input type="button" value="Click Here" onclick="fn1(); fn2()" /> //����ִ��fn1 fn2
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
    btn.onclick = fn3; //fn3����fn1��fn2
```
```Js
<input id="btnClick" type="button" value="Click Here" />

<script type="text/javascript">
    var btnClick = document.getElementById('btnClick');
    btnClick.onclick = function showMessage() {
        alert(this.id);//���btnClick
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
- DOM2��
1. `node.addEventListener('�¼�����', ����, bool)`������>=ie9
2. ������Ӷ���¼���һ��Ԫ����
3. `node.attachEvent('�¼���������', ����)`
- ʵ��
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
    //���btnclick��Hello ���Ḳ�ǣ����Ǳ������Ƴ������Բ����
    btnClick.addEventListener('click', handler, false);
    btnClick.removeEventListener('click', handler, false); //�Ƴ���������
</script>
```
```
<input id="btnClick" type="button" value="Click Here" />

<script type="text/javascript">
    var btnClick = document.getElementById('btnClick');
    var handler=function() {
        alert(this.id);
    }//���undefined
    btnClick.attachEvent('onclick', handler);
    btnClick.detachEvent('onclick', handler);//���������ֱ��Ƴ��ˣ���������û�����
</script>
```
### �ܽ᣺��Ҫ������������������Ժͱ�Ҫ�ԡ�Ŀǰ�Ƿ���Ҫ���һ�����ϵ��¼���һ��Ԫ���ϣ�δ���Ƿ���Ҫ���󲿷�ʱ��������Ҫ�ġ����ԣ�ʹ�� attachEvent �� addEventListener �Ƿǳ��б�Ҫ�ģ���Ȼ�������¼��ͺ��ˡ�
## �ߡ�`attachEvent`��`addEventListener`������
1. **������������ͬ**�������ֱ�ۣ�addEventListener������������attachEventֻ��������attachEvent��ӵ��¼��������ֻ�ܷ�����ð�ݽ׶Σ�addEventListener�������������Ծ�����ӵ��¼�����������ڲ���׶λ���ð�ݽ׶δ�������һ��Ϊ������������Զ�����Ϊð�ݽ׶Σ�

2. **��һ���������岻ͬ**��addEventListener��һ���������¼����ͣ�����click��load������attachEvent��һ������ָ�������¼����������ƣ�onclick��onload��

3. **�¼�����������������ͬ**��addEventListener����������Ԫ�ر���this��ָ�Ĵ���Ԫ�أ���attachEvent�¼�����������ȫ�ֱ��������У�this��window�����Ըղ����ӲŻ᷵��undefined��������Ԫ��id

4. **Ϊһ���¼���Ӷ���¼��������ʱ��ִ��˳��ͬ**��addEventListener��ӻᰴ�����˳��ִ�У���attachEvent��Ӷ���¼��������ʱ˳���޹���(��ӵķ����ٵ�ʱ�����ǰ����˳��ķ�˳��ִ�еģ�������ӵĶ��˾��޹�����)��������Ӷ����ʱ�򣬲�����ִ��˳��Ļ��ã����������ں���ִ��˳������Լ�������Ҫָ�������
5. attachEventֻ��ie�ã�addEventLisener����������
[segmentFault](https://segmentfault.com/q/1010000000766310/a-1020000000777355)
[�μ�1](http://book.jirengu.com/fe/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/Javascript/event.html)
## �ˡ�����IE�¼�ð�ݺ�DOM2�¼��������ƣ�
1. IE�¼�ð�ݣ��¼���ʼʱ��������Ԫ�ؽ��գ�Ȼ�������ϴ�������Ϊ�������Ԫ��
2. DOM2�¼��������ƣ��¼�����׶Σ�����Ŀ��׶Σ��¼�ð�ݽ׶Σ����ȷ��������¼�����Ϊ��ȡ�¼��ṩ���ᣬȻ����ʵ��Ŀ������¼��������ð�ݽ׶Ρ�
![](leanote://file/getImage?fileId=585211ba88747817f0000003)
## �š������ֹ�¼�ð�ݣ� �����ֹĬ���¼���
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
        console.log( e || window.event ); //��ie�в��ܽ�event������Ϊ�������ݣ�������window������
    }

    function getTarget(e) { // �¼���Ŀ��Ԫ��
        console.log( e.target || e.scrElement );
    }

    function preventDefault(e) { //ȡ�����¼���Ĭ�Ϸ���
        if (e.preventDefault)
            e.preventDefault(); 
        else
            e.returnValue = false;
    }

    function stopPropagation(e) { //��ֹ�¼���DOM�м�������
        if (e.stopPropagation)
            e.stopPropagation(); 
        else
            e.cancelBubble = true;
    }
    function addEvent(node, type, handler) { //�󶨼����������ýڵ���
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
    function removeEvent(node, type, handler) { //�Ƴ����¼��ļ�������
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