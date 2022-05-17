/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Skeleton/css/normalize.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Skeleton/css/normalize.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  /* margin: 0.67em 0; */\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}", "",{"version":3,"sources":["webpack://./src/Skeleton/css/normalize.css"],"names":[],"mappings":"AAAA,2DAA2D;;AAE3D;;;;EAIE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,0BAA0B,EAAE,MAAM;EAClC,8BAA8B,EAAE,MAAM;AACxC;;AAEA;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;+EAC+E;;AAE/E;;;;;EAKE;;AAEF;;;;;;;;;;;;;EAaE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;;;EAIE,qBAAqB,EAAE,MAAM;EAC7B,wBAAwB,EAAE,MAAM;AAClC;;AAEA;;;EAGE;;AAEF;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;;EAGE;;AAEF;;EAEE,aAAa;AACf;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;EAEE;;AAEF;;EAEE,UAAU;AACZ;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,yBAAyB;AAC3B;;AAEA;;EAEE;;AAEF;;EAEE,iBAAiB;AACnB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,sBAAsB;AACxB;;AAEA;;EAEE;;AAEF;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,gBAAgB;AAClB;;AAEA;;EAEE;;AAEF;EACE,4BAA4B;EAC5B,uBAAuB;EACvB,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;;;;EAIE,iCAAiC;EACjC,cAAc;AAChB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE;;AAEF;;;;;EAKE,cAAc,EAAE,MAAM;EACtB,aAAa,EAAE,MAAM;EACrB,SAAS,EAAE,MAAM;AACnB;;AAEA;;EAEE;;AAEF;EACE,iBAAiB;AACnB;;AAEA;;;;;EAKE;;AAEF;;EAEE,oBAAoB;AACtB;;AAEA;;;;;;EAME;;AAEF;;;;EAIE,0BAA0B,EAAE,MAAM;EAClC,eAAe,EAAE,MAAM;AACzB;;AAEA;;EAEE;;AAEF;;EAEE,eAAe;AACjB;;AAEA;;EAEE;;AAEF;;EAEE,SAAS;EACT,UAAU;AACZ;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB;AACrB;;AAEA;;;;;;EAME;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;;;EAIE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;;EAIE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,4BAA4B;EAC5B,+BAA+B,EAAE,MAAM;EACvC,uBAAuB;AACzB;;AAEA;;;;EAIE;;AAEF;;EAEE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,yBAAyB;EACzB,aAAa;EACb,8BAA8B;AAChC;;AAEA;;;EAGE;;AAEF;EACE,SAAS,EAAE,MAAM;EACjB,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,iBAAiB;AACnB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;;EAEE,UAAU;AACZ","sourcesContent":["/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  /* margin: 0.67em 0; */\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Skeleton/css/skeleton.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Skeleton/css/skeleton.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n* Skeleton V2.0.4\n* Copyright 2014, Dave Gamache\n* www.getskeleton.com\n* Free to use under the MIT license.\n* http://www.opensource.org/licenses/mit-license.php\n* 12/29/2014\n*/\n\n\n/* Table of contents\n––––––––––––––––––––––––––––––––––––––––––––––––––\n- Grid\n- Base Styles\n- Typography\n- Links\n- Buttons\n- Forms\n- Lists\n- Code\n- Tables\n- Spacing\n- Utilities\n- Clearing\n- Media Queries\n*/\n\n\n/* Grid\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 1300px;\n  margin: 0 auto;\n  box-sizing: border-box; \n}\n.column,\n.columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; \n}\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0; \n  }\n}\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%; \n  }\n  .column,\n  .columns {\n    margin-left: 4%; \n  }\n  .column:first-child,\n  .columns:first-child {\n    margin-left: 0; \n  }\n\n  .one.column,\n  .one.columns                    { width: 4.66666666667%; }\n  .two.columns                    { width: 13.3333333333%; }\n  .three.columns                  { width: 22%;            }\n  .four.columns                   { width: 30.6666666667%; }\n  .five.columns                   { width: 39.3333333333%; }\n  .six.columns                    { width: 48%;            }\n  .seven.columns                  { width: 56.6666666667%; }\n  .eight.columns                  { width: 65.3333333333%; }\n  .nine.columns                   { width: 74.0%;          }\n  .ten.columns                    { width: 82.6666666667%; }\n  .eleven.columns                 { width: 91.3333333333%; }\n  .twelve.columns                 { width: 100%; margin-left: 0; }\n\n  .one-third.column               { width: 30.6666666667%; }\n  .two-thirds.column              { width: 65.3333333333%; }\n\n  .one-half.column                { width: 48%; }\n\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\n  .offset-by-two.column,\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\n  .offset-by-three.column,\n  .offset-by-three.columns        { margin-left: 26%;            }\n  .offset-by-four.column,\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\n  .offset-by-five.column,\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\n  .offset-by-six.column,\n  .offset-by-six.columns          { margin-left: 52%;            }\n  .offset-by-seven.column,\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\n  .offset-by-eight.column,\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\n  .offset-by-nine.column,\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\n  .offset-by-ten.column,\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\n\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\n\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns     { margin-left: 52%; }\n\n}\n\n\n/* Base Styles\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* NOTE\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\nare based on 10px sizing. So basically 1.5rem = 15px :) */\nhtml {\n  font-size: 62.5%; }\nbody {\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #222; }\n\n\n/* Typography\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1, h2, h3, h4, h5, h6 {\n  margin: 0;\n  font-weight: 300; \n}\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 { font-size: 5.0rem; }\n  h2 { font-size: 4.2rem; }\n  h3 { font-size: 3.6rem; }\n  h4 { font-size: 3.0rem; }\n  h5 { font-size: 2.4rem; }\n  h6 { font-size: 1.5rem; }\n}\n\np {\n  margin: 0;\n}\n\n\n/* Links\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\na {\n  color: #1EAEDB; \n}\na:hover {\n  color: #0FA0CE; \n}\n\n\n/* Buttons\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box; \n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0; \n}\n.button.button-primary,\nbutton.button-primary,\ninput[type=\"submit\"].button-primary,\ninput[type=\"reset\"].button-primary,\ninput[type=\"button\"].button-primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0; \n}\n.button.button-primary:hover,\nbutton.button-primary:hover,\ninput[type=\"submit\"].button-primary:hover,\ninput[type=\"reset\"].button-primary:hover,\ninput[type=\"button\"].button-primary:hover,\n.button.button-primary:focus,\nbutton.button-primary:focus,\ninput[type=\"submit\"].button-primary:focus,\ninput[type=\"reset\"].button-primary:focus,\ninput[type=\"button\"].button-primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB; \n}\n\n\n/* Forms\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box; \n}\n/* Removes awkward default styles on some inputs for iOS */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; \n}\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px; \n}\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0; \n}\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600; \n}\nfieldset {\n  padding: 0;\n  border-width: 0; \n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  display: inline; \n}\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal; \n}\n\n\n/* Lists\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: circle inside; \n}\nol {\n  list-style: decimal inside; \n}\nol, ul {\n  padding-left: 0;\n  margin-top: 0; \n}\nul ul,\nul ol,\nol ol,\nol ul {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%; \n}\nli {\n  margin-bottom: 1rem; \n}\n\n\n/* Code\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; \n}\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre; \n}\n\n\n/* Tables\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; \n}\nth:first-child,\ntd:first-child {\n  padding-left: 0; }\nth:last-child,\ntd:last-child {\n  padding-right: 0; }\n\n\n/* Spacing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nbutton,\n.button {\n  margin-bottom: 1rem; \n}\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem; \n}\npre,\nblockquote,\ndl,\nfigure,\ntable,\nul,\nol,\nform {\n  margin-bottom: 2.5rem; \n}\n\n\n/* Utilities\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box; \n}\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box; \n}\n.u-pull-right {\n  float: right; \n}\n.u-pull-left {\n  float: left; \n}\n\n\n/* Misc\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; \n}\n\n\n/* Clearing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: \"\";\n  display: table;\n  clear: both; \n}\n\n\n/* Media Queries\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\nNote: The best way to structure the use of media queries is to create the queries\nnear the relevant code. For example, if you wanted to change the styles for buttons\non small devices, paste the mobile query code up in the buttons section and style it\nthere.\n*/\n\n\n/* Larger than mobile */\n@media (min-width: 350px) {\n  body {\n    width: 100vw;\n  }\n}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {\n}\n\n/* Larger than tablet */\n@media (min-width: 750px) {\n}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {\n}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {\n}\n", "",{"version":3,"sources":["webpack://./src/Skeleton/css/skeleton.css"],"names":[],"mappings":"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","sourcesContent":["/*\n* Skeleton V2.0.4\n* Copyright 2014, Dave Gamache\n* www.getskeleton.com\n* Free to use under the MIT license.\n* http://www.opensource.org/licenses/mit-license.php\n* 12/29/2014\n*/\n\n\n/* Table of contents\n––––––––––––––––––––––––––––––––––––––––––––––––––\n- Grid\n- Base Styles\n- Typography\n- Links\n- Buttons\n- Forms\n- Lists\n- Code\n- Tables\n- Spacing\n- Utilities\n- Clearing\n- Media Queries\n*/\n\n\n/* Grid\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 1300px;\n  margin: 0 auto;\n  box-sizing: border-box; \n}\n.column,\n.columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; \n}\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0; \n  }\n}\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%; \n  }\n  .column,\n  .columns {\n    margin-left: 4%; \n  }\n  .column:first-child,\n  .columns:first-child {\n    margin-left: 0; \n  }\n\n  .one.column,\n  .one.columns                    { width: 4.66666666667%; }\n  .two.columns                    { width: 13.3333333333%; }\n  .three.columns                  { width: 22%;            }\n  .four.columns                   { width: 30.6666666667%; }\n  .five.columns                   { width: 39.3333333333%; }\n  .six.columns                    { width: 48%;            }\n  .seven.columns                  { width: 56.6666666667%; }\n  .eight.columns                  { width: 65.3333333333%; }\n  .nine.columns                   { width: 74.0%;          }\n  .ten.columns                    { width: 82.6666666667%; }\n  .eleven.columns                 { width: 91.3333333333%; }\n  .twelve.columns                 { width: 100%; margin-left: 0; }\n\n  .one-third.column               { width: 30.6666666667%; }\n  .two-thirds.column              { width: 65.3333333333%; }\n\n  .one-half.column                { width: 48%; }\n\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\n  .offset-by-two.column,\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\n  .offset-by-three.column,\n  .offset-by-three.columns        { margin-left: 26%;            }\n  .offset-by-four.column,\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\n  .offset-by-five.column,\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\n  .offset-by-six.column,\n  .offset-by-six.columns          { margin-left: 52%;            }\n  .offset-by-seven.column,\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\n  .offset-by-eight.column,\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\n  .offset-by-nine.column,\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\n  .offset-by-ten.column,\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\n\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\n\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns     { margin-left: 52%; }\n\n}\n\n\n/* Base Styles\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* NOTE\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\nare based on 10px sizing. So basically 1.5rem = 15px :) */\nhtml {\n  font-size: 62.5%; }\nbody {\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #222; }\n\n\n/* Typography\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1, h2, h3, h4, h5, h6 {\n  margin: 0;\n  font-weight: 300; \n}\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 { font-size: 5.0rem; }\n  h2 { font-size: 4.2rem; }\n  h3 { font-size: 3.6rem; }\n  h4 { font-size: 3.0rem; }\n  h5 { font-size: 2.4rem; }\n  h6 { font-size: 1.5rem; }\n}\n\np {\n  margin: 0;\n}\n\n\n/* Links\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\na {\n  color: #1EAEDB; \n}\na:hover {\n  color: #0FA0CE; \n}\n\n\n/* Buttons\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box; \n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0; \n}\n.button.button-primary,\nbutton.button-primary,\ninput[type=\"submit\"].button-primary,\ninput[type=\"reset\"].button-primary,\ninput[type=\"button\"].button-primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0; \n}\n.button.button-primary:hover,\nbutton.button-primary:hover,\ninput[type=\"submit\"].button-primary:hover,\ninput[type=\"reset\"].button-primary:hover,\ninput[type=\"button\"].button-primary:hover,\n.button.button-primary:focus,\nbutton.button-primary:focus,\ninput[type=\"submit\"].button-primary:focus,\ninput[type=\"reset\"].button-primary:focus,\ninput[type=\"button\"].button-primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB; \n}\n\n\n/* Forms\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box; \n}\n/* Removes awkward default styles on some inputs for iOS */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; \n}\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px; \n}\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0; \n}\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600; \n}\nfieldset {\n  padding: 0;\n  border-width: 0; \n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  display: inline; \n}\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal; \n}\n\n\n/* Lists\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: circle inside; \n}\nol {\n  list-style: decimal inside; \n}\nol, ul {\n  padding-left: 0;\n  margin-top: 0; \n}\nul ul,\nul ol,\nol ol,\nol ul {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%; \n}\nli {\n  margin-bottom: 1rem; \n}\n\n\n/* Code\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; \n}\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre; \n}\n\n\n/* Tables\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; \n}\nth:first-child,\ntd:first-child {\n  padding-left: 0; }\nth:last-child,\ntd:last-child {\n  padding-right: 0; }\n\n\n/* Spacing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nbutton,\n.button {\n  margin-bottom: 1rem; \n}\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem; \n}\npre,\nblockquote,\ndl,\nfigure,\ntable,\nul,\nol,\nform {\n  margin-bottom: 2.5rem; \n}\n\n\n/* Utilities\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box; \n}\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box; \n}\n.u-pull-right {\n  float: right; \n}\n.u-pull-left {\n  float: left; \n}\n\n\n/* Misc\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; \n}\n\n\n/* Clearing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: \"\";\n  display: table;\n  clear: both; \n}\n\n\n/* Media Queries\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\nNote: The best way to structure the use of media queries is to create the queries\nnear the relevant code. For example, if you wanted to change the styles for buttons\non small devices, paste the mobile query code up in the buttons section and style it\nthere.\n*/\n\n\n/* Larger than mobile */\n@media (min-width: 350px) {\n  body {\n    width: 100vw;\n  }\n}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {\n}\n\n/* Larger than tablet */\n@media (min-width: 750px) {\n}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {\n}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Spinner/spinner.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Spinner/spinner.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#spinner-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 100%;\n}\n\n#spinner {\n  border-top: 10px solid #E5E5E5;\n  border-right: 10px solid #E5E5E5;\n  border-left: 10px solid #E5E5E5;\n  border-bottom: 10px solid #1E1E1E;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  animation: spin 0.8s ease infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}", "",{"version":3,"sources":["webpack://./src/Spinner/spinner.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;EAC9B,gCAAgC;EAChC,+BAA+B;EAC/B,iCAAiC;EACjC,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,KAAK,uBAAuB,EAAE;EAC9B,OAAO,yBAAyB,EAAE;AACpC","sourcesContent":["#spinner-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 100%;\n}\n\n#spinner {\n  border-top: 10px solid #E5E5E5;\n  border-right: 10px solid #E5E5E5;\n  border-left: 10px solid #E5E5E5;\n  border-bottom: 10px solid #1E1E1E;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  animation: spin 0.8s ease infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nhtml, body {\n  width: 100vw;\n  height: 100%;\n}\n\n#root{\n  min-width: 100%;\n  min-height: 100%;\n  /* padding-top: 50px; */\n  margin-top: 50px;\n  --main-bg-color: #F8FFE5;\n  --main-card-color: #1E2D24 ;\n  --temp-color-cold: #0af;\n  --temp-color-warm: #f09800;\n  --temp-color-hot: #f00000 ;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-no-wrap{\n  flex-wrap: nowrap;\n}\n\n.flex-justify-center {\n  justify-content: center;\n}\n\n.flex-justify-even {\n  justify-content: space-evenly;\n}\n\n.flex-align-center {\n  align-items: center;\n}\n\n.debug {\n  border: 2px solid red;\n}\n\n.m-0 {\n  margin: 0;\n}\n\n.ml-5 {\n  margin-left: 5px;\n}\n\n.mr-5 {\n  margin-right: 5px;\n}\n\n/* this is the main temp under the city name */\n#main-temp {\n  font-size: 9rem;\n}\n\n.temp-color-1 { /* -10 - 40 */\n  color: #1AADFF;\n}\n\n.temp-color-2 { /* 40 - 49 */\n  color: #1782FF;\n}\n\n.temp-color-3 { /* 50 - 59 */\n  color: #3317D9;\n}\n\n.temp-color-4 { /* 60 - 69 */\n  color: #7439A4;\n}\n.temp-color-5 { /* 70 - 79 */\n  color: #CE6752;\n}\n\n.temp-color-6 { /* 80 - 89 */\n  color: #FF6E04;\n}\n\n.temp-color-7 { /* 90 - 99 */\n  color: #FF4705;\n}\n\n.temp-color-8 { /* 100 - 119*/\n  color: #FF0101;\n}\n\n\n/* Larger than mobile */\n@media (min-width: 350px) {\n  body {\n    overflow-x: hidden;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n       -moz-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n\n  .container{\n    width: 100%;\n    height: 100%;\n    padding: 8px;\n  }\n\n  input[type=text]{\n    min-width: 100%;\n    min-height: 50px;\n    font-weight: bolder;\n    font-size: 2rem;\n    text-align: center;\n  }\n\n  .current-weather-card {\n    max-width: 100%;\n    margin: 0 auto;\n    padding: 10px;\n    border-radius: 1rem;\n  }\n\n  .current-weather-card > div > p {\n    font-weight: bolder;\n    font-size: 3rem;\n  }\n\n  #current-weather-card-temps-container {\n    width: 100%;\n    justify-content: center;\n    gap: 20px;\n  }\n\n  .hourly-forecast-container {\n    max-width: 100%;\n    margin: 15px auto;\n    border-radius: 1rem;\n    overflow: scroll;\n    -webkit-box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5); \n    box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5);\n    padding: 10px;\n\n    font-weight: bolder;\n  }\n\n  .hourly-forecast-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: 100px;\n  }\n\n  .hourly-forecast-card > .time {\n    font-size: 1.2rem;\n  }\n\n  .current-weather-card, .hourly-forecast-container, .forecast-container {\n    background-color: #decfcf;\n  }\n\n  .forecast-container {\n    max-width: 100%;\n    margin: 15px auto;\n    overflow: scroll;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    border-radius: 1rem;\n    -webkit-box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5); \n    box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5);\n    padding: 10px 5px;\n  }\n\n  .forecast-card {\n    border-top: 1px solid #e6e6e6;\n    width: 100%;\n    justify-content: space-evenly;\n    font-weight: bolder;\n  }\n\n  .forecast-card > .weekday {\n    color: white;\n    font-size: 2rem;\n  }\n}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {\n}\n\n/* Larger than tablet */\n@media (min-width: 750px) {\n}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {\n}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {\n  .forecast-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .hourly-forecast-container {\n    border-radius: 1rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;EAChB,wBAAwB;EACxB,2BAA2B;EAC3B,uBAAuB;EACvB,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA,8CAA8C;AAC9C;EACE,eAAe;AACjB;;AAEA,gBAAgB,aAAa;EAC3B,cAAc;AAChB;;AAEA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;;AAEA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;;AAEA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;AACA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;;AAEA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;;AAEA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;;AAEA,gBAAgB,aAAa;EAC3B,cAAc;AAChB;;;AAGA,uBAAuB;AACvB;EACE;IACE,kBAAkB;IAClB,WAAW;IACX,8BAA8B;OAC3B,2BAA2B;YACtB,sBAAsB;EAChC;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,cAAc;IACd,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;IACnB,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,uBAAuB;IACvB,SAAS;EACX;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,0DAA0D;IAC1D,kDAAkD;IAClD,aAAa;;IAEb,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,cAAc;IACd,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,gBAAgB;;IAEhB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;;IAEnB,mBAAmB;IACnB,0DAA0D;IAC1D,kDAAkD;IAClD,iBAAiB;EACnB;;EAEA;IACE,6BAA6B;IAC7B,WAAW;IACX,6BAA6B;IAC7B,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,eAAe;EACjB;AACF;;AAEA,8DAA8D;AAC9D;AACA;;AAEA,uBAAuB;AACvB;AACA;;AAEA,wBAAwB;AACxB;AACA;;AAEA,2BAA2B;AAC3B;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;AACF","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nhtml, body {\n  width: 100vw;\n  height: 100%;\n}\n\n#root{\n  min-width: 100%;\n  min-height: 100%;\n  /* padding-top: 50px; */\n  margin-top: 50px;\n  --main-bg-color: #F8FFE5;\n  --main-card-color: #1E2D24 ;\n  --temp-color-cold: #0af;\n  --temp-color-warm: #f09800;\n  --temp-color-hot: #f00000 ;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-no-wrap{\n  flex-wrap: nowrap;\n}\n\n.flex-justify-center {\n  justify-content: center;\n}\n\n.flex-justify-even {\n  justify-content: space-evenly;\n}\n\n.flex-align-center {\n  align-items: center;\n}\n\n.debug {\n  border: 2px solid red;\n}\n\n.m-0 {\n  margin: 0;\n}\n\n.ml-5 {\n  margin-left: 5px;\n}\n\n.mr-5 {\n  margin-right: 5px;\n}\n\n/* this is the main temp under the city name */\n#main-temp {\n  font-size: 9rem;\n}\n\n.temp-color-1 { /* -10 - 40 */\n  color: #1AADFF;\n}\n\n.temp-color-2 { /* 40 - 49 */\n  color: #1782FF;\n}\n\n.temp-color-3 { /* 50 - 59 */\n  color: #3317D9;\n}\n\n.temp-color-4 { /* 60 - 69 */\n  color: #7439A4;\n}\n.temp-color-5 { /* 70 - 79 */\n  color: #CE6752;\n}\n\n.temp-color-6 { /* 80 - 89 */\n  color: #FF6E04;\n}\n\n.temp-color-7 { /* 90 - 99 */\n  color: #FF4705;\n}\n\n.temp-color-8 { /* 100 - 119*/\n  color: #FF0101;\n}\n\n\n/* Larger than mobile */\n@media (min-width: 350px) {\n  body {\n    overflow-x: hidden;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n       -moz-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n\n  .container{\n    width: 100%;\n    height: 100%;\n    padding: 8px;\n  }\n\n  input[type=text]{\n    min-width: 100%;\n    min-height: 50px;\n    font-weight: bolder;\n    font-size: 2rem;\n    text-align: center;\n  }\n\n  .current-weather-card {\n    max-width: 100%;\n    margin: 0 auto;\n    padding: 10px;\n    border-radius: 1rem;\n  }\n\n  .current-weather-card > div > p {\n    font-weight: bolder;\n    font-size: 3rem;\n  }\n\n  #current-weather-card-temps-container {\n    width: 100%;\n    justify-content: center;\n    gap: 20px;\n  }\n\n  .hourly-forecast-container {\n    max-width: 100%;\n    margin: 15px auto;\n    border-radius: 1rem;\n    overflow: scroll;\n    -webkit-box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5); \n    box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5);\n    padding: 10px;\n\n    font-weight: bolder;\n  }\n\n  .hourly-forecast-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: 100px;\n  }\n\n  .hourly-forecast-card > .time {\n    font-size: 1.2rem;\n  }\n\n  .current-weather-card, .hourly-forecast-container, .forecast-container {\n    background-color: #decfcf;\n  }\n\n  .forecast-container {\n    max-width: 100%;\n    margin: 15px auto;\n    overflow: scroll;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    border-radius: 1rem;\n    -webkit-box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5); \n    box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5);\n    padding: 10px 5px;\n  }\n\n  .forecast-card {\n    border-top: 1px solid #e6e6e6;\n    width: 100%;\n    justify-content: space-evenly;\n    font-weight: bolder;\n  }\n\n  .forecast-card > .weekday {\n    color: white;\n    font-size: 2rem;\n  }\n}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {\n}\n\n/* Larger than tablet */\n@media (min-width: 750px) {\n}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {\n}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {\n  .forecast-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .hourly-forecast-container {\n    border-radius: 1rem;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/Skeleton/css/normalize.css":
/*!****************************************!*\
  !*** ./src/Skeleton/css/normalize.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/Skeleton/css/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Skeleton/css/skeleton.css":
/*!***************************************!*\
  !*** ./src/Skeleton/css/skeleton.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./skeleton.css */ "./node_modules/css-loader/dist/cjs.js!./src/Skeleton/css/skeleton.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Spinner/spinner.css":
