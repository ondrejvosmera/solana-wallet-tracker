"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/utf-8-validate";
exports.ids = ["vendor-chunks/utf-8-validate"];
exports.modules = {

/***/ "(ssr)/./node_modules/utf-8-validate/fallback.js":
/*!*************************************************!*\
  !*** ./node_modules/utf-8-validate/fallback.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\n/**\n * Checks if a given buffer contains only correct UTF-8.\n * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by\n * Markus Kuhn.\n *\n * @param {Buffer} buf The buffer to check\n * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`\n * @public\n */ function isValidUTF8(buf) {\n    const len = buf.length;\n    let i = 0;\n    while(i < len){\n        if ((buf[i] & 0x80) === 0x00) {\n            i++;\n        } else if ((buf[i] & 0xe0) === 0xc0) {\n            if (i + 1 === len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i] & 0xfe) === 0xc0 // overlong\n            ) {\n                return false;\n            }\n            i += 2;\n        } else if ((buf[i] & 0xf0) === 0xe0) {\n            if (i + 2 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80 || // overlong\n            buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0 // surrogate (U+D800 - U+DFFF)\n            ) {\n                return false;\n            }\n            i += 3;\n        } else if ((buf[i] & 0xf8) === 0xf0) {\n            if (i + 3 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || (buf[i + 3] & 0xc0) !== 0x80 || buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80 || // overlong\n            buf[i] === 0xf4 && buf[i + 1] > 0x8f || buf[i] > 0xf4 // > U+10FFFF\n            ) {\n                return false;\n            }\n            i += 4;\n        } else {\n            return false;\n        }\n    }\n    return true;\n}\nmodule.exports = isValidUTF8;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXRmLTgtdmFsaWRhdGUvZmFsbGJhY2suanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Q0FRQyxHQUNELFNBQVNBLFlBQVlDLEdBQUc7SUFDdEIsTUFBTUMsTUFBTUQsSUFBSUUsTUFBTTtJQUN0QixJQUFJQyxJQUFJO0lBRVIsTUFBT0EsSUFBSUYsSUFBSztRQUNkLElBQUksQ0FBQ0QsR0FBRyxDQUFDRyxFQUFFLEdBQUcsSUFBRyxNQUFPLE1BQU07WUFDNUJBO1FBQ0YsT0FBTyxJQUFJLENBQUNILEdBQUcsQ0FBQ0csRUFBRSxHQUFHLElBQUcsTUFBTyxNQUFNO1lBQ25DLElBQ0VBLElBQUksTUFBTUYsT0FDVixDQUFDRCxHQUFHLENBQUNHLElBQUksRUFBRSxHQUFHLElBQUcsTUFBTyxRQUN4QixDQUFDSCxHQUFHLENBQUNHLEVBQUUsR0FBRyxJQUFHLE1BQU8sS0FBTSxXQUFXO2NBQ3JDO2dCQUNBLE9BQU87WUFDVDtZQUVBQSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUNILEdBQUcsQ0FBQ0csRUFBRSxHQUFHLElBQUcsTUFBTyxNQUFNO1lBQ25DLElBQ0VBLElBQUksS0FBS0YsT0FDVCxDQUFDRCxHQUFHLENBQUNHLElBQUksRUFBRSxHQUFHLElBQUcsTUFBTyxRQUN4QixDQUFDSCxHQUFHLENBQUNHLElBQUksRUFBRSxHQUFHLElBQUcsTUFBTyxRQUN4QkgsR0FBRyxDQUFDRyxFQUFFLEtBQUssUUFBUSxDQUFDSCxHQUFHLENBQUNHLElBQUksRUFBRSxHQUFHLElBQUcsTUFBTyxRQUFTLFdBQVc7WUFDL0RILEdBQUcsQ0FBQ0csRUFBRSxLQUFLLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDRyxJQUFJLEVBQUUsR0FBRyxJQUFHLE1BQU8sS0FBTSw4QkFBOEI7Y0FDL0U7Z0JBQ0EsT0FBTztZQUNUO1lBRUFBLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQ0gsR0FBRyxDQUFDRyxFQUFFLEdBQUcsSUFBRyxNQUFPLE1BQU07WUFDbkMsSUFDRUEsSUFBSSxLQUFLRixPQUNULENBQUNELEdBQUcsQ0FBQ0csSUFBSSxFQUFFLEdBQUcsSUFBRyxNQUFPLFFBQ3hCLENBQUNILEdBQUcsQ0FBQ0csSUFBSSxFQUFFLEdBQUcsSUFBRyxNQUFPLFFBQ3hCLENBQUNILEdBQUcsQ0FBQ0csSUFBSSxFQUFFLEdBQUcsSUFBRyxNQUFPLFFBQ3hCSCxHQUFHLENBQUNHLEVBQUUsS0FBSyxRQUFRLENBQUNILEdBQUcsQ0FBQ0csSUFBSSxFQUFFLEdBQUcsSUFBRyxNQUFPLFFBQVMsV0FBVztZQUMvREgsR0FBRyxDQUFDRyxFQUFFLEtBQUssUUFBUUgsR0FBRyxDQUFDRyxJQUFJLEVBQUUsR0FBRyxRQUFRSCxHQUFHLENBQUNHLEVBQUUsR0FBRyxLQUFNLGFBQWE7Y0FDcEU7Z0JBQ0EsT0FBTztZQUNUO1lBRUFBLEtBQUs7UUFDUCxPQUFPO1lBQ0wsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFQUMsT0FBT0MsT0FBTyxHQUFHTiIsInNvdXJjZXMiOlsid2VicGFjazovL3NvbGFuYV93YWxsZXRfdHJhY2tlci8uL25vZGVfbW9kdWxlcy91dGYtOC12YWxpZGF0ZS9mYWxsYmFjay5qcz80Njg5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBnaXZlbiBidWZmZXIgY29udGFpbnMgb25seSBjb3JyZWN0IFVURi04LlxuICogUG9ydGVkIGZyb20gaHR0cHM6Ly93d3cuY2wuY2FtLmFjLnVrLyU3RW1nazI1L3Vjcy91dGY4X2NoZWNrLmMgYnlcbiAqIE1hcmt1cyBLdWhuLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWYgVGhlIGJ1ZmZlciB0byBjaGVja1xuICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIGBidWZgIGNvbnRhaW5zIG9ubHkgY29ycmVjdCBVVEYtOCwgZWxzZSBgZmFsc2VgXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRVVEY4KGJ1Zikge1xuICBjb25zdCBsZW4gPSBidWYubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBpZiAoKGJ1ZltpXSAmIDB4ODApID09PSAweDAwKSB7ICAvLyAweHh4eHh4eFxuICAgICAgaSsrO1xuICAgIH0gZWxzZSBpZiAoKGJ1ZltpXSAmIDB4ZTApID09PSAweGMwKSB7ICAvLyAxMTB4eHh4eCAxMHh4eHh4eFxuICAgICAgaWYgKFxuICAgICAgICBpICsgMSA9PT0gbGVuIHx8XG4gICAgICAgIChidWZbaSArIDFdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpXSAmIDB4ZmUpID09PSAweGMwICAvLyBvdmVybG9uZ1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaSArPSAyO1xuICAgIH0gZWxzZSBpZiAoKGJ1ZltpXSAmIDB4ZjApID09PSAweGUwKSB7ICAvLyAxMTEweHh4eCAxMHh4eHh4eCAxMHh4eHh4eFxuICAgICAgaWYgKFxuICAgICAgICBpICsgMiA+PSBsZW4gfHxcbiAgICAgICAgKGJ1ZltpICsgMV0gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICAoYnVmW2kgKyAyXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIGJ1ZltpXSA9PT0gMHhlMCAmJiAoYnVmW2kgKyAxXSAmIDB4ZTApID09PSAweDgwIHx8ICAvLyBvdmVybG9uZ1xuICAgICAgICBidWZbaV0gPT09IDB4ZWQgJiYgKGJ1ZltpICsgMV0gJiAweGUwKSA9PT0gMHhhMCAgLy8gc3Vycm9nYXRlIChVK0Q4MDAgLSBVK0RGRkYpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpICs9IDM7XG4gICAgfSBlbHNlIGlmICgoYnVmW2ldICYgMHhmOCkgPT09IDB4ZjApIHsgIC8vIDExMTEweHh4IDEweHh4eHh4IDEweHh4eHh4IDEweHh4eHh4XG4gICAgICBpZiAoXG4gICAgICAgIGkgKyAzID49IGxlbiB8fFxuICAgICAgICAoYnVmW2kgKyAxXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIChidWZbaSArIDJdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpICsgM10gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICBidWZbaV0gPT09IDB4ZjAgJiYgKGJ1ZltpICsgMV0gJiAweGYwKSA9PT0gMHg4MCB8fCAgLy8gb3ZlcmxvbmdcbiAgICAgICAgYnVmW2ldID09PSAweGY0ICYmIGJ1ZltpICsgMV0gPiAweDhmIHx8IGJ1ZltpXSA+IDB4ZjQgIC8vID4gVSsxMEZGRkZcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGkgKz0gNDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVmFsaWRVVEY4O1xuIl0sIm5hbWVzIjpbImlzVmFsaWRVVEY4IiwiYnVmIiwibGVuIiwibGVuZ3RoIiwiaSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/utf-8-validate/fallback.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/utf-8-validate/index.js":
/*!**********************************************!*\
  !*** ./node_modules/utf-8-validate/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\ntry {\n    module.exports = __webpack_require__(/*! node-gyp-build */ \"(ssr)/./node_modules/node-gyp-build/index.js\")(__dirname);\n} catch (e) {\n    module.exports = __webpack_require__(/*! ./fallback */ \"(ssr)/./node_modules/utf-8-validate/fallback.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXRmLTgtdmFsaWRhdGUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJO0lBQ0ZBLE9BQU9DLE9BQU8sR0FBR0MsbUJBQU9BLENBQUMsc0VBQWtCQztBQUM3QyxFQUFFLE9BQU9DLEdBQUc7SUFDVkoseUdBQXlCO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29sYW5hX3dhbGxldF90cmFja2VyLy4vbm9kZV9tb2R1bGVzL3V0Zi04LXZhbGlkYXRlL2luZGV4LmpzP2FmNmIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG50cnkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ25vZGUtZ3lwLWJ1aWxkJykoX19kaXJuYW1lKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhbGxiYWNrJyk7XG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJfX2Rpcm5hbWUiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/utf-8-validate/index.js\n");

/***/ })

};
;