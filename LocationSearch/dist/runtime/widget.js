System.register(["jimu-core","jimu-arcgis","esri/geometry/Point","esri/geometry/SpatialReference","esri/geometry/coordinateFormatter","esri/Graphic","esri/symbols/SimpleMarkerSymbol","jimu-core/react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_coordinateFormatter__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleMarkerSymbol__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_coordinateFormatter__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Graphic__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleMarkerSymbol__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_coordinateFormatter__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_Graphic__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleMarkerSymbol__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "esri/Graphic":
/*!*******************************!*\
  !*** external "esri/Graphic" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_Graphic__;

/***/ }),

/***/ "esri/geometry/Point":
/*!**************************************!*\
  !*** external "esri/geometry/Point" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__;

/***/ }),

/***/ "esri/geometry/SpatialReference":
/*!*************************************************!*\
  !*** external "esri/geometry/SpatialReference" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__;

/***/ }),

/***/ "esri/geometry/coordinateFormatter":
/*!****************************************************!*\
  !*** external "esri/geometry/coordinateFormatter" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_coordinateFormatter__;

/***/ }),

/***/ "esri/symbols/SimpleMarkerSymbol":
/*!**************************************************!*\
  !*** external "esri/symbols/SimpleMarkerSymbol" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleMarkerSymbol__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/LocationSearch/src/runtime/widget.tsx ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var esri_geometry_Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri/geometry/Point */ "esri/geometry/Point");
/* harmony import */ var esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/geometry/SpatialReference */ "esri/geometry/SpatialReference");
/* harmony import */ var esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/geometry/coordinateFormatter */ "esri/geometry/coordinateFormatter");
/* harmony import */ var esri_Graphic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/Graphic */ "esri/Graphic");
/* harmony import */ var esri_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/symbols/SimpleMarkerSymbol */ "esri/symbols/SimpleMarkerSymbol");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");








