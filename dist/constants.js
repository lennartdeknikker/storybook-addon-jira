"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EVENTS = exports.PARAM_KEY = exports.PANEL_ID = exports.ADDON_ID = void 0;
var ADDON_ID = "storybook/my-addon";
exports.ADDON_ID = ADDON_ID;
var PANEL_ID = "".concat(ADDON_ID, "/panel");
exports.PANEL_ID = PANEL_ID;
var PARAM_KEY = "myAddonParameter";
exports.PARAM_KEY = PARAM_KEY;
var EVENTS = {
  RESULT: "".concat(ADDON_ID, "/result"),
  REQUEST: "".concat(ADDON_ID, "/request"),
  SUBTASKRESULT: "".concat(ADDON_ID, "/subtask-result"),
  CLEAR: "".concat(ADDON_ID, "/clear")
};
exports.EVENTS = EVENTS;