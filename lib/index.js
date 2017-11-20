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
              displayPivotSubRows: column.displayPivotSubRows,
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
              } else if (!cellInfo.displayPivotSubRows) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0IiwicmVzb2x2ZWRTdGF0ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJnZXRQcm9wcyIsImdldFRhYmxlUHJvcHMiLCJnZXRDb2xHcm91cENvbFByb3BzIiwiZ2V0VGhlYWRHcm91cFByb3BzIiwiZ2V0VGhlYWRHcm91cFRyUHJvcHMiLCJnZXRUaGVhZEdyb3VwVGhQcm9wcyIsImdldFRoZWFkUHJvcHMiLCJnZXRUaGVhZFRyUHJvcHMiLCJnZXRUaGVhZFRoUHJvcHMiLCJnZXRUaGVhZEZpbHRlclByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJUclByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJUaFByb3BzIiwiZ2V0VGJvZHlQcm9wcyIsImdldFRyUHJvcHMiLCJnZXRUZFByb3BzIiwiZ2V0VGZvb3RQcm9wcyIsImdldFRmb290VHJQcm9wcyIsImdldFRmb290VGRQcm9wcyIsImdldFBhZ2luYXRpb25Qcm9wcyIsImdldExvYWRpbmdQcm9wcyIsImdldE5vRGF0YVByb3BzIiwiZ2V0UmVzaXplclByb3BzIiwic2hvd1BhZ2luYXRpb24iLCJzaG93UGFnaW5hdGlvblRvcCIsInNob3dQYWdpbmF0aW9uQm90dG9tIiwic2hvd1NvcnRPcmRlciIsIm1hbnVhbCIsImxvYWRpbmdUZXh0Iiwibm9EYXRhVGV4dCIsInNvcnRhYmxlIiwicmVzaXphYmxlIiwiZmlsdGVyYWJsZSIsImZvb3RlclBsYWNlbWVudCIsInBpdm90SURLZXkiLCJwaXZvdFZhbEtleSIsInBpdm90QnkiLCJzdWJSb3dzS2V5IiwiYWdncmVnYXRlZEtleSIsIm9yaWdpbmFsS2V5IiwiaW5kZXhLZXkiLCJncm91cGVkQnlQaXZvdEtleSIsImZpeGVkQ29sdW1uc0NvdW50IiwibG9hZGluZyIsInBhZ2VzIiwib25FeHBhbmRlZENoYW5nZSIsIlRhYmxlV3JhcHBlciIsIlRhYmxlQ29tcG9uZW50IiwiVGhlYWRDb21wb25lbnQiLCJUYm9keUNvbXBvbmVudCIsIlRyQ29tcG9uZW50IiwiVGhDb21wb25lbnQiLCJUZENvbXBvbmVudCIsIlRmb290Q29tcG9uZW50IiwiUGFnaW5hdGlvbkNvbXBvbmVudCIsIkxvYWRpbmdDb21wb25lbnQiLCJTdWJDb21wb25lbnQiLCJOb0RhdGFDb21wb25lbnQiLCJSZXNpemVyQ29tcG9uZW50IiwiU29ydE9yZGVyQ29tcG9uZW50IiwiRXhwYW5kZXJDb21wb25lbnQiLCJQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RDb21wb25lbnQiLCJBZ2dyZWdhdGVkQ29tcG9uZW50IiwiRmlsdGVyQ29tcG9uZW50IiwiUGFkUm93Q29tcG9uZW50IiwicmVzb2x2ZWREYXRhIiwiYWxsVmlzaWJsZUNvbHVtbnMiLCJoZWFkZXJHcm91cHMiLCJoYXNIZWFkZXJHcm91cHMiLCJzb3J0ZWREYXRhIiwidG90YWxXaWR0aCIsIndpZHRoIiwicGFnZVJvd3MiLCJzdGFydFJvdyIsImVuZFJvdyIsImxlbmd0aCIsInNsaWNlIiwibWluUm93cyIsInBhZFJvd3MiLCJyYW5nZSIsIk1hdGgiLCJtYXgiLCJoYXNDb2x1bW5Gb290ZXIiLCJzb21lIiwiZCIsIkZvb3RlciIsImhhc0ZpbHRlcnMiLCJyZWN1cnNlUm93c1ZpZXdJbmRleCIsInJvd3MiLCJwYXRoIiwiaW5kZXgiLCJtYXAiLCJyb3ciLCJpIiwicm93V2l0aFZpZXdJbmRleCIsIl92aWV3SW5kZXgiLCJuZXdQYXRoIiwiY29uY2F0IiwiZ2V0IiwiY2FuUHJldmlvdXMiLCJjYW5OZXh0Iiwicm93SW5kZXgiLCJmaW5hbFN0YXRlIiwiZml4ZWRDb2x1bW5zUHJvcHMiLCJyYXdDb2x1bW5zV2lkdGgiLCJmbG9vckNvbHVtbnNXaWR0aCIsIm1ha2VDb2xHcm91cCIsIm1ha2VDb2wiLCJjb2x1bW4iLCJpc0R1bW15IiwiaXNGaXhlZCIsImlzSW5uZXJGaXhlZCIsImlzTGFzdEZpeGVkIiwicmVzaXplZENvbCIsImZpbmQiLCJ4IiwiaWQiLCJjb2xncm91cENvbFByb3BzIiwic3BsaXRQcm9wcyIsInVuZGVmaW5lZCIsImNvbHVtbkNvbGdyb3VwQ29sUHJvcHMiLCJjbGFzc2VzIiwiY29sR3JvdXBDb2xDbGFzc05hbWUiLCJzdHlsZXMiLCJjb2xHcm91cENvbFN0eWxlIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsImdldEZpcnN0RGVmaW5lZCIsInZhbHVlIiwiaW5zaWRlV2lkdGgiLCJ3aWR0aElzUGVyY2VudHMiLCJpc1BlcmNlbnRzIiwibWluV2lkdGhJc1BlcmNlbnRzIiwibWF4V2lkdGhJc1BlcmNlbnRzIiwid2lkdGhWYWx1ZSIsInBhcnNlSW50IiwibWluV2lkdGhWYWx1ZSIsIm1heFdpZHRoVmFsdWUiLCJwZXJjZW50c1RvUHgiLCJjbGFtcCIsImZsb29yIiwiZGlmZiIsImxlZnQiLCJyZWR1Y2UiLCJpdGVtIiwicHVzaCIsIm1ha2VIZWFkZXJHcm91cHMiLCJ0aGVhZEdyb3VwUHJvcHMiLCJ0aGVhZEdyb3VwVHJQcm9wcyIsInJlc3QiLCJtYWtlSGVhZGVyR3JvdXAiLCJ0aGVhZEdyb3VwVGhQcm9wcyIsImNvbHVtbkhlYWRlclByb3BzIiwiZ2V0SGVhZGVyUHJvcHMiLCJoZWFkZXJDbGFzc05hbWUiLCJoZWFkZXJTdHlsZSIsImNvbFNwYW4iLCJjb2x1bW5zIiwiY29udGVudCIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsIkhlYWRlciIsImRhdGEiLCJtYWtlSGVhZGVycyIsInRoZWFkUHJvcHMiLCJ0aGVhZFRyUHJvcHMiLCJtYWtlSGVhZGVyIiwic29ydCIsInNob3ciLCJ0aGVhZFRoUHJvcHMiLCJpc1Jlc2l6YWJsZSIsInJlc2l6ZXIiLCJlIiwicmVzaXplclByb3BzIiwic29ydE9yZGVyIiwiZGVzYyIsImlzU29ydGFibGUiLCJpbmNsdWRlcyIsInNoaWZ0S2V5IiwibWFrZUZpbHRlcnMiLCJ0aGVhZEZpbHRlclByb3BzIiwidGhlYWRGaWx0ZXJUclByb3BzIiwibWFrZUZpbHRlciIsInRoZWFkRmlsdGVyVGhQcm9wcyIsImZpbHRlciIsIlJlc29sdmVkRmlsdGVyQ29tcG9uZW50IiwiRmlsdGVyIiwiaXNGaWx0ZXJhYmxlIiwib25DaGFuZ2UiLCJtYWtlUGFnZVJvdyIsInJvd0luZm8iLCJvcmlnaW5hbCIsInZpZXdJbmRleCIsImxldmVsIiwibmVzdGluZ1BhdGgiLCJhZ2dyZWdhdGVkIiwiZ3JvdXBlZEJ5UGl2b3QiLCJzdWJSb3dzIiwiaXNFeHBhbmRlZCIsInRyUHJvcHMiLCJqb2luIiwiaTIiLCJ0ZFByb3BzIiwiY29sdW1uUHJvcHMiLCJjZWxsSW5mbyIsInBpdm90ZWQiLCJleHBhbmRlciIsImRpc3BsYXlQaXZvdFN1YlJvd3MiLCJpbnRlcmFjdGlvblByb3BzIiwiaXNCcmFuY2giLCJpc1ByZXZpZXciLCJvbkV4cGFuZGVyQ2xpY2siLCJuZXdFeHBhbmRlZCIsImNsb25lIiwic2V0Iiwic2V0U3RhdGVXaXRoRGF0YSIsInJlc29sdmVkQ2VsbCIsIkNlbGwiLCJSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJBZ2dyZWdhdGVkIiwiYWdncmVnYXRlIiwiUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCIsIkV4cGFuZGVyIiwiUmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RWYWx1ZSIsIkRlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50IiwiUmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlBpdm90IiwiZXhwYW5kYWJsZSIsIm9uQ2xpY2siLCJpbmRleE9mIiwiZm9yRWFjaCIsIm1ha2VQYWRSb3ciLCJtYWtlUGFkQ29sdW1uIiwibWFrZUNvbHVtbkZvb3RlcnMiLCJ0Rm9vdFByb3BzIiwidEZvb3RUclByb3BzIiwibWFrZUNvbHVtbkZvb3RlciIsInRGb290VGRQcm9wcyIsImNvbHVtbkZvb3RlclByb3BzIiwiZ2V0Rm9vdGVyUHJvcHMiLCJtYWtlUGFnaW5hdGlvbiIsInBhZ2luYXRpb25Qcm9wcyIsInJvb3RQcm9wcyIsInRhYmxlUHJvcHMiLCJ0Qm9keVByb3BzIiwibG9hZGluZ1Byb3BzIiwibm9EYXRhUHJvcHMiLCJkaXNwbGF5Rm9vdGVyVG9wIiwiZGlzcGxheUZvb3RlckJvdHRvbSIsIm1ha2VUYWJsZSIsImNvbEdyb3VwIiwicGFnaW5hdGlvbiIsImZvb3RlciIsImMiLCJ0YWJsZVdyYXBwZXIiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFKQTs7O0FBTU8sSUFBTUEsd0VBQU47O0lBRWNDLFU7OztBQUduQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUdqQixVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1C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LFlBSE47QUFoREYsU0FERjtBQXdERCxPQTdERDs7QUErREE7QUFDQSxhQUFPeFAsV0FBV0EsU0FBU3lHLFVBQVQsRUFBcUJtSixTQUFyQixFQUFnQyxJQUFoQyxDQUFYLEdBQW1EQSxXQUExRDtBQUNEOzs7O0VBdmdDcUMsdUJBQVEsMENBQVIsQzs7QUFBbkI5UixVLENBQ1pvUyxZO2tCQURZcFMsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG4vL1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscydcbmltcG9ydCBMaWZlY3ljbGUgZnJvbSAnLi9saWZlY3ljbGUnXG5pbXBvcnQgTWV0aG9kcyBmcm9tICcuL21ldGhvZHMnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdFByb3BzJ1xuXG5leHBvcnQgY29uc3QgUmVhY3RUYWJsZURlZmF1bHRzID0gZGVmYXVsdFByb3BzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0VGFibGUgZXh0ZW5kcyBNZXRob2RzKExpZmVjeWNsZShDb21wb25lbnQpKSB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHNcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXREYXRhTW9kZWwgPSB0aGlzLmdldERhdGFNb2RlbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRTb3J0ZWREYXRhID0gdGhpcy5nZXRTb3J0ZWREYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmZpcmVGZXRjaERhdGEgPSB0aGlzLmZpcmVGZXRjaERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0UHJvcE9yU3RhdGUgPSB0aGlzLmdldFByb3BPclN0YXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFN0YXRlT3JQcm9wID0gdGhpcy5nZXRTdGF0ZU9yUHJvcC5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLnNvcnREYXRhID0gdGhpcy5zb3J0RGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRNaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZUNoYW5nZSA9IHRoaXMub25QYWdlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZVNpemVDaGFuZ2UgPSB0aGlzLm9uUGFnZVNpemVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuc29ydENvbHVtbiA9IHRoaXMuc29ydENvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJDb2x1bW4gPSB0aGlzLmZpbHRlckNvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5TdGFydCA9IHRoaXMucmVzaXplQ29sdW1uU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uRW5kID0gdGhpcy5yZXNpemVDb2x1bW5FbmQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uTW92aW5nID0gdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2U6IDAsXG4gICAgICBwYWdlU2l6ZTogcHJvcHMuZGVmYXVsdFBhZ2VTaXplLFxuICAgICAgc29ydGVkOiBwcm9wcy5kZWZhdWx0U29ydGVkLFxuICAgICAgZXhwYW5kZWQ6IHByb3BzLmRlZmF1bHRFeHBhbmRlZCxcbiAgICAgIGZpbHRlcmVkOiBwcm9wcy5kZWZhdWx0RmlsdGVyZWQsXG4gICAgICByZXNpemVkOiBwcm9wcy5kZWZhdWx0UmVzaXplZCxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nOiBmYWxzZSxcbiAgICAgIHNraXBOZXh0U29ydDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJlc29sdmVkU3RhdGUgPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3R5bGUsXG4gICAgICBnZXRQcm9wcyxcbiAgICAgIGdldFRhYmxlUHJvcHMsXG4gICAgICBnZXRDb2xHcm91cENvbFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkUHJvcHMsXG4gICAgICBnZXRUaGVhZFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZFRoUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzLFxuICAgICAgZ2V0VGJvZHlQcm9wcyxcbiAgICAgIGdldFRyUHJvcHMsXG4gICAgICBnZXRUZFByb3BzLFxuICAgICAgZ2V0VGZvb3RQcm9wcyxcbiAgICAgIGdldFRmb290VHJQcm9wcyxcbiAgICAgIGdldFRmb290VGRQcm9wcyxcbiAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyxcbiAgICAgIGdldExvYWRpbmdQcm9wcyxcbiAgICAgIGdldE5vRGF0YVByb3BzLFxuICAgICAgZ2V0UmVzaXplclByb3BzLFxuICAgICAgc2hvd1BhZ2luYXRpb24sXG4gICAgICBzaG93UGFnaW5hdGlvblRvcCxcbiAgICAgIHNob3dQYWdpbmF0aW9uQm90dG9tLFxuICAgICAgc2hvd1NvcnRPcmRlcixcbiAgICAgIG1hbnVhbCxcbiAgICAgIGxvYWRpbmdUZXh0LFxuICAgICAgbm9EYXRhVGV4dCxcbiAgICAgIHNvcnRhYmxlLFxuICAgICAgcmVzaXphYmxlLFxuICAgICAgZmlsdGVyYWJsZSxcbiAgICAgIGZvb3RlclBsYWNlbWVudCxcbiAgICAgIC8vIFBpdm90aW5nIFN0YXRlXG4gICAgICBwaXZvdElES2V5LFxuICAgICAgcGl2b3RWYWxLZXksXG4gICAgICBwaXZvdEJ5LFxuICAgICAgc3ViUm93c0tleSxcbiAgICAgIGFnZ3JlZ2F0ZWRLZXksXG4gICAgICBvcmlnaW5hbEtleSxcbiAgICAgIGluZGV4S2V5LFxuICAgICAgZ3JvdXBlZEJ5UGl2b3RLZXksXG4gICAgICAvLyBGaXhlZFxuICAgICAgZml4ZWRDb2x1bW5zQ291bnQsXG4gICAgICAvLyBTdGF0ZVxuICAgICAgbG9hZGluZyxcbiAgICAgIHBhZ2VTaXplLFxuICAgICAgcGFnZSxcbiAgICAgIHNvcnRlZCxcbiAgICAgIGZpbHRlcmVkLFxuICAgICAgcmVzaXplZCxcbiAgICAgIGV4cGFuZGVkLFxuICAgICAgcGFnZXMsXG4gICAgICBvbkV4cGFuZGVkQ2hhbmdlLFxuICAgICAgLy8gQ29tcG9uZW50c1xuICAgICAgVGFibGVXcmFwcGVyLFxuICAgICAgVGFibGVDb21wb25lbnQsXG4gICAgICBUaGVhZENvbXBvbmVudCxcbiAgICAgIFRib2R5Q29tcG9uZW50LFxuICAgICAgVHJDb21wb25lbnQsXG4gICAgICBUaENvbXBvbmVudCxcbiAgICAgIFRkQ29tcG9uZW50LFxuICAgICAgVGZvb3RDb21wb25lbnQsXG4gICAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgICAgTG9hZGluZ0NvbXBvbmVudCxcbiAgICAgIFN1YkNvbXBvbmVudCxcbiAgICAgIE5vRGF0YUNvbXBvbmVudCxcbiAgICAgIFJlc2l6ZXJDb21wb25lbnQsXG4gICAgICBTb3J0T3JkZXJDb21wb25lbnQsXG4gICAgICBFeHBhbmRlckNvbXBvbmVudCxcbiAgICAgIFBpdm90VmFsdWVDb21wb25lbnQsXG4gICAgICBQaXZvdENvbXBvbmVudCxcbiAgICAgIEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICBGaWx0ZXJDb21wb25lbnQsXG4gICAgICBQYWRSb3dDb21wb25lbnQsXG4gICAgICAvLyBEYXRhIG1vZGVsXG4gICAgICByZXNvbHZlZERhdGEsXG4gICAgICBhbGxWaXNpYmxlQ29sdW1ucyxcbiAgICAgIGhlYWRlckdyb3VwcyxcbiAgICAgIGhhc0hlYWRlckdyb3VwcyxcbiAgICAgIC8vIFNvcnRlZCBEYXRhXG4gICAgICBzb3J0ZWREYXRhLFxuICAgICAgY3VycmVudGx5UmVzaXppbmcsXG4gICAgICB3aWR0aDogdG90YWxXaWR0aCxcbiAgICB9ID0gcmVzb2x2ZWRTdGF0ZVxuXG4gICAgLy8gUGFnaW5hdGlvblxuICAgIGxldCBwYWdlUm93cyA9IHNvcnRlZERhdGE7XG4gICAgbGV0IHN0YXJ0Um93ID0gMDtcbiAgICBsZXQgZW5kUm93ID0gc29ydGVkRGF0YS5sZW5ndGg7XG5cbiAgICBpZiAobWFudWFsKSB7XG4gICAgICBwYWdlUm93cyA9IHJlc29sdmVkRGF0YTtcbiAgICB9IGVsc2UgaWYgKHBhZ2VTaXplID4gMCkge1xuICAgICAgc3RhcnRSb3cgPSBwYWdlU2l6ZSAqIHBhZ2VcbiAgICAgIGVuZFJvdyA9IHN0YXJ0Um93ICsgcGFnZVNpemVcbiAgICAgIHBhZ2VSb3dzID0gc29ydGVkRGF0YS5zbGljZShzdGFydFJvdywgZW5kUm93KVxuICAgIH1cblxuICAgIGNvbnN0IG1pblJvd3MgPSB0aGlzLmdldE1pblJvd3MoKVxuICAgIGNvbnN0IHBhZFJvd3MgPSBfLnJhbmdlKE1hdGgubWF4KG1pblJvd3MgLSBwYWdlUm93cy5sZW5ndGgsIDApKVxuXG4gICAgY29uc3QgaGFzQ29sdW1uRm9vdGVyID0gYWxsVmlzaWJsZUNvbHVtbnMuc29tZShkID0+IGQuRm9vdGVyKVxuICAgIGNvbnN0IGhhc0ZpbHRlcnMgPSBmaWx0ZXJhYmxlIHx8IGFsbFZpc2libGVDb2x1bW5zLnNvbWUoZCA9PiBkLmZpbHRlcmFibGUpXG5cbiAgICBjb25zdCByZWN1cnNlUm93c1ZpZXdJbmRleCA9IChyb3dzLCBwYXRoID0gW10sIGluZGV4ID0gLTEpID0+IHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICByb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgICBpbmRleCsrXG4gICAgICAgICAgICBjb25zdCByb3dXaXRoVmlld0luZGV4ID0ge1xuICAgICAgICAgICAgICAuLi5yb3csXG4gICAgICAgICAgICAgIF92aWV3SW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UGF0aCA9IHBhdGguY29uY2F0KFtpXSlcbiAgICAgICAgICAgIGlmIChyb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldICYmIF8uZ2V0KGV4cGFuZGVkLCBuZXdQYXRoKSkge1xuICAgICAgICAgICAgICA7W3Jvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0sIGluZGV4XSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KFxuICAgICAgICAgICAgICAgIHJvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0sXG4gICAgICAgICAgICAgICAgbmV3UGF0aCxcbiAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm93V2l0aFZpZXdJbmRleFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICBdXG4gICAgICB9XG4gICAgO1twYWdlUm93c10gPSByZWN1cnNlUm93c1ZpZXdJbmRleChwYWdlUm93cylcblxuICAgIGNvbnN0IGNhblByZXZpb3VzID0gcGFnZSA+IDBcbiAgICBjb25zdCBjYW5OZXh0ID0gcGFnZSArIDEgPCBwYWdlc1xuXG4gICAgbGV0IHJvd0luZGV4ID0gLTFcblxuICAgIGNvbnN0IGZpbmFsU3RhdGUgPSB7XG4gICAgICAuLi5yZXNvbHZlZFN0YXRlLFxuICAgICAgc3RhcnRSb3csXG4gICAgICBlbmRSb3csXG4gICAgICBwYWdlUm93cyxcbiAgICAgIG1pblJvd3MsXG4gICAgICBwYWRSb3dzLFxuICAgICAgaGFzQ29sdW1uRm9vdGVyLFxuICAgICAgY2FuUHJldmlvdXMsXG4gICAgICBjYW5OZXh0LFxuICAgIH1cblxuICAgIGNvbnN0IGZpeGVkQ29sdW1uc1Byb3BzID0gW107XG4gICAgbGV0IHJhd0NvbHVtbnNXaWR0aCA9IDBcbiAgICBsZXQgZmxvb3JDb2x1bW5zV2lkdGggPSAwXG5cbiAgICAvLyBWaXN1YWwgQ29tcG9uZW50c1xuXG4gICAgY29uc3QgbWFrZUNvbEdyb3VwID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGNvbGdyb3VwPlxuICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUNvbCl9XG4gICAgICAgIDwvY29sZ3JvdXA+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbCA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IGlzRHVtbXkgPSBpID09PSBhbGxWaXNpYmxlQ29sdW1ucy5sZW5ndGggLSAxXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA8IGZpeGVkQ29sdW1uc0NvdW50XG4gICAgICBjb25zdCBpc0lubmVyRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgLSAxXG4gICAgICBjb25zdCBpc0xhc3RGaXhlZCA9IGkgPT09IGZpeGVkQ29sdW1uc0NvdW50IC0gMVxuXG4gICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sdW1uLmlkKSB8fCB7fVxuXG4gICAgICBjb25zdCBjb2xncm91cENvbFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRDb2xHcm91cENvbFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uQ29sZ3JvdXBDb2xQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldENvbEdyb3VwQ29sUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5jb2xHcm91cENvbENsYXNzTmFtZSxcbiAgICAgICAgY29sZ3JvdXBDb2xQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkNvbGdyb3VwQ29sUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5jb2xHcm91cENvbFN0eWxlLFxuICAgICAgICAuLi5jb2xncm91cENvbFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Db2xncm91cENvbFByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBsZXQgbWluV2lkdGggPSBjb2x1bW4ubWluV2lkdGhcbiAgICAgIGxldCBtYXhXaWR0aCA9IGNvbHVtbi5tYXhXaWR0aFxuICAgICAgbGV0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgbWluV2lkdGgsXG4gICAgICAgIDBcbiAgICAgIClcblxuICAgICAgLy8gY2FsY3VsYXRlIHB4XG4gICAgICBpZiAodG90YWxXaWR0aCkge1xuICAgICAgICBjb25zdCBpbnNpZGVXaWR0aCA9IHRvdGFsV2lkdGggLSAyIC8vIFN1YnRyYWN0IGJvcmRlcnNcbiAgICAgICAgY29uc3Qgd2lkdGhJc1BlcmNlbnRzID0gXy5pc1BlcmNlbnRzKHdpZHRoKVxuICAgICAgICBjb25zdCBtaW5XaWR0aElzUGVyY2VudHMgPSBfLmlzUGVyY2VudHMobWluV2lkdGgpXG4gICAgICAgIGNvbnN0IG1heFdpZHRoSXNQZXJjZW50cyA9IF8uaXNQZXJjZW50cyhtYXhXaWR0aClcblxuICAgICAgICBjb25zdCB3aWR0aFZhbHVlID0gcGFyc2VJbnQod2lkdGgsIDEwKVxuICAgICAgICBjb25zdCBtaW5XaWR0aFZhbHVlID0gbWluV2lkdGggJiYgcGFyc2VJbnQobWluV2lkdGgsIDEwKVxuICAgICAgICBjb25zdCBtYXhXaWR0aFZhbHVlID0gbWF4V2lkdGggJiYgcGFyc2VJbnQobWF4V2lkdGgsIDEwKVxuXG4gICAgICAgIHdpZHRoID0gd2lkdGhJc1BlcmNlbnRzXG4gICAgICAgICAgPyBfLnBlcmNlbnRzVG9QeCh3aWR0aFZhbHVlLCBpbnNpZGVXaWR0aClcbiAgICAgICAgICA6IHdpZHRoVmFsdWVcblxuICAgICAgICBtaW5XaWR0aCA9IG1pbldpZHRoSXNQZXJjZW50c1xuICAgICAgICAgID8gXy5wZXJjZW50c1RvUHgobWluV2lkdGhWYWx1ZSwgaW5zaWRlV2lkdGgpXG4gICAgICAgICAgOiBtaW5XaWR0aFZhbHVlXG5cbiAgICAgICAgbWF4V2lkdGggPSBtYXhXaWR0aElzUGVyY2VudHNcbiAgICAgICAgICA/IF8ucGVyY2VudHNUb1B4KG1heFdpZHRoVmFsdWUsIGluc2lkZVdpZHRoKVxuICAgICAgICAgIDogbWF4V2lkdGhWYWx1ZVxuXG4gICAgICAgIHdpZHRoID0gXy5jbGFtcCh3aWR0aCwgbWluV2lkdGgsIG1heFdpZHRoKVxuXG4gICAgICAgIHJhd0NvbHVtbnNXaWR0aCArPSB3aWR0aFxuICAgICAgICB3aWR0aCA9IE1hdGguZmxvb3Iod2lkdGgpXG4gICAgICAgIGZsb29yQ29sdW1uc1dpZHRoICs9IHdpZHRoXG5cbiAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguZmxvb3IocmF3Q29sdW1uc1dpZHRoIC0gZmxvb3JDb2x1bW5zV2lkdGgpXG5cbiAgICAgICAgaWYgKGRpZmYgPj0gMSkge1xuICAgICAgICAgIHdpZHRoICs9IGRpZmZcbiAgICAgICAgICBmbG9vckNvbHVtbnNXaWR0aCArPSBkaWZmXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICAgIGNvbnN0IGxlZnQgPSBmaXhlZENvbHVtbnNQcm9wcy5yZWR1Y2UoKHZhbHVlLCBpdGVtKSA9PiB2YWx1ZSArIGl0ZW0ud2lkdGgsIDApXG4gICAgICAgICAgZml4ZWRDb2x1bW5zUHJvcHMucHVzaCh7IHdpZHRoLCBsZWZ0IH0pXG5cbiAgICAgICAgICBpZiAoaXNMYXN0Rml4ZWQpIHtcbiAgICAgICAgICAgIHdpZHRoICs9IGxlZnRcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aWR0aCA9IGAke3dpZHRofXB4YFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNJbm5lckZpeGVkKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxjb2xcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdydC1jb2xncm91cC1jb2wnLCBjbGFzc2VzLCB7ICctZHVtbXknOiBpc0R1bW15IH0pfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICB3aWR0aDogIWlzRHVtbXkgPyB3aWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXJHcm91cHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEdyb3VwUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWhlYWRlckdyb3VwcycsIHRoZWFkR3JvdXBQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt0aGVhZEdyb3VwUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRoZWFkR3JvdXBQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkR3JvdXBUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZEdyb3VwVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZEdyb3VwVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKG1ha2VIZWFkZXJHcm91cCl9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyR3JvdXAgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEdyb3VwVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEdyb3VwVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkR3JvdXBUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29sU3BhbiA9IGNvbHVtbi5jb2x1bW5zLmxlbmd0aFxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZEdyb3VwVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgICBjb2xTcGFuLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0R1bW15ID0gaSA9PT0gaGVhZGVyR3JvdXBzLmxlbmd0aCAtIDFcbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdG90YWxXaWR0aFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbnNQcm9wc1tpXS53aWR0aFxuICAgICAgICBzdHlsZXMubGVmdCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLmxlZnRcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29udGVudCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5IZWFkZXIsIHtcbiAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsIHsgJy1kdW1teSc6IGlzRHVtbXksICctZW1wdHknOiAhY29udGVudCwgJy1maXhlZCc6IGlzRml4ZWQgfSl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctaGVhZGVyJywgdGhlYWRQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt0aGVhZFByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50aGVhZFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlSGVhZGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCBzb3J0ID0gc29ydGVkLmZpbmQoZCA9PiBkLmlkID09PSBjb2x1bW4uaWQpXG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB0aGVhZFRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1Jlc2l6YWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5yZXNpemFibGUsIHJlc2l6YWJsZSwgZmFsc2UpXG4gICAgICBjb25zdCByZXNpemVyID0gaXNSZXNpemFibGVcbiAgICAgICAgPyAoPFJlc2l6ZXJDb21wb25lbnRcbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0KGNvbHVtbiwgZSwgZmFsc2UpfVxuICAgICAgICAgIG9uVG91Y2hTdGFydD17ZSA9PiB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0KGNvbHVtbiwgZSwgdHJ1ZSl9XG4gICAgICAgICAgey4uLnJlc2l6ZXJQcm9wc31cbiAgICAgICAgLz4pXG4gICAgICAgIDogbnVsbFxuXG4gICAgICBjb25zdCBzb3J0T3JkZXIgPSBzb3J0ICYmIHNob3dTb3J0T3JkZXJcbiAgICAgICAgPyA8U29ydE9yZGVyQ29tcG9uZW50IGRlc2M9e3NvcnQuZGVzY30gLz5cbiAgICAgICAgOiBudWxsO1xuXG4gICAgICBjb25zdCBpc1NvcnRhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnNvcnRhYmxlLCBzb3J0YWJsZSwgZmFsc2UpXG4gICAgICBjb25zdCBpc0R1bW15ID0gaSA9PT0gYWxsVmlzaWJsZUNvbHVtbnMubGVuZ3RoIC0gMVxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudCAmJiB0b3RhbFdpZHRoXG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLndpZHRoXG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ubGVmdFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICdydC1yZXNpemFibGUtaGVhZGVyJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJy1jdXJzb3ItcG9pbnRlcic6IGlzU29ydGFibGUsXG4gICAgICAgICAgICAgICctaGlkZGVuJzogIXNob3csXG4gICAgICAgICAgICAgICctZHVtbXknOiBpc0R1bW15LFxuICAgICAgICAgICAgICAnLWZpeGVkJzogaXNGaXhlZCxcbiAgICAgICAgICAgICAgJ3J0LWhlYWRlci1waXZvdCc6IHBpdm90QnkgJiYgcGl2b3RCeS5zbGljZSgwLCAtMSkuaW5jbHVkZXMoY29sdW1uLmlkKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgdG9nZ2xlU29ydD17ZSA9PiB7XG4gICAgICAgICAgICBpc1NvcnRhYmxlICYmIHRoaXMuc29ydENvbHVtbihjb2x1bW4sIGUuc2hpZnRLZXkpXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncnQtcmVzaXphYmxlLWhlYWRlci1jb250ZW50Jz5cbiAgICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uSGVhZGVyLCB7XG4gICAgICAgICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHtzb3J0T3JkZXJ9XG4gICAgICAgICAge3Jlc2l6ZXJ9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUZpbHRlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEZpbHRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1maWx0ZXJzJywgdGhlYWRGaWx0ZXJQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt0aGVhZEZpbHRlclByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50aGVhZEZpbHRlclByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRGaWx0ZXJUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZEZpbHRlclRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRGaWx0ZXJUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlRmlsdGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VGaWx0ZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEZpbHRlclRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkRmlsdGVyVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkRmlsdGVyVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkRmlsdGVyVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWx0ZXIgPSBmaWx0ZXJlZC5maW5kKGZpbHRlciA9PiBmaWx0ZXIuaWQgPT09IGNvbHVtbi5pZClcblxuICAgICAgY29uc3QgUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQgPSBjb2x1bW4uRmlsdGVyIHx8IEZpbHRlckNvbXBvbmVudFxuXG4gICAgICBjb25zdCBpc0ZpbHRlcmFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgY29sdW1uLmZpbHRlcmFibGUsXG4gICAgICAgIGZpbHRlcmFibGUsXG4gICAgICAgIGZhbHNlXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdG90YWxXaWR0aFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbnNQcm9wc1tpXS53aWR0aFxuICAgICAgICBzdHlsZXMubGVmdCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLmxlZnRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCB7ICctZml4ZWQnOiBpc0ZpeGVkLCAnLWVtcHR5JzogIWlzRmlsdGVyYWJsZSB9KX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge2lzRmlsdGVyYWJsZVxuICAgICAgICAgICAgPyBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiB0aGlzLmZpbHRlckNvbHVtbihjb2x1bW4sIHZhbHVlKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGVmYXVsdFByb3BzLmNvbHVtbi5GaWx0ZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFnZVJvdyA9IChyb3csIGksIHBhdGggPSBbXSkgPT4ge1xuICAgICAgY29uc3Qgcm93SW5mbyA9IHtcbiAgICAgICAgb3JpZ2luYWw6IHJvd1tvcmlnaW5hbEtleV0sXG4gICAgICAgIHJvdzogcm93LFxuICAgICAgICBpbmRleDogcm93W2luZGV4S2V5XSxcbiAgICAgICAgdmlld0luZGV4OiArK3Jvd0luZGV4LFxuICAgICAgICBsZXZlbDogcGF0aC5sZW5ndGgsXG4gICAgICAgIG5lc3RpbmdQYXRoOiBwYXRoLmNvbmNhdChbaV0pLFxuICAgICAgICBhZ2dyZWdhdGVkOiByb3dbYWdncmVnYXRlZEtleV0sXG4gICAgICAgIGdyb3VwZWRCeVBpdm90OiByb3dbZ3JvdXBlZEJ5UGl2b3RLZXldLFxuICAgICAgICBzdWJSb3dzOiByb3dbc3ViUm93c0tleV0sXG4gICAgICB9XG4gICAgICBjb25zdCBpc0V4cGFuZGVkID0gXy5nZXQoZXhwYW5kZWQsIHJvd0luZm8ubmVzdGluZ1BhdGgpXG4gICAgICBjb25zdCB0clByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUclByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3Qgcm93cyA9IFtcbiAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtyb3dJbmZvLm5lc3RpbmdQYXRoLmpvaW4oJ18nKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICB0clByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHJvdy5fdmlld0luZGV4ICUgMiA/ICctZXZlbicgOiAnLW9kZCdcbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50clByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4sIGkyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICAgICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICAgICAgICBnZXRUZFByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIGNvbHVtbiwgdGhpcylcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgY29sdW1uLCB0aGlzKVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICAgICAgICB0ZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgICAgICAgIC4uLnRkUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGlzRml4ZWQgPSBpMiA8IGZpeGVkQ29sdW1uc0NvdW50ICYmIHRvdGFsV2lkdGhcblxuICAgICAgICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5zUHJvcHNbaTJdLndpZHRoXG4gICAgICAgICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaTJdLmxlZnRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY2VsbEluZm8gPSB7XG4gICAgICAgICAgICAgIC4uLnJvd0luZm8sXG4gICAgICAgICAgICAgIGlzRXhwYW5kZWQsXG4gICAgICAgICAgICAgIGNvbHVtbjogeyAuLi5jb2x1bW4gfSxcbiAgICAgICAgICAgICAgdmFsdWU6IHJvd0luZm8ucm93W2NvbHVtbi5pZF0sXG4gICAgICAgICAgICAgIHBpdm90ZWQ6IGNvbHVtbi5waXZvdGVkLFxuICAgICAgICAgICAgICBleHBhbmRlcjogY29sdW1uLmV4cGFuZGVyLFxuICAgICAgICAgICAgICBkaXNwbGF5UGl2b3RTdWJSb3dzOiBjb2x1bW4uZGlzcGxheVBpdm90U3ViUm93cyxcbiAgICAgICAgICAgICAgcmVzaXplZCxcbiAgICAgICAgICAgICAgc2hvdyxcbiAgICAgICAgICAgICAgdGRQcm9wcyxcbiAgICAgICAgICAgICAgY29sdW1uUHJvcHMsXG4gICAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAgIHN0eWxlcyxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjZWxsSW5mby52YWx1ZVxuXG4gICAgICAgICAgICBsZXQgaW50ZXJhY3Rpb25Qcm9wc1xuICAgICAgICAgICAgbGV0IGlzQnJhbmNoXG4gICAgICAgICAgICBsZXQgaXNQcmV2aWV3XG5cbiAgICAgICAgICAgIGNvbnN0IG9uRXhwYW5kZXJDbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgICBsZXQgbmV3RXhwYW5kZWQgPSBfLmNsb25lKGV4cGFuZGVkKVxuICAgICAgICAgICAgICBpZiAoaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIG5ld0V4cGFuZGVkID0gXy5zZXQobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBmYWxzZSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdFeHBhbmRlZCA9IF8uc2V0KG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwge30pXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiBuZXdFeHBhbmRlZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uRXhwYW5kZWRDaGFuZ2UgJiZcbiAgICAgICAgICAgICAgICAgIG9uRXhwYW5kZWRDaGFuZ2UobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGEgc3RhbmRhcmQgY2VsbFxuICAgICAgICAgICAgbGV0IHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICBjb2x1bW4uQ2VsbCxcbiAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIC8vIFJlc29sdmUgUmVuZGVyZXJzXG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uQWdncmVnYXRlZCB8fFxuICAgICAgICAgICAgICAoIWNvbHVtbi5hZ2dyZWdhdGUgPyBBZ2dyZWdhdGVkQ29tcG9uZW50IDogY29sdW1uLkNlbGwpXG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLkV4cGFuZGVyIHx8IEV4cGFuZGVyQ29tcG9uZW50XG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uUGl2b3RWYWx1ZSB8fCBQaXZvdFZhbHVlQ29tcG9uZW50XG4gICAgICAgICAgICBjb25zdCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCA9XG4gICAgICAgICAgICAgIFBpdm90Q29tcG9uZW50IHx8XG4gICAgICAgICAgICAgIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8UmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICA8UmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZFBpdm90Q29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLlBpdm90IHx8IERlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50XG5cbiAgICAgICAgICAgIC8vIElzIHRoaXMgY2VsbCBleHBhbmRhYmxlP1xuICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQgfHwgY2VsbEluZm8uZXhwYW5kZXIpIHtcbiAgICAgICAgICAgICAgLy8gTWFrZSBpdCBleHBhbmRhYmxlIGJ5IGRlZnVhbHRcbiAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcyA9IHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBvbkV4cGFuZGVyQ2xpY2ssXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gSWYgcGl2b3RlZCwgaGFzIG5vIHN1YlJvd3MsIGFuZCBkb2VzIG5vdCBoYXZlIGEgc3ViQ29tcG9uZW50LCBkbyBub3QgbWFrZSBleHBhbmRhYmxlXG4gICAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsSW5mby5zdWJSb3dzKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIVN1YkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkKSB7XG4gICAgICAgICAgICAgIC8vIElzIHRoaXMgY29sdW1uIGEgYnJhbmNoP1xuICAgICAgICAgICAgICBpc0JyYW5jaCA9XG4gICAgICAgICAgICAgICAgcm93SW5mby5yb3dbcGl2b3RJREtleV0gPT09IGNvbHVtbi5pZCAmJiBjZWxsSW5mby5zdWJSb3dzXG4gICAgICAgICAgICAgIC8vIFNob3VsZCB0aGlzIGNvbHVtbiBiZSBibGFuaz9cbiAgICAgICAgICAgICAgaXNQcmV2aWV3ID1cbiAgICAgICAgICAgICAgICBwaXZvdEJ5LmluZGV4T2YoY29sdW1uLmlkKSA+XG4gICAgICAgICAgICAgICAgcGl2b3RCeS5pbmRleE9mKHJvd0luZm8ucm93W3Bpdm90SURLZXldKSAmJiBjZWxsSW5mby5zdWJSb3dzXG4gICAgICAgICAgICAgIC8vIFBpdm90IENlbGwgUmVuZGVyIE92ZXJyaWRlXG4gICAgICAgICAgICAgIGlmIChpc0JyYW5jaCkge1xuICAgICAgICAgICAgICAgIC8vIGlzUGl2b3RcbiAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgIFJlc29sdmVkUGl2b3RDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmNlbGxJbmZvLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm93W3Bpdm90VmFsS2V5XSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICByb3dbcGl2b3RWYWxLZXldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzUHJldmlldykge1xuICAgICAgICAgICAgICAgIC8vIFNob3cgdGhlIHBpdm90IHByZXZpZXdcbiAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgIFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNlbGxJbmZvLmRpc3BsYXlQaXZvdFN1YlJvd3MpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbEluZm8uYWdncmVnYXRlZCkge1xuICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2VsbEluZm8uZXhwYW5kZXIpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICByb3dbcGl2b3RWYWxLZXldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgaWYgKHBpdm90QnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbEluZm8uZ3JvdXBlZEJ5UGl2b3QpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsSW5mby5zdWJSb3dzICYmICFTdWJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBjZWxsXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICAgICAgICBrZXk9e2kyICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAgICAgICAhc2hvdyAmJiAnLWhpZGRlbicsXG4gICAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlICYmICdydC1leHBhbmRhYmxlJyxcbiAgICAgICAgICAgICAgICAgIChpc0JyYW5jaCB8fCBpc1ByZXZpZXcpICYmICdydC1waXZvdCcsXG4gICAgICAgICAgICAgICAgICBpc0ZpeGVkICYmICctZml4ZWQnLFxuICAgICAgICAgICAgICAgICAgKGlzRml4ZWQgJiYgIXJlc29sdmVkQ2VsbCkgJiYgJy1lbXB0eSdcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgICAgICAgey4uLmludGVyYWN0aW9uUHJvcHN9XG4gICAgICAgICAgICAgICAgey4uLnRkUHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgICB7Li4uY29sdW1uUHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyZXNvbHZlZENlbGx9XG4gICAgICAgICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICBdO1xuXG4gICAgICBpZiAocm93SW5mby5zdWJSb3dzICYmIGlzRXhwYW5kZWQpIHtcbiAgICAgICAgcm93SW5mby5zdWJSb3dzLmZvckVhY2goKGQsIGkpID0+XG4gICAgICAgICAgcm93cy5wdXNoKC4uLm1ha2VQYWdlUm93KGQsIGksIHJvd0luZm8ubmVzdGluZ1BhdGgpKVxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKFN1YkNvbXBvbmVudCAmJiAhcm93SW5mby5zdWJSb3dzICYmIGlzRXhwYW5kZWQpIHtcbiAgICAgICAgcm93cy5wdXNoKFN1YkNvbXBvbmVudChyb3dJbmZvKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3dzO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWRSb3cgPSAocm93LCBpKSA9PiB7XG4gICAgICBjb25zdCB0clByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgJy1wYWRSb3cnLFxuICAgICAgICAgICAgKHBhZ2VSb3dzLmxlbmd0aCArIGkpICUgMiA/ICctZXZlbicgOiAnLW9kZCcsXG4gICAgICAgICAgICB0clByb3BzLmNsYXNzTmFtZVxuICAgICAgICAgICl9XG4gICAgICAgICAgc3R5bGU9e3RyUHJvcHMuc3R5bGUgfHwge319XG4gICAgICAgID5cbiAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VQYWRDb2x1bW4pfVxuICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWRDb2x1bW4gPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgdGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi50ZFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA8IGZpeGVkQ29sdW1uc0NvdW50ICYmIHRvdGFsV2lkdGhcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ud2lkdGhcbiAgICAgICAgc3R5bGVzLmxlZnQgPSBmaXhlZENvbHVtbnNQcm9wc1tpXS5sZWZ0XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgIXNob3cgJiYgJy1oaWRkZW4nLCB7ICctZml4ZWQnOiBpc0ZpeGVkIH0pfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgey4uLnRkUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChQYWRSb3dDb21wb25lbnQpfVxuICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdEZvb3RQcm9wcyA9IGdldFRmb290UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICBjb25zdCB0Rm9vdFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRmb290VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZm9vdENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17dEZvb3RQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgc3R5bGU9e3RGb290UHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRGb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHRGb290VHJQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgICAgc3R5bGU9e3RGb290VHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50Rm9vdFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VDb2x1bW5Gb290ZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGZvb3RDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbHVtbkZvb3RlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHRGb290VGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGZvb3RUZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkZvb3RlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0Rm9vdGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIHRGb290VGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uRm9vdGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRGb290VGRQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uRm9vdGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdG90YWxXaWR0aFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbnNQcm9wc1tpXS53aWR0aFxuICAgICAgICBzdHlsZXMubGVmdCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLmxlZnRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCAhc2hvdyAmJiAnLWhpZGRlbicsIHsgJy1maXhlZCc6IGlzRml4ZWQgfSl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4uY29sdW1uUHJvcHMucmVzdH1cbiAgICAgICAgICB7Li4udEZvb3RUZFByb3BzLnJlc3R9XG4gICAgICAgICAgey4uLmNvbHVtbkZvb3RlclByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkZvb3Rlciwge1xuICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWdpbmF0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFnaW5hdGlvblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRQYWdpbmF0aW9uUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnaW5hdGlvbkNvbXBvbmVudFxuICAgICAgICAgIHsuLi5yZXNvbHZlZFN0YXRlfVxuICAgICAgICAgIHBhZ2VzPXtwYWdlc31cbiAgICAgICAgICBjYW5QcmV2aW91cz17Y2FuUHJldmlvdXN9XG4gICAgICAgICAgY2FuTmV4dD17Y2FuTmV4dH1cbiAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMub25QYWdlQ2hhbmdlfVxuICAgICAgICAgIG9uUGFnZVNpemVDaGFuZ2U9e3RoaXMub25QYWdlU2l6ZUNoYW5nZX1cbiAgICAgICAgICBjbGFzc05hbWU9e3BhZ2luYXRpb25Qcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgc3R5bGU9e3BhZ2luYXRpb25Qcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4ucGFnaW5hdGlvblByb3BzLnJlc3R9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgKVxuICAgIGNvbnN0IHRhYmxlUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRUYWJsZVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIClcbiAgICBjb25zdCB0Qm9keVByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0VGJvZHlQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICApXG4gICAgY29uc3QgbG9hZGluZ1Byb3BzID0gZ2V0TG9hZGluZ1Byb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIGNvbnN0IG5vRGF0YVByb3BzID0gZ2V0Tm9EYXRhUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgY29uc3QgcmVzaXplclByb3BzID0gZ2V0UmVzaXplclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuXG4gICAgY29uc3QgZGlzcGxheUZvb3RlclRvcCA9IGZvb3RlclBsYWNlbWVudCA9PT0gJ3RvcCcgfHwgZm9vdGVyUGxhY2VtZW50ID09PSAnYm90aCdcbiAgICBjb25zdCBkaXNwbGF5Rm9vdGVyQm90dG9tID0gZm9vdGVyUGxhY2VtZW50ID09PSAnYm90dG9tJyB8fCBmb290ZXJQbGFjZW1lbnQgPT09ICdib3RoJ1xuXG4gICAgY29uc3QgbWFrZVRhYmxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgY29sR3JvdXAgPSBtYWtlQ29sR3JvdXAoKTtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBtYWtlUGFnaW5hdGlvbigpXG4gICAgICBjb25zdCBmb290ZXIgPSBoYXNDb2x1bW5Gb290ZXIgPyBtYWtlQ29sdW1uRm9vdGVycygpIDogbnVsbFxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdSZWFjdFRhYmxlJywgY2xhc3NOYW1lLCByb290UHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IHRvdGFsV2lkdGgsXG4gICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgIC4uLnJvb3RQcm9wcy5zdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93UGFnaW5hdGlvbiAmJiBzaG93UGFnaW5hdGlvblRvcFxuICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT0ncGFnaW5hdGlvbi10b3AnPlxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIDxUYWJsZVdyYXBwZXIgd3JhcHBlclJlZj17KGMpID0+IHRoaXMudGFibGVXcmFwcGVyID0gY30+XG4gICAgICAgICAgICA8VGFibGVDb21wb25lbnRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAgIHRhYmxlUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJlc2l6aW5nID8gJ3J0LXJlc2l6aW5nJyA6ICcnXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHN0eWxlPXt0YWJsZVByb3BzLnN0eWxlfVxuICAgICAgICAgICAgICB7Li4udGFibGVQcm9wcy5yZXN0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y29sR3JvdXB9XG4gICAgICAgICAgICAgIHtoYXNIZWFkZXJHcm91cHMgPyBtYWtlSGVhZGVyR3JvdXBzKCkgOiBudWxsfVxuICAgICAgICAgICAgICB7bWFrZUhlYWRlcnMoKX1cbiAgICAgICAgICAgICAge2hhc0ZpbHRlcnMgPyBtYWtlRmlsdGVycygpIDogbnVsbH1cbiAgICAgICAgICAgICAge2Rpc3BsYXlGb290ZXJUb3AgJiYgZm9vdGVyfVxuICAgICAgICAgICAgICA8VGJvZHlDb21wb25lbnRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModEJvZHlQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt0Qm9keVByb3BzLnN0eWxlfVxuICAgICAgICAgICAgICAgIHsuLi50Qm9keVByb3BzLnJlc3R9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cGFnZVJvd3MubWFwKChkLCBpKSA9PiBtYWtlUGFnZVJvdyhkLCBpKSl9XG4gICAgICAgICAgICAgICAge3BhZFJvd3MubWFwKG1ha2VQYWRSb3cpfVxuICAgICAgICAgICAgICA8L1Rib2R5Q29tcG9uZW50PlxuICAgICAgICAgICAgICB7ZGlzcGxheUZvb3RlckJvdHRvbSAmJiBmb290ZXJ9XG4gICAgICAgICAgICA8L1RhYmxlQ29tcG9uZW50PlxuICAgICAgICAgIDwvVGFibGVXcmFwcGVyPlxuICAgICAgICAgIHtzaG93UGFnaW5hdGlvbiAmJiBzaG93UGFnaW5hdGlvbkJvdHRvbVxuICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT0ncGFnaW5hdGlvbi1ib3R0b20nPlxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIHshcGFnZVJvd3MubGVuZ3RoICYmXG4gICAgICAgICAgPE5vRGF0YUNvbXBvbmVudCB7Li4ubm9EYXRhUHJvcHN9PlxuICAgICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KG5vRGF0YVRleHQpfVxuICAgICAgICAgIDwvTm9EYXRhQ29tcG9uZW50Pn1cbiAgICAgICAgICA8TG9hZGluZ0NvbXBvbmVudFxuICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgIGxvYWRpbmdUZXh0PXtsb2FkaW5nVGV4dH1cbiAgICAgICAgICAgIHsuLi5sb2FkaW5nUHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gY2hpbGRQcm9wcyBhcmUgb3B0aW9uYWxseSBwYXNzZWQgdG8gYSBmdW5jdGlvbi1hcy1hLWNoaWxkXG4gICAgcmV0dXJuIGNoaWxkcmVuID8gY2hpbGRyZW4oZmluYWxTdGF0ZSwgbWFrZVRhYmxlLCB0aGlzKSA6IG1ha2VUYWJsZSgpXG4gIH1cbn1cbiJdfQ==