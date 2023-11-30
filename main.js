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

// Magnific
$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }
      }
    });
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
