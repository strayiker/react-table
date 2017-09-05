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
      this.setState({ tableTotalWidth: this.tableWrapper.offsetWidth });
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
          showSortOrder = resolvedState.showSortOrder,
          manual = resolvedState.manual,
          loadingText = resolvedState.loadingText,
          noDataText = resolvedState.noDataText,
          sortable = resolvedState.sortable,
          resizable = resolvedState.resizable,
          filterable = resolvedState.filterable,
          footerPlacement = resolvedState.footerPlacement,
          pivotIDKey = resolvedState.pivotIDKey,
          pivotValKey = resolvedState.pivotValKey,
          pivotBy = resolvedState.pivotBy,
          subRowsKey = resolvedState.subRowsKey,
          aggregatedKey = resolvedState.aggregatedKey,
          originalKey = resolvedState.originalKey,
          indexKey = resolvedState.indexKey,
          groupedByPivotKey = resolvedState.groupedByPivotKey,
          fixedColumnsCount = resolvedState.fixedColumnsCount,
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

      var fixedColumnsProps = [];
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
        var isDummy = i === allVisibleColumns.length - 1;
        var isFixed = i < fixedColumnsCount;
        var isInnerFixed = i < fixedColumnsCount - 1;
        var isLastFixed = i === fixedColumnsCount - 1;

        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};

        var colgroupColProps = _utils2.default.splitProps(getColGroupColProps(finalState, undefined, column, _this2));
        var columnColgroupColProps = _utils2.default.splitProps(column.getColGroupColProps(finalState, undefined, column, _this2));

        var classes = [column.colGroupColClassName, colgroupColProps.className, columnColgroupColProps.className];

        var styles = _extends({}, column.colGroupColStyle, colgroupColProps.style, columnColgroupColProps.style);

        var minWidth = column.minWidth;
        var maxWidth = column.maxWidth;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, minWidth, 0);

        // calculate px
        if (tableTotalWidth) {
          var widthIsPercents = _utils2.default.isPercents(width);
          var minWidthIsPercents = _utils2.default.isPercents(minWidth);
          var maxWidthIsPercents = _utils2.default.isPercents(maxWidth);

          var widthValue = parseInt(width, 10);
          var minWidthValue = minWidth && parseInt(minWidth, 10);
          var maxWidthValue = maxWidth && parseInt(maxWidth, 10);

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

          if (isFixed) {
            var left = fixedColumnsProps.reduce(function (value, item) {
              return value + item.width;
            }, 0);
            fixedColumnsProps.push({ width: width, left: left });

            if (isLastFixed) {
              width += left;
            }
          }

          width = width + 'px';
        }

        if (isInnerFixed) {
          return null;
        }

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
        var isFixed = i < fixedColumnsCount && tableTotalWidth;

        if (isFixed) {
          styles.width = fixedColumnsProps[i].width;
          styles.left = fixedColumnsProps[i].left;
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
        var isFixed = i < fixedColumnsCount && tableTotalWidth;

        if (isFixed) {
          styles.width = fixedColumnsProps[i].width;
          styles.left = fixedColumnsProps[i].left;
        }

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, 'rt-resizable-header', {
              '-cursor-pointer': isSortable,
              '-sort-desc': sort && showSortOrder && sort.desc,
              '-sort-asc': sort && showSortOrder && !sort.desc,
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

        var isFixed = i < fixedColumnsCount && tableTotalWidth;

        if (isFixed) {
          styles.width = fixedColumnsProps[i].width;
          styles.left = fixedColumnsProps[i].left;
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

            var isFixed = i2 < fixedColumnsCount && tableTotalWidth;

            if (isFixed) {
              styles.width = fixedColumnsProps[i2].width;
              styles.left = fixedColumnsProps[i2].left;
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

        var isFixed = i < fixedColumnsCount && tableTotalWidth;

        if (isFixed) {
          styles.width = fixedColumnsProps[i].width;
          styles.left = fixedColumnsProps[i].left;
        }

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && '-hidden', { '-fixed': isFixed }),
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

        var isFixed = i < fixedColumnsCount && tableTotalWidth;

        if (isFixed) {
          styles.width = fixedColumnsProps[i].width;
          styles.left = fixedColumnsProps[i].left;
        }

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && '-hidden', { '-fixed': isFixed }),
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

      var displayFooterTop = footerPlacement === 'top' || footerPlacement === 'both';
      var displayFooterBottom = footerPlacement === 'bottom' || footerPlacement === 'both';

      var makeTable = function makeTable() {
        var colGroup = makeColGroup();
        var pagination = makePagination();
        var footer = hasColumnFooter ? makeColumnFooters() : null;
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
            { wrapperRef: function wrapperRef(c) {
                return _this2.tableWrapper = c;
              } },
            _react2.default.createElement(
              TableComponent,
              _extends({
                className: (0, _classnames2.default)(tableProps.className, currentlyResizing ? 'rt-resizing' : ''),
                style: tableProps.style
              }, tableProps.rest),
              colGroup,
              hasHeaderGroups ? makeHeaderGroups() : null,
              makeHeaders(),
              hasFilters ? makeFilters() : null,
              displayFooterTop && footer,
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
              displayFooterBottom && footer
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0Iiwic2V0U3RhdGUiLCJ0YWJsZVRvdGFsV2lkdGgiLCJ0YWJsZVdyYXBwZXIiLCJvZmZzZXRXaWR0aCIsInJlc29sdmVkU3RhdGUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZ2V0UHJvcHMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0Q29sR3JvdXBDb2xQcm9wcyIsImdldFRoZWFkR3JvdXBQcm9wcyIsImdldFRoZWFkR3JvdXBUclByb3BzIiwiZ2V0VGhlYWRHcm91cFRoUHJvcHMiLCJnZXRUaGVhZFByb3BzIiwiZ2V0VGhlYWRUclByb3BzIiwiZ2V0VGhlYWRUaFByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJQcm9wcyIsImdldFRoZWFkRmlsdGVyVHJQcm9wcyIsImdldFRoZWFkRmlsdGVyVGhQcm9wcyIsImdldFRib2R5UHJvcHMiLCJnZXRUclByb3BzIiwiZ2V0VGRQcm9wcyIsImdldFRmb290UHJvcHMiLCJnZXRUZm9vdFRyUHJvcHMiLCJnZXRUZm9vdFRkUHJvcHMiLCJnZXRQYWdpbmF0aW9uUHJvcHMiLCJnZXRMb2FkaW5nUHJvcHMiLCJnZXROb0RhdGFQcm9wcyIsImdldFJlc2l6ZXJQcm9wcyIsInNob3dQYWdpbmF0aW9uIiwic2hvd1BhZ2luYXRpb25Ub3AiLCJzaG93UGFnaW5hdGlvbkJvdHRvbSIsInNob3dTb3J0T3JkZXIiLCJtYW51YWwiLCJsb2FkaW5nVGV4dCIsIm5vRGF0YVRleHQiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJmb290ZXJQbGFjZW1lbnQiLCJwaXZvdElES2V5IiwicGl2b3RWYWxLZXkiLCJwaXZvdEJ5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJmaXhlZENvbHVtbnNDb3VudCIsImxvYWRpbmciLCJwYWdlcyIsIm9uRXhwYW5kZWRDaGFuZ2UiLCJUYWJsZVdyYXBwZXIiLCJUYWJsZUNvbXBvbmVudCIsIlRoZWFkQ29tcG9uZW50IiwiVGJvZHlDb21wb25lbnQiLCJUckNvbXBvbmVudCIsIlRoQ29tcG9uZW50IiwiVGRDb21wb25lbnQiLCJUZm9vdENvbXBvbmVudCIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJMb2FkaW5nQ29tcG9uZW50IiwiU3ViQ29tcG9uZW50IiwiTm9EYXRhQ29tcG9uZW50IiwiUmVzaXplckNvbXBvbmVudCIsIkV4cGFuZGVyQ29tcG9uZW50IiwiUGl2b3RWYWx1ZUNvbXBvbmVudCIsIlBpdm90Q29tcG9uZW50IiwiQWdncmVnYXRlZENvbXBvbmVudCIsIkZpbHRlckNvbXBvbmVudCIsIlBhZFJvd0NvbXBvbmVudCIsInJlc29sdmVkRGF0YSIsImFsbFZpc2libGVDb2x1bW5zIiwiaGVhZGVyR3JvdXBzIiwiaGFzSGVhZGVyR3JvdXBzIiwic29ydGVkRGF0YSIsInN0YXJ0Um93IiwiZW5kUm93IiwicGFnZVJvd3MiLCJzbGljZSIsIm1pblJvd3MiLCJwYWRSb3dzIiwicmFuZ2UiLCJNYXRoIiwibWF4IiwibGVuZ3RoIiwiaGFzQ29sdW1uRm9vdGVyIiwic29tZSIsImQiLCJGb290ZXIiLCJoYXNGaWx0ZXJzIiwicmVjdXJzZVJvd3NWaWV3SW5kZXgiLCJyb3dzIiwicGF0aCIsImluZGV4IiwibWFwIiwicm93IiwiaSIsInJvd1dpdGhWaWV3SW5kZXgiLCJfdmlld0luZGV4IiwibmV3UGF0aCIsImNvbmNhdCIsImdldCIsImNhblByZXZpb3VzIiwiY2FuTmV4dCIsInJvd0luZGV4IiwiZmluYWxTdGF0ZSIsImZpeGVkQ29sdW1uc1Byb3BzIiwicmF3Q29sdW1uc1dpZHRoIiwiZmxvb3JDb2x1bW5zV2lkdGgiLCJtYWtlQ29sR3JvdXAiLCJtYWtlQ29sIiwiY29sdW1uIiwiaXNEdW1teSIsImlzRml4ZWQiLCJpc0lubmVyRml4ZWQiLCJpc0xhc3RGaXhlZCIsInJlc2l6ZWRDb2wiLCJmaW5kIiwieCIsImlkIiwiY29sZ3JvdXBDb2xQcm9wcyIsInNwbGl0UHJvcHMiLCJ1bmRlZmluZWQiLCJjb2x1bW5Db2xncm91cENvbFByb3BzIiwiY2xhc3NlcyIsImNvbEdyb3VwQ29sQ2xhc3NOYW1lIiwic3R5bGVzIiwiY29sR3JvdXBDb2xTdHlsZSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJ3aWR0aCIsImdldEZpcnN0RGVmaW5lZCIsInZhbHVlIiwid2lkdGhJc1BlcmNlbnRzIiwiaXNQZXJjZW50cyIsIm1pbldpZHRoSXNQZXJjZW50cyIsIm1heFdpZHRoSXNQZXJjZW50cyIsIndpZHRoVmFsdWUiLCJwYXJzZUludCIsIm1pbldpZHRoVmFsdWUiLCJtYXhXaWR0aFZhbHVlIiwicGVyY2VudHNUb1B4IiwiY2xhbXAiLCJmbG9vciIsImRpZmYiLCJsZWZ0IiwicmVkdWNlIiwiaXRlbSIsInB1c2giLCJtYWtlSGVhZGVyR3JvdXBzIiwidGhlYWRHcm91cFByb3BzIiwidGhlYWRHcm91cFRyUHJvcHMiLCJyZXN0IiwibWFrZUhlYWRlckdyb3VwIiwidGhlYWRHcm91cFRoUHJvcHMiLCJjb2x1bW5IZWFkZXJQcm9wcyIsImdldEhlYWRlclByb3BzIiwiaGVhZGVyQ2xhc3NOYW1lIiwiaGVhZGVyU3R5bGUiLCJjb2xTcGFuIiwiY29sdW1ucyIsImNvbnRlbnQiLCJub3JtYWxpemVDb21wb25lbnQiLCJIZWFkZXIiLCJkYXRhIiwibWFrZUhlYWRlcnMiLCJ0aGVhZFByb3BzIiwidGhlYWRUclByb3BzIiwibWFrZUhlYWRlciIsInNvcnQiLCJzaG93IiwidGhlYWRUaFByb3BzIiwiaXNSZXNpemFibGUiLCJyZXNpemVyIiwiZSIsInJlc2l6ZXJQcm9wcyIsImlzU29ydGFibGUiLCJkZXNjIiwiaW5jbHVkZXMiLCJzaGlmdEtleSIsIm1ha2VGaWx0ZXJzIiwidGhlYWRGaWx0ZXJQcm9wcyIsInRoZWFkRmlsdGVyVHJQcm9wcyIsIm1ha2VGaWx0ZXIiLCJ0aGVhZEZpbHRlclRoUHJvcHMiLCJmaWx0ZXIiLCJSZXNvbHZlZEZpbHRlckNvbXBvbmVudCIsIkZpbHRlciIsImlzRmlsdGVyYWJsZSIsIm9uQ2hhbmdlIiwibWFrZVBhZ2VSb3ciLCJyb3dJbmZvIiwib3JpZ2luYWwiLCJ2aWV3SW5kZXgiLCJsZXZlbCIsIm5lc3RpbmdQYXRoIiwiYWdncmVnYXRlZCIsImdyb3VwZWRCeVBpdm90Iiwic3ViUm93cyIsImlzRXhwYW5kZWQiLCJ0clByb3BzIiwiam9pbiIsImkyIiwidGRQcm9wcyIsImNvbHVtblByb3BzIiwiY2VsbEluZm8iLCJwaXZvdGVkIiwiZXhwYW5kZXIiLCJpbnRlcmFjdGlvblByb3BzIiwiaXNCcmFuY2giLCJpc1ByZXZpZXciLCJvbkV4cGFuZGVyQ2xpY2siLCJuZXdFeHBhbmRlZCIsImNsb25lIiwic2V0Iiwic2V0U3RhdGVXaXRoRGF0YSIsInJlc29sdmVkQ2VsbCIsIkNlbGwiLCJSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJBZ2dyZWdhdGVkIiwiYWdncmVnYXRlIiwiUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCIsIkV4cGFuZGVyIiwiUmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RWYWx1ZSIsIkRlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50IiwiUmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlBpdm90IiwiZXhwYW5kYWJsZSIsIm9uQ2xpY2siLCJpbmRleE9mIiwibWFrZVBhZFJvdyIsIm1ha2VQYWRDb2x1bW4iLCJtYWtlQ29sdW1uRm9vdGVycyIsInRGb290UHJvcHMiLCJ0Rm9vdFRyUHJvcHMiLCJtYWtlQ29sdW1uRm9vdGVyIiwidEZvb3RUZFByb3BzIiwiY29sdW1uRm9vdGVyUHJvcHMiLCJnZXRGb290ZXJQcm9wcyIsIm1ha2VQYWdpbmF0aW9uIiwicGFnaW5hdGlvblByb3BzIiwicm9vdFByb3BzIiwidGFibGVQcm9wcyIsInRCb2R5UHJvcHMiLCJsb2FkaW5nUHJvcHMiLCJub0RhdGFQcm9wcyIsImRpc3BsYXlGb290ZXJUb3AiLCJkaXNwbGF5Rm9vdGVyQm90dG9tIiwibWFrZVRhYmxlIiwiY29sR3JvdXAiLCJwYWdpbmF0aW9uIiwiZm9vdGVyIiwiYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OztBQUpBOzs7QUFNTyxJQUFNQSx3RUFBTjs7SUFFY0MsVTs7O0FBR25CLHNCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBR2xCLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0csYUFBTCxHQUFxQixNQUFLQSxh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QUVFLHlCQUFPZ1AsV0FBVy9PO0FBRnBCLG1CQUdNK08sV0FBVzVGLElBSGpCO0FBS0czRSx5QkFBU2lCLEdBQVQsQ0FBYSxVQUFDUCxDQUFELEVBQUlTLENBQUo7QUFBQSx5QkFBVThGLFlBQVl2RyxDQUFaLEVBQWVTLENBQWYsQ0FBVjtBQUFBLGlCQUFiLENBTEg7QUFNR2hCLHdCQUFRYyxHQUFSLENBQVl5SSxVQUFaO0FBTkgsZUFiRjtBQXFCR2lCLHFDQUF1Qkk7QUFyQjFCO0FBREYsV0FiRjtBQXNDR2hPLDRCQUFrQkUsb0JBQWxCLEdBQ0c7QUFBQTtBQUFBLGNBQUssV0FBVSxtQkFBZjtBQUNDNk47QUFERCxXQURILEdBSUcsSUExQ047QUEyQ0csV0FBQzlLLFNBQVNPLE1BQVYsSUFDQztBQUFDLDJCQUFEO0FBQXFCa0ssdUJBQXJCO0FBQ0csNEJBQUVwRixrQkFBRixDQUFxQmhJLFVBQXJCO0FBREgsV0E1Q0o7QUErQ0Usd0NBQUMsZ0JBQUQ7QUFDRSxxQkFBU2MsT0FEWDtBQUVFLHlCQUFhZjtBQUZmLGFBR01vTixZQUhOO0FBL0NGLFNBREY7QUF1REQsT0EzREQ7O0FBNkRBO0FBQ0EsYUFBT2xQLFdBQVdBLFNBQVNzRyxVQUFULEVBQXFCZ0osU0FBckIsRUFBZ0MsSUFBaEMsQ0FBWCxHQUFtREEsV0FBMUQ7QUFDRDs7OztFQXgvQnFDLHVCQUFRLDBDQUFSLEM7O0FBQW5CNVIsVSxDQUNaaVMsWTtrQkFEWWpTLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbi8vXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IExpZmVjeWNsZSBmcm9tICcuL2xpZmVjeWNsZSdcbmltcG9ydCBNZXRob2RzIGZyb20gJy4vbWV0aG9kcydcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0UHJvcHMnXG5cbmV4cG9ydCBjb25zdCBSZWFjdFRhYmxlRGVmYXVsdHMgPSBkZWZhdWx0UHJvcHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUYWJsZSBleHRlbmRzIE1ldGhvZHMoTGlmZWN5Y2xlKENvbXBvbmVudCkpIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wc1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXREYXRhTW9kZWwgPSB0aGlzLmdldERhdGFNb2RlbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRTb3J0ZWREYXRhID0gdGhpcy5nZXRTb3J0ZWREYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmZpcmVGZXRjaERhdGEgPSB0aGlzLmZpcmVGZXRjaERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0UHJvcE9yU3RhdGUgPSB0aGlzLmdldFByb3BPclN0YXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFN0YXRlT3JQcm9wID0gdGhpcy5nZXRTdGF0ZU9yUHJvcC5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLnNvcnREYXRhID0gdGhpcy5zb3J0RGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRNaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZUNoYW5nZSA9IHRoaXMub25QYWdlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZVNpemVDaGFuZ2UgPSB0aGlzLm9uUGFnZVNpemVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuc29ydENvbHVtbiA9IHRoaXMuc29ydENvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJDb2x1bW4gPSB0aGlzLmZpbHRlckNvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5TdGFydCA9IHRoaXMucmVzaXplQ29sdW1uU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uRW5kID0gdGhpcy5yZXNpemVDb2x1bW5FbmQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uTW92aW5nID0gdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2U6IDAsXG4gICAgICBwYWdlU2l6ZTogcHJvcHMuZGVmYXVsdFBhZ2VTaXplLFxuICAgICAgc29ydGVkOiBwcm9wcy5kZWZhdWx0U29ydGVkLFxuICAgICAgZXhwYW5kZWQ6IHByb3BzLmRlZmF1bHRFeHBhbmRlZCxcbiAgICAgIGZpbHRlcmVkOiBwcm9wcy5kZWZhdWx0RmlsdGVyZWQsXG4gICAgICByZXNpemVkOiBwcm9wcy5kZWZhdWx0UmVzaXplZCxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nOiBmYWxzZSxcbiAgICAgIHNraXBOZXh0U29ydDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0YWJsZVRvdGFsV2lkdGg6IHRoaXMudGFibGVXcmFwcGVyLm9mZnNldFdpZHRoIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHJlc29sdmVkU3RhdGUgPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3R5bGUsXG4gICAgICBnZXRQcm9wcyxcbiAgICAgIGdldFRhYmxlUHJvcHMsXG4gICAgICBnZXRDb2xHcm91cENvbFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkUHJvcHMsXG4gICAgICBnZXRUaGVhZFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZFRoUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzLFxuICAgICAgZ2V0VGJvZHlQcm9wcyxcbiAgICAgIGdldFRyUHJvcHMsXG4gICAgICBnZXRUZFByb3BzLFxuICAgICAgZ2V0VGZvb3RQcm9wcyxcbiAgICAgIGdldFRmb290VHJQcm9wcyxcbiAgICAgIGdldFRmb290VGRQcm9wcyxcbiAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyxcbiAgICAgIGdldExvYWRpbmdQcm9wcyxcbiAgICAgIGdldE5vRGF0YVByb3BzLFxuICAgICAgZ2V0UmVzaXplclByb3BzLFxuICAgICAgc2hvd1BhZ2luYXRpb24sXG4gICAgICBzaG93UGFnaW5hdGlvblRvcCxcbiAgICAgIHNob3dQYWdpbmF0aW9uQm90dG9tLFxuICAgICAgc2hvd1NvcnRPcmRlcixcbiAgICAgIG1hbnVhbCxcbiAgICAgIGxvYWRpbmdUZXh0LFxuICAgICAgbm9EYXRhVGV4dCxcbiAgICAgIHNvcnRhYmxlLFxuICAgICAgcmVzaXphYmxlLFxuICAgICAgZmlsdGVyYWJsZSxcbiAgICAgIGZvb3RlclBsYWNlbWVudCxcbiAgICAgIC8vIFBpdm90aW5nIFN0YXRlXG4gICAgICBwaXZvdElES2V5LFxuICAgICAgcGl2b3RWYWxLZXksXG4gICAgICBwaXZvdEJ5LFxuICAgICAgc3ViUm93c0tleSxcbiAgICAgIGFnZ3JlZ2F0ZWRLZXksXG4gICAgICBvcmlnaW5hbEtleSxcbiAgICAgIGluZGV4S2V5LFxuICAgICAgZ3JvdXBlZEJ5UGl2b3RLZXksXG4gICAgICAvLyBGaXhlZFxuICAgICAgZml4ZWRDb2x1bW5zQ291bnQsXG4gICAgICAvLyBTdGF0ZVxuICAgICAgbG9hZGluZyxcbiAgICAgIHBhZ2VTaXplLFxuICAgICAgcGFnZSxcbiAgICAgIHNvcnRlZCxcbiAgICAgIGZpbHRlcmVkLFxuICAgICAgcmVzaXplZCxcbiAgICAgIGV4cGFuZGVkLFxuICAgICAgcGFnZXMsXG4gICAgICBvbkV4cGFuZGVkQ2hhbmdlLFxuICAgICAgLy8gQ29tcG9uZW50c1xuICAgICAgVGFibGVXcmFwcGVyLFxuICAgICAgVGFibGVDb21wb25lbnQsXG4gICAgICBUaGVhZENvbXBvbmVudCxcbiAgICAgIFRib2R5Q29tcG9uZW50LFxuICAgICAgVHJDb21wb25lbnQsXG4gICAgICBUaENvbXBvbmVudCxcbiAgICAgIFRkQ29tcG9uZW50LFxuICAgICAgVGZvb3RDb21wb25lbnQsXG4gICAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgICAgTG9hZGluZ0NvbXBvbmVudCxcbiAgICAgIFN1YkNvbXBvbmVudCxcbiAgICAgIE5vRGF0YUNvbXBvbmVudCxcbiAgICAgIFJlc2l6ZXJDb21wb25lbnQsXG4gICAgICBFeHBhbmRlckNvbXBvbmVudCxcbiAgICAgIFBpdm90VmFsdWVDb21wb25lbnQsXG4gICAgICBQaXZvdENvbXBvbmVudCxcbiAgICAgIEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICBGaWx0ZXJDb21wb25lbnQsXG4gICAgICBQYWRSb3dDb21wb25lbnQsXG4gICAgICAvLyBEYXRhIG1vZGVsXG4gICAgICByZXNvbHZlZERhdGEsXG4gICAgICBhbGxWaXNpYmxlQ29sdW1ucyxcbiAgICAgIGhlYWRlckdyb3VwcyxcbiAgICAgIGhhc0hlYWRlckdyb3VwcyxcbiAgICAgIC8vIFNvcnRlZCBEYXRhXG4gICAgICBzb3J0ZWREYXRhLFxuICAgICAgY3VycmVudGx5UmVzaXppbmcsXG4gICAgICB0YWJsZVRvdGFsV2lkdGgsXG4gICAgfSA9IHJlc29sdmVkU3RhdGVcblxuICAgIC8vIFBhZ2luYXRpb25cbiAgICBjb25zdCBzdGFydFJvdyA9IHBhZ2VTaXplICogcGFnZVxuICAgIGNvbnN0IGVuZFJvdyA9IHN0YXJ0Um93ICsgcGFnZVNpemVcbiAgICBsZXQgcGFnZVJvd3MgPSBtYW51YWwgPyByZXNvbHZlZERhdGEgOiBzb3J0ZWREYXRhLnNsaWNlKHN0YXJ0Um93LCBlbmRSb3cpXG4gICAgY29uc3QgbWluUm93cyA9IHRoaXMuZ2V0TWluUm93cygpXG4gICAgY29uc3QgcGFkUm93cyA9IF8ucmFuZ2UoTWF0aC5tYXgobWluUm93cyAtIHBhZ2VSb3dzLmxlbmd0aCwgMCkpXG5cbiAgICBjb25zdCBoYXNDb2x1bW5Gb290ZXIgPSBhbGxWaXNpYmxlQ29sdW1ucy5zb21lKGQgPT4gZC5Gb290ZXIpXG4gICAgY29uc3QgaGFzRmlsdGVycyA9IGZpbHRlcmFibGUgfHwgYWxsVmlzaWJsZUNvbHVtbnMuc29tZShkID0+IGQuZmlsdGVyYWJsZSlcblxuICAgIGNvbnN0IHJlY3Vyc2VSb3dzVmlld0luZGV4ID0gKHJvd3MsIHBhdGggPSBbXSwgaW5kZXggPSAtMSkgPT4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgcm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgICBjb25zdCByb3dXaXRoVmlld0luZGV4ID0ge1xuICAgICAgICAgICAgLi4ucm93LFxuICAgICAgICAgICAgX3ZpZXdJbmRleDogaW5kZXgsXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5ld1BhdGggPSBwYXRoLmNvbmNhdChbaV0pXG4gICAgICAgICAgaWYgKHJvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0gJiYgXy5nZXQoZXhwYW5kZWQsIG5ld1BhdGgpKSB7XG4gICAgICAgICAgICA7W3Jvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0sIGluZGV4XSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KFxuICAgICAgICAgICAgICByb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldLFxuICAgICAgICAgICAgICBuZXdQYXRoLFxuICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcm93V2l0aFZpZXdJbmRleFxuICAgICAgICB9KSxcbiAgICAgICAgaW5kZXgsXG4gICAgICBdXG4gICAgfVxuICAgIDtbcGFnZVJvd3NdID0gcmVjdXJzZVJvd3NWaWV3SW5kZXgocGFnZVJvd3MpXG5cbiAgICBjb25zdCBjYW5QcmV2aW91cyA9IHBhZ2UgPiAwXG4gICAgY29uc3QgY2FuTmV4dCA9IHBhZ2UgKyAxIDwgcGFnZXNcblxuICAgIGxldCByb3dJbmRleCA9IC0xXG5cbiAgICBjb25zdCBmaW5hbFN0YXRlID0ge1xuICAgICAgLi4ucmVzb2x2ZWRTdGF0ZSxcbiAgICAgIHN0YXJ0Um93LFxuICAgICAgZW5kUm93LFxuICAgICAgcGFnZVJvd3MsXG4gICAgICBtaW5Sb3dzLFxuICAgICAgcGFkUm93cyxcbiAgICAgIGhhc0NvbHVtbkZvb3RlcixcbiAgICAgIGNhblByZXZpb3VzLFxuICAgICAgY2FuTmV4dCxcbiAgICB9XG5cbiAgICBjb25zdCBmaXhlZENvbHVtbnNQcm9wcyA9IFtdO1xuICAgIGxldCByYXdDb2x1bW5zV2lkdGggPSAwXG4gICAgbGV0IGZsb29yQ29sdW1uc1dpZHRoID0gMFxuXG4gICAgLy8gVmlzdWFsIENvbXBvbmVudHNcblxuICAgIGNvbnN0IG1ha2VDb2xHcm91cCA9ICgpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxjb2xncm91cD5cbiAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VDb2wpfVxuICAgICAgICA8L2NvbGdyb3VwPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2wgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCBpc0R1bW15ID0gaSA9PT0gYWxsVmlzaWJsZUNvbHVtbnMubGVuZ3RoIC0gMVxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudFxuICAgICAgY29uc3QgaXNJbm5lckZpeGVkID0gaSA8IGZpeGVkQ29sdW1uc0NvdW50IC0gMVxuICAgICAgY29uc3QgaXNMYXN0Rml4ZWQgPSBpID09PSBmaXhlZENvbHVtbnNDb3VudCAtIDFcblxuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cblxuICAgICAgY29uc3QgY29sZ3JvdXBDb2xQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0Q29sR3JvdXBDb2xQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkNvbGdyb3VwQ29sUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRDb2xHcm91cENvbFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uY29sR3JvdXBDb2xDbGFzc05hbWUsXG4gICAgICAgIGNvbGdyb3VwQ29sUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Db2xncm91cENvbFByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uY29sR3JvdXBDb2xTdHlsZSxcbiAgICAgICAgLi4uY29sZ3JvdXBDb2xQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uQ29sZ3JvdXBDb2xQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgbGV0IG1pbldpZHRoID0gY29sdW1uLm1pbldpZHRoXG4gICAgICBsZXQgbWF4V2lkdGggPSBjb2x1bW4ubWF4V2lkdGhcbiAgICAgIGxldCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIG1pbldpZHRoLFxuICAgICAgICAwXG4gICAgICApXG5cbiAgICAgIC8vIGNhbGN1bGF0ZSBweFxuICAgICAgaWYgKHRhYmxlVG90YWxXaWR0aCkge1xuICAgICAgICBjb25zdCB3aWR0aElzUGVyY2VudHMgPSBfLmlzUGVyY2VudHMod2lkdGgpXG4gICAgICAgIGNvbnN0IG1pbldpZHRoSXNQZXJjZW50cyA9IF8uaXNQZXJjZW50cyhtaW5XaWR0aClcbiAgICAgICAgY29uc3QgbWF4V2lkdGhJc1BlcmNlbnRzID0gXy5pc1BlcmNlbnRzKG1heFdpZHRoKVxuXG4gICAgICAgIGNvbnN0IHdpZHRoVmFsdWUgPSBwYXJzZUludCh3aWR0aCwgMTApXG4gICAgICAgIGNvbnN0IG1pbldpZHRoVmFsdWUgPSBtaW5XaWR0aCAmJiBwYXJzZUludChtaW5XaWR0aCwgMTApXG4gICAgICAgIGNvbnN0IG1heFdpZHRoVmFsdWUgPSBtYXhXaWR0aCAmJiBwYXJzZUludChtYXhXaWR0aCwgMTApXG5cbiAgICAgICAgd2lkdGggPSB3aWR0aElzUGVyY2VudHNcbiAgICAgICAgICA/IF8ucGVyY2VudHNUb1B4KHdpZHRoVmFsdWUsIHRhYmxlVG90YWxXaWR0aClcbiAgICAgICAgICA6IHdpZHRoVmFsdWVcblxuICAgICAgICBtaW5XaWR0aCA9IG1pbldpZHRoSXNQZXJjZW50c1xuICAgICAgICAgID8gXy5wZXJjZW50c1RvUHgobWluV2lkdGhWYWx1ZSwgdGFibGVUb3RhbFdpZHRoKVxuICAgICAgICAgIDogbWluV2lkdGhWYWx1ZVxuXG4gICAgICAgIG1heFdpZHRoID0gbWF4V2lkdGhJc1BlcmNlbnRzXG4gICAgICAgICAgPyBfLnBlcmNlbnRzVG9QeChtYXhXaWR0aFZhbHVlLCB0YWJsZVRvdGFsV2lkdGgpXG4gICAgICAgICAgOiBtYXhXaWR0aFZhbHVlXG5cbiAgICAgICAgd2lkdGggPSBfLmNsYW1wKHdpZHRoLCBtaW5XaWR0aCwgbWF4V2lkdGgpXG5cbiAgICAgICAgcmF3Q29sdW1uc1dpZHRoICs9IHdpZHRoXG4gICAgICAgIHdpZHRoID0gTWF0aC5mbG9vcih3aWR0aClcbiAgICAgICAgZmxvb3JDb2x1bW5zV2lkdGggKz0gd2lkdGhcblxuICAgICAgICBjb25zdCBkaWZmID0gTWF0aC5mbG9vcihyYXdDb2x1bW5zV2lkdGggLSBmbG9vckNvbHVtbnNXaWR0aClcblxuICAgICAgICBpZiAoZGlmZiA+PSAxKSB7XG4gICAgICAgICAgd2lkdGggKz0gZGlmZlxuICAgICAgICAgIGZsb29yQ29sdW1uc1dpZHRoICs9IGRpZmZcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgICAgY29uc3QgbGVmdCA9IGZpeGVkQ29sdW1uc1Byb3BzLnJlZHVjZSgodmFsdWUsIGl0ZW0pID0+IHZhbHVlICsgaXRlbS53aWR0aCwgMClcbiAgICAgICAgICBmaXhlZENvbHVtbnNQcm9wcy5wdXNoKHsgd2lkdGgsIGxlZnQgfSlcblxuICAgICAgICAgIGlmIChpc0xhc3RGaXhlZCkge1xuICAgICAgICAgICAgd2lkdGggKz0gbGVmdFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0lubmVyRml4ZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGNvbFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3J0LWNvbGdyb3VwLWNvbCcsIGNsYXNzZXMsIHsgJy1kdW1teSc6IGlzRHVtbXkgfSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXJHcm91cHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEdyb3VwUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWhlYWRlckdyb3VwcycsIHRoZWFkR3JvdXBQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt0aGVhZEdyb3VwUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRoZWFkR3JvdXBQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkR3JvdXBUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZEdyb3VwVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZEdyb3VwVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKG1ha2VIZWFkZXJHcm91cCl9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyR3JvdXAgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEdyb3VwVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEdyb3VwVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkR3JvdXBUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29sU3BhbiA9IGNvbHVtbi5jb2x1bW5zLmxlbmd0aFxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZEdyb3VwVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgICBjb2xTcGFuLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0R1bW15ID0gaSA9PT0gaGVhZGVyR3JvdXBzLmxlbmd0aCAtIDFcbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdGFibGVUb3RhbFdpZHRoXG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLndpZHRoXG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ubGVmdFxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb250ZW50ID0gXy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkhlYWRlciwge1xuICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgeyAnLWR1bW15JzogaXNEdW1teSwgJy1lbXB0eSc6ICFjb250ZW50LCAnLWZpeGVkJzogaXNGaXhlZCB9KX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1oZWFkZXInLCB0aGVhZFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3RoZWFkUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRoZWFkUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZFRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VIZWFkZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHNvcnQgPSBzb3J0ZWQuZmluZChkID0+IGQuaWQgPT09IGNvbHVtbi5pZClcbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHRoZWFkVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgdGhlYWRUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzUmVzaXphYmxlID0gXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnJlc2l6YWJsZSwgcmVzaXphYmxlLCBmYWxzZSlcbiAgICAgIGNvbnN0IHJlc2l6ZXIgPSBpc1Jlc2l6YWJsZVxuICAgICAgICA/ICg8UmVzaXplckNvbXBvbmVudFxuICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoY29sdW1uLCBlLCBmYWxzZSl9XG4gICAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoY29sdW1uLCBlLCB0cnVlKX1cbiAgICAgICAgICB7Li4ucmVzaXplclByb3BzfVxuICAgICAgICAvPilcbiAgICAgICAgOiBudWxsXG5cbiAgICAgIGNvbnN0IGlzU29ydGFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChjb2x1bW4uc29ydGFibGUsIHNvcnRhYmxlLCBmYWxzZSlcbiAgICAgIGNvbnN0IGlzRHVtbXkgPSBpID09PSBhbGxWaXNpYmxlQ29sdW1ucy5sZW5ndGggLSAxXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA8IGZpeGVkQ29sdW1uc0NvdW50ICYmIHRhYmxlVG90YWxXaWR0aFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbnNQcm9wc1tpXS53aWR0aFxuICAgICAgICBzdHlsZXMubGVmdCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLmxlZnRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAncnQtcmVzaXphYmxlLWhlYWRlcicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICctY3Vyc29yLXBvaW50ZXInOiBpc1NvcnRhYmxlLFxuICAgICAgICAgICAgICAnLXNvcnQtZGVzYyc6IHNvcnQgJiYgc2hvd1NvcnRPcmRlciAmJiBzb3J0LmRlc2MsXG4gICAgICAgICAgICAgICctc29ydC1hc2MnOiBzb3J0ICYmIHNob3dTb3J0T3JkZXIgJiYgIXNvcnQuZGVzYyxcbiAgICAgICAgICAgICAgJy1oaWRkZW4nOiAhc2hvdyxcbiAgICAgICAgICAgICAgJy1kdW1teSc6IGlzRHVtbXksXG4gICAgICAgICAgICAgICctZml4ZWQnOiBpc0ZpeGVkLFxuICAgICAgICAgICAgICAncnQtaGVhZGVyLXBpdm90JzogcGl2b3RCeSAmJiBwaXZvdEJ5LnNsaWNlKDAsIC0xKS5pbmNsdWRlcyhjb2x1bW4uaWQpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB0b2dnbGVTb3J0PXtlID0+IHtcbiAgICAgICAgICAgIGlzU29ydGFibGUgJiYgdGhpcy5zb3J0Q29sdW1uKGNvbHVtbiwgZS5zaGlmdEtleSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3J0LXJlc2l6YWJsZS1oZWFkZXItY29udGVudCc+XG4gICAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkhlYWRlciwge1xuICAgICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtyZXNpemVyfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VGaWx0ZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctZmlsdGVycycsIHRoZWFkRmlsdGVyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17dGhlYWRGaWx0ZXJQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udGhlYWRGaWx0ZXJQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkRmlsdGVyVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRGaWx0ZXJUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkRmlsdGVyVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUZpbHRlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlRmlsdGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEZpbHRlclRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsdGVyID0gZmlsdGVyZWQuZmluZChmaWx0ZXIgPT4gZmlsdGVyLmlkID09PSBjb2x1bW4uaWQpXG5cbiAgICAgIGNvbnN0IFJlc29sdmVkRmlsdGVyQ29tcG9uZW50ID0gY29sdW1uLkZpbHRlciB8fCBGaWx0ZXJDb21wb25lbnRcblxuICAgICAgY29uc3QgaXNGaWx0ZXJhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIGNvbHVtbi5maWx0ZXJhYmxlLFxuICAgICAgICBmaWx0ZXJhYmxlLFxuICAgICAgICBmYWxzZVxuICAgICAgKVxuXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA8IGZpeGVkQ29sdW1uc0NvdW50ICYmIHRhYmxlVG90YWxXaWR0aFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbnNQcm9wc1tpXS53aWR0aFxuICAgICAgICBzdHlsZXMubGVmdCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLmxlZnRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCB7ICctZml4ZWQnOiBpc0ZpeGVkLCAnLWVtcHR5JzogIWlzRmlsdGVyYWJsZSB9KX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge2lzRmlsdGVyYWJsZVxuICAgICAgICAgICAgPyBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiB0aGlzLmZpbHRlckNvbHVtbihjb2x1bW4sIHZhbHVlKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGVmYXVsdFByb3BzLmNvbHVtbi5GaWx0ZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFnZVJvdyA9IChyb3csIGksIHBhdGggPSBbXSkgPT4ge1xuICAgICAgY29uc3Qgcm93SW5mbyA9IHtcbiAgICAgICAgb3JpZ2luYWw6IHJvd1tvcmlnaW5hbEtleV0sXG4gICAgICAgIHJvdzogcm93LFxuICAgICAgICBpbmRleDogcm93W2luZGV4S2V5XSxcbiAgICAgICAgdmlld0luZGV4OiArK3Jvd0luZGV4LFxuICAgICAgICBsZXZlbDogcGF0aC5sZW5ndGgsXG4gICAgICAgIG5lc3RpbmdQYXRoOiBwYXRoLmNvbmNhdChbaV0pLFxuICAgICAgICBhZ2dyZWdhdGVkOiByb3dbYWdncmVnYXRlZEtleV0sXG4gICAgICAgIGdyb3VwZWRCeVBpdm90OiByb3dbZ3JvdXBlZEJ5UGl2b3RLZXldLFxuICAgICAgICBzdWJSb3dzOiByb3dbc3ViUm93c0tleV0sXG4gICAgICB9XG4gICAgICBjb25zdCBpc0V4cGFuZGVkID0gXy5nZXQoZXhwYW5kZWQsIHJvd0luZm8ubmVzdGluZ1BhdGgpXG4gICAgICBjb25zdCB0clByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUclByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiBbXG4gICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgIGtleT17cm93SW5mby5uZXN0aW5nUGF0aC5qb2luKCdfJyl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgdHJQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICByb3cuX3ZpZXdJbmRleCAlIDIgPyAnLWV2ZW4nIDogJy1vZGQnXG4gICAgICAgICAgKX1cbiAgICAgICAgICBzdHlsZT17dHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udHJQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcCgoY29sdW1uLCBpMikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgICAgICAgY29uc3QgdGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgICAgICAgZ2V0VGRQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCBjb2x1bW4sIHRoaXMpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgICAgICAgY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIGNvbHVtbiwgdGhpcylcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgICAgICAgdGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAgICAgICAuLi50ZFByb3BzLnN0eWxlLFxuICAgICAgICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpc0ZpeGVkID0gaTIgPCBmaXhlZENvbHVtbnNDb3VudCAmJiB0YWJsZVRvdGFsV2lkdGhcblxuICAgICAgICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5zUHJvcHNbaTJdLndpZHRoXG4gICAgICAgICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaTJdLmxlZnRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY2VsbEluZm8gPSB7XG4gICAgICAgICAgICAgIC4uLnJvd0luZm8sXG4gICAgICAgICAgICAgIGlzRXhwYW5kZWQsXG4gICAgICAgICAgICAgIGNvbHVtbjogeyAuLi5jb2x1bW4gfSxcbiAgICAgICAgICAgICAgdmFsdWU6IHJvd0luZm8ucm93W2NvbHVtbi5pZF0sXG4gICAgICAgICAgICAgIHBpdm90ZWQ6IGNvbHVtbi5waXZvdGVkLFxuICAgICAgICAgICAgICBleHBhbmRlcjogY29sdW1uLmV4cGFuZGVyLFxuICAgICAgICAgICAgICByZXNpemVkLFxuICAgICAgICAgICAgICBzaG93LFxuICAgICAgICAgICAgICB0ZFByb3BzLFxuICAgICAgICAgICAgICBjb2x1bW5Qcm9wcyxcbiAgICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICAgc3R5bGVzLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNlbGxJbmZvLnZhbHVlXG5cbiAgICAgICAgICAgIGxldCBpbnRlcmFjdGlvblByb3BzXG4gICAgICAgICAgICBsZXQgaXNCcmFuY2hcbiAgICAgICAgICAgIGxldCBpc1ByZXZpZXdcblxuICAgICAgICAgICAgY29uc3Qgb25FeHBhbmRlckNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICAgIGxldCBuZXdFeHBhbmRlZCA9IF8uY2xvbmUoZXhwYW5kZWQpXG4gICAgICAgICAgICAgIGlmIChpc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgbmV3RXhwYW5kZWQgPSBfLnNldChuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIGZhbHNlKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0V4cGFuZGVkID0gXy5zZXQobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCB7fSlcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlV2l0aERhdGEoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ6IG5ld0V4cGFuZGVkLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25FeHBhbmRlZENoYW5nZSAmJlxuICAgICAgICAgICAgICAgICAgICBvbkV4cGFuZGVkQ2hhbmdlKG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwgZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBhIHN0YW5kYXJkIGNlbGxcbiAgICAgICAgICAgIGxldCByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgY29sdW1uLkNlbGwsXG4gICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAvLyBSZXNvbHZlIFJlbmRlcmVyc1xuICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLkFnZ3JlZ2F0ZWQgfHxcbiAgICAgICAgICAgICAgKCFjb2x1bW4uYWdncmVnYXRlID8gQWdncmVnYXRlZENvbXBvbmVudCA6IGNvbHVtbi5DZWxsKVxuICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCA9XG4gICAgICAgICAgICAgIGNvbHVtbi5FeHBhbmRlciB8fCBFeHBhbmRlckNvbXBvbmVudFxuICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLlBpdm90VmFsdWUgfHwgUGl2b3RWYWx1ZUNvbXBvbmVudFxuICAgICAgICAgICAgY29uc3QgRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnQgPVxuICAgICAgICAgICAgICBQaXZvdENvbXBvbmVudCB8fFxuICAgICAgICAgICAgICAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgPFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRQaXZvdENvbXBvbmVudCA9XG4gICAgICAgICAgICAgIGNvbHVtbi5QaXZvdCB8fCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudFxuXG4gICAgICAgICAgICAvLyBJcyB0aGlzIGNlbGwgZXhwYW5kYWJsZT9cbiAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkIHx8IGNlbGxJbmZvLmV4cGFuZGVyKSB7XG4gICAgICAgICAgICAgIC8vIE1ha2UgaXQgZXhwYW5kYWJsZSBieSBkZWZ1YWx0XG4gICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgPSB0cnVlXG4gICAgICAgICAgICAgIGludGVyYWN0aW9uUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgb25DbGljazogb25FeHBhbmRlckNsaWNrLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIElmIHBpdm90ZWQsIGhhcyBubyBzdWJSb3dzLCBhbmQgZG9lcyBub3QgaGF2ZSBhIHN1YkNvbXBvbmVudCwgZG8gbm90IG1ha2UgZXhwYW5kYWJsZVxuICAgICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCkge1xuICAgICAgICAgICAgICAgIGlmICghY2VsbEluZm8uc3ViUm93cykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFTdWJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uUHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCkge1xuICAgICAgICAgICAgICAvLyBJcyB0aGlzIGNvbHVtbiBhIGJyYW5jaD9cbiAgICAgICAgICAgICAgaXNCcmFuY2ggPVxuICAgICAgICAgICAgICAgIHJvd0luZm8ucm93W3Bpdm90SURLZXldID09PSBjb2x1bW4uaWQgJiYgY2VsbEluZm8uc3ViUm93c1xuICAgICAgICAgICAgICAvLyBTaG91bGQgdGhpcyBjb2x1bW4gYmUgYmxhbms/XG4gICAgICAgICAgICAgIGlzUHJldmlldyA9XG4gICAgICAgICAgICAgICAgcGl2b3RCeS5pbmRleE9mKGNvbHVtbi5pZCkgPlxuICAgICAgICAgICAgICAgICAgcGl2b3RCeS5pbmRleE9mKHJvd0luZm8ucm93W3Bpdm90SURLZXldKSAmJiBjZWxsSW5mby5zdWJSb3dzXG4gICAgICAgICAgICAgIC8vIFBpdm90IENlbGwgUmVuZGVyIE92ZXJyaWRlXG4gICAgICAgICAgICAgIGlmIChpc0JyYW5jaCkge1xuICAgICAgICAgICAgICAgIC8vIGlzUGl2b3RcbiAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgIFJlc29sdmVkUGl2b3RDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmNlbGxJbmZvLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm93W3Bpdm90VmFsS2V5XSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICByb3dbcGl2b3RWYWxLZXldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzUHJldmlldykge1xuICAgICAgICAgICAgICAgIC8vIFNob3cgdGhlIHBpdm90IHByZXZpZXdcbiAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgIFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGxJbmZvLmFnZ3JlZ2F0ZWQpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNlbGxJbmZvLmV4cGFuZGVyKSB7XG4gICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgcm93W3Bpdm90VmFsS2V5XVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGlmIChwaXZvdEJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLmdyb3VwZWRCeVBpdm90KSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghY2VsbEluZm8uc3ViUm93cyAmJiAhU3ViQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgY2VsbFxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAga2V5PXtpMiArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgICAgICAgIXNob3cgJiYgJy1oaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSAmJiAncnQtZXhwYW5kYWJsZScsXG4gICAgICAgICAgICAgICAgICAoaXNCcmFuY2ggfHwgaXNQcmV2aWV3KSAmJiAncnQtcGl2b3QnLFxuICAgICAgICAgICAgICAgICAgaXNGaXhlZCAmJiAnLWZpeGVkJyxcbiAgICAgICAgICAgICAgICAgIChpc0ZpeGVkICYmICFyZXNvbHZlZENlbGwpICYmICctZW1wdHknXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgICAgICAgIHsuLi5pbnRlcmFjdGlvblByb3BzfVxuICAgICAgICAgICAgICAgIHsuLi50ZFByb3BzLnJlc3R9XG4gICAgICAgICAgICAgICAgey4uLmNvbHVtblByb3BzLnJlc3R9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cmVzb2x2ZWRDZWxsfVxuICAgICAgICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RyQ29tcG9uZW50PixcbiAgICAgICAgcm93SW5mby5zdWJSb3dzICYmXG4gICAgICAgICAgaXNFeHBhbmRlZCAmJlxuICAgICAgICAgIHJvd0luZm8uc3ViUm93cy5tYXAoKGQsIGkpID0+XG4gICAgICAgICAgICBtYWtlUGFnZVJvdyhkLCBpLCByb3dJbmZvLm5lc3RpbmdQYXRoKVxuICAgICAgICAgICksXG4gICAgICAgIFN1YkNvbXBvbmVudCAmJlxuICAgICAgICAgICFyb3dJbmZvLnN1YlJvd3MgJiZcbiAgICAgICAgICBpc0V4cGFuZGVkICYmXG4gICAgICAgICAgU3ViQ29tcG9uZW50KHJvd0luZm8pLFxuICAgICAgXVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWRSb3cgPSAocm93LCBpKSA9PiB7XG4gICAgICBjb25zdCB0clByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgJy1wYWRSb3cnLFxuICAgICAgICAgICAgKHBhZ2VSb3dzLmxlbmd0aCArIGkpICUgMiA/ICctZXZlbicgOiAnLW9kZCcsXG4gICAgICAgICAgICB0clByb3BzLmNsYXNzTmFtZVxuICAgICAgICAgICl9XG4gICAgICAgICAgc3R5bGU9e3RyUHJvcHMuc3R5bGUgfHwge319XG4gICAgICAgID5cbiAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VQYWRDb2x1bW4pfVxuICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWRDb2x1bW4gPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgdGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi50ZFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA8IGZpeGVkQ29sdW1uc0NvdW50ICYmIHRhYmxlVG90YWxXaWR0aFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbnNQcm9wc1tpXS53aWR0aFxuICAgICAgICBzdHlsZXMubGVmdCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLmxlZnRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCAhc2hvdyAmJiAnLWhpZGRlbicsIHsgJy1maXhlZCc6IGlzRml4ZWQgfSl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4udGRQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KFBhZFJvd0NvbXBvbmVudCl9XG4gICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbHVtbkZvb3RlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0Rm9vdFByb3BzID0gZ2V0VGZvb3RQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIGNvbnN0IHRGb290VHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGZvb3RUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRmb290Q29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXt0Rm9vdFByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICBzdHlsZT17dEZvb3RQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udEZvb3RQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModEZvb3RUclByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICBzdHlsZT17dEZvb3RUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRGb290VHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUNvbHVtbkZvb3Rlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UZm9vdENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sdW1uRm9vdGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgY29uc3QgdEZvb3RUZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZm9vdFRkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uRm9vdGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRGb290ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgdEZvb3RUZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Gb290ZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4udEZvb3RUZFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Gb290ZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudCAmJiB0YWJsZVRvdGFsV2lkdGhcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ud2lkdGhcbiAgICAgICAgc3R5bGVzLmxlZnQgPSBmaXhlZENvbHVtbnNQcm9wc1tpXS5sZWZ0XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgIXNob3cgJiYgJy1oaWRkZW4nLCB7ICctZml4ZWQnOiBpc0ZpeGVkIH0pfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgey4uLmNvbHVtblByb3BzLnJlc3R9XG4gICAgICAgICAgey4uLnRGb290VGRQcm9wcy5yZXN0fVxuICAgICAgICAgIHsuLi5jb2x1bW5Gb290ZXJQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5Gb290ZXIsIHtcbiAgICAgICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb25Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0UGFnaW5hdGlvblByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBhZ2luYXRpb25Db21wb25lbnRcbiAgICAgICAgICB7Li4ucmVzb2x2ZWRTdGF0ZX1cbiAgICAgICAgICBwYWdlcz17cGFnZXN9XG4gICAgICAgICAgY2FuUHJldmlvdXM9e2NhblByZXZpb3VzfVxuICAgICAgICAgIGNhbk5leHQ9e2Nhbk5leHR9XG4gICAgICAgICAgb25QYWdlQ2hhbmdlPXt0aGlzLm9uUGFnZUNoYW5nZX1cbiAgICAgICAgICBvblBhZ2VTaXplQ2hhbmdlPXt0aGlzLm9uUGFnZVNpemVDaGFuZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPXtwYWdpbmF0aW9uUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgIHN0eWxlPXtwYWdpbmF0aW9uUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnBhZ2luYXRpb25Qcm9wcy5yZXN0fVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHJvb3RQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIClcbiAgICBjb25zdCB0YWJsZVByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0VGFibGVQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICApXG4gICAgY29uc3QgdEJvZHlQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFRib2R5UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgKVxuICAgIGNvbnN0IGxvYWRpbmdQcm9wcyA9IGdldExvYWRpbmdQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICBjb25zdCBub0RhdGFQcm9wcyA9IGdldE5vRGF0YVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIGNvbnN0IHJlc2l6ZXJQcm9wcyA9IGdldFJlc2l6ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcblxuICAgIGNvbnN0IGRpc3BsYXlGb290ZXJUb3AgPSBmb290ZXJQbGFjZW1lbnQgPT09ICd0b3AnIHx8IGZvb3RlclBsYWNlbWVudCA9PT0gJ2JvdGgnXG4gICAgY29uc3QgZGlzcGxheUZvb3RlckJvdHRvbSA9IGZvb3RlclBsYWNlbWVudCA9PT0gJ2JvdHRvbScgfHwgZm9vdGVyUGxhY2VtZW50ID09PSAnYm90aCdcblxuICAgIGNvbnN0IG1ha2VUYWJsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbEdyb3VwID0gbWFrZUNvbEdyb3VwKCk7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uID0gbWFrZVBhZ2luYXRpb24oKVxuICAgICAgY29uc3QgZm9vdGVyID0gaGFzQ29sdW1uRm9vdGVyID8gbWFrZUNvbHVtbkZvb3RlcnMoKSA6IG51bGxcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ1JlYWN0VGFibGUnLCBjbGFzc05hbWUsIHJvb3RQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgIC4uLnJvb3RQcm9wcy5zdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93UGFnaW5hdGlvbiAmJiBzaG93UGFnaW5hdGlvblRvcFxuICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT0ncGFnaW5hdGlvbi10b3AnPlxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIDxUYWJsZVdyYXBwZXIgd3JhcHBlclJlZj17KGMpID0+IHRoaXMudGFibGVXcmFwcGVyID0gY30+XG4gICAgICAgICAgICA8VGFibGVDb21wb25lbnRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAgIHRhYmxlUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJlc2l6aW5nID8gJ3J0LXJlc2l6aW5nJyA6ICcnXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHN0eWxlPXt0YWJsZVByb3BzLnN0eWxlfVxuICAgICAgICAgICAgICB7Li4udGFibGVQcm9wcy5yZXN0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y29sR3JvdXB9XG4gICAgICAgICAgICAgIHtoYXNIZWFkZXJHcm91cHMgPyBtYWtlSGVhZGVyR3JvdXBzKCkgOiBudWxsfVxuICAgICAgICAgICAgICB7bWFrZUhlYWRlcnMoKX1cbiAgICAgICAgICAgICAge2hhc0ZpbHRlcnMgPyBtYWtlRmlsdGVycygpIDogbnVsbH1cbiAgICAgICAgICAgICAge2Rpc3BsYXlGb290ZXJUb3AgJiYgZm9vdGVyfVxuICAgICAgICAgICAgICA8VGJvZHlDb21wb25lbnRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModEJvZHlQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt0Qm9keVByb3BzLnN0eWxlfVxuICAgICAgICAgICAgICAgIHsuLi50Qm9keVByb3BzLnJlc3R9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cGFnZVJvd3MubWFwKChkLCBpKSA9PiBtYWtlUGFnZVJvdyhkLCBpKSl9XG4gICAgICAgICAgICAgICAge3BhZFJvd3MubWFwKG1ha2VQYWRSb3cpfVxuICAgICAgICAgICAgICA8L1Rib2R5Q29tcG9uZW50PlxuICAgICAgICAgICAgICB7ZGlzcGxheUZvb3RlckJvdHRvbSAmJiBmb290ZXJ9XG4gICAgICAgICAgICA8L1RhYmxlQ29tcG9uZW50PlxuICAgICAgICAgIDwvVGFibGVXcmFwcGVyPlxuICAgICAgICAgIHtzaG93UGFnaW5hdGlvbiAmJiBzaG93UGFnaW5hdGlvbkJvdHRvbVxuICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT0ncGFnaW5hdGlvbi1ib3R0b20nPlxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIHshcGFnZVJvd3MubGVuZ3RoICYmXG4gICAgICAgICAgICA8Tm9EYXRhQ29tcG9uZW50IHsuLi5ub0RhdGFQcm9wc30+XG4gICAgICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChub0RhdGFUZXh0KX1cbiAgICAgICAgICAgIDwvTm9EYXRhQ29tcG9uZW50Pn1cbiAgICAgICAgICA8TG9hZGluZ0NvbXBvbmVudFxuICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgIGxvYWRpbmdUZXh0PXtsb2FkaW5nVGV4dH1cbiAgICAgICAgICAgIHsuLi5sb2FkaW5nUHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gY2hpbGRQcm9wcyBhcmUgb3B0aW9uYWxseSBwYXNzZWQgdG8gYSBmdW5jdGlvbi1hcy1hLWNoaWxkXG4gICAgcmV0dXJuIGNoaWxkcmVuID8gY2hpbGRyZW4oZmluYWxTdGF0ZSwgbWFrZVRhYmxlLCB0aGlzKSA6IG1ha2VUYWJsZSgpXG4gIH1cbn1cbiJdfQ==