 function Exposure($target, callback) {
     this.$target = $target
     this.callback = callback
     this.init()
     this.bindEvent()
 }
 Exposure.prototype.init = function() {
     this.$window = $(window)
     this.check(this.$target)
 }
 Exposure.prototype.bindEvent = function() {
     var _this = this
     $(window).on('scroll', function() {
         _this.check(_this.$target)
     })
 }
 Exposure.prototype.check = function($node) {
     var _this = this
     $node.not('.show').each(function() {
         if (_this.isShow($(this))) {
             _this.callback(_this.$target)
         }
         console.log('check')
     })
 }
 Exposure.prototype.isShow = function($node) {
     var scrollTop = this.$window.scrollTop()
     var windowHeight = this.$window.height()
     var nodeHeight = $node.height()
     var offsetTop = $node.offset().top
     if (offsetTop < scrollTop + windowHeight && offsetTop + nodeHeight > scrollTop) {
         $node.addClass('show')
         return true
     } else {
         return false
     }
 }