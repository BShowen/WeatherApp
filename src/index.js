/**
 * Import the required CSS files for Skeleton to work.
 * These are CSS files created for Skeleton. I did not create these.
 */
import "./Skeleton/css/normalize.css";
import "./Skeleton/css/skeleton.css";

/**
 * Import the layout styling. This is where layout classes are defined.
 */
import "./index.css";

import { searchBar } from "./SearchBar/searchBar.js";
import { spinner } from "./Spinner/spinner";
import { ErrorMessage } from "./HelperFunctions/ErrorMessage.js";
import weather from "./weather";
import { CurrentWeatherCard } from "./CurrentWeather/CurrentWeatherCard";
import { sevenDayForecast } from "./SevenDayForecast/sevenDayForecast";
import { hourlyForecast } from "./HourlyForecast/hourlyForecast";

(function () {
  const rootNode = document.querySelector("#root");
  const spinningLoader = spinner();
  const errorMessageComponent = new ErrorMessage(rootNode);
  let currentWeatherCard;
  let sevenDayForecastLoader = sevenDayForecast(rootNode);
  let hourlyForecastLoader = hourlyForecast(rootNode);
  searchBar(rootNode, loadResults).render();

  /**
   * This is the function that gets fired when the user searches in the search
   * bar. This function is passed to the function call for creating the
   * search bar component.
   */
  async function loadResults(cityName) {
    let weatherData;
    spinningLoader.start();
    clearPreviousSearchResults();
    try {
      weatherData = await weather.getWeather(cityName);
      await Promise.all([
        hourlyForecastLoader.loadForecast(weatherData),
        sevenDayForecastLoader.loadForecast(weatherData),
      ]);
    } catch (error) {
      if (error.name == "InvalidSearchError") {
        errorMessageComponent.setErrorMessage(error.message).render();
        spinningLoader.stop();
      } else {
        throw error;
      }
      return;
    }

    loadCurrentWeather(weatherData, cityName);
    hourlyForecastLoader.renderForecast();
    sevenDayForecastLoader.renderForecast();
    spinningLoader.stop();
  }

  /**
   * Load the current weather card. This is the top most component in the DOM.
   */
  function loadCurrentWeather(weatherData, cityName) {
    currentWeatherCard = new CurrentWeatherCard(
      weatherData,
      rootNode,
      cityName
    );
    currentWeatherCard.render();
  }

  /**
   * Clear out the screen so we can populate it with new results.
   */
  function clearPreviousSearchResults() {
    errorMessageComponent.remove();
    if (currentWeatherCard) currentWeatherCard.remove();
    sevenDayForecastLoader.removeForecasts();
    hourlyForecastLoader.removeForecasts();
  }
})();
