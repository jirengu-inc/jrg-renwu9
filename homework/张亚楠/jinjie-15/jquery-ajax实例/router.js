app.get('/getNews',function(req,res){
     
    
    var news = [
        {
            link:'http://mil.qq.com/mil_index.htm',
            img:'http://inews.gtimg.com/newsapp_ls/0/1289576514_150120/0',
            title:'韩媒：韩国旅行社停止销售中国旅游产品 销量锐减',
            brif:'萨德对韩国人民生活的影响-1'
        },
          {
            link:'http://news.qq.com/l/milite/jqlw/listjunqingliaowang2012.htm',
            img:'http://inews.gtimg.com/newsapp_ls/0/1290217879_150120/0',
            title:'陆克文：特朗普时期，台湾问题不再是中美台面上问题',
            brif:'萨德对韩国人民生活的影响-2'
        },
          {
            link:'http://news.qq.com/l/milite/milgn/list2010122872223.htm',
            img:'http://inews.gtimg.com/newsapp_ls/0/1290161671_150120/0',
            title:'乐天免税店销售额锐减25% 韩国免税店开拓东南亚市场',
            brif:'萨德对韩国人民生活的影响-3'
        },
          {
            link:'http://news.qq.com/l/milite/zhoubiansaomiao/list2012095132256.htm',
            img:'http://inews.gtimg.com/newsapp_ls/0/1290216074_150120/0',
            title:'朝中社：美国“反恐战”是前所未闻的国家恐怖行为',
            brif:'萨德对韩国人民生活的影响-4'
        },
          {
            link:'http://news.qq.com/l/milite/milhqj/list2010122872321.htm',
            img:'http://inews.gtimg.com/newsapp_ls/0/1289499164_150120/0',
            title:'美前防长：对朝鲜动武风险太大，还是谈判吧',
            brif:'萨德对韩国人民生活的影响-5'
        },
          {
            link:'http://news.qq.com/l/milite/milhqj/list2010122872321.htm',
            img:'http://inews.gtimg.com/newsapp_ls/0/1290217031_150120/0',
            title:'央视揭秘辽宁舰首次远航 露脸的仨人啥来头？',
            brif:'萨德对韩国人民生活的影响-6'
        },
          {
            link:'http://news.qq.com/l/milite/junbei/list2012095132410.htm',
            img:'http://inews.gtimg.com/newsapp_ls/0/1289499766_150120/0',
            title:'媒体：留给和平解决朝核问题的时间或许所剩无多',
            brif:'萨德对韩国人民生活的影响-7'
        },
         {
            link:'http://v.qq.com/cover/j/j02y37wjjgnxdel.html?vid=q0016flpc3k',
            img:'http://inews.gtimg.com/newsapp_ls/0/1289332905_150120/0',
            title:'德女防长回怼特朗普欠军费言论：我们不欠北约的钱',
            brif:'萨德对韩国人民生活的影响-8'
        },
         {
            link:'http://news.qq.com/l/milite/gaoqingtuku/listgaoqingtuku2012.htm',
            img:'http://inews.gtimg.com/newsapp_ls/0/1289495870_150120/0',
            title:'俄媒：学生超越老师 中国造舰已遥遥领先俄罗斯',
            brif:'萨德对韩国人民生活的影响-9'
        },
       
    
    ]
    var pageIndex = req.query.page;
    var len = 2;
    var retNews = news.slice(pageIndex*len,pageIndex*len+len)

    res.send({
        status:0,
        data:retNews
    })
})