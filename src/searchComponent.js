// The module for creating Skeleton js components.
import { HtmlElement } from "./HtmlElement.js";
import { errorMessage } from "./errorMessage.js";
import { CurrentWeatherCard } from "./weatherCardComponents/CurrentWeatherCard.js";
import { forecastLoader } from "./weatherCardComponents/forecastLoader.js";
import weather from "./weather.js";

export function searchComponent(rootNode) {
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

  const forecast = forecastLoader();

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
      placeholder: "Enter a city name",
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
    forecast.removeForecasts();

    try {
      const weatherData = await weather.getWeather(e.target.value);

      const todaysWeather = new CurrentWeatherCard(
        weatherData,
        rootNode,
        e.target.value.trim()
      );
      _currentWeatherCard = todaysWeather.container;

      await forecast.loadForecast(weatherData);
      todaysWeather.render();

      // todaysWeather.render();
      forecast.renderForecast(rootNode);
    } catch (error) {
      console.log(error);
      _errorMessageComponent = errorMessage(error);
      rootNode.appendChild(_errorMessageComponent);
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
