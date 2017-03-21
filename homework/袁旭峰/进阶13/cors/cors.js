function $(e){
  return document.querySelector(e);
}
var corsBtn=$('#corsBtn');
corsBtn.addEventListener('click',function(){
  isDataArrive=false;
  ajax({
    url:'http://chen.com:8080/cors',
    type:'get',
    success:function(result){
      renderPage(result);
    },
    error:function(){
      console.log('commnication error');
    }
  })
})
function ajax(data){
  var url=data.url||'';
  var type=data.data||'get';
  var isDataArrive=true;
  var xml=new XMLHttpRequest;
  xml.onreadystatechange=function(){
    if(xml.readyState==4){
      isDataArrive=true;
      if(xml.status==200||xml.status==304){
        var result=JSON.parse(xml.responseText);
        data.success(result);
      }
      else{
        data.error();
      }
    }
  }
  if(data.type==='get'){
    xml.open(data.type,data.url,true);
    xml.send();
  }
  if(data.type==='post'){
    xml.open(data.type,data.url,true);
    xml.setRequestHeader('content-type','application/x-www-form-urlencoded');
    xml.send();
  }
}
function renderPage(result){
  var dailyWork=$('.dailyWork');
  var html='';
  for(var i=0;i<result.length;i++){
    html+='<li>'+result[i]+'</li>';
  }
  console.log(dailyWork.innerHTML);
  dailyWork.innerHTML=html;
}
