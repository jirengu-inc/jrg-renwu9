app.get('/content', function(req, res) {
    var length = req.query.length
    var index = req.query.index
    var queue = []
    for (var i = 0; i < length; i++) {
        queue.push(i + parseInt(index))
        console.log(typeof queue)
    }
    res.send(queue)
})