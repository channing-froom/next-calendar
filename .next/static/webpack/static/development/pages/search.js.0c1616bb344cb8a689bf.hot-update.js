webpackHotUpdate("static/development/pages/search.js",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_Global_ContentComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Global/ContentComponent */ "./components/Global/ContentComponent.js");
/* harmony import */ var _components_Search_SearchStatsComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Search/SearchStatsComponent */ "./components/Search/SearchStatsComponent.js");
/* harmony import */ var _components_Search_SearchListComponent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Search/SearchListComponent */ "./components/Search/SearchListComponent.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _components_PaperContainer_PaperContainerComponent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/PaperContainer/PaperContainerComponent */ "./components/PaperContainer/PaperContainerComponent.js");
/* harmony import */ var _components_Global_DividerComponent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Global/DividerComponent */ "./components/Global/DividerComponent.js");
/* harmony import */ var _components_Search_SearchFormComponent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/Search/SearchFormComponent */ "./components/Search/SearchFormComponent.js");
/* harmony import */ var _lib_services_SearchService__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../lib/services/SearchService */ "./lib/services/SearchService.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_babel_types__WEBPACK_IMPORTED_MODULE_23__);


























var Search =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Search, _Component);

  function Search(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Search);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Search).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "getPageData",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(start, end) {
        var dateResponse;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  _lib_services_SearchService__WEBPACK_IMPORTED_MODULE_21__["default"].ValidateDateRange(new Date(start), new Date(end));
                } catch (e) {
                  // NEED proper error catching
                  console.log(e);
                }

                _context.next = 3;
                return _lib_services_SearchService__WEBPACK_IMPORTED_MODULE_21__["default"].CollectDateItems(start, end);

              case 3:
                dateResponse = _context.sent;
                return _context.abrupt("return", dateResponse);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = props;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Search, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state) {
        this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Container"], {
        maxWidth: "md"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("title", null, "Search page")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Global_ContentComponent__WEBPACK_IMPORTED_MODULE_14__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17__["default"], {
        container: true,
        spacing: 2
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17__["default"], {
        item: true,
        xs: 12,
        md: 4
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_PaperContainer_PaperContainerComponent__WEBPACK_IMPORTED_MODULE_18__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Typography"], {
        variant: "h6",
        color: "primary"
      }, "Search"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Search_SearchFormComponent__WEBPACK_IMPORTED_MODULE_20__["default"], {
        submitHook:
        /*#__PURE__*/
        function () {
          var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(a, b) {
            var newData;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _this2.setState({
                      note: null,
                      transition: false
                    });

                    _context2.next = 3;
                    return _this2.getPageData(a, b);

                  case 3:
                    newData = _context2.sent;

                    _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, newData, {
                      transition: true
                    }));

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }()
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Search_SearchStatsComponent__WEBPACK_IMPORTED_MODULE_15__["default"], {
        daysApart: this.state.daysApart,
        leapYear: this.state.hasLeapYear,
        numOfMondays: this.state.amountOfMondays
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17__["default"], {
        item: true,
        xs: 12,
        md: 8
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Search_SearchListComponent__WEBPACK_IMPORTED_MODULE_16__["default"], {
        notes: this.state.notes,
        transition: this.state.transition
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(_ref3) {
        var query, dateResponse, props;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = _ref3.query;

                try {
                  _lib_services_SearchService__WEBPACK_IMPORTED_MODULE_21__["default"].ValidateDateRange(new Date(query.start), new Date(query.end));
                } catch (e) {
                  // NEED proper error catching
                  console.log(e);
                }

                _context3.next = 4;
                return _lib_services_SearchService__WEBPACK_IMPORTED_MODULE_21__["default"].CollectDateItems(query.start, query.end);

              case 4:
                dateResponse = _context3.sent;
                props = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, {
                  transition: true
                }, query, dateResponse);
                return _context3.abrupt("return", props);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getInitialProps(_x5) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ })

})
//# sourceMappingURL=search.js.0c1616bb344cb8a689bf.hot-update.js.map