define(['jquery'], function($) {
    var slideShow = (function() {
        function SlideShow() {
            this.bulletClick()
            this.autoPlay()
            this.isAnimateOver = true
        }
        SlideShow.prototype = {
            bulletClick: function() {
                let slideshow = this
                $('.bullet li').click(function() {
                    let index = $(this).index()
                    slideshow.switchImg(index)
                })
            },
            switchImg: function(index) {
                let slideshow = this
                if (!this.isAnimateOver) {
                    return 0
                }
                this.isAnimateOver = false
                $('.bullet li').eq(index).addClass('display').siblings().removeClass('display')
                $('.currentImg').fadeOut(1500).removeClass('currentImg')
                $('.slideshow li').eq(index).fadeIn(1500, function() {
                    slideshow.isAnimateOver = true
                }).addClass('currentImg')
            },
            autoPlay: function() {
                var slideshow = this
                setInterval(function() {
                    let index = ($('.currentImg').index() + 1) % 4
                    slideshow.switchImg(index)
                }, 5000)
            }
        }
        return {
            init: function() {
                new SlideShow()
            }
        }
    })()
    return slideShow
});