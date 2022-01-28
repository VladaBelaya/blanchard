export default function initSliderGallery(selector = '.gallery__slide-img') {
	const SPACE_BETWEEN_ELEMENTS = 60
	const buttonPrev = document.querySelector('.prev')
	const buttonNext = document.querySelector('.next')
	const buttonDisabledSelector = 'button-disabled'
	const galleryListContainer = document.querySelector('.gallery__list')
	const images = [...document.querySelectorAll(selector)]
	const galleryPages = document.querySelector('.navigation__pages')
	const galleryNavigationContainer = document.querySelector('.navigation')
	let sliderPosition = 0;
	let currentPage = 1;

	resetSlider()
	buttonPrev.addEventListener('click', toggleSliderPrev)
	buttonNext.addEventListener('click', toggleSliderNext)

	function toggleSliderPrev() {
		setPrevPage()
		switchToActiveButtons()
		sliderPosition = sliderPosition - pageSize();
		if (sliderPosition < pageSize() && currentPage === 1) {
			clearOffset()
			disableButton(buttonPrev)
		}
		setSliderPosition()
	}

	function toggleSliderNext() {
		setNextPage()
		switchToActiveButtons()
		sliderPosition = sliderPosition + pageSize();
		if (currentPage >= getTotalPages()) {
			disableButton(buttonNext)
			sliderPosition = maxSliderSize()
		}
		setSliderPosition()
	}

	function setSliderPosition() {
		galleryListContainer.style.left = -sliderPosition + 'px';
	}

	function maxSliderSize() {
		return images.reduce((acc, element, index) => {
			const width = index % 3 === 0 ? element.offsetWidth + SPACE_BETWEEN_ELEMENTS : 0
			return ~~acc + width
		}, 0)
	}

	function pageSize() {
		return images.reduce((acc, element, index) => {
			const width = index < 3 ? element.offsetWidth + SPACE_BETWEEN_ELEMENTS : 0
			return ~~acc + width
		}, 0)
	}

	function clearOffset() {
		sliderPosition = 0
	}

	function disableButton(selector) {
		selector.classList.add(buttonDisabledSelector)
	}

	function switchToActiveButtons() {
		buttonPrev.classList.remove(buttonDisabledSelector)
		buttonNext.classList.remove(buttonDisabledSelector)
	}

	function setNextPage() {
		currentPage = currentPage + 1
		if (currentPage > getTotalPages()) {
			currentPage = getTotalPages()
		}
		galleryPages.textContent = `${currentPage} / ${getTotalPages()}`
	}

	function setPrevPage() {
		currentPage = currentPage - 1
		if (currentPage < 1) resetCurrentPage()
		galleryPages.textContent = `${currentPage} / ${getTotalPages()}`
	}

	function initGalleryPages() {
		if (images.length > 0) {
			galleryNavigationContainer.style.display = 'flex'
			galleryPages.textContent = `${currentPage} / ${getTotalPages()}`
			return
		}
		galleryPages.textContent = ''
		galleryNavigationContainer.style.display = 'none'
	}

	function getTotalPages() {
		return Math.ceil((images.length / 3) / 2)
	}

	function resetCurrentPage() {
		currentPage = 1
	}

	function resetSlider() {
		clearOffset()
		switchToActiveButtons()
		disableButton(buttonPrev)
		initGalleryPages()
		setSliderPosition()
		resetCurrentPage()
	}
}