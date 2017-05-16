
var $ = require('jquery')
var GoTop = require('./lib/gotop')
var Carousel = require('./lib/carousel')
var LoadMore = require('./lib/loadmore')
var Waterfall = require('./lib/waterfall')

new GoTop('div', 'a')
Carousel.init($('.carousel'))
new Waterfall($('.profile ul'))
LoadMore.init($('.profile ul'))