'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

//
exports.default = {
  get: get,
  set: set,
  takeRight: takeRight,
  last: last,
  orderBy: orderBy,
  range: range,
  remove: remove,
  clone: clone,
  getFirstDefined: getFirstDefined,
  sum: sum,
  makeTemplateComponent: makeTemplateComponent,
  groupBy: groupBy,
  isArray: isArray,
  splitProps: splitProps,
  compactObject: compactObject,
  isSortingDesc: isSortingDesc,
  normalizeComponent: normalizeComponent
};


function get(obj, path, def) {
  if (!path) {
    return obj;
  }
  var pathObj = makePathArray(path);
  var val = void 0;
  try {
    val = pathObj.reduce(function (current, pathPart) {
      return current[pathPart];
    }, obj);
  } catch (e) {}
  return typeof val !== 'undefined' ? val : def;
}

function set() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments[1];
  var value = arguments[2];

  var keys = makePathArray(path);
  var keyPart = void 0;
  var cursor = obj;
  while ((keyPart = keys.shift()) && keys.length) {
    if (!cursor[keyPart]) {
      cursor[keyPart] = {};
    }
    cursor = cursor[keyPart];
  }
  cursor[keyPart] = value;
  return obj;
}

function takeRight(arr, n) {
  var start = n > arr.length ? 0 : arr.length - n;
  return arr.slice(start);
}

function last(arr) {
  return arr[arr.length - 1];
}

function range(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(n);
  }
  return arr;
}

function orderBy(arr, funcs, dirs, indexKey) {
  return arr.sort(function (rowA, rowB) {
    for (var i = 0; i < funcs.length; i++) {
      var comp = funcs[i];
      var desc = dirs[i] === false || dirs[i] === 'desc';
      var sortInt = comp(rowA, rowB);
      if (sortInt) {
        return desc ? -sortInt : sortInt;
      }
    }
    // Use the row index for tie breakers
    return dirs[0] ? rowA[indexKey] - rowB[indexKey] : rowB[indexKey] - rowA[indexKey];
  });
}

function remove(a, b) {
  return a.filter(function (o, i) {
    var r = b(o);
    if (r) {
      a.splice(i, 1);
      return true;
    }
    return false;
  });
}

function clone(a) {
  try {
    return JSON.parse(JSON.stringify(a, function (key, value) {
      if (typeof value === 'function') {
        return value.toString();
      }
      return value;
    }));
  } catch (e) {
    return a;
  }
}

function getFirstDefined() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] !== 'undefined') {
      return args[i];
    }
  }
}

function sum(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}

function makeTemplateComponent(compClass, displayName) {
  var Tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'div';

  if (!displayName) {
    throw new Error('No displayName found for template component:', compClass);
  }
  var cmp = function cmp(_ref) {
    var children = _ref.children,
        className = _ref.className,
        rest = _objectWithoutProperties(_ref, ['children', 'className']);

    return _react2.default.createElement(
      Tag,
      _extends({ className: (0, _classnames2.default)(compClass, className) }, rest),
      children
    );
  };
  cmp.displayName = displayName;
  return cmp;
}

function groupBy(xs, key) {
  return xs.reduce(function (rv, x, i) {
    var resKey = typeof key === 'function' ? key(x, i) : x[key];
    rv[resKey] = isArray(rv[resKey]) ? rv[resKey] : [];
    rv[resKey].push(x);
    return rv;
  }, {});
}

function isArray(a) {
  return Array.isArray(a);
}

// ########################################################################
// Non-exported Helpers
// ########################################################################

function makePathArray(obj) {
  return flattenDeep(obj).join('.').replace('[', '.').replace(']', '').split('.');
}

function flattenDeep(arr) {
  var newArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!isArray(arr)) {
    newArr.push(arr);
  } else {
    for (var i = 0; i < arr.length; i++) {
      flattenDeep(arr[i], newArr);
    }
  }
  return newArr;
}

function splitProps(_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      rest = _objectWithoutProperties(_ref2, ['className', 'style']);

  return {
    className: className,
    style: style,
    rest: rest
  };
}

