app.get('/news', function(req, res) {
    var curIdx = req.query.index
    var len = req.query.length
    var data = []

    for (var i = 0; i < len; i++) {
        data.push('news' + (parseInt(curIdx) + i))
    }
    setTimeout(function() {
        res.send(data)
    }, 0)
})

app.post('/news', function(req, res) {
    var curIdx = req.query.index
    var len = req.query.length
    var data = []

    for (var i = 0; i < len; i++) {
        data.push('news' + (parseInt(curIdx) + i))
    }
    setTimeout(
        function() {
            res.send(data)
        }, 1000
    )
})