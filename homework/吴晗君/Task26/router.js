/**
 * Created by lenovo on 2016/12/26.
 * status:1正确
 */
app.get('/getMore', function(req, res) {
        var start = req.query.start;
        //console.log(start); //'3'
        //console.log(typeof start); //string
        var len = req.query.len;
        //console.log(typeof len);//string
        var data = [];
        //console.log(len); //一定要将json字符串用parseInt()转为数值，要不就会出错。
        for (var i = parseInt(start); i < parseInt(start) + parseInt(len); ++i) {
            data.push(i);
            //console.log(i);
        }
            res.send({
                status: 1,
                msg: data
            });
        });
