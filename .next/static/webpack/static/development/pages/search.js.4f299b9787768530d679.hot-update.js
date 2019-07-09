webpackHotUpdate("static/development/pages/search.js",{

/***/ "./lib/services/SearchService.js":
/*!***************************************!*\
  !*** ./lib/services/SearchService.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchService; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);







var SearchService =
/*#__PURE__*/
function () {
  function SearchService() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SearchService);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchService, null, [{
    key: "Search",

    /**
     * create a new search request
     * 
     * @param Date startDate 
     * @param Date endDate 
     */
    value: function Search(startDate, endDate) {
      // will throw exception if fails
      this.ValidateDateRange(startDate, endDate);
      this.Go(startDate, endDate);
    }
    /**
     * Send user to the search page
     * 
     * @param Date startDate 
     * @param Date endDate 
     */

  }, {
    key: "Go",
    value: function Go(startDate, endDate) {
      console.log('pushing to search');
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
        pathname: '/search',
        query: {
          start: this.FormatDate(startDate),
          end: this.FormatDate(endDate)
        }
      });
    }
    /**
     * Formate the date into the required shape
     * This works well for passing SEO type values through the URI
     * 
     * @param Date value 
     */

  }, {
    key: "FormatDate",
    value: function FormatDate(value) {
      return new Date(value).toISOString().slice(0, 10);
    }
    /**
     * Generate a api url for this date
     * 
     * @param Date date 
     */

  }, {
    key: "GetApiUrlForDate",
    value: function GetApiUrlForDate(date) {
      var value = date.toISOString().slice(5, 10).replace('-', '/');
      var url =  true ? "http://numbersapi.com" : undefined;
      return "http://numbersapi.com/".concat(value, "/date");
    }
  }, {
    key: "CollectNotes",
    value: function () {
      var _CollectNotes = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(days) {
        var _this = this;

        var notes, _loop, i;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                notes = [];
                _loop =
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _loop(i) {
                  var response;
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _loop$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default()(_this.GetApiUrlForDate(days[i]), {
                            cache: "force-cache"
                          }).then(function (response) {
                            // THERE SHOULD BE ERROR HANDLING HERE !!!
                            return response.text();
                          }).then(function (response) {
                            notes.push(_this.FormatNote(response, days[i]));
                          }).catch(function (e) {
                            console.log(e);
                          });

                        case 2:
                          response = _context.sent;

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _loop);
                });
                i = 0;

              case 3:
                if (!(i < days.length)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.delegateYield(_loop(i), "t0", 5);

              case 5:
                i++;
                _context2.next = 3;
                break;

              case 8:
                return _context2.abrupt("return", notes);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee);
      }));

      function CollectNotes(_x) {
        return _CollectNotes.apply(this, arguments);
      }

      return CollectNotes;
    }()
  }, {
    key: "FormatNote",
    value: function FormatNote(note, date) {
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var month = months[date.getMonth()],
          day = date.getDate();
      var nth = this.GetDateNt(day);
      var dateString = "".concat(month, " ").concat(day).concat(nth);
      var noteString = note.replace(dateString, '');
      return {
        date: dateString,
        note: noteString
      };
    }
  }, {
    key: "GetDateNt",
    value: function GetDateNt(day) {
      if (day > 3 && day < 21) return 'th';

      switch (day % 10) {
        case 1:
          return "st";

        case 2:
          return "nd";

        case 3:
          return "rd";

        default:
          return "th";
      }
    }
    /**
     * Validate a date range
     * 
     * @param Date dateFrom 
     * @param Date dateTo 
     * @param bool throwException 
     */

  }, {
    key: "ValidateDateRange",
    value: function ValidateDateRange(dateFrom, dateTo) {
      var throwException = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      try {
        this.ValidateDate(dateFrom);
        this.ValidateDate(dateTo);
      } catch (e) {
        if (!throwException) {
          return false;
        }

        throw e;
      }

      return true;
    }
    /**
     * Simple check to see if the value passed is what we expect
     * This is not a production ready function !
     * 
     * @param Date value 
     */

  }, {
    key: "ValidateDate",
    value: function ValidateDate(value) {
      if (!value) {
        throw "Please provide all dates";
      } else if (!value instanceof Date) {
        throw "Value passed is not a date ".concat(value);
      }
    }
  }, {
    key: "IsMonday",
    value: function IsMonday(date) {
      return date.getDay() === 1;
    }
  }, {
    key: "HasLeapYear",
    value: function HasLeapYear(years) {
      for (var i = 0; i < years.length; i++) {
        if (new Date(years[i], 1, 29).getDate() === 29) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "CollectDateItems",
    value: function () {
      var _CollectDateItems = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dateFrom, dateTo) {
        var days, years, mondays, current, end, endTime;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                days = [];
                years = [];
                mondays = 0;
                dateFrom = new Date(dateFrom);
                dateTo = new Date(dateTo); // Resolve time difference so we can create a linear search

                current = dateFrom.getTime() < dateTo.getTime() ? dateFrom : dateTo;
                end = dateFrom.getTime() > dateTo.getTime() ? dateFrom : dateTo;
                endTime = end.getTime(); // push the first item onto the array

                days.push(new Date(current));

                if (this.IsMonday(current)) {
                  mondays++;
                } // Create a array of all the values between


                while (endTime > current.getTime()) {
                  days.push(current);

                  if (this.IsMonday(current)) {
                    mondays++;
                  } // check to see if we tracking these years or not            


                  if (!years.includes(current.getFullYear())) {
                    years.push(current.getFullYear());
                  }

                  current = new Date(current.setDate(current.getDate() + 1));
                }

                _context3.t0 = days.length;
                _context3.t1 = mondays;
                _context3.t2 = this.HasLeapYear(years);
                _context3.next = 16;
                return this.CollectNotes(days);

              case 16:
                _context3.t3 = _context3.sent;
                return _context3.abrupt("return", {
                  daysApart: _context3.t0,
                  amountOfMondays: _context3.t1,
                  hasLeapYear: _context3.t2,
                  notes: _context3.t3
                });

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2, this);
      }));

      function CollectDateItems(_x2, _x3) {
        return _CollectDateItems.apply(this, arguments);
      }

      return CollectDateItems;
    }()
  }]);

  return SearchService;
}();



/***/ })

})
//# sourceMappingURL=search.js.4f299b9787768530d679.hot-update.js.map