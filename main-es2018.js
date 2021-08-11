(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/ng-time-chart/ng-time-chart/projects/ng-time-chart-showcase/src/main.ts */"zUnb");


/***/ }),

/***/ "7chq":
/*!****************************************************************************!*\
  !*** ../ng-time-chart/src/lib/components/chart/ng-time-chart.component.ts ***!
  \****************************************************************************/
/*! exports provided: NgTimeChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgTimeChartComponent", function() { return NgTimeChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wgY5");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _period__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../period */ "Qb5Q");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "YJKf");
/* harmony import */ var _service_period_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/period.service */ "kKY0");
/* harmony import */ var _service_year_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/year.service */ "Tkk5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _time_table_body_time_table_body_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../time-table-body/time-table-body.component */ "P7zf");













const _c0 = ["todayMarker"];
function NgTimeChartComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgTimeChartComponent_div_4_Template_h3_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const currentYear_r5 = ctx.ngIf; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.changeYear(currentYear_r5 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "< ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgTimeChartComponent_div_4_Template_h3_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const currentYear_r5 = ctx.ngIf; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changeYear(currentYear_r5 + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " >");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currentYear_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currentYear_r5);
} }
function NgTimeChartComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", month_r9.days * ctx_r1.DAY_WIDTH, "px")("max-width", month_r9.days * ctx_r1.DAY_WIDTH, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", month_r9.startDate.format("MMMM YYYY"), " ");
} }
function NgTimeChartComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r2.precedingPeriodDaysBeforeFirstWeek$) * ctx_r2.DAY_WIDTH, "px");
} }
function NgTimeChartComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const week_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", week_r10.days * ctx_r3.DAY_WIDTH, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", week_r10.startDate.isoWeek(), " )", week_r10.startDate.startOf("isoWeek").format("L"), "");
} }
const _c1 = function (a0) { return { "today": a0 }; };
function NgTimeChartComponent_ng_container_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r12.isToday(day_r11)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", day_r11.format("dd"), " ");
} }
function NgTimeChartComponent_ng_container_19_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", day_r11.format("dd"), " ");
} }
function NgTimeChartComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgTimeChartComponent_ng_container_19_div_1_Template, 3, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgTimeChartComponent_ng_container_19_ng_template_2_Template, 2, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const day_r11 = ctx.$implicit;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isToday(day_r11))("ngIfElse", _r13);
} }
const moment = moment__WEBPACK_IMPORTED_MODULE_1__;
class NgTimeChartComponent {
    constructor(periodService, yearService) {
        this.periodService = periodService;
        this.yearService = yearService;
        this.DAY_WIDTH = _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].DAY_WIDTH;
        this.yearChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.yearService.year$.subscribe(year => this.yearChange.emit(year));
        this._groups$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.today = moment().hour(12);
        this.currentPeriod$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.periodService.period$, this.yearService.period$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([period, year]) => period != null ? period : year), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(period => period.isValid()));
        this.months$ = this.currentPeriod$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(period => NgTimeChartComponent.enumerateMonths(period)));
        this.weeks$ = this.currentPeriod$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(period => NgTimeChartComponent.enumerateWeeks(period)));
        this.days$ = this.currentPeriod$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(period => NgTimeChartComponent.enumerateDays(period)));
        this.durationInDays$ = this.days$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(days => days.length));
        this.precedingPeriodDaysBeforeFirstWeek$ = this.currentPeriod$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(period => NgTimeChartComponent.getOldPeriodDaysBeforeFirstWeek(period)));
        this.filteredGroups$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.currentPeriod$, this._groups$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([period, groups]) => groups.filter(group => period.overlaps(group.duration))));
    }
    set groups(value) {
        this._groups$.next(value);
    }
    set startDate(date) {
        this.periodService.startDate = date;
    }
    get startDate() {
        return this.periodService.startDate;
    }
    set endDate(date) {
        this.periodService.endDate = date;
    }
    get endDate() {
        return this.periodService.endDate;
    }
    get currentYear$() {
        return this.yearService.year$;
    }
    static getOldPeriodDaysBeforeFirstWeek(period) {
        if (!period.isValid()) {
            return 0;
        }
        if (period.startDate.isoWeekday() <= 4) {
            return 0;
        }
        const weekStart = period.startDate.clone().isoWeekday(1);
        if (!period.containsDate(weekStart)) {
            weekStart.add(1, 'week');
        }
        const difference = Math.ceil(weekStart.diff(period.startDate, 'days', true));
        return difference > 0 ? difference : 0;
    }
    static enumerateMonths(period) {
        if (!period) {
            return null;
        }
        function getMonthWithinPeriod(dayInMonth) {
            const fullMonth = new _period__WEBPACK_IMPORTED_MODULE_3__["Period"](dayInMonth.clone().startOf('month'), dayInMonth.clone().endOf('month'));
            return fullMonth.intersect(myPeriod);
        }
        function enumerateWithinPeriod(startDate) {
            const months = [];
            let current = startDate.clone();
            while (myPeriod.containsDate(current)) {
                months.push(getMonthWithinPeriod(current));
                current = current.clone().add(1, 'month');
            }
            return months;
        }
        const myPeriod = new _period__WEBPACK_IMPORTED_MODULE_3__["Period"](period.startDate.clone().hour(0), period.endDate.clone().hour(23));
        return enumerateWithinPeriod(period.startDate.clone());
    }
    static enumerateWeeks(period) {
        function enumerate(currentDate, expanded) {
            if (currentDate.isSameOrBefore(period.endDate, 'day')) {
                const endDate = currentDate.clone().endOf('isoWeek');
                const startDate = currentDate.clone().startOf('isoWeek');
                const week = new _period__WEBPACK_IMPORTED_MODULE_3__["Period"](startDate, endDate);
                expanded.push(period.intersect(week));
                const advanceDate = currentDate.clone().add(1, 'week');
                enumerate(advanceDate, expanded);
            }
            return expanded;
        }
        function firstWeekInPeriod() {
            const date = period === null || period === void 0 ? void 0 : period.startDate.clone().isoWeekday(4);
            return period.containsDate(date) ? date : date.add(1, 'week');
        }
        return !period ? null : enumerate(firstWeekInPeriod(), []);
    }
    static enumerateDays(period) {
        function enumerate(currentDate, expanded) {
            if (currentDate.isSameOrBefore(period.endDate, 'day')) {
                expanded.push(currentDate);
                const advanceDate = currentDate.clone().add(1, 'day');
                enumerate(advanceDate, expanded);
            }
            return expanded;
        }
        return !period ? null : enumerate(period.startDate.clone(), []);
    }
    ngAfterViewInit() {
        this.scrollTodayIntoView();
    }
    isToday(day) {
        return this.today.isSame(day, 'day');
    }
    changeYear(year) {
        this.yearService.year = year;
    }
    showYearSpinner$() {
        return this.periodService.isFullYear$;
    }
    scrollTodayIntoView() {
        if (!!this.todayMarker) {
            this.todayMarker.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }
}
NgTimeChartComponent.ɵfac = function NgTimeChartComponent_Factory(t) { return new (t || NgTimeChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_period_service__WEBPACK_IMPORTED_MODULE_6__["PeriodService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_year_service__WEBPACK_IMPORTED_MODULE_7__["YearService"])); };
NgTimeChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgTimeChartComponent, selectors: [["ng-time-chart"]], viewQuery: function NgTimeChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.todayMarker = _t.first);
    } }, inputs: { groups: "groups", startDate: "startDate", endDate: "endDate", layoutStrategy: "layoutStrategy" }, outputs: { yearChange: "yearChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            _service_period_service__WEBPACK_IMPORTED_MODULE_6__["PeriodService"],
            _service_year_service__WEBPACK_IMPORTED_MODULE_7__["YearService"]
        ])], decls: 25, vars: 36, consts: [[1, "timetable"], [1, "timetable-header"], [1, "year-selector", "label-bar"], [4, "ngIf"], [1, "calendar-header"], [1, "months"], ["class", "month", 3, "width", "max-width", 4, "ngFor", "ngForOf"], [1, "week-bar"], [1, "weeks"], ["class", "week-offset", 3, "width", 4, "ngIf"], ["class", "week", 3, "width", 4, "ngFor", "ngForOf"], [1, "days"], [4, "ngFor", "ngForOf"], [3, "groups", "today", "period", "durationInDays", "layoutStrategy"], [2, "display", "inline-block", "cursor", "pointer", 3, "click"], [2, "display", "inline-block"], [1, "month"], [1, "week-offset"], [1, "week"], ["class", "day today", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["normalDay", ""], [1, "day", "today", 3, "ngClass"], ["todayMarker", ""], [1, "day"]], template: function NgTimeChartComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _time_table_body_time_table_body_component__WEBPACK_IMPORTED_MODULE_9__["TimeTableBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".label-bar[_ngcontent-%COMP%] {\n  background-color: white;\n  z-index: 1000;\n  flex: 1 0 200px;\n  min-width: 200px;\n  max-width: 200px;\n}\n\n.day-width-1[_ngcontent-%COMP%] {\n  min-width: 20px;\n  max-width: 20px;\n}\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n\n.timetable[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow-x: auto;\n  overflow-y: auto;\n}\n\n.timetable-header[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 0;\n  margin-bottom: 0;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.timetable-header[_ngcontent-%COMP%]   .year-selector[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 70px;\n  max-height: 70px;\n  position: sticky;\n  left: 0;\n}\n\n.timetable-header[_ngcontent-%COMP%]   .year-selector[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\n.timetable-header[_ngcontent-%COMP%]   .calendar-header[_ngcontent-%COMP%] {\n  height: 70px;\n  max-height: 70px;\n  background-color: white;\n}\n\n.months[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n}\n\n.month[_ngcontent-%COMP%] {\n  border: solid 1px #888;\n  border-left-width: 0;\n  flex: auto;\n  box-sizing: border-box;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.month[_ngcontent-%COMP%]:first-child {\n  border-left-width: 1px;\n}\n\n.week-offset[_ngcontent-%COMP%] {\n  border-right: solid #888 1px;\n  box-sizing: border-box;\n}\n\n.weeks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n}\n\n.week[_ngcontent-%COMP%] {\n  border: 0 solid;\n  border-right-width: 1px;\n  text-align: center;\n  display: inline-block;\n  box-sizing: border-box;\n  font-size: 10px;\n}\n\n.week[_ngcontent-%COMP%]:first-child {\n  border-left-width: 1px;\n}\n\n.days[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.day[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border: solid 1px #888;\n  border-left-width: 0;\n  min-width: 20px;\n  display: inline-block;\n  text-align: center;\n  margin: 0;\n  font-size: 10px;\n}\n\n.day[_ngcontent-%COMP%]:first-child {\n  border-left-width: 1px;\n}\n\n.today[_ngcontent-%COMP%] {\n  background-color: #b00b1e;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXRpbWUtY2hhcnQvc3JjL3N0eWxlcy82X2NvbXBvbmVudHMvX3NpZGViYXIuc2NzcyIsInByb2plY3RzL25nLXRpbWUtY2hhcnQvc3JjL3N0eWxlcy8xX3NldHRpbmdzL192YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL25nLXRpbWUtY2hhcnQvc3JjL2xpYi9jb21wb25lbnRzL2NoYXJ0L25nLXRpbWUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZy10aW1lLWNoYXJ0L3NyYy9zdHlsZXMvNV9vYmplY3RzL19kYXkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkNIYztFRElkLGdCQ0pjO0FDR2hCOztBQ0pBO0VBQ0UsZUZIVTtFRUlWLGVGSlU7QUNXWjs7QUFQQTtFQUNFLGlCQUFBO0FBVUY7O0FBUEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFOQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQVNGOztBQVBFO0VBQ0Usc0JBQUE7RUFDQSxZRHhCWTtFQ3lCWixnQkR6Qlk7RUMwQlosZ0JBQUE7RUFDQSxPQUFBO0FBU0o7O0FBUEk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBU047O0FBTEU7RUFDRSxZRHBDWTtFQ3FDWixnQkRyQ1k7RUNzQ1osdUJBQUE7QUFPSjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBTUY7O0FBSEE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSEE7RUFDRSxzQkFBQTtBQU1GOztBQUhBO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtBQU1GOztBQUhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFNRjs7QUFIQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFNRjs7QUFIQTtFQUNFLHNCQUFBO0FBTUY7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFIQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVEbkdVO0VDb0dWLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUhBO0VBQ0Usc0JBQUE7QUFNRjs7QUFIQTtFQUNFLHlCRHJHYztFQ3NHZCxrQkFBQTtBQU1GIiwiZmlsZSI6InByb2plY3RzL25nLXRpbWUtY2hhcnQvc3JjL2xpYi9jb21wb25lbnRzL2NoYXJ0L25nLXRpbWUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vMV9zZXR0aW5ncy92YXJpYWJsZXNcIjtcblxuLmxhYmVsLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBmbGV4OiAxIDAgJHNpZGViYXItd2lkdGg7XG4gIG1pbi13aWR0aDogJHNpZGViYXItd2lkdGg7XG4gIG1heC13aWR0aDogJHNpZGViYXItd2lkdGg7XG59XG4iLCIkZGF5LXdpZHRoOiAyMHB4O1xuJGl0ZW0tdmVydGljYWwtcGFkZGluZzogMnB4O1xuJGl0ZW0tdmVydGljYWwtbWFyZ2luOiA0cHg7XG4kc2lkZWJhci13aWR0aDogMjAwcHg7XG4kaGVhZGVyLWhlaWdodDogNzBweDtcbiRncmF5LWRhcms6ICM4ODg7XG4kZ3JheS1iYXNlOiAjYWFhO1xuJGdyYXktbGlnaHQ6ICNjY2M7XG4kZ3JheS1saWdodGVyOiAjZWVlO1xuJGJyYW5kLWluZm86ICNkZWFkMDA7XG4kYnJhbmQtcHJpbWFyeTogI2IwMGIxZTtcbiRicmFuZC1kYW5nZXI6ICMzOTkzODM7XG4kY29sb3ItYTogI2IwMGIxZTtcbiRjb2xvci1iOiAjZmEwYWFhO1xuJGNvbG9yLWM6ICMzOTkzODM7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLzFfc2V0dGluZ3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLzZfY29tcG9uZW50cy9zaWRlYmFyXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLzVfb2JqZWN0cy9kYXlcIjtcblxuOmhvc3R7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4udGltZXRhYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuXG4udGltZXRhYmxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xuXG4gIC55ZWFyLXNlbGVjdG9yIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG4gICAgbWF4LWhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBsZWZ0OiAwO1xuXG4gICAgaDMge1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5jYWxlbmRhci1oZWFkZXIge1xuICAgIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG4gICAgbWF4LWhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLm1vbnRocyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tb250aCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICRncmF5LWRhcms7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBmbGV4OiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb250aDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XG59XG5cbi53ZWVrLW9mZnNldCB7XG4gIGJvcmRlci1yaWdodDogc29saWQgJGdyYXktZGFyayAxcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi53ZWVrcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi53ZWVrIHtcbiAgYm9yZGVyOiAwIHNvbGlkO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLndlZWs6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xufVxuXG4uZGF5cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5kYXkge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IHNvbGlkIDFweCAkZ3JheS1kYXJrO1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgbWluLXdpZHRoOiAkZGF5LXdpZHRoO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5kYXk6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xufVxuXG4udG9kYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJhbmQtcHJpbWFyeTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIiwiQGltcG9ydCBcIi4uLzFfc2V0dGluZ3MvdmFyaWFibGVzXCI7XG5cbi5kYXktd2lkdGgtMSB7XG4gIG1pbi13aWR0aDogJGRheS13aWR0aDtcbiAgbWF4LXdpZHRoOiAkZGF5LXdpZHRoO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTimeChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-time-chart',
                templateUrl: './ng-time-chart.component.html',
                styleUrls: ['./ng-time-chart.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    _service_period_service__WEBPACK_IMPORTED_MODULE_6__["PeriodService"],
                    _service_year_service__WEBPACK_IMPORTED_MODULE_7__["YearService"]
                ]
            }]
    }], function () { return [{ type: _service_period_service__WEBPACK_IMPORTED_MODULE_6__["PeriodService"] }, { type: _service_year_service__WEBPACK_IMPORTED_MODULE_7__["YearService"] }]; }, { groups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], endDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], layoutStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], yearChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], todayMarker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['todayMarker']
        }] }); })();


