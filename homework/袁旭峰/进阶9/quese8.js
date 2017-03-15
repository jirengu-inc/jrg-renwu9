function addEventlistener(node,type,handle){
  if(node){
    if(node.addEventlistener){
      node.addEventListener(type,handle);
    }
    else if(node.attachEvent){
      node["e"+type+handle]=handle;
      node[type+handle]=function(){
        node["e"+type+handle](window.event);
      };
      node.attachEvent("on"+type,node[type+handle]);
    }
    else{
      return false;
    }
  }
  else{
    return false;
  }
}
function removeEventListener(node,type,handle){
  if(node){
    if(node.removeEventListener){
      node.removeEventListener(type,handle);
    }
    else if(node.detachEvent){
      node["e"+type+handle]=handle;
      node[type+handle]=function(){
        node["e"+type+handle](window.event);
      };
      node.detachEvent("on"+type,node[type+handle]);
    }
    else{
      return false;
    }
  }
  else{
    return false;
  }
}
