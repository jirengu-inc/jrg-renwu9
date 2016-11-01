;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-forward" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M106.697 392.142h406.177v-130.781c0-37.792 27.889-51.7 59.129-31.166l357.609 233.964c31.457 20.607 31.894 53.885 0.655 74.42l-358.555 233.964c-31.312 20.607-58.836 6.7-58.836-31.166v-130.781h-406.177c-20.098 0-36.409-16.311-36.409-36.409v-145.635c0-20.098 16.238-36.409 36.409-36.409z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-next" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M192 168.281708C192 139.429599 228.082893 116.844012 254.03609 133.881117 431.802265 250.790906 634.619171 360.017406 812.319138 476.927195 838.338544 494.029576 838.66958 528.691272 812.650173 545.793654 634.883999 662.703443 433.258822 772.336915 255.426438 889.246701 242.383635 897.863168 229.605658 897.536787 219.277344 892.184134 204.314528 887.35369 192 874.167885 192 852.365613L192 168.281708Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fontcolor" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M849.838 62h-675.675c-61.819 0-112.162 50.231-112.162 112.219v675.619c0 61.819 50.231 112.162 112.162 112.162h675.675c61.875 0 112.162-50.231 112.162-112.162v-675.619c0-61.875-50.231-112.219-112.162-112.219z"  ></path>'+
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