/***/ }),

/***/ "8BGo":
/*!*****************************************!*\
  !*** ../ng-time-chart/src/lib/group.ts ***!
  \*****************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var _period__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./period */ "Qb5Q");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wgY5");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


const moment = moment__WEBPACK_IMPORTED_MODULE_1__;
class Group {
    constructor(name, items, onClick = () => {
    }) {
        this.name = name;
        this.items = items;
        this.duration = Group.calculateDuration(items);
        this.onClick = onClick;
    }
    static calculateDuration(items) {
        const startDate = moment.min(items.map(item => item.startTime));
        const endDate = moment.max(items.map(item => item.endTime));
        if (!startDate || !endDate) {
            return null;
        }
        return new _period__WEBPACK_IMPORTED_MODULE_0__["Period"](startDate, endDate);
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "BGqG":
/*!************************************************************************************!*\
  !*** ../ng-time-chart/src/lib/components/item-grouping/item-grouping.component.ts ***!
  \************************************************************************************/
/*! exports provided: ItemGroupingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemGroupingComponent", function() { return ItemGroupingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _period__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../period */ "Qb5Q");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wgY5");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item/item.component */ "vRAa");






function ItemGroupingComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ng-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("period", ctx_r1.period)("item", item_r2);
} }
function ItemGroupingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItemGroupingComponent_div_0_ng_container_2_Template, 2, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.itemGrouping);
} }
class ItemGroupingComponent {
    constructor() {
    }
    isInPeriod(time) {
        return this.period.containsDate(time);
    }
    open(item) {
        var _a;
        (_a = item.onClick) === null || _a === void 0 ? void 0 : _a.apply(null);
    }
    visibleInPeriod(itemGrouping) {
        if (!itemGrouping || itemGrouping.length === 0) {
            return false;
        }
        const earliestDate = Object(moment__WEBPACK_IMPORTED_MODULE_2__["min"])(itemGrouping.map(item => item.startTime));
        const latestDate = Object(moment__WEBPACK_IMPORTED_MODULE_2__["max"])(itemGrouping.map(item => item.endTime));
        const groupingPeriod = new _period__WEBPACK_IMPORTED_MODULE_1__["Period"](earliestDate, latestDate);
        return this.isInPeriod(earliestDate) ||
            this.isInPeriod(latestDate) ||
            groupingPeriod.containsDate(this.period.startDate);
    }
}
ItemGroupingComponent.ɵfac = function ItemGroupingComponent_Factory(t) { return new (t || ItemGroupingComponent)(); };
ItemGroupingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemGroupingComponent, selectors: [["ng-item-grouping"]], inputs: { period: "period", itemGrouping: "itemGrouping" }, decls: 1, vars: 1, consts: [["class", "item-grouping", 4, "ngIf"], [1, "item-grouping"], [1, "items"], [4, "ngFor", "ngForOf"], [3, "period", "item"]], template: function ItemGroupingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ItemGroupingComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visibleInPeriod(ctx.itemGrouping));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _item_item_component__WEBPACK_IMPORTED_MODULE_4__["ItemComponent"]], styles: [".day-width-1[_ngcontent-%COMP%] {\n  min-width: 20px;\n  max-width: 20px;\n}\n\n.label-bar[_ngcontent-%COMP%] {\n  background-color: white;\n  z-index: 1000;\n  flex: 1 0 200px;\n  min-width: 200px;\n  max-width: 200px;\n}\n\n.item-grouping[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.item-grouping[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  display: block;\n  height: 2.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXRpbWUtY2hhcnQvc3JjL3N0eWxlcy81X29iamVjdHMvX2RheS5zY3NzIiwicHJvamVjdHMvbmctdGltZS1jaGFydC9zcmMvc3R5bGVzLzFfc2V0dGluZ3MvX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMvbmctdGltZS1jaGFydC9zcmMvbGliL2NvbXBvbmVudHMvaXRlbS1ncm91cGluZy9pdGVtLWdyb3VwaW5nLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmctdGltZS1jaGFydC9zcmMvc3R5bGVzLzZfY29tcG9uZW50cy9fc2lkZWJhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUNIVTtFRElWLGVDSlU7QUNHWjs7QUNEQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkZIYztFRUlkLGdCRkpjO0FDUWhCOztBQVBBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBVUY7O0FBUkU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQVVKIiwiZmlsZSI6InByb2plY3RzL25nLXRpbWUtY2hhcnQvc3JjL2xpYi9jb21wb25lbnRzL2l0ZW0tZ3JvdXBpbmcvaXRlbS1ncm91cGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8xX3NldHRpbmdzL3ZhcmlhYmxlc1wiO1xuXG4uZGF5LXdpZHRoLTEge1xuICBtaW4td2lkdGg6ICRkYXktd2lkdGg7XG4gIG1heC13aWR0aDogJGRheS13aWR0aDtcbn1cbiIsIiRkYXktd2lkdGg6IDIwcHg7XG4kaXRlbS12ZXJ0aWNhbC1wYWRkaW5nOiAycHg7XG4kaXRlbS12ZXJ0aWNhbC1tYXJnaW46IDRweDtcbiRzaWRlYmFyLXdpZHRoOiAyMDBweDtcbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuJGdyYXktZGFyazogIzg4ODtcbiRncmF5LWJhc2U6ICNhYWE7XG4kZ3JheS1saWdodDogI2NjYztcbiRncmF5LWxpZ2h0ZXI6ICNlZWU7XG4kYnJhbmQtaW5mbzogI2RlYWQwMDtcbiRicmFuZC1wcmltYXJ5OiAjYjAwYjFlO1xuJGJyYW5kLWRhbmdlcjogIzM5OTM4MztcbiRjb2xvci1hOiAjYjAwYjFlO1xuJGNvbG9yLWI6ICNmYTBhYWE7XG4kY29sb3ItYzogIzM5OTM4MztcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvMV9zZXR0aW5ncy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvNV9vYmplY3RzL2RheVwiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy82X2NvbXBvbmVudHMvc2lkZWJhclwiO1xuXG4uaXRlbS1ncm91cGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgLml0ZW1zIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDIuNWVtO1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vMV9zZXR0aW5ncy92YXJpYWJsZXNcIjtcblxuLmxhYmVsLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBmbGV4OiAxIDAgJHNpZGViYXItd2lkdGg7XG4gIG1pbi13aWR0aDogJHNpZGViYXItd2lkdGg7XG4gIG1heC13aWR0aDogJHNpZGViYXItd2lkdGg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemGroupingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-item-grouping',
                templateUrl: './item-grouping.component.html',
                styleUrls: ['./item-grouping.component.scss']
            }]
    }], function () { return []; }, { period: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemGrouping: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "JmFJ":
/*!***************************************************************!*\
  !*** ../ng-time-chart/src/lib/layout/layout-strategy.enum.ts ***!
  \***************************************************************/
/*! exports provided: LayoutStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutStrategy", function() { return LayoutStrategy; });
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


/***/ }),

