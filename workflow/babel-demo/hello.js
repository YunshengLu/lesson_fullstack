"use strict";

var _react = _interopRequireDefault(require("react"));

var _client = _interopRequireDefault(require("react-dom/client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// JSX React 用来描述UI
// 转义的过程
// JSX  ->  页面上运行
var Hello = function Hello() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "Hello World!");
};

_client["default"].createRoot(document.getElementById('root')).render( /*#__PURE__*/_react["default"].createElement(Hello, null));
