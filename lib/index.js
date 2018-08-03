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
          className: (0, _classnames2.default)('rt-colgroup-col', classes, {
            '-dummy': isDummy
          }),
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
            className: (0, _classnames2.default)(classes, {
              '-dummy': isDummy,
              '-empty': !content,
              '-fixed': isFixed
            }),
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

      var makeFilter = function makeFilter(column) {
        var isFilterable = _utils2.default.getFirstDefined(column.filterable, filterable, false);

        if (!isFilterable) {
          return null;
        }

        var filter = filtered.find(function (filter) {
          return filter.id === column.id;
        });
        var ResolvedFilterComponent = column.Filter || FilterComponent;

        return _utils2.default.normalizeComponent(ResolvedFilterComponent, {
          column: column,
          filter: filter,
          onChange: function onChange(value) {
            return _this2.filterColumn(column, value);
          }
        }, _defaultProps2.default.column.Filter);
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

        var filter = makeFilter(column);

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
          filter,
          sortOrder,
          resizer
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
            className: (0, _classnames2.default)(classes, !show && '-hidden', {
              '-fixed': isFixed
            }),
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
            className: (0, _classnames2.default)(classes, !show && '-hidden', {
              '-fixed': isFixed
            }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0IiwicmVzb2x2ZWRTdGF0ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJnZXRQcm9wcyIsImdldFRhYmxlUHJvcHMiLCJnZXRDb2xHcm91cENvbFByb3BzIiwiZ2V0VGhlYWRHcm91cFByb3BzIiwiZ2V0VGhlYWRHcm91cFRyUHJvcHMiLCJnZXRUaGVhZEdyb3VwVGhQcm9wcyIsImdldFRoZWFkUHJvcHMiLCJnZXRUaGVhZFRyUHJvcHMiLCJnZXRUaGVhZFRoUHJvcHMiLCJnZXRUaGVhZEZpbHRlclByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJUclByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJUaFByb3BzIiwiZ2V0VGJvZHlQcm9wcyIsImdldFRyUHJvcHMiLCJnZXRUZFByb3BzIiwiZ2V0VGZvb3RQcm9wcyIsImdldFRmb290VHJQcm9wcyIsImdldFRmb290VGRQcm9wcyIsImdldFBhZ2luYXRpb25Qcm9wcyIsImdldExvYWRpbmdQcm9wcyIsImdldE5vRGF0YVByb3BzIiwiZ2V0UmVzaXplclByb3BzIiwic2hvd1BhZ2luYXRpb24iLCJzaG93UGFnaW5hdGlvblRvcCIsInNob3dQYWdpbmF0aW9uQm90dG9tIiwic2hvd1NvcnRPcmRlciIsIm1hbnVhbCIsImxvYWRpbmdUZXh0Iiwibm9EYXRhVGV4dCIsInNvcnRhYmxlIiwicmVzaXphYmxlIiwiZmlsdGVyYWJsZSIsImZvb3RlclBsYWNlbWVudCIsInBpdm90SURLZXkiLCJwaXZvdFZhbEtleSIsInBpdm90QnkiLCJzdWJSb3dzS2V5IiwiYWdncmVnYXRlZEtleSIsIm9yaWdpbmFsS2V5IiwiaW5kZXhLZXkiLCJyb3dLZXlQcm9wIiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJmaXhlZENvbHVtbnNDb3VudCIsImxvYWRpbmciLCJwYWdlcyIsIm9uRXhwYW5kZWRDaGFuZ2UiLCJUYWJsZVdyYXBwZXIiLCJUYWJsZUNvbXBvbmVudCIsIlRoZWFkQ29tcG9uZW50IiwiVGJvZHlDb21wb25lbnQiLCJUckNvbXBvbmVudCIsIlRoQ29tcG9uZW50IiwiVGRDb21wb25lbnQiLCJUZm9vdENvbXBvbmVudCIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJMb2FkaW5nQ29tcG9uZW50IiwiU3ViQ29tcG9uZW50IiwiTm9EYXRhQ29tcG9uZW50IiwiUmVzaXplckNvbXBvbmVudCIsIlNvcnRPcmRlckNvbXBvbmVudCIsIkV4cGFuZGVyQ29tcG9uZW50IiwiUGl2b3RWYWx1ZUNvbXBvbmVudCIsIlBpdm90Q29tcG9uZW50IiwiQWdncmVnYXRlZENvbXBvbmVudCIsIkZpbHRlckNvbXBvbmVudCIsIlBhZFJvd0NvbXBvbmVudCIsInJlc29sdmVkRGF0YSIsImFsbFZpc2libGVDb2x1bW5zIiwiaGVhZGVyR3JvdXBzIiwiaGFzSGVhZGVyR3JvdXBzIiwic29ydGVkRGF0YSIsInRvdGFsV2lkdGgiLCJ3aWR0aCIsInBhZ2VSb3dzIiwic3RhcnRSb3ciLCJlbmRSb3ciLCJsZW5ndGgiLCJzbGljZSIsIm1pblJvd3MiLCJwYWRSb3dzIiwicmFuZ2UiLCJNYXRoIiwibWF4IiwiaGFzQ29sdW1uRm9vdGVyIiwic29tZSIsImQiLCJGb290ZXIiLCJoYXNGaWx0ZXJzIiwicmVjdXJzZVJvd3NWaWV3SW5kZXgiLCJyb3dzIiwicGF0aCIsImluZGV4IiwibWFwIiwicm93IiwiaSIsInJvd1dpdGhWaWV3SW5kZXgiLCJfdmlld0luZGV4IiwibmV3UGF0aCIsImNvbmNhdCIsImdldCIsImNhblByZXZpb3VzIiwiY2FuTmV4dCIsInJvd0luZGV4IiwiZmluYWxTdGF0ZSIsImZpeGVkQ29sdW1uc1Byb3BzIiwicmF3Q29sdW1uc1dpZHRoIiwiZmxvb3JDb2x1bW5zV2lkdGgiLCJtYWtlQ29sR3JvdXAiLCJtYWtlQ29sIiwiY29sdW1uIiwiaXNEdW1teSIsImlzRml4ZWQiLCJpc0lubmVyRml4ZWQiLCJpc0xhc3RGaXhlZCIsInJlc2l6ZWRDb2wiLCJmaW5kIiwieCIsImlkIiwiY29sZ3JvdXBDb2xQcm9wcyIsInNwbGl0UHJvcHMiLCJ1bmRlZmluZWQiLCJjb2x1bW5Db2xncm91cENvbFByb3BzIiwiY2xhc3NlcyIsImNvbEdyb3VwQ29sQ2xhc3NOYW1lIiwic3R5bGVzIiwiY29sR3JvdXBDb2xTdHlsZSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJnZXRGaXJzdERlZmluZWQiLCJ2YWx1ZSIsImluc2lkZVdpZHRoIiwid2lkdGhJc1BlcmNlbnRzIiwiaXNQZXJjZW50cyIsIm1pbldpZHRoSXNQZXJjZW50cyIsIm1heFdpZHRoSXNQZXJjZW50cyIsIndpZHRoVmFsdWUiLCJwYXJzZUludCIsIm1pbldpZHRoVmFsdWUiLCJtYXhXaWR0aFZhbHVlIiwicGVyY2VudHNUb1B4IiwiY2xhbXAiLCJmbG9vciIsImRpZmYiLCJsZWZ0IiwicmVkdWNlIiwiaXRlbSIsInB1c2giLCJtYWtlSGVhZGVyR3JvdXBzIiwidGhlYWRHcm91cFByb3BzIiwidGhlYWRHcm91cFRyUHJvcHMiLCJyZXN0IiwibWFrZUhlYWRlckdyb3VwIiwidGhlYWRHcm91cFRoUHJvcHMiLCJjb2x1bW5IZWFkZXJQcm9wcyIsImdldEhlYWRlclByb3BzIiwiaGVhZGVyQ2xhc3NOYW1lIiwiaGVhZGVyU3R5bGUiLCJjb2xTcGFuIiwiY29sdW1ucyIsImNvbnRlbnQiLCJub3JtYWxpemVDb21wb25lbnQiLCJIZWFkZXIiLCJkYXRhIiwibWFrZUhlYWRlcnMiLCJ0aGVhZFByb3BzIiwidGhlYWRUclByb3BzIiwibWFrZUhlYWRlciIsIm1ha2VGaWx0ZXIiLCJpc0ZpbHRlcmFibGUiLCJmaWx0ZXIiLCJSZXNvbHZlZEZpbHRlckNvbXBvbmVudCIsIkZpbHRlciIsIm9uQ2hhbmdlIiwic29ydCIsInNob3ciLCJ0aGVhZFRoUHJvcHMiLCJpc1Jlc2l6YWJsZSIsInJlc2l6ZXIiLCJlIiwicmVzaXplclByb3BzIiwic29ydE9yZGVyIiwiZGVzYyIsImlzU29ydGFibGUiLCJpbmNsdWRlcyIsInNoaWZ0S2V5IiwibWFrZVBhZ2VSb3ciLCJvcmlnaW5hbCIsInJvd0tleSIsInJvd0luZm8iLCJ2aWV3SW5kZXgiLCJsZXZlbCIsIm5lc3RpbmdQYXRoIiwiYWdncmVnYXRlZCIsImdyb3VwZWRCeVBpdm90Iiwic3ViUm93cyIsImlzRXhwYW5kZWQiLCJ0clByb3BzIiwiam9pbiIsImkyIiwidGRQcm9wcyIsImNvbHVtblByb3BzIiwiY2VsbEluZm8iLCJwaXZvdGVkIiwiZXhwYW5kZXIiLCJkaXNwbGF5UGl2b3RTdWJSb3dzIiwiaW50ZXJhY3Rpb25Qcm9wcyIsImlzQnJhbmNoIiwiaXNQcmV2aWV3Iiwib25FeHBhbmRlckNsaWNrIiwibmV3RXhwYW5kZWQiLCJjbG9uZSIsInNldCIsInNldFN0YXRlV2l0aERhdGEiLCJyZXNvbHZlZENlbGwiLCJDZWxsIiwiUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50IiwiQWdncmVnYXRlZCIsImFnZ3JlZ2F0ZSIsIlJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQiLCJFeHBhbmRlciIsIlJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCIsIlBpdm90VmFsdWUiLCJEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlJlc29sdmVkUGl2b3RDb21wb25lbnQiLCJQaXZvdCIsImV4cGFuZGFibGUiLCJvbkNsaWNrIiwiaW5kZXhPZiIsImZvckVhY2giLCJtYWtlUGFkUm93IiwibWFrZVBhZENvbHVtbiIsIm1ha2VDb2x1bW5Gb290ZXJzIiwidEZvb3RQcm9wcyIsInRGb290VHJQcm9wcyIsIm1ha2VDb2x1bW5Gb290ZXIiLCJ0Rm9vdFRkUHJvcHMiLCJjb2x1bW5Gb290ZXJQcm9wcyIsImdldEZvb3RlclByb3BzIiwibWFrZVBhZ2luYXRpb24iLCJwYWdpbmF0aW9uUHJvcHMiLCJyb290UHJvcHMiLCJ0YWJsZVByb3BzIiwidEJvZHlQcm9wcyIsImxvYWRpbmdQcm9wcyIsIm5vRGF0YVByb3BzIiwiZGlzcGxheUZvb3RlclRvcCIsImRpc3BsYXlGb290ZXJCb3R0b20iLCJtYWtlVGFibGUiLCJjb2xHcm91cCIsInBhZ2luYXRpb24iLCJmb290ZXIiLCJ0YWJsZVdyYXBwZXIiLCJjIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBSkE7OztBQU1PLElBQU1BLHdFQUFOOztJQUVjQyxVOzs7QUFHbkIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFHakIsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUNBLFVBQUtFLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkYsSUFBbkIsT0FBckI7QUFDQSxVQUFLRyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJI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RixJQU5qQjtBQVFHa0csc0JBUkg7QUFTR25MLGdDQUFrQjhFLGtCQUFsQixHQUF1QyxJQVQxQztBQVVHZ0IsMkJBVkg7QUFXR2tGLGtDQUFvQkssTUFYdkI7QUFZRTtBQUFDLDhCQUFEO0FBQUE7QUFDRSw2QkFBVywwQkFBV1IsV0FBV3BQLFNBQXRCLENBRGI7QUFFRSx5QkFBT29QLFdBQVduUDtBQUZwQixtQkFHTW1QLFdBQVc1RixJQUhqQjtBQUtHN0UseUJBQVNtQixHQUFULENBQWEsVUFBQ1AsQ0FBRCxFQUFJUyxDQUFKO0FBQUEseUJBQVUyRixZQUFZcEcsQ0FBWixFQUFlUyxDQUFmLENBQVY7QUFBQSxpQkFBYixDQUxIO0FBTUdmLHdCQUFRYSxHQUFSLENBQVl5SSxVQUFaO0FBTkgsZUFaRjtBQW9CR2lCLHFDQUF1Qkk7QUFwQjFCO0FBREYsV0FaRjtBQW9DR3BPLDRCQUFrQkUsb0JBQWxCLEdBQ0M7QUFBQTtBQUFBLGNBQUssV0FBVSxtQkFBZjtBQUFvQ2lPO0FBQXBDLFdBREQsR0FFRyxJQXRDTjtBQXVDRyxXQUFDaEwsU0FBU0csTUFBVixJQUNDO0FBQUMsMkJBQUQ7QUFBcUJ3Syx1QkFBckI7QUFDRyw0QkFBRXBGLGtCQUFGLENBQXFCcEksVUFBckI7QUFESCxXQXhDSjtBQTRDRSx3Q0FBQyxnQkFBRDtBQUNFLHFCQUFTZSxPQURYO0FBRUUseUJBQWFoQjtBQUZmLGFBR013TixZQUhOO0FBNUNGLFNBREY7QUFvREQsT0F6REQ7O0FBMkRBO0FBQ0EsYUFBT3RQLFdBQVdBLFNBQVMwRyxVQUFULEVBQXFCZ0osU0FBckIsRUFBZ0MsSUFBaEMsQ0FBWCxHQUFtREEsV0FBMUQ7QUFDRDs7OztFQTU5QnFDLHVCQUFRLDBDQUFSLEM7O0FBQW5CNVIsVSxDQUNaa1MsWTtrQkFEWWxTLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG4vL1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgTGlmZWN5Y2xlIGZyb20gJy4vbGlmZWN5Y2xlJztcbmltcG9ydCBNZXRob2RzIGZyb20gJy4vbWV0aG9kcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdFByb3BzJztcblxuZXhwb3J0IGNvbnN0IFJlYWN0VGFibGVEZWZhdWx0cyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUYWJsZSBleHRlbmRzIE1ldGhvZHMoTGlmZWN5Y2xlKENvbXBvbmVudCkpIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmdldFJlc29sdmVkU3RhdGUgPSB0aGlzLmdldFJlc29sdmVkU3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldERhdGFNb2RlbCA9IHRoaXMuZ2V0RGF0YU1vZGVsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRTb3J0ZWREYXRhID0gdGhpcy5nZXRTb3J0ZWREYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5maXJlRmV0Y2hEYXRhID0gdGhpcy5maXJlRmV0Y2hEYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRQcm9wT3JTdGF0ZSA9IHRoaXMuZ2V0UHJvcE9yU3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFN0YXRlT3JQcm9wID0gdGhpcy5nZXRTdGF0ZU9yUHJvcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyRGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc29ydERhdGEgPSB0aGlzLnNvcnREYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRNaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UgPSB0aGlzLm9uUGFnZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25QYWdlU2l6ZUNoYW5nZSA9IHRoaXMub25QYWdlU2l6ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc29ydENvbHVtbiA9IHRoaXMuc29ydENvbHVtbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyQ29sdW1uID0gdGhpcy5maWx0ZXJDb2x1bW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0ID0gdGhpcy5yZXNpemVDb2x1bW5TdGFydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzaXplQ29sdW1uRW5kID0gdGhpcy5yZXNpemVDb2x1bW5FbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZyA9IHRoaXMucmVzaXplQ29sdW1uTW92aW5nLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGFnZTogMCxcbiAgICAgIHBhZ2VTaXplOiBwcm9wcy5kZWZhdWx0UGFnZVNpemUsXG4gICAgICBzb3J0ZWQ6IHByb3BzLmRlZmF1bHRTb3J0ZWQsXG4gICAgICBleHBhbmRlZDogcHJvcHMuZGVmYXVsdEV4cGFuZGVkLFxuICAgICAgZmlsdGVyZWQ6IHByb3BzLmRlZmF1bHRGaWx0ZXJlZCxcbiAgICAgIHJlc2l6ZWQ6IHByb3BzLmRlZmF1bHRSZXNpemVkLFxuICAgICAgY3VycmVudGx5UmVzaXppbmc6IGZhbHNlLFxuICAgICAgc2tpcE5leHRTb3J0OiBmYWxzZVxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpO1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3R5bGUsXG4gICAgICBnZXRQcm9wcyxcbiAgICAgIGdldFRhYmxlUHJvcHMsXG4gICAgICBnZXRDb2xHcm91cENvbFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkUHJvcHMsXG4gICAgICBnZXRUaGVhZFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZFRoUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzLFxuICAgICAgZ2V0VGJvZHlQcm9wcyxcbiAgICAgIGdldFRyUHJvcHMsXG4gICAgICBnZXRUZFByb3BzLFxuICAgICAgZ2V0VGZvb3RQcm9wcyxcbiAgICAgIGdldFRmb290VHJQcm9wcyxcbiAgICAgIGdldFRmb290VGRQcm9wcyxcbiAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyxcbiAgICAgIGdldExvYWRpbmdQcm9wcyxcbiAgICAgIGdldE5vRGF0YVByb3BzLFxuICAgICAgZ2V0UmVzaXplclByb3BzLFxuICAgICAgc2hvd1BhZ2luYXRpb24sXG4gICAgICBzaG93UGFnaW5hdGlvblRvcCxcbiAgICAgIHNob3dQYWdpbmF0aW9uQm90dG9tLFxuICAgICAgc2hvd1NvcnRPcmRlcixcbiAgICAgIG1hbnVhbCxcbiAgICAgIGxvYWRpbmdUZXh0LFxuICAgICAgbm9EYXRhVGV4dCxcbiAgICAgIHNvcnRhYmxlLFxuICAgICAgcmVzaXphYmxlLFxuICAgICAgZmlsdGVyYWJsZSxcbiAgICAgIGZvb3RlclBsYWNlbWVudCxcbiAgICAgIC8vIFBpdm90aW5nIFN0YXRlXG4gICAgICBwaXZvdElES2V5LFxuICAgICAgcGl2b3RWYWxLZXksXG4gICAgICBwaXZvdEJ5LFxuICAgICAgc3ViUm93c0tleSxcbiAgICAgIGFnZ3JlZ2F0ZWRLZXksXG4gICAgICBvcmlnaW5hbEtleSxcbiAgICAgIGluZGV4S2V5LFxuICAgICAgcm93S2V5UHJvcCxcbiAgICAgIGdyb3VwZWRCeVBpdm90S2V5LFxuICAgICAgLy8gRml4ZWRcbiAgICAgIGZpeGVkQ29sdW1uc0NvdW50LFxuICAgICAgLy8gU3RhdGVcbiAgICAgIGxvYWRpbmcsXG4gICAgICBwYWdlU2l6ZSxcbiAgICAgIHBhZ2UsXG4gICAgICBzb3J0ZWQsXG4gICAgICBmaWx0ZXJlZCxcbiAgICAgIHJlc2l6ZWQsXG4gICAgICBleHBhbmRlZCxcbiAgICAgIHBhZ2VzLFxuICAgICAgb25FeHBhbmRlZENoYW5nZSxcbiAgICAgIC8vIENvbXBvbmVudHNcbiAgICAgIFRhYmxlV3JhcHBlcixcbiAgICAgIFRhYmxlQ29tcG9uZW50LFxuICAgICAgVGhlYWRDb21wb25lbnQsXG4gICAgICBUYm9keUNvbXBvbmVudCxcbiAgICAgIFRyQ29tcG9uZW50LFxuICAgICAgVGhDb21wb25lbnQsXG4gICAgICBUZENvbXBvbmVudCxcbiAgICAgIFRmb290Q29tcG9uZW50LFxuICAgICAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgICAgIExvYWRpbmdDb21wb25lbnQsXG4gICAgICBTdWJDb21wb25lbnQsXG4gICAgICBOb0RhdGFDb21wb25lbnQsXG4gICAgICBSZXNpemVyQ29tcG9uZW50LFxuICAgICAgU29ydE9yZGVyQ29tcG9uZW50LFxuICAgICAgRXhwYW5kZXJDb21wb25lbnQsXG4gICAgICBQaXZvdFZhbHVlQ29tcG9uZW50LFxuICAgICAgUGl2b3RDb21wb25lbnQsXG4gICAgICBBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgRmlsdGVyQ29tcG9uZW50LFxuICAgICAgUGFkUm93Q29tcG9uZW50LFxuICAgICAgLy8gRGF0YSBtb2RlbFxuICAgICAgcmVzb2x2ZWREYXRhLFxuICAgICAgYWxsVmlzaWJsZUNvbHVtbnMsXG4gICAgICBoZWFkZXJHcm91cHMsXG4gICAgICBoYXNIZWFkZXJHcm91cHMsXG4gICAgICAvLyBTb3J0ZWQgRGF0YVxuICAgICAgc29ydGVkRGF0YSxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nLFxuICAgICAgd2lkdGg6IHRvdGFsV2lkdGhcbiAgICB9ID0gcmVzb2x2ZWRTdGF0ZTtcblxuICAgIC8vIFBhZ2luYXRpb25cbiAgICBsZXQgcGFnZVJvd3MgPSBzb3J0ZWREYXRhO1xuICAgIGxldCBzdGFydFJvdyA9IDA7XG4gICAgbGV0IGVuZFJvdyA9IHNvcnRlZERhdGEubGVuZ3RoO1xuXG4gICAgaWYgKG1hbnVhbCkge1xuICAgICAgcGFnZVJvd3MgPSByZXNvbHZlZERhdGE7XG4gICAgfSBlbHNlIGlmIChwYWdlU2l6ZSA+IDApIHtcbiAgICAgIHN0YXJ0Um93ID0gcGFnZVNpemUgKiBwYWdlO1xuICAgICAgZW5kUm93ID0gc3RhcnRSb3cgKyBwYWdlU2l6ZTtcbiAgICAgIHBhZ2VSb3dzID0gc29ydGVkRGF0YS5zbGljZShzdGFydFJvdywgZW5kUm93KTtcbiAgICB9XG5cbiAgICBjb25zdCBtaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzKCk7XG4gICAgY29uc3QgcGFkUm93cyA9IF8ucmFuZ2UoTWF0aC5tYXgobWluUm93cyAtIHBhZ2VSb3dzLmxlbmd0aCwgMCkpO1xuXG4gICAgY29uc3QgaGFzQ29sdW1uRm9vdGVyID0gYWxsVmlzaWJsZUNvbHVtbnMuc29tZShkID0+IGQuRm9vdGVyKTtcbiAgICBjb25zdCBoYXNGaWx0ZXJzID0gZmlsdGVyYWJsZSB8fCBhbGxWaXNpYmxlQ29sdW1ucy5zb21lKGQgPT4gZC5maWx0ZXJhYmxlKTtcblxuICAgIGNvbnN0IHJlY3Vyc2VSb3dzVmlld0luZGV4ID0gKHJvd3MsIHBhdGggPSBbXSwgaW5kZXggPSAtMSkgPT4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgcm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgY29uc3Qgcm93V2l0aFZpZXdJbmRleCA9IHtcbiAgICAgICAgICAgIC4uLnJvdyxcbiAgICAgICAgICAgIF92aWV3SW5kZXg6IGluZGV4XG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5jb25jYXQoW2ldKTtcbiAgICAgICAgICBpZiAocm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSAmJiBfLmdldChleHBhbmRlZCwgbmV3UGF0aCkpIHtcbiAgICAgICAgICAgIFtyb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldLCBpbmRleF0gPSByZWN1cnNlUm93c1ZpZXdJbmRleChcbiAgICAgICAgICAgICAgcm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSxcbiAgICAgICAgICAgICAgbmV3UGF0aCxcbiAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByb3dXaXRoVmlld0luZGV4O1xuICAgICAgICB9KSxcbiAgICAgICAgaW5kZXhcbiAgICAgIF07XG4gICAgfTtcbiAgICBbcGFnZVJvd3NdID0gcmVjdXJzZVJvd3NWaWV3SW5kZXgocGFnZVJvd3MpO1xuXG4gICAgY29uc3QgY2FuUHJldmlvdXMgPSBwYWdlID4gMDtcbiAgICBjb25zdCBjYW5OZXh0ID0gcGFnZSArIDEgPCBwYWdlcztcblxuICAgIGxldCByb3dJbmRleCA9IC0xO1xuXG4gICAgY29uc3QgZmluYWxTdGF0ZSA9IHtcbiAgICAgIC4uLnJlc29sdmVkU3RhdGUsXG4gICAgICBzdGFydFJvdyxcbiAgICAgIGVuZFJvdyxcbiAgICAgIHBhZ2VSb3dzLFxuICAgICAgbWluUm93cyxcbiAgICAgIHBhZFJvd3MsXG4gICAgICBoYXNDb2x1bW5Gb290ZXIsXG4gICAgICBjYW5QcmV2aW91cyxcbiAgICAgIGNhbk5leHRcbiAgICB9O1xuXG4gICAgY29uc3QgZml4ZWRDb2x1bW5zUHJvcHMgPSBbXTtcbiAgICBsZXQgcmF3Q29sdW1uc1dpZHRoID0gMDtcbiAgICBsZXQgZmxvb3JDb2x1bW5zV2lkdGggPSAwO1xuXG4gICAgLy8gVmlzdWFsIENvbXBvbmVudHNcblxuICAgIGNvbnN0IG1ha2VDb2xHcm91cCA9ICgpID0+IHtcbiAgICAgIHJldHVybiA8Y29sZ3JvdXA+e2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlQ29sKX08L2NvbGdyb3VwPjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUNvbCA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IGlzRHVtbXkgPSBpID09PSBhbGxWaXNpYmxlQ29sdW1ucy5sZW5ndGggLSAxO1xuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudDtcbiAgICAgIGNvbnN0IGlzSW5uZXJGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudCAtIDE7XG4gICAgICBjb25zdCBpc0xhc3RGaXhlZCA9IGkgPT09IGZpeGVkQ29sdW1uc0NvdW50IC0gMTtcblxuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge307XG5cbiAgICAgIGNvbnN0IGNvbGdyb3VwQ29sUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldENvbEdyb3VwQ29sUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApO1xuICAgICAgY29uc3QgY29sdW1uQ29sZ3JvdXBDb2xQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldENvbEdyb3VwQ29sUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApO1xuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uY29sR3JvdXBDb2xDbGFzc05hbWUsXG4gICAgICAgIGNvbGdyb3VwQ29sUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Db2xncm91cENvbFByb3BzLmNsYXNzTmFtZVxuICAgICAgXTtcblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uY29sR3JvdXBDb2xTdHlsZSxcbiAgICAgICAgLi4uY29sZ3JvdXBDb2xQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uQ29sZ3JvdXBDb2xQcm9wcy5zdHlsZVxuICAgICAgfTtcblxuICAgICAgbGV0IG1pbldpZHRoID0gY29sdW1uLm1pbldpZHRoO1xuICAgICAgbGV0IG1heFdpZHRoID0gY29sdW1uLm1heFdpZHRoO1xuICAgICAgbGV0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgbWluV2lkdGgsXG4gICAgICAgIDBcbiAgICAgICk7XG5cbiAgICAgIC8vIGNhbGN1bGF0ZSBweFxuICAgICAgaWYgKHRvdGFsV2lkdGgpIHtcbiAgICAgICAgY29uc3QgaW5zaWRlV2lkdGggPSB0b3RhbFdpZHRoIC0gMjsgLy8gU3VidHJhY3QgYm9yZGVyc1xuICAgICAgICBjb25zdCB3aWR0aElzUGVyY2VudHMgPSBfLmlzUGVyY2VudHMod2lkdGgpO1xuICAgICAgICBjb25zdCBtaW5XaWR0aElzUGVyY2VudHMgPSBfLmlzUGVyY2VudHMobWluV2lkdGgpO1xuICAgICAgICBjb25zdCBtYXhXaWR0aElzUGVyY2VudHMgPSBfLmlzUGVyY2VudHMobWF4V2lkdGgpO1xuXG4gICAgICAgIGNvbnN0IHdpZHRoVmFsdWUgPSBwYXJzZUludCh3aWR0aCwgMTApO1xuICAgICAgICBjb25zdCBtaW5XaWR0aFZhbHVlID0gbWluV2lkdGggJiYgcGFyc2VJbnQobWluV2lkdGgsIDEwKTtcbiAgICAgICAgY29uc3QgbWF4V2lkdGhWYWx1ZSA9IG1heFdpZHRoICYmIHBhcnNlSW50KG1heFdpZHRoLCAxMCk7XG5cbiAgICAgICAgd2lkdGggPSB3aWR0aElzUGVyY2VudHNcbiAgICAgICAgICA/IF8ucGVyY2VudHNUb1B4KHdpZHRoVmFsdWUsIGluc2lkZVdpZHRoKVxuICAgICAgICAgIDogd2lkdGhWYWx1ZTtcblxuICAgICAgICBtaW5XaWR0aCA9IG1pbldpZHRoSXNQZXJjZW50c1xuICAgICAgICAgID8gXy5wZXJjZW50c1RvUHgobWluV2lkdGhWYWx1ZSwgaW5zaWRlV2lkdGgpXG4gICAgICAgICAgOiBtaW5XaWR0aFZhbHVlO1xuXG4gICAgICAgIG1heFdpZHRoID0gbWF4V2lkdGhJc1BlcmNlbnRzXG4gICAgICAgICAgPyBfLnBlcmNlbnRzVG9QeChtYXhXaWR0aFZhbHVlLCBpbnNpZGVXaWR0aClcbiAgICAgICAgICA6IG1heFdpZHRoVmFsdWU7XG5cbiAgICAgICAgd2lkdGggPSBfLmNsYW1wKHdpZHRoLCBtaW5XaWR0aCwgbWF4V2lkdGgpO1xuXG4gICAgICAgIHJhd0NvbHVtbnNXaWR0aCArPSB3aWR0aDtcbiAgICAgICAgd2lkdGggPSBNYXRoLmZsb29yKHdpZHRoKTtcbiAgICAgICAgZmxvb3JDb2x1bW5zV2lkdGggKz0gd2lkdGg7XG5cbiAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguZmxvb3IocmF3Q29sdW1uc1dpZHRoIC0gZmxvb3JDb2x1bW5zV2lkdGgpO1xuXG4gICAgICAgIGlmIChkaWZmID49IDEpIHtcbiAgICAgICAgICB3aWR0aCArPSBkaWZmO1xuICAgICAgICAgIGZsb29yQ29sdW1uc1dpZHRoICs9IGRpZmY7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICAgIGNvbnN0IGxlZnQgPSBmaXhlZENvbHVtbnNQcm9wcy5yZWR1Y2UoXG4gICAgICAgICAgICAodmFsdWUsIGl0ZW0pID0+IHZhbHVlICsgaXRlbS53aWR0aCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApO1xuICAgICAgICAgIGZpeGVkQ29sdW1uc1Byb3BzLnB1c2goeyB3aWR0aCwgbGVmdCB9KTtcblxuICAgICAgICAgIGlmIChpc0xhc3RGaXhlZCkge1xuICAgICAgICAgICAgd2lkdGggKz0gbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzSW5uZXJGaXhlZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGNvbFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3J0LWNvbGdyb3VwLWNvbCcsIGNsYXNzZXMsIHtcbiAgICAgICAgICAgICctZHVtbXknOiBpc0R1bW15XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIHdpZHRoOiAhaXNEdW1teSA/IHdpZHRoIDogdW5kZWZpbmVkXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VIZWFkZXJHcm91cHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEdyb3VwUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgICk7XG4gICAgICBjb25zdCB0aGVhZEdyb3VwVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctaGVhZGVyR3JvdXBzJywgdGhlYWRHcm91cFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3RoZWFkR3JvdXBQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udGhlYWRHcm91cFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRHcm91cFRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkR3JvdXBUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkR3JvdXBUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAobWFrZUhlYWRlckdyb3VwKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUhlYWRlckdyb3VwID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRHcm91cFRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApO1xuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEdyb3VwVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZVxuICAgICAgXTtcblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkR3JvdXBUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZVxuICAgICAgfTtcblxuICAgICAgY29uc3QgY29sU3BhbiA9IGNvbHVtbi5jb2x1bW5zLmxlbmd0aDtcblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRHcm91cFRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgICAgY29sU3BhblxuICAgICAgfTtcblxuICAgICAgY29uc3QgaXNEdW1teSA9IGkgPT09IGhlYWRlckdyb3Vwcy5sZW5ndGggLSAxO1xuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudCAmJiB0b3RhbFdpZHRoO1xuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbnNQcm9wc1tpXS53aWR0aDtcbiAgICAgICAgc3R5bGVzLmxlZnQgPSBmaXhlZENvbHVtbnNQcm9wc1tpXS5sZWZ0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb250ZW50ID0gXy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkhlYWRlciwge1xuICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICBjb2x1bW46IGNvbHVtblxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcywge1xuICAgICAgICAgICAgJy1kdW1teSc6IGlzRHVtbXksXG4gICAgICAgICAgICAnLWVtcHR5JzogIWNvbnRlbnQsXG4gICAgICAgICAgICAnLWZpeGVkJzogaXNGaXhlZFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VIZWFkZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgICk7XG4gICAgICBjb25zdCB0aGVhZFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgICk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1oZWFkZXInLCB0aGVhZFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3RoZWFkUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRoZWFkUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZFRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VIZWFkZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlRmlsdGVyID0gY29sdW1uID0+IHtcbiAgICAgIGNvbnN0IGlzRmlsdGVyYWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICBjb2x1bW4uZmlsdGVyYWJsZSxcbiAgICAgICAgZmlsdGVyYWJsZSxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG5cbiAgICAgIGlmICghaXNGaWx0ZXJhYmxlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWx0ZXIgPSBmaWx0ZXJlZC5maW5kKGZpbHRlciA9PiBmaWx0ZXIuaWQgPT09IGNvbHVtbi5pZCk7XG4gICAgICBjb25zdCBSZXNvbHZlZEZpbHRlckNvbXBvbmVudCA9IGNvbHVtbi5GaWx0ZXIgfHwgRmlsdGVyQ29tcG9uZW50O1xuXG4gICAgICByZXR1cm4gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgIFJlc29sdmVkRmlsdGVyQ29tcG9uZW50LFxuICAgICAgICB7XG4gICAgICAgICAgY29sdW1uLFxuICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICBvbkNoYW5nZTogdmFsdWUgPT4gdGhpcy5maWx0ZXJDb2x1bW4oY29sdW1uLCB2YWx1ZSlcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdFByb3BzLmNvbHVtbi5GaWx0ZXJcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VIZWFkZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCBzb3J0ID0gc29ydGVkLmZpbmQoZCA9PiBkLmlkID09PSBjb2x1bW4uaWQpO1xuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvdztcbiAgICAgIGNvbnN0IHRoZWFkVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApO1xuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZFRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWVcbiAgICAgIF07XG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZFRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlXG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZFRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdFxuICAgICAgfTtcblxuICAgICAgY29uc3QgaXNSZXNpemFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChjb2x1bW4ucmVzaXphYmxlLCByZXNpemFibGUsIGZhbHNlKTtcbiAgICAgIGNvbnN0IHJlc2l6ZXIgPSBpc1Jlc2l6YWJsZSA/IChcbiAgICAgICAgPFJlc2l6ZXJDb21wb25lbnRcbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0KGNvbHVtbiwgZSwgZmFsc2UpfVxuICAgICAgICAgIG9uVG91Y2hTdGFydD17ZSA9PiB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0KGNvbHVtbiwgZSwgdHJ1ZSl9XG4gICAgICAgICAgey4uLnJlc2l6ZXJQcm9wc31cbiAgICAgICAgLz5cbiAgICAgICkgOiBudWxsO1xuXG4gICAgICBjb25zdCBzb3J0T3JkZXIgPVxuICAgICAgICBzb3J0ICYmIHNob3dTb3J0T3JkZXIgPyA8U29ydE9yZGVyQ29tcG9uZW50IGRlc2M9e3NvcnQuZGVzY30gLz4gOiBudWxsO1xuXG4gICAgICBjb25zdCBmaWx0ZXIgPSBtYWtlRmlsdGVyKGNvbHVtbik7XG5cbiAgICAgIGNvbnN0IGlzU29ydGFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChjb2x1bW4uc29ydGFibGUsIHNvcnRhYmxlLCBmYWxzZSk7XG4gICAgICBjb25zdCBpc0R1bW15ID0gaSA9PT0gYWxsVmlzaWJsZUNvbHVtbnMubGVuZ3RoIC0gMTtcbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdG90YWxXaWR0aDtcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ud2lkdGg7XG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ubGVmdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCAncnQtcmVzaXphYmxlLWhlYWRlcicsIHtcbiAgICAgICAgICAgICctY3Vyc29yLXBvaW50ZXInOiBpc1NvcnRhYmxlLFxuICAgICAgICAgICAgJy1oaWRkZW4nOiAhc2hvdyxcbiAgICAgICAgICAgICctZHVtbXknOiBpc0R1bW15LFxuICAgICAgICAgICAgJy1maXhlZCc6IGlzRml4ZWQsXG4gICAgICAgICAgICAncnQtaGVhZGVyLXBpdm90JzpcbiAgICAgICAgICAgICAgcGl2b3RCeSAmJiBwaXZvdEJ5LnNsaWNlKDAsIC0xKS5pbmNsdWRlcyhjb2x1bW4uaWQpXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB0b2dnbGVTb3J0PXtlID0+IHtcbiAgICAgICAgICAgIGlzU29ydGFibGUgJiYgdGhpcy5zb3J0Q29sdW1uKGNvbHVtbiwgZS5zaGlmdEtleSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJ0LXJlc2l6YWJsZS1oZWFkZXItY29udGVudFwiPlxuICAgICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5IZWFkZXIsIHtcbiAgICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7ZmlsdGVyfVxuICAgICAgICAgIHtzb3J0T3JkZXJ9XG4gICAgICAgICAge3Jlc2l6ZXJ9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlUGFnZVJvdyA9IChyb3csIGksIHBhdGggPSBbXSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWwgPSByb3dbb3JpZ2luYWxLZXldO1xuICAgICAgY29uc3Qgcm93S2V5ID0gcm93S2V5UHJvcCA/IG9yaWdpbmFsW3Jvd0tleVByb3BdIDogdW5kZWZpbmVkO1xuICAgICAgY29uc3Qgcm93SW5mbyA9IHtcbiAgICAgICAgb3JpZ2luYWwsXG4gICAgICAgIHJvdzogcm93LFxuICAgICAgICBpbmRleDogcm93W2luZGV4S2V5XSxcbiAgICAgICAgdmlld0luZGV4OiArK3Jvd0luZGV4LFxuICAgICAgICBsZXZlbDogcGF0aC5sZW5ndGgsXG4gICAgICAgIG5lc3RpbmdQYXRoOiBwYXRoLmNvbmNhdChbcm93S2V5IHx8IGldKSxcbiAgICAgICAgYWdncmVnYXRlZDogcm93W2FnZ3JlZ2F0ZWRLZXldLFxuICAgICAgICBncm91cGVkQnlQaXZvdDogcm93W2dyb3VwZWRCeVBpdm90S2V5XSxcbiAgICAgICAgc3ViUm93czogcm93W3N1YlJvd3NLZXldXG4gICAgICB9O1xuICAgICAgY29uc3QgaXNFeHBhbmRlZCA9IF8uZ2V0KGV4cGFuZGVkLCByb3dJbmZvLm5lc3RpbmdQYXRoKTtcbiAgICAgIGNvbnN0IHRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKTtcblxuICAgICAgY29uc3Qgcm93cyA9IFtcbiAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtyb3dJbmZvLm5lc3RpbmdQYXRoLmpvaW4oJ18nKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICB0clByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHJvdy5fdmlld0luZGV4ICUgMiA/ICctZXZlbicgOiAnLW9kZCdcbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50clByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4sIGkyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93O1xuICAgICAgICAgICAgY29uc3QgdGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgICAgICAgZ2V0VGRQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCBjb2x1bW4sIHRoaXMpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCBjb2x1bW4sIHRoaXMpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICAgICAgICB0ZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgICAgICAgIC4uLnRkUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGlzRml4ZWQgPSBpMiA8IGZpeGVkQ29sdW1uc0NvdW50ICYmIHRvdGFsV2lkdGg7XG5cbiAgICAgICAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uc1Byb3BzW2kyXS53aWR0aDtcbiAgICAgICAgICAgICAgc3R5bGVzLmxlZnQgPSBmaXhlZENvbHVtbnNQcm9wc1tpMl0ubGVmdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY2VsbEluZm8gPSB7XG4gICAgICAgICAgICAgIC4uLnJvd0luZm8sXG4gICAgICAgICAgICAgIGlzRXhwYW5kZWQsXG4gICAgICAgICAgICAgIGNvbHVtbjogeyAuLi5jb2x1bW4gfSxcbiAgICAgICAgICAgICAgdmFsdWU6IHJvd0luZm8ucm93W2NvbHVtbi5pZF0sXG4gICAgICAgICAgICAgIHBpdm90ZWQ6IGNvbHVtbi5waXZvdGVkLFxuICAgICAgICAgICAgICBleHBhbmRlcjogY29sdW1uLmV4cGFuZGVyLFxuICAgICAgICAgICAgICBkaXNwbGF5UGl2b3RTdWJSb3dzOiBjb2x1bW4uZGlzcGxheVBpdm90U3ViUm93cyxcbiAgICAgICAgICAgICAgcmVzaXplZCxcbiAgICAgICAgICAgICAgc2hvdyxcbiAgICAgICAgICAgICAgdGRQcm9wcyxcbiAgICAgICAgICAgICAgY29sdW1uUHJvcHMsXG4gICAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAgIHN0eWxlc1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjZWxsSW5mby52YWx1ZTtcblxuICAgICAgICAgICAgbGV0IGludGVyYWN0aW9uUHJvcHM7XG4gICAgICAgICAgICBsZXQgaXNCcmFuY2g7XG4gICAgICAgICAgICBsZXQgaXNQcmV2aWV3O1xuXG4gICAgICAgICAgICBjb25zdCBvbkV4cGFuZGVyQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgICAgICAgbGV0IG5ld0V4cGFuZGVkID0gXy5jbG9uZShleHBhbmRlZCk7XG4gICAgICAgICAgICAgIGlmIChpc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgbmV3RXhwYW5kZWQgPSBfLnNldChuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIGZhbHNlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdFeHBhbmRlZCA9IF8uc2V0KG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwge30pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBleHBhbmRlZDogbmV3RXhwYW5kZWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uRXhwYW5kZWRDaGFuZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgb25FeHBhbmRlZENoYW5nZShuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gYSBzdGFuZGFyZCBjZWxsXG4gICAgICAgICAgICBsZXQgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgIGNvbHVtbi5DZWxsLFxuICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIFJlc29sdmUgUmVuZGVyZXJzXG4gICAgICAgICAgICBjb25zdCBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uQWdncmVnYXRlZCB8fFxuICAgICAgICAgICAgICAoIWNvbHVtbi5hZ2dyZWdhdGUgPyBBZ2dyZWdhdGVkQ29tcG9uZW50IDogY29sdW1uLkNlbGwpO1xuICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCA9XG4gICAgICAgICAgICAgIGNvbHVtbi5FeHBhbmRlciB8fCBFeHBhbmRlckNvbXBvbmVudDtcbiAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCA9XG4gICAgICAgICAgICAgIGNvbHVtbi5QaXZvdFZhbHVlIHx8IFBpdm90VmFsdWVDb21wb25lbnQ7XG4gICAgICAgICAgICBjb25zdCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCA9XG4gICAgICAgICAgICAgIFBpdm90Q29tcG9uZW50IHx8XG4gICAgICAgICAgICAgIChwcm9wcyA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgIDxSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uUGl2b3QgfHwgRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnQ7XG5cbiAgICAgICAgICAgIC8vIElzIHRoaXMgY2VsbCBleHBhbmRhYmxlP1xuICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQgfHwgY2VsbEluZm8uZXhwYW5kZXIpIHtcbiAgICAgICAgICAgICAgLy8gTWFrZSBpdCBleHBhbmRhYmxlIGJ5IGRlZnVhbHRcbiAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgIGludGVyYWN0aW9uUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgb25DbGljazogb25FeHBhbmRlckNsaWNrXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIC8vIElmIHBpdm90ZWQsIGhhcyBubyBzdWJSb3dzLCBhbmQgZG9lcyBub3QgaGF2ZSBhIHN1YkNvbXBvbmVudCwgZG8gbm90IG1ha2UgZXhwYW5kYWJsZVxuICAgICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCkge1xuICAgICAgICAgICAgICAgIGlmICghY2VsbEluZm8uc3ViUm93cykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFTdWJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvblByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkKSB7XG4gICAgICAgICAgICAgIC8vIElzIHRoaXMgY29sdW1uIGEgYnJhbmNoP1xuICAgICAgICAgICAgICBpc0JyYW5jaCA9XG4gICAgICAgICAgICAgICAgcm93SW5mby5yb3dbcGl2b3RJREtleV0gPT09IGNvbHVtbi5pZCAmJiBjZWxsSW5mby5zdWJSb3dzO1xuICAgICAgICAgICAgICAvLyBTaG91bGQgdGhpcyBjb2x1bW4gYmUgYmxhbms/XG4gICAgICAgICAgICAgIGlzUHJldmlldyA9XG4gICAgICAgICAgICAgICAgcGl2b3RCeS5pbmRleE9mKGNvbHVtbi5pZCkgPlxuICAgICAgICAgICAgICAgICAgcGl2b3RCeS5pbmRleE9mKHJvd0luZm8ucm93W3Bpdm90SURLZXldKSAmJiBjZWxsSW5mby5zdWJSb3dzO1xuICAgICAgICAgICAgICAvLyBQaXZvdCBDZWxsIFJlbmRlciBPdmVycmlkZVxuICAgICAgICAgICAgICBpZiAoaXNCcmFuY2gpIHtcbiAgICAgICAgICAgICAgICAvLyBpc1Bpdm90XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZFBpdm90Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAuLi5jZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvd1twaXZvdFZhbEtleV1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICByb3dbcGl2b3RWYWxLZXldXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgICAgICAgICAgICAvLyBTaG93IHRoZSBwaXZvdCBwcmV2aWV3XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICghY2VsbEluZm8uZGlzcGxheVBpdm90U3ViUm93cykge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbEluZm8uYWdncmVnYXRlZCkge1xuICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNlbGxJbmZvLmV4cGFuZGVyKSB7XG4gICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgcm93W3Bpdm90VmFsS2V5XVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAocGl2b3RCeSkge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsSW5mby5ncm91cGVkQnlQaXZvdCkge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsSW5mby5zdWJSb3dzICYmICFTdWJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgY2VsbFxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAga2V5PXtpMiArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgICAgICAgIXNob3cgJiYgJy1oaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSAmJiAncnQtZXhwYW5kYWJsZScsXG4gICAgICAgICAgICAgICAgICAoaXNCcmFuY2ggfHwgaXNQcmV2aWV3KSAmJiAncnQtcGl2b3QnLFxuICAgICAgICAgICAgICAgICAgaXNGaXhlZCAmJiAnLWZpeGVkJyxcbiAgICAgICAgICAgICAgICAgIGlzRml4ZWQgJiYgIXJlc29sdmVkQ2VsbCAmJiAnLWVtcHR5J1xuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICAgICAgICB7Li4uaW50ZXJhY3Rpb25Qcm9wc31cbiAgICAgICAgICAgICAgICB7Li4udGRQcm9wcy5yZXN0fVxuICAgICAgICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Jlc29sdmVkQ2VsbH1cbiAgICAgICAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICBdO1xuXG4gICAgICBpZiAocm93SW5mby5zdWJSb3dzICYmIGlzRXhwYW5kZWQpIHtcbiAgICAgICAgcm93SW5mby5zdWJSb3dzLmZvckVhY2goKGQsIGkpID0+XG4gICAgICAgICAgcm93cy5wdXNoKC4uLm1ha2VQYWdlUm93KGQsIGksIHJvd0luZm8ubmVzdGluZ1BhdGgpKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChTdWJDb21wb25lbnQgJiYgIXJvd0luZm8uc3ViUm93cyAmJiBpc0V4cGFuZGVkKSB7XG4gICAgICAgIHJvd3MucHVzaChTdWJDb21wb25lbnQocm93SW5mbykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm93cztcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVBhZFJvdyA9IChyb3csIGkpID0+IHtcbiAgICAgIGNvbnN0IHRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgJy1wYWRSb3cnLFxuICAgICAgICAgICAgKHBhZ2VSb3dzLmxlbmd0aCArIGkpICUgMiA/ICctZXZlbicgOiAnLW9kZCcsXG4gICAgICAgICAgICB0clByb3BzLmNsYXNzTmFtZVxuICAgICAgICAgICl9XG4gICAgICAgICAgc3R5bGU9e3RyUHJvcHMuc3R5bGUgfHwge319XG4gICAgICAgID5cbiAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VQYWRDb2x1bW4pfVxuICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVBhZENvbHVtbiA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3c7XG4gICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApO1xuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICB0ZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lXG4gICAgICBdO1xuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRkUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGVcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdG90YWxXaWR0aDtcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ud2lkdGg7XG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ubGVmdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCAhc2hvdyAmJiAnLWhpZGRlbicsIHtcbiAgICAgICAgICAgICctZml4ZWQnOiBpc0ZpeGVkXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4udGRQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KFBhZFJvd0NvbXBvbmVudCl9XG4gICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlQ29sdW1uRm9vdGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRGb290UHJvcHMgPSBnZXRUZm9vdFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKTtcbiAgICAgIGNvbnN0IHRGb290VHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGZvb3RUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZm9vdENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17dEZvb3RQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgc3R5bGU9e3RGb290UHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRGb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHRGb290VHJQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgICAgc3R5bGU9e3RGb290VHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50Rm9vdFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VDb2x1bW5Gb290ZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGZvb3RDb21wb25lbnQ+XG4gICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlQ29sdW1uRm9vdGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvdztcbiAgICAgIGNvbnN0IHRGb290VGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGZvb3RUZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApO1xuICAgICAgY29uc3QgY29sdW1uRm9vdGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRGb290ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIHRGb290VGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uRm9vdGVyUHJvcHMuY2xhc3NOYW1lXG4gICAgICBdO1xuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRGb290VGRQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uRm9vdGVyUHJvcHMuc3R5bGVcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdG90YWxXaWR0aDtcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ud2lkdGg7XG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ubGVmdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCAhc2hvdyAmJiAnLWhpZGRlbicsIHtcbiAgICAgICAgICAgICctZml4ZWQnOiBpc0ZpeGVkXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4uY29sdW1uUHJvcHMucmVzdH1cbiAgICAgICAgICB7Li4udEZvb3RUZFByb3BzLnJlc3R9XG4gICAgICAgICAgey4uLmNvbHVtbkZvb3RlclByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkZvb3Rlciwge1xuICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgIGNvbHVtbjogY29sdW1uXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlUGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb25Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0UGFnaW5hdGlvblByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdpbmF0aW9uQ29tcG9uZW50XG4gICAgICAgICAgey4uLnJlc29sdmVkU3RhdGV9XG4gICAgICAgICAgcGFnZXM9e3BhZ2VzfVxuICAgICAgICAgIGNhblByZXZpb3VzPXtjYW5QcmV2aW91c31cbiAgICAgICAgICBjYW5OZXh0PXtjYW5OZXh0fVxuICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5vblBhZ2VDaGFuZ2V9XG4gICAgICAgICAgb25QYWdlU2l6ZUNoYW5nZT17dGhpcy5vblBhZ2VTaXplQ2hhbmdlfVxuICAgICAgICAgIGNsYXNzTmFtZT17cGFnaW5hdGlvblByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICBzdHlsZT17cGFnaW5hdGlvblByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi5wYWdpbmF0aW9uUHJvcHMucmVzdH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJvb3RQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICk7XG4gICAgY29uc3QgdGFibGVQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFRhYmxlUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgKTtcbiAgICBjb25zdCB0Qm9keVByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0VGJvZHlQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICApO1xuICAgIGNvbnN0IGxvYWRpbmdQcm9wcyA9IGdldExvYWRpbmdQcm9wcyhcbiAgICAgIGZpbmFsU3RhdGUsXG4gICAgICB1bmRlZmluZWQsXG4gICAgICB1bmRlZmluZWQsXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICBjb25zdCBub0RhdGFQcm9wcyA9IGdldE5vRGF0YVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKTtcbiAgICBjb25zdCByZXNpemVyUHJvcHMgPSBnZXRSZXNpemVyUHJvcHMoXG4gICAgICBmaW5hbFN0YXRlLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgdGhpc1xuICAgICk7XG5cbiAgICBjb25zdCBkaXNwbGF5Rm9vdGVyVG9wID1cbiAgICAgIGZvb3RlclBsYWNlbWVudCA9PT0gJ3RvcCcgfHwgZm9vdGVyUGxhY2VtZW50ID09PSAnYm90aCc7XG4gICAgY29uc3QgZGlzcGxheUZvb3RlckJvdHRvbSA9XG4gICAgICBmb290ZXJQbGFjZW1lbnQgPT09ICdib3R0b20nIHx8IGZvb3RlclBsYWNlbWVudCA9PT0gJ2JvdGgnO1xuXG4gICAgY29uc3QgbWFrZVRhYmxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgY29sR3JvdXAgPSBtYWtlQ29sR3JvdXAoKTtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBtYWtlUGFnaW5hdGlvbigpO1xuICAgICAgY29uc3QgZm9vdGVyID0gaGFzQ29sdW1uRm9vdGVyID8gbWFrZUNvbHVtbkZvb3RlcnMoKSA6IG51bGw7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ1JlYWN0VGFibGUnLCBjbGFzc05hbWUsIHJvb3RQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogdG90YWxXaWR0aCxcbiAgICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAgICAgLi4ucm9vdFByb3BzLnN0eWxlXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucm9vdFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7c2hvd1BhZ2luYXRpb24gJiYgc2hvd1BhZ2luYXRpb25Ub3AgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb24tdG9wXCI+e3BhZ2luYXRpb259PC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPFRhYmxlV3JhcHBlciB3cmFwcGVyUmVmPXtjID0+ICh0aGlzLnRhYmxlV3JhcHBlciA9IGMpfT5cbiAgICAgICAgICAgIDxUYWJsZUNvbXBvbmVudFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgdGFibGVQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgY3VycmVudGx5UmVzaXppbmcgPyAncnQtcmVzaXppbmcnIDogJydcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgc3R5bGU9e3RhYmxlUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgIHsuLi50YWJsZVByb3BzLnJlc3R9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjb2xHcm91cH1cbiAgICAgICAgICAgICAge2hhc0hlYWRlckdyb3VwcyA/IG1ha2VIZWFkZXJHcm91cHMoKSA6IG51bGx9XG4gICAgICAgICAgICAgIHttYWtlSGVhZGVycygpfVxuICAgICAgICAgICAgICB7ZGlzcGxheUZvb3RlclRvcCAmJiBmb290ZXJ9XG4gICAgICAgICAgICAgIDxUYm9keUNvbXBvbmVudFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Qm9keVByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3RCb2R5UHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgICAgey4uLnRCb2R5UHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwYWdlUm93cy5tYXAoKGQsIGkpID0+IG1ha2VQYWdlUm93KGQsIGkpKX1cbiAgICAgICAgICAgICAgICB7cGFkUm93cy5tYXAobWFrZVBhZFJvdyl9XG4gICAgICAgICAgICAgIDwvVGJvZHlDb21wb25lbnQ+XG4gICAgICAgICAgICAgIHtkaXNwbGF5Rm9vdGVyQm90dG9tICYmIGZvb3Rlcn1cbiAgICAgICAgICAgIDwvVGFibGVDb21wb25lbnQ+XG4gICAgICAgICAgPC9UYWJsZVdyYXBwZXI+XG4gICAgICAgICAge3Nob3dQYWdpbmF0aW9uICYmIHNob3dQYWdpbmF0aW9uQm90dG9tID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWJvdHRvbVwiPntwYWdpbmF0aW9ufTwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHshcGFnZVJvd3MubGVuZ3RoICYmIChcbiAgICAgICAgICAgIDxOb0RhdGFDb21wb25lbnQgey4uLm5vRGF0YVByb3BzfT5cbiAgICAgICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KG5vRGF0YVRleHQpfVxuICAgICAgICAgICAgPC9Ob0RhdGFDb21wb25lbnQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8TG9hZGluZ0NvbXBvbmVudFxuICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgIGxvYWRpbmdUZXh0PXtsb2FkaW5nVGV4dH1cbiAgICAgICAgICAgIHsuLi5sb2FkaW5nUHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyBjaGlsZFByb3BzIGFyZSBvcHRpb25hbGx5IHBhc3NlZCB0byBhIGZ1bmN0aW9uLWFzLWEtY2hpbGRcbiAgICByZXR1cm4gY2hpbGRyZW4gPyBjaGlsZHJlbihmaW5hbFN0YXRlLCBtYWtlVGFibGUsIHRoaXMpIDogbWFrZVRhYmxlKCk7XG4gIH1cbn1cbiJdfQ==