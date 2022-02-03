import initDropdown from './features/dropdown/dropdown.js'
import initHeaderSlider from './features/header-slideshow/header-slideshow.js'
import initSelect from './features/select/select.js'
import initFilterGallery from './features/filter-gallery/filter-gallery.js'
import initSliderGallery from './features/slider-gallery/slider-gallery.js'
import initTabs from './features/catalog-tabs/catalogTabs.js'
import initAccordion from './features/accordion/accordion.js'
import initLinkArtist from './features/link-tabs/link-tabs.js'
import initEvents from './features/add-events/addEvents.js'
import initRangeSlider from './features/range-slider/rangeSlider.js'
import initMap from './features/map/map.js'


document.addEventListener('DOMContentLoaded', () => {
	initDropdown()
	initHeaderSlider()
	initSelect()
	initFilterGallery()
	initSliderGallery()
	initTabs()
	initAccordion()
	initLinkArtist()
	initEvents()
	initRangeSlider()
	initMap()
})