function compactObject(obj) {
  var newObj = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== undefined && typeof obj[key] !== 'undefined') {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function isSortingDesc(d) {
  return !!(d.sort === 'desc' || d.desc === true || d.asc === false);
}

function normalizeComponent(Comp) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Comp;

  return typeof Comp === 'function' ? Object.getPrototypeOf(Comp).isReactComponent ? _react2.default.createElement(Comp, params) : Comp(params) : fallback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJnZXQiLCJzZXQiLCJ0YWtlUmlnaHQiLCJsYXN0Iiwib3JkZXJCeSIsInJhbmdlIiwicmVtb3ZlIiwiY2xvbmUiLCJnZXRGaXJzdERlZmluZWQiLCJzdW0iLCJtYWtlVGVtcGxhdGVDb21wb25lbnQiLCJncm91cEJ5IiwiaXNBcnJheSIsInNwbGl0UHJvcHMiLCJjb21wYWN0T2JqZWN0IiwiaXNTb3J0aW5nRGVzYyIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsIm9iaiIsInBhdGgiLCJkZWYiLCJwYXRoT2JqIiwibWFrZVBhdGhBcnJheSIsInZhbCIsInJlZHVjZSIsImN1cnJlbnQiLCJwYXRoUGFydCIsImUiLCJ2YWx1ZSIsImtleXMiLCJrZXlQYXJ0IiwiY3Vyc29yIiwic2hpZnQiLCJsZW5ndGgiLCJhcnIiLCJuIiwic3RhcnQiLCJzbGljZSIsImkiLCJwdXNoIiwiZnVuY3MiLCJkaXJzIiwiaW5kZXhLZXkiLCJzb3J0Iiwicm93QSIsInJvd0IiLCJjb21wIiwiZGVzYyIsInNvcnRJbnQiLCJhIiwiYiIsImZpbHRlciIsIm8iLCJyIiwic3BsaWNlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwia2V5IiwidG9TdHJpbmciLCJhcmdzIiwiY29tcENsYXNzIiwiZGlzcGxheU5hbWUiLCJUYWciLCJFcnJvciIsImNtcCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicmVzdCIsInhzIiwicnYiLCJ4IiwicmVzS2V5IiwiQXJyYXkiLCJmbGF0dGVuRGVlcCIsImpvaW4iLCJyZXBsYWNlIiwic3BsaXQiLCJuZXdBcnIiLCJzdHlsZSIsIm5ld09iaiIsImhhc093blByb3BlcnR5IiwidW5kZWZpbmVkIiwiZCIsImFzYyIsIkNvbXAiLCJwYXJhbXMiLCJmYWxsYmFjayIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiaXNSZWFjdENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7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QVMsRUFBZjtBQUNBLE9BQUssSUFBSXRCLEdBQVQsSUFBZ0J4QyxHQUFoQixFQUFxQjtBQUNuQixRQUNFQSxJQUFJK0QsY0FBSixDQUFtQnZCLEdBQW5CLEtBQ0F4QyxJQUFJd0MsR0FBSixNQUFhd0IsU0FEYixJQUVBLE9BQU9oRSxJQUFJd0MsR0FBSixDQUFQLEtBQW9CLFdBSHRCLEVBSUU7QUFDQXNCLGFBQU90QixHQUFQLElBQWN4QyxJQUFJd0MsR0FBSixDQUFkO0FBQ0Q7QUFDRjtBQUNELFNBQU9zQixNQUFQO0FBQ0Q7O0FBRUQsU0FBU2hFLGFBQVQsQ0FBd0JtRSxDQUF4QixFQUEyQjtBQUN6QixTQUFPLENBQUMsRUFBRUEsRUFBRXhDLElBQUYsS0FBVyxNQUFYLElBQXFCd0MsRUFBRXBDLElBQUYsS0FBVyxJQUFoQyxJQUF3Q29DLEVBQUVDLEdBQUYsS0FBVSxLQUFwRCxDQUFSO0FBQ0Q7O0FBRUQsU0FBU25FLGtCQUFULENBQTZCb0UsSUFBN0IsRUFBaUU7QUFBQSxNQUE5QkMsTUFBOEIsdUVBQXJCLEVBQXFCO0FBQUEsTUFBakJDLFFBQWlCLHVFQUFORixJQUFNOztBQUMvRCxTQUFPLE9BQU9BLElBQVAsS0FBZ0IsVUFBaEIsR0FDSEcsT0FBT0MsY0FBUCxDQUFzQkosSUFBdEIsRUFBNEJLLGdCQUE1QixHQUNFLDhCQUFDLElBQUQsRUFBVUosTUFBVixDQURGLEdBRUVELEtBQUtDLE1BQUwsQ0FIQyxHQUlIQyxRQUpKO0FBS0QiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuLy9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0LFxuICBzZXQsXG4gIHRha2VSaWdodCxcbiAgbGFzdCxcbiAgb3JkZXJCeSxcbiAgcmFuZ2UsXG4gIHJlbW92ZSxcbiAgY2xvbmUsXG4gIGdldEZpcnN0RGVmaW5lZCxcbiAgc3VtLFxuICBtYWtlVGVtcGxhdGVDb21wb25lbnQsXG4gIGdyb3VwQnksXG4gIGlzQXJyYXksXG4gIHNwbGl0UHJvcHMsXG4gIGNvbXBhY3RPYmplY3QsXG4gIGlzU29ydGluZ0Rlc2MsXG4gIG5vcm1hbGl6ZUNvbXBvbmVudCxcbn1cblxuZnVuY3Rpb24gZ2V0IChvYmosIHBhdGgsIGRlZikge1xuICBpZiAoIXBhdGgpIHtcbiAgICByZXR1cm4gb2JqXG4gIH1cbiAgY29uc3QgcGF0aE9iaiA9IG1ha2VQYXRoQXJyYXkocGF0aClcbiAgbGV0IHZhbFxuICB0cnkge1xuICAgIHZhbCA9IHBhdGhPYmoucmVkdWNlKChjdXJyZW50LCBwYXRoUGFydCkgPT4gY3VycmVudFtwYXRoUGFydF0sIG9iailcbiAgfSBjYXRjaCAoZSkge31cbiAgcmV0dXJuIHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnID8gdmFsIDogZGVmXG59XG5cbmZ1bmN0aW9uIHNldCAob2JqID0ge30sIHBhdGgsIHZhbHVlKSB7XG4gIGNvbnN0IGtleXMgPSBtYWtlUGF0aEFycmF5KHBhdGgpXG4gIGxldCBrZXlQYXJ0XG4gIGxldCBjdXJzb3IgPSBvYmpcbiAgd2hpbGUgKChrZXlQYXJ0ID0ga2V5cy5zaGlmdCgpKSAmJiBrZXlzLmxlbmd0aCkge1xuICAgIGlmICghY3Vyc29yW2tleVBhcnRdKSB7XG4gICAgICBjdXJzb3Jba2V5UGFydF0gPSB7fVxuICAgIH1cbiAgICBjdXJzb3IgPSBjdXJzb3Jba2V5UGFydF1cbiAgfVxuICBjdXJzb3Jba2V5UGFydF0gPSB2YWx1ZVxuICByZXR1cm4gb2JqXG59XG5cbmZ1bmN0aW9uIHRha2VSaWdodCAoYXJyLCBuKSB7XG4gIGNvbnN0IHN0YXJ0ID0gbiA+IGFyci5sZW5ndGggPyAwIDogYXJyLmxlbmd0aCAtIG5cbiAgcmV0dXJuIGFyci5zbGljZShzdGFydClcbn1cblxuZnVuY3Rpb24gbGFzdCAoYXJyKSB7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdXG59XG5cbmZ1bmN0aW9uIHJhbmdlIChuKSB7XG4gIGNvbnN0IGFyciA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgYXJyLnB1c2gobilcbiAgfVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIG9yZGVyQnkgKGFyciwgZnVuY3MsIGRpcnMsIGluZGV4S2V5KSB7XG4gIHJldHVybiBhcnIuc29ydCgocm93QSwgcm93QikgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnVuY3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbXAgPSBmdW5jc1tpXVxuICAgICAgY29uc3QgZGVzYyA9IGRpcnNbaV0gPT09IGZhbHNlIHx8IGRpcnNbaV0gPT09ICdkZXNjJ1xuICAgICAgY29uc3Qgc29ydEludCA9IGNvbXAocm93QSwgcm93QilcbiAgICAgIGlmIChzb3J0SW50KSB7XG4gICAgICAgIHJldHVybiBkZXNjID8gLXNvcnRJbnQgOiBzb3J0SW50XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFVzZSB0aGUgcm93IGluZGV4IGZvciB0aWUgYnJlYWtlcnNcbiAgICByZXR1cm4gZGlyc1swXVxuICAgICAgPyByb3dBW2luZGV4S2V5XSAtIHJvd0JbaW5kZXhLZXldXG4gICAgICA6IHJvd0JbaW5kZXhLZXldIC0gcm93QVtpbmRleEtleV1cbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlIChhLCBiKSB7XG4gIHJldHVybiBhLmZpbHRlcihmdW5jdGlvbiAobywgaSkge1xuICAgIHZhciByID0gYihvKVxuICAgIGlmIChyKSB7XG4gICAgICBhLnNwbGljZShpLCAxKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNsb25lIChhKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoXG4gICAgICBKU09OLnN0cmluZ2lmeShhLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgIH0pXG4gICAgKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGFcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRGaXJzdERlZmluZWQgKC4uLmFyZ3MpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiBhcmdzW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGFyZ3NbaV1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc3VtIChhcnIpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYSArIGJcbiAgfSwgMClcbn1cblxuZnVuY3Rpb24gbWFrZVRlbXBsYXRlQ29tcG9uZW50IChjb21wQ2xhc3MsIGRpc3BsYXlOYW1lLCBUYWcgPSAnZGl2Jykge1xuICBpZiAoIWRpc3BsYXlOYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBkaXNwbGF5TmFtZSBmb3VuZCBmb3IgdGVtcGxhdGUgY29tcG9uZW50OicsIGNvbXBDbGFzcylcbiAgfVxuICBjb25zdCBjbXAgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0pID0+XG4gICAgPFRhZyBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY29tcENsYXNzLCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UYWc+XG4gIGNtcC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lXG4gIHJldHVybiBjbXBcbn1cblxuZnVuY3Rpb24gZ3JvdXBCeSAoeHMsIGtleSkge1xuICByZXR1cm4geHMucmVkdWNlKChydiwgeCwgaSkgPT4ge1xuICAgIGNvbnN0IHJlc0tleSA9IHR5cGVvZiBrZXkgPT09ICdmdW5jdGlvbicgPyBrZXkoeCwgaSkgOiB4W2tleV1cbiAgICBydltyZXNLZXldID0gaXNBcnJheShydltyZXNLZXldKSA/IHJ2W3Jlc0tleV0gOiBbXVxuICAgIHJ2W3Jlc0tleV0ucHVzaCh4KVxuICAgIHJldHVybiBydlxuICB9LCB7fSlcbn1cblxuZnVuY3Rpb24gaXNBcnJheSAoYSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhKVxufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vIE5vbi1leHBvcnRlZCBIZWxwZXJzXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuZnVuY3Rpb24gbWFrZVBhdGhBcnJheSAob2JqKSB7XG4gIHJldHVybiBmbGF0dGVuRGVlcChvYmopXG4gICAgLmpvaW4oJy4nKVxuICAgIC5yZXBsYWNlKCdbJywgJy4nKVxuICAgIC5yZXBsYWNlKCddJywgJycpXG4gICAgLnNwbGl0KCcuJylcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkRlZXAgKGFyciwgbmV3QXJyID0gW10pIHtcbiAgaWYgKCFpc0FycmF5KGFycikpIHtcbiAgICBuZXdBcnIucHVzaChhcnIpXG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZsYXR0ZW5EZWVwKGFycltpXSwgbmV3QXJyKVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3QXJyXG59XG5cbmZ1bmN0aW9uIHNwbGl0UHJvcHMgKHsgY2xhc3NOYW1lLCBzdHlsZSwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiB7XG4gICAgY2xhc3NOYW1lLFxuICAgIHN0eWxlLFxuICAgIHJlc3QsXG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGFjdE9iamVjdCAob2JqKSB7XG4gIGNvbnN0IG5ld09iaiA9IHt9XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoXG4gICAgICBvYmouaGFzT3duUHJvcGVydHkoa2V5KSAmJlxuICAgICAgb2JqW2tleV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdHlwZW9mIG9ialtrZXldICE9PSAndW5kZWZpbmVkJ1xuICAgICkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3T2JqXG59XG5cbmZ1bmN0aW9uIGlzU29ydGluZ0Rlc2MgKGQpIHtcbiAgcmV0dXJuICEhKGQuc29ydCA9PT0gJ2Rlc2MnIHx8IGQuZGVzYyA9PT0gdHJ1ZSB8fCBkLmFzYyA9PT0gZmFsc2UpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoQ29tcCwgcGFyYW1zID0ge30sIGZhbGxiYWNrID0gQ29tcCkge1xuICByZXR1cm4gdHlwZW9mIENvbXAgPT09ICdmdW5jdGlvbidcbiAgICA/IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb21wKS5pc1JlYWN0Q29tcG9uZW50XG4gICAgICA/IDxDb21wIHsuLi5wYXJhbXN9IC8+XG4gICAgICA6IENvbXAocGFyYW1zKVxuICAgIDogZmFsbGJhY2tcbn1cbiJdfQ==