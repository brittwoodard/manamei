// Slick
$('.testimonial-container').slick({
	autoplay: true, 
	autoplaySpeed: 900, 
	speed: 500, 
	arrows: false, 
	accessibility: true, 
	dots: false, 
	fade: true, 
	infinite: true, 
	pauseOnHover: false, 
});

// Light Gallery
lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});