;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-chanpincanting" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.904833 0c-282.70778 0-511.883343 228.659817-511.883343 510.742357 0 282.071284 229.175563 510.742357 511.883343 510.742357 282.6955 0 509.278006-228.671073 509.278006-510.742357C1021.182838 228.659817 814.291814 0 511.904833 0zM534.251793 510.753613c0 20.441565-15.883759 37.011962-35.467793 37.011962l-82.762959 0 0 209.722512c0 20.441565-15.878642 37.011962-35.467793 37.011962-19.584034 0-35.467793-16.570397-35.467793-37.011962L345.085456 547.765575l-82.756819 0c-19.590174 0-35.467793-16.570397-35.467793-37.011962L226.860844 264.020162c0-20.441565 15.878642-37.011962 35.467793-37.011962 19.590174 0 35.467793 16.570397 35.467793 37.011962l0 209.722512 47.289026 0L345.085456 264.020162c0-20.441565 15.883759-37.011962 35.467793-37.011962 19.590174 0 35.467793 16.570397 35.467793 37.011962l0 209.722512 47.295166 0L463.316208 264.020162c0-20.441565 15.878642-37.011962 35.467793-37.011962 19.584034 0 35.467793 16.570397 35.467793 37.011962L534.251793 510.753613zM794.350646 757.488087c0 20.441565-15.878642 37.011962-35.467793 37.011962-19.590174 0-35.467793-16.570397-35.467793-37.011962L723.415061 547.765575l-94.584192 0c0 0 25.025976-131.005706 47.295166-197.390649 15.736403-46.925752 33.175587-75.936483 48.758494-93.948719 3.450589-16.672728 16.990976-29.41903 33.998325-29.41903 1.946328 0 3.620457 0.840134 5.481851 1.157359 3.972475-1.089821 6.339382-1.157359 6.339382-1.157359l0 2.491751c13.710256 5.118578 23.647583 18.454304 23.647583 34.520211L794.35167 757.488087z"  ></path>' +
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