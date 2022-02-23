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
/*!****************************!*\
  !*** ./src/displayData.js ***!
  \****************************/
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheURhdGEuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVxQjs7Ozs7OztVQ3ZEdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixVQUFVLElBQUksYUFBYTtBQUNyRDtBQUNBO0FBQ0EsSUFBSSxrRUFBeUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sa0VBQXlCO0FBQy9CO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsTUFBTSxrRUFBeUI7QUFDL0I7QUFDQTtBQUNBLDhCQUE4QixpQ0FBaUM7QUFDL0Q7QUFDQSxzQ0FBc0MsY0FBYztBQUNwRDtBQUNBOztBQUV1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RlbXBIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5RGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0ZW1wSGVscGVyID0gKCgpID0+IHtcbiAgbGV0IGN1cnJlbnRUZW1wID0gXCJDZWxzaXVzXCI7XG4gIGxldCB0ZW1wRiA9IDA7XG4gIGxldCB0ZW1wQyA9IDA7XG4gIGNvbnN0IGdldEN1cnJlbnRUZW1wID0gKCkgPT4gY3VycmVudFRlbXA7XG4gIGNvbnN0IGdldFRlbXBDID0gKCkgPT4gdGVtcEM7XG4gIGNvbnN0IHNldFRlbXBDID0gKGZldGNoZWRUZW1wKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzZXR0aW5nIHRlbXAgYyB0bzogXCIgKyBmZXRjaGVkVGVtcCk7XG4gICAgdGVtcEMgPSBmZXRjaGVkVGVtcDtcbiAgfTtcbiAgY29uc3QgZ2V0VGVtcEYgPSAoKSA9PiB0ZW1wRjtcbiAgY29uc3Qgc2V0VGVtcEYgPSAoZmV0Y2hlZFRlbXApID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNldHRpbmcgdGVtcCBmIHRvOiBcIiArIGZldGNoZWRUZW1wKTtcbiAgICB0ZW1wRiA9IGZldGNoZWRUZW1wO1xuICB9O1xuICBjb25zdCBjaGFuZ2VUZW1wID0gKCkgPT5cbiAgICAoY3VycmVudFRlbXAgPSBjdXJyZW50VGVtcCA9PT0gXCJDZWxzaXVzXCIgPyBcIkZhaHJlbmhlaXRcIiA6IFwiQ2Vsc2l1c1wiKTtcblxuICBjb25zdCBjYWxjVGVtcCA9IChrZWx2aW5UZW1wKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRUZW1wID09PSBcIkNlbHNpdXNcIikge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3Ioa2VsdmluVGVtcCArIDI3My4xNSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCg5IC8gNSkgKiAoa2VsdmluVGVtcCAtIDI3My4xNSkgKyAzMik7XG4gICAgfVxuICB9O1xuICBjb25zdCBjYWxjVGVtcEMgPSAoa2VsdmluVGVtcCkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKGtlbHZpblRlbXAgLSAyNzMuMTUpO1xuICB9O1xuXG4gIGNvbnN0IGNhbGNUZW1wQ1RvRiA9IChjVGVtcCkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKChjVGVtcCAqIDkpIC8gNSArIDMyKTtcbiAgfTtcblxuICBjb25zdCBjYWxjVGVtcEYgPSAoa2VsdmluVGVtcCkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKCg5IC8gNSkgKiAoa2VsdmluVGVtcCAtIDI3My4xNSkgKyAzMik7XG4gIH07XG5cbiAgY29uc3QgY2FsY1RlbXBGVG9DID0gKGZUZW1wKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKChmVGVtcCAtIDMyKSAqIDUpIC8gOSk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgY2hhbmdlVGVtcCxcbiAgICBjYWxjVGVtcCxcbiAgICBjYWxjVGVtcEMsXG4gICAgY2FsY1RlbXBGLFxuICAgIGdldEN1cnJlbnRUZW1wLFxuICAgIGNhbGNUZW1wQ1RvRixcbiAgICBjYWxjVGVtcEZUb0MsXG4gICAgZ2V0VGVtcEMsXG4gICAgc2V0VGVtcEMsXG4gICAgZ2V0VGVtcEYsXG4gICAgc2V0VGVtcEYsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyB0ZW1wSGVscGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRlbXBIZWxwZXIgfSBmcm9tIFwiLi90ZW1wSGVscGVyXCI7XG5cbmZ1bmN0aW9uIGRpc3BsYXlEYXRhKGRhdGEpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLXdyYXBwZXJcIik7XG4gICAgd3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LXdyYXBwZXJcIik7XG4gICAgY29udGVudFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEud2VhdGhlckRlc2NyaXB0aW9uO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jaXR5fSwgJHtkYXRhLmNvdW50cnl9YDtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcFwiKTtcbiAgdGVtcC50ZXh0Q29udGVudCA9XG4gICAgdGVtcEhlbHBlci5nZXRDdXJyZW50VGVtcCgpID09PSBcIkNlbHNpdXNcIiA/IGRhdGEudGVtcF9jIDogZGF0YS50ZW1wX2Y7XG4gIGNvbnN0IGRlZ3JlZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlZ3JlZXNcIik7XG4gIGlmICghZGVncmVlcykge1xuICAgIGNvbnN0IGRlZ3JlZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBkZWdyZWVzLmNsYXNzTGlzdC5hZGQoXCJkZWdyZWVzXCIpO1xuICAgIGRlZ3JlZXMudGV4dENvbnRlbnQgPVxuICAgICAgdGVtcEhlbHBlci5nZXRDdXJyZW50VGVtcCgpID09PSBcIkNlbHNpdXNcIiA/IFwiwrBDXCIgOiBcIsKwRlwiO1xuICAgICAgdGVtcC5hcHBlbmRDaGlsZChkZWdyZWVzKTtcbiAgfSBlbHNlIHtcbiAgICBkZWdyZWVzLnRleHRDb250ZW50ID1cbiAgICAgIHRlbXBIZWxwZXIuZ2V0Q3VycmVudFRlbXAoKSA9PT0gXCJDZWxzaXVzXCIgPyBcIsKwQ1wiIDogXCLCsEZcIjtcbiAgfVxuICBjb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kXCIpO1xuICB3aW5kLnRleHRDb250ZW50ID0gYFdJTkQ6ICR7TWF0aC5mbG9vcihkYXRhLndpbmQgKiAxMCkgLyAxMH0gbXBoYDtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5XCIpO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIVU1JRElUWTogJHtkYXRhLmh1bWlkaXR5fSVgO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbn1cblxuZXhwb3J0IHsgZGlzcGxheURhdGEgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==