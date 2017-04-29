var Carousel = (function() {
    function _Carousel($ct) {
        this.$ct = $ct
        this.init()
        this.bind()
        this.autoPlay()
    }
    _Carousel.prototype.init = function() {
        this.imgWidth = this.$ct.find('.container-img img').eq(0).width()
        this.$btnPre = this.$ct.find('.button.pre')
        this.$btnNext = this.$ct.find('.button.next')
        this.$ctImg = this.$ct.find('.container-img')
        this.numberOfImg = this.$ctImg.find('li').size()
        this.$bullet = this.$ct.find('.bullet')
        this.currentIndex = 0
        this.isAnimate = false

        var $firstLiClone = this.$ctImg.find('li').first().clone()
        var $lastLiClone = this.$ctImg.find('li').last().clone()

        this.$ctImg.append($firstLiClone)
        this.$ctImg.prepend($lastLiClone)

        this.$ctImg.css({
                left: -this.imgWidth
            })
            //定义一些七七八八的玩意
    }
    _Carousel.prototype.bind = function() {
        var _this = this
        this.$btnPre.on('click', function(e) {
            e.preventDefault()
            _this.stopPlay()
            if (_this.isAnimate) {
                return
            }
            _this.playPre(1)
            _this.autoPlay()
        })
        this.$btnNext.on('click', function(e) {
            e.preventDefault()
            _this.stopPlay()
            if (_this.isAnimate) {
                return
            }
            _this.playNext(1)
            _this.autoPlay()
        })
        this.$bullet.on('click', 'li', function(e) {
            var pageNumber = $(e.target).index() - _this.currentIndex
            if (pageNumber > 0) {
                _this.playNext(pageNumber)

            } else if (pageNumber < 0) {
                _this.playPre(-pageNumber)

            }

        })
    }

    _Carousel.prototype.playPre = function(n) {
        var _this = this
        this.isAnimate = true
        this.$ctImg.animate({
            left: '+=' + this.imgWidth * n
        }, 400, function() {
            _this.currentIndex -= n
            _this.isAnimate = false
            if (_this.currentIndex < 0) {
                _this.$ctImg.css({
                    left: -_this.imgWidth * _this.numberOfImg
                })
                _this.currentIndex += _this.numberOfImg
            }
            _this.setBullet()
            console.log(_this.currentIndex)
        })
    }

    _Carousel.prototype.playNext = function(n) {
        var _this = this
        this.isAnimate = true
        this.$ctImg.animate({
            left: '-=' + this.imgWidth * n
        }, 400, function() {
            _this.isAnimate = false
            _this.currentIndex += n
            if (_this.currentIndex === _this.numberOfImg) {
                _this.$ctImg.css({
                    left: -_this.imgWidth
                })
                _this.currentIndex -= _this.numberOfImg
            }
            _this.setBullet()
            console.log(_this.currentIndex)
        })
    }

    _Carousel.prototype.setBullet = function() {
        this.$bullet.children().removeClass('active').eq(this.currentIndex).addClass('active')
    }
    _Carousel.prototype.autoPlay = function() {
        var _this = this
        this.clock = setInterval(function() {
            _this.playNext(1)
        }, 2000)
    }
    _Carousel.prototype.stopPlay = function() {
        clearInterval(this.clock)
    }

    return {
        init: function($ct) {
            $ct.each(function(idx, node) {
                new _Carousel($(node))
            })
        }
    }
})()