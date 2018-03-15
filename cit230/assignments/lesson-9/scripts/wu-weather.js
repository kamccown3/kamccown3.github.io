var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json');

weatherObject.responseType = 'json';

weatherObject.send();

weatherObject.onload = function () {

    console.log(weatherObject.response);
    var output = document.getElementById("town");

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
weatherTown.responseType = "json";
weatherTown.send();

weatherTown.onload = function () {
    console.log(weatherTown.response);
    var weatherInfo = (weatherTown.response);
    console.log(weatherObject)

    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('currentCond').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('currentConditions').src = weatherInfo.current_observation.icon_url;
    document.getElementById('forecast').src = weatherInfo.current_observation.forecast_url;

}
