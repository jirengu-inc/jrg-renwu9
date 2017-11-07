app.get('/getNews',function(req,res){
     
    
    var news = [
      
         {
           
            img:'../../image/main4.png',
            title:'The priest',
            brif:'The panda pastor'
        },
         {
           
            img:'../../image/main5.png',
            title:'The druids',
            brif:'Tauren druid'
        },
         {
           
            img:'../../image/main6.png',
            title:'The thieves',
            brif:'The troll thieves'
        },
         {
           
            img:'../../image/main7.png',
            title:'The wizard',
            brif:'The Undead Warlock'
        },
         {
           
            img:'../../image/main8.png',
            title:'The minister',
            brif:'Human Priest'
        },
         {
           
            img:'../../image/main9.png',
            title:'The Brawler',
            brif:'By Matt Panepinto'
        },
         {
           
            img:'../../image/main10.png',
            title:'Delaney',
            brif:'Kalen Delaney'
        },
         {
           
            img:'../../image/main11.png',
            title:'The Paladin',
            brif:'Phoenix Knight'
        },
         {
           
            img:'../../image/main12.png',
            title:'Short person',
            brif:'Goblin Sappers'
        },
         {
           
            img:'../../image/main13.png',
            title:'Death Knight',
            brif:'Orc Death Knight'
        },
         {
           
            img:'../../image/main14.png',
            title:'Lone Druid',
            brif:'Druid of the Talon'
        },
         {
           
            img:'../../image/main15.png',
            title:'The cow head',
            brif:'The perfuse strew'
        }

        
    
    ]
    var pageIndex = req.query.page;
    var len = 3;
    var retNews = news.slice(pageIndex*len,pageIndex*len+len)//获取数据第一次0 3 /第二次 3  6 /....

    res.send({
        status:0,
        data:retNews
    })
})