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
          totalWidth = resolvedState.width;

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
        if (totalWidth) {
          var insideWidth = totalWidth - 2; // Subtract borders
          var widthIsPercents = _utils2.default.isPercents(width);
          var minWidthIsPercents = _utils2.default.isPercents(minWidth);
          var maxWidthIsPercents = _utils2.default.isPercents(maxWidth);

          var widthValue = parseInt(width, 10);
          var minWidthValue = minWidth && parseInt(minWidth, 10);
          var maxWidthValue = maxWidth && parseInt(maxWidth, 10);

          width = widthIsPercents ? _utils2.default.percentsToPx(widthValue, insideWidth) : widthValue;

          minWidth = minWidthIsPercents ? _utils2.default.percentsToPx(minWidthValue, insideWidth) : minWidthValue;

          maxWidth = maxWidthIsPercents ? _utils2.default.percentsToPx(maxWidthValue, insideWidth) : maxWidthValue;

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
            width: !isDummy ? width : undefined
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
        var isFixed = i < fixedColumnsCount && totalWidth;

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
        var isFixed = i < fixedColumnsCount && totalWidth;

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

        var isFixed = i < fixedColumnsCount && totalWidth;

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

            var isFixed = i2 < fixedColumnsCount && totalWidth;

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

        var isFixed = i < fixedColumnsCount && totalWidth;

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

        var isFixed = i < fixedColumnsCount && totalWidth;

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
            style: _extends({
              width: totalWidth
            }, style, rootProps.style)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0IiwicmVzb2x2ZWRTdGF0ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJnZXRQcm9wcyIsImdldFRhYmxlUHJvcHMiLCJnZXRDb2xHcm91cENvbFByb3BzIiwiZ2V0VGhlYWRHcm91cFByb3BzIiwiZ2V0VGhlYWRHcm91cFRyUHJvcHMiLCJnZXRUaGVhZEdyb3VwVGhQcm9wcyIsImdldFRoZWFkUHJvcHMiLCJnZXRUaGVhZFRyUHJvcHMiLCJnZXRUaGVhZFRoUHJvcHMiLCJnZXRUaGVhZEZpbHRlclByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJUclByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJUaFByb3BzIiwiZ2V0VGJvZHlQcm9wcyIsImdldFRyUHJvcHMiLCJnZXRUZFByb3BzIiwiZ2V0VGZvb3RQcm9wcyIsImdldFRmb290VHJQcm9wcyIsImdldFRmb290VGRQcm9wcyIsImdldFBhZ2luYXRpb25Qcm9wcyIsImdldExvYWRpbmdQcm9wcyIsImdldE5vRGF0YVByb3BzIiwiZ2V0UmVzaXplclByb3BzIiwic2hvd1BhZ2luYXRpb24iLCJzaG93UGFnaW5hdGlvblRvcCIsInNob3dQYWdpbmF0aW9uQm90dG9tIiwic2hvd1NvcnRPcmRlciIsIm1hbnVhbCIsImxvYWRpbmdUZXh0Iiwibm9EYXRhVGV4dCIsInNvcnRhYmxlIiwicmVzaXphYmxlIiwiZmlsdGVyYWJsZSIsImZvb3RlclBsYWNlbWVudCIsInBpdm90SURLZXkiLCJwaXZvdFZhbEtleSIsInBpdm90QnkiLCJzdWJSb3dzS2V5IiwiYWdncmVnYXRlZEtleSIsIm9yaWdpbmFsS2V5IiwiaW5kZXhLZXkiLCJncm91cGVkQnlQaXZvdEtleSIsImZpeGVkQ29sdW1uc0NvdW50IiwibG9hZGluZyIsInBhZ2VzIiwib25FeHBhbmRlZENoYW5nZSIsIlRhYmxlV3JhcHBlciIsIlRhYmxlQ29tcG9uZW50IiwiVGhlYWRDb21wb25lbnQiLCJUYm9keUNvbXBvbmVudCIsIlRyQ29tcG9uZW50IiwiVGhDb21wb25lbnQiLCJUZENvbXBvbmVudCIsIlRmb290Q29tcG9uZW50IiwiUGFnaW5hdGlvbkNvbXBvbmVudCIsIkxvYWRpbmdDb21wb25lbnQiLCJTdWJDb21wb25lbnQiLCJOb0RhdGFDb21wb25lbnQiLCJSZXNpemVyQ29tcG9uZW50IiwiU29ydE9yZGVyQ29tcG9uZW50IiwiRXhwYW5kZXJDb21wb25lbnQiLCJQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RDb21wb25lbnQiLCJBZ2dyZWdhdGVkQ29tcG9uZW50IiwiRmlsdGVyQ29tcG9uZW50IiwiUGFkUm93Q29tcG9uZW50IiwicmVzb2x2ZWREYXRhIiwiYWxsVmlzaWJsZUNvbHVtbnMiLCJoZWFkZXJHcm91cHMiLCJoYXNIZWFkZXJHcm91cHMiLCJzb3J0ZWREYXRhIiwidG90YWxXaWR0aCIsIndpZHRoIiwic3RhcnRSb3ciLCJlbmRSb3ciLCJwYWdlUm93cyIsInNsaWNlIiwibWluUm93cyIsInBhZFJvd3MiLCJyYW5nZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJoYXNDb2x1bW5Gb290ZXIiLCJzb21lIiwiZCIsIkZvb3RlciIsImhhc0ZpbHRlcnMiLCJyZWN1cnNlUm93c1ZpZXdJbmRleCIsInJvd3MiLCJwYXRoIiwiaW5kZXgiLCJtYXAiLCJyb3ciLCJpIiwicm93V2l0aFZpZXdJbmRleCIsIl92aWV3SW5kZXgiLCJuZXdQYXRoIiwiY29uY2F0IiwiZ2V0IiwiY2FuUHJldmlvdXMiLCJjYW5OZXh0Iiwicm93SW5kZXgiLCJmaW5hbFN0YXRlIiwiZml4ZWRDb2x1bW5zUHJvcHMiLCJyYXdDb2x1bW5zV2lkdGgiLCJmbG9vckNvbHVtbnNXaWR0aCIsIm1ha2VDb2xHcm91cCIsIm1ha2VDb2wiLCJjb2x1bW4iLCJpc0R1bW15IiwiaXNGaXhlZCIsImlzSW5uZXJGaXhlZCIsImlzTGFzdEZpeGVkIiwicmVzaXplZENvbCIsImZpbmQiLCJ4IiwiaWQiLCJjb2xncm91cENvbFByb3BzIiwic3BsaXRQcm9wcyIsInVuZGVmaW5lZCIsImNvbHVtbkNvbGdyb3VwQ29sUHJvcHMiLCJjbGFzc2VzIiwiY29sR3JvdXBDb2xDbGFzc05hbWUiLCJzdHlsZXMiLCJjb2xHcm91cENvbFN0eWxlIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsImdldEZpcnN0RGVmaW5lZCIsInZhbHVlIiwiaW5zaWRlV2lkdGgiLCJ3aWR0aElzUGVyY2VudHMiLCJpc1BlcmNlbnRzIiwibWluV2lkdGhJc1BlcmNlbnRzIiwibWF4V2lkdGhJc1BlcmNlbnRzIiwid2lkdGhWYWx1ZSIsInBhcnNlSW50IiwibWluV2lkdGhWYWx1ZSIsIm1heFdpZHRoVmFsdWUiLCJwZXJjZW50c1RvUHgiLCJjbGFtcCIsImZsb29yIiwiZGlmZiIsImxlZnQiLCJyZWR1Y2UiLCJpdGVtIiwicHVzaCIsIm1ha2VIZWFkZXJHcm91cHMiLCJ0aGVhZEdyb3VwUHJvcHMiLCJ0aGVhZEdyb3VwVHJQcm9wcyIsInJlc3QiLCJtYWtlSGVhZGVyR3JvdXAiLCJ0aGVhZEdyb3VwVGhQcm9wcyIsImNvbHVtbkhlYWRlclByb3BzIiwiZ2V0SGVhZGVyUHJvcHMiLCJoZWFkZXJDbGFzc05hbWUiLCJoZWFkZXJTdHlsZSIsImNvbFNwYW4iLCJjb2x1bW5zIiwiY29udGVudCIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsIkhlYWRlciIsImRhdGEiLCJtYWtlSGVhZGVycyIsInRoZWFkUHJvcHMiLCJ0aGVhZFRyUHJvcHMiLCJtYWtlSGVhZGVyIiwic29ydCIsInNob3ciLCJ0aGVhZFRoUHJvcHMiLCJpc1Jlc2l6YWJsZSIsInJlc2l6ZXIiLCJlIiwicmVzaXplclByb3BzIiwic29ydE9yZGVyIiwiZGVzYyIsImlzU29ydGFibGUiLCJpbmNsdWRlcyIsInNoaWZ0S2V5IiwibWFrZUZpbHRlcnMiLCJ0aGVhZEZpbHRlclByb3BzIiwidGhlYWRGaWx0ZXJUclByb3BzIiwibWFrZUZpbHRlciIsInRoZWFkRmlsdGVyVGhQcm9wcyIsImZpbHRlciIsIlJlc29sdmVkRmlsdGVyQ29tcG9uZW50IiwiRmlsdGVyIiwiaXNGaWx0ZXJhYmxlIiwib25DaGFuZ2UiLCJtYWtlUGFnZVJvdyIsInJvd0luZm8iLCJvcmlnaW5hbCIsInZpZXdJbmRleCIsImxldmVsIiwibmVzdGluZ1BhdGgiLCJhZ2dyZWdhdGVkIiwiZ3JvdXBlZEJ5UGl2b3QiLCJzdWJSb3dzIiwiaXNFeHBhbmRlZCIsInRyUHJvcHMiLCJqb2luIiwiaTIiLCJ0ZFByb3BzIiwiY29sdW1uUHJvcHMiLCJjZWxsSW5mbyIsInBpdm90ZWQiLCJleHBhbmRlciIsImludGVyYWN0aW9uUHJvcHMiLCJpc0JyYW5jaCIsImlzUHJldmlldyIsIm9uRXhwYW5kZXJDbGljayIsIm5ld0V4cGFuZGVkIiwiY2xvbmUiLCJzZXQiLCJzZXRTdGF0ZVdpdGhEYXRhIiwicmVzb2x2ZWRDZWxsIiwiQ2VsbCIsIlJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCIsIkFnZ3JlZ2F0ZWQiLCJhZ2dyZWdhdGUiLCJSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50IiwiRXhwYW5kZXIiLCJSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQiLCJQaXZvdFZhbHVlIiwiRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnQiLCJSZXNvbHZlZFBpdm90Q29tcG9uZW50IiwiUGl2b3QiLCJleHBhbmRhYmxlIiwib25DbGljayIsImluZGV4T2YiLCJtYWtlUGFkUm93IiwibWFrZVBhZENvbHVtbiIsIm1ha2VDb2x1bW5Gb290ZXJzIiwidEZvb3RQcm9wcyIsInRGb290VHJQcm9wcyIsIm1ha2VDb2x1bW5Gb290ZXIiLCJ0Rm9vdFRkUHJvcHMiLCJjb2x1bW5Gb290ZXJQcm9wcyIsImdldEZvb3RlclByb3BzIiwibWFrZVBhZ2luYXRpb24iLCJwYWdpbmF0aW9uUHJvcHMiLCJyb290UHJvcHMiLCJ0YWJsZVByb3BzIiwidEJvZHlQcm9wcyIsImxvYWRpbmdQcm9wcyIsIm5vRGF0YVByb3BzIiwiZGlzcGxheUZvb3RlclRvcCIsImRpc3BsYXlGb290ZXJCb3R0b20iLCJtYWtlVGFibGUiLCJjb2xHcm91cCIsInBhZ2luYXRpb24iLCJmb290ZXIiLCJjIiwidGFibGVXcmFwcGVyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBSkE7OztBQU1PLElBQU1BLHdFQUFOOztJQUVjQyxVOzs7QUFHbkIsc0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFHbEIsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUNBLFVBQUtFLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkYsSUFBbkIsT0FBckI7QUFDQSxVQUFLRyxh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QVZIO0FBV0c1RSwyQkFBYTRGLGFBQWIsR0FBNkIsSUFYaEM7QUFZR21FLGtDQUFvQkssTUFadkI7QUFhRTtBQUFDLDhCQUFEO0FBQUE7QUFDRSw2QkFBVywwQkFBV1IsV0FBV3BQLFNBQXRCLENBRGI7QUFFRSx5QkFBT29QLFdBQVduUDtBQUZwQixtQkFHTW1QLFdBQVc3RixJQUhqQjtBQUtHM0UseUJBQVNpQixHQUFULENBQWEsVUFBQ1AsQ0FBRCxFQUFJUyxDQUFKO0FBQUEseUJBQVUrRixZQUFZeEcsQ0FBWixFQUFlUyxDQUFmLENBQVY7QUFBQSxpQkFBYixDQUxIO0FBTUdoQix3QkFBUWMsR0FBUixDQUFZMEksVUFBWjtBQU5ILGVBYkY7QUFxQkdpQixxQ0FBdUJJO0FBckIxQjtBQURGLFdBZEY7QUF1Q0dwTyw0QkFBa0JFLG9CQUFsQixHQUNHO0FBQUE7QUFBQSxjQUFLLFdBQVUsbUJBQWY7QUFDQ2lPO0FBREQsV0FESCxHQUlHLElBM0NOO0FBNENHLFdBQUMvSyxTQUFTTyxNQUFWLElBQ0M7QUFBQywyQkFBRDtBQUFxQm1LLHVCQUFyQjtBQUNHLDRCQUFFckYsa0JBQUYsQ0FBcUJuSSxVQUFyQjtBQURILFdBN0NKO0FBZ0RFLHdDQUFDLGdCQUFEO0FBQ0UscUJBQVNjLE9BRFg7QUFFRSx5QkFBYWY7QUFGZixhQUdNd04sWUFITjtBQWhERixTQURGO0FBd0RELE9BNUREOztBQThEQTtBQUNBLGFBQU90UCxXQUFXQSxTQUFTeUcsVUFBVCxFQUFxQmlKLFNBQXJCLEVBQWdDLElBQWhDLENBQVgsR0FBbURBLFdBQTFEO0FBQ0Q7Ozs7RUExL0JxQyx1QkFBUSwwQ0FBUixDOztBQUFuQjVSLFUsQ0FDWmtTLFk7a0JBRFlsUyxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG4vL1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscydcbmltcG9ydCBMaWZlY3ljbGUgZnJvbSAnLi9saWZlY3ljbGUnXG5pbXBvcnQgTWV0aG9kcyBmcm9tICcuL21ldGhvZHMnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdFByb3BzJ1xuXG5leHBvcnQgY29uc3QgUmVhY3RUYWJsZURlZmF1bHRzID0gZGVmYXVsdFByb3BzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0VGFibGUgZXh0ZW5kcyBNZXRob2RzKExpZmVjeWNsZShDb21wb25lbnQpKSB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHNcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLmdldFJlc29sdmVkU3RhdGUgPSB0aGlzLmdldFJlc29sdmVkU3RhdGUuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0RGF0YU1vZGVsID0gdGhpcy5nZXREYXRhTW9kZWwuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0U29ydGVkRGF0YSA9IHRoaXMuZ2V0U29ydGVkRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5maXJlRmV0Y2hEYXRhID0gdGhpcy5maXJlRmV0Y2hEYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFByb3BPclN0YXRlID0gdGhpcy5nZXRQcm9wT3JTdGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRTdGF0ZU9yUHJvcCA9IHRoaXMuZ2V0U3RhdGVPclByb3AuYmluZCh0aGlzKVxuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zb3J0RGF0YSA9IHRoaXMuc29ydERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0TWluUm93cyA9IHRoaXMuZ2V0TWluUm93cy5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UgPSB0aGlzLm9uUGFnZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblBhZ2VTaXplQ2hhbmdlID0gdGhpcy5vblBhZ2VTaXplQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLnNvcnRDb2x1bW4gPSB0aGlzLnNvcnRDb2x1bW4uYmluZCh0aGlzKVxuICAgIHRoaXMuZmlsdGVyQ29sdW1uID0gdGhpcy5maWx0ZXJDb2x1bW4uYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uU3RhcnQgPSB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUNvbHVtbkVuZCA9IHRoaXMucmVzaXplQ29sdW1uRW5kLmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZyA9IHRoaXMucmVzaXplQ29sdW1uTW92aW5nLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwYWdlOiAwLFxuICAgICAgcGFnZVNpemU6IHByb3BzLmRlZmF1bHRQYWdlU2l6ZSxcbiAgICAgIHNvcnRlZDogcHJvcHMuZGVmYXVsdFNvcnRlZCxcbiAgICAgIGV4cGFuZGVkOiBwcm9wcy5kZWZhdWx0RXhwYW5kZWQsXG4gICAgICBmaWx0ZXJlZDogcHJvcHMuZGVmYXVsdEZpbHRlcmVkLFxuICAgICAgcmVzaXplZDogcHJvcHMuZGVmYXVsdFJlc2l6ZWQsXG4gICAgICBjdXJyZW50bHlSZXNpemluZzogZmFsc2UsXG4gICAgICBza2lwTmV4dFNvcnQ6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpXG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIGdldFByb3BzLFxuICAgICAgZ2V0VGFibGVQcm9wcyxcbiAgICAgIGdldENvbEdyb3VwQ29sUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkR3JvdXBUaFByb3BzLFxuICAgICAgZ2V0VGhlYWRQcm9wcyxcbiAgICAgIGdldFRoZWFkVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkRmlsdGVyUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclRoUHJvcHMsXG4gICAgICBnZXRUYm9keVByb3BzLFxuICAgICAgZ2V0VHJQcm9wcyxcbiAgICAgIGdldFRkUHJvcHMsXG4gICAgICBnZXRUZm9vdFByb3BzLFxuICAgICAgZ2V0VGZvb3RUclByb3BzLFxuICAgICAgZ2V0VGZvb3RUZFByb3BzLFxuICAgICAgZ2V0UGFnaW5hdGlvblByb3BzLFxuICAgICAgZ2V0TG9hZGluZ1Byb3BzLFxuICAgICAgZ2V0Tm9EYXRhUHJvcHMsXG4gICAgICBnZXRSZXNpemVyUHJvcHMsXG4gICAgICBzaG93UGFnaW5hdGlvbixcbiAgICAgIHNob3dQYWdpbmF0aW9uVG9wLFxuICAgICAgc2hvd1BhZ2luYXRpb25Cb3R0b20sXG4gICAgICBzaG93U29ydE9yZGVyLFxuICAgICAgbWFudWFsLFxuICAgICAgbG9hZGluZ1RleHQsXG4gICAgICBub0RhdGFUZXh0LFxuICAgICAgc29ydGFibGUsXG4gICAgICByZXNpemFibGUsXG4gICAgICBmaWx0ZXJhYmxlLFxuICAgICAgZm9vdGVyUGxhY2VtZW50LFxuICAgICAgLy8gUGl2b3RpbmcgU3RhdGVcbiAgICAgIHBpdm90SURLZXksXG4gICAgICBwaXZvdFZhbEtleSxcbiAgICAgIHBpdm90QnksXG4gICAgICBzdWJSb3dzS2V5LFxuICAgICAgYWdncmVnYXRlZEtleSxcbiAgICAgIG9yaWdpbmFsS2V5LFxuICAgICAgaW5kZXhLZXksXG4gICAgICBncm91cGVkQnlQaXZvdEtleSxcbiAgICAgIC8vIEZpeGVkXG4gICAgICBmaXhlZENvbHVtbnNDb3VudCxcbiAgICAgIC8vIFN0YXRlXG4gICAgICBsb2FkaW5nLFxuICAgICAgcGFnZVNpemUsXG4gICAgICBwYWdlLFxuICAgICAgc29ydGVkLFxuICAgICAgZmlsdGVyZWQsXG4gICAgICByZXNpemVkLFxuICAgICAgZXhwYW5kZWQsXG4gICAgICBwYWdlcyxcbiAgICAgIG9uRXhwYW5kZWRDaGFuZ2UsXG4gICAgICAvLyBDb21wb25lbnRzXG4gICAgICBUYWJsZVdyYXBwZXIsXG4gICAgICBUYWJsZUNvbXBvbmVudCxcbiAgICAgIFRoZWFkQ29tcG9uZW50LFxuICAgICAgVGJvZHlDb21wb25lbnQsXG4gICAgICBUckNvbXBvbmVudCxcbiAgICAgIFRoQ29tcG9uZW50LFxuICAgICAgVGRDb21wb25lbnQsXG4gICAgICBUZm9vdENvbXBvbmVudCxcbiAgICAgIFBhZ2luYXRpb25Db21wb25lbnQsXG4gICAgICBMb2FkaW5nQ29tcG9uZW50LFxuICAgICAgU3ViQ29tcG9uZW50LFxuICAgICAgTm9EYXRhQ29tcG9uZW50LFxuICAgICAgUmVzaXplckNvbXBvbmVudCxcbiAgICAgIFNvcnRPcmRlckNvbXBvbmVudCxcbiAgICAgIEV4cGFuZGVyQ29tcG9uZW50LFxuICAgICAgUGl2b3RWYWx1ZUNvbXBvbmVudCxcbiAgICAgIFBpdm90Q29tcG9uZW50LFxuICAgICAgQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgIEZpbHRlckNvbXBvbmVudCxcbiAgICAgIFBhZFJvd0NvbXBvbmVudCxcbiAgICAgIC8vIERhdGEgbW9kZWxcbiAgICAgIHJlc29sdmVkRGF0YSxcbiAgICAgIGFsbFZpc2libGVDb2x1bW5zLFxuICAgICAgaGVhZGVyR3JvdXBzLFxuICAgICAgaGFzSGVhZGVyR3JvdXBzLFxuICAgICAgLy8gU29ydGVkIERhdGFcbiAgICAgIHNvcnRlZERhdGEsXG4gICAgICBjdXJyZW50bHlSZXNpemluZyxcbiAgICAgIHdpZHRoOiB0b3RhbFdpZHRoLFxuICAgIH0gPSByZXNvbHZlZFN0YXRlXG5cbiAgICAvLyBQYWdpbmF0aW9uXG4gICAgY29uc3Qgc3RhcnRSb3cgPSBwYWdlU2l6ZSAqIHBhZ2VcbiAgICBjb25zdCBlbmRSb3cgPSBzdGFydFJvdyArIHBhZ2VTaXplXG4gICAgbGV0IHBhZ2VSb3dzID0gbWFudWFsID8gcmVzb2x2ZWREYXRhIDogc29ydGVkRGF0YS5zbGljZShzdGFydFJvdywgZW5kUm93KVxuICAgIGNvbnN0IG1pblJvd3MgPSB0aGlzLmdldE1pblJvd3MoKVxuICAgIGNvbnN0IHBhZFJvd3MgPSBfLnJhbmdlKE1hdGgubWF4KG1pblJvd3MgLSBwYWdlUm93cy5sZW5ndGgsIDApKVxuXG4gICAgY29uc3QgaGFzQ29sdW1uRm9vdGVyID0gYWxsVmlzaWJsZUNvbHVtbnMuc29tZShkID0+IGQuRm9vdGVyKVxuICAgIGNvbnN0IGhhc0ZpbHRlcnMgPSBmaWx0ZXJhYmxlIHx8IGFsbFZpc2libGVDb2x1bW5zLnNvbWUoZCA9PiBkLmZpbHRlcmFibGUpXG5cbiAgICBjb25zdCByZWN1cnNlUm93c1ZpZXdJbmRleCA9IChyb3dzLCBwYXRoID0gW10sIGluZGV4ID0gLTEpID0+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHJvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgICAgY29uc3Qgcm93V2l0aFZpZXdJbmRleCA9IHtcbiAgICAgICAgICAgIC4uLnJvdyxcbiAgICAgICAgICAgIF92aWV3SW5kZXg6IGluZGV4LFxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5jb25jYXQoW2ldKVxuICAgICAgICAgIGlmIChyb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldICYmIF8uZ2V0KGV4cGFuZGVkLCBuZXdQYXRoKSkge1xuICAgICAgICAgICAgO1tyb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldLCBpbmRleF0gPSByZWN1cnNlUm93c1ZpZXdJbmRleChcbiAgICAgICAgICAgICAgcm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSxcbiAgICAgICAgICAgICAgbmV3UGF0aCxcbiAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJvd1dpdGhWaWV3SW5kZXhcbiAgICAgICAgfSksXG4gICAgICAgIGluZGV4LFxuICAgICAgXVxuICAgIH1cbiAgICA7W3BhZ2VSb3dzXSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KHBhZ2VSb3dzKVxuXG4gICAgY29uc3QgY2FuUHJldmlvdXMgPSBwYWdlID4gMFxuICAgIGNvbnN0IGNhbk5leHQgPSBwYWdlICsgMSA8IHBhZ2VzXG5cbiAgICBsZXQgcm93SW5kZXggPSAtMVxuXG4gICAgY29uc3QgZmluYWxTdGF0ZSA9IHtcbiAgICAgIC4uLnJlc29sdmVkU3RhdGUsXG4gICAgICBzdGFydFJvdyxcbiAgICAgIGVuZFJvdyxcbiAgICAgIHBhZ2VSb3dzLFxuICAgICAgbWluUm93cyxcbiAgICAgIHBhZFJvd3MsXG4gICAgICBoYXNDb2x1bW5Gb290ZXIsXG4gICAgICBjYW5QcmV2aW91cyxcbiAgICAgIGNhbk5leHQsXG4gICAgfVxuXG4gICAgY29uc3QgZml4ZWRDb2x1bW5zUHJvcHMgPSBbXTtcbiAgICBsZXQgcmF3Q29sdW1uc1dpZHRoID0gMFxuICAgIGxldCBmbG9vckNvbHVtbnNXaWR0aCA9IDBcblxuICAgIC8vIFZpc3VhbCBDb21wb25lbnRzXG5cbiAgICBjb25zdCBtYWtlQ29sR3JvdXAgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Y29sZ3JvdXA+XG4gICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlQ29sKX1cbiAgICAgICAgPC9jb2xncm91cD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgaXNEdW1teSA9IGkgPT09IGFsbFZpc2libGVDb2x1bW5zLmxlbmd0aCAtIDFcbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnRcbiAgICAgIGNvbnN0IGlzSW5uZXJGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudCAtIDFcbiAgICAgIGNvbnN0IGlzTGFzdEZpeGVkID0gaSA9PT0gZml4ZWRDb2x1bW5zQ291bnQgLSAxXG5cbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG5cbiAgICAgIGNvbnN0IGNvbGdyb3VwQ29sUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldENvbEdyb3VwQ29sUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Db2xncm91cENvbFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0Q29sR3JvdXBDb2xQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmNvbEdyb3VwQ29sQ2xhc3NOYW1lLFxuICAgICAgICBjb2xncm91cENvbFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uQ29sZ3JvdXBDb2xQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmNvbEdyb3VwQ29sU3R5bGUsXG4gICAgICAgIC4uLmNvbGdyb3VwQ29sUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkNvbGdyb3VwQ29sUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGxldCBtaW5XaWR0aCA9IGNvbHVtbi5taW5XaWR0aFxuICAgICAgbGV0IG1heFdpZHRoID0gY29sdW1uLm1heFdpZHRoXG4gICAgICBsZXQgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBtaW5XaWR0aCxcbiAgICAgICAgMFxuICAgICAgKVxuXG4gICAgICAvLyBjYWxjdWxhdGUgcHhcbiAgICAgIGlmICh0b3RhbFdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGluc2lkZVdpZHRoID0gdG90YWxXaWR0aCAtIDIgLy8gU3VidHJhY3QgYm9yZGVyc1xuICAgICAgICBjb25zdCB3aWR0aElzUGVyY2VudHMgPSBfLmlzUGVyY2VudHMod2lkdGgpXG4gICAgICAgIGNvbnN0IG1pbldpZHRoSXNQZXJjZW50cyA9IF8uaXNQZXJjZW50cyhtaW5XaWR0aClcbiAgICAgICAgY29uc3QgbWF4V2lkdGhJc1BlcmNlbnRzID0gXy5pc1BlcmNlbnRzKG1heFdpZHRoKVxuXG4gICAgICAgIGNvbnN0IHdpZHRoVmFsdWUgPSBwYXJzZUludCh3aWR0aCwgMTApXG4gICAgICAgIGNvbnN0IG1pbldpZHRoVmFsdWUgPSBtaW5XaWR0aCAmJiBwYXJzZUludChtaW5XaWR0aCwgMTApXG4gICAgICAgIGNvbnN0IG1heFdpZHRoVmFsdWUgPSBtYXhXaWR0aCAmJiBwYXJzZUludChtYXhXaWR0aCwgMTApXG5cbiAgICAgICAgd2lkdGggPSB3aWR0aElzUGVyY2VudHNcbiAgICAgICAgICA/IF8ucGVyY2VudHNUb1B4KHdpZHRoVmFsdWUsIGluc2lkZVdpZHRoKVxuICAgICAgICAgIDogd2lkdGhWYWx1ZVxuXG4gICAgICAgIG1pbldpZHRoID0gbWluV2lkdGhJc1BlcmNlbnRzXG4gICAgICAgICAgPyBfLnBlcmNlbnRzVG9QeChtaW5XaWR0aFZhbHVlLCBpbnNpZGVXaWR0aClcbiAgICAgICAgICA6IG1pbldpZHRoVmFsdWVcblxuICAgICAgICBtYXhXaWR0aCA9IG1heFdpZHRoSXNQZXJjZW50c1xuICAgICAgICAgID8gXy5wZXJjZW50c1RvUHgobWF4V2lkdGhWYWx1ZSwgaW5zaWRlV2lkdGgpXG4gICAgICAgICAgOiBtYXhXaWR0aFZhbHVlXG5cbiAgICAgICAgd2lkdGggPSBfLmNsYW1wKHdpZHRoLCBtaW5XaWR0aCwgbWF4V2lkdGgpXG5cbiAgICAgICAgcmF3Q29sdW1uc1dpZHRoICs9IHdpZHRoXG4gICAgICAgIHdpZHRoID0gTWF0aC5mbG9vcih3aWR0aClcbiAgICAgICAgZmxvb3JDb2x1bW5zV2lkdGggKz0gd2lkdGhcblxuICAgICAgICBjb25zdCBkaWZmID0gTWF0aC5mbG9vcihyYXdDb2x1bW5zV2lkdGggLSBmbG9vckNvbHVtbnNXaWR0aClcblxuICAgICAgICBpZiAoZGlmZiA+PSAxKSB7XG4gICAgICAgICAgd2lkdGggKz0gZGlmZlxuICAgICAgICAgIGZsb29yQ29sdW1uc1dpZHRoICs9IGRpZmZcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgICAgY29uc3QgbGVmdCA9IGZpeGVkQ29sdW1uc1Byb3BzLnJlZHVjZSgodmFsdWUsIGl0ZW0pID0+IHZhbHVlICsgaXRlbS53aWR0aCwgMClcbiAgICAgICAgICBmaXhlZENvbHVtbnNQcm9wcy5wdXNoKHsgd2lkdGgsIGxlZnQgfSlcblxuICAgICAgICAgIGlmIChpc0xhc3RGaXhlZCkge1xuICAgICAgICAgICAgd2lkdGggKz0gbGVmdFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0lubmVyRml4ZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGNvbFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3J0LWNvbGdyb3VwLWNvbCcsIGNsYXNzZXMsIHsgJy1kdW1teSc6IGlzRHVtbXkgfSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIHdpZHRoOiAhaXNEdW1teSA/IHdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyR3JvdXBzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRHcm91cFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZEdyb3VwVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1oZWFkZXJHcm91cHMnLCB0aGVhZEdyb3VwUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17dGhlYWRHcm91cFByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50aGVhZEdyb3VwUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZEdyb3VwVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRHcm91cFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRHcm91cFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChtYWtlSGVhZGVyR3JvdXApfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlckdyb3VwID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRHcm91cFRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgdGhlYWRHcm91cFRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZEdyb3VwVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbFNwYW4gPSBjb2x1bW4uY29sdW1ucy5sZW5ndGhcblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRHcm91cFRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgICAgY29sU3BhbixcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNEdW1teSA9IGkgPT09IGhlYWRlckdyb3Vwcy5sZW5ndGggLSAxXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA8IGZpeGVkQ29sdW1uc0NvdW50ICYmIHRvdGFsV2lkdGhcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ud2lkdGhcbiAgICAgICAgc3R5bGVzLmxlZnQgPSBmaXhlZENvbHVtbnNQcm9wc1tpXS5sZWZ0XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uSGVhZGVyLCB7XG4gICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCB7ICctZHVtbXknOiBpc0R1bW15LCAnLWVtcHR5JzogIWNvbnRlbnQsICctZml4ZWQnOiBpc0ZpeGVkIH0pfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWhlYWRlcicsIHRoZWFkUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17dGhlYWRQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udGhlYWRQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUhlYWRlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3Qgc29ydCA9IHNvcnRlZC5maW5kKGQgPT4gZC5pZCA9PT0gY29sdW1uLmlkKVxuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgY29uc3QgdGhlYWRUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZFRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZFRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZFRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNSZXNpemFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChjb2x1bW4ucmVzaXphYmxlLCByZXNpemFibGUsIGZhbHNlKVxuICAgICAgY29uc3QgcmVzaXplciA9IGlzUmVzaXphYmxlXG4gICAgICAgID8gKDxSZXNpemVyQ29tcG9uZW50XG4gICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChjb2x1bW4sIGUsIGZhbHNlKX1cbiAgICAgICAgICBvblRvdWNoU3RhcnQ9e2UgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChjb2x1bW4sIGUsIHRydWUpfVxuICAgICAgICAgIHsuLi5yZXNpemVyUHJvcHN9XG4gICAgICAgIC8+KVxuICAgICAgICA6IG51bGxcblxuICAgICAgY29uc3Qgc29ydE9yZGVyID0gc29ydCAmJiBzaG93U29ydE9yZGVyXG4gICAgICAgID8gPFNvcnRPcmRlckNvbXBvbmVudCBkZXNjPXtzb3J0LmRlc2N9IC8+XG4gICAgICAgIDogbnVsbDtcblxuICAgICAgY29uc3QgaXNTb3J0YWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5zb3J0YWJsZSwgc29ydGFibGUsIGZhbHNlKVxuICAgICAgY29uc3QgaXNEdW1teSA9IGkgPT09IGFsbFZpc2libGVDb2x1bW5zLmxlbmd0aCAtIDFcbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdG90YWxXaWR0aFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbnNQcm9wc1tpXS53aWR0aFxuICAgICAgICBzdHlsZXMubGVmdCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLmxlZnRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAncnQtcmVzaXphYmxlLWhlYWRlcicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICctY3Vyc29yLXBvaW50ZXInOiBpc1NvcnRhYmxlLFxuICAgICAgICAgICAgICAnLWhpZGRlbic6ICFzaG93LFxuICAgICAgICAgICAgICAnLWR1bW15JzogaXNEdW1teSxcbiAgICAgICAgICAgICAgJy1maXhlZCc6IGlzRml4ZWQsXG4gICAgICAgICAgICAgICdydC1oZWFkZXItcGl2b3QnOiBwaXZvdEJ5ICYmIHBpdm90Qnkuc2xpY2UoMCwgLTEpLmluY2x1ZGVzKGNvbHVtbi5pZCksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHRvZ2dsZVNvcnQ9e2UgPT4ge1xuICAgICAgICAgICAgaXNTb3J0YWJsZSAmJiB0aGlzLnNvcnRDb2x1bW4oY29sdW1uLCBlLnNoaWZ0S2V5KVxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3J0LXJlc2l6YWJsZS1oZWFkZXItY29udGVudCc+XG4gICAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkhlYWRlciwge1xuICAgICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7c29ydE9yZGVyfVxuICAgICAgICAgIHtyZXNpemVyfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VGaWx0ZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctZmlsdGVycycsIHRoZWFkRmlsdGVyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17dGhlYWRGaWx0ZXJQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udGhlYWRGaWx0ZXJQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkRmlsdGVyVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRGaWx0ZXJUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkRmlsdGVyVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUZpbHRlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlRmlsdGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEZpbHRlclRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsdGVyID0gZmlsdGVyZWQuZmluZChmaWx0ZXIgPT4gZmlsdGVyLmlkID09PSBjb2x1bW4uaWQpXG5cbiAgICAgIGNvbnN0IFJlc29sdmVkRmlsdGVyQ29tcG9uZW50ID0gY29sdW1uLkZpbHRlciB8fCBGaWx0ZXJDb21wb25lbnRcblxuICAgICAgY29uc3QgaXNGaWx0ZXJhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIGNvbHVtbi5maWx0ZXJhYmxlLFxuICAgICAgICBmaWx0ZXJhYmxlLFxuICAgICAgICBmYWxzZVxuICAgICAgKVxuXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA8IGZpeGVkQ29sdW1uc0NvdW50ICYmIHRvdGFsV2lkdGhcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ud2lkdGhcbiAgICAgICAgc3R5bGVzLmxlZnQgPSBmaXhlZENvbHVtbnNQcm9wc1tpXS5sZWZ0XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgeyAnLWZpeGVkJzogaXNGaXhlZCwgJy1lbXB0eSc6ICFpc0ZpbHRlcmFibGUgfSl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0ZpbHRlcmFibGVcbiAgICAgICAgICAgID8gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgIFJlc29sdmVkRmlsdGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdmFsdWUgPT4gdGhpcy5maWx0ZXJDb2x1bW4oY29sdW1uLCB2YWx1ZSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRlZmF1bHRQcm9wcy5jb2x1bW4uRmlsdGVyXG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZ2VSb3cgPSAocm93LCBpLCBwYXRoID0gW10pID0+IHtcbiAgICAgIGNvbnN0IHJvd0luZm8gPSB7XG4gICAgICAgIG9yaWdpbmFsOiByb3dbb3JpZ2luYWxLZXldLFxuICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgaW5kZXg6IHJvd1tpbmRleEtleV0sXG4gICAgICAgIHZpZXdJbmRleDogKytyb3dJbmRleCxcbiAgICAgICAgbGV2ZWw6IHBhdGgubGVuZ3RoLFxuICAgICAgICBuZXN0aW5nUGF0aDogcGF0aC5jb25jYXQoW2ldKSxcbiAgICAgICAgYWdncmVnYXRlZDogcm93W2FnZ3JlZ2F0ZWRLZXldLFxuICAgICAgICBncm91cGVkQnlQaXZvdDogcm93W2dyb3VwZWRCeVBpdm90S2V5XSxcbiAgICAgICAgc3ViUm93czogcm93W3N1YlJvd3NLZXldLFxuICAgICAgfVxuICAgICAgY29uc3QgaXNFeHBhbmRlZCA9IF8uZ2V0KGV4cGFuZGVkLCByb3dJbmZvLm5lc3RpbmdQYXRoKVxuICAgICAgY29uc3QgdHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VHJQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gW1xuICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICBrZXk9e3Jvd0luZm8ubmVzdGluZ1BhdGguam9pbignXycpfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIHRyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgcm93Ll92aWV3SW5kZXggJSAyID8gJy1ldmVuJyA6ICctb2RkJ1xuICAgICAgICAgICl9XG4gICAgICAgICAgc3R5bGU9e3RyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbiwgaTIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgICAgICAgIGNvbnN0IHRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgICAgICAgIGdldFRkUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgY29sdW1uLCB0aGlzKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCBjb2x1bW4sIHRoaXMpXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgICAgICAgIHRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgICAgICAgLi4udGRQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaXNGaXhlZCA9IGkyIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdG90YWxXaWR0aFxuXG4gICAgICAgICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbnNQcm9wc1tpMl0ud2lkdGhcbiAgICAgICAgICAgICAgc3R5bGVzLmxlZnQgPSBmaXhlZENvbHVtbnNQcm9wc1tpMl0ubGVmdFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjZWxsSW5mbyA9IHtcbiAgICAgICAgICAgICAgLi4ucm93SW5mbyxcbiAgICAgICAgICAgICAgaXNFeHBhbmRlZCxcbiAgICAgICAgICAgICAgY29sdW1uOiB7IC4uLmNvbHVtbiB9LFxuICAgICAgICAgICAgICB2YWx1ZTogcm93SW5mby5yb3dbY29sdW1uLmlkXSxcbiAgICAgICAgICAgICAgcGl2b3RlZDogY29sdW1uLnBpdm90ZWQsXG4gICAgICAgICAgICAgIGV4cGFuZGVyOiBjb2x1bW4uZXhwYW5kZXIsXG4gICAgICAgICAgICAgIHJlc2l6ZWQsXG4gICAgICAgICAgICAgIHNob3csXG4gICAgICAgICAgICAgIHRkUHJvcHMsXG4gICAgICAgICAgICAgIGNvbHVtblByb3BzLFxuICAgICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgICBzdHlsZXMsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY2VsbEluZm8udmFsdWVcblxuICAgICAgICAgICAgbGV0IGludGVyYWN0aW9uUHJvcHNcbiAgICAgICAgICAgIGxldCBpc0JyYW5jaFxuICAgICAgICAgICAgbGV0IGlzUHJldmlld1xuXG4gICAgICAgICAgICBjb25zdCBvbkV4cGFuZGVyQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgICAgICAgbGV0IG5ld0V4cGFuZGVkID0gXy5jbG9uZShleHBhbmRlZClcbiAgICAgICAgICAgICAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICBuZXdFeHBhbmRlZCA9IF8uc2V0KG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwgZmFsc2UpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3RXhwYW5kZWQgPSBfLnNldChuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIHt9KVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBleHBhbmRlZDogbmV3RXhwYW5kZWQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBvbkV4cGFuZGVkQ2hhbmdlICYmXG4gICAgICAgICAgICAgICAgICAgIG9uRXhwYW5kZWRDaGFuZ2UobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGEgc3RhbmRhcmQgY2VsbFxuICAgICAgICAgICAgbGV0IHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICBjb2x1bW4uQ2VsbCxcbiAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIC8vIFJlc29sdmUgUmVuZGVyZXJzXG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uQWdncmVnYXRlZCB8fFxuICAgICAgICAgICAgICAoIWNvbHVtbi5hZ2dyZWdhdGUgPyBBZ2dyZWdhdGVkQ29tcG9uZW50IDogY29sdW1uLkNlbGwpXG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLkV4cGFuZGVyIHx8IEV4cGFuZGVyQ29tcG9uZW50XG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uUGl2b3RWYWx1ZSB8fCBQaXZvdFZhbHVlQ29tcG9uZW50XG4gICAgICAgICAgICBjb25zdCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCA9XG4gICAgICAgICAgICAgIFBpdm90Q29tcG9uZW50IHx8XG4gICAgICAgICAgICAgIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8UmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICA8UmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZFBpdm90Q29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLlBpdm90IHx8IERlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50XG5cbiAgICAgICAgICAgIC8vIElzIHRoaXMgY2VsbCBleHBhbmRhYmxlP1xuICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQgfHwgY2VsbEluZm8uZXhwYW5kZXIpIHtcbiAgICAgICAgICAgICAgLy8gTWFrZSBpdCBleHBhbmRhYmxlIGJ5IGRlZnVhbHRcbiAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcyA9IHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBvbkV4cGFuZGVyQ2xpY2ssXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gSWYgcGl2b3RlZCwgaGFzIG5vIHN1YlJvd3MsIGFuZCBkb2VzIG5vdCBoYXZlIGEgc3ViQ29tcG9uZW50LCBkbyBub3QgbWFrZSBleHBhbmRhYmxlXG4gICAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsSW5mby5zdWJSb3dzKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIVN1YkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkKSB7XG4gICAgICAgICAgICAgIC8vIElzIHRoaXMgY29sdW1uIGEgYnJhbmNoP1xuICAgICAgICAgICAgICBpc0JyYW5jaCA9XG4gICAgICAgICAgICAgICAgcm93SW5mby5yb3dbcGl2b3RJREtleV0gPT09IGNvbHVtbi5pZCAmJiBjZWxsSW5mby5zdWJSb3dzXG4gICAgICAgICAgICAgIC8vIFNob3VsZCB0aGlzIGNvbHVtbiBiZSBibGFuaz9cbiAgICAgICAgICAgICAgaXNQcmV2aWV3ID1cbiAgICAgICAgICAgICAgICBwaXZvdEJ5LmluZGV4T2YoY29sdW1uLmlkKSA+XG4gICAgICAgICAgICAgICAgICBwaXZvdEJ5LmluZGV4T2Yocm93SW5mby5yb3dbcGl2b3RJREtleV0pICYmIGNlbGxJbmZvLnN1YlJvd3NcbiAgICAgICAgICAgICAgLy8gUGl2b3QgQ2VsbCBSZW5kZXIgT3ZlcnJpZGVcbiAgICAgICAgICAgICAgaWYgKGlzQnJhbmNoKSB7XG4gICAgICAgICAgICAgICAgLy8gaXNQaXZvdFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRQaXZvdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3dbcGl2b3RWYWxLZXldLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHJvd1twaXZvdFZhbEtleV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNQcmV2aWV3KSB7XG4gICAgICAgICAgICAgICAgLy8gU2hvdyB0aGUgcGl2b3QgcHJldmlld1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbEluZm8uYWdncmVnYXRlZCkge1xuICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2VsbEluZm8uZXhwYW5kZXIpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICByb3dbcGl2b3RWYWxLZXldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgaWYgKHBpdm90QnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbEluZm8uZ3JvdXBlZEJ5UGl2b3QpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsSW5mby5zdWJSb3dzICYmICFTdWJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBjZWxsXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICAgICAgICBrZXk9e2kyICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAgICAgICAhc2hvdyAmJiAnLWhpZGRlbicsXG4gICAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlICYmICdydC1leHBhbmRhYmxlJyxcbiAgICAgICAgICAgICAgICAgIChpc0JyYW5jaCB8fCBpc1ByZXZpZXcpICYmICdydC1waXZvdCcsXG4gICAgICAgICAgICAgICAgICBpc0ZpeGVkICYmICctZml4ZWQnLFxuICAgICAgICAgICAgICAgICAgKGlzRml4ZWQgJiYgIXJlc29sdmVkQ2VsbCkgJiYgJy1lbXB0eSdcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgICAgICAgey4uLmludGVyYWN0aW9uUHJvcHN9XG4gICAgICAgICAgICAgICAgey4uLnRkUHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgICB7Li4uY29sdW1uUHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyZXNvbHZlZENlbGx9XG4gICAgICAgICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVHJDb21wb25lbnQ+LFxuICAgICAgICByb3dJbmZvLnN1YlJvd3MgJiZcbiAgICAgICAgICBpc0V4cGFuZGVkICYmXG4gICAgICAgICAgcm93SW5mby5zdWJSb3dzLm1hcCgoZCwgaSkgPT5cbiAgICAgICAgICAgIG1ha2VQYWdlUm93KGQsIGksIHJvd0luZm8ubmVzdGluZ1BhdGgpXG4gICAgICAgICAgKSxcbiAgICAgICAgU3ViQ29tcG9uZW50ICYmXG4gICAgICAgICAgIXJvd0luZm8uc3ViUm93cyAmJlxuICAgICAgICAgIGlzRXhwYW5kZWQgJiZcbiAgICAgICAgICBTdWJDb21wb25lbnQocm93SW5mbyksXG4gICAgICBdXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZFJvdyA9IChyb3csIGkpID0+IHtcbiAgICAgIGNvbnN0IHRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAnLXBhZFJvdycsXG4gICAgICAgICAgICAocGFnZVJvd3MubGVuZ3RoICsgaSkgJSAyID8gJy1ldmVuJyA6ICctb2RkJyxcbiAgICAgICAgICAgIHRyUHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICAgKX1cbiAgICAgICAgICBzdHlsZT17dHJQcm9wcy5zdHlsZSB8fCB7fX1cbiAgICAgICAgPlxuICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZVBhZENvbHVtbil9XG4gICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZENvbHVtbiA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICB0ZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRkUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdG90YWxXaWR0aFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbnNQcm9wc1tpXS53aWR0aFxuICAgICAgICBzdHlsZXMubGVmdCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLmxlZnRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCAhc2hvdyAmJiAnLWhpZGRlbicsIHsgJy1maXhlZCc6IGlzRml4ZWQgfSl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4udGRQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KFBhZFJvd0NvbXBvbmVudCl9XG4gICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbHVtbkZvb3RlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0Rm9vdFByb3BzID0gZ2V0VGZvb3RQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIGNvbnN0IHRGb290VHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGZvb3RUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRmb290Q29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXt0Rm9vdFByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICBzdHlsZT17dEZvb3RQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udEZvb3RQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModEZvb3RUclByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICBzdHlsZT17dEZvb3RUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRGb290VHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUNvbHVtbkZvb3Rlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UZm9vdENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sdW1uRm9vdGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgY29uc3QgdEZvb3RUZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZm9vdFRkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uRm9vdGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRGb290ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgdEZvb3RUZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Gb290ZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4udEZvb3RUZFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Gb290ZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudCAmJiB0b3RhbFdpZHRoXG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLndpZHRoXG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ubGVmdFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsICFzaG93ICYmICctaGlkZGVuJywgeyAnLWZpeGVkJzogaXNGaXhlZCB9KX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxuICAgICAgICAgIHsuLi50Rm9vdFRkUHJvcHMucmVzdH1cbiAgICAgICAgICB7Li4uY29sdW1uRm9vdGVyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uRm9vdGVyLCB7XG4gICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdpbmF0aW9uQ29tcG9uZW50XG4gICAgICAgICAgey4uLnJlc29sdmVkU3RhdGV9XG4gICAgICAgICAgcGFnZXM9e3BhZ2VzfVxuICAgICAgICAgIGNhblByZXZpb3VzPXtjYW5QcmV2aW91c31cbiAgICAgICAgICBjYW5OZXh0PXtjYW5OZXh0fVxuICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5vblBhZ2VDaGFuZ2V9XG4gICAgICAgICAgb25QYWdlU2l6ZUNoYW5nZT17dGhpcy5vblBhZ2VTaXplQ2hhbmdlfVxuICAgICAgICAgIGNsYXNzTmFtZT17cGFnaW5hdGlvblByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICBzdHlsZT17cGFnaW5hdGlvblByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi5wYWdpbmF0aW9uUHJvcHMucmVzdH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCByb290UHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICApXG4gICAgY29uc3QgdGFibGVQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFRhYmxlUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgKVxuICAgIGNvbnN0IHRCb2R5UHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRUYm9keVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIClcbiAgICBjb25zdCBsb2FkaW5nUHJvcHMgPSBnZXRMb2FkaW5nUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgY29uc3Qgbm9EYXRhUHJvcHMgPSBnZXROb0RhdGFQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICBjb25zdCByZXNpemVyUHJvcHMgPSBnZXRSZXNpemVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG5cbiAgICBjb25zdCBkaXNwbGF5Rm9vdGVyVG9wID0gZm9vdGVyUGxhY2VtZW50ID09PSAndG9wJyB8fCBmb290ZXJQbGFjZW1lbnQgPT09ICdib3RoJ1xuICAgIGNvbnN0IGRpc3BsYXlGb290ZXJCb3R0b20gPSBmb290ZXJQbGFjZW1lbnQgPT09ICdib3R0b20nIHx8IGZvb3RlclBsYWNlbWVudCA9PT0gJ2JvdGgnXG5cbiAgICBjb25zdCBtYWtlVGFibGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjb2xHcm91cCA9IG1ha2VDb2xHcm91cCgpO1xuICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IG1ha2VQYWdpbmF0aW9uKClcbiAgICAgIGNvbnN0IGZvb3RlciA9IGhhc0NvbHVtbkZvb3RlciA/IG1ha2VDb2x1bW5Gb290ZXJzKCkgOiBudWxsXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdSZWFjdFRhYmxlJywgY2xhc3NOYW1lLCByb290UHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IHRvdGFsV2lkdGgsXG4gICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgIC4uLnJvb3RQcm9wcy5zdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93UGFnaW5hdGlvbiAmJiBzaG93UGFnaW5hdGlvblRvcFxuICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT0ncGFnaW5hdGlvbi10b3AnPlxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIDxUYWJsZVdyYXBwZXIgd3JhcHBlclJlZj17KGMpID0+IHRoaXMudGFibGVXcmFwcGVyID0gY30+XG4gICAgICAgICAgICA8VGFibGVDb21wb25lbnRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAgIHRhYmxlUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJlc2l6aW5nID8gJ3J0LXJlc2l6aW5nJyA6ICcnXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHN0eWxlPXt0YWJsZVByb3BzLnN0eWxlfVxuICAgICAgICAgICAgICB7Li4udGFibGVQcm9wcy5yZXN0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y29sR3JvdXB9XG4gICAgICAgICAgICAgIHtoYXNIZWFkZXJHcm91cHMgPyBtYWtlSGVhZGVyR3JvdXBzKCkgOiBudWxsfVxuICAgICAgICAgICAgICB7bWFrZUhlYWRlcnMoKX1cbiAgICAgICAgICAgICAge2hhc0ZpbHRlcnMgPyBtYWtlRmlsdGVycygpIDogbnVsbH1cbiAgICAgICAgICAgICAge2Rpc3BsYXlGb290ZXJUb3AgJiYgZm9vdGVyfVxuICAgICAgICAgICAgICA8VGJvZHlDb21wb25lbnRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModEJvZHlQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt0Qm9keVByb3BzLnN0eWxlfVxuICAgICAgICAgICAgICAgIHsuLi50Qm9keVByb3BzLnJlc3R9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cGFnZVJvd3MubWFwKChkLCBpKSA9PiBtYWtlUGFnZVJvdyhkLCBpKSl9XG4gICAgICAgICAgICAgICAge3BhZFJvd3MubWFwKG1ha2VQYWRSb3cpfVxuICAgICAgICAgICAgICA8L1Rib2R5Q29tcG9uZW50PlxuICAgICAgICAgICAgICB7ZGlzcGxheUZvb3RlckJvdHRvbSAmJiBmb290ZXJ9XG4gICAgICAgICAgICA8L1RhYmxlQ29tcG9uZW50PlxuICAgICAgICAgIDwvVGFibGVXcmFwcGVyPlxuICAgICAgICAgIHtzaG93UGFnaW5hdGlvbiAmJiBzaG93UGFnaW5hdGlvbkJvdHRvbVxuICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT0ncGFnaW5hdGlvbi1ib3R0b20nPlxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIHshcGFnZVJvd3MubGVuZ3RoICYmXG4gICAgICAgICAgICA8Tm9EYXRhQ29tcG9uZW50IHsuLi5ub0RhdGFQcm9wc30+XG4gICAgICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChub0RhdGFUZXh0KX1cbiAgICAgICAgICAgIDwvTm9EYXRhQ29tcG9uZW50Pn1cbiAgICAgICAgICA8TG9hZGluZ0NvbXBvbmVudFxuICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgIGxvYWRpbmdUZXh0PXtsb2FkaW5nVGV4dH1cbiAgICAgICAgICAgIHsuLi5sb2FkaW5nUHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gY2hpbGRQcm9wcyBhcmUgb3B0aW9uYWxseSBwYXNzZWQgdG8gYSBmdW5jdGlvbi1hcy1hLWNoaWxkXG4gICAgcmV0dXJuIGNoaWxkcmVuID8gY2hpbGRyZW4oZmluYWxTdGF0ZSwgbWFrZVRhYmxlLCB0aGlzKSA6IG1ha2VUYWJsZSgpXG4gIH1cbn1cbiJdfQ==