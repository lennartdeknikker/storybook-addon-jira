"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withGlobals = void 0;

var _addons = require("@storybook/addons");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var withGlobals = function withGlobals(StoryFn, context) {
  var _useGlobals = (0, _addons.useGlobals)(),
      _useGlobals2 = _slicedToArray(_useGlobals, 2),
      myAddon = _useGlobals2[0].myAddon,
      updateGlobals = _useGlobals2[1]; // Is the addon being used in the docs panel


  var isInDocs = context.viewMode === "docs";
  (0, _addons.useEffect)(function () {
    // Execute your side effect here
    // For example, to manipulate the contents of the preview
    var selectorId = isInDocs ? "#anchor--".concat(context.id, " .docs-story") : "root";
    displayToolState(selectorId, {
      myAddon: myAddon,
      isInDocs: isInDocs
    });
  }, [myAddon]);
  return StoryFn();
};

exports.withGlobals = withGlobals;

function displayToolState(selector, state) {
  var rootElement = document.getElementById(selector);
  var preElement = rootElement.querySelector("pre");

  if (!preElement) {
    preElement = document.createElement("pre");
    preElement.style.setProperty("margin-top", "2rem");
    preElement.style.setProperty("padding", "1rem");
    preElement.style.setProperty("background-color", "#eee");
    preElement.style.setProperty("border-radius", "3px");
    preElement.style.setProperty("max-width", "600px");
    rootElement.appendChild(preElement);
  }

  preElement.innerText = "Here I can display a message that Jira is connected or maybe a JIRA login prompt.\n\n".concat(JSON.stringify(state, null, 2), "\n");
}