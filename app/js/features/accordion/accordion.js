export default function initAccordion() {
	const catalogSection = document.querySelector('.catalog')
	const classes = {
		LIST_IS_ACTIVE: 'catalog__artists-is-active',
		BUTTON_IS_ACTIVE: 'catalog__btn-arrow-active'
	}

	catalogSection.addEventListener('click', event => {
		const accordIndexBtn = event.target.dataset.accordionBtn
		if (accordIndexBtn) {
			const accordionListItem = document.querySelectorAll('.catalog__content-is-active .catalog__artists')
			toggleAccordion(accordionListItem, accordIndexBtn)
		}
	})

	const toggleAccordion = (rootElement$, index) => {
		const rootElement = rootElement$[index]
		const button = rootElement.parentElement.querySelector('.catalog__btn-arrow')
		if (
			rootElement.classList.contains(classes.LIST_IS_ACTIVE)
		) {
			rootElement.classList.remove(classes.LIST_IS_ACTIVE)
			button.classList.remove(classes.BUTTON_IS_ACTIVE)
		} else {
			dropdownClose(rootElement$)
			rootElement.classList.add(classes.LIST_IS_ACTIVE)
			button.classList.add(classes.BUTTON_IS_ACTIVE)
		}
	}

	const dropdownClose = (rootElement$) => {
		for (const element of rootElement$) {
			element.parentElement.querySelector('.catalog__btn-arrow').classList.remove(classes.BUTTON_IS_ACTIVE)
			element.classList.remove(classes.LIST_IS_ACTIVE)
		}
	}
}