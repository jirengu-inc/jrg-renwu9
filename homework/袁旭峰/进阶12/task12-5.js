function $(e){
  return document.querySelector(e);
}
function $$(cls){
  return document.querySelectorAll(cls);
}
var btn=$('#btn');
var isDataArrive=true;
var listIndex=0;
var list=$('.list');
btn.addEventListener('click',function(){
  if(!isDataArrive){
    return 0;
  }
  isDataArrive=false;
  ajax({
    url:'/more',
    type:'get',
    data:{
      index:listIndex,
      length:5,
    },
    success:function(result){
      renderPage(result);
    },
    error:function(){
      console.log('出错了');
    }
  });
})
function ajax(dat){
  dat.url=dat.url||'';
  dat.type=dat.type||'get';
  var listindex=0;
  var datStr='';
  for(var key in dat.data){
    datStr+=key+'='+dat.data[key]+'&';
  }
  datStr=datStr.substr(0,datStr.length-1);
  var xml=new XMLHttpRequest;
  xml.onreadystatechange=function(){
    if(xml.readyState==4){
      isDataArrive=true;
      if(xml.status==200||xml.status==304){
        var result=JSON.parse(xml.responseText);
        console.log(result);
        dat.success(result);
        listIndex+=5;
      }
      else{
        dat.error();
      }
    }
  }
  if(dat.type.toLowerCase()==='get'){
    xml.open('get',dat.url+'?'+datStr,true);
    xml.send();
  }
  if (dat.type.toLowerCase()==='post'){
    xml.open('post',dat.url,true);
    xml.setRequestHeader('content-type','application/x-www-form-urlencoded')
    xml.send(subStr);
  }
}
function renderPage(result){
  var fragment=document.createDocumentFragment();
  for(var i=0;i<result.length;i++){
    var li=document.createElement('li');
    var liText=document.createTextNode('新闻'+result[i]);
    li.appendChild(liText);
    fragment.appendChild(li);
  }
  list.appendChild(fragment);
}
