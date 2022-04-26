"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _AppContext = require("./AppContext");

var _checker = _interopRequireDefault(require("./checker"));

require("./App.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PasswordCheckerComponent(_ref) {
  let {
    password,
    getData
  } = _ref;
  const {
    savePasswordCheckerResult,
    passwordCheckerResult
  } = (0, _react.useContext)(_AppContext.AppContext); //console.log(passwordCheckerResult)

  (0, _react.useEffect)(() => {
    let result = (0, _checker.default)(password);
    savePasswordCheckerResult(result);
    getData && getData(result);
  }, [password]); //console.log(getData)

  const emptyPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.state) === 'empty' && 'bg-gray';
  const veryWeakPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 4 && 'bg-red';
  const weakPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 3 && 'bg-orange';
  const weakGreyPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 3 && 'bg-gray';
  const fairPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 2 && 'bg-orange';
  const fairGreyPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 2 && 'bg-gray';
  const strongPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 1 && passwordCheckerResult.state !== 'empty' && 'bg-green';
  const strongGreyPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 1 && passwordCheckerResult.state !== 'empty' && 'bg-gray';
  const veryStrongPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 0 && passwordCheckerResult.state !== 'empty' && 'bg-green'; // const veryStrongPassword = passwordCheckerResult?.errors.length === 1 && 'bg-blue-500'

  const emptyPasswordTextColor = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.state) === 'empty' && 'text-gray';
  const emptyPasswordText = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.state) === 'empty' && 'Password is empty';
  const veryWeakPasswordTextColor = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 4 && 'text-red';
  const veryWeakPasswordText = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 4 && 'Password is very weak';
  const weakPasswordTextColor = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 3 && 'text-orange';
  const weakPasswordText = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 3 && 'Password is weak';
  const fairPasswordTextColor = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 2 && 'text-orange';
  const fairPasswordText = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 2 && 'Password is fair';
  const strongPasswordTextColor = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 1 && passwordCheckerResult.state !== 'empty' && 'text-green';
  const strongPasswordText = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 1 && passwordCheckerResult.state !== 'empty' && 'Password is strong';
  const veryStrongPasswordTextColor = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 0 && passwordCheckerResult.state !== 'empty' && 'text-green';
  const veryStrongPasswordText = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 0 && passwordCheckerResult.state !== 'empty' && 'Password is very strong';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "wrapper",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "lines-wrapper",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "line ".concat(emptyPassword, " ").concat(veryWeakPassword, " ").concat(weakPassword, " ").concat(fairPassword, " ").concat(strongPassword, " ").concat(veryStrongPassword)
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "line ".concat(emptyPassword, " ").concat(veryWeakPassword, " ").concat(weakPassword, " ").concat(fairPassword, " ").concat(strongPassword, " ").concat(veryStrongPassword)
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "line ".concat(emptyPassword, " ").concat(veryWeakPassword, " ").concat(weakGreyPassword, " ").concat(fairPassword, " ").concat(strongPassword, " ").concat(veryStrongPassword)
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "line ".concat(emptyPassword, " ").concat(veryWeakPassword, " ").concat(weakGreyPassword, " ").concat(fairGreyPassword, " ").concat(strongPassword, " ").concat(veryStrongPassword)
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "line ".concat(emptyPassword, " ").concat(veryWeakPassword, " ").concat(weakGreyPassword, " ").concat(fairGreyPassword, " ").concat(strongGreyPassword, " ").concat(veryStrongPassword)
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "message-wrapper",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          className: "message ".concat(emptyPasswordTextColor, " ").concat(veryWeakPasswordTextColor, " ").concat(weakPasswordTextColor, " ").concat(fairPasswordTextColor, " ").concat(strongPasswordTextColor, " ").concat(veryStrongPasswordTextColor),
          children: [emptyPasswordText, " ", veryWeakPasswordText, " ", weakPasswordText, " ", fairPasswordText, " ", strongPasswordText, " ", veryStrongPasswordText]
        })
      })]
    })
  });
}

var _default = PasswordCheckerComponent;
exports.default = _default;