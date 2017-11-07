


   


        var Carousel = (function(){
                    function _Carousel($ct){
                    this.$ct = $ct;
                    this.init();
                    this.bind();
                    this.auto();
                }
                _Carousel.prototype.init = function(){

                    var $imgCt =this.$imgCt = this.$ct.find('.img-ct'),
                    $preBtn =this.$preBtn = this.$ct.find('.btn-pre'),
                    $nextBtn =this.$nextBtn=this.$ct.find('.btn-next'),
                    $bullet  = this.$bullet= this.$ct.find('.bullet');

            var $firstImg =this.$firstImg= $imgCt.find('li').first(),
                    $lastImg =this.$lastImg= $imgCt.find('li').last();

                    this.pageIndex = 0; //第几个页的变量；
                    this.imgLength =$imgCt.children().length;  //获取在克隆前有多少张图片    
                    this.isAnimate = false;//防止重复点击


                    
                $imgCt.prepend($lastImg.clone())//把最后一个图clone一次添加到第一张的前面；
                $imgCt.append($firstImg.clone())//把最前一个图clone一次添加到最后一张的后面；  

                $imgCt.width($firstImg.width()*$imgCt.children().length)  //设定ul的宽度     
                $imgCt.css({'left':'-'+$firstImg.width()+'px'})//把第一张图放入可视区域

                }
                _Carousel.prototype.bind = function(){
                    var _this = this;
                        this.$preBtn.on('click',function(e){
                            e.preventDefault()//阻止页面刷新
                            _this.playPre()
                        })
            
                        this.$nextBtn.on('click',function(e){
                            e.preventDefault()
                            _this.playNext()
                        })
                        this.$bullet.find('li').on('click',function(e){
                            e.preventDefault()
                                var idx = $(this).index();
                                if(idx> _this.pageIndex){
                                    _this.playNext(idx- _this.pageIndex)
                                }else if(idx< _this.pageIndex){
                                    _this.playPre( _this.pageIndex-idx)
                                }
                            
                            })

                }
                _Carousel.prototype.playNext = function(idx){
                    var _this = this;
                    var  idx = idx ||1
                        if(this.isAnimate) return
                        this.isAnimate = true;
                        this.$imgCt.animate({
                            left:'-='+(this.$firstImg.width()*idx)
                        },function(){
                            _this.pageIndex= _this.pageIndex+idx;
                            if(_this.pageIndex === _this.imgLength){//如果页数=图片的最后一个，就让图片回到第一张；即data-index=0;
                                _this.$imgCt.css({'left':'-'+_this.$firstImg.width()+'px'})
                                _this.pageIndex = 0;
                            }
                            _this.isAnimate =false;
                                _this.setBullet()
                        })

                }
                _Carousel.prototype.playPre = function(idx){
                    var _this = this;
                    var  idx = idx ||1
                        if(this.isAnimate) return
                        this.isAnimate = true;
                        this.$imgCt.animate({
                            left:'+='+this.$firstImg.width()*idx
                        },function(){
                            _this.pageIndex=_this.pageIndex-idx;
                            if(_this.pageIndex < 0 ){
                                _this.$imgCt.css({'left':'-'+_this.imgLength*_this.$firstImg.width()+'px'})
                                _this.pageIndex = _this.imgLength - 1;
                            }
                                _this.isAnimate =false;
                                _this.setBullet()
                        })

                }
                _Carousel.prototype.setBullet = function (){
                    this.$bullet.children()
                            .removeClass('active')
                            .eq(this.pageIndex)
                            .addClass('active')
                    

                }
                _Carousel.prototype.auto = function(){
                    var _this = this;
                        var lock = setInterval(function(){
                        _this.playNext()
                    },3000)
                }


            return {
                Toinit:function($ct){
                    $ct.each(function(index,node){
                         new _Carousel($(node));
                    })
                   
                }
            }
        })()


        Carousel.Toinit($('.carousel-ct'));
    