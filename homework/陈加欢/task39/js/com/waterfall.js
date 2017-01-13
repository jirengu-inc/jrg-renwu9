
// 	<div class="ct">
// 		<div class="item">1</div>
// 		<div class="item">2</div>
// 		<div class="item">3</div>
// 		<div class="item">4</div>
// 	</div>


	
define(['jquery'], function( $ ) {

	var WaterFall = {
		arrColHeight: [],
		init: function( $ct ){
			this.$ct = $ct;
			this.$items = $ct.find('.item');
			this.itemWidth = this.$items.outerWidth(true);
			this.bind();
			this.start();
		},

		bind: function(){
			var me = this;
			$(window).on('resize', function(){
				me.start();
			});
		},

		start: function(){
			var me = this;
			this.colNum = Math.floor( this.$ct.width() / this.itemWidth );
			for(var i=0; i<this.colNum; i++){
				this.arrColHeight[i] = 0;
			}
			this.$items.each(function(){
				me.placeItem( $(this) );
			});
		},

		placeItem: function( $el ) {
			var obj = this.getIndexOfMin(this.arrColHeight),
				idx = obj.idx,
				min = obj.min;
			$el.css({
				left: idx * this.itemWidth,
				top: min
			});
			this.arrColHeight[idx] += $el.outerHeight(true);
            this.$ct.height(Math.max.apply(null,this.arrColHeight));  //使ct高度不塌陷

		},

		getIndexOfMin: function( arr ){
			var min = arr[0],
				idx = 0;
			for(var i = 1; i< arr.length; i++){
				if(min > arr[i]){
					min = arr[i];
					idx = i;
				}
			}
			return {min: min, idx: idx};
		}
		
	}

	return WaterFall;

})

// WaterFall.init($('.ct'));