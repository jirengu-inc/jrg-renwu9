


   define(['jquery'],function($){
       
       var pageIndex =0;//每次后端给一页数据 一页数据加载3个图片
        $('.more').on('click',function(){
            $.get('/getNews',{page:pageIndex}).done(function(ret){
                if(ret.status === 0){//与后端约定status===0时数据发送成功
                    pageIndex++;
                    appendHtml(ret.data)//ret.data获取后端retNews

                }else{
                    alert('获取新闻出错')
                }
                
            }).fail(function(){
                alert('系统异常')
            })
        })


        function appendHtml(news){
            if(news.length === 0){
                $('.more').remove();
               
            }
            var  html ='';//接受到数据后拼接html
            $.each(news,function(){
                html +='<li >';
                html +=' <a href="javascript:;">';
                html += '  <img src="'+ this.img +'" alt="">';
                html +='   <span class="cover"></span>';
                html +='</a>'
                html +=' <h3>'+this.title+'</h3>';
                html +=' <p>'+this.brif+'</P> '
                html +='</li>';

            })
            $('.img-ct').append(html);

        }

   })
  

