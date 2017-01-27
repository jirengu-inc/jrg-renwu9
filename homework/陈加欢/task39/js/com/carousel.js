define(function(require, exports) {
	var Carousel={
		init:function($carousel){
			this.$carousel=$carousel;
			this.$ct=$carousel.find(".img-ct");
			this.$items=this.$ct.children();
			this.$bullet=$carousel.find(".bullet");

			var imgWidth=this.imgWidth = $(window).width();
			this.$ct.find('li').width(imgWidth);
			this.imgCount=this.$items.length;
			
		    this.$ct.prepend(this.$items.last().clone());
			this.$ct.append(this.$items.first().clone());
			this.imgRealCount = this.$ct.children().length;
			this.$ct.find('img').css('width', this.imgWidth);
			this.$ct.css({left: -this.imgWidth, width: this.imgRealCount*this.imgWidth});

			this.curIdx=0;
			this.isAnimate=false;
			this.bind();
			this.autoPlay();
		},
		autoPlay:function(){
			var $cur=this;
			clock = setInterval(function(){
				$cur.playNext();
			}, 3000);	
		},


		bind:function(){
			var $cur=this;
			$cur.$carousel.find(".next").on('click', function(){
				$cur.playNext();
			});
			$cur.$carousel.find(".pre").on('click', function(){
				$cur.playPre();
			});

			$cur.$bullet.find('li').on('click', function(){
				var idx = $($cur).index();
				console.log(idx);
				if(idx > $cur.curIdx){
					$cur.playNext(idx - $cur.curIdx);
				}else if(idx < $cur.curIdx){
					$cur.playPre($cur.curIdx - idx);
			    }
			});
		},
		playNext:function(d_idx){
			var $cur=this;
			var d_idx = d_idx || 1;
			if(!$cur.isAnimate){
				$cur.isAnimate = true;
				$cur.$ct.animate({left: '-='+($cur.imgWidth*d_idx)},function(){
					$cur.curIdx = ($cur.curIdx + d_idx)%$cur.imgCount;
					if($cur.curIdx === 0){
						$cur.$ct.css("left", -$cur.imgWidth);
					}
					$cur.isAnimate = false;
					$cur.setBullet();
				});
			}
		},
		playPre:function(d_idx){
			var $cur=this;
			var d_idx = d_idx || 1;
			if(!$cur.isAnimate){
				$cur.isAnimate = true;
				$cur.$ct.animate({left: '+='+($cur.imgWidth*d_idx)},function(){
					$cur.curIdx = ($cur.imgCount + $cur.curIdx - d_idx)%$cur.imgCount;
					if($cur.curIdx === ($cur.imgCount - 1)){
						$cur.$ct.css("left", -$cur.imgWidth*$cur.imgCount);
					}
					$cur.isAnimate = false;
					$cur.setBullet();
				});
			}
		},
		setBullet:function(){
			this.$bullet.children().removeClass('active')
		                  .eq(this.curIdx).addClass('active');
		}
	}
	return Carousel;
	
})


	
