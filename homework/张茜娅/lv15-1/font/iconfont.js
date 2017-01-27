;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-jiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M543.97576 742.991931 127.510604 281.008069 896.48735 281.008069Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-huojian" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M959.048 136.846c-2.555 82.693-20.489 162.176-50.429 239.181-35.825 92.14-88.224 173.227-161.672 240.226-5.962 5.434-7.827 11.259-7.04 18.921 2.541 24.786 4.579 49.622 7.144 74.403 5.981 57.804-14.359 105.104-61.181 138.675-50.217 36.006-102.463 69.239-154.295 102.962-32.664 21.254-72.81 1.964-76.448-36.589-4.176-44.281-7.457-88.651-10.554-133.021-1.546-22.204-0.945-22.401-22.543-25.233-57.361-7.53-102.246-34.614-133.068-83.8-15.856-25.307-23.718-53.296-26.476-82.693-0.826-8.819-4.395-11.071-12.749-11.533-46.403-2.552-92.802-5.286-139.144-8.77-38.54-2.901-58.095-43.35-37.433-77.119 14.521-23.727 29.964-46.898 44.95-70.342 16.141-25.248 32.176-50.561 48.357-75.78 29.61-46.147 72.302-71.076 126.945-71.513 31.29-0.249 62.643 5.242 93.914 8.594 5.927 0.637 10.122-0.173 14.212-4.725 72.612-80.771 162.469-135.288 264.204-171.764 57.504-20.617 116.676-34.075 177.39-40.309 30.594-3.14 61.417-4.295 91.987 1.345 16.658 3.071 17.511 3.752 20.076 19.945C957.753 104.093 959.791 120.359 959.048 136.846L959.048 136.846zM783.829 340.692c0.674-54.506-44.689-101.39-98.598-102.276-56.007-0.921-104.492 39.596-105.825 102.868-1.118 52.772 46.913 100.566 100.507 100.943C737.004 442.63 783.122 397.566 783.829 340.692L783.829 340.692z"  ></path>'+
      ''+
      '<path d="M181.685 651.886c13.74 0.186 21.347 6.218 26.269 20.181 19.306 54.726 54.43 96.254 105.361 124.387 11.239 6.208 23.079 11.244 35.318 15.399 22.006 7.467 27.025 28.799 10.698 45.213-24.172 24.291-48.603 48.318-72.774 72.601-7.99 8.03-16.783 11.826-28.031 7.673-11.416-4.224-16.925-12.641-17.501-24.41-0.365-7.462-0.178-14.948-0.354-22.424-0.326-13.734-0.454-13.846-13.155-9.662-27.159 8.957-54.284 17.996-81.438 26.953-8.009 2.641-16.043 3.738-23.876-0.676-11.484-6.473-15.818-18.046-11.195-32.282 9.019-27.766 18.491-55.389 27.711-83.09 4.003-12.019 3.757-12.284-9.284-12.484-7.872-0.123-15.754 0.01-23.61-0.367-11.44-0.548-19.593-6.066-23.832-16.844-4.136-10.51-1.492-19.657 6.232-27.393 25.22-25.252 50.552-50.395 75.876-75.555C169.142 654.096 175.129 651.259 181.685 651.886L181.685 651.886z"  ></path>'+
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
