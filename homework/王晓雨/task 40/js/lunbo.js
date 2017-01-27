//插件模式
(function($){
	$.fn.Carousel=function(){
		var $this=$(this),
			$ct=$this.find('.carousel'),
			$items=$ct.children(),
			$imgCount=$items.length,
			$imgWidth=$items.width(),
			$bullet=$this.find('.bullet'),
			$pre=$this.find('.pre'),
			$next= $this.find('.next');
		var clock,
			curIdx=0,
			isAnimate=false;
		autoPlay();
		setBullet();
		// bullet();
		$ct.prepend($items.last().clone());
		$ct.append($items.first().clone());
		var $imgRealCount=$ct.children().length;
		$ct.css({left:0-$imgWidth,width:$imgRealCount*$imgWidth})

		$next.on('click',function(){
			playNext();
		})
		$pre.on('click',function(){
			playPre();
		})
		$bullet.find('li').on('click',function(){
			var idx=$(this).index();
			if(idx>curIdx){
				playNext(idx-curIdx)
			}else if(idx<curIdx){
				playPre(curIdx-idx)
			}
		})
		function playNext(idx){
			var idx=idx||1;
			if(!isAnimate){
				isAnimate=true;
				$ct.animate({left:'-='+($imgWidth*idx)},function(){
					curIdx=(curIdx+idx)%$imgCount;
					if(curIdx===0){
						$ct.css({left:0-$imgWidth});
					}
					isAnimate=false;
					setBullet()
				})
			}
		}
		function playPre(idx){
			var idx=idx || 1;
			if(!isAnimate){
				isAnimate=true;
				$ct.animate({left:'+='+($imgWidth*idx)},function(){
					curIdx=($imgCount+curIdx-idx)%$imgCount;
					if(curIdx===($imgCount-1)){
						$ct.css({left:0-$imgCount*$imgWidth})
					};
					isAnimate=false;
					setBullet();
				})
			}
		}
		// function bullet(){
		// 	for(var i=0;i<imgCount;i++){
		// 		$bullet.append('<li><li>')
		// 	}
		// 	$bullet.children().first().addClass('active')
		// }
		function autoPlay(){
			clock=setInterval(function(){
				playNext()
			},3000)
		}
		function setBullet(){
			$bullet.children().removeClass('active').eq(curIdx)
				   .addClass('active')
		}
	}
})(jQuery)
$('.wrap').each(function(){
	$(this).Carousel()
})