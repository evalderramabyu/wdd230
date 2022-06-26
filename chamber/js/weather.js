const currentTemp = document.querySelector('#temperature');
const windSpeedField = document.querySelector('#wind-speed');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption-desc');

//API URL with arguments
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Trujillo&appid=87b0f2ce066fd9cb3261aeacfa987c28&units=metric';

async function apiFetch(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch(url);

function displayResults(weatherData) {
  currentTemp.innerText = weatherData.main.temp.toFixed(0);
  windSpeedField.innerText = weatherData.wind.speed;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.innerHTML = titleize(desc);

  calcWindChill();
}

function calcWindChill() {
  const tempCelsius = parseFloat(document.getElementById("temperature").innerText);
  const windSpeed = parseFloat(document.getElementById("wind-speed").innerText);
  const windChillField = document.getElementById('wind-chill');

  let tempFahrenheit = (tempCelsius * 1.8) + 32;
  let windSpeedMph = windSpeed * 0.62137

  console.log(tempFahrenheit)
  console.log(windSpeedMph)

  if (tempFahrenheit < 50 && windSpeedMph > 3) {
    let windChill = 35.74 + 0.6215 * tempFahrenheit - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * tempFahrenheit * Math.pow(windSpeedMph, 0.16);
    windChill = windChill.toFixed(1);
    windChillField.textContent = `${windChill} °F`;
  } else {
    windChillField.textContent = "N/A";
  }
}

function titleize(str) {
  return str.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
}
