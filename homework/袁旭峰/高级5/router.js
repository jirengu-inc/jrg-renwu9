app.get('/loadmore', function(req, res) {
    let index = req.query.index
    let length = req.query.length
    let database = [{
            imgUrl: './image/work7.jpg',
            characterName: '因幡帝',
            discribe: '幸运的白兔'
        }, {
            imgUrl: './image/work8.jpg',
            characterName: '东风谷早苗',
            discribe: '被祭祀的风之人'
        },
        {
            imgUrl: './image/work9.jpg',
            characterName: '蓬莱山辉夜',
            discribe: '永远和须臾的罪人'
        },
        {
            imgUrl: './image/work10.jpg',
            characterName: '物部布都',
            discribe: '古代日本的尸解仙'
        },
        {
            imgUrl: './image/work11.jpg',
            characterName: '二岩猯藏',
            discribe: '佐渡之二岩'
        },
        {
            imgUrl: './image/work12.jpg',
            characterName: '风见幽香',
            discribe: '四季的花之主'
        },
        {
            imgUrl: './image/work13.jpg',
            characterName: '红美玲',
            discribe: '华人少女'
        },
        {
            imgUrl: './image/work14.jpg',
            characterName: '多多良小伞',
            discribe: '愉快的遗忘之伞'
        },
        {
            imgUrl: './image/work15.jpg',
            characterName: '水桥帕露西',
            discribe: '地壳下的嫉妒心'
        },
        {
            imgUrl: './image/work16.jpg',
            characterName: '蕾米莉亚·斯卡蕾特',
            discribe: '永远幼小的红月'
        },
        {
            imgUrl: './image/work17.jpg',
            characterName: '封兽鵺',
            discribe: '正体不明的正体'
        },
        {
            imgUrl: './image/work18.jpg',
            characterName: '比那名居天子',
            discribe: '非想非非想天之女'
        },
        {
            imgUrl: './image/work19.jpg',
            characterName: '圣白莲',
            discribe: '被封印的大魔法师'
        },
        {
            imgUrl: './image/work20.jpg',
            characterName: '射命丸文',
            discribe: '传统的幻想报社'
        },
        {
            imgUrl: './image/work21.jpg',
            characterName: '寅丸星',
            discribe: '毘沙门天的弟子'
        },
        {
            imgUrl: './image/work22.jpg',
            characterName: '键山雏',
            discribe: '秘神流雏'
        },
        {
            imgUrl: './image/work23.jpg',
            characterName: '霍青娥',
            discribe: '穿墙的邪仙'
        },
        {
            imgUrl: './image/work24.jpg',
            characterName: '蕾蒂·霍瓦特洛克',
            discribe: '冬天的遗忘之物'
        },
    ]
    let result = []
    for (let i = index; i < index + length; i++) {
        result.push(database[i])
    }
    let ret = JSON.stringify(result)
    res.send(ret)
})