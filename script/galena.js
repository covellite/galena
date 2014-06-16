;(function ($) {
    'use strict';

    // プルダウンメニュー
    $.fn.galena = function (o) {
        var d = {
            animatin: false,
            speed: 1000,
            ielem: 'li',
            pelem: 'a',
            celem: 'div',
            activeClass: '.over'
        },
            fo = $.extend({}, d, o);

        function reset() {
            $(this).children(fo.celem).hide();
        }

        function over() {
            if (fo.animation) {
                $(this).children(fo.celem).not(':animated').slideDown(fo.speed);
            } else {
                $(this).children(fo.celem).show();
            }
            $(this).addClass(fo.activeClass.replace('.', ''));
        }

        function out() {
            if (fo.animation) {
                $(this).children(fo.celem).slideUp(fo.speed);
            } else {
                $(this).children(fo.celem).hide();
            }
            $(this).removeClass(fo.activeClass.replace('.', ''));
        }

        return this.each(function () {
            var menuGroup = $(this).children(fo.ielem);
            menuGroup.each(reset);
            menuGroup.hover(over, out);
            menuGroup.children(fo.pelem).click(function (e) {
                e.preventDefault();
            });
        });
    };
}(jQuery));
