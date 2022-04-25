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
    console.log(result);
    getData(result);
  }, [password]); //console.log(getData)

  const emptyPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.state) === 'empty' && 'bg-gray-200';
  const veryWeakPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 4 && 'bg-red-500';
  const weakPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 3 && 'bg-orange-500';
  const weakGreyPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 3 && 'bg-gray-200';
  const fairPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 2 && 'bg-orange-500';
  const fairGreyPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 2 && 'bg-gray-200';
  const strongPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 1 && passwordCheckerResult.state !== 'empty' && 'bg-green-500';
  const strongGreyPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 1 && passwordCheckerResult.state !== 'empty' && 'bg-gray-200';
  const veryStrongPassword = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 0 && passwordCheckerResult.state !== 'empty' && 'bg-green-500'; // const veryStrongPassword = passwordCheckerResult?.errors.length === 1 && 'bg-blue-500'

  const emptyPasswordTextColor = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.state) === 'empty' && 'text-gray-500';
  const emptyPasswordText = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.state) === 'empty' && 'Password is empty';
  const veryWeakPasswordTextColor = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 4 && 'text-red-500';
  const veryWeakPasswordText = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 4 && 'Password is very weak';
  const weakPasswordTextColor = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 3 && 'text-orange-500';
  const weakPasswordText = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 3 && 'Password is weak';
  const fairPasswordTextColor = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 2 && 'text-orange-500';
  const fairPasswordText = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 2 && 'Password is fair';
  const strongPasswordTextColor = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 1 && passwordCheckerResult.state !== 'empty' && 'text-green-500';
  const strongPasswordText = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 1 && passwordCheckerResult.state !== 'empty' && 'Password is strong';
  const veryStrongPasswordTextColor = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 0 && passwordCheckerResult.state !== 'empty' && 'text-green-500';
  const veryStrongPasswordText = (passwordCheckerResult === null || passwordCheckerResult === void 0 ? void 0 : passwordCheckerResult.errors.length) === 0 && passwordCheckerResult.state !== 'empty' && 'Password is very strong';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "my-4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex gap-5 justify-between my-2",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "h-1 basis-full ".concat(emptyPassword, " ").concat(veryWeakPassword, " ").concat(weakPassword, " ").concat(fairPassword, " ").concat(strongPassword, " ").concat(veryStrongPassword)
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "h-1 basis-full ".concat(emptyPassword, " ").concat(veryWeakPassword, " ").concat(weakPassword, " ").concat(fairPassword, " ").concat(strongPassword, " ").concat(veryStrongPassword)
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "h-1 basis-full ".concat(emptyPassword, " ").concat(veryWeakPassword, " ").concat(weakGreyPassword, " ").concat(fairPassword, " ").concat(strongPassword, " ").concat(veryStrongPassword)
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "h-1 basis-full ".concat(emptyPassword, " ").concat(veryWeakPassword, " ").concat(weakGreyPassword, " ").concat(fairGreyPassword, " ").concat(strongPassword, " ").concat(veryStrongPassword)
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "h-1 basis-full ".concat(emptyPassword, " ").concat(veryWeakPassword, " ").concat(weakGreyPassword, " ").concat(fairGreyPassword, " ").concat(strongGreyPassword, " ").concat(veryStrongPassword)
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "flex flex-wrap justify-between my-2",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          className: "flex items-center ".concat(emptyPasswordTextColor, " ").concat(veryWeakPasswordTextColor, " ").concat(weakPasswordTextColor, " ").concat(fairPasswordTextColor, " ").concat(strongPasswordTextColor, " ").concat(veryStrongPasswordTextColor, " text-sm ml-auto"),
          children: [emptyPasswordText, " ", veryWeakPasswordText, " ", weakPasswordText, " ", fairPasswordText, " ", strongPasswordText, " ", veryStrongPasswordText]
        })
      })]
    })
  });
}

var _default = PasswordCheckerComponent;
exports.default = _default;