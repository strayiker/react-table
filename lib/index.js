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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

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
    key: 'componentDidMount',
    value: function componentDidMount() {
      var tableWrapper = _reactDom2.default.findDOMNode(this.tableRef);
      this.setState({ tableTotalWidth: tableWrapper.offsetWidth });
    }
  }, {
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
          fixedColumnIndex = resolvedState.fixedColumnIndex,
          loading = resolvedState.loading,
          pageSize = resolvedState.pageSize,
          page = resolvedState.page,
          sorted = resolvedState.sorted,
          filtered = resolvedState.filtered,
          resized = resolvedState.resized,
          expanded = resolvedState.expanded,
          pages = resolvedState.pages,
          onExpandedChange = resolvedState.onExpandedChange,
          TableWrapper = resolvedState.TableWrapper,
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
          currentlyResizing = resolvedState.currentlyResizing,
          tableTotalWidth = resolvedState.tableTotalWidth;

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

      var fixedColumnWidth = void 0;
      var rawColumnsWidth = 0;
      var floorColumnsWidth = 0;

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

        var minWidth = _utils2.default.getFirstDefined(column.minWidth, 0);
        var maxWidth = _utils2.default.getFirstDefined(column.maxWidth, Infinity);
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, minWidth);

        // calculate px
        if (tableTotalWidth) {
          var widthIsPercents = _utils2.default.isPercents(width);
          var minWidthIsPercents = _utils2.default.isPercents(minWidth);
          var maxWidthIsPercents = _utils2.default.isPercents(maxWidth);

          var widthValue = parseInt(width, 10);
          var minWidthValue = parseInt(minWidth, 10);
          var maxWidthValue = parseInt(maxWidth, 10);

          width = widthIsPercents ? _utils2.default.percentsToPx(widthValue, tableTotalWidth) : widthValue;

          minWidth = minWidthIsPercents ? _utils2.default.percentsToPx(minWidthValue, tableTotalWidth) : minWidthValue;

          maxWidth = maxWidthIsPercents ? _utils2.default.percentsToPx(maxWidthValue, tableTotalWidth) : maxWidthValue;

          width = _utils2.default.clamp(width, minWidth, maxWidth);

          rawColumnsWidth += width;
          width = Math.floor(width);
          floorColumnsWidth += width;

          var diff = Math.floor(rawColumnsWidth - floorColumnsWidth);

          if (diff >= 1) {
            width += diff;
            floorColumnsWidth += diff;
          }

          width = width + 'px';
        }

        var isFixed = i === fixedColumnIndex;

        if (isFixed) {
          fixedColumnWidth = width;
        }

        var isDummy = i === allVisibleColumns.length - 1;

        return _react2.default.createElement('col', {
          key: i + '-' + column.id,
          className: (0, _classnames2.default)('rt-colgroup-col', classes, { '-dummy': isDummy }),
          style: _extends({}, styles, {
            width: width
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

        var isDummy = i === headerGroups.length - 1;
        var isFixed = i === fixedColumnIndex;

        if (isFixed) {
          styles.width = fixedColumnWidth;
        }

        var content = _utils2.default.normalizeComponent(column.Header, {
          data: sortedData,
          column: column
        });

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, { '-dummy': isDummy, '-empty': !content, '-fixed': isFixed }),
            style: styles
          }, rest),
          content
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
        var isDummy = i === allVisibleColumns.length - 1;
        var isFixed = i === fixedColumnIndex;

        if (isFixed) {
          styles.width = fixedColumnWidth;
        }

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, 'rt-resizable-header', {
              '-cursor-pointer': isSortable,
              '-sort-desc': sort && sort.desc,
              '-sort-asc': sort && !sort.desc,
              '-hidden': !show,
              '-dummy': isDummy,
              '-fixed': isFixed,
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

        var isFixed = i === fixedColumnIndex;

        if (isFixed) {
          styles.width = fixedColumnWidth;
        }

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, { '-fixed': isFixed, '-empty': !isFilterable }),
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

            var isFixed = i2 === fixedColumnIndex;

            if (isFixed) {
              styles.width = fixedColumnWidth;
            }

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
                className: (0, _classnames2.default)(classes, !show && '-hidden', cellInfo.expandable && 'rt-expandable', (isBranch || isPreview) && 'rt-pivot', isFixed && '-fixed', isFixed && !resolvedCell && '-empty'),
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
            TableWrapper,
            { ref: function ref(c) {
                return _this2.tableRef = c;
              } },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0IiwidGFibGVXcmFwcGVyIiwiZmluZERPTU5vZGUiLCJ0YWJsZVJlZiIsInNldFN0YXRlIiwidGFibGVUb3RhbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJyZXNvbHZlZFN0YXRlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsImdldFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldENvbEdyb3VwQ29sUHJvcHMiLCJnZXRUaGVhZEdyb3VwUHJvcHMiLCJnZXRUaGVhZEdyb3VwVHJQcm9wcyIsImdldFRoZWFkR3JvdXBUaFByb3BzIiwiZ2V0VGhlYWRQcm9wcyIsImdldFRoZWFkVHJQcm9wcyIsImdldFRoZWFkVGhQcm9wcyIsImdldFRoZWFkRmlsdGVyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRoUHJvcHMiLCJnZXRUYm9keVByb3BzIiwiZ2V0VHJQcm9wcyIsImdldFRkUHJvcHMiLCJnZXRUZm9vdFByb3BzIiwiZ2V0VGZvb3RUclByb3BzIiwiZ2V0VGZvb3RUZFByb3BzIiwiZ2V0UGFnaW5hdGlvblByb3BzIiwiZ2V0TG9hZGluZ1Byb3BzIiwiZ2V0Tm9EYXRhUHJvcHMiLCJnZXRSZXNpemVyUHJvcHMiLCJzaG93UGFnaW5hdGlvbiIsInNob3dQYWdpbmF0aW9uVG9wIiwic2hvd1BhZ2luYXRpb25Cb3R0b20iLCJtYW51YWwiLCJsb2FkaW5nVGV4dCIsIm5vRGF0YVRleHQiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJwaXZvdElES2V5IiwicGl2b3RWYWxLZXkiLCJwaXZvdEJ5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJmaXhlZENvbHVtbkluZGV4IiwibG9hZGluZyIsInBhZ2VzIiwib25FeHBhbmRlZENoYW5nZSIsIlRhYmxlV3JhcHBlciIsIlRhYmxlQ29tcG9uZW50IiwiVGhlYWRDb21wb25lbnQiLCJUYm9keUNvbXBvbmVudCIsIlRyQ29tcG9uZW50IiwiVGhDb21wb25lbnQiLCJUZENvbXBvbmVudCIsIlRmb290Q29tcG9uZW50IiwiUGFnaW5hdGlvbkNvbXBvbmVudCIsIkxvYWRpbmdDb21wb25lbnQiLCJTdWJDb21wb25lbnQiLCJOb0RhdGFDb21wb25lbnQiLCJSZXNpemVyQ29tcG9uZW50IiwiRXhwYW5kZXJDb21wb25lbnQiLCJQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RDb21wb25lbnQiLCJBZ2dyZWdhdGVkQ29tcG9uZW50IiwiRmlsdGVyQ29tcG9uZW50IiwiUGFkUm93Q29tcG9uZW50IiwicmVzb2x2ZWREYXRhIiwiYWxsVmlzaWJsZUNvbHVtbnMiLCJoZWFkZXJHcm91cHMiLCJoYXNIZWFkZXJHcm91cHMiLCJzb3J0ZWREYXRhIiwic3RhcnRSb3ciLCJlbmRSb3ciLCJwYWdlUm93cyIsInNsaWNlIiwibWluUm93cyIsInBhZFJvd3MiLCJyYW5nZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJoYXNDb2x1bW5Gb290ZXIiLCJzb21lIiwiZCIsIkZvb3RlciIsImhhc0ZpbHRlcnMiLCJyZWN1cnNlUm93c1ZpZXdJbmRleCIsInJvd3MiLCJwYXRoIiwiaW5kZXgiLCJtYXAiLCJyb3ciLCJpIiwicm93V2l0aFZpZXdJbmRleCIsIl92aWV3SW5kZXgiLCJuZXdQYXRoIiwiY29uY2F0IiwiZ2V0IiwiY2FuUHJldmlvdXMiLCJjYW5OZXh0Iiwicm93SW5kZXgiLCJmaW5hbFN0YXRlIiwiZml4ZWRDb2x1bW5XaWR0aCIsInJhd0NvbHVtbnNXaWR0aCIsImZsb29yQ29sdW1uc1dpZHRoIiwibWFrZUNvbEdyb3VwIiwibWFrZUNvbCIsImNvbHVtbiIsInJlc2l6ZWRDb2wiLCJmaW5kIiwieCIsImlkIiwiY29sZ3JvdXBDb2xQcm9wcyIsInNwbGl0UHJvcHMiLCJ1bmRlZmluZWQiLCJjb2x1bW5Db2xncm91cENvbFByb3BzIiwiY2xhc3NlcyIsImNvbEdyb3VwQ29sQ2xhc3NOYW1lIiwic3R5bGVzIiwiY29sR3JvdXBDb2xTdHlsZSIsIm1pbldpZHRoIiwiZ2V0Rmlyc3REZWZpbmVkIiwibWF4V2lkdGgiLCJJbmZpbml0eSIsIndpZHRoIiwidmFsdWUiLCJ3aWR0aElzUGVyY2VudHMiLCJpc1BlcmNlbnRzIiwibWluV2lkdGhJc1BlcmNlbnRzIiwibWF4V2lkdGhJc1BlcmNlbnRzIiwid2lkdGhWYWx1ZSIsInBhcnNlSW50IiwibWluV2lkdGhWYWx1ZSIsIm1heFdpZHRoVmFsdWUiLCJwZXJjZW50c1RvUHgiLCJjbGFtcCIsImZsb29yIiwiZGlmZiIsImlzRml4ZWQiLCJpc0R1bW15IiwibWFrZUhlYWRlckdyb3VwcyIsInRoZWFkR3JvdXBQcm9wcyIsInRoZWFkR3JvdXBUclByb3BzIiwicmVzdCIsIm1ha2VIZWFkZXJHcm91cCIsInRoZWFkR3JvdXBUaFByb3BzIiwiY29sdW1uSGVhZGVyUHJvcHMiLCJnZXRIZWFkZXJQcm9wcyIsImhlYWRlckNsYXNzTmFtZSIsImhlYWRlclN0eWxlIiwiY29sU3BhbiIsImNvbHVtbnMiLCJjb250ZW50Iiwibm9ybWFsaXplQ29tcG9uZW50IiwiSGVhZGVyIiwiZGF0YSIsIm1ha2VIZWFkZXJzIiwidGhlYWRQcm9wcyIsInRoZWFkVHJQcm9wcyIsIm1ha2VIZWFkZXIiLCJzb3J0Iiwic2hvdyIsInRoZWFkVGhQcm9wcyIsImlzUmVzaXphYmxlIiwicmVzaXplciIsImUiLCJyZXNpemVyUHJvcHMiLCJpc1NvcnRhYmxlIiwiZGVzYyIsImluY2x1ZGVzIiwic2hpZnRLZXkiLCJtYWtlRmlsdGVycyIsInRoZWFkRmlsdGVyUHJvcHMiLCJ0aGVhZEZpbHRlclRyUHJvcHMiLCJtYWtlRmlsdGVyIiwidGhlYWRGaWx0ZXJUaFByb3BzIiwiZmlsdGVyIiwiUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQiLCJGaWx0ZXIiLCJpc0ZpbHRlcmFibGUiLCJvbkNoYW5nZSIsIm1ha2VQYWdlUm93Iiwicm93SW5mbyIsIm9yaWdpbmFsIiwidmlld0luZGV4IiwibGV2ZWwiLCJuZXN0aW5nUGF0aCIsImFnZ3JlZ2F0ZWQiLCJncm91cGVkQnlQaXZvdCIsInN1YlJvd3MiLCJpc0V4cGFuZGVkIiwidHJQcm9wcyIsImpvaW4iLCJpMiIsInRkUHJvcHMiLCJjb2x1bW5Qcm9wcyIsImNlbGxJbmZvIiwicGl2b3RlZCIsImV4cGFuZGVyIiwiaW50ZXJhY3Rpb25Qcm9wcyIsImlzQnJhbmNoIiwiaXNQcmV2aWV3Iiwib25FeHBhbmRlckNsaWNrIiwibmV3RXhwYW5kZWQiLCJjbG9uZSIsInNldCIsInNldFN0YXRlV2l0aERhdGEiLCJyZXNvbHZlZENlbGwiLCJDZWxsIiwiUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50IiwiQWdncmVnYXRlZCIsImFnZ3JlZ2F0ZSIsIlJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQiLCJFeHBhbmRlciIsIlJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCIsIlBpdm90VmFsdWUiLCJEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlJlc29sdmVkUGl2b3RDb21wb25lbnQiLCJQaXZvdCIsImV4cGFuZGFibGUiLCJvbkNsaWNrIiwiaW5kZXhPZiIsIm1ha2VQYWRSb3ciLCJtYWtlUGFkQ29sdW1uIiwibWFrZUNvbHVtbkZvb3RlcnMiLCJ0Rm9vdFByb3BzIiwidEZvb3RUclByb3BzIiwibWFrZUNvbHVtbkZvb3RlciIsInRGb290VGRQcm9wcyIsImNvbHVtbkZvb3RlclByb3BzIiwiZ2V0Rm9vdGVyUHJvcHMiLCJtYWtlUGFnaW5hdGlvbiIsInBhZ2luYXRpb25Qcm9wcyIsInJvb3RQcm9wcyIsInRhYmxlUHJvcHMiLCJ0Qm9keVByb3BzIiwibG9hZGluZ1Byb3BzIiwibm9EYXRhUHJvcHMiLCJtYWtlVGFibGUiLCJwYWdpbmF0aW9uIiwiYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OztBQUpBOzs7QUFNTyxJQUFNQSx3RUFBTjs7SUFFY0MsVTs7O0FBR25CLHNCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBR2xCLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0csYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CSCxJQUFuQixPQUFyQjtBQUNBLFVBQUtJLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkosSUFBcEIsT0FBdEI7QUFDQSxVQUFLSyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JMLElBQXBC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USwwQ0FBUixDOztBQUFuQnJSLFUsQ0FDWndSLFk7a0JBRFl4UixVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG4vL1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscydcbmltcG9ydCBMaWZlY3ljbGUgZnJvbSAnLi9saWZlY3ljbGUnXG5pbXBvcnQgTWV0aG9kcyBmcm9tICcuL21ldGhvZHMnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdFByb3BzJ1xuXG5leHBvcnQgY29uc3QgUmVhY3RUYWJsZURlZmF1bHRzID0gZGVmYXVsdFByb3BzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0VGFibGUgZXh0ZW5kcyBNZXRob2RzKExpZmVjeWNsZShDb21wb25lbnQpKSB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHNcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLmdldFJlc29sdmVkU3RhdGUgPSB0aGlzLmdldFJlc29sdmVkU3RhdGUuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0RGF0YU1vZGVsID0gdGhpcy5nZXREYXRhTW9kZWwuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0U29ydGVkRGF0YSA9IHRoaXMuZ2V0U29ydGVkRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5maXJlRmV0Y2hEYXRhID0gdGhpcy5maXJlRmV0Y2hEYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFByb3BPclN0YXRlID0gdGhpcy5nZXRQcm9wT3JTdGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRTdGF0ZU9yUHJvcCA9IHRoaXMuZ2V0U3RhdGVPclByb3AuYmluZCh0aGlzKVxuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zb3J0RGF0YSA9IHRoaXMuc29ydERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0TWluUm93cyA9IHRoaXMuZ2V0TWluUm93cy5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UgPSB0aGlzLm9uUGFnZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblBhZ2VTaXplQ2hhbmdlID0gdGhpcy5vblBhZ2VTaXplQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLnNvcnRDb2x1bW4gPSB0aGlzLnNvcnRDb2x1bW4uYmluZCh0aGlzKVxuICAgIHRoaXMuZmlsdGVyQ29sdW1uID0gdGhpcy5maWx0ZXJDb2x1bW4uYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uU3RhcnQgPSB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUNvbHVtbkVuZCA9IHRoaXMucmVzaXplQ29sdW1uRW5kLmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZyA9IHRoaXMucmVzaXplQ29sdW1uTW92aW5nLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwYWdlOiAwLFxuICAgICAgcGFnZVNpemU6IHByb3BzLmRlZmF1bHRQYWdlU2l6ZSxcbiAgICAgIHNvcnRlZDogcHJvcHMuZGVmYXVsdFNvcnRlZCxcbiAgICAgIGV4cGFuZGVkOiBwcm9wcy5kZWZhdWx0RXhwYW5kZWQsXG4gICAgICBmaWx0ZXJlZDogcHJvcHMuZGVmYXVsdEZpbHRlcmVkLFxuICAgICAgcmVzaXplZDogcHJvcHMuZGVmYXVsdFJlc2l6ZWQsXG4gICAgICBjdXJyZW50bHlSZXNpemluZzogZmFsc2UsXG4gICAgICBza2lwTmV4dFNvcnQ6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHRhYmxlV3JhcHBlciA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMudGFibGVSZWYpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhYmxlVG90YWxXaWR0aDogdGFibGVXcmFwcGVyLm9mZnNldFdpZHRoIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHJlc29sdmVkU3RhdGUgPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3R5bGUsXG4gICAgICBnZXRQcm9wcyxcbiAgICAgIGdldFRhYmxlUHJvcHMsXG4gICAgICBnZXRDb2xHcm91cENvbFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkUHJvcHMsXG4gICAgICBnZXRUaGVhZFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZFRoUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzLFxuICAgICAgZ2V0VGJvZHlQcm9wcyxcbiAgICAgIGdldFRyUHJvcHMsXG4gICAgICBnZXRUZFByb3BzLFxuICAgICAgZ2V0VGZvb3RQcm9wcyxcbiAgICAgIGdldFRmb290VHJQcm9wcyxcbiAgICAgIGdldFRmb290VGRQcm9wcyxcbiAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyxcbiAgICAgIGdldExvYWRpbmdQcm9wcyxcbiAgICAgIGdldE5vRGF0YVByb3BzLFxuICAgICAgZ2V0UmVzaXplclByb3BzLFxuICAgICAgc2hvd1BhZ2luYXRpb24sXG4gICAgICBzaG93UGFnaW5hdGlvblRvcCxcbiAgICAgIHNob3dQYWdpbmF0aW9uQm90dG9tLFxuICAgICAgbWFudWFsLFxuICAgICAgbG9hZGluZ1RleHQsXG4gICAgICBub0RhdGFUZXh0LFxuICAgICAgc29ydGFibGUsXG4gICAgICByZXNpemFibGUsXG4gICAgICBmaWx0ZXJhYmxlLFxuICAgICAgLy8gUGl2b3RpbmcgU3RhdGVcbiAgICAgIHBpdm90SURLZXksXG4gICAgICBwaXZvdFZhbEtleSxcbiAgICAgIHBpdm90QnksXG4gICAgICBzdWJSb3dzS2V5LFxuICAgICAgYWdncmVnYXRlZEtleSxcbiAgICAgIG9yaWdpbmFsS2V5LFxuICAgICAgaW5kZXhLZXksXG4gICAgICBncm91cGVkQnlQaXZvdEtleSxcbiAgICAgIC8vIEZpeGVkXG4gICAgICBmaXhlZENvbHVtbkluZGV4LFxuICAgICAgLy8gU3RhdGVcbiAgICAgIGxvYWRpbmcsXG4gICAgICBwYWdlU2l6ZSxcbiAgICAgIHBhZ2UsXG4gICAgICBzb3J0ZWQsXG4gICAgICBmaWx0ZXJlZCxcbiAgICAgIHJlc2l6ZWQsXG4gICAgICBleHBhbmRlZCxcbiAgICAgIHBhZ2VzLFxuICAgICAgb25FeHBhbmRlZENoYW5nZSxcbiAgICAgIC8vIENvbXBvbmVudHNcbiAgICAgIFRhYmxlV3JhcHBlcixcbiAgICAgIFRhYmxlQ29tcG9uZW50LFxuICAgICAgVGhlYWRDb21wb25lbnQsXG4gICAgICBUYm9keUNvbXBvbmVudCxcbiAgICAgIFRyQ29tcG9uZW50LFxuICAgICAgVGhDb21wb25lbnQsXG4gICAgICBUZENvbXBvbmVudCxcbiAgICAgIFRmb290Q29tcG9uZW50LFxuICAgICAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgICAgIExvYWRpbmdDb21wb25lbnQsXG4gICAgICBTdWJDb21wb25lbnQsXG4gICAgICBOb0RhdGFDb21wb25lbnQsXG4gICAgICBSZXNpemVyQ29tcG9uZW50LFxuICAgICAgRXhwYW5kZXJDb21wb25lbnQsXG4gICAgICBQaXZvdFZhbHVlQ29tcG9uZW50LFxuICAgICAgUGl2b3RDb21wb25lbnQsXG4gICAgICBBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgRmlsdGVyQ29tcG9uZW50LFxuICAgICAgUGFkUm93Q29tcG9uZW50LFxuICAgICAgLy8gRGF0YSBtb2RlbFxuICAgICAgcmVzb2x2ZWREYXRhLFxuICAgICAgYWxsVmlzaWJsZUNvbHVtbnMsXG4gICAgICBoZWFkZXJHcm91cHMsXG4gICAgICBoYXNIZWFkZXJHcm91cHMsXG4gICAgICAvLyBTb3J0ZWQgRGF0YVxuICAgICAgc29ydGVkRGF0YSxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nLFxuICAgICAgdGFibGVUb3RhbFdpZHRoLFxuICAgIH0gPSByZXNvbHZlZFN0YXRlXG5cbiAgICAvLyBQYWdpbmF0aW9uXG4gICAgY29uc3Qgc3RhcnRSb3cgPSBwYWdlU2l6ZSAqIHBhZ2VcbiAgICBjb25zdCBlbmRSb3cgPSBzdGFydFJvdyArIHBhZ2VTaXplXG4gICAgbGV0IHBhZ2VSb3dzID0gbWFudWFsID8gcmVzb2x2ZWREYXRhIDogc29ydGVkRGF0YS5zbGljZShzdGFydFJvdywgZW5kUm93KVxuICAgIGNvbnN0IG1pblJvd3MgPSB0aGlzLmdldE1pblJvd3MoKVxuICAgIGNvbnN0IHBhZFJvd3MgPSBfLnJhbmdlKE1hdGgubWF4KG1pblJvd3MgLSBwYWdlUm93cy5sZW5ndGgsIDApKVxuXG4gICAgY29uc3QgaGFzQ29sdW1uRm9vdGVyID0gYWxsVmlzaWJsZUNvbHVtbnMuc29tZShkID0+IGQuRm9vdGVyKVxuICAgIGNvbnN0IGhhc0ZpbHRlcnMgPSBmaWx0ZXJhYmxlIHx8IGFsbFZpc2libGVDb2x1bW5zLnNvbWUoZCA9PiBkLmZpbHRlcmFibGUpXG5cbiAgICBjb25zdCByZWN1cnNlUm93c1ZpZXdJbmRleCA9IChyb3dzLCBwYXRoID0gW10sIGluZGV4ID0gLTEpID0+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHJvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgICAgY29uc3Qgcm93V2l0aFZpZXdJbmRleCA9IHtcbiAgICAgICAgICAgIC4uLnJvdyxcbiAgICAgICAgICAgIF92aWV3SW5kZXg6IGluZGV4LFxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5jb25jYXQoW2ldKVxuICAgICAgICAgIGlmIChyb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldICYmIF8uZ2V0KGV4cGFuZGVkLCBuZXdQYXRoKSkge1xuICAgICAgICAgICAgO1tyb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldLCBpbmRleF0gPSByZWN1cnNlUm93c1ZpZXdJbmRleChcbiAgICAgICAgICAgICAgcm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSxcbiAgICAgICAgICAgICAgbmV3UGF0aCxcbiAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJvd1dpdGhWaWV3SW5kZXhcbiAgICAgICAgfSksXG4gICAgICAgIGluZGV4LFxuICAgICAgXVxuICAgIH1cbiAgICA7W3BhZ2VSb3dzXSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KHBhZ2VSb3dzKVxuXG4gICAgY29uc3QgY2FuUHJldmlvdXMgPSBwYWdlID4gMFxuICAgIGNvbnN0IGNhbk5leHQgPSBwYWdlICsgMSA8IHBhZ2VzXG5cbiAgICBsZXQgcm93SW5kZXggPSAtMVxuXG4gICAgY29uc3QgZmluYWxTdGF0ZSA9IHtcbiAgICAgIC4uLnJlc29sdmVkU3RhdGUsXG4gICAgICBzdGFydFJvdyxcbiAgICAgIGVuZFJvdyxcbiAgICAgIHBhZ2VSb3dzLFxuICAgICAgbWluUm93cyxcbiAgICAgIHBhZFJvd3MsXG4gICAgICBoYXNDb2x1bW5Gb290ZXIsXG4gICAgICBjYW5QcmV2aW91cyxcbiAgICAgIGNhbk5leHQsXG4gICAgfVxuXG4gICAgbGV0IGZpeGVkQ29sdW1uV2lkdGhcbiAgICBsZXQgcmF3Q29sdW1uc1dpZHRoID0gMFxuICAgIGxldCBmbG9vckNvbHVtbnNXaWR0aCA9IDBcblxuICAgIC8vIFZpc3VhbCBDb21wb25lbnRzXG5cbiAgICBjb25zdCBtYWtlQ29sR3JvdXAgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Y29sZ3JvdXA+XG4gICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlQ29sKX1cbiAgICAgICAgPC9jb2xncm91cD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cblxuICAgICAgY29uc3QgY29sZ3JvdXBDb2xQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0Q29sR3JvdXBDb2xQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkNvbGdyb3VwQ29sUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRDb2xHcm91cENvbFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uY29sR3JvdXBDb2xDbGFzc05hbWUsXG4gICAgICAgIGNvbGdyb3VwQ29sUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Db2xncm91cENvbFByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uY29sR3JvdXBDb2xTdHlsZSxcbiAgICAgICAgLi4uY29sZ3JvdXBDb2xQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uQ29sZ3JvdXBDb2xQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgbGV0IG1pbldpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIGNvbHVtbi5taW5XaWR0aCxcbiAgICAgICAgMCxcbiAgICAgIClcbiAgICAgIGxldCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICBjb2x1bW4ubWF4V2lkdGgsXG4gICAgICAgIEluZmluaXR5LFxuICAgICAgKVxuICAgICAgbGV0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgbWluV2lkdGhcbiAgICAgIClcblxuICAgICAgLy8gY2FsY3VsYXRlIHB4XG4gICAgICBpZiAodGFibGVUb3RhbFdpZHRoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoSXNQZXJjZW50cyA9IF8uaXNQZXJjZW50cyh3aWR0aClcbiAgICAgICAgY29uc3QgbWluV2lkdGhJc1BlcmNlbnRzID0gXy5pc1BlcmNlbnRzKG1pbldpZHRoKVxuICAgICAgICBjb25zdCBtYXhXaWR0aElzUGVyY2VudHMgPSBfLmlzUGVyY2VudHMobWF4V2lkdGgpXG5cbiAgICAgICAgY29uc3Qgd2lkdGhWYWx1ZSA9IHBhcnNlSW50KHdpZHRoLCAxMClcbiAgICAgICAgY29uc3QgbWluV2lkdGhWYWx1ZSA9IHBhcnNlSW50KG1pbldpZHRoLCAxMClcbiAgICAgICAgY29uc3QgbWF4V2lkdGhWYWx1ZSA9IHBhcnNlSW50KG1heFdpZHRoLCAxMClcblxuICAgICAgICB3aWR0aCA9IHdpZHRoSXNQZXJjZW50c1xuICAgICAgICAgID8gXy5wZXJjZW50c1RvUHgod2lkdGhWYWx1ZSwgdGFibGVUb3RhbFdpZHRoKVxuICAgICAgICAgIDogd2lkdGhWYWx1ZVxuXG4gICAgICAgIG1pbldpZHRoID0gbWluV2lkdGhJc1BlcmNlbnRzXG4gICAgICAgICAgPyBfLnBlcmNlbnRzVG9QeChtaW5XaWR0aFZhbHVlLCB0YWJsZVRvdGFsV2lkdGgpXG4gICAgICAgICAgOiBtaW5XaWR0aFZhbHVlXG5cbiAgICAgICAgbWF4V2lkdGggPSBtYXhXaWR0aElzUGVyY2VudHNcbiAgICAgICAgICA/IF8ucGVyY2VudHNUb1B4KG1heFdpZHRoVmFsdWUsIHRhYmxlVG90YWxXaWR0aClcbiAgICAgICAgICA6IG1heFdpZHRoVmFsdWVcblxuICAgICAgICB3aWR0aCA9IF8uY2xhbXAod2lkdGgsIG1pbldpZHRoLCBtYXhXaWR0aClcblxuICAgICAgICByYXdDb2x1bW5zV2lkdGggKz0gd2lkdGhcbiAgICAgICAgd2lkdGggPSBNYXRoLmZsb29yKHdpZHRoKVxuICAgICAgICBmbG9vckNvbHVtbnNXaWR0aCArPSB3aWR0aFxuXG4gICAgICAgIGNvbnN0IGRpZmYgPSBNYXRoLmZsb29yKHJhd0NvbHVtbnNXaWR0aCAtIGZsb29yQ29sdW1uc1dpZHRoKVxuXG4gICAgICAgIGlmIChkaWZmID49IDEpIHtcbiAgICAgICAgICB3aWR0aCArPSBkaWZmXG4gICAgICAgICAgZmxvb3JDb2x1bW5zV2lkdGggKz0gZGlmZlxuICAgICAgICB9XG5cbiAgICAgICAgd2lkdGggPSBgJHt3aWR0aH1weGBcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPT09IGZpeGVkQ29sdW1uSW5kZXhcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgZml4ZWRDb2x1bW5XaWR0aCA9IHdpZHRoXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRHVtbXkgPSBpID09PSBhbGxWaXNpYmxlQ29sdW1ucy5sZW5ndGggLSAxXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxjb2xcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdydC1jb2xncm91cC1jb2wnLCBjbGFzc2VzLCB7ICctZHVtbXknOiBpc0R1bW15IH0pfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyR3JvdXBzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRHcm91cFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZEdyb3VwVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1oZWFkZXJHcm91cHMnLCB0aGVhZEdyb3VwUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17dGhlYWRHcm91cFByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50aGVhZEdyb3VwUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZEdyb3VwVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRHcm91cFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRHcm91cFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChtYWtlSGVhZGVyR3JvdXApfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlckdyb3VwID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRHcm91cFRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgdGhlYWRHcm91cFRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZEdyb3VwVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbFNwYW4gPSBjb2x1bW4uY29sdW1ucy5sZW5ndGhcblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRHcm91cFRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgICAgY29sU3BhbixcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNEdW1teSA9IGkgPT09IGhlYWRlckdyb3Vwcy5sZW5ndGggLSAxXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA9PT0gZml4ZWRDb2x1bW5JbmRleFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbldpZHRoXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uSGVhZGVyLCB7XG4gICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCB7ICctZHVtbXknOiBpc0R1bW15LCAnLWVtcHR5JzogIWNvbnRlbnQsICctZml4ZWQnOiBpc0ZpeGVkIH0pfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWhlYWRlcicsIHRoZWFkUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17dGhlYWRQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udGhlYWRQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUhlYWRlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3Qgc29ydCA9IHNvcnRlZC5maW5kKGQgPT4gZC5pZCA9PT0gY29sdW1uLmlkKVxuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgY29uc3QgdGhlYWRUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZFRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZFRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZFRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNSZXNpemFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChjb2x1bW4ucmVzaXphYmxlLCByZXNpemFibGUsIGZhbHNlKVxuICAgICAgY29uc3QgcmVzaXplciA9IGlzUmVzaXphYmxlXG4gICAgICAgID8gKDxSZXNpemVyQ29tcG9uZW50XG4gICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChjb2x1bW4sIGUsIGZhbHNlKX1cbiAgICAgICAgICBvblRvdWNoU3RhcnQ9e2UgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChjb2x1bW4sIGUsIHRydWUpfVxuICAgICAgICAgIHsuLi5yZXNpemVyUHJvcHN9XG4gICAgICAgIC8+KVxuICAgICAgICA6IG51bGxcblxuICAgICAgY29uc3QgaXNTb3J0YWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5zb3J0YWJsZSwgc29ydGFibGUsIGZhbHNlKVxuICAgICAgY29uc3QgaXNEdW1teSA9IGkgPT09IGFsbFZpc2libGVDb2x1bW5zLmxlbmd0aCAtIDFcbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpID09PSBmaXhlZENvbHVtbkluZGV4XG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uV2lkdGhcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAncnQtcmVzaXphYmxlLWhlYWRlcicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICctY3Vyc29yLXBvaW50ZXInOiBpc1NvcnRhYmxlLFxuICAgICAgICAgICAgICAnLXNvcnQtZGVzYyc6IHNvcnQgJiYgc29ydC5kZXNjLFxuICAgICAgICAgICAgICAnLXNvcnQtYXNjJzogc29ydCAmJiAhc29ydC5kZXNjLFxuICAgICAgICAgICAgICAnLWhpZGRlbic6ICFzaG93LFxuICAgICAgICAgICAgICAnLWR1bW15JzogaXNEdW1teSxcbiAgICAgICAgICAgICAgJy1maXhlZCc6IGlzRml4ZWQsXG4gICAgICAgICAgICAgICdydC1oZWFkZXItcGl2b3QnOiBwaXZvdEJ5ICYmIHBpdm90Qnkuc2xpY2UoMCwgLTEpLmluY2x1ZGVzKGNvbHVtbi5pZCksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHRvZ2dsZVNvcnQ9e2UgPT4ge1xuICAgICAgICAgICAgaXNTb3J0YWJsZSAmJiB0aGlzLnNvcnRDb2x1bW4oY29sdW1uLCBlLnNoaWZ0S2V5KVxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncnQtcmVzaXphYmxlLWhlYWRlci1jb250ZW50Jz5cbiAgICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uSGVhZGVyLCB7XG4gICAgICAgICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Jlc2l6ZXJ9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUZpbHRlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEZpbHRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1maWx0ZXJzJywgdGhlYWRGaWx0ZXJQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt0aGVhZEZpbHRlclByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50aGVhZEZpbHRlclByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRGaWx0ZXJUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZEZpbHRlclRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRGaWx0ZXJUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlRmlsdGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VGaWx0ZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEZpbHRlclRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkRmlsdGVyVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkRmlsdGVyVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkRmlsdGVyVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWx0ZXIgPSBmaWx0ZXJlZC5maW5kKGZpbHRlciA9PiBmaWx0ZXIuaWQgPT09IGNvbHVtbi5pZClcblxuICAgICAgY29uc3QgUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQgPSBjb2x1bW4uRmlsdGVyIHx8IEZpbHRlckNvbXBvbmVudFxuXG4gICAgICBjb25zdCBpc0ZpbHRlcmFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgY29sdW1uLmZpbHRlcmFibGUsXG4gICAgICAgIGZpbHRlcmFibGUsXG4gICAgICAgIGZhbHNlXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpID09PSBmaXhlZENvbHVtbkluZGV4XG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uV2lkdGhcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCB7ICctZml4ZWQnOiBpc0ZpeGVkLCAnLWVtcHR5JzogIWlzRmlsdGVyYWJsZSB9KX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge2lzRmlsdGVyYWJsZVxuICAgICAgICAgICAgPyBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiB0aGlzLmZpbHRlckNvbHVtbihjb2x1bW4sIHZhbHVlKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGVmYXVsdFByb3BzLmNvbHVtbi5GaWx0ZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFnZVJvdyA9IChyb3csIGksIHBhdGggPSBbXSkgPT4ge1xuICAgICAgY29uc3Qgcm93SW5mbyA9IHtcbiAgICAgICAgb3JpZ2luYWw6IHJvd1tvcmlnaW5hbEtleV0sXG4gICAgICAgIHJvdzogcm93LFxuICAgICAgICBpbmRleDogcm93W2luZGV4S2V5XSxcbiAgICAgICAgdmlld0luZGV4OiArK3Jvd0luZGV4LFxuICAgICAgICBsZXZlbDogcGF0aC5sZW5ndGgsXG4gICAgICAgIG5lc3RpbmdQYXRoOiBwYXRoLmNvbmNhdChbaV0pLFxuICAgICAgICBhZ2dyZWdhdGVkOiByb3dbYWdncmVnYXRlZEtleV0sXG4gICAgICAgIGdyb3VwZWRCeVBpdm90OiByb3dbZ3JvdXBlZEJ5UGl2b3RLZXldLFxuICAgICAgICBzdWJSb3dzOiByb3dbc3ViUm93c0tleV0sXG4gICAgICB9XG4gICAgICBjb25zdCBpc0V4cGFuZGVkID0gXy5nZXQoZXhwYW5kZWQsIHJvd0luZm8ubmVzdGluZ1BhdGgpXG4gICAgICBjb25zdCB0clByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUclByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiBbXG4gICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgIGtleT17cm93SW5mby5uZXN0aW5nUGF0aC5qb2luKCdfJyl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgdHJQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICByb3cuX3ZpZXdJbmRleCAlIDIgPyAnLWV2ZW4nIDogJy1vZGQnXG4gICAgICAgICAgKX1cbiAgICAgICAgICBzdHlsZT17dHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udHJQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcCgoY29sdW1uLCBpMikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgICAgICAgY29uc3QgdGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgICAgICAgZ2V0VGRQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCBjb2x1bW4sIHRoaXMpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgICAgICAgY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIGNvbHVtbiwgdGhpcylcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgICAgICAgdGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAgICAgICAuLi50ZFByb3BzLnN0eWxlLFxuICAgICAgICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpc0ZpeGVkID0gaTIgPT09IGZpeGVkQ29sdW1uSW5kZXhcblxuICAgICAgICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5XaWR0aFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjZWxsSW5mbyA9IHtcbiAgICAgICAgICAgICAgLi4ucm93SW5mbyxcbiAgICAgICAgICAgICAgaXNFeHBhbmRlZCxcbiAgICAgICAgICAgICAgY29sdW1uOiB7IC4uLmNvbHVtbiB9LFxuICAgICAgICAgICAgICB2YWx1ZTogcm93SW5mby5yb3dbY29sdW1uLmlkXSxcbiAgICAgICAgICAgICAgcGl2b3RlZDogY29sdW1uLnBpdm90ZWQsXG4gICAgICAgICAgICAgIGV4cGFuZGVyOiBjb2x1bW4uZXhwYW5kZXIsXG4gICAgICAgICAgICAgIHJlc2l6ZWQsXG4gICAgICAgICAgICAgIHNob3csXG4gICAgICAgICAgICAgIHRkUHJvcHMsXG4gICAgICAgICAgICAgIGNvbHVtblByb3BzLFxuICAgICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgICBzdHlsZXMsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY2VsbEluZm8udmFsdWVcblxuICAgICAgICAgICAgbGV0IGludGVyYWN0aW9uUHJvcHNcbiAgICAgICAgICAgIGxldCBpc0JyYW5jaFxuICAgICAgICAgICAgbGV0IGlzUHJldmlld1xuXG4gICAgICAgICAgICBjb25zdCBvbkV4cGFuZGVyQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgICAgICAgbGV0IG5ld0V4cGFuZGVkID0gXy5jbG9uZShleHBhbmRlZClcbiAgICAgICAgICAgICAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICBuZXdFeHBhbmRlZCA9IF8uc2V0KG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwgZmFsc2UpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3RXhwYW5kZWQgPSBfLnNldChuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIHt9KVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBleHBhbmRlZDogbmV3RXhwYW5kZWQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBvbkV4cGFuZGVkQ2hhbmdlICYmXG4gICAgICAgICAgICAgICAgICAgIG9uRXhwYW5kZWRDaGFuZ2UobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGEgc3RhbmRhcmQgY2VsbFxuICAgICAgICAgICAgbGV0IHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICBjb2x1bW4uQ2VsbCxcbiAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIC8vIFJlc29sdmUgUmVuZGVyZXJzXG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uQWdncmVnYXRlZCB8fFxuICAgICAgICAgICAgICAoIWNvbHVtbi5hZ2dyZWdhdGUgPyBBZ2dyZWdhdGVkQ29tcG9uZW50IDogY29sdW1uLkNlbGwpXG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLkV4cGFuZGVyIHx8IEV4cGFuZGVyQ29tcG9uZW50XG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uUGl2b3RWYWx1ZSB8fCBQaXZvdFZhbHVlQ29tcG9uZW50XG4gICAgICAgICAgICBjb25zdCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCA9XG4gICAgICAgICAgICAgIFBpdm90Q29tcG9uZW50IHx8XG4gICAgICAgICAgICAgIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8UmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICA8UmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZFBpdm90Q29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLlBpdm90IHx8IERlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50XG5cbiAgICAgICAgICAgIC8vIElzIHRoaXMgY2VsbCBleHBhbmRhYmxlP1xuICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQgfHwgY2VsbEluZm8uZXhwYW5kZXIpIHtcbiAgICAgICAgICAgICAgLy8gTWFrZSBpdCBleHBhbmRhYmxlIGJ5IGRlZnVhbHRcbiAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcyA9IHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBvbkV4cGFuZGVyQ2xpY2ssXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gSWYgcGl2b3RlZCwgaGFzIG5vIHN1YlJvd3MsIGFuZCBkb2VzIG5vdCBoYXZlIGEgc3ViQ29tcG9uZW50LCBkbyBub3QgbWFrZSBleHBhbmRhYmxlXG4gICAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsSW5mby5zdWJSb3dzKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIVN1YkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkKSB7XG4gICAgICAgICAgICAgIC8vIElzIHRoaXMgY29sdW1uIGEgYnJhbmNoP1xuICAgICAgICAgICAgICBpc0JyYW5jaCA9XG4gICAgICAgICAgICAgICAgcm93SW5mby5yb3dbcGl2b3RJREtleV0gPT09IGNvbHVtbi5pZCAmJiBjZWxsSW5mby5zdWJSb3dzXG4gICAgICAgICAgICAgIC8vIFNob3VsZCB0aGlzIGNvbHVtbiBiZSBibGFuaz9cbiAgICAgICAgICAgICAgaXNQcmV2aWV3ID1cbiAgICAgICAgICAgICAgICBwaXZvdEJ5LmluZGV4T2YoY29sdW1uLmlkKSA+XG4gICAgICAgICAgICAgICAgICBwaXZvdEJ5LmluZGV4T2Yocm93SW5mby5yb3dbcGl2b3RJREtleV0pICYmIGNlbGxJbmZvLnN1YlJvd3NcbiAgICAgICAgICAgICAgLy8gUGl2b3QgQ2VsbCBSZW5kZXIgT3ZlcnJpZGVcbiAgICAgICAgICAgICAgaWYgKGlzQnJhbmNoKSB7XG4gICAgICAgICAgICAgICAgLy8gaXNQaXZvdFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRQaXZvdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3dbcGl2b3RWYWxLZXldLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHJvd1twaXZvdFZhbEtleV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNQcmV2aWV3KSB7XG4gICAgICAgICAgICAgICAgLy8gU2hvdyB0aGUgcGl2b3QgcHJldmlld1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbEluZm8uYWdncmVnYXRlZCkge1xuICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2VsbEluZm8uZXhwYW5kZXIpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICByb3dbcGl2b3RWYWxLZXldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgaWYgKHBpdm90QnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbEluZm8uZ3JvdXBlZEJ5UGl2b3QpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsSW5mby5zdWJSb3dzICYmICFTdWJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBjZWxsXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICAgICAgICBrZXk9e2kyICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAgICAgICAhc2hvdyAmJiAnLWhpZGRlbicsXG4gICAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlICYmICdydC1leHBhbmRhYmxlJyxcbiAgICAgICAgICAgICAgICAgIChpc0JyYW5jaCB8fCBpc1ByZXZpZXcpICYmICdydC1waXZvdCcsXG4gICAgICAgICAgICAgICAgICBpc0ZpeGVkICYmICctZml4ZWQnLFxuICAgICAgICAgICAgICAgICAgKGlzRml4ZWQgJiYgIXJlc29sdmVkQ2VsbCkgJiYgJy1lbXB0eSdcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgICAgICAgey4uLmludGVyYWN0aW9uUHJvcHN9XG4gICAgICAgICAgICAgICAgey4uLnRkUHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgICB7Li4uY29sdW1uUHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyZXNvbHZlZENlbGx9XG4gICAgICAgICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVHJDb21wb25lbnQ+LFxuICAgICAgICByb3dJbmZvLnN1YlJvd3MgJiZcbiAgICAgICAgICBpc0V4cGFuZGVkICYmXG4gICAgICAgICAgcm93SW5mby5zdWJSb3dzLm1hcCgoZCwgaSkgPT5cbiAgICAgICAgICAgIG1ha2VQYWdlUm93KGQsIGksIHJvd0luZm8ubmVzdGluZ1BhdGgpXG4gICAgICAgICAgKSxcbiAgICAgICAgU3ViQ29tcG9uZW50ICYmXG4gICAgICAgICAgIXJvd0luZm8uc3ViUm93cyAmJlxuICAgICAgICAgIGlzRXhwYW5kZWQgJiZcbiAgICAgICAgICBTdWJDb21wb25lbnQocm93SW5mbyksXG4gICAgICBdXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZFJvdyA9IChyb3csIGkpID0+IHtcbiAgICAgIGNvbnN0IHRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAnLXBhZFJvdycsXG4gICAgICAgICAgICAocGFnZVJvd3MubGVuZ3RoICsgaSkgJSAyID8gJy1ldmVuJyA6ICctb2RkJyxcbiAgICAgICAgICAgIHRyUHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICAgKX1cbiAgICAgICAgICBzdHlsZT17dHJQcm9wcy5zdHlsZSB8fCB7fX1cbiAgICAgICAgPlxuICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZVBhZENvbHVtbil9XG4gICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZENvbHVtbiA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICB0ZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRkUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgIXNob3cgJiYgJy1oaWRkZW4nKX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHsuLi50ZFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoUGFkUm93Q29tcG9uZW50KX1cbiAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sdW1uRm9vdGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRGb290UHJvcHMgPSBnZXRUZm9vdFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgY29uc3QgdEZvb3RUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZm9vdFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGZvb3RDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e3RGb290UHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgIHN0eWxlPXt0Rm9vdFByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50Rm9vdFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Rm9vdFRyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgIHN0eWxlPXt0Rm9vdFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udEZvb3RUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlQ29sdW1uRm9vdGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1Rmb290Q29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB0Rm9vdFRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRmb290VGRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Gb290ZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEZvb3RlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICB0Rm9vdFRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkZvb3RlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi50Rm9vdFRkUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkZvb3RlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsICFzaG93ICYmICctaGlkZGVuJyl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4uY29sdW1uUHJvcHMucmVzdH1cbiAgICAgICAgICB7Li4udEZvb3RUZFByb3BzLnJlc3R9XG4gICAgICAgICAgey4uLmNvbHVtbkZvb3RlclByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkZvb3Rlciwge1xuICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWdpbmF0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFnaW5hdGlvblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRQYWdpbmF0aW9uUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnaW5hdGlvbkNvbXBvbmVudFxuICAgICAgICAgIHsuLi5yZXNvbHZlZFN0YXRlfVxuICAgICAgICAgIHBhZ2VzPXtwYWdlc31cbiAgICAgICAgICBjYW5QcmV2aW91cz17Y2FuUHJldmlvdXN9XG4gICAgICAgICAgY2FuTmV4dD17Y2FuTmV4dH1cbiAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMub25QYWdlQ2hhbmdlfVxuICAgICAgICAgIG9uUGFnZVNpemVDaGFuZ2U9e3RoaXMub25QYWdlU2l6ZUNoYW5nZX1cbiAgICAgICAgICBjbGFzc05hbWU9e3BhZ2luYXRpb25Qcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgc3R5bGU9e3BhZ2luYXRpb25Qcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4ucGFnaW5hdGlvblByb3BzLnJlc3R9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgKVxuICAgIGNvbnN0IHRhYmxlUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRUYWJsZVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIClcbiAgICBjb25zdCB0Qm9keVByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0VGJvZHlQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICApXG4gICAgY29uc3QgbG9hZGluZ1Byb3BzID0gZ2V0TG9hZGluZ1Byb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIGNvbnN0IG5vRGF0YVByb3BzID0gZ2V0Tm9EYXRhUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgY29uc3QgcmVzaXplclByb3BzID0gZ2V0UmVzaXplclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuXG4gICAgY29uc3QgbWFrZVRhYmxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IG1ha2VQYWdpbmF0aW9uKClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ1JlYWN0VGFibGUnLCBjbGFzc05hbWUsIHJvb3RQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgIC4uLnJvb3RQcm9wcy5zdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93UGFnaW5hdGlvbiAmJiBzaG93UGFnaW5hdGlvblRvcFxuICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT0ncGFnaW5hdGlvbi10b3AnPlxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIDxUYWJsZVdyYXBwZXIgcmVmPXsoYykgPT4gdGhpcy50YWJsZVJlZiA9IGN9PlxuICAgICAgICAgICAgPFRhYmxlQ29tcG9uZW50XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICB0YWJsZVByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSZXNpemluZyA/ICdydC1yZXNpemluZycgOiAnJ1xuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBzdHlsZT17dGFibGVQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgICAgey4uLnRhYmxlUHJvcHMucmVzdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge21ha2VDb2xHcm91cCgpfVxuICAgICAgICAgICAgICB7aGFzSGVhZGVyR3JvdXBzID8gbWFrZUhlYWRlckdyb3VwcygpIDogbnVsbH1cbiAgICAgICAgICAgICAge21ha2VIZWFkZXJzKCl9XG4gICAgICAgICAgICAgIHtoYXNGaWx0ZXJzID8gbWFrZUZpbHRlcnMoKSA6IG51bGx9XG4gICAgICAgICAgICAgIDxUYm9keUNvbXBvbmVudFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Qm9keVByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3RCb2R5UHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgICAgey4uLnRCb2R5UHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwYWdlUm93cy5tYXAoKGQsIGkpID0+IG1ha2VQYWdlUm93KGQsIGkpKX1cbiAgICAgICAgICAgICAgICB7cGFkUm93cy5tYXAobWFrZVBhZFJvdyl9XG4gICAgICAgICAgICAgIDwvVGJvZHlDb21wb25lbnQ+XG4gICAgICAgICAgICAgIHtoYXNDb2x1bW5Gb290ZXIgPyBtYWtlQ29sdW1uRm9vdGVycygpIDogbnVsbH1cbiAgICAgICAgICAgIDwvVGFibGVDb21wb25lbnQ+XG4gICAgICAgICAgPC9UYWJsZVdyYXBwZXI+XG4gICAgICAgICAge3Nob3dQYWdpbmF0aW9uICYmIHNob3dQYWdpbmF0aW9uQm90dG9tXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdwYWdpbmF0aW9uLWJvdHRvbSc+XG4gICAgICAgICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgeyFwYWdlUm93cy5sZW5ndGggJiZcbiAgICAgICAgICAgIDxOb0RhdGFDb21wb25lbnQgey4uLm5vRGF0YVByb3BzfT5cbiAgICAgICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KG5vRGF0YVRleHQpfVxuICAgICAgICAgICAgPC9Ob0RhdGFDb21wb25lbnQ+fVxuICAgICAgICAgIDxMb2FkaW5nQ29tcG9uZW50XG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgbG9hZGluZ1RleHQ9e2xvYWRpbmdUZXh0fVxuICAgICAgICAgICAgey4uLmxvYWRpbmdQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBjaGlsZFByb3BzIGFyZSBvcHRpb25hbGx5IHBhc3NlZCB0byBhIGZ1bmN0aW9uLWFzLWEtY2hpbGRcbiAgICByZXR1cm4gY2hpbGRyZW4gPyBjaGlsZHJlbihmaW5hbFN0YXRlLCBtYWtlVGFibGUsIHRoaXMpIDogbWFrZVRhYmxlKClcbiAgfVxufVxuIl19