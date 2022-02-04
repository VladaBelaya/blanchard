export default class Slider {
	#options
	#rootElement
	#navigationEl
	#imagesCollection
	#sliderPagesCounter

	#currentPage = 1
	#sliderPosition = 0

	static #sliderClasses = {
		DISABLED: 'button-disabled'
	}


	constructor(rootElement, {...args}) {
		this.#options = args
		this.#rootElement = document.querySelector(rootElement)
		this.#imagesCollection = [...this.#rootElement.querySelectorAll('.gallery__slide-img')]
		this.#sliderPagesCounter = this.#rootElement.querySelector('.navigation__pages')
		this.#navigationEl = {
			buttonPrev: this.#rootElement.querySelector(this.#options.navigationEl.prevEl),
			buttonNext: this.#rootElement.querySelector(this.#options.navigationEl.nextEl),
		}
		this.#initSlider()
	}

	#initSlider() {
		this.#initListeners()
		this.#initSliderButtons()
		this.#setToDisabledButtons()
		this.#clearPageStep()
		this.#clearSliderPosition()
	}

	#initSliderButtons() {
		Slider.#setToActiveButtons(this.#navigationEl)
		Slider.#setToDisableButton(this.#navigationEl.buttonPrev)
		if (this.#allPagesLength <= 1) {
			Slider.#setToDisableButton(this.#navigationEl.buttonNext)
		}
	}

	#setToDisabledButtons() {
		if (this.#allPagesLength === 1) {
			Slider.#setToDisableButton(this.#navigationEl.buttonNext)
		}
	}

	#initSliderPrevListener() {
		this.#navigationEl.buttonPrev.addEventListener('click', () => {
			this.#onSlidePrev()
		})
	}

	#initSliderNextListener() {
		this.#navigationEl.buttonNext.addEventListener('click', () => {
			this.#onSlideNext()
		})
	}

	#onSlidePrev() {
		Slider.#setToActiveButtons(this.#navigationEl)
		this.#setPreviousPage()
		this.#sliderPosition = this.#sliderPosition - this.#pageSize
		if (this.#currentPage === 1) {
			Slider.#setToDisableButton(this.#navigationEl.buttonPrev)
			this.#clearSliderPosition()
		}
		this.#setSliderPosition()
	}

	#onSlideNext() {
		Slider.#setToActiveButtons(this.#navigationEl)
		this.#setNextPage()
		this.#sliderPosition = this.#sliderPosition + this.#pageSize
		if (this.#currentPage === this.#allPagesLength) {
			Slider.#setToDisableButton(this.#navigationEl.buttonNext)
			this.#sliderPosition = this.#maxSliderSize
		}
		this.#setSliderPosition()
	}

	static #setToActiveButtons({...buttons}) {
		const {buttonPrev, buttonNext} = buttons
		const controls = [buttonPrev, buttonNext]
		controls.forEach((button) => button.classList.remove(Slider.#sliderClasses.DISABLED))
	}

	static #setToDisableButton(button) {
		button.classList.add(Slider.#sliderClasses.DISABLED)
	}

	#setSliderPosition() {
		const galleryListContainer = this.#rootElement.querySelector('.gallery__list')
		galleryListContainer.style.left = `-${this.#sliderPosition}px`;
	}

	#setPreviousPage() {
		this.#currentPage = this.#currentPage - 1
		if (this.#currentPage < 1) {
			this.#currentPage = 1
		}
		this.#sliderPagesCounter.textContent = `${this.#currentPage} / ${this.#allPagesLength}`
	}

	#setNextPage() {
		this.#currentPage = this.#currentPage + 1
		if (this.#currentPage > this.#allPagesLength) {
			this.#currentPage = this.#allPagesLength
		}
		this.#sliderPagesCounter.textContent = `${this.#currentPage} / ${this.#allPagesLength}`
	}

	#setVisiblePagesCounter() {
		if (!this.#hasImages) {
			this.#sliderPagesCounter.style.opacity = '0'
		} else {
			this.#sliderPagesCounter.style.opacity = '1'
		}
	}


	#clearSliderPosition() {
		this.#sliderPosition = 0
		this.#setSliderPosition()
	}

	#clearPageStep() {
		this.#currentPage = 1
		this.#initSliderPages()
	}

	get #spacingBetweenElements() {
		const slidesContainer = this.#rootElement.querySelector('.gallery__list')
		return Number(getComputedStyle(slidesContainer).gridColumnGap.substring(0, 2))
	}

	get #allPagesLength() {
		return this.#options.rows === 1
			? this.#imagesCollection.length <= 3 ? 1 : this.#imagesCollection.length - 3
			: Math.ceil((this.#imagesCollection.length / 3) / 2)
	}

	get #hasImages() {
		return Boolean(this.#imagesCollection.length)
	}

	get #pageSize() {
		if (this.#options.rows === 1 && this.#hasImages) {
			return this.#imagesCollection[0].offsetWidth + this.#spacingBetweenElements
		}
		return this.#imagesCollection.reduce((acc, element, index) => {
			const width = index < 3 ? element.offsetWidth + this.#spacingBetweenElements : 0
			return ~~acc + width
		}, 0)
	}

	get #maxSliderSize() {
		return this.#imagesCollection.reduce((acc, element, index) => {
			const width = index % 3 === 0 ? element.offsetWidth + this.#spacingBetweenElements : 0
			return ~~acc + width
		}, 0)
	}

	#initSliderPages() {
		this.#setVisiblePagesCounter()
		this.#sliderPagesCounter.textContent = `${this.#currentPage} / ${this.#allPagesLength}`
	}

	#initListeners() {
		this.#initSliderPrevListener()
		this.#initSliderNextListener()
	}
}