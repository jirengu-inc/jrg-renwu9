define(["jquery","gotop","event","carousel","exposure","waterfall","ajax"],function($,GoTop,Event,Carousel,Exposure,WaterFall,Ajax){
	
	GoTop.init();
	Carousel.init($(".carousel"));
	WaterFall.init($('.portfolio ul'));

	//about区域曝光显示
	Exposure.one($('.about-ul>li'), function(){
		var $this = $(this);
		$this.css({"opacity":"1"})
	});
	Ajax.init($(".load"));



})