/***/ "MROq":
/*!**********************************************************************************************!*\
  !*** /home/runner/work/ng-time-chart/ng-time-chart/node_modules/moment/locale sync ^\.\/.*$ ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "8GSH",
	"./af.js": "8GSH",
	"./ar": "NcOb",
	"./ar-dz": "1ors",
	"./ar-dz.js": "1ors",
	"./ar-kw": "Sc1Y",
	"./ar-kw.js": "Sc1Y",
	"./ar-ly": "GzvP",
	"./ar-ly.js": "GzvP",
	"./ar-ma": "hH25",
	"./ar-ma.js": "hH25",
	"./ar-sa": "u2jB",
	"./ar-sa.js": "u2jB",
	"./ar-tn": "5Mza",
	"./ar-tn.js": "5Mza",
	"./ar.js": "NcOb",
	"./az": "ZVVJ",
	"./az.js": "ZVVJ",
	"./be": "kQaN",
	"./be.js": "kQaN",
	"./bg": "+n5x",
	"./bg.js": "+n5x",
	"./bm": "TTiN",
	"./bm.js": "TTiN",
	"./bn": "aIF2",
	"./bn-bd": "lTqY",
	"./bn-bd.js": "lTqY",
	"./bn.js": "aIF2",
	"./bo": "QWb5",
	"./bo.js": "QWb5",
	"./br": "iQoZ",
	"./br.js": "iQoZ",
	"./bs": "EL7g",
	"./bs.js": "EL7g",
	"./ca": "vd/2",
	"./ca.js": "vd/2",
	"./cs": "K+3W",
	"./cs.js": "K+3W",
	"./cv": "Jt3X",
	"./cv.js": "Jt3X",
	"./cy": "sWi3",
	"./cy.js": "sWi3",
	"./da": "YcFX",
	"./da.js": "YcFX",
	"./de": "BKZ+",
	"./de-at": "Oq9h",
	"./de-at.js": "Oq9h",
	"./de-ch": "hHY4",
	"./de-ch.js": "hHY4",
	"./de.js": "BKZ+",
	"./dv": "w8Ej",
	"./dv.js": "w8Ej",
	"./el": "tSbB",
	"./el.js": "tSbB",
	"./en-au": "HgyJ",
	"./en-au.js": "HgyJ",
	"./en-ca": "ZyTy",
	"./en-ca.js": "ZyTy",
	"./en-gb": "exaB",
	"./en-gb.js": "exaB",
	"./en-ie": "yKzn",
	"./en-ie.js": "yKzn",
	"./en-il": "TB59",
	"./en-il.js": "TB59",
	"./en-in": "S70V",
	"./en-in.js": "S70V",
	"./en-nz": "iDxo",
	"./en-nz.js": "iDxo",
	"./en-sg": "zS0P",
	"./en-sg.js": "zS0P",
	"./eo": "4bvN",
	"./eo.js": "4bvN",
	"./es": "GNPT",
	"./es-do": "R7mU",
	"./es-do.js": "R7mU",
	"./es-mx": "FkqR",
	"./es-mx.js": "FkqR",
	"./es-us": "Nstw",
	"./es-us.js": "Nstw",
	"./es.js": "GNPT",
	"./et": "ZOjb",
	"./et.js": "ZOjb",
	"./eu": "kFC9",
	"./eu.js": "kFC9",
	"./fa": "8Cju",
	"./fa.js": "8Cju",
	"./fi": "vcN1",
	"./fi.js": "vcN1",
	"./fil": "3g1g",
	"./fil.js": "3g1g",
	"./fo": "8Ygf",
	"./fo.js": "8Ygf",
	"./fr": "Y8Ij",
	"./fr-ca": "t+Zl",
	"./fr-ca.js": "t+Zl",
	"./fr-ch": "SPXN",
	"./fr-ch.js": "SPXN",
	"./fr.js": "Y8Ij",
	"./fy": "T3MF",
	"./fy.js": "T3MF",
	"./ga": "NowM",
	"./ga.js": "NowM",
	"./gd": "GJYX",
	"./gd.js": "GJYX",
	"./gl": "MdC8",
	"./gl.js": "MdC8",
	"./gom-deva": "QJjq",
	"./gom-deva.js": "QJjq",
	"./gom-latn": "5j0y",
	"./gom-latn.js": "5j0y",
	"./gu": "fY0S",
	"./gu.js": "fY0S",
	"./he": "ACAV",
	"./he.js": "ACAV",
	"./hi": "3WqV",
	"./hi.js": "3WqV",
	"./hr": "OnNk",
	"./hr.js": "OnNk",
	"./hu": "EQmw",
	"./hu.js": "EQmw",
	"./hy-am": "MNf7",
	"./hy-am.js": "MNf7",
	"./id": "0yow",
	"./id.js": "0yow",
	"./is": "TmOJ",
	"./is.js": "TmOJ",
	"./it": "xD/0",
	"./it-ch": "foQf",
	"./it-ch.js": "foQf",
	"./it.js": "xD/0",
	"./ja": "jOnb",
	"./ja.js": "jOnb",
	"./jv": "lOtj",
	"./jv.js": "lOtj",
	"./ka": "BAN/",
	"./ka.js": "BAN/",
	"./kk": "iNiw",
	"./kk.js": "iNiw",
	"./km": "TUxt",
	"./km.js": "TUxt",
	"./kn": "hQzt",
	"./kn.js": "hQzt",
	"./ko": "ZNZT",
	"./ko.js": "ZNZT",
	"./ku": "S0Tg",
	"./ku.js": "S0Tg",
	"./ky": "JO+T",
	"./ky.js": "JO+T",
	"./lb": "vn/h",
	"./lb.js": "vn/h",
	"./lo": "gnIm",
	"./lo.js": "gnIm",
	"./lt": "6PD3",
	"./lt.js": "6PD3",
	"./lv": "YKe2",
	"./lv.js": "YKe2",
	"./me": "d3TR",
	"./me.js": "d3TR",
	"./mi": "hTlv",
	"./mi.js": "hTlv",
	"./mk": "ffVN",
	"./mk.js": "ffVN",
	"./ml": "ejL1",
	"./ml.js": "ejL1",
	"./mn": "RIsM",
	"./mn.js": "RIsM",
	"./mr": "CPJk",
	"./mr.js": "CPJk",
	"./ms": "d5Hy",
	"./ms-my": "t4T9",
	"./ms-my.js": "t4T9",
	"./ms.js": "d5Hy",
	"./mt": "1KVU",
	"./mt.js": "1KVU",
	"./my": "LsNb",
	"./my.js": "LsNb",
	"./nb": "h+U8",
	"./nb.js": "h+U8",
	"./ne": "2JSI",
	"./ne.js": "2JSI",
	"./nl": "jsZ8",
	"./nl-be": "+h6j",
	"./nl-be.js": "+h6j",
	"./nl.js": "jsZ8",
	"./nn": "mh29",
	"./nn.js": "mh29",
	"./oc-lnc": "zX+o",
	"./oc-lnc.js": "zX+o",
	"./pa-in": "O6bP",
	"./pa-in.js": "O6bP",
	"./pl": "8Bez",
	"./pl.js": "8Bez",
	"./pt": "DDip",
	"./pt-br": "uHm5",
	"./pt-br.js": "uHm5",
	"./pt.js": "DDip",
	"./ro": "baBi",
	"./ro.js": "baBi",
	"./ru": "ecsu",
	"./ru.js": "ecsu",
	"./sd": "e9KM",
	"./sd.js": "e9KM",
	"./se": "CZRU",
	"./se.js": "CZRU",
	"./si": "TO58",
	"./si.js": "TO58",
	"./sk": "K+Lk",
	"./sk.js": "K+Lk",
	"./sl": "QK6v",
	"./sl.js": "QK6v",
	"./sq": "v3Qg",
	"./sq.js": "v3Qg",
	"./sr": "Ndyf",
	"./sr-cyrl": "PGvg",
	"./sr-cyrl.js": "PGvg",
	"./sr.js": "Ndyf",
	"./ss": "2B8G",
	"./ss.js": "2B8G",
	"./sv": "WF5B",
	"./sv.js": "WF5B",
	"./sw": "4VvY",
	"./sw.js": "4VvY",
	"./ta": "dw3T",
	"./ta.js": "dw3T",
	"./te": "4MAb",
	"./te.js": "4MAb",
	"./tet": "/hi0",
	"./tet.js": "/hi0",
	"./tg": "PoVJ",
	"./tg.js": "PoVJ",
	"./th": "OY2w",
	"./th.js": "OY2w",
	"./tk": "zO4H",
	"./tk.js": "zO4H",
	"./tl-ph": "UC+K",
	"./tl-ph.js": "UC+K",
	"./tlh": "cWLW",
	"./tlh.js": "cWLW",
	"./tr": "EqYs",
	"./tr.js": "EqYs",
	"./tzl": "fN8o",
	"./tzl.js": "fN8o",
	"./tzm": "6cYq",
	"./tzm-latn": "pdAN",
	"./tzm-latn.js": "pdAN",
	"./tzm.js": "6cYq",
	"./ug-cn": "J+SV",
	"./ug-cn.js": "J+SV",
	"./uk": "6Olw",
	"./uk.js": "6Olw",
	"./ur": "QNGR",
	"./ur.js": "QNGR",
	"./uz": "hLzJ",
	"./uz-latn": "KqOT",
	"./uz-latn.js": "KqOT",
	"./uz.js": "hLzJ",
	"./vi": "EnIJ",
	"./vi.js": "EnIJ",
	"./x-pseudo": "W7dU",
	"./x-pseudo.js": "W7dU",
	"./yo": "QDhB",
	"./yo.js": "QDhB",
	"./zh-cn": "bjMe",
	"./zh-cn.js": "bjMe",
	"./zh-hk": "JFCg",
	"./zh-hk.js": "JFCg",
	"./zh-mo": "5BRa",
	"./zh-mo.js": "5BRa",
	"./zh-tw": "xBDH",
	"./zh-tw.js": "xBDH"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
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
webpackContext.id = "MROq";

/***/ }),

