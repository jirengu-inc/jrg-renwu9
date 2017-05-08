var $ = require('jquery')
var Waterfall = require('./waterfall.js')

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
