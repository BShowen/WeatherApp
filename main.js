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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nhtml, body {\n  border: 5px solid red;\n  width: 100vw;\n  height: 100%;\n}\n\n#root{\n  min-width: 100%;\n  min-height: 100%;\n  /* padding-top: 50px; */\n  margin-top: 50px;\n  --main-bg-color: #F8FFE5;\n  --main-card-color: #1E2D24 ;\n  --temp-color-cold: #0af;\n  --temp-color-warm: #f09800;\n  --temp-color-hot: #f00000 ;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-no-wrap{\n  flex-wrap: nowrap;\n}\n\n.flex-justify-center {\n  justify-content: center;\n}\n\n.flex-justify-even {\n  justify-content: space-evenly;\n}\n\n.flex-align-center {\n  align-items: center;\n}\n\n.debug {\n  border: 2px solid red;\n}\n\n.m-0 {\n  margin: 0;\n}\n\n.ml-5 {\n  margin-left: 5px;\n}\n\n.mr-5 {\n  margin-right: 5px;\n}\n\n/* this is the main temp under the city name */\n#main-temp {\n  font-size: 9rem;\n}\n\n.temp-color-1 { /* -10 - 40 */\n  color: #1AADFF;\n}\n\n.temp-color-2 { /* 40 - 49 */\n  color: #1782FF;\n}\n\n.temp-color-3 { /* 50 - 59 */\n  color: #3317D9;\n}\n\n.temp-color-4 { /* 60 - 69 */\n  color: #7439A4;\n}\n.temp-color-5 { /* 70 - 79 */\n  color: #CE6752;\n}\n\n.temp-color-6 { /* 80 - 89 */\n  color: #FF6E04;\n}\n\n.temp-color-7 { /* 90 - 99 */\n  color: #FF4705;\n}\n\n.temp-color-8 { /* 100 - 119*/\n  color: #FF0101;\n}\n\n\n/* Larger than mobile */\n@media (min-width: 350px) {\n  body {\n    overflow-x: hidden;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n       -moz-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n\n  .container{\n    width: 100%;\n    height: 100%;\n    padding: 8px;\n  }\n\n  input[type=text]{\n    min-width: 100%;\n    min-height: 50px;\n    font-weight: bolder;\n    font-size: 2rem;\n    text-align: center;\n  }\n\n  .current-weather-card {\n    max-width: 100%;\n    margin: 0 auto;\n    padding: 10px;\n    border-radius: 1rem;\n  }\n\n  .current-weather-card > div > p {\n    font-weight: bolder;\n    font-size: 3rem;\n  }\n\n  #current-weather-card-temps-container {\n    width: 100%;\n    justify-content: center;\n    gap: 20px;\n  }\n\n  .hourly-forecast-container {\n    max-width: 100%;\n    margin: 15px auto;\n    border-radius: 1rem;\n    overflow: scroll;\n    -webkit-box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5); \n    box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5);\n    padding: 10px;\n\n    font-weight: bolder;\n  }\n\n  .hourly-forecast-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: 100px;\n  }\n\n  .hourly-forecast-card > .time {\n    font-size: 1.2rem;\n  }\n\n  .current-weather-card, .hourly-forecast-container, .forecast-container {\n    background-color: #decfcf;\n  }\n\n  .forecast-container {\n    max-width: 100%;\n    margin: 15px auto;\n    overflow: scroll;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    border-radius: 1rem;\n    -webkit-box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5); \n    box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5);\n    padding: 10px 5px;\n  }\n\n  .forecast-card {\n    border-top: 1px solid #e6e6e6;\n    width: 100%;\n    justify-content: space-evenly;\n    font-weight: bolder;\n  }\n\n  .forecast-card > .weekday {\n    color: white;\n    font-size: 2rem;\n  }\n}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {\n}\n\n/* Larger than tablet */\n@media (min-width: 750px) {\n}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {\n}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {\n  .forecast-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .hourly-forecast-container {\n    border-radius: 1rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;EAChB,wBAAwB;EACxB,2BAA2B;EAC3B,uBAAuB;EACvB,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA,8CAA8C;AAC9C;EACE,eAAe;AACjB;;AAEA,gBAAgB,aAAa;EAC3B,cAAc;AAChB;;AAEA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;;AAEA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;;AAEA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;AACA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;;AAEA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;;AAEA,gBAAgB,YAAY;EAC1B,cAAc;AAChB;;AAEA,gBAAgB,aAAa;EAC3B,cAAc;AAChB;;;AAGA,uBAAuB;AACvB;EACE;IACE,kBAAkB;IAClB,WAAW;IACX,8BAA8B;OAC3B,2BAA2B;YACtB,sBAAsB;EAChC;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,cAAc;IACd,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;IACnB,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,uBAAuB;IACvB,SAAS;EACX;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,0DAA0D;IAC1D,kDAAkD;IAClD,aAAa;;IAEb,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,cAAc;IACd,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,gBAAgB;;IAEhB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;;IAEnB,mBAAmB;IACnB,0DAA0D;IAC1D,kDAAkD;IAClD,iBAAiB;EACnB;;EAEA;IACE,6BAA6B;IAC7B,WAAW;IACX,6BAA6B;IAC7B,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,eAAe;EACjB;AACF;;AAEA,8DAA8D;AAC9D;AACA;;AAEA,uBAAuB;AACvB;AACA;;AAEA,wBAAwB;AACxB;AACA;;AAEA,2BAA2B;AAC3B;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;AACF","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nhtml, body {\n  border: 5px solid red;\n  width: 100vw;\n  height: 100%;\n}\n\n#root{\n  min-width: 100%;\n  min-height: 100%;\n  /* padding-top: 50px; */\n  margin-top: 50px;\n  --main-bg-color: #F8FFE5;\n  --main-card-color: #1E2D24 ;\n  --temp-color-cold: #0af;\n  --temp-color-warm: #f09800;\n  --temp-color-hot: #f00000 ;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-no-wrap{\n  flex-wrap: nowrap;\n}\n\n.flex-justify-center {\n  justify-content: center;\n}\n\n.flex-justify-even {\n  justify-content: space-evenly;\n}\n\n.flex-align-center {\n  align-items: center;\n}\n\n.debug {\n  border: 2px solid red;\n}\n\n.m-0 {\n  margin: 0;\n}\n\n.ml-5 {\n  margin-left: 5px;\n}\n\n.mr-5 {\n  margin-right: 5px;\n}\n\n/* this is the main temp under the city name */\n#main-temp {\n  font-size: 9rem;\n}\n\n.temp-color-1 { /* -10 - 40 */\n  color: #1AADFF;\n}\n\n.temp-color-2 { /* 40 - 49 */\n  color: #1782FF;\n}\n\n.temp-color-3 { /* 50 - 59 */\n  color: #3317D9;\n}\n\n.temp-color-4 { /* 60 - 69 */\n  color: #7439A4;\n}\n.temp-color-5 { /* 70 - 79 */\n  color: #CE6752;\n}\n\n.temp-color-6 { /* 80 - 89 */\n  color: #FF6E04;\n}\n\n.temp-color-7 { /* 90 - 99 */\n  color: #FF4705;\n}\n\n.temp-color-8 { /* 100 - 119*/\n  color: #FF0101;\n}\n\n\n/* Larger than mobile */\n@media (min-width: 350px) {\n  body {\n    overflow-x: hidden;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n       -moz-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n\n  .container{\n    width: 100%;\n    height: 100%;\n    padding: 8px;\n  }\n\n  input[type=text]{\n    min-width: 100%;\n    min-height: 50px;\n    font-weight: bolder;\n    font-size: 2rem;\n    text-align: center;\n  }\n\n  .current-weather-card {\n    max-width: 100%;\n    margin: 0 auto;\n    padding: 10px;\n    border-radius: 1rem;\n  }\n\n  .current-weather-card > div > p {\n    font-weight: bolder;\n    font-size: 3rem;\n  }\n\n  #current-weather-card-temps-container {\n    width: 100%;\n    justify-content: center;\n    gap: 20px;\n  }\n\n  .hourly-forecast-container {\n    max-width: 100%;\n    margin: 15px auto;\n    border-radius: 1rem;\n    overflow: scroll;\n    -webkit-box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5); \n    box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5);\n    padding: 10px;\n\n    font-weight: bolder;\n  }\n\n  .hourly-forecast-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: 100px;\n  }\n\n  .hourly-forecast-card > .time {\n    font-size: 1.2rem;\n  }\n\n  .current-weather-card, .hourly-forecast-container, .forecast-container {\n    background-color: #decfcf;\n  }\n\n  .forecast-container {\n    max-width: 100%;\n    margin: 15px auto;\n    overflow: scroll;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    border-radius: 1rem;\n    -webkit-box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5); \n    box-shadow: 0px 0px 12px 0px rgba(230,230,230,0.5);\n    padding: 10px 5px;\n  }\n\n  .forecast-card {\n    border-top: 1px solid #e6e6e6;\n    width: 100%;\n    justify-content: space-evenly;\n    font-weight: bolder;\n  }\n\n  .forecast-card > .weekday {\n    color: white;\n    font-size: 2rem;\n  }\n}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {\n}\n\n/* Larger than tablet */\n@media (min-width: 750px) {\n}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {\n}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {\n  .forecast-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .hourly-forecast-container {\n    border-radius: 1rem;\n  }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _HtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlElement */ "./src/HelperFunctions/HtmlElement.js");


