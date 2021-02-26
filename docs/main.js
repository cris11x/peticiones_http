/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_archivos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/archivos-page */ \"./src/js/archivos-page.js\");\n//import * as CRUD from './js/crud-provider';\n\n\n/*CRUD.getUsusario( 1 ).then( console.log );*/\n\nObject(_js_archivos_page__WEBPACK_IMPORTED_MODULE_0__[\"init\"])();\n\n/*CRUD.crearUsuario({\n    name: 'Cristian',\n    job: 'Programador'\n}).then( console.log );\n\n\nCRUD.actualizarUsuario( 1, { \n    name: 'Sara',\n    job: 'Developer'\n}).then( console.log );*/\n\n//CRUD.borrarUsuario( 1 ).then( console.log );\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/archivos-page.js":
/*!*********************************!*\
  !*** ./src/js/archivos-page.js ***!
  \*********************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _http_priovider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-priovider */ \"./src/js/http-priovider.js\");\n\n\nconst body = document.body;\nlet inputFile, imgFoto;\n\n\nconst crearInputFileHtml = () => {\n\n    const html = `\n    <h1 class='mt-5'>Subir Archivo</h1>\n    <hr>\n    <label>Selecciona una fotografia</label>\n    <input type=\"file\" accept=\"image/png, image/jpeg\"/>\n\n    <br>\n    <img id=\"foto\" class=\"img-thumbnail\" src=\"\">\n\n    `;\n\n    const div = document.createElement('div');\n    div.innerHTML = html;\n    body.append( div );\n\n    inputFile   = document.querySelector('input');\n    imgFoto     = document.querySelector('#foto');\n\n}\n\nconst eventos = () => {\n    inputFile.addEventListener('change', (event) => {\n\n        const file = event.target.files[0];\n        //console.log(file);\n        Object(_http_priovider__WEBPACK_IMPORTED_MODULE_0__[\"subirImagen\"])( file ).then( url => imgFoto.src = url );\n\n    });\n}\n\nconst init = () => {\n    crearInputFileHtml();\n    eventos();\n}\n\n//# sourceURL=webpack:///./src/js/archivos-page.js?");

/***/ }),

/***/ "./src/js/http-priovider.js":
/*!**********************************!*\
  !*** ./src/js/http-priovider.js ***!
  \**********************************/
/*! exports provided: obtenerChiste, obtenerUsuarios, subirImagen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"obtenerChiste\", function() { return obtenerChiste; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"obtenerUsuarios\", function() { return obtenerUsuarios; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subirImagen\", function() { return subirImagen; });\n//centralizar la logica para realizar peticiones\nconst jokeUrl       = 'https://api.chucknorris.io/jokes/random';\nconst urlUsuarios   = 'https://reqres.in/api/users?page=2';\n\n//Cloudinary\nconst cloudPresent  = 'ebjmb2v3';\nconst cloudUrl      = 'https://api.cloudinary.com/v1_1/cris10x/upload';\n\n\nconst obtenerChiste = async() => {\n    \n\n    try {\n\n        const resp = await fetch( jokeUrl );\n\n        if( !resp.ok ) throw 'no se pudo realizar la peticion';\n\n        const { icon_url, id, value } = await resp.json();\n    \n        return { icon_url, id, value };\n\n    } catch ( err ) {\n\n        throw err;\n\n    }\n\n}\n\nconst obtenerUsuarios = async() => {\n\n    const resp = await fetch( urlUsuarios );\n    const { data:usuarios } = await resp.json();\n\n    return usuarios;\n\n}\n\nconst subirImagen = async( archivoSubir ) => {\n\n    const formData = new FormData();\n    formData.append('upload_preset', cloudPresent );\n    formData.append('file', archivoSubir );\n\n    try {\n\n        const resp = await fetch( cloudUrl, {\n            method: 'POST',\n            body: formData\n        });\n\n        if ( resp.ok ) {\n            const cloudResp = await resp.json();\n            return cloudResp.secure_url;\n        } else {\n            throw await resp.json();\n        }\n\n    } catch( err ) {\n        throw err;\n    }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/http-priovider.js?");

/***/ })

/******/ });