app.get('/dalayLoad', function(req, res) {
    var index = req.query.index
    var length = req.query.length
    var database = [
        'https://static.mengniang.org/common/thumb/2/25/Th09cover.jpg/250px-Th09cover.jpg',
        'https://static.mengniang.org/common/thumb/4/45/TH14Cover.jpg/250px-TH14Cover.jpg',
        'https://static.mengniang.org/common/thumb/a/a0/Th10Cover.jpg/250px-Th10Cover.jpg',
        'https://static.mengniang.org/common/thumb/d/d2/TH15Cover.jpg/250px-TH15Cover.jpg',
        'https://static.mengniang.org/common/thumb/6/66/Th13cover.jpg/250px-Th13cover.jpg',
        'https://static.mengniang.org/common/thumb/c/c1/Th145Cover.jpg/250px-Th145Cover.jpg',
        'https://static.mengniang.org/common/thumb/5/5d/Th095Cover.jpg/250px-Th095Cover.jpg',
        'https://static.mengniang.org/common/thumb/3/3c/Touhoushinkirou.jpg/250px-Touhoushinkirou.jpg',
        'https://static.mengniang.org/common/thumb/a/ae/Th12cover.jpg/250px-Th12cover.jpg',
        'https://static.mengniang.org/common/thumb/5/52/Th07cover.jpg/250px-Th07cover.jpg',
        'https://static.mengniang.org/common/thumb/5/59/Th08cover.jpg/250px-Th08cover.jpg',
        'https://static.mengniang.org/common/thumb/2/23/Th128cover.jpg/250px-Th128cover.jpg'
    ]
    var result = []
    for (var i = 0; i < length; i++) {
        result.push(database[parseInt(index) + i])
    }
    var ret = JSON.stringify(result)
    res.send(ret)
})