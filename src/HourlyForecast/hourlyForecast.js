import "./style.css";
import { HourlyForecastCard } from "./HourlyForecastCard";
import { HtmlElement } from "../HelperFunctions/HtmlElement";

export function hourlyForecast(rootNode) {
  // Store each forecast card in this array for future iteration.
  let hourlyForecasts = [];

  let _hourlyForecastContainer = new HtmlElement({
    type: "div",
    classList: [
      "hourly-forecast-container",
      "flex",
      "flex-row",
      "flex-no-wrap",
    ],
  });

  /**
   * Initialize each forecast card by creating an instance of ForecastCard and
   * calling .load() on the card. .load() is an async operation that always
   * returns a resolved promise - it cannot fail. This is done on purpose. The
   * only thing that .load() is doing is attempting to retrieve an image from
   * the OpenWeather API. If an image cannot be retrieved then we simply return
   * a resolved promise and there is no image to display for that forecast card.
   */
  const loadForecast = async function (weatherData) {
    const hourlyForecastData = weatherData.hourly.splice(23);

    hourlyForecastData.forEach((hour, index) => {
      const weatherCard = new HourlyForecastCard(hour);
      hourlyForecasts.push(weatherCard);
    });
    /**
     * I want forecast.load() to be called in parallel for all of the
     * forecasts. I use map to map over the hourlyForecasts and call .load() on
     * each forecast. .load() will fetch an image from OpenWeather API. This
     * is slow, and I dont want to render text on the screen AND THEN images
     * after a slight delay. So I use Promise.all() to make sure all images
     * have been fetched and loaded before proceeding with rendering.
     */
    await Promise.all(hourlyForecasts.map((forecast) => forecast.load()));
    return true;
  };

  /**
   * This function renders each forecast card to the dom.
   */
  const renderForecast = function () {
    hourlyForecasts.forEach((forecast) =>
      forecast.render(_hourlyForecastContainer)
    );
    rootNode.appendChild(_hourlyForecastContainer);
  };

  /**
   * This function removes the forecast cards from the dom. This is needed so
   * when users make subsequent requests, the previous results are removed.
   */
  const removeForecasts = function () {
    _hourlyForecastContainer.remove();
    _hourlyForecastContainer = new HtmlElement({
      type: "div",
      classList: [
        "hourly-forecast-container",
        "flex",
        "flex-row",
        "flex-no-wrap",
      ],
    });
    hourlyForecasts = [];
  };

  return { loadForecast, renderForecast, removeForecasts };
}
