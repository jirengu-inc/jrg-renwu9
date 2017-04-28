;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-prev" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M260.764002 515.689019c0 29.832446 16.672728 55.496965 41.027415 69.073168 11.134595 20.781302 28.105105 37.751812 48.946782 48.827055l211.32808 211.32808c13.576203 24.473391 39.300075 41.205471 69.191872 41.205471 2.382257 0 4.585435-0.476861 6.847965-0.714268 2.143826 0.23843 4.227278 0.714268 6.430456 0.714268 36.501332 0 66.154699-29.653367 66.154699-66.155722l0-13.159718c0-0.059352 0-0.059352 0-0.059352 0-0.059352 0-0.059352 0-0.059352L710.691271 237.849106c0-2.26253-0.476861-4.347005-0.654916-6.550183 0.179079-2.26253 0.654916-4.406356 0.654916-6.668886 0-43.825135-35.548634-79.374792-79.434144-79.374792-38.049594 0-69.787436 26.854625-77.528748 62.582337L323.346339 438.160271C287.618627 445.901583 260.764002 477.639424 260.764002 515.689019z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-next" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M763.236 508.311c0-29.831-16.673-55.497-41.026-69.073-11.135-20.781-28.105-37.752-48.947-48.827l-211.328-211.328c-13.576-24.473-39.3-41.205-69.192-41.205-2.382 0-4.585 0.477-6.848 0.714-2.144-0.238-4.227-0.714-6.43-0.714-36.501 0-66.155 29.653-66.155 66.156v13.161c0 0.059 0 0.059 0 0.059 0 0.059 0 0.059 0 0.059v568.841c0 2.263 0.477 4.347 0.655 6.55-0.179 2.263-0.655 4.406-0.655 6.669 0 43.825 35.549 79.376 79.434 79.375 38.049 0 69.787-26.855 77.529-62.582l230.382-230.323c35.728-7.741 62.582-39.479 62.582-77.529z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
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

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)