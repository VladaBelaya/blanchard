import {
	products
} from "../../../db/products.js";
import Slider from "../slider/Slider.js";

export default function initRangeSlider() {
	const rangeSlider = document.getElementById('range-slider');
	const priceInputs = document.querySelectorAll('.price-input')
	const productsListContainer = document.querySelector('.editions__list');

	renderTemplate(products)

	noUiSlider.create(rangeSlider, {
		start: [getMinMaxValues(products).min, getMinMaxValues(products).max],
		connect: true,
		range: {
			'min': getMinMaxValues(products).min,
			'max': getMinMaxValues(products).max,
		},
	});

	rangeSlider.noUiSlider.on('update', (values) => {
		const min = ~~values[0]
		const max = ~~values[1]
		priceInputs[0].value = min
		priceInputs[1].value = max
		debounce(() => renderTemplate(getSortedProducts(min, max, products)))
	});

	function getSortedProducts(min, max, target = 'ALL') {
		if (target === 'ALL') {
			return target
		}
		return target.filter((product) => removeSpacing(product.price) >= min && removeSpacing(product.price) <= max)
	}

	function removeSpacing(inputValue) {
		return inputValue.replace(/ /g, '')
	}

	function renderTemplate(products) {
		let template$ = ''
		productsListContainer.innerHTML = ''
		products.forEach((category) => {
			template$ += `
					<li class="card-edition editions__card">
						<article class="card-adition__content">
							<img src="${category.thumbnail}" alt="Искусство цвета" class="gallery__slide-img">
							<div class="card-edition__text">
								<div class="card-edition__header-price">
									<div class="card-edition__descrs">
										<div class="card-edition__header">${category.title}</div>
										<div class="card-edition__descr">${category.author}</div>
									</div>
									<div class="card-edition__price">${category.price} руб</div>
								</div>
								<a href="" class="btn btn_editions-card card-edition__btn">Заказать</a>
							</div>
						</article>
					</li>
`
		})
		productsListContainer.insertAdjacentHTML('beforeend', template$)
		initSlider()
	}

	function getMinMaxValues(target) {
		return ({
			min: Math.min(...target.map((value) => removeSpacing(value.price))),
			max: Math.max(...target.map((value) => removeSpacing(value.price)))
		})
	}

	function debounce(fn, delay = 550) {
		setTimeout(() => fn(), delay)
	}

	function initSlider() {
		new Slider('.editions-slider', {
			rows: 1,
			navigationEl: {
				prevEl: '.prev',
				nextEl: '.next'
			},
		})
	}
}