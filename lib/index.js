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

      var fixedColumnWidth = 0;
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

        var isFixed = i === fixedColumnIndex;

        if (isFixed) {
          styles.width = fixedColumnWidth;
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

        var isFixed = i === fixedColumnIndex;

        if (isFixed) {
          styles.width = fixedColumnWidth;
          console.log(styles);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0Iiwic2V0U3RhdGUiLCJ0YWJsZVRvdGFsV2lkdGgiLCJ0YWJsZVdyYXBwZXIiLCJvZmZzZXRXaWR0aCIsInJlc29sdmVkU3RhdGUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZ2V0UHJvcHMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0Q29sR3JvdXBDb2xQcm9wcyIsImdldFRoZWFkR3JvdXBQcm9wcyIsImdldFRoZWFkR3JvdXBUclByb3BzIiwiZ2V0VGhlYWRHcm91cFRoUHJvcHMiLCJnZXRUaGVhZFByb3BzIiwiZ2V0VGhlYWRUclByb3BzIiwiZ2V0VGhlYWRUaFByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJQcm9wcyIsImdldFRoZWFkRmlsdGVyVHJQcm9wcyIsImdldFRoZWFkRmlsdGVyVGhQcm9wcyIsImdldFRib2R5UHJvcHMiLCJnZXRUclByb3BzIiwiZ2V0VGRQcm9wcyIsImdldFRmb290UHJvcHMiLCJnZXRUZm9vdFRyUHJvcHMiLCJnZXRUZm9vdFRkUHJvcHMiLCJnZXRQYWdpbmF0aW9uUHJvcHMiLCJnZXRMb2FkaW5nUHJvcHMiLCJnZXROb0RhdGFQcm9wcyIsImdldFJlc2l6ZXJQcm9wcyIsInNob3dQYWdpbmF0aW9uIiwic2hvd1BhZ2luYXRpb25Ub3AiLCJzaG93UGFnaW5hdGlvbkJvdHRvbSIsIm1hbnVhbCIsImxvYWRpbmdUZXh0Iiwibm9EYXRhVGV4dCIsInNvcnRhYmxlIiwicmVzaXphYmxlIiwiZmlsdGVyYWJsZSIsImZvb3RlclBsYWNlbWVudCIsInBpdm90SURLZXkiLCJwaXZvdFZhbEtleSIsInBpdm90QnkiLCJzdWJSb3dzS2V5IiwiYWdncmVnYXRlZEtleSIsIm9yaWdpbmFsS2V5IiwiaW5kZXhLZXkiLCJncm91cGVkQnlQaXZvdEtleSIsImZpeGVkQ29sdW1uSW5kZXgiLCJsb2FkaW5nIiwicGFnZXMiLCJvbkV4cGFuZGVkQ2hhbmdlIiwiVGFibGVXcmFwcGVyIiwiVGFibGVDb21wb25lbnQiLCJUaGVhZENvbXBvbmVudCIsIlRib2R5Q29tcG9uZW50IiwiVHJDb21wb25lbnQiLCJUaENvbXBvbmVudCIsIlRkQ29tcG9uZW50IiwiVGZvb3RDb21wb25lbnQiLCJQYWdpbmF0aW9uQ29tcG9uZW50IiwiTG9hZGluZ0NvbXBvbmVudCIsIlN1YkNvbXBvbmVudCIsIk5vRGF0YUNvbXBvbmVudCIsIlJlc2l6ZXJDb21wb25lbnQiLCJFeHBhbmRlckNvbXBvbmVudCIsIlBpdm90VmFsdWVDb21wb25lbnQiLCJQaXZvdENvbXBvbmVudCIsIkFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJGaWx0ZXJDb21wb25lbnQiLCJQYWRSb3dDb21wb25lbnQiLCJyZXNvbHZlZERhdGEiLCJhbGxWaXNpYmxlQ29sdW1ucyIsImhlYWRlckdyb3VwcyIsImhhc0hlYWRlckdyb3VwcyIsInNvcnRlZERhdGEiLCJzdGFydFJvdyIsImVuZFJvdyIsInBhZ2VSb3dzIiwic2xpY2UiLCJtaW5Sb3dzIiwicGFkUm93cyIsInJhbmdlIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsImhhc0NvbHVtbkZvb3RlciIsInNvbWUiLCJkIiwiRm9vdGVyIiwiaGFzRmlsdGVycyIsInJlY3Vyc2VSb3dzVmlld0luZGV4Iiwicm93cyIsInBhdGgiLCJpbmRleCIsIm1hcCIsInJvdyIsImkiLCJyb3dXaXRoVmlld0luZGV4IiwiX3ZpZXdJbmRleCIsIm5ld1BhdGgiLCJjb25jYXQiLCJnZXQiLCJjYW5QcmV2aW91cyIsImNhbk5leHQiLCJyb3dJbmRleCIsImZpbmFsU3RhdGUiLCJmaXhlZENvbHVtbldpZHRoIiwicmF3Q29sdW1uc1dpZHRoIiwiZmxvb3JDb2x1bW5zV2lkdGgiLCJtYWtlQ29sR3JvdXAiLCJtYWtlQ29sIiwiY29sdW1uIiwicmVzaXplZENvbCIsImZpbmQiLCJ4IiwiaWQiLCJjb2xncm91cENvbFByb3BzIiwic3BsaXRQcm9wcyIsInVuZGVmaW5lZCIsImNvbHVtbkNvbGdyb3VwQ29sUHJvcHMiLCJjbGFzc2VzIiwiY29sR3JvdXBDb2xDbGFzc05hbWUiLCJzdHlsZXMiLCJjb2xHcm91cENvbFN0eWxlIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIndpZHRoIiwiZ2V0Rmlyc3REZWZpbmVkIiwidmFsdWUiLCJ3aWR0aElzUGVyY2VudHMiLCJpc1BlcmNlbnRzIiwibWluV2lkdGhJc1BlcmNlbnRzIiwibWF4V2lkdGhJc1BlcmNlbnRzIiwid2lkdGhWYWx1ZSIsInBhcnNlSW50IiwibWluV2lkdGhWYWx1ZSIsIm1heFdpZHRoVmFsdWUiLCJwZXJjZW50c1RvUHgiLCJjbGFtcCIsImZsb29yIiwiZGlmZiIsImlzRml4ZWQiLCJpc0R1bW15IiwibWFrZUhlYWRlckdyb3VwcyIsInRoZWFkR3JvdXBQcm9wcyIsInRoZWFkR3JvdXBUclByb3BzIiwicmVzdCIsIm1ha2VIZWFkZXJHcm91cCIsInRoZWFkR3JvdXBUaFByb3BzIiwiY29sdW1uSGVhZGVyUHJvcHMiLCJnZXRIZWFkZXJQcm9wcyIsImhlYWRlckNsYXNzTmFtZSIsImhlYWRlclN0eWxlIiwiY29sU3BhbiIsImNvbHVtbnMiLCJjb250ZW50Iiwibm9ybWFsaXplQ29tcG9uZW50IiwiSGVhZGVyIiwiZGF0YSIsIm1ha2VIZWFkZXJzIiwidGhlYWRQcm9wcyIsInRoZWFkVHJQcm9wcyIsIm1ha2VIZWFkZXIiLCJzb3J0Iiwic2hvdyIsInRoZWFkVGhQcm9wcyIsImlzUmVzaXphYmxlIiwicmVzaXplciIsImUiLCJyZXNpemVyUHJvcHMiLCJpc1NvcnRhYmxlIiwiZGVzYyIsImluY2x1ZGVzIiwic2hpZnRLZXkiLCJtYWtlRmlsdGVycyIsInRoZWFkRmlsdGVyUHJvcHMiLCJ0aGVhZEZpbHRlclRyUHJvcHMiLCJtYWtlRmlsdGVyIiwidGhlYWRGaWx0ZXJUaFByb3BzIiwiZmlsdGVyIiwiUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQiLCJGaWx0ZXIiLCJpc0ZpbHRlcmFibGUiLCJvbkNoYW5nZSIsIm1ha2VQYWdlUm93Iiwicm93SW5mbyIsIm9yaWdpbmFsIiwidmlld0luZGV4IiwibGV2ZWwiLCJuZXN0aW5nUGF0aCIsImFnZ3JlZ2F0ZWQiLCJncm91cGVkQnlQaXZvdCIsInN1YlJvd3MiLCJpc0V4cGFuZGVkIiwidHJQcm9wcyIsImpvaW4iLCJpMiIsInRkUHJvcHMiLCJjb2x1bW5Qcm9wcyIsImNlbGxJbmZvIiwicGl2b3RlZCIsImV4cGFuZGVyIiwiaW50ZXJhY3Rpb25Qcm9wcyIsImlzQnJhbmNoIiwiaXNQcmV2aWV3Iiwib25FeHBhbmRlckNsaWNrIiwibmV3RXhwYW5kZWQiLCJjbG9uZSIsInNldCIsInNldFN0YXRlV2l0aERhdGEiLCJyZXNvbHZlZENlbGwiLCJDZWxsIiwiUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50IiwiQWdncmVnYXRlZCIsImFnZ3JlZ2F0ZSIsIlJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQiLCJFeHBhbmRlciIsIlJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCIsIlBpdm90VmFsdWUiLCJEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlJlc29sdmVkUGl2b3RDb21wb25lbnQiLCJQaXZvdCIsImV4cGFuZGFibGUiLCJvbkNsaWNrIiwiaW5kZXhPZiIsIm1ha2VQYWRSb3ciLCJtYWtlUGFkQ29sdW1uIiwibWFrZUNvbHVtbkZvb3RlcnMiLCJ0Rm9vdFByb3BzIiwidEZvb3RUclByb3BzIiwibWFrZUNvbHVtbkZvb3RlciIsInRGb290VGRQcm9wcyIsImNvbHVtbkZvb3RlclByb3BzIiwiZ2V0Rm9vdGVyUHJvcHMiLCJjb25zb2xlIiwibG9nIiwibWFrZVBhZ2luYXRpb24iLCJwYWdpbmF0aW9uUHJvcHMiLCJyb290UHJvcHMiLCJ0YWJsZVByb3BzIiwidEJvZHlQcm9wcyIsImxvYWRpbmdQcm9wcyIsIm5vRGF0YVByb3BzIiwiZGlzcGxheUZvb3RlclRvcCIsImRpc3BsYXlGb290ZXJCb3R0b20iLCJtYWtlVGFibGUiLCJjb2xHcm91cCIsInBhZ2luYXRpb24iLCJmb290ZXIiLCJjIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBSkE7OztBQU1PLElBQU1BLHdFQUFOOztJQUVjQyxVOzs7QUFHbkIsc0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFHbEIsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUNBLFVBQUtFLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkYsSUFBbkIsT0FBckI7QUFDQSxVQUFLRyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJILElBQW5CLE9BQXJCO0FBQ0EsVUFBS0ksY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9C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QkFBVXdGLFlBQVlqRyxDQUFaLEVBQWVTLENBQWYsQ0FBVjtBQUFBLGlCQUFiLENBTEg7QUFNR2hCLHdCQUFRYyxHQUFSLENBQVltSSxVQUFaO0FBTkgsZUFiRjtBQXFCR21CLHFDQUF1Qkk7QUFyQjFCO0FBREYsV0FiRjtBQXNDRzNOLDRCQUFrQkUsb0JBQWxCLEdBQ0c7QUFBQTtBQUFBLGNBQUssV0FBVSxtQkFBZjtBQUNDd047QUFERCxXQURILEdBSUcsSUExQ047QUEyQ0csV0FBQzFLLFNBQVNPLE1BQVYsSUFDQztBQUFDLDJCQUFEO0FBQXFCOEosdUJBQXJCO0FBQ0csNEJBQUV0RixrQkFBRixDQUFxQjFILFVBQXJCO0FBREgsV0E1Q0o7QUErQ0Usd0NBQUMsZ0JBQUQ7QUFDRSxxQkFBU2MsT0FEWDtBQUVFLHlCQUFhZjtBQUZmLGFBR01nTixZQUhOO0FBL0NGLFNBREY7QUF1REQsT0EzREQ7O0FBNkRBO0FBQ0EsYUFBTzdPLFdBQVdBLFNBQVNxRyxVQUFULEVBQXFCNEksU0FBckIsRUFBZ0MsSUFBaEMsQ0FBWCxHQUFtREEsV0FBMUQ7QUFDRDs7OztFQXgrQnFDLHVCQUFRLDBDQUFSLEM7O0FBQW5CdlIsVSxDQUNaNFIsWTtrQkFEWTVSLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbi8vXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IExpZmVjeWNsZSBmcm9tICcuL2xpZmVjeWNsZSdcbmltcG9ydCBNZXRob2RzIGZyb20gJy4vbWV0aG9kcydcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0UHJvcHMnXG5cbmV4cG9ydCBjb25zdCBSZWFjdFRhYmxlRGVmYXVsdHMgPSBkZWZhdWx0UHJvcHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUYWJsZSBleHRlbmRzIE1ldGhvZHMoTGlmZWN5Y2xlKENvbXBvbmVudCkpIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wc1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXREYXRhTW9kZWwgPSB0aGlzLmdldERhdGFNb2RlbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRTb3J0ZWREYXRhID0gdGhpcy5nZXRTb3J0ZWREYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmZpcmVGZXRjaERhdGEgPSB0aGlzLmZpcmVGZXRjaERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0UHJvcE9yU3RhdGUgPSB0aGlzLmdldFByb3BPclN0YXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFN0YXRlT3JQcm9wID0gdGhpcy5nZXRTdGF0ZU9yUHJvcC5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLnNvcnREYXRhID0gdGhpcy5zb3J0RGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRNaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZUNoYW5nZSA9IHRoaXMub25QYWdlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZVNpemVDaGFuZ2UgPSB0aGlzLm9uUGFnZVNpemVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuc29ydENvbHVtbiA9IHRoaXMuc29ydENvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJDb2x1bW4gPSB0aGlzLmZpbHRlckNvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5TdGFydCA9IHRoaXMucmVzaXplQ29sdW1uU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uRW5kID0gdGhpcy5yZXNpemVDb2x1bW5FbmQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uTW92aW5nID0gdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2U6IDAsXG4gICAgICBwYWdlU2l6ZTogcHJvcHMuZGVmYXVsdFBhZ2VTaXplLFxuICAgICAgc29ydGVkOiBwcm9wcy5kZWZhdWx0U29ydGVkLFxuICAgICAgZXhwYW5kZWQ6IHByb3BzLmRlZmF1bHRFeHBhbmRlZCxcbiAgICAgIGZpbHRlcmVkOiBwcm9wcy5kZWZhdWx0RmlsdGVyZWQsXG4gICAgICByZXNpemVkOiBwcm9wcy5kZWZhdWx0UmVzaXplZCxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nOiBmYWxzZSxcbiAgICAgIHNraXBOZXh0U29ydDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0YWJsZVRvdGFsV2lkdGg6IHRoaXMudGFibGVXcmFwcGVyLm9mZnNldFdpZHRoIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHJlc29sdmVkU3RhdGUgPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3R5bGUsXG4gICAgICBnZXRQcm9wcyxcbiAgICAgIGdldFRhYmxlUHJvcHMsXG4gICAgICBnZXRDb2xHcm91cENvbFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkUHJvcHMsXG4gICAgICBnZXRUaGVhZFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZFRoUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzLFxuICAgICAgZ2V0VGJvZHlQcm9wcyxcbiAgICAgIGdldFRyUHJvcHMsXG4gICAgICBnZXRUZFByb3BzLFxuICAgICAgZ2V0VGZvb3RQcm9wcyxcbiAgICAgIGdldFRmb290VHJQcm9wcyxcbiAgICAgIGdldFRmb290VGRQcm9wcyxcbiAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyxcbiAgICAgIGdldExvYWRpbmdQcm9wcyxcbiAgICAgIGdldE5vRGF0YVByb3BzLFxuICAgICAgZ2V0UmVzaXplclByb3BzLFxuICAgICAgc2hvd1BhZ2luYXRpb24sXG4gICAgICBzaG93UGFnaW5hdGlvblRvcCxcbiAgICAgIHNob3dQYWdpbmF0aW9uQm90dG9tLFxuICAgICAgbWFudWFsLFxuICAgICAgbG9hZGluZ1RleHQsXG4gICAgICBub0RhdGFUZXh0LFxuICAgICAgc29ydGFibGUsXG4gICAgICByZXNpemFibGUsXG4gICAgICBmaWx0ZXJhYmxlLFxuICAgICAgZm9vdGVyUGxhY2VtZW50LFxuICAgICAgLy8gUGl2b3RpbmcgU3RhdGVcbiAgICAgIHBpdm90SURLZXksXG4gICAgICBwaXZvdFZhbEtleSxcbiAgICAgIHBpdm90QnksXG4gICAgICBzdWJSb3dzS2V5LFxuICAgICAgYWdncmVnYXRlZEtleSxcbiAgICAgIG9yaWdpbmFsS2V5LFxuICAgICAgaW5kZXhLZXksXG4gICAgICBncm91cGVkQnlQaXZvdEtleSxcbiAgICAgIC8vIEZpeGVkXG4gICAgICBmaXhlZENvbHVtbkluZGV4LFxuICAgICAgLy8gU3RhdGVcbiAgICAgIGxvYWRpbmcsXG4gICAgICBwYWdlU2l6ZSxcbiAgICAgIHBhZ2UsXG4gICAgICBzb3J0ZWQsXG4gICAgICBmaWx0ZXJlZCxcbiAgICAgIHJlc2l6ZWQsXG4gICAgICBleHBhbmRlZCxcbiAgICAgIHBhZ2VzLFxuICAgICAgb25FeHBhbmRlZENoYW5nZSxcbiAgICAgIC8vIENvbXBvbmVudHNcbiAgICAgIFRhYmxlV3JhcHBlcixcbiAgICAgIFRhYmxlQ29tcG9uZW50LFxuICAgICAgVGhlYWRDb21wb25lbnQsXG4gICAgICBUYm9keUNvbXBvbmVudCxcbiAgICAgIFRyQ29tcG9uZW50LFxuICAgICAgVGhDb21wb25lbnQsXG4gICAgICBUZENvbXBvbmVudCxcbiAgICAgIFRmb290Q29tcG9uZW50LFxuICAgICAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgICAgIExvYWRpbmdDb21wb25lbnQsXG4gICAgICBTdWJDb21wb25lbnQsXG4gICAgICBOb0RhdGFDb21wb25lbnQsXG4gICAgICBSZXNpemVyQ29tcG9uZW50LFxuICAgICAgRXhwYW5kZXJDb21wb25lbnQsXG4gICAgICBQaXZvdFZhbHVlQ29tcG9uZW50LFxuICAgICAgUGl2b3RDb21wb25lbnQsXG4gICAgICBBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgRmlsdGVyQ29tcG9uZW50LFxuICAgICAgUGFkUm93Q29tcG9uZW50LFxuICAgICAgLy8gRGF0YSBtb2RlbFxuICAgICAgcmVzb2x2ZWREYXRhLFxuICAgICAgYWxsVmlzaWJsZUNvbHVtbnMsXG4gICAgICBoZWFkZXJHcm91cHMsXG4gICAgICBoYXNIZWFkZXJHcm91cHMsXG4gICAgICAvLyBTb3J0ZWQgRGF0YVxuICAgICAgc29ydGVkRGF0YSxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nLFxuICAgICAgdGFibGVUb3RhbFdpZHRoLFxuICAgIH0gPSByZXNvbHZlZFN0YXRlXG5cbiAgICAvLyBQYWdpbmF0aW9uXG4gICAgY29uc3Qgc3RhcnRSb3cgPSBwYWdlU2l6ZSAqIHBhZ2VcbiAgICBjb25zdCBlbmRSb3cgPSBzdGFydFJvdyArIHBhZ2VTaXplXG4gICAgbGV0IHBhZ2VSb3dzID0gbWFudWFsID8gcmVzb2x2ZWREYXRhIDogc29ydGVkRGF0YS5zbGljZShzdGFydFJvdywgZW5kUm93KVxuICAgIGNvbnN0IG1pblJvd3MgPSB0aGlzLmdldE1pblJvd3MoKVxuICAgIGNvbnN0IHBhZFJvd3MgPSBfLnJhbmdlKE1hdGgubWF4KG1pblJvd3MgLSBwYWdlUm93cy5sZW5ndGgsIDApKVxuXG4gICAgY29uc3QgaGFzQ29sdW1uRm9vdGVyID0gYWxsVmlzaWJsZUNvbHVtbnMuc29tZShkID0+IGQuRm9vdGVyKVxuICAgIGNvbnN0IGhhc0ZpbHRlcnMgPSBmaWx0ZXJhYmxlIHx8IGFsbFZpc2libGVDb2x1bW5zLnNvbWUoZCA9PiBkLmZpbHRlcmFibGUpXG5cbiAgICBjb25zdCByZWN1cnNlUm93c1ZpZXdJbmRleCA9IChyb3dzLCBwYXRoID0gW10sIGluZGV4ID0gLTEpID0+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHJvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgICAgY29uc3Qgcm93V2l0aFZpZXdJbmRleCA9IHtcbiAgICAgICAgICAgIC4uLnJvdyxcbiAgICAgICAgICAgIF92aWV3SW5kZXg6IGluZGV4LFxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5jb25jYXQoW2ldKVxuICAgICAgICAgIGlmIChyb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldICYmIF8uZ2V0KGV4cGFuZGVkLCBuZXdQYXRoKSkge1xuICAgICAgICAgICAgO1tyb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldLCBpbmRleF0gPSByZWN1cnNlUm93c1ZpZXdJbmRleChcbiAgICAgICAgICAgICAgcm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSxcbiAgICAgICAgICAgICAgbmV3UGF0aCxcbiAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJvd1dpdGhWaWV3SW5kZXhcbiAgICAgICAgfSksXG4gICAgICAgIGluZGV4LFxuICAgICAgXVxuICAgIH1cbiAgICA7W3BhZ2VSb3dzXSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KHBhZ2VSb3dzKVxuXG4gICAgY29uc3QgY2FuUHJldmlvdXMgPSBwYWdlID4gMFxuICAgIGNvbnN0IGNhbk5leHQgPSBwYWdlICsgMSA8IHBhZ2VzXG5cbiAgICBsZXQgcm93SW5kZXggPSAtMVxuXG4gICAgY29uc3QgZmluYWxTdGF0ZSA9IHtcbiAgICAgIC4uLnJlc29sdmVkU3RhdGUsXG4gICAgICBzdGFydFJvdyxcbiAgICAgIGVuZFJvdyxcbiAgICAgIHBhZ2VSb3dzLFxuICAgICAgbWluUm93cyxcbiAgICAgIHBhZFJvd3MsXG4gICAgICBoYXNDb2x1bW5Gb290ZXIsXG4gICAgICBjYW5QcmV2aW91cyxcbiAgICAgIGNhbk5leHQsXG4gICAgfVxuXG4gICAgbGV0IGZpeGVkQ29sdW1uV2lkdGggPSAwXG4gICAgbGV0IHJhd0NvbHVtbnNXaWR0aCA9IDBcbiAgICBsZXQgZmxvb3JDb2x1bW5zV2lkdGggPSAwXG5cbiAgICAvLyBWaXN1YWwgQ29tcG9uZW50c1xuXG4gICAgY29uc3QgbWFrZUNvbEdyb3VwID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGNvbGdyb3VwPlxuICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUNvbCl9XG4gICAgICAgIDwvY29sZ3JvdXA+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbCA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG5cbiAgICAgIGNvbnN0IGNvbGdyb3VwQ29sUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldENvbEdyb3VwQ29sUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Db2xncm91cENvbFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0Q29sR3JvdXBDb2xQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmNvbEdyb3VwQ29sQ2xhc3NOYW1lLFxuICAgICAgICBjb2xncm91cENvbFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uQ29sZ3JvdXBDb2xQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmNvbEdyb3VwQ29sU3R5bGUsXG4gICAgICAgIC4uLmNvbGdyb3VwQ29sUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkNvbGdyb3VwQ29sUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGxldCBtaW5XaWR0aCA9IGNvbHVtbi5taW5XaWR0aFxuICAgICAgbGV0IG1heFdpZHRoID0gY29sdW1uLm1heFdpZHRoXG4gICAgICBsZXQgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBtaW5XaWR0aCxcbiAgICAgICAgMFxuICAgICAgKVxuXG4gICAgICAvLyBjYWxjdWxhdGUgcHhcbiAgICAgIGlmICh0YWJsZVRvdGFsV2lkdGgpIHtcbiAgICAgICAgY29uc3Qgd2lkdGhJc1BlcmNlbnRzID0gXy5pc1BlcmNlbnRzKHdpZHRoKVxuICAgICAgICBjb25zdCBtaW5XaWR0aElzUGVyY2VudHMgPSBfLmlzUGVyY2VudHMobWluV2lkdGgpXG4gICAgICAgIGNvbnN0IG1heFdpZHRoSXNQZXJjZW50cyA9IF8uaXNQZXJjZW50cyhtYXhXaWR0aClcblxuICAgICAgICBjb25zdCB3aWR0aFZhbHVlID0gcGFyc2VJbnQod2lkdGgsIDEwKVxuICAgICAgICBjb25zdCBtaW5XaWR0aFZhbHVlID0gbWluV2lkdGggJiYgcGFyc2VJbnQobWluV2lkdGgsIDEwKVxuICAgICAgICBjb25zdCBtYXhXaWR0aFZhbHVlID0gbWF4V2lkdGggJiYgcGFyc2VJbnQobWF4V2lkdGgsIDEwKVxuXG4gICAgICAgIHdpZHRoID0gd2lkdGhJc1BlcmNlbnRzXG4gICAgICAgICAgPyBfLnBlcmNlbnRzVG9QeCh3aWR0aFZhbHVlLCB0YWJsZVRvdGFsV2lkdGgpXG4gICAgICAgICAgOiB3aWR0aFZhbHVlXG5cbiAgICAgICAgbWluV2lkdGggPSBtaW5XaWR0aElzUGVyY2VudHNcbiAgICAgICAgICA/IF8ucGVyY2VudHNUb1B4KG1pbldpZHRoVmFsdWUsIHRhYmxlVG90YWxXaWR0aClcbiAgICAgICAgICA6IG1pbldpZHRoVmFsdWVcblxuICAgICAgICBtYXhXaWR0aCA9IG1heFdpZHRoSXNQZXJjZW50c1xuICAgICAgICAgID8gXy5wZXJjZW50c1RvUHgobWF4V2lkdGhWYWx1ZSwgdGFibGVUb3RhbFdpZHRoKVxuICAgICAgICAgIDogbWF4V2lkdGhWYWx1ZVxuXG4gICAgICAgIHdpZHRoID0gXy5jbGFtcCh3aWR0aCwgbWluV2lkdGgsIG1heFdpZHRoKVxuXG4gICAgICAgIHJhd0NvbHVtbnNXaWR0aCArPSB3aWR0aFxuICAgICAgICB3aWR0aCA9IE1hdGguZmxvb3Iod2lkdGgpXG4gICAgICAgIGZsb29yQ29sdW1uc1dpZHRoICs9IHdpZHRoXG5cbiAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguZmxvb3IocmF3Q29sdW1uc1dpZHRoIC0gZmxvb3JDb2x1bW5zV2lkdGgpXG5cbiAgICAgICAgaWYgKGRpZmYgPj0gMSkge1xuICAgICAgICAgIHdpZHRoICs9IGRpZmZcbiAgICAgICAgICBmbG9vckNvbHVtbnNXaWR0aCArPSBkaWZmXG4gICAgICAgIH1cblxuICAgICAgICB3aWR0aCA9IGAke3dpZHRofXB4YFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA9PT0gZml4ZWRDb2x1bW5JbmRleFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBmaXhlZENvbHVtbldpZHRoID0gd2lkdGhcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNEdW1teSA9IGkgPT09IGFsbFZpc2libGVDb2x1bW5zLmxlbmd0aCAtIDFcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGNvbFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3J0LWNvbGdyb3VwLWNvbCcsIGNsYXNzZXMsIHsgJy1kdW1teSc6IGlzRHVtbXkgfSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXJHcm91cHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEdyb3VwUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWhlYWRlckdyb3VwcycsIHRoZWFkR3JvdXBQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt0aGVhZEdyb3VwUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRoZWFkR3JvdXBQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkR3JvdXBUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZEdyb3VwVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZEdyb3VwVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKG1ha2VIZWFkZXJHcm91cCl9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyR3JvdXAgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEdyb3VwVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEdyb3VwVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkR3JvdXBUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29sU3BhbiA9IGNvbHVtbi5jb2x1bW5zLmxlbmd0aFxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZEdyb3VwVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgICBjb2xTcGFuLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0R1bW15ID0gaSA9PT0gaGVhZGVyR3JvdXBzLmxlbmd0aCAtIDFcbiAgICAgIGNvbnN0IGlzRml4ZWQgPSBpID09PSBmaXhlZENvbHVtbkluZGV4XG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGZpeGVkQ29sdW1uV2lkdGhcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29udGVudCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5IZWFkZXIsIHtcbiAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsIHsgJy1kdW1teSc6IGlzRHVtbXksICctZW1wdHknOiAhY29udGVudCwgJy1maXhlZCc6IGlzRml4ZWQgfSl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctaGVhZGVyJywgdGhlYWRQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt0aGVhZFByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50aGVhZFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlSGVhZGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCBzb3J0ID0gc29ydGVkLmZpbmQoZCA9PiBkLmlkID09PSBjb2x1bW4uaWQpXG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB0aGVhZFRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1Jlc2l6YWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5yZXNpemFibGUsIHJlc2l6YWJsZSwgZmFsc2UpXG4gICAgICBjb25zdCByZXNpemVyID0gaXNSZXNpemFibGVcbiAgICAgICAgPyAoPFJlc2l6ZXJDb21wb25lbnRcbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0KGNvbHVtbiwgZSwgZmFsc2UpfVxuICAgICAgICAgIG9uVG91Y2hTdGFydD17ZSA9PiB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0KGNvbHVtbiwgZSwgdHJ1ZSl9XG4gICAgICAgICAgey4uLnJlc2l6ZXJQcm9wc31cbiAgICAgICAgLz4pXG4gICAgICAgIDogbnVsbFxuXG4gICAgICBjb25zdCBpc1NvcnRhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnNvcnRhYmxlLCBzb3J0YWJsZSwgZmFsc2UpXG4gICAgICBjb25zdCBpc0R1bW15ID0gaSA9PT0gYWxsVmlzaWJsZUNvbHVtbnMubGVuZ3RoIC0gMVxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPT09IGZpeGVkQ29sdW1uSW5kZXhcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5XaWR0aFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICdydC1yZXNpemFibGUtaGVhZGVyJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJy1jdXJzb3ItcG9pbnRlcic6IGlzU29ydGFibGUsXG4gICAgICAgICAgICAgICctc29ydC1kZXNjJzogc29ydCAmJiBzb3J0LmRlc2MsXG4gICAgICAgICAgICAgICctc29ydC1hc2MnOiBzb3J0ICYmICFzb3J0LmRlc2MsXG4gICAgICAgICAgICAgICctaGlkZGVuJzogIXNob3csXG4gICAgICAgICAgICAgICctZHVtbXknOiBpc0R1bW15LFxuICAgICAgICAgICAgICAnLWZpeGVkJzogaXNGaXhlZCxcbiAgICAgICAgICAgICAgJ3J0LWhlYWRlci1waXZvdCc6IHBpdm90QnkgJiYgcGl2b3RCeS5zbGljZSgwLCAtMSkuaW5jbHVkZXMoY29sdW1uLmlkKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgdG9nZ2xlU29ydD17ZSA9PiB7XG4gICAgICAgICAgICBpc1NvcnRhYmxlICYmIHRoaXMuc29ydENvbHVtbihjb2x1bW4sIGUuc2hpZnRLZXkpXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdydC1yZXNpemFibGUtaGVhZGVyLWNvbnRlbnQnPlxuICAgICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5IZWFkZXIsIHtcbiAgICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cmVzaXplcn1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlRmlsdGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZEZpbHRlclRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWZpbHRlcnMnLCB0aGVhZEZpbHRlclByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3RoZWFkRmlsdGVyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnRoZWFkRmlsdGVyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZEZpbHRlclRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkRmlsdGVyVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZEZpbHRlclRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VGaWx0ZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUZpbHRlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgdGhlYWRGaWx0ZXJUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRGaWx0ZXJUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRGaWx0ZXJUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbHRlciA9IGZpbHRlcmVkLmZpbmQoZmlsdGVyID0+IGZpbHRlci5pZCA9PT0gY29sdW1uLmlkKVxuXG4gICAgICBjb25zdCBSZXNvbHZlZEZpbHRlckNvbXBvbmVudCA9IGNvbHVtbi5GaWx0ZXIgfHwgRmlsdGVyQ29tcG9uZW50XG5cbiAgICAgIGNvbnN0IGlzRmlsdGVyYWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICBjb2x1bW4uZmlsdGVyYWJsZSxcbiAgICAgICAgZmlsdGVyYWJsZSxcbiAgICAgICAgZmFsc2VcbiAgICAgIClcblxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPT09IGZpeGVkQ29sdW1uSW5kZXhcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5XaWR0aFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsIHsgJy1maXhlZCc6IGlzRml4ZWQsICctZW1wdHknOiAhaXNGaWx0ZXJhYmxlIH0pfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7aXNGaWx0ZXJhYmxlXG4gICAgICAgICAgICA/IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICBSZXNvbHZlZEZpbHRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IHRoaXMuZmlsdGVyQ29sdW1uKGNvbHVtbiwgdmFsdWUpLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkZWZhdWx0UHJvcHMuY29sdW1uLkZpbHRlclxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWdlUm93ID0gKHJvdywgaSwgcGF0aCA9IFtdKSA9PiB7XG4gICAgICBjb25zdCByb3dJbmZvID0ge1xuICAgICAgICBvcmlnaW5hbDogcm93W29yaWdpbmFsS2V5XSxcbiAgICAgICAgcm93OiByb3csXG4gICAgICAgIGluZGV4OiByb3dbaW5kZXhLZXldLFxuICAgICAgICB2aWV3SW5kZXg6ICsrcm93SW5kZXgsXG4gICAgICAgIGxldmVsOiBwYXRoLmxlbmd0aCxcbiAgICAgICAgbmVzdGluZ1BhdGg6IHBhdGguY29uY2F0KFtpXSksXG4gICAgICAgIGFnZ3JlZ2F0ZWQ6IHJvd1thZ2dyZWdhdGVkS2V5XSxcbiAgICAgICAgZ3JvdXBlZEJ5UGl2b3Q6IHJvd1tncm91cGVkQnlQaXZvdEtleV0sXG4gICAgICAgIHN1YlJvd3M6IHJvd1tzdWJSb3dzS2V5XSxcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzRXhwYW5kZWQgPSBfLmdldChleHBhbmRlZCwgcm93SW5mby5uZXN0aW5nUGF0aClcbiAgICAgIGNvbnN0IHRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtyb3dJbmZvLm5lc3RpbmdQYXRoLmpvaW4oJ18nKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICB0clByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHJvdy5fdmlld0luZGV4ICUgMiA/ICctZXZlbicgOiAnLW9kZCdcbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50clByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4sIGkyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICAgICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICAgICAgICBnZXRUZFByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIGNvbHVtbiwgdGhpcylcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgY29sdW1uLCB0aGlzKVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICAgICAgICB0ZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgICAgICAgIC4uLnRkUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGlzRml4ZWQgPSBpMiA9PT0gZml4ZWRDb2x1bW5JbmRleFxuXG4gICAgICAgICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbldpZHRoXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxJbmZvID0ge1xuICAgICAgICAgICAgICAuLi5yb3dJbmZvLFxuICAgICAgICAgICAgICBpc0V4cGFuZGVkLFxuICAgICAgICAgICAgICBjb2x1bW46IHsgLi4uY29sdW1uIH0sXG4gICAgICAgICAgICAgIHZhbHVlOiByb3dJbmZvLnJvd1tjb2x1bW4uaWRdLFxuICAgICAgICAgICAgICBwaXZvdGVkOiBjb2x1bW4ucGl2b3RlZCxcbiAgICAgICAgICAgICAgZXhwYW5kZXI6IGNvbHVtbi5leHBhbmRlcixcbiAgICAgICAgICAgICAgcmVzaXplZCxcbiAgICAgICAgICAgICAgc2hvdyxcbiAgICAgICAgICAgICAgdGRQcm9wcyxcbiAgICAgICAgICAgICAgY29sdW1uUHJvcHMsXG4gICAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAgIHN0eWxlcyxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjZWxsSW5mby52YWx1ZVxuXG4gICAgICAgICAgICBsZXQgaW50ZXJhY3Rpb25Qcm9wc1xuICAgICAgICAgICAgbGV0IGlzQnJhbmNoXG4gICAgICAgICAgICBsZXQgaXNQcmV2aWV3XG5cbiAgICAgICAgICAgIGNvbnN0IG9uRXhwYW5kZXJDbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgICBsZXQgbmV3RXhwYW5kZWQgPSBfLmNsb25lKGV4cGFuZGVkKVxuICAgICAgICAgICAgICBpZiAoaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIG5ld0V4cGFuZGVkID0gXy5zZXQobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBmYWxzZSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdFeHBhbmRlZCA9IF8uc2V0KG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwge30pXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiBuZXdFeHBhbmRlZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uRXhwYW5kZWRDaGFuZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgb25FeHBhbmRlZENoYW5nZShuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gYSBzdGFuZGFyZCBjZWxsXG4gICAgICAgICAgICBsZXQgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgIGNvbHVtbi5DZWxsLFxuICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgLy8gUmVzb2x2ZSBSZW5kZXJlcnNcbiAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCA9XG4gICAgICAgICAgICAgIGNvbHVtbi5BZ2dyZWdhdGVkIHx8XG4gICAgICAgICAgICAgICghY29sdW1uLmFnZ3JlZ2F0ZSA/IEFnZ3JlZ2F0ZWRDb21wb25lbnQgOiBjb2x1bW4uQ2VsbClcbiAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uRXhwYW5kZXIgfHwgRXhwYW5kZXJDb21wb25lbnRcbiAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCA9XG4gICAgICAgICAgICAgIGNvbHVtbi5QaXZvdFZhbHVlIHx8IFBpdm90VmFsdWVDb21wb25lbnRcbiAgICAgICAgICAgIGNvbnN0IERlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50ID1cbiAgICAgICAgICAgICAgUGl2b3RDb21wb25lbnQgfHxcbiAgICAgICAgICAgICAgKHByb3BzID0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgIDxSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RDb21wb25lbnQgPVxuICAgICAgICAgICAgICBjb2x1bW4uUGl2b3QgfHwgRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnRcblxuICAgICAgICAgICAgLy8gSXMgdGhpcyBjZWxsIGV4cGFuZGFibGU/XG4gICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCB8fCBjZWxsSW5mby5leHBhbmRlcikge1xuICAgICAgICAgICAgICAvLyBNYWtlIGl0IGV4cGFuZGFibGUgYnkgZGVmdWFsdFxuICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlID0gdHJ1ZVxuICAgICAgICAgICAgICBpbnRlcmFjdGlvblByb3BzID0ge1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IG9uRXhwYW5kZXJDbGljayxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBJZiBwaXZvdGVkLCBoYXMgbm8gc3ViUm93cywgYW5kIGRvZXMgbm90IGhhdmUgYSBzdWJDb21wb25lbnQsIGRvIG5vdCBtYWtlIGV4cGFuZGFibGVcbiAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNlbGxJbmZvLnN1YlJvd3MpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghU3ViQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvblByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQpIHtcbiAgICAgICAgICAgICAgLy8gSXMgdGhpcyBjb2x1bW4gYSBicmFuY2g/XG4gICAgICAgICAgICAgIGlzQnJhbmNoID1cbiAgICAgICAgICAgICAgICByb3dJbmZvLnJvd1twaXZvdElES2V5XSA9PT0gY29sdW1uLmlkICYmIGNlbGxJbmZvLnN1YlJvd3NcbiAgICAgICAgICAgICAgLy8gU2hvdWxkIHRoaXMgY29sdW1uIGJlIGJsYW5rP1xuICAgICAgICAgICAgICBpc1ByZXZpZXcgPVxuICAgICAgICAgICAgICAgIHBpdm90QnkuaW5kZXhPZihjb2x1bW4uaWQpID5cbiAgICAgICAgICAgICAgICAgIHBpdm90QnkuaW5kZXhPZihyb3dJbmZvLnJvd1twaXZvdElES2V5XSkgJiYgY2VsbEluZm8uc3ViUm93c1xuICAgICAgICAgICAgICAvLyBQaXZvdCBDZWxsIFJlbmRlciBPdmVycmlkZVxuICAgICAgICAgICAgICBpZiAoaXNCcmFuY2gpIHtcbiAgICAgICAgICAgICAgICAvLyBpc1Bpdm90XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZFBpdm90Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAuLi5jZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvd1twaXZvdFZhbEtleV0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgcm93W3Bpdm90VmFsS2V5XVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgICAgICAgICAgICAvLyBTaG93IHRoZSBwaXZvdCBwcmV2aWV3XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsSW5mby5hZ2dyZWdhdGVkKSB7XG4gICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZWxsSW5mby5leHBhbmRlcikge1xuICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgIHJvd1twaXZvdFZhbEtleV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBpZiAocGl2b3RCeSkge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsSW5mby5ncm91cGVkQnlQaXZvdCkge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNlbGxJbmZvLnN1YlJvd3MgJiYgIVN1YkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGNlbGxcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgICAgICAgIGtleT17aTIgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICAgICAgICFzaG93ICYmICctaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgJiYgJ3J0LWV4cGFuZGFibGUnLFxuICAgICAgICAgICAgICAgICAgKGlzQnJhbmNoIHx8IGlzUHJldmlldykgJiYgJ3J0LXBpdm90JyxcbiAgICAgICAgICAgICAgICAgIGlzRml4ZWQgJiYgJy1maXhlZCcsXG4gICAgICAgICAgICAgICAgICAoaXNGaXhlZCAmJiAhcmVzb2x2ZWRDZWxsKSAmJiAnLWVtcHR5J1xuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICAgICAgICB7Li4uaW50ZXJhY3Rpb25Qcm9wc31cbiAgICAgICAgICAgICAgICB7Li4udGRQcm9wcy5yZXN0fVxuICAgICAgICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Jlc29sdmVkQ2VsbH1cbiAgICAgICAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UckNvbXBvbmVudD4sXG4gICAgICAgIHJvd0luZm8uc3ViUm93cyAmJlxuICAgICAgICAgIGlzRXhwYW5kZWQgJiZcbiAgICAgICAgICByb3dJbmZvLnN1YlJvd3MubWFwKChkLCBpKSA9PlxuICAgICAgICAgICAgbWFrZVBhZ2VSb3coZCwgaSwgcm93SW5mby5uZXN0aW5nUGF0aClcbiAgICAgICAgICApLFxuICAgICAgICBTdWJDb21wb25lbnQgJiZcbiAgICAgICAgICAhcm93SW5mby5zdWJSb3dzICYmXG4gICAgICAgICAgaXNFeHBhbmRlZCAmJlxuICAgICAgICAgIFN1YkNvbXBvbmVudChyb3dJbmZvKSxcbiAgICAgIF1cbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFkUm93ID0gKHJvdywgaSkgPT4ge1xuICAgICAgY29uc3QgdHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICctcGFkUm93JyxcbiAgICAgICAgICAgIChwYWdlUm93cy5sZW5ndGggKyBpKSAlIDIgPyAnLWV2ZW4nIDogJy1vZGQnLFxuICAgICAgICAgICAgdHJQcm9wcy5jbGFzc05hbWVcbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlIHx8IHt9fVxuICAgICAgICA+XG4gICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlUGFkQ29sdW1uKX1cbiAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFkQ29sdW1uID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgY29uc3QgdGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIHRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4udGRQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNGaXhlZCA9IGkgPT09IGZpeGVkQ29sdW1uSW5kZXhcblxuICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gZml4ZWRDb2x1bW5XaWR0aFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsICFzaG93ICYmICctaGlkZGVuJywgeyAnLWZpeGVkJzogaXNGaXhlZCB9KX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzfVxuICAgICAgICAgIHsuLi50ZFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoUGFkUm93Q29tcG9uZW50KX1cbiAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sdW1uRm9vdGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRGb290UHJvcHMgPSBnZXRUZm9vdFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgY29uc3QgdEZvb3RUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZm9vdFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGZvb3RDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e3RGb290UHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgIHN0eWxlPXt0Rm9vdFByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi50Rm9vdFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Rm9vdFRyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgIHN0eWxlPXt0Rm9vdFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udEZvb3RUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlQ29sdW1uRm9vdGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1Rmb290Q29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB0Rm9vdFRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRmb290VGRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Gb290ZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEZvb3RlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICB0Rm9vdFRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkZvb3RlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi50Rm9vdFRkUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkZvb3RlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0ZpeGVkID0gaSA9PT0gZml4ZWRDb2x1bW5JbmRleFxuXG4gICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBmaXhlZENvbHVtbldpZHRoXG4gICAgICAgIGNvbnNvbGUubG9nKHN0eWxlcylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCAhc2hvdyAmJiAnLWhpZGRlbicsIHsgJy1maXhlZCc6IGlzRml4ZWQgfSl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICB7Li4uY29sdW1uUHJvcHMucmVzdH1cbiAgICAgICAgICB7Li4udEZvb3RUZFByb3BzLnJlc3R9XG4gICAgICAgICAgey4uLmNvbHVtbkZvb3RlclByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkZvb3Rlciwge1xuICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWdpbmF0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFnaW5hdGlvblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRQYWdpbmF0aW9uUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnaW5hdGlvbkNvbXBvbmVudFxuICAgICAgICAgIHsuLi5yZXNvbHZlZFN0YXRlfVxuICAgICAgICAgIHBhZ2VzPXtwYWdlc31cbiAgICAgICAgICBjYW5QcmV2aW91cz17Y2FuUHJldmlvdXN9XG4gICAgICAgICAgY2FuTmV4dD17Y2FuTmV4dH1cbiAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMub25QYWdlQ2hhbmdlfVxuICAgICAgICAgIG9uUGFnZVNpemVDaGFuZ2U9e3RoaXMub25QYWdlU2l6ZUNoYW5nZX1cbiAgICAgICAgICBjbGFzc05hbWU9e3BhZ2luYXRpb25Qcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgc3R5bGU9e3BhZ2luYXRpb25Qcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4ucGFnaW5hdGlvblByb3BzLnJlc3R9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgKVxuICAgIGNvbnN0IHRhYmxlUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRUYWJsZVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIClcbiAgICBjb25zdCB0Qm9keVByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0VGJvZHlQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICApXG4gICAgY29uc3QgbG9hZGluZ1Byb3BzID0gZ2V0TG9hZGluZ1Byb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIGNvbnN0IG5vRGF0YVByb3BzID0gZ2V0Tm9EYXRhUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgY29uc3QgcmVzaXplclByb3BzID0gZ2V0UmVzaXplclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuXG4gICAgY29uc3QgZGlzcGxheUZvb3RlclRvcCA9IGZvb3RlclBsYWNlbWVudCA9PT0gJ3RvcCcgfHwgZm9vdGVyUGxhY2VtZW50ID09PSAnYm90aCdcbiAgICBjb25zdCBkaXNwbGF5Rm9vdGVyQm90dG9tID0gZm9vdGVyUGxhY2VtZW50ID09PSAnYm90dG9tJyB8fCBmb290ZXJQbGFjZW1lbnQgPT09ICdib3RoJ1xuXG4gICAgY29uc3QgbWFrZVRhYmxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgY29sR3JvdXAgPSBtYWtlQ29sR3JvdXAoKTtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBtYWtlUGFnaW5hdGlvbigpXG4gICAgICBjb25zdCBmb290ZXIgPSBoYXNDb2x1bW5Gb290ZXIgPyBtYWtlQ29sdW1uRm9vdGVycygpIDogbnVsbFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnUmVhY3RUYWJsZScsIGNsYXNzTmFtZSwgcm9vdFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAgICAgLi4ucm9vdFByb3BzLnN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJvb3RQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3dQYWdpbmF0aW9uICYmIHNob3dQYWdpbmF0aW9uVG9wXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdwYWdpbmF0aW9uLXRvcCc+XG4gICAgICAgICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgPFRhYmxlV3JhcHBlciB3cmFwcGVyUmVmPXsoYykgPT4gdGhpcy50YWJsZVdyYXBwZXIgPSBjfT5cbiAgICAgICAgICAgIDxUYWJsZUNvbXBvbmVudFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgdGFibGVQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgY3VycmVudGx5UmVzaXppbmcgPyAncnQtcmVzaXppbmcnIDogJydcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgc3R5bGU9e3RhYmxlUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgIHsuLi50YWJsZVByb3BzLnJlc3R9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjb2xHcm91cH1cbiAgICAgICAgICAgICAge2hhc0hlYWRlckdyb3VwcyA/IG1ha2VIZWFkZXJHcm91cHMoKSA6IG51bGx9XG4gICAgICAgICAgICAgIHttYWtlSGVhZGVycygpfVxuICAgICAgICAgICAgICB7aGFzRmlsdGVycyA/IG1ha2VGaWx0ZXJzKCkgOiBudWxsfVxuICAgICAgICAgICAgICB7ZGlzcGxheUZvb3RlclRvcCAmJiBmb290ZXJ9XG4gICAgICAgICAgICAgIDxUYm9keUNvbXBvbmVudFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Qm9keVByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3RCb2R5UHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgICAgey4uLnRCb2R5UHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwYWdlUm93cy5tYXAoKGQsIGkpID0+IG1ha2VQYWdlUm93KGQsIGkpKX1cbiAgICAgICAgICAgICAgICB7cGFkUm93cy5tYXAobWFrZVBhZFJvdyl9XG4gICAgICAgICAgICAgIDwvVGJvZHlDb21wb25lbnQ+XG4gICAgICAgICAgICAgIHtkaXNwbGF5Rm9vdGVyQm90dG9tICYmIGZvb3Rlcn1cbiAgICAgICAgICAgIDwvVGFibGVDb21wb25lbnQ+XG4gICAgICAgICAgPC9UYWJsZVdyYXBwZXI+XG4gICAgICAgICAge3Nob3dQYWdpbmF0aW9uICYmIHNob3dQYWdpbmF0aW9uQm90dG9tXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdwYWdpbmF0aW9uLWJvdHRvbSc+XG4gICAgICAgICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgeyFwYWdlUm93cy5sZW5ndGggJiZcbiAgICAgICAgICAgIDxOb0RhdGFDb21wb25lbnQgey4uLm5vRGF0YVByb3BzfT5cbiAgICAgICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KG5vRGF0YVRleHQpfVxuICAgICAgICAgICAgPC9Ob0RhdGFDb21wb25lbnQ+fVxuICAgICAgICAgIDxMb2FkaW5nQ29tcG9uZW50XG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgbG9hZGluZ1RleHQ9e2xvYWRpbmdUZXh0fVxuICAgICAgICAgICAgey4uLmxvYWRpbmdQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBjaGlsZFByb3BzIGFyZSBvcHRpb25hbGx5IHBhc3NlZCB0byBhIGZ1bmN0aW9uLWFzLWEtY2hpbGRcbiAgICByZXR1cm4gY2hpbGRyZW4gPyBjaGlsZHJlbihmaW5hbFN0YXRlLCBtYWtlVGFibGUsIHRoaXMpIDogbWFrZVRhYmxlKClcbiAgfVxufVxuIl19