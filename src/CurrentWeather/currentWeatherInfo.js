import { HtmlElement } from "../HelperFunctions/HtmlElement";
import "./currentWeatherInfo.css";

export function currentWeatherInfo(parsedWeatherData) {
  const _positionContainer = new HtmlElement({
    type: "div",
    id: "current-weather-info-container",
  });

  const _contentContainer = new HtmlElement({
    type: "div",
    id: "current-weather-info-content-container",
  });

  const _windSpeed = (function () {
    const container = new HtmlElement({
      type: "div",
      id: "wind-speed-container",
    });

    const icon = new HtmlElement({
      type: "i",
      classList: ["bi", "bi-wind"],
    });

    const speed = new HtmlElement({
      type: "div",
      innerText: parsedWeatherData.wind_speed.toString() + " mph",
    });

    const text = new HtmlElement({
      type: "p",
      innerText: "Wind",
    });

    container.appendChild(icon);
    container.appendChild(speed);
    container.appendChild(text);

    return container;
  })();

  const _humidity = (function () {
    const container = new HtmlElement({
      type: "div",
      id: "humidity-container",
    });

    const icon = new HtmlElement({
      type: "i",
      classList: ["bi", "bi-droplet"],
    });

    const humidity = new HtmlElement({
      type: "div",
      innerText: parsedWeatherData.humidity.toString() + "%",
    });

    const text = new HtmlElement({
      type: "p",
      innerText: "Humidity",
    });

    container.appendChild(icon);
    container.appendChild(humidity);
    container.appendChild(text);

    return container;
  })();

  const _chanceOfRain = (function () {
    const container = new HtmlElement({
      type: "div",
      id: "chance-of-rain-container",
    });

    const icon = new HtmlElement({
      type: "i",
      classList: ["bi", "bi-water"],
    });

    const rain = new HtmlElement({
      type: "div",
      innerText: parsedWeatherData.pop.toString() + "%",
    });

    const text = new HtmlElement({
      type: "p",
      innerText: "Chance of rain",
    });

    container.appendChild(icon);
    container.appendChild(rain);
    container.appendChild(text);

    return container;
  })();

  _positionContainer.appendChild(_contentContainer);
  _contentContainer.appendChild(_windSpeed);
  _contentContainer.appendChild(_humidity);
  _contentContainer.appendChild(_chanceOfRain);

  return _positionContainer;
}
