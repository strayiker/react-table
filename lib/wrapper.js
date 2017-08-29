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
        { className: 'rt-table-wrapper' },
        this.props.children
      );
    }
  }]);

  return ReactTableWrapper;
}(_react.Component);

exports.default = ReactTableWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93cmFwcGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0VGFibGVXcmFwcGVyIiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxpQjs7Ozs7Ozs7Ozs7NkJBQ1Q7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsa0JBQWY7QUFBbUMsYUFBS0MsS0FBTCxDQUFXQztBQUE5QyxPQURGO0FBR0Q7Ozs7OztrQkFMa0JGLGlCIiwiZmlsZSI6IndyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUYWJsZVdyYXBwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncnQtdGFibGUtd3JhcHBlcic+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdfQ==