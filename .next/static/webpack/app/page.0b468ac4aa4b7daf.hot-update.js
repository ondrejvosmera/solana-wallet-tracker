"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/nftModal.tsx":
/*!**************************!*\
  !*** ./app/nftModal.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_IoClose_react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=IoClose!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst NftModal = (param)=>{\n    let { imageUrl, onClose, nftAttributes, nftName } = param;\n    _s();\n    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            if (modalRef.current && !modalRef.current.contains(event.target)) {\n                // Clicked outside the modal, close it\n                onClose();\n            }\n        };\n        // Attach the event listener when the modal is open\n        document.addEventListener(\"mousedown\", handleClickOutside);\n        // Remove the event listener when the modal is closed\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n        };\n    }, [\n        onClose\n    ]);\n    console.log(\"nftAttributes:\", nftAttributes);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: modalRef,\n            className: \"flex flex-col bg-gray-200 text-black dark:bg-gray-800 dark:text-white p-10 rounded-3xl relative xl:max-w-[80%] lg:max-w-[80%] md:max-w-[80%] w-[70%] h-[80%] overflow-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-2xl font-bold mb-4\",\n                            children: nftName\n                        }, void 0, false, {\n                            fileName: \"/Users/ondrejvosmera/Desktop/solana-wallet-tracker/app/nftModal.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: onClose,\n                            className: \"absolute top-5 right-5 dark:text-white dark:hover:text-gray-400 text-2xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoClose_react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoClose, {}, void 0, false, {\n                                fileName: \"/Users/ondrejvosmera/Desktop/solana-wallet-tracker/app/nftModal.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ondrejvosmera/Desktop/solana-wallet-tracker/app/nftModal.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ondrejvosmera/Desktop/solana-wallet-tracker/app/nftModal.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center xl:items-start lg:items-start xl:flex-row lg:flex-row gap-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageUrl,\n                            alt: \"NFT\",\n                            className: \"xl:w-[32rem] mb-4 object-cover lg:w-[24rem] w-[24rem]\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ondrejvosmera/Desktop/solana-wallet-tracker/app/nftModal.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-5\",\n                            children: nftAttributes.map((attribute, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col p-3 bg-gray-300 dark:bg-gray-700 rounded-xl max-w-36 max-h-36\",\n                                    children: Object.entries(attribute.value).map((param)=>{\n                                        let [key, value] = param;\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-xs dark:text-gray-400\",\n                                                    children: [\n                                                        key,\n                                                        \":\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/ondrejvosmera/Desktop/solana-wallet-tracker/app/nftModal.tsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"flex items-center text-sm font-medium\",\n                                                    children: value\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ondrejvosmera/Desktop/solana-wallet-tracker/app/nftModal.tsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, key, true, {\n                                            fileName: \"/Users/ondrejvosmera/Desktop/solana-wallet-tracker/app/nftModal.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 17\n                                        }, undefined);\n                                    })\n                                }, index, false, {\n                                    fileName: \"/Users/ondrejvosmera/Desktop/solana-wallet-tracker/app/nftModal.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/ondrejvosmera/Desktop/solana-wallet-tracker/app/nftModal.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ondrejvosmera/Desktop/solana-wallet-tracker/app/nftModal.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ondrejvosmera/Desktop/solana-wallet-tracker/app/nftModal.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ondrejvosmera/Desktop/solana-wallet-tracker/app/nftModal.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NftModal, \"iXNJws+mDn9J+ZcpHudMXHGV85c=\");\n_c = NftModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NftModal);\nvar _c;\n$RefreshReg$(_c, \"NftModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9uZnRNb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRDtBQUNQO0FBZ0IxQyxNQUFNSSxXQUFvQztRQUFDLEVBQUVDLFFBQVEsRUFBRUMsT0FBTyxFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBRTs7SUFDdEYsTUFBTUMsV0FBV1AsNkNBQU1BLENBQWlCO0lBRXhDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1TLHFCQUFxQixDQUFDQztZQUMxQixJQUFJRixTQUFTRyxPQUFPLElBQUksQ0FBQ0gsU0FBU0csT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sR0FBVztnQkFDeEUsc0NBQXNDO2dCQUN0Q1I7WUFDRjtRQUNGO1FBRUEsbURBQW1EO1FBQ25EUyxTQUFTQyxnQkFBZ0IsQ0FBQyxhQUFhTjtRQUV2QyxxREFBcUQ7UUFDckQsT0FBTztZQUNMSyxTQUFTRSxtQkFBbUIsQ0FBQyxhQUFhUDtRQUM1QztJQUNGLEdBQUc7UUFBQ0o7S0FBUTtJQUVaWSxRQUFRQyxHQUFHLENBQUMsa0JBQWtCWjtJQUU5QixxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUUsS0FBS2I7WUFBVVksV0FBVTs7OEJBRTVCLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFHRixXQUFVO3NDQUEyQmI7Ozs7OztzQ0FDekMsOERBQUNnQjs0QkFDQ0MsU0FBU25COzRCQUNUZSxXQUFVO3NDQUVWLDRFQUFDbEIsbUZBQU9BOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUlaLDhEQUFDaUI7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDSzs0QkFBSUMsS0FBS3RCOzRCQUFVdUIsS0FBSTs0QkFBTVAsV0FBVTs7Ozs7O3NDQUV4Qyw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2RkLGNBQWNzQixHQUFHLENBQUMsQ0FBQ0MsV0FBV0Msc0JBQzdCLDhEQUFDWDtvQ0FBZ0JDLFdBQVU7OENBQ3hCVyxPQUFPQyxPQUFPLENBQUNILFVBQVVJLEtBQUssRUFBRUwsR0FBRyxDQUFDOzRDQUFDLENBQUNNLEtBQUtELE1BQU07NkRBQ2hELDhEQUFDZDs7OERBQ0MsOERBQUNnQjtvREFBS2YsV0FBVTs7d0RBQThCYzt3REFBSTs7Ozs7Ozs4REFDbEQsOERBQUNDO29EQUFLZixXQUFVOzhEQUF5Q2E7Ozs7Ozs7MkNBRmpEQzs7Ozs7O21DQUZKSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3RCO0dBdkRNM0I7S0FBQUE7QUF5RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL25mdE1vZGFsLnRzeD9jMTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElvQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5cbmludGVyZmFjZSBOZnRBdHRyaWJ1dGUge1xuICB2YWx1ZToge1xuICAgIHRyYWl0X3R5cGU6IHN0cmluZztcbiAgICB2YWx1ZTogc3RyaW5nO1xuICB9O1xufVxuXG5pbnRlcmZhY2UgTmZ0TW9kYWxQcm9wcyB7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG4gIG5mdEF0dHJpYnV0ZXM6IE5mdEF0dHJpYnV0ZVtdO1xuICBuZnROYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IE5mdE1vZGFsOiBSZWFjdC5GQzxOZnRNb2RhbFByb3BzPiA9ICh7IGltYWdlVXJsLCBvbkNsb3NlLCBuZnRBdHRyaWJ1dGVzLCBuZnROYW1lIH0pID0+IHtcbiAgY29uc3QgbW9kYWxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAobW9kYWxSZWYuY3VycmVudCAmJiAhbW9kYWxSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSkpIHtcbiAgICAgICAgLy8gQ2xpY2tlZCBvdXRzaWRlIHRoZSBtb2RhbCwgY2xvc2UgaXRcbiAgICAgICAgb25DbG9zZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBBdHRhY2ggdGhlIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhlIG1vZGFsIGlzIG9wZW5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuXG4gICAgLy8gUmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lciB3aGVuIHRoZSBtb2RhbCBpcyBjbG9zZWRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9O1xuICB9LCBbb25DbG9zZV0pO1xuXG4gIGNvbnNvbGUubG9nKFwibmZ0QXR0cmlidXRlczpcIiwgbmZ0QXR0cmlidXRlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS01MFwiPlxuICAgICAgPGRpdiByZWY9e21vZGFsUmVmfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJnLWdyYXktMjAwIHRleHQtYmxhY2sgZGFyazpiZy1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGUgcC0xMCByb3VuZGVkLTN4bCByZWxhdGl2ZSB4bDptYXgtdy1bODAlXSBsZzptYXgtdy1bODAlXSBtZDptYXgtdy1bODAlXSB3LVs3MCVdIGgtWzgwJV0gb3ZlcmZsb3ctYXV0b1wiPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj57bmZ0TmFtZX08L2gzPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNSByaWdodC01IGRhcms6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOnRleHQtZ3JheS00MDAgdGV4dC0yeGxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJb0Nsb3NlIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB4bDppdGVtcy1zdGFydCBsZzppdGVtcy1zdGFydCB4bDpmbGV4LXJvdyBsZzpmbGV4LXJvdyBnYXAtMTInPlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PVwiTkZUXCIgY2xhc3NOYW1lPVwieGw6dy1bMzJyZW1dIG1iLTQgb2JqZWN0LWNvdmVyIGxnOnctWzI0cmVtXSB3LVsyNHJlbV1cIiAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgeGw6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTMgbWQ6Z3JpZC1jb2xzLTMgZ3JpZC1jb2xzLTIgZ2FwLTUnPlxuICAgICAgICAgIHtuZnRBdHRyaWJ1dGVzLm1hcCgoYXR0cmlidXRlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgcC0zIGJnLWdyYXktMzAwIGRhcms6YmctZ3JheS03MDAgcm91bmRlZC14bCBtYXgtdy0zNiBtYXgtaC0zNic+XG4gICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhhdHRyaWJ1dGUudmFsdWUpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQteHMgZGFyazp0ZXh0LWdyYXktNDAwJz57a2V5fTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gZm9udC1tZWRpdW0nPnt2YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZnRNb2RhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIklvQ2xvc2UiLCJOZnRNb2RhbCIsImltYWdlVXJsIiwib25DbG9zZSIsIm5mdEF0dHJpYnV0ZXMiLCJuZnROYW1lIiwibW9kYWxSZWYiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwiaDMiLCJidXR0b24iLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwibWFwIiwiYXR0cmlidXRlIiwiaW5kZXgiLCJPYmplY3QiLCJlbnRyaWVzIiwidmFsdWUiLCJrZXkiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/nftModal.tsx\n"));

/***/ })

});