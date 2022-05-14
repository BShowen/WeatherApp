import { ForecastCard } from "./ForecastCard.js";
import { HtmlElement } from "../HtmlElement.js";

/**
 * This component loads the seven day forecast.
 */
export function forecastLoader() {
  // Store each forecast card in this array for future iteration.
  let dailyForecasts = [];

  let _forecastContainer = new HtmlElement({
    type: "div",
    classList: [
      "forecast-container",
      "flex",
      "flex-row",
      "flex-no-wrap",
      "flex-align-center",
      "flex-justify-even",
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
  const loadForecast = async function (weatherData = {}) {
    weatherData.daily.forEach((day) => {
      dailyForecasts.push(new ForecastCard(day));
    });

    /**
     * I want forecast.load() to be called in parallel for all 7 of the
     * forecasts. I use map to map over the dailyForecasts and call .load() on
     * each forecast. .load() will fetch an image from OpenWeather API. This
     * is slow, and I dont want to render text on the screen AND THEN images
     * after a slight delay. So I use Promise.all() to make sure all images
     * have been fetched and loaded before proceeding with rendering.
     */
    await Promise.all(dailyForecasts.map((forecast) => forecast.load()));
    return true;
  };

  /**
   * This function actually renders each forecast card to the dom.
   */
  const renderForecast = function (rootNode) {
    dailyForecasts.forEach((forecast) => forecast.render(_forecastContainer));
    rootNode.appendChild(_forecastContainer);
  };

  /**
   * This function removes the forecast cards from the dom. This is needed so
   * when users make subsequent requests, the previous results are removed.
   */
  const removeForecasts = function () {
    _forecastContainer.remove();
    _forecastContainer = new HtmlElement({
      type: "div",
      classList: ["forecast-container"],
    });
    dailyForecasts = [];
  };

  return { loadForecast, renderForecast, removeForecasts };
}
