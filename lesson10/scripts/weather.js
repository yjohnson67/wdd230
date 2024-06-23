//output to the given HTML document
function displayResults(data) {
    //current temp
    let numData = `${data.main.temp}`;
    let numDecimals = parseFloat(numData).toFixed(0);
    currentTemp.textContent = numDecimals + '°F.';
    //description
    let desc = data.weather[0].description;
    captionDesc.textContent = `${desc}`;
    //weather icon
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Weather Icon');
    //wind speed
    let wind = data.wind.speed;
    wSpeed.textContent = 'Wind Speed: ' + wind + 'mph';
    //windchill
      if ((currentTemp<=50)&(wSpeed>=3)) {
        var wChill= Math.round(35.74 + (0.6215 * currentTemp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*currentTemp*Math.pow(wSpeed,0.16));
        windchill.textContent = "Wind Chill: " + wChill;
      } else {
        windchill.textContent = "Wind Chill: " + nullstr;
      }
}
 
apiFetch();