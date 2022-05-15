import { HtmlElement } from "../HtmlElement";
import weather from "../weather.js";
import { loadImage } from "../loadImage";

export function ForecastCard(weatherData = {}) {
  // The weather image.
  let image;

  // Process the weatherData upon instantiation
  const parsedWeatherData = (function () {
    const { max, min } = weatherData.temp;
    const { dt, pop } = weatherData;
    const formatter = new Intl.DateTimeFormat([], { weekday: "short" });
    const dateTime = formatter.format(
      new Date(Number.parseInt(dt.toString() + "000"))
    );
    const { icon } = weatherData.weather[0];
    return {
      dateTime,
      max,
      min,
      pop,
      icon,
    };
  })();

  const container = new HtmlElement({
    type: "div",
    classList: ["forecast-card", "flex", "flex-row", "flex-align-center"],
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
    container.appendChild(
      new HtmlElement({
        type: "h5",
        innerText: parsedWeatherData.dateTime,
      })
    );
    container.appendChild(image);
    container.appendChild(
      new HtmlElement({
        typ: "p",
        innerText: `${Math.floor(parsedWeatherData.pop * 100)}% rain`,
      })
    );
    container.appendChild(
      new HtmlElement({
        type: "p",
        innerText: `L: ${Math.round(parsedWeatherData.min)}°`,
      })
    );
    container.appendChild(
      new HtmlElement({
        type: "p",
        innerText: `H: ${Math.round(parsedWeatherData.max)}°`,
      })
    );

    parentNode.appendChild(container);
  };

  return { render, load };
}
