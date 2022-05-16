import { HtmlElement } from "../HelperFunctions/HtmlElement";
import "./spinner.css";

export function spinner() {
  const rootNode = document.querySelector("body");

  const container = new HtmlElement({
    type: "div",
    id: "spinner-container",
  });

  const spinner = new HtmlElement({
    type: "div",
    id: "spinner",
  });

  const start = function () {
    container.appendChild(spinner);
    rootNode.appendChild(container);
  };

  const stop = function () {
    container.remove();
  };

  return { start, stop };
}
