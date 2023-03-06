//show email form
// $(document).ready(function() {
//     $(".email-btn").click(function() {
//         $("form").toggle(400);
//     });
// });

//venobox



// Read more
$(document).ready(function() {
    $(".readmore").click(function() {
        $('.buttons').addClass('hide-more');
        $('.buttons').removeClass('hide-less');
        $(".more").show(500);
    });
});

// Read less
$(document).ready(function() {
    $(".readless").click(function() {
        $('.buttons').addClass('hide-less');
        $('.buttons').removeClass('hide-more');
        $(".more").hide(500);

    });
});

//scrollspy
$('body').scrollspy({ target: '#nav-bar', offset: 70 });
//carousel
$('.carousel').carousel({
    pause: "false"
});

//Smooth Scroll start
var scroll = new SmoothScroll('a[href*="#"]');

//Smooth Scroll end


//collapse navbar
$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});


//Owl Carousel start

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


//Owl Carousel End

//copyright Date Auto Update

let year = document.getElementById('year');
let d = new Date();
year.innerHTML = d.getFullYear();