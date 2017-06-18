 var $ = require('../lib/jquery-3.2.0')
 var goTop = (function() {
     function GoTop(button) {
         this.button = button
         this.checkInput(button)
         this.checkPage(button)
         this.buttonEvent(button)
     }
     GoTop.prototype.checkInput = function() {
         if (typeof this.button === 'string') {
             this.button = $(this.button)
         } else {
             throw new Error('type Error,only expect string')
         }
     }
     GoTop.prototype.checkPage = function() {
         var gotop = this
         $(window).scroll(function() {
             if ($(this).scrollTop() > $(this).height()) {
                 gotop.button.css('display', 'block')
             }
             if ($(this).scrollTop() < $(this).height()) {
                 gotop.button.css('display', 'none')
             }
         })
     }
     GoTop.prototype.buttonEvent = function() {
         this.button.click(function() {
             $(window).scrollTop(0)
         })
     }
     return {
         backtoTop: function(button) {
             new GoTop(button)
         }
     }
 })()
 module.exports = goTop