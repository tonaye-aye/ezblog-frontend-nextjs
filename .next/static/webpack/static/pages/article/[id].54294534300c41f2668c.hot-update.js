webpackHotUpdate("static/pages/article/[id]",{

/***/ "./components/sidebar.js":
/*!*******************************!*\
  !*** ./components/sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ \"./node_modules/@material-ui/core/esm/Box/index.js\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Divider */ \"./node_modules/@material-ui/core/esm/Divider/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/tony/Developer/Web/_Sandbox/my-blog/blog-frontend/components/sidebar.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // material ui\n\n\n\n\n\n\nvar sidebar = function sidebar(_ref) {\n  var articles = _ref.articles,\n      categories = _ref.categories;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    variant: \"overline\",\n    color: \"textSecondary\",\n    component: \"p\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, \"Topics\"), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    light: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    m: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }), categories.map(function (category) {\n    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: category.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }\n    }, __jsx(Link, {\n      as: \"/category/\".concat(category.id),\n      href: \"/category/[id]\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 13\n      }\n    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      variant: \"button\",\n      component: \"p\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 15\n      }\n    }, category.name)));\n  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    m: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    variant: \"overline\",\n    color: \"textSecondary\",\n    component: \"p\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, \"Other posts\"), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    light: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    m: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), recentArticles.map(function (article) {\n    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: article.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }\n    }, __jsx(Link, {\n      as: \"/article/\".concat(article.id),\n      href: \"/article/[id]\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 13\n      }\n    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      variant: \"button\",\n      component: \"p\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 15\n      }\n    }, article.title.slice(0, 20), \"...\")));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sidebar);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIuanM/MjA4NyJdLCJuYW1lcyI6WyJzaWRlYmFyIiwiYXJ0aWNsZXMiLCJjYXRlZ29yaWVzIiwibWFwIiwiY2F0ZWdvcnkiLCJpZCIsIm5hbWUiLCJyZWNlbnRBcnRpY2xlcyIsImFydGljbGUiLCJ0aXRsZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQThCO0FBQUEsTUFBM0JDLFFBQTJCLFFBQTNCQSxRQUEyQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDNUMsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFZLFdBQU8sRUFBQyxVQUFwQjtBQUErQixTQUFLLEVBQUMsZUFBckM7QUFBcUQsYUFBUyxFQUFDLEdBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUlFLE1BQUMsaUVBQUQ7QUFBUyxTQUFLLEVBQUUsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0UsTUFBQyw2REFBRDtBQUFLLEtBQUMsRUFBRSxDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1HQSxVQUFVLENBQUNDLEdBQVgsQ0FBZSxVQUFDQyxRQUFELEVBQWM7QUFDNUIsV0FDRSxNQUFDLGtFQUFEO0FBQVUsU0FBRyxFQUFFQSxRQUFRLENBQUNDLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLElBQUQ7QUFBTSxRQUFFLHNCQUFlRCxRQUFRLENBQUNDLEVBQXhCLENBQVI7QUFBc0MsVUFBSSxFQUFDLGdCQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvRUFBRDtBQUFZLGFBQU8sRUFBQyxRQUFwQjtBQUE2QixlQUFTLEVBQUMsR0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxRQUFRLENBQUNFLElBRFosQ0FERixDQURGLENBREY7QUFTRCxHQVZBLENBTkgsRUFpQkUsTUFBQyw2REFBRDtBQUFLLEtBQUMsRUFBRSxDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsRUFrQkUsTUFBQyxvRUFBRDtBQUFZLFdBQU8sRUFBQyxVQUFwQjtBQUErQixTQUFLLEVBQUMsZUFBckM7QUFBcUQsYUFBUyxFQUFDLEdBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJGLEVBcUJFLE1BQUMsaUVBQUQ7QUFBUyxTQUFLLEVBQUUsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCRixFQXNCRSxNQUFDLDZEQUFEO0FBQUssS0FBQyxFQUFFLENBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRixFQXVCR0MsY0FBYyxDQUFDSixHQUFmLENBQW1CLFVBQUNLLE9BQUQsRUFBYTtBQUMvQixXQUNFLE1BQUMsa0VBQUQ7QUFBVSxTQUFHLEVBQUVBLE9BQU8sQ0FBQ0gsRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsSUFBRDtBQUFNLFFBQUUscUJBQWNHLE9BQU8sQ0FBQ0gsRUFBdEIsQ0FBUjtBQUFvQyxVQUFJLEVBQUMsZUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0VBQUQ7QUFBWSxhQUFPLEVBQUMsUUFBcEI7QUFBNkIsZUFBUyxFQUFDLEdBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0csT0FBTyxDQUFDQyxLQUFSLENBQWNDLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUIsRUFBdkIsQ0FESCxRQURGLENBREYsQ0FERjtBQVNELEdBVkEsQ0F2QkgsQ0FERjtBQXFDRCxDQXRDRDs7QUF3Q2VWLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zaWRlYmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBtYXRlcmlhbCB1aVxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcblxuY29uc3Qgc2lkZWJhciA9ICh7IGFydGljbGVzLCBjYXRlZ29yaWVzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxuICAgICAgICBUb3BpY3NcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxEaXZpZGVyIGxpZ2h0PXt0cnVlfSAvPlxuICAgICAgPEJveCBtPXsxfSAvPlxuICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgIDxMaW5rIGFzPXtgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuaWR9YH0gaHJlZj1cIi9jYXRlZ29yeS9baWRdXCI+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJidXR0b25cIiBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8Qm94IG09ezR9IC8+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgIE90aGVyIHBvc3RzXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8RGl2aWRlciBsaWdodD17dHJ1ZX0gLz5cbiAgICAgIDxCb3ggbT17MX0gLz5cbiAgICAgIHtyZWNlbnRBcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWVudUl0ZW0ga2V5PXthcnRpY2xlLmlkfT5cbiAgICAgICAgICAgIDxMaW5rIGFzPXtgL2FydGljbGUvJHthcnRpY2xlLmlkfWB9IGhyZWY9XCIvYXJ0aWNsZS9baWRdXCI+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJidXR0b25cIiBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgICAgICAgICAge2FydGljbGUudGl0bGUuc2xpY2UoMCwgMjApfS4uLlxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sidebar.js\n");

/***/ })

})