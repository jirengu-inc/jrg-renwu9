define(['jquery'], function($) {
    var Tab = (function() {
        function _Tab($ct) {
            this.$ct = $ct
            this.init()
            this.bind()
        }
        _Tab.prototype.init = function() {
            this.$window = $(window)
            this.$tabItem = this.$ct.children()
            this.itemCount = this.$ct.children().length
            var selectorArr = new Array
            this.$tabItem.each(function() {
                var _this = this
                var selectorStr = $(this).children().html().toLowerCase()
                selectorArr.push(selectorStr)
            })
            this.selectorArr = selectorArr
        }
        _Tab.prototype.bind = function() {
            var _this = this

            this.$ct.on('click', 'li', function() {
                var selectorStr = $(this).children().html().toLowerCase()
                $('body').animate({ scrollTop: $('.' + selectorStr).offset().top }, 100)
                    // if ($(this).index() === 0) {
                    //     $('body').animate({ scrollTop: $('.services').offset().top }, 100)
                    // } else if ($(this).index() === 1) {
                    //     $('body').animate({ scrollTop: $('.category').offset().top }, 100)
                    // } else if ($(this).index() === 2) {
                    //     $('body').animate({ scrollTop: $('.about').offset().top }, 100)
                    // } else if ($(this).index() === 3) {
                    //     $('body').animate({ scrollTop: $('.team').offset().top }, 100)
                    // } else if ($(this).index() === 4) {
                    //     $('body').animate({ scrollTop: $('.contact-us').offset().top }, 100)
                    // }
            })

            var clock
            this.$window.on('scroll', function() {
                if (clock) {
                    clearTimeout(clock)
                }
                clock = setTimeout(function() {
                    var clear = true
                    for (var i = 0; i < _this.itemCount; i++) {
                        if (_this.isShow($('.' + _this.selectorArr[i]))) {
                            _this.$tabItem.removeClass('active')
                            _this.$tabItem.eq(i).addClass('active')
                            i = _this.itemCount;
                            clear = false
                        }
                    }

                    if (clear) {
                        _this.$tabItem.removeClass('active')
                    }
                }, 100)

            })
        }

        _Tab.prototype.isShow = function($node) {
            var scrollTop = this.$window.scrollTop()
            var windowHeight = this.$window.height()
            var nodeHeight = $node.height()
            var offsetTop = $node.offset().top
            if (offsetTop < scrollTop + windowHeight && offsetTop + nodeHeight > scrollTop + 140) {
                return true
            } else {
                return false
            }
        }
        return {
            init: function($ct) {
                $ct.each(function(idx, node) {
                    new _Tab($(node))
                })
            }
        }
    })()

    return Tab
})