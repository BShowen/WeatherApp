export function Row() {
  const rowElement = document.createElement("div");
  rowElement.classList.add("row");
  return rowElement;
}

export function Column() {
  const rowElement = document.createElement("div");
  rowElement.classList.add("column");
  return rowElement;
}
