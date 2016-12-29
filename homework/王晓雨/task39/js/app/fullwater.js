define(['jquery'],function($) {
    var page = 1,
        imgNum = 15,
        $colHs = [];
    exposure($('.load'), $getData);
    $getData();
//JSONP
    function $getData() {
        $.ajax({
            url: 'http://platform.sina.com.cn/slide/album_tech',
            type: 'get',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            data: {
                app_key: '1271687855',
                page: page,
                num: imgNum
            },
            success: function (ret) {
                if (ret && ret.status && ret.status.code === '0') {
                    $addElements(ret);
                    $('.item').waterFall();
                    page++;
                } else {
                    alert("出错了");
                }
            },
            error: function () {
                alert("出错了");
            }
        });
    }

    function $addElements($el) {
        $.each($el.data, function (k, val) {
            var sum = strEl(val);
            $('.ct').append(sum);
        });
    }

    function strEl(val) {
        var sum = "";
        sum += '<li class="item">';
        sum += '<a href=' + val.cmnt_url + '><img class="tupian" src=' + val.img_url + '></a>';
        sum += '<h3 class="biaoti">' + val.short_name + '</h3>';
        sum += '<p class="neirong">' + val.short_intro + '</p>';
        sum += '</li>';
        return sum;
    }

    function exposure($el, $getData) {
        var lock,
            $this = $el;
        $('.load').on('click', function () {
            if (lock) {
                clearTimeout(lock);
            }
            lock = setTimeout(function () {
                checkshow();
            }, 50);
        });
        checkshow();

        function checkshow() {
            if ($isShow($this)) {
                $getData();
            }
        }

        function $isShow($el) {
            var $scrollT = $(window).scrollTop(),
                $winH = $(window).height(),
                $top = $el.offset().top;
            if ($top < $scrollT + $winH && $top >= $scrollT) return true;
            else return false;
        }
    }

    $.fn.waterFall = function () {
        var $winW = $('.ct').width(),
            $nodeW = $(this).outerWidth(true),
            $col = parseInt($winW / $nodeW);
        if ($colHs.length === 0) {
            for (var i = 0; i < $col; i++) {
                $colHs.push(0);
            }
        }
        $(this).each(function () {
            var $cur = $(this);
            $cur.find('img').on('load', function () {
                var idx = 0,
                    $minH = $colHs[0],
                    $nodeH = $cur.outerHeight(true);
                for (var i = 0; i < $colHs.length; i++) {
                    if ($colHs[i] < $minH) {
                        $minH = $colHs[i];
                        idx = i;
                    }
                }
                $cur.css({
                    left: $nodeW * idx,
                    top: $minH
                });
                $colHs[idx] = $nodeH + $minH;
                $('.ct').height($colHs[idx]);
            });
        });
    };
});