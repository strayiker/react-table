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
  TableComponent: _utils2.default.makeTemplateComponent('rt-table', 'table'),
  TheadComponent: _utils2.default.makeTemplateComponent('rt-thead', 'thead'),
  TbodyComponent: _utils2.default.makeTemplateComponent('rt-tbody', 'tbody'),
  TrComponent: _utils2.default.makeTemplateComponent('rt-tr', 'tr'),
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
  TdComponent: _utils2.default.makeTemplateComponent('rt-td', 'td'),
  TfootComponent: _utils2.default.makeTemplateComponent('rt-tfoot', 'tfoot'),
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
  NoDataComponent: _utils2.default.makeTemplateComponent('rt-noData'),
  ResizerComponent: _utils2.default.makeTemplateComponent('rt-resizer'),
  PadRowComponent: function PadRowComponent() {
    return _react2.default.createElement(
      'span',
      null,
      '\xA0'
    );
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZhdWx0UHJvcHMuanMiXSwibmFtZXMiOlsiZW1wdHlPYmoiLCJkYXRhIiwibG9hZGluZyIsInNob3dQYWdpbmF0aW9uIiwic2hvd1BhZ2luYXRpb25Ub3AiLCJzaG93UGFnaW5hdGlvbkJvdHRvbSIsInNob3dQYWdlU2l6ZU9wdGlvbnMiLCJwYWdlU2l6ZU9wdGlvbnMiLCJkZWZhdWx0UGFnZVNpemUiLCJzaG93UGFnZUp1bXAiLCJjb2xsYXBzZU9uU29ydGluZ0NoYW5nZSIsImNvbGxhcHNlT25QYWdlQ2hhbmdlIiwiY29sbGFwc2VPbkRhdGFDaGFuZ2UiLCJmcmVlemVXaGVuRXhwYW5kZWQiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJkZWZhdWx0U29ydERlc2MiLCJkZWZhdWx0U29ydGVkIiwiZGVmYXVsdEZpbHRlcmVkIiwiZGVmYXVsdFJlc2l6ZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJkZWZhdWx0RmlsdGVyTWV0aG9kIiwiZmlsdGVyIiwicm93IiwiY29sdW1uIiwiaWQiLCJwaXZvdElkIiwidW5kZWZpbmVkIiwiU3RyaW5nIiwic3RhcnRzV2l0aCIsInZhbHVlIiwiZGVmYXVsdFNvcnRNZXRob2QiLCJhIiwiYiIsInRvTG93ZXJDYXNlIiwib25QYWdlQ2hhbmdlIiwib25QYWdlU2l6ZUNoYW5nZSIsIm9uU29ydGVkQ2hhbmdlIiwib25GaWx0ZXJlZENoYW5nZSIsIm9uUmVzaXplZENoYW5nZSIsIm9uRXhwYW5kZWRDaGFuZ2UiLCJwaXZvdEJ5IiwicGl2b3RWYWxLZXkiLCJwaXZvdElES2V5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJuZXN0aW5nTGV2ZWxLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJvbkZldGNoRGF0YSIsImNsYXNzTmFtZSIsInN0eWxlIiwiZ2V0UHJvcHMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0Q29sR3JvdXBDb2xQcm9wcyIsImdldFRoZWFkR3JvdXBQcm9wcyIsImdldFRoZWFkR3JvdXBUclByb3BzIiwiZ2V0VGhlYWRHcm91cFRoUHJvcHMiLCJnZXRUaGVhZFByb3BzIiwiZ2V0VGhlYWRUclByb3BzIiwiZ2V0VGhlYWRUaFByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJQcm9wcyIsImdldFRoZWFkRmlsdGVyVHJQcm9wcyIsImdldFRoZWFkRmlsdGVyVGhQcm9wcyIsImdldFRib2R5UHJvcHMiLCJnZXRUclByb3BzIiwiZ2V0VGRQcm9wcyIsImdldFRmb290UHJvcHMiLCJnZXRUZm9vdFRyUHJvcHMiLCJnZXRUZm9vdFRkUHJvcHMiLCJnZXRQYWdpbmF0aW9uUHJvcHMiLCJnZXRMb2FkaW5nUHJvcHMiLCJnZXROb0RhdGFQcm9wcyIsImdldFJlc2l6ZXJQcm9wcyIsIkNlbGwiLCJIZWFkZXIiLCJGb290ZXIiLCJBZ2dyZWdhdGVkIiwiUGl2b3QiLCJQaXZvdFZhbHVlIiwiRXhwYW5kZXIiLCJGaWx0ZXIiLCJzaG93IiwibWluV2lkdGgiLCJhZ2dyZWdhdGUiLCJjb2xHcm91cENvbENsYXNzTmFtZSIsImNvbEdyb3VwQ29sU3R5bGUiLCJoZWFkZXJDbGFzc05hbWUiLCJoZWFkZXJTdHlsZSIsImdldEhlYWRlclByb3BzIiwiZm9vdGVyQ2xhc3NOYW1lIiwiZm9vdGVyU3R5bGUiLCJnZXRGb290ZXJQcm9wcyIsImZpbHRlck1ldGhvZCIsInNvcnRNZXRob2QiLCJleHBhbmRlckRlZmF1bHRzIiwid2lkdGgiLCJwaXZvdERlZmF1bHRzIiwicHJldmlvdXNUZXh0IiwibmV4dFRleHQiLCJsb2FkaW5nVGV4dCIsIm5vRGF0YVRleHQiLCJwYWdlVGV4dCIsIm9mVGV4dCIsInJvd3NUZXh0IiwiVGFibGVDb21wb25lbnQiLCJtYWtlVGVtcGxhdGVDb21wb25lbnQiLCJUaGVhZENvbXBvbmVudCIsIlRib2R5Q29tcG9uZW50IiwiVHJDb21wb25lbnQiLCJUaENvbXBvbmVudCIsInRvZ2dsZVNvcnQiLCJjaGlsZHJlbiIsInJlc3QiLCJlIiwiVGRDb21wb25lbnQiLCJUZm9vdENvbXBvbmVudCIsIkZpbHRlckNvbXBvbmVudCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJFeHBhbmRlckNvbXBvbmVudCIsImlzRXhwYW5kZWQiLCJQaXZvdFZhbHVlQ29tcG9uZW50Iiwic3ViUm93cyIsImxlbmd0aCIsIkFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJwcmV2aWV3VmFsdWVzIiwiZCIsIm1hcCIsImkiLCJQaXZvdENvbXBvbmVudCIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJQcmV2aW91c0NvbXBvbmVudCIsIk5leHRDb21wb25lbnQiLCJMb2FkaW5nQ29tcG9uZW50IiwiTm9EYXRhQ29tcG9uZW50IiwiUmVzaXplckNvbXBvbmVudCIsIlBhZFJvd0NvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7OztBQUZBOzs7QUFJQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUFPLEVBQVA7QUFBQSxDQUFqQjs7a0JBRWU7QUFDYjtBQUNBQyxRQUFNLEVBRk87QUFHYkMsV0FBUyxLQUhJO0FBSWJDLGtCQUFnQixJQUpIO0FBS2JDLHFCQUFtQixLQUxOO0FBTWJDLHdCQUFzQixJQU5UO0FBT2JDLHVCQUFxQixJQVBSO0FBUWJDLG1CQUFpQixDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsR0FBcEIsQ0FSSjtBQVNiQyxtQkFBaUIsRUFUSjtBQVViQyxnQkFBYyxJQVZEO0FBV2JDLDJCQUF5QixJQVhaO0FBWWJDLHdCQUFzQixJQVpUO0FBYWJDLHdCQUFzQixJQWJUO0FBY2JDLHNCQUFvQixLQWRQO0FBZWJDLFlBQVUsSUFmRztBQWdCYkMsYUFBVyxJQWhCRTtBQWlCYkMsY0FBWSxLQWpCQztBQWtCYkMsbUJBQWlCLEtBbEJKO0FBbUJiQyxpQkFBZSxFQW5CRjtBQW9CYkMsbUJBQWlCLEVBcEJKO0FBcUJiQyxrQkFBZ0IsRUFy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Tkw7QUFrT2JvQyxtQkFBaUIsZ0JBQUU5QixxQkFBRixDQUF3QixXQUF4QixDQWxPSjtBQW1PYitCLG9CQUFrQixnQkFBRS9CLHFCQUFGLENBQXdCLFlBQXhCLENBbk9MO0FBb09iZ0MsbUJBQWlCO0FBQUEsV0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU47QUFBQTtBQXBPSixDIiwiZmlsZSI6ImRlZmF1bHRQcm9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG4vL1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscydcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vcGFnaW5hdGlvbidcblxuY29uc3QgZW1wdHlPYmogPSAoKSA9PiAoe30pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gR2VuZXJhbFxuICBkYXRhOiBbXSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIHNob3dQYWdpbmF0aW9uOiB0cnVlLFxuICBzaG93UGFnaW5hdGlvblRvcDogZmFsc2UsXG4gIHNob3dQYWdpbmF0aW9uQm90dG9tOiB0cnVlLFxuICBzaG93UGFnZVNpemVPcHRpb25zOiB0cnVlLFxuICBwYWdlU2l6ZU9wdGlvbnM6IFs1LCAxMCwgMjAsIDI1LCA1MCwgMTAwXSxcbiAgZGVmYXVsdFBhZ2VTaXplOiAyMCxcbiAgc2hvd1BhZ2VKdW1wOiB0cnVlLFxuICBjb2xsYXBzZU9uU29ydGluZ0NoYW5nZTogdHJ1ZSxcbiAgY29sbGFwc2VPblBhZ2VDaGFuZ2U6IHRydWUsXG4gIGNvbGxhcHNlT25EYXRhQ2hhbmdlOiB0cnVlLFxuICBmcmVlemVXaGVuRXhwYW5kZWQ6IGZhbHNlLFxuICBzb3J0YWJsZTogdHJ1ZSxcbiAgcmVzaXphYmxlOiB0cnVlLFxuICBmaWx0ZXJhYmxlOiBmYWxzZSxcbiAgZGVmYXVsdFNvcnREZXNjOiBmYWxzZSxcbiAgZGVmYXVsdFNvcnRlZDogW10sXG4gIGRlZmF1bHRGaWx0ZXJlZDogW10sXG4gIGRlZmF1bHRSZXNpemVkOiBbXSxcbiAgZGVmYXVsdEV4cGFuZGVkOiB7fSxcbiAgZGVmYXVsdEZpbHRlck1ldGhvZDogKGZpbHRlciwgcm93LCBjb2x1bW4pID0+IHtcbiAgICBjb25zdCBpZCA9IGZpbHRlci5waXZvdElkIHx8IGZpbHRlci5pZFxuICAgIHJldHVybiByb3dbaWRdICE9PSB1bmRlZmluZWRcbiAgICAgID8gU3RyaW5nKHJvd1tpZF0pLnN0YXJ0c1dpdGgoZmlsdGVyLnZhbHVlKVxuICAgICAgOiB0cnVlXG4gIH0sXG4gIGRlZmF1bHRTb3J0TWV0aG9kOiAoYSwgYikgPT4ge1xuICAgIC8vIGZvcmNlIG51bGwgYW5kIHVuZGVmaW5lZCB0byB0aGUgYm90dG9tXG4gICAgYSA9IGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkID8gJycgOiBhXG4gICAgYiA9IGIgPT09IG51bGwgfHwgYiA9PT0gdW5kZWZpbmVkID8gJycgOiBiXG4gICAgLy8gZm9yY2UgYW55IHN0cmluZyB2YWx1ZXMgdG8gbG93ZXJjYXNlXG4gICAgYSA9IHR5cGVvZiBhID09PSAnc3RyaW5nJyA/IGEudG9Mb3dlckNhc2UoKSA6IGFcbiAgICBiID0gdHlwZW9mIGIgPT09ICdzdHJpbmcnID8gYi50b0xvd2VyQ2FzZSgpIDogYlxuICAgIC8vIFJldHVybiBlaXRoZXIgMSBvciAtMSB0byBpbmRpY2F0ZSBhIHNvcnQgcHJpb3JpdHlcbiAgICBpZiAoYSA+IGIpIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuICAgIGlmIChhIDwgYikge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIC8vIHJldHVybmluZyAwLCB1bmRlZmluZWQgb3IgYW55IGZhbHNleSB2YWx1ZSB3aWxsIHVzZSBzdWJzZXF1ZW50IHNvcnRzIG9yIHRoZSBpbmRleCBhcyBhIHRpZWJyZWFrZXJcbiAgICByZXR1cm4gMFxuICB9LFxuXG4gIC8vIENvbnRyb2xsZWQgU3RhdGUgUHJvcHNcbiAgLy8gcGFnZTogdW5kZWZpbmVkLFxuICAvLyBwYWdlU2l6ZTogdW5kZWZpbmVkLFxuICAvLyBzb3J0ZWQ6IFtdLFxuICAvLyBmaWx0ZXJlZDogW10sXG4gIC8vIHJlc2l6ZWQ6IFtdLFxuICAvLyBleHBhbmRlZDoge30sXG5cbiAgLy8gQ29udHJvbGxlZCBTdGF0ZSBDYWxsYmFja3NcbiAgb25QYWdlQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9uUGFnZVNpemVDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25Tb3J0ZWRDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25GaWx0ZXJlZENoYW5nZTogdW5kZWZpbmVkLFxuICBvblJlc2l6ZWRDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25FeHBhbmRlZENoYW5nZTogdW5kZWZpbmVkLFxuXG4gIC8vIFBpdm90aW5nXG4gIHBpdm90Qnk6IHVuZGVmaW5lZCxcblxuICAvLyBLZXkgQ29uc3RhbnRzXG4gIHBpdm90VmFsS2V5OiAnX3Bpdm90VmFsJyxcbiAgcGl2b3RJREtleTogJ19waXZvdElEJyxcbiAgc3ViUm93c0tleTogJ19zdWJSb3dzJyxcbiAgYWdncmVnYXRlZEtleTogJ19hZ2dyZWdhdGVkJyxcbiAgbmVzdGluZ0xldmVsS2V5OiAnX25lc3RpbmdMZXZlbCcsXG4gIG9yaWdpbmFsS2V5OiAnX29yaWdpbmFsJyxcbiAgaW5kZXhLZXk6ICdfaW5kZXgnLFxuICBncm91cGVkQnlQaXZvdEtleTogJ19ncm91cGVkQnlQaXZvdCcsXG5cbiAgLy8gU2VydmVyLXNpZGUgQ2FsbGJhY2tzXG4gIG9uRmV0Y2hEYXRhOiAoKSA9PiBudWxsLFxuXG4gIC8vIENsYXNzZXNcbiAgY2xhc3NOYW1lOiAnJyxcbiAgc3R5bGU6IHt9LFxuXG4gIC8vIENvbXBvbmVudCBkZWNvcmF0b3JzXG4gIGdldFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGFibGVQcm9wczogZW1wdHlPYmosXG4gIGdldENvbEdyb3VwQ29sUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEdyb3VwUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEdyb3VwVHJQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkR3JvdXBUaFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkVHJQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkVGhQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkRmlsdGVyUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEZpbHRlclRyUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZEZpbHRlclRoUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUYm9keVByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VHJQcm9wczogZW1wdHlPYmosXG4gIGdldFRkUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUZm9vdFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGZvb3RUclByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGZvb3RUZFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0UGFnaW5hdGlvblByb3BzOiBlbXB0eU9iaixcbiAgZ2V0TG9hZGluZ1Byb3BzOiBlbXB0eU9iaixcbiAgZ2V0Tm9EYXRhUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRSZXNpemVyUHJvcHM6IGVtcHR5T2JqLFxuXG4gIC8vIEdsb2JhbCBDb2x1bW4gRGVmYXVsdHNcbiAgY29sdW1uOiB7XG4gICAgLy8gUmVuZGVyZXJzXG4gICAgQ2VsbDogdW5kZWZpbmVkLFxuICAgIEhlYWRlcjogdW5kZWZpbmVkLFxuICAgIEZvb3RlcjogdW5kZWZpbmVkLFxuICAgIEFnZ3JlZ2F0ZWQ6IHVuZGVmaW5lZCxcbiAgICBQaXZvdDogdW5kZWZpbmVkLFxuICAgIFBpdm90VmFsdWU6IHVuZGVmaW5lZCxcbiAgICBFeHBhbmRlcjogdW5kZWZpbmVkLFxuICAgIEZpbHRlcjogdW5kZWZpbmVkLFxuICAgIC8vIEFsbCBDb2x1bW5zXG4gICAgc29ydGFibGU6IHVuZGVmaW5lZCwgLy8gdXNlIHRhYmxlIGRlZmF1bHRcbiAgICByZXNpemFibGU6IHVuZGVmaW5lZCwgLy8gdXNlIHRhYmxlIGRlZmF1bHRcbiAgICBmaWx0ZXJhYmxlOiB1bmRlZmluZWQsIC8vIHVzZSB0YWJsZSBkZWZhdWx0XG4gICAgc2hvdzogdHJ1ZSxcbiAgICBtaW5XaWR0aDogdW5kZWZpbmVkLFxuICAgIC8vIENlbGxzIG9ubHlcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHN0eWxlOiB7fSxcbiAgICBnZXRQcm9wczogZW1wdHlPYmosXG4gICAgLy8gUGl2b3Qgb25seVxuICAgIGFnZ3JlZ2F0ZTogdW5kZWZpbmVkLFxuICAgIC8vIENvbEdyb3VwQ29sIG9ubHlcbiAgICBjb2xHcm91cENvbENsYXNzTmFtZTogJycsXG4gICAgY29sR3JvdXBDb2xTdHlsZToge30sXG4gICAgZ2V0Q29sR3JvdXBDb2xQcm9wczogZW1wdHlPYmosXG4gICAgLy8gSGVhZGVycyBvbmx5XG4gICAgaGVhZGVyQ2xhc3NOYW1lOiAnJyxcbiAgICBoZWFkZXJTdHlsZToge30sXG4gICAgZ2V0SGVhZGVyUHJvcHM6IGVtcHR5T2JqLFxuICAgIC8vIEZvb3RlcnMgb25seVxuICAgIGZvb3RlckNsYXNzTmFtZTogJycsXG4gICAgZm9vdGVyU3R5bGU6IHt9LFxuICAgIGdldEZvb3RlclByb3BzOiBlbXB0eU9iaixcbiAgICBmaWx0ZXJNZXRob2Q6IHVuZGVmaW5lZCxcbiAgICBzb3J0TWV0aG9kOiB1bmRlZmluZWQsXG4gIH0sXG5cbiAgLy8gR2xvYmFsIEV4cGFuZGVyIENvbHVtbiBEZWZhdWx0c1xuICBleHBhbmRlckRlZmF1bHRzOiB7XG4gICAgc29ydGFibGU6IGZhbHNlLFxuICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgZmlsdGVyYWJsZTogZmFsc2UsXG4gICAgd2lkdGg6IDM1LFxuICB9LFxuXG4gIHBpdm90RGVmYXVsdHM6IHtcbiAgICAvLyBleHRlbmQgdGhlIGRlZmF1bHRzIGZvciBwaXZvdGVkIGNvbHVtbnMgaGVyZVxuICB9LFxuXG4gIC8vIFRleHRcbiAgcHJldmlvdXNUZXh0OiAnUHJldmlvdXMnLFxuICBuZXh0VGV4dDogJ05leHQnLFxuICBsb2FkaW5nVGV4dDogJ0xvYWRpbmcuLi4nLFxuICBub0RhdGFUZXh0OiAnTm8gcm93cyBmb3VuZCcsXG4gIHBhZ2VUZXh0OiAnUGFnZScsXG4gIG9mVGV4dDogJ29mJyxcbiAgcm93c1RleHQ6ICdyb3dzJyxcblxuICAvLyBDb21wb25lbnRzXG4gIFRhYmxlQ29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdGFibGUnLCAndGFibGUnKSxcbiAgVGhlYWRDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC10aGVhZCcsICd0aGVhZCcpLFxuICBUYm9keUNvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXRib2R5JywgJ3Rib2R5JyksXG4gIFRyQ29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdHInLCAndHInKSxcbiAgVGhDb21wb25lbnQ6ICh7IHRvZ2dsZVNvcnQsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dGhcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3J0LXRoJyl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgIHRvZ2dsZVNvcnQgJiYgdG9nZ2xlU29ydChlKVxuICAgICAgICB9fVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC90aD5cbiAgICApXG4gIH0sXG4gIFRkQ29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdGQnLCAndGQnKSxcbiAgVGZvb3RDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC10Zm9vdCcsICd0Zm9vdCcpLFxuICBGaWx0ZXJDb21wb25lbnQ6ICh7IGZpbHRlciwgb25DaGFuZ2UgfSkgPT5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9J3RleHQnXG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgfX1cbiAgICAgIHZhbHVlPXtmaWx0ZXIgPyBmaWx0ZXIudmFsdWUgOiAnJ31cbiAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgIC8+LFxuICBFeHBhbmRlckNvbXBvbmVudDogKHsgaXNFeHBhbmRlZCB9KSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdydC1leHBhbmRlcicsIGlzRXhwYW5kZWQgJiYgJy1vcGVuJyl9PlxuICAgICAgJmJ1bGw7XG4gICAgPC9kaXY+LFxuICBQaXZvdFZhbHVlQ29tcG9uZW50OiAoeyBzdWJSb3dzLCB2YWx1ZSB9KSA9PlxuICAgIDxzcGFuPnt2YWx1ZX0ge3N1YlJvd3MgJiYgYCgke3N1YlJvd3MubGVuZ3RofSlgfTwvc3Bhbj4sXG4gIEFnZ3JlZ2F0ZWRDb21wb25lbnQ6ICh7IHN1YlJvd3MsIGNvbHVtbiB9KSA9PiB7XG4gICAgY29uc3QgcHJldmlld1ZhbHVlcyA9IHN1YlJvd3NcbiAgICAgIC5maWx0ZXIoZCA9PiB0eXBlb2YgZFtjb2x1bW4uaWRdICE9PSAndW5kZWZpbmVkJylcbiAgICAgIC5tYXAoKHJvdywgaSkgPT5cbiAgICAgICAgPHNwYW4ga2V5PXtpfT5cbiAgICAgICAgICB7cm93W2NvbHVtbi5pZF19e2kgPCBzdWJSb3dzLmxlbmd0aCAtIDEgPyAnLCAnIDogJyd9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIClcbiAgICByZXR1cm4gPHNwYW4+e3ByZXZpZXdWYWx1ZXN9PC9zcGFuPlxuICB9LFxuICBQaXZvdENvbXBvbmVudDogdW5kZWZpbmVkLCAvLyB0aGlzIGlzIGEgY29tcHV0ZWQgZGVmYXVsdCBnZW5lcmF0ZWQgdXNpbmdcbiAgLy8gdGhlIEV4cGFuZGVyQ29tcG9uZW50IGFuZCBQaXZvdFZhbHVlQ29tcG9uZW50IGF0IHJ1bi10aW1lIGluIG1ldGhvZHMuanNcbiAgUGFnaW5hdGlvbkNvbXBvbmVudDogUGFnaW5hdGlvbixcbiAgUHJldmlvdXNDb21wb25lbnQ6IHVuZGVmaW5lZCxcbiAgTmV4dENvbXBvbmVudDogdW5kZWZpbmVkLFxuICBMb2FkaW5nQ29tcG9uZW50OiAoeyBjbGFzc05hbWUsIGxvYWRpbmcsIGxvYWRpbmdUZXh0LCAuLi5yZXN0IH0pID0+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctbG9hZGluZycsIHsgJy1hY3RpdmUnOiBsb2FkaW5nIH0sIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nLWxvYWRpbmctaW5uZXInPlxuICAgICAgICB7bG9hZGluZ1RleHR9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4sXG4gIE5vRGF0YUNvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LW5vRGF0YScpLFxuICBSZXNpemVyQ29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtcmVzaXplcicpLFxuICBQYWRSb3dDb21wb25lbnQ6ICgpID0+IDxzcGFuPiZuYnNwOzwvc3Bhbj4sXG59XG4iXX0=