/*!*********************************!*\
  !*** ./src/Spinner/spinner.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_spinner_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./spinner.css */ "./node_modules/css-loader/dist/cjs.js!./src/Spinner/spinner.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_spinner_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_spinner_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_spinner_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_spinner_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/CurrentWeather/CurrentWeatherCard.js":
/*!**************************************************!*\
  !*** ./src/CurrentWeather/CurrentWeatherCard.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentWeatherCard": () => (/* binding */ CurrentWeatherCard)
/* harmony export */ });
/* harmony import */ var _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HelperFunctions/HtmlElement */ "./src/HelperFunctions/HtmlElement.js");
/* harmony import */ var _HelperFunctions_tempToColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HelperFunctions/tempToColor */ "./src/HelperFunctions/tempToColor.js");



function CurrentWeatherCard(weatherData = {}, rootNode, cityName) {
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

  const _skeletonRow = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "div",
    classList: ["row"],
  });

  const _skeletonColumn = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "div",
    classList: ["twelve", "columns"],
  });

  const _container = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
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
    const container = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "div",
      classList: [
        "flex",
        "flex-row",
        "flex-justify-center",
        "flex-align-center",
      ],
    });

    const _titleText = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "h2",
      classList: ["m-0"],
      innerText: cityName,
    });

    container.appendChild(_titleText);
    return container;
  })();

  const _temp = (function () {
    const container = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "div",
      classList: [
        "flex",
        "flex-row",
        "flex-justify-center",
        "flex-align-center",
      ],
    });

    const _text = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "p",
      classList: ["m-0", (0,_HelperFunctions_tempToColor__WEBPACK_IMPORTED_MODULE_1__.tempToColor)(parsedWeatherData.temp)],
      id: "main-temp",
      innerText: `${parsedWeatherData.temp}°`,
    });

    container.appendChild(_text);
    return container;
  })();

  const _description = (function () {
    const container = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "div",
      id: "current-weather-card-description-container",
      classList: [
        "flex",
        "flex-row",
        "flex-justify-center",
        "flex-align-center",
      ],
    });

    const _text = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "p",
      classList: ["m-0"],
      innerText: parsedWeatherData.description,
    });

    container.appendChild(_text);

    return container;
  })();

  const _dailyTemps = (function () {
    const container = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "div",
      id: "current-weather-card-temps-container",
      classList: [
        "flex",
        "flex-row",
        "flex-justify-center",
        "flex-algin-center",
      ],
    });

    const _highTemp = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "p",
      classList: ["m-0", "mr-5", (0,_HelperFunctions_tempToColor__WEBPACK_IMPORTED_MODULE_1__.tempToColor)(parsedWeatherData.max)],
      innerText: `H:${parsedWeatherData.max}°`,
    });

    const _lowTemp = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "p",
      classList: ["m-0", "ml-5", (0,_HelperFunctions_tempToColor__WEBPACK_IMPORTED_MODULE_1__.tempToColor)(parsedWeatherData.min)],
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


/***/ }),

/***/ "./src/HelperFunctions/ErrorMessage.js":
/*!*********************************************!*\
  !*** ./src/HelperFunctions/ErrorMessage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorMessage": () => (/* binding */ ErrorMessage)
/* harmony export */ });
/* harmony import */ var _HtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlElement.js */ "./src/HelperFunctions/HtmlElement.js");


function ErrorMessage(rootNode) {
  const _rowContainer = new _HtmlElement_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "div",
    classList: ["row"],
  });

  const _columnContainer = new _HtmlElement_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "div",
    classList: [
      "twelve",
      "columns",
      "flex",
      "flex-justify-center",
      "flex-align-center",
    ],
  });

  const textComponent = new _HtmlElement_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
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


/***/ }),

/***/ "./src/HelperFunctions/HtmlElement.js":
/*!********************************************!*\
  !*** ./src/HelperFunctions/HtmlElement.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlElement": () => (/* binding */ HtmlElement)
/* harmony export */ });
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
function HtmlElement(data = {}) {
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


/***/ }),

/***/ "./src/HelperFunctions/loadImage.js":
/*!******************************************!*\
  !*** ./src/HelperFunctions/loadImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadImage": () => (/* binding */ loadImage)
/* harmony export */ });
/**
 * Asynchronously load images using outside resources.
 * The loadImage() fn creates an image object and returns a promise. The promise
 * is resolved when the image loads successfully or otherwise rejected.
 *
 * This allows you to load an image and only continue when the image is loaded.
 * I use this function to make sure the image is loaded before rendering other
 * elements to the DOM. Otherwise, my other elements show up in the DOM and a
 * few seconds (maybe milliseconds) later, the image shows up. It doesn't look
 * nice when that happens.
 */
function loadImage(src) {
  return new Promise(function (resolve, reject) {
    // Create the new image object.
    var image = new Image();

    /**
     * Add two listeners on the image.
     *
     * load() will be called if the image successfully loads.
     * load() will call the resolve cb, with the image.
     *
     * error() will be called if the image cannot load.
     * error() will call the reject cb, with a message.
     */
    image.addEventListener(
      "load",
      function () {
        resolve(image);
      },
      false
    );
    image.addEventListener(
      "error",
      function () {
        reject(new Error("Cannot load image"));
      },
      false
    );

    /**
     * Set the src of the image. This is done AFTER the load/error event
     * listeners are created.
     */
    image.src = src;
  });
}


/***/ }),

/***/ "./src/HelperFunctions/tempToColor.js":
/*!********************************************!*\
  !*** ./src/HelperFunctions/tempToColor.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tempToColor": () => (/* binding */ tempToColor)
/* harmony export */ });
function tempToColor(temp) {
  if (temp > -10 && temp < 40) {
    return "temp-color-1";
  } else if (temp >= 40 && temp < 50) {
    return "temp-color-2";
  } else if (temp >= 50 && temp < 60) {
    return "temp-color-3";
  } else if (temp >= 60 && temp < 70) {
    return "temp-color-4";
  } else if (temp >= 70 && temp < 80) {
    return "temp-color-5";
  } else if (temp >= 80 && temp < 90) {
    return "temp-color-6";
  } else if (temp >= 90 && temp < 100) {
    return "temp-color-7";
  } else if (temp >= 100 && temp < 120) {
    return "temp-color-8";
  }
}


/***/ }),

/***/ "./src/SearchBar/searchBar.js":
/*!************************************!*\
  !*** ./src/SearchBar/searchBar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchBar": () => (/* binding */ searchBar)
/* harmony export */ });
/* harmony import */ var _HelperFunctions_HtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HelperFunctions/HtmlElement.js */ "./src/HelperFunctions/HtmlElement.js");

function searchBar(rootNode, callBack) {
  const _componentContainer = new _HelperFunctions_HtmlElement_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
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

  const _searchBar = new _HelperFunctions_HtmlElement_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "input",
    attributes: {
      type: "text",
      placeholder: "Enter a city name",
      style: "width: 90%",
    },
    id: "cityName",
  });

  const _focus = function () {
    _searchBar.focus();
  };

  /**
   * Listen for when the user presses the Enter key.
   * The 'callBack' called in this function is passed into this (searchBar) fn.
   * When 'callBack' is called, index.js will receive control over the rest of
   * the script.
   */
  const _handleKeydown = async function (e) {
    if (!(e.key == "Enter" && e.target.value.trim().length > 0)) return;
    if (screen.width < 500) _searchBar.blur();
    callBack(e.target.value.trim());
  };

  const render = function () {
    // Listen for the user pressing the Enter key
    _searchBar.addEventListener("keydown", _handleKeydown);
    _searchBar.addEventListener("click", (e) => {
      e.target.value = "";
    });

    _componentContainer.appendChild(_searchBar);
    rootNode.appendChild(_componentContainer);
    _focus();
  };

  return { render };
}


/***/ }),

/***/ "./src/SevenDayForecast/ForecastCard.js":
/*!**********************************************!*\
  !*** ./src/SevenDayForecast/ForecastCard.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForecastCard": () => (/* binding */ ForecastCard)
/* harmony export */ });
/* harmony import */ var _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HelperFunctions/HtmlElement */ "./src/HelperFunctions/HtmlElement.js");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather.js */ "./src/weather.js");
/* harmony import */ var _HelperFunctions_loadImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HelperFunctions/loadImage */ "./src/HelperFunctions/loadImage.js");
/* harmony import */ var _HelperFunctions_tempToColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HelperFunctions/tempToColor */ "./src/HelperFunctions/tempToColor.js");





function ForecastCard(weatherData = {}) {
  // The weather image.
  let image;

  // Process the weatherData upon instantiation
  const parsedWeatherData = (function () {
    let { max, min } = weatherData.temp;
    let { dt, pop } = weatherData;
    const { icon } = weatherData.weather[0];

    dt = new Intl.DateTimeFormat([], { weekday: "short" }).format(
      new Date(Number.parseInt(dt.toString() + "000"))
    );
    pop = Math.floor(pop * 100);
    min = Math.round(min);
    max = Math.round(max);
    return {
      dt,
      max,
      min,
      pop,
      icon,
    };
  })();

  const container = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "div",
    classList: ["forecast-card", "flex", "flex-row", "flex-align-center"],
  });

  /**
   * Try to load an image from OpenWeather API. If this process fails, we will
   * consume the error and continue with processing the user request. We can
   * silently consume this error because we will simply not display an image if
   * there is an error. Why log or stop execution simply because we can display
   * an image? Rather, we continue with our process and forget about showing an
   * image to the user.
   */
  const load = async function () {
    const url = _weather_js__WEBPACK_IMPORTED_MODULE_1__["default"].getIconSrc(parsedWeatherData.icon);
    try {
      image = await (0,_HelperFunctions_loadImage__WEBPACK_IMPORTED_MODULE_2__.loadImage)(url);
      return true;
    } catch (error) {
      /**
       * Return true. We will consume the error returned by the API and just
       * not show an image. No big deal.
       */
      return true;
    }
  };

  const render = function (parentNode) {
    container.appendChild(
      new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
        type: "p",
        classList: ["weekday"],
        innerText: parsedWeatherData.dt,
      })
    );
    container.appendChild(image);
    container.appendChild(
      new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
        typ: "p",
        innerText: `${parsedWeatherData.pop}% rain`,
      })
    );
    container.appendChild(
      new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
        classList: ["low-temp", (0,_HelperFunctions_tempToColor__WEBPACK_IMPORTED_MODULE_3__.tempToColor)(parsedWeatherData.min)],
        type: "p",
        innerText: `L: ${parsedWeatherData.min}°`,
      })
    );
    container.appendChild(
      new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
        classList: ["high-temp", (0,_HelperFunctions_tempToColor__WEBPACK_IMPORTED_MODULE_3__.tempToColor)(parsedWeatherData.max)],
        type: "p",
        innerText: `H: ${parsedWeatherData.max}°`,
      })
    );

    parentNode.appendChild(container);
  };

  return { render, load };
}


/***/ }),

/***/ "./src/SevenDayForecast/sevenDayForecast.js":
/*!**************************************************!*\
  !*** ./src/SevenDayForecast/sevenDayForecast.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sevenDayForecast": () => (/* binding */ sevenDayForecast)
/* harmony export */ });
/* harmony import */ var _ForecastCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForecastCard.js */ "./src/SevenDayForecast/ForecastCard.js");
/* harmony import */ var _HelperFunctions_HtmlElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HelperFunctions/HtmlElement.js */ "./src/HelperFunctions/HtmlElement.js");



/**
 * This component loads the seven day forecast.
 */
function sevenDayForecast(rootNode) {
  // Store each forecast card in this array for future iteration.
  let dailyForecasts = [];

  let _forecastContainer = new _HelperFunctions_HtmlElement_js__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
    type: "div",
    classList: ["forecast-container"],
  });

  /**
   * Initialize each forecast card by creating an instance of ForecastCard and
   * calling .load() on the card. .load() is an async operation that always
   * returns a resolved promise - it cannot fail. This is done on purpose. The
   * only thing that .load() is doing is attempting to retrieve an image from
   * the OpenWeather API. If an image cannot be retrieved then we simply return
   * a resolved promise and there is no image to display for that forecast card.
   */
  const loadForecast = async function (weatherData = {}) {
    weatherData.daily.forEach((day) => {
      dailyForecasts.push(new _ForecastCard_js__WEBPACK_IMPORTED_MODULE_0__.ForecastCard(day));
    });

    /**
     * I want forecast.load() to be called in parallel for all 7 of the
     * forecasts. I use map to map over the dailyForecasts and call .load() on
     * each forecast. .load() will fetch an image from OpenWeather API. This
     * is slow, and I dont want to render text on the screen AND THEN images
     * after a slight delay. So I use Promise.all() to make sure all images
     * have been fetched and loaded before proceeding with rendering.
     */
    await Promise.all(dailyForecasts.map((forecast) => forecast.load()));
    return true;
  };

  /**
   * This function renders each forecast card to the dom.
   */
  const renderForecast = function () {
    dailyForecasts.forEach((forecast) => forecast.render(_forecastContainer));
    rootNode.appendChild(_forecastContainer);
  };

  /**
   * This function removes the forecast cards from the dom. This is needed so
   * when users make subsequent requests, the previous results are removed.
   */
  const removeForecasts = function () {
    _forecastContainer.remove();
    _forecastContainer = new _HelperFunctions_HtmlElement_js__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
      type: "div",
      classList: ["forecast-container"],
    });
    dailyForecasts = [];
  };

  return { loadForecast, renderForecast, removeForecasts };
}


/***/ }),

/***/ "./src/Spinner/spinner.js":
/*!********************************!*\
  !*** ./src/Spinner/spinner.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "spinner": () => (/* binding */ spinner)
/* harmony export */ });
/* harmony import */ var _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HelperFunctions/HtmlElement */ "./src/HelperFunctions/HtmlElement.js");
/* harmony import */ var _spinner_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.css */ "./src/Spinner/spinner.css");



function spinner() {
  const rootNode = document.querySelector("body");

  const container = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "div",
    id: "spinner-container",
  });

  const spinner = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
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


/***/ }),

/***/ "./src/hourlyForecast/HourlyForecastCard.js":
/*!**************************************************!*\
  !*** ./src/hourlyForecast/HourlyForecastCard.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HourlyForecastCard": () => (/* binding */ HourlyForecastCard)
/* harmony export */ });
/* harmony import */ var _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HelperFunctions/HtmlElement */ "./src/HelperFunctions/HtmlElement.js");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather.js */ "./src/weather.js");
/* harmony import */ var _HelperFunctions_loadImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HelperFunctions/loadImage */ "./src/HelperFunctions/loadImage.js");
/* harmony import */ var _HelperFunctions_tempToColor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HelperFunctions/tempToColor.js */ "./src/HelperFunctions/tempToColor.js");





function HourlyForecastCard(weatherData) {
  let image;

  const _parsedWeatherData = (function () {
    let { temp, dt, pop } = weatherData;
    const { icon } = weatherData.weather[0];
    const dateTime = new Date(Number.parseInt(dt.toString() + "000"));
    const time = new Intl.DateTimeFormat("en-US", {
      timeStyle: "short",
    }).format(dateTime);
    pop = Math.floor(pop * 100);
    temp = Math.round(temp);
    return {
      temp,
      icon,
      time,
      pop,
    };
  })();

  const _container = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "div",
    classList: ["hourly-forecast-card"],
  });

  /**
   * Try to load an image from OpenWeather API. If this process fails, we will
   * consume the error and continue with processing the user request. We can
   * silently consume this error because we will simply not display an image if
   * there is an error. Why log or stop execution simply because we can display
   * an image? Rather, we continue with our process and forget about showing an
   * image to the user.
   */
  const load = async function () {
    const url = _weather_js__WEBPACK_IMPORTED_MODULE_1__["default"].getIconSrc(_parsedWeatherData.icon);
    try {
      image = await (0,_HelperFunctions_loadImage__WEBPACK_IMPORTED_MODULE_2__.loadImage)(url);
      return true;
    } catch (error) {
      console.log(error);
      /**
       * Return true. We will consume the error returned by the API and just
       * not show an image. No big deal.
       */
      return true;
    }
  };

  const render = function (parentNode) {
    _container.appendChild(
      new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
        type: "p",
        classList: ["time"],
        innerText: `${_parsedWeatherData.time}`,
      })
    );
    _container.appendChild(image);
    // Show the rain percentage if it is over 20%
    if (_parsedWeatherData.pop > 20) {
      _container.appendChild(
        new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
          type: "p",
          innerText: `${_parsedWeatherData.pop}%`,
        })
      );
    }
    _container.appendChild(
      new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
        type: "p",
        classList: [(0,_HelperFunctions_tempToColor_js__WEBPACK_IMPORTED_MODULE_3__.tempToColor)(_parsedWeatherData.temp)],
        innerText: `${_parsedWeatherData.temp}°`,
      })
    );
    parentNode.appendChild(_container);
  };

  return { render, load };
}


