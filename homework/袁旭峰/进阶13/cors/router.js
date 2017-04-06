app.get('/cors',function(req,res){
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
  var data=[];
  console.log(3);
  for(var i=0;i<3;i++){
    var index=parseInt(Math.random()*work.length);
    data[i]=work[index];
  }
  res.header("Access-Control-Allow-Origin",'*');
  res.send(data);
})
