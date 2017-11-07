 


define(['jquery'], function($) {
    var WaterFull=(function(){
        function init(){
               waterFull()
              $(window).resize(function(){
                waterFull()
             })
              $(window).on('scroll',Scroll)
             
  
           }
      function waterFull(){
                  var nodeWidth =$('.item').width();//元素宽度
                  var num  =parseInt($('.img-ct').width()/nodeWidth)//一排放多少个（取整）
                  var itemArr = [];//存放每列的高度；
                  for(var i=0; i<num;i++){//初始化
                  itemArr[i]=0;//目前每列高度为0；
              }
              
              $('.item').each(function(){//循环所有图片
                  var minValue = Math.min.apply(null,itemArr) //获取数组最小值（第一次就是数组的第一项0；）
                  var minIndex = itemArr.indexOf(minValue)//获取最小值的下标；
  
                  $(this).css({//通过改变top left ;放入图片的位置；
                      top:itemArr[minIndex],
                      left:$(this).outerWidth(true)*minIndex
  
                  })
                  itemArr[minIndex] += $(this).outerHeight(true);//更改添加后列的高度
              })
  
       }  
       function Scroll(){
            var dataInt = {
              'data':[{'src':'1.png'},{'src':'2.png'},{'src':'3.png'},{'src':'4.png'},{'src':'5.png'},{'src':'6.png'},{'src':'7.png'},
              {'src':'8.png'},{'src':'9.png'},{'src':'10.png'},{'src':'11.png'},{'src':'12.png'},{'src':'13.png'},{'src':'14.png'}]
              }
            var isArrive= false;//防止多次滚动重复数据
                if(checkScroll() && !isArrive){
                    var oParent = document.getElementsByClassName('img-ct')[0];
                    for(var i =0;i<dataInt.data.length;i++){
                        isArrive=true;
                        var oDiv =document.createElement('div');//添加元素节点
                        oDiv.className ='item';
                        oDiv.innerHTML ='<img src="src/image/lazy-pc'+dataInt.data[i].src+'">'
                        oParent.appendChild(oDiv);                    
                    }
                    isArrive = false;
                    waterFull()
                }
            } 
  
       function checkScroll(){
               var   oParent = document.getElementsByClassName('img-ct')[0];
               var   aDiv =oParent.getElementsByClassName('item');
               var   lastPinH=aDiv[aDiv.length-1].offsetTop+Math.floor(aDiv[aDiv.length-1].offsetHeight/2); 
               //创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
               var   scrollTop=$(window).scrollTop();//滚动高度
               var   winndowHeight=$(window).height(); //页面高度
               return   (lastPinH<scrollTop+winndowHeight)? true : false ; //到达指定高度后 返回true，触发waterfall()函数
          }
       return {
                init:init
            }
       })()
       WaterFull.init();
});

     
   
