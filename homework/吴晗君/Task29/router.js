app.get('/getMore', function(req, res) {
	var start=req.query.start,
	len=req.query.len;
	var data=[];//数组也是对象
	//console.log(typeof data);
	console.log(typeof start);
	for(var i = parseInt(start); i < parseInt(start) + parseInt(len); i++){
		data.push(i);
		console.log(i);
	}
	res.send({
		status: 1,
		msg: data
	});
});
