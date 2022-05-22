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

/**
 * Use bootstrap icons
 */
import "bootstrap-icons/font/bootstrap-icons.css";

import { searchBar } from "./SearchBar/searchBar.js";
import { spinner } from "./Spinner/spinner";
import { ErrorMessage } from "./HelperFunctions/ErrorMessage";
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
  let hourlyForecastLoader = hourlyForecast(rootNode, loadSevenDayForecast);
  const searchBarComponent = searchBar(rootNode, loadResults);
  searchBarComponent.render();

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
      formatUserSearchTerm(weatherData);
      loadCurrentWeather(weatherData, cityName);
      await Promise.all([
        currentWeatherCard.load(),
        hourlyForecastLoader.loadForecast(weatherData),
      ]);
    } catch (error) {
      if (error.name == "InvalidSearchError") {
        errorMessageComponent.setErrorMessage(error.message).render();
        spinningLoader.stop();
      } else {
        throw error;
      }
      return Promise.reject();
    }

    currentWeatherCard.render();
    hourlyForecastLoader.renderForecast();
    // sevenDayForecastLoader.renderForecast();
    spinningLoader.stop();
    return Promise.resolve();
  }

  /**
   * change "Orlando" to "Orlando, Florida" etc.
   * This changes the users search term to include the state.
   */
  function formatUserSearchTerm(weatherData) {
    const cityAndState = weatherData.state
      ? `${weatherData.name}, ${weatherData.state}`
      : weatherData.name;
    searchBarComponent.setValue(cityAndState);
  }

  /**
   * Load the current weather card. This is the top most component in the DOM.
   */
  function loadCurrentWeather(weatherData, cityName) {
    try {
      currentWeatherCard = new CurrentWeatherCard(
        weatherData,
        rootNode,
        cityName
      );
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  /**
   * Clear out the screen so we can populate it with new results.
   */
  function clearPreviousSearchResults() {
    errorMessageComponent.remove();
    if (currentWeatherCard) currentWeatherCard.remove();
    // sevenDayForecastLoader.removeForecasts();
    hourlyForecastLoader.removeForecasts();
    searchBarComponent.reset();
  }

  /**
   * This function is passed into the constructor for hourlyForecast. Inside
   * hourlyForecast there is a button that, when clicked, will call this
   * function - loading the seven day forecast.
   */
  function loadSevenDayForecast() {
    currentWeatherCard.toCompactView();
  }
})();
