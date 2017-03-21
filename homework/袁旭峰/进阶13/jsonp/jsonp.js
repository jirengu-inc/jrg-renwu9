var jsonpBtn=$('#jsonpBtn');
jsonpBtn.addEventListener('click',function(){
  createScript();
})
var corsBtn=$('#corsBtn')
function $(e){
  return document.querySelector(e);
}
function jsonp(data){
  var dailyWork=$('.dailyWork');
  var html='';
  for(var i=0;i<data.length;i++){
    html+='<li>'+data[i]+'</li>';
  }
  dailyWork.innerHTML=html;
}
function createScript(){
  var script=document.createElement('script');
  script.setAttribute('src','http://chen.com:8080/dailyWork?callback=jsonp');
  script.setAttribute('type','text/javascript');
  var body=$('body');
  body.appendChild(script);
  body.removeChild(script);
}
