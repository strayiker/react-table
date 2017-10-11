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

var _sort = require('./sort');

var _sort2 = _interopRequireDefault(_sort);

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
    width: undefined,
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
  SortOrderComponent: _sort2.default,
  PadRowComponent: function PadRowComponent() {
    return _react2.default.createElement(
      'span',
      null,
      '\xA0'
    );
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZhdWx0UHJvcHMuanMiXSwibmFtZXMiOlsiZW1wdHlPYmoiLCJkYXRhIiwibG9hZGluZyIsInNob3dQYWdpbmF0aW9uIiwic2hvd1BhZ2luYXRpb25Ub3AiLCJzaG93UGFnaW5hdGlvbkJvdHRvbSIsInNob3dQYWdlU2l6ZU9wdGlvbnMiLCJzaG93U29ydE9yZGVyIiwicGFnZVNpemVPcHRpb25zIiwiZGVmYXVsdFBhZ2VTaXplIiwic2hvd1BhZ2VKdW1wIiwiY29sbGFwc2VPblNvcnRpbmdDaGFuZ2UiLCJjb2xsYXBzZU9uUGFnZUNoYW5nZSIsImNvbGxhcHNlT25EYXRhQ2hhbmdlIiwiZnJlZXplV2hlbkV4cGFuZGVkIiwic29ydGFibGUiLCJyZXNpemFibGUiLCJmaWx0ZXJhYmxlIiwiZGVmYXVsdFNvcnREZXNjIiwiZGVmYXVsdFNvcnRlZCIsImRlZmF1bHRGaWx0ZXJlZCIsImRlZmF1bHRSZXNpemVkIiwiZGVmYXVsdEV4cGFuZGVkIiwiZGVmYXVsdEZpbHRlck1ldGhvZCIsImZpbHRlciIsInJvdyIsImNvbHVtbiIsImlkIiwicGl2b3RJZCIsInVuZGVmaW5lZCIsIlN0cmluZyIsInN0YXJ0c1dpdGgiLCJ2YWx1ZSIsImRlZmF1bHRTb3J0TWV0aG9kIiwiYSIsImIiLCJ0b0xvd2VyQ2FzZSIsImZvb3RlclBsYWNlbWVudCIsIm9uUGFnZUNoYW5nZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJvblNvcnRlZENoYW5nZSIsIm9uRmlsdGVyZWRDaGFuZ2UiLCJvblJlc2l6ZWRDaGFuZ2UiLCJvbkV4cGFuZGVkQ2hhbmdlIiwicGl2b3RCeSIsImZpeGVkQ29sdW1uc0NvdW50IiwicGl2b3RWYWxLZXkiLCJwaXZvdElES2V5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJuZXN0aW5nTGV2ZWxLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJvbkZldGNoRGF0YSIsImNsYXNzTmFtZSIsInN0eWxlIiwiZ2V0UHJvcHMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0Q29sR3JvdXBDb2xQcm9wcyIsImdldFRoZWFkR3JvdXBQcm9wcyIsImdldFRoZWFkR3JvdXBUclByb3BzIiwiZ2V0VGhlYWRHcm91cFRoUHJvcHMiLCJnZXRUaGVhZFByb3BzIiwiZ2V0VGhlYWRUclByb3BzIiwiZ2V0VGhlYWRUaFByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJQcm9wcyIsImdldFRoZWFkRmlsdGVyVHJQcm9wcyIsImdldFRoZWFkRmlsdGVyVGhQcm9wcyIsImdldFRib2R5UHJvcHMiLCJnZXRUclByb3BzIiwiZ2V0VGRQcm9wcyIsImdldFRmb290UHJvcHMiLCJnZXRUZm9vdFRyUHJvcHMiLCJnZXRUZm9vdFRkUHJvcHMiLCJnZXRQYWdpbmF0aW9uUHJvcHMiLCJnZXRMb2FkaW5nUHJvcHMiLCJnZXROb0RhdGFQcm9wcyIsImdldFJlc2l6ZXJQcm9wcyIsIkNlbGwiLCJIZWFkZXIiLCJGb290ZXIiLCJBZ2dyZWdhdGVkIiwiUGl2b3QiLCJQaXZvdFZhbHVlIiwiRXhwYW5kZXIiLCJGaWx0ZXIiLCJzaG93Iiwid2lkdGgiLCJtaW5XaWR0aCIsImFnZ3JlZ2F0ZSIsImNvbEdyb3VwQ29sQ2xhc3NOYW1lIiwiY29sR3JvdXBDb2xTdHlsZSIsImhlYWRlckNsYXNzTmFtZSIsImhlYWRlclN0eWxlIiwiZ2V0SGVhZGVyUHJvcHMiLCJmb290ZXJDbGFzc05hbWUiLCJmb290ZXJTdHlsZSIsImdldEZvb3RlclByb3BzIiwiZmlsdGVyTWV0aG9kIiwiZmlsdGVyQWxsIiwic29ydE1ldGhvZCIsImV4cGFuZGVyRGVmYXVsdHMiLCJwaXZvdERlZmF1bHRzIiwicHJldmlvdXNUZXh0IiwibmV4dFRleHQiLCJsb2FkaW5nVGV4dCIsIm5vRGF0YVRleHQiLCJwYWdlVGV4dCIsIm9mVGV4dCIsInJvd3NUZXh0IiwiVGFibGVXcmFwcGVyIiwiVGFibGVDb21wb25lbnQiLCJtYWtlVGVtcGxhdGVDb21wb25lbnQiLCJUaGVhZENvbXBvbmVudCIsIlRib2R5Q29tcG9uZW50IiwiVHJDb21wb25lbnQiLCJUaENvbXBvbmVudCIsInRvZ2dsZVNvcnQiLCJjaGlsZHJlbiIsInJlc3QiLCJlIiwiVGRDb21wb25lbnQiLCJUZm9vdENvbXBvbmVudCIsIkZpbHRlckNvbXBvbmVudCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJFeHBhbmRlckNvbXBvbmVudCIsImlzRXhwYW5kZWQiLCJQaXZvdFZhbHVlQ29tcG9uZW50Iiwic3ViUm93cyIsImxlbmd0aCIsIkFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJwcmV2aWV3VmFsdWVzIiwiZCIsIm1hcCIsImkiLCJQaXZvdENvbXBvbmVudCIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJQcmV2aW91c0NvbXBvbmVudCIsIk5leHRDb21wb25lbnQiLCJMb2FkaW5nQ29tcG9uZW50IiwiTm9EYXRhQ29tcG9uZW50IiwiUmVzaXplckNvbXBvbmVudCIsIlNvcnRPcmRlckNvbXBvbmVudCIsIlBhZFJvd0NvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7QUFKQTs7O0FBTUEsSUFBTUEsV0FBVyxTQUFYQSxRQUFXO0FBQUEsU0FBTyxFQUFQO0FBQUEsQ0FBakI7O2tCQUVlO0FBQ2I7QUFDQUMsUUFBTSxFQUZPO0FBR2JDLFdBQVMsS0FISTtBQUliQyxrQkFBZ0IsSUFKSDtBQUtiQyxxQkFBbUIsS0FMTjtBQU1iQyx3QkFBc0IsSUFOVDtBQU9iQyx1QkFBcUIsSUFQUjtBQVFiQyxpQkFBZSxJQVJGO0FBU2JDLG1CQUFpQixDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsR0FBcEIsQ0FUSjtBQVViQyxtQkFBaUIsRUFWSjtBQVdiQyxnQkFBYyxJQVhEO0FBWWJDLDJCQUF5QixJQVpaO0FBYWJDLHdCQUFzQixJQWJUO0FBY2JDLHdCQUFzQixJQWRUO0FBZWJDLHNCQUFv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O0FBd09iZ0gsaUJBQWVoSCxTQXhPRjtBQXlPYmlILG9CQUFrQjtBQUFBLFFBQUd2RixTQUFILFNBQUdBLFNBQUg7QUFBQSxRQUFjckQsT0FBZCxTQUFjQSxPQUFkO0FBQUEsUUFBdUJ3RyxXQUF2QixTQUF1QkEsV0FBdkI7QUFBQSxRQUF1Q2MsSUFBdkM7O0FBQUEsV0FDaEI7QUFBQTtBQUFBO0FBQ0UsbUJBQVcsMEJBQVcsVUFBWCxFQUF1QixFQUFFLFdBQVd0SCxPQUFiLEVBQXZCLEVBQStDcUQsU0FBL0M7QUFEYixTQUVNaUUsSUFGTjtBQUlFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZ0JBQWY7QUFDR2Q7QUFESDtBQUpGLEtBRGdCO0FBQUEsR0F6T0w7QUFrUGJxQyxtQkFBaUIsZ0JBQUU5QixxQkFBRixDQUF3QixXQUF4QixFQUFxQyxRQUFyQyxDQWxQSjtBQW1QYitCLG9CQUFrQixnQkFBRS9CLHFCQUFGLENBQXdCLFlBQXhCLEVBQXNDLFNBQXRDLENBblBMO0FBb1BiZ0Msb0NBcFBhO0FBcVBiQyxtQkFBaUI7QUFBQSxXQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTjtBQUFBO0FBclBKLEMiLCJmaWxlIjoiZGVmYXVsdFByb3BzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbi8vXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9wYWdpbmF0aW9uJ1xuaW1wb3J0IFJlYWN0VGFibGVXcmFwcGVyIGZyb20gJy4vd3JhcHBlcidcbmltcG9ydCBTb3J0T3JkZXIgZnJvbSAnLi9zb3J0J1xuXG5jb25zdCBlbXB0eU9iaiA9ICgpID0+ICh7fSlcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBHZW5lcmFsXG4gIGRhdGE6IFtdLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgc2hvd1BhZ2luYXRpb246IHRydWUsXG4gIHNob3dQYWdpbmF0aW9uVG9wOiBmYWxzZSxcbiAgc2hvd1BhZ2luYXRpb25Cb3R0b206IHRydWUsXG4gIHNob3dQYWdlU2l6ZU9wdGlvbnM6IHRydWUsXG4gIHNob3dTb3J0T3JkZXI6IHRydWUsXG4gIHBhZ2VTaXplT3B0aW9uczogWzUsIDEwLCAyMCwgMjUsIDUwLCAxMDBdLFxuICBkZWZhdWx0UGFnZVNpemU6IDIwLFxuICBzaG93UGFnZUp1bXA6IHRydWUsXG4gIGNvbGxhcHNlT25Tb3J0aW5nQ2hhbmdlOiB0cnVlLFxuICBjb2xsYXBzZU9uUGFnZUNoYW5nZTogdHJ1ZSxcbiAgY29sbGFwc2VPbkRhdGFDaGFuZ2U6IHRydWUsXG4gIGZyZWV6ZVdoZW5FeHBhbmRlZDogZmFsc2UsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZpbHRlcmFibGU6IGZhbHNlLFxuICBkZWZhdWx0U29ydERlc2M6IGZhbHNlLFxuICBkZWZhdWx0U29ydGVkOiBbXSxcbiAgZGVmYXVsdEZpbHRlcmVkOiBbXSxcbiAgZGVmYXVsdFJlc2l6ZWQ6IFtdLFxuICBkZWZhdWx0RXhwYW5kZWQ6IHt9LFxuICBkZWZhdWx0RmlsdGVyTWV0aG9kOiAoZmlsdGVyLCByb3csIGNvbHVtbikgPT4ge1xuICAgIGNvbnN0IGlkID0gZmlsdGVyLnBpdm90SWQgfHwgZmlsdGVyLmlkXG4gICAgcmV0dXJuIHJvd1tpZF0gIT09IHVuZGVmaW5lZFxuICAgICAgPyBTdHJpbmcocm93W2lkXSkuc3RhcnRzV2l0aChmaWx0ZXIudmFsdWUpXG4gICAgICA6IHRydWVcbiAgfSxcbiAgZGVmYXVsdFNvcnRNZXRob2Q6IChhLCBiKSA9PiB7XG4gICAgLy8gZm9yY2UgbnVsbCBhbmQgdW5kZWZpbmVkIHRvIHRoZSBib3R0b21cbiAgICBhID0gYSA9PT0gbnVsbCB8fCBhID09PSB1bmRlZmluZWQgPyAnJyA6IGFcbiAgICBiID0gYiA9PT0gbnVsbCB8fCBiID09PSB1bmRlZmluZWQgPyAnJyA6IGJcbiAgICAvLyBmb3JjZSBhbnkgc3RyaW5nIHZhbHVlcyB0byBsb3dlcmNhc2VcbiAgICBhID0gdHlwZW9mIGEgPT09ICdzdHJpbmcnID8gYS50b0xvd2VyQ2FzZSgpIDogYVxuICAgIGIgPSB0eXBlb2YgYiA9PT0gJ3N0cmluZycgPyBiLnRvTG93ZXJDYXNlKCkgOiBiXG4gICAgLy8gUmV0dXJuIGVpdGhlciAxIG9yIC0xIHRvIGluZGljYXRlIGEgc29ydCBwcmlvcml0eVxuICAgIGlmIChhID4gYikge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG4gICAgaWYgKGEgPCBiKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgLy8gcmV0dXJuaW5nIDAsIHVuZGVmaW5lZCBvciBhbnkgZmFsc2V5IHZhbHVlIHdpbGwgdXNlIHN1YnNlcXVlbnQgc29ydHMgb3IgdGhlIGluZGV4IGFzIGEgdGllYnJlYWtlclxuICAgIHJldHVybiAwXG4gIH0sXG5cbiAgLy8gQ29udHJvbGxlZCBTdGF0ZSBQcm9wc1xuICAvLyBwYWdlOiB1bmRlZmluZWQsXG4gIC8vIHBhZ2VTaXplOiB1bmRlZmluZWQsXG4gIC8vIHNvcnRlZDogW10sXG4gIC8vIGZpbHRlcmVkOiBbXSxcbiAgLy8gcmVzaXplZDogW10sXG4gIC8vIGV4cGFuZGVkOiB7fSxcblxuICBmb290ZXJQbGFjZW1lbnQ6ICdib3R0b20nLFxuXG4gIC8vIENvbnRyb2xsZWQgU3RhdGUgQ2FsbGJhY2tzXG4gIG9uUGFnZUNoYW5nZTogdW5kZWZpbmVkLFxuICBvblBhZ2VTaXplQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9uU29ydGVkQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9uRmlsdGVyZWRDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25SZXNpemVkQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9uRXhwYW5kZWRDaGFuZ2U6IHVuZGVmaW5lZCxcblxuICAvLyBQaXZvdGluZ1xuICBwaXZvdEJ5OiB1bmRlZmluZWQsXG5cbiAgLy8gRml4ZWQgY29sdW1ucyBjb3VudCAoc3RhcnRzIHdpdGggZmlyc3QgY29sdW1uKVxuICBmaXhlZENvbHVtbnNDb3VudDogMCxcblxuICAvLyBLZXkgQ29uc3RhbnRzXG4gIHBpdm90VmFsS2V5OiAnX3Bpdm90VmFsJyxcbiAgcGl2b3RJREtleTogJ19waXZvdElEJyxcbiAgc3ViUm93c0tleTogJ19zdWJSb3dzJyxcbiAgYWdncmVnYXRlZEtleTogJ19hZ2dyZWdhdGVkJyxcbiAgbmVzdGluZ0xldmVsS2V5OiAnX25lc3RpbmdMZXZlbCcsXG4gIG9yaWdpbmFsS2V5OiAnX29yaWdpbmFsJyxcbiAgaW5kZXhLZXk6ICdfaW5kZXgnLFxuICBncm91cGVkQnlQaXZvdEtleTogJ19ncm91cGVkQnlQaXZvdCcsXG5cbiAgLy8gU2VydmVyLXNpZGUgQ2FsbGJhY2tzXG4gIG9uRmV0Y2hEYXRhOiAoKSA9PiBudWxsLFxuXG4gIC8vIENsYXNzZXNcbiAgY2xhc3NOYW1lOiAnJyxcbiAgc3R5bGU6IHt9LFxuXG4gIC8vIENvbXBvbmVudCBkZWNvcmF0b3JzXG4gIGdldFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGFibGVQcm9wczogZW1wdHlPYmosXG4gIGdldENvbEdyb3VwQ29sUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEdyb3VwUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEdyb3VwVHJQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkR3JvdXBUaFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkVHJQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkVGhQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkRmlsdGVyUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEZpbHRlclRyUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEZpbHRlclRoUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUYm9keVByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VHJQcm9wczogZW1wdHlPYmosXG4gIGdldFRkUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUZm9vdFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGZvb3RUclByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGZvb3RUZFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0UGFnaW5hdGlvblByb3BzOiBlbXB0eU9iaixcbiAgZ2V0TG9hZGluZ1Byb3BzOiBlbXB0eU9iaixcbiAgZ2V0Tm9EYXRhUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRSZXNpemVyUHJvcHM6IGVtcHR5T2JqLFxuXG4gIC8vIEdsb2JhbCBDb2x1bW4gRGVmYXVsdHNcbiAgY29sdW1uOiB7XG4gICAgLy8gUmVuZGVyZXJzXG4gICAgQ2VsbDogdW5kZWZpbmVkLFxuICAgIEhlYWRlcjogdW5kZWZpbmVkLFxuICAgIEZvb3RlcjogdW5kZWZpbmVkLFxuICAgIEFnZ3JlZ2F0ZWQ6IHVuZGVmaW5lZCxcbiAgICBQaXZvdDogdW5kZWZpbmVkLFxuICAgIFBpdm90VmFsdWU6IHVuZGVmaW5lZCxcbiAgICBFeHBhbmRlcjogdW5kZWZpbmVkLFxuICAgIEZpbHRlcjogdW5kZWZpbmVkLFxuICAgIC8vIEFsbCBDb2x1bW5zXG4gICAgc29ydGFibGU6IHVuZGVmaW5lZCwgLy8gdXNlIHRhYmxlIGRlZmF1bHRcbiAgICByZXNpemFibGU6IHVuZGVmaW5lZCwgLy8gdXNlIHRhYmxlIGRlZmF1bHRcbiAgICBmaWx0ZXJhYmxlOiB1bmRlZmluZWQsIC8vIHVzZSB0YWJsZSBkZWZhdWx0XG4gICAgc2hvdzogdHJ1ZSxcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgIG1pbldpZHRoOiB1bmRlZmluZWQsXG4gICAgLy8gQ2VsbHMgb25seVxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc3R5bGU6IHt9LFxuICAgIGdldFByb3BzOiBlbXB0eU9iaixcbiAgICAvLyBQaXZvdCBvbmx5XG4gICAgYWdncmVnYXRlOiB1bmRlZmluZWQsXG4gICAgLy8gQ29sR3JvdXBDb2wgb25seVxuICAgIGNvbEdyb3VwQ29sQ2xhc3NOYW1lOiAnJyxcbiAgICBjb2xHcm91cENvbFN0eWxlOiB7fSxcbiAgICBnZXRDb2xHcm91cENvbFByb3BzOiBlbXB0eU9iaixcbiAgICAvLyBIZWFkZXJzIG9ubHlcbiAgICBoZWFkZXJDbGFzc05hbWU6ICcnLFxuICAgIGhlYWRlclN0eWxlOiB7fSxcbiAgICBnZXRIZWFkZXJQcm9wczogZW1wdHlPYmosXG4gICAgLy8gRm9vdGVycyBvbmx5XG4gICAgZm9vdGVyQ2xhc3NOYW1lOiAnJyxcbiAgICBmb290ZXJTdHlsZToge30sXG4gICAgZ2V0Rm9vdGVyUHJvcHM6IGVtcHR5T2JqLFxuICAgIGZpbHRlck1ldGhvZDogdW5kZWZpbmVkLFxuICAgIGZpbHRlckFsbDogZmFsc2UsXG4gICAgc29ydE1ldGhvZDogdW5kZWZpbmVkLFxuICB9LFxuXG4gIC8vIEdsb2JhbCBFeHBhbmRlciBDb2x1bW4gRGVmYXVsdHNcbiAgZXhwYW5kZXJEZWZhdWx0czoge1xuICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICByZXNpemFibGU6IGZhbHNlLFxuICAgIGZpbHRlcmFibGU6IGZhbHNlLFxuICAgIHdpZHRoOiAzNSxcbiAgfSxcblxuICBwaXZvdERlZmF1bHRzOiB7XG4gICAgLy8gZXh0ZW5kIHRoZSBkZWZhdWx0cyBmb3IgcGl2b3RlZCBjb2x1bW5zIGhlcmVcbiAgfSxcblxuICAvLyBUZXh0XG4gIHByZXZpb3VzVGV4dDogJ1ByZXZpb3VzJyxcbiAgbmV4dFRleHQ6ICdOZXh0JyxcbiAgbG9hZGluZ1RleHQ6ICdMb2FkaW5nLi4uJyxcbiAgbm9EYXRhVGV4dDogJ05vIHJvd3MgZm91bmQnLFxuICBwYWdlVGV4dDogJ1BhZ2UnLFxuICBvZlRleHQ6ICdvZicsXG4gIHJvd3NUZXh0OiAncm93cycsXG5cbiAgLy8gQ29tcG9uZW50c1xuICBUYWJsZVdyYXBwZXI6IFJlYWN0VGFibGVXcmFwcGVyLFxuICBUYWJsZUNvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXRhYmxlJywgJ1RhYmxlJywgJ3RhYmxlJyksXG4gIFRoZWFkQ29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdGhlYWQnLCAnVGhlYWQnLCAndGhlYWQnKSxcbiAgVGJvZHlDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC10Ym9keScsICdUYm9keScsICd0Ym9keScpLFxuICBUckNvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXRyJywgJ1RyJywgJ3RyJyksXG4gIFRoQ29tcG9uZW50OiAoeyB0b2dnbGVTb3J0LCBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRoXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc05hbWUsICdydC10aCcpfVxuICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICB0b2dnbGVTb3J0ICYmIHRvZ2dsZVNvcnQoZSlcbiAgICAgICAgfX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvdGg+XG4gICAgKVxuICB9LFxuICBUZENvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXRkJywgJ1RkJywgJ3RkJyksXG4gIFRmb290Q29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdGZvb3QnLCAnVGZvb3QnLCAndGZvb3QnKSxcbiAgRmlsdGVyQ29tcG9uZW50OiAoeyBmaWx0ZXIsIG9uQ2hhbmdlIH0pID0+XG4gICAgPGlucHV0XG4gICAgICB0eXBlPSd0ZXh0J1xuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIH19XG4gICAgICB2YWx1ZT17ZmlsdGVyID8gZmlsdGVyLnZhbHVlIDogJyd9XG4gICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAvPixcbiAgRXhwYW5kZXJDb21wb25lbnQ6ICh7IGlzRXhwYW5kZWQgfSkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncnQtZXhwYW5kZXInLCBpc0V4cGFuZGVkICYmICctb3BlbicpfT5cbiAgICAgICZidWxsO1xuICAgIDwvZGl2PixcbiAgUGl2b3RWYWx1ZUNvbXBvbmVudDogKHsgc3ViUm93cywgdmFsdWUgfSkgPT5cbiAgICA8c3Bhbj5cbiAgICAgIHt2YWx1ZX0ge3N1YlJvd3MgJiYgYCgke3N1YlJvd3MubGVuZ3RofSlgfVxuICAgIDwvc3Bhbj4sXG4gIEFnZ3JlZ2F0ZWRDb21wb25lbnQ6ICh7IHN1YlJvd3MsIGNvbHVtbiB9KSA9PiB7XG4gICAgY29uc3QgcHJldmlld1ZhbHVlcyA9IHN1YlJvd3NcbiAgICAgIC5maWx0ZXIoZCA9PiB0eXBlb2YgZFtjb2x1bW4uaWRdICE9PSAndW5kZWZpbmVkJylcbiAgICAgIC5tYXAoKHJvdywgaSkgPT5cbiAgICAgICAgPHNwYW4ga2V5PXtpfT5cbiAgICAgICAgICB7cm93W2NvbHVtbi5pZF19XG4gICAgICAgICAge2kgPCBzdWJSb3dzLmxlbmd0aCAtIDEgPyAnLCAnIDogJyd9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIClcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4+XG4gICAgICAgIHtwcmV2aWV3VmFsdWVzfVxuICAgICAgPC9zcGFuPlxuICAgIClcbiAgfSxcbiAgUGl2b3RDb21wb25lbnQ6IHVuZGVmaW5lZCwgLy8gdGhpcyBpcyBhIGNvbXB1dGVkIGRlZmF1bHQgZ2VuZXJhdGVkIHVzaW5nXG4gIC8vIHRoZSBFeHBhbmRlckNvbXBvbmVudCBhbmQgUGl2b3RWYWx1ZUNvbXBvbmVudCBhdCBydW4tdGltZSBpbiBtZXRob2RzLmpzXG4gIFBhZ2luYXRpb25Db21wb25lbnQ6IFBhZ2luYXRpb24sXG4gIFByZXZpb3VzQ29tcG9uZW50OiB1bmRlZmluZWQsXG4gIE5leHRDb21wb25lbnQ6IHVuZGVmaW5lZCxcbiAgTG9hZGluZ0NvbXBvbmVudDogKHsgY2xhc3NOYW1lLCBsb2FkaW5nLCBsb2FkaW5nVGV4dCwgLi4ucmVzdCB9KSA9PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWxvYWRpbmcnLCB7ICctYWN0aXZlJzogbG9hZGluZyB9LCBjbGFzc05hbWUpfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9Jy1sb2FkaW5nLWlubmVyJz5cbiAgICAgICAge2xvYWRpbmdUZXh0fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+LFxuICBOb0RhdGFDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC1ub0RhdGEnLCAnTm9EYXRhJyksXG4gIFJlc2l6ZXJDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC1yZXNpemVyJywgJ1Jlc2l6ZXInKSxcbiAgU29ydE9yZGVyQ29tcG9uZW50OiBTb3J0T3JkZXIsXG4gIFBhZFJvd0NvbXBvbmVudDogKCkgPT4gPHNwYW4+Jm5ic3A7PC9zcGFuPixcbn1cbiJdfQ==