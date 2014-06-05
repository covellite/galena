(function ($) {
    'use strict';

    // スライドメニュー
    $.fn.covelliteSlide = function (o) {
        var d = {
            animatin: false,
            speed: 1000,
            ielem: '',
            pelem: 'a',
            celem: 'div'
        },
            set = $.extend({}, d, o);

        function reset() {
            $(this).children(set.celem).hide();
        }

        function over() {
            if (set.animation) {
                $(this).children(set.celem).stop(true).slideDown(set.speed);
            } else {
                $(this).children(set.celem).show();
            }
            $(this).children(set.pelem).css('background-color', '#666');
        }

        function out() {
            if (set.animation) {
                $(this).children(set.celem).stop(true).slideUp(set.speed);
            } else {
                $(this).children(set.celem).hide();
            }
            $(this).children(set.pelem).css('background-color', '#333');
        }

        return this.each(function () {
            var menuGroup = $(this).children(set.ielem);
            menuGroup.each(reset);
            menuGroup.hover(over, out);
            menuGroup.children(set.pelem).click(function (e) {
                e.preventDefault();
            });
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