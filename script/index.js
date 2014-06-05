(function ($) {
    'use strict';

    // スライドメニュー
    $.fn.galena = function (o) {
        var d = {
            animatin: false,
            speed: 1000,
            ielem: '',
            pelem: 'a',
            celem: 'div',
            activeClass: 'over'
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
            $(this).addClass(set.activeClass);
        }

        function out() {
            if (set.animation) {
                $(this).children(set.celem).stop(true).slideUp(set.speed);
            } else {
                $(this).children(set.celem).hide();
            }
            $(this).removeClass(set.activeClass);
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


$('nav > ul').galena({
    animation: true,
    speed: 150,
    ielem: 'li',
    pelem: 'a',
    celem: 'ul'
});