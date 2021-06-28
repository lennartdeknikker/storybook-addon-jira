"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var parseComments = function parseComments(commentData) {
  var parsedComments = {
    amount: commentData.length,
    items: []
  };

  var _iterator = _createForOfIteratorHelper(commentData),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _comment$author, _comment$author2;

      var comment = _step.value;
      parsedComments.items.push({
        author: {
          name: comment === null || comment === void 0 ? void 0 : (_comment$author = comment.author) === null || _comment$author === void 0 ? void 0 : _comment$author.displayName,
          avatar: comment === null || comment === void 0 ? void 0 : (_comment$author2 = comment.author) === null || _comment$author2 === void 0 ? void 0 : _comment$author2.avatarUrls['48x48']
        },
        body: comment.body,
        timeStamps: {
          created: new Date(comment.created),
          updated: new Date(comment.updated)
        }
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  parsedComments.items.reverse();
  return parsedComments;
};

var _default = parseComments;
exports["default"] = _default;