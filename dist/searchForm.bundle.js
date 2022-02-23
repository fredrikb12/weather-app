/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather),
/* harmony export */   "processData": () => (/* binding */ processData)
/* harmony export */ });
/* harmony import */ var _weatherInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherInfo */ "./src/weatherInfo.js");
/* harmony import */ var _tempHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tempHelper */ "./src/tempHelper.js");



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
    temp_f: _tempHelper__WEBPACK_IMPORTED_MODULE_1__.tempHelper.calcTempF(data.main.temp),
    temp_f_min: _tempHelper__WEBPACK_IMPORTED_MODULE_1__.tempHelper.calcTempF(data.main.temp_min),
    temp_c: _tempHelper__WEBPACK_IMPORTED_MODULE_1__.tempHelper.calcTempC(data.main.temp),
    temp_c_min: _tempHelper__WEBPACK_IMPORTED_MODULE_1__.tempHelper.calcTempC(data.main.temp_min),
    humidity: data.main.humidity,
    wind: data.wind.speed,
    weather: data.weather[0].main,
    weatherDescription: data.weather[0].description,
  };
  
  _tempHelper__WEBPACK_IMPORTED_MODULE_1__.tempHelper.setTempC(weatherData.temp_c);
  console.log(`c temp set to ${weatherData.temp_c}`);
  _tempHelper__WEBPACK_IMPORTED_MODULE_1__.tempHelper.setTempF(weatherData.temp_f);
  console.log(`f temp set to ${weatherData.temp_f}`);

  console.log(_tempHelper__WEBPACK_IMPORTED_MODULE_1__.tempHelper.getTempC());
  console.log(_tempHelper__WEBPACK_IMPORTED_MODULE_1__.tempHelper.getTempF());
  return weatherData;
}




/***/ }),

/***/ "./src/displayData.js":
/*!****************************!*\
  !*** ./src/displayData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayData": () => (/* binding */ displayData)
/* harmony export */ });
/* harmony import */ var _tempHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempHelper */ "./src/tempHelper.js");


function displayData(data) {
    const wrapper = document.querySelector(".temp-wrapper");
    wrapper.style.display = "block";
    const contentWrapper = document.querySelector(".content-wrapper");
    contentWrapper.style.display = "block";
  const description = document.querySelector(".description");
  description.textContent = data.weatherDescription;
  const header = document.querySelector(".header");
  header.textContent = `${data.city}, ${data.country}`;
  const temp = document.querySelector(".temp");
  temp.textContent =
    _tempHelper__WEBPACK_IMPORTED_MODULE_0__.tempHelper.getCurrentTemp() === "Celsius" ? data.temp_c : data.temp_f;
  const degrees = document.querySelector(".degrees");
  if (!degrees) {
    const degrees = document.createElement("span");
    degrees.classList.add("degrees");
    degrees.textContent =
      _tempHelper__WEBPACK_IMPORTED_MODULE_0__.tempHelper.getCurrentTemp() === "Celsius" ? "°C" : "°F";
      temp.appendChild(degrees);
  } else {
    degrees.textContent =
      _tempHelper__WEBPACK_IMPORTED_MODULE_0__.tempHelper.getCurrentTemp() === "Celsius" ? "°C" : "°F";
  }
  const wind = document.querySelector(".wind");
  wind.textContent = `WIND: ${Math.floor(data.wind * 10) / 10} mph`;
  const humidity = document.querySelector(".humidity");
  humidity.textContent = `HUMIDITY: ${data.humidity}%`;
  console.log(data);
}




/***/ }),

/***/ "./src/mainContent.js":
/*!****************************!*\
  !*** ./src/mainContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContent": () => (/* binding */ createContent),
/* harmony export */   "createDegreeSpan": () => (/* binding */ createDegreeSpan)
/* harmony export */ });
/* harmony import */ var _tempHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempHelper */ "./src/tempHelper.js");


