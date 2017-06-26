/*global $, alert, console*/
/* nice scroll editing */
$(document).ready(
    function () {
        "use strict";
        $("html").niceScroll({
            cursorcolor: "rgba(95, 91, 86, .7)",
            cursorwidth: "5px",
            cursorborder: "none",
            cursorborderradius: "0"
        });
    }
);
/* slick slider editing */
$(document).on('ready', function () {
    "use strict";
    $(".regular").slick({
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 2
    });
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
    });
});
/* go to top of the page button  */
$(window).scroll(function () {
    "use strict";
    
    if ($(window).scrollTop() >= $(".reviews").offset().top) {
        $(".top").addClass("show"); // fadeIn the element
    } else {
        $(".top").removeClass("show"); // fadeOut the element
        $(".top").removeClass("up"); // remove the Rocket animation
    }
    
});
$(document).ready(function () {
    "use strict";
    
    $(".top").click(function () {
        
        $("html, body").animate({
            
            scrollTop: 0 // go to the top of the page
            
        }, 600);
        
        $(".top").addClass("up"); // add the Rocket animation
    });
});

/* Navbar white theme when you scroll the page */

$(window).scroll(function () {
    "use strict";
    
    if (($(window).scrollTop() >= $(".reviews").offset().top)) {
        
        $(".navbar .white").css("left", "0"); // show the white theme
        // change navbar elements to dark color
        $(".navbar .navbar-toggle span, .navbar .navbar-brand, .list a, .social-media i").css("color", "rgba(95, 91, 86, 1)");
        
    } else {
        
        $(".navbar .white").css("left", "-100vw"); // hide the white theme
        // change navbar elements to white color
        $(".navbar .navbar-toggle span, .navbar .navbar-brand, .list a, .social-media i").css("color", "white");
    }
});

/* Our menu button ( go to breakfast section which contains the menu) */

$(document).ready(function () {
    "use strict";
    
    $(".header .interface button").click(function () {
        
        $("html, body").animate({
            
            scrollTop: $(".breakfast").offset().top
            
        }, 1000);
 
    });
});

/* loading page */

$(window).on("load", function () {
    
    "use strict";
    $(".loader").animate({
        
        "top": "-100%"
        
    }, 600);
    
});