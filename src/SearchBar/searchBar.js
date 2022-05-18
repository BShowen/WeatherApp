import "./style.css";
import { HtmlElement } from "../HelperFunctions/HtmlElement.js";
export function searchBar(rootNode, callBack) {
  const container = new HtmlElement({
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
    },
    id: "cityName",
  });

  /**
   * Listen for when the user presses the Enter key.
   * The 'callBack' called in this function is passed into this (searchBar) fn.
   * When 'callBack' is called, index.js will receive control over the rest of
   * the script.
   */
  const _handleKeydown = async function (e) {
    if (!(e.key == "Enter" && e.target.value.trim().length > 0)) return;
    if (screen.width < 500) _searchBar.blur();
    callBack(e.target.value.trim()).then(
      () => {
        container.classList.add("showing-results");
      },
      () => {
        container.classList.remove("showing-results");
      }
    );
  };

  const render = function () {
    // Listen for the user pressing the Enter key
    _searchBar.addEventListener("keydown", _handleKeydown);
    _searchBar.addEventListener("click", (e) => {
      e.target.value = "";
    });

    container.appendChild(_searchBar);
    rootNode.appendChild(container);
  };

  const setValue = function (newValue) {
    _searchBar.value = newValue;
  };

  const reset = function () {
    container.classList.remove("showing-results");
  };

  return { render, container, reset, setValue };
}
