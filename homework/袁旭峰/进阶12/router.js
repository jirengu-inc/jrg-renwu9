app.get('/more',function(req,res){
  var index=parseInt(req.query.index);
  var length=parseInt(req.query.length);
  var data=[];
  for(var i=0;i<length;i++){
    data.push(index+i);
  }
    res.send(data);
})
