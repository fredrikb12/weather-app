import { tempHelper } from "./tempHelper";

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
    tempHelper.getCurrentTemp() === "Celsius" ? data.temp_c : data.temp_f;
  const degrees = document.querySelector(".degrees");
  if (!degrees) {
    const degrees = document.createElement("span");
    degrees.classList.add("degrees");
    degrees.textContent =
      tempHelper.getCurrentTemp() === "Celsius" ? "°C" : "°F";
      temp.appendChild(degrees);
  } else {
    degrees.textContent =
      tempHelper.getCurrentTemp() === "Celsius" ? "°C" : "°F";
  }
  const wind = document.querySelector(".wind");
  wind.textContent = `WIND: ${Math.floor(data.wind * 10) / 10} mph`;
  const humidity = document.querySelector(".humidity");
  humidity.textContent = `HUMIDITY: ${data.humidity}%`;
  console.log(data);
}

export { displayData };
