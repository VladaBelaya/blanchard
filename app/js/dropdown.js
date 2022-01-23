export default function initDropdown() {
	const dropdownLists = document.querySelectorAll('.header__dropdown-list')
	const dropdownButtons = document.querySelectorAll('.header__dropdown-btn')
	const dropdownClassActive = 'header__dropdown-list-active'
	let currentIndex = null
	dropdownButtons.forEach((btn, index) => {
		btn.addEventListener('click', () => {
			if (index !== currentIndex) {
				for (const dropdownListItem of dropdownLists) {
					dropdownListItem.classList.remove(dropdownClassActive)
				}
				dropdownLists[index].classList.add(dropdownClassActive)
				currentIndex = index
			} else {
				dropdownLists[index].classList.toggle(dropdownClassActive)
			}

		})
	})
}