/***/ "P7zf":
/*!****************************************************************************************!*\
  !*** ../ng-time-chart/src/lib/components/time-table-body/time-table-body.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TimeTableBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTableBodyComponent", function() { return TimeTableBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "YJKf");
/* harmony import */ var _layout_layout_selector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/layout-selector.service */ "RbHu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _item_grouping_item_grouping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item-grouping/item-grouping.component */ "BGqG");






const _c0 = ["todaymarker"];
function TimeTableBodyComponent_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ng-item-grouping", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const itemGrouping_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemGrouping", itemGrouping_r4)("period", ctx_r3.period);
} }
function TimeTableBodyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeTableBodyComponent_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const group_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.open(group_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimeTableBodyComponent_div_1_ng_container_4_Template, 2, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.doLayout(group_r2.items));
} }
function TimeTableBodyComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx_r1.getDayOfPeriod(ctx_r1.today) * ctx_r1.DAY_WIDTH + ctx_r1.SIDEBAR_WIDTH + 7, "px");
} }
class TimeTableBodyComponent {
    constructor(layoutSelectorService) {
        this.layoutSelectorService = layoutSelectorService;
        this.DAY_WIDTH = _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].DAY_WIDTH;
        this.SIDEBAR_WIDTH = _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].SIDEBAR_WIDTH;
        this.groups = [];
    }
    doLayout(items) {
        return this.layoutSelectorService.doLayout(items, this.layoutStrategy);
    }
    getDayOfPeriod(date) {
        if (!this.period.containsDate(date)) {
            return 0;
        }
        return Math.round(date.diff(this.period.startDate, 'days', true)) - 1;
    }
    isInPeriod(time) {
        return this.period.containsDate(time);
    }
    open(group) {
        var _a;
        (_a = group.onClick) === null || _a === void 0 ? void 0 : _a.apply(null);
    }
}
TimeTableBodyComponent.ɵfac = function TimeTableBodyComponent_Factory(t) { return new (t || TimeTableBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_layout_layout_selector_service__WEBPACK_IMPORTED_MODULE_2__["LayoutSelectorService"])); };
TimeTableBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimeTableBodyComponent, selectors: [["ng-time-table-body"]], viewQuery: function TimeTableBodyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.todayMarker = _t.first);
    } }, inputs: { groups: "groups", period: "period", today: "today", durationInDays: "durationInDays", layoutStrategy: "layoutStrategy" }, decls: 3, vars: 4, consts: [[1, "timetable-body"], ["class", "item-group", 4, "ngFor", "ngForOf"], ["class", "today-marker", 3, "left", 4, "ngIf"], [1, "item-group"], [1, "item-label", "label-bar", 3, "click"], [1, "item-display"], [4, "ngFor", "ngForOf"], [3, "itemGrouping", "period"], [1, "today-marker"]], template: function TimeTableBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimeTableBodyComponent_div_1_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimeTableBodyComponent_div_2_Template, 1, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", ctx.durationInDays * ctx.DAY_WIDTH + ctx.SIDEBAR_WIDTH, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInPeriod(ctx.today));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _item_grouping_item_grouping_component__WEBPACK_IMPORTED_MODULE_4__["ItemGroupingComponent"]], styles: [".label-bar[_ngcontent-%COMP%] {\n  background-color: white;\n  z-index: 1000;\n  flex: 1 0 200px;\n  min-width: 200px;\n  max-width: 200px;\n}\n\n.timetable-body[_ngcontent-%COMP%] {\n  padding-top: 0;\n  margin-top: 0;\n  margin-bottom: 4px;\n  position: relative;\n  z-index: 0;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n  position: sticky;\n  left: 0;\n  flex: 1 0 200px;\n  text-align: left;\n  color: #aaa;\n  margin: 0;\n  padding-top: calc(2px + 4px + 1px);\n  padding-bottom: calc(2px + 4px + 1px);\n  z-index: 1000;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .item-display[_ngcontent-%COMP%] {\n  border-top: solid 1px #ccc;\n  width: 100%;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.timetable-body[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #eee;\n}\n\n.today-marker[_ngcontent-%COMP%] {\n  width: 4px;\n  background-color: #b00b1e;\n  display: block;\n  border-left: solid white 1px;\n  border-right: solid white 1px;\n  box-sizing: content-box;\n  position: absolute;\n  top: -40px;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXRpbWUtY2hhcnQvc3JjL3N0eWxlcy82X2NvbXBvbmVudHMvX3NpZGViYXIuc2NzcyIsInByb2plY3RzL25nLXRpbWUtY2hhcnQvc3JjL3N0eWxlcy8xX3NldHRpbmdzL192YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL25nLXRpbWUtY2hhcnQvc3JjL2xpYi9jb21wb25lbnRzL3RpbWUtdGFibGUtYm9keS90aW1lLXRhYmxlLWJvZHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JDSGM7RURJZCxnQkNKYztBQ0doQjs7QUFIQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JESnFCO0VDS3JCLGtCQUFBO0VBQ0EsVUFBQTtBQU1GOztBQUpFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSkk7RUFDRSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXRGJNO0VDY04sU0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0FBTU47O0FBSEk7RUFDRSwwQkFBQTtFQUNBLFdBQUE7QUFLTjs7QUFERTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBR0o7O0FBQUU7RUFDRSxzQkQ5Qlc7QUNnQ2Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EseUJEbENjO0VDbUNkLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvbmctdGltZS1jaGFydC9zcmMvbGliL2NvbXBvbmVudHMvdGltZS10YWJsZS1ib2R5L3RpbWUtdGFibGUtYm9keS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8xX3NldHRpbmdzL3ZhcmlhYmxlc1wiO1xuXG4ubGFiZWwtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGZsZXg6IDEgMCAkc2lkZWJhci13aWR0aDtcbiAgbWluLXdpZHRoOiAkc2lkZWJhci13aWR0aDtcbiAgbWF4LXdpZHRoOiAkc2lkZWJhci13aWR0aDtcbn1cbiIsIiRkYXktd2lkdGg6IDIwcHg7XG4kaXRlbS12ZXJ0aWNhbC1wYWRkaW5nOiAycHg7XG4kaXRlbS12ZXJ0aWNhbC1tYXJnaW46IDRweDtcbiRzaWRlYmFyLXdpZHRoOiAyMDBweDtcbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuJGdyYXktZGFyazogIzg4ODtcbiRncmF5LWJhc2U6ICNhYWE7XG4kZ3JheS1saWdodDogI2NjYztcbiRncmF5LWxpZ2h0ZXI6ICNlZWU7XG4kYnJhbmQtaW5mbzogI2RlYWQwMDtcbiRicmFuZC1wcmltYXJ5OiAjYjAwYjFlO1xuJGJyYW5kLWRhbmdlcjogIzM5OTM4MztcbiRjb2xvci1hOiAjYjAwYjFlO1xuJGNvbG9yLWI6ICNmYTBhYWE7XG4kY29sb3ItYzogIzM5OTM4MztcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvMV9zZXR0aW5ncy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvNl9jb21wb25lbnRzL3NpZGViYXJcIjtcblxuLnRpbWV0YWJsZS1ib2R5IHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206ICRpdGVtLXZlcnRpY2FsLW1hcmdpbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xuXG4gIC5pdGVtLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAuaXRlbS1sYWJlbCB7XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgbGVmdDogMDtcbiAgICAgIGZsZXg6IDEgMCAkc2lkZWJhci13aWR0aDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBjb2xvcjogJGdyYXktYmFzZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKCN7JGl0ZW0tdmVydGljYWwtcGFkZGluZ30gKyAjeyRpdGVtLXZlcnRpY2FsLW1hcmdpbn0gKyAxcHgpO1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoI3skaXRlbS12ZXJ0aWNhbC1wYWRkaW5nfSArICN7JGl0ZW0tdmVydGljYWwtbWFyZ2lufSArIDFweCk7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgIH1cblxuICAgIC5pdGVtLWRpc3BsYXkge1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICRncmF5LWxpZ2h0O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLml0ZW0tZ3JvdXA6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cblxuICAuaXRlbS1ncm91cDpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktbGlnaHRlcjtcbiAgfVxufVxuXG4udG9kYXktbWFya2VyIHtcbiAgd2lkdGg6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJyYW5kLXByaW1hcnk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItbGVmdDogc29saWQgd2hpdGUgMXB4O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIHdoaXRlIDFweDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNDBweDtcbiAgYm90dG9tOiAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeTableBodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-time-table-body',
                templateUrl: './time-table-body.component.html',
                styleUrls: ['./time-table-body.component.scss']
            }]
    }], function () { return [{ type: _layout_layout_selector_service__WEBPACK_IMPORTED_MODULE_2__["LayoutSelectorService"] }]; }, { groups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], period: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], today: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], durationInDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], layoutStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], todayMarker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['todaymarker']
        }] }); })();


