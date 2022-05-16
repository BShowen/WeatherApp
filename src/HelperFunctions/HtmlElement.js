/**
 * An abstraction for easily creating HTML nodes.
 * data = {
 *  type: "div",
 *  classList: ["class1", "class2"],
 *  attributes: {
 *    hidden: "true",
 *    display: "none"
 *  },
 *  id: "SomeID",
 * innerText: "Some text"
 * }
 */
export function HtmlElement(data = {}) {
  const element = document.createElement(data.type);

  if (data.classList) {
    data.classList.forEach((className) => element.classList.add(className));
  }

  if (data.attributes) {
    for (const attributeName in data.attributes) {
      element.setAttribute(attributeName, data.attributes[attributeName]);
    }
  }

  if (data.innerText) {
    element.innerText = data.innerText.trim();
  }

  if (data.id) {
    element.id = data.id;
  }

  return element;
}
