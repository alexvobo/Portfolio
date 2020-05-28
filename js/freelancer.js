(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 71)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
    // Rocket + Scroll + Fly
    $(window).scroll(function () {
        var scroll = $(window).scrollTop(); // Get the vertical scroll position

        var fly = "translate(" + scroll * 4 + "px,-" + (scroll * scroll * .015) + "px)";
        var turn = " rotate(-" + scroll / 2.8 + "deg)";
        $(" .rocket ").css({"-moz-transform": fly + turn, "-webkit-transform": fly + turn});
    });


// Scroll to top button appear
    $(document).scroll(function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

// Fade nav bar
    var div = $('nav');
    $(window).on('scroll', function () {
        var elementHeight = $(this).height();
        var st = $(this).scrollTop();
        var opacity = (elementHeight - st) / elementHeight;

        if (opacity >= .75) {
            div.css({'opacity': opacity});
        }
    });

// Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

// Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 80
    });

// Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
// Collapse now if page is not at top
    navbarCollapse();
// Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

// Floating label headings for the contact form
    $(function () {
        $("body").on("input propertychange", ".floating-label-form-group", function (e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function () {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function () {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})
(jQuery); // End of use strict
