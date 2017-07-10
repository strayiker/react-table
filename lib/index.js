'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactTableDefaults = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _lifecycle = require('./lifecycle');

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _methods = require('./methods');

var _methods2 = _interopRequireDefault(_methods);

var _defaultProps = require('./defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var ReactTableDefaults = exports.ReactTableDefaults = _defaultProps2.default;

var ReactTable = function (_Methods) {
  _inherits(ReactTable, _Methods);

  function ReactTable(props) {
    _classCallCheck(this, ReactTable);

    var _this = _possibleConstructorReturn(this, (ReactTable.__proto__ || Object.getPrototypeOf(ReactTable)).call(this));

    _this.getResolvedState = _this.getResolvedState.bind(_this);
    _this.getDataModel = _this.getDataModel.bind(_this);
    _this.getSortedData = _this.getSortedData.bind(_this);
    _this.fireFetchData = _this.fireFetchData.bind(_this);
    _this.getPropOrState = _this.getPropOrState.bind(_this);
    _this.getStateOrProp = _this.getStateOrProp.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    _this.sortData = _this.sortData.bind(_this);
    _this.getMinRows = _this.getMinRows.bind(_this);
    _this.onPageChange = _this.onPageChange.bind(_this);
    _this.onPageSizeChange = _this.onPageSizeChange.bind(_this);
    _this.sortColumn = _this.sortColumn.bind(_this);
    _this.filterColumn = _this.filterColumn.bind(_this);
    _this.resizeColumnStart = _this.resizeColumnStart.bind(_this);
    _this.resizeColumnEnd = _this.resizeColumnEnd.bind(_this);
    _this.resizeColumnMoving = _this.resizeColumnMoving.bind(_this);

    _this.state = {
      page: 0,
      pageSize: props.defaultPageSize,
      sorted: props.defaultSorted,
      expanded: props.defaultExpanded,
      filtered: props.defaultFiltered,
      resized: props.defaultResized,
      currentlyResizing: false,
      skipNextSort: false
    };
    return _this;
  }

  _createClass(ReactTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var resolvedState = this.getResolvedState();
      var children = resolvedState.children,
          className = resolvedState.className,
          style = resolvedState.style,
          getProps = resolvedState.getProps,
          getTableProps = resolvedState.getTableProps,
          getColGroupColProps = resolvedState.getColGroupColProps,
          getTheadGroupProps = resolvedState.getTheadGroupProps,
          getTheadGroupTrProps = resolvedState.getTheadGroupTrProps,
          getTheadGroupThProps = resolvedState.getTheadGroupThProps,
          getTheadProps = resolvedState.getTheadProps,
          getTheadTrProps = resolvedState.getTheadTrProps,
          getTheadThProps = resolvedState.getTheadThProps,
          getTheadFilterProps = resolvedState.getTheadFilterProps,
          getTheadFilterTrProps = resolvedState.getTheadFilterTrProps,
          getTheadFilterThProps = resolvedState.getTheadFilterThProps,
          getTbodyProps = resolvedState.getTbodyProps,
          getTrProps = resolvedState.getTrProps,
          getTdProps = resolvedState.getTdProps,
          getTfootProps = resolvedState.getTfootProps,
          getTfootTrProps = resolvedState.getTfootTrProps,
          getTfootTdProps = resolvedState.getTfootTdProps,
          getPaginationProps = resolvedState.getPaginationProps,
          getLoadingProps = resolvedState.getLoadingProps,
          getNoDataProps = resolvedState.getNoDataProps,
          getResizerProps = resolvedState.getResizerProps,
          showPagination = resolvedState.showPagination,
          showPaginationTop = resolvedState.showPaginationTop,
          showPaginationBottom = resolvedState.showPaginationBottom,
          manual = resolvedState.manual,
          loadingText = resolvedState.loadingText,
          noDataText = resolvedState.noDataText,
          sortable = resolvedState.sortable,
          resizable = resolvedState.resizable,
          filterable = resolvedState.filterable,
          pivotIDKey = resolvedState.pivotIDKey,
          pivotValKey = resolvedState.pivotValKey,
          pivotBy = resolvedState.pivotBy,
          subRowsKey = resolvedState.subRowsKey,
          aggregatedKey = resolvedState.aggregatedKey,
          originalKey = resolvedState.originalKey,
          indexKey = resolvedState.indexKey,
          groupedByPivotKey = resolvedState.groupedByPivotKey,
          loading = resolvedState.loading,
          pageSize = resolvedState.pageSize,
          page = resolvedState.page,
          sorted = resolvedState.sorted,
          filtered = resolvedState.filtered,
          resized = resolvedState.resized,
          expanded = resolvedState.expanded,
          pages = resolvedState.pages,
          onExpandedChange = resolvedState.onExpandedChange,
          TableComponent = resolvedState.TableComponent,
          TheadComponent = resolvedState.TheadComponent,
          TbodyComponent = resolvedState.TbodyComponent,
          TrComponent = resolvedState.TrComponent,
          ThComponent = resolvedState.ThComponent,
          TdComponent = resolvedState.TdComponent,
          TfootComponent = resolvedState.TfootComponent,
          PaginationComponent = resolvedState.PaginationComponent,
          LoadingComponent = resolvedState.LoadingComponent,
          SubComponent = resolvedState.SubComponent,
          NoDataComponent = resolvedState.NoDataComponent,
          ResizerComponent = resolvedState.ResizerComponent,
          ExpanderComponent = resolvedState.ExpanderComponent,
          PivotValueComponent = resolvedState.PivotValueComponent,
          PivotComponent = resolvedState.PivotComponent,
          AggregatedComponent = resolvedState.AggregatedComponent,
          FilterComponent = resolvedState.FilterComponent,
          PadRowComponent = resolvedState.PadRowComponent,
          resolvedData = resolvedState.resolvedData,
          allVisibleColumns = resolvedState.allVisibleColumns,
          headerGroups = resolvedState.headerGroups,
          hasHeaderGroups = resolvedState.hasHeaderGroups,
          sortedData = resolvedState.sortedData,
          currentlyResizing = resolvedState.currentlyResizing;

      // Pagination

      var startRow = pageSize * page;
      var endRow = startRow + pageSize;
      var pageRows = manual ? resolvedData : sortedData.slice(startRow, endRow);
      var minRows = this.getMinRows();
      var padRows = _utils2.default.range(Math.max(minRows - pageRows.length, 0));

      var hasColumnFooter = allVisibleColumns.some(function (d) {
        return d.Footer;
      });
      var hasFilters = filterable || allVisibleColumns.some(function (d) {
        return d.filterable;
      });

      var recurseRowsViewIndex = function recurseRowsViewIndex(rows) {
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

        return [rows.map(function (row, i) {
          index++;
          var rowWithViewIndex = _extends({}, row, {
            _viewIndex: index
          });
          var newPath = path.concat([i]);
          if (rowWithViewIndex[subRowsKey] && _utils2.default.get(expanded, newPath)) {
            ;
            var _recurseRowsViewIndex = recurseRowsViewIndex(rowWithViewIndex[subRowsKey], newPath, index);

            var _recurseRowsViewIndex2 = _slicedToArray(_recurseRowsViewIndex, 2);

            rowWithViewIndex[subRowsKey] = _recurseRowsViewIndex2[0];
            index = _recurseRowsViewIndex2[1];
          }
          return rowWithViewIndex;
        }), index];
      };
      var _recurseRowsViewIndex3 = recurseRowsViewIndex(pageRows);

      var _recurseRowsViewIndex4 = _slicedToArray(_recurseRowsViewIndex3, 1);

      pageRows = _recurseRowsViewIndex4[0];


      var canPrevious = page > 0;
      var canNext = page + 1 < pages;

      var rowIndex = -1;

      var finalState = _extends({}, resolvedState, {
        startRow: startRow,
        endRow: endRow,
        pageRows: pageRows,
        minRows: minRows,
        padRows: padRows,
        hasColumnFooter: hasColumnFooter,
        canPrevious: canPrevious,
        canNext: canNext
      });

      // Visual Components

      var makeColGroup = function makeColGroup() {
        return _react2.default.createElement(
          'colgroup',
          null,
          allVisibleColumns.map(makeCol)
        );
      };

      var makeCol = function makeCol(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};

        var colgroupColProps = _utils2.default.splitProps(getColGroupColProps(finalState, undefined, column, _this2));
        var columnColgroupColProps = _utils2.default.splitProps(column.getColGroupColProps(finalState, undefined, column, _this2));

        var classes = [column.colGroupColClassName, colgroupColProps.className, columnColgroupColProps.className];

        var styles = _extends({}, column.colGroupColStyle, colgroupColProps.style, columnColgroupColProps.style);
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);

        var isLast = i === allVisibleColumns.length - 1;

        return _react2.default.createElement('col', {
          key: i + '-' + column.id,
          className: (0, _classnames2.default)('rt-colgroup-col', classes, { '-dummy': isLast }),
          style: _extends({}, styles, {
            width: width,
            maxWidth: maxWidth
          })
        });
      };

      var makeHeaderGroups = function makeHeaderGroups() {
        var theadGroupProps = _utils2.default.splitProps(getTheadGroupProps(finalState, undefined, undefined, _this2));
        var theadGroupTrProps = _utils2.default.splitProps(getTheadGroupTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-headerGroups', theadGroupProps.className),
            style: theadGroupProps.style
          }, theadGroupProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadGroupTrProps.className,
              style: theadGroupTrProps.style
            }, theadGroupTrProps.rest),
            headerGroups.map(makeHeaderGroup)
          )
        );
      };

      var makeHeaderGroup = function makeHeaderGroup(column, i) {
        var theadGroupThProps = _utils2.default.splitProps(getTheadGroupThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadGroupThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadGroupThProps.style, columnHeaderProps.style);

        var colSpan = column.columns.length;

        var rest = _extends({}, theadGroupThProps.rest, columnHeaderProps.rest, {
          colSpan: colSpan
        });

        var isLast = i === headerGroups.length - 1;

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, { '-dummy': isLast }),
            style: styles
          }, rest),
          _utils2.default.normalizeComponent(column.Header, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeHeaders = function makeHeaders() {
        var theadProps = _utils2.default.splitProps(getTheadProps(finalState, undefined, undefined, _this2));
        var theadTrProps = _utils2.default.splitProps(getTheadTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-header', theadProps.className),
            style: theadProps.style
          }, theadProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadTrProps.className,
              style: theadTrProps.style
            }, theadTrProps.rest),
            allVisibleColumns.map(makeHeader)
          )
        );
      };

      var makeHeader = function makeHeader(column, i) {
        var sort = sorted.find(function (d) {
          return d.id === column.id;
        });
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var theadThProps = _utils2.default.splitProps(getTheadThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadThProps.rest, columnHeaderProps.rest);

        var isResizable = _utils2.default.getFirstDefined(column.resizable, resizable, false);
        var resizer = isResizable ? _react2.default.createElement(ResizerComponent, _extends({
          onMouseDown: function onMouseDown(e) {
            return _this2.resizeColumnStart(column, e, false);
          },
          onTouchStart: function onTouchStart(e) {
            return _this2.resizeColumnStart(column, e, true);
          }
        }, resizerProps)) : null;

        var isSortable = _utils2.default.getFirstDefined(column.sortable, sortable, false);
        var isLast = i === allVisibleColumns.length - 1;

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, 'rt-resizable-header', {
              '-cursor-pointer': isSortable,
              '-sort-desc': sort && sort.desc,
              '-sort-asc': sort && !sort.desc,
              '-hidden': !show,
              '-dummy': isLast,
              'rt-header-pivot': pivotBy && pivotBy.slice(0, -1).includes(column.id)
            }),
            style: styles,
            toggleSort: function toggleSort(e) {
              isSortable && _this2.sortColumn(column, e.shiftKey);
            }
          }, rest),
          _react2.default.createElement(
            'div',
            { className: 'rt-resizable-header-content' },
            _utils2.default.normalizeComponent(column.Header, {
              data: sortedData,
              column: column
            })
          ),
          resizer
        );
      };

      var makeFilters = function makeFilters() {
        var theadFilterProps = _utils2.default.splitProps(getTheadFilterProps(finalState, undefined, undefined, _this2));
        var theadFilterTrProps = _utils2.default.splitProps(getTheadFilterTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-filters', theadFilterProps.className),
            style: theadFilterProps.style
          }, theadFilterProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadFilterTrProps.className,
              style: theadFilterTrProps.style
            }, theadFilterTrProps.rest),
            allVisibleColumns.map(makeFilter)
          )
        );
      };

      var makeFilter = function makeFilter(column, i) {
        var theadFilterThProps = _utils2.default.splitProps(getTheadFilterThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadFilterThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadFilterThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadFilterThProps.rest, columnHeaderProps.rest);

        var filter = filtered.find(function (filter) {
          return filter.id === column.id;
        });

        var ResolvedFilterComponent = column.Filter || FilterComponent;

        var isFilterable = _utils2.default.getFirstDefined(column.filterable, filterable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: styles
          }, rest),
          isFilterable ? _utils2.default.normalizeComponent(ResolvedFilterComponent, {
            column: column,
            filter: filter,
            onChange: function onChange(value) {
              return _this2.filterColumn(column, value);
            }
          }, _defaultProps2.default.column.Filter) : null
        );
      };

      var makePageRow = function makePageRow(row, i) {
        var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        var rowInfo = {
          original: row[originalKey],
          row: row,
          index: row[indexKey],
          viewIndex: ++rowIndex,
          level: path.length,
          nestingPath: path.concat([i]),
          aggregated: row[aggregatedKey],
          groupedByPivot: row[groupedByPivotKey],
          subRows: row[subRowsKey]
        };
        var isExpanded = _utils2.default.get(expanded, rowInfo.nestingPath);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, rowInfo, undefined, _this2));
        return [_react2.default.createElement(
          TrComponent,
          _extends({
            key: rowInfo.nestingPath.join('_'),
            className: (0, _classnames2.default)(trProps.className, row._viewIndex % 2 ? '-even' : '-odd'),
            style: trProps.style
          }, trProps.rest),
          allVisibleColumns.map(function (column, i2) {
            var show = typeof column.show === 'function' ? column.show() : column.show;
            var tdProps = _utils2.default.splitProps(getTdProps(finalState, rowInfo, column, _this2));
            var columnProps = _utils2.default.splitProps(column.getProps(finalState, rowInfo, column, _this2));

            var classes = [tdProps.className, column.className, columnProps.className];

            var styles = _extends({}, tdProps.style, column.style, columnProps.style);

            var cellInfo = _extends({}, rowInfo, {
              isExpanded: isExpanded,
              column: _extends({}, column),
              value: rowInfo.row[column.id],
              pivoted: column.pivoted,
              expander: column.expander,
              resized: resized,
              show: show,
              tdProps: tdProps,
              columnProps: columnProps,
              classes: classes,
              styles: styles
            });

            var value = cellInfo.value;

            var interactionProps = void 0;
            var isBranch = void 0;
            var isPreview = void 0;

            var onExpanderClick = function onExpanderClick(e) {
              var newExpanded = _utils2.default.clone(expanded);
              if (isExpanded) {
                newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, false);
              } else {
                newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, {});
              }

              return _this2.setStateWithData({
                expanded: newExpanded
              }, function () {
                onExpandedChange && onExpandedChange(newExpanded, cellInfo.nestingPath, e);
              });
            };

            // Default to a standard cell
            var resolvedCell = _utils2.default.normalizeComponent(column.Cell, cellInfo, value);

            // Resolve Renderers
            var ResolvedAggregatedComponent = column.Aggregated || (!column.aggregate ? AggregatedComponent : column.Cell);
            var ResolvedExpanderComponent = column.Expander || ExpanderComponent;
            var ResolvedPivotValueComponent = column.PivotValue || PivotValueComponent;
            var DefaultResolvedPivotComponent = PivotComponent || function (props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(ResolvedExpanderComponent, props),
                _react2.default.createElement(ResolvedPivotValueComponent, props)
              );
            };
            var ResolvedPivotComponent = column.Pivot || DefaultResolvedPivotComponent;

            // Is this cell expandable?
            if (cellInfo.pivoted || cellInfo.expander) {
              // Make it expandable by defualt
              cellInfo.expandable = true;
              interactionProps = {
                onClick: onExpanderClick
              };
              // If pivoted, has no subRows, and does not have a subComponent, do not make expandable
              if (cellInfo.pivoted) {
                if (!cellInfo.subRows) {
                  if (!SubComponent) {
                    cellInfo.expandable = false;
                    interactionProps = {};
                  }
                }
              }
            }

            if (cellInfo.pivoted) {
              // Is this column a branch?
              isBranch = rowInfo.row[pivotIDKey] === column.id && cellInfo.subRows;
              // Should this column be blank?
              isPreview = pivotBy.indexOf(column.id) > pivotBy.indexOf(rowInfo.row[pivotIDKey]) && cellInfo.subRows;
              // Pivot Cell Render Override
              if (isBranch) {
                // isPivot
                resolvedCell = _utils2.default.normalizeComponent(ResolvedPivotComponent, _extends({}, cellInfo, {
                  value: row[pivotValKey]
                }), row[pivotValKey]);
              } else if (isPreview) {
                // Show the pivot preview
                resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
              } else {
                resolvedCell = null;
              }
            } else if (cellInfo.aggregated) {
              resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
            }

            if (cellInfo.expander) {
              resolvedCell = _utils2.default.normalizeComponent(ResolvedExpanderComponent, cellInfo, row[pivotValKey]);
              if (pivotBy) {
                if (cellInfo.groupedByPivot) {
                  resolvedCell = null;
                }
                if (!cellInfo.subRows && !SubComponent) {
                  resolvedCell = null;
                }
              }
            }

            // Return the cell
            return _react2.default.createElement(
              TdComponent,
              _extends({
                key: i2 + '-' + column.id,
                className: (0, _classnames2.default)(classes, !show && '-hidden', cellInfo.expandable && 'rt-expandable', (isBranch || isPreview) && 'rt-pivot'),
                style: styles
              }, interactionProps, tdProps.rest, columnProps.rest),
              resolvedCell
            );
          })
        ), rowInfo.subRows && isExpanded && rowInfo.subRows.map(function (d, i) {
          return makePageRow(d, i, rowInfo.nestingPath);
        }), SubComponent && !rowInfo.subRows && isExpanded && SubComponent(rowInfo)];
      };

      var makePadRow = function makePadRow(row, i) {
        var trProps = _utils2.default.splitProps(getTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TrComponent,
          {
            className: (0, _classnames2.default)('-padRow', (pageRows.length + i) % 2 ? '-even' : '-odd', trProps.className),
            style: trProps.style || {}
          },
          allVisibleColumns.map(makePadColumn)
        );
      };

      var makePadColumn = function makePadColumn(column, i) {
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var tdProps = _utils2.default.splitProps(getTdProps(finalState, undefined, column, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));

        var classes = [tdProps.className, column.className, columnProps.className];

        var styles = _extends({}, tdProps.style, column.style, columnProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && '-hidden'),
            style: styles
          }, tdProps.rest),
          _utils2.default.normalizeComponent(PadRowComponent)
        );
      };

      var makeColumnFooters = function makeColumnFooters() {
        var tFootProps = getTfootProps(finalState, undefined, undefined, _this2);
        var tFootTrProps = _utils2.default.splitProps(getTfootTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TfootComponent,
          _extends({
            className: tFootProps.className,
            style: tFootProps.style
          }, tFootProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(tFootTrProps.className),
              style: tFootTrProps.style
            }, tFootTrProps.rest),
            allVisibleColumns.map(makeColumnFooter)
          )
        );
      };

      var makeColumnFooter = function makeColumnFooter(column, i) {
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var tFootTdProps = _utils2.default.splitProps(getTfootTdProps(finalState, undefined, undefined, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));
        var columnFooterProps = _utils2.default.splitProps(column.getFooterProps(finalState, undefined, column, _this2));

        var classes = [tFootTdProps.className, column.className, columnProps.className, columnFooterProps.className];

        var styles = _extends({}, tFootTdProps.style, column.style, columnProps.style, columnFooterProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && '-hidden'),
            style: styles
          }, columnProps.rest, tFootTdProps.rest, columnFooterProps.rest),
          _utils2.default.normalizeComponent(column.Footer, {
            data: sortedData,
            column: column
          })
        );
      };

      var makePagination = function makePagination() {
        var paginationProps = _utils2.default.splitProps(getPaginationProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(PaginationComponent, _extends({}, resolvedState, {
          pages: pages,
          canPrevious: canPrevious,
          canNext: canNext,
          onPageChange: _this2.onPageChange,
          onPageSizeChange: _this2.onPageSizeChange,
          className: paginationProps.className,
          style: paginationProps.style
        }, paginationProps.rest));
      };

      var rootProps = _utils2.default.splitProps(getProps(finalState, undefined, undefined, this));
      var tableProps = _utils2.default.splitProps(getTableProps(finalState, undefined, undefined, this));
      var tBodyProps = _utils2.default.splitProps(getTbodyProps(finalState, undefined, undefined, this));
      var loadingProps = getLoadingProps(finalState, undefined, undefined, this);
      var noDataProps = getNoDataProps(finalState, undefined, undefined, this);
      var resizerProps = getResizerProps(finalState, undefined, undefined, this);

      var makeTable = function makeTable() {
        var pagination = makePagination();
        return _react2.default.createElement(
          'div',
          _extends({
            className: (0, _classnames2.default)('ReactTable', className, rootProps.className),
            style: _extends({}, style, rootProps.style)
          }, rootProps.rest),
          showPagination && showPaginationTop ? _react2.default.createElement(
            'div',
            { className: 'pagination-top' },
            pagination
          ) : null,
          _react2.default.createElement(
            'div',
            { className: 'rt-table-wrapper' },
            _react2.default.createElement(
              TableComponent,
              _extends({
                className: (0, _classnames2.default)(tableProps.className, currentlyResizing ? 'rt-resizing' : ''),
                style: tableProps.style
              }, tableProps.rest),
              makeColGroup(),
              hasHeaderGroups ? makeHeaderGroups() : null,
              makeHeaders(),
              hasFilters ? makeFilters() : null,
              _react2.default.createElement(
                TbodyComponent,
                _extends({
                  className: (0, _classnames2.default)(tBodyProps.className),
                  style: tBodyProps.style
                }, tBodyProps.rest),
                pageRows.map(function (d, i) {
                  return makePageRow(d, i);
                }),
                padRows.map(makePadRow)
              ),
              hasColumnFooter ? makeColumnFooters() : null
            )
          ),
          showPagination && showPaginationBottom ? _react2.default.createElement(
            'div',
            { className: 'pagination-bottom' },
            pagination
          ) : null,
          !pageRows.length && _react2.default.createElement(
            NoDataComponent,
            noDataProps,
            _utils2.default.normalizeComponent(noDataText)
          ),
          _react2.default.createElement(LoadingComponent, _extends({
            loading: loading,
            loadingText: loadingText
          }, loadingProps))
        );
      };

      // childProps are optionally passed to a function-as-a-child
      return children ? children(finalState, makeTable, this) : makeTable();
    }
  }]);

  return ReactTable;
}((0, _methods2.default)((0, _lifecycle2.default)(_react.Component)));

