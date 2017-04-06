app.get('/usermeeage',function(req,res){
    
   var  username = req.query.username;
   var password = req.query.password;
   var ret = {};
   ret.username =username;
   ret.password =password;
   ret = JSON.stringify(ret);
   res.send(ret);

})