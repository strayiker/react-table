'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Base) {
  return function (_Base) {
    _inherits(_class, _Base);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'getResolvedState',
      value: function getResolvedState(props, state) {
        var resolvedState = _extends({}, _utils2.default.compactObject(this.state), _utils2.default.compactObject(this.props), _utils2.default.compactObject(state), _utils2.default.compactObject(props));
        return resolvedState;
      }
    }, {
      key: 'getDataModel',
      value: function getDataModel(newState) {
        var _this2 = this;

        var columns = newState.columns,
            _newState$pivotBy = newState.pivotBy,
            pivotBy = _newState$pivotBy === undefined ? [] : _newState$pivotBy,
            data = newState.data,
            pivotIDKey = newState.pivotIDKey,
            pivotValKey = newState.pivotValKey,
            subRowsKey = newState.subRowsKey,
            aggregatedKey = newState.aggregatedKey,
            nestingLevelKey = newState.nestingLevelKey,
            originalKey = newState.originalKey,
            indexKey = newState.indexKey,
            groupedByPivotKey = newState.groupedByPivotKey,
            SubComponent = newState.SubComponent;

        // Determine Header Groups

        var hasHeaderGroups = false;

        columns.push({
          Header: '',
          id: '@@dummy',
          sortable: false,
          resizable: false,
          filterable: false
        });

        columns.forEach(function (column) {
          if (column.columns) {
            hasHeaderGroups = true;
          }
        });

        var columnsWithExpander = [].concat(_toConsumableArray(columns));

        var expanderColumn = columns.find(function (col) {
          return col.expander || col.columns && col.columns.some(function (col2) {
            return col2.expander;
          });
        });
        // The actual expander might be in the columns field of a group column
        if (expanderColumn && !expanderColumn.expander) {
          expanderColumn = expanderColumn.columns.find(function (col) {
            return col.expander;
          });
        }

        // If we have SubComponent's we need to make sure we have an expander column
        if (SubComponent && !expanderColumn) {
          expanderColumn = { expander: true };
          columnsWithExpander = [expanderColumn].concat(_toConsumableArray(columnsWithExpander));
        }

        var makeDecoratedColumn = function makeDecoratedColumn(column) {
          var dcol = void 0;
          if (column.expander) {
            dcol = _extends({}, _this2.props.column, _this2.props.expanderDefaults, column);
          } else {
            dcol = _extends({}, _this2.props.column, column);
          }

          if (typeof dcol.accessor === 'string') {
            var _ret = function () {
              dcol.id = dcol.id || dcol.accessor;
              var accessorString = dcol.accessor;
              dcol.accessor = function (row) {
                return _utils2.default.get(row, accessorString);
              };
              return {
                v: dcol
              };
            }();

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
          }

          if (dcol.accessor && !dcol.id) {
            console.warn(dcol);
            throw new Error('A column id is required if using a non-string accessor for column above.');
          }

          if (!dcol.accessor) {
            dcol.accessor = function (d) {
              return undefined;
            };
          }

          // Ensure minWidth is not greater than maxWidth if set
          if (dcol.maxWidth < dcol.minWidth) {
            dcol.minWidth = dcol.maxWidth;
          }

          return dcol;
        };

        // Decorate the columns
        var decorateAndAddToAll = function decorateAndAddToAll(col) {
          var decoratedColumn = makeDecoratedColumn(col);
          allDecoratedColumns.push(decoratedColumn);
          return decoratedColumn;
        };
        var allDecoratedColumns = [];
        var decoratedColumns = columnsWithExpander.map(function (column, i) {
          if (column.columns) {
            return _extends({}, column, {
              columns: column.columns.map(decorateAndAddToAll)
            });
          } else {
            return decorateAndAddToAll(column);
          }
        });

        // Build the visible columns, headers and flat column list
        var visibleColumns = decoratedColumns.slice();
        var allVisibleColumns = [];

        visibleColumns = visibleColumns.map(function (column, i) {
          if (column.columns) {
            var visibleSubColumns = column.columns.filter(function (d) {
              return pivotBy.indexOf(d.id) > -1 ? false : _utils2.default.getFirstDefined(d.show, true);
            });
            return _extends({}, column, {
              columns: visibleSubColumns
            });
          }
          return column;
        });

        visibleColumns = visibleColumns.filter(function (column) {
          return column.columns ? column.columns.length : pivotBy.indexOf(column.id) > -1 ? false : _utils2.default.getFirstDefined(column.show, true);
        });

        // Find any custom pivot location
        var pivotIndex = visibleColumns.findIndex(function (col) {
          return col.pivot;
        });

        // Handle Pivot Columns
        if (pivotBy.length) {
          (function () {
            // Retrieve the pivot columns in the correct pivot order
            var pivotColumns = [];
            pivotBy.forEach(function (pivotID) {
              var found = allDecoratedColumns.find(function (d) {
                return d.id === pivotID;
              });
              if (found) {
                pivotColumns.push(found);
              }
            });

            var pivotColumnGroup = {
              header: function header() {
                return _react2.default.createElement(
                  'strong',
                  null,
                  'Group'
                );
              },
              columns: pivotColumns.map(function (col) {
                return _extends({}, _this2.props.pivotDefaults, col, {
                  pivoted: true
                });
              })
            };

            // Place the pivotColumns back into the visibleColumns
            if (pivotIndex >= 0) {
              pivotColumnGroup = _extends({}, visibleColumns[pivotIndex], pivotColumnGroup);
              visibleColumns.splice(pivotIndex, 1, pivotColumnGroup);
            } else {
              visibleColumns.unshift(pivotColumnGroup);
            }
          })();
        }

        // Build Header Groups
        var headerGroups = [];
        var currentSpan = [];

        // A convenience function to add a header and reset the currentSpan
        var addHeader = function addHeader(columns, column) {
          headerGroups.push(_extends({}, _this2.props.column, column, {
            columns: columns
          }));
          currentSpan = [];
        };

        // Build flast list of allVisibleColumns and HeaderGroups
        visibleColumns.forEach(function (column, i) {
          if (column.columns) {
            allVisibleColumns = allVisibleColumns.concat(column.columns);
            if (currentSpan.length > 0) {
              addHeader(currentSpan);
            }
            addHeader(column.columns, column);
            return;
          }
          allVisibleColumns.push(column);
          currentSpan.push(column);
        });
        if (hasHeaderGroups && currentSpan.length > 0) {
          addHeader(currentSpan);
        }

        // Access the data
        var accessRow = function accessRow(d, i) {
          var _row;

          var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          var row = (_row = {}, _defineProperty(_row, originalKey, d), _defineProperty(_row, indexKey, i), _defineProperty(_row, subRowsKey, d[subRowsKey]), _defineProperty(_row, nestingLevelKey, level), _row);
          allDecoratedColumns.forEach(function (column) {
            if (column.expander) return;
            row[column.id] = column.accessor(d);
          });
          if (row[subRowsKey]) {
            row[subRowsKey] = row[subRowsKey].map(function (d, i) {
              return accessRow(d, i, level + 1);
            });
          }
          return row;
        };
        var resolvedData = data.map(function (d, i) {
          return accessRow(d, i);
        });

        // If pivoting, recursively group the data
        var aggregate = function aggregate(rows) {
          var aggregationValues = {};
          aggregatingColumns.forEach(function (column) {
            var values = rows.map(function (d) {
              return d[column.id];
            });
            aggregationValues[column.id] = column.aggregate(values, rows);
          });
          return aggregationValues;
        };

        // TODO: Make it possible to fabricate nested rows without pivoting
        var aggregatingColumns = allVisibleColumns.filter(function (d) {
          return !d.expander && d.aggregate;
        });
        if (pivotBy.length) {
          (function () {
            var groupRecursively = function groupRecursively(rows, keys) {
              var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

              // This is the last level, just return the rows
              if (i === keys.length) {
                return rows;
              }
              // Group the rows together for this level
              var groupedRows = Object.entries(_utils2.default.groupBy(rows, keys[i])).map(function (_ref) {
                var _ref3;

                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                return _ref3 = {}, _defineProperty(_ref3, pivotIDKey, keys[i]), _defineProperty(_ref3, pivotValKey, key), _defineProperty(_ref3, keys[i], key), _defineProperty(_ref3, subRowsKey, value), _defineProperty(_ref3, nestingLevelKey, i), _defineProperty(_ref3, groupedByPivotKey, true), _ref3;
              });
              // Recurse into the subRows
              groupedRows = groupedRows.map(function (rowGroup) {
                var _extends2;

                var subRows = groupRecursively(rowGroup[subRowsKey], keys, i + 1);
                return _extends({}, rowGroup, (_extends2 = {}, _defineProperty(_extends2, subRowsKey, subRows), _defineProperty(_extends2, aggregatedKey, true), _extends2), aggregate(subRows));
              });
              return groupedRows;
            };
            resolvedData = groupRecursively(resolvedData, pivotBy);
          })();
        }

        return _extends({}, newState, {
          resolvedData: resolvedData,
          allVisibleColumns: allVisibleColumns,
          headerGroups: headerGroups,
          allDecoratedColumns: allDecoratedColumns,
          hasHeaderGroups: hasHeaderGroups
        });
      }
    }, {
      key: 'getSortedData',
      value: function getSortedData(resolvedState) {
        var manual = resolvedState.manual,
            sorted = resolvedState.sorted,
            filtered = resolvedState.filtered,
            defaultFilterMethod = resolvedState.defaultFilterMethod,
            resolvedData = resolvedState.resolvedData,
            allVisibleColumns = resolvedState.allVisibleColumns,
            allDecoratedColumns = resolvedState.allDecoratedColumns;


        var sortMethodsByColumnID = {};

        allDecoratedColumns.filter(function (col) {
          return col.sortMethod;
        }).forEach(function (col) {
          sortMethodsByColumnID[col.id] = col.sortMethod;
        });

        // Resolve the data from either manual data or sorted data
        return {
          sortedData: manual ? resolvedData : this.sortData(this.filterData(resolvedData, filtered, defaultFilterMethod, allVisibleColumns), sorted, sortMethodsByColumnID)
        };
      }
    }, {
      key: 'fireFetchData',
      value: function fireFetchData() {
        this.props.onFetchData(this.getResolvedState(), this);
      }
    }, {
      key: 'getPropOrState',
      value: function getPropOrState(key) {
        return _utils2.default.getFirstDefined(this.props[key], this.state[key]);
      }
    }, {
      key: 'getStateOrProp',
      value: function getStateOrProp(key) {
        return _utils2.default.getFirstDefined(this.state[key], this.props[key]);
      }
    }, {
      key: 'filterData',
      value: function filterData(data, filtered, defaultFilterMethod, allVisibleColumns) {
        var _this3 = this;

        var filteredData = data;

        if (filtered.length) {
          filteredData = filtered.reduce(function (filteredSoFar, nextFilter) {
            return filteredSoFar.filter(function (row) {
              var column = void 0;

              column = allVisibleColumns.find(function (x) {
                return x.id === nextFilter.id;
              });

              // Don't filter hidden columns or columns that have had their filters disabled
              if (!column || column.filterable === false) {
                return true;
              }

              var filterMethod = column.filterMethod || defaultFilterMethod;

              return filterMethod(nextFilter, row, column);
            });
          }, filteredData);

          // Apply the filter to the subrows if we are pivoting, and then
          // filter any rows without subcolumns because it would be strange to show
          filteredData = filteredData.map(function (row) {
            if (!row[_this3.props.subRowsKey]) {
              return row;
            }
            return _extends({}, row, _defineProperty({}, _this3.props.subRowsKey, _this3.filterData(row[_this3.props.subRowsKey], filtered, defaultFilterMethod, allVisibleColumns)));
          }).filter(function (row) {
            if (!row[_this3.props.subRowsKey]) {
              return true;
            }
            return row[_this3.props.subRowsKey].length > 0;
          });
        }

        return filteredData;
      }
    }, {
      key: 'sortData',
      value: function sortData(data, sorted) {
        var _this4 = this;

        var sortMethodsByColumnID = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if (!sorted.length) {
          return data;
        }

        var sortedData = (this.props.orderByMethod || _utils2.default.orderBy)(data, sorted.map(function (sort) {
          // Support custom sorting methods for each column
          if (sortMethodsByColumnID[sort.id]) {
            return function (a, b) {
              return sortMethodsByColumnID[sort.id](a[sort.id], b[sort.id]);
            };
          }
          return function (a, b) {
            return _this4.props.defaultSortMethod(a[sort.id], b[sort.id]);
          };
        }), sorted.map(function (d) {
          return !d.desc;
        }), this.props.indexKey);

        sortedData.forEach(function (row) {
          if (!row[_this4.props.subRowsKey]) {
            return;
          }
          row[_this4.props.subRowsKey] = _this4.sortData(row[_this4.props.subRowsKey], sorted, sortMethodsByColumnID);
        });

        return sortedData;
      }
    }, {
      key: 'getMinRows',
      value: function getMinRows() {
        return _utils2.default.getFirstDefined(this.props.minRows, this.getStateOrProp('pageSize'));
      }

      // User actions

    }, {
      key: 'onPageChange',
      value: function onPageChange(page) {
        var _this5 = this;

        var _props = this.props,
            onPageChange = _props.onPageChange,
            collapseOnPageChange = _props.collapseOnPageChange;


        var newState = { page: page };
        if (collapseOnPageChange) {
          newState.expanded = {};
        }
        this.setStateWithData(newState, function () {
          onPageChange && onPageChange(page);
          _this5.fireFetchData();
        });
      }
    }, {
      key: 'onPageSizeChange',
      value: function onPageSizeChange(newPageSize) {
        var _this6 = this;

        var onPageSizeChange = this.props.onPageSizeChange;

        var _getResolvedState = this.getResolvedState(),
            pageSize = _getResolvedState.pageSize,
            page = _getResolvedState.page;

        // Normalize the page to display


        var currentRow = pageSize * page;
        var newPage = Math.floor(currentRow / newPageSize);

        this.setStateWithData({
          pageSize: newPageSize,
          page: newPage
        }, function () {
          onPageSizeChange && onPageSizeChange(newPageSize, newPage);
          _this6.fireFetchData();
        });
      }
    }, {
      key: 'sortColumn',
      value: function sortColumn(column, additive) {
        var _this7 = this;

        var _getResolvedState2 = this.getResolvedState(),
            sorted = _getResolvedState2.sorted,
            skipNextSort = _getResolvedState2.skipNextSort,
            defaultSortDesc = _getResolvedState2.defaultSortDesc;

        var firstSortDirection = column.hasOwnProperty('defaultSortDesc') ? column.defaultSortDesc : defaultSortDesc;
        var secondSortDirection = !firstSortDirection;

        // we can't stop event propagation from the column resize move handlers
        // attached to the document because of react's synthetic events
        // so we have to prevent the sort function from actually sorting
        // if we click on the column resize element within a header.
        if (skipNextSort) {
          this.setStateWithData({
            skipNextSort: false
          });
          return;
        }

        var onSortedChange = this.props.onSortedChange;


        var newSorted = _utils2.default.clone(sorted || []).map(function (d) {
          d.desc = _utils2.default.isSortingDesc(d);
          return d;
        });
        if (!_utils2.default.isArray(column)) {
          // Single-Sort
          var existingIndex = newSorted.findIndex(function (d) {
            return d.id === column.id;
          });
          if (existingIndex > -1) {
            var existing = newSorted[existingIndex];
            if (existing.desc === secondSortDirection) {
              if (additive) {
                newSorted.splice(existingIndex, 1);
              } else {
                existing.desc = firstSortDirection;
                newSorted = [existing];
              }
            } else {
              existing.desc = secondSortDirection;
              if (!additive) {
                newSorted = [existing];
              }
            }
          } else {
            if (additive) {
              newSorted.push({
                id: column.id,
                desc: firstSortDirection
              });
            } else {
              newSorted = [{
                id: column.id,
                desc: firstSortDirection
              }];
            }
          }
        } else {
          (function () {
            // Multi-Sort
            var existingIndex = newSorted.findIndex(function (d) {
              return d.id === column[0].id;
            });
            // Existing Sorted Column
            if (existingIndex > -1) {
              var _existing = newSorted[existingIndex];
              if (_existing.desc === secondSortDirection) {
                if (additive) {
                  newSorted.splice(existingIndex, column.length);
                } else {
                  column.forEach(function (d, i) {
                    newSorted[existingIndex + i].desc = firstSortDirection;
                  });
                }
              } else {
                column.forEach(function (d, i) {
                  newSorted[existingIndex + i].desc = secondSortDirection;
                });
              }
              if (!additive) {
                newSorted = newSorted.slice(existingIndex, column.length);
              }
            } else {
              // New Sort Column
              if (additive) {
                newSorted = newSorted.concat(column.map(function (d) {
                  return {
                    id: d.id,
                    desc: firstSortDirection
                  };
                }));
              } else {
                newSorted = column.map(function (d) {
                  return {
                    id: d.id,
                    desc: firstSortDirection
                  };
                });
              }
            }
          })();
        }

        this.setStateWithData({
          page: !sorted.length && newSorted.length || !additive ? 0 : this.state.page,
          sorted: newSorted
        }, function () {
          onSortedChange && onSortedChange(newSorted, column, additive);
          _this7.fireFetchData();
        });
      }
    }, {
      key: 'filterColumn',
      value: function filterColumn(column, value) {
        var _this8 = this;

        var _getResolvedState3 = this.getResolvedState(),
            filtered = _getResolvedState3.filtered;

        var onFilteredChange = this.props.onFilteredChange;

        // Remove old filter first if it exists

        var newFiltering = (filtered || []).filter(function (x) {
          if (x.id !== column.id) {
            return true;
          }
        });

        if (value !== '') {
          newFiltering.push({
            id: column.id,
            value: value
          });
        }

        this.setStateWithData({
          filtered: newFiltering
        }, function () {
          onFilteredChange && onFilteredChange(newFiltering, column, value);
          _this8.fireFetchData();
        });
      }
    }, {
      key: 'resizeColumnStart',
      value: function resizeColumnStart(column, event, isTouch) {
        var _this9 = this;

        var parentWidth = event.target.parentElement.getBoundingClientRect().width;

        var pageX = void 0;
        if (isTouch) {
          pageX = event.changedTouches[0].pageX;
        } else {
          pageX = event.pageX;
        }

        this.setStateWithData({
          currentlyResizing: {
            id: column.id,
            startX: pageX,
            parentWidth: parentWidth
          }
        }, function () {
          if (isTouch) {
            document.addEventListener('touchmove', _this9.resizeColumnMoving);
            document.addEventListener('touchcancel', _this9.resizeColumnEnd);
            document.addEventListener('touchend', _this9.resizeColumnEnd);
          } else {
            document.addEventListener('mousemove', _this9.resizeColumnMoving);
            document.addEventListener('mouseup', _this9.resizeColumnEnd);
            document.addEventListener('mouseleave', _this9.resizeColumnEnd);
          }
        });
      }
    }, {
      key: 'resizeColumnEnd',
      value: function resizeColumnEnd(event) {
        var isTouch = event.type === 'touchend' || event.type === 'touchcancel';

        if (isTouch) {
          document.removeEventListener('touchmove', this.resizeColumnMoving);
          document.removeEventListener('touchcancel', this.resizeColumnEnd);
          document.removeEventListener('touchend', this.resizeColumnEnd);
        }

        // If its a touch event clear the mouse one's as well because sometimes
        // the mouseDown event gets called as well, but the mouseUp event doesn't
        document.removeEventListener('mousemove', this.resizeColumnMoving);
        document.removeEventListener('mouseup', this.resizeColumnEnd);
        document.removeEventListener('mouseleave', this.resizeColumnEnd);

        // The touch events don't propagate up to the sorting's onMouseDown event so
        // no need to prevent it from happening or else the first click after a touch
        // event resize will not sort the column.
        if (!isTouch) {
          this.setStateWithData({
            skipNextSort: true,
            currentlyResizing: false
          });
        }
      }
    }, {
      key: 'resizeColumnMoving',
      value: function resizeColumnMoving(event) {
        var onResizedChange = this.props.onResizedChange;

        var _getResolvedState4 = this.getResolvedState(),
            resized = _getResolvedState4.resized,
            currentlyResizing = _getResolvedState4.currentlyResizing;

        // Delete old value


        var newResized = resized.filter(function (x) {
          return x.id !== currentlyResizing.id;
        });

        var pageX = void 0;

        if (event.type === 'touchmove') {
          pageX = event.changedTouches[0].pageX;
        } else if (event.type === 'mousemove') {
          pageX = event.pageX;
        }

        // Set the min size to 10 to account for margin and border or else the group headers don't line up correctly
        var newWidth = Math.max(currentlyResizing.parentWidth + pageX - currentlyResizing.startX, 11);

        newResized.push({
          id: currentlyResizing.id,
          value: newWidth
        });

        this.setStateWithData({
          resized: newResized
        }, function () {
          onResizedChange && onResizedChange(newResized, event);
        });
      }
    }]);

    return _class;
  }(Base);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRob2RzLmpzIl0sIm5hbWVzIjpbInByb3BzIiwic3RhdGUiLCJyZXNvbHZlZFN0YXRlIiwiY29tcGFjdE9iamVjdCIsIm5ld1N0YXRlIiwiY29sdW1ucyIsInBpdm90QnkiLCJkYXRhIiwicGl2b3RJREtleSIsInBpdm90VmFsS2V5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJuZXN0aW5nTGV2ZWxLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJTdWJDb21wb25lbnQiLCJoYXNIZWFkZXJHcm91cHMiLCJwdXNoIiwiSGVhZGVyIiwiaWQiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJmb3JFYWNoIiwiY29sdW1uIiwiY29sdW1uc1dpdGhFeHBhbmRlciIsImV4cGFuZGVyQ29sdW1uIiwiZmluZCIsImNvbCIsImV4cGFuZGVyIiwic29tZSIsImNvbDIiLCJtYWtlRGVjb3JhdGVkQ29sdW1uIiwiZGNvbCIsImV4cGFuZGVyRGVmYXVsdHMiLCJhY2Nlc3NvciIsImFjY2Vzc29yU3RyaW5nIiwiZ2V0Iiwicm93IiwiY29uc29sZSIsIndhcm4iLCJFcnJvciIsInVuZGVmaW5lZCIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJkZWNvcmF0ZUFuZEFkZFRvQWxsIiwiZGVjb3JhdGVkQ29sdW1uIiwiYWxsRGVjb3JhdGVkQ29sdW1ucyIsImRlY29yYXRlZENvbHVtbnMiLCJtYXAiLCJpIiwidmlzaWJsZUNvbHVtbnMiLCJzbGljZSIsImFsbFZpc2libGVDb2x1bW5zIiwidmlzaWJsZVN1YkNvbHVtbnMiLCJmaWx0ZXIiLCJpbmRleE9mIiwiZCIsImdldEZpcnN0RGVmaW5lZCIsInNob3ciLCJsZW5ndGgiLCJwaXZvdEluZGV4IiwiZmluZEluZGV4IiwicGl2b3QiLCJwaXZvdENvbHVtbnMiLCJmb3VuZCIsInBpdm90SUQiLCJwaXZvdENvbHVtbkdyb3VwIiwiaGVhZGVyIiwicGl2b3REZWZhdWx0cyIsInBpdm90ZWQiLCJzcGxpY2UiLCJ1bnNoaWZ0IiwiaGVhZGVyR3JvdXBzIiwiY3VycmVudFNwYW4iLCJhZGRIZWFkZXIiLCJjb25jYXQiLCJhY2Nlc3NSb3ciLCJsZXZlbCIsInJlc29sdmVkRGF0YSIsImFnZ3JlZ2F0ZSIsImFnZ3JlZ2F0aW9uVmFsdWVzIiwiYWdncmVnYXRpbmdDb2x1bW5zIiwidmFsdWVzIiwicm93cyIsImdyb3VwUmVjdXJzaXZlbHkiLCJrZXlzIiwiZ3JvdXBlZFJvd3MiLCJPYmplY3QiLCJlbnRyaWVzIiwiZ3JvdXBCeSIsImtleSIsInZhbHVlIiwic3ViUm93cyIsInJvd0dyb3VwIiwibWFudWFsIiwic29ydGVkIiwiZmlsdGVyZWQiLCJkZWZhdWx0RmlsdGVyTWV0aG9kIiwic29ydE1ldGhvZHNCeUNvbHVtbklEIiwic29ydE1ldGhvZCIsInNvcnRlZERhdGEiLCJzb3J0RGF0YSIsImZpbHRlckRhdGEiLCJvbkZldGNoRGF0YSIsImdldFJlc29sdmVkU3RhdGUiLCJmaWx0ZXJlZERhdGEiLCJyZWR1Y2UiLCJmaWx0ZXJlZFNvRmFyIiwibmV4dEZpbHRlciIsIngiLCJmaWx0ZXJNZXRob2QiLCJvcmRlckJ5TWV0aG9kIiwib3JkZXJCeSIsInNvcnQiLCJhIiwiYiIsImRlZmF1bHRTb3J0TWV0aG9kIiwiZGVzYyIsIm1pblJvd3MiLCJnZXRTdGF0ZU9yUHJvcCIsInBhZ2UiLCJvblBhZ2VDaGFuZ2UiLCJjb2xsYXBzZU9uUGFnZUNoYW5nZSIsImV4cGFuZGVkIiwic2V0U3RhdGVXaXRoRGF0YSIsImZpcmVGZXRjaERhdGEiLCJuZXdQYWdlU2l6ZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJwYWdlU2l6ZSIsImN1cnJlbnRSb3ciLCJuZXdQYWdlIiwiTWF0aCIsImZsb29yIiwiYWRkaXRpdmUiLCJza2lwTmV4dFNvcnQiLCJkZWZhdWx0U29ydERlc2MiLCJmaXJzdFNvcnREaXJlY3Rpb24iLCJoYXNPd25Qcm9wZXJ0eSIsInNlY29uZFNvcnREaXJlY3Rpb24iLCJvblNvcnRlZENoYW5nZSIsIm5ld1NvcnRlZCIsImNsb25lIiwiaXNTb3J0aW5nRGVzYyIsImlzQXJyYXkiLCJleGlzdGluZ0luZGV4IiwiZXhpc3RpbmciLCJvbkZpbHRlcmVkQ2hhbmdlIiwibmV3RmlsdGVyaW5nIiwiZXZlbnQiLCJpc1RvdWNoIiwicGFyZW50V2lkdGgiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJwYWdlWCIsImNoYW5nZWRUb3VjaGVzIiwiY3VycmVudGx5UmVzaXppbmciLCJzdGFydFgiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemVDb2x1bW5Nb3ZpbmciLCJyZXNpemVDb2x1bW5FbmQiLCJ0eXBlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uUmVzaXplZENoYW5nZSIsInJlc2l6ZWQiLCJuZXdSZXNpemVkIiwibmV3V2lkdGgiLCJtYXgiLCJCYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBRWU7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsdUNBRU9BLEtBRlAsRUFFY0MsS0FGZCxFQUVxQjtBQUM5QixZQUFNQyw2QkFDRCxnQkFBRUMsYUFBRixDQUFnQixLQUFLRixLQUFyQixDQURDLEVBRUQsZ0JBQUVFLGFBQUYsQ0FBZ0IsS0FBS0gsS0FBckIsQ0FGQyxFQUdELGdCQUFFRyxhQUFGLENBQWdCRixLQUFoQixDQUhDLEVBSUQsZ0JBQUVFLGFBQUYsQ0FBZ0JILEtBQWhCLENBSkMsQ0FBTjtBQU1BLGVBQU9FLGFBQVA7QUFDRDtBQVZVO0FBQUE7QUFBQSxtQ0FZR0UsUUFaSCxFQVlhO0FBQUE7O0FBQUEsWUFFcEJDLE9BRm9CLEdBY2xCRCxRQWRrQixDQUVwQkMsT0FGb0I7QUFBQSxnQ0FjbEJELFFBZGtCLENBR3BCRSxPQUhvQjtBQUFBLFlBR3BCQSxPQUhvQixxQ0FHVixF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QUt2SyxLQURSLENBQ2pCdUssZUFEaUI7O0FBQUEsaUNBRWMsS0FBSzdELGdCQUFMLEVBRmQ7QUFBQSxZQUVqQjhELE9BRmlCLHNCQUVqQkEsT0FGaUI7QUFBQSxZQUVSVCxpQkFGUSxzQkFFUkEsaUJBRlE7O0FBSXpCOzs7QUFDQSxZQUFNVSxhQUFhRCxRQUFRaEgsTUFBUixDQUFlO0FBQUEsaUJBQUt1RCxFQUFFM0YsRUFBRixLQUFTMkksa0JBQWtCM0ksRUFBaEM7QUFBQSxTQUFmLENBQW5COztBQUVBLFlBQUl5SSxjQUFKOztBQUVBLFlBQUlQLE1BQU1lLElBQU4sS0FBZSxXQUFuQixFQUFnQztBQUM5QlIsa0JBQVFQLE1BQU1RLGNBQU4sQ0FBcUIsQ0FBckIsRUFBd0JELEtBQWhDO0FBQ0QsU0FGRCxNQUVPLElBQUlQLE1BQU1lLElBQU4sS0FBZSxXQUFuQixFQUFnQztBQUNyQ1Isa0JBQVFQLE1BQU1PLEtBQWQ7QUFDRDs7QUFFRDtBQUNBLFlBQU1hLFdBQVdyQyxLQUFLc0MsR0FBTCxDQUNmWixrQkFBa0JQLFdBQWxCLEdBQWdDSyxLQUFoQyxHQUF3Q0Usa0JBQWtCQyxNQUQzQyxFQUVmLEVBRmUsQ0FBakI7O0FBS0FTLG1CQUFXdkosSUFBWCxDQUFnQjtBQUNkRSxjQUFJMkksa0JBQWtCM0ksRUFEUjtBQUVkeUUsaUJBQU82RTtBQUZPLFNBQWhCOztBQUtBLGFBQUs1QyxnQkFBTCxDQUNFO0FBQ0UwQyxtQkFBU0M7QUFEWCxTQURGLEVBSUUsWUFBTTtBQUNKRiw2QkFBbUJBLGdCQUFnQkUsVUFBaEIsRUFBNEJuQixLQUE1QixDQUFuQjtBQUNELFNBTkg7QUFRRDtBQTdyQlU7O0FBQUE7QUFBQSxJQUNDc0IsSUFERDtBQUFBLEMiLCJmaWxlIjoibWV0aG9kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IEJhc2UgPT5cbiAgY2xhc3MgZXh0ZW5kcyBCYXNlIHtcbiAgICBnZXRSZXNvbHZlZFN0YXRlIChwcm9wcywgc3RhdGUpIHtcbiAgICAgIGNvbnN0IHJlc29sdmVkU3RhdGUgPSB7XG4gICAgICAgIC4uLl8uY29tcGFjdE9iamVjdCh0aGlzLnN0YXRlKSxcbiAgICAgICAgLi4uXy5jb21wYWN0T2JqZWN0KHRoaXMucHJvcHMpLFxuICAgICAgICAuLi5fLmNvbXBhY3RPYmplY3Qoc3RhdGUpLFxuICAgICAgICAuLi5fLmNvbXBhY3RPYmplY3QocHJvcHMpLFxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc29sdmVkU3RhdGVcbiAgICB9XG5cbiAgICBnZXREYXRhTW9kZWwgKG5ld1N0YXRlKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNvbHVtbnMsXG4gICAgICAgIHBpdm90QnkgPSBbXSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgcGl2b3RJREtleSxcbiAgICAgICAgcGl2b3RWYWxLZXksXG4gICAgICAgIHN1YlJvd3NLZXksXG4gICAgICAgIGFnZ3JlZ2F0ZWRLZXksXG4gICAgICAgIG5lc3RpbmdMZXZlbEtleSxcbiAgICAgICAgb3JpZ2luYWxLZXksXG4gICAgICAgIGluZGV4S2V5LFxuICAgICAgICBncm91cGVkQnlQaXZvdEtleSxcbiAgICAgICAgU3ViQ29tcG9uZW50LFxuICAgICAgfSA9IG5ld1N0YXRlXG5cbiAgICAgIC8vIERldGVybWluZSBIZWFkZXIgR3JvdXBzXG4gICAgICBsZXQgaGFzSGVhZGVyR3JvdXBzID0gZmFsc2VcblxuICAgICAgY29sdW1ucy5wdXNoKHtcbiAgICAgICAgSGVhZGVyOiAnJyxcbiAgICAgICAgaWQ6ICdAQGR1bW15JyxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIGNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICBpZiAoY29sdW1uLmNvbHVtbnMpIHtcbiAgICAgICAgICBoYXNIZWFkZXJHcm91cHMgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGxldCBjb2x1bW5zV2l0aEV4cGFuZGVyID0gWy4uLmNvbHVtbnNdXG5cbiAgICAgIGxldCBleHBhbmRlckNvbHVtbiA9IGNvbHVtbnMuZmluZChcbiAgICAgICAgY29sID0+XG4gICAgICAgICAgY29sLmV4cGFuZGVyIHx8XG4gICAgICAgICAgKGNvbC5jb2x1bW5zICYmIGNvbC5jb2x1bW5zLnNvbWUoY29sMiA9PiBjb2wyLmV4cGFuZGVyKSlcbiAgICAgIClcbiAgICAgIC8vIFRoZSBhY3R1YWwgZXhwYW5kZXIgbWlnaHQgYmUgaW4gdGhlIGNvbHVtbnMgZmllbGQgb2YgYSBncm91cCBjb2x1bW5cbiAgICAgIGlmIChleHBhbmRlckNvbHVtbiAmJiAhZXhwYW5kZXJDb2x1bW4uZXhwYW5kZXIpIHtcbiAgICAgICAgZXhwYW5kZXJDb2x1bW4gPSBleHBhbmRlckNvbHVtbi5jb2x1bW5zLmZpbmQoY29sID0+IGNvbC5leHBhbmRlcilcbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2UgaGF2ZSBTdWJDb21wb25lbnQncyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSBoYXZlIGFuIGV4cGFuZGVyIGNvbHVtblxuICAgICAgaWYgKFN1YkNvbXBvbmVudCAmJiAhZXhwYW5kZXJDb2x1bW4pIHtcbiAgICAgICAgZXhwYW5kZXJDb2x1bW4gPSB7IGV4cGFuZGVyOiB0cnVlIH1cbiAgICAgICAgY29sdW1uc1dpdGhFeHBhbmRlciA9IFtleHBhbmRlckNvbHVtbiwgLi4uY29sdW1uc1dpdGhFeHBhbmRlcl1cbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFrZURlY29yYXRlZENvbHVtbiA9IGNvbHVtbiA9PiB7XG4gICAgICAgIGxldCBkY29sXG4gICAgICAgIGlmIChjb2x1bW4uZXhwYW5kZXIpIHtcbiAgICAgICAgICBkY29sID0ge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5jb2x1bW4sXG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLmV4cGFuZGVyRGVmYXVsdHMsXG4gICAgICAgICAgICAuLi5jb2x1bW4sXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRjb2wgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLmNvbHVtbixcbiAgICAgICAgICAgIC4uLmNvbHVtbixcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGRjb2wuYWNjZXNzb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZGNvbC5pZCA9IGRjb2wuaWQgfHwgZGNvbC5hY2Nlc3NvclxuICAgICAgICAgIGNvbnN0IGFjY2Vzc29yU3RyaW5nID0gZGNvbC5hY2Nlc3NvclxuICAgICAgICAgIGRjb2wuYWNjZXNzb3IgPSByb3cgPT4gXy5nZXQocm93LCBhY2Nlc3NvclN0cmluZylcbiAgICAgICAgICByZXR1cm4gZGNvbFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRjb2wuYWNjZXNzb3IgJiYgIWRjb2wuaWQpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZGNvbClcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQSBjb2x1bW4gaWQgaXMgcmVxdWlyZWQgaWYgdXNpbmcgYSBub24tc3RyaW5nIGFjY2Vzc29yIGZvciBjb2x1bW4gYWJvdmUuJ1xuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGNvbC5hY2Nlc3Nvcikge1xuICAgICAgICAgIGRjb2wuYWNjZXNzb3IgPSBkID0+IHVuZGVmaW5lZFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW5zdXJlIG1pbldpZHRoIGlzIG5vdCBncmVhdGVyIHRoYW4gbWF4V2lkdGggaWYgc2V0XG4gICAgICAgIGlmIChkY29sLm1heFdpZHRoIDwgZGNvbC5taW5XaWR0aCkge1xuICAgICAgICAgIGRjb2wubWluV2lkdGggPSBkY29sLm1heFdpZHRoXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGNvbFxuICAgICAgfVxuXG4gICAgICAvLyBEZWNvcmF0ZSB0aGUgY29sdW1uc1xuICAgICAgY29uc3QgZGVjb3JhdGVBbmRBZGRUb0FsbCA9IGNvbCA9PiB7XG4gICAgICAgIGNvbnN0IGRlY29yYXRlZENvbHVtbiA9IG1ha2VEZWNvcmF0ZWRDb2x1bW4oY29sKVxuICAgICAgICBhbGxEZWNvcmF0ZWRDb2x1bW5zLnB1c2goZGVjb3JhdGVkQ29sdW1uKVxuICAgICAgICByZXR1cm4gZGVjb3JhdGVkQ29sdW1uXG4gICAgICB9XG4gICAgICBsZXQgYWxsRGVjb3JhdGVkQ29sdW1ucyA9IFtdXG4gICAgICBjb25zdCBkZWNvcmF0ZWRDb2x1bW5zID0gY29sdW1uc1dpdGhFeHBhbmRlci5tYXAoKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgICBpZiAoY29sdW1uLmNvbHVtbnMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY29sdW1uLFxuICAgICAgICAgICAgY29sdW1uczogY29sdW1uLmNvbHVtbnMubWFwKGRlY29yYXRlQW5kQWRkVG9BbGwpLFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZGVjb3JhdGVBbmRBZGRUb0FsbChjb2x1bW4pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIEJ1aWxkIHRoZSB2aXNpYmxlIGNvbHVtbnMsIGhlYWRlcnMgYW5kIGZsYXQgY29sdW1uIGxpc3RcbiAgICAgIGxldCB2aXNpYmxlQ29sdW1ucyA9IGRlY29yYXRlZENvbHVtbnMuc2xpY2UoKVxuICAgICAgbGV0IGFsbFZpc2libGVDb2x1bW5zID0gW11cblxuICAgICAgdmlzaWJsZUNvbHVtbnMgPSB2aXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgICBpZiAoY29sdW1uLmNvbHVtbnMpIHtcbiAgICAgICAgICBjb25zdCB2aXNpYmxlU3ViQ29sdW1ucyA9IGNvbHVtbi5jb2x1bW5zLmZpbHRlcihcbiAgICAgICAgICAgIGQgPT5cbiAgICAgICAgICAgICAgcGl2b3RCeS5pbmRleE9mKGQuaWQpID4gLTFcbiAgICAgICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICAgICAgOiBfLmdldEZpcnN0RGVmaW5lZChkLnNob3csIHRydWUpXG4gICAgICAgICAgKVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jb2x1bW4sXG4gICAgICAgICAgICBjb2x1bW5zOiB2aXNpYmxlU3ViQ29sdW1ucyxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtblxuICAgICAgfSlcblxuICAgICAgdmlzaWJsZUNvbHVtbnMgPSB2aXNpYmxlQ29sdW1ucy5maWx0ZXIoY29sdW1uID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbHVtbi5jb2x1bW5zXG4gICAgICAgICAgPyBjb2x1bW4uY29sdW1ucy5sZW5ndGhcbiAgICAgICAgICA6IHBpdm90QnkuaW5kZXhPZihjb2x1bW4uaWQpID4gLTFcbiAgICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICAgIDogXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnNob3csIHRydWUpXG4gICAgICB9KVxuXG4gICAgICAvLyBGaW5kIGFueSBjdXN0b20gcGl2b3QgbG9jYXRpb25cbiAgICAgIGNvbnN0IHBpdm90SW5kZXggPSB2aXNpYmxlQ29sdW1ucy5maW5kSW5kZXgoY29sID0+IGNvbC5waXZvdClcblxuICAgICAgLy8gSGFuZGxlIFBpdm90IENvbHVtbnNcbiAgICAgIGlmIChwaXZvdEJ5Lmxlbmd0aCkge1xuICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgcGl2b3QgY29sdW1ucyBpbiB0aGUgY29ycmVjdCBwaXZvdCBvcmRlclxuICAgICAgICBjb25zdCBwaXZvdENvbHVtbnMgPSBbXVxuICAgICAgICBwaXZvdEJ5LmZvckVhY2gocGl2b3RJRCA9PiB7XG4gICAgICAgICAgY29uc3QgZm91bmQgPSBhbGxEZWNvcmF0ZWRDb2x1bW5zLmZpbmQoZCA9PiBkLmlkID09PSBwaXZvdElEKVxuICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgcGl2b3RDb2x1bW5zLnB1c2goZm91bmQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBwaXZvdENvbHVtbkdyb3VwID0ge1xuICAgICAgICAgIGhlYWRlcjogKCkgPT4gPHN0cm9uZz5Hcm91cDwvc3Ryb25nPixcbiAgICAgICAgICBjb2x1bW5zOiBwaXZvdENvbHVtbnMubWFwKGNvbCA9PiAoe1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5waXZvdERlZmF1bHRzLFxuICAgICAgICAgICAgLi4uY29sLFxuICAgICAgICAgICAgcGl2b3RlZDogdHJ1ZSxcbiAgICAgICAgICB9KSksXG4gICAgICAgIH1cblxuICAgICAgICAvLyBQbGFjZSB0aGUgcGl2b3RDb2x1bW5zIGJhY2sgaW50byB0aGUgdmlzaWJsZUNvbHVtbnNcbiAgICAgICAgaWYgKHBpdm90SW5kZXggPj0gMCkge1xuICAgICAgICAgIHBpdm90Q29sdW1uR3JvdXAgPSB7XG4gICAgICAgICAgICAuLi52aXNpYmxlQ29sdW1uc1twaXZvdEluZGV4XSxcbiAgICAgICAgICAgIC4uLnBpdm90Q29sdW1uR3JvdXAsXG4gICAgICAgICAgfVxuICAgICAgICAgIHZpc2libGVDb2x1bW5zLnNwbGljZShwaXZvdEluZGV4LCAxLCBwaXZvdENvbHVtbkdyb3VwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZpc2libGVDb2x1bW5zLnVuc2hpZnQocGl2b3RDb2x1bW5Hcm91cClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBCdWlsZCBIZWFkZXIgR3JvdXBzXG4gICAgICBjb25zdCBoZWFkZXJHcm91cHMgPSBbXVxuICAgICAgbGV0IGN1cnJlbnRTcGFuID0gW11cblxuICAgICAgLy8gQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0byBhZGQgYSBoZWFkZXIgYW5kIHJlc2V0IHRoZSBjdXJyZW50U3BhblxuICAgICAgY29uc3QgYWRkSGVhZGVyID0gKGNvbHVtbnMsIGNvbHVtbikgPT4ge1xuICAgICAgICBoZWFkZXJHcm91cHMucHVzaCh7XG4gICAgICAgICAgLi4udGhpcy5wcm9wcy5jb2x1bW4sXG4gICAgICAgICAgLi4uY29sdW1uLFxuICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXG4gICAgICAgIH0pXG4gICAgICAgIGN1cnJlbnRTcGFuID0gW11cbiAgICAgIH1cblxuICAgICAgLy8gQnVpbGQgZmxhc3QgbGlzdCBvZiBhbGxWaXNpYmxlQ29sdW1ucyBhbmQgSGVhZGVyR3JvdXBzXG4gICAgICB2aXNpYmxlQ29sdW1ucy5mb3JFYWNoKChjb2x1bW4sIGkpID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi5jb2x1bW5zKSB7XG4gICAgICAgICAgYWxsVmlzaWJsZUNvbHVtbnMgPSBhbGxWaXNpYmxlQ29sdW1ucy5jb25jYXQoY29sdW1uLmNvbHVtbnMpXG4gICAgICAgICAgaWYgKGN1cnJlbnRTcGFuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFkZEhlYWRlcihjdXJyZW50U3BhbilcbiAgICAgICAgICB9XG4gICAgICAgICAgYWRkSGVhZGVyKGNvbHVtbi5jb2x1bW5zLCBjb2x1bW4pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgYWxsVmlzaWJsZUNvbHVtbnMucHVzaChjb2x1bW4pXG4gICAgICAgIGN1cnJlbnRTcGFuLnB1c2goY29sdW1uKVxuICAgICAgfSlcbiAgICAgIGlmIChoYXNIZWFkZXJHcm91cHMgJiYgY3VycmVudFNwYW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBhZGRIZWFkZXIoY3VycmVudFNwYW4pXG4gICAgICB9XG5cbiAgICAgIC8vIEFjY2VzcyB0aGUgZGF0YVxuICAgICAgY29uc3QgYWNjZXNzUm93ID0gKGQsIGksIGxldmVsID0gMCkgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSB7XG4gICAgICAgICAgW29yaWdpbmFsS2V5XTogZCxcbiAgICAgICAgICBbaW5kZXhLZXldOiBpLFxuICAgICAgICAgIFtzdWJSb3dzS2V5XTogZFtzdWJSb3dzS2V5XSxcbiAgICAgICAgICBbbmVzdGluZ0xldmVsS2V5XTogbGV2ZWwsXG4gICAgICAgIH1cbiAgICAgICAgYWxsRGVjb3JhdGVkQ29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgaWYgKGNvbHVtbi5leHBhbmRlcikgcmV0dXJuXG4gICAgICAgICAgcm93W2NvbHVtbi5pZF0gPSBjb2x1bW4uYWNjZXNzb3IoZClcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHJvd1tzdWJSb3dzS2V5XSkge1xuICAgICAgICAgIHJvd1tzdWJSb3dzS2V5XSA9IHJvd1tzdWJSb3dzS2V5XS5tYXAoKGQsIGkpID0+XG4gICAgICAgICAgICBhY2Nlc3NSb3coZCwgaSwgbGV2ZWwgKyAxKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93XG4gICAgICB9XG4gICAgICBsZXQgcmVzb2x2ZWREYXRhID0gZGF0YS5tYXAoKGQsIGkpID0+IGFjY2Vzc1JvdyhkLCBpKSlcblxuICAgICAgLy8gSWYgcGl2b3RpbmcsIHJlY3Vyc2l2ZWx5IGdyb3VwIHRoZSBkYXRhXG4gICAgICBjb25zdCBhZ2dyZWdhdGUgPSByb3dzID0+IHtcbiAgICAgICAgY29uc3QgYWdncmVnYXRpb25WYWx1ZXMgPSB7fVxuICAgICAgICBhZ2dyZWdhdGluZ0NvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHJvd3MubWFwKGQgPT4gZFtjb2x1bW4uaWRdKVxuICAgICAgICAgIGFnZ3JlZ2F0aW9uVmFsdWVzW2NvbHVtbi5pZF0gPSBjb2x1bW4uYWdncmVnYXRlKHZhbHVlcywgcm93cylcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFnZ3JlZ2F0aW9uVmFsdWVzXG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IE1ha2UgaXQgcG9zc2libGUgdG8gZmFicmljYXRlIG5lc3RlZCByb3dzIHdpdGhvdXQgcGl2b3RpbmdcbiAgICAgIGNvbnN0IGFnZ3JlZ2F0aW5nQ29sdW1ucyA9IGFsbFZpc2libGVDb2x1bW5zLmZpbHRlcihcbiAgICAgICAgZCA9PiAhZC5leHBhbmRlciAmJiBkLmFnZ3JlZ2F0ZVxuICAgICAgKVxuICAgICAgaWYgKHBpdm90QnkubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwUmVjdXJzaXZlbHkgPSAocm93cywga2V5cywgaSA9IDApID0+IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBsYXN0IGxldmVsLCBqdXN0IHJldHVybiB0aGUgcm93c1xuICAgICAgICAgIGlmIChpID09PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHJvd3NcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gR3JvdXAgdGhlIHJvd3MgdG9nZXRoZXIgZm9yIHRoaXMgbGV2ZWxcbiAgICAgICAgICBsZXQgZ3JvdXBlZFJvd3MgPSBPYmplY3QuZW50cmllcyhcbiAgICAgICAgICAgIF8uZ3JvdXBCeShyb3dzLCBrZXlzW2ldKVxuICAgICAgICAgICkubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIFtwaXZvdElES2V5XToga2V5c1tpXSxcbiAgICAgICAgICAgICAgW3Bpdm90VmFsS2V5XToga2V5LFxuICAgICAgICAgICAgICBba2V5c1tpXV06IGtleSxcbiAgICAgICAgICAgICAgW3N1YlJvd3NLZXldOiB2YWx1ZSxcbiAgICAgICAgICAgICAgW25lc3RpbmdMZXZlbEtleV06IGksXG4gICAgICAgICAgICAgIFtncm91cGVkQnlQaXZvdEtleV06IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAvLyBSZWN1cnNlIGludG8gdGhlIHN1YlJvd3NcbiAgICAgICAgICBncm91cGVkUm93cyA9IGdyb3VwZWRSb3dzLm1hcChyb3dHcm91cCA9PiB7XG4gICAgICAgICAgICBsZXQgc3ViUm93cyA9IGdyb3VwUmVjdXJzaXZlbHkocm93R3JvdXBbc3ViUm93c0tleV0sIGtleXMsIGkgKyAxKVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4ucm93R3JvdXAsXG4gICAgICAgICAgICAgIFtzdWJSb3dzS2V5XTogc3ViUm93cyxcbiAgICAgICAgICAgICAgW2FnZ3JlZ2F0ZWRLZXldOiB0cnVlLFxuICAgICAgICAgICAgICAuLi5hZ2dyZWdhdGUoc3ViUm93cyksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gZ3JvdXBlZFJvd3NcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZERhdGEgPSBncm91cFJlY3Vyc2l2ZWx5KHJlc29sdmVkRGF0YSwgcGl2b3RCeSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubmV3U3RhdGUsXG4gICAgICAgIHJlc29sdmVkRGF0YSxcbiAgICAgICAgYWxsVmlzaWJsZUNvbHVtbnMsXG4gICAgICAgIGhlYWRlckdyb3VwcyxcbiAgICAgICAgYWxsRGVjb3JhdGVkQ29sdW1ucyxcbiAgICAgICAgaGFzSGVhZGVyR3JvdXBzLFxuICAgICAgfVxuICAgIH1cblxuICAgIGdldFNvcnRlZERhdGEgKHJlc29sdmVkU3RhdGUpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWFudWFsLFxuICAgICAgICBzb3J0ZWQsXG4gICAgICAgIGZpbHRlcmVkLFxuICAgICAgICBkZWZhdWx0RmlsdGVyTWV0aG9kLFxuICAgICAgICByZXNvbHZlZERhdGEsXG4gICAgICAgIGFsbFZpc2libGVDb2x1bW5zLFxuICAgICAgICBhbGxEZWNvcmF0ZWRDb2x1bW5zLFxuICAgICAgfSA9IHJlc29sdmVkU3RhdGVcblxuICAgICAgY29uc3Qgc29ydE1ldGhvZHNCeUNvbHVtbklEID0ge31cblxuICAgICAgYWxsRGVjb3JhdGVkQ29sdW1ucy5maWx0ZXIoY29sID0+IGNvbC5zb3J0TWV0aG9kKS5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgIHNvcnRNZXRob2RzQnlDb2x1bW5JRFtjb2wuaWRdID0gY29sLnNvcnRNZXRob2RcbiAgICAgIH0pXG5cbiAgICAgIC8vIFJlc29sdmUgdGhlIGRhdGEgZnJvbSBlaXRoZXIgbWFudWFsIGRhdGEgb3Igc29ydGVkIGRhdGFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNvcnRlZERhdGE6IG1hbnVhbFxuICAgICAgICAgID8gcmVzb2x2ZWREYXRhXG4gICAgICAgICAgOiB0aGlzLnNvcnREYXRhKFxuICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGEoXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWREYXRhLFxuICAgICAgICAgICAgICAgIGZpbHRlcmVkLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRGaWx0ZXJNZXRob2QsXG4gICAgICAgICAgICAgICAgYWxsVmlzaWJsZUNvbHVtbnNcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgc29ydGVkLFxuICAgICAgICAgICAgICBzb3J0TWV0aG9kc0J5Q29sdW1uSURcbiAgICAgICAgICAgICksXG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlyZUZldGNoRGF0YSAoKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRmV0Y2hEYXRhKHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpLCB0aGlzKVxuICAgIH1cblxuICAgIGdldFByb3BPclN0YXRlIChrZXkpIHtcbiAgICAgIHJldHVybiBfLmdldEZpcnN0RGVmaW5lZCh0aGlzLnByb3BzW2tleV0sIHRoaXMuc3RhdGVba2V5XSlcbiAgICB9XG5cbiAgICBnZXRTdGF0ZU9yUHJvcCAoa2V5KSB7XG4gICAgICByZXR1cm4gXy5nZXRGaXJzdERlZmluZWQodGhpcy5zdGF0ZVtrZXldLCB0aGlzLnByb3BzW2tleV0pXG4gICAgfVxuXG4gICAgZmlsdGVyRGF0YSAoZGF0YSwgZmlsdGVyZWQsIGRlZmF1bHRGaWx0ZXJNZXRob2QsIGFsbFZpc2libGVDb2x1bW5zKSB7XG4gICAgICBsZXQgZmlsdGVyZWREYXRhID0gZGF0YVxuXG4gICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoKSB7XG4gICAgICAgIGZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkLnJlZHVjZSgoZmlsdGVyZWRTb0ZhciwgbmV4dEZpbHRlcikgPT4ge1xuICAgICAgICAgIHJldHVybiBmaWx0ZXJlZFNvRmFyLmZpbHRlcihyb3cgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtblxuXG4gICAgICAgICAgICBjb2x1bW4gPSBhbGxWaXNpYmxlQ29sdW1ucy5maW5kKHggPT4geC5pZCA9PT0gbmV4dEZpbHRlci5pZClcblxuICAgICAgICAgICAgLy8gRG9uJ3QgZmlsdGVyIGhpZGRlbiBjb2x1bW5zIG9yIGNvbHVtbnMgdGhhdCBoYXZlIGhhZCB0aGVpciBmaWx0ZXJzIGRpc2FibGVkXG4gICAgICAgICAgICBpZiAoIWNvbHVtbiB8fCBjb2x1bW4uZmlsdGVyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZmlsdGVyTWV0aG9kID0gY29sdW1uLmZpbHRlck1ldGhvZCB8fCBkZWZhdWx0RmlsdGVyTWV0aG9kXG5cbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJNZXRob2QobmV4dEZpbHRlciwgcm93LCBjb2x1bW4pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgZmlsdGVyZWREYXRhKVxuXG4gICAgICAgIC8vIEFwcGx5IHRoZSBmaWx0ZXIgdG8gdGhlIHN1YnJvd3MgaWYgd2UgYXJlIHBpdm90aW5nLCBhbmQgdGhlblxuICAgICAgICAvLyBmaWx0ZXIgYW55IHJvd3Mgd2l0aG91dCBzdWJjb2x1bW5zIGJlY2F1c2UgaXQgd291bGQgYmUgc3RyYW5nZSB0byBzaG93XG4gICAgICAgIGZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkRGF0YVxuICAgICAgICAgIC5tYXAocm93ID0+IHtcbiAgICAgICAgICAgIGlmICghcm93W3RoaXMucHJvcHMuc3ViUm93c0tleV0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJvd1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4ucm93LFxuICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5zdWJSb3dzS2V5XTogdGhpcy5maWx0ZXJEYXRhKFxuICAgICAgICAgICAgICAgIHJvd1t0aGlzLnByb3BzLnN1YlJvd3NLZXldLFxuICAgICAgICAgICAgICAgIGZpbHRlcmVkLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRGaWx0ZXJNZXRob2QsXG4gICAgICAgICAgICAgICAgYWxsVmlzaWJsZUNvbHVtbnNcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIocm93ID0+IHtcbiAgICAgICAgICAgIGlmICghcm93W3RoaXMucHJvcHMuc3ViUm93c0tleV0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3dbdGhpcy5wcm9wcy5zdWJSb3dzS2V5XS5sZW5ndGggPiAwXG4gICAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbHRlcmVkRGF0YVxuICAgIH1cblxuICAgIHNvcnREYXRhIChkYXRhLCBzb3J0ZWQsIHNvcnRNZXRob2RzQnlDb2x1bW5JRCA9IHt9KSB7XG4gICAgICBpZiAoIXNvcnRlZC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc29ydGVkRGF0YSA9ICh0aGlzLnByb3BzLm9yZGVyQnlNZXRob2QgfHwgXy5vcmRlckJ5KShcbiAgICAgICAgZGF0YSxcbiAgICAgICAgc29ydGVkLm1hcChzb3J0ID0+IHtcbiAgICAgICAgICAvLyBTdXBwb3J0IGN1c3RvbSBzb3J0aW5nIG1ldGhvZHMgZm9yIGVhY2ggY29sdW1uXG4gICAgICAgICAgaWYgKHNvcnRNZXRob2RzQnlDb2x1bW5JRFtzb3J0LmlkXSkge1xuICAgICAgICAgICAgcmV0dXJuIChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBzb3J0TWV0aG9kc0J5Q29sdW1uSURbc29ydC5pZF0oYVtzb3J0LmlkXSwgYltzb3J0LmlkXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kZWZhdWx0U29ydE1ldGhvZChhW3NvcnQuaWRdLCBiW3NvcnQuaWRdKVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHNvcnRlZC5tYXAoZCA9PiAhZC5kZXNjKSxcbiAgICAgICAgdGhpcy5wcm9wcy5pbmRleEtleVxuICAgICAgKVxuXG4gICAgICBzb3J0ZWREYXRhLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgaWYgKCFyb3dbdGhpcy5wcm9wcy5zdWJSb3dzS2V5XSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHJvd1t0aGlzLnByb3BzLnN1YlJvd3NLZXldID0gdGhpcy5zb3J0RGF0YShcbiAgICAgICAgICByb3dbdGhpcy5wcm9wcy5zdWJSb3dzS2V5XSxcbiAgICAgICAgICBzb3J0ZWQsXG4gICAgICAgICAgc29ydE1ldGhvZHNCeUNvbHVtbklEXG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBzb3J0ZWREYXRhXG4gICAgfVxuXG4gICAgZ2V0TWluUm93cyAoKSB7XG4gICAgICByZXR1cm4gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHRoaXMucHJvcHMubWluUm93cyxcbiAgICAgICAgdGhpcy5nZXRTdGF0ZU9yUHJvcCgncGFnZVNpemUnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFVzZXIgYWN0aW9uc1xuICAgIG9uUGFnZUNoYW5nZSAocGFnZSkge1xuICAgICAgY29uc3QgeyBvblBhZ2VDaGFuZ2UsIGNvbGxhcHNlT25QYWdlQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIGNvbnN0IG5ld1N0YXRlID0geyBwYWdlIH1cbiAgICAgIGlmIChjb2xsYXBzZU9uUGFnZUNoYW5nZSkge1xuICAgICAgICBuZXdTdGF0ZS5leHBhbmRlZCA9IHt9XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlV2l0aERhdGEobmV3U3RhdGUsICgpID0+IHtcbiAgICAgICAgb25QYWdlQ2hhbmdlICYmIG9uUGFnZUNoYW5nZShwYWdlKVxuICAgICAgICB0aGlzLmZpcmVGZXRjaERhdGEoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvblBhZ2VTaXplQ2hhbmdlIChuZXdQYWdlU2l6ZSkge1xuICAgICAgY29uc3QgeyBvblBhZ2VTaXplQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG4gICAgICBjb25zdCB7IHBhZ2VTaXplLCBwYWdlIH0gPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxuXG4gICAgICAvLyBOb3JtYWxpemUgdGhlIHBhZ2UgdG8gZGlzcGxheVxuICAgICAgY29uc3QgY3VycmVudFJvdyA9IHBhZ2VTaXplICogcGFnZVxuICAgICAgY29uc3QgbmV3UGFnZSA9IE1hdGguZmxvb3IoY3VycmVudFJvdyAvIG5ld1BhZ2VTaXplKVxuXG4gICAgICB0aGlzLnNldFN0YXRlV2l0aERhdGEoXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlU2l6ZTogbmV3UGFnZVNpemUsXG4gICAgICAgICAgcGFnZTogbmV3UGFnZSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIG9uUGFnZVNpemVDaGFuZ2UgJiYgb25QYWdlU2l6ZUNoYW5nZShuZXdQYWdlU2l6ZSwgbmV3UGFnZSlcbiAgICAgICAgICB0aGlzLmZpcmVGZXRjaERhdGEoKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuXG4gICAgc29ydENvbHVtbiAoY29sdW1uLCBhZGRpdGl2ZSkge1xuICAgICAgY29uc3QgeyBzb3J0ZWQsIHNraXBOZXh0U29ydCwgZGVmYXVsdFNvcnREZXNjIH0gPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxuXG4gICAgICBjb25zdCBmaXJzdFNvcnREaXJlY3Rpb24gPSBjb2x1bW4uaGFzT3duUHJvcGVydHkoJ2RlZmF1bHRTb3J0RGVzYycpXG4gICAgICAgID8gY29sdW1uLmRlZmF1bHRTb3J0RGVzY1xuICAgICAgICA6IGRlZmF1bHRTb3J0RGVzY1xuICAgICAgY29uc3Qgc2Vjb25kU29ydERpcmVjdGlvbiA9ICFmaXJzdFNvcnREaXJlY3Rpb25cblxuICAgICAgLy8gd2UgY2FuJ3Qgc3RvcCBldmVudCBwcm9wYWdhdGlvbiBmcm9tIHRoZSBjb2x1bW4gcmVzaXplIG1vdmUgaGFuZGxlcnNcbiAgICAgIC8vIGF0dGFjaGVkIHRvIHRoZSBkb2N1bWVudCBiZWNhdXNlIG9mIHJlYWN0J3Mgc3ludGhldGljIGV2ZW50c1xuICAgICAgLy8gc28gd2UgaGF2ZSB0byBwcmV2ZW50IHRoZSBzb3J0IGZ1bmN0aW9uIGZyb20gYWN0dWFsbHkgc29ydGluZ1xuICAgICAgLy8gaWYgd2UgY2xpY2sgb24gdGhlIGNvbHVtbiByZXNpemUgZWxlbWVudCB3aXRoaW4gYSBoZWFkZXIuXG4gICAgICBpZiAoc2tpcE5leHRTb3J0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGVXaXRoRGF0YSh7XG4gICAgICAgICAgc2tpcE5leHRTb3J0OiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgb25Tb3J0ZWRDaGFuZ2UgfSA9IHRoaXMucHJvcHNcblxuICAgICAgbGV0IG5ld1NvcnRlZCA9IF8uY2xvbmUoc29ydGVkIHx8IFtdKS5tYXAoZCA9PiB7XG4gICAgICAgIGQuZGVzYyA9IF8uaXNTb3J0aW5nRGVzYyhkKVxuICAgICAgICByZXR1cm4gZFxuICAgICAgfSlcbiAgICAgIGlmICghXy5pc0FycmF5KGNvbHVtbikpIHtcbiAgICAgICAgLy8gU2luZ2xlLVNvcnRcbiAgICAgICAgY29uc3QgZXhpc3RpbmdJbmRleCA9IG5ld1NvcnRlZC5maW5kSW5kZXgoZCA9PiBkLmlkID09PSBjb2x1bW4uaWQpXG4gICAgICAgIGlmIChleGlzdGluZ0luZGV4ID4gLTEpIHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG5ld1NvcnRlZFtleGlzdGluZ0luZGV4XVxuICAgICAgICAgIGlmIChleGlzdGluZy5kZXNjID09PSBzZWNvbmRTb3J0RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoYWRkaXRpdmUpIHtcbiAgICAgICAgICAgICAgbmV3U29ydGVkLnNwbGljZShleGlzdGluZ0luZGV4LCAxKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXhpc3RpbmcuZGVzYyA9IGZpcnN0U29ydERpcmVjdGlvblxuICAgICAgICAgICAgICBuZXdTb3J0ZWQgPSBbZXhpc3RpbmddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4aXN0aW5nLmRlc2MgPSBzZWNvbmRTb3J0RGlyZWN0aW9uXG4gICAgICAgICAgICBpZiAoIWFkZGl0aXZlKSB7XG4gICAgICAgICAgICAgIG5ld1NvcnRlZCA9IFtleGlzdGluZ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGFkZGl0aXZlKSB7XG4gICAgICAgICAgICBuZXdTb3J0ZWQucHVzaCh7XG4gICAgICAgICAgICAgIGlkOiBjb2x1bW4uaWQsXG4gICAgICAgICAgICAgIGRlc2M6IGZpcnN0U29ydERpcmVjdGlvbixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1NvcnRlZCA9IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBjb2x1bW4uaWQsXG4gICAgICAgICAgICAgICAgZGVzYzogZmlyc3RTb3J0RGlyZWN0aW9uLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTXVsdGktU29ydFxuICAgICAgICBjb25zdCBleGlzdGluZ0luZGV4ID0gbmV3U29ydGVkLmZpbmRJbmRleChkID0+IGQuaWQgPT09IGNvbHVtblswXS5pZClcbiAgICAgICAgLy8gRXhpc3RpbmcgU29ydGVkIENvbHVtblxuICAgICAgICBpZiAoZXhpc3RpbmdJbmRleCA+IC0xKSB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBuZXdTb3J0ZWRbZXhpc3RpbmdJbmRleF1cbiAgICAgICAgICBpZiAoZXhpc3RpbmcuZGVzYyA9PT0gc2Vjb25kU29ydERpcmVjdGlvbikge1xuICAgICAgICAgICAgaWYgKGFkZGl0aXZlKSB7XG4gICAgICAgICAgICAgIG5ld1NvcnRlZC5zcGxpY2UoZXhpc3RpbmdJbmRleCwgY29sdW1uLmxlbmd0aClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbHVtbi5mb3JFYWNoKChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3U29ydGVkW2V4aXN0aW5nSW5kZXggKyBpXS5kZXNjID0gZmlyc3RTb3J0RGlyZWN0aW9uXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbHVtbi5mb3JFYWNoKChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgIG5ld1NvcnRlZFtleGlzdGluZ0luZGV4ICsgaV0uZGVzYyA9IHNlY29uZFNvcnREaXJlY3Rpb25cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghYWRkaXRpdmUpIHtcbiAgICAgICAgICAgIG5ld1NvcnRlZCA9IG5ld1NvcnRlZC5zbGljZShleGlzdGluZ0luZGV4LCBjb2x1bW4ubGVuZ3RoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBOZXcgU29ydCBDb2x1bW5cbiAgICAgICAgICBpZiAoYWRkaXRpdmUpIHtcbiAgICAgICAgICAgIG5ld1NvcnRlZCA9IG5ld1NvcnRlZC5jb25jYXQoXG4gICAgICAgICAgICAgIGNvbHVtbi5tYXAoZCA9PiAoe1xuICAgICAgICAgICAgICAgIGlkOiBkLmlkLFxuICAgICAgICAgICAgICAgIGRlc2M6IGZpcnN0U29ydERpcmVjdGlvbixcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1NvcnRlZCA9IGNvbHVtbi5tYXAoZCA9PiAoe1xuICAgICAgICAgICAgICBpZDogZC5pZCxcbiAgICAgICAgICAgICAgZGVzYzogZmlyc3RTb3J0RGlyZWN0aW9uLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2U6ICghc29ydGVkLmxlbmd0aCAmJiBuZXdTb3J0ZWQubGVuZ3RoKSB8fCAhYWRkaXRpdmVcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnBhZ2UsXG4gICAgICAgICAgc29ydGVkOiBuZXdTb3J0ZWQsXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBvblNvcnRlZENoYW5nZSAmJiBvblNvcnRlZENoYW5nZShuZXdTb3J0ZWQsIGNvbHVtbiwgYWRkaXRpdmUpXG4gICAgICAgICAgdGhpcy5maXJlRmV0Y2hEYXRhKClcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cblxuICAgIGZpbHRlckNvbHVtbiAoY29sdW1uLCB2YWx1ZSkge1xuICAgICAgY29uc3QgeyBmaWx0ZXJlZCB9ID0gdGhpcy5nZXRSZXNvbHZlZFN0YXRlKClcbiAgICAgIGNvbnN0IHsgb25GaWx0ZXJlZENoYW5nZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAvLyBSZW1vdmUgb2xkIGZpbHRlciBmaXJzdCBpZiBpdCBleGlzdHNcbiAgICAgIGNvbnN0IG5ld0ZpbHRlcmluZyA9IChmaWx0ZXJlZCB8fCBbXSkuZmlsdGVyKHggPT4ge1xuICAgICAgICBpZiAoeC5pZCAhPT0gY29sdW1uLmlkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgICBuZXdGaWx0ZXJpbmcucHVzaCh7XG4gICAgICAgICAgaWQ6IGNvbHVtbi5pZCxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAge1xuICAgICAgICAgIGZpbHRlcmVkOiBuZXdGaWx0ZXJpbmcsXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBvbkZpbHRlcmVkQ2hhbmdlICYmIG9uRmlsdGVyZWRDaGFuZ2UobmV3RmlsdGVyaW5nLCBjb2x1bW4sIHZhbHVlKVxuICAgICAgICAgIHRoaXMuZmlyZUZldGNoRGF0YSgpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXNpemVDb2x1bW5TdGFydCAoY29sdW1uLCBldmVudCwgaXNUb3VjaCkge1xuICAgICAgY29uc3QgcGFyZW50V2lkdGggPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAud2lkdGhcblxuICAgICAgbGV0IHBhZ2VYXG4gICAgICBpZiAoaXNUb3VjaCkge1xuICAgICAgICBwYWdlWCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdlWCA9IGV2ZW50LnBhZ2VYXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAge1xuICAgICAgICAgIGN1cnJlbnRseVJlc2l6aW5nOiB7XG4gICAgICAgICAgICBpZDogY29sdW1uLmlkLFxuICAgICAgICAgICAgc3RhcnRYOiBwYWdlWCxcbiAgICAgICAgICAgIHBhcmVudFdpZHRoOiBwYXJlbnRXaWR0aCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaWYgKGlzVG91Y2gpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMucmVzaXplQ29sdW1uTW92aW5nKVxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMucmVzaXplQ29sdW1uTW92aW5nKVxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMucmVzaXplQ29sdW1uRW5kKVxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMucmVzaXplQ29sdW1uRW5kKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cblxuICAgIHJlc2l6ZUNvbHVtbkVuZCAoZXZlbnQpIHtcbiAgICAgIGxldCBpc1RvdWNoID0gZXZlbnQudHlwZSA9PT0gJ3RvdWNoZW5kJyB8fCBldmVudC50eXBlID09PSAndG91Y2hjYW5jZWwnXG5cbiAgICAgIGlmIChpc1RvdWNoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMucmVzaXplQ29sdW1uTW92aW5nKVxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMucmVzaXplQ29sdW1uRW5kKVxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMucmVzaXplQ29sdW1uRW5kKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdHMgYSB0b3VjaCBldmVudCBjbGVhciB0aGUgbW91c2Ugb25lJ3MgYXMgd2VsbCBiZWNhdXNlIHNvbWV0aW1lc1xuICAgICAgLy8gdGhlIG1vdXNlRG93biBldmVudCBnZXRzIGNhbGxlZCBhcyB3ZWxsLCBidXQgdGhlIG1vdXNlVXAgZXZlbnQgZG9lc24ndFxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcpXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG5cbiAgICAgIC8vIFRoZSB0b3VjaCBldmVudHMgZG9uJ3QgcHJvcGFnYXRlIHVwIHRvIHRoZSBzb3J0aW5nJ3Mgb25Nb3VzZURvd24gZXZlbnQgc29cbiAgICAgIC8vIG5vIG5lZWQgdG8gcHJldmVudCBpdCBmcm9tIGhhcHBlbmluZyBvciBlbHNlIHRoZSBmaXJzdCBjbGljayBhZnRlciBhIHRvdWNoXG4gICAgICAvLyBldmVudCByZXNpemUgd2lsbCBub3Qgc29ydCB0aGUgY29sdW1uLlxuICAgICAgaWYgKCFpc1RvdWNoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGVXaXRoRGF0YSh7XG4gICAgICAgICAgc2tpcE5leHRTb3J0OiB0cnVlLFxuICAgICAgICAgIGN1cnJlbnRseVJlc2l6aW5nOiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXNpemVDb2x1bW5Nb3ZpbmcgKGV2ZW50KSB7XG4gICAgICBjb25zdCB7IG9uUmVzaXplZENoYW5nZSB9ID0gdGhpcy5wcm9wc1xuICAgICAgY29uc3QgeyByZXNpemVkLCBjdXJyZW50bHlSZXNpemluZyB9ID0gdGhpcy5nZXRSZXNvbHZlZFN0YXRlKClcblxuICAgICAgLy8gRGVsZXRlIG9sZCB2YWx1ZVxuICAgICAgY29uc3QgbmV3UmVzaXplZCA9IHJlc2l6ZWQuZmlsdGVyKHggPT4geC5pZCAhPT0gY3VycmVudGx5UmVzaXppbmcuaWQpXG5cbiAgICAgIGxldCBwYWdlWFxuXG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNobW92ZScpIHtcbiAgICAgICAgcGFnZVggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWFxuICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAnbW91c2Vtb3ZlJykge1xuICAgICAgICBwYWdlWCA9IGV2ZW50LnBhZ2VYXG4gICAgICB9XG5cbiAgICAgIC8vIFNldCB0aGUgbWluIHNpemUgdG8gMTAgdG8gYWNjb3VudCBmb3IgbWFyZ2luIGFuZCBib3JkZXIgb3IgZWxzZSB0aGUgZ3JvdXAgaGVhZGVycyBkb24ndCBsaW5lIHVwIGNvcnJlY3RseVxuICAgICAgY29uc3QgbmV3V2lkdGggPSBNYXRoLm1heChcbiAgICAgICAgY3VycmVudGx5UmVzaXppbmcucGFyZW50V2lkdGggKyBwYWdlWCAtIGN1cnJlbnRseVJlc2l6aW5nLnN0YXJ0WCxcbiAgICAgICAgMTFcbiAgICAgIClcblxuICAgICAgbmV3UmVzaXplZC5wdXNoKHtcbiAgICAgICAgaWQ6IGN1cnJlbnRseVJlc2l6aW5nLmlkLFxuICAgICAgICB2YWx1ZTogbmV3V2lkdGgsXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnNldFN0YXRlV2l0aERhdGEoXG4gICAgICAgIHtcbiAgICAgICAgICByZXNpemVkOiBuZXdSZXNpemVkLFxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgb25SZXNpemVkQ2hhbmdlICYmIG9uUmVzaXplZENoYW5nZShuZXdSZXNpemVkLCBldmVudClcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfVxuIl19