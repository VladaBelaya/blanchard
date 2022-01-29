export default function initTabs() {
	const tabFlags = document.querySelector('.catalog__flags')
	const tabButtons = document.querySelectorAll('.catalog__btn')
	const catalogContents = document.querySelectorAll('.catalog__content')

	function removeClassActive() {
		tabButtons.forEach((btn, index) => {
			btn.classList.remove('catalog__btn-is-active')
			catalogContents[index].classList.remove('catalog__content-is-active')
		})
	}
	tabFlags.addEventListener('click', event => {
		const targetIndexBtn = event.target.dataset.flagTab

		if (targetIndexBtn) {
			removeClassActive()
			tabButtons[targetIndexBtn].classList.add('catalog__btn-is-active')
			catalogContents[targetIndexBtn].classList.add('catalog__content-is-active')

		}
	})
}