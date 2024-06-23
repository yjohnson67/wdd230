// select all of the HTML elements that will need to be manipulated and assign them to const variables
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
 
//API call
const url = 'https://api.openweathermap.org/data/2.5/weather?lat={49.75}&lon={6.63}&appid={88a5641f3de339bd5023e3c2da5b5b30}';

//asynchronous function named "apiFetch()" that uses a try block to handle errors
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
   
  //output to the given HTML document
  function displayResults(data) {
      //current temp
      let numData = `${data.main.temp}`;
      let numDecimals = parseFloat(numData).toFixed(0);
      currentTemp.textContent = numDecimals + '°F.';
      //description
      let desc = data.weather[0].description;
      captionDesc.textContent = `${desc}`;
      //waether icon
      const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      weatherIcon.setAttribute('src', iconsrc);
      weatherIcon.setAttribute('alt', 'Weather Icon');
  }
   
  apiFetch();