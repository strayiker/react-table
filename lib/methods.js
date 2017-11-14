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

        var columnsWithExpander = [].concat(_toConsumableArray(columns), [{
          Header: '',
          id: '@@dummy',
          sortable: false,
          resizable: false,
          filterable: false
        }]);

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
            var column = allVisibleColumns.find(function (x) {
              return x.id === nextFilter.id;
            });

            // Don't filter hidden columns or columns that have had their filters disabled
            if (!column || column.filterable === false) {
              return filteredSoFar;
            }

            var filterMethod = column.filterMethod || defaultFilterMethod;

            // If 'filterAll' is set to true, pass the entire dataset to the filter method
            if (column.filterAll) {
              return filterMethod(nextFilter, filteredSoFar, column);
            } else {
              return filteredSoFar.filter(function (row) {
                return filterMethod(nextFilter, row, column);
              });
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRob2RzLmpzIl0sIm5hbWVzIjpbInByb3BzIiwic3RhdGUiLCJyZXNvbHZlZFN0YXRlIiwiY29tcGFjdE9iamVjdCIsIm5ld1N0YXRlIiwiY29sdW1ucyIsInBpdm90QnkiLCJkYXRhIiwicGl2b3RJREtleSIsInBpdm90VmFsS2V5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJuZXN0aW5nTGV2ZWxLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJTdWJDb21wb25lbnQiLCJoYXNIZWFkZXJHcm91cHMiLCJjb2x1bW5zV2l0aEV4cGFuZGVyIiwiSGVhZGVyIiwiaWQiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJleHBhbmRlckNvbHVtbiIsImZpbmQiLCJjb2wiLCJleHBhbmRlciIsInNvbWUiLCJjb2wyIiwibWFrZURlY29yYXRlZENvbHVtbiIsImRjb2wiLCJjb2x1bW4iLCJleHBhbmRlckRlZmF1bHRzIiwiYWNjZXNzb3IiLCJhY2Nlc3NvclN0cmluZyIsImdldCIsInJvdyIsImNvbnNvbGUiLCJ3YXJuIiwiRXJyb3IiLCJ1bmRlZmluZWQiLCJtYXhXaWR0aCIsIm1pbldpZHRoIiwiZGVjb3JhdGVBbmRBZGRUb0FsbCIsImRlY29yYXRlZENvbHVtbiIsImFsbERlY29yYXRlZENvbHVtbnMiLCJwdXNoIiwiZGVjb3JhdGVkQ29sdW1ucyIsIm1hcCIsImkiLCJ2aXNpYmxlQ29sdW1ucyIsInNsaWNlIiwiYWxsVmlzaWJsZUNvbHVtbnMiLCJ2aXNpYmxlU3ViQ29sdW1ucyIsImZpbHRlciIsImluZGV4T2YiLCJkIiwiZ2V0Rmlyc3REZWZpbmVkIiwic2hvdyIsImxlbmd0aCIsInBpdm90SW5kZXgiLCJmaW5kSW5kZXgiLCJwaXZvdCIsInBpdm90Q29sdW1ucyIsImZvckVhY2giLCJmb3VuZCIsInBpdm90SUQiLCJwaXZvdENvbHVtbkdyb3VwIiwiaGVhZGVyIiwicGl2b3REZWZhdWx0cyIsInBpdm90ZWQiLCJzcGxpY2UiLCJ1bnNoaWZ0IiwiaGVhZGVyR3JvdXBzIiwiY3VycmVudFNwYW4iLCJhZGRIZWFkZXIiLCJjb25jYXQiLCJhY2Nlc3NSb3ciLCJsZXZlbCIsInJlc29sdmVkRGF0YSIsImFnZ3JlZ2F0ZSIsImFnZ3JlZ2F0aW9uVmFsdWVzIiwiYWdncmVnYXRpbmdDb2x1bW5zIiwidmFsdWVzIiwicm93cyIsImdyb3VwUmVjdXJzaXZlbHkiLCJrZXlzIiwiZ3JvdXBlZFJvd3MiLCJPYmplY3QiLCJlbnRyaWVzIiwiZ3JvdXBCeSIsImtleSIsInZhbHVlIiwic3ViUm93cyIsInJvd0dyb3VwIiwibWFudWFsIiwic29ydGVkIiwiZmlsdGVyZWQiLCJkZWZhdWx0RmlsdGVyTWV0aG9kIiwic29ydE1ldGhvZHNCeUNvbHVtbklEIiwic29ydE1ldGhvZCIsInNvcnRlZERhdGEiLCJzb3J0RGF0YSIsImZpbHRlckRhdGEiLCJvbkZldGNoRGF0YSIsImdldFJlc29sdmVkU3RhdGUiLCJmaWx0ZXJlZERhdGEiLCJyZWR1Y2UiLCJmaWx0ZXJlZFNvRmFyIiwibmV4dEZpbHRlciIsIngiLCJmaWx0ZXJNZXRob2QiLCJmaWx0ZXJBbGwiLCJvcmRlckJ5TWV0aG9kIiwib3JkZXJCeSIsInNvcnQiLCJhIiwiYiIsImRlZmF1bHRTb3J0TWV0aG9kIiwiZGVzYyIsIm1pblJvd3MiLCJnZXRTdGF0ZU9yUHJvcCIsInBhZ2UiLCJvblBhZ2VDaGFuZ2UiLCJjb2xsYXBzZU9uUGFnZUNoYW5nZSIsImV4cGFuZGVkIiwic2V0U3RhdGVXaXRoRGF0YSIsImZpcmVGZXRjaERhdGEiLCJuZXdQYWdlU2l6ZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJwYWdlU2l6ZSIsImN1cnJlbnRSb3ciLCJuZXdQYWdlIiwiTWF0aCIsImZsb29yIiwiYWRkaXRpdmUiLCJza2lwTmV4dFNvcnQiLCJkZWZhdWx0U29ydERlc2MiLCJmaXJzdFNvcnREaXJlY3Rpb24iLCJoYXNPd25Qcm9wZXJ0eSIsInNlY29uZFNvcnREaXJlY3Rpb24iLCJvblNvcnRlZENoYW5nZSIsIm5ld1NvcnRlZCIsImNsb25lIiwiaXNTb3J0aW5nRGVzYyIsImlzQXJyYXkiLCJleGlzdGluZ0luZGV4IiwiZXhpc3RpbmciLCJvbkZpbHRlcmVkQ2hhbmdlIiwibmV3RmlsdGVyaW5nIiwiZXZlbnQiLCJpc1RvdWNoIiwicGFyZW50V2lkdGgiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJwYWdlWCIsImNoYW5nZWRUb3VjaGVzIiwiY3VycmVudGx5UmVzaXppbmciLCJzdGFydFgiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemVDb2x1bW5Nb3ZpbmciLCJyZXNpemVDb2x1bW5FbmQiLCJ0eXBlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uUmVzaXplZENoYW5nZSIsInJlc2l6ZWQiLCJuZXdSZXNpemVkIiwibmV3V2lkdGgiLCJtYXgiLCJCYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBRWU7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsdUNBRU9BLEtBRlAsRUFFY0MsS0FGZCxFQUVxQjtBQUM5QixZQUFNQyw2QkFDRCxnQkFBRUMsYUFBRixDQUFnQixLQUFLRixLQUFyQixDQURDLEVBRUQsZ0JBQUVFLGFBQUYsQ0FBZ0IsS0FBS0gsS0FBckIsQ0FGQyxFQUdELGdCQUFFRyxhQUFGLENBQWdCRixLQUFoQixDQUhDLEVBSUQsZ0JBQUVFLGFBQUYsQ0FBZ0JILEtBQWhCLENBSkMsQ0FBTjtBQU1BLGVBQU9FLGFBQVA7QUFDRDtBQVZVO0FBQUE7QUFBQSxtQ0FZR0UsUUFaSCxFQVlhO0FBQUE7O0FBQUEsWUFFcEJDLE9BRm9CLEdBY2xCRCxRQWRrQixDQUVwQkMsT0FGb0I7QUFBQSxnQ0FjbEJELFFBZGtCLENBR3BCRSxPQUhvQjtBQUFBLFlBR3BCQSxP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ZUFEaUIsR0FDRyxLQUFLeEssS0FEUixDQUNqQndLLGVBRGlCOztBQUFBLGlDQUVjLEtBQUs5RCxnQkFBTCxFQUZkO0FBQUEsWUFFakIrRCxPQUZpQixzQkFFakJBLE9BRmlCO0FBQUEsWUFFUlQsaUJBRlEsc0JBRVJBLGlCQUZROztBQUl6Qjs7O0FBQ0EsWUFBTVUsYUFBYUQsUUFBUWxILE1BQVIsQ0FBZTtBQUFBLGlCQUFLd0QsRUFBRTNGLEVBQUYsS0FBUzRJLGtCQUFrQjVJLEVBQWhDO0FBQUEsU0FBZixDQUFuQjs7QUFFQSxZQUFJMEksY0FBSjs7QUFFQSxZQUFJUCxNQUFNZSxJQUFOLEtBQWUsV0FBbkIsRUFBZ0M7QUFDOUJSLGtCQUFRUCxNQUFNUSxjQUFOLENBQXFCLENBQXJCLEVBQXdCRCxLQUFoQztBQUNELFNBRkQsTUFFTyxJQUFJUCxNQUFNZSxJQUFOLEtBQWUsV0FBbkIsRUFBZ0M7QUFDckNSLGtCQUFRUCxNQUFNTyxLQUFkO0FBQ0Q7O0FBRUQ7QUFDQSxZQUFNYSxXQUFXckMsS0FBS3NDLEdBQUwsQ0FDZlosa0JBQWtCUCxXQUFsQixHQUFnQ0ssS0FBaEMsR0FBd0NFLGtCQUFrQkMsTUFEM0MsRUFFZixFQUZlLENBQWpCOztBQUtBUyxtQkFBVzNILElBQVgsQ0FBZ0I7QUFDZDNCLGNBQUk0SSxrQkFBa0I1SSxFQURSO0FBRWR5RSxpQkFBTzhFO0FBRk8sU0FBaEI7O0FBS0EsYUFBSzVDLGdCQUFMLENBQ0U7QUFDRTBDLG1CQUFTQztBQURYLFNBREYsRUFJRSxZQUFNO0FBQ0pGLDZCQUFtQkEsZ0JBQWdCRSxVQUFoQixFQUE0Qm5CLEtBQTVCLENBQW5CO0FBQ0QsU0FOSDtBQVFEO0FBenJCVTs7QUFBQTtBQUFBLElBQ0NzQixJQUREO0FBQUEsQyIsImZpbGUiOiJtZXRob2RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgQmFzZSA9PlxuICBjbGFzcyBleHRlbmRzIEJhc2Uge1xuICAgIGdldFJlc29sdmVkU3RhdGUgKHByb3BzLCBzdGF0ZSkge1xuICAgICAgY29uc3QgcmVzb2x2ZWRTdGF0ZSA9IHtcbiAgICAgICAgLi4uXy5jb21wYWN0T2JqZWN0KHRoaXMuc3RhdGUpLFxuICAgICAgICAuLi5fLmNvbXBhY3RPYmplY3QodGhpcy5wcm9wcyksXG4gICAgICAgIC4uLl8uY29tcGFjdE9iamVjdChzdGF0ZSksXG4gICAgICAgIC4uLl8uY29tcGFjdE9iamVjdChwcm9wcyksXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzb2x2ZWRTdGF0ZVxuICAgIH1cblxuICAgIGdldERhdGFNb2RlbCAobmV3U3RhdGUpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29sdW1ucyxcbiAgICAgICAgcGl2b3RCeSA9IFtdLFxuICAgICAgICBkYXRhLFxuICAgICAgICBwaXZvdElES2V5LFxuICAgICAgICBwaXZvdFZhbEtleSxcbiAgICAgICAgc3ViUm93c0tleSxcbiAgICAgICAgYWdncmVnYXRlZEtleSxcbiAgICAgICAgbmVzdGluZ0xldmVsS2V5LFxuICAgICAgICBvcmlnaW5hbEtleSxcbiAgICAgICAgaW5kZXhLZXksXG4gICAgICAgIGdyb3VwZWRCeVBpdm90S2V5LFxuICAgICAgICBTdWJDb21wb25lbnQsXG4gICAgICB9ID0gbmV3U3RhdGVcblxuICAgICAgLy8gRGV0ZXJtaW5lIEhlYWRlciBHcm91cHNcbiAgICAgIGxldCBoYXNIZWFkZXJHcm91cHMgPSBmYWxzZVxuXG4gICAgICBsZXQgY29sdW1uc1dpdGhFeHBhbmRlciA9IFsuLi5jb2x1bW5zLCB7XG4gICAgICAgIEhlYWRlcjogJycsXG4gICAgICAgIGlkOiAnQEBkdW1teScsXG4gICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgZmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICB9XVxuXG4gICAgICBsZXQgZXhwYW5kZXJDb2x1bW4gPSBjb2x1bW5zLmZpbmQoXG4gICAgICAgIGNvbCA9PlxuICAgICAgICAgIGNvbC5leHBhbmRlciB8fFxuICAgICAgICAgIChjb2wuY29sdW1ucyAmJiBjb2wuY29sdW1ucy5zb21lKGNvbDIgPT4gY29sMi5leHBhbmRlcikpXG4gICAgICApXG4gICAgICAvLyBUaGUgYWN0dWFsIGV4cGFuZGVyIG1pZ2h0IGJlIGluIHRoZSBjb2x1bW5zIGZpZWxkIG9mIGEgZ3JvdXAgY29sdW1uXG4gICAgICBpZiAoZXhwYW5kZXJDb2x1bW4gJiYgIWV4cGFuZGVyQ29sdW1uLmV4cGFuZGVyKSB7XG4gICAgICAgIGV4cGFuZGVyQ29sdW1uID0gZXhwYW5kZXJDb2x1bW4uY29sdW1ucy5maW5kKGNvbCA9PiBjb2wuZXhwYW5kZXIpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgU3ViQ29tcG9uZW50J3Mgd2UgbmVlZCB0byBtYWtlIHN1cmUgd2UgaGF2ZSBhbiBleHBhbmRlciBjb2x1bW5cbiAgICAgIGlmIChTdWJDb21wb25lbnQgJiYgIWV4cGFuZGVyQ29sdW1uKSB7XG4gICAgICAgIGV4cGFuZGVyQ29sdW1uID0geyBleHBhbmRlcjogdHJ1ZSB9XG4gICAgICAgIGNvbHVtbnNXaXRoRXhwYW5kZXIgPSBbZXhwYW5kZXJDb2x1bW4sIC4uLmNvbHVtbnNXaXRoRXhwYW5kZXJdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1ha2VEZWNvcmF0ZWRDb2x1bW4gPSBjb2x1bW4gPT4ge1xuICAgICAgICBsZXQgZGNvbFxuICAgICAgICBpZiAoY29sdW1uLmV4cGFuZGVyKSB7XG4gICAgICAgICAgZGNvbCA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuY29sdW1uLFxuICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5leHBhbmRlckRlZmF1bHRzLFxuICAgICAgICAgICAgLi4uY29sdW1uLFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkY29sID0ge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5jb2x1bW4sXG4gICAgICAgICAgICAuLi5jb2x1bW4sXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkY29sLmFjY2Vzc29yID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGRjb2wuaWQgPSBkY29sLmlkIHx8IGRjb2wuYWNjZXNzb3JcbiAgICAgICAgICBjb25zdCBhY2Nlc3NvclN0cmluZyA9IGRjb2wuYWNjZXNzb3JcbiAgICAgICAgICBkY29sLmFjY2Vzc29yID0gcm93ID0+IF8uZ2V0KHJvdywgYWNjZXNzb3JTdHJpbmcpXG4gICAgICAgICAgcmV0dXJuIGRjb2xcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkY29sLmFjY2Vzc29yICYmICFkY29sLmlkKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGRjb2wpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0EgY29sdW1uIGlkIGlzIHJlcXVpcmVkIGlmIHVzaW5nIGEgbm9uLXN0cmluZyBhY2Nlc3NvciBmb3IgY29sdW1uIGFib3ZlLidcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRjb2wuYWNjZXNzb3IpIHtcbiAgICAgICAgICBkY29sLmFjY2Vzc29yID0gZCA9PiB1bmRlZmluZWRcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVuc3VyZSBtaW5XaWR0aCBpcyBub3QgZ3JlYXRlciB0aGFuIG1heFdpZHRoIGlmIHNldFxuICAgICAgICBpZiAoZGNvbC5tYXhXaWR0aCA8IGRjb2wubWluV2lkdGgpIHtcbiAgICAgICAgICBkY29sLm1pbldpZHRoID0gZGNvbC5tYXhXaWR0aFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRjb2xcbiAgICAgIH1cblxuICAgICAgLy8gRGVjb3JhdGUgdGhlIGNvbHVtbnNcbiAgICAgIGNvbnN0IGRlY29yYXRlQW5kQWRkVG9BbGwgPSBjb2wgPT4ge1xuICAgICAgICBjb25zdCBkZWNvcmF0ZWRDb2x1bW4gPSBtYWtlRGVjb3JhdGVkQ29sdW1uKGNvbClcbiAgICAgICAgYWxsRGVjb3JhdGVkQ29sdW1ucy5wdXNoKGRlY29yYXRlZENvbHVtbilcbiAgICAgICAgcmV0dXJuIGRlY29yYXRlZENvbHVtblxuICAgICAgfVxuICAgICAgbGV0IGFsbERlY29yYXRlZENvbHVtbnMgPSBbXVxuICAgICAgY29uc3QgZGVjb3JhdGVkQ29sdW1ucyA9IGNvbHVtbnNXaXRoRXhwYW5kZXIubWFwKChjb2x1bW4sIGkpID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi5jb2x1bW5zKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNvbHVtbixcbiAgICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbi5jb2x1bW5zLm1hcChkZWNvcmF0ZUFuZEFkZFRvQWxsKSxcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGRlY29yYXRlQW5kQWRkVG9BbGwoY29sdW1uKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyBCdWlsZCB0aGUgdmlzaWJsZSBjb2x1bW5zLCBoZWFkZXJzIGFuZCBmbGF0IGNvbHVtbiBsaXN0XG4gICAgICBsZXQgdmlzaWJsZUNvbHVtbnMgPSBkZWNvcmF0ZWRDb2x1bW5zLnNsaWNlKClcbiAgICAgIGxldCBhbGxWaXNpYmxlQ29sdW1ucyA9IFtdXG5cbiAgICAgIHZpc2libGVDb2x1bW5zID0gdmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4sIGkpID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi5jb2x1bW5zKSB7XG4gICAgICAgICAgY29uc3QgdmlzaWJsZVN1YkNvbHVtbnMgPSBjb2x1bW4uY29sdW1ucy5maWx0ZXIoXG4gICAgICAgICAgICBkID0+XG4gICAgICAgICAgICAgIHBpdm90QnkuaW5kZXhPZihkLmlkKSA+IC0xXG4gICAgICAgICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgICAgICAgIDogXy5nZXRGaXJzdERlZmluZWQoZC5zaG93LCB0cnVlKVxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY29sdW1uLFxuICAgICAgICAgICAgY29sdW1uczogdmlzaWJsZVN1YkNvbHVtbnMsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW5cbiAgICAgIH0pXG5cbiAgICAgIHZpc2libGVDb2x1bW5zID0gdmlzaWJsZUNvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiB7XG4gICAgICAgIHJldHVybiBjb2x1bW4uY29sdW1uc1xuICAgICAgICAgID8gY29sdW1uLmNvbHVtbnMubGVuZ3RoXG4gICAgICAgICAgOiBwaXZvdEJ5LmluZGV4T2YoY29sdW1uLmlkKSA+IC0xXG4gICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICA6IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5zaG93LCB0cnVlKVxuICAgICAgfSlcblxuICAgICAgLy8gRmluZCBhbnkgY3VzdG9tIHBpdm90IGxvY2F0aW9uXG4gICAgICBjb25zdCBwaXZvdEluZGV4ID0gdmlzaWJsZUNvbHVtbnMuZmluZEluZGV4KGNvbCA9PiBjb2wucGl2b3QpXG5cbiAgICAgIC8vIEhhbmRsZSBQaXZvdCBDb2x1bW5zXG4gICAgICBpZiAocGl2b3RCeS5sZW5ndGgpIHtcbiAgICAgICAgLy8gUmV0cmlldmUgdGhlIHBpdm90IGNvbHVtbnMgaW4gdGhlIGNvcnJlY3QgcGl2b3Qgb3JkZXJcbiAgICAgICAgY29uc3QgcGl2b3RDb2x1bW5zID0gW11cbiAgICAgICAgcGl2b3RCeS5mb3JFYWNoKHBpdm90SUQgPT4ge1xuICAgICAgICAgIGNvbnN0IGZvdW5kID0gYWxsRGVjb3JhdGVkQ29sdW1ucy5maW5kKGQgPT4gZC5pZCA9PT0gcGl2b3RJRClcbiAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgIHBpdm90Q29sdW1ucy5wdXNoKGZvdW5kKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgcGl2b3RDb2x1bW5Hcm91cCA9IHtcbiAgICAgICAgICBoZWFkZXI6ICgpID0+IDxzdHJvbmc+R3JvdXA8L3N0cm9uZz4sXG4gICAgICAgICAgY29sdW1uczogcGl2b3RDb2x1bW5zLm1hcChjb2wgPT4gKHtcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMucGl2b3REZWZhdWx0cyxcbiAgICAgICAgICAgIC4uLmNvbCxcbiAgICAgICAgICAgIHBpdm90ZWQ6IHRydWUsXG4gICAgICAgICAgfSkpLFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGxhY2UgdGhlIHBpdm90Q29sdW1ucyBiYWNrIGludG8gdGhlIHZpc2libGVDb2x1bW5zXG4gICAgICAgIGlmIChwaXZvdEluZGV4ID49IDApIHtcbiAgICAgICAgICBwaXZvdENvbHVtbkdyb3VwID0ge1xuICAgICAgICAgICAgLi4udmlzaWJsZUNvbHVtbnNbcGl2b3RJbmRleF0sXG4gICAgICAgICAgICAuLi5waXZvdENvbHVtbkdyb3VwLFxuICAgICAgICAgIH1cbiAgICAgICAgICB2aXNpYmxlQ29sdW1ucy5zcGxpY2UocGl2b3RJbmRleCwgMSwgcGl2b3RDb2x1bW5Hcm91cClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2aXNpYmxlQ29sdW1ucy51bnNoaWZ0KHBpdm90Q29sdW1uR3JvdXApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQnVpbGQgSGVhZGVyIEdyb3Vwc1xuICAgICAgY29uc3QgaGVhZGVyR3JvdXBzID0gW11cbiAgICAgIGxldCBjdXJyZW50U3BhbiA9IFtdXG5cbiAgICAgIC8vIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdG8gYWRkIGEgaGVhZGVyIGFuZCByZXNldCB0aGUgY3VycmVudFNwYW5cbiAgICAgIGNvbnN0IGFkZEhlYWRlciA9IChjb2x1bW5zLCBjb2x1bW4pID0+IHtcbiAgICAgICAgaGVhZGVyR3JvdXBzLnB1c2goe1xuICAgICAgICAgIC4uLnRoaXMucHJvcHMuY29sdW1uLFxuICAgICAgICAgIC4uLmNvbHVtbixcbiAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLFxuICAgICAgICB9KVxuICAgICAgICBjdXJyZW50U3BhbiA9IFtdXG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGZsYXN0IGxpc3Qgb2YgYWxsVmlzaWJsZUNvbHVtbnMgYW5kIEhlYWRlckdyb3Vwc1xuICAgICAgdmlzaWJsZUNvbHVtbnMuZm9yRWFjaCgoY29sdW1uLCBpKSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4uY29sdW1ucykge1xuICAgICAgICAgIGFsbFZpc2libGVDb2x1bW5zID0gYWxsVmlzaWJsZUNvbHVtbnMuY29uY2F0KGNvbHVtbi5jb2x1bW5zKVxuICAgICAgICAgIGlmIChjdXJyZW50U3Bhbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhZGRIZWFkZXIoY3VycmVudFNwYW4pXG4gICAgICAgICAgfVxuICAgICAgICAgIGFkZEhlYWRlcihjb2x1bW4uY29sdW1ucywgY29sdW1uKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGFsbFZpc2libGVDb2x1bW5zLnB1c2goY29sdW1uKVxuICAgICAgICBjdXJyZW50U3Bhbi5wdXNoKGNvbHVtbilcbiAgICAgIH0pXG4gICAgICBpZiAoaGFzSGVhZGVyR3JvdXBzICYmIGN1cnJlbnRTcGFuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYWRkSGVhZGVyKGN1cnJlbnRTcGFuKVxuICAgICAgfVxuXG4gICAgICAvLyBBY2Nlc3MgdGhlIGRhdGFcbiAgICAgIGNvbnN0IGFjY2Vzc1JvdyA9IChkLCBpLCBsZXZlbCA9IDApID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0ge1xuICAgICAgICAgIFtvcmlnaW5hbEtleV06IGQsXG4gICAgICAgICAgW2luZGV4S2V5XTogaSxcbiAgICAgICAgICBbc3ViUm93c0tleV06IGRbc3ViUm93c0tleV0sXG4gICAgICAgICAgW25lc3RpbmdMZXZlbEtleV06IGxldmVsLFxuICAgICAgICB9XG4gICAgICAgIGFsbERlY29yYXRlZENvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICAgIGlmIChjb2x1bW4uZXhwYW5kZXIpIHJldHVyblxuICAgICAgICAgIHJvd1tjb2x1bW4uaWRdID0gY29sdW1uLmFjY2Vzc29yKGQpXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChyb3dbc3ViUm93c0tleV0pIHtcbiAgICAgICAgICByb3dbc3ViUm93c0tleV0gPSByb3dbc3ViUm93c0tleV0ubWFwKChkLCBpKSA9PlxuICAgICAgICAgICAgYWNjZXNzUm93KGQsIGksIGxldmVsICsgMSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvd1xuICAgICAgfVxuICAgICAgbGV0IHJlc29sdmVkRGF0YSA9IGRhdGEubWFwKChkLCBpKSA9PiBhY2Nlc3NSb3coZCwgaSkpXG5cbiAgICAgIC8vIElmIHBpdm90aW5nLCByZWN1cnNpdmVseSBncm91cCB0aGUgZGF0YVxuICAgICAgY29uc3QgYWdncmVnYXRlID0gcm93cyA9PiB7XG4gICAgICAgIGNvbnN0IGFnZ3JlZ2F0aW9uVmFsdWVzID0ge31cbiAgICAgICAgYWdncmVnYXRpbmdDb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZXMgPSByb3dzLm1hcChkID0+IGRbY29sdW1uLmlkXSlcbiAgICAgICAgICBhZ2dyZWdhdGlvblZhbHVlc1tjb2x1bW4uaWRdID0gY29sdW1uLmFnZ3JlZ2F0ZSh2YWx1ZXMsIHJvd3MpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhZ2dyZWdhdGlvblZhbHVlc1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBNYWtlIGl0IHBvc3NpYmxlIHRvIGZhYnJpY2F0ZSBuZXN0ZWQgcm93cyB3aXRob3V0IHBpdm90aW5nXG4gICAgICBjb25zdCBhZ2dyZWdhdGluZ0NvbHVtbnMgPSBhbGxWaXNpYmxlQ29sdW1ucy5maWx0ZXIoXG4gICAgICAgIGQgPT4gIWQuZXhwYW5kZXIgJiYgZC5hZ2dyZWdhdGVcbiAgICAgIClcbiAgICAgIGlmIChwaXZvdEJ5Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBncm91cFJlY3Vyc2l2ZWx5ID0gKHJvd3MsIGtleXMsIGkgPSAwKSA9PiB7XG4gICAgICAgICAgLy8gVGhpcyBpcyB0aGUgbGFzdCBsZXZlbCwganVzdCByZXR1cm4gdGhlIHJvd3NcbiAgICAgICAgICBpZiAoaSA9PT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiByb3dzXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEdyb3VwIHRoZSByb3dzIHRvZ2V0aGVyIGZvciB0aGlzIGxldmVsXG4gICAgICAgICAgbGV0IGdyb3VwZWRSb3dzID0gT2JqZWN0LmVudHJpZXMoXG4gICAgICAgICAgICBfLmdyb3VwQnkocm93cywga2V5c1tpXSlcbiAgICAgICAgICApLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBbcGl2b3RJREtleV06IGtleXNbaV0sXG4gICAgICAgICAgICAgIFtwaXZvdFZhbEtleV06IGtleSxcbiAgICAgICAgICAgICAgW2tleXNbaV1dOiBrZXksXG4gICAgICAgICAgICAgIFtzdWJSb3dzS2V5XTogdmFsdWUsXG4gICAgICAgICAgICAgIFtuZXN0aW5nTGV2ZWxLZXldOiBpLFxuICAgICAgICAgICAgICBbZ3JvdXBlZEJ5UGl2b3RLZXldOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLy8gUmVjdXJzZSBpbnRvIHRoZSBzdWJSb3dzXG4gICAgICAgICAgZ3JvdXBlZFJvd3MgPSBncm91cGVkUm93cy5tYXAocm93R3JvdXAgPT4ge1xuICAgICAgICAgICAgbGV0IHN1YlJvd3MgPSBncm91cFJlY3Vyc2l2ZWx5KHJvd0dyb3VwW3N1YlJvd3NLZXldLCBrZXlzLCBpICsgMSlcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnJvd0dyb3VwLFxuICAgICAgICAgICAgICBbc3ViUm93c0tleV06IHN1YlJvd3MsXG4gICAgICAgICAgICAgIFthZ2dyZWdhdGVkS2V5XTogdHJ1ZSxcbiAgICAgICAgICAgICAgLi4uYWdncmVnYXRlKHN1YlJvd3MpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGdyb3VwZWRSb3dzXG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWREYXRhID0gZ3JvdXBSZWN1cnNpdmVseShyZXNvbHZlZERhdGEsIHBpdm90QnkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgICByZXNvbHZlZERhdGEsXG4gICAgICAgIGFsbFZpc2libGVDb2x1bW5zLFxuICAgICAgICBoZWFkZXJHcm91cHMsXG4gICAgICAgIGFsbERlY29yYXRlZENvbHVtbnMsXG4gICAgICAgIGhhc0hlYWRlckdyb3VwcyxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTb3J0ZWREYXRhIChyZXNvbHZlZFN0YXRlKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1hbnVhbCxcbiAgICAgICAgc29ydGVkLFxuICAgICAgICBmaWx0ZXJlZCxcbiAgICAgICAgZGVmYXVsdEZpbHRlck1ldGhvZCxcbiAgICAgICAgcmVzb2x2ZWREYXRhLFxuICAgICAgICBhbGxWaXNpYmxlQ29sdW1ucyxcbiAgICAgICAgYWxsRGVjb3JhdGVkQ29sdW1ucyxcbiAgICAgIH0gPSByZXNvbHZlZFN0YXRlXG5cbiAgICAgIGNvbnN0IHNvcnRNZXRob2RzQnlDb2x1bW5JRCA9IHt9XG5cbiAgICAgIGFsbERlY29yYXRlZENvbHVtbnMuZmlsdGVyKGNvbCA9PiBjb2wuc29ydE1ldGhvZCkuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICBzb3J0TWV0aG9kc0J5Q29sdW1uSURbY29sLmlkXSA9IGNvbC5zb3J0TWV0aG9kXG4gICAgICB9KVxuXG4gICAgICAvLyBSZXNvbHZlIHRoZSBkYXRhIGZyb20gZWl0aGVyIG1hbnVhbCBkYXRhIG9yIHNvcnRlZCBkYXRhXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzb3J0ZWREYXRhOiBtYW51YWxcbiAgICAgICAgICA/IHJlc29sdmVkRGF0YVxuICAgICAgICAgIDogdGhpcy5zb3J0RGF0YShcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YShcbiAgICAgICAgICAgICAgcmVzb2x2ZWREYXRhLFxuICAgICAgICAgICAgICBmaWx0ZXJlZCxcbiAgICAgICAgICAgICAgZGVmYXVsdEZpbHRlck1ldGhvZCxcbiAgICAgICAgICAgICAgYWxsVmlzaWJsZUNvbHVtbnNcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzb3J0ZWQsXG4gICAgICAgICAgICBzb3J0TWV0aG9kc0J5Q29sdW1uSURcbiAgICAgICAgICApLFxuICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVGZXRjaERhdGEgKCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkZldGNoRGF0YSh0aGlzLmdldFJlc29sdmVkU3RhdGUoKSwgdGhpcylcbiAgICB9XG5cbiAgICBnZXRQcm9wT3JTdGF0ZSAoa2V5KSB7XG4gICAgICByZXR1cm4gXy5nZXRGaXJzdERlZmluZWQodGhpcy5wcm9wc1trZXldLCB0aGlzLnN0YXRlW2tleV0pXG4gICAgfVxuXG4gICAgZ2V0U3RhdGVPclByb3AgKGtleSkge1xuICAgICAgcmV0dXJuIF8uZ2V0Rmlyc3REZWZpbmVkKHRoaXMuc3RhdGVba2V5XSwgdGhpcy5wcm9wc1trZXldKVxuICAgIH1cblxuICAgIGZpbHRlckRhdGEgKGRhdGEsIGZpbHRlcmVkLCBkZWZhdWx0RmlsdGVyTWV0aG9kLCBhbGxWaXNpYmxlQ29sdW1ucykge1xuICAgICAgbGV0IGZpbHRlcmVkRGF0YSA9IGRhdGFcblxuICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCkge1xuICAgICAgICBmaWx0ZXJlZERhdGEgPSBmaWx0ZXJlZC5yZWR1Y2UoKGZpbHRlcmVkU29GYXIsIG5leHRGaWx0ZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBjb2x1bW4gPSBhbGxWaXNpYmxlQ29sdW1ucy5maW5kKHggPT4geC5pZCA9PT0gbmV4dEZpbHRlci5pZClcblxuICAgICAgICAgIC8vIERvbid0IGZpbHRlciBoaWRkZW4gY29sdW1ucyBvciBjb2x1bW5zIHRoYXQgaGF2ZSBoYWQgdGhlaXIgZmlsdGVycyBkaXNhYmxlZFxuICAgICAgICAgIGlmICghY29sdW1uIHx8IGNvbHVtbi5maWx0ZXJhYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkU29GYXJcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBmaWx0ZXJNZXRob2QgPSBjb2x1bW4uZmlsdGVyTWV0aG9kIHx8IGRlZmF1bHRGaWx0ZXJNZXRob2RcblxuICAgICAgICAgIC8vIElmICdmaWx0ZXJBbGwnIGlzIHNldCB0byB0cnVlLCBwYXNzIHRoZSBlbnRpcmUgZGF0YXNldCB0byB0aGUgZmlsdGVyIG1ldGhvZFxuICAgICAgICAgIGlmIChjb2x1bW4uZmlsdGVyQWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyTWV0aG9kKG5leHRGaWx0ZXIsIGZpbHRlcmVkU29GYXIsIGNvbHVtbilcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkU29GYXIuZmlsdGVyKHJvdyA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJNZXRob2QobmV4dEZpbHRlciwgcm93LCBjb2x1bW4pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgZmlsdGVyZWREYXRhKVxuXG4gICAgICAgIC8vIEFwcGx5IHRoZSBmaWx0ZXIgdG8gdGhlIHN1YnJvd3MgaWYgd2UgYXJlIHBpdm90aW5nLCBhbmQgdGhlblxuICAgICAgICAvLyBmaWx0ZXIgYW55IHJvd3Mgd2l0aG91dCBzdWJjb2x1bW5zIGJlY2F1c2UgaXQgd291bGQgYmUgc3RyYW5nZSB0byBzaG93XG4gICAgICAgIGZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkRGF0YVxuICAgICAgICAgIC5tYXAocm93ID0+IHtcbiAgICAgICAgICAgIGlmICghcm93W3RoaXMucHJvcHMuc3ViUm93c0tleV0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJvd1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4ucm93LFxuICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5zdWJSb3dzS2V5XTogdGhpcy5maWx0ZXJEYXRhKFxuICAgICAgICAgICAgICAgIHJvd1t0aGlzLnByb3BzLnN1YlJvd3NLZXldLFxuICAgICAgICAgICAgICAgIGZpbHRlcmVkLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRGaWx0ZXJNZXRob2QsXG4gICAgICAgICAgICAgICAgYWxsVmlzaWJsZUNvbHVtbnNcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIocm93ID0+IHtcbiAgICAgICAgICAgIGlmICghcm93W3RoaXMucHJvcHMuc3ViUm93c0tleV0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3dbdGhpcy5wcm9wcy5zdWJSb3dzS2V5XS5sZW5ndGggPiAwXG4gICAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbHRlcmVkRGF0YVxuICAgIH1cblxuICAgIHNvcnREYXRhIChkYXRhLCBzb3J0ZWQsIHNvcnRNZXRob2RzQnlDb2x1bW5JRCA9IHt9KSB7XG4gICAgICBpZiAoIXNvcnRlZC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc29ydGVkRGF0YSA9ICh0aGlzLnByb3BzLm9yZGVyQnlNZXRob2QgfHwgXy5vcmRlckJ5KShcbiAgICAgICAgZGF0YSxcbiAgICAgICAgc29ydGVkLm1hcChzb3J0ID0+IHtcbiAgICAgICAgICAvLyBTdXBwb3J0IGN1c3RvbSBzb3J0aW5nIG1ldGhvZHMgZm9yIGVhY2ggY29sdW1uXG4gICAgICAgICAgaWYgKHNvcnRNZXRob2RzQnlDb2x1bW5JRFtzb3J0LmlkXSkge1xuICAgICAgICAgICAgcmV0dXJuIChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBzb3J0TWV0aG9kc0J5Q29sdW1uSURbc29ydC5pZF0oYVtzb3J0LmlkXSwgYltzb3J0LmlkXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kZWZhdWx0U29ydE1ldGhvZChhW3NvcnQuaWRdLCBiW3NvcnQuaWRdKVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHNvcnRlZC5tYXAoZCA9PiAhZC5kZXNjKSxcbiAgICAgICAgdGhpcy5wcm9wcy5pbmRleEtleVxuICAgICAgKVxuXG4gICAgICBzb3J0ZWREYXRhLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgaWYgKCFyb3dbdGhpcy5wcm9wcy5zdWJSb3dzS2V5XSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHJvd1t0aGlzLnByb3BzLnN1YlJvd3NLZXldID0gdGhpcy5zb3J0RGF0YShcbiAgICAgICAgICByb3dbdGhpcy5wcm9wcy5zdWJSb3dzS2V5XSxcbiAgICAgICAgICBzb3J0ZWQsXG4gICAgICAgICAgc29ydE1ldGhvZHNCeUNvbHVtbklEXG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBzb3J0ZWREYXRhXG4gICAgfVxuXG4gICAgZ2V0TWluUm93cyAoKSB7XG4gICAgICByZXR1cm4gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHRoaXMucHJvcHMubWluUm93cyxcbiAgICAgICAgdGhpcy5nZXRTdGF0ZU9yUHJvcCgncGFnZVNpemUnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFVzZXIgYWN0aW9uc1xuICAgIG9uUGFnZUNoYW5nZSAocGFnZSkge1xuICAgICAgY29uc3QgeyBvblBhZ2VDaGFuZ2UsIGNvbGxhcHNlT25QYWdlQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIGNvbnN0IG5ld1N0YXRlID0geyBwYWdlIH1cbiAgICAgIGlmIChjb2xsYXBzZU9uUGFnZUNoYW5nZSkge1xuICAgICAgICBuZXdTdGF0ZS5leHBhbmRlZCA9IHt9XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlV2l0aERhdGEobmV3U3RhdGUsICgpID0+IHtcbiAgICAgICAgb25QYWdlQ2hhbmdlICYmIG9uUGFnZUNoYW5nZShwYWdlKVxuICAgICAgICB0aGlzLmZpcmVGZXRjaERhdGEoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvblBhZ2VTaXplQ2hhbmdlIChuZXdQYWdlU2l6ZSkge1xuICAgICAgY29uc3QgeyBvblBhZ2VTaXplQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG4gICAgICBjb25zdCB7IHBhZ2VTaXplLCBwYWdlIH0gPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxuXG4gICAgICAvLyBOb3JtYWxpemUgdGhlIHBhZ2UgdG8gZGlzcGxheVxuICAgICAgY29uc3QgY3VycmVudFJvdyA9IHBhZ2VTaXplICogcGFnZVxuICAgICAgY29uc3QgbmV3UGFnZSA9IE1hdGguZmxvb3IoY3VycmVudFJvdyAvIG5ld1BhZ2VTaXplKVxuXG4gICAgICB0aGlzLnNldFN0YXRlV2l0aERhdGEoXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlU2l6ZTogbmV3UGFnZVNpemUsXG4gICAgICAgICAgcGFnZTogbmV3UGFnZSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIG9uUGFnZVNpemVDaGFuZ2UgJiYgb25QYWdlU2l6ZUNoYW5nZShuZXdQYWdlU2l6ZSwgbmV3UGFnZSlcbiAgICAgICAgICB0aGlzLmZpcmVGZXRjaERhdGEoKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuXG4gICAgc29ydENvbHVtbiAoY29sdW1uLCBhZGRpdGl2ZSkge1xuICAgICAgY29uc3QgeyBzb3J0ZWQsIHNraXBOZXh0U29ydCwgZGVmYXVsdFNvcnREZXNjIH0gPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxuXG4gICAgICBjb25zdCBmaXJzdFNvcnREaXJlY3Rpb24gPSBjb2x1bW4uaGFzT3duUHJvcGVydHkoJ2RlZmF1bHRTb3J0RGVzYycpXG4gICAgICAgID8gY29sdW1uLmRlZmF1bHRTb3J0RGVzY1xuICAgICAgICA6IGRlZmF1bHRTb3J0RGVzY1xuICAgICAgY29uc3Qgc2Vjb25kU29ydERpcmVjdGlvbiA9ICFmaXJzdFNvcnREaXJlY3Rpb25cblxuICAgICAgLy8gd2UgY2FuJ3Qgc3RvcCBldmVudCBwcm9wYWdhdGlvbiBmcm9tIHRoZSBjb2x1bW4gcmVzaXplIG1vdmUgaGFuZGxlcnNcbiAgICAgIC8vIGF0dGFjaGVkIHRvIHRoZSBkb2N1bWVudCBiZWNhdXNlIG9mIHJlYWN0J3Mgc3ludGhldGljIGV2ZW50c1xuICAgICAgLy8gc28gd2UgaGF2ZSB0byBwcmV2ZW50IHRoZSBzb3J0IGZ1bmN0aW9uIGZyb20gYWN0dWFsbHkgc29ydGluZ1xuICAgICAgLy8gaWYgd2UgY2xpY2sgb24gdGhlIGNvbHVtbiByZXNpemUgZWxlbWVudCB3aXRoaW4gYSBoZWFkZXIuXG4gICAgICBpZiAoc2tpcE5leHRTb3J0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGVXaXRoRGF0YSh7XG4gICAgICAgICAgc2tpcE5leHRTb3J0OiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgb25Tb3J0ZWRDaGFuZ2UgfSA9IHRoaXMucHJvcHNcblxuICAgICAgbGV0IG5ld1NvcnRlZCA9IF8uY2xvbmUoc29ydGVkIHx8IFtdKS5tYXAoZCA9PiB7XG4gICAgICAgIGQuZGVzYyA9IF8uaXNTb3J0aW5nRGVzYyhkKVxuICAgICAgICByZXR1cm4gZFxuICAgICAgfSlcbiAgICAgIGlmICghXy5pc0FycmF5KGNvbHVtbikpIHtcbiAgICAgICAgLy8gU2luZ2xlLVNvcnRcbiAgICAgICAgY29uc3QgZXhpc3RpbmdJbmRleCA9IG5ld1NvcnRlZC5maW5kSW5kZXgoZCA9PiBkLmlkID09PSBjb2x1bW4uaWQpXG4gICAgICAgIGlmIChleGlzdGluZ0luZGV4ID4gLTEpIHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG5ld1NvcnRlZFtleGlzdGluZ0luZGV4XVxuICAgICAgICAgIGlmIChleGlzdGluZy5kZXNjID09PSBzZWNvbmRTb3J0RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoYWRkaXRpdmUpIHtcbiAgICAgICAgICAgICAgbmV3U29ydGVkLnNwbGljZShleGlzdGluZ0luZGV4LCAxKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXhpc3RpbmcuZGVzYyA9IGZpcnN0U29ydERpcmVjdGlvblxuICAgICAgICAgICAgICBuZXdTb3J0ZWQgPSBbZXhpc3RpbmddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4aXN0aW5nLmRlc2MgPSBzZWNvbmRTb3J0RGlyZWN0aW9uXG4gICAgICAgICAgICBpZiAoIWFkZGl0aXZlKSB7XG4gICAgICAgICAgICAgIG5ld1NvcnRlZCA9IFtleGlzdGluZ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGFkZGl0aXZlKSB7XG4gICAgICAgICAgICBuZXdTb3J0ZWQucHVzaCh7XG4gICAgICAgICAgICAgIGlkOiBjb2x1bW4uaWQsXG4gICAgICAgICAgICAgIGRlc2M6IGZpcnN0U29ydERpcmVjdGlvbixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1NvcnRlZCA9IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBjb2x1bW4uaWQsXG4gICAgICAgICAgICAgICAgZGVzYzogZmlyc3RTb3J0RGlyZWN0aW9uLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTXVsdGktU29ydFxuICAgICAgICBjb25zdCBleGlzdGluZ0luZGV4ID0gbmV3U29ydGVkLmZpbmRJbmRleChkID0+IGQuaWQgPT09IGNvbHVtblswXS5pZClcbiAgICAgICAgLy8gRXhpc3RpbmcgU29ydGVkIENvbHVtblxuICAgICAgICBpZiAoZXhpc3RpbmdJbmRleCA+IC0xKSB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBuZXdTb3J0ZWRbZXhpc3RpbmdJbmRleF1cbiAgICAgICAgICBpZiAoZXhpc3RpbmcuZGVzYyA9PT0gc2Vjb25kU29ydERpcmVjdGlvbikge1xuICAgICAgICAgICAgaWYgKGFkZGl0aXZlKSB7XG4gICAgICAgICAgICAgIG5ld1NvcnRlZC5zcGxpY2UoZXhpc3RpbmdJbmRleCwgY29sdW1uLmxlbmd0aClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbHVtbi5mb3JFYWNoKChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3U29ydGVkW2V4aXN0aW5nSW5kZXggKyBpXS5kZXNjID0gZmlyc3RTb3J0RGlyZWN0aW9uXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbHVtbi5mb3JFYWNoKChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgIG5ld1NvcnRlZFtleGlzdGluZ0luZGV4ICsgaV0uZGVzYyA9IHNlY29uZFNvcnREaXJlY3Rpb25cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghYWRkaXRpdmUpIHtcbiAgICAgICAgICAgIG5ld1NvcnRlZCA9IG5ld1NvcnRlZC5zbGljZShleGlzdGluZ0luZGV4LCBjb2x1bW4ubGVuZ3RoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBOZXcgU29ydCBDb2x1bW5cbiAgICAgICAgICBpZiAoYWRkaXRpdmUpIHtcbiAgICAgICAgICAgIG5ld1NvcnRlZCA9IG5ld1NvcnRlZC5jb25jYXQoXG4gICAgICAgICAgICAgIGNvbHVtbi5tYXAoZCA9PiAoe1xuICAgICAgICAgICAgICAgIGlkOiBkLmlkLFxuICAgICAgICAgICAgICAgIGRlc2M6IGZpcnN0U29ydERpcmVjdGlvbixcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1NvcnRlZCA9IGNvbHVtbi5tYXAoZCA9PiAoe1xuICAgICAgICAgICAgICBpZDogZC5pZCxcbiAgICAgICAgICAgICAgZGVzYzogZmlyc3RTb3J0RGlyZWN0aW9uLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2U6XG4gICAgICAgICAgICAoIXNvcnRlZC5sZW5ndGggJiYgbmV3U29ydGVkLmxlbmd0aCkgfHwgIWFkZGl0aXZlXG4gICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICA6IHRoaXMuc3RhdGUucGFnZSxcbiAgICAgICAgICBzb3J0ZWQ6IG5ld1NvcnRlZCxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIG9uU29ydGVkQ2hhbmdlICYmIG9uU29ydGVkQ2hhbmdlKG5ld1NvcnRlZCwgY29sdW1uLCBhZGRpdGl2ZSlcbiAgICAgICAgICB0aGlzLmZpcmVGZXRjaERhdGEoKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuXG4gICAgZmlsdGVyQ29sdW1uIChjb2x1bW4sIHZhbHVlKSB7XG4gICAgICBjb25zdCB7IGZpbHRlcmVkIH0gPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxuICAgICAgY29uc3QgeyBvbkZpbHRlcmVkQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIC8vIFJlbW92ZSBvbGQgZmlsdGVyIGZpcnN0IGlmIGl0IGV4aXN0c1xuICAgICAgY29uc3QgbmV3RmlsdGVyaW5nID0gKGZpbHRlcmVkIHx8IFtdKS5maWx0ZXIoeCA9PiB7XG4gICAgICAgIGlmICh4LmlkICE9PSBjb2x1bW4uaWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgIG5ld0ZpbHRlcmluZy5wdXNoKHtcbiAgICAgICAgICBpZDogY29sdW1uLmlkLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKFxuICAgICAgICB7XG4gICAgICAgICAgZmlsdGVyZWQ6IG5ld0ZpbHRlcmluZyxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIG9uRmlsdGVyZWRDaGFuZ2UgJiYgb25GaWx0ZXJlZENoYW5nZShuZXdGaWx0ZXJpbmcsIGNvbHVtbiwgdmFsdWUpXG4gICAgICAgICAgdGhpcy5maXJlRmV0Y2hEYXRhKClcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cblxuICAgIHJlc2l6ZUNvbHVtblN0YXJ0IChjb2x1bW4sIGV2ZW50LCBpc1RvdWNoKSB7XG4gICAgICBjb25zdCBwYXJlbnRXaWR0aCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIC53aWR0aFxuXG4gICAgICBsZXQgcGFnZVhcbiAgICAgIGlmIChpc1RvdWNoKSB7XG4gICAgICAgIHBhZ2VYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhZ2VYID0gZXZlbnQucGFnZVhcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKFxuICAgICAgICB7XG4gICAgICAgICAgY3VycmVudGx5UmVzaXppbmc6IHtcbiAgICAgICAgICAgIGlkOiBjb2x1bW4uaWQsXG4gICAgICAgICAgICBzdGFydFg6IHBhZ2VYLFxuICAgICAgICAgICAgcGFyZW50V2lkdGg6IHBhcmVudFdpZHRoLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpZiAoaXNUb3VjaCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcpXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMucmVzaXplQ29sdW1uRW5kKVxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcpXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuXG4gICAgcmVzaXplQ29sdW1uRW5kIChldmVudCkge1xuICAgICAgbGV0IGlzVG91Y2ggPSBldmVudC50eXBlID09PSAndG91Y2hlbmQnIHx8IGV2ZW50LnR5cGUgPT09ICd0b3VjaGNhbmNlbCdcblxuICAgICAgaWYgKGlzVG91Y2gpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcpXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0cyBhIHRvdWNoIGV2ZW50IGNsZWFyIHRoZSBtb3VzZSBvbmUncyBhcyB3ZWxsIGJlY2F1c2Ugc29tZXRpbWVzXG4gICAgICAvLyB0aGUgbW91c2VEb3duIGV2ZW50IGdldHMgY2FsbGVkIGFzIHdlbGwsIGJ1dCB0aGUgbW91c2VVcCBldmVudCBkb2Vzbid0XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZylcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcblxuICAgICAgLy8gVGhlIHRvdWNoIGV2ZW50cyBkb24ndCBwcm9wYWdhdGUgdXAgdG8gdGhlIHNvcnRpbmcncyBvbk1vdXNlRG93biBldmVudCBzb1xuICAgICAgLy8gbm8gbmVlZCB0byBwcmV2ZW50IGl0IGZyb20gaGFwcGVuaW5nIG9yIGVsc2UgdGhlIGZpcnN0IGNsaWNrIGFmdGVyIGEgdG91Y2hcbiAgICAgIC8vIGV2ZW50IHJlc2l6ZSB3aWxsIG5vdCBzb3J0IHRoZSBjb2x1bW4uXG4gICAgICBpZiAoIWlzVG91Y2gpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKHtcbiAgICAgICAgICBza2lwTmV4dFNvcnQ6IHRydWUsXG4gICAgICAgICAgY3VycmVudGx5UmVzaXppbmc6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJlc2l6ZUNvbHVtbk1vdmluZyAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IHsgb25SZXNpemVkQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG4gICAgICBjb25zdCB7IHJlc2l6ZWQsIGN1cnJlbnRseVJlc2l6aW5nIH0gPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxuXG4gICAgICAvLyBEZWxldGUgb2xkIHZhbHVlXG4gICAgICBjb25zdCBuZXdSZXNpemVkID0gcmVzaXplZC5maWx0ZXIoeCA9PiB4LmlkICE9PSBjdXJyZW50bHlSZXNpemluZy5pZClcblxuICAgICAgbGV0IHBhZ2VYXG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2htb3ZlJykge1xuICAgICAgICBwYWdlWCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZW1vdmUnKSB7XG4gICAgICAgIHBhZ2VYID0gZXZlbnQucGFnZVhcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IHRoZSBtaW4gc2l6ZSB0byAxMCB0byBhY2NvdW50IGZvciBtYXJnaW4gYW5kIGJvcmRlciBvciBlbHNlIHRoZSBncm91cCBoZWFkZXJzIGRvbid0IGxpbmUgdXAgY29ycmVjdGx5XG4gICAgICBjb25zdCBuZXdXaWR0aCA9IE1hdGgubWF4KFxuICAgICAgICBjdXJyZW50bHlSZXNpemluZy5wYXJlbnRXaWR0aCArIHBhZ2VYIC0gY3VycmVudGx5UmVzaXppbmcuc3RhcnRYLFxuICAgICAgICAxMVxuICAgICAgKVxuXG4gICAgICBuZXdSZXNpemVkLnB1c2goe1xuICAgICAgICBpZDogY3VycmVudGx5UmVzaXppbmcuaWQsXG4gICAgICAgIHZhbHVlOiBuZXdXaWR0aCxcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAge1xuICAgICAgICAgIHJlc2l6ZWQ6IG5ld1Jlc2l6ZWQsXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBvblJlc2l6ZWRDaGFuZ2UgJiYgb25SZXNpemVkQ2hhbmdlKG5ld1Jlc2l6ZWQsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9XG4iXX0=