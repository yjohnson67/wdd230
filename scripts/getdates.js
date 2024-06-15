// Get the current date
const currentDate = new Date();

// Extract the current year and weekday
const currentYear = currentDate.getFullYear();
const currentWeekday = currentDate.toLocaleString('en-US', { weekday: 'long' });

// Update the copyright year dynamically
document.getElementById('currentYear').textContent = `${currentWeekday}, ${currentYear}`;

// Update the second paragraph in the footer with the last modified date
document.getElementById('mod').textContent = `Last Modified: ${currentDate}`;


(document).ready(function() {
var getIP = 'http://ip-api.com/json/',
		openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather',
		APPID = 'APPID';

	$.getJSON(getIP).done(function(location) {

	$.getJSON(openWeatherMap, {
			lat: location.lat,
			lon: location.lon,
			APPID: APPID
		})
		.done(function(weather) {

			var celsius = weather.main.temp - 273.15;
			var fahrenheit = celsius * 1.8 + 32;

			$('.currentLocation').text('Hello! Your current location is ' + location.city + ', ' + location.region + ', ' + location.country);

			$('.btn-celsius').on('click', function() {
				$('.currentTemperature').text('The current temperature in ' + location.city + ' is ' + celsius.toFixed(0) + ' degrees Celsius.');
			});

			$('.btn-fahrenheit').on('click', function() {
				$('.currentTemperature').text('The current temperature in ' + location.city + ' is ' + fahrenheit.toFixed(0) + ' degrees Fahrenheit.');
			});
		});
	});
});
    