/***/ }),

/***/ "Qb5Q":
/*!******************************************!*\
  !*** ../ng-time-chart/src/lib/period.ts ***!
  \******************************************/
/*! exports provided: Period */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Period", function() { return Period; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wgY5");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);


const moment = moment__WEBPACK_IMPORTED_MODULE_0__;
class Period {
    constructor(startDate, endDate) {
        this._startDate = startDate === null || startDate === void 0 ? void 0 : startDate.clone();
        this._endDate = endDate === null || endDate === void 0 ? void 0 : endDate.clone();
    }
    static splitAtNewYear(period) {
        const periods = [];
        if (period.endDate.year() > period.startDate.year()) {
            periods.push(new Period(period.startDate.clone(), moment(`${period.startDate.year()}-12-31`)));
            periods.push(...Period.splitAtNewYear(new Period(moment(`${period.endDate.year()}-01-01`), period.endDate.clone())));
        }
        else {
            periods.push(period);
        }
        return periods;
    }
    static forYear(year) {
        const midYear = moment(`${year}-06-01`);
        return new Period(midYear.clone().startOf('year'), midYear.clone().endOf('year'));
    }
    get startDate() {
        return this._startDate;
    }
    get endDate() {
        return this._endDate;
    }
    get days() {
        return Math.ceil(this.endDate.diff(this.startDate, 'days', true));
    }
    get isoWeeks() {
        function countThursdays(period) {
            let count = 0;
            const startDay = period.startDate.clone().isoWeekday(4);
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
        const periods = Period.splitAtNewYear(this);
        return periods.map(p => countThursdays(p))
            .reduceRight((previousValue, currentValue) => previousValue + currentValue);
    }
    isValid() {
        return !!this.startDate && !!this.endDate && this.startDate.isBefore(this.endDate);
    }
    containsDate(date) {
        return date.isSameOrAfter(this.startDate) && date.isSameOrBefore(this.endDate);
    }
    toString() {
        return `Period (${this.startDate} - ${this.endDate})`;
    }
    overlaps(period) {
        return !!this.intersect(period);
    }
    intersect(period) {
        const latestStart = Object(moment__WEBPACK_IMPORTED_MODULE_0__["max"])(this.startDate, period.startDate);
        const earliestEnd = Object(moment__WEBPACK_IMPORTED_MODULE_0__["min"])(this.endDate, period.endDate);
        if (!latestStart || !earliestEnd) {
            return null;
        }
        if (latestStart.isAfter(earliestEnd)) {
            return null;
        }
        return new Period(latestStart, earliestEnd);
    }
    equals(period) {
        return this.startDate.isSame(period.startDate) && this.endDate.isSame(period.endDate);
    }
}


/***/ }),

/***/ "RbHu":
/*!******************************************************************!*\
  !*** ../ng-time-chart/src/lib/layout/layout-selector.service.ts ***!
  \******************************************************************/
/*! exports provided: LayoutSelectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSelectorService", function() { return LayoutSelectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _layout_strategy_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-strategy.enum */ "JmFJ");
/* harmony import */ var _stacked_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stacked-layout.service */ "b4kT");
/* harmony import */ var _tiled_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tiled-layout.service */ "ch8o");





class LayoutSelectorService {
    constructor(stackedLayout, tiledLayout) {
        this.stackedLayout = stackedLayout;
        this.tiledLayout = tiledLayout;
    }
    /**
     * Does the layout of the an {@link Item} list using the selected strategy
     * @param items The Items to lay out
     * @param strategy The {@link LayoutStrategy} to use to layout the items
     */
    doLayout(items, strategy = _layout_strategy_enum__WEBPACK_IMPORTED_MODULE_1__["LayoutStrategy"].Stacked) {
        switch (strategy) {
            case _layout_strategy_enum__WEBPACK_IMPORTED_MODULE_1__["LayoutStrategy"].Stacked:
                return this.stackedLayout.doLayout(items);
            case _layout_strategy_enum__WEBPACK_IMPORTED_MODULE_1__["LayoutStrategy"].Tiled:
                return this.tiledLayout.doLayout(items);
        }
    }
}
LayoutSelectorService.ɵfac = function LayoutSelectorService_Factory(t) { return new (t || LayoutSelectorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_stacked_layout_service__WEBPACK_IMPORTED_MODULE_2__["StackedLayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tiled_layout_service__WEBPACK_IMPORTED_MODULE_3__["TiledLayoutService"])); };
LayoutSelectorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LayoutSelectorService, factory: LayoutSelectorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutSelectorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _stacked_layout_service__WEBPACK_IMPORTED_MODULE_2__["StackedLayoutService"] }, { type: _tiled_layout_service__WEBPACK_IMPORTED_MODULE_3__["TiledLayoutService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wgY5");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment_locale_de_ch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment/locale/de-ch */ "hHY4");
/* harmony import */ var moment_locale_de_ch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_locale_de_ch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ng-time-chart/src/lib/group */ "8BGo");
/* harmony import */ var _ng_time_chart_src_lib_layout_layout_strategy_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ng-time-chart/src/lib/layout/layout-strategy.enum */ "JmFJ");
/* harmony import */ var _ng_time_chart_src_lib_components_chart_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ng-time-chart/src/lib/components/chart/ng-time-chart.component */ "7chq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "sEIs");








