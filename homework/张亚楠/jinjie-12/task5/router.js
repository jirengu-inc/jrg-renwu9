app.get('/loadMore',function(req,res){

    var num = req.query.start;
    var len = req.query.length;
    var json =[];
    
    for(var i =0 ;i< len;i++){
        json.push('内容'+(parseInt(num)+i))
    }

    setTimeout(function(){

        res.send(json);
    },4000)
})