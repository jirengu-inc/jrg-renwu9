/**
 * 使用范例
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */


app.get('/hello', function(req, res) {
	res.send({
		status: 0,
		msg: "hello 谁饥人谷"
	});
});



/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
/*app.get('/user/:uid', function(req, res) {
	console.log(req.params.uid); //100
	console.log(req.query.name); // 'ruoyu'
	res.send({
		status: 1,
		errorMsg: "请先注册"
	});
});*/
/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
app.get('/username/100', function(req, res) {
	console.log(req.params.uid); //100
	console.log(req.query.name); // 'ruoyu'
	res.send({
		status: 1,
		errorMsg: "请先注册"
	});
});

app.get('/getMore', function(req, res) {
	var start=req.query.start,
		len=req.query.len;
	var data=[];//数组也是对象
	//console.log(typeof data);
	for(var i = parseInt(start); i <= parseInt(start) + parseInt(len); i++){
		data.push(i);
		console.log(i);
	}
	res.send({
		status: 1,
		msg: data
	});
});
//如果有相同的返回1，没有返回0
app.get('/username/uid', function(req, res) {
	console.log(1);
	console.log(req.query.username);
	console.log(typeof req.query.username);
	if(req.query.username === 'whj'){
		res.send({
			status: 1
		});
	} else {
		res.send({
			status: 0
		})
	}

});
app.post('/username/uid', function(req, res) {
	console.log(1);
	console.log(req.query.username);
	console.log(typeof body.username);
	if(req.query.username === 'whj'){
		res.send({
			status: 1
		});
	} else {
		res.send({
			status: 0
		})
	}
});

/**
 * 发送 POST 请求， 有参数
 * POST /comment
 * query = { comment: "这是评论内容" }
 */
app.post('/comment', function(req, res) {
	console.log(req.body.comment); // "这是评论内容"
	res.send({
		status: 0,
		data: {
			cid: 100,
			comment: "这是评论内容"
		}
	});
});



/**
 * 页面路由，从模板渲染页面渲染页面, 
 * htttp://localhost:8080/user
 * 支持 ejs, jade 模板
 */
app.get('/user', function(req, res) {
	res.render('user.ejs', {
		username: '饥人谷'
	});
});