const moment = moment__WEBPACK_IMPORTED_MODULE_1__;
class AppComponent {
    constructor() {
        this.currentYear = moment().year();
        this.title = 'NgTimeChartLibrary';
        this.startDate = moment(`${this.currentYear}-05-01`);
        this.endDate = moment(`${this.currentYear}-08-31`);
        this.tiledLayoutStrategy = _ng_time_chart_src_lib_layout_layout_strategy_enum__WEBPACK_IMPORTED_MODULE_4__["LayoutStrategy"].Tiled;
        this.stackedLayoutStrategy = _ng_time_chart_src_lib_layout_layout_strategy_enum__WEBPACK_IMPORTED_MODULE_4__["LayoutStrategy"].Stacked;
        moment.locale('de-ch');
        this.groups = [
            new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_3__["Group"]('Testgroup 0', [
                {
                    name: 'Testitem 0',
                    startTime: moment(`${this.currentYear}-02-12`),
                    endTime: moment(`${this.currentYear}-03-23`),
                    class: 'type-b'
                },
                {
                    name: 'Testitem 1',
                    startTime: moment(`${this.currentYear}-03-25`),
                    endTime: moment(`${this.currentYear}-03-30T01:30`),
                    class: 'type-a',
                    details: 'More information of Testitem 1',
                    onClick: () => alert('I was clicked 😊')
                },
                {
                    name: 'Testitem 2',
                    startTime: moment(`${this.currentYear}-04-01`),
                    endTime: moment(`${this.currentYear}-04-07`),
                    class: 'type-b'
                },
                {
                    name: 'Testitem 3',
                    startTime: moment(`${this.currentYear}-04-08`),
                    endTime: moment(`${this.currentYear}-04-12`),
                    class: 'type-b'
                },
                {
                    name: 'Testitem 4',
                    startTime: moment(`${this.currentYear}-04-02`),
                    endTime: moment(`${this.currentYear}-04-05`),
                    class: 'type-b',
                    details: 'More information of Testitem 4. A lot of text to show how this is handled.'
                }
            ].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()), () => alert('Group clicked')),
            new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_3__["Group"]('Testgroup 1', [
                {
                    name: 'Testitem 0',
                    startTime: moment(`${this.currentYear}-02-12`),
                    endTime: moment(`${this.currentYear}-05-23`),
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    class: 'type-c'
                },
                {
                    name: 'Testitem 1',
                    startTime: moment(`${this.currentYear}-04-11`),
                    endTime: moment(`${this.currentYear}-04-28T00:30`),
                    details: 'Oh, there\'s a monkey in my pocket, And he\'s stealing all my change. His stare is blank and glassy, I suspect he\'s deranged 🐒',
                    class: 'type-c',
                    dates: [
                        moment(`${this.currentYear}-04-11`),
                        moment(`${this.currentYear}-04-12`),
                        moment(`${this.currentYear}-04-13`),
                        moment(`${this.currentYear}-04-14`),
                        moment(`${this.currentYear}-04-15`),
                        moment(`${this.currentYear}-04-16`),
                        moment(`${this.currentYear}-04-17`),
                        moment(`${this.currentYear}-04-18`),
                        moment(`${this.currentYear}-04-19`),
                        moment(`${this.currentYear}-04-20`),
                        moment(`${this.currentYear}-04-21`),
                        moment(`${this.currentYear}-04-22`),
                        moment(`${this.currentYear}-04-23`),
                        moment(`${this.currentYear}-04-24`),
                        moment(`${this.currentYear}-04-25`),
                        moment(`${this.currentYear}-04-26`),
                        moment(`${this.currentYear}-04-27`),
                        moment(`${this.currentYear}-04-28`)
                    ]
                },
                {
                    name: 'Testitem 2',
                    startTime: moment(`${this.currentYear}-10-08T22:00`),
                    endTime: moment(`${this.currentYear}-10-10T04:30`),
                    class: 'type-b',
                    dates: [
                        moment(`${this.currentYear}-10-08`),
                        moment(`${this.currentYear}-10-09`),
                        moment(`${this.currentYear}-10-10`)
                    ]
                },
                {
                    name: 'Testitem 3',
                    startTime: moment(`${this.currentYear}-10-11T00:01`),
                    endTime: moment(`${this.currentYear}-10-12T05:00`),
                    class: 'type-b',
                    dates: [
                        moment(`${this.currentYear}-10-11`),
                        moment(`${this.currentYear}-10-12`)
                    ]
                },
            ].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()), () => console.log('clicked')),
            new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_3__["Group"]('Testgroup 2', [
                {
                    name: 'Testitem 0',
                    startTime: moment(`${this.currentYear}-06-12T08:23`),
                    endTime: moment(`${this.currentYear}-07-01T06:23`)
                },
                {
                    name: 'Testitem 1',
                    startTime: moment(`${this.currentYear - 1}-08-11`),
                    endTime: moment(`${this.currentYear}-09-02`)
                },
                {
                    name: 'Testitem 3',
                    startTime: moment(`${this.currentYear}-07-01T08:23`),
                    endTime: moment(`${this.currentYear}-07-12T23:23`)
                },
            ].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()), () => console.log('clicked')),
            new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_3__["Group"]('Testgroup 3', [
                {
                    name: 'Testitem 0',
                    startTime: moment(`${this.currentYear}-09-12`),
                    endTime: moment(`${this.currentYear}-10-23`)
                },
                {
                    name: 'Testitem 1',
                    startTime: moment(`${this.currentYear}-10-11`),
                    endTime: moment(`${this.currentYear}-11-02`)
                }
            ].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()), () => console.log('clicked')),
            new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_3__["Group"]('Testgroup 4', [
                {
                    name: 'Testitem 0',
                    startTime: moment(`${this.currentYear}-02-12`),
                    endTime: moment(`${this.currentYear}-05-23`)
                },
                {
                    name: 'Testitem 1',
                    startTime: moment(`${this.currentYear}-12-11`),
                    endTime: moment(`${this.currentYear + 1}-03-02`)
                }
            ].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()), () => console.log('clicked')),
            new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_3__["Group"]('Testgroup 5', [
                {
                    name: 'Testitem 0',
                    startTime: moment(`${this.currentYear}-03-12`),
                    endTime: moment(`${this.currentYear}-03-23`)
                },
                {
                    name: 'Testitem 1',
                    startTime: moment(`${this.currentYear}-03-11`),
                    endTime: moment(`${this.currentYear}-04-02`)
                },
                {
                    name: 'Testitem 2',
                    startTime: moment(`${this.currentYear}-04-01`),
                    endTime: moment(`${this.currentYear}-04-04`)
                }
            ].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()), () => console.log('clicked')),
            new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_3__["Group"]('Testgroup 6', [
                {
                    name: 'Testitem 0',
                    startTime: moment(`${this.currentYear}-06-12`),
                    endTime: moment(`${this.currentYear}-07-23`),
                    class: 'type-c'
                },
                {
                    name: 'Testitem 1',
                    startTime: moment(`${this.currentYear - 1}-08-11`),
                    endTime: moment(`${this.currentYear}-09-02`),
                    class: 'type-a'
                }
            ].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()), () => console.log('clicked')),
            new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_3__["Group"]('Testgroup 7', [
                {
                    name: 'Testitem 0',
                    startTime: moment(`${this.currentYear - 1}-09-12`),
                    endTime: moment(`${this.currentYear - 1}-10-23`),
                    class: 'my-class-a'
                },
                {
                    name: 'Testitem 1',
                    startTime: moment(`${this.currentYear - 2}-10-11`),
                    endTime: moment(`${this.currentYear - 1}-11-02`),
                    class: 'my-class-a'
                }
            ].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()), () => console.log('clicked')),
            new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_3__["Group"]('Testgroup 8', [
                {
                    name: 'Testitem 0',
                    startTime: moment(`${this.currentYear}-02-12`),
                    endTime: moment(`${this.currentYear}-04-23`)
                },
                {
                    name: 'Testitem 1',
                    startTime: moment(`${this.currentYear}-05-11`),
                    endTime: moment(`${this.currentYear}-06-02`)
                }
            ].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()), () => console.log('clicked')),
            new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_3__["Group"]('Testgroup 9', [
                {
                    name: 'Testitem 0',
                    startTime: moment(`${this.currentYear}-02-12`),
                    endTime: moment(`${this.currentYear}-05-23`),
                    dates: [
                        moment(`${this.currentYear}-04-11`),
                        moment(`${this.currentYear}-04-12`)
                    ]
                },
                {
                    name: 'Testitem 1',
                    startTime: moment(`${this.currentYear}-04-11`),
                    endTime: moment(`${this.currentYear}-05-02`)
                }
            ].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()), () => console.log('clicked')),
            new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_3__["Group"]('Testgroup 10', [
                {
                    name: 'Testitem 0',
                    startTime: moment(`${this.currentYear}-06-12`),
                    endTime: moment(`${this.currentYear}-07-23`),
                    class: 'type-a',
                    dates: [
                        moment(`${this.currentYear}-06-18`),
                        moment(`${this.currentYear}-06-19`),
                        moment(`${this.currentYear}-06-23`),
                        moment(`${this.currentYear}-06-24`)
                    ]
                },
                {
                    name: 'Testitem 1',
                    startTime: moment(`${this.currentYear - 1}-08-11`),
                    endTime: moment(`${this.currentYear}-06-02`),
                    class: 'type-a'
                }
            ].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()), () => console.log('clicked')),
            new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_3__["Group"]('Testgroup 11', [
                {
                    name: 'Testitem 0',
                    startTime: moment(`${this.currentYear}-09-12`),
                    endTime: moment(`${this.currentYear + 1}-01-23`)
                },
                {
                    name: 'Testitem 1',
                    startTime: moment(`${this.currentYear - 1}-10-11`),
                    endTime: moment(`${this.currentYear}-11-02`)
                }
            ].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()), () => console.log('clicked')),
            new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_3__["Group"]('Testgroup 12', [
                {
                    name: 'Testitem 1',
                    startTime: moment(`${this.currentYear - 1}-09-01T20:30:00`),
                    endTime: moment(`${this.currentYear + 1}-12-12T04:30:00`),
                }
            ].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()), () => console.log('clicked')),
            new _ng_time_chart_src_lib_group__WEBPACK_IMPORTED_MODULE_3__["Group"]('Testgroup 13', [
                {
                    name: 'Testitem 1',
                    startTime: moment(`${this.currentYear - 1}-09-01T20:30:00`),
                    endTime: moment(`${this.currentYear - 1}-12-12T04:30:00`),
                },
                {
                    name: 'Testitem 2',
                    startTime: moment(`${this.currentYear}-09-01T20:30:00`),
                    endTime: moment(`${this.currentYear}-12-12T04:30:00`),
                },
                {
                    name: 'Testitem 3',
                    startTime: moment(`${this.currentYear + 1}-09-01T20:30:00`),
                    endTime: moment(`${this.currentYear + 1}-12-12T04:30:00`),
                }
            ].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()), () => console.log('clicked')),
        ];
    }
    setStartDate(value) {
        this.startDate = (!!value && value.length > 0) ? moment((value)) : null;
    }
    setEndDate(value) {
        this.endDate = (!!value && value.length > 0) ? moment((value)) : null;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["ng-tl-root"]], decls: 23, vars: 7, consts: [[1, "content"], [2, "text-align", "center"], [1, "calendar-showcase"], [3, "groups", "layoutStrategy"], [1, "calendar-showcase", 2, "margin-top", "100px"], [1, "date-input"], ["for", "start-date"], ["type", "date", "id", "start-date", "name", "start-date", "value", "2020-05-01", 3, "blur"], ["start_date", ""], ["for", "end-date"], ["type", "date", "id", "end-date", "name", "end-date", "value", "2020-08-31", 3, "blur"], ["end_date", ""], [3, "groups", "startDate", "endDate", "layoutStrategy"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AppComponent_Template_input_blur_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); return ctx.setStartDate(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "End date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AppComponent_Template_input_blur_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return ctx.setEndDate(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ng-time-chart", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome to ", ctx.title, "! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groups", ctx.groups)("layoutStrategy", ctx.tiledLayoutStrategy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groups", ctx.groups)("startDate", ctx.startDate)("endDate", ctx.endDate)("layoutStrategy", ctx.stackedLayoutStrategy);
    } }, directives: [_ng_time_chart_src_lib_components_chart_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_5__["NgTimeChartComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: [".calendar-showcase[_ngcontent-%COMP%] {\n  max-height: 400px;\n  display: flex;\n  flex-direction: column;\n}\n.calendar-showcase[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.calendar-showcase[_ngcontent-%COMP%]   ng-time-chart[_ngcontent-%COMP%] {\n  flex: 3;\n}\n.date-input[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 2em;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXRpbWUtY2hhcnQtc2hvd2Nhc2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0U7RUFDRSxPQUFBO0FBQ0o7QUFFRTtFQUNFLE9BQUE7QUFBSjtBQUlBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0FBREYiLCJmaWxlIjoicHJvamVjdHMvbmctdGltZS1jaGFydC1zaG93Y2FzZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxlbmRhci1zaG93Y2FzZSB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGgxIHtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgbmctdGltZS1jaGFydCB7XG4gICAgZmxleDogMztcbiAgfVxufVxuXG4uZGF0ZS1pbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogNGVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-tl-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Tkk5":
/*!********************************************************!*\
  !*** ../ng-time-chart/src/lib/service/year.service.ts ***!
  \********************************************************/
/*! exports provided: YearService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearService", function() { return YearService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _period__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../period */ "Qb5Q");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wgY5");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");






const moment = moment__WEBPACK_IMPORTED_MODULE_3__;
class YearService {
    constructor() {
        this._year$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](moment().year());
        this._period$ = this._year$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(year => YearService.periodForYear(year)));
    }
    set year(value) {
        this._year$.next(value);
    }
    get year$() {
        return this._year$.asObservable();
    }
    get period$() {
        return this._period$;
    }
    static periodForYear(year) {
        return _period__WEBPACK_IMPORTED_MODULE_2__["Period"].forYear(year);
    }
}
YearService.ɵfac = function YearService_Factory(t) { return new (t || YearService)(); };
YearService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: YearService, factory: YearService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "X80r":
/*!*******************************************************************!*\
  !*** ../ng-time-chart/src/lib/components/ng-time-chart.module.ts ***!
  \*******************************************************************/
