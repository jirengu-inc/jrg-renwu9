requirejs.config({   
    baseUrl:"./js/com" ,
    paths:{
    	"jquery":"../lib/jquery.min"
    }   
});
requirejs(["../main"]);