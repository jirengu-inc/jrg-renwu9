define(['jquery'], function($) {
    function GoTop(scrollTopMin) {
        this.scrollTopMin = scrollTopMin
        this.createNode()
        this.bind()
    }
    GoTop.prototype.createNode = function() {
        var tpl = '<div class="go-top">Top</div>'
        $('body').append($(tpl))
        this.$GoTop = $('body').find('.go-top')
        this.$GoTop.css({
            position: 'fixed',
            right: 10,
            bottom: 10,
            'font-size': '1.2em',
            color: 'rgba(255, 255, 255, .9)',
            width: 50,
            height: 50,
            'line-height': '50px',
            'text-align': 'center',
            'border-radius': 25,
            'background-color': 'rgba(3, 3, 3, .4)',
            'box-shadow': '0 0 8px rgba(125, 125, 125, 1)',
            cursor: 'pointer'
        })
        this.$GoTop.hide()
    }
    GoTop.prototype.bind = function() {
        var clock,
            _this = this

        this.$GoTop.on('click', function() {
            $(window).scrollTop(0)
        })

        $(window).on('scroll', function() {
            if (clock) {
                clearTimeout(clock)
            }

            clock = setTimeout(function() {
                if ($(window).scrollTop() > _this.scrollTopMin) {
                    _this.$GoTop.fadeIn()
                } else {
                    _this.$GoTop.fadeOut()
                }
            }, 100)
        })
    }
    return GoTop;
})