/*! exports provided: NgTimeChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgTimeChartModule", function() { return NgTimeChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _chart_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/ng-time-chart.component */ "7chq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _time_table_body_time_table_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time-table-body/time-table-body.component */ "P7zf");
/* harmony import */ var _item_grouping_item_grouping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-grouping/item-grouping.component */ "BGqG");
/* harmony import */ var _pipes_time_chart_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/time-chart-date-formatter.pipe */ "y7nZ");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item/item.component */ "vRAa");








class NgTimeChartModule {
}
NgTimeChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgTimeChartModule });
NgTimeChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgTimeChartModule_Factory(t) { return new (t || NgTimeChartModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgTimeChartModule, { declarations: [_time_table_body_time_table_body_component__WEBPACK_IMPORTED_MODULE_3__["TimeTableBodyComponent"],
        _item_grouping_item_grouping_component__WEBPACK_IMPORTED_MODULE_4__["ItemGroupingComponent"],
        _pipes_time_chart_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeChartDateFormatterPipe"],
        _item_item_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponent"],
        _chart_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_1__["NgTimeChartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_item_item_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponent"],
        _time_table_body_time_table_body_component__WEBPACK_IMPORTED_MODULE_3__["TimeTableBodyComponent"],
        _item_grouping_item_grouping_component__WEBPACK_IMPORTED_MODULE_4__["ItemGroupingComponent"],
        _chart_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_1__["NgTimeChartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTimeChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _time_table_body_time_table_body_component__WEBPACK_IMPORTED_MODULE_3__["TimeTableBodyComponent"],
                    _item_grouping_item_grouping_component__WEBPACK_IMPORTED_MODULE_4__["ItemGroupingComponent"],
                    _pipes_time_chart_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeChartDateFormatterPipe"],
                    _item_item_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponent"],
                    _chart_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_1__["NgTimeChartComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ],
                exports: [
                    _item_item_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponent"],
                    _time_table_body_time_table_body_component__WEBPACK_IMPORTED_MODULE_3__["TimeTableBodyComponent"],
                    _item_grouping_item_grouping_component__WEBPACK_IMPORTED_MODULE_4__["ItemGroupingComponent"],
                    _chart_ng_time_chart_component__WEBPACK_IMPORTED_MODULE_1__["NgTimeChartComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "YJKf":
/*!*********************************************!*\
  !*** ../ng-time-chart/src/lib/constants.ts ***!
  \*********************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
class Constants {
}
Constants.DAY_WIDTH = 20;
Constants.SIDEBAR_WIDTH = 200;


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_time_chart_src_lib_components_ng_time_chart_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ng-time-chart/src/lib/components/ng-time-chart.module */ "X80r");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_time_chart_src_lib_components_ng_time_chart_module__WEBPACK_IMPORTED_MODULE_4__["NgTimeChartModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_time_chart_src_lib_components_ng_time_chart_module__WEBPACK_IMPORTED_MODULE_4__["NgTimeChartModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_time_chart_src_lib_components_ng_time_chart_module__WEBPACK_IMPORTED_MODULE_4__["NgTimeChartModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "b4kT":
/*!*****************************************************************!*\
  !*** ../ng-time-chart/src/lib/layout/stacked-layout.service.ts ***!
  \*****************************************************************/
/*! exports provided: StackedLayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackedLayoutService", function() { return StackedLayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class StackedLayoutService {
    constructor() {
    }
    doLayout(items) {
        return items.map(item => [item]);
    }
}
StackedLayoutService.ɵfac = function StackedLayoutService_Factory(t) { return new (t || StackedLayoutService)(); };
StackedLayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StackedLayoutService, factory: StackedLayoutService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StackedLayoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ch8o":
/*!***************************************************************!*\
  !*** ../ng-time-chart/src/lib/layout/tiled-layout.service.ts ***!
  \***************************************************************/
/*! exports provided: TiledLayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiledLayoutService", function() { return TiledLayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class TiledLayoutService {
    constructor() {
    }
    /**
     * Tries to layout items in the most compact way
     * @param items The {@link Item}s to lay out.
     */
    doLayout(items) {
        const itemOrder = new ItemOrder();
        const sorted = items.sort((a, b) => a.startTime.diff(b.startTime));
        sorted.forEach(item => itemOrder.add(item));
        return itemOrder.queues;
    }
}
TiledLayoutService.ɵfac = function TiledLayoutService_Factory(t) { return new (t || TiledLayoutService)(); };
TiledLayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TiledLayoutService, factory: TiledLayoutService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TiledLayoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
class ItemOrder {
    constructor() {
        this._queues = [];
    }
    get queues() {
        return this._queues;
    }
    static getStartDate(item) {
        return item.startTime.clone().startOf('day');
    }
    static getEndDate(item) {
        return item.endTime.clone().endOf('day');
    }
    add(item) {
        this.getFreeQueue(ItemOrder.getStartDate(item)).push(item);
    }
    getFreeQueue(date) {
        if (this._queues.length === 0) {
            return this.createNewSubQueue();
        }
        const queuesWithFreeSpace = this._queues.filter(queue => ItemOrder.getEndDate(queue[queue.length - 1]).isBefore(date));
        if (queuesWithFreeSpace.length > 0) {
            return queuesWithFreeSpace[0];
        }
        return this.createNewSubQueue();
    }
    createNewSubQueue() {
        const myQueue = [];
        this._queues.push(myQueue);
        return myQueue;
    }
}


/***/ }),

/***/ "kKY0":
/*!**********************************************************!*\
  !*** ../ng-time-chart/src/lib/service/period.service.ts ***!
  \**********************************************************/
/*! exports provided: PeriodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodService", function() { return PeriodService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _period__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../period */ "Qb5Q");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wgY5");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");






const moment = moment__WEBPACK_IMPORTED_MODULE_3__;
/**
 * The service provides the current calendar period. It is specified:
 * <ul>
 *   <li>As the period between a start and end date if both are specified</li>
 *   <li>The duration of a year following the start date if no end date is specified</li>
 *   <li>The duration of a year preceding the end date if no start date is specified</li>
 *   <li>The full current year from jan 1st to dec 31 if neither start nor end date are specified</li>
 */
class PeriodService {
    constructor() {
        this._startDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._endDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._period$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](PeriodService.getCurrentYearPeriod());
        const startAndEnd$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this._startDate$, this._endDate$]);
        this._isFullYear$ = startAndEnd$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([start, end]) => !start && !end));
        this._period$ = startAndEnd$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([start, end]) => PeriodService.calculatePeriod(start, end)));
    }
    /**
     * Set the start date of the period. If the parameter is null the start date will be calculated
     * @param date A momentjs date or null
     */
    set startDate(date) {
        this._startDate$.next(date);
    }
    /**
     * Set the end date of the period. If the parameter is null the end date will be  calculated.
     * @param date A momentjs date or null
     */
    set endDate(date) {
        this._endDate$.next(date);
    }
    /**
     * The observable with the period between start- and end date or the current year if neither is passed.
     */
    get period$() {
        return this._period$;
    }
    /**
     * Returns true if neither start nor end were given and the current year was picked instead.
     */
    get isFullYear$() {
        return this._isFullYear$;
    }
    static getCurrentYearPeriod() {
        const currentYear = moment();
        return new _period__WEBPACK_IMPORTED_MODULE_2__["Period"](currentYear.clone().startOf('year'), currentYear.clone().endOf('year'));
    }
    static calculatePeriod(startDate, endDate) {
        if (startDate == null && endDate == null) {
            return null;
        }
        let myStartDate;
        if (startDate != null) {
            myStartDate = startDate;
        }
        else {
            myStartDate = endDate.clone();
            myStartDate.subtract(1, 'year');
        }
        let myEndDate;
        if (endDate != null) {
            myEndDate = endDate.clone();
        }
        else {
            myEndDate = myStartDate.clone();
            myEndDate.add(1, 'year');
        }
        return new _period__WEBPACK_IMPORTED_MODULE_2__["Period"](myStartDate, myEndDate);
    }
}
PeriodService.ɵfac = function PeriodService_Factory(t) { return new (t || PeriodService)(); };
PeriodService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PeriodService, factory: PeriodService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeriodService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vRAa":
/*!******************************************************************!*\
  !*** ../ng-time-chart/src/lib/components/item/item.component.ts ***!
  \******************************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "YJKf");
/* harmony import */ var _period__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../period */ "Qb5Q");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wgY5");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _pipes_time_chart_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/time-chart-date-formatter.pipe */ "y7nZ");







