const tempHelper = (() => {
  let currentTemp = "Celsius";
  let tempF = 0;
  let tempC = 0;
  const getCurrentTemp = () => currentTemp;
  const getTempC = () => tempC;
  const setTempC = (fetchedTemp) => {
    console.log("setting temp c to: " + fetchedTemp);
    tempC = fetchedTemp;
  };
  const getTempF = () => tempF;
  const setTempF = (fetchedTemp) => {
    console.log("setting temp f to: " + fetchedTemp);
    tempF = fetchedTemp;
  };
  const changeTemp = () =>
    (currentTemp = currentTemp === "Celsius" ? "Fahrenheit" : "Celsius");

  const calcTemp = (kelvinTemp) => {
    if (currentTemp === "Celsius") {
      return Math.floor(kelvinTemp + 273.15);
    } else {
      return Math.floor((9 / 5) * (kelvinTemp - 273.15) + 32);
    }
  };
  const calcTempC = (kelvinTemp) => {
    return Math.floor(kelvinTemp - 273.15);
  };

  const calcTempCToF = (cTemp) => {
    return Math.floor((cTemp * 9) / 5 + 32);
  };

  const calcTempF = (kelvinTemp) => {
    return Math.floor((9 / 5) * (kelvinTemp - 273.15) + 32);
  };

  const calcTempFToC = (fTemp) => {
    return Math.floor(((fTemp - 32) * 5) / 9);
  };
  return {
    changeTemp,
    calcTemp,
    calcTempC,
    calcTempF,
    getCurrentTemp,
    calcTempCToF,
    calcTempFToC,
    getTempC,
    setTempC,
    getTempF,
    setTempF,
  };
})();

export { tempHelper };
