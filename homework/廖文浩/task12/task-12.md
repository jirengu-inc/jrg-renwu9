### 什么是 CSS hack
CSS hack是一种针对不同浏览器及版本对CSS属性的支持参差不一的情况的兼容方法的总称，目的是达到各个浏览器下最佳的效果体验。一般有三类方案： `CSS属性前缀法`, `选择器前缀法`, `IE条件注释法`.    

### 谈一谈浏览器兼容的思路    
兼容是一件增加项目时间成本的任务，间接地影响了项目的总成本，所以在进行兼容前先要确定：**到底做不做兼容？**    
一般我们以产品的角度去看待这个问题，有如下几个方面：    

1. 受众是谁？
2. 受众浏览器使用情况，各版本比例？
3. 产品是效果优先？ 还是基本功能优先？
4. 兼容到什么版本？
5. 预算成本

之后进行技术选型，考虑到各个框架的兼容性进行选择。    

---

### 列举5种以上浏览器兼容的写法
**1.条件注释**    

```html
<!–-[if IE 7]>
<link rel="stylesheet" href="ie7.css" type="text/css" />
<![endif]–->
```

**2.IE前缀hack**   
 
```css
.clearfix{
	_color: blue; /*IE6*/
	*zoom:1; /*IE6 IE7*/
	color: red\9; /*IE9*/
}
.block{
	display: inline-block; /*IE8以下不支持*/
	*display: inline;
	*zoom: 1;
}
```

**3.厂商前缀**    

```css
.shadow {
-webkit-box-shadow: 0 3px 5px #FFF; /*safari*/
-moz-box-shadow: 0 3px 5px #FFF; /*火狐*/
-o-box-shadow: 0 3px 5px #FFF; /*opera*/
box-shadow: 0 3px 5px #FFF;
/* 还有一个 -ms- ，对应那些乱七八糟的浏览器 */
}
```

**4.替代写法**

```css
/* IE7之下不支持<a>以外的hover
div:hover{
	color: red;
}
*/
/*换为:*/
a:hover{
	color: red;
	display: block;
	/* div 其他属性 */
}
```

---

### 以下工具/名词是做什么的?
**条件注释:** 区分IE版本以及IE版本的一种兼容办法。一般用来包裹html标签.    

**IE Hack:** 针对IE个版本的兼容写法     

**js 能力检测:** 针对JS的兼容性的一种方法，检测页面内容，封装函数。    

**html5shiv.js：** 针对IE9以下，解决对HTML5标签的支持问题.    

**respond.js:** 使得IE678支持媒体查询.     

**css reset:** 重置标签默认样式.     

**normalize.css:** 相对与css-reset更优化的解决方案，统一标签默认样式，清除一些不需要的样式.    

**Modernizr:** 使得老版浏览器支持Html5&CSS3新特性.    

**postCSS:** 使用JS转换为CSS   

----

### 一般在哪个网站查询属性兼容性？
[查询： caniuse.com](caniuse.com)    
[提供解决方案： browserhacks.com](browserhacks.com)
