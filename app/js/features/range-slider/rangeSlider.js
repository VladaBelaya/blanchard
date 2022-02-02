export default function initRangeSlider() {
	const rangeSlider = document.getElementById('range-slider');

	noUiSlider.create(rangeSlider, {
		start: [0, 100],
		connect: true,
		range: {
			'min': 0,
			'max': 100
		}
	});
}