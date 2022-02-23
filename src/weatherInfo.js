const weather = (() => {
  let weatherInfo;
  const storeWeather = (weatherData) => {
    weatherData.then((res) => {
      weatherInfo = weatherData;
      console.log(weatherInfo);
    });

    
  };
  const getWeatherInfo = (weatherInfo) => weatherInfo;
  return {
    storeWeather,
    getWeatherInfo,
  };
})();

export { weather };
