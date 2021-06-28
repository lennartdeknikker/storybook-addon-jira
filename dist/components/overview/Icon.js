"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _theming = require("@storybook/theming");

var _components = require("@storybook/components");

var Icon = (0, _theming.styled)(_components.Icons)({
  height: '12px',
  width: '12px',
  marginLeft: '5px',
  alignSelf: "center",
  display: "inline-flex",
  "&.icon-refresh": {
    marginLeft: 0,
    "@keyframes rotate": {
      from: {
        transform: "rotate(0)"
      },
      to: {
        transform: "rotate(360deg)"
      }
    },
    "&.icon-refreshing": {
      marginLeft: 0,
      animation: '1s infinite alternate rotate'
    }
  }
});
var _default = Icon;
exports["default"] = _default;