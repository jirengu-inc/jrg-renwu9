app.get('/dailyWork',function(req,res){
  var work=[
    '打理迷途之家',
    '照顾紫',
    '教导橙',
    '视察结界',
    '去人里观察民情',
    '访问白玉楼',
    '暗访红魔馆',
    '看望灵梦',
    '光顾香霖堂',
    '冬眠'
  ]
  var hasCallback=req.query.callback;
  var data=[];
  for(var i=0;i<3;i++){
    var index=parseInt(Math.random()*work.length);
    data[i]=work[index];
  }
  var dailyWork=(hasCallback+'('+JSON.stringify(data)+')');
  res.send(dailyWork);
})
