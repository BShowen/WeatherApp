import { HtmlElement } from "../HelperFunctions/HtmlElement";
import { tempToColor } from "../HelperFunctions/tempToColor";

export function CurrentWeatherCard(weatherData = {}, rootNode, cityName) {
  // Process the weatherData upon instantiation
  const parsedWeatherData = (function () {
    let { max, min } = weatherData.daily[0].temp;
    let { temp } = weatherData.current;
    let { description } = weatherData.current.weather[0];
    description = description.charAt(0).toUpperCase() + description.slice(1);
    temp = Math.round(temp);
    max = Math.round(max);
    min = Math.round(min);
    return {
      temp,
      description,
      max,
      min,
    };
  })();

  const _skeletonRow = new HtmlElement({
    type: "div",
    classList: ["row"],
  });

  const _skeletonColumn = new HtmlElement({
    type: "div",
    classList: ["twelve", "columns"],
  });

  const _container = new HtmlElement({
    type: "div",
    classList: [
      "current-weather-card",
      "flex",
      "flex-column",
      "flex-align-center",
    ],
  });

  // Create the title container with the inner text as the users search term.
  const _title = (function () {
    const container = new HtmlElement({
      type: "div",
      classList: [
        "flex",
        "flex-row",
        "flex-justify-center",
        "flex-align-center",
      ],
    });

    const _titleText = new HtmlElement({
      type: "h2",
      classList: ["m-0"],
      innerText: cityName,
    });

    container.appendChild(_titleText);
    return container;
  })();

  const _temp = (function () {
    const container = new HtmlElement({
      type: "div",
      classList: [
        "flex",
        "flex-row",
        "flex-justify-center",
        "flex-align-center",
      ],
    });

    const _text = new HtmlElement({
      type: "p",
      classList: ["m-0", tempToColor(parsedWeatherData.temp)],
      id: "main-temp",
      innerText: `${parsedWeatherData.temp}°`,
    });

    container.appendChild(_text);
    return container;
  })();

  const _description = (function () {
    const container = new HtmlElement({
      type: "div",
      id: "current-weather-card-description-container",
      classList: [
        "flex",
        "flex-row",
        "flex-justify-center",
        "flex-align-center",
      ],
    });

    const _text = new HtmlElement({
      type: "p",
      classList: ["m-0"],
      innerText: parsedWeatherData.description,
    });

    container.appendChild(_text);

    return container;
  })();

  const _dailyTemps = (function () {
    const container = new HtmlElement({
      type: "div",
      id: "current-weather-card-temps-container",
      classList: [
        "flex",
        "flex-row",
        "flex-justify-center",
        "flex-algin-center",
      ],
    });

    const _highTemp = new HtmlElement({
      type: "p",
      classList: ["m-0", "mr-5", tempToColor(parsedWeatherData.max)],
      innerText: `H:${parsedWeatherData.max}°`,
    });

    const _lowTemp = new HtmlElement({
      type: "p",
      classList: ["m-0", "ml-5", tempToColor(parsedWeatherData.min)],
      innerText: `L:${parsedWeatherData.min}°`,
    });

    container.appendChild(_lowTemp);
    container.appendChild(_highTemp);

    return container;
  })();

  const render = function () {
    _skeletonRow.appendChild(_skeletonColumn);
    _skeletonColumn.appendChild(_container);
    _container.appendChild(_title);
    _container.appendChild(_temp);
    _container.appendChild(_description);
    _container.appendChild(_dailyTemps);

    rootNode.appendChild(_skeletonRow);
  };

  const remove = function () {
    _skeletonRow.remove();
  };

  return { render, remove };
}
