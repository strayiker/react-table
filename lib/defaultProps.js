'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _pagination = require('./pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _wrapper = require('./wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


var emptyObj = function emptyObj() {
  return {};
};

exports.default = {
  // General
  data: [],
  loading: false,
  showPagination: true,
  showPaginationTop: false,
  showPaginationBottom: true,
  showPageSizeOptions: true,
  pageSizeOptions: [5, 10, 20, 25, 50, 100],
  defaultPageSize: 20,
  showPageJump: true,
  collapseOnSortingChange: true,
  collapseOnPageChange: true,
  collapseOnDataChange: true,
  freezeWhenExpanded: false,
  sortable: true,
  resizable: true,
  filterable: false,
  defaultSortDesc: false,
  defaultSorted: [],
  defaultFiltered: [],
  defaultResized: [],
  defaultExpanded: {},
  defaultFilterMethod: function defaultFilterMethod(filter, row, column) {
    var id = filter.pivotId || filter.id;
    return row[id] !== undefined ? String(row[id]).startsWith(filter.value) : true;
  },
  defaultSortMethod: function defaultSortMethod(a, b) {
    // force null and undefined to the bottom
    a = a === null || a === undefined ? '' : a;
    b = b === null || b === undefined ? '' : b;
    // force any string values to lowercase
    a = typeof a === 'string' ? a.toLowerCase() : a;
    b = typeof b === 'string' ? b.toLowerCase() : b;
    // Return either 1 or -1 to indicate a sort priority
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    // returning 0, undefined or any falsey value will use subsequent sorts or the index as a tiebreaker
    return 0;
  },

  // Controlled State Props
  // page: undefined,
  // pageSize: undefined,
  // sorted: [],
  // filtered: [],
  // resized: [],
  // expanded: {},

  // Controlled State Callbacks
  onPageChange: undefined,
  onPageSizeChange: undefined,
  onSortedChange: undefined,
  onFilteredChange: undefined,
  onResizedChange: undefined,
  onExpandedChange: undefined,

  // Pivoting
  pivotBy: undefined,

  // Fixed columns
  fixedColumn: undefined,

  // Key Constants
  pivotValKey: '_pivotVal',
  pivotIDKey: '_pivotID',
  subRowsKey: '_subRows',
  aggregatedKey: '_aggregated',
  nestingLevelKey: '_nestingLevel',
  originalKey: '_original',
  indexKey: '_index',
  groupedByPivotKey: '_groupedByPivot',

  // Server-side Callbacks
  onFetchData: function onFetchData() {
    return null;
  },

  // Classes
  className: '',
  style: {},

  // Component decorators
  getProps: emptyObj,
  getTableProps: emptyObj,
  getColGroupColProps: emptyObj,
  getTheadGroupProps: emptyObj,
  getTheadGroupTrProps: emptyObj,
  getTheadGroupThProps: emptyObj,
  getTheadProps: emptyObj,
  getTheadTrProps: emptyObj,
  getTheadThProps: emptyObj,
  getTheadFilterProps: emptyObj,
  getTheadFilterTrProps: emptyObj,
  getTheadFilterThProps: emptyObj,
  getTbodyProps: emptyObj,
  getTrProps: emptyObj,
  getTdProps: emptyObj,
  getTfootProps: emptyObj,
  getTfootTrProps: emptyObj,
  getTfootTdProps: emptyObj,
  getPaginationProps: emptyObj,
  getLoadingProps: emptyObj,
  getNoDataProps: emptyObj,
  getResizerProps: emptyObj,

  // Global Column Defaults
  column: {
    // Renderers
    Cell: undefined,
    Header: undefined,
    Footer: undefined,
    Aggregated: undefined,
    Pivot: undefined,
    PivotValue: undefined,
    Expander: undefined,
    Filter: undefined,
    // All Columns
    sortable: undefined, // use table default
    resizable: undefined, // use table default
    filterable: undefined, // use table default
    show: true,
    width: '10%',
    minWidth: undefined,
    // Cells only
    className: '',
    style: {},
    getProps: emptyObj,
    // Pivot only
    aggregate: undefined,
    // ColGroupCol only
    colGroupColClassName: '',
    colGroupColStyle: {},
    getColGroupColProps: emptyObj,
    // Headers only
    headerClassName: '',
    headerStyle: {},
    getHeaderProps: emptyObj,
    // Footers only
    footerClassName: '',
    footerStyle: {},
    getFooterProps: emptyObj,
    filterMethod: undefined,
    filterAll: false,
    sortMethod: undefined
  },

  // Global Expander Column Defaults
  expanderDefaults: {
    sortable: false,
    resizable: false,
    filterable: false,
    width: 35
  },

  pivotDefaults: {
    // extend the defaults for pivoted columns here
  },

  // Text
  previousText: 'Previous',
  nextText: 'Next',
  loadingText: 'Loading...',
  noDataText: 'No rows found',
  pageText: 'Page',
  ofText: 'of',
  rowsText: 'rows',

  // Components
  TableWrapper: _wrapper2.default,
  TableComponent: _utils2.default.makeTemplateComponent('rt-table', 'Table', 'table'),
  TheadComponent: _utils2.default.makeTemplateComponent('rt-thead', 'Thead', 'thead'),
  TbodyComponent: _utils2.default.makeTemplateComponent('rt-tbody', 'Tbody', 'tbody'),
  TrComponent: _utils2.default.makeTemplateComponent('rt-tr', 'Tr', 'tr'),
  ThComponent: function ThComponent(_ref) {
    var toggleSort = _ref.toggleSort,
        className = _ref.className,
        children = _ref.children,
        rest = _objectWithoutProperties(_ref, ['toggleSort', 'className', 'children']);

    return _react2.default.createElement(
      'th',
      _extends({
        className: (0, _classnames2.default)(className, 'rt-th'),
        onClick: function onClick(e) {
          toggleSort && toggleSort(e);
        }
      }, rest),
      children
    );
  },
  TdComponent: _utils2.default.makeTemplateComponent('rt-td', 'Td', 'td'),
  TfootComponent: _utils2.default.makeTemplateComponent('rt-tfoot', 'Tfoot', 'tfoot'),
  FilterComponent: function FilterComponent(_ref2) {
    var filter = _ref2.filter,
        _onChange = _ref2.onChange;
    return _react2.default.createElement('input', {
      type: 'text',
      style: {
        width: '100%'
      },
      value: filter ? filter.value : '',
      onChange: function onChange(event) {
        return _onChange(event.target.value);
      }
    });
  },
  ExpanderComponent: function ExpanderComponent(_ref3) {
    var isExpanded = _ref3.isExpanded;
    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('rt-expander', isExpanded && '-open') },
      '\u2022'
    );
  },
  PivotValueComponent: function PivotValueComponent(_ref4) {
    var subRows = _ref4.subRows,
        value = _ref4.value;
    return _react2.default.createElement(
      'span',
      null,
      value,
      ' ',
      subRows && '(' + subRows.length + ')'
    );
  },
  AggregatedComponent: function AggregatedComponent(_ref5) {
    var subRows = _ref5.subRows,
        column = _ref5.column;

    var previewValues = subRows.filter(function (d) {
      return typeof d[column.id] !== 'undefined';
    }).map(function (row, i) {
      return _react2.default.createElement(
        'span',
        { key: i },
        row[column.id],
        i < subRows.length - 1 ? ', ' : ''
      );
    });
    return _react2.default.createElement(
      'span',
      null,
      previewValues
    );
  },
  PivotComponent: undefined, // this is a computed default generated using
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: _pagination2.default,
  PreviousComponent: undefined,
  NextComponent: undefined,
  LoadingComponent: function LoadingComponent(_ref6) {
    var className = _ref6.className,
        loading = _ref6.loading,
        loadingText = _ref6.loadingText,
        rest = _objectWithoutProperties(_ref6, ['className', 'loading', 'loadingText']);

    return _react2.default.createElement(
      'div',
      _extends({
        className: (0, _classnames2.default)('-loading', { '-active': loading }, className)
      }, rest),
      _react2.default.createElement(
        'div',
        { className: '-loading-inner' },
        loadingText
      )
    );
  },
  NoDataComponent: _utils2.default.makeTemplateComponent('rt-noData', 'NoData'),
  ResizerComponent: _utils2.default.makeTemplateComponent('rt-resizer', 'Resizer'),
  PadRowComponent: function PadRowComponent() {
    return _react2.default.createElement(
      'span',
      null,
      '\xA0'
    );
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZhdWx0UHJvcHMuanMiXSwibmFtZXMiOlsiZW1wdHlPYmoiLCJkYXRhIiwibG9hZGluZyIsInNob3dQYWdpbmF0aW9uIiwic2hvd1BhZ2luYXRpb25Ub3AiLCJzaG93UGFnaW5hdGlvbkJvdHRvbSIsInNob3dQYWdlU2l6ZU9wdGlvbnMiLCJwYWdlU2l6ZU9wdGlvbnMiLCJkZWZhdWx0UGFnZVNpemUiLCJzaG93UGFnZUp1bXAiLCJjb2xsYXBzZU9uU29ydGluZ0NoYW5nZSIsImNvbGxhcHNlT25QYWdlQ2hhbmdlIiwiY29sbGFwc2VPbkRhdGFDaGFuZ2UiLCJmcmVlemVXaGVuRXhwYW5kZWQiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJkZWZhdWx0U29ydERlc2MiLCJkZWZhdWx0U29ydGVkIiwiZGVmYXVsdEZpbHRlcmVkIiwiZGVmYXVsdFJlc2l6ZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJkZWZhdWx0RmlsdGVyTWV0aG9kIiwiZmlsdGVyIiwicm93IiwiY29sdW1uIiwiaWQiLCJwaXZvdElkIiwidW5kZWZpbmVkIiwiU3RyaW5nIiwic3RhcnRzV2l0aCIsInZhbHVlIiwiZGVmYXVsdFNvcnRNZXRob2QiLCJhIiwiYiIsInRvTG93ZXJDYXNlIiwib25QYWdlQ2hhbmdlIiwib25QYWdlU2l6ZUNoYW5nZSIsIm9uU29ydGVkQ2hhbmdlIiwib25GaWx0ZXJlZENoYW5nZSIsIm9uUmVzaXplZENoYW5nZSIsIm9uRXhwYW5kZWRDaGFuZ2UiLCJwaXZvdEJ5IiwiZml4ZWRDb2x1bW4iLCJwaXZvdFZhbEtleSIsInBpdm90SURLZXkiLCJzdWJSb3dzS2V5IiwiYWdncmVnYXRlZEtleSIsIm5lc3RpbmdMZXZlbEtleSIsIm9yaWdpbmFsS2V5IiwiaW5kZXhLZXkiLCJncm91cGVkQnlQaXZvdEtleSIsIm9uRmV0Y2hEYXRhIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJnZXRQcm9wcyIsImdldFRhYmxlUHJvcHMiLCJnZXRDb2xHcm91cENvbFByb3BzIiwiZ2V0VGhlYWRHcm91cFByb3BzIiwiZ2V0VGhlYWRHcm91cFRyUHJvcHMiLCJnZXRUaGVhZEdyb3VwVGhQcm9wcyIsImdldFRoZWFkUHJvcHMiLCJnZXRUaGVhZFRyUHJvcHMiLCJnZXRUaGVhZFRoUHJvcHMiLCJnZXRUaGVhZEZpbHRlclByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJUclByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJUaFByb3BzIiwiZ2V0VGJvZHlQcm9wcyIsImdldFRyUHJvcHMiLCJnZXRUZFByb3BzIiwiZ2V0VGZvb3RQcm9wcyIsImdldFRmb290VHJQcm9wcyIsImdldFRmb290VGRQcm9wcyIsImdldFBhZ2luYXRpb25Qcm9wcyIsImdldExvYWRpbmdQcm9wcyIsImdldE5vRGF0YVByb3BzIiwiZ2V0UmVzaXplclByb3BzIiwiQ2VsbCIsIkhlYWRlciIsIkZvb3RlciIsIkFnZ3JlZ2F0ZWQiLCJQaXZvdCIsIlBpdm90VmFsdWUiLCJFeHBhbmRlciIsIkZpbHRlciIsInNob3ciLCJ3aWR0aCIsIm1pbldpZHRoIiwiYWdncmVnYXRlIiwiY29sR3JvdXBDb2xDbGFzc05hbWUiLCJjb2xHcm91cENvbFN0eWxlIiwiaGVhZGVyQ2xhc3NOYW1lIiwiaGVhZGVyU3R5bGUiLCJnZXRIZWFkZXJQcm9wcyIsImZvb3RlckNsYXNzTmFtZSIsImZvb3RlclN0eWxlIiwiZ2V0Rm9vdGVyUHJvcHMiLCJmaWx0ZXJNZXRob2QiLCJmaWx0ZXJBbGwiLCJzb3J0TWV0aG9kIiwiZXhwYW5kZXJEZWZhdWx0cyIsInBpdm90RGVmYXVsdHMiLCJwcmV2aW91c1RleHQiLCJuZXh0VGV4dCIsImxvYWRpbmdUZXh0Iiwibm9EYXRhVGV4dCIsInBhZ2VUZXh0Iiwib2ZUZXh0Iiwicm93c1RleHQiLCJUYWJsZVdyYXBwZXIiLCJUYWJsZUNvbXBvbmVudCIsIm1ha2VUZW1wbGF0ZUNvbXBvbmVudCIsIlRoZWFkQ29tcG9uZW50IiwiVGJvZHlDb21wb25lbnQiLCJUckNvbXBvbmVudCIsIlRoQ29tcG9uZW50IiwidG9nZ2xlU29ydCIsImNoaWxkcmVuIiwicmVzdCIsImUiLCJUZENvbXBvbmVudCIsIlRmb290Q29tcG9uZW50IiwiRmlsdGVyQ29tcG9uZW50Iiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIkV4cGFuZGVyQ29tcG9uZW50IiwiaXNFeHBhbmRlZCIsIlBpdm90VmFsdWVDb21wb25lbnQiLCJzdWJSb3dzIiwibGVuZ3RoIiwiQWdncmVnYXRlZENvbXBvbmVudCIsInByZXZpZXdWYWx1ZXMiLCJkIiwibWFwIiwiaSIsIlBpdm90Q29tcG9uZW50IiwiUGFnaW5hdGlvbkNvbXBvbmVudCIsIlByZXZpb3VzQ29tcG9uZW50IiwiTmV4dENvbXBvbmVudCIsIkxvYWRpbmdDb21wb25lbnQiLCJOb0RhdGFDb21wb25lbnQiLCJSZXNpemVyQ29tcG9uZW50IiwiUGFkUm93Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7QUFIQTs7O0FBS0EsSUFBTUEsV0FBVyxTQUFYQSxRQUFXO0FBQUEsU0FBTyxFQUFQO0FBQUEsQ0FBakI7O2tCQUVlO0FBQ2I7QUFDQUMsUUFBTSxFQUZPO0FBR2JDLFdBQVMsS0FISTtBQUliQyxrQkFBZ0IsSUFKSDtBQUtiQyxxQkFBbUIsS0FMTjtBQU1iQyx3QkFBc0IsSUFOVDtBQU9iQyx1QkFBcUIsSUFQUjtBQVFiQyxtQkFBaUIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEdBQXBCLENBUko7QUFTYkMsbUJBQWlCLEVBVEo7QUFVYkMsZ0JBQWMsSUFWRDtBQVdiQywyQkFBeUIsSUFYWjtBQVliQyx3QkFBc0IsSUFaVDtBQWFiQyx3QkFBc0IsSUFiVDtBQWNiQyxzQkFBb0IsS0FkUDtBQWViQyxZQUFVLElBZkc7QUFnQmJDLGFBQVcsSUFoQkU7QUFpQmJDLGNBQVksS0FqQkM7QUFrQmJDLG1CQUFpQixLQWxCSjtBQW1CYkMs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U0FBdUJBLFdBQXZCO0FBQUEsUUFBdUNjLElBQXZDOztBQUFBLFdBQ2hCO0FBQUE7QUFBQTtBQUNFLG1CQUFXLDBCQUFXLFVBQVgsRUFBdUIsRUFBRSxXQUFXcEgsT0FBYixFQUF2QixFQUErQ21ELFNBQS9DO0FBRGIsU0FFTWlFLElBRk47QUFJRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGdCQUFmO0FBQ0dkO0FBREg7QUFKRixLQURnQjtBQUFBLEdBdE9MO0FBK09icUMsbUJBQWlCLGdCQUFFOUIscUJBQUYsQ0FBd0IsV0FBeEIsRUFBcUMsUUFBckMsQ0EvT0o7QUFnUGIrQixvQkFBa0IsZ0JBQUUvQixxQkFBRixDQUF3QixZQUF4QixFQUFzQyxTQUF0QyxDQWhQTDtBQWlQYmdDLG1CQUFpQjtBQUFBLFdBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFOO0FBQUE7QUFqUEosQyIsImZpbGUiOiJkZWZhdWx0UHJvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuLy9cbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24nXG5pbXBvcnQgUmVhY3RUYWJsZVdyYXBwZXIgZnJvbSAnLi93cmFwcGVyJ1xuXG5jb25zdCBlbXB0eU9iaiA9ICgpID0+ICh7fSlcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBHZW5lcmFsXG4gIGRhdGE6IFtdLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgc2hvd1BhZ2luYXRpb246IHRydWUsXG4gIHNob3dQYWdpbmF0aW9uVG9wOiBmYWxzZSxcbiAgc2hvd1BhZ2luYXRpb25Cb3R0b206IHRydWUsXG4gIHNob3dQYWdlU2l6ZU9wdGlvbnM6IHRydWUsXG4gIHBhZ2VTaXplT3B0aW9uczogWzUsIDEwLCAyMCwgMjUsIDUwLCAxMDBdLFxuICBkZWZhdWx0UGFnZVNpemU6IDIwLFxuICBzaG93UGFnZUp1bXA6IHRydWUsXG4gIGNvbGxhcHNlT25Tb3J0aW5nQ2hhbmdlOiB0cnVlLFxuICBjb2xsYXBzZU9uUGFnZUNoYW5nZTogdHJ1ZSxcbiAgY29sbGFwc2VPbkRhdGFDaGFuZ2U6IHRydWUsXG4gIGZyZWV6ZVdoZW5FeHBhbmRlZDogZmFsc2UsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZpbHRlcmFibGU6IGZhbHNlLFxuICBkZWZhdWx0U29ydERlc2M6IGZhbHNlLFxuICBkZWZhdWx0U29ydGVkOiBbXSxcbiAgZGVmYXVsdEZpbHRlcmVkOiBbXSxcbiAgZGVmYXVsdFJlc2l6ZWQ6IFtdLFxuICBkZWZhdWx0RXhwYW5kZWQ6IHt9LFxuICBkZWZhdWx0RmlsdGVyTWV0aG9kOiAoZmlsdGVyLCByb3csIGNvbHVtbikgPT4ge1xuICAgIGNvbnN0IGlkID0gZmlsdGVyLnBpdm90SWQgfHwgZmlsdGVyLmlkXG4gICAgcmV0dXJuIHJvd1tpZF0gIT09IHVuZGVmaW5lZFxuICAgICAgPyBTdHJpbmcocm93W2lkXSkuc3RhcnRzV2l0aChmaWx0ZXIudmFsdWUpXG4gICAgICA6IHRydWVcbiAgfSxcbiAgZGVmYXVsdFNvcnRNZXRob2Q6IChhLCBiKSA9PiB7XG4gICAgLy8gZm9yY2UgbnVsbCBhbmQgdW5kZWZpbmVkIHRvIHRoZSBib3R0b21cbiAgICBhID0gYSA9PT0gbnVsbCB8fCBhID09PSB1bmRlZmluZWQgPyAnJyA6IGFcbiAgICBiID0gYiA9PT0gbnVsbCB8fCBiID09PSB1bmRlZmluZWQgPyAnJyA6IGJcbiAgICAvLyBmb3JjZSBhbnkgc3RyaW5nIHZhbHVlcyB0byBsb3dlcmNhc2VcbiAgICBhID0gdHlwZW9mIGEgPT09ICdzdHJpbmcnID8gYS50b0xvd2VyQ2FzZSgpIDogYVxuICAgIGIgPSB0eXBlb2YgYiA9PT0gJ3N0cmluZycgPyBiLnRvTG93ZXJDYXNlKCkgOiBiXG4gICAgLy8gUmV0dXJuIGVpdGhlciAxIG9yIC0xIHRvIGluZGljYXRlIGEgc29ydCBwcmlvcml0eVxuICAgIGlmIChhID4gYikge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG4gICAgaWYgKGEgPCBiKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgLy8gcmV0dXJuaW5nIDAsIHVuZGVmaW5lZCBvciBhbnkgZmFsc2V5IHZhbHVlIHdpbGwgdXNlIHN1YnNlcXVlbnQgc29ydHMgb3IgdGhlIGluZGV4IGFzIGEgdGllYnJlYWtlclxuICAgIHJldHVybiAwXG4gIH0sXG5cbiAgLy8gQ29udHJvbGxlZCBTdGF0ZSBQcm9wc1xuICAvLyBwYWdlOiB1bmRlZmluZWQsXG4gIC8vIHBhZ2VTaXplOiB1bmRlZmluZWQsXG4gIC8vIHNvcnRlZDogW10sXG4gIC8vIGZpbHRlcmVkOiBbXSxcbiAgLy8gcmVzaXplZDogW10sXG4gIC8vIGV4cGFuZGVkOiB7fSxcblxuICAvLyBDb250cm9sbGVkIFN0YXRlIENhbGxiYWNrc1xuICBvblBhZ2VDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25QYWdlU2l6ZUNoYW5nZTogdW5kZWZpbmVkLFxuICBvblNvcnRlZENoYW5nZTogdW5kZWZpbmVkLFxuICBvbkZpbHRlcmVkQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9uUmVzaXplZENoYW5nZTogdW5kZWZpbmVkLFxuICBvbkV4cGFuZGVkQ2hhbmdlOiB1bmRlZmluZWQsXG5cbiAgLy8gUGl2b3RpbmdcbiAgcGl2b3RCeTogdW5kZWZpbmVkLFxuXG4gIC8vIEZpeGVkIGNvbHVtbnNcbiAgZml4ZWRDb2x1bW46IHVuZGVmaW5lZCxcblxuICAvLyBLZXkgQ29uc3RhbnRzXG4gIHBpdm90VmFsS2V5OiAnX3Bpdm90VmFsJyxcbiAgcGl2b3RJREtleTogJ19waXZvdElEJyxcbiAgc3ViUm93c0tleTogJ19zdWJSb3dzJyxcbiAgYWdncmVnYXRlZEtleTogJ19hZ2dyZWdhdGVkJyxcbiAgbmVzdGluZ0xldmVsS2V5OiAnX25lc3RpbmdMZXZlbCcsXG4gIG9yaWdpbmFsS2V5OiAnX29yaWdpbmFsJyxcbiAgaW5kZXhLZXk6ICdfaW5kZXgnLFxuICBncm91cGVkQnlQaXZvdEtleTogJ19ncm91cGVkQnlQaXZvdCcsXG5cbiAgLy8gU2VydmVyLXNpZGUgQ2FsbGJhY2tzXG4gIG9uRmV0Y2hEYXRhOiAoKSA9PiBudWxsLFxuXG4gIC8vIENsYXNzZXNcbiAgY2xhc3NOYW1lOiAnJyxcbiAgc3R5bGU6IHt9LFxuXG4gIC8vIENvbXBvbmVudCBkZWNvcmF0b3JzXG4gIGdldFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGFibGVQcm9wczogZW1wdHlPYmosXG4gIGdldENvbEdyb3VwQ29sUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEdyb3VwUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEdyb3VwVHJQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkR3JvdXBUaFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkVHJQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkVGhQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkRmlsdGVyUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEZpbHRlclRyUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEZpbHRlclRoUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUYm9keVByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VHJQcm9wczogZW1wdHlPYmosXG4gIGdldFRkUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUZm9vdFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGZvb3RUclByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGZvb3RUZFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0UGFnaW5hdGlvblByb3BzOiBlbXB0eU9iaixcbiAgZ2V0TG9hZGluZ1Byb3BzOiBlbXB0eU9iaixcbiAgZ2V0Tm9EYXRhUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRSZXNpemVyUHJvcHM6IGVtcHR5T2JqLFxuXG4gIC8vIEdsb2JhbCBDb2x1bW4gRGVmYXVsdHNcbiAgY29sdW1uOiB7XG4gICAgLy8gUmVuZGVyZXJzXG4gICAgQ2VsbDogdW5kZWZpbmVkLFxuICAgIEhlYWRlcjogdW5kZWZpbmVkLFxuICAgIEZvb3RlcjogdW5kZWZpbmVkLFxuICAgIEFnZ3JlZ2F0ZWQ6IHVuZGVmaW5lZCxcbiAgICBQaXZvdDogdW5kZWZpbmVkLFxuICAgIFBpdm90VmFsdWU6IHVuZGVmaW5lZCxcbiAgICBFeHBhbmRlcjogdW5kZWZpbmVkLFxuICAgIEZpbHRlcjogdW5kZWZpbmVkLFxuICAgIC8vIEFsbCBDb2x1bW5zXG4gICAgc29ydGFibGU6IHVuZGVmaW5lZCwgLy8gdXNlIHRhYmxlIGRlZmF1bHRcbiAgICByZXNpemFibGU6IHVuZGVmaW5lZCwgLy8gdXNlIHRhYmxlIGRlZmF1bHRcbiAgICBmaWx0ZXJhYmxlOiB1bmRlZmluZWQsIC8vIHVzZSB0YWJsZSBkZWZhdWx0XG4gICAgc2hvdzogdHJ1ZSxcbiAgICB3aWR0aDogJzEwJScsXG4gICAgbWluV2lkdGg6IHVuZGVmaW5lZCxcbiAgICAvLyBDZWxscyBvbmx5XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzdHlsZToge30sXG4gICAgZ2V0UHJvcHM6IGVtcHR5T2JqLFxuICAgIC8vIFBpdm90IG9ubHlcbiAgICBhZ2dyZWdhdGU6IHVuZGVmaW5lZCxcbiAgICAvLyBDb2xHcm91cENvbCBvbmx5XG4gICAgY29sR3JvdXBDb2xDbGFzc05hbWU6ICcnLFxuICAgIGNvbEdyb3VwQ29sU3R5bGU6IHt9LFxuICAgIGdldENvbEdyb3VwQ29sUHJvcHM6IGVtcHR5T2JqLFxuICAgIC8vIEhlYWRlcnMgb25seVxuICAgIGhlYWRlckNsYXNzTmFtZTogJycsXG4gICAgaGVhZGVyU3R5bGU6IHt9LFxuICAgIGdldEhlYWRlclByb3BzOiBlbXB0eU9iaixcbiAgICAvLyBGb290ZXJzIG9ubHlcbiAgICBmb290ZXJDbGFzc05hbWU6ICcnLFxuICAgIGZvb3RlclN0eWxlOiB7fSxcbiAgICBnZXRGb290ZXJQcm9wczogZW1wdHlPYmosXG4gICAgZmlsdGVyTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgZmlsdGVyQWxsOiBmYWxzZSxcbiAgICBzb3J0TWV0aG9kOiB1bmRlZmluZWQsXG4gIH0sXG5cbiAgLy8gR2xvYmFsIEV4cGFuZGVyIENvbHVtbiBEZWZhdWx0c1xuICBleHBhbmRlckRlZmF1bHRzOiB7XG4gICAgc29ydGFibGU6IGZhbHNlLFxuICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgZmlsdGVyYWJsZTogZmFsc2UsXG4gICAgd2lkdGg6IDM1LFxuICB9LFxuXG4gIHBpdm90RGVmYXVsdHM6IHtcbiAgICAvLyBleHRlbmQgdGhlIGRlZmF1bHRzIGZvciBwaXZvdGVkIGNvbHVtbnMgaGVyZVxuICB9LFxuXG4gIC8vIFRleHRcbiAgcHJldmlvdXNUZXh0OiAnUHJldmlvdXMnLFxuICBuZXh0VGV4dDogJ05leHQnLFxuICBsb2FkaW5nVGV4dDogJ0xvYWRpbmcuLi4nLFxuICBub0RhdGFUZXh0OiAnTm8gcm93cyBmb3VuZCcsXG4gIHBhZ2VUZXh0OiAnUGFnZScsXG4gIG9mVGV4dDogJ29mJyxcbiAgcm93c1RleHQ6ICdyb3dzJyxcblxuICAvLyBDb21wb25lbnRzXG4gIFRhYmxlV3JhcHBlcjogUmVhY3RUYWJsZVdyYXBwZXIsXG4gIFRhYmxlQ29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdGFibGUnLCAnVGFibGUnLCAndGFibGUnKSxcbiAgVGhlYWRDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC10aGVhZCcsICdUaGVhZCcsICd0aGVhZCcpLFxuICBUYm9keUNvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXRib2R5JywgJ1Rib2R5JywgJ3Rib2R5JyksXG4gIFRyQ29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdHInLCAnVHInLCAndHInKSxcbiAgVGhDb21wb25lbnQ6ICh7IHRvZ2dsZVNvcnQsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dGhcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3J0LXRoJyl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgIHRvZ2dsZVNvcnQgJiYgdG9nZ2xlU29ydChlKVxuICAgICAgICB9fVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC90aD5cbiAgICApXG4gIH0sXG4gIFRkQ29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdGQnLCAnVGQnLCAndGQnKSxcbiAgVGZvb3RDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC10Zm9vdCcsICdUZm9vdCcsICd0Zm9vdCcpLFxuICBGaWx0ZXJDb21wb25lbnQ6ICh7IGZpbHRlciwgb25DaGFuZ2UgfSkgPT5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9J3RleHQnXG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgfX1cbiAgICAgIHZhbHVlPXtmaWx0ZXIgPyBmaWx0ZXIudmFsdWUgOiAnJ31cbiAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgIC8+LFxuICBFeHBhbmRlckNvbXBvbmVudDogKHsgaXNFeHBhbmRlZCB9KSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdydC1leHBhbmRlcicsIGlzRXhwYW5kZWQgJiYgJy1vcGVuJyl9PlxuICAgICAgJmJ1bGw7XG4gICAgPC9kaXY+LFxuICBQaXZvdFZhbHVlQ29tcG9uZW50OiAoeyBzdWJSb3dzLCB2YWx1ZSB9KSA9PlxuICAgIDxzcGFuPlxuICAgICAge3ZhbHVlfSB7c3ViUm93cyAmJiBgKCR7c3ViUm93cy5sZW5ndGh9KWB9XG4gICAgPC9zcGFuPixcbiAgQWdncmVnYXRlZENvbXBvbmVudDogKHsgc3ViUm93cywgY29sdW1uIH0pID0+IHtcbiAgICBjb25zdCBwcmV2aWV3VmFsdWVzID0gc3ViUm93c1xuICAgICAgLmZpbHRlcihkID0+IHR5cGVvZiBkW2NvbHVtbi5pZF0gIT09ICd1bmRlZmluZWQnKVxuICAgICAgLm1hcCgocm93LCBpKSA9PlxuICAgICAgICA8c3BhbiBrZXk9e2l9PlxuICAgICAgICAgIHtyb3dbY29sdW1uLmlkXX1cbiAgICAgICAgICB7aSA8IHN1YlJvd3MubGVuZ3RoIC0gMSA/ICcsICcgOiAnJ31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKVxuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAge3ByZXZpZXdWYWx1ZXN9XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9LFxuICBQaXZvdENvbXBvbmVudDogdW5kZWZpbmVkLCAvLyB0aGlzIGlzIGEgY29tcHV0ZWQgZGVmYXVsdCBnZW5lcmF0ZWQgdXNpbmdcbiAgLy8gdGhlIEV4cGFuZGVyQ29tcG9uZW50IGFuZCBQaXZvdFZhbHVlQ29tcG9uZW50IGF0IHJ1bi10aW1lIGluIG1ldGhvZHMuanNcbiAgUGFnaW5hdGlvbkNvbXBvbmVudDogUGFnaW5hdGlvbixcbiAgUHJldmlvdXNDb21wb25lbnQ6IHVuZGVmaW5lZCxcbiAgTmV4dENvbXBvbmVudDogdW5kZWZpbmVkLFxuICBMb2FkaW5nQ29tcG9uZW50OiAoeyBjbGFzc05hbWUsIGxvYWRpbmcsIGxvYWRpbmdUZXh0LCAuLi5yZXN0IH0pID0+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctbG9hZGluZycsIHsgJy1hY3RpdmUnOiBsb2FkaW5nIH0sIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nLWxvYWRpbmctaW5uZXInPlxuICAgICAgICB7bG9hZGluZ1RleHR9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4sXG4gIE5vRGF0YUNvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LW5vRGF0YScsICdOb0RhdGEnKSxcbiAgUmVzaXplckNvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXJlc2l6ZXInLCAnUmVzaXplcicpLFxuICBQYWRSb3dDb21wb25lbnQ6ICgpID0+IDxzcGFuPiZuYnNwOzwvc3Bhbj4sXG59XG4iXX0=