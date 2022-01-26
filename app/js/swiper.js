export default function initSwiper() {
	const swiper = new Swiper(".mySwiper", {
		centeredSlides: true,
		speed: 3500,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 5500,
		},
	});
}