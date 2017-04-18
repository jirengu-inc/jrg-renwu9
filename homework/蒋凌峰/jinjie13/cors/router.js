app.get('/getNews', function (req, res) {

	var news = [
		"中央第十一巡视组原组长张化为被查",
		"这位90岁老人身价千亿 却每天骑自行车上班",
		"济南连夜处理“环保部督查组执法被锁门扣留",
		"朝鲜人的春日周末",
		"美国亮出半岛问题底线 中方回应",
		"美在阿投“炸弹之母”现场照曝光 或对朝定点清除",
		"东北开种“天价玉米” 卖价是普通玉米20倍",
		"贵州一客车坠河致13死",
		"40岁警察凌晨工作时去世 千人送行",
		"韩媒：金正恩妹妹全面染指权力 高层见她全部起立",
		"撤县设市”冰冻20年再开闸 县长齐刷刷改任市长",
		"瓜达尔民众：盼望习主席来瓜达尔港看一看",
		"“辱国议员”赴台再“播独”",
		"中组部：项俊波已被免职"
	];

	var data = [];
	for (var i = 0; i < 3; i++) {
		var index = parseInt(Math.random() * news.length);
		data.push(news[index]);
		news.splice(index, 1);
	}


	res.header("Access-Control-Allow-Origin", "http://abc.com:8080");

	res.send(data);

});