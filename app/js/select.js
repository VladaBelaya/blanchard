export default function initSelect() {
	const select = document.querySelector('.select')
	const selectHeader = document.querySelectorAll('.select__header');
	const selectItem = document.querySelectorAll('.select__item');

	selectHeader.forEach(item => {
		item.addEventListener('click', selectToggle)
	});

	selectItem.forEach(item => {
		item.addEventListener('click', selectChoose)
	});

	function selectToggle() {
		this.parentElement.classList.toggle('is-active');
	}

	function selectChoose() {
		const select = this.closest('.select'),
			currentText = select.querySelector('.select__current');
		currentText.innerText = this.innerText;
		select.classList.remove('is-active');
	}

	document.addEventListener('click', event => {
		if (!select.contains(event.target)) select.classList.remove('is-active')
	})
}