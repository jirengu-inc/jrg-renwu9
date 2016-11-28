;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-kaishi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.976975 63.802118c-247.530515 0-448.204989 200.675462-448.204989 448.196859 0 247.564375 200.673451 448.197882 448.204989 448.197882 247.553029 0 448.24797-200.632483 448.24797-448.197882C960.225968 264.478604 759.531027 63.802118 511.976975 63.802118zM713.547902 525.30605 392.720077 718.683293c-4.551852 2.713808-10.154683 2.713808-14.707559 0-4.552876-2.756787-7.376293-7.834432-7.376293-13.30605L370.636225 318.665737c0-5.471618 2.823417-10.549264 7.376293-13.30605 4.551852-2.75781 10.154683-2.75781 14.707559 0l320.827825 193.33324c4.552876 2.75781 7.354803 7.834432 7.354803 13.30605C720.902705 517.514597 718.100778 522.592242 713.547902 525.30605z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-qianjin-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M160.776 535.406v0 0 0z"  ></path>'+
      ''+
      '<path d="M872.846 155.311v0c-93.821-93.821-221.318-151.556-363.253-151.556-139.527 2.405-267.027 57.735-358.443 149.15l-2.409 2.405c-93.821 93.819-149.15 221.318-149.15 360.846 0 141.935 57.735 269.433 149.15 360.846 91.414 93.821 218.915 149.15 360.846 149.15 141.935 0 269.433-57.735 360.846-149.15 93.821-91.414 149.149-221.318 149.149-360.846 2.405-139.527-55.329-267.027-146.747-360.846zM815.11 821.674c-76.98 76.98-185.235 127.501-305.517 127.501-238.159 0-433.015-194.858-433.015-433.015 0-120.283 48.114-228.537 127.501-305.517l2.409-2.405c76.98-76.98 185.235-125.093 303.112-125.093 120.283 0 228.537 48.114 305.517 127.501 76.98 76.98 127.498 185.235 127.498 305.517s-48.114 228.537-127.498 305.517z"  ></path>'+
      ''+
      '<path d="M545.679 270.781v0c-9.62-9.624-24.055-9.624-33.679 0-4.811 4.811-7.218 9.624-7.218 16.842v113.064h-245.375c-12.029 0-24.055 12.029-24.055 24.055v185.235c0 12.029 9.62 24.055 24.055 24.055h247.783v113.066c0 14.434 12.029 24.055 24.055 24.055 7.216 0 12.029-2.405 16.842-7.218v0l228.537-228.537c9.624-9.624 9.624-24.055 0-33.679l-230.941-230.941z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-tingzhi-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M335.722 345.727c0-4.507 1.718-9.013 5.154-12.449 3.436-3.437 7.942-5.154 12.451-5.154h317.020c4.507 0 9.014 1.718 12.451 5.154s5.179 7.942 5.179 12.449v317.008c0 4.507-1.742 9.013-5.179 12.449-3.436 3.436-7.942 5.179-12.451 5.179h-317.019c-4.507 0-9.014-1.718-12.451-5.179-3.437-3.436-5.154-7.942-5.154-12.449v-317.008h-0.001z"  ></path>'+
      ''+
      '<path d="M511.999 2.050c-281.661 0-509.982 228.313-509.982 509.937 0 281.65 228.321 509.962 509.982 509.962 281.661 0 509.982-228.313 509.982-509.937 0-281.649-228.321-509.962-509.982-509.962zM511.999 904.717c-216.891 0-392.746-175.821-392.746-392.705 0-216.908 175.854-392.729 392.746-392.729 216.917 0 392.748 175.821 392.748 392.729-0.001 216.883-175.83 392.705-392.748 392.705z"  ></path>'+
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
