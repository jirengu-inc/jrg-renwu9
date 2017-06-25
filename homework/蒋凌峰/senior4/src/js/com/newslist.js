//1：<li class="item hide"></li>
//2.load事件报错a.indexOf is not a function， jQuery 3.0后废除，该用on
define(['jquery'], function ($) {


    function Newslist($ct) {
        
        var that = this;
        this.ct = $ct;
        console.log(this.ct)
        this.init();
        this.start();
        this.ct.find(".load").on('click', function() {
            that.start();
        });

    }

    Newslist.prototype.init = function () {
        var _this = this;
        this.length = 10;
        this.pageIndex = 10;
        this.content = this.ct.find(".content");
        this.itemWdith = this.ct.find(".item").outerWidth(true);
        this.itemCol = parseInt(this.content.width() / this.itemWdith);
        this.itemHeightArr = [];
        for (var i = 0; i < this.itemCol; i++) {
            _this.itemHeightArr[i] = 0;
        }
        this.isDataArrive = true;
    }

    Newslist.prototype.start = function () {
        var _this = this;
        _this.getNews(function (newsList) {
            _this.isDataArrive = true;
            $.each(newsList, function (idx, news) {
                var $node = _this.createEle(news)
                $node.find('img').on("load", function () {
                    _this.content.append($node)
                    console.log($node, 'loaded...')
                    _this.waterFallPlace($node)
                })
            })
        });
        _this.isDataArrive = false;
    }
    Newslist.prototype.waterFallPlace = function ($node) {
        var _this = this,
            idx = 0,
            minsumHeight = _this.itemHeightArr[0];
        for (var i = 0; i < _this.itemHeightArr.length; i++) {
            if (_this.itemHeightArr[i] < minsumHeight) {
                idx = i;
                minsumHeight = _this.itemHeightArr[i];
            }
        }

        $node.css({
            left: _this.itemWdith * idx,
            top: minsumHeight,
            opacity: 1
        })

        _this.itemHeightArr[idx] += $node.outerHeight(true);

        _this.content.height(Math.max.apply(null, _this.itemHeightArr));

    }

    Newslist.prototype.check = function ($el) {
        var windowHeight = $(window).height(),
            scrollTop = $(window).scrollTop(),
            nodeTop = $el.offset().top,
            nodeHeight = $el.outerHeight(true);

        if (windowHeight + scrollTop > nodeTop && scrollTop < nodeTop + nodeHeight) {
            return true;
        } else {
            return false;
        }
    }

    Newslist.prototype.createEle = function (item) {
        var html = "";
        html += '<li class="item">' +
            '<a href="' + item.url + '">' +
            '<img src="' + item.img_url + '" alt="">' +
            '<h4>' + item.short_name + '</h4>' +
            '<p>' + item.short_intro + '</p>' +
            '</a></li>';
        return $(html);
    }

    Newslist.prototype.getNews = function (callback) {
        var _this = this;
        $.ajax({
                url: "http://platform.sina.com.cn/slide/album_tech",
                jsonp: "jsoncallback",
                dataType: "jsonp",
                data: {
                    app_key: 1271687855,
                    num: _this.length,
                    page: _this.pageIndex
                }
            })
            .done(function (res) {
                if (res && res.status && res.status.code === "0") {
                    callback(res.data);
                    _this.pageIndex++;
                } else {
                    console.log("get error data");
                }
            })
            .fail(function () {
                console.log("系统错误");
            })
    }
    return Newslist;
})
// new Newslist($("#newsList"));