var Tab = (function() {
    function _Tab($ct) {
        this.$ct = $ct
        this.init()
        this.bind()
    }
    _Tab.prototype.init = function() {
        this.$tabHeader = this.$ct.find('.tab-header')
        this.$tabContainer = this.$ct.find('.tab-container')
    }
    _Tab.prototype.bind = function() {
        var _this = this
        this.$tabHeader.on('click', 'li', function() {
            _this.$tabHeader.children().removeClass('active')
            _this.$tabContainer.children().removeClass('active')

            $(this).addClass('active')
            _this.$tabContainer.children().eq($(this).index()).addClass('active')
        })
    }

    return {
        init: function($ct) {
            $ct.each(function(idx, node) {
                new _Tab($(node))
            })
        }
    }
})()