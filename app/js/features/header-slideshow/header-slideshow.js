export default function initHeaderSlider() {
	const images = document.querySelectorAll('.swiper-slide');
	const classActive = 'isActive';
	const classDisabled = 'isDisabled'
	let currentIndex = 1

	function initSlider(ms = 4500) {
		slider(ms)

		function clearPreviousImage(index) {
			if (index > 0) {
				images[index - 1].classList.add(classDisabled)
				images[index - 1].classList.remove(classActive)
			}
		}

		function resetSlider(index, maxLength) {
			if (index > maxLength.length - 1) currentIndex = 0
		}

		function setActiveImage(index) {
			images[index].classList.remove(classDisabled)
			images[index].classList.add(classActive)
		}

		function slider(ms) {
			setInterval(() => {
				clearPreviousImage(currentIndex)
				resetSlider(currentIndex, images)
				setActiveImage(currentIndex)
				currentIndex++
			}, ms)
		}

	}

	initSlider()
}