const headerDropdown = document.querySelector('.header__down');
const dropdownLists = document.querySelectorAll('.header__dropdown-list');
const dropdownLinks = document.querySelectorAll('.header__dropdown-link')
const classActive = 'header__dropdown-list-active';

export default function initDropdown() {
	headerDropdown.addEventListener('click', (event) => {
		const targetIndex = event.target.dataset.dropdownButton
		if (targetIndex) {
			const dropdownListItem = dropdownLists[targetIndex]
			if (dropdownListItem.classList.contains(classActive)) {
				dropdownListItem.classList.remove(classActive)
			} else {
				dropdownClose()
				dropdownListItem.classList.add(classActive)
			}
		}
	})

	const dropdownClose = () => {
		for (const dropdownListItem of dropdownLists) {
			dropdownListItem.classList.remove(classActive)
		}
	}

	document.addEventListener('click', (event) => {
		for (const dropdownLink of dropdownLinks) {
			if (dropdownLink.contains(event.target) || !headerDropdown.contains(event.target)) {
				dropdownClose()
			}
		}
	})

}