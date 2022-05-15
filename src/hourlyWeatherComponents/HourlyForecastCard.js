import { HtmlElement } from "../HtmlElement";
import weather from "../weather.js";
import { loadImage } from "../loadImage";

export function HourlyForecastCard(weatherData) {
  let image;

  const _parsedWeatherData = (function () {
    let { temp, dt, pop } = weatherData;
    const { icon } = weatherData.weather[0];
    const dateTime = new Date(Number.parseInt(dt.toString() + "000"));
    const time = new Intl.DateTimeFormat("en-US", {
      timeStyle: "short",
    }).format(dateTime);
    pop = Math.floor(pop * 100);
    temp = Math.round(temp);
    return {
      temp,
      icon,
      time,
      pop,
    };
  })();

  const _container = new HtmlElement({
    type: "div",
    classList: ["hourly-forecast-card"],
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
    const url = weather.getIconSrc(_parsedWeatherData.icon);
    try {
      image = await loadImage(url);
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

  const render = function (parentNode) {
    _container.appendChild(
      new HtmlElement({
        type: "p",
        innerText: `${_parsedWeatherData.time}`,
      })
    );
    _container.appendChild(image);
    // Show the rain percentage if it is over 20%
    if (_parsedWeatherData.pop > 20) {
      _container.appendChild(
        new HtmlElement({
          type: "p",
          innerText: `${_parsedWeatherData.pop}%`,
        })
      );
    }
    _container.appendChild(
      new HtmlElement({
        type: "p",
        innerText: `${_parsedWeatherData.temp}°`,
      })
    );
    parentNode.appendChild(_container);
  };

  return { render, load };
}
