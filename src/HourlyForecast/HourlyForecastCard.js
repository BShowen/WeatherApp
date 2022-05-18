import { HtmlElement } from "../HelperFunctions/HtmlElement";
import weather from "../weather.js";
import { loadImage } from "../HelperFunctions/loadImage";
import { tempToColor } from "../HelperFunctions/tempToColor.js";

export function HourlyForecastCard(weatherData) {
  let image;

  const _parsedWeatherData = (function () {
    let { temp, dt, pop } = weatherData;
    const { icon } = weatherData.weather[0];
    const dateTime = new Date(Number.parseInt(dt * 1000));
    const time = new Intl.DateTimeFormat("en-US", {
      timeStyle: "short",
    }).format(dateTime);
    pop = Math.floor(pop * 100);
    temp = Math.round(temp);
    return {
      dateTime,
      temp,
      icon,
      time,
      pop,
    };
  })();

  const _container = new HtmlElement({
    type: "div",
    classList: ["hourly-forecast-card"],
    id: determineIfNow(),
  });

  /**
   * This function is best described by example. This function compares the
   * forecasted time and the current time. If the forecasted time falls within
   * this current hour then the function returns "now", otherwise the function
   * returns an empty string.
   */
  function determineIfNow() {
    const currentDateTime = new Date();
    const forecastDateTime = new Date(_parsedWeatherData.dateTime);

    const isSameDay = (function () {
      const dateFormatter = new Intl.DateTimeFormat("en-US", {
        dateStyle: "short",
      });
      const currentDate = dateFormatter.format(currentDateTime);
      const forecastDate = dateFormatter.format(forecastDateTime);
      return currentDate === forecastDate;
    })();

    const hours = (function () {
      const timeFormatter = new Intl.DateTimeFormat("en-US", {
        minute: "numeric",
      });

      let areTheSame = (function () {
        return currentDateTime.getHours() == forecastDateTime.getHours();
      })();

      let canRoundUp = (function () {
        return Number.parseInt(timeFormatter.format(currentDateTime)) > 30;
      })();

      /**
       * If current hour is 1 hour behind forecast time, return true. Otherwise
       * return false
       */
      let oneHourDelta = (function () {
        const currentHour = Number.parseInt(currentDateTime.getHours()) + 1;
        return currentHour == forecastDateTime.getHours();
      })();

      return { areTheSame, canRoundUp, oneHourDelta };
    })();

    if (
      isSameDay && //If this is true...
      ((hours.areTheSame && !hours.canRoundUp) || //and ONE of these are true...
        (hours.oneHourDelta && hours.canRoundUp))
    ) {
      return "now";
    }

    return "";
  }

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
        classList: [tempToColor(_parsedWeatherData.temp)],
        innerText: `${_parsedWeatherData.temp}°`,
      })
    );
    _container.appendChild(image);
    _container.appendChild(
      new HtmlElement({
        type: "p",
        classList: ["time"],
        innerText: `${_parsedWeatherData.time}`,
      })
    );
    // Show the rain percentage if it is over 20%
    if (_parsedWeatherData.pop > 20) {
      _container.appendChild(
        new HtmlElement({
          type: "p",
          classList: ["rain-percentage"],
          innerText: `${_parsedWeatherData.pop}%`,
        })
      );
    }
    parentNode.appendChild(_container);
  };

  return { render, load };
}
