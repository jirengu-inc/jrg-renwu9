
define(['jquery','com/carousel','com/GoTop',
'com/Lazys'
],function($,Carousel,GoTop,
Lazys
){
  

Carousel.init($('#header'));
new GoTop($('html'));
Lazys;
 

})