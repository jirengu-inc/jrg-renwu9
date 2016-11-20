;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="iconfonttingzhi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.154014 0c-282.66615 0-511.847009 229.172493-511.847009 511.826038 0 282.653545 229.18086 511.826038 511.847009 511.826038s511.844963-229.172493 511.844963-511.826038C1023.998977 229.172493 794.820164 0 512.154014 0zM512.154014 927.685397c-229.6823 0-415.875375-186.187493-415.875375-415.859359S282.471714 95.966679 512.154014 95.966679c229.67923 0 415.874352 186.187493 415.874352 415.859359S741.834268 927.685397 512.154014 927.685397z"  ></path>'+
      ''+
      '<path d="M319.10553 318.519404l380.507441 0 0 383.870808-380.507441 0 0-383.870808Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="iconfontkaishi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.001535 0.173962C229.335385 0.173962 0.154526 229.346455 0.154526 512s229.18086 511.826038 511.847009 511.826038 511.844963-229.172493 511.844963-511.826038S794.666661 0.173962 512.001535 0.173962zM512.001535 927.859359c-229.6823 0-415.875375-186.18647-415.875375-415.859359 0-229.671866 186.192052-415.859359 415.875375-415.859359 229.678207 0 415.874352 186.187493 415.874352 415.859359C927.874864 741.671866 741.680765 927.859359 512.001535 927.859359z"  ></path>'+
      ''+
      '<path d="M352.602784 282.564517 750.013889 512 352.602784 741.435483Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="qianjin-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M160.776 535.406v0 0 0z"  ></path>'+
      ''+
      '<path d="M872.846 155.311v0c-93.821-93.821-221.318-151.556-363.253-151.556-139.527 2.405-267.027 57.735-358.443 149.15l-2.409 2.405c-93.821 93.819-149.15 221.318-149.15 360.846 0 141.935 57.735 269.433 149.15 360.846 91.414 93.821 218.915 149.15 360.846 149.15 141.935 0 269.433-57.735 360.846-149.15 93.821-91.414 149.149-221.318 149.149-360.846 2.405-139.527-55.329-267.027-146.747-360.846zM815.11 821.674c-76.98 76.98-185.235 127.501-305.517 127.501-238.159 0-433.015-194.858-433.015-433.015 0-120.283 48.114-228.537 127.501-305.517l2.409-2.405c76.98-76.98 185.235-125.093 303.112-125.093 120.283 0 228.537 48.114 305.517 127.501 76.98 76.98 127.498 185.235 127.498 305.517s-48.114 228.537-127.498 305.517z"  ></path>'+
      ''+
      '<path d="M545.679 270.781v0c-9.62-9.624-24.055-9.624-33.679 0-4.811 4.811-7.218 9.624-7.218 16.842v113.064h-245.375c-12.029 0-24.055 12.029-24.055 24.055v185.235c0 12.029 9.62 24.055 24.055 24.055h247.783v113.066c0 14.434 12.029 24.055 24.055 24.055 7.216 0 12.029-2.405 16.842-7.218v0l228.537-228.537c9.624-9.624 9.624-24.055 0-33.679l-230.941-230.941z"  ></path>'+
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
