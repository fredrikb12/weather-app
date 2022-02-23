import { weather } from "./weatherInfo";
import { tempHelper } from "./tempHelper";

const API_KEY = "225c02b9149e8e7c90149ef431b07353";

function getWeather(city) {
  if (typeof city !== "string") return;
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
    {
      mode: "cors",
    }
  ).then((response) => response.json());
}

function processData(data) {
  const weatherData = {
    country: data.sys.country,
    city: data.name,
    temp_f: tempHelper.calcTempF(data.main.temp),
    temp_f_min: tempHelper.calcTempF(data.main.temp_min),
    temp_c: tempHelper.calcTempC(data.main.temp),
    temp_c_min: tempHelper.calcTempC(data.main.temp_min),
    humidity: data.main.humidity,
    wind: data.wind.speed,
    weather: data.weather[0].main,
    weatherDescription: data.weather[0].description,
  };
  
  tempHelper.setTempC(weatherData.temp_c);
  console.log(`c temp set to ${weatherData.temp_c}`);
  tempHelper.setTempF(weatherData.temp_f);
  console.log(`f temp set to ${weatherData.temp_f}`);

  console.log(tempHelper.getTempC());
  console.log(tempHelper.getTempF());
  return weatherData;
}

export { getWeather, processData };
