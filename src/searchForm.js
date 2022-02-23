import { getWeather, processData } from "./apiCalls";
import { displayData } from "./displayData";
import { createDegreeSpan } from "./mainContent";
import { tempHelper } from "./tempHelper";

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
    getWeather(input.value)
      .then((res) => {
        if (parseInt(res.cod) !== 200) throw res;
        console.log(res);
        displayData(processData(res));
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
    tempHelper.changeTemp();
    console.log(tempHelper.getCurrentTemp());
    const temp = document.querySelector(".temp");
    if (tempHelper.getCurrentTemp() == "Celsius") {
      temp.textContent = tempHelper.getTempC();
    } else {
      temp.textContent = tempHelper.getTempF();
    }
    const span = document.querySelector(".degrees");
    if (!span) {
      const span = createDegreeSpan();
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

export { createForm };
