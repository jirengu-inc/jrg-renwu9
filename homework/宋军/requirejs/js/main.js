require.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'https://apps.bdimg.com/libs/jquery/1.9.0/jquery.min'
    }
});

require(['jquery', 'gotop', 'carousel', 'loadmore', 'waterfall'], function($, GoTop, Carousel, LoadMore, Waterfall){
    new GoTop('div', 'a')
    Carousel.init($('.carousel'))
    new Waterfall($('.profile ul'))
    LoadMore.init($('.profile ul'))
});
