;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-qianjin" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M480 1024c265.152 0 480-214.848 480-480C960 278.912 745.152 64 480 64 214.912 64 0 278.912 0 544 0 809.152 214.912 1024 480 1024zM394.88 374.976c-12.48-12.48-12.48-32.768 0-45.248 6.272-6.272 14.464-9.344 22.656-9.344s16.384 3.136 22.656 9.344l191.488 191.552c12.48 12.48 12.48 32.768 0 45.248l-192.768 192.832c-12.48 12.48-32.768 12.48-45.248 0s-12.48-32.768 0-45.248l170.112-170.176L394.88 374.976z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-bofang" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M635.225509 479.625662 501.108952 359.281783c-19.888979-17.812691-50.4009-16.156982-68.213591 3.682879-17.807574 19.856233-16.162098 50.389644 3.687996 68.197218l-10.531867 80.58741 11.724019 79.524195c-20.426215 17.163915-23.062252 47.613414-5.909593 68.034513 9.552563 11.394515 23.224957 17.247826 37.002752 17.247826 10.963703 0 21.99392-3.715625 31.048133-11.326976L634.034381 552.551578c10.700713-9.010211 16.990976-22.200628 17.214057-36.19741C651.477658 502.363526 645.64072 488.976634 635.225509 479.625662zM511.753383 64.045665c-246.87262 0-447.713858 200.824865-447.713858 447.702602 0 246.871597 200.842261 447.713858 447.713858 447.713858S959.450868 758.620887 959.450868 511.748267C959.450868 264.87053 758.626004 64.045665 511.753383 64.045665zM511.753383 862.85281c-193.611579 0-351.115799-157.509337-351.115799-351.104543s157.50422-351.10966 351.115799-351.10966c193.606463 0 351.104543 157.515477 351.104543 351.10966S705.359846 862.85281 511.753383 862.85281z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-stop" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 999.619048C242.688 999.619048 24.380952 781.336381 24.380952 512 24.380952 242.712381 242.663619 24.380952 512 24.380952c269.287619 0 487.619048 218.331429 487.619048 487.619048C999.619048 781.312 781.287619 999.619048 512 999.619048L512 999.619048zM512 115.809524c-218.794667 0-396.190476 177.371429-396.190476 396.190476 0 218.843429 177.371429 396.190476 396.190476 396.190476S908.190476 730.843429 908.190476 512 730.819048 115.809524 512 115.809524L512 115.809524zM633.904762 679.619048 390.095238 679.619048c-25.258667 0-45.714286-20.48-45.714286-45.714286L344.380952 390.095238c0-25.258667 20.48-45.714286 45.714286-45.714286l243.809524 0c25.234286 0 45.714286 20.48 45.714286 45.714286l0 243.809524C679.619048 659.139048 659.139048 679.619048 633.904762 679.619048z"  ></path>'+
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
