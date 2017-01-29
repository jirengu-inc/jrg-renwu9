;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-facebook" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M446.0539 0C199.7003 0 0 199.7003 0 446.0539 0 692.3077 199.7003 892.008 446.0539 892.008S892.008 692.3077 892.008 446.0539C892.008 199.7003 692.3077 0 446.0539 0zM564.036 444.1558h-77.22277722277722c0 123.4765 0 275.4246 0 275.4246H372.3276723276723c0 0 0-150.4496 0-275.4246h-54.44555444555445v-97.2027972027972h54.44555444555445v-63.03696303696304c0-45.1548 21.3786-115.4845 115.5844-115.4845l84.7153 0.2997v94.40559440559441c0 0-51.5485 0-61.5385 0-9.99 0-24.2757 4.995-24.2757 26.4735v57.24275724275724h87.21278721278722L564.036 444.1558z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-instagram-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M634.4 512c0 68.4-55.8 122.4-122.4 122.4-68.4 0-122.4-55.8-122.4-122.4 0-16.2 3.6-32.4 9-46.8h-66.6v183.6c0 23.4 19.8 43.2 43.2 43.2h275.4c23.4 0 43.2-19.8 43.2-43.2v-183.6h-66.6c5.4 14.4 7.2 30.6 7.2 46.8z"  ></path>' +
    '' +
    '<path d="M684.8 414.8v-75.6h-75.6v75.6z"  ></path>' +
    '' +
    '<path d="M512 591.2c43.2 0 79.2-36 79.2-79.2 0-18-5.4-32.4-14.4-46.8-14.4-19.8-37.8-32.4-64.8-32.4-27 0-50.4 12.6-64.8 32.4-9 12.6-14.4 28.8-14.4 46.8 0 43.2 36 79.2 79.2 79.2z"  ></path>' +
    '' +
    '<path d="M512 62c-248.4 0-450 201.6-450 450s201.6 450 450 450c248.4 0 450-201.6 450-450 0-248.4-201.6-450-450-450zM737 465.2v183.6c0 48.6-39.6 86.4-86.4 86.4h-277.2c-48.6 0-86.4-39.6-86.4-86.4v-275.4c0-48.6 39.6-86.4 86.4-86.4h275.4c48.6 0 86.4 39.6 86.4 86.4v91.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-twitter" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.027093 93.146738c-245.645847 0-444.781543 199.17182-444.781543 444.781543 0 245.645847 199.135696 444.745418 444.781543 444.745418 245.645847 0 444.745418-199.099571 444.745418-444.745418C956.772512 292.318558 757.654878 93.146738 512.027093 93.146738zM736.070555 448.249484c0.234809 4.804544 0.32512 9.62715 0.32512 14.503942 0 148.128058-112.744219 318.906108-318.906108 318.906108-63.28993 0-122.226871-18.549874-171.825657-50.339336 8.778227 1.029545 17.682889 1.553349 26.732048 1.553349 52.524862 0 100.859295-17.917697 139.205334-47.973189-49.038858-0.921172-90.419346-33.342811-104.68848-77.866121 6.82751 1.336602 13.853703 2.004904 21.078581 2.004904 10.223202 0 20.121285-1.336602 29.531688-3.919496-51.296633-10.295451-89.931667-55.631559-89.931667-109.890392 0-0.487679 0-0.957296 0.018062-1.444976 15.099995 8.398921 32.385515 13.438273 50.772829 14.034325-30.091616-20.139347-49.869719-54.40333-49.869719-93.309297 0-20.536715 5.527032-39.809077 15.172243-56.354047 55.288378 67.805479 137.886794 112.437162 231.051594 117.097208-1.914593-8.182174-2.908013-16.761717-2.908013-25.539943 0-61.881079 50.176777-112.075918 112.09398-112.075918 32.241017 0 61.357275 13.618895 81.803679 35.383839 25.539943-5.003228 49.526538-14.359445 71.183109-27.201665-8.398921 26.190182-26.154058 48.153811-49.309791 62.007514 22.704179-2.709329 44.306563-8.742102 64.391724-17.646764C776.999488 412.703085 757.979998 432.445064 736.070555 448.249484z"  ></path>' +
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