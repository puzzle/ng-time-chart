function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**********************************************************************************************!*\
    !*** /home/runner/work/ng-time-chart/ng-time-chart/node_modules/moment/locale sync ^\.\/.*$ ***!
    \**********************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "../../node_modules/moment/locale/af.js",
      "./af.js": "../../node_modules/moment/locale/af.js",
      "./ar": "../../node_modules/moment/locale/ar.js",
      "./ar-dz": "../../node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "../../node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "../../node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "../../node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "../../node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "../../node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "../../node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "../../node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "../../node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "../../node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "../../node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "../../node_modules/moment/locale/ar-tn.js",
      "./ar.js": "../../node_modules/moment/locale/ar.js",
      "./az": "../../node_modules/moment/locale/az.js",
      "./az.js": "../../node_modules/moment/locale/az.js",
      "./be": "../../node_modules/moment/locale/be.js",
      "./be.js": "../../node_modules/moment/locale/be.js",
      "./bg": "../../node_modules/moment/locale/bg.js",
      "./bg.js": "../../node_modules/moment/locale/bg.js",
      "./bm": "../../node_modules/moment/locale/bm.js",
      "./bm.js": "../../node_modules/moment/locale/bm.js",
      "./bn": "../../node_modules/moment/locale/bn.js",
      "./bn.js": "../../node_modules/moment/locale/bn.js",
      "./bo": "../../node_modules/moment/locale/bo.js",
      "./bo.js": "../../node_modules/moment/locale/bo.js",
      "./br": "../../node_modules/moment/locale/br.js",
      "./br.js": "../../node_modules/moment/locale/br.js",
      "./bs": "../../node_modules/moment/locale/bs.js",
      "./bs.js": "../../node_modules/moment/locale/bs.js",
      "./ca": "../../node_modules/moment/locale/ca.js",
      "./ca.js": "../../node_modules/moment/locale/ca.js",
      "./cs": "../../node_modules/moment/locale/cs.js",
      "./cs.js": "../../node_modules/moment/locale/cs.js",
      "./cv": "../../node_modules/moment/locale/cv.js",
      "./cv.js": "../../node_modules/moment/locale/cv.js",
      "./cy": "../../node_modules/moment/locale/cy.js",
      "./cy.js": "../../node_modules/moment/locale/cy.js",
      "./da": "../../node_modules/moment/locale/da.js",
      "./da.js": "../../node_modules/moment/locale/da.js",
      "./de": "../../node_modules/moment/locale/de.js",
      "./de-at": "../../node_modules/moment/locale/de-at.js",
      "./de-at.js": "../../node_modules/moment/locale/de-at.js",
      "./de-ch": "../../node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "../../node_modules/moment/locale/de-ch.js",
      "./de.js": "../../node_modules/moment/locale/de.js",
      "./dv": "../../node_modules/moment/locale/dv.js",
      "./dv.js": "../../node_modules/moment/locale/dv.js",
      "./el": "../../node_modules/moment/locale/el.js",
      "./el.js": "../../node_modules/moment/locale/el.js",
      "./en-au": "../../node_modules/moment/locale/en-au.js",
      "./en-au.js": "../../node_modules/moment/locale/en-au.js",
      "./en-ca": "../../node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "../../node_modules/moment/locale/en-ca.js",
      "./en-gb": "../../node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "../../node_modules/moment/locale/en-gb.js",
      "./en-ie": "../../node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "../../node_modules/moment/locale/en-ie.js",
      "./en-il": "../../node_modules/moment/locale/en-il.js",
      "./en-il.js": "../../node_modules/moment/locale/en-il.js",
      "./en-in": "../../node_modules/moment/locale/en-in.js",
      "./en-in.js": "../../node_modules/moment/locale/en-in.js",
      "./en-nz": "../../node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "../../node_modules/moment/locale/en-nz.js",
      "./en-sg": "../../node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "../../node_modules/moment/locale/en-sg.js",
      "./eo": "../../node_modules/moment/locale/eo.js",
      "./eo.js": "../../node_modules/moment/locale/eo.js",
      "./es": "../../node_modules/moment/locale/es.js",
      "./es-do": "../../node_modules/moment/locale/es-do.js",
      "./es-do.js": "../../node_modules/moment/locale/es-do.js",
      "./es-us": "../../node_modules/moment/locale/es-us.js",
      "./es-us.js": "../../node_modules/moment/locale/es-us.js",
      "./es.js": "../../node_modules/moment/locale/es.js",
      "./et": "../../node_modules/moment/locale/et.js",
      "./et.js": "../../node_modules/moment/locale/et.js",
      "./eu": "../../node_modules/moment/locale/eu.js",
      "./eu.js": "../../node_modules/moment/locale/eu.js",
      "./fa": "../../node_modules/moment/locale/fa.js",
      "./fa.js": "../../node_modules/moment/locale/fa.js",
      "./fi": "../../node_modules/moment/locale/fi.js",
      "./fi.js": "../../node_modules/moment/locale/fi.js",
      "./fil": "../../node_modules/moment/locale/fil.js",
      "./fil.js": "../../node_modules/moment/locale/fil.js",
      "./fo": "../../node_modules/moment/locale/fo.js",
      "./fo.js": "../../node_modules/moment/locale/fo.js",
      "./fr": "../../node_modules/moment/locale/fr.js",
      "./fr-ca": "../../node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "../../node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "../../node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "../../node_modules/moment/locale/fr-ch.js",
      "./fr.js": "../../node_modules/moment/locale/fr.js",
      "./fy": "../../node_modules/moment/locale/fy.js",
      "./fy.js": "../../node_modules/moment/locale/fy.js",
      "./ga": "../../node_modules/moment/locale/ga.js",
      "./ga.js": "../../node_modules/moment/locale/ga.js",
      "./gd": "../../node_modules/moment/locale/gd.js",
      "./gd.js": "../../node_modules/moment/locale/gd.js",
      "./gl": "../../node_modules/moment/locale/gl.js",
      "./gl.js": "../../node_modules/moment/locale/gl.js",
      "./gom-deva": "../../node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "../../node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "../../node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "../../node_modules/moment/locale/gom-latn.js",
      "./gu": "../../node_modules/moment/locale/gu.js",
      "./gu.js": "../../node_modules/moment/locale/gu.js",
      "./he": "../../node_modules/moment/locale/he.js",
      "./he.js": "../../node_modules/moment/locale/he.js",
      "./hi": "../../node_modules/moment/locale/hi.js",
      "./hi.js": "../../node_modules/moment/locale/hi.js",
      "./hr": "../../node_modules/moment/locale/hr.js",
      "./hr.js": "../../node_modules/moment/locale/hr.js",
      "./hu": "../../node_modules/moment/locale/hu.js",
      "./hu.js": "../../node_modules/moment/locale/hu.js",
      "./hy-am": "../../node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "../../node_modules/moment/locale/hy-am.js",
      "./id": "../../node_modules/moment/locale/id.js",
      "./id.js": "../../node_modules/moment/locale/id.js",
      "./is": "../../node_modules/moment/locale/is.js",
      "./is.js": "../../node_modules/moment/locale/is.js",
      "./it": "../../node_modules/moment/locale/it.js",
      "./it-ch": "../../node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "../../node_modules/moment/locale/it-ch.js",
      "./it.js": "../../node_modules/moment/locale/it.js",
      "./ja": "../../node_modules/moment/locale/ja.js",
      "./ja.js": "../../node_modules/moment/locale/ja.js",
      "./jv": "../../node_modules/moment/locale/jv.js",
      "./jv.js": "../../node_modules/moment/locale/jv.js",
      "./ka": "../../node_modules/moment/locale/ka.js",
      "./ka.js": "../../node_modules/moment/locale/ka.js",
      "./kk": "../../node_modules/moment/locale/kk.js",
      "./kk.js": "../../node_modules/moment/locale/kk.js",
      "./km": "../../node_modules/moment/locale/km.js",
      "./km.js": "../../node_modules/moment/locale/km.js",
      "./kn": "../../node_modules/moment/locale/kn.js",
      "./kn.js": "../../node_modules/moment/locale/kn.js",
      "./ko": "../../node_modules/moment/locale/ko.js",
      "./ko.js": "../../node_modules/moment/locale/ko.js",
      "./ku": "../../node_modules/moment/locale/ku.js",
      "./ku.js": "../../node_modules/moment/locale/ku.js",
      "./ky": "../../node_modules/moment/locale/ky.js",
      "./ky.js": "../../node_modules/moment/locale/ky.js",
      "./lb": "../../node_modules/moment/locale/lb.js",
      "./lb.js": "../../node_modules/moment/locale/lb.js",
      "./lo": "../../node_modules/moment/locale/lo.js",
      "./lo.js": "../../node_modules/moment/locale/lo.js",
      "./lt": "../../node_modules/moment/locale/lt.js",
      "./lt.js": "../../node_modules/moment/locale/lt.js",
      "./lv": "../../node_modules/moment/locale/lv.js",
      "./lv.js": "../../node_modules/moment/locale/lv.js",
      "./me": "../../node_modules/moment/locale/me.js",
      "./me.js": "../../node_modules/moment/locale/me.js",
      "./mi": "../../node_modules/moment/locale/mi.js",
      "./mi.js": "../../node_modules/moment/locale/mi.js",
      "./mk": "../../node_modules/moment/locale/mk.js",
      "./mk.js": "../../node_modules/moment/locale/mk.js",
      "./ml": "../../node_modules/moment/locale/ml.js",
      "./ml.js": "../../node_modules/moment/locale/ml.js",
      "./mn": "../../node_modules/moment/locale/mn.js",
      "./mn.js": "../../node_modules/moment/locale/mn.js",
      "./mr": "../../node_modules/moment/locale/mr.js",
      "./mr.js": "../../node_modules/moment/locale/mr.js",
      "./ms": "../../node_modules/moment/locale/ms.js",
      "./ms-my": "../../node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "../../node_modules/moment/locale/ms-my.js",
      "./ms.js": "../../node_modules/moment/locale/ms.js",
      "./mt": "../../node_modules/moment/locale/mt.js",
      "./mt.js": "../../node_modules/moment/locale/mt.js",
      "./my": "../../node_modules/moment/locale/my.js",
      "./my.js": "../../node_modules/moment/locale/my.js",
      "./nb": "../../node_modules/moment/locale/nb.js",
      "./nb.js": "../../node_modules/moment/locale/nb.js",
      "./ne": "../../node_modules/moment/locale/ne.js",
      "./ne.js": "../../node_modules/moment/locale/ne.js",
      "./nl": "../../node_modules/moment/locale/nl.js",
      "./nl-be": "../../node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "../../node_modules/moment/locale/nl-be.js",
      "./nl.js": "../../node_modules/moment/locale/nl.js",
      "./nn": "../../node_modules/moment/locale/nn.js",
      "./nn.js": "../../node_modules/moment/locale/nn.js",
      "./oc-lnc": "../../node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "../../node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "../../node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "../../node_modules/moment/locale/pa-in.js",
      "./pl": "../../node_modules/moment/locale/pl.js",
      "./pl.js": "../../node_modules/moment/locale/pl.js",
      "./pt": "../../node_modules/moment/locale/pt.js",
      "./pt-br": "../../node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "../../node_modules/moment/locale/pt-br.js",
      "./pt.js": "../../node_modules/moment/locale/pt.js",
      "./ro": "../../node_modules/moment/locale/ro.js",
      "./ro.js": "../../node_modules/moment/locale/ro.js",
      "./ru": "../../node_modules/moment/locale/ru.js",
      "./ru.js": "../../node_modules/moment/locale/ru.js",
      "./sd": "../../node_modules/moment/locale/sd.js",
      "./sd.js": "../../node_modules/moment/locale/sd.js",
      "./se": "../../node_modules/moment/locale/se.js",
      "./se.js": "../../node_modules/moment/locale/se.js",
      "./si": "../../node_modules/moment/locale/si.js",
      "./si.js": "../../node_modules/moment/locale/si.js",
      "./sk": "../../node_modules/moment/locale/sk.js",
      "./sk.js": "../../node_modules/moment/locale/sk.js",
      "./sl": "../../node_modules/moment/locale/sl.js",
      "./sl.js": "../../node_modules/moment/locale/sl.js",
      "./sq": "../../node_modules/moment/locale/sq.js",
      "./sq.js": "../../node_modules/moment/locale/sq.js",
      "./sr": "../../node_modules/moment/locale/sr.js",
      "./sr-cyrl": "../../node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "../../node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "../../node_modules/moment/locale/sr.js",
      "./ss": "../../node_modules/moment/locale/ss.js",
      "./ss.js": "../../node_modules/moment/locale/ss.js",
      "./sv": "../../node_modules/moment/locale/sv.js",
      "./sv.js": "../../node_modules/moment/locale/sv.js",
      "./sw": "../../node_modules/moment/locale/sw.js",
      "./sw.js": "../../node_modules/moment/locale/sw.js",
      "./ta": "../../node_modules/moment/locale/ta.js",
      "./ta.js": "../../node_modules/moment/locale/ta.js",
      "./te": "../../node_modules/moment/locale/te.js",
      "./te.js": "../../node_modules/moment/locale/te.js",
      "./tet": "../../node_modules/moment/locale/tet.js",
      "./tet.js": "../../node_modules/moment/locale/tet.js",
      "./tg": "../../node_modules/moment/locale/tg.js",
      "./tg.js": "../../node_modules/moment/locale/tg.js",
      "./th": "../../node_modules/moment/locale/th.js",
      "./th.js": "../../node_modules/moment/locale/th.js",
      "./tk": "../../node_modules/moment/locale/tk.js",
      "./tk.js": "../../node_modules/moment/locale/tk.js",
      "./tl-ph": "../../node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "../../node_modules/moment/locale/tl-ph.js",
      "./tlh": "../../node_modules/moment/locale/tlh.js",
      "./tlh.js": "../../node_modules/moment/locale/tlh.js",
      "./tr": "../../node_modules/moment/locale/tr.js",
      "./tr.js": "../../node_modules/moment/locale/tr.js",
      "./tzl": "../../node_modules/moment/locale/tzl.js",
      "./tzl.js": "../../node_modules/moment/locale/tzl.js",
      "./tzm": "../../node_modules/moment/locale/tzm.js",
      "./tzm-latn": "../../node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "../../node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "../../node_modules/moment/locale/tzm.js",
      "./ug-cn": "../../node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "../../node_modules/moment/locale/ug-cn.js",
      "./uk": "../../node_modules/moment/locale/uk.js",
      "./uk.js": "../../node_modules/moment/locale/uk.js",
      "./ur": "../../node_modules/moment/locale/ur.js",
      "./ur.js": "../../node_modules/moment/locale/ur.js",
      "./uz": "../../node_modules/moment/locale/uz.js",
      "./uz-latn": "../../node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "../../node_modules/moment/locale/uz-latn.js",
      "./uz.js": "../../node_modules/moment/locale/uz.js",
      "./vi": "../../node_modules/moment/locale/vi.js",
      "./vi.js": "../../node_modules/moment/locale/vi.js",
      "./x-pseudo": "../../node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "../../node_modules/moment/locale/x-pseudo.js",
      "./yo": "../../node_modules/moment/locale/yo.js",
      "./yo.js": "../../node_modules/moment/locale/yo.js",
      "./zh-cn": "../../node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "../../node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "../../node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "../../node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "../../node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "../../node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "../../node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "../../node_modules/moment/locale/zh-tw.js"
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
    webpackContext.id = "../../node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "../ng-time-chart/src/lib/ng-time-chart.component.ts":
  /*!***********************************************************!*\
    !*** ../ng-time-chart/src/lib/ng-time-chart.component.ts ***!
    \***********************************************************/

  /*! exports provided: NgTimeChartComponent */

  /***/
  function ngTimeChartSrcLibNgTimeChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgTimeChartComponent", function () {
      return NgTimeChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "../../node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _period__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./period */
    "../ng-time-chart/src/lib/period.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_time_chart_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pipes/time-chart-date-formatter.pipe */
    "../ng-time-chart/src/lib/pipes/time-chart-date-formatter.pipe.ts");

    var _c0 = ["todaymarker"];

    function NgTimeChartComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var month_r6 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r0.daysInMonth(month_r6) * ctx_r0.dayWidth, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", month_r6.format("MMMM YYYY"), " ");
      }
    }

    function NgTimeChartComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 18);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r1.getOldPeriodDaysBeforeFirstWeek() * ctx_r1.dayWidth, "px");
      }
    }

    function NgTimeChartComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var week_r7 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r2.getLengthOfWeekInPeriod(week_r7) * ctx_r2.dayWidth, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", week_r7.isoWeek(), " )", week_r7.format("L"), "");
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "today": a0
      };
    };

    function NgTimeChartComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r8 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r3.isToday(day_r8)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", day_r8.format("dd"), " ");
      }
    }

    function NgTimeChartComponent_div_20_ng_container_4_div_1_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx_r15.getDaysSince(item_r11.startTime, day_r14) * ctx_r15.dayWidth, "px");
      }
    }

    function NgTimeChartComponent_div_20_ng_container_4_div_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgTimeChartComponent_div_20_ng_container_4_div_1_ng_container_1_div_1_Template, 2, 2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var day_r14 = ctx.$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isInPeriod(day_r14));
      }
    }

    var _c2 = function _c2() {
      return ["lighten"];
    };

    function NgTimeChartComponent_div_20_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgTimeChartComponent_div_20_ng_container_4_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var group_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.open(group_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgTimeChartComponent_div_20_ng_container_4_div_1_ng_container_1_Template, 2, 1, "ng-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "timeChartDateFormatter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "timeChartDateFormatter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("item ", item_r11["class"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx_r12.getDayOfPeriod(item_r11.startTime) * ctx_r12.dayWidth, "px")("min-width", ctx_r12.getDuration(item_r11) * ctx_r12.dayWidth, "px")("max-width", ctx_r12.getDuration(item_r11) * ctx_r12.dayWidth, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open-left", ctx_r12.startsBeforePeriod(item_r11.startTime))("open-right", ctx_r12.endsAfterPeriod(item_r11.endTime));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r11.dates);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", item_r11.name, " (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 18, item_r11.startTime), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 20, item_r11.endTime), ") ");
      }
    }

    function NgTimeChartComponent_div_20_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgTimeChartComponent_div_20_ng_container_4_div_1_Template, 6, 23, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r11 = ctx.$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.isInPeriod(item_r11.startTime) || ctx_r10.isInPeriod(item_r11.endTime));
      }
    }

    function NgTimeChartComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgTimeChartComponent_div_20_ng_container_4_Template, 2, 1, "ng-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r9.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r9.items);
      }
    }

    function NgTimeChartComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 30, 31);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx_r5.getDayOfPeriod(ctx_r5.today) * ctx_r5.dayWidth + ctx_r5.sidebarWidth + 7, "px");
      }
    }

    var moment = moment__WEBPACK_IMPORTED_MODULE_1__;

    var NgTimeChartComponent = /*#__PURE__*/function () {
      function NgTimeChartComponent() {
        _classCallCheck(this, NgTimeChartComponent);

        this.defaultColor = '#dead00';
        this.dayWidth = 20;
        this.sidebarWidth = 200;
        this.yearChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.periodChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.today = moment();
      }

      _createClass(NgTimeChartComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.scrollTodayIntoView();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.periodChange.subscribe(function (period) {
            return _this.period = period;
          });
          this.periodChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (period) {
            return _this.enumerateMonths(period);
          })).subscribe(function (months) {
            return _this.months = months;
          });
          this.periodChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (period) {
            return _this.enumerateWeeks(period);
          })).subscribe(function (weeks) {
            return _this.weeks = weeks;
          });
          this.periodChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (period) {
            return _this.enumerateDays(period);
          })).subscribe(function (days) {
            return _this.days = days;
          });
          this.changeYear(moment().year());
        }
      }, {
        key: "isToday",
        value: function isToday(day) {
          if (!this.isInPeriod(this.today)) {
            return false;
          }

          return this.today.isSame(day, 'day');
        }
      }, {
        key: "enumerateMonths",
        value: function enumerateMonths(period) {
          function enumerate(currentDate, expanded) {
            if (currentDate.isSameOrBefore(period.endDate, 'day')) {
              expanded.push(currentDate.clone());
              var advanceDate = currentDate.clone().add(1, 'month');
              enumerate(advanceDate, expanded);
            }

            return expanded;
          }

          return enumerate(period.startDate.clone(), []);
        }
      }, {
        key: "enumerateWeeks",
        value: function enumerateWeeks(period) {
          function enumerate(currentDate, expanded) {
            if (currentDate.isSameOrBefore(period.endDate, 'day')) {
              expanded.push(currentDate.clone().isoWeekday(1));
              var advanceDate = currentDate.clone().add(1, 'week');
              enumerate(advanceDate, expanded);
            }

            return expanded;
          }

          function firstWeekInPeriod() {
            var date = period.startDate.clone().isoWeekday(4);
            return period.containsDate(date) ? date : date.add(1, 'week');
          }

          return enumerate(firstWeekInPeriod(), []);
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

          return enumerate(period.startDate.clone(), []);
        }
      }, {
        key: "daysInMonth",
        value: function daysInMonth(month) {
          if (month && month.month() === this.period.startDate.month() && month.year() === this.period.startDate.year()) {
            return month.daysInMonth() - this.period.startDate.date();
          } else if (month && month.month() === this.period.endDate.month() && month.year() === this.period.endDate.year()) {
            return this.period.endDate.date() + 1;
          } else {
            return month.daysInMonth();
          }
        }
      }, {
        key: "getLengthOfWeekInPeriod",
        value: function getLengthOfWeekInPeriod(week) {
          if (this.period.containsWeek(week)) {
            return 7;
          }

          var firstDay = week.clone();

          if (!this.period.containsDate(firstDay)) {
            firstDay = this.period.startDate.clone();
          }

          var lastDay = week.clone().add(7, 'days');

          if (firstDay.isSameOrAfter(lastDay)) {
            return 0;
          }

          if (!this.period.containsDate(lastDay)) {
            lastDay = this.period.endDate.clone();
          }

          return Math.ceil(lastDay.diff(firstDay, 'days', true));
        }
      }, {
        key: "getDayOfPeriod",
        value: function getDayOfPeriod(date) {
          if (!this.period.containsDate(date)) {
            return 0;
          }

          return Math.round(date.diff(this.period.startDate, 'days', true));
        }
      }, {
        key: "getDaysSince",
        value: function getDaysSince(referenceDate, date) {
          var refDate = this.getStartDateInCurrentPeriod(moment(referenceDate));
          var myDate = this.getStartDateInCurrentPeriod(moment(date));
          return Math.ceil(myDate.diff(moment(refDate), 'days', true));
        }
      }, {
        key: "getDuration",
        value: function getDuration(item) {
          var startDate = this.getStartDateInCurrentPeriod(item.startTime).hour(12);
          var endDate = this.getEndDateCurrentPeriod(item.endTime).hour(12);
          return Math.round(endDate.diff(startDate, 'days', true)) + 1;
        }
      }, {
        key: "getOldPeriodDaysBeforeFirstWeek",
        value: function getOldPeriodDaysBeforeFirstWeek() {
          if (this.period.startDate.isoWeekday() <= 4) {
            return 0;
          }

          var weekStart = this.period.startDate.clone().isoWeekday(1);

          if (!this.period.containsDate(weekStart)) {
            weekStart.add(1, 'week');
          }

          var difference = Math.ceil(weekStart.diff(this.period.startDate, 'days', true));
          return difference > 0 ? difference : 0;
        }
      }, {
        key: "isInPeriod",
        value: function isInPeriod(time) {
          return this.period.containsDate(time);
        }
      }, {
        key: "startsBeforePeriod",
        value: function startsBeforePeriod(time) {
          return !this.period.containsDate(time);
        } // TODO: Merge with startBeforePeriod and isInPeriod

      }, {
        key: "endsAfterPeriod",
        value: function endsAfterPeriod(time) {
          return !this.period.containsDate(time);
        }
      }, {
        key: "changeYear",
        value: function changeYear(year) {
          this.yearChange.next(year);
          this.currentYear = year;

          if (!this._startDate && !this._endDate) {
            this.periodChange.next(new _period__WEBPACK_IMPORTED_MODULE_3__["Period"](moment("".concat(year, "-01-01")).hour(12), moment("".concat(year, "-12-31")).hour(23)));
          } else {
            this.changePeriod(this._startDate, this._endDate);
            this.periodChange.next(new _period__WEBPACK_IMPORTED_MODULE_3__["Period"](this._startDate.hour(12), this._endDate.hour(23)));
          }
        }
      }, {
        key: "changePeriod",
        value: function changePeriod(startDate, endDate) {
          if (startDate == null && endDate == null) {
            console.log('start and endDate are null, nothing we can do here');
            return;
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
            myEndDate = endDate;
          } else {
            myEndDate = myStartDate.clone();
            myEndDate.add(1, 'year');
          }

          this.periodChange.next(new _period__WEBPACK_IMPORTED_MODULE_3__["Period"](myStartDate.hour(12), myEndDate.hour(23)));
        }
      }, {
        key: "open",
        value: function open(group) {
          group.onClick();
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
      }, {
        key: "scrollTodayIntoView",
        value: function scrollTodayIntoView() {
          if (!!this.todayMarker && this.isInPeriod(this.today)) {
            this.todayMarker.nativeElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'center'
            });
          }
        }
      }, {
        key: "startDate",
        set: function set(date) {
          this._startDate = date;
          this.changePeriod(this._startDate, this._endDate);
        },
        get: function get() {
          return this._startDate;
        }
      }, {
        key: "endDate",
        set: function set(date) {
          this._endDate = date;
          this.changePeriod(this._startDate, this._endDate);
        },
        get: function get() {
          return this._endDate;
        }
      }]);

      return NgTimeChartComponent;
    }();

    NgTimeChartComponent.ɵfac = function NgTimeChartComponent_Factory(t) {
      return new (t || NgTimeChartComponent)();
    };

    NgTimeChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgTimeChartComponent,
      selectors: [["ng-time-chart"]],
      viewQuery: function NgTimeChartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.todayMarker = _t.first);
        }
      },
      inputs: {
        groups: "groups",
        startDate: "startDate",
        endDate: "endDate"
      },
      outputs: {
        yearChange: "yearChange"
      },
      decls: 22,
      vars: 15,
      consts: [[1, "timetable"], [1, "timetable-header"], [1, "year-selector", "label-bar"], [2, "display", "inline-block", "cursor", "pointer", 3, "click"], [2, "display", "inline-block"], [1, "calendar-header"], [1, "months"], ["class", "month", 3, "width", 4, "ngFor", "ngForOf"], [1, "week-bar"], [1, "weeks"], ["class", "week-offset", 3, "width", 4, "ngIf"], ["class", "week", 3, "width", 4, "ngFor", "ngForOf"], [1, "days"], ["class", "day", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "timetable-body"], ["class", "item-group", 4, "ngFor", "ngForOf"], ["class", "today-marker", 3, "left", 4, "ngIf"], [1, "month"], [1, "week-offset"], [1, "week"], [1, "day", 3, "ngClass"], [1, "item-group"], [1, "item-label", "label-bar"], [1, "items"], [4, "ngFor", "ngForOf"], [3, "class", "left", "minWidth", "maxWidth", "ngClass", "open-left", "open-right", "click", 4, "ngIf"], [3, "ngClass", "click"], [1, "blockade-title"], ["class", "blockade-day day-width-1", 3, "left", 4, "ngIf"], [1, "blockade-day", "day-width-1"], [1, "today-marker"], ["todaymarker", ""]],
      template: function NgTimeChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgTimeChartComponent_Template_h3_click_4_listener() {
            return ctx.changeYear(ctx.currentYear - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "< ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgTimeChartComponent_Template_h3_click_8_listener() {
            return ctx.changeYear(ctx.currentYear + 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " > ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NgTimeChartComponent_div_12_Template, 2, 3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NgTimeChartComponent_div_15_Template, 1, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NgTimeChartComponent_div_16_Template, 2, 4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NgTimeChartComponent_div_18_Template, 2, 4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NgTimeChartComponent_div_20_Template, 5, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NgTimeChartComponent_div_21_Template, 2, 2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.days.length * ctx.dayWidth, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", !ctx.startDate && !ctx.endDate ? "" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentYear);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.days.length * ctx.dayWidth, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.months);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getOldPeriodDaysBeforeFirstWeek() > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weeks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.days);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", ctx.days.length * ctx.dayWidth + ctx.sidebarWidth, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInPeriod(ctx.today));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      pipes: [_pipes_time_chart_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__["TimeChartDateFormatterPipe"]],
      styles: [".timetable[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow-x: auto;\n  overflow-y: auto;\n}\n\n.label-bar[_ngcontent-%COMP%] {\n  background-color: white;\n  z-index: 1000;\n  flex: 1 0 200px;\n  min-width: 200px;\n  max-width: 200px;\n}\n\n.timetable-header[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 0;\n  margin-bottom: 0;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.timetable-header[_ngcontent-%COMP%]   .year-selector[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 70px;\n  max-height: 70px;\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n}\n\n.timetable-header[_ngcontent-%COMP%]   .year-selector[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\n.timetable-header[_ngcontent-%COMP%]   .calendar-header[_ngcontent-%COMP%] {\n  height: 70px;\n  max-height: 70px;\n  background-color: white;\n}\n\n.lighten[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%);\n}\n\n.timetable-body[_ngcontent-%COMP%] {\n  padding-top: 0;\n  margin-top: 0;\n  margin-bottom: 4px;\n  position: relative;\n  z-index: 0;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  flex: 1 0 200px;\n  text-align: left;\n  color: #aaa;\n  margin: 0;\n  padding-top: calc(2px + 4px + 1px);\n  padding-bottom: calc(2px + 4px + 1px);\n  z-index: 1000;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border-top: solid 1px #ccc;\n  width: 100%;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  border-radius: 10px;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin: 4px 0;\n  transition: 0.5s;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .blockade-title[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .type-a[_ngcontent-%COMP%] {\n  border-color: #b00b1e;\n  background-color: #f77786;\n  color: white;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .type-a[_ngcontent-%COMP%]   .blockade-day[_ngcontent-%COMP%] {\n  background-color: #b00b1e;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .type-b[_ngcontent-%COMP%] {\n  border-color: #fa0aaa;\n  background-color: #feb9e7;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .type-b[_ngcontent-%COMP%]   .blockade-day[_ngcontent-%COMP%] {\n  background-color: #fa0aaa;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .type-c[_ngcontent-%COMP%] {\n  border-color: #399383;\n  background-color: #a3dbd1;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .type-c[_ngcontent-%COMP%]   .blockade-day[_ngcontent-%COMP%] {\n  background-color: #399383;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .blockade-day[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  margin-top: -2px;\n  height: 100%;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .open-left[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .open-right[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(110%);\n          filter: brightness(110%);\n  transform: scaleY(1.1);\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #eee;\n}\n\n.months[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n}\n\n.month[_ngcontent-%COMP%] {\n  border: solid 1px #888;\n  border-left-width: 0;\n  flex: auto;\n  box-sizing: border-box;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.month[_ngcontent-%COMP%]:first-child {\n  border-left-width: 1px;\n}\n\n.day-width-1[_ngcontent-%COMP%] {\n  min-width: 20px;\n  max-width: 20px;\n}\n\n.week-offset[_ngcontent-%COMP%] {\n  border-right: solid #888 1px;\n  box-sizing: border-box;\n}\n\n.weeks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n}\n\n.week[_ngcontent-%COMP%] {\n  border: 0 solid;\n  border-right-width: 1px;\n  text-align: center;\n  display: inline-block;\n  box-sizing: border-box;\n  font-size: 10px;\n}\n\n.week[_ngcontent-%COMP%]:first-child {\n  border-left-width: 1px;\n}\n\n.days[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.day[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border: solid 1px #888;\n  border-left-width: 0;\n  min-width: 20px;\n  display: inline-block;\n  text-align: center;\n  margin: 0;\n  font-size: 10px;\n}\n\n.day[_ngcontent-%COMP%]:first-child {\n  border-left-width: 1px;\n}\n\n.today[_ngcontent-%COMP%] {\n  background-color: #b00b1e;\n  position: relative;\n}\n\n.today-marker[_ngcontent-%COMP%] {\n  width: 4px;\n  background-color: #b00b1e;\n  display: block;\n  border-left: solid white 1px;\n  border-right: solid white 1px;\n  box-sizing: content-box;\n  position: absolute;\n  top: -40px;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL25nLXRpbWUtY2hhcnQvbmctdGltZS1jaGFydC9wcm9qZWN0cy9uZy10aW1lLWNoYXJ0L3NyYy9saWIvbmctdGltZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25nLXRpbWUtY2hhcnQvc3JjL2xpYi9uZy10aW1lLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvbmctdGltZS1jaGFydC9uZy10aW1lLWNoYXJ0L3Byb2plY3RzL25nLXRpbWUtY2hhcnQvc3JjL3N0eWxlcy9fc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2RGOztBRGlCQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkF2QmM7RUF3QmQsZ0JBeEJjO0FDVWhCOztBRGlCQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDZEY7O0FEZ0JFO0VBQ0Usc0JBQUE7RUFDQSxZQXBDWTtFQXFDWixnQkFyQ1k7RUFzQ1osd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE9BQUE7QUNkSjs7QURnQkk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDZE47O0FEa0JFO0VBQ0UsWUFoRFk7RUFpRFosZ0JBakRZO0VBa0RaLHVCQUFBO0FDaEJKOztBRG9CQTtFQUNFLG1HQUFBO0FDakJGOztBRHVCQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBbEVxQjtFQW1FckIsa0JBQUE7RUFDQSxVQUFBO0FDcEJGOztBRHNCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ3BCSjs7QUR1Qkk7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBNUVNO0VBNkVOLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtBQ3JCTjs7QUR3Qkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUN0Qk47O0FEd0JNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQXpHZ0I7RUEwR2hCLG1CQTFHZ0I7RUEyR2hCLGFBQUE7RUFDQSxnQkFBQTtBQ3RCUjs7QUR3QlE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUN0QlY7O0FEMEJNO0VBQ0UscUJFekhFO0VGMEhGLHlCQUFBO0VBQ0EsWUFBQTtBQ3hCUjs7QUQwQlE7RUFDRSx5QkU5SEE7QURzR1Y7O0FENEJNO0VBQ0UscUJFbElFO0VGbUlGLHlCQUFBO0FDMUJSOztBRDRCUTtFQUNFLHlCRXRJQTtBRDRHVjs7QUQ4Qk07RUFDRSxxQkUxSUU7RUYySUYseUJBQUE7QUM1QlI7O0FEOEJRO0VBQ0UseUJFOUlBO0FEa0hWOztBRGdDTTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUM5QlI7O0FEaUNNO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQy9CUjs7QURrQ007RUFDRSwwQkFBQTtFQUNBLDZCQUFBO0FDaENSOztBRG1DTTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxzQkFBQTtBQ2pDUjs7QURzQ0U7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ3BDSjs7QUR1Q0U7RUFDRSxzQkF4S1c7QUNtSWY7O0FEeUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUN0Q0Y7O0FEeUNBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3RDRjs7QUR5Q0E7RUFDRSxzQkFBQTtBQ3RDRjs7QUR5Q0E7RUFDRSxlQXpNVTtFQTBNVixlQTFNVTtBQ29LWjs7QUR5Q0E7RUFDRSw0QkFBQTtFQUNBLHNCQUFBO0FDdENGOztBRHlDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDdENGOztBRHlDQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUN0Q0Y7O0FEeUNBO0VBQ0Usc0JBQUE7QUN0Q0Y7O0FEeUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDdENGOztBRHlDQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBOU9VO0VBK09WLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ3RDRjs7QUR5Q0E7RUFDRSxzQkFBQTtBQ3RDRjs7QUR5Q0E7RUFDRSx5QkFoUGM7RUFpUGQsa0JBQUE7QUN0Q0Y7O0FEeUNBO0VBQ0UsVUFBQTtFQUNBLHlCQXRQYztFQXVQZCxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ3RDRiIsImZpbGUiOiJwcm9qZWN0cy9uZy10aW1lLWNoYXJ0L3NyYy9saWIvbmctdGltZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGVcIjtcblxuJGRheS13aWR0aDogMjBweDtcbiRpdGVtLXZlcnRpY2FsLXBhZGRpbmc6IDJweDtcbiRpdGVtLXZlcnRpY2FsLW1hcmdpbjogNHB4O1xuJHNpZGViYXItd2lkdGg6IDIwMHB4O1xuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG4kZ3JheS1kYXJrOiAjODg4O1xuJGdyYXktYmFzZTogI2FhYTtcbiRncmF5LWxpZ2h0OiAjY2NjO1xuJGdyYXktbGlnaHRlcjogI2VlZTtcbiRicmFuZC1pbmZvOiAjZGVhZDAwO1xuJGJyYW5kLXByaW1hcnk6ICNiMDBiMWU7XG4kYnJhbmQtZGFuZ2VyOiAjMzk5MzgzO1xuXG4udGltZXRhYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmxhYmVsLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBmbGV4OiAxIDAgJHNpZGViYXItd2lkdGg7XG4gIG1pbi13aWR0aDogJHNpZGViYXItd2lkdGg7XG4gIG1heC13aWR0aDogJHNpZGViYXItd2lkdGg7XG59XG5cbi50aW1ldGFibGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA7XG5cbiAgLnllYXItc2VsZWN0b3Ige1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcbiAgICBtYXgtaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGxlZnQ6IDA7XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuICB9XG5cbiAgLmNhbGVuZGFyLWhlYWRlciB7XG4gICAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcbiAgICBtYXgtaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4ubGlnaHRlbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDBkZWcsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgMCUsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgMTAwJSk7XG59XG5cbi50aW1ldGFibGUtYm9keSB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAkaXRlbS12ZXJ0aWNhbC1tYXJnaW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcblxuICAuaXRlbS1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG5cbiAgICAuaXRlbS1sYWJlbCB7XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgbGVmdDogMDtcbiAgICAgIGZsZXg6IDEgMCAkc2lkZWJhci13aWR0aDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBjb2xvcjogJGdyYXktYmFzZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKCN7JGl0ZW0tdmVydGljYWwtcGFkZGluZ30gKyAjeyRpdGVtLXZlcnRpY2FsLW1hcmdpbn0gKyAxcHgpO1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoI3skaXRlbS12ZXJ0aWNhbC1wYWRkaW5nfSArICN7JGl0ZW0tdmVydGljYWwtbWFyZ2lufSArIDFweCk7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgIH1cblxuICAgIC5pdGVtcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZ3JheS1saWdodDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAuaXRlbSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAkaXRlbS12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogJGl0ZW0tdmVydGljYWwtcGFkZGluZztcbiAgICAgICAgbWFyZ2luOiA0cHggMDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcblxuICAgICAgICAuYmxvY2thZGUtdGl0bGUge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50eXBlLWEge1xuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1hO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRjb2xvci1hLCAzNSUpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgLmJsb2NrYWRlLWRheSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnR5cGUtYiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yLWIsIDM1JSk7XG5cbiAgICAgICAgLmJsb2NrYWRlLWRheSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnR5cGUtYyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWM7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yLWMsIDM1JSk7XG5cbiAgICAgICAgLmJsb2NrYWRlLWRheSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJsb2NrYWRlLWRheSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAtJGl0ZW0tdmVydGljYWwtcGFkZGluZztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAub3Blbi1sZWZ0IHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICAgIH1cblxuICAgICAgLm9wZW4tcmlnaHQge1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICB9XG5cbiAgICAgIC5pdGVtOmhvdmVyIHtcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxLjEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5pdGVtLWdyb3VwOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG5cbiAgLml0ZW0tZ3JvdXA6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWxpZ2h0ZXI7XG4gIH1cbn1cblxuLm1vbnRocyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tb250aCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICRncmF5LWRhcms7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBmbGV4OiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb250aDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XG59XG5cbi5kYXktd2lkdGgtMSB7XG4gIG1pbi13aWR0aDogJGRheS13aWR0aDtcbiAgbWF4LXdpZHRoOiAkZGF5LXdpZHRoO1xufVxuXG4ud2Vlay1vZmZzZXQge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkICRncmF5LWRhcmsgMXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ud2Vla3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ud2VlayB7XG4gIGJvcmRlcjogMCBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi53ZWVrOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcbn1cblxuLmRheXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZGF5IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggJGdyYXktZGFyaztcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIG1pbi13aWR0aDogJGRheS13aWR0aDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uZGF5OmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcbn1cblxuLnRvZGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJyYW5kLXByaW1hcnk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRvZGF5LW1hcmtlciB7XG4gIHdpZHRoOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRicmFuZC1wcmltYXJ5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIHdoaXRlIDFweDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCB3aGl0ZSAxcHg7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTQwcHg7XG4gIGJvdHRvbTogMDtcbn1cbiIsIi50aW1ldGFibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubGFiZWwtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGZsZXg6IDEgMCAyMDBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLnRpbWV0YWJsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDtcbn1cbi50aW1ldGFibGUtaGVhZGVyIC55ZWFyLXNlbGVjdG9yIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXgtaGVpZ2h0OiA3MHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiAwO1xufVxuLnRpbWV0YWJsZS1oZWFkZXIgLnllYXItc2VsZWN0b3IgaDMge1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi50aW1ldGFibGUtaGVhZGVyIC5jYWxlbmRhci1oZWFkZXIge1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1heC1oZWlnaHQ6IDcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubGlnaHRlbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAxMDAlKTtcbn1cblxuLnRpbWV0YWJsZS1ib2R5IHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xufVxuLnRpbWV0YWJsZS1ib2R5IC5pdGVtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi50aW1ldGFibGUtYm9keSAuaXRlbS1ncm91cCAuaXRlbS1sYWJlbCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDA7XG4gIGZsZXg6IDEgMCAyMDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNhYWE7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IGNhbGMoMnB4ICsgNHB4ICsgMXB4KTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoMnB4ICsgNHB4ICsgMXB4KTtcbiAgei1pbmRleDogMTAwMDtcbn1cbi50aW1ldGFibGUtYm9keSAuaXRlbS1ncm91cCAuaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2NjYztcbiAgd2lkdGg6IDEwMCU7XG59XG4udGltZXRhYmxlLWJvZHkgLml0ZW0tZ3JvdXAgLml0ZW1zIC5pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgbWFyZ2luOiA0cHggMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi50aW1ldGFibGUtYm9keSAuaXRlbS1ncm91cCAuaXRlbXMgLml0ZW0gLmJsb2NrYWRlLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi50aW1ldGFibGUtYm9keSAuaXRlbS1ncm91cCAuaXRlbXMgLnR5cGUtYSB7XG4gIGJvcmRlci1jb2xvcjogI2IwMGIxZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3Nzc4NjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnRpbWV0YWJsZS1ib2R5IC5pdGVtLWdyb3VwIC5pdGVtcyAudHlwZS1hIC5ibG9ja2FkZS1kYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjAwYjFlO1xufVxuLnRpbWV0YWJsZS1ib2R5IC5pdGVtLWdyb3VwIC5pdGVtcyAudHlwZS1iIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmEwYWFhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmViOWU3O1xufVxuLnRpbWV0YWJsZS1ib2R5IC5pdGVtLWdyb3VwIC5pdGVtcyAudHlwZS1iIC5ibG9ja2FkZS1kYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmEwYWFhO1xufVxuLnRpbWV0YWJsZS1ib2R5IC5pdGVtLWdyb3VwIC5pdGVtcyAudHlwZS1jIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzk5MzgzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNkYmQxO1xufVxuLnRpbWV0YWJsZS1ib2R5IC5pdGVtLWdyb3VwIC5pdGVtcyAudHlwZS1jIC5ibG9ja2FkZS1kYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk5MzgzO1xufVxuLnRpbWV0YWJsZS1ib2R5IC5pdGVtLWdyb3VwIC5pdGVtcyAuYmxvY2thZGUtZGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi50aW1ldGFibGUtYm9keSAuaXRlbS1ncm91cCAuaXRlbXMgLm9wZW4tbGVmdCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4udGltZXRhYmxlLWJvZHkgLml0ZW0tZ3JvdXAgLml0ZW1zIC5vcGVuLXJpZ2h0IHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuLnRpbWV0YWJsZS1ib2R5IC5pdGVtLWdyb3VwIC5pdGVtcyAuaXRlbTpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMTAlKTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMS4xKTtcbn1cbi50aW1ldGFibGUtYm9keSAuaXRlbS1ncm91cDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLnRpbWV0YWJsZS1ib2R5IC5pdGVtLWdyb3VwOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuLm1vbnRocyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tb250aCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICM4ODg7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBmbGV4OiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb250aDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XG59XG5cbi5kYXktd2lkdGgtMSB7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgbWF4LXdpZHRoOiAyMHB4O1xufVxuXG4ud2Vlay1vZmZzZXQge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkICM4ODggMXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ud2Vla3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ud2VlayB7XG4gIGJvcmRlcjogMCBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi53ZWVrOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcbn1cblxuLmRheXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZGF5IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzg4ODtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uZGF5OmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcbn1cblxuLnRvZGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwMGIxZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9kYXktbWFya2VyIHtcbiAgd2lkdGg6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwMGIxZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCB3aGl0ZSAxcHg7XG4gIGJvcmRlci1yaWdodDogc29saWQgd2hpdGUgMXB4O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00MHB4O1xuICBib3R0b206IDA7XG59IiwiJGNvbG9yLWE6ICNiMDBiMWU7XG4kY29sb3ItYjogI2ZhMGFhYTtcbiRjb2xvci1jOiAjMzk5MzgzO1xuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTimeChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ng-time-chart',
          templateUrl: './ng-time-chart.component.html',
          styleUrls: ['./ng-time-chart.component.scss']
        }]
      }], function () {
        return [];
      }, {
        groups: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        startDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        endDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        yearChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        todayMarker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['todaymarker']
        }]
      });
    })();
    /***/

  },

  /***/
  "../ng-time-chart/src/lib/ng-time-chart.module.ts":
  /*!********************************************************!*\
    !*** ../ng-time-chart/src/lib/ng-time-chart.module.ts ***!
    \********************************************************/

  /*! exports provided: NgTimeChartModule */

  /***/
  function ngTimeChartSrcLibNgTimeChartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgTimeChartModule", function () {
      return NgTimeChartModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_time_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ng-time-chart.component */
    "../ng-time-chart/src/lib/ng-time-chart.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_time_chart_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pipes/time-chart-date-formatter.pipe */
    "../ng-time-chart/src/lib/pipes/time-chart-date-formatter.pipe.ts");

    var NgTimeChartModule = function NgTimeChartModule() {
      _classCallCheck(this, NgTimeChartModule);
    };

    NgTimeChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgTimeChartModule
    });
    NgTimeChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NgTimeChartModule_Factory(t) {
        return new (t || NgTimeChartModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgTimeChartModule, {
        declarations: [_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_1__["NgTimeChartComponent"], _pipes_time_chart_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__["TimeChartDateFormatterPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_1__["NgTimeChartComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTimeChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_1__["NgTimeChartComponent"], _pipes_time_chart_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__["TimeChartDateFormatterPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          exports: [_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_1__["NgTimeChartComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../ng-time-chart/src/lib/period.ts":
  /*!******************************************!*\
    !*** ../ng-time-chart/src/lib/period.ts ***!
    \******************************************/

  /*! exports provided: Period */

  /***/
  function ngTimeChartSrcLibPeriodTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Period", function () {
      return Period;
    });
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! moment */
    "../../node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

    var moment = moment__WEBPACK_IMPORTED_MODULE_0__;

    var Period = /*#__PURE__*/function () {
      function Period(startDate, endDate) {
        _classCallCheck(this, Period);

        this._startDate = startDate.clone();
        this._endDate = endDate.clone();
      }

      _createClass(Period, [{
        key: "containsDate",
        value: function containsDate(date) {
          return date.isSameOrAfter(this.startDate) && date.isSameOrBefore(this.endDate);
        }
      }, {
        key: "containsWeek",
        value: function containsWeek(week) {
          return this.containsDate(week) && this.containsDate(week.clone().add(7, 'days'));
        }
      }, {
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
      }]);

      return Period;
    }();
    /***/

  },

  /***/
  "../ng-time-chart/src/lib/pipes/time-chart-date-formatter.pipe.ts":
  /*!************************************************************************!*\
    !*** ../ng-time-chart/src/lib/pipes/time-chart-date-formatter.pipe.ts ***!
    \************************************************************************/

  /*! exports provided: TimeChartDateFormatterPipe */

  /***/
  function ngTimeChartSrcLibPipesTimeChartDateFormatterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeChartDateFormatterPipe", function () {
      return TimeChartDateFormatterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "../../node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);

    var moment = moment__WEBPACK_IMPORTED_MODULE_1__;

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

    TimeChartDateFormatterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "timeChartDateFormatter",
      type: TimeChartDateFormatterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeChartDateFormatterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'timeChartDateFormatter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "../../node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var moment_locale_de_ch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment/locale/de-ch */
    "../../node_modules/moment/locale/de-ch.js");
    /* harmony import */


    var moment_locale_de_ch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_locale_de_ch__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _ng_time_chart_src_lib_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../ng-time-chart/src/lib/ng-time-chart.component */
    "../ng-time-chart/src/lib/ng-time-chart.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'NgTimeChartLibrary';
        this.startDate = moment__WEBPACK_IMPORTED_MODULE_1__('2020-05-01');
        this.endDate = moment__WEBPACK_IMPORTED_MODULE_1__('2020-08-31');
        moment__WEBPACK_IMPORTED_MODULE_1__["locale"]('de-ch');
        this.groups = [{
          name: 'Testgroup 0',
          items: [{
            name: 'Testitem 0',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-02-12'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-05-23'),
            "class": 'type-b'
          }, {
            name: 'Testitem 1',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2019-12-11'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-03-02'),
            "class": 'type-b'
          }].sort(function (a, b) {
            return moment__WEBPACK_IMPORTED_MODULE_1__["duration"](a.startTime.diff(b.startTime)).asSeconds();
          }),
          onClick: function onClick() {
            return console.log('clicked');
          }
        }, {
          name: 'Testgroup 2',
          items: [{
            name: 'Testitem 0',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-02-12'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-05-23')
          }, {
            name: 'Testitem 1',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-04-11'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-05-02')
          }].sort(function (a, b) {
            return moment__WEBPACK_IMPORTED_MODULE_1__["duration"](a.startTime.diff(b.startTime)).asSeconds();
          }),
          onClick: function onClick() {
            return console.log('clicked');
          }
        }, {
          name: 'Testgroup 3',
          items: [{
            name: 'Testitem 0',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-06-12'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-07-23')
          }, {
            name: 'Testitem 1',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2019-08-11'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-09-02')
          }].sort(function (a, b) {
            return moment__WEBPACK_IMPORTED_MODULE_1__["duration"](a.startTime.diff(b.startTime)).asSeconds();
          }),
          onClick: function onClick() {
            return console.log('clicked');
          }
        }, {
          name: 'Testgroup 4',
          items: [{
            name: 'Testitem 0',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-09-12'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-10-23')
          }, {
            name: 'Testitem 1',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2018-10-11'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2019-11-02')
          }].sort(function (a, b) {
            return moment__WEBPACK_IMPORTED_MODULE_1__["duration"](a.startTime.diff(b.startTime)).asSeconds();
          }),
          onClick: function onClick() {
            return console.log('clicked');
          }
        }, {
          name: 'Testgroup 5',
          items: [{
            name: 'Testitem 0',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-02-12'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-05-23')
          }, {
            name: 'Testitem 1',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-12-11'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2021-03-02')
          }].sort(function (a, b) {
            return moment__WEBPACK_IMPORTED_MODULE_1__["duration"](a.startTime.diff(b.startTime)).asSeconds();
          }),
          onClick: function onClick() {
            return console.log('clicked');
          }
        }, {
          name: 'Testgroup 6',
          items: [{
            name: 'Testitem 0',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-02-12'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-05-23')
          }, {
            name: 'Testitem 1',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-04-11'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-05-02')
          }].sort(function (a, b) {
            return moment__WEBPACK_IMPORTED_MODULE_1__["duration"](a.startTime.diff(b.startTime)).asSeconds();
          }),
          onClick: function onClick() {
            return console.log('clicked');
          }
        }, {
          name: 'Testgroup 7',
          items: [{
            name: 'Testitem 0',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-06-12'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-07-23'),
            "class": 'type-c'
          }, {
            name: 'Testitem 1',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2019-08-11'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-09-02'),
            "class": 'type-a'
          }].sort(function (a, b) {
            return moment__WEBPACK_IMPORTED_MODULE_1__["duration"](a.startTime.diff(b.startTime)).asSeconds();
          }),
          onClick: function onClick() {
            return console.log('clicked');
          }
        }, {
          name: 'Testgroup 8',
          items: [{
            name: 'Testitem 0',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2019-09-12'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2019-10-23'),
            "class": 'my-class-a'
          }, {
            name: 'Testitem 1',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2018-10-11'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2019-11-02'),
            "class": 'my-class-a'
          }].sort(function (a, b) {
            return moment__WEBPACK_IMPORTED_MODULE_1__["duration"](a.startTime.diff(b.startTime)).asSeconds();
          }),
          onClick: function onClick() {
            return console.log('clicked');
          }
        }, {
          name: 'Testgroup 9',
          items: [{
            name: 'Testitem 0',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-02-12'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-04-23')
          }, {
            name: 'Testitem 1',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-05-11'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-06-02')
          }].sort(function (a, b) {
            return moment__WEBPACK_IMPORTED_MODULE_1__["duration"](a.startTime.diff(b.startTime)).asSeconds();
          }),
          onClick: function onClick() {
            return console.log('clicked');
          }
        }, {
          name: 'Testgroup 10',
          items: [{
            name: 'Testitem 0',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-02-12'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-05-23'),
            dates: [moment__WEBPACK_IMPORTED_MODULE_1__('2020-04-11'), moment__WEBPACK_IMPORTED_MODULE_1__('2020-04-12')]
          }, {
            name: 'Testitem 1',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-04-11'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-05-02')
          }].sort(function (a, b) {
            return moment__WEBPACK_IMPORTED_MODULE_1__["duration"](a.startTime.diff(b.startTime)).asSeconds();
          }),
          onClick: function onClick() {
            return console.log('clicked');
          }
        }, {
          name: 'Testgroup 11',
          items: [{
            name: 'Testitem 0',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-06-12'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-07-23'),
            "class": 'type-a',
            dates: [moment__WEBPACK_IMPORTED_MODULE_1__('2020-06-18'), moment__WEBPACK_IMPORTED_MODULE_1__('2020-06-19'), moment__WEBPACK_IMPORTED_MODULE_1__('2020-06-23'), moment__WEBPACK_IMPORTED_MODULE_1__('2020-06-24')]
          }, {
            name: 'Testitem 1',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2019-08-11'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-09-02'),
            "class": 'type-a'
          }].sort(function (a, b) {
            return moment__WEBPACK_IMPORTED_MODULE_1__["duration"](a.startTime.diff(b.startTime)).asSeconds();
          }),
          onClick: function onClick() {
            return console.log('clicked');
          }
        }, {
          name: 'Testgroup 12',
          items: [{
            name: 'Testitem 0',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-09-12'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2021-01-23')
          }, {
            name: 'Testitem 1',
            startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2019-10-11'),
            endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-11-02')
          }].sort(function (a, b) {
            return moment__WEBPACK_IMPORTED_MODULE_1__["duration"](a.startTime.diff(b.startTime)).asSeconds();
          }),
          onClick: function onClick() {
            return console.log('clicked');
          }
        }];
      }

      _createClass(AppComponent, [{
        key: "setStartDate",
        value: function setStartDate(value) {
          this.startDate = !!value && value.length > 0 ? moment__WEBPACK_IMPORTED_MODULE_1__(value) : null;
        }
      }, {
        key: "setEndDate",
        value: function setEndDate(value) {
          this.endDate = !!value && value.length > 0 ? moment__WEBPACK_IMPORTED_MODULE_1__(value) : null;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["ng-tl-root"]],
      decls: 23,
      vars: 5,
      consts: [[1, "content"], [2, "text-align", "center"], [2, "height", "400px"], [3, "groups"], [2, "height", "400px", "padding-top", "100px"], [1, "date-input"], ["for", "start-date"], ["type", "date", "id", "start-date", "name", "start-date", "value", "2020-05-01", 3, "blur"], ["start_date", ""], ["for", "end-date"], ["type", "date", "id", "end-date", "name", "end-date", "value", "2020-08-31", 3, "blur"], ["end_date", ""], [3, "groups", "startDate", "endDate"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Calendar with year selector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ng-time-chart", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Calendar with dynamic length");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Start date:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AppComponent_Template_input_blur_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            return ctx.setStartDate(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "End date:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AppComponent_Template_input_blur_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            return ctx.setEndDate(_r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ng-time-chart", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome to ", ctx.title, "! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groups", ctx.groups);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groups", ctx.groups)("startDate", ctx.startDate)("endDate", ctx.endDate);
        }
      },
      directives: [_ng_time_chart_src_lib_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_3__["NgTimeChartComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: [".date-input[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 2em;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL25nLXRpbWUtY2hhcnQvbmctdGltZS1jaGFydC9wcm9qZWN0cy9uZy10aW1lLWNoYXJ0LXNob3djYXNlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmctdGltZS1jaGFydC1zaG93Y2FzZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJwcm9qZWN0cy9uZy10aW1lLWNoYXJ0LXNob3djYXNlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGUtaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDRlbTtcbn1cbiIsIi5kYXRlLWlucHV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiA0ZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ng-tl-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ng_time_chart_src_lib_ng_time_chart_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../ng-time-chart/src/lib/ng-time-chart.module */
    "../ng-time-chart/src/lib/ng-time-chart.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_time_chart_src_lib_ng_time_chart_module__WEBPACK_IMPORTED_MODULE_4__["NgTimeChartModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_time_chart_src_lib_ng_time_chart_module__WEBPACK_IMPORTED_MODULE_4__["NgTimeChartModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_time_chart_src_lib_ng_time_chart_module__WEBPACK_IMPORTED_MODULE_4__["NgTimeChartModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/ng-time-chart/ng-time-chart/projects/ng-time-chart-showcase/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map