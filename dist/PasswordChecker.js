"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _AppContext = require("./AppContext");

var _PasswordCheckerComponent = _interopRequireDefault(require("./PasswordCheckerComponent"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function PasswordChecker(_ref) {
  let {
    password,
    strengthData
  } = _ref;
  const [result, setresult] = (0, _react.useState)();
  const data = {
    savePasswordCheckerResult: result => {
      setresult(result);
    },
    passwordCheckerResult: result
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppContext.AppContext.Provider, {
    value: data,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PasswordCheckerComponent.default, {
      password: password,
      getData: strengthData
    })
  });
}

var _default = PasswordChecker;
exports.default = _default;