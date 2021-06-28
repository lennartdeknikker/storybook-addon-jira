"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _theming = require("@storybook/theming");

var AvatarImage = _theming.styled.img({
  borderRadius: "50%",
  width: '24px',
  height: '24px',
  marginLeft: '5px',
  '&.avatar-priority': {
    transform: "scale(0.6) translateY(5px)"
  },
  '&.avatar-comment': {
    marginRight: '10px',
    marginLeft: 0
  }
});

var _default = AvatarImage;
exports["default"] = _default;