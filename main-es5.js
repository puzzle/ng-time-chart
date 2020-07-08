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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r11.color || ctx_r15.defaultColor)("left", ctx_r15.getDaysSince(item_r11.startTime, day_r14) * ctx_r15.dayWidth, "px");
      }
    }

    function NgTimeChartComponent_div_20_ng_container_4_div_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgTimeChartComponent_div_20_ng_container_4_div_1_ng_container_1_div_1_Template, 2, 4, "div", 28);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-color", item_r11.color || ctx_r12.defaultColor)("background-color", item_r11.color || ctx_r12.defaultColor)("left", ctx_r12.getDayOfPeriod(item_r11.startTime) * ctx_r12.dayWidth, "px")("min-width", ctx_r12.getDuration(item_r11) * ctx_r12.dayWidth, "px")("max-width", ctx_r12.getDuration(item_r11) * ctx_r12.dayWidth, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open-left", ctx_r12.startsBeforePeriod(item_r11.startTime))("open-right", ctx_r12.endsAfterPeriod(item_r11.endTime));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r11.dates);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", item_r11.name, " (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 19, item_r11.startTime), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 21, item_r11.endTime), ") ");
      }
    }

    function NgTimeChartComponent_div_20_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgTimeChartComponent_div_20_ng_container_4_div_1_Template, 6, 24, "div", 25);

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

          if (this.startDate && this.endDate) {
            this.periodChange.next(new _period__WEBPACK_IMPORTED_MODULE_3__["Period"](this.startDate.hour(12), this.endDate.hour(23)));
          } else {
            this.periodChange.next(new _period__WEBPACK_IMPORTED_MODULE_3__["Period"](moment("".concat(year, "-01-01")).hour(12), moment("".concat(year, "-12-31")).hour(23)));
          }
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
      consts: [[1, "timetable"], [1, "timetable-header"], [1, "year-selector", "label-bar"], [2, "display", "inline-block", "cursor", "pointer", 3, "click"], [2, "display", "inline-block"], [1, "calendar-header"], [1, "months"], ["class", "month", 3, "width", 4, "ngFor", "ngForOf"], [1, "week-bar"], [1, "weeks"], ["class", "week-offset", 3, "width", 4, "ngIf"], ["class", "week", 3, "width", 4, "ngFor", "ngForOf"], [1, "days"], ["class", "day", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "timetable-body"], ["class", "item-group", 4, "ngFor", "ngForOf"], ["class", "today-marker", 3, "left", 4, "ngIf"], [1, "month"], [1, "week-offset"], [1, "week"], [1, "day", 3, "ngClass"], [1, "item-group"], [1, "item-label", "label-bar"], [1, "items"], [4, "ngFor", "ngForOf"], ["class", "item", 3, "borderColor", "backgroundColor", "left", "minWidth", "maxWidth", "ngClass", "open-left", "open-right", "click", 4, "ngIf"], [1, "item", 3, "ngClass", "click"], [1, "blockade-title"], ["class", "blockade-day day-width-1", 3, "backgroundColor", "left", 4, "ngIf"], [1, "blockade-day", "day-width-1"], [1, "today-marker"], ["todaymarker", ""]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.startDate && ctx.endDate ? "hidden" : "");

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
      styles: [".timetable[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow-x: auto;\n  overflow-y: auto;\n}\n\n.label-bar[_ngcontent-%COMP%] {\n  background-color: white;\n  z-index: 1000;\n  flex: 1 0 200px;\n  min-width: 200px;\n  max-width: 200px;\n}\n\n.timetable-header[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 0;\n  margin-bottom: 0;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.timetable-header[_ngcontent-%COMP%]   .year-selector[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 70px;\n  max-height: 70px;\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n}\n\n.timetable-header[_ngcontent-%COMP%]   .year-selector[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\n.timetable-header[_ngcontent-%COMP%]   .calendar-header[_ngcontent-%COMP%] {\n  height: 70px;\n  max-height: 70px;\n  background-color: white;\n}\n\n.lighten[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%);\n}\n\n.timetable-body[_ngcontent-%COMP%] {\n  padding-top: 0;\n  margin-top: 0;\n  margin-bottom: 4px;\n  position: relative;\n  z-index: 0;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  flex: 1 0 200px;\n  text-align: left;\n  color: #aaa;\n  margin: 0;\n  padding-top: calc(2px + 4px + 1px);\n  padding-bottom: calc(2px + 4px + 1px);\n  z-index: 1000;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border-top: solid 1px #ccc;\n  width: 100%;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  border-radius: 10px;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin: 4px 0;\n  transition: 0.5s;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .blockade-title[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .SMALL_TYPE4[_ngcontent-%COMP%] {\n  border-color: #b00b1e;\n  background-color: #f77786;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .BIG_TYPE5[_ngcontent-%COMP%] {\n  border-color: #dead00;\n  background-color: #ffe792;\n  color: #eee;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .BIG_NVZ[_ngcontent-%COMP%] {\n  border-color: #399383;\n  background-color: #a3dbd1;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .blockade-day[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  margin-top: -2px;\n  height: 100%;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .blockade-day.SMALL_TYPE4[_ngcontent-%COMP%] {\n  background-color: #b00b1e;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .blockade-day.BIG_TYPE5[_ngcontent-%COMP%] {\n  background-color: #dead00;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .blockade-day.BIG_NVZ[_ngcontent-%COMP%] {\n  background-color: #399383;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .open-left[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .open-right[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(110%);\n          filter: brightness(110%);\n  transform: scaleY(1.1);\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #eee;\n}\n\n.months[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n}\n\n.month[_ngcontent-%COMP%] {\n  border: solid 1px #888;\n  border-left-width: 0;\n  flex: auto;\n  box-sizing: border-box;\n  text-align: center;\n}\n\n.month[_ngcontent-%COMP%]:first-child {\n  border-left-width: 1px;\n}\n\n.day-width-1[_ngcontent-%COMP%] {\n  min-width: 20px;\n  max-width: 20px;\n}\n\n.week-offset[_ngcontent-%COMP%] {\n  border-right: solid #888 1px;\n  box-sizing: border-box;\n}\n\n.weeks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n}\n\n.week[_ngcontent-%COMP%] {\n  border: 0 solid;\n  border-right-width: 1px;\n  text-align: center;\n  display: inline-block;\n  box-sizing: border-box;\n  font-size: 10px;\n}\n\n.week[_ngcontent-%COMP%]:first-child {\n  border-left-width: 1px;\n}\n\n.days[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.day[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border: solid 1px #888;\n  border-left-width: 0;\n  min-width: 20px;\n  display: inline-block;\n  text-align: center;\n  margin: 0;\n  font-size: 10px;\n}\n\n.day[_ngcontent-%COMP%]:first-child {\n  border-left-width: 1px;\n}\n\n.today[_ngcontent-%COMP%] {\n  background-color: #b00b1e;\n  position: relative;\n}\n\n.today-marker[_ngcontent-%COMP%] {\n  width: 4px;\n  background-color: #b00b1e;\n  display: block;\n  border-left: solid white 1px;\n  border-right: solid white 1px;\n  box-sizing: content-box;\n  position: absolute;\n  top: -40px;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL25nLXRpbWUtY2hhcnQvbmctdGltZS1jaGFydC9wcm9qZWN0cy9uZy10aW1lLWNoYXJ0L3NyYy9saWIvbmctdGltZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25nLXRpbWUtY2hhcnQvc3JjL2xpYi9uZy10aW1lLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDWkY7O0FEZUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBdkJjO0VBd0JkLGdCQXhCYztBQ1loQjs7QURlQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDWkY7O0FEY0U7RUFDRSxzQkFBQTtFQUNBLFlBcENZO0VBcUNaLGdCQXJDWTtFQXNDWix3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsT0FBQTtBQ1pKOztBRGNJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ1pOOztBRGdCRTtFQUNFLFlBaERZO0VBaURaLGdCQWpEWTtFQWtEWix1QkFBQTtBQ2RKOztBRGtCQTtFQUNFLG1HQUFBO0FDZkY7O0FEcUJBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFsRXFCO0VBbUVyQixrQkFBQTtFQUNBLFVBQUE7QUNsQkY7O0FEb0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDbEJKOztBRHFCSTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0E1RU07RUE2RU4sU0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0FDbkJOOztBRHNCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ3BCTjs7QURzQk07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBekdnQjtFQTBHaEIsbUJBMUdnQjtFQTJHaEIsYUFBQTtFQUNBLGdCQUFBO0FDcEJSOztBRHNCUTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ3BCVjs7QUR3Qk07RUFDRSxxQkE3R1E7RUE4R1IseUJBQUE7QUN0QlI7O0FEeUJNO0VBQ0UscUJBbkhLO0VBb0hMLHlCQUFBO0VBQ0EsV0F0SE87QUMrRmY7O0FEMEJNO0VBQ0UscUJBdkhPO0VBd0hQLHlCQUFBO0FDeEJSOztBRDJCTTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUN6QlI7O0FENEJNO0VBQ0UseUJBcElRO0FDMEdoQjs7QUQ2Qk07RUFDRSx5QkF6SUs7QUM4R2I7O0FEOEJNO0VBQ0UseUJBM0lPO0FDK0dmOztBRCtCTTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUM3QlI7O0FEZ0NNO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtBQzlCUjs7QURpQ007RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0Esc0JBQUE7QUMvQlI7O0FEb0NFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUNsQ0o7O0FEcUNFO0VBQ0Usc0JBeEtXO0FDcUlmOztBRHVDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDcENGOztBRHVDQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ3BDRjs7QUR1Q0E7RUFDRSxzQkFBQTtBQ3BDRjs7QUR1Q0E7RUFDRSxlQXZNVTtFQXdNVixlQXhNVTtBQ29LWjs7QUR1Q0E7RUFDRSw0QkFBQTtFQUNBLHNCQUFBO0FDcENGOztBRHVDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDcENGOztBRHVDQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNwQ0Y7O0FEdUNBO0VBQ0Usc0JBQUE7QUNwQ0Y7O0FEdUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDcENGOztBRHVDQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBNU9VO0VBNk9WLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ3BDRjs7QUR1Q0E7RUFDRSxzQkFBQTtBQ3BDRjs7QUR1Q0E7RUFDRSx5QkE5T2M7RUErT2Qsa0JBQUE7QUNwQ0Y7O0FEdUNBO0VBQ0UsVUFBQTtFQUNBLHlCQXBQYztFQXFQZCxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ3BDRiIsImZpbGUiOiJwcm9qZWN0cy9uZy10aW1lLWNoYXJ0L3NyYy9saWIvbmctdGltZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkYXktd2lkdGg6IDIwcHg7XG4kaXRlbS12ZXJ0aWNhbC1wYWRkaW5nOiAycHg7XG4kaXRlbS12ZXJ0aWNhbC1tYXJnaW46IDRweDtcbiRzaWRlYmFyLXdpZHRoOiAyMDBweDtcbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuJGdyYXktZGFyazogIzg4ODtcbiRncmF5LWJhc2U6ICNhYWE7XG4kZ3JheS1saWdodDogI2NjYztcbiRncmF5LWxpZ2h0ZXI6ICNlZWU7XG4kYnJhbmQtaW5mbzogI2RlYWQwMDtcbiRicmFuZC1wcmltYXJ5OiAjYjAwYjFlO1xuJGJyYW5kLWRhbmdlcjogIzM5OTM4MztcblxuLnRpbWV0YWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5sYWJlbC1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgZmxleDogMSAwICRzaWRlYmFyLXdpZHRoO1xuICBtaW4td2lkdGg6ICRzaWRlYmFyLXdpZHRoO1xuICBtYXgtd2lkdGg6ICRzaWRlYmFyLXdpZHRoO1xufVxuXG4udGltZXRhYmxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xuXG4gIC55ZWFyLXNlbGVjdG9yIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG4gICAgbWF4LWhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBsZWZ0OiAwO1xuXG4gICAgaDMge1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5jYWxlbmRhci1oZWFkZXIge1xuICAgIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG4gICAgbWF4LWhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLmxpZ2h0ZW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAwZGVnLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIDAlLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIDEwMCUpO1xufVxuXG4udGltZXRhYmxlLWJvZHkge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogJGl0ZW0tdmVydGljYWwtbWFyZ2luO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG5cbiAgLml0ZW0tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuXG4gICAgLml0ZW0tbGFiZWwge1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBmbGV4OiAxIDAgJHNpZGViYXItd2lkdGg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgY29sb3I6ICRncmF5LWJhc2U7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygjeyRpdGVtLXZlcnRpY2FsLXBhZGRpbmd9ICsgI3skaXRlbS12ZXJ0aWNhbC1tYXJnaW59ICsgMXB4KTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKCN7JGl0ZW0tdmVydGljYWwtcGFkZGluZ30gKyAjeyRpdGVtLXZlcnRpY2FsLW1hcmdpbn0gKyAxcHgpO1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICB9XG5cbiAgICAuaXRlbXMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggJGdyYXktbGlnaHQ7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLml0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBwYWRkaW5nLXRvcDogJGl0ZW0tdmVydGljYWwtcGFkZGluZztcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICRpdGVtLXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG5cbiAgICAgICAgLmJsb2NrYWRlLXRpdGxlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuU01BTExfVFlQRTQge1xuICAgICAgICBib3JkZXItY29sb3I6ICRicmFuZC1wcmltYXJ5O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRicmFuZC1wcmltYXJ5LCAzNSUpO1xuICAgICAgfVxuXG4gICAgICAuQklHX1RZUEU1IHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYnJhbmQtaW5mbztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYnJhbmQtaW5mbywgMzUlKTtcbiAgICAgICAgY29sb3I6ICRncmF5LWxpZ2h0ZXI7XG4gICAgICB9XG5cbiAgICAgIC5CSUdfTlZaIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYnJhbmQtZGFuZ2VyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRicmFuZC1kYW5nZXIsIDM1JSk7XG4gICAgICB9XG5cbiAgICAgIC5ibG9ja2FkZS1kYXkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogLSRpdGVtLXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLmJsb2NrYWRlLWRheS5TTUFMTF9UWVBFNCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRicmFuZC1wcmltYXJ5XG4gICAgICB9XG5cbiAgICAgIC5ibG9ja2FkZS1kYXkuQklHX1RZUEU1IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJyYW5kLWluZm87XG4gICAgICB9XG5cbiAgICAgIC5ibG9ja2FkZS1kYXkuQklHX05WWiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRicmFuZC1kYW5nZXI7XG4gICAgICB9XG5cbiAgICAgIC5vcGVuLWxlZnQge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgfVxuXG4gICAgICAub3Blbi1yaWdodCB7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgIH1cblxuICAgICAgLml0ZW06aG92ZXIge1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEuMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLml0ZW0tZ3JvdXA6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cblxuICAuaXRlbS1ncm91cDpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktbGlnaHRlcjtcbiAgfVxufVxuXG4ubW9udGhzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1vbnRoIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggJGdyYXktZGFyaztcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGZsZXg6IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1vbnRoOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcbn1cblxuLmRheS13aWR0aC0xIHtcbiAgbWluLXdpZHRoOiAkZGF5LXdpZHRoO1xuICBtYXgtd2lkdGg6ICRkYXktd2lkdGg7XG59XG5cbi53ZWVrLW9mZnNldCB7XG4gIGJvcmRlci1yaWdodDogc29saWQgJGdyYXktZGFyayAxcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi53ZWVrcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi53ZWVrIHtcbiAgYm9yZGVyOiAwIHNvbGlkO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLndlZWs6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xufVxuXG4uZGF5cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5kYXkge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IHNvbGlkIDFweCAkZ3JheS1kYXJrO1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgbWluLXdpZHRoOiAkZGF5LXdpZHRoO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5kYXk6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xufVxuXG4udG9kYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJhbmQtcHJpbWFyeTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9kYXktbWFya2VyIHtcbiAgd2lkdGg6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJyYW5kLXByaW1hcnk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItbGVmdDogc29saWQgd2hpdGUgMXB4O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIHdoaXRlIDFweDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNDBweDtcbiAgYm90dG9tOiAwO1xufVxuIiwiLnRpbWV0YWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5sYWJlbC1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgZmxleDogMSAwIDIwMHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG4udGltZXRhYmxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xufVxuLnRpbWV0YWJsZS1oZWFkZXIgLnllYXItc2VsZWN0b3Ige1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1heC1oZWlnaHQ6IDcwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDA7XG59XG4udGltZXRhYmxlLWhlYWRlciAueWVhci1zZWxlY3RvciBoMyB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLnRpbWV0YWJsZS1oZWFkZXIgLmNhbGVuZGFyLWhlYWRlciB7XG4gIGhlaWdodDogNzBweDtcbiAgbWF4LWhlaWdodDogNzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5saWdodGVuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIDEwMCUpO1xufVxuXG4udGltZXRhYmxlLWJvZHkge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG59XG4udGltZXRhYmxlLWJvZHkgLml0ZW0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnRpbWV0YWJsZS1ib2R5IC5pdGVtLWdyb3VwIC5pdGVtLWxhYmVsIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMDtcbiAgZmxleDogMSAwIDIwMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2FhYTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogY2FsYygycHggKyA0cHggKyAxcHgpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYygycHggKyA0cHggKyAxcHgpO1xuICB6LWluZGV4OiAxMDAwO1xufVxuLnRpbWV0YWJsZS1ib2R5IC5pdGVtLWdyb3VwIC5pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjY2NjO1xuICB3aWR0aDogMTAwJTtcbn1cbi50aW1ldGFibGUtYm9keSAuaXRlbS1ncm91cCAuaXRlbXMgLml0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICBtYXJnaW46IDRweCAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLnRpbWV0YWJsZS1ib2R5IC5pdGVtLWdyb3VwIC5pdGVtcyAuaXRlbSAuYmxvY2thZGUtdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnRpbWV0YWJsZS1ib2R5IC5pdGVtLWdyb3VwIC5pdGVtcyAuU01BTExfVFlQRTQge1xuICBib3JkZXItY29sb3I6ICNiMDBiMWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNzc3ODY7XG59XG4udGltZXRhYmxlLWJvZHkgLml0ZW0tZ3JvdXAgLml0ZW1zIC5CSUdfVFlQRTUge1xuICBib3JkZXItY29sb3I6ICNkZWFkMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU3OTI7XG4gIGNvbG9yOiAjZWVlO1xufVxuLnRpbWV0YWJsZS1ib2R5IC5pdGVtLWdyb3VwIC5pdGVtcyAuQklHX05WWiB7XG4gIGJvcmRlci1jb2xvcjogIzM5OTM4MztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzZGJkMTtcbn1cbi50aW1ldGFibGUtYm9keSAuaXRlbS1ncm91cCAuaXRlbXMgLmJsb2NrYWRlLWRheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udGltZXRhYmxlLWJvZHkgLml0ZW0tZ3JvdXAgLml0ZW1zIC5ibG9ja2FkZS1kYXkuU01BTExfVFlQRTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjAwYjFlO1xufVxuLnRpbWV0YWJsZS1ib2R5IC5pdGVtLWdyb3VwIC5pdGVtcyAuYmxvY2thZGUtZGF5LkJJR19UWVBFNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWFkMDA7XG59XG4udGltZXRhYmxlLWJvZHkgLml0ZW0tZ3JvdXAgLml0ZW1zIC5ibG9ja2FkZS1kYXkuQklHX05WWiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTkzODM7XG59XG4udGltZXRhYmxlLWJvZHkgLml0ZW0tZ3JvdXAgLml0ZW1zIC5vcGVuLWxlZnQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuLnRpbWV0YWJsZS1ib2R5IC5pdGVtLWdyb3VwIC5pdGVtcyAub3Blbi1yaWdodCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cbi50aW1ldGFibGUtYm9keSAuaXRlbS1ncm91cCAuaXRlbXMgLml0ZW06aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDEuMSk7XG59XG4udGltZXRhYmxlLWJvZHkgLml0ZW0tZ3JvdXA6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbi50aW1ldGFibGUtYm9keSAuaXRlbS1ncm91cDpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbi5tb250aHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubW9udGgge1xuICBib3JkZXI6IHNvbGlkIDFweCAjODg4O1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgZmxleDogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9udGg6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xufVxuXG4uZGF5LXdpZHRoLTEge1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIG1heC13aWR0aDogMjBweDtcbn1cblxuLndlZWstb2Zmc2V0IHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjODg4IDFweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLndlZWtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLndlZWsge1xuICBib3JkZXI6IDAgc29saWQ7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ud2VlazpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XG59XG5cbi5kYXlzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmRheSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogc29saWQgMXB4ICM4ODg7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmRheTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XG59XG5cbi50b2RheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMDBiMWU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRvZGF5LW1hcmtlciB7XG4gIHdpZHRoOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMDBiMWU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItbGVmdDogc29saWQgd2hpdGUgMXB4O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIHdoaXRlIDFweDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNDBweDtcbiAgYm90dG9tOiAwO1xufSJdfQ== */", "@media print {\n  .timetable[_ngcontent-%COMP%] {\n    overflow-x: initial;\n  }\n  .timetable[_ngcontent-%COMP%]   .year-selector[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL25nLXRpbWUtY2hhcnQvbmctdGltZS1jaGFydC9wcm9qZWN0cy9uZy10aW1lLWNoYXJ0L3NyYy9saWIvbmctdGltZS1jaGFydC5jb21wb25lbnQucHJpbnQuc2NzcyIsInByb2plY3RzL25nLXRpbWUtY2hhcnQvc3JjL2xpYi9uZy10aW1lLWNoYXJ0LmNvbXBvbmVudC5wcmludC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxtQkFBQTtFQ0NGO0VERUk7SUFDRSxrQkFBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvbmctdGltZS1jaGFydC9zcmMvbGliL25nLXRpbWUtY2hhcnQuY29tcG9uZW50LnByaW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgcHJpbnQge1xuICAudGltZXRhYmxlIHtcbiAgICBvdmVyZmxvdy14OiBpbml0aWFsO1xuXG4gICAgLnllYXItc2VsZWN0b3Ige1xuICAgICAgaDMge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAbWVkaWEgcHJpbnQge1xuICAudGltZXRhYmxlIHtcbiAgICBvdmVyZmxvdy14OiBpbml0aWFsO1xuICB9XG4gIC50aW1ldGFibGUgLnllYXItc2VsZWN0b3IgaDMge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTimeChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ng-time-chart',
          templateUrl: './ng-time-chart.component.html',
          styleUrls: ['./ng-time-chart.component.scss', './ng-time-chart.component.print.scss']
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

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'NgTimeChartLibrary';
      this.startDate = moment__WEBPACK_IMPORTED_MODULE_1__('2020-01-01');
      this.endDate = moment__WEBPACK_IMPORTED_MODULE_1__('2020-12-31');
      moment__WEBPACK_IMPORTED_MODULE_1__["locale"]('de-ch');
      this.groups = [{
        name: 'Testgroup 0',
        items: [{
          name: 'Testitem 0',
          startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-02-12'),
          endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-05-23')
        }, {
          name: 'Testitem 1',
          startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2019-12-11'),
          endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-03-02')
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
        name: 'Testgroup 8',
        items: [{
          name: 'Testitem 0',
          startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2019-09-12'),
          endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2019-10-23')
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
        name: 'Testgroup 9',
        items: [{
          name: 'Testitem 0',
          startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-02-12'),
          endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-05-23')
        }, {
          name: 'Testitem 1',
          startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2019-12-11'),
          endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-03-02')
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
          color: '#044BD9',
          dates: [moment__WEBPACK_IMPORTED_MODULE_1__('2020-06-18'), moment__WEBPACK_IMPORTED_MODULE_1__('2020-06-19'), moment__WEBPACK_IMPORTED_MODULE_1__('2020-06-23'), moment__WEBPACK_IMPORTED_MODULE_1__('2020-06-24')]
        }, {
          name: 'Testitem 1',
          startTime: moment__WEBPACK_IMPORTED_MODULE_1__('2019-08-11'),
          endTime: moment__WEBPACK_IMPORTED_MODULE_1__('2020-09-02'),
          color: '#D95284'
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
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["ng-tl-root"]],
      decls: 6,
      vars: 4,
      consts: [[2, "text-align", "center"], [2, "height", "400px"], [3, "groups", "startDate", "endDate"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ng-time-chart", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome to ", ctx.title, "! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groups", ctx.groups)("startDate", ctx.startDate)("endDate", ctx.endDate);
        }
      },
      directives: [_ng_time_chart_src_lib_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_3__["NgTimeChartComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy10aW1lLWNoYXJ0LXNob3djYXNlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"]
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