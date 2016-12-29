。
- 给window绑定事件，当前位置滚到`$().scrollTop()`[用这个获取]的位置，就判断是否有data-fixed（有了就不用一直添加属性了，提高性能。当然不判断，效果还是可以实现的）
- 如果没有，就给他添加css,fixed,left,top，width，这3个参数都要通过js获取。**容易忽略**的是当前元素设置fixed之后，clone的元素要紧跟着display:block。我可以用`$clone.show`

- 如果鼠标滚回去，就判断当前元素的当前垂直滚动条的位置。小于`$().scrollTop`这个位置的话，就将data-fixed设为false，并且移除style[**注意，removeAttr（'style'）移除的是行内style，css设置的不会移除]**同上，把clone的元素还是display:none掉，用`$clone.hide()`，如果不设置，在第二次以后往下拉的时候，还没到达元素那个地方，元素就跳动直接fixed粘到屏幕上了。其实是因为有那个复制的占了她的位置，我们判定的还是原来的`$(selector).scrollTop()`

- 还有一点注意的是，要clone()一个元素放在前面，防止本来的元素脱离文档流之后，其他的元素受到影响而导致页面跳动。按道理谁都可以隐藏。我们把clone()的隐藏在前面

- 重点就是当当前位置大于原位置的时候，设为fixed。
- 关于插件：就是
```
$.fn.stcik = function () {`
    `$(this)就是$('.nav')`
        //处理过程写在这里 

	}
	然后任意一个对象都可以使用该方法。我用`$('.nav').stick`调用该方法。
	```
	- 第二种
	```
	用`$('.nav').each(function(){})`实现多个stick
	```
	- 或者用function把处理过程包起来。
	```
	function stick(selector) {
	    var node = $(selevtor)
	    }
	    stick('.nav')调用
	    ```

