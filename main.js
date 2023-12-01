// Slick
$('.testimonial-container').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: false,
    accessibility: true,
    dots: true,
    fade: true,
    infinite: true,
    pauseOnHover: true,
});

$('.text-container').slick({
    autoplay: true,
    speed: 1000,
    arrows: false,
    accessibility: true,
    dots: false,
    fade: true,
    infinite: true,
    pauseOnHover: false,
});

// Mobile Menu
// A $( document ).ready() block.
$(document).ready(function () {
    $(document).ready(function () {
        $(".mobile-button").click(function () {
            $(".mobile-button").toggleClass("active");
            $(".mobile-menu").toggleClass("active");
        });
    });
});

// Read More
document.addEventListener('DOMContentLoaded', function () {
    var descriptionContainer = document.getElementById('aboutDescription');
    var readMoreBtn = document.getElementById('readMoreBtn');

    if (descriptionContainer.scrollHeight > descriptionContainer.clientHeight) {
        readMoreBtn.style.display = 'block';
    }

    readMoreBtn.addEventListener('click', function () {
        if (descriptionContainer.style.maxHeight) {
            descriptionContainer.style.maxHeight = null;
            readMoreBtn.textContent = 'Read More';
        } else {
            descriptionContainer.style.maxHeight = descriptionContainer.scrollHeight + 'px';
            readMoreBtn.textContent = 'Read Less';
        }
    });
});

// Magnific Popup
// $('.parent-container').magnificPopup({
//     delegate: 'a', 
//     type: 'image',
//     gallery: {
//         enabled: true
//     }
// });