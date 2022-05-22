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

  const _currentWeatherCardContainer = new HtmlElement({
    type: "div",
    id: "current-weather-card-container",
  });

  const _currentWeatherInformationContainer = new HtmlElement({
    type: "div",
    id: "current-weather-information-container",
  });

  const _currentWeatherCard = new HtmlElement({
    type: "div",
    id: "current-weather-card",
  });

  // This is the container that holds the image.
  let _currentWeatherImageContainer;
  // This method sets the _currentWeatherImageContainer variable.
  const _setImage = function (image) {
    const _imageContainer = new HtmlElement({
      type: "div",
      id: "current-weather-image-container",
    });
    _imageContainer.appendChild(image);
    _currentWeatherImageContainer = _imageContainer;
  };

  const _weatherInfoContainer = new HtmlElement({
    type: "div",
    id: "weather-info-container",
  });

  const _weatherTempContainer = (function () {
    const container = new HtmlElement({
      type: "div",
      id: "weather-temp-container",
    });

    const _weatherTemp = new HtmlElement({
      type: "p",
      classList: ["m-0"],
      id: "weather-temp",
      innerText: `${parsedWeatherData.temp}°`,
    });

    container.appendChild(_weatherTemp);
    return container;
  })();

  const _currentWeatherCardDescriptionContainer = (function () {
    const container = new HtmlElement({
      type: "div",
      id: "current-weather-card-description-container",
    });

    const _text = new HtmlElement({
      type: "p",
      id: "weather-description-text",
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

  // This is the bottom component that holds the wind, humidity, and rain %.
  const _currentWeatherData = currentWeatherInfo.call(
    this,
    parsedWeatherData.currentWeatherInfo
  );

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
    _currentWeatherCardContainer.appendChild(_currentWeatherCard);

    _currentWeatherCard.appendChild(_currentWeatherInformationContainer);
    _currentWeatherInformationContainer.appendChild(
      _currentWeatherImageContainer
    );
    _currentWeatherInformationContainer.appendChild(_weatherInfoContainer);
    _weatherInfoContainer.appendChild(_weatherTempContainer);
    _weatherInfoContainer.appendChild(_currentWeatherCardDescriptionContainer);
    _currentWeatherCardDescriptionContainer.appendChild(_dateString);

    _currentWeatherCard.appendChild(_currentWeatherData);
    rootNode.appendChild(_currentWeatherCardContainer);
  };

  const remove = function () {
    _currentWeatherCardContainer.remove();
  };

  /**
   * This function sets attributes on certain containers in order to make those
   * containers render differently.
   */
  const toCompactView = function () {
    [
      _currentWeatherCardContainer,
      _currentWeatherInformationContainer,
      _currentWeatherImageContainer,
      _weatherInfoContainer,
    ].map((element) => element.classList.toggle("forecast-active"));

    /**
     * Do the same thing as in the map() above. However, we dont have direct
     * access to the element that needs to be styled. But we have direct access
     * to the parent element. We access the parent element, then get the child
     * element, then add the classList to it.
     */
    [_weatherInfoContainer, _currentWeatherCardDescriptionContainer].map(
      (element) => {
        element.firstChild.toggleClass("forecast-active");
      }
    );
  };

  return { render, remove, load, toCompactView };
}
