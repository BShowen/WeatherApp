import "./style.css";
import { HtmlElement } from "../HelperFunctions/HtmlElement";
import { loadImage } from "../HelperFunctions/loadImage";
import { currentWeatherInfo } from "./currentWeatherInfo";
import weather from "../weather.js";

export function CurrentWeatherCard(weatherData = {}, rootNode, cityName) {
  // Process the weatherData upon instantiation
  const parsedWeatherData = (function () {
    let { temp, dt, wind_speed, humidity } = weatherData.current;
    let { description, icon } = weatherData.current.weather[0];
    let { pop } = weatherData.hourly[0];
    pop = Math.round(pop * 100);
    wind_speed = Math.round(wind_speed);
    temp = Math.round(temp);
    dt *= 1000;
    description = description.charAt(0).toUpperCase() + description.slice(1);

    return {
      temp,
      description,
      dt,
      icon,
      currentWeatherInfo: {
        wind_speed,
        humidity,
        pop,
      },
    };
  })();

  let _weatherIcon;

  const _contentContainer = new HtmlElement({
    type: "div",
    classList: ["current-weather-card"],
  });

  const _positionContainer = new HtmlElement({
    type: "div",
    id: "current-weather-card-container",
  });

  const _temp = (function () {
    const container = new HtmlElement({
      type: "div",
      classList: [
        "flex",
        "flex-row",
        "flex-justify-center",
        "flex-align-center",
      ],
    });

    const _text = new HtmlElement({
      type: "p",
      classList: ["m-0"],
      id: "main-temp",
      innerText: `${parsedWeatherData.temp}°`,
    });

    container.appendChild(_text);
    return container;
  })();

  const _description = (function () {
    const container = new HtmlElement({
      type: "div",
      id: "current-weather-card-description-container",
      classList: [
        "flex",
        "flex-row",
        "flex-justify-center",
        "flex-align-center",
      ],
    });

    const _text = new HtmlElement({
      type: "p",
      classList: ["m-0"],
      innerText: parsedWeatherData.description,
    });

    container.appendChild(_text);

    return container;
  })();

  const _dateString = (function () {
    const date = new Date(parsedWeatherData.dt);
    const formatter = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    const container = new HtmlElement({
      type: "div",
      id: "date-string",
    });

    const content = new HtmlElement({
      type: "p",
      innerText: formatter.format(date),
    });

    container.appendChild(content);

    return container;
  })();

  const _currentWeatherData = currentWeatherInfo.call(
    this,
    parsedWeatherData.currentWeatherInfo
  );

  const _setImage = function (image) {
    const container = new HtmlElement({
      type: "div",
      id: "current-weather-image-container",
    });
    container.appendChild(image);
    _weatherIcon = container;
  };

  /**
   * Try to load an image from OpenWeather API. If this process fails, we will
   * consume the error and continue with processing the user request. We can
   * silently consume this error because we will simply not display an image if
   * there is an error. Why log or stop execution simply because we can display
   * an image? Rather, we continue with our process and forget about showing an
   * image to the user.
   */
  const load = async function () {
    const url = weather.getIconSrc(parsedWeatherData.icon, { large: true });
    try {
      const imageElement = await loadImage(url);
      _setImage(imageElement);
      return true;
    } catch (error) {
      console.log(error);
      /**
       * Return true. We will consume the error returned by the API and just
       * not show an image. No big deal.
       */
      return true;
    }
  };

  const render = function () {
    _positionContainer.appendChild(_contentContainer);
    _contentContainer.appendChild(_weatherIcon);
    _contentContainer.appendChild(_temp);
    _contentContainer.appendChild(_description);
    _contentContainer.appendChild(_dateString);
    _contentContainer.appendChild(_currentWeatherData);

    rootNode.appendChild(_positionContainer);
  };

  const remove = function () {
    _positionContainer.remove();
  };

  return { render, remove, load };
}
