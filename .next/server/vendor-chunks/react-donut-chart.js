"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-donut-chart";
exports.ids = ["vendor-chunks/react-donut-chart"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-donut-chart/dist/ArcPath.js":
/*!********************************************************!*\
  !*** ./node_modules/react-donut-chart/dist/ArcPath.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _DonutChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DonutChart */ \"(ssr)/./node_modules/react-donut-chart/dist/DonutChart.js\");\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\n\n\nfunction coordinates(half, radius, startAngle, endAngle) {\n    const startAngleDegrees = Math.PI * startAngle / 180;\n    const endAngleDegrees = Math.PI * endAngle / 180;\n    return {\n        x1: half + half * radius * Math.cos(startAngleDegrees),\n        y1: half + half * radius * Math.sin(startAngleDegrees),\n        x2: half + half * radius * Math.cos(endAngleDegrees),\n        y2: half + half * radius * Math.sin(endAngleDegrees)\n    };\n}\nfunction arc(width, radius, largeArcFlag, x, y) {\n    const z = width / 2 * radius;\n    return `A${z}, ${z} 0 ${largeArcFlag} ${x}, ${y}`;\n}\nfunction path(activeAngle, startAngle, width, innerRadius, outerRadius) {\n    const endAngle = startAngle + activeAngle;\n    const largeArcFlagOuter = activeAngle > 180 ? \"1 1\" : \"0 1\";\n    const largeArcFlagInner = activeAngle > 180 ? \"1 0\" : \"0 0\";\n    const half = width / 2;\n    const outerCoords = coordinates(half, outerRadius, startAngle, endAngle);\n    const innerCoords = coordinates(half, innerRadius, startAngle, endAngle);\n    const outerArc = arc(width, outerRadius, largeArcFlagOuter, outerCoords.x2, outerCoords.y2);\n    const innerArc = arc(width, innerRadius, largeArcFlagInner, innerCoords.x1, innerCoords.y1);\n    return `M${outerCoords.x1},${outerCoords.y1}\n  ${outerArc}\n  L${innerCoords.x2},${innerCoords.y2}\n  ${innerArc} z`;\n}\nconst ArcPath = ({ item })=>{\n    const { className, emptyOffset, graphWidth, innerRadius, outerRadius, selected, selectedOffset, toggledOffset, toggleSelect, total } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_DonutChart__WEBPACK_IMPORTED_MODULE_1__.DonutChartContext);\n    const { angle, classNames, clickHandlers, index, isEmpty, label, value, ...restItemRenderrops } = item;\n    const activeAngle = Number.isNaN(value / total) || total / value === 1 ? 359.99 : value / total * 360;\n    let [inner, outer] = [\n        innerRadius,\n        outerRadius\n    ];\n    if (isEmpty) {\n        inner += emptyOffset;\n        outer -= emptyOffset;\n    } else if ((selected === null || selected === void 0 ? void 0 : selected.label) === label) {\n        if (toggleSelect) {\n            inner -= toggledOffset;\n            outer += toggledOffset;\n        } else {\n            outer += selectedOffset;\n        }\n    }\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", _extends({}, clickHandlers, restItemRenderrops, {\n        className: `${className}-arcs-path ${classNames}`,\n        d: path(activeAngle, angle, graphWidth, inner, outer)\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArcPath);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9udXQtY2hhcnQvZGlzdC9BcmNQYXRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxTQUFTQTtJQUFXQSxXQUFTQyxPQUFPQyxNQUFNLElBQUUsU0FBU0MsTUFBTTtRQUFFLElBQUksSUFBSUMsSUFBRSxHQUFFQSxJQUFFQyxVQUFVQyxNQUFNLEVBQUNGLElBQUk7WUFBQyxJQUFJRyxTQUFPRixTQUFTLENBQUNELEVBQUU7WUFBQyxJQUFJLElBQUlJLE9BQU9ELE9BQU87Z0JBQUMsSUFBR04sT0FBT1EsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ0osUUFBT0MsTUFBSztvQkFBQ0wsTUFBTSxDQUFDSyxJQUFJLEdBQUNELE1BQU0sQ0FBQ0MsSUFBSTtnQkFBQTtZQUFDO1FBQUM7UUFBQyxPQUFPTDtJQUFNO0lBQUUsT0FBT0gsU0FBU1ksS0FBSyxDQUFDLElBQUksRUFBQ1A7QUFBVTtBQUFzQztBQUE0QztBQUFBLFNBQVNXLFlBQVlDLElBQUksRUFBQ0MsTUFBTSxFQUFDQyxVQUFVLEVBQUNDLFFBQVE7SUFBRSxNQUFNQyxvQkFBa0JDLEtBQUtDLEVBQUUsR0FBQ0osYUFBVztJQUFJLE1BQU1LLGtCQUFnQkYsS0FBS0MsRUFBRSxHQUFDSCxXQUFTO0lBQUksT0FBTTtRQUFDSyxJQUFHUixPQUFLQSxPQUFLQyxTQUFPSSxLQUFLSSxHQUFHLENBQUNMO1FBQW1CTSxJQUFHVixPQUFLQSxPQUFLQyxTQUFPSSxLQUFLTSxHQUFHLENBQUNQO1FBQW1CUSxJQUFHWixPQUFLQSxPQUFLQyxTQUFPSSxLQUFLSSxHQUFHLENBQUNGO1FBQWlCTSxJQUFHYixPQUFLQSxPQUFLQyxTQUFPSSxLQUFLTSxHQUFHLENBQUNKO0lBQWdCO0FBQUM7QUFBQyxTQUFTTyxJQUFJQyxLQUFLLEVBQUNkLE1BQU0sRUFBQ2UsWUFBWSxFQUFDQyxDQUFDLEVBQUNDLENBQUM7SUFBRSxNQUFNQyxJQUFFSixRQUFNLElBQUVkO0lBQU8sT0FBTSxDQUFDLENBQUMsRUFBRWtCLEVBQUUsRUFBRSxFQUFFQSxFQUFFLEdBQUcsRUFBRUgsYUFBYSxDQUFDLEVBQUVDLEVBQUUsRUFBRSxFQUFFQyxFQUFFLENBQUM7QUFBQTtBQUFDLFNBQVNFLEtBQUtDLFdBQVcsRUFBQ25CLFVBQVUsRUFBQ2EsS0FBSyxFQUFDTyxXQUFXLEVBQUNDLFdBQVc7SUFBRSxNQUFNcEIsV0FBU0QsYUFBV21CO0lBQVksTUFBTUcsb0JBQWtCSCxjQUFZLE1BQUksUUFBTTtJQUFNLE1BQU1JLG9CQUFrQkosY0FBWSxNQUFJLFFBQU07SUFBTSxNQUFNckIsT0FBS2UsUUFBTTtJQUFFLE1BQU1XLGNBQVkzQixZQUFZQyxNQUFLdUIsYUFBWXJCLFlBQVdDO0lBQVUsTUFBTXdCLGNBQVk1QixZQUFZQyxNQUFLc0IsYUFBWXBCLFlBQVdDO0lBQVUsTUFBTXlCLFdBQVNkLElBQUlDLE9BQU1RLGFBQVlDLG1CQUFrQkUsWUFBWWQsRUFBRSxFQUFDYyxZQUFZYixFQUFFO0lBQUUsTUFBTWdCLFdBQVNmLElBQUlDLE9BQU1PLGFBQVlHLG1CQUFrQkUsWUFBWW5CLEVBQUUsRUFBQ21CLFlBQVlqQixFQUFFO0lBQUUsT0FBTSxDQUFDLENBQUMsRUFBRWdCLFlBQVlsQixFQUFFLENBQUMsQ0FBQyxFQUFFa0IsWUFBWWhCLEVBQUUsQ0FBQztFQUMvMkMsRUFBRWtCLFNBQVM7R0FDVixFQUFFRCxZQUFZZixFQUFFLENBQUMsQ0FBQyxFQUFFZSxZQUFZZCxFQUFFLENBQUM7RUFDcEMsRUFBRWdCLFNBQVMsRUFBRSxDQUFDO0FBQUE7QUFBQyxNQUFNQyxVQUFRLENBQUMsRUFBQ0MsSUFBSSxFQUFDO0lBQUksTUFBSyxFQUFDQyxTQUFTLEVBQUNDLFdBQVcsRUFBQ0MsVUFBVSxFQUFDWixXQUFXLEVBQUNDLFdBQVcsRUFBQ1ksUUFBUSxFQUFDQyxjQUFjLEVBQUNDLGFBQWEsRUFBQ0MsWUFBWSxFQUFDQyxLQUFLLEVBQUMsR0FBQzFDLGlEQUFVQSxDQUFDQywwREFBaUJBO0lBQUUsTUFBSyxFQUFDMEMsS0FBSyxFQUFDQyxVQUFVLEVBQUNDLGFBQWEsRUFBQ0MsS0FBSyxFQUFDQyxPQUFPLEVBQUNDLEtBQUssRUFBQ0MsS0FBSyxFQUFDLEdBQUdDLG9CQUFtQixHQUFDaEI7SUFBSyxNQUFNVixjQUFZMkIsT0FBT0MsS0FBSyxDQUFDSCxRQUFNUCxVQUFRQSxRQUFNTyxVQUFRLElBQUUsU0FBT0EsUUFBTVAsUUFBTTtJQUFJLElBQUcsQ0FBQ1csT0FBTUMsTUFBTSxHQUFDO1FBQUM3QjtRQUFZQztLQUFZO0lBQUMsSUFBR3FCLFNBQVE7UUFBQ00sU0FBT2pCO1FBQVlrQixTQUFPbEI7SUFBVyxPQUFNLElBQUcsQ0FBQ0UsYUFBVyxRQUFNQSxhQUFXLEtBQUssSUFBRSxLQUFLLElBQUVBLFNBQVNVLEtBQUssTUFBSUEsT0FBTTtRQUFDLElBQUdQLGNBQWE7WUFBQ1ksU0FBT2I7WUFBY2MsU0FBT2Q7UUFBYSxPQUFLO1lBQUNjLFNBQU9mO1FBQWM7SUFBQztJQUFDLE9BQU0sV0FBVyxHQUFFeEMsMERBQW1CLENBQUMsUUFBT2IsU0FBUyxDQUFDLEdBQUUyRCxlQUFjSyxvQkFBbUI7UUFBQ2YsV0FBVSxDQUFDLEVBQUVBLFVBQVUsV0FBVyxFQUFFUyxXQUFXLENBQUM7UUFBQ1ksR0FBRWpDLEtBQUtDLGFBQVltQixPQUFNTixZQUFXZ0IsT0FBTUM7SUFBTTtBQUFHO0FBQUUsaUVBQWVyQixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29sYW5hX3dhbGxldF90cmFja2VyLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbnV0LWNoYXJ0L2Rpc3QvQXJjUGF0aC5qcz84MTE5Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9leHRlbmRzKCl7X2V4dGVuZHM9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odGFyZ2V0KXtmb3IodmFyIGk9MTtpPGFyZ3VtZW50cy5sZW5ndGg7aSsrKXt2YXIgc291cmNlPWFyZ3VtZW50c1tpXTtmb3IodmFyIGtleSBpbiBzb3VyY2Upe2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2Usa2V5KSl7dGFyZ2V0W2tleV09c291cmNlW2tleV19fX1yZXR1cm4gdGFyZ2V0fTtyZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcyxhcmd1bWVudHMpfWltcG9ydCBSZWFjdCx7dXNlQ29udGV4dH1mcm9tXCJyZWFjdFwiO2ltcG9ydHtEb251dENoYXJ0Q29udGV4dH1mcm9tXCIuL0RvbnV0Q2hhcnRcIjtmdW5jdGlvbiBjb29yZGluYXRlcyhoYWxmLHJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlKXtjb25zdCBzdGFydEFuZ2xlRGVncmVlcz1NYXRoLlBJKnN0YXJ0QW5nbGUvMTgwO2NvbnN0IGVuZEFuZ2xlRGVncmVlcz1NYXRoLlBJKmVuZEFuZ2xlLzE4MDtyZXR1cm57eDE6aGFsZitoYWxmKnJhZGl1cypNYXRoLmNvcyhzdGFydEFuZ2xlRGVncmVlcykseTE6aGFsZitoYWxmKnJhZGl1cypNYXRoLnNpbihzdGFydEFuZ2xlRGVncmVlcykseDI6aGFsZitoYWxmKnJhZGl1cypNYXRoLmNvcyhlbmRBbmdsZURlZ3JlZXMpLHkyOmhhbGYraGFsZipyYWRpdXMqTWF0aC5zaW4oZW5kQW5nbGVEZWdyZWVzKX19ZnVuY3Rpb24gYXJjKHdpZHRoLHJhZGl1cyxsYXJnZUFyY0ZsYWcseCx5KXtjb25zdCB6PXdpZHRoLzIqcmFkaXVzO3JldHVybmBBJHt6fSwgJHt6fSAwICR7bGFyZ2VBcmNGbGFnfSAke3h9LCAke3l9YH1mdW5jdGlvbiBwYXRoKGFjdGl2ZUFuZ2xlLHN0YXJ0QW5nbGUsd2lkdGgsaW5uZXJSYWRpdXMsb3V0ZXJSYWRpdXMpe2NvbnN0IGVuZEFuZ2xlPXN0YXJ0QW5nbGUrYWN0aXZlQW5nbGU7Y29uc3QgbGFyZ2VBcmNGbGFnT3V0ZXI9YWN0aXZlQW5nbGU+MTgwP1wiMSAxXCI6XCIwIDFcIjtjb25zdCBsYXJnZUFyY0ZsYWdJbm5lcj1hY3RpdmVBbmdsZT4xODA/XCIxIDBcIjpcIjAgMFwiO2NvbnN0IGhhbGY9d2lkdGgvMjtjb25zdCBvdXRlckNvb3Jkcz1jb29yZGluYXRlcyhoYWxmLG91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUpO2NvbnN0IGlubmVyQ29vcmRzPWNvb3JkaW5hdGVzKGhhbGYsaW5uZXJSYWRpdXMsc3RhcnRBbmdsZSxlbmRBbmdsZSk7Y29uc3Qgb3V0ZXJBcmM9YXJjKHdpZHRoLG91dGVyUmFkaXVzLGxhcmdlQXJjRmxhZ091dGVyLG91dGVyQ29vcmRzLngyLG91dGVyQ29vcmRzLnkyKTtjb25zdCBpbm5lckFyYz1hcmMod2lkdGgsaW5uZXJSYWRpdXMsbGFyZ2VBcmNGbGFnSW5uZXIsaW5uZXJDb29yZHMueDEsaW5uZXJDb29yZHMueTEpO3JldHVybmBNJHtvdXRlckNvb3Jkcy54MX0sJHtvdXRlckNvb3Jkcy55MX1cbiAgJHtvdXRlckFyY31cbiAgTCR7aW5uZXJDb29yZHMueDJ9LCR7aW5uZXJDb29yZHMueTJ9XG4gICR7aW5uZXJBcmN9IHpgfWNvbnN0IEFyY1BhdGg9KHtpdGVtfSk9Pntjb25zdHtjbGFzc05hbWUsZW1wdHlPZmZzZXQsZ3JhcGhXaWR0aCxpbm5lclJhZGl1cyxvdXRlclJhZGl1cyxzZWxlY3RlZCxzZWxlY3RlZE9mZnNldCx0b2dnbGVkT2Zmc2V0LHRvZ2dsZVNlbGVjdCx0b3RhbH09dXNlQ29udGV4dChEb251dENoYXJ0Q29udGV4dCk7Y29uc3R7YW5nbGUsY2xhc3NOYW1lcyxjbGlja0hhbmRsZXJzLGluZGV4LGlzRW1wdHksbGFiZWwsdmFsdWUsLi4ucmVzdEl0ZW1SZW5kZXJyb3BzfT1pdGVtO2NvbnN0IGFjdGl2ZUFuZ2xlPU51bWJlci5pc05hTih2YWx1ZS90b3RhbCl8fHRvdGFsL3ZhbHVlPT09MT8zNTkuOTk6dmFsdWUvdG90YWwqMzYwO2xldFtpbm5lcixvdXRlcl09W2lubmVyUmFkaXVzLG91dGVyUmFkaXVzXTtpZihpc0VtcHR5KXtpbm5lcis9ZW1wdHlPZmZzZXQ7b3V0ZXItPWVtcHR5T2Zmc2V0fWVsc2UgaWYoKHNlbGVjdGVkPT09bnVsbHx8c2VsZWN0ZWQ9PT12b2lkIDA/dm9pZCAwOnNlbGVjdGVkLmxhYmVsKT09PWxhYmVsKXtpZih0b2dnbGVTZWxlY3Qpe2lubmVyLT10b2dnbGVkT2Zmc2V0O291dGVyKz10b2dnbGVkT2Zmc2V0fWVsc2V7b3V0ZXIrPXNlbGVjdGVkT2Zmc2V0fX1yZXR1cm4vKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIixfZXh0ZW5kcyh7fSxjbGlja0hhbmRsZXJzLHJlc3RJdGVtUmVuZGVycm9wcyx7Y2xhc3NOYW1lOmAke2NsYXNzTmFtZX0tYXJjcy1wYXRoICR7Y2xhc3NOYW1lc31gLGQ6cGF0aChhY3RpdmVBbmdsZSxhbmdsZSxncmFwaFdpZHRoLGlubmVyLG91dGVyKX0pKX07ZXhwb3J0IGRlZmF1bHQgQXJjUGF0aDsiXSwibmFtZXMiOlsiX2V4dGVuZHMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJEb251dENoYXJ0Q29udGV4dCIsImNvb3JkaW5hdGVzIiwiaGFsZiIsInJhZGl1cyIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsInN0YXJ0QW5nbGVEZWdyZWVzIiwiTWF0aCIsIlBJIiwiZW5kQW5nbGVEZWdyZWVzIiwieDEiLCJjb3MiLCJ5MSIsInNpbiIsIngyIiwieTIiLCJhcmMiLCJ3aWR0aCIsImxhcmdlQXJjRmxhZyIsIngiLCJ5IiwieiIsInBhdGgiLCJhY3RpdmVBbmdsZSIsImlubmVyUmFkaXVzIiwib3V0ZXJSYWRpdXMiLCJsYXJnZUFyY0ZsYWdPdXRlciIsImxhcmdlQXJjRmxhZ0lubmVyIiwib3V0ZXJDb29yZHMiLCJpbm5lckNvb3JkcyIsIm91dGVyQXJjIiwiaW5uZXJBcmMiLCJBcmNQYXRoIiwiaXRlbSIsImNsYXNzTmFtZSIsImVtcHR5T2Zmc2V0IiwiZ3JhcGhXaWR0aCIsInNlbGVjdGVkIiwic2VsZWN0ZWRPZmZzZXQiLCJ0b2dnbGVkT2Zmc2V0IiwidG9nZ2xlU2VsZWN0IiwidG90YWwiLCJhbmdsZSIsImNsYXNzTmFtZXMiLCJjbGlja0hhbmRsZXJzIiwiaW5kZXgiLCJpc0VtcHR5IiwibGFiZWwiLCJ2YWx1ZSIsInJlc3RJdGVtUmVuZGVycm9wcyIsIk51bWJlciIsImlzTmFOIiwiaW5uZXIiLCJvdXRlciIsImNyZWF0ZUVsZW1lbnQiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-donut-chart/dist/ArcPath.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-donut-chart/dist/DonutChart.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-donut-chart/dist/DonutChart.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DonutChartContext: () => (/* binding */ DonutChartContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ArcPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArcPath */ \"(ssr)/./node_modules/react-donut-chart/dist/ArcPath.js\");\n/* harmony import */ var _LegendItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LegendItem */ \"(ssr)/./node_modules/react-donut-chart/dist/LegendItem.js\");\n\n\n\nconst DonutChartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);\nconst DonutChart = ({ className = \"donutchart\", clickToggle = true, colorFunction = (colors, index)=>colors[index % colors.length], colors = [\n    \"#f44336\",\n    \"#e91e63\",\n    \"#9c27b0\",\n    \"#673ab7\",\n    \"#3f51b5\",\n    \"#2196f3\",\n    \"#03a9f4\",\n    \"#00bcd4\",\n    \"#009688\",\n    \"#4caf50\",\n    \"#8bc34a\",\n    \"#cddc39\",\n    \"#ffeb3b\",\n    \"#ffc107\",\n    \"#ff9800\",\n    \"#ff5722\",\n    \"#795548\",\n    \"#607d8b\"\n], data = [\n    {\n        className: \"\",\n        label: \"\",\n        value: 100,\n        isEmpty: true\n    }\n], emptyColor = \"#e0e0e0\", emptyOffset = 0.08, formatValues = (value, total)=>Number.isNaN(value / total) ? \"--\" : `${(value / total * 100).toFixed(2)}%`, height = 500, interactive = true, innerRadius = 0.7, legend = true, onMouseEnter = (item)=>item, onMouseLeave = (item)=>item, onClick = (item, toggled)=>toggled ? item : null, outerRadius = 0.9, selectedOffset = 0.03, strokeColor = \"#212121\", toggledOffset = 0.04, width = 750 })=>{\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(interactive ? data[0] : null);\n    const [toggleSelect, setToggleSelect] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (interactive) {\n            setSelected(data[0]);\n            setToggleSelect(false);\n        }\n    }, [\n        interactive,\n        data\n    ]);\n    const graphWidth = legend ? width * (2 / 3) : width;\n    const total = data.reduce((sum, { value })=>sum + value, 0);\n    const { dataWithRenderProps } = data.reduce(({ angle, dataWithRenderProps }, item, index)=>{\n        const { className, isEmpty, label, value } = item;\n        const isSelected = (selected === null || selected === void 0 ? void 0 : selected.label) === label;\n        const isToggled = isSelected && toggleSelect;\n        return {\n            angle: angle + value / total * 360,\n            dataWithRenderProps: [\n                ...dataWithRenderProps,\n                {\n                    angle,\n                    index,\n                    ...item,\n                    classNames: `${className ?? \"\"} ${isEmpty ? \"empty\" : \"\"} ${isSelected ? \"selected\" : \"\"} ${isToggled ? \"toggled\" : \"\"}`.trim(),\n                    fill: isEmpty ? emptyColor : colorFunction(colors, index),\n                    opacity: isSelected && !toggleSelect ? 0.5 : 1,\n                    stroke: isEmpty ? emptyColor : strokeColor,\n                    clickHandlers: interactive ? {\n                        onClick: ()=>{\n                            if ((selected === null || selected === void 0 ? void 0 : selected.label) === label) {\n                                const toggle = clickToggle ? !toggleSelect : false;\n                                setSelected(item);\n                                setToggleSelect(toggle);\n                                onClick(item, toggle);\n                            }\n                        },\n                        onMouseEnter: ()=>{\n                            if (!toggleSelect) {\n                                setSelected(item);\n                                onMouseEnter(item);\n                            }\n                        },\n                        onMouseLeave: ()=>{\n                            if (!toggleSelect) {\n                                onMouseLeave(item);\n                            }\n                        }\n                    } : undefined\n                }\n            ],\n            total: total + value\n        };\n    }, {\n        angle: 0,\n        dataWithRenderProps: []\n    });\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DonutChartContext.Provider, {\n        value: {\n            className,\n            emptyOffset,\n            graphWidth,\n            innerRadius,\n            outerRadius,\n            selected,\n            selectedOffset,\n            toggledOffset,\n            toggleSelect,\n            total,\n            width\n        }\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n        className: className,\n        style: {\n            height,\n            width\n        },\n        viewBox: `0 0 ${width} ${height}`\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", {\n        className: `${className}-arcs`\n    }, dataWithRenderProps.map((item)=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ArcPath__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            item: item,\n            key: `arcpath${item.index}`\n        }))), selected && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", {\n        className: `${className}-innertext`\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"text\", {\n        className: `${className}-innertext-label`,\n        x: graphWidth / 2,\n        y: \"45%\",\n        textAnchor: \"middle\"\n    }, selected.label), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"text\", {\n        className: `${className}-innertext-value`,\n        x: graphWidth / 2,\n        y: \"60%\",\n        textAnchor: \"middle\"\n    }, formatValues(selected.value, total))), legend && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", {\n        className: `${className}-legend`\n    }, dataWithRenderProps.map((item)=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LegendItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            key: `legenditem${item.index}`,\n            item: item\n        })))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DonutChart);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9udXQtY2hhcnQvZGlzdC9Eb251dENoYXJ0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyRDtBQUErQjtBQUFxQztBQUFPLE1BQU1NLG9CQUFrQixXQUFXLEdBQUVMLG9EQUFhQSxDQUFDTSxXQUFXO0FBQUEsTUFBTUMsYUFBVyxDQUFDLEVBQUNDLFlBQVUsWUFBWSxFQUFDQyxjQUFZLElBQUksRUFBQ0MsZ0JBQWMsQ0FBQ0MsUUFBT0MsUUFBUUQsTUFBTSxDQUFDQyxRQUFNRCxPQUFPRSxNQUFNLENBQUMsRUFBQ0YsU0FBTztJQUFDO0lBQVU7SUFBVTtJQUFVO0lBQVU7SUFBVTtJQUFVO0lBQVU7SUFBVTtJQUFVO0lBQVU7SUFBVTtJQUFVO0lBQVU7SUFBVTtJQUFVO0lBQVU7SUFBVTtDQUFVLEVBQUNHLE9BQUs7SUFBQztRQUFDTixXQUFVO1FBQUdPLE9BQU07UUFBR0MsT0FBTTtRQUFJQyxTQUFRO0lBQUk7Q0FBRSxFQUFDQyxhQUFXLFNBQVMsRUFBQ0MsY0FBWSxJQUFJLEVBQUNDLGVBQWEsQ0FBQ0osT0FBTUssUUFBUUMsT0FBT0MsS0FBSyxDQUFDUCxRQUFNSyxTQUFPLE9BQUssQ0FBQyxFQUFFLENBQUNMLFFBQU1LLFFBQU0sR0FBRSxFQUFHRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQ0MsU0FBTyxHQUFHLEVBQUNDLGNBQVksSUFBSSxFQUFDQyxjQUFZLEdBQUcsRUFBQ0MsU0FBTyxJQUFJLEVBQUNDLGVBQWFDLENBQUFBLE9BQU1BLElBQUksRUFBQ0MsZUFBYUQsQ0FBQUEsT0FBTUEsSUFBSSxFQUFDRSxVQUFRLENBQUNGLE1BQUtHLFVBQVVBLFVBQVFILE9BQUssSUFBSSxFQUFDSSxjQUFZLEdBQUcsRUFBQ0MsaUJBQWUsSUFBSSxFQUFDQyxjQUFZLFNBQVMsRUFBQ0MsZ0JBQWMsSUFBSSxFQUFDQyxRQUFNLEdBQUcsRUFBQztJQUFJLE1BQUssQ0FBQ0MsVUFBU0MsWUFBWSxHQUFD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WUFBS2dDLEtBQUksQ0FBQyxPQUFPLEVBQUVoQyxLQUFLbEIsS0FBSyxDQUFDLENBQUM7UUFBQSxNQUFLMkIsWUFBVSxXQUFXLEdBQUV4QywwREFBbUIsQ0FBQyxLQUFJO1FBQUNTLFdBQVUsQ0FBQyxFQUFFQSxVQUFVLFVBQVUsQ0FBQztJQUFBLEdBQUUsV0FBVyxHQUFFVCwwREFBbUIsQ0FBQyxRQUFPO1FBQUNTLFdBQVUsQ0FBQyxFQUFFQSxVQUFVLGdCQUFnQixDQUFDO1FBQUN1RCxHQUFFcEIsYUFBVztRQUFFcUIsR0FBRTtRQUFNQyxZQUFXO0lBQVEsR0FBRTFCLFNBQVN4QixLQUFLLEdBQUUsV0FBVyxHQUFFaEIsMERBQW1CLENBQUMsUUFBTztRQUFDUyxXQUFVLENBQUMsRUFBRUEsVUFBVSxnQkFBZ0IsQ0FBQztRQUFDdUQsR0FBRXBCLGFBQVc7UUFBRXFCLEdBQUU7UUFBTUMsWUFBVztJQUFRLEdBQUU3QyxhQUFhbUIsU0FBU3ZCLEtBQUssRUFBQ0ssVUFBU08sVUFBUSxXQUFXLEdBQUU3QiwwREFBbUIsQ0FBQyxLQUFJO1FBQUNTLFdBQVUsQ0FBQyxFQUFFQSxVQUFVLE9BQU8sQ0FBQztJQUFBLEdBQUVzQyxvQkFBb0JlLEdBQUcsQ0FBQy9CLENBQUFBLE9BQU0sV0FBVyxHQUFFL0IsMERBQW1CLENBQUNLLG1EQUFVQSxFQUFDO1lBQUMwRCxLQUFJLENBQUMsVUFBVSxFQUFFaEMsS0FBS2xCLEtBQUssQ0FBQyxDQUFDO1lBQUNrQixNQUFLQTtRQUFJO0FBQU07QUFBRSxpRUFBZXZCLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2xhbmFfd2FsbGV0X3RyYWNrZXIvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9udXQtY2hhcnQvZGlzdC9Eb251dENoYXJ0LmpzPzg1ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtjcmVhdGVDb250ZXh0LHVzZUVmZmVjdCx1c2VTdGF0ZX1mcm9tXCJyZWFjdFwiO2ltcG9ydCBBcmNQYXRoIGZyb21cIi4vQXJjUGF0aFwiO2ltcG9ydCBMZWdlbmRJdGVtIGZyb21cIi4vTGVnZW5kSXRlbVwiO2V4cG9ydCBjb25zdCBEb251dENoYXJ0Q29udGV4dD0vKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO2NvbnN0IERvbnV0Q2hhcnQ9KHtjbGFzc05hbWU9XCJkb251dGNoYXJ0XCIsY2xpY2tUb2dnbGU9dHJ1ZSxjb2xvckZ1bmN0aW9uPShjb2xvcnMsaW5kZXgpPT5jb2xvcnNbaW5kZXglY29sb3JzLmxlbmd0aF0sY29sb3JzPVtcIiNmNDQzMzZcIixcIiNlOTFlNjNcIixcIiM5YzI3YjBcIixcIiM2NzNhYjdcIixcIiMzZjUxYjVcIixcIiMyMTk2ZjNcIixcIiMwM2E5ZjRcIixcIiMwMGJjZDRcIixcIiMwMDk2ODhcIixcIiM0Y2FmNTBcIixcIiM4YmMzNGFcIixcIiNjZGRjMzlcIixcIiNmZmViM2JcIixcIiNmZmMxMDdcIixcIiNmZjk4MDBcIixcIiNmZjU3MjJcIixcIiM3OTU1NDhcIixcIiM2MDdkOGJcIl0sZGF0YT1be2NsYXNzTmFtZTpcIlwiLGxhYmVsOlwiXCIsdmFsdWU6MTAwLGlzRW1wdHk6dHJ1ZX1dLGVtcHR5Q29sb3I9XCIjZTBlMGUwXCIsZW1wdHlPZmZzZXQ9MC4wOCxmb3JtYXRWYWx1ZXM9KHZhbHVlLHRvdGFsKT0+TnVtYmVyLmlzTmFOKHZhbHVlL3RvdGFsKT9cIi0tXCI6YCR7KHZhbHVlL3RvdGFsKjEwMCkudG9GaXhlZCgyKX0lYCxoZWlnaHQ9NTAwLGludGVyYWN0aXZlPXRydWUsaW5uZXJSYWRpdXM9MC43LGxlZ2VuZD10cnVlLG9uTW91c2VFbnRlcj1pdGVtPT5pdGVtLG9uTW91c2VMZWF2ZT1pdGVtPT5pdGVtLG9uQ2xpY2s9KGl0ZW0sdG9nZ2xlZCk9PnRvZ2dsZWQ/aXRlbTpudWxsLG91dGVyUmFkaXVzPTAuOSxzZWxlY3RlZE9mZnNldD0wLjAzLHN0cm9rZUNvbG9yPVwiIzIxMjEyMVwiLHRvZ2dsZWRPZmZzZXQ9MC4wNCx3aWR0aD03NTB9KT0+e2NvbnN0W3NlbGVjdGVkLHNldFNlbGVjdGVkXT11c2VTdGF0ZShpbnRlcmFjdGl2ZT9kYXRhWzBdOm51bGwpO2NvbnN0W3RvZ2dsZVNlbGVjdCxzZXRUb2dnbGVTZWxlY3RdPXVzZVN0YXRlKGZhbHNlKTt1c2VFZmZlY3QoKCk9PntpZihpbnRlcmFjdGl2ZSl7c2V0U2VsZWN0ZWQoZGF0YVswXSk7c2V0VG9nZ2xlU2VsZWN0KGZhbHNlKX19LFtpbnRlcmFjdGl2ZSxkYXRhXSk7Y29uc3QgZ3JhcGhXaWR0aD1sZWdlbmQ/d2lkdGgqKDIvMyk6d2lkdGg7Y29uc3QgdG90YWw9ZGF0YS5yZWR1Y2UoKHN1bSx7dmFsdWV9KT0+c3VtK3ZhbHVlLDApO2NvbnN0e2RhdGFXaXRoUmVuZGVyUHJvcHN9PWRhdGEucmVkdWNlKCh7YW5nbGUsZGF0YVdpdGhSZW5kZXJQcm9wc30saXRlbSxpbmRleCk9Pntjb25zdHtjbGFzc05hbWUsaXNFbXB0eSxsYWJlbCx2YWx1ZX09aXRlbTtjb25zdCBpc1NlbGVjdGVkPShzZWxlY3RlZD09PW51bGx8fHNlbGVjdGVkPT09dm9pZCAwP3ZvaWQgMDpzZWxlY3RlZC5sYWJlbCk9PT1sYWJlbDtjb25zdCBpc1RvZ2dsZWQ9aXNTZWxlY3RlZCYmdG9nZ2xlU2VsZWN0O3JldHVybnthbmdsZTphbmdsZSt2YWx1ZS90b3RhbCozNjAsZGF0YVdpdGhSZW5kZXJQcm9wczpbLi4uZGF0YVdpdGhSZW5kZXJQcm9wcyx7YW5nbGUsaW5kZXgsLi4uaXRlbSxjbGFzc05hbWVzOmAke2NsYXNzTmFtZT8/XCJcIn0gJHtpc0VtcHR5P1wiZW1wdHlcIjpcIlwifSAke2lzU2VsZWN0ZWQ/XCJzZWxlY3RlZFwiOlwiXCJ9ICR7aXNUb2dnbGVkP1widG9nZ2xlZFwiOlwiXCJ9YC50cmltKCksZmlsbDppc0VtcHR5P2VtcHR5Q29sb3I6Y29sb3JGdW5jdGlvbihjb2xvcnMsaW5kZXgpLG9wYWNpdHk6aXNTZWxlY3RlZCYmIXRvZ2dsZVNlbGVjdD8wLjU6MSxzdHJva2U6aXNFbXB0eT9lbXB0eUNvbG9yOnN0cm9rZUNvbG9yLGNsaWNrSGFuZGxlcnM6aW50ZXJhY3RpdmU/e29uQ2xpY2s6KCk9PntpZigoc2VsZWN0ZWQ9PT1udWxsfHxzZWxlY3RlZD09PXZvaWQgMD92b2lkIDA6c2VsZWN0ZWQubGFiZWwpPT09bGFiZWwpe2NvbnN0IHRvZ2dsZT1jbGlja1RvZ2dsZT8hdG9nZ2xlU2VsZWN0OmZhbHNlO3NldFNlbGVjdGVkKGl0ZW0pO3NldFRvZ2dsZVNlbGVjdCh0b2dnbGUpO29uQ2xpY2soaXRlbSx0b2dnbGUpfX0sb25Nb3VzZUVudGVyOigpPT57aWYoIXRvZ2dsZVNlbGVjdCl7c2V0U2VsZWN0ZWQoaXRlbSk7b25Nb3VzZUVudGVyKGl0ZW0pfX0sb25Nb3VzZUxlYXZlOigpPT57aWYoIXRvZ2dsZVNlbGVjdCl7b25Nb3VzZUxlYXZlKGl0ZW0pfX19OnVuZGVmaW5lZH1dLHRvdGFsOnRvdGFsK3ZhbHVlfX0se2FuZ2xlOjAsZGF0YVdpdGhSZW5kZXJQcm9wczpbXX0pO3JldHVybi8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERvbnV0Q2hhcnRDb250ZXh0LlByb3ZpZGVyLHt2YWx1ZTp7Y2xhc3NOYW1lLGVtcHR5T2Zmc2V0LGdyYXBoV2lkdGgsaW5uZXJSYWRpdXMsb3V0ZXJSYWRpdXMsc2VsZWN0ZWQsc2VsZWN0ZWRPZmZzZXQsdG9nZ2xlZE9mZnNldCx0b2dnbGVTZWxlY3QsdG90YWwsd2lkdGh9fSwvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHtjbGFzc05hbWU6Y2xhc3NOYW1lLHN0eWxlOntoZWlnaHQsd2lkdGh9LHZpZXdCb3g6YDAgMCAke3dpZHRofSAke2hlaWdodH1gfSwvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7Y2xhc3NOYW1lOmAke2NsYXNzTmFtZX0tYXJjc2B9LGRhdGFXaXRoUmVuZGVyUHJvcHMubWFwKGl0ZW09Pi8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFyY1BhdGgse2l0ZW06aXRlbSxrZXk6YGFyY3BhdGgke2l0ZW0uaW5kZXh9YH0pKSksc2VsZWN0ZWQmJi8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtjbGFzc05hbWU6YCR7Y2xhc3NOYW1lfS1pbm5lcnRleHRgfSwvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRcIix7Y2xhc3NOYW1lOmAke2NsYXNzTmFtZX0taW5uZXJ0ZXh0LWxhYmVsYCx4OmdyYXBoV2lkdGgvMix5OlwiNDUlXCIsdGV4dEFuY2hvcjpcIm1pZGRsZVwifSxzZWxlY3RlZC5sYWJlbCksLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0XCIse2NsYXNzTmFtZTpgJHtjbGFzc05hbWV9LWlubmVydGV4dC12YWx1ZWAseDpncmFwaFdpZHRoLzIseTpcIjYwJVwiLHRleHRBbmNob3I6XCJtaWRkbGVcIn0sZm9ybWF0VmFsdWVzKHNlbGVjdGVkLnZhbHVlLHRvdGFsKSkpLGxlZ2VuZCYmLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIse2NsYXNzTmFtZTpgJHtjbGFzc05hbWV9LWxlZ2VuZGB9LGRhdGFXaXRoUmVuZGVyUHJvcHMubWFwKGl0ZW09Pi8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExlZ2VuZEl0ZW0se2tleTpgbGVnZW5kaXRlbSR7aXRlbS5pbmRleH1gLGl0ZW06aXRlbX0pKSkpKX07ZXhwb3J0IGRlZmF1bHQgRG9udXRDaGFydDsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcmNQYXRoIiwiTGVnZW5kSXRlbSIsIkRvbnV0Q2hhcnRDb250ZXh0IiwidW5kZWZpbmVkIiwiRG9udXRDaGFydCIsImNsYXNzTmFtZSIsImNsaWNrVG9nZ2xlIiwiY29sb3JGdW5jdGlvbiIsImNvbG9ycyIsImluZGV4IiwibGVuZ3RoIiwiZGF0YSIsImxhYmVsIiwidmFsdWUiLCJpc0VtcHR5IiwiZW1wdHlDb2xvciIsImVtcHR5T2Zmc2V0IiwiZm9ybWF0VmFsdWVzIiwidG90YWwiLCJOdW1iZXIiLCJpc05hTiIsInRvRml4ZWQiLCJoZWlnaHQiLCJpbnRlcmFjdGl2ZSIsImlubmVyUmFkaXVzIiwibGVnZW5kIiwib25Nb3VzZUVudGVyIiwiaXRlbSIsIm9uTW91c2VMZWF2ZSIsIm9uQ2xpY2siLCJ0b2dnbGVkIiwib3V0ZXJSYWRpdXMiLCJzZWxlY3RlZE9mZnNldCIsInN0cm9rZUNvbG9yIiwidG9nZ2xlZE9mZnNldCIsIndpZHRoIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInRvZ2dsZVNlbGVjdCIsInNldFRvZ2dsZVNlbGVjdCIsImdyYXBoV2lkdGgiLCJyZWR1Y2UiLCJzdW0iLCJkYXRhV2l0aFJlbmRlclByb3BzIiwiYW5nbGUiLCJpc1NlbGVjdGVkIiwiaXNUb2dnbGVkIiwiY2xhc3NOYW1lcyIsInRyaW0iLCJmaWxsIiwib3BhY2l0eSIsInN0cm9rZSIsImNsaWNrSGFuZGxlcnMiLCJ0b2dnbGUiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJzdHlsZSIsInZpZXdCb3giLCJtYXAiLCJrZXkiLCJ4IiwieSIsInRleHRBbmNob3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-donut-chart/dist/DonutChart.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-donut-chart/dist/LegendItem.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-donut-chart/dist/LegendItem.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _DonutChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DonutChart */ \"(ssr)/./node_modules/react-donut-chart/dist/DonutChart.js\");\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\n\n\nconst LegendItem = ({ item })=>{\n    const { className, graphWidth, width } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_DonutChart__WEBPACK_IMPORTED_MODULE_1__.DonutChartContext);\n    const { classNames, clickHandlers, index, isEmpty, label, value, ...restItemRenderProps } = item;\n    const classSuffix = \"legend-item\";\n    const legendWidth = width - graphWidth;\n    const sqUnit = legendWidth / 10;\n    const yOffset = 1.5;\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", _extends({}, clickHandlers, {\n        className: `${className}-${classSuffix} ${classNames}`,\n        transform: `translate(${width - legendWidth}, ${index * yOffset * sqUnit})`\n    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"rect\", _extends({}, restItemRenderProps, {\n        height: sqUnit,\n        width: sqUnit\n    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"text\", {\n        className: `${className}-${classSuffix}-label ${classNames}`,\n        dy: \".35em\",\n        x: sqUnit + sqUnit / 2,\n        y: sqUnit / 2\n    }, `${label} - ${value}`));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LegendItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9udXQtY2hhcnQvZGlzdC9MZWdlbmRJdGVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxTQUFTQTtJQUFXQSxXQUFTQyxPQUFPQyxNQUFNLElBQUUsU0FBU0MsTUFBTTtRQUFFLElBQUksSUFBSUMsSUFBRSxHQUFFQSxJQUFFQyxVQUFVQyxNQUFNLEVBQUNGLElBQUk7WUFBQyxJQUFJRyxTQUFPRixTQUFTLENBQUNELEVBQUU7WUFBQyxJQUFJLElBQUlJLE9BQU9ELE9BQU87Z0JBQUMsSUFBR04sT0FBT1EsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ0osUUFBT0MsTUFBSztvQkFBQ0wsTUFBTSxDQUFDSyxJQUFJLEdBQUNELE1BQU0sQ0FBQ0MsSUFBSTtnQkFBQTtZQUFDO1FBQUM7UUFBQyxPQUFPTDtJQUFNO0lBQUUsT0FBT0gsU0FBU1ksS0FBSyxDQUFDLElBQUksRUFBQ1A7QUFBVTtBQUFzQztBQUE0QztBQUFBLE1BQU1XLGFBQVcsQ0FBQyxFQUFDQyxJQUFJLEVBQUM7SUFBSSxNQUFLLEVBQUNDLFNBQVMsRUFBQ0MsVUFBVSxFQUFDQyxLQUFLLEVBQUMsR0FBQ04saURBQVVBLENBQUNDLDBEQUFpQkE7SUFBRSxNQUFLLEVBQUNNLFVBQVUsRUFBQ0MsYUFBYSxFQUFDQyxLQUFLLEVBQUNDLE9BQU8sRUFBQ0MsS0FBSyxFQUFDQyxLQUFLLEVBQUMsR0FBR0MscUJBQW9CLEdBQUNWO0lBQUssTUFBTVcsY0FBWTtJQUFjLE1BQU1DLGNBQVlULFFBQU1EO0lBQVcsTUFBTVcsU0FBT0QsY0FBWTtJQUFHLE1BQU1FLFVBQVE7SUFBSSxPQUFNLFdBQVcsR0FBRWxCLDBEQUFtQixDQUFDLEtBQUliLFNBQVMsQ0FBQyxHQUFFc0IsZUFBYztRQUFDSixXQUFVLENBQUMsRUFBRUEsVUFBVSxDQUFDLEVBQUVVLFlBQVksQ0FBQyxFQUFFUCxXQUFXLENBQUM7UUFBQ1ksV0FBVSxDQUFDLFVBQVUsRUFBRWIsUUFBTVMsWUFBWSxFQUFFLEVBQUVOLFFBQU1RLFVBQVFELE9BQU8sQ0FBQyxDQUFDO0lBQUEsSUFBRyxXQUFXLEdBQUVqQiwwREFBbUIsQ0FBQyxRQUFPYixTQUFTLENBQUMsR0FBRTJCLHFCQUFvQjtRQUFDTyxRQUFPSjtRQUFPVixPQUFNVTtJQUFNLEtBQUksV0FBVyxHQUFFakIsMERBQW1CLENBQUMsUUFBTztRQUFDSyxXQUFVLENBQUMsRUFBRUEsVUFBVSxDQUFDLEVBQUVVLFlBQVksT0FBTyxFQUFFUCxXQUFXLENBQUM7UUFBQ2MsSUFBRztRQUFRQyxHQUFFTixTQUFPQSxTQUFPO1FBQUVPLEdBQUVQLFNBQU87SUFBQyxHQUFFLENBQUMsRUFBRUwsTUFBTSxHQUFHLEVBQUVDLE1BQU0sQ0FBQztBQUFFO0FBQUUsaUVBQWVWLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2xhbmFfd2FsbGV0X3RyYWNrZXIvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9udXQtY2hhcnQvZGlzdC9MZWdlbmRJdGVtLmpzP2Q0ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKXtfZXh0ZW5kcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0YXJnZXQpe2Zvcih2YXIgaT0xO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspe3ZhciBzb3VyY2U9YXJndW1lbnRzW2ldO2Zvcih2YXIga2V5IGluIHNvdXJjZSl7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSxrZXkpKXt0YXJnZXRba2V5XT1zb3VyY2Vba2V5XX19fXJldHVybiB0YXJnZXR9O3JldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9aW1wb3J0IFJlYWN0LHt1c2VDb250ZXh0fWZyb21cInJlYWN0XCI7aW1wb3J0e0RvbnV0Q2hhcnRDb250ZXh0fWZyb21cIi4vRG9udXRDaGFydFwiO2NvbnN0IExlZ2VuZEl0ZW09KHtpdGVtfSk9Pntjb25zdHtjbGFzc05hbWUsZ3JhcGhXaWR0aCx3aWR0aH09dXNlQ29udGV4dChEb251dENoYXJ0Q29udGV4dCk7Y29uc3R7Y2xhc3NOYW1lcyxjbGlja0hhbmRsZXJzLGluZGV4LGlzRW1wdHksbGFiZWwsdmFsdWUsLi4ucmVzdEl0ZW1SZW5kZXJQcm9wc309aXRlbTtjb25zdCBjbGFzc1N1ZmZpeD1cImxlZ2VuZC1pdGVtXCI7Y29uc3QgbGVnZW5kV2lkdGg9d2lkdGgtZ3JhcGhXaWR0aDtjb25zdCBzcVVuaXQ9bGVnZW5kV2lkdGgvMTA7Y29uc3QgeU9mZnNldD0xLjU7cmV0dXJuLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsX2V4dGVuZHMoe30sY2xpY2tIYW5kbGVycyx7Y2xhc3NOYW1lOmAke2NsYXNzTmFtZX0tJHtjbGFzc1N1ZmZpeH0gJHtjbGFzc05hbWVzfWAsdHJhbnNmb3JtOmB0cmFuc2xhdGUoJHt3aWR0aC1sZWdlbmRXaWR0aH0sICR7aW5kZXgqeU9mZnNldCpzcVVuaXR9KWB9KSwvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIixfZXh0ZW5kcyh7fSxyZXN0SXRlbVJlbmRlclByb3BzLHtoZWlnaHQ6c3FVbml0LHdpZHRoOnNxVW5pdH0pKSwvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRcIix7Y2xhc3NOYW1lOmAke2NsYXNzTmFtZX0tJHtjbGFzc1N1ZmZpeH0tbGFiZWwgJHtjbGFzc05hbWVzfWAsZHk6XCIuMzVlbVwiLHg6c3FVbml0K3NxVW5pdC8yLHk6c3FVbml0LzJ9LGAke2xhYmVsfSAtICR7dmFsdWV9YCkpfTtleHBvcnQgZGVmYXVsdCBMZWdlbmRJdGVtOyJdLCJuYW1lcyI6WyJfZXh0ZW5kcyIsIk9iamVjdCIsImFzc2lnbiIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsIlJlYWN0IiwidXNlQ29udGV4dCIsIkRvbnV0Q2hhcnRDb250ZXh0IiwiTGVnZW5kSXRlbSIsIml0ZW0iLCJjbGFzc05hbWUiLCJncmFwaFdpZHRoIiwid2lkdGgiLCJjbGFzc05hbWVzIiwiY2xpY2tIYW5kbGVycyIsImluZGV4IiwiaXNFbXB0eSIsImxhYmVsIiwidmFsdWUiLCJyZXN0SXRlbVJlbmRlclByb3BzIiwiY2xhc3NTdWZmaXgiLCJsZWdlbmRXaWR0aCIsInNxVW5pdCIsInlPZmZzZXQiLCJjcmVhdGVFbGVtZW50IiwidHJhbnNmb3JtIiwiaGVpZ2h0IiwiZHkiLCJ4IiwieSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-donut-chart/dist/LegendItem.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-donut-chart/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-donut-chart/dist/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DonutChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DonutChart */ \"(ssr)/./node_modules/react-donut-chart/dist/DonutChart.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DonutChart__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9udXQtY2hhcnQvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxQztBQUFBLGlFQUFlQSxtREFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvbGFuYV93YWxsZXRfdHJhY2tlci8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb251dC1jaGFydC9kaXN0L2luZGV4LmpzPzAzYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERvbnV0Q2hhcnQgZnJvbVwiLi9Eb251dENoYXJ0XCI7ZXhwb3J0IGRlZmF1bHQgRG9udXRDaGFydDsiXSwibmFtZXMiOlsiRG9udXRDaGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-donut-chart/dist/index.js\n");

/***/ })

};
;