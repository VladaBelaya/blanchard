import {
	allEvents
} from "../../../db/events.js"

export default function initEvents() {
	const eventsList = document.querySelector('.events__cards')
	const eventsBtn = document.querySelector('.btn_events')
	let stack = 3
	let count = 1

	const render = (data) => {
		eventsList.textContent = ''
		data.forEach(el => {
			eventsList.insertAdjacentHTML('beforeend', `
						<li class="card-event events__card">
							<article class="card-event__content">
								<img src="${el.image}" alt="${el.header}"
									class="card-event__image">
								<div class="card-event__text">
									<div class="card-event__date">${el.date}</div>
									<h3 class="card-event__header">${el.header}</h3>
									<p class="card-event__descr">
										${el.descr}
									</p>
									<a href="#" class="card-event__link">Подробнее</a>
								</div>
							</article>
						</li>
					`)
		});
	}

	const sliceArray = (data, index) => {
		return data.slice(0, index)
	}

	const changeData = (data) => {
		const newStack = stack * count
		render(sliceArray(data, newStack))
		if (data.length > newStack) {
			count++
		} else {
			eventsBtn.style.display = 'none'
		}
	}

	eventsBtn.addEventListener('click', () => {
		changeData(allEvents)
	})

	changeData(allEvents)
}