define(['jquery'], function($) {
    var itemWidth = 370,
        colSumHeightArr = [0, 0, 0]

    function waterFall($node) {
        var minIdx = 0,
            minSumHeight = colSumHeightArr[0]
        for (var i = 0; i < colSumHeightArr.length; i++) {
            if (colSumHeightArr[i] < minSumHeight) {
                minIdx = i
                minSumHeight = colSumHeightArr[i]
            }
        }

        $node.css({
            'position': 'absolute',
            'top': minSumHeight,
            'left': minIdx * itemWidth,
        })
        colSumHeightArr[minIdx] += $node.outerHeight(true)
        var maxValue = Math.max.apply(undefined, colSumHeightArr)
        $('.category-list').height(maxValue)
    }

    return waterFall
})