define(['jquery'], function($){
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

    return Waterfall
})