"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _CollapsibleTree = _interopRequireDefault(require("./components/CollapsibleTree"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// const treeData = [
//     {
//         label: 'Root 1',
//         children: [
//             { label: 'Child 1.1' },
//             { label: 'Child 1.2', children: [{ label: 'Grandchild 1.2.1' }] },
//         ],
//     },
//     {
//         label: 'Root 2',
//         children: [
//             { label: 'Child 2.1' },
//             { label: 'Child 2.2' },
//         ],
//     },
// ];

var ExpandCollapsibleTree = function ExpandCollapsibleTree(_ref) {
  var treeData = _ref.treeData;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Collapsible Tree Example"), /*#__PURE__*/_react["default"].createElement(_CollapsibleTree["default"], {
    data: treeData
  }));
};
var _default = exports["default"] = ExpandCollapsibleTree;