import { HtmlElement } from "../HtmlElement";

export function CurrentWeatherCard(weatherData = {}, rootNode, cityName) {
  // Process the weatherData upon instantiation
  const parsedWeatherData = (function () {
    const { max, min } = weatherData.daily[0].temp;
    const { temp } = weatherData.current;
    const { description } = weatherData.current.weather[0];
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
      "flex-justify-center",
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
      type: "h1",
      classList: ["m-0"],
      id: "main-temp",
      innerText: `${Math.round(parsedWeatherData.temp)}°`,
    });

    container.appendChild(_text);
    return container;
  })();

  const _description = (function () {
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
      type: "h5",
      classList: ["m-0"],
      innerText: parsedWeatherData.description,
    });

    container.appendChild(_text);

    return container;
  })();

  const _dailyTemps = (function () {
    const container = new HtmlElement({
      type: "div",
      classList: [
        "flex",
        "flex-row",
        "flex-justify-center",
        "flex-algin-center",
      ],
    });

    const _highTemp = new HtmlElement({
      type: "h5",
      classList: ["m-0", "mr-5"],
      innerText: `H:${Math.round(parsedWeatherData.max)}°`,
    });

    const _lowTemp = new HtmlElement({
      type: "h5",
      classList: ["m-0", "ml-5"],
      innerText: `L:${Math.round(parsedWeatherData.min)}°`,
    });

    container.appendChild(_highTemp);
    container.appendChild(_lowTemp);

    return container;
  })();

  const render = async function () {
    _skeletonRow.appendChild(_skeletonColumn);
    _skeletonColumn.appendChild(_container);
    _container.appendChild(_title);
    _container.appendChild(_temp);
    _container.appendChild(_description);
    _container.appendChild(_dailyTemps);

    rootNode.appendChild(_skeletonRow);
  };

  return { container: _skeletonRow, render };
}
