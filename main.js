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
___CSS_LOADER_EXPORT___.push([module.id, "#root{\n  /* padding-top: 50px; */\n  margin-top: 50px;\n  --main-bg-color: #F8FFE5;\n  --main-card-color: #1E2D24 ;\n  --temp-color-cold: #0af;\n  --temp-color-warm: #f09800;\n  --temp-color-hot: #f00000 ;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-no-wrap{\n  flex-wrap: nowrap;\n}\n\n.flex-justify-center {\n  justify-content: center;\n}\n\n.flex-justify-even {\n  justify-content: space-evenly;\n}\n\n.flex-align-center {\n  align-items: center;\n}\n\n.debug {\n  border: 2px solid red;\n}\n\n.m-0 {\n  margin: 0;\n}\n\n.ml-5 {\n  margin-left: 5px;\n}\n\n.mr-5 {\n  margin-right: 5px;\n}\n\n/* this is the main temp under the city name */\n#main-temp {\n  font-size: 9rem;\n}\n\n.temp-color-1 { /* -10 - 40 */\n  color: #1AADFF;\n}\n\n.temp-color-2 { /* 40 - 49 */\n  color: #1782FF;\n}\n\n.temp-color-3 { /* 50 - 59 */\n  color: #3317D9;\n}\n\n.temp-color-4 { /* 60 - 69 */\n  color: #7439A4;\n}\n.temp-color-5 { /* 70 - 79 */\n  color: #CE6752;\n}\n\n.temp-color-6 { /* 80 - 89 */\n  color: #FF6E04;\n}\n\n.temp-color-7 { /* 90 - 99 */\n  color: #FF4705;\n}\n\n.temp-color-8 { /* 100 - 119*/\n  color: #FF0101;\n}\n\n\n/* Larger than mobile */\n@media (min-width: 350px) {\n  body {\n    overflow-x: hidden;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n       -moz-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n\n  .container{\n    width: 100%;\n    padding: 8px;\n  }\n\n  input[type=text]{\n    min-width: 100%;\n    min-height: 50px;\n    font-weight: bolder;\n    font-size: 2rem;\n    text-align: center;\n  }\n\n  .current-weather-card {\n    max-width: 100%;\n    margin: 0 auto;\n    padding: 10px;\n    border-radius: 1rem;\n  }\n\n  .current-weather-card > div > p {\n    font-weight: bolder;\n    font-size: 3rem;\n  }\n\n  #current-weather-card-temps-container {\n    width: 100%;\n    justify-content: center;\n    gap: 20px;\n  }\n\n  .hourly-forecast-container {\n    max-width: 100%;\n    margin: 15px auto;\n    border-radius: 1rem;\n    overflow: scroll;\n    -webkit-box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5); \n    box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5);\n    padding: 10px;\n\n    font-weight: bolder;\n  }\n\n  .hourly-forecast-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: 100px;\n  }\n\n  .hourly-forecast-card > .time {\n    font-size: 1.2rem;\n  }\n\n  .current-weather-card, .hourly-forecast-container, .forecast-container {\n    background-color: #decfcf;\n  }\n\n  .forecast-container {\n    max-width: 100%;\n    margin: 15px auto;\n    overflow: scroll;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    border-radius: 1rem;\n    -webkit-box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5); \n    box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5);\n    padding: 10px 5px;\n  }\n\n  .forecast-card {\n    border-top: 1px solid #e6e6e6;\n    width: 100%;\n    justify-content: space-evenly;\n    font-weight: bolder;\n  }\n\n  .forecast-card > .weekday {\n    color: white;\n    font-size: 2rem;\n  }\n}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {\n}\n\n/* Larger than tablet */\n@media (min-width: 750px) {\n}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {\n}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {\n  .forecast-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .hourly-forecast-container {\n    border-radius: 1rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,wBAAwB;EACxB,2BAA2B;EAC3B,uBAAuB;EACvB,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA,8CAA8C;AAC9C;EACE,eAAe;AACjB;;AAEA,gBAAgB,aAAa;EAC3B,cAAc;AAChB;;AAEA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;;AAEA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;;AAEA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;AACA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;;AAEA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;;AAEA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;;AAEA,gBAAgB,aAAa;EAC3B,cAAc;AAChB;;;AAGA,uBAAuB;AACvB;EACE;IACE,kBAAkB;IAClB,WAAW;IACX,8BAA8B;OAC3B,2BAA2B;YACtB,sBAAsB;EAChC;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,cAAc;IACd,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;IACnB,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,uBAAuB;IACvB,SAAS;EACX;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,0DAA0D;IAC1D,kDAAkD;IAClD,aAAa;;IAEb,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,cAAc;IACd,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,gBAAgB;;IAEhB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;;IAEnB,mBAAmB;IACnB,0DAA0D;IAC1D,kDAAkD;IAClD,iBAAiB;EACnB;;EAEA;IACE,6BAA6B;IAC7B,WAAW;IACX,6BAA6B;IAC7B,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,eAAe;EACjB;AACF;;AAEA,8DAA8D;AAC9D;AACA;;AAEA,uBAAuB;AACvB;AACA;;AAEA,wBAAwB;AACxB;AACA;;AAEA,2BAA2B;AAC3B;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;AACF","sourcesContent":["#root{\n  /* padding-top: 50px; */\n  margin-top: 50px;\n  --main-bg-color: #F8FFE5;\n  --main-card-color: #1E2D24 ;\n  --temp-color-cold: #0af;\n  --temp-color-warm: #f09800;\n  --temp-color-hot: #f00000 ;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-no-wrap{\n  flex-wrap: nowrap;\n}\n\n.flex-justify-center {\n  justify-content: center;\n}\n\n.flex-justify-even {\n  justify-content: space-evenly;\n}\n\n.flex-align-center {\n  align-items: center;\n}\n\n.debug {\n  border: 2px solid red;\n}\n\n.m-0 {\n  margin: 0;\n}\n\n.ml-5 {\n  margin-left: 5px;\n}\n\n.mr-5 {\n  margin-right: 5px;\n}\n\n/* this is the main temp under the city name */\n#main-temp {\n  font-size: 9rem;\n}\n\n.temp-color-1 { /* -10 - 40 */\n  color: #1AADFF;\n}\n\n.temp-color-2 { /* 40 - 49 */\n  color: #1782FF;\n}\n\n.temp-color-3 { /* 50 - 59 */\n  color: #3317D9;\n}\n\n.temp-color-4 { /* 60 - 69 */\n  color: #7439A4;\n}\n.temp-color-5 { /* 70 - 79 */\n  color: #CE6752;\n}\n\n.temp-color-6 { /* 80 - 89 */\n  color: #FF6E04;\n}\n\n.temp-color-7 { /* 90 - 99 */\n  color: #FF4705;\n}\n\n.temp-color-8 { /* 100 - 119*/\n  color: #FF0101;\n}\n\n\n/* Larger than mobile */\n@media (min-width: 350px) {\n  body {\n    overflow-x: hidden;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n       -moz-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n\n  .container{\n    width: 100%;\n    padding: 8px;\n  }\n\n  input[type=text]{\n    min-width: 100%;\n    min-height: 50px;\n    font-weight: bolder;\n    font-size: 2rem;\n    text-align: center;\n  }\n\n  .current-weather-card {\n    max-width: 100%;\n    margin: 0 auto;\n    padding: 10px;\n    border-radius: 1rem;\n  }\n\n  .current-weather-card > div > p {\n    font-weight: bolder;\n    font-size: 3rem;\n  }\n\n  #current-weather-card-temps-container {\n    width: 100%;\n    justify-content: center;\n    gap: 20px;\n  }\n\n  .hourly-forecast-container {\n    max-width: 100%;\n    margin: 15px auto;\n    border-radius: 1rem;\n    overflow: scroll;\n    -webkit-box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5); \n    box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5);\n    padding: 10px;\n\n    font-weight: bolder;\n  }\n\n  .hourly-forecast-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: 100px;\n  }\n\n  .hourly-forecast-card > .time {\n    font-size: 1.2rem;\n  }\n\n  .current-weather-card, .hourly-forecast-container, .forecast-container {\n    background-color: #decfcf;\n  }\n\n  .forecast-container {\n    max-width: 100%;\n    margin: 15px auto;\n    overflow: scroll;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    border-radius: 1rem;\n    -webkit-box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5); \n    box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5);\n    padding: 10px 5px;\n  }\n\n  .forecast-card {\n    border-top: 1px solid #e6e6e6;\n    width: 100%;\n    justify-content: space-evenly;\n    font-weight: bolder;\n  }\n\n  .forecast-card > .weekday {\n    color: white;\n    font-size: 2rem;\n  }\n}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {\n}\n\n/* Larger than tablet */\n@media (min-width: 750px) {\n}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {\n}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {\n  .forecast-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .hourly-forecast-container {\n    border-radius: 1rem;\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./src/HtmlElement.js":
/*!****************************!*\
  !*** ./src/HtmlElement.js ***!
  \****************************/
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

/***/ "./src/errorMessage.js":
/*!*****************************!*\
  !*** ./src/errorMessage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorMessage": () => (/* binding */ errorMessage)
/* harmony export */ });
/* harmony import */ var _HtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlElement.js */ "./src/HtmlElement.js");


function errorMessage(errorMessage) {
  const rowContainer = new _HtmlElement_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
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
    innerText: errorMessage,
  });

  rowContainer.appendChild(_columnContainer);
  _columnContainer.appendChild(textComponent);

  return rowContainer;
}


/***/ }),

/***/ "./src/hourlyWeatherComponents/HourlyForecastCard.js":
/*!***********************************************************!*\
  !*** ./src/hourlyWeatherComponents/HourlyForecastCard.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HourlyForecastCard": () => (/* binding */ HourlyForecastCard)
/* harmony export */ });
/* harmony import */ var _HtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HtmlElement */ "./src/HtmlElement.js");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather.js */ "./src/weather.js");
/* harmony import */ var _loadImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loadImage */ "./src/loadImage.js");
/* harmony import */ var _tempToColor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tempToColor.js */ "./src/tempToColor.js");





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

  const _container = new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
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
      image = await (0,_loadImage__WEBPACK_IMPORTED_MODULE_2__.loadImage)(url);
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
      new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
        type: "p",
        classList: ["time"],
        innerText: `${_parsedWeatherData.time}`,
      })
    );
    _container.appendChild(image);
    // Show the rain percentage if it is over 20%
    if (_parsedWeatherData.pop > 20) {
      _container.appendChild(
        new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
          type: "p",
          innerText: `${_parsedWeatherData.pop}%`,
        })
      );
    }
    _container.appendChild(
      new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
        type: "p",
        classList: [(0,_tempToColor_js__WEBPACK_IMPORTED_MODULE_3__.tempToColor)(_parsedWeatherData.temp)],
        innerText: `${_parsedWeatherData.temp}°`,
      })
    );
    parentNode.appendChild(_container);
  };

  return { render, load };
}


/***/ }),

/***/ "./src/hourlyWeatherComponents/hourlyForecastLoader.js":
/*!*************************************************************!*\
  !*** ./src/hourlyWeatherComponents/hourlyForecastLoader.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hourlyForecastLoader": () => (/* binding */ hourlyForecastLoader)
/* harmony export */ });
/* harmony import */ var _HourlyForecastCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HourlyForecastCard */ "./src/hourlyWeatherComponents/HourlyForecastCard.js");
/* harmony import */ var _HtmlElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HtmlElement */ "./src/HtmlElement.js");



function hourlyForecastLoader() {
  // Store each forecast card in this array for future iteration.
  let hourlyForecasts = [];

  let _hourlyForecastContainer = new _HtmlElement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
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
  const renderForecast = function (rootNode) {
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
    _hourlyForecastContainer = new _HtmlElement__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
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

/***/ "./src/loadImage.js":
/*!**************************!*\
  !*** ./src/loadImage.js ***!
  \**************************/
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

/***/ "./src/searchComponent.js":
/*!********************************!*\
  !*** ./src/searchComponent.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchComponent": () => (/* binding */ searchComponent)
/* harmony export */ });
/* harmony import */ var _HtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlElement.js */ "./src/HtmlElement.js");
/* harmony import */ var _errorMessage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorMessage.js */ "./src/errorMessage.js");
/* harmony import */ var _weatherCardComponents_CurrentWeatherCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherCardComponents/CurrentWeatherCard.js */ "./src/weatherCardComponents/CurrentWeatherCard.js");
/* harmony import */ var _weatherCardComponents_forecastLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weatherCardComponents/forecastLoader.js */ "./src/weatherCardComponents/forecastLoader.js");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather.js */ "./src/weather.js");
/* harmony import */ var _hourlyWeatherComponents_hourlyForecastLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hourlyWeatherComponents/hourlyForecastLoader.js */ "./src/hourlyWeatherComponents/hourlyForecastLoader.js");
// The module for creating Skeleton js components.






function searchComponent(rootNode) {
  /**
   * Store reference to the error message (when a user types in an invalid city)
   * So we can remove this error message when the user creates a new search
   */
  let _errorMessageComponent;

  /**
   * Store reference to the current weather card. This way it can be replaced
   * on subsequent searches.
   */
  let _currentWeatherCard;

  const sevenDayForecast = (0,_weatherCardComponents_forecastLoader_js__WEBPACK_IMPORTED_MODULE_3__.forecastLoader)();
  const hourlyForecast = (0,_hourlyWeatherComponents_hourlyForecastLoader_js__WEBPACK_IMPORTED_MODULE_5__.hourlyForecastLoader)();

  const _componentContainer = new _HtmlElement_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
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

  const _searchBar = new _HtmlElement_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "input",
    attributes: {
      type: "text",
      // placeholder: "Enter a city name",
      style: "width: 90%",
    },
    id: "cityName",
  });

  const _focus = function () {
    _searchBar.focus();
  };

  /**
   * Listen for when the user presses the Enter key
   */
  const _handleKeydown = async function (e) {
    if (e.key != "Enter") return;
    if (screen.width < 500) _searchBar.blur();
    _processData(e);
  };

  /**
   * Process the form.
   */
  const _processData = async function (e) {
    //Dont process an empty search term.
    if (e.target.value.trim().length <= 0) {
      e.target.value = "";
      return;
    }

    //Remove any previous error messages
    if (_errorMessageComponent) _errorMessageComponent.remove();
    if (_currentWeatherCard) _currentWeatherCard.remove();
    sevenDayForecast.removeForecasts();
    hourlyForecast.removeForecasts();

    try {
      const weatherData = await _weather_js__WEBPACK_IMPORTED_MODULE_4__["default"].getWeather(e.target.value);
      const todaysWeather = new _weatherCardComponents_CurrentWeatherCard_js__WEBPACK_IMPORTED_MODULE_2__.CurrentWeatherCard(
        weatherData,
        rootNode,
        e.target.value.trim()
      );
      _currentWeatherCard = todaysWeather.container;

      await sevenDayForecast.loadForecast(weatherData);
      await hourlyForecast.loadForecast(weatherData);

      todaysWeather.render();
      hourlyForecast.renderForecast(rootNode);
      sevenDayForecast.renderForecast(rootNode);
    } catch (error) {
      console.log(error);
      _errorMessageComponent = (0,_errorMessage_js__WEBPACK_IMPORTED_MODULE_1__.errorMessage)(error);
      rootNode.appendChild(_errorMessageComponent);
      _focus();
    }
  };

  const render = function () {
    // Listen for the user pressing the Enter key
    _searchBar.addEventListener("keydown", _handleKeydown);

    _componentContainer.appendChild(_searchBar);
    rootNode.appendChild(_componentContainer);
    _focus();
  };

  return { render };
}


