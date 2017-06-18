import goTop from '../com/goTop.js'
import slideshow from '../com/slideshow.js'
import waterfall from '../com/waterfall.js'
import $ from '../lib/jquery-3.2.0.js'
goTop.backtoTop('.goTop')
$(document).ready(function() {
    slideshow.init()
    waterfall.init()
})