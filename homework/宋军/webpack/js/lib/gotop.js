var $ = require('jquery')

  var GoTop = function(ctn, target){
    this.ctn = ctn;
    this.target = target;
    this.createNode();
    this.bindEvent();
  }

  GoTop.prototype.createNode = function(){
      var $wrapper = $('<'+this.ctn+'>'+'</'+this.ctn+'>'),
      $node = $('<'+this.target+'>'+'gotop'+'</'+this.target+'>');
      $node.addClass('on')
      $wrapper.append($node)
      $('body').append($wrapper)
  }

  GoTop.prototype.bindEvent = function(){
      $(window).scroll(function (){
        if($(this).scrollTop() > $(window).innerHeight()){
          $('.on').css('display', 'block')
        }else{
          $('.on').css('display', 'none')
        }
      })
      $('.on').click(function(){
        $(window).scrollTop(0)
      $('.on').css('display', 'none')
      })
    }

  module.exports = GoTop
