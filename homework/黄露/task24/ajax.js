 function ajax(obj){
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && xhr.status === 200){
                    // var json = JSON.parse(xhr.responseText);
                    var json = xhr.responseText;
                    obj.success(json)
                }else if(xhr.readyState === 4 && xhr.status === 404){
                    obj.error()
                }
            };
            var datastr = '';
            for(var i in obj.data){
                    datastr += i+'='+obj.data[i]+'&';
            }
            datastr = datastr.substr(0,datastr.length-1);
            if(obj.type.toUpperCase() === 'GET'){
                xhr.open('GET',obj.url+'?'+datastr,true);
                xhr.send();
            }else if(obj.type.toUpperCase() === 'POST'){
                xhr.open('POST',obj.url,true);
                xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xhr.send(datastr);
            }
        }