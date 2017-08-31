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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0Iiwic2V0U3RhdGUiLCJ0YWJsZVRvdGFsV2lkdGgiLCJ0YWJsZVdyYXBwZXIiLCJvZmZzZXRXaWR0aCIsInJlc29sdmVkU3RhdGUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZ2V0UHJvcHMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0Q29sR3JvdXBDb2xQcm9wcyIsImdldFRoZWFkR3JvdXBQcm9wcyIsImdldFRoZWFkR3JvdXBUclByb3BzIiwiZ2V0VGhlYWRHcm91cFRoUHJvcHMiLCJnZXRUaGVhZFByb3BzIiwiZ2V0VGhlYWRUclByb3BzIiwiZ2V0VGhlYWRUaFByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJQcm9wcyIsImdldFRoZWFkRmlsdGVyVHJQcm9wcyIsImdldFRoZWFkRmlsdGVyVGhQcm9wcyIsImdldFRib2R5UHJvcHMiLCJnZXRUclByb3BzIiwiZ2V0VGRQcm9wcyIsImdldFRmb290UHJvcHMiLCJnZXRUZm9vdFRyUHJvcHMiLCJnZXRUZm9vdFRkUHJvcHMiLCJnZXRQYWdpbmF0aW9uUHJvcHMiLCJnZXRMb2FkaW5nUHJvcHMiLCJnZXROb0RhdGFQcm9wcyIsImdldFJlc2l6ZXJQcm9wcyIsInNob3dQYWdpbmF0aW9uIiwic2hvd1BhZ2luYXRpb25Ub3AiLCJzaG93UGFnaW5hdGlvbkJvdHRvbSIsIm1hbnVhbCIsImxvYWRpbmdUZXh0Iiwibm9EYXRhVGV4dCIsInNvcnRhYmxlIiwicmVzaXphYmxlIiwiZmlsdGVyYWJsZSIsImZvb3RlclBsYWNlbWVudCIsInBpdm90SURLZXkiLCJwaXZvdFZhbEtleSIsInBpdm90QnkiLCJzdWJSb3dzS2V5IiwiYWdncmVnYXRlZEtleSIsIm9yaWdpbmFsS2V5IiwiaW5kZXhLZXkiLCJncm91cGVkQnlQaXZvdEtleSIsImZpeGVkQ29sdW1uc0NvdW50IiwibG9hZGluZyIsInBhZ2VzIiwib25FeHBhbmRlZENoYW5nZSIsIlRhYmxlV3JhcHBlciIsIlRhYmxlQ29tcG9uZW50IiwiVGhlYWRDb21wb25lbnQiLCJUYm9keUNvbXBvbmVudCIsIlRyQ29tcG9uZW50IiwiVGhDb21wb25lbnQiLCJUZENvbXBvbmVudCIsIlRmb290Q29tcG9uZW50IiwiUGFnaW5hdGlvbkNvbXBvbmVudCIsIkxvYWRpbmdDb21wb25lbnQiLCJTdWJDb21wb25lbnQiLCJOb0RhdGFDb21wb25lbnQiLCJSZXNpemVyQ29tcG9uZW50IiwiRXhwYW5kZXJDb21wb25lbnQiLCJQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RDb21wb25lbnQiLCJBZ2dyZWdhdGVkQ29tcG9uZW50IiwiRmlsdGVyQ29tcG9uZW50IiwiUGFkUm93Q29tcG9uZW50IiwicmVzb2x2ZWREYXRhIiwiYWxsVmlzaWJsZUNvbHVtbnMiLCJoZWFkZXJHcm91cHMiLCJoYXNIZWFkZXJHcm91cHMiLCJzb3J0ZWREYXRhIiwic3RhcnRSb3ciLCJlbmRSb3ciLCJwYWdlUm93cyIsInNsaWNlIiwibWluUm93cyIsInBhZFJvd3MiLCJyYW5nZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJoYXNDb2x1bW5Gb290ZXIiLCJzb21lIiwiZCIsIkZvb3RlciIsImhhc0ZpbHRlcnMiLCJyZWN1cnNlUm93c1ZpZXdJbmRleCIsInJvd3MiLCJwYXRoIiwiaW5kZXgiLCJtYXAiLCJyb3ciLCJpIiwicm93V2l0aFZpZXdJbmRleCIsIl92aWV3SW5kZXgiLCJuZXdQYXRoIiwiY29uY2F0IiwiZ2V0IiwiY2FuUHJldmlvdXMiLCJjYW5OZXh0Iiwicm93SW5kZXgiLCJmaW5hbFN0YXRlIiwiZml4ZWRDb2x1bW5zUHJvcHMiLCJyYXdDb2x1bW5zV2lkdGgiLCJmbG9vckNvbHVtbnNXaWR0aCIsIm1ha2VDb2xHcm91cCIsIm1ha2VDb2wiLCJjb2x1bW4iLCJpc0R1bW15IiwiaXNGaXhlZCIsImlzSW5uZXJGaXhlZCIsImlzTGFzdEZpeGVkIiwicmVzaXplZENvbCIsImZpbmQiLCJ4IiwiaWQiLCJjb2xncm91cENvbFByb3BzIiwic3BsaXRQcm9wcyIsInVuZGVmaW5lZCIsImNvbHVtbkNvbGdyb3VwQ29sUHJvcHMiLCJjbGFzc2VzIiwiY29sR3JvdXBDb2xDbGFzc05hbWUiLCJzdHlsZXMiLCJjb2xHcm91cENvbFN0eWxlIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIndpZHRoIiwiZ2V0Rmlyc3REZWZpbmVkIiwidmFsdWUiLCJ3aWR0aElzUGVyY2VudHMiLCJpc1BlcmNlbnRzIiwibWluV2lkdGhJc1BlcmNlbnRzIiwibWF4V2lkdGhJc1BlcmNlbnRzIiwid2lkdGhWYWx1ZSIsInBhcnNlSW50IiwibWluV2lkdGhWYWx1ZSIsIm1heFdpZHRoVmFsdWUiLCJwZXJjZW50c1RvUHgiLCJjbGFtcCIsImZsb29yIiwiZGlmZiIsImxlZnQiLCJyZWR1Y2UiLCJpdGVtIiwicHVzaCIsIm1ha2VIZWFkZXJHcm91cHMiLCJ0aGVhZEdyb3VwUHJvcHMiLCJ0aGVhZEdyb3VwVHJQcm9wcyIsInJlc3QiLCJtYWtlSGVhZGVyR3JvdXAiLCJ0aGVhZEdyb3VwVGhQcm9wcyIsImNvbHVtbkhlYWRlclByb3BzIiwiZ2V0SGVhZGVyUHJvcHMiLCJoZWFkZXJDbGFzc05hbWUiLCJoZWFkZXJTdHlsZSIsImNvbFNwYW4iLCJjb2x1bW5zIiwiY29udGVudCIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsIkhlYWRlciIsImRhdGEiLCJtYWtlSGVhZGVycyIsInRoZWFkUHJvcHMiLCJ0aGVhZFRyUHJvcHMiLCJtYWtlSGVhZGVyIiwic29ydCIsInNob3ciLCJ0aGVhZFRoUHJvcHMiLCJpc1Jlc2l6YWJsZSIsInJlc2l6ZXIiLCJlIiwicmVzaXplclByb3BzIiwiaXNTb3J0YWJsZSIsImRlc2MiLCJpbmNsdWRlcyIsInNoaWZ0S2V5IiwibWFrZUZpbHRlcnMiLCJ0aGVhZEZpbHRlclByb3BzIiwidGhlYWRGaWx0ZXJUclByb3BzIiwibWFrZUZpbHRlciIsInRoZWFkRmlsdGVyVGhQcm9wcyIsImZpbHRlciIsIlJlc29sdmVkRmlsdGVyQ29tcG9uZW50IiwiRmlsdGVyIiwiaXNGaWx0ZXJhYmxlIiwib25DaGFuZ2UiLCJtYWtlUGFnZVJvdyIsInJvd0luZm8iLCJvcmlnaW5hbCIsInZpZXdJbmRleCIsImxldmVsIiwibmVzdGluZ1BhdGgiLCJhZ2dyZWdhdGVkIiwiZ3JvdXBlZEJ5UGl2b3QiLCJzdWJSb3dzIiwiaXNFeHBhbmRlZCIsInRyUHJvcHMiLCJqb2luIiwiaTIiLCJ0ZFByb3BzIiwiY29sdW1uUHJvcHMiLCJjZWxsSW5mbyIsInBpdm90ZWQiLCJleHBhbmRlciIsImludGVyYWN0aW9uUHJvcHMiLCJpc0JyYW5jaCIsImlzUHJldmlldyIsIm9uRXhwYW5kZXJDbGljayIsIm5ld0V4cGFuZGVkIiwiY2xvbmUiLCJzZXQiLCJzZXRTdGF0ZVdpdGhEYXRhIiwicmVzb2x2ZWRDZWxsIiwiQ2VsbCIsIlJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCIsIkFnZ3JlZ2F0ZWQiLCJhZ2dyZWdhdGUiLCJSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50IiwiRXhwYW5kZXIiLCJSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQiLCJQaXZvdFZhbHVlIiwiRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnQiLCJSZXNvbHZlZFBpdm90Q29tcG9uZW50IiwiUGl2b3QiLCJleHBhbmRhYmxlIiwib25DbGljayIsImluZGV4T2YiLCJtYWtlUGFkUm93IiwibWFrZVBhZENvbHVtbiIsIm1ha2VDb2x1bW5Gb290ZXJzIiwidEZvb3RQcm9wcyIsInRGb290VHJQcm9wcyIsIm1ha2VDb2x1bW5Gb290ZXIiLCJ0Rm9vdFRkUHJvcHMiLCJjb2x1bW5Gb290ZXJQcm9wcyIsImdldEZvb3RlclByb3BzIiwibWFrZVBhZ2luYXRpb24iLCJwYWdpbmF0aW9uUHJvcHMiLCJyb290UHJvcHMiLCJ0YWJsZVByb3BzIiwidEJvZHlQcm9wcyIsImxvYWRpbmdQcm9wcyIsIm5vRGF0YVByb3BzIiwiZGlzcGxheUZvb3RlclRvcCIsImRpc3BsYXlGb290ZXJCb3R0b20iLCJtYWtlVGFibGUiLCJjb2xHcm91cCIsInBhZ2luYXRpb24iLCJmb290ZXIiLCJjIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBSkE7OztBQU1PLElBQU1BLHdFQUFOOztJQUVjQyxVOzs7QUFHbkIsc0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFHbEIsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUNBLFVBQUtFLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkYsSUFBbkIsT0FBckI7QUFDQSxVQUFLRyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJILElBQW5CLE9BQXJCO0FBQ0EsVUFBS0ksY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CSixJQUFwQixPQUF0QjtBQUNBLFVBQUtLLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkwsSUFBcEIsT0FBdEI7QUFDQSxVQUFLTSxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JOLElBQWhCLE9BQWxCO0FBQ0EsVUFBS08sUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNQLElBQWQsT0FBaEI7QUFDQSxVQUFLUSxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JSLElBQWhCLE9BQWxCO0FBQ0EsVUFBS1MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCVCxJQUFsQixPQUFwQjtBQUNBLFVBQUtVLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCVixJQUF0QixPQUF4QjtBQUNBLFVBQUtXLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQlgsSUFBaEIsT0FBbEI7QUFDQSxVQUFLWSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JaLElBQWxCLE9BQXBCO0FBQ0EsVUFBS2EsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJiLElBQXZCLE9BQXpCO0FBQ0EsVUFBS2MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCZCxJQUFyQixPQUF2QjtBQUNBLFVBQUtlLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCZixJQUF4QixPQUExQjs7QUFFQSxVQUFLZ0IsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sQ0FESztBQUVYQyxnQkFBVXBCLE1BQU1xQixlQUZMO0FBR1hDLGNBQVF0QixNQUFNdUIsYUFISDtBQUlYQyxnQkFBVXhCLE1BQU15QixlQUpMO0FBS1hDLGdCQUFVMUIsTUFBTTJCLGVBTEw7QUFNWEMsZUFBUzVCLE1BQU02QixjQU5KO0FBT1hDLHlCQUFtQixLQVBSO0FBUVhDLG9CQUFjO0FBUkgsS0FBYjtBQXBCa0I7QUE4Qm5COzs7O3dDQUVvQjtBQUNuQixXQUFLQyxRQUFMLENBQWMsRUFBRUMsaUJBQWlCLEtBQUtDLFlBQUwsQ0FBa0JDLFdBQXJDLEVBQWQ7QUFDRDs7OzZCQUVTO0FBQUE7O0FBQ1IsVUFBTUMsZ0JBQWdCLEtBQUtuQyxnQkFBTCxFQUF0QjtBQURRLFVBR05vQyxRQUhNLEdBd0ZKRCxhQXhGSSxDQUdOQyxRQUhNO0FBQUEsVUFJTkMsU0FKTSxHQXdGSkYsYUF4RkksQ0FJTkUsU0FKTTtBQUFBLFVBS05DLEtBTE0sR0F3RkpILGFBeEZJLENBS05HLEtBTE07QUFBQSxVQU1OQyxRQU5NLEdBd0ZKSixhQXhGSSxDQU1OSSxRQU5NO0FBQUEsVUFPTkMsYUFQTSxHQXdGSkwsYUF4RkksQ0FPTkssYUFQTTtBQUFBLFVBUU5DLG1CQVJNLEdBd0ZKTixhQXhGSSxDQVFOTSxtQkFSTTtBQUFBLFVBU05DLGtCQVRNLEdBd0ZKUCxhQXhGSSxDQVNOTyxrQkFUTTtBQUFBLFVBVU5DLG9CQVZNLEdBd0ZKUixhQXhGSSxDQVVOUSxvQkFWTTtBQUFBLFVBV05DLG9CQVhNLEdBd0ZKVCxhQXhGSSxDQVdOUyxvQkFYTTtBQUFBLFVBWU5DLGFBWk0sR0F3RkpWLGFBeEZJLENBWU5VLGFBWk07QUFBQSxVQWFOQyxlQWJNLEdBd0ZKWCxhQXhGSSxDQWFOVyxlQWJNO0FBQUEsVUFjTkMsZUFkTSxHQXdGSlosYUF4RkksQ0FjTlksZUFkTTtBQUFBLFVBZU5DLG1CQWZNLEdBd0ZKYixhQXhGSSxDQWVOYSxtQkFmTTtBQUFBLFVBZ0JOQyxxQkFoQk0sR0F3RkpkLGFBeEZJLENBZ0JOYyxxQkFoQk07QUFBQSxVQWlCTkMscUJBakJNLEdBd0ZKZixhQXhGSSxDQWlCTmUscUJBakJNO0FBQUEsVUFrQk5DLGFBbEJNLEdBd0ZKaEIsYUF4RkksQ0FrQk5nQixhQWxCTTtBQUFBLFVBbUJOQyxVQW5CTSxHQXdGSmpCLGFBeEZJLENBbUJOaUIsVUFuQk07QUFBQSxVQW9CTkMsVUFwQk0sR0F3RkpsQixhQXhGSSxDQW9CTmtCLFVBcEJNO0FBQUEsVUFxQk5DLGFBckJNLEdBd0ZKbkIsYUF4RkksQ0FxQk5tQixhQXJCTTtBQUFBLFVBc0JOQyxlQXRCTSxHQXdGSnBCLGFBeEZJLENBc0JOb0IsZUF0Qk07QUFBQSxVQXVCTkMsZUF2Qk0sR0F3RkpyQixhQXhGSSxDQXVCTnFCLGVBdkJNO0FBQUEsVUF3Qk5DLGtCQXhCTSxHQXdGSnRCLGFBeEZJLENBd0JOc0Isa0JBeEJNO0FBQUEsVUF5Qk5DLGVBekJNLEdBd0ZKdkIsYUF4RkksQ0F5Qk51QixlQXpCTTtBQUFBLFVBMEJOQyxjQTFCTSxHQXdGSnhCLGFBeEZJLENBMEJOd0IsY0ExQk07QUFBQSxVQTJCTkMsZUEzQk0sR0F3Rkp6QixhQXhGSSxDQTJCTnlCLGVBM0JNO0FBQUEsVUE0Qk5DLGNBNUJNLEdBd0ZKMUIsYUF4RkksQ0E0Qk4wQixjQTVCTTtBQUFBLFVBNkJOQyxpQkE3Qk0sR0F3RkozQixhQXhGSSxDQTZCTjJCLGlCQTdCTTtBQUFBLFVBOEJOQyxvQkE5Qk0sR0F3Rko1QixhQXhGSSxDQThCTjRCLG9CQTlCTTtBQUFBLFVBK0JOQyxNQS9CTSxHQXdGSjdCLGFBeEZJLENBK0JONkIsTUEvQk07QUFBQSxVQWdDTkMsV0FoQ00sR0F3Rko5QixhQXhGSSxDQWdDTjhCLFdBaENNO0FBQUEsVUFpQ05DLFVBakNNLEdBd0ZKL0IsYUF4RkksQ0FpQ04rQixVQWpDTTtBQUFBLFVBa0NOQyxRQWxDTSxHQXdGSmhDLGFBeEZJLENBa0NOZ0MsUUFsQ007QUFBQSxVQW1DTkMsU0FuQ00sR0F3RkpqQyxhQXhGSSxDQW1DTmlDLFNBbkNNO0FBQUEsVUFvQ05DLFVBcENNLEdBd0ZKbEMsYUF4RkksQ0FvQ05rQyxVQXBDTTtBQUFBLFVBcUNOQyxlQXJDTSxHQXdGSm5DLGFBeEZJLENBcUNObUMsZUFyQ007QUFBQSxVQXVDTkMsVUF2Q00sR0F3RkpwQyxhQXhGSSxDQXVDTm9DLFVBdkNNO0FBQUEsVUF3Q05DLFdBeENNLEdBd0ZKckMsYUF4RkksQ0F3Q05xQyxXQXhDTTtBQUFBLFVBeUNOQyxPQXpDTSxHQXdGSnRDLGFBeEZJLENBeUNOc0MsT0F6Q007QUFBQSxVQTBDTkMsVUExQ00sR0F3Rkp2QyxhQXhGSSxDQTBDTnVDLFVBMUNNO0FBQUEsVUEyQ05DLGFBM0NNLEdBd0ZKeEMsYUF4RkksQ0EyQ053QyxhQTNDTTtBQUFBLFVBNENOQyxXQTVDTSxHQXdGSnpDLGFBeEZJLENBNENOeUMsV0E1Q007QUFBQSxVQTZDTkMsUUE3Q00sR0F3RkoxQyxhQXhGSSxDQTZDTjBDLFFBN0NNO0FBQUEsVUE4Q05DLGlCQTlDTSxHQXdGSjNDLGFBeEZJLENBOENOMkMsaUJBOUNNO0FBQUEsVUFnRE5DLGlCQWhETSxHQXdGSjVDLGFBeEZJLENBZ0RONEMsaUJBaERNO0FBQUEsVUFrRE5DLE9BbERNLEdBd0ZKN0MsYUF4RkksQ0FrRE42QyxPQWxETTtBQUFBLFVBbURON0QsUUFuRE0sR0F3RkpnQixhQXhGSSxDQW1ETmhCLFFBbkRNO0FBQUEsVUFvRE5ELElBcERNLEdBd0ZKaUIsYUF4RkksQ0FvRE5qQixJQXBETTtBQUFBLFVBcURORyxNQXJETSxHQXdGSmMsYUF4RkksQ0FxRE5kLE1BckRNO0FBQUEsVUFzRE5JLFFBdERNLEdBd0ZKVSxhQXhGSSxDQXNETlYsUUF0RE07QUFBQSxVQXVETkUsT0F2RE0sR0F3RkpRLGFBeEZJLENBdUROUixPQXZETTtBQUFBLFVBd0ROSixRQXhETSxHQXdGSlksYUF4RkksQ0F3RE5aLFFBeERNO0FBQUEsVUF5RE4wRCxLQXpETSxHQXdGSjlDLGFBeEZJLENBeUROOEMsS0F6RE07QUFBQSxVQTBETkMsZ0JBMURNLEdBd0ZKL0MsYUF4RkksQ0EwRE4rQyxnQkExRE07QUFBQSxVQTRETkMsWUE1RE0sR0F3RkpoRCxhQXhGSSxDQTRETmdELFlBNURNO0FBQUEsVUE2RE5DLGNBN0RNLEdBd0ZKakQsYUF4RkksQ0E2RE5pRCxjQTdETTtBQUFBLFVBOEROQyxjQTlETSxHQXdGSmxELGFBeEZJLENBOEROa0QsY0E5RE07QUFBQSxVQStETkMsY0EvRE0sR0F3RkpuRCxhQXhGSSxDQStETm1ELGNBL0RNO0FBQUEsVUFnRU5DLFdBaEVNLEdBd0ZKcEQsYUF4RkksQ0FnRU5vRCxXQWhFTTtBQUFBLFVBaUVOQyxXQWpFTSxHQXdGSnJELGFBeEZJLENBaUVOcUQsV0FqRU07QUFBQSxVQWtFTkMsV0FsRU0sR0F3Rkp0RCxhQXhGSSxDQWtFTnNELFdBbEVNO0FBQUEsVUFtRU5DLGNBbkVNLEdBd0ZKdkQsYUF4RkksQ0FtRU51RCxjQW5FTTtBQUFBLFVBb0VOQyxtQkFwRU0sR0F3Rkp4RCxhQXhGSSxDQW9FTndELG1CQXBFTTtBQUFBLFVBcUVOQyxnQkFyRU0sR0F3Rkp6RCxhQXhGSSxDQXFFTnlELGdCQXJFTTtBQUFBLFVBc0VOQyxZQXRFTSxHQXdGSjFELGFBeEZJLENBc0VOMEQsWUF0RU07QUFBQSxVQXVFTkMsZUF2RU0sR0F3RkozRCxhQXhGSSxDQXVFTjJELGVBdkVNO0FBQUEsVUF3RU5DLGdCQXhFTSxHQXdGSjVELGFBeEZJLENBd0VONEQsZ0JBeEVNO0FBQUEsVUF5RU5DLGlCQXpFTSxHQXdGSjdELGFBeEZJLENBeUVONkQsaUJBekVNO0FBQUEsVUEwRU5DLG1CQTFFTSxHQXdGSjlELGFBeEZJLENBMEVOOEQsbUJBMUVNO0FBQUEsVUEyRU5DLGNBM0VNLEdBd0ZKL0QsYUF4RkksQ0EyRU4rRCxjQTNFTTtBQUFBLFVBNEVOQyxtQkE1RU0sR0F3RkpoRSxhQXhGSSxDQTRFTmdFLG1CQTVFTTtBQUFBLFVBNkVOQyxlQTdFTSxHQXdGSmpFLGFBeEZJLENBNkVOaUUsZUE3RU07QUFBQSxVQThFTkMsZUE5RU0sR0F3RkpsRSxhQXhGSSxDQThFTmtFLGVBOUVNO0FBQUEsVUFnRk5DLFlBaEZNLEdBd0ZKbkUsYUF4RkksQ0FnRk5tRSxZQWhGTTtBQUFBLFVBaUZOQyxpQkFqRk0sR0F3RkpwRSxhQXhGSSxDQWlGTm9FLGlCQWpGTTtBQUFBLFVBa0ZOQyxZQWxGTSxHQXdGSnJFLGFBeEZJLENBa0ZOcUUsWUFsRk07QUFBQSxVQW1GTkMsZUFuRk0sR0F3Rkp0RSxhQXhGSSxDQW1GTnNFLGVBbkZNO0FBQUEsVUFxRk5DLFVBckZNLEdBd0ZKdkUsYUF4RkksQ0FxRk51RSxVQXJGTTtBQUFBLFVBc0ZON0UsaUJBdEZNLEdBd0ZKTSxhQXhGSSxDQXNGTk4saUJBdEZNO0FBQUEsVUF1Rk5HLGVBdkZNLEdBd0ZKRyxhQXhGSSxDQXVGTkgsZUF2Rk07O0FBMEZSOztBQUNBLFVBQU0yRSxXQUFXeEYsV0FBV0QsSUFBNUI7QUFDQSxVQUFNMEYsU0FBU0QsV0FBV3hGLFFBQTFCO0FBQ0EsVUFBSTBGLFdBQVc3QyxTQUFTc0MsWUFBVCxHQUF3QkksV0FBV0ksS0FBWCxDQUFpQkgsUUFBakIsRUFBMkJDLE1BQTNCLENBQXZDO0FBQ0EsVUFBTUcsVUFBVSxLQUFLdEcsVUFBTCxFQUFoQjtBQUNBLFVBQU11RyxVQUFVLGdCQUFFQyxLQUFGLENBQVFDLEtBQUtDLEdBQUwsQ0FBU0osVUFBVUYsU0FBU08sTUFBNUIsRUFBb0MsQ0FBcEMsQ0FBUixDQUFoQjs7QUFFQSxVQUFNQyxrQkFBa0JkLGtCQUFrQmUsSUFBbEIsQ0FBdUI7QUFBQSxlQUFLQyxFQUFFQyxNQUFQO0FBQUEsT0FBdkIsQ0FBeEI7QUFDQSxVQUFNQyxhQUFhcEQsY0FBY2tDLGtCQUFrQmUsSUFBbEIsQ0FBdUI7QUFBQSxlQUFLQyxFQUFFbEQsVUFBUDtBQUFBLE9BQXZCLENBQWpDOztBQUVBLFVBQU1xRCx1QkFBdUIsU0FBdkJBLG9CQUF1QixDQUFDQyxJQUFELEVBQWlDO0FBQUEsWUFBMUJDLElBQTBCLHVFQUFuQixFQUFtQjtBQUFBLFlBQWZDLEtBQWUsdUVBQVAsQ0FBQyxDQUFNOztBQUM1RCxlQUFPLENBQ0xGLEtBQUtHLEdBQUwsQ0FBUyxVQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBWTtBQUNuQkg7QUFDQSxjQUFNSSxnQ0FDREYsR0FEQztBQUVKRyx3QkFBWUw7QUFGUixZQUFOO0FBSUEsY0FBTU0sVUFBVVAsS0FBS1EsTUFBTCxDQUFZLENBQUNKLENBQUQsQ0FBWixDQUFoQjtBQUNBLGNBQUlDLGlCQUFpQnZELFVBQWpCLEtBQWdDLGdCQUFFMkQsR0FBRixDQUFNOUcsUUFBTixFQUFnQjRHLE9BQWhCLENBQXBDLEVBQThEO0FBQzVEO0FBRDRELHdDQUNuQlQscUJBQ3ZDTyxpQkFBaUJ2RCxVQUFqQixDQUR1QyxFQUV2Q3lELE9BRnVDLEVBR3ZDTixLQUh1QyxDQURtQjs7QUFBQTs7QUFDMURJLDZCQUFpQnZELFVBQWpCLENBRDBEO0FBQzVCbUQsaUJBRDRCO0FBTTdEO0FBQ0QsaUJBQU9JLGdCQUFQO0FBQ0QsU0FmRCxDQURLLEVBaUJMSixLQWpCSyxDQUFQO0FBbUJELE9BcEJEO0FBcEdRLG1DQXlITUgscUJBQXFCYixRQUFyQixDQXpITjs7QUFBQTs7QUF5SE5BLGNBekhNOzs7QUEySFIsVUFBTXlCLGNBQWNwSCxPQUFPLENBQTNCO0FBQ0EsVUFBTXFILFVBQVVySCxPQUFPLENBQVAsR0FBVytELEtBQTNCOztBQUVBLFVBQUl1RCxXQUFXLENBQUMsQ0FBaEI7O0FBRUEsVUFBTUMsMEJBQ0R0RyxhQURDO0FBRUp3RSwwQkFGSTtBQUdKQyxzQkFISTtBQUlKQywwQkFKSTtBQUtKRSx3QkFMSTtBQU1KQyx3QkFOSTtBQU9KSyx3Q0FQSTtBQVFKaUIsZ0NBUkk7QUFTSkM7QUFUSSxRQUFOOztBQVlBLFVBQU1HLG9CQUFvQixFQUExQjtBQUNBLFVBQUlDLGtCQUFrQixDQUF0QjtBQUNBLFVBQUlDLG9CQUFvQixDQUF4Qjs7QUFFQTs7QUFFQSxVQUFNQyxlQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixlQUNFO0FBQUE7QUFBQTtBQUNHdEMsNEJBQWtCdUIsR0FBbEIsQ0FBc0JnQixPQUF0QjtBQURILFNBREY7QUFLRCxPQU5EOztBQVFBLFVBQU1BLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxNQUFELEVBQVNmLENBQVQsRUFBZTtBQUM3QixZQUFNZ0IsVUFBVWhCLE1BQU16QixrQkFBa0JhLE1BQWxCLEdBQTJCLENBQWpEO0FBQ0EsWUFBTTZCLFVBQVVqQixJQUFJakQsaUJBQXBCO0FBQ0EsWUFBTW1FLGVBQWVsQixJQUFJakQsb0JBQW9CLENBQTdDO0FBQ0EsWUFBTW9FLGNBQWNuQixNQUFNakQsb0JBQW9CLENBQTlDOztBQUVBLFlBQU1xRSxhQUFhekgsUUFBUTBILElBQVIsQ0FBYTtBQUFBLGlCQUFLQyxFQUFFQyxFQUFGLEtBQVNSLE9BQU9RLEVBQXJCO0FBQUEsU0FBYixLQUF5QyxFQUE1RDs7QUFFQSxZQUFNQyxtQkFBbUIsZ0JBQUVDLFVBQUYsQ0FDdkJoSCxvQkFBb0JnRyxVQUFwQixFQUFnQ2lCLFNBQWhDLEVBQTJDWCxNQUEzQyxTQUR1QixDQUF6QjtBQUdBLFlBQU1ZLHlCQUF5QixnQkFBRUYsVUFBRixDQUM3QlYsT0FBT3RHLG1CQUFQLENBQTJCZ0csVUFBM0IsRUFBdUNpQixTQUF2QyxFQUFrRFgsTUFBbEQsU0FENkIsQ0FBL0I7O0FBSUEsWUFBTWEsVUFBVSxDQUNkYixPQUFPYyxvQkFETyxFQUVkTCxpQkFBaUJuSCxTQUZILEVBR2RzSCx1QkFBdUJ0SCxTQUhULENBQWhCOztBQU1BLFlBQU15SCxzQkFDRGYsT0FBT2dCLGdCQUROLEVBRURQLGlCQUFpQmxILEtBRmhCLEVBR0RxSCx1QkFBdUJySCxLQUh0QixDQUFOOztBQU1BLFlBQUkwSCxXQUFXakIsT0FBT2lCLFFBQXRCO0FBQ0EsWUFBSUMsV0FBV2xCLE9BQU9rQixRQUF0QjtBQUNBLFlBQUlDLFFBQVEsZ0JBQUVDLGVBQUYsQ0FDVmYsV0FBV2dCLEtBREQsRUFFVnJCLE9BQU9tQixLQUZHLEVBR1ZGLFFBSFUsRUFJVixDQUpVLENBQVo7O0FBT0E7QUFDQSxZQUFJaEksZUFBSixFQUFxQjtBQUNuQixjQUFNcUksa0JBQWtCLGdCQUFFQyxVQUFGLENBQWFKLEtBQWIsQ0FBeEI7QUFDQSxjQUFNSyxxQkFBcUIsZ0JBQUVELFVBQUYsQ0FBYU4sUUFBYixDQUEzQjtBQUNBLGNBQU1RLHFCQUFxQixnQkFBRUYsVUFBRixDQUFhTCxRQUFiLENBQTNCOztBQUVBLGNBQU1RLGFBQWFDLFNBQVNSLEtBQVQsRUFBZ0IsRUFBaEIsQ0FBbkI7QUFDQSxjQUFNUyxnQkFBZ0JYLFlBQVlVLFNBQVNWLFFBQVQsRUFBbUIsRUFBbkIsQ0FBbEM7QUFDQSxjQUFNWSxnQkFBZ0JYLFlBQVlTLFNBQVNULFFBQVQsRUFBbUIsRUFBbkIsQ0FBbEM7O0FBRUFDLGtCQUFRRyxrQkFDSixnQkFBRVEsWUFBRixDQUFlSixVQUFmLEVBQTJCekksZUFBM0IsQ0FESSxHQUVKeUksVUFGSjs7QUFJQVQscUJBQVdPLHFCQUNQLGdCQUFFTSxZQUFGLENBQWVGLGFBQWYsRUFBOEIzSSxlQUE5QixDQURPLEdBRVAySSxhQUZKOztBQUlBVixxQkFBV08scUJBQ1AsZ0JBQUVLLFlBQUYsQ0FBZUQsYUFBZixFQUE4QjVJLGVBQTlCLENBRE8sR0FFUDRJLGFBRko7O0FBSUFWLGtCQUFRLGdCQUFFWSxLQUFGLENBQVFaLEtBQVIsRUFBZUYsUUFBZixFQUF5QkMsUUFBekIsQ0FBUjs7QUFFQXRCLDZCQUFtQnVCLEtBQW5CO0FBQ0FBLGtCQUFRaEQsS0FBSzZELEtBQUwsQ0FBV2IsS0FBWCxDQUFSO0FBQ0F0QiwrQkFBcUJzQixLQUFyQjs7QUFFQSxjQUFNYyxPQUFPOUQsS0FBSzZELEtBQUwsQ0FBV3BDLGtCQUFrQkMsaUJBQTdCLENBQWI7O0FBRUEsY0FBSW9DLFFBQVEsQ0FBWixFQUFlO0FBQ2JkLHFCQUFTYyxJQUFUO0FBQ0FwQyxpQ0FBcUJvQyxJQUFyQjtBQUNEOztBQUVELGNBQUkvQixPQUFKLEVBQWE7QUFDWCxnQkFBTWdDLE9BQU92QyxrQkFBa0J3QyxNQUFsQixDQUF5QixVQUFDZCxLQUFELEVBQVFlLElBQVI7QUFBQSxxQkFBaUJmLFFBQVFlLEtBQUtqQixLQUE5QjtBQUFBLGFBQXpCLEVBQThELENBQTlELENBQWI7QUFDQXhCLDhCQUFrQjBDLElBQWxCLENBQXVCLEVBQUVsQixZQUFGLEVBQVNlLFVBQVQsRUFBdkI7O0FBRUEsZ0JBQUk5QixXQUFKLEVBQWlCO0FBQ2ZlLHVCQUFTZSxJQUFUO0FBQ0Q7QUFDRjs7QUFFRGYsa0JBQVdBLEtBQVg7QUFDRDs7QUFFRCxZQUFJaEIsWUFBSixFQUFrQjtBQUNoQixpQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsZUFDRTtBQUNFLGVBQUtsQixJQUFJLEdBQUosR0FBVWUsT0FBT1EsRUFEeEI7QUFFRSxxQkFBVywwQkFBVyxpQkFBWCxFQUE4QkssT0FBOUIsRUFBdUMsRUFBRSxVQUFVWixPQUFaLEVBQXZDLENBRmI7QUFHRSw4QkFDS2MsTUFETDtBQUVFSSxtQkFBT0E7QUFGVDtBQUhGLFVBREY7QUFVRCxPQWpHRDs7QUFtR0EsVUFBTW1CLG1CQUFtQixTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsWUFBTUMsa0JBQWtCLGdCQUFFN0IsVUFBRixDQUN0Qi9HLG1CQUFtQitGLFVBQW5CLEVBQStCaUIsU0FBL0IsRUFBMENBLFNBQTFDLFNBRHNCLENBQXhCO0FBR0EsWUFBTTZCLG9CQUFvQixnQkFBRTlCLFVBQUYsQ0FDeEI5RyxxQkFBcUI4RixVQUFyQixFQUFpQ2lCLFNBQWpDLEVBQTRDQSxTQUE1QyxTQUR3QixDQUExQjtBQUdBLGVBQ0U7QUFBQyx3QkFBRDtBQUFBO0FBQ0UsdUJBQVcsMEJBQVcsZUFBWCxFQUE0QjRCLGdCQUFnQmpKLFNBQTVDLENBRGI7QUFFRSxtQkFBT2lKLGdCQUFnQmhKO0FBRnpCLGFBR01nSixnQkFBZ0JFLElBSHRCO0FBS0U7QUFBQyx1QkFBRDtBQUFBO0FBQ0UseUJBQVdELGtCQUFrQmxKLFNBRC9CO0FBRUUscUJBQU9rSixrQkFBa0JqSjtBQUYzQixlQUdNaUosa0JBQWtCQyxJQUh4QjtBQUtHaEYseUJBQWFzQixHQUFiLENBQWlCMkQsZUFBakI7QUFMSDtBQUxGLFNBREY7QUFlRCxPQXRCRDs7QUF3QkEsVUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDMUMsTUFBRCxFQUFTZixDQUFULEVBQWU7QUFDckMsWUFBTTBELG9CQUFvQixnQkFBRWpDLFVBQUYsQ0FDeEI3RyxxQkFBcUI2RixVQUFyQixFQUFpQ2lCLFNBQWpDLEVBQTRDWCxNQUE1QyxTQUR3QixDQUExQjtBQUdBLFlBQU00QyxvQkFBb0IsZ0JBQUVsQyxVQUFGLENBQ3hCVixPQUFPNkMsY0FBUCxDQUFzQm5ELFVBQXRCLEVBQWtDaUIsU0FBbEMsRUFBNkNYLE1BQTdDLFNBRHdCLENBQTFCOztBQUlBLFlBQU1hLFVBQVUsQ0FDZGIsT0FBTzhDLGVBRE8sRUFFZEgsa0JBQWtCckosU0FGSixFQUdkc0osa0JBQWtCdEosU0FISixDQUFoQjs7QUFNQSxZQUFNeUgsc0JBQ0RmLE9BQU8rQyxXQUROLEVBRURKLGtCQUFrQnBKLEtBRmpCLEVBR0RxSixrQkFBa0JySixLQUhqQixDQUFOOztBQU1BLFlBQU15SixVQUFVaEQsT0FBT2lELE9BQVAsQ0FBZTVFLE1BQS9COztBQUVBLFlBQU1vRSxvQkFDREUsa0JBQWtCRixJQURqQixFQUVERyxrQkFBa0JILElBRmpCO0FBR0pPO0FBSEksVUFBTjs7QUFNQSxZQUFNL0MsVUFBVWhCLE1BQU14QixhQUFhWSxNQUFiLEdBQXNCLENBQTVDO0FBQ0EsWUFBTTZCLFVBQVVqQixJQUFJakQsaUJBQUosSUFBeUIvQyxlQUF6Qzs7QUFFQSxZQUFJaUgsT0FBSixFQUFhO0FBQ1hhLGlCQUFPSSxLQUFQLEdBQWV4QixrQkFBa0JWLENBQWxCLEVBQXFCa0MsS0FBcEM7QUFDQUosaUJBQU9tQixJQUFQLEdBQWN2QyxrQkFBa0JWLENBQWxCLEVBQXFCaUQsSUFBbkM7QUFDRDs7QUFFRCxZQUFNZ0IsVUFBVSxnQkFBRUMsa0JBQUYsQ0FBcUJuRCxPQUFPb0QsTUFBNUIsRUFBb0M7QUFDbERDLGdCQUFNMUYsVUFENEM7QUFFbERxQyxrQkFBUUE7QUFGMEMsU0FBcEMsQ0FBaEI7O0FBS0EsZUFDRTtBQUFDLHFCQUFEO0FBQUE7QUFDRSxpQkFBS2YsSUFBSSxHQUFKLEdBQVVlLE9BQU9RLEVBRHhCO0FBRUUsdUJBQVcsMEJBQVdLLE9BQVgsRUFBb0IsRUFBRSxVQUFVWixPQUFaLEVBQXFCLFVBQVUsQ0FBQ2lELE9BQWhDLEVBQXlDLFVBQVVoRCxPQUFuRCxFQUFwQixDQUZiO0FBR0UsbUJBQU9hO0FBSFQsYUFJTTBCLElBSk47QUFNR1M7QUFOSCxTQURGO0FBVUQsT0FuREQ7O0FBcURBLFVBQU1JLGNBQWMsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFlBQU1DLGFBQWEsZ0JBQUU3QyxVQUFGLENBQ2pCNUcsY0FBYzRGLFVBQWQsRUFBMEJpQixTQUExQixFQUFxQ0EsU0FBckMsU0FEaUIsQ0FBbkI7QUFHQSxZQUFNNkMsZUFBZSxnQkFBRTlDLFVBQUYsQ0FDbkIzRyxnQkFBZ0IyRixVQUFoQixFQUE0QmlCLFNBQTVCLEVBQXVDQSxTQUF2QyxTQURtQixDQUFyQjtBQUdBLGVBQ0U7QUFBQyx3QkFBRDtBQUFBO0FBQ0UsdUJBQVcsMEJBQVcsU0FBWCxFQUFzQjRDLFdBQVdqSyxTQUFqQyxDQURiO0FBRUUsbUJBQU9pSyxXQUFXaEs7QUFGcEIsYUFHTWdLLFdBQVdkLElBSGpCO0FBS0U7QUFBQyx1QkFBRDtBQUFBO0FBQ0UseUJBQVdlLGFBQWFsSyxTQUQxQjtBQUVFLHFCQUFPa0ssYUFBYWpLO0FBRnRCLGVBR01pSyxhQUFhZixJQUhuQjtBQUtHakYsOEJBQWtCdUIsR0FBbEIsQ0FBc0IwRSxVQUF0QjtBQUxIO0FBTEYsU0FERjtBQWVELE9BdEJEOztBQXdCQSxVQUFNQSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ3pELE1BQUQsRUFBU2YsQ0FBVCxFQUFlO0FBQ2hDLFlBQU15RSxPQUFPcEwsT0FBT2dJLElBQVAsQ0FBWTtBQUFBLGlCQUFLOUIsRUFBRWdDLEVBQUYsS0FBU1IsT0FBT1EsRUFBckI7QUFBQSxTQUFaLENBQWI7QUFDQSxZQUFNbUQsT0FDSixPQUFPM0QsT0FBTzJELElBQWQsS0FBdUIsVUFBdkIsR0FBb0MzRCxPQUFPMkQsSUFBUCxFQUFwQyxHQUFvRDNELE9BQU8yRCxJQUQ3RDtBQUVBLFlBQU1DLGVBQWUsZ0JBQUVsRCxVQUFGLENBQ25CMUcsZ0JBQWdCMEYsVUFBaEIsRUFBNEJpQixTQUE1QixFQUF1Q1gsTUFBdkMsU0FEbUIsQ0FBckI7QUFHQSxZQUFNNEMsb0JBQW9CLGdCQUFFbEMsVUFBRixDQUN4QlYsT0FBTzZDLGNBQVAsQ0FBc0JuRCxVQUF0QixFQUFrQ2lCLFNBQWxDLEVBQTZDWCxNQUE3QyxTQUR3QixDQUExQjs7QUFJQSxZQUFNYSxVQUFVLENBQ2RiLE9BQU84QyxlQURPLEVBRWRjLGFBQWF0SyxTQUZDLEVBR2RzSixrQkFBa0J0SixTQUhKLENBQWhCOztBQU1BLFlBQU15SCxzQkFDRGYsT0FBTytDLFdBRE4sRUFFRGEsYUFBYXJLLEtBRlosRUFHRHFKLGtCQUFrQnJKLEtBSGpCLENBQU47O0FBTUEsWUFBTWtKLG9CQUNEbUIsYUFBYW5CLElBRFosRUFFREcsa0JBQWtCSCxJQUZqQixDQUFOOztBQUtBLFlBQU1vQixjQUFjLGdCQUFFekMsZUFBRixDQUFrQnBCLE9BQU8zRSxTQUF6QixFQUFvQ0EsU0FBcEMsRUFBK0MsS0FBL0MsQ0FBcEI7QUFDQSxZQUFNeUksVUFBVUQsY0FDWCw4QkFBQyxnQkFBRDtBQUNELHVCQUFhO0FBQUEsbUJBQUssT0FBSzlMLGlCQUFMLENBQXVCaUksTUFBdkIsRUFBK0IrRCxDQUEvQixFQUFrQyxLQUFsQyxDQUFMO0FBQUEsV0FEWjtBQUVELHdCQUFjO0FBQUEsbUJBQUssT0FBS2hNLGlCQUFMLENBQXVCaUksTUFBdkIsRUFBK0IrRCxDQUEvQixFQUFrQyxJQUFsQyxDQUFMO0FBQUE7QUFGYixXQUdHQyxZQUhILEVBRFcsR0FNWixJQU5KOztBQVFBLFlBQU1DLGFBQWEsZ0JBQUU3QyxlQUFGLENBQWtCcEIsT0FBTzVFLFFBQXpCLEVBQW1DQSxRQUFuQyxFQUE2QyxLQUE3QyxDQUFuQjtBQUNBLFlBQU02RSxVQUFVaEIsTUFBTXpCLGtCQUFrQmEsTUFBbEIsR0FBMkIsQ0FBakQ7QUFDQSxZQUFNNkIsVUFBVWpCLElBQUlqRCxpQkFBSixJQUF5Qi9DLGVBQXpDOztBQUVBLFlBQUlpSCxPQUFKLEVBQWE7QUFDWGEsaUJBQU9JLEtBQVAsR0FBZXhCLGtCQUFrQlYsQ0FBbEIsRUFBcUJrQyxLQUFwQztBQUNBSixpQkFBT21CLElBQVAsR0FBY3ZDLGtCQUFrQlYsQ0FBbEIsRUFBcUJpRCxJQUFuQztBQUNEOztBQUVELGVBQ0U7QUFBQyxxQkFBRDtBQUFBO0FBQ0UsaUJBQUtqRCxJQUFJLEdBQUosR0FBVWUsT0FBT1EsRUFEeEI7QUFFRSx1QkFBVywwQkFDVEssT0FEUyxFQUVULHFCQUZTLEVBR1Q7QUFDRSxpQ0FBbUJvRCxVQURyQjtBQUVFLDRCQUFjUCxRQUFRQSxLQUFLUSxJQUY3QjtBQUdFLDJCQUFhUixRQUFRLENBQUNBLEtBQUtRLElBSDdCO0FBSUUseUJBQVcsQ0FBQ1AsSUFKZDtBQUtFLHdCQUFVMUQsT0FMWjtBQU1FLHdCQUFVQyxPQU5aO0FBT0UsaUNBQW1CeEUsV0FBV0EsUUFBUXFDLEtBQVIsQ0FBYyxDQUFkLEVBQWlCLENBQUMsQ0FBbEIsRUFBcUJvRyxRQUFyQixDQUE4Qm5FLE9BQU9RLEVBQXJDO0FBUGhDLGFBSFMsQ0FGYjtBQWVFLG1CQUFPTyxNQWZUO0FBZ0JFLHdCQUFZLHVCQUFLO0FBQ2ZrRCw0QkFBYyxPQUFLcE0sVUFBTCxDQUFnQm1JLE1BQWhCLEVBQXdCK0QsRUFBRUssUUFBMUIsQ0FBZDtBQUNEO0FBbEJILGFBbUJNM0IsSUFuQk47QUFxQkU7QUFBQTtBQUFBLGNBQUssV0FBVSw2QkFBZjtBQUNHLDRCQUFFVSxrQkFBRixDQUFxQm5ELE9BQU9vRCxNQUE1QixFQUFvQztBQUNuQ0Msb0JBQU0xRixVQUQ2QjtBQUVuQ3FDLHNCQUFRQTtBQUYyQixhQUFwQztBQURILFdBckJGO0FBMkJHOEQ7QUEzQkgsU0FERjtBQStCRCxPQTdFRDs7QUErRUEsVUFBTU8sY0FBYyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsWUFBTUMsbUJBQW1CLGdCQUFFNUQsVUFBRixDQUN2QnpHLG9CQUFvQnlGLFVBQXBCLEVBQWdDaUIsU0FBaEMsRUFBMkNBLFNBQTNDLFNBRHVCLENBQXpCO0FBR0EsWUFBTTRELHFCQUFxQixnQkFBRTdELFVBQUYsQ0FDekJ4RyxzQkFBc0J3RixVQUF0QixFQUFrQ2lCLFNBQWxDLEVBQTZDQSxTQUE3QyxTQUR5QixDQUEzQjtBQUdBLGVBQ0U7QUFBQyx3QkFBRDtBQUFBO0FBQ0UsdUJBQVcsMEJBQVcsVUFBWCxFQUF1QjJELGlCQUFpQmhMLFNBQXhDLENBRGI7QUFFRSxtQkFBT2dMLGlCQUFpQi9LO0FBRjFCLGFBR00rSyxpQkFBaUI3QixJQUh2QjtBQUtFO0FBQUMsdUJBQUQ7QUFBQTtBQUNFLHlCQUFXOEIsbUJBQW1CakwsU0FEaEM7QUFFRSxxQkFBT2lMLG1CQUFtQmhMO0FBRjVCLGVBR01nTCxtQkFBbUI5QixJQUh6QjtBQUtHakYsOEJBQWtCdUIsR0FBbEIsQ0FBc0J5RixVQUF0QjtBQUxIO0FBTEYsU0FERjtBQWVELE9BdEJEOztBQXdCQSxVQUFNQSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ3hFLE1BQUQsRUFBU2YsQ0FBVCxFQUFlO0FBQ2hDLFlBQU13RixxQkFBcUIsZ0JBQUUvRCxVQUFGLENBQ3pCdkcsc0JBQXNCdUYsVUFBdEIsRUFBa0NpQixTQUFsQyxFQUE2Q1gsTUFBN0MsU0FEeUIsQ0FBM0I7QUFHQSxZQUFNNEMsb0JBQW9CLGdCQUFFbEMsVUFBRixDQUN4QlYsT0FBTzZDLGNBQVAsQ0FBc0JuRCxVQUF0QixFQUFrQ2lCLFNBQWxDLEVBQTZDWCxNQUE3QyxTQUR3QixDQUExQjs7QUFJQSxZQUFNYSxVQUFVLENBQ2RiLE9BQU84QyxlQURPLEVBRWQyQixtQkFBbUJuTCxTQUZMLEVBR2RzSixrQkFBa0J0SixTQUhKLENBQWhCOztBQU1BLFlBQU15SCxzQkFDRGYsT0FBTytDLFdBRE4sRUFFRDBCLG1CQUFtQmxMLEtBRmxCLEVBR0RxSixrQkFBa0JySixLQUhqQixDQUFOOztBQU1BLFlBQU1rSixvQkFDRGdDLG1CQUFtQmhDLElBRGxCLEVBRURHLGtCQUFrQkgsSUFGakIsQ0FBTjs7QUFLQSxZQUFNaUMsU0FBU2hNLFNBQVM0SCxJQUFULENBQWM7QUFBQSxpQkFBVW9FLE9BQU9sRSxFQUFQLEtBQWNSLE9BQU9RLEVBQS9CO0FBQUEsU0FBZCxDQUFmOztBQUVBLFlBQU1tRSwwQkFBMEIzRSxPQUFPNEUsTUFBUCxJQUFpQnZILGVBQWpEOztBQUVBLFlBQU13SCxlQUFlLGdCQUFFekQsZUFBRixDQUNuQnBCLE9BQU8xRSxVQURZLEVBRW5CQSxVQUZtQixFQUduQixLQUhtQixDQUFyQjs7QUFNQSxZQUFNNEUsVUFBVWpCLElBQUlqRCxpQkFBSixJQUF5Qi9DLGVBQXpDOztBQUVBLFlBQUlpSCxPQUFKLEVBQWE7QUFDWGEsaUJBQU9JLEtBQVAsR0FBZXhCLGtCQUFrQlYsQ0FBbEIsRUFBcUJrQyxLQUFwQztBQUNBSixpQkFBT21CLElBQVAsR0FBY3ZDLGtCQUFrQlYsQ0FBbEIsRUFBcUJpRCxJQUFuQztBQUNEOztBQUVELGVBQ0U7QUFBQyxxQkFBRDtBQUFBO0FBQ0UsaUJBQUtqRCxJQUFJLEdBQUosR0FBVWUsT0FBT1EsRUFEeEI7QUFFRSx1QkFBVywwQkFBV0ssT0FBWCxFQUFvQixFQUFFLFVBQVVYLE9BQVosRUFBcUIsVUFBVSxDQUFDMkUsWUFBaEMsRUFBcEIsQ0FGYjtBQUdFLG1CQUFPOUQ7QUFIVCxhQUlNMEIsSUFKTjtBQU1Hb0MseUJBQ0csZ0JBQUUxQixrQkFBRixDQUNBd0IsdUJBREEsRUFFQTtBQUNFM0UsMEJBREY7QUFFRTBFLDBCQUZGO0FBR0VJLHNCQUFVO0FBQUEscUJBQVMsT0FBS2hOLFlBQUwsQ0FBa0JrSSxNQUFsQixFQUEwQnFCLEtBQTFCLENBQVQ7QUFBQTtBQUhaLFdBRkEsRUFPQSx1QkFBYXJCLE1BQWIsQ0FBb0I0RSxNQVBwQixDQURILEdBVUc7QUFoQk4sU0FERjtBQW9CRCxPQTlERDs7QUFnRUEsVUFBTUcsY0FBYyxTQUFkQSxXQUFjLENBQUMvRixHQUFELEVBQU1DLENBQU4sRUFBdUI7QUFBQSxZQUFkSixJQUFjLHVFQUFQLEVBQU87O0FBQ3pDLFlBQU1tRyxVQUFVO0FBQ2RDLG9CQUFVakcsSUFBSW5ELFdBQUosQ0FESTtBQUVkbUQsZUFBS0EsR0FGUztBQUdkRixpQkFBT0UsSUFBSWxELFFBQUosQ0FITztBQUlkb0oscUJBQVcsRUFBRXpGLFFBSkM7QUFLZDBGLGlCQUFPdEcsS0FBS1IsTUFMRTtBQU1kK0csdUJBQWF2RyxLQUFLUSxNQUFMLENBQVksQ0FBQ0osQ0FBRCxDQUFaLENBTkM7QUFPZG9HLHNCQUFZckcsSUFBSXBELGFBQUosQ0FQRTtBQVFkMEosMEJBQWdCdEcsSUFBSWpELGlCQUFKLENBUkY7QUFTZHdKLG1CQUFTdkcsSUFBSXJELFVBQUo7QUFUSyxTQUFoQjtBQVdBLFlBQU02SixhQUFhLGdCQUFFbEcsR0FBRixDQUFNOUcsUUFBTixFQUFnQndNLFFBQVFJLFdBQXhCLENBQW5CO0FBQ0EsWUFBTUssVUFBVSxnQkFBRS9FLFVBQUYsQ0FDZHJHLFdBQVdxRixVQUFYLEVBQXVCc0YsT0FBdkIsRUFBZ0NyRSxTQUFoQyxTQURjLENBQWhCO0FBR0EsZUFBTyxDQUNMO0FBQUMscUJBQUQ7QUFBQTtBQUNFLGlCQUFLcUUsUUFBUUksV0FBUixDQUFvQk0sSUFBcEIsQ0FBeUIsR0FBekIsQ0FEUDtBQUVFLHVCQUFXLDBCQUNURCxRQUFRbk0sU0FEQyxFQUVUMEYsSUFBSUcsVUFBSixHQUFpQixDQUFqQixHQUFxQixPQUFyQixHQUErQixNQUZ0QixDQUZiO0FBTUUsbUJBQU9zRyxRQUFRbE07QUFOakIsYUFPTWtNLFFBQVFoRCxJQVBkO0FBU0dqRiw0QkFBa0J1QixHQUFsQixDQUFzQixVQUFDaUIsTUFBRCxFQUFTMkYsRUFBVCxFQUFnQjtBQUNyQyxnQkFBTWhDLE9BQ0osT0FBTzNELE9BQU8yRCxJQUFkLEtBQXVCLFVBQXZCLEdBQW9DM0QsT0FBTzJELElBQVAsRUFBcEMsR0FBb0QzRCxPQUFPMkQsSUFEN0Q7QUFFQSxnQkFBTWlDLFVBQVUsZ0JBQUVsRixVQUFGLENBQ2RwRyxXQUFXb0YsVUFBWCxFQUF1QnNGLE9BQXZCLEVBQWdDaEYsTUFBaEMsU0FEYyxDQUFoQjtBQUdBLGdCQUFNNkYsY0FBYyxnQkFBRW5GLFVBQUYsQ0FDbEJWLE9BQU94RyxRQUFQLENBQWdCa0csVUFBaEIsRUFBNEJzRixPQUE1QixFQUFxQ2hGLE1BQXJDLFNBRGtCLENBQXBCOztBQUlBLGdCQUFNYSxVQUFVLENBQ2QrRSxRQUFRdE0sU0FETSxFQUVkMEcsT0FBTzFHLFNBRk8sRUFHZHVNLFlBQVl2TSxTQUhFLENBQWhCOztBQU1BLGdCQUFNeUgsc0JBQ0Q2RSxRQUFRck0sS0FEUCxFQUVEeUcsT0FBT3pHLEtBRk4sRUFHRHNNLFlBQVl0TSxLQUhYLENBQU47O0FBTUEsZ0JBQU0yRyxVQUFVeUYsS0FBSzNKLGlCQUFMLElBQTBCL0MsZUFBMUM7O0FBRUEsZ0JBQUlpSCxPQUFKLEVBQWE7QUFDWGEscUJBQU9JLEtBQVAsR0FBZXhCLGtCQUFrQmdHLEVBQWxCLEVBQXNCeEUsS0FBckM7QUFDQUoscUJBQU9tQixJQUFQLEdBQWN2QyxrQkFBa0JnRyxFQUFsQixFQUFzQnpELElBQXBDO0FBQ0Q7O0FBRUQsZ0JBQU00RCx3QkFDRGQsT0FEQztBQUVKUSxvQ0FGSTtBQUdKeEYsbUNBQWFBLE1BQWIsQ0FISTtBQUlKcUIscUJBQU8yRCxRQUFRaEcsR0FBUixDQUFZZ0IsT0FBT1EsRUFBbkIsQ0FKSDtBQUtKdUYsdUJBQVMvRixPQUFPK0YsT0FMWjtBQU1KQyx3QkFBVWhHLE9BQU9nRyxRQU5iO0FBT0pwTiw4QkFQSTtBQVFKK0ssd0JBUkk7QUFTSmlDLDhCQVRJO0FBVUpDLHNDQVZJO0FBV0poRiw4QkFYSTtBQVlKRTtBQVpJLGNBQU47O0FBZUEsZ0JBQU1NLFFBQVF5RSxTQUFTekUsS0FBdkI7O0FBRUEsZ0JBQUk0RSx5QkFBSjtBQUNBLGdCQUFJQyxpQkFBSjtBQUNBLGdCQUFJQyxrQkFBSjs7QUFFQSxnQkFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixJQUFLO0FBQzNCLGtCQUFJQyxjQUFjLGdCQUFFQyxLQUFGLENBQVE5TixRQUFSLENBQWxCO0FBQ0Esa0JBQUlnTixVQUFKLEVBQWdCO0FBQ2RhLDhCQUFjLGdCQUFFRSxHQUFGLENBQU1GLFdBQU4sRUFBbUJQLFNBQVNWLFdBQTVCLEVBQXlDLEtBQXpDLENBQWQ7QUFDRCxlQUZELE1BRU87QUFDTGlCLDhCQUFjLGdCQUFFRSxHQUFGLENBQU1GLFdBQU4sRUFBbUJQLFNBQVNWLFdBQTVCLEVBQXlDLEVBQXpDLENBQWQ7QUFDRDs7QUFFRCxxQkFBTyxPQUFLb0IsZ0JBQUwsQ0FDTDtBQUNFaE8sMEJBQVU2TjtBQURaLGVBREssRUFJTCxZQUFNO0FBQ0psSyxvQ0FDRUEsaUJBQWlCa0ssV0FBakIsRUFBOEJQLFNBQVNWLFdBQXZDLEVBQW9EckIsQ0FBcEQsQ0FERjtBQUVELGVBUEksQ0FBUDtBQVNELGFBakJEOztBQW1CQTtBQUNBLGdCQUFJMEMsZUFBZSxnQkFBRXRELGtCQUFGLENBQ2pCbkQsT0FBTzBHLElBRFUsRUFFakJaLFFBRmlCLEVBR2pCekUsS0FIaUIsQ0FBbkI7O0FBTUE7QUFDQSxnQkFBTXNGLDhCQUNKM0csT0FBTzRHLFVBQVAsS0FDQyxDQUFDNUcsT0FBTzZHLFNBQVIsR0FBb0J6SixtQkFBcEIsR0FBMEM0QyxPQUFPMEcsSUFEbEQsQ0FERjtBQUdBLGdCQUFNSSw0QkFDSjlHLE9BQU8rRyxRQUFQLElBQW1COUosaUJBRHJCO0FBRUEsZ0JBQU0rSiw4QkFDSmhILE9BQU9pSCxVQUFQLElBQXFCL0osbUJBRHZCO0FBRUEsZ0JBQU1nSyxnQ0FDSi9KLGtCQUNDO0FBQUEscUJBQ0M7QUFBQTtBQUFBO0FBQ0UsOENBQUMseUJBQUQsRUFBK0JuRyxLQUEvQixDQURGO0FBRUUsOENBQUMsMkJBQUQsRUFBaUNBLEtBQWpDO0FBRkYsZUFERDtBQUFBLGFBRkg7QUFPQSxnQkFBTW1RLHlCQUNKbkgsT0FBT29ILEtBQVAsSUFBZ0JGLDZCQURsQjs7QUFHQTtBQUNBLGdCQUFJcEIsU0FBU0MsT0FBVCxJQUFvQkQsU0FBU0UsUUFBakMsRUFBMkM7QUFDekM7QUFDQUYsdUJBQVN1QixVQUFULEdBQXNCLElBQXRCO0FBQ0FwQixpQ0FBbUI7QUFDakJxQix5QkFBU2xCO0FBRFEsZUFBbkI7QUFHQTtBQUNBLGtCQUFJTixTQUFTQyxPQUFiLEVBQXNCO0FBQ3BCLG9CQUFJLENBQUNELFNBQVNQLE9BQWQsRUFBdUI7QUFDckIsc0JBQUksQ0FBQ3pJLFlBQUwsRUFBbUI7QUFDakJnSiw2QkFBU3VCLFVBQVQsR0FBc0IsS0FBdEI7QUFDQXBCLHVDQUFtQixFQUFuQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVELGdCQUFJSCxTQUFTQyxPQUFiLEVBQXNCO0FBQ3BCO0FBQ0FHLHlCQUNFbEIsUUFBUWhHLEdBQVIsQ0FBWXhELFVBQVosTUFBNEJ3RSxPQUFPUSxFQUFuQyxJQUF5Q3NGLFNBQVNQLE9BRHBEO0FBRUE7QUFDQVksMEJBQ0V6SyxRQUFRNkwsT0FBUixDQUFnQnZILE9BQU9RLEVBQXZCLElBQ0U5RSxRQUFRNkwsT0FBUixDQUFnQnZDLFFBQVFoRyxHQUFSLENBQVl4RCxVQUFaLENBQWhCLENBREYsSUFDOENzSyxTQUFTUCxPQUZ6RDtBQUdBO0FBQ0Esa0JBQUlXLFFBQUosRUFBYztBQUNaO0FBQ0FPLCtCQUFlLGdCQUFFdEQsa0JBQUYsQ0FDYmdFLHNCQURhLGVBR1JyQixRQUhRO0FBSVh6RSx5QkFBT3JDLElBQUl2RCxXQUFKO0FBSkksb0JBTWJ1RCxJQUFJdkQsV0FBSixDQU5hLENBQWY7QUFRRCxlQVZELE1BVU8sSUFBSTBLLFNBQUosRUFBZTtBQUNwQjtBQUNBTSwrQkFBZSxnQkFBRXRELGtCQUFGLENBQ2J3RCwyQkFEYSxFQUViYixRQUZhLEVBR2J6RSxLQUhhLENBQWY7QUFLRCxlQVBNLE1BT0E7QUFDTG9GLCtCQUFlLElBQWY7QUFDRDtBQUNGLGFBN0JELE1BNkJPLElBQUlYLFNBQVNULFVBQWIsRUFBeUI7QUFDOUJvQiw2QkFBZSxnQkFBRXRELGtCQUFGLENBQ2J3RCwyQkFEYSxFQUViYixRQUZhLEVBR2J6RSxLQUhhLENBQWY7QUFLRDs7QUFFRCxnQkFBSXlFLFNBQVNFLFFBQWIsRUFBdUI7QUFDckJTLDZCQUFlLGdCQUFFdEQsa0JBQUYsQ0FDYjJELHlCQURhLEVBRWJoQixRQUZhLEVBR2I5RyxJQUFJdkQsV0FBSixDQUhhLENBQWY7QUFLQSxrQkFBSUMsT0FBSixFQUFhO0FBQ1gsb0JBQUlvSyxTQUFTUixjQUFiLEVBQTZCO0FBQzNCbUIsaUNBQWUsSUFBZjtBQUNEO0FBQ0Qsb0JBQUksQ0FBQ1gsU0FBU1AsT0FBVixJQUFxQixDQUFDekksWUFBMUIsRUFBd0M7QUFDdEMySixpQ0FBZSxJQUFmO0FBQ0Q7QUFDRjtBQUNGOztBQUVEO0FBQ0EsbUJBQ0U7QUFBQyx5QkFBRDtBQUFBO0FBQ0UscUJBQUtkLEtBQUssR0FBTCxHQUFXM0YsT0FBT1EsRUFEekI7QUFFRSwyQkFBVywwQkFDVEssT0FEUyxFQUVULENBQUM4QyxJQUFELElBQVMsU0FGQSxFQUdUbUMsU0FBU3VCLFVBQVQsSUFBdUIsZUFIZCxFQUlULENBQUNuQixZQUFZQyxTQUFiLEtBQTJCLFVBSmxCLEVBS1RqRyxXQUFXLFFBTEYsRUFNUkEsV0FBVyxDQUFDdUcsWUFBYixJQUE4QixRQU5yQixDQUZiO0FBVUUsdUJBQU8xRjtBQVZULGlCQVdNa0YsZ0JBWE4sRUFZTUwsUUFBUW5ELElBWmQsRUFhTW9ELFlBQVlwRCxJQWJsQjtBQWVHZ0U7QUFmSCxhQURGO0FBbUJELFdBekxBO0FBVEgsU0FESyxFQXFNTHpCLFFBQVFPLE9BQVIsSUFDRUMsVUFERixJQUVFUixRQUFRTyxPQUFSLENBQWdCeEcsR0FBaEIsQ0FBb0IsVUFBQ1AsQ0FBRCxFQUFJUyxDQUFKO0FBQUEsaUJBQ2xCOEYsWUFBWXZHLENBQVosRUFBZVMsQ0FBZixFQUFrQitGLFFBQVFJLFdBQTFCLENBRGtCO0FBQUEsU0FBcEIsQ0F2TUcsRUEwTUx0SSxnQkFDRSxDQUFDa0ksUUFBUU8sT0FEWCxJQUVFQyxVQUZGLElBR0UxSSxhQUFha0ksT0FBYixDQTdNRyxDQUFQO0FBK01ELE9BL05EOztBQWlPQSxVQUFNd0MsYUFBYSxTQUFiQSxVQUFhLENBQUN4SSxHQUFELEVBQU1DLENBQU4sRUFBWTtBQUM3QixZQUFNd0csVUFBVSxnQkFBRS9FLFVBQUYsQ0FDZHJHLFdBQVdxRixVQUFYLEVBQXVCaUIsU0FBdkIsRUFBa0NBLFNBQWxDLFNBRGMsQ0FBaEI7QUFHQSxlQUNFO0FBQUMscUJBQUQ7QUFBQTtBQUNFLHVCQUFXLDBCQUNULFNBRFMsRUFFVCxDQUFDN0MsU0FBU08sTUFBVCxHQUFrQlksQ0FBbkIsSUFBd0IsQ0FBeEIsR0FBNEIsT0FBNUIsR0FBc0MsTUFGN0IsRUFHVHdHLFFBQVFuTSxTQUhDLENBRGI7QUFNRSxtQkFBT21NLFFBQVFsTSxLQUFSLElBQWlCO0FBTjFCO0FBUUdpRSw0QkFBa0J1QixHQUFsQixDQUFzQjBJLGFBQXRCO0FBUkgsU0FERjtBQVlELE9BaEJEOztBQWtCQSxVQUFNQSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUN6SCxNQUFELEVBQVNmLENBQVQsRUFBZTtBQUNuQyxZQUFNMEUsT0FDSixPQUFPM0QsT0FBTzJELElBQWQsS0FBdUIsVUFBdkIsR0FBb0MzRCxPQUFPMkQsSUFBUCxFQUFwQyxHQUFvRDNELE9BQU8yRCxJQUQ3RDtBQUVBLFlBQU1pQyxVQUFVLGdCQUFFbEYsVUFBRixDQUNkcEcsV0FBV29GLFVBQVgsRUFBdUJpQixTQUF2QixFQUFrQ1gsTUFBbEMsU0FEYyxDQUFoQjtBQUdBLFlBQU02RixjQUFjLGdCQUFFbkYsVUFBRixDQUNsQlYsT0FBT3hHLFFBQVAsQ0FBZ0JrRyxVQUFoQixFQUE0QmlCLFNBQTVCLEVBQXVDWCxNQUF2QyxTQURrQixDQUFwQjs7QUFJQSxZQUFNYSxVQUFVLENBQ2QrRSxRQUFRdE0sU0FETSxFQUVkMEcsT0FBTzFHLFNBRk8sRUFHZHVNLFlBQVl2TSxTQUhFLENBQWhCOztBQU1BLFlBQU15SCxzQkFDRDZFLFFBQVFyTSxLQURQLEVBRUR5RyxPQUFPekcsS0FGTixFQUdEc00sWUFBWXRNLEtBSFgsQ0FBTjs7QUFNQSxZQUFNMkcsVUFBVWpCLElBQUlqRCxpQkFBSixJQUF5Qi9DLGVBQXpDOztBQUVBLFlBQUlpSCxPQUFKLEVBQWE7QUFDWGEsaUJBQU9JLEtBQVAsR0FBZXhCLGtCQUFrQlYsQ0FBbEIsRUFBcUJrQyxLQUFwQztBQUNBSixpQkFBT21CLElBQVAsR0FBY3ZDLGtCQUFrQlYsQ0FBbEIsRUFBcUJpRCxJQUFuQztBQUNEOztBQUVELGVBQ0U7QUFBQyxxQkFBRDtBQUFBO0FBQ0UsaUJBQUtqRCxJQUFJLEdBQUosR0FBVWUsT0FBT1EsRUFEeEI7QUFFRSx1QkFBVywwQkFBV0ssT0FBWCxFQUFvQixDQUFDOEMsSUFBRCxJQUFTLFNBQTdCLEVBQXdDLEVBQUUsVUFBVXpELE9BQVosRUFBeEMsQ0FGYjtBQUdFLG1CQUFPYTtBQUhULGFBSU02RSxRQUFRbkQsSUFKZDtBQU1HLDBCQUFFVSxrQkFBRixDQUFxQjdGLGVBQXJCO0FBTkgsU0FERjtBQVVELE9BdkNEOztBQXlDQSxVQUFNb0ssb0JBQW9CLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixZQUFNQyxhQUFhcE4sY0FBY21GLFVBQWQsRUFBMEJpQixTQUExQixFQUFxQ0EsU0FBckMsU0FBbkI7QUFDQSxZQUFNaUgsZUFBZSxnQkFBRWxILFVBQUYsQ0FDbkJsRyxnQkFBZ0JrRixVQUFoQixFQUE0QmlCLFNBQTVCLEVBQXVDQSxTQUF2QyxTQURtQixDQUFyQjtBQUdBLGVBQ0U7QUFBQyx3QkFBRDtBQUFBO0FBQ0UsdUJBQVdnSCxXQUFXck8sU0FEeEI7QUFFRSxtQkFBT3FPLFdBQVdwTztBQUZwQixhQUdNb08sV0FBV2xGLElBSGpCO0FBS0U7QUFBQyx1QkFBRDtBQUFBO0FBQ0UseUJBQVcsMEJBQVdtRixhQUFhdE8sU0FBeEIsQ0FEYjtBQUVFLHFCQUFPc08sYUFBYXJPO0FBRnRCLGVBR01xTyxhQUFhbkYsSUFIbkI7QUFLR2pGLDhCQUFrQnVCLEdBQWxCLENBQXNCOEksZ0JBQXRCO0FBTEg7QUFMRixTQURGO0FBZUQsT0FwQkQ7O0FBc0JBLFVBQU1BLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUM3SCxNQUFELEVBQVNmLENBQVQsRUFBZTtBQUN0QyxZQUFNMEUsT0FDSixPQUFPM0QsT0FBTzJELElBQWQsS0FBdUIsVUFBdkIsR0FBb0MzRCxPQUFPMkQsSUFBUCxFQUFwQyxHQUFvRDNELE9BQU8yRCxJQUQ3RDtBQUVBLFlBQU1tRSxlQUFlLGdCQUFFcEgsVUFBRixDQUNuQmpHLGdCQUFnQmlGLFVBQWhCLEVBQTRCaUIsU0FBNUIsRUFBdUNBLFNBQXZDLFNBRG1CLENBQXJCO0FBR0EsWUFBTWtGLGNBQWMsZ0JBQUVuRixVQUFGLENBQ2xCVixPQUFPeEcsUUFBUCxDQUFnQmtHLFVBQWhCLEVBQTRCaUIsU0FBNUIsRUFBdUNYLE1BQXZDLFNBRGtCLENBQXBCO0FBR0EsWUFBTStILG9CQUFvQixnQkFBRXJILFVBQUYsQ0FDeEJWLE9BQU9nSSxjQUFQLENBQXNCdEksVUFBdEIsRUFBa0NpQixTQUFsQyxFQUE2Q1gsTUFBN0MsU0FEd0IsQ0FBMUI7O0FBSUEsWUFBTWEsVUFBVSxDQUNkaUgsYUFBYXhPLFNBREMsRUFFZDBHLE9BQU8xRyxTQUZPLEVBR2R1TSxZQUFZdk0sU0FIRSxFQUlkeU8sa0JBQWtCek8sU0FKSixDQUFoQjs7QUFPQSxZQUFNeUgsc0JBQ0QrRyxhQUFhdk8sS0FEWixFQUVEeUcsT0FBT3pHLEtBRk4sRUFHRHNNLFlBQVl0TSxLQUhYLEVBSUR3TyxrQkFBa0J4TyxLQUpqQixDQUFOOztBQU9BLFlBQU0yRyxVQUFVakIsSUFBSWpELGlCQUFKLElBQXlCL0MsZUFBekM7O0FBRUEsWUFBSWlILE9BQUosRUFBYTtBQUNYYSxpQkFBT0ksS0FBUCxHQUFleEIsa0JBQWtCVixDQUFsQixFQUFxQmtDLEtBQXBDO0FBQ0FKLGlCQUFPbUIsSUFBUCxHQUFjdkMsa0JBQWtCVixDQUFsQixFQUFxQmlELElBQW5DO0FBQ0Q7O0FBRUQsZUFDRTtBQUFDLHFCQUFEO0FBQUE7QUFDRSxpQkFBS2pELElBQUksR0FBSixHQUFVZSxPQUFPUSxFQUR4QjtBQUVFLHVCQUFXLDBCQUFXSyxPQUFYLEVBQW9CLENBQUM4QyxJQUFELElBQVMsU0FBN0IsRUFBd0MsRUFBRSxVQUFVekQsT0FBWixFQUF4QyxDQUZiO0FBR0UsbUJBQU9hO0FBSFQsYUFJTThFLFlBQVlwRCxJQUpsQixFQUtNcUYsYUFBYXJGLElBTG5CLEVBTU1zRixrQkFBa0J0RixJQU54QjtBQVFHLDBCQUFFVSxrQkFBRixDQUFxQm5ELE9BQU92QixNQUE1QixFQUFvQztBQUNuQzRFLGtCQUFNMUYsVUFENkI7QUFFbkNxQyxvQkFBUUE7QUFGMkIsV0FBcEM7QUFSSCxTQURGO0FBZUQsT0FqREQ7O0FBbURBLFVBQU1pSSxpQkFBaUIsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsWUFBTUMsa0JBQWtCLGdCQUFFeEgsVUFBRixDQUN0QmhHLG1CQUFtQmdGLFVBQW5CLEVBQStCaUIsU0FBL0IsRUFBMENBLFNBQTFDLFNBRHNCLENBQXhCO0FBR0EsZUFDRSw4QkFBQyxtQkFBRCxlQUNNdkgsYUFETjtBQUVFLGlCQUFPOEMsS0FGVDtBQUdFLHVCQUFhcUQsV0FIZjtBQUlFLG1CQUFTQyxPQUpYO0FBS0Usd0JBQWMsT0FBSzdILFlBTHJCO0FBTUUsNEJBQWtCLE9BQUtDLGdCQU56QjtBQU9FLHFCQUFXc1EsZ0JBQWdCNU8sU0FQN0I7QUFRRSxpQkFBTzRPLGdCQUFnQjNPO0FBUnpCLFdBU00yTyxnQkFBZ0J6RixJQVR0QixFQURGO0FBYUQsT0FqQkQ7O0FBbUJBLFVBQU0wRixZQUFZLGdCQUFFekgsVUFBRixDQUNoQmxILFNBQVNrRyxVQUFULEVBQXFCaUIsU0FBckIsRUFBZ0NBLFNBQWhDLEVBQTJDLElBQTNDLENBRGdCLENBQWxCO0FBR0EsVUFBTXlILGFBQWEsZ0JBQUUxSCxVQUFGLENBQ2pCakgsY0FBY2lHLFVBQWQsRUFBMEJpQixTQUExQixFQUFxQ0EsU0FBckMsRUFBZ0QsSUFBaEQsQ0FEaUIsQ0FBbkI7QUFHQSxVQUFNMEgsYUFBYSxnQkFBRTNILFVBQUYsQ0FDakJ0RyxjQUFjc0YsVUFBZCxFQUEwQmlCLFNBQTFCLEVBQXFDQSxTQUFyQyxFQUFnRCxJQUFoRCxDQURpQixDQUFuQjtBQUdBLFVBQU0ySCxlQUFlM04sZ0JBQWdCK0UsVUFBaEIsRUFBNEJpQixTQUE1QixFQUF1Q0EsU0FBdkMsRUFBa0QsSUFBbEQsQ0FBckI7QUFDQSxVQUFNNEgsY0FBYzNOLGVBQWU4RSxVQUFmLEVBQTJCaUIsU0FBM0IsRUFBc0NBLFNBQXRDLEVBQWlELElBQWpELENBQXBCO0FBQ0EsVUFBTXFELGVBQWVuSixnQkFBZ0I2RSxVQUFoQixFQUE0QmlCLFNBQTVCLEVBQXVDQSxTQUF2QyxFQUFrRCxJQUFsRCxDQUFyQjs7QUFFQSxVQUFNNkgsbUJBQW1Cak4sb0JBQW9CLEtBQXBCLElBQTZCQSxvQkFBb0IsTUFBMUU7QUFDQSxVQUFNa04sc0JBQXNCbE4sb0JBQW9CLFFBQXBCLElBQWdDQSxvQkFBb0IsTUFBaEY7O0FBRUEsVUFBTW1OLFlBQVksU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFlBQU1DLFdBQVc3SSxjQUFqQjtBQUNBLFlBQU04SSxhQUFhWCxnQkFBbkI7QUFDQSxZQUFNWSxTQUFTdkssa0JBQWtCb0osbUJBQWxCLEdBQXdDLElBQXZEO0FBQ0EsZUFDRTtBQUFBO0FBQUE7QUFDRSx1QkFBVywwQkFBVyxZQUFYLEVBQXlCcE8sU0FBekIsRUFBb0M2TyxVQUFVN08sU0FBOUMsQ0FEYjtBQUVFLGdDQUNLQyxLQURMLEVBRUs0TyxVQUFVNU8sS0FGZjtBQUZGLGFBTU00TyxVQUFVMUYsSUFOaEI7QUFRRzNILDRCQUFrQkMsaUJBQWxCLEdBQ0c7QUFBQTtBQUFBLGNBQUssV0FBVSxnQkFBZjtBQUNDNk47QUFERCxXQURILEdBSUcsSUFaTjtBQWFFO0FBQUMsd0JBQUQ7QUFBQSxjQUFjLFlBQVksb0JBQUNFLENBQUQ7QUFBQSx1QkFBTyxPQUFLNVAsWUFBTCxHQUFvQjRQLENBQTNCO0FBQUEsZUFBMUI7QUFDRTtBQUFDLDRCQUFEO0FBQUE7QUFDRSwyQkFBVywwQkFDVFYsV0FBVzlPLFNBREYsRUFFVFIsb0JBQW9CLGFBQXBCLEdBQW9DLEVBRjNCLENBRGI7QUFLRSx1QkFBT3NQLFdBQVc3TztBQUxwQixpQkFNTTZPLFdBQVczRixJQU5qQjtBQVFHa0csc0JBUkg7QUFTR2pMLGdDQUFrQjRFLGtCQUFsQixHQUF1QyxJQVQxQztBQVVHZ0IsMkJBVkg7QUFXRzVFLDJCQUFhMkYsYUFBYixHQUE2QixJQVhoQztBQVlHbUUsa0NBQW9CSyxNQVp2QjtBQWFFO0FBQUMsOEJBQUQ7QUFBQTtBQUNFLDZCQUFXLDBCQUFXUixXQUFXL08sU0FBdEIsQ0FEYjtBQUVFLHlCQUFPK08sV0FBVzlPO0FBRnBCLG1CQUdNOE8sV0FBVzVGLElBSGpCO0FBS0czRSx5QkFBU2lCLEdBQVQsQ0FBYSxVQUFDUCxDQUFELEVBQUlTLENBQUo7QUFBQSx5QkFBVThGLFlBQVl2RyxDQUFaLEVBQWVTLENBQWYsQ0FBVjtBQUFBLGlCQUFiLENBTEg7QUFNR2hCLHdCQUFRYyxHQUFSLENBQVl5SSxVQUFaO0FBTkgsZUFiRjtBQXFCR2lCLHFDQUF1Qkk7QUFyQjFCO0FBREYsV0FiRjtBQXNDRy9OLDRCQUFrQkUsb0JBQWxCLEdBQ0c7QUFBQTtBQUFBLGNBQUssV0FBVSxtQkFBZjtBQUNDNE47QUFERCxXQURILEdBSUcsSUExQ047QUEyQ0csV0FBQzlLLFNBQVNPLE1BQVYsSUFDQztBQUFDLDJCQUFEO0FBQXFCa0ssdUJBQXJCO0FBQ0csNEJBQUVwRixrQkFBRixDQUFxQmhJLFVBQXJCO0FBREgsV0E1Q0o7QUErQ0Usd0NBQUMsZ0JBQUQ7QUFDRSxxQkFBU2MsT0FEWDtBQUVFLHlCQUFhZjtBQUZmLGFBR01vTixZQUhOO0FBL0NGLFNBREY7QUF1REQsT0EzREQ7O0FBNkRBO0FBQ0EsYUFBT2pQLFdBQVdBLFNBQVNxRyxVQUFULEVBQXFCZ0osU0FBckIsRUFBZ0MsSUFBaEMsQ0FBWCxHQUFtREEsV0FBMUQ7QUFDRDs7OztFQXYvQnFDLHVCQUFRLDBDQUFSLEM7O0FBQW5CM1IsVSxDQUNaZ1MsWTtrQkFEWWhTLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbi8vXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IExpZmVjeWNsZSBmcm9tICcuL2xpZmVjeWNsZSdcbmltcG9ydCBNZXRob2RzIGZyb20gJy4vbWV0aG9kcydcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0UHJvcHMnXG5cbmV4cG9ydCBjb25zdCBSZWFjdFRhYmxlRGVmYXVsdHMgPSBkZWZhdWx0UHJvcHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUYWJsZSBleHRlbmRzIE1ldGhvZHMoTGlmZWN5Y2xlKENvbXBvbmVudCkpIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wc1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXREYXRhTW9kZWwgPSB0aGlzLmdldERhdGFNb2RlbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRTb3J0ZWREYXRhID0gdGhpcy5nZXRTb3J0ZWREYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmZpcmVGZXRjaERhdGEgPSB0aGlzLmZpcmVGZXRjaERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0UHJvcE9yU3RhdGUgPSB0aGlzLmdldFByb3BPclN0YXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFN0YXRlT3JQcm9wID0gdGhpcy5nZXRTdGF0ZU9yUHJvcC5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLnNvcnREYXRhID0gdGhpcy5zb3J0RGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRNaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZUNoYW5nZSA9IHRoaXMub25QYWdlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZVNpemVDaGFuZ2UgPSB0aGlzLm9uUGFnZVNpemVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuc29ydENvbHVtbiA9IHRoaXMuc29ydENvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJDb2x1bW4gPSB0aGlzLmZpbHRlckNvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5TdGFydCA9IHRoaXMucmVzaXplQ29sdW1uU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uRW5kID0gdGhpcy5yZXNpemVDb2x1bW5FbmQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uTW92aW5nID0gdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2U6IDAsXG4gICAgICBwYWdlU2l6ZTogcHJvcHMuZGVmYXVsdFBhZ2VTaXplLFxuICAgICAgc29ydGVkOiBwcm9wcy5kZWZhdWx0U29ydGVkLFxuICAgICAgZXhwYW5kZWQ6IHByb3BzLmRlZmF1bHRFeHBhbmRlZCxcbiAgICAgIGZpbHRlcmVkOiBwcm9wcy5kZWZhdWx0RmlsdGVyZWQsXG4gICAgICByZXNpemVkOiBwcm9wcy5kZWZhdWx0UmVzaXplZCxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nOiBmYWxzZSxcbiAgICAgIHNraXBOZXh0U29ydDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0YWJsZVRvdGFsV2lkdGg6IHRoaXMudGFibGVXcmFwcGVyLm9mZnNldFdpZHRoIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHJlc29sdmVkU3RhdGUgPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3R5bGUsXG4gICAgICBnZXRQcm9wcyxcbiAgICAgIGdldFRhYmxlUHJvcHMsXG4gICAgICBnZXRDb2xHcm91cENvbFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkUHJvcHMsXG4gICAgICBnZXRUaGVhZFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZFRoUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzLFxuICAgICAgZ2V0VGJvZHlQcm9wcyxcbiAgICAgIGdldFRyUHJvcHMsXG4gICAgICBnZXRUZFByb3BzLFxuICAgICAgZ2V0VGZvb3RQcm9wcyxcbiAgICAgIGdldFRmb290VHJQcm9wcyxcbiAgICAgIGdldFRmb290VGRQcm9wcyxcbiAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyxcbiAgICAgIGdldExvYWRpbmdQcm9wcyxcbiAgICAgIGdldE5vRGF0YVByb3BzLFxuICAgICAgZ2V0UmVzaXplclByb3BzLFxuICAgICAgc2hvd1BhZ2luYXRpb24sXG4gICAgICBzaG93UGFnaW5hdGlvblRvcCxcbiAgICAgIHNob3dQYWdpbmF0aW9uQm90dG9tLFxuICAgICAgbWFudWFsLFxuICAgICAgbG9hZGluZ1RleHQsXG4gICAgICBub0RhdGFUZXh0LFxuICAgICAgc29ydGFibGUsXG4gICAgICByZXNpemFibGUsXG4gICAgICBmaWx0ZXJhYmxlLFxuICAgICAgZm9vdGVyUGxhY2VtZW50LFxuICAgICAgLy8gUGl2b3RpbmcgU3RhdGVcbiAgICAgIHBpdm90SURLZXksXG4gICAgICBwaXZvdFZhbEtleSxcbiAgICAgIHBpdm90QnksXG4gICAgICBzdWJSb3dzS2V5LFxuICAgICAgYWdncmVnYXRlZEtleSxcbiAgICAgIG9yaWdpbmFsS2V5LFxuICAgICAgaW5kZXhLZXksXG4gICAgICBncm91cGVkQnlQaXZvdEtleSxcbiAgICAgIC8vIEZpeGVkXG4gICAgICBmaXhlZENvbHVtbnNDb3VudCxcbiAgICAgIC8vIFN0YXRlXG4gICAgICBsb2FkaW5nLFxuICAgICAgcGFnZVNpemUsXG4gICAgICBwYWdlLFxuICAgICAgc29ydGVkLFxuICAgICAgZmlsdGVyZWQsXG4gICAgICByZXNpemVkLFxuICAgICAgZXhwYW5kZWQsXG4gICAgICBwYWdlcyxcbiAgICAgIG9uRXhwYW5kZWRDaGFuZ2UsXG4gICAgICAvLyBDb21wb25lbnRzXG4gICAgICBUYWJsZVdyYXBwZXIsXG4gICAgICBUYWJsZUNvbXBvbmVudCxcbiAgICAgIFRoZWFkQ29tcG9uZW50LFxuICAgICAgVGJvZHlDb21wb25lbnQsXG4gICAgICBUckNvbXBvbmVudCxcbiAgICAgIFRoQ29tcG9uZW50LFxuICAgICAgVGRDb21wb25lbnQsXG4gICAgICBUZm9vdENvbXBvbmVudCxcbiAgICAgIFBhZ2luYXRpb25Db21wb25lbnQsXG4gICAgICBMb2FkaW5nQ29tcG9uZW50LFxuICAgICAgU3ViQ29tcG9uZW50LFxuICAgICAgTm9EYXRhQ29tcG9uZW50LFxuICAgICAgUmVzaXplckNvbXBvbmVudCxcbiAgICAgIEV4cGFuZGVyQ29tcG9uZW50LFxuICAgICAgUGl2b3RWYWx1ZUNvbXBvbmVudCxcbiAgICAgIFBpdm90Q29tcG9uZW50LFxuICAgICAgQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgIEZpbHRlckNvbXBvbmVudCxcbiAgICAgIFBhZFJvd0NvbXBvbmVudCxcbiAgICAgIC8vIERhdGEgbW9kZWxcbiAgICAgIHJlc29sdmVkRGF0YSxcbiAgICAgIGFsbFZpc2libGVDb2x1bW5zLFxuICAgICAgaGVhZGVyR3JvdXBzLFxuICAgICAgaGFzSGVhZGVyR3JvdXBzLFxuICAgICAgLy8gU29ydGVkIERhdGFcbiAgICAgIHNvcnRlZERhdGEsXG4gICAgICBjdXJyZW50bHlSZXNpemluZyxcbiAgICAgIHRhYmxlVG90YWxXaWR0aCxcbiAgICB9ID0gcmVzb2x2ZWRTdGF0ZVxuXG4gICAgLy8gUGFnaW5hdGlvblxuICAgIGNvbnN0IHN0YXJ0Um93ID0gcGFnZVNpemUgKiBwYWdlXG4gICAgY29uc3QgZW5kUm93ID0gc3RhcnRSb3cgKyBwYWdlU2l6ZVxuICAgIGxldCBwYWdlUm93cyA9IG1hbnVhbCA/IHJlc29sdmVkRGF0YSA6IHNvcnRlZERhdGEuc2xpY2Uoc3RhcnRSb3csIGVuZFJvdylcbiAgICBjb25zdCBtaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzKClcbiAgICBjb25zdCBwYWRSb3dzID0gXy5yYW5nZShNYXRoLm1heChtaW5Sb3dzIC0gcGFnZVJvd3MubGVuZ3RoLCAwKSlcblxuICAgIGNvbnN0IGhhc0NvbHVtbkZvb3RlciA9IGFsbFZpc2libGVDb2x1bW5zLnNvbWUoZCA9PiBkLkZvb3RlcilcbiAgICBjb25zdCBoYXNGaWx0ZXJzID0gZmlsdGVyYWJsZSB8fCBhbGxWaXNpYmxlQ29sdW1ucy5zb21lKGQgPT4gZC5maWx0ZXJhYmxlKVxuXG4gICAgY29uc3QgcmVjdXJzZVJvd3NWaWV3SW5kZXggPSAocm93cywgcGF0aCA9IFtdLCBpbmRleCA9IC0xKSA9PiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICByb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgaW5kZXgrK1xuICAgICAgICAgIGNvbnN0IHJvd1dpdGhWaWV3SW5kZXggPSB7XG4gICAgICAgICAgICAuLi5yb3csXG4gICAgICAgICAgICBfdmlld0luZGV4OiBpbmRleCxcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmV3UGF0aCA9IHBhdGguY29uY2F0KFtpXSlcbiAgICAgICAgICBpZiAocm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSAmJiBfLmdldChleHBhbmRlZCwgbmV3UGF0aCkpIHtcbiAgICAgICAgICAgIDtbcm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSwgaW5kZXhdID0gcmVjdXJzZVJvd3NWaWV3SW5kZXgoXG4gICAgICAgICAgICAgIHJvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0sXG4gICAgICAgICAgICAgIG5ld1BhdGgsXG4gICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByb3dXaXRoVmlld0luZGV4XG4gICAgICAgIH0pLFxuICAgICAgICBpbmRleCxcbiAgICAgIF1cbiAgICB9XG4gICAgO1twYWdlUm93c10gPSByZWN1cnNlUm93c1ZpZXdJbmRleChwYWdlUm93cylcblxuICAgIGNvbnN0IGNhblByZXZpb3VzID0gcGFnZSA+IDBcbiAgICBjb25zdCBjYW5OZXh0ID0gcGFnZSArIDEgPCBwYWdlc1xuXG4gICAgbGV0IHJvd0luZGV4ID0gLTFcblxuICAgIGNvbnN0IGZpbmFsU3RhdGUgPSB7XG4gICAgICAuLi5yZXNvbHZlZFN0YXRlLFxuICAgICAgc3RhcnRSb3csXG4gICAgICBlbmRSb3csXG4gICAgICBwYWdlUm93cyxcbiAgICAgIG1pblJvd3MsXG4gICAgICBwYWRSb3dzLFxuICAgICAgaGFzQ29sdW1uRm9vdGVyLFxuICAgICAgY2FuUHJldmlvdXMsXG4gICAgICBjYW5OZXh0LFxuICAgIH1cblxuICAgIGNvbnN0IGZpeGVkQ29sdW1uc1Byb3BzID0gW107XG4gICAgbGV0IHJhd0NvbHVtbnNXaWR0aCA9IDBcbiAgICBsZXQgZmxvb3JDb2x1bW5zV2lkdGggPSAwXG5cbiAgICAvLyBWaXN1YWwgQ29tcG9uZW50c1xuXG4gICAgY29uc3QgbWFrZUNvbEdyb3VwID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGNvbGdyb3VwPlxuICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUNvbCl9XG4gICAgICAgIDwvY29sZ3JvdXA+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbCA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IGlzRHVtbXkgPSBpID09PSBhbGxWaXNpYmxlQ29sdW1ucy5sZW5ndGggLSAxXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA8IGZpeGVkQ29sdW1uc0NvdW50XG4gICAgICBjb25zdCBpc0lubmVyRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgLSAxXG4gICAgICBjb25zdCBpc0xhc3RGaXhlZCA9IGkgPT09IGZpeGVkQ29sdW1uc0NvdW50IC0gMVxuXG4gICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sdW1uLmlkKSB8fCB7fVxuXG4gICAgICBjb25zdCBjb2xncm91cENvbFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRDb2xHcm91cENvbFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uQ29sZ3JvdXBDb2xQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldENvbEdyb3VwQ29sUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5jb2xHcm91cENvbENsYXNzTmFtZSxcbiAgICAgICAgY29sZ3JvdXBDb2xQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkNvbGdyb3VwQ29sUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5jb2xHcm91cENvbFN0eWxlLFxuICAgICAgICAuLi5jb2xncm91cENvbFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Db2xncm91cENvbFByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBsZXQgbWluV2lkdGggPSBjb2x1bW4ubWluV2lkdGhcbiAgICAgIGxldCBtYXhXaWR0aCA9IGNvbHVtbi5tYXhXaWR0aFxuICAgICAgbGV0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgbWluV2lkdGgsXG4gICAgICAgIDBcbiAgICAgIClcblxuICAgICAgLy8gY2FsY3VsYXRlIHB4XG4gICAgICBpZiAodGFibGVUb3RhbFdpZHRoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoSXNQZXJjZW50cyA9IF8uaXNQZXJjZW50cyh3aWR0aClcbiAgICAgICAgY29uc3QgbWluV2lkdGhJc1BlcmNlbnRzID0gXy5pc1BlcmNlbnRzKG1pbldpZHRoKVxuICAgICAgICBjb25zdCBtYXhXaWR0aElzUGVyY2VudHMgPSBfLmlzUGVyY2VudHMobWF4V2lkdGgpXG5cbiAgICAgICAgY29uc3Qgd2lkdGhWYWx1ZSA9IHBhcnNlSW50KHdpZHRoLCAxMClcbiAgICAgICAgY29uc3QgbWluV2lkdGhWYWx1ZSA9IG1pbldpZHRoICYmIHBhcnNlSW50KG1pbldpZHRoLCAxMClcbiAgICAgICAgY29uc3QgbWF4V2lkdGhWYWx1ZSA9IG1heFdpZHRoICYmIHBhcnNlSW50KG1heFdpZHRoLCAxMClcblxuICAgICAgICB3aWR0aCA9IHdpZHRoSXNQZXJjZW50c1xuICAgICAgICAgID8gXy5wZXJjZW50c1RvUHgod2lkdGhWYWx1ZSwgdGFibGVUb3RhbFdpZHRoKVxuICAgICAgICAgIDogd2lkdGhWYWx1ZVxuXG4gICAgICAgIG1pbldpZHRoID0gbWluV2lkdGhJc1BlcmNlbnRzXG4gICAgICAgICAgPyBfLnBlcmNlbnRzVG9QeChtaW5XaWR0aFZhbHVlLCB0YWJsZVRvdGFsV2lkdGgpXG4gICAgICAgICAgOiBtaW5XaWR0aFZhbHVlXG5cbiAgICAgICAgbWF4V2lkdGggPSBtYXhXaWR0aElzUGVyY2VudHNcbiAgICAgICAgICA/IF8ucGVyY2VudHNUb1B4KG1heFdpZHRoVmFsdWUsIHRhYmxlVG90YWxXaWR0aClcbiAgICAgICAgICA6IG1heFdpZHRoVmFsdWVcblxuICAgICAgICB3aWR0aCA9IF8uY2xhbXAod2lkdGgsIG1pbldpZHRoLCBtYXhXaWR0aClcblxuICAgICAgICByYXdDb2x1bW5zV2lkdGggKz0gd2lkdGhcbiAgICAgICAgd2lkdGggPSBNYXRoLmZsb29yKHdpZHRoKVxuICAgICAgICBmbG9vckNvbHVtbnNXaWR0aCArPSB3aWR0aFxuXG4gICAgICAgIGNvbnN0IGRpZmYgPSBNYXRoLmZsb29yKHJhd0NvbHVtbnNXaWR0aCAtIGZsb29yQ29sdW1uc1dpZHRoKVxuXG4gICAgICAgIGlmIChkaWZmID49IDEpIHtcbiAgICAgICAgICB3aWR0aCArPSBkaWZmXG4gICAgICAgICAgZmxvb3JDb2x1bW5zV2lkdGggKz0gZGlmZlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgICBjb25zdCBsZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHMucmVkdWNlKCh2YWx1ZSwgaXRlbSkgPT4gdmFsdWUgKyBpdGVtLndpZHRoLCAwKVxuICAgICAgICAgIGZpeGVkQ29sdW1uc1Byb3BzLnB1c2goeyB3aWR0aCwgbGVmdCB9KVxuXG4gICAgICAgICAgaWYgKGlzTGFzdEZpeGVkKSB7XG4gICAgICAgICAgICB3aWR0aCArPSBsZWZ0XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2lkdGggPSBgJHt3aWR0aH1weGBcbiAgICAgIH1cblxuICAgICAgaWYgKGlzSW5uZXJGaXhlZCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Y29sXG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncnQtY29sZ3JvdXAtY29sJywgY2xhc3NlcywgeyAnLWR1bW15JzogaXNEdW1teSB9KX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlckdyb3VwcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRHcm91cFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctaGVhZGVyR3JvdXBzJywgdGhlYWRHcm91cFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3RoZWFkR3JvdXBQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udGhlYWRHcm91cFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRHcm91cFRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkR3JvdXBUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkR3JvdXBUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAobWFrZUhlYWRlckdyb3VwKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXJHcm91cCA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkR3JvdXBUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRHcm91cFRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2xTcGFuID0gY29sdW1uLmNvbHVtbnMubGVuZ3RoXG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkR3JvdXBUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICAgIGNvbFNwYW4sXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRHVtbXkgPSBpID09PSBoZWFkZXJHcm91cHMubGVuZ3RoIC0gMVxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudCAmJiB0YWJsZVRvdGFsV2lkdGhcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ud2lkdGhcbiAgICAgICAgc3R5bGVzLmxlZnQgPSBmaXhlZENvbHVtbnNQcm9wc1tpXS5sZWZ0XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uSGVhZGVyLCB7XG4gICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCB7ICctZHVtbXknOiBpc0R1bW15LCAnLWVtcHR5JzogIWNvbnRlbnQsICctZml4ZWQnOiBpc0ZpeGVkIH0pfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWhlYWRlcicsIHRoZWFkUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17dGhlYWRQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udGhlYWRQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUhlYWRlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3Qgc29ydCA9IHNvcnRlZC5maW5kKGQgPT4gZC5pZCA9PT0gY29sdW1uLmlkKVxuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgY29uc3QgdGhlYWRUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZFRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZFRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZFRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNSZXNpemFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChjb2x1bW4ucmVzaXphYmxlLCByZXNpemFibGUsIGZhbHNlKVxuICAgICAgY29uc3QgcmVzaXplciA9IGlzUmVzaXphYmxlXG4gICAgICAgID8gKDxSZXNpemVyQ29tcG9uZW50XG4gICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChjb2x1bW4sIGUsIGZhbHNlKX1cbiAgICAgICAgICBvblRvdWNoU3RhcnQ9e2UgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChjb2x1bW4sIGUsIHRydWUpfVxuICAgICAgICAgIHsuLi5yZXNpemVyUHJvcHN9XG4gICAgICAgIC8+KVxuICAgICAgICA6IG51bGxcblxuICAgICAgY29uc3QgaXNTb3J0YWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5zb3J0YWJsZSwgc29ydGFibGUsIGZhbHNlKVxuICAgICAgY29uc3QgaXNEdW1teSA9IGkgPT09IGFsbFZpc2libGVDb2x1bW5zLmxlbmd0aCAtIDFcbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdGFibGVUb3RhbFdpZHRoXG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLndpZHRoXG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ubGVmdFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICdydC1yZXNpemFibGUtaGVhZGVyJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJy1jdXJzb3ItcG9pbnRlcic6IGlzU29ydGFibGUsXG4gICAgICAgICAgICAgICctc29ydC1kZXNjJzogc29ydCAmJiBzb3J0LmRlc2MsXG4gICAgICAgICAgICAgICctc29ydC1hc2MnOiBzb3J0ICYmICFzb3J0LmRlc2MsXG4gICAgICAgICAgICAgICctaGlkZGVuJzogIXNob3csXG4gICAgICAgICAgICAgICctZHVtbXknOiBpc0R1bW15LFxuICAgICAgICAgICAgICAnLWZpeGVkJzogaXNGaXhlZCxcbiAgICAgICAgICAgICAgJ3J0LWhlYWRlci1waXZvdCc6IHBpdm90QnkgJiYgcGl2b3RCeS5zbGljZSgwLCAtMSkuaW5jbHVkZXMoY29sdW1uLmlkKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgdG9nZ2xlU29ydD17ZSA9PiB7XG4gICAgICAgICAgICBpc1NvcnRhYmxlICYmIHRoaXMuc29ydENvbHVtbihjb2x1bW4sIGUuc2hpZnRLZXkpXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdydC1yZXNpemFibGUtaGVhZGVyLWNvbnRlbnQnPlxuICAgICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5IZWFkZXIsIHtcbiAgICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cmVzaXplcn1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlRmlsdGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZEZpbHRlclRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWZpbHRlcnMnLCB0aGVhZEZpbHRlclByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3RoZWFkRmlsdGVyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRoZWFkRmlsdGVyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZEZpbHRlclRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkRmlsdGVyVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZEZpbHRlclRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VGaWx0ZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUZpbHRlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgdGhlYWRGaWx0ZXJUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRGaWx0ZXJUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRGaWx0ZXJUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbHRlciA9IGZpbHRlcmVkLmZpbmQoZmlsdGVyID0+IGZpbHRlci5pZCA9PT0gY29sdW1uLmlkKVxuXG4gICAgICBjb25zdCBSZXNvbHZlZEZpbHRlckNvbXBvbmVudCA9IGNvbHVtbi5GaWx0ZXIgfHwgRmlsdGVyQ29tcG9uZW50XG5cbiAgICAgIGNvbnN0IGlzRmlsdGVyYWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICBjb2x1bW4uZmlsdGVyYWJsZSxcbiAgICAgICAgZmlsdGVyYWJsZSxcbiAgICAgICAgZmFsc2VcbiAgICAgIClcblxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudCAmJiB0YWJsZVRvdGFsV2lkdGhcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ud2lkdGhcbiAgICAgICAgc3R5bGVzLmxlZnQgPSBmaXhlZENvbHVtbnNQcm9wc1tpXS5sZWZ0XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgeyAnLWZpeGVkJzogaXNGaXhlZCwgJy1lbXB0eSc6ICFpc0ZpbHRlcmFibGUgfSl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0ZpbHRlcmFibGVcbiAgICAgICAgICAgID8gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgIFJlc29sdmVkRmlsdGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdmFsdWUgPT4gdGhpcy5maWx0ZXJDb2x1bW4oY29sdW1uLCB2YWx1ZSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRlZmF1bHRQcm9wcy5jb2x1bW4uRmlsdGVyXG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZ2VSb3cgPSAocm93LCBpLCBwYXRoID0gW10pID0+IHtcbiAgICAgIGNvbnN0IHJvd0luZm8gPSB7XG4gICAgICAgIG9yaWdpbmFsOiByb3dbb3JpZ2luYWxLZXldLFxuICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgaW5kZXg6IHJvd1tpbmRleEtleV0sXG4gICAgICAgIHZpZXdJbmRleDogKytyb3dJbmRleCxcbiAgICAgICAgbGV2ZWw6IHBhdGgubGVuZ3RoLFxuICAgICAgICBuZXN0aW5nUGF0aDogcGF0aC5jb25jYXQoW2ldKSxcbiAgICAgICAgYWdncmVnYXRlZDogcm93W2FnZ3JlZ2F0ZWRLZXldLFxuICAgICAgICBncm91cGVkQnlQaXZvdDogcm93W2dyb3VwZWRCeVBpdm90S2V5XSxcbiAgICAgICAgc3ViUm93czogcm93W3N1YlJvd3NLZXldLFxuICAgICAgfVxuICAgICAgY29uc3QgaXNFeHBhbmRlZCA9IF8uZ2V0KGV4cGFuZGVkLCByb3dJbmZvLm5lc3RpbmdQYXRoKVxuICAgICAgY29uc3QgdHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VHJQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gW1xuICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICBrZXk9e3Jvd0luZm8ubmVzdGluZ1BhdGguam9pbignXycpfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIHRyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgcm93Ll92aWV3SW5kZXggJSAyID8gJy1ldmVuJyA6ICctb2RkJ1xuICAgICAgICAgICl9XG4gICAgICAgICAgc3R5bGU9e3RyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbiwgaTIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgICAgICAgIGNvbnN0IHRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgICAgICAgIGdldFRkUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgY29sdW1uLCB0aGlzKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCBjb2x1bW4sIHRoaXMpXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgICAgICAgIHRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgICAgICAgLi4udGRQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaXNGaXhlZCA9IGkyIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdGFibGVUb3RhbFdpZHRoXG5cbiAgICAgICAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uc1Byb3BzW2kyXS53aWR0aFxuICAgICAgICAgICAgICBzdHlsZXMubGVmdCA9IGZpeGVkQ29sdW1uc1Byb3BzW2kyXS5sZWZ0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxJbmZvID0ge1xuICAgICAgICAgICAgICAuLi5yb3dJbmZvLFxuICAgICAgICAgICAgICBpc0V4cGFuZGVkLFxuICAgICAgICAgICAgICBjb2x1bW46IHsgLi4uY29sdW1uIH0sXG4gICAgICAgICAgICAgIHZhbHVlOiByb3dJbmZvLnJvd1tjb2x1bW4uaWRdLFxuICAgICAgICAgICAgICBwaXZvdGVkOiBjb2x1bW4ucGl2b3RlZCxcbiAgICAgICAgICAgICAgZXhwYW5kZXI6IGNvbHVtbi5leHBhbmRlcixcbiAgICAgICAgICAgICAgcmVzaXplZCxcbiAgICAgICAgICAgICAgc2hvdyxcbiAgICAgICAgICAgICAgdGRQcm9wcyxcbiAgICAgICAgICAgICAgY29sdW1uUHJvcHMsXG4gICAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAgIHN0eWxlcyxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjZWxsSW5mby52YWx1ZVxuXG4gICAgICAgICAgICBsZXQgaW50ZXJhY3Rpb25Qcm9wc1xuICAgICAgICAgICAgbGV0IGlzQnJhbmNoXG4gICAgICAgICAgICBsZXQgaXNQcmV2aWV3XG5cbiAgICAgICAgICAgIGNvbnN0IG9uRXhwYW5kZXJDbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgICBsZXQgbmV3RXhwYW5kZWQgPSBfLmNsb25lKGV4cGFuZGVkKVxuICAgICAgICAgICAgICBpZiAoaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIG5ld0V4cGFuZGVkID0gXy5zZXQobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBmYWxzZSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdFeHBhbmRlZCA9IF8uc2V0KG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwge30pXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiBuZXdFeHBhbmRlZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uRXhwYW5kZWRDaGFuZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgb25FeHBhbmRlZENoYW5nZShuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gYSBzdGFuZGFyZCBjZWxsXG4gICAgICAgICAgICBsZXQgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgIGNvbHVtbi5DZWxsLFxuICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgLy8gUmVzb2x2ZSBSZW5kZXJlcnNcbiAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCA9XG4gICAgICAgICAgICAgIGNvbHVtbi5BZ2dyZWdhdGVkIHx8XG4gICAgICAgICAgICAgICghY29sdW1uLmFnZ3JlZ2F0ZSA/IEFnZ3JlZ2F0ZWRDb21wb25lbnQgOiBjb2x1bW4uQ2VsbClcbiAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uRXhwYW5kZXIgfHwgRXhwYW5kZXJDb21wb25lbnRcbiAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCA9XG4gICAgICAgICAgICAgIGNvbHVtbi5QaXZvdFZhbHVlIHx8IFBpdm90VmFsdWVDb21wb25lbnRcbiAgICAgICAgICAgIGNvbnN0IERlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50ID1cbiAgICAgICAgICAgICAgUGl2b3RDb21wb25lbnQgfHxcbiAgICAgICAgICAgICAgKHByb3BzID0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgIDxSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uUGl2b3QgfHwgRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnRcblxuICAgICAgICAgICAgLy8gSXMgdGhpcyBjZWxsIGV4cGFuZGFibGU/XG4gICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCB8fCBjZWxsSW5mby5leHBhbmRlcikge1xuICAgICAgICAgICAgICAvLyBNYWtlIGl0IGV4cGFuZGFibGUgYnkgZGVmdWFsdFxuICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlID0gdHJ1ZVxuICAgICAgICAgICAgICBpbnRlcmFjdGlvblByb3BzID0ge1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IG9uRXhwYW5kZXJDbGljayxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBJZiBwaXZvdGVkLCBoYXMgbm8gc3ViUm93cywgYW5kIGRvZXMgbm90IGhhdmUgYSBzdWJDb21wb25lbnQsIGRvIG5vdCBtYWtlIGV4cGFuZGFibGVcbiAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNlbGxJbmZvLnN1YlJvd3MpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghU3ViQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvblByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQpIHtcbiAgICAgICAgICAgICAgLy8gSXMgdGhpcyBjb2x1bW4gYSBicmFuY2g/XG4gICAgICAgICAgICAgIGlzQnJhbmNoID1cbiAgICAgICAgICAgICAgICByb3dJbmZvLnJvd1twaXZvdElES2V5XSA9PT0gY29sdW1uLmlkICYmIGNlbGxJbmZvLnN1YlJvd3NcbiAgICAgICAgICAgICAgLy8gU2hvdWxkIHRoaXMgY29sdW1uIGJlIGJsYW5rP1xuICAgICAgICAgICAgICBpc1ByZXZpZXcgPVxuICAgICAgICAgICAgICAgIHBpdm90QnkuaW5kZXhPZihjb2x1bW4uaWQpID5cbiAgICAgICAgICAgICAgICAgIHBpdm90QnkuaW5kZXhPZihyb3dJbmZvLnJvd1twaXZvdElES2V5XSkgJiYgY2VsbEluZm8uc3ViUm93c1xuICAgICAgICAgICAgICAvLyBQaXZvdCBDZWxsIFJlbmRlciBPdmVycmlkZVxuICAgICAgICAgICAgICBpZiAoaXNCcmFuY2gpIHtcbiAgICAgICAgICAgICAgICAvLyBpc1Bpdm90XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZFBpdm90Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAuLi5jZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvd1twaXZvdFZhbEtleV0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgcm93W3Bpdm90VmFsS2V5XVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgICAgICAgICAgICAvLyBTaG93IHRoZSBwaXZvdCBwcmV2aWV3XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsSW5mby5hZ2dyZWdhdGVkKSB7XG4gICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZWxsSW5mby5leHBhbmRlcikge1xuICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgIHJvd1twaXZvdFZhbEtleV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBpZiAocGl2b3RCeSkge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsSW5mby5ncm91cGVkQnlQaXZvdCkge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNlbGxJbmZvLnN1YlJvd3MgJiYgIVN1YkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGNlbGxcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgICAgICAgIGtleT17aTIgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICAgICAgICFzaG93ICYmICctaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgJiYgJ3J0LWV4cGFuZGFibGUnLFxuICAgICAgICAgICAgICAgICAgKGlzQnJhbmNoIHx8IGlzUHJldmlldykgJiYgJ3J0LXBpdm90JyxcbiAgICAgICAgICAgICAgICAgIGlzRml4ZWQgJiYgJy1maXhlZCcsXG4gICAgICAgICAgICAgICAgICAoaXNGaXhlZCAmJiAhcmVzb2x2ZWRDZWxsKSAmJiAnLWVtcHR5J1xuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICAgICAgICB7Li4uaW50ZXJhY3Rpb25Qcm9wc31cbiAgICAgICAgICAgICAgICB7Li4udGRQcm9wcy5yZXN0fVxuICAgICAgICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Jlc29sdmVkQ2VsbH1cbiAgICAgICAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UckNvbXBvbmVudD4sXG4gICAgICAgIHJvd0luZm8uc3ViUm93cyAmJlxuICAgICAgICAgIGlzRXhwYW5kZWQgJiZcbiAgICAgICAgICByb3dJbmZvLnN1YlJvd3MubWFwKChkLCBpKSA9PlxuICAgICAgICAgICAgbWFrZVBhZ2VSb3coZCwgaSwgcm93SW5mby5uZXN0aW5nUGF0aClcbiAgICAgICAgICApLFxuICAgICAgICBTdWJDb21wb25lbnQgJiZcbiAgICAgICAgICAhcm93SW5mby5zdWJSb3dzICYmXG4gICAgICAgICAgaXNFeHBhbmRlZCAmJlxuICAgICAgICAgIFN1YkNvbXBvbmVudChyb3dJbmZvKSxcbiAgICAgIF1cbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFkUm93ID0gKHJvdywgaSkgPT4ge1xuICAgICAgY29uc3QgdHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICctcGFkUm93JyxcbiAgICAgICAgICAgIChwYWdlUm93cy5sZW5ndGggKyBpKSAlIDIgPyAnLWV2ZW4nIDogJy1vZGQnLFxuICAgICAgICAgICAgdHJQcm9wcy5jbGFzc05hbWVcbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlIHx8IHt9fVxuICAgICAgICA+XG4gICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlUGFkQ29sdW1uKX1cbiAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFkQ29sdW1uID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgY29uc3QgdGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIHRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4udGRQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPCBmaXhlZENvbHVtbnNDb3VudCAmJiB0YWJsZVRvdGFsV2lkdGhcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ud2lkdGhcbiAgICAgICAgc3R5bGVzLmxlZnQgPSBmaXhlZENvbHVtbnNQcm9wc1tpXS5sZWZ0XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgIXNob3cgJiYgJy1oaWRkZW4nLCB7ICctZml4ZWQnOiBpc0ZpeGVkIH0pfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgey4uLnRkUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChQYWRSb3dDb21wb25lbnQpfVxuICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdEZvb3RQcm9wcyA9IGdldFRmb290UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICBjb25zdCB0Rm9vdFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRmb290VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZm9vdENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17dEZvb3RQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgc3R5bGU9e3RGb290UHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRGb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHRGb290VHJQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgICAgc3R5bGU9e3RGb290VHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50Rm9vdFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VDb2x1bW5Gb290ZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGZvb3RDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbHVtbkZvb3RlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHRGb290VGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGZvb3RUZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkZvb3RlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0Rm9vdGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIHRGb290VGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uRm9vdGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRGb290VGRQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uRm9vdGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpIDwgZml4ZWRDb2x1bW5zQ291bnQgJiYgdGFibGVUb3RhbFdpZHRoXG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uc1Byb3BzW2ldLndpZHRoXG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gZml4ZWRDb2x1bW5zUHJvcHNbaV0ubGVmdFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsICFzaG93ICYmICctaGlkZGVuJywgeyAnLWZpeGVkJzogaXNGaXhlZCB9KX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxuICAgICAgICAgIHsuLi50Rm9vdFRkUHJvcHMucmVzdH1cbiAgICAgICAgICB7Li4uY29sdW1uRm9vdGVyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uRm9vdGVyLCB7XG4gICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdpbmF0aW9uQ29tcG9uZW50XG4gICAgICAgICAgey4uLnJlc29sdmVkU3RhdGV9XG4gICAgICAgICAgcGFnZXM9e3BhZ2VzfVxuICAgICAgICAgIGNhblByZXZpb3VzPXtjYW5QcmV2aW91c31cbiAgICAgICAgICBjYW5OZXh0PXtjYW5OZXh0fVxuICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5vblBhZ2VDaGFuZ2V9XG4gICAgICAgICAgb25QYWdlU2l6ZUNoYW5nZT17dGhpcy5vblBhZ2VTaXplQ2hhbmdlfVxuICAgICAgICAgIGNsYXNzTmFtZT17cGFnaW5hdGlvblByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICBzdHlsZT17cGFnaW5hdGlvblByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi5wYWdpbmF0aW9uUHJvcHMucmVzdH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCByb290UHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICApXG4gICAgY29uc3QgdGFibGVQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFRhYmxlUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgKVxuICAgIGNvbnN0IHRCb2R5UHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRUYm9keVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIClcbiAgICBjb25zdCBsb2FkaW5nUHJvcHMgPSBnZXRMb2FkaW5nUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgY29uc3Qgbm9EYXRhUHJvcHMgPSBnZXROb0RhdGFQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICBjb25zdCByZXNpemVyUHJvcHMgPSBnZXRSZXNpemVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG5cbiAgICBjb25zdCBkaXNwbGF5Rm9vdGVyVG9wID0gZm9vdGVyUGxhY2VtZW50ID09PSAndG9wJyB8fCBmb290ZXJQbGFjZW1lbnQgPT09ICdib3RoJ1xuICAgIGNvbnN0IGRpc3BsYXlGb290ZXJCb3R0b20gPSBmb290ZXJQbGFjZW1lbnQgPT09ICdib3R0b20nIHx8IGZvb3RlclBsYWNlbWVudCA9PT0gJ2JvdGgnXG5cbiAgICBjb25zdCBtYWtlVGFibGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjb2xHcm91cCA9IG1ha2VDb2xHcm91cCgpO1xuICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IG1ha2VQYWdpbmF0aW9uKClcbiAgICAgIGNvbnN0IGZvb3RlciA9IGhhc0NvbHVtbkZvb3RlciA/IG1ha2VDb2x1bW5Gb290ZXJzKCkgOiBudWxsXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdSZWFjdFRhYmxlJywgY2xhc3NOYW1lLCByb290UHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgICAuLi5yb290UHJvcHMuc3R5bGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucm9vdFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7c2hvd1BhZ2luYXRpb24gJiYgc2hvd1BhZ2luYXRpb25Ub3BcbiAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9J3BhZ2luYXRpb24tdG9wJz5cbiAgICAgICAgICAgICAge3BhZ2luYXRpb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8VGFibGVXcmFwcGVyIHdyYXBwZXJSZWY9eyhjKSA9PiB0aGlzLnRhYmxlV3JhcHBlciA9IGN9PlxuICAgICAgICAgICAgPFRhYmxlQ29tcG9uZW50XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICB0YWJsZVByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSZXNpemluZyA/ICdydC1yZXNpemluZycgOiAnJ1xuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBzdHlsZT17dGFibGVQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgICAgey4uLnRhYmxlUHJvcHMucmVzdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NvbEdyb3VwfVxuICAgICAgICAgICAgICB7aGFzSGVhZGVyR3JvdXBzID8gbWFrZUhlYWRlckdyb3VwcygpIDogbnVsbH1cbiAgICAgICAgICAgICAge21ha2VIZWFkZXJzKCl9XG4gICAgICAgICAgICAgIHtoYXNGaWx0ZXJzID8gbWFrZUZpbHRlcnMoKSA6IG51bGx9XG4gICAgICAgICAgICAgIHtkaXNwbGF5Rm9vdGVyVG9wICYmIGZvb3Rlcn1cbiAgICAgICAgICAgICAgPFRib2R5Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHRCb2R5UHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17dEJvZHlQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgICAgICB7Li4udEJvZHlQcm9wcy5yZXN0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BhZ2VSb3dzLm1hcCgoZCwgaSkgPT4gbWFrZVBhZ2VSb3coZCwgaSkpfVxuICAgICAgICAgICAgICAgIHtwYWRSb3dzLm1hcChtYWtlUGFkUm93KX1cbiAgICAgICAgICAgICAgPC9UYm9keUNvbXBvbmVudD5cbiAgICAgICAgICAgICAge2Rpc3BsYXlGb290ZXJCb3R0b20gJiYgZm9vdGVyfVxuICAgICAgICAgICAgPC9UYWJsZUNvbXBvbmVudD5cbiAgICAgICAgICA8L1RhYmxlV3JhcHBlcj5cbiAgICAgICAgICB7c2hvd1BhZ2luYXRpb24gJiYgc2hvd1BhZ2luYXRpb25Cb3R0b21cbiAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9J3BhZ2luYXRpb24tYm90dG9tJz5cbiAgICAgICAgICAgICAge3BhZ2luYXRpb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICB7IXBhZ2VSb3dzLmxlbmd0aCAmJlxuICAgICAgICAgICAgPE5vRGF0YUNvbXBvbmVudCB7Li4ubm9EYXRhUHJvcHN9PlxuICAgICAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQobm9EYXRhVGV4dCl9XG4gICAgICAgICAgICA8L05vRGF0YUNvbXBvbmVudD59XG4gICAgICAgICAgPExvYWRpbmdDb21wb25lbnRcbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICBsb2FkaW5nVGV4dD17bG9hZGluZ1RleHR9XG4gICAgICAgICAgICB7Li4ubG9hZGluZ1Byb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIGNoaWxkUHJvcHMgYXJlIG9wdGlvbmFsbHkgcGFzc2VkIHRvIGEgZnVuY3Rpb24tYXMtYS1jaGlsZFxuICAgIHJldHVybiBjaGlsZHJlbiA/IGNoaWxkcmVuKGZpbmFsU3RhdGUsIG1ha2VUYWJsZSwgdGhpcykgOiBtYWtlVGFibGUoKVxuICB9XG59XG4iXX0=