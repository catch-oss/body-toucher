/**
 * Made awesome by AzT3k.
 */

;(function($, window, document, undefined) {

    "use strict"

    $.addBody = function() {
        //devices that parse the viewport meta tag dont respect overflow hidden on body or html
        if (!$('body > .body').length) {
            var scrollTop = $(window).scrollTop();
            var $wrap  = $('<div class="body"></div>').css({
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'scroll',
                '-webkit-overflow-scrolling': 'touch'
            });
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
