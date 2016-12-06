;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-kaishi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M730.248 478.447 479.661 325.165l-3.862-2.016-0.193-0.092c-0.86-0.373-21.354-9.123-43.118-9.123-37.35 0-61.481 24.761-61.481 63.081l0 290.656 1.7 4.946c5.619 16.529 24.461 44.504 59.438 44.504 11.197 0 22.614-3.058 34.904-9.348l247.169-140.088 2.576-1.66 0.104-0.07c17.87-12.652 37.24-44.475 17.357-80.281L730.248 478.447zM437.205 652.253c-1.271 0.642-2.295 1.06-3.089 1.33l0-276.47c5.004 0.417 11.896 2.21 15.076 3.335L674.034 517.97 437.205 652.253z"  ></path>'+
      ''+
      '<path d="M521.651 55.889c-253.792 0-460.269 206.475-460.269 460.267 0 253.776 206.477 460.238 460.269 460.238 253.775 0 460.237-206.462 460.237-460.238C981.891 262.364 775.428 55.889 521.651 55.889zM521.651 913.312c-219.009 0-397.185-178.163-397.185-397.156 0-219.008 178.176-397.184 397.185-397.184 218.991 0 397.155 178.176 397.155 397.184C918.807 735.148 740.645 913.312 521.651 913.312z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-tubiao02" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M923.904 377.216 561.152 97.408C536.32 78.272 511.488 67.776 487.104 65.216 330.368 21.44 228.8 204.416 329.6 296.128L329.024 296.704 531.776 453.12C548.672 466.112 558.016 482.496 558.016 499.2c0.128 16.64-9.088 33.088-25.92 46.208l-363.84 284.544c-12.16 9.536-21.12 12.928-25.344 13.504-1.92-3.328-4.992-12.16-4.992-28.288l0-626.56c0-19.392 4.48-28.224 4.288-28.736 0.768 0 7.424 0.64 19.2 8.192C170.432 179.072 183.616 186.56 199.04 186.56c7.36 0 14.272-1.856 20.544-4.736 16.96-7.808 28.864-24.768 28.864-44.672S236.544 100.352 219.584 92.544C219.456 92.48 219.264 92.48 219.136 92.416 193.216 74.432 167.424 64.064 142.144 64.064c-49.856 0-100.096 38.592-100.096 124.544l0 626.56c0 85.824 49.92 124.16 99.456 124.16 28.16 0 57.024-11.328 85.824-33.856l363.84-284.544c39.936-31.296 62.848-75.776 62.656-122.048C653.696 452.608 630.592 408.32 590.336 377.216L397.376 228.352c-24.32-44.224 25.216-102.016 87.04-65.984 4.416 1.792 10.368 4.864 18.176 10.944l362.752 279.808c16.832 12.992 26.176 29.248 26.176 45.952s-9.088 33.152-25.92 46.272l-363.776 284.544c-6.016 4.672-10.56 7.232-14.528 9.152-9.408-13.504-24.256-22.912-41.984-22.912-28.672 0-51.968 23.296-51.968 51.968 0 11.136 4.288 20.864 10.176 29.312L401.92 898.688c18.688 26.56 45.248 40.704 73.152 40.704 28.16 0 57.024-11.328 85.888-33.856L924.736 620.8c39.936-31.296 62.848-75.776 62.656-122.112C987.136 452.48 964.032 408.256 923.904 377.216z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-tingzhi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M601.043478 701.217391l-178.086957 0c-55.229217 0-100.173913-44.944696-100.173913-100.173913l0-178.086957c0-55.229217 44.944696-100.173913 100.173913-100.173913l178.086957 0c55.229217 0 100.173913 44.944696 100.173913 100.173913l0 178.086957C701.217391 656.272696 656.272696 701.217391 601.043478 701.217391zM422.956522 389.565217c-18.409739 0-33.391304 14.981565-33.391304 33.391304l0 178.086957c0 18.409739 14.981565 33.391304 33.391304 33.391304l178.086957 0c18.409739 0 33.391304-14.981565 33.391304-33.391304l0-178.086957c0-18.409739-14.981565-33.391304-33.391304-33.391304L422.956522 389.565217z"  ></path>'+
      ''+
      '<path d="M512 89.043478c233.22713 0 422.956522 189.729391 422.956522 422.956522s-189.729391 422.956522-422.956522 422.956522S89.043478 745.22713 89.043478 512 278.77287 89.043478 512 89.043478M512 22.26087C241.552696 22.26087 22.26087 241.530435 22.26087 512s219.291826 489.73913 489.73913 489.73913 489.73913-219.269565 489.73913-489.73913S782.447304 22.26087 512 22.26087L512 22.26087z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
