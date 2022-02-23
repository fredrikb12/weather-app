import { tempHelper } from "./tempHelper";

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
  span.textContent = tempHelper.getCurrentTemp() === "Celsius" ? "°C" : "°F";
  return span;
}

export { createContent, createDegreeSpan };
