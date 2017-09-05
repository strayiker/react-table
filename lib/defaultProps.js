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
  showSortOrder: true,
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

  footerPlacement: 'bottom',

  // Controlled State Callbacks
  onPageChange: undefined,
  onPageSizeChange: undefined,
  onSortedChange: undefined,
  onFilteredChange: undefined,
  onResizedChange: undefined,
  onExpandedChange: undefined,

  // Pivoting
  pivotBy: undefined,

  // Fixed columns count (starts with first column)
  fixedColumnsCount: 0,

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZhdWx0UHJvcHMuanMiXSwibmFtZXMiOlsiZW1wdHlPYmoiLCJkYXRhIiwibG9hZGluZyIsInNob3dQYWdpbmF0aW9uIiwic2hvd1BhZ2luYXRpb25Ub3AiLCJzaG93UGFnaW5hdGlvbkJvdHRvbSIsInNob3dQYWdlU2l6ZU9wdGlvbnMiLCJzaG93U29ydE9yZGVyIiwicGFnZVNpemVPcHRpb25zIiwiZGVmYXVsdFBhZ2VTaXplIiwic2hvd1BhZ2VKdW1wIiwiY29sbGFwc2VPblNvcnRpbmdDaGFuZ2UiLCJjb2xsYXBzZU9uUGFnZUNoYW5nZSIsImNvbGxhcHNlT25EYXRhQ2hhbmdlIiwiZnJlZXplV2hlbkV4cGFuZGVkIiwic29ydGFibGUiLCJyZXNpemFibGUiLCJmaWx0ZXJhYmxlIiwiZGVmYXVsdFNvcnREZXNjIiwiZGVmYXVsdFNvcnRlZCIsImRlZmF1bHRGaWx0ZXJlZCIsImRlZmF1bHRSZXNpemVkIiwiZGVmYXVsdEV4cGFuZGVkIiwiZGVmYXVsdEZpbHRlck1ldGhvZCIsImZpbHRlciIsInJvdyIsImNvbHVtbiIsImlkIiwicGl2b3RJZCIsInVuZGVmaW5lZCIsIlN0cmluZyIsInN0YXJ0c1dpdGgiLCJ2YWx1ZSIsImRlZmF1bHRTb3J0TWV0aG9kIiwiYSIsImIiLCJ0b0xvd2VyQ2FzZSIsImZvb3RlclBsYWNlbWVudCIsIm9uUGFnZUNoYW5nZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJvblNvcnRlZENoYW5nZSIsIm9uRmlsdGVyZWRDaGFuZ2UiLCJvblJlc2l6ZWRDaGFuZ2UiLCJvbkV4cGFuZGVkQ2hhbmdlIiwicGl2b3RCeSIsImZpeGVkQ29sdW1uc0NvdW50IiwicGl2b3RWYWxLZXkiLCJwaXZvdElES2V5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJuZXN0aW5nTGV2ZWxLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJvbkZldGNoRGF0YSIsImNsYXNzTmFtZSIsInN0eWxlIiwiZ2V0UHJvcHMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0Q29sR3JvdXBDb2xQcm9wcyIsImdldFRoZWFkR3JvdXBQcm9wcyIsImdldFRoZWFkR3JvdXBUclByb3BzIiwiZ2V0VGhlYWRHcm91cFRoUHJvcHMiLCJnZXRUaGVhZFByb3BzIiwiZ2V0VGhlYWRUclByb3BzIiwiZ2V0VGhlYWRUaFByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJQcm9wcyIsImdldFRoZWFkRmlsdGVyVHJQcm9wcyIsImdldFRoZWFkRmlsdGVyVGhQcm9wcyIsImdldFRib2R5UHJvcHMiLCJnZXRUclByb3BzIiwiZ2V0VGRQcm9wcyIsImdldFRmb290UHJvcHMiLCJnZXRUZm9vdFRyUHJvcHMiLCJnZXRUZm9vdFRkUHJvcHMiLCJnZXRQYWdpbmF0aW9uUHJvcHMiLCJnZXRMb2FkaW5nUHJvcHMiLCJnZXROb0RhdGFQcm9wcyIsImdldFJlc2l6ZXJQcm9wcyIsIkNlbGwiLCJIZWFkZXIiLCJGb290ZXIiLCJBZ2dyZWdhdGVkIiwiUGl2b3QiLCJQaXZvdFZhbHVlIiwiRXhwYW5kZXIiLCJGaWx0ZXIiLCJzaG93Iiwid2lkdGgiLCJtaW5XaWR0aCIsImFnZ3JlZ2F0ZSIsImNvbEdyb3VwQ29sQ2xhc3NOYW1lIiwiY29sR3JvdXBDb2xTdHlsZSIsImhlYWRlckNsYXNzTmFtZSIsImhlYWRlclN0eWxlIiwiZ2V0SGVhZGVyUHJvcHMiLCJmb290ZXJDbGFzc05hbWUiLCJmb290ZXJTdHlsZSIsImdldEZvb3RlclByb3BzIiwiZmlsdGVyTWV0aG9kIiwiZmlsdGVyQWxsIiwic29ydE1ldGhvZCIsImV4cGFuZGVyRGVmYXVsdHMiLCJwaXZvdERlZmF1bHRzIiwicHJldmlvdXNUZXh0IiwibmV4dFRleHQiLCJsb2FkaW5nVGV4dCIsIm5vRGF0YVRleHQiLCJwYWdlVGV4dCIsIm9mVGV4dCIsInJvd3NUZXh0IiwiVGFibGVXcmFwcGVyIiwiVGFibGVDb21wb25lbnQiLCJtYWtlVGVtcGxhdGVDb21wb25lbnQiLCJUaGVhZENvbXBvbmVudCIsIlRib2R5Q29tcG9uZW50IiwiVHJDb21wb25lbnQiLCJUaENvbXBvbmVudCIsInRvZ2dsZVNvcnQiLCJjaGlsZHJlbiIsInJlc3QiLCJlIiwiVGRDb21wb25lbnQiLCJUZm9vdENvbXBvbmVudCIsIkZpbHRlckNvbXBvbmVudCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJFeHBhbmRlckNvbXBvbmVudCIsImlzRXhwYW5kZWQiLCJQaXZvdFZhbHVlQ29tcG9uZW50Iiwic3ViUm93cyIsImxlbmd0aCIsIkFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJwcmV2aWV3VmFsdWVzIiwiZCIsIm1hcCIsImkiLCJQaXZvdENvbXBvbmVudCIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJQcmV2aW91c0NvbXBvbmVudCIsIk5leHRDb21wb25lbnQiLCJMb2FkaW5nQ29tcG9uZW50IiwiTm9EYXRhQ29tcG9uZW50IiwiUmVzaXplckNvbXBvbmVudCIsIlBhZFJvd0NvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7O0FBSEE7OztBQUtBLElBQU1BLFdBQVcsU0FBWEEsUUFBVztBQUFBLFNBQU8sRUFBUDtBQUFBLENBQWpCOztrQkFFZTtBQUNiO0FBQ0FDLFFBQU0sRUFGTztBQUdiQyxXQUFTLEtBSEk7QUFJYkMsa0JBQWdCLElBSkg7QUFLYkMscUJBQW1CLEtBTE47QUFNYkMsd0JBQXNCLElBTlQ7QUFPYkMsdUJBQXFCLElBUFI7QUFRYkMsaUJBQWUsSUFSRjtBQVNiQyxtQkFBaUIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEdBQXBCLENBVEo7QUFVYkMsbUJBQWlCLEVBVko7QUFXYkMsZ0JBQWMsSUFYRDtBQVliQywyQkFBeUIsSUFaWjtBQWFiQyx3QkFBc0IsSUFiVDtBQWNiQyx3QkFBc0IsSUFkVDtBQWViQyxzQkFBb0IsS0FmUDtBQWdCYkMsWUFBVSxJQWhCRztBQWlC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QkFBa0I7QUFBQSxRQUFHdkYsU0FBSCxTQUFHQSxTQUFIO0FBQUEsUUFBY3JELE9BQWQsU0FBY0EsT0FBZDtBQUFBLFFBQXVCd0csV0FBdkIsU0FBdUJBLFdBQXZCO0FBQUEsUUFBdUNjLElBQXZDOztBQUFBLFdBQ2hCO0FBQUE7QUFBQTtBQUNFLG1CQUFXLDBCQUFXLFVBQVgsRUFBdUIsRUFBRSxXQUFXdEgsT0FBYixFQUF2QixFQUErQ3FELFNBQS9DO0FBRGIsU0FFTWlFLElBRk47QUFJRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGdCQUFmO0FBQ0dkO0FBREg7QUFKRixLQURnQjtBQUFBLEdBek9MO0FBa1BicUMsbUJBQWlCLGdCQUFFOUIscUJBQUYsQ0FBd0IsV0FBeEIsRUFBcUMsUUFBckMsQ0FsUEo7QUFtUGIrQixvQkFBa0IsZ0JBQUUvQixxQkFBRixDQUF3QixZQUF4QixFQUFzQyxTQUF0QyxDQW5QTDtBQW9QYmdDLG1CQUFpQjtBQUFBLFdBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFOO0FBQUE7QUFwUEosQyIsImZpbGUiOiJkZWZhdWx0UHJvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuLy9cbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24nXG5pbXBvcnQgUmVhY3RUYWJsZVdyYXBwZXIgZnJvbSAnLi93cmFwcGVyJ1xuXG5jb25zdCBlbXB0eU9iaiA9ICgpID0+ICh7fSlcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBHZW5lcmFsXG4gIGRhdGE6IFtdLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgc2hvd1BhZ2luYXRpb246IHRydWUsXG4gIHNob3dQYWdpbmF0aW9uVG9wOiBmYWxzZSxcbiAgc2hvd1BhZ2luYXRpb25Cb3R0b206IHRydWUsXG4gIHNob3dQYWdlU2l6ZU9wdGlvbnM6IHRydWUsXG4gIHNob3dTb3J0T3JkZXI6IHRydWUsXG4gIHBhZ2VTaXplT3B0aW9uczogWzUsIDEwLCAyMCwgMjUsIDUwLCAxMDBdLFxuICBkZWZhdWx0UGFnZVNpemU6IDIwLFxuICBzaG93UGFnZUp1bXA6IHRydWUsXG4gIGNvbGxhcHNlT25Tb3J0aW5nQ2hhbmdlOiB0cnVlLFxuICBjb2xsYXBzZU9uUGFnZUNoYW5nZTogdHJ1ZSxcbiAgY29sbGFwc2VPbkRhdGFDaGFuZ2U6IHRydWUsXG4gIGZyZWV6ZVdoZW5FeHBhbmRlZDogZmFsc2UsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZpbHRlcmFibGU6IGZhbHNlLFxuICBkZWZhdWx0U29ydERlc2M6IGZhbHNlLFxuICBkZWZhdWx0U29ydGVkOiBbXSxcbiAgZGVmYXVsdEZpbHRlcmVkOiBbXSxcbiAgZGVmYXVsdFJlc2l6ZWQ6IFtdLFxuICBkZWZhdWx0RXhwYW5kZWQ6IHt9LFxuICBkZWZhdWx0RmlsdGVyTWV0aG9kOiAoZmlsdGVyLCByb3csIGNvbHVtbikgPT4ge1xuICAgIGNvbnN0IGlkID0gZmlsdGVyLnBpdm90SWQgfHwgZmlsdGVyLmlkXG4gICAgcmV0dXJuIHJvd1tpZF0gIT09IHVuZGVmaW5lZFxuICAgICAgPyBTdHJpbmcocm93W2lkXSkuc3RhcnRzV2l0aChmaWx0ZXIudmFsdWUpXG4gICAgICA6IHRydWVcbiAgfSxcbiAgZGVmYXVsdFNvcnRNZXRob2Q6IChhLCBiKSA9PiB7XG4gICAgLy8gZm9yY2UgbnVsbCBhbmQgdW5kZWZpbmVkIHRvIHRoZSBib3R0b21cbiAgICBhID0gYSA9PT0gbnVsbCB8fCBhID09PSB1bmRlZmluZWQgPyAnJyA6IGFcbiAgICBiID0gYiA9PT0gbnVsbCB8fCBiID09PSB1bmRlZmluZWQgPyAnJyA6IGJcbiAgICAvLyBmb3JjZSBhbnkgc3RyaW5nIHZhbHVlcyB0byBsb3dlcmNhc2VcbiAgICBhID0gdHlwZW9mIGEgPT09ICdzdHJpbmcnID8gYS50b0xvd2VyQ2FzZSgpIDogYVxuICAgIGIgPSB0eXBlb2YgYiA9PT0gJ3N0cmluZycgPyBiLnRvTG93ZXJDYXNlKCkgOiBiXG4gICAgLy8gUmV0dXJuIGVpdGhlciAxIG9yIC0xIHRvIGluZGljYXRlIGEgc29ydCBwcmlvcml0eVxuICAgIGlmIChhID4gYikge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG4gICAgaWYgKGEgPCBiKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgLy8gcmV0dXJuaW5nIDAsIHVuZGVmaW5lZCBvciBhbnkgZmFsc2V5IHZhbHVlIHdpbGwgdXNlIHN1YnNlcXVlbnQgc29ydHMgb3IgdGhlIGluZGV4IGFzIGEgdGllYnJlYWtlclxuICAgIHJldHVybiAwXG4gIH0sXG5cbiAgLy8gQ29udHJvbGxlZCBTdGF0ZSBQcm9wc1xuICAvLyBwYWdlOiB1bmRlZmluZWQsXG4gIC8vIHBhZ2VTaXplOiB1bmRlZmluZWQsXG4gIC8vIHNvcnRlZDogW10sXG4gIC8vIGZpbHRlcmVkOiBbXSxcbiAgLy8gcmVzaXplZDogW10sXG4gIC8vIGV4cGFuZGVkOiB7fSxcblxuICBmb290ZXJQbGFjZW1lbnQ6ICdib3R0b20nLFxuXG4gIC8vIENvbnRyb2xsZWQgU3RhdGUgQ2FsbGJhY2tzXG4gIG9uUGFnZUNoYW5nZTogdW5kZWZpbmVkLFxuICBvblBhZ2VTaXplQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9uU29ydGVkQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9uRmlsdGVyZWRDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25SZXNpemVkQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9uRXhwYW5kZWRDaGFuZ2U6IHVuZGVmaW5lZCxcblxuICAvLyBQaXZvdGluZ1xuICBwaXZvdEJ5OiB1bmRlZmluZWQsXG5cbiAgLy8gRml4ZWQgY29sdW1ucyBjb3VudCAoc3RhcnRzIHdpdGggZmlyc3QgY29sdW1uKVxuICBmaXhlZENvbHVtbnNDb3VudDogMCxcblxuICAvLyBLZXkgQ29uc3RhbnRzXG4gIHBpdm90VmFsS2V5OiAnX3Bpdm90VmFsJyxcbiAgcGl2b3RJREtleTogJ19waXZvdElEJyxcbiAgc3ViUm93c0tleTogJ19zdWJSb3dzJyxcbiAgYWdncmVnYXRlZEtleTogJ19hZ2dyZWdhdGVkJyxcbiAgbmVzdGluZ0xldmVsS2V5OiAnX25lc3RpbmdMZXZlbCcsXG4gIG9yaWdpbmFsS2V5OiAnX29yaWdpbmFsJyxcbiAgaW5kZXhLZXk6ICdfaW5kZXgnLFxuICBncm91cGVkQnlQaXZvdEtleTogJ19ncm91cGVkQnlQaXZvdCcsXG5cbiAgLy8gU2VydmVyLXNpZGUgQ2FsbGJhY2tzXG4gIG9uRmV0Y2hEYXRhOiAoKSA9PiBudWxsLFxuXG4gIC8vIENsYXNzZXNcbiAgY2xhc3NOYW1lOiAnJyxcbiAgc3R5bGU6IHt9LFxuXG4gIC8vIENvbXBvbmVudCBkZWNvcmF0b3JzXG4gIGdldFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGFibGVQcm9wczogZW1wdHlPYmosXG4gIGdldENvbEdyb3VwQ29sUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEdyb3VwUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEdyb3VwVHJQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkR3JvdXBUaFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkVHJQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkVGhQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkRmlsdGVyUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEZpbHRlclRyUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEZpbHRlclRoUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUYm9keVByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VHJQcm9wczogZW1wdHlPYmosXG4gIGdldFRkUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUZm9vdFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGZvb3RUclByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGZvb3RUZFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0UGFnaW5hdGlvblByb3BzOiBlbXB0eU9iaixcbiAgZ2V0TG9hZGluZ1Byb3BzOiBlbXB0eU9iaixcbiAgZ2V0Tm9EYXRhUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRSZXNpemVyUHJvcHM6IGVtcHR5T2JqLFxuXG4gIC8vIEdsb2JhbCBDb2x1bW4gRGVmYXVsdHNcbiAgY29sdW1uOiB7XG4gICAgLy8gUmVuZGVyZXJzXG4gICAgQ2VsbDogdW5kZWZpbmVkLFxuICAgIEhlYWRlcjogdW5kZWZpbmVkLFxuICAgIEZvb3RlcjogdW5kZWZpbmVkLFxuICAgIEFnZ3JlZ2F0ZWQ6IHVuZGVmaW5lZCxcbiAgICBQaXZvdDogdW5kZWZpbmVkLFxuICAgIFBpdm90VmFsdWU6IHVuZGVmaW5lZCxcbiAgICBFeHBhbmRlcjogdW5kZWZpbmVkLFxuICAgIEZpbHRlcjogdW5kZWZpbmVkLFxuICAgIC8vIEFsbCBDb2x1bW5zXG4gICAgc29ydGFibGU6IHVuZGVmaW5lZCwgLy8gdXNlIHRhYmxlIGRlZmF1bHRcbiAgICByZXNpemFibGU6IHVuZGVmaW5lZCwgLy8gdXNlIHRhYmxlIGRlZmF1bHRcbiAgICBmaWx0ZXJhYmxlOiB1bmRlZmluZWQsIC8vIHVzZSB0YWJsZSBkZWZhdWx0XG4gICAgc2hvdzogdHJ1ZSxcbiAgICB3aWR0aDogJzEwJScsXG4gICAgbWluV2lkdGg6IHVuZGVmaW5lZCxcbiAgICAvLyBDZWxscyBvbmx5XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzdHlsZToge30sXG4gICAgZ2V0UHJvcHM6IGVtcHR5T2JqLFxuICAgIC8vIFBpdm90IG9ubHlcbiAgICBhZ2dyZWdhdGU6IHVuZGVmaW5lZCxcbiAgICAvLyBDb2xHcm91cENvbCBvbmx5XG4gICAgY29sR3JvdXBDb2xDbGFzc05hbWU6ICcnLFxuICAgIGNvbEdyb3VwQ29sU3R5bGU6IHt9LFxuICAgIGdldENvbEdyb3VwQ29sUHJvcHM6IGVtcHR5T2JqLFxuICAgIC8vIEhlYWRlcnMgb25seVxuICAgIGhlYWRlckNsYXNzTmFtZTogJycsXG4gICAgaGVhZGVyU3R5bGU6IHt9LFxuICAgIGdldEhlYWRlclByb3BzOiBlbXB0eU9iaixcbiAgICAvLyBGb290ZXJzIG9ubHlcbiAgICBmb290ZXJDbGFzc05hbWU6ICcnLFxuICAgIGZvb3RlclN0eWxlOiB7fSxcbiAgICBnZXRGb290ZXJQcm9wczogZW1wdHlPYmosXG4gICAgZmlsdGVyTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgZmlsdGVyQWxsOiBmYWxzZSxcbiAgICBzb3J0TWV0aG9kOiB1bmRlZmluZWQsXG4gIH0sXG5cbiAgLy8gR2xvYmFsIEV4cGFuZGVyIENvbHVtbiBEZWZhdWx0c1xuICBleHBhbmRlckRlZmF1bHRzOiB7XG4gICAgc29ydGFibGU6IGZhbHNlLFxuICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgZmlsdGVyYWJsZTogZmFsc2UsXG4gICAgd2lkdGg6IDM1LFxuICB9LFxuXG4gIHBpdm90RGVmYXVsdHM6IHtcbiAgICAvLyBleHRlbmQgdGhlIGRlZmF1bHRzIGZvciBwaXZvdGVkIGNvbHVtbnMgaGVyZVxuICB9LFxuXG4gIC8vIFRleHRcbiAgcHJldmlvdXNUZXh0OiAnUHJldmlvdXMnLFxuICBuZXh0VGV4dDogJ05leHQnLFxuICBsb2FkaW5nVGV4dDogJ0xvYWRpbmcuLi4nLFxuICBub0RhdGFUZXh0OiAnTm8gcm93cyBmb3VuZCcsXG4gIHBhZ2VUZXh0OiAnUGFnZScsXG4gIG9mVGV4dDogJ29mJyxcbiAgcm93c1RleHQ6ICdyb3dzJyxcblxuICAvLyBDb21wb25lbnRzXG4gIFRhYmxlV3JhcHBlcjogUmVhY3RUYWJsZVdyYXBwZXIsXG4gIFRhYmxlQ29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdGFibGUnLCAnVGFibGUnLCAndGFibGUnKSxcbiAgVGhlYWRDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC10aGVhZCcsICdUaGVhZCcsICd0aGVhZCcpLFxuICBUYm9keUNvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXRib2R5JywgJ1Rib2R5JywgJ3Rib2R5JyksXG4gIFRyQ29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdHInLCAnVHInLCAndHInKSxcbiAgVGhDb21wb25lbnQ6ICh7IHRvZ2dsZVNvcnQsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dGhcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3J0LXRoJyl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgIHRvZ2dsZVNvcnQgJiYgdG9nZ2xlU29ydChlKVxuICAgICAgICB9fVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC90aD5cbiAgICApXG4gIH0sXG4gIFRkQ29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdGQnLCAnVGQnLCAndGQnKSxcbiAgVGZvb3RDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC10Zm9vdCcsICdUZm9vdCcsICd0Zm9vdCcpLFxuICBGaWx0ZXJDb21wb25lbnQ6ICh7IGZpbHRlciwgb25DaGFuZ2UgfSkgPT5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9J3RleHQnXG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgfX1cbiAgICAgIHZhbHVlPXtmaWx0ZXIgPyBmaWx0ZXIudmFsdWUgOiAnJ31cbiAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgIC8+LFxuICBFeHBhbmRlckNvbXBvbmVudDogKHsgaXNFeHBhbmRlZCB9KSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdydC1leHBhbmRlcicsIGlzRXhwYW5kZWQgJiYgJy1vcGVuJyl9PlxuICAgICAgJmJ1bGw7XG4gICAgPC9kaXY+LFxuICBQaXZvdFZhbHVlQ29tcG9uZW50OiAoeyBzdWJSb3dzLCB2YWx1ZSB9KSA9PlxuICAgIDxzcGFuPlxuICAgICAge3ZhbHVlfSB7c3ViUm93cyAmJiBgKCR7c3ViUm93cy5sZW5ndGh9KWB9XG4gICAgPC9zcGFuPixcbiAgQWdncmVnYXRlZENvbXBvbmVudDogKHsgc3ViUm93cywgY29sdW1uIH0pID0+IHtcbiAgICBjb25zdCBwcmV2aWV3VmFsdWVzID0gc3ViUm93c1xuICAgICAgLmZpbHRlcihkID0+IHR5cGVvZiBkW2NvbHVtbi5pZF0gIT09ICd1bmRlZmluZWQnKVxuICAgICAgLm1hcCgocm93LCBpKSA9PlxuICAgICAgICA8c3BhbiBrZXk9e2l9PlxuICAgICAgICAgIHtyb3dbY29sdW1uLmlkXX1cbiAgICAgICAgICB7aSA8IHN1YlJvd3MubGVuZ3RoIC0gMSA/ICcsICcgOiAnJ31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKVxuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAge3ByZXZpZXdWYWx1ZXN9XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9LFxuICBQaXZvdENvbXBvbmVudDogdW5kZWZpbmVkLCAvLyB0aGlzIGlzIGEgY29tcHV0ZWQgZGVmYXVsdCBnZW5lcmF0ZWQgdXNpbmdcbiAgLy8gdGhlIEV4cGFuZGVyQ29tcG9uZW50IGFuZCBQaXZvdFZhbHVlQ29tcG9uZW50IGF0IHJ1bi10aW1lIGluIG1ldGhvZHMuanNcbiAgUGFnaW5hdGlvbkNvbXBvbmVudDogUGFnaW5hdGlvbixcbiAgUHJldmlvdXNDb21wb25lbnQ6IHVuZGVmaW5lZCxcbiAgTmV4dENvbXBvbmVudDogdW5kZWZpbmVkLFxuICBMb2FkaW5nQ29tcG9uZW50OiAoeyBjbGFzc05hbWUsIGxvYWRpbmcsIGxvYWRpbmdUZXh0LCAuLi5yZXN0IH0pID0+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctbG9hZGluZycsIHsgJy1hY3RpdmUnOiBsb2FkaW5nIH0sIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nLWxvYWRpbmctaW5uZXInPlxuICAgICAgICB7bG9hZGluZ1RleHR9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4sXG4gIE5vRGF0YUNvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LW5vRGF0YScsICdOb0RhdGEnKSxcbiAgUmVzaXplckNvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXJlc2l6ZXInLCAnUmVzaXplcicpLFxuICBQYWRSb3dDb21wb25lbnQ6ICgpID0+IDxzcGFuPiZuYnNwOzwvc3Bhbj4sXG59XG4iXX0=