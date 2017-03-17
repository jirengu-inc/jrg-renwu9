app.get('/getNews',function(req,res){

    var news = [
        "头条新闻5",
        "头条新闻6",
        "头条新闻7",
        "头条新闻8",
        "头条新闻9",
        "头条新闻10",
        "头条新闻11",
        "头条新闻12"

    ]
    
     var data =[];
     for(var i=0;i<4;i++){

         var index = parseInt(Math.random()*news.length);
         data.push(news[index]);
         news.splice(index,1);
     }
     res.header("Access-Control-Allow-Origin","http://zyn.com:8080")//表示这个后台接受来自zyn.com的请求
     //res.header("Access-Control-Allow-Origin","*")//表示这个后台接受来自任意*的请求
     res.send(data)
    
})