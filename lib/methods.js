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

        console.log(visibleColumns);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRob2RzLmpzIl0sIm5hbWVzIjpbInByb3BzIiwic3RhdGUiLCJyZXNvbHZlZFN0YXRlIiwiY29tcGFjdE9iamVjdCIsIm5ld1N0YXRlIiwiY29sdW1ucyIsInBpdm90QnkiLCJkYXRhIiwicGl2b3RJREtleSIsInBpdm90VmFsS2V5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJuZXN0aW5nTGV2ZWxLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJTdWJDb21wb25lbnQiLCJoYXNIZWFkZXJHcm91cHMiLCJwdXNoIiwiSGVhZGVyIiwiaWQiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJmb3JFYWNoIiwiY29sdW1uIiwiY29sdW1uc1dpdGhFeHBhbmRlciIsImV4cGFuZGVyQ29sdW1uIiwiZmluZCIsImNvbCIsImV4cGFuZGVyIiwic29tZSIsImNvbDIiLCJtYWtlRGVjb3JhdGVkQ29sdW1uIiwiZGNvbCIsImV4cGFuZGVyRGVmYXVsdHMiLCJhY2Nlc3NvciIsImFjY2Vzc29yU3RyaW5nIiwiZ2V0Iiwicm93IiwiY29uc29sZSIsIndhcm4iLCJFcnJvciIsInVuZGVmaW5lZCIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJkZWNvcmF0ZUFuZEFkZFRvQWxsIiwiZGVjb3JhdGVkQ29sdW1uIiwiYWxsRGVjb3JhdGVkQ29sdW1ucyIsImRlY29yYXRlZENvbHVtbnMiLCJtYXAiLCJpIiwidmlzaWJsZUNvbHVtbnMiLCJzbGljZSIsImFsbFZpc2libGVDb2x1bW5zIiwidmlzaWJsZVN1YkNvbHVtbnMiLCJmaWx0ZXIiLCJpbmRleE9mIiwiZCIsImdldEZpcnN0RGVmaW5lZCIsInNob3ciLCJsZW5ndGgiLCJwaXZvdEluZGV4IiwiZmluZEluZGV4IiwicGl2b3QiLCJwaXZvdENvbHVtbnMiLCJmb3VuZCIsInBpdm90SUQiLCJwaXZvdENvbHVtbkdyb3VwIiwiaGVhZGVyIiwicGl2b3REZWZhdWx0cyIsInBpdm90ZWQiLCJzcGxpY2UiLCJ1bnNoaWZ0IiwibG9nIiwiaGVhZGVyR3JvdXBzIiwiY3VycmVudFNwYW4iLCJhZGRIZWFkZXIiLCJjb25jYXQiLCJhY2Nlc3NSb3ciLCJsZXZlbCIsInJlc29sdmVkRGF0YSIsImFnZ3JlZ2F0ZSIsImFnZ3JlZ2F0aW9uVmFsdWVzIiwiYWdncmVnYXRpbmdDb2x1bW5zIiwidmFsdWVzIiwicm93cyIsImdyb3VwUmVjdXJzaXZlbHkiLCJrZXlzIiwiZ3JvdXBlZFJvd3MiLCJPYmplY3QiLCJlbnRyaWVzIiwiZ3JvdXBCeSIsImtleSIsInZhbHVlIiwic3ViUm93cyIsInJvd0dyb3VwIiwibWFudWFsIiwic29ydGVkIiwiZmlsdGVyZWQiLCJkZWZhdWx0RmlsdGVyTWV0aG9kIiwic29ydE1ldGhvZHNCeUNvbHVtbklEIiwic29ydE1ldGhvZCIsInNvcnRlZERhdGEiLCJzb3J0RGF0YSIsImZpbHRlckRhdGEiLCJvbkZldGNoRGF0YSIsImdldFJlc29sdmVkU3RhdGUiLCJmaWx0ZXJlZERhdGEiLCJyZWR1Y2UiLCJmaWx0ZXJlZFNvRmFyIiwibmV4dEZpbHRlciIsIngiLCJmaWx0ZXJNZXRob2QiLCJmaWx0ZXJBbGwiLCJvcmRlckJ5TWV0aG9kIiwib3JkZXJCeSIsInNvcnQiLCJhIiwiYiIsImRlZmF1bHRTb3J0TWV0aG9kIiwiZGVzYyIsIm1pblJvd3MiLCJnZXRTdGF0ZU9yUHJvcCIsInBhZ2UiLCJvblBhZ2VDaGFuZ2UiLCJjb2xsYXBzZU9uUGFnZUNoYW5nZSIsImV4cGFuZGVkIiwic2V0U3RhdGVXaXRoRGF0YSIsImZpcmVGZXRjaERhdGEiLCJuZXdQYWdlU2l6ZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJwYWdlU2l6ZSIsImN1cnJlbnRSb3ciLCJuZXdQYWdlIiwiTWF0aCIsImZsb29yIiwiYWRkaXRpdmUiLCJza2lwTmV4dFNvcnQiLCJkZWZhdWx0U29ydERlc2MiLCJmaXJzdFNvcnREaXJlY3Rpb24iLCJoYXNPd25Qcm9wZXJ0eSIsInNlY29uZFNvcnREaXJlY3Rpb24iLCJvblNvcnRlZENoYW5nZSIsIm5ld1NvcnRlZCIsImNsb25lIiwiaXNTb3J0aW5nRGVzYyIsImlzQXJyYXkiLCJleGlzdGluZ0luZGV4IiwiZXhpc3RpbmciLCJvbkZpbHRlcmVkQ2hhbmdlIiwibmV3RmlsdGVyaW5nIiwiZXZlbnQiLCJpc1RvdWNoIiwicGFyZW50V2lkdGgiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJwYWdlWCIsImNoYW5nZWRUb3VjaGVzIiwiY3VycmVudGx5UmVzaXppbmciLCJzdGFydFgiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemVDb2x1bW5Nb3ZpbmciLCJyZXNpemVDb2x1bW5FbmQiLCJ0eXBlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uUmVzaXplZENoYW5nZSIsInJlc2l6ZWQiLCJuZXdSZXNpemVkIiwibmV3V2lkdGgiLCJtYXgiLCJCYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBRWU7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsdUNBRU9BLEtBRlAsRUFFY0MsS0FGZCxFQUVxQjtBQUM5QixZQUFNQyw2QkFDRCxnQkFBRUMsYUFBRixDQUFnQixLQUFLRixLQUFyQixDQURDLEVBRUQsZ0JBQUVFLGFBQUYsQ0FBZ0IsS0FBS0gsS0FBckIsQ0FGQyxFQUdELGdCQUFFRyxhQUFGLENBQWdCRixLQUFoQixDQUhDLEVBSUQsZ0JBQUVFLGFBQUYsQ0FBZ0JILEtBQWhCLENBSkMsQ0FBTjtBQU1BLGVBQU9FLGFBQVA7QUFDRDtBQVZVO0FBQUE7QUFBQSxtQ0FZR0UsUUFaSCxFQVlhO0FBQUE7O0FBQUEsWUFFcEJDLE9BRm9CLEdBY2xCRCxRQWRrQixDQUVwQkMsT0FGb0I7QUFBQSxnQ0FjbEJELFFBZGtCLENBR3BCRSxPQUhvQjtBQUFBLFlB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QixJQUREO0FBQUEsQyIsImZpbGUiOiJtZXRob2RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgQmFzZSA9PlxuICBjbGFzcyBleHRlbmRzIEJhc2Uge1xuICAgIGdldFJlc29sdmVkU3RhdGUgKHByb3BzLCBzdGF0ZSkge1xuICAgICAgY29uc3QgcmVzb2x2ZWRTdGF0ZSA9IHtcbiAgICAgICAgLi4uXy5jb21wYWN0T2JqZWN0KHRoaXMuc3RhdGUpLFxuICAgICAgICAuLi5fLmNvbXBhY3RPYmplY3QodGhpcy5wcm9wcyksXG4gICAgICAgIC4uLl8uY29tcGFjdE9iamVjdChzdGF0ZSksXG4gICAgICAgIC4uLl8uY29tcGFjdE9iamVjdChwcm9wcyksXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzb2x2ZWRTdGF0ZVxuICAgIH1cblxuICAgIGdldERhdGFNb2RlbCAobmV3U3RhdGUpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29sdW1ucyxcbiAgICAgICAgcGl2b3RCeSA9IFtdLFxuICAgICAgICBkYXRhLFxuICAgICAgICBwaXZvdElES2V5LFxuICAgICAgICBwaXZvdFZhbEtleSxcbiAgICAgICAgc3ViUm93c0tleSxcbiAgICAgICAgYWdncmVnYXRlZEtleSxcbiAgICAgICAgbmVzdGluZ0xldmVsS2V5LFxuICAgICAgICBvcmlnaW5hbEtleSxcbiAgICAgICAgaW5kZXhLZXksXG4gICAgICAgIGdyb3VwZWRCeVBpdm90S2V5LFxuICAgICAgICBTdWJDb21wb25lbnQsXG4gICAgICB9ID0gbmV3U3RhdGVcblxuICAgICAgLy8gRGV0ZXJtaW5lIEhlYWRlciBHcm91cHNcbiAgICAgIGxldCBoYXNIZWFkZXJHcm91cHMgPSBmYWxzZVxuXG4gICAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgICBIZWFkZXI6ICcnLFxuICAgICAgICBpZDogJ0BAZHVtbXknLFxuICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgIGZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgfSlcblxuICAgICAgY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4uY29sdW1ucykge1xuICAgICAgICAgIGhhc0hlYWRlckdyb3VwcyA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgbGV0IGNvbHVtbnNXaXRoRXhwYW5kZXIgPSBbLi4uY29sdW1uc11cblxuICAgICAgbGV0IGV4cGFuZGVyQ29sdW1uID0gY29sdW1ucy5maW5kKFxuICAgICAgICBjb2wgPT5cbiAgICAgICAgICBjb2wuZXhwYW5kZXIgfHxcbiAgICAgICAgICAoY29sLmNvbHVtbnMgJiYgY29sLmNvbHVtbnMuc29tZShjb2wyID0+IGNvbDIuZXhwYW5kZXIpKVxuICAgICAgKVxuICAgICAgLy8gVGhlIGFjdHVhbCBleHBhbmRlciBtaWdodCBiZSBpbiB0aGUgY29sdW1ucyBmaWVsZCBvZiBhIGdyb3VwIGNvbHVtblxuICAgICAgaWYgKGV4cGFuZGVyQ29sdW1uICYmICFleHBhbmRlckNvbHVtbi5leHBhbmRlcikge1xuICAgICAgICBleHBhbmRlckNvbHVtbiA9IGV4cGFuZGVyQ29sdW1uLmNvbHVtbnMuZmluZChjb2wgPT4gY29sLmV4cGFuZGVyKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB3ZSBoYXZlIFN1YkNvbXBvbmVudCdzIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHdlIGhhdmUgYW4gZXhwYW5kZXIgY29sdW1uXG4gICAgICBpZiAoU3ViQ29tcG9uZW50ICYmICFleHBhbmRlckNvbHVtbikge1xuICAgICAgICBleHBhbmRlckNvbHVtbiA9IHsgZXhwYW5kZXI6IHRydWUgfVxuICAgICAgICBjb2x1bW5zV2l0aEV4cGFuZGVyID0gW2V4cGFuZGVyQ29sdW1uLCAuLi5jb2x1bW5zV2l0aEV4cGFuZGVyXVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtYWtlRGVjb3JhdGVkQ29sdW1uID0gY29sdW1uID0+IHtcbiAgICAgICAgbGV0IGRjb2xcbiAgICAgICAgaWYgKGNvbHVtbi5leHBhbmRlcikge1xuICAgICAgICAgIGRjb2wgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLmNvbHVtbixcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuZXhwYW5kZXJEZWZhdWx0cyxcbiAgICAgICAgICAgIC4uLmNvbHVtbixcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGNvbCA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuY29sdW1uLFxuICAgICAgICAgICAgLi4uY29sdW1uLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZGNvbC5hY2Nlc3NvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBkY29sLmlkID0gZGNvbC5pZCB8fCBkY29sLmFjY2Vzc29yXG4gICAgICAgICAgY29uc3QgYWNjZXNzb3JTdHJpbmcgPSBkY29sLmFjY2Vzc29yXG4gICAgICAgICAgZGNvbC5hY2Nlc3NvciA9IHJvdyA9PiBfLmdldChyb3csIGFjY2Vzc29yU3RyaW5nKVxuICAgICAgICAgIHJldHVybiBkY29sXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGNvbC5hY2Nlc3NvciAmJiAhZGNvbC5pZCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihkY29sKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdBIGNvbHVtbiBpZCBpcyByZXF1aXJlZCBpZiB1c2luZyBhIG5vbi1zdHJpbmcgYWNjZXNzb3IgZm9yIGNvbHVtbiBhYm92ZS4nXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkY29sLmFjY2Vzc29yKSB7XG4gICAgICAgICAgZGNvbC5hY2Nlc3NvciA9IGQgPT4gdW5kZWZpbmVkXG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbnN1cmUgbWluV2lkdGggaXMgbm90IGdyZWF0ZXIgdGhhbiBtYXhXaWR0aCBpZiBzZXRcbiAgICAgICAgaWYgKGRjb2wubWF4V2lkdGggPCBkY29sLm1pbldpZHRoKSB7XG4gICAgICAgICAgZGNvbC5taW5XaWR0aCA9IGRjb2wubWF4V2lkdGhcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkY29sXG4gICAgICB9XG5cbiAgICAgIC8vIERlY29yYXRlIHRoZSBjb2x1bW5zXG4gICAgICBjb25zdCBkZWNvcmF0ZUFuZEFkZFRvQWxsID0gY29sID0+IHtcbiAgICAgICAgY29uc3QgZGVjb3JhdGVkQ29sdW1uID0gbWFrZURlY29yYXRlZENvbHVtbihjb2wpXG4gICAgICAgIGFsbERlY29yYXRlZENvbHVtbnMucHVzaChkZWNvcmF0ZWRDb2x1bW4pXG4gICAgICAgIHJldHVybiBkZWNvcmF0ZWRDb2x1bW5cbiAgICAgIH1cbiAgICAgIGxldCBhbGxEZWNvcmF0ZWRDb2x1bW5zID0gW11cbiAgICAgIGNvbnN0IGRlY29yYXRlZENvbHVtbnMgPSBjb2x1bW5zV2l0aEV4cGFuZGVyLm1hcCgoY29sdW1uLCBpKSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4uY29sdW1ucykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jb2x1bW4sXG4gICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW4uY29sdW1ucy5tYXAoZGVjb3JhdGVBbmRBZGRUb0FsbCksXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBkZWNvcmF0ZUFuZEFkZFRvQWxsKGNvbHVtbilcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gQnVpbGQgdGhlIHZpc2libGUgY29sdW1ucywgaGVhZGVycyBhbmQgZmxhdCBjb2x1bW4gbGlzdFxuICAgICAgbGV0IHZpc2libGVDb2x1bW5zID0gZGVjb3JhdGVkQ29sdW1ucy5zbGljZSgpXG4gICAgICBsZXQgYWxsVmlzaWJsZUNvbHVtbnMgPSBbXVxuXG4gICAgICB2aXNpYmxlQ29sdW1ucyA9IHZpc2libGVDb2x1bW5zLm1hcCgoY29sdW1uLCBpKSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4uY29sdW1ucykge1xuICAgICAgICAgIGNvbnN0IHZpc2libGVTdWJDb2x1bW5zID0gY29sdW1uLmNvbHVtbnMuZmlsdGVyKFxuICAgICAgICAgICAgZCA9PlxuICAgICAgICAgICAgICBwaXZvdEJ5LmluZGV4T2YoZC5pZCkgPiAtMVxuICAgICAgICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICAgICAgICA6IF8uZ2V0Rmlyc3REZWZpbmVkKGQuc2hvdywgdHJ1ZSlcbiAgICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNvbHVtbixcbiAgICAgICAgICAgIGNvbHVtbnM6IHZpc2libGVTdWJDb2x1bW5zLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uXG4gICAgICB9KVxuXG4gICAgICB2aXNpYmxlQ29sdW1ucyA9IHZpc2libGVDb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4ge1xuICAgICAgICByZXR1cm4gY29sdW1uLmNvbHVtbnNcbiAgICAgICAgICA/IGNvbHVtbi5jb2x1bW5zLmxlbmd0aFxuICAgICAgICAgIDogcGl2b3RCeS5pbmRleE9mKGNvbHVtbi5pZCkgPiAtMVxuICAgICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgICAgOiBfLmdldEZpcnN0RGVmaW5lZChjb2x1bW4uc2hvdywgdHJ1ZSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIEZpbmQgYW55IGN1c3RvbSBwaXZvdCBsb2NhdGlvblxuICAgICAgY29uc3QgcGl2b3RJbmRleCA9IHZpc2libGVDb2x1bW5zLmZpbmRJbmRleChjb2wgPT4gY29sLnBpdm90KVxuXG4gICAgICAvLyBIYW5kbGUgUGl2b3QgQ29sdW1uc1xuICAgICAgaWYgKHBpdm90QnkubGVuZ3RoKSB7XG4gICAgICAgIC8vIFJldHJpZXZlIHRoZSBwaXZvdCBjb2x1bW5zIGluIHRoZSBjb3JyZWN0IHBpdm90IG9yZGVyXG4gICAgICAgIGNvbnN0IHBpdm90Q29sdW1ucyA9IFtdXG4gICAgICAgIHBpdm90QnkuZm9yRWFjaChwaXZvdElEID0+IHtcbiAgICAgICAgICBjb25zdCBmb3VuZCA9IGFsbERlY29yYXRlZENvbHVtbnMuZmluZChkID0+IGQuaWQgPT09IHBpdm90SUQpXG4gICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICBwaXZvdENvbHVtbnMucHVzaChmb3VuZClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHBpdm90Q29sdW1uR3JvdXAgPSB7XG4gICAgICAgICAgaGVhZGVyOiAoKSA9PiA8c3Ryb25nPkdyb3VwPC9zdHJvbmc+LFxuICAgICAgICAgIGNvbHVtbnM6IHBpdm90Q29sdW1ucy5tYXAoY29sID0+ICh7XG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLnBpdm90RGVmYXVsdHMsXG4gICAgICAgICAgICAuLi5jb2wsXG4gICAgICAgICAgICBwaXZvdGVkOiB0cnVlLFxuICAgICAgICAgIH0pKSxcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBsYWNlIHRoZSBwaXZvdENvbHVtbnMgYmFjayBpbnRvIHRoZSB2aXNpYmxlQ29sdW1uc1xuICAgICAgICBpZiAocGl2b3RJbmRleCA+PSAwKSB7XG4gICAgICAgICAgcGl2b3RDb2x1bW5Hcm91cCA9IHtcbiAgICAgICAgICAgIC4uLnZpc2libGVDb2x1bW5zW3Bpdm90SW5kZXhdLFxuICAgICAgICAgICAgLi4ucGl2b3RDb2x1bW5Hcm91cCxcbiAgICAgICAgICB9XG4gICAgICAgICAgdmlzaWJsZUNvbHVtbnMuc3BsaWNlKHBpdm90SW5kZXgsIDEsIHBpdm90Q29sdW1uR3JvdXApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmlzaWJsZUNvbHVtbnMudW5zaGlmdChwaXZvdENvbHVtbkdyb3VwKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKHZpc2libGVDb2x1bW5zKTtcblxuICAgICAgLy8gQnVpbGQgSGVhZGVyIEdyb3Vwc1xuICAgICAgY29uc3QgaGVhZGVyR3JvdXBzID0gW11cbiAgICAgIGxldCBjdXJyZW50U3BhbiA9IFtdXG5cbiAgICAgIC8vIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdG8gYWRkIGEgaGVhZGVyIGFuZCByZXNldCB0aGUgY3VycmVudFNwYW5cbiAgICAgIGNvbnN0IGFkZEhlYWRlciA9IChjb2x1bW5zLCBjb2x1bW4pID0+IHtcbiAgICAgICAgaGVhZGVyR3JvdXBzLnB1c2goe1xuICAgICAgICAgIC4uLnRoaXMucHJvcHMuY29sdW1uLFxuICAgICAgICAgIC4uLmNvbHVtbixcbiAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLFxuICAgICAgICB9KVxuICAgICAgICBjdXJyZW50U3BhbiA9IFtdXG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGZsYXN0IGxpc3Qgb2YgYWxsVmlzaWJsZUNvbHVtbnMgYW5kIEhlYWRlckdyb3Vwc1xuICAgICAgdmlzaWJsZUNvbHVtbnMuZm9yRWFjaCgoY29sdW1uLCBpKSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4uY29sdW1ucykge1xuICAgICAgICAgIGFsbFZpc2libGVDb2x1bW5zID0gYWxsVmlzaWJsZUNvbHVtbnMuY29uY2F0KGNvbHVtbi5jb2x1bW5zKVxuICAgICAgICAgIGlmIChjdXJyZW50U3Bhbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhZGRIZWFkZXIoY3VycmVudFNwYW4pXG4gICAgICAgICAgfVxuICAgICAgICAgIGFkZEhlYWRlcihjb2x1bW4uY29sdW1ucywgY29sdW1uKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGFsbFZpc2libGVDb2x1bW5zLnB1c2goY29sdW1uKVxuICAgICAgICBjdXJyZW50U3Bhbi5wdXNoKGNvbHVtbilcbiAgICAgIH0pXG4gICAgICBpZiAoaGFzSGVhZGVyR3JvdXBzICYmIGN1cnJlbnRTcGFuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYWRkSGVhZGVyKGN1cnJlbnRTcGFuKVxuICAgICAgfVxuXG4gICAgICAvLyBBY2Nlc3MgdGhlIGRhdGFcbiAgICAgIGNvbnN0IGFjY2Vzc1JvdyA9IChkLCBpLCBsZXZlbCA9IDApID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0ge1xuICAgICAgICAgIFtvcmlnaW5hbEtleV06IGQsXG4gICAgICAgICAgW2luZGV4S2V5XTogaSxcbiAgICAgICAgICBbc3ViUm93c0tleV06IGRbc3ViUm93c0tleV0sXG4gICAgICAgICAgW25lc3RpbmdMZXZlbEtleV06IGxldmVsLFxuICAgICAgICB9XG4gICAgICAgIGFsbERlY29yYXRlZENvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICAgIGlmIChjb2x1bW4uZXhwYW5kZXIpIHJldHVyblxuICAgICAgICAgIHJvd1tjb2x1bW4uaWRdID0gY29sdW1uLmFjY2Vzc29yKGQpXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChyb3dbc3ViUm93c0tleV0pIHtcbiAgICAgICAgICByb3dbc3ViUm93c0tleV0gPSByb3dbc3ViUm93c0tleV0ubWFwKChkLCBpKSA9PlxuICAgICAgICAgICAgYWNjZXNzUm93KGQsIGksIGxldmVsICsgMSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvd1xuICAgICAgfVxuICAgICAgbGV0IHJlc29sdmVkRGF0YSA9IGRhdGEubWFwKChkLCBpKSA9PiBhY2Nlc3NSb3coZCwgaSkpXG5cbiAgICAgIC8vIElmIHBpdm90aW5nLCByZWN1cnNpdmVseSBncm91cCB0aGUgZGF0YVxuICAgICAgY29uc3QgYWdncmVnYXRlID0gcm93cyA9PiB7XG4gICAgICAgIGNvbnN0IGFnZ3JlZ2F0aW9uVmFsdWVzID0ge31cbiAgICAgICAgYWdncmVnYXRpbmdDb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZXMgPSByb3dzLm1hcChkID0+IGRbY29sdW1uLmlkXSlcbiAgICAgICAgICBhZ2dyZWdhdGlvblZhbHVlc1tjb2x1bW4uaWRdID0gY29sdW1uLmFnZ3JlZ2F0ZSh2YWx1ZXMsIHJvd3MpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhZ2dyZWdhdGlvblZhbHVlc1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBNYWtlIGl0IHBvc3NpYmxlIHRvIGZhYnJpY2F0ZSBuZXN0ZWQgcm93cyB3aXRob3V0IHBpdm90aW5nXG4gICAgICBjb25zdCBhZ2dyZWdhdGluZ0NvbHVtbnMgPSBhbGxWaXNpYmxlQ29sdW1ucy5maWx0ZXIoXG4gICAgICAgIGQgPT4gIWQuZXhwYW5kZXIgJiYgZC5hZ2dyZWdhdGVcbiAgICAgIClcbiAgICAgIGlmIChwaXZvdEJ5Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBncm91cFJlY3Vyc2l2ZWx5ID0gKHJvd3MsIGtleXMsIGkgPSAwKSA9PiB7XG4gICAgICAgICAgLy8gVGhpcyBpcyB0aGUgbGFzdCBsZXZlbCwganVzdCByZXR1cm4gdGhlIHJvd3NcbiAgICAgICAgICBpZiAoaSA9PT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiByb3dzXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEdyb3VwIHRoZSByb3dzIHRvZ2V0aGVyIGZvciB0aGlzIGxldmVsXG4gICAgICAgICAgbGV0IGdyb3VwZWRSb3dzID0gT2JqZWN0LmVudHJpZXMoXG4gICAgICAgICAgICBfLmdyb3VwQnkocm93cywga2V5c1tpXSlcbiAgICAgICAgICApLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBbcGl2b3RJREtleV06IGtleXNbaV0sXG4gICAgICAgICAgICAgIFtwaXZvdFZhbEtleV06IGtleSxcbiAgICAgICAgICAgICAgW2tleXNbaV1dOiBrZXksXG4gICAgICAgICAgICAgIFtzdWJSb3dzS2V5XTogdmFsdWUsXG4gICAgICAgICAgICAgIFtuZXN0aW5nTGV2ZWxLZXldOiBpLFxuICAgICAgICAgICAgICBbZ3JvdXBlZEJ5UGl2b3RLZXldOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLy8gUmVjdXJzZSBpbnRvIHRoZSBzdWJSb3dzXG4gICAgICAgICAgZ3JvdXBlZFJvd3MgPSBncm91cGVkUm93cy5tYXAocm93R3JvdXAgPT4ge1xuICAgICAgICAgICAgbGV0IHN1YlJvd3MgPSBncm91cFJlY3Vyc2l2ZWx5KHJvd0dyb3VwW3N1YlJvd3NLZXldLCBrZXlzLCBpICsgMSlcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnJvd0dyb3VwLFxuICAgICAgICAgICAgICBbc3ViUm93c0tleV06IHN1YlJvd3MsXG4gICAgICAgICAgICAgIFthZ2dyZWdhdGVkS2V5XTogdHJ1ZSxcbiAgICAgICAgICAgICAgLi4uYWdncmVnYXRlKHN1YlJvd3MpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGdyb3VwZWRSb3dzXG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWREYXRhID0gZ3JvdXBSZWN1cnNpdmVseShyZXNvbHZlZERhdGEsIHBpdm90QnkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgICByZXNvbHZlZERhdGEsXG4gICAgICAgIGFsbFZpc2libGVDb2x1bW5zLFxuICAgICAgICBoZWFkZXJHcm91cHMsXG4gICAgICAgIGFsbERlY29yYXRlZENvbHVtbnMsXG4gICAgICAgIGhhc0hlYWRlckdyb3VwcyxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTb3J0ZWREYXRhIChyZXNvbHZlZFN0YXRlKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1hbnVhbCxcbiAgICAgICAgc29ydGVkLFxuICAgICAgICBmaWx0ZXJlZCxcbiAgICAgICAgZGVmYXVsdEZpbHRlck1ldGhvZCxcbiAgICAgICAgcmVzb2x2ZWREYXRhLFxuICAgICAgICBhbGxWaXNpYmxlQ29sdW1ucyxcbiAgICAgICAgYWxsRGVjb3JhdGVkQ29sdW1ucyxcbiAgICAgIH0gPSByZXNvbHZlZFN0YXRlXG5cbiAgICAgIGNvbnN0IHNvcnRNZXRob2RzQnlDb2x1bW5JRCA9IHt9XG5cbiAgICAgIGFsbERlY29yYXRlZENvbHVtbnMuZmlsdGVyKGNvbCA9PiBjb2wuc29ydE1ldGhvZCkuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICBzb3J0TWV0aG9kc0J5Q29sdW1uSURbY29sLmlkXSA9IGNvbC5zb3J0TWV0aG9kXG4gICAgICB9KVxuXG4gICAgICAvLyBSZXNvbHZlIHRoZSBkYXRhIGZyb20gZWl0aGVyIG1hbnVhbCBkYXRhIG9yIHNvcnRlZCBkYXRhXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzb3J0ZWREYXRhOiBtYW51YWxcbiAgICAgICAgICA/IHJlc29sdmVkRGF0YVxuICAgICAgICAgIDogdGhpcy5zb3J0RGF0YShcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YShcbiAgICAgICAgICAgICAgcmVzb2x2ZWREYXRhLFxuICAgICAgICAgICAgICBmaWx0ZXJlZCxcbiAgICAgICAgICAgICAgZGVmYXVsdEZpbHRlck1ldGhvZCxcbiAgICAgICAgICAgICAgYWxsVmlzaWJsZUNvbHVtbnNcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzb3J0ZWQsXG4gICAgICAgICAgICBzb3J0TWV0aG9kc0J5Q29sdW1uSURcbiAgICAgICAgICApLFxuICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVGZXRjaERhdGEgKCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkZldGNoRGF0YSh0aGlzLmdldFJlc29sdmVkU3RhdGUoKSwgdGhpcylcbiAgICB9XG5cbiAgICBnZXRQcm9wT3JTdGF0ZSAoa2V5KSB7XG4gICAgICByZXR1cm4gXy5nZXRGaXJzdERlZmluZWQodGhpcy5wcm9wc1trZXldLCB0aGlzLnN0YXRlW2tleV0pXG4gICAgfVxuXG4gICAgZ2V0U3RhdGVPclByb3AgKGtleSkge1xuICAgICAgcmV0dXJuIF8uZ2V0Rmlyc3REZWZpbmVkKHRoaXMuc3RhdGVba2V5XSwgdGhpcy5wcm9wc1trZXldKVxuICAgIH1cblxuICAgIGZpbHRlckRhdGEgKGRhdGEsIGZpbHRlcmVkLCBkZWZhdWx0RmlsdGVyTWV0aG9kLCBhbGxWaXNpYmxlQ29sdW1ucykge1xuICAgICAgbGV0IGZpbHRlcmVkRGF0YSA9IGRhdGFcblxuICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCkge1xuICAgICAgICBmaWx0ZXJlZERhdGEgPSBmaWx0ZXJlZC5yZWR1Y2UoKGZpbHRlcmVkU29GYXIsIG5leHRGaWx0ZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBjb2x1bW4gPSBhbGxWaXNpYmxlQ29sdW1ucy5maW5kKHggPT4geC5pZCA9PT0gbmV4dEZpbHRlci5pZClcblxuICAgICAgICAgIC8vIERvbid0IGZpbHRlciBoaWRkZW4gY29sdW1ucyBvciBjb2x1bW5zIHRoYXQgaGF2ZSBoYWQgdGhlaXIgZmlsdGVycyBkaXNhYmxlZFxuICAgICAgICAgIGlmICghY29sdW1uIHx8IGNvbHVtbi5maWx0ZXJhYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkU29GYXJcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBmaWx0ZXJNZXRob2QgPSBjb2x1bW4uZmlsdGVyTWV0aG9kIHx8IGRlZmF1bHRGaWx0ZXJNZXRob2RcblxuICAgICAgICAgIC8vIElmICdmaWx0ZXJBbGwnIGlzIHNldCB0byB0cnVlLCBwYXNzIHRoZSBlbnRpcmUgZGF0YXNldCB0byB0aGUgZmlsdGVyIG1ldGhvZFxuICAgICAgICAgIGlmIChjb2x1bW4uZmlsdGVyQWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyTWV0aG9kKG5leHRGaWx0ZXIsIGZpbHRlcmVkU29GYXIsIGNvbHVtbilcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkU29GYXIuZmlsdGVyKHJvdyA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJNZXRob2QobmV4dEZpbHRlciwgcm93LCBjb2x1bW4pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgZmlsdGVyZWREYXRhKVxuXG4gICAgICAgIC8vIEFwcGx5IHRoZSBmaWx0ZXIgdG8gdGhlIHN1YnJvd3MgaWYgd2UgYXJlIHBpdm90aW5nLCBhbmQgdGhlblxuICAgICAgICAvLyBmaWx0ZXIgYW55IHJvd3Mgd2l0aG91dCBzdWJjb2x1bW5zIGJlY2F1c2UgaXQgd291bGQgYmUgc3RyYW5nZSB0byBzaG93XG4gICAgICAgIGZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkRGF0YVxuICAgICAgICAgIC5tYXAocm93ID0+IHtcbiAgICAgICAgICAgIGlmICghcm93W3RoaXMucHJvcHMuc3ViUm93c0tleV0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJvd1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4ucm93LFxuICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5zdWJSb3dzS2V5XTogdGhpcy5maWx0ZXJEYXRhKFxuICAgICAgICAgICAgICAgIHJvd1t0aGlzLnByb3BzLnN1YlJvd3NLZXldLFxuICAgICAgICAgICAgICAgIGZpbHRlcmVkLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRGaWx0ZXJNZXRob2QsXG4gICAgICAgICAgICAgICAgYWxsVmlzaWJsZUNvbHVtbnNcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIocm93ID0+IHtcbiAgICAgICAgICAgIGlmICghcm93W3RoaXMucHJvcHMuc3ViUm93c0tleV0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3dbdGhpcy5wcm9wcy5zdWJSb3dzS2V5XS5sZW5ndGggPiAwXG4gICAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbHRlcmVkRGF0YVxuICAgIH1cblxuICAgIHNvcnREYXRhIChkYXRhLCBzb3J0ZWQsIHNvcnRNZXRob2RzQnlDb2x1bW5JRCA9IHt9KSB7XG4gICAgICBpZiAoIXNvcnRlZC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc29ydGVkRGF0YSA9ICh0aGlzLnByb3BzLm9yZGVyQnlNZXRob2QgfHwgXy5vcmRlckJ5KShcbiAgICAgICAgZGF0YSxcbiAgICAgICAgc29ydGVkLm1hcChzb3J0ID0+IHtcbiAgICAgICAgICAvLyBTdXBwb3J0IGN1c3RvbSBzb3J0aW5nIG1ldGhvZHMgZm9yIGVhY2ggY29sdW1uXG4gICAgICAgICAgaWYgKHNvcnRNZXRob2RzQnlDb2x1bW5JRFtzb3J0LmlkXSkge1xuICAgICAgICAgICAgcmV0dXJuIChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBzb3J0TWV0aG9kc0J5Q29sdW1uSURbc29ydC5pZF0oYVtzb3J0LmlkXSwgYltzb3J0LmlkXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kZWZhdWx0U29ydE1ldGhvZChhW3NvcnQuaWRdLCBiW3NvcnQuaWRdKVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHNvcnRlZC5tYXAoZCA9PiAhZC5kZXNjKSxcbiAgICAgICAgdGhpcy5wcm9wcy5pbmRleEtleVxuICAgICAgKVxuXG4gICAgICBzb3J0ZWREYXRhLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgaWYgKCFyb3dbdGhpcy5wcm9wcy5zdWJSb3dzS2V5XSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHJvd1t0aGlzLnByb3BzLnN1YlJvd3NLZXldID0gdGhpcy5zb3J0RGF0YShcbiAgICAgICAgICByb3dbdGhpcy5wcm9wcy5zdWJSb3dzS2V5XSxcbiAgICAgICAgICBzb3J0ZWQsXG4gICAgICAgICAgc29ydE1ldGhvZHNCeUNvbHVtbklEXG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBzb3J0ZWREYXRhXG4gICAgfVxuXG4gICAgZ2V0TWluUm93cyAoKSB7XG4gICAgICByZXR1cm4gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHRoaXMucHJvcHMubWluUm93cyxcbiAgICAgICAgdGhpcy5nZXRTdGF0ZU9yUHJvcCgncGFnZVNpemUnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFVzZXIgYWN0aW9uc1xuICAgIG9uUGFnZUNoYW5nZSAocGFnZSkge1xuICAgICAgY29uc3QgeyBvblBhZ2VDaGFuZ2UsIGNvbGxhcHNlT25QYWdlQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIGNvbnN0IG5ld1N0YXRlID0geyBwYWdlIH1cbiAgICAgIGlmIChjb2xsYXBzZU9uUGFnZUNoYW5nZSkge1xuICAgICAgICBuZXdTdGF0ZS5leHBhbmRlZCA9IHt9XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlV2l0aERhdGEobmV3U3RhdGUsICgpID0+IHtcbiAgICAgICAgb25QYWdlQ2hhbmdlICYmIG9uUGFnZUNoYW5nZShwYWdlKVxuICAgICAgICB0aGlzLmZpcmVGZXRjaERhdGEoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvblBhZ2VTaXplQ2hhbmdlIChuZXdQYWdlU2l6ZSkge1xuICAgICAgY29uc3QgeyBvblBhZ2VTaXplQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG4gICAgICBjb25zdCB7IHBhZ2VTaXplLCBwYWdlIH0gPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxuXG4gICAgICAvLyBOb3JtYWxpemUgdGhlIHBhZ2UgdG8gZGlzcGxheVxuICAgICAgY29uc3QgY3VycmVudFJvdyA9IHBhZ2VTaXplICogcGFnZVxuICAgICAgY29uc3QgbmV3UGFnZSA9IE1hdGguZmxvb3IoY3VycmVudFJvdyAvIG5ld1BhZ2VTaXplKVxuXG4gICAgICB0aGlzLnNldFN0YXRlV2l0aERhdGEoXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlU2l6ZTogbmV3UGFnZVNpemUsXG4gICAgICAgICAgcGFnZTogbmV3UGFnZSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIG9uUGFnZVNpemVDaGFuZ2UgJiYgb25QYWdlU2l6ZUNoYW5nZShuZXdQYWdlU2l6ZSwgbmV3UGFnZSlcbiAgICAgICAgICB0aGlzLmZpcmVGZXRjaERhdGEoKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuXG4gICAgc29ydENvbHVtbiAoY29sdW1uLCBhZGRpdGl2ZSkge1xuICAgICAgY29uc3QgeyBzb3J0ZWQsIHNraXBOZXh0U29ydCwgZGVmYXVsdFNvcnREZXNjIH0gPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxuXG4gICAgICBjb25zdCBmaXJzdFNvcnREaXJlY3Rpb24gPSBjb2x1bW4uaGFzT3duUHJvcGVydHkoJ2RlZmF1bHRTb3J0RGVzYycpXG4gICAgICAgID8gY29sdW1uLmRlZmF1bHRTb3J0RGVzY1xuICAgICAgICA6IGRlZmF1bHRTb3J0RGVzY1xuICAgICAgY29uc3Qgc2Vjb25kU29ydERpcmVjdGlvbiA9ICFmaXJzdFNvcnREaXJlY3Rpb25cblxuICAgICAgLy8gd2UgY2FuJ3Qgc3RvcCBldmVudCBwcm9wYWdhdGlvbiBmcm9tIHRoZSBjb2x1bW4gcmVzaXplIG1vdmUgaGFuZGxlcnNcbiAgICAgIC8vIGF0dGFjaGVkIHRvIHRoZSBkb2N1bWVudCBiZWNhdXNlIG9mIHJlYWN0J3Mgc3ludGhldGljIGV2ZW50c1xuICAgICAgLy8gc28gd2UgaGF2ZSB0byBwcmV2ZW50IHRoZSBzb3J0IGZ1bmN0aW9uIGZyb20gYWN0dWFsbHkgc29ydGluZ1xuICAgICAgLy8gaWYgd2UgY2xpY2sgb24gdGhlIGNvbHVtbiByZXNpemUgZWxlbWVudCB3aXRoaW4gYSBoZWFkZXIuXG4gICAgICBpZiAoc2tpcE5leHRTb3J0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGVXaXRoRGF0YSh7XG4gICAgICAgICAgc2tpcE5leHRTb3J0OiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgb25Tb3J0ZWRDaGFuZ2UgfSA9IHRoaXMucHJvcHNcblxuICAgICAgbGV0IG5ld1NvcnRlZCA9IF8uY2xvbmUoc29ydGVkIHx8IFtdKS5tYXAoZCA9PiB7XG4gICAgICAgIGQuZGVzYyA9IF8uaXNTb3J0aW5nRGVzYyhkKVxuICAgICAgICByZXR1cm4gZFxuICAgICAgfSlcbiAgICAgIGlmICghXy5pc0FycmF5KGNvbHVtbikpIHtcbiAgICAgICAgLy8gU2luZ2xlLVNvcnRcbiAgICAgICAgY29uc3QgZXhpc3RpbmdJbmRleCA9IG5ld1NvcnRlZC5maW5kSW5kZXgoZCA9PiBkLmlkID09PSBjb2x1bW4uaWQpXG4gICAgICAgIGlmIChleGlzdGluZ0luZGV4ID4gLTEpIHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG5ld1NvcnRlZFtleGlzdGluZ0luZGV4XVxuICAgICAgICAgIGlmIChleGlzdGluZy5kZXNjID09PSBzZWNvbmRTb3J0RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoYWRkaXRpdmUpIHtcbiAgICAgICAgICAgICAgbmV3U29ydGVkLnNwbGljZShleGlzdGluZ0luZGV4LCAxKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXhpc3RpbmcuZGVzYyA9IGZpcnN0U29ydERpcmVjdGlvblxuICAgICAgICAgICAgICBuZXdTb3J0ZWQgPSBbZXhpc3RpbmddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4aXN0aW5nLmRlc2MgPSBzZWNvbmRTb3J0RGlyZWN0aW9uXG4gICAgICAgICAgICBpZiAoIWFkZGl0aXZlKSB7XG4gICAgICAgICAgICAgIG5ld1NvcnRlZCA9IFtleGlzdGluZ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGFkZGl0aXZlKSB7XG4gICAgICAgICAgICBuZXdTb3J0ZWQucHVzaCh7XG4gICAgICAgICAgICAgIGlkOiBjb2x1bW4uaWQsXG4gICAgICAgICAgICAgIGRlc2M6IGZpcnN0U29ydERpcmVjdGlvbixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1NvcnRlZCA9IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBjb2x1bW4uaWQsXG4gICAgICAgICAgICAgICAgZGVzYzogZmlyc3RTb3J0RGlyZWN0aW9uLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTXVsdGktU29ydFxuICAgICAgICBjb25zdCBleGlzdGluZ0luZGV4ID0gbmV3U29ydGVkLmZpbmRJbmRleChkID0+IGQuaWQgPT09IGNvbHVtblswXS5pZClcbiAgICAgICAgLy8gRXhpc3RpbmcgU29ydGVkIENvbHVtblxuICAgICAgICBpZiAoZXhpc3RpbmdJbmRleCA+IC0xKSB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBuZXdTb3J0ZWRbZXhpc3RpbmdJbmRleF1cbiAgICAgICAgICBpZiAoZXhpc3RpbmcuZGVzYyA9PT0gc2Vjb25kU29ydERpcmVjdGlvbikge1xuICAgICAgICAgICAgaWYgKGFkZGl0aXZlKSB7XG4gICAgICAgICAgICAgIG5ld1NvcnRlZC5zcGxpY2UoZXhpc3RpbmdJbmRleCwgY29sdW1uLmxlbmd0aClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbHVtbi5mb3JFYWNoKChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3U29ydGVkW2V4aXN0aW5nSW5kZXggKyBpXS5kZXNjID0gZmlyc3RTb3J0RGlyZWN0aW9uXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbHVtbi5mb3JFYWNoKChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgIG5ld1NvcnRlZFtleGlzdGluZ0luZGV4ICsgaV0uZGVzYyA9IHNlY29uZFNvcnREaXJlY3Rpb25cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghYWRkaXRpdmUpIHtcbiAgICAgICAgICAgIG5ld1NvcnRlZCA9IG5ld1NvcnRlZC5zbGljZShleGlzdGluZ0luZGV4LCBjb2x1bW4ubGVuZ3RoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBOZXcgU29ydCBDb2x1bW5cbiAgICAgICAgICBpZiAoYWRkaXRpdmUpIHtcbiAgICAgICAgICAgIG5ld1NvcnRlZCA9IG5ld1NvcnRlZC5jb25jYXQoXG4gICAgICAgICAgICAgIGNvbHVtbi5tYXAoZCA9PiAoe1xuICAgICAgICAgICAgICAgIGlkOiBkLmlkLFxuICAgICAgICAgICAgICAgIGRlc2M6IGZpcnN0U29ydERpcmVjdGlvbixcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1NvcnRlZCA9IGNvbHVtbi5tYXAoZCA9PiAoe1xuICAgICAgICAgICAgICBpZDogZC5pZCxcbiAgICAgICAgICAgICAgZGVzYzogZmlyc3RTb3J0RGlyZWN0aW9uLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2U6XG4gICAgICAgICAgICAoIXNvcnRlZC5sZW5ndGggJiYgbmV3U29ydGVkLmxlbmd0aCkgfHwgIWFkZGl0aXZlXG4gICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICA6IHRoaXMuc3RhdGUucGFnZSxcbiAgICAgICAgICBzb3J0ZWQ6IG5ld1NvcnRlZCxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIG9uU29ydGVkQ2hhbmdlICYmIG9uU29ydGVkQ2hhbmdlKG5ld1NvcnRlZCwgY29sdW1uLCBhZGRpdGl2ZSlcbiAgICAgICAgICB0aGlzLmZpcmVGZXRjaERhdGEoKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuXG4gICAgZmlsdGVyQ29sdW1uIChjb2x1bW4sIHZhbHVlKSB7XG4gICAgICBjb25zdCB7IGZpbHRlcmVkIH0gPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxuICAgICAgY29uc3QgeyBvbkZpbHRlcmVkQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIC8vIFJlbW92ZSBvbGQgZmlsdGVyIGZpcnN0IGlmIGl0IGV4aXN0c1xuICAgICAgY29uc3QgbmV3RmlsdGVyaW5nID0gKGZpbHRlcmVkIHx8IFtdKS5maWx0ZXIoeCA9PiB7XG4gICAgICAgIGlmICh4LmlkICE9PSBjb2x1bW4uaWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgIG5ld0ZpbHRlcmluZy5wdXNoKHtcbiAgICAgICAgICBpZDogY29sdW1uLmlkLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKFxuICAgICAgICB7XG4gICAgICAgICAgZmlsdGVyZWQ6IG5ld0ZpbHRlcmluZyxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIG9uRmlsdGVyZWRDaGFuZ2UgJiYgb25GaWx0ZXJlZENoYW5nZShuZXdGaWx0ZXJpbmcsIGNvbHVtbiwgdmFsdWUpXG4gICAgICAgICAgdGhpcy5maXJlRmV0Y2hEYXRhKClcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cblxuICAgIHJlc2l6ZUNvbHVtblN0YXJ0IChjb2x1bW4sIGV2ZW50LCBpc1RvdWNoKSB7XG4gICAgICBjb25zdCBwYXJlbnRXaWR0aCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIC53aWR0aFxuXG4gICAgICBsZXQgcGFnZVhcbiAgICAgIGlmIChpc1RvdWNoKSB7XG4gICAgICAgIHBhZ2VYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhZ2VYID0gZXZlbnQucGFnZVhcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKFxuICAgICAgICB7XG4gICAgICAgICAgY3VycmVudGx5UmVzaXppbmc6IHtcbiAgICAgICAgICAgIGlkOiBjb2x1bW4uaWQsXG4gICAgICAgICAgICBzdGFydFg6IHBhZ2VYLFxuICAgICAgICAgICAgcGFyZW50V2lkdGg6IHBhcmVudFdpZHRoLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpZiAoaXNUb3VjaCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcpXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMucmVzaXplQ29sdW1uRW5kKVxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcpXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuXG4gICAgcmVzaXplQ29sdW1uRW5kIChldmVudCkge1xuICAgICAgbGV0IGlzVG91Y2ggPSBldmVudC50eXBlID09PSAndG91Y2hlbmQnIHx8IGV2ZW50LnR5cGUgPT09ICd0b3VjaGNhbmNlbCdcblxuICAgICAgaWYgKGlzVG91Y2gpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcpXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0cyBhIHRvdWNoIGV2ZW50IGNsZWFyIHRoZSBtb3VzZSBvbmUncyBhcyB3ZWxsIGJlY2F1c2Ugc29tZXRpbWVzXG4gICAgICAvLyB0aGUgbW91c2VEb3duIGV2ZW50IGdldHMgY2FsbGVkIGFzIHdlbGwsIGJ1dCB0aGUgbW91c2VVcCBldmVudCBkb2Vzbid0XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZylcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcblxuICAgICAgLy8gVGhlIHRvdWNoIGV2ZW50cyBkb24ndCBwcm9wYWdhdGUgdXAgdG8gdGhlIHNvcnRpbmcncyBvbk1vdXNlRG93biBldmVudCBzb1xuICAgICAgLy8gbm8gbmVlZCB0byBwcmV2ZW50IGl0IGZyb20gaGFwcGVuaW5nIG9yIGVsc2UgdGhlIGZpcnN0IGNsaWNrIGFmdGVyIGEgdG91Y2hcbiAgICAgIC8vIGV2ZW50IHJlc2l6ZSB3aWxsIG5vdCBzb3J0IHRoZSBjb2x1bW4uXG4gICAgICBpZiAoIWlzVG91Y2gpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKHtcbiAgICAgICAgICBza2lwTmV4dFNvcnQ6IHRydWUsXG4gICAgICAgICAgY3VycmVudGx5UmVzaXppbmc6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJlc2l6ZUNvbHVtbk1vdmluZyAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IHsgb25SZXNpemVkQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG4gICAgICBjb25zdCB7IHJlc2l6ZWQsIGN1cnJlbnRseVJlc2l6aW5nIH0gPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxuXG4gICAgICAvLyBEZWxldGUgb2xkIHZhbHVlXG4gICAgICBjb25zdCBuZXdSZXNpemVkID0gcmVzaXplZC5maWx0ZXIoeCA9PiB4LmlkICE9PSBjdXJyZW50bHlSZXNpemluZy5pZClcblxuICAgICAgbGV0IHBhZ2VYXG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2htb3ZlJykge1xuICAgICAgICBwYWdlWCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZW1vdmUnKSB7XG4gICAgICAgIHBhZ2VYID0gZXZlbnQucGFnZVhcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IHRoZSBtaW4gc2l6ZSB0byAxMCB0byBhY2NvdW50IGZvciBtYXJnaW4gYW5kIGJvcmRlciBvciBlbHNlIHRoZSBncm91cCBoZWFkZXJzIGRvbid0IGxpbmUgdXAgY29ycmVjdGx5XG4gICAgICBjb25zdCBuZXdXaWR0aCA9IE1hdGgubWF4KFxuICAgICAgICBjdXJyZW50bHlSZXNpemluZy5wYXJlbnRXaWR0aCArIHBhZ2VYIC0gY3VycmVudGx5UmVzaXppbmcuc3RhcnRYLFxuICAgICAgICAxMVxuICAgICAgKVxuXG4gICAgICBuZXdSZXNpemVkLnB1c2goe1xuICAgICAgICBpZDogY3VycmVudGx5UmVzaXppbmcuaWQsXG4gICAgICAgIHZhbHVlOiBuZXdXaWR0aCxcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAge1xuICAgICAgICAgIHJlc2l6ZWQ6IG5ld1Jlc2l6ZWQsXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBvblJlc2l6ZWRDaGFuZ2UgJiYgb25SZXNpemVkQ2hhbmdlKG5ld1Jlc2l6ZWQsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9XG4iXX0=