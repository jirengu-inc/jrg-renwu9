define(['com/slideshow', 'com/goTop', 'com/waterfall', 'jquery'], function(slideshow, goTop, waterfall, $) {
    goTop.backtoTop('.goTop')
    $(document).ready(function() {
        slideshow.init()
        waterfall.init()
    })
})