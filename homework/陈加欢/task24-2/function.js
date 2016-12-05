function hasClass(el,cls){
    var reg=new RegExp("(\\s|^)"+cls+"(\\s|$)","g");
    return reg.test(el.className);
}

function addClass(el,cls){
    if(!hasClass(el,cls)){
        el.className +=" "+cls;
    }
}

function removeClass(el,cls){
    if(hasClass(el,cls)){
        el.className=el.className.replace(cls,"");
	}
}

function isPhoneNum(str){
   return /^1[0-9]{10}$/.test(str)
}

function isValidUsername(str){
    return /^\w{3,10}$/.test(str)
}

 function isValidPassword(str){
    var a=/^\w{6,15}$/;
    var b=/(^[A-Z]+$)|(^[a-z]+$)|(^[0-9]+$)|(^_+$)/;
    if(a.test(str)){
        if(b.test(str)){
            return false;
        }
        else {
            return true;
        }
    }
    else{
        return false;
    }
}

 function ajax(opts){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange=function(){
            if(xmlhttp.readyState==4&&xmlhttp.status==200){
                var json = JSON.parse(xmlhttp.responseText);
                opts.success(json);
            }
            if(xmlhttp.status==404){
                opts.error();
            }
        };
        var dataStr = '';
        for(var key in opts.data){
            dataStr += key + '=' + opts.data[key]+'&';
        }
        dataStr = dataStr.substr(0,dataStr.length-1);

        if(opts.type.toLowerCase()==='get'){
            xmlhttp.open('get',opts.url+'?'+dataStr,false);
            xmlhttp.send();
        }
        if(opts.type.toLowerCase()==='post'){
            xmlhttp.open('post',opts.url,true);
            xmlhttp.sendRequestHeader('content-type','application/x-www-form-urlencoded');
            xmlhttp.send(dataStr);
        }
    }