const Widget = (props) => {
    var _a;
    const [view, setMapView] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const [labelX, setLabelInputX] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('ลองจิจูด:');
    const [labelY, setLabelInputY] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('ละติจูด:');
    const [coorType, setCoordinateType] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('GCS');
    const [valX, setValueInputX] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const [valY, setValueInputY] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const onActiveViewChange = (jmv) => {
        setMapView(jmv.view);
    };
    const onChangeCoordinateType = (event) => {
        const value = event.target.value;
        console.log('onChangeCoordinateType', value);
        setValueInputX("");
        setValueInputY("");
        setCoordinateType(value);
        switch (value) {
            case 'GCS':
                setLabelInputX('ลองจิจูด:');
                setLabelInputY('ละติจูด:');
                break;
            default:
                setLabelInputX('X:');
                setLabelInputY('Y:');
                break;
        }
    };
    const onLocationSearch = (event) => {
        const value = event.target.value;
        console.log('coorType', coorType);
        const x = parseFloat(valX);
        const y = parseFloat(valY);
        if (coorType === 'GCS') {
            const point = new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_2__["default"]({ x: x, y: y, spatialReference: new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_3__["default"]({ wkid: 4326 }) });
            view.goTo({
                center: [point.x, point.y],
                zoom: 16
            });
            pointMaker(point);
        }
        else {
            esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_4__["default"].load().then(() => {
                const utmString = coorType + ' ' + x + ' ' + y;
                const point = esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_4__["default"].fromUtm(utmString, null, 'north-south-indicators');
                view.goTo({
                    center: [point.x, point.y],
                    zoom: 16
                });
                pointMaker(point);
            });
        }
    };
    const pointMaker = (point) => {
        view.graphics.removeAll();
        const point1 = new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_2__["default"]({
            latitude: point.latitude,
            longitude: point.longitude
        });
        const symbol = new esri_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_6__["default"]({
            style: 'x',
            color: [0, 255, 0, 0, 0.5],
            size: '15px', //pixels
            outline: {
                color: [255, 0, 0],
                width: 3 //points
            }
        });
        const graphic = new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
            geometry: point1,
            symbol: symbol
        });
        view.graphics.removeAll();
        view.graphics.add(graphic);
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-location-search jimu-widget m-2" },
        props.useMapWidgetIds &&
            props.useMapWidgetIds.length === 1 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: onActiveViewChange })),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "content" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null, "\u0E23\u0E30\u0E1A\u0E38\u0E1E\u0E34\u0E01\u0E31\u0E14\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E1A\u0E19\u0E41\u0E1C\u0E19\u0E17\u0E35\u0E48"),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { style: { width: '58px' } }, "\u0E23\u0E30\u0E1A\u0E1A\u0E1E\u0E34\u0E01\u0E31\u0E14:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { style: { width: 'calc(100% - 84px)', marginLeft: '8px' }, name: "coordinateType", id: "coordinateType", onChange: onChangeCoordinateType },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "GCS" }, "GCS"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "47N" }, "UTM Zone 47N"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "48N" }, "UTM Zone 48N"))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { style: { width: '58px', textAlign: 'right' } }, labelX),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { style: { width: 'calc(100% - 84px)', marginLeft: '8px' }, name: "inputX", id: "inputX", value: valX, onChange: (e) => setValueInputX(e.target.value) })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { style: { width: '58px', textAlign: 'right' } }, labelY),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { style: { width: 'calc(100% - 84px)', marginLeft: '8px' }, name: "inputY", id: "inputY", value: valY, onChange: (e) => setValueInputY(e.target.value) })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', marginTop: '8px', justifyContent: 'center' } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "esri-button", style: { width: '80px', borderRadius: '8px' }, onClick: onLocationSearch }, "\u0E04\u0E49\u0E19\u0E2B\u0E32")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9Mb2NhdGlvblNlYXJjaC9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05HO0FBQ1M7QUFDeEI7QUFDc0I7QUFDTTtBQUNqQztBQUM4QjtBQUVoQztBQUVoQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQStCLEVBQUUsRUFBRTs7SUFDakQsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsR0FBRywrQ0FBUSxDQUFNLElBQUksQ0FBQztJQUU5QyxNQUFNLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxHQUFHLCtDQUFRLENBQVMsV0FBVyxDQUFDO0lBQzlELE1BQU0sQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLEdBQUcsK0NBQVEsQ0FBUyxVQUFVLENBQUM7SUFD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YSxFQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IscUNBRS9GLENBQ0wsQ0FDRCxDQUNGLENBQ1I7QUFDSCxDQUFDO0FBRUQsaUVBQWUsTUFBTTtBQUNiLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL0dyYXBoaWNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvUG9pbnRcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9jb29yZGluYXRlRm9ybWF0dGVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3N5bWJvbHMvU2ltcGxlTWFya2VyU3ltYm9sXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0xvY2F0aW9uU2VhcmNoL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfR3JhcGhpY19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X1BvaW50X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfU3BhdGlhbFJlZmVyZW5jZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X2Nvb3JkaW5hdGVGb3JtYXR0ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9zeW1ib2xzX1NpbXBsZU1hcmtlclN5bWJvbF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCBQb2ludCBmcm9tICdlc3JpL2dlb21ldHJ5L1BvaW50J1xyXG5pbXBvcnQgU3BhdGlhbFJlZmVyZW5jZSBmcm9tICdlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2UnXHJcbmltcG9ydCBjb29yZGluYXRlRm9ybWF0dGVyIGZyb20gJ2VzcmkvZ2VvbWV0cnkvY29vcmRpbmF0ZUZvcm1hdHRlcidcclxuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJ1xyXG5pbXBvcnQgU2ltcGxlTWFya2VyU3ltYm9sIGZyb20gJ2Vzcmkvc3ltYm9scy9TaW1wbGVNYXJrZXJTeW1ib2wnXHJcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikgPT4ge1xyXG4gIGNvbnN0IFt2aWV3LCBzZXRNYXBWaWV3XSA9IHVzZVN0YXRlPGFueT4obnVsbClcclxuXHJcbiAgY29uc3QgW2xhYmVsWCwgc2V0TGFiZWxJbnB1dFhdID0gdXNlU3RhdGU8U3RyaW5nPign4Lil4Lit4LiH4LiI4Li04LiI4Li54LiUOicpXHJcbiAgY29uc3QgW2xhYmVsWSwgc2V0TGFiZWxJbnB1dFldID0gdXNlU3RhdGU8U3RyaW5nPign4Lil4Liw4LiV4Li04LiI4Li54LiUOicpXHJcbiAgY29uc3QgW2Nvb3JUeXBlLCBzZXRDb29yZGluYXRlVHlwZV0gPSB1c2VTdGF0ZTxTdHJpbmc+KCdHQ1MnKVxyXG4gIGNvbnN0IFt2YWxYLCBzZXRWYWx1ZUlucHV0WF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdmFsWSwgc2V0VmFsdWVJbnB1dFldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IG9uQWN0aXZlVmlld0NoYW5nZSA9IChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XHJcbiAgICBzZXRNYXBWaWV3KGptdi52aWV3KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VDb29yZGluYXRlVHlwZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKCdvbkNoYW5nZUNvb3JkaW5hdGVUeXBlJywgdmFsdWUpO1xyXG4gICAgc2V0VmFsdWVJbnB1dFgoXCJcIik7XHJcbiAgICBzZXRWYWx1ZUlucHV0WShcIlwiKTtcclxuICAgIHNldENvb3JkaW5hdGVUeXBlKHZhbHVlKVxyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlICdHQ1MnOlxyXG4gICAgICAgIHNldExhYmVsSW5wdXRYKCfguKXguK3guIfguIjguLTguIjguLnguJQ6JylcclxuICAgICAgICBzZXRMYWJlbElucHV0WSgn4Lil4Liw4LiV4Li04LiI4Li54LiUOicpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgc2V0TGFiZWxJbnB1dFgoJ1g6JylcclxuICAgICAgICBzZXRMYWJlbElucHV0WSgnWTonKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Mb2NhdGlvblNlYXJjaCA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygnY29vclR5cGUnLCBjb29yVHlwZSk7XHJcblxyXG4gICAgY29uc3QgeCA9IHBhcnNlRmxvYXQodmFsWCk7XHJcbiAgICBjb25zdCB5ID0gcGFyc2VGbG9hdCh2YWxZKTtcclxuXHJcbiAgICBpZiAoY29vclR5cGUgPT09ICdHQ1MnKSB7XHJcbiAgICAgIGNvbnN0IHBvaW50ID0gbmV3IFBvaW50KHsgeDogeCwgeTogeSwgc3BhdGlhbFJlZmVyZW5jZTogbmV3IFNwYXRpYWxSZWZlcmVuY2UoeyB3a2lkOiA0MzI2IH0pIH0pXHJcbiAgICAgIHZpZXcuZ29Ubyh7XHJcbiAgICAgICAgY2VudGVyOiBbcG9pbnQueCwgcG9pbnQueV0sXHJcbiAgICAgICAgem9vbTogMTZcclxuICAgICAgfSlcclxuICAgICAgcG9pbnRNYWtlcihwb2ludClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvb3JkaW5hdGVGb3JtYXR0ZXIubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHV0bVN0cmluZyA9IGNvb3JUeXBlICsgJyAnICsgeCArICcgJyArIHk7XHJcbiAgICAgICAgY29uc3QgcG9pbnQgPSBjb29yZGluYXRlRm9ybWF0dGVyLmZyb21VdG0odXRtU3RyaW5nLCBudWxsLCAnbm9ydGgtc291dGgtaW5kaWNhdG9ycycpO1xyXG4gICAgICAgIHZpZXcuZ29Ubyh7XHJcbiAgICAgICAgICBjZW50ZXI6IFtwb2ludC54LCBwb2ludC55XSxcclxuICAgICAgICAgIHpvb206IDE2XHJcbiAgICAgICAgfSlcclxuICAgICAgICBwb2ludE1ha2VyKHBvaW50KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcG9pbnRNYWtlciA9IChwb2ludCkgPT4ge1xyXG4gICAgdmlldy5ncmFwaGljcy5yZW1vdmVBbGwoKVxyXG4gICAgY29uc3QgcG9pbnQxID0gbmV3IFBvaW50KHtcclxuICAgICAgbGF0aXR1ZGU6IHBvaW50LmxhdGl0dWRlLFxyXG4gICAgICBsb25naXR1ZGU6IHBvaW50LmxvbmdpdHVkZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBzeW1ib2wgPSBuZXcgU2ltcGxlTWFya2VyU3ltYm9sKHtcclxuICAgICAgc3R5bGU6ICd4JyxcclxuICAgICAgY29sb3I6IFswLCAyNTUsIDAsIDAsIDAuNV0sXHJcbiAgICAgIHNpemU6ICcxNXB4JywgLy9waXhlbHNcclxuICAgICAgb3V0bGluZTogeyAvL2F1dG9jYXN0cyBhcyBuZXcgU2ltcGxlTGluZVN5bWJvbCgpXHJcbiAgICAgICAgY29sb3I6IFsyNTUsIDAsIDBdLFxyXG4gICAgICAgIHdpZHRoOiAzIC8vcG9pbnRzXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZ3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcclxuICAgICAgZ2VvbWV0cnk6IHBvaW50MSxcclxuICAgICAgc3ltYm9sOiBzeW1ib2xcclxuICAgIH0pXHJcbiAgICB2aWV3LmdyYXBoaWNzLnJlbW92ZUFsbCgpXHJcbiAgICB2aWV3LmdyYXBoaWNzLmFkZChncmFwaGljKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWxvY2F0aW9uLXNlYXJjaCBqaW11LXdpZGdldCBtLTJcIj5cclxuICAgICAge1xyXG4gICAgICAgIHByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxyXG4gICAgICAgIHByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cclxuICAgICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXtvbkFjdGl2ZVZpZXdDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICA8cD7guKPguLDguJrguLjguJ7guLTguIHguLHguJTguJfguLXguYjguITguLjguJPguJXguYnguK3guIfguIHguLLguKPguITguYnguJnguKvguLLguJrguJnguYHguJzguJnguJfguLXguYg8L3A+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyB3aWR0aDogJzU4cHgnIH19PuC4o+C4sOC4muC4muC4nuC4tOC4geC4seC4lDo8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdCBzdHlsZT17eyB3aWR0aDogJ2NhbGMoMTAwJSAtIDg0cHgpJywgbWFyZ2luTGVmdDogJzhweCcgfX0gbmFtZT1cImNvb3JkaW5hdGVUeXBlXCIgaWQ9XCJjb29yZGluYXRlVHlwZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvb3JkaW5hdGVUeXBlfSA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHQ1NcIj5HQ1M8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQ3TlwiPlVUTSBab25lIDQ3Tjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDhOXCI+VVRNIFpvbmUgNDhOPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IHdpZHRoOiAnNThweCcsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT57bGFiZWxYfTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgc3R5bGU9e3sgd2lkdGg6ICdjYWxjKDEwMCUgLSA4NHB4KScsIG1hcmdpbkxlZnQ6ICc4cHgnIH19IG5hbWU9XCJpbnB1dFhcIiBpZD1cImlucHV0WFwiIHZhbHVlPXt2YWxYfSBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlSW5wdXRYKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IHdpZHRoOiAnNThweCcsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT57bGFiZWxZfTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgc3R5bGU9e3sgd2lkdGg6ICdjYWxjKDEwMCUgLSA4NHB4KScsIG1hcmdpbkxlZnQ6ICc4cHgnIH19IG5hbWU9XCJpbnB1dFlcIiBpZD1cImlucHV0WVwiIHZhbHVlPXt2YWxZfSBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlSW5wdXRZKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luVG9wOiAnOHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJlc3JpLWJ1dHRvblwiIHN0eWxlPXt7IHdpZHRoOiAnODBweCcsIGJvcmRlclJhZGl1czogJzhweCcgfX0gb25DbGljaz17b25Mb2NhdGlvblNlYXJjaH0+XHJcbiAgICAgICAgICAgIOC4hOC5ieC4meC4q+C4slxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2ID5cclxuICAgIDwvZGl2ID5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldFxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=