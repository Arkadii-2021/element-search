const btnPrev = document.querySelector(".slider__arrow_prev");
const btnNext = document.querySelector(".slider__arrow.slider__arrow_next");
const sliders = document.querySelectorAll(".slider__item");


function sliderСhange() {
	
	let viewSlide = 0;
	
	btnNext.addEventListener("click", function () {
		viewSlide++
		if (viewSlide <= sliders.length - 1) {
			sliders[viewSlide].classList.add("slider__item_active");
			sliders[viewSlide - 1].classList.remove("slider__item_active");
		} else {
			viewSlide = 0;
			sliders.forEach(slaid => slaid.classList.remove("slider__item_active"));
			sliders[viewSlide].classList.add("slider__item_active");
		}
});

	btnPrev.addEventListener("click", function () {
		viewSlide--
		if (viewSlide <= sliders.length - 1 && viewSlide >= 0) {
			sliders[viewSlide + 1].classList.remove("slider__item_active");
			sliders[viewSlide].classList.add("slider__item_active");
			
		} else if (viewSlide < 0) {
			viewSlide = sliders.length - 1;
			sliders.forEach(slaid => slaid.classList.remove("slider__item_active"));
			sliders[viewSlide].classList.add("slider__item_active");
		} else {
			viewSlide = 0;
			sliders[viewSlide].classList.add("slider__item_active");
			sliders.forEach(slaid => slaid.classList.remove("slider__item_active"));	
		}
});
}

sliderСhange();