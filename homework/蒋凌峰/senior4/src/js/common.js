require.config({
    baseUrl: "js",
    paths: {
        jquery: [
            "https://lib.baomitu.com/jquery/3.2.1/jquery.min", 
            "./lib/jquery"
            ],
        carousel: "./com/carousel",
        gotop: "./com/gotop",
        newslist: "./com/newslist"
    }
});

require(['jquery', 'carousel', 'gotop', 'newslist'], function ($, Carousel, GoTop, Newslist) {
    new Carousel($('.carousel').eq(0));
    new GoTop($('body'));
    new Newslist($("#newsList"));
});

