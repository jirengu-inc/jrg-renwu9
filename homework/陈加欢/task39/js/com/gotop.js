/**
 *
 * @authors hunger (hunger@jirengu.com)
 * @date    2015-10-21 17:46:07
 * @version $Id$
 */

define(['jquery'], function( $ ) {
	var GoTop = {
		init: function(){

			if($('#gotop').length > 0){
				return;
			}
			var $goTop = $('<button id="gotop">回到顶部</button>');
			$('body').append($goTop);

			this.$goTop = $goTop;
			this.bind();

		},
		bind: function(){
			var self = this;
			$(window).on('scroll', function(e){
				var offsetTop = $('body').scrollTop();
				if(offsetTop>100){

					self.$goTop.show();
				}else{
					self.$goTop.hide();
				}
			})
			this.$goTop.on('click', function(){
				$(window).scrollTop(0);
			});
		}
	}

	return GoTop;
});