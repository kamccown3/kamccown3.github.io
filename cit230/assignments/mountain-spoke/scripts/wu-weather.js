var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json');

weatherObject.responseType = 'json';

weatherObject.send();

weatherObject.onload = function () {

	console.log(weatherObject.response);
	var output = document.getElementById("indexTowns");
	if (!output) {
		return;
	}

	weatherObject.response.towns.forEach(function (town) {

		/* console.log(town); */
		var myArticle = document.createElement("article");
		var myHeading = document.createElement("h2");
		var p = document.createElement("p");
		myHeading.innerHTML = town.name;
		p.innerHTML = town.motto + "<br>";
		p.innerHTML += "Year founded: " + town.yearFounded + "<br> Town Population: " + town.currentPopulation + "<br> Average Rainfall: " + town.averageRainfall;
		myArticle.appendChild(myHeading);
		output.appendChild(myArticle);
		myArticle.appendChild(p);

	})

}

var weatherTown = new XMLHttpRequest();

weatherTown.open('GET', 'https://api.wunderground.com/api/664221042c7bea65/conditions/q/MN/Franklin.json', true);
weatherTown.send();

weatherTown.onload = function () {
	console.log(weatherTown.response);
	var weatherInfo = JSON.parse(weatherTown.responseText);
	console.log(weatherObject)

	document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
	document.getElementById('currentCond').innerHTML = weatherInfo.current_observation.weather;
	document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
	document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
	document.getElementById('currentConditions').src = weatherInfo.current_observation.icon_url;
}

var weatherTownF = new XMLHttpRequest();

weatherTownF.open('GET', 'https://api.wunderground.com/api/664221042c7bea65/forecast10day/q/MN/Franklin.json', true);
weatherTownF.send();

weatherTownF.onload = function () {
	var weatherInfoF = JSON.parse(weatherTownF.responseText);
	document.getElementById('forecastW').innerHTML = weatherInfoF.forecast.txt_forecast.forecastday["0"].fcttext;
}

function getWeatherData(source) {
	var request = new XMLHttpRequest();

	request.open('GET', source, true);
	request.send();

	request.onload = function () {
		var weatherInfo = JSON.parse(request.responseText);

		document.getElementById('high-temp').innerHTML = weatherInfo.current_observation.temp_f;
		document.getElementById('low-temp').innerHTML = weatherInfo.current_observation.temp_f; // Change later!
		document.getElementById('current-conditions').innerHTML = weatherInfo.current_observation.weather;
		document.getElementById('precipitation').innerHTML = weatherInfo.current_observation.precip_today_in;
		document.getElementById('wind-speed').innerHTML = weatherInfo.current_observation.wind_mph;
		document.getElementById('wind-chill').innerHTML = weatherInfo.current_observation.windchill_f;
		document.getElementById('icon').src = weatherInfo.current_observation.icon_url;
	};
}
