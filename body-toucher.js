/**
 * Made awesome by AzT3k.
 */

 ;(function (root, factory) {

    // AMD. Register as an anonymous module depending on jQuery.
    if (typeof define === 'function' && define.amd) define(['jquery'], factory);

    // Node, CommonJS-like
    else if (typeof exports === 'object') module.exports = factory(require('jquery'));

    // Browser globals (root is window)
    else {
        factory(root.jQuery);
    }

}(this, function ($, undefined) {

    "use strict"

    $(function() {

        var hasTouch = function() {
            try {
                document.createEvent("TouchEvent");
                return true;
            } catch (e) {
                return false;
            }
        };

        $.scrollElem = function(forScroll) {

            // is this for position or to move the scroll point
            forScroll = forScroll || false;

            // if its for position use window
            // else use html, body
            return $('.body').length ? $('.body') : (
                forScroll ? $('html,body') : $(window)
            );
        }

        $.fn.offsetTop = function() {

            var $scrollElem = $.scrollElem(),
                o = $scrollElem.is('.body') ? $scrollElem.scrollTop() : 0;

            return parseFloat($(this).offset().top) + o;

        }

        $.addBody = function() {
            //devices that parse the viewport meta tag dont respect overflow hidden on body or html
            if (!$('body > .body').length) {

                var scrollTop = $(window).scrollTop(),
                    css = {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflow: 'auto'
                    },
                    $wrap  = $('<div class="body"></div>');

                var is_safari = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;

                if (is_safari || hasTouch()) {
                    css['overflow'] = 'scroll';
                    css['-webkit-overflow-scrolling'] = 'touch';
                }

                $wrap.css(css);

                $('body').wrapInner($wrap);
                $('.body').gush({x:false});
                $wrap.scrollTop(scrollTop);
            }
        };

        $.removeBody = function() {
            if ($('body > .body').length) {
                var scrollTop = $('body > .body').scrollTop();
                $('body > .body').contents().unwrap();
                $(window).scrollTop(scrollTop);
            }
        };
    });

}));
