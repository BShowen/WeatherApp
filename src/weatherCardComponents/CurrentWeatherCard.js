import { HtmlElement } from "../HtmlElement";
import weather from "../weather.js";
import { loadImage } from "../loadImage";

export function CurrentWeatherCard(weatherData = {}, rootNode) {
  // Process the weatherData upon instantiation
  const parsedWeatherData = (function () {
    const { temp, feels_like, humidity } = weatherData.current;
    const { description, main, icon } = weatherData.current.weather[0];
    return {
      temp,
      feels_like,
      humidity,
      description,
      main,
      icon,
    };
  })();

  const _skeletonRow = new HtmlElement({
    type: "div",
    classList: ["row"],
  });

  const _skeletonColumn = new HtmlElement({
    type: "div",
    classList: ["twelve", "columns"],
  });

  const _container = new HtmlElement({
    type: "div",
    classList: [
      "currentWeatherCard",
      "flex",
      "flex-column",
      "flex-justify-center",
      "flex-align-center",
    ],
  });

  /**
   * Try to load an image from OpenWeather API. If this process fails, we will
   * consume the error and continue with processing the user request. We can
   * silently consume this error because we will simply not display an image if
   * there is an error. Why log or stop execution simply because we can display
   * an image? Rather, we continue with our process and forget about showing an
   * image to the user.
   */
  const _appendImage = async function () {
    const url = weather.getIconSrc(parsedWeatherData.icon, { large: true });
    try {
      const image = await loadImage(url);
      _container.appendChild(image);
      return _container;
    } catch (error) {
      /**
       * Simply return the container. The image will not have been appended to
       * the _container. The image will not exist and the app will continue to
       * function.
       */
      return _container;
    }
  };

  const load = async function () {
    // Try to load the image from OpenWeather API.
    const returnedContainer = await _appendImage();

    returnedContainer.appendChild(
      new HtmlElement({
        type: "h4",
        innerText: parsedWeatherData.description,
      })
    );

    returnedContainer.appendChild(
      new HtmlElement({
        type: "h5",
        innerText: `Temp: ${Math.round(parsedWeatherData.temp)}`,
      })
    );

    returnedContainer.appendChild(
      new HtmlElement({
        type: "h5",
        innerText: `Feels like: ${Math.round(parsedWeatherData.feels_like)}`,
      })
    );

    returnedContainer.appendChild(
      new HtmlElement({
        type: "h5",
        innerText: `Humidity: ${Math.round(parsedWeatherData.humidity)}`,
      })
    );

    return true;
  };

  const render = async function () {
    _skeletonRow.appendChild(_skeletonColumn);
    _skeletonColumn.appendChild(_container);

    rootNode.appendChild(_skeletonRow);
  };

  return { container: _skeletonRow, render, load };
}
