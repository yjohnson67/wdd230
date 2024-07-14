// Current Weather
// select all of the HTML elements that will need to be manipulated and assign them to const variables
const curTemp = document.querySelector('#curTemp');
const weatherIcon = document.querySelector('#icon');
const curDesc = document.querySelector('#curDesc');
const curHumidity = document.querySelector('#curHumidity');
//future
const futTemp = document.querySelector('#futTemp');
const futDesc = document.querySelector('#futDesc');
const futHumidity = document.querySelector('#futHumidity');
const fIcon = document.querySelector('#fIcon');


//API call
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.26&lon=-86.89&units=imperial&appid=88a5641f3de339bd5023e3c2da5b5b30';
//39.73371637386022, -90.22883862165104
 
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

//output to the givben HTML document
function displayResults(data) {
    //current temp
    let numData = `${data.main.temp}`;
    let numDecimals = parseFloat(numData).toFixed(0);
    curTemp.textContent = numDecimals + '°F';
    //description
    let desc = data.weather[0].description;
    curDesc.textContent = `${desc}`;
    //Humidity
    curHumidity.textContent = `${data.main.humidity}`;
    //weather icon
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Weather Icon');
  }       
   apiFetch();

   const urlF = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.26&lon=-86.89&units=imperial&appid=88a5641f3de339bd5023e3c2da5b5b30 ';

   async function apiFutFetch() {
    try {
      const response = await fetch(urlF);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayFutResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  //output to the givben HTML document
function displayFutResults(data) {
    //current temp
    let numData = `${data.list[3].main.temp}`;
    let numDecimals = parseFloat(numData).toFixed(0);
    futTemp.textContent = numDecimals + '°F';
    //description
    futDesc.textContent = `${data.list[3].weather[0].description}`;
  
    //Humidity
    futHumidity.textContent = `${data.list[3].main.humidity}`;
    //weather icon
    const iconsrc = `https://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png`;
    fIcon.setAttribute('src', iconsrc);
    fIcon.setAttribute('alt', 'Weather Icon');
  }       
   apiFutFetch();
