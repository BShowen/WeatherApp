/**
 * Import the required CSS files for Skeleton to work.
 * These are CSS files created for Skeleton. I did not create these.
 */
import "./Skeleton/css/normalize.css";
import "./Skeleton/css/skeleton.css";

// The module for retrieving weather data.
import weather from "./weather.js";

import { Row, Column } from "./skeleton.js";

// The root node where all children should be appended.
const root = document.querySelector("#root");

weather.getWeather("Orlando").then((data) => {
  console.log(data);
});