function ErrorMessage(rootNode) {
  const _rowContainer = new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "div",
    classList: ["row"],
  });

  const _columnContainer = new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
    type: "div",
    classList: [
      "twelve",
      "columns",
      "flex",
      "flex-justify-center",
      "flex-align-center",
    ],
  });

  const textComponent = new _HtmlElement__WEBPACK_IMPORTED_MODULE_0__.HtmlElement({
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

/***/ "./src/HourlyForecast/HourlyForecastCard.js":
/*!**************************************************!*\
  !*** ./src/HourlyForecast/HourlyForecastCard.js ***!
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

/***/ "./src/HourlyForecast/hourlyForecast.js":
/*!**********************************************!*\
  !*** ./src/HourlyForecast/hourlyForecast.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hourlyForecast": () => (/* binding */ hourlyForecast)
/* harmony export */ });
/* harmony import */ var _HourlyForecastCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HourlyForecastCard */ "./src/HourlyForecast/HourlyForecastCard.js");
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
/* harmony import */ var _HourlyForecast_hourlyForecast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HourlyForecast/hourlyForecast */ "./src/HourlyForecast/hourlyForecast.js");
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
  let hourlyForecastLoader = (0,_HourlyForecast_hourlyForecast__WEBPACK_IMPORTED_MODULE_9__.hourlyForecast)(rootNode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNFFBQTRRLDZCQUE2Qix1Q0FBdUMsMkNBQTJDLFVBQVUsaURBQWlELGNBQWMsR0FBRyw0ZEFBNGQsbUJBQW1CLEdBQUcsaU1BQWlNLDJCQUEyQixxQ0FBcUMsVUFBVSx3SkFBd0osa0JBQWtCLGNBQWMsR0FBRyxzS0FBc0ssa0JBQWtCLEdBQUcsa0xBQWtMLGtDQUFrQyxHQUFHLGlIQUFpSCxlQUFlLEdBQUcsK01BQStNLDhCQUE4QixHQUFHLGlHQUFpRyxzQkFBc0IsR0FBRywyRUFBMkUsdUJBQXVCLEdBQUcsa0pBQWtKLG1CQUFtQix5QkFBeUIsS0FBSyxpRUFBaUUscUJBQXFCLGdCQUFnQixHQUFHLHdGQUF3RixtQkFBbUIsR0FBRyxnR0FBZ0csbUJBQW1CLG1CQUFtQix1QkFBdUIsNkJBQTZCLEdBQUcsU0FBUyxnQkFBZ0IsR0FBRyxTQUFTLG9CQUFvQixHQUFHLHNMQUFzTCxjQUFjLEdBQUcsK0VBQStFLHFCQUFxQixHQUFHLHNMQUFzTCxxQkFBcUIsR0FBRyxnRkFBZ0YsaUNBQWlDLDRCQUE0QixjQUFjLEdBQUcsMkRBQTJELG1CQUFtQixHQUFHLHdHQUF3RyxzQ0FBc0MsbUJBQW1CLEdBQUcsb2hCQUFvaEIsb0JBQW9CLDBCQUEwQixzQkFBc0IsVUFBVSxnRkFBZ0Ysc0JBQXNCLEdBQUcsNlRBQTZULHlCQUF5QixHQUFHLG9ZQUFvWSxnQ0FBZ0MsNEJBQTRCLFVBQVUsMEdBQTBHLG9CQUFvQixHQUFHLHVIQUF1SCxjQUFjLGVBQWUsR0FBRyw0SEFBNEgsd0JBQXdCLEdBQUcsK1RBQStULDRCQUE0Qix1QkFBdUIsVUFBVSx3VUFBd1UsaUJBQWlCLEdBQUcsNk5BQTZOLG1DQUFtQyx3Q0FBd0MscUNBQXFDLG1DQUFtQyxHQUFHLGtVQUFrVSw2QkFBNkIsR0FBRyw2RUFBNkUsOEJBQThCLGtCQUFrQixtQ0FBbUMsR0FBRyxrS0FBa0ssZUFBZSx1QkFBdUIsVUFBVSxpRkFBaUYsbUJBQW1CLEdBQUcsc0tBQXNLLHNCQUFzQixHQUFHLG1LQUFtSyw4QkFBOEIsc0JBQXNCLEdBQUcsYUFBYSxlQUFlLEdBQUcsT0FBTyx5R0FBeUcsU0FBUyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxRQUFRLFVBQVUsTUFBTSxpQkFBaUIsVUFBVSxPQUFPLE9BQU8sTUFBTSxRQUFRLHNCQUFzQix1QkFBdUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLFdBQVcsT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLFNBQVMsTUFBTSxTQUFTLG9CQUFvQixxQkFBcUIscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLFNBQVMsTUFBTSxNQUFNLFlBQVksT0FBTyxVQUFVLE1BQU0sUUFBUSxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLE1BQU0sTUFBTSxzQkFBc0IscUJBQXFCLE9BQU8sUUFBUSxNQUFNLE1BQU0sVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLHNCQUFzQixhQUFhLHVCQUF1QixhQUFhLE9BQU8sUUFBUSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSwyUEFBMlAsNkJBQTZCLHVDQUF1QywyQ0FBMkMsVUFBVSxpREFBaUQsY0FBYyxHQUFHLDRkQUE0ZCxtQkFBbUIsR0FBRyxpTUFBaU0sMkJBQTJCLHFDQUFxQyxVQUFVLHdKQUF3SixrQkFBa0IsY0FBYyxHQUFHLHNLQUFzSyxrQkFBa0IsR0FBRyxrTEFBa0wsa0NBQWtDLEdBQUcsaUhBQWlILGVBQWUsR0FBRywrTUFBK00sOEJBQThCLEdBQUcsaUdBQWlHLHNCQUFzQixHQUFHLDJFQUEyRSx1QkFBdUIsR0FBRyxrSkFBa0osbUJBQW1CLHlCQUF5QixLQUFLLGlFQUFpRSxxQkFBcUIsZ0JBQWdCLEdBQUcsd0ZBQXdGLG1CQUFtQixHQUFHLGdHQUFnRyxtQkFBbUIsbUJBQW1CLHVCQUF1Qiw2QkFBNkIsR0FBRyxTQUFTLGdCQUFnQixHQUFHLFNBQVMsb0JBQW9CLEdBQUcsc0xBQXNMLGNBQWMsR0FBRywrRUFBK0UscUJBQXFCLEdBQUcsc0xBQXNMLHFCQUFxQixHQUFHLGdGQUFnRixpQ0FBaUMsNEJBQTRCLGNBQWMsR0FBRywyREFBMkQsbUJBQW1CLEdBQUcsd0dBQXdHLHNDQUFzQyxtQkFBbUIsR0FBRyxvaEJBQW9oQixvQkFBb0IsMEJBQTBCLHNCQUFzQixVQUFVLGdGQUFnRixzQkFBc0IsR0FBRyw2VEFBNlQseUJBQXlCLEdBQUcsb1lBQW9ZLGdDQUFnQyw0QkFBNEIsVUFBVSwwR0FBMEcsb0JBQW9CLEdBQUcsdUhBQXVILGNBQWMsZUFBZSxHQUFHLDRIQUE0SCx3QkFBd0IsR0FBRywrVEFBK1QsNEJBQTRCLHVCQUF1QixVQUFVLHdVQUF3VSxpQkFBaUIsR0FBRyw2TkFBNk4sbUNBQW1DLHdDQUF3QyxxQ0FBcUMsbUNBQW1DLEdBQUcsa1VBQWtVLDZCQUE2QixHQUFHLDZFQUE2RSw4QkFBOEIsa0JBQWtCLG1DQUFtQyxHQUFHLGtLQUFrSyxlQUFlLHVCQUF1QixVQUFVLGlGQUFpRixtQkFBbUIsR0FBRyxzS0FBc0ssc0JBQXNCLEdBQUcsbUtBQW1LLDhCQUE4QixzQkFBc0IsR0FBRyxhQUFhLGVBQWUsR0FBRyxtQkFBbUI7QUFDM3VrQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSwwaEJBQTBoQix1QkFBdUIsZ0JBQWdCLHNCQUFzQixtQkFBbUIsNEJBQTRCLEdBQUcsc0JBQXNCLGdCQUFnQixnQkFBZ0IsNEJBQTRCLEdBQUcsb0VBQW9FLGdCQUFnQixpQkFBaUIsa0JBQWtCLEtBQUssR0FBRyxvRUFBb0UsZ0JBQWdCLGtCQUFrQixLQUFLLDBCQUEwQix1QkFBdUIsS0FBSyxrREFBa0Qsc0JBQXNCLEtBQUssd0RBQXdELHdCQUF3QixzQ0FBc0Msd0JBQXdCLHNDQUFzQyx3QkFBd0Isc0NBQXNDLHdCQUF3QixzQ0FBc0Msd0JBQXdCLHNDQUFzQyx3QkFBd0Isc0NBQXNDLHdCQUF3QixzQ0FBc0Msd0JBQXdCLHNDQUFzQyx3QkFBd0Isc0NBQXNDLHdCQUF3QixzQ0FBc0Msd0JBQXdCLHNDQUFzQyxhQUFhLGlCQUFpQix3Q0FBd0Msd0JBQXdCLHNDQUFzQyx3QkFBd0Isd0NBQXdDLGFBQWEsbUZBQW1GLDhCQUE4QixnRUFBZ0UsOEJBQThCLGtFQUFrRSw4QkFBOEIsaUVBQWlFLDhCQUE4QixpRUFBaUUsOEJBQThCLGdFQUFnRSw4QkFBOEIsa0VBQWtFLDhCQUE4QixrRUFBa0UsOEJBQThCLGlFQUFpRSw4QkFBOEIsZ0VBQWdFLDhCQUE4QixtRUFBbUUsOEJBQThCLHdFQUF3RSw4QkFBOEIsdUVBQXVFLDhCQUE4Qix1RUFBdUUsbUJBQW1CLEtBQUssbU9BQW1PLHVCQUF1QixRQUFRLHNCQUFzQiw4RkFBOEYscUJBQXFCLGtHQUFrRyxrQkFBa0Isb0dBQW9HLGNBQWMsc0JBQXNCLEdBQUcsT0FBTyxtQkFBbUIsbUJBQW1CLHdCQUF3QixPQUFPLG1CQUFtQixtQkFBbUIseUJBQXlCLE9BQU8sbUJBQW1CLG1CQUFtQix5QkFBeUIsT0FBTyxtQkFBbUIsbUJBQW1CLDBCQUEwQixPQUFPLG1CQUFtQixtQkFBbUIsMEJBQTBCLE9BQU8sbUJBQW1CLG1CQUFtQixvQkFBb0IsMERBQTBELFNBQVMsb0JBQW9CLFNBQVMsb0JBQW9CLFNBQVMsb0JBQW9CLFNBQVMsb0JBQW9CLFNBQVMsb0JBQW9CLFNBQVMsb0JBQW9CLEdBQUcsT0FBTyxjQUFjLEdBQUcsMEVBQTBFLG9CQUFvQixHQUFHLFdBQVcsb0JBQW9CLEdBQUcscUtBQXFLLDBCQUEwQixpQkFBaUIsb0JBQW9CLGdCQUFnQix1QkFBdUIsb0JBQW9CLHFCQUFxQixzQkFBc0IsMEJBQTBCLDhCQUE4QiwwQkFBMEIsd0JBQXdCLGtDQUFrQyx1QkFBdUIsMkJBQTJCLG9CQUFvQiw0QkFBNEIsR0FBRyx1UEFBdVAsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsR0FBRyx5S0FBeUssZ0JBQWdCLDhCQUE4QiwyQkFBMkIsR0FBRyw2WUFBNlksZ0JBQWdCLDhCQUE4QiwyQkFBMkIsR0FBRyxrUUFBa1EsaUJBQWlCLHVCQUF1Qix5RkFBeUYsOEJBQThCLHVCQUF1QixxQkFBcUIsNEJBQTRCLEdBQUcsaVBBQWlQLDZCQUE2Qiw2QkFBNkIsOEJBQThCLEdBQUcsWUFBWSxxQkFBcUIscUJBQXFCLHlCQUF5QixHQUFHLG1QQUFtUCw4QkFBOEIsZ0JBQWdCLEdBQUcsa0JBQWtCLG1CQUFtQix5QkFBeUIsc0JBQXNCLEdBQUcsWUFBWSxlQUFlLHFCQUFxQixHQUFHLG9EQUFvRCxxQkFBcUIsR0FBRyx1QkFBdUIsMEJBQTBCLHVCQUF1Qix5QkFBeUIsR0FBRywyRUFBMkUsK0JBQStCLEdBQUcsTUFBTSxnQ0FBZ0MsR0FBRyxVQUFVLG9CQUFvQixtQkFBbUIsR0FBRyxpQ0FBaUMsaUNBQWlDLG9CQUFvQixHQUFHLE1BQU0seUJBQXlCLEdBQUcsNEVBQTRFLHlCQUF5QixvQkFBb0IsbUJBQW1CLHdCQUF3Qix3QkFBd0IsOEJBQThCLHdCQUF3QixHQUFHLGNBQWMsbUJBQW1CLHlCQUF5QixzQkFBc0IsR0FBRyxpRkFBaUYsdUJBQXVCLHFCQUFxQixzQ0FBc0MsR0FBRyxtQ0FBbUMsc0JBQXNCLGlDQUFpQyx1QkFBdUIsMkZBQTJGLHlCQUF5QixHQUFHLHdDQUF3QywyQkFBMkIsR0FBRywyREFBMkQsMkJBQTJCLEdBQUcsMEZBQTBGLGdCQUFnQiw0QkFBNEIsR0FBRyxxQkFBcUIsb0JBQW9CLDRCQUE0QixHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyxnQkFBZ0IsaUJBQWlCLEdBQUcsMEVBQTBFLHFCQUFxQiwwQkFBMEIsb0JBQW9CLG1DQUFtQyxHQUFHLGlKQUFpSixrQkFBa0IsbUJBQW1CLGlCQUFpQixHQUFHLHNaQUFzWixVQUFVLG1CQUFtQixLQUFLLEdBQUcsZ0dBQWdHLEdBQUcseURBQXlELEdBQUcsMkRBQTJELEdBQUcsOERBQThELEdBQUcsU0FBUyxzR0FBc0csT0FBTyxtQkFBbUIsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxtQkFBbUIseUJBQXlCLHVCQUF1Qix5QkFBeUIseUJBQXlCLHVCQUF1Qix5QkFBeUIseUJBQXlCLHVCQUF1Qix5QkFBeUIseUJBQXlCLGtDQUFrQyx5QkFBeUIsMEJBQTBCLHdCQUF3QixXQUFXLEtBQUssbUJBQW1CLE1BQU0sbUJBQW1CLE1BQU0sbUJBQW1CLE1BQU0sbUJBQW1CLE1BQU0sbUJBQW1CLE1BQU0sbUJBQW1CLE1BQU0sbUJBQW1CLE1BQU0sbUJBQW1CLE1BQU0sbUJBQW1CLE1BQU0sbUJBQW1CLE1BQU0sb0JBQW9CLE1BQU0sbUJBQW1CLE1BQU0sb0JBQW9CLE1BQU0sb0JBQW9CLFFBQVEsS0FBSyxPQUFPLE9BQU8sT0FBTyxNQUFNLGlCQUFpQixNQUFNLHdCQUF3QixhQUFhLGFBQWEsYUFBYSxrQkFBa0IsS0FBSyxPQUFPLE1BQU0sVUFBVSxZQUFZLE1BQU0sOENBQThDLCtDQUErQywrQ0FBK0MsK0NBQStDLCtDQUErQyxnREFBZ0QsYUFBYSxNQUFNLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxRQUFRLEtBQUssT0FBTyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLGNBQWMsVUFBVSxZQUFZLFdBQVcsS0FBSyxTQUFTLFVBQVUsWUFBWSxhQUFhLE1BQU0sY0FBYyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssT0FBTyxjQUFjLFVBQVUsd0JBQXdCLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxhQUFhLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLE9BQU8sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxRQUFRLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxRQUFRLEtBQUssT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLGVBQWUsT0FBTyxtQkFBbUIsTUFBTSxPQUFPLE9BQU8sWUFBWSxNQUFNLFFBQVEsWUFBWSxNQUFNLFlBQVksWUFBWSxRQUFRLEtBQUssT0FBTyxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxRQUFRLEtBQUssUUFBUSxhQUFhLFFBQVEsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSx5Z0JBQXlnQix1QkFBdUIsZ0JBQWdCLHNCQUFzQixtQkFBbUIsNEJBQTRCLEdBQUcsc0JBQXNCLGdCQUFnQixnQkFBZ0IsNEJBQTRCLEdBQUcsb0VBQW9FLGdCQUFnQixpQkFBaUIsa0JBQWtCLEtBQUssR0FBRyxvRUFBb0UsZ0JBQWdCLGtCQUFrQixLQUFLLDBCQUEwQix1QkFBdUIsS0FBSyxrREFBa0Qsc0JBQXNCLEtBQUssd0RBQXdELHdCQUF3QixzQ0FBc0Msd0JBQXdCLHNDQUFzQyx3QkFBd0Isc0NBQXNDLHdCQUF3QixzQ0FBc0Msd0JBQXdCLHNDQUFzQyx3QkFBd0Isc0NBQXNDLHdCQUF3QixzQ0FBc0Msd0JBQXdCLHNDQUFzQyx3QkFBd0Isc0NBQXNDLHdCQUF3QixzQ0FBc0Msd0JBQXdCLHNDQUFzQyxhQUFhLGlCQUFpQix3Q0FBd0Msd0JBQXdCLHNDQUFzQyx3QkFBd0Isd0NBQXdDLGFBQWEsbUZBQW1GLDhCQUE4QixnRUFBZ0UsOEJBQThCLGtFQUFrRSw4QkFBOEIsaUVBQWlFLDhCQUE4QixpRUFBaUUsOEJBQThCLGdFQUFnRSw4QkFBOEIsa0VBQWtFLDhCQUE4QixrRUFBa0UsOEJBQThCLGlFQUFpRSw4QkFBOEIsZ0VBQWdFLDhCQUE4QixtRUFBbUUsOEJBQThCLHdFQUF3RSw4QkFBOEIsdUVBQXVFLDhCQUE4Qix1RUFBdUUsbUJBQW1CLEtBQUssbU9BQW1PLHVCQUF1QixRQUFRLHNCQUFzQiw4RkFBOEYscUJBQXFCLGtHQUFrRyxrQkFBa0Isb0dBQW9HLGNBQWMsc0JBQXNCLEdBQUcsT0FBTyxtQkFBbUIsbUJBQW1CLHdCQUF3QixPQUFPLG1CQUFtQixtQkFBbUIseUJBQXlCLE9BQU8sbUJBQW1CLG1CQUFtQix5QkFBeUIsT0FBTyxtQkFBbUIsbUJBQW1CLDBCQUEwQixPQUFPLG1CQUFtQixtQkFBbUIsMEJBQTBCLE9BQU8sbUJBQW1CLG1CQUFtQixvQkFBb0IsMERBQTBELFNBQVMsb0JBQW9CLFNBQVMsb0JBQW9CLFNBQVMsb0JBQW9CLFNBQVMsb0JBQW9CLFNBQVMsb0JBQW9CLFNBQVMsb0JBQW9CLEdBQUcsT0FBTyxjQUFjLEdBQUcsMEVBQTBFLG9CQUFvQixHQUFHLFdBQVcsb0JBQW9CLEdBQUcscUtBQXFLLDBCQUEwQixpQkFBaUIsb0JBQW9CLGdCQUFnQix1QkFBdUIsb0JBQW9CLHFCQUFxQixzQkFBc0IsMEJBQTBCLDhCQUE4QiwwQkFBMEIsd0JBQXdCLGtDQUFrQyx1QkFBdUIsMkJBQTJCLG9CQUFvQiw0QkFBNEIsR0FBRyx1UEFBdVAsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsR0FBRyx5S0FBeUssZ0JBQWdCLDhCQUE4QiwyQkFBMkIsR0FBRyw2WUFBNlksZ0JBQWdCLDhCQUE4QiwyQkFBMkIsR0FBRyxrUUFBa1EsaUJBQWlCLHVCQUF1Qix5RkFBeUYsOEJBQThCLHVCQUF1QixxQkFBcUIsNEJBQTRCLEdBQUcsaVBBQWlQLDZCQUE2Qiw2QkFBNkIsOEJBQThCLEdBQUcsWUFBWSxxQkFBcUIscUJBQXFCLHlCQUF5QixHQUFHLG1QQUFtUCw4QkFBOEIsZ0JBQWdCLEdBQUcsa0JBQWtCLG1CQUFtQix5QkFBeUIsc0JBQXNCLEdBQUcsWUFBWSxlQUFlLHFCQUFxQixHQUFHLG9EQUFvRCxxQkFBcUIsR0FBRyx1QkFBdUIsMEJBQTBCLHVCQUF1Qix5QkFBeUIsR0FBRywyRUFBMkUsK0JBQStCLEdBQUcsTUFBTSxnQ0FBZ0MsR0FBRyxVQUFVLG9CQUFvQixtQkFBbUIsR0FBRyxpQ0FBaUMsaUNBQWlDLG9CQUFvQixHQUFHLE1BQU0seUJBQXlCLEdBQUcsNEVBQTRFLHlCQUF5QixvQkFBb0IsbUJBQW1CLHdCQUF3Qix3QkFBd0IsOEJBQThCLHdCQUF3QixHQUFHLGNBQWMsbUJBQW1CLHlCQUF5QixzQkFBc0IsR0FBRyxpRkFBaUYsdUJBQXVCLHFCQUFxQixzQ0FBc0MsR0FBRyxtQ0FBbUMsc0JBQXNCLGlDQUFpQyx1QkFBdUIsMkZBQTJGLHlCQUF5QixHQUFHLHdDQUF3QywyQkFBMkIsR0FBRywyREFBMkQsMkJBQTJCLEdBQUcsMEZBQTBGLGdCQUFnQiw0QkFBNEIsR0FBRyxxQkFBcUIsb0JBQW9CLDRCQUE0QixHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyxnQkFBZ0IsaUJBQWlCLEdBQUcsMEVBQTBFLHFCQUFxQiwwQkFBMEIsb0JBQW9CLG1DQUFtQyxHQUFHLGlKQUFpSixrQkFBa0IsbUJBQW1CLGlCQUFpQixHQUFHLHNaQUFzWixVQUFVLG1CQUFtQixLQUFLLEdBQUcsZ0dBQWdHLEdBQUcseURBQXlELEdBQUcsMkRBQTJELEdBQUcsOERBQThELEdBQUcscUJBQXFCO0FBQ3J0d0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsOERBQThELHVCQUF1QixXQUFXLFlBQVksa0JBQWtCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLGdCQUFnQixxQkFBcUIsR0FBRyxjQUFjLG1DQUFtQyxxQ0FBcUMsb0NBQW9DLHNDQUFzQyx1QkFBdUIsaUJBQWlCLGtCQUFrQix1Q0FBdUMsR0FBRyxxQkFBcUIsU0FBUywwQkFBMEIsV0FBVyw0QkFBNEIsR0FBRyxPQUFPLDBGQUEwRixZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLDhDQUE4Qyx1QkFBdUIsV0FBVyxZQUFZLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixnQkFBZ0IscUJBQXFCLEdBQUcsY0FBYyxtQ0FBbUMscUNBQXFDLG9DQUFvQyxzQ0FBc0MsdUJBQXVCLGlCQUFpQixrQkFBa0IsdUNBQXVDLEdBQUcscUJBQXFCLFNBQVMsMEJBQTBCLFdBQVcsNEJBQTRCLEdBQUcsbUJBQW1CO0FBQ2xpRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsMkJBQTJCLEdBQUcsZ0JBQWdCLDBCQUEwQixpQkFBaUIsaUJBQWlCLEdBQUcsVUFBVSxvQkFBb0IscUJBQXFCLDBCQUEwQix1QkFBdUIsNkJBQTZCLGdDQUFnQyw0QkFBNEIsK0JBQStCLCtCQUErQixHQUFHLFdBQVcsa0JBQWtCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxrQkFBa0IsMkJBQTJCLEdBQUcsa0JBQWtCLHNCQUFzQixHQUFHLDBCQUEwQiw0QkFBNEIsR0FBRyx3QkFBd0Isa0NBQWtDLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLFlBQVksMEJBQTBCLEdBQUcsVUFBVSxjQUFjLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyxXQUFXLHNCQUFzQixHQUFHLGlFQUFpRSxvQkFBb0IsR0FBRyxvQkFBb0IsaUNBQWlDLEdBQUcsb0JBQW9CLGdDQUFnQyxHQUFHLG9CQUFvQixnQ0FBZ0MsR0FBRyxvQkFBb0IsZ0NBQWdDLEdBQUcsa0JBQWtCLGdDQUFnQyxHQUFHLG9CQUFvQixnQ0FBZ0MsR0FBRyxvQkFBb0IsZ0NBQWdDLEdBQUcsb0JBQW9CLGlDQUFpQyxHQUFHLDJEQUEyRCxVQUFVLHlCQUF5QixrQkFBa0IscUNBQXFDLHFDQUFxQyxxQ0FBcUMsS0FBSyxpQkFBaUIsa0JBQWtCLG1CQUFtQixtQkFBbUIsS0FBSyx1QkFBdUIsc0JBQXNCLHVCQUF1QiwwQkFBMEIsc0JBQXNCLHlCQUF5QixLQUFLLDZCQUE2QixzQkFBc0IscUJBQXFCLG9CQUFvQiwwQkFBMEIsS0FBSyx1Q0FBdUMsMEJBQTBCLHNCQUFzQixLQUFLLDZDQUE2QyxrQkFBa0IsOEJBQThCLGdCQUFnQixLQUFLLGtDQUFrQyxzQkFBc0Isd0JBQXdCLDBCQUEwQix1QkFBdUIsa0VBQWtFLHlEQUF5RCxvQkFBb0IsNEJBQTRCLEtBQUssNkJBQTZCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLG1CQUFtQixxQkFBcUIsd0JBQXdCLEtBQUsscUNBQXFDLHdCQUF3QixLQUFLLDhFQUE4RSxnQ0FBZ0MsS0FBSywyQkFBMkIsc0JBQXNCLHdCQUF3Qix1QkFBdUIsc0JBQXNCLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLDRCQUE0QixrRUFBa0UseURBQXlELHdCQUF3QixLQUFLLHNCQUFzQixvQ0FBb0Msa0JBQWtCLG9DQUFvQywwQkFBMEIsS0FBSyxpQ0FBaUMsbUJBQW1CLHNCQUFzQixLQUFLLEdBQUcsZ0dBQWdHLEdBQUcseURBQXlELEdBQUcsMkRBQTJELEdBQUcsOERBQThELHdCQUF3QixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsS0FBSyxrQ0FBa0MsMEJBQTBCLEtBQUssR0FBRyxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxPQUFPLGlCQUFpQixXQUFXLE9BQU8saUJBQWlCLFdBQVcsT0FBTyxpQkFBaUIsV0FBVyxPQUFPLGlCQUFpQixXQUFXLE1BQU0saUJBQWlCLFdBQVcsT0FBTyxpQkFBaUIsV0FBVyxPQUFPLGlCQUFpQixXQUFXLE9BQU8saUJBQWlCLFdBQVcsUUFBUSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZ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O1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQztBQUNEOztBQUVyQztBQUNBO0FBQ0E7QUFDcUI7O0FBRWdDO0FBQ1Q7QUFDa0I7QUFDOUI7QUFDeUM7QUFDRjtBQUNOOztBQUVqRTtBQUNBO0FBQ0EseUJBQXlCLHlEQUFPO0FBQ2hDLG9DQUFvQyx1RUFBWTtBQUNoRDtBQUNBLCtCQUErQixvRkFBZ0I7QUFDL0MsNkJBQTZCLDhFQUFjO0FBQzNDLEVBQUUsa0VBQVM7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkRBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtGQUFrQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvU2tlbGV0b24vY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9Ta2VsZXRvbi9jc3Mvc2tlbGV0b24uY3NzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvU3Bpbm5lci9zcGlubmVyLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9Ta2VsZXRvbi9jc3Mvbm9ybWFsaXplLmNzcz82YTRiIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvU2tlbGV0b24vY3NzL3NrZWxldG9uLmNzcz9lZDVlIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvU3Bpbm5lci9zcGlubmVyLmNzcz9hMWYxIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL0N1cnJlbnRXZWF0aGVyL0N1cnJlbnRXZWF0aGVyQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL0hlbHBlckZ1bmN0aW9ucy9FcnJvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9IZWxwZXJGdW5jdGlvbnMvSHRtbEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9IZWxwZXJGdW5jdGlvbnMvbG9hZEltYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvSGVscGVyRnVuY3Rpb25zL3RlbXBUb0NvbG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvSG91cmx5Rm9yZWNhc3QvSG91cmx5Rm9yZWNhc3RDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvSG91cmx5Rm9yZWNhc3QvaG91cmx5Rm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9TZWFyY2hCYXIvc2VhcmNoQmFyLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvU2V2ZW5EYXlGb3JlY2FzdC9Gb3JlY2FzdENhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9TZXZlbkRheUZvcmVjYXN0L3NldmVuRGF5Rm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9TcGlubmVyL3NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2My4wLjIgfCBNSVQgTGljZW5zZSB8IGdpdC5pby9ub3JtYWxpemUgKi9cXG5cXG4vKipcXG4gKiAxLiBTZXQgZGVmYXVsdCBmb250IGZhbWlseSB0byBzYW5zLXNlcmlmLlxcbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xcbiAqICAgIHVzZXIgem9vbS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBkZWZhdWx0IG1hcmdpbi5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGFueSBIVE1MNSBlbGVtZW50IGluIElFIDgvOS5cXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYGRldGFpbHNgIG9yIGBzdW1tYXJ5YCBpbiBJRSAxMC8xMVxcbiAqIGFuZCBGaXJlZm94LlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgbWFpbmAgaW4gSUUgMTEuXFxuICovXFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1haW4sXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbixcXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxcbiAqIDIuIE5vcm1hbGl6ZSB2ZXJ0aWNhbCBhbGlnbm1lbnQgb2YgYHByb2dyZXNzYCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5hdWRpbyxcXG5jYW52YXMsXFxucHJvZ3Jlc3MsXFxudmlkZW8ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxcbiAqL1xcblxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBbaGlkZGVuXWAgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAuXFxuICogSGlkZSB0aGUgYHRlbXBsYXRlYCBlbGVtZW50IGluIElFIDgvOS8xMSwgU2FmYXJpLCBhbmQgRmlyZWZveCA8IDIyLlxcbiAqL1xcblxcbltoaWRkZW5dLFxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIExpbmtzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBjb2xvciBmcm9tIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5hOmFjdGl2ZSxcXG5hOmhvdmVyIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLzExLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsZSBzZXQgdG8gYGJvbGRlcmAgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuZGZuIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyB2YXJpYWJsZSBgaDFgIGZvbnQtc2l6ZSBhbmQgbWFyZ2luIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYFxcbiAqIGNvbnRleHRzIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIC8qIG1hcmdpbjogMC42N2VtIDA7ICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXFxuICovXFxuXFxubWFyayB7XFxuICBiYWNrZ3JvdW5kOiAjZmYwO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGFuZCB2YXJpYWJsZSBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBhZmZlY3RpbmcgYGxpbmUtaGVpZ2h0YCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgOC85LzEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3Qgb3ZlcmZsb3cgbm90IGhpZGRlbiBpbiBJRSA5LzEwLzExLlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDFlbSA0MHB4O1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGRpZmZlcmVuY2VzIGJldHdlZW4gRmlyZWZveCBhbmQgb3RoZXIgYnJvd3NlcnMuXFxuICovXFxuXFxuaHIge1xcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb250YWluIG92ZXJmbG93IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgb2RkIGBlbWAtdW5pdCBmb250IHNpemUgcmVuZGVyaW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5wcmUsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEtub3duIGxpbWl0YXRpb246IGJ5IGRlZmF1bHQsIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFggYWxsb3cgdmVyeSBsaW1pdGVkXFxuICogc3R5bGluZyBvZiBgc2VsZWN0YCwgdW5sZXNzIGEgYGJvcmRlcmAgcHJvcGVydHkgaXMgc2V0LlxcbiAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZC5cXG4gKiAgICBLbm93biBpc3N1ZTogYWZmZWN0cyBjb2xvciBvZiBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKiAyLiBDb3JyZWN0IGZvbnQgcHJvcGVydGllcyBub3QgYmVpbmcgaW5oZXJpdGVkLlxcbiAqIDMuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIG1hcmdpbjogMDsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBvdmVyZmxvd2Agc2V0IHRvIGBoaWRkZW5gIGluIElFIDgvOS8xMC8xMS5cXG4gKi9cXG5cXG5idXR0b24ge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCwgSUUgOC85LzEwLzExLCBhbmQgT3BlcmEuXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5odG1sIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcbiAgY3Vyc29yOiBwb2ludGVyOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXFxuICovXFxuXFxuYnV0dG9uW2Rpc2FibGVkXSxcXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBGaXJlZm94IDQrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxcbiAqL1xcblxcbmlucHV0IHtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcbi8qKlxcbiAqIEl0J3MgcmVjb21tZW5kZWQgdGhhdCB5b3UgZG9uJ3QgYXR0ZW1wdCB0byBzdHlsZSB0aGVzZSBlbGVtZW50cy5cXG4gKiBGaXJlZm94J3MgaW1wbGVtZW50YXRpb24gZG9lc24ndCByZXNwZWN0IGJveC1zaXppbmcsIHBhZGRpbmcsIG9yIHdpZHRoLlxcbiAqXFxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgIGluIElFIDgvOS8xMC5cXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LzEwLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEZpeCB0aGUgY3Vyc29yIHN0eWxlIGZvciBDaHJvbWUncyBpbmNyZW1lbnQvZGVjcmVtZW50IGJ1dHRvbnMuIEZvciBjZXJ0YWluXFxuICogYGZvbnQtc2l6ZWAgdmFsdWVzIG9mIHRoZSBgaW5wdXRgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcXG4gKiBkZWNyZW1lbnQgYnV0dG9uIHRvIGNoYW5nZSBmcm9tIGBkZWZhdWx0YCB0byBgdGV4dGAuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSBhbmQgQ2hyb21lXFxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAyICovXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSBhbmQgQ2hyb21lIG9uIE9TIFguXFxuICogU2FmYXJpIChidXQgbm90IENocm9tZSkgY2xpcHMgdGhlIGNhbmNlbCBidXR0b24gd2hlbiB0aGUgc2VhcmNoIGlucHV0IGhhc1xcbiAqIHBhZGRpbmcgKGFuZCBgdGV4dGZpZWxkYCBhcHBlYXJhbmNlKS5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xcbiAgbWFyZ2luOiAwIDJweDtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBgY29sb3JgIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgOC85LzEwLzExLlxcbiAqIDIuIFJlbW92ZSBwYWRkaW5nIHNvIHBlb3BsZSBhcmVuJ3QgY2F1Z2h0IG91dCBpZiB0aGV5IHplcm8gb3V0IGZpZWxkc2V0cy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm9yZGVyOiAwOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA4LzkvMTAvMTEuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIERvbid0IGluaGVyaXQgdGhlIGBmb250LXdlaWdodGAgKGFwcGxpZWQgYnkgYSBydWxlIGFib3ZlKS5cXG4gKiBOT1RFOiB0aGUgZGVmYXVsdCBjYW5ub3Qgc2FmZWx5IGJlIGNoYW5nZWQgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWC5cXG4gKi9cXG5cXG5vcHRncm91cCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogVGFibGVzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXFxuICovXFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG50ZCxcXG50aCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvU2tlbGV0b24vY3NzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkRBQTJEOztBQUUzRDs7OztFQUlFOztBQUVGO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQiwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7K0VBQytFOztBQUUvRTs7Ozs7RUFLRTs7QUFFRjs7Ozs7Ozs7Ozs7OztFQWFFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOzs7O0VBSUUscUJBQXFCLEVBQUUsTUFBTTtFQUM3Qix3QkFBd0IsRUFBRSxNQUFNO0FBQ2xDOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLGFBQWE7QUFDZjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFOztBQUVGOztFQUVFLFVBQVU7QUFDWjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSxpQ0FBaUM7RUFDakMsY0FBYztBQUNoQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjs7Ozs7RUFLRTs7QUFFRjs7Ozs7RUFLRSxjQUFjLEVBQUUsTUFBTTtFQUN0QixhQUFhLEVBQUUsTUFBTTtFQUNyQixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7RUFLRTs7QUFFRjs7RUFFRSxvQkFBb0I7QUFDdEI7O0FBRUE7Ozs7OztFQU1FOztBQUVGOzs7O0VBSUUsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxlQUFlLEVBQUUsTUFBTTtBQUN6Qjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOzs7Ozs7RUFNRTs7QUFFRjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOzs7O0VBSUU7O0FBRUY7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7O0VBSUU7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLDRCQUE0QjtFQUM1QiwrQkFBK0IsRUFBRSxNQUFNO0VBQ3ZDLHVCQUF1QjtBQUN6Qjs7QUFFQTs7OztFQUlFOztBQUVGOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHYzLjAuMiB8IE1JVCBMaWNlbnNlIHwgZ2l0LmlvL25vcm1hbGl6ZSAqL1xcblxcbi8qKlxcbiAqIDEuIFNldCBkZWZhdWx0IGZvbnQgZmFtaWx5IHRvIHNhbnMtc2VyaWYuXFxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXFxuICogICAgdXNlciB6b29tLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IC8qIDEgKi9cXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYW55IEhUTUw1IGVsZW1lbnQgaW4gSUUgOC85LlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgZGV0YWlsc2Agb3IgYHN1bW1hcnlgIGluIElFIDEwLzExXFxuICogYW5kIEZpcmVmb3guXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBtYWluYCBpbiBJRSAxMS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWFpbixcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA4LzkuXFxuICogMi4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBgcHJvZ3Jlc3NgIGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbmF1ZGlvLFxcbmNhbnZhcyxcXG5wcm9ncmVzcyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYFtoaWRkZW5dYCBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC5cXG4gKiBIaWRlIHRoZSBgdGVtcGxhdGVgIGVsZW1lbnQgaW4gSUUgOC85LzExLCBTYWZhcmksIGFuZCBGaXJlZm94IDwgMjIuXFxuICovXFxuXFxuW2hpZGRlbl0sXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogTGlua3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5kZm4ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHZhcmlhYmxlIGBoMWAgZm9udC1zaXplIGFuZCBtYXJnaW4gd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgXFxuICogY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgLyogbWFyZ2luOiAwLjY3ZW0gMDsgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQ6ICNmZjA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYW5kIHZhcmlhYmxlIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBvdmVyZmxvdyBub3QgaGlkZGVuIGluIElFIDkvMTAvMTEuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgOC85IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5cXG5ociB7XFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIENvbnRhaW4gb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBvZGQgYGVtYC11bml0IGZvbnQgc2l6ZSByZW5kZXJpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnByZSxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogS25vd24gbGltaXRhdGlvbjogYnkgZGVmYXVsdCwgQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWCBhbGxvdyB2ZXJ5IGxpbWl0ZWRcXG4gKiBzdHlsaW5nIG9mIGBzZWxlY3RgLCB1bmxlc3MgYSBgYm9yZGVyYCBwcm9wZXJ0eSBpcyBzZXQuXFxuICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkLlxcbiAqICAgIEtub3duIGlzc3VlOiBhZmZlY3RzIGNvbG9yIG9mIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogMy4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbiAgbWFyZ2luOiAwOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYG92ZXJmbG93YCBzZXQgdG8gYGhpZGRlbmAgaW4gSUUgOC85LzEwLzExLlxcbiAqL1xcblxcbmJ1dHRvbiB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXFxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LCBJRSA4LzkvMTAvMTEsIGFuZCBPcGVyYS5cXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXFxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0sIC8qIDEgKi9cXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKi9cXG5cXG5idXR0b25bZGlzYWJsZWRdLFxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIEZpcmVmb3ggNCsgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXFxuICogdGhlIFVBIHN0eWxlc2hlZXQuXFxuICovXFxuXFxuaW5wdXQge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyoqXFxuICogSXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBkb24ndCBhdHRlbXB0IHRvIHN0eWxlIHRoZXNlIGVsZW1lbnRzLlxcbiAqIEZpcmVmb3gncyBpbXBsZW1lbnRhdGlvbiBkb2Vzbid0IHJlc3BlY3QgYm94LXNpemluZywgcGFkZGluZywgb3Igd2lkdGguXFxuICpcXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAgaW4gSUUgOC85LzEwLlxcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogRml4IHRoZSBjdXJzb3Igc3R5bGUgZm9yIENocm9tZSdzIGluY3JlbWVudC9kZWNyZW1lbnQgYnV0dG9ucy4gRm9yIGNlcnRhaW5cXG4gKiBgZm9udC1zaXplYCB2YWx1ZXMgb2YgdGhlIGBpbnB1dGAsIGl0IGNhdXNlcyB0aGUgY3Vyc29yIHN0eWxlIG9mIHRoZVxcbiAqIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gYGRlZmF1bHRgIHRvIGB0ZXh0YC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIGFuZCBDaHJvbWVcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIGFuZCBDaHJvbWUgb24gT1MgWC5cXG4gKiBTYWZhcmkgKGJ1dCBub3QgQ2hyb21lKSBjbGlwcyB0aGUgY2FuY2VsIGJ1dHRvbiB3aGVuIHRoZSBzZWFyY2ggaW5wdXQgaGFzXFxuICogcGFkZGluZyAoYW5kIGB0ZXh0ZmllbGRgIGFwcGVhcmFuY2UpLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGBjb2xvcmAgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA4LzkvMTAvMTEuXFxuICogMi4gUmVtb3ZlIHBhZGRpbmcgc28gcGVvcGxlIGFyZW4ndCBjYXVnaHQgb3V0IGlmIHRoZXkgemVybyBvdXQgZmllbGRzZXRzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3JkZXI6IDA7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDgvOS8xMC8xMS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogRG9uJ3QgaW5oZXJpdCB0aGUgYGZvbnQtd2VpZ2h0YCAoYXBwbGllZCBieSBhIHJ1bGUgYWJvdmUpLlxcbiAqIE5PVEU6IHRoZSBkZWZhdWx0IGNhbm5vdCBzYWZlbHkgYmUgY2hhbmdlZCBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYLlxcbiAqL1xcblxcbm9wdGdyb3VwIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBUYWJsZXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cXG4gKi9cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbnRkLFxcbnRoIHtcXG4gIHBhZGRpbmc6IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuKiBTa2VsZXRvbiBWMi4wLjRcXG4qIENvcHlyaWdodCAyMDE0LCBEYXZlIEdhbWFjaGVcXG4qIHd3dy5nZXRza2VsZXRvbi5jb21cXG4qIEZyZWUgdG8gdXNlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cXG4qIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXFxuKiAxMi8yOS8yMDE0XFxuKi9cXG5cXG5cXG4vKiBUYWJsZSBvZiBjb250ZW50c1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xcbi0gR3JpZFxcbi0gQmFzZSBTdHlsZXNcXG4tIFR5cG9ncmFwaHlcXG4tIExpbmtzXFxuLSBCdXR0b25zXFxuLSBGb3Jtc1xcbi0gTGlzdHNcXG4tIENvZGVcXG4tIFRhYmxlc1xcbi0gU3BhY2luZ1xcbi0gVXRpbGl0aWVzXFxuLSBDbGVhcmluZ1xcbi0gTWVkaWEgUXVlcmllc1xcbiovXFxuXFxuXFxuLyogR3JpZFxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEzMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxufVxcbi5jb2x1bW4sXFxuLmNvbHVtbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbG9hdDogbGVmdDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbn1cXG5cXG4vKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA0MDBweCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIHBhZGRpbmc6IDA7IFxcbiAgfVxcbn1cXG5cXG4vKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA1NTBweCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4MCU7IFxcbiAgfVxcbiAgLmNvbHVtbixcXG4gIC5jb2x1bW5zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQlOyBcXG4gIH1cXG4gIC5jb2x1bW46Zmlyc3QtY2hpbGQsXFxuICAuY29sdW1uczpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwOyBcXG4gIH1cXG5cXG4gIC5vbmUuY29sdW1uLFxcbiAgLm9uZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0LjY2NjY2NjY2NjY3JTsgfVxcbiAgLnR3by5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMy4zMzMzMzMzMzMzJTsgfVxcbiAgLnRocmVlLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAyMiU7ICAgICAgICAgICAgfVxcbiAgLmZvdXIuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcbiAgLmZpdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzOS4zMzMzMzMzMzMzJTsgfVxcbiAgLnNpeC5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7ICAgICAgICAgICAgfVxcbiAgLnNldmVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA1Ni42NjY2NjY2NjY3JTsgfVxcbiAgLmVpZ2h0LmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcbiAgLm5pbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA3NC4wJTsgICAgICAgICAgfVxcbiAgLnRlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA4Mi42NjY2NjY2NjY3JTsgfVxcbiAgLmVsZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiA5MS4zMzMzMzMzMzMzJTsgfVxcbiAgLnR3ZWx2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tbGVmdDogMDsgfVxcblxcbiAgLm9uZS10aGlyZC5jb2x1bW4gICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcbiAgLnR3by10aGlyZHMuY29sdW1uICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcblxcbiAgLm9uZS1oYWxmLmNvbHVtbiAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7IH1cXG5cXG4gIC8qIE9mZnNldHMgKi9cXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogOC42NjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogMTcuMzMzMzMzMzMzMyU7IH1cXG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiAyNiU7ICAgICAgICAgICAgfVxcbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZml2ZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDQzLjMzMzMzMzMzMzMlOyB9XFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgICAgICAgICAgICB9XFxuICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjAuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZWlnaHQuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxcbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktbmluZS5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogNzguMCU7ICAgICAgICAgIH1cXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogODYuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbnMgICAgICAgeyBtYXJnaW4tbGVmdDogOTUuMzMzMzMzMzMzMyU7IH1cXG5cXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbnMgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1ucyAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XFxuXFxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1ucyAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyB9XFxuXFxufVxcblxcblxcbi8qIEJhc2UgU3R5bGVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLyogTk9URVxcbmh0bWwgaXMgc2V0IHRvIDYyLjUlIHNvIHRoYXQgYWxsIHRoZSBSRU0gbWVhc3VyZW1lbnRzIHRocm91Z2hvdXQgU2tlbGV0b25cXG5hcmUgYmFzZWQgb24gMTBweCBzaXppbmcuIFNvIGJhc2ljYWxseSAxLjVyZW0gPSAxNXB4IDopICovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlOyB9XFxuYm9keSB7XFxuICBmb250LXNpemU6IDEuNWVtOyAvKiBjdXJyZW50bHkgZW1zIGNhdXNlIGNocm9tZSBidWcgbWlzaW50ZXJwcmV0aW5nIHJlbXMgb24gYm9keSBlbGVtZW50ICovXFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIFxcXCJIZWx2ZXRpY2FOZXVlXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMjIyOyB9XFxuXFxuXFxuLyogVHlwb2dyYXBoeVxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDsgXFxufVxcbmgxIHsgZm9udC1zaXplOiA0LjByZW07IGxpbmUtaGVpZ2h0OiAxLjI7ICBsZXR0ZXItc3BhY2luZzogLS4xcmVtO31cXG5oMiB7IGZvbnQtc2l6ZTogMy42cmVtOyBsaW5lLWhlaWdodDogMS4yNTsgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTsgfVxcbmgzIHsgZm9udC1zaXplOiAzLjByZW07IGxpbmUtaGVpZ2h0OiAxLjM7ICBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XFxuaDQgeyBmb250LXNpemU6IDIuNHJlbTsgbGluZS1oZWlnaHQ6IDEuMzU7IGxldHRlci1zcGFjaW5nOiAtLjA4cmVtOyB9XFxuaDUgeyBmb250LXNpemU6IDEuOHJlbTsgbGluZS1oZWlnaHQ6IDEuNTsgIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtOyB9XFxuaDYgeyBmb250LXNpemU6IDEuNXJlbTsgbGluZS1oZWlnaHQ6IDEuNjsgIGxldHRlci1zcGFjaW5nOiAwOyB9XFxuXFxuLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbiAgaDEgeyBmb250LXNpemU6IDUuMHJlbTsgfVxcbiAgaDIgeyBmb250LXNpemU6IDQuMnJlbTsgfVxcbiAgaDMgeyBmb250LXNpemU6IDMuNnJlbTsgfVxcbiAgaDQgeyBmb250LXNpemU6IDMuMHJlbTsgfVxcbiAgaDUgeyBmb250LXNpemU6IDIuNHJlbTsgfVxcbiAgaDYgeyBmb250LXNpemU6IDEuNXJlbTsgfVxcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuLyogTGlua3NcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5hIHtcXG4gIGNvbG9yOiAjMUVBRURCOyBcXG59XFxuYTpob3ZlciB7XFxuICBjb2xvcjogIzBGQTBDRTsgXFxufVxcblxcblxcbi8qIEJ1dHRvbnNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4uYnV0dG9uLFxcbmJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMzhweDtcXG4gIHBhZGRpbmc6IDAgMzBweDtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXG59XFxuLmJ1dHRvbjpob3ZlcixcXG5idXR0b246aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpob3ZlcixcXG4uYnV0dG9uOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdOmZvY3VzIHtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyLWNvbG9yOiAjODg4O1xcbiAgb3V0bGluZTogMDsgXFxufVxcbi5idXR0b24uYnV0dG9uLXByaW1hcnksXFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5LFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLmJ1dHRvbi1wcmltYXJ5LFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0uYnV0dG9uLXByaW1hcnksXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0uYnV0dG9uLXByaW1hcnkge1xcbiAgY29sb3I6ICNGRkY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNDM0YwO1xcbiAgYm9yZGVyLWNvbG9yOiAjMzNDM0YwOyBcXG59XFxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeTpob3ZlcixcXG5idXR0b24uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXS5idXR0b24tcHJpbWFyeTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXS5idXR0b24tcHJpbWFyeTpob3ZlcixcXG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxcbmJ1dHRvbi5idXR0b24tcHJpbWFyeTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzIHtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFQUVEQjtcXG4gIGJvcmRlci1jb2xvcjogIzFFQUVEQjsgXFxufVxcblxcblxcbi8qIEZvcm1zXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidXJsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgcGFkZGluZzogNnB4IDEwcHg7IC8qIFRoZSA2cHggdmVydGljYWxseSBjZW50ZXJzIHRleHQgb24gRkYsIGlnbm9yZWQgYnkgV2Via2l0ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0QxRDFEMTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXG59XFxuLyogUmVtb3ZlcyBhd2t3YXJkIGRlZmF1bHQgc3R5bGVzIG9uIHNvbWUgaW5wdXRzIGZvciBpT1MgKi9cXG5pbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ1cmxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdLFxcbnRleHRhcmVhIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsgXFxufVxcbnRleHRhcmVhIHtcXG4gIG1pbi1oZWlnaHQ6IDY1cHg7XFxuICBwYWRkaW5nLXRvcDogNnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDZweDsgXFxufVxcbmlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInRlbFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInVybFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl06Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzM0MzRjA7XFxuICBvdXRsaW5lOiAwOyBcXG59XFxubGFiZWwsXFxubGVnZW5kIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwOyBcXG59XFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlci13aWR0aDogMDsgXFxufVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7IFxcbn1cXG5sYWJlbCA+IC5sYWJlbC1ib2R5IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IFxcbn1cXG5cXG5cXG4vKiBMaXN0c1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZSBpbnNpZGU7IFxcbn1cXG5vbCB7XFxuICBsaXN0LXN0eWxlOiBkZWNpbWFsIGluc2lkZTsgXFxufVxcbm9sLCB1bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBtYXJnaW4tdG9wOiAwOyBcXG59XFxudWwgdWwsXFxudWwgb2wsXFxub2wgb2wsXFxub2wgdWwge1xcbiAgbWFyZ2luOiAxLjVyZW0gMCAxLjVyZW0gM3JlbTtcXG4gIGZvbnQtc2l6ZTogOTAlOyBcXG59XFxubGkge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgXFxufVxcblxcblxcbi8qIENvZGVcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5jb2RlIHtcXG4gIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xcbiAgbWFyZ2luOiAwIC4ycmVtO1xcbiAgZm9udC1zaXplOiA5MCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYmFja2dyb3VuZDogI0YxRjFGMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUUxRTE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7IFxcbn1cXG5wcmUgPiBjb2RlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICB3aGl0ZS1zcGFjZTogcHJlOyBcXG59XFxuXFxuXFxuLyogVGFibGVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxudGgsXFxudGQge1xcbiAgcGFkZGluZzogMTJweCAxNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFMUUxOyBcXG59XFxudGg6Zmlyc3QtY2hpbGQsXFxudGQ6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxudGg6bGFzdC1jaGlsZCxcXG50ZDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG5cXG4vKiBTcGFjaW5nXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuYnV0dG9uLFxcbi5idXR0b24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgXFxufVxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCxcXG5maWVsZHNldCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07IFxcbn1cXG5wcmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5maWd1cmUsXFxudGFibGUsXFxudWwsXFxub2wsXFxuZm9ybSB7XFxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07IFxcbn1cXG5cXG5cXG4vKiBVdGlsaXRpZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4udS1mdWxsLXdpZHRoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxufVxcbi51LW1heC1mdWxsLXdpZHRoIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbn1cXG4udS1wdWxsLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDsgXFxufVxcbi51LXB1bGwtbGVmdCB7XFxuICBmbG9hdDogbGVmdDsgXFxufVxcblxcblxcbi8qIE1pc2NcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5ociB7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMy41cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFMUUxRTE7IFxcbn1cXG5cXG5cXG4vKiBDbGVhcmluZ1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcblxcbi8qIFNlbGYgQ2xlYXJpbmcgR29vZG5lc3MgKi9cXG4uY29udGFpbmVyOmFmdGVyLFxcbi5yb3c6YWZ0ZXIsXFxuLnUtY2Yge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNsZWFyOiBib3RoOyBcXG59XFxuXFxuXFxuLyogTWVkaWEgUXVlcmllc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi8qXFxuTm90ZTogVGhlIGJlc3Qgd2F5IHRvIHN0cnVjdHVyZSB0aGUgdXNlIG9mIG1lZGlhIHF1ZXJpZXMgaXMgdG8gY3JlYXRlIHRoZSBxdWVyaWVzXFxubmVhciB0aGUgcmVsZXZhbnQgY29kZS4gRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50ZWQgdG8gY2hhbmdlIHRoZSBzdHlsZXMgZm9yIGJ1dHRvbnNcXG5vbiBzbWFsbCBkZXZpY2VzLCBwYXN0ZSB0aGUgbW9iaWxlIHF1ZXJ5IGNvZGUgdXAgaW4gdGhlIGJ1dHRvbnMgc2VjdGlvbiBhbmQgc3R5bGUgaXRcXG50aGVyZS5cXG4qL1xcblxcblxcbi8qIExhcmdlciB0aGFuIG1vYmlsZSAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkge1xcbiAgYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG59XFxuXFxuLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAoYWxzbyBwb2ludCB3aGVuIGdyaWQgYmVjb21lcyBhY3RpdmUpICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxufVxcblxcbi8qIExhcmdlciB0aGFuIHRhYmxldCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xcbn1cXG5cXG4vKiBMYXJnZXIgdGhhbiBkZXNrdG9wICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xcbn1cXG5cXG4vKiBMYXJnZXIgdGhhbiBEZXNrdG9wIEhEICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvU2tlbGV0b24vY3NzL3NrZWxldG9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztDQU9DOzs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7O0NBZUM7OztBQUdEO29EQUNvRDtBQUNwRDtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VB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RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7O0FBR0E7b0RBQ29EO0FBQ3BEOztFQUVFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0FBQ2xDO0FBQ0E7O0VBRUUsZUFBZSxFQUFFO0FBQ25COztFQUVFLGdCQUFnQixFQUFFOzs7QUFHcEI7b0RBQ29EO0FBQ3BEOztFQUVFLG1CQUFtQjtBQUNyQjtBQUNBOzs7O0VBSUUscUJBQXFCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7O0VBUUUscUJBQXFCO0FBQ3ZCOzs7QUFHQTtvREFDb0Q7QUFDcEQ7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYjs7O0FBR0E7b0RBQ29EO0FBQ3BEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COzs7QUFHQTtvREFDb0Q7O0FBRXBELDJCQUEyQjtBQUMzQjs7O0VBR0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7OztBQUdBO29EQUNvRDtBQUNwRDs7Ozs7Q0FLQzs7O0FBR0QsdUJBQXVCO0FBQ3ZCO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQSw4REFBOEQ7QUFDOUQ7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiogU2tlbGV0b24gVjIuMC40XFxuKiBDb3B5cmlnaHQgMjAxNCwgRGF2ZSBHYW1hY2hlXFxuKiB3d3cuZ2V0c2tlbGV0b24uY29tXFxuKiBGcmVlIHRvIHVzZSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXFxuKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxcbiogMTIvMjkvMjAxNFxcbiovXFxuXFxuXFxuLyogVGFibGUgb2YgY29udGVudHNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcXG4tIEdyaWRcXG4tIEJhc2UgU3R5bGVzXFxuLSBUeXBvZ3JhcGh5XFxuLSBMaW5rc1xcbi0gQnV0dG9uc1xcbi0gRm9ybXNcXG4tIExpc3RzXFxuLSBDb2RlXFxuLSBUYWJsZXNcXG4tIFNwYWNpbmdcXG4tIFV0aWxpdGllc1xcbi0gQ2xlYXJpbmdcXG4tIE1lZGlhIFF1ZXJpZXNcXG4qL1xcblxcblxcbi8qIEdyaWRcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbn1cXG4uY29sdW1uLFxcbi5jb2x1bW5zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXG59XFxuXFxuLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNDAwcHggKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBwYWRkaW5nOiAwOyBcXG4gIH1cXG59XFxuXFxuLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNTUwcHggKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogODAlOyBcXG4gIH1cXG4gIC5jb2x1bW4sXFxuICAuY29sdW1ucyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0JTsgXFxuICB9XFxuICAuY29sdW1uOmZpcnN0LWNoaWxkLFxcbiAgLmNvbHVtbnM6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tbGVmdDogMDsgXFxuICB9XFxuXFxuICAub25lLmNvbHVtbixcXG4gIC5vbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNC42NjY2NjY2NjY2NyU7IH1cXG4gIC50d28uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTMuMzMzMzMzMzMzMyU7IH1cXG4gIC50aHJlZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMjIlOyAgICAgICAgICAgIH1cXG4gIC5mb3VyLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cXG4gIC5maXZlLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzkuMzMzMzMzMzMzMyU7IH1cXG4gIC5zaXguY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyAgICAgICAgICAgIH1cXG4gIC5zZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNTYuNjY2NjY2NjY2NyU7IH1cXG4gIC5laWdodC5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cXG4gIC5uaW5lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNzQuMCU7ICAgICAgICAgIH1cXG4gIC50ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogODIuNjY2NjY2NjY2NyU7IH1cXG4gIC5lbGV2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogOTEuMzMzMzMzMzMzMyU7IH1cXG4gIC50d2VsdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTAwJTsgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4gIC5vbmUtdGhpcmQuY29sdW1uICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cXG4gIC50d28tdGhpcmRzLmNvbHVtbiAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cXG5cXG4gIC5vbmUtaGFsZi5jb2x1bW4gICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyB9XFxuXFxuICAvKiBPZmZzZXRzICovXFxuICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDguNjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LXR3by5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXR3by5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDE3LjMzMzMzMzMzMzMlOyB9XFxuICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogMjYlOyAgICAgICAgICAgIH1cXG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1maXZlLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA0My4zMzMzMzMzMzMzJTsgfVxcbiAgLm9mZnNldC1ieS1zaXguY29sdW1uLFxcbiAgLm9mZnNldC1ieS1zaXguY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7ICAgICAgICAgICAgfVxcbiAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDYwLjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZWlnaHQuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cXG4gIC5vZmZzZXQtYnktbmluZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDc4LjAlOyAgICAgICAgICB9XFxuICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDg2LjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW5zICAgICAgIHsgbWFyZ2luLWxlZnQ6IDk1LjMzMzMzMzMzMzMlOyB9XFxuXFxuICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW5zICAgIHsgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclOyB9XFxuICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1uLFxcbiAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbnMgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxcblxcbiAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbnMgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgfVxcblxcbn1cXG5cXG5cXG4vKiBCYXNlIFN0eWxlc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi8qIE5PVEVcXG5odG1sIGlzIHNldCB0byA2Mi41JSBzbyB0aGF0IGFsbCB0aGUgUkVNIG1lYXN1cmVtZW50cyB0aHJvdWdob3V0IFNrZWxldG9uXFxuYXJlIGJhc2VkIG9uIDEwcHggc2l6aW5nLiBTbyBiYXNpY2FsbHkgMS41cmVtID0gMTVweCA6KSAqL1xcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTsgfVxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxLjVlbTsgLyogY3VycmVudGx5IGVtcyBjYXVzZSBjaHJvbWUgYnVnIG1pc2ludGVycHJldGluZyByZW1zIG9uIGJvZHkgZWxlbWVudCAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBcXFwiSGVsdmV0aWNhTmV1ZVxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzIyMjsgfVxcblxcblxcbi8qIFR5cG9ncmFwaHlcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7IFxcbn1cXG5oMSB7IGZvbnQtc2l6ZTogNC4wcmVtOyBsaW5lLWhlaWdodDogMS4yOyAgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTt9XFxuaDIgeyBmb250LXNpemU6IDMuNnJlbTsgbGluZS1oZWlnaHQ6IDEuMjU7IGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cXG5oMyB7IGZvbnQtc2l6ZTogMy4wcmVtOyBsaW5lLWhlaWdodDogMS4zOyAgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTsgfVxcbmg0IHsgZm9udC1zaXplOiAyLjRyZW07IGxpbmUtaGVpZ2h0OiAxLjM1OyBsZXR0ZXItc3BhY2luZzogLS4wOHJlbTsgfVxcbmg1IHsgZm9udC1zaXplOiAxLjhyZW07IGxpbmUtaGVpZ2h0OiAxLjU7ICBsZXR0ZXItc3BhY2luZzogLS4wNXJlbTsgfVxcbmg2IHsgZm9udC1zaXplOiAxLjVyZW07IGxpbmUtaGVpZ2h0OiAxLjY7ICBsZXR0ZXItc3BhY2luZzogMDsgfVxcblxcbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXG4gIGgxIHsgZm9udC1zaXplOiA1LjByZW07IH1cXG4gIGgyIHsgZm9udC1zaXplOiA0LjJyZW07IH1cXG4gIGgzIHsgZm9udC1zaXplOiAzLjZyZW07IH1cXG4gIGg0IHsgZm9udC1zaXplOiAzLjByZW07IH1cXG4gIGg1IHsgZm9udC1zaXplOiAyLjRyZW07IH1cXG4gIGg2IHsgZm9udC1zaXplOiAxLjVyZW07IH1cXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcblxcbi8qIExpbmtzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuYSB7XFxuICBjb2xvcjogIzFFQUVEQjsgXFxufVxcbmE6aG92ZXIge1xcbiAgY29sb3I6ICMwRkEwQ0U7IFxcbn1cXG5cXG5cXG4vKiBCdXR0b25zXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLmJ1dHRvbixcXG5idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDM4cHg7XFxuICBwYWRkaW5nOiAwIDMwcHg7XFxuICBjb2xvcjogIzU1NTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogMzhweDtcXG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxufVxcbi5idXR0b246aG92ZXIsXFxuYnV0dG9uOmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl06aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl06aG92ZXIsXFxuLmJ1dHRvbjpmb2N1cyxcXG5idXR0b246Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpmb2N1cyB7XFxuICBjb2xvcjogIzMzMztcXG4gIGJvcmRlci1jb2xvcjogIzg4ODtcXG4gIG91dGxpbmU6IDA7IFxcbn1cXG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5LFxcbmJ1dHRvbi5idXR0b24tcHJpbWFyeSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXS5idXR0b24tcHJpbWFyeSxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLmJ1dHRvbi1wcmltYXJ5LFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLmJ1dHRvbi1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzQzNGMDtcXG4gIGJvcmRlci1jb2xvcjogIzMzQzNGMDsgXFxufVxcbi5idXR0b24uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeTpmb2N1cyxcXG5idXR0b24uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyB7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRUFFREI7XFxuICBib3JkZXItY29sb3I6ICMxRUFFREI7IFxcbn1cXG5cXG5cXG4vKiBGb3Jtc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRlbFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInVybFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGhlaWdodDogMzhweDtcXG4gIHBhZGRpbmc6IDZweCAxMHB4OyAvKiBUaGUgNnB4IHZlcnRpY2FsbHkgY2VudGVycyB0ZXh0IG9uIEZGLCBpZ25vcmVkIGJ5IFdlYmtpdCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEMUQxRDE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxufVxcbi8qIFJlbW92ZXMgYXdrd2FyZCBkZWZhdWx0IHN0eWxlcyBvbiBzb21lIGlucHV0cyBmb3IgaU9TICovXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidXJsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSxcXG50ZXh0YXJlYSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7IFxcbn1cXG50ZXh0YXJlYSB7XFxuICBtaW4taGVpZ2h0OiA2NXB4O1xcbiAgcGFkZGluZy10b3A6IDZweDtcXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7IFxcbn1cXG5pbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJ1cmxcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdOmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbnNlbGVjdDpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzNDM0YwO1xcbiAgb3V0bGluZTogMDsgXFxufVxcbmxhYmVsLFxcbmxlZ2VuZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDsgXFxufVxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItd2lkdGg6IDA7IFxcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgZGlzcGxheTogaW5saW5lOyBcXG59XFxubGFiZWwgPiAubGFiZWwtYm9keSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogLjVyZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsOyBcXG59XFxuXFxuXFxuLyogTGlzdHNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBjaXJjbGUgaW5zaWRlOyBcXG59XFxub2wge1xcbiAgbGlzdC1zdHlsZTogZGVjaW1hbCBpbnNpZGU7IFxcbn1cXG5vbCwgdWwge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgbWFyZ2luLXRvcDogMDsgXFxufVxcbnVsIHVsLFxcbnVsIG9sLFxcbm9sIG9sLFxcbm9sIHVsIHtcXG4gIG1hcmdpbjogMS41cmVtIDAgMS41cmVtIDNyZW07XFxuICBmb250LXNpemU6IDkwJTsgXFxufVxcbmxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IFxcbn1cXG5cXG5cXG4vKiBDb2RlXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuY29kZSB7XFxuICBwYWRkaW5nOiAuMnJlbSAuNXJlbTtcXG4gIG1hcmdpbjogMCAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRTFFMUUxO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4OyBcXG59XFxucHJlID4gY29kZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgd2hpdGUtc3BhY2U6IHByZTsgXFxufVxcblxcblxcbi8qIFRhYmxlc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbnRoLFxcbnRkIHtcXG4gIHBhZGRpbmc6IDEycHggMTVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UxRTFFMTsgXFxufVxcbnRoOmZpcnN0LWNoaWxkLFxcbnRkOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcbnRoOmxhc3QtY2hpbGQsXFxudGQ6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxuXFxuXFxuLyogU3BhY2luZ1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmJ1dHRvbixcXG4uYnV0dG9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IFxcbn1cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3QsXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtOyBcXG59XFxucHJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZmlndXJlLFxcbnRhYmxlLFxcbnVsLFxcbm9sLFxcbmZvcm0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtOyBcXG59XFxuXFxuXFxuLyogVXRpbGl0aWVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLnUtZnVsbC13aWR0aCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbn1cXG4udS1tYXgtZnVsbC13aWR0aCB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXG59XFxuLnUtcHVsbC1yaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7IFxcbn1cXG4udS1wdWxsLWxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7IFxcbn1cXG5cXG5cXG4vKiBNaXNjXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuaHIge1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTFFMUUxOyBcXG59XFxuXFxuXFxuLyogQ2xlYXJpbmdcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5cXG4vKiBTZWxmIENsZWFyaW5nIEdvb2RuZXNzICovXFxuLmNvbnRhaW5lcjphZnRlcixcXG4ucm93OmFmdGVyLFxcbi51LWNmIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjbGVhcjogYm90aDsgXFxufVxcblxcblxcbi8qIE1lZGlhIFF1ZXJpZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4vKlxcbk5vdGU6IFRoZSBiZXN0IHdheSB0byBzdHJ1Y3R1cmUgdGhlIHVzZSBvZiBtZWRpYSBxdWVyaWVzIGlzIHRvIGNyZWF0ZSB0aGUgcXVlcmllc1xcbm5lYXIgdGhlIHJlbGV2YW50IGNvZGUuIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudGVkIHRvIGNoYW5nZSB0aGUgc3R5bGVzIGZvciBidXR0b25zXFxub24gc21hbGwgZGV2aWNlcywgcGFzdGUgdGhlIG1vYmlsZSBxdWVyeSBjb2RlIHVwIGluIHRoZSBidXR0b25zIHNlY3Rpb24gYW5kIHN0eWxlIGl0XFxudGhlcmUuXFxuKi9cXG5cXG5cXG4vKiBMYXJnZXIgdGhhbiBtb2JpbGUgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIHtcXG4gIGJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICB9XFxufVxcblxcbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKGFsc28gcG9pbnQgd2hlbiBncmlkIGJlY29tZXMgYWN0aXZlKSAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbn1cXG5cXG4vKiBMYXJnZXIgdGhhbiB0YWJsZXQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcXG59XFxuXFxuLyogTGFyZ2VyIHRoYW4gZGVza3RvcCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG59XFxuXFxuLyogTGFyZ2VyIHRoYW4gRGVza3RvcCBIRCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3NwaW5uZXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuI3NwaW5uZXIge1xcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjRTVFNUU1O1xcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICNFNUU1RTU7XFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjRTVFNUU1O1xcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMUUxRTFFO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGFuaW1hdGlvbjogc3BpbiAwLjhzIGVhc2UgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvU3Bpbm5lci9zcGlubmVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLEtBQUssdUJBQXVCLEVBQUU7RUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjc3Bpbm5lci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jc3Bpbm5lciB7XFxuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNFNUU1RTU7XFxuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI0U1RTVFNTtcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNFNUU1RTU7XFxuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMxRTFFMUU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYW5pbWF0aW9uOiBzcGluIDAuOHMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNyb290e1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIC8qIHBhZGRpbmctdG9wOiA1MHB4OyAqL1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIC0tbWFpbi1iZy1jb2xvcjogI0Y4RkZFNTtcXG4gIC0tbWFpbi1jYXJkLWNvbG9yOiAjMUUyRDI0IDtcXG4gIC0tdGVtcC1jb2xvci1jb2xkOiAjMGFmO1xcbiAgLS10ZW1wLWNvbG9yLXdhcm06ICNmMDk4MDA7XFxuICAtLXRlbXAtY29sb3ItaG90OiAjZjAwMDAwIDtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXgtcm93IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mbGV4LWNvbHVtbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmxleC1uby13cmFwe1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcblxcbi5mbGV4LWp1c3RpZnktY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZmxleC1qdXN0aWZ5LWV2ZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5mbGV4LWFsaWduLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVidWcge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbn1cXG5cXG4ubS0wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm1sLTUge1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLm1yLTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi8qIHRoaXMgaXMgdGhlIG1haW4gdGVtcCB1bmRlciB0aGUgY2l0eSBuYW1lICovXFxuI21haW4tdGVtcCB7XFxuICBmb250LXNpemU6IDlyZW07XFxufVxcblxcbi50ZW1wLWNvbG9yLTEgeyAvKiAtMTAgLSA0MCAqL1xcbiAgY29sb3I6ICMxQUFERkY7XFxufVxcblxcbi50ZW1wLWNvbG9yLTIgeyAvKiA0MCAtIDQ5ICovXFxuICBjb2xvcjogIzE3ODJGRjtcXG59XFxuXFxuLnRlbXAtY29sb3ItMyB7IC8qIDUwIC0gNTkgKi9cXG4gIGNvbG9yOiAjMzMxN0Q5O1xcbn1cXG5cXG4udGVtcC1jb2xvci00IHsgLyogNjAgLSA2OSAqL1xcbiAgY29sb3I6ICM3NDM5QTQ7XFxufVxcbi50ZW1wLWNvbG9yLTUgeyAvKiA3MCAtIDc5ICovXFxuICBjb2xvcjogI0NFNjc1MjtcXG59XFxuXFxuLnRlbXAtY29sb3ItNiB7IC8qIDgwIC0gODkgKi9cXG4gIGNvbG9yOiAjRkY2RTA0O1xcbn1cXG5cXG4udGVtcC1jb2xvci03IHsgLyogOTAgLSA5OSAqL1xcbiAgY29sb3I6ICNGRjQ3MDU7XFxufVxcblxcbi50ZW1wLWNvbG9yLTggeyAvKiAxMDAgLSAxMTkqL1xcbiAgY29sb3I6ICNGRjAxMDE7XFxufVxcblxcblxcbi8qIExhcmdlciB0aGFuIG1vYmlsZSAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkge1xcbiAgYm9keSB7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuXFxuICAuY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICB9XFxuXFxuICBpbnB1dFt0eXBlPXRleHRde1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmN1cnJlbnQtd2VhdGhlci1jYXJkIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIH1cXG5cXG4gIC5jdXJyZW50LXdlYXRoZXItY2FyZCA+IGRpdiA+IHAge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuXFxuICAjY3VycmVudC13ZWF0aGVyLWNhcmQtdGVtcHMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuICAuaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCByZ2JhKDIzMCwyMzAsMjMwLDAuNSk7IFxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4IHJnYmEoMjMwLDIzMCwyMzAsMC41KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIH1cXG5cXG4gIC5ob3VybHktZm9yZWNhc3QtY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGZsZXgtYmFzaXM6IDEwMHB4O1xcbiAgfVxcblxcbiAgLmhvdXJseS1mb3JlY2FzdC1jYXJkID4gLnRpbWUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5jdXJyZW50LXdlYXRoZXItY2FyZCwgLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIsIC5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVjZmNmO1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggcmdiYSgyMzAsMjMwLDIzMCwwLjUpOyBcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCByZ2JhKDIzMCwyMzAsMjMwLDAuNSk7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWNhcmQge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWNhcmQgPiAud2Vla2RheSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbn1cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0IChhbHNvIHBvaW50IHdoZW4gZ3JpZCBiZWNvbWVzIGFjdGl2ZSkgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXG59XFxuXFxuLyogTGFyZ2VyIHRoYW4gdGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7XFxufVxcblxcbi8qIExhcmdlciB0aGFuIGRlc2t0b3AgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxufVxcblxcbi8qIExhcmdlciB0aGFuIERlc2t0b3AgSEQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAuZm9yZWNhc3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsOENBQThDO0FBQzlDO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxnQkFBZ0IsYUFBYTtFQUMzQixjQUFjO0FBQ2hCOztBQUVBLGdCQUFnQixZQUFZO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUEsZ0JBQWdCLFlBQVk7RUFDMUIsY0FBYztBQUNoQjs7QUFFQSxnQkFBZ0IsWUFBWTtFQUMxQixjQUFjO0FBQ2hCO0FBQ0EsZ0JBQWdCLFlBQVk7RUFDMUIsY0FBYztBQUNoQjs7QUFFQSxnQkFBZ0IsWUFBWTtFQUMxQixjQUFjO0FBQ2hCOztBQUVBLGdCQUFnQixZQUFZO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUEsZ0JBQWdCLGFBQWE7RUFDM0IsY0FBYztBQUNoQjs7O0FBR0EsdUJBQXVCO0FBQ3ZCO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDhCQUE4QjtPQUMzQiwyQkFBMkI7WUFDdEIsc0JBQXNCO0VBQ2hDOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiwwREFBMEQ7SUFDMUQsa0RBQWtEO0lBQ2xELGFBQWE7O0lBRWIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixtQkFBbUI7SUFDbkIsMERBQTBEO0lBQzFELGtEQUFrRDtJQUNsRCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjtBQUNGOztBQUVBLDhEQUE4RDtBQUM5RDtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Jvb3R7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgLyogcGFkZGluZy10b3A6IDUwcHg7ICovXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgLS1tYWluLWJnLWNvbG9yOiAjRjhGRkU1O1xcbiAgLS1tYWluLWNhcmQtY29sb3I6ICMxRTJEMjQgO1xcbiAgLS10ZW1wLWNvbG9yLWNvbGQ6ICMwYWY7XFxuICAtLXRlbXAtY29sb3Itd2FybTogI2YwOTgwMDtcXG4gIC0tdGVtcC1jb2xvci1ob3Q6ICNmMDAwMDAgO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmZsZXgtY29sdW1uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mbGV4LW5vLXdyYXB7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuLmZsZXgtanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mbGV4LWp1c3RpZnktZXZlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmZsZXgtYWxpZ24tY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZWJ1ZyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbi5tLTAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWwtNSB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4ubXItNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLyogdGhpcyBpcyB0aGUgbWFpbiB0ZW1wIHVuZGVyIHRoZSBjaXR5IG5hbWUgKi9cXG4jbWFpbi10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogOXJlbTtcXG59XFxuXFxuLnRlbXAtY29sb3ItMSB7IC8qIC0xMCAtIDQwICovXFxuICBjb2xvcjogIzFBQURGRjtcXG59XFxuXFxuLnRlbXAtY29sb3ItMiB7IC8qIDQwIC0gNDkgKi9cXG4gIGNvbG9yOiAjMTc4MkZGO1xcbn1cXG5cXG4udGVtcC1jb2xvci0zIHsgLyogNTAgLSA1OSAqL1xcbiAgY29sb3I6ICMzMzE3RDk7XFxufVxcblxcbi50ZW1wLWNvbG9yLTQgeyAvKiA2MCAtIDY5ICovXFxuICBjb2xvcjogIzc0MzlBNDtcXG59XFxuLnRlbXAtY29sb3ItNSB7IC8qIDcwIC0gNzkgKi9cXG4gIGNvbG9yOiAjQ0U2NzUyO1xcbn1cXG5cXG4udGVtcC1jb2xvci02IHsgLyogODAgLSA4OSAqL1xcbiAgY29sb3I6ICNGRjZFMDQ7XFxufVxcblxcbi50ZW1wLWNvbG9yLTcgeyAvKiA5MCAtIDk5ICovXFxuICBjb2xvcjogI0ZGNDcwNTtcXG59XFxuXFxuLnRlbXAtY29sb3ItOCB7IC8qIDEwMCAtIDExOSovXFxuICBjb2xvcjogI0ZGMDEwMTtcXG59XFxuXFxuXFxuLyogTGFyZ2VyIHRoYW4gbW9iaWxlICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSB7XFxuICBib2R5IHtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG5cXG4gIC5jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gIH1cXG5cXG4gIGlucHV0W3R5cGU9dGV4dF17XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY3VycmVudC13ZWF0aGVyLWNhcmQge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgfVxcblxcbiAgLmN1cnJlbnQtd2VhdGhlci1jYXJkID4gZGl2ID4gcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG5cXG4gICNjdXJyZW50LXdlYXRoZXItY2FyZC10ZW1wcy1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gIH1cXG5cXG4gIC5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDE1cHggYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4IHJnYmEoMjMwLDIzMCwyMzAsMC41KTsgXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggcmdiYSgyMzAsMjMwLDIzMCwwLjUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgfVxcblxcbiAgLmhvdXJseS1mb3JlY2FzdC1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZmxleC1iYXNpczogMTAwcHg7XFxuICB9XFxuXFxuICAuaG91cmx5LWZvcmVjYXN0LWNhcmQgPiAudGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLmN1cnJlbnQtd2VhdGhlci1jYXJkLCAuaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lciwgLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWNmY2Y7XFxuICB9XFxuXFxuICAuZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDE1cHggYXV0bztcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCByZ2JhKDIzMCwyMzAsMjMwLDAuNSk7IFxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4IHJnYmEoMjMwLDIzMCwyMzAsMC41KTtcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICB9XFxuXFxuICAuZm9yZWNhc3QtY2FyZCB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB9XFxuXFxuICAuZm9yZWNhc3QtY2FyZCA+IC53ZWVrZGF5IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxufVxcblxcbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKGFsc28gcG9pbnQgd2hlbiBncmlkIGJlY29tZXMgYWN0aXZlKSAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbn1cXG5cXG4vKiBMYXJnZXIgdGhhbiB0YWJsZXQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcXG59XFxuXFxuLyogTGFyZ2VyIHRoYW4gZGVza3RvcCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG59XFxuXFxuLyogTGFyZ2VyIHRoYW4gRGVza3RvcCBIRCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5mb3JlY2FzdC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2tlbGV0b24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9za2VsZXRvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3Bpbm5lci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NwaW5uZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSBcIi4uL0hlbHBlckZ1bmN0aW9ucy9IdG1sRWxlbWVudFwiO1xuaW1wb3J0IHsgdGVtcFRvQ29sb3IgfSBmcm9tIFwiLi4vSGVscGVyRnVuY3Rpb25zL3RlbXBUb0NvbG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDdXJyZW50V2VhdGhlckNhcmQod2VhdGhlckRhdGEgPSB7fSwgcm9vdE5vZGUsIGNpdHlOYW1lKSB7XG4gIC8vIFByb2Nlc3MgdGhlIHdlYXRoZXJEYXRhIHVwb24gaW5zdGFudGlhdGlvblxuICBjb25zdCBwYXJzZWRXZWF0aGVyRGF0YSA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHsgbWF4LCBtaW4gfSA9IHdlYXRoZXJEYXRhLmRhaWx5WzBdLnRlbXA7XG4gICAgbGV0IHsgdGVtcCB9ID0gd2VhdGhlckRhdGEuY3VycmVudDtcbiAgICBsZXQgeyBkZXNjcmlwdGlvbiB9ID0gd2VhdGhlckRhdGEuY3VycmVudC53ZWF0aGVyWzBdO1xuICAgIGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkZXNjcmlwdGlvbi5zbGljZSgxKTtcbiAgICB0ZW1wID0gTWF0aC5yb3VuZCh0ZW1wKTtcbiAgICBtYXggPSBNYXRoLnJvdW5kKG1heCk7XG4gICAgbWluID0gTWF0aC5yb3VuZChtaW4pO1xuICAgIHJldHVybiB7XG4gICAgICB0ZW1wLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBtYXgsXG4gICAgICBtaW4sXG4gICAgfTtcbiAgfSkoKTtcblxuICBjb25zdCBfc2tlbGV0b25Sb3cgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgY2xhc3NMaXN0OiBbXCJyb3dcIl0sXG4gIH0pO1xuXG4gIGNvbnN0IF9za2VsZXRvbkNvbHVtbiA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBjbGFzc0xpc3Q6IFtcInR3ZWx2ZVwiLCBcImNvbHVtbnNcIl0sXG4gIH0pO1xuXG4gIGNvbnN0IF9jb250YWluZXIgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgY2xhc3NMaXN0OiBbXG4gICAgICBcImN1cnJlbnQtd2VhdGhlci1jYXJkXCIsXG4gICAgICBcImZsZXhcIixcbiAgICAgIFwiZmxleC1jb2x1bW5cIixcbiAgICAgIFwiZmxleC1hbGlnbi1jZW50ZXJcIixcbiAgICBdLFxuICB9KTtcblxuICAvLyBDcmVhdGUgdGhlIHRpdGxlIGNvbnRhaW5lciB3aXRoIHRoZSBpbm5lciB0ZXh0IGFzIHRoZSB1c2VycyBzZWFyY2ggdGVybS5cbiAgY29uc3QgX3RpdGxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgIGNsYXNzTGlzdDogW1xuICAgICAgICBcImZsZXhcIixcbiAgICAgICAgXCJmbGV4LXJvd1wiLFxuICAgICAgICBcImZsZXgtanVzdGlmeS1jZW50ZXJcIixcbiAgICAgICAgXCJmbGV4LWFsaWduLWNlbnRlclwiLFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IF90aXRsZVRleHQgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJoMlwiLFxuICAgICAgY2xhc3NMaXN0OiBbXCJtLTBcIl0sXG4gICAgICBpbm5lclRleHQ6IGNpdHlOYW1lLFxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKF90aXRsZVRleHQpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgX3RlbXAgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgY2xhc3NMaXN0OiBbXG4gICAgICAgIFwiZmxleFwiLFxuICAgICAgICBcImZsZXgtcm93XCIsXG4gICAgICAgIFwiZmxleC1qdXN0aWZ5LWNlbnRlclwiLFxuICAgICAgICBcImZsZXgtYWxpZ24tY2VudGVyXCIsXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgY29uc3QgX3RleHQgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJwXCIsXG4gICAgICBjbGFzc0xpc3Q6IFtcIm0tMFwiLCB0ZW1wVG9Db2xvcihwYXJzZWRXZWF0aGVyRGF0YS50ZW1wKV0sXG4gICAgICBpZDogXCJtYWluLXRlbXBcIixcbiAgICAgIGlubmVyVGV4dDogYCR7cGFyc2VkV2VhdGhlckRhdGEudGVtcH3CsGAsXG4gICAgfSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoX3RleHQpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH0pKCk7XG5cbiAgY29uc3QgX2Rlc2NyaXB0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgIGlkOiBcImN1cnJlbnQtd2VhdGhlci1jYXJkLWRlc2NyaXB0aW9uLWNvbnRhaW5lclwiLFxuICAgICAgY2xhc3NMaXN0OiBbXG4gICAgICAgIFwiZmxleFwiLFxuICAgICAgICBcImZsZXgtcm93XCIsXG4gICAgICAgIFwiZmxleC1qdXN0aWZ5LWNlbnRlclwiLFxuICAgICAgICBcImZsZXgtYWxpZ24tY2VudGVyXCIsXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgY29uc3QgX3RleHQgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJwXCIsXG4gICAgICBjbGFzc0xpc3Q6IFtcIm0tMFwiXSxcbiAgICAgIGlubmVyVGV4dDogcGFyc2VkV2VhdGhlckRhdGEuZGVzY3JpcHRpb24sXG4gICAgfSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoX3RleHQpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfSkoKTtcblxuICBjb25zdCBfZGFpbHlUZW1wcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICBpZDogXCJjdXJyZW50LXdlYXRoZXItY2FyZC10ZW1wcy1jb250YWluZXJcIixcbiAgICAgIGNsYXNzTGlzdDogW1xuICAgICAgICBcImZsZXhcIixcbiAgICAgICAgXCJmbGV4LXJvd1wiLFxuICAgICAgICBcImZsZXgtanVzdGlmeS1jZW50ZXJcIixcbiAgICAgICAgXCJmbGV4LWFsZ2luLWNlbnRlclwiLFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IF9oaWdoVGVtcCA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgICB0eXBlOiBcInBcIixcbiAgICAgIGNsYXNzTGlzdDogW1wibS0wXCIsIFwibXItNVwiLCB0ZW1wVG9Db2xvcihwYXJzZWRXZWF0aGVyRGF0YS5tYXgpXSxcbiAgICAgIGlubmVyVGV4dDogYEg6JHtwYXJzZWRXZWF0aGVyRGF0YS5tYXh9wrBgLFxuICAgIH0pO1xuXG4gICAgY29uc3QgX2xvd1RlbXAgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJwXCIsXG4gICAgICBjbGFzc0xpc3Q6IFtcIm0tMFwiLCBcIm1sLTVcIiwgdGVtcFRvQ29sb3IocGFyc2VkV2VhdGhlckRhdGEubWluKV0sXG4gICAgICBpbm5lclRleHQ6IGBMOiR7cGFyc2VkV2VhdGhlckRhdGEubWlufcKwYCxcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChfbG93VGVtcCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKF9oaWdoVGVtcCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9KSgpO1xuXG4gIGNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBfc2tlbGV0b25Sb3cuYXBwZW5kQ2hpbGQoX3NrZWxldG9uQ29sdW1uKTtcbiAgICBfc2tlbGV0b25Db2x1bW4uYXBwZW5kQ2hpbGQoX2NvbnRhaW5lcik7XG4gICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChfdGl0bGUpO1xuICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX3RlbXApO1xuICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX2Rlc2NyaXB0aW9uKTtcbiAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKF9kYWlseVRlbXBzKTtcblxuICAgIHJvb3ROb2RlLmFwcGVuZENoaWxkKF9za2VsZXRvblJvdyk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIF9za2VsZXRvblJvdy5yZW1vdmUoKTtcbiAgfTtcblxuICByZXR1cm4geyByZW5kZXIsIHJlbW92ZSB9O1xufVxuIiwiaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi9IdG1sRWxlbWVudFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JNZXNzYWdlKHJvb3ROb2RlKSB7XG4gIGNvbnN0IF9yb3dDb250YWluZXIgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgY2xhc3NMaXN0OiBbXCJyb3dcIl0sXG4gIH0pO1xuXG4gIGNvbnN0IF9jb2x1bW5Db250YWluZXIgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgY2xhc3NMaXN0OiBbXG4gICAgICBcInR3ZWx2ZVwiLFxuICAgICAgXCJjb2x1bW5zXCIsXG4gICAgICBcImZsZXhcIixcbiAgICAgIFwiZmxleC1qdXN0aWZ5LWNlbnRlclwiLFxuICAgICAgXCJmbGV4LWFsaWduLWNlbnRlclwiLFxuICAgIF0sXG4gIH0pO1xuXG4gIGNvbnN0IHRleHRDb21wb25lbnQgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgIHR5cGU6IFwiaDVcIixcbiAgfSk7XG5cbiAgY29uc3Qgc2V0RXJyb3JNZXNzYWdlID0gZnVuY3Rpb24gKG5ld0Vycm9yTWVzc2FnZSkge1xuICAgIHRleHRDb21wb25lbnQuaW5uZXJUZXh0ID0gbmV3RXJyb3JNZXNzYWdlO1xuICAgIHJldHVybiB0aGlzO1xuICAgIC8vUmV0dXJuICd0aGlzJyBzbyB0aGF0IHJlbmRlcigpIGNhbiBiZSBjaGFpbmVkIHRvIHRoaXMgbWV0aG9kLlxuICB9O1xuXG4gIGNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBfcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKF9jb2x1bW5Db250YWluZXIpO1xuICAgIF9jb2x1bW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbXBvbmVudCk7XG4gICAgcm9vdE5vZGUuYXBwZW5kQ2hpbGQoX3Jvd0NvbnRhaW5lcik7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIF9yb3dDb250YWluZXIucmVtb3ZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVuZGVyLCBzZXRFcnJvck1lc3NhZ2UsIHJlbW92ZSB9O1xufVxuIiwiLyoqXG4gKiBBbiBhYnN0cmFjdGlvbiBmb3IgZWFzaWx5IGNyZWF0aW5nIEhUTUwgbm9kZXMuXG4gKiBkYXRhID0ge1xuICogIHR5cGU6IFwiZGl2XCIsXG4gKiAgY2xhc3NMaXN0OiBbXCJjbGFzczFcIiwgXCJjbGFzczJcIl0sXG4gKiAgYXR0cmlidXRlczoge1xuICogICAgaGlkZGVuOiBcInRydWVcIixcbiAqICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gKiAgfSxcbiAqICBpZDogXCJTb21lSURcIixcbiAqIGlubmVyVGV4dDogXCJTb21lIHRleHRcIlxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gSHRtbEVsZW1lbnQoZGF0YSA9IHt9KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGRhdGEudHlwZSk7XG5cbiAgaWYgKGRhdGEuY2xhc3NMaXN0KSB7XG4gICAgZGF0YS5jbGFzc0xpc3QuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSk7XG4gIH1cblxuICBpZiAoZGF0YS5hdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChjb25zdCBhdHRyaWJ1dGVOYW1lIGluIGRhdGEuYXR0cmlidXRlcykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgZGF0YS5hdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0YS5pbm5lclRleHQpIHtcbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IGRhdGEuaW5uZXJUZXh0LnRyaW0oKTtcbiAgfVxuXG4gIGlmIChkYXRhLmlkKSB7XG4gICAgZWxlbWVudC5pZCA9IGRhdGEuaWQ7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsIi8qKlxuICogQXN5bmNocm9ub3VzbHkgbG9hZCBpbWFnZXMgdXNpbmcgb3V0c2lkZSByZXNvdXJjZXMuXG4gKiBUaGUgbG9hZEltYWdlKCkgZm4gY3JlYXRlcyBhbiBpbWFnZSBvYmplY3QgYW5kIHJldHVybnMgYSBwcm9taXNlLiBUaGUgcHJvbWlzZVxuICogaXMgcmVzb2x2ZWQgd2hlbiB0aGUgaW1hZ2UgbG9hZHMgc3VjY2Vzc2Z1bGx5IG9yIG90aGVyd2lzZSByZWplY3RlZC5cbiAqXG4gKiBUaGlzIGFsbG93cyB5b3UgdG8gbG9hZCBhbiBpbWFnZSBhbmQgb25seSBjb250aW51ZSB3aGVuIHRoZSBpbWFnZSBpcyBsb2FkZWQuXG4gKiBJIHVzZSB0aGlzIGZ1bmN0aW9uIHRvIG1ha2Ugc3VyZSB0aGUgaW1hZ2UgaXMgbG9hZGVkIGJlZm9yZSByZW5kZXJpbmcgb3RoZXJcbiAqIGVsZW1lbnRzIHRvIHRoZSBET00uIE90aGVyd2lzZSwgbXkgb3RoZXIgZWxlbWVudHMgc2hvdyB1cCBpbiB0aGUgRE9NIGFuZCBhXG4gKiBmZXcgc2Vjb25kcyAobWF5YmUgbWlsbGlzZWNvbmRzKSBsYXRlciwgdGhlIGltYWdlIHNob3dzIHVwLiBJdCBkb2Vzbid0IGxvb2tcbiAqIG5pY2Ugd2hlbiB0aGF0IGhhcHBlbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSW1hZ2Uoc3JjKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcgaW1hZ2Ugb2JqZWN0LlxuICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgLyoqXG4gICAgICogQWRkIHR3byBsaXN0ZW5lcnMgb24gdGhlIGltYWdlLlxuICAgICAqXG4gICAgICogbG9hZCgpIHdpbGwgYmUgY2FsbGVkIGlmIHRoZSBpbWFnZSBzdWNjZXNzZnVsbHkgbG9hZHMuXG4gICAgICogbG9hZCgpIHdpbGwgY2FsbCB0aGUgcmVzb2x2ZSBjYiwgd2l0aCB0aGUgaW1hZ2UuXG4gICAgICpcbiAgICAgKiBlcnJvcigpIHdpbGwgYmUgY2FsbGVkIGlmIHRoZSBpbWFnZSBjYW5ub3QgbG9hZC5cbiAgICAgKiBlcnJvcigpIHdpbGwgY2FsbCB0aGUgcmVqZWN0IGNiLCB3aXRoIGEgbWVzc2FnZS5cbiAgICAgKi9cbiAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJsb2FkXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc29sdmUoaW1hZ2UpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJlcnJvclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKFwiQ2Fubm90IGxvYWQgaW1hZ2VcIikpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgc3JjIG9mIHRoZSBpbWFnZS4gVGhpcyBpcyBkb25lIEFGVEVSIHRoZSBsb2FkL2Vycm9yIGV2ZW50XG4gICAgICogbGlzdGVuZXJzIGFyZSBjcmVhdGVkLlxuICAgICAqL1xuICAgIGltYWdlLnNyYyA9IHNyYztcbiAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdGVtcFRvQ29sb3IodGVtcCkge1xuICBpZiAodGVtcCA+IC0xMCAmJiB0ZW1wIDwgNDApIHtcbiAgICByZXR1cm4gXCJ0ZW1wLWNvbG9yLTFcIjtcbiAgfSBlbHNlIGlmICh0ZW1wID49IDQwICYmIHRlbXAgPCA1MCkge1xuICAgIHJldHVybiBcInRlbXAtY29sb3ItMlwiO1xuICB9IGVsc2UgaWYgKHRlbXAgPj0gNTAgJiYgdGVtcCA8IDYwKSB7XG4gICAgcmV0dXJuIFwidGVtcC1jb2xvci0zXCI7XG4gIH0gZWxzZSBpZiAodGVtcCA+PSA2MCAmJiB0ZW1wIDwgNzApIHtcbiAgICByZXR1cm4gXCJ0ZW1wLWNvbG9yLTRcIjtcbiAgfSBlbHNlIGlmICh0ZW1wID49IDcwICYmIHRlbXAgPCA4MCkge1xuICAgIHJldHVybiBcInRlbXAtY29sb3ItNVwiO1xuICB9IGVsc2UgaWYgKHRlbXAgPj0gODAgJiYgdGVtcCA8IDkwKSB7XG4gICAgcmV0dXJuIFwidGVtcC1jb2xvci02XCI7XG4gIH0gZWxzZSBpZiAodGVtcCA+PSA5MCAmJiB0ZW1wIDwgMTAwKSB7XG4gICAgcmV0dXJuIFwidGVtcC1jb2xvci03XCI7XG4gIH0gZWxzZSBpZiAodGVtcCA+PSAxMDAgJiYgdGVtcCA8IDEyMCkge1xuICAgIHJldHVybiBcInRlbXAtY29sb3ItOFwiO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIdG1sRWxlbWVudCB9IGZyb20gXCIuLi9IZWxwZXJGdW5jdGlvbnMvSHRtbEVsZW1lbnRcIjtcbmltcG9ydCB3ZWF0aGVyIGZyb20gXCIuLi93ZWF0aGVyLmpzXCI7XG5pbXBvcnQgeyBsb2FkSW1hZ2UgfSBmcm9tIFwiLi4vSGVscGVyRnVuY3Rpb25zL2xvYWRJbWFnZVwiO1xuaW1wb3J0IHsgdGVtcFRvQ29sb3IgfSBmcm9tIFwiLi4vSGVscGVyRnVuY3Rpb25zL3RlbXBUb0NvbG9yLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBIb3VybHlGb3JlY2FzdENhcmQod2VhdGhlckRhdGEpIHtcbiAgbGV0IGltYWdlO1xuXG4gIGNvbnN0IF9wYXJzZWRXZWF0aGVyRGF0YSA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHsgdGVtcCwgZHQsIHBvcCB9ID0gd2VhdGhlckRhdGE7XG4gICAgY29uc3QgeyBpY29uIH0gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdO1xuICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUoTnVtYmVyLnBhcnNlSW50KGR0LnRvU3RyaW5nKCkgKyBcIjAwMFwiKSk7XG4gICAgY29uc3QgdGltZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIiwge1xuICAgICAgdGltZVN0eWxlOiBcInNob3J0XCIsXG4gICAgfSkuZm9ybWF0KGRhdGVUaW1lKTtcbiAgICBwb3AgPSBNYXRoLmZsb29yKHBvcCAqIDEwMCk7XG4gICAgdGVtcCA9IE1hdGgucm91bmQodGVtcCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRlbXAsXG4gICAgICBpY29uLFxuICAgICAgdGltZSxcbiAgICAgIHBvcCxcbiAgICB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IF9jb250YWluZXIgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgY2xhc3NMaXN0OiBbXCJob3VybHktZm9yZWNhc3QtY2FyZFwiXSxcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFRyeSB0byBsb2FkIGFuIGltYWdlIGZyb20gT3BlbldlYXRoZXIgQVBJLiBJZiB0aGlzIHByb2Nlc3MgZmFpbHMsIHdlIHdpbGxcbiAgICogY29uc3VtZSB0aGUgZXJyb3IgYW5kIGNvbnRpbnVlIHdpdGggcHJvY2Vzc2luZyB0aGUgdXNlciByZXF1ZXN0LiBXZSBjYW5cbiAgICogc2lsZW50bHkgY29uc3VtZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2Ugd2lsbCBzaW1wbHkgbm90IGRpc3BsYXkgYW4gaW1hZ2UgaWZcbiAgICogdGhlcmUgaXMgYW4gZXJyb3IuIFdoeSBsb2cgb3Igc3RvcCBleGVjdXRpb24gc2ltcGx5IGJlY2F1c2Ugd2UgY2FuIGRpc3BsYXlcbiAgICogYW4gaW1hZ2U/IFJhdGhlciwgd2UgY29udGludWUgd2l0aCBvdXIgcHJvY2VzcyBhbmQgZm9yZ2V0IGFib3V0IHNob3dpbmcgYW5cbiAgICogaW1hZ2UgdG8gdGhlIHVzZXIuXG4gICAqL1xuICBjb25zdCBsb2FkID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHVybCA9IHdlYXRoZXIuZ2V0SWNvblNyYyhfcGFyc2VkV2VhdGhlckRhdGEuaWNvbik7XG4gICAgdHJ5IHtcbiAgICAgIGltYWdlID0gYXdhaXQgbG9hZEltYWdlKHVybCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm4gdHJ1ZS4gV2Ugd2lsbCBjb25zdW1lIHRoZSBlcnJvciByZXR1cm5lZCBieSB0aGUgQVBJIGFuZCBqdXN0XG4gICAgICAgKiBub3Qgc2hvdyBhbiBpbWFnZS4gTm8gYmlnIGRlYWwuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXIgPSBmdW5jdGlvbiAocGFyZW50Tm9kZSkge1xuICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcInBcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ0aW1lXCJdLFxuICAgICAgICBpbm5lclRleHQ6IGAke19wYXJzZWRXZWF0aGVyRGF0YS50aW1lfWAsXG4gICAgICB9KVxuICAgICk7XG4gICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgLy8gU2hvdyB0aGUgcmFpbiBwZXJjZW50YWdlIGlmIGl0IGlzIG92ZXIgMjAlXG4gICAgaWYgKF9wYXJzZWRXZWF0aGVyRGF0YS5wb3AgPiAyMCkge1xuICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgICAgICB0eXBlOiBcInBcIixcbiAgICAgICAgICBpbm5lclRleHQ6IGAke19wYXJzZWRXZWF0aGVyRGF0YS5wb3B9JWAsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgICAgdHlwZTogXCJwXCIsXG4gICAgICAgIGNsYXNzTGlzdDogW3RlbXBUb0NvbG9yKF9wYXJzZWRXZWF0aGVyRGF0YS50ZW1wKV0sXG4gICAgICAgIGlubmVyVGV4dDogYCR7X3BhcnNlZFdlYXRoZXJEYXRhLnRlbXB9wrBgLFxuICAgICAgfSlcbiAgICApO1xuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoX2NvbnRhaW5lcik7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVuZGVyLCBsb2FkIH07XG59XG4iLCJpbXBvcnQgeyBIb3VybHlGb3JlY2FzdENhcmQgfSBmcm9tIFwiLi9Ib3VybHlGb3JlY2FzdENhcmRcIjtcbmltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSBcIi4uL0hlbHBlckZ1bmN0aW9ucy9IdG1sRWxlbWVudFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaG91cmx5Rm9yZWNhc3Qocm9vdE5vZGUpIHtcbiAgLy8gU3RvcmUgZWFjaCBmb3JlY2FzdCBjYXJkIGluIHRoaXMgYXJyYXkgZm9yIGZ1dHVyZSBpdGVyYXRpb24uXG4gIGxldCBob3VybHlGb3JlY2FzdHMgPSBbXTtcblxuICBsZXQgX2hvdXJseUZvcmVjYXN0Q29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1xuICAgICAgXCJob3VybHktZm9yZWNhc3QtY29udGFpbmVyXCIsXG4gICAgICBcImZsZXhcIixcbiAgICAgIFwiZmxleC1yb3dcIixcbiAgICAgIFwiZmxleC1uby13cmFwXCIsXG4gICAgXSxcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZWFjaCBmb3JlY2FzdCBjYXJkIGJ5IGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIEZvcmVjYXN0Q2FyZCBhbmRcbiAgICogY2FsbGluZyAubG9hZCgpIG9uIHRoZSBjYXJkLiAubG9hZCgpIGlzIGFuIGFzeW5jIG9wZXJhdGlvbiB0aGF0IGFsd2F5c1xuICAgKiByZXR1cm5zIGEgcmVzb2x2ZWQgcHJvbWlzZSAtIGl0IGNhbm5vdCBmYWlsLiBUaGlzIGlzIGRvbmUgb24gcHVycG9zZS4gVGhlXG4gICAqIG9ubHkgdGhpbmcgdGhhdCAubG9hZCgpIGlzIGRvaW5nIGlzIGF0dGVtcHRpbmcgdG8gcmV0cmlldmUgYW4gaW1hZ2UgZnJvbVxuICAgKiB0aGUgT3BlbldlYXRoZXIgQVBJLiBJZiBhbiBpbWFnZSBjYW5ub3QgYmUgcmV0cmlldmVkIHRoZW4gd2Ugc2ltcGx5IHJldHVyblxuICAgKiBhIHJlc29sdmVkIHByb21pc2UgYW5kIHRoZXJlIGlzIG5vIGltYWdlIHRvIGRpc3BsYXkgZm9yIHRoYXQgZm9yZWNhc3QgY2FyZC5cbiAgICovXG4gIGNvbnN0IGxvYWRGb3JlY2FzdCA9IGFzeW5jIGZ1bmN0aW9uICh3ZWF0aGVyRGF0YSkge1xuICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0RGF0YSA9IHdlYXRoZXJEYXRhLmhvdXJseS5zcGxpY2UoMjMpO1xuXG4gICAgaG91cmx5Rm9yZWNhc3REYXRhLmZvckVhY2goKGhvdXIsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB3ZWF0aGVyQ2FyZCA9IG5ldyBIb3VybHlGb3JlY2FzdENhcmQoaG91cik7XG4gICAgICBob3VybHlGb3JlY2FzdHMucHVzaCh3ZWF0aGVyQ2FyZCk7XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogSSB3YW50IGZvcmVjYXN0LmxvYWQoKSB0byBiZSBjYWxsZWQgaW4gcGFyYWxsZWwgZm9yIGFsbCBvZiB0aGVcbiAgICAgKiBmb3JlY2FzdHMuIEkgdXNlIG1hcCB0byBtYXAgb3ZlciB0aGUgaG91cmx5Rm9yZWNhc3RzIGFuZCBjYWxsIC5sb2FkKCkgb25cbiAgICAgKiBlYWNoIGZvcmVjYXN0LiAubG9hZCgpIHdpbGwgZmV0Y2ggYW4gaW1hZ2UgZnJvbSBPcGVuV2VhdGhlciBBUEkuIFRoaXNcbiAgICAgKiBpcyBzbG93LCBhbmQgSSBkb250IHdhbnQgdG8gcmVuZGVyIHRleHQgb24gdGhlIHNjcmVlbiBBTkQgVEhFTiBpbWFnZXNcbiAgICAgKiBhZnRlciBhIHNsaWdodCBkZWxheS4gU28gSSB1c2UgUHJvbWlzZS5hbGwoKSB0byBtYWtlIHN1cmUgYWxsIGltYWdlc1xuICAgICAqIGhhdmUgYmVlbiBmZXRjaGVkIGFuZCBsb2FkZWQgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCByZW5kZXJpbmcuXG4gICAgICovXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoaG91cmx5Rm9yZWNhc3RzLm1hcCgoZm9yZWNhc3QpID0+IGZvcmVjYXN0LmxvYWQoKSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHJlbmRlcnMgZWFjaCBmb3JlY2FzdCBjYXJkIHRvIHRoZSBkb20uXG4gICAqL1xuICBjb25zdCByZW5kZXJGb3JlY2FzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBob3VybHlGb3JlY2FzdHMuZm9yRWFjaCgoZm9yZWNhc3QpID0+XG4gICAgICBmb3JlY2FzdC5yZW5kZXIoX2hvdXJseUZvcmVjYXN0Q29udGFpbmVyKVxuICAgICk7XG4gICAgcm9vdE5vZGUuYXBwZW5kQ2hpbGQoX2hvdXJseUZvcmVjYXN0Q29udGFpbmVyKTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiByZW1vdmVzIHRoZSBmb3JlY2FzdCBjYXJkcyBmcm9tIHRoZSBkb20uIFRoaXMgaXMgbmVlZGVkIHNvXG4gICAqIHdoZW4gdXNlcnMgbWFrZSBzdWJzZXF1ZW50IHJlcXVlc3RzLCB0aGUgcHJldmlvdXMgcmVzdWx0cyBhcmUgcmVtb3ZlZC5cbiAgICovXG4gIGNvbnN0IHJlbW92ZUZvcmVjYXN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBfaG91cmx5Rm9yZWNhc3RDb250YWluZXIucmVtb3ZlKCk7XG4gICAgX2hvdXJseUZvcmVjYXN0Q29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICBjbGFzc0xpc3Q6IFtcbiAgICAgICAgXCJob3VybHktZm9yZWNhc3QtY29udGFpbmVyXCIsXG4gICAgICAgIFwiZmxleFwiLFxuICAgICAgICBcImZsZXgtcm93XCIsXG4gICAgICAgIFwiZmxleC1uby13cmFwXCIsXG4gICAgICBdLFxuICAgIH0pO1xuICAgIGhvdXJseUZvcmVjYXN0cyA9IFtdO1xuICB9O1xuXG4gIHJldHVybiB7IGxvYWRGb3JlY2FzdCwgcmVuZGVyRm9yZWNhc3QsIHJlbW92ZUZvcmVjYXN0cyB9O1xufVxuIiwiaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi4vSGVscGVyRnVuY3Rpb25zL0h0bWxFbGVtZW50LmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQmFyKHJvb3ROb2RlLCBjYWxsQmFjaykge1xuICBjb25zdCBfY29tcG9uZW50Q29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1xuICAgICAgXCJyb3dcIixcbiAgICAgIFwiaW5wdXQtY29udGFpbmVyXCIsXG4gICAgICBcImZsZXhcIixcbiAgICAgIFwiZmxleC1yb3dcIixcbiAgICAgIFwiZmxleC1qdXN0aWZ5LWNlbnRlclwiLFxuICAgICAgXCJmbGV4LWFsaWduLWNlbnRlclwiLFxuICAgIF0sXG4gIH0pO1xuXG4gIGNvbnN0IF9zZWFyY2hCYXIgPSBuZXcgSHRtbEVsZW1lbnQoe1xuICAgIHR5cGU6IFwiaW5wdXRcIixcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIGEgY2l0eSBuYW1lXCIsXG4gICAgICBzdHlsZTogXCJ3aWR0aDogOTAlXCIsXG4gICAgfSxcbiAgICBpZDogXCJjaXR5TmFtZVwiLFxuICB9KTtcblxuICBjb25zdCBfZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3NlYXJjaEJhci5mb2N1cygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMaXN0ZW4gZm9yIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyB0aGUgRW50ZXIga2V5LlxuICAgKiBUaGUgJ2NhbGxCYWNrJyBjYWxsZWQgaW4gdGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgaW50byB0aGlzIChzZWFyY2hCYXIpIGZuLlxuICAgKiBXaGVuICdjYWxsQmFjaycgaXMgY2FsbGVkLCBpbmRleC5qcyB3aWxsIHJlY2VpdmUgY29udHJvbCBvdmVyIHRoZSByZXN0IG9mXG4gICAqIHRoZSBzY3JpcHQuXG4gICAqL1xuICBjb25zdCBfaGFuZGxlS2V5ZG93biA9IGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCEoZS5rZXkgPT0gXCJFbnRlclwiICYmIGUudGFyZ2V0LnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSkgcmV0dXJuO1xuICAgIGlmIChzY3JlZW4ud2lkdGggPCA1MDApIF9zZWFyY2hCYXIuYmx1cigpO1xuICAgIGNhbGxCYWNrKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIExpc3RlbiBmb3IgdGhlIHVzZXIgcHJlc3NpbmcgdGhlIEVudGVyIGtleVxuICAgIF9zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgX2hhbmRsZUtleWRvd24pO1xuICAgIF9zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgfSk7XG5cbiAgICBfY29tcG9uZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKF9zZWFyY2hCYXIpO1xuICAgIHJvb3ROb2RlLmFwcGVuZENoaWxkKF9jb21wb25lbnRDb250YWluZXIpO1xuICAgIF9mb2N1cygpO1xuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlciB9O1xufVxuIiwiaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi4vSGVscGVyRnVuY3Rpb25zL0h0bWxFbGVtZW50XCI7XG5pbXBvcnQgd2VhdGhlciBmcm9tIFwiLi4vd2VhdGhlci5qc1wiO1xuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSBcIi4uL0hlbHBlckZ1bmN0aW9ucy9sb2FkSW1hZ2VcIjtcbmltcG9ydCB7IHRlbXBUb0NvbG9yIH0gZnJvbSBcIi4uL0hlbHBlckZ1bmN0aW9ucy90ZW1wVG9Db2xvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gRm9yZWNhc3RDYXJkKHdlYXRoZXJEYXRhID0ge30pIHtcbiAgLy8gVGhlIHdlYXRoZXIgaW1hZ2UuXG4gIGxldCBpbWFnZTtcblxuICAvLyBQcm9jZXNzIHRoZSB3ZWF0aGVyRGF0YSB1cG9uIGluc3RhbnRpYXRpb25cbiAgY29uc3QgcGFyc2VkV2VhdGhlckRhdGEgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCB7IG1heCwgbWluIH0gPSB3ZWF0aGVyRGF0YS50ZW1wO1xuICAgIGxldCB7IGR0LCBwb3AgfSA9IHdlYXRoZXJEYXRhO1xuICAgIGNvbnN0IHsgaWNvbiB9ID0gd2VhdGhlckRhdGEud2VhdGhlclswXTtcblxuICAgIGR0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoW10sIHsgd2Vla2RheTogXCJzaG9ydFwiIH0pLmZvcm1hdChcbiAgICAgIG5ldyBEYXRlKE51bWJlci5wYXJzZUludChkdC50b1N0cmluZygpICsgXCIwMDBcIikpXG4gICAgKTtcbiAgICBwb3AgPSBNYXRoLmZsb29yKHBvcCAqIDEwMCk7XG4gICAgbWluID0gTWF0aC5yb3VuZChtaW4pO1xuICAgIG1heCA9IE1hdGgucm91bmQobWF4KTtcbiAgICByZXR1cm4ge1xuICAgICAgZHQsXG4gICAgICBtYXgsXG4gICAgICBtaW4sXG4gICAgICBwb3AsXG4gICAgICBpY29uLFxuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgY29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1wiZm9yZWNhc3QtY2FyZFwiLCBcImZsZXhcIiwgXCJmbGV4LXJvd1wiLCBcImZsZXgtYWxpZ24tY2VudGVyXCJdLFxuICB9KTtcblxuICAvKipcbiAgICogVHJ5IHRvIGxvYWQgYW4gaW1hZ2UgZnJvbSBPcGVuV2VhdGhlciBBUEkuIElmIHRoaXMgcHJvY2VzcyBmYWlscywgd2Ugd2lsbFxuICAgKiBjb25zdW1lIHRoZSBlcnJvciBhbmQgY29udGludWUgd2l0aCBwcm9jZXNzaW5nIHRoZSB1c2VyIHJlcXVlc3QuIFdlIGNhblxuICAgKiBzaWxlbnRseSBjb25zdW1lIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSB3aWxsIHNpbXBseSBub3QgZGlzcGxheSBhbiBpbWFnZSBpZlxuICAgKiB0aGVyZSBpcyBhbiBlcnJvci4gV2h5IGxvZyBvciBzdG9wIGV4ZWN1dGlvbiBzaW1wbHkgYmVjYXVzZSB3ZSBjYW4gZGlzcGxheVxuICAgKiBhbiBpbWFnZT8gUmF0aGVyLCB3ZSBjb250aW51ZSB3aXRoIG91ciBwcm9jZXNzIGFuZCBmb3JnZXQgYWJvdXQgc2hvd2luZyBhblxuICAgKiBpbWFnZSB0byB0aGUgdXNlci5cbiAgICovXG4gIGNvbnN0IGxvYWQgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXJsID0gd2VhdGhlci5nZXRJY29uU3JjKHBhcnNlZFdlYXRoZXJEYXRhLmljb24pO1xuICAgIHRyeSB7XG4gICAgICBpbWFnZSA9IGF3YWl0IGxvYWRJbWFnZSh1cmwpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJuIHRydWUuIFdlIHdpbGwgY29uc3VtZSB0aGUgZXJyb3IgcmV0dXJuZWQgYnkgdGhlIEFQSSBhbmQganVzdFxuICAgICAgICogbm90IHNob3cgYW4gaW1hZ2UuIE5vIGJpZyBkZWFsLlxuICAgICAgICovXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24gKHBhcmVudE5vZGUpIHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcInBcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ3ZWVrZGF5XCJdLFxuICAgICAgICBpbm5lclRleHQ6IHBhcnNlZFdlYXRoZXJEYXRhLmR0LFxuICAgICAgfSlcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgICAgdHlwOiBcInBcIixcbiAgICAgICAgaW5uZXJUZXh0OiBgJHtwYXJzZWRXZWF0aGVyRGF0YS5wb3B9JSByYWluYCxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBuZXcgSHRtbEVsZW1lbnQoe1xuICAgICAgICBjbGFzc0xpc3Q6IFtcImxvdy10ZW1wXCIsIHRlbXBUb0NvbG9yKHBhcnNlZFdlYXRoZXJEYXRhLm1pbildLFxuICAgICAgICB0eXBlOiBcInBcIixcbiAgICAgICAgaW5uZXJUZXh0OiBgTDogJHtwYXJzZWRXZWF0aGVyRGF0YS5taW59wrBgLFxuICAgICAgfSlcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgIG5ldyBIdG1sRWxlbWVudCh7XG4gICAgICAgIGNsYXNzTGlzdDogW1wiaGlnaC10ZW1wXCIsIHRlbXBUb0NvbG9yKHBhcnNlZFdlYXRoZXJEYXRhLm1heCldLFxuICAgICAgICB0eXBlOiBcInBcIixcbiAgICAgICAgaW5uZXJUZXh0OiBgSDogJHtwYXJzZWRXZWF0aGVyRGF0YS5tYXh9wrBgLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlciwgbG9hZCB9O1xufVxuIiwiaW1wb3J0IHsgRm9yZWNhc3RDYXJkIH0gZnJvbSBcIi4vRm9yZWNhc3RDYXJkLmpzXCI7XG5pbXBvcnQgeyBIdG1sRWxlbWVudCB9IGZyb20gXCIuLi9IZWxwZXJGdW5jdGlvbnMvSHRtbEVsZW1lbnQuanNcIjtcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBsb2FkcyB0aGUgc2V2ZW4gZGF5IGZvcmVjYXN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V2ZW5EYXlGb3JlY2FzdChyb290Tm9kZSkge1xuICAvLyBTdG9yZSBlYWNoIGZvcmVjYXN0IGNhcmQgaW4gdGhpcyBhcnJheSBmb3IgZnV0dXJlIGl0ZXJhdGlvbi5cbiAgbGV0IGRhaWx5Rm9yZWNhc3RzID0gW107XG5cbiAgbGV0IF9mb3JlY2FzdENvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBjbGFzc0xpc3Q6IFtcImZvcmVjYXN0LWNvbnRhaW5lclwiXSxcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZWFjaCBmb3JlY2FzdCBjYXJkIGJ5IGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIEZvcmVjYXN0Q2FyZCBhbmRcbiAgICogY2FsbGluZyAubG9hZCgpIG9uIHRoZSBjYXJkLiAubG9hZCgpIGlzIGFuIGFzeW5jIG9wZXJhdGlvbiB0aGF0IGFsd2F5c1xuICAgKiByZXR1cm5zIGEgcmVzb2x2ZWQgcHJvbWlzZSAtIGl0IGNhbm5vdCBmYWlsLiBUaGlzIGlzIGRvbmUgb24gcHVycG9zZS4gVGhlXG4gICAqIG9ubHkgdGhpbmcgdGhhdCAubG9hZCgpIGlzIGRvaW5nIGlzIGF0dGVtcHRpbmcgdG8gcmV0cmlldmUgYW4gaW1hZ2UgZnJvbVxuICAgKiB0aGUgT3BlbldlYXRoZXIgQVBJLiBJZiBhbiBpbWFnZSBjYW5ub3QgYmUgcmV0cmlldmVkIHRoZW4gd2Ugc2ltcGx5IHJldHVyblxuICAgKiBhIHJlc29sdmVkIHByb21pc2UgYW5kIHRoZXJlIGlzIG5vIGltYWdlIHRvIGRpc3BsYXkgZm9yIHRoYXQgZm9yZWNhc3QgY2FyZC5cbiAgICovXG4gIGNvbnN0IGxvYWRGb3JlY2FzdCA9IGFzeW5jIGZ1bmN0aW9uICh3ZWF0aGVyRGF0YSA9IHt9KSB7XG4gICAgd2VhdGhlckRhdGEuZGFpbHkuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgICBkYWlseUZvcmVjYXN0cy5wdXNoKG5ldyBGb3JlY2FzdENhcmQoZGF5KSk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBJIHdhbnQgZm9yZWNhc3QubG9hZCgpIHRvIGJlIGNhbGxlZCBpbiBwYXJhbGxlbCBmb3IgYWxsIDcgb2YgdGhlXG4gICAgICogZm9yZWNhc3RzLiBJIHVzZSBtYXAgdG8gbWFwIG92ZXIgdGhlIGRhaWx5Rm9yZWNhc3RzIGFuZCBjYWxsIC5sb2FkKCkgb25cbiAgICAgKiBlYWNoIGZvcmVjYXN0LiAubG9hZCgpIHdpbGwgZmV0Y2ggYW4gaW1hZ2UgZnJvbSBPcGVuV2VhdGhlciBBUEkuIFRoaXNcbiAgICAgKiBpcyBzbG93LCBhbmQgSSBkb250IHdhbnQgdG8gcmVuZGVyIHRleHQgb24gdGhlIHNjcmVlbiBBTkQgVEhFTiBpbWFnZXNcbiAgICAgKiBhZnRlciBhIHNsaWdodCBkZWxheS4gU28gSSB1c2UgUHJvbWlzZS5hbGwoKSB0byBtYWtlIHN1cmUgYWxsIGltYWdlc1xuICAgICAqIGhhdmUgYmVlbiBmZXRjaGVkIGFuZCBsb2FkZWQgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCByZW5kZXJpbmcuXG4gICAgICovXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoZGFpbHlGb3JlY2FzdHMubWFwKChmb3JlY2FzdCkgPT4gZm9yZWNhc3QubG9hZCgpKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gcmVuZGVycyBlYWNoIGZvcmVjYXN0IGNhcmQgdG8gdGhlIGRvbS5cbiAgICovXG4gIGNvbnN0IHJlbmRlckZvcmVjYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGRhaWx5Rm9yZWNhc3RzLmZvckVhY2goKGZvcmVjYXN0KSA9PiBmb3JlY2FzdC5yZW5kZXIoX2ZvcmVjYXN0Q29udGFpbmVyKSk7XG4gICAgcm9vdE5vZGUuYXBwZW5kQ2hpbGQoX2ZvcmVjYXN0Q29udGFpbmVyKTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiByZW1vdmVzIHRoZSBmb3JlY2FzdCBjYXJkcyBmcm9tIHRoZSBkb20uIFRoaXMgaXMgbmVlZGVkIHNvXG4gICAqIHdoZW4gdXNlcnMgbWFrZSBzdWJzZXF1ZW50IHJlcXVlc3RzLCB0aGUgcHJldmlvdXMgcmVzdWx0cyBhcmUgcmVtb3ZlZC5cbiAgICovXG4gIGNvbnN0IHJlbW92ZUZvcmVjYXN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBfZm9yZWNhc3RDb250YWluZXIucmVtb3ZlKCk7XG4gICAgX2ZvcmVjYXN0Q29udGFpbmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICBjbGFzc0xpc3Q6IFtcImZvcmVjYXN0LWNvbnRhaW5lclwiXSxcbiAgICB9KTtcbiAgICBkYWlseUZvcmVjYXN0cyA9IFtdO1xuICB9O1xuXG4gIHJldHVybiB7IGxvYWRGb3JlY2FzdCwgcmVuZGVyRm9yZWNhc3QsIHJlbW92ZUZvcmVjYXN0cyB9O1xufVxuIiwiaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi4vSGVscGVyRnVuY3Rpb25zL0h0bWxFbGVtZW50XCI7XG5pbXBvcnQgXCIuL3NwaW5uZXIuY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGlubmVyKCkge1xuICBjb25zdCByb290Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBIdG1sRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBpZDogXCJzcGlubmVyLWNvbnRhaW5lclwiLFxuICB9KTtcblxuICBjb25zdCBzcGlubmVyID0gbmV3IEh0bWxFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGlkOiBcInNwaW5uZXJcIixcbiAgfSk7XG5cbiAgY29uc3Qgc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNwaW5uZXIpO1xuICAgIHJvb3ROb2RlLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH07XG5cbiAgY29uc3Qgc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgc3RhcnQsIHN0b3AgfTtcbn1cbiIsIi8qKlxuICogQW4gYWJzdHJhY3Rpb24gZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIE9wZW5XZWF0aGVyIGFwaS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIFRoaXMgcHJvamVjdCB3aWxsIHJ1biBvbiBHaXRIdWIgcGFnZXMuIFRoZXJlZm9yZSB0aGVyZSB3aWxsIG5vdCBiZSBhIHNlcnZlclxuICAgKiB3aGVyZSBJIGNhbiBpbmplY3QgZW52LiB2YXJzLiBUaGlzIGlzIE9LQVkgYmVjYXVzZSB0aGUgT3BlbldlYXRoZXIgQVBJIGlzXG4gICAqIGZyZWUuXG4gICAqL1xuICBjb25zdCBBUElfS0VZID0gXCJhYzc2YzgxZmMwM2I4MTZlNDliM2QwNmY3NjU3OTUwNlwiO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSBvYmplY3Qgd2l0aCBjb29yZGluYXRlc1xuICAgKiB7IGxhdDogbiwgbG9uZzogeH1cbiAgICogT24gZXJyb3IgcmV0dXJuIHRoZSBlcnJvciBtZXNzYWdlLlxuICAgKi9cbiAgYXN5bmMgZnVuY3Rpb24gX2dldENvb3JkcyhjaXR5TmFtZSkge1xuICAgIGxldCBkYXRhO1xuICAgIGNvbnN0IGdlb2NvZGVVcmwgPVxuICAgICAgXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3RcIiArXG4gICAgICBgP3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHtBUElfS0VZfWA7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2VvY29kZVVybCk7XG4gICAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgeyBsYXQsIGxvbiB9ID0gZGF0YVswXTtcbiAgICAgIHJldHVybiB7IGxhdCwgbG9uIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkU2VhcmNoRXJyb3IoYE5vIGRhdGEgZm9yICR7Y2l0eU5hbWV9YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgd2VhdGhlciBmb3IgYSBnaXZlbiBjaXR5IG5hbWUuIElmIHRoZSBjaXR5IGlzIG5vdCBmb3VuZCB0aGVuXG4gICAqIHByb3BhZ2F0ZSB0aGUgZXJyb3IgbWVzc2FnZSB0byB0aGUgY2FsbGVyLlxuICAgKi9cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5TmFtZSkge1xuICAgIGxldCBkYXRhO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgbGF0LCBsb24gfSA9IGF3YWl0IF9nZXRDb29yZHMoY2l0eU5hbWUpO1xuICAgICAgY29uc3QgYXBpVXJsID1cbiAgICAgICAgXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbFwiICtcbiAgICAgICAgYD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mZXhjbHVkZT1taW51dGVseWAgK1xuICAgICAgICBgJnVuaXRzPWltcGVyaWFsYCArXG4gICAgICAgIGAmYXBwaWQ9JHtBUElfS0VZfWA7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsKTtcbiAgICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGljb24gdXJsIGZvciB0aGUgcHJvdmlkZWQgaWNvbiBjb2RlLlxuICAgKiBUaGlzIGlzIHRoZSB1cmwgdG8gYmUgdXNlZCBhcyBhbiBpbWcuc3JjXG4gICAqL1xuICBmdW5jdGlvbiBnZXRJY29uU3JjKGljb25Db2RlLCBvcHRpb25zID0geyBsYXJnZTogZmFsc2UgfSkge1xuICAgIGlmIChvcHRpb25zLmxhcmdlKSB7XG4gICAgICByZXR1cm4gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb25Db2RlfUAyeC5wbmdgO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb25Db2RlfS5wbmdgO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGdldFdlYXRoZXIsIGdldEljb25TcmMgfTtcbn0pKCk7XG5cbmNsYXNzIEludmFsaWRTZWFyY2hFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9IFwiSW52YWxpZFNlYXJjaEVycm9yXCI7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIEltcG9ydCB0aGUgcmVxdWlyZWQgQ1NTIGZpbGVzIGZvciBTa2VsZXRvbiB0byB3b3JrLlxuICogVGhlc2UgYXJlIENTUyBmaWxlcyBjcmVhdGVkIGZvciBTa2VsZXRvbi4gSSBkaWQgbm90IGNyZWF0ZSB0aGVzZS5cbiAqL1xuaW1wb3J0IFwiLi9Ta2VsZXRvbi9jc3Mvbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IFwiLi9Ta2VsZXRvbi9jc3Mvc2tlbGV0b24uY3NzXCI7XG5cbi8qKlxuICogSW1wb3J0IHRoZSBsYXlvdXQgc3R5bGluZy4gVGhpcyBpcyB3aGVyZSBsYXlvdXQgY2xhc3NlcyBhcmUgZGVmaW5lZC5cbiAqL1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuaW1wb3J0IHsgc2VhcmNoQmFyIH0gZnJvbSBcIi4vU2VhcmNoQmFyL3NlYXJjaEJhci5qc1wiO1xuaW1wb3J0IHsgc3Bpbm5lciB9IGZyb20gXCIuL1NwaW5uZXIvc3Bpbm5lclwiO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vSGVscGVyRnVuY3Rpb25zL0Vycm9yTWVzc2FnZVwiO1xuaW1wb3J0IHdlYXRoZXIgZnJvbSBcIi4vd2VhdGhlclwiO1xuaW1wb3J0IHsgQ3VycmVudFdlYXRoZXJDYXJkIH0gZnJvbSBcIi4vQ3VycmVudFdlYXRoZXIvQ3VycmVudFdlYXRoZXJDYXJkXCI7XG5pbXBvcnQgeyBzZXZlbkRheUZvcmVjYXN0IH0gZnJvbSBcIi4vU2V2ZW5EYXlGb3JlY2FzdC9zZXZlbkRheUZvcmVjYXN0XCI7XG5pbXBvcnQgeyBob3VybHlGb3JlY2FzdCB9IGZyb20gXCIuL0hvdXJseUZvcmVjYXN0L2hvdXJseUZvcmVjYXN0XCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJvb3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpO1xuICBjb25zdCBzcGlubmluZ0xvYWRlciA9IHNwaW5uZXIoKTtcbiAgY29uc3QgZXJyb3JNZXNzYWdlQ29tcG9uZW50ID0gbmV3IEVycm9yTWVzc2FnZShyb290Tm9kZSk7XG4gIGxldCBjdXJyZW50V2VhdGhlckNhcmQ7XG4gIGxldCBzZXZlbkRheUZvcmVjYXN0TG9hZGVyID0gc2V2ZW5EYXlGb3JlY2FzdChyb290Tm9kZSk7XG4gIGxldCBob3VybHlGb3JlY2FzdExvYWRlciA9IGhvdXJseUZvcmVjYXN0KHJvb3ROb2RlKTtcbiAgc2VhcmNoQmFyKHJvb3ROb2RlLCBsb2FkUmVzdWx0cykucmVuZGVyKCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgZ2V0cyBmaXJlZCB3aGVuIHRoZSB1c2VyIHNlYXJjaGVzIGluIHRoZSBzZWFyY2hcbiAgICogYmFyLiBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24gY2FsbCBmb3IgY3JlYXRpbmcgdGhlXG4gICAqIHNlYXJjaCBiYXIgY29tcG9uZW50LlxuICAgKi9cbiAgYXN5bmMgZnVuY3Rpb24gbG9hZFJlc3VsdHMoY2l0eU5hbWUpIHtcbiAgICBsZXQgd2VhdGhlckRhdGE7XG4gICAgc3Bpbm5pbmdMb2FkZXIuc3RhcnQoKTtcbiAgICBjbGVhclByZXZpb3VzU2VhcmNoUmVzdWx0cygpO1xuICAgIHRyeSB7XG4gICAgICB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXIuZ2V0V2VhdGhlcihjaXR5TmFtZSk7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGhvdXJseUZvcmVjYXN0TG9hZGVyLmxvYWRGb3JlY2FzdCh3ZWF0aGVyRGF0YSksXG4gICAgICAgIHNldmVuRGF5Rm9yZWNhc3RMb2FkZXIubG9hZEZvcmVjYXN0KHdlYXRoZXJEYXRhKSxcbiAgICAgIF0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IubmFtZSA9PSBcIkludmFsaWRTZWFyY2hFcnJvclwiKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZUNvbXBvbmVudC5zZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSkucmVuZGVyKCk7XG4gICAgICAgIHNwaW5uaW5nTG9hZGVyLnN0b3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxvYWRDdXJyZW50V2VhdGhlcih3ZWF0aGVyRGF0YSwgY2l0eU5hbWUpO1xuICAgIGhvdXJseUZvcmVjYXN0TG9hZGVyLnJlbmRlckZvcmVjYXN0KCk7XG4gICAgc2V2ZW5EYXlGb3JlY2FzdExvYWRlci5yZW5kZXJGb3JlY2FzdCgpO1xuICAgIHNwaW5uaW5nTG9hZGVyLnN0b3AoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIHRoZSBjdXJyZW50IHdlYXRoZXIgY2FyZC4gVGhpcyBpcyB0aGUgdG9wIG1vc3QgY29tcG9uZW50IGluIHRoZSBET00uXG4gICAqL1xuICBmdW5jdGlvbiBsb2FkQ3VycmVudFdlYXRoZXIod2VhdGhlckRhdGEsIGNpdHlOYW1lKSB7XG4gICAgY3VycmVudFdlYXRoZXJDYXJkID0gbmV3IEN1cnJlbnRXZWF0aGVyQ2FyZChcbiAgICAgIHdlYXRoZXJEYXRhLFxuICAgICAgcm9vdE5vZGUsXG4gICAgICBjaXR5TmFtZVxuICAgICk7XG4gICAgY3VycmVudFdlYXRoZXJDYXJkLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIG91dCB0aGUgc2NyZWVuIHNvIHdlIGNhbiBwb3B1bGF0ZSBpdCB3aXRoIG5ldyByZXN1bHRzLlxuICAgKi9cbiAgZnVuY3Rpb24gY2xlYXJQcmV2aW91c1NlYXJjaFJlc3VsdHMoKSB7XG4gICAgZXJyb3JNZXNzYWdlQ29tcG9uZW50LnJlbW92ZSgpO1xuICAgIGlmIChjdXJyZW50V2VhdGhlckNhcmQpIGN1cnJlbnRXZWF0aGVyQ2FyZC5yZW1vdmUoKTtcbiAgICBzZXZlbkRheUZvcmVjYXN0TG9hZGVyLnJlbW92ZUZvcmVjYXN0cygpO1xuICAgIGhvdXJseUZvcmVjYXN0TG9hZGVyLnJlbW92ZUZvcmVjYXN0cygpO1xuICB9XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9