请求返回的对象数组，每个对象里包含4条信息{图片，标题，解释，图片可点的超链接}
# 总结：
## 认识到了mock的重要性。

在写这个页面时，新浪的新闻接口特别不稳定，每次刷新页面都要很久而且不一定出的来。遭受折磨之后决定自己mock，发现整个世界都变好了=，=。恩，总结一下页面吧。

##　页面思路：

### 一、用ajax跨域发送请求接收数据。

数据类型为jsonp。在发送的请求里还要添加一个app_key。大致是为了新浪那边验证吧。因为是用jsonp的形式跨域，所以还要有回调函数。必须将函数名`jsoncallback`传给新浪后台文件。按道理返回的应该是`jsoncallback`(数据)的形式。我在jQuery的success函数下输出的返回内容为还是一个json对象。我猜是新浪后台规定了必须传这个函数名后台才将数据包裹返回。然后是jQuery内部将传回来的数据做了修改。然后得到的数据直接可以调用了。
因为用户每次只需要看10张图，怎么每次得到10张图片呢?利用page和Num和后端约定好，(翻页概念)我发送page：1，num：10就是第一页的10张。后面page++就可以了。这样，后台每次给我发送10张图片。
![Paste_Image.png](http://upload-images.jianshu.io/upload_images/3415120-a7d3d046da139922.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![Paste_Image.png](http://upload-images.jianshu.io/upload_images/3415120-ce37d578e641376b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
请求内容为下图，也加了jQuery的内容
![Paste_Image.png](http://upload-images.jianshu.io/upload_images/3415120-dcdfdb94d13b0918.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 二、将接受的数据字符串相加构成节点。放到DOM树上。

### 三、将节点用瀑布流布局的方式渲染在页面上。

#### 注意点一：必须等到页面上的图片加载完成之后才能进行瀑布流布局。所以，下面的是必须的。

[阮一峰老师详细解释](http://www.ruanyifeng.com/blog/2011/08/a_detailed_explanation_of_jquery_deferred_object.html)
```
 $nodes.find('img').each(function(){
            var defer = $.Deferred();
            $(this).load(function(){
                defer.resolve();
            });   //当每个图片加载完成后，执行 resolve
            defereds.push(defer);
        });
        $.when.apply(null,defereds).done(function() { //当所有的图片都执行 resolve 后，即全部图片加载后，执行下面的内容
            console.log('new images all loaded ...');
            //当节点里的图片全部加载后再使用瀑布流计算，否则会因为图片未加载 item 高度计算错误导致瀑布流高度计算出问题
            waterfall($nodes);
        });
```

#### 注意点二：将存储高度的数组初始化放到布局外面。

```
   /*$('.img-ct').find('img').each(function(){
        $(this).on('load', function () {
            waterfall(); //这样的话所有节点都重新排列。
        }) 这种适用于将瀑布流高度数组放到放到该函数中，然后瀑布流函数中的
    });  $node改为$('.item')，这样的话每次加载完图片都全部重新渲染一次，极大地浪费性能*/
```
