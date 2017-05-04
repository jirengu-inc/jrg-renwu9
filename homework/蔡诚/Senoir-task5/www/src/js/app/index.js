/** 首页功能 **/

/** CMD **/
// define(function(require, exports, module) {
//     var $ = require('jquery')
//     var Carousel = require('com/auto-Carousel')
//     Carousel.init($('.carousel'))
// })

/** AMD **/
// define(['jquery', 'com/auto-Carousel', 'com/simple-tab', 'com/waterFall', 'com/goTop'], function($, Carousel, Tab, WaterFall, GoTop) {
//     Tab.init($('.navbar'))

//     Carousel.init($('.carousel'))

//     new GoTop(200)

//     var curPage = 1,
//         perPageCount = 3,
//         isDataArrived = true
//     $('.load-more').on('click', function() {
//         getImg()
//     })

//     function getImg() {
//         $.ajax({
//             url: 'http://platform.sina.com.cn/slide/album_tech?',
//             type: 'get',
//             dataType: 'jsonp',
//             jsonp: 'jsoncallback',
//             data: {
//                 app_key: '1271687855',
//                 num: perPageCount,
//                 page: curPage
//             },
//             success: function(ret) {
//                 if (ret.status.code === '0') {
//                     render(ret.data)
//                     curPage++;
//                     isDataArrived = true
//                 }
//             },
//             error: function() {
//                 console.log('fail to get data')
//             }
//         })
//         isDataArrived = false
//     }

//     function render(newsList) {
//         $.each(newsList, function(idx, news) {
//             var $node = getNode(news)
//             $node.find('img').on('load', function() {
//                 $('.category .category-list').append($node)
//                 WaterFall($node)
//             })
//         })
//     }

//     function getNode(obj) {
//         var tpl =
//             '<li class="mock">' +
//             '<a href="#">' +
//             '<div class="list-cover">' +
//             '<svg class="icon" aria-hidden="true">' +
//             '<use xlink:href="#icon-gengduo"></use>' +
//             '</svg>' +
//             '</div>' +
//             '<img src="' + obj.img_url + '" alt="' + obj.img_count + '"/>' +
//             '</a>' +
//             '<h3>' + obj.name + '</h3>' +
//             '<p>' + obj.short_intro + '</p>' +
//             '</li>'

//         return $(tpl)
//     }
// })







import 'babel-polyfill'; //We are using --save instead of --save-dev this time, as these libraries will be used in runtime. 
//We also use babel-polyfill so that ES2015 APIs are available in older browsers.
import $ from 'jquery';
import Carousel from '../com/auto-Carousel';
import Tab from '../com/simple-tab.js';
import WaterFall from '../com/waterFall.js';
import GoTop from '../com/goTop.js';
// var $ = require('../lib/jquery.js')
// var Carousel = require('../com/auto-Carousel.js')
// var Tab = require('../com/simple-tab.js')
// var WaterFall = require('../com/waterFall.js')
// var GoTop = require('../com/goTop.js')

Tab.init($('.navbar'))

Carousel.init($('.carousel'))

new GoTop(200)

let curPage = 1,
    perPageCount = 3,
    isDataArrived = true
$('.load-more').on('click', function() {
    getImg()
})

function getImg() {
    $.ajax({
        url: 'http://platform.sina.com.cn/slide/album_tech?',
        type: 'get',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        data: {
            app_key: '1271687855',
            num: perPageCount,
            page: curPage
        },
        success: function(ret) {
            if (ret.status.code === '0') {
                render(ret.data)
                curPage++;
                isDataArrived = true
            }
        },
        error: function() {
            console.log('fail to get data')
        }
    })
    isDataArrived = false
}

function render(newsList) {
    $.each(newsList, function(idx, news) {
        var $node = getNode(news)
        $node.find('img').on('load', function() {
            $('.category .category-list').append($node)
            WaterFall($node)
        })
    })
}

function getNode(obj) {
    let tpl =
        '<li class="mock">' +
        '<a href="#">' +
        '<div class="list-cover">' +
        '<svg class="icon" aria-hidden="true">' +
        '<use xlink:href="#icon-gengduo"></use>' +
        '</svg>' +
        '</div>' +
        '<img src="' + obj.img_url + '" alt="' + obj.img_count + '"/>' +
        '</a>' +
        '<h3>' + obj.name + '</h3>' +
        '<p>' + obj.short_intro + '</p>' +
        '</li>'

    return $(tpl)
}