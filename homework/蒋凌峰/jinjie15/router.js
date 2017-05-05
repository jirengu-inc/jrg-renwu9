app.get('/getInfo', function(req, res) {
    var index = req.query.index,
        length = req.query.length,
        data = [];
    for (var i = 0; i < length; i++) {
        data.push('内容' + (parseInt(index) + i + 1));
    }
    res.send({
        status: 1,
        data: data
    });
});