ReactTable.defaultProps = _defaultProps2.default;
exports.default = ReactTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0IiwicmVzb2x2ZWRTdGF0ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJnZXRQcm9wcyIsImdldFRhYmxlUHJvcHMiLCJnZXRDb2xHcm91cENvbFByb3BzIiwiZ2V0VGhlYWRHcm91cFByb3BzIiwiZ2V0VGhlYWRHcm91cFRyUHJvcHMiLCJnZXRUaGVhZEdyb3VwVGhQcm9wcyIsImdldFRoZWFkUHJvcHMiLCJnZXRUaGVhZFRyUHJvcHMiLCJnZXRUaGVhZFRoUHJvcHMiLCJnZXRUaGVhZEZpbHRlclByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJUclByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJUaFByb3BzIiwiZ2V0VGJvZHlQcm9wcyIsImdldFRyUHJvcHMiLCJnZXRUZFByb3BzIiwiZ2V0VGZvb3RQcm9wcyIsImdldFRmb290VHJQcm9wcyIsImdldFRmb290VGRQcm9wcyIsImdldFBhZ2luYXRpb25Qcm9wcyIsImdldExvYWRpbmdQcm9wcyIsImdldE5vRGF0YVByb3BzIiwiZ2V0UmVzaXplclByb3BzIiwic2hvd1BhZ2luYXRpb24iLCJzaG93UGFnaW5hdGlvblRvcCIsInNob3dQYWdpbmF0aW9uQm90dG9tIiwibWFudWFsIiwibG9hZGluZ1RleHQiLCJub0RhdGFUZXh0Iiwic29ydGFibGUiLCJyZXNpemFibGUiLCJmaWx0ZXJhYmxlIiwicGl2b3RJREtleSIsInBpdm90VmFsS2V5IiwicGl2b3RCeSIsInN1YlJvd3NLZXkiLCJhZ2dyZWdhdGVkS2V5Iiwib3JpZ2luYWxLZXkiLCJpbmRleEtleSIsImdyb3VwZWRCeVBpdm90S2V5IiwibG9hZGluZyIsInBhZ2VzIiwib25FeHBhbmRlZENoYW5nZSIsIlRhYmxlQ29tcG9uZW50IiwiVGhlYWRDb21wb25lbnQiLCJUYm9keUNvbXBvbmVudCIsIlRyQ29tcG9uZW50IiwiVGhDb21wb25lbnQiLCJUZENvbXBvbmVudCIsIlRmb290Q29tcG9uZW50IiwiUGFnaW5hdGlvbkNvbXBvbmVudCIsIkxvYWRpbmdDb21wb25lbnQiLCJTdWJDb21wb25lbnQiLCJOb0RhdGFDb21wb25lbnQiLCJSZXNpemVyQ29tcG9uZW50IiwiRXhwYW5kZXJDb21wb25lbnQiLCJQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RDb21wb25lbnQiLCJBZ2dyZWdhdGVkQ29tcG9uZW50IiwiRmlsdGVyQ29tcG9uZW50IiwiUGFkUm93Q29tcG9uZW50IiwicmVzb2x2ZWREYXRhIiwiYWxsVmlzaWJsZUNvbHVtbnMiLCJoZWFkZXJHcm91cHMiLCJoYXNIZWFkZXJHcm91cHMiLCJzb3J0ZWREYXRhIiwic3RhcnRSb3ciLCJlbmRSb3ciLCJwYWdlUm93cyIsInNsaWNlIiwibWluUm93cyIsInBhZFJvd3MiLCJyYW5nZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJoYXNDb2x1bW5Gb290ZXIiLCJzb21lIiwiZCIsIkZvb3RlciIsImhhc0ZpbHRlcnMiLCJyZWN1cnNlUm93c1ZpZXdJbmRleCIsInJvd3MiLCJwYXRoIiwiaW5kZXgiLCJtYXAiLCJyb3ciLCJpIiwicm93V2l0aFZpZXdJbmRleCIsIl92aWV3SW5kZXgiLCJuZXdQYXRoIiwiY29uY2F0IiwiZ2V0IiwiY2FuUHJldmlvdXMiLCJjYW5OZXh0Iiwicm93SW5kZXgiLCJmaW5hbFN0YXRlIiwibWFrZUNvbEdyb3VwIiwibWFrZUNvbCIsImNvbHVtbiIsInJlc2l6ZWRDb2wiLCJmaW5kIiwieCIsImlkIiwiY29sZ3JvdXBDb2xQcm9wcyIsInNwbGl0UHJvcHMiLCJ1bmRlZmluZWQiLCJjb2x1bW5Db2xncm91cENvbFByb3BzIiwiY2xhc3NlcyIsImNvbEdyb3VwQ29sQ2xhc3NOYW1lIiwic3R5bGVzIiwiY29sR3JvdXBDb2xTdHlsZSIsIndpZHRoIiwiZ2V0Rmlyc3REZWZpbmVkIiwidmFsdWUiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiaXNMYXN0IiwibWFrZUhlYWRlckdyb3VwcyIsInRoZWFkR3JvdXBQcm9wcyIsInRoZWFkR3JvdXBUclByb3BzIiwicmVzdCIsIm1ha2VIZWFkZXJHcm91cCIsInRoZWFkR3JvdXBUaFByb3BzIiwiY29sdW1uSGVhZGVyUHJvcHMiLCJnZXRIZWFkZXJQcm9wcyIsImhlYWRlckNsYXNzTmFtZSIsImhlYWRlclN0eWxlIiwiY29sU3BhbiIsImNvbHVtbnMiLCJub3JtYWxpemVDb21wb25lbnQiLCJIZWFkZXIiLCJkYXRhIiwibWFrZUhlYWRlcnMiLCJ0aGVhZFByb3BzIiwidGhlYWRUclByb3BzIiwibWFrZUhlYWRlciIsInNvcnQiLCJzaG93IiwidGhlYWRUaFByb3BzIiwiaXNSZXNpemFibGUiLCJyZXNpemVyIiwiZSIsInJlc2l6ZXJQcm9wcyIsImlzU29ydGFibGUiLCJkZXNjIiwiaW5jbHVkZXMiLCJzaGlmdEtleSIsIm1ha2VGaWx0ZXJzIiwidGhlYWRGaWx0ZXJQcm9wcyIsInRoZWFkRmlsdGVyVHJQcm9wcyIsIm1ha2VGaWx0ZXIiLCJ0aGVhZEZpbHRlclRoUHJvcHMiLCJmaWx0ZXIiLCJSZXNvbHZlZEZpbHRlckNvbXBvbmVudCIsIkZpbHRlciIsImlzRmlsdGVyYWJsZSIsIm9uQ2hhbmdlIiwibWFrZVBhZ2VSb3ciLCJyb3dJbmZvIiwib3JpZ2luYWwiLCJ2aWV3SW5kZXgiLCJsZXZlbCIsIm5lc3RpbmdQYXRoIiwiYWdncmVnYXRlZCIsImdyb3VwZWRCeVBpdm90Iiwic3ViUm93cyIsImlzRXhwYW5kZWQiLCJ0clByb3BzIiwiam9pbiIsImkyIiwidGRQcm9wcyIsImNvbHVtblByb3BzIiwiY2VsbEluZm8iLCJwaXZvdGVkIiwiZXhwYW5kZXIiLCJpbnRlcmFjdGlvblByb3BzIiwiaXNCcmFuY2giLCJpc1ByZXZpZXciLCJvbkV4cGFuZGVyQ2xpY2siLCJuZXdFeHBhbmRlZCIsImNsb25lIiwic2V0Iiwic2V0U3RhdGVXaXRoRGF0YSIsInJlc29sdmVkQ2VsbCIsIkNlbGwiLCJSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJBZ2dyZWdhdGVkIiwiYWdncmVnYXRlIiwiUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCIsIkV4cGFuZGVyIiwiUmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RWYWx1ZSIsIkRlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50IiwiUmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlBpdm90IiwiZXhwYW5kYWJsZSIsIm9uQ2xpY2siLCJpbmRleE9mIiwibWFrZVBhZFJvdyIsIm1ha2VQYWRDb2x1bW4iLCJtYWtlQ29sdW1uRm9vdGVycyIsInRGb290UHJvcHMiLCJ0Rm9vdFRyUHJvcHMiLCJtYWtlQ29sdW1uRm9vdGVyIiwidEZvb3RUZFByb3BzIiwiY29sdW1uRm9vdGVyUHJvcHMiLCJnZXRGb290ZXJQcm9wcyIsIm1ha2VQYWdpbmF0aW9uIiwicGFnaW5hdGlvblByb3BzIiwicm9vdFByb3BzIiwidGFibGVQcm9wcyIsInRCb2R5UHJvcHMiLCJsb2FkaW5nUHJvcHMiLCJub0RhdGFQcm9wcyIsIm1ha2VUYWJsZSIsInBhZ2luYXRpb24iLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBSkE7OztBQU1PLElBQU1BLHdFQUFOOztJQUVjQyxVOzs7QUFHbkIsc0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFHbEIsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUNBLFVBQUtFLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkYsSUFBbkIsT0FBckI7QUFDQSxVQUFLRyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJILElBQW5CLE9BQXJCO0FBQ0EsVUFBS0ksY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CSixJQUFwQixPQUF0QjtBQUNBLFVBQUtLLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkwsSUFBcEIsT0FBdEI7QUFDQSxVQUFLTSxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JOLElBQWhCLE9BQWxCO0FBQ0EsVUFBS08sUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNQLElBQWQsT0FBaEI7QUFDQSxVQUFLUSxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JSLElBQWhCLE9BQWxCO0FBQ0EsVUFBS1MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCVCxJQUFsQixPQUFwQjtBQUNBLFVBQUtVLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCVixJQUF0QixPQUF4QjtBQUNBLFVBQUtXLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQlgsSUFBaEIsT0FBbEI7QUFDQSxVQUFLWSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JaLElBQWxCLE9BQXBCO0FBQ0EsVUFBS2EsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJiLElBQXZCLE9BQXpCO0FBQ0EsVUFBS2MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCZCxJQUFyQixPQUF2QjtBQUNBLFVBQUtlLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCZixJQUF4QixPQUExQjs7QUFFQSxVQUFLZ0IsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sQ0FESztBQUVYQyxnQkFBVXBCLE1BQU1xQixlQUZMO0FBR1hDLGNBQVF0QixNQUFNdUIsYUFISDtBQUlYQyxnQkFBVXhCLE1BQU15QixlQUpMO0FBS1hDLGdCQUFVMUIsTUFBTTJCLGVBTEw7QUFNWEMsZUFBUzVCLE1BQU02QixjQU5KO0FBT1hDLHlCQUFtQixLQVBSO0FBUVhDLG9CQUFjO0FBUkgsS0FBYjtBQXBCa0I7QUE4Qm5COzs7OzZCQUVTO0FBQUE7O0FBQ1IsVUFBTUMsZ0JBQWdCLEtBQUsvQixnQkFBTCxFQUF0QjtBQURRLFVBR05nQyxRQUhNLEdBbUZKRCxhQW5GSSxDQUdOQyxRQUhNO0FBQUEsVUFJTkMsU0FKTSxHQW1GSkYsYUFuRkksQ0FJTkUsU0FKTTtBQUFBLFVBS05DLEtBTE0sR0FtRkpILGFBbkZJLENBS05HLEtBTE07QUFBQSxVQU1OQyxRQU5NLEdBbUZKSixhQW5GSSxDQU1OSSxRQU5NO0FBQUEsVUFPTkMsYUFQTSxHQW1GSkwsYUFuRkksQ0FPTkssYUFQTTtBQUFBLFVBUU5DLG1CQVJNLEdBbUZKTixhQW5GSSxDQVFOTSxtQkFSTTtBQUFBLFVBU05DLGtCQVRNLEdBbUZKUCxhQW5GSSxDQVNOTyxrQkFUTTtBQUFBLFVBVU5DLG9CQVZNLEdBbUZKUixhQW5GSSxDQVVOUSxvQkFWTTtBQUFBLFVBV05DLG9CQVhNLEdBbUZKVCxhQW5GSSxDQVdOUyxvQkFYTTtBQUFBLFVBWU5DLGFBWk0sR0FtRkpWLGFBbkZJLENBWU5VLGFBWk07QUFBQSxVQWFOQyxlQWJNLEdBbUZKWCxhQW5GSSxDQWFOVyxlQWJNO0FBQUEsVUFjTkMsZUFkTSxHQW1GSlosYUFuRkksQ0FjTlksZUFkTTtBQUFBLFVBZU5DLG1CQWZNLEdBbUZKYixhQW5GSSxDQWVOYSxtQkFmTTtBQUFBLFVBZ0JOQyxxQkFoQk0sR0FtRkpkLGFBbkZJLENBZ0JOYyxxQkFoQk07QUFBQSxVQWlCTkMscUJBakJNLEdBbUZKZixhQW5GSSxDQWlCTmUscUJBakJNO0FBQUEsVUFrQk5DLGFBbEJNLEdBbUZKaEIsYUFuRkksQ0FrQk5nQixhQWxCTTtBQUFBLFVBbUJOQyxVQW5CTSxHQW1GSmpCLGFBbkZJLENBbUJOaUIsVUFuQk07QUFBQSxVQW9CTkMsVUFwQk0sR0FtRkpsQixhQW5GSSxDQW9CTmtCLFVBcEJNO0FBQUEsVUFxQk5DLGFBckJNLEdBbUZKbkIsYUFuRkksQ0FxQk5tQixhQXJCTTtBQUFBLFVBc0JOQyxlQXRCTSxHQW1GSnBCLGFBbkZJLENBc0JOb0IsZUF0Qk07QUFBQSxVQXVCTkMsZUF2Qk0sR0FtRkpyQixhQW5GSSxDQXVCTnFCLGVBdkJNO0FBQUEsVUF3Qk5DLGtCQXhCTSxHQW1GSnRCLGFBbkZJLENBd0JOc0Isa0JBeEJNO0FBQUEsVUF5Qk5DLGVBekJNLEdBbUZKdkIsYUFuRkksQ0F5Qk51QixlQXpCTTtBQUFBLFVBMEJOQyxjQTFCTSxHQW1GSnhCLGFBbkZJLENBMEJOd0IsY0ExQk07QUFBQSxVQTJCTkMsZUEzQk0sR0FtRkp6QixhQW5GSSxDQTJCTnlCLGVBM0JNO0FBQUEsVUE0Qk5DLGNBNUJNLEdBbUZKMUIsYUFuRkksQ0E0Qk4wQixjQTVCTTtBQUFBLFVBNkJOQyxpQkE3Qk0sR0FtRkozQixhQW5GSSxDQTZCTjJCLGlCQTdCTTtBQUFBLFVBOEJOQyxvQkE5Qk0sR0FtRko1QixhQW5GSSxDQThCTjRCLG9CQTlCTTtBQUFBLFVBK0JOQyxNQS9CTSxHQW1GSjdCLGFBbkZJLENBK0JONkIsTUEvQk07QUFBQSxVQWdDTkMsV0FoQ00sR0FtRko5QixhQW5GSSxDQWdDTjhCLFdBaENNO0FBQUEsVUFpQ05DLFVBakNNLEdBbUZKL0IsYUFuRkksQ0FpQ04rQixVQWpDTTtBQUFBLFVBa0NOQyxRQWxDTSxHQW1GSmhDLGFBbkZJLENBa0NOZ0MsUUFsQ007QUFBQSxVQW1DTkMsU0FuQ00sR0FtRkpqQyxhQW5GSSxDQW1DTmlDLFNBbkNNO0FBQUEsVUFvQ05DLFVBcENNLEdBbUZKbEMsYUFuRkksQ0FvQ05rQyxVQXBDTTtBQUFBLFVBc0NOQyxVQXRDTSxHQW1GSm5DLGFBbkZJLENBc0NObUMsVUF0Q007QUFBQSxVQXVDTkMsV0F2Q00sR0FtRkpwQyxhQW5GSSxDQXVDTm9DLFdBdkNNO0FBQUEsVUF3Q05DLE9BeENNLEdBbUZKckMsYUFuRkksQ0F3Q05xQyxPQXhDTTtBQUFBLFVBeUNOQyxVQXpDTSxHQW1GSnRDLGFBbkZJLENBeUNOc0MsVUF6Q007QUFBQSxVQTBDTkMsYUExQ00sR0FtRkp2QyxhQW5GSSxDQTBDTnVDLGFBMUNNO0FBQUEsVUEyQ05DLFdBM0NNLEdBbUZKeEMsYUFuRkksQ0EyQ053QyxXQTNDTTtBQUFBLFVBNENOQyxRQTVDTSxHQW1GSnpDLGFBbkZJLENBNENOeUMsUUE1Q007QUFBQSxVQTZDTkMsaUJBN0NNLEdBbUZKMUMsYUFuRkksQ0E2Q04wQyxpQkE3Q007QUFBQSxVQStDTkMsT0EvQ00sR0FtRkozQyxhQW5GSSxDQStDTjJDLE9BL0NNO0FBQUEsVUFnRE52RCxRQWhETSxHQW1GSlksYUFuRkksQ0FnRE5aLFFBaERNO0FBQUEsVUFpRE5ELElBakRNLEdBbUZKYSxhQW5GSSxDQWlETmIsSUFqRE07QUFBQSxVQWtETkcsTUFsRE0sR0FtRkpVLGFBbkZJLENBa0ROVixNQWxETTtBQUFBLFVBbUROSSxRQW5ETSxHQW1GSk0sYUFuRkksQ0FtRE5OLFFBbkRNO0FBQUEsVUFvRE5FLE9BcERNLEdBbUZKSSxhQW5GSSxDQW9ETkosT0FwRE07QUFBQSxVQXFETkosUUFyRE0sR0FtRkpRLGFBbkZJLENBcUROUixRQXJETTtBQUFBLFVBc0ROb0QsS0F0RE0sR0FtRko1QyxhQW5GSSxDQXNETjRDLEtBdERNO0FBQUEsVUF1RE5DLGdCQXZETSxHQW1GSjdDLGFBbkZJLENBdURONkMsZ0JBdkRNO0FBQUEsVUF5RE5DLGNBekRNLEdBbUZKOUMsYUFuRkksQ0F5RE44QyxjQXpETTtBQUFBLFVBMEROQyxjQTFETSxHQW1GSi9DLGFBbkZJLENBMEROK0MsY0ExRE07QUFBQSxVQTJETkMsY0EzRE0sR0FtRkpoRCxhQW5GSSxDQTJETmdELGNBM0RNO0FBQUEsVUE0RE5DLFdBNURNLEdBbUZKakQsYUFuRkksQ0E0RE5pRCxXQTVETTtBQUFBLFVBNkROQyxXQTdETSxHQW1GSmxELGFBbkZJLENBNkROa0QsV0E3RE07QUFBQSxVQThETkMsV0E5RE0sR0FtRkpuRCxhQW5GSSxDQThETm1ELFdBOURNO0FBQUEsVUErRE5DLGNBL0RNLEdBbUZKcEQsYUFuRkksQ0ErRE5vRCxjQS9ETTtBQUFBLFVBZ0VOQyxtQkFoRU0sR0FtRkpyRCxhQW5GSSxDQWdFTnFELG1CQWhFTTtBQUFBLFVBaUVOQyxnQkFqRU0sR0FtRkp0RCxhQW5GSSxDQWlFTnNELGdCQWpFTTtBQUFBLFVBa0VOQyxZQWxFTSxHQW1GSnZELGFBbkZJLENBa0VOdUQsWUFsRU07QUFBQSxVQW1FTkMsZUFuRU0sR0FtRkp4RCxhQW5GSSxDQW1FTndELGVBbkVNO0FBQUEsVUFvRU5DLGdCQXBFTSxHQW1GSnpELGFBbkZJLENBb0VOeUQsZ0JBcEVNO0FBQUEsVUFxRU5DLGlCQXJFTSxHQW1GSjFELGFBbkZJLENBcUVOMEQsaUJBckVNO0FBQUEsVUFzRU5DLG1CQXRFTSxHQW1GSjNELGFBbkZJLENBc0VOMkQsbUJBdEVNO0FBQUEsVUF1RU5DLGNBdkVNLEdBbUZKNUQsYUFuRkksQ0F1RU40RCxjQXZFTTtBQUFBLFVBd0VOQyxtQkF4RU0sR0FtRko3RCxhQW5GSSxDQXdFTjZELG1CQXhFTTtBQUFBLFVBeUVOQyxlQXpFTSxHQW1GSjlELGFBbkZJLENBeUVOOEQsZUF6RU07QUFBQSxVQTBFTkMsZUExRU0sR0FtRkovRCxhQW5GSSxDQTBFTitELGVBMUVNO0FBQUEsVUE0RU5DLFlBNUVNLEdBbUZKaEUsYUFuRkksQ0E0RU5nRSxZQTVFTTtBQUFBLFVBNkVOQyxpQkE3RU0sR0FtRkpqRSxhQW5GSSxDQTZFTmlFLGlCQTdFTTtBQUFBLFVBOEVOQyxZQTlFTSxHQW1GSmxFLGFBbkZJLENBOEVOa0UsWUE5RU07QUFBQSxVQStFTkMsZUEvRU0sR0FtRkpuRSxhQW5GSSxDQStFTm1FLGVBL0VNO0FBQUEsVUFpRk5DLFVBakZNLEdBbUZKcEUsYUFuRkksQ0FpRk5vRSxVQWpGTTtBQUFBLFVBa0ZOdEUsaUJBbEZNLEdBbUZKRSxhQW5GSSxDQWtGTkYsaUJBbEZNOztBQXFGUjs7QUFDQSxVQUFNdUUsV0FBV2pGLFdBQVdELElBQTVCO0FBQ0EsVUFBTW1GLFNBQVNELFdBQVdqRixRQUExQjtBQUNBLFVBQUltRixXQUFXMUMsU0FBU21DLFlBQVQsR0FBd0JJLFdBQVdJLEtBQVgsQ0FBaUJILFFBQWpCLEVBQTJCQyxNQUEzQixDQUF2QztBQUNBLFVBQU1HLFVBQVUsS0FBSy9GLFVBQUwsRUFBaEI7QUFDQSxVQUFNZ0csVUFBVSxnQkFBRUMsS0FBRixDQUFRQyxLQUFLQyxHQUFMLENBQVNKLFVBQVVGLFNBQVNPLE1BQTVCLEVBQW9DLENBQXBDLENBQVIsQ0FBaEI7O0FBRUEsVUFBTUMsa0JBQWtCZCxrQkFBa0JlLElBQWxCLENBQXVCO0FBQUEsZUFBS0MsRUFBRUMsTUFBUDtBQUFBLE9BQXZCLENBQXhCO0FBQ0EsVUFBTUMsYUFBYWpELGNBQWMrQixrQkFBa0JlLElBQWxCLENBQXVCO0FBQUEsZUFBS0MsRUFBRS9DLFVBQVA7QUFBQSxPQUF2QixDQUFqQzs7QUFFQSxVQUFNa0QsdUJBQXVCLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsSUFBRCxFQUFpQztBQUFBLFlBQTFCQyxJQUEwQix1RUFBbkIsRUFBbUI7QUFBQSxZQUFmQyxLQUFlLHVFQUFQLENBQUMsQ0FBTTs7QUFDNUQsZUFBTyxDQUNMRixLQUFLRyxHQUFMLENBQVMsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDbkJIO0FBQ0EsY0FBTUksZ0NBQ0RGLEdBREM7QUFFSkcsd0JBQVlMO0FBRlIsWUFBTjtBQUlBLGNBQU1NLFVBQVVQLEtBQUtRLE1BQUwsQ0FBWSxDQUFDSixDQUFELENBQVosQ0FBaEI7QUFDQSxjQUFJQyxpQkFBaUJyRCxVQUFqQixLQUFnQyxnQkFBRXlELEdBQUYsQ0FBTXZHLFFBQU4sRUFBZ0JxRyxPQUFoQixDQUFwQyxFQUE4RDtBQUM1RDtBQUQ0RCx3Q0FDbkJULHFCQUN2Q08saUJBQWlCckQsVUFBakIsQ0FEdUMsRUFFdkN1RCxPQUZ1QyxFQUd2Q04sS0FIdUMsQ0FEbUI7O0FBQUE7O0FBQzFESSw2QkFBaUJyRCxVQUFqQixDQUQwRDtBQUM1QmlELGlCQUQ0QjtBQU03RDtBQUNELGlCQUFPSSxnQkFBUDtBQUNELFNBZkQsQ0FESyxFQWlCTEosS0FqQkssQ0FBUDtBQW1CRCxPQXBCRDtBQS9GUSxtQ0FvSE1ILHFCQUFxQmIsUUFBckIsQ0FwSE47O0FBQUE7O0FBb0hOQSxjQXBITTs7O0FBc0hSLFVBQU15QixjQUFjN0csT0FBTyxDQUEzQjtBQUNBLFVBQU04RyxVQUFVOUcsT0FBTyxDQUFQLEdBQVd5RCxLQUEzQjs7QUFFQSxVQUFJc0QsV0FBVyxDQUFDLENBQWhCOztBQUVBLFVBQU1DLDBCQUNEbkcsYUFEQztBQUVKcUUsMEJBRkk7QUFHSkMsc0JBSEk7QUFJSkMsMEJBSkk7QUFLSkUsd0JBTEk7QUFNSkMsd0JBTkk7QUFPSkssd0NBUEk7QUFRSmlCLGdDQVJJO0FBU0pDO0FBVEksUUFBTjs7QUFZQTs7QUFFQSxVQUFNRyxlQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixlQUNFO0FBQUE7QUFBQTtBQUNHbkMsNEJBQWtCdUIsR0FBbEIsQ0FBc0JhLE9BQXRCO0FBREgsU0FERjtBQUtELE9BTkQ7O0FBUUEsVUFBTUEsVUFBVSxTQUFWQSxPQUFVLENBQUNDLE1BQUQsRUFBU1osQ0FBVCxFQUFlO0FBQzdCLFlBQU1hLGFBQWEzRyxRQUFRNEcsSUFBUixDQUFhO0FBQUEsaUJBQUtDLEVBQUVDLEVBQUYsS0FBU0osT0FBT0ksRUFBckI7QUFBQSxTQUFiLEtBQXlDLEVBQTVEOztBQUVBLFlBQU1DLG1CQUFtQixnQkFBRUMsVUFBRixDQUN2QnRHLG9CQUFvQjZGLFVBQXBCLEVBQWdDVSxTQUFoQyxFQUEyQ1AsTUFBM0MsU0FEdUIsQ0FBekI7QUFHQSxZQUFNUSx5QkFBeUIsZ0JBQUVGLFVBQUYsQ0FDN0JOLE9BQU9oRyxtQkFBUCxDQUEyQjZGLFVBQTNCLEVBQXVDVSxTQUF2QyxFQUFrRFAsTUFBbEQsU0FENkIsQ0FBL0I7O0FBSUEsWUFBTVMsVUFBVSxDQUNkVCxPQUFPVSxvQkFETyxFQUVkTCxpQkFBaUJ6RyxTQUZILEVBR2Q0Ryx1QkFBdUI1RyxTQUhULENBQWhCOztBQU1BLFlBQU0rRyxzQkFDRFgsT0FBT1ksZ0JBRE4sRUFFRFAsaUJBQWlCeEcsS0FGaEIsRUFHRDJHLHVCQUF1QjNHLEtBSHRCLENBQU47QUFLQSxZQUFNZ0gsUUFBUSxnQkFBRUMsZUFBRixDQUNaYixXQUFXYyxLQURDLEVBRVpmLE9BQU9hLEtBRkssRUFHWmIsT0FBT2dCLFFBSEssQ0FBZDtBQUtBLFlBQU1DLFdBQVcsZ0JBQUVILGVBQUYsQ0FDZmIsV0FBV2MsS0FESSxFQUVmZixPQUFPYSxLQUZRLEVBR2ZiLE9BQU9pQixRQUhRLENBQWpCOztBQU1BLFlBQU1DLFNBQVM5QixNQUFNekIsa0JBQWtCYSxNQUFsQixHQUEyQixDQUFoRDs7QUFFQSxlQUNFO0FBQ0UsZUFBS1ksSUFBSSxHQUFKLEdBQVVZLE9BQU9JLEVBRHhCO0FBRUUscUJBQVcsMEJBQVcsaUJBQVgsRUFBOEJLLE9BQTlCLEVBQXVDLEVBQUUsVUFBVVMsTUFBWixFQUF2QyxDQUZiO0FBR0UsOEJBQ0tQLE1BREw7QUFFRUUsbUJBQU9BLEtBRlQ7QUFHRUksc0JBQVVBO0FBSFo7QUFIRixVQURGO0FBV0QsT0E3Q0Q7O0FBK0NBLFVBQU1FLG1CQUFtQixTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsWUFBTUMsa0JBQWtCLGdCQUFFZCxVQUFGLENBQ3RCckcsbUJBQW1CNEYsVUFBbkIsRUFBK0JVLFNBQS9CLEVBQTBDQSxTQUExQyxTQURzQixDQUF4QjtBQUdBLFlBQU1jLG9CQUFvQixnQkFBRWYsVUFBRixDQUN4QnBHLHFCQUFxQjJGLFVBQXJCLEVBQWlDVSxTQUFqQyxFQUE0Q0EsU0FBNUMsU0FEd0IsQ0FBMUI7QUFHQSxlQUNFO0FBQUMsd0JBQUQ7QUFBQTtBQUNFLHVCQUFXLDBCQUFXLGVBQVgsRUFBNEJhLGdCQUFnQnhILFNBQTVDLENBRGI7QUFFRSxtQkFBT3dILGdCQUFnQnZIO0FBRnpCLGFBR011SCxnQkFBZ0JFLElBSHRCO0FBS0U7QUFBQyx1QkFBRDtBQUFBO0FBQ0UseUJBQVdELGtCQUFrQnpILFNBRC9CO0FBRUUscUJBQU95SCxrQkFBa0J4SDtBQUYzQixlQUdNd0gsa0JBQWtCQyxJQUh4QjtBQUtHMUQseUJBQWFzQixHQUFiLENBQWlCcUMsZUFBakI7QUFMSDtBQUxGLFNBREY7QUFlRCxPQXRCRDs7QUF3QkEsVUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDdkIsTUFBRCxFQUFTWixDQUFULEVBQWU7QUFDckMsWUFBTW9DLG9CQUFvQixnQkFBRWxCLFVBQUYsQ0FDeEJuRyxxQkFBcUIwRixVQUFyQixFQUFpQ1UsU0FBakMsRUFBNENQLE1BQTVDLFNBRHdCLENBQTFCO0FBR0EsWUFBTXlCLG9CQUFvQixnQkFBRW5CLFVBQUYsQ0FDeEJOLE9BQU8wQixjQUFQLENBQXNCN0IsVUFBdEIsRUFBa0NVLFNBQWxDLEVBQTZDUCxNQUE3QyxTQUR3QixDQUExQjs7QUFJQSxZQUFNUyxVQUFVLENBQ2RULE9BQU8yQixlQURPLEVBRWRILGtCQUFrQjVILFNBRkosRUFHZDZILGtCQUFrQjdILFNBSEosQ0FBaEI7O0FBTUEsWUFBTStHLHNCQUNEWCxPQUFPNEIsV0FETixFQUVESixrQkFBa0IzSCxLQUZqQixFQUdENEgsa0JBQWtCNUgsS0FIakIsQ0FBTjs7QUFNQSxZQUFNZ0ksVUFBVTdCLE9BQU84QixPQUFQLENBQWV0RCxNQUEvQjs7QUFFQSxZQUFNOEMsb0JBQ0RFLGtCQUFrQkYsSUFEakIsRUFFREcsa0JBQWtCSCxJQUZqQjtBQUdKTztBQUhJLFVBQU47O0FBTUEsWUFBTVgsU0FBUzlCLE1BQU14QixhQUFhWSxNQUFiLEdBQXNCLENBQTNDOztBQUVBLGVBQ0U7QUFBQyxxQkFBRDtBQUFBO0FBQ0UsaUJBQUtZLElBQUksR0FBSixHQUFVWSxPQUFPSSxFQUR4QjtBQUVFLHVCQUFXLDBCQUFXSyxPQUFYLEVBQW9CLEVBQUUsVUFBVVMsTUFBWixFQUFwQixDQUZiO0FBR0UsbUJBQU9QO0FBSFQsYUFJTVcsSUFKTjtBQU1HLDBCQUFFUyxrQkFBRixDQUFxQi9CLE9BQU9nQyxNQUE1QixFQUFvQztBQUNuQ0Msa0JBQU1uRSxVQUQ2QjtBQUVuQ2tDLG9CQUFRQTtBQUYyQixXQUFwQztBQU5ILFNBREY7QUFhRCxPQTNDRDs7QUE2Q0EsVUFBTWtDLGNBQWMsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFlBQU1DLGFBQWEsZ0JBQUU3QixVQUFGLENBQ2pCbEcsY0FBY3lGLFVBQWQsRUFBMEJVLFNBQTFCLEVBQXFDQSxTQUFyQyxTQURpQixDQUFuQjtBQUdBLFlBQU02QixlQUFlLGdCQUFFOUIsVUFBRixDQUNuQmpHLGdCQUFnQndGLFVBQWhCLEVBQTRCVSxTQUE1QixFQUF1Q0EsU0FBdkMsU0FEbUIsQ0FBckI7QUFHQSxlQUNFO0FBQUMsd0JBQUQ7QUFBQTtBQUNFLHVCQUFXLDBCQUFXLFNBQVgsRUFBc0I0QixXQUFXdkksU0FBakMsQ0FEYjtBQUVFLG1CQUFPdUksV0FBV3RJO0FBRnBCLGFBR01zSSxXQUFXYixJQUhqQjtBQUtFO0FBQUMsdUJBQUQ7QUFBQTtBQUNFLHlCQUFXYyxhQUFheEksU0FEMUI7QUFFRSxxQkFBT3dJLGFBQWF2STtBQUZ0QixlQUdNdUksYUFBYWQsSUFIbkI7QUFLRzNELDhCQUFrQnVCLEdBQWxCLENBQXNCbUQsVUFBdEI7QUFMSDtBQUxGLFNBREY7QUFlRCxPQXRCRDs7QUF3QkEsVUFBTUEsYUFBYSxTQUFiQSxVQUFhLENBQUNyQyxNQUFELEVBQVNaLENBQVQsRUFBZTtBQUNoQyxZQUFNa0QsT0FBT3RKLE9BQU9rSCxJQUFQLENBQVk7QUFBQSxpQkFBS3ZCLEVBQUV5QixFQUFGLEtBQVNKLE9BQU9JLEVBQXJCO0FBQUEsU0FBWixDQUFiO0FBQ0EsWUFBTW1DLE9BQ0osT0FBT3ZDLE9BQU91QyxJQUFkLEtBQXVCLFVBQXZCLEdBQW9DdkMsT0FBT3VDLElBQVAsRUFBcEMsR0FBb0R2QyxPQUFPdUMsSUFEN0Q7QUFFQSxZQUFNQyxlQUFlLGdCQUFFbEMsVUFBRixDQUNuQmhHLGdCQUFnQnVGLFVBQWhCLEVBQTRCVSxTQUE1QixFQUF1Q1AsTUFBdkMsU0FEbUIsQ0FBckI7QUFHQSxZQUFNeUIsb0JBQW9CLGdCQUFFbkIsVUFBRixDQUN4Qk4sT0FBTzBCLGNBQVAsQ0FBc0I3QixVQUF0QixFQUFrQ1UsU0FBbEMsRUFBNkNQLE1BQTdDLFNBRHdCLENBQTFCOztBQUlBLFlBQU1TLFVBQVUsQ0FDZFQsT0FBTzJCLGVBRE8sRUFFZGEsYUFBYTVJLFNBRkMsRUFHZDZILGtCQUFrQjdILFNBSEosQ0FBaEI7O0FBTUEsWUFBTStHLHNCQUNEWCxPQUFPNEIsV0FETixFQUVEWSxhQUFhM0ksS0FGWixFQUdENEgsa0JBQWtCNUgsS0FIakIsQ0FBTjs7QUFNQSxZQUFNeUgsb0JBQ0RrQixhQUFhbEIsSUFEWixFQUVERyxrQkFBa0JILElBRmpCLENBQU47O0FBS0EsWUFBTW1CLGNBQWMsZ0JBQUUzQixlQUFGLENBQWtCZCxPQUFPckUsU0FBekIsRUFBb0NBLFNBQXBDLEVBQStDLEtBQS9DLENBQXBCO0FBQ0EsWUFBTStHLFVBQVVELGNBQ1gsOEJBQUMsZ0JBQUQ7QUFDRCx1QkFBYTtBQUFBLG1CQUFLLE9BQUtoSyxpQkFBTCxDQUF1QnVILE1BQXZCLEVBQStCMkMsQ0FBL0IsRUFBa0MsS0FBbEMsQ0FBTDtBQUFBLFdBRFo7QUFFRCx3QkFBYztBQUFBLG1CQUFLLE9BQUtsSyxpQkFBTCxDQUF1QnVILE1BQXZCLEVBQStCMkMsQ0FBL0IsRUFBa0MsSUFBbEMsQ0FBTDtBQUFBO0FBRmIsV0FHR0MsWUFISCxFQURXLEdBTVosSUFOSjs7QUFRQSxZQUFNQyxhQUFhLGdCQUFFL0IsZUFBRixDQUFrQmQsT0FBT3RFLFFBQXpCLEVBQW1DQSxRQUFuQyxFQUE2QyxLQUE3QyxDQUFuQjtBQUNBLFlBQU13RixTQUFTOUIsTUFBTXpCLGtCQUFrQmEsTUFBbEIsR0FBMkIsQ0FBaEQ7O0FBRUEsZUFDRTtBQUFDLHFCQUFEO0FBQUE7QUFDRSxpQkFBS1ksSUFBSSxHQUFKLEdBQVVZLE9BQU9JLEVBRHhCO0FBRUUsdUJBQVcsMEJBQ1RLLE9BRFMsRUFFVCxxQkFGUyxFQUdUO0FBQ0UsaUNBQW1Cb0MsVUFEckI7QUFFRSw0QkFBY1AsUUFBUUEsS0FBS1EsSUFGN0I7QUFHRSwyQkFBYVIsUUFBUSxDQUFDQSxLQUFLUSxJQUg3QjtBQUlFLHlCQUFXLENBQUNQLElBSmQ7QUFLRSx3QkFBVXJCLE1BTFo7QUFNRSxpQ0FBbUJuRixXQUFXQSxRQUFRbUMsS0FBUixDQUFjLENBQWQsRUFBaUIsQ0FBQyxDQUFsQixFQUFxQjZFLFFBQXJCLENBQThCL0MsT0FBT0ksRUFBckM7QUFOaEMsYUFIUyxDQUZiO0FBY0UsbUJBQU9PLE1BZFQ7QUFlRSx3QkFBWSx1QkFBSztBQUNma0MsNEJBQWMsT0FBS3RLLFVBQUwsQ0FBZ0J5SCxNQUFoQixFQUF3QjJDLEVBQUVLLFFBQTFCLENBQWQ7QUFDRDtBQWpCSCxhQWtCTTFCLElBbEJOO0FBb0JFO0FBQUE7QUFBQSxjQUFLLFdBQVUsNkJBQWY7QUFDRyw0QkFBRVMsa0JBQUYsQ0FBcUIvQixPQUFPZ0MsTUFBNUIsRUFBb0M7QUFDbkNDLG9CQUFNbkUsVUFENkI7QUFFbkNrQyxzQkFBUUE7QUFGMkIsYUFBcEM7QUFESCxXQXBCRjtBQTBCRzBDO0FBMUJILFNBREY7QUE4QkQsT0F0RUQ7O0FBd0VBLFVBQU1PLGNBQWMsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFlBQU1DLG1CQUFtQixnQkFBRTVDLFVBQUYsQ0FDdkIvRixvQkFBb0JzRixVQUFwQixFQUFnQ1UsU0FBaEMsRUFBMkNBLFNBQTNDLFNBRHVCLENBQXpCO0FBR0EsWUFBTTRDLHFCQUFxQixnQkFBRTdDLFVBQUYsQ0FDekI5RixzQkFBc0JxRixVQUF0QixFQUFrQ1UsU0FBbEMsRUFBNkNBLFNBQTdDLFNBRHlCLENBQTNCO0FBR0EsZUFDRTtBQUFDLHdCQUFEO0FBQUE7QUFDRSx1QkFBVywwQkFBVyxVQUFYLEVBQXVCMkMsaUJBQWlCdEosU0FBeEMsQ0FEYjtBQUVFLG1CQUFPc0osaUJBQWlCcko7QUFGMUIsYUFHTXFKLGlCQUFpQjVCLElBSHZCO0FBS0U7QUFBQyx1QkFBRDtBQUFBO0FBQ0UseUJBQVc2QixtQkFBbUJ2SixTQURoQztBQUVFLHFCQUFPdUosbUJBQW1CdEo7QUFGNUIsZUFHTXNKLG1CQUFtQjdCLElBSHpCO0FBS0czRCw4QkFBa0J1QixHQUFsQixDQUFzQmtFLFVBQXRCO0FBTEg7QUFMRixTQURGO0FBZUQsT0F0QkQ7O0FBd0JBLFVBQU1BLGFBQWEsU0FBYkEsVUFBYSxDQUFDcEQsTUFBRCxFQUFTWixDQUFULEVBQWU7QUFDaEMsWUFBTWlFLHFCQUFxQixnQkFBRS9DLFVBQUYsQ0FDekI3RixzQkFBc0JvRixVQUF0QixFQUFrQ1UsU0FBbEMsRUFBNkNQLE1BQTdDLFNBRHlCLENBQTNCO0FBR0EsWUFBTXlCLG9CQUFvQixnQkFBRW5CLFVBQUYsQ0FDeEJOLE9BQU8wQixjQUFQLENBQXNCN0IsVUFBdEIsRUFBa0NVLFNBQWxDLEVBQTZDUCxNQUE3QyxTQUR3QixDQUExQjs7QUFJQSxZQUFNUyxVQUFVLENBQ2RULE9BQU8yQixlQURPLEVBRWQwQixtQkFBbUJ6SixTQUZMLEVBR2Q2SCxrQkFBa0I3SCxTQUhKLENBQWhCOztBQU1BLFlBQU0rRyxzQkFDRFgsT0FBTzRCLFdBRE4sRUFFRHlCLG1CQUFtQnhKLEtBRmxCLEVBR0Q0SCxrQkFBa0I1SCxLQUhqQixDQUFOOztBQU1BLFlBQU15SCxvQkFDRCtCLG1CQUFtQi9CLElBRGxCLEVBRURHLGtCQUFrQkgsSUFGakIsQ0FBTjs7QUFLQSxZQUFNZ0MsU0FBU2xLLFNBQVM4RyxJQUFULENBQWM7QUFBQSxpQkFBVW9ELE9BQU9sRCxFQUFQLEtBQWNKLE9BQU9JLEVBQS9CO0FBQUEsU0FBZCxDQUFmOztBQUVBLFlBQU1tRCwwQkFBMEJ2RCxPQUFPd0QsTUFBUCxJQUFpQmhHLGVBQWpEOztBQUVBLFlBQU1pRyxlQUFlLGdCQUFFM0MsZUFBRixDQUNuQmQsT0FBT3BFLFVBRFksRUFFbkJBLFVBRm1CLEVBR25CLEtBSG1CLENBQXJCOztBQU1BLGVBQ0U7QUFBQyxxQkFBRDtBQUFBO0FBQ0UsaUJBQUt3RCxJQUFJLEdBQUosR0FBVVksT0FBT0ksRUFEeEI7QUFFRSx1QkFBVywwQkFBV0ssT0FBWCxDQUZiO0FBR0UsbUJBQU9FO0FBSFQsYUFJTVcsSUFKTjtBQU1HbUMseUJBQ0csZ0JBQUUxQixrQkFBRixDQUNBd0IsdUJBREEsRUFFQTtBQUNFdkQsMEJBREY7QUFFRXNELDBCQUZGO0FBR0VJLHNCQUFVO0FBQUEscUJBQVMsT0FBS2xMLFlBQUwsQ0FBa0J3SCxNQUFsQixFQUEwQmUsS0FBMUIsQ0FBVDtBQUFBO0FBSFosV0FGQSxFQU9BLHVCQUFhZixNQUFiLENBQW9Cd0QsTUFQcEIsQ0FESCxHQVVHO0FBaEJOLFNBREY7QUFvQkQsT0F2REQ7O0FBeURBLFVBQU1HLGNBQWMsU0FBZEEsV0FBYyxDQUFDeEUsR0FBRCxFQUFNQyxDQUFOLEVBQXVCO0FBQUEsWUFBZEosSUFBYyx1RUFBUCxFQUFPOztBQUN6QyxZQUFNNEUsVUFBVTtBQUNkQyxvQkFBVTFFLElBQUlqRCxXQUFKLENBREk7QUFFZGlELGVBQUtBLEdBRlM7QUFHZEYsaUJBQU9FLElBQUloRCxRQUFKLENBSE87QUFJZDJILHFCQUFXLEVBQUVsRSxRQUpDO0FBS2RtRSxpQkFBTy9FLEtBQUtSLE1BTEU7QUFNZHdGLHVCQUFhaEYsS0FBS1EsTUFBTCxDQUFZLENBQUNKLENBQUQsQ0FBWixDQU5DO0FBT2Q2RSxzQkFBWTlFLElBQUlsRCxhQUFKLENBUEU7QUFRZGlJLDBCQUFnQi9FLElBQUkvQyxpQkFBSixDQVJGO0FBU2QrSCxtQkFBU2hGLElBQUluRCxVQUFKO0FBVEssU0FBaEI7QUFXQSxZQUFNb0ksYUFBYSxnQkFBRTNFLEdBQUYsQ0FBTXZHLFFBQU4sRUFBZ0IwSyxRQUFRSSxXQUF4QixDQUFuQjtBQUNBLFlBQU1LLFVBQVUsZ0JBQUUvRCxVQUFGLENBQ2QzRixXQUFXa0YsVUFBWCxFQUF1QitELE9BQXZCLEVBQWdDckQsU0FBaEMsU0FEYyxDQUFoQjtBQUdBLGVBQU8sQ0FDTDtBQUFDLHFCQUFEO0FBQUE7QUFDRSxpQkFBS3FELFFBQVFJLFdBQVIsQ0FBb0JNLElBQXBCLENBQXlCLEdBQXpCLENBRFA7QUFFRSx1QkFBVywwQkFDVEQsUUFBUXpLLFNBREMsRUFFVHVGLElBQUlHLFVBQUosR0FBaUIsQ0FBakIsR0FBcUIsT0FBckIsR0FBK0IsTUFGdEIsQ0FGYjtBQU1FLG1CQUFPK0UsUUFBUXhLO0FBTmpCLGFBT013SyxRQUFRL0MsSUFQZDtBQVNHM0QsNEJBQWtCdUIsR0FBbEIsQ0FBc0IsVUFBQ2MsTUFBRCxFQUFTdUUsRUFBVCxFQUFnQjtBQUNyQyxnQkFBTWhDLE9BQ0osT0FBT3ZDLE9BQU91QyxJQUFkLEtBQXVCLFVBQXZCLEdBQW9DdkMsT0FBT3VDLElBQVAsRUFBcEMsR0FBb0R2QyxPQUFPdUMsSUFEN0Q7QUFFQSxnQkFBTWlDLFVBQVUsZ0JBQUVsRSxVQUFGLENBQ2QxRixXQUFXaUYsVUFBWCxFQUF1QitELE9BQXZCLEVBQWdDNUQsTUFBaEMsU0FEYyxDQUFoQjtBQUdBLGdCQUFNeUUsY0FBYyxnQkFBRW5FLFVBQUYsQ0FDbEJOLE9BQU9sRyxRQUFQLENBQWdCK0YsVUFBaEIsRUFBNEIrRCxPQUE1QixFQUFxQzVELE1BQXJDLFNBRGtCLENBQXBCOztBQUlBLGdCQUFNUyxVQUFVLENBQ2QrRCxRQUFRNUssU0FETSxFQUVkb0csT0FBT3BHLFNBRk8sRUFHZDZLLFlBQVk3SyxTQUhFLENBQWhCOztBQU1BLGdCQUFNK0csc0JBQ0Q2RCxRQUFRM0ssS0FEUCxFQUVEbUcsT0FBT25HLEtBRk4sRUFHRDRLLFlBQVk1SyxLQUhYLENBQU47O0FBTUEsZ0JBQU02Syx3QkFDRGQsT0FEQztBQUVKUSxvQ0FGSTtBQUdKcEUsbUNBQWFBLE1BQWIsQ0FISTtBQUlKZSxxQkFBTzZDLFFBQVF6RSxHQUFSLENBQVlhLE9BQU9JLEVBQW5CLENBSkg7QUFLSnVFLHVCQUFTM0UsT0FBTzJFLE9BTFo7QUFNSkMsd0JBQVU1RSxPQUFPNEUsUUFOYjtBQU9KdEwsOEJBUEk7QUFRSmlKLHdCQVJJO0FBU0ppQyw4QkFUSTtBQVVKQyxzQ0FWSTtBQVdKaEUsOEJBWEk7QUFZSkU7QUFaSSxjQUFOOztBQWVBLGdCQUFNSSxRQUFRMkQsU0FBUzNELEtBQXZCOztBQUVBLGdCQUFJOEQseUJBQUo7QUFDQSxnQkFBSUMsaUJBQUo7QUFDQSxnQkFBSUMsa0JBQUo7O0FBRUEsZ0JBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsSUFBSztBQUMzQixrQkFBSUMsY0FBYyxnQkFBRUMsS0FBRixDQUFRaE0sUUFBUixDQUFsQjtBQUNBLGtCQUFJa0wsVUFBSixFQUFnQjtBQUNkYSw4QkFBYyxnQkFBRUUsR0FBRixDQUFNRixXQUFOLEVBQW1CUCxTQUFTVixXQUE1QixFQUF5QyxLQUF6QyxDQUFkO0FBQ0QsZUFGRCxNQUVPO0FBQ0xpQiw4QkFBYyxnQkFBRUUsR0FBRixDQUFNRixXQUFOLEVBQW1CUCxTQUFTVixXQUE1QixFQUF5QyxFQUF6QyxDQUFkO0FBQ0Q7O0FBRUQscUJBQU8sT0FBS29CLGdCQUFMLENBQ0w7QUFDRWxNLDBCQUFVK0w7QUFEWixlQURLLEVBSUwsWUFBTTtBQUNKMUksb0NBQ0VBLGlCQUFpQjBJLFdBQWpCLEVBQThCUCxTQUFTVixXQUF2QyxFQUFvRHJCLENBQXBELENBREY7QUFFRCxlQVBJLENBQVA7QUFTRCxhQWpCRDs7QUFtQkE7QUFDQSxnQkFBSTBDLGVBQWUsZ0JBQUV0RCxrQkFBRixDQUNqQi9CLE9BQU9zRixJQURVLEVBRWpCWixRQUZpQixFQUdqQjNELEtBSGlCLENBQW5COztBQU1BO0FBQ0EsZ0JBQU13RSw4QkFDSnZGLE9BQU93RixVQUFQLEtBQ0MsQ0FBQ3hGLE9BQU95RixTQUFSLEdBQW9CbEksbUJBQXBCLEdBQTBDeUMsT0FBT3NGLElBRGxELENBREY7QUFHQSxnQkFBTUksNEJBQ0oxRixPQUFPMkYsUUFBUCxJQUFtQnZJLGlCQURyQjtBQUVBLGdCQUFNd0ksOEJBQ0o1RixPQUFPNkYsVUFBUCxJQUFxQnhJLG1CQUR2QjtBQUVBLGdCQUFNeUksZ0NBQ0p4SSxrQkFDQztBQUFBLHFCQUNDO0FBQUE7QUFBQTtBQUNFLDhDQUFDLHlCQUFELEVBQStCNUYsS0FBL0IsQ0FERjtBQUVFLDhDQUFDLDJCQUFELEVBQWlDQSxLQUFqQztBQUZGLGVBREQ7QUFBQSxhQUZIO0FBT0EsZ0JBQU1xTyx5QkFDSi9GLE9BQU9nRyxLQUFQLElBQWdCRiw2QkFEbEI7O0FBR0E7QUFDQSxnQkFBSXBCLFNBQVNDLE9BQVQsSUFBb0JELFNBQVNFLFFBQWpDLEVBQTJDO0FBQ3pDO0FBQ0FGLHVCQUFTdUIsVUFBVCxHQUFzQixJQUF0QjtBQUNBcEIsaUNBQW1CO0FBQ2pCcUIseUJBQVNsQjtBQURRLGVBQW5CO0FBR0E7QUFDQSxrQkFBSU4sU0FBU0MsT0FBYixFQUFzQjtBQUNwQixvQkFBSSxDQUFDRCxTQUFTUCxPQUFkLEVBQXVCO0FBQ3JCLHNCQUFJLENBQUNsSCxZQUFMLEVBQW1CO0FBQ2pCeUgsNkJBQVN1QixVQUFULEdBQXNCLEtBQXRCO0FBQ0FwQix1Q0FBbUIsRUFBbkI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRCxnQkFBSUgsU0FBU0MsT0FBYixFQUFzQjtBQUNwQjtBQUNBRyx5QkFDRWxCLFFBQVF6RSxHQUFSLENBQVl0RCxVQUFaLE1BQTRCbUUsT0FBT0ksRUFBbkMsSUFBeUNzRSxTQUFTUCxPQURwRDtBQUVBO0FBQ0FZLDBCQUNFaEosUUFBUW9LLE9BQVIsQ0FBZ0JuRyxPQUFPSSxFQUF2QixJQUNFckUsUUFBUW9LLE9BQVIsQ0FBZ0J2QyxRQUFRekUsR0FBUixDQUFZdEQsVUFBWixDQUFoQixDQURGLElBQzhDNkksU0FBU1AsT0FGekQ7QUFHQTtBQUNBLGtCQUFJVyxRQUFKLEVBQWM7QUFDWjtBQUNBTywrQkFBZSxnQkFBRXRELGtCQUFGLENBQ2JnRSxzQkFEYSxlQUdSckIsUUFIUTtBQUlYM0QseUJBQU81QixJQUFJckQsV0FBSjtBQUpJLG9CQU1icUQsSUFBSXJELFdBQUosQ0FOYSxDQUFmO0FBUUQsZUFWRCxNQVVPLElBQUlpSixTQUFKLEVBQWU7QUFDcEI7QUFDQU0sK0JBQWUsZ0JBQUV0RCxrQkFBRixDQUNid0QsMkJBRGEsRUFFYmIsUUFGYSxFQUdiM0QsS0FIYSxDQUFmO0FBS0QsZUFQTSxNQU9BO0FBQ0xzRSwrQkFBZSxJQUFmO0FBQ0Q7QUFDRixhQTdCRCxNQTZCTyxJQUFJWCxTQUFTVCxVQUFiLEVBQXlCO0FBQzlCb0IsNkJBQWUsZ0JBQUV0RCxrQkFBRixDQUNid0QsMkJBRGEsRUFFYmIsUUFGYSxFQUdiM0QsS0FIYSxDQUFmO0FBS0Q7O0FBRUQsZ0JBQUkyRCxTQUFTRSxRQUFiLEVBQXVCO0FBQ3JCUyw2QkFBZSxnQkFBRXRELGtCQUFGLENBQ2IyRCx5QkFEYSxFQUViaEIsUUFGYSxFQUdidkYsSUFBSXJELFdBQUosQ0FIYSxDQUFmO0FBS0Esa0JBQUlDLE9BQUosRUFBYTtBQUNYLG9CQUFJMkksU0FBU1IsY0FBYixFQUE2QjtBQUMzQm1CLGlDQUFlLElBQWY7QUFDRDtBQUNELG9CQUFJLENBQUNYLFNBQVNQLE9BQVYsSUFBcUIsQ0FBQ2xILFlBQTFCLEVBQXdDO0FBQ3RDb0ksaUNBQWUsSUFBZjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDtBQUNBLG1CQUNFO0FBQUMseUJBQUQ7QUFBQTtBQUNFLHFCQUFLZCxLQUFLLEdBQUwsR0FBV3ZFLE9BQU9JLEVBRHpCO0FBRUUsMkJBQVcsMEJBQ1RLLE9BRFMsRUFFVCxDQUFDOEIsSUFBRCxJQUFTLFNBRkEsRUFHVG1DLFNBQVN1QixVQUFULElBQXVCLGVBSGQsRUFJVCxDQUFDbkIsWUFBWUMsU0FBYixLQUEyQixVQUpsQixDQUZiO0FBUUUsdUJBQU9wRTtBQVJULGlCQVNNa0UsZ0JBVE4sRUFVTUwsUUFBUWxELElBVmQsRUFXTW1ELFlBQVluRCxJQVhsQjtBQWFHK0Q7QUFiSCxhQURGO0FBaUJELFdBaExBO0FBVEgsU0FESyxFQTRMTHpCLFFBQVFPLE9BQVIsSUFDRUMsVUFERixJQUVFUixRQUFRTyxPQUFSLENBQWdCakYsR0FBaEIsQ0FBb0IsVUFBQ1AsQ0FBRCxFQUFJUyxDQUFKO0FBQUEsaUJBQ2xCdUUsWUFBWWhGLENBQVosRUFBZVMsQ0FBZixFQUFrQndFLFFBQVFJLFdBQTFCLENBRGtCO0FBQUEsU0FBcEIsQ0E5TEcsRUFpTUwvRyxnQkFDRSxDQUFDMkcsUUFBUU8sT0FEWCxJQUVFQyxVQUZGLElBR0VuSCxhQUFhMkcsT0FBYixDQXBNRyxDQUFQO0FBc01ELE9BdE5EOztBQXdOQSxVQUFNd0MsYUFBYSxTQUFiQSxVQUFhLENBQUNqSCxHQUFELEVBQU1DLENBQU4sRUFBWTtBQUM3QixZQUFNaUYsVUFBVSxnQkFBRS9ELFVBQUYsQ0FDZDNGLFdBQVdrRixVQUFYLEVBQXVCVSxTQUF2QixFQUFrQ0EsU0FBbEMsU0FEYyxDQUFoQjtBQUdBLGVBQ0U7QUFBQyxxQkFBRDtBQUFBO0FBQ0UsdUJBQVcsMEJBQ1QsU0FEUyxFQUVULENBQUN0QyxTQUFTTyxNQUFULEdBQWtCWSxDQUFuQixJQUF3QixDQUF4QixHQUE0QixPQUE1QixHQUFzQyxNQUY3QixFQUdUaUYsUUFBUXpLLFNBSEMsQ0FEYjtBQU1FLG1CQUFPeUssUUFBUXhLLEtBQVIsSUFBaUI7QUFOMUI7QUFRRzhELDRCQUFrQnVCLEdBQWxCLENBQXNCbUgsYUFBdEI7QUFSSCxTQURGO0FBWUQsT0FoQkQ7O0FBa0JBLFVBQU1BLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ3JHLE1BQUQsRUFBU1osQ0FBVCxFQUFlO0FBQ25DLFlBQU1tRCxPQUNKLE9BQU92QyxPQUFPdUMsSUFBZCxLQUF1QixVQUF2QixHQUFvQ3ZDLE9BQU91QyxJQUFQLEVBQXBDLEdBQW9EdkMsT0FBT3VDLElBRDdEO0FBRUEsWUFBTWlDLFVBQVUsZ0JBQUVsRSxVQUFGLENBQ2QxRixXQUFXaUYsVUFBWCxFQUF1QlUsU0FBdkIsRUFBa0NQLE1BQWxDLFNBRGMsQ0FBaEI7QUFHQSxZQUFNeUUsY0FBYyxnQkFBRW5FLFVBQUYsQ0FDbEJOLE9BQU9sRyxRQUFQLENBQWdCK0YsVUFBaEIsRUFBNEJVLFNBQTVCLEVBQXVDUCxNQUF2QyxTQURrQixDQUFwQjs7QUFJQSxZQUFNUyxVQUFVLENBQ2QrRCxRQUFRNUssU0FETSxFQUVkb0csT0FBT3BHLFNBRk8sRUFHZDZLLFlBQVk3SyxTQUhFLENBQWhCOztBQU1BLFlBQU0rRyxzQkFDRDZELFFBQVEzSyxLQURQLEVBRURtRyxPQUFPbkcsS0FGTixFQUdENEssWUFBWTVLLEtBSFgsQ0FBTjs7QUFNQSxlQUNFO0FBQUMscUJBQUQ7QUFBQTtBQUNFLGlCQUFLdUYsSUFBSSxHQUFKLEdBQVVZLE9BQU9JLEVBRHhCO0FBRUUsdUJBQVcsMEJBQVdLLE9BQVgsRUFBb0IsQ0FBQzhCLElBQUQsSUFBUyxTQUE3QixDQUZiO0FBR0UsbUJBQU81QjtBQUhULGFBSU02RCxRQUFRbEQsSUFKZDtBQU1HLDBCQUFFUyxrQkFBRixDQUFxQnRFLGVBQXJCO0FBTkgsU0FERjtBQVVELE9BaENEOztBQWtDQSxVQUFNNkksb0JBQW9CLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixZQUFNQyxhQUFhMUwsY0FBY2dGLFVBQWQsRUFBMEJVLFNBQTFCLEVBQXFDQSxTQUFyQyxTQUFuQjtBQUNBLFlBQU1pRyxlQUFlLGdCQUFFbEcsVUFBRixDQUNuQnhGLGdCQUFnQitFLFVBQWhCLEVBQTRCVSxTQUE1QixFQUF1Q0EsU0FBdkMsU0FEbUIsQ0FBckI7QUFHQSxlQUNFO0FBQUMsd0JBQUQ7QUFBQTtBQUNFLHVCQUFXZ0csV0FBVzNNLFNBRHhCO0FBRUUsbUJBQU8yTSxXQUFXMU07QUFGcEIsYUFHTTBNLFdBQVdqRixJQUhqQjtBQUtFO0FBQUMsdUJBQUQ7QUFBQTtBQUNFLHlCQUFXLDBCQUFXa0YsYUFBYTVNLFNBQXhCLENBRGI7QUFFRSxxQkFBTzRNLGFBQWEzTTtBQUZ0QixlQUdNMk0sYUFBYWxGLElBSG5CO0FBS0czRCw4QkFBa0J1QixHQUFsQixDQUFzQnVILGdCQUF0QjtBQUxIO0FBTEYsU0FERjtBQWVELE9BcEJEOztBQXNCQSxVQUFNQSxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFDekcsTUFBRCxFQUFTWixDQUFULEVBQWU7QUFDdEMsWUFBTW1ELE9BQ0osT0FBT3ZDLE9BQU91QyxJQUFkLEtBQXVCLFVBQXZCLEdBQW9DdkMsT0FBT3VDLElBQVAsRUFBcEMsR0FBb0R2QyxPQUFPdUMsSUFEN0Q7QUFFQSxZQUFNbUUsZUFBZSxnQkFBRXBHLFVBQUYsQ0FDbkJ2RixnQkFBZ0I4RSxVQUFoQixFQUE0QlUsU0FBNUIsRUFBdUNBLFNBQXZDLFNBRG1CLENBQXJCO0FBR0EsWUFBTWtFLGNBQWMsZ0JBQUVuRSxVQUFGLENBQ2xCTixPQUFPbEcsUUFBUCxDQUFnQitGLFVBQWhCLEVBQTRCVSxTQUE1QixFQUF1Q1AsTUFBdkMsU0FEa0IsQ0FBcEI7QUFHQSxZQUFNMkcsb0JBQW9CLGdCQUFFckcsVUFBRixDQUN4Qk4sT0FBTzRHLGNBQVAsQ0FBc0IvRyxVQUF0QixFQUFrQ1UsU0FBbEMsRUFBNkNQLE1BQTdDLFNBRHdCLENBQTFCOztBQUlBLFlBQU1TLFVBQVUsQ0FDZGlHLGFBQWE5TSxTQURDLEVBRWRvRyxPQUFPcEcsU0FGTyxFQUdkNkssWUFBWTdLLFNBSEUsRUFJZCtNLGtCQUFrQi9NLFNBSkosQ0FBaEI7O0FBT0EsWUFBTStHLHNCQUNEK0YsYUFBYTdNLEtBRFosRUFFRG1HLE9BQU9uRyxLQUZOLEVBR0Q0SyxZQUFZNUssS0FIWCxFQUlEOE0sa0JBQWtCOU0sS0FKakIsQ0FBTjs7QUFPQSxlQUNFO0FBQUMscUJBQUQ7QUFBQTtBQUNFLGlCQUFLdUYsSUFBSSxHQUFKLEdBQVVZLE9BQU9JLEVBRHhCO0FBRUUsdUJBQVcsMEJBQVdLLE9BQVgsRUFBb0IsQ0FBQzhCLElBQUQsSUFBUyxTQUE3QixDQUZiO0FBR0UsbUJBQU81QjtBQUhULGFBSU04RCxZQUFZbkQsSUFKbEIsRUFLTW9GLGFBQWFwRixJQUxuQixFQU1NcUYsa0JBQWtCckYsSUFOeEI7QUFRRywwQkFBRVMsa0JBQUYsQ0FBcUIvQixPQUFPcEIsTUFBNUIsRUFBb0M7QUFDbkNxRCxrQkFBTW5FLFVBRDZCO0FBRW5Da0Msb0JBQVFBO0FBRjJCLFdBQXBDO0FBUkgsU0FERjtBQWVELE9BMUNEOztBQTRDQSxVQUFNNkcsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFlBQU1DLGtCQUFrQixnQkFBRXhHLFVBQUYsQ0FDdEJ0RixtQkFBbUI2RSxVQUFuQixFQUErQlUsU0FBL0IsRUFBMENBLFNBQTFDLFNBRHNCLENBQXhCO0FBR0EsZUFDRSw4QkFBQyxtQkFBRCxlQUNNN0csYUFETjtBQUVFLGlCQUFPNEMsS0FGVDtBQUdFLHVCQUFhb0QsV0FIZjtBQUlFLG1CQUFTQyxPQUpYO0FBS0Usd0JBQWMsT0FBS3RILFlBTHJCO0FBTUUsNEJBQWtCLE9BQUtDLGdCQU56QjtBQU9FLHFCQUFXd08sZ0JBQWdCbE4sU0FQN0I7QUFRRSxpQkFBT2tOLGdCQUFnQmpOO0FBUnpCLFdBU01pTixnQkFBZ0J4RixJQVR0QixFQURGO0FBYUQsT0FqQkQ7O0FBbUJBLFVBQU15RixZQUFZLGdCQUFFekcsVUFBRixDQUNoQnhHLFNBQVMrRixVQUFULEVBQXFCVSxTQUFyQixFQUFnQ0EsU0FBaEMsRUFBMkMsSUFBM0MsQ0FEZ0IsQ0FBbEI7QUFHQSxVQUFNeUcsYUFBYSxnQkFBRTFHLFVBQUYsQ0FDakJ2RyxjQUFjOEYsVUFBZCxFQUEwQlUsU0FBMUIsRUFBcUNBLFNBQXJDLEVBQWdELElBQWhELENBRGlCLENBQW5CO0FBR0EsVUFBTTBHLGFBQWEsZ0JBQUUzRyxVQUFGLENBQ2pCNUYsY0FBY21GLFVBQWQsRUFBMEJVLFNBQTFCLEVBQXFDQSxTQUFyQyxFQUFnRCxJQUFoRCxDQURpQixDQUFuQjtBQUdBLFVBQU0yRyxlQUFlak0sZ0JBQWdCNEUsVUFBaEIsRUFBNEJVLFNBQTVCLEVBQXVDQSxTQUF2QyxFQUFrRCxJQUFsRCxDQUFyQjtBQUNBLFVBQU00RyxjQUFjak0sZUFBZTJFLFVBQWYsRUFBMkJVLFNBQTNCLEVBQXNDQSxTQUF0QyxFQUFpRCxJQUFqRCxDQUFwQjtBQUNBLFVBQU1xQyxlQUFlekgsZ0JBQWdCMEUsVUFBaEIsRUFBNEJVLFNBQTVCLEVBQXVDQSxTQUF2QyxFQUFrRCxJQUFsRCxDQUFyQjs7QUFFQSxVQUFNNkcsWUFBWSxTQUFaQSxTQUFZLEdBQU07QUFDdEIsWUFBTUMsYUFBYVIsZ0JBQW5CO0FBQ0EsZUFDRTtBQUFBO0FBQUE7QUFDRSx1QkFBVywwQkFBVyxZQUFYLEVBQXlCak4sU0FBekIsRUFBb0NtTixVQUFVbk4sU0FBOUMsQ0FEYjtBQUVFLGdDQUNLQyxLQURMLEVBRUtrTixVQUFVbE4sS0FGZjtBQUZGLGFBTU1rTixVQUFVekYsSUFOaEI7QUFRR2xHLDRCQUFrQkMsaUJBQWxCLEdBQ0c7QUFBQTtBQUFBLGNBQUssV0FBVSxnQkFBZjtBQUNDZ007QUFERCxXQURILEdBSUcsSUFaTjtBQWFFO0FBQUE7QUFBQSxjQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUFDLDRCQUFEO0FBQUE7QUFDRSwyQkFBVywwQkFDVEwsV0FBV3BOLFNBREYsRUFFVEosb0JBQW9CLGFBQXBCLEdBQW9DLEVBRjNCLENBRGI7QUFLRSx1QkFBT3dOLFdBQVduTjtBQUxwQixpQkFNTW1OLFdBQVcxRixJQU5qQjtBQVFHeEIsNEJBUkg7QUFTR2pDLGdDQUFrQnNELGtCQUFsQixHQUF1QyxJQVQxQztBQVVHZSwyQkFWSDtBQVdHckQsMkJBQWFvRSxhQUFiLEdBQTZCLElBWGhDO0FBWUU7QUFBQyw4QkFBRDtBQUFBO0FBQ0UsNkJBQVcsMEJBQVdnRSxXQUFXck4sU0FBdEIsQ0FEYjtBQUVFLHlCQUFPcU4sV0FBV3BOO0FBRnBCLG1CQUdNb04sV0FBVzNGLElBSGpCO0FBS0dyRCx5QkFBU2lCLEdBQVQsQ0FBYSxVQUFDUCxDQUFELEVBQUlTLENBQUo7QUFBQSx5QkFBVXVFLFlBQVloRixDQUFaLEVBQWVTLENBQWYsQ0FBVjtBQUFBLGlCQUFiLENBTEg7QUFNR2hCLHdCQUFRYyxHQUFSLENBQVlrSCxVQUFaO0FBTkgsZUFaRjtBQW9CRzNILGdDQUFrQjZILG1CQUFsQixHQUF3QztBQXBCM0M7QUFERixXQWJGO0FBcUNHbEwsNEJBQWtCRSxvQkFBbEIsR0FDRztBQUFBO0FBQUEsY0FBSyxXQUFVLG1CQUFmO0FBQ0MrTDtBQURELFdBREgsR0FJRyxJQXpDTjtBQTBDRyxXQUFDcEosU0FBU08sTUFBVixJQUNDO0FBQUMsMkJBQUQ7QUFBcUIySSx1QkFBckI7QUFDRyw0QkFBRXBGLGtCQUFGLENBQXFCdEcsVUFBckI7QUFESCxXQTNDSjtBQThDRSx3Q0FBQyxnQkFBRDtBQUNFLHFCQUFTWSxPQURYO0FBRUUseUJBQWFiO0FBRmYsYUFHTTBMLFlBSE47QUE5Q0YsU0FERjtBQXNERCxPQXhERDs7QUEwREE7QUFDQSxhQUFPdk4sV0FBV0EsU0FBU2tHLFVBQVQsRUFBcUJ1SCxTQUFyQixFQUFnQyxJQUFoQyxDQUFYLEdBQW1EQSxXQUExRDtBQUNEOzs7O0VBbjRCcUMsdUJBQVEsMENBQVIsQzs7QUFBbkIzUCxVLENBQ1o2UCxZO2tCQURZN1AsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG4vL1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscydcbmltcG9ydCBMaWZlY3ljbGUgZnJvbSAnLi9saWZlY3ljbGUnXG5pbXBvcnQgTWV0aG9kcyBmcm9tICcuL21ldGhvZHMnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdFByb3BzJ1xuXG5leHBvcnQgY29uc3QgUmVhY3RUYWJsZURlZmF1bHRzID0gZGVmYXVsdFByb3BzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0VGFibGUgZXh0ZW5kcyBNZXRob2RzKExpZmVjeWNsZShDb21wb25lbnQpKSB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHNcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLmdldFJlc29sdmVkU3RhdGUgPSB0aGlzLmdldFJlc29sdmVkU3RhdGUuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0RGF0YU1vZGVsID0gdGhpcy5nZXREYXRhTW9kZWwuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0U29ydGVkRGF0YSA9IHRoaXMuZ2V0U29ydGVkRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5maXJlRmV0Y2hEYXRhID0gdGhpcy5maXJlRmV0Y2hEYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFByb3BPclN0YXRlID0gdGhpcy5nZXRQcm9wT3JTdGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRTdGF0ZU9yUHJvcCA9IHRoaXMuZ2V0U3RhdGVPclByb3AuYmluZCh0aGlzKVxuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zb3J0RGF0YSA9IHRoaXMuc29ydERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0TWluUm93cyA9IHRoaXMuZ2V0TWluUm93cy5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UgPSB0aGlzLm9uUGFnZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblBhZ2VTaXplQ2hhbmdlID0gdGhpcy5vblBhZ2VTaXplQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLnNvcnRDb2x1bW4gPSB0aGlzLnNvcnRDb2x1bW4uYmluZCh0aGlzKVxuICAgIHRoaXMuZmlsdGVyQ29sdW1uID0gdGhpcy5maWx0ZXJDb2x1bW4uYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uU3RhcnQgPSB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUNvbHVtbkVuZCA9IHRoaXMucmVzaXplQ29sdW1uRW5kLmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZyA9IHRoaXMucmVzaXplQ29sdW1uTW92aW5nLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwYWdlOiAwLFxuICAgICAgcGFnZVNpemU6IHByb3BzLmRlZmF1bHRQYWdlU2l6ZSxcbiAgICAgIHNvcnRlZDogcHJvcHMuZGVmYXVsdFNvcnRlZCxcbiAgICAgIGV4cGFuZGVkOiBwcm9wcy5kZWZhdWx0RXhwYW5kZWQsXG4gICAgICBmaWx0ZXJlZDogcHJvcHMuZGVmYXVsdEZpbHRlcmVkLFxuICAgICAgcmVzaXplZDogcHJvcHMuZGVmYXVsdFJlc2l6ZWQsXG4gICAgICBjdXJyZW50bHlSZXNpemluZzogZmFsc2UsXG4gICAgICBza2lwTmV4dFNvcnQ6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpXG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIGdldFByb3BzLFxuICAgICAgZ2V0VGFibGVQcm9wcyxcbiAgICAgIGdldENvbEdyb3VwQ29sUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkR3JvdXBUaFByb3BzLFxuICAgICAgZ2V0VGhlYWRQcm9wcyxcbiAgICAgIGdldFRoZWFkVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkRmlsdGVyUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclRoUHJvcHMsXG4gICAgICBnZXRUYm9keVByb3BzLFxuICAgICAgZ2V0VHJQcm9wcyxcbiAgICAgIGdldFRkUHJvcHMsXG4gICAgICBnZXRUZm9vdFByb3BzLFxuICAgICAgZ2V0VGZvb3RUclByb3BzLFxuICAgICAgZ2V0VGZvb3RUZFByb3BzLFxuICAgICAgZ2V0UGFnaW5hdGlvblByb3BzLFxuICAgICAgZ2V0TG9hZGluZ1Byb3BzLFxuICAgICAgZ2V0Tm9EYXRhUHJvcHMsXG4gICAgICBnZXRSZXNpemVyUHJvcHMsXG4gICAgICBzaG93UGFnaW5hdGlvbixcbiAgICAgIHNob3dQYWdpbmF0aW9uVG9wLFxuICAgICAgc2hvd1BhZ2luYXRpb25Cb3R0b20sXG4gICAgICBtYW51YWwsXG4gICAgICBsb2FkaW5nVGV4dCxcbiAgICAgIG5vRGF0YVRleHQsXG4gICAgICBzb3J0YWJsZSxcbiAgICAgIHJlc2l6YWJsZSxcbiAgICAgIGZpbHRlcmFibGUsXG4gICAgICAvLyBQaXZvdGluZyBTdGF0ZVxuICAgICAgcGl2b3RJREtleSxcbiAgICAgIHBpdm90VmFsS2V5LFxuICAgICAgcGl2b3RCeSxcbiAgICAgIHN1YlJvd3NLZXksXG4gICAgICBhZ2dyZWdhdGVkS2V5LFxuICAgICAgb3JpZ2luYWxLZXksXG4gICAgICBpbmRleEtleSxcbiAgICAgIGdyb3VwZWRCeVBpdm90S2V5LFxuICAgICAgLy8gU3RhdGVcbiAgICAgIGxvYWRpbmcsXG4gICAgICBwYWdlU2l6ZSxcbiAgICAgIHBhZ2UsXG4gICAgICBzb3J0ZWQsXG4gICAgICBmaWx0ZXJlZCxcbiAgICAgIHJlc2l6ZWQsXG4gICAgICBleHBhbmRlZCxcbiAgICAgIHBhZ2VzLFxuICAgICAgb25FeHBhbmRlZENoYW5nZSxcbiAgICAgIC8vIENvbXBvbmVudHNcbiAgICAgIFRhYmxlQ29tcG9uZW50LFxuICAgICAgVGhlYWRDb21wb25lbnQsXG4gICAgICBUYm9keUNvbXBvbmVudCxcbiAgICAgIFRyQ29tcG9uZW50LFxuICAgICAgVGhDb21wb25lbnQsXG4gICAgICBUZENvbXBvbmVudCxcbiAgICAgIFRmb290Q29tcG9uZW50LFxuICAgICAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgICAgIExvYWRpbmdDb21wb25lbnQsXG4gICAgICBTdWJDb21wb25lbnQsXG4gICAgICBOb0RhdGFDb21wb25lbnQsXG4gICAgICBSZXNpemVyQ29tcG9uZW50LFxuICAgICAgRXhwYW5kZXJDb21wb25lbnQsXG4gICAgICBQaXZvdFZhbHVlQ29tcG9uZW50LFxuICAgICAgUGl2b3RDb21wb25lbnQsXG4gICAgICBBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgRmlsdGVyQ29tcG9uZW50LFxuICAgICAgUGFkUm93Q29tcG9uZW50LFxuICAgICAgLy8gRGF0YSBtb2RlbFxuICAgICAgcmVzb2x2ZWREYXRhLFxuICAgICAgYWxsVmlzaWJsZUNvbHVtbnMsXG4gICAgICBoZWFkZXJHcm91cHMsXG4gICAgICBoYXNIZWFkZXJHcm91cHMsXG4gICAgICAvLyBTb3J0ZWQgRGF0YVxuICAgICAgc29ydGVkRGF0YSxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nLFxuICAgIH0gPSByZXNvbHZlZFN0YXRlXG5cbiAgICAvLyBQYWdpbmF0aW9uXG4gICAgY29uc3Qgc3RhcnRSb3cgPSBwYWdlU2l6ZSAqIHBhZ2VcbiAgICBjb25zdCBlbmRSb3cgPSBzdGFydFJvdyArIHBhZ2VTaXplXG4gICAgbGV0IHBhZ2VSb3dzID0gbWFudWFsID8gcmVzb2x2ZWREYXRhIDogc29ydGVkRGF0YS5zbGljZShzdGFydFJvdywgZW5kUm93KVxuICAgIGNvbnN0IG1pblJvd3MgPSB0aGlzLmdldE1pblJvd3MoKVxuICAgIGNvbnN0IHBhZFJvd3MgPSBfLnJhbmdlKE1hdGgubWF4KG1pblJvd3MgLSBwYWdlUm93cy5sZW5ndGgsIDApKVxuXG4gICAgY29uc3QgaGFzQ29sdW1uRm9vdGVyID0gYWxsVmlzaWJsZUNvbHVtbnMuc29tZShkID0+IGQuRm9vdGVyKVxuICAgIGNvbnN0IGhhc0ZpbHRlcnMgPSBmaWx0ZXJhYmxlIHx8IGFsbFZpc2libGVDb2x1bW5zLnNvbWUoZCA9PiBkLmZpbHRlcmFibGUpXG5cbiAgICBjb25zdCByZWN1cnNlUm93c1ZpZXdJbmRleCA9IChyb3dzLCBwYXRoID0gW10sIGluZGV4ID0gLTEpID0+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHJvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgICAgY29uc3Qgcm93V2l0aFZpZXdJbmRleCA9IHtcbiAgICAgICAgICAgIC4uLnJvdyxcbiAgICAgICAgICAgIF92aWV3SW5kZXg6IGluZGV4LFxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5jb25jYXQoW2ldKVxuICAgICAgICAgIGlmIChyb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldICYmIF8uZ2V0KGV4cGFuZGVkLCBuZXdQYXRoKSkge1xuICAgICAgICAgICAgO1tyb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldLCBpbmRleF0gPSByZWN1cnNlUm93c1ZpZXdJbmRleChcbiAgICAgICAgICAgICAgcm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSxcbiAgICAgICAgICAgICAgbmV3UGF0aCxcbiAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJvd1dpdGhWaWV3SW5kZXhcbiAgICAgICAgfSksXG4gICAgICAgIGluZGV4LFxuICAgICAgXVxuICAgIH1cbiAgICA7W3BhZ2VSb3dzXSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KHBhZ2VSb3dzKVxuXG4gICAgY29uc3QgY2FuUHJldmlvdXMgPSBwYWdlID4gMFxuICAgIGNvbnN0IGNhbk5leHQgPSBwYWdlICsgMSA8IHBhZ2VzXG5cbiAgICBsZXQgcm93SW5kZXggPSAtMVxuXG4gICAgY29uc3QgZmluYWxTdGF0ZSA9IHtcbiAgICAgIC4uLnJlc29sdmVkU3RhdGUsXG4gICAgICBzdGFydFJvdyxcbiAgICAgIGVuZFJvdyxcbiAgICAgIHBhZ2VSb3dzLFxuICAgICAgbWluUm93cyxcbiAgICAgIHBhZFJvd3MsXG4gICAgICBoYXNDb2x1bW5Gb290ZXIsXG4gICAgICBjYW5QcmV2aW91cyxcbiAgICAgIGNhbk5leHQsXG4gICAgfVxuXG4gICAgLy8gVmlzdWFsIENvbXBvbmVudHNcblxuICAgIGNvbnN0IG1ha2VDb2xHcm91cCA9ICgpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxjb2xncm91cD5cbiAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VDb2wpfVxuICAgICAgICA8L2NvbGdyb3VwPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2wgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sdW1uLmlkKSB8fCB7fVxuXG4gICAgICBjb25zdCBjb2xncm91cENvbFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRDb2xHcm91cENvbFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uQ29sZ3JvdXBDb2xQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldENvbEdyb3VwQ29sUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5jb2xHcm91cENvbENsYXNzTmFtZSxcbiAgICAgICAgY29sZ3JvdXBDb2xQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkNvbGdyb3VwQ29sUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5jb2xHcm91cENvbFN0eWxlLFxuICAgICAgICAuLi5jb2xncm91cENvbFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Db2xncm91cENvbFByb3BzLnN0eWxlLFxuICAgICAgfVxuICAgICAgY29uc3Qgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBjb2x1bW4ubWluV2lkdGgsXG4gICAgICApXG4gICAgICBjb25zdCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5tYXhXaWR0aCxcbiAgICAgIClcblxuICAgICAgY29uc3QgaXNMYXN0ID0gaSA9PT0gYWxsVmlzaWJsZUNvbHVtbnMubGVuZ3RoIC0gMVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Y29sXG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncnQtY29sZ3JvdXAtY29sJywgY2xhc3NlcywgeyAnLWR1bW15JzogaXNMYXN0IH0pfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBtYXhXaWR0aDogbWF4V2lkdGgsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyR3JvdXBzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRHcm91cFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZEdyb3VwVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1oZWFkZXJHcm91cHMnLCB0aGVhZEdyb3VwUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17dGhlYWRHcm91cFByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50aGVhZEdyb3VwUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZEdyb3VwVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRHcm91cFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRHcm91cFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChtYWtlSGVhZGVyR3JvdXApfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlckdyb3VwID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRHcm91cFRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgdGhlYWRHcm91cFRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZEdyb3VwVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbFNwYW4gPSBjb2x1bW4uY29sdW1ucy5sZW5ndGhcblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRHcm91cFRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgICAgY29sU3BhbixcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNMYXN0ID0gaSA9PT0gaGVhZGVyR3JvdXBzLmxlbmd0aCAtIDFcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCB7ICctZHVtbXknOiBpc0xhc3QgfSl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uSGVhZGVyLCB7XG4gICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1oZWFkZXInLCB0aGVhZFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3RoZWFkUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRoZWFkUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZFRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VIZWFkZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHNvcnQgPSBzb3J0ZWQuZmluZChkID0+IGQuaWQgPT09IGNvbHVtbi5pZClcbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHRoZWFkVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgdGhlYWRUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzUmVzaXphYmxlID0gXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnJlc2l6YWJsZSwgcmVzaXphYmxlLCBmYWxzZSlcbiAgICAgIGNvbnN0IHJlc2l6ZXIgPSBpc1Jlc2l6YWJsZVxuICAgICAgICA/ICg8UmVzaXplckNvbXBvbmVudFxuICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoY29sdW1uLCBlLCBmYWxzZSl9XG4gICAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoY29sdW1uLCBlLCB0cnVlKX1cbiAgICAgICAgICB7Li4ucmVzaXplclByb3BzfVxuICAgICAgICAvPilcbiAgICAgICAgOiBudWxsXG5cbiAgICAgIGNvbnN0IGlzU29ydGFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChjb2x1bW4uc29ydGFibGUsIHNvcnRhYmxlLCBmYWxzZSlcbiAgICAgIGNvbnN0IGlzTGFzdCA9IGkgPT09IGFsbFZpc2libGVDb2x1bW5zLmxlbmd0aCAtIDFcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAncnQtcmVzaXphYmxlLWhlYWRlcicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICctY3Vyc29yLXBvaW50ZXInOiBpc1NvcnRhYmxlLFxuICAgICAgICAgICAgICAnLXNvcnQtZGVzYyc6IHNvcnQgJiYgc29ydC5kZXNjLFxuICAgICAgICAgICAgICAnLXNvcnQtYXNjJzogc29ydCAmJiAhc29ydC5kZXNjLFxuICAgICAgICAgICAgICAnLWhpZGRlbic6ICFzaG93LFxuICAgICAgICAgICAgICAnLWR1bW15JzogaXNMYXN0LFxuICAgICAgICAgICAgICAncnQtaGVhZGVyLXBpdm90JzogcGl2b3RCeSAmJiBwaXZvdEJ5LnNsaWNlKDAsIC0xKS5pbmNsdWRlcyhjb2x1bW4uaWQpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB0b2dnbGVTb3J0PXtlID0+IHtcbiAgICAgICAgICAgIGlzU29ydGFibGUgJiYgdGhpcy5zb3J0Q29sdW1uKGNvbHVtbiwgZS5zaGlmdEtleSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3J0LXJlc2l6YWJsZS1oZWFkZXItY29udGVudCc+XG4gICAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkhlYWRlciwge1xuICAgICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtyZXNpemVyfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VGaWx0ZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctZmlsdGVycycsIHRoZWFkRmlsdGVyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17dGhlYWRGaWx0ZXJQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udGhlYWRGaWx0ZXJQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkRmlsdGVyVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRGaWx0ZXJUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkRmlsdGVyVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUZpbHRlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlRmlsdGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEZpbHRlclRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsdGVyID0gZmlsdGVyZWQuZmluZChmaWx0ZXIgPT4gZmlsdGVyLmlkID09PSBjb2x1bW4uaWQpXG5cbiAgICAgIGNvbnN0IFJlc29sdmVkRmlsdGVyQ29tcG9uZW50ID0gY29sdW1uLkZpbHRlciB8fCBGaWx0ZXJDb21wb25lbnRcblxuICAgICAgY29uc3QgaXNGaWx0ZXJhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIGNvbHVtbi5maWx0ZXJhYmxlLFxuICAgICAgICBmaWx0ZXJhYmxlLFxuICAgICAgICBmYWxzZVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMpfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7aXNGaWx0ZXJhYmxlXG4gICAgICAgICAgICA/IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICBSZXNvbHZlZEZpbHRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IHRoaXMuZmlsdGVyQ29sdW1uKGNvbHVtbiwgdmFsdWUpLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkZWZhdWx0UHJvcHMuY29sdW1uLkZpbHRlclxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWdlUm93ID0gKHJvdywgaSwgcGF0aCA9IFtdKSA9PiB7XG4gICAgICBjb25zdCByb3dJbmZvID0ge1xuICAgICAgICBvcmlnaW5hbDogcm93W29yaWdpbmFsS2V5XSxcbiAgICAgICAgcm93OiByb3csXG4gICAgICAgIGluZGV4OiByb3dbaW5kZXhLZXldLFxuICAgICAgICB2aWV3SW5kZXg6ICsrcm93SW5kZXgsXG4gICAgICAgIGxldmVsOiBwYXRoLmxlbmd0aCxcbiAgICAgICAgbmVzdGluZ1BhdGg6IHBhdGguY29uY2F0KFtpXSksXG4gICAgICAgIGFnZ3JlZ2F0ZWQ6IHJvd1thZ2dyZWdhdGVkS2V5XSxcbiAgICAgICAgZ3JvdXBlZEJ5UGl2b3Q6IHJvd1tncm91cGVkQnlQaXZvdEtleV0sXG4gICAgICAgIHN1YlJvd3M6IHJvd1tzdWJSb3dzS2V5XSxcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzRXhwYW5kZWQgPSBfLmdldChleHBhbmRlZCwgcm93SW5mby5uZXN0aW5nUGF0aClcbiAgICAgIGNvbnN0IHRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtyb3dJbmZvLm5lc3RpbmdQYXRoLmpvaW4oJ18nKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICB0clByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHJvdy5fdmlld0luZGV4ICUgMiA/ICctZXZlbicgOiAnLW9kZCdcbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50clByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4sIGkyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICAgICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICAgICAgICBnZXRUZFByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIGNvbHVtbiwgdGhpcylcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgY29sdW1uLCB0aGlzKVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICAgICAgICB0ZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgICAgICAgIC4uLnRkUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxJbmZvID0ge1xuICAgICAgICAgICAgICAuLi5yb3dJbmZvLFxuICAgICAgICAgICAgICBpc0V4cGFuZGVkLFxuICAgICAgICAgICAgICBjb2x1bW46IHsgLi4uY29sdW1uIH0sXG4gICAgICAgICAgICAgIHZhbHVlOiByb3dJbmZvLnJvd1tjb2x1bW4uaWRdLFxuICAgICAgICAgICAgICBwaXZvdGVkOiBjb2x1bW4ucGl2b3RlZCxcbiAgICAgICAgICAgICAgZXhwYW5kZXI6IGNvbHVtbi5leHBhbmRlcixcbiAgICAgICAgICAgICAgcmVzaXplZCxcbiAgICAgICAgICAgICAgc2hvdyxcbiAgICAgICAgICAgICAgdGRQcm9wcyxcbiAgICAgICAgICAgICAgY29sdW1uUHJvcHMsXG4gICAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAgIHN0eWxlcyxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjZWxsSW5mby52YWx1ZVxuXG4gICAgICAgICAgICBsZXQgaW50ZXJhY3Rpb25Qcm9wc1xuICAgICAgICAgICAgbGV0IGlzQnJhbmNoXG4gICAgICAgICAgICBsZXQgaXNQcmV2aWV3XG5cbiAgICAgICAgICAgIGNvbnN0IG9uRXhwYW5kZXJDbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgICBsZXQgbmV3RXhwYW5kZWQgPSBfLmNsb25lKGV4cGFuZGVkKVxuICAgICAgICAgICAgICBpZiAoaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIG5ld0V4cGFuZGVkID0gXy5zZXQobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBmYWxzZSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdFeHBhbmRlZCA9IF8uc2V0KG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwge30pXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiBuZXdFeHBhbmRlZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uRXhwYW5kZWRDaGFuZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgb25FeHBhbmRlZENoYW5nZShuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gYSBzdGFuZGFyZCBjZWxsXG4gICAgICAgICAgICBsZXQgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgIGNvbHVtbi5DZWxsLFxuICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgLy8gUmVzb2x2ZSBSZW5kZXJlcnNcbiAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCA9XG4gICAgICAgICAgICAgIGNvbHVtbi5BZ2dyZWdhdGVkIHx8XG4gICAgICAgICAgICAgICghY29sdW1uLmFnZ3JlZ2F0ZSA/IEFnZ3JlZ2F0ZWRDb21wb25lbnQgOiBjb2x1bW4uQ2VsbClcbiAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uRXhwYW5kZXIgfHwgRXhwYW5kZXJDb21wb25lbnRcbiAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCA9XG4gICAgICAgICAgICAgIGNvbHVtbi5QaXZvdFZhbHVlIHx8IFBpdm90VmFsdWVDb21wb25lbnRcbiAgICAgICAgICAgIGNvbnN0IERlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50ID1cbiAgICAgICAgICAgICAgUGl2b3RDb21wb25lbnQgfHxcbiAgICAgICAgICAgICAgKHByb3BzID0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgIDxSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uUGl2b3QgfHwgRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnRcblxuICAgICAgICAgICAgLy8gSXMgdGhpcyBjZWxsIGV4cGFuZGFibGU/XG4gICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCB8fCBjZWxsSW5mby5leHBhbmRlcikge1xuICAgICAgICAgICAgICAvLyBNYWtlIGl0IGV4cGFuZGFibGUgYnkgZGVmdWFsdFxuICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlID0gdHJ1ZVxuICAgICAgICAgICAgICBpbnRlcmFjdGlvblByb3BzID0ge1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IG9uRXhwYW5kZXJDbGljayxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBJZiBwaXZvdGVkLCBoYXMgbm8gc3ViUm93cywgYW5kIGRvZXMgbm90IGhhdmUgYSBzdWJDb21wb25lbnQsIGRvIG5vdCBtYWtlIGV4cGFuZGFibGVcbiAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNlbGxJbmZvLnN1YlJvd3MpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghU3ViQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvblByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQpIHtcbiAgICAgICAgICAgICAgLy8gSXMgdGhpcyBjb2x1bW4gYSBicmFuY2g/XG4gICAgICAgICAgICAgIGlzQnJhbmNoID1cbiAgICAgICAgICAgICAgICByb3dJbmZvLnJvd1twaXZvdElES2V5XSA9PT0gY29sdW1uLmlkICYmIGNlbGxJbmZvLnN1YlJvd3NcbiAgICAgICAgICAgICAgLy8gU2hvdWxkIHRoaXMgY29sdW1uIGJlIGJsYW5rP1xuICAgICAgICAgICAgICBpc1ByZXZpZXcgPVxuICAgICAgICAgICAgICAgIHBpdm90QnkuaW5kZXhPZihjb2x1bW4uaWQpID5cbiAgICAgICAgICAgICAgICAgIHBpdm90QnkuaW5kZXhPZihyb3dJbmZvLnJvd1twaXZvdElES2V5XSkgJiYgY2VsbEluZm8uc3ViUm93c1xuICAgICAgICAgICAgICAvLyBQaXZvdCBDZWxsIFJlbmRlciBPdmVycmlkZVxuICAgICAgICAgICAgICBpZiAoaXNCcmFuY2gpIHtcbiAgICAgICAgICAgICAgICAvLyBpc1Bpdm90XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZFBpdm90Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAuLi5jZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvd1twaXZvdFZhbEtleV0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgcm93W3Bpdm90VmFsS2V5XVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgICAgICAgICAgICAvLyBTaG93IHRoZSBwaXZvdCBwcmV2aWV3XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsSW5mby5hZ2dyZWdhdGVkKSB7XG4gICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZWxsSW5mby5leHBhbmRlcikge1xuICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgIHJvd1twaXZvdFZhbEtleV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBpZiAocGl2b3RCeSkge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsSW5mby5ncm91cGVkQnlQaXZvdCkge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNlbGxJbmZvLnN1YlJvd3MgJiYgIVN1YkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGNlbGxcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgICAgICAgIGtleT17aTIgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICAgICAgICFzaG93ICYmICctaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgJiYgJ3J0LWV4cGFuZGFibGUnLFxuICAgICAgICAgICAgICAgICAgKGlzQnJhbmNoIHx8IGlzUHJldmlldykgJiYgJ3J0LXBpdm90J1xuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICAgICAgICB7Li4uaW50ZXJhY3Rpb25Qcm9wc31cbiAgICAgICAgICAgICAgICB7Li4udGRQcm9wcy5yZXN0fVxuICAgICAgICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Jlc29sdmVkQ2VsbH1cbiAgICAgICAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UckNvbXBvbmVudD4sXG4gICAgICAgIHJvd0luZm8uc3ViUm93cyAmJlxuICAgICAgICAgIGlzRXhwYW5kZWQgJiZcbiAgICAgICAgICByb3dJbmZvLnN1YlJvd3MubWFwKChkLCBpKSA9PlxuICAgICAgICAgICAgbWFrZVBhZ2VSb3coZCwgaSwgcm93SW5mby5uZXN0aW5nUGF0aClcbiAgICAgICAgICApLFxuICAgICAgICBTdWJDb21wb25lbnQgJiZcbiAgICAgICAgICAhcm93SW5mby5zdWJSb3dzICYmXG4gICAgICAgICAgaXNFeHBhbmRlZCAmJlxuICAgICAgICAgIFN1YkNvbXBvbmVudChyb3dJbmZvKSxcbiAgICAgIF1cbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFkUm93ID0gKHJvdywgaSkgPT4ge1xuICAgICAgY29uc3QgdHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICctcGFkUm93JyxcbiAgICAgICAgICAgIChwYWdlUm93cy5sZW5ndGggKyBpKSAlIDIgPyAnLWV2ZW4nIDogJy1vZGQnLFxuICAgICAgICAgICAgdHJQcm9wcy5jbGFzc05hbWVcbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlIHx8IHt9fVxuICAgICAgICA+XG4gICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlUGFkQ29sdW1uKX1cbiAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFkQ29sdW1uID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgY29uc3QgdGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIHRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4udGRQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCAhc2hvdyAmJiAnLWhpZGRlbicpfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgey4uLnRkUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChQYWRSb3dDb21wb25lbnQpfVxuICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdEZvb3RQcm9wcyA9IGdldFRmb290UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICBjb25zdCB0Rm9vdFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRmb290VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZm9vdENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17dEZvb3RQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgc3R5bGU9e3RGb290UHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRGb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHRGb290VHJQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgICAgc3R5bGU9e3RGb290VHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50Rm9vdFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VDb2x1bW5Gb290ZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGZvb3RDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbHVtbkZvb3RlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHRGb290VGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGZvb3RUZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkZvb3RlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0Rm9vdGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIHRGb290VGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uRm9vdGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRGb290VGRQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uRm9vdGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgIXNob3cgJiYgJy1oaWRkZW4nKX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxuICAgICAgICAgIHsuLi50Rm9vdFRkUHJvcHMucmVzdH1cbiAgICAgICAgICB7Li4uY29sdW1uRm9vdGVyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uRm9vdGVyLCB7XG4gICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdpbmF0aW9uQ29tcG9uZW50XG4gICAgICAgICAgey4uLnJlc29sdmVkU3RhdGV9XG4gICAgICAgICAgcGFnZXM9e3BhZ2VzfVxuICAgICAgICAgIGNhblByZXZpb3VzPXtjYW5QcmV2aW91c31cbiAgICAgICAgICBjYW5OZXh0PXtjYW5OZXh0fVxuICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5vblBhZ2VDaGFuZ2V9XG4gICAgICAgICAgb25QYWdlU2l6ZUNoYW5nZT17dGhpcy5vblBhZ2VTaXplQ2hhbmdlfVxuICAgICAgICAgIGNsYXNzTmFtZT17cGFnaW5hdGlvblByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICBzdHlsZT17cGFnaW5hdGlvblByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi5wYWdpbmF0aW9uUHJvcHMucmVzdH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCByb290UHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICApXG4gICAgY29uc3QgdGFibGVQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFRhYmxlUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgKVxuICAgIGNvbnN0IHRCb2R5UHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRUYm9keVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIClcbiAgICBjb25zdCBsb2FkaW5nUHJvcHMgPSBnZXRMb2FkaW5nUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgY29uc3Qgbm9EYXRhUHJvcHMgPSBnZXROb0RhdGFQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICBjb25zdCByZXNpemVyUHJvcHMgPSBnZXRSZXNpemVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG5cbiAgICBjb25zdCBtYWtlVGFibGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uID0gbWFrZVBhZ2luYXRpb24oKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnUmVhY3RUYWJsZScsIGNsYXNzTmFtZSwgcm9vdFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAgICAgLi4ucm9vdFByb3BzLnN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJvb3RQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3dQYWdpbmF0aW9uICYmIHNob3dQYWdpbmF0aW9uVG9wXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdwYWdpbmF0aW9uLXRvcCc+XG4gICAgICAgICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3J0LXRhYmxlLXdyYXBwZXInPlxuICAgICAgICAgICAgPFRhYmxlQ29tcG9uZW50XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICB0YWJsZVByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSZXNpemluZyA/ICdydC1yZXNpemluZycgOiAnJ1xuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBzdHlsZT17dGFibGVQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgICAgey4uLnRhYmxlUHJvcHMucmVzdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge21ha2VDb2xHcm91cCgpfVxuICAgICAgICAgICAgICB7aGFzSGVhZGVyR3JvdXBzID8gbWFrZUhlYWRlckdyb3VwcygpIDogbnVsbH1cbiAgICAgICAgICAgICAge21ha2VIZWFkZXJzKCl9XG4gICAgICAgICAgICAgIHtoYXNGaWx0ZXJzID8gbWFrZUZpbHRlcnMoKSA6IG51bGx9XG4gICAgICAgICAgICAgIDxUYm9keUNvbXBvbmVudFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Qm9keVByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3RCb2R5UHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgICAgey4uLnRCb2R5UHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwYWdlUm93cy5tYXAoKGQsIGkpID0+IG1ha2VQYWdlUm93KGQsIGkpKX1cbiAgICAgICAgICAgICAgICB7cGFkUm93cy5tYXAobWFrZVBhZFJvdyl9XG4gICAgICAgICAgICAgIDwvVGJvZHlDb21wb25lbnQ+XG4gICAgICAgICAgICAgIHtoYXNDb2x1bW5Gb290ZXIgPyBtYWtlQ29sdW1uRm9vdGVycygpIDogbnVsbH1cbiAgICAgICAgICAgIDwvVGFibGVDb21wb25lbnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Nob3dQYWdpbmF0aW9uICYmIHNob3dQYWdpbmF0aW9uQm90dG9tXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdwYWdpbmF0aW9uLWJvdHRvbSc+XG4gICAgICAgICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgeyFwYWdlUm93cy5sZW5ndGggJiZcbiAgICAgICAgICAgIDxOb0RhdGFDb21wb25lbnQgey4uLm5vRGF0YVByb3BzfT5cbiAgICAgICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KG5vRGF0YVRleHQpfVxuICAgICAgICAgICAgPC9Ob0RhdGFDb21wb25lbnQ+fVxuICAgICAgICAgIDxMb2FkaW5nQ29tcG9uZW50XG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgbG9hZGluZ1RleHQ9e2xvYWRpbmdUZXh0fVxuICAgICAgICAgICAgey4uLmxvYWRpbmdQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBjaGlsZFByb3BzIGFyZSBvcHRpb25hbGx5IHBhc3NlZCB0byBhIGZ1bmN0aW9uLWFzLWEtY2hpbGRcbiAgICByZXR1cm4gY2hpbGRyZW4gPyBjaGlsZHJlbihmaW5hbFN0YXRlLCBtYWtlVGFibGUsIHRoaXMpIDogbWFrZVRhYmxlKClcbiAgfVxufVxuIl19