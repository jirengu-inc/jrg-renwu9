/**
 * Created by lenovo on 2016/12/26.
 * status:1��ȷ
 */
app.get('/getMore', function(req, res) {
        var start = req.query.start;
        //console.log(start); //'3'
        //console.log(typeof start); //string
        var len = req.query.len;
        //console.log(typeof len);//string
        var data = [];
        //console.log(len); //һ��Ҫ��json�ַ�����parseInt()תΪ��ֵ��Ҫ���ͻ����
        for (var i = parseInt(start); i < parseInt(start) + parseInt(len); ++i) {
            data.push(i);
            //console.log(i);
        }
            res.send({
                status: 1,
                msg: data
            });
        });
