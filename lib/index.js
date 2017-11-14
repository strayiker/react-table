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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

      var pageRows = sortedData;
      var startRow = 0;
      var endRow = sortedData.length;

      if (manual) {
        pageRows = resolvedData;
      } else if (pageSize > 0) {
        startRow = pageSize * page;
        endRow = startRow + pageSize;
        pageRows = sortedData.slice(startRow, endRow);
      }

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

        var rows = [_react2.default.createElement(
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
        )];

        if (rowInfo.subRows && isExpanded) {
          rowInfo.subRows.forEach(function (d, i) {
            return rows.push.apply(rows, _toConsumableArray(makePageRow(d, i, rowInfo.nestingPath)));
          });
        } else if (SubComponent && !rowInfo.subRows && isExpanded) {
          rows.push(SubComponent(rowInfo));
        }

        return rows;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0IiwicmVzb2x2ZWRTdGF0ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJnZXRQcm9wcyIsImdldFRhYmxlUHJvcHMiLCJnZXRDb2xHcm91cENvbFByb3BzIiwiZ2V0VGhlYWRHcm91cFByb3BzIiwiZ2V0VGhlYWRHcm91cFRyUHJvcHMiLCJnZXRUaGVhZEdyb3VwVGhQcm9wcyIsImdldFRoZWFkUHJvcHMiLCJnZXRUaGVhZFRyUHJvcHMiLCJnZXRUaGVhZFRoUHJvcHMiLCJnZXRUaGVhZEZpbHRlclByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJUclByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJUaFByb3BzIiwiZ2V0VGJvZHlQcm9wcyIsImdldFRyUHJvcHMiLCJnZXRUZFByb3BzIiwiZ2V0VGZvb3RQcm9wcyIsImdldFRmb290VHJQcm9wcyIsImdldFRmb290VGRQcm9wcyIsImdldFBhZ2luYXRpb25Qcm9wcyIsImdldExvYWRpbmdQcm9wcyIsImdldE5vRGF0YVByb3BzIiwiZ2V0UmVzaXplclByb3BzIiwic2hvd1BhZ2luYXRpb24iLCJzaG93UGFnaW5hdGlvblRvcCIsInNob3dQYWdpbmF0aW9uQm90dG9tIiwic2hvd1NvcnRPcmRlciIsIm1hbnVhbCIsImxvYWRpbmdUZXh0Iiwibm9EYXRhVGV4dCIsInNvcnRhYmxlIiwicmVzaXphYmxlIiwiZmlsdGVyYWJsZSIsImZvb3RlclBsYWNlbWVudCIsInBpdm90SURLZXkiLCJwaXZvdFZhbEtleSIsInBpdm90QnkiLCJzdWJSb3dzS2V5IiwiYWdncmVnYXRlZEtleSIsIm9yaWdpbmFsS2V5IiwiaW5kZXhLZXkiLCJncm91cGVkQnlQaXZvdEtleSIsImZpeGVkQ29sdW1uc0NvdW50IiwibG9hZGluZyIsInBhZ2VzIiwib25FeHBhbmRlZENoYW5nZSIsIlRhYmxlV3JhcHBlciIsIlRhYmxlQ29tcG9uZW50IiwiVGhlYWRDb21wb25lbnQiLCJUYm9keUNvbXBvbmVudCIsIlRyQ29tcG9uZW50IiwiVGhDb21wb25lbnQiLCJUZENvbXBvbmVudCIsIlRmb290Q29tcG9uZW50IiwiUGFnaW5hdGlvbkNvbXBvbmVudCIsIkxvYWRpbmdDb21wb25lbnQiLCJTdWJDb21wb25lbnQiLCJOb0RhdGFDb21wb25lbnQiLCJSZXNpemVyQ29tcG9uZW50IiwiU29ydE9yZGVyQ29tcG9uZW50IiwiRXhwYW5kZXJDb21wb25lbnQiLCJQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RDb21wb25lbnQiLCJBZ2dyZWdhdGVkQ29tcG9uZW50IiwiRmlsdGVyQ29tcG9uZW50IiwiUGFkUm93Q29tcG9uZW50IiwicmVzb2x2ZWREYXRhIiwiYWxsVmlzaWJsZUNvbHVtbnMiLCJoZWFkZXJHcm91cHMiLCJoYXNIZWFkZXJHcm91cHMiLCJzb3J0ZWREYXRhIiwidG90YWxXaWR0aCIsIndpZHRoIiwicGFnZVJvd3MiLCJzdGFydFJvdyIsImVuZFJvdyIsImxlbmd0aCIsInNsaWNlIiwibWluUm93cyIsInBhZFJvd3MiLCJyYW5nZSIsIk1hdGgiLCJtYXgiLCJoYXNDb2x1bW5Gb290ZXIiLCJzb21lIiwiZCIsIkZvb3RlciIsImhhc0ZpbHRlcnMiLCJyZWN1cnNlUm93c1ZpZXdJbmRleCIsInJvd3MiLCJwYXRoIiwiaW5kZXgiLCJtYXAiLCJyb3ciLCJpIiwicm93V2l0aFZpZXdJbmRleCIsIl92aWV3SW5kZXgiLCJuZXdQYXRoIiwiY29uY2F0IiwiZ2V0IiwiY2FuUHJldmlvdXMiLCJjYW5OZXh0Iiwicm93SW5kZXgiLCJmaW5hbFN0YXRlIiwiZml4ZWRDb2x1bW5zUHJvcHMiLCJyYXdDb2x1bW5zV2lkdGgiLCJmbG9vckNvbHVtbnNXaWR0aCIsIm1ha2VDb2xHcm91cCIsIm1ha2VDb2wiLCJjb2x1bW4iLCJpc0R1bW15IiwiaXNGaXhlZCIsImlzSW5uZXJGaXhlZCIsImlzTGFzdEZpeGVkIiwicmVzaXplZENvbCIsImZpbmQiLCJ4IiwiaWQiLCJjb2xncm91cENvbFByb3BzIiwic3BsaXRQcm9wcyIsInVuZGVmaW5lZCIsImNvbHVtbkNvbGdyb3VwQ29sUHJvcHMiLCJjbGFzc2VzIiwiY29sR3JvdXBDb2xDbGFzc05hbWUiLCJzdHlsZXMiLCJjb2xHcm91cENvbFN0eWxlIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsImdldEZpcnN0RGVmaW5lZCIsInZhbHVlIiwiaW5zaWRlV2lkdGgiLCJ3aWR0aElzUGVyY2VudHMiLCJpc1BlcmNlbnRzIiwibWluV2lkdGhJc1BlcmNlbnRzIiwibWF4V2lkdGhJc1BlcmNlbnRzIiwid2lkdGhWYWx1ZSIsInBhcnNlSW50IiwibWluV2lkdGhWYWx1ZSIsIm1heFdpZHRoVmFsdWUiLCJwZXJjZW50c1RvUHgiLCJjbGFtcCIsImZsb29yIiwiZGlmZiIsImxlZnQiLCJyZWR1Y2UiLCJpdGVtIiwicHVzaCIsIm1ha2VIZWFkZXJHcm91cHMiLCJ0aGVhZEdyb3VwUHJvcHMiLCJ0aGVhZEdyb3VwVHJQcm9wcyIsInJlc3QiLCJtYWtlSGVhZGVyR3JvdXAiLCJ0aGVhZEdyb3VwVGhQcm9wcyIsImNvbHVtbkhlYWRlclByb3BzIiwiZ2V0SGVhZGVyUHJvcHMiLCJoZWFkZXJDbGFzc05hbWUiLCJoZWFkZXJTdHlsZSIsImNvbFNwYW4iLCJjb2x1bW5zIiwiY29udGVudCIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsIkhlYWRlciIsImRhdGEiLCJtYWtlSGVhZGVycyIsInRoZWFkUHJvcHMiLCJ0aGVhZFRyUHJvcHMiLCJtYWtlSGVhZGVyIiwic29ydCIsInNob3ciLCJ0aGVhZFRoUHJvcHMiLCJpc1Jlc2l6YWJsZSIsInJlc2l6ZXIiLCJlIiwicmVzaXplclByb3BzIiwic29ydE9yZGVyIiwiZGVzYyIsImlzU29ydGFibGUiLCJpbmNsdWRlcyIsInNoaWZ0S2V5IiwibWFrZUZpbHRlcnMiLCJ0aGVhZEZpbHRlclByb3BzIiwidGhlYWRGaWx0ZXJUclByb3BzIiwibWFrZUZpbHRlciIsInRoZWFkRmlsdGVyVGhQcm9wcyIsImZpbHRlciIsIlJlc29sdmVkRmlsdGVyQ29tcG9uZW50IiwiRmlsdGVyIiwiaXNGaWx0ZXJhYmxlIiwib25DaGFuZ2UiLCJtYWtlUGFnZVJvdyIsInJvd0luZm8iLCJvcmlnaW5hbCIsInZpZXdJbmRleCIsImxldmVsIiwibmVzdGluZ1BhdGgiLCJhZ2dyZWdhdGVkIiwiZ3JvdXBlZEJ5UGl2b3QiLCJzdWJSb3dzIiwiaXNFeHBhbmRlZCIsInRyUHJvcHMiLCJqb2luIiwiaTIiLCJ0ZFByb3BzIiwiY29sdW1uUHJvcHMiLCJjZWxsSW5mbyIsInBpdm90ZWQiLCJleHBhbmRlciIsImludGVyYWN0aW9uUHJvcHMiLCJpc0JyYW5jaCIsImlzUHJldmlldyIsIm9uRXhwYW5kZXJDbGljayIsIm5ld0V4cGFuZGVkIiwiY2xvbmUiLCJzZXQiLCJzZXRTdGF0ZVdpdGhEYXRhIiwicmVzb2x2ZWRDZWxsIiwiQ2VsbCIsIlJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCIsIkFnZ3JlZ2F0ZWQiLCJhZ2dyZWdhdGUiLCJSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50IiwiRXhwYW5kZXIiLCJSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQiLCJQaXZvdFZhbHVlIiwiRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnQiLCJSZXNvbHZlZFBpdm90Q29tcG9uZW50IiwiUGl2b3QiLCJleHBhbmRhYmxlIiwib25DbGljayIsImluZGV4T2YiLCJmb3JFYWNoIiwibWFrZVBhZFJvdyIsIm1ha2VQYWRDb2x1bW4iLCJtYWtlQ29sdW1uRm9vdGVycyIsInRGb290UHJvcHMiLCJ0Rm9vdFRyUHJvcHMiLCJtYWtlQ29sdW1uRm9vdGVyIiwidEZvb3RUZFByb3BzIiwiY29sdW1uRm9vdGVyUHJvcHMiLCJnZXRGb290ZXJQcm9wcyIsIm1ha2VQYWdpbmF0aW9uIiwicGFnaW5hdGlvblByb3BzIiwicm9vdFByb3BzIiwidGFibGVQcm9wcyIsInRCb2R5UHJvcHMiLCJsb2FkaW5nUHJvcHMiLCJub0RhdGFQcm9wcyIsImRpc3BsYXlGb290ZXJUb3AiLCJkaXNwbGF5Rm9vdGVyQm90dG9tIiwibWFrZVRhYmxlIiwiY29sR3JvdXAiLCJwYWdpbmF0aW9uIiwiZm9vdGVyIiwiYyIsInRhYmxlV3JhcHBlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQUpBOzs7QUFNTyxJQUFNQSx3RUFBTjs7SUFFY0MsVTs7O0FBR25CLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBR2pCLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLE9BQXJCO0FBQ0EsVUFB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QWdDLElBQWhDLENBQVgsR0FBbURBLFdBQTFEO0FBQ0Q7Ozs7RUF0Z0NxQyx1QkFBUSwwQ0FBUixDOztBQUFuQjdSLFUsQ0FDWm1TLFk7a0JBRFluUyxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbi8vXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IExpZmVjeWNsZSBmcm9tICcuL2xpZmVjeWNsZSdcbmltcG9ydCBNZXRob2RzIGZyb20gJy4vbWV0aG9kcydcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0UHJvcHMnXG5cbmV4cG9ydCBjb25zdCBSZWFjdFRhYmxlRGVmYXVsdHMgPSBkZWZhdWx0UHJvcHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUYWJsZSBleHRlbmRzIE1ldGhvZHMoTGlmZWN5Y2xlKENvbXBvbmVudCkpIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wc1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5nZXRSZXNvbHZlZFN0YXRlID0gdGhpcy5nZXRSZXNvbHZlZFN0YXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmdldERhdGFNb2RlbCA9IHRoaXMuZ2V0RGF0YU1vZGVsLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFNvcnRlZERhdGEgPSB0aGlzLmdldFNvcnRlZERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZmlyZUZldGNoRGF0YSA9IHRoaXMuZmlyZUZldGNoRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRQcm9wT3JTdGF0ZSA9IHRoaXMuZ2V0UHJvcE9yU3RhdGUuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0U3RhdGVPclByb3AgPSB0aGlzLmdldFN0YXRlT3JQcm9wLmJpbmQodGhpcylcbiAgICB0aGlzLmZpbHRlckRhdGEgPSB0aGlzLmZpbHRlckRhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuc29ydERhdGEgPSB0aGlzLnNvcnREYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmdldE1pblJvd3MgPSB0aGlzLmdldE1pblJvd3MuYmluZCh0aGlzKVxuICAgIHRoaXMub25QYWdlQ2hhbmdlID0gdGhpcy5vblBhZ2VDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25QYWdlU2l6ZUNoYW5nZSA9IHRoaXMub25QYWdlU2l6ZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zb3J0Q29sdW1uID0gdGhpcy5zb3J0Q29sdW1uLmJpbmQodGhpcylcbiAgICB0aGlzLmZpbHRlckNvbHVtbiA9IHRoaXMuZmlsdGVyQ29sdW1uLmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0ID0gdGhpcy5yZXNpemVDb2x1bW5TdGFydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5FbmQgPSB0aGlzLnJlc2l6ZUNvbHVtbkVuZC5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcgPSB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZy5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGFnZTogMCxcbiAgICAgIHBhZ2VTaXplOiBwcm9wcy5kZWZhdWx0UGFnZVNpemUsXG4gICAgICBzb3J0ZWQ6IHByb3BzLmRlZmF1bHRTb3J0ZWQsXG4gICAgICBleHBhbmRlZDogcHJvcHMuZGVmYXVsdEV4cGFuZGVkLFxuICAgICAgZmlsdGVyZWQ6IHByb3BzLmRlZmF1bHRGaWx0ZXJlZCxcbiAgICAgIHJlc2l6ZWQ6IHByb3BzLmRlZmF1bHRSZXNpemVkLFxuICAgICAgY3VycmVudGx5UmVzaXppbmc6IGZhbHNlLFxuICAgICAgc2tpcE5leHRTb3J0OiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpXG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIGdldFByb3BzLFxuICAgICAgZ2V0VGFibGVQcm9wcyxcbiAgICAgIGdldENvbEdyb3VwQ29sUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkR3JvdXBUaFByb3BzLFxuICAgICAgZ2V0VGhlYWRQcm9wcyxcbiAgICAgIGdldFRoZWFkVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkRmlsdGVyUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclRoUHJvcHMsXG4gICAgICBnZXRUYm9keVByb3BzLFxuICAgICAgZ2V0VHJQcm9wcyxcbiAgICAgIGdldFRkUHJvcHMsXG4gICAgICBnZXRUZm9vdFByb3BzLFxuICAgICAgZ2V0VGZvb3RUclByb3BzLFxuICAgICAgZ2V0VGZvb3RUZFByb3BzLFxuICAgICAgZ2V0UGFnaW5hdGlvblByb3BzLFxuICAgICAgZ2V0TG9hZGluZ1Byb3BzLFxuICAgICAgZ2V0Tm9EYXRhUHJvcHMsXG4gICAgICBnZXRSZXNpemVyUHJvcHMsXG4gICAgICBzaG93UGFnaW5hdGlvbixcbiAgICAgIHNob3dQYWdpbmF0aW9uVG9wLFxuICAgICAgc2hvd1BhZ2luYXRpb25Cb3R0b20sXG4gICAgICBzaG93U29ydE9yZGVyLFxuICAgICAgbWFudWFsLFxuICAgICAgbG9hZGluZ1RleHQsXG4gICAgICBub0RhdGFUZXh0LFxuICAgICAgc29ydGFibGUsXG4gICAgICByZXNpemFibGUsXG4gICAgICBmaWx0ZXJhYmxlLFxuICAgICAgZm9vdGVyUGxhY2VtZW50LFxuICAgICAgLy8gUGl2b3RpbmcgU3RhdGVcbiAgICAgIHBpdm90SURLZXksXG4gICAgICBwaXZvdFZhbEtleSxcbiAgICAgIHBpdm90QnksXG4gICAgICBzdWJSb3dzS2V5LFxuICAgICAgYWdncmVnYXRlZEtleSxcbiAgICAgIG9yaWdpbmFsS2V5LFxuICAgICAgaW5kZXhLZXksXG4gICAgICBncm91cGVkQnlQaXZvdEtleSxcbiAgICAgIC8vIEZpeGVkXG4gICAgICBmaXhlZENvbHVtbnNDb3VudCxcbiAgICAgIC8vIFN0YXRlXG4gICAgICBsb2FkaW5nLFxuICAgICAgcGFnZVNpemUsXG4gICAgICBwYWdlLFxuICAgICAgc29ydGVkLFxuICAgICAgZmlsdGVyZWQsXG4gICAgICByZXNpemVkLFxuICAgICAgZXhwYW5kZWQsXG4gICAgICBwYWdlcyxcbiAgICAgIG9uRXhwYW5kZWRDaGFuZ2UsXG4gICAgICAvLyBDb21wb25lbnRzXG4gICAgICBUYWJsZVdyYXBwZXIsXG4gICAgICBUYWJsZUNvbXBvbmVudCxcbiAgICAgIFRoZWFkQ29tcG9uZW50LFxuICAgICAgVGJvZHlDb21wb25lbnQsXG4gICAgICBUckNvbXBvbmVudCxcbiAgICAgIFRoQ29tcG9uZW50LFxuICAgICAgVGRDb21wb25lbnQsXG4gICAgICBUZm9vdENvbXBvbmVudCxcbiAgICAgIFBhZ2luYXRpb25Db21wb25lbnQsXG4gICAgICBMb2FkaW5nQ29tcG9uZW50LFxuICAgICAgU3ViQ29tcG9uZW50LFxuICAgICAgTm9EYXRhQ29tcG9uZW50LFxuICAgICAgUmVzaXplckNvbXBvbmVudCxcbiAgICAgIFNvcnRPcmRlckNvbXBvbmVudCxcbiAgICAgIEV4cGFuZGVyQ29tcG9uZW50LFxuICAgICAgUGl2b3RWYWx1ZUNvbXBvbmVudCxcbiAgICAgIFBpdm90Q29tcG9uZW50LFxuICAgICAgQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgIEZpbHRlckNvbXBvbmVudCxcbiAgICAgIFBhZFJvd0NvbXBvbmVudCxcbiAgICAgIC8vIERhdGEgbW9kZWxcbiAgICAgIHJlc29sdmVkRGF0YSxcbiAgICAgIGFsbFZpc2libGVDb2x1bW5zLFxuICAgICAgaGVhZGVyR3JvdXBzLFxuICAgICAgaGFzSGVhZGVyR3JvdXBzLFxuICAgICAgLy8gU29ydGVkIERhdGFcbiAgICAgIHNvcnRlZERhdGEsXG4gICAgICBjdXJyZW50bHlSZXNpemluZyxcbiAgICAgIHdpZHRoOiB0b3RhbFdpZHRoLFxuICAgIH0gPSByZXNvbHZlZFN0YXRlXG5cbiAgICAvLyBQYWdpbmF0aW9uXG4gICAgbGV0IHBhZ2VSb3dzID0gc29ydGVkRGF0YTtcbiAgICBsZXQgc3RhcnRSb3cgPSAwO1xuICAgIGxldCBlbmRSb3cgPSBzb3J0ZWREYXRhLmxlbmd0aDtcblxuICAgIGlmIChtYW51YWwpIHtcbiAgICAgIHBhZ2VSb3dzID0gcmVzb2x2ZWREYXRhO1xuICAgIH0gZWxzZSBpZiAocGFnZVNpemUgPiAwKSB7XG4gICAgICBzdGFydFJvdyA9IHBhZ2VTaXplICogcGFnZVxuICAgICAgZW5kUm93ID0gc3RhcnRSb3cgKyBwYWdlU2l6ZVxuICAgICAgcGFnZVJvd3MgPSBzb3J0ZWREYXRhLnNsaWNlKHN0YXJ0Um93LCBlbmRSb3cpXG4gICAgfVxuXG4gICAgY29uc3QgbWluUm93cyA9IHRoaXMuZ2V0TWluUm93cygpXG4gICAgY29uc3QgcGFkUm93cyA9IF8ucmFuZ2UoTWF0aC5tYXgobWluUm93cyAtIHBhZ2VSb3dzLmxlbmd0aCwgMCkpXG5cbiAgICBjb25zdCBoYXNDb2x1bW5Gb290ZXIgPSBhbGxWaXNpYmxlQ29sdW1ucy5zb21lKGQgPT4gZC5Gb290ZXIpXG4gICAgY29uc3QgaGFzRmlsdGVycyA9IGZpbHRlcmFibGUgfHwgYWxsVmlzaWJsZUNvbHVtbnMuc29tZShkID0+IGQuZmlsdGVyYWJsZSlcblxuICAgIGNvbnN0IHJlY3Vyc2VSb3dzVmlld0luZGV4ID0gKHJvd3MsIHBhdGggPSBbXSwgaW5kZXggPSAtMSkgPT4ge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHJvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICAgIGluZGV4KytcbiAgICAgICAgICAgIGNvbnN0IHJvd1dpdGhWaWV3SW5kZXggPSB7XG4gICAgICAgICAgICAgIC4uLnJvdyxcbiAgICAgICAgICAgICAgX3ZpZXdJbmRleDogaW5kZXgsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5jb25jYXQoW2ldKVxuICAgICAgICAgICAgaWYgKHJvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0gJiYgXy5nZXQoZXhwYW5kZWQsIG5ld1BhdGgpKSB7XG4gICAgICAgICAgICAgIDtbcm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSwgaW5kZXhdID0gcmVjdXJzZVJvd3NWaWV3SW5kZXgoXG4gICAgICAgICAgICAgICAgcm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSxcbiAgICAgICAgICAgICAgICBuZXdQYXRoLFxuICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3dXaXRoVmlld0luZGV4XG4gICAgICAgICAgfSksXG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICA7W3BhZ2VSb3dzXSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KHBhZ2VSb3dzKVxuXG4gICAgY29uc3QgY2FuUHJldmlvdXMgPSBwYWdlID4gMFxuICAgIGNvbnN0IGNhbk5leHQgPSBwYWdlICsgMSA8IHBhZ2VzXG5cbiAgICBsZXQgcm93SW5kZXggPSAtMVxuXG4gICAgY29uc3QgZmluYWxTdGF0ZSA9IHtcbiAgICAgIC4uLnJlc29sdmVkU3RhdGUsXG4gICAgICBzdGFydFJvdyxcbiAgICAgIGVuZFJvdyxcbiAgICAgIHBhZ2VSb3dzLFxuICAgICAgbWluUm93cyxcbiAgICAgIHBhZFJvd3MsXG4gICAgICBoYXNDb2x1bW5Gb290ZXIsXG4gICAgICBjYW5QcmV2aW91cyxcbiAgICAgIGNhbk5leHQsXG4gICAgfVxuXG4gICAgY29uc3QgZml4ZWRDb2x1bW5zUHJvcHMgPSBbXTtcbiAgICBsZXQgcmF3Q29sdW1uc1dpZHRoID0gMFxuICAgIGxldCBmbG9vckNvbHVtbnNXaWR0aCA9IDBcblxuICAgIC8vIFZpc3VhbCBDb21wb25lbnRzXG5cbiAgICBjb25zdCBtYWtlQ29sR3JvdXAgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Y29sZ3JvdXA+XG4gICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlQ29sKX1cbiAgICAgICAgPC9jb2xncm91cD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgaXNEdW1teSA9IGkgPT09IGFsbFZpc2libGVDb2x1bW5zLmxlbmd0aCAtIDFcbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnRcbiAgICAgIGNvbnN0IGlzSW5uZXJGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudCAtIDFcbiAgICAgIGNvbnN0IGlzTGFzdEZpeGVkID0gaSA9PT0gZml4ZWRDb2x1bW5zQ291bnQgLSAxXG5cbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG5cbiAgICAgIGNvbnN0IGNvbGdyb3VwQ29sUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldENvbEdyb3VwQ29sUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Db2xncm91cENvbFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0Q29sR3JvdXBDb2xQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmNvbEdyb3VwQ29sQ2xhc3NOYW1lLFxuICAgICAgICBjb2xncm91cENvbFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uQ29sZ3JvdXBDb2xQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmNvbEdyb3VwQ29sU3R5bGUsXG4gICAgICAgIC4uLmNvbGdyb3VwQ29sUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkNvbGdyb3VwQ29sUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGxldCBtaW5XaWR0aCA9IGNvbHVtbi5taW5XaWR0aFxuICAgICAgbGV0IG1heFdpZHRoID0gY29sdW1uLm1heFdpZHRoXG4gICAgICBsZXQgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBtaW5XaWR0aCxcbiAgICAgICAgMFxuICAgICAgKVxuXG4gICAgICAvLyBjYWxjdWxhdGUgcHhcbiAgICAgIGlmICh0b3RhbFdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGluc2lkZVdpZHRoID0gdG90YWxXaWR0aCAtIDIgLy8gU3VidHJhY3QgYm9yZGVyc1xuICAgICAgICBjb25zdCB3aWR0aElzUGVyY2VudHMgPSBfLmlzUGVyY2VudHMod2lkdGgpXG4gICAgICAgIGNvbnN0IG1pbldpZHRoSXNQZXJjZW50cyA9IF8uaXNQZXJjZW50cyhtaW5XaWR0aClcbiAgICAgICAgY29uc3QgbWF4V2lkdGhJc1BlcmNlbnRzID0gXy5pc1BlcmNlbnRzKG1heFdpZHRoKVxuXG4gICAgICAgIGNvbnN0IHdpZHRoVmFsdWUgPSBwYXJzZUludCh3aWR0aCwgMTApXG4gICAgICAgIGNvbnN0IG1pbldpZHRoVmFsdWUgPSBtaW5XaWR0aCAmJiBwYXJzZUludChtaW5XaWR0aCwgMTApXG4gICAgICAgIGNvbnN0IG1heFdpZHRoVmFsdWUgPSBtYXhXaWR0aCAmJiBwYXJzZUludChtYXhXaWR0aCwgMTApXG5cbiAgICAgICAgd2lkdGggPSB3aWR0aElzUGVyY2VudHNcbiAgICAgICAgICA/IF8ucGVyY2VudHNUb1B4KHdpZHRoVmFsdWUsIGluc2lkZVdpZHRoKVxuICAgICAgICAgIDogd2lkdGhWYWx1ZVxuXG4gICAgICAgIG1pbldpZHRoID0gbWluV2lkdGhJc1BlcmNlbnRzXG4gICAgICAgICAgPyBfLnBlcmNlbnRzVG9QeChtaW5XaWR0aFZhbHVlLCBpbnNpZGVXaWR0aClcbiAgICAgICAgICA6IG1pbldpZHRoVmFsdWVcblxuICAgICAgICBtYXhXaWR0aCA9IG1heFdpZHRoSXNQZXJjZW50c1xuICAgICAgICAgID8gXy5wZXJjZW50c1RvUHgobWF4V2lkdGhWYWx1ZSwgaW5zaWRlV2lkdGgpXG4gICAgICAgICAgOiBtYXhXaWR0aFZhbHVlXG5cbiAgICAgICAgd2lkdGggPSBfLmNsYW1wKHdpZHRoLCBtaW5XaWR0aCwgbWF4V2lkdGgpXG5cbiAgICAgICAgcmF3Q29sdW1uc1dpZHRoICs9IHdpZHRoXG4gICAgICAgIHdpZHRoID0gTWF0aC5mbG9vcih3aWR0aClcbiAgICAgICAgZmxvb3JDb2x1bW5zV2lkdGggKz0gd2lkdGhcblxuICAgICAgICBjb25zdCBkaWZmID0gTWF0aC5mbG9vcihyYXdDb2x1bW5zV2lkdGggLSBmbG9vckNvbHVtbnNXaWR0aClcblxuICAgICAgICBpZiAoZGlmZiA+PSAxKSB7XG4gICAgICAgICAgd2lkdGggKz0gZGlmZlxuICAgICAgICAgIGZsb29yQ29sdW1uc1dpZHRoICs9IGRpZmZcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgICAgY29uc3QgbGVmdCA9IGZpeGVkQ29sdW1uc1Byb3BzLnJlZHVjZSgodmFsdWUsIGl0ZW0pID0+IHZhbHVlICsgaXRlbS53aWR0aCwgMClcbiAgICAgICAgICBmaXhlZENvbHVtbnNQcm9wcy5wdXNoKHsgd2lkdGgsIGxlZnQgfSlcblxuICAgICAgICAgIGlmIChpc0xhc3RGaXhlZCkge1xuICAgICAgICAgICAgd2lkdGggKz0gbGVmdFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0lubmVyRml4ZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGNvbFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3J0LWNvbGdyb3VwLWNvbCcsIGNsYXNzZXMsIHsgJy1kdW1teSc6IGlzRHVtbXkgfSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIHdpZHRoOiAhaXNEdW1teSA/IHdpZHRoIDogdW5kZWZpbmVkLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlckdyb3VwcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRHcm91cFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctaGVhZGVyR3JvdXBzJywgdGhlYWRHcm91cFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3RoZWFkR3JvdXBQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udGhlYWRHcm91cFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRHcm91cFRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkR3JvdXBUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkR3JvdXBUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAobWFrZUhlYWRlckdyb3VwKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXJHcm91cCA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkR3JvdXBUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRHcm91cFRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2xTcGFuID0gY29sdW1uLmNvbHVtbnMubGVuZ3RoXG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkR3JvdXBUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICAgIGNvbFNwYW4sXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRHVtbXkgPSBpID09PSBoZWFkZXJHcm91cHMubGVuZ3RoIC0gMVxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudCAmJiB0b3RhbFdpZHRoXG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLndpZHRoXG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ubGVmdFxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb250ZW50ID0gXy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkhlYWRlciwge1xuICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgeyAnLWR1bW15JzogaXNEdW1teSwgJy1lbXB0eSc6ICFjb250ZW50LCAnLWZpeGVkJzogaXNGaXhlZCB9KX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1oZWFkZXInLCB0aGVhZFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3RoZWFkUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRoZWFkUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZFRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VIZWFkZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHNvcnQgPSBzb3J0ZWQuZmluZChkID0+IGQuaWQgPT09IGNvbHVtbi5pZClcbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHRoZWFkVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgdGhlYWRUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzUmVzaXphYmxlID0gXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnJlc2l6YWJsZSwgcmVzaXphYmxlLCBmYWxzZSlcbiAgICAgIGNvbnN0IHJlc2l6ZXIgPSBpc1Jlc2l6YWJsZVxuICAgICAgICA/ICg8UmVzaXplckNvbXBvbmVudFxuICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoY29sdW1uLCBlLCBmYWxzZSl9XG4gICAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoY29sdW1uLCBlLCB0cnVlKX1cbiAgICAgICAgICB7Li4ucmVzaXplclByb3BzfVxuICAgICAgICAvPilcbiAgICAgICAgOiBudWxsXG5cbiAgICAgIGNvbnN0IHNvcnRPcmRlciA9IHNvcnQgJiYgc2hvd1NvcnRPcmRlclxuICAgICAgICA/IDxTb3J0T3JkZXJDb21wb25lbnQgZGVzYz17c29ydC5kZXNjfSAvPlxuICAgICAgICA6IG51bGw7XG5cbiAgICAgIGNvbnN0IGlzU29ydGFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChjb2x1bW4uc29ydGFibGUsIHNvcnRhYmxlLCBmYWxzZSlcbiAgICAgIGNvbnN0IGlzRHVtbXkgPSBpID09PSBhbGxWaXNpYmxlQ29sdW1ucy5sZW5ndGggLSAxXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA8IGZpeGVkQ29sdW1uc0NvdW50ICYmIHRvdGFsV2lkdGhcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ud2lkdGhcbiAgICAgICAgc3R5bGVzLmxlZnQgPSBmaXhlZENvbHVtbnNQcm9wc1tpXS5sZWZ0XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgJ3J0LXJlc2l6YWJsZS1oZWFkZXInLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnLWN1cnNvci1wb2ludGVyJzogaXNTb3J0YWJsZSxcbiAgICAgICAgICAgICAgJy1oaWRkZW4nOiAhc2hvdyxcbiAgICAgICAgICAgICAgJy1kdW1teSc6IGlzRHVtbXksXG4gICAgICAgICAgICAgICctZml4ZWQnOiBpc0ZpeGVkLFxuICAgICAgICAgICAgICAncnQtaGVhZGVyLXBpdm90JzogcGl2b3RCeSAmJiBwaXZvdEJ5LnNsaWNlKDAsIC0xKS5pbmNsdWRlcyhjb2x1bW4uaWQpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB0b2dnbGVTb3J0PXtlID0+IHtcbiAgICAgICAgICAgIGlzU29ydGFibGUgJiYgdGhpcy5zb3J0Q29sdW1uKGNvbHVtbiwgZS5zaGlmdEtleSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdydC1yZXNpemFibGUtaGVhZGVyLWNvbnRlbnQnPlxuICAgICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5IZWFkZXIsIHtcbiAgICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAge3NvcnRPcmRlcn1cbiAgICAgICAgICB7cmVzaXplcn1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlRmlsdGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZEZpbHRlclRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWZpbHRlcnMnLCB0aGVhZEZpbHRlclByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3RoZWFkRmlsdGVyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRoZWFkRmlsdGVyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZEZpbHRlclRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkRmlsdGVyVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZEZpbHRlclRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VGaWx0ZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUZpbHRlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgdGhlYWRGaWx0ZXJUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRGaWx0ZXJUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRGaWx0ZXJUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbHRlciA9IGZpbHRlcmVkLmZpbmQoZmlsdGVyID0+IGZpbHRlci5pZCA9PT0gY29sdW1uLmlkKVxuXG4gICAgICBjb25zdCBSZXNvbHZlZEZpbHRlckNvbXBvbmVudCA9IGNvbHVtbi5GaWx0ZXIgfHwgRmlsdGVyQ29tcG9uZW50XG5cbiAgICAgIGNvbnN0IGlzRmlsdGVyYWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICBjb2x1bW4uZmlsdGVyYWJsZSxcbiAgICAgICAgZmlsdGVyYWJsZSxcbiAgICAgICAgZmFsc2VcbiAgICAgIClcblxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudCAmJiB0b3RhbFdpZHRoXG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLndpZHRoXG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ubGVmdFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsIHsgJy1maXhlZCc6IGlzRml4ZWQsICctZW1wdHknOiAhaXNGaWx0ZXJhYmxlIH0pfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7aXNGaWx0ZXJhYmxlXG4gICAgICAgICAgICA/IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICBSZXNvbHZlZEZpbHRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IHRoaXMuZmlsdGVyQ29sdW1uKGNvbHVtbiwgdmFsdWUpLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkZWZhdWx0UHJvcHMuY29sdW1uLkZpbHRlclxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWdlUm93ID0gKHJvdywgaSwgcGF0aCA9IFtdKSA9PiB7XG4gICAgICBjb25zdCByb3dJbmZvID0ge1xuICAgICAgICBvcmlnaW5hbDogcm93W29yaWdpbmFsS2V5XSxcbiAgICAgICAgcm93OiByb3csXG4gICAgICAgIGluZGV4OiByb3dbaW5kZXhLZXldLFxuICAgICAgICB2aWV3SW5kZXg6ICsrcm93SW5kZXgsXG4gICAgICAgIGxldmVsOiBwYXRoLmxlbmd0aCxcbiAgICAgICAgbmVzdGluZ1BhdGg6IHBhdGguY29uY2F0KFtpXSksXG4gICAgICAgIGFnZ3JlZ2F0ZWQ6IHJvd1thZ2dyZWdhdGVkS2V5XSxcbiAgICAgICAgZ3JvdXBlZEJ5UGl2b3Q6IHJvd1tncm91cGVkQnlQaXZvdEtleV0sXG4gICAgICAgIHN1YlJvd3M6IHJvd1tzdWJSb3dzS2V5XSxcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzRXhwYW5kZWQgPSBfLmdldChleHBhbmRlZCwgcm93SW5mby5uZXN0aW5nUGF0aClcbiAgICAgIGNvbnN0IHRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCByb3dzID0gW1xuICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICBrZXk9e3Jvd0luZm8ubmVzdGluZ1BhdGguam9pbignXycpfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIHRyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgcm93Ll92aWV3SW5kZXggJSAyID8gJy1ldmVuJyA6ICctb2RkJ1xuICAgICAgICAgICl9XG4gICAgICAgICAgc3R5bGU9e3RyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbiwgaTIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgICAgICAgIGNvbnN0IHRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgICAgICAgIGdldFRkUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgY29sdW1uLCB0aGlzKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCBjb2x1bW4sIHRoaXMpXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgICAgICAgIHRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgICAgICAgLi4udGRQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaXNGaXhlZCA9IGkyIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdG90YWxXaWR0aFxuXG4gICAgICAgICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbnNQcm9wc1tpMl0ud2lkdGhcbiAgICAgICAgICAgICAgc3R5bGVzLmxlZnQgPSBmaXhlZENvbHVtbnNQcm9wc1tpMl0ubGVmdFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjZWxsSW5mbyA9IHtcbiAgICAgICAgICAgICAgLi4ucm93SW5mbyxcbiAgICAgICAgICAgICAgaXNFeHBhbmRlZCxcbiAgICAgICAgICAgICAgY29sdW1uOiB7IC4uLmNvbHVtbiB9LFxuICAgICAgICAgICAgICB2YWx1ZTogcm93SW5mby5yb3dbY29sdW1uLmlkXSxcbiAgICAgICAgICAgICAgcGl2b3RlZDogY29sdW1uLnBpdm90ZWQsXG4gICAgICAgICAgICAgIGV4cGFuZGVyOiBjb2x1bW4uZXhwYW5kZXIsXG4gICAgICAgICAgICAgIHJlc2l6ZWQsXG4gICAgICAgICAgICAgIHNob3csXG4gICAgICAgICAgICAgIHRkUHJvcHMsXG4gICAgICAgICAgICAgIGNvbHVtblByb3BzLFxuICAgICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgICBzdHlsZXMsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY2VsbEluZm8udmFsdWVcblxuICAgICAgICAgICAgbGV0IGludGVyYWN0aW9uUHJvcHNcbiAgICAgICAgICAgIGxldCBpc0JyYW5jaFxuICAgICAgICAgICAgbGV0IGlzUHJldmlld1xuXG4gICAgICAgICAgICBjb25zdCBvbkV4cGFuZGVyQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgICAgICAgbGV0IG5ld0V4cGFuZGVkID0gXy5jbG9uZShleHBhbmRlZClcbiAgICAgICAgICAgICAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICBuZXdFeHBhbmRlZCA9IF8uc2V0KG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwgZmFsc2UpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3RXhwYW5kZWQgPSBfLnNldChuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIHt9KVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBleHBhbmRlZDogbmV3RXhwYW5kZWQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBvbkV4cGFuZGVkQ2hhbmdlICYmXG4gICAgICAgICAgICAgICAgICBvbkV4cGFuZGVkQ2hhbmdlKG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwgZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBhIHN0YW5kYXJkIGNlbGxcbiAgICAgICAgICAgIGxldCByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgY29sdW1uLkNlbGwsXG4gICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAvLyBSZXNvbHZlIFJlbmRlcmVyc1xuICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLkFnZ3JlZ2F0ZWQgfHxcbiAgICAgICAgICAgICAgKCFjb2x1bW4uYWdncmVnYXRlID8gQWdncmVnYXRlZENvbXBvbmVudCA6IGNvbHVtbi5DZWxsKVxuICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCA9XG4gICAgICAgICAgICAgIGNvbHVtbi5FeHBhbmRlciB8fCBFeHBhbmRlckNvbXBvbmVudFxuICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLlBpdm90VmFsdWUgfHwgUGl2b3RWYWx1ZUNvbXBvbmVudFxuICAgICAgICAgICAgY29uc3QgRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnQgPVxuICAgICAgICAgICAgICBQaXZvdENvbXBvbmVudCB8fFxuICAgICAgICAgICAgICAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgPFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRQaXZvdENvbXBvbmVudCA9XG4gICAgICAgICAgICAgIGNvbHVtbi5QaXZvdCB8fCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudFxuXG4gICAgICAgICAgICAvLyBJcyB0aGlzIGNlbGwgZXhwYW5kYWJsZT9cbiAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkIHx8IGNlbGxJbmZvLmV4cGFuZGVyKSB7XG4gICAgICAgICAgICAgIC8vIE1ha2UgaXQgZXhwYW5kYWJsZSBieSBkZWZ1YWx0XG4gICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgPSB0cnVlXG4gICAgICAgICAgICAgIGludGVyYWN0aW9uUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgb25DbGljazogb25FeHBhbmRlckNsaWNrLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIElmIHBpdm90ZWQsIGhhcyBubyBzdWJSb3dzLCBhbmQgZG9lcyBub3QgaGF2ZSBhIHN1YkNvbXBvbmVudCwgZG8gbm90IG1ha2UgZXhwYW5kYWJsZVxuICAgICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCkge1xuICAgICAgICAgICAgICAgIGlmICghY2VsbEluZm8uc3ViUm93cykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFTdWJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uUHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCkge1xuICAgICAgICAgICAgICAvLyBJcyB0aGlzIGNvbHVtbiBhIGJyYW5jaD9cbiAgICAgICAgICAgICAgaXNCcmFuY2ggPVxuICAgICAgICAgICAgICAgIHJvd0luZm8ucm93W3Bpdm90SURLZXldID09PSBjb2x1bW4uaWQgJiYgY2VsbEluZm8uc3ViUm93c1xuICAgICAgICAgICAgICAvLyBTaG91bGQgdGhpcyBjb2x1bW4gYmUgYmxhbms/XG4gICAgICAgICAgICAgIGlzUHJldmlldyA9XG4gICAgICAgICAgICAgICAgcGl2b3RCeS5pbmRleE9mKGNvbHVtbi5pZCkgPlxuICAgICAgICAgICAgICAgIHBpdm90QnkuaW5kZXhPZihyb3dJbmZvLnJvd1twaXZvdElES2V5XSkgJiYgY2VsbEluZm8uc3ViUm93c1xuICAgICAgICAgICAgICAvLyBQaXZvdCBDZWxsIFJlbmRlciBPdmVycmlkZVxuICAgICAgICAgICAgICBpZiAoaXNCcmFuY2gpIHtcbiAgICAgICAgICAgICAgICAvLyBpc1Bpdm90XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZFBpdm90Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAuLi5jZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvd1twaXZvdFZhbEtleV0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgcm93W3Bpdm90VmFsS2V5XVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgICAgICAgICAgICAvLyBTaG93IHRoZSBwaXZvdCBwcmV2aWV3XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsSW5mby5hZ2dyZWdhdGVkKSB7XG4gICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZWxsSW5mby5leHBhbmRlcikge1xuICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgIHJvd1twaXZvdFZhbEtleV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBpZiAocGl2b3RCeSkge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsSW5mby5ncm91cGVkQnlQaXZvdCkge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNlbGxJbmZvLnN1YlJvd3MgJiYgIVN1YkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGNlbGxcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgICAgICAgIGtleT17aTIgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICAgICAgICFzaG93ICYmICctaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgJiYgJ3J0LWV4cGFuZGFibGUnLFxuICAgICAgICAgICAgICAgICAgKGlzQnJhbmNoIHx8IGlzUHJldmlldykgJiYgJ3J0LXBpdm90JyxcbiAgICAgICAgICAgICAgICAgIGlzRml4ZWQgJiYgJy1maXhlZCcsXG4gICAgICAgICAgICAgICAgICAoaXNGaXhlZCAmJiAhcmVzb2x2ZWRDZWxsKSAmJiAnLWVtcHR5J1xuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICAgICAgICB7Li4uaW50ZXJhY3Rpb25Qcm9wc31cbiAgICAgICAgICAgICAgICB7Li4udGRQcm9wcy5yZXN0fVxuICAgICAgICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Jlc29sdmVkQ2VsbH1cbiAgICAgICAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgIF07XG5cbiAgICAgIGlmIChyb3dJbmZvLnN1YlJvd3MgJiYgaXNFeHBhbmRlZCkge1xuICAgICAgICByb3dJbmZvLnN1YlJvd3MuZm9yRWFjaCgoZCwgaSkgPT5cbiAgICAgICAgICByb3dzLnB1c2goLi4ubWFrZVBhZ2VSb3coZCwgaSwgcm93SW5mby5uZXN0aW5nUGF0aCkpXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAoU3ViQ29tcG9uZW50ICYmICFyb3dJbmZvLnN1YlJvd3MgJiYgaXNFeHBhbmRlZCkge1xuICAgICAgICByb3dzLnB1c2goU3ViQ29tcG9uZW50KHJvd0luZm8pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZFJvdyA9IChyb3csIGkpID0+IHtcbiAgICAgIGNvbnN0IHRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAnLXBhZFJvdycsXG4gICAgICAgICAgICAocGFnZVJvd3MubGVuZ3RoICsgaSkgJSAyID8gJy1ldmVuJyA6ICctb2RkJyxcbiAgICAgICAgICAgIHRyUHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICAgKX1cbiAgICAgICAgICBzdHlsZT17dHJQcm9wcy5zdHlsZSB8fCB7fX1cbiAgICAgICAgPlxuICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZVBhZENvbHVtbil9XG4gICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZENvbHVtbiA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICB0ZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRkUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdG90YWxXaWR0aFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbnNQcm9wc1tpXS53aWR0aFxuICAgICAgICBzdHlsZXMubGVmdCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLmxlZnRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCAhc2hvdyAmJiAnLWhpZGRlbicsIHsgJy1maXhlZCc6IGlzRml4ZWQgfSl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4udGRQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KFBhZFJvd0NvbXBvbmVudCl9XG4gICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbHVtbkZvb3RlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0Rm9vdFByb3BzID0gZ2V0VGZvb3RQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIGNvbnN0IHRGb290VHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGZvb3RUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRmb290Q29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXt0Rm9vdFByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICBzdHlsZT17dEZvb3RQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udEZvb3RQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModEZvb3RUclByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICBzdHlsZT17dEZvb3RUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRGb290VHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUNvbHVtbkZvb3Rlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UZm9vdENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sdW1uRm9vdGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgY29uc3QgdEZvb3RUZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZm9vdFRkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uRm9vdGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRGb290ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgdEZvb3RUZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Gb290ZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4udEZvb3RUZFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Gb290ZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudCAmJiB0b3RhbFdpZHRoXG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLndpZHRoXG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ubGVmdFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsICFzaG93ICYmICctaGlkZGVuJywgeyAnLWZpeGVkJzogaXNGaXhlZCB9KX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxuICAgICAgICAgIHsuLi50Rm9vdFRkUHJvcHMucmVzdH1cbiAgICAgICAgICB7Li4uY29sdW1uRm9vdGVyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uRm9vdGVyLCB7XG4gICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdpbmF0aW9uQ29tcG9uZW50XG4gICAgICAgICAgey4uLnJlc29sdmVkU3RhdGV9XG4gICAgICAgICAgcGFnZXM9e3BhZ2VzfVxuICAgICAgICAgIGNhblByZXZpb3VzPXtjYW5QcmV2aW91c31cbiAgICAgICAgICBjYW5OZXh0PXtjYW5OZXh0fVxuICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5vblBhZ2VDaGFuZ2V9XG4gICAgICAgICAgb25QYWdlU2l6ZUNoYW5nZT17dGhpcy5vblBhZ2VTaXplQ2hhbmdlfVxuICAgICAgICAgIGNsYXNzTmFtZT17cGFnaW5hdGlvblByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICBzdHlsZT17cGFnaW5hdGlvblByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi5wYWdpbmF0aW9uUHJvcHMucmVzdH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCByb290UHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICApXG4gICAgY29uc3QgdGFibGVQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFRhYmxlUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgKVxuICAgIGNvbnN0IHRCb2R5UHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRUYm9keVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIClcbiAgICBjb25zdCBsb2FkaW5nUHJvcHMgPSBnZXRMb2FkaW5nUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgY29uc3Qgbm9EYXRhUHJvcHMgPSBnZXROb0RhdGFQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICBjb25zdCByZXNpemVyUHJvcHMgPSBnZXRSZXNpemVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG5cbiAgICBjb25zdCBkaXNwbGF5Rm9vdGVyVG9wID0gZm9vdGVyUGxhY2VtZW50ID09PSAndG9wJyB8fCBmb290ZXJQbGFjZW1lbnQgPT09ICdib3RoJ1xuICAgIGNvbnN0IGRpc3BsYXlGb290ZXJCb3R0b20gPSBmb290ZXJQbGFjZW1lbnQgPT09ICdib3R0b20nIHx8IGZvb3RlclBsYWNlbWVudCA9PT0gJ2JvdGgnXG5cbiAgICBjb25zdCBtYWtlVGFibGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjb2xHcm91cCA9IG1ha2VDb2xHcm91cCgpO1xuICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IG1ha2VQYWdpbmF0aW9uKClcbiAgICAgIGNvbnN0IGZvb3RlciA9IGhhc0NvbHVtbkZvb3RlciA/IG1ha2VDb2x1bW5Gb290ZXJzKCkgOiBudWxsXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ1JlYWN0VGFibGUnLCBjbGFzc05hbWUsIHJvb3RQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogdG90YWxXaWR0aCxcbiAgICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAgICAgLi4ucm9vdFByb3BzLnN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJvb3RQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3dQYWdpbmF0aW9uICYmIHNob3dQYWdpbmF0aW9uVG9wXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdwYWdpbmF0aW9uLXRvcCc+XG4gICAgICAgICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgPFRhYmxlV3JhcHBlciB3cmFwcGVyUmVmPXsoYykgPT4gdGhpcy50YWJsZVdyYXBwZXIgPSBjfT5cbiAgICAgICAgICAgIDxUYWJsZUNvbXBvbmVudFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgdGFibGVQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgY3VycmVudGx5UmVzaXppbmcgPyAncnQtcmVzaXppbmcnIDogJydcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgc3R5bGU9e3RhYmxlUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgIHsuLi50YWJsZVByb3BzLnJlc3R9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjb2xHcm91cH1cbiAgICAgICAgICAgICAge2hhc0hlYWRlckdyb3VwcyA/IG1ha2VIZWFkZXJHcm91cHMoKSA6IG51bGx9XG4gICAgICAgICAgICAgIHttYWtlSGVhZGVycygpfVxuICAgICAgICAgICAgICB7aGFzRmlsdGVycyA/IG1ha2VGaWx0ZXJzKCkgOiBudWxsfVxuICAgICAgICAgICAgICB7ZGlzcGxheUZvb3RlclRvcCAmJiBmb290ZXJ9XG4gICAgICAgICAgICAgIDxUYm9keUNvbXBvbmVudFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Qm9keVByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3RCb2R5UHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgICAgey4uLnRCb2R5UHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwYWdlUm93cy5tYXAoKGQsIGkpID0+IG1ha2VQYWdlUm93KGQsIGkpKX1cbiAgICAgICAgICAgICAgICB7cGFkUm93cy5tYXAobWFrZVBhZFJvdyl9XG4gICAgICAgICAgICAgIDwvVGJvZHlDb21wb25lbnQ+XG4gICAgICAgICAgICAgIHtkaXNwbGF5Rm9vdGVyQm90dG9tICYmIGZvb3Rlcn1cbiAgICAgICAgICAgIDwvVGFibGVDb21wb25lbnQ+XG4gICAgICAgICAgPC9UYWJsZVdyYXBwZXI+XG4gICAgICAgICAge3Nob3dQYWdpbmF0aW9uICYmIHNob3dQYWdpbmF0aW9uQm90dG9tXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdwYWdpbmF0aW9uLWJvdHRvbSc+XG4gICAgICAgICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgeyFwYWdlUm93cy5sZW5ndGggJiZcbiAgICAgICAgICA8Tm9EYXRhQ29tcG9uZW50IHsuLi5ub0RhdGFQcm9wc30+XG4gICAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQobm9EYXRhVGV4dCl9XG4gICAgICAgICAgPC9Ob0RhdGFDb21wb25lbnQ+fVxuICAgICAgICAgIDxMb2FkaW5nQ29tcG9uZW50XG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgbG9hZGluZ1RleHQ9e2xvYWRpbmdUZXh0fVxuICAgICAgICAgICAgey4uLmxvYWRpbmdQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBjaGlsZFByb3BzIGFyZSBvcHRpb25hbGx5IHBhc3NlZCB0byBhIGZ1bmN0aW9uLWFzLWEtY2hpbGRcbiAgICByZXR1cm4gY2hpbGRyZW4gPyBjaGlsZHJlbihmaW5hbFN0YXRlLCBtYWtlVGFibGUsIHRoaXMpIDogbWFrZVRhYmxlKClcbiAgfVxufVxuIl19