function createContent() {
  const main = document.createElement("main");
  const headerWrapper = document.createElement("div");
  headerWrapper.classList.add("header-wrapper");
  const description = document.createElement("p");
  description.classList.add("description");
  const header = document.createElement("h1");
  header.classList.add("header");
  headerWrapper.appendChild(description);
  headerWrapper.appendChild(header);

  const bottomWrapper = document.createElement("div");
  bottomWrapper.classList.add("bottom-wrapper");

  const tempWrapper = document.createElement("div");
  tempWrapper.classList.add("temp-wrapper");
  const temp = document.createElement("p");
  temp.classList.add("temp");
  const degrees = document.createElement("span");
  degrees.classList.add("degrees");
  temp.appendChild(degrees);
  tempWrapper.appendChild(temp);
  bottomWrapper.appendChild(tempWrapper);

  const conditionWrapper = document.createElement("div");
  conditionWrapper.classList.add("condition-wrapper");
  const wind = document.createElement("p");
  wind.classList.add("wind");
  const windSpeed = document.createElement("span");
  windSpeed.classList.add("wind-speed");
  wind.appendChild(windSpeed);
  const humidity = document.createElement("p");
  humidity.classList.add("humidity");
  conditionWrapper.appendChild(wind);
  conditionWrapper.appendChild(humidity);
  bottomWrapper.appendChild(conditionWrapper);
  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("content-wrapper");
  contentWrapper.appendChild(headerWrapper);
  contentWrapper.appendChild(bottomWrapper);
  main.appendChild(contentWrapper);

  return main;
}

function createDegreeSpan() {
  const span = document.createElement("span");
  span.classList.add("degrees");
  span.textContent = _tempHelper__WEBPACK_IMPORTED_MODULE_0__.tempHelper.getCurrentTemp() === "Celsius" ? "°C" : "°F";
  return span;
}




/***/ }),

/***/ "./src/tempHelper.js":
/*!***************************!*\
  !*** ./src/tempHelper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tempHelper": () => (/* binding */ tempHelper)
/* harmony export */ });
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




/***/ }),

/***/ "./src/weatherInfo.js":
/*!****************************!*\
  !*** ./src/weatherInfo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weather": () => (/* binding */ weather)
/* harmony export */ });
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/searchForm.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForm": () => (/* binding */ createForm)
/* harmony export */ });
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _displayData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayData */ "./src/displayData.js");
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainContent */ "./src/mainContent.js");
/* harmony import */ var _tempHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tempHelper */ "./src/tempHelper.js");





