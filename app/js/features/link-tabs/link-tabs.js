export default function initLinkArtist() {
	const catalog = document.querySelector('.catalog')
	const classes = {
		PICTURE_IS_ACTIVE: 'picture-card_active'
	}
	catalog.addEventListener('click', event => {
		event.preventDefault()
		const linkIndex = event.target.dataset.artBtn
		if (linkIndex) {
			const accordionListItem = document.querySelectorAll('.catalog__content-is-active .catalog__artists')
			const accordionPictureCard = document.querySelectorAll('.catalog__content-is-active .picture-card')

			const listArtists = accordionListItem[linkIndex].querySelectorAll('.catalog__link')

			if (listArtists[linkIndex]) {
				removeClassActive(accordionPictureCard)
				accordionPictureCard[linkIndex].classList.add('picture-card_active')
			}
		}
	})

	function removeClassActive(element$) {
		for (const card of element$) {
			card.classList.remove('picture-card_active')
		}
	}
}