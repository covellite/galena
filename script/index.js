(function ($) {
    'use strict';

    // スライドメニュー
    $.fn.covelliteSlide = function (o) {
        var　d = {
            animatin: false,
            speed: 1000,
            ielem: '',
            pelem: 'a',
            celem: 'div'
        }
        var s = $.extend({}, d, o);

        function reset() {
            $(this).children(s.celem).hide();
        }

        function over() {
            if (s.animation) {
                $(this).children(s.celem).stop(true).slideDown(s.speed);
            } else {
                $(this).children(s.celem).show();
            }
            $(this).children(s.pelem).css('background-color', '#666');
        }

        function out() {
            if (s.animation) {
                $(this).children(s.celem).stop(true).slideUp(s.speed);
            } else {
                $(this).children(s.celem).hide();
            }
            $(this).children(s.pelem).css('background-color', '#333');
        }

        return this.each(function () {
            var menuGroup = $(this).children(s.ielem);
            menuGroup.each(reset);
            menuGroup.hover(over, out);
            menuGroup.children(s.pelem).click(function(e) {
              e.preventDefault();
            })
        });
    };
}(jQuery));


$('nav > ul').covelliteSlide({
    animation: true,
    speed: 150,
    ielem: 'li',
    pelem: 'a',
    celem: 'ul'
});