function ItemComponent_div_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx_r4.getDaysSince(ctx_r4.item.startTime, day_r3) * ctx_r4.DAY_WIDTH, "px");
} }
function ItemComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemComponent_div_0_ng_container_1_div_1_Template, 2, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isInPeriod(day_r3));
} }
function ItemComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.item.details);
} }
function ItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.open(ctx_r6.item); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "timeChartDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "timeChartDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ItemComponent_div_0_div_6_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("item ", ctx_r0.item.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx_r0.getDayOfPeriod(ctx_r0.item.startTime) * ctx_r0.DAY_WIDTH + ctx_r0.SIDEBAR_WIDTH, "px")("min-width", ctx_r0.getDuration(ctx_r0.item) * ctx_r0.DAY_WIDTH, "px")("max-width", ctx_r0.getDuration(ctx_r0.item) * ctx_r0.DAY_WIDTH, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open-left", ctx_r0.isNotInPeriod(ctx_r0.item.startTime))("open-right", ctx_r0.isNotInPeriod(ctx_r0.item.endTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.item.dates);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r0.item.name, " (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 18, ctx_r0.item.startTime), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 20, ctx_r0.item.endTime), ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.details);
} }
const moment = moment__WEBPACK_IMPORTED_MODULE_3__;
class ItemComponent {
    constructor() {
        this.DAY_WIDTH = _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].DAY_WIDTH;
        this.SIDEBAR_WIDTH = _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].SIDEBAR_WIDTH;
    }
    ngOnInit() {
    }
    isVisible(item) {
        return this.isInPeriod(item.startTime) ||
            this.isInPeriod(item.endTime) ||
            new _period__WEBPACK_IMPORTED_MODULE_2__["Period"](item.startTime, item.endTime).containsDate(this.period.startDate);
    }
    isInPeriod(time) {
        return this.period.containsDate(time);
    }
    getDayOfPeriod(date) {
        if (!this.period.containsDate(date)) {
            return 0;
        }
        return Math.floor(date.diff(this.period.startDate, 'days', true));
    }
    getDuration(item) {
        const startDate = this.getStartDateInCurrentPeriod(item.startTime).startOf('day');
        const endDate = this.getEndDateCurrentPeriod(item.endTime).endOf('day');
        return Math.ceil(endDate.diff(startDate, 'days', true));
    }
    isNotInPeriod(time) {
        return !this.period.containsDate(time);
    }
    getDaysSince(referenceDate, date) {
        const refDate = this.getStartDateInCurrentPeriod(moment(referenceDate)).startOf('day');
        const myDate = this.getStartDateInCurrentPeriod(moment(date)).startOf('day');
        return Math.ceil(myDate.diff(moment(refDate), 'days', true));
    }
    open(item) {
        var _a;
        (_a = item.onClick) === null || _a === void 0 ? void 0 : _a.apply(null);
    }
    getStartDateInCurrentPeriod(startDate) {
        const date = startDate.clone();
        if (date.isBefore(this.period.startDate)) {
            return this.period.startDate.clone();
        }
        return date;
    }
    getEndDateCurrentPeriod(endDate) {
        const date = endDate.clone();
        if (date.isAfter(this.period.endDate)) {
            return this.period.endDate.clone();
        }
        return date;
    }
}
ItemComponent.ɵfac = function ItemComponent_Factory(t) { return new (t || ItemComponent)(); };
ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemComponent, selectors: [["ng-item"]], inputs: { period: "period", item: "item" }, decls: 1, vars: 1, consts: [[3, "class", "left", "minWidth", "maxWidth", "open-left", "open-right", "click", 4, "ngIf"], [3, "click"], [4, "ngFor", "ngForOf"], [1, "blockade-title"], ["class", "blockade-details", 4, "ngIf"], ["class", "blockade-day day-width-1", 3, "left", 4, "ngIf"], [1, "blockade-day", "day-width-1"], [1, "blockade-details"]], template: function ItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ItemComponent_div_0_Template, 7, 22, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible(ctx.item));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_pipes_time_chart_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeChartDateFormatterPipe"]], styles: [".day-width-1[_ngcontent-%COMP%] {\n  min-width: 20px;\n  max-width: 20px;\n}\n\n.item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  border-radius: 10px;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin: 4px 0;\n  transition: 0.5s;\n  display: inline-block;\n}\n\n.item[_ngcontent-%COMP%]   .blockade-title[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.item[_ngcontent-%COMP%]   .blockade-details[_ngcontent-%COMP%] {\n  display: none;\n  position: relative;\n}\n\n.item[_ngcontent-%COMP%]:hover {\n  filter: brightness(110%);\n  transform: scaleY(1.1);\n  max-width: unset !important;\n  z-index: 999;\n  padding-left: 8px;\n  padding-right: 8px;\n  transition: all ease-in-out 0.2s;\n  opacity: 0.95;\n}\n\n.item[_ngcontent-%COMP%]:hover   .blockade-details[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: normal;\n  max-width: 40em;\n  white-space: normal;\n  margin-top: 8px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n}\n\n.item[_ngcontent-%COMP%]:hover   .blockade-day[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.type-a[_ngcontent-%COMP%] {\n  border-color: #b00b1e;\n  background-color: #f77786;\n  color: white;\n}\n\n.type-a[_ngcontent-%COMP%]   .blockade-day[_ngcontent-%COMP%] {\n  background-color: #b00b1e;\n}\n\n.type-b[_ngcontent-%COMP%] {\n  border-color: #fa0aaa;\n  background-color: #feb9e7;\n}\n\n.type-b[_ngcontent-%COMP%]   .blockade-day[_ngcontent-%COMP%] {\n  background-color: #fa0aaa;\n}\n\n.type-c[_ngcontent-%COMP%] {\n  border-color: #399383;\n  background-color: #a3dbd1;\n}\n\n.type-c[_ngcontent-%COMP%]   .blockade-day[_ngcontent-%COMP%] {\n  background-color: #399383;\n}\n\n.blockade-day[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  margin-top: -2px;\n  height: 100%;\n}\n\n.open-left[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.open-right[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXRpbWUtY2hhcnQvc3JjL3N0eWxlcy81X29iamVjdHMvX2RheS5zY3NzIiwicHJvamVjdHMvbmctdGltZS1jaGFydC9zcmMvc3R5bGVzLzFfc2V0dGluZ3MvX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMvbmctdGltZS1jaGFydC9zcmMvbGliL2NvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUNIVTtFRElWLGVDSlU7QUNHWjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkRic0I7RUNjdEIsbUJEZHNCO0VDZXRCLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBR0Y7O0FBREU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFHSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUdBO0VBQ0Usd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUFBRjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7QUFESjs7QUFLQTtFQUNFLHFCRGhEUTtFQ2lEUix5QkFBQTtFQUNBLFlBQUE7QUFGRjs7QUFJRTtFQUNFLHlCRHJETTtBQ21EVjs7QUFNQTtFQUNFLHFCRHpEUTtFQzBEUix5QkFBQTtBQUhGOztBQUtFO0VBQ0UseUJEN0RNO0FDMERWOztBQU9BO0VBQ0UscUJEakVRO0VDa0VSLHlCQUFBO0FBSkY7O0FBTUU7RUFDRSx5QkRyRU07QUNpRVY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTEY7O0FBUUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FBTEY7O0FBUUE7RUFDRSwwQkFBQTtFQUNBLDZCQUFBO0FBTEYiLCJmaWxlIjoicHJvamVjdHMvbmctdGltZS1jaGFydC9zcmMvbGliL2NvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLzFfc2V0dGluZ3MvdmFyaWFibGVzXCI7XG5cbi5kYXktd2lkdGgtMSB7XG4gIG1pbi13aWR0aDogJGRheS13aWR0aDtcbiAgbWF4LXdpZHRoOiAkZGF5LXdpZHRoO1xufVxuIiwiJGRheS13aWR0aDogMjBweDtcbiRpdGVtLXZlcnRpY2FsLXBhZGRpbmc6IDJweDtcbiRpdGVtLXZlcnRpY2FsLW1hcmdpbjogNHB4O1xuJHNpZGViYXItd2lkdGg6IDIwMHB4O1xuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG4kZ3JheS1kYXJrOiAjODg4O1xuJGdyYXktYmFzZTogI2FhYTtcbiRncmF5LWxpZ2h0OiAjY2NjO1xuJGdyYXktbGlnaHRlcjogI2VlZTtcbiRicmFuZC1pbmZvOiAjZGVhZDAwO1xuJGJyYW5kLXByaW1hcnk6ICNiMDBiMWU7XG4kYnJhbmQtZGFuZ2VyOiAjMzk5MzgzO1xuJGNvbG9yLWE6ICNiMDBiMWU7XG4kY29sb3ItYjogI2ZhMGFhYTtcbiRjb2xvci1jOiAjMzk5MzgzO1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy8xX3NldHRpbmdzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy81X29iamVjdHMvZGF5XCI7XG5cbi5pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZy10b3A6ICRpdGVtLXZlcnRpY2FsLXBhZGRpbmc7XG4gIHBhZGRpbmctYm90dG9tOiAkaXRlbS12ZXJ0aWNhbC1wYWRkaW5nO1xuICBtYXJnaW46IDRweCAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgLmJsb2NrYWRlLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICB9XG5cbiAgLmJsb2NrYWRlLWRldGFpbHMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbi5pdGVtOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgxLjEpO1xuICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4ycztcbiAgb3BhY2l0eTogMC45NTtcblxuICAuYmxvY2thZGUtZGV0YWlscyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXgtd2lkdGg6IDQwZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAuYmxvY2thZGUtZGF5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi50eXBlLWEge1xuICBib3JkZXItY29sb3I6ICRjb2xvci1hO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRjb2xvci1hLCAzNSUpO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgLmJsb2NrYWRlLWRheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWE7XG4gIH1cbn1cblxuLnR5cGUtYiB7XG4gIGJvcmRlci1jb2xvcjogJGNvbG9yLWI7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yLWIsIDM1JSk7XG5cbiAgLmJsb2NrYWRlLWRheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWI7XG4gIH1cbn1cblxuLnR5cGUtYyB7XG4gIGJvcmRlci1jb2xvcjogJGNvbG9yLWM7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yLWMsIDM1JSk7XG5cbiAgLmJsb2NrYWRlLWRheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWM7XG4gIH1cbn1cblxuLmJsb2NrYWRlLWRheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAtJGl0ZW0tdmVydGljYWwtcGFkZGluZztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ub3Blbi1sZWZ0IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cblxuLm9wZW4tcmlnaHQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-item',
                templateUrl: './item.component.html',
                styleUrls: ['./item.component.scss']
            }]
    }], function () { return []; }, { period: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "y7nZ":
/*!************************************************************************!*\
  !*** ../ng-time-chart/src/lib/pipes/time-chart-date-formatter.pipe.ts ***!
  \************************************************************************/
/*! exports provided: TimeChartDateFormatterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeChartDateFormatterPipe", function() { return TimeChartDateFormatterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wgY5");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);



const moment = moment__WEBPACK_IMPORTED_MODULE_1__;
class TimeChartDateFormatterPipe {
    transform(dateString) {
        return moment(dateString).format('D. M.');
    }
}
TimeChartDateFormatterPipe.ɵfac = function TimeChartDateFormatterPipe_Factory(t) { return new (t || TimeChartDateFormatterPipe)(); };
TimeChartDateFormatterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "timeChartDateFormatter", type: TimeChartDateFormatterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeChartDateFormatterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'timeChartDateFormatter'
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2018.js.map