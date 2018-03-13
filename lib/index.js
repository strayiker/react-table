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
          rowKeyProp = resolvedState.rowKeyProp,
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

        var original = row[originalKey];
        var rowKey = rowKeyProp ? original[rowKeyProp] : undefined;
        var rowInfo = {
          original: original,
          row: row,
          index: row[indexKey],
          viewIndex: ++rowIndex,
          level: path.length,
          nestingPath: path.concat([rowKey || i]),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0IiwicmVzb2x2ZWRTdGF0ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJnZXRQcm9wcyIsImdldFRhYmxlUHJvcHMiLCJnZXRDb2xHcm91cENvbFByb3BzIiwiZ2V0VGhlYWRHcm91cFByb3BzIiwiZ2V0VGhlYWRHcm91cFRyUHJvcHMiLCJnZXRUaGVhZEdyb3VwVGhQcm9wcyIsImdldFRoZWFkUHJvcHMiLCJnZXRUaGVhZFRyUHJvcHMiLCJnZXRUaGVhZFRoUHJvcHMiLCJnZXRUaGVhZEZpbHRlclByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJUclByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJUaFByb3BzIiwiZ2V0VGJvZHlQcm9wcyIsImdldFRyUHJvcHMiLCJnZXRUZFByb3BzIiwiZ2V0VGZvb3RQcm9wcyIsImdldFRmb290VHJQcm9wcyIsImdldFRmb290VGRQcm9wcyIsImdldFBhZ2luYXRpb25Qcm9wcyIsImdldExvYWRpbmdQcm9wcyIsImdldE5vRGF0YVByb3BzIiwiZ2V0UmVzaXplclByb3BzIiwic2hvd1BhZ2luYXRpb24iLCJzaG93UGFnaW5hdGlvblRvcCIsInNob3dQYWdpbmF0aW9uQm90dG9tIiwic2hvd1NvcnRPcmRlciIsIm1hbnVhbCIsImxvYWRpbmdUZXh0Iiwibm9EYXRhVGV4dCIsInNvcnRhYmxlIiwicmVzaXphYmxlIiwiZmlsdGVyYWJsZSIsImZvb3RlclBsYWNlbWVudCIsInBpdm90SURLZXkiLCJwaXZvdFZhbEtleSIsInBpdm90QnkiLCJzdWJSb3dzS2V5IiwiYWdncmVnYXRlZEtleSIsIm9yaWdpbmFsS2V5IiwiaW5kZXhLZXkiLCJyb3dLZXlQcm9wIiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJmaXhlZENvbHVtbnNDb3VudCIsImxvYWRpbmciLCJwYWdlcyIsIm9uRXhwYW5kZWRDaGFuZ2UiLCJUYWJsZVdyYXBwZXIiLCJUYWJsZUNvbXBvbmVudCIsIlRoZWFkQ29tcG9uZW50IiwiVGJvZHlDb21wb25lbnQiLCJUckNvbXBvbmVudCIsIlRoQ29tcG9uZW50IiwiVGRDb21wb25lbnQiLCJUZm9vdENvbXBvbmVudCIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJMb2FkaW5nQ29tcG9uZW50IiwiU3ViQ29tcG9uZW50IiwiTm9EYXRhQ29tcG9uZW50IiwiUmVzaXplckNvbXBvbmVudCIsIlNvcnRPcmRlckNvbXBvbmVudCIsIkV4cGFuZGVyQ29tcG9uZW50IiwiUGl2b3RWYWx1ZUNvbXBvbmVudCIsIlBpdm90Q29tcG9uZW50IiwiQWdncmVnYXRlZENvbXBvbmVudCIsIkZpbHRlckNvbXBvbmVudCIsIlBhZFJvd0NvbXBvbmVudCIsInJlc29sdmVkRGF0YSIsImFsbFZpc2libGVDb2x1bW5zIiwiaGVhZGVyR3JvdXBzIiwiaGFzSGVhZGVyR3JvdXBzIiwic29ydGVkRGF0YSIsInRvdGFsV2lkdGgiLCJ3aWR0aCIsInBhZ2VSb3dzIiwic3RhcnRSb3ciLCJlbmRSb3ciLCJsZW5ndGgiLCJzbGljZSIsIm1pblJvd3MiLCJwYWRSb3dzIiwicmFuZ2UiLCJNYXRoIiwibWF4IiwiaGFzQ29sdW1uRm9vdGVyIiwic29tZSIsImQiLCJGb290ZXIiLCJoYXNGaWx0ZXJzIiwicmVjdXJzZVJvd3NWaWV3SW5kZXgiLCJyb3dzIiwicGF0aCIsImluZGV4IiwibWFwIiwicm93IiwiaSIsInJvd1dpdGhWaWV3SW5kZXgiLCJfdmlld0luZGV4IiwibmV3UGF0aCIsImNvbmNhdCIsImdldCIsImNhblByZXZpb3VzIiwiY2FuTmV4dCIsInJvd0luZGV4IiwiZmluYWxTdGF0ZSIsImZpeGVkQ29sdW1uc1Byb3BzIiwicmF3Q29sdW1uc1dpZHRoIiwiZmxvb3JDb2x1bW5zV2lkdGgiLCJtYWtlQ29sR3JvdXAiLCJtYWtlQ29sIiwiY29sdW1uIiwiaXNEdW1teSIsImlzRml4ZWQiLCJpc0lubmVyRml4ZWQiLCJpc0xhc3RGaXhlZCIsInJlc2l6ZWRDb2wiLCJmaW5kIiwieCIsImlkIiwiY29sZ3JvdXBDb2xQcm9wcyIsInNwbGl0UHJvcHMiLCJ1bmRlZmluZWQiLCJjb2x1bW5Db2xncm91cENvbFByb3BzIiwiY2xhc3NlcyIsImNvbEdyb3VwQ29sQ2xhc3NOYW1lIiwic3R5bGVzIiwiY29sR3JvdXBDb2xTdHlsZSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJnZXRGaXJzdERlZmluZWQiLCJ2YWx1ZSIsImluc2lkZVdpZHRoIiwid2lkdGhJc1BlcmNlbnRzIiwiaXNQZXJjZW50cyIsIm1pbldpZHRoSXNQZXJjZW50cyIsIm1heFdpZHRoSXNQZXJjZW50cyIsIndpZHRoVmFsdWUiLCJwYXJzZUludCIsIm1pbldpZHRoVmFsdWUiLCJtYXhXaWR0aFZhbHVlIiwicGVyY2VudHNUb1B4IiwiY2xhbXAiLCJmbG9vciIsImRpZmYiLCJsZWZ0IiwicmVkdWNlIiwiaXRlbSIsInB1c2giLCJtYWtlSGVhZGVyR3JvdXBzIiwidGhlYWRHcm91cFByb3BzIiwidGhlYWRHcm91cFRyUHJvcHMiLCJyZXN0IiwibWFrZUhlYWRlckdyb3VwIiwidGhlYWRHcm91cFRoUHJvcHMiLCJjb2x1bW5IZWFkZXJQcm9wcyIsImdldEhlYWRlclByb3BzIiwiaGVhZGVyQ2xhc3NOYW1lIiwiaGVhZGVyU3R5bGUiLCJjb2xTcGFuIiwiY29sdW1ucyIsImNvbnRlbnQiLCJub3JtYWxpemVDb21wb25lbnQiLCJIZWFkZXIiLCJkYXRhIiwibWFrZUhlYWRlcnMiLCJ0aGVhZFByb3BzIiwidGhlYWRUclByb3BzIiwibWFrZUhlYWRlciIsInNvcnQiLCJzaG93IiwidGhlYWRUaFByb3BzIiwiaXNSZXNpemFibGUiLCJyZXNpemVyIiwiZSIsInJlc2l6ZXJQcm9wcyIsInNvcnRPcmRlciIsImRlc2MiLCJpc1NvcnRhYmxlIiwiaW5jbHVkZXMiLCJzaGlmdEtleSIsIm1ha2VGaWx0ZXJzIiwidGhlYWRGaWx0ZXJQcm9wcyIsInRoZWFkRmlsdGVyVHJQcm9wcyIsIm1ha2VGaWx0ZXIiLCJ0aGVhZEZpbHRlclRoUHJvcHMiLCJmaWx0ZXIiLCJSZXNvbHZlZEZpbHRlckNvbXBvbmVudCIsIkZpbHRlciIsImlzRmlsdGVyYWJsZSIsIm9uQ2hhbmdlIiwibWFrZVBhZ2VSb3ciLCJvcmlnaW5hbCIsInJvd0tleSIsInJvd0luZm8iLCJ2aWV3SW5kZXgiLCJsZXZlbCIsIm5lc3RpbmdQYXRoIiwiYWdncmVnYXRlZCIsImdyb3VwZWRCeVBpdm90Iiwic3ViUm93cyIsImlzRXhwYW5kZWQiLCJ0clByb3BzIiwiam9pbiIsImkyIiwidGRQcm9wcyIsImNvbHVtblByb3BzIiwiY2VsbEluZm8iLCJwaXZvdGVkIiwiZXhwYW5kZXIiLCJkaXNwbGF5UGl2b3RTdWJSb3dzIiwiaW50ZXJhY3Rpb25Qcm9wcyIsImlzQnJhbmNoIiwiaXNQcmV2aWV3Iiwib25FeHBhbmRlckNsaWNrIiwibmV3RXhwYW5kZWQiLCJjbG9uZSIsInNldCIsInNldFN0YXRlV2l0aERhdGEiLCJyZXNvbHZlZENlbGwiLCJDZWxsIiwiUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50IiwiQWdncmVnYXRlZCIsImFnZ3JlZ2F0ZSIsIlJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQiLCJFeHBhbmRlciIsIlJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCIsIlBpdm90VmFsdWUiLCJEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlJlc29sdmVkUGl2b3RDb21wb25lbnQiLCJQaXZvdCIsImV4cGFuZGFibGUiLCJvbkNsaWNrIiwiaW5kZXhPZiIsImZvckVhY2giLCJtYWtlUGFkUm93IiwibWFrZVBhZENvbHVtbiIsIm1ha2VDb2x1bW5Gb290ZXJzIiwidEZvb3RQcm9wcyIsInRGb290VHJQcm9wcyIsIm1ha2VDb2x1bW5Gb290ZXIiLCJ0Rm9vdFRkUHJvcHMiLCJjb2x1bW5Gb290ZXJQcm9wcyIsImdldEZvb3RlclByb3BzIiwibWFrZVBhZ2luYXRpb24iLCJwYWdpbmF0aW9uUHJvcHMiLCJyb290UHJvcHMiLCJ0YWJsZVByb3BzIiwidEJvZHlQcm9wcyIsImxvYWRpbmdQcm9wcyIsIm5vRGF0YVByb3BzIiwiZGlzcGxheUZvb3RlclRvcCIsImRpc3BsYXlGb290ZXJCb3R0b20iLCJtYWtlVGFibGUiLCJjb2xHcm91cCIsInBhZ2luYXRpb24iLCJmb290ZXIiLCJjIiwidGFibGVXcmFwcGVyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBSkE7OztBQU1PLElBQU1BLHdFQUFOOztJQUVjQyxVOzs7QUFHbkIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFHakIsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUNBLFVBQUtFLGFBQUws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V0FBQ3BMLFNBQVNHLE1BQVYsSUFDRDtBQUFDLDJCQUFEO0FBQXFCNEssdUJBQXJCO0FBQ0csNEJBQUV4RixrQkFBRixDQUFxQnBJLFVBQXJCO0FBREgsV0E3Q0Y7QUFnREUsd0NBQUMsZ0JBQUQ7QUFDRSxxQkFBU2UsT0FEWDtBQUVFLHlCQUFhaEI7QUFGZixhQUdNNE4sWUFITjtBQWhERixTQURGO0FBd0RELE9BN0REOztBQStEQTtBQUNBLGFBQU8xUCxXQUFXQSxTQUFTMEcsVUFBVCxFQUFxQm9KLFNBQXJCLEVBQWdDLElBQWhDLENBQVgsR0FBbURBLFdBQTFEO0FBQ0Q7Ozs7RUExZ0NxQyx1QkFBUSwwQ0FBUixDOztBQUFuQmhTLFUsQ0FDWnNTLFk7a0JBRFl0UyxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbi8vXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IExpZmVjeWNsZSBmcm9tICcuL2xpZmVjeWNsZSdcbmltcG9ydCBNZXRob2RzIGZyb20gJy4vbWV0aG9kcydcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0UHJvcHMnXG5cbmV4cG9ydCBjb25zdCBSZWFjdFRhYmxlRGVmYXVsdHMgPSBkZWZhdWx0UHJvcHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUYWJsZSBleHRlbmRzIE1ldGhvZHMoTGlmZWN5Y2xlKENvbXBvbmVudCkpIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wc1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5nZXRSZXNvbHZlZFN0YXRlID0gdGhpcy5nZXRSZXNvbHZlZFN0YXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmdldERhdGFNb2RlbCA9IHRoaXMuZ2V0RGF0YU1vZGVsLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFNvcnRlZERhdGEgPSB0aGlzLmdldFNvcnRlZERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZmlyZUZldGNoRGF0YSA9IHRoaXMuZmlyZUZldGNoRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRQcm9wT3JTdGF0ZSA9IHRoaXMuZ2V0UHJvcE9yU3RhdGUuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0U3RhdGVPclByb3AgPSB0aGlzLmdldFN0YXRlT3JQcm9wLmJpbmQodGhpcylcbiAgICB0aGlzLmZpbHRlckRhdGEgPSB0aGlzLmZpbHRlckRhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuc29ydERhdGEgPSB0aGlzLnNvcnREYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmdldE1pblJvd3MgPSB0aGlzLmdldE1pblJvd3MuYmluZCh0aGlzKVxuICAgIHRoaXMub25QYWdlQ2hhbmdlID0gdGhpcy5vblBhZ2VDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25QYWdlU2l6ZUNoYW5nZSA9IHRoaXMub25QYWdlU2l6ZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zb3J0Q29sdW1uID0gdGhpcy5zb3J0Q29sdW1uLmJpbmQodGhpcylcbiAgICB0aGlzLmZpbHRlckNvbHVtbiA9IHRoaXMuZmlsdGVyQ29sdW1uLmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0ID0gdGhpcy5yZXNpemVDb2x1bW5TdGFydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5FbmQgPSB0aGlzLnJlc2l6ZUNvbHVtbkVuZC5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcgPSB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZy5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGFnZTogMCxcbiAgICAgIHBhZ2VTaXplOiBwcm9wcy5kZWZhdWx0UGFnZVNpemUsXG4gICAgICBzb3J0ZWQ6IHByb3BzLmRlZmF1bHRTb3J0ZWQsXG4gICAgICBleHBhbmRlZDogcHJvcHMuZGVmYXVsdEV4cGFuZGVkLFxuICAgICAgZmlsdGVyZWQ6IHByb3BzLmRlZmF1bHRGaWx0ZXJlZCxcbiAgICAgIHJlc2l6ZWQ6IHByb3BzLmRlZmF1bHRSZXNpemVkLFxuICAgICAgY3VycmVudGx5UmVzaXppbmc6IGZhbHNlLFxuICAgICAgc2tpcE5leHRTb3J0OiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpXG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIGdldFByb3BzLFxuICAgICAgZ2V0VGFibGVQcm9wcyxcbiAgICAgIGdldENvbEdyb3VwQ29sUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkR3JvdXBUaFByb3BzLFxuICAgICAgZ2V0VGhlYWRQcm9wcyxcbiAgICAgIGdldFRoZWFkVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkRmlsdGVyUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclRoUHJvcHMsXG4gICAgICBnZXRUYm9keVByb3BzLFxuICAgICAgZ2V0VHJQcm9wcyxcbiAgICAgIGdldFRkUHJvcHMsXG4gICAgICBnZXRUZm9vdFByb3BzLFxuICAgICAgZ2V0VGZvb3RUclByb3BzLFxuICAgICAgZ2V0VGZvb3RUZFByb3BzLFxuICAgICAgZ2V0UGFnaW5hdGlvblByb3BzLFxuICAgICAgZ2V0TG9hZGluZ1Byb3BzLFxuICAgICAgZ2V0Tm9EYXRhUHJvcHMsXG4gICAgICBnZXRSZXNpemVyUHJvcHMsXG4gICAgICBzaG93UGFnaW5hdGlvbixcbiAgICAgIHNob3dQYWdpbmF0aW9uVG9wLFxuICAgICAgc2hvd1BhZ2luYXRpb25Cb3R0b20sXG4gICAgICBzaG93U29ydE9yZGVyLFxuICAgICAgbWFudWFsLFxuICAgICAgbG9hZGluZ1RleHQsXG4gICAgICBub0RhdGFUZXh0LFxuICAgICAgc29ydGFibGUsXG4gICAgICByZXNpemFibGUsXG4gICAgICBmaWx0ZXJhYmxlLFxuICAgICAgZm9vdGVyUGxhY2VtZW50LFxuICAgICAgLy8gUGl2b3RpbmcgU3RhdGVcbiAgICAgIHBpdm90SURLZXksXG4gICAgICBwaXZvdFZhbEtleSxcbiAgICAgIHBpdm90QnksXG4gICAgICBzdWJSb3dzS2V5LFxuICAgICAgYWdncmVnYXRlZEtleSxcbiAgICAgIG9yaWdpbmFsS2V5LFxuICAgICAgaW5kZXhLZXksXG4gICAgICByb3dLZXlQcm9wLFxuICAgICAgZ3JvdXBlZEJ5UGl2b3RLZXksXG4gICAgICAvLyBGaXhlZFxuICAgICAgZml4ZWRDb2x1bW5zQ291bnQsXG4gICAgICAvLyBTdGF0ZVxuICAgICAgbG9hZGluZyxcbiAgICAgIHBhZ2VTaXplLFxuICAgICAgcGFnZSxcbiAgICAgIHNvcnRlZCxcbiAgICAgIGZpbHRlcmVkLFxuICAgICAgcmVzaXplZCxcbiAgICAgIGV4cGFuZGVkLFxuICAgICAgcGFnZXMsXG4gICAgICBvbkV4cGFuZGVkQ2hhbmdlLFxuICAgICAgLy8gQ29tcG9uZW50c1xuICAgICAgVGFibGVXcmFwcGVyLFxuICAgICAgVGFibGVDb21wb25lbnQsXG4gICAgICBUaGVhZENvbXBvbmVudCxcbiAgICAgIFRib2R5Q29tcG9uZW50LFxuICAgICAgVHJDb21wb25lbnQsXG4gICAgICBUaENvbXBvbmVudCxcbiAgICAgIFRkQ29tcG9uZW50LFxuICAgICAgVGZvb3RDb21wb25lbnQsXG4gICAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgICAgTG9hZGluZ0NvbXBvbmVudCxcbiAgICAgIFN1YkNvbXBvbmVudCxcbiAgICAgIE5vRGF0YUNvbXBvbmVudCxcbiAgICAgIFJlc2l6ZXJDb21wb25lbnQsXG4gICAgICBTb3J0T3JkZXJDb21wb25lbnQsXG4gICAgICBFeHBhbmRlckNvbXBvbmVudCxcbiAgICAgIFBpdm90VmFsdWVDb21wb25lbnQsXG4gICAgICBQaXZvdENvbXBvbmVudCxcbiAgICAgIEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICBGaWx0ZXJDb21wb25lbnQsXG4gICAgICBQYWRSb3dDb21wb25lbnQsXG4gICAgICAvLyBEYXRhIG1vZGVsXG4gICAgICByZXNvbHZlZERhdGEsXG4gICAgICBhbGxWaXNpYmxlQ29sdW1ucyxcbiAgICAgIGhlYWRlckdyb3VwcyxcbiAgICAgIGhhc0hlYWRlckdyb3VwcyxcbiAgICAgIC8vIFNvcnRlZCBEYXRhXG4gICAgICBzb3J0ZWREYXRhLFxuICAgICAgY3VycmVudGx5UmVzaXppbmcsXG4gICAgICB3aWR0aDogdG90YWxXaWR0aCxcbiAgICB9ID0gcmVzb2x2ZWRTdGF0ZVxuXG4gICAgLy8gUGFnaW5hdGlvblxuICAgIGxldCBwYWdlUm93cyA9IHNvcnRlZERhdGE7XG4gICAgbGV0IHN0YXJ0Um93ID0gMDtcbiAgICBsZXQgZW5kUm93ID0gc29ydGVkRGF0YS5sZW5ndGg7XG5cbiAgICBpZiAobWFudWFsKSB7XG4gICAgICBwYWdlUm93cyA9IHJlc29sdmVkRGF0YTtcbiAgICB9IGVsc2UgaWYgKHBhZ2VTaXplID4gMCkge1xuICAgICAgc3RhcnRSb3cgPSBwYWdlU2l6ZSAqIHBhZ2VcbiAgICAgIGVuZFJvdyA9IHN0YXJ0Um93ICsgcGFnZVNpemVcbiAgICAgIHBhZ2VSb3dzID0gc29ydGVkRGF0YS5zbGljZShzdGFydFJvdywgZW5kUm93KVxuICAgIH1cblxuICAgIGNvbnN0IG1pblJvd3MgPSB0aGlzLmdldE1pblJvd3MoKVxuICAgIGNvbnN0IHBhZFJvd3MgPSBfLnJhbmdlKE1hdGgubWF4KG1pblJvd3MgLSBwYWdlUm93cy5sZW5ndGgsIDApKVxuXG4gICAgY29uc3QgaGFzQ29sdW1uRm9vdGVyID0gYWxsVmlzaWJsZUNvbHVtbnMuc29tZShkID0+IGQuRm9vdGVyKVxuICAgIGNvbnN0IGhhc0ZpbHRlcnMgPSBmaWx0ZXJhYmxlIHx8IGFsbFZpc2libGVDb2x1bW5zLnNvbWUoZCA9PiBkLmZpbHRlcmFibGUpXG5cbiAgICBjb25zdCByZWN1cnNlUm93c1ZpZXdJbmRleCA9IChyb3dzLCBwYXRoID0gW10sIGluZGV4ID0gLTEpID0+IHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICByb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgICBpbmRleCsrXG4gICAgICAgICAgICBjb25zdCByb3dXaXRoVmlld0luZGV4ID0ge1xuICAgICAgICAgICAgICAuLi5yb3csXG4gICAgICAgICAgICAgIF92aWV3SW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UGF0aCA9IHBhdGguY29uY2F0KFtpXSlcbiAgICAgICAgICAgIGlmIChyb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldICYmIF8uZ2V0KGV4cGFuZGVkLCBuZXdQYXRoKSkge1xuICAgICAgICAgICAgICA7W3Jvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0sIGluZGV4XSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KFxuICAgICAgICAgICAgICAgIHJvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0sXG4gICAgICAgICAgICAgICAgbmV3UGF0aCxcbiAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm93V2l0aFZpZXdJbmRleFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICBdXG4gICAgICB9XG4gICAgO1twYWdlUm93c10gPSByZWN1cnNlUm93c1ZpZXdJbmRleChwYWdlUm93cylcblxuICAgIGNvbnN0IGNhblByZXZpb3VzID0gcGFnZSA+IDBcbiAgICBjb25zdCBjYW5OZXh0ID0gcGFnZSArIDEgPCBwYWdlc1xuXG4gICAgbGV0IHJvd0luZGV4ID0gLTFcblxuICAgIGNvbnN0IGZpbmFsU3RhdGUgPSB7XG4gICAgICAuLi5yZXNvbHZlZFN0YXRlLFxuICAgICAgc3RhcnRSb3csXG4gICAgICBlbmRSb3csXG4gICAgICBwYWdlUm93cyxcbiAgICAgIG1pblJvd3MsXG4gICAgICBwYWRSb3dzLFxuICAgICAgaGFzQ29sdW1uRm9vdGVyLFxuICAgICAgY2FuUHJldmlvdXMsXG4gICAgICBjYW5OZXh0LFxuICAgIH1cblxuICAgIGNvbnN0IGZpeGVkQ29sdW1uc1Byb3BzID0gW107XG4gICAgbGV0IHJhd0NvbHVtbnNXaWR0aCA9IDBcbiAgICBsZXQgZmxvb3JDb2x1bW5zV2lkdGggPSAwXG5cbiAgICAvLyBWaXN1YWwgQ29tcG9uZW50c1xuXG4gICAgY29uc3QgbWFrZUNvbEdyb3VwID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGNvbGdyb3VwPlxuICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUNvbCl9XG4gICAgICAgIDwvY29sZ3JvdXA+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbCA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IGlzRHVtbXkgPSBpID09PSBhbGxWaXNpYmxlQ29sdW1ucy5sZW5ndGggLSAxXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA8IGZpeGVkQ29sdW1uc0NvdW50XG4gICAgICBjb25zdCBpc0lubmVyRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgLSAxXG4gICAgICBjb25zdCBpc0xhc3RGaXhlZCA9IGkgPT09IGZpeGVkQ29sdW1uc0NvdW50IC0gMVxuXG4gICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sdW1uLmlkKSB8fCB7fVxuXG4gICAgICBjb25zdCBjb2xncm91cENvbFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRDb2xHcm91cENvbFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uQ29sZ3JvdXBDb2xQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldENvbEdyb3VwQ29sUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5jb2xHcm91cENvbENsYXNzTmFtZSxcbiAgICAgICAgY29sZ3JvdXBDb2xQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkNvbGdyb3VwQ29sUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5jb2xHcm91cENvbFN0eWxlLFxuICAgICAgICAuLi5jb2xncm91cENvbFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Db2xncm91cENvbFByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBsZXQgbWluV2lkdGggPSBjb2x1bW4ubWluV2lkdGhcbiAgICAgIGxldCBtYXhXaWR0aCA9IGNvbHVtbi5tYXhXaWR0aFxuICAgICAgbGV0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgbWluV2lkdGgsXG4gICAgICAgIDBcbiAgICAgIClcblxuICAgICAgLy8gY2FsY3VsYXRlIHB4XG4gICAgICBpZiAodG90YWxXaWR0aCkge1xuICAgICAgICBjb25zdCBpbnNpZGVXaWR0aCA9IHRvdGFsV2lkdGggLSAyIC8vIFN1YnRyYWN0IGJvcmRlcnNcbiAgICAgICAgY29uc3Qgd2lkdGhJc1BlcmNlbnRzID0gXy5pc1BlcmNlbnRzKHdpZHRoKVxuICAgICAgICBjb25zdCBtaW5XaWR0aElzUGVyY2VudHMgPSBfLmlzUGVyY2VudHMobWluV2lkdGgpXG4gICAgICAgIGNvbnN0IG1heFdpZHRoSXNQZXJjZW50cyA9IF8uaXNQZXJjZW50cyhtYXhXaWR0aClcblxuICAgICAgICBjb25zdCB3aWR0aFZhbHVlID0gcGFyc2VJbnQod2lkdGgsIDEwKVxuICAgICAgICBjb25zdCBtaW5XaWR0aFZhbHVlID0gbWluV2lkdGggJiYgcGFyc2VJbnQobWluV2lkdGgsIDEwKVxuICAgICAgICBjb25zdCBtYXhXaWR0aFZhbHVlID0gbWF4V2lkdGggJiYgcGFyc2VJbnQobWF4V2lkdGgsIDEwKVxuXG4gICAgICAgIHdpZHRoID0gd2lkdGhJc1BlcmNlbnRzXG4gICAgICAgICAgPyBfLnBlcmNlbnRzVG9QeCh3aWR0aFZhbHVlLCBpbnNpZGVXaWR0aClcbiAgICAgICAgICA6IHdpZHRoVmFsdWVcblxuICAgICAgICBtaW5XaWR0aCA9IG1pbldpZHRoSXNQZXJjZW50c1xuICAgICAgICAgID8gXy5wZXJjZW50c1RvUHgobWluV2lkdGhWYWx1ZSwgaW5zaWRlV2lkdGgpXG4gICAgICAgICAgOiBtaW5XaWR0aFZhbHVlXG5cbiAgICAgICAgbWF4V2lkdGggPSBtYXhXaWR0aElzUGVyY2VudHNcbiAgICAgICAgICA/IF8ucGVyY2VudHNUb1B4KG1heFdpZHRoVmFsdWUsIGluc2lkZVdpZHRoKVxuICAgICAgICAgIDogbWF4V2lkdGhWYWx1ZVxuXG4gICAgICAgIHdpZHRoID0gXy5jbGFtcCh3aWR0aCwgbWluV2lkdGgsIG1heFdpZHRoKVxuXG4gICAgICAgIHJhd0NvbHVtbnNXaWR0aCArPSB3aWR0aFxuICAgICAgICB3aWR0aCA9IE1hdGguZmxvb3Iod2lkdGgpXG4gICAgICAgIGZsb29yQ29sdW1uc1dpZHRoICs9IHdpZHRoXG5cbiAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguZmxvb3IocmF3Q29sdW1uc1dpZHRoIC0gZmxvb3JDb2x1bW5zV2lkdGgpXG5cbiAgICAgICAgaWYgKGRpZmYgPj0gMSkge1xuICAgICAgICAgIHdpZHRoICs9IGRpZmZcbiAgICAgICAgICBmbG9vckNvbHVtbnNXaWR0aCArPSBkaWZmXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICAgIGNvbnN0IGxlZnQgPSBmaXhlZENvbHVtbnNQcm9wcy5yZWR1Y2UoKHZhbHVlLCBpdGVtKSA9PiB2YWx1ZSArIGl0ZW0ud2lkdGgsIDApXG4gICAgICAgICAgZml4ZWRDb2x1bW5zUHJvcHMucHVzaCh7IHdpZHRoLCBsZWZ0IH0pXG5cbiAgICAgICAgICBpZiAoaXNMYXN0Rml4ZWQpIHtcbiAgICAgICAgICAgIHdpZHRoICs9IGxlZnRcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aWR0aCA9IGAke3dpZHRofXB4YFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNJbm5lckZpeGVkKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxjb2xcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdydC1jb2xncm91cC1jb2wnLCBjbGFzc2VzLCB7ICctZHVtbXknOiBpc0R1bW15IH0pfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICB3aWR0aDogIWlzRHVtbXkgPyB3aWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXJHcm91cHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEdyb3VwUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWhlYWRlckdyb3VwcycsIHRoZWFkR3JvdXBQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt0aGVhZEdyb3VwUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRoZWFkR3JvdXBQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkR3JvdXBUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZEdyb3VwVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZEdyb3VwVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKG1ha2VIZWFkZXJHcm91cCl9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyR3JvdXAgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEdyb3VwVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEdyb3VwVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkR3JvdXBUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29sU3BhbiA9IGNvbHVtbi5jb2x1bW5zLmxlbmd0aFxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZEdyb3VwVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgICBjb2xTcGFuLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0R1bW15ID0gaSA9PT0gaGVhZGVyR3JvdXBzLmxlbmd0aCAtIDFcbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdG90YWxXaWR0aFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbnNQcm9wc1tpXS53aWR0aFxuICAgICAgICBzdHlsZXMubGVmdCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLmxlZnRcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29udGVudCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5IZWFkZXIsIHtcbiAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsIHsgJy1kdW1teSc6IGlzRHVtbXksICctZW1wdHknOiAhY29udGVudCwgJy1maXhlZCc6IGlzRml4ZWQgfSl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctaGVhZGVyJywgdGhlYWRQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt0aGVhZFByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50aGVhZFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlSGVhZGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCBzb3J0ID0gc29ydGVkLmZpbmQoZCA9PiBkLmlkID09PSBjb2x1bW4uaWQpXG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB0aGVhZFRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1Jlc2l6YWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5yZXNpemFibGUsIHJlc2l6YWJsZSwgZmFsc2UpXG4gICAgICBjb25zdCByZXNpemVyID0gaXNSZXNpemFibGVcbiAgICAgICAgPyAoPFJlc2l6ZXJDb21wb25lbnRcbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0KGNvbHVtbiwgZSwgZmFsc2UpfVxuICAgICAgICAgIG9uVG91Y2hTdGFydD17ZSA9PiB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0KGNvbHVtbiwgZSwgdHJ1ZSl9XG4gICAgICAgICAgey4uLnJlc2l6ZXJQcm9wc31cbiAgICAgICAgLz4pXG4gICAgICAgIDogbnVsbFxuXG4gICAgICBjb25zdCBzb3J0T3JkZXIgPSBzb3J0ICYmIHNob3dTb3J0T3JkZXJcbiAgICAgICAgPyA8U29ydE9yZGVyQ29tcG9uZW50IGRlc2M9e3NvcnQuZGVzY30gLz5cbiAgICAgICAgOiBudWxsO1xuXG4gICAgICBjb25zdCBpc1NvcnRhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnNvcnRhYmxlLCBzb3J0YWJsZSwgZmFsc2UpXG4gICAgICBjb25zdCBpc0R1bW15ID0gaSA9PT0gYWxsVmlzaWJsZUNvbHVtbnMubGVuZ3RoIC0gMVxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudCAmJiB0b3RhbFdpZHRoXG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLndpZHRoXG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ubGVmdFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICdydC1yZXNpemFibGUtaGVhZGVyJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJy1jdXJzb3ItcG9pbnRlcic6IGlzU29ydGFibGUsXG4gICAgICAgICAgICAgICctaGlkZGVuJzogIXNob3csXG4gICAgICAgICAgICAgICctZHVtbXknOiBpc0R1bW15LFxuICAgICAgICAgICAgICAnLWZpeGVkJzogaXNGaXhlZCxcbiAgICAgICAgICAgICAgJ3J0LWhlYWRlci1waXZvdCc6IHBpdm90QnkgJiYgcGl2b3RCeS5zbGljZSgwLCAtMSkuaW5jbHVkZXMoY29sdW1uLmlkKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgdG9nZ2xlU29ydD17ZSA9PiB7XG4gICAgICAgICAgICBpc1NvcnRhYmxlICYmIHRoaXMuc29ydENvbHVtbihjb2x1bW4sIGUuc2hpZnRLZXkpXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncnQtcmVzaXphYmxlLWhlYWRlci1jb250ZW50Jz5cbiAgICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uSGVhZGVyLCB7XG4gICAgICAgICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHtzb3J0T3JkZXJ9XG4gICAgICAgICAge3Jlc2l6ZXJ9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUZpbHRlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEZpbHRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1maWx0ZXJzJywgdGhlYWRGaWx0ZXJQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt0aGVhZEZpbHRlclByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50aGVhZEZpbHRlclByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRGaWx0ZXJUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZEZpbHRlclRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRGaWx0ZXJUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlRmlsdGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VGaWx0ZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEZpbHRlclRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkRmlsdGVyVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkRmlsdGVyVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkRmlsdGVyVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWx0ZXIgPSBmaWx0ZXJlZC5maW5kKGZpbHRlciA9PiBmaWx0ZXIuaWQgPT09IGNvbHVtbi5pZClcblxuICAgICAgY29uc3QgUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQgPSBjb2x1bW4uRmlsdGVyIHx8IEZpbHRlckNvbXBvbmVudFxuXG4gICAgICBjb25zdCBpc0ZpbHRlcmFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgY29sdW1uLmZpbHRlcmFibGUsXG4gICAgICAgIGZpbHRlcmFibGUsXG4gICAgICAgIGZhbHNlXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdG90YWxXaWR0aFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbnNQcm9wc1tpXS53aWR0aFxuICAgICAgICBzdHlsZXMubGVmdCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLmxlZnRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCB7ICctZml4ZWQnOiBpc0ZpeGVkLCAnLWVtcHR5JzogIWlzRmlsdGVyYWJsZSB9KX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge2lzRmlsdGVyYWJsZVxuICAgICAgICAgICAgPyBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiB0aGlzLmZpbHRlckNvbHVtbihjb2x1bW4sIHZhbHVlKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGVmYXVsdFByb3BzLmNvbHVtbi5GaWx0ZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFnZVJvdyA9IChyb3csIGksIHBhdGggPSBbXSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWwgPSByb3dbb3JpZ2luYWxLZXldO1xuICAgICAgY29uc3Qgcm93S2V5ID0gcm93S2V5UHJvcCA/IG9yaWdpbmFsW3Jvd0tleVByb3BdIDogdW5kZWZpbmVkO1xuICAgICAgY29uc3Qgcm93SW5mbyA9IHtcbiAgICAgICAgb3JpZ2luYWwsXG4gICAgICAgIHJvdzogcm93LFxuICAgICAgICBpbmRleDogcm93W2luZGV4S2V5XSxcbiAgICAgICAgdmlld0luZGV4OiArK3Jvd0luZGV4LFxuICAgICAgICBsZXZlbDogcGF0aC5sZW5ndGgsXG4gICAgICAgIG5lc3RpbmdQYXRoOiBwYXRoLmNvbmNhdChbcm93S2V5IHx8IGldKSxcbiAgICAgICAgYWdncmVnYXRlZDogcm93W2FnZ3JlZ2F0ZWRLZXldLFxuICAgICAgICBncm91cGVkQnlQaXZvdDogcm93W2dyb3VwZWRCeVBpdm90S2V5XSxcbiAgICAgICAgc3ViUm93czogcm93W3N1YlJvd3NLZXldLFxuICAgICAgfVxuICAgICAgY29uc3QgaXNFeHBhbmRlZCA9IF8uZ2V0KGV4cGFuZGVkLCByb3dJbmZvLm5lc3RpbmdQYXRoKVxuICAgICAgY29uc3QgdHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VHJQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IHJvd3MgPSBbXG4gICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgIGtleT17cm93SW5mby5uZXN0aW5nUGF0aC5qb2luKCdfJyl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgdHJQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICByb3cuX3ZpZXdJbmRleCAlIDIgPyAnLWV2ZW4nIDogJy1vZGQnXG4gICAgICAgICAgKX1cbiAgICAgICAgICBzdHlsZT17dHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udHJQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcCgoY29sdW1uLCBpMikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgICAgICAgY29uc3QgdGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgICAgICAgZ2V0VGRQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCBjb2x1bW4sIHRoaXMpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgICAgICAgY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIGNvbHVtbiwgdGhpcylcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgICAgICAgdGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAgICAgICAuLi50ZFByb3BzLnN0eWxlLFxuICAgICAgICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpc0ZpeGVkID0gaTIgPCBmaXhlZENvbHVtbnNDb3VudCAmJiB0b3RhbFdpZHRoXG5cbiAgICAgICAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uc1Byb3BzW2kyXS53aWR0aFxuICAgICAgICAgICAgICBzdHlsZXMubGVmdCA9IGZpeGVkQ29sdW1uc1Byb3BzW2kyXS5sZWZ0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxJbmZvID0ge1xuICAgICAgICAgICAgICAuLi5yb3dJbmZvLFxuICAgICAgICAgICAgICBpc0V4cGFuZGVkLFxuICAgICAgICAgICAgICBjb2x1bW46IHsgLi4uY29sdW1uIH0sXG4gICAgICAgICAgICAgIHZhbHVlOiByb3dJbmZvLnJvd1tjb2x1bW4uaWRdLFxuICAgICAgICAgICAgICBwaXZvdGVkOiBjb2x1bW4ucGl2b3RlZCxcbiAgICAgICAgICAgICAgZXhwYW5kZXI6IGNvbHVtbi5leHBhbmRlcixcbiAgICAgICAgICAgICAgZGlzcGxheVBpdm90U3ViUm93czogY29sdW1uLmRpc3BsYXlQaXZvdFN1YlJvd3MsXG4gICAgICAgICAgICAgIHJlc2l6ZWQsXG4gICAgICAgICAgICAgIHNob3csXG4gICAgICAgICAgICAgIHRkUHJvcHMsXG4gICAgICAgICAgICAgIGNvbHVtblByb3BzLFxuICAgICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgICBzdHlsZXMsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY2VsbEluZm8udmFsdWVcblxuICAgICAgICAgICAgbGV0IGludGVyYWN0aW9uUHJvcHNcbiAgICAgICAgICAgIGxldCBpc0JyYW5jaFxuICAgICAgICAgICAgbGV0IGlzUHJldmlld1xuXG4gICAgICAgICAgICBjb25zdCBvbkV4cGFuZGVyQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgICAgICAgbGV0IG5ld0V4cGFuZGVkID0gXy5jbG9uZShleHBhbmRlZClcbiAgICAgICAgICAgICAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICBuZXdFeHBhbmRlZCA9IF8uc2V0KG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwgZmFsc2UpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3RXhwYW5kZWQgPSBfLnNldChuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIHt9KVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBleHBhbmRlZDogbmV3RXhwYW5kZWQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBvbkV4cGFuZGVkQ2hhbmdlICYmXG4gICAgICAgICAgICAgICAgICBvbkV4cGFuZGVkQ2hhbmdlKG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwgZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBhIHN0YW5kYXJkIGNlbGxcbiAgICAgICAgICAgIGxldCByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgY29sdW1uLkNlbGwsXG4gICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAvLyBSZXNvbHZlIFJlbmRlcmVyc1xuICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLkFnZ3JlZ2F0ZWQgfHxcbiAgICAgICAgICAgICAgKCFjb2x1bW4uYWdncmVnYXRlID8gQWdncmVnYXRlZENvbXBvbmVudCA6IGNvbHVtbi5DZWxsKVxuICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCA9XG4gICAgICAgICAgICAgIGNvbHVtbi5FeHBhbmRlciB8fCBFeHBhbmRlckNvbXBvbmVudFxuICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLlBpdm90VmFsdWUgfHwgUGl2b3RWYWx1ZUNvbXBvbmVudFxuICAgICAgICAgICAgY29uc3QgRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnQgPVxuICAgICAgICAgICAgICBQaXZvdENvbXBvbmVudCB8fFxuICAgICAgICAgICAgICAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgPFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRQaXZvdENvbXBvbmVudCA9XG4gICAgICAgICAgICAgIGNvbHVtbi5QaXZvdCB8fCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudFxuXG4gICAgICAgICAgICAvLyBJcyB0aGlzIGNlbGwgZXhwYW5kYWJsZT9cbiAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkIHx8IGNlbGxJbmZvLmV4cGFuZGVyKSB7XG4gICAgICAgICAgICAgIC8vIE1ha2UgaXQgZXhwYW5kYWJsZSBieSBkZWZ1YWx0XG4gICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgPSB0cnVlXG4gICAgICAgICAgICAgIGludGVyYWN0aW9uUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgb25DbGljazogb25FeHBhbmRlckNsaWNrLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIElmIHBpdm90ZWQsIGhhcyBubyBzdWJSb3dzLCBhbmQgZG9lcyBub3QgaGF2ZSBhIHN1YkNvbXBvbmVudCwgZG8gbm90IG1ha2UgZXhwYW5kYWJsZVxuICAgICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCkge1xuICAgICAgICAgICAgICAgIGlmICghY2VsbEluZm8uc3ViUm93cykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFTdWJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uUHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCkge1xuICAgICAgICAgICAgICAvLyBJcyB0aGlzIGNvbHVtbiBhIGJyYW5jaD9cbiAgICAgICAgICAgICAgaXNCcmFuY2ggPVxuICAgICAgICAgICAgICAgIHJvd0luZm8ucm93W3Bpdm90SURLZXldID09PSBjb2x1bW4uaWQgJiYgY2VsbEluZm8uc3ViUm93c1xuICAgICAgICAgICAgICAvLyBTaG91bGQgdGhpcyBjb2x1bW4gYmUgYmxhbms/XG4gICAgICAgICAgICAgIGlzUHJldmlldyA9XG4gICAgICAgICAgICAgICAgcGl2b3RCeS5pbmRleE9mKGNvbHVtbi5pZCkgPlxuICAgICAgICAgICAgICAgIHBpdm90QnkuaW5kZXhPZihyb3dJbmZvLnJvd1twaXZvdElES2V5XSkgJiYgY2VsbEluZm8uc3ViUm93c1xuICAgICAgICAgICAgICAvLyBQaXZvdCBDZWxsIFJlbmRlciBPdmVycmlkZVxuICAgICAgICAgICAgICBpZiAoaXNCcmFuY2gpIHtcbiAgICAgICAgICAgICAgICAvLyBpc1Bpdm90XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZFBpdm90Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAuLi5jZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvd1twaXZvdFZhbEtleV0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgcm93W3Bpdm90VmFsS2V5XVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgICAgICAgICAgICAvLyBTaG93IHRoZSBwaXZvdCBwcmV2aWV3XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFjZWxsSW5mby5kaXNwbGF5UGl2b3RTdWJSb3dzKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGxJbmZvLmFnZ3JlZ2F0ZWQpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNlbGxJbmZvLmV4cGFuZGVyKSB7XG4gICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgcm93W3Bpdm90VmFsS2V5XVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGlmIChwaXZvdEJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLmdyb3VwZWRCeVBpdm90KSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghY2VsbEluZm8uc3ViUm93cyAmJiAhU3ViQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgY2VsbFxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAga2V5PXtpMiArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgICAgICAgIXNob3cgJiYgJy1oaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSAmJiAncnQtZXhwYW5kYWJsZScsXG4gICAgICAgICAgICAgICAgICAoaXNCcmFuY2ggfHwgaXNQcmV2aWV3KSAmJiAncnQtcGl2b3QnLFxuICAgICAgICAgICAgICAgICAgaXNGaXhlZCAmJiAnLWZpeGVkJyxcbiAgICAgICAgICAgICAgICAgIChpc0ZpeGVkICYmICFyZXNvbHZlZENlbGwpICYmICctZW1wdHknXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgICAgICAgIHsuLi5pbnRlcmFjdGlvblByb3BzfVxuICAgICAgICAgICAgICAgIHsuLi50ZFByb3BzLnJlc3R9XG4gICAgICAgICAgICAgICAgey4uLmNvbHVtblByb3BzLnJlc3R9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cmVzb2x2ZWRDZWxsfVxuICAgICAgICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgXTtcblxuICAgICAgaWYgKHJvd0luZm8uc3ViUm93cyAmJiBpc0V4cGFuZGVkKSB7XG4gICAgICAgIHJvd0luZm8uc3ViUm93cy5mb3JFYWNoKChkLCBpKSA9PlxuICAgICAgICAgIHJvd3MucHVzaCguLi5tYWtlUGFnZVJvdyhkLCBpLCByb3dJbmZvLm5lc3RpbmdQYXRoKSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmIChTdWJDb21wb25lbnQgJiYgIXJvd0luZm8uc3ViUm93cyAmJiBpc0V4cGFuZGVkKSB7XG4gICAgICAgIHJvd3MucHVzaChTdWJDb21wb25lbnQocm93SW5mbykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm93cztcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFkUm93ID0gKHJvdywgaSkgPT4ge1xuICAgICAgY29uc3QgdHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICctcGFkUm93JyxcbiAgICAgICAgICAgIChwYWdlUm93cy5sZW5ndGggKyBpKSAlIDIgPyAnLWV2ZW4nIDogJy1vZGQnLFxuICAgICAgICAgICAgdHJQcm9wcy5jbGFzc05hbWVcbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlIHx8IHt9fVxuICAgICAgICA+XG4gICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlUGFkQ29sdW1uKX1cbiAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFkQ29sdW1uID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgY29uc3QgdGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIHRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4udGRQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudCAmJiB0b3RhbFdpZHRoXG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLndpZHRoXG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ubGVmdFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsICFzaG93ICYmICctaGlkZGVuJywgeyAnLWZpeGVkJzogaXNGaXhlZCB9KX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHsuLi50ZFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoUGFkUm93Q29tcG9uZW50KX1cbiAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sdW1uRm9vdGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRGb290UHJvcHMgPSBnZXRUZm9vdFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgY29uc3QgdEZvb3RUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZm9vdFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGZvb3RDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e3RGb290UHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgIHN0eWxlPXt0Rm9vdFByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50Rm9vdFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Rm9vdFRyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgIHN0eWxlPXt0Rm9vdFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udEZvb3RUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlQ29sdW1uRm9vdGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1Rmb290Q29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB0Rm9vdFRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRmb290VGRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Gb290ZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEZvb3RlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICB0Rm9vdFRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkZvb3RlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi50Rm9vdFRkUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkZvb3RlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA8IGZpeGVkQ29sdW1uc0NvdW50ICYmIHRvdGFsV2lkdGhcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ud2lkdGhcbiAgICAgICAgc3R5bGVzLmxlZnQgPSBmaXhlZENvbHVtbnNQcm9wc1tpXS5sZWZ0XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgIXNob3cgJiYgJy1oaWRkZW4nLCB7ICctZml4ZWQnOiBpc0ZpeGVkIH0pfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgey4uLmNvbHVtblByb3BzLnJlc3R9XG4gICAgICAgICAgey4uLnRGb290VGRQcm9wcy5yZXN0fVxuICAgICAgICAgIHsuLi5jb2x1bW5Gb290ZXJQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5Gb290ZXIsIHtcbiAgICAgICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb25Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0UGFnaW5hdGlvblByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBhZ2luYXRpb25Db21wb25lbnRcbiAgICAgICAgICB7Li4ucmVzb2x2ZWRTdGF0ZX1cbiAgICAgICAgICBwYWdlcz17cGFnZXN9XG4gICAgICAgICAgY2FuUHJldmlvdXM9e2NhblByZXZpb3VzfVxuICAgICAgICAgIGNhbk5leHQ9e2Nhbk5leHR9XG4gICAgICAgICAgb25QYWdlQ2hhbmdlPXt0aGlzLm9uUGFnZUNoYW5nZX1cbiAgICAgICAgICBvblBhZ2VTaXplQ2hhbmdlPXt0aGlzLm9uUGFnZVNpemVDaGFuZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPXtwYWdpbmF0aW9uUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgIHN0eWxlPXtwYWdpbmF0aW9uUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnBhZ2luYXRpb25Qcm9wcy5yZXN0fVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHJvb3RQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIClcbiAgICBjb25zdCB0YWJsZVByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0VGFibGVQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICApXG4gICAgY29uc3QgdEJvZHlQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFRib2R5UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgKVxuICAgIGNvbnN0IGxvYWRpbmdQcm9wcyA9IGdldExvYWRpbmdQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICBjb25zdCBub0RhdGFQcm9wcyA9IGdldE5vRGF0YVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIGNvbnN0IHJlc2l6ZXJQcm9wcyA9IGdldFJlc2l6ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcblxuICAgIGNvbnN0IGRpc3BsYXlGb290ZXJUb3AgPSBmb290ZXJQbGFjZW1lbnQgPT09ICd0b3AnIHx8IGZvb3RlclBsYWNlbWVudCA9PT0gJ2JvdGgnXG4gICAgY29uc3QgZGlzcGxheUZvb3RlckJvdHRvbSA9IGZvb3RlclBsYWNlbWVudCA9PT0gJ2JvdHRvbScgfHwgZm9vdGVyUGxhY2VtZW50ID09PSAnYm90aCdcblxuICAgIGNvbnN0IG1ha2VUYWJsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbEdyb3VwID0gbWFrZUNvbEdyb3VwKCk7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uID0gbWFrZVBhZ2luYXRpb24oKVxuICAgICAgY29uc3QgZm9vdGVyID0gaGFzQ29sdW1uRm9vdGVyID8gbWFrZUNvbHVtbkZvb3RlcnMoKSA6IG51bGxcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnUmVhY3RUYWJsZScsIGNsYXNzTmFtZSwgcm9vdFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiB0b3RhbFdpZHRoLFxuICAgICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgICAuLi5yb290UHJvcHMuc3R5bGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucm9vdFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7c2hvd1BhZ2luYXRpb24gJiYgc2hvd1BhZ2luYXRpb25Ub3BcbiAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9J3BhZ2luYXRpb24tdG9wJz5cbiAgICAgICAgICAgICAge3BhZ2luYXRpb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8VGFibGVXcmFwcGVyIHdyYXBwZXJSZWY9eyhjKSA9PiB0aGlzLnRhYmxlV3JhcHBlciA9IGN9PlxuICAgICAgICAgICAgPFRhYmxlQ29tcG9uZW50XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICB0YWJsZVByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSZXNpemluZyA/ICdydC1yZXNpemluZycgOiAnJ1xuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBzdHlsZT17dGFibGVQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgICAgey4uLnRhYmxlUHJvcHMucmVzdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NvbEdyb3VwfVxuICAgICAgICAgICAgICB7aGFzSGVhZGVyR3JvdXBzID8gbWFrZUhlYWRlckdyb3VwcygpIDogbnVsbH1cbiAgICAgICAgICAgICAge21ha2VIZWFkZXJzKCl9XG4gICAgICAgICAgICAgIHtoYXNGaWx0ZXJzID8gbWFrZUZpbHRlcnMoKSA6IG51bGx9XG4gICAgICAgICAgICAgIHtkaXNwbGF5Rm9vdGVyVG9wICYmIGZvb3Rlcn1cbiAgICAgICAgICAgICAgPFRib2R5Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHRCb2R5UHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17dEJvZHlQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgICAgICB7Li4udEJvZHlQcm9wcy5yZXN0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BhZ2VSb3dzLm1hcCgoZCwgaSkgPT4gbWFrZVBhZ2VSb3coZCwgaSkpfVxuICAgICAgICAgICAgICAgIHtwYWRSb3dzLm1hcChtYWtlUGFkUm93KX1cbiAgICAgICAgICAgICAgPC9UYm9keUNvbXBvbmVudD5cbiAgICAgICAgICAgICAge2Rpc3BsYXlGb290ZXJCb3R0b20gJiYgZm9vdGVyfVxuICAgICAgICAgICAgPC9UYWJsZUNvbXBvbmVudD5cbiAgICAgICAgICA8L1RhYmxlV3JhcHBlcj5cbiAgICAgICAgICB7c2hvd1BhZ2luYXRpb24gJiYgc2hvd1BhZ2luYXRpb25Cb3R0b21cbiAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9J3BhZ2luYXRpb24tYm90dG9tJz5cbiAgICAgICAgICAgICAge3BhZ2luYXRpb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICB7IXBhZ2VSb3dzLmxlbmd0aCAmJlxuICAgICAgICAgIDxOb0RhdGFDb21wb25lbnQgey4uLm5vRGF0YVByb3BzfT5cbiAgICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChub0RhdGFUZXh0KX1cbiAgICAgICAgICA8L05vRGF0YUNvbXBvbmVudD59XG4gICAgICAgICAgPExvYWRpbmdDb21wb25lbnRcbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICBsb2FkaW5nVGV4dD17bG9hZGluZ1RleHR9XG4gICAgICAgICAgICB7Li4ubG9hZGluZ1Byb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIGNoaWxkUHJvcHMgYXJlIG9wdGlvbmFsbHkgcGFzc2VkIHRvIGEgZnVuY3Rpb24tYXMtYS1jaGlsZFxuICAgIHJldHVybiBjaGlsZHJlbiA/IGNoaWxkcmVuKGZpbmFsU3RhdGUsIG1ha2VUYWJsZSwgdGhpcykgOiBtYWtlVGFibGUoKVxuICB9XG59XG4iXX0=