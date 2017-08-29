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
      var fixedColumnMaxWidth = void 0;
      var rawColumnsWidth = 0;
      var rawColumnsMaxWidth = 0;
      var floorColumnsWidth = 0;
      var floorColumnsMaxWidth = 0;

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

        if (tableTotalWidth) {
          var widthIsPercents = _utils2.default.isPercents(width);
          var maxWidthIsPercents = _utils2.default.isPercents(maxWidth);

          var widthValue = parseInt(width, 10) || 0;
          var maxWidthValue = parseInt(width, 10) || 0;

          width = widthIsPercents ? _utils2.default.percentsToPx(widthValue, tableTotalWidth) : widthValue;

          maxWidth = maxWidthIsPercents ? _utils2.default.percentsToPx(maxWidthValue, tableTotalWidth) : maxWidthValue;

          rawColumnsWidth += width;
          rawColumnsMaxWidth += maxWidth;

          width = Math.floor(width);
          maxWidth = Math.floor(maxWidth);

          floorColumnsWidth += width;
          floorColumnsMaxWidth += maxWidth;

          var widthDiff = Math.floor(rawColumnsWidth - floorColumnsWidth);
          var maxWidthDiff = Math.floor(rawColumnsMaxWidth - floorColumnsMaxWidth);

          if (widthDiff >= 1) {
            width += widthDiff;
            floorColumnsWidth += widthDiff;
          }

          if (maxWidthDiff >= 1) {
            maxWidth += maxWidthDiff;
            floorColumnsMaxWidth += maxWidthDiff;
          }

          width = width + 'px';
          maxWidth = maxWidth + 'px';
        }

        var isFixed = i === fixedColumnIndex;

        if (isFixed) {
          fixedColumnWidth = width;
          fixedColumnMaxWidth = maxWidth;
        }

        var isDummy = i === allVisibleColumns.length - 1;

        return _react2.default.createElement('col', {
          key: i + '-' + column.id,
          className: (0, _classnames2.default)('rt-colgroup-col', classes, { '-dummy': isDummy }),
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

        var isDummy = i === headerGroups.length - 1;
        var isFixed = i === fixedColumnIndex;

        if (isFixed) {
          styles.width = fixedColumnWidth;
          styles.maxWidth = fixedColumnMaxWidth;
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
          styles.maxWidth = fixedColumnMaxWidth;
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
          styles.maxWidth = fixedColumnMaxWidth;
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
              styles.maxWidth = fixedColumnMaxWidth;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0IiwidGFibGVXcmFwcGVyIiwiZmluZERPTU5vZGUiLCJ0YWJsZVJlZiIsInNldFN0YXRlIiwidGFibGVUb3RhbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJyZXNvbHZlZFN0YXRlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsImdldFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldENvbEdyb3VwQ29sUHJvcHMiLCJnZXRUaGVhZEdyb3VwUHJvcHMiLCJnZXRUaGVhZEdyb3VwVHJQcm9wcyIsImdldFRoZWFkR3JvdXBUaFByb3BzIiwiZ2V0VGhlYWRQcm9wcyIsImdldFRoZWFkVHJQcm9wcyIsImdldFRoZWFkVGhQcm9wcyIsImdldFRoZWFkRmlsdGVyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRoUHJvcHMiLCJnZXRUYm9keVByb3BzIiwiZ2V0VHJQcm9wcyIsImdldFRkUHJvcHMiLCJnZXRUZm9vdFByb3BzIiwiZ2V0VGZvb3RUclByb3BzIiwiZ2V0VGZvb3RUZFByb3BzIiwiZ2V0UGFnaW5hdGlvblByb3BzIiwiZ2V0TG9hZGluZ1Byb3BzIiwiZ2V0Tm9EYXRhUHJvcHMiLCJnZXRSZXNpemVyUHJvcHMiLCJzaG93UGFnaW5hdGlvbiIsInNob3dQYWdpbmF0aW9uVG9wIiwic2hvd1BhZ2luYXRpb25Cb3R0b20iLCJtYW51YWwiLCJsb2FkaW5nVGV4dCIsIm5vRGF0YVRleHQiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJwaXZvdElES2V5IiwicGl2b3RWYWxLZXkiLCJwaXZvdEJ5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJmaXhlZENvbHVtbkluZGV4IiwibG9hZGluZyIsInBhZ2VzIiwib25FeHBhbmRlZENoYW5nZSIsIlRhYmxlV3JhcHBlciIsIlRhYmxlQ29tcG9uZW50IiwiVGhlYWRDb21wb25lbnQiLCJUYm9keUNvbXBvbmVudCIsIlRyQ29tcG9uZW50IiwiVGhDb21wb25lbnQiLCJUZENvbXBvbmVudCIsIlRmb290Q29tcG9uZW50IiwiUGFnaW5hdGlvbkNvbXBvbmVudCIsIkxvYWRpbmdDb21wb25lbnQiLCJTdWJDb21wb25lbnQiLCJOb0RhdGFDb21wb25lbnQiLCJSZXNpemVyQ29tcG9uZW50IiwiRXhwYW5kZXJDb21wb25lbnQiLCJQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RDb21wb25lbnQiLCJBZ2dyZWdhdGVkQ29tcG9uZW50IiwiRmlsdGVyQ29tcG9uZW50IiwiUGFkUm93Q29tcG9uZW50IiwicmVzb2x2ZWREYXRhIiwiYWxsVmlzaWJsZUNvbHVtbnMiLCJoZWFkZXJHcm91cHMiLCJoYXNIZWFkZXJHcm91cHMiLCJzb3J0ZWREYXRhIiwic3RhcnRSb3ciLCJlbmRSb3ciLCJwYWdlUm93cyIsInNsaWNlIiwibWluUm93cyIsInBhZFJvd3MiLCJyYW5nZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJoYXNDb2x1bW5Gb290ZXIiLCJzb21lIiwiZCIsIkZvb3RlciIsImhhc0ZpbHRlcnMiLCJyZWN1cnNlUm93c1ZpZXdJbmRleCIsInJvd3MiLCJwYXRoIiwiaW5kZXgiLCJtYXAiLCJyb3ciLCJpIiwicm93V2l0aFZpZXdJbmRleCIsIl92aWV3SW5kZXgiLCJuZXdQYXRoIiwiY29uY2F0IiwiZ2V0IiwiY2FuUHJldmlvdXMiLCJjYW5OZXh0Iiwicm93SW5kZXgiLCJmaW5hbFN0YXRlIiwiZml4ZWRDb2x1bW5XaWR0aCIsImZpeGVkQ29sdW1uTWF4V2lkdGgiLCJyYXdDb2x1bW5zV2lkdGgiLCJyYXdDb2x1bW5zTWF4V2lkdGgiLCJmbG9vckNvbHVtbnNXaWR0aCIsImZsb29yQ29sdW1uc01heFdpZHRoIiwibWFrZUNvbEdyb3VwIiwibWFrZUNvbCIsImNvbHVtbiIsInJlc2l6ZWRDb2wiLCJmaW5kIiwieCIsImlkIiwiY29sZ3JvdXBDb2xQcm9wcyIsInNwbGl0UHJvcHMiLCJ1bmRlZmluZWQiLCJjb2x1bW5Db2xncm91cENvbFByb3BzIiwiY2xhc3NlcyIsImNvbEdyb3VwQ29sQ2xhc3NOYW1lIiwic3R5bGVzIiwiY29sR3JvdXBDb2xTdHlsZSIsIndpZHRoIiwiZ2V0Rmlyc3REZWZpbmVkIiwidmFsdWUiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwid2lkdGhJc1BlcmNlbnRzIiwiaXNQZXJjZW50cyIsIm1heFdpZHRoSXNQZXJjZW50cyIsIndpZHRoVmFsdWUiLCJwYXJzZUludCIsIm1heFdpZHRoVmFsdWUiLCJwZXJjZW50c1RvUHgiLCJmbG9vciIsIndpZHRoRGlmZiIsIm1heFdpZHRoRGlmZiIsImlzRml4ZWQiLCJpc0R1bW15IiwibWFrZUhlYWRlckdyb3VwcyIsInRoZWFkR3JvdXBQcm9wcyIsInRoZWFkR3JvdXBUclByb3BzIiwicmVzdCIsIm1ha2VIZWFkZXJHcm91cCIsInRoZWFkR3JvdXBUaFByb3BzIiwiY29sdW1uSGVhZGVyUHJvcHMiLCJnZXRIZWFkZXJQcm9wcyIsImhlYWRlckNsYXNzTmFtZSIsImhlYWRlclN0eWxlIiwiY29sU3BhbiIsImNvbHVtbnMiLCJjb250ZW50Iiwibm9ybWFsaXplQ29tcG9uZW50IiwiSGVhZGVyIiwiZGF0YSIsIm1ha2VIZWFkZXJzIiwidGhlYWRQcm9wcyIsInRoZWFkVHJQcm9wcyIsIm1ha2VIZWFkZXIiLCJzb3J0Iiwic2hvdyIsInRoZWFkVGhQcm9wcyIsImlzUmVzaXphYmxlIiwicmVzaXplciIsImUiLCJyZXNpemVyUHJvcHMiLCJpc1NvcnRhYmxlIiwiZGVzYyIsImluY2x1ZGVzIiwic2hpZnRLZXkiLCJtYWtlRmlsdGVycyIsInRoZWFkRmlsdGVyUHJvcHMiLCJ0aGVhZEZpbHRlclRyUHJvcHMiLCJtYWtlRmlsdGVyIiwidGhlYWRGaWx0ZXJUaFByb3BzIiwiZmlsdGVyIiwiUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQiLCJGaWx0ZXIiLCJpc0ZpbHRlcmFibGUiLCJvbkNoYW5nZSIsIm1ha2VQYWdlUm93Iiwicm93SW5mbyIsIm9yaWdpbmFsIiwidmlld0luZGV4IiwibGV2ZWwiLCJuZXN0aW5nUGF0aCIsImFnZ3JlZ2F0ZWQiLCJncm91cGVkQnlQaXZvdCIsInN1YlJvd3MiLCJpc0V4cGFuZGVkIiwidHJQcm9wcyIsImpvaW4iLCJpMiIsInRkUHJvcHMiLCJjb2x1bW5Qcm9wcyIsImNlbGxJbmZvIiwicGl2b3RlZCIsImV4cGFuZGVyIiwiaW50ZXJhY3Rpb25Qcm9wcyIsImlzQnJhbmNoIiwiaXNQcmV2aWV3Iiwib25FeHBhbmRlckNsaWNrIiwibmV3RXhwYW5kZWQiLCJjbG9uZSIsInNldCIsInNldFN0YXRlV2l0aERhdGEiLCJyZXNvbHZlZENlbGwiLCJDZWxsIiwiUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50IiwiQWdncmVnYXRlZCIsImFnZ3JlZ2F0ZSIsIlJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQiLCJFeHBhbmRlciIsIlJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCIsIlBpdm90VmFsdWUiLCJEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlJlc29sdmVkUGl2b3RDb21wb25lbnQiLCJQaXZvdCIsImV4cGFuZGFibGUiLCJvbkNsaWNrIiwiaW5kZXhPZiIsIm1ha2VQYWRSb3ciLCJtYWtlUGFkQ29sdW1uIiwibWFrZUNvbHVtbkZvb3RlcnMiLCJ0Rm9vdFByb3BzIiwidEZvb3RUclByb3BzIiwibWFrZUNvbHVtbkZvb3RlciIsInRGb290VGRQcm9wcyIsImNvbHVtbkZvb3RlclByb3BzIiwiZ2V0Rm9vdGVyUHJvcHMiLCJtYWtlUGFnaW5hdGlvbiIsInBhZ2luYXRpb25Qcm9wcyIsInJvb3RQcm9wcyIsInRhYmxlUHJvcHMiLCJ0Qm9keVByb3BzIiwibG9hZGluZ1Byb3BzIiwibm9EYXRhUHJvcHMiLCJtYWtlVGFibGUiLCJwYWdpbmF0aW9uIiwiYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OztBQUpBOzs7QUFNTyxJQUFNQSx3RUFBTjs7SUFFY0MsVTs7O0FBR25CLHNCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBR2xCLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0csYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CSCxJQUFuQixPQUFyQjtBQUNBLFVBQUtJLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkosSUFBcEIsT0FBdEI7QUFDQSxVQUFLSyxjQUFM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RyxJQXpDTjtBQTBDRyxXQUFDdEssU0FBU08sTUFBVixJQUNDO0FBQUMsMkJBQUQ7QUFBcUI2Six1QkFBckI7QUFDRyw0QkFBRXBGLGtCQUFGLENBQXFCMUgsVUFBckI7QUFESCxXQTNDSjtBQThDRSx3Q0FBQyxnQkFBRDtBQUNFLHFCQUFTYSxPQURYO0FBRUUseUJBQWFkO0FBRmYsYUFHTThNLFlBSE47QUE5Q0YsU0FERjtBQXNERCxPQXhERDs7QUEwREE7QUFDQSxhQUFPM08sV0FBV0EsU0FBU29HLFVBQVQsRUFBcUJ5SSxTQUFyQixFQUFnQyxJQUFoQyxDQUFYLEdBQW1EQSxXQUExRDtBQUNEOzs7O0VBbCtCcUMsdUJBQVEsMENBQVIsQzs7QUFBbkJyUixVLENBQ1p3UixZO2tCQURZeFIsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuLy9cbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgTGlmZWN5Y2xlIGZyb20gJy4vbGlmZWN5Y2xlJ1xuaW1wb3J0IE1ldGhvZHMgZnJvbSAnLi9tZXRob2RzJ1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHRQcm9wcydcblxuZXhwb3J0IGNvbnN0IFJlYWN0VGFibGVEZWZhdWx0cyA9IGRlZmF1bHRQcm9wc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFRhYmxlIGV4dGVuZHMgTWV0aG9kcyhMaWZlY3ljbGUoQ29tcG9uZW50KSkge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzXG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5nZXRSZXNvbHZlZFN0YXRlID0gdGhpcy5nZXRSZXNvbHZlZFN0YXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmdldERhdGFNb2RlbCA9IHRoaXMuZ2V0RGF0YU1vZGVsLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFNvcnRlZERhdGEgPSB0aGlzLmdldFNvcnRlZERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZmlyZUZldGNoRGF0YSA9IHRoaXMuZmlyZUZldGNoRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRQcm9wT3JTdGF0ZSA9IHRoaXMuZ2V0UHJvcE9yU3RhdGUuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0U3RhdGVPclByb3AgPSB0aGlzLmdldFN0YXRlT3JQcm9wLmJpbmQodGhpcylcbiAgICB0aGlzLmZpbHRlckRhdGEgPSB0aGlzLmZpbHRlckRhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuc29ydERhdGEgPSB0aGlzLnNvcnREYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmdldE1pblJvd3MgPSB0aGlzLmdldE1pblJvd3MuYmluZCh0aGlzKVxuICAgIHRoaXMub25QYWdlQ2hhbmdlID0gdGhpcy5vblBhZ2VDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25QYWdlU2l6ZUNoYW5nZSA9IHRoaXMub25QYWdlU2l6ZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zb3J0Q29sdW1uID0gdGhpcy5zb3J0Q29sdW1uLmJpbmQodGhpcylcbiAgICB0aGlzLmZpbHRlckNvbHVtbiA9IHRoaXMuZmlsdGVyQ29sdW1uLmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0ID0gdGhpcy5yZXNpemVDb2x1bW5TdGFydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5FbmQgPSB0aGlzLnJlc2l6ZUNvbHVtbkVuZC5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcgPSB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZy5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGFnZTogMCxcbiAgICAgIHBhZ2VTaXplOiBwcm9wcy5kZWZhdWx0UGFnZVNpemUsXG4gICAgICBzb3J0ZWQ6IHByb3BzLmRlZmF1bHRTb3J0ZWQsXG4gICAgICBleHBhbmRlZDogcHJvcHMuZGVmYXVsdEV4cGFuZGVkLFxuICAgICAgZmlsdGVyZWQ6IHByb3BzLmRlZmF1bHRGaWx0ZXJlZCxcbiAgICAgIHJlc2l6ZWQ6IHByb3BzLmRlZmF1bHRSZXNpemVkLFxuICAgICAgY3VycmVudGx5UmVzaXppbmc6IGZhbHNlLFxuICAgICAgc2tpcE5leHRTb3J0OiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB0YWJsZVdyYXBwZXIgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnRhYmxlUmVmKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFibGVUb3RhbFdpZHRoOiB0YWJsZVdyYXBwZXIub2Zmc2V0V2lkdGggfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpXG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIGdldFByb3BzLFxuICAgICAgZ2V0VGFibGVQcm9wcyxcbiAgICAgIGdldENvbEdyb3VwQ29sUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkR3JvdXBUaFByb3BzLFxuICAgICAgZ2V0VGhlYWRQcm9wcyxcbiAgICAgIGdldFRoZWFkVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkRmlsdGVyUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclRoUHJvcHMsXG4gICAgICBnZXRUYm9keVByb3BzLFxuICAgICAgZ2V0VHJQcm9wcyxcbiAgICAgIGdldFRkUHJvcHMsXG4gICAgICBnZXRUZm9vdFByb3BzLFxuICAgICAgZ2V0VGZvb3RUclByb3BzLFxuICAgICAgZ2V0VGZvb3RUZFByb3BzLFxuICAgICAgZ2V0UGFnaW5hdGlvblByb3BzLFxuICAgICAgZ2V0TG9hZGluZ1Byb3BzLFxuICAgICAgZ2V0Tm9EYXRhUHJvcHMsXG4gICAgICBnZXRSZXNpemVyUHJvcHMsXG4gICAgICBzaG93UGFnaW5hdGlvbixcbiAgICAgIHNob3dQYWdpbmF0aW9uVG9wLFxuICAgICAgc2hvd1BhZ2luYXRpb25Cb3R0b20sXG4gICAgICBtYW51YWwsXG4gICAgICBsb2FkaW5nVGV4dCxcbiAgICAgIG5vRGF0YVRleHQsXG4gICAgICBzb3J0YWJsZSxcbiAgICAgIHJlc2l6YWJsZSxcbiAgICAgIGZpbHRlcmFibGUsXG4gICAgICAvLyBQaXZvdGluZyBTdGF0ZVxuICAgICAgcGl2b3RJREtleSxcbiAgICAgIHBpdm90VmFsS2V5LFxuICAgICAgcGl2b3RCeSxcbiAgICAgIHN1YlJvd3NLZXksXG4gICAgICBhZ2dyZWdhdGVkS2V5LFxuICAgICAgb3JpZ2luYWxLZXksXG4gICAgICBpbmRleEtleSxcbiAgICAgIGdyb3VwZWRCeVBpdm90S2V5LFxuICAgICAgLy8gRml4ZWRcbiAgICAgIGZpeGVkQ29sdW1uSW5kZXgsXG4gICAgICAvLyBTdGF0ZVxuICAgICAgbG9hZGluZyxcbiAgICAgIHBhZ2VTaXplLFxuICAgICAgcGFnZSxcbiAgICAgIHNvcnRlZCxcbiAgICAgIGZpbHRlcmVkLFxuICAgICAgcmVzaXplZCxcbiAgICAgIGV4cGFuZGVkLFxuICAgICAgcGFnZXMsXG4gICAgICBvbkV4cGFuZGVkQ2hhbmdlLFxuICAgICAgLy8gQ29tcG9uZW50c1xuICAgICAgVGFibGVXcmFwcGVyLFxuICAgICAgVGFibGVDb21wb25lbnQsXG4gICAgICBUaGVhZENvbXBvbmVudCxcbiAgICAgIFRib2R5Q29tcG9uZW50LFxuICAgICAgVHJDb21wb25lbnQsXG4gICAgICBUaENvbXBvbmVudCxcbiAgICAgIFRkQ29tcG9uZW50LFxuICAgICAgVGZvb3RDb21wb25lbnQsXG4gICAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgICAgTG9hZGluZ0NvbXBvbmVudCxcbiAgICAgIFN1YkNvbXBvbmVudCxcbiAgICAgIE5vRGF0YUNvbXBvbmVudCxcbiAgICAgIFJlc2l6ZXJDb21wb25lbnQsXG4gICAgICBFeHBhbmRlckNvbXBvbmVudCxcbiAgICAgIFBpdm90VmFsdWVDb21wb25lbnQsXG4gICAgICBQaXZvdENvbXBvbmVudCxcbiAgICAgIEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICBGaWx0ZXJDb21wb25lbnQsXG4gICAgICBQYWRSb3dDb21wb25lbnQsXG4gICAgICAvLyBEYXRhIG1vZGVsXG4gICAgICByZXNvbHZlZERhdGEsXG4gICAgICBhbGxWaXNpYmxlQ29sdW1ucyxcbiAgICAgIGhlYWRlckdyb3VwcyxcbiAgICAgIGhhc0hlYWRlckdyb3VwcyxcbiAgICAgIC8vIFNvcnRlZCBEYXRhXG4gICAgICBzb3J0ZWREYXRhLFxuICAgICAgY3VycmVudGx5UmVzaXppbmcsXG4gICAgICB0YWJsZVRvdGFsV2lkdGgsXG4gICAgfSA9IHJlc29sdmVkU3RhdGVcblxuICAgIC8vIFBhZ2luYXRpb25cbiAgICBjb25zdCBzdGFydFJvdyA9IHBhZ2VTaXplICogcGFnZVxuICAgIGNvbnN0IGVuZFJvdyA9IHN0YXJ0Um93ICsgcGFnZVNpemVcbiAgICBsZXQgcGFnZVJvd3MgPSBtYW51YWwgPyByZXNvbHZlZERhdGEgOiBzb3J0ZWREYXRhLnNsaWNlKHN0YXJ0Um93LCBlbmRSb3cpXG4gICAgY29uc3QgbWluUm93cyA9IHRoaXMuZ2V0TWluUm93cygpXG4gICAgY29uc3QgcGFkUm93cyA9IF8ucmFuZ2UoTWF0aC5tYXgobWluUm93cyAtIHBhZ2VSb3dzLmxlbmd0aCwgMCkpXG5cbiAgICBjb25zdCBoYXNDb2x1bW5Gb290ZXIgPSBhbGxWaXNpYmxlQ29sdW1ucy5zb21lKGQgPT4gZC5Gb290ZXIpXG4gICAgY29uc3QgaGFzRmlsdGVycyA9IGZpbHRlcmFibGUgfHwgYWxsVmlzaWJsZUNvbHVtbnMuc29tZShkID0+IGQuZmlsdGVyYWJsZSlcblxuICAgIGNvbnN0IHJlY3Vyc2VSb3dzVmlld0luZGV4ID0gKHJvd3MsIHBhdGggPSBbXSwgaW5kZXggPSAtMSkgPT4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgcm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgICBjb25zdCByb3dXaXRoVmlld0luZGV4ID0ge1xuICAgICAgICAgICAgLi4ucm93LFxuICAgICAgICAgICAgX3ZpZXdJbmRleDogaW5kZXgsXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5ld1BhdGggPSBwYXRoLmNvbmNhdChbaV0pXG4gICAgICAgICAgaWYgKHJvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0gJiYgXy5nZXQoZXhwYW5kZWQsIG5ld1BhdGgpKSB7XG4gICAgICAgICAgICA7W3Jvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0sIGluZGV4XSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KFxuICAgICAgICAgICAgICByb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldLFxuICAgICAgICAgICAgICBuZXdQYXRoLFxuICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcm93V2l0aFZpZXdJbmRleFxuICAgICAgICB9KSxcbiAgICAgICAgaW5kZXgsXG4gICAgICBdXG4gICAgfVxuICAgIDtbcGFnZVJvd3NdID0gcmVjdXJzZVJvd3NWaWV3SW5kZXgocGFnZVJvd3MpXG5cbiAgICBjb25zdCBjYW5QcmV2aW91cyA9IHBhZ2UgPiAwXG4gICAgY29uc3QgY2FuTmV4dCA9IHBhZ2UgKyAxIDwgcGFnZXNcblxuICAgIGxldCByb3dJbmRleCA9IC0xXG5cbiAgICBjb25zdCBmaW5hbFN0YXRlID0ge1xuICAgICAgLi4ucmVzb2x2ZWRTdGF0ZSxcbiAgICAgIHN0YXJ0Um93LFxuICAgICAgZW5kUm93LFxuICAgICAgcGFnZVJvd3MsXG4gICAgICBtaW5Sb3dzLFxuICAgICAgcGFkUm93cyxcbiAgICAgIGhhc0NvbHVtbkZvb3RlcixcbiAgICAgIGNhblByZXZpb3VzLFxuICAgICAgY2FuTmV4dCxcbiAgICB9XG5cbiAgICBsZXQgZml4ZWRDb2x1bW5XaWR0aDtcbiAgICBsZXQgZml4ZWRDb2x1bW5NYXhXaWR0aDtcbiAgICBsZXQgcmF3Q29sdW1uc1dpZHRoID0gMDtcbiAgICBsZXQgcmF3Q29sdW1uc01heFdpZHRoID0gMDtcbiAgICBsZXQgZmxvb3JDb2x1bW5zV2lkdGggPSAwO1xuICAgIGxldCBmbG9vckNvbHVtbnNNYXhXaWR0aCA9IDA7XG5cbiAgICAvLyBWaXN1YWwgQ29tcG9uZW50c1xuXG4gICAgY29uc3QgbWFrZUNvbEdyb3VwID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGNvbGdyb3VwPlxuICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUNvbCl9XG4gICAgICAgIDwvY29sZ3JvdXA+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbCA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG5cbiAgICAgIGNvbnN0IGNvbGdyb3VwQ29sUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldENvbEdyb3VwQ29sUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Db2xncm91cENvbFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0Q29sR3JvdXBDb2xQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmNvbEdyb3VwQ29sQ2xhc3NOYW1lLFxuICAgICAgICBjb2xncm91cENvbFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uQ29sZ3JvdXBDb2xQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmNvbEdyb3VwQ29sU3R5bGUsXG4gICAgICAgIC4uLmNvbGdyb3VwQ29sUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkNvbGdyb3VwQ29sUHJvcHMuc3R5bGUsXG4gICAgICB9XG4gICAgICBsZXQgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBjb2x1bW4ubWluV2lkdGgsXG4gICAgICApXG4gICAgICBsZXQgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBjb2x1bW4ubWF4V2lkdGgsXG4gICAgICApXG5cbiAgICAgIGlmICh0YWJsZVRvdGFsV2lkdGgpIHtcbiAgICAgICAgY29uc3Qgd2lkdGhJc1BlcmNlbnRzID0gXy5pc1BlcmNlbnRzKHdpZHRoKVxuICAgICAgICBjb25zdCBtYXhXaWR0aElzUGVyY2VudHMgPSBfLmlzUGVyY2VudHMobWF4V2lkdGgpXG5cbiAgICAgICAgY29uc3Qgd2lkdGhWYWx1ZSA9IHBhcnNlSW50KHdpZHRoLCAxMCkgfHwgMFxuICAgICAgICBjb25zdCBtYXhXaWR0aFZhbHVlID0gcGFyc2VJbnQod2lkdGgsIDEwKSB8fCAwXG5cbiAgICAgICAgd2lkdGggPSB3aWR0aElzUGVyY2VudHNcbiAgICAgICAgICA/IF8ucGVyY2VudHNUb1B4KHdpZHRoVmFsdWUsIHRhYmxlVG90YWxXaWR0aClcbiAgICAgICAgICA6IHdpZHRoVmFsdWU7XG5cbiAgICAgICAgbWF4V2lkdGggPSBtYXhXaWR0aElzUGVyY2VudHNcbiAgICAgICAgICA/IF8ucGVyY2VudHNUb1B4KG1heFdpZHRoVmFsdWUsIHRhYmxlVG90YWxXaWR0aClcbiAgICAgICAgICA6IG1heFdpZHRoVmFsdWU7XG5cbiAgICAgICAgcmF3Q29sdW1uc1dpZHRoICs9IHdpZHRoXG4gICAgICAgIHJhd0NvbHVtbnNNYXhXaWR0aCArPSBtYXhXaWR0aFxuXG4gICAgICAgIHdpZHRoID0gTWF0aC5mbG9vcih3aWR0aClcbiAgICAgICAgbWF4V2lkdGggPSBNYXRoLmZsb29yKG1heFdpZHRoKVxuXG4gICAgICAgIGZsb29yQ29sdW1uc1dpZHRoICs9IHdpZHRoO1xuICAgICAgICBmbG9vckNvbHVtbnNNYXhXaWR0aCArPSBtYXhXaWR0aDtcblxuICAgICAgICBjb25zdCB3aWR0aERpZmYgPSBNYXRoLmZsb29yKHJhd0NvbHVtbnNXaWR0aCAtIGZsb29yQ29sdW1uc1dpZHRoKVxuICAgICAgICBjb25zdCBtYXhXaWR0aERpZmYgPSBNYXRoLmZsb29yKHJhd0NvbHVtbnNNYXhXaWR0aCAtIGZsb29yQ29sdW1uc01heFdpZHRoKVxuXG4gICAgICAgIGlmICh3aWR0aERpZmYgPj0gMSkge1xuICAgICAgICAgIHdpZHRoICs9IHdpZHRoRGlmZlxuICAgICAgICAgIGZsb29yQ29sdW1uc1dpZHRoICs9IHdpZHRoRGlmZlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1heFdpZHRoRGlmZiA+PSAxKSB7XG4gICAgICAgICAgbWF4V2lkdGggKz0gbWF4V2lkdGhEaWZmXG4gICAgICAgICAgZmxvb3JDb2x1bW5zTWF4V2lkdGggKz0gbWF4V2lkdGhEaWZmXG4gICAgICAgIH1cblxuICAgICAgICB3aWR0aCA9IGAke3dpZHRofXB4YFxuICAgICAgICBtYXhXaWR0aCA9IGAke21heFdpZHRofXB4YFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA9PT0gZml4ZWRDb2x1bW5JbmRleFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBmaXhlZENvbHVtbldpZHRoID0gd2lkdGg7XG4gICAgICAgIGZpeGVkQ29sdW1uTWF4V2lkdGggPSBtYXhXaWR0aDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNEdW1teSA9IGkgPT09IGFsbFZpc2libGVDb2x1bW5zLmxlbmd0aCAtIDFcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGNvbFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3J0LWNvbGdyb3VwLWNvbCcsIGNsYXNzZXMsIHsgJy1kdW1teSc6IGlzRHVtbXkgfSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIG1heFdpZHRoOiBtYXhXaWR0aCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXJHcm91cHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEdyb3VwUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWhlYWRlckdyb3VwcycsIHRoZWFkR3JvdXBQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt0aGVhZEdyb3VwUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRoZWFkR3JvdXBQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkR3JvdXBUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZEdyb3VwVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZEdyb3VwVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKG1ha2VIZWFkZXJHcm91cCl9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyR3JvdXAgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEdyb3VwVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEdyb3VwVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkR3JvdXBUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29sU3BhbiA9IGNvbHVtbi5jb2x1bW5zLmxlbmd0aFxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZEdyb3VwVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgICBjb2xTcGFuLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0R1bW15ID0gaSA9PT0gaGVhZGVyR3JvdXBzLmxlbmd0aCAtIDFcbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpID09PSBmaXhlZENvbHVtbkluZGV4XG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uV2lkdGg7XG4gICAgICAgIHN0eWxlcy5tYXhXaWR0aCA9IGZpeGVkQ29sdW1uTWF4V2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uSGVhZGVyLCB7XG4gICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCB7ICctZHVtbXknOiBpc0R1bW15LCAnLWVtcHR5JzogIWNvbnRlbnQsICctZml4ZWQnOiBpc0ZpeGVkIH0pfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWhlYWRlcicsIHRoZWFkUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17dGhlYWRQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udGhlYWRQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUhlYWRlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3Qgc29ydCA9IHNvcnRlZC5maW5kKGQgPT4gZC5pZCA9PT0gY29sdW1uLmlkKVxuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgY29uc3QgdGhlYWRUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZFRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZFRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZFRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNSZXNpemFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChjb2x1bW4ucmVzaXphYmxlLCByZXNpemFibGUsIGZhbHNlKVxuICAgICAgY29uc3QgcmVzaXplciA9IGlzUmVzaXphYmxlXG4gICAgICAgID8gKDxSZXNpemVyQ29tcG9uZW50XG4gICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChjb2x1bW4sIGUsIGZhbHNlKX1cbiAgICAgICAgICBvblRvdWNoU3RhcnQ9e2UgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChjb2x1bW4sIGUsIHRydWUpfVxuICAgICAgICAgIHsuLi5yZXNpemVyUHJvcHN9XG4gICAgICAgIC8+KVxuICAgICAgICA6IG51bGxcblxuICAgICAgY29uc3QgaXNTb3J0YWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5zb3J0YWJsZSwgc29ydGFibGUsIGZhbHNlKVxuICAgICAgY29uc3QgaXNEdW1teSA9IGkgPT09IGFsbFZpc2libGVDb2x1bW5zLmxlbmd0aCAtIDFcbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpID09PSBmaXhlZENvbHVtbkluZGV4XG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uV2lkdGg7XG4gICAgICAgIHN0eWxlcy5tYXhXaWR0aCA9IGZpeGVkQ29sdW1uTWF4V2lkdGg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgJ3J0LXJlc2l6YWJsZS1oZWFkZXInLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnLWN1cnNvci1wb2ludGVyJzogaXNTb3J0YWJsZSxcbiAgICAgICAgICAgICAgJy1zb3J0LWRlc2MnOiBzb3J0ICYmIHNvcnQuZGVzYyxcbiAgICAgICAgICAgICAgJy1zb3J0LWFzYyc6IHNvcnQgJiYgIXNvcnQuZGVzYyxcbiAgICAgICAgICAgICAgJy1oaWRkZW4nOiAhc2hvdyxcbiAgICAgICAgICAgICAgJy1kdW1teSc6IGlzRHVtbXksXG4gICAgICAgICAgICAgICctZml4ZWQnOiBpc0ZpeGVkLFxuICAgICAgICAgICAgICAncnQtaGVhZGVyLXBpdm90JzogcGl2b3RCeSAmJiBwaXZvdEJ5LnNsaWNlKDAsIC0xKS5pbmNsdWRlcyhjb2x1bW4uaWQpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB0b2dnbGVTb3J0PXtlID0+IHtcbiAgICAgICAgICAgIGlzU29ydGFibGUgJiYgdGhpcy5zb3J0Q29sdW1uKGNvbHVtbiwgZS5zaGlmdEtleSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3J0LXJlc2l6YWJsZS1oZWFkZXItY29udGVudCc+XG4gICAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkhlYWRlciwge1xuICAgICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtyZXNpemVyfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VGaWx0ZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctZmlsdGVycycsIHRoZWFkRmlsdGVyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17dGhlYWRGaWx0ZXJQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udGhlYWRGaWx0ZXJQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkRmlsdGVyVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRGaWx0ZXJUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkRmlsdGVyVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUZpbHRlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlRmlsdGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEZpbHRlclRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsdGVyID0gZmlsdGVyZWQuZmluZChmaWx0ZXIgPT4gZmlsdGVyLmlkID09PSBjb2x1bW4uaWQpXG5cbiAgICAgIGNvbnN0IFJlc29sdmVkRmlsdGVyQ29tcG9uZW50ID0gY29sdW1uLkZpbHRlciB8fCBGaWx0ZXJDb21wb25lbnRcblxuICAgICAgY29uc3QgaXNGaWx0ZXJhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIGNvbHVtbi5maWx0ZXJhYmxlLFxuICAgICAgICBmaWx0ZXJhYmxlLFxuICAgICAgICBmYWxzZVxuICAgICAgKVxuXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA9PT0gZml4ZWRDb2x1bW5JbmRleFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbldpZHRoO1xuICAgICAgICBzdHlsZXMubWF4V2lkdGggPSBmaXhlZENvbHVtbk1heFdpZHRoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsIHsgJy1maXhlZCc6IGlzRml4ZWQsICctZW1wdHknOiAhaXNGaWx0ZXJhYmxlIH0pfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7aXNGaWx0ZXJhYmxlXG4gICAgICAgICAgICA/IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICBSZXNvbHZlZEZpbHRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IHRoaXMuZmlsdGVyQ29sdW1uKGNvbHVtbiwgdmFsdWUpLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkZWZhdWx0UHJvcHMuY29sdW1uLkZpbHRlclxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWdlUm93ID0gKHJvdywgaSwgcGF0aCA9IFtdKSA9PiB7XG4gICAgICBjb25zdCByb3dJbmZvID0ge1xuICAgICAgICBvcmlnaW5hbDogcm93W29yaWdpbmFsS2V5XSxcbiAgICAgICAgcm93OiByb3csXG4gICAgICAgIGluZGV4OiByb3dbaW5kZXhLZXldLFxuICAgICAgICB2aWV3SW5kZXg6ICsrcm93SW5kZXgsXG4gICAgICAgIGxldmVsOiBwYXRoLmxlbmd0aCxcbiAgICAgICAgbmVzdGluZ1BhdGg6IHBhdGguY29uY2F0KFtpXSksXG4gICAgICAgIGFnZ3JlZ2F0ZWQ6IHJvd1thZ2dyZWdhdGVkS2V5XSxcbiAgICAgICAgZ3JvdXBlZEJ5UGl2b3Q6IHJvd1tncm91cGVkQnlQaXZvdEtleV0sXG4gICAgICAgIHN1YlJvd3M6IHJvd1tzdWJSb3dzS2V5XSxcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzRXhwYW5kZWQgPSBfLmdldChleHBhbmRlZCwgcm93SW5mby5uZXN0aW5nUGF0aClcbiAgICAgIGNvbnN0IHRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtyb3dJbmZvLm5lc3RpbmdQYXRoLmpvaW4oJ18nKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICB0clByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHJvdy5fdmlld0luZGV4ICUgMiA/ICctZXZlbicgOiAnLW9kZCdcbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50clByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4sIGkyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICAgICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICAgICAgICBnZXRUZFByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIGNvbHVtbiwgdGhpcylcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgY29sdW1uLCB0aGlzKVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICAgICAgICB0ZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgICAgICAgIC4uLnRkUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGlzRml4ZWQgPSBpMiA9PT0gZml4ZWRDb2x1bW5JbmRleFxuXG4gICAgICAgICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbldpZHRoO1xuICAgICAgICAgICAgICBzdHlsZXMubWF4V2lkdGggPSBmaXhlZENvbHVtbk1heFdpZHRoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjZWxsSW5mbyA9IHtcbiAgICAgICAgICAgICAgLi4ucm93SW5mbyxcbiAgICAgICAgICAgICAgaXNFeHBhbmRlZCxcbiAgICAgICAgICAgICAgY29sdW1uOiB7IC4uLmNvbHVtbiB9LFxuICAgICAgICAgICAgICB2YWx1ZTogcm93SW5mby5yb3dbY29sdW1uLmlkXSxcbiAgICAgICAgICAgICAgcGl2b3RlZDogY29sdW1uLnBpdm90ZWQsXG4gICAgICAgICAgICAgIGV4cGFuZGVyOiBjb2x1bW4uZXhwYW5kZXIsXG4gICAgICAgICAgICAgIHJlc2l6ZWQsXG4gICAgICAgICAgICAgIHNob3csXG4gICAgICAgICAgICAgIHRkUHJvcHMsXG4gICAgICAgICAgICAgIGNvbHVtblByb3BzLFxuICAgICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgICBzdHlsZXMsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY2VsbEluZm8udmFsdWVcblxuICAgICAgICAgICAgbGV0IGludGVyYWN0aW9uUHJvcHNcbiAgICAgICAgICAgIGxldCBpc0JyYW5jaFxuICAgICAgICAgICAgbGV0IGlzUHJldmlld1xuXG4gICAgICAgICAgICBjb25zdCBvbkV4cGFuZGVyQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgICAgICAgbGV0IG5ld0V4cGFuZGVkID0gXy5jbG9uZShleHBhbmRlZClcbiAgICAgICAgICAgICAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICBuZXdFeHBhbmRlZCA9IF8uc2V0KG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwgZmFsc2UpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3RXhwYW5kZWQgPSBfLnNldChuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIHt9KVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBleHBhbmRlZDogbmV3RXhwYW5kZWQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBvbkV4cGFuZGVkQ2hhbmdlICYmXG4gICAgICAgICAgICAgICAgICAgIG9uRXhwYW5kZWRDaGFuZ2UobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGEgc3RhbmRhcmQgY2VsbFxuICAgICAgICAgICAgbGV0IHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICBjb2x1bW4uQ2VsbCxcbiAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIC8vIFJlc29sdmUgUmVuZGVyZXJzXG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uQWdncmVnYXRlZCB8fFxuICAgICAgICAgICAgICAoIWNvbHVtbi5hZ2dyZWdhdGUgPyBBZ2dyZWdhdGVkQ29tcG9uZW50IDogY29sdW1uLkNlbGwpXG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLkV4cGFuZGVyIHx8IEV4cGFuZGVyQ29tcG9uZW50XG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uUGl2b3RWYWx1ZSB8fCBQaXZvdFZhbHVlQ29tcG9uZW50XG4gICAgICAgICAgICBjb25zdCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCA9XG4gICAgICAgICAgICAgIFBpdm90Q29tcG9uZW50IHx8XG4gICAgICAgICAgICAgIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8UmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICA8UmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZFBpdm90Q29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLlBpdm90IHx8IERlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50XG5cbiAgICAgICAgICAgIC8vIElzIHRoaXMgY2VsbCBleHBhbmRhYmxlP1xuICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQgfHwgY2VsbEluZm8uZXhwYW5kZXIpIHtcbiAgICAgICAgICAgICAgLy8gTWFrZSBpdCBleHBhbmRhYmxlIGJ5IGRlZnVhbHRcbiAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcyA9IHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBvbkV4cGFuZGVyQ2xpY2ssXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gSWYgcGl2b3RlZCwgaGFzIG5vIHN1YlJvd3MsIGFuZCBkb2VzIG5vdCBoYXZlIGEgc3ViQ29tcG9uZW50LCBkbyBub3QgbWFrZSBleHBhbmRhYmxlXG4gICAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsSW5mby5zdWJSb3dzKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIVN1YkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkKSB7XG4gICAgICAgICAgICAgIC8vIElzIHRoaXMgY29sdW1uIGEgYnJhbmNoP1xuICAgICAgICAgICAgICBpc0JyYW5jaCA9XG4gICAgICAgICAgICAgICAgcm93SW5mby5yb3dbcGl2b3RJREtleV0gPT09IGNvbHVtbi5pZCAmJiBjZWxsSW5mby5zdWJSb3dzXG4gICAgICAgICAgICAgIC8vIFNob3VsZCB0aGlzIGNvbHVtbiBiZSBibGFuaz9cbiAgICAgICAgICAgICAgaXNQcmV2aWV3ID1cbiAgICAgICAgICAgICAgICBwaXZvdEJ5LmluZGV4T2YoY29sdW1uLmlkKSA+XG4gICAgICAgICAgICAgICAgICBwaXZvdEJ5LmluZGV4T2Yocm93SW5mby5yb3dbcGl2b3RJREtleV0pICYmIGNlbGxJbmZvLnN1YlJvd3NcbiAgICAgICAgICAgICAgLy8gUGl2b3QgQ2VsbCBSZW5kZXIgT3ZlcnJpZGVcbiAgICAgICAgICAgICAgaWYgKGlzQnJhbmNoKSB7XG4gICAgICAgICAgICAgICAgLy8gaXNQaXZvdFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRQaXZvdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3dbcGl2b3RWYWxLZXldLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHJvd1twaXZvdFZhbEtleV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNQcmV2aWV3KSB7XG4gICAgICAgICAgICAgICAgLy8gU2hvdyB0aGUgcGl2b3QgcHJldmlld1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbEluZm8uYWdncmVnYXRlZCkge1xuICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2VsbEluZm8uZXhwYW5kZXIpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICByb3dbcGl2b3RWYWxLZXldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgaWYgKHBpdm90QnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbEluZm8uZ3JvdXBlZEJ5UGl2b3QpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsSW5mby5zdWJSb3dzICYmICFTdWJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBjZWxsXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICAgICAgICBrZXk9e2kyICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAgICAgICAhc2hvdyAmJiAnLWhpZGRlbicsXG4gICAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlICYmICdydC1leHBhbmRhYmxlJyxcbiAgICAgICAgICAgICAgICAgIChpc0JyYW5jaCB8fCBpc1ByZXZpZXcpICYmICdydC1waXZvdCcsXG4gICAgICAgICAgICAgICAgICBpc0ZpeGVkICYmICctZml4ZWQnLFxuICAgICAgICAgICAgICAgICAgKGlzRml4ZWQgJiYgIXJlc29sdmVkQ2VsbCkgJiYgJy1lbXB0eSdcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgICAgICAgey4uLmludGVyYWN0aW9uUHJvcHN9XG4gICAgICAgICAgICAgICAgey4uLnRkUHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgICB7Li4uY29sdW1uUHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyZXNvbHZlZENlbGx9XG4gICAgICAgICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVHJDb21wb25lbnQ+LFxuICAgICAgICByb3dJbmZvLnN1YlJvd3MgJiZcbiAgICAgICAgICBpc0V4cGFuZGVkICYmXG4gICAgICAgICAgcm93SW5mby5zdWJSb3dzLm1hcCgoZCwgaSkgPT5cbiAgICAgICAgICAgIG1ha2VQYWdlUm93KGQsIGksIHJvd0luZm8ubmVzdGluZ1BhdGgpXG4gICAgICAgICAgKSxcbiAgICAgICAgU3ViQ29tcG9uZW50ICYmXG4gICAgICAgICAgIXJvd0luZm8uc3ViUm93cyAmJlxuICAgICAgICAgIGlzRXhwYW5kZWQgJiZcbiAgICAgICAgICBTdWJDb21wb25lbnQocm93SW5mbyksXG4gICAgICBdXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZFJvdyA9IChyb3csIGkpID0+IHtcbiAgICAgIGNvbnN0IHRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAnLXBhZFJvdycsXG4gICAgICAgICAgICAocGFnZVJvd3MubGVuZ3RoICsgaSkgJSAyID8gJy1ldmVuJyA6ICctb2RkJyxcbiAgICAgICAgICAgIHRyUHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICAgKX1cbiAgICAgICAgICBzdHlsZT17dHJQcm9wcy5zdHlsZSB8fCB7fX1cbiAgICAgICAgPlxuICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZVBhZENvbHVtbil9XG4gICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZENvbHVtbiA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICB0ZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRkUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgIXNob3cgJiYgJy1oaWRkZW4nKX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHsuLi50ZFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoUGFkUm93Q29tcG9uZW50KX1cbiAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sdW1uRm9vdGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRGb290UHJvcHMgPSBnZXRUZm9vdFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgY29uc3QgdEZvb3RUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZm9vdFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGZvb3RDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e3RGb290UHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgIHN0eWxlPXt0Rm9vdFByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50Rm9vdFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Rm9vdFRyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgIHN0eWxlPXt0Rm9vdFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udEZvb3RUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlQ29sdW1uRm9vdGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1Rmb290Q29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB0Rm9vdFRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRmb290VGRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Gb290ZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEZvb3RlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICB0Rm9vdFRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkZvb3RlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi50Rm9vdFRkUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkZvb3RlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsICFzaG93ICYmICctaGlkZGVuJyl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4uY29sdW1uUHJvcHMucmVzdH1cbiAgICAgICAgICB7Li4udEZvb3RUZFByb3BzLnJlc3R9XG4gICAgICAgICAgey4uLmNvbHVtbkZvb3RlclByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkZvb3Rlciwge1xuICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWdpbmF0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFnaW5hdGlvblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRQYWdpbmF0aW9uUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnaW5hdGlvbkNvbXBvbmVudFxuICAgICAgICAgIHsuLi5yZXNvbHZlZFN0YXRlfVxuICAgICAgICAgIHBhZ2VzPXtwYWdlc31cbiAgICAgICAgICBjYW5QcmV2aW91cz17Y2FuUHJldmlvdXN9XG4gICAgICAgICAgY2FuTmV4dD17Y2FuTmV4dH1cbiAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMub25QYWdlQ2hhbmdlfVxuICAgICAgICAgIG9uUGFnZVNpemVDaGFuZ2U9e3RoaXMub25QYWdlU2l6ZUNoYW5nZX1cbiAgICAgICAgICBjbGFzc05hbWU9e3BhZ2luYXRpb25Qcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgc3R5bGU9e3BhZ2luYXRpb25Qcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4ucGFnaW5hdGlvblByb3BzLnJlc3R9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgKVxuICAgIGNvbnN0IHRhYmxlUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRUYWJsZVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIClcbiAgICBjb25zdCB0Qm9keVByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0VGJvZHlQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICApXG4gICAgY29uc3QgbG9hZGluZ1Byb3BzID0gZ2V0TG9hZGluZ1Byb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIGNvbnN0IG5vRGF0YVByb3BzID0gZ2V0Tm9EYXRhUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgY29uc3QgcmVzaXplclByb3BzID0gZ2V0UmVzaXplclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuXG4gICAgY29uc3QgbWFrZVRhYmxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IG1ha2VQYWdpbmF0aW9uKClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ1JlYWN0VGFibGUnLCBjbGFzc05hbWUsIHJvb3RQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgIC4uLnJvb3RQcm9wcy5zdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93UGFnaW5hdGlvbiAmJiBzaG93UGFnaW5hdGlvblRvcFxuICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT0ncGFnaW5hdGlvbi10b3AnPlxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIDxUYWJsZVdyYXBwZXIgcmVmPXsoYykgPT4gdGhpcy50YWJsZVJlZiA9IGN9PlxuICAgICAgICAgICAgPFRhYmxlQ29tcG9uZW50XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICB0YWJsZVByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSZXNpemluZyA/ICdydC1yZXNpemluZycgOiAnJ1xuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBzdHlsZT17dGFibGVQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgICAgey4uLnRhYmxlUHJvcHMucmVzdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge21ha2VDb2xHcm91cCgpfVxuICAgICAgICAgICAgICB7aGFzSGVhZGVyR3JvdXBzID8gbWFrZUhlYWRlckdyb3VwcygpIDogbnVsbH1cbiAgICAgICAgICAgICAge21ha2VIZWFkZXJzKCl9XG4gICAgICAgICAgICAgIHtoYXNGaWx0ZXJzID8gbWFrZUZpbHRlcnMoKSA6IG51bGx9XG4gICAgICAgICAgICAgIDxUYm9keUNvbXBvbmVudFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Qm9keVByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3RCb2R5UHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgICAgey4uLnRCb2R5UHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwYWdlUm93cy5tYXAoKGQsIGkpID0+IG1ha2VQYWdlUm93KGQsIGkpKX1cbiAgICAgICAgICAgICAgICB7cGFkUm93cy5tYXAobWFrZVBhZFJvdyl9XG4gICAgICAgICAgICAgIDwvVGJvZHlDb21wb25lbnQ+XG4gICAgICAgICAgICAgIHtoYXNDb2x1bW5Gb290ZXIgPyBtYWtlQ29sdW1uRm9vdGVycygpIDogbnVsbH1cbiAgICAgICAgICAgIDwvVGFibGVDb21wb25lbnQ+XG4gICAgICAgICAgPC9UYWJsZVdyYXBwZXI+XG4gICAgICAgICAge3Nob3dQYWdpbmF0aW9uICYmIHNob3dQYWdpbmF0aW9uQm90dG9tXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdwYWdpbmF0aW9uLWJvdHRvbSc+XG4gICAgICAgICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgeyFwYWdlUm93cy5sZW5ndGggJiZcbiAgICAgICAgICAgIDxOb0RhdGFDb21wb25lbnQgey4uLm5vRGF0YVByb3BzfT5cbiAgICAgICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KG5vRGF0YVRleHQpfVxuICAgICAgICAgICAgPC9Ob0RhdGFDb21wb25lbnQ+fVxuICAgICAgICAgIDxMb2FkaW5nQ29tcG9uZW50XG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgbG9hZGluZ1RleHQ9e2xvYWRpbmdUZXh0fVxuICAgICAgICAgICAgey4uLmxvYWRpbmdQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBjaGlsZFByb3BzIGFyZSBvcHRpb25hbGx5IHBhc3NlZCB0byBhIGZ1bmN0aW9uLWFzLWEtY2hpbGRcbiAgICByZXR1cm4gY2hpbGRyZW4gPyBjaGlsZHJlbihmaW5hbFN0YXRlLCBtYWtlVGFibGUsIHRoaXMpIDogbWFrZVRhYmxlKClcbiAgfVxufVxuIl19