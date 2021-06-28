"use strict";

var _addons = require("@storybook/addons");

var _constants = require("../constants");

var _Panel = require("../Panel");

// Register the addon
_addons.addons.register(_constants.ADDON_ID, function (api) {
  // Register the panel
  _addons.addons.add(_constants.PANEL_ID, {
    type: _addons.types.PANEL,
    title: "JIRA tickets",
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return viewMode === "story";
    },
    render: _Panel.Panel
  });
});