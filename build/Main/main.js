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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithpushkit/src/Main/main.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithpushkit/src/Main/main.ux":
/*!*******************************************************************************************************!*\
  !*** c:/Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithpushkit/src/Main/main.ux ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./main.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../../Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithpushkit/src/Main/main.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=c:/Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithpushkit/src/Main/main.ux!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:/Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithpushkit/src/Main/main.ux!./main.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=c:\\Users\\s00500551\\.quickapp-ide\\workspace\\com.sezerbozkir.quickappwithpushkit\\src\\Main\\main.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:\\Users\\s00500551\\.quickapp-ide\\workspace\\com.sezerbozkir.quickappwithpushkit\\src\\Main\\main.ux!../../Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithpushkit/src/Main/main.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader?presets[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./main.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../../Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithpushkit/src/Main/main.ux")

$app_define$('@app-component/main', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/main',{ packagerName:'fa-toolkit', packagerVersion: '2.6.2-Stable.302'})

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=c:\\Users\\s00500551\\.quickapp-ide\\workspace\\com.sezerbozkir.quickappwithpushkit\\src\\Main\\main.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:\\Users\\s00500551\\.quickapp-ide\\workspace\\com.sezerbozkir.quickappwithpushkit\\src\\Main\\main.ux!../../Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithpushkit/src/Main/main.ux":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=c:/Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithpushkit/src/Main/main.ux!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:/Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithpushkit/src/Main/main.ux!c:/Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithpushkit/src/Main/main.ux ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".push_info": {
    "marginTop": "30px",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".push_control": {
    "position": "fixed"
  },
  ".header-style": {
    "fontWeight": "bold"
  },
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center"
  },
  ".push_token": {
    "fontSize": "30px",
    "marginTop": "30px",
    "marginRight": "30px",
    "marginBottom": "30px",
    "marginLeft": "30px"
  },
  ".btn": {
    "width": "100%"
  },
  ".data_message_shower": {
    "flexDirection": "column",
    "marginBottom": "30px"
  }
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../../Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithpushkit/src/Main/main.ux":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!c:/Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithpushkit/src/Main/main.ux ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "push_control"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "Push Notification:"
          },
          "classList": [
            "header-style"
          ]
        },
        {
          "type": "switch",
          "attr": {
            "id": "notification_activator"
          },
          "events": {
            "change": "checkStatus"
          },
          "id": "notification_activator"
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "data_message_shower"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "Received Data Messages:"
          },
          "classList": [
            "header-style"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.data_messages)}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "push_info"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.message)}
          },
          "classList": [
            "push_token"
          ]
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "Get Token"
          },
          "classList": [
            "btn"
          ],
          "events": {
            "click": "getToken"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../../Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithpushkit/src/Main/main.ux":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader/lib?presets[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!c:/Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithpushkit/src/Main/main.ux ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _service = _interopRequireDefault($app_require$("@app-module/service.push"));

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {
    componentData: {},
    message: 'Click to button to get token',
    token: "",
    data_messages: "Not Received Yet!\n"
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: 'Quick App with Push Kit',
      textColor: '#ffffff',
      backgroundColor: '#007DFF',
      backgroundOpacity: 0.5,
      menu: true
    });
  },
  sendToServer: function sendToServer() {
    var anchor = this;
    console.log("This Token should be store your storage: " + anchor.token.regId);
  },
  getToken: function getToken() {
    var that = this;

    if (that.token === '') {
      _system["default"].showToast({
        message: "Please activate push notification!"
      });
    } else {
      that.message = that.token.regId;
    }
  },
  activatePush: function activatePush() {
    var anchor = this;

    _service["default"].on({
      callback: function callback(ret) {
        if (anchor.data_messages === "Not Received Yet!\n") {
          anchor.data_messages = JSON.stringify(ret);
        } else {
          anchor.data_messages += JSON.stringify(ret);
        }

        console.log("received pass through message, ret=" + JSON.stringify(ret));
      },
      complete: function complete() {
        console.log('push.on completed');
      }
    });

    var pushProvider = _service["default"].getProvider();

    var anchor = this;

    if (pushProvider === "huawei") {
      _service["default"].subscribe({
        success: function success(data) {
          console.log('push.subscribe succeeded, result data = ' + JSON.stringify(data));
          anchor.token = data;
          anchor.sendToServer();
        },
        fail: function fail(data, code) {
          console.log('push.subscribe failed, result data = ' + JSON.stringify(data) + ', code = ' + code);
        },
        complete: function complete() {
          console.log('push.subscribe completed');
        }
      });
    }
  },
  checkStatus: function checkStatus(data) {
    var anchor = this;

    if (data.checked === true) {
      anchor.activatePush();

      _system["default"].showToast({
        message: "Push Notifications Activated!"
      });
    } else {
      _service["default"].off();

      anchor.token = '';
      anchor.message = 'Push Notification deactivated.';

      _system["default"].showToast({
        message: "Push Notifications Deactivated!"
      });
    }
  }
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (
    moduleOwn.data &&
    accessors.some(function (acc) {
        return moduleOwn[acc];
    })
) {
    throw new Error(
        'For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.',
    );
} else if (!moduleOwn.data) {
    moduleOwn.data = {};
    moduleOwn._descriptor = {};
    accessors.forEach(function (acc) {
        var accType = typeof moduleOwn[acc];
        if (accType === 'object') {
            moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
            for (var name in moduleOwn[acc]) {
                moduleOwn._descriptor[name] = { access: acc };
            }
        } else if (accType === 'function') {
            console.warn(
                'For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.',
            );
        }
    });
}
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXE1haW5cXG1haW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL3MwMDUwMDU1MS8ucXVpY2thcHAtaWRlL3dvcmtzcGFjZS9jb20uc2V6ZXJib3praXIucXVpY2thcHB3aXRocHVzaGtpdC9zcmMvTWFpbi9tYWluLnV4P2QzMzQiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL3MwMDUwMDU1MS8ucXVpY2thcHAtaWRlL3dvcmtzcGFjZS9jb20uc2V6ZXJib3praXIucXVpY2thcHB3aXRocHVzaGtpdC9zcmMvTWFpbi9tYWluLnV4PzJmYjMiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL3MwMDUwMDU1MS8ucXVpY2thcHAtaWRlL3dvcmtzcGFjZS9jb20uc2V6ZXJib3praXIucXVpY2thcHB3aXRocHVzaGtpdC9zcmMvTWFpbi9tYWluLnV4P2M2YjUiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL3MwMDUwMDU1MS8ucXVpY2thcHAtaWRlL3dvcmtzcGFjZS9jb20uc2V6ZXJib3praXIucXVpY2thcHB3aXRocHVzaGtpdC9zcmMvTWFpbi9tYWluLnV4Il0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4uLy4uL1VzZXJzL3MwMDUwMDU1MS8ucXVpY2thcHAtaWRlL3dvcmtzcGFjZS9jb20uc2V6ZXJib3praXIucXVpY2thcHB3aXRocHVzaGtpdC9zcmMvTWFpbi9tYWluLnV4XCIpO1xuIiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS10ZW1wbGF0ZS1sb2FkZXIuanM/ZGVwZW5kcz0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vbWFpbi51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcczAwNTAwNTUxXFxcXC5xdWlja2FwcC1pZGVcXFxcd29ya3NwYWNlXFxcXGNvbS5zZXplcmJvemtpci5xdWlja2FwcHdpdGhwdXNoa2l0XFxcXHNyY1xcXFxNYWluXFxcXG1haW4udXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFxzMDA1MDA1NTFcXFxcLnF1aWNrYXBwLWlkZVxcXFx3b3Jrc3BhY2VcXFxcY29tLnNlemVyYm96a2lyLnF1aWNrYXBwd2l0aHB1c2hraXRcXFxcc3JjXFxcXE1haW5cXFxcbWFpbi51eCEuL21haW4udXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtY29tcGlsZXJcXFxcanN4LWxvYWRlci5qcyZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tcHJvcG9zYWwtY2xhc3MtcHJvcGVydGllcyZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tcHJvcG9zYWwtb2JqZWN0LXJlc3Qtc3ByZWFkJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9tYWluLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvbWFpbicsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvbWFpbicseyBwYWNrYWdlck5hbWU6J2ZhLXRvb2xraXQnLCBwYWNrYWdlclZlcnNpb246ICcyLjYuMi1TdGFibGUuMzAyJ30pIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnB1c2hfaW5mb1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnB1c2hfY29udHJvbFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCJcbiAgfSxcbiAgXCIuaGVhZGVyLXN0eWxlXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCJcbiAgfSxcbiAgXCIuY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIucHVzaF90b2tlblwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcHhcIlxuICB9LFxuICBcIi5idG5cIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgfSxcbiAgXCIuZGF0YV9tZXNzYWdlX3Nob3dlclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHB4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJwdXNoX2NvbnRyb2xcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiUHVzaCBOb3RpZmljYXRpb246XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaGVhZGVyLXN0eWxlXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzd2l0Y2hcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJpZFwiOiBcIm5vdGlmaWNhdGlvbl9hY3RpdmF0b3JcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjaGFuZ2VcIjogXCJjaGVja1N0YXR1c1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlkXCI6IFwibm90aWZpY2F0aW9uX2FjdGl2YXRvclwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImRhdGFfbWVzc2FnZV9zaG93ZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiUmVjZWl2ZWQgRGF0YSBNZXNzYWdlczpcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJoZWFkZXItc3R5bGVcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLmRhdGFfbWVzc2FnZXMpfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicHVzaF9pbmZvXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLm1lc3NhZ2UpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJwdXNoX3Rva2VuXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJHZXQgVG9rZW5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJidG5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcImdldFRva2VuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCI8dGVtcGxhdGU+XG4gIDwhLS0gT25seSBvbmUgcm9vdCBub2RlIGlzIGFsbG93ZWQgaW4gdGVtcGxhdGUuIC0tPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInB1c2hfY29udHJvbFwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJoZWFkZXItc3R5bGVcIj5QdXNoIE5vdGlmaWNhdGlvbjo8L3RleHQ+XG4gICAgICA8c3dpdGNoIG9uY2hhbmdlPVwiY2hlY2tTdGF0dXNcIiBpZD1cIm5vdGlmaWNhdGlvbl9hY3RpdmF0b3JcIj48L3N3aXRjaD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0YV9tZXNzYWdlX3Nob3dlclwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJoZWFkZXItc3R5bGVcIj5SZWNlaXZlZCBEYXRhIE1lc3NhZ2VzOjwvdGV4dD5cbiAgICAgIDx0ZXh0Pnt7ZGF0YV9tZXNzYWdlc319PC90ZXh0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwdXNoX2luZm9cIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwicHVzaF90b2tlblwiPnt7bWVzc2FnZX19PC90ZXh0PlxuICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0blwiIHZhbHVlPVwiR2V0IFRva2VuXCIgb25jbGljaz1cImdldFRva2VuXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gIC5wdXNoX2luZm8ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5wdXNoX2NvbnRyb2wge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuICAuaGVhZGVyLXN0eWxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnB1c2hfdG9rZW4ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW46IDMwcHg7XG4gIH1cbiAgLmJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRhdGFfbWVzc2FnZV9zaG93ZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgLy8gQmVmb3JlIHVzZSBwdXNoIGtpdCwgaXQgbXVzdCBiZSBpbXBvcnQgaW4gdGhlIHNjcmlwdCBwYXJ0LlxuICBpbXBvcnQgcHVzaCBmcm9tICdAc2VydmljZS5wdXNoJztcbiAgLy8gQWRkIGZvciBjYW4gYmUgdXNlIHNob3cgdG9hc3RyIG1lc3NhZ2UgZnVuY3Rpb24gXG4gIGltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnO1xuXG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgIGNvbXBvbmVudERhdGE6IHt9LFxuICAgICAgbWVzc2FnZTogJ0NsaWNrIHRvIGJ1dHRvbiB0byBnZXQgdG9rZW4nLFxuICAgICAgdG9rZW46IFwiXCIsXG4gICAgICBkYXRhX21lc3NhZ2VzOiBcIk5vdCBSZWNlaXZlZCBZZXQhXFxuXCJcbiAgICB9LFxuICAgIG9uSW5pdCgpIHtcbiAgICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgICB0ZXh0OiAnUXVpY2sgQXBwIHdpdGggUHVzaCBLaXQnLFxuICAgICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwN0RGRicsXG4gICAgICAgIGJhY2tncm91bmRPcGFjaXR5OiAwLjUsXG4gICAgICAgIG1lbnU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2VuZFRvU2VydmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBUaGlzIGlzIGp1c3QgZnVuY3Rpb24gbmFtZSBkZWZpbml0aW9uLlxuICAgICAgLy8gWW91IHNob3VsZCB1cGRhdGUgZnVuY3Rpb24gYm9keSBiYXNlZCBvbiB5b3VyIHByb2plY3QgY29tbXVuaWNhdGlvbiB3aXRoIHlvdXIgU2VydmVyLlxuICAgICAgLy8gc2FtcGxlOiBTZW5kIHJlZ0lkIHVzaW5nIHdpdGggUmVzdCBBUElcbiAgICAgIHZhciBhbmNob3IgPSB0aGlzO1xuICAgICAgY29uc29sZS5sb2coXCJUaGlzIFRva2VuIHNob3VsZCBiZSBzdG9yZSB5b3VyIHN0b3JhZ2U6IFwiICsgYW5jaG9yLnRva2VuLnJlZ0lkKTtcbiAgICB9LFxuICAgIGdldFRva2VuKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgaWYgKHRoYXQudG9rZW4gPT09ICcnKSB7XG4gICAgICAgIHByb21wdC5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGFjdGl2YXRlIHB1c2ggbm90aWZpY2F0aW9uIVwiXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhhdC5tZXNzYWdlID0gdGhhdC50b2tlbi5yZWdJZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFjdGl2YXRlUHVzaCgpIHtcbiAgICAgIHZhciBhbmNob3IgPSB0aGlzO1xuICAgICAgLy8gVGhlIHBheWxvYWQgb2YgYSBkYXRhIG1lc3NhZ2UgY2FuIGJlIHJlY2VpdmVkIGluIHRoZSBjYWxsYmFjay5cbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmh1YXdlaS5jb20vY29uc3VtZXIvZW4vZG9jL2RldmVsb3BtZW50L3F1aWNrQXBwLVJlZmVyZW5jZXMvcXVpY2thcHAtYXBpLXB1c2gjb24gIFxuICAgICAgcHVzaC5vbih7XG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAocmV0KSB7XG4gICAgICAgICAgaWYgKGFuY2hvci5kYXRhX21lc3NhZ2VzID09PSBcIk5vdCBSZWNlaXZlZCBZZXQhXFxuXCIpIHtcbiAgICAgICAgICAgIGFuY2hvci5kYXRhX21lc3NhZ2VzID0gSlNPTi5zdHJpbmdpZnkocmV0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5jaG9yLmRhdGFfbWVzc2FnZXMgKz0gSlNPTi5zdHJpbmdpZnkocmV0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVkIHBhc3MgdGhyb3VnaCBtZXNzYWdlLCByZXQ9XCIgKyBKU09OLnN0cmluZ2lmeShyZXQpKTtcblxuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdwdXNoLm9uIGNvbXBsZXRlZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIENoZWNraW5nIFByb3ZpZGVyIFR5cGVcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmh1YXdlaS5jb20vY29uc3VtZXIvZW4vZG9jL2RldmVsb3BtZW50L3F1aWNrQXBwLVJlZmVyZW5jZXMvcXVpY2thcHAtYXBpLXB1c2hcbiAgICAgIHZhciBwdXNoUHJvdmlkZXIgPSBwdXNoLmdldFByb3ZpZGVyKCk7XG4gICAgICB2YXIgYW5jaG9yID0gdGhpcztcblxuICAgICAgaWYgKHB1c2hQcm92aWRlciA9PT0gXCJodWF3ZWlcIikge1xuICAgICAgICAvLyBTdWJzY3JpYmVzIHRvIHB1c2ggbWVzc2FnZXMuIEdlbmVyYWxseSwgdGhpcyBBUEkgY2FuIGJlIGNhbGxlZCBkdXJpbmcgYXBwIGluaXRpYWxpemF0aW9uLlxuICAgICAgICAvLyBmb3IgZXhhbXBsZSwgaXQgY2FuIGJlIGNhbGxlZCBpbiB0aGUgb25DcmVhdGUgbWV0aG9kIG9mIGFuIGFwcC5cbiAgICAgICAgcHVzaC5zdWJzY3JpYmUoe1xuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHVzaC5zdWJzY3JpYmUgc3VjY2VlZGVkLCByZXN1bHQgZGF0YSA9ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICBhbmNob3IudG9rZW4gPSBkYXRhO1xuICAgICAgICAgICAgLy8gU2VuZCBkYXRhIHRvIHNlcnZlciBmb3Igc3RvcmUgdXNlciByZWdJZHMuXG4gICAgICAgICAgICBhbmNob3Iuc2VuZFRvU2VydmVyKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZGF0YSwgY29kZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3B1c2guc3Vic2NyaWJlIGZhaWxlZCwgcmVzdWx0IGRhdGEgPSAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkgKyAnLCBjb2RlID0gJyArIGNvZGUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwdXNoLnN1YnNjcmliZSBjb21wbGV0ZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcblxuICAgIGNoZWNrU3RhdHVzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdmFyIGFuY2hvciA9IHRoaXM7XG4gICAgICBpZiAoZGF0YS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgIGFuY2hvci5hY3RpdmF0ZVB1c2goKTtcbiAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogXCJQdXNoIE5vdGlmaWNhdGlvbnMgQWN0aXZhdGVkIVwiXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZW1vdmVzIHB1c2ggZXZlbnQgY2FsbGJhY2suIFxuICAgICAgICAvLyBUaGUgY2FsbGJhY2sgaW4gdGhlIHB1c2gub24gQVBJIHdpbGwgbm90IHJlY2VpdmUgdGhlIGRhdGEgbWVzc2FnZS5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuaHVhd2VpLmNvbS9jb25zdW1lci9lbi9kb2MvZGV2ZWxvcG1lbnQvcXVpY2tBcHAtUmVmZXJlbmNlcy9xdWlja2FwcC1hcGktcHVzaCNvZmZcbiAgICAgICAgcHVzaC5vZmYoKTtcbiAgICAgICAgYW5jaG9yLnRva2VuID0gJyc7XG4gICAgICAgIGFuY2hvci5tZXNzYWdlID0gJ1B1c2ggTm90aWZpY2F0aW9uIGRlYWN0aXZhdGVkLic7XG4gICAgICAgIHByb21wdC5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6IFwiUHVzaCBOb3RpZmljYXRpb25zIERlYWN0aXZhdGVkIVwiXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFDQTtBQWdCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQWhHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=