'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortOrder = function (_Component) {
  _inherits(SortOrder, _Component);

  function SortOrder() {
    _classCallCheck(this, SortOrder);

    return _possibleConstructorReturn(this, (SortOrder.__proto__ || Object.getPrototypeOf(SortOrder)).apply(this, arguments));
  }

  _createClass(SortOrder, [{
    key: 'render',
    value: function render() {
      var desc = this.props.desc;


      var orderClasses = (0, _classnames2.default)({
        'rt-sort-desc': desc,
        'rt-sort-asc': !desc
      });

      return _react2.default.createElement(
        'div',
        { className: 'rt-sort' },
        _react2.default.createElement('div', { className: orderClasses })
      );
    }
  }]);

  return SortOrder;
}(_react.Component);

SortOrder.propTypes = {
  desc: _react.PropTypes.bool
};
exports.default = SortOrder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zb3J0LmpzIl0sIm5hbWVzIjpbIlNvcnRPcmRlciIsImRlc2MiLCJwcm9wcyIsIm9yZGVyQ2xhc3NlcyIsInByb3BUeXBlcyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxTOzs7Ozs7Ozs7Ozs2QkFLVDtBQUFBLFVBQ0FDLElBREEsR0FDUyxLQUFLQyxLQURkLENBQ0FELElBREE7OztBQUdSLFVBQU1FLGVBQWUsMEJBQVc7QUFDOUIsd0JBQWdCRixJQURjO0FBRTlCLHVCQUFlLENBQUNBO0FBRmMsT0FBWCxDQUFyQjs7QUFLQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNFLCtDQUFLLFdBQVdFLFlBQWhCO0FBREYsT0FERjtBQUtEOzs7Ozs7QUFsQmtCSCxTLENBQ1pJLFMsR0FBWTtBQUNqQkgsUUFBTSxpQkFBVUk7QUFEQyxDO2tCQURBTCxTIiwiZmlsZSI6InNvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ydE9yZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgZGVzYzogUHJvcFR5cGVzLmJvb2xcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7IGRlc2MgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3Qgb3JkZXJDbGFzc2VzID0gY2xhc3NuYW1lcyh7XHJcbiAgICAgICdydC1zb3J0LWRlc2MnOiBkZXNjLFxyXG4gICAgICAncnQtc29ydC1hc2MnOiAhZGVzY1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncnQtc29ydCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e29yZGVyQ2xhc3Nlc30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdfQ==