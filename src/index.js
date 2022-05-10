/**
 * Import the required CSS files for Skeleton to work.
 * These are CSS files created for Skeleton. I did not create these.
 */
import "./Skeleton/css/normalize.css";
import "./Skeleton/css/skeleton.css";

/**
 * Import the layout styling. This is where layout classes are defined.
 */
import "./index.css";

import { searchComponent } from "./searchComponent.js";

(function () {
  const rootNode = document.querySelector("#root");
  const search = searchComponent(rootNode);
  search.render();
})();
