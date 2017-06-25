define(['jquery'], function ($) {
    function Carousel(ct) {
        var _this = this;
        this.ct = ct;
        this.init();
        this.bind();
        this.play(0);
        setInterval(function () {
            // console.log(this);
            _this.play((_this.curIndex + 1) % _this.$imgCount);
        }, 2500);

    }
    Carousel.prototype.init = function () {
        this.$imgct = this.ct.find(".img-ct");
        this.$items = this.$imgct.children();
        this.$imgCount = this.$items.length;
        this.curIndex = 0;
        this.isloading = false;
        this.Icon = this.ct.find(".icon");
        this.btnNext = this.ct.find(".btn-next");
        this.btnPre = this.ct.find(".btn-pre");
    }

    Carousel.prototype.setIcon = function () {
        this.Icon.children()
            .removeClass("active")
            .eq(this.curIndex)
            .addClass("active");
    }
    Carousel.prototype.play = function (idx) {
        var _this = this;
        if (this.isloading) return;
        this.isloading = true;
        this.$items.eq(this.curIndex).fadeOut(600);
        this.$items.eq(idx).fadeIn(600, function () {
            _this.isloading = false;
        });

        this.curIndex = idx;

        this.setIcon();
    }
    Carousel.prototype.bind = function () {
        var _this = this;
        _this.btnNext.on('click', function () {
            console.log("前")
            _this.play((_this.curIndex + 1) % _this.$imgCount);
        })
        _this.btnPre.on('click', function () {
            console.log("后")
            _this.play((_this.$imgCount + _this.curIndex - 1) % _this.$imgCount);
        })


        _this.Icon.find('li').on('click', function (e) {
            e.preventDefault();
            var len = $(this).index();
            _this.play(len);
        })
    }

    return Carousel;
})



// var tab1 = new Carousel($('.carousel').eq(0));
