// The module for creating Skeleton js components.
import { HtmlElement } from "./HtmlElement.js";
import { errorMessage } from "./errorMessage.js";
import { CurrentWeatherCard } from "./CurrentWeatherCard.js";
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

  const _rowContainer = new HtmlElement({
    type: "div",
    classList: ["row"],
  });

  const _columnContainer = new HtmlElement({
    type: "div",
    classList: ["twelve", "columns"],
  });

  const _searchBar = new HtmlElement({
    type: "input",
    classList: ["u-full-width"],
    attributes: {
      type: "text",
      placeholder: "Enter a city name",
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

    let data;

    try {
      const currentWeatherData = await weather.getWeather(e.target.value);
      const weatherCard = new CurrentWeatherCard(currentWeatherData, rootNode);
      _currentWeatherCard = weatherCard.container;
      weatherCard.render();
    } catch (error) {
      _errorMessageComponent = errorMessage(error.message);
      rootNode.appendChild(_errorMessageComponent);
    }
  };

  const render = function () {
    // Listen for the user pressing the Enter key
    _searchBar.addEventListener("keydown", _handleKeydown);
    // When the form loses focus, process it. This is for mobile.
    _searchBar.addEventListener("blur", _processData);

    _rowContainer.appendChild(_columnContainer);
    _columnContainer.appendChild(_searchBar);
    rootNode.appendChild(_rowContainer);
    _focus();
  };

  return { render };
}
