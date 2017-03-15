app.get('/friends', function(req, res) {
    var username = req.query.username
    var ret = ['nobody']
    if (username == 'rouyu') {
        ret = ['shit1', 'shit2']
    }
    res.send(ret)
})


app.get('/user', function(req, res) {
    var username = req.query.username
    var friends
    if (username == 'rouyu') {
        friends = ['shit1', 'shit2']
    } else {
        friends = ['nobody']
    }

    res.render('user.ejs', {
        friends: friends
    });
})