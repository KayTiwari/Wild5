"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToggleButton;

var _react = _interopRequireWildcard(require("react"));

var _PrimaryButton = _interopRequireDefault(require("../PrimaryButton"));

require("./toggle-button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @name ToggleButton
 * @extends `PrimaryButton`
 * @description Renders an icon and a text into an `PrimaryButton`.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button: defaults to 40.
 * @param {number} props.height Height of the button: defaults to 25.
 * @param {string} props.color Color for the toggle: defaults to #3b73ff.
 * @param {boolean} props.disabled Disables the toggle button.
 * @param {function} props.onToggle onclick event function of the button: receives the state `Boolean` of the toggle as an argument.
 * @returns {JSX.Element} A toggle button.
 */
function ToggleButton(props) {
  var _useState = (0, _react.useState)(props.on || false),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _props$width = props.width,
      width = _props$width === void 0 ? 40 : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? 25 : _props$height,
      _props$color = props.color,
      color = _props$color === void 0 ? '#3b73ff' : _props$color;
  var size = height * 0.6,
      borderRadius = height * 0.5,
      margin = size / 0.6 * (0.4 / 2) - 1;
  var buttonStyle = {
    borderColor: props.disabled ? '#ccc' : state ? color : '#4D4F5C',
    borderRadius: borderRadius
  };
  var spanStyle = {
    height: size,
    width: size,
    marginLeft: state ? "calc(100% - ".concat(size, "px - ").concat(margin, "px)") : margin,
    backgroundColor: props.disabled ? '#ccc' : state ? color : '#4D4F5C'
  };
  var addClass = "toggle-button ".concat(props.addClass || '', " ").concat(props.disabled ? 'disabled' : '');

  var toggle = function toggle() {
    if (props.disabled) return;
    setState(!state);
    props.onToggle && props.onToggle(!state);
  };

  return _react.default.createElement(_PrimaryButton.default, {
    style: buttonStyle,
    addClass: addClass,
    onClick: toggle,
    width: width,
    height: height,
    disabled: props.disabled
  }, _react.default.createElement("span", {
    style: spanStyle
  }));
}

//# sourceMappingURL=index.js.map