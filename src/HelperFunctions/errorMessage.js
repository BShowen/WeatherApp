import { HtmlElement } from "./HtmlElement.js";

export function ErrorMessage(rootNode) {
  const _rowContainer = new HtmlElement({
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
  });

  const setErrorMessage = function (newErrorMessage) {
    textComponent.innerText = newErrorMessage;
    return this;
    //Return 'this' so that render() can be chained to this method.
  };

  const render = function () {
    _rowContainer.appendChild(_columnContainer);
    _columnContainer.appendChild(textComponent);
    rootNode.appendChild(_rowContainer);
  };

  const remove = function () {
    _rowContainer.remove();
  };

  return { render, setErrorMessage, remove };
}
