export default function initMap() {
	ymaps.ready(init)

	function init() {
		var myMap = new ymaps.Map("map", {
				center: [55.75846806898367, 37.60108849999989],
				zoom: 15,
				controls: [],
			}),
			// Создаём макет содержимого.
			myPlacemark = new ymaps.Placemark(
				myMap.getCenter([55.75846806898367, 37.60108849999989]), {
					hintContent: "",
				}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: "default#image",
					// Своё изображение иконки метки.
					iconImageHref: "./dist/images/dist/metka.svg",
					// Размеры метки.
					iconImageSize: [30, 30],

				}
			);

		myMap.geoObjects.add(myPlacemark);
	};

}