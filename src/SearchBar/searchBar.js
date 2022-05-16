// The module for creating Skeleton js components.
import { HtmlElement } from "../HelperFunctions/HtmlElement.js";
import { errorMessage } from "../HelperFunctions/errorMessage.js";
import { CurrentWeatherCard } from "../CurrentWeather/CurrentWeatherCard.js";
import { forecastLoader } from "../SevenDayForecast/forecastLoader.js";
import weather from "../weather.js";
import { hourlyForecastLoader } from "../HourlyForecast/hourlyForecastLoader.js";
import { spinner } from "../Spinner/spinner.js";
export function searchBar(rootNode) {
  /**
   * Store reference to the error message (when a user types in an invalid city)
   * So we can remove this error message when the user creates a new search
   */
  let _errorMessageComponent;

  /**
   * Store reference to the current weather card. This way it can be replaced
   * on subsequent searches.
   */
  let _currentWeatherCard;

  const sevenDayForecast = forecastLoader();
  const hourlyForecast = hourlyForecastLoader();

  const _componentContainer = new HtmlElement({
    type: "div",
    classList: [
      "row",
      "input-container",
      "flex",
      "flex-row",
      "flex-justify-center",
      "flex-align-center",
    ],
  });

  const _searchBar = new HtmlElement({
    type: "input",
    attributes: {
      type: "text",
      // placeholder: "Enter a city name",
      style: "width: 90%",
    },
    id: "cityName",
  });

  const _focus = function () {
    _searchBar.focus();
  };

  /**
   * Listen for when the user presses the Enter key
   */
  const _handleKeydown = async function (e) {
    if (e.key != "Enter") return;
    if (screen.width < 500) _searchBar.blur();
    _processData(e);
  };

  /**
   * Process the form.
   */
  const _processData = async function (e) {
    //Dont process an empty search term.
    if (e.target.value.trim().length <= 0) {
      e.target.value = "";
      return;
    }

    //Remove any previous error messages
    if (_errorMessageComponent) _errorMessageComponent.remove();
    if (_currentWeatherCard) _currentWeatherCard.remove();
    sevenDayForecast.removeForecasts();
    hourlyForecast.removeForecasts();

    const loadingSpinner = spinner(rootNode);
    loadingSpinner.start();
    // return;
    try {
      const weatherData = await weather.getWeather(e.target.value);
      const todaysWeather = new CurrentWeatherCard(
        weatherData,
        rootNode,
        e.target.value.trim()
      );
      _currentWeatherCard = todaysWeather.container;

      await sevenDayForecast.loadForecast(weatherData);
      await hourlyForecast.loadForecast(weatherData);

      loadingSpinner.stop();
      todaysWeather.render();
      hourlyForecast.renderForecast(rootNode);
      sevenDayForecast.renderForecast(rootNode);
    } catch (error) {
      loadingSpinner.stop();
      console.log(error);
      _errorMessageComponent = errorMessage(error);
      rootNode.appendChild(_errorMessageComponent);
      _focus();
    }
  };

  const render = function () {
    // Listen for the user pressing the Enter key
    _searchBar.addEventListener("keydown", _handleKeydown);

    _componentContainer.appendChild(_searchBar);
    rootNode.appendChild(_componentContainer);
    _focus();
  };

  return { render };
}
