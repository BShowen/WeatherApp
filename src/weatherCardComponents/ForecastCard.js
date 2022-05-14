import { HtmlElement } from "../HtmlElement";
import weather from "../weather.js";
import { loadImage } from "../loadImage";

export function ForecastCard(weatherData = {}) {
  // The weather image.
  let image;

  // Process the weatherData upon instantiation
  const parsedWeatherData = (function () {
    const { max, min } = weatherData.temp;
    const { humidity, clouds, dt } = weatherData;
    const formatter = new Intl.DateTimeFormat([], { weekday: "short" });
    const dateTime = formatter.format(
      new Date(Number.parseInt(dt.toString() + "000"))
    );
    const { description, icon } = weatherData.weather[0];
    return {
      dateTime,
      description,
      max,
      min,
      humidity,
      clouds,
      icon,
    };
  })();

  const container = new HtmlElement({
    type: "div",
    classList: [
      "daily-weather-card",
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
  const load = async function () {
    const url = weather.getIconSrc(parsedWeatherData.icon);
    try {
      image = await loadImage(url);
      return true;
    } catch (error) {
      /**
       * Return true. We will consume the error returned by the API and just
       * not show an image. No big deal.
       */
      return true;
    }
  };

  const render = function (parentNode) {
    container.appendChild(image);

    container.appendChild(
      new HtmlElement({
        type: "p",
        innerText: parsedWeatherData.dateTime,
      })
    );
    container.appendChild(
      new HtmlElement({
        type: "p",
        innerText: parsedWeatherData.description,
      })
    );
    container.appendChild(
      new HtmlElement({
        type: "p",
        innerText: `High: ${parsedWeatherData.max}`,
      })
    );
    container.appendChild(
      new HtmlElement({
        type: "p",
        innerText: `Low: ${parsedWeatherData.min}`,
      })
    );
    container.appendChild(
      new HtmlElement({
        type: "p",
        innerText: `Humidity: ${parsedWeatherData.humidity}`,
      })
    );
    container.appendChild(
      new HtmlElement({
        type: "p",
        innerText: `Clouds: ${parsedWeatherData.clouds}%`,
      })
    );

    parentNode.appendChild(container);
  };

  return { render, load };
}
