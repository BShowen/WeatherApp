import { HtmlElement } from "./HtmlElement.js";

export function errorMessage(errorMessage) {
  const rowContainer = new HtmlElement({
    type: "div",
    classList: ["row"],
  });

  const _columnContainer = new HtmlElement({
    type: "div",
    classList: [
      "twelve",
      "columns",
      "flex",
      "flex-justify-center",
      "flex-align-center",
    ],
  });

  const textComponent = new HtmlElement({
    type: "h5",
    innerText: errorMessage,
  });

  rowContainer.appendChild(_columnContainer);
  _columnContainer.appendChild(textComponent);

  return rowContainer;
}
