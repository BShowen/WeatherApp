import "./style.css";
import { HourlyForecastCard } from "./HourlyForecastCard";
import { HtmlElement } from "../HelperFunctions/HtmlElement";

/**
 * rootNode = The node for this component to append itself to.
 * callBack = The function that is called when the button within this componet
 * is clicked.
 */
export function hourlyForecast(rootNode, callback) {
  // Store each forecast card in this array for future iteration.
  let hourlyForecasts = [];

  let _hourlyForecastContainer = new HtmlElement({
    type: "div",
    classList: ["hourly-forecast-container"],
  });

  let _header = function () {
    const _container = new HtmlElement({
      type: "div",
      id: "hourly-forecast-header-container",
    });

    const _headerTitle = (function () {
      const _container = new HtmlElement({
        type: "div",
        id: "hourly-forecast-header-title-container",
      });
      const _text = new HtmlElement({
        type: "p",
        id: "hourly-forecast-title-text",
        innerText: "Today",
      });
      _container.appendChild(_text);
      return _container;
    })();

    const _sevenDayForecastButton = (function () {
      const _icon = new HtmlElement({
        type: "i",
        classList: ["bi", "bi-caret-up-fill"],
      });

      const _btn = new HtmlElement({
        type: "button",
        innerText: "7 days",
        classList: ["caret-up"],
        id: "hourly-forecast-header-button",
        childrenNodes: [_icon],
      });

      const _container = new HtmlElement({
        type: "div",
        id: "hourly-forecast-header-button-container",
        childrenNodes: [_btn],
      });

      _btn.addEventListener("click", (e) => {
        e.preventDefault();
        _headerTitle.classList.toggle("hide");
        _icon.classList.toggle("bi-caret-up-fill");
        _icon.classList.toggle("bi-caret-down-fill");
        callback();
      });

      return _container;
    })();

    _container.appendChild(_headerTitle);
    _container.appendChild(_sevenDayForecastButton);
    return _container;
  };

  let _body = (function () {
    const _container = new HtmlElement({
      type: "div",
      id: "hourly-forecast-body-container",
    });

    return _container;
  })();

  /**
   * Initialize each forecast card by creating an instance of ForecastCard and
   * calling .load() on the card. .load() is an async operation that always
   * returns a resolved promise - it cannot fail. This is done on purpose. The
   * only thing that .load() is doing is attempting to retrieve an image from
   * the OpenWeather API. If an image cannot be retrieved then we simply return
   * a resolved promise and there is no image to display for that forecast card.
   */
  const loadForecast = async function (weatherData) {
    // Show hourly weather data for the next 24 hours only.
    const hourlyForecastData = weatherData.hourly.splice(0, 25);

    hourlyForecastData.forEach((hourlyForecast) => {
      hourlyForecasts.push(new HourlyForecastCard(hourlyForecast));
    });

    /**
     * I want forecast.load() to be called in parallel for all of the
     * forecasts. I use map to map over the hourlyForecasts and call .load() on
     * each forecast. .load() will fetch an image from OpenWeather API. This
     * is slow, and I dont want to render text on the screen AND THEN images
     * after a slight delay. So I use Promise.all() to make sure all images
     * have been fetched and loaded before proceeding with rendering.
     */
    await Promise.all(
      hourlyForecasts.map((forecastCard) => forecastCard.load())
    );

    /**
     * Ensure a resolved promise is always returned. If there is an error in
     * Promise.all() then we consume it. The only error would be when the
     * OpenWeatherMap API is unable to respond with an image. In this case we
     * still want to render the forecastCard, except that it wont have an image.
     */
    return Promise.resolve(true);
  };

  /**
   * This function renders each forecast card to the dom.
   */
  const renderForecast = function () {
    hourlyForecasts.forEach((forecastCard) => forecastCard.render(_body));
    _hourlyForecastContainer.appendChild(_header());
    _hourlyForecastContainer.appendChild(_body);
    rootNode.appendChild(_hourlyForecastContainer);
  };

  /**
   * This function removes the forecast cards from the dom. This is needed so
   * when users make subsequent requests, the previous results are removed.
   */
  const removeForecasts = function () {
    [_hourlyForecastContainer, _header, _body].map((element) => {
      element.innerHTML = "";
    });
    hourlyForecasts = [];
    _body.classList.remove("remove");
  };

  const toggleView = function () {
    _body.classList.toggle("remove");
  };

  return {
    loadForecast,
    renderForecast,
    removeForecasts,
    toggleView,
  };
}
