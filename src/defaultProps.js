import React from 'react'
import classnames from 'classnames'
//
import _ from './utils'
import Pagination from './pagination'
import ReactTableWrapper from './wrapper'
import SortOrder from './sort'

const emptyObj = () => ({})

export default {
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
  defaultFilterMethod: (filter, row, column) => {
    const id = filter.pivotId || filter.id
    return row[id] !== undefined
      ? String(row[id]).startsWith(filter.value)
      : true
  },
  defaultSortMethod: (a, b) => {
    // force null and undefined to the bottom
    a = a === null || a === undefined ? '' : a
    b = b === null || b === undefined ? '' : b
    // force any string values to lowercase
    a = typeof a === 'string' ? a.toLowerCase() : a
    b = typeof b === 'string' ? b.toLowerCase() : b
    // Return either 1 or -1 to indicate a sort priority
    if (a > b) {
      return 1
    }
    if (a < b) {
      return -1
    }
    // returning 0, undefined or any falsey value will use subsequent sorts or the index as a tiebreaker
    return 0
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
  onFetchData: () => null,

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
    displayPivotSubRows: false,
  },

  // Global Expander Column Defaults
  expanderDefaults: {
    sortable: false,
    resizable: false,
    filterable: false,
    width: 35,
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
  TableWrapper: ReactTableWrapper,
  TableComponent: _.makeTemplateComponent('rt-table', 'Table', 'table'),
  TheadComponent: _.makeTemplateComponent('rt-thead', 'Thead', 'thead'),
  TbodyComponent: _.makeTemplateComponent('rt-tbody', 'Tbody', 'tbody'),
  TrComponent: _.makeTemplateComponent('rt-tr', 'Tr', 'tr'),
  ThComponent: ({ toggleSort, className, children, ...rest }) => {
    return (
      <th
        className={classnames(className, 'rt-th')}
        onClick={e => {
          toggleSort && toggleSort(e)
        }}
        {...rest}
      >
        {children}
      </th>
    )
  },
  TdComponent: _.makeTemplateComponent('rt-td', 'Td', 'td'),
  TfootComponent: _.makeTemplateComponent('rt-tfoot', 'Tfoot', 'tfoot'),
  FilterComponent: ({ filter, onChange }) =>
    <input
      type='text'
      style={{
        width: '100%',
      }}
      value={filter ? filter.value : ''}
      onChange={event => onChange(event.target.value)}
    />,
  ExpanderComponent: ({ isExpanded }) =>
    <div className={classnames('rt-expander', isExpanded && '-open')}>
      &bull;
    </div>,
  PivotValueComponent: ({ subRows, value }) =>
    <span>
      {value} {subRows && `(${subRows.length})`}
    </span>,
  AggregatedComponent: ({ subRows, column }) => {
    const previewValues = subRows
      .filter(d => typeof d[column.id] !== 'undefined')
      .map((row, i) =>
        <span key={i}>
          {row[column.id]}
          {i < subRows.length - 1 ? ', ' : ''}
        </span>
      )
    return (
      <span>
        {previewValues}
      </span>
    )
  },
  PivotComponent: undefined, // this is a computed default generated using
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: Pagination,
  PreviousComponent: undefined,
  NextComponent: undefined,
  LoadingComponent: ({ className, loading, loadingText, ...rest }) =>
    <div
      className={classnames('-loading', { '-active': loading }, className)}
      {...rest}
    >
      <div className='-loading-inner'>
        {loadingText}
      </div>
    </div>,
  NoDataComponent: _.makeTemplateComponent('rt-noData', 'NoData'),
  ResizerComponent: _.makeTemplateComponent('rt-resizer', 'Resizer'),
  SortOrderComponent: SortOrder,
  PadRowComponent: () => <span>&nbsp;</span>,
}
