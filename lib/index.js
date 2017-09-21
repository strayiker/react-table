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
          SortOrderComponent = resolvedState.SortOrderComponent,
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

        var sortOrder = sort && showSortOrder ? _react2.default.createElement(SortOrderComponent, { desc: sort.desc }) : null;

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
            'span',
            { className: 'rt-resizable-header-content' },
            _utils2.default.normalizeComponent(column.Header, {
              data: sortedData,
              column: column
            })
          ),
          sortOrder,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0Iiwic2V0U3RhdGUiLCJ0YWJsZVRvdGFsV2lkdGgiLCJ0YWJsZVdyYXBwZXIiLCJvZmZzZXRXaWR0aCIsInJlc29sdmVkU3RhdGUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZ2V0UHJvcHMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0Q29sR3JvdXBDb2xQcm9wcyIsImdldFRoZWFkR3JvdXBQcm9wcyIsImdldFRoZWFkR3JvdXBUclByb3BzIiwiZ2V0VGhlYWRHcm91cFRoUHJvcHMiLCJnZXRUaGVhZFByb3BzIiwiZ2V0VGhlYWRUclByb3BzIiwiZ2V0VGhlYWRUaFByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJQcm9wcyIsImdldFRoZWFkRmlsdGVyVHJQcm9wcyIsImdldFRoZWFkRmlsdGVyVGhQcm9wcyIsImdldFRib2R5UHJvcHMiLCJnZXRUclByb3BzIiwiZ2V0VGRQcm9wcyIsImdldFRmb290UHJvcHMiLCJnZXRUZm9vdFRyUHJvcHMiLCJnZXRUZm9vdFRkUHJvcHMiLCJnZXRQYWdpbmF0aW9uUHJvcHMiLCJnZXRMb2FkaW5nUHJvcHMiLCJnZXROb0RhdGFQcm9wcyIsImdldFJlc2l6ZXJQcm9wcyIsInNob3dQYWdpbmF0aW9uIiwic2hvd1BhZ2luYXRpb25Ub3AiLCJzaG93UGFnaW5hdGlvbkJvdHRvbSIsInNob3dTb3J0T3JkZXIiLCJtYW51YWwiLCJsb2FkaW5nVGV4dCIsIm5vRGF0YVRleHQiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJmb290ZXJQbGFjZW1lbnQiLCJwaXZvdElES2V5IiwicGl2b3RWYWxLZXkiLCJwaXZvdEJ5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJmaXhlZENvbHVtbnNDb3VudCIsImxvYWRpbmciLCJwYWdlcyIsIm9uRXhwYW5kZWRDaGFuZ2UiLCJUYWJsZVdyYXBwZXIiLCJUYWJsZUNvbXBvbmVudCIsIlRoZWFkQ29tcG9uZW50IiwiVGJvZHlDb21wb25lbnQiLCJUckNvbXBvbmVudCIsIlRoQ29tcG9uZW50IiwiVGRDb21wb25lbnQiLCJUZm9vdENvbXBvbmVudCIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJMb2FkaW5nQ29tcG9uZW50IiwiU3ViQ29tcG9uZW50IiwiTm9EYXRhQ29tcG9uZW50IiwiUmVzaXplckNvbXBvbmVudCIsIlNvcnRPcmRlckNvbXBvbmVudCIsIkV4cGFuZGVyQ29tcG9uZW50IiwiUGl2b3RWYWx1ZUNvbXBvbmVudCIsIlBpdm90Q29tcG9uZW50IiwiQWdncmVnYXRlZENvbXBvbmVudCIsIkZpbHRlckNvbXBvbmVudCIsIlBhZFJvd0NvbXBvbmVudCIsInJlc29sdmVkRGF0YSIsImFsbFZpc2libGVDb2x1bW5zIiwiaGVhZGVyR3JvdXBzIiwiaGFzSGVhZGVyR3JvdXBzIiwic29ydGVkRGF0YSIsInN0YXJ0Um93IiwiZW5kUm93IiwicGFnZVJvd3MiLCJzbGljZSIsIm1pblJvd3MiLCJwYWRSb3dzIiwicmFuZ2UiLCJNYXRoIiwibWF4IiwibGVuZ3RoIiwiaGFzQ29sdW1uRm9vdGVyIiwic29tZSIsImQiLCJGb290ZXIiLCJoYXNGaWx0ZXJzIiwicmVjdXJzZVJvd3NWaWV3SW5kZXgiLCJyb3dzIiwicGF0aCIsImluZGV4IiwibWFwIiwicm93IiwiaSIsInJvd1dpdGhWaWV3SW5kZXgiLCJfdmlld0luZGV4IiwibmV3UGF0aCIsImNvbmNhdCIsImdldCIsImNhblByZXZpb3VzIiwiY2FuTmV4dCIsInJvd0luZGV4IiwiZmluYWxTdGF0ZSIsImZpeGVkQ29sdW1uc1Byb3BzIiwicmF3Q29sdW1uc1dpZHRoIiwiZmxvb3JDb2x1bW5zV2lkdGgiLCJtYWtlQ29sR3JvdXAiLCJtYWtlQ29sIiwiY29sdW1uIiwiaXNEdW1teSIsImlzRml4ZWQiLCJpc0lubmVyRml4ZWQiLCJpc0xhc3RGaXhlZCIsInJlc2l6ZWRDb2wiLCJmaW5kIiwieCIsImlkIiwiY29sZ3JvdXBDb2xQcm9wcyIsInNwbGl0UHJvcHMiLCJ1bmRlZmluZWQiLCJjb2x1bW5Db2xncm91cENvbFByb3BzIiwiY2xhc3NlcyIsImNvbEdyb3VwQ29sQ2xhc3NOYW1lIiwic3R5bGVzIiwiY29sR3JvdXBDb2xTdHlsZSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJ3aWR0aCIsImdldEZpcnN0RGVmaW5lZCIsInZhbHVlIiwid2lkdGhJc1BlcmNlbnRzIiwiaXNQZXJjZW50cyIsIm1pbldpZHRoSXNQZXJjZW50cyIsIm1heFdpZHRoSXNQZXJjZW50cyIsIndpZHRoVmFsdWUiLCJwYXJzZUludCIsIm1pbldpZHRoVmFsdWUiLCJtYXhXaWR0aFZhbHVlIiwicGVyY2VudHNUb1B4IiwiY2xhbXAiLCJmbG9vciIsImRpZmYiLCJsZWZ0IiwicmVkdWNlIiwiaXRlbSIsInB1c2giLCJtYWtlSGVhZGVyR3JvdXBzIiwidGhlYWRHcm91cFByb3BzIiwidGhlYWRHcm91cFRyUHJvcHMiLCJyZXN0IiwibWFrZUhlYWRlckdyb3VwIiwidGhlYWRHcm91cFRoUHJvcHMiLCJjb2x1bW5IZWFkZXJQcm9wcyIsImdldEhlYWRlclByb3BzIiwiaGVhZGVyQ2xhc3NOYW1lIiwiaGVhZGVyU3R5bGUiLCJjb2xTcGFuIiwiY29sdW1ucyIsImNvbnRlbnQiLCJub3JtYWxpemVDb21wb25lbnQiLCJIZWFkZXIiLCJkYXRhIiwibWFrZUhlYWRlcnMiLCJ0aGVhZFByb3BzIiwidGhlYWRUclByb3BzIiwibWFrZUhlYWRlciIsInNvcnQiLCJzaG93IiwidGhlYWRUaFByb3BzIiwiaXNSZXNpemFibGUiLCJyZXNpemVyIiwiZSIsInJlc2l6ZXJQcm9wcyIsInNvcnRPcmRlciIsImRlc2MiLCJpc1NvcnRhYmxlIiwiaW5jbHVkZXMiLCJzaGlmdEtleSIsIm1ha2VGaWx0ZXJzIiwidGhlYWRGaWx0ZXJQcm9wcyIsInRoZWFkRmlsdGVyVHJQcm9wcyIsIm1ha2VGaWx0ZXIiLCJ0aGVhZEZpbHRlclRoUHJvcHMiLCJmaWx0ZXIiLCJSZXNvbHZlZEZpbHRlckNvbXBvbmVudCIsIkZpbHRlciIsImlzRmlsdGVyYWJsZSIsIm9uQ2hhbmdlIiwibWFrZVBhZ2VSb3ciLCJyb3dJbmZvIiwib3JpZ2luYWwiLCJ2aWV3SW5kZXgiLCJsZXZlbCIsIm5lc3RpbmdQYXRoIiwiYWdncmVnYXRlZCIsImdyb3VwZWRCeVBpdm90Iiwic3ViUm93cyIsImlzRXhwYW5kZWQiLCJ0clByb3BzIiwiam9pbiIsImkyIiwidGRQcm9wcyIsImNvbHVtblByb3BzIiwiY2VsbEluZm8iLCJwaXZvdGVkIiwiZXhwYW5kZXIiLCJpbnRlcmFjdGlvblByb3BzIiwiaXNCcmFuY2giLCJpc1ByZXZpZXciLCJvbkV4cGFuZGVyQ2xpY2siLCJuZXdFeHBhbmRlZCIsImNsb25lIiwic2V0Iiwic2V0U3RhdGVXaXRoRGF0YSIsInJlc29sdmVkQ2VsbCIsIkNlbGwiLCJSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJBZ2dyZWdhdGVkIiwiYWdncmVnYXRlIiwiUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCIsIkV4cGFuZGVyIiwiUmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RWYWx1ZSIsIkRlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50IiwiUmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlBpdm90IiwiZXhwYW5kYWJsZSIsIm9uQ2xpY2siLCJpbmRleE9mIiwibWFrZVBhZFJvdyIsIm1ha2VQYWRDb2x1bW4iLCJtYWtlQ29sdW1uRm9vdGVycyIsInRGb290UHJvcHMiLCJ0Rm9vdFRyUHJvcHMiLCJtYWtlQ29sdW1uRm9vdGVyIiwidEZvb3RUZFByb3BzIiwiY29sdW1uRm9vdGVyUHJvcHMiLCJnZXRGb290ZXJQcm9wcyIsIm1ha2VQYWdpbmF0aW9uIiwicGFnaW5hdGlvblByb3BzIiwicm9vdFByb3BzIiwidGFibGVQcm9wcyIsInRCb2R5UHJvcHMiLCJsb2FkaW5nUHJvcHMiLCJub0RhdGFQcm9wcyIsImRpc3BsYXlGb290ZXJUb3AiLCJkaXNwbGF5Rm9vdGVyQm90dG9tIiwibWFrZVRhYmxlIiwiY29sR3JvdXAiLCJwYWdpbmF0aW9uIiwiZm9vdGVyIiwiYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OztBQUpBOzs7QUFNTyxJQUFNQSx3RUFBTjs7SUFFY0MsVTs7O0FBR25CLHNCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBR2xCLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLE9B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QTZCLElBWGhDO0FBWUdtRSxrQ0FBb0JLLE1BWnZCO0FBYUU7QUFBQyw4QkFBRDtBQUFBO0FBQ0UsNkJBQVcsMEJBQVdSLFdBQVdsUCxTQUF0QixDQURiO0FBRUUseUJBQU9rUCxXQUFXalA7QUFGcEIsbUJBR01pUCxXQUFXN0YsSUFIakI7QUFLRzNFLHlCQUFTaUIsR0FBVCxDQUFhLFVBQUNQLENBQUQsRUFBSVMsQ0FBSjtBQUFBLHlCQUFVK0YsWUFBWXhHLENBQVosRUFBZVMsQ0FBZixDQUFWO0FBQUEsaUJBQWIsQ0FMSDtBQU1HaEIsd0JBQVFjLEdBQVIsQ0FBWTBJLFVBQVo7QUFOSCxlQWJGO0FBcUJHaUIscUNBQXVCSTtBQXJCMUI7QUFERixXQWJGO0FBc0NHbE8sNEJBQWtCRSxvQkFBbEIsR0FDRztBQUFBO0FBQUEsY0FBSyxXQUFVLG1CQUFmO0FBQ0MrTjtBQURELFdBREgsR0FJRyxJQTFDTjtBQTJDRyxXQUFDL0ssU0FBU08sTUFBVixJQUNDO0FBQUMsMkJBQUQ7QUFBcUJtSyx1QkFBckI7QUFDRyw0QkFBRXJGLGtCQUFGLENBQXFCakksVUFBckI7QUFESCxXQTVDSjtBQStDRSx3Q0FBQyxnQkFBRDtBQUNFLHFCQUFTYyxPQURYO0FBRUUseUJBQWFmO0FBRmYsYUFHTXNOLFlBSE47QUEvQ0YsU0FERjtBQXVERCxPQTNERDs7QUE2REE7QUFDQSxhQUFPcFAsV0FBV0EsU0FBU3VHLFVBQVQsRUFBcUJpSixTQUFyQixFQUFnQyxJQUFoQyxDQUFYLEdBQW1EQSxXQUExRDtBQUNEOzs7O0VBNS9CcUMsdUJBQVEsMENBQVIsQzs7QUFBbkI5UixVLENBQ1ptUyxZO2tCQURZblMsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuLy9cbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgTGlmZWN5Y2xlIGZyb20gJy4vbGlmZWN5Y2xlJ1xuaW1wb3J0IE1ldGhvZHMgZnJvbSAnLi9tZXRob2RzJ1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHRQcm9wcydcblxuZXhwb3J0IGNvbnN0IFJlYWN0VGFibGVEZWZhdWx0cyA9IGRlZmF1bHRQcm9wc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFRhYmxlIGV4dGVuZHMgTWV0aG9kcyhMaWZlY3ljbGUoQ29tcG9uZW50KSkge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzXG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5nZXRSZXNvbHZlZFN0YXRlID0gdGhpcy5nZXRSZXNvbHZlZFN0YXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmdldERhdGFNb2RlbCA9IHRoaXMuZ2V0RGF0YU1vZGVsLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFNvcnRlZERhdGEgPSB0aGlzLmdldFNvcnRlZERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZmlyZUZldGNoRGF0YSA9IHRoaXMuZmlyZUZldGNoRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRQcm9wT3JTdGF0ZSA9IHRoaXMuZ2V0UHJvcE9yU3RhdGUuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0U3RhdGVPclByb3AgPSB0aGlzLmdldFN0YXRlT3JQcm9wLmJpbmQodGhpcylcbiAgICB0aGlzLmZpbHRlckRhdGEgPSB0aGlzLmZpbHRlckRhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuc29ydERhdGEgPSB0aGlzLnNvcnREYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmdldE1pblJvd3MgPSB0aGlzLmdldE1pblJvd3MuYmluZCh0aGlzKVxuICAgIHRoaXMub25QYWdlQ2hhbmdlID0gdGhpcy5vblBhZ2VDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25QYWdlU2l6ZUNoYW5nZSA9IHRoaXMub25QYWdlU2l6ZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zb3J0Q29sdW1uID0gdGhpcy5zb3J0Q29sdW1uLmJpbmQodGhpcylcbiAgICB0aGlzLmZpbHRlckNvbHVtbiA9IHRoaXMuZmlsdGVyQ29sdW1uLmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0ID0gdGhpcy5yZXNpemVDb2x1bW5TdGFydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5FbmQgPSB0aGlzLnJlc2l6ZUNvbHVtbkVuZC5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcgPSB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZy5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGFnZTogMCxcbiAgICAgIHBhZ2VTaXplOiBwcm9wcy5kZWZhdWx0UGFnZVNpemUsXG4gICAgICBzb3J0ZWQ6IHByb3BzLmRlZmF1bHRTb3J0ZWQsXG4gICAgICBleHBhbmRlZDogcHJvcHMuZGVmYXVsdEV4cGFuZGVkLFxuICAgICAgZmlsdGVyZWQ6IHByb3BzLmRlZmF1bHRGaWx0ZXJlZCxcbiAgICAgIHJlc2l6ZWQ6IHByb3BzLmRlZmF1bHRSZXNpemVkLFxuICAgICAgY3VycmVudGx5UmVzaXppbmc6IGZhbHNlLFxuICAgICAgc2tpcE5leHRTb3J0OiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhYmxlVG90YWxXaWR0aDogdGhpcy50YWJsZVdyYXBwZXIub2Zmc2V0V2lkdGggfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpXG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIGdldFByb3BzLFxuICAgICAgZ2V0VGFibGVQcm9wcyxcbiAgICAgIGdldENvbEdyb3VwQ29sUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkR3JvdXBUaFByb3BzLFxuICAgICAgZ2V0VGhlYWRQcm9wcyxcbiAgICAgIGdldFRoZWFkVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkRmlsdGVyUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclRoUHJvcHMsXG4gICAgICBnZXRUYm9keVByb3BzLFxuICAgICAgZ2V0VHJQcm9wcyxcbiAgICAgIGdldFRkUHJvcHMsXG4gICAgICBnZXRUZm9vdFByb3BzLFxuICAgICAgZ2V0VGZvb3RUclByb3BzLFxuICAgICAgZ2V0VGZvb3RUZFByb3BzLFxuICAgICAgZ2V0UGFnaW5hdGlvblByb3BzLFxuICAgICAgZ2V0TG9hZGluZ1Byb3BzLFxuICAgICAgZ2V0Tm9EYXRhUHJvcHMsXG4gICAgICBnZXRSZXNpemVyUHJvcHMsXG4gICAgICBzaG93UGFnaW5hdGlvbixcbiAgICAgIHNob3dQYWdpbmF0aW9uVG9wLFxuICAgICAgc2hvd1BhZ2luYXRpb25Cb3R0b20sXG4gICAgICBzaG93U29ydE9yZGVyLFxuICAgICAgbWFudWFsLFxuICAgICAgbG9hZGluZ1RleHQsXG4gICAgICBub0RhdGFUZXh0LFxuICAgICAgc29ydGFibGUsXG4gICAgICByZXNpemFibGUsXG4gICAgICBmaWx0ZXJhYmxlLFxuICAgICAgZm9vdGVyUGxhY2VtZW50LFxuICAgICAgLy8gUGl2b3RpbmcgU3RhdGVcbiAgICAgIHBpdm90SURLZXksXG4gICAgICBwaXZvdFZhbEtleSxcbiAgICAgIHBpdm90QnksXG4gICAgICBzdWJSb3dzS2V5LFxuICAgICAgYWdncmVnYXRlZEtleSxcbiAgICAgIG9yaWdpbmFsS2V5LFxuICAgICAgaW5kZXhLZXksXG4gICAgICBncm91cGVkQnlQaXZvdEtleSxcbiAgICAgIC8vIEZpeGVkXG4gICAgICBmaXhlZENvbHVtbnNDb3VudCxcbiAgICAgIC8vIFN0YXRlXG4gICAgICBsb2FkaW5nLFxuICAgICAgcGFnZVNpemUsXG4gICAgICBwYWdlLFxuICAgICAgc29ydGVkLFxuICAgICAgZmlsdGVyZWQsXG4gICAgICByZXNpemVkLFxuICAgICAgZXhwYW5kZWQsXG4gICAgICBwYWdlcyxcbiAgICAgIG9uRXhwYW5kZWRDaGFuZ2UsXG4gICAgICAvLyBDb21wb25lbnRzXG4gICAgICBUYWJsZVdyYXBwZXIsXG4gICAgICBUYWJsZUNvbXBvbmVudCxcbiAgICAgIFRoZWFkQ29tcG9uZW50LFxuICAgICAgVGJvZHlDb21wb25lbnQsXG4gICAgICBUckNvbXBvbmVudCxcbiAgICAgIFRoQ29tcG9uZW50LFxuICAgICAgVGRDb21wb25lbnQsXG4gICAgICBUZm9vdENvbXBvbmVudCxcbiAgICAgIFBhZ2luYXRpb25Db21wb25lbnQsXG4gICAgICBMb2FkaW5nQ29tcG9uZW50LFxuICAgICAgU3ViQ29tcG9uZW50LFxuICAgICAgTm9EYXRhQ29tcG9uZW50LFxuICAgICAgUmVzaXplckNvbXBvbmVudCxcbiAgICAgIFNvcnRPcmRlckNvbXBvbmVudCxcbiAgICAgIEV4cGFuZGVyQ29tcG9uZW50LFxuICAgICAgUGl2b3RWYWx1ZUNvbXBvbmVudCxcbiAgICAgIFBpdm90Q29tcG9uZW50LFxuICAgICAgQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgIEZpbHRlckNvbXBvbmVudCxcbiAgICAgIFBhZFJvd0NvbXBvbmVudCxcbiAgICAgIC8vIERhdGEgbW9kZWxcbiAgICAgIHJlc29sdmVkRGF0YSxcbiAgICAgIGFsbFZpc2libGVDb2x1bW5zLFxuICAgICAgaGVhZGVyR3JvdXBzLFxuICAgICAgaGFzSGVhZGVyR3JvdXBzLFxuICAgICAgLy8gU29ydGVkIERhdGFcbiAgICAgIHNvcnRlZERhdGEsXG4gICAgICBjdXJyZW50bHlSZXNpemluZyxcbiAgICAgIHRhYmxlVG90YWxXaWR0aCxcbiAgICB9ID0gcmVzb2x2ZWRTdGF0ZVxuXG4gICAgLy8gUGFnaW5hdGlvblxuICAgIGNvbnN0IHN0YXJ0Um93ID0gcGFnZVNpemUgKiBwYWdlXG4gICAgY29uc3QgZW5kUm93ID0gc3RhcnRSb3cgKyBwYWdlU2l6ZVxuICAgIGxldCBwYWdlUm93cyA9IG1hbnVhbCA/IHJlc29sdmVkRGF0YSA6IHNvcnRlZERhdGEuc2xpY2Uoc3RhcnRSb3csIGVuZFJvdylcbiAgICBjb25zdCBtaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzKClcbiAgICBjb25zdCBwYWRSb3dzID0gXy5yYW5nZShNYXRoLm1heChtaW5Sb3dzIC0gcGFnZVJvd3MubGVuZ3RoLCAwKSlcblxuICAgIGNvbnN0IGhhc0NvbHVtbkZvb3RlciA9IGFsbFZpc2libGVDb2x1bW5zLnNvbWUoZCA9PiBkLkZvb3RlcilcbiAgICBjb25zdCBoYXNGaWx0ZXJzID0gZmlsdGVyYWJsZSB8fCBhbGxWaXNpYmxlQ29sdW1ucy5zb21lKGQgPT4gZC5maWx0ZXJhYmxlKVxuXG4gICAgY29uc3QgcmVjdXJzZVJvd3NWaWV3SW5kZXggPSAocm93cywgcGF0aCA9IFtdLCBpbmRleCA9IC0xKSA9PiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICByb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgaW5kZXgrK1xuICAgICAgICAgIGNvbnN0IHJvd1dpdGhWaWV3SW5kZXggPSB7XG4gICAgICAgICAgICAuLi5yb3csXG4gICAgICAgICAgICBfdmlld0luZGV4OiBpbmRleCxcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmV3UGF0aCA9IHBhdGguY29uY2F0KFtpXSlcbiAgICAgICAgICBpZiAocm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSAmJiBfLmdldChleHBhbmRlZCwgbmV3UGF0aCkpIHtcbiAgICAgICAgICAgIDtbcm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSwgaW5kZXhdID0gcmVjdXJzZVJvd3NWaWV3SW5kZXgoXG4gICAgICAgICAgICAgIHJvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0sXG4gICAgICAgICAgICAgIG5ld1BhdGgsXG4gICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByb3dXaXRoVmlld0luZGV4XG4gICAgICAgIH0pLFxuICAgICAgICBpbmRleCxcbiAgICAgIF1cbiAgICB9XG4gICAgO1twYWdlUm93c10gPSByZWN1cnNlUm93c1ZpZXdJbmRleChwYWdlUm93cylcblxuICAgIGNvbnN0IGNhblByZXZpb3VzID0gcGFnZSA+IDBcbiAgICBjb25zdCBjYW5OZXh0ID0gcGFnZSArIDEgPCBwYWdlc1xuXG4gICAgbGV0IHJvd0luZGV4ID0gLTFcblxuICAgIGNvbnN0IGZpbmFsU3RhdGUgPSB7XG4gICAgICAuLi5yZXNvbHZlZFN0YXRlLFxuICAgICAgc3RhcnRSb3csXG4gICAgICBlbmRSb3csXG4gICAgICBwYWdlUm93cyxcbiAgICAgIG1pblJvd3MsXG4gICAgICBwYWRSb3dzLFxuICAgICAgaGFzQ29sdW1uRm9vdGVyLFxuICAgICAgY2FuUHJldmlvdXMsXG4gICAgICBjYW5OZXh0LFxuICAgIH1cblxuICAgIGNvbnN0IGZpeGVkQ29sdW1uc1Byb3BzID0gW107XG4gICAgbGV0IHJhd0NvbHVtbnNXaWR0aCA9IDBcbiAgICBsZXQgZmxvb3JDb2x1bW5zV2lkdGggPSAwXG5cbiAgICAvLyBWaXN1YWwgQ29tcG9uZW50c1xuXG4gICAgY29uc3QgbWFrZUNvbEdyb3VwID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGNvbGdyb3VwPlxuICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUNvbCl9XG4gICAgICAgIDwvY29sZ3JvdXA+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbCA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IGlzRHVtbXkgPSBpID09PSBhbGxWaXNpYmxlQ29sdW1ucy5sZW5ndGggLSAxXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA8IGZpeGVkQ29sdW1uc0NvdW50XG4gICAgICBjb25zdCBpc0lubmVyRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgLSAxXG4gICAgICBjb25zdCBpc0xhc3RGaXhlZCA9IGkgPT09IGZpeGVkQ29sdW1uc0NvdW50IC0gMVxuXG4gICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sdW1uLmlkKSB8fCB7fVxuXG4gICAgICBjb25zdCBjb2xncm91cENvbFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRDb2xHcm91cENvbFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uQ29sZ3JvdXBDb2xQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldENvbEdyb3VwQ29sUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5jb2xHcm91cENvbENsYXNzTmFtZSxcbiAgICAgICAgY29sZ3JvdXBDb2xQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkNvbGdyb3VwQ29sUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5jb2xHcm91cENvbFN0eWxlLFxuICAgICAgICAuLi5jb2xncm91cENvbFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Db2xncm91cENvbFByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBsZXQgbWluV2lkdGggPSBjb2x1bW4ubWluV2lkdGhcbiAgICAgIGxldCBtYXhXaWR0aCA9IGNvbHVtbi5tYXhXaWR0aFxuICAgICAgbGV0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgbWluV2lkdGgsXG4gICAgICAgIDBcbiAgICAgIClcblxuICAgICAgLy8gY2FsY3VsYXRlIHB4XG4gICAgICBpZiAodGFibGVUb3RhbFdpZHRoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoSXNQZXJjZW50cyA9IF8uaXNQZXJjZW50cyh3aWR0aClcbiAgICAgICAgY29uc3QgbWluV2lkdGhJc1BlcmNlbnRzID0gXy5pc1BlcmNlbnRzKG1pbldpZHRoKVxuICAgICAgICBjb25zdCBtYXhXaWR0aElzUGVyY2VudHMgPSBfLmlzUGVyY2VudHMobWF4V2lkdGgpXG5cbiAgICAgICAgY29uc3Qgd2lkdGhWYWx1ZSA9IHBhcnNlSW50KHdpZHRoLCAxMClcbiAgICAgICAgY29uc3QgbWluV2lkdGhWYWx1ZSA9IG1pbldpZHRoICYmIHBhcnNlSW50KG1pbldpZHRoLCAxMClcbiAgICAgICAgY29uc3QgbWF4V2lkdGhWYWx1ZSA9IG1heFdpZHRoICYmIHBhcnNlSW50KG1heFdpZHRoLCAxMClcblxuICAgICAgICB3aWR0aCA9IHdpZHRoSXNQZXJjZW50c1xuICAgICAgICAgID8gXy5wZXJjZW50c1RvUHgod2lkdGhWYWx1ZSwgdGFibGVUb3RhbFdpZHRoKVxuICAgICAgICAgIDogd2lkdGhWYWx1ZVxuXG4gICAgICAgIG1pbldpZHRoID0gbWluV2lkdGhJc1BlcmNlbnRzXG4gICAgICAgICAgPyBfLnBlcmNlbnRzVG9QeChtaW5XaWR0aFZhbHVlLCB0YWJsZVRvdGFsV2lkdGgpXG4gICAgICAgICAgOiBtaW5XaWR0aFZhbHVlXG5cbiAgICAgICAgbWF4V2lkdGggPSBtYXhXaWR0aElzUGVyY2VudHNcbiAgICAgICAgICA/IF8ucGVyY2VudHNUb1B4KG1heFdpZHRoVmFsdWUsIHRhYmxlVG90YWxXaWR0aClcbiAgICAgICAgICA6IG1heFdpZHRoVmFsdWVcblxuICAgICAgICB3aWR0aCA9IF8uY2xhbXAod2lkdGgsIG1pbldpZHRoLCBtYXhXaWR0aClcblxuICAgICAgICByYXdDb2x1bW5zV2lkdGggKz0gd2lkdGhcbiAgICAgICAgd2lkdGggPSBNYXRoLmZsb29yKHdpZHRoKVxuICAgICAgICBmbG9vckNvbHVtbnNXaWR0aCArPSB3aWR0aFxuXG4gICAgICAgIGNvbnN0IGRpZmYgPSBNYXRoLmZsb29yKHJhd0NvbHVtbnNXaWR0aCAtIGZsb29yQ29sdW1uc1dpZHRoKVxuXG4gICAgICAgIGlmIChkaWZmID49IDEpIHtcbiAgICAgICAgICB3aWR0aCArPSBkaWZmXG4gICAgICAgICAgZmxvb3JDb2x1bW5zV2lkdGggKz0gZGlmZlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgICBjb25zdCBsZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHMucmVkdWNlKCh2YWx1ZSwgaXRlbSkgPT4gdmFsdWUgKyBpdGVtLndpZHRoLCAwKVxuICAgICAgICAgIGZpeGVkQ29sdW1uc1Byb3BzLnB1c2goeyB3aWR0aCwgbGVmdCB9KVxuXG4gICAgICAgICAgaWYgKGlzTGFzdEZpeGVkKSB7XG4gICAgICAgICAgICB3aWR0aCArPSBsZWZ0XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2lkdGggPSBgJHt3aWR0aH1weGBcbiAgICAgIH1cblxuICAgICAgaWYgKGlzSW5uZXJGaXhlZCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Y29sXG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncnQtY29sZ3JvdXAtY29sJywgY2xhc3NlcywgeyAnLWR1bW15JzogaXNEdW1teSB9KX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlckdyb3VwcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRHcm91cFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctaGVhZGVyR3JvdXBzJywgdGhlYWRHcm91cFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3RoZWFkR3JvdXBQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udGhlYWRHcm91cFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRHcm91cFRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkR3JvdXBUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkR3JvdXBUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAobWFrZUhlYWRlckdyb3VwKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXJHcm91cCA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkR3JvdXBUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRHcm91cFRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2xTcGFuID0gY29sdW1uLmNvbHVtbnMubGVuZ3RoXG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkR3JvdXBUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICAgIGNvbFNwYW4sXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRHVtbXkgPSBpID09PSBoZWFkZXJHcm91cHMubGVuZ3RoIC0gMVxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudCAmJiB0YWJsZVRvdGFsV2lkdGhcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ud2lkdGhcbiAgICAgICAgc3R5bGVzLmxlZnQgPSBmaXhlZENvbHVtbnNQcm9wc1tpXS5sZWZ0XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uSGVhZGVyLCB7XG4gICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCB7ICctZHVtbXknOiBpc0R1bW15LCAnLWVtcHR5JzogIWNvbnRlbnQsICctZml4ZWQnOiBpc0ZpeGVkIH0pfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWhlYWRlcicsIHRoZWFkUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17dGhlYWRQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udGhlYWRQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUhlYWRlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3Qgc29ydCA9IHNvcnRlZC5maW5kKGQgPT4gZC5pZCA9PT0gY29sdW1uLmlkKVxuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgY29uc3QgdGhlYWRUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZFRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZFRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZFRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNSZXNpemFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChjb2x1bW4ucmVzaXphYmxlLCByZXNpemFibGUsIGZhbHNlKVxuICAgICAgY29uc3QgcmVzaXplciA9IGlzUmVzaXphYmxlXG4gICAgICAgID8gKDxSZXNpemVyQ29tcG9uZW50XG4gICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChjb2x1bW4sIGUsIGZhbHNlKX1cbiAgICAgICAgICBvblRvdWNoU3RhcnQ9e2UgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChjb2x1bW4sIGUsIHRydWUpfVxuICAgICAgICAgIHsuLi5yZXNpemVyUHJvcHN9XG4gICAgICAgIC8+KVxuICAgICAgICA6IG51bGxcblxuICAgICAgY29uc3Qgc29ydE9yZGVyID0gc29ydCAmJiBzaG93U29ydE9yZGVyXG4gICAgICAgID8gPFNvcnRPcmRlckNvbXBvbmVudCBkZXNjPXtzb3J0LmRlc2N9IC8+XG4gICAgICAgIDogbnVsbDtcblxuICAgICAgY29uc3QgaXNTb3J0YWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5zb3J0YWJsZSwgc29ydGFibGUsIGZhbHNlKVxuICAgICAgY29uc3QgaXNEdW1teSA9IGkgPT09IGFsbFZpc2libGVDb2x1bW5zLmxlbmd0aCAtIDFcbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdGFibGVUb3RhbFdpZHRoXG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLndpZHRoXG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ubGVmdFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICdydC1yZXNpemFibGUtaGVhZGVyJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJy1jdXJzb3ItcG9pbnRlcic6IGlzU29ydGFibGUsXG4gICAgICAgICAgICAgICctaGlkZGVuJzogIXNob3csXG4gICAgICAgICAgICAgICctZHVtbXknOiBpc0R1bW15LFxuICAgICAgICAgICAgICAnLWZpeGVkJzogaXNGaXhlZCxcbiAgICAgICAgICAgICAgJ3J0LWhlYWRlci1waXZvdCc6IHBpdm90QnkgJiYgcGl2b3RCeS5zbGljZSgwLCAtMSkuaW5jbHVkZXMoY29sdW1uLmlkKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgdG9nZ2xlU29ydD17ZSA9PiB7XG4gICAgICAgICAgICBpc1NvcnRhYmxlICYmIHRoaXMuc29ydENvbHVtbihjb2x1bW4sIGUuc2hpZnRLZXkpXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncnQtcmVzaXphYmxlLWhlYWRlci1jb250ZW50Jz5cbiAgICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uSGVhZGVyLCB7XG4gICAgICAgICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHtzb3J0T3JkZXJ9XG4gICAgICAgICAge3Jlc2l6ZXJ9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUZpbHRlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEZpbHRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1maWx0ZXJzJywgdGhlYWRGaWx0ZXJQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt0aGVhZEZpbHRlclByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50aGVhZEZpbHRlclByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRGaWx0ZXJUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZEZpbHRlclRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRGaWx0ZXJUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlRmlsdGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VGaWx0ZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEZpbHRlclRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkRmlsdGVyVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkRmlsdGVyVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkRmlsdGVyVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWx0ZXIgPSBmaWx0ZXJlZC5maW5kKGZpbHRlciA9PiBmaWx0ZXIuaWQgPT09IGNvbHVtbi5pZClcblxuICAgICAgY29uc3QgUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQgPSBjb2x1bW4uRmlsdGVyIHx8IEZpbHRlckNvbXBvbmVudFxuXG4gICAgICBjb25zdCBpc0ZpbHRlcmFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgY29sdW1uLmZpbHRlcmFibGUsXG4gICAgICAgIGZpbHRlcmFibGUsXG4gICAgICAgIGZhbHNlXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdGFibGVUb3RhbFdpZHRoXG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLndpZHRoXG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ubGVmdFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsIHsgJy1maXhlZCc6IGlzRml4ZWQsICctZW1wdHknOiAhaXNGaWx0ZXJhYmxlIH0pfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7aXNGaWx0ZXJhYmxlXG4gICAgICAgICAgICA/IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICBSZXNvbHZlZEZpbHRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IHRoaXMuZmlsdGVyQ29sdW1uKGNvbHVtbiwgdmFsdWUpLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkZWZhdWx0UHJvcHMuY29sdW1uLkZpbHRlclxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWdlUm93ID0gKHJvdywgaSwgcGF0aCA9IFtdKSA9PiB7XG4gICAgICBjb25zdCByb3dJbmZvID0ge1xuICAgICAgICBvcmlnaW5hbDogcm93W29yaWdpbmFsS2V5XSxcbiAgICAgICAgcm93OiByb3csXG4gICAgICAgIGluZGV4OiByb3dbaW5kZXhLZXldLFxuICAgICAgICB2aWV3SW5kZXg6ICsrcm93SW5kZXgsXG4gICAgICAgIGxldmVsOiBwYXRoLmxlbmd0aCxcbiAgICAgICAgbmVzdGluZ1BhdGg6IHBhdGguY29uY2F0KFtpXSksXG4gICAgICAgIGFnZ3JlZ2F0ZWQ6IHJvd1thZ2dyZWdhdGVkS2V5XSxcbiAgICAgICAgZ3JvdXBlZEJ5UGl2b3Q6IHJvd1tncm91cGVkQnlQaXZvdEtleV0sXG4gICAgICAgIHN1YlJvd3M6IHJvd1tzdWJSb3dzS2V5XSxcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzRXhwYW5kZWQgPSBfLmdldChleHBhbmRlZCwgcm93SW5mby5uZXN0aW5nUGF0aClcbiAgICAgIGNvbnN0IHRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtyb3dJbmZvLm5lc3RpbmdQYXRoLmpvaW4oJ18nKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICB0clByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHJvdy5fdmlld0luZGV4ICUgMiA/ICctZXZlbicgOiAnLW9kZCdcbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50clByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4sIGkyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICAgICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICAgICAgICBnZXRUZFByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIGNvbHVtbiwgdGhpcylcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgY29sdW1uLCB0aGlzKVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICAgICAgICB0ZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgICAgICAgIC4uLnRkUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGlzRml4ZWQgPSBpMiA8IGZpeGVkQ29sdW1uc0NvdW50ICYmIHRhYmxlVG90YWxXaWR0aFxuXG4gICAgICAgICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbnNQcm9wc1tpMl0ud2lkdGhcbiAgICAgICAgICAgICAgc3R5bGVzLmxlZnQgPSBmaXhlZENvbHVtbnNQcm9wc1tpMl0ubGVmdFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjZWxsSW5mbyA9IHtcbiAgICAgICAgICAgICAgLi4ucm93SW5mbyxcbiAgICAgICAgICAgICAgaXNFeHBhbmRlZCxcbiAgICAgICAgICAgICAgY29sdW1uOiB7IC4uLmNvbHVtbiB9LFxuICAgICAgICAgICAgICB2YWx1ZTogcm93SW5mby5yb3dbY29sdW1uLmlkXSxcbiAgICAgICAgICAgICAgcGl2b3RlZDogY29sdW1uLnBpdm90ZWQsXG4gICAgICAgICAgICAgIGV4cGFuZGVyOiBjb2x1bW4uZXhwYW5kZXIsXG4gICAgICAgICAgICAgIHJlc2l6ZWQsXG4gICAgICAgICAgICAgIHNob3csXG4gICAgICAgICAgICAgIHRkUHJvcHMsXG4gICAgICAgICAgICAgIGNvbHVtblByb3BzLFxuICAgICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgICBzdHlsZXMsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY2VsbEluZm8udmFsdWVcblxuICAgICAgICAgICAgbGV0IGludGVyYWN0aW9uUHJvcHNcbiAgICAgICAgICAgIGxldCBpc0JyYW5jaFxuICAgICAgICAgICAgbGV0IGlzUHJldmlld1xuXG4gICAgICAgICAgICBjb25zdCBvbkV4cGFuZGVyQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgICAgICAgbGV0IG5ld0V4cGFuZGVkID0gXy5jbG9uZShleHBhbmRlZClcbiAgICAgICAgICAgICAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICBuZXdFeHBhbmRlZCA9IF8uc2V0KG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwgZmFsc2UpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3RXhwYW5kZWQgPSBfLnNldChuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIHt9KVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBleHBhbmRlZDogbmV3RXhwYW5kZWQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBvbkV4cGFuZGVkQ2hhbmdlICYmXG4gICAgICAgICAgICAgICAgICAgIG9uRXhwYW5kZWRDaGFuZ2UobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGEgc3RhbmRhcmQgY2VsbFxuICAgICAgICAgICAgbGV0IHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICBjb2x1bW4uQ2VsbCxcbiAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIC8vIFJlc29sdmUgUmVuZGVyZXJzXG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uQWdncmVnYXRlZCB8fFxuICAgICAgICAgICAgICAoIWNvbHVtbi5hZ2dyZWdhdGUgPyBBZ2dyZWdhdGVkQ29tcG9uZW50IDogY29sdW1uLkNlbGwpXG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLkV4cGFuZGVyIHx8IEV4cGFuZGVyQ29tcG9uZW50XG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uUGl2b3RWYWx1ZSB8fCBQaXZvdFZhbHVlQ29tcG9uZW50XG4gICAgICAgICAgICBjb25zdCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCA9XG4gICAgICAgICAgICAgIFBpdm90Q29tcG9uZW50IHx8XG4gICAgICAgICAgICAgIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8UmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICA8UmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZFBpdm90Q29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLlBpdm90IHx8IERlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50XG5cbiAgICAgICAgICAgIC8vIElzIHRoaXMgY2VsbCBleHBhbmRhYmxlP1xuICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQgfHwgY2VsbEluZm8uZXhwYW5kZXIpIHtcbiAgICAgICAgICAgICAgLy8gTWFrZSBpdCBleHBhbmRhYmxlIGJ5IGRlZnVhbHRcbiAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcyA9IHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBvbkV4cGFuZGVyQ2xpY2ssXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gSWYgcGl2b3RlZCwgaGFzIG5vIHN1YlJvd3MsIGFuZCBkb2VzIG5vdCBoYXZlIGEgc3ViQ29tcG9uZW50LCBkbyBub3QgbWFrZSBleHBhbmRhYmxlXG4gICAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsSW5mby5zdWJSb3dzKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIVN1YkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkKSB7XG4gICAgICAgICAgICAgIC8vIElzIHRoaXMgY29sdW1uIGEgYnJhbmNoP1xuICAgICAgICAgICAgICBpc0JyYW5jaCA9XG4gICAgICAgICAgICAgICAgcm93SW5mby5yb3dbcGl2b3RJREtleV0gPT09IGNvbHVtbi5pZCAmJiBjZWxsSW5mby5zdWJSb3dzXG4gICAgICAgICAgICAgIC8vIFNob3VsZCB0aGlzIGNvbHVtbiBiZSBibGFuaz9cbiAgICAgICAgICAgICAgaXNQcmV2aWV3ID1cbiAgICAgICAgICAgICAgICBwaXZvdEJ5LmluZGV4T2YoY29sdW1uLmlkKSA+XG4gICAgICAgICAgICAgICAgICBwaXZvdEJ5LmluZGV4T2Yocm93SW5mby5yb3dbcGl2b3RJREtleV0pICYmIGNlbGxJbmZvLnN1YlJvd3NcbiAgICAgICAgICAgICAgLy8gUGl2b3QgQ2VsbCBSZW5kZXIgT3ZlcnJpZGVcbiAgICAgICAgICAgICAgaWYgKGlzQnJhbmNoKSB7XG4gICAgICAgICAgICAgICAgLy8gaXNQaXZvdFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRQaXZvdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3dbcGl2b3RWYWxLZXldLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHJvd1twaXZvdFZhbEtleV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNQcmV2aWV3KSB7XG4gICAgICAgICAgICAgICAgLy8gU2hvdyB0aGUgcGl2b3QgcHJldmlld1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbEluZm8uYWdncmVnYXRlZCkge1xuICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2VsbEluZm8uZXhwYW5kZXIpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICByb3dbcGl2b3RWYWxLZXldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgaWYgKHBpdm90QnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbEluZm8uZ3JvdXBlZEJ5UGl2b3QpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsSW5mby5zdWJSb3dzICYmICFTdWJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBjZWxsXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICAgICAgICBrZXk9e2kyICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAgICAgICAhc2hvdyAmJiAnLWhpZGRlbicsXG4gICAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlICYmICdydC1leHBhbmRhYmxlJyxcbiAgICAgICAgICAgICAgICAgIChpc0JyYW5jaCB8fCBpc1ByZXZpZXcpICYmICdydC1waXZvdCcsXG4gICAgICAgICAgICAgICAgICBpc0ZpeGVkICYmICctZml4ZWQnLFxuICAgICAgICAgICAgICAgICAgKGlzRml4ZWQgJiYgIXJlc29sdmVkQ2VsbCkgJiYgJy1lbXB0eSdcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgICAgICAgey4uLmludGVyYWN0aW9uUHJvcHN9XG4gICAgICAgICAgICAgICAgey4uLnRkUHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgICB7Li4uY29sdW1uUHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyZXNvbHZlZENlbGx9XG4gICAgICAgICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVHJDb21wb25lbnQ+LFxuICAgICAgICByb3dJbmZvLnN1YlJvd3MgJiZcbiAgICAgICAgICBpc0V4cGFuZGVkICYmXG4gICAgICAgICAgcm93SW5mby5zdWJSb3dzLm1hcCgoZCwgaSkgPT5cbiAgICAgICAgICAgIG1ha2VQYWdlUm93KGQsIGksIHJvd0luZm8ubmVzdGluZ1BhdGgpXG4gICAgICAgICAgKSxcbiAgICAgICAgU3ViQ29tcG9uZW50ICYmXG4gICAgICAgICAgIXJvd0luZm8uc3ViUm93cyAmJlxuICAgICAgICAgIGlzRXhwYW5kZWQgJiZcbiAgICAgICAgICBTdWJDb21wb25lbnQocm93SW5mbyksXG4gICAgICBdXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZFJvdyA9IChyb3csIGkpID0+IHtcbiAgICAgIGNvbnN0IHRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAnLXBhZFJvdycsXG4gICAgICAgICAgICAocGFnZVJvd3MubGVuZ3RoICsgaSkgJSAyID8gJy1ldmVuJyA6ICctb2RkJyxcbiAgICAgICAgICAgIHRyUHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICAgKX1cbiAgICAgICAgICBzdHlsZT17dHJQcm9wcy5zdHlsZSB8fCB7fX1cbiAgICAgICAgPlxuICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZVBhZENvbHVtbil9XG4gICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZENvbHVtbiA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICB0ZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRkUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdGFibGVUb3RhbFdpZHRoXG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLndpZHRoXG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ubGVmdFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsICFzaG93ICYmICctaGlkZGVuJywgeyAnLWZpeGVkJzogaXNGaXhlZCB9KX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHsuLi50ZFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoUGFkUm93Q29tcG9uZW50KX1cbiAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sdW1uRm9vdGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRGb290UHJvcHMgPSBnZXRUZm9vdFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgY29uc3QgdEZvb3RUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZm9vdFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGZvb3RDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e3RGb290UHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgIHN0eWxlPXt0Rm9vdFByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50Rm9vdFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Rm9vdFRyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgIHN0eWxlPXt0Rm9vdFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udEZvb3RUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlQ29sdW1uRm9vdGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1Rmb290Q29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB0Rm9vdFRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRmb290VGRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Gb290ZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEZvb3RlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICB0Rm9vdFRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkZvb3RlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi50Rm9vdFRkUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkZvb3RlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA8IGZpeGVkQ29sdW1uc0NvdW50ICYmIHRhYmxlVG90YWxXaWR0aFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbnNQcm9wc1tpXS53aWR0aFxuICAgICAgICBzdHlsZXMubGVmdCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLmxlZnRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCAhc2hvdyAmJiAnLWhpZGRlbicsIHsgJy1maXhlZCc6IGlzRml4ZWQgfSl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4uY29sdW1uUHJvcHMucmVzdH1cbiAgICAgICAgICB7Li4udEZvb3RUZFByb3BzLnJlc3R9XG4gICAgICAgICAgey4uLmNvbHVtbkZvb3RlclByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkZvb3Rlciwge1xuICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWdpbmF0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFnaW5hdGlvblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRQYWdpbmF0aW9uUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnaW5hdGlvbkNvbXBvbmVudFxuICAgICAgICAgIHsuLi5yZXNvbHZlZFN0YXRlfVxuICAgICAgICAgIHBhZ2VzPXtwYWdlc31cbiAgICAgICAgICBjYW5QcmV2aW91cz17Y2FuUHJldmlvdXN9XG4gICAgICAgICAgY2FuTmV4dD17Y2FuTmV4dH1cbiAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMub25QYWdlQ2hhbmdlfVxuICAgICAgICAgIG9uUGFnZVNpemVDaGFuZ2U9e3RoaXMub25QYWdlU2l6ZUNoYW5nZX1cbiAgICAgICAgICBjbGFzc05hbWU9e3BhZ2luYXRpb25Qcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgc3R5bGU9e3BhZ2luYXRpb25Qcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4ucGFnaW5hdGlvblByb3BzLnJlc3R9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgKVxuICAgIGNvbnN0IHRhYmxlUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRUYWJsZVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIClcbiAgICBjb25zdCB0Qm9keVByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0VGJvZHlQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICApXG4gICAgY29uc3QgbG9hZGluZ1Byb3BzID0gZ2V0TG9hZGluZ1Byb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIGNvbnN0IG5vRGF0YVByb3BzID0gZ2V0Tm9EYXRhUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgY29uc3QgcmVzaXplclByb3BzID0gZ2V0UmVzaXplclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuXG4gICAgY29uc3QgZGlzcGxheUZvb3RlclRvcCA9IGZvb3RlclBsYWNlbWVudCA9PT0gJ3RvcCcgfHwgZm9vdGVyUGxhY2VtZW50ID09PSAnYm90aCdcbiAgICBjb25zdCBkaXNwbGF5Rm9vdGVyQm90dG9tID0gZm9vdGVyUGxhY2VtZW50ID09PSAnYm90dG9tJyB8fCBmb290ZXJQbGFjZW1lbnQgPT09ICdib3RoJ1xuXG4gICAgY29uc3QgbWFrZVRhYmxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgY29sR3JvdXAgPSBtYWtlQ29sR3JvdXAoKTtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBtYWtlUGFnaW5hdGlvbigpXG4gICAgICBjb25zdCBmb290ZXIgPSBoYXNDb2x1bW5Gb290ZXIgPyBtYWtlQ29sdW1uRm9vdGVycygpIDogbnVsbFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnUmVhY3RUYWJsZScsIGNsYXNzTmFtZSwgcm9vdFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAgICAgLi4ucm9vdFByb3BzLnN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJvb3RQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3dQYWdpbmF0aW9uICYmIHNob3dQYWdpbmF0aW9uVG9wXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdwYWdpbmF0aW9uLXRvcCc+XG4gICAgICAgICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgPFRhYmxlV3JhcHBlciB3cmFwcGVyUmVmPXsoYykgPT4gdGhpcy50YWJsZVdyYXBwZXIgPSBjfT5cbiAgICAgICAgICAgIDxUYWJsZUNvbXBvbmVudFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgdGFibGVQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgY3VycmVudGx5UmVzaXppbmcgPyAncnQtcmVzaXppbmcnIDogJydcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgc3R5bGU9e3RhYmxlUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgIHsuLi50YWJsZVByb3BzLnJlc3R9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjb2xHcm91cH1cbiAgICAgICAgICAgICAge2hhc0hlYWRlckdyb3VwcyA/IG1ha2VIZWFkZXJHcm91cHMoKSA6IG51bGx9XG4gICAgICAgICAgICAgIHttYWtlSGVhZGVycygpfVxuICAgICAgICAgICAgICB7aGFzRmlsdGVycyA/IG1ha2VGaWx0ZXJzKCkgOiBudWxsfVxuICAgICAgICAgICAgICB7ZGlzcGxheUZvb3RlclRvcCAmJiBmb290ZXJ9XG4gICAgICAgICAgICAgIDxUYm9keUNvbXBvbmVudFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Qm9keVByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3RCb2R5UHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgICAgey4uLnRCb2R5UHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwYWdlUm93cy5tYXAoKGQsIGkpID0+IG1ha2VQYWdlUm93KGQsIGkpKX1cbiAgICAgICAgICAgICAgICB7cGFkUm93cy5tYXAobWFrZVBhZFJvdyl9XG4gICAgICAgICAgICAgIDwvVGJvZHlDb21wb25lbnQ+XG4gICAgICAgICAgICAgIHtkaXNwbGF5Rm9vdGVyQm90dG9tICYmIGZvb3Rlcn1cbiAgICAgICAgICAgIDwvVGFibGVDb21wb25lbnQ+XG4gICAgICAgICAgPC9UYWJsZVdyYXBwZXI+XG4gICAgICAgICAge3Nob3dQYWdpbmF0aW9uICYmIHNob3dQYWdpbmF0aW9uQm90dG9tXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdwYWdpbmF0aW9uLWJvdHRvbSc+XG4gICAgICAgICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgeyFwYWdlUm93cy5sZW5ndGggJiZcbiAgICAgICAgICAgIDxOb0RhdGFDb21wb25lbnQgey4uLm5vRGF0YVByb3BzfT5cbiAgICAgICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KG5vRGF0YVRleHQpfVxuICAgICAgICAgICAgPC9Ob0RhdGFDb21wb25lbnQ+fVxuICAgICAgICAgIDxMb2FkaW5nQ29tcG9uZW50XG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgbG9hZGluZ1RleHQ9e2xvYWRpbmdUZXh0fVxuICAgICAgICAgICAgey4uLmxvYWRpbmdQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBjaGlsZFByb3BzIGFyZSBvcHRpb25hbGx5IHBhc3NlZCB0byBhIGZ1bmN0aW9uLWFzLWEtY2hpbGRcbiAgICByZXR1cm4gY2hpbGRyZW4gPyBjaGlsZHJlbihmaW5hbFN0YXRlLCBtYWtlVGFibGUsIHRoaXMpIDogbWFrZVRhYmxlKClcbiAgfVxufVxuIl19