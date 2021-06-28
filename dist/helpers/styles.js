"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addStyles = exports.clearStyles = void 0;

// https://github.com/chromaui/storybook-addon-outline/blob/main/src/helpers.js
var clearStyles = function clearStyles(selector) {
  var selectors = Array.isArray(selector) ? selector : [selector];
  selectors.forEach(clearStyle);
};

exports.clearStyles = clearStyles;

var clearStyle = function clearStyle(selector) {
  var element = document.getElementById(selector);

  if (element && element.parentElement) {
    element.parentElement.removeChild(element);
  }
};

var addStyles = function addStyles(selector, css) {
  var existingStyle = document.getElementById(selector);

  if (existingStyle) {
    console.log("style is already there");

    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    console.log("adding styles because they aren't there");
    var style = document.createElement('style');
    style.setAttribute('id', selector);
    style.innerHTML = css;
    document.head.appendChild(style);
  }
};

exports.addStyles = addStyles;