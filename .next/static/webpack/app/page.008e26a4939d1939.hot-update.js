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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_IoClose_react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=IoClose!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst NftModal = (param)=>{\n    let { imageUrl, onClose, nftAttributes, nftName } = param;\n    _s();\n    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            if (modalRef.current && !modalRef.current.contains(event.target)) {\n                // Clicked outside the modal, close it\n                onClose();\n            }\n        };\n        // Attach the event listener when the modal is open\n        document.addEventListener(\"mousedown\", handleClickOutside);\n        // Remove the event listener when the modal is closed\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n        };\n    }, [\n        onClose\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: modalRef,\n            className: \"flex flex-col bg-gray-200 text-black dark:bg-gray-800 dark:text-white p-10 rounded-3xl relative max-w-[80%] overflow-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-2xl font-bold mb-4\",\n                            children: nftName\n                        }, void 0, false, {\n                            fileName: \"/Users/ondrejvosmera/Desktop/solana_wallet_tracker/app/nftModal.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: onClose,\n                            className: \"absolute top-5 right-5 dark:text-white dark:hover:text-gray-400 text-2xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoClose_react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoClose, {}, void 0, false, {\n                                fileName: \"/Users/ondrejvosmera/Desktop/solana_wallet_tracker/app/nftModal.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ondrejvosmera/Desktop/solana_wallet_tracker/app/nftModal.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ondrejvosmera/Desktop/solana_wallet_tracker/app/nftModal.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row gap-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageUrl,\n                            alt: \"NFT\",\n                            className: \"xl:w-[32rem] mb-4 object-cover lg:w-[20rem] md:w-[10rem]\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ondrejvosmera/Desktop/solana_wallet_tracker/app/nftModal.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-3 gap-5\",\n                            children: Object.entries(nftAttributes).map((param, index)=>{\n                                let [attribute, value] = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col p-3 bg-gray-300 dark:bg-gray-700 rounded-xl max-w-36 max-h-36\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-xs dark:text-gray-400\",\n                                            children: [\n                                                attribute,\n                                                \":\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ondrejvosmera/Desktop/solana_wallet_tracker/app/nftModal.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"flex items-center text-sm font-medium\",\n                                            children: value\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ondrejvosmera/Desktop/solana_wallet_tracker/app/nftModal.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 82\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/ondrejvosmera/Desktop/solana_wallet_tracker/app/nftModal.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/ondrejvosmera/Desktop/solana_wallet_tracker/app/nftModal.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ondrejvosmera/Desktop/solana_wallet_tracker/app/nftModal.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ondrejvosmera/Desktop/solana_wallet_tracker/app/nftModal.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ondrejvosmera/Desktop/solana_wallet_tracker/app/nftModal.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NftModal, \"iXNJws+mDn9J+ZcpHudMXHGV85c=\");\n_c = NftModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NftModal);\nvar _c;\n$RefreshReg$(_c, \"NftModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9uZnRNb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRDtBQUNQO0FBVzFDLE1BQU1JLFdBQW9DO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUVDLGFBQWEsRUFBRUMsT0FBTyxFQUFFOztJQUN0RixNQUFNQyxXQUFXUCw2Q0FBTUEsQ0FBaUI7SUFFeENELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMscUJBQXFCLENBQUNDO1lBQzFCLElBQUlGLFNBQVNHLE9BQU8sSUFBSSxDQUFDSCxTQUFTRyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsTUFBTUcsTUFBTSxHQUFXO2dCQUN4RSxzQ0FBc0M7Z0JBQ3RDUjtZQUNGO1FBQ0Y7UUFFQSxtREFBbUQ7UUFDbkRTLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFOO1FBRXZDLHFEQUFxRDtRQUNyRCxPQUFPO1lBQ0xLLFNBQVNFLG1CQUFtQixDQUFDLGFBQWFQO1FBQzVDO0lBQ0YsR0FBRztRQUFDSjtLQUFRO0lBRVoscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlFLEtBQUtYO1lBQVVVLFdBQVU7OzhCQUU1Qiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBR0YsV0FBVTtzQ0FBMkJYOzs7Ozs7c0NBQ3pDLDhEQUFDYzs0QkFDQ0MsU0FBU2pCOzRCQUNUYSxXQUFVO3NDQUVWLDRFQUFDaEIsbUZBQU9BOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUlaLDhEQUFDZTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNLOzRCQUFJQyxLQUFLcEI7NEJBQVVxQixLQUFJOzRCQUFNUCxXQUFVOzs7Ozs7c0NBRXhDLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWlEsT0FBT0MsT0FBTyxDQUFDckIsZUFBZXNCLEdBQUcsQ0FBQyxRQUFxQkM7b0NBQXBCLENBQUNDLFdBQVdDLE1BQU07cURBQ3BELDhEQUFDZDtvQ0FBZ0JDLFdBQVU7O3NEQUN6Qiw4REFBQ2M7NENBQUtkLFdBQVU7O2dEQUE4Qlk7Z0RBQVU7Ozs7Ozs7d0NBQVE7c0RBQUMsOERBQUNFOzRDQUFLZCxXQUFVO3NEQUF5Q2E7Ozs7Ozs7bUNBRGxIRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN4QjtHQWhETTFCO0tBQUFBO0FBa0ROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9uZnRNb2RhbC50c3g/YzExMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJb0Nsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xuXG5pbnRlcmZhY2UgTmZ0TW9kYWxQcm9wcyB7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG4gIG5mdEF0dHJpYnV0ZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gIH07XG4gIG5mdE5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgTmZ0TW9kYWw6IFJlYWN0LkZDPE5mdE1vZGFsUHJvcHM+ID0gKHsgaW1hZ2VVcmwsIG9uQ2xvc2UsIG5mdEF0dHJpYnV0ZXMsIG5mdE5hbWUgfSkgPT4ge1xuICBjb25zdCBtb2RhbFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChtb2RhbFJlZi5jdXJyZW50ICYmICFtb2RhbFJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKSkge1xuICAgICAgICAvLyBDbGlja2VkIG91dHNpZGUgdGhlIG1vZGFsLCBjbG9zZSBpdFxuICAgICAgICBvbkNsb3NlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEF0dGFjaCB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGUgbW9kYWwgaXMgb3BlblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG5cbiAgICAvLyBSZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhlIG1vZGFsIGlzIGNsb3NlZFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH07XG4gIH0sIFtvbkNsb3NlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS01MFwiPlxuICAgICAgPGRpdiByZWY9e21vZGFsUmVmfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJnLWdyYXktMjAwIHRleHQtYmxhY2sgZGFyazpiZy1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGUgcC0xMCByb3VuZGVkLTN4bCByZWxhdGl2ZSBtYXgtdy1bODAlXSBvdmVyZmxvdy1hdXRvXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPntuZnROYW1lfTwvaDM+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC01IHJpZ2h0LTUgZGFyazp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6dGV4dC1ncmF5LTQwMCB0ZXh0LTJ4bFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElvQ2xvc2UgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgZ2FwLTEyJz5cbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD1cIk5GVFwiIGNsYXNzTmFtZT1cInhsOnctWzMycmVtXSBtYi00IG9iamVjdC1jb3ZlciBsZzp3LVsyMHJlbV0gbWQ6dy1bMTByZW1dXCIgLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0zIGdhcC01Jz5cbiAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhuZnRBdHRyaWJ1dGVzKS5tYXAoKFthdHRyaWJ1dGUsIHZhbHVlXSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgcC0zIGJnLWdyYXktMzAwIGRhcms6YmctZ3JheS03MDAgcm91bmRlZC14bCBtYXgtdy0zNiBtYXgtaC0zNic+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXhzIGRhcms6dGV4dC1ncmF5LTQwMCc+e2F0dHJpYnV0ZX06PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gZm9udC1tZWRpdW0nPnt2YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZnRNb2RhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIklvQ2xvc2UiLCJOZnRNb2RhbCIsImltYWdlVXJsIiwib25DbG9zZSIsIm5mdEF0dHJpYnV0ZXMiLCJuZnROYW1lIiwibW9kYWxSZWYiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJoMyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiaW5kZXgiLCJhdHRyaWJ1dGUiLCJ2YWx1ZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/nftModal.tsx\n"));

/***/ })

});