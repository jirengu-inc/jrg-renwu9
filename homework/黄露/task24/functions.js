function isValidUsernm(str){
    return /^\w{3,10}$/.test(str);
}   //判断用户名是否合法
function isValidPassw(str){
	if(str.length<6 || str.length>15){
		return false;
	}else if(/[^A-z_0-9]/.test(str)){
		return false;
	}else if(/(^[a-z]+$)|(^[A-Z]+$)|(^_+$)|(^\d+$)/g.test(str)){
		return false;
	}else{
		return true;
	}
} //判断密码格式是否符合大写字母、小写、数字、下划线最少两种，6-15个字符。
function addClass(el,cls){
    var reg=new RegExp('(\\s|^)'+cls+'(\\s|$)','g');
    if(reg.test(el.className)){
        console.log(cls+' has been exsited');
    }else{
        return el.className=el.className+' '+cls;
    }
}
function hasClass(el,cls){
    var reg=new RegExp('(\\s|^)'+cls+'(\\s|$)','g');
    return reg.test(el.className);
}
function removeClass(el,cls){
    var reg=new RegExp('(\\s|^)'+cls+'(\\s|$)','g');
    if(reg.test(el.className)){
        return el.className=el.className.replace(cls,'');
    }else{
        return el.className;
    }
}
