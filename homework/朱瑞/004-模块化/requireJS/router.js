app.get('/water', function(req, res) {
    console.log(req.query);
    var bigData = [
        {"img-src":"imgs/luba.png",
            "p_name":"后摇二三事"},

        {"img-src":"imgs/anna.png",
            "p_name":"后摇二三事"},
        {"img-src":"imgs/asan.png",
            "p_name":"后摇二三事"},
        {"img-src":"imgs/dj.png",
            "p_name":"后摇二三事"},
        {"img-src":"imgs/dva.png",
            "p_name":"后摇二三事"},
        {"img-src":"imgs/faji.png",
            "p_name":"后摇二三事"},
        {"img-src":"imgs/heiyin.png",
            "p_name":"后摇二三事"},
        {"img-src":"imgs/jiqiren.png",
            "p_name":"后摇二三事"},
        {"img-src":"imgs/ju.png",
            "p_name":"后摇二三事"},
        {"img-src":"imgs/kuangshu.png",
            "p_name":"后摇二三事"},
        {"img-src":"imgs/liekong.png",
            "p_name":"后摇二三事"},
        {"img-src":"imgs/maomei.png",
            "p_name":"后摇二三事"},
        {"img-src":"imgs/sishen.png",
            "p_name":"后摇二三事"},
        {"img-src":"imgs/tianshi.png",
            "p_name":"后摇二三事"},
        {"img-src":"imgs/tuobiang.png",
            "p_name":"后摇二三事"},
        {"img-src":"imgs/xiaomei.png",
            "p_name":"孤独旅人陪民谣"},
        {"img-src":"imgs/xingxing.png",
            "p_name":"民谣在路上"},
    ];
    var	mesData = [];
    var curPage = req.query.curPage,
        perPageCount = req.query.perPageCount;

    for(var i =0;i<perPageCount;i++){
        mesData[i] = bigData[parseInt( Math.random()*bigData.length )];
    }
    console.log(mesData);
    res.send({
        "status":0,
        "data": mesData
    });
});
