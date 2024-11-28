/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/users/route";
exports.ids = ["app/api/users/route"];
exports.modules = {

/***/ "better-sqlite3":
/*!*********************************!*\
  !*** external "better-sqlite3" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("better-sqlite3");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=%2FUsers%2Fsergeyamiraghyan%2FDesktop%2FMy%2Ffrontend_armen%2Fnext_homework%2Fcrud%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsergeyamiraghyan%2FDesktop%2FMy%2Ffrontend_armen%2Fnext_homework%2Fcrud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=%2FUsers%2Fsergeyamiraghyan%2FDesktop%2FMy%2Ffrontend_armen%2Fnext_homework%2Fcrud%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsergeyamiraghyan%2FDesktop%2FMy%2Ffrontend_armen%2Fnext_homework%2Fcrud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_sergeyamiraghyan_Desktop_My_frontend_armen_next_homework_crud_src_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/route.ts */ \"(rsc)/./src/app/api/users/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/route\",\n        pathname: \"/api/users\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/route\"\n    },\n    resolvedPagePath: \"/Users/sergeyamiraghyan/Desktop/My/frontend_armen/next_homework/crud/src/app/api/users/route.ts\",\n    nextConfigOutput,\n    userland: _Users_sergeyamiraghyan_Desktop_My_frontend_armen_next_homework_crud_src_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNlcmdleWFtaXJhZ2h5YW4lMkZEZXNrdG9wJTJGTXklMkZmcm9udGVuZF9hcm1lbiUyRm5leHRfaG9tZXdvcmslMkZjcnVkJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnNlcmdleWFtaXJhZ2h5YW4lMkZEZXNrdG9wJTJGTXklMkZmcm9udGVuZF9hcm1lbiUyRm5leHRfaG9tZXdvcmslMkZjcnVkJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMrQztBQUM1SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdS8/MTVmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3NlcmdleWFtaXJhZ2h5YW4vRGVza3RvcC9NeS9mcm9udGVuZF9hcm1lbi9uZXh0X2hvbWV3b3JrL2NydWQvc3JjL2FwcC9hcGkvdXNlcnMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VzZXJzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlcnNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VzZXJzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3NlcmdleWFtaXJhZ2h5YW4vRGVza3RvcC9NeS9mcm9udGVuZF9hcm1lbi9uZXh0X2hvbWV3b3JrL2NydWQvc3JjL2FwcC9hcGkvdXNlcnMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=%2FUsers%2Fsergeyamiraghyan%2FDesktop%2FMy%2Ffrontend_armen%2Fnext_homework%2Fcrud%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsergeyamiraghyan%2FDesktop%2FMy%2Ffrontend_armen%2Fnext_homework%2Fcrud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/_lib/model.ts":
/*!*******************************!*\
  !*** ./src/app/_lib/model.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllUsers: () => (/* binding */ getAllUsers),\n/* harmony export */   getUserByLogin: () => (/* binding */ getUserByLogin),\n/* harmony export */   insertUser: () => (/* binding */ insertUser)\n/* harmony export */ });\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n\nconst sql = new (better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default())('auth.db');\nconst getUserByLogin = (login)=>{\n    const user = sql.prepare(\"SELECT * FROM users where login = ?\").get(login);\n    if (user) {\n        return user;\n    }\n    return null;\n};\nconst getAllUsers = ()=>{\n    return sql.prepare(\"SELECT * FROM users\").all();\n};\nconst insertUser = (user)=>{\n    return sql.prepare(`INSERT INTO users(name, surname, login, password)\n                        VALUES(@name, @surname, @login, @password)`).run(user);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL19saWIvbW9kZWwudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsTUFBTSxJQUFJRCx1REFBRUEsQ0FBQztBQUVaLE1BQU1FLGlCQUFpQixDQUFDQztJQUMzQixNQUFNQyxPQUFPSCxJQUFJSSxPQUFPLENBQUMsdUNBQXVDQyxHQUFHLENBQUNIO0lBQ3BFLElBQUdDLE1BQUs7UUFDSixPQUFPQTtJQUNYO0lBQ0EsT0FBTztBQUNYLEVBQUM7QUFHTSxNQUFNRyxjQUFjO0lBQ3ZCLE9BQU9OLElBQUlJLE9BQU8sQ0FBQyx1QkFBdUJHLEdBQUc7QUFDakQsRUFBQztBQUVNLE1BQU1DLGFBQWEsQ0FBQ0w7SUFDdkIsT0FBT0gsSUFBSUksT0FBTyxDQUFDLENBQUM7a0VBQzBDLENBQUMsRUFDckRLLEdBQUcsQ0FBQ047QUFDbEIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1Ly4vc3JjL2FwcC9fbGliL21vZGVsLnRzPzg2ODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gJ2JldHRlci1zcWxpdGUzJ1xuaW1wb3J0IHsgSW5wdXRVc2VyLCBJVXNlciB9IGZyb20gJy4vdHlwZXMnXG5jb25zdCBzcWwgPSBuZXcgZGIoJ2F1dGguZGInKVxuXG5leHBvcnQgY29uc3QgZ2V0VXNlckJ5TG9naW4gPSAobG9naW46c3RyaW5nKTooSVVzZXJ8bnVsbCkgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBzcWwucHJlcGFyZShcIlNFTEVDVCAqIEZST00gdXNlcnMgd2hlcmUgbG9naW4gPSA/XCIpLmdldChsb2dpbilcbiAgICBpZih1c2VyKXtcbiAgICAgICAgcmV0dXJuIHVzZXIgYXMgSVVzZXJcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0QWxsVXNlcnMgPSAoKT0+e1xuICAgIHJldHVybiBzcWwucHJlcGFyZShcIlNFTEVDVCAqIEZST00gdXNlcnNcIikuYWxsKClcbn1cblxuZXhwb3J0IGNvbnN0IGluc2VydFVzZXIgPSAodXNlcjpJbnB1dFVzZXIpOmRiLlJ1blJlc3VsdD0+e1xuICAgIHJldHVybiBzcWwucHJlcGFyZShgSU5TRVJUIElOVE8gdXNlcnMobmFtZSwgc3VybmFtZSwgbG9naW4sIHBhc3N3b3JkKVxuICAgICAgICAgICAgICAgICAgICAgICAgVkFMVUVTKEBuYW1lLCBAc3VybmFtZSwgQGxvZ2luLCBAcGFzc3dvcmQpYFxuICAgICAgICAgICAgKS5ydW4odXNlcilcbn0iXSwibmFtZXMiOlsiZGIiLCJzcWwiLCJnZXRVc2VyQnlMb2dpbiIsImxvZ2luIiwidXNlciIsInByZXBhcmUiLCJnZXQiLCJnZXRBbGxVc2VycyIsImFsbCIsImluc2VydFVzZXIiLCJydW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/_lib/model.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/route.ts":
/*!************************************!*\
  !*** ./src/app/api/users/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_lib_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/_lib/model */ \"(rsc)/./src/app/_lib/model.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\nconst GET = ()=>{\n    const result = (0,_app_lib_model__WEBPACK_IMPORTED_MODULE_0__.getAllUsers)();\n    return Response.json({\n        result\n    });\n};\nconst POST = async (req)=>{\n    try {\n        const { name, surname, login, password } = await req.json();\n        if (!name.trim() || !surname.trim() || !login.trim() || !password.trim()) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                message: \"All fields are required\"\n            }, {\n                status: 400\n            });\n        }\n        if (password.length < 6) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                message: \"Password must be at least 6 characters\"\n            }, {\n                status: 400\n            });\n        }\n        const existingUser = (0,_app_lib_model__WEBPACK_IMPORTED_MODULE_0__.getUserByLogin)(login);\n        if (existingUser) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                message: \"Login is busy\"\n            }, {\n                status: 400\n            });\n        }\n        const result = (0,_app_lib_model__WEBPACK_IMPORTED_MODULE_0__.insertUser)({\n            login,\n            password,\n            name,\n            surname\n        });\n        if (result.changes) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                message: \"User successfully registered\"\n            });\n        } else {\n            throw new Error(\"Failed to insert user\");\n        }\n    } catch (error) {\n        const err = error;\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: err.message || \"Server error\"\n        }, {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBFO0FBQ2xCO0FBRWpELE1BQU1JLE1BQU07SUFDZixNQUFNQyxTQUFTTCwyREFBV0E7SUFDMUIsT0FBT00sU0FBU0MsSUFBSSxDQUFDO1FBQUNGO0lBQU07QUFDaEMsRUFBRTtBQUVLLE1BQU1HLE9BQU8sT0FBT0M7SUFDdkIsSUFBSTtRQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUcsTUFBTUosSUFBSUYsSUFBSTtRQUN6RCxJQUFJLENBQUNHLEtBQUtJLElBQUksTUFBTSxDQUFDSCxRQUFRRyxJQUFJLE1BQU0sQ0FBQ0YsTUFBTUUsSUFBSSxNQUFNLENBQUNELFNBQVNDLElBQUksSUFBSTtZQUN4RSxPQUFPWCxxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO2dCQUFFUSxTQUFTO1lBQTBCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNqRjtRQUNBLElBQUlILFNBQVNJLE1BQU0sR0FBRyxHQUFHO1lBQ3ZCLE9BQU9kLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7Z0JBQUVRLFNBQVM7WUFBeUMsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ2hHO1FBQ0EsTUFBTUUsZUFBZWpCLDhEQUFjQSxDQUFDVztRQUNwQyxJQUFJTSxjQUFjO1lBQ2hCLE9BQU9mLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7Z0JBQUVRLFNBQVM7WUFBZ0IsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3ZFO1FBQ0EsTUFBTVgsU0FBU0gsMERBQVVBLENBQUM7WUFBRVU7WUFBT0M7WUFBVUg7WUFBTUM7UUFBUTtRQUMzRCxJQUFJTixPQUFPYyxPQUFPLEVBQUU7WUFDbEIsT0FBT2hCLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7Z0JBQUVRLFNBQVM7WUFBK0I7UUFDckUsT0FBTztZQUNMLE1BQU0sSUFBSUssTUFBTTtRQUNsQjtJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNaLE1BQU1DLE1BQU1EO1FBQ2QsT0FBT2xCLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRVEsU0FBU08sSUFBSVAsT0FBTyxJQUFJO1FBQWUsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDckY7QUFDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXUvLi9zcmMvYXBwL2FwaS91c2Vycy9yb3V0ZS50cz84OTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFsbFVzZXJzLCBnZXRVc2VyQnlMb2dpbiwgaW5zZXJ0VXNlciB9IGZyb20gXCJAL2FwcC9fbGliL21vZGVsXCJcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IEdFVCA9ICgpPT57XG4gICAgY29uc3QgcmVzdWx0ID0gZ2V0QWxsVXNlcnMoKVxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHtyZXN1bHR9KVxufTtcblxuZXhwb3J0IGNvbnN0IFBPU1QgPSBhc3luYyAocmVxOiBOZXh0UmVxdWVzdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IG5hbWUsIHN1cm5hbWUsIGxvZ2luLCBwYXNzd29yZCB9ID0gYXdhaXQgcmVxLmpzb24oKVxuICAgICAgaWYgKCFuYW1lLnRyaW0oKSB8fCAhc3VybmFtZS50cmltKCkgfHwgIWxvZ2luLnRyaW0oKSB8fCAhcGFzc3dvcmQudHJpbSgpKSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWRcIiB9LCB7IHN0YXR1czogNDAwIH0pXG4gICAgICB9XG4gICAgICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgNikge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCIgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICAgICAgfVxuICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gZ2V0VXNlckJ5TG9naW4obG9naW4pO1xuICAgICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIkxvZ2luIGlzIGJ1c3lcIiB9LCB7IHN0YXR1czogNDAwIH0pXG4gICAgICB9XG4gICAgICBjb25zdCByZXN1bHQgPSBpbnNlcnRVc2VyKHsgbG9naW4sIHBhc3N3b3JkLCBuYW1lLCBzdXJuYW1lIH0pXG4gICAgICBpZiAocmVzdWx0LmNoYW5nZXMpIHtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJVc2VyIHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkXCIgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBpbnNlcnQgdXNlclwiKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IGVycm9yIGFzIEVycm9yXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB8fCBcIlNlcnZlciBlcnJvclwiIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgICB9XG4gIH0iXSwibmFtZXMiOlsiZ2V0QWxsVXNlcnMiLCJnZXRVc2VyQnlMb2dpbiIsImluc2VydFVzZXIiLCJOZXh0UmVzcG9uc2UiLCJHRVQiLCJyZXN1bHQiLCJSZXNwb25zZSIsImpzb24iLCJQT1NUIiwicmVxIiwibmFtZSIsInN1cm5hbWUiLCJsb2dpbiIsInBhc3N3b3JkIiwidHJpbSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJsZW5ndGgiLCJleGlzdGluZ1VzZXIiLCJjaGFuZ2VzIiwiRXJyb3IiLCJlcnJvciIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=%2FUsers%2Fsergeyamiraghyan%2FDesktop%2FMy%2Ffrontend_armen%2Fnext_homework%2Fcrud%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsergeyamiraghyan%2FDesktop%2FMy%2Ffrontend_armen%2Fnext_homework%2Fcrud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();