(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+1IE": function IE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PeriodService", function () {
        return PeriodService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _period__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../period */
      "b9cN");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var moment = moment__WEBPACK_IMPORTED_MODULE_2__;
      /**
       * The service provides the current calendar period. It is specified:
       * <ul>
       *   <li>As the period between a start and end date if both are specified</li>
       *   <li>The duration of a year following the start date if no end date is specified</li>
       *   <li>The duration of a year preceding the end date if no start date is specified</li>
       *   <li>The full current year from jan 1st to dec 31 if neither start nor end date are specified</li>
       */

      var PeriodService = /*#__PURE__*/function () {
        function PeriodService() {
          _classCallCheck(this, PeriodService);

          this._startDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
          this._endDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
          this._period$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](PeriodService.getCurrentYearPeriod());
          var startAndEnd$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([this._startDate$, this._endDate$]);
          this._isFullYear$ = startAndEnd$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                start = _ref2[0],
                end = _ref2[1];

            return !start && !end;
          }));
          this._period$ = startAndEnd$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                start = _ref4[0],
                end = _ref4[1];

            return PeriodService.calculatePeriod(start, end);
          }));
        }
        /**
         * Set the start date of the period. If the parameter is null the start date will be calculated
         * @param date A momentjs date or null
         */


        _createClass(PeriodService, [{
          key: "startDate",
          set: function set(date) {
            this._startDate$.next(date);
          }
          /**
           * Set the end date of the period. If the parameter is null the end date will be  calculated.
           * @param date A momentjs date or null
           */

        }, {
          key: "endDate",
          set: function set(date) {
            this._endDate$.next(date);
          }
          /**
           * The observable with the period between start- and end date or the current year if neither is passed.
           */

        }, {
          key: "period$",
          get: function get() {
            return this._period$;
          }
          /**
           * Returns true if neither start nor end were given and the current year was picked instead.
           */

        }, {
          key: "isFullYear$",
          get: function get() {
            return this._isFullYear$;
          }
        }], [{
          key: "getCurrentYearPeriod",
          value: function getCurrentYearPeriod() {
            var currentYear = moment();
            return new _period__WEBPACK_IMPORTED_MODULE_1__["Period"](currentYear.clone().startOf('year'), currentYear.clone().endOf('year'));
          }
        }, {
          key: "calculatePeriod",
          value: function calculatePeriod(startDate, endDate) {
            if (startDate == null && endDate == null) {
              return null;
            }

            var myStartDate;

            if (startDate != null) {
              myStartDate = startDate;
            } else {
              myStartDate = endDate.clone();
              myStartDate.subtract(1, 'year');
            }

            var myEndDate;

            if (endDate != null) {
              myEndDate = endDate.clone();
            } else {
              myEndDate = myStartDate.clone();
              myEndDate.add(1, 'year');
            }

            return new _period__WEBPACK_IMPORTED_MODULE_1__["Period"](myStartDate, myEndDate);
          }
        }]);

        return PeriodService;
      }();

      PeriodService.ɵfac = function PeriodService_Factory(t) {
        return new (t || PeriodService)();
      };

      PeriodService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: PeriodService,
        factory: PeriodService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "/qwL": function qwL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgTimeChartModule", function () {
        return NgTimeChartModule;
      });
      /* harmony import */


      var _chart_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chart/ng-time-chart.component */
      "VNLd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _time_table_body_time_table_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./time-table-body/time-table-body.component */
      "KLtZ");
      /* harmony import */


      var _item_grouping_item_grouping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./item-grouping/item-grouping.component */
      "fkOk");
      /* harmony import */


      var _pipes_time_chart_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pipes/time-chart-date-formatter.pipe */
      "94P5");
      /* harmony import */


      var _item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./item/item.component */
      "zvhu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NgTimeChartModule = function NgTimeChartModule() {
        _classCallCheck(this, NgTimeChartModule);
      };

      NgTimeChartModule.ɵfac = function NgTimeChartModule_Factory(t) {
        return new (t || NgTimeChartModule)();
      };

      NgTimeChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: NgTimeChartModule
      });
      NgTimeChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NgTimeChartModule, {
          declarations: [_time_table_body_time_table_body_component__WEBPACK_IMPORTED_MODULE_2__["TimeTableBodyComponent"], _item_grouping_item_grouping_component__WEBPACK_IMPORTED_MODULE_3__["ItemGroupingComponent"], _pipes_time_chart_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__["TimeChartDateFormatterPipe"], _item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"], _chart_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_0__["NgTimeChartComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"], _time_table_body_time_table_body_component__WEBPACK_IMPORTED_MODULE_2__["TimeTableBodyComponent"], _item_grouping_item_grouping_component__WEBPACK_IMPORTED_MODULE_3__["ItemGroupingComponent"], _chart_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_0__["NgTimeChartComponent"]]
        });
      })();
      /***/

    },

    /***/
    0: function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/runner/work/ng-time-chart/ng-time-chart/projects/ng-time-chart-showcase/src/main.ts */
      "LJd8");
      /***/
    },

    /***/
    "7bcd": function bcd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutSelectorService", function () {
        return LayoutSelectorService;
      });
      /* harmony import */


      var _layout_strategy_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layout-strategy.enum */
      "lC/2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _stacked_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./stacked-layout.service */
      "JC1y");
      /* harmony import */


      var _tiled_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tiled-layout.service */
      "bZvi");

      var LayoutSelectorService = /*#__PURE__*/function () {
        function LayoutSelectorService(stackedLayout, tiledLayout) {
          _classCallCheck(this, LayoutSelectorService);

          this.stackedLayout = stackedLayout;
          this.tiledLayout = tiledLayout;
        }
        /**
         * Does the layout of the an {@link Item} list using the selected strategy
         * @param items The Items to lay out
         * @param strategy The {@link LayoutStrategy} to use to layout the items
         */


        _createClass(LayoutSelectorService, [{
          key: "doLayout",
          value: function doLayout(items) {
            var strategy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _layout_strategy_enum__WEBPACK_IMPORTED_MODULE_0__["LayoutStrategy"].Stacked;

            switch (strategy) {
              case _layout_strategy_enum__WEBPACK_IMPORTED_MODULE_0__["LayoutStrategy"].Stacked:
                return this.stackedLayout.doLayout(items);

              case _layout_strategy_enum__WEBPACK_IMPORTED_MODULE_0__["LayoutStrategy"].Tiled:
                return this.tiledLayout.doLayout(items);
            }
          }
        }]);

        return LayoutSelectorService;
      }();

      LayoutSelectorService.ɵfac = function LayoutSelectorService_Factory(t) {
        return new (t || LayoutSelectorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_stacked_layout_service__WEBPACK_IMPORTED_MODULE_2__["StackedLayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_tiled_layout_service__WEBPACK_IMPORTED_MODULE_3__["TiledLayoutService"]));
      };

      LayoutSelectorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LayoutSelectorService,
        factory: LayoutSelectorService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "94P5": function P5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeChartDateFormatterPipe", function () {
        return TimeChartDateFormatterPipe;
      });
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var moment = moment__WEBPACK_IMPORTED_MODULE_0__;

      var TimeChartDateFormatterPipe = /*#__PURE__*/function () {
        function TimeChartDateFormatterPipe() {
          _classCallCheck(this, TimeChartDateFormatterPipe);
        }

        _createClass(TimeChartDateFormatterPipe, [{
          key: "transform",
          value: function transform(dateString) {
            return moment(dateString).format('D. M.');
          }
        }]);

        return TimeChartDateFormatterPipe;
      }();

      TimeChartDateFormatterPipe.ɵfac = function TimeChartDateFormatterPipe_Factory(t) {
        return new (t || TimeChartDateFormatterPipe)();
      };

      TimeChartDateFormatterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "timeChartDateFormatter",
        type: TimeChartDateFormatterPipe,
        pure: true
      });
      /***/
    },

    /***/
    "BD7B": function BD7B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "q2u/");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "cobL");
      /* harmony import */


      var _ng_time_chart_src_lib_components_ng_time_chart_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../ng-time-chart/src/lib/components/ng-time-chart.module */
      "/qwL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _ng_time_chart_src_lib_components_ng_time_chart_module__WEBPACK_IMPORTED_MODULE_3__["NgTimeChartModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _ng_time_chart_src_lib_components_ng_time_chart_module__WEBPACK_IMPORTED_MODULE_3__["NgTimeChartModule"]]
        });
      })();
      /***/

    },

    /***/
    "FyLx": function FyLx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "YearService", function () {
        return YearService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _period__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../period */
      "b9cN");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var moment = moment__WEBPACK_IMPORTED_MODULE_2__;

      var YearService = /*#__PURE__*/function () {
        function YearService() {
          _classCallCheck(this, YearService);

          this._year$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](moment().year());
          this._period$ = this._year$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (year) {
            return YearService.periodForYear(year);
          }));
        }

        _createClass(YearService, [{
          key: "year",
          set: function set(value) {
            this._year$.next(value);
          }
        }, {
          key: "year$",
          get: function get() {
            return this._year$.asObservable();
          }
        }, {
          key: "period$",
          get: function get() {
            return this._period$;
          }
        }], [{
          key: "periodForYear",
          value: function periodForYear(year) {
            return _period__WEBPACK_IMPORTED_MODULE_1__["Period"].forYear(year);
          }
        }]);

        return YearService;
      }();

      YearService.ɵfac = function YearService_Factory(t) {
        return new (t || YearService)();
      };

      YearService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: YearService,
        factory: YearService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "JC1y": function JC1y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StackedLayoutService", function () {
        return StackedLayoutService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StackedLayoutService = /*#__PURE__*/function () {
        function StackedLayoutService() {
          _classCallCheck(this, StackedLayoutService);
        }

        _createClass(StackedLayoutService, [{
          key: "doLayout",
          value: function doLayout(items) {
            return items.map(function (item) {
              return [item];
            });
          }
        }]);

        return StackedLayoutService;
      }();

      StackedLayoutService.ɵfac = function StackedLayoutService_Factory(t) {
        return new (t || StackedLayoutService)();
      };

      StackedLayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StackedLayoutService,
        factory: StackedLayoutService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "KLtZ": function KLtZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeTableBodyComponent", function () {
        return TimeTableBodyComponent;
      });
      /* harmony import */


      var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../constants */
      "WPxx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _layout_layout_selector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../layout/layout-selector.service */
      "7bcd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _item_grouping_item_grouping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../item-grouping/item-grouping.component */
      "fkOk");

      var _c0 = ["todaymarker"];

      function TimeTableBodyComponent_div_1_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ng-item-grouping", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var itemGrouping_r4 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemGrouping", itemGrouping_r4)("period", ctx_r3.period);
        }
      }

      function TimeTableBodyComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimeTableBodyComponent_div_1_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var group_r2 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.open(group_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TimeTableBodyComponent_div_1_ng_container_4_Template, 2, 2, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", group_r2.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.doLayout(group_r2.items));
        }
      }

      function TimeTableBodyComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 8);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("left", ctx_r1.getDayOfPeriod(ctx_r1.today) * ctx_r1.DAY_WIDTH + ctx_r1.SIDEBAR_WIDTH + 7, "px");
        }
      }

      var TimeTableBodyComponent = /*#__PURE__*/function () {
        function TimeTableBodyComponent(layoutSelectorService) {
          _classCallCheck(this, TimeTableBodyComponent);

          this.layoutSelectorService = layoutSelectorService;
          this.DAY_WIDTH = _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].DAY_WIDTH;
          this.SIDEBAR_WIDTH = _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].SIDEBAR_WIDTH;
          this.groups = [];
        }

        _createClass(TimeTableBodyComponent, [{
          key: "doLayout",
          value: function doLayout(items) {
            return this.layoutSelectorService.doLayout(items, this.layoutStrategy);
          }
        }, {
          key: "getDayOfPeriod",
          value: function getDayOfPeriod(date) {
            if (!this.period.containsDate(date)) {
              return 0;
            }

            return Math.round(date.diff(this.period.startDate, 'days', true)) - 1;
          }
        }, {
          key: "isInPeriod",
          value: function isInPeriod(time) {
            return this.period.containsDate(time);
          }
        }, {
          key: "open",
          value: function open(group) {
            var _a;

            (_a = group.onClick) === null || _a === void 0 ? void 0 : _a.apply(null);
          }
        }]);

        return TimeTableBodyComponent;
      }();

      TimeTableBodyComponent.ɵfac = function TimeTableBodyComponent_Factory(t) {
        return new (t || TimeTableBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_layout_layout_selector_service__WEBPACK_IMPORTED_MODULE_2__["LayoutSelectorService"]));
      };

      TimeTableBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TimeTableBodyComponent,
        selectors: [["ng-time-table-body"]],
        viewQuery: function TimeTableBodyComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.todayMarker = _t.first);
          }
        },
        inputs: {
          groups: "groups",
          period: "period",
          today: "today",
          durationInDays: "durationInDays",
          layoutStrategy: "layoutStrategy"
        },
        decls: 3,
        vars: 4,
        consts: [[1, "timetable-body"], ["class", "item-group", 4, "ngFor", "ngForOf"], ["class", "today-marker", 3, "left", 4, "ngIf"], [1, "item-group"], [1, "item-label", "label-bar", 3, "click"], [1, "item-display"], [4, "ngFor", "ngForOf"], [3, "itemGrouping", "period"], [1, "today-marker"]],
        template: function TimeTableBodyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TimeTableBodyComponent_div_1_Template, 5, 2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TimeTableBodyComponent_div_2_Template, 1, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("min-width", ctx.durationInDays * ctx.DAY_WIDTH + ctx.SIDEBAR_WIDTH, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.groups);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInPeriod(ctx.today));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _item_grouping_item_grouping_component__WEBPACK_IMPORTED_MODULE_4__["ItemGroupingComponent"]],
        styles: [".label-bar[_ngcontent-%COMP%] {\n  background-color: white;\n  z-index: 1000;\n  flex: 1 0 200px;\n  min-width: 200px;\n  max-width: 200px;\n}\n\n.timetable-body[_ngcontent-%COMP%] {\n  padding-top: 0;\n  margin-top: 0;\n  margin-bottom: 4px;\n  position: relative;\n  z-index: 0;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n  position: sticky;\n  left: 0;\n  flex: 1 0 200px;\n  text-align: left;\n  color: #aaa;\n  margin: 0;\n  padding-top: calc(2px + 4px + 1px);\n  padding-bottom: calc(2px + 4px + 1px);\n  z-index: 1000;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .item-display[_ngcontent-%COMP%] {\n  border-top: solid 1px #ccc;\n  width: 100%;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #eee;\n}\n\n.today-marker[_ngcontent-%COMP%] {\n  width: 4px;\n  background-color: #b00b1e;\n  display: block;\n  border-left: solid white 1px;\n  border-right: solid white 1px;\n  box-sizing: content-box;\n  position: absolute;\n  top: -40px;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy82X2NvbXBvbmVudHMvX3NpZGViYXIuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy8xX3NldHRpbmdzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3RpbWUtdGFibGUtYm9keS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkNIYztFRElkLGdCQ0pjO0FDR2hCOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkRKcUI7RUNLckIsa0JBQUE7RUFDQSxVQUFBO0FBTUY7O0FBSkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKSTtFQUNFLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdEYk07RUNjTixTQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7QUFNTjs7QUFISTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtBQUtOOztBQURFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFHSjs7QUFBRTtFQUNFLHNCRDlCVztBQ2dDZjs7QUFFQTtFQUNFLFVBQUE7RUFDQSx5QkRsQ2M7RUNtQ2QsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDRiIsImZpbGUiOiJ0aW1lLXRhYmxlLWJvZHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vMV9zZXR0aW5ncy92YXJpYWJsZXNcIjtcblxuLmxhYmVsLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBmbGV4OiAxIDAgJHNpZGViYXItd2lkdGg7XG4gIG1pbi13aWR0aDogJHNpZGViYXItd2lkdGg7XG4gIG1heC13aWR0aDogJHNpZGViYXItd2lkdGg7XG59XG4iLCIkZGF5LXdpZHRoOiAyMHB4O1xuJGl0ZW0tdmVydGljYWwtcGFkZGluZzogMnB4O1xuJGl0ZW0tdmVydGljYWwtbWFyZ2luOiA0cHg7XG4kc2lkZWJhci13aWR0aDogMjAwcHg7XG4kaGVhZGVyLWhlaWdodDogNzBweDtcbiRncmF5LWRhcms6ICM4ODg7XG4kZ3JheS1iYXNlOiAjYWFhO1xuJGdyYXktbGlnaHQ6ICNjY2M7XG4kZ3JheS1saWdodGVyOiAjZWVlO1xuJGJyYW5kLWluZm86ICNkZWFkMDA7XG4kYnJhbmQtcHJpbWFyeTogI2IwMGIxZTtcbiRicmFuZC1kYW5nZXI6ICMzOTkzODM7XG4kY29sb3ItYTogI2IwMGIxZTtcbiRjb2xvci1iOiAjZmEwYWFhO1xuJGNvbG9yLWM6ICMzOTkzODM7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLzFfc2V0dGluZ3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLzZfY29tcG9uZW50cy9zaWRlYmFyXCI7XG5cbi50aW1ldGFibGUtYm9keSB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAkaXRlbS12ZXJ0aWNhbC1tYXJnaW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcblxuICAuaXRlbS1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgLml0ZW0tbGFiZWwge1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBmbGV4OiAxIDAgJHNpZGViYXItd2lkdGg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgY29sb3I6ICRncmF5LWJhc2U7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygjeyRpdGVtLXZlcnRpY2FsLXBhZGRpbmd9ICsgI3skaXRlbS12ZXJ0aWNhbC1tYXJnaW59ICsgMXB4KTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKCN7JGl0ZW0tdmVydGljYWwtcGFkZGluZ30gKyAjeyRpdGVtLXZlcnRpY2FsLW1hcmdpbn0gKyAxcHgpO1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICB9XG5cbiAgICAuaXRlbS1kaXNwbGF5IHtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZ3JheS1saWdodDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5pdGVtLWdyb3VwOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG5cbiAgLml0ZW0tZ3JvdXA6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWxpZ2h0ZXI7XG4gIH1cbn1cblxuLnRvZGF5LW1hcmtlciB7XG4gIHdpZHRoOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRicmFuZC1wcmltYXJ5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIHdoaXRlIDFweDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCB3aGl0ZSAxcHg7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTQwcHg7XG4gIGJvdHRvbTogMDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "LJd8": function LJd8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "BD7B");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "NOfU");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "NOfU": function NOfU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "RnhZ": function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "VNLd": function VNLd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgTimeChartComponent", function () {
        return NgTimeChartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _period__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../period */
      "b9cN");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../constants */
      "WPxx");
      /* harmony import */


      var _service_period_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../service/period.service */
      "+1IE");
      /* harmony import */


      var _service_year_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../service/year.service */
      "FyLx");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _time_table_body_time_table_body_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../time-table-body/time-table-body.component */
      "KLtZ");

      var _c0 = ["todayMarker"];

      function NgTimeChartComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgTimeChartComponent_div_4_Template_h3_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var currentYear_r5 = ctx.ngIf;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.changeYear(currentYear_r5 - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "< ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgTimeChartComponent_div_4_Template_h3_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var currentYear_r5 = ctx.ngIf;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.changeYear(currentYear_r5 + 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " >");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var currentYear_r5 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currentYear_r5);
        }
      }

      function NgTimeChartComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var month_r9 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", month_r9.days * ctx_r1.DAY_WIDTH, "px")("max-width", month_r9.days * ctx_r1.DAY_WIDTH, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", month_r9.startDate.format("MMMM YYYY"), " ");
        }
      }

      function NgTimeChartComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r2.precedingPeriodDaysBeforeFirstWeek$) * ctx_r2.DAY_WIDTH, "px");
        }
      }

      function NgTimeChartComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var week_r10 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", week_r10.days * ctx_r3.DAY_WIDTH, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", week_r10.startDate.isoWeek(), " )", week_r10.startDate.startOf("isoWeek").format("L"), "");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "today": a0
        };
      };

      function NgTimeChartComponent_ng_container_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r12.isToday(day_r11)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", day_r11.format("dd"), " ");
        }
      }

      function NgTimeChartComponent_ng_container_19_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", day_r11.format("dd"), " ");
        }
      }

      function NgTimeChartComponent_ng_container_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgTimeChartComponent_ng_container_19_div_1_Template, 3, 4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgTimeChartComponent_ng_container_19_ng_template_2_Template, 2, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var day_r11 = ctx.$implicit;

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isToday(day_r11))("ngIfElse", _r13);
        }
      }

      var moment = moment__WEBPACK_IMPORTED_MODULE_1__;

      var NgTimeChartComponent = /*#__PURE__*/function () {
        function NgTimeChartComponent(periodService, yearService) {
          var _this = this;

          _classCallCheck(this, NgTimeChartComponent);

          this.periodService = periodService;
          this.yearService = yearService;
          this.DAY_WIDTH = _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].DAY_WIDTH;
          this.yearChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.yearService.year$.subscribe(function (year) {
            return _this.yearChange.emit(year);
          });
          this._groups$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
          this.today = moment().hour(12);
          this.currentPeriod$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.periodService.period$, this.yearService.period$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                period = _ref6[0],
                year = _ref6[1];

            return period != null ? period : year;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (period) {
            return period.isValid();
          }));
          this.months$ = this.currentPeriod$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (period) {
            return NgTimeChartComponent.enumerateMonths(period);
          }));
          this.weeks$ = this.currentPeriod$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (period) {
            return NgTimeChartComponent.enumerateWeeks(period);
          }));
          this.days$ = this.currentPeriod$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (period) {
            return NgTimeChartComponent.enumerateDays(period);
          }));
          this.durationInDays$ = this.days$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (days) {
            return days.length;
          }));
          this.precedingPeriodDaysBeforeFirstWeek$ = this.currentPeriod$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (period) {
            return NgTimeChartComponent.getOldPeriodDaysBeforeFirstWeek(period);
          }));
          this.filteredGroups$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.currentPeriod$, this._groups$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                period = _ref8[0],
                groups = _ref8[1];

            return groups.filter(function (group) {
              return period.overlaps(group.duration);
            });
          }));
        }

        _createClass(NgTimeChartComponent, [{
          key: "groups",
          set: function set(value) {
            this._groups$.next(value);
          }
        }, {
          key: "startDate",
          get: function get() {
            return this.periodService.startDate;
          },
          set: function set(date) {
            this.periodService.startDate = date;
          }
        }, {
          key: "endDate",
          get: function get() {
            return this.periodService.endDate;
          },
          set: function set(date) {
            this.periodService.endDate = date;
          }
        }, {
          key: "currentYear$",
          get: function get() {
            return this.yearService.year$;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.scrollTodayIntoView();
          }
        }, {
          key: "isToday",
          value: function isToday(day) {
            return this.today.isSame(day, 'day');
          }
        }, {
          key: "changeYear",
          value: function changeYear(year) {
            this.yearService.year = year;
          }
        }, {
          key: "showYearSpinner$",
          value: function showYearSpinner$() {
            return this.periodService.isFullYear$;
          }
        }, {
          key: "scrollTodayIntoView",
          value: function scrollTodayIntoView() {
            if (!!this.todayMarker) {
              this.todayMarker.nativeElement.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
              });
            }
          }
        }], [{
          key: "getOldPeriodDaysBeforeFirstWeek",
          value: function getOldPeriodDaysBeforeFirstWeek(period) {
            if (!period.isValid()) {
              return 0;
            }

            if (period.startDate.isoWeekday() <= 4) {
              return 0;
            }

            var weekStart = period.startDate.clone().isoWeekday(1);

            if (!period.containsDate(weekStart)) {
              weekStart.add(1, 'week');
            }

            var difference = Math.ceil(weekStart.diff(period.startDate, 'days', true));
            return difference > 0 ? difference : 0;
          }
        }, {
          key: "enumerateMonths",
          value: function enumerateMonths(period) {
            if (!period) {
              return null;
            }

            function getMonthWithinPeriod(dayInMonth) {
              var fullMonth = new _period__WEBPACK_IMPORTED_MODULE_3__["Period"](dayInMonth.clone().startOf('month'), dayInMonth.clone().endOf('month'));
              return fullMonth.intersect(myPeriod);
            }

            function enumerateWithinPeriod(startDate) {
              var months = [];
              var current = startDate.clone();

              while (myPeriod.containsDate(current)) {
                months.push(getMonthWithinPeriod(current));
                current = current.clone().add(1, 'month');
              }

              return months;
            }

            var myPeriod = new _period__WEBPACK_IMPORTED_MODULE_3__["Period"](period.startDate.clone().hour(0), period.endDate.clone().hour(23));
            return enumerateWithinPeriod(period.startDate.clone());
          }
        }, {
          key: "enumerateWeeks",
          value: function enumerateWeeks(period) {
            function enumerate(currentDate, expanded) {
              if (currentDate.isSameOrBefore(period.endDate, 'day')) {
                var endDate = currentDate.clone().endOf('isoWeek');
                var startDate = currentDate.clone().startOf('isoWeek');
                var week = new _period__WEBPACK_IMPORTED_MODULE_3__["Period"](startDate, endDate);
                expanded.push(period.intersect(week));
                var advanceDate = currentDate.clone().add(1, 'week');
                enumerate(advanceDate, expanded);
              }

              return expanded;
            }

            function firstWeekInPeriod() {
              var date = period === null || period === void 0 ? void 0 : period.startDate.clone().isoWeekday(4);
              return period.containsDate(date) ? date : date.add(1, 'week');
            }

            return !period ? null : enumerate(firstWeekInPeriod(), []);
          }
        }, {
          key: "enumerateDays",
          value: function enumerateDays(period) {
            function enumerate(currentDate, expanded) {
              if (currentDate.isSameOrBefore(period.endDate, 'day')) {
                expanded.push(currentDate);
                var advanceDate = currentDate.clone().add(1, 'day');
                enumerate(advanceDate, expanded);
              }

              return expanded;
            }

            return !period ? null : enumerate(period.startDate.clone(), []);
          }
        }]);

        return NgTimeChartComponent;
      }();

      NgTimeChartComponent.ɵfac = function NgTimeChartComponent_Factory(t) {
        return new (t || NgTimeChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_period_service__WEBPACK_IMPORTED_MODULE_6__["PeriodService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_year_service__WEBPACK_IMPORTED_MODULE_7__["YearService"]));
      };

      NgTimeChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgTimeChartComponent,
        selectors: [["ng-time-chart"]],
        viewQuery: function NgTimeChartComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.todayMarker = _t.first);
          }
        },
        inputs: {
          groups: "groups",
          startDate: "startDate",
          endDate: "endDate",
          layoutStrategy: "layoutStrategy"
        },
        outputs: {
          yearChange: "yearChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_service_period_service__WEBPACK_IMPORTED_MODULE_6__["PeriodService"], _service_year_service__WEBPACK_IMPORTED_MODULE_7__["YearService"]])],
        decls: 25,
        vars: 36,
        consts: [[1, "timetable"], [1, "timetable-header"], [1, "year-selector", "label-bar"], [4, "ngIf"], [1, "calendar-header"], [1, "months"], ["class", "month", 3, "width", "max-width", 4, "ngFor", "ngForOf"], [1, "week-bar"], [1, "weeks"], ["class", "week-offset", 3, "width", 4, "ngIf"], ["class", "week", 3, "width", 4, "ngFor", "ngForOf"], [1, "days"], [4, "ngFor", "ngForOf"], [3, "groups", "today", "period", "durationInDays", "layoutStrategy"], [2, "display", "inline-block", "cursor", "pointer", 3, "click"], [2, "display", "inline-block"], [1, "month"], [1, "week-offset"], [1, "week"], ["class", "day today", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["normalDay", ""], [1, "day", "today", 3, "ngClass"], ["todayMarker", ""], [1, "day"]],
        template: function NgTimeChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgTimeChartComponent_div_4_Template, 7, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgTimeChartComponent_div_10_Template, 2, 5, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NgTimeChartComponent_div_14_Template, 2, 4, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NgTimeChartComponent_div_16_Template, 2, 4, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NgTimeChartComponent_ng_container_19_Template, 4, 2, "ng-container", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ng-time-table-body", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 14, ctx.durationInDays$) * ctx.DAY_WIDTH, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 16, ctx.showYearSpinner$()) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 18, ctx.currentYear$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 20, ctx.durationInDays$) * ctx.DAY_WIDTH, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 22, ctx.months$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 24, ctx.precedingPeriodDaysBeforeFirstWeek$) > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 26, ctx.weeks$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 28, ctx.days$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groups", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 30, ctx.filteredGroups$))("today", ctx.today)("period", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 32, ctx.currentPeriod$))("durationInDays", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 34, ctx.durationInDays$))("layoutStrategy", ctx.layoutStrategy);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _time_table_body_time_table_body_component__WEBPACK_IMPORTED_MODULE_9__["TimeTableBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
        styles: [".label-bar[_ngcontent-%COMP%] {\n  background-color: white;\n  z-index: 1000;\n  flex: 1 0 200px;\n  min-width: 200px;\n  max-width: 200px;\n}\n\n.day-width-1[_ngcontent-%COMP%] {\n  min-width: 20px;\n  max-width: 20px;\n}\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n\n.timetable[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow-x: auto;\n  overflow-y: auto;\n}\n\n.timetable-header[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 0;\n  margin-bottom: 0;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.timetable-header[_ngcontent-%COMP%]   .year-selector[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 70px;\n  max-height: 70px;\n  position: sticky;\n  left: 0;\n}\n\n.timetable-header[_ngcontent-%COMP%]   .year-selector[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\n.timetable-header[_ngcontent-%COMP%]   .calendar-header[_ngcontent-%COMP%] {\n  height: 70px;\n  max-height: 70px;\n  background-color: white;\n}\n\n.months[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n}\n\n.month[_ngcontent-%COMP%] {\n  border: solid 1px #888;\n  border-left-width: 0;\n  flex: auto;\n  box-sizing: border-box;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.month[_ngcontent-%COMP%]:first-child {\n  border-left-width: 1px;\n}\n\n.week-offset[_ngcontent-%COMP%] {\n  border-right: solid #888 1px;\n  box-sizing: border-box;\n}\n\n.weeks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n}\n\n.week[_ngcontent-%COMP%] {\n  border: 0 solid;\n  border-right-width: 1px;\n  text-align: center;\n  display: inline-block;\n  box-sizing: border-box;\n  font-size: 10px;\n}\n\n.week[_ngcontent-%COMP%]:first-child {\n  border-left-width: 1px;\n}\n\n.days[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.day[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border: solid 1px #888;\n  border-left-width: 0;\n  min-width: 20px;\n  display: inline-block;\n  text-align: center;\n  margin: 0;\n  font-size: 10px;\n}\n\n.day[_ngcontent-%COMP%]:first-child {\n  border-left-width: 1px;\n}\n\n.today[_ngcontent-%COMP%] {\n  background-color: #b00b1e;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy82X2NvbXBvbmVudHMvX3NpZGViYXIuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy8xX3NldHRpbmdzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25nLXRpbWUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvNV9vYmplY3RzL19kYXkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkNIYztFRElkLGdCQ0pjO0FDR2hCOztBQ0pBO0VBQ0UsZUZIVTtFRUlWLGVGSlU7QUNXWjs7QUFQQTtFQUNFLGlCQUFBO0FBVUY7O0FBUEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFOQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQVNGOztBQVBFO0VBQ0Usc0JBQUE7RUFDQSxZRHhCWTtFQ3lCWixnQkR6Qlk7RUMwQlosZ0JBQUE7RUFDQSxPQUFBO0FBU0o7O0FBUEk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBU047O0FBTEU7RUFDRSxZRHBDWTtFQ3FDWixnQkRyQ1k7RUNzQ1osdUJBQUE7QUFPSjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBTUY7O0FBSEE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSEE7RUFDRSxzQkFBQTtBQU1GOztBQUhBO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtBQU1GOztBQUhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFNRjs7QUFIQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFNRjs7QUFIQTtFQUNFLHNCQUFBO0FBTUY7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFIQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVEbkdVO0VDb0dWLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUhBO0VBQ0Usc0JBQUE7QUFNRjs7QUFIQTtFQUNFLHlCRHJHYztFQ3NHZCxrQkFBQTtBQU1GIiwiZmlsZSI6Im5nLXRpbWUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vMV9zZXR0aW5ncy92YXJpYWJsZXNcIjtcblxuLmxhYmVsLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBmbGV4OiAxIDAgJHNpZGViYXItd2lkdGg7XG4gIG1pbi13aWR0aDogJHNpZGViYXItd2lkdGg7XG4gIG1heC13aWR0aDogJHNpZGViYXItd2lkdGg7XG59XG4iLCIkZGF5LXdpZHRoOiAyMHB4O1xuJGl0ZW0tdmVydGljYWwtcGFkZGluZzogMnB4O1xuJGl0ZW0tdmVydGljYWwtbWFyZ2luOiA0cHg7XG4kc2lkZWJhci13aWR0aDogMjAwcHg7XG4kaGVhZGVyLWhlaWdodDogNzBweDtcbiRncmF5LWRhcms6ICM4ODg7XG4kZ3JheS1iYXNlOiAjYWFhO1xuJGdyYXktbGlnaHQ6ICNjY2M7XG4kZ3JheS1saWdodGVyOiAjZWVlO1xuJGJyYW5kLWluZm86ICNkZWFkMDA7XG4kYnJhbmQtcHJpbWFyeTogI2IwMGIxZTtcbiRicmFuZC1kYW5nZXI6ICMzOTkzODM7XG4kY29sb3ItYTogI2IwMGIxZTtcbiRjb2xvci1iOiAjZmEwYWFhO1xuJGNvbG9yLWM6ICMzOTkzODM7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLzFfc2V0dGluZ3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLzZfY29tcG9uZW50cy9zaWRlYmFyXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLzVfb2JqZWN0cy9kYXlcIjtcblxuOmhvc3R7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4udGltZXRhYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuXG4udGltZXRhYmxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xuXG4gIC55ZWFyLXNlbGVjdG9yIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG4gICAgbWF4LWhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBsZWZ0OiAwO1xuXG4gICAgaDMge1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5jYWxlbmRhci1oZWFkZXIge1xuICAgIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG4gICAgbWF4LWhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLm1vbnRocyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tb250aCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICRncmF5LWRhcms7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBmbGV4OiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb250aDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XG59XG5cbi53ZWVrLW9mZnNldCB7XG4gIGJvcmRlci1yaWdodDogc29saWQgJGdyYXktZGFyayAxcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi53ZWVrcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi53ZWVrIHtcbiAgYm9yZGVyOiAwIHNvbGlkO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLndlZWs6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xufVxuXG4uZGF5cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5kYXkge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IHNvbGlkIDFweCAkZ3JheS1kYXJrO1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgbWluLXdpZHRoOiAkZGF5LXdpZHRoO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5kYXk6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xufVxuXG4udG9kYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJhbmQtcHJpbWFyeTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIiwiQGltcG9ydCBcIi4uLzFfc2V0dGluZ3MvdmFyaWFibGVzXCI7XG5cbi5kYXktd2lkdGgtMSB7XG4gIG1pbi13aWR0aDogJGRheS13aWR0aDtcbiAgbWF4LXdpZHRoOiAkZGF5LXdpZHRoO1xufVxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "WPxx": function WPxx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Constants", function () {
        return Constants;
      });

      var Constants = function Constants() {
        _classCallCheck(this, Constants);
      };

      Constants.DAY_WIDTH = 20;
      Constants.SIDEBAR_WIDTH = 200;
      /***/
    },

    /***/
    "b9cN": function b9cN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Period", function () {
        return Period;
      });
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

      var moment = moment__WEBPACK_IMPORTED_MODULE_0__;

      var Period = /*#__PURE__*/function () {
        function Period(startDate, endDate) {
          _classCallCheck(this, Period);

          this._startDate = startDate === null || startDate === void 0 ? void 0 : startDate.clone();
          this._endDate = endDate === null || endDate === void 0 ? void 0 : endDate.clone();
        }

        _createClass(Period, [{
          key: "startDate",
          get: function get() {
            return this._startDate;
          }
        }, {
          key: "endDate",
          get: function get() {
            return this._endDate;
          }
        }, {
          key: "days",
          get: function get() {
            return Math.ceil(this.endDate.diff(this.startDate, 'days', true));
          }
        }, {
          key: "isoWeeks",
          get: function get() {
            function countThursdays(period) {
              var count = 0;
              var startDay = period.startDate.clone().isoWeekday(4);

              if (startDay.isBefore(period.startDate)) {
                startDay.add(7, 'days');
              }

              if (period.days >= 4) {
                while (startDay.isSameOrBefore(period.endDate, 'day')) {
                  count++;
                  startDay.add(7, 'days');
                }
              }

              return count;
            }

            var periods = Period.splitAtNewYear(this);
            return periods.map(function (p) {
              return countThursdays(p);
            }).reduceRight(function (previousValue, currentValue) {
              return previousValue + currentValue;
            });
          }
        }, {
          key: "isValid",
          value: function isValid() {
            return !!this.startDate && !!this.endDate && this.startDate.isBefore(this.endDate);
          }
        }, {
          key: "containsDate",
          value: function containsDate(date) {
            return date.isSameOrAfter(this.startDate) && date.isSameOrBefore(this.endDate);
          }
        }, {
          key: "toString",
          value: function toString() {
            return "Period (".concat(this.startDate, " - ").concat(this.endDate, ")");
          }
        }, {
          key: "overlaps",
          value: function overlaps(period) {
            return !!this.intersect(period);
          }
        }, {
          key: "intersect",
          value: function intersect(period) {
            var latestStart = Object(moment__WEBPACK_IMPORTED_MODULE_0__["max"])(this.startDate, period.startDate);
            var earliestEnd = Object(moment__WEBPACK_IMPORTED_MODULE_0__["min"])(this.endDate, period.endDate);

            if (!latestStart || !earliestEnd) {
              return null;
            }

            if (latestStart.isAfter(earliestEnd)) {
              return null;
            }

            return new Period(latestStart, earliestEnd);
          }
        }, {
          key: "equals",
          value: function equals(period) {
            return this.startDate.isSame(period.startDate) && this.endDate.isSame(period.endDate);
          }
        }], [{
          key: "splitAtNewYear",
          value: function splitAtNewYear(period) {
            var periods = [];

            if (period.endDate.year() > period.startDate.year()) {
              periods.push(new Period(period.startDate.clone(), moment("".concat(period.startDate.year(), "-12-31"))));
              periods.push.apply(periods, _toConsumableArray(Period.splitAtNewYear(new Period(moment("".concat(period.endDate.year(), "-01-01")), period.endDate.clone()))));
            } else {
              periods.push(period);
            }

            return periods;
          }
        }, {
          key: "forYear",
          value: function forYear(year) {
            var midYear = moment("".concat(year, "-06-01"));
            return new Period(midYear.clone().startOf('year'), midYear.clone().endOf('year'));
          }
        }]);

        return Period;
      }();
      /***/

    },

    /***/
    "bZvi": function bZvi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TiledLayoutService", function () {
        return TiledLayoutService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TiledLayoutService = /*#__PURE__*/function () {
        function TiledLayoutService() {
          _classCallCheck(this, TiledLayoutService);
        }
        /**
         * Tries to layout items in the most compact way
         * @param items The {@link Item}s to lay out.
         */


        _createClass(TiledLayoutService, [{
          key: "doLayout",
          value: function doLayout(items) {
            var itemOrder = new ItemOrder();
            var sorted = items.sort(function (a, b) {
              return a.startTime.diff(b.startTime);
            });
            sorted.forEach(function (item) {
              return itemOrder.add(item);
            });
            return itemOrder.queues;
          }
        }]);

        return TiledLayoutService;
      }();

      TiledLayoutService.ɵfac = function TiledLayoutService_Factory(t) {
        return new (t || TiledLayoutService)();
      };

      TiledLayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TiledLayoutService,
        factory: TiledLayoutService.ɵfac,
        providedIn: 'root'
      });

      var ItemOrder = /*#__PURE__*/function () {
        function ItemOrder() {
          _classCallCheck(this, ItemOrder);

          this._queues = [];
        }

        _createClass(ItemOrder, [{
          key: "queues",
          get: function get() {
            return this._queues;
          }
        }, {
          key: "add",
          value: function add(item) {
            this.getFreeQueue(ItemOrder.getStartDate(item)).push(item);
          }
        }, {
          key: "getFreeQueue",
          value: function getFreeQueue(date) {
            if (this._queues.length === 0) {
              return this.createNewSubQueue();
            }

            var queuesWithFreeSpace = this._queues.filter(function (queue) {
              return ItemOrder.getEndDate(queue[queue.length - 1]).isBefore(date);
            });

            if (queuesWithFreeSpace.length > 0) {
              return queuesWithFreeSpace[0];
            }

            return this.createNewSubQueue();
          }
        }, {
          key: "createNewSubQueue",
          value: function createNewSubQueue() {
            var myQueue = [];

            this._queues.push(myQueue);

            return myQueue;
          }
        }], [{
          key: "getStartDate",
          value: function getStartDate(item) {
            return item.startTime.clone().startOf('day');
          }
        }, {
          key: "getEndDate",
          value: function getEndDate(item) {
            return item.endTime.clone().endOf('day');
          }
        }]);

        return ItemOrder;
      }();
      /***/

    },

    /***/
    "cobL": function cobL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var moment_locale_de_ch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment/locale/de-ch */
      "u3GI");
      /* harmony import */


      var moment_locale_de_ch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_locale_de_ch__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../ng-time-chart/src/lib/group */
      "jQxn");
      /* harmony import */


      var _ng_time_chart_src_lib_layout_layout_strategy_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../ng-time-chart/src/lib/layout/layout-strategy.enum */
      "lC/2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_time_chart_src_lib_components_chart_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../ng-time-chart/src/lib/components/chart/ng-time-chart.component */
      "VNLd");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var moment = moment__WEBPACK_IMPORTED_MODULE_0__;

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.currentYear = moment().year();
          this.title = 'NgTimeChartLibrary';
          this.startDate = moment("".concat(this.currentYear, "-05-01"));
          this.endDate = moment("".concat(this.currentYear, "-08-31"));
          this.tiledLayoutStrategy = _ng_time_chart_src_lib_layout_layout_strategy_enum__WEBPACK_IMPORTED_MODULE_3__["LayoutStrategy"].Tiled;
          this.stackedLayoutStrategy = _ng_time_chart_src_lib_layout_layout_strategy_enum__WEBPACK_IMPORTED_MODULE_3__["LayoutStrategy"].Stacked;
          moment.locale('de-ch');
          this.groups = [new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_2__["Group"]('Testgroup 0', [{
            name: 'Testitem 0',
            startTime: moment("".concat(this.currentYear, "-02-12")),
            endTime: moment("".concat(this.currentYear, "-03-23")),
            "class": 'type-b'
          }, {
            name: 'Testitem 1',
            startTime: moment("".concat(this.currentYear, "-03-25")),
            endTime: moment("".concat(this.currentYear, "-03-30T01:30")),
            "class": 'type-a',
            details: 'More information of Testitem 1',
            onClick: function onClick() {
              return alert('I was clicked 😊');
            }
          }, {
            name: 'Testitem 2',
            startTime: moment("".concat(this.currentYear, "-04-01")),
            endTime: moment("".concat(this.currentYear, "-04-07")),
            "class": 'type-b'
          }, {
            name: 'Testitem 3',
            startTime: moment("".concat(this.currentYear, "-04-08")),
            endTime: moment("".concat(this.currentYear, "-04-12")),
            "class": 'type-b'
          }, {
            name: 'Testitem 4',
            startTime: moment("".concat(this.currentYear, "-04-02")),
            endTime: moment("".concat(this.currentYear, "-04-05")),
            "class": 'type-b',
            details: 'More information of Testitem 4. A lot of text to show how this is handled.'
          }].sort(function (a, b) {
            return moment.duration(a.startTime.diff(b.startTime)).asSeconds();
          }), function () {
            return alert('Group clicked');
          }), new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_2__["Group"]('Testgroup 1', [{
            name: 'Testitem 0',
            startTime: moment("".concat(this.currentYear, "-02-12")),
            endTime: moment("".concat(this.currentYear, "-05-23")),
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            "class": 'type-c'
          }, {
            name: 'Testitem 1',
            startTime: moment("".concat(this.currentYear, "-04-11")),
            endTime: moment("".concat(this.currentYear, "-04-28T00:30")),
            details: 'Oh, there\'s a monkey in my pocket, And he\'s stealing all my change. His stare is blank and glassy, I suspect he\'s deranged 🐒',
            "class": 'type-c',
            dates: [moment("".concat(this.currentYear, "-04-11")), moment("".concat(this.currentYear, "-04-12")), moment("".concat(this.currentYear, "-04-13")), moment("".concat(this.currentYear, "-04-14")), moment("".concat(this.currentYear, "-04-15")), moment("".concat(this.currentYear, "-04-16")), moment("".concat(this.currentYear, "-04-17")), moment("".concat(this.currentYear, "-04-18")), moment("".concat(this.currentYear, "-04-19")), moment("".concat(this.currentYear, "-04-20")), moment("".concat(this.currentYear, "-04-21")), moment("".concat(this.currentYear, "-04-22")), moment("".concat(this.currentYear, "-04-23")), moment("".concat(this.currentYear, "-04-24")), moment("".concat(this.currentYear, "-04-25")), moment("".concat(this.currentYear, "-04-26")), moment("".concat(this.currentYear, "-04-27")), moment("".concat(this.currentYear, "-04-28"))]
          }, {
            name: 'Testitem 2',
            startTime: moment("".concat(this.currentYear, "-10-08T22:00")),
            endTime: moment("".concat(this.currentYear, "-10-10T04:30")),
            "class": 'type-b',
            dates: [moment("".concat(this.currentYear, "-10-08")), moment("".concat(this.currentYear, "-10-09")), moment("".concat(this.currentYear, "-10-10"))]
          }, {
            name: 'Testitem 3',
            startTime: moment("".concat(this.currentYear, "-10-11T00:01")),
            endTime: moment("".concat(this.currentYear, "-10-12T05:00")),
            "class": 'type-b',
            dates: [moment("".concat(this.currentYear, "-10-11")), moment("".concat(this.currentYear, "-10-12"))]
          }].sort(function (a, b) {
            return moment.duration(a.startTime.diff(b.startTime)).asSeconds();
          }), function () {
            return console.log('clicked');
          }), new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_2__["Group"]('Testgroup 2', [{
            name: 'Testitem 0',
            startTime: moment("".concat(this.currentYear, "-06-12T08:23")),
            endTime: moment("".concat(this.currentYear, "-07-01T06:23"))
          }, {
            name: 'Testitem 1',
            startTime: moment("".concat(this.currentYear - 1, "-08-11")),
            endTime: moment("".concat(this.currentYear, "-09-02"))
          }, {
            name: 'Testitem 3',
            startTime: moment("".concat(this.currentYear, "-07-01T08:23")),
            endTime: moment("".concat(this.currentYear, "-07-12T23:23"))
          }].sort(function (a, b) {
            return moment.duration(a.startTime.diff(b.startTime)).asSeconds();
          }), function () {
            return console.log('clicked');
          }), new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_2__["Group"]('Testgroup 3', [{
            name: 'Testitem 0',
            startTime: moment("".concat(this.currentYear, "-09-12")),
            endTime: moment("".concat(this.currentYear, "-10-23"))
          }, {
            name: 'Testitem 1',
            startTime: moment("".concat(this.currentYear, "-10-11")),
            endTime: moment("".concat(this.currentYear, "-11-02"))
          }].sort(function (a, b) {
            return moment.duration(a.startTime.diff(b.startTime)).asSeconds();
          }), function () {
            return console.log('clicked');
          }), new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_2__["Group"]('Testgroup 4', [{
            name: 'Testitem 0',
            startTime: moment("".concat(this.currentYear, "-02-12")),
            endTime: moment("".concat(this.currentYear, "-05-23"))
          }, {
            name: 'Testitem 1',
            startTime: moment("".concat(this.currentYear, "-12-11")),
            endTime: moment("".concat(this.currentYear + 1, "-03-02"))
          }].sort(function (a, b) {
            return moment.duration(a.startTime.diff(b.startTime)).asSeconds();
          }), function () {
            return console.log('clicked');
          }), new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_2__["Group"]('Testgroup 5', [{
            name: 'Testitem 0',
            startTime: moment("".concat(this.currentYear, "-03-12")),
            endTime: moment("".concat(this.currentYear, "-03-23"))
          }, {
            name: 'Testitem 1',
            startTime: moment("".concat(this.currentYear, "-03-11")),
            endTime: moment("".concat(this.currentYear, "-04-02"))
          }, {
            name: 'Testitem 2',
            startTime: moment("".concat(this.currentYear, "-04-01")),
            endTime: moment("".concat(this.currentYear, "-04-04"))
          }].sort(function (a, b) {
            return moment.duration(a.startTime.diff(b.startTime)).asSeconds();
          }), function () {
            return console.log('clicked');
          }), new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_2__["Group"]('Testgroup 6', [{
            name: 'Testitem 0',
            startTime: moment("".concat(this.currentYear, "-06-12")),
            endTime: moment("".concat(this.currentYear, "-07-23")),
            "class": 'type-c'
          }, {
            name: 'Testitem 1',
            startTime: moment("".concat(this.currentYear - 1, "-08-11")),
            endTime: moment("".concat(this.currentYear, "-09-02")),
            "class": 'type-a'
          }].sort(function (a, b) {
            return moment.duration(a.startTime.diff(b.startTime)).asSeconds();
          }), function () {
            return console.log('clicked');
          }), new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_2__["Group"]('Testgroup 7', [{
            name: 'Testitem 0',
            startTime: moment("".concat(this.currentYear - 1, "-09-12")),
            endTime: moment("".concat(this.currentYear - 1, "-10-23")),
            "class": 'my-class-a'
          }, {
            name: 'Testitem 1',
            startTime: moment("".concat(this.currentYear - 2, "-10-11")),
            endTime: moment("".concat(this.currentYear - 1, "-11-02")),
            "class": 'my-class-a'
          }].sort(function (a, b) {
            return moment.duration(a.startTime.diff(b.startTime)).asSeconds();
          }), function () {
            return console.log('clicked');
          }), new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_2__["Group"]('Testgroup 8', [{
            name: 'Testitem 0',
            startTime: moment("".concat(this.currentYear, "-02-12")),
            endTime: moment("".concat(this.currentYear, "-04-23"))
          }, {
            name: 'Testitem 1',
            startTime: moment("".concat(this.currentYear, "-05-11")),
            endTime: moment("".concat(this.currentYear, "-06-02"))
          }].sort(function (a, b) {
            return moment.duration(a.startTime.diff(b.startTime)).asSeconds();
          }), function () {
            return console.log('clicked');
          }), new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_2__["Group"]('Testgroup 9', [{
            name: 'Testitem 0',
            startTime: moment("".concat(this.currentYear, "-02-12")),
            endTime: moment("".concat(this.currentYear, "-05-23")),
            dates: [moment("".concat(this.currentYear, "-04-11")), moment("".concat(this.currentYear, "-04-12"))]
          }, {
            name: 'Testitem 1',
            startTime: moment("".concat(this.currentYear, "-04-11")),
            endTime: moment("".concat(this.currentYear, "-05-02"))
          }].sort(function (a, b) {
            return moment.duration(a.startTime.diff(b.startTime)).asSeconds();
          }), function () {
            return console.log('clicked');
          }), new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_2__["Group"]('Testgroup 10', [{
            name: 'Testitem 0',
            startTime: moment("".concat(this.currentYear, "-06-12")),
            endTime: moment("".concat(this.currentYear, "-07-23")),
            "class": 'type-a',
            dates: [moment("".concat(this.currentYear, "-06-18")), moment("".concat(this.currentYear, "-06-19")), moment("".concat(this.currentYear, "-06-23")), moment("".concat(this.currentYear, "-06-24"))]
          }, {
            name: 'Testitem 1',
            startTime: moment("".concat(this.currentYear - 1, "-08-11")),
            endTime: moment("".concat(this.currentYear, "-06-02")),
            "class": 'type-a'
          }].sort(function (a, b) {
            return moment.duration(a.startTime.diff(b.startTime)).asSeconds();
          }), function () {
            return console.log('clicked');
          }), new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_2__["Group"]('Testgroup 11', [{
            name: 'Testitem 0',
            startTime: moment("".concat(this.currentYear, "-09-12")),
            endTime: moment("".concat(this.currentYear + 1, "-01-23"))
          }, {
            name: 'Testitem 1',
            startTime: moment("".concat(this.currentYear - 1, "-10-11")),
            endTime: moment("".concat(this.currentYear, "-11-02"))
          }].sort(function (a, b) {
            return moment.duration(a.startTime.diff(b.startTime)).asSeconds();
          }), function () {
            return console.log('clicked');
          }), new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_2__["Group"]('Testgroup 12', [{
            name: 'Testitem 1',
            startTime: moment("".concat(this.currentYear - 1, "-09-01T20:30:00")),
            endTime: moment("".concat(this.currentYear + 1, "-12-12T04:30:00"))
          }].sort(function (a, b) {
            return moment.duration(a.startTime.diff(b.startTime)).asSeconds();
          }), function () {
            return console.log('clicked');
          }), new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_2__["Group"]('Testgroup 13', [{
            name: 'Testitem 1',
            startTime: moment("".concat(this.currentYear - 1, "-09-01T20:30:00")),
            endTime: moment("".concat(this.currentYear - 1, "-12-12T04:30:00"))
          }, {
            name: 'Testitem 2',
            startTime: moment("".concat(this.currentYear, "-09-01T20:30:00")),
            endTime: moment("".concat(this.currentYear, "-12-12T04:30:00"))
          }, {
            name: 'Testitem 3',
            startTime: moment("".concat(this.currentYear + 1, "-09-01T20:30:00")),
            endTime: moment("".concat(this.currentYear + 1, "-12-12T04:30:00"))
          }].sort(function (a, b) {
            return moment.duration(a.startTime.diff(b.startTime)).asSeconds();
          }), function () {
            return console.log('clicked');
          })];
        }

        _createClass(AppComponent, [{
          key: "setStartDate",
          value: function setStartDate(value) {
            this.startDate = !!value && value.length > 0 ? moment(value) : null;
          }
        }, {
          key: "setEndDate",
          value: function setEndDate(value) {
            this.endDate = !!value && value.length > 0 ? moment(value) : null;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["ng-tl-root"]],
        decls: 23,
        vars: 7,
        consts: [[1, "content"], [2, "text-align", "center"], [1, "calendar-showcase"], [3, "groups", "layoutStrategy"], [1, "calendar-showcase", 2, "margin-top", "100px"], [1, "date-input"], ["for", "start-date"], ["type", "date", "id", "start-date", "name", "start-date", "value", "2020-05-01", 3, "blur"], ["start_date", ""], ["for", "end-date"], ["type", "date", "id", "end-date", "name", "end-date", "value", "2020-08-31", 3, "blur"], ["end_date", ""], [3, "groups", "startDate", "endDate", "layoutStrategy"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Calendar with year selector");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ng-time-chart", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Calendar with dynamic length");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Start date:");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function AppComponent_Template_input_blur_14_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);

              return ctx.setStartDate(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "End date:");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function AppComponent_Template_input_blur_19_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20);

              return ctx.setEndDate(_r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "ng-time-chart", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Welcome to ", ctx.title, "! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("groups", ctx.groups)("layoutStrategy", ctx.tiledLayoutStrategy);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("groups", ctx.groups)("startDate", ctx.startDate)("endDate", ctx.endDate)("layoutStrategy", ctx.stackedLayoutStrategy);
          }
        },
        directives: [_ng_time_chart_src_lib_components_chart_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_5__["NgTimeChartComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]],
        styles: [".calendar-showcase[_ngcontent-%COMP%] {\n  max-height: 400px;\n  display: flex;\n  flex-direction: column;\n}\n.calendar-showcase[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.calendar-showcase[_ngcontent-%COMP%]   ng-time-chart[_ngcontent-%COMP%] {\n  flex: 3;\n}\n.date-input[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 2em;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLE9BQUE7QUFDSjtBQUVFO0VBQ0UsT0FBQTtBQUFKO0FBSUE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7QUFERiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsZW5kYXItc2hvd2Nhc2Uge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBoMSB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIG5nLXRpbWUtY2hhcnQge1xuICAgIGZsZXg6IDM7XG4gIH1cbn1cblxuLmRhdGUtaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDRlbTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "fkOk": function fkOk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemGroupingComponent", function () {
        return ItemGroupingComponent;
      });
      /* harmony import */


      var _period__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../period */
      "b9cN");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../item/item.component */
      "zvhu");

      function ItemGroupingComponent_div_0_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ng-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("period", ctx_r1.period)("item", item_r2);
        }
      }

      function ItemGroupingComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ItemGroupingComponent_div_0_ng_container_2_Template, 2, 2, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.itemGrouping);
        }
      }

      var ItemGroupingComponent = /*#__PURE__*/function () {
        function ItemGroupingComponent() {
          _classCallCheck(this, ItemGroupingComponent);
        }

        _createClass(ItemGroupingComponent, [{
          key: "isInPeriod",
          value: function isInPeriod(time) {
            return this.period.containsDate(time);
          }
        }, {
          key: "open",
          value: function open(item) {
            var _a;

            (_a = item.onClick) === null || _a === void 0 ? void 0 : _a.apply(null);
          }
        }, {
          key: "visibleInPeriod",
          value: function visibleInPeriod(itemGrouping) {
            if (!itemGrouping || itemGrouping.length === 0) {
              return false;
            }

            var earliestDate = Object(moment__WEBPACK_IMPORTED_MODULE_1__["min"])(itemGrouping.map(function (item) {
              return item.startTime;
            }));
            var latestDate = Object(moment__WEBPACK_IMPORTED_MODULE_1__["max"])(itemGrouping.map(function (item) {
              return item.endTime;
            }));
            var groupingPeriod = new _period__WEBPACK_IMPORTED_MODULE_0__["Period"](earliestDate, latestDate);
            return this.isInPeriod(earliestDate) || this.isInPeriod(latestDate) || groupingPeriod.containsDate(this.period.startDate);
          }
        }]);

        return ItemGroupingComponent;
      }();

      ItemGroupingComponent.ɵfac = function ItemGroupingComponent_Factory(t) {
        return new (t || ItemGroupingComponent)();
      };

      ItemGroupingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ItemGroupingComponent,
        selectors: [["ng-item-grouping"]],
        inputs: {
          period: "period",
          itemGrouping: "itemGrouping"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "item-grouping", 4, "ngIf"], [1, "item-grouping"], [1, "items"], [4, "ngFor", "ngForOf"], [3, "period", "item"]],
        template: function ItemGroupingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ItemGroupingComponent_div_0_Template, 3, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.visibleInPeriod(ctx.itemGrouping));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _item_item_component__WEBPACK_IMPORTED_MODULE_4__["ItemComponent"]],
        styles: [".day-width-1[_ngcontent-%COMP%] {\n  min-width: 20px;\n  max-width: 20px;\n}\n\n.label-bar[_ngcontent-%COMP%] {\n  background-color: white;\n  z-index: 1000;\n  flex: 1 0 200px;\n  min-width: 200px;\n  max-width: 200px;\n}\n\n.item-grouping[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.item-grouping[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  display: block;\n  height: 2.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy81X29iamVjdHMvX2RheS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLzFfc2V0dGluZ3MvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vaXRlbS1ncm91cGluZy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy82X2NvbXBvbmVudHMvX3NpZGViYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVDSFU7RURJVixlQ0pVO0FDR1o7O0FDREE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JGSGM7RUVJZCxnQkZKYztBQ1FoQjs7QUFQQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVVGOztBQVJFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUFVSiIsImZpbGUiOiJpdGVtLWdyb3VwaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLzFfc2V0dGluZ3MvdmFyaWFibGVzXCI7XG5cbi5kYXktd2lkdGgtMSB7XG4gIG1pbi13aWR0aDogJGRheS13aWR0aDtcbiAgbWF4LXdpZHRoOiAkZGF5LXdpZHRoO1xufVxuIiwiJGRheS13aWR0aDogMjBweDtcbiRpdGVtLXZlcnRpY2FsLXBhZGRpbmc6IDJweDtcbiRpdGVtLXZlcnRpY2FsLW1hcmdpbjogNHB4O1xuJHNpZGViYXItd2lkdGg6IDIwMHB4O1xuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG4kZ3JheS1kYXJrOiAjODg4O1xuJGdyYXktYmFzZTogI2FhYTtcbiRncmF5LWxpZ2h0OiAjY2NjO1xuJGdyYXktbGlnaHRlcjogI2VlZTtcbiRicmFuZC1pbmZvOiAjZGVhZDAwO1xuJGJyYW5kLXByaW1hcnk6ICNiMDBiMWU7XG4kYnJhbmQtZGFuZ2VyOiAjMzk5MzgzO1xuJGNvbG9yLWE6ICNiMDBiMWU7XG4kY29sb3ItYjogI2ZhMGFhYTtcbiRjb2xvci1jOiAjMzk5MzgzO1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy8xX3NldHRpbmdzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy81X29iamVjdHMvZGF5XCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLzZfY29tcG9uZW50cy9zaWRlYmFyXCI7XG5cbi5pdGVtLWdyb3VwaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAuaXRlbXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMi41ZW07XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8xX3NldHRpbmdzL3ZhcmlhYmxlc1wiO1xuXG4ubGFiZWwtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGZsZXg6IDEgMCAkc2lkZWJhci13aWR0aDtcbiAgbWluLXdpZHRoOiAkc2lkZWJhci13aWR0aDtcbiAgbWF4LXdpZHRoOiAkc2lkZWJhci13aWR0aDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "jQxn": function jQxn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Group", function () {
        return Group;
      });
      /* harmony import */


      var _period__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./period */
      "b9cN");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);

      var moment = moment__WEBPACK_IMPORTED_MODULE_1__;

      var Group = /*#__PURE__*/function () {
        function Group(name, items) {
          var onClick = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

          _classCallCheck(this, Group);

          this.name = name;
          this.items = items;
          this.duration = Group.calculateDuration(items);
          this.onClick = onClick;
        }

        _createClass(Group, null, [{
          key: "calculateDuration",
          value: function calculateDuration(items) {
            var startDate = moment.min(items.map(function (item) {
              return item.startTime;
            }));
            var endDate = moment.max(items.map(function (item) {
              return item.endTime;
            }));

            if (!startDate || !endDate) {
              return null;
            }

            return new _period__WEBPACK_IMPORTED_MODULE_0__["Period"](startDate, endDate);
          }
        }]);

        return Group;
      }();
      /***/

    },

    /***/
    "lC/2": function lC2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutStrategy", function () {
        return LayoutStrategy;
      });

      var LayoutStrategy;

      (function (LayoutStrategy) {
        /**
         * Stack items one on top of the other
         */
        LayoutStrategy[LayoutStrategy["Stacked"] = 0] = "Stacked";
        /**
         * Try to tile items if their start and end dates do not overlap
         */

        LayoutStrategy[LayoutStrategy["Tiled"] = 1] = "Tiled";
      })(LayoutStrategy || (LayoutStrategy = {}));
      /***/

    },

    /***/
    "q2u/": function q2u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zn8P": function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zvhu": function zvhu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemComponent", function () {
        return ItemComponent;
      });
      /* harmony import */


      var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../constants */
      "WPxx");
      /* harmony import */


      var _period__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../period */
      "b9cN");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_time_chart_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../pipes/time-chart-date-formatter.pipe */
      "94P5");

      function ItemComponent_div_0_ng_container_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("left", ctx_r4.getDaysSince(ctx_r4.item.startTime, day_r3) * ctx_r4.DAY_WIDTH, "px");
        }
      }

      function ItemComponent_div_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ItemComponent_div_0_ng_container_1_div_1_Template, 2, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var day_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isInPeriod(day_r3));
        }
      }

      function ItemComponent_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.item.details);
        }
      }

      function ItemComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ItemComponent_div_0_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r6.open(ctx_r6.item);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ItemComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "timeChartDateFormatter");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "timeChartDateFormatter");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ItemComponent_div_0_div_6_Template, 3, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("item ", ctx_r0.item["class"], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("left", ctx_r0.getDayOfPeriod(ctx_r0.item.startTime) * ctx_r0.DAY_WIDTH + ctx_r0.SIDEBAR_WIDTH, "px")("min-width", ctx_r0.getDuration(ctx_r0.item) * ctx_r0.DAY_WIDTH, "px")("max-width", ctx_r0.getDuration(ctx_r0.item) * ctx_r0.DAY_WIDTH, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("open-left", ctx_r0.isNotInPeriod(ctx_r0.item.startTime))("open-right", ctx_r0.isNotInPeriod(ctx_r0.item.endTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.item.dates);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", ctx_r0.item.name, " (", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 18, ctx_r0.item.startTime), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 20, ctx_r0.item.endTime), ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.item.details);
        }
      }

      var moment = moment__WEBPACK_IMPORTED_MODULE_2__;

      var ItemComponent = /*#__PURE__*/function () {
        function ItemComponent() {
          _classCallCheck(this, ItemComponent);

          this.DAY_WIDTH = _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].DAY_WIDTH;
          this.SIDEBAR_WIDTH = _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].SIDEBAR_WIDTH;
        }

        _createClass(ItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "isVisible",
          value: function isVisible(item) {
            return this.isInPeriod(item.startTime) || this.isInPeriod(item.endTime) || new _period__WEBPACK_IMPORTED_MODULE_1__["Period"](item.startTime, item.endTime).containsDate(this.period.startDate);
          }
        }, {
          key: "isInPeriod",
          value: function isInPeriod(time) {
            return this.period.containsDate(time);
          }
        }, {
          key: "getDayOfPeriod",
          value: function getDayOfPeriod(date) {
            if (!this.period.containsDate(date)) {
              return 0;
            }

            return Math.floor(date.diff(this.period.startDate, 'days', true));
          }
        }, {
          key: "getDuration",
          value: function getDuration(item) {
            var startDate = this.getStartDateInCurrentPeriod(item.startTime).startOf('day');
            var endDate = this.getEndDateCurrentPeriod(item.endTime).endOf('day');
            return Math.ceil(endDate.diff(startDate, 'days', true));
          }
        }, {
          key: "isNotInPeriod",
          value: function isNotInPeriod(time) {
            return !this.period.containsDate(time);
          }
        }, {
          key: "getDaysSince",
          value: function getDaysSince(referenceDate, date) {
            var refDate = this.getStartDateInCurrentPeriod(moment(referenceDate)).startOf('day');
            var myDate = this.getStartDateInCurrentPeriod(moment(date)).startOf('day');
            return Math.ceil(myDate.diff(moment(refDate), 'days', true));
          }
        }, {
          key: "open",
          value: function open(item) {
            var _a;

            (_a = item.onClick) === null || _a === void 0 ? void 0 : _a.apply(null);
          }
        }, {
          key: "getStartDateInCurrentPeriod",
          value: function getStartDateInCurrentPeriod(startDate) {
            var date = startDate.clone();

            if (date.isBefore(this.period.startDate)) {
              return this.period.startDate.clone();
            }

            return date;
          }
        }, {
          key: "getEndDateCurrentPeriod",
          value: function getEndDateCurrentPeriod(endDate) {
            var date = endDate.clone();

            if (date.isAfter(this.period.endDate)) {
              return this.period.endDate.clone();
            }

            return date;
          }
        }]);

        return ItemComponent;
      }();

      ItemComponent.ɵfac = function ItemComponent_Factory(t) {
        return new (t || ItemComponent)();
      };

      ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: ItemComponent,
        selectors: [["ng-item"]],
        inputs: {
          period: "period",
          item: "item"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "class", "left", "minWidth", "maxWidth", "open-left", "open-right", "click", 4, "ngIf"], [3, "click"], [4, "ngFor", "ngForOf"], [1, "blockade-title"], ["class", "blockade-details", 4, "ngIf"], ["class", "blockade-day day-width-1", 3, "left", 4, "ngIf"], [1, "blockade-day", "day-width-1"], [1, "blockade-details"]],
        template: function ItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ItemComponent_div_0_Template, 7, 22, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isVisible(ctx.item));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        pipes: [_pipes_time_chart_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeChartDateFormatterPipe"]],
        styles: [".day-width-1[_ngcontent-%COMP%] {\n  min-width: 20px;\n  max-width: 20px;\n}\n\n.item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  border-radius: 10px;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin: 4px 0;\n  transition: 0.5s;\n  display: inline-block;\n}\n\n.item[_ngcontent-%COMP%]   .blockade-title[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.item[_ngcontent-%COMP%]   .blockade-details[_ngcontent-%COMP%] {\n  display: none;\n  position: relative;\n}\n\n.item[_ngcontent-%COMP%]:hover {\n  filter: brightness(110%);\n  transform: scaleY(1.1);\n  max-width: unset !important;\n  z-index: 999;\n  padding-left: 8px;\n  padding-right: 8px;\n  transition: all ease-in-out 0.2s;\n  opacity: 0.95;\n}\n\n.item[_ngcontent-%COMP%]:hover   .blockade-details[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: normal;\n  max-width: 40em;\n  white-space: normal;\n  margin-top: 8px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n}\n\n.item[_ngcontent-%COMP%]:hover   .blockade-day[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.type-a[_ngcontent-%COMP%] {\n  border-color: #b00b1e;\n  background-color: #f77786;\n  color: white;\n}\n\n.type-a[_ngcontent-%COMP%]   .blockade-day[_ngcontent-%COMP%] {\n  background-color: #b00b1e;\n}\n\n.type-b[_ngcontent-%COMP%] {\n  border-color: #fa0aaa;\n  background-color: #feb9e7;\n}\n\n.type-b[_ngcontent-%COMP%]   .blockade-day[_ngcontent-%COMP%] {\n  background-color: #fa0aaa;\n}\n\n.type-c[_ngcontent-%COMP%] {\n  border-color: #399383;\n  background-color: #a3dbd1;\n}\n\n.type-c[_ngcontent-%COMP%]   .blockade-day[_ngcontent-%COMP%] {\n  background-color: #399383;\n}\n\n.blockade-day[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  margin-top: -2px;\n  height: 100%;\n}\n\n.open-left[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.open-right[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy81X29iamVjdHMvX2RheS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLzFfc2V0dGluZ3MvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVDSFU7RURJVixlQ0pVO0FDR1o7O0FBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JEYnNCO0VDY3RCLG1CRGRzQjtFQ2V0QixhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUdGOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBR0o7O0FBQ0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFHQTtFQUNFLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FBQUY7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0FBREo7O0FBS0E7RUFDRSxxQkRoRFE7RUNpRFIseUJBQUE7RUFDQSxZQUFBO0FBRkY7O0FBSUU7RUFDRSx5QkRyRE07QUNtRFY7O0FBTUE7RUFDRSxxQkR6RFE7RUMwRFIseUJBQUE7QUFIRjs7QUFLRTtFQUNFLHlCRDdETTtBQzBEVjs7QUFPQTtFQUNFLHFCRGpFUTtFQ2tFUix5QkFBQTtBQUpGOztBQU1FO0VBQ0UseUJEckVNO0FDaUVWOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQUxGOztBQVFBO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtBQUxGIiwiZmlsZSI6Iml0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vMV9zZXR0aW5ncy92YXJpYWJsZXNcIjtcblxuLmRheS13aWR0aC0xIHtcbiAgbWluLXdpZHRoOiAkZGF5LXdpZHRoO1xuICBtYXgtd2lkdGg6ICRkYXktd2lkdGg7XG59XG4iLCIkZGF5LXdpZHRoOiAyMHB4O1xuJGl0ZW0tdmVydGljYWwtcGFkZGluZzogMnB4O1xuJGl0ZW0tdmVydGljYWwtbWFyZ2luOiA0cHg7XG4kc2lkZWJhci13aWR0aDogMjAwcHg7XG4kaGVhZGVyLWhlaWdodDogNzBweDtcbiRncmF5LWRhcms6ICM4ODg7XG4kZ3JheS1iYXNlOiAjYWFhO1xuJGdyYXktbGlnaHQ6ICNjY2M7XG4kZ3JheS1saWdodGVyOiAjZWVlO1xuJGJyYW5kLWluZm86ICNkZWFkMDA7XG4kYnJhbmQtcHJpbWFyeTogI2IwMGIxZTtcbiRicmFuZC1kYW5nZXI6ICMzOTkzODM7XG4kY29sb3ItYTogI2IwMGIxZTtcbiRjb2xvci1iOiAjZmEwYWFhO1xuJGNvbG9yLWM6ICMzOTkzODM7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLzFfc2V0dGluZ3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLzVfb2JqZWN0cy9kYXlcIjtcblxuLml0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nLXRvcDogJGl0ZW0tdmVydGljYWwtcGFkZGluZztcbiAgcGFkZGluZy1ib3R0b206ICRpdGVtLXZlcnRpY2FsLXBhZGRpbmc7XG4gIG1hcmdpbjogNHB4IDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAuYmxvY2thZGUtdGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gIH1cblxuICAuYmxvY2thZGUtZGV0YWlscyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuLml0ZW06aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDEuMSk7XG4gIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjJzO1xuICBvcGFjaXR5OiAwLjk1O1xuXG4gIC5ibG9ja2FkZS1kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG1heC13aWR0aDogNDBlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5ibG9ja2FkZS1kYXkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnR5cGUtYSB7XG4gIGJvcmRlci1jb2xvcjogJGNvbG9yLWE7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yLWEsIDM1JSk7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICAuYmxvY2thZGUtZGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYTtcbiAgfVxufVxuXG4udHlwZS1iIHtcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkY29sb3ItYiwgMzUlKTtcblxuICAuYmxvY2thZGUtZGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYjtcbiAgfVxufVxuXG4udHlwZS1jIHtcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYztcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkY29sb3ItYywgMzUlKTtcblxuICAuYmxvY2thZGUtZGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYztcbiAgfVxufVxuXG4uYmxvY2thZGUtZGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0kaXRlbS12ZXJ0aWNhbC1wYWRkaW5nO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5vcGVuLWxlZnQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4ub3Blbi1yaWdodCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cbiJdfQ== */"]
      });
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map