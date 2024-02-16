new Swiper(".swiper-partners", {
	loop: true,
	slidesPerView: 3,
	autoplay: {
		delay: 3000, 
		disableOnInteraction: false, 
	  },

	  breakpoints: {
		768: {
            slidesPerView: 5,

        },
        1440: {
            slidesPerView: 8,
        },
    },
	
});
