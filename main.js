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

// Light Gallery
lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});