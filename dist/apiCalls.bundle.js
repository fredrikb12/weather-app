/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpQ2FsbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7O0FDdkR0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFa0I7Ozs7Ozs7VUNqQm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ053QztBQUNFOztBQUUxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsS0FBSyxTQUFTLFFBQVE7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkRBQW9CO0FBQ2hDLGdCQUFnQiw2REFBb0I7QUFDcEMsWUFBWSw2REFBb0I7QUFDaEMsZ0JBQWdCLDZEQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDREQUFtQjtBQUNyQiwrQkFBK0IsbUJBQW1CO0FBQ2xELEVBQUUsNERBQW1CO0FBQ3JCLCtCQUErQixtQkFBbUI7O0FBRWxELGNBQWMsNERBQW1CO0FBQ2pDLGNBQWMsNERBQW1CO0FBQ2pDO0FBQ0E7O0FBRW1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdGVtcEhlbHBlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVySW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaUNhbGxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRlbXBIZWxwZXIgPSAoKCkgPT4ge1xuICBsZXQgY3VycmVudFRlbXAgPSBcIkNlbHNpdXNcIjtcbiAgbGV0IHRlbXBGID0gMDtcbiAgbGV0IHRlbXBDID0gMDtcbiAgY29uc3QgZ2V0Q3VycmVudFRlbXAgPSAoKSA9PiBjdXJyZW50VGVtcDtcbiAgY29uc3QgZ2V0VGVtcEMgPSAoKSA9PiB0ZW1wQztcbiAgY29uc3Qgc2V0VGVtcEMgPSAoZmV0Y2hlZFRlbXApID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNldHRpbmcgdGVtcCBjIHRvOiBcIiArIGZldGNoZWRUZW1wKTtcbiAgICB0ZW1wQyA9IGZldGNoZWRUZW1wO1xuICB9O1xuICBjb25zdCBnZXRUZW1wRiA9ICgpID0+IHRlbXBGO1xuICBjb25zdCBzZXRUZW1wRiA9IChmZXRjaGVkVGVtcCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyB0ZW1wIGYgdG86IFwiICsgZmV0Y2hlZFRlbXApO1xuICAgIHRlbXBGID0gZmV0Y2hlZFRlbXA7XG4gIH07XG4gIGNvbnN0IGNoYW5nZVRlbXAgPSAoKSA9PlxuICAgIChjdXJyZW50VGVtcCA9IGN1cnJlbnRUZW1wID09PSBcIkNlbHNpdXNcIiA/IFwiRmFocmVuaGVpdFwiIDogXCJDZWxzaXVzXCIpO1xuXG4gIGNvbnN0IGNhbGNUZW1wID0gKGtlbHZpblRlbXApID0+IHtcbiAgICBpZiAoY3VycmVudFRlbXAgPT09IFwiQ2Vsc2l1c1wiKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihrZWx2aW5UZW1wICsgMjczLjE1KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDkgLyA1KSAqIChrZWx2aW5UZW1wIC0gMjczLjE1KSArIDMyKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNhbGNUZW1wQyA9IChrZWx2aW5UZW1wKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3Ioa2VsdmluVGVtcCAtIDI3My4xNSk7XG4gIH07XG5cbiAgY29uc3QgY2FsY1RlbXBDVG9GID0gKGNUZW1wKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKGNUZW1wICogOSkgLyA1ICsgMzIpO1xuICB9O1xuXG4gIGNvbnN0IGNhbGNUZW1wRiA9IChrZWx2aW5UZW1wKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKDkgLyA1KSAqIChrZWx2aW5UZW1wIC0gMjczLjE1KSArIDMyKTtcbiAgfTtcblxuICBjb25zdCBjYWxjVGVtcEZUb0MgPSAoZlRlbXApID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoKGZUZW1wIC0gMzIpICogNSkgLyA5KTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBjaGFuZ2VUZW1wLFxuICAgIGNhbGNUZW1wLFxuICAgIGNhbGNUZW1wQyxcbiAgICBjYWxjVGVtcEYsXG4gICAgZ2V0Q3VycmVudFRlbXAsXG4gICAgY2FsY1RlbXBDVG9GLFxuICAgIGNhbGNUZW1wRlRvQyxcbiAgICBnZXRUZW1wQyxcbiAgICBzZXRUZW1wQyxcbiAgICBnZXRUZW1wRixcbiAgICBzZXRUZW1wRixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRlbXBIZWxwZXIgfTtcbiIsImNvbnN0IHdlYXRoZXIgPSAoKCkgPT4ge1xuICBsZXQgd2VhdGhlckluZm87XG4gIGNvbnN0IHN0b3JlV2VhdGhlciA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICAgIHdlYXRoZXJEYXRhLnRoZW4oKHJlcykgPT4ge1xuICAgICAgd2VhdGhlckluZm8gPSB3ZWF0aGVyRGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJJbmZvKTtcbiAgICB9KTtcblxuICAgIFxuICB9O1xuICBjb25zdCBnZXRXZWF0aGVySW5mbyA9ICh3ZWF0aGVySW5mbykgPT4gd2VhdGhlckluZm87XG4gIHJldHVybiB7XG4gICAgc3RvcmVXZWF0aGVyLFxuICAgIGdldFdlYXRoZXJJbmZvLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgd2VhdGhlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB3ZWF0aGVyIH0gZnJvbSBcIi4vd2VhdGhlckluZm9cIjtcbmltcG9ydCB7IHRlbXBIZWxwZXIgfSBmcm9tIFwiLi90ZW1wSGVscGVyXCI7XG5cbmNvbnN0IEFQSV9LRVkgPSBcIjIyNWMwMmI5MTQ5ZThlN2M5MDE0OWVmNDMxYjA3MzUzXCI7XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xuICBpZiAodHlwZW9mIGNpdHkgIT09IFwic3RyaW5nXCIpIHJldHVybjtcbiAgcmV0dXJuIGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtBUElfS0VZfWAsXG4gICAge1xuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgfVxuICApLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhKSB7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0ge1xuICAgIGNvdW50cnk6IGRhdGEuc3lzLmNvdW50cnksXG4gICAgY2l0eTogZGF0YS5uYW1lLFxuICAgIHRlbXBfZjogdGVtcEhlbHBlci5jYWxjVGVtcEYoZGF0YS5tYWluLnRlbXApLFxuICAgIHRlbXBfZl9taW46IHRlbXBIZWxwZXIuY2FsY1RlbXBGKGRhdGEubWFpbi50ZW1wX21pbiksXG4gICAgdGVtcF9jOiB0ZW1wSGVscGVyLmNhbGNUZW1wQyhkYXRhLm1haW4udGVtcCksXG4gICAgdGVtcF9jX21pbjogdGVtcEhlbHBlci5jYWxjVGVtcEMoZGF0YS5tYWluLnRlbXBfbWluKSxcbiAgICBodW1pZGl0eTogZGF0YS5tYWluLmh1bWlkaXR5LFxuICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcbiAgICB3ZWF0aGVyOiBkYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb246IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgfTtcbiAgXG4gIHRlbXBIZWxwZXIuc2V0VGVtcEMod2VhdGhlckRhdGEudGVtcF9jKTtcbiAgY29uc29sZS5sb2coYGMgdGVtcCBzZXQgdG8gJHt3ZWF0aGVyRGF0YS50ZW1wX2N9YCk7XG4gIHRlbXBIZWxwZXIuc2V0VGVtcEYod2VhdGhlckRhdGEudGVtcF9mKTtcbiAgY29uc29sZS5sb2coYGYgdGVtcCBzZXQgdG8gJHt3ZWF0aGVyRGF0YS50ZW1wX2Z9YCk7XG5cbiAgY29uc29sZS5sb2codGVtcEhlbHBlci5nZXRUZW1wQygpKTtcbiAgY29uc29sZS5sb2codGVtcEhlbHBlci5nZXRUZW1wRigpKTtcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyLCBwcm9jZXNzRGF0YSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9