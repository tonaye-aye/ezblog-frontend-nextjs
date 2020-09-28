webpackHotUpdate("static/pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_articles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/articles */ \"./components/articles.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/title */ \"./components/title.js\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Divider */ \"./node_modules/@material-ui/core/esm/Divider/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ \"./node_modules/@material-ui/core/esm/Box/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/tony/Developer/Web/_Sandbox/my-blog/blog-frontend/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // api\n\n// componenets\n\n\n // material ui\n\n\n\n\n\nvar Home = function Home(_ref) {\n  var articles = _ref.articles,\n      categories = _ref.categories;\n  var title = \"Blog\";\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    categories: categories,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(_components_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    light: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    m: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    variant: \"h5\",\n    gutterBottom: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, \"Some blog posts and all things such as that\"), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    m: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }), __jsx(_components_articles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    articles: articles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJhcnRpY2xlcyIsImNhdGVnb3JpZXMiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFHQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBOEI7QUFBQSxNQUEzQkMsUUFBMkIsUUFBM0JBLFFBQTJCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUN6QyxNQUFNQyxLQUFLLEdBQUcsTUFBZDtBQUNBLFNBQ0UsTUFBQywwREFBRDtBQUFRLGNBQVUsRUFBRUQsVUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBTyxTQUFLLEVBQUVDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxpRUFBRDtBQUFTLFNBQUssRUFBRSxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLDZEQUFEO0FBQUssS0FBQyxFQUFFLENBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQyxvRUFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixnQkFBWSxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQUpGLEVBT0UsTUFBQyw2REFBRDtBQUFLLEtBQUMsRUFBRSxDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFLE1BQUMsNERBQUQ7QUFBVSxZQUFRLEVBQUVGLFFBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQURGO0FBWUQsQ0FkRDs7S0FBTUQsSTs7QUF5QlNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8vIGFwaVxuaW1wb3J0IHsgZ2V0QXJ0aWNsZXMsIGdldENhdGVnb3JpZXMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuXG4vLyBjb21wb25lbmV0c1xuaW1wb3J0IEFydGljbGVzIGZyb20gXCIuLi9jb21wb25lbnRzL2FydGljbGVzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi9jb21wb25lbnRzL3RpdGxlXCI7XG5cbi8vIG1hdGVyaWFsIHVpXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xuXG5jb25zdCBIb21lID0gKHsgYXJ0aWNsZXMsIGNhdGVnb3JpZXMgfSkgPT4ge1xuICBjb25zdCB0aXRsZSA9IFwiQmxvZ1wiO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30+XG4gICAgICA8VGl0bGUgdGl0bGU9e3RpdGxlfSAvPlxuICAgICAgPERpdmlkZXIgbGlnaHQ9e3RydWV9IC8+XG4gICAgICA8Qm94IG09ezN9IC8+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgIFNvbWUgYmxvZyBwb3N0cyBhbmQgYWxsIHRoaW5ncyBzdWNoIGFzIHRoYXRcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxCb3ggbT17Nn0gLz5cbiAgICAgIDxBcnRpY2xlcyBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFydGljbGVzID0gKGF3YWl0IGdldEFydGljbGVzKCkpIHx8IFtdO1xuICBjb25zdCBjYXRlZ29yaWVzID0gKGF3YWl0IGdldENhdGVnb3JpZXMoKSkgfHwgW107XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYXJ0aWNsZXMsIGNhdGVnb3JpZXMgfSxcbiAgICB1bnN0YWJsZV9yZXZhbGlkYXRlOiAxXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})