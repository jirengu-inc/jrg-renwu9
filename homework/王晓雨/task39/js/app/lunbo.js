define(['jquery'],function($) {
    var $ct = $('.img-ct'),
        $items = $ct.children(),
        $pre = $('.left_icon'),
        $next = $('.right_icon'),
        $bullet = $('.bullet'),
        imgWidth = $(window).width(),
        imgCount = $ct.children().size();

    $ct.prepend($items.last().clone());
    $ct.append($items.first().clone());
    $ct.find('.item1').css('width', imgWidth);
    $ct.find('.cover').css('width', imgWidth);
    imgRealCount = $ct.children().size();
    $ct.css({left: 0 - imgWidth, width: imgRealCount * imgWidth})


    var curIdx = 0;
    var isAnimate = false;


    $bullet.find('li').on('click', function () {
        var idx = $(this).index();
        if (idx > curIdx) {
            playNext(idx - curIdx);
        } else if (idx < curIdx) {
            playPre(curIdx - idx);
        }
    });

    setBg(1);
    autoPlay();


    function stopAuto() {
        clearInterval(clock);
    }

    function autoPlay() {
        clock = setInterval(function () {
            playNext();
        }, 3000);
    }


    function playNext(idx) {
        var idx = idx || 1;
        if (!isAnimate) {
            isAnimate = true;
            setBg(curIdx + 2);
            $ct.animate({left: '-=' + (imgWidth * idx)}, function () {
                curIdx = (curIdx + idx) % imgCount;
                if (curIdx === 0) {
                    $ct.css({left: 0 - imgWidth});
                }
                isAnimate = false;
                setBullet();
            });
        }
    }

    function playPre(idx) {
        var idx = idx || 1;
        if (!isAnimate) {
            isAnimate = true;
            setBg(curIdx);
            $ct.animate({left: '+=' + (imgWidth * idx)}, function () {
                curIdx = (imgCount + curIdx - idx) % imgCount;
                if (curIdx === (imgCount - 1)) {
                    $ct.css({left: 0 - imgWidth * imgCount});
                }
                isAnimate = false;
                setBullet();
            });
        }
    }

    function setBg(idx) {
        var idx = idx || 0,
            $node = $ct.children().eq(idx);
        $cover = $node.find('.cover'),
            imgUrl = $cover.attr('data-bg-img');
        if ($node.data('isBgSet')) return;
        $cover.css('background-image', 'url(' + imgUrl + ')');
        $node.data('isBgSet', true);

    }

    function setBullet() {
        $bullet.children().removeClass('active')
            .eq(curIdx).addClass('active');
    }

    $pre.on('click', function () {
        playPre();
    });
    $next.on('click', function () {
        playNext();
    });
});