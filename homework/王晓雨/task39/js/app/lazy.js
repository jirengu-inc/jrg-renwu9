define(['jquery'],function($) {
    var clock;
    $(window).on('scroll', function () {
        if (clock) {
            clearTimeout(clock);
        }
        clock = setTimeout(function () {
            checkShow();
        }, 300);
    });
    checkShow();
    function checkShow() {
        $('.time-line li').each(function () {
            var $cur = $(this);
            if ($cur.attr('isLoaded')) {
                return;
            }
            if (isShow($cur)) {
                showImg($cur);
            }
        });
    }

    function isShow($el) {
        var scrollH = $(window).scrollTop(),
            winH = $(window).height(),
            top = $el.offset().top;
        if (top < winH + scrollH) {
            return true;
        } else {
            return false;
        }
    }

    function showImg($el) {
        $el.animate({opacity: 1}, 1000);
        $el.attr('isLoaded', true);
    }
});