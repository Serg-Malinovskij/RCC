//  Tips slider

if (document.querySelector('.burger-popup__slider') ) {

	const tipsSwiper = new Swiper('.burger-popup__slider', {
		// Optional parameters
		direction: 'vertical',
		speed: 900,
		slidesPerView: 5,
		touchRatio: 0.7,
		spaceBetween: 50,
		loop: true,
		initialSlide:2,
		centeredSlides: true,
		// parallax: true,
		
		// для pagination указываем блок для точек
		// pagination: {
		// 	el: '.slider-tips__dotts',
		// 	clickable: true,
		// },
		// Navigation arrows (уточняем путь, т.к. эти классы(.slider-arrow_next') будут использоваться и в других слайдерах на странице)
		navigation: {
			nextEl: '.burger-popup__buttton-next',
			prevEl: '.burger-popup__buttton-prev',
		},
		clikable: true,
		setWrapperSize: true,
	  autoHeight: true,
		// Default parameters

		// Responsive breakpoints
		breakpoints: {
			300: {
				slidesPerView: 5,
				spaceBetween: 20,
				
			},
			768: {
				slidesPerView: 5,
				spaceBetween: 32,
			},
			992: {
				slidesPerView: 5,
				spaceBetween: 40,
			},
		},
		// autoplay: {
		// 	delay: 2000,
		// 	//отключение автоплей при управлении пользователем: disableOnInteraction: true,
		// 	disableOnInteraction: true,
		// },
		effect: 'coverflow',
		loopedSlides:0,

		// Дополнение к coverflow
		coverflowEffect: {
			// Угол
			rotate: 0,
			// Наложение
			stretch: 0,
			//  Глубина удаления слайдов
			depth: 600,
			// Тень
			slideShadows: false,
			
		},
		// Управление колесом мыши
		mousewheel: {
			// Чувствительность колеса мыши
			sensitivity: 1,
			// Класс объекта на котором
			// будет срабатывать прокрутка мышью.
			//eventsTarget: ".image-slider"
		},

	});

}