/***/ }),

/***/ "./src/tempToColor.js":
/*!****************************!*\
  !*** ./src/tempToColor.js ***!
  \****************************/
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
      return Promise.reject(`No data for ${cityName}`);
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
      return Promise.reject(error);
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


/***/ }),

/***/ "./src/weatherCardComponents/CurrentWeatherCard.js":
/*!*********************************************************!*\
  !*** ./src/weatherCardComponents/CurrentWeatherCard.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentWeatherCard": () => (/* binding */ CurrentWeatherCard)
/* harmony export */ });
/* harmony import */ var _HtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HtmlElement */ "./src/HtmlElement.js");
/* harmony import */ var _tempToColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tempToColor */ "./src/tempToColor.js");



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

  const _skeletonRow = new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "div",
    classList: ["row"],
  });

  const _skeletonColumn = new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "div",
    classList: ["twelve", "columns"],
  });

  const _container = new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
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
    const container = new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "div",
      classList: [
        "flex",
        "flex-row",
        "flex-justify-center",
        "flex-align-center",
      ],
    });

    const _titleText = new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "h2",
      classList: ["m-0"],
      innerText: cityName,
    });

    container.appendChild(_titleText);
    return container;
  })();

  const _temp = (function () {
    const container = new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "div",
      classList: [
        "flex",
        "flex-row",
        "flex-justify-center",
        "flex-align-center",
      ],
    });

    const _text = new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "p",
      classList: ["m-0", (0,_tempToColor__WEBPACK_IMPORTED_MODULE_1__.tempToColor)(parsedWeatherData.temp)],
      id: "main-temp",
      innerText: `${parsedWeatherData.temp}°`,
    });

    container.appendChild(_text);
    return container;
  })();

  const _description = (function () {
    const container = new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "div",
      id: "current-weather-card-description-container",
      classList: [
        "flex",
        "flex-row",
        "flex-justify-center",
        "flex-align-center",
      ],
    });

    const _text = new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "p",
      classList: ["m-0"],
      innerText: parsedWeatherData.description,
    });

    container.appendChild(_text);

    return container;
  })();

  const _dailyTemps = (function () {
    const container = new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "div",
      id: "current-weather-card-temps-container",
      classList: [
        "flex",
        "flex-row",
        "flex-justify-center",
        "flex-algin-center",
      ],
    });

    const _highTemp = new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "p",
      classList: ["m-0", "mr-5", (0,_tempToColor__WEBPACK_IMPORTED_MODULE_1__.tempToColor)(parsedWeatherData.max)],
      innerText: `H:${parsedWeatherData.max}°`,
    });

    const _lowTemp = new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
      type: "p",
      classList: ["m-0", "ml-5", (0,_tempToColor__WEBPACK_IMPORTED_MODULE_1__.tempToColor)(parsedWeatherData.min)],
      innerText: `L:${parsedWeatherData.min}°`,
    });

    container.appendChild(_lowTemp);
    container.appendChild(_highTemp);

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


/***/ }),

/***/ "./src/weatherCardComponents/ForecastCard.js":
/*!***************************************************!*\
  !*** ./src/weatherCardComponents/ForecastCard.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForecastCard": () => (/* binding */ ForecastCard)
/* harmony export */ });
/* harmony import */ var _HtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HtmlElement */ "./src/HtmlElement.js");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather.js */ "./src/weather.js");
/* harmony import */ var _loadImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loadImage */ "./src/loadImage.js");
/* harmony import */ var _tempToColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tempToColor */ "./src/tempToColor.js");





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

  const container = new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
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
      image = await (0,_loadImage__WEBPACK_IMPORTED_MODULE_2__.loadImage)(url);
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
      new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
        type: "p",
        classList: ["weekday"],
        innerText: parsedWeatherData.dt,
      })
    );
    container.appendChild(image);
    container.appendChild(
      new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
        typ: "p",
        innerText: `${parsedWeatherData.pop}% rain`,
      })
    );
    container.appendChild(
      new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
        classList: ["low-temp", (0,_tempToColor__WEBPACK_IMPORTED_MODULE_3__.tempToColor)(parsedWeatherData.min)],
        type: "p",
        innerText: `L: ${parsedWeatherData.min}°`,
      })
    );
    container.appendChild(
      new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
        classList: ["high-temp", (0,_tempToColor__WEBPACK_IMPORTED_MODULE_3__.tempToColor)(parsedWeatherData.max)],
        type: "p",
        innerText: `H: ${parsedWeatherData.max}°`,
      })
    );

    parentNode.appendChild(container);
  };

  return { render, load };
}


/***/ }),

/***/ "./src/weatherCardComponents/forecastLoader.js":
/*!*****************************************************!*\
  !*** ./src/weatherCardComponents/forecastLoader.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forecastLoader": () => (/* binding */ forecastLoader)
/* harmony export */ });
/* harmony import */ var _ForecastCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForecastCard.js */ "./src/weatherCardComponents/ForecastCard.js");
/* harmony import */ var _HtmlElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HtmlElement.js */ "./src/HtmlElement.js");



/**
 * This component loads the seven day forecast.
 */
function forecastLoader() {
  // Store each forecast card in this array for future iteration.
  let dailyForecasts = [];

  let _forecastContainer = new _HtmlElement_js__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
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
  const renderForecast = function (rootNode) {
    dailyForecasts.forEach((forecast) => forecast.render(_forecastContainer));
    rootNode.appendChild(_forecastContainer);
  };

  /**
   * This function removes the forecast cards from the dom. This is needed so
   * when users make subsequent requests, the previous results are removed.
   */
  const removeForecasts = function () {
    _forecastContainer.remove();
    _forecastContainer = new _HtmlElement_js__WEBPACK_IMPORTED_MODULE_1__.HtmlElement({
      type: "div",
      classList: ["forecast-container"],
    });
    dailyForecasts = [];
  };

  return { loadForecast, renderForecast, removeForecasts };
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
/* harmony import */ var _searchComponent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchComponent.js */ "./src/searchComponent.js");
/**
 * Import the required CSS files for Skeleton to work.
 * These are CSS files created for Skeleton. I did not create these.
 */



/**
 * Import the layout styling. This is where layout classes are defined.
 */




