define(['com/slideshow', 'com/goTop', 'com/waterfall'], function(slideshow, goTop, waterfall) {
    slideshow.init()
    goTop.backtoTop('.goTop')
    waterfall.init()
})