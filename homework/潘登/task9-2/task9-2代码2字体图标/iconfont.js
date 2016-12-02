;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-iconfontkaishi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.154014 0c-282.66615 0-511.847009 229.172493-511.847009 511.826038 0 282.653545 229.18086 511.826038 511.847009 511.826038s511.844963-229.172493 511.844963-511.826038C1023.998977 229.172493 794.820164 0 512.154014 0zM512.154014 927.685397c-229.6823 0-415.875375-186.187493-415.875375-415.859359S282.471714 95.966679 512.154014 95.966679c229.67923 0 415.874352 186.187493 415.874352 415.859359S741.834268 927.685397 512.154014 927.685397z"  ></path>'+
      ''+
      '<path d="M384.191494 287.901059 768.07496 511.826038 384.191494 735.751017Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-qianjin" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M212.992 526.336 212.992 526.336 212.992 526.336 215.04 526.336 212.992 526.336Z"  ></path>'+
      ''+
      '<path d="M819.2 202.752 819.2 202.752c-79.872-79.872-188.416-129.024-309.248-129.024C391.168 75.776 282.624 122.88 204.8 200.704L202.752 202.752c-79.872 79.872-126.976 188.416-126.976 307.2 0 120.832 49.152 229.376 126.976 307.2 77.824 79.872 186.368 126.976 307.2 126.976 120.832 0 229.376-49.152 307.2-126.976 79.872-77.824 126.976-188.416 126.976-307.2C946.176 391.168 897.024 282.624 819.2 202.752zM770.048 770.048c-65.536 65.536-157.696 108.544-260.096 108.544-202.752 0-368.64-165.888-368.64-368.64 0-102.4 40.96-194.56 108.544-260.096l2.048-2.048c65.536-65.536 157.696-106.496 258.048-106.496 102.4 0 194.56 40.96 260.096 108.544 65.536 65.536 108.544 157.696 108.544 260.096S837.632 704.512 770.048 770.048z"  ></path>'+
      ''+
      '<path d="M540.672 301.056 540.672 301.056c-8.192-8.192-20.48-8.192-28.672 0-4.096 4.096-6.144 8.192-6.144 14.336l0 96.256L296.96 411.648c-10.24 0-20.48 10.24-20.48 20.48l0 157.696c0 10.24 8.192 20.48 20.48 20.48l210.944 0 0 96.256c0 12.288 10.24 20.48 20.48 20.48 6.144 0 10.24-2.048 14.336-6.144l0 0 194.56-194.56c8.192-8.192 8.192-20.48 0-28.672L540.672 301.056 540.672 301.056z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-tingzhi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.576633 109.779266c221.327828 0 401.402089 180.074262 401.402089 401.406183 0 221.328851-180.074262 401.402089-401.402089 401.402089-221.332944 0-401.407206-180.074262-401.407206-401.402089C111.169427 289.853527 291.243689 109.779266 512.576633 109.779266M512.576633 65.177442c-246.310825 0-446.00903 199.699228-446.00903 446.008007 0 246.304685 199.698205 446.003913 446.00903 446.003913 246.303662 0 446.003913-199.699228 446.003913-446.003913C958.580546 264.875646 758.881318 65.177442 512.576633 65.177442L512.576633 65.177442 512.576633 65.177442zM512.576633 65.177442"  ></path>'+
      ''+
      '<path d="M745.215064 703.979406c0 16.23373-13.117762 29.41596-29.351492 29.41596L309.28253 733.395366c-16.232706 0-29.345352-13.18223-29.345352-29.41596L279.937179 297.461809c0-16.232706 13.112646-29.280884 29.345352-29.280884l406.582065 0c16.232706 0 29.351492 13.048177 29.351492 29.280884L745.216087 703.979406 745.215064 703.979406zM745.215064 703.979406"  ></path>'+
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
