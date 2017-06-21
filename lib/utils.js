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

function makeTemplateComponent(compClass) {
  var Tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';

  return function (_ref) {
    var children = _ref.children,
        className = _ref.className,
        rest = _objectWithoutProperties(_ref, ['children', 'className']);

    return _react2.default.createElement(
      Tag,
      _extends({ className: (0, _classnames2.default)(compClass, className) }, rest),
      children
    );
  };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJnZXQiLCJzZXQiLCJ0YWtlUmlnaHQiLCJsYXN0Iiwib3JkZXJCeSIsInJhbmdlIiwicmVtb3ZlIiwiY2xvbmUiLCJnZXRGaXJzdERlZmluZWQiLCJzdW0iLCJtYWtlVGVtcGxhdGVDb21wb25lbnQiLCJncm91cEJ5IiwiaXNBcnJheSIsInNwbGl0UHJvcHMiLCJjb21wYWN0T2JqZWN0IiwiaXNTb3J0aW5nRGVzYyIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsIm9iaiIsInBhdGgiLCJkZWYiLCJwYXRoT2JqIiwibWFrZVBhdGhBcnJheSIsInZhbCIsInJlZHVjZSIsImN1cnJlbnQiLCJwYXRoUGFydCIsImUiLCJ2YWx1ZSIsImtleXMiLCJrZXlQYXJ0IiwiY3Vyc29yIiwic2hpZnQiLCJsZW5ndGgiLCJhcnIiLCJuIiwic3RhcnQiLCJzbGljZSIsImkiLCJwdXNoIiwiZnVuY3MiLCJkaXJzIiwiaW5kZXhLZXkiLCJzb3J0Iiwicm93QSIsInJvd0IiLCJjb21wIiwiZGVzYyIsInNvcnRJbnQiLCJhIiwiYiIsImZpbHRlciIsIm8iLCJyIiwic3BsaWNlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwia2V5IiwidG9TdHJpbmciLCJhcmdzIiwiY29tcENsYXNzIiwiVGFnIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJyZXN0IiwieHMiLCJydiIsIngiLCJyZXNLZXkiLCJBcnJheSIsImZsYXR0ZW5EZWVwIiwiam9pbiIsInJlcGxhY2UiLCJzcGxpdCIsIm5ld0FyciIsInN0eWxlIiwibmV3T2JqIiwiaGFzT3duUHJvcGVydHkiLCJ1bmRlZmluZWQiLCJkIiwiYXNjIiwiQ29tcCIsInBhcmFtcyIsImZhbGxiYWNrIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJpc1JlYWN0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0E7a0JBQ2U7QUFDYkEsVUFEYTtB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Y3hDLElBQUl3QyxHQUFKLENBQWQ7QUFDRDtBQUNGO0FBQ0QsU0FBT21CLE1BQVA7QUFDRDs7QUFFRCxTQUFTN0QsYUFBVCxDQUF3QmdFLENBQXhCLEVBQTJCO0FBQ3pCLFNBQU8sQ0FBQyxFQUFFQSxFQUFFckMsSUFBRixLQUFXLE1BQVgsSUFBcUJxQyxFQUFFakMsSUFBRixLQUFXLElBQWhDLElBQXdDaUMsRUFBRUMsR0FBRixLQUFVLEtBQXBELENBQVI7QUFDRDs7QUFFRCxTQUFTaEUsa0JBQVQsQ0FBNkJpRSxJQUE3QixFQUFpRTtBQUFBLE1BQTlCQyxNQUE4Qix1RUFBckIsRUFBcUI7QUFBQSxNQUFqQkMsUUFBaUIsdUVBQU5GLElBQU07O0FBQy9ELFNBQU8sT0FBT0EsSUFBUCxLQUFnQixVQUFoQixHQUNIRyxPQUFPQyxjQUFQLENBQXNCSixJQUF0QixFQUE0QkssZ0JBQTVCLEdBQ0UsOEJBQUMsSUFBRCxFQUFVSixNQUFWLENBREYsR0FFRUQsS0FBS0MsTUFBTCxDQUhDLEdBSUhDLFFBSko7QUFLRCIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG4vL1xuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHNldCxcbiAgdGFrZVJpZ2h0LFxuICBsYXN0LFxuICBvcmRlckJ5LFxuICByYW5nZSxcbiAgcmVtb3ZlLFxuICBjbG9uZSxcbiAgZ2V0Rmlyc3REZWZpbmVkLFxuICBzdW0sXG4gIG1ha2VUZW1wbGF0ZUNvbXBvbmVudCxcbiAgZ3JvdXBCeSxcbiAgaXNBcnJheSxcbiAgc3BsaXRQcm9wcyxcbiAgY29tcGFjdE9iamVjdCxcbiAgaXNTb3J0aW5nRGVzYyxcbiAgbm9ybWFsaXplQ29tcG9uZW50LFxufVxuXG5mdW5jdGlvbiBnZXQgKG9iaiwgcGF0aCwgZGVmKSB7XG4gIGlmICghcGF0aCkge1xuICAgIHJldHVybiBvYmpcbiAgfVxuICBjb25zdCBwYXRoT2JqID0gbWFrZVBhdGhBcnJheShwYXRoKVxuICBsZXQgdmFsXG4gIHRyeSB7XG4gICAgdmFsID0gcGF0aE9iai5yZWR1Y2UoKGN1cnJlbnQsIHBhdGhQYXJ0KSA9PiBjdXJyZW50W3BhdGhQYXJ0XSwgb2JqKVxuICB9IGNhdGNoIChlKSB7fVxuICByZXR1cm4gdHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcgPyB2YWwgOiBkZWZcbn1cblxuZnVuY3Rpb24gc2V0IChvYmogPSB7fSwgcGF0aCwgdmFsdWUpIHtcbiAgY29uc3Qga2V5cyA9IG1ha2VQYXRoQXJyYXkocGF0aClcbiAgbGV0IGtleVBhcnRcbiAgbGV0IGN1cnNvciA9IG9ialxuICB3aGlsZSAoKGtleVBhcnQgPSBrZXlzLnNoaWZ0KCkpICYmIGtleXMubGVuZ3RoKSB7XG4gICAgaWYgKCFjdXJzb3Jba2V5UGFydF0pIHtcbiAgICAgIGN1cnNvcltrZXlQYXJ0XSA9IHt9XG4gICAgfVxuICAgIGN1cnNvciA9IGN1cnNvcltrZXlQYXJ0XVxuICB9XG4gIGN1cnNvcltrZXlQYXJ0XSA9IHZhbHVlXG4gIHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gdGFrZVJpZ2h0IChhcnIsIG4pIHtcbiAgY29uc3Qgc3RhcnQgPSBuID4gYXJyLmxlbmd0aCA/IDAgOiBhcnIubGVuZ3RoIC0gblxuICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0KVxufVxuXG5mdW5jdGlvbiBsYXN0IChhcnIpIHtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV1cbn1cblxuZnVuY3Rpb24gcmFuZ2UgKG4pIHtcbiAgY29uc3QgYXJyID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBhcnIucHVzaChuKVxuICB9XG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gb3JkZXJCeSAoYXJyLCBmdW5jcywgZGlycywgaW5kZXhLZXkpIHtcbiAgcmV0dXJuIGFyci5zb3J0KChyb3dBLCByb3dCKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmdW5jcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29tcCA9IGZ1bmNzW2ldXG4gICAgICBjb25zdCBkZXNjID0gZGlyc1tpXSA9PT0gZmFsc2UgfHwgZGlyc1tpXSA9PT0gJ2Rlc2MnXG4gICAgICBjb25zdCBzb3J0SW50ID0gY29tcChyb3dBLCByb3dCKVxuICAgICAgaWYgKHNvcnRJbnQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MgPyAtc29ydEludCA6IHNvcnRJbnRcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVXNlIHRoZSByb3cgaW5kZXggZm9yIHRpZSBicmVha2Vyc1xuICAgIHJldHVybiBkaXJzWzBdXG4gICAgICA/IHJvd0FbaW5kZXhLZXldIC0gcm93QltpbmRleEtleV1cbiAgICAgIDogcm93QltpbmRleEtleV0gLSByb3dBW2luZGV4S2V5XVxuICB9KVxufVxuXG5mdW5jdGlvbiByZW1vdmUgKGEsIGIpIHtcbiAgcmV0dXJuIGEuZmlsdGVyKGZ1bmN0aW9uIChvLCBpKSB7XG4gICAgdmFyIHIgPSBiKG8pXG4gICAgaWYgKHIpIHtcbiAgICAgIGEuc3BsaWNlKGksIDEpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcbn1cblxuZnVuY3Rpb24gY2xvbmUgKGEpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShcbiAgICAgIEpTT04uc3RyaW5naWZ5KGEsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgfSlcbiAgICApXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gYVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEZpcnN0RGVmaW5lZCAoLi4uYXJncykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIGFyZ3NbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gYXJnc1tpXVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzdW0gKGFycikge1xuICByZXR1cm4gYXJyLnJlZHVjZSgoYSwgYikgPT4ge1xuICAgIHJldHVybiBhICsgYlxuICB9LCAwKVxufVxuXG5mdW5jdGlvbiBtYWtlVGVtcGxhdGVDb21wb25lbnQgKGNvbXBDbGFzcywgVGFnID0gJ2RpdicpIHtcbiAgcmV0dXJuICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnJlc3QgfSkgPT5cbiAgICA8VGFnIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjb21wQ2xhc3MsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RhZz5cbn1cblxuZnVuY3Rpb24gZ3JvdXBCeSAoeHMsIGtleSkge1xuICByZXR1cm4geHMucmVkdWNlKChydiwgeCwgaSkgPT4ge1xuICAgIGNvbnN0IHJlc0tleSA9IHR5cGVvZiBrZXkgPT09ICdmdW5jdGlvbicgPyBrZXkoeCwgaSkgOiB4W2tleV1cbiAgICBydltyZXNLZXldID0gaXNBcnJheShydltyZXNLZXldKSA/IHJ2W3Jlc0tleV0gOiBbXVxuICAgIHJ2W3Jlc0tleV0ucHVzaCh4KVxuICAgIHJldHVybiBydlxuICB9LCB7fSlcbn1cblxuZnVuY3Rpb24gaXNBcnJheSAoYSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhKVxufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vIE5vbi1leHBvcnRlZCBIZWxwZXJzXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuZnVuY3Rpb24gbWFrZVBhdGhBcnJheSAob2JqKSB7XG4gIHJldHVybiBmbGF0dGVuRGVlcChvYmopXG4gICAgLmpvaW4oJy4nKVxuICAgIC5yZXBsYWNlKCdbJywgJy4nKVxuICAgIC5yZXBsYWNlKCddJywgJycpXG4gICAgLnNwbGl0KCcuJylcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkRlZXAgKGFyciwgbmV3QXJyID0gW10pIHtcbiAgaWYgKCFpc0FycmF5KGFycikpIHtcbiAgICBuZXdBcnIucHVzaChhcnIpXG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZsYXR0ZW5EZWVwKGFycltpXSwgbmV3QXJyKVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3QXJyXG59XG5cbmZ1bmN0aW9uIHNwbGl0UHJvcHMgKHsgY2xhc3NOYW1lLCBzdHlsZSwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiB7XG4gICAgY2xhc3NOYW1lLFxuICAgIHN0eWxlLFxuICAgIHJlc3QsXG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGFjdE9iamVjdCAob2JqKSB7XG4gIGNvbnN0IG5ld09iaiA9IHt9XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoXG4gICAgICBvYmouaGFzT3duUHJvcGVydHkoa2V5KSAmJlxuICAgICAgb2JqW2tleV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdHlwZW9mIG9ialtrZXldICE9PSAndW5kZWZpbmVkJ1xuICAgICkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3T2JqXG59XG5cbmZ1bmN0aW9uIGlzU29ydGluZ0Rlc2MgKGQpIHtcbiAgcmV0dXJuICEhKGQuc29ydCA9PT0gJ2Rlc2MnIHx8IGQuZGVzYyA9PT0gdHJ1ZSB8fCBkLmFzYyA9PT0gZmFsc2UpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoQ29tcCwgcGFyYW1zID0ge30sIGZhbGxiYWNrID0gQ29tcCkge1xuICByZXR1cm4gdHlwZW9mIENvbXAgPT09ICdmdW5jdGlvbidcbiAgICA/IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb21wKS5pc1JlYWN0Q29tcG9uZW50XG4gICAgICA/IDxDb21wIHsuLi5wYXJhbXN9IC8+XG4gICAgICA6IENvbXAocGFyYW1zKVxuICAgIDogZmFsbGJhY2tcbn1cbiJdfQ==