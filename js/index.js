new Swiper(".swiper", {
	loop: true,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	thumbs: {
		swiper: {
			direction: "vertical",
			el: ".image-mini-slider",
			slidesPerView: 3,
		},
	},
});
