webpackHotUpdate("static/pages/article/[id]",{

/***/ "./components/sidebar.js":
/*!*******************************!*\
  !*** ./components/sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/tony/Developer/Web/_Sandbox/my-blog/blog-frontend/components/sidebar.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // material ui\n\n\n\nvar sidebar = function sidebar(_ref) {\n  var articles = _ref.articles,\n      categories = _ref.categories;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    variant: \"overline\",\n    color: \"textSecondary\",\n    component: \"p\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, \"Topics\"), __jsx(Divider, {\n    light: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }), __jsx(Box, {\n    m: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }), categories.map(function (category) {\n    return __jsx(MenuItem, {\n      key: category.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }\n    }, __jsx(Link, {\n      as: \"/category/\".concat(category.id),\n      href: \"/category/[id]\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }\n    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      variant: \"button\",\n      component: \"p\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 15\n      }\n    }, category.name)));\n  }), __jsx(Box, {\n    m: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    variant: \"overline\",\n    color: \"textSecondary\",\n    component: \"p\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \"Other posts\"), __jsx(Divider, {\n    light: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }), __jsx(Box, {\n    m: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }), recentArticles.map(function (article) {\n    return __jsx(MenuItem, {\n      key: article.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }\n    }, __jsx(Link, {\n      as: \"/article/\".concat(article.id),\n      href: \"/article/[id]\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 13\n      }\n    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      variant: \"button\",\n      component: \"p\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }\n    }, article.title.slice(0, 20), \"...\")));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sidebar);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIuanM/MjA4NyJdLCJuYW1lcyI6WyJzaWRlYmFyIiwiYXJ0aWNsZXMiLCJjYXRlZ29yaWVzIiwibWFwIiwiY2F0ZWdvcnkiLCJpZCIsIm5hbWUiLCJyZWNlbnRBcnRpY2xlcyIsImFydGljbGUiLCJ0aXRsZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztDQUVBOztBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQThCO0FBQUEsTUFBM0JDLFFBQTJCLFFBQTNCQSxRQUEyQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDNUMsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFZLFdBQU8sRUFBQyxVQUFwQjtBQUErQixTQUFLLEVBQUMsZUFBckM7QUFBcUQsYUFBUyxFQUFDLEdBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUlFLE1BQUMsT0FBRDtBQUFTLFNBQUssRUFBRSxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLEdBQUQ7QUFBSyxLQUFDLEVBQUUsQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNR0EsVUFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQ0MsUUFBRCxFQUFjO0FBQzVCLFdBQ0UsTUFBQyxRQUFEO0FBQVUsU0FBRyxFQUFFQSxRQUFRLENBQUNDLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLElBQUQ7QUFBTSxRQUFFLHNCQUFlRCxRQUFRLENBQUNDLEVBQXhCLENBQVI7QUFBc0MsVUFBSSxFQUFDLGdCQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvRUFBRDtBQUFZLGFBQU8sRUFBQyxRQUFwQjtBQUE2QixlQUFTLEVBQUMsR0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxRQUFRLENBQUNFLElBRFosQ0FERixDQURGLENBREY7QUFTRCxHQVZBLENBTkgsRUFpQkUsTUFBQyxHQUFEO0FBQUssS0FBQyxFQUFFLENBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixFQWtCRSxNQUFDLG9FQUFEO0FBQVksV0FBTyxFQUFDLFVBQXBCO0FBQStCLFNBQUssRUFBQyxlQUFyQztBQUFxRCxhQUFTLEVBQUMsR0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQkYsRUFxQkUsTUFBQyxPQUFEO0FBQVMsU0FBSyxFQUFFLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkYsRUFzQkUsTUFBQyxHQUFEO0FBQUssS0FBQyxFQUFFLENBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRixFQXVCR0MsY0FBYyxDQUFDSixHQUFmLENBQW1CLFVBQUNLLE9BQUQsRUFBYTtBQUMvQixXQUNFLE1BQUMsUUFBRDtBQUFVLFNBQUcsRUFBRUEsT0FBTyxDQUFDSCxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxJQUFEO0FBQU0sUUFBRSxxQkFBY0csT0FBTyxDQUFDSCxFQUF0QixDQUFSO0FBQW9DLFVBQUksRUFBQyxlQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvRUFBRDtBQUFZLGFBQU8sRUFBQyxRQUFwQjtBQUE2QixlQUFTLEVBQUMsR0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRyxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsS0FBZCxDQUFvQixDQUFwQixFQUF1QixFQUF2QixDQURILFFBREYsQ0FERixDQURGO0FBU0QsR0FWQSxDQXZCSCxDQURGO0FBcUNELENBdENEOztBQXdDZVYsc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGViYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8vIG1hdGVyaWFsIHVpXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuXG5jb25zdCBzaWRlYmFyID0gKHsgYXJ0aWNsZXMsIGNhdGVnb3JpZXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgIFRvcGljc1xuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPERpdmlkZXIgbGlnaHQ9e3RydWV9IC8+XG4gICAgICA8Qm94IG09ezF9IC8+XG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1lbnVJdGVtIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgPExpbmsgYXM9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5pZH1gfSBocmVmPVwiL2NhdGVnb3J5L1tpZF1cIj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJ1dHRvblwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICAgIDxCb3ggbT17NH0gLz5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJvdmVybGluZVwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAgT3RoZXIgcG9zdHNcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxEaXZpZGVyIGxpZ2h0PXt0cnVlfSAvPlxuICAgICAgPEJveCBtPXsxfSAvPlxuICAgICAge3JlY2VudEFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2FydGljbGUuaWR9PlxuICAgICAgICAgICAgPExpbmsgYXM9e2AvYXJ0aWNsZS8ke2FydGljbGUuaWR9YH0gaHJlZj1cIi9hcnRpY2xlL1tpZF1cIj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJ1dHRvblwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZS5zbGljZSgwLCAyMCl9Li4uXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sidebar.js\n");

/***/ })

})