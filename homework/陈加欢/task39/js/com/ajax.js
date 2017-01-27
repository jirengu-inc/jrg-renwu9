 
define(['jquery','waterfall'], function( $ ,waterFall) {

    //ajax后台获取数据
    var AjaxMoudle={
        init:function($load){
            this.$load=$load;
            this.curPage=2;
            this.pageNum=9;
            this.loadSource();
        },
        loadSource:function(){
            var $cur=this;
            this.$load.on("click",function(e){
                e.preventDefault();
                $.ajax({
                    url: 'http://platform.sina.com.cn/slide/album_tech',
                    type: 'GET',
                    dataType: 'jsonp', // http://platform.sina.com.cn/slide/album_tech?jsoncallback=func&app_key=1271687855&num=3&page=4
                    jsonp:"jsoncallback",
                    data: {
                        app_key: '1271687855',
                        num: $cur.pageNum,
                        page: $cur.curPage
                    },
                    success:function(ret){
                        if(ret && ret.status.code === "0"){
                            $cur.place(ret.data); 
                            $cur.curPage +=$cur.pageNum;
                        }
                    },
                    error:function(){
                        console.log("系统错误！");
                    }
                })
            })
        },
        place:function(items){
            var tpl="";
            for(var i=0; i<items.length; i++){
                tpl +="<li class='item'>";
                tpl +="<a href='"+ items[i].url+"'>";
                tpl +="<img src='"+items[i].img_url+"'></a>"
                tpl +="<h4>"+items[i].short_name+"</h4>";
                tpl +="<p class='intro'>"+items[i].short_intro+"</p></li>";
            }
            $(".portfolio ul").append(tpl);

            var defereds = [];  
            $(tpl).find('img').each(function(){
                var defer = $.Deferred();
                $(this).load(function(){
                    defer.resolve();
                });   //当每个图片加载完成后，执行 resolve
                defereds.push(defer);
            });
            $.when.apply(null,defereds).done(function() { 
                   waterFall.init($('.portfolio ul'));
            });
        }
    }
    return AjaxMoudle;
})   

// AjaxMoudle.init($("#load"))

 