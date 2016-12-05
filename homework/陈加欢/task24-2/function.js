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

function ajax(opts) {
    //  做参数兼容
    opts.success = opts.success || function(){};
    opts.error = opts.error || function(){};
    opts.type = opts.type || 'get';
    opts.dataType = opts.dataType || 'json';
    opts.data = opts.data || {};

    var dataStr = '';
    for (var key in opts.data) {
        dataStr += key + '=' + opts.data[key] + '&';
    }
    dataStr = dataStr.substr(0, dataStr.length - 1);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4) {
            if(xmlhttp.status === 200){
                if(opts.dataType === 'text'){
                    opts.success(xmlhttp.responseText);
                }
                if(opts.dataType === 'json'){
                    var json = JSON.parse(xmlhttp.responseText);
                    opts.success(json);                 
                }
        
            }else{
                opts.error();   
            }

        }
    };

    if (opts.type.toLowerCase() === 'post') {
        xmlhttp.open(opts.type, opts.url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(dataStr);
    }
    if (opts.type.toLowerCase() === 'get') {
        xmlhttp.open(opts.type, opts.url + '?' + dataStr, true);
        xmlhttp.send();
    }
}