import {allCategories} from "./filter-gallery.data.js";
import initSliderGallery from "../slider-gallery/slider-gallery.js";

export default function initFilterGallery() {
	const selectItems = document.querySelectorAll('.select__item')
	const galleryListContainer = document.querySelector('.gallery__list')

	renderCategory()

	selectItems.forEach((select) => {
		select.addEventListener('click', event => {
			const filter = event.target.textContent
			renderCategory(filter)
			initSliderGallery()
		})
	})

	function toggleFilter(filter = 'Живопись', categories = allCategories) {
		return categories.filter((category) => category.category === filter)
	}

	function renderCategory(filter = 'Живопись') {
		let template$ = ''
		galleryListContainer.innerHTML = ''
		toggleFilter(filter).forEach((category, index) => {
			template$ += `
						<li class="gallery__list__item">
								<img class="gallery__slide-img" src="${category.thumbnail}" alt="Картина №${index + 1}">
						</li>
`
		})
		galleryListContainer.insertAdjacentHTML('beforeend', template$)
	}
}