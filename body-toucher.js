/**
 * Made awesome by AzT3k.
 */

;(function($, window, document, undefined) {

    "use strict"

    var hasTouch = function() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    };

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
                    overflow: auto
                }
                $wrap  = $('<div class="body"></div>');

            if (hasTouch())
                css['overflow'] = 'scroll'
                css['-webkit-overflow-scrolling'] = 'touch';
            }

            $wrap.css(css);

            $('body').wrapInner($wrap);
            $('.body').gush({x:false});
            $wrap.scrollTop(scrollTop);
        }
    }

    $.removeBody = function() {
        if ($('body > .body').length) {
            var scrollTop = $('body > .body').scrollTop();
            $('body > .body').contents().unwrap();
            $(window).scrollTop(scrollTop);
        }
    }

})(jQuery, window, document);