/***/ }),

/***/ "./src/hourlyForecast/hourlyForecast.js":
/*!**********************************************!*\
  !*** ./src/hourlyForecast/hourlyForecast.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hourlyForecast": () => (/* binding */ hourlyForecast)
/* harmony export */ });
/* harmony import */ var _HourlyForecastCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HourlyForecastCard */ "./src/hourlyForecast/HourlyForecastCard.js");
/* harmony import */ var _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HelperFunctions/HtmlElement */ "./src/HelperFunctions/HtmlElement.js");



function hourlyForecast(rootNode) {
  // Store each forecast card in this array for future iteration.
  let hourlyForecasts = [];

  let _hourlyForecastContainer = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
    type: "div",
    classList: [
      "hourly-forecast-container",
      "flex",
      "flex-row",
      "flex-no-wrap",
    ],
  });

  /**
   * Initialize each forecast card by creating an instance of ForecastCard and
   * calling .load() on the card. .load() is an async operation that always
   * returns a resolved promise - it cannot fail. This is done on purpose. The
   * only thing that .load() is doing is attempting to retrieve an image from
   * the OpenWeather API. If an image cannot be retrieved then we simply return
   * a resolved promise and there is no image to display for that forecast card.
   */
  const loadForecast = async function (weatherData) {
    const hourlyForecastData = weatherData.hourly.splice(23);

    hourlyForecastData.forEach((hour, index) => {
      const weatherCard = new _HourlyForecastCard__WEBPACK_IMPORTED_MODULE_0__.HourlyForecastCard(hour);
      hourlyForecasts.push(weatherCard);
    });
    /**
     * I want forecast.load() to be called in parallel for all of the
     * forecasts. I use map to map over the hourlyForecasts and call .load() on
     * each forecast. .load() will fetch an image from OpenWeather API. This
     * is slow, and I dont want to render text on the screen AND THEN images
     * after a slight delay. So I use Promise.all() to make sure all images
     * have been fetched and loaded before proceeding with rendering.
     */
    await Promise.all(hourlyForecasts.map((forecast) => forecast.load()));
    return true;
  };

  /**
   * This function renders each forecast card to the dom.
   */
  const renderForecast = function () {
    hourlyForecasts.forEach((forecast) =>
      forecast.render(_hourlyForecastContainer)
    );
    rootNode.appendChild(_hourlyForecastContainer);
  };

  /**
   * This function removes the forecast cards from the dom. This is needed so
   * when users make subsequent requests, the previous results are removed.
   */
  const removeForecasts = function () {
    _hourlyForecastContainer.remove();
    _hourlyForecastContainer = new _HelperFunctions_HtmlElement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
      type: "div",
      classList: [
        "hourly-forecast-container",
        "flex",
        "flex-row",
        "flex-no-wrap",
      ],
    });
    hourlyForecasts = [];
  };

  return { loadForecast, renderForecast, removeForecasts };
}


/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * An abstraction for interacting with the OpenWeather api.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  /**
   * This project will run on GitHub pages. Therefore there will not be a server
   * where I can inject env. vars. This is OKAY because the OpenWeather API is
   * free.
   */
  const API_KEY = "ac76c81fc03b816e49b3d06f76579506";

  /**
   * Returns a promise object with coordinates
   * { lat: n, long: x}
   * On error return the error message.
   */
  async function _getCoords(cityName) {
    let data;
    const geocodeUrl =
      "https://api.openweathermap.org/geo/1.0/direct" +
      `?q=${cityName}&appid=${API_KEY}`;
    try {
      const response = await fetch(geocodeUrl);
      data = await response.json();
    } catch (error) {
      return Promise.reject(error.message);
    }

    if (data.length > 0) {
      const { lat, lon } = data[0];
      return { lat, lon };
    } else {
      throw new InvalidSearchError(`No data for ${cityName}`);
    }
  }

  /**
   * Get the weather for a given city name. If the city is not found then
   * propagate the error message to the caller.
   */
  async function getWeather(cityName) {
    let data;

    try {
      const { lat, lon } = await _getCoords(cityName);
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/onecall" +
        `?lat=${lat}&lon=${lon}&exclude=minutely` +
        `&units=imperial` +
        `&appid=${API_KEY}`;

      const response = await fetch(apiUrl);
      data = await response.json();
    } catch (error) {
      throw error;
    }
    return data;
  }

  /**
   * Return the icon url for the provided icon code.
   * This is the url to be used as an img.src
   */
  function getIconSrc(iconCode, options = { large: false }) {
    if (options.large) {
      return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    } else {
      return `https://openweathermap.org/img/wn/${iconCode}.png`;
    }
  }

  return { getWeather, getIconSrc };
})());

class InvalidSearchError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidSearchError";
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Skeleton_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Skeleton/css/normalize.css */ "./src/Skeleton/css/normalize.css");
/* harmony import */ var _Skeleton_css_skeleton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Skeleton/css/skeleton.css */ "./src/Skeleton/css/skeleton.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _SearchBar_searchBar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBar/searchBar.js */ "./src/SearchBar/searchBar.js");
/* harmony import */ var _Spinner_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Spinner/spinner */ "./src/Spinner/spinner.js");
/* harmony import */ var _HelperFunctions_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HelperFunctions/ErrorMessage */ "./src/HelperFunctions/ErrorMessage.js");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _CurrentWeather_CurrentWeatherCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CurrentWeather/CurrentWeatherCard */ "./src/CurrentWeather/CurrentWeatherCard.js");
/* harmony import */ var _SevenDayForecast_sevenDayForecast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SevenDayForecast/sevenDayForecast */ "./src/SevenDayForecast/sevenDayForecast.js");
/* harmony import */ var _hourlyForecast_hourlyForecast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hourlyForecast/hourlyForecast */ "./src/hourlyForecast/hourlyForecast.js");
/**
 * Import the required CSS files for Skeleton to work.
 * These are CSS files created for Skeleton. I did not create these.
 */



/**
 * Import the layout styling. This is where layout classes are defined.
 */










