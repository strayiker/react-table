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

        columns.forEach(function (column) {
          if (column.columns) {
            hasHeaderGroups = true;
          }
        });

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRob2RzLmpzIl0sIm5hbWVzIjpbInByb3BzIiwic3RhdGUiLCJyZXNvbHZlZFN0YXRlIiwiY29tcGFjdE9iamVjdCIsIm5ld1N0YXRlIiwiY29sdW1ucyIsInBpdm90QnkiLCJkYXRhIiwicGl2b3RJREtleSIsInBpdm90VmFsS2V5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJuZXN0aW5nTGV2ZWxLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJTdWJDb21wb25lbnQiLCJoYXNIZWFkZXJHcm91cHMiLCJjb2x1bW5zV2l0aEV4cGFuZGVyIiwiSGVhZGVyIiwiaWQiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJmb3JFYWNoIiwiY29sdW1uIiwiZXhwYW5kZXJDb2x1bW4iLCJmaW5kIiwiY29sIiwiZXhwYW5kZXIiLCJzb21lIiwiY29sMiIsIm1ha2VEZWNvcmF0ZWRDb2x1bW4iLCJkY29sIiwiZXhwYW5kZXJEZWZhdWx0cyIsImFjY2Vzc29yIiwiYWNjZXNzb3JTdHJpbmciLCJnZXQiLCJyb3ciLCJjb25zb2xlIiwid2FybiIsIkVycm9yIiwidW5kZWZpbmVkIiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsImRlY29yYXRlQW5kQWRkVG9BbGwiLCJkZWNvcmF0ZWRDb2x1bW4iLCJhbGxEZWNvcmF0ZWRDb2x1bW5zIiwicHVzaCIsImRlY29yYXRlZENvbHVtbnMiLCJtYXAiLCJpIiwidmlzaWJsZUNvbHVtbnMiLCJzbGljZSIsImFsbFZpc2libGVDb2x1bW5zIiwidmlzaWJsZVN1YkNvbHVtbnMiLCJmaWx0ZXIiLCJpbmRleE9mIiwiZCIsImdldEZpcnN0RGVmaW5lZCIsInNob3ciLCJsZW5ndGgiLCJwaXZvdEluZGV4IiwiZmluZEluZGV4IiwicGl2b3QiLCJwaXZvdENvbHVtbnMiLCJmb3VuZCIsInBpdm90SUQiLCJwaXZvdENvbHVtbkdyb3VwIiwiaGVhZGVyIiwicGl2b3REZWZhdWx0cyIsInBpdm90ZWQiLCJzcGxpY2UiLCJ1bnNoaWZ0IiwiaGVhZGVyR3JvdXBzIiwiY3VycmVudFNwYW4iLCJhZGRIZWFkZXIiLCJjb25jYXQiLCJhY2Nlc3NSb3ciLCJsZXZlbCIsInJlc29sdmVkRGF0YSIsImFnZ3JlZ2F0ZSIsImFnZ3JlZ2F0aW9uVmFsdWVzIiwiYWdncmVnYXRpbmdDb2x1bW5zIiwidmFsdWVzIiwicm93cyIsImdyb3VwUmVjdXJzaXZlbHkiLCJrZXlzIiwiZ3JvdXBlZFJvd3MiLCJPYmplY3QiLCJlbnRyaWVzIiwiZ3JvdXBCeSIsImtleSIsInZhbHVlIiwic3ViUm93cyIsInJvd0dyb3VwIiwibWFudWFsIiwic29ydGVkIiwiZmlsdGVyZWQiLCJkZWZhdWx0RmlsdGVyTWV0aG9kIiwic29ydE1ldGhvZHNCeUNvbHVtbklEIiwic29ydE1ldGhvZCIsInNvcnRlZERhdGEiLCJzb3J0RGF0YSIsImZpbHRlckRhdGEiLCJvbkZldGNoRGF0YSIsImdldFJlc29sdmVkU3RhdGUiLCJmaWx0ZXJlZERhdGEiLCJyZWR1Y2UiLCJmaWx0ZXJlZFNvRmFyIiwibmV4dEZpbHRlciIsIngiLCJmaWx0ZXJNZXRob2QiLCJmaWx0ZXJBbGwiLCJvcmRlckJ5TWV0aG9kIiwib3JkZXJCeSIsInNvcnQiLCJhIiwiYiIsImRlZmF1bHRTb3J0TWV0aG9kIiwiZGVzYyIsIm1pblJvd3MiLCJnZXRTdGF0ZU9yUHJvcCIsInBhZ2UiLCJvblBhZ2VDaGFuZ2UiLCJjb2xsYXBzZU9uUGFnZUNoYW5nZSIsImV4cGFuZGVkIiwic2V0U3RhdGVXaXRoRGF0YSIsImZpcmVGZXRjaERhdGEiLCJuZXdQYWdlU2l6ZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJwYWdlU2l6ZSIsImN1cnJlbnRSb3ciLCJuZXdQYWdlIiwiTWF0aCIsImZsb29yIiwiYWRkaXRpdmUiLCJza2lwTmV4dFNvcnQiLCJkZWZhdWx0U29ydERlc2MiLCJmaXJzdFNvcnREaXJlY3Rpb24iLCJoYXNPd25Qcm9wZXJ0eSIsInNlY29uZFNvcnREaXJlY3Rpb24iLCJvblNvcnRlZENoYW5nZSIsIm5ld1NvcnRlZCIsImNsb25lIiwiaXNTb3J0aW5nRGVzYyIsImlzQXJyYXkiLCJleGlzdGluZ0luZGV4IiwiZXhpc3RpbmciLCJvbkZpbHRlcmVkQ2hhbmdlIiwibmV3RmlsdGVyaW5nIiwiZXZlbnQiLCJpc1RvdWNoIiwicGFyZW50V2lkdGgiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJwYWdlWCIsImNoYW5nZWRUb3VjaGVzIiwiY3VycmVudGx5UmVzaXppbmciLCJzdGFydFgiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemVDb2x1bW5Nb3ZpbmciLCJyZXNpemVDb2x1bW5FbmQiLCJ0eXBlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uUmVzaXplZENoYW5nZSIsInJlc2l6ZWQiLCJuZXdSZXNpemVkIiwibmV3V2lkdGgiLCJtYXgiLCJCYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBRWU7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsdUNBRU9BLEtBRlAsRUFFY0MsS0FGZCxFQUVxQjtBQUM5QixZQUFNQyw2QkFDRCxnQkFBRUMsYUFBRixDQUFnQixLQUFLRixLQUFyQixDQURDLEVBRUQsZ0JBQUVFLGFBQUYsQ0FBZ0IsS0FBS0gsS0FBckIsQ0FGQyxFQUdELGdCQUFFRyxhQUFGLENBQWdCRixLQUFoQixDQUhDLEVBSUQsZ0JBQUVFLGFBQUYsQ0FBZ0JILEtBQWhCLENBSkMsQ0FBTjtBQU1BLGVBQU9FLGFBQVA7QUFDRDtBQVZVO0FBQUE7QUFBQSxtQ0FZR0UsUUFaSCxFQVlhO0FBQUE7O0FBQUEsWUFFcEJDLE9BRm9CLEdBY2xCRCxRQWRrQixDQUVwQkMsT0FGb0I7QUFBQSxnQ0FjbEJELFFBZGtCLENBR3BCRSxPQUhvQjtBQUFBLFlBR3BCQSxP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dCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlID0+XG4gIGNsYXNzIGV4dGVuZHMgQmFzZSB7XG4gICAgZ2V0UmVzb2x2ZWRTdGF0ZSAocHJvcHMsIHN0YXRlKSB7XG4gICAgICBjb25zdCByZXNvbHZlZFN0YXRlID0ge1xuICAgICAgICAuLi5fLmNvbXBhY3RPYmplY3QodGhpcy5zdGF0ZSksXG4gICAgICAgIC4uLl8uY29tcGFjdE9iamVjdCh0aGlzLnByb3BzKSxcbiAgICAgICAgLi4uXy5jb21wYWN0T2JqZWN0KHN0YXRlKSxcbiAgICAgICAgLi4uXy5jb21wYWN0T2JqZWN0KHByb3BzKSxcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNvbHZlZFN0YXRlXG4gICAgfVxuXG4gICAgZ2V0RGF0YU1vZGVsIChuZXdTdGF0ZSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjb2x1bW5zLFxuICAgICAgICBwaXZvdEJ5ID0gW10sXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHBpdm90SURLZXksXG4gICAgICAgIHBpdm90VmFsS2V5LFxuICAgICAgICBzdWJSb3dzS2V5LFxuICAgICAgICBhZ2dyZWdhdGVkS2V5LFxuICAgICAgICBuZXN0aW5nTGV2ZWxLZXksXG4gICAgICAgIG9yaWdpbmFsS2V5LFxuICAgICAgICBpbmRleEtleSxcbiAgICAgICAgZ3JvdXBlZEJ5UGl2b3RLZXksXG4gICAgICAgIFN1YkNvbXBvbmVudCxcbiAgICAgIH0gPSBuZXdTdGF0ZVxuXG4gICAgICAvLyBEZXRlcm1pbmUgSGVhZGVyIEdyb3Vwc1xuICAgICAgbGV0IGhhc0hlYWRlckdyb3VwcyA9IGZhbHNlXG5cbiAgICAgIGxldCBjb2x1bW5zV2l0aEV4cGFuZGVyID0gWy4uLmNvbHVtbnMsIHtcbiAgICAgICAgSGVhZGVyOiAnJyxcbiAgICAgICAgaWQ6ICdAQGR1bW15JyxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIH1dXG5cbiAgICAgIGNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICBpZiAoY29sdW1uLmNvbHVtbnMpIHtcbiAgICAgICAgICBoYXNIZWFkZXJHcm91cHMgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGxldCBleHBhbmRlckNvbHVtbiA9IGNvbHVtbnMuZmluZChcbiAgICAgICAgY29sID0+XG4gICAgICAgICAgY29sLmV4cGFuZGVyIHx8XG4gICAgICAgICAgKGNvbC5jb2x1bW5zICYmIGNvbC5jb2x1bW5zLnNvbWUoY29sMiA9PiBjb2wyLmV4cGFuZGVyKSlcbiAgICAgIClcbiAgICAgIC8vIFRoZSBhY3R1YWwgZXhwYW5kZXIgbWlnaHQgYmUgaW4gdGhlIGNvbHVtbnMgZmllbGQgb2YgYSBncm91cCBjb2x1bW5cbiAgICAgIGlmIChleHBhbmRlckNvbHVtbiAmJiAhZXhwYW5kZXJDb2x1bW4uZXhwYW5kZXIpIHtcbiAgICAgICAgZXhwYW5kZXJDb2x1bW4gPSBleHBhbmRlckNvbHVtbi5jb2x1bW5zLmZpbmQoY29sID0+IGNvbC5leHBhbmRlcilcbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2UgaGF2ZSBTdWJDb21wb25lbnQncyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSBoYXZlIGFuIGV4cGFuZGVyIGNvbHVtblxuICAgICAgaWYgKFN1YkNvbXBvbmVudCAmJiAhZXhwYW5kZXJDb2x1bW4pIHtcbiAgICAgICAgZXhwYW5kZXJDb2x1bW4gPSB7IGV4cGFuZGVyOiB0cnVlIH1cbiAgICAgICAgY29sdW1uc1dpdGhFeHBhbmRlciA9IFtleHBhbmRlckNvbHVtbiwgLi4uY29sdW1uc1dpdGhFeHBhbmRlcl1cbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFrZURlY29yYXRlZENvbHVtbiA9IGNvbHVtbiA9PiB7XG4gICAgICAgIGxldCBkY29sXG4gICAgICAgIGlmIChjb2x1bW4uZXhwYW5kZXIpIHtcbiAgICAgICAgICBkY29sID0ge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5jb2x1bW4sXG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLmV4cGFuZGVyRGVmYXVsdHMsXG4gICAgICAgICAgICAuLi5jb2x1bW4sXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRjb2wgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLmNvbHVtbixcbiAgICAgICAgICAgIC4uLmNvbHVtbixcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGRjb2wuYWNjZXNzb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZGNvbC5pZCA9IGRjb2wuaWQgfHwgZGNvbC5hY2Nlc3NvclxuICAgICAgICAgIGNvbnN0IGFjY2Vzc29yU3RyaW5nID0gZGNvbC5hY2Nlc3NvclxuICAgICAgICAgIGRjb2wuYWNjZXNzb3IgPSByb3cgPT4gXy5nZXQocm93LCBhY2Nlc3NvclN0cmluZylcbiAgICAgICAgICByZXR1cm4gZGNvbFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRjb2wuYWNjZXNzb3IgJiYgIWRjb2wuaWQpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZGNvbClcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQSBjb2x1bW4gaWQgaXMgcmVxdWlyZWQgaWYgdXNpbmcgYSBub24tc3RyaW5nIGFjY2Vzc29yIGZvciBjb2x1bW4gYWJvdmUuJ1xuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGNvbC5hY2Nlc3Nvcikge1xuICAgICAgICAgIGRjb2wuYWNjZXNzb3IgPSBkID0+IHVuZGVmaW5lZFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW5zdXJlIG1pbldpZHRoIGlzIG5vdCBncmVhdGVyIHRoYW4gbWF4V2lkdGggaWYgc2V0XG4gICAgICAgIGlmIChkY29sLm1heFdpZHRoIDwgZGNvbC5taW5XaWR0aCkge1xuICAgICAgICAgIGRjb2wubWluV2lkdGggPSBkY29sLm1heFdpZHRoXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGNvbFxuICAgICAgfVxuXG4gICAgICAvLyBEZWNvcmF0ZSB0aGUgY29sdW1uc1xuICAgICAgY29uc3QgZGVjb3JhdGVBbmRBZGRUb0FsbCA9IGNvbCA9PiB7XG4gICAgICAgIGNvbnN0IGRlY29yYXRlZENvbHVtbiA9IG1ha2VEZWNvcmF0ZWRDb2x1bW4oY29sKVxuICAgICAgICBhbGxEZWNvcmF0ZWRDb2x1bW5zLnB1c2goZGVjb3JhdGVkQ29sdW1uKVxuICAgICAgICByZXR1cm4gZGVjb3JhdGVkQ29sdW1uXG4gICAgICB9XG4gICAgICBsZXQgYWxsRGVjb3JhdGVkQ29sdW1ucyA9IFtdXG4gICAgICBjb25zdCBkZWNvcmF0ZWRDb2x1bW5zID0gY29sdW1uc1dpdGhFeHBhbmRlci5tYXAoKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgICBpZiAoY29sdW1uLmNvbHVtbnMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY29sdW1uLFxuICAgICAgICAgICAgY29sdW1uczogY29sdW1uLmNvbHVtbnMubWFwKGRlY29yYXRlQW5kQWRkVG9BbGwpLFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZGVjb3JhdGVBbmRBZGRUb0FsbChjb2x1bW4pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIEJ1aWxkIHRoZSB2aXNpYmxlIGNvbHVtbnMsIGhlYWRlcnMgYW5kIGZsYXQgY29sdW1uIGxpc3RcbiAgICAgIGxldCB2aXNpYmxlQ29sdW1ucyA9IGRlY29yYXRlZENvbHVtbnMuc2xpY2UoKVxuICAgICAgbGV0IGFsbFZpc2libGVDb2x1bW5zID0gW11cblxuICAgICAgdmlzaWJsZUNvbHVtbnMgPSB2aXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgICBpZiAoY29sdW1uLmNvbHVtbnMpIHtcbiAgICAgICAgICBjb25zdCB2aXNpYmxlU3ViQ29sdW1ucyA9IGNvbHVtbi5jb2x1bW5zLmZpbHRlcihcbiAgICAgICAgICAgIGQgPT5cbiAgICAgICAgICAgICAgcGl2b3RCeS5pbmRleE9mKGQuaWQpID4gLTFcbiAgICAgICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICAgICAgOiBfLmdldEZpcnN0RGVmaW5lZChkLnNob3csIHRydWUpXG4gICAgICAgICAgKVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jb2x1bW4sXG4gICAgICAgICAgICBjb2x1bW5zOiB2aXNpYmxlU3ViQ29sdW1ucyxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtblxuICAgICAgfSlcblxuICAgICAgdmlzaWJsZUNvbHVtbnMgPSB2aXNpYmxlQ29sdW1ucy5maWx0ZXIoY29sdW1uID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbHVtbi5jb2x1bW5zXG4gICAgICAgICAgPyBjb2x1bW4uY29sdW1ucy5sZW5ndGhcbiAgICAgICAgICA6IHBpdm90QnkuaW5kZXhPZihjb2x1bW4uaWQpID4gLTFcbiAgICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICAgIDogXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnNob3csIHRydWUpXG4gICAgICB9KVxuXG4gICAgICAvLyBGaW5kIGFueSBjdXN0b20gcGl2b3QgbG9jYXRpb25cbiAgICAgIGNvbnN0IHBpdm90SW5kZXggPSB2aXNpYmxlQ29sdW1ucy5maW5kSW5kZXgoY29sID0+IGNvbC5waXZvdClcblxuICAgICAgLy8gSGFuZGxlIFBpdm90IENvbHVtbnNcbiAgICAgIGlmIChwaXZvdEJ5Lmxlbmd0aCkge1xuICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgcGl2b3QgY29sdW1ucyBpbiB0aGUgY29ycmVjdCBwaXZvdCBvcmRlclxuICAgICAgICBjb25zdCBwaXZvdENvbHVtbnMgPSBbXVxuICAgICAgICBwaXZvdEJ5LmZvckVhY2gocGl2b3RJRCA9PiB7XG4gICAgICAgICAgY29uc3QgZm91bmQgPSBhbGxEZWNvcmF0ZWRDb2x1bW5zLmZpbmQoZCA9PiBkLmlkID09PSBwaXZvdElEKVxuICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgcGl2b3RDb2x1bW5zLnB1c2goZm91bmQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBwaXZvdENvbHVtbkdyb3VwID0ge1xuICAgICAgICAgIGhlYWRlcjogKCkgPT4gPHN0cm9uZz5Hcm91cDwvc3Ryb25nPixcbiAgICAgICAgICBjb2x1bW5zOiBwaXZvdENvbHVtbnMubWFwKGNvbCA9PiAoe1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5waXZvdERlZmF1bHRzLFxuICAgICAgICAgICAgLi4uY29sLFxuICAgICAgICAgICAgcGl2b3RlZDogdHJ1ZSxcbiAgICAgICAgICB9KSksXG4gICAgICAgIH1cblxuICAgICAgICAvLyBQbGFjZSB0aGUgcGl2b3RDb2x1bW5zIGJhY2sgaW50byB0aGUgdmlzaWJsZUNvbHVtbnNcbiAgICAgICAgaWYgKHBpdm90SW5kZXggPj0gMCkge1xuICAgICAgICAgIHBpdm90Q29sdW1uR3JvdXAgPSB7XG4gICAgICAgICAgICAuLi52aXNpYmxlQ29sdW1uc1twaXZvdEluZGV4XSxcbiAgICAgICAgICAgIC4uLnBpdm90Q29sdW1uR3JvdXAsXG4gICAgICAgICAgfVxuICAgICAgICAgIHZpc2libGVDb2x1bW5zLnNwbGljZShwaXZvdEluZGV4LCAxLCBwaXZvdENvbHVtbkdyb3VwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZpc2libGVDb2x1bW5zLnVuc2hpZnQocGl2b3RDb2x1bW5Hcm91cClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBCdWlsZCBIZWFkZXIgR3JvdXBzXG4gICAgICBjb25zdCBoZWFkZXJHcm91cHMgPSBbXVxuICAgICAgbGV0IGN1cnJlbnRTcGFuID0gW11cblxuICAgICAgLy8gQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0byBhZGQgYSBoZWFkZXIgYW5kIHJlc2V0IHRoZSBjdXJyZW50U3BhblxuICAgICAgY29uc3QgYWRkSGVhZGVyID0gKGNvbHVtbnMsIGNvbHVtbikgPT4ge1xuICAgICAgICBoZWFkZXJHcm91cHMucHVzaCh7XG4gICAgICAgICAgLi4udGhpcy5wcm9wcy5jb2x1bW4sXG4gICAgICAgICAgLi4uY29sdW1uLFxuICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXG4gICAgICAgIH0pXG4gICAgICAgIGN1cnJlbnRTcGFuID0gW11cbiAgICAgIH1cblxuICAgICAgLy8gQnVpbGQgZmxhc3QgbGlzdCBvZiBhbGxWaXNpYmxlQ29sdW1ucyBhbmQgSGVhZGVyR3JvdXBzXG4gICAgICB2aXNpYmxlQ29sdW1ucy5mb3JFYWNoKChjb2x1bW4sIGkpID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi5jb2x1bW5zKSB7XG4gICAgICAgICAgYWxsVmlzaWJsZUNvbHVtbnMgPSBhbGxWaXNpYmxlQ29sdW1ucy5jb25jYXQoY29sdW1uLmNvbHVtbnMpXG4gICAgICAgICAgaWYgKGN1cnJlbnRTcGFuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFkZEhlYWRlcihjdXJyZW50U3BhbilcbiAgICAgICAgICB9XG4gICAgICAgICAgYWRkSGVhZGVyKGNvbHVtbi5jb2x1bW5zLCBjb2x1bW4pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgYWxsVmlzaWJsZUNvbHVtbnMucHVzaChjb2x1bW4pXG4gICAgICAgIGN1cnJlbnRTcGFuLnB1c2goY29sdW1uKVxuICAgICAgfSlcbiAgICAgIGlmIChoYXNIZWFkZXJHcm91cHMgJiYgY3VycmVudFNwYW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBhZGRIZWFkZXIoY3VycmVudFNwYW4pXG4gICAgICB9XG5cbiAgICAgIC8vIEFjY2VzcyB0aGUgZGF0YVxuICAgICAgY29uc3QgYWNjZXNzUm93ID0gKGQsIGksIGxldmVsID0gMCkgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSB7XG4gICAgICAgICAgW29yaWdpbmFsS2V5XTogZCxcbiAgICAgICAgICBbaW5kZXhLZXldOiBpLFxuICAgICAgICAgIFtzdWJSb3dzS2V5XTogZFtzdWJSb3dzS2V5XSxcbiAgICAgICAgICBbbmVzdGluZ0xldmVsS2V5XTogbGV2ZWwsXG4gICAgICAgIH1cbiAgICAgICAgYWxsRGVjb3JhdGVkQ29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgaWYgKGNvbHVtbi5leHBhbmRlcikgcmV0dXJuXG4gICAgICAgICAgcm93W2NvbHVtbi5pZF0gPSBjb2x1bW4uYWNjZXNzb3IoZClcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHJvd1tzdWJSb3dzS2V5XSkge1xuICAgICAgICAgIHJvd1tzdWJSb3dzS2V5XSA9IHJvd1tzdWJSb3dzS2V5XS5tYXAoKGQsIGkpID0+XG4gICAgICAgICAgICBhY2Nlc3NSb3coZCwgaSwgbGV2ZWwgKyAxKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93XG4gICAgICB9XG4gICAgICBsZXQgcmVzb2x2ZWREYXRhID0gZGF0YS5tYXAoKGQsIGkpID0+IGFjY2Vzc1JvdyhkLCBpKSlcblxuICAgICAgLy8gSWYgcGl2b3RpbmcsIHJlY3Vyc2l2ZWx5IGdyb3VwIHRoZSBkYXRhXG4gICAgICBjb25zdCBhZ2dyZWdhdGUgPSByb3dzID0+IHtcbiAgICAgICAgY29uc3QgYWdncmVnYXRpb25WYWx1ZXMgPSB7fVxuICAgICAgICBhZ2dyZWdhdGluZ0NvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHJvd3MubWFwKGQgPT4gZFtjb2x1bW4uaWRdKVxuICAgICAgICAgIGFnZ3JlZ2F0aW9uVmFsdWVzW2NvbHVtbi5pZF0gPSBjb2x1bW4uYWdncmVnYXRlKHZhbHVlcywgcm93cylcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFnZ3JlZ2F0aW9uVmFsdWVzXG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IE1ha2UgaXQgcG9zc2libGUgdG8gZmFicmljYXRlIG5lc3RlZCByb3dzIHdpdGhvdXQgcGl2b3RpbmdcbiAgICAgIGNvbnN0IGFnZ3JlZ2F0aW5nQ29sdW1ucyA9IGFsbFZpc2libGVDb2x1bW5zLmZpbHRlcihcbiAgICAgICAgZCA9PiAhZC5leHBhbmRlciAmJiBkLmFnZ3JlZ2F0ZVxuICAgICAgKVxuICAgICAgaWYgKHBpdm90QnkubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwUmVjdXJzaXZlbHkgPSAocm93cywga2V5cywgaSA9IDApID0+IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBsYXN0IGxldmVsLCBqdXN0IHJldHVybiB0aGUgcm93c1xuICAgICAgICAgIGlmIChpID09PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHJvd3NcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gR3JvdXAgdGhlIHJvd3MgdG9nZXRoZXIgZm9yIHRoaXMgbGV2ZWxcbiAgICAgICAgICBsZXQgZ3JvdXBlZFJvd3MgPSBPYmplY3QuZW50cmllcyhcbiAgICAgICAgICAgIF8uZ3JvdXBCeShyb3dzLCBrZXlzW2ldKVxuICAgICAgICAgICkubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIFtwaXZvdElES2V5XToga2V5c1tpXSxcbiAgICAgICAgICAgICAgW3Bpdm90VmFsS2V5XToga2V5LFxuICAgICAgICAgICAgICBba2V5c1tpXV06IGtleSxcbiAgICAgICAgICAgICAgW3N1YlJvd3NLZXldOiB2YWx1ZSxcbiAgICAgICAgICAgICAgW25lc3RpbmdMZXZlbEtleV06IGksXG4gICAgICAgICAgICAgIFtncm91cGVkQnlQaXZvdEtleV06IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAvLyBSZWN1cnNlIGludG8gdGhlIHN1YlJvd3NcbiAgICAgICAgICBncm91cGVkUm93cyA9IGdyb3VwZWRSb3dzLm1hcChyb3dHcm91cCA9PiB7XG4gICAgICAgICAgICBsZXQgc3ViUm93cyA9IGdyb3VwUmVjdXJzaXZlbHkocm93R3JvdXBbc3ViUm93c0tleV0sIGtleXMsIGkgKyAxKVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4ucm93R3JvdXAsXG4gICAgICAgICAgICAgIFtzdWJSb3dzS2V5XTogc3ViUm93cyxcbiAgICAgICAgICAgICAgW2FnZ3JlZ2F0ZWRLZXldOiB0cnVlLFxuICAgICAgICAgICAgICAuLi5hZ2dyZWdhdGUoc3ViUm93cyksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gZ3JvdXBlZFJvd3NcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZERhdGEgPSBncm91cFJlY3Vyc2l2ZWx5KHJlc29sdmVkRGF0YSwgcGl2b3RCeSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubmV3U3RhdGUsXG4gICAgICAgIHJlc29sdmVkRGF0YSxcbiAgICAgICAgYWxsVmlzaWJsZUNvbHVtbnMsXG4gICAgICAgIGhlYWRlckdyb3VwcyxcbiAgICAgICAgYWxsRGVjb3JhdGVkQ29sdW1ucyxcbiAgICAgICAgaGFzSGVhZGVyR3JvdXBzLFxuICAgICAgfVxuICAgIH1cblxuICAgIGdldFNvcnRlZERhdGEgKHJlc29sdmVkU3RhdGUpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWFudWFsLFxuICAgICAgICBzb3J0ZWQsXG4gICAgICAgIGZpbHRlcmVkLFxuICAgICAgICBkZWZhdWx0RmlsdGVyTWV0aG9kLFxuICAgICAgICByZXNvbHZlZERhdGEsXG4gICAgICAgIGFsbFZpc2libGVDb2x1bW5zLFxuICAgICAgICBhbGxEZWNvcmF0ZWRDb2x1bW5zLFxuICAgICAgfSA9IHJlc29sdmVkU3RhdGVcblxuICAgICAgY29uc3Qgc29ydE1ldGhvZHNCeUNvbHVtbklEID0ge31cblxuICAgICAgYWxsRGVjb3JhdGVkQ29sdW1ucy5maWx0ZXIoY29sID0+IGNvbC5zb3J0TWV0aG9kKS5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgIHNvcnRNZXRob2RzQnlDb2x1bW5JRFtjb2wuaWRdID0gY29sLnNvcnRNZXRob2RcbiAgICAgIH0pXG5cbiAgICAgIC8vIFJlc29sdmUgdGhlIGRhdGEgZnJvbSBlaXRoZXIgbWFudWFsIGRhdGEgb3Igc29ydGVkIGRhdGFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNvcnRlZERhdGE6IG1hbnVhbFxuICAgICAgICAgID8gcmVzb2x2ZWREYXRhXG4gICAgICAgICAgOiB0aGlzLnNvcnREYXRhKFxuICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRhKFxuICAgICAgICAgICAgICByZXNvbHZlZERhdGEsXG4gICAgICAgICAgICAgIGZpbHRlcmVkLFxuICAgICAgICAgICAgICBkZWZhdWx0RmlsdGVyTWV0aG9kLFxuICAgICAgICAgICAgICBhbGxWaXNpYmxlQ29sdW1uc1xuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHNvcnRlZCxcbiAgICAgICAgICAgIHNvcnRNZXRob2RzQnlDb2x1bW5JRFxuICAgICAgICAgICksXG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlyZUZldGNoRGF0YSAoKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRmV0Y2hEYXRhKHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpLCB0aGlzKVxuICAgIH1cblxuICAgIGdldFByb3BPclN0YXRlIChrZXkpIHtcbiAgICAgIHJldHVybiBfLmdldEZpcnN0RGVmaW5lZCh0aGlzLnByb3BzW2tleV0sIHRoaXMuc3RhdGVba2V5XSlcbiAgICB9XG5cbiAgICBnZXRTdGF0ZU9yUHJvcCAoa2V5KSB7XG4gICAgICByZXR1cm4gXy5nZXRGaXJzdERlZmluZWQodGhpcy5zdGF0ZVtrZXldLCB0aGlzLnByb3BzW2tleV0pXG4gICAgfVxuXG4gICAgZmlsdGVyRGF0YSAoZGF0YSwgZmlsdGVyZWQsIGRlZmF1bHRGaWx0ZXJNZXRob2QsIGFsbFZpc2libGVDb2x1bW5zKSB7XG4gICAgICBsZXQgZmlsdGVyZWREYXRhID0gZGF0YVxuXG4gICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoKSB7XG4gICAgICAgIGZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkLnJlZHVjZSgoZmlsdGVyZWRTb0ZhciwgbmV4dEZpbHRlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IGFsbFZpc2libGVDb2x1bW5zLmZpbmQoeCA9PiB4LmlkID09PSBuZXh0RmlsdGVyLmlkKVxuXG4gICAgICAgICAgLy8gRG9uJ3QgZmlsdGVyIGhpZGRlbiBjb2x1bW5zIG9yIGNvbHVtbnMgdGhhdCBoYXZlIGhhZCB0aGVpciBmaWx0ZXJzIGRpc2FibGVkXG4gICAgICAgICAgaWYgKCFjb2x1bW4gfHwgY29sdW1uLmZpbHRlcmFibGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRTb0ZhclxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGZpbHRlck1ldGhvZCA9IGNvbHVtbi5maWx0ZXJNZXRob2QgfHwgZGVmYXVsdEZpbHRlck1ldGhvZFxuXG4gICAgICAgICAgLy8gSWYgJ2ZpbHRlckFsbCcgaXMgc2V0IHRvIHRydWUsIHBhc3MgdGhlIGVudGlyZSBkYXRhc2V0IHRvIHRoZSBmaWx0ZXIgbWV0aG9kXG4gICAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXJBbGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJNZXRob2QobmV4dEZpbHRlciwgZmlsdGVyZWRTb0ZhciwgY29sdW1uKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRTb0Zhci5maWx0ZXIocm93ID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlck1ldGhvZChuZXh0RmlsdGVyLCByb3csIGNvbHVtbilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LCBmaWx0ZXJlZERhdGEpXG5cbiAgICAgICAgLy8gQXBwbHkgdGhlIGZpbHRlciB0byB0aGUgc3Vicm93cyBpZiB3ZSBhcmUgcGl2b3RpbmcsIGFuZCB0aGVuXG4gICAgICAgIC8vIGZpbHRlciBhbnkgcm93cyB3aXRob3V0IHN1YmNvbHVtbnMgYmVjYXVzZSBpdCB3b3VsZCBiZSBzdHJhbmdlIHRvIHNob3dcbiAgICAgICAgZmlsdGVyZWREYXRhID0gZmlsdGVyZWREYXRhXG4gICAgICAgICAgLm1hcChyb3cgPT4ge1xuICAgICAgICAgICAgaWYgKCFyb3dbdGhpcy5wcm9wcy5zdWJSb3dzS2V5XSkge1xuICAgICAgICAgICAgICByZXR1cm4gcm93XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5yb3csXG4gICAgICAgICAgICAgIFt0aGlzLnByb3BzLnN1YlJvd3NLZXldOiB0aGlzLmZpbHRlckRhdGEoXG4gICAgICAgICAgICAgICAgcm93W3RoaXMucHJvcHMuc3ViUm93c0tleV0sXG4gICAgICAgICAgICAgICAgZmlsdGVyZWQsXG4gICAgICAgICAgICAgICAgZGVmYXVsdEZpbHRlck1ldGhvZCxcbiAgICAgICAgICAgICAgICBhbGxWaXNpYmxlQ29sdW1uc1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbHRlcihyb3cgPT4ge1xuICAgICAgICAgICAgaWYgKCFyb3dbdGhpcy5wcm9wcy5zdWJSb3dzS2V5XSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvd1t0aGlzLnByb3BzLnN1YlJvd3NLZXldLmxlbmd0aCA+IDBcbiAgICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmlsdGVyZWREYXRhXG4gICAgfVxuXG4gICAgc29ydERhdGEgKGRhdGEsIHNvcnRlZCwgc29ydE1ldGhvZHNCeUNvbHVtbklEID0ge30pIHtcbiAgICAgIGlmICghc29ydGVkLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzb3J0ZWREYXRhID0gKHRoaXMucHJvcHMub3JkZXJCeU1ldGhvZCB8fCBfLm9yZGVyQnkpKFxuICAgICAgICBkYXRhLFxuICAgICAgICBzb3J0ZWQubWFwKHNvcnQgPT4ge1xuICAgICAgICAgIC8vIFN1cHBvcnQgY3VzdG9tIHNvcnRpbmcgbWV0aG9kcyBmb3IgZWFjaCBjb2x1bW5cbiAgICAgICAgICBpZiAoc29ydE1ldGhvZHNCeUNvbHVtbklEW3NvcnQuaWRdKSB7XG4gICAgICAgICAgICByZXR1cm4gKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNvcnRNZXRob2RzQnlDb2x1bW5JRFtzb3J0LmlkXShhW3NvcnQuaWRdLCBiW3NvcnQuaWRdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRlZmF1bHRTb3J0TWV0aG9kKGFbc29ydC5pZF0sIGJbc29ydC5pZF0pXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgc29ydGVkLm1hcChkID0+ICFkLmRlc2MpLFxuICAgICAgICB0aGlzLnByb3BzLmluZGV4S2V5XG4gICAgICApXG5cbiAgICAgIHNvcnRlZERhdGEuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICBpZiAoIXJvd1t0aGlzLnByb3BzLnN1YlJvd3NLZXldKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgcm93W3RoaXMucHJvcHMuc3ViUm93c0tleV0gPSB0aGlzLnNvcnREYXRhKFxuICAgICAgICAgIHJvd1t0aGlzLnByb3BzLnN1YlJvd3NLZXldLFxuICAgICAgICAgIHNvcnRlZCxcbiAgICAgICAgICBzb3J0TWV0aG9kc0J5Q29sdW1uSURcbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHNvcnRlZERhdGFcbiAgICB9XG5cbiAgICBnZXRNaW5Sb3dzICgpIHtcbiAgICAgIHJldHVybiBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgdGhpcy5wcm9wcy5taW5Sb3dzLFxuICAgICAgICB0aGlzLmdldFN0YXRlT3JQcm9wKCdwYWdlU2l6ZScpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVXNlciBhY3Rpb25zXG4gICAgb25QYWdlQ2hhbmdlIChwYWdlKSB7XG4gICAgICBjb25zdCB7IG9uUGFnZUNoYW5nZSwgY29sbGFwc2VPblBhZ2VDaGFuZ2UgfSA9IHRoaXMucHJvcHNcblxuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7IHBhZ2UgfVxuICAgICAgaWYgKGNvbGxhcHNlT25QYWdlQ2hhbmdlKSB7XG4gICAgICAgIG5ld1N0YXRlLmV4cGFuZGVkID0ge31cbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShuZXdTdGF0ZSwgKCkgPT4ge1xuICAgICAgICBvblBhZ2VDaGFuZ2UgJiYgb25QYWdlQ2hhbmdlKHBhZ2UpXG4gICAgICAgIHRoaXMuZmlyZUZldGNoRGF0YSgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIG9uUGFnZVNpemVDaGFuZ2UgKG5ld1BhZ2VTaXplKSB7XG4gICAgICBjb25zdCB7IG9uUGFnZVNpemVDaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICAgIGNvbnN0IHsgcGFnZVNpemUsIHBhZ2UgfSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpXG5cbiAgICAgIC8vIE5vcm1hbGl6ZSB0aGUgcGFnZSB0byBkaXNwbGF5XG4gICAgICBjb25zdCBjdXJyZW50Um93ID0gcGFnZVNpemUgKiBwYWdlXG4gICAgICBjb25zdCBuZXdQYWdlID0gTWF0aC5mbG9vcihjdXJyZW50Um93IC8gbmV3UGFnZVNpemUpXG5cbiAgICAgIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VTaXplOiBuZXdQYWdlU2l6ZSxcbiAgICAgICAgICBwYWdlOiBuZXdQYWdlLFxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgb25QYWdlU2l6ZUNoYW5nZSAmJiBvblBhZ2VTaXplQ2hhbmdlKG5ld1BhZ2VTaXplLCBuZXdQYWdlKVxuICAgICAgICAgIHRoaXMuZmlyZUZldGNoRGF0YSgpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG5cbiAgICBzb3J0Q29sdW1uIChjb2x1bW4sIGFkZGl0aXZlKSB7XG4gICAgICBjb25zdCB7IHNvcnRlZCwgc2tpcE5leHRTb3J0LCBkZWZhdWx0U29ydERlc2MgfSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpXG5cbiAgICAgIGNvbnN0IGZpcnN0U29ydERpcmVjdGlvbiA9IGNvbHVtbi5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdFNvcnREZXNjJylcbiAgICAgICAgPyBjb2x1bW4uZGVmYXVsdFNvcnREZXNjXG4gICAgICAgIDogZGVmYXVsdFNvcnREZXNjXG4gICAgICBjb25zdCBzZWNvbmRTb3J0RGlyZWN0aW9uID0gIWZpcnN0U29ydERpcmVjdGlvblxuXG4gICAgICAvLyB3ZSBjYW4ndCBzdG9wIGV2ZW50IHByb3BhZ2F0aW9uIGZyb20gdGhlIGNvbHVtbiByZXNpemUgbW92ZSBoYW5kbGVyc1xuICAgICAgLy8gYXR0YWNoZWQgdG8gdGhlIGRvY3VtZW50IGJlY2F1c2Ugb2YgcmVhY3QncyBzeW50aGV0aWMgZXZlbnRzXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIHByZXZlbnQgdGhlIHNvcnQgZnVuY3Rpb24gZnJvbSBhY3R1YWxseSBzb3J0aW5nXG4gICAgICAvLyBpZiB3ZSBjbGljayBvbiB0aGUgY29sdW1uIHJlc2l6ZSBlbGVtZW50IHdpdGhpbiBhIGhlYWRlci5cbiAgICAgIGlmIChza2lwTmV4dFNvcnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKHtcbiAgICAgICAgICBza2lwTmV4dFNvcnQ6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBvblNvcnRlZENoYW5nZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICBsZXQgbmV3U29ydGVkID0gXy5jbG9uZShzb3J0ZWQgfHwgW10pLm1hcChkID0+IHtcbiAgICAgICAgZC5kZXNjID0gXy5pc1NvcnRpbmdEZXNjKGQpXG4gICAgICAgIHJldHVybiBkXG4gICAgICB9KVxuICAgICAgaWYgKCFfLmlzQXJyYXkoY29sdW1uKSkge1xuICAgICAgICAvLyBTaW5nbGUtU29ydFxuICAgICAgICBjb25zdCBleGlzdGluZ0luZGV4ID0gbmV3U29ydGVkLmZpbmRJbmRleChkID0+IGQuaWQgPT09IGNvbHVtbi5pZClcbiAgICAgICAgaWYgKGV4aXN0aW5nSW5kZXggPiAtMSkge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gbmV3U29ydGVkW2V4aXN0aW5nSW5kZXhdXG4gICAgICAgICAgaWYgKGV4aXN0aW5nLmRlc2MgPT09IHNlY29uZFNvcnREaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChhZGRpdGl2ZSkge1xuICAgICAgICAgICAgICBuZXdTb3J0ZWQuc3BsaWNlKGV4aXN0aW5nSW5kZXgsIDEpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleGlzdGluZy5kZXNjID0gZmlyc3RTb3J0RGlyZWN0aW9uXG4gICAgICAgICAgICAgIG5ld1NvcnRlZCA9IFtleGlzdGluZ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhpc3RpbmcuZGVzYyA9IHNlY29uZFNvcnREaXJlY3Rpb25cbiAgICAgICAgICAgIGlmICghYWRkaXRpdmUpIHtcbiAgICAgICAgICAgICAgbmV3U29ydGVkID0gW2V4aXN0aW5nXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoYWRkaXRpdmUpIHtcbiAgICAgICAgICAgIG5ld1NvcnRlZC5wdXNoKHtcbiAgICAgICAgICAgICAgaWQ6IGNvbHVtbi5pZCxcbiAgICAgICAgICAgICAgZGVzYzogZmlyc3RTb3J0RGlyZWN0aW9uLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3U29ydGVkID0gW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IGNvbHVtbi5pZCxcbiAgICAgICAgICAgICAgICBkZXNjOiBmaXJzdFNvcnREaXJlY3Rpb24sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNdWx0aS1Tb3J0XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSW5kZXggPSBuZXdTb3J0ZWQuZmluZEluZGV4KGQgPT4gZC5pZCA9PT0gY29sdW1uWzBdLmlkKVxuICAgICAgICAvLyBFeGlzdGluZyBTb3J0ZWQgQ29sdW1uXG4gICAgICAgIGlmIChleGlzdGluZ0luZGV4ID4gLTEpIHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG5ld1NvcnRlZFtleGlzdGluZ0luZGV4XVxuICAgICAgICAgIGlmIChleGlzdGluZy5kZXNjID09PSBzZWNvbmRTb3J0RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoYWRkaXRpdmUpIHtcbiAgICAgICAgICAgICAgbmV3U29ydGVkLnNwbGljZShleGlzdGluZ0luZGV4LCBjb2x1bW4ubGVuZ3RoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sdW1uLmZvckVhY2goKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBuZXdTb3J0ZWRbZXhpc3RpbmdJbmRleCArIGldLmRlc2MgPSBmaXJzdFNvcnREaXJlY3Rpb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sdW1uLmZvckVhY2goKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgbmV3U29ydGVkW2V4aXN0aW5nSW5kZXggKyBpXS5kZXNjID0gc2Vjb25kU29ydERpcmVjdGlvblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFhZGRpdGl2ZSkge1xuICAgICAgICAgICAgbmV3U29ydGVkID0gbmV3U29ydGVkLnNsaWNlKGV4aXN0aW5nSW5kZXgsIGNvbHVtbi5sZW5ndGgpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5ldyBTb3J0IENvbHVtblxuICAgICAgICAgIGlmIChhZGRpdGl2ZSkge1xuICAgICAgICAgICAgbmV3U29ydGVkID0gbmV3U29ydGVkLmNvbmNhdChcbiAgICAgICAgICAgICAgY29sdW1uLm1hcChkID0+ICh7XG4gICAgICAgICAgICAgICAgaWQ6IGQuaWQsXG4gICAgICAgICAgICAgICAgZGVzYzogZmlyc3RTb3J0RGlyZWN0aW9uLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3U29ydGVkID0gY29sdW1uLm1hcChkID0+ICh7XG4gICAgICAgICAgICAgIGlkOiBkLmlkLFxuICAgICAgICAgICAgICBkZXNjOiBmaXJzdFNvcnREaXJlY3Rpb24sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZTpcbiAgICAgICAgICAgICghc29ydGVkLmxlbmd0aCAmJiBuZXdTb3J0ZWQubGVuZ3RoKSB8fCAhYWRkaXRpdmVcbiAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5wYWdlLFxuICAgICAgICAgIHNvcnRlZDogbmV3U29ydGVkLFxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgb25Tb3J0ZWRDaGFuZ2UgJiYgb25Tb3J0ZWRDaGFuZ2UobmV3U29ydGVkLCBjb2x1bW4sIGFkZGl0aXZlKVxuICAgICAgICAgIHRoaXMuZmlyZUZldGNoRGF0YSgpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG5cbiAgICBmaWx0ZXJDb2x1bW4gKGNvbHVtbiwgdmFsdWUpIHtcbiAgICAgIGNvbnN0IHsgZmlsdGVyZWQgfSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpXG4gICAgICBjb25zdCB7IG9uRmlsdGVyZWRDaGFuZ2UgfSA9IHRoaXMucHJvcHNcblxuICAgICAgLy8gUmVtb3ZlIG9sZCBmaWx0ZXIgZmlyc3QgaWYgaXQgZXhpc3RzXG4gICAgICBjb25zdCBuZXdGaWx0ZXJpbmcgPSAoZmlsdGVyZWQgfHwgW10pLmZpbHRlcih4ID0+IHtcbiAgICAgICAgaWYgKHguaWQgIT09IGNvbHVtbi5pZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgbmV3RmlsdGVyaW5nLnB1c2goe1xuICAgICAgICAgIGlkOiBjb2x1bW4uaWQsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlV2l0aERhdGEoXG4gICAgICAgIHtcbiAgICAgICAgICBmaWx0ZXJlZDogbmV3RmlsdGVyaW5nLFxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgb25GaWx0ZXJlZENoYW5nZSAmJiBvbkZpbHRlcmVkQ2hhbmdlKG5ld0ZpbHRlcmluZywgY29sdW1uLCB2YWx1ZSlcbiAgICAgICAgICB0aGlzLmZpcmVGZXRjaERhdGEoKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuXG4gICAgcmVzaXplQ29sdW1uU3RhcnQgKGNvbHVtbiwgZXZlbnQsIGlzVG91Y2gpIHtcbiAgICAgIGNvbnN0IHBhcmVudFdpZHRoID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgLndpZHRoXG5cbiAgICAgIGxldCBwYWdlWFxuICAgICAgaWYgKGlzVG91Y2gpIHtcbiAgICAgICAgcGFnZVggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFnZVggPSBldmVudC5wYWdlWFxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlV2l0aERhdGEoXG4gICAgICAgIHtcbiAgICAgICAgICBjdXJyZW50bHlSZXNpemluZzoge1xuICAgICAgICAgICAgaWQ6IGNvbHVtbi5pZCxcbiAgICAgICAgICAgIHN0YXJ0WDogcGFnZVgsXG4gICAgICAgICAgICBwYXJlbnRXaWR0aDogcGFyZW50V2lkdGgsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlmIChpc1RvdWNoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZylcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMucmVzaXplQ29sdW1uRW5kKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZylcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXNpemVDb2x1bW5FbmQgKGV2ZW50KSB7XG4gICAgICBsZXQgaXNUb3VjaCA9IGV2ZW50LnR5cGUgPT09ICd0b3VjaGVuZCcgfHwgZXZlbnQudHlwZSA9PT0gJ3RvdWNoY2FuY2VsJ1xuXG4gICAgICBpZiAoaXNUb3VjaCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZylcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXRzIGEgdG91Y2ggZXZlbnQgY2xlYXIgdGhlIG1vdXNlIG9uZSdzIGFzIHdlbGwgYmVjYXVzZSBzb21ldGltZXNcbiAgICAgIC8vIHRoZSBtb3VzZURvd24gZXZlbnQgZ2V0cyBjYWxsZWQgYXMgd2VsbCwgYnV0IHRoZSBtb3VzZVVwIGV2ZW50IGRvZXNuJ3RcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMucmVzaXplQ29sdW1uTW92aW5nKVxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMucmVzaXplQ29sdW1uRW5kKVxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMucmVzaXplQ29sdW1uRW5kKVxuXG4gICAgICAvLyBUaGUgdG91Y2ggZXZlbnRzIGRvbid0IHByb3BhZ2F0ZSB1cCB0byB0aGUgc29ydGluZydzIG9uTW91c2VEb3duIGV2ZW50IHNvXG4gICAgICAvLyBubyBuZWVkIHRvIHByZXZlbnQgaXQgZnJvbSBoYXBwZW5pbmcgb3IgZWxzZSB0aGUgZmlyc3QgY2xpY2sgYWZ0ZXIgYSB0b3VjaFxuICAgICAgLy8gZXZlbnQgcmVzaXplIHdpbGwgbm90IHNvcnQgdGhlIGNvbHVtbi5cbiAgICAgIGlmICghaXNUb3VjaCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlV2l0aERhdGEoe1xuICAgICAgICAgIHNraXBOZXh0U29ydDogdHJ1ZSxcbiAgICAgICAgICBjdXJyZW50bHlSZXNpemluZzogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVzaXplQ29sdW1uTW92aW5nIChldmVudCkge1xuICAgICAgY29uc3QgeyBvblJlc2l6ZWRDaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICAgIGNvbnN0IHsgcmVzaXplZCwgY3VycmVudGx5UmVzaXppbmcgfSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpXG5cbiAgICAgIC8vIERlbGV0ZSBvbGQgdmFsdWVcbiAgICAgIGNvbnN0IG5ld1Jlc2l6ZWQgPSByZXNpemVkLmZpbHRlcih4ID0+IHguaWQgIT09IGN1cnJlbnRseVJlc2l6aW5nLmlkKVxuXG4gICAgICBsZXQgcGFnZVhcblxuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaG1vdmUnKSB7XG4gICAgICAgIHBhZ2VYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVhcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlbW92ZScpIHtcbiAgICAgICAgcGFnZVggPSBldmVudC5wYWdlWFxuICAgICAgfVxuXG4gICAgICAvLyBTZXQgdGhlIG1pbiBzaXplIHRvIDEwIHRvIGFjY291bnQgZm9yIG1hcmdpbiBhbmQgYm9yZGVyIG9yIGVsc2UgdGhlIGdyb3VwIGhlYWRlcnMgZG9uJ3QgbGluZSB1cCBjb3JyZWN0bHlcbiAgICAgIGNvbnN0IG5ld1dpZHRoID0gTWF0aC5tYXgoXG4gICAgICAgIGN1cnJlbnRseVJlc2l6aW5nLnBhcmVudFdpZHRoICsgcGFnZVggLSBjdXJyZW50bHlSZXNpemluZy5zdGFydFgsXG4gICAgICAgIDExXG4gICAgICApXG5cbiAgICAgIG5ld1Jlc2l6ZWQucHVzaCh7XG4gICAgICAgIGlkOiBjdXJyZW50bHlSZXNpemluZy5pZCxcbiAgICAgICAgdmFsdWU6IG5ld1dpZHRoLFxuICAgICAgfSlcblxuICAgICAgdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKFxuICAgICAgICB7XG4gICAgICAgICAgcmVzaXplZDogbmV3UmVzaXplZCxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIG9uUmVzaXplZENoYW5nZSAmJiBvblJlc2l6ZWRDaGFuZ2UobmV3UmVzaXplZCwgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIH1cbiJdfQ==