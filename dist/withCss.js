"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withCss = void 0;

var _addons = require("@storybook/addons");

var _styles = require("./helpers/styles");

var _renderOverviewCss = _interopRequireDefault(require("./renderOverviewCss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var withCss = function withCss(StoryFn, context) {
  // Get and memoize styles
  var styles = (0, _addons.useMemo)(function () {
    return (0, _renderOverviewCss["default"])();
  }, [context.id]); // On mounting the addon...

  (0, _addons.useEffect)(function () {
    console.log('effect triggered');
    (0, _styles.addStyles)("addon-jira", styles); // also: clear styles when the addon unmounts.

    return function () {
      return (0, _styles.clearStyles)(selectorId);
    };
  }, [styles, context.id]);
  return StoryFn();
};

exports.withCss = withCss;