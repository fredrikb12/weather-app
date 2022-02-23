import "./styles.css";
import { getWeather, processData } from "./apiCalls";
import { weather } from "./weatherInfo";
import { createForm } from "./searchForm";
import { createContent } from "./mainContent";

/*getWeather("london")
  .then((res) => {
    if (parseInt(res.cod) !== 200) throw res;
    console.log(processData(res));
  })
  .catch((err) => {
    if (err.message === "city not found") {
      console.log("city not found, please try again.");
    }
    console.log(err);
  });*/

document.body.appendChild(createForm());
document.body.appendChild(createContent());