function createForm() {
  const form = document.createElement("form");
  const searchWrapper = document.createElement("div");
  searchWrapper.classList.add("search-wrapper");
  const h1 = document.createElement("h1");
  h1.textContent = "Search for a city!";
  const input = document.createElement("input");
  input.type = "text";
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Search";
  button.addEventListener("click", (e) => {
    e.preventDefault();
    (0,_apiCalls__WEBPACK_IMPORTED_MODULE_0__.getWeather)(input.value)
      .then((res) => {
        if (parseInt(res.cod) !== 200) throw res;
        console.log(res);
        (0,_displayData__WEBPACK_IMPORTED_MODULE_1__.displayData)((0,_apiCalls__WEBPACK_IMPORTED_MODULE_0__.processData)(res));
      })
      .catch((err) => {
        if (err.message === "city not found") {
        }
        console.log(err);
      });
  });
  const toggleDegrees = document.createElement("button");
  toggleDegrees.textContent = "°C / °F";
  toggleDegrees.addEventListener("click", (e) => {
    e.preventDefault();
    _tempHelper__WEBPACK_IMPORTED_MODULE_3__.tempHelper.changeTemp();
    console.log(_tempHelper__WEBPACK_IMPORTED_MODULE_3__.tempHelper.getCurrentTemp());
    const temp = document.querySelector(".temp");
    if (_tempHelper__WEBPACK_IMPORTED_MODULE_3__.tempHelper.getCurrentTemp() == "Celsius") {
      temp.textContent = _tempHelper__WEBPACK_IMPORTED_MODULE_3__.tempHelper.getTempC();
    } else {
      temp.textContent = _tempHelper__WEBPACK_IMPORTED_MODULE_3__.tempHelper.getTempF();
    }
    const span = document.querySelector(".degrees");
    if (!span) {
      const span = (0,_mainContent__WEBPACK_IMPORTED_MODULE_2__.createDegreeSpan)();
      temp.appendChild(span);
    }
  });

  searchWrapper.appendChild(h1);
  searchWrapper.appendChild(input);
  const buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("button-wrapper");
  buttonWrapper.appendChild(button);
  buttonWrapper.appendChild(toggleDegrees);
  form.appendChild(searchWrapper);
  form.appendChild(buttonWrapper);
  return form;
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFxQjtBQUN6QixnQkFBZ0Isa0VBQXlCO0FBQ3pDO0FBQ0EsUUFBUSxrRUFBeUI7QUFDakMseUJBQXlCLDREQUFtQjtBQUM1QyxNQUFNO0FBQ04seUJBQXlCLDREQUFtQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOERBQWdCO0FBQ25DO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaUNhbGxzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Rpc3BsYXlEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21haW5Db250ZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RlbXBIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckluZm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZWFyY2hGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdlYXRoZXIgfSBmcm9tIFwiLi93ZWF0aGVySW5mb1wiO1xuaW1wb3J0IHsgdGVtcEhlbHBlciB9IGZyb20gXCIuL3RlbXBIZWxwZXJcIjtcblxuY29uc3QgQVBJX0tFWSA9IFwiMjI1YzAyYjkxNDllOGU3YzkwMTQ5ZWY0MzFiMDczNTNcIjtcblxuZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG4gIGlmICh0eXBlb2YgY2l0eSAhPT0gXCJzdHJpbmdcIikgcmV0dXJuO1xuICByZXR1cm4gZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke0FQSV9LRVl9YCxcbiAgICB7XG4gICAgICBtb2RlOiBcImNvcnNcIixcbiAgICB9XG4gICkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NEYXRhKGRhdGEpIHtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSB7XG4gICAgY291bnRyeTogZGF0YS5zeXMuY291bnRyeSxcbiAgICBjaXR5OiBkYXRhLm5hbWUsXG4gICAgdGVtcF9mOiB0ZW1wSGVscGVyLmNhbGNUZW1wRihkYXRhLm1haW4udGVtcCksXG4gICAgdGVtcF9mX21pbjogdGVtcEhlbHBlci5jYWxjVGVtcEYoZGF0YS5tYWluLnRlbXBfbWluKSxcbiAgICB0ZW1wX2M6IHRlbXBIZWxwZXIuY2FsY1RlbXBDKGRhdGEubWFpbi50ZW1wKSxcbiAgICB0ZW1wX2NfbWluOiB0ZW1wSGVscGVyLmNhbGNUZW1wQyhkYXRhLm1haW4udGVtcF9taW4pLFxuICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXG4gICAgd2luZDogZGF0YS53aW5kLnNwZWVkLFxuICAgIHdlYXRoZXI6IGRhdGEud2VhdGhlclswXS5tYWluLFxuICAgIHdlYXRoZXJEZXNjcmlwdGlvbjogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICB9O1xuICBcbiAgdGVtcEhlbHBlci5zZXRUZW1wQyh3ZWF0aGVyRGF0YS50ZW1wX2MpO1xuICBjb25zb2xlLmxvZyhgYyB0ZW1wIHNldCB0byAke3dlYXRoZXJEYXRhLnRlbXBfY31gKTtcbiAgdGVtcEhlbHBlci5zZXRUZW1wRih3ZWF0aGVyRGF0YS50ZW1wX2YpO1xuICBjb25zb2xlLmxvZyhgZiB0ZW1wIHNldCB0byAke3dlYXRoZXJEYXRhLnRlbXBfZn1gKTtcblxuICBjb25zb2xlLmxvZyh0ZW1wSGVscGVyLmdldFRlbXBDKCkpO1xuICBjb25zb2xlLmxvZyh0ZW1wSGVscGVyLmdldFRlbXBGKCkpO1xuICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG5cbmV4cG9ydCB7IGdldFdlYXRoZXIsIHByb2Nlc3NEYXRhIH07XG4iLCJpbXBvcnQgeyB0ZW1wSGVscGVyIH0gZnJvbSBcIi4vdGVtcEhlbHBlclwiO1xuXG5mdW5jdGlvbiBkaXNwbGF5RGF0YShkYXRhKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC13cmFwcGVyXCIpO1xuICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBjb25zdCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC13cmFwcGVyXCIpO1xuICAgIGNvbnRlbnRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLndlYXRoZXJEZXNjcmlwdGlvbjtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IGAke2RhdGEuY2l0eX0sICR7ZGF0YS5jb3VudHJ5fWA7XG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBcIik7XG4gIHRlbXAudGV4dENvbnRlbnQgPVxuICAgIHRlbXBIZWxwZXIuZ2V0Q3VycmVudFRlbXAoKSA9PT0gXCJDZWxzaXVzXCIgPyBkYXRhLnRlbXBfYyA6IGRhdGEudGVtcF9mO1xuICBjb25zdCBkZWdyZWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWdyZWVzXCIpO1xuICBpZiAoIWRlZ3JlZXMpIHtcbiAgICBjb25zdCBkZWdyZWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZGVncmVlcy5jbGFzc0xpc3QuYWRkKFwiZGVncmVlc1wiKTtcbiAgICBkZWdyZWVzLnRleHRDb250ZW50ID1cbiAgICAgIHRlbXBIZWxwZXIuZ2V0Q3VycmVudFRlbXAoKSA9PT0gXCJDZWxzaXVzXCIgPyBcIsKwQ1wiIDogXCLCsEZcIjtcbiAgICAgIHRlbXAuYXBwZW5kQ2hpbGQoZGVncmVlcyk7XG4gIH0gZWxzZSB7XG4gICAgZGVncmVlcy50ZXh0Q29udGVudCA9XG4gICAgICB0ZW1wSGVscGVyLmdldEN1cnJlbnRUZW1wKCkgPT09IFwiQ2Vsc2l1c1wiID8gXCLCsENcIiA6IFwiwrBGXCI7XG4gIH1cbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZFwiKTtcbiAgd2luZC50ZXh0Q29udGVudCA9IGBXSU5EOiAke01hdGguZmxvb3IoZGF0YS53aW5kICogMTApIC8gMTB9IG1waGA7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKTtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSFVNSURJVFk6ICR7ZGF0YS5odW1pZGl0eX0lYDtcbiAgY29uc29sZS5sb2coZGF0YSk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlEYXRhIH07XG4iLCJpbXBvcnQgeyB0ZW1wSGVscGVyIH0gZnJvbSBcIi4vdGVtcEhlbHBlclwiO1xuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnN0IGhlYWRlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItd3JhcHBlclwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBoZWFkZXJXcmFwcGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgaGVhZGVyV3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGJvdHRvbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib3R0b21XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJib3R0b20td3JhcHBlclwiKTtcblxuICBjb25zdCB0ZW1wV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wLXdyYXBwZXJcIik7XG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGVtcC5jbGFzc0xpc3QuYWRkKFwidGVtcFwiKTtcbiAgY29uc3QgZGVncmVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkZWdyZWVzLmNsYXNzTGlzdC5hZGQoXCJkZWdyZWVzXCIpO1xuICB0ZW1wLmFwcGVuZENoaWxkKGRlZ3JlZXMpO1xuICB0ZW1wV3JhcHBlci5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgYm90dG9tV3JhcHBlci5hcHBlbmRDaGlsZCh0ZW1wV3JhcHBlcik7XG5cbiAgY29uc3QgY29uZGl0aW9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbmRpdGlvbldyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNvbmRpdGlvbi13cmFwcGVyXCIpO1xuICBjb25zdCB3aW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHdpbmQuY2xhc3NMaXN0LmFkZChcIndpbmRcIik7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZChcIndpbmQtc3BlZWRcIik7XG4gIHdpbmQuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZChcImh1bWlkaXR5XCIpO1xuICBjb25kaXRpb25XcmFwcGVyLmFwcGVuZENoaWxkKHdpbmQpO1xuICBjb25kaXRpb25XcmFwcGVyLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcbiAgYm90dG9tV3JhcHBlci5hcHBlbmRDaGlsZChjb25kaXRpb25XcmFwcGVyKTtcbiAgY29uc3QgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY29udGVudC13cmFwcGVyXCIpO1xuICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXJXcmFwcGVyKTtcbiAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoYm90dG9tV3JhcHBlcik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGVudFdyYXBwZXIpO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWdyZWVTcGFuKCkge1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZChcImRlZ3JlZXNcIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZW1wSGVscGVyLmdldEN1cnJlbnRUZW1wKCkgPT09IFwiQ2Vsc2l1c1wiID8gXCLCsENcIiA6IFwiwrBGXCI7XG4gIHJldHVybiBzcGFuO1xufVxuXG5leHBvcnQgeyBjcmVhdGVDb250ZW50LCBjcmVhdGVEZWdyZWVTcGFuIH07XG4iLCJjb25zdCB0ZW1wSGVscGVyID0gKCgpID0+IHtcbiAgbGV0IGN1cnJlbnRUZW1wID0gXCJDZWxzaXVzXCI7XG4gIGxldCB0ZW1wRiA9IDA7XG4gIGxldCB0ZW1wQyA9IDA7XG4gIGNvbnN0IGdldEN1cnJlbnRUZW1wID0gKCkgPT4gY3VycmVudFRlbXA7XG4gIGNvbnN0IGdldFRlbXBDID0gKCkgPT4gdGVtcEM7XG4gIGNvbnN0IHNldFRlbXBDID0gKGZldGNoZWRUZW1wKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzZXR0aW5nIHRlbXAgYyB0bzogXCIgKyBmZXRjaGVkVGVtcCk7XG4gICAgdGVtcEMgPSBmZXRjaGVkVGVtcDtcbiAgfTtcbiAgY29uc3QgZ2V0VGVtcEYgPSAoKSA9PiB0ZW1wRjtcbiAgY29uc3Qgc2V0VGVtcEYgPSAoZmV0Y2hlZFRlbXApID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNldHRpbmcgdGVtcCBmIHRvOiBcIiArIGZldGNoZWRUZW1wKTtcbiAgICB0ZW1wRiA9IGZldGNoZWRUZW1wO1xuICB9O1xuICBjb25zdCBjaGFuZ2VUZW1wID0gKCkgPT5cbiAgICAoY3VycmVudFRlbXAgPSBjdXJyZW50VGVtcCA9PT0gXCJDZWxzaXVzXCIgPyBcIkZhaHJlbmhlaXRcIiA6IFwiQ2Vsc2l1c1wiKTtcblxuICBjb25zdCBjYWxjVGVtcCA9IChrZWx2aW5UZW1wKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRUZW1wID09PSBcIkNlbHNpdXNcIikge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3Ioa2VsdmluVGVtcCArIDI3My4xNSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCg5IC8gNSkgKiAoa2VsdmluVGVtcCAtIDI3My4xNSkgKyAzMik7XG4gICAgfVxuICB9O1xuICBjb25zdCBjYWxjVGVtcEMgPSAoa2VsdmluVGVtcCkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKGtlbHZpblRlbXAgLSAyNzMuMTUpO1xuICB9O1xuXG4gIGNvbnN0IGNhbGNUZW1wQ1RvRiA9IChjVGVtcCkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKChjVGVtcCAqIDkpIC8gNSArIDMyKTtcbiAgfTtcblxuICBjb25zdCBjYWxjVGVtcEYgPSAoa2VsdmluVGVtcCkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKCg5IC8gNSkgKiAoa2VsdmluVGVtcCAtIDI3My4xNSkgKyAzMik7XG4gIH07XG5cbiAgY29uc3QgY2FsY1RlbXBGVG9DID0gKGZUZW1wKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKChmVGVtcCAtIDMyKSAqIDUpIC8gOSk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgY2hhbmdlVGVtcCxcbiAgICBjYWxjVGVtcCxcbiAgICBjYWxjVGVtcEMsXG4gICAgY2FsY1RlbXBGLFxuICAgIGdldEN1cnJlbnRUZW1wLFxuICAgIGNhbGNUZW1wQ1RvRixcbiAgICBjYWxjVGVtcEZUb0MsXG4gICAgZ2V0VGVtcEMsXG4gICAgc2V0VGVtcEMsXG4gICAgZ2V0VGVtcEYsXG4gICAgc2V0VGVtcEYsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyB0ZW1wSGVscGVyIH07XG4iLCJjb25zdCB3ZWF0aGVyID0gKCgpID0+IHtcbiAgbGV0IHdlYXRoZXJJbmZvO1xuICBjb25zdCBzdG9yZVdlYXRoZXIgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgICB3ZWF0aGVyRGF0YS50aGVuKChyZXMpID0+IHtcbiAgICAgIHdlYXRoZXJJbmZvID0gd2VhdGhlckRhdGE7XG4gICAgICBjb25zb2xlLmxvZyh3ZWF0aGVySW5mbyk7XG4gICAgfSk7XG5cbiAgICBcbiAgfTtcbiAgY29uc3QgZ2V0V2VhdGhlckluZm8gPSAod2VhdGhlckluZm8pID0+IHdlYXRoZXJJbmZvO1xuICByZXR1cm4ge1xuICAgIHN0b3JlV2VhdGhlcixcbiAgICBnZXRXZWF0aGVySW5mbyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHdlYXRoZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2V0V2VhdGhlciwgcHJvY2Vzc0RhdGEgfSBmcm9tIFwiLi9hcGlDYWxsc1wiO1xuaW1wb3J0IHsgZGlzcGxheURhdGEgfSBmcm9tIFwiLi9kaXNwbGF5RGF0YVwiO1xuaW1wb3J0IHsgY3JlYXRlRGVncmVlU3BhbiB9IGZyb20gXCIuL21haW5Db250ZW50XCI7XG5pbXBvcnQgeyB0ZW1wSGVscGVyIH0gZnJvbSBcIi4vdGVtcEhlbHBlclwiO1xuXG5mdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IHNlYXJjaFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtd3JhcHBlclwiKTtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGgxLnRleHRDb250ZW50ID0gXCJTZWFyY2ggZm9yIGEgY2l0eSFcIjtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIlNlYXJjaFwiO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGdldFdlYXRoZXIoaW5wdXQudmFsdWUpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChwYXJzZUludChyZXMuY29kKSAhPT0gMjAwKSB0aHJvdyByZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGRpc3BsYXlEYXRhKHByb2Nlc3NEYXRhKHJlcykpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIubWVzc2FnZSA9PT0gXCJjaXR5IG5vdCBmb3VuZFwiKSB7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9KTtcbiAgY29uc3QgdG9nZ2xlRGVncmVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRvZ2dsZURlZ3JlZXMudGV4dENvbnRlbnQgPSBcIsKwQyAvIMKwRlwiO1xuICB0b2dnbGVEZWdyZWVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0ZW1wSGVscGVyLmNoYW5nZVRlbXAoKTtcbiAgICBjb25zb2xlLmxvZyh0ZW1wSGVscGVyLmdldEN1cnJlbnRUZW1wKCkpO1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBcIik7XG4gICAgaWYgKHRlbXBIZWxwZXIuZ2V0Q3VycmVudFRlbXAoKSA9PSBcIkNlbHNpdXNcIikge1xuICAgICAgdGVtcC50ZXh0Q29udGVudCA9IHRlbXBIZWxwZXIuZ2V0VGVtcEMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcC50ZXh0Q29udGVudCA9IHRlbXBIZWxwZXIuZ2V0VGVtcEYoKTtcbiAgICB9XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVncmVlc1wiKTtcbiAgICBpZiAoIXNwYW4pIHtcbiAgICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVEZWdyZWVTcGFuKCk7XG4gICAgICB0ZW1wLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgfSk7XG5cbiAgc2VhcmNoV3JhcHBlci5hcHBlbmRDaGlsZChoMSk7XG4gIHNlYXJjaFdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBjb25zdCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLXdyYXBwZXJcIik7XG4gIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZCh0b2dnbGVEZWdyZWVzKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzZWFyY2hXcmFwcGVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChidXR0b25XcmFwcGVyKTtcbiAgcmV0dXJuIGZvcm07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUZvcm0gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==