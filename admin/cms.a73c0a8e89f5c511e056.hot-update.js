webpackHotUpdate("cms",{

/***/ "":
false,

/***/ "./src/assets/css/styles.css":
/*!***********************************!*\
  !*** ./src/assets/css/styles.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1630820315288
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/cms/preview-templates/ArticlePreview.js":
/*!*****************************************************!*\
  !*** ./src/cms/preview-templates/ArticlePreview.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ArticleTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ArticleTemplate */ "./src/components/ArticleTemplate/index.js");
var _this = undefined,
    _jsxFileName = "/Users/allie/src/blep/website/src/cms/preview-templates/ArticlePreview.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var ArticlePreview = function ArticlePreview(_ref) {
  var entry = _ref.entry,
      widgetFor = _ref.widgetFor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ArticleTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: widgetFor('body'),
    cover: entry.getIn(['data', 'cover']),
    meta_title: entry.getIn(['data', 'meta_title']),
    meta_desc: entry.getIn(['data', 'meta_description']),
    title: entry.getIn(['data', 'title']),
    slug: entry.getIn(['data', 'slug']),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }))));
};

ArticlePreview.propTypes = {
  entry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    getIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }),
  widgetFor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var _default = ArticlePreview;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ArticlePreview, "ArticlePreview", "/Users/allie/src/blep/website/src/cms/preview-templates/ArticlePreview.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blep/website/src/cms/preview-templates/ArticlePreview.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.a73c0a8e89f5c511e056.hot-update.js.map