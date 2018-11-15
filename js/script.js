$(document).ready(function () {
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.navigation').addClass('navigation__border');
        } else {
            $('.navigation').removeClass('navigation__border');
        }

    });
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $(function () {
        $(".gallery__row").slice(0, 2).show();
        $("#loadMore").on('click', function (e) {
            e.preventDefault();
            $(".gallery__row:hidden").slice(0, 1).slideDown();
            if ($(".gallery__row:hidden").length == 0) {
                $("#load").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        });
    });

    $('.navigation__buttonToggle').click(function () {
        $('.navigation__toggle').toggleClass('navigation__open');
    });
    $('.navigation__toggle li').click(function () {
        $('.navigation__toggle').toggleClass('navigation__open');
        $('.navigation__burger').toggleClass('active');
    });
    $('.navigation__buttonToggle').click(function () {
        $('.navigation__burger').toggleClass('active');
    });

});
