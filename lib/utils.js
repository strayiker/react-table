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
  normalizeComponent: normalizeComponent,
  isPercents: isPercents,
  percentsToPx: percentsToPx
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
  return d.sort === 'desc' || d.desc === true || d.asc === false;
}

function normalizeComponent(Comp) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Comp;

  return typeof Comp === 'function' ? Object.getPrototypeOf(Comp).isReactComponent ? _react2.default.createElement(Comp, params) : Comp(params) : fallback;
}

function isPercents(value) {
  return typeof value === 'string' && value[value.length - 1] === '%';
}

function percentsToPx(percents, total) {
  return total / 100 * percents;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJnZXQiLCJzZXQiLCJ0YWtlUmlnaHQiLCJsYXN0Iiwib3JkZXJCeSIsInJhbmdlIiwicmVtb3ZlIiwiY2xvbmUiLCJnZXRGaXJzdERlZmluZWQiLCJzdW0iLCJtYWtlVGVtcGxhdGVDb21wb25lbnQiLCJncm91cEJ5IiwiaXNBcnJheSIsInNwbGl0UHJvcHMiLCJjb21wYWN0T2JqZWN0IiwiaXNTb3J0aW5nRGVzYyIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsImlzUGVyY2VudHMiLCJwZXJjZW50c1RvUHgiLCJvYmoiLCJwYXRoIiwiZGVmIiwicGF0aE9iaiIsIm1ha2VQYXRoQXJyYXkiLCJ2YWwiLCJyZWR1Y2UiLCJjdXJyZW50IiwicGF0aFBhcnQiLCJlIiwidmFsdWUiLCJrZXlzIiwia2V5UGFydCIsImN1cnNvciIsInNoaWZ0IiwibGVuZ3RoIiwiYXJyIiwibiIsInN0YXJ0Iiwic2xpY2UiLCJpIiwicHVzaCIsImZ1bmNzIiwiZGlycyIsImluZGV4S2V5Iiwic29ydCIsInJvd0EiLCJyb3dCIiwiY29tcCIsImRlc2MiLCJzb3J0SW50IiwiYSIsImIiLCJmaWx0ZXIiLCJvIiwiciIsInNwbGljZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImtleSIsInRvU3RyaW5nIiwiYXJncyIsImNvbXBDbGFzcyIsImRpc3BsYXlOYW1lIiwiVGFnIiwiRXJyb3IiLCJjbXAiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInJlc3QiLCJ4cyIsInJ2IiwieCIsInJlc0tleSIsIkFycmF5IiwiZmxhdHRlbkRlZXAiLCJqb2luIiwicmVwbGFjZSIsInNwbGl0IiwibmV3QXJyIiwic3R5bGUiLCJuZXdPYmoiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsImQiLCJhc2MiLCJDb21wIiwicGFyYW1zIiwiZmFsbGJhY2siLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImlzUmVhY3RDb21wb25lbnQiLCJwZXJjZW50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QUFnQkQsUUFBdkI7QUFDRCIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG4vL1xuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHNldCxcbiAgdGFrZVJpZ2h0LFxuICBsYXN0LFxuICBvcmRlckJ5LFxuICByYW5nZSxcbiAgcmVtb3ZlLFxuICBjbG9uZSxcbiAgZ2V0Rmlyc3REZWZpbmVkLFxuICBzdW0sXG4gIG1ha2VUZW1wbGF0ZUNvbXBvbmVudCxcbiAgZ3JvdXBCeSxcbiAgaXNBcnJheSxcbiAgc3BsaXRQcm9wcyxcbiAgY29tcGFjdE9iamVjdCxcbiAgaXNTb3J0aW5nRGVzYyxcbiAgbm9ybWFsaXplQ29tcG9uZW50LFxuICBpc1BlcmNlbnRzLFxuICBwZXJjZW50c1RvUHhcbn1cblxuZnVuY3Rpb24gZ2V0IChvYmosIHBhdGgsIGRlZikge1xuICBpZiAoIXBhdGgpIHtcbiAgICByZXR1cm4gb2JqXG4gIH1cbiAgY29uc3QgcGF0aE9iaiA9IG1ha2VQYXRoQXJyYXkocGF0aClcbiAgbGV0IHZhbFxuICB0cnkge1xuICAgIHZhbCA9IHBhdGhPYmoucmVkdWNlKChjdXJyZW50LCBwYXRoUGFydCkgPT4gY3VycmVudFtwYXRoUGFydF0sIG9iailcbiAgfSBjYXRjaCAoZSkge31cbiAgcmV0dXJuIHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnID8gdmFsIDogZGVmXG59XG5cbmZ1bmN0aW9uIHNldCAob2JqID0ge30sIHBhdGgsIHZhbHVlKSB7XG4gIGNvbnN0IGtleXMgPSBtYWtlUGF0aEFycmF5KHBhdGgpXG4gIGxldCBrZXlQYXJ0XG4gIGxldCBjdXJzb3IgPSBvYmpcbiAgd2hpbGUgKChrZXlQYXJ0ID0ga2V5cy5zaGlmdCgpKSAmJiBrZXlzLmxlbmd0aCkge1xuICAgIGlmICghY3Vyc29yW2tleVBhcnRdKSB7XG4gICAgICBjdXJzb3Jba2V5UGFydF0gPSB7fVxuICAgIH1cbiAgICBjdXJzb3IgPSBjdXJzb3Jba2V5UGFydF1cbiAgfVxuICBjdXJzb3Jba2V5UGFydF0gPSB2YWx1ZVxuICByZXR1cm4gb2JqXG59XG5cbmZ1bmN0aW9uIHRha2VSaWdodCAoYXJyLCBuKSB7XG4gIGNvbnN0IHN0YXJ0ID0gbiA+IGFyci5sZW5ndGggPyAwIDogYXJyLmxlbmd0aCAtIG5cbiAgcmV0dXJuIGFyci5zbGljZShzdGFydClcbn1cblxuZnVuY3Rpb24gbGFzdCAoYXJyKSB7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdXG59XG5cbmZ1bmN0aW9uIHJhbmdlIChuKSB7XG4gIGNvbnN0IGFyciA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgYXJyLnB1c2gobilcbiAgfVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIG9yZGVyQnkgKGFyciwgZnVuY3MsIGRpcnMsIGluZGV4S2V5KSB7XG4gIHJldHVybiBhcnIuc29ydCgocm93QSwgcm93QikgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnVuY3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbXAgPSBmdW5jc1tpXVxuICAgICAgY29uc3QgZGVzYyA9IGRpcnNbaV0gPT09IGZhbHNlIHx8IGRpcnNbaV0gPT09ICdkZXNjJ1xuICAgICAgY29uc3Qgc29ydEludCA9IGNvbXAocm93QSwgcm93QilcbiAgICAgIGlmIChzb3J0SW50KSB7XG4gICAgICAgIHJldHVybiBkZXNjID8gLXNvcnRJbnQgOiBzb3J0SW50XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFVzZSB0aGUgcm93IGluZGV4IGZvciB0aWUgYnJlYWtlcnNcbiAgICByZXR1cm4gZGlyc1swXVxuICAgICAgPyByb3dBW2luZGV4S2V5XSAtIHJvd0JbaW5kZXhLZXldXG4gICAgICA6IHJvd0JbaW5kZXhLZXldIC0gcm93QVtpbmRleEtleV1cbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlIChhLCBiKSB7XG4gIHJldHVybiBhLmZpbHRlcihmdW5jdGlvbiAobywgaSkge1xuICAgIHZhciByID0gYihvKVxuICAgIGlmIChyKSB7XG4gICAgICBhLnNwbGljZShpLCAxKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNsb25lIChhKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoXG4gICAgICBKU09OLnN0cmluZ2lmeShhLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgIH0pXG4gICAgKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGFcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRGaXJzdERlZmluZWQgKC4uLmFyZ3MpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiBhcmdzW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGFyZ3NbaV1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc3VtIChhcnIpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYSArIGJcbiAgfSwgMClcbn1cblxuZnVuY3Rpb24gbWFrZVRlbXBsYXRlQ29tcG9uZW50IChjb21wQ2xhc3MsIGRpc3BsYXlOYW1lLCBUYWcgPSAnZGl2Jykge1xuICBpZiAoIWRpc3BsYXlOYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBkaXNwbGF5TmFtZSBmb3VuZCBmb3IgdGVtcGxhdGUgY29tcG9uZW50OicsIGNvbXBDbGFzcylcbiAgfVxuICBjb25zdCBjbXAgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0pID0+XG4gICAgPFRhZyBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY29tcENsYXNzLCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UYWc+XG4gIGNtcC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lXG4gIHJldHVybiBjbXBcbn1cblxuZnVuY3Rpb24gZ3JvdXBCeSAoeHMsIGtleSkge1xuICByZXR1cm4geHMucmVkdWNlKChydiwgeCwgaSkgPT4ge1xuICAgIGNvbnN0IHJlc0tleSA9IHR5cGVvZiBrZXkgPT09ICdmdW5jdGlvbicgPyBrZXkoeCwgaSkgOiB4W2tleV1cbiAgICBydltyZXNLZXldID0gaXNBcnJheShydltyZXNLZXldKSA/IHJ2W3Jlc0tleV0gOiBbXVxuICAgIHJ2W3Jlc0tleV0ucHVzaCh4KVxuICAgIHJldHVybiBydlxuICB9LCB7fSlcbn1cblxuZnVuY3Rpb24gaXNBcnJheSAoYSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhKVxufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vIE5vbi1leHBvcnRlZCBIZWxwZXJzXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuZnVuY3Rpb24gbWFrZVBhdGhBcnJheSAob2JqKSB7XG4gIHJldHVybiBmbGF0dGVuRGVlcChvYmopXG4gICAgLmpvaW4oJy4nKVxuICAgIC5yZXBsYWNlKCdbJywgJy4nKVxuICAgIC5yZXBsYWNlKCddJywgJycpXG4gICAgLnNwbGl0KCcuJylcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkRlZXAgKGFyciwgbmV3QXJyID0gW10pIHtcbiAgaWYgKCFpc0FycmF5KGFycikpIHtcbiAgICBuZXdBcnIucHVzaChhcnIpXG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZsYXR0ZW5EZWVwKGFycltpXSwgbmV3QXJyKVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3QXJyXG59XG5cbmZ1bmN0aW9uIHNwbGl0UHJvcHMgKHsgY2xhc3NOYW1lLCBzdHlsZSwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiB7XG4gICAgY2xhc3NOYW1lLFxuICAgIHN0eWxlLFxuICAgIHJlc3QsXG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGFjdE9iamVjdCAob2JqKSB7XG4gIGNvbnN0IG5ld09iaiA9IHt9XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoXG4gICAgICBvYmouaGFzT3duUHJvcGVydHkoa2V5KSAmJlxuICAgICAgb2JqW2tleV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdHlwZW9mIG9ialtrZXldICE9PSAndW5kZWZpbmVkJ1xuICAgICkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3T2JqXG59XG5cbmZ1bmN0aW9uIGlzU29ydGluZ0Rlc2MgKGQpIHtcbiAgcmV0dXJuIGQuc29ydCA9PT0gJ2Rlc2MnIHx8IGQuZGVzYyA9PT0gdHJ1ZSB8fCBkLmFzYyA9PT0gZmFsc2Vcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChDb21wLCBwYXJhbXMgPSB7fSwgZmFsbGJhY2sgPSBDb21wKSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcCA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbXApLmlzUmVhY3RDb21wb25lbnRcbiAgICAgID8gPENvbXAgey4uLnBhcmFtc30gLz5cbiAgICAgIDogQ29tcChwYXJhbXMpXG4gICAgOiBmYWxsYmFja1xufVxuXG5mdW5jdGlvbiBpc1BlcmNlbnRzKHZhbHVlKSB7XG4gIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXSA9PT0gJyUnKVxufVxuXG5mdW5jdGlvbiBwZXJjZW50c1RvUHgocGVyY2VudHMsIHRvdGFsKSB7XG4gIHJldHVybiAodG90YWwgLyAxMDApICogcGVyY2VudHM7XG59XG4iXX0=