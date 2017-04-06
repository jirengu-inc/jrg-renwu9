
app.get('/getNews',function(req,res){
    
    var news= [
        "第四条新闻",
        "第五条新闻",
        "第六条新闻",
        "第七条新闻",
        "第八条新闻",
        "第九条新闻",
        "第十条新闻",
        "第十一条新闻",
        "第十二条新闻",
        "第十三条新闻"
    ]
    
    var data = [];
    
    for(var i=0; i<3;i++){
        var index = parseInt(Math.random()*news.length) //随机生成news长度范围内的数
        data.push(news[index]);//把随机生成的news的第某项添加到data
        news.splice(index,1);//删除被添加过得news的项
    }

    var cb = req.query.callback;
    if(cb){
            res.send(cb +'('+ JSON.stringify(data) +')')
    }else{
        res.send(data)
    }
})