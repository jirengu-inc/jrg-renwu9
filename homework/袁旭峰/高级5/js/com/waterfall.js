 var $ = require('../lib/jquery-3.2.0')
 var imgWaterfall = (function() {
     function Waterfall() {
         this.isDateArrive = true
         this.index = 0
         this.buttonClick()
         this.windowResize()
     }
     Waterfall.prototype = {
         buttonClick: function() {
             var waterfall = this
             $('.loadmore').click(function() {
                 if (!waterfall.isDateArrive) {
                     return 0
                 }
                 waterfall.isDateArrive = false
                 waterfall.getData()
             })
         },
         imgPerRow: function() {
             var width = parseInt($('.work .container').css('width'))
             if (width > 800 && width < 961) {
                 this.length = parseInt(width / 300)
                 this.liWidth = 300
             } else {
                 this.length = parseInt(width / 370)
                 this.liWidth = 370
             }
         },
         getData: function() {
             this.imgPerRow()
             var waterfall = this
             $.get('/loadmore', {
                 index: waterfall.index,
                 length: waterfall.length
             }).done(function(ret) {
                 waterfall.index += waterfall.length
                 var result = JSON.parse(ret)
                 if (waterfall.index >= 18) {
                     $('.loadmore').css('display', 'none')
                 }
                 waterfall.renderHtml(result)
                 waterfall.isDateArrive = true
             }).fail(function() {
                 waterfall.isDateArrive = true
                 throw new Error('request fail')
             })
         },
         renderHtml: function(ret) {
             var html = ''
             for (var i = 0; i < this.length; i++) {
                 var imgUrl = ret[i]['imgUrl'],
                     characterName = ret[i]['characterName'],
                     discribe = ret[i]['discribe']
                 if (imgUrl === null || imgUrl === 'null') {
                     continue
                 }
                 html += `
                    <li>
                        <a href="#">
                            <div class="work-hover"></div>
                            <img src=${imgUrl}>
                        </a>
                        <span>${characterName}</span>
                        <p>${discribe}</p>
                    </li>
                    `
             }
             $('.waterfall').append(html)
             this.imgLoad()
         },
         imgLoad: function() {
             var ready = 0
             var waterfall = this
             $('.waterfall img').each(function() {
                 this.onload = function() {
                     ready += 1
                     if (ready === waterfall.length) {
                         waterfall.adjustPosition()
                     }
                 }
             })
         },
         adjustPosition: function() {
             var itemArr = []
             for (var i = 0; i < this.length; i++) {
                 itemArr.push(0)
             }
             $('.waterfall li').each(function() {
                 var Min = Math.min.apply(null, itemArr)
                 $(this).css({
                     top: Min,
                     left: $(this).outerWidth(true) * itemArr.indexOf(Min)
                 })
                 itemArr[itemArr.indexOf(Min)] += $(this).outerHeight(true)
                 var listHeight = Math.max.apply(null, itemArr)
                 $('.waterfall').innerHeight(listHeight)
             })
             this.resizeImgCover()
         },
         resizeImgCover: function() {
             var waterfall = this,
                 imgCover = []
             $('.waterfall img').each(function() {
                 imgCover.push($(this).height())
             })
             $('.waterfall .work-hover').each(function(i) {
                 $(this).css({
                     height: `${imgCover[i]}px`,
                     width: `${waterfall.liWidth}px`
                 })
             })
         },
         windowResize: function() {
             var waterfall = this
             $(window).resize(function() {
                 waterfall.imgPerRow()
                 waterfall.adjustPosition()
             })
         }
     }
     return {
         init: function() {
             new Waterfall()
         }
     }
 })()
 module.exports = imgWaterfall