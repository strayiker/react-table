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
      console.log(this.tableWrapper.offsetWidth);
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
            { wrapperRef: function wrapperRef(c) {
                return _this2.tableWrapper = c;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0Iiwic2V0U3RhdGUiLCJ0YWJsZVRvdGFsV2lkdGgiLCJ0YWJsZVdyYXBwZXIiLCJvZmZzZXRXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJyZXNvbHZlZFN0YXRlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsImdldFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldENvbEdyb3VwQ29sUHJvcHMiLCJnZXRUaGVhZEdyb3VwUHJvcHMiLCJnZXRUaGVhZEdyb3VwVHJQcm9wcyIsImdldFRoZWFkR3JvdXBUaFByb3BzIiwiZ2V0VGhlYWRQcm9wcyIsImdldFRoZWFkVHJQcm9wcyIsImdldFRoZWFkVGhQcm9wcyIsImdldFRoZWFkRmlsdGVyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRoUHJvcHMiLCJnZXRUYm9keVByb3BzIiwiZ2V0VHJQcm9wcyIsImdldFRkUHJvcHMiLCJnZXRUZm9vdFByb3BzIiwiZ2V0VGZvb3RUclByb3BzIiwiZ2V0VGZvb3RUZFByb3BzIiwiZ2V0UGFnaW5hdGlvblByb3BzIiwiZ2V0TG9hZGluZ1Byb3BzIiwiZ2V0Tm9EYXRhUHJvcHMiLCJnZXRSZXNpemVyUHJvcHMiLCJzaG93UGFnaW5hdGlvbiIsInNob3dQYWdpbmF0aW9uVG9wIiwic2hvd1BhZ2luYXRpb25Cb3R0b20iLCJtYW51YWwiLCJsb2FkaW5nVGV4dCIsIm5vRGF0YVRleHQiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJwaXZvdElES2V5IiwicGl2b3RWYWxLZXkiLCJwaXZvdEJ5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJmaXhlZENvbHVtbkluZGV4IiwibG9hZGluZyIsInBhZ2VzIiwib25FeHBhbmRlZENoYW5nZSIsIlRhYmxlV3JhcHBlciIsIlRhYmxlQ29tcG9uZW50IiwiVGhlYWRDb21wb25lbnQiLCJUYm9keUNvbXBvbmVudCIsIlRyQ29tcG9uZW50IiwiVGhDb21wb25lbnQiLCJUZENvbXBvbmVudCIsIlRmb290Q29tcG9uZW50IiwiUGFnaW5hdGlvbkNvbXBvbmVudCIsIkxvYWRpbmdDb21wb25lbnQiLCJTdWJDb21wb25lbnQiLCJOb0RhdGFDb21wb25lbnQiLCJSZXNpemVyQ29tcG9uZW50IiwiRXhwYW5kZXJDb21wb25lbnQiLCJQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RDb21wb25lbnQiLCJBZ2dyZWdhdGVkQ29tcG9uZW50IiwiRmlsdGVyQ29tcG9uZW50IiwiUGFkUm93Q29tcG9uZW50IiwicmVzb2x2ZWREYXRhIiwiYWxsVmlzaWJsZUNvbHVtbnMiLCJoZWFkZXJHcm91cHMiLCJoYXNIZWFkZXJHcm91cHMiLCJzb3J0ZWREYXRhIiwic3RhcnRSb3ciLCJlbmRSb3ciLCJwYWdlUm93cyIsInNsaWNlIiwibWluUm93cyIsInBhZFJvd3MiLCJyYW5nZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJoYXNDb2x1bW5Gb290ZXIiLCJzb21lIiwiZCIsIkZvb3RlciIsImhhc0ZpbHRlcnMiLCJyZWN1cnNlUm93c1ZpZXdJbmRleCIsInJvd3MiLCJwYXRoIiwiaW5kZXgiLCJtYXAiLCJyb3ciLCJpIiwicm93V2l0aFZpZXdJbmRleCIsIl92aWV3SW5kZXgiLCJuZXdQYXRoIiwiY29uY2F0IiwiZ2V0IiwiY2FuUHJldmlvdXMiLCJjYW5OZXh0Iiwicm93SW5kZXgiLCJmaW5hbFN0YXRlIiwiZml4ZWRDb2x1bW5XaWR0aCIsInJhd0NvbHVtbnNXaWR0aCIsImZsb29yQ29sdW1uc1dpZHRoIiwibWFrZUNvbEdyb3VwIiwibWFrZUNvbCIsImNvbHVtbiIsInJlc2l6ZWRDb2wiLCJmaW5kIiwieCIsImlkIiwiY29sZ3JvdXBDb2xQcm9wcyIsInNwbGl0UHJvcHMiLCJ1bmRlZmluZWQiLCJjb2x1bW5Db2xncm91cENvbFByb3BzIiwiY2xhc3NlcyIsImNvbEdyb3VwQ29sQ2xhc3NOYW1lIiwic3R5bGVzIiwiY29sR3JvdXBDb2xTdHlsZSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJ3aWR0aCIsImdldEZpcnN0RGVmaW5lZCIsInZhbHVlIiwid2lkdGhJc1BlcmNlbnRzIiwiaXNQZXJjZW50cyIsIm1pbldpZHRoSXNQZXJjZW50cyIsIm1heFdpZHRoSXNQZXJjZW50cyIsIndpZHRoVmFsdWUiLCJwYXJzZUludCIsIm1pbldpZHRoVmFsdWUiLCJtYXhXaWR0aFZhbHVlIiwicGVyY2VudHNUb1B4IiwiY2xhbXAiLCJmbG9vciIsImRpZmYiLCJpc0ZpeGVkIiwiaXNEdW1teSIsIm1ha2VIZWFkZXJHcm91cHMiLCJ0aGVhZEdyb3VwUHJvcHMiLCJ0aGVhZEdyb3VwVHJQcm9wcyIsInJlc3QiLCJtYWtlSGVhZGVyR3JvdXAiLCJ0aGVhZEdyb3VwVGhQcm9wcyIsImNvbHVtbkhlYWRlclByb3BzIiwiZ2V0SGVhZGVyUHJvcHMiLCJoZWFkZXJDbGFzc05hbWUiLCJoZWFkZXJTdHlsZSIsImNvbFNwYW4iLCJjb2x1bW5zIiwiY29udGVudCIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsIkhlYWRlciIsImRhdGEiLCJtYWtlSGVhZGVycyIsInRoZWFkUHJvcHMiLCJ0aGVhZFRyUHJvcHMiLCJtYWtlSGVhZGVyIiwic29ydCIsInNob3ciLCJ0aGVhZFRoUHJvcHMiLCJpc1Jlc2l6YWJsZSIsInJlc2l6ZXIiLCJlIiwicmVzaXplclByb3BzIiwiaXNTb3J0YWJsZSIsImRlc2MiLCJpbmNsdWRlcyIsInNoaWZ0S2V5IiwibWFrZUZpbHRlcnMiLCJ0aGVhZEZpbHRlclByb3BzIiwidGhlYWRGaWx0ZXJUclByb3BzIiwibWFrZUZpbHRlciIsInRoZWFkRmlsdGVyVGhQcm9wcyIsImZpbHRlciIsIlJlc29sdmVkRmlsdGVyQ29tcG9uZW50IiwiRmlsdGVyIiwiaXNGaWx0ZXJhYmxlIiwib25DaGFuZ2UiLCJtYWtlUGFnZVJvdyIsInJvd0luZm8iLCJvcmlnaW5hbCIsInZpZXdJbmRleCIsImxldmVsIiwibmVzdGluZ1BhdGgiLCJhZ2dyZWdhdGVkIiwiZ3JvdXBlZEJ5UGl2b3QiLCJzdWJSb3dzIiwiaXNFeHBhbmRlZCIsInRyUHJvcHMiLCJqb2luIiwiaTIiLCJ0ZFByb3BzIiwiY29sdW1uUHJvcHMiLCJjZWxsSW5mbyIsInBpdm90ZWQiLCJleHBhbmRlciIsImludGVyYWN0aW9uUHJvcHMiLCJpc0JyYW5jaCIsImlzUHJldmlldyIsIm9uRXhwYW5kZXJDbGljayIsIm5ld0V4cGFuZGVkIiwiY2xvbmUiLCJzZXQiLCJzZXRTdGF0ZVdpdGhEYXRhIiwicmVzb2x2ZWRDZWxsIiwiQ2VsbCIsIlJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCIsIkFnZ3JlZ2F0ZWQiLCJhZ2dyZWdhdGUiLCJSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50IiwiRXhwYW5kZXIiLCJSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQiLCJQaXZvdFZhbHVlIiwiRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnQiLCJSZXNvbHZlZFBpdm90Q29tcG9uZW50IiwiUGl2b3QiLCJleHBhbmRhYmxlIiwib25DbGljayIsImluZGV4T2YiLCJtYWtlUGFkUm93IiwibWFrZVBhZENvbHVtbiIsIm1ha2VDb2x1bW5Gb290ZXJzIiwidEZvb3RQcm9wcyIsInRGb290VHJQcm9wcyIsIm1ha2VDb2x1bW5Gb290ZXIiLCJ0Rm9vdFRkUHJvcHMiLCJjb2x1bW5Gb290ZXJQcm9wcyIsImdldEZvb3RlclByb3BzIiwibWFrZVBhZ2luYXRpb24iLCJwYWdpbmF0aW9uUHJvcHMiLCJyb290UHJvcHMiLCJ0YWJsZVByb3BzIiwidEJvZHlQcm9wcyIsImxvYWRpbmdQcm9wcyIsIm5vRGF0YVByb3BzIiwibWFrZVRhYmxlIiwicGFnaW5hdGlvbiIsImMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFKQTs7O0FBTU8sSUFBTUEsd0VBQU47O0lBRWNDLFU7OztBQUduQixzQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBOztBQUdsQixVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUNBLFVBQUtHLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkgsSUFBbkIsT0FBckI7QUFDQSxVQUFLSSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JKLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0ssY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CTCxJQUFwQixPQUF0QjtBQUNBLFVBQUtNLFVB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ZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbi8vXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IExpZmVjeWNsZSBmcm9tICcuL2xpZmVjeWNsZSdcbmltcG9ydCBNZXRob2RzIGZyb20gJy4vbWV0aG9kcydcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0UHJvcHMnXG5cbmV4cG9ydCBjb25zdCBSZWFjdFRhYmxlRGVmYXVsdHMgPSBkZWZhdWx0UHJvcHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUYWJsZSBleHRlbmRzIE1ldGhvZHMoTGlmZWN5Y2xlKENvbXBvbmVudCkpIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wc1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXREYXRhTW9kZWwgPSB0aGlzLmdldERhdGFNb2RlbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRTb3J0ZWREYXRhID0gdGhpcy5nZXRTb3J0ZWREYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmZpcmVGZXRjaERhdGEgPSB0aGlzLmZpcmVGZXRjaERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0UHJvcE9yU3RhdGUgPSB0aGlzLmdldFByb3BPclN0YXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFN0YXRlT3JQcm9wID0gdGhpcy5nZXRTdGF0ZU9yUHJvcC5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLnNvcnREYXRhID0gdGhpcy5zb3J0RGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRNaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZUNoYW5nZSA9IHRoaXMub25QYWdlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZVNpemVDaGFuZ2UgPSB0aGlzLm9uUGFnZVNpemVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuc29ydENvbHVtbiA9IHRoaXMuc29ydENvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJDb2x1bW4gPSB0aGlzLmZpbHRlckNvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5TdGFydCA9IHRoaXMucmVzaXplQ29sdW1uU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uRW5kID0gdGhpcy5yZXNpemVDb2x1bW5FbmQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uTW92aW5nID0gdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2U6IDAsXG4gICAgICBwYWdlU2l6ZTogcHJvcHMuZGVmYXVsdFBhZ2VTaXplLFxuICAgICAgc29ydGVkOiBwcm9wcy5kZWZhdWx0U29ydGVkLFxuICAgICAgZXhwYW5kZWQ6IHByb3BzLmRlZmF1bHRFeHBhbmRlZCxcbiAgICAgIGZpbHRlcmVkOiBwcm9wcy5kZWZhdWx0RmlsdGVyZWQsXG4gICAgICByZXNpemVkOiBwcm9wcy5kZWZhdWx0UmVzaXplZCxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nOiBmYWxzZSxcbiAgICAgIHNraXBOZXh0U29ydDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0YWJsZVRvdGFsV2lkdGg6IHRoaXMudGFibGVXcmFwcGVyLm9mZnNldFdpZHRoIH0pXG4gICAgY29uc29sZS5sb2codGhpcy50YWJsZVdyYXBwZXIub2Zmc2V0V2lkdGgpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHJlc29sdmVkU3RhdGUgPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3R5bGUsXG4gICAgICBnZXRQcm9wcyxcbiAgICAgIGdldFRhYmxlUHJvcHMsXG4gICAgICBnZXRDb2xHcm91cENvbFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkUHJvcHMsXG4gICAgICBnZXRUaGVhZFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZFRoUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzLFxuICAgICAgZ2V0VGJvZHlQcm9wcyxcbiAgICAgIGdldFRyUHJvcHMsXG4gICAgICBnZXRUZFByb3BzLFxuICAgICAgZ2V0VGZvb3RQcm9wcyxcbiAgICAgIGdldFRmb290VHJQcm9wcyxcbiAgICAgIGdldFRmb290VGRQcm9wcyxcbiAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyxcbiAgICAgIGdldExvYWRpbmdQcm9wcyxcbiAgICAgIGdldE5vRGF0YVByb3BzLFxuICAgICAgZ2V0UmVzaXplclByb3BzLFxuICAgICAgc2hvd1BhZ2luYXRpb24sXG4gICAgICBzaG93UGFnaW5hdGlvblRvcCxcbiAgICAgIHNob3dQYWdpbmF0aW9uQm90dG9tLFxuICAgICAgbWFudWFsLFxuICAgICAgbG9hZGluZ1RleHQsXG4gICAgICBub0RhdGFUZXh0LFxuICAgICAgc29ydGFibGUsXG4gICAgICByZXNpemFibGUsXG4gICAgICBmaWx0ZXJhYmxlLFxuICAgICAgLy8gUGl2b3RpbmcgU3RhdGVcbiAgICAgIHBpdm90SURLZXksXG4gICAgICBwaXZvdFZhbEtleSxcbiAgICAgIHBpdm90QnksXG4gICAgICBzdWJSb3dzS2V5LFxuICAgICAgYWdncmVnYXRlZEtleSxcbiAgICAgIG9yaWdpbmFsS2V5LFxuICAgICAgaW5kZXhLZXksXG4gICAgICBncm91cGVkQnlQaXZvdEtleSxcbiAgICAgIC8vIEZpeGVkXG4gICAgICBmaXhlZENvbHVtbkluZGV4LFxuICAgICAgLy8gU3RhdGVcbiAgICAgIGxvYWRpbmcsXG4gICAgICBwYWdlU2l6ZSxcbiAgICAgIHBhZ2UsXG4gICAgICBzb3J0ZWQsXG4gICAgICBmaWx0ZXJlZCxcbiAgICAgIHJlc2l6ZWQsXG4gICAgICBleHBhbmRlZCxcbiAgICAgIHBhZ2VzLFxuICAgICAgb25FeHBhbmRlZENoYW5nZSxcbiAgICAgIC8vIENvbXBvbmVudHNcbiAgICAgIFRhYmxlV3JhcHBlcixcbiAgICAgIFRhYmxlQ29tcG9uZW50LFxuICAgICAgVGhlYWRDb21wb25lbnQsXG4gICAgICBUYm9keUNvbXBvbmVudCxcbiAgICAgIFRyQ29tcG9uZW50LFxuICAgICAgVGhDb21wb25lbnQsXG4gICAgICBUZENvbXBvbmVudCxcbiAgICAgIFRmb290Q29tcG9uZW50LFxuICAgICAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgICAgIExvYWRpbmdDb21wb25lbnQsXG4gICAgICBTdWJDb21wb25lbnQsXG4gICAgICBOb0RhdGFDb21wb25lbnQsXG4gICAgICBSZXNpemVyQ29tcG9uZW50LFxuICAgICAgRXhwYW5kZXJDb21wb25lbnQsXG4gICAgICBQaXZvdFZhbHVlQ29tcG9uZW50LFxuICAgICAgUGl2b3RDb21wb25lbnQsXG4gICAgICBBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgRmlsdGVyQ29tcG9uZW50LFxuICAgICAgUGFkUm93Q29tcG9uZW50LFxuICAgICAgLy8gRGF0YSBtb2RlbFxuICAgICAgcmVzb2x2ZWREYXRhLFxuICAgICAgYWxsVmlzaWJsZUNvbHVtbnMsXG4gICAgICBoZWFkZXJHcm91cHMsXG4gICAgICBoYXNIZWFkZXJHcm91cHMsXG4gICAgICAvLyBTb3J0ZWQgRGF0YVxuICAgICAgc29ydGVkRGF0YSxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nLFxuICAgICAgdGFibGVUb3RhbFdpZHRoLFxuICAgIH0gPSByZXNvbHZlZFN0YXRlXG5cbiAgICAvLyBQYWdpbmF0aW9uXG4gICAgY29uc3Qgc3RhcnRSb3cgPSBwYWdlU2l6ZSAqIHBhZ2VcbiAgICBjb25zdCBlbmRSb3cgPSBzdGFydFJvdyArIHBhZ2VTaXplXG4gICAgbGV0IHBhZ2VSb3dzID0gbWFudWFsID8gcmVzb2x2ZWREYXRhIDogc29ydGVkRGF0YS5zbGljZShzdGFydFJvdywgZW5kUm93KVxuICAgIGNvbnN0IG1pblJvd3MgPSB0aGlzLmdldE1pblJvd3MoKVxuICAgIGNvbnN0IHBhZFJvd3MgPSBfLnJhbmdlKE1hdGgubWF4KG1pblJvd3MgLSBwYWdlUm93cy5sZW5ndGgsIDApKVxuXG4gICAgY29uc3QgaGFzQ29sdW1uRm9vdGVyID0gYWxsVmlzaWJsZUNvbHVtbnMuc29tZShkID0+IGQuRm9vdGVyKVxuICAgIGNvbnN0IGhhc0ZpbHRlcnMgPSBmaWx0ZXJhYmxlIHx8IGFsbFZpc2libGVDb2x1bW5zLnNvbWUoZCA9PiBkLmZpbHRlcmFibGUpXG5cbiAgICBjb25zdCByZWN1cnNlUm93c1ZpZXdJbmRleCA9IChyb3dzLCBwYXRoID0gW10sIGluZGV4ID0gLTEpID0+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHJvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgICAgY29uc3Qgcm93V2l0aFZpZXdJbmRleCA9IHtcbiAgICAgICAgICAgIC4uLnJvdyxcbiAgICAgICAgICAgIF92aWV3SW5kZXg6IGluZGV4LFxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5jb25jYXQoW2ldKVxuICAgICAgICAgIGlmIChyb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldICYmIF8uZ2V0KGV4cGFuZGVkLCBuZXdQYXRoKSkge1xuICAgICAgICAgICAgO1tyb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldLCBpbmRleF0gPSByZWN1cnNlUm93c1ZpZXdJbmRleChcbiAgICAgICAgICAgICAgcm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSxcbiAgICAgICAgICAgICAgbmV3UGF0aCxcbiAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJvd1dpdGhWaWV3SW5kZXhcbiAgICAgICAgfSksXG4gICAgICAgIGluZGV4LFxuICAgICAgXVxuICAgIH1cbiAgICA7W3BhZ2VSb3dzXSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KHBhZ2VSb3dzKVxuXG4gICAgY29uc3QgY2FuUHJldmlvdXMgPSBwYWdlID4gMFxuICAgIGNvbnN0IGNhbk5leHQgPSBwYWdlICsgMSA8IHBhZ2VzXG5cbiAgICBsZXQgcm93SW5kZXggPSAtMVxuXG4gICAgY29uc3QgZmluYWxTdGF0ZSA9IHtcbiAgICAgIC4uLnJlc29sdmVkU3RhdGUsXG4gICAgICBzdGFydFJvdyxcbiAgICAgIGVuZFJvdyxcbiAgICAgIHBhZ2VSb3dzLFxuICAgICAgbWluUm93cyxcbiAgICAgIHBhZFJvd3MsXG4gICAgICBoYXNDb2x1bW5Gb290ZXIsXG4gICAgICBjYW5QcmV2aW91cyxcbiAgICAgIGNhbk5leHQsXG4gICAgfVxuXG4gICAgbGV0IGZpeGVkQ29sdW1uV2lkdGhcbiAgICBsZXQgcmF3Q29sdW1uc1dpZHRoID0gMFxuICAgIGxldCBmbG9vckNvbHVtbnNXaWR0aCA9IDBcblxuICAgIC8vIFZpc3VhbCBDb21wb25lbnRzXG5cbiAgICBjb25zdCBtYWtlQ29sR3JvdXAgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Y29sZ3JvdXA+XG4gICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlQ29sKX1cbiAgICAgICAgPC9jb2xncm91cD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cblxuICAgICAgY29uc3QgY29sZ3JvdXBDb2xQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0Q29sR3JvdXBDb2xQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkNvbGdyb3VwQ29sUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRDb2xHcm91cENvbFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uY29sR3JvdXBDb2xDbGFzc05hbWUsXG4gICAgICAgIGNvbGdyb3VwQ29sUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Db2xncm91cENvbFByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uY29sR3JvdXBDb2xTdHlsZSxcbiAgICAgICAgLi4uY29sZ3JvdXBDb2xQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uQ29sZ3JvdXBDb2xQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgbGV0IG1pbldpZHRoID0gY29sdW1uLm1pbldpZHRoXG4gICAgICBsZXQgbWF4V2lkdGggPSBjb2x1bW4ubWF4V2lkdGhcbiAgICAgIGxldCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIG1pbldpZHRoLFxuICAgICAgICAwXG4gICAgICApXG5cbiAgICAgIC8vIGNhbGN1bGF0ZSBweFxuICAgICAgaWYgKHRhYmxlVG90YWxXaWR0aCkge1xuICAgICAgICBjb25zdCB3aWR0aElzUGVyY2VudHMgPSBfLmlzUGVyY2VudHMod2lkdGgpXG4gICAgICAgIGNvbnN0IG1pbldpZHRoSXNQZXJjZW50cyA9IF8uaXNQZXJjZW50cyhtaW5XaWR0aClcbiAgICAgICAgY29uc3QgbWF4V2lkdGhJc1BlcmNlbnRzID0gXy5pc1BlcmNlbnRzKG1heFdpZHRoKVxuXG4gICAgICAgIGNvbnN0IHdpZHRoVmFsdWUgPSBwYXJzZUludCh3aWR0aCwgMTApXG4gICAgICAgIGNvbnN0IG1pbldpZHRoVmFsdWUgPSBtaW5XaWR0aCAmJiBwYXJzZUludChtaW5XaWR0aCwgMTApXG4gICAgICAgIGNvbnN0IG1heFdpZHRoVmFsdWUgPSBtYXhXaWR0aCAmJiBwYXJzZUludChtYXhXaWR0aCwgMTApXG5cbiAgICAgICAgd2lkdGggPSB3aWR0aElzUGVyY2VudHNcbiAgICAgICAgICA/IF8ucGVyY2VudHNUb1B4KHdpZHRoVmFsdWUsIHRhYmxlVG90YWxXaWR0aClcbiAgICAgICAgICA6IHdpZHRoVmFsdWVcblxuICAgICAgICBtaW5XaWR0aCA9IG1pbldpZHRoSXNQZXJjZW50c1xuICAgICAgICAgID8gXy5wZXJjZW50c1RvUHgobWluV2lkdGhWYWx1ZSwgdGFibGVUb3RhbFdpZHRoKVxuICAgICAgICAgIDogbWluV2lkdGhWYWx1ZVxuXG4gICAgICAgIG1heFdpZHRoID0gbWF4V2lkdGhJc1BlcmNlbnRzXG4gICAgICAgICAgPyBfLnBlcmNlbnRzVG9QeChtYXhXaWR0aFZhbHVlLCB0YWJsZVRvdGFsV2lkdGgpXG4gICAgICAgICAgOiBtYXhXaWR0aFZhbHVlXG5cbiAgICAgICAgd2lkdGggPSBfLmNsYW1wKHdpZHRoLCBtaW5XaWR0aCwgbWF4V2lkdGgpXG5cbiAgICAgICAgcmF3Q29sdW1uc1dpZHRoICs9IHdpZHRoXG4gICAgICAgIHdpZHRoID0gTWF0aC5mbG9vcih3aWR0aClcbiAgICAgICAgZmxvb3JDb2x1bW5zV2lkdGggKz0gd2lkdGhcblxuICAgICAgICBjb25zdCBkaWZmID0gTWF0aC5mbG9vcihyYXdDb2x1bW5zV2lkdGggLSBmbG9vckNvbHVtbnNXaWR0aClcblxuICAgICAgICBpZiAoZGlmZiA+PSAxKSB7XG4gICAgICAgICAgd2lkdGggKz0gZGlmZlxuICAgICAgICAgIGZsb29yQ29sdW1uc1dpZHRoICs9IGRpZmZcbiAgICAgICAgfVxuXG4gICAgICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpID09PSBmaXhlZENvbHVtbkluZGV4XG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIGZpeGVkQ29sdW1uV2lkdGggPSB3aWR0aFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0R1bW15ID0gaSA9PT0gYWxsVmlzaWJsZUNvbHVtbnMubGVuZ3RoIC0gMVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Y29sXG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncnQtY29sZ3JvdXAtY29sJywgY2xhc3NlcywgeyAnLWR1bW15JzogaXNEdW1teSB9KX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlckdyb3VwcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRHcm91cFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctaGVhZGVyR3JvdXBzJywgdGhlYWRHcm91cFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3RoZWFkR3JvdXBQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udGhlYWRHcm91cFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRHcm91cFRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkR3JvdXBUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkR3JvdXBUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAobWFrZUhlYWRlckdyb3VwKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXJHcm91cCA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkR3JvdXBUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRHcm91cFRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2xTcGFuID0gY29sdW1uLmNvbHVtbnMubGVuZ3RoXG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkR3JvdXBUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICAgIGNvbFNwYW4sXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRHVtbXkgPSBpID09PSBoZWFkZXJHcm91cHMubGVuZ3RoIC0gMVxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPT09IGZpeGVkQ29sdW1uSW5kZXhcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5XaWR0aFxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb250ZW50ID0gXy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkhlYWRlciwge1xuICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgeyAnLWR1bW15JzogaXNEdW1teSwgJy1lbXB0eSc6ICFjb250ZW50LCAnLWZpeGVkJzogaXNGaXhlZCB9KX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1oZWFkZXInLCB0aGVhZFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3RoZWFkUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRoZWFkUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZFRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VIZWFkZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHNvcnQgPSBzb3J0ZWQuZmluZChkID0+IGQuaWQgPT09IGNvbHVtbi5pZClcbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHRoZWFkVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgdGhlYWRUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzUmVzaXphYmxlID0gXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnJlc2l6YWJsZSwgcmVzaXphYmxlLCBmYWxzZSlcbiAgICAgIGNvbnN0IHJlc2l6ZXIgPSBpc1Jlc2l6YWJsZVxuICAgICAgICA/ICg8UmVzaXplckNvbXBvbmVudFxuICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoY29sdW1uLCBlLCBmYWxzZSl9XG4gICAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoY29sdW1uLCBlLCB0cnVlKX1cbiAgICAgICAgICB7Li4ucmVzaXplclByb3BzfVxuICAgICAgICAvPilcbiAgICAgICAgOiBudWxsXG5cbiAgICAgIGNvbnN0IGlzU29ydGFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChjb2x1bW4uc29ydGFibGUsIHNvcnRhYmxlLCBmYWxzZSlcbiAgICAgIGNvbnN0IGlzRHVtbXkgPSBpID09PSBhbGxWaXNpYmxlQ29sdW1ucy5sZW5ndGggLSAxXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA9PT0gZml4ZWRDb2x1bW5JbmRleFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbldpZHRoXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgJ3J0LXJlc2l6YWJsZS1oZWFkZXInLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnLWN1cnNvci1wb2ludGVyJzogaXNTb3J0YWJsZSxcbiAgICAgICAgICAgICAgJy1zb3J0LWRlc2MnOiBzb3J0ICYmIHNvcnQuZGVzYyxcbiAgICAgICAgICAgICAgJy1zb3J0LWFzYyc6IHNvcnQgJiYgIXNvcnQuZGVzYyxcbiAgICAgICAgICAgICAgJy1oaWRkZW4nOiAhc2hvdyxcbiAgICAgICAgICAgICAgJy1kdW1teSc6IGlzRHVtbXksXG4gICAgICAgICAgICAgICctZml4ZWQnOiBpc0ZpeGVkLFxuICAgICAgICAgICAgICAncnQtaGVhZGVyLXBpdm90JzogcGl2b3RCeSAmJiBwaXZvdEJ5LnNsaWNlKDAsIC0xKS5pbmNsdWRlcyhjb2x1bW4uaWQpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB0b2dnbGVTb3J0PXtlID0+IHtcbiAgICAgICAgICAgIGlzU29ydGFibGUgJiYgdGhpcy5zb3J0Q29sdW1uKGNvbHVtbiwgZS5zaGlmdEtleSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3J0LXJlc2l6YWJsZS1oZWFkZXItY29udGVudCc+XG4gICAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkhlYWRlciwge1xuICAgICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtyZXNpemVyfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VGaWx0ZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctZmlsdGVycycsIHRoZWFkRmlsdGVyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17dGhlYWRGaWx0ZXJQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udGhlYWRGaWx0ZXJQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkRmlsdGVyVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRGaWx0ZXJUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkRmlsdGVyVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUZpbHRlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlRmlsdGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEZpbHRlclRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsdGVyID0gZmlsdGVyZWQuZmluZChmaWx0ZXIgPT4gZmlsdGVyLmlkID09PSBjb2x1bW4uaWQpXG5cbiAgICAgIGNvbnN0IFJlc29sdmVkRmlsdGVyQ29tcG9uZW50ID0gY29sdW1uLkZpbHRlciB8fCBGaWx0ZXJDb21wb25lbnRcblxuICAgICAgY29uc3QgaXNGaWx0ZXJhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIGNvbHVtbi5maWx0ZXJhYmxlLFxuICAgICAgICBmaWx0ZXJhYmxlLFxuICAgICAgICBmYWxzZVxuICAgICAgKVxuXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA9PT0gZml4ZWRDb2x1bW5JbmRleFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbldpZHRoXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgeyAnLWZpeGVkJzogaXNGaXhlZCwgJy1lbXB0eSc6ICFpc0ZpbHRlcmFibGUgfSl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0ZpbHRlcmFibGVcbiAgICAgICAgICAgID8gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgIFJlc29sdmVkRmlsdGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdmFsdWUgPT4gdGhpcy5maWx0ZXJDb2x1bW4oY29sdW1uLCB2YWx1ZSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRlZmF1bHRQcm9wcy5jb2x1bW4uRmlsdGVyXG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZ2VSb3cgPSAocm93LCBpLCBwYXRoID0gW10pID0+IHtcbiAgICAgIGNvbnN0IHJvd0luZm8gPSB7XG4gICAgICAgIG9yaWdpbmFsOiByb3dbb3JpZ2luYWxLZXldLFxuICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgaW5kZXg6IHJvd1tpbmRleEtleV0sXG4gICAgICAgIHZpZXdJbmRleDogKytyb3dJbmRleCxcbiAgICAgICAgbGV2ZWw6IHBhdGgubGVuZ3RoLFxuICAgICAgICBuZXN0aW5nUGF0aDogcGF0aC5jb25jYXQoW2ldKSxcbiAgICAgICAgYWdncmVnYXRlZDogcm93W2FnZ3JlZ2F0ZWRLZXldLFxuICAgICAgICBncm91cGVkQnlQaXZvdDogcm93W2dyb3VwZWRCeVBpdm90S2V5XSxcbiAgICAgICAgc3ViUm93czogcm93W3N1YlJvd3NLZXldLFxuICAgICAgfVxuICAgICAgY29uc3QgaXNFeHBhbmRlZCA9IF8uZ2V0KGV4cGFuZGVkLCByb3dJbmZvLm5lc3RpbmdQYXRoKVxuICAgICAgY29uc3QgdHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VHJQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gW1xuICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICBrZXk9e3Jvd0luZm8ubmVzdGluZ1BhdGguam9pbignXycpfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIHRyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgcm93Ll92aWV3SW5kZXggJSAyID8gJy1ldmVuJyA6ICctb2RkJ1xuICAgICAgICAgICl9XG4gICAgICAgICAgc3R5bGU9e3RyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbiwgaTIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgICAgICAgIGNvbnN0IHRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgICAgICAgIGdldFRkUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgY29sdW1uLCB0aGlzKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCBjb2x1bW4sIHRoaXMpXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgICAgICAgIHRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgICAgICAgLi4udGRQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaXNGaXhlZCA9IGkyID09PSBmaXhlZENvbHVtbkluZGV4XG5cbiAgICAgICAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uV2lkdGhcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY2VsbEluZm8gPSB7XG4gICAgICAgICAgICAgIC4uLnJvd0luZm8sXG4gICAgICAgICAgICAgIGlzRXhwYW5kZWQsXG4gICAgICAgICAgICAgIGNvbHVtbjogeyAuLi5jb2x1bW4gfSxcbiAgICAgICAgICAgICAgdmFsdWU6IHJvd0luZm8ucm93W2NvbHVtbi5pZF0sXG4gICAgICAgICAgICAgIHBpdm90ZWQ6IGNvbHVtbi5waXZvdGVkLFxuICAgICAgICAgICAgICBleHBhbmRlcjogY29sdW1uLmV4cGFuZGVyLFxuICAgICAgICAgICAgICByZXNpemVkLFxuICAgICAgICAgICAgICBzaG93LFxuICAgICAgICAgICAgICB0ZFByb3BzLFxuICAgICAgICAgICAgICBjb2x1bW5Qcm9wcyxcbiAgICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICAgc3R5bGVzLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNlbGxJbmZvLnZhbHVlXG5cbiAgICAgICAgICAgIGxldCBpbnRlcmFjdGlvblByb3BzXG4gICAgICAgICAgICBsZXQgaXNCcmFuY2hcbiAgICAgICAgICAgIGxldCBpc1ByZXZpZXdcblxuICAgICAgICAgICAgY29uc3Qgb25FeHBhbmRlckNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICAgIGxldCBuZXdFeHBhbmRlZCA9IF8uY2xvbmUoZXhwYW5kZWQpXG4gICAgICAgICAgICAgIGlmIChpc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgbmV3RXhwYW5kZWQgPSBfLnNldChuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIGZhbHNlKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0V4cGFuZGVkID0gXy5zZXQobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCB7fSlcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlV2l0aERhdGEoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ6IG5ld0V4cGFuZGVkLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25FeHBhbmRlZENoYW5nZSAmJlxuICAgICAgICAgICAgICAgICAgICBvbkV4cGFuZGVkQ2hhbmdlKG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwgZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBhIHN0YW5kYXJkIGNlbGxcbiAgICAgICAgICAgIGxldCByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgY29sdW1uLkNlbGwsXG4gICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAvLyBSZXNvbHZlIFJlbmRlcmVyc1xuICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLkFnZ3JlZ2F0ZWQgfHxcbiAgICAgICAgICAgICAgKCFjb2x1bW4uYWdncmVnYXRlID8gQWdncmVnYXRlZENvbXBvbmVudCA6IGNvbHVtbi5DZWxsKVxuICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCA9XG4gICAgICAgICAgICAgIGNvbHVtbi5FeHBhbmRlciB8fCBFeHBhbmRlckNvbXBvbmVudFxuICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgY29sdW1uLlBpdm90VmFsdWUgfHwgUGl2b3RWYWx1ZUNvbXBvbmVudFxuICAgICAgICAgICAgY29uc3QgRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnQgPVxuICAgICAgICAgICAgICBQaXZvdENvbXBvbmVudCB8fFxuICAgICAgICAgICAgICAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgPFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRQaXZvdENvbXBvbmVudCA9XG4gICAgICAgICAgICAgIGNvbHVtbi5QaXZvdCB8fCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudFxuXG4gICAgICAgICAgICAvLyBJcyB0aGlzIGNlbGwgZXhwYW5kYWJsZT9cbiAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkIHx8IGNlbGxJbmZvLmV4cGFuZGVyKSB7XG4gICAgICAgICAgICAgIC8vIE1ha2UgaXQgZXhwYW5kYWJsZSBieSBkZWZ1YWx0XG4gICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgPSB0cnVlXG4gICAgICAgICAgICAgIGludGVyYWN0aW9uUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgb25DbGljazogb25FeHBhbmRlckNsaWNrLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIElmIHBpdm90ZWQsIGhhcyBubyBzdWJSb3dzLCBhbmQgZG9lcyBub3QgaGF2ZSBhIHN1YkNvbXBvbmVudCwgZG8gbm90IG1ha2UgZXhwYW5kYWJsZVxuICAgICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCkge1xuICAgICAgICAgICAgICAgIGlmICghY2VsbEluZm8uc3ViUm93cykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFTdWJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uUHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCkge1xuICAgICAgICAgICAgICAvLyBJcyB0aGlzIGNvbHVtbiBhIGJyYW5jaD9cbiAgICAgICAgICAgICAgaXNCcmFuY2ggPVxuICAgICAgICAgICAgICAgIHJvd0luZm8ucm93W3Bpdm90SURLZXldID09PSBjb2x1bW4uaWQgJiYgY2VsbEluZm8uc3ViUm93c1xuICAgICAgICAgICAgICAvLyBTaG91bGQgdGhpcyBjb2x1bW4gYmUgYmxhbms/XG4gICAgICAgICAgICAgIGlzUHJldmlldyA9XG4gICAgICAgICAgICAgICAgcGl2b3RCeS5pbmRleE9mKGNvbHVtbi5pZCkgPlxuICAgICAgICAgICAgICAgICAgcGl2b3RCeS5pbmRleE9mKHJvd0luZm8ucm93W3Bpdm90SURLZXldKSAmJiBjZWxsSW5mby5zdWJSb3dzXG4gICAgICAgICAgICAgIC8vIFBpdm90IENlbGwgUmVuZGVyIE92ZXJyaWRlXG4gICAgICAgICAgICAgIGlmIChpc0JyYW5jaCkge1xuICAgICAgICAgICAgICAgIC8vIGlzUGl2b3RcbiAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgIFJlc29sdmVkUGl2b3RDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmNlbGxJbmZvLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm93W3Bpdm90VmFsS2V5XSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICByb3dbcGl2b3RWYWxLZXldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzUHJldmlldykge1xuICAgICAgICAgICAgICAgIC8vIFNob3cgdGhlIHBpdm90IHByZXZpZXdcbiAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgIFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGxJbmZvLmFnZ3JlZ2F0ZWQpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNlbGxJbmZvLmV4cGFuZGVyKSB7XG4gICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgcm93W3Bpdm90VmFsS2V5XVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGlmIChwaXZvdEJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLmdyb3VwZWRCeVBpdm90KSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghY2VsbEluZm8uc3ViUm93cyAmJiAhU3ViQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgY2VsbFxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAga2V5PXtpMiArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgICAgICAgIXNob3cgJiYgJy1oaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSAmJiAncnQtZXhwYW5kYWJsZScsXG4gICAgICAgICAgICAgICAgICAoaXNCcmFuY2ggfHwgaXNQcmV2aWV3KSAmJiAncnQtcGl2b3QnLFxuICAgICAgICAgICAgICAgICAgaXNGaXhlZCAmJiAnLWZpeGVkJyxcbiAgICAgICAgICAgICAgICAgIChpc0ZpeGVkICYmICFyZXNvbHZlZENlbGwpICYmICctZW1wdHknXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgICAgICAgIHsuLi5pbnRlcmFjdGlvblByb3BzfVxuICAgICAgICAgICAgICAgIHsuLi50ZFByb3BzLnJlc3R9XG4gICAgICAgICAgICAgICAgey4uLmNvbHVtblByb3BzLnJlc3R9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cmVzb2x2ZWRDZWxsfVxuICAgICAgICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RyQ29tcG9uZW50PixcbiAgICAgICAgcm93SW5mby5zdWJSb3dzICYmXG4gICAgICAgICAgaXNFeHBhbmRlZCAmJlxuICAgICAgICAgIHJvd0luZm8uc3ViUm93cy5tYXAoKGQsIGkpID0+XG4gICAgICAgICAgICBtYWtlUGFnZVJvdyhkLCBpLCByb3dJbmZvLm5lc3RpbmdQYXRoKVxuICAgICAgICAgICksXG4gICAgICAgIFN1YkNvbXBvbmVudCAmJlxuICAgICAgICAgICFyb3dJbmZvLnN1YlJvd3MgJiZcbiAgICAgICAgICBpc0V4cGFuZGVkICYmXG4gICAgICAgICAgU3ViQ29tcG9uZW50KHJvd0luZm8pLFxuICAgICAgXVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWRSb3cgPSAocm93LCBpKSA9PiB7XG4gICAgICBjb25zdCB0clByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgJy1wYWRSb3cnLFxuICAgICAgICAgICAgKHBhZ2VSb3dzLmxlbmd0aCArIGkpICUgMiA/ICctZXZlbicgOiAnLW9kZCcsXG4gICAgICAgICAgICB0clByb3BzLmNsYXNzTmFtZVxuICAgICAgICAgICl9XG4gICAgICAgICAgc3R5bGU9e3RyUHJvcHMuc3R5bGUgfHwge319XG4gICAgICAgID5cbiAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VQYWRDb2x1bW4pfVxuICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWRDb2x1bW4gPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgdGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi50ZFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsICFzaG93ICYmICctaGlkZGVuJyl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4udGRQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KFBhZFJvd0NvbXBvbmVudCl9XG4gICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbHVtbkZvb3RlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0Rm9vdFByb3BzID0gZ2V0VGZvb3RQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIGNvbnN0IHRGb290VHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGZvb3RUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRmb290Q29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXt0Rm9vdFByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICBzdHlsZT17dEZvb3RQcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4udEZvb3RQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModEZvb3RUclByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICBzdHlsZT17dEZvb3RUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRGb290VHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUNvbHVtbkZvb3Rlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UZm9vdENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sdW1uRm9vdGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgY29uc3QgdEZvb3RUZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZm9vdFRkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uRm9vdGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRGb290ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgdEZvb3RUZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Gb290ZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4udEZvb3RUZFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Gb290ZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCAhc2hvdyAmJiAnLWhpZGRlbicpfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgey4uLmNvbHVtblByb3BzLnJlc3R9XG4gICAgICAgICAgey4uLnRGb290VGRQcm9wcy5yZXN0fVxuICAgICAgICAgIHsuLi5jb2x1bW5Gb290ZXJQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5Gb290ZXIsIHtcbiAgICAgICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb25Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0UGFnaW5hdGlvblByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBhZ2luYXRpb25Db21wb25lbnRcbiAgICAgICAgICB7Li4ucmVzb2x2ZWRTdGF0ZX1cbiAgICAgICAgICBwYWdlcz17cGFnZXN9XG4gICAgICAgICAgY2FuUHJldmlvdXM9e2NhblByZXZpb3VzfVxuICAgICAgICAgIGNhbk5leHQ9e2Nhbk5leHR9XG4gICAgICAgICAgb25QYWdlQ2hhbmdlPXt0aGlzLm9uUGFnZUNoYW5nZX1cbiAgICAgICAgICBvblBhZ2VTaXplQ2hhbmdlPXt0aGlzLm9uUGFnZVNpemVDaGFuZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPXtwYWdpbmF0aW9uUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgIHN0eWxlPXtwYWdpbmF0aW9uUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnBhZ2luYXRpb25Qcm9wcy5yZXN0fVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHJvb3RQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIClcbiAgICBjb25zdCB0YWJsZVByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0VGFibGVQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICApXG4gICAgY29uc3QgdEJvZHlQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFRib2R5UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgKVxuICAgIGNvbnN0IGxvYWRpbmdQcm9wcyA9IGdldExvYWRpbmdQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICBjb25zdCBub0RhdGFQcm9wcyA9IGdldE5vRGF0YVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIGNvbnN0IHJlc2l6ZXJQcm9wcyA9IGdldFJlc2l6ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcblxuICAgIGNvbnN0IG1ha2VUYWJsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBtYWtlUGFnaW5hdGlvbigpXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdSZWFjdFRhYmxlJywgY2xhc3NOYW1lLCByb290UHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgICAuLi5yb290UHJvcHMuc3R5bGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucm9vdFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7c2hvd1BhZ2luYXRpb24gJiYgc2hvd1BhZ2luYXRpb25Ub3BcbiAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9J3BhZ2luYXRpb24tdG9wJz5cbiAgICAgICAgICAgICAge3BhZ2luYXRpb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8VGFibGVXcmFwcGVyIHdyYXBwZXJSZWY9eyhjKSA9PiB0aGlzLnRhYmxlV3JhcHBlciA9IGN9PlxuICAgICAgICAgICAgPFRhYmxlQ29tcG9uZW50XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICB0YWJsZVByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSZXNpemluZyA/ICdydC1yZXNpemluZycgOiAnJ1xuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBzdHlsZT17dGFibGVQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgICAgey4uLnRhYmxlUHJvcHMucmVzdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge21ha2VDb2xHcm91cCgpfVxuICAgICAgICAgICAgICB7aGFzSGVhZGVyR3JvdXBzID8gbWFrZUhlYWRlckdyb3VwcygpIDogbnVsbH1cbiAgICAgICAgICAgICAge21ha2VIZWFkZXJzKCl9XG4gICAgICAgICAgICAgIHtoYXNGaWx0ZXJzID8gbWFrZUZpbHRlcnMoKSA6IG51bGx9XG4gICAgICAgICAgICAgIDxUYm9keUNvbXBvbmVudFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Qm9keVByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3RCb2R5UHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgICAgey4uLnRCb2R5UHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwYWdlUm93cy5tYXAoKGQsIGkpID0+IG1ha2VQYWdlUm93KGQsIGkpKX1cbiAgICAgICAgICAgICAgICB7cGFkUm93cy5tYXAobWFrZVBhZFJvdyl9XG4gICAgICAgICAgICAgIDwvVGJvZHlDb21wb25lbnQ+XG4gICAgICAgICAgICAgIHtoYXNDb2x1bW5Gb290ZXIgPyBtYWtlQ29sdW1uRm9vdGVycygpIDogbnVsbH1cbiAgICAgICAgICAgIDwvVGFibGVDb21wb25lbnQ+XG4gICAgICAgICAgPC9UYWJsZVdyYXBwZXI+XG4gICAgICAgICAge3Nob3dQYWdpbmF0aW9uICYmIHNob3dQYWdpbmF0aW9uQm90dG9tXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdwYWdpbmF0aW9uLWJvdHRvbSc+XG4gICAgICAgICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgeyFwYWdlUm93cy5sZW5ndGggJiZcbiAgICAgICAgICAgIDxOb0RhdGFDb21wb25lbnQgey4uLm5vRGF0YVByb3BzfT5cbiAgICAgICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KG5vRGF0YVRleHQpfVxuICAgICAgICAgICAgPC9Ob0RhdGFDb21wb25lbnQ+fVxuICAgICAgICAgIDxMb2FkaW5nQ29tcG9uZW50XG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgbG9hZGluZ1RleHQ9e2xvYWRpbmdUZXh0fVxuICAgICAgICAgICAgey4uLmxvYWRpbmdQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBjaGlsZFByb3BzIGFyZSBvcHRpb25hbGx5IHBhc3NlZCB0byBhIGZ1bmN0aW9uLWFzLWEtY2hpbGRcbiAgICByZXR1cm4gY2hpbGRyZW4gPyBjaGlsZHJlbihmaW5hbFN0YXRlLCBtYWtlVGFibGUsIHRoaXMpIDogbWFrZVRhYmxlKClcbiAgfVxufVxuIl19