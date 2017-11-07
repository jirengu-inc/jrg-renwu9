
        
          
      define(['jquery'],function($){
          function GoTop(ct,target){
              this.ct = ct;
              this.target = $('<div class="goTop">回到顶部</div>')
              this.target.css({
                    position:'fixed',
                    right:'10px',
                    bottom:'10px',
                    display:'none',
                    padding:'8px',
                    cursor:'pointer',
                    border:'1px solid black',
                    borderRadius:'4px'
                   
                });
                this.creatNode();
                this.bindEvent();

          }
           GoTop.prototype.creatNode = function(){
              this.ct.append(this.target);
          }

          GoTop.prototype.bindEvent = function(){
              var _this = this;
              var $window = $(window);
            
              $window.on('scroll',function(){
                var $top = $window.scrollTop()
                  if($top>2200){
                      _this.target.css('display','block')
                  }else{
                      _this.target.css('display','none')
                  }
              })
              this.target.on('click',function(){
                _this.ct.animate({
                   scrollTop : 0
               })
              })
          }

       return GoTop;
      })
           
        

         
         

        
    




   