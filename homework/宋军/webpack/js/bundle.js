/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0)

    function Waterfall($ctn){
        this.$ctn = $ctn
        this.init()
        this.bind()
    }

    Waterfall.prototype.init = function(){
        this.item = this.$ctn.find('.item')
        this.colWidth = this.item.outerWidth(true)
        this.colLength = parseInt(this.$ctn.width()/this.colWidth)
        this.array=[]
        for(var i=0; i<this.colLength; i++){
            this.array[i] = 0
        }
    }

    Waterfall.prototype.bind = function(){
        var _this = this
        this.item.each(function(){
            var minValue = Math.min.apply(null, _this.array),
                minIndex = _this.array.indexOf(minValue)
            $(this).css({
                top: minValue,
                left: _this.colWidth * minIndex
            })
            _this.array[minIndex] += $(this).outerHeight(true)
            _this.$ctn.height(Math.max.apply(null, _this.array))
        })
    }

    module.exports = Waterfall


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0)

    function _Carousel($ctn){
        this.$ctn = $ctn;
        this.init();
        this.bind();
        this.autoPlay();
    }
    
    _Carousel.prototype.init = function(){
        this.curIdx = 0
        this.isAnimate = false
        this.$container = this.$ctn.find('.container')
        this.$items = this.$container.children()
        this.imgWidth = this.$items.width()
        this.imgCount = this.$items.length
        this.$pre = this.$ctn.find('.pre-btn')
        this.$next = this.$ctn.find('.next-btn')
        this.$bullet = this.$ctn.find('.bullet')
    }

    _Carousel.prototype.bind = function(){
        var _this = this
        this.$next.on('click', function(){
            var idx = _this.curIdx+1
            if(idx === _this.imgCount){
              idx = 0
            }
            _this.play(idx)
        })

        this.$pre.on('click', function(){
            var idx = _this.curIdx-1
            if(idx < 0){
              idx = _this.imgCount-1
            }
            _this.play(idx)
        })

        this.$bullet.on('click', 'li', function(){
            var idx = $(this).index()
            _this.play(idx)
        })

        this.$items.on('mouseover', function(){
            _this.stopAuto()
        })
        
        this.$items.on('mouseout', function(){
            _this.autoPlay()
        })
    }

    _Carousel.prototype.play = function(idx){
        var _this = this
        if(this.isAnimate) return;
        this.isAnimate = true
        this.$items.eq(this.curIdx).fadeOut(500)
        this.$items.eq(idx).fadeIn(500, function(){
        _this.isAnimate = false
        })
        this.curIdx = idx
        this.setBullet()
    }

    _Carousel.prototype.setBullet = function(){
        this.$bullet.children().removeClass('active').eq(this.curIdx).addClass('active')
    }

    _Carousel.prototype.autoPlay = function(){
        var _this = this
        clock = setInterval(function(){
            var idx = _this.curIdx+1
            if(idx === _this.imgCount){
              idx = 0
            }
            _this.play(idx)
        }, 3000)
    }

    _Carousel.prototype.stopAuto = function(){
        clearInterval(clock)
    }

    var Carousel = (function(){
      return {
        init: function($ctn){
          $ctn.each(function(index, node){
            new _Carousel($(node))
          })
        }
      }
    })()

    module.exports = Carousel


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0)

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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0)
var Waterfall = __webpack_require__(1)

function _LoadMore($ctn){
    this.$ctn = $ctn;
    this.init();
    this.bind();
}

_LoadMore.prototype.init = function(){
    this.pageIndex = 0
    this.isDataArrive = true
    this.$btn = this.$ctn.parents('.profile').find('.load')
}

_LoadMore.prototype.bind = function(){
    var _this = this
    this.$btn.on('click', function(){
        if(!_this.isDataArrive) return;
        _this.getData()
        _this.isDataArrive = false
    })
}

_LoadMore.prototype.getData = function(){
    var _this = this
    $.get('/loadMore', {
        index: _this.pageIndex
    }).done(function(result){
            console.log(result)
            if(result.length ===0 ) return;
            _this.isDataArrive = true
            _this.pageIndex++
            _this.render(result)
        }).fail(function(){
            console.log('error')
        })
}

_LoadMore.prototype.render = function(rts){
    var _this =this
    $.each(rts, function(index, node){
		var $node = _this.getNode(node)
		$node.find('img').load(function(){
			_this.$ctn.append($node)
			new Waterfall($('.profile ul'))
		})
	})
}

_LoadMore.prototype.getNode = function(node){
    var html = ""
      html += '<li class="item">'
      html += '<a href="'+node.link+'">'
      html += '<img src="'+node.img+'">'
      html += '</a>'
      html += '<h1>'+node.title+'</h1>'
      html += '<p>'+node.content+'</p>'
      html += '</li>'
    return $(html)
}

var LoadMore = (function(){
    return {
        init: function($ctn){
            new _LoadMore($ctn)
        }
    }
})()

module.exports = LoadMore


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


var $ = __webpack_require__(0)
var GoTop = __webpack_require__(3)
var Carousel = __webpack_require__(2)
var LoadMore = __webpack_require__(4)
var Waterfall = __webpack_require__(1)

new GoTop('div', 'a')
Carousel.init($('.carousel'))
new Waterfall($('.profile ul'))
LoadMore.init($('.profile ul'))

/***/ })
/******/ ]);