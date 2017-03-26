app.get('/dalaynews', function(req, res) {
    var index = req.query.index
    var length = req.query.length
    var database = [{
            image: 'https://static.mengniang.org/common/thumb/2/25/Th09cover.jpg/250px-Th09cover.jpg',
            title: '北京实施免费自然葬：罐体可降解 不保留骨灰',
            brif: '北京实施免费自然葬：罐体可降解 不保留骨灰'
        },
        {
            image: 'https://static.mengniang.org/common/thumb/4/45/TH14Cover.jpg/250px-TH14Cover.jpg',
            title: '男子高速掉头被记12分 自扇耳光向交警求情',
            brif: '男子高速掉头被记12分 自扇耳光向交警求情'
        },
        {
            image: 'https://static.mengniang.org/common/thumb/a/a0/Th10Cover.jpg/250px-Th10Cover.jpg',
            title: '香港40米“通天扶梯”急停 18人受伤',
            brif: '香港40米“通天扶梯”急停 18人受伤'
        },
        {
            image: 'https://static.mengniang.org/common/thumb/d/d2/TH15Cover.jpg/250px-TH15Cover.jpg',
            title: '轿车违规变道被30吨西瓜砸扁 交警刨瓜救急人',
            brif: '轿车违规变道被30吨西瓜砸扁 交警刨瓜救急人'
        },
        {
            image: 'https://static.mengniang.org/common/thumb/6/66/Th13cover.jpg/250px-Th13cover.jpg',
            title: '今日话题：骑共享单车摔伤，到底应该谁来赔？',
            brif: '今日话题：骑共享单车摔伤，到底应该谁来赔？'
        },
        {
            image: 'https://static.mengniang.org/common/thumb/c/c1/Th145Cover.jpg/250px-Th145Cover.jpg',
            title: '目睹母亲欠债遭11人凌辱 男子刺死1人被判无期',
            brif: '目睹母亲欠债遭11人凌辱 男子刺死1人被判无期'
        },
        {
            image: 'https://static.mengniang.org/common/thumb/5/5d/Th095Cover.jpg/250px-Th095Cover.jpg',
            title: '男子洗脑控制30余名聋哑人盗窃 每晚视频汇报',
            brif: '男子洗脑控制30余名聋哑人盗窃 每晚视频汇报'
        },

        {
            image: 'https://static.mengniang.org/common/thumb/3/3c/Touhoushinkirou.jpg/250px-Touhoushinkirou.jpg',
            title: '小学校长以传授法术为名拍学生不雅照 自称卖钱',
            brif: '小学校长以传授法术为名拍学生不雅照 自称卖钱'
        },
        {
            image: 'https://static.mengniang.org/common/thumb/a/ae/Th12cover.jpg/250px-Th12cover.jpg',
            title: '韩客轮沉没3年重见天日 船体“沧桑”',
            brif: '韩客轮沉没3年重见天日 船体“沧桑”'
        },
        {
            image: 'https://static.mengniang.org/common/thumb/5/52/Th07cover.jpg/250px-Th07cover.jpg',
            title: '广西一辆大货车冲向小学生 致3死2伤',
            brif: '心碎！广西一辆大货车冲向小学生 致3死2伤'
        },
        {
            image: 'https://static.mengniang.org/common/thumb/5/59/Th08cover.jpg/250px-Th08cover.jpg',
            title: '90后女入殓师：曾听到逝者发出“呵啊”一声',
            brif: "90后女入殓师：曾听到逝者发出“呵啊”一声"
        },
        {
            image: 'https://static.mengniang.org/common/thumb/2/23/Th128cover.jpg/250px-Th128cover.jpg',
            title: '国产大型客机C919通过首飞技术评审',
            brif: '国产大型客机C919通过首飞技术评审'
        }
    ]
    var result = []
    for (var i = 0; i < length; i++) {
        result.push(database[parseInt(index) + i])
    }
    var ret = JSON.stringify(result)
    res.send(ret)
})