const currentTemp = document.querySelector('#temperature');
const windSpeedField = document.querySelector('#wind-speed');
const humidityField = document.querySelector('#humidity');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption-desc');

//API URL with arguments
//const url = 'https://api.openweathermap.org/data/2.5/weather?q=Salt Lake&appid=87b0f2ce066fd9cb3261aeacfa987c28&units=metric';
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.759370&lon=-111.891258&exclude=minutely,hourly&appid=87b0f2ce066fd9cb3261aeacfa987c28&units=metric';

async function apiFetch(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // this is for testing the call
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
  currentInfo = weatherData.current;
  //console.log(currentInfo)
  currentTemp.innerText = currentInfo.temp.toFixed(0);
  windSpeedField.innerText = currentInfo.wind_speed;
  humidityField.innerText = currentInfo.humidity;

  const iconsrc = `https://openweathermap.org/img/w/${currentInfo.weather[0].icon}.png`;
  const desc = currentInfo.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.innerHTML = titleize(desc);

  forecast = weatherData.daily;
  console.log(forecast)
  const day1Info = forecast[1];
  daySection = document.querySelector('#day1');
  wIcon = daySection.querySelector('.weather-icon');
  wIcon.setAttribute('src', `https://openweathermap.org/img/w/${day1Info.weather[0].icon}.png`);
  wIcon.setAttribute('alt', day1Info.weather[0].description);
  wIcon.setAttribute('title', day1Info.weather[0].description);
  temp = day1Info.temp;
  daySection.querySelector('.temperature').innerText = `${temp.max.toFixed(0)}º | ${temp.min.toFixed(0)}º`;

  forDay = new Date(day1Info.dt * 1000).toDateString();
  var monthDay = document.createElement('i');
  monthDay.textContent = `${forDay.split(" ")[1]} ${forDay.split(" ")[2]}`;
  daySection.querySelector('.cur-date').innerText = forDay.split(" ")[0];
  daySection.querySelector('.cur-date').appendChild(monthDay);

  const day2Info = forecast[2];
  daySection = document.querySelector('#day2');
  wIcon = daySection.querySelector('.weather-icon');
  wIcon.setAttribute('src', `https://openweathermap.org/img/w/${day2Info.weather[0].icon}.png`);
  wIcon.setAttribute('alt', day2Info.weather[0].description);
  wIcon.setAttribute('title', day2Info.weather[0].description);
  temp = day2Info.temp;
  daySection.querySelector('.temperature').innerText = `${temp.max.toFixed(0)}º | ${temp.min.toFixed(0)}º`;

  forDay = new Date(day2Info.dt * 1000).toDateString();
  var monthDay = document.createElement('i');
  monthDay.textContent = `${forDay.split(" ")[1]} ${forDay.split(" ")[2]}`;
  daySection.querySelector('.cur-date').innerText = forDay.split(" ")[0];
  daySection.querySelector('.cur-date').appendChild(monthDay);

  const day3Info = forecast[3];
  daySection = document.querySelector('#day3');
  wIcon = daySection.querySelector('.weather-icon');
  wIcon.setAttribute('src', `https://openweathermap.org/img/w/${day3Info.weather[0].icon}.png`);
  wIcon.setAttribute('alt', day3Info.weather[0].description);
  wIcon.setAttribute('title', day3Info.weather[0].description);
  temp = day3Info.temp;
  daySection.querySelector('.temperature').innerText = `${temp.max.toFixed(0)}º | ${temp.min.toFixed(0)}º`;

  forDay = new Date(day3Info.dt * 1000).toDateString();
  var monthDay = document.createElement('i');
  monthDay.textContent = `${forDay.split(" ")[1]} ${forDay.split(" ")[2]}`;
  daySection.querySelector('.cur-date').innerText = forDay.split(" ")[0];
  daySection.querySelector('.cur-date').appendChild(monthDay);
}

function titleize(str) {
  return str.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
}