(function () {
  const rootNode = document.querySelector("#root");
  const spinningLoader = (0,_Spinner_spinner__WEBPACK_IMPORTED_MODULE_4__.spinner)();
  const errorMessageComponent = new _HelperFunctions_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.ErrorMessage(rootNode);
  let currentWeatherCard;
  let sevenDayForecastLoader = (0,_SevenDayForecast_sevenDayForecast__WEBPACK_IMPORTED_MODULE_8__.sevenDayForecast)(rootNode);
  let hourlyForecastLoader = (0,_hourlyForecast_hourlyForecast__WEBPACK_IMPORTED_MODULE_9__.hourlyForecast)(rootNode);
  (0,_SearchBar_searchBar_js__WEBPACK_IMPORTED_MODULE_3__.searchBar)(rootNode, loadResults).render();

  /**
   * This is the function that gets fired when the user searches in the search
   * bar. This function is passed to the function call for creating the
   * search bar component.
   */
  async function loadResults(cityName) {
    let weatherData;
    spinningLoader.start();
    clearPreviousSearchResults();
    try {
      weatherData = await _weather__WEBPACK_IMPORTED_MODULE_6__["default"].getWeather(cityName);
      await Promise.all([
        hourlyForecastLoader.loadForecast(weatherData),
        sevenDayForecastLoader.loadForecast(weatherData),
      ]);
    } catch (error) {
      if (error.name == "InvalidSearchError") {
        errorMessageComponent.setErrorMessage(error.message).render();
        spinningLoader.stop();
      } else {
        throw error;
      }
      return;
    }

    loadCurrentWeather(weatherData, cityName);
    hourlyForecastLoader.renderForecast();
    sevenDayForecastLoader.renderForecast();
    spinningLoader.stop();
  }

  /**
   * Load the current weather card. This is the top most component in the DOM.
   */
  function loadCurrentWeather(weatherData, cityName) {
    currentWeatherCard = new _CurrentWeather_CurrentWeatherCard__WEBPACK_IMPORTED_MODULE_7__.CurrentWeatherCard(
      weatherData,
      rootNode,
      cityName
    );
    currentWeatherCard.render();
  }

  /**
   * Clear out the screen so we can populate it with new results.
   */
  function clearPreviousSearchResults() {
    errorMessageComponent.remove();
    if (currentWeatherCard) currentWeatherCard.remove();
    sevenDayForecastLoader.removeForecasts();
    hourlyForecastLoader.removeForecasts();
  }
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxPQUFPLGlCQUFpQixXQUFXLE9BQU8saUJBQWlCLFdBQVcsT0FBTyxpQkFBaUIsV0FBVyxPQUFPLGlCQUFpQixXQUFXLE1BQU0saUJBQWlCLFdBQVcsT0FBTyxpQkFBaUIsV0FBVyxPQUFPLGlCQUFpQixXQUFXLE9BQU8saUJBQWlCLFdBQVcsUUFBUSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sNEJBQTRCLDJCQUEyQixHQUFHLGdCQUFnQixpQkFBaUIsaUJBQWlCLEdBQUcsVUFBVSxvQkFBb0IscUJBQXFCLDBCQUEwQix1QkFBdUIsNkJBQTZCLGdDQUFnQyw0QkFBNEIsK0JBQStCLCtCQUErQixHQUFHLFdBQVcsa0JBQWtCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxrQkFBa0IsMkJBQTJCLEdBQUcsa0JBQWtCLHNCQUFzQixHQUFHLDBCQUEwQiw0QkFBNEIsR0FBRyx3QkFBd0Isa0NBQWtDLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLFlBQVksMEJBQTBCLEdBQUcsVUFBVSxjQUFjLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyxXQUFXLHNCQUFzQixHQUFHLGlFQUFpRSxvQkFBb0IsR0FBRyxvQkFBb0IsaUNBQWlDLEdBQUcsb0JBQW9CLGdDQUFnQyxHQUFHLG9CQUFvQixnQ0FBZ0MsR0FBRyxvQkFBb0IsZ0NBQWdDLEdBQUcsa0JBQWtCLGdDQUFnQyxHQUFHLG9CQUFvQixnQ0FBZ0MsR0FBRyxvQkFBb0IsZ0NBQWdDLEdBQUcsb0JBQW9CLGlDQUFpQyxHQUFHLDJEQUEyRCxVQUFVLHlCQUF5QixrQkFBa0IscUNBQXFDLHFDQUFxQyxxQ0FBcUMsS0FBSyxpQkFBaUIsa0JBQWtCLG1CQUFtQixtQkFBbUIsS0FBSyx1QkFBdUIsc0JBQXNCLHVCQUF1QiwwQkFBMEIsc0JBQXNCLHlCQUF5QixLQUFLLDZCQUE2QixzQkFBc0IscUJBQXFCLG9CQUFvQiwwQkFBMEIsS0FBSyx1Q0FBdUMsMEJBQTBCLHNCQUFzQixLQUFLLDZDQUE2QyxrQkFBa0IsOEJBQThCLGdCQUFnQixLQUFLLGtDQUFrQyxzQkFBc0Isd0JBQXdCLDBCQUEwQix1QkFBdUIsa0VBQWtFLHlEQUF5RCxvQkFBb0IsNEJBQTRCLEtBQUssNkJBQTZCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLG1CQUFtQixxQkFBcUIsd0JBQXdCLEtBQUsscUNBQXFDLHdCQUF3QixLQUFLLDhFQUE4RSxnQ0FBZ0MsS0FBSywyQkFBMkIsc0JBQXNCLHdCQUF3Qix1QkFBdUIsc0JBQXNCLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLDRCQUE0QixrRUFBa0UseURBQXlELHdCQUF3QixLQUFLLHNCQUFzQixvQ0FBb0Msa0JBQWtCLG9DQUFvQywwQkFBMEIsS0FBSyxpQ0FBaUMsbUJBQW1CLHNCQUFzQixLQUFLLEdBQUcsZ0dBQWdHLEdBQUcseURBQXlELEdBQUcsMkRBQTJELEdBQUcsOERBQThELHdCQUF3QixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsS0FBSyxrQ0FBa0MsMEJBQTBCLEtBQUssR0FBRyxtQkFBbUI7QUFDOTdTO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBNkc7QUFDN0c7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywwRkFBTzs7OztBQUl1RDtBQUMvRSxPQUFPLGlFQUFlLDBGQUFPLElBQUksaUdBQWMsR0FBRyxpR0FBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUE0RztBQUM1RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHlGQUFPOzs7O0FBSXNEO0FBQzlFLE9BQU8saUVBQWUseUZBQU8sSUFBSSxnR0FBYyxHQUFHLGdHQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXdHO0FBQ3hHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJa0Q7QUFDMUUsT0FBTyxpRUFBZSx3RkFBTyxJQUFJLCtGQUFjLEdBQUcsK0ZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNkQ7QUFDQTs7QUFFdEQsNENBQTRDO0FBQ25EO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsY0FBYztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsMkJBQTJCLHFFQUFXO0FBQ3RDO0FBQ0E7QUFDQSxHQUFHOztBQUVILDhCQUE4QixxRUFBVztBQUN6QztBQUNBO0FBQ0EsR0FBRzs7QUFFSCx5QkFBeUIscUVBQVc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSwwQkFBMEIscUVBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLDJCQUEyQixxRUFBVztBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsMEJBQTBCLHFFQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxzQkFBc0IscUVBQVc7QUFDakM7QUFDQSx5QkFBeUIseUVBQVc7QUFDcEM7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSwwQkFBMEIscUVBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsc0JBQXNCLHFFQUFXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0EsMEJBQTBCLHFFQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLDBCQUEwQixxRUFBVztBQUNyQztBQUNBLGlDQUFpQyx5RUFBVztBQUM1QyxzQkFBc0Isc0JBQXNCO0FBQzVDLEtBQUs7O0FBRUwseUJBQXlCLHFFQUFXO0FBQ3BDO0FBQ0EsaUNBQWlDLHlFQUFXO0FBQzVDLHNCQUFzQixzQkFBc0I7QUFDNUMsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSitDOztBQUV4QztBQUNQLDRCQUE0Qix3REFBVztBQUN2QztBQUNBO0FBQ0EsR0FBRzs7QUFFSCwrQkFBK0Isd0RBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsNEJBQTRCLHdEQUFXO0FBQ3ZDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDTyw4QkFBOEI7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQzlDTztBQUNQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJnRTtBQUN6RDtBQUNQLGtDQUFrQyx3RUFBVztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILHlCQUF5Qix3RUFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRDZEO0FBQ3pCO0FBQ3FCO0FBQ0k7O0FBRXRELHNDQUFzQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckIsVUFBVSxVQUFVO0FBQ3BCLFlBQVksT0FBTzs7QUFFbkIsdUNBQXVDLGtCQUFrQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILHdCQUF3QixxRUFBVztBQUNuQztBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOERBQWtCO0FBQ2xDO0FBQ0Esb0JBQW9CLHFFQUFTO0FBQzdCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLHFFQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFVLHFFQUFXO0FBQ3JCO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QyxPQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVUscUVBQVc7QUFDckIsZ0NBQWdDLHlFQUFXO0FBQzNDO0FBQ0EseUJBQXlCLHNCQUFzQjtBQUMvQyxPQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVUscUVBQVc7QUFDckIsaUNBQWlDLHlFQUFXO0FBQzVDO0FBQ0EseUJBQXlCLHNCQUFzQjtBQUMvQyxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZpRDtBQUNlOztBQUVoRTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUEsK0JBQStCLHdFQUFXO0FBQzFDO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQSw4QkFBOEIsMERBQVk7QUFDMUMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix3RUFBVztBQUN4QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlENkQ7QUFDdEM7O0FBRWhCO0FBQ1A7O0FBRUEsd0JBQXdCLHFFQUFXO0FBQ25DO0FBQ0E7QUFDQSxHQUFHOztBQUVILHNCQUFzQixxRUFBVztBQUNqQztBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUI2RDtBQUN6QjtBQUNxQjtBQUNPOztBQUV6RDtBQUNQOztBQUVBO0FBQ0EsVUFBVSxnQkFBZ0I7QUFDMUIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCx5QkFBeUIscUVBQVc7QUFDcEM7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhEQUFrQjtBQUNsQztBQUNBLG9CQUFvQixxRUFBUztBQUM3QjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLHFFQUFXO0FBQ3JCO0FBQ0E7QUFDQSxzQkFBc0Isd0JBQXdCO0FBQzlDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxRUFBVztBQUN2QjtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0MsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVUscUVBQVc7QUFDckI7QUFDQSxvQkFBb0IsNEVBQVc7QUFDL0Isc0JBQXNCLHdCQUF3QjtBQUM5QyxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRjBEO0FBQ0c7O0FBRXREO0FBQ1A7QUFDQTs7QUFFQSxxQ0FBcUMscUVBQVc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLG1FQUFrQjtBQUNoRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMscUVBQVc7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUyxTQUFTLFFBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLFdBQVc7QUFDekIsZUFBZTtBQUNmLE1BQU07QUFDTixrREFBa0QsU0FBUztBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsV0FBVztBQUN6QjtBQUNBO0FBQ0EsZ0JBQWdCLElBQUksT0FBTyxJQUFJO0FBQy9CO0FBQ0Esa0JBQWtCLFFBQVE7O0FBRTFCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsY0FBYztBQUMxRDtBQUNBLGtEQUFrRCxTQUFTO0FBQzNELE1BQU07QUFDTixrREFBa0QsU0FBUztBQUMzRDtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDLEdBQUcsRUFBQzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMvRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ3NDO0FBQ0Q7O0FBRXJDO0FBQ0E7QUFDQTtBQUNxQjs7QUFFZ0M7QUFDVDtBQUNrQjtBQUM5QjtBQUN5QztBQUNGO0FBQ047O0FBRWpFO0FBQ0E7QUFDQSx5QkFBeUIseURBQU87QUFDaEMsb0NBQW9DLHVFQUFZO0FBQ2hEO0FBQ0EsK0JBQStCLG9GQUFnQjtBQUMvQyw2QkFBNkIsOEVBQWM7QUFDM0MsRUFBRSxrRUFBUzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyREFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0ZBQWtCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9Ta2VsZXRvbi9jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL1NrZWxldG9uL2Nzcy9za2VsZXRvbi5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9TcGlubmVyL3NwaW5uZXIuY3NzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL1NrZWxldG9uL2Nzcy9ub3JtYWxpemUuY3NzPzZhNGIiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9Ta2VsZXRvbi9jc3Mvc2tlbGV0b24uY3NzP2VkNWUiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9TcGlubmVyL3NwaW5uZXIuY3NzP2ExZjEiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvQ3VycmVudFdlYXRoZXIvQ3VycmVudFdlYXRoZXJDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvSGVscGVyRnVuY3Rpb25zL0Vycm9yTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL0hlbHBlckZ1bmN0aW9ucy9IdG1sRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL0hlbHBlckZ1bmN0aW9ucy9sb2FkSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9IZWxwZXJGdW5jdGlvbnMvdGVtcFRvQ29sb3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9TZWFyY2hCYXIvc2VhcmNoQmFyLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvU2V2ZW5EYXlGb3JlY2FzdC9Gb3JlY2FzdENhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9TZXZlbkRheUZvcmVjYXN0L3NldmVuRGF5Rm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9TcGlubmVyL3NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9ob3VybHlGb3JlY2FzdC9Ib3VybHlGb3JlY2FzdENhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9ob3VybHlGb3JlY2FzdC9ob3VybHlGb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJBcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJBcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHYzLjAuMiB8IE1JVCBMaWNlbnNlIHwgZ2l0LmlvL25vcm1hbGl6ZSAqL1xcblxcbi8qKlxcbiAqIDEuIFNldCBkZWZhdWx0IGZvbnQgZmFtaWx5IHRvIHNhbnMtc2VyaWYuXFxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXFxuICogICAgdXNlciB6b29tLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IC8qIDEgKi9cXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYW55IEhUTUw1IGVsZW1lbnQgaW4gSUUgOC85LlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgZGV0YWlsc2Agb3IgYHN1bW1hcnlgIGluIElFIDEwLzExXFxuICogYW5kIEZpcmVmb3guXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBtYWluYCBpbiBJRSAxMS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWFpbixcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA4LzkuXFxuICogMi4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBgcHJvZ3Jlc3NgIGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbmF1ZGlvLFxcbmNhbnZhcyxcXG5wcm9ncmVzcyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYFtoaWRkZW5dYCBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC5cXG4gKiBIaWRlIHRoZSBgdGVtcGxhdGVgIGVsZW1lbnQgaW4gSUUgOC85LzExLCBTYWZhcmksIGFuZCBGaXJlZm94IDwgMjIuXFxuICovXFxuXFxuW2hpZGRlbl0sXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogTGlua3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5kZm4ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHZhcmlhYmxlIGBoMWAgZm9udC1zaXplIGFuZCBtYXJnaW4gd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgXFxuICogY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgLyogbWFyZ2luOiAwLjY3ZW0gMDsgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQ6ICNmZjA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYW5kIHZhcmlhYmxlIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBvdmVyZmxvdyBub3QgaGlkZGVuIGluIElFIDkvMTAvMTEuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgOC85IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5cXG5ociB7XFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIENvbnRhaW4gb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBvZGQgYGVtYC11bml0IGZvbnQgc2l6ZSByZW5kZXJpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnByZSxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogS25vd24gbGltaXRhdGlvbjogYnkgZGVmYXVsdCwgQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWCBhbGxvdyB2ZXJ5IGxpbWl0ZWRcXG4gKiBzdHlsaW5nIG9mIGBzZWxlY3RgLCB1bmxlc3MgYSBgYm9yZGVyYCBwcm9wZXJ0eSBpcyBzZXQuXFxuICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkLlxcbiAqICAgIEtub3duIGlzc3VlOiBhZmZlY3RzIGNvbG9yIG9mIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogMy4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbiAgbWFyZ2luOiAwOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYG92ZXJmbG93YCBzZXQgdG8gYGhpZGRlbmAgaW4gSUUgOC85LzEwLzExLlxcbiAqL1xcblxcbmJ1dHRvbiB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXFxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LCBJRSA4LzkvMTAvMTEsIGFuZCBPcGVyYS5cXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXFxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0sIC8qIDEgKi9cXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKi9cXG5cXG5idXR0b25bZGlzYWJsZWRdLFxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIEZpcmVmb3ggNCsgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXFxuICogdGhlIFVBIHN0eWxlc2hlZXQuXFxuICovXFxuXFxuaW5wdXQge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyoqXFxuICogSXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBkb24ndCBhdHRlbXB0IHRvIHN0eWxlIHRoZXNlIGVsZW1lbnRzLlxcbiAqIEZpcmVmb3gncyBpbXBsZW1lbnRhdGlvbiBkb2Vzbid0IHJlc3BlY3QgYm94LXNpemluZywgcGFkZGluZywgb3Igd2lkdGguXFxuICpcXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAgaW4gSUUgOC85LzEwLlxcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogRml4IHRoZSBjdXJzb3Igc3R5bGUgZm9yIENocm9tZSdzIGluY3JlbWVudC9kZWNyZW1lbnQgYnV0dG9ucy4gRm9yIGNlcnRhaW5cXG4gKiBgZm9udC1zaXplYCB2YWx1ZXMgb2YgdGhlIGBpbnB1dGAsIGl0IGNhdXNlcyB0aGUgY3Vyc29yIHN0eWxlIG9mIHRoZVxcbiAqIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gYGRlZmF1bHRgIHRvIGB0ZXh0YC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIGFuZCBDaHJvbWVcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIGFuZCBDaHJvbWUgb24gT1MgWC5cXG4gKiBTYWZhcmkgKGJ1dCBub3QgQ2hyb21lKSBjbGlwcyB0aGUgY2FuY2VsIGJ1dHRvbiB3aGVuIHRoZSBzZWFyY2ggaW5wdXQgaGFzXFxuICogcGFkZGluZyAoYW5kIGB0ZXh0ZmllbGRgIGFwcGVhcmFuY2UpLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGBjb2xvcmAgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA4LzkvMTAvMTEuXFxuICogMi4gUmVtb3ZlIHBhZGRpbmcgc28gcGVvcGxlIGFyZW4ndCBjYXVnaHQgb3V0IGlmIHRoZXkgemVybyBvdXQgZmllbGRzZXRzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3JkZXI6IDA7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDgvOS8xMC8xMS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogRG9uJ3QgaW5oZXJpdCB0aGUgYGZvbnQtd2VpZ2h0YCAoYXBwbGllZCBieSBhIHJ1bGUgYWJvdmUpLlxcbiAqIE5PVEU6IHRoZSBkZWZhdWx0IGNhbm5vdCBzYWZlbHkgYmUgY2hhbmdlZCBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYLlxcbiAqL1xcblxcbm9wdGdyb3VwIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBUYWJsZXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cXG4gKi9cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbnRkLFxcbnRoIHtcXG4gIHBhZGRpbmc6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9Ta2VsZXRvbi9jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyREFBMkQ7O0FBRTNEOzs7O0VBSUU7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7QUFDWDs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7OztFQUtFOztBQUVGOzs7Ozs7Ozs7Ozs7O0VBYUUsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7Ozs7RUFJRSxxQkFBcUIsRUFBRSxNQUFNO0VBQzdCLHdCQUF3QixFQUFFLE1BQU07QUFDbEM7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsYUFBYTtBQUNmOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsVUFBVTtBQUNaOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLGlDQUFpQztFQUNqQyxjQUFjO0FBQ2hCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7OztFQUtFOztBQUVGOzs7OztFQUtFLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGFBQWEsRUFBRSxNQUFNO0VBQ3JCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOztFQUVFOztBQUVGO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7OztFQUtFOztBQUVGOztFQUVFLG9CQUFvQjtBQUN0Qjs7QUFFQTs7Ozs7O0VBTUU7O0FBRUY7Ozs7RUFJRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGVBQWUsRUFBRSxNQUFNO0FBQ3pCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7Ozs7OztFQU1FOztBQUVGOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7Ozs7RUFJRTs7QUFFRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7Ozs7RUFJRTs7QUFFRjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsNEJBQTRCO0VBQzVCLCtCQUErQixFQUFFLE1BQU07RUFDdkMsdUJBQXVCO0FBQ3pCOztBQUVBOzs7O0VBSUU7O0FBRUY7O0VBRUUsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsU0FBUyxFQUFFLE1BQU07RUFDakIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjMuMC4yIHwgTUlUIExpY2Vuc2UgfCBnaXQuaW8vbm9ybWFsaXplICovXFxuXFxuLyoqXFxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXG4gKiAgICB1c2VyIHpvb20uXFxuICovXFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBhbnkgSFRNTDUgZWxlbWVudCBpbiBJRSA4LzkuXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBkZXRhaWxzYCBvciBgc3VtbWFyeWAgaW4gSUUgMTAvMTFcXG4gKiBhbmQgRmlyZWZveC5cXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYG1haW5gIGluIElFIDExLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tYWluLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXG4gKiAyLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxuYXVkaW8sXFxuY2FudmFzLFxcbnByb2dyZXNzLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgW2hpZGRlbl1gIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLlxcbiAqIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSA4LzkvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cXG4gKi9cXG5cXG5baGlkZGVuXSxcXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBMaW5rc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC8xMSwgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmRmbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICAvKiBtYXJnaW46IDAuNjdlbSAwOyAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZDogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgYWZmZWN0aW5nIGBsaW5lLWhlaWdodGAgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IG92ZXJmbG93IG5vdCBoaWRkZW4gaW4gSUUgOS8xMC8xMS5cXG4gKi9cXG5cXG5zdmc6bm90KDpyb290KSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxcbiAqL1xcblxcbmhyIHtcXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxcbiAqIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cXG4gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXFxuICogMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxuICBtYXJnaW46IDA7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgb3ZlcmZsb3dgIHNldCB0byBgaGlkZGVuYCBpbiBJRSA4LzkvMTAvMTEuXFxuICovXFxuXFxuYnV0dG9uIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3gsIElFIDgvOS8xMC8xMSwgYW5kIE9wZXJhLlxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5cXG5pbnB1dCB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IGRvbid0IGF0dGVtcHQgdG8gc3R5bGUgdGhlc2UgZWxlbWVudHMuXFxuICogRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cXG4gKlxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxcbiAqIGBmb250LXNpemVgIHZhbHVlcyBvZiB0aGUgYGlucHV0YCwgaXQgY2F1c2VzIHRoZSBjdXJzb3Igc3R5bGUgb2YgdGhlXFxuICogZGVjcmVtZW50IGJ1dHRvbiB0byBjaGFuZ2UgZnJvbSBgZGVmYXVsdGAgdG8gYHRleHRgLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgYW5kIENocm9tZVxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxcbiAqIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcXG4gKiBwYWRkaW5nIChhbmQgYHRleHRmaWVsZGAgYXBwZWFyYW5jZSkuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJvcmRlcjogMDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LzEwLzExLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBEb24ndCBpbmhlcml0IHRoZSBgZm9udC13ZWlnaHRgIChhcHBsaWVkIGJ5IGEgcnVsZSBhYm92ZSkuXFxuICogTk9URTogdGhlIGRlZmF1bHQgY2Fubm90IHNhZmVseSBiZSBjaGFuZ2VkIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFguXFxuICovXFxuXFxub3B0Z3JvdXAge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIFRhYmxlc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxudGQsXFxudGgge1xcbiAgcGFkZGluZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4qIFNrZWxldG9uIFYyLjAuNFxcbiogQ29weXJpZ2h0IDIwMTQsIERhdmUgR2FtYWNoZVxcbiogd3d3LmdldHNrZWxldG9uLmNvbVxcbiogRnJlZSB0byB1c2UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxcbiogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcXG4qIDEyLzI5LzIwMTRcXG4qL1xcblxcblxcbi8qIFRhYmxlIG9mIGNvbnRlbnRzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXFxuLSBHcmlkXFxuLSBCYXNlIFN0eWxlc1xcbi0gVHlwb2dyYXBoeVxcbi0gTGlua3NcXG4tIEJ1dHRvbnNcXG4tIEZvcm1zXFxuLSBMaXN0c1xcbi0gQ29kZVxcbi0gVGFibGVzXFxuLSBTcGFjaW5nXFxuLSBVdGlsaXRpZXNcXG4tIENsZWFyaW5nXFxuLSBNZWRpYSBRdWVyaWVzXFxuKi9cXG5cXG5cXG4vKiBHcmlkXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTMwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXG59XFxuLmNvbHVtbixcXG4uY29sdW1ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxufVxcblxcbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDQwMHB4ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgcGFkZGluZzogMDsgXFxuICB9XFxufVxcblxcbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDU1MHB4ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDgwJTsgXFxuICB9XFxuICAuY29sdW1uLFxcbiAgLmNvbHVtbnMge1xcbiAgICBtYXJnaW4tbGVmdDogNCU7IFxcbiAgfVxcbiAgLmNvbHVtbjpmaXJzdC1jaGlsZCxcXG4gIC5jb2x1bW5zOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7IFxcbiAgfVxcblxcbiAgLm9uZS5jb2x1bW4sXFxuICAub25lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQuNjY2NjY2NjY2NjclOyB9XFxuICAudHdvLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEzLjMzMzMzMzMzMzMlOyB9XFxuICAudGhyZWUuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDIyJTsgICAgICAgICAgICB9XFxuICAuZm91ci5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XFxuICAuZml2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDM5LjMzMzMzMzMzMzMlOyB9XFxuICAuc2l4LmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgICAgICAgICAgICB9XFxuICAuc2V2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDU2LjY2NjY2NjY2NjclOyB9XFxuICAuZWlnaHQuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XFxuICAubmluZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDc0LjAlOyAgICAgICAgICB9XFxuICAudGVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDgyLjY2NjY2NjY2NjclOyB9XFxuICAuZWxldmVuLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDkxLjMzMzMzMzMzMzMlOyB9XFxuICAudHdlbHZlLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEwMCU7IG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuICAub25lLXRoaXJkLmNvbHVtbiAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XFxuICAudHdvLXRoaXJkcy5jb2x1bW4gICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XFxuXFxuICAub25lLWhhbGYuY29sdW1uICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgfVxcblxcbiAgLyogT2Zmc2V0cyAqL1xcbiAgLm9mZnNldC1ieS1vbmUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1vbmUuY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4LjY2NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS10d28uY29sdW1uLFxcbiAgLm9mZnNldC1ieS10d28uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAxNy4zMzMzMzMzMzMzJTsgfVxcbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDI2JTsgICAgICAgICAgICB9XFxuICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS1maXZlLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZml2ZS5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogNDMuMzMzMzMzMzMzMyU7IH1cXG4gIC5vZmZzZXQtYnktc2l4LmNvbHVtbixcXG4gIC5vZmZzZXQtYnktc2l4LmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyAgICAgICAgICAgIH1cXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1uLFxcbiAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2MC42NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XFxuICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA3OC4wJTsgICAgICAgICAgfVxcbiAgLm9mZnNldC1ieS10ZW4uY29sdW1uLFxcbiAgLm9mZnNldC1ieS10ZW4uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4Ni42NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1uLFxcbiAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1ucyAgICAgICB7IG1hcmdpbi1sZWZ0OiA5NS4zMzMzMzMzMzMzJTsgfVxcblxcbiAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1ucyAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW5zICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cXG5cXG4gIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW5zICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7IH1cXG5cXG59XFxuXFxuXFxuLyogQmFzZSBTdHlsZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4vKiBOT1RFXFxuaHRtbCBpcyBzZXQgdG8gNjIuNSUgc28gdGhhdCBhbGwgdGhlIFJFTSBtZWFzdXJlbWVudHMgdGhyb3VnaG91dCBTa2VsZXRvblxcbmFyZSBiYXNlZCBvbiAxMHB4IHNpemluZy4gU28gYmFzaWNhbGx5IDEuNXJlbSA9IDE1cHggOikgKi9cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7IH1cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07IC8qIGN1cnJlbnRseSBlbXMgY2F1c2UgY2hyb21lIGJ1ZyBtaXNpbnRlcnByZXRpbmcgcmVtcyBvbiBib2R5IGVsZW1lbnQgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgXFxcIkhlbHZldGljYU5ldWVcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMyMjI7IH1cXG5cXG5cXG4vKiBUeXBvZ3JhcGh5XFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogMzAwOyBcXG59XFxuaDEgeyBmb250LXNpemU6IDQuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMjsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07fVxcbmgyIHsgZm9udC1zaXplOiAzLjZyZW07IGxpbmUtaGVpZ2h0OiAxLjI1OyBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XFxuaDMgeyBmb250LXNpemU6IDMuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMzsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cXG5oNCB7IGZvbnQtc2l6ZTogMi40cmVtOyBsaW5lLWhlaWdodDogMS4zNTsgbGV0dGVyLXNwYWNpbmc6IC0uMDhyZW07IH1cXG5oNSB7IGZvbnQtc2l6ZTogMS44cmVtOyBsaW5lLWhlaWdodDogMS41OyAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07IH1cXG5oNiB7IGZvbnQtc2l6ZTogMS41cmVtOyBsaW5lLWhlaWdodDogMS42OyAgbGV0dGVyLXNwYWNpbmc6IDA7IH1cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxuICBoMSB7IGZvbnQtc2l6ZTogNS4wcmVtOyB9XFxuICBoMiB7IGZvbnQtc2l6ZTogNC4ycmVtOyB9XFxuICBoMyB7IGZvbnQtc2l6ZTogMy42cmVtOyB9XFxuICBoNCB7IGZvbnQtc2l6ZTogMy4wcmVtOyB9XFxuICBoNSB7IGZvbnQtc2l6ZTogMi40cmVtOyB9XFxuICBoNiB7IGZvbnQtc2l6ZTogMS41cmVtOyB9XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG4vKiBMaW5rc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmEge1xcbiAgY29sb3I6ICMxRUFFREI7IFxcbn1cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiAjMEZBMENFOyBcXG59XFxuXFxuXFxuLyogQnV0dG9uc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi5idXR0b24sXFxuYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgcGFkZGluZzogMCAzMHB4O1xcbiAgY29sb3I6ICM1NTU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbn1cXG4uYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdOmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdOmhvdmVyLFxcbi5idXR0b246Zm9jdXMsXFxuYnV0dG9uOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl06Zm9jdXMge1xcbiAgY29sb3I6ICMzMzM7XFxuICBib3JkZXItY29sb3I6ICM4ODg7XFxuICBvdXRsaW5lOiAwOyBcXG59XFxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeSxcXG5idXR0b24uYnV0dG9uLXByaW1hcnksXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0uYnV0dG9uLXByaW1hcnksXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXS5idXR0b24tcHJpbWFyeSxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXS5idXR0b24tcHJpbWFyeSB7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzM0MzRjA7XFxuICBib3JkZXItY29sb3I6ICMzM0MzRjA7IFxcbn1cXG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmJ1dHRvbi5idXR0b24tcHJpbWFyeTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXS5idXR0b24tcHJpbWFyeTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbi5idXR0b24uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMge1xcbiAgY29sb3I6ICNGRkY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUVBRURCO1xcbiAgYm9yZGVyLWNvbG9yOiAjMUVBRURCOyBcXG59XFxuXFxuXFxuLyogRm9ybXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5pbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ1cmxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBoZWlnaHQ6IDM4cHg7XFxuICBwYWRkaW5nOiA2cHggMTBweDsgLyogVGhlIDZweCB2ZXJ0aWNhbGx5IGNlbnRlcnMgdGV4dCBvbiBGRiwgaWdub3JlZCBieSBXZWJraXQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDFEMUQxO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbn1cXG4vKiBSZW1vdmVzIGF3a3dhcmQgZGVmYXVsdCBzdHlsZXMgb24gc29tZSBpbnB1dHMgZm9yIGlPUyAqL1xcbmlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRlbFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInVybFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0sXFxudGV4dGFyZWEge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lOyBcXG59XFxudGV4dGFyZWEge1xcbiAgbWluLWhlaWdodDogNjVweDtcXG4gIHBhZGRpbmctdG9wOiA2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNnB4OyBcXG59XFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwidXJsXFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXTpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzQzNGMDtcXG4gIG91dGxpbmU6IDA7IFxcbn1cXG5sYWJlbCxcXG5sZWdlbmQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7IFxcbn1cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXdpZHRoOiAwOyBcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGRpc3BsYXk6IGlubGluZTsgXFxufVxcbmxhYmVsID4gLmxhYmVsLWJvZHkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgXFxufVxcblxcblxcbi8qIExpc3RzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxudWwge1xcbiAgbGlzdC1zdHlsZTogY2lyY2xlIGluc2lkZTsgXFxufVxcbm9sIHtcXG4gIGxpc3Qtc3R5bGU6IGRlY2ltYWwgaW5zaWRlOyBcXG59XFxub2wsIHVsIHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIG1hcmdpbi10b3A6IDA7IFxcbn1cXG51bCB1bCxcXG51bCBvbCxcXG5vbCBvbCxcXG5vbCB1bCB7XFxuICBtYXJnaW46IDEuNXJlbSAwIDEuNXJlbSAzcmVtO1xcbiAgZm9udC1zaXplOiA5MCU7IFxcbn1cXG5saSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyBcXG59XFxuXFxuXFxuLyogQ29kZVxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmNvZGUge1xcbiAgcGFkZGluZzogLjJyZW0gLjVyZW07XFxuICBtYXJnaW46IDAgLjJyZW07XFxuICBmb250LXNpemU6IDkwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRTFFMTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgXFxufVxcbnByZSA+IGNvZGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7IFxcbn1cXG5cXG5cXG4vKiBUYWJsZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG50aCxcXG50ZCB7XFxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUUxRTE7IFxcbn1cXG50aDpmaXJzdC1jaGlsZCxcXG50ZDpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG50aDpsYXN0LWNoaWxkLFxcbnRkOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1yaWdodDogMDsgfVxcblxcblxcbi8qIFNwYWNpbmdcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5idXR0b24sXFxuLmJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyBcXG59XFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0LFxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTsgXFxufVxcbnByZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmZpZ3VyZSxcXG50YWJsZSxcXG51bCxcXG5vbCxcXG5mb3JtIHtcXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTsgXFxufVxcblxcblxcbi8qIFV0aWxpdGllc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi51LWZ1bGwtd2lkdGgge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXG59XFxuLnUtbWF4LWZ1bGwtd2lkdGgge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxufVxcbi51LXB1bGwtcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0OyBcXG59XFxuLnUtcHVsbC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0OyBcXG59XFxuXFxuXFxuLyogTWlzY1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmhyIHtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0UxRTFFMTsgXFxufVxcblxcblxcbi8qIENsZWFyaW5nXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuXFxuLyogU2VsZiBDbGVhcmluZyBHb29kbmVzcyAqL1xcbi5jb250YWluZXI6YWZ0ZXIsXFxuLnJvdzphZnRlcixcXG4udS1jZiB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY2xlYXI6IGJvdGg7IFxcbn1cXG5cXG5cXG4vKiBNZWRpYSBRdWVyaWVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLypcXG5Ob3RlOiBUaGUgYmVzdCB3YXkgdG8gc3RydWN0dXJlIHRoZSB1c2Ugb2YgbWVkaWEgcXVlcmllcyBpcyB0byBjcmVhdGUgdGhlIHF1ZXJpZXNcXG5uZWFyIHRoZSByZWxldmFudCBjb2RlLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnRlZCB0byBjaGFuZ2UgdGhlIHN0eWxlcyBmb3IgYnV0dG9uc1xcbm9uIHNtYWxsIGRldmljZXMsIHBhc3RlIHRoZSBtb2JpbGUgcXVlcnkgY29kZSB1cCBpbiB0aGUgYnV0dG9ucyBzZWN0aW9uIGFuZCBzdHlsZSBpdFxcbnRoZXJlLlxcbiovXFxuXFxuXFxuLyogTGFyZ2VyIHRoYW4gbW9iaWxlICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSB7XFxuICBib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcbn1cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0IChhbHNvIHBvaW50IHdoZW4gZ3JpZCBiZWNvbWVzIGFjdGl2ZSkgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXG59XFxuXFxuLyogTGFyZ2VyIHRoYW4gdGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7XFxufVxcblxcbi8qIExhcmdlciB0aGFuIGRlc2t0b3AgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxufVxcblxcbi8qIExhcmdlciB0aGFuIERlc2t0b3AgSEQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9Ta2VsZXRvbi9jc3Mvc2tlbGV0b24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0NBT0M7OztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQzs7O0FBR0Q7b0RBQ29EO0FBQ3BEO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FB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bUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtvREFDb0Q7QUFDcEQ7O0VBRUUsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7QUFDbEM7QUFDQTs7RUFFRSxlQUFlLEVBQUU7QUFDbkI7O0VBRUUsZ0JBQWdCLEVBQUU7OztBQUdwQjtvREFDb0Q7QUFDcEQ7O0VBRUUsbUJBQW1CO0FBQ3JCO0FBQ0E7Ozs7RUFJRSxxQkFBcUI7QUFDdkI7QUFDQTs7Ozs7Ozs7RUFRRSxxQkFBcUI7QUFDdkI7OztBQUdBO29EQUNvRDtBQUNwRDtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiOzs7QUFHQTtvREFDb0Q7QUFDcEQ7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7OztBQUdBO29EQUNvRDs7QUFFcEQsMkJBQTJCO0FBQzNCOzs7RUFHRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjs7O0FBR0E7b0RBQ29EO0FBQ3BEOzs7OztDQUtDOzs7QUFHRCx1QkFBdUI7QUFDdkI7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBLDhEQUE4RDtBQUM5RDtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuKiBTa2VsZXRvbiBWMi4wLjRcXG4qIENvcHlyaWdodCAyMDE0LCBEYXZlIEdhbWFjaGVcXG4qIHd3dy5nZXRza2VsZXRvbi5jb21cXG4qIEZyZWUgdG8gdXNlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cXG4qIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXFxuKiAxMi8yOS8yMDE0XFxuKi9cXG5cXG5cXG4vKiBUYWJsZSBvZiBjb250ZW50c1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xcbi0gR3JpZFxcbi0gQmFzZSBTdHlsZXNcXG4tIFR5cG9ncmFwaHlcXG4tIExpbmtzXFxuLSBCdXR0b25zXFxuLSBGb3Jtc1xcbi0gTGlzdHNcXG4tIENvZGVcXG4tIFRhYmxlc1xcbi0gU3BhY2luZ1xcbi0gVXRpbGl0aWVzXFxuLSBDbGVhcmluZ1xcbi0gTWVkaWEgUXVlcmllc1xcbiovXFxuXFxuXFxuLyogR3JpZFxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEzMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxufVxcbi5jb2x1bW4sXFxuLmNvbHVtbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbG9hdDogbGVmdDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbn1cXG5cXG4vKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA0MDBweCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIHBhZGRpbmc6IDA7IFxcbiAgfVxcbn1cXG5cXG4vKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA1NTBweCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4MCU7IFxcbiAgfVxcbiAgLmNvbHVtbixcXG4gIC5jb2x1bW5zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQlOyBcXG4gIH1cXG4gIC5jb2x1bW46Zmlyc3QtY2hpbGQsXFxuICAuY29sdW1uczpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwOyBcXG4gIH1cXG5cXG4gIC5vbmUuY29sdW1uLFxcbiAgLm9uZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0LjY2NjY2NjY2NjY3JTsgfVxcbiAgLnR3by5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMy4zMzMzMzMzMzMzJTsgfVxcbiAgLnRocmVlLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAyMiU7ICAgICAgICAgICAgfVxcbiAgLmZvdXIuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcbiAgLmZpdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzOS4zMzMzMzMzMzMzJTsgfVxcbiAgLnNpeC5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7ICAgICAgICAgICAgfVxcbiAgLnNldmVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA1Ni42NjY2NjY2NjY3JTsgfVxcbiAgLmVpZ2h0LmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcbiAgLm5pbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA3NC4wJTsgICAgICAgICAgfVxcbiAgLnRlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA4Mi42NjY2NjY2NjY3JTsgfVxcbiAgLmVsZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiA5MS4zMzMzMzMzMzMzJTsgfVxcbiAgLnR3ZWx2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tbGVmdDogMDsgfVxcblxcbiAgLm9uZS10aGlyZC5jb2x1bW4gICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcbiAgLnR3by10aGlyZHMuY29sdW1uICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcblxcbiAgLm9uZS1oYWxmLmNvbHVtbiAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7IH1cXG5cXG4gIC8qIE9mZnNldHMgKi9cXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogOC42NjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogMTcuMzMzMzMzMzMzMyU7IH1cXG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiAyNiU7ICAgICAgICAgICAgfVxcbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZml2ZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDQzLjMzMzMzMzMzMzMlOyB9XFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgICAgICAgICAgICB9XFxuICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjAuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZWlnaHQuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxcbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktbmluZS5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogNzguMCU7ICAgICAgICAgIH1cXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogODYuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbnMgICAgICAgeyBtYXJnaW4tbGVmdDogOTUuMzMzMzMzMzMzMyU7IH1cXG5cXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbnMgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1ucyAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XFxuXFxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1ucyAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyB9XFxuXFxufVxcblxcblxcbi8qIEJhc2UgU3R5bGVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLyogTk9URVxcbmh0bWwgaXMgc2V0IHRvIDYyLjUlIHNvIHRoYXQgYWxsIHRoZSBSRU0gbWVhc3VyZW1lbnRzIHRocm91Z2hvdXQgU2tlbGV0b25cXG5hcmUgYmFzZWQgb24gMTBweCBzaXppbmcuIFNvIGJhc2ljYWxseSAxLjVyZW0gPSAxNXB4IDopICovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlOyB9XFxuYm9keSB7XFxuICBmb250LXNpemU6IDEuNWVtOyAvKiBjdXJyZW50bHkgZW1zIGNhdXNlIGNocm9tZSBidWcgbWlzaW50ZXJwcmV0aW5nIHJlbXMgb24gYm9keSBlbGVtZW50ICovXFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIFxcXCJIZWx2ZXRpY2FOZXVlXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMjIyOyB9XFxuXFxuXFxuLyogVHlwb2dyYXBoeVxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDsgXFxufVxcbmgxIHsgZm9udC1zaXplOiA0LjByZW07IGxpbmUtaGVpZ2h0OiAxLjI7ICBsZXR0ZXItc3BhY2luZzogLS4xcmVtO31cXG5oMiB7IGZvbnQtc2l6ZTogMy42cmVtOyBsaW5lLWhlaWdodDogMS4yNTsgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTsgfVxcbmgzIHsgZm9udC1zaXplOiAzLjByZW07IGxpbmUtaGVpZ2h0OiAxLjM7ICBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XFxuaDQgeyBmb250LXNpemU6IDIuNHJlbTsgbGluZS1oZWlnaHQ6IDEuMzU7IGxldHRlci1zcGFjaW5nOiAtLjA4cmVtOyB9XFxuaDUgeyBmb250LXNpemU6IDEuOHJlbTsgbGluZS1oZWlnaHQ6IDEuNTsgIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtOyB9XFxuaDYgeyBmb250LXNpemU6IDEuNXJlbTsgbGluZS1oZWlnaHQ6IDEuNjsgIGxldHRlci1zcGFjaW5nOiAwOyB9XFxuXFxuLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbiAgaDEgeyBmb250LXNpemU6IDUuMHJlbTsgfVxcbiAgaDIgeyBmb250LXNpemU6IDQuMnJlbTsgfVxcbiAgaDMgeyBmb250LXNpemU6IDMuNnJlbTsgfVxcbiAgaDQgeyBmb250LXNpemU6IDMuMHJlbTsgfVxcbiAgaDUgeyBmb250LXNpemU6IDIuNHJlbTsgfVxcbiAgaDYgeyBmb250LXNpemU6IDEuNXJlbTsgfVxcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuLyogTGlua3NcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5hIHtcXG4gIGNvbG9yOiAjMUVBRURCOyBcXG59XFxuYTpob3ZlciB7XFxuICBjb2xvcjogIzBGQTBDRTsgXFxufVxcblxcblxcbi8qIEJ1dHRvbnNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4uYnV0dG9uLFxcbmJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMzhweDtcXG4gIHBhZGRpbmc6IDAgMzBweDtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXG59XFxuLmJ1dHRvbjpob3ZlcixcXG5idXR0b246aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpob3ZlcixcXG4uYnV0dG9uOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdOmZvY3VzIHtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyLWNvbG9yOiAjODg4O1xcbiAgb3V0bGluZTogMDsgXFxufVxcbi5idXR0b24uYnV0dG9uLXByaW1hcnksXFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5LFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLmJ1dHRvbi1wcmltYXJ5LFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0uYnV0dG9uLXByaW1hcnksXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0uYnV0dG9uLXByaW1hcnkge1xcbiAgY29sb3I6ICNGRkY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNDM0YwO1xcbiAgYm9yZGVyLWNvbG9yOiAjMzNDM0YwOyBcXG59XFxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeTpob3ZlcixcXG5idXR0b24uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXS5idXR0b24tcHJpbWFyeTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXS5idXR0b24tcHJpbWFyeTpob3ZlcixcXG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxcbmJ1dHRvbi5idXR0b24tcHJpbWFyeTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzIHtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFQUVEQjtcXG4gIGJvcmRlci1jb2xvcjogIzFFQUVEQjsgXFxufVxcblxcblxcbi8qIEZvcm1zXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidXJsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgcGFkZGluZzogNnB4IDEwcHg7IC8qIFRoZSA2cHggdmVydGljYWxseSBjZW50ZXJzIHRleHQgb24gRkYsIGlnbm9yZWQgYnkgV2Via2l0ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0QxRDFEMTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXG59XFxuLyogUmVtb3ZlcyBhd2t3YXJkIGRlZmF1bHQgc3R5bGVzIG9uIHNvbWUgaW5wdXRzIGZvciBpT1MgKi9cXG5pbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ1cmxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdLFxcbnRleHRhcmVhIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsgXFxufVxcbnRleHRhcmVhIHtcXG4gIG1pbi1oZWlnaHQ6IDY1cHg7XFxuICBwYWRkaW5nLXRvcDogNnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDZweDsgXFxufVxcbmlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInRlbFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInVybFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl06Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzM0MzRjA7XFxuICBvdXRsaW5lOiAwOyBcXG59XFxubGFiZWwsXFxubGVnZW5kIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwOyBcXG59XFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlci13aWR0aDogMDsgXFxufVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7IFxcbn1cXG5sYWJlbCA+IC5sYWJlbC1ib2R5IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IFxcbn1cXG5cXG5cXG4vKiBMaXN0c1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZSBpbnNpZGU7IFxcbn1cXG5vbCB7XFxuICBsaXN0LXN0eWxlOiBkZWNpbWFsIGluc2lkZTsgXFxufVxcbm9sLCB1bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBtYXJnaW4tdG9wOiAwOyBcXG59XFxudWwgdWwsXFxudWwgb2wsXFxub2wgb2wsXFxub2wgdWwge1xcbiAgbWFyZ2luOiAxLjVyZW0gMCAxLjVyZW0gM3JlbTtcXG4gIGZvbnQtc2l6ZTogOTAlOyBcXG59XFxubGkge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgXFxufVxcblxcblxcbi8qIENvZGVcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5jb2RlIHtcXG4gIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xcbiAgbWFyZ2luOiAwIC4ycmVtO1xcbiAgZm9udC1zaXplOiA5MCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYmFja2dyb3VuZDogI0YxRjFGMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUUxRTE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7IFxcbn1cXG5wcmUgPiBjb2RlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICB3aGl0ZS1zcGFjZTogcHJlOyBcXG59XFxuXFxuXFxuLyogVGFibGVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxudGgsXFxudGQge1xcbiAgcGFkZGluZzogMTJweCAxNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFMUUxOyBcXG59XFxudGg6Zmlyc3QtY2hpbGQsXFxudGQ6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxudGg6bGFzdC1jaGlsZCxcXG50ZDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG5cXG4vKiBTcGFjaW5nXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuYnV0dG9uLFxcbi5idXR0b24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgXFxufVxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCxcXG5maWVsZHNldCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07IFxcbn1cXG5wcmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5maWd1cmUsXFxudGFibGUsXFxudWwsXFxub2wsXFxuZm9ybSB7XFxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07IFxcbn1cXG5cXG5cXG4vKiBVdGlsaXRpZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4udS1mdWxsLXdpZHRoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxufVxcbi51LW1heC1mdWxsLXdpZHRoIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbn1cXG4udS1wdWxsLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDsgXFxufVxcbi51LXB1bGwtbGVmdCB7XFxuICBmbG9hdDogbGVmdDsgXFxufVxcblxcblxcbi8qIE1pc2NcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5ociB7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMy41cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFMUUxRTE7IFxcbn1cXG5cXG5cXG4vKiBDbGVhcmluZ1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcblxcbi8qIFNlbGYgQ2xlYXJpbmcgR29vZG5lc3MgKi9cXG4uY29udGFpbmVyOmFmdGVyLFxcbi5yb3c6YWZ0ZXIsXFxuLnUtY2Yge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNsZWFyOiBib3RoOyBcXG59XFxuXFxuXFxuLyogTWVkaWEgUXVlcmllc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi8qXFxuTm90ZTogVGhlIGJlc3Qgd2F5IHRvIHN0cnVjdHVyZSB0aGUgdXNlIG9mIG1lZGlhIHF1ZXJpZXMgaXMgdG8gY3JlYXRlIHRoZSBxdWVyaWVzXFxubmVhciB0aGUgcmVsZXZhbnQgY29kZS4gRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50ZWQgdG8gY2hhbmdlIHRoZSBzdHlsZXMgZm9yIGJ1dHRvbnNcXG5vbiBzbWFsbCBkZXZpY2VzLCBwYXN0ZSB0aGUgbW9iaWxlIHF1ZXJ5IGNvZGUgdXAgaW4gdGhlIGJ1dHRvbnMgc2VjdGlvbiBhbmQgc3R5bGUgaXRcXG50aGVyZS5cXG4qL1xcblxcblxcbi8qIExhcmdlciB0aGFuIG1vYmlsZSAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkge1xcbiAgYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG59XFxuXFxuLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAoYWxzbyBwb2ludCB3aGVuIGdyaWQgYmVjb21lcyBhY3RpdmUpICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxufVxcblxcbi8qIExhcmdlciB0aGFuIHRhYmxldCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xcbn1cXG5cXG4vKiBMYXJnZXIgdGhhbiBkZXNrdG9wICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xcbn1cXG5cXG4vKiBMYXJnZXIgdGhhbiBEZXNrdG9wIEhEICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjc3Bpbm5lci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jc3Bpbm5lciB7XFxuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNFNUU1RTU7XFxuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI0U1RTVFNTtcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNFNUU1RTU7XFxuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMxRTFFMUU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYW5pbWF0aW9uOiBzcGluIDAuOHMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9TcGlubmVyL3NwaW5uZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNzcGlubmVyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNzcGlubmVyIHtcXG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgI0U1RTVFNTtcXG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjRTVFNUU1O1xcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI0U1RTVFNTtcXG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgIzFFMUUxRTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBhbmltYXRpb246IHNwaW4gMC44cyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Jvb3R7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgLyogcGFkZGluZy10b3A6IDUwcHg7ICovXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgLS1tYWluLWJnLWNvbG9yOiAjRjhGRkU1O1xcbiAgLS1tYWluLWNhcmQtY29sb3I6ICMxRTJEMjQgO1xcbiAgLS10ZW1wLWNvbG9yLWNvbGQ6ICMwYWY7XFxuICAtLXRlbXAtY29sb3Itd2FybTogI2YwOTgwMDtcXG4gIC0tdGVtcC1jb2xvci1ob3Q6ICNmMDAwMDAgO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmZsZXgtY29sdW1uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mbGV4LW5vLXdyYXB7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuLmZsZXgtanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mbGV4LWp1c3RpZnktZXZlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmZsZXgtYWxpZ24tY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZWJ1ZyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbi5tLTAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWwtNSB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4ubXItNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLyogdGhpcyBpcyB0aGUgbWFpbiB0ZW1wIHVuZGVyIHRoZSBjaXR5IG5hbWUgKi9cXG4jbWFpbi10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogOXJlbTtcXG59XFxuXFxuLnRlbXAtY29sb3ItMSB7IC8qIC0xMCAtIDQwICovXFxuICBjb2xvcjogIzFBQURGRjtcXG59XFxuXFxuLnRlbXAtY29sb3ItMiB7IC8qIDQwIC0gNDkgKi9cXG4gIGNvbG9yOiAjMTc4MkZGO1xcbn1cXG5cXG4udGVtcC1jb2xvci0zIHsgLyogNTAgLSA1OSAqL1xcbiAgY29sb3I6ICMzMzE3RDk7XFxufVxcblxcbi50ZW1wLWNvbG9yLTQgeyAvKiA2MCAtIDY5ICovXFxuICBjb2xvcjogIzc0MzlBNDtcXG59XFxuLnRlbXAtY29sb3ItNSB7IC8qIDcwIC0gNzkgKi9cXG4gIGNvbG9yOiAjQ0U2NzUyO1xcbn1cXG5cXG4udGVtcC1jb2xvci02IHsgLyogODAgLSA4OSAqL1xcbiAgY29sb3I6ICNGRjZFMDQ7XFxufVxcblxcbi50ZW1wLWNvbG9yLTcgeyAvKiA5MCAtIDk5ICovXFxuICBjb2xvcjogI0ZGNDcwNTtcXG59XFxuXFxuLnRlbXAtY29sb3ItOCB7IC8qIDEwMCAtIDExOSovXFxuICBjb2xvcjogI0ZGMDEwMTtcXG59XFxuXFxuXFxuLyogTGFyZ2VyIHRoYW4gbW9iaWxlICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSB7XFxuICBib2R5IHtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG5cXG4gIC5jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gIH1cXG5cXG4gIGlucHV0W3R5cGU9dGV4dF17XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY3VycmVudC13ZWF0aGVyLWNhcmQge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgfVxcblxcbiAgLmN1cnJlbnQtd2VhdGhlci1jYXJkID4gZGl2ID4gcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG5cXG4gICNjdXJyZW50LXdlYXRoZXItY2FyZC10ZW1wcy1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gIH1cXG5cXG4gIC5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDE1cHggYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4IHJnYmEoMjMwLDIzMCwyMzAsMC41KTsgXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggcmdiYSgyMzAsMjMwLDIzMCwwLjUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgfVxcblxcbiAgLmhvdXJseS1mb3JlY2FzdC1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZmxleC1iYXNpczogMTAwcHg7XFxuICB9XFxuXFxuICAuaG91cmx5LWZvcmVjYXN0LWNhcmQgPiAudGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLmN1cnJlbnQtd2VhdGhlci1jYXJkLCAuaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lciwgLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWNmY2Y7XFxuICB9XFxuXFxuICAuZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDE1cHggYXV0bztcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCByZ2JhKDIzMCwyMzAsMjMwLDAuNSk7IFxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4IHJnYmEoMjMwLDIzMCwyMzAsMC41KTtcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICB9XFxuXFxuICAuZm9yZWNhc3QtY2FyZCB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB9XFxuXFxuICAuZm9yZWNhc3QtY2FyZCA+IC53ZWVrZGF5IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxufVxcblxcbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKGFsc28gcG9pbnQgd2hlbiBncmlkIGJlY29tZXMgYWN0aXZlKSAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbn1cXG5cXG4vKiBMYXJnZXIgdGhhbiB0YWJsZXQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcXG59XFxuXFxuLyogTGFyZ2VyIHRoYW4gZGVza3RvcCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG59XFxuXFxuLyogTGFyZ2VyIHRoYW4gRGVza3RvcCBIRCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5mb3JlY2FzdC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLDhDQUE4QztBQUM5QztFQUNFLGVBQWU7QUFDakI7O0FBRUEsZ0JBQWdCLGFBQWE7RUFDM0IsY0FBYztBQUNoQjs7QUFFQSxnQkFBZ0IsWUFBWTtFQUMxQixjQUFjO0FBQ2hCOztBQUVBLGdCQUFnQixZQUFZO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUEsZ0JBQWdCLFlBQVk7RUFDMUIsY0FBYztBQUNoQjtBQUNBLGdCQUFnQixZQUFZO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUEsZ0JBQWdCLFlBQVk7RUFDMUIsY0FBYztBQUNoQjs7QUFFQSxnQkFBZ0IsWUFBWTtFQUMxQixjQUFjO0FBQ2hCOztBQUVBLGdCQUFnQixhQUFhO0VBQzNCLGNBQWM7QUFDaEI7OztBQUdBLHVCQUF1QjtBQUN2QjtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCw4QkFBOEI7T0FDM0IsMkJBQTJCO1lBQ3RCLHNCQUFzQjtFQUNoQzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMERBQTBEO0lBQzFELGtEQUFrRDtJQUNsRCxhQUFhOztJQUViLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsbUJBQW1CO0lBQ25CLDBEQUEwRDtJQUMxRCxrREFBa0Q7SUFDbEQsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7QUFDRjs7QUFFQSw4REFBOEQ7QUFDOUQ7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNyb290e1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIC8qIHBhZGRpbmctdG9wOiA1MHB4OyAqL1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIC0tbWFpbi1iZy1jb2xvcjogI0Y4RkZFNTtcXG4gIC0tbWFpbi1jYXJkLWNvbG9yOiAjMUUyRDI0IDtcXG4gIC0tdGVtcC1jb2xvci1jb2xkOiAjMGFmO1xcbiAgLS10ZW1wLWNvbG9yLXdhcm06ICNmMDk4MDA7XFxuICAtLXRlbXAtY29sb3ItaG90OiAjZjAwMDAwIDtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXgtcm93IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mbGV4LWNvbHVtbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmxleC1uby13cmFwe1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcblxcbi5mbGV4LWp1c3RpZnktY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZmxleC1qdXN0aWZ5LWV2ZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5mbGV4LWFsaWduLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVidWcge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbn1cXG5cXG4ubS0wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm1sLTUge1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLm1yLTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi8qIHRoaXMgaXMgdGhlIG1haW4gdGVtcCB1bmRlciB0aGUgY2l0eSBuYW1lICovXFxuI21haW4tdGVtcCB7XFxuICBmb250LXNpemU6IDlyZW07XFxufVxcblxcbi50ZW1wLWNvbG9yLTEgeyAvKiAtMTAgLSA0MCAqL1xcbiAgY29sb3I6ICMxQUFERkY7XFxufVxcblxcbi50ZW1wLWNvbG9yLTIgeyAvKiA0MCAtIDQ5ICovXFxuICBjb2xvcjogIzE3ODJGRjtcXG59XFxuXFxuLnRlbXAtY29sb3ItMyB7IC8qIDUwIC0gNTkgKi9cXG4gIGNvbG9yOiAjMzMxN0Q5O1xcbn1cXG5cXG4udGVtcC1jb2xvci00IHsgLyogNjAgLSA2OSAqL1xcbiAgY29sb3I6ICM3NDM5QTQ7XFxufVxcbi50ZW1wLWNvbG9yLTUgeyAvKiA3MCAtIDc5ICovXFxuICBjb2xvcjogI0NFNjc1MjtcXG59XFxuXFxuLnRlbXAtY29sb3ItNiB7IC8qIDgwIC0gODkgKi9cXG4gIGNvbG9yOiAjRkY2RTA0O1xcbn1cXG5cXG4udGVtcC1jb2xvci03IHsgLyogOTAgLSA5OSAqL1xcbiAgY29sb3I6ICNGRjQ3MDU7XFxufVxcblxcbi50ZW1wLWNvbG9yLTggeyAvKiAxMDAgLSAxMTkqL1xcbiAgY29sb3I6ICNGRjAxMDE7XFxufVxcblxcblxcbi8qIExhcmdlciB0aGFuIG1vYmlsZSAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkge1xcbiAgYm9keSB7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuXFxuICAuY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICB9XFxuXFxuICBpbnB1dFt0eXBlPXRleHRde1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmN1cnJlbnQtd2VhdGhlci1jYXJkIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIH1cXG5cXG4gIC5jdXJyZW50LXdlYXRoZXItY2FyZCA+IGRpdiA+IHAge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuXFxuICAjY3VycmVudC13ZWF0aGVyLWNhcmQtdGVtcHMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuICAuaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCByZ2JhKDIzMCwyMzAsMjMwLDAuNSk7IFxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4IHJnYmEoMjMwLDIzMCwyMzAsMC41KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIH1cXG5cXG4gIC5ob3VybHktZm9yZWNhc3QtY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGZsZXgtYmFzaXM6IDEwMHB4O1xcbiAgfVxcblxcbiAgLmhvdXJseS1mb3JlY2FzdC1jYXJkID4gLnRpbWUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5jdXJyZW50LXdlYXRoZXItY2FyZCwgLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIsIC5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVjZmNmO1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggcmdiYSgyMzAsMjMwLDIzMCwwLjUpOyBcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCByZ2JhKDIzMCwyMzAsMjMwLDAuNSk7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWNhcmQge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWNhcmQgPiAud2Vla2RheSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbn1cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0IChhbHNvIHBvaW50IHdoZW4gZ3JpZCBiZWNvbWVzIGFjdGl2ZSkgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXG59XFxuXFxuLyogTGFyZ2VyIHRoYW4gdGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7XFxufVxcblxcbi8qIExhcmdlciB0aGFuIGRlc2t0b3AgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxufVxcblxcbi8qIExhcmdlciB0aGFuIERlc2t0b3AgSEQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAuZm9yZWNhc3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NrZWxldG9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2tlbGV0b24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NwaW5uZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcGlubmVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBIdG1sRWxlbWVudCB9IGZyb20gXCIuLi9IZWxwZXJGdW5jdGlvbnMvSHRtbEVsZW1lbnRcIjtcbmltcG9ydCB7IHRlbXBUb0NvbG9yIH0gZnJvbSBcIi4uL0hlbHBlckZ1bmN0aW9ucy90ZW1wVG9Db2xvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ3VycmVudFdlYXRoZXJDYXJkKHdlYXRoZXJEYXRhID0ge30sIHJvb3ROb2RlLCBjaXR5TmFtZSkge1xuICAvLyBQcm9jZXNzIHRoZSB3ZWF0aGVyRGF0YSB1cG9uIGluc3RhbnRpYXRpb25cbiAgY29uc3QgcGFyc2VkV2VhdGhlckRhdGEgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCB7IG1heCwgbWluIH0gPSB3ZWF0aGVyRGF0YS5kYWlseVswXS50ZW1wO1xuICAgIGxldCB7IHRlbXAgfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gICAgbGV0IHsgZGVzY3JpcHRpb24gfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXTtcbiAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZGVzY3JpcHRpb24uc2xpY2UoMSk7XG4gICAgdGVtcCA9IE1hdGgucm91bmQodGVtcCk7XG4gICAgbWF4ID0gTWF0aC5yb3VuZChtYXgpO1xuICAgIG1pbiA9IE1hdGgucm91bmQobWluKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGVtcCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgbWF4LFxuICAgICAgbWluLFxuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgX3NrZWxldG9uUm93ID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1wicm93XCJdLFxuICB9KTtcblxuICBjb25zdCBfc2tlbGV0b25Db2x1bW4gPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgY2xhc3NMaXN0OiBbXCJ0d2VsdmVcIiwgXCJjb2x1bW5zXCJdLFxuICB9KTtcblxuICBjb25zdCBfY29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1xuICAgICAgXCJjdXJyZW50LXdlYXRoZXItY2FyZFwiLFxuICAgICAgXCJmbGV4XCIsXG4gICAgICBcImZsZXgtY29sdW1uXCIsXG4gICAgICBcImZsZXgtYWxpZ24tY2VudGVyXCIsXG4gICAgXSxcbiAgfSk7XG5cbiAgLy8gQ3JlYXRlIHRoZSB0aXRsZSBjb250YWluZXIgd2l0aCB0aGUgaW5uZXIgdGV4dCBhcyB0aGUgdXNlcnMgc2VhcmNoIHRlcm0uXG4gIGNvbnN0IF90aXRsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICBjbGFzc0xpc3Q6IFtcbiAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgIFwiZmxleC1yb3dcIixcbiAgICAgICAgXCJmbGV4LWp1c3RpZnktY2VudGVyXCIsXG4gICAgICAgIFwiZmxleC1hbGlnbi1jZW50ZXJcIixcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBfdGl0bGVUZXh0ID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwiaDJcIixcbiAgICAgIGNsYXNzTGlzdDogW1wibS0wXCJdLFxuICAgICAgaW5uZXJUZXh0OiBjaXR5TmFtZSxcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChfdGl0bGVUZXh0KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IF90ZW1wID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgIGNsYXNzTGlzdDogW1xuICAgICAgICBcImZsZXhcIixcbiAgICAgICAgXCJmbGV4LXJvd1wiLFxuICAgICAgICBcImZsZXgtanVzdGlmeS1jZW50ZXJcIixcbiAgICAgICAgXCJmbGV4LWFsaWduLWNlbnRlclwiLFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IF90ZXh0ID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgY2xhc3NMaXN0OiBbXCJtLTBcIiwgdGVtcFRvQ29sb3IocGFyc2VkV2VhdGhlckRhdGEudGVtcCldLFxuICAgICAgaWQ6IFwibWFpbi10ZW1wXCIsXG4gICAgICBpbm5lclRleHQ6IGAke3BhcnNlZFdlYXRoZXJEYXRhLnRlbXB9wrBgLFxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKF90ZXh0KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IF9kZXNjcmlwdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICBpZDogXCJjdXJyZW50LXdlYXRoZXItY2FyZC1kZXNjcmlwdGlvbi1jb250YWluZXJcIixcbiAgICAgIGNsYXNzTGlzdDogW1xuICAgICAgICBcImZsZXhcIixcbiAgICAgICAgXCJmbGV4LXJvd1wiLFxuICAgICAgICBcImZsZXgtanVzdGlmeS1jZW50ZXJcIixcbiAgICAgICAgXCJmbGV4LWFsaWduLWNlbnRlclwiLFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IF90ZXh0ID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgY2xhc3NMaXN0OiBbXCJtLTBcIl0sXG4gICAgICBpbm5lclRleHQ6IHBhcnNlZFdlYXRoZXJEYXRhLmRlc2NyaXB0aW9uLFxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKF90ZXh0KTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgX2RhaWx5VGVtcHMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgaWQ6IFwiY3VycmVudC13ZWF0aGVyLWNhcmQtdGVtcHMtY29udGFpbmVyXCIsXG4gICAgICBjbGFzc0xpc3Q6IFtcbiAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgIFwiZmxleC1yb3dcIixcbiAgICAgICAgXCJmbGV4LWp1c3RpZnktY2VudGVyXCIsXG4gICAgICAgIFwiZmxleC1hbGdpbi1jZW50ZXJcIixcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBfaGlnaFRlbXAgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJwXCIsXG4gICAgICBjbGFzc0xpc3Q6IFtcIm0tMFwiLCBcIm1yLTVcIiwgdGVtcFRvQ29sb3IocGFyc2VkV2VhdGhlckRhdGEubWF4KV0sXG4gICAgICBpbm5lclRleHQ6IGBIOiR7cGFyc2VkV2VhdGhlckRhdGEubWF4fcKwYCxcbiAgICB9KTtcblxuICAgIGNvbnN0IF9sb3dUZW1wID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgY2xhc3NMaXN0OiBbXCJtLTBcIiwgXCJtbC01XCIsIHRlbXBUb0NvbG9yKHBhcnNlZFdlYXRoZXJEYXRhLm1pbildLFxuICAgICAgaW5uZXJUZXh0OiBgTDoke3BhcnNlZFdlYXRoZXJEYXRhLm1pbn3CsGAsXG4gICAgfSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoX2xvd1RlbXApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChfaGlnaFRlbXApO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3NrZWxldG9uUm93LmFwcGVuZENoaWxkKF9za2VsZXRvbkNvbHVtbik7XG4gICAgX3NrZWxldG9uQ29sdW1uLmFwcGVuZENoaWxkKF9jb250YWluZXIpO1xuICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX3RpdGxlKTtcbiAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKF90ZW1wKTtcbiAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKF9kZXNjcmlwdGlvbik7XG4gICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChfZGFpbHlUZW1wcyk7XG5cbiAgICByb290Tm9kZS5hcHBlbmRDaGlsZChfc2tlbGV0b25Sb3cpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBfc2tlbGV0b25Sb3cucmVtb3ZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVuZGVyLCByZW1vdmUgfTtcbn1cbiIsImltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSBcIi4vSHRtbEVsZW1lbnQuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yTWVzc2FnZShyb290Tm9kZSkge1xuICBjb25zdCBfcm93Q29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1wicm93XCJdLFxuICB9KTtcblxuICBjb25zdCBfY29sdW1uQ29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1xuICAgICAgXCJ0d2VsdmVcIixcbiAgICAgIFwiY29sdW1uc1wiLFxuICAgICAgXCJmbGV4XCIsXG4gICAgICBcImZsZXgtanVzdGlmeS1jZW50ZXJcIixcbiAgICAgIFwiZmxleC1hbGlnbi1jZW50ZXJcIixcbiAgICBdLFxuICB9KTtcblxuICBjb25zdCB0ZXh0Q29tcG9uZW50ID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImg1XCIsXG4gIH0pO1xuXG4gIGNvbnN0IHNldEVycm9yTWVzc2FnZSA9IGZ1bmN0aW9uIChuZXdFcnJvck1lc3NhZ2UpIHtcbiAgICB0ZXh0Q29tcG9uZW50LmlubmVyVGV4dCA9IG5ld0Vycm9yTWVzc2FnZTtcbiAgICByZXR1cm4gdGhpcztcbiAgICAvL1JldHVybiAndGhpcycgc28gdGhhdCByZW5kZXIoKSBjYW4gYmUgY2hhaW5lZCB0byB0aGlzIG1ldGhvZC5cbiAgfTtcblxuICBjb25zdCByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3Jvd0NvbnRhaW5lci5hcHBlbmRDaGlsZChfY29sdW1uQ29udGFpbmVyKTtcbiAgICBfY29sdW1uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRDb21wb25lbnQpO1xuICAgIHJvb3ROb2RlLmFwcGVuZENoaWxkKF9yb3dDb250YWluZXIpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBfcm93Q29udGFpbmVyLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlciwgc2V0RXJyb3JNZXNzYWdlLCByZW1vdmUgfTtcbn1cbiIsIi8qKlxuICogQW4gYWJzdHJhY3Rpb24gZm9yIGVhc2lseSBjcmVhdGluZyBIVE1MIG5vZGVzLlxuICogZGF0YSA9IHtcbiAqICB0eXBlOiBcImRpdlwiLFxuICogIGNsYXNzTGlzdDogW1wiY2xhc3MxXCIsIFwiY2xhc3MyXCJdLFxuICogIGF0dHJpYnV0ZXM6IHtcbiAqICAgIGhpZGRlbjogXCJ0cnVlXCIsXG4gKiAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICogIH0sXG4gKiAgaWQ6IFwiU29tZUlEXCIsXG4gKiBpbm5lclRleHQ6IFwiU29tZSB0ZXh0XCJcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEh0bWxFbGVtZW50KGRhdGEgPSB7fSkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkYXRhLnR5cGUpO1xuXG4gIGlmIChkYXRhLmNsYXNzTGlzdCkge1xuICAgIGRhdGEuY2xhc3NMaXN0LmZvckVhY2goKGNsYXNzTmFtZSkgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkpO1xuICB9XG5cbiAgaWYgKGRhdGEuYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3QgYXR0cmlidXRlTmFtZSBpbiBkYXRhLmF0dHJpYnV0ZXMpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGRhdGEuYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGEuaW5uZXJUZXh0KSB7XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSBkYXRhLmlubmVyVGV4dC50cmltKCk7XG4gIH1cblxuICBpZiAoZGF0YS5pZCkge1xuICAgIGVsZW1lbnQuaWQgPSBkYXRhLmlkO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCIvKipcbiAqIEFzeW5jaHJvbm91c2x5IGxvYWQgaW1hZ2VzIHVzaW5nIG91dHNpZGUgcmVzb3VyY2VzLlxuICogVGhlIGxvYWRJbWFnZSgpIGZuIGNyZWF0ZXMgYW4gaW1hZ2Ugb2JqZWN0IGFuZCByZXR1cm5zIGEgcHJvbWlzZS4gVGhlIHByb21pc2VcbiAqIGlzIHJlc29sdmVkIHdoZW4gdGhlIGltYWdlIGxvYWRzIHN1Y2Nlc3NmdWxseSBvciBvdGhlcndpc2UgcmVqZWN0ZWQuXG4gKlxuICogVGhpcyBhbGxvd3MgeW91IHRvIGxvYWQgYW4gaW1hZ2UgYW5kIG9ubHkgY29udGludWUgd2hlbiB0aGUgaW1hZ2UgaXMgbG9hZGVkLlxuICogSSB1c2UgdGhpcyBmdW5jdGlvbiB0byBtYWtlIHN1cmUgdGhlIGltYWdlIGlzIGxvYWRlZCBiZWZvcmUgcmVuZGVyaW5nIG90aGVyXG4gKiBlbGVtZW50cyB0byB0aGUgRE9NLiBPdGhlcndpc2UsIG15IG90aGVyIGVsZW1lbnRzIHNob3cgdXAgaW4gdGhlIERPTSBhbmQgYVxuICogZmV3IHNlY29uZHMgKG1heWJlIG1pbGxpc2Vjb25kcykgbGF0ZXIsIHRoZSBpbWFnZSBzaG93cyB1cC4gSXQgZG9lc24ndCBsb29rXG4gKiBuaWNlIHdoZW4gdGhhdCBoYXBwZW5zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZEltYWdlKHNyYykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIC8vIENyZWF0ZSB0aGUgbmV3IGltYWdlIG9iamVjdC5cbiAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgIC8qKlxuICAgICAqIEFkZCB0d28gbGlzdGVuZXJzIG9uIHRoZSBpbWFnZS5cbiAgICAgKlxuICAgICAqIGxvYWQoKSB3aWxsIGJlIGNhbGxlZCBpZiB0aGUgaW1hZ2Ugc3VjY2Vzc2Z1bGx5IGxvYWRzLlxuICAgICAqIGxvYWQoKSB3aWxsIGNhbGwgdGhlIHJlc29sdmUgY2IsIHdpdGggdGhlIGltYWdlLlxuICAgICAqXG4gICAgICogZXJyb3IoKSB3aWxsIGJlIGNhbGxlZCBpZiB0aGUgaW1hZ2UgY2Fubm90IGxvYWQuXG4gICAgICogZXJyb3IoKSB3aWxsIGNhbGwgdGhlIHJlamVjdCBjYiwgd2l0aCBhIG1lc3NhZ2UuXG4gICAgICovXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwibG9hZFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXNvbHZlKGltYWdlKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiZXJyb3JcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkNhbm5vdCBsb2FkIGltYWdlXCIpKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHNyYyBvZiB0aGUgaW1hZ2UuIFRoaXMgaXMgZG9uZSBBRlRFUiB0aGUgbG9hZC9lcnJvciBldmVudFxuICAgICAqIGxpc3RlbmVycyBhcmUgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBpbWFnZS5zcmMgPSBzcmM7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRlbXBUb0NvbG9yKHRlbXApIHtcbiAgaWYgKHRlbXAgPiAtMTAgJiYgdGVtcCA8IDQwKSB7XG4gICAgcmV0dXJuIFwidGVtcC1jb2xvci0xXCI7XG4gIH0gZWxzZSBpZiAodGVtcCA+PSA0MCAmJiB0ZW1wIDwgNTApIHtcbiAgICByZXR1cm4gXCJ0ZW1wLWNvbG9yLTJcIjtcbiAgfSBlbHNlIGlmICh0ZW1wID49IDUwICYmIHRlbXAgPCA2MCkge1xuICAgIHJldHVybiBcInRlbXAtY29sb3ItM1wiO1xuICB9IGVsc2UgaWYgKHRlbXAgPj0gNjAgJiYgdGVtcCA8IDcwKSB7XG4gICAgcmV0dXJuIFwidGVtcC1jb2xvci00XCI7XG4gIH0gZWxzZSBpZiAodGVtcCA+PSA3MCAmJiB0ZW1wIDwgODApIHtcbiAgICByZXR1cm4gXCJ0ZW1wLWNvbG9yLTVcIjtcbiAgfSBlbHNlIGlmICh0ZW1wID49IDgwICYmIHRlbXAgPCA5MCkge1xuICAgIHJldHVybiBcInRlbXAtY29sb3ItNlwiO1xuICB9IGVsc2UgaWYgKHRlbXAgPj0gOTAgJiYgdGVtcCA8IDEwMCkge1xuICAgIHJldHVybiBcInRlbXAtY29sb3ItN1wiO1xuICB9IGVsc2UgaWYgKHRlbXAgPj0gMTAwICYmIHRlbXAgPCAxMjApIHtcbiAgICByZXR1cm4gXCJ0ZW1wLWNvbG9yLThcIjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi4vSGVscGVyRnVuY3Rpb25zL0h0bWxFbGVtZW50LmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQmFyKHJvb3ROb2RlLCBjYWxsQmFjaykge1xuICBjb25zdCBfY29tcG9uZW50Q29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1xuICAgICAgXCJyb3dcIixcbiAgICAgIFwiaW5wdXQtY29udGFpbmVyXCIsXG4gICAgICBcImZsZXhcIixcbiAgICAgIFwiZmxleC1yb3dcIixcbiAgICAgIFwiZmxleC1qdXN0aWZ5LWNlbnRlclwiLFxuICAgICAgXCJmbGV4LWFsaWduLWNlbnRlclwiLFxuICAgIF0sXG4gIH0pO1xuXG4gIGNvbnN0IF9zZWFyY2hCYXIgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgIHR5cGU6IFwiaW5wdXRcIixcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIGEgY2l0eSBuYW1lXCIsXG4gICAgICBzdHlsZTogXCJ3aWR0aDogOTAlXCIsXG4gICAgfSxcbiAgICBpZDogXCJjaXR5TmFtZVwiLFxuICB9KTtcblxuICBjb25zdCBfZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3NlYXJjaEJhci5mb2N1cygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMaXN0ZW4gZm9yIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyB0aGUgRW50ZXIga2V5LlxuICAgKiBUaGUgJ2NhbGxCYWNrJyBjYWxsZWQgaW4gdGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgaW50byB0aGlzIChzZWFyY2hCYXIpIGZuLlxuICAgKiBXaGVuICdjYWxsQmFjaycgaXMgY2FsbGVkLCBpbmRleC5qcyB3aWxsIHJlY2VpdmUgY29udHJvbCBvdmVyIHRoZSByZXN0IG9mXG4gICAqIHRoZSBzY3JpcHQuXG4gICAqL1xuICBjb25zdCBfaGFuZGxlS2V5ZG93biA9IGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCEoZS5rZXkgPT0gXCJFbnRlclwiICYmIGUudGFyZ2V0LnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSkgcmV0dXJuO1xuICAgIGlmIChzY3JlZW4ud2lkdGggPCA1MDApIF9zZWFyY2hCYXIuYmx1cigpO1xuICAgIGNhbGxCYWNrKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIExpc3RlbiBmb3IgdGhlIHVzZXIgcHJlc3NpbmcgdGhlIEVudGVyIGtleVxuICAgIF9zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgX2hhbmRsZUtleWRvd24pO1xuICAgIF9zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgfSk7XG5cbiAgICBfY29tcG9uZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKF9zZWFyY2hCYXIpO1xuICAgIHJvb3ROb2RlLmFwcGVuZENoaWxkKF9jb21wb25lbnRDb250YWluZXIpO1xuICAgIF9mb2N1cygpO1xuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlciB9O1xufVxuIiwiaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi4vSGVscGVyRnVuY3Rpb25zL0h0bWxFbGVtZW50XCI7XG5pbXBvcnQgd2VhdGhlciBmcm9tIFwiLi4vd2VhdGhlci5qc1wiO1xuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSBcIi4uL0hlbHBlckZ1bmN0aW9ucy9sb2FkSW1hZ2VcIjtcbmltcG9ydCB7IHRlbXBUb0NvbG9yIH0gZnJvbSBcIi4uL0hlbHBlckZ1bmN0aW9ucy90ZW1wVG9Db2xvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gRm9yZWNhc3RDYXJkKHdlYXRoZXJEYXRhID0ge30pIHtcbiAgLy8gVGhlIHdlYXRoZXIgaW1hZ2UuXG4gIGxldCBpbWFnZTtcblxuICAvLyBQcm9jZXNzIHRoZSB3ZWF0aGVyRGF0YSB1cG9uIGluc3RhbnRpYXRpb25cbiAgY29uc3QgcGFyc2VkV2VhdGhlckRhdGEgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCB7IG1heCwgbWluIH0gPSB3ZWF0aGVyRGF0YS50ZW1wO1xuICAgIGxldCB7IGR0LCBwb3AgfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgaWNvbiB9ID0gd2VhdGhlckRhdGEud2VhdGhlclswXTtcblxuICAgIGR0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoW10sIHsgd2Vla2RheTogXCJzaG9ydFwiIH0pLmZvcm1hdChcbiAgICAgIG5ldyBEYXRlKE51bWJlci5wYXJzZUludChkdC50b1N0cmluZygpICsgXCIwMDBcIikpXG4gICAgKTtcbiAgICBwb3AgPSBNYXRoLmZsb29yKHBvcCAqIDEwMCk7XG4gICAgbWluID0gTWF0aC5yb3VuZChtaW4pO1xuICAgIG1heCA9IE1hdGgucm91bmQobWF4KTtcbiAgICByZXR1cm4ge1xuICAgICAgZHQsXG4gICAgICBtYXgsXG4gICAgICBtaW4sXG4gICAgICBwb3AsXG4gICAgICBpY29uLFxuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgY29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1wiZm9yZWNhc3QtY2FyZFwiLCBcImZsZXhcIiwgXCJmbGV4LXJvd1wiLCBcImZsZXgtYWxpZ24tY2VudGVyXCJdLFxuICB9KTtcblxuICAvKipcbiAgICogVHJ5IHRvIGxvYWQgYW4gaW1hZ2UgZnJvbSBPcGVuV2VhdGhlciBBUEkuIElmIHRoaXMgcHJvY2VzcyBmYWlscywgd2Ugd2lsbFxuICAgKiBjb25zdW1lIHRoZSBlcnJvciBhbmQgY29udGludWUgd2l0aCBwcm9jZXNzaW5nIHRoZSB1c2VyIHJlcXVlc3QuIFdlIGNhblxuICAgKiBzaWxlbnRseSBjb25zdW1lIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSB3aWxsIHNpbXBseSBub3QgZGlzcGxheSBhbiBpbWFnZSBpZlxuICAgKiB0aGVyZSBpcyBhbiBlcnJvci4gV2h5IGxvZyBvciBzdG9wIGV4ZWN1dGlvbiBzaW1wbHkgYmVjYXVzZSB3ZSBjYW4gZGlzcGxheVxuICAgKiBhbiBpbWFnZT8gUmF0aGVyLCB3ZSBjb250aW51ZSB3aXRoIG91ciBwcm9jZXNzIGFuZCBmb3JnZXQgYWJvdXQgc2hvd2luZyBhblxuICAgKiBpbWFnZSB0byB0aGUgdXNlci5cbiAgICovXG4gIGNvbnN0IGxvYWQgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXJsID0gd2VhdGhlci5nZXRJY29uU3JjKHBhcnNlZFdlYXRoZXJEYXRhLmljb24pO1xuICAgIHRyeSB7XG4gICAgICBpbWFnZSA9IGF3YWl0IGxvYWRJbWFnZSh1cmwpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJuIHRydWUuIFdlIHdpbGwgY29uc3VtZSB0aGUgZXJyb3IgcmV0dXJuZWQgYnkgdGhlIEFQSSBhbmQganVzdFxuICAgICAgICogbm90IHNob3cgYW4gaW1hZ2UuIE5vIGJpZyBkZWFsLlxuICAgICAgICovXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24gKHBhcmVudE5vZGUpIHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcInBcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ3ZWVrZGF5XCJdLFxuICAgICAgICBpbm5lclRleHQ6IHBhcnNlZFdlYXRoZXJEYXRhLmR0LFxuICAgICAgfSlcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgICAgdHlwOiBcInBcIixcbiAgICAgICAgaW5uZXJUZXh0OiBgJHtwYXJzZWRXZWF0aGVyRGF0YS5wb3B9JSByYWluYCxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgICBjbGFzc0xpc3Q6IFtcImxvdy10ZW1wXCIsIHRlbXBUb0NvbG9yKHBhcnNlZFdlYXRoZXJEYXRhLm1pbildLFxuICAgICAgICB0eXBlOiBcInBcIixcbiAgICAgICAgaW5uZXJUZXh0OiBgTDogJHtwYXJzZWRXZWF0aGVyRGF0YS5taW59wrBgLFxuICAgICAgfSlcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgIG5ldyBIdG1sRWxlbWVudCh7XG4gICAgICAgIGNsYXNzTGlzdDogW1wiaGlnaC10ZW1wXCIsIHRlbXBUb0NvbG9yKHBhcnNlZFdlYXRoZXJEYXRhLm1heCldLFxuICAgICAgICB0eXBlOiBcInBcIixcbiAgICAgICAgaW5uZXJUZXh0OiBgSDogJHtwYXJzZWRXZWF0aGVyRGF0YS5tYXh9wrBgLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlciwgbG9hZCB9O1xufVxuIiwiaW1wb3J0IHsgRm9yZWNhc3RDYXJkIH0gZnJvbSBcIi4vRm9yZWNhc3RDYXJkLmpzXCI7XG5pbXBvcnQgeyBIdG1sRWxlbWVudCB9IGZyb20gXCIuLi9IZWxwZXJGdW5jdGlvbnMvSHRtbEVsZW1lbnQuanNcIjtcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBsb2FkcyB0aGUgc2V2ZW4gZGF5IGZvcmVjYXN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V2ZW5EYXlGb3JlY2FzdChyb290Tm9kZSkge1xuICAvLyBTdG9yZSBlYWNoIGZvcmVjYXN0IGNhcmQgaW4gdGhpcyBhcnJheSBmb3IgZnV0dXJlIGl0ZXJhdGlvbi5cbiAgbGV0IGRhaWx5Rm9yZWNhc3RzID0gW107XG5cbiAgbGV0IF9mb3JlY2FzdENvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBjbGFzc0xpc3Q6IFtcImZvcmVjYXN0LWNvbnRhaW5lclwiXSxcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZWFjaCBmb3JlY2FzdCBjYXJkIGJ5IGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIEZvcmVjYXN0Q2FyZCBhbmRcbiAgICogY2FsbGluZyAubG9hZCgpIG9uIHRoZSBjYXJkLiAubG9hZCgpIGlzIGFuIGFzeW5jIG9wZXJhdGlvbiB0aGF0IGFsd2F5c1xuICAgKiByZXR1cm5zIGEgcmVzb2x2ZWQgcHJvbWlzZSAtIGl0IGNhbm5vdCBmYWlsLiBUaGlzIGlzIGRvbmUgb24gcHVycG9zZS4gVGhlXG4gICAqIG9ubHkgdGhpbmcgdGhhdCAubG9hZCgpIGlzIGRvaW5nIGlzIGF0dGVtcHRpbmcgdG8gcmV0cmlldmUgYW4gaW1hZ2UgZnJvbVxuICAgKiB0aGUgT3BlbldlYXRoZXIgQVBJLiBJZiBhbiBpbWFnZSBjYW5ub3QgYmUgcmV0cmlldmVkIHRoZW4gd2Ugc2ltcGx5IHJldHVyblxuICAgKiBhIHJlc29sdmVkIHByb21pc2UgYW5kIHRoZXJlIGlzIG5vIGltYWdlIHRvIGRpc3BsYXkgZm9yIHRoYXQgZm9yZWNhc3QgY2FyZC5cbiAgICovXG4gIGNvbnN0IGxvYWRGb3JlY2FzdCA9IGFzeW5jIGZ1bmN0aW9uICh3ZWF0aGVyRGF0YSA9IHt9KSB7XG4gICAgd2VhdGhlckRhdGEuZGFpbHkuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgICBkYWlseUZvcmVjYXN0cy5wdXNoKG5ldyBGb3JlY2FzdENhcmQoZGF5KSk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBJIHdhbnQgZm9yZWNhc3QubG9hZCgpIHRvIGJlIGNhbGxlZCBpbiBwYXJhbGxlbCBmb3IgYWxsIDcgb2YgdGhlXG4gICAgICogZm9yZWNhc3RzLiBJIHVzZSBtYXAgdG8gbWFwIG92ZXIgdGhlIGRhaWx5Rm9yZWNhc3RzIGFuZCBjYWxsIC5sb2FkKCkgb25cbiAgICAgKiBlYWNoIGZvcmVjYXN0LiAubG9hZCgpIHdpbGwgZmV0Y2ggYW4gaW1hZ2UgZnJvbSBPcGVuV2VhdGhlciBBUEkuIFRoaXNcbiAgICAgKiBpcyBzbG93LCBhbmQgSSBkb250IHdhbnQgdG8gcmVuZGVyIHRleHQgb24gdGhlIHNjcmVlbiBBTkQgVEhFTiBpbWFnZXNcbiAgICAgKiBhZnRlciBhIHNsaWdodCBkZWxheS4gU28gSSB1c2UgUHJvbWlzZS5hbGwoKSB0byBtYWtlIHN1cmUgYWxsIGltYWdlc1xuICAgICAqIGhhdmUgYmVlbiBmZXRjaGVkIGFuZCBsb2FkZWQgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCByZW5kZXJpbmcuXG4gICAgICovXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoZGFpbHlGb3JlY2FzdHMubWFwKChmb3JlY2FzdCkgPT4gZm9yZWNhc3QubG9hZCgpKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gcmVuZGVycyBlYWNoIGZvcmVjYXN0IGNhcmQgdG8gdGhlIGRvbS5cbiAgICovXG4gIGNvbnN0IHJlbmRlckZvcmVjYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGRhaWx5Rm9yZWNhc3RzLmZvckVhY2goKGZvcmVjYXN0KSA9PiBmb3JlY2FzdC5yZW5kZXIoX2ZvcmVjYXN0Q29udGFpbmVyKSk7XG4gICAgcm9vdE5vZGUuYXBwZW5kQ2hpbGQoX2ZvcmVjYXN0Q29udGFpbmVyKTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiByZW1vdmVzIHRoZSBmb3JlY2FzdCBjYXJkcyBmcm9tIHRoZSBkb20uIFRoaXMgaXMgbmVlZGVkIHNvXG4gICAqIHdoZW4gdXNlcnMgbWFrZSBzdWJzZXF1ZW50IHJlcXVlc3RzLCB0aGUgcHJldmlvdXMgcmVzdWx0cyBhcmUgcmVtb3ZlZC5cbiAgICovXG4gIGNvbnN0IHJlbW92ZUZvcmVjYXN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBfZm9yZWNhc3RDb250YWluZXIucmVtb3ZlKCk7XG4gICAgX2ZvcmVjYXN0Q29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICBjbGFzc0xpc3Q6IFtcImZvcmVjYXN0LWNvbnRhaW5lclwiXSxcbiAgICB9KTtcbiAgICBkYWlseUZvcmVjYXN0cyA9IFtdO1xuICB9O1xuXG4gIHJldHVybiB7IGxvYWRGb3JlY2FzdCwgcmVuZGVyRm9yZWNhc3QsIHJlbW92ZUZvcmVjYXN0cyB9O1xufVxuIiwiaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi4vSGVscGVyRnVuY3Rpb25zL0h0bWxFbGVtZW50XCI7XG5pbXBvcnQgXCIuL3NwaW5uZXIuY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGlubmVyKCkge1xuICBjb25zdCByb290Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBpZDogXCJzcGlubmVyLWNvbnRhaW5lclwiLFxuICB9KTtcblxuICBjb25zdCBzcGlubmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGlkOiBcInNwaW5uZXJcIixcbiAgfSk7XG5cbiAgY29uc3Qgc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNwaW5uZXIpO1xuICAgIHJvb3ROb2RlLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH07XG5cbiAgY29uc3Qgc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgc3RhcnQsIHN0b3AgfTtcbn1cbiIsImltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSBcIi4uL0hlbHBlckZ1bmN0aW9ucy9IdG1sRWxlbWVudFwiO1xuaW1wb3J0IHdlYXRoZXIgZnJvbSBcIi4uL3dlYXRoZXIuanNcIjtcbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gXCIuLi9IZWxwZXJGdW5jdGlvbnMvbG9hZEltYWdlXCI7XG5pbXBvcnQgeyB0ZW1wVG9Db2xvciB9IGZyb20gXCIuLi9IZWxwZXJGdW5jdGlvbnMvdGVtcFRvQ29sb3IuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEhvdXJseUZvcmVjYXN0Q2FyZCh3ZWF0aGVyRGF0YSkge1xuICBsZXQgaW1hZ2U7XG5cbiAgY29uc3QgX3BhcnNlZFdlYXRoZXJEYXRhID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgeyB0ZW1wLCBkdCwgcG9wIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGljb24gfSA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF07XG4gICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZShOdW1iZXIucGFyc2VJbnQoZHQudG9TdHJpbmcoKSArIFwiMDAwXCIpKTtcbiAgICBjb25zdCB0aW1lID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1VU1wiLCB7XG4gICAgICB0aW1lU3R5bGU6IFwic2hvcnRcIixcbiAgICB9KS5mb3JtYXQoZGF0ZVRpbWUpO1xuICAgIHBvcCA9IE1hdGguZmxvb3IocG9wICogMTAwKTtcbiAgICB0ZW1wID0gTWF0aC5yb3VuZCh0ZW1wKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGVtcCxcbiAgICAgIGljb24sXG4gICAgICB0aW1lLFxuICAgICAgcG9wLFxuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgX2NvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBjbGFzc0xpc3Q6IFtcImhvdXJseS1mb3JlY2FzdC1jYXJkXCJdLFxuICB9KTtcblxuICAvKipcbiAgICogVHJ5IHRvIGxvYWQgYW4gaW1hZ2UgZnJvbSBPcGVuV2VhdGhlciBBUEkuIElmIHRoaXMgcHJvY2VzcyBmYWlscywgd2Ugd2lsbFxuICAgKiBjb25zdW1lIHRoZSBlcnJvciBhbmQgY29udGludWUgd2l0aCBwcm9jZXNzaW5nIHRoZSB1c2VyIHJlcXVlc3QuIFdlIGNhblxuICAgKiBzaWxlbnRseSBjb25zdW1lIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSB3aWxsIHNpbXBseSBub3QgZGlzcGxheSBhbiBpbWFnZSBpZlxuICAgKiB0aGVyZSBpcyBhbiBlcnJvci4gV2h5IGxvZyBvciBzdG9wIGV4ZWN1dGlvbiBzaW1wbHkgYmVjYXVzZSB3ZSBjYW4gZGlzcGxheVxuICAgKiBhbiBpbWFnZT8gUmF0aGVyLCB3ZSBjb250aW51ZSB3aXRoIG91ciBwcm9jZXNzIGFuZCBmb3JnZXQgYWJvdXQgc2hvd2luZyBhblxuICAgKiBpbWFnZSB0byB0aGUgdXNlci5cbiAgICovXG4gIGNvbnN0IGxvYWQgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXJsID0gd2VhdGhlci5nZXRJY29uU3JjKF9wYXJzZWRXZWF0aGVyRGF0YS5pY29uKTtcbiAgICB0cnkge1xuICAgICAgaW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UodXJsKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAvKipcbiAgICAgICAqIFJldHVybiB0cnVlLiBXZSB3aWxsIGNvbnN1bWUgdGhlIGVycm9yIHJldHVybmVkIGJ5IHRoZSBBUEkgYW5kIGp1c3RcbiAgICAgICAqIG5vdCBzaG93IGFuIGltYWdlLiBObyBiaWcgZGVhbC5cbiAgICAgICAqL1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uIChwYXJlbnROb2RlKSB7XG4gICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgIG5ldyBIdG1sRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgICBjbGFzc0xpc3Q6IFtcInRpbWVcIl0sXG4gICAgICAgIGlubmVyVGV4dDogYCR7X3BhcnNlZFdlYXRoZXJEYXRhLnRpbWV9YCxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAvLyBTaG93IHRoZSByYWluIHBlcmNlbnRhZ2UgaWYgaXQgaXMgb3ZlciAyMCVcbiAgICBpZiAoX3BhcnNlZFdlYXRoZXJEYXRhLnBvcCA+IDIwKSB7XG4gICAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgICAgIGlubmVyVGV4dDogYCR7X3BhcnNlZFdlYXRoZXJEYXRhLnBvcH0lYCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcInBcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbdGVtcFRvQ29sb3IoX3BhcnNlZFdlYXRoZXJEYXRhLnRlbXApXSxcbiAgICAgICAgaW5uZXJUZXh0OiBgJHtfcGFyc2VkV2VhdGhlckRhdGEudGVtcH3CsGAsXG4gICAgICB9KVxuICAgICk7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChfY29udGFpbmVyKTtcbiAgfTtcblxuICByZXR1cm4geyByZW5kZXIsIGxvYWQgfTtcbn1cbiIsImltcG9ydCB7IEhvdXJseUZvcmVjYXN0Q2FyZCB9IGZyb20gXCIuL0hvdXJseUZvcmVjYXN0Q2FyZFwiO1xuaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi4vSGVscGVyRnVuY3Rpb25zL0h0bWxFbGVtZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBob3VybHlGb3JlY2FzdChyb290Tm9kZSkge1xuICAvLyBTdG9yZSBlYWNoIGZvcmVjYXN0IGNhcmQgaW4gdGhpcyBhcnJheSBmb3IgZnV0dXJlIGl0ZXJhdGlvbi5cbiAgbGV0IGhvdXJseUZvcmVjYXN0cyA9IFtdO1xuXG4gIGxldCBfaG91cmx5Rm9yZWNhc3RDb250YWluZXIgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgY2xhc3NMaXN0OiBbXG4gICAgICBcImhvdXJseS1mb3JlY2FzdC1jb250YWluZXJcIixcbiAgICAgIFwiZmxleFwiLFxuICAgICAgXCJmbGV4LXJvd1wiLFxuICAgICAgXCJmbGV4LW5vLXdyYXBcIixcbiAgICBdLFxuICB9KTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBlYWNoIGZvcmVjYXN0IGNhcmQgYnkgY3JlYXRpbmcgYW4gaW5zdGFuY2Ugb2YgRm9yZWNhc3RDYXJkIGFuZFxuICAgKiBjYWxsaW5nIC5sb2FkKCkgb24gdGhlIGNhcmQuIC5sb2FkKCkgaXMgYW4gYXN5bmMgb3BlcmF0aW9uIHRoYXQgYWx3YXlzXG4gICAqIHJldHVybnMgYSByZXNvbHZlZCBwcm9taXNlIC0gaXQgY2Fubm90IGZhaWwuIFRoaXMgaXMgZG9uZSBvbiBwdXJwb3NlLiBUaGVcbiAgICogb25seSB0aGluZyB0aGF0IC5sb2FkKCkgaXMgZG9pbmcgaXMgYXR0ZW1wdGluZyB0byByZXRyaWV2ZSBhbiBpbWFnZSBmcm9tXG4gICAqIHRoZSBPcGVuV2VhdGhlciBBUEkuIElmIGFuIGltYWdlIGNhbm5vdCBiZSByZXRyaWV2ZWQgdGhlbiB3ZSBzaW1wbHkgcmV0dXJuXG4gICAqIGEgcmVzb2x2ZWQgcHJvbWlzZSBhbmQgdGhlcmUgaXMgbm8gaW1hZ2UgdG8gZGlzcGxheSBmb3IgdGhhdCBmb3JlY2FzdCBjYXJkLlxuICAgKi9cbiAgY29uc3QgbG9hZEZvcmVjYXN0ID0gYXN5bmMgZnVuY3Rpb24gKHdlYXRoZXJEYXRhKSB7XG4gICAgY29uc3QgaG91cmx5Rm9yZWNhc3REYXRhID0gd2VhdGhlckRhdGEuaG91cmx5LnNwbGljZSgyMyk7XG5cbiAgICBob3VybHlGb3JlY2FzdERhdGEuZm9yRWFjaCgoaG91ciwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHdlYXRoZXJDYXJkID0gbmV3IEhvdXJseUZvcmVjYXN0Q2FyZChob3VyKTtcbiAgICAgIGhvdXJseUZvcmVjYXN0cy5wdXNoKHdlYXRoZXJDYXJkKTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBJIHdhbnQgZm9yZWNhc3QubG9hZCgpIHRvIGJlIGNhbGxlZCBpbiBwYXJhbGxlbCBmb3IgYWxsIG9mIHRoZVxuICAgICAqIGZvcmVjYXN0cy4gSSB1c2UgbWFwIHRvIG1hcCBvdmVyIHRoZSBob3VybHlGb3JlY2FzdHMgYW5kIGNhbGwgLmxvYWQoKSBvblxuICAgICAqIGVhY2ggZm9yZWNhc3QuIC5sb2FkKCkgd2lsbCBmZXRjaCBhbiBpbWFnZSBmcm9tIE9wZW5XZWF0aGVyIEFQSS4gVGhpc1xuICAgICAqIGlzIHNsb3csIGFuZCBJIGRvbnQgd2FudCB0byByZW5kZXIgdGV4dCBvbiB0aGUgc2NyZWVuIEFORCBUSEVOIGltYWdlc1xuICAgICAqIGFmdGVyIGEgc2xpZ2h0IGRlbGF5LiBTbyBJIHVzZSBQcm9taXNlLmFsbCgpIHRvIG1ha2Ugc3VyZSBhbGwgaW1hZ2VzXG4gICAgICogaGF2ZSBiZWVuIGZldGNoZWQgYW5kIGxvYWRlZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICBhd2FpdCBQcm9taXNlLmFsbChob3VybHlGb3JlY2FzdHMubWFwKChmb3JlY2FzdCkgPT4gZm9yZWNhc3QubG9hZCgpKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gcmVuZGVycyBlYWNoIGZvcmVjYXN0IGNhcmQgdG8gdGhlIGRvbS5cbiAgICovXG4gIGNvbnN0IHJlbmRlckZvcmVjYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGhvdXJseUZvcmVjYXN0cy5mb3JFYWNoKChmb3JlY2FzdCkgPT5cbiAgICAgIGZvcmVjYXN0LnJlbmRlcihfaG91cmx5Rm9yZWNhc3RDb250YWluZXIpXG4gICAgKTtcbiAgICByb290Tm9kZS5hcHBlbmRDaGlsZChfaG91cmx5Rm9yZWNhc3RDb250YWluZXIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgdGhlIGZvcmVjYXN0IGNhcmRzIGZyb20gdGhlIGRvbS4gVGhpcyBpcyBuZWVkZWQgc29cbiAgICogd2hlbiB1c2VycyBtYWtlIHN1YnNlcXVlbnQgcmVxdWVzdHMsIHRoZSBwcmV2aW91cyByZXN1bHRzIGFyZSByZW1vdmVkLlxuICAgKi9cbiAgY29uc3QgcmVtb3ZlRm9yZWNhc3RzID0gZnVuY3Rpb24gKCkge1xuICAgIF9ob3VybHlGb3JlY2FzdENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBfaG91cmx5Rm9yZWNhc3RDb250YWluZXIgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgIGNsYXNzTGlzdDogW1xuICAgICAgICBcImhvdXJseS1mb3JlY2FzdC1jb250YWluZXJcIixcbiAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgIFwiZmxleC1yb3dcIixcbiAgICAgICAgXCJmbGV4LW5vLXdyYXBcIixcbiAgICAgIF0sXG4gICAgfSk7XG4gICAgaG91cmx5Rm9yZWNhc3RzID0gW107XG4gIH07XG5cbiAgcmV0dXJuIHsgbG9hZEZvcmVjYXN0LCByZW5kZXJGb3JlY2FzdCwgcmVtb3ZlRm9yZWNhc3RzIH07XG59XG4iLCIvKipcbiAqIEFuIGFic3RyYWN0aW9uIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBPcGVuV2VhdGhlciBhcGkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBUaGlzIHByb2plY3Qgd2lsbCBydW4gb24gR2l0SHViIHBhZ2VzLiBUaGVyZWZvcmUgdGhlcmUgd2lsbCBub3QgYmUgYSBzZXJ2ZXJcbiAgICogd2hlcmUgSSBjYW4gaW5qZWN0IGVudi4gdmFycy4gVGhpcyBpcyBPS0FZIGJlY2F1c2UgdGhlIE9wZW5XZWF0aGVyIEFQSSBpc1xuICAgKiBmcmVlLlxuICAgKi9cbiAgY29uc3QgQVBJX0tFWSA9IFwiYWM3NmM4MWZjMDNiODE2ZTQ5YjNkMDZmNzY1Nzk1MDZcIjtcblxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2Ugb2JqZWN0IHdpdGggY29vcmRpbmF0ZXNcbiAgICogeyBsYXQ6IG4sIGxvbmc6IHh9XG4gICAqIE9uIGVycm9yIHJldHVybiB0aGUgZXJyb3IgbWVzc2FnZS5cbiAgICovXG4gIGFzeW5jIGZ1bmN0aW9uIF9nZXRDb29yZHMoY2l0eU5hbWUpIHtcbiAgICBsZXQgZGF0YTtcbiAgICBjb25zdCBnZW9jb2RlVXJsID1cbiAgICAgIFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0XCIgK1xuICAgICAgYD9xPSR7Y2l0eU5hbWV9JmFwcGlkPSR7QVBJX0tFWX1gO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdlb2NvZGVVcmwpO1xuICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHsgbGF0LCBsb24gfSA9IGRhdGFbMF07XG4gICAgICByZXR1cm4geyBsYXQsIGxvbiB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFNlYXJjaEVycm9yKGBObyBkYXRhIGZvciAke2NpdHlOYW1lfWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHdlYXRoZXIgZm9yIGEgZ2l2ZW4gY2l0eSBuYW1lLiBJZiB0aGUgY2l0eSBpcyBub3QgZm91bmQgdGhlblxuICAgKiBwcm9wYWdhdGUgdGhlIGVycm9yIG1lc3NhZ2UgdG8gdGhlIGNhbGxlci5cbiAgICovXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eU5hbWUpIHtcbiAgICBsZXQgZGF0YTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGxhdCwgbG9uIH0gPSBhd2FpdCBfZ2V0Q29vcmRzKGNpdHlOYW1lKTtcbiAgICAgIGNvbnN0IGFwaVVybCA9XG4gICAgICAgIFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGxcIiArXG4gICAgICAgIGA/bGF0PSR7bGF0fSZsb249JHtsb259JmV4Y2x1ZGU9bWludXRlbHlgICtcbiAgICAgICAgYCZ1bml0cz1pbXBlcmlhbGAgK1xuICAgICAgICBgJmFwcGlkPSR7QVBJX0tFWX1gO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCk7XG4gICAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBpY29uIHVybCBmb3IgdGhlIHByb3ZpZGVkIGljb24gY29kZS5cbiAgICogVGhpcyBpcyB0aGUgdXJsIHRvIGJlIHVzZWQgYXMgYW4gaW1nLnNyY1xuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SWNvblNyYyhpY29uQ29kZSwgb3B0aW9ucyA9IHsgbGFyZ2U6IGZhbHNlIH0pIHtcbiAgICBpZiAob3B0aW9ucy5sYXJnZSkge1xuICAgICAgcmV0dXJuIGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29uQ29kZX1AMngucG5nYDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29uQ29kZX0ucG5nYDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBnZXRXZWF0aGVyLCBnZXRJY29uU3JjIH07XG59KSgpO1xuXG5jbGFzcyBJbnZhbGlkU2VhcmNoRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSBcIkludmFsaWRTZWFyY2hFcnJvclwiO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBJbXBvcnQgdGhlIHJlcXVpcmVkIENTUyBmaWxlcyBmb3IgU2tlbGV0b24gdG8gd29yay5cbiAqIFRoZXNlIGFyZSBDU1MgZmlsZXMgY3JlYXRlZCBmb3IgU2tlbGV0b24uIEkgZGlkIG5vdCBjcmVhdGUgdGhlc2UuXG4gKi9cbmltcG9ydCBcIi4vU2tlbGV0b24vY3NzL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBcIi4vU2tlbGV0b24vY3NzL3NrZWxldG9uLmNzc1wiO1xuXG4vKipcbiAqIEltcG9ydCB0aGUgbGF5b3V0IHN0eWxpbmcuIFRoaXMgaXMgd2hlcmUgbGF5b3V0IGNsYXNzZXMgYXJlIGRlZmluZWQuXG4gKi9cbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmltcG9ydCB7IHNlYXJjaEJhciB9IGZyb20gXCIuL1NlYXJjaEJhci9zZWFyY2hCYXIuanNcIjtcbmltcG9ydCB7IHNwaW5uZXIgfSBmcm9tIFwiLi9TcGlubmVyL3NwaW5uZXJcIjtcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gXCIuL0hlbHBlckZ1bmN0aW9ucy9FcnJvck1lc3NhZ2VcIjtcbmltcG9ydCB3ZWF0aGVyIGZyb20gXCIuL3dlYXRoZXJcIjtcbmltcG9ydCB7IEN1cnJlbnRXZWF0aGVyQ2FyZCB9IGZyb20gXCIuL0N1cnJlbnRXZWF0aGVyL0N1cnJlbnRXZWF0aGVyQ2FyZFwiO1xuaW1wb3J0IHsgc2V2ZW5EYXlGb3JlY2FzdCB9IGZyb20gXCIuL1NldmVuRGF5Rm9yZWNhc3Qvc2V2ZW5EYXlGb3JlY2FzdFwiO1xuaW1wb3J0IHsgaG91cmx5Rm9yZWNhc3QgfSBmcm9tIFwiLi9ob3VybHlGb3JlY2FzdC9ob3VybHlGb3JlY2FzdFwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICBjb25zdCByb290Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKTtcbiAgY29uc3Qgc3Bpbm5pbmdMb2FkZXIgPSBzcGlubmVyKCk7XG4gIGNvbnN0IGVycm9yTWVzc2FnZUNvbXBvbmVudCA9IG5ldyBFcnJvck1lc3NhZ2Uocm9vdE5vZGUpO1xuICBsZXQgY3VycmVudFdlYXRoZXJDYXJkO1xuICBsZXQgc2V2ZW5EYXlGb3JlY2FzdExvYWRlciA9IHNldmVuRGF5Rm9yZWNhc3Qocm9vdE5vZGUpO1xuICBsZXQgaG91cmx5Rm9yZWNhc3RMb2FkZXIgPSBob3VybHlGb3JlY2FzdChyb290Tm9kZSk7XG4gIHNlYXJjaEJhcihyb290Tm9kZSwgbG9hZFJlc3VsdHMpLnJlbmRlcigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGdldHMgZmlyZWQgd2hlbiB0aGUgdXNlciBzZWFyY2hlcyBpbiB0aGUgc2VhcmNoXG4gICAqIGJhci4gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uIGNhbGwgZm9yIGNyZWF0aW5nIHRoZVxuICAgKiBzZWFyY2ggYmFyIGNvbXBvbmVudC5cbiAgICovXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRSZXN1bHRzKGNpdHlOYW1lKSB7XG4gICAgbGV0IHdlYXRoZXJEYXRhO1xuICAgIHNwaW5uaW5nTG9hZGVyLnN0YXJ0KCk7XG4gICAgY2xlYXJQcmV2aW91c1NlYXJjaFJlc3VsdHMoKTtcbiAgICB0cnkge1xuICAgICAgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyLmdldFdlYXRoZXIoY2l0eU5hbWUpO1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBob3VybHlGb3JlY2FzdExvYWRlci5sb2FkRm9yZWNhc3Qod2VhdGhlckRhdGEpLFxuICAgICAgICBzZXZlbkRheUZvcmVjYXN0TG9hZGVyLmxvYWRGb3JlY2FzdCh3ZWF0aGVyRGF0YSksXG4gICAgICBdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yLm5hbWUgPT0gXCJJbnZhbGlkU2VhcmNoRXJyb3JcIikge1xuICAgICAgICBlcnJvck1lc3NhZ2VDb21wb25lbnQuc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpLnJlbmRlcigpO1xuICAgICAgICBzcGlubmluZ0xvYWRlci5zdG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2FkQ3VycmVudFdlYXRoZXIod2VhdGhlckRhdGEsIGNpdHlOYW1lKTtcbiAgICBob3VybHlGb3JlY2FzdExvYWRlci5yZW5kZXJGb3JlY2FzdCgpO1xuICAgIHNldmVuRGF5Rm9yZWNhc3RMb2FkZXIucmVuZGVyRm9yZWNhc3QoKTtcbiAgICBzcGlubmluZ0xvYWRlci5zdG9wKCk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCB0aGUgY3VycmVudCB3ZWF0aGVyIGNhcmQuIFRoaXMgaXMgdGhlIHRvcCBtb3N0IGNvbXBvbmVudCBpbiB0aGUgRE9NLlxuICAgKi9cbiAgZnVuY3Rpb24gbG9hZEN1cnJlbnRXZWF0aGVyKHdlYXRoZXJEYXRhLCBjaXR5TmFtZSkge1xuICAgIGN1cnJlbnRXZWF0aGVyQ2FyZCA9IG5ldyBDdXJyZW50V2VhdGhlckNhcmQoXG4gICAgICB3ZWF0aGVyRGF0YSxcbiAgICAgIHJvb3ROb2RlLFxuICAgICAgY2l0eU5hbWVcbiAgICApO1xuICAgIGN1cnJlbnRXZWF0aGVyQ2FyZC5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBvdXQgdGhlIHNjcmVlbiBzbyB3ZSBjYW4gcG9wdWxhdGUgaXQgd2l0aCBuZXcgcmVzdWx0cy5cbiAgICovXG4gIGZ1bmN0aW9uIGNsZWFyUHJldmlvdXNTZWFyY2hSZXN1bHRzKCkge1xuICAgIGVycm9yTWVzc2FnZUNvbXBvbmVudC5yZW1vdmUoKTtcbiAgICBpZiAoY3VycmVudFdlYXRoZXJDYXJkKSBjdXJyZW50V2VhdGhlckNhcmQucmVtb3ZlKCk7XG4gICAgc2V2ZW5EYXlGb3JlY2FzdExvYWRlci5yZW1vdmVGb3JlY2FzdHMoKTtcbiAgICBob3VybHlGb3JlY2FzdExvYWRlci5yZW1vdmVGb3JlY2FzdHMoKTtcbiAgfVxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==