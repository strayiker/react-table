'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactTableWrapper = function (_Component) {
  _inherits(ReactTableWrapper, _Component);

  function ReactTableWrapper() {
    _classCallCheck(this, ReactTableWrapper);

    return _possibleConstructorReturn(this, (ReactTableWrapper.__proto__ || Object.getPrototypeOf(ReactTableWrapper)).apply(this, arguments));
  }

  _createClass(ReactTableWrapper, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: this.props.wrapperRef, className: 'rt-table-wrapper' },
        this.props.children
      );
    }
  }]);

  return ReactTableWrapper;
}(_react.Component);

ReactTableWrapper.propTypes = {
  wrapperRef: _react.PropTypes.func.isRequired
};
exports.default = ReactTableWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93cmFwcGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0VGFibGVXcmFwcGVyIiwicHJvcHMiLCJ3cmFwcGVyUmVmIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxpQjs7Ozs7Ozs7Ozs7NkJBS1Q7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLEtBQUssS0FBS0MsS0FBTCxDQUFXQyxVQUFyQixFQUFpQyxXQUFVLGtCQUEzQztBQUNHLGFBQUtELEtBQUwsQ0FBV0U7QUFEZCxPQURGO0FBS0Q7Ozs7OztBQVhrQkgsaUIsQ0FDWkksUyxHQUFZO0FBQ2pCRixjQUFZLGlCQUFVRyxJQUFWLENBQWVDO0FBRFYsQztrQkFEQU4saUIiLCJmaWxlIjoid3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0VGFibGVXcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgd3JhcHBlclJlZjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgcmVmPXt0aGlzLnByb3BzLndyYXBwZXJSZWZ9IGNsYXNzTmFtZT0ncnQtdGFibGUtd3JhcHBlcic+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXX0=