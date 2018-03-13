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
  rowKeyProp: undefined,
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
    sortMethod: undefined,
    displayPivotSubRows: false
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZhdWx0UHJvcHMuanMiXSwibmFtZXMiOlsiZW1wdHlPYmoiLCJkYXRhIiwibG9hZGluZyIsInNob3dQYWdpbmF0aW9uIiwic2hvd1BhZ2luYXRpb25Ub3AiLCJzaG93UGFnaW5hdGlvbkJvdHRvbSIsInNob3dQYWdlU2l6ZU9wdGlvbnMiLCJzaG93U29ydE9yZGVyIiwicGFnZVNpemVPcHRpb25zIiwiZGVmYXVsdFBhZ2VTaXplIiwic2hvd1BhZ2VKdW1wIiwiY29sbGFwc2VPblNvcnRpbmdDaGFuZ2UiLCJjb2xsYXBzZU9uUGFnZUNoYW5nZSIsImNvbGxhcHNlT25EYXRhQ2hhbmdlIiwiZnJlZXplV2hlbkV4cGFuZGVkIiwic29ydGFibGUiLCJyZXNpemFibGUiLCJmaWx0ZXJhYmxlIiwiZGVmYXVsdFNvcnREZXNjIiwiZGVmYXVsdFNvcnRlZCIsImRlZmF1bHRGaWx0ZXJlZCIsImRlZmF1bHRSZXNpemVkIiwiZGVmYXVsdEV4cGFuZGVkIiwiZGVmYXVsdEZpbHRlck1ldGhvZCIsImZpbHRlciIsInJvdyIsImNvbHVtbiIsImlkIiwicGl2b3RJZCIsInVuZGVmaW5lZCIsIlN0cmluZyIsInN0YXJ0c1dpdGgiLCJ2YWx1ZSIsImRlZmF1bHRTb3J0TWV0aG9kIiwiYSIsImIiLCJ0b0xvd2VyQ2FzZSIsImZvb3RlclBsYWNlbWVudCIsIm9uUGFnZUNoYW5nZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJvblNvcnRlZENoYW5nZSIsIm9uRmlsdGVyZWRDaGFuZ2UiLCJvblJlc2l6ZWRDaGFuZ2UiLCJvbkV4cGFuZGVkQ2hhbmdlIiwicGl2b3RCeSIsImZpeGVkQ29sdW1uc0NvdW50IiwicGl2b3RWYWxLZXkiLCJwaXZvdElES2V5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJuZXN0aW5nTGV2ZWxLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5Iiwicm93S2V5UHJvcCIsImdyb3VwZWRCeVBpdm90S2V5Iiwib25GZXRjaERhdGEiLCJjbGFzc05hbWUiLCJzdHlsZSIsImdldFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldENvbEdyb3VwQ29sUHJvcHMiLCJnZXRUaGVhZEdyb3VwUHJvcHMiLCJnZXRUaGVhZEdyb3VwVHJQcm9wcyIsImdldFRoZWFkR3JvdXBUaFByb3BzIiwiZ2V0VGhlYWRQcm9wcyIsImdldFRoZWFkVHJQcm9wcyIsImdldFRoZWFkVGhQcm9wcyIsImdldFRoZWFkRmlsdGVyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRoUHJvcHMiLCJnZXRUYm9keVByb3BzIiwiZ2V0VHJQcm9wcyIsImdldFRkUHJvcHMiLCJnZXRUZm9vdFByb3BzIiwiZ2V0VGZvb3RUclByb3BzIiwiZ2V0VGZvb3RUZFByb3BzIiwiZ2V0UGFnaW5hdGlvblByb3BzIiwiZ2V0TG9hZGluZ1Byb3BzIiwiZ2V0Tm9EYXRhUHJvcHMiLCJnZXRSZXNpemVyUHJvcHMiLCJDZWxsIiwiSGVhZGVyIiwiRm9vdGVyIiwiQWdncmVnYXRlZCIsIlBpdm90IiwiUGl2b3RWYWx1ZSIsIkV4cGFuZGVyIiwiRmlsdGVyIiwic2hvdyIsIndpZHRoIiwibWluV2lkdGgiLCJhZ2dyZWdhdGUiLCJjb2xHcm91cENvbENsYXNzTmFtZSIsImNvbEdyb3VwQ29sU3R5bGUiLCJoZWFkZXJDbGFzc05hbWUiLCJoZWFkZXJTdHlsZSIsImdldEhlYWRlclByb3BzIiwiZm9vdGVyQ2xhc3NOYW1lIiwiZm9vdGVyU3R5bGUiLCJnZXRGb290ZXJQcm9wcyIsImZpbHRlck1ldGhvZCIsImZpbHRlckFsbCIsInNvcnRNZXRob2QiLCJkaXNwbGF5UGl2b3RTdWJSb3dzIiwiZXhwYW5kZXJEZWZhdWx0cyIsInBpdm90RGVmYXVsdHMiLCJwcmV2aW91c1RleHQiLCJuZXh0VGV4dCIsImxvYWRpbmdUZXh0Iiwibm9EYXRhVGV4dCIsInBhZ2VUZXh0Iiwib2ZUZXh0Iiwicm93c1RleHQiLCJUYWJsZVdyYXBwZXIiLCJUYWJsZUNvbXBvbmVudCIsIm1ha2VUZW1wbGF0ZUNvbXBvbmVudCIsIlRoZWFkQ29tcG9uZW50IiwiVGJvZHlDb21wb25lbnQiLCJUckNvbXBvbmVudCIsIlRoQ29tcG9uZW50IiwidG9nZ2xlU29ydCIsImNoaWxkcmVuIiwicmVzdCIsImUiLCJUZENvbXBvbmVudCIsIlRmb290Q29tcG9uZW50IiwiRmlsdGVyQ29tcG9uZW50Iiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIkV4cGFuZGVyQ29tcG9uZW50IiwiaXNFeHBhbmRlZCIsIlBpdm90VmFsdWVDb21wb25lbnQiLCJzdWJSb3dzIiwibGVuZ3RoIiwiQWdncmVnYXRlZENvbXBvbmVudCIsInByZXZpZXdWYWx1ZXMiLCJkIiwibWFwIiwiaSIsIlBpdm90Q29tcG9uZW50IiwiUGFnaW5hdGlvbkNvbXBvbmVudCIsIlByZXZpb3VzQ29tcG9uZW50IiwiTmV4dENvbXBvbmVudCIsIkxvYWRpbmdDb21wb25lbnQiLCJOb0RhdGFDb21wb25lbnQiLCJSZXNpemVyQ29tcG9uZW50IiwiU29ydE9yZGVyQ29tcG9uZW50IiwiUGFkUm93Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7OztBQUpBOzs7QUFNQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUFPLEVBQVA7QUFBQSxDQUFqQjs7a0JBRWU7QUFDYjtBQUNBQyxRQUFNLEVBRk87QUFHYkMsV0FBUyxLQUhJO0FBSWJDLGtCQUFnQixJQUpIO0FBS2JDLHFCQUFtQixLQUxOO0FBTWJDLHdCQUFzQixJQU5UO0FBT2JDLHVCQUFxQixJQVBSO0FBUWJDLGlCQUFlLElBUkY7QUFTYkMsbUJBQWlCLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksRUFBWixFQUFnQixFQUFoQixFQUFvQixHQUFwQixDQVRKO0FBVWJDLG1CQUFpQixFQVZKO0FBV2JDLGdCQUFjLElBWEQ7QUFZYkMsMkJBQXlCLElBWlo7QUFhYkMsd0JBQXNC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RCxHQXJPWTtBQXNPYkksa0JBQWdCL0csU0F0T0gsRUFzT2M7QUFDM0I7QUFDQWdILDJDQXhPYTtBQXlPYkMscUJBQW1CakgsU0F6T047QUEwT2JrSCxpQkFBZWxILFNBMU9GO0FBMk9ibUgsb0JBQWtCO0FBQUEsUUFBR3hGLFNBQUgsU0FBR0EsU0FBSDtBQUFBLFFBQWN0RCxPQUFkLFNBQWNBLE9BQWQ7QUFBQSxRQUF1QjBHLFdBQXZCLFNBQXVCQSxXQUF2QjtBQUFBLFFBQXVDYyxJQUF2Qzs7QUFBQSxXQUNoQjtBQUFBO0FBQUE7QUFDRSxtQkFBVywwQkFBVyxVQUFYLEVBQXVCLEVBQUUsV0FBV3hILE9BQWIsRUFBdkIsRUFBK0NzRCxTQUEvQztBQURiLFNBRU1rRSxJQUZOO0FBSUU7QUFBQTtBQUFBLFVBQUssV0FBVSxnQkFBZjtBQUNHZDtBQURIO0FBSkYsS0FEZ0I7QUFBQSxHQTNPTDtBQW9QYnFDLG1CQUFpQixnQkFBRTlCLHFCQUFGLENBQXdCLFdBQXhCLEVBQXFDLFFBQXJDLENBcFBKO0FBcVBiK0Isb0JBQWtCLGdCQUFFL0IscUJBQUYsQ0FBd0IsWUFBeEIsRUFBc0MsU0FBdEMsQ0FyUEw7QUFzUGJnQyxvQ0F0UGE7QUF1UGJDLG1CQUFpQjtBQUFBLFdBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFOO0FBQUE7QUF2UEosQyIsImZpbGUiOiJkZWZhdWx0UHJvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuLy9cbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24nXG5pbXBvcnQgUmVhY3RUYWJsZVdyYXBwZXIgZnJvbSAnLi93cmFwcGVyJ1xuaW1wb3J0IFNvcnRPcmRlciBmcm9tICcuL3NvcnQnXG5cbmNvbnN0IGVtcHR5T2JqID0gKCkgPT4gKHt9KVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIEdlbmVyYWxcbiAgZGF0YTogW10sXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBzaG93UGFnaW5hdGlvbjogdHJ1ZSxcbiAgc2hvd1BhZ2luYXRpb25Ub3A6IGZhbHNlLFxuICBzaG93UGFnaW5hdGlvbkJvdHRvbTogdHJ1ZSxcbiAgc2hvd1BhZ2VTaXplT3B0aW9uczogdHJ1ZSxcbiAgc2hvd1NvcnRPcmRlcjogdHJ1ZSxcbiAgcGFnZVNpemVPcHRpb25zOiBbNSwgMTAsIDIwLCAyNSwgNTAsIDEwMF0sXG4gIGRlZmF1bHRQYWdlU2l6ZTogMjAsXG4gIHNob3dQYWdlSnVtcDogdHJ1ZSxcbiAgY29sbGFwc2VPblNvcnRpbmdDaGFuZ2U6IHRydWUsXG4gIGNvbGxhcHNlT25QYWdlQ2hhbmdlOiB0cnVlLFxuICBjb2xsYXBzZU9uRGF0YUNoYW5nZTogdHJ1ZSxcbiAgZnJlZXplV2hlbkV4cGFuZGVkOiBmYWxzZSxcbiAgc29ydGFibGU6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgZmlsdGVyYWJsZTogZmFsc2UsXG4gIGRlZmF1bHRTb3J0RGVzYzogZmFsc2UsXG4gIGRlZmF1bHRTb3J0ZWQ6IFtdLFxuICBkZWZhdWx0RmlsdGVyZWQ6IFtdLFxuICBkZWZhdWx0UmVzaXplZDogW10sXG4gIGRlZmF1bHRFeHBhbmRlZDoge30sXG4gIGRlZmF1bHRGaWx0ZXJNZXRob2Q6IChmaWx0ZXIsIHJvdywgY29sdW1uKSA9PiB7XG4gICAgY29uc3QgaWQgPSBmaWx0ZXIucGl2b3RJZCB8fCBmaWx0ZXIuaWRcbiAgICByZXR1cm4gcm93W2lkXSAhPT0gdW5kZWZpbmVkXG4gICAgICA/IFN0cmluZyhyb3dbaWRdKS5zdGFydHNXaXRoKGZpbHRlci52YWx1ZSlcbiAgICAgIDogdHJ1ZVxuICB9LFxuICBkZWZhdWx0U29ydE1ldGhvZDogKGEsIGIpID0+IHtcbiAgICAvLyBmb3JjZSBudWxsIGFuZCB1bmRlZmluZWQgdG8gdGhlIGJvdHRvbVxuICAgIGEgPSBhID09PSBudWxsIHx8IGEgPT09IHVuZGVmaW5lZCA/ICcnIDogYVxuICAgIGIgPSBiID09PSBudWxsIHx8IGIgPT09IHVuZGVmaW5lZCA/ICcnIDogYlxuICAgIC8vIGZvcmNlIGFueSBzdHJpbmcgdmFsdWVzIHRvIGxvd2VyY2FzZVxuICAgIGEgPSB0eXBlb2YgYSA9PT0gJ3N0cmluZycgPyBhLnRvTG93ZXJDYXNlKCkgOiBhXG4gICAgYiA9IHR5cGVvZiBiID09PSAnc3RyaW5nJyA/IGIudG9Mb3dlckNhc2UoKSA6IGJcbiAgICAvLyBSZXR1cm4gZWl0aGVyIDEgb3IgLTEgdG8gaW5kaWNhdGUgYSBzb3J0IHByaW9yaXR5XG4gICAgaWYgKGEgPiBiKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH1cbiAgICBpZiAoYSA8IGIpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICAvLyByZXR1cm5pbmcgMCwgdW5kZWZpbmVkIG9yIGFueSBmYWxzZXkgdmFsdWUgd2lsbCB1c2Ugc3Vic2VxdWVudCBzb3J0cyBvciB0aGUgaW5kZXggYXMgYSB0aWVicmVha2VyXG4gICAgcmV0dXJuIDBcbiAgfSxcblxuICAvLyBDb250cm9sbGVkIFN0YXRlIFByb3BzXG4gIC8vIHBhZ2U6IHVuZGVmaW5lZCxcbiAgLy8gcGFnZVNpemU6IHVuZGVmaW5lZCxcbiAgLy8gc29ydGVkOiBbXSxcbiAgLy8gZmlsdGVyZWQ6IFtdLFxuICAvLyByZXNpemVkOiBbXSxcbiAgLy8gZXhwYW5kZWQ6IHt9LFxuXG4gIGZvb3RlclBsYWNlbWVudDogJ2JvdHRvbScsXG5cbiAgLy8gQ29udHJvbGxlZCBTdGF0ZSBDYWxsYmFja3NcbiAgb25QYWdlQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9uUGFnZVNpemVDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25Tb3J0ZWRDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25GaWx0ZXJlZENoYW5nZTogdW5kZWZpbmVkLFxuICBvblJlc2l6ZWRDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25FeHBhbmRlZENoYW5nZTogdW5kZWZpbmVkLFxuXG4gIC8vIFBpdm90aW5nXG4gIHBpdm90Qnk6IHVuZGVmaW5lZCxcblxuICAvLyBGaXhlZCBjb2x1bW5zIGNvdW50IChzdGFydHMgd2l0aCBmaXJzdCBjb2x1bW4pXG4gIGZpeGVkQ29sdW1uc0NvdW50OiAwLFxuXG4gIC8vIEtleSBDb25zdGFudHNcbiAgcGl2b3RWYWxLZXk6ICdfcGl2b3RWYWwnLFxuICBwaXZvdElES2V5OiAnX3Bpdm90SUQnLFxuICBzdWJSb3dzS2V5OiAnX3N1YlJvd3MnLFxuICBhZ2dyZWdhdGVkS2V5OiAnX2FnZ3JlZ2F0ZWQnLFxuICBuZXN0aW5nTGV2ZWxLZXk6ICdfbmVzdGluZ0xldmVsJyxcbiAgb3JpZ2luYWxLZXk6ICdfb3JpZ2luYWwnLFxuICBpbmRleEtleTogJ19pbmRleCcsXG4gIHJvd0tleVByb3A6IHVuZGVmaW5lZCxcbiAgZ3JvdXBlZEJ5UGl2b3RLZXk6ICdfZ3JvdXBlZEJ5UGl2b3QnLFxuXG4gIC8vIFNlcnZlci1zaWRlIENhbGxiYWNrc1xuICBvbkZldGNoRGF0YTogKCkgPT4gbnVsbCxcblxuICAvLyBDbGFzc2VzXG4gIGNsYXNzTmFtZTogJycsXG4gIHN0eWxlOiB7fSxcblxuICAvLyBDb21wb25lbnQgZGVjb3JhdG9yc1xuICBnZXRQcm9wczogZW1wdHlPYmosXG4gIGdldFRhYmxlUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRDb2xHcm91cENvbFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRHcm91cFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRHcm91cFRyUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEdyb3VwVGhQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZFRyUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZFRoUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEZpbHRlclByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGJvZHlQcm9wczogZW1wdHlPYmosXG4gIGdldFRyUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUZFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGZvb3RQcm9wczogZW1wdHlPYmosXG4gIGdldFRmb290VHJQcm9wczogZW1wdHlPYmosXG4gIGdldFRmb290VGRQcm9wczogZW1wdHlPYmosXG4gIGdldFBhZ2luYXRpb25Qcm9wczogZW1wdHlPYmosXG4gIGdldExvYWRpbmdQcm9wczogZW1wdHlPYmosXG4gIGdldE5vRGF0YVByb3BzOiBlbXB0eU9iaixcbiAgZ2V0UmVzaXplclByb3BzOiBlbXB0eU9iaixcblxuICAvLyBHbG9iYWwgQ29sdW1uIERlZmF1bHRzXG4gIGNvbHVtbjoge1xuICAgIC8vIFJlbmRlcmVyc1xuICAgIENlbGw6IHVuZGVmaW5lZCxcbiAgICBIZWFkZXI6IHVuZGVmaW5lZCxcbiAgICBGb290ZXI6IHVuZGVmaW5lZCxcbiAgICBBZ2dyZWdhdGVkOiB1bmRlZmluZWQsXG4gICAgUGl2b3Q6IHVuZGVmaW5lZCxcbiAgICBQaXZvdFZhbHVlOiB1bmRlZmluZWQsXG4gICAgRXhwYW5kZXI6IHVuZGVmaW5lZCxcbiAgICBGaWx0ZXI6IHVuZGVmaW5lZCxcbiAgICAvLyBBbGwgQ29sdW1uc1xuICAgIHNvcnRhYmxlOiB1bmRlZmluZWQsIC8vIHVzZSB0YWJsZSBkZWZhdWx0XG4gICAgcmVzaXphYmxlOiB1bmRlZmluZWQsIC8vIHVzZSB0YWJsZSBkZWZhdWx0XG4gICAgZmlsdGVyYWJsZTogdW5kZWZpbmVkLCAvLyB1c2UgdGFibGUgZGVmYXVsdFxuICAgIHNob3c6IHRydWUsXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICBtaW5XaWR0aDogdW5kZWZpbmVkLFxuICAgIC8vIENlbGxzIG9ubHlcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHN0eWxlOiB7fSxcbiAgICBnZXRQcm9wczogZW1wdHlPYmosXG4gICAgLy8gUGl2b3Qgb25seVxuICAgIGFnZ3JlZ2F0ZTogdW5kZWZpbmVkLFxuICAgIC8vIENvbEdyb3VwQ29sIG9ubHlcbiAgICBjb2xHcm91cENvbENsYXNzTmFtZTogJycsXG4gICAgY29sR3JvdXBDb2xTdHlsZToge30sXG4gICAgZ2V0Q29sR3JvdXBDb2xQcm9wczogZW1wdHlPYmosXG4gICAgLy8gSGVhZGVycyBvbmx5XG4gICAgaGVhZGVyQ2xhc3NOYW1lOiAnJyxcbiAgICBoZWFkZXJTdHlsZToge30sXG4gICAgZ2V0SGVhZGVyUHJvcHM6IGVtcHR5T2JqLFxuICAgIC8vIEZvb3RlcnMgb25seVxuICAgIGZvb3RlckNsYXNzTmFtZTogJycsXG4gICAgZm9vdGVyU3R5bGU6IHt9LFxuICAgIGdldEZvb3RlclByb3BzOiBlbXB0eU9iaixcbiAgICBmaWx0ZXJNZXRob2Q6IHVuZGVmaW5lZCxcbiAgICBmaWx0ZXJBbGw6IGZhbHNlLFxuICAgIHNvcnRNZXRob2Q6IHVuZGVmaW5lZCxcbiAgICBkaXNwbGF5UGl2b3RTdWJSb3dzOiBmYWxzZSxcbiAgfSxcblxuICAvLyBHbG9iYWwgRXhwYW5kZXIgQ29sdW1uIERlZmF1bHRzXG4gIGV4cGFuZGVyRGVmYXVsdHM6IHtcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICB3aWR0aDogMzUsXG4gIH0sXG5cbiAgcGl2b3REZWZhdWx0czoge1xuICAgIC8vIGV4dGVuZCB0aGUgZGVmYXVsdHMgZm9yIHBpdm90ZWQgY29sdW1ucyBoZXJlXG4gIH0sXG5cbiAgLy8gVGV4dFxuICBwcmV2aW91c1RleHQ6ICdQcmV2aW91cycsXG4gIG5leHRUZXh0OiAnTmV4dCcsXG4gIGxvYWRpbmdUZXh0OiAnTG9hZGluZy4uLicsXG4gIG5vRGF0YVRleHQ6ICdObyByb3dzIGZvdW5kJyxcbiAgcGFnZVRleHQ6ICdQYWdlJyxcbiAgb2ZUZXh0OiAnb2YnLFxuICByb3dzVGV4dDogJ3Jvd3MnLFxuXG4gIC8vIENvbXBvbmVudHNcbiAgVGFibGVXcmFwcGVyOiBSZWFjdFRhYmxlV3JhcHBlcixcbiAgVGFibGVDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC10YWJsZScsICdUYWJsZScsICd0YWJsZScpLFxuICBUaGVhZENvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXRoZWFkJywgJ1RoZWFkJywgJ3RoZWFkJyksXG4gIFRib2R5Q29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdGJvZHknLCAnVGJvZHknLCAndGJvZHknKSxcbiAgVHJDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC10cicsICdUcicsICd0cicpLFxuICBUaENvbXBvbmVudDogKHsgdG9nZ2xlU29ydCwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0aFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NOYW1lLCAncnQtdGgnKX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgdG9nZ2xlU29ydCAmJiB0b2dnbGVTb3J0KGUpXG4gICAgICAgIH19XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3RoPlxuICAgIClcbiAgfSxcbiAgVGRDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC10ZCcsICdUZCcsICd0ZCcpLFxuICBUZm9vdENvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXRmb290JywgJ1Rmb290JywgJ3Rmb290JyksXG4gIEZpbHRlckNvbXBvbmVudDogKHsgZmlsdGVyLCBvbkNoYW5nZSB9KSA9PlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT0ndGV4dCdcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB9fVxuICAgICAgdmFsdWU9e2ZpbHRlciA/IGZpbHRlci52YWx1ZSA6ICcnfVxuICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgLz4sXG4gIEV4cGFuZGVyQ29tcG9uZW50OiAoeyBpc0V4cGFuZGVkIH0pID0+XG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3J0LWV4cGFuZGVyJywgaXNFeHBhbmRlZCAmJiAnLW9wZW4nKX0+XG4gICAgICAmYnVsbDtcbiAgICA8L2Rpdj4sXG4gIFBpdm90VmFsdWVDb21wb25lbnQ6ICh7IHN1YlJvd3MsIHZhbHVlIH0pID0+XG4gICAgPHNwYW4+XG4gICAgICB7dmFsdWV9IHtzdWJSb3dzICYmIGAoJHtzdWJSb3dzLmxlbmd0aH0pYH1cbiAgICA8L3NwYW4+LFxuICBBZ2dyZWdhdGVkQ29tcG9uZW50OiAoeyBzdWJSb3dzLCBjb2x1bW4gfSkgPT4ge1xuICAgIGNvbnN0IHByZXZpZXdWYWx1ZXMgPSBzdWJSb3dzXG4gICAgICAuZmlsdGVyKGQgPT4gdHlwZW9mIGRbY29sdW1uLmlkXSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAubWFwKChyb3csIGkpID0+XG4gICAgICAgIDxzcGFuIGtleT17aX0+XG4gICAgICAgICAge3Jvd1tjb2x1bW4uaWRdfVxuICAgICAgICAgIHtpIDwgc3ViUm93cy5sZW5ndGggLSAxID8gJywgJyA6ICcnfVxuICAgICAgICA8L3NwYW4+XG4gICAgICApXG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuPlxuICAgICAgICB7cHJldmlld1ZhbHVlc31cbiAgICAgIDwvc3Bhbj5cbiAgICApXG4gIH0sXG4gIFBpdm90Q29tcG9uZW50OiB1bmRlZmluZWQsIC8vIHRoaXMgaXMgYSBjb21wdXRlZCBkZWZhdWx0IGdlbmVyYXRlZCB1c2luZ1xuICAvLyB0aGUgRXhwYW5kZXJDb21wb25lbnQgYW5kIFBpdm90VmFsdWVDb21wb25lbnQgYXQgcnVuLXRpbWUgaW4gbWV0aG9kcy5qc1xuICBQYWdpbmF0aW9uQ29tcG9uZW50OiBQYWdpbmF0aW9uLFxuICBQcmV2aW91c0NvbXBvbmVudDogdW5kZWZpbmVkLFxuICBOZXh0Q29tcG9uZW50OiB1bmRlZmluZWQsXG4gIExvYWRpbmdDb21wb25lbnQ6ICh7IGNsYXNzTmFtZSwgbG9hZGluZywgbG9hZGluZ1RleHQsIC4uLnJlc3QgfSkgPT5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1sb2FkaW5nJywgeyAnLWFjdGl2ZSc6IGxvYWRpbmcgfSwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSctbG9hZGluZy1pbm5lcic+XG4gICAgICAgIHtsb2FkaW5nVGV4dH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PixcbiAgTm9EYXRhQ29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtbm9EYXRhJywgJ05vRGF0YScpLFxuICBSZXNpemVyQ29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtcmVzaXplcicsICdSZXNpemVyJyksXG4gIFNvcnRPcmRlckNvbXBvbmVudDogU29ydE9yZGVyLFxuICBQYWRSb3dDb21wb25lbnQ6ICgpID0+IDxzcGFuPiZuYnNwOzwvc3Bhbj4sXG59XG4iXX0=