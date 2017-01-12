function Carousel($wrap){
	this.$wrap=$wrap;
	this.init();
}
Carousel.prototype= {
	init: function(){
		this.$ct=this.$wrap.find('.carousel');
		this.$items=this.$ct.find('li');
		this.imgCount=this.$items.length;
		this.imgWidth=this.$items.width();
		this.pre=this.$wrap.find('.pre');
		this.next=this.$wrap.find('.next');
		this.$ct.prepend(this.$items.last().clone());
		this.$ct.append(this.$items.first().clone());
		this.realCount=this.$ct.children().length;
		this.$bullet=this.$wrap.find('.bullet');
		this.$ct.css({
			width:this.imgWidth*this.realCount,
			left:0-this.imgWidth
		});
		this.curIdx=0;
		this.lock=false;
		this.bind();
		this.autoPlay();
	},
	bind:function(){
		var cur=this;
		this.pre.on('click',function(){
			cur.playPre()
		});
		this.next.on('click',function(){
			cur.playNext()
		});
		this.$bullet.find('li').on('click',function(){
			var idx=$(this).index();
			if(idx>cur.curIdx){
				cur.playNext(idx-cur.curIdx);
			}else{
				cur.playPre(cur.curIdx-idx);
			}
		})
	},
	playPre:function(idx){
		var cur=this,
			idx=idx||1;
			if(this.lock){return;}
			this.lock=true;
			this.$ct.animate({left:'+='+(cur.imgWidth*idx)}, function(){
				cur.curIdx=(cur.curIdx+cur.imgCount-idx)%cur.imgCount
				if(cur.curIdx===(cur.imgCount-1)){
					cur.$ct.css({left:0-cur.imgWidth})
				}
				cur.lock=false;
				cur.setBullet();
			})
	},
	playNext:function(idx){
		var cur=this,
			idx=idx||1;
			if(this.lock){return;}
			this.lock=true;
			this.$ct.animate({left:'-='+(cur.imgWidth*idx)},function(){
				cur.curIdx=(cur.curIdx+idx)%cur.imgCount;
				if(cur.curIdx===0){
					cur.$ct.css({left:0-cur.imgWidth})
				}
				cur.lock=false;
				cur.setBullet()
			})
	},
	autoPlay:function(){
		var cur=this,
			clock=setInterval(function(){
			cur.playNext()
		},2000)
	},
	setBullet:function(){
		this.$bullet.children().removeClass('active')
			.eq(this.curIdx).addClass('active')
	}
}
$('.wrap').each(function(){
	new Carousel($(this))
})
