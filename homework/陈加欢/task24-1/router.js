app.get('/getmore', function(req, res) {
	var start=req.query.start,   
		len=req.query.len;  
	var data=[];
	for(var i=parseInt(start); i<parseInt(start)+parseInt(len); i++){  
		data.push(i);   
	}
	res.send({
		status: 1,
		msg: data,
	});
});