(function () {
  const rootNode = document.querySelector("#root");
  const searchBar = (0,_searchComponent_js__WEBPACK_IMPORTED_MODULE_3__.searchComponent)(rootNode);
  searchBar.render();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL1NrZWxldG9uL2Nzcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvU2tlbGV0b24vY3NzL3NrZWxldG9uLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9Ta2VsZXRvbi9jc3Mvbm9ybWFsaXplLmNzcz82YTRiIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvU2tlbGV0b24vY3NzL3NrZWxldG9uLmNzcz9lZDVlIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL0h0bWxFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvZXJyb3JNZXNzYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvaG91cmx5V2VhdGhlckNvbXBvbmVudHMvSG91cmx5Rm9yZWNhc3RDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvaG91cmx5V2VhdGhlckNvbXBvbmVudHMvaG91cmx5Rm9yZWNhc3RMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9sb2FkSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9zZWFyY2hDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy90ZW1wVG9Db2xvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy93ZWF0aGVyQ2FyZENvbXBvbmVudHMvQ3VycmVudFdlYXRoZXJDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvd2VhdGhlckNhcmRDb21wb25lbnRzL0ZvcmVjYXN0Q2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL3dlYXRoZXJDYXJkQ29tcG9uZW50cy9mb3JlY2FzdExvYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJBcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJBcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjMuMC4yIHwgTUlUIExpY2Vuc2UgfCBnaXQuaW8vbm9ybWFsaXplICovXFxuXFxuLyoqXFxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXG4gKiAgICB1c2VyIHpvb20uXFxuICovXFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBhbnkgSFRNTDUgZWxlbWVudCBpbiBJRSA4LzkuXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBkZXRhaWxzYCBvciBgc3VtbWFyeWAgaW4gSUUgMTAvMTFcXG4gKiBhbmQgRmlyZWZveC5cXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYG1haW5gIGluIElFIDExLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tYWluLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXG4gKiAyLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxuYXVkaW8sXFxuY2FudmFzLFxcbnByb2dyZXNzLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgW2hpZGRlbl1gIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLlxcbiAqIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSA4LzkvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cXG4gKi9cXG5cXG5baGlkZGVuXSxcXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBMaW5rc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC8xMSwgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmRmbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICAvKiBtYXJnaW46IDAuNjdlbSAwOyAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZDogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgYWZmZWN0aW5nIGBsaW5lLWhlaWdodGAgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IG92ZXJmbG93IG5vdCBoaWRkZW4gaW4gSUUgOS8xMC8xMS5cXG4gKi9cXG5cXG5zdmc6bm90KDpyb290KSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxcbiAqL1xcblxcbmhyIHtcXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxcbiAqIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cXG4gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXFxuICogMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxuICBtYXJnaW46IDA7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgb3ZlcmZsb3dgIHNldCB0byBgaGlkZGVuYCBpbiBJRSA4LzkvMTAvMTEuXFxuICovXFxuXFxuYnV0dG9uIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3gsIElFIDgvOS8xMC8xMSwgYW5kIE9wZXJhLlxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5cXG5pbnB1dCB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IGRvbid0IGF0dGVtcHQgdG8gc3R5bGUgdGhlc2UgZWxlbWVudHMuXFxuICogRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cXG4gKlxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxcbiAqIGBmb250LXNpemVgIHZhbHVlcyBvZiB0aGUgYGlucHV0YCwgaXQgY2F1c2VzIHRoZSBjdXJzb3Igc3R5bGUgb2YgdGhlXFxuICogZGVjcmVtZW50IGJ1dHRvbiB0byBjaGFuZ2UgZnJvbSBgZGVmYXVsdGAgdG8gYHRleHRgLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgYW5kIENocm9tZVxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxcbiAqIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcXG4gKiBwYWRkaW5nIChhbmQgYHRleHRmaWVsZGAgYXBwZWFyYW5jZSkuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJvcmRlcjogMDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LzEwLzExLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBEb24ndCBpbmhlcml0IHRoZSBgZm9udC13ZWlnaHRgIChhcHBsaWVkIGJ5IGEgcnVsZSBhYm92ZSkuXFxuICogTk9URTogdGhlIGRlZmF1bHQgY2Fubm90IHNhZmVseSBiZSBjaGFuZ2VkIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFguXFxuICovXFxuXFxub3B0Z3JvdXAge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIFRhYmxlc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxudGQsXFxudGgge1xcbiAgcGFkZGluZzogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL1NrZWxldG9uL2Nzcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJEQUEyRDs7QUFFM0Q7Ozs7RUFJRTs7QUFFRjtFQUNFLHVCQUF1QixFQUFFLE1BQU07RUFDL0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOytFQUMrRTs7QUFFL0U7Ozs7O0VBS0U7O0FBRUY7Ozs7Ozs7Ozs7Ozs7RUFhRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7OztFQUlFLHFCQUFxQixFQUFFLE1BQU07RUFDN0Isd0JBQXdCLEVBQUUsTUFBTTtBQUNsQzs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxVQUFVO0FBQ1o7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsaUNBQWlDO0VBQ2pDLGNBQWM7QUFDaEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0VBS0U7O0FBRUY7Ozs7O0VBS0UsY0FBYyxFQUFFLE1BQU07RUFDdEIsYUFBYSxFQUFFLE1BQU07RUFDckIsU0FBUyxFQUFFLE1BQU07QUFDbkI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7O0VBRUUsb0JBQW9CO0FBQ3RCOztBQUVBOzs7Ozs7RUFNRTs7QUFFRjs7OztFQUlFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsZUFBZSxFQUFFLE1BQU07QUFDekI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7Ozs7O0VBTUU7O0FBRUY7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7OztFQUlFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7OztFQUlFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyw0QkFBNEI7RUFDNUIsK0JBQStCLEVBQUUsTUFBTTtFQUN2Qyx1QkFBdUI7QUFDekI7O0FBRUE7Ozs7RUFJRTs7QUFFRjs7RUFFRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxTQUFTLEVBQUUsTUFBTTtFQUNqQixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2My4wLjIgfCBNSVQgTGljZW5zZSB8IGdpdC5pby9ub3JtYWxpemUgKi9cXG5cXG4vKipcXG4gKiAxLiBTZXQgZGVmYXVsdCBmb250IGZhbWlseSB0byBzYW5zLXNlcmlmLlxcbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xcbiAqICAgIHVzZXIgem9vbS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBkZWZhdWx0IG1hcmdpbi5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGFueSBIVE1MNSBlbGVtZW50IGluIElFIDgvOS5cXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYGRldGFpbHNgIG9yIGBzdW1tYXJ5YCBpbiBJRSAxMC8xMVxcbiAqIGFuZCBGaXJlZm94LlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgbWFpbmAgaW4gSUUgMTEuXFxuICovXFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1haW4sXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbixcXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxcbiAqIDIuIE5vcm1hbGl6ZSB2ZXJ0aWNhbCBhbGlnbm1lbnQgb2YgYHByb2dyZXNzYCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5hdWRpbyxcXG5jYW52YXMsXFxucHJvZ3Jlc3MsXFxudmlkZW8ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxcbiAqL1xcblxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBbaGlkZGVuXWAgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAuXFxuICogSGlkZSB0aGUgYHRlbXBsYXRlYCBlbGVtZW50IGluIElFIDgvOS8xMSwgU2FmYXJpLCBhbmQgRmlyZWZveCA8IDIyLlxcbiAqL1xcblxcbltoaWRkZW5dLFxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIExpbmtzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBjb2xvciBmcm9tIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5hOmFjdGl2ZSxcXG5hOmhvdmVyIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLzExLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsZSBzZXQgdG8gYGJvbGRlcmAgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuZGZuIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyB2YXJpYWJsZSBgaDFgIGZvbnQtc2l6ZSBhbmQgbWFyZ2luIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYFxcbiAqIGNvbnRleHRzIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIC8qIG1hcmdpbjogMC42N2VtIDA7ICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXFxuICovXFxuXFxubWFyayB7XFxuICBiYWNrZ3JvdW5kOiAjZmYwO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGFuZCB2YXJpYWJsZSBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBhZmZlY3RpbmcgYGxpbmUtaGVpZ2h0YCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgOC85LzEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3Qgb3ZlcmZsb3cgbm90IGhpZGRlbiBpbiBJRSA5LzEwLzExLlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDFlbSA0MHB4O1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGRpZmZlcmVuY2VzIGJldHdlZW4gRmlyZWZveCBhbmQgb3RoZXIgYnJvd3NlcnMuXFxuICovXFxuXFxuaHIge1xcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb250YWluIG92ZXJmbG93IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgb2RkIGBlbWAtdW5pdCBmb250IHNpemUgcmVuZGVyaW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5wcmUsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEtub3duIGxpbWl0YXRpb246IGJ5IGRlZmF1bHQsIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFggYWxsb3cgdmVyeSBsaW1pdGVkXFxuICogc3R5bGluZyBvZiBgc2VsZWN0YCwgdW5sZXNzIGEgYGJvcmRlcmAgcHJvcGVydHkgaXMgc2V0LlxcbiAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZC5cXG4gKiAgICBLbm93biBpc3N1ZTogYWZmZWN0cyBjb2xvciBvZiBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKiAyLiBDb3JyZWN0IGZvbnQgcHJvcGVydGllcyBub3QgYmVpbmcgaW5oZXJpdGVkLlxcbiAqIDMuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIG1hcmdpbjogMDsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBvdmVyZmxvd2Agc2V0IHRvIGBoaWRkZW5gIGluIElFIDgvOS8xMC8xMS5cXG4gKi9cXG5cXG5idXR0b24ge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCwgSUUgOC85LzEwLzExLCBhbmQgT3BlcmEuXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5odG1sIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcbiAgY3Vyc29yOiBwb2ludGVyOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXFxuICovXFxuXFxuYnV0dG9uW2Rpc2FibGVkXSxcXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBGaXJlZm94IDQrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxcbiAqL1xcblxcbmlucHV0IHtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcbi8qKlxcbiAqIEl0J3MgcmVjb21tZW5kZWQgdGhhdCB5b3UgZG9uJ3QgYXR0ZW1wdCB0byBzdHlsZSB0aGVzZSBlbGVtZW50cy5cXG4gKiBGaXJlZm94J3MgaW1wbGVtZW50YXRpb24gZG9lc24ndCByZXNwZWN0IGJveC1zaXppbmcsIHBhZGRpbmcsIG9yIHdpZHRoLlxcbiAqXFxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgIGluIElFIDgvOS8xMC5cXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LzEwLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEZpeCB0aGUgY3Vyc29yIHN0eWxlIGZvciBDaHJvbWUncyBpbmNyZW1lbnQvZGVjcmVtZW50IGJ1dHRvbnMuIEZvciBjZXJ0YWluXFxuICogYGZvbnQtc2l6ZWAgdmFsdWVzIG9mIHRoZSBgaW5wdXRgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcXG4gKiBkZWNyZW1lbnQgYnV0dG9uIHRvIGNoYW5nZSBmcm9tIGBkZWZhdWx0YCB0byBgdGV4dGAuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSBhbmQgQ2hyb21lXFxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAyICovXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSBhbmQgQ2hyb21lIG9uIE9TIFguXFxuICogU2FmYXJpIChidXQgbm90IENocm9tZSkgY2xpcHMgdGhlIGNhbmNlbCBidXR0b24gd2hlbiB0aGUgc2VhcmNoIGlucHV0IGhhc1xcbiAqIHBhZGRpbmcgKGFuZCBgdGV4dGZpZWxkYCBhcHBlYXJhbmNlKS5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xcbiAgbWFyZ2luOiAwIDJweDtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBgY29sb3JgIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgOC85LzEwLzExLlxcbiAqIDIuIFJlbW92ZSBwYWRkaW5nIHNvIHBlb3BsZSBhcmVuJ3QgY2F1Z2h0IG91dCBpZiB0aGV5IHplcm8gb3V0IGZpZWxkc2V0cy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm9yZGVyOiAwOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA4LzkvMTAvMTEuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIERvbid0IGluaGVyaXQgdGhlIGBmb250LXdlaWdodGAgKGFwcGxpZWQgYnkgYSBydWxlIGFib3ZlKS5cXG4gKiBOT1RFOiB0aGUgZGVmYXVsdCBjYW5ub3Qgc2FmZWx5IGJlIGNoYW5nZWQgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWC5cXG4gKi9cXG5cXG5vcHRncm91cCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogVGFibGVzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXFxuICovXFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG50ZCxcXG50aCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiogU2tlbGV0b24gVjIuMC40XFxuKiBDb3B5cmlnaHQgMjAxNCwgRGF2ZSBHYW1hY2hlXFxuKiB3d3cuZ2V0c2tlbGV0b24uY29tXFxuKiBGcmVlIHRvIHVzZSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXFxuKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxcbiogMTIvMjkvMjAxNFxcbiovXFxuXFxuXFxuLyogVGFibGUgb2YgY29udGVudHNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcXG4tIEdyaWRcXG4tIEJhc2UgU3R5bGVzXFxuLSBUeXBvZ3JhcGh5XFxuLSBMaW5rc1xcbi0gQnV0dG9uc1xcbi0gRm9ybXNcXG4tIExpc3RzXFxuLSBDb2RlXFxuLSBUYWJsZXNcXG4tIFNwYWNpbmdcXG4tIFV0aWxpdGllc1xcbi0gQ2xlYXJpbmdcXG4tIE1lZGlhIFF1ZXJpZXNcXG4qL1xcblxcblxcbi8qIEdyaWRcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbn1cXG4uY29sdW1uLFxcbi5jb2x1bW5zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXG59XFxuXFxuLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNDAwcHggKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBwYWRkaW5nOiAwOyBcXG4gIH1cXG59XFxuXFxuLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNTUwcHggKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogODAlOyBcXG4gIH1cXG4gIC5jb2x1bW4sXFxuICAuY29sdW1ucyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0JTsgXFxuICB9XFxuICAuY29sdW1uOmZpcnN0LWNoaWxkLFxcbiAgLmNvbHVtbnM6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tbGVmdDogMDsgXFxuICB9XFxuXFxuICAub25lLmNvbHVtbixcXG4gIC5vbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNC42NjY2NjY2NjY2NyU7IH1cXG4gIC50d28uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTMuMzMzMzMzMzMzMyU7IH1cXG4gIC50aHJlZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMjIlOyAgICAgICAgICAgIH1cXG4gIC5mb3VyLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cXG4gIC5maXZlLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzkuMzMzMzMzMzMzMyU7IH1cXG4gIC5zaXguY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyAgICAgICAgICAgIH1cXG4gIC5zZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNTYuNjY2NjY2NjY2NyU7IH1cXG4gIC5laWdodC5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cXG4gIC5uaW5lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNzQuMCU7ICAgICAgICAgIH1cXG4gIC50ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogODIuNjY2NjY2NjY2NyU7IH1cXG4gIC5lbGV2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogOTEuMzMzMzMzMzMzMyU7IH1cXG4gIC50d2VsdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTAwJTsgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4gIC5vbmUtdGhpcmQuY29sdW1uICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cXG4gIC50d28tdGhpcmRzLmNvbHVtbiAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cXG5cXG4gIC5vbmUtaGFsZi5jb2x1bW4gICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyB9XFxuXFxuICAvKiBPZmZzZXRzICovXFxuICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDguNjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LXR3by5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXR3by5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDE3LjMzMzMzMzMzMzMlOyB9XFxuICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogMjYlOyAgICAgICAgICAgIH1cXG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1maXZlLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA0My4zMzMzMzMzMzMzJTsgfVxcbiAgLm9mZnNldC1ieS1zaXguY29sdW1uLFxcbiAgLm9mZnNldC1ieS1zaXguY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7ICAgICAgICAgICAgfVxcbiAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDYwLjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZWlnaHQuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cXG4gIC5vZmZzZXQtYnktbmluZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDc4LjAlOyAgICAgICAgICB9XFxuICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDg2LjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW5zICAgICAgIHsgbWFyZ2luLWxlZnQ6IDk1LjMzMzMzMzMzMzMlOyB9XFxuXFxuICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW5zICAgIHsgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1uLFxcbiAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbnMgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxcblxcbiAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbnMgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgfVxcblxcbn1cXG5cXG5cXG4vKiBCYXNlIFN0eWxlc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi8qIE5PVEVcXG5odG1sIGlzIHNldCB0byA2Mi41JSBzbyB0aGF0IGFsbCB0aGUgUkVNIG1lYXN1cmVtZW50cyB0aHJvdWdob3V0IFNrZWxldG9uXFxuYXJlIGJhc2VkIG9uIDEwcHggc2l6aW5nLiBTbyBiYXNpY2FsbHkgMS41cmVtID0gMTVweCA6KSAqL1xcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTsgfVxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxLjVlbTsgLyogY3VycmVudGx5IGVtcyBjYXVzZSBjaHJvbWUgYnVnIG1pc2ludGVycHJldGluZyByZW1zIG9uIGJvZHkgZWxlbWVudCAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBcXFwiSGVsdmV0aWNhTmV1ZVxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzIyMjsgfVxcblxcblxcbi8qIFR5cG9ncmFwaHlcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7IFxcbn1cXG5oMSB7IGZvbnQtc2l6ZTogNC4wcmVtOyBsaW5lLWhlaWdodDogMS4yOyAgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTt9XFxuaDIgeyBmb250LXNpemU6IDMuNnJlbTsgbGluZS1oZWlnaHQ6IDEuMjU7IGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cXG5oMyB7IGZvbnQtc2l6ZTogMy4wcmVtOyBsaW5lLWhlaWdodDogMS4zOyAgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTsgfVxcbmg0IHsgZm9udC1zaXplOiAyLjRyZW07IGxpbmUtaGVpZ2h0OiAxLjM1OyBsZXR0ZXItc3BhY2luZzogLS4wOHJlbTsgfVxcbmg1IHsgZm9udC1zaXplOiAxLjhyZW07IGxpbmUtaGVpZ2h0OiAxLjU7ICBsZXR0ZXItc3BhY2luZzogLS4wNXJlbTsgfVxcbmg2IHsgZm9udC1zaXplOiAxLjVyZW07IGxpbmUtaGVpZ2h0OiAxLjY7ICBsZXR0ZXItc3BhY2luZzogMDsgfVxcblxcbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXG4gIGgxIHsgZm9udC1zaXplOiA1LjByZW07IH1cXG4gIGgyIHsgZm9udC1zaXplOiA0LjJyZW07IH1cXG4gIGgzIHsgZm9udC1zaXplOiAzLjZyZW07IH1cXG4gIGg0IHsgZm9udC1zaXplOiAzLjByZW07IH1cXG4gIGg1IHsgZm9udC1zaXplOiAyLjRyZW07IH1cXG4gIGg2IHsgZm9udC1zaXplOiAxLjVyZW07IH1cXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcblxcbi8qIExpbmtzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuYSB7XFxuICBjb2xvcjogIzFFQUVEQjsgXFxufVxcbmE6aG92ZXIge1xcbiAgY29sb3I6ICMwRkEwQ0U7IFxcbn1cXG5cXG5cXG4vKiBCdXR0b25zXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLmJ1dHRvbixcXG5idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDM4cHg7XFxuICBwYWRkaW5nOiAwIDMwcHg7XFxuICBjb2xvcjogIzU1NTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogMzhweDtcXG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxufVxcbi5idXR0b246aG92ZXIsXFxuYnV0dG9uOmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl06aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl06aG92ZXIsXFxuLmJ1dHRvbjpmb2N1cyxcXG5idXR0b246Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpmb2N1cyB7XFxuICBjb2xvcjogIzMzMztcXG4gIGJvcmRlci1jb2xvcjogIzg4ODtcXG4gIG91dGxpbmU6IDA7IFxcbn1cXG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5LFxcbmJ1dHRvbi5idXR0b24tcHJpbWFyeSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXS5idXR0b24tcHJpbWFyeSxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLmJ1dHRvbi1wcmltYXJ5LFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLmJ1dHRvbi1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzQzNGMDtcXG4gIGJvcmRlci1jb2xvcjogIzMzQzNGMDsgXFxufVxcbi5idXR0b24uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeTpmb2N1cyxcXG5idXR0b24uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyB7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRUFFREI7XFxuICBib3JkZXItY29sb3I6ICMxRUFFREI7IFxcbn1cXG5cXG5cXG4vKiBGb3Jtc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRlbFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInVybFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGhlaWdodDogMzhweDtcXG4gIHBhZGRpbmc6IDZweCAxMHB4OyAvKiBUaGUgNnB4IHZlcnRpY2FsbHkgY2VudGVycyB0ZXh0IG9uIEZGLCBpZ25vcmVkIGJ5IFdlYmtpdCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEMUQxRDE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxufVxcbi8qIFJlbW92ZXMgYXdrd2FyZCBkZWZhdWx0IHN0eWxlcyBvbiBzb21lIGlucHV0cyBmb3IgaU9TICovXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidXJsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSxcXG50ZXh0YXJlYSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7IFxcbn1cXG50ZXh0YXJlYSB7XFxuICBtaW4taGVpZ2h0OiA2NXB4O1xcbiAgcGFkZGluZy10b3A6IDZweDtcXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7IFxcbn1cXG5pbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJ1cmxcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdOmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbnNlbGVjdDpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzNDM0YwO1xcbiAgb3V0bGluZTogMDsgXFxufVxcbmxhYmVsLFxcbmxlZ2VuZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDsgXFxufVxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItd2lkdGg6IDA7IFxcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgZGlzcGxheTogaW5saW5lOyBcXG59XFxubGFiZWwgPiAubGFiZWwtYm9keSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogLjVyZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsOyBcXG59XFxuXFxuXFxuLyogTGlzdHNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBjaXJjbGUgaW5zaWRlOyBcXG59XFxub2wge1xcbiAgbGlzdC1zdHlsZTogZGVjaW1hbCBpbnNpZGU7IFxcbn1cXG5vbCwgdWwge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgbWFyZ2luLXRvcDogMDsgXFxufVxcbnVsIHVsLFxcbnVsIG9sLFxcbm9sIG9sLFxcbm9sIHVsIHtcXG4gIG1hcmdpbjogMS41cmVtIDAgMS41cmVtIDNyZW07XFxuICBmb250LXNpemU6IDkwJTsgXFxufVxcbmxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IFxcbn1cXG5cXG5cXG4vKiBDb2RlXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuY29kZSB7XFxuICBwYWRkaW5nOiAuMnJlbSAuNXJlbTtcXG4gIG1hcmdpbjogMCAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRTFFMUUxO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4OyBcXG59XFxucHJlID4gY29kZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgd2hpdGUtc3BhY2U6IHByZTsgXFxufVxcblxcblxcbi8qIFRhYmxlc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbnRoLFxcbnRkIHtcXG4gIHBhZGRpbmc6IDEycHggMTVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UxRTFFMTsgXFxufVxcbnRoOmZpcnN0LWNoaWxkLFxcbnRkOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcbnRoOmxhc3QtY2hpbGQsXFxudGQ6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxuXFxuXFxuLyogU3BhY2luZ1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmJ1dHRvbixcXG4uYnV0dG9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IFxcbn1cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3QsXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtOyBcXG59XFxucHJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZmlndXJlLFxcbnRhYmxlLFxcbnVsLFxcbm9sLFxcbmZvcm0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtOyBcXG59XFxuXFxuXFxuLyogVXRpbGl0aWVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLnUtZnVsbC13aWR0aCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbn1cXG4udS1tYXgtZnVsbC13aWR0aCB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXG59XFxuLnUtcHVsbC1yaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7IFxcbn1cXG4udS1wdWxsLWxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7IFxcbn1cXG5cXG5cXG4vKiBNaXNjXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuaHIge1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTFFMUUxOyBcXG59XFxuXFxuXFxuLyogQ2xlYXJpbmdcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5cXG4vKiBTZWxmIENsZWFyaW5nIEdvb2RuZXNzICovXFxuLmNvbnRhaW5lcjphZnRlcixcXG4ucm93OmFmdGVyLFxcbi51LWNmIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjbGVhcjogYm90aDsgXFxufVxcblxcblxcbi8qIE1lZGlhIFF1ZXJpZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4vKlxcbk5vdGU6IFRoZSBiZXN0IHdheSB0byBzdHJ1Y3R1cmUgdGhlIHVzZSBvZiBtZWRpYSBxdWVyaWVzIGlzIHRvIGNyZWF0ZSB0aGUgcXVlcmllc1xcbm5lYXIgdGhlIHJlbGV2YW50IGNvZGUuIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudGVkIHRvIGNoYW5nZSB0aGUgc3R5bGVzIGZvciBidXR0b25zXFxub24gc21hbGwgZGV2aWNlcywgcGFzdGUgdGhlIG1vYmlsZSBxdWVyeSBjb2RlIHVwIGluIHRoZSBidXR0b25zIHNlY3Rpb24gYW5kIHN0eWxlIGl0XFxudGhlcmUuXFxuKi9cXG5cXG5cXG4vKiBMYXJnZXIgdGhhbiBtb2JpbGUgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIHtcXG4gIGJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICB9XFxufVxcblxcbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKGFsc28gcG9pbnQgd2hlbiBncmlkIGJlY29tZXMgYWN0aXZlKSAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbn1cXG5cXG4vKiBMYXJnZXIgdGhhbiB0YWJsZXQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcXG59XFxuXFxuLyogTGFyZ2VyIHRoYW4gZGVza3RvcCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG59XFxuXFxuLyogTGFyZ2VyIHRoYW4gRGVza3RvcCBIRCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL1NrZWxl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dXJjZXNDb250ZW50XCI6W1wiLypcXG4qIFNrZWxldG9uIFYyLjAuNFxcbiogQ29weXJpZ2h0IDIwMTQsIERhdmUgR2FtYWNoZVxcbiogd3d3LmdldHNrZWxldG9uLmNvbVxcbiogRnJlZSB0byB1c2UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxcbiogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcXG4qIDEyLzI5LzIwMTRcXG4qL1xcblxcblxcbi8qIFRhYmxlIG9mIGNvbnRlbnRzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXFxuLSBHcmlkXFxuLSBCYXNlIFN0eWxlc1xcbi0gVHlwb2dyYXBoeVxcbi0gTGlua3NcXG4tIEJ1dHRvbnNcXG4tIEZvcm1zXFxuLSBMaXN0c1xcbi0gQ29kZVxcbi0gVGFibGVzXFxuLSBTcGFjaW5nXFxuLSBVdGlsaXRpZXNcXG4tIENsZWFyaW5nXFxuLSBNZWRpYSBRdWVyaWVzXFxuKi9cXG5cXG5cXG4vKiBHcmlkXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTMwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXG59XFxuLmNvbHVtbixcXG4uY29sdW1ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxufVxcblxcbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDQwMHB4ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgcGFkZGluZzogMDsgXFxuICB9XFxufVxcblxcbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDU1MHB4ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDgwJTsgXFxuICB9XFxuICAuY29sdW1uLFxcbiAgLmNvbHVtbnMge1xcbiAgICBtYXJnaW4tbGVmdDogNCU7IFxcbiAgfVxcbiAgLmNvbHVtbjpmaXJzdC1jaGlsZCxcXG4gIC5jb2x1bW5zOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7IFxcbiAgfVxcblxcbiAgLm9uZS5jb2x1bW4sXFxuICAub25lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQuNjY2NjY2NjY2NjclOyB9XFxuICAudHdvLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEzLjMzMzMzMzMzMzMlOyB9XFxuICAudGhyZWUuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDIyJTsgICAgICAgICAgICB9XFxuICAuZm91ci5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XFxuICAuZml2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDM5LjMzMzMzMzMzMzMlOyB9XFxuICAuc2l4LmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgICAgICAgICAgICB9XFxuICAuc2V2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDU2LjY2NjY2NjY2NjclOyB9XFxuICAuZWlnaHQuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XFxuICAubmluZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDc0LjAlOyAgICAgICAgICB9XFxuICAudGVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDgyLjY2NjY2NjY2NjclOyB9XFxuICAuZWxldmVuLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDkxLjMzMzMzMzMzMzMlOyB9XFxuICAudHdlbHZlLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEwMCU7IG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuICAub25lLXRoaXJkLmNvbHVtbiAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XFxuICAudHdvLXRoaXJkcy5jb2x1bW4gICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XFxuXFxuICAub25lLWhhbGYuY29sdW1uICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgfVxcblxcbiAgLyogT2Zmc2V0cyAqL1xcbiAgLm9mZnNldC1ieS1vbmUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1vbmUuY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4LjY2NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS10d28uY29sdW1uLFxcbiAgLm9mZnNldC1ieS10d28uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAxNy4zMzMzMzMzMzMzJTsgfVxcbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDI2JTsgICAgICAgICAgICB9XFxuICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS1maXZlLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZml2ZS5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogNDMuMzMzMzMzMzMzMyU7IH1cXG4gIC5vZmZzZXQtYnktc2l4LmNvbHVtbixcXG4gIC5vZmZzZXQtYnktc2l4LmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyAgICAgICAgICAgIH1cXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1uLFxcbiAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2MC42NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XFxuICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA3OC4wJTsgICAgICAgICAgfVxcbiAgLm9mZnNldC1ieS10ZW4uY29sdW1uLFxcbiAgLm9mZnNldC1ieS10ZW4uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4Ni42NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1uLFxcbiAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1ucyAgICAgICB7IG1hcmdpbi1sZWZ0OiA5NS4zMzMzMzMzMzMzJTsgfVxcblxcbiAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1ucyAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW5zICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cXG5cXG4gIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW5zICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7IH1cXG5cXG59XFxuXFxuXFxuLyogQmFzZSBTdHlsZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4vKiBOT1RFXFxuaHRtbCBpcyBzZXQgdG8gNjIuNSUgc28gdGhhdCBhbGwgdGhlIFJFTSBtZWFzdXJlbWVudHMgdGhyb3VnaG91dCBTa2VsZXRvblxcbmFyZSBiYXNlZCBvbiAxMHB4IHNpemluZy4gU28gYmFzaWNhbGx5IDEuNXJlbSA9IDE1cHggOikgKi9cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7IH1cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07IC8qIGN1cnJlbnRseSBlbXMgY2F1c2UgY2hyb21lIGJ1ZyBtaXNpbnRlcnByZXRpbmcgcmVtcyBvbiBib2R5IGVsZW1lbnQgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgXFxcIkhlbHZldGljYU5ldWVcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMyMjI7IH1cXG5cXG5cXG4vKiBUeXBvZ3JhcGh5XFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogMzAwOyBcXG59XFxuaDEgeyBmb250LXNpemU6IDQuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMjsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07fVxcbmgyIHsgZm9udC1zaXplOiAzLjZyZW07IGxpbmUtaGVpZ2h0OiAxLjI1OyBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XFxuaDMgeyBmb250LXNpemU6IDMuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMzsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cXG5oNCB7IGZvbnQtc2l6ZTogMi40cmVtOyBsaW5lLWhlaWdodDogMS4zNTsgbGV0dGVyLXNwYWNpbmc6IC0uMDhyZW07IH1cXG5oNSB7IGZvbnQtc2l6ZTogMS44cmVtOyBsaW5lLWhlaWdodDogMS41OyAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07IH1cXG5oNiB7IGZvbnQtc2l6ZTogMS41cmVtOyBsaW5lLWhlaWdodDogMS42OyAgbGV0dGVyLXNwYWNpbmc6IDA7IH1cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxuICBoMSB7IGZvbnQtc2l6ZTogNS4wcmVtOyB9XFxuICBoMiB7IGZvbnQtc2l6ZTogNC4ycmVtOyB9XFxuICBoMyB7IGZvbnQtc2l6ZTogMy42cmVtOyB9XFxuICBoNCB7IGZvbnQtc2l6ZTogMy4wcmVtOyB9XFxuICBoNSB7IGZvbnQtc2l6ZTogMi40cmVtOyB9XFxuICBoNiB7IGZvbnQtc2l6ZTogMS41cmVtOyB9XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG4vKiBMaW5rc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmEge1xcbiAgY29sb3I6ICMxRUFFREI7IFxcbn1cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiAjMEZBMENFOyBcXG59XFxuXFxuXFxuLyogQnV0dG9uc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi5idXR0b24sXFxuYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgcGFkZGluZzogMCAzMHB4O1xcbiAgY29sb3I6ICM1NTU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbn1cXG4uYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdOmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdOmhvdmVyLFxcbi5idXR0b246Zm9jdXMsXFxuYnV0dG9uOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl06Zm9jdXMge1xcbiAgY29sb3I6ICMzMzM7XFxuICBib3JkZXItY29sb3I6ICM4ODg7XFxuICBvdXRsaW5lOiAwOyBcXG59XFxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeSxcXG5idXR0b24uYnV0dG9uLXByaW1hcnksXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0uYnV0dG9uLXByaW1hcnksXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXS5idXR0b24tcHJpbWFyeSxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXS5idXR0b24tcHJpbWFyeSB7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzM0MzRjA7XFxuICBib3JkZXItY29sb3I6ICMzM0MzRjA7IFxcbn1cXG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmJ1dHRvbi5idXR0b24tcHJpbWFyeTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXS5idXR0b24tcHJpbWFyeTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbi5idXR0b24uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMge1xcbiAgY29sb3I6ICNGRkY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUVBRURCO1xcbiAgYm9yZGVyLWNvbG9yOiAjMUVBRURCOyBcXG59XFxuXFxuXFxuLyogRm9ybXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5pbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ1cmxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBoZWlnaHQ6IDM4cHg7XFxuICBwYWRkaW5nOiA2cHggMTBweDsgLyogVGhlIDZweCB2ZXJ0aWNhbGx5IGNlbnRlcnMgdGV4dCBvbiBGRiwgaWdub3JlZCBieSBXZWJraXQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDFEMUQxO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbn1cXG4vKiBSZW1vdmVzIGF3a3dhcmQgZGVmYXVsdCBzdHlsZXMgb24gc29tZSBpbnB1dHMgZm9yIGlPUyAqL1xcbmlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRlbFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInVybFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0sXFxudGV4dGFyZWEge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lOyBcXG59XFxudGV4dGFyZWEge1xcbiAgbWluLWhlaWdodDogNjVweDtcXG4gIHBhZGRpbmctdG9wOiA2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNnB4OyBcXG59XFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwidXJsXFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXTpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzQzNGMDtcXG4gIG91dGxpbmU6IDA7IFxcbn1cXG5sYWJlbCxcXG5sZWdlbmQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7IFxcbn1cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXdpZHRoOiAwOyBcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGRpc3BsYXk6IGlubGluZTsgXFxufVxcbmxhYmVsID4gLmxhYmVsLWJvZHkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgXFxufVxcblxcblxcbi8qIExpc3RzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxudWwge1xcbiAgbGlzdC1zdHlsZTogY2lyY2xlIGluc2lkZTsgXFxufVxcbm9sIHtcXG4gIGxpc3Qtc3R5bGU6IGRlY2ltYWwgaW5zaWRlOyBcXG59XFxub2wsIHVsIHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIG1hcmdpbi10b3A6IDA7IFxcbn1cXG51bCB1bCxcXG51bCBvbCxcXG5vbCBvbCxcXG5vbCB1bCB7XFxuICBtYXJnaW46IDEuNXJlbSAwIDEuNXJlbSAzcmVtO1xcbiAgZm9udC1zaXplOiA5MCU7IFxcbn1cXG5saSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyBcXG59XFxuXFxuXFxuLyogQ29kZVxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmNvZGUge1xcbiAgcGFkZGluZzogLjJyZW0gLjVyZW07XFxuICBtYXJnaW46IDAgLjJyZW07XFxuICBmb250LXNpemU6IDkwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRTFFMTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgXFxufVxcbnByZSA+IGNvZGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7IFxcbn1cXG5cXG5cXG4vKiBUYWJsZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG50aCxcXG50ZCB7XFxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUUxRTE7IFxcbn1cXG50aDpmaXJzdC1jaGlsZCxcXG50ZDpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG50aDpsYXN0LWNoaWxkLFxcbnRkOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1yaWdodDogMDsgfVxcblxcblxcbi8qIFNwYWNpbmdcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5idXR0b24sXFxuLmJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyBcXG59XFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0LFxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTsgXFxufVxcbnByZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmZpZ3VyZSxcXG50YWJsZSxcXG51bCxcXG5vbCxcXG5mb3JtIHtcXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTsgXFxufVxcblxcblxcbi8qIFV0aWxpdGllc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi51LWZ1bGwtd2lkdGgge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXG59XFxuLnUtbWF4LWZ1bGwtd2lkdGgge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxufVxcbi51LXB1bGwtcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0OyBcXG59XFxuLnUtcHVsbC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0OyBcXG59XFxuXFxuXFxuLyogTWlzY1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmhyIHtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0UxRTFFMTsgXFxufVxcblxcblxcbi8qIENsZWFyaW5nXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuXFxuLyogU2VsZiBDbGVhcmluZyBHb29kbmVzcyAqL1xcbi5jb250YWluZXI6YWZ0ZXIsXFxuLnJvdzphZnRlcixcXG4udS1jZiB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY2xlYXI6IGJvdGg7IFxcbn1cXG5cXG5cXG4vKiBNZWRpYSBRdWVyaWVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLypcXG5Ob3RlOiBUaGUgYmVzdCB3YXkgdG8gc3RydWN0dXJlIHRoZSB1c2Ugb2YgbWVkaWEgcXVlcmllcyBpcyB0byBjcmVhdGUgdGhlIHF1ZXJpZXNcXG5uZWFyIHRoZSByZWxldmFudCBjb2RlLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnRlZCB0byBjaGFuZ2UgdGhlIHN0eWxlcyBmb3IgYnV0dG9uc1xcbm9uIHNtYWxsIGRldmljZXMsIHBhc3RlIHRoZSBtb2JpbGUgcXVlcnkgY29kZSB1cCBpbiB0aGUgYnV0dG9ucyBzZWN0aW9uIGFuZCBzdHlsZSBpdFxcbnRoZXJlLlxcbiovXFxuXFxuXFxuLyogTGFyZ2VyIHRoYW4gbW9iaWxlICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSB7XFxuICBib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcbn1cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0IChhbHNvIHBvaW50IHdoZW4gZ3JpZCBiZWNvbWVzIGFjdGl2ZSkgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXG59XFxuXFxuLyogTGFyZ2VyIHRoYW4gdGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7XFxufVxcblxcbi8qIExhcmdlciB0aGFuIGRlc2t0b3AgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxufVxcblxcbi8qIExhcmdlciB0aGFuIERlc2t0b3AgSEQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNyb290e1xcbiAgLyogcGFkZGluZy10b3A6IDUwcHg7ICovXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgLS1tYWluLWJnLWNvbG9yOiAjRjhGRkU1O1xcbiAgLS1tYWluLWNhcmQtY29sb3I6ICMxRTJEMjQgO1xcbiAgLS10ZW1wLWNvbG9yLWNvbGQ6ICMwYWY7XFxuICAtLXRlbXAtY29sb3Itd2FybTogI2YwOTgwMDtcXG4gIC0tdGVtcC1jb2xvci1ob3Q6ICNmMDAwMDAgO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmZsZXgtY29sdW1uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mbGV4LW5vLXdyYXB7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuLmZsZXgtanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mbGV4LWp1c3RpZnktZXZlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmZsZXgtYWxpZ24tY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZWJ1ZyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbi5tLTAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWwtNSB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4ubXItNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLyogdGhpcyBpcyB0aGUgbWFpbiB0ZW1wIHVuZGVyIHRoZSBjaXR5IG5hbWUgKi9cXG4jbWFpbi10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogOXJlbTtcXG59XFxuXFxuLnRlbXAtY29sb3ItMSB7IC8qIC0xMCAtIDQwICovXFxuICBjb2xvcjogIzFBQURGRjtcXG59XFxuXFxuLnRlbXAtY29sb3ItMiB7IC8qIDQwIC0gNDkgKi9cXG4gIGNvbG9yOiAjMTc4MkZGO1xcbn1cXG5cXG4udGVtcC1jb2xvci0zIHsgLyogNTAgLSA1OSAqL1xcbiAgY29sb3I6ICMzMzE3RDk7XFxufVxcblxcbi50ZW1wLWNvbG9yLTQgeyAvKiA2MCAtIDY5ICovXFxuICBjb2xvcjogIzc0MzlBNDtcXG59XFxuLnRlbXAtY29sb3ItNSB7IC8qIDcwIC0gNzkgKi9cXG4gIGNvbG9yOiAjQ0U2NzUyO1xcbn1cXG5cXG4udGVtcC1jb2xvci02IHsgLyogODAgLSA4OSAqL1xcbiAgY29sb3I6ICNGRjZFMDQ7XFxufVxcblxcbi50ZW1wLWNvbG9yLTcgeyAvKiA5MCAtIDk5ICovXFxuICBjb2xvcjogI0ZGNDcwNTtcXG59XFxuXFxuLnRlbXAtY29sb3ItOCB7IC8qIDEwMCAtIDExOSovXFxuICBjb2xvcjogI0ZGMDEwMTtcXG59XFxuXFxuXFxuLyogTGFyZ2VyIHRoYW4gbW9iaWxlICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSB7XFxuICBib2R5IHtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG5cXG4gIC5jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICB9XFxuXFxuICBpbnB1dFt0eXBlPXRleHRde1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmN1cnJlbnQtd2VhdGhlci1jYXJkIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIH1cXG5cXG4gIC5jdXJyZW50LXdlYXRoZXItY2FyZCA+IGRpdiA+IHAge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuXFxuICAjY3VycmVudC13ZWF0aGVyLWNhcmQtdGVtcHMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuICAuaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCByZ2JhKDIzMCwyMzAsMjMwLDAuNSk7IFxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4IHJnYmEoMjMwLDIzMCwyMzAsMC41KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIH1cXG5cXG4gIC5ob3VybHktZm9yZWNhc3QtY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGZsZXgtYmFzaXM6IDEwMHB4O1xcbiAgfVxcblxcbiAgLmhvdXJseS1mb3JlY2FzdC1jYXJkID4gLnRpbWUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5jdXJyZW50LXdlYXRoZXItY2FyZCwgLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIsIC5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVjZmNmO1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggcmdiYSgyMzAsMjMwLDIzMCwwLjUpOyBcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCByZ2JhKDIzMCwyMzAsMjMwLDAuNSk7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWNhcmQge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWNhcmQgPiAud2Vla2RheSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbn1cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0IChhbHNvIHBvaW50IHdoZW4gZ3JpZCBiZWNvbWVzIGFjdGl2ZSkgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXG59XFxuXFxuLyogTGFyZ2VyIHRoYW4gdGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7XFxufVxcblxcbi8qIExhcmdlciB0aGFuIGRlc2t0b3AgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxufVxcblxcbi8qIExhcmdlciB0aGFuIERlc2t0b3AgSEQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAuZm9yZWNhc3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSw4Q0FBOEM7QUFDOUM7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLGdCQUFnQixhQUFhO0VBQzNCLGNBQWM7QUFDaEI7O0FBRUEsZ0JBQWdCLFlBQVk7RUFDMUIsY0FBYztBQUNoQjs7QUFFQSxnQkFBZ0IsWUFBWTtFQUMxQixjQUFjO0FBQ2hCOztBQUVBLGdCQUFnQixZQUFZO0VBQzFCLGNBQWM7QUFDaEI7QUFDQSxnQkFBZ0IsWUFBWTtFQUMxQixjQUFjO0FBQ2hCOztBQUVBLGdCQUFnQixZQUFZO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUEsZ0JBQWdCLFlBQVk7RUFDMUIsY0FBYztBQUNoQjs7QUFFQSxnQkFBZ0IsYUFBYTtFQUMzQixjQUFjO0FBQ2hCOzs7QUFHQSx1QkFBdUI7QUFDdkI7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsOEJBQThCO09BQzNCLDJCQUEyQjtZQUN0QixzQkFBc0I7RUFDaEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMERBQTBEO0lBQzFELGtEQUFrRDtJQUNsRCxhQUFhOztJQUViLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsbUJBQW1CO0lBQ25CLDBEQUEwRDtJQUMxRCxrREFBa0Q7SUFDbEQsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7QUFDRjs7QUFFQSw4REFBOEQ7QUFDOUQ7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNyb290e1xcbiAgLyogcGFkZGluZy10b3A6IDUwcHg7ICovXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgLS1tYWluLWJnLWNvbG9yOiAjRjhGRkU1O1xcbiAgLS1tYWluLWNhcmQtY29sb3I6ICMxRTJEMjQgO1xcbiAgLS10ZW1wLWNvbG9yLWNvbGQ6ICMwYWY7XFxuICAtLXRlbXAtY29sb3Itd2FybTogI2YwOTgwMDtcXG4gIC0tdGVtcC1jb2xvci1ob3Q6ICNmMDAwMDAgO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmZsZXgtY29sdW1uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mbGV4LW5vLXdyYXB7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuLmZsZXgtanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mbGV4LWp1c3RpZnktZXZlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmZsZXgtYWxpZ24tY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZWJ1ZyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbi5tLTAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWwtNSB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4ubXItNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLyogdGhpcyBpcyB0aGUgbWFpbiB0ZW1wIHVuZGVyIHRoZSBjaXR5IG5hbWUgKi9cXG4jbWFpbi10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogOXJlbTtcXG59XFxuXFxuLnRlbXAtY29sb3ItMSB7IC8qIC0xMCAtIDQwICovXFxuICBjb2xvcjogIzFBQURGRjtcXG59XFxuXFxuLnRlbXAtY29sb3ItMiB7IC8qIDQwIC0gNDkgKi9cXG4gIGNvbG9yOiAjMTc4MkZGO1xcbn1cXG5cXG4udGVtcC1jb2xvci0zIHsgLyogNTAgLSA1OSAqL1xcbiAgY29sb3I6ICMzMzE3RDk7XFxufVxcblxcbi50ZW1wLWNvbG9yLTQgeyAvKiA2MCAtIDY5ICovXFxuICBjb2xvcjogIzc0MzlBNDtcXG59XFxuLnRlbXAtY29sb3ItNSB7IC8qIDcwIC0gNzkgKi9cXG4gIGNvbG9yOiAjQ0U2NzUyO1xcbn1cXG5cXG4udGVtcC1jb2xvci02IHsgLyogODAgLSA4OSAqL1xcbiAgY29sb3I6ICNGRjZFMDQ7XFxufVxcblxcbi50ZW1wLWNvbG9yLTcgeyAvKiA5MCAtIDk5ICovXFxuICBjb2xvcjogI0ZGNDcwNTtcXG59XFxuXFxuLnRlbXAtY29sb3ItOCB7IC8qIDEwMCAtIDExOSovXFxuICBjb2xvcjogI0ZGMDEwMTtcXG59XFxuXFxuXFxuLyogTGFyZ2VyIHRoYW4gbW9iaWxlICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSB7XFxuICBib2R5IHtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG5cXG4gIC5jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICB9XFxuXFxuICBpbnB1dFt0eXBlPXRleHRde1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmN1cnJlbnQtd2VhdGhlci1jYXJkIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIH1cXG5cXG4gIC5jdXJyZW50LXdlYXRoZXItY2FyZCA+IGRpdiA+IHAge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuXFxuICAjY3VycmVudC13ZWF0aGVyLWNhcmQtdGVtcHMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuICAuaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCByZ2JhKDIzMCwyMzAsMjMwLDAuNSk7IFxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4IHJnYmEoMjMwLDIzMCwyMzAsMC41KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIH1cXG5cXG4gIC5ob3VybHktZm9yZWNhc3QtY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGZsZXgtYmFzaXM6IDEwMHB4O1xcbiAgfVxcblxcbiAgLmhvdXJseS1mb3JlY2FzdC1jYXJkID4gLnRpbWUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5jdXJyZW50LXdlYXRoZXItY2FyZCwgLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIsIC5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVjZmNmO1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggcmdiYSgyMzAsMjMwLDIzMCwwLjUpOyBcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCByZ2JhKDIzMCwyMzAsMjMwLDAuNSk7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWNhcmQge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWNhcmQgPiAud2Vla2RheSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbn1cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0IChhbHNvIHBvaW50IHdoZW4gZ3JpZCBiZWNvbWVzIGFjdGl2ZSkgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXG59XFxuXFxuLyogTGFyZ2VyIHRoYW4gdGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7XFxufVxcblxcbi8qIExhcmdlciB0aGFuIGRlc2t0b3AgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxufVxcblxcbi8qIExhcmdlciB0aGFuIERlc2t0b3AgSEQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAuZm9yZWNhc3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NrZWxldG9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2tlbGV0b24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKlxuICogQW4gYWJzdHJhY3Rpb24gZm9yIGVhc2lseSBjcmVhdGluZyBIVE1MIG5vZGVzLlxuICogZGF0YSA9IHtcbiAqICB0eXBlOiBcImRpdlwiLFxuICogIGNsYXNzTGlzdDogW1wiY2xhc3MxXCIsIFwiY2xhc3MyXCJdLFxuICogIGF0dHJpYnV0ZXM6IHtcbiAqICAgIGhpZGRlbjogXCJ0cnVlXCIsXG4gKiAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICogIH0sXG4gKiAgaWQ6IFwiU29tZUlEXCIsXG4gKiBpbm5lclRleHQ6IFwiU29tZSB0ZXh0XCJcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEh0bWxFbGVtZW50KGRhdGEgPSB7fSkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkYXRhLnR5cGUpO1xuXG4gIGlmIChkYXRhLmNsYXNzTGlzdCkge1xuICAgIGRhdGEuY2xhc3NMaXN0LmZvckVhY2goKGNsYXNzTmFtZSkgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkpO1xuICB9XG5cbiAgaWYgKGRhdGEuYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3QgYXR0cmlidXRlTmFtZSBpbiBkYXRhLmF0dHJpYnV0ZXMpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGRhdGEuYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGEuaW5uZXJUZXh0KSB7XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSBkYXRhLmlubmVyVGV4dC50cmltKCk7XG4gIH1cblxuICBpZiAoZGF0YS5pZCkge1xuICAgIGVsZW1lbnQuaWQgPSBkYXRhLmlkO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBIdG1sRWxlbWVudCB9IGZyb20gXCIuL0h0bWxFbGVtZW50LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvck1lc3NhZ2UoZXJyb3JNZXNzYWdlKSB7XG4gIGNvbnN0IHJvd0NvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBjbGFzc0xpc3Q6IFtcInJvd1wiXSxcbiAgfSk7XG5cbiAgY29uc3QgX2NvbHVtbkNvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBjbGFzc0xpc3Q6IFtcbiAgICAgIFwidHdlbHZlXCIsXG4gICAgICBcImNvbHVtbnNcIixcbiAgICAgIFwiZmxleFwiLFxuICAgICAgXCJmbGV4LWp1c3RpZnktY2VudGVyXCIsXG4gICAgICBcImZsZXgtYWxpZ24tY2VudGVyXCIsXG4gICAgXSxcbiAgfSk7XG5cbiAgY29uc3QgdGV4dENvbXBvbmVudCA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgdHlwZTogXCJoNVwiLFxuICAgIGlubmVyVGV4dDogZXJyb3JNZXNzYWdlLFxuICB9KTtcblxuICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQoX2NvbHVtbkNvbnRhaW5lcik7XG4gIF9jb2x1bW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbXBvbmVudCk7XG5cbiAgcmV0dXJuIHJvd0NvbnRhaW5lcjtcbn1cbiIsImltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSBcIi4uL0h0bWxFbGVtZW50XCI7XG5pbXBvcnQgd2VhdGhlciBmcm9tIFwiLi4vd2VhdGhlci5qc1wiO1xuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSBcIi4uL2xvYWRJbWFnZVwiO1xuaW1wb3J0IHsgdGVtcFRvQ29sb3IgfSBmcm9tIFwiLi4vdGVtcFRvQ29sb3IuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEhvdXJseUZvcmVjYXN0Q2FyZCh3ZWF0aGVyRGF0YSkge1xuICBsZXQgaW1hZ2U7XG5cbiAgY29uc3QgX3BhcnNlZFdlYXRoZXJEYXRhID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgeyB0ZW1wLCBkdCwgcG9wIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGljb24gfSA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF07XG4gICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZShOdW1iZXIucGFyc2VJbnQoZHQudG9TdHJpbmcoKSArIFwiMDAwXCIpKTtcbiAgICBjb25zdCB0aW1lID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1VU1wiLCB7XG4gICAgICB0aW1lU3R5bGU6IFwic2hvcnRcIixcbiAgICB9KS5mb3JtYXQoZGF0ZVRpbWUpO1xuICAgIHBvcCA9IE1hdGguZmxvb3IocG9wICogMTAwKTtcbiAgICB0ZW1wID0gTWF0aC5yb3VuZCh0ZW1wKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGVtcCxcbiAgICAgIGljb24sXG4gICAgICB0aW1lLFxuICAgICAgcG9wLFxuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgX2NvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBjbGFzc0xpc3Q6IFtcImhvdXJseS1mb3JlY2FzdC1jYXJkXCJdLFxuICB9KTtcblxuICAvKipcbiAgICogVHJ5IHRvIGxvYWQgYW4gaW1hZ2UgZnJvbSBPcGVuV2VhdGhlciBBUEkuIElmIHRoaXMgcHJvY2VzcyBmYWlscywgd2Ugd2lsbFxuICAgKiBjb25zdW1lIHRoZSBlcnJvciBhbmQgY29udGludWUgd2l0aCBwcm9jZXNzaW5nIHRoZSB1c2VyIHJlcXVlc3QuIFdlIGNhblxuICAgKiBzaWxlbnRseSBjb25zdW1lIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSB3aWxsIHNpbXBseSBub3QgZGlzcGxheSBhbiBpbWFnZSBpZlxuICAgKiB0aGVyZSBpcyBhbiBlcnJvci4gV2h5IGxvZyBvciBzdG9wIGV4ZWN1dGlvbiBzaW1wbHkgYmVjYXVzZSB3ZSBjYW4gZGlzcGxheVxuICAgKiBhbiBpbWFnZT8gUmF0aGVyLCB3ZSBjb250aW51ZSB3aXRoIG91ciBwcm9jZXNzIGFuZCBmb3JnZXQgYWJvdXQgc2hvd2luZyBhblxuICAgKiBpbWFnZSB0byB0aGUgdXNlci5cbiAgICovXG4gIGNvbnN0IGxvYWQgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXJsID0gd2VhdGhlci5nZXRJY29uU3JjKF9wYXJzZWRXZWF0aGVyRGF0YS5pY29uKTtcbiAgICB0cnkge1xuICAgICAgaW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UodXJsKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAvKipcbiAgICAgICAqIFJldHVybiB0cnVlLiBXZSB3aWxsIGNvbnN1bWUgdGhlIGVycm9yIHJldHVybmVkIGJ5IHRoZSBBUEkgYW5kIGp1c3RcbiAgICAgICAqIG5vdCBzaG93IGFuIGltYWdlLiBObyBiaWcgZGVhbC5cbiAgICAgICAqL1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uIChwYXJlbnROb2RlKSB7XG4gICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgIG5ldyBIdG1sRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgICBjbGFzc0xpc3Q6IFtcInRpbWVcIl0sXG4gICAgICAgIGlubmVyVGV4dDogYCR7X3BhcnNlZFdlYXRoZXJEYXRhLnRpbWV9YCxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAvLyBTaG93IHRoZSByYWluIHBlcmNlbnRhZ2UgaWYgaXQgaXMgb3ZlciAyMCVcbiAgICBpZiAoX3BhcnNlZFdlYXRoZXJEYXRhLnBvcCA+IDIwKSB7XG4gICAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgICAgIGlubmVyVGV4dDogYCR7X3BhcnNlZFdlYXRoZXJEYXRhLnBvcH0lYCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcInBcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbdGVtcFRvQ29sb3IoX3BhcnNlZFdlYXRoZXJEYXRhLnRlbXApXSxcbiAgICAgICAgaW5uZXJUZXh0OiBgJHtfcGFyc2VkV2VhdGhlckRhdGEudGVtcH3CsGAsXG4gICAgICB9KVxuICAgICk7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChfY29udGFpbmVyKTtcbiAgfTtcblxuICByZXR1cm4geyByZW5kZXIsIGxvYWQgfTtcbn1cbiIsImltcG9ydCB7IEhvdXJseUZvcmVjYXN0Q2FyZCB9IGZyb20gXCIuL0hvdXJseUZvcmVjYXN0Q2FyZFwiO1xuaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi4vSHRtbEVsZW1lbnRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhvdXJseUZvcmVjYXN0TG9hZGVyKCkge1xuICAvLyBTdG9yZSBlYWNoIGZvcmVjYXN0IGNhcmQgaW4gdGhpcyBhcnJheSBmb3IgZnV0dXJlIGl0ZXJhdGlvbi5cbiAgbGV0IGhvdXJseUZvcmVjYXN0cyA9IFtdO1xuXG4gIGxldCBfaG91cmx5Rm9yZWNhc3RDb250YWluZXIgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgY2xhc3NMaXN0OiBbXG4gICAgICBcImhvdXJseS1mb3JlY2FzdC1jb250YWluZXJcIixcbiAgICAgIFwiZmxleFwiLFxuICAgICAgXCJmbGV4LXJvd1wiLFxuICAgICAgXCJmbGV4LW5vLXdyYXBcIixcbiAgICBdLFxuICB9KTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBlYWNoIGZvcmVjYXN0IGNhcmQgYnkgY3JlYXRpbmcgYW4gaW5zdGFuY2Ugb2YgRm9yZWNhc3RDYXJkIGFuZFxuICAgKiBjYWxsaW5nIC5sb2FkKCkgb24gdGhlIGNhcmQuIC5sb2FkKCkgaXMgYW4gYXN5bmMgb3BlcmF0aW9uIHRoYXQgYWx3YXlzXG4gICAqIHJldHVybnMgYSByZXNvbHZlZCBwcm9taXNlIC0gaXQgY2Fubm90IGZhaWwuIFRoaXMgaXMgZG9uZSBvbiBwdXJwb3NlLiBUaGVcbiAgICogb25seSB0aGluZyB0aGF0IC5sb2FkKCkgaXMgZG9pbmcgaXMgYXR0ZW1wdGluZyB0byByZXRyaWV2ZSBhbiBpbWFnZSBmcm9tXG4gICAqIHRoZSBPcGVuV2VhdGhlciBBUEkuIElmIGFuIGltYWdlIGNhbm5vdCBiZSByZXRyaWV2ZWQgdGhlbiB3ZSBzaW1wbHkgcmV0dXJuXG4gICAqIGEgcmVzb2x2ZWQgcHJvbWlzZSBhbmQgdGhlcmUgaXMgbm8gaW1hZ2UgdG8gZGlzcGxheSBmb3IgdGhhdCBmb3JlY2FzdCBjYXJkLlxuICAgKi9cbiAgY29uc3QgbG9hZEZvcmVjYXN0ID0gYXN5bmMgZnVuY3Rpb24gKHdlYXRoZXJEYXRhKSB7XG4gICAgY29uc3QgaG91cmx5Rm9yZWNhc3REYXRhID0gd2VhdGhlckRhdGEuaG91cmx5LnNwbGljZSgyMyk7XG5cbiAgICBob3VybHlGb3JlY2FzdERhdGEuZm9yRWFjaCgoaG91ciwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHdlYXRoZXJDYXJkID0gbmV3IEhvdXJseUZvcmVjYXN0Q2FyZChob3VyKTtcbiAgICAgIGhvdXJseUZvcmVjYXN0cy5wdXNoKHdlYXRoZXJDYXJkKTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBJIHdhbnQgZm9yZWNhc3QubG9hZCgpIHRvIGJlIGNhbGxlZCBpbiBwYXJhbGxlbCBmb3IgYWxsIG9mIHRoZVxuICAgICAqIGZvcmVjYXN0cy4gSSB1c2UgbWFwIHRvIG1hcCBvdmVyIHRoZSBob3VybHlGb3JlY2FzdHMgYW5kIGNhbGwgLmxvYWQoKSBvblxuICAgICAqIGVhY2ggZm9yZWNhc3QuIC5sb2FkKCkgd2lsbCBmZXRjaCBhbiBpbWFnZSBmcm9tIE9wZW5XZWF0aGVyIEFQSS4gVGhpc1xuICAgICAqIGlzIHNsb3csIGFuZCBJIGRvbnQgd2FudCB0byByZW5kZXIgdGV4dCBvbiB0aGUgc2NyZWVuIEFORCBUSEVOIGltYWdlc1xuICAgICAqIGFmdGVyIGEgc2xpZ2h0IGRlbGF5LiBTbyBJIHVzZSBQcm9taXNlLmFsbCgpIHRvIG1ha2Ugc3VyZSBhbGwgaW1hZ2VzXG4gICAgICogaGF2ZSBiZWVuIGZldGNoZWQgYW5kIGxvYWRlZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICBhd2FpdCBQcm9taXNlLmFsbChob3VybHlGb3JlY2FzdHMubWFwKChmb3JlY2FzdCkgPT4gZm9yZWNhc3QubG9hZCgpKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gcmVuZGVycyBlYWNoIGZvcmVjYXN0IGNhcmQgdG8gdGhlIGRvbS5cbiAgICovXG4gIGNvbnN0IHJlbmRlckZvcmVjYXN0ID0gZnVuY3Rpb24gKHJvb3ROb2RlKSB7XG4gICAgaG91cmx5Rm9yZWNhc3RzLmZvckVhY2goKGZvcmVjYXN0KSA9PlxuICAgICAgZm9yZWNhc3QucmVuZGVyKF9ob3VybHlGb3JlY2FzdENvbnRhaW5lcilcbiAgICApO1xuICAgIHJvb3ROb2RlLmFwcGVuZENoaWxkKF9ob3VybHlGb3JlY2FzdENvbnRhaW5lcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyB0aGUgZm9yZWNhc3QgY2FyZHMgZnJvbSB0aGUgZG9tLiBUaGlzIGlzIG5lZWRlZCBzb1xuICAgKiB3aGVuIHVzZXJzIG1ha2Ugc3Vic2VxdWVudCByZXF1ZXN0cywgdGhlIHByZXZpb3VzIHJlc3VsdHMgYXJlIHJlbW92ZWQuXG4gICAqL1xuICBjb25zdCByZW1vdmVGb3JlY2FzdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2hvdXJseUZvcmVjYXN0Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgIF9ob3VybHlGb3JlY2FzdENvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgY2xhc3NMaXN0OiBbXG4gICAgICAgIFwiaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lclwiLFxuICAgICAgICBcImZsZXhcIixcbiAgICAgICAgXCJmbGV4LXJvd1wiLFxuICAgICAgICBcImZsZXgtbm8td3JhcFwiLFxuICAgICAgXSxcbiAgICB9KTtcbiAgICBob3VybHlGb3JlY2FzdHMgPSBbXTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkRm9yZWNhc3QsIHJlbmRlckZvcmVjYXN0LCByZW1vdmVGb3JlY2FzdHMgfTtcbn1cbiIsIi8qKlxuICogQXN5bmNocm9ub3VzbHkgbG9hZCBpbWFnZXMgdXNpbmcgb3V0c2lkZSByZXNvdXJjZXMuXG4gKiBUaGUgbG9hZEltYWdlKCkgZm4gY3JlYXRlcyBhbiBpbWFnZSBvYmplY3QgYW5kIHJldHVybnMgYSBwcm9taXNlLiBUaGUgcHJvbWlzZVxuICogaXMgcmVzb2x2ZWQgd2hlbiB0aGUgaW1hZ2UgbG9hZHMgc3VjY2Vzc2Z1bGx5IG9yIG90aGVyd2lzZSByZWplY3RlZC5cbiAqXG4gKiBUaGlzIGFsbG93cyB5b3UgdG8gbG9hZCBhbiBpbWFnZSBhbmQgb25seSBjb250aW51ZSB3aGVuIHRoZSBpbWFnZSBpcyBsb2FkZWQuXG4gKiBJIHVzZSB0aGlzIGZ1bmN0aW9uIHRvIG1ha2Ugc3VyZSB0aGUgaW1hZ2UgaXMgbG9hZGVkIGJlZm9yZSByZW5kZXJpbmcgb3RoZXJcbiAqIGVsZW1lbnRzIHRvIHRoZSBET00uIE90aGVyd2lzZSwgbXkgb3RoZXIgZWxlbWVudHMgc2hvdyB1cCBpbiB0aGUgRE9NIGFuZCBhXG4gKiBmZXcgc2Vjb25kcyAobWF5YmUgbWlsbGlzZWNvbmRzKSBsYXRlciwgdGhlIGltYWdlIHNob3dzIHVwLiBJdCBkb2Vzbid0IGxvb2tcbiAqIG5pY2Ugd2hlbiB0aGF0IGhhcHBlbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSW1hZ2Uoc3JjKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcgaW1hZ2Ugb2JqZWN0LlxuICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgLyoqXG4gICAgICogQWRkIHR3byBsaXN0ZW5lcnMgb24gdGhlIGltYWdlLlxuICAgICAqXG4gICAgICogbG9hZCgpIHdpbGwgYmUgY2FsbGVkIGlmIHRoZSBpbWFnZSBzdWNjZXNzZnVsbHkgbG9hZHMuXG4gICAgICogbG9hZCgpIHdpbGwgY2FsbCB0aGUgcmVzb2x2ZSBjYiwgd2l0aCB0aGUgaW1hZ2UuXG4gICAgICpcbiAgICAgKiBlcnJvcigpIHdpbGwgYmUgY2FsbGVkIGlmIHRoZSBpbWFnZSBjYW5ub3QgbG9hZC5cbiAgICAgKiBlcnJvcigpIHdpbGwgY2FsbCB0aGUgcmVqZWN0IGNiLCB3aXRoIGEgbWVzc2FnZS5cbiAgICAgKi9cbiAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJsb2FkXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc29sdmUoaW1hZ2UpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJlcnJvclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKFwiQ2Fubm90IGxvYWQgaW1hZ2VcIikpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgc3JjIG9mIHRoZSBpbWFnZS4gVGhpcyBpcyBkb25lIEFGVEVSIHRoZSBsb2FkL2Vycm9yIGV2ZW50XG4gICAgICogbGlzdGVuZXJzIGFyZSBjcmVhdGVkLlxuICAgICAqL1xuICAgIGltYWdlLnNyYyA9IHNyYztcbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGZvciBjcmVhdGluZyBTa2VsZXRvbiBqcyBjb21wb25lbnRzLlxuaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi9IdG1sRWxlbWVudC5qc1wiO1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vZXJyb3JNZXNzYWdlLmpzXCI7XG5pbXBvcnQgeyBDdXJyZW50V2VhdGhlckNhcmQgfSBmcm9tIFwiLi93ZWF0aGVyQ2FyZENvbXBvbmVudHMvQ3VycmVudFdlYXRoZXJDYXJkLmpzXCI7XG5pbXBvcnQgeyBmb3JlY2FzdExvYWRlciB9IGZyb20gXCIuL3dlYXRoZXJDYXJkQ29tcG9uZW50cy9mb3JlY2FzdExvYWRlci5qc1wiO1xuaW1wb3J0IHdlYXRoZXIgZnJvbSBcIi4vd2VhdGhlci5qc1wiO1xuaW1wb3J0IHsgaG91cmx5Rm9yZWNhc3RMb2FkZXIgfSBmcm9tIFwiLi9ob3VybHlXZWF0aGVyQ29tcG9uZW50cy9ob3VybHlGb3JlY2FzdExvYWRlci5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaENvbXBvbmVudChyb290Tm9kZSkge1xuICAvKipcbiAgICogU3RvcmUgcmVmZXJlbmNlIHRvIHRoZSBlcnJvciBtZXNzYWdlICh3aGVuIGEgdXNlciB0eXBlcyBpbiBhbiBpbnZhbGlkIGNpdHkpXG4gICAqIFNvIHdlIGNhbiByZW1vdmUgdGhpcyBlcnJvciBtZXNzYWdlIHdoZW4gdGhlIHVzZXIgY3JlYXRlcyBhIG5ldyBzZWFyY2hcbiAgICovXG4gIGxldCBfZXJyb3JNZXNzYWdlQ29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBTdG9yZSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgd2VhdGhlciBjYXJkLiBUaGlzIHdheSBpdCBjYW4gYmUgcmVwbGFjZWRcbiAgICogb24gc3Vic2VxdWVudCBzZWFyY2hlcy5cbiAgICovXG4gIGxldCBfY3VycmVudFdlYXRoZXJDYXJkO1xuXG4gIGNvbnN0IHNldmVuRGF5Rm9yZWNhc3QgPSBmb3JlY2FzdExvYWRlcigpO1xuICBjb25zdCBob3VybHlGb3JlY2FzdCA9IGhvdXJseUZvcmVjYXN0TG9hZGVyKCk7XG5cbiAgY29uc3QgX2NvbXBvbmVudENvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBjbGFzc0xpc3Q6IFtcbiAgICAgIFwicm93XCIsXG4gICAgICBcImlucHV0LWNvbnRhaW5lclwiLFxuICAgICAgXCJmbGV4XCIsXG4gICAgICBcImZsZXgtcm93XCIsXG4gICAgICBcImZsZXgtanVzdGlmeS1jZW50ZXJcIixcbiAgICAgIFwiZmxleC1hbGlnbi1jZW50ZXJcIixcbiAgICBdLFxuICB9KTtcblxuICBjb25zdCBfc2VhcmNoQmFyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImlucHV0XCIsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAvLyBwbGFjZWhvbGRlcjogXCJFbnRlciBhIGNpdHkgbmFtZVwiLFxuICAgICAgc3R5bGU6IFwid2lkdGg6IDkwJVwiLFxuICAgIH0sXG4gICAgaWQ6IFwiY2l0eU5hbWVcIixcbiAgfSk7XG5cbiAgY29uc3QgX2ZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgIF9zZWFyY2hCYXIuZm9jdXMoKTtcbiAgfTtcblxuICAvKipcbiAgICogTGlzdGVuIGZvciB3aGVuIHRoZSB1c2VyIHByZXNzZXMgdGhlIEVudGVyIGtleVxuICAgKi9cbiAgY29uc3QgX2hhbmRsZUtleWRvd24gPSBhc3luYyBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSAhPSBcIkVudGVyXCIpIHJldHVybjtcbiAgICBpZiAoc2NyZWVuLndpZHRoIDwgNTAwKSBfc2VhcmNoQmFyLmJsdXIoKTtcbiAgICBfcHJvY2Vzc0RhdGEoZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByb2Nlc3MgdGhlIGZvcm0uXG4gICAqL1xuICBjb25zdCBfcHJvY2Vzc0RhdGEgPSBhc3luYyBmdW5jdGlvbiAoZSkge1xuICAgIC8vRG9udCBwcm9jZXNzIGFuIGVtcHR5IHNlYXJjaCB0ZXJtLlxuICAgIGlmIChlLnRhcmdldC52YWx1ZS50cmltKCkubGVuZ3RoIDw9IDApIHtcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gXCJcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvL1JlbW92ZSBhbnkgcHJldmlvdXMgZXJyb3IgbWVzc2FnZXNcbiAgICBpZiAoX2Vycm9yTWVzc2FnZUNvbXBvbmVudCkgX2Vycm9yTWVzc2FnZUNvbXBvbmVudC5yZW1vdmUoKTtcbiAgICBpZiAoX2N1cnJlbnRXZWF0aGVyQ2FyZCkgX2N1cnJlbnRXZWF0aGVyQ2FyZC5yZW1vdmUoKTtcbiAgICBzZXZlbkRheUZvcmVjYXN0LnJlbW92ZUZvcmVjYXN0cygpO1xuICAgIGhvdXJseUZvcmVjYXN0LnJlbW92ZUZvcmVjYXN0cygpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlci5nZXRXZWF0aGVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGNvbnN0IHRvZGF5c1dlYXRoZXIgPSBuZXcgQ3VycmVudFdlYXRoZXJDYXJkKFxuICAgICAgICB3ZWF0aGVyRGF0YSxcbiAgICAgICAgcm9vdE5vZGUsXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlLnRyaW0oKVxuICAgICAgKTtcbiAgICAgIF9jdXJyZW50V2VhdGhlckNhcmQgPSB0b2RheXNXZWF0aGVyLmNvbnRhaW5lcjtcblxuICAgICAgYXdhaXQgc2V2ZW5EYXlGb3JlY2FzdC5sb2FkRm9yZWNhc3Qod2VhdGhlckRhdGEpO1xuICAgICAgYXdhaXQgaG91cmx5Rm9yZWNhc3QubG9hZEZvcmVjYXN0KHdlYXRoZXJEYXRhKTtcblxuICAgICAgdG9kYXlzV2VhdGhlci5yZW5kZXIoKTtcbiAgICAgIGhvdXJseUZvcmVjYXN0LnJlbmRlckZvcmVjYXN0KHJvb3ROb2RlKTtcbiAgICAgIHNldmVuRGF5Rm9yZWNhc3QucmVuZGVyRm9yZWNhc3Qocm9vdE5vZGUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICBfZXJyb3JNZXNzYWdlQ29tcG9uZW50ID0gZXJyb3JNZXNzYWdlKGVycm9yKTtcbiAgICAgIHJvb3ROb2RlLmFwcGVuZENoaWxkKF9lcnJvck1lc3NhZ2VDb21wb25lbnQpO1xuICAgICAgX2ZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBMaXN0ZW4gZm9yIHRoZSB1c2VyIHByZXNzaW5nIHRoZSBFbnRlciBrZXlcbiAgICBfc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIF9oYW5kbGVLZXlkb3duKTtcblxuICAgIF9jb21wb25lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoX3NlYXJjaEJhcik7XG4gICAgcm9vdE5vZGUuYXBwZW5kQ2hpbGQoX2NvbXBvbmVudENvbnRhaW5lcik7XG4gICAgX2ZvY3VzKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVuZGVyIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdGVtcFRvQ29sb3IodGVtcCkge1xuICBpZiAodGVtcCA+IC0xMCAmJiB0ZW1wIDwgNDApIHtcbiAgICByZXR1cm4gXCJ0ZW1wLWNvbG9yLTFcIjtcbiAgfSBlbHNlIGlmICh0ZW1wID49IDQwICYmIHRlbXAgPCA1MCkge1xuICAgIHJldHVybiBcInRlbXAtY29sb3ItMlwiO1xuICB9IGVsc2UgaWYgKHRlbXAgPj0gNTAgJiYgdGVtcCA8IDYwKSB7XG4gICAgcmV0dXJuIFwidGVtcC1jb2xvci0zXCI7XG4gIH0gZWxzZSBpZiAodGVtcCA+PSA2MCAmJiB0ZW1wIDwgNzApIHtcbiAgICByZXR1cm4gXCJ0ZW1wLWNvbG9yLTRcIjtcbiAgfSBlbHNlIGlmICh0ZW1wID49IDcwICYmIHRlbXAgPCA4MCkge1xuICAgIHJldHVybiBcInRlbXAtY29sb3ItNVwiO1xuICB9IGVsc2UgaWYgKHRlbXAgPj0gODAgJiYgdGVtcCA8IDkwKSB7XG4gICAgcmV0dXJuIFwidGVtcC1jb2xvci02XCI7XG4gIH0gZWxzZSBpZiAodGVtcCA+PSA5MCAmJiB0ZW1wIDwgMTAwKSB7XG4gICAgcmV0dXJuIFwidGVtcC1jb2xvci03XCI7XG4gIH0gZWxzZSBpZiAodGVtcCA+PSAxMDAgJiYgdGVtcCA8IDEyMCkge1xuICAgIHJldHVybiBcInRlbXAtY29sb3ItOFwiO1xuICB9XG59XG4iLCIvKipcbiAqIEFuIGFic3RyYWN0aW9uIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBPcGVuV2VhdGhlciBhcGkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBUaGlzIHByb2plY3Qgd2lsbCBydW4gb24gR2l0SHViIHBhZ2VzLiBUaGVyZWZvcmUgdGhlcmUgd2lsbCBub3QgYmUgYSBzZXJ2ZXJcbiAgICogd2hlcmUgSSBjYW4gaW5qZWN0IGVudi4gdmFycy4gVGhpcyBpcyBPS0FZIGJlY2F1c2UgdGhlIE9wZW5XZWF0aGVyIEFQSSBpc1xuICAgKiBmcmVlLlxuICAgKi9cbiAgY29uc3QgQVBJX0tFWSA9IFwiYWM3NmM4MWZjMDNiODE2ZTQ5YjNkMDZmNzY1Nzk1MDZcIjtcblxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2Ugb2JqZWN0IHdpdGggY29vcmRpbmF0ZXNcbiAgICogeyBsYXQ6IG4sIGxvbmc6IHh9XG4gICAqIE9uIGVycm9yIHJldHVybiB0aGUgZXJyb3IgbWVzc2FnZS5cbiAgICovXG4gIGFzeW5jIGZ1bmN0aW9uIF9nZXRDb29yZHMoY2l0eU5hbWUpIHtcbiAgICBsZXQgZGF0YTtcbiAgICBjb25zdCBnZW9jb2RlVXJsID1cbiAgICAgIFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0XCIgK1xuICAgICAgYD9xPSR7Y2l0eU5hbWV9JmFwcGlkPSR7QVBJX0tFWX1gO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdlb2NvZGVVcmwpO1xuICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHsgbGF0LCBsb24gfSA9IGRhdGFbMF07XG4gICAgICByZXR1cm4geyBsYXQsIGxvbiB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYE5vIGRhdGEgZm9yICR7Y2l0eU5hbWV9YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgd2VhdGhlciBmb3IgYSBnaXZlbiBjaXR5IG5hbWUuIElmIHRoZSBjaXR5IGlzIG5vdCBmb3VuZCB0aGVuXG4gICAqIHByb3BhZ2F0ZSB0aGUgZXJyb3IgbWVzc2FnZSB0byB0aGUgY2FsbGVyLlxuICAgKi9cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5TmFtZSkge1xuICAgIGxldCBkYXRhO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgbGF0LCBsb24gfSA9IGF3YWl0IF9nZXRDb29yZHMoY2l0eU5hbWUpO1xuICAgICAgY29uc3QgYXBpVXJsID1cbiAgICAgICAgXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbFwiICtcbiAgICAgICAgYD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mZXhjbHVkZT1taW51dGVseWAgK1xuICAgICAgICBgJnVuaXRzPWltcGVyaWFsYCArXG4gICAgICAgIGAmYXBwaWQ9JHtBUElfS0VZfWA7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsKTtcbiAgICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgaWNvbiB1cmwgZm9yIHRoZSBwcm92aWRlZCBpY29uIGNvZGUuXG4gICAqIFRoaXMgaXMgdGhlIHVybCB0byBiZSB1c2VkIGFzIGFuIGltZy5zcmNcbiAgICovXG4gIGZ1bmN0aW9uIGdldEljb25TcmMoaWNvbkNvZGUsIG9wdGlvbnMgPSB7IGxhcmdlOiBmYWxzZSB9KSB7XG4gICAgaWYgKG9wdGlvbnMubGFyZ2UpIHtcbiAgICAgIHJldHVybiBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbkNvZGV9QDJ4LnBuZ2A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbkNvZGV9LnBuZ2A7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgZ2V0V2VhdGhlciwgZ2V0SWNvblNyYyB9O1xufSkoKTtcbiIsImltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSBcIi4uL0h0bWxFbGVtZW50XCI7XG5pbXBvcnQgeyB0ZW1wVG9Db2xvciB9IGZyb20gXCIuLi90ZW1wVG9Db2xvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ3VycmVudFdlYXRoZXJDYXJkKHdlYXRoZXJEYXRhID0ge30sIHJvb3ROb2RlLCBjaXR5TmFtZSkge1xuICAvLyBQcm9jZXNzIHRoZSB3ZWF0aGVyRGF0YSB1cG9uIGluc3RhbnRpYXRpb25cbiAgY29uc3QgcGFyc2VkV2VhdGhlckRhdGEgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCB7IG1heCwgbWluIH0gPSB3ZWF0aGVyRGF0YS5kYWlseVswXS50ZW1wO1xuICAgIGxldCB7IHRlbXAgfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gICAgbGV0IHsgZGVzY3JpcHRpb24gfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXTtcbiAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZGVzY3JpcHRpb24uc2xpY2UoMSk7XG4gICAgdGVtcCA9IE1hdGgucm91bmQodGVtcCk7XG4gICAgbWF4ID0gTWF0aC5yb3VuZChtYXgpO1xuICAgIG1pbiA9IE1hdGgucm91bmQobWluKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGVtcCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgbWF4LFxuICAgICAgbWluLFxuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgX3NrZWxldG9uUm93ID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1wicm93XCJdLFxuICB9KTtcblxuICBjb25zdCBfc2tlbGV0b25Db2x1bW4gPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgY2xhc3NMaXN0OiBbXCJ0d2VsdmVcIiwgXCJjb2x1bW5zXCJdLFxuICB9KTtcblxuICBjb25zdCBfY29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1xuICAgICAgXCJjdXJyZW50LXdlYXRoZXItY2FyZFwiLFxuICAgICAgXCJmbGV4XCIsXG4gICAgICBcImZsZXgtY29sdW1uXCIsXG4gICAgICBcImZsZXgtYWxpZ24tY2VudGVyXCIsXG4gICAgXSxcbiAgfSk7XG5cbiAgLy8gQ3JlYXRlIHRoZSB0aXRsZSBjb250YWluZXIgd2l0aCB0aGUgaW5uZXIgdGV4dCBhcyB0aGUgdXNlcnMgc2VhcmNoIHRlcm0uXG4gIGNvbnN0IF90aXRsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICBjbGFzc0xpc3Q6IFtcbiAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgIFwiZmxleC1yb3dcIixcbiAgICAgICAgXCJmbGV4LWp1c3RpZnktY2VudGVyXCIsXG4gICAgICAgIFwiZmxleC1hbGlnbi1jZW50ZXJcIixcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBfdGl0bGVUZXh0ID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwiaDJcIixcbiAgICAgIGNsYXNzTGlzdDogW1wibS0wXCJdLFxuICAgICAgaW5uZXJUZXh0OiBjaXR5TmFtZSxcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChfdGl0bGVUZXh0KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IF90ZW1wID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgIGNsYXNzTGlzdDogW1xuICAgICAgICBcImZsZXhcIixcbiAgICAgICAgXCJmbGV4LXJvd1wiLFxuICAgICAgICBcImZsZXgtanVzdGlmeS1jZW50ZXJcIixcbiAgICAgICAgXCJmbGV4LWFsaWduLWNlbnRlclwiLFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IF90ZXh0ID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgY2xhc3NMaXN0OiBbXCJtLTBcIiwgdGVtcFRvQ29sb3IocGFyc2VkV2VhdGhlckRhdGEudGVtcCldLFxuICAgICAgaWQ6IFwibWFpbi10ZW1wXCIsXG4gICAgICBpbm5lclRleHQ6IGAke3BhcnNlZFdlYXRoZXJEYXRhLnRlbXB9wrBgLFxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKF90ZXh0KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IF9kZXNjcmlwdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICBpZDogXCJjdXJyZW50LXdlYXRoZXItY2FyZC1kZXNjcmlwdGlvbi1jb250YWluZXJcIixcbiAgICAgIGNsYXNzTGlzdDogW1xuICAgICAgICBcImZsZXhcIixcbiAgICAgICAgXCJmbGV4LXJvd1wiLFxuICAgICAgICBcImZsZXgtanVzdGlmeS1jZW50ZXJcIixcbiAgICAgICAgXCJmbGV4LWFsaWduLWNlbnRlclwiLFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IF90ZXh0ID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgY2xhc3NMaXN0OiBbXCJtLTBcIl0sXG4gICAgICBpbm5lclRleHQ6IHBhcnNlZFdlYXRoZXJEYXRhLmRlc2NyaXB0aW9uLFxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKF90ZXh0KTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgX2RhaWx5VGVtcHMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgaWQ6IFwiY3VycmVudC13ZWF0aGVyLWNhcmQtdGVtcHMtY29udGFpbmVyXCIsXG4gICAgICBjbGFzc0xpc3Q6IFtcbiAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgIFwiZmxleC1yb3dcIixcbiAgICAgICAgXCJmbGV4LWp1c3RpZnktY2VudGVyXCIsXG4gICAgICAgIFwiZmxleC1hbGdpbi1jZW50ZXJcIixcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBfaGlnaFRlbXAgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJwXCIsXG4gICAgICBjbGFzc0xpc3Q6IFtcIm0tMFwiLCBcIm1yLTVcIiwgdGVtcFRvQ29sb3IocGFyc2VkV2VhdGhlckRhdGEubWF4KV0sXG4gICAgICBpbm5lclRleHQ6IGBIOiR7cGFyc2VkV2VhdGhlckRhdGEubWF4fcKwYCxcbiAgICB9KTtcblxuICAgIGNvbnN0IF9sb3dUZW1wID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgY2xhc3NMaXN0OiBbXCJtLTBcIiwgXCJtbC01XCIsIHRlbXBUb0NvbG9yKHBhcnNlZFdlYXRoZXJEYXRhLm1pbildLFxuICAgICAgaW5uZXJUZXh0OiBgTDoke3BhcnNlZFdlYXRoZXJEYXRhLm1pbn3CsGAsXG4gICAgfSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoX2xvd1RlbXApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChfaGlnaFRlbXApO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCByZW5kZXIgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgX3NrZWxldG9uUm93LmFwcGVuZENoaWxkKF9za2VsZXRvbkNvbHVtbik7XG4gICAgX3NrZWxldG9uQ29sdW1uLmFwcGVuZENoaWxkKF9jb250YWluZXIpO1xuICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX3RpdGxlKTtcbiAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKF90ZW1wKTtcbiAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKF9kZXNjcmlwdGlvbik7XG4gICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChfZGFpbHlUZW1wcyk7XG5cbiAgICByb290Tm9kZS5hcHBlbmRDaGlsZChfc2tlbGV0b25Sb3cpO1xuICB9O1xuXG4gIHJldHVybiB7IGNvbnRhaW5lcjogX3NrZWxldG9uUm93LCByZW5kZXIgfTtcbn1cbiIsImltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSBcIi4uL0h0bWxFbGVtZW50XCI7XG5pbXBvcnQgd2VhdGhlciBmcm9tIFwiLi4vd2VhdGhlci5qc1wiO1xuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSBcIi4uL2xvYWRJbWFnZVwiO1xuaW1wb3J0IHsgdGVtcFRvQ29sb3IgfSBmcm9tIFwiLi4vdGVtcFRvQ29sb3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEZvcmVjYXN0Q2FyZCh3ZWF0aGVyRGF0YSA9IHt9KSB7XG4gIC8vIFRoZSB3ZWF0aGVyIGltYWdlLlxuICBsZXQgaW1hZ2U7XG5cbiAgLy8gUHJvY2VzcyB0aGUgd2VhdGhlckRhdGEgdXBvbiBpbnN0YW50aWF0aW9uXG4gIGNvbnN0IHBhcnNlZFdlYXRoZXJEYXRhID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgeyBtYXgsIG1pbiB9ID0gd2VhdGhlckRhdGEudGVtcDtcbiAgICBsZXQgeyBkdCwgcG9wIH0gPSB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCB7IGljb24gfSA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF07XG5cbiAgICBkdCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFtdLCB7IHdlZWtkYXk6IFwic2hvcnRcIiB9KS5mb3JtYXQoXG4gICAgICBuZXcgRGF0ZShOdW1iZXIucGFyc2VJbnQoZHQudG9TdHJpbmcoKSArIFwiMDAwXCIpKVxuICAgICk7XG4gICAgcG9wID0gTWF0aC5mbG9vcihwb3AgKiAxMDApO1xuICAgIG1pbiA9IE1hdGgucm91bmQobWluKTtcbiAgICBtYXggPSBNYXRoLnJvdW5kKG1heCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGR0LFxuICAgICAgbWF4LFxuICAgICAgbWluLFxuICAgICAgcG9wLFxuICAgICAgaWNvbixcbiAgICB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBjbGFzc0xpc3Q6IFtcImZvcmVjYXN0LWNhcmRcIiwgXCJmbGV4XCIsIFwiZmxleC1yb3dcIiwgXCJmbGV4LWFsaWduLWNlbnRlclwiXSxcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFRyeSB0byBsb2FkIGFuIGltYWdlIGZyb20gT3BlbldlYXRoZXIgQVBJLiBJZiB0aGlzIHByb2Nlc3MgZmFpbHMsIHdlIHdpbGxcbiAgICogY29uc3VtZSB0aGUgZXJyb3IgYW5kIGNvbnRpbnVlIHdpdGggcHJvY2Vzc2luZyB0aGUgdXNlciByZXF1ZXN0LiBXZSBjYW5cbiAgICogc2lsZW50bHkgY29uc3VtZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2Ugd2lsbCBzaW1wbHkgbm90IGRpc3BsYXkgYW4gaW1hZ2UgaWZcbiAgICogdGhlcmUgaXMgYW4gZXJyb3IuIFdoeSBsb2cgb3Igc3RvcCBleGVjdXRpb24gc2ltcGx5IGJlY2F1c2Ugd2UgY2FuIGRpc3BsYXlcbiAgICogYW4gaW1hZ2U/IFJhdGhlciwgd2UgY29udGludWUgd2l0aCBvdXIgcHJvY2VzcyBhbmQgZm9yZ2V0IGFib3V0IHNob3dpbmcgYW5cbiAgICogaW1hZ2UgdG8gdGhlIHVzZXIuXG4gICAqL1xuICBjb25zdCBsb2FkID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHVybCA9IHdlYXRoZXIuZ2V0SWNvblNyYyhwYXJzZWRXZWF0aGVyRGF0YS5pY29uKTtcbiAgICB0cnkge1xuICAgICAgaW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UodXJsKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvKipcbiAgICAgICAqIFJldHVybiB0cnVlLiBXZSB3aWxsIGNvbnN1bWUgdGhlIGVycm9yIHJldHVybmVkIGJ5IHRoZSBBUEkgYW5kIGp1c3RcbiAgICAgICAqIG5vdCBzaG93IGFuIGltYWdlLiBObyBiaWcgZGVhbC5cbiAgICAgICAqL1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uIChwYXJlbnROb2RlKSB7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgICAgdHlwZTogXCJwXCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1wid2Vla2RheVwiXSxcbiAgICAgICAgaW5uZXJUZXh0OiBwYXJzZWRXZWF0aGVyRGF0YS5kdCxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgIG5ldyBIdG1sRWxlbWVudCh7XG4gICAgICAgIHR5cDogXCJwXCIsXG4gICAgICAgIGlubmVyVGV4dDogYCR7cGFyc2VkV2VhdGhlckRhdGEucG9wfSUgcmFpbmAsXG4gICAgICB9KVxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJsb3ctdGVtcFwiLCB0ZW1wVG9Db2xvcihwYXJzZWRXZWF0aGVyRGF0YS5taW4pXSxcbiAgICAgICAgdHlwZTogXCJwXCIsXG4gICAgICAgIGlubmVyVGV4dDogYEw6ICR7cGFyc2VkV2VhdGhlckRhdGEubWlufcKwYCxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgICBjbGFzc0xpc3Q6IFtcImhpZ2gtdGVtcFwiLCB0ZW1wVG9Db2xvcihwYXJzZWRXZWF0aGVyRGF0YS5tYXgpXSxcbiAgICAgICAgdHlwZTogXCJwXCIsXG4gICAgICAgIGlubmVyVGV4dDogYEg6ICR7cGFyc2VkV2VhdGhlckRhdGEubWF4fcKwYCxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfTtcblxuICByZXR1cm4geyByZW5kZXIsIGxvYWQgfTtcbn1cbiIsImltcG9ydCB7IEZvcmVjYXN0Q2FyZCB9IGZyb20gXCIuL0ZvcmVjYXN0Q2FyZC5qc1wiO1xuaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi4vSHRtbEVsZW1lbnQuanNcIjtcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBsb2FkcyB0aGUgc2V2ZW4gZGF5IGZvcmVjYXN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9yZWNhc3RMb2FkZXIoKSB7XG4gIC8vIFN0b3JlIGVhY2ggZm9yZWNhc3QgY2FyZCBpbiB0aGlzIGFycmF5IGZvciBmdXR1cmUgaXRlcmF0aW9uLlxuICBsZXQgZGFpbHlGb3JlY2FzdHMgPSBbXTtcblxuICBsZXQgX2ZvcmVjYXN0Q29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1wiZm9yZWNhc3QtY29udGFpbmVyXCJdLFxuICB9KTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBlYWNoIGZvcmVjYXN0IGNhcmQgYnkgY3JlYXRpbmcgYW4gaW5zdGFuY2Ugb2YgRm9yZWNhc3RDYXJkIGFuZFxuICAgKiBjYWxsaW5nIC5sb2FkKCkgb24gdGhlIGNhcmQuIC5sb2FkKCkgaXMgYW4gYXN5bmMgb3BlcmF0aW9uIHRoYXQgYWx3YXlzXG4gICAqIHJldHVybnMgYSByZXNvbHZlZCBwcm9taXNlIC0gaXQgY2Fubm90IGZhaWwuIFRoaXMgaXMgZG9uZSBvbiBwdXJwb3NlLiBUaGVcbiAgICogb25seSB0aGluZyB0aGF0IC5sb2FkKCkgaXMgZG9pbmcgaXMgYXR0ZW1wdGluZyB0byByZXRyaWV2ZSBhbiBpbWFnZSBmcm9tXG4gICAqIHRoZSBPcGVuV2VhdGhlciBBUEkuIElmIGFuIGltYWdlIGNhbm5vdCBiZSByZXRyaWV2ZWQgdGhlbiB3ZSBzaW1wbHkgcmV0dXJuXG4gICAqIGEgcmVzb2x2ZWQgcHJvbWlzZSBhbmQgdGhlcmUgaXMgbm8gaW1hZ2UgdG8gZGlzcGxheSBmb3IgdGhhdCBmb3JlY2FzdCBjYXJkLlxuICAgKi9cbiAgY29uc3QgbG9hZEZvcmVjYXN0ID0gYXN5bmMgZnVuY3Rpb24gKHdlYXRoZXJEYXRhID0ge30pIHtcbiAgICB3ZWF0aGVyRGF0YS5kYWlseS5mb3JFYWNoKChkYXkpID0+IHtcbiAgICAgIGRhaWx5Rm9yZWNhc3RzLnB1c2gobmV3IEZvcmVjYXN0Q2FyZChkYXkpKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEkgd2FudCBmb3JlY2FzdC5sb2FkKCkgdG8gYmUgY2FsbGVkIGluIHBhcmFsbGVsIGZvciBhbGwgNyBvZiB0aGVcbiAgICAgKiBmb3JlY2FzdHMuIEkgdXNlIG1hcCB0byBtYXAgb3ZlciB0aGUgZGFpbHlGb3JlY2FzdHMgYW5kIGNhbGwgLmxvYWQoKSBvblxuICAgICAqIGVhY2ggZm9yZWNhc3QuIC5sb2FkKCkgd2lsbCBmZXRjaCBhbiBpbWFnZSBmcm9tIE9wZW5XZWF0aGVyIEFQSS4gVGhpc1xuICAgICAqIGlzIHNsb3csIGFuZCBJIGRvbnQgd2FudCB0byByZW5kZXIgdGV4dCBvbiB0aGUgc2NyZWVuIEFORCBUSEVOIGltYWdlc1xuICAgICAqIGFmdGVyIGEgc2xpZ2h0IGRlbGF5LiBTbyBJIHVzZSBQcm9taXNlLmFsbCgpIHRvIG1ha2Ugc3VyZSBhbGwgaW1hZ2VzXG4gICAgICogaGF2ZSBiZWVuIGZldGNoZWQgYW5kIGxvYWRlZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICBhd2FpdCBQcm9taXNlLmFsbChkYWlseUZvcmVjYXN0cy5tYXAoKGZvcmVjYXN0KSA9PiBmb3JlY2FzdC5sb2FkKCkpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiByZW5kZXJzIGVhY2ggZm9yZWNhc3QgY2FyZCB0byB0aGUgZG9tLlxuICAgKi9cbiAgY29uc3QgcmVuZGVyRm9yZWNhc3QgPSBmdW5jdGlvbiAocm9vdE5vZGUpIHtcbiAgICBkYWlseUZvcmVjYXN0cy5mb3JFYWNoKChmb3JlY2FzdCkgPT4gZm9yZWNhc3QucmVuZGVyKF9mb3JlY2FzdENvbnRhaW5lcikpO1xuICAgIHJvb3ROb2RlLmFwcGVuZENoaWxkKF9mb3JlY2FzdENvbnRhaW5lcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyB0aGUgZm9yZWNhc3QgY2FyZHMgZnJvbSB0aGUgZG9tLiBUaGlzIGlzIG5lZWRlZCBzb1xuICAgKiB3aGVuIHVzZXJzIG1ha2Ugc3Vic2VxdWVudCByZXF1ZXN0cywgdGhlIHByZXZpb3VzIHJlc3VsdHMgYXJlIHJlbW92ZWQuXG4gICAqL1xuICBjb25zdCByZW1vdmVGb3JlY2FzdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2ZvcmVjYXN0Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgIF9mb3JlY2FzdENvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgY2xhc3NMaXN0OiBbXCJmb3JlY2FzdC1jb250YWluZXJcIl0sXG4gICAgfSk7XG4gICAgZGFpbHlGb3JlY2FzdHMgPSBbXTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkRm9yZWNhc3QsIHJlbmRlckZvcmVjYXN0LCByZW1vdmVGb3JlY2FzdHMgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIEltcG9ydCB0aGUgcmVxdWlyZWQgQ1NTIGZpbGVzIGZvciBTa2VsZXRvbiB0byB3b3JrLlxuICogVGhlc2UgYXJlIENTUyBmaWxlcyBjcmVhdGVkIGZvciBTa2VsZXRvbi4gSSBkaWQgbm90IGNyZWF0ZSB0aGVzZS5cbiAqL1xuaW1wb3J0IFwiLi9Ta2VsZXRvbi9jc3Mvbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IFwiLi9Ta2VsZXRvbi9jc3Mvc2tlbGV0b24uY3NzXCI7XG5cbi8qKlxuICogSW1wb3J0IHRoZSBsYXlvdXQgc3R5bGluZy4gVGhpcyBpcyB3aGVyZSBsYXlvdXQgY2xhc3NlcyBhcmUgZGVmaW5lZC5cbiAqL1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuaW1wb3J0IHsgc2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoQ29tcG9uZW50LmpzXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJvb3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpO1xuICBjb25zdCBzZWFyY2hCYXIgPSBzZWFyY2hDb21wb25lbnQocm9vdE5vZGUpO1xuICBzZWFyY2hCYXIucmVuZGVyKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9