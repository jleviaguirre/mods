/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/d3/d3.js":
/*!*******************************!*\
  !*** ./node_modules/d3/d3.js ***!
  \*******************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function() {
  var d3 = {
    version: "3.5.17"
  };
  var d3_arraySlice = [].slice, d3_array = function(list) {
    return d3_arraySlice.call(list);
  };
  var d3_document = this.document;
  function d3_documentElement(node) {
    return node && (node.ownerDocument || node.document || node).documentElement;
  }
  function d3_window(node) {
    return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
  }
  if (d3_document) {
    try {
      d3_array(d3_document.documentElement.childNodes)[0].nodeType;
    } catch (e) {
      d3_array = function(list) {
        var i = list.length, array = new Array(i);
        while (i--) array[i] = list[i];
        return array;
      };
    }
  }
  if (!Date.now) Date.now = function() {
    return +new Date();
  };
  if (d3_document) {
    try {
      d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
    } catch (error) {
      var d3_element_prototype = this.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = this.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
      d3_element_prototype.setAttribute = function(name, value) {
        d3_element_setAttribute.call(this, name, value + "");
      };
      d3_element_prototype.setAttributeNS = function(space, local, value) {
        d3_element_setAttributeNS.call(this, space, local, value + "");
      };
      d3_style_prototype.setProperty = function(name, value, priority) {
        d3_style_setProperty.call(this, name, value + "", priority);
      };
    }
  }
  d3.ascending = d3_ascending;
  function d3_ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }
  d3.descending = function(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  };
  d3.min = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
    }
    return a;
  };
  d3.max = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
    }
    return a;
  };
  d3.extent = function(array, f) {
    var i = -1, n = array.length, a, b, c;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    }
    return [ a, c ];
  };
  function d3_number(x) {
    return x === null ? NaN : +x;
  }
  function d3_numeric(x) {
    return !isNaN(x);
  }
  d3.sum = function(array, f) {
    var s = 0, n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = +array[i])) s += a;
    } else {
      while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
    }
    return s;
  };
  d3.mean = function(array, f) {
    var s = 0, n = array.length, a, i = -1, j = n;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a; else --j;
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a; else --j;
    }
    if (j) return s / j;
  };
  d3.quantile = function(values, p) {
    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
    return e ? v + e * (values[h] - v) : v;
  };
  d3.median = function(array, f) {
    var numbers = [], n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
    }
    if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5);
  };
  d3.variance = function(array, f) {
    var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
    if (arguments.length === 1) {
      while (++i < n) {
        if (d3_numeric(a = d3_number(array[i]))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    } else {
      while (++i < n) {
        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    }
    if (j > 1) return s / (j - 1);
  };
  d3.deviation = function() {
    var v = d3.variance.apply(this, arguments);
    return v ? Math.sqrt(v) : v;
  };
  function d3_bisector(compare) {
    return {
      left: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
        }
        return lo;
      }
    };
  }
  var d3_bisect = d3_bisector(d3_ascending);
  d3.bisectLeft = d3_bisect.left;
  d3.bisect = d3.bisectRight = d3_bisect.right;
  d3.bisector = function(f) {
    return d3_bisector(f.length === 1 ? function(d, x) {
      return d3_ascending(f(d), x);
    } : f);
  };
  d3.shuffle = function(array, i0, i1) {
    if ((m = arguments.length) < 3) {
      i1 = array.length;
      if (m < 2) i0 = 0;
    }
    var m = i1 - i0, t, i;
    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
    }
    return array;
  };
  d3.permute = function(array, indexes) {
    var i = indexes.length, permutes = new Array(i);
    while (i--) permutes[i] = array[indexes[i]];
    return permutes;
  };
  d3.pairs = function(array) {
    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
    return pairs;
  };
  d3.transpose = function(matrix) {
    if (!(n = matrix.length)) return [];
    for (var i = -1, m = d3.min(matrix, d3_transposeLength), transpose = new Array(m); ++i < m; ) {
      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
        row[j] = matrix[j][i];
      }
    }
    return transpose;
  };
  function d3_transposeLength(d) {
    return d.length;
  }
  d3.zip = function() {
    return d3.transpose(arguments);
  };
  d3.keys = function(map) {
    var keys = [];
    for (var key in map) keys.push(key);
    return keys;
  };
  d3.values = function(map) {
    var values = [];
    for (var key in map) values.push(map[key]);
    return values;
  };
  d3.entries = function(map) {
    var entries = [];
    for (var key in map) entries.push({
      key: key,
      value: map[key]
    });
    return entries;
  };
  d3.merge = function(arrays) {
    var n = arrays.length, m, i = -1, j = 0, merged, array;
    while (++i < n) j += arrays[i].length;
    merged = new Array(j);
    while (--n >= 0) {
      array = arrays[n];
      m = array.length;
      while (--m >= 0) {
        merged[--j] = array[m];
      }
    }
    return merged;
  };
  var abs = Math.abs;
  d3.range = function(start, stop, step) {
    if (arguments.length < 3) {
      step = 1;
      if (arguments.length < 2) {
        stop = start;
        start = 0;
      }
    }
    if ((stop - start) / step === Infinity) throw new Error("infinite range");
    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
    start *= k, stop *= k, step *= k;
    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
    return range;
  };
  function d3_range_integerScale(x) {
    var k = 1;
    while (x * k % 1) k *= 10;
    return k;
  }
  function d3_class(ctor, properties) {
    for (var key in properties) {
      Object.defineProperty(ctor.prototype, key, {
        value: properties[key],
        enumerable: false
      });
    }
  }
  d3.map = function(object, f) {
    var map = new d3_Map();
    if (object instanceof d3_Map) {
      object.forEach(function(key, value) {
        map.set(key, value);
      });
    } else if (Array.isArray(object)) {
      var i = -1, n = object.length, o;
      if (arguments.length === 1) while (++i < n) map.set(i, object[i]); else while (++i < n) map.set(f.call(object, o = object[i], i), o);
    } else {
      for (var key in object) map.set(key, object[key]);
    }
    return map;
  };
  function d3_Map() {
    this._ = Object.create(null);
  }
  var d3_map_proto = "__proto__", d3_map_zero = "\x00";
  d3_class(d3_Map, {
    has: d3_map_has,
    get: function(key) {
      return this._[d3_map_escape(key)];
    },
    set: function(key, value) {
      return this._[d3_map_escape(key)] = value;
    },
    remove: d3_map_remove,
    keys: d3_map_keys,
    values: function() {
      var values = [];
      for (var key in this._) values.push(this._[key]);
      return values;
    },
    entries: function() {
      var entries = [];
      for (var key in this._) entries.push({
        key: d3_map_unescape(key),
        value: this._[key]
      });
      return entries;
    },
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
    }
  });
  function d3_map_escape(key) {
    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
  }
  function d3_map_unescape(key) {
    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
  }
  function d3_map_has(key) {
    return d3_map_escape(key) in this._;
  }
  function d3_map_remove(key) {
    return (key = d3_map_escape(key)) in this._ && delete this._[key];
  }
  function d3_map_keys() {
    var keys = [];
    for (var key in this._) keys.push(d3_map_unescape(key));
    return keys;
  }
  function d3_map_size() {
    var size = 0;
    for (var key in this._) ++size;
    return size;
  }
  function d3_map_empty() {
    for (var key in this._) return false;
    return true;
  }
  d3.nest = function() {
    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
    function map(mapType, array, depth) {
      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
      while (++i < n) {
        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
          values.push(object);
        } else {
          valuesByKey.set(keyValue, [ object ]);
        }
      }
      if (mapType) {
        object = mapType();
        setter = function(keyValue, values) {
          object.set(keyValue, map(mapType, values, depth));
        };
      } else {
        object = {};
        setter = function(keyValue, values) {
          object[keyValue] = map(mapType, values, depth);
        };
      }
      valuesByKey.forEach(setter);
      return object;
    }
    function entries(map, depth) {
      if (depth >= keys.length) return map;
      var array = [], sortKey = sortKeys[depth++];
      map.forEach(function(key, keyMap) {
        array.push({
          key: key,
          values: entries(keyMap, depth)
        });
      });
      return sortKey ? array.sort(function(a, b) {
        return sortKey(a.key, b.key);
      }) : array;
    }
    nest.map = function(array, mapType) {
      return map(mapType, array, 0);
    };
    nest.entries = function(array) {
      return entries(map(d3.map, array, 0), 0);
    };
    nest.key = function(d) {
      keys.push(d);
      return nest;
    };
    nest.sortKeys = function(order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    };
    nest.sortValues = function(order) {
      sortValues = order;
      return nest;
    };
    nest.rollup = function(f) {
      rollup = f;
      return nest;
    };
    return nest;
  };
  d3.set = function(array) {
    var set = new d3_Set();
    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
    return set;
  };
  function d3_Set() {
    this._ = Object.create(null);
  }
  d3_class(d3_Set, {
    has: d3_map_has,
    add: function(key) {
      this._[d3_map_escape(key += "")] = true;
      return key;
    },
    remove: d3_map_remove,
    values: d3_map_keys,
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key));
    }
  });
  d3.behavior = {};
  function d3_identity(d) {
    return d;
  }
  d3.rebind = function(target, source) {
    var i = 1, n = arguments.length, method;
    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    return target;
  };
  function d3_rebind(target, source, method) {
    return function() {
      var value = method.apply(source, arguments);
      return value === source ? target : value;
    };
  }
  function d3_vendorSymbol(object, name) {
    if (name in object) return name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
      var prefixName = d3_vendorPrefixes[i] + name;
      if (prefixName in object) return prefixName;
    }
  }
  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
  function d3_noop() {}
  d3.dispatch = function() {
    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    return dispatch;
  };
  function d3_dispatch() {}
  d3_dispatch.prototype.on = function(type, listener) {
    var i = type.indexOf("."), name = "";
    if (i >= 0) {
      name = type.slice(i + 1);
      type = type.slice(0, i);
    }
    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
    if (arguments.length === 2) {
      if (listener == null) for (type in this) {
        if (this.hasOwnProperty(type)) this[type].on(name, null);
      }
      return this;
    }
  };
  function d3_dispatch_event(dispatch) {
    var listeners = [], listenerByName = new d3_Map();
    function event() {
      var z = listeners, i = -1, n = z.length, l;
      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
      return dispatch;
    }
    event.on = function(name, listener) {
      var l = listenerByName.get(name), i;
      if (arguments.length < 2) return l && l.on;
      if (l) {
        l.on = null;
        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
        listenerByName.remove(name);
      }
      if (listener) listeners.push(listenerByName.set(name, {
        on: listener
      }));
      return dispatch;
    };
    return event;
  }
  d3.event = null;
  function d3_eventPreventDefault() {
    d3.event.preventDefault();
  }
  function d3_eventSource() {
    var e = d3.event, s;
    while (s = e.sourceEvent) e = s;
    return e;
  }
  function d3_eventDispatch(target) {
    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    dispatch.of = function(thiz, argumentz) {
      return function(e1) {
        try {
          var e0 = e1.sourceEvent = d3.event;
          e1.target = target;
          d3.event = e1;
          dispatch[e1.type].apply(thiz, argumentz);
        } finally {
          d3.event = e0;
        }
      };
    };
    return dispatch;
  }
  d3.requote = function(s) {
    return s.replace(d3_requote_re, "\\$&");
  };
  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  var d3_subclass = {}.__proto__ ? function(object, prototype) {
    object.__proto__ = prototype;
  } : function(object, prototype) {
    for (var property in prototype) object[property] = prototype[property];
  };
  function d3_selection(groups) {
    d3_subclass(groups, d3_selectionPrototype);
    return groups;
  }
  var d3_select = function(s, n) {
    return n.querySelector(s);
  }, d3_selectAll = function(s, n) {
    return n.querySelectorAll(s);
  }, d3_selectMatches = function(n, s) {
    var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
    d3_selectMatches = function(n, s) {
      return d3_selectMatcher.call(n, s);
    };
    return d3_selectMatches(n, s);
  };
  if (typeof Sizzle === "function") {
    d3_select = function(s, n) {
      return Sizzle(s, n)[0] || null;
    };
    d3_selectAll = Sizzle;
    d3_selectMatches = Sizzle.matchesSelector;
  }
  d3.selection = function() {
    return d3.select(d3_document.documentElement);
  };
  var d3_selectionPrototype = d3.selection.prototype = [];
  d3_selectionPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, group, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selector(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_select(selector, this);
    };
  }
  d3_selectionPrototype.selectAll = function(selector) {
    var subgroups = [], subgroup, node;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
          subgroup.parentNode = node;
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selectorAll(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_selectAll(selector, this);
    };
  }
  var d3_nsXhtml = "http://www.w3.org/1999/xhtml";
  var d3_nsPrefix = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: d3_nsXhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  d3.ns = {
    prefix: d3_nsPrefix,
    qualify: function(name) {
      var i = name.indexOf(":"), prefix = name;
      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
      return d3_nsPrefix.hasOwnProperty(prefix) ? {
        space: d3_nsPrefix[prefix],
        local: name
      } : name;
    }
  };
  d3_selectionPrototype.attr = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node();
        name = d3.ns.qualify(name);
        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
      }
      for (value in name) this.each(d3_selection_attr(value, name[value]));
      return this;
    }
    return this.each(d3_selection_attr(name, value));
  };
  function d3_selection_attr(name, value) {
    name = d3.ns.qualify(name);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrConstant() {
      this.setAttribute(name, value);
    }
    function attrConstantNS() {
      this.setAttributeNS(name.space, name.local, value);
    }
    function attrFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
    }
    function attrFunctionNS() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
    }
    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
  }
  function d3_collapse(s) {
    return s.trim().replace(/\s+/g, " ");
  }
  d3_selectionPrototype.classed = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
        if (value = node.classList) {
          while (++i < n) if (!value.contains(name[i])) return false;
        } else {
          value = node.getAttribute("class");
          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
        }
        return true;
      }
      for (value in name) this.each(d3_selection_classed(value, name[value]));
      return this;
    }
    return this.each(d3_selection_classed(name, value));
  };
  function d3_selection_classedRe(name) {
    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
  }
  function d3_selection_classes(name) {
    return (name + "").trim().split(/^|\s+/);
  }
  function d3_selection_classed(name, value) {
    name = d3_selection_classes(name).map(d3_selection_classedName);
    var n = name.length;
    function classedConstant() {
      var i = -1;
      while (++i < n) name[i](this, value);
    }
    function classedFunction() {
      var i = -1, x = value.apply(this, arguments);
      while (++i < n) name[i](this, x);
    }
    return typeof value === "function" ? classedFunction : classedConstant;
  }
  function d3_selection_classedName(name) {
    var re = d3_selection_classedRe(name);
    return function(node, value) {
      if (c = node.classList) return value ? c.add(name) : c.remove(name);
      var c = node.getAttribute("class") || "";
      if (value) {
        re.lastIndex = 0;
        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
      } else {
        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
      }
    };
  }
  d3_selectionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
        return this;
      }
      if (n < 2) {
        var node = this.node();
        return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
      }
      priority = "";
    }
    return this.each(d3_selection_style(name, value, priority));
  };
  function d3_selection_style(name, value, priority) {
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleConstant() {
      this.style.setProperty(name, value, priority);
    }
    function styleFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
    }
    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
  }
  d3_selectionPrototype.property = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") return this.node()[name];
      for (value in name) this.each(d3_selection_property(value, name[value]));
      return this;
    }
    return this.each(d3_selection_property(name, value));
  };
  function d3_selection_property(name, value) {
    function propertyNull() {
      delete this[name];
    }
    function propertyConstant() {
      this[name] = value;
    }
    function propertyFunction() {
      var x = value.apply(this, arguments);
      if (x == null) delete this[name]; else this[name] = x;
    }
    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
  }
  d3_selectionPrototype.text = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    } : value == null ? function() {
      this.textContent = "";
    } : function() {
      this.textContent = value;
    }) : this.node().textContent;
  };
  d3_selectionPrototype.html = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    } : value == null ? function() {
      this.innerHTML = "";
    } : function() {
      this.innerHTML = value;
    }) : this.node().innerHTML;
  };
  d3_selectionPrototype.append = function(name) {
    name = d3_selection_creator(name);
    return this.select(function() {
      return this.appendChild(name.apply(this, arguments));
    });
  };
  function d3_selection_creator(name) {
    function create() {
      var document = this.ownerDocument, namespace = this.namespaceURI;
      return namespace === d3_nsXhtml && document.documentElement.namespaceURI === d3_nsXhtml ? document.createElement(name) : document.createElementNS(namespace, name);
    }
    function createNS() {
      return this.ownerDocument.createElementNS(name.space, name.local);
    }
    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
  }
  d3_selectionPrototype.insert = function(name, before) {
    name = d3_selection_creator(name);
    before = d3_selection_selector(before);
    return this.select(function() {
      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
    });
  };
  d3_selectionPrototype.remove = function() {
    return this.each(d3_selectionRemove);
  };
  function d3_selectionRemove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  d3_selectionPrototype.data = function(value, key) {
    var i = -1, n = this.length, group, node;
    if (!arguments.length) {
      value = new Array(n = (group = this[0]).length);
      while (++i < n) {
        if (node = group[i]) {
          value[i] = node.__data__;
        }
      }
      return value;
    }
    function bind(group, groupData) {
      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
      if (key) {
        var nodeByKeyValue = new d3_Map(), keyValues = new Array(n), keyValue;
        for (i = -1; ++i < n; ) {
          if (node = group[i]) {
            if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
              exitNodes[i] = node;
            } else {
              nodeByKeyValue.set(keyValue, node);
            }
            keyValues[i] = keyValue;
          }
        }
        for (i = -1; ++i < m; ) {
          if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          } else if (node !== true) {
            updateNodes[i] = node;
            node.__data__ = nodeData;
          }
          nodeByKeyValue.set(keyValue, true);
        }
        for (i = -1; ++i < n; ) {
          if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
            exitNodes[i] = group[i];
          }
        }
      } else {
        for (i = -1; ++i < n0; ) {
          node = group[i];
          nodeData = groupData[i];
          if (node) {
            node.__data__ = nodeData;
            updateNodes[i] = node;
          } else {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          }
        }
        for (;i < m; ++i) {
          enterNodes[i] = d3_selection_dataNode(groupData[i]);
        }
        for (;i < n; ++i) {
          exitNodes[i] = group[i];
        }
      }
      enterNodes.update = updateNodes;
      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
      enter.push(enterNodes);
      update.push(updateNodes);
      exit.push(exitNodes);
    }
    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
    if (typeof value === "function") {
      while (++i < n) {
        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
      }
    } else {
      while (++i < n) {
        bind(group = this[i], value);
      }
    }
    update.enter = function() {
      return enter;
    };
    update.exit = function() {
      return exit;
    };
    return update;
  };
  function d3_selection_dataNode(data) {
    return {
      __data__: data
    };
  }
  d3_selectionPrototype.datum = function(value) {
    return arguments.length ? this.property("__data__", value) : this.property("__data__");
  };
  d3_selectionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_filter(selector) {
    return function() {
      return d3_selectMatches(this, selector);
    };
  }
  d3_selectionPrototype.order = function() {
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  };
  d3_selectionPrototype.sort = function(comparator) {
    comparator = d3_selection_sortComparator.apply(this, arguments);
    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
    return this.order();
  };
  function d3_selection_sortComparator(comparator) {
    if (!arguments.length) comparator = d3_ascending;
    return function(a, b) {
      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
    };
  }
  d3_selectionPrototype.each = function(callback) {
    return d3_selection_each(this, function(node, i, j) {
      callback.call(node, node.__data__, i, j);
    });
  };
  function d3_selection_each(groups, callback) {
    for (var j = 0, m = groups.length; j < m; j++) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
        if (node = group[i]) callback(node, i, j);
      }
    }
    return groups;
  }
  d3_selectionPrototype.call = function(callback) {
    var args = d3_array(arguments);
    callback.apply(args[0] = this, args);
    return this;
  };
  d3_selectionPrototype.empty = function() {
    return !this.node();
  };
  d3_selectionPrototype.node = function() {
    for (var j = 0, m = this.length; j < m; j++) {
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        var node = group[i];
        if (node) return node;
      }
    }
    return null;
  };
  d3_selectionPrototype.size = function() {
    var n = 0;
    d3_selection_each(this, function() {
      ++n;
    });
    return n;
  };
  function d3_selection_enter(selection) {
    d3_subclass(selection, d3_selection_enterPrototype);
    return selection;
  }
  var d3_selection_enterPrototype = [];
  d3.selection.enter = d3_selection_enter;
  d3.selection.enter.prototype = d3_selection_enterPrototype;
  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
  d3_selection_enterPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, upgroup, group, node;
    for (var j = -1, m = this.length; ++j < m; ) {
      upgroup = (group = this[j]).update;
      subgroups.push(subgroup = []);
      subgroup.parentNode = group.parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
          subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  d3_selection_enterPrototype.insert = function(name, before) {
    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
    return d3_selectionPrototype.insert.call(this, name, before);
  };
  function d3_selection_enterInsertBefore(enter) {
    var i0, j0;
    return function(d, i, j) {
      var group = enter[j].update, n = group.length, node;
      if (j != j0) j0 = j, i0 = 0;
      if (i >= i0) i0 = i + 1;
      while (!(node = group[i0]) && ++i0 < n) ;
      return node;
    };
  }
  d3.select = function(node) {
    var group;
    if (typeof node === "string") {
      group = [ d3_select(node, d3_document) ];
      group.parentNode = d3_document.documentElement;
    } else {
      group = [ node ];
      group.parentNode = d3_documentElement(node);
    }
    return d3_selection([ group ]);
  };
  d3.selectAll = function(nodes) {
    var group;
    if (typeof nodes === "string") {
      group = d3_array(d3_selectAll(nodes, d3_document));
      group.parentNode = d3_document.documentElement;
    } else {
      group = d3_array(nodes);
      group.parentNode = null;
    }
    return d3_selection([ group ]);
  };
  d3_selectionPrototype.on = function(type, listener, capture) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof type !== "string") {
        if (n < 2) listener = false;
        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
        return this;
      }
      if (n < 2) return (n = this.node()["__on" + type]) && n._;
      capture = false;
    }
    return this.each(d3_selection_on(type, listener, capture));
  };
  function d3_selection_on(type, listener, capture) {
    var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
    if (i > 0) type = type.slice(0, i);
    var filter = d3_selection_onFilters.get(type);
    if (filter) type = filter, wrap = d3_selection_onFilter;
    function onRemove() {
      var l = this[name];
      if (l) {
        this.removeEventListener(type, l, l.$);
        delete this[name];
      }
    }
    function onAdd() {
      var l = wrap(listener, d3_array(arguments));
      onRemove.call(this);
      this.addEventListener(type, this[name] = l, l.$ = capture);
      l._ = listener;
    }
    function removeAll() {
      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
      for (var name in this) {
        if (match = name.match(re)) {
          var l = this[name];
          this.removeEventListener(match[1], l, l.$);
          delete this[name];
        }
      }
    }
    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
  }
  var d3_selection_onFilters = d3.map({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  });
  if (d3_document) {
    d3_selection_onFilters.forEach(function(k) {
      if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
    });
  }
  function d3_selection_onListener(listener, argumentz) {
    return function(e) {
      var o = d3.event;
      d3.event = e;
      argumentz[0] = this.__data__;
      try {
        listener.apply(this, argumentz);
      } finally {
        d3.event = o;
      }
    };
  }
  function d3_selection_onFilter(listener, argumentz) {
    var l = d3_selection_onListener(listener, argumentz);
    return function(e) {
      var target = this, related = e.relatedTarget;
      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
        l.call(target, e);
      }
    };
  }
  var d3_event_dragSelect, d3_event_dragId = 0;
  function d3_event_dragSuppress(node) {
    var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
    if (d3_event_dragSelect == null) {
      d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
    }
    if (d3_event_dragSelect) {
      var style = d3_documentElement(node).style, select = style[d3_event_dragSelect];
      style[d3_event_dragSelect] = "none";
    }
    return function(suppressClick) {
      w.on(name, null);
      if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
      if (suppressClick) {
        var off = function() {
          w.on(click, null);
        };
        w.on(click, function() {
          d3_eventPreventDefault();
          off();
        }, true);
        setTimeout(off, 0);
      }
    };
  }
  d3.mouse = function(container) {
    return d3_mousePoint(container, d3_eventSource());
  };
  var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
  function d3_mousePoint(container, e) {
    if (e.changedTouches) e = e.changedTouches[0];
    var svg = container.ownerSVGElement || container;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      if (d3_mouse_bug44083 < 0) {
        var window = d3_window(container);
        if (window.scrollX || window.scrollY) {
          svg = d3.select("body").append("svg").style({
            position: "absolute",
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            border: "none"
          }, "important");
          var ctm = svg[0][0].getScreenCTM();
          d3_mouse_bug44083 = !(ctm.f || ctm.e);
          svg.remove();
        }
      }
      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY; else point.x = e.clientX, 
      point.y = e.clientY;
      point = point.matrixTransform(container.getScreenCTM().inverse());
      return [ point.x, point.y ];
    }
    var rect = container.getBoundingClientRect();
    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
  }
  d3.touch = function(container, touches, identifier) {
    if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
    if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
      if ((touch = touches[i]).identifier === identifier) {
        return d3_mousePoint(container, touch);
      }
    }
  };
  d3.behavior.drag = function() {
    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");
    function drag() {
      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
    }
    function dragstart(id, position, subject, move, end) {
      return function() {
        var that = this, target = d3.event.target.correspondingElement || d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(target), position0 = position(parent, dragId);
        if (origin) {
          dragOffset = origin.apply(that, arguments);
          dragOffset = [ dragOffset.x - position0[0], dragOffset.y - position0[1] ];
        } else {
          dragOffset = [ 0, 0 ];
        }
        dispatch({
          type: "dragstart"
        });
        function moved() {
          var position1 = position(parent, dragId), dx, dy;
          if (!position1) return;
          dx = position1[0] - position0[0];
          dy = position1[1] - position0[1];
          dragged |= dx | dy;
          position0 = position1;
          dispatch({
            type: "drag",
            x: position1[0] + dragOffset[0],
            y: position1[1] + dragOffset[1],
            dx: dx,
            dy: dy
          });
        }
        function ended() {
          if (!position(parent, dragId)) return;
          dragSubject.on(move + dragName, null).on(end + dragName, null);
          dragRestore(dragged);
          dispatch({
            type: "dragend"
          });
        }
      };
    }
    drag.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return drag;
    };
    return d3.rebind(drag, event, "on");
  };
  function d3_behavior_dragTouchId() {
    return d3.event.changedTouches[0].identifier;
  }
  d3.touches = function(container, touches) {
    if (arguments.length < 2) touches = d3_eventSource().touches;
    return touches ? d3_array(touches).map(function(touch) {
      var point = d3_mousePoint(container, touch);
      point.identifier = touch.identifier;
      return point;
    }) : [];
  };
  var ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;
  function d3_sgn(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  }
  function d3_cross2d(a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  }
  function d3_acos(x) {
    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
  }
  function d3_asin(x) {
    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
  }
  function d3_sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
  }
  function d3_cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
  }
  function d3_tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
  }
  function d3_haversin(x) {
    return (x = Math.sin(x / 2)) * x;
  }
  var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
  d3.interpolateZoom = function(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < ε2) {
      S = Math.log(w1 / w0) / ρ;
      i = function(t) {
        return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * t * S) ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / ρ;
      i = function(t) {
        var s = t * S, coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
        return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
      };
    }
    i.duration = S * 1e3;
    return i;
  };
  d3.behavior.zoom = function() {
    var view = {
      x: 0,
      y: 0,
      k: 1
    }, translate0, center0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, duration = 250, zooming = 0, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
    if (!d3_behavior_zoomWheel) {
      d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
        return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
      }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
        return d3.event.wheelDelta;
      }, "mousewheel") : (d3_behavior_zoomDelta = function() {
        return -d3.event.detail;
      }, "MozMousePixelScroll");
    }
    function zoom(g) {
      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
    }
    zoom.event = function(g) {
      g.each(function() {
        var dispatch = event.of(this, arguments), view1 = view;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.zoom", function() {
            view = this.__chart__ || {
              x: 0,
              y: 0,
              k: 1
            };
            zoomstarted(dispatch);
          }).tween("zoom:zoom", function() {
            var dx = size[0], dy = size[1], cx = center0 ? center0[0] : dx / 2, cy = center0 ? center0[1] : dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
            return function(t) {
              var l = i(t), k = dx / l[2];
              this.__chart__ = view = {
                x: cx - l[0] * k,
                y: cy - l[1] * k,
                k: k
              };
              zoomed(dispatch);
            };
          }).each("interrupt.zoom", function() {
            zoomended(dispatch);
          }).each("end.zoom", function() {
            zoomended(dispatch);
          });
        } else {
          this.__chart__ = view;
          zoomstarted(dispatch);
          zoomed(dispatch);
          zoomended(dispatch);
        }
      });
    };
    zoom.translate = function(_) {
      if (!arguments.length) return [ view.x, view.y ];
      view = {
        x: +_[0],
        y: +_[1],
        k: view.k
      };
      rescale();
      return zoom;
    };
    zoom.scale = function(_) {
      if (!arguments.length) return view.k;
      view = {
        x: view.x,
        y: view.y,
        k: null
      };
      scaleTo(+_);
      rescale();
      return zoom;
    };
    zoom.scaleExtent = function(_) {
      if (!arguments.length) return scaleExtent;
      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.center = function(_) {
      if (!arguments.length) return center;
      center = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.size = function(_) {
      if (!arguments.length) return size;
      size = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.duration = function(_) {
      if (!arguments.length) return duration;
      duration = +_;
      return zoom;
    };
    zoom.x = function(z) {
      if (!arguments.length) return x1;
      x1 = z;
      x0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    zoom.y = function(z) {
      if (!arguments.length) return y1;
      y1 = z;
      y0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    function location(p) {
      return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
    }
    function point(l) {
      return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
    }
    function scaleTo(s) {
      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
    }
    function translateTo(p, l) {
      l = point(l);
      view.x += p[0] - l[0];
      view.y += p[1] - l[1];
    }
    function zoomTo(that, p, l, k) {
      that.__chart__ = {
        x: view.x,
        y: view.y,
        k: view.k
      };
      scaleTo(Math.pow(2, k));
      translateTo(center0 = p, l);
      that = d3.select(that);
      if (duration > 0) that = that.transition().duration(duration);
      that.call(zoom.event);
    }
    function rescale() {
      if (x1) x1.domain(x0.range().map(function(x) {
        return (x - view.x) / view.k;
      }).map(x0.invert));
      if (y1) y1.domain(y0.range().map(function(y) {
        return (y - view.y) / view.k;
      }).map(y0.invert));
    }
    function zoomstarted(dispatch) {
      if (!zooming++) dispatch({
        type: "zoomstart"
      });
    }
    function zoomed(dispatch) {
      rescale();
      dispatch({
        type: "zoom",
        scale: view.k,
        translate: [ view.x, view.y ]
      });
    }
    function zoomended(dispatch) {
      if (!--zooming) dispatch({
        type: "zoomend"
      }), center0 = null;
    }
    function mousedowned() {
      var that = this, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress(that);
      d3_selection_interrupt.call(that);
      zoomstarted(dispatch);
      function moved() {
        dragged = 1;
        translateTo(d3.mouse(that), location0);
        zoomed(dispatch);
      }
      function ended() {
        subject.on(mousemove, null).on(mouseup, null);
        dragRestore(dragged);
        zoomended(dispatch);
      }
    }
    function touchstarted() {
      var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d3.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d3.select(that), dragRestore = d3_event_dragSuppress(that);
      started();
      zoomstarted(dispatch);
      subject.on(mousedown, null).on(touchstart, started);
      function relocate() {
        var touches = d3.touches(that);
        scale0 = view.k;
        touches.forEach(function(t) {
          if (t.identifier in locations0) locations0[t.identifier] = location(t);
        });
        return touches;
      }
      function started() {
        var target = d3.event.target;
        d3.select(target).on(touchmove, moved).on(touchend, ended);
        targets.push(target);
        var changed = d3.event.changedTouches;
        for (var i = 0, n = changed.length; i < n; ++i) {
          locations0[changed[i].identifier] = null;
        }
        var touches = relocate(), now = Date.now();
        if (touches.length === 1) {
          if (now - touchtime < 500) {
            var p = touches[0];
            zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
            d3_eventPreventDefault();
          }
          touchtime = now;
        } else if (touches.length > 1) {
          var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
          distance0 = dx * dx + dy * dy;
        }
      }
      function moved() {
        var touches = d3.touches(that), p0, l0, p1, l1;
        d3_selection_interrupt.call(that);
        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
          p1 = touches[i];
          if (l1 = locations0[p1.identifier]) {
            if (l0) break;
            p0 = p1, l0 = l1;
          }
        }
        if (l1) {
          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
          p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
          l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
          scaleTo(scale1 * scale0);
        }
        touchtime = null;
        translateTo(p0, l0);
        zoomed(dispatch);
      }
      function ended() {
        if (d3.event.touches.length) {
          var changed = d3.event.changedTouches;
          for (var i = 0, n = changed.length; i < n; ++i) {
            delete locations0[changed[i].identifier];
          }
          for (var identifier in locations0) {
            return void relocate();
          }
        }
        d3.selectAll(targets).on(zoomName, null);
        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
        dragRestore();
        zoomended(dispatch);
      }
    }
    function mousewheeled() {
      var dispatch = event.of(this, arguments);
      if (mousewheelTimer) clearTimeout(mousewheelTimer); else d3_selection_interrupt.call(this), 
      translate0 = location(center0 = center || d3.mouse(this)), zoomstarted(dispatch);
      mousewheelTimer = setTimeout(function() {
        mousewheelTimer = null;
        zoomended(dispatch);
      }, 50);
      d3_eventPreventDefault();
      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
      translateTo(center0, translate0);
      zoomed(dispatch);
    }
    function dblclicked() {
      var p = d3.mouse(this), k = Math.log(view.k) / Math.LN2;
      zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
    }
    return d3.rebind(zoom, event, "on");
  };
  var d3_behavior_zoomInfinity = [ 0, Infinity ], d3_behavior_zoomDelta, d3_behavior_zoomWheel;
  d3.color = d3_color;
  function d3_color() {}
  d3_color.prototype.toString = function() {
    return this.rgb() + "";
  };
  d3.hsl = d3_hsl;
  function d3_hsl(h, s, l) {
    return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
  }
  var d3_hslPrototype = d3_hsl.prototype = new d3_color();
  d3_hslPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, this.l / k);
  };
  d3_hslPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, k * this.l);
  };
  d3_hslPrototype.rgb = function() {
    return d3_hsl_rgb(this.h, this.s, this.l);
  };
  function d3_hsl_rgb(h, s, l) {
    var m1, m2;
    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
    l = l < 0 ? 0 : l > 1 ? 1 : l;
    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
    m1 = 2 * l - m2;
    function v(h) {
      if (h > 360) h -= 360; else if (h < 0) h += 360;
      if (h < 60) return m1 + (m2 - m1) * h / 60;
      if (h < 180) return m2;
      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
      return m1;
    }
    function vv(h) {
      return Math.round(v(h) * 255);
    }
    return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
  }
  d3.hcl = d3_hcl;
  function d3_hcl(h, c, l) {
    return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
  }
  var d3_hclPrototype = d3_hcl.prototype = new d3_color();
  d3_hclPrototype.brighter = function(k) {
    return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.darker = function(k) {
    return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.rgb = function() {
    return d3_hcl_lab(this.h, this.c, this.l).rgb();
  };
  function d3_hcl_lab(h, c, l) {
    if (isNaN(h)) h = 0;
    if (isNaN(c)) c = 0;
    return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
  }
  d3.lab = d3_lab;
  function d3_lab(l, a, b) {
    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
  }
  var d3_lab_K = 18;
  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
  var d3_labPrototype = d3_lab.prototype = new d3_color();
  d3_labPrototype.brighter = function(k) {
    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.darker = function(k) {
    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.rgb = function() {
    return d3_lab_rgb(this.l, this.a, this.b);
  };
  function d3_lab_rgb(l, a, b) {
    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
    x = d3_lab_xyz(x) * d3_lab_X;
    y = d3_lab_xyz(y) * d3_lab_Y;
    z = d3_lab_xyz(z) * d3_lab_Z;
    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
  }
  function d3_lab_hcl(l, a, b) {
    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
  }
  function d3_lab_xyz(x) {
    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
  }
  function d3_xyz_lab(x) {
    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
  }
  function d3_xyz_rgb(r) {
    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
  }
  d3.rgb = d3_rgb;
  function d3_rgb(r, g, b) {
    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
  }
  function d3_rgbNumber(value) {
    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
  }
  function d3_rgbString(value) {
    return d3_rgbNumber(value) + "";
  }
  var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
  d3_rgbPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    var r = this.r, g = this.g, b = this.b, i = 30;
    if (!r && !g && !b) return new d3_rgb(i, i, i);
    if (r && r < i) r = i;
    if (g && g < i) g = i;
    if (b && b < i) b = i;
    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
  };
  d3_rgbPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_rgb(k * this.r, k * this.g, k * this.b);
  };
  d3_rgbPrototype.hsl = function() {
    return d3_rgb_hsl(this.r, this.g, this.b);
  };
  d3_rgbPrototype.toString = function() {
    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
  };
  function d3_rgb_hex(v) {
    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
  }
  function d3_rgb_parse(format, rgb, hsl) {
    var r = 0, g = 0, b = 0, m1, m2, color;
    m1 = /([a-z]+)\((.*)\)/.exec(format = format.toLowerCase());
    if (m1) {
      m2 = m1[2].split(",");
      switch (m1[1]) {
       case "hsl":
        {
          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
        }

       case "rgb":
        {
          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
        }
      }
    }
    if (color = d3_rgb_names.get(format)) {
      return rgb(color.r, color.g, color.b);
    }
    if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
      if (format.length === 4) {
        r = (color & 3840) >> 4;
        r = r >> 4 | r;
        g = color & 240;
        g = g >> 4 | g;
        b = color & 15;
        b = b << 4 | b;
      } else if (format.length === 7) {
        r = (color & 16711680) >> 16;
        g = (color & 65280) >> 8;
        b = color & 255;
      }
    }
    return rgb(r, g, b);
  }
  function d3_rgb_hsl(r, g, b) {
    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
    if (d) {
      s = l < .5 ? d / (max + min) : d / (2 - max - min);
      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
      h *= 60;
    } else {
      h = NaN;
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new d3_hsl(h, s, l);
  }
  function d3_rgb_lab(r, g, b) {
    r = d3_rgb_xyz(r);
    g = d3_rgb_xyz(g);
    b = d3_rgb_xyz(b);
    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
  }
  function d3_rgb_xyz(r) {
    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
  }
  function d3_rgb_parseNumber(c) {
    var f = parseFloat(c);
    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
  }
  var d3_rgb_names = d3.map({
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  });
  d3_rgb_names.forEach(function(key, value) {
    d3_rgb_names.set(key, d3_rgbNumber(value));
  });
  function d3_functor(v) {
    return typeof v === "function" ? v : function() {
      return v;
    };
  }
  d3.functor = d3_functor;
  d3.xhr = d3_xhrType(d3_identity);
  function d3_xhrType(response) {
    return function(url, mimeType, callback) {
      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
      mimeType = null;
      return d3_xhr(url, mimeType, response, callback);
    };
  }
  function d3_xhr(url, mimeType, response, callback) {
    var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
    if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
      request.readyState > 3 && respond();
    };
    function respond() {
      var status = request.status, result;
      if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
        try {
          result = response.call(xhr, request);
        } catch (e) {
          dispatch.error.call(xhr, e);
          return;
        }
        dispatch.load.call(xhr, result);
      } else {
        dispatch.error.call(xhr, request);
      }
    }
    request.onprogress = function(event) {
      var o = d3.event;
      d3.event = event;
      try {
        dispatch.progress.call(xhr, request);
      } finally {
        d3.event = o;
      }
    };
    xhr.header = function(name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers[name];
      if (value == null) delete headers[name]; else headers[name] = value + "";
      return xhr;
    };
    xhr.mimeType = function(value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return xhr;
    };
    xhr.responseType = function(value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return xhr;
    };
    xhr.response = function(value) {
      response = value;
      return xhr;
    };
    [ "get", "post" ].forEach(function(method) {
      xhr[method] = function() {
        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
      };
    });
    xhr.send = function(method, data, callback) {
      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
      request.open(method, url, true);
      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
      if (responseType != null) request.responseType = responseType;
      if (callback != null) xhr.on("error", callback).on("load", function(request) {
        callback(null, request);
      });
      dispatch.beforesend.call(xhr, request);
      request.send(data == null ? null : data);
      return xhr;
    };
    xhr.abort = function() {
      request.abort();
      return xhr;
    };
    d3.rebind(xhr, dispatch, "on");
    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
  }
  function d3_xhr_fixCallback(callback) {
    return callback.length === 1 ? function(error, request) {
      callback(error == null ? request : null);
    } : callback;
  }
  function d3_xhrHasResponse(request) {
    var type = request.responseType;
    return type && type !== "text" ? request.response : request.responseText;
  }
  d3.dsv = function(delimiter, mimeType) {
    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
    function dsv(url, row, callback) {
      if (arguments.length < 3) callback = row, row = null;
      var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
      xhr.row = function(_) {
        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
      };
      return xhr;
    }
    function response(request) {
      return dsv.parse(request.responseText);
    }
    function typedResponse(f) {
      return function(request) {
        return dsv.parse(request.responseText, f);
      };
    }
    dsv.parse = function(text, f) {
      var o;
      return dsv.parseRows(text, function(row, i) {
        if (o) return o(row, i - 1);
        var a = new Function("d", "return {" + row.map(function(name, i) {
          return JSON.stringify(name) + ": d[" + i + "]";
        }).join(",") + "}");
        o = f ? function(row, i) {
          return f(a(row), i);
        } : a;
      });
    };
    dsv.parseRows = function(text, f) {
      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
      function token() {
        if (I >= N) return EOF;
        if (eol) return eol = false, EOL;
        var j = I;
        if (text.charCodeAt(j) === 34) {
          var i = j;
          while (i++ < N) {
            if (text.charCodeAt(i) === 34) {
              if (text.charCodeAt(i + 1) !== 34) break;
              ++i;
            }
          }
          I = i + 2;
          var c = text.charCodeAt(i + 1);
          if (c === 13) {
            eol = true;
            if (text.charCodeAt(i + 2) === 10) ++I;
          } else if (c === 10) {
            eol = true;
          }
          return text.slice(j + 1, i).replace(/""/g, '"');
        }
        while (I < N) {
          var c = text.charCodeAt(I++), k = 1;
          if (c === 10) eol = true; else if (c === 13) {
            eol = true;
            if (text.charCodeAt(I) === 10) ++I, ++k;
          } else if (c !== delimiterCode) continue;
          return text.slice(j, I - k);
        }
        return text.slice(j);
      }
      while ((t = token()) !== EOF) {
        var a = [];
        while (t !== EOL && t !== EOF) {
          a.push(t);
          t = token();
        }
        if (f && (a = f(a, n++)) == null) continue;
        rows.push(a);
      }
      return rows;
    };
    dsv.format = function(rows) {
      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
      var fieldSet = new d3_Set(), fields = [];
      rows.forEach(function(row) {
        for (var field in row) {
          if (!fieldSet.has(field)) {
            fields.push(fieldSet.add(field));
          }
        }
      });
      return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
        return fields.map(function(field) {
          return formatValue(row[field]);
        }).join(delimiter);
      })).join("\n");
    };
    dsv.formatRows = function(rows) {
      return rows.map(formatRow).join("\n");
    };
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
    function formatValue(text) {
      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
    }
    return dsv;
  };
  d3.csv = d3.dsv(",", "text/csv");
  d3.tsv = d3.dsv("	", "text/tab-separated-values");
  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
    setTimeout(callback, 17);
  };
  d3.timer = function() {
    d3_timer.apply(this, arguments);
  };
  function d3_timer(callback, delay, then) {
    var n = arguments.length;
    if (n < 2) delay = 0;
    if (n < 3) then = Date.now();
    var time = then + delay, timer = {
      c: callback,
      t: time,
      n: null
    };
    if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
    d3_timer_queueTail = timer;
    if (!d3_timer_interval) {
      d3_timer_timeout = clearTimeout(d3_timer_timeout);
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
    return timer;
  }
  function d3_timer_step() {
    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
    if (delay > 24) {
      if (isFinite(delay)) {
        clearTimeout(d3_timer_timeout);
        d3_timer_timeout = setTimeout(d3_timer_step, delay);
      }
      d3_timer_interval = 0;
    } else {
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  }
  d3.timer.flush = function() {
    d3_timer_mark();
    d3_timer_sweep();
  };
  function d3_timer_mark() {
    var now = Date.now(), timer = d3_timer_queueHead;
    while (timer) {
      if (now >= timer.t && timer.c(now - timer.t)) timer.c = null;
      timer = timer.n;
    }
    return now;
  }
  function d3_timer_sweep() {
    var t0, t1 = d3_timer_queueHead, time = Infinity;
    while (t1) {
      if (t1.c) {
        if (t1.t < time) time = t1.t;
        t1 = (t0 = t1).n;
      } else {
        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
      }
    }
    d3_timer_queueTail = t0;
    return time;
  }
  function d3_format_precision(x, p) {
    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
  }
  d3.round = function(x, n) {
    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
  };
  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
  d3.formatPrefix = function(value, precision) {
    var i = 0;
    if (value = +value) {
      if (value < 0) value *= -1;
      if (precision) value = d3.round(value, d3_format_precision(value, precision));
      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
      i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
    }
    return d3_formatPrefixes[8 + i / 3];
  };
  function d3_formatPrefix(d, i) {
    var k = Math.pow(10, abs(8 - i) * 3);
    return {
      scale: i > 8 ? function(d) {
        return d / k;
      } : function(d) {
        return d * k;
      },
      symbol: d
    };
  }
  function d3_locale_numberFormat(locale) {
    var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping && locale_thousands ? function(value, width) {
      var i = value.length, t = [], j = 0, g = locale_grouping[0], length = 0;
      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = locale_grouping[j = (j + 1) % locale_grouping.length];
      }
      return t.reverse().join(locale_thousands);
    } : d3_identity;
    return function(specifier) {
      var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false, exponent = true;
      if (precision) precision = +precision.substring(1);
      if (zfill || fill === "0" && align === "=") {
        zfill = fill = "0";
        align = "=";
      }
      switch (type) {
       case "n":
        comma = true;
        type = "g";
        break;

       case "%":
        scale = 100;
        suffix = "%";
        type = "f";
        break;

       case "p":
        scale = 100;
        suffix = "%";
        type = "r";
        break;

       case "b":
       case "o":
       case "x":
       case "X":
        if (symbol === "#") prefix = "0" + type.toLowerCase();

       case "c":
        exponent = false;

       case "d":
        integer = true;
        precision = 0;
        break;

       case "s":
        scale = -1;
        type = "r";
        break;
      }
      if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
      if (type == "r" && !precision) type = "g";
      if (precision != null) {
        if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
      }
      type = d3_format_types.get(type) || d3_format_typeDefault;
      var zcomma = zfill && comma;
      return function(value) {
        var fullSuffix = suffix;
        if (integer && value % 1) return "";
        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
        if (scale < 0) {
          var unit = d3.formatPrefix(value, precision);
          value = unit.scale(value);
          fullSuffix = unit.symbol + suffix;
        } else {
          value *= scale;
        }
        value = type(value, precision);
        var i = value.lastIndexOf("."), before, after;
        if (i < 0) {
          var j = exponent ? value.lastIndexOf("e") : -1;
          if (j < 0) before = value, after = ""; else before = value.substring(0, j), after = value.substring(j);
        } else {
          before = value.substring(0, i);
          after = locale_decimal + value.substring(i + 1);
        }
        if (!zfill && comma) before = formatGroup(before, Infinity);
        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
        if (zcomma) before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
        negative += prefix;
        value = before + after;
        return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
      };
    };
  }
  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
  var d3_format_types = d3.map({
    b: function(x) {
      return x.toString(2);
    },
    c: function(x) {
      return String.fromCharCode(x);
    },
    o: function(x) {
      return x.toString(8);
    },
    x: function(x) {
      return x.toString(16);
    },
    X: function(x) {
      return x.toString(16).toUpperCase();
    },
    g: function(x, p) {
      return x.toPrecision(p);
    },
    e: function(x, p) {
      return x.toExponential(p);
    },
    f: function(x, p) {
      return x.toFixed(p);
    },
    r: function(x, p) {
      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
    }
  });
  function d3_format_typeDefault(x) {
    return x + "";
  }
  var d3_time = d3.time = {}, d3_date = Date;
  function d3_date_utc() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }
  d3_date_utc.prototype = {
    getDate: function() {
      return this._.getUTCDate();
    },
    getDay: function() {
      return this._.getUTCDay();
    },
    getFullYear: function() {
      return this._.getUTCFullYear();
    },
    getHours: function() {
      return this._.getUTCHours();
    },
    getMilliseconds: function() {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function() {
      return this._.getUTCMinutes();
    },
    getMonth: function() {
      return this._.getUTCMonth();
    },
    getSeconds: function() {
      return this._.getUTCSeconds();
    },
    getTime: function() {
      return this._.getTime();
    },
    getTimezoneOffset: function() {
      return 0;
    },
    valueOf: function() {
      return this._.valueOf();
    },
    setDate: function() {
      d3_time_prototype.setUTCDate.apply(this._, arguments);
    },
    setDay: function() {
      d3_time_prototype.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function() {
      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function() {
      d3_time_prototype.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function() {
      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function() {
      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function() {
      d3_time_prototype.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function() {
      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function() {
      d3_time_prototype.setTime.apply(this._, arguments);
    }
  };
  var d3_time_prototype = Date.prototype;
  function d3_time_interval(local, step, number) {
    function round(date) {
      var d0 = local(date), d1 = offset(d0, 1);
      return date - d0 < d1 - date ? d0 : d1;
    }
    function ceil(date) {
      step(date = local(new d3_date(date - 1)), 1);
      return date;
    }
    function offset(date, k) {
      step(date = new d3_date(+date), k);
      return date;
    }
    function range(t0, t1, dt) {
      var time = ceil(t0), times = [];
      if (dt > 1) {
        while (time < t1) {
          if (!(number(time) % dt)) times.push(new Date(+time));
          step(time, 1);
        }
      } else {
        while (time < t1) times.push(new Date(+time)), step(time, 1);
      }
      return times;
    }
    function range_utc(t0, t1, dt) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = t0;
        return range(utc, t1, dt);
      } finally {
        d3_date = Date;
      }
    }
    local.floor = local;
    local.round = round;
    local.ceil = ceil;
    local.offset = offset;
    local.range = range;
    var utc = local.utc = d3_time_interval_utc(local);
    utc.floor = utc;
    utc.round = d3_time_interval_utc(round);
    utc.ceil = d3_time_interval_utc(ceil);
    utc.offset = d3_time_interval_utc(offset);
    utc.range = range_utc;
    return local;
  }
  function d3_time_interval_utc(method) {
    return function(date, k) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = date;
        return method(utc, k)._;
      } finally {
        d3_date = Date;
      }
    };
  }
  d3_time.year = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setMonth(0, 1);
    return date;
  }, function(date, offset) {
    date.setFullYear(date.getFullYear() + offset);
  }, function(date) {
    return date.getFullYear();
  });
  d3_time.years = d3_time.year.range;
  d3_time.years.utc = d3_time.year.utc.range;
  d3_time.day = d3_time_interval(function(date) {
    var day = new d3_date(2e3, 0);
    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    return day;
  }, function(date, offset) {
    date.setDate(date.getDate() + offset);
  }, function(date) {
    return date.getDate() - 1;
  });
  d3_time.days = d3_time.day.range;
  d3_time.days.utc = d3_time.day.utc.range;
  d3_time.dayOfYear = function(date) {
    var year = d3_time.year(date);
    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
  };
  [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(day, i) {
    i = 7 - i;
    var interval = d3_time[day] = d3_time_interval(function(date) {
      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
      return date;
    }, function(date, offset) {
      date.setDate(date.getDate() + Math.floor(offset) * 7);
    }, function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
    });
    d3_time[day + "s"] = interval.range;
    d3_time[day + "s"].utc = interval.utc.range;
    d3_time[day + "OfYear"] = function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
    };
  });
  d3_time.week = d3_time.sunday;
  d3_time.weeks = d3_time.sunday.range;
  d3_time.weeks.utc = d3_time.sunday.utc.range;
  d3_time.weekOfYear = d3_time.sundayOfYear;
  function d3_locale_timeFormat(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    function d3_time_format(template) {
      var n = template.length;
      function format(date) {
        var string = [], i = -1, j = 0, c, p, f;
        while (++i < n) {
          if (template.charCodeAt(i) === 37) {
            string.push(template.slice(j, i));
            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
            string.push(c);
            j = i + 1;
          }
        }
        string.push(template.slice(j, i));
        return string.join("");
      }
      format.parse = function(string) {
        var d = {
          y: 1900,
          m: 0,
          d: 1,
          H: 0,
          M: 0,
          S: 0,
          L: 0,
          Z: null
        }, i = d3_time_parse(d, template, string, 0);
        if (i != string.length) return null;
        if ("p" in d) d.H = d.H % 12 + d.p * 12;
        var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
        if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("W" in d || "U" in d) {
          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
          date.setFullYear(d.y, 0, 1);
          date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
        } else date.setFullYear(d.y, d.m, d.d);
        date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
        return localZ ? date._ : date;
      };
      format.toString = function() {
        return template;
      };
      return format;
    }
    function d3_time_parse(date, template, string, j) {
      var c, p, t, i = 0, n = template.length, m = string.length;
      while (i < n) {
        if (j >= m) return -1;
        c = template.charCodeAt(i++);
        if (c === 37) {
          t = template.charAt(i++);
          p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
          if (!p || (j = p(date, string, j)) < 0) return -1;
        } else if (c != string.charCodeAt(j++)) {
          return -1;
        }
      }
      return j;
    }
    d3_time_format.utc = function(template) {
      var local = d3_time_format(template);
      function format(date) {
        try {
          d3_date = d3_date_utc;
          var utc = new d3_date();
          utc._ = date;
          return local(utc);
        } finally {
          d3_date = Date;
        }
      }
      format.parse = function(string) {
        try {
          d3_date = d3_date_utc;
          var date = local.parse(string);
          return date && date._;
        } finally {
          d3_date = Date;
        }
      };
      format.toString = local.toString;
      return format;
    };
    d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
    var d3_time_periodLookup = d3.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
    locale_periods.forEach(function(p, i) {
      d3_time_periodLookup.set(p.toLowerCase(), i);
    });
    var d3_time_formats = {
      a: function(d) {
        return locale_shortDays[d.getDay()];
      },
      A: function(d) {
        return locale_days[d.getDay()];
      },
      b: function(d) {
        return locale_shortMonths[d.getMonth()];
      },
      B: function(d) {
        return locale_months[d.getMonth()];
      },
      c: d3_time_format(locale_dateTime),
      d: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      e: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      H: function(d, p) {
        return d3_time_formatPad(d.getHours(), p, 2);
      },
      I: function(d, p) {
        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
      },
      j: function(d, p) {
        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
      },
      L: function(d, p) {
        return d3_time_formatPad(d.getMilliseconds(), p, 3);
      },
      m: function(d, p) {
        return d3_time_formatPad(d.getMonth() + 1, p, 2);
      },
      M: function(d, p) {
        return d3_time_formatPad(d.getMinutes(), p, 2);
      },
      p: function(d) {
        return locale_periods[+(d.getHours() >= 12)];
      },
      S: function(d, p) {
        return d3_time_formatPad(d.getSeconds(), p, 2);
      },
      U: function(d, p) {
        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
      },
      w: function(d) {
        return d.getDay();
      },
      W: function(d, p) {
        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
      },
      x: d3_time_format(locale_date),
      X: d3_time_format(locale_time),
      y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
      },
      Y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
      },
      Z: d3_time_zone,
      "%": function() {
        return "%";
      }
    };
    var d3_time_parsers = {
      a: d3_time_parseWeekdayAbbrev,
      A: d3_time_parseWeekday,
      b: d3_time_parseMonthAbbrev,
      B: d3_time_parseMonth,
      c: d3_time_parseLocaleFull,
      d: d3_time_parseDay,
      e: d3_time_parseDay,
      H: d3_time_parseHour24,
      I: d3_time_parseHour24,
      j: d3_time_parseDayOfYear,
      L: d3_time_parseMilliseconds,
      m: d3_time_parseMonthNumber,
      M: d3_time_parseMinutes,
      p: d3_time_parseAmPm,
      S: d3_time_parseSeconds,
      U: d3_time_parseWeekNumberSunday,
      w: d3_time_parseWeekdayNumber,
      W: d3_time_parseWeekNumberMonday,
      x: d3_time_parseLocaleDate,
      X: d3_time_parseLocaleTime,
      y: d3_time_parseYear,
      Y: d3_time_parseFullYear,
      Z: d3_time_parseZone,
      "%": d3_time_parseLiteralPercent
    };
    function d3_time_parseWeekdayAbbrev(date, string, i) {
      d3_time_dayAbbrevRe.lastIndex = 0;
      var n = d3_time_dayAbbrevRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseWeekday(date, string, i) {
      d3_time_dayRe.lastIndex = 0;
      var n = d3_time_dayRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonthAbbrev(date, string, i) {
      d3_time_monthAbbrevRe.lastIndex = 0;
      var n = d3_time_monthAbbrevRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonth(date, string, i) {
      d3_time_monthRe.lastIndex = 0;
      var n = d3_time_monthRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseLocaleFull(date, string, i) {
      return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
    }
    function d3_time_parseLocaleDate(date, string, i) {
      return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
    }
    function d3_time_parseLocaleTime(date, string, i) {
      return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
    }
    function d3_time_parseAmPm(date, string, i) {
      var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
      return n == null ? -1 : (date.p = n, i);
    }
    return d3_time_format;
  }
  var d3_time_formatPads = {
    "-": "",
    _: " ",
    "0": "0"
  }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
  function d3_time_formatPad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
  }
  function d3_time_formatRe(names) {
    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
  }
  function d3_time_formatLookup(names) {
    var map = new d3_Map(), i = -1, n = names.length;
    while (++i < n) map.set(names[i].toLowerCase(), i);
    return map;
  }
  function d3_time_parseWeekdayNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 1));
    return n ? (date.w = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberSunday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.U = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberMonday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.W = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseFullYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 4));
    return n ? (date.y = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
  }
  function d3_time_parseZone(date, string, i) {
    return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, 
    i + 5) : -1;
  }
  function d3_time_expandYear(d) {
    return d + (d > 68 ? 1900 : 2e3);
  }
  function d3_time_parseMonthNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
  }
  function d3_time_parseDay(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.d = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseDayOfYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.j = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseHour24(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.H = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMinutes(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.M = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseSeconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.S = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMilliseconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.L = +n[0], i + n[0].length) : -1;
  }
  function d3_time_zone(d) {
    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = abs(z) / 60 | 0, zm = abs(z) % 60;
    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
  }
  function d3_time_parseLiteralPercent(date, string, i) {
    d3_time_percentRe.lastIndex = 0;
    var n = d3_time_percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
  }
  function d3_time_formatMulti(formats) {
    var n = formats.length, i = -1;
    while (++i < n) formats[i][0] = this(formats[i][0]);
    return function(date) {
      var i = 0, f = formats[i];
      while (!f[1](date)) f = formats[++i];
      return f[0](date);
    };
  }
  d3.locale = function(locale) {
    return {
      numberFormat: d3_locale_numberFormat(locale),
      timeFormat: d3_locale_timeFormat(locale)
    };
  };
  var d3_locale_enUS = d3.locale({
    decimal: ".",
    thousands: ",",
    grouping: [ 3 ],
    currency: [ "$", "" ],
    dateTime: "%a %b %e %X %Y",
    date: "%m/%d/%Y",
    time: "%H:%M:%S",
    periods: [ "AM", "PM" ],
    days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
    months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
    shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
  });
  d3.format = d3_locale_enUS.numberFormat;
  d3.geo = {};
  function d3_adder() {}
  d3_adder.prototype = {
    s: 0,
    t: 0,
    add: function(y) {
      d3_adderSum(y, this.t, d3_adderTemp);
      d3_adderSum(d3_adderTemp.s, this.s, this);
      if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
    },
    reset: function() {
      this.s = this.t = 0;
    },
    valueOf: function() {
      return this.s;
    }
  };
  var d3_adderTemp = new d3_adder();
  function d3_adderSum(a, b, o) {
    var x = o.s = a + b, bv = x - a, av = x - bv;
    o.t = a - av + (b - bv);
  }
  d3.geo.stream = function(object, listener) {
    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
      d3_geo_streamObjectType[object.type](object, listener);
    } else {
      d3_geo_streamGeometry(object, listener);
    }
  };
  function d3_geo_streamGeometry(geometry, listener) {
    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
      d3_geo_streamGeometryType[geometry.type](geometry, listener);
    }
  }
  var d3_geo_streamObjectType = {
    Feature: function(feature, listener) {
      d3_geo_streamGeometry(feature.geometry, listener);
    },
    FeatureCollection: function(object, listener) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
    }
  };
  var d3_geo_streamGeometryType = {
    Sphere: function(object, listener) {
      listener.sphere();
    },
    Point: function(object, listener) {
      object = object.coordinates;
      listener.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
    },
    LineString: function(object, listener) {
      d3_geo_streamLine(object.coordinates, listener, 0);
    },
    MultiLineString: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
    },
    Polygon: function(object, listener) {
      d3_geo_streamPolygon(object.coordinates, listener);
    },
    MultiPolygon: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
    },
    GeometryCollection: function(object, listener) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
    }
  };
  function d3_geo_streamLine(coordinates, listener, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    listener.lineStart();
    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
    listener.lineEnd();
  }
  function d3_geo_streamPolygon(coordinates, listener) {
    var i = -1, n = coordinates.length;
    listener.polygonStart();
    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
    listener.polygonEnd();
  }
  d3.geo.area = function(object) {
    d3_geo_areaSum = 0;
    d3.geo.stream(object, d3_geo_area);
    return d3_geo_areaSum;
  };
  var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
  var d3_geo_area = {
    sphere: function() {
      d3_geo_areaSum += 4 * π;
    },
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_areaRingSum.reset();
      d3_geo_area.lineStart = d3_geo_areaRingStart;
    },
    polygonEnd: function() {
      var area = 2 * d3_geo_areaRingSum;
      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
    }
  };
  function d3_geo_areaRingStart() {
    var λ00, φ00, λ0, cosφ0, sinφ0;
    d3_geo_area.point = function(λ, φ) {
      d3_geo_area.point = nextPoint;
      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
      sinφ0 = Math.sin(φ);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      φ = φ * d3_radians / 2 + π / 4;
      var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);
      d3_geo_areaRingSum.add(Math.atan2(v, u));
      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
    }
    d3_geo_area.lineEnd = function() {
      nextPoint(λ00, φ00);
    };
  }
  function d3_geo_cartesian(spherical) {
    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
  }
  function d3_geo_cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function d3_geo_cartesianCross(a, b) {
    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
  }
  function d3_geo_cartesianAdd(a, b) {
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
  }
  function d3_geo_cartesianScale(vector, k) {
    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
  }
  function d3_geo_cartesianNormalize(d) {
    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l;
    d[1] /= l;
    d[2] /= l;
  }
  function d3_geo_spherical(cartesian) {
    return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
  }
  function d3_geo_sphericalEqual(a, b) {
    return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
  }
  d3.geo.bounds = function() {
    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
    var bound = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        bound.point = ringPoint;
        bound.lineStart = ringStart;
        bound.lineEnd = ringEnd;
        dλSum = 0;
        d3_geo_area.polygonStart();
      },
      polygonEnd: function() {
        d3_geo_area.polygonEnd();
        bound.point = point;
        bound.lineStart = lineStart;
        bound.lineEnd = lineEnd;
        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
        range[0] = λ0, range[1] = λ1;
      }
    };
    function point(λ, φ) {
      ranges.push(range = [ λ0 = λ, λ1 = λ ]);
      if (φ < φ0) φ0 = φ;
      if (φ > φ1) φ1 = φ;
    }
    function linePoint(λ, φ) {
      var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
      if (p0) {
        var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
        d3_geo_cartesianNormalize(inflection);
        inflection = d3_geo_spherical(inflection);
        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = inflection[1] * d3_degrees;
          if (φi > φ1) φ1 = φi;
        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = -inflection[1] * d3_degrees;
          if (φi < φ0) φ0 = φi;
        } else {
          if (φ < φ0) φ0 = φ;
          if (φ > φ1) φ1 = φ;
        }
        if (antimeridian) {
          if (λ < λ_) {
            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
          } else {
            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
          }
        } else {
          if (λ1 >= λ0) {
            if (λ < λ0) λ0 = λ;
            if (λ > λ1) λ1 = λ;
          } else {
            if (λ > λ_) {
              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
            } else {
              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
            }
          }
        }
      } else {
        point(λ, φ);
      }
      p0 = p, λ_ = λ;
    }
    function lineStart() {
      bound.point = linePoint;
    }
    function lineEnd() {
      range[0] = λ0, range[1] = λ1;
      bound.point = point;
      p0 = null;
    }
    function ringPoint(λ, φ) {
      if (p0) {
        var dλ = λ - λ_;
        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
      } else λ__ = λ, φ__ = φ;
      d3_geo_area.point(λ, φ);
      linePoint(λ, φ);
    }
    function ringStart() {
      d3_geo_area.lineStart();
    }
    function ringEnd() {
      ringPoint(λ__, φ__);
      d3_geo_area.lineEnd();
      if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
      range[0] = λ0, range[1] = λ1;
      p0 = null;
    }
    function angle(λ0, λ1) {
      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
    }
    function compareRanges(a, b) {
      return a[0] - b[0];
    }
    function withinRange(x, range) {
      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
    }
    return function(feature) {
      φ1 = λ1 = -(λ0 = φ0 = Infinity);
      ranges = [];
      d3.geo.stream(feature, bound);
      var n = ranges.length;
      if (n) {
        ranges.sort(compareRanges);
        for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
          b = ranges[i];
          if (withinRange(b[0], a) || withinRange(b[1], a)) {
            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
          } else {
            merged.push(a = b);
          }
        }
        var best = -Infinity, dλ;
        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
          b = merged[i];
          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
        }
      }
      ranges = range = null;
      return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
    };
  }();
  d3.geo.centroid = function(object) {
    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
    d3.geo.stream(object, d3_geo_centroid);
    var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
    if (m < ε2) {
      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
      m = x * x + y * y + z * z;
      if (m < ε2) return [ NaN, NaN ];
    }
    return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
  };
  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
  var d3_geo_centroid = {
    sphere: d3_noop,
    point: d3_geo_centroidPoint,
    lineStart: d3_geo_centroidLineStart,
    lineEnd: d3_geo_centroidLineEnd,
    polygonStart: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
    }
  };
  function d3_geo_centroidPoint(λ, φ) {
    λ *= d3_radians;
    var cosφ = Math.cos(φ *= d3_radians);
    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
  }
  function d3_geo_centroidPointXYZ(x, y, z) {
    ++d3_geo_centroidW0;
    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
  }
  function d3_geo_centroidLineStart() {
    var x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroid.point = nextPoint;
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_centroidLineEnd() {
    d3_geo_centroid.point = d3_geo_centroidPoint;
  }
  function d3_geo_centroidRingStart() {
    var λ00, φ00, x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ00 = λ, φ00 = φ;
      d3_geo_centroid.point = nextPoint;
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    d3_geo_centroid.lineEnd = function() {
      nextPoint(λ00, φ00);
      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
      d3_geo_centroid.point = d3_geo_centroidPoint;
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
      d3_geo_centroidX2 += v * cx;
      d3_geo_centroidY2 += v * cy;
      d3_geo_centroidZ2 += v * cz;
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_compose(a, b) {
    function compose(x, y) {
      return x = a(x, y), b(x[0], x[1]);
    }
    if (a.invert && b.invert) compose.invert = function(x, y) {
      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };
    return compose;
  }
  function d3_true() {
    return true;
  }
  function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
    var subject = [], clip = [];
    segments.forEach(function(segment) {
      if ((n = segment.length - 1) <= 0) return;
      var n, p0 = segment[0], p1 = segment[n];
      if (d3_geo_sphericalEqual(p0, p1)) {
        listener.lineStart();
        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
        listener.lineEnd();
        return;
      }
      var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
      a.o = b;
      subject.push(a);
      clip.push(b);
      a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
      b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
      a.o = b;
      subject.push(a);
      clip.push(b);
    });
    clip.sort(compare);
    d3_geo_clipPolygonLinkCircular(subject);
    d3_geo_clipPolygonLinkCircular(clip);
    if (!subject.length) return;
    for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
      clip[i].e = entry = !entry;
    }
    var start = subject[0], points, point;
    while (1) {
      var current = start, isSubject = true;
      while (current.v) if ((current = current.n) === start) return;
      points = current.z;
      listener.lineStart();
      do {
        current.v = current.o.v = true;
        if (current.e) {
          if (isSubject) {
            for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.n.x, 1, listener);
          }
          current = current.n;
        } else {
          if (isSubject) {
            points = current.p.z;
            for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.p.x, -1, listener);
          }
          current = current.p;
        }
        current = current.o;
        points = current.z;
        isSubject = !isSubject;
      } while (!current.v);
      listener.lineEnd();
    }
  }
  function d3_geo_clipPolygonLinkCircular(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while (++i < n) {
      a.n = b = array[i];
      b.p = a;
      a = b;
    }
    a.n = b = array[0];
    b.p = a;
  }
  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other;
    this.e = entry;
    this.v = false;
    this.n = this.p = null;
  }
  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
    return function(rotate, listener) {
      var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          segments = [];
          polygon = [];
        },
        polygonEnd: function() {
          clip.point = point;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = d3.merge(segments);
          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
          if (segments.length) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
          } else if (clipStartInside) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            interpolate(null, null, 1, listener);
            listener.lineEnd();
          }
          if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
          segments = polygon = null;
        },
        sphere: function() {
          listener.polygonStart();
          listener.lineStart();
          interpolate(null, null, 1, listener);
          listener.lineEnd();
          listener.polygonEnd();
        }
      };
      function point(λ, φ) {
        var point = rotate(λ, φ);
        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
      }
      function pointLine(λ, φ) {
        var point = rotate(λ, φ);
        line.point(point[0], point[1]);
      }
      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }
      function lineEnd() {
        clip.point = point;
        line.lineEnd();
      }
      var segments;
      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
      function pointRing(λ, φ) {
        ring.push([ λ, φ ]);
        var point = rotate(λ, φ);
        ringListener.point(point[0], point[1]);
      }
      function ringStart() {
        ringListener.lineStart();
        ring = [];
      }
      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringListener.lineEnd();
        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
        ring.pop();
        polygon.push(ring);
        ring = null;
        if (!n) return;
        if (clean & 1) {
          segment = ringSegments[0];
          var n = segment.length - 1, i = -1, point;
          if (n > 0) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            while (++i < n) listener.point((point = segment[i])[0], point[1]);
            listener.lineEnd();
          }
          return;
        }
        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
      }
      return clip;
    };
  }
  function d3_geo_clipSegmentLength1(segment) {
    return segment.length > 1;
  }
  function d3_geo_clipBufferListener() {
    var lines = [], line;
    return {
      lineStart: function() {
        lines.push(line = []);
      },
      point: function(λ, φ) {
        line.push([ λ, φ ]);
      },
      lineEnd: d3_noop,
      buffer: function() {
        var buffer = lines;
        lines = [];
        line = null;
        return buffer;
      },
      rejoin: function() {
        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
      }
    };
  }
  function d3_geo_clipSort(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
  }
  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ -π, -π / 2 ]);
  function d3_geo_clipAntimeridianLine(listener) {
    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
    return {
      lineStart: function() {
        listener.lineStart();
        clean = 1;
      },
      point: function(λ1, φ1) {
        var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
        if (abs(dλ - π) < ε) {
          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          listener.point(λ1, φ0);
          clean = 0;
        } else if (sλ0 !== sλ1 && dλ >= π) {
          if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
          if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          clean = 0;
        }
        listener.point(λ0 = λ1, φ0 = φ1);
        sλ0 = sλ1;
      },
      lineEnd: function() {
        listener.lineEnd();
        λ0 = φ0 = NaN;
      },
      clean: function() {
        return 2 - clean;
      }
    };
  }
  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
  }
  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
    var φ;
    if (from == null) {
      φ = direction * halfπ;
      listener.point(-π, φ);
      listener.point(0, φ);
      listener.point(π, φ);
      listener.point(π, 0);
      listener.point(π, -φ);
      listener.point(0, -φ);
      listener.point(-π, -φ);
      listener.point(-π, 0);
      listener.point(-π, φ);
    } else if (abs(from[0] - to[0]) > ε) {
      var s = from[0] < to[0] ? π : -π;
      φ = direction * s / 2;
      listener.point(-s, φ);
      listener.point(0, φ);
      listener.point(s, φ);
    } else {
      listener.point(to[0], to[1]);
    }
  }
  function d3_geo_pointInPolygon(point, polygon) {
    var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, winding = 0;
    d3_geo_areaRingSum.reset();
    for (var i = 0, n = polygon.length; i < n; ++i) {
      var ring = polygon[i], m = ring.length;
      if (!m) continue;
      var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
      while (true) {
        if (j === m) j = 0;
        point = ring[j];
        var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;
        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
        polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
          d3_geo_cartesianNormalize(arc);
          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
          d3_geo_cartesianNormalize(intersection);
          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
          if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
          }
        }
        if (!j++) break;
        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
      }
    }
    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < -ε) ^ winding & 1;
  }
  function d3_geo_clipCircle(radius) {
    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -π, radius - π ]);
    function visible(λ, φ) {
      return Math.cos(λ) * Math.cos(φ) > cr;
    }
    function clipLine(listener) {
      var point0, c0, v0, v00, clean;
      return {
        lineStart: function() {
          v00 = v0 = false;
          clean = 1;
        },
        point: function(λ, φ) {
          var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
          if (!point0 && (v00 = v0 = v)) listener.lineStart();
          if (v !== v0) {
            point2 = intersect(point0, point1);
            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
              point1[0] += ε;
              point1[1] += ε;
              v = visible(point1[0], point1[1]);
            }
          }
          if (v !== v0) {
            clean = 0;
            if (v) {
              listener.lineStart();
              point2 = intersect(point1, point0);
              listener.point(point2[0], point2[1]);
            } else {
              point2 = intersect(point0, point1);
              listener.point(point2[0], point2[1]);
              listener.lineEnd();
            }
            point0 = point2;
          } else if (notHemisphere && point0 && smallRadius ^ v) {
            var t;
            if (!(c & c0) && (t = intersect(point1, point0, true))) {
              clean = 0;
              if (smallRadius) {
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
              } else {
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
              }
            }
          }
          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
            listener.point(point1[0], point1[1]);
          }
          point0 = point1, v0 = v, c0 = c;
        },
        lineEnd: function() {
          if (v0) listener.lineEnd();
          point0 = null;
        },
        clean: function() {
          return clean | (v00 && v0) << 1;
        }
      };
    }
    function intersect(a, b, two) {
      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
      if (!determinant) return !two && a;
      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
      d3_geo_cartesianAdd(A, B);
      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
      if (t2 < 0) return;
      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
      d3_geo_cartesianAdd(q, A);
      q = d3_geo_spherical(q);
      if (!two) return q;
      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
      var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
        d3_geo_cartesianAdd(q1, A);
        return [ q, d3_geo_spherical(q1) ];
      }
    }
    function code(λ, φ) {
      var r = smallRadius ? radius : π - radius, code = 0;
      if (λ < -r) code |= 1; else if (λ > r) code |= 2;
      if (φ < -r) code |= 4; else if (φ > r) code |= 8;
      return code;
    }
  }
  function d3_geom_clipLine(x0, y0, x1, y1) {
    return function(line) {
      var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
      r = x0 - ax;
      if (!dx && r > 0) return;
      r /= dx;
      if (dx < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dx > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = x1 - ax;
      if (!dx && r < 0) return;
      r /= dx;
      if (dx < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dx > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      r = y0 - ay;
      if (!dy && r > 0) return;
      r /= dy;
      if (dy < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dy > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = y1 - ay;
      if (!dy && r < 0) return;
      r /= dy;
      if (dy < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dy > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      if (t0 > 0) line.a = {
        x: ax + t0 * dx,
        y: ay + t0 * dy
      };
      if (t1 < 1) line.b = {
        x: ax + t1 * dx,
        y: ay + t1 * dy
      };
      return line;
    };
  }
  var d3_geo_clipExtentMAX = 1e9;
  d3.geo.clipExtent = function() {
    var x0, y0, x1, y1, stream, clip, clipExtent = {
      stream: function(output) {
        if (stream) stream.valid = false;
        stream = clip(output);
        stream.valid = true;
        return stream;
      },
      extent: function(_) {
        if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
        if (stream) stream.valid = false, stream = null;
        return clipExtent;
      }
    };
    return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
  };
  function d3_geo_clipExtent(x0, y0, x1, y1) {
    return function(listener) {
      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          listener = bufferListener;
          segments = [];
          polygon = [];
          clean = true;
        },
        polygonEnd: function() {
          listener = listener_;
          segments = d3.merge(segments);
          var clipStartInside = insidePolygon([ x0, y1 ]), inside = clean && clipStartInside, visible = segments.length;
          if (inside || visible) {
            listener.polygonStart();
            if (inside) {
              listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd();
            }
            if (visible) {
              d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
            }
            listener.polygonEnd();
          }
          segments = polygon = ring = null;
        }
      };
      function insidePolygon(p) {
        var wn = 0, n = polygon.length, y = p[1];
        for (var i = 0; i < n; ++i) {
          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
            b = v[j];
            if (a[1] <= y) {
              if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
            } else {
              if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
            }
            a = b;
          }
        }
        return wn !== 0;
      }
      function interpolate(from, to, direction, listener) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
          do {
            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
          } while ((a = (a + direction + 4) % 4) !== a1);
        } else {
          listener.point(to[0], to[1]);
        }
      }
      function pointVisible(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
      }
      function point(x, y) {
        if (pointVisible(x, y)) listener.point(x, y);
      }
      var x__, y__, v__, x_, y_, v_, first, clean;
      function lineStart() {
        clip.point = linePoint;
        if (polygon) polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }
      function lineEnd() {
        if (segments) {
          linePoint(x__, y__);
          if (v__ && v_) bufferListener.rejoin();
          segments.push(bufferListener.buffer());
        }
        clip.point = point;
        if (v_) listener.lineEnd();
      }
      function linePoint(x, y) {
        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
        var v = pointVisible(x, y);
        if (polygon) ring.push([ x, y ]);
        if (first) {
          x__ = x, y__ = y, v__ = v;
          first = false;
          if (v) {
            listener.lineStart();
            listener.point(x, y);
          }
        } else {
          if (v && v_) listener.point(x, y); else {
            var l = {
              a: {
                x: x_,
                y: y_
              },
              b: {
                x: x,
                y: y
              }
            };
            if (clipLine(l)) {
              if (!v_) {
                listener.lineStart();
                listener.point(l.a.x, l.a.y);
              }
              listener.point(l.b.x, l.b.y);
              if (!v) listener.lineEnd();
              clean = false;
            } else if (v) {
              listener.lineStart();
              listener.point(x, y);
              clean = false;
            }
          }
        }
        x_ = x, y_ = y, v_ = v;
      }
      return clip;
    };
    function corner(p, direction) {
      return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
    }
    function compare(a, b) {
      return comparePoints(a.x, b.x);
    }
    function comparePoints(a, b) {
      var ca = corner(a, 1), cb = corner(b, 1);
      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
  }
  function d3_geo_conic(projectAt) {
    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
    p.parallels = function(_) {
      if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
    };
    return p;
  }
  function d3_geo_conicEqualArea(φ0, φ1) {
    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
    function forward(λ, φ) {
      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = ρ0 - y;
      return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
    };
    return forward;
  }
  (d3.geo.conicEqualArea = function() {
    return d3_geo_conic(d3_geo_conicEqualArea);
  }).raw = d3_geo_conicEqualArea;
  d3.geo.albers = function() {
    return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
  };
  d3.geo.albersUsa = function() {
    var lower48 = d3.geo.albers();
    var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
    var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
    var point, pointStream = {
      point: function(x, y) {
        point = [ x, y ];
      }
    }, lower48Point, alaskaPoint, hawaiiPoint;
    function albersUsa(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      point = null;
      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
      return point;
    }
    albersUsa.invert = function(coordinates) {
      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
    };
    albersUsa.stream = function(stream) {
      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
      return {
        point: function(x, y) {
          lower48Stream.point(x, y);
          alaskaStream.point(x, y);
          hawaiiStream.point(x, y);
        },
        sphere: function() {
          lower48Stream.sphere();
          alaskaStream.sphere();
          hawaiiStream.sphere();
        },
        lineStart: function() {
          lower48Stream.lineStart();
          alaskaStream.lineStart();
          hawaiiStream.lineStart();
        },
        lineEnd: function() {
          lower48Stream.lineEnd();
          alaskaStream.lineEnd();
          hawaiiStream.lineEnd();
        },
        polygonStart: function() {
          lower48Stream.polygonStart();
          alaskaStream.polygonStart();
          hawaiiStream.polygonStart();
        },
        polygonEnd: function() {
          lower48Stream.polygonEnd();
          alaskaStream.polygonEnd();
          hawaiiStream.polygonEnd();
        }
      };
    };
    albersUsa.precision = function(_) {
      if (!arguments.length) return lower48.precision();
      lower48.precision(_);
      alaska.precision(_);
      hawaii.precision(_);
      return albersUsa;
    };
    albersUsa.scale = function(_) {
      if (!arguments.length) return lower48.scale();
      lower48.scale(_);
      alaska.scale(_ * .35);
      hawaii.scale(_);
      return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function(_) {
      if (!arguments.length) return lower48.translate();
      var k = lower48.scale(), x = +_[0], y = +_[1];
      lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
      alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      return albersUsa;
    };
    return albersUsa.scale(1070);
  };
  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_pathAreaPolygon = 0;
      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
      d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
    }
  };
  function d3_geo_pathAreaRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathArea.point = function(x, y) {
      d3_geo_pathArea.point = nextPoint;
      x00 = x0 = x, y00 = y0 = y;
    };
    function nextPoint(x, y) {
      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
      x0 = x, y0 = y;
    }
    d3_geo_pathArea.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
  var d3_geo_pathBounds = {
    point: d3_geo_pathBoundsPoint,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_pathBoundsPoint(x, y) {
    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
  }
  function d3_geo_pathBuffer() {
    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointCircle = d3_geo_pathBufferCircle(_);
        return stream;
      },
      result: function() {
        if (buffer.length) {
          var result = buffer.join("");
          buffer = [];
          return result;
        }
      }
    };
    function point(x, y) {
      buffer.push("M", x, ",", y, pointCircle);
    }
    function pointLineStart(x, y) {
      buffer.push("M", x, ",", y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      buffer.push("L", x, ",", y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      buffer.push("Z");
    }
    return stream;
  }
  function d3_geo_pathBufferCircle(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
  }
  var d3_geo_pathCentroid = {
    point: d3_geo_pathCentroidPoint,
    lineStart: d3_geo_pathCentroidLineStart,
    lineEnd: d3_geo_pathCentroidLineEnd,
    polygonStart: function() {
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
    }
  };
  function d3_geo_pathCentroidPoint(x, y) {
    d3_geo_centroidX0 += x;
    d3_geo_centroidY0 += y;
    ++d3_geo_centroidZ0;
  }
  function d3_geo_pathCentroidLineStart() {
    var x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
  }
  function d3_geo_pathCentroidLineEnd() {
    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
  }
  function d3_geo_pathCentroidRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      z = y0 * x - x0 * y;
      d3_geo_centroidX2 += z * (x0 + x);
      d3_geo_centroidY2 += z * (y0 + y);
      d3_geo_centroidZ2 += z * 3;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
    d3_geo_pathCentroid.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  function d3_geo_pathContext(context) {
    var pointRadius = 4.5;
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointRadius = _;
        return stream;
      },
      result: d3_noop
    };
    function point(x, y) {
      context.moveTo(x + pointRadius, y);
      context.arc(x, y, pointRadius, 0, τ);
    }
    function pointLineStart(x, y) {
      context.moveTo(x, y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      context.lineTo(x, y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      context.closePath();
    }
    return stream;
  }
  function d3_geo_resample(project) {
    var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
    function resample(stream) {
      return (maxDepth ? resampleRecursive : resampleNone)(stream);
    }
    function resampleNone(stream) {
      return d3_geo_transformPoint(stream, function(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      });
    }
    function resampleRecursive(stream) {
      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
      var resample = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          stream.polygonStart();
          resample.lineStart = ringStart;
        },
        polygonEnd: function() {
          stream.polygonEnd();
          resample.lineStart = lineStart;
        }
      };
      function point(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      }
      function lineStart() {
        x0 = NaN;
        resample.point = linePoint;
        stream.lineStart();
      }
      function linePoint(λ, φ) {
        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
        stream.point(x0, y0);
      }
      function lineEnd() {
        resample.point = point;
        stream.lineEnd();
      }
      function ringStart() {
        lineStart();
        resample.point = ringPoint;
        resample.lineEnd = ringEnd;
      }
      function ringPoint(λ, φ) {
        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
        resample.point = linePoint;
      }
      function ringEnd() {
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
        resample.lineEnd = lineEnd;
        lineEnd();
      }
      return resample;
    }
    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
      if (d2 > 4 * δ2 && depth--) {
        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
          stream.point(x2, y2);
          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
        }
      }
    }
    resample.precision = function(_) {
      if (!arguments.length) return Math.sqrt(δ2);
      maxDepth = (δ2 = _ * _) > 0 && 16;
      return resample;
    };
    return resample;
  }
  d3.geo.path = function() {
    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
    function path(object) {
      if (object) {
        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
        d3.geo.stream(object, cacheStream);
      }
      return contextStream.result();
    }
    path.area = function(object) {
      d3_geo_pathAreaSum = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathArea));
      return d3_geo_pathAreaSum;
    };
    path.centroid = function(object) {
      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
      return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
    };
    path.bounds = function(object) {
      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
      return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
    };
    path.projection = function(_) {
      if (!arguments.length) return projection;
      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
      return reset();
    };
    path.context = function(_) {
      if (!arguments.length) return context;
      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
      return reset();
    };
    path.pointRadius = function(_) {
      if (!arguments.length) return pointRadius;
      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
      return path;
    };
    function reset() {
      cacheStream = null;
      return path;
    }
    return path.projection(d3.geo.albersUsa()).context(null);
  };
  function d3_geo_pathProjectStream(project) {
    var resample = d3_geo_resample(function(x, y) {
      return project([ x * d3_degrees, y * d3_degrees ]);
    });
    return function(stream) {
      return d3_geo_projectionRadians(resample(stream));
    };
  }
  d3.geo.transform = function(methods) {
    return {
      stream: function(stream) {
        var transform = new d3_geo_transform(stream);
        for (var k in methods) transform[k] = methods[k];
        return transform;
      }
    };
  };
  function d3_geo_transform(stream) {
    this.stream = stream;
  }
  d3_geo_transform.prototype = {
    point: function(x, y) {
      this.stream.point(x, y);
    },
    sphere: function() {
      this.stream.sphere();
    },
    lineStart: function() {
      this.stream.lineStart();
    },
    lineEnd: function() {
      this.stream.lineEnd();
    },
    polygonStart: function() {
      this.stream.polygonStart();
    },
    polygonEnd: function() {
      this.stream.polygonEnd();
    }
  };
  function d3_geo_transformPoint(stream, point) {
    return {
      point: point,
      sphere: function() {
        stream.sphere();
      },
      lineStart: function() {
        stream.lineStart();
      },
      lineEnd: function() {
        stream.lineEnd();
      },
      polygonStart: function() {
        stream.polygonStart();
      },
      polygonEnd: function() {
        stream.polygonEnd();
      }
    };
  }
  d3.geo.projection = d3_geo_projection;
  d3.geo.projectionMutator = d3_geo_projectionMutator;
  function d3_geo_projection(project) {
    return d3_geo_projectionMutator(function() {
      return project;
    })();
  }
  function d3_geo_projectionMutator(projectAt) {
    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
      x = project(x, y);
      return [ x[0] * k + δx, δy - x[1] * k ];
    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
    function projection(point) {
      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
      return [ point[0] * k + δx, δy - point[1] * k ];
    }
    function invert(point) {
      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
    }
    projection.stream = function(output) {
      if (stream) stream.valid = false;
      stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
      stream.valid = true;
      return stream;
    };
    projection.clipAngle = function(_) {
      if (!arguments.length) return clipAngle;
      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
      return invalidate();
    };
    projection.clipExtent = function(_) {
      if (!arguments.length) return clipExtent;
      clipExtent = _;
      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
      return invalidate();
    };
    projection.scale = function(_) {
      if (!arguments.length) return k;
      k = +_;
      return reset();
    };
    projection.translate = function(_) {
      if (!arguments.length) return [ x, y ];
      x = +_[0];
      y = +_[1];
      return reset();
    };
    projection.center = function(_) {
      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
      λ = _[0] % 360 * d3_radians;
      φ = _[1] % 360 * d3_radians;
      return reset();
    };
    projection.rotate = function(_) {
      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
      δλ = _[0] % 360 * d3_radians;
      δφ = _[1] % 360 * d3_radians;
      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
      return reset();
    };
    d3.rebind(projection, projectResample, "precision");
    function reset() {
      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
      var center = project(λ, φ);
      δx = x - center[0] * k;
      δy = y + center[1] * k;
      return invalidate();
    }
    function invalidate() {
      if (stream) stream.valid = false, stream = null;
      return projection;
    }
    return function() {
      project = projectAt.apply(this, arguments);
      projection.invert = project.invert && invert;
      return reset();
    };
  }
  function d3_geo_projectionRadians(stream) {
    return d3_geo_transformPoint(stream, function(x, y) {
      stream.point(x * d3_radians, y * d3_radians);
    });
  }
  function d3_geo_equirectangular(λ, φ) {
    return [ λ, φ ];
  }
  (d3.geo.equirectangular = function() {
    return d3_geo_projection(d3_geo_equirectangular);
  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
  d3.geo.rotation = function(rotate) {
    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
    function forward(coordinates) {
      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    }
    forward.invert = function(coordinates) {
      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    };
    return forward;
  };
  function d3_geo_identityRotation(λ, φ) {
    return [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
  }
  d3_geo_identityRotation.invert = d3_geo_equirectangular;
  function d3_geo_rotation(δλ, δφ, δγ) {
    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
  }
  function d3_geo_forwardRotationλ(δλ) {
    return function(λ, φ) {
      return λ += δλ, [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
    };
  }
  function d3_geo_rotationλ(δλ) {
    var rotation = d3_geo_forwardRotationλ(δλ);
    rotation.invert = d3_geo_forwardRotationλ(-δλ);
    return rotation;
  }
  function d3_geo_rotationφγ(δφ, δγ) {
    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
    function rotation(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
    }
    rotation.invert = function(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
    };
    return rotation;
  }
  d3.geo.circle = function() {
    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
    function circle() {
      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
      interpolate(null, null, 1, {
        point: function(x, y) {
          ring.push(x = rotate(x, y));
          x[0] *= d3_degrees, x[1] *= d3_degrees;
        }
      });
      return {
        type: "Polygon",
        coordinates: [ ring ]
      };
    }
    circle.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return circle;
    };
    circle.angle = function(x) {
      if (!arguments.length) return angle;
      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
      return circle;
    };
    circle.precision = function(_) {
      if (!arguments.length) return precision;
      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
      return circle;
    };
    return circle.angle(90);
  };
  function d3_geo_circleInterpolate(radius, precision) {
    var cr = Math.cos(radius), sr = Math.sin(radius);
    return function(from, to, direction, listener) {
      var step = direction * precision;
      if (from != null) {
        from = d3_geo_circleAngle(cr, from);
        to = d3_geo_circleAngle(cr, to);
        if (direction > 0 ? from < to : from > to) from += direction * τ;
      } else {
        from = radius + direction * τ;
        to = radius - .5 * step;
      }
      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
      }
    };
  }
  function d3_geo_circleAngle(cr, point) {
    var a = d3_geo_cartesian(point);
    a[0] -= cr;
    d3_geo_cartesianNormalize(a);
    var angle = d3_acos(-a[1]);
    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
  }
  d3.geo.distance = function(a, b) {
    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
  };
  d3.geo.graticule = function() {
    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
    function graticule() {
      return {
        type: "MultiLineString",
        coordinates: lines()
      };
    }
    function lines() {
      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
        return abs(x % DX) > ε;
      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
        return abs(y % DY) > ε;
      }).map(y));
    }
    graticule.lines = function() {
      return lines().map(function(coordinates) {
        return {
          type: "LineString",
          coordinates: coordinates
        };
      });
    };
    graticule.outline = function() {
      return {
        type: "Polygon",
        coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
      };
    };
    graticule.extent = function(_) {
      if (!arguments.length) return graticule.minorExtent();
      return graticule.majorExtent(_).minorExtent(_);
    };
    graticule.majorExtent = function(_) {
      if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
      X0 = +_[0][0], X1 = +_[1][0];
      Y0 = +_[0][1], Y1 = +_[1][1];
      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
      return graticule.precision(precision);
    };
    graticule.minorExtent = function(_) {
      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
      x0 = +_[0][0], x1 = +_[1][0];
      y0 = +_[0][1], y1 = +_[1][1];
      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
      return graticule.precision(precision);
    };
    graticule.step = function(_) {
      if (!arguments.length) return graticule.minorStep();
      return graticule.majorStep(_).minorStep(_);
    };
    graticule.majorStep = function(_) {
      if (!arguments.length) return [ DX, DY ];
      DX = +_[0], DY = +_[1];
      return graticule;
    };
    graticule.minorStep = function(_) {
      if (!arguments.length) return [ dx, dy ];
      dx = +_[0], dy = +_[1];
      return graticule;
    };
    graticule.precision = function(_) {
      if (!arguments.length) return precision;
      precision = +_;
      x = d3_geo_graticuleX(y0, y1, 90);
      y = d3_geo_graticuleY(x0, x1, precision);
      X = d3_geo_graticuleX(Y0, Y1, 90);
      Y = d3_geo_graticuleY(X0, X1, precision);
      return graticule;
    };
    return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
  };
  function d3_geo_graticuleX(y0, y1, dy) {
    var y = d3.range(y0, y1 - ε, dy).concat(y1);
    return function(x) {
      return y.map(function(y) {
        return [ x, y ];
      });
    };
  }
  function d3_geo_graticuleY(x0, x1, dx) {
    var x = d3.range(x0, x1 - ε, dx).concat(x1);
    return function(y) {
      return x.map(function(x) {
        return [ x, y ];
      });
    };
  }
  function d3_source(d) {
    return d.source;
  }
  function d3_target(d) {
    return d.target;
  }
  d3.geo.greatArc = function() {
    var source = d3_source, source_, target = d3_target, target_;
    function greatArc() {
      return {
        type: "LineString",
        coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
      };
    }
    greatArc.distance = function() {
      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
    };
    greatArc.source = function(_) {
      if (!arguments.length) return source;
      source = _, source_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.target = function(_) {
      if (!arguments.length) return target;
      target = _, target_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.precision = function() {
      return arguments.length ? greatArc : 0;
    };
    return greatArc;
  };
  d3.geo.interpolate = function(source, target) {
    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
  };
  function d3_geo_interpolate(x0, y0, x1, y1) {
    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
    var interpolate = d ? function(t) {
      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
    } : function() {
      return [ x0 * d3_degrees, y0 * d3_degrees ];
    };
    interpolate.distance = d;
    return interpolate;
  }
  d3.geo.length = function(object) {
    d3_geo_lengthSum = 0;
    d3.geo.stream(object, d3_geo_length);
    return d3_geo_lengthSum;
  };
  var d3_geo_lengthSum;
  var d3_geo_length = {
    sphere: d3_noop,
    point: d3_noop,
    lineStart: d3_geo_lengthLineStart,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_lengthLineStart() {
    var λ0, sinφ0, cosφ0;
    d3_geo_length.point = function(λ, φ) {
      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
      d3_geo_length.point = nextPoint;
    };
    d3_geo_length.lineEnd = function() {
      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
    };
    function nextPoint(λ, φ) {
      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
    }
  }
  function d3_geo_azimuthal(scale, angle) {
    function azimuthal(λ, φ) {
      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
    }
    azimuthal.invert = function(x, y) {
      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
    };
    return azimuthal;
  }
  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
    return Math.sqrt(2 / (1 + cosλcosφ));
  }, function(ρ) {
    return 2 * Math.asin(ρ / 2);
  });
  (d3.geo.azimuthalEqualArea = function() {
    return d3_geo_projection(d3_geo_azimuthalEqualArea);
  }).raw = d3_geo_azimuthalEqualArea;
  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
    var c = Math.acos(cosλcosφ);
    return c && c / Math.sin(c);
  }, d3_identity);
  (d3.geo.azimuthalEquidistant = function() {
    return d3_geo_projection(d3_geo_azimuthalEquidistant);
  }).raw = d3_geo_azimuthalEquidistant;
  function d3_geo_conicConformal(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), t = function(φ) {
      return Math.tan(π / 4 + φ / 2);
    }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
    if (!n) return d3_geo_mercator;
    function forward(λ, φ) {
      if (F > 0) {
        if (φ < -halfπ + ε) φ = -halfπ + ε;
      } else {
        if (φ > halfπ - ε) φ = halfπ - ε;
      }
      var ρ = F / Math.pow(t(φ), n);
      return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
      return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ ];
    };
    return forward;
  }
  (d3.geo.conicConformal = function() {
    return d3_geo_conic(d3_geo_conicConformal);
  }).raw = d3_geo_conicConformal;
  function d3_geo_conicEquidistant(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
    if (abs(n) < ε) return d3_geo_equirectangular;
    function forward(λ, φ) {
      var ρ = G - φ;
      return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = G - y;
      return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
    };
    return forward;
  }
  (d3.geo.conicEquidistant = function() {
    return d3_geo_conic(d3_geo_conicEquidistant);
  }).raw = d3_geo_conicEquidistant;
  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / cosλcosφ;
  }, Math.atan);
  (d3.geo.gnomonic = function() {
    return d3_geo_projection(d3_geo_gnomonic);
  }).raw = d3_geo_gnomonic;
  function d3_geo_mercator(λ, φ) {
    return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
  }
  d3_geo_mercator.invert = function(x, y) {
    return [ x, 2 * Math.atan(Math.exp(y)) - halfπ ];
  };
  function d3_geo_mercatorProjection(project) {
    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
    m.scale = function() {
      var v = scale.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.translate = function() {
      var v = translate.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.clipExtent = function(_) {
      var v = clipExtent.apply(m, arguments);
      if (v === m) {
        if (clipAuto = _ == null) {
          var k = π * scale(), t = translate();
          clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
        }
      } else if (clipAuto) {
        v = null;
      }
      return v;
    };
    return m.clipExtent(null);
  }
  (d3.geo.mercator = function() {
    return d3_geo_mercatorProjection(d3_geo_mercator);
  }).raw = d3_geo_mercator;
  var d3_geo_orthographic = d3_geo_azimuthal(function() {
    return 1;
  }, Math.asin);
  (d3.geo.orthographic = function() {
    return d3_geo_projection(d3_geo_orthographic);
  }).raw = d3_geo_orthographic;
  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / (1 + cosλcosφ);
  }, function(ρ) {
    return 2 * Math.atan(ρ);
  });
  (d3.geo.stereographic = function() {
    return d3_geo_projection(d3_geo_stereographic);
  }).raw = d3_geo_stereographic;
  function d3_geo_transverseMercator(λ, φ) {
    return [ Math.log(Math.tan(π / 4 + φ / 2)), -λ ];
  }
  d3_geo_transverseMercator.invert = function(x, y) {
    return [ -y, 2 * Math.atan(Math.exp(x)) - halfπ ];
  };
  (d3.geo.transverseMercator = function() {
    var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
    projection.center = function(_) {
      return _ ? center([ -_[1], _[0] ]) : (_ = center(), [ _[1], -_[0] ]);
    };
    projection.rotate = function(_) {
      return _ ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), 
      [ _[0], _[1], _[2] - 90 ]);
    };
    return rotate([ 0, 0, 90 ]);
  }).raw = d3_geo_transverseMercator;
  d3.geom = {};
  function d3_geom_pointX(d) {
    return d[0];
  }
  function d3_geom_pointY(d) {
    return d[1];
  }
  d3.geom.hull = function(vertices) {
    var x = d3_geom_pointX, y = d3_geom_pointY;
    if (arguments.length) return hull(vertices);
    function hull(data) {
      if (data.length < 3) return [];
      var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
      for (i = 0; i < n; i++) {
        points.push([ +fx.call(this, data[i], i), +fy.call(this, data[i], i), i ]);
      }
      points.sort(d3_geom_hullOrder);
      for (i = 0; i < n; i++) flippedPoints.push([ points[i][0], -points[i][1] ]);
      var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
      var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
      for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
      for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
      return polygon;
    }
    hull.x = function(_) {
      return arguments.length ? (x = _, hull) : x;
    };
    hull.y = function(_) {
      return arguments.length ? (y = _, hull) : y;
    };
    return hull;
  };
  function d3_geom_hullUpper(points) {
    var n = points.length, hull = [ 0, 1 ], hs = 2;
    for (var i = 2; i < n; i++) {
      while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
      hull[hs++] = i;
    }
    return hull.slice(0, hs);
  }
  function d3_geom_hullOrder(a, b) {
    return a[0] - b[0] || a[1] - b[1];
  }
  d3.geom.polygon = function(coordinates) {
    d3_subclass(coordinates, d3_geom_polygonPrototype);
    return coordinates;
  };
  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
  d3_geom_polygonPrototype.area = function() {
    var i = -1, n = this.length, a, b = this[n - 1], area = 0;
    while (++i < n) {
      a = b;
      b = this[i];
      area += a[1] * b[0] - a[0] * b[1];
    }
    return area * .5;
  };
  d3_geom_polygonPrototype.centroid = function(k) {
    var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
    if (!arguments.length) k = -1 / (6 * this.area());
    while (++i < n) {
      a = b;
      b = this[i];
      c = a[0] * b[1] - b[0] * a[1];
      x += (a[0] + b[0]) * c;
      y += (a[1] + b[1]) * c;
    }
    return [ x * k, y * k ];
  };
  d3_geom_polygonPrototype.clip = function(subject) {
    var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
    while (++i < n) {
      input = subject.slice();
      subject.length = 0;
      b = this[i];
      c = input[(m = input.length - closed) - 1];
      j = -1;
      while (++j < m) {
        d = input[j];
        if (d3_geom_polygonInside(d, a, b)) {
          if (!d3_geom_polygonInside(c, a, b)) {
            subject.push(d3_geom_polygonIntersect(c, d, a, b));
          }
          subject.push(d);
        } else if (d3_geom_polygonInside(c, a, b)) {
          subject.push(d3_geom_polygonIntersect(c, d, a, b));
        }
        c = d;
      }
      if (closed) subject.push(subject[0]);
      a = b;
    }
    return subject;
  };
  function d3_geom_polygonInside(p, a, b) {
    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
  }
  function d3_geom_polygonIntersect(c, d, a, b) {
    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
    return [ x1 + ua * x21, y1 + ua * y21 ];
  }
  function d3_geom_polygonClosed(coordinates) {
    var a = coordinates[0], b = coordinates[coordinates.length - 1];
    return !(a[0] - b[0] || a[1] - b[1]);
  }
  var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
  function d3_geom_voronoiBeach() {
    d3_geom_voronoiRedBlackNode(this);
    this.edge = this.site = this.circle = null;
  }
  function d3_geom_voronoiCreateBeach(site) {
    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
    beach.site = site;
    return beach;
  }
  function d3_geom_voronoiDetachBeach(beach) {
    d3_geom_voronoiDetachCircle(beach);
    d3_geom_voronoiBeaches.remove(beach);
    d3_geom_voronoiBeachPool.push(beach);
    d3_geom_voronoiRedBlackNode(beach);
  }
  function d3_geom_voronoiRemoveBeach(beach) {
    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
      x: x,
      y: y
    }, previous = beach.P, next = beach.N, disappearing = [ beach ];
    d3_geom_voronoiDetachBeach(beach);
    var lArc = previous;
    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
      previous = lArc.P;
      disappearing.unshift(lArc);
      d3_geom_voronoiDetachBeach(lArc);
      lArc = previous;
    }
    disappearing.unshift(lArc);
    d3_geom_voronoiDetachCircle(lArc);
    var rArc = next;
    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
      next = rArc.N;
      disappearing.push(rArc);
      d3_geom_voronoiDetachBeach(rArc);
      rArc = next;
    }
    disappearing.push(rArc);
    d3_geom_voronoiDetachCircle(rArc);
    var nArcs = disappearing.length, iArc;
    for (iArc = 1; iArc < nArcs; ++iArc) {
      rArc = disappearing[iArc];
      lArc = disappearing[iArc - 1];
      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
    }
    lArc = disappearing[0];
    rArc = disappearing[nArcs - 1];
    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiAddBeach(site) {
    var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
    while (node) {
      dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
      if (dxl > ε) node = node.L; else {
        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
        if (dxr > ε) {
          if (!node.R) {
            lArc = node;
            break;
          }
          node = node.R;
        } else {
          if (dxl > -ε) {
            lArc = node.P;
            rArc = node;
          } else if (dxr > -ε) {
            lArc = node;
            rArc = node.N;
          } else {
            lArc = rArc = node;
          }
          break;
        }
      }
    }
    var newArc = d3_geom_voronoiCreateBeach(site);
    d3_geom_voronoiBeaches.insert(lArc, newArc);
    if (!lArc && !rArc) return;
    if (lArc === rArc) {
      d3_geom_voronoiDetachCircle(lArc);
      rArc = d3_geom_voronoiCreateBeach(lArc.site);
      d3_geom_voronoiBeaches.insert(newArc, rArc);
      newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      d3_geom_voronoiAttachCircle(lArc);
      d3_geom_voronoiAttachCircle(rArc);
      return;
    }
    if (!rArc) {
      newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      return;
    }
    d3_geom_voronoiDetachCircle(lArc);
    d3_geom_voronoiDetachCircle(rArc);
    var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
      x: (cy * hb - by * hc) / d + ax,
      y: (bx * hc - cx * hb) / d + ay
    };
    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
    var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
    if (!pby2) return rfocx;
    var lArc = arc.P;
    if (!lArc) return -Infinity;
    site = lArc.site;
    var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
    if (!plby2) return lfocx;
    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
    return (rfocx + lfocx) / 2;
  }
  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
    var rArc = arc.N;
    if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
    var site = arc.site;
    return site.y === directrix ? site.x : Infinity;
  }
  function d3_geom_voronoiCell(site) {
    this.site = site;
    this.edges = [];
  }
  d3_geom_voronoiCell.prototype.prepare = function() {
    var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
    while (iHalfEdge--) {
      edge = halfEdges[iHalfEdge].edge;
      if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
    }
    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
    return halfEdges.length;
  };
  function d3_geom_voronoiCloseCells(extent) {
    var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
    while (iCell--) {
      cell = cells[iCell];
      if (!cell || !cell.prepare()) continue;
      halfEdges = cell.edges;
      nHalfEdges = halfEdges.length;
      iHalfEdge = 0;
      while (iHalfEdge < nHalfEdges) {
        end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
        start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
          halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
            x: x0,
            y: abs(x2 - x0) < ε ? y2 : y1
          } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
            x: abs(y2 - y1) < ε ? x2 : x1,
            y: y1
          } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
            x: x1,
            y: abs(x2 - x1) < ε ? y2 : y0
          } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
            x: abs(y2 - y0) < ε ? x2 : x0,
            y: y0
          } : null), cell.site, null));
          ++nHalfEdges;
        }
      }
    }
  }
  function d3_geom_voronoiHalfEdgeOrder(a, b) {
    return b.angle - a.angle;
  }
  function d3_geom_voronoiCircle() {
    d3_geom_voronoiRedBlackNode(this);
    this.x = this.y = this.arc = this.site = this.cy = null;
  }
  function d3_geom_voronoiAttachCircle(arc) {
    var lArc = arc.P, rArc = arc.N;
    if (!lArc || !rArc) return;
    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
    if (lSite === rSite) return;
    var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
    var d = 2 * (ax * cy - ay * cx);
    if (d >= -ε2) return;
    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
    var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
    circle.arc = arc;
    circle.site = cSite;
    circle.x = x + bx;
    circle.y = cy + Math.sqrt(x * x + y * y);
    circle.cy = cy;
    arc.circle = circle;
    var before = null, node = d3_geom_voronoiCircles._;
    while (node) {
      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
        if (node.L) node = node.L; else {
          before = node.P;
          break;
        }
      } else {
        if (node.R) node = node.R; else {
          before = node;
          break;
        }
      }
    }
    d3_geom_voronoiCircles.insert(before, circle);
    if (!before) d3_geom_voronoiFirstCircle = circle;
  }
  function d3_geom_voronoiDetachCircle(arc) {
    var circle = arc.circle;
    if (circle) {
      if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
      d3_geom_voronoiCircles.remove(circle);
      d3_geom_voronoiCirclePool.push(circle);
      d3_geom_voronoiRedBlackNode(circle);
      arc.circle = null;
    }
  }
  function d3_geom_voronoiClipEdges(extent) {
    var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
    while (i--) {
      e = edges[i];
      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
        e.a = e.b = null;
        edges.splice(i, 1);
      }
    }
  }
  function d3_geom_voronoiConnectEdge(edge, extent) {
    var vb = edge.b;
    if (vb) return true;
    var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
    if (ry === ly) {
      if (fx < x0 || fx >= x1) return;
      if (lx > rx) {
        if (!va) va = {
          x: fx,
          y: y0
        }; else if (va.y >= y1) return;
        vb = {
          x: fx,
          y: y1
        };
      } else {
        if (!va) va = {
          x: fx,
          y: y1
        }; else if (va.y < y0) return;
        vb = {
          x: fx,
          y: y0
        };
      }
    } else {
      fm = (lx - rx) / (ry - ly);
      fb = fy - fm * fx;
      if (fm < -1 || fm > 1) {
        if (lx > rx) {
          if (!va) va = {
            x: (y0 - fb) / fm,
            y: y0
          }; else if (va.y >= y1) return;
          vb = {
            x: (y1 - fb) / fm,
            y: y1
          };
        } else {
          if (!va) va = {
            x: (y1 - fb) / fm,
            y: y1
          }; else if (va.y < y0) return;
          vb = {
            x: (y0 - fb) / fm,
            y: y0
          };
        }
      } else {
        if (ly < ry) {
          if (!va) va = {
            x: x0,
            y: fm * x0 + fb
          }; else if (va.x >= x1) return;
          vb = {
            x: x1,
            y: fm * x1 + fb
          };
        } else {
          if (!va) va = {
            x: x1,
            y: fm * x1 + fb
          }; else if (va.x < x0) return;
          vb = {
            x: x0,
            y: fm * x0 + fb
          };
        }
      }
    }
    edge.a = va;
    edge.b = vb;
    return true;
  }
  function d3_geom_voronoiEdge(lSite, rSite) {
    this.l = lSite;
    this.r = rSite;
    this.a = this.b = null;
  }
  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, rSite);
    d3_geom_voronoiEdges.push(edge);
    if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
    if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
    return edge;
  }
  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, null);
    edge.a = va;
    edge.b = vb;
    d3_geom_voronoiEdges.push(edge);
    return edge;
  }
  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
    if (!edge.a && !edge.b) {
      edge.a = vertex;
      edge.l = lSite;
      edge.r = rSite;
    } else if (edge.l === rSite) {
      edge.b = vertex;
    } else {
      edge.a = vertex;
    }
  }
  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
    var va = edge.a, vb = edge.b;
    this.edge = edge;
    this.site = lSite;
    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
  }
  d3_geom_voronoiHalfEdge.prototype = {
    start: function() {
      return this.edge.l === this.site ? this.edge.a : this.edge.b;
    },
    end: function() {
      return this.edge.l === this.site ? this.edge.b : this.edge.a;
    }
  };
  function d3_geom_voronoiRedBlackTree() {
    this._ = null;
  }
  function d3_geom_voronoiRedBlackNode(node) {
    node.U = node.C = node.L = node.R = node.P = node.N = null;
  }
  d3_geom_voronoiRedBlackTree.prototype = {
    insert: function(after, node) {
      var parent, grandpa, uncle;
      if (after) {
        node.P = after;
        node.N = after.N;
        if (after.N) after.N.P = node;
        after.N = node;
        if (after.R) {
          after = after.R;
          while (after.L) after = after.L;
          after.L = node;
        } else {
          after.R = node;
        }
        parent = after;
      } else if (this._) {
        after = d3_geom_voronoiRedBlackFirst(this._);
        node.P = null;
        node.N = after;
        after.P = after.L = node;
        parent = after;
      } else {
        node.P = node.N = null;
        this._ = node;
        parent = null;
      }
      node.L = node.R = null;
      node.U = parent;
      node.C = true;
      after = node;
      while (parent && parent.C) {
        grandpa = parent.U;
        if (parent === grandpa.L) {
          uncle = grandpa.R;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.R) {
              d3_geom_voronoiRedBlackRotateLeft(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
          }
        } else {
          uncle = grandpa.L;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.L) {
              d3_geom_voronoiRedBlackRotateRight(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
          }
        }
        parent = after.U;
      }
      this._.C = false;
    },
    remove: function(node) {
      if (node.N) node.N.P = node.P;
      if (node.P) node.P.N = node.N;
      node.N = node.P = null;
      var parent = node.U, sibling, left = node.L, right = node.R, next, red;
      if (!left) next = right; else if (!right) next = left; else next = d3_geom_voronoiRedBlackFirst(right);
      if (parent) {
        if (parent.L === node) parent.L = next; else parent.R = next;
      } else {
        this._ = next;
      }
      if (left && right) {
        red = next.C;
        next.C = node.C;
        next.L = left;
        left.U = next;
        if (next !== right) {
          parent = next.U;
          next.U = node.U;
          node = next.R;
          parent.L = node;
          next.R = right;
          right.U = next;
        } else {
          next.U = parent;
          parent = next;
          node = next.R;
        }
      } else {
        red = node.C;
        node = next;
      }
      if (node) node.U = parent;
      if (red) return;
      if (node && node.C) {
        node.C = false;
        return;
      }
      do {
        if (node === this._) break;
        if (node === parent.L) {
          sibling = parent.R;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            sibling = parent.R;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.R || !sibling.R.C) {
              sibling.L.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateRight(this, sibling);
              sibling = parent.R;
            }
            sibling.C = parent.C;
            parent.C = sibling.R.C = false;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            node = this._;
            break;
          }
        } else {
          sibling = parent.L;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            sibling = parent.L;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.L || !sibling.L.C) {
              sibling.R.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateLeft(this, sibling);
              sibling = parent.L;
            }
            sibling.C = parent.C;
            parent.C = sibling.L.C = false;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            node = this._;
            break;
          }
        }
        sibling.C = true;
        node = parent;
        parent = parent.U;
      } while (!node.C);
      if (node) node.C = false;
    }
  };
  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
    var p = node, q = node.R, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.R = q.L;
    if (p.R) p.R.U = p;
    q.L = p;
  }
  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
    var p = node, q = node.L, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.L = q.R;
    if (p.L) p.L.U = p;
    q.R = p;
  }
  function d3_geom_voronoiRedBlackFirst(node) {
    while (node.L) node = node.L;
    return node;
  }
  function d3_geom_voronoi(sites, bbox) {
    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
    d3_geom_voronoiEdges = [];
    d3_geom_voronoiCells = new Array(sites.length);
    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
    while (true) {
      circle = d3_geom_voronoiFirstCircle;
      if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
        if (site.x !== x0 || site.y !== y0) {
          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
          d3_geom_voronoiAddBeach(site);
          x0 = site.x, y0 = site.y;
        }
        site = sites.pop();
      } else if (circle) {
        d3_geom_voronoiRemoveBeach(circle.arc);
      } else {
        break;
      }
    }
    if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
    var diagram = {
      cells: d3_geom_voronoiCells,
      edges: d3_geom_voronoiEdges
    };
    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
    return diagram;
  }
  function d3_geom_voronoiVertexOrder(a, b) {
    return b.y - a.y || b.x - a.x;
  }
  d3.geom.voronoi = function(points) {
    var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
    if (points) return voronoi(points);
    function voronoi(data) {
      var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
      d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
        var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
          var s = e.start();
          return [ s.x, s.y ];
        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [ [ x0, y1 ], [ x1, y1 ], [ x1, y0 ], [ x0, y0 ] ] : [];
        polygon.point = data[i];
      });
      return polygons;
    }
    function sites(data) {
      return data.map(function(d, i) {
        return {
          x: Math.round(fx(d, i) / ε) * ε,
          y: Math.round(fy(d, i) / ε) * ε,
          i: i
        };
      });
    }
    voronoi.links = function(data) {
      return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
        return edge.l && edge.r;
      }).map(function(edge) {
        return {
          source: data[edge.l.i],
          target: data[edge.r.i]
        };
      });
    };
    voronoi.triangles = function(data) {
      var triangles = [];
      d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
        var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
        while (++j < m) {
          e0 = e1;
          s0 = s1;
          e1 = edges[j].edge;
          s1 = e1.l === site ? e1.r : e1.l;
          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
            triangles.push([ data[i], data[s0.i], data[s1.i] ]);
          }
        }
      });
      return triangles;
    };
    voronoi.x = function(_) {
      return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
    };
    voronoi.y = function(_) {
      return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
    };
    voronoi.clipExtent = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
      clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
      return voronoi;
    };
    voronoi.size = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
      return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
    };
    return voronoi;
  };
  var d3_geom_voronoiClipExtent = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
  function d3_geom_voronoiTriangleArea(a, b, c) {
    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
  }
  d3.geom.delaunay = function(vertices) {
    return d3.geom.voronoi().triangles(vertices);
  };
  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
    var x = d3_geom_pointX, y = d3_geom_pointY, compat;
    if (compat = arguments.length) {
      x = d3_geom_quadtreeCompatX;
      y = d3_geom_quadtreeCompatY;
      if (compat === 3) {
        y2 = y1;
        x2 = x1;
        y1 = x1 = 0;
      }
      return quadtree(points);
    }
    function quadtree(data) {
      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
      if (x1 != null) {
        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
      } else {
        x2_ = y2_ = -(x1_ = y1_ = Infinity);
        xs = [], ys = [];
        n = data.length;
        if (compat) for (i = 0; i < n; ++i) {
          d = data[i];
          if (d.x < x1_) x1_ = d.x;
          if (d.y < y1_) y1_ = d.y;
          if (d.x > x2_) x2_ = d.x;
          if (d.y > y2_) y2_ = d.y;
          xs.push(d.x);
          ys.push(d.y);
        } else for (i = 0; i < n; ++i) {
          var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
          if (x_ < x1_) x1_ = x_;
          if (y_ < y1_) y1_ = y_;
          if (x_ > x2_) x2_ = x_;
          if (y_ > y2_) y2_ = y_;
          xs.push(x_);
          ys.push(y_);
        }
      }
      var dx = x2_ - x1_, dy = y2_ - y1_;
      if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
      function insert(n, d, x, y, x1, y1, x2, y2) {
        if (isNaN(x) || isNaN(y)) return;
        if (n.leaf) {
          var nx = n.x, ny = n.y;
          if (nx != null) {
            if (abs(nx - x) + abs(ny - y) < .01) {
              insertChild(n, d, x, y, x1, y1, x2, y2);
            } else {
              var nPoint = n.point;
              n.x = n.y = n.point = null;
              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
              insertChild(n, d, x, y, x1, y1, x2, y2);
            }
          } else {
            n.x = x, n.y = y, n.point = d;
          }
        } else {
          insertChild(n, d, x, y, x1, y1, x2, y2);
        }
      }
      function insertChild(n, d, x, y, x1, y1, x2, y2) {
        var xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym, i = below << 1 | right;
        n.leaf = false;
        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
        if (right) x1 = xm; else x2 = xm;
        if (below) y1 = ym; else y2 = ym;
        insert(n, d, x, y, x1, y1, x2, y2);
      }
      var root = d3_geom_quadtreeNode();
      root.add = function(d) {
        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
      };
      root.visit = function(f) {
        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
      };
      root.find = function(point) {
        return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
      };
      i = -1;
      if (x1 == null) {
        while (++i < n) {
          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
        }
        --i;
      } else data.forEach(root.add);
      xs = ys = data = d = null;
      return root;
    }
    quadtree.x = function(_) {
      return arguments.length ? (x = _, quadtree) : x;
    };
    quadtree.y = function(_) {
      return arguments.length ? (y = _, quadtree) : y;
    };
    quadtree.extent = function(_) {
      if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], 
      y2 = +_[1][1];
      return quadtree;
    };
    quadtree.size = function(_) {
      if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
      return quadtree;
    };
    return quadtree;
  };
  function d3_geom_quadtreeCompatX(d) {
    return d.x;
  }
  function d3_geom_quadtreeCompatY(d) {
    return d.y;
  }
  function d3_geom_quadtreeNode() {
    return {
      leaf: true,
      nodes: [],
      point: null,
      x: null,
      y: null
    };
  }
  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
    if (!f(node, x1, y1, x2, y2)) {
      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
    }
  }
  function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
    var minDistance2 = Infinity, closestPoint;
    (function find(node, x1, y1, x2, y2) {
      if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;
      if (point = node.point) {
        var point, dx = x - node.x, dy = y - node.y, distance2 = dx * dx + dy * dy;
        if (distance2 < minDistance2) {
          var distance = Math.sqrt(minDistance2 = distance2);
          x0 = x - distance, y0 = y - distance;
          x3 = x + distance, y3 = y + distance;
          closestPoint = point;
        }
      }
      var children = node.nodes, xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym;
      for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
        if (node = children[i & 3]) switch (i & 3) {
         case 0:
          find(node, x1, y1, xm, ym);
          break;

         case 1:
          find(node, xm, y1, x2, ym);
          break;

         case 2:
          find(node, x1, ym, xm, y2);
          break;

         case 3:
          find(node, xm, ym, x2, y2);
          break;
        }
      }
    })(root, x0, y0, x3, y3);
    return closestPoint;
  }
  d3.interpolateRgb = d3_interpolateRgb;
  function d3_interpolateRgb(a, b) {
    a = d3.rgb(a);
    b = d3.rgb(b);
    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
    return function(t) {
      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
    };
  }
  d3.interpolateObject = d3_interpolateObject;
  function d3_interpolateObject(a, b) {
    var i = {}, c = {}, k;
    for (k in a) {
      if (k in b) {
        i[k] = d3_interpolate(a[k], b[k]);
      } else {
        c[k] = a[k];
      }
    }
    for (k in b) {
      if (!(k in a)) {
        c[k] = b[k];
      }
    }
    return function(t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  }
  d3.interpolateNumber = d3_interpolateNumber;
  function d3_interpolateNumber(a, b) {
    a = +a, b = +b;
    return function(t) {
      return a * (1 - t) + b * t;
    };
  }
  d3.interpolateString = d3_interpolateString;
  function d3_interpolateString(a, b) {
    var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
    a = a + "", b = b + "";
    while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
      if ((bs = bm.index) > bi) {
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s[i]) s[i] += bm; else s[++i] = bm;
      } else {
        s[++i] = null;
        q.push({
          i: i,
          x: d3_interpolateNumber(am, bm)
        });
      }
      bi = d3_interpolate_numberB.lastIndex;
    }
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; else s[++i] = bs;
    }
    return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
      return b(t) + "";
    }) : function() {
      return b;
    } : (b = q.length, function(t) {
      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    });
  }
  var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
  d3.interpolate = d3_interpolate;
  function d3_interpolate(a, b) {
    var i = d3.interpolators.length, f;
    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
    return f;
  }
  d3.interpolators = [ function(a, b) {
    var t = typeof b;
    return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
  } ];
  d3.interpolateArray = d3_interpolateArray;
  function d3_interpolateArray(a, b) {
    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
    for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
    for (;i < na; ++i) c[i] = a[i];
    for (;i < nb; ++i) c[i] = b[i];
    return function(t) {
      for (i = 0; i < n0; ++i) c[i] = x[i](t);
      return c;
    };
  }
  var d3_ease_default = function() {
    return d3_identity;
  };
  var d3_ease = d3.map({
    linear: d3_ease_default,
    poly: d3_ease_poly,
    quad: function() {
      return d3_ease_quad;
    },
    cubic: function() {
      return d3_ease_cubic;
    },
    sin: function() {
      return d3_ease_sin;
    },
    exp: function() {
      return d3_ease_exp;
    },
    circle: function() {
      return d3_ease_circle;
    },
    elastic: d3_ease_elastic,
    back: d3_ease_back,
    bounce: function() {
      return d3_ease_bounce;
    }
  });
  var d3_ease_mode = d3.map({
    "in": d3_identity,
    out: d3_ease_reverse,
    "in-out": d3_ease_reflect,
    "out-in": function(f) {
      return d3_ease_reflect(d3_ease_reverse(f));
    }
  });
  d3.ease = function(name) {
    var i = name.indexOf("-"), t = i >= 0 ? name.slice(0, i) : name, m = i >= 0 ? name.slice(i + 1) : "in";
    t = d3_ease.get(t) || d3_ease_default;
    m = d3_ease_mode.get(m) || d3_identity;
    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
  };
  function d3_ease_clamp(f) {
    return function(t) {
      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
    };
  }
  function d3_ease_reverse(f) {
    return function(t) {
      return 1 - f(1 - t);
    };
  }
  function d3_ease_reflect(f) {
    return function(t) {
      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
    };
  }
  function d3_ease_quad(t) {
    return t * t;
  }
  function d3_ease_cubic(t) {
    return t * t * t;
  }
  function d3_ease_cubicInOut(t) {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    var t2 = t * t, t3 = t2 * t;
    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
  }
  function d3_ease_poly(e) {
    return function(t) {
      return Math.pow(t, e);
    };
  }
  function d3_ease_sin(t) {
    return 1 - Math.cos(t * halfπ);
  }
  function d3_ease_exp(t) {
    return Math.pow(2, 10 * (t - 1));
  }
  function d3_ease_circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  function d3_ease_elastic(a, p) {
    var s;
    if (arguments.length < 2) p = .45;
    if (arguments.length) s = p / τ * Math.asin(1 / a); else a = 1, s = p / 4;
    return function(t) {
      return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
    };
  }
  function d3_ease_back(s) {
    if (!s) s = 1.70158;
    return function(t) {
      return t * t * ((s + 1) * t - s);
    };
  }
  function d3_ease_bounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }
  d3.interpolateHcl = d3_interpolateHcl;
  function d3_interpolateHcl(a, b) {
    a = d3.hcl(a);
    b = d3.hcl(b);
    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
    };
  }
  d3.interpolateHsl = d3_interpolateHsl;
  function d3_interpolateHsl(a, b) {
    a = d3.hsl(a);
    b = d3.hsl(b);
    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
    };
  }
  d3.interpolateLab = d3_interpolateLab;
  function d3_interpolateLab(a, b) {
    a = d3.lab(a);
    b = d3.lab(b);
    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
    return function(t) {
      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
    };
  }
  d3.interpolateRound = d3_interpolateRound;
  function d3_interpolateRound(a, b) {
    b -= a;
    return function(t) {
      return Math.round(a + b * t);
    };
  }
  d3.transform = function(string) {
    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
    return (d3.transform = function(string) {
      if (string != null) {
        g.setAttribute("transform", string);
        var t = g.transform.baseVal.consolidate();
      }
      return new d3_transform(t ? t.matrix : d3_transformIdentity);
    })(string);
  };
  function d3_transform(m) {
    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
    if (r0[0] * r1[1] < r1[0] * r0[1]) {
      r0[0] *= -1;
      r0[1] *= -1;
      kx *= -1;
      kz *= -1;
    }
    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
    this.translate = [ m.e, m.f ];
    this.scale = [ kx, ky ];
    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
  }
  d3_transform.prototype.toString = function() {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };
  function d3_transformDot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
  }
  function d3_transformNormalize(a) {
    var k = Math.sqrt(d3_transformDot(a, a));
    if (k) {
      a[0] /= k;
      a[1] /= k;
    }
    return k;
  }
  function d3_transformCombine(a, b, k) {
    a[0] += k * b[0];
    a[1] += k * b[1];
    return a;
  }
  var d3_transformIdentity = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  d3.interpolateTransform = d3_interpolateTransform;
  function d3_interpolateTransformPop(s) {
    return s.length ? s.pop() + "," : "";
  }
  function d3_interpolateTranslate(ta, tb, s, q) {
    if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
      var i = s.push("translate(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: d3_interpolateNumber(ta[0], tb[0])
      }, {
        i: i - 2,
        x: d3_interpolateNumber(ta[1], tb[1])
      });
    } else if (tb[0] || tb[1]) {
      s.push("translate(" + tb + ")");
    }
  }
  function d3_interpolateRotate(ra, rb, s, q) {
    if (ra !== rb) {
      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
      q.push({
        i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
        x: d3_interpolateNumber(ra, rb)
      });
    } else if (rb) {
      s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")");
    }
  }
  function d3_interpolateSkew(wa, wb, s, q) {
    if (wa !== wb) {
      q.push({
        i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
        x: d3_interpolateNumber(wa, wb)
      });
    } else if (wb) {
      s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")");
    }
  }
  function d3_interpolateScale(ka, kb, s, q) {
    if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
      var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: d3_interpolateNumber(ka[0], kb[0])
      }, {
        i: i - 2,
        x: d3_interpolateNumber(ka[1], kb[1])
      });
    } else if (kb[0] !== 1 || kb[1] !== 1) {
      s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")");
    }
  }
  function d3_interpolateTransform(a, b) {
    var s = [], q = [];
    a = d3.transform(a), b = d3.transform(b);
    d3_interpolateTranslate(a.translate, b.translate, s, q);
    d3_interpolateRotate(a.rotate, b.rotate, s, q);
    d3_interpolateSkew(a.skew, b.skew, s, q);
    d3_interpolateScale(a.scale, b.scale, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  }
  function d3_uninterpolateNumber(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return (x - a) / b;
    };
  }
  function d3_uninterpolateClamp(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return Math.max(0, Math.min(1, (x - a) / b));
    };
  }
  d3.layout = {};
  d3.layout.bundle = function() {
    return function(links) {
      var paths = [], i = -1, n = links.length;
      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
      return paths;
    };
  };
  function d3_layout_bundlePath(link) {
    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
    while (start !== lca) {
      start = start.parent;
      points.push(start);
    }
    var k = points.length;
    while (end !== lca) {
      points.splice(k, 0, end);
      end = end.parent;
    }
    return points;
  }
  function d3_layout_bundleAncestors(node) {
    var ancestors = [], parent = node.parent;
    while (parent != null) {
      ancestors.push(node);
      node = parent;
      parent = parent.parent;
    }
    ancestors.push(node);
    return ancestors;
  }
  function d3_layout_bundleLeastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
    while (aNode === bNode) {
      sharedNode = aNode;
      aNode = aNodes.pop();
      bNode = bNodes.pop();
    }
    return sharedNode;
  }
  d3.layout.chord = function() {
    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
    function relayout() {
      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
      chords = [];
      groups = [];
      k = 0, i = -1;
      while (++i < n) {
        x = 0, j = -1;
        while (++j < n) {
          x += matrix[i][j];
        }
        groupSums.push(x);
        subgroupIndex.push(d3.range(n));
        k += x;
      }
      if (sortGroups) {
        groupIndex.sort(function(a, b) {
          return sortGroups(groupSums[a], groupSums[b]);
        });
      }
      if (sortSubgroups) {
        subgroupIndex.forEach(function(d, i) {
          d.sort(function(a, b) {
            return sortSubgroups(matrix[i][a], matrix[i][b]);
          });
        });
      }
      k = (τ - padding * n) / k;
      x = 0, i = -1;
      while (++i < n) {
        x0 = x, j = -1;
        while (++j < n) {
          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
          subgroups[di + "-" + dj] = {
            index: di,
            subindex: dj,
            startAngle: a0,
            endAngle: a1,
            value: v
          };
        }
        groups[di] = {
          index: di,
          startAngle: x0,
          endAngle: x,
          value: groupSums[di]
        };
        x += padding;
      }
      i = -1;
      while (++i < n) {
        j = i - 1;
        while (++j < n) {
          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
          if (source.value || target.value) {
            chords.push(source.value < target.value ? {
              source: target,
              target: source
            } : {
              source: source,
              target: target
            });
          }
        }
      }
      if (sortChords) resort();
    }
    function resort() {
      chords.sort(function(a, b) {
        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
      });
    }
    chord.matrix = function(x) {
      if (!arguments.length) return matrix;
      n = (matrix = x) && matrix.length;
      chords = groups = null;
      return chord;
    };
    chord.padding = function(x) {
      if (!arguments.length) return padding;
      padding = x;
      chords = groups = null;
      return chord;
    };
    chord.sortGroups = function(x) {
      if (!arguments.length) return sortGroups;
      sortGroups = x;
      chords = groups = null;
      return chord;
    };
    chord.sortSubgroups = function(x) {
      if (!arguments.length) return sortSubgroups;
      sortSubgroups = x;
      chords = null;
      return chord;
    };
    chord.sortChords = function(x) {
      if (!arguments.length) return sortChords;
      sortChords = x;
      if (chords) resort();
      return chord;
    };
    chord.chords = function() {
      if (!chords) relayout();
      return chords;
    };
    chord.groups = function() {
      if (!groups) relayout();
      return groups;
    };
    return chord;
  };
  d3.layout.force = function() {
    var force = {}, event = d3.dispatch("start", "tick", "end"), timer, size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = .1, theta2 = .64, nodes = [], links = [], distances, strengths, charges;
    function repulse(node) {
      return function(quad, x1, _, x2) {
        if (quad.point !== node) {
          var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
          if (dw * dw / theta2 < dn) {
            if (dn < chargeDistance2) {
              var k = quad.charge / dn;
              node.px -= dx * k;
              node.py -= dy * k;
            }
            return true;
          }
          if (quad.point && dn && dn < chargeDistance2) {
            var k = quad.pointCharge / dn;
            node.px -= dx * k;
            node.py -= dy * k;
          }
        }
        return !quad.charge;
      };
    }
    force.tick = function() {
      if ((alpha *= .99) < .005) {
        timer = null;
        event.end({
          type: "end",
          alpha: alpha = 0
        });
        return true;
      }
      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
      for (i = 0; i < m; ++i) {
        o = links[i];
        s = o.source;
        t = o.target;
        x = t.x - s.x;
        y = t.y - s.y;
        if (l = x * x + y * y) {
          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
          x *= l;
          y *= l;
          t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : .5);
          t.y -= y * k;
          s.x += x * (k = 1 - k);
          s.y += y * k;
        }
      }
      if (k = alpha * gravity) {
        x = size[0] / 2;
        y = size[1] / 2;
        i = -1;
        if (k) while (++i < n) {
          o = nodes[i];
          o.x += (x - o.x) * k;
          o.y += (y - o.y) * k;
        }
      }
      if (charge) {
        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
        i = -1;
        while (++i < n) {
          if (!(o = nodes[i]).fixed) {
            q.visit(repulse(o));
          }
        }
      }
      i = -1;
      while (++i < n) {
        o = nodes[i];
        if (o.fixed) {
          o.x = o.px;
          o.y = o.py;
        } else {
          o.x -= (o.px - (o.px = o.x)) * friction;
          o.y -= (o.py - (o.py = o.y)) * friction;
        }
      }
      event.tick({
        type: "tick",
        alpha: alpha
      });
    };
    force.nodes = function(x) {
      if (!arguments.length) return nodes;
      nodes = x;
      return force;
    };
    force.links = function(x) {
      if (!arguments.length) return links;
      links = x;
      return force;
    };
    force.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return force;
    };
    force.linkDistance = function(x) {
      if (!arguments.length) return linkDistance;
      linkDistance = typeof x === "function" ? x : +x;
      return force;
    };
    force.distance = force.linkDistance;
    force.linkStrength = function(x) {
      if (!arguments.length) return linkStrength;
      linkStrength = typeof x === "function" ? x : +x;
      return force;
    };
    force.friction = function(x) {
      if (!arguments.length) return friction;
      friction = +x;
      return force;
    };
    force.charge = function(x) {
      if (!arguments.length) return charge;
      charge = typeof x === "function" ? x : +x;
      return force;
    };
    force.chargeDistance = function(x) {
      if (!arguments.length) return Math.sqrt(chargeDistance2);
      chargeDistance2 = x * x;
      return force;
    };
    force.gravity = function(x) {
      if (!arguments.length) return gravity;
      gravity = +x;
      return force;
    };
    force.theta = function(x) {
      if (!arguments.length) return Math.sqrt(theta2);
      theta2 = x * x;
      return force;
    };
    force.alpha = function(x) {
      if (!arguments.length) return alpha;
      x = +x;
      if (alpha) {
        if (x > 0) {
          alpha = x;
        } else {
          timer.c = null, timer.t = NaN, timer = null;
          event.end({
            type: "end",
            alpha: alpha = 0
          });
        }
      } else if (x > 0) {
        event.start({
          type: "start",
          alpha: alpha = x
        });
        timer = d3_timer(force.tick);
      }
      return force;
    };
    force.start = function() {
      var i, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
      for (i = 0; i < n; ++i) {
        (o = nodes[i]).index = i;
        o.weight = 0;
      }
      for (i = 0; i < m; ++i) {
        o = links[i];
        if (typeof o.source == "number") o.source = nodes[o.source];
        if (typeof o.target == "number") o.target = nodes[o.target];
        ++o.source.weight;
        ++o.target.weight;
      }
      for (i = 0; i < n; ++i) {
        o = nodes[i];
        if (isNaN(o.x)) o.x = position("x", w);
        if (isNaN(o.y)) o.y = position("y", h);
        if (isNaN(o.px)) o.px = o.x;
        if (isNaN(o.py)) o.py = o.y;
      }
      distances = [];
      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
      strengths = [];
      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
      charges = [];
      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
      function position(dimension, size) {
        if (!neighbors) {
          neighbors = new Array(n);
          for (j = 0; j < n; ++j) {
            neighbors[j] = [];
          }
          for (j = 0; j < m; ++j) {
            var o = links[j];
            neighbors[o.source.index].push(o.target);
            neighbors[o.target.index].push(o.source);
          }
        }
        var candidates = neighbors[i], j = -1, l = candidates.length, x;
        while (++j < l) if (!isNaN(x = candidates[j][dimension])) return x;
        return Math.random() * size;
      }
      return force.resume();
    };
    force.resume = function() {
      return force.alpha(.1);
    };
    force.stop = function() {
      return force.alpha(0);
    };
    force.drag = function() {
      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
      if (!arguments.length) return drag;
      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
    };
    function dragmove(d) {
      d.px = d3.event.x, d.py = d3.event.y;
      force.resume();
    }
    return d3.rebind(force, event, "on");
  };
  function d3_layout_forceDragstart(d) {
    d.fixed |= 2;
  }
  function d3_layout_forceDragend(d) {
    d.fixed &= ~6;
  }
  function d3_layout_forceMouseover(d) {
    d.fixed |= 4;
    d.px = d.x, d.py = d.y;
  }
  function d3_layout_forceMouseout(d) {
    d.fixed &= ~4;
  }
  function d3_layout_forceAccumulate(quad, alpha, charges) {
    var cx = 0, cy = 0;
    quad.charge = 0;
    if (!quad.leaf) {
      var nodes = quad.nodes, n = nodes.length, i = -1, c;
      while (++i < n) {
        c = nodes[i];
        if (c == null) continue;
        d3_layout_forceAccumulate(c, alpha, charges);
        quad.charge += c.charge;
        cx += c.charge * c.cx;
        cy += c.charge * c.cy;
      }
    }
    if (quad.point) {
      if (!quad.leaf) {
        quad.point.x += Math.random() - .5;
        quad.point.y += Math.random() - .5;
      }
      var k = alpha * charges[quad.point.index];
      quad.charge += quad.pointCharge = k;
      cx += k * quad.point.x;
      cy += k * quad.point.y;
    }
    quad.cx = cx / quad.charge;
    quad.cy = cy / quad.charge;
  }
  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
  d3.layout.hierarchy = function() {
    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
    function hierarchy(root) {
      var stack = [ root ], nodes = [], node;
      root.depth = 0;
      while ((node = stack.pop()) != null) {
        nodes.push(node);
        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
          var n, childs, child;
          while (--n >= 0) {
            stack.push(child = childs[n]);
            child.parent = node;
            child.depth = node.depth + 1;
          }
          if (value) node.value = 0;
          node.children = childs;
        } else {
          if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
          delete node.children;
        }
      }
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var childs, parent;
        if (sort && (childs = node.children)) childs.sort(sort);
        if (value && (parent = node.parent)) parent.value += node.value;
      });
      return nodes;
    }
    hierarchy.sort = function(x) {
      if (!arguments.length) return sort;
      sort = x;
      return hierarchy;
    };
    hierarchy.children = function(x) {
      if (!arguments.length) return children;
      children = x;
      return hierarchy;
    };
    hierarchy.value = function(x) {
      if (!arguments.length) return value;
      value = x;
      return hierarchy;
    };
    hierarchy.revalue = function(root) {
      if (value) {
        d3_layout_hierarchyVisitBefore(root, function(node) {
          if (node.children) node.value = 0;
        });
        d3_layout_hierarchyVisitAfter(root, function(node) {
          var parent;
          if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
          if (parent = node.parent) parent.value += node.value;
        });
      }
      return root;
    };
    return hierarchy;
  };
  function d3_layout_hierarchyRebind(object, hierarchy) {
    d3.rebind(object, hierarchy, "sort", "children", "value");
    object.nodes = object;
    object.links = d3_layout_hierarchyLinks;
    return object;
  }
  function d3_layout_hierarchyVisitBefore(node, callback) {
    var nodes = [ node ];
    while ((node = nodes.pop()) != null) {
      callback(node);
      if ((children = node.children) && (n = children.length)) {
        var n, children;
        while (--n >= 0) nodes.push(children[n]);
      }
    }
  }
  function d3_layout_hierarchyVisitAfter(node, callback) {
    var nodes = [ node ], nodes2 = [];
    while ((node = nodes.pop()) != null) {
      nodes2.push(node);
      if ((children = node.children) && (n = children.length)) {
        var i = -1, n, children;
        while (++i < n) nodes.push(children[i]);
      }
    }
    while ((node = nodes2.pop()) != null) {
      callback(node);
    }
  }
  function d3_layout_hierarchyChildren(d) {
    return d.children;
  }
  function d3_layout_hierarchyValue(d) {
    return d.value;
  }
  function d3_layout_hierarchySort(a, b) {
    return b.value - a.value;
  }
  function d3_layout_hierarchyLinks(nodes) {
    return d3.merge(nodes.map(function(parent) {
      return (parent.children || []).map(function(child) {
        return {
          source: parent,
          target: child
        };
      });
    }));
  }
  d3.layout.partition = function() {
    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
    function position(node, x, dx, dy) {
      var children = node.children;
      node.x = x;
      node.y = node.depth * dy;
      node.dx = dx;
      node.dy = dy;
      if (children && (n = children.length)) {
        var i = -1, n, c, d;
        dx = node.value ? dx / node.value : 0;
        while (++i < n) {
          position(c = children[i], x, d = c.value * dx, dy);
          x += d;
        }
      }
    }
    function depth(node) {
      var children = node.children, d = 0;
      if (children && (n = children.length)) {
        var i = -1, n;
        while (++i < n) d = Math.max(d, depth(children[i]));
      }
      return 1 + d;
    }
    function partition(d, i) {
      var nodes = hierarchy.call(this, d, i);
      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
      return nodes;
    }
    partition.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return partition;
    };
    return d3_layout_hierarchyRebind(partition, hierarchy);
  };
  d3.layout.pie = function() {
    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ, padAngle = 0;
    function pie(data) {
      var n = data.length, values = data.map(function(d, i) {
        return +value.call(pie, d, i);
      }), a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle), da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a, p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)), pa = p * (da < 0 ? -1 : 1), sum = d3.sum(values), k = sum ? (da - n * pa) / sum : 0, index = d3.range(n), arcs = [], v;
      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
        return values[j] - values[i];
      } : function(i, j) {
        return sort(data[i], data[j]);
      });
      index.forEach(function(i) {
        arcs[i] = {
          data: data[i],
          value: v = values[i],
          startAngle: a,
          endAngle: a += v * k + pa,
          padAngle: p
        };
      });
      return arcs;
    }
    pie.value = function(_) {
      if (!arguments.length) return value;
      value = _;
      return pie;
    };
    pie.sort = function(_) {
      if (!arguments.length) return sort;
      sort = _;
      return pie;
    };
    pie.startAngle = function(_) {
      if (!arguments.length) return startAngle;
      startAngle = _;
      return pie;
    };
    pie.endAngle = function(_) {
      if (!arguments.length) return endAngle;
      endAngle = _;
      return pie;
    };
    pie.padAngle = function(_) {
      if (!arguments.length) return padAngle;
      padAngle = _;
      return pie;
    };
    return pie;
  };
  var d3_layout_pieSortByValue = {};
  d3.layout.stack = function() {
    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
    function stack(data, index) {
      if (!(n = data.length)) return data;
      var series = data.map(function(d, i) {
        return values.call(stack, d, i);
      });
      var points = series.map(function(d) {
        return d.map(function(v, i) {
          return [ x.call(stack, v, i), y.call(stack, v, i) ];
        });
      });
      var orders = order.call(stack, points, index);
      series = d3.permute(series, orders);
      points = d3.permute(points, orders);
      var offsets = offset.call(stack, points, index);
      var m = series[0].length, n, i, j, o;
      for (j = 0; j < m; ++j) {
        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
        for (i = 1; i < n; ++i) {
          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
        }
      }
      return data;
    }
    stack.values = function(x) {
      if (!arguments.length) return values;
      values = x;
      return stack;
    };
    stack.order = function(x) {
      if (!arguments.length) return order;
      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
      return stack;
    };
    stack.offset = function(x) {
      if (!arguments.length) return offset;
      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
      return stack;
    };
    stack.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      return stack;
    };
    stack.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      return stack;
    };
    stack.out = function(z) {
      if (!arguments.length) return out;
      out = z;
      return stack;
    };
    return stack;
  };
  function d3_layout_stackX(d) {
    return d.x;
  }
  function d3_layout_stackY(d) {
    return d.y;
  }
  function d3_layout_stackOut(d, y0, y) {
    d.y0 = y0;
    d.y = y;
  }
  var d3_layout_stackOrders = d3.map({
    "inside-out": function(data) {
      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
        return max[a] - max[b];
      }), top = 0, bottom = 0, tops = [], bottoms = [];
      for (i = 0; i < n; ++i) {
        j = index[i];
        if (top < bottom) {
          top += sums[j];
          tops.push(j);
        } else {
          bottom += sums[j];
          bottoms.push(j);
        }
      }
      return bottoms.reverse().concat(tops);
    },
    reverse: function(data) {
      return d3.range(data.length).reverse();
    },
    "default": d3_layout_stackOrderDefault
  });
  var d3_layout_stackOffsets = d3.map({
    silhouette: function(data) {
      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o > max) max = o;
        sums.push(o);
      }
      for (j = 0; j < m; ++j) {
        y0[j] = (max - sums[j]) / 2;
      }
      return y0;
    },
    wiggle: function(data) {
      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
      y0[0] = o = o0 = 0;
      for (j = 1; j < m; ++j) {
        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
          }
          s2 += s3 * data[i][j][1];
        }
        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
        if (o < o0) o0 = o;
      }
      for (j = 0; j < m; ++j) y0[j] -= o0;
      return y0;
    },
    expand: function(data) {
      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
      }
      for (j = 0; j < m; ++j) y0[j] = 0;
      return y0;
    },
    zero: d3_layout_stackOffsetZero
  });
  function d3_layout_stackOrderDefault(data) {
    return d3.range(data.length);
  }
  function d3_layout_stackOffsetZero(data) {
    var j = -1, m = data[0].length, y0 = [];
    while (++j < m) y0[j] = 0;
    return y0;
  }
  function d3_layout_stackMaxIndex(array) {
    var i = 1, j = 0, v = array[0][1], k, n = array.length;
    for (;i < n; ++i) {
      if ((k = array[i][1]) > v) {
        j = i;
        v = k;
      }
    }
    return j;
  }
  function d3_layout_stackReduceSum(d) {
    return d.reduce(d3_layout_stackSum, 0);
  }
  function d3_layout_stackSum(p, d) {
    return p + d[1];
  }
  d3.layout.histogram = function() {
    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
    function histogram(data, i) {
      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
      while (++i < m) {
        bin = bins[i] = [];
        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
        bin.y = 0;
      }
      if (m > 0) {
        i = -1;
        while (++i < n) {
          x = values[i];
          if (x >= range[0] && x <= range[1]) {
            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
            bin.y += k;
            bin.push(data[i]);
          }
        }
      }
      return bins;
    }
    histogram.value = function(x) {
      if (!arguments.length) return valuer;
      valuer = x;
      return histogram;
    };
    histogram.range = function(x) {
      if (!arguments.length) return ranger;
      ranger = d3_functor(x);
      return histogram;
    };
    histogram.bins = function(x) {
      if (!arguments.length) return binner;
      binner = typeof x === "number" ? function(range) {
        return d3_layout_histogramBinFixed(range, x);
      } : d3_functor(x);
      return histogram;
    };
    histogram.frequency = function(x) {
      if (!arguments.length) return frequency;
      frequency = !!x;
      return histogram;
    };
    return histogram;
  };
  function d3_layout_histogramBinSturges(range, values) {
    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
  }
  function d3_layout_histogramBinFixed(range, n) {
    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
    while (++x <= n) f[x] = m * x + b;
    return f;
  }
  function d3_layout_histogramRange(values) {
    return [ d3.min(values), d3.max(values) ];
  }
  d3.layout.pack = function() {
    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
    function pack(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
        return radius;
      };
      root.x = root.y = 0;
      d3_layout_hierarchyVisitAfter(root, function(d) {
        d.r = +r(d.value);
      });
      d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
      if (padding) {
        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r += dr;
        });
        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r -= dr;
        });
      }
      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
      return nodes;
    }
    pack.size = function(_) {
      if (!arguments.length) return size;
      size = _;
      return pack;
    };
    pack.radius = function(_) {
      if (!arguments.length) return radius;
      radius = _ == null || typeof _ === "function" ? _ : +_;
      return pack;
    };
    pack.padding = function(_) {
      if (!arguments.length) return padding;
      padding = +_;
      return pack;
    };
    return d3_layout_hierarchyRebind(pack, hierarchy);
  };
  function d3_layout_packSort(a, b) {
    return a.value - b.value;
  }
  function d3_layout_packInsert(a, b) {
    var c = a._pack_next;
    a._pack_next = b;
    b._pack_prev = a;
    b._pack_next = c;
    c._pack_prev = b;
  }
  function d3_layout_packSplice(a, b) {
    a._pack_next = b;
    b._pack_prev = a;
  }
  function d3_layout_packIntersects(a, b) {
    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
    return .999 * dr * dr > dx * dx + dy * dy;
  }
  function d3_layout_packSiblings(node) {
    if (!(nodes = node.children) || !(n = nodes.length)) return;
    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
    function bound(node) {
      xMin = Math.min(node.x - node.r, xMin);
      xMax = Math.max(node.x + node.r, xMax);
      yMin = Math.min(node.y - node.r, yMin);
      yMax = Math.max(node.y + node.r, yMax);
    }
    nodes.forEach(d3_layout_packLink);
    a = nodes[0];
    a.x = -a.r;
    a.y = 0;
    bound(a);
    if (n > 1) {
      b = nodes[1];
      b.x = b.r;
      b.y = 0;
      bound(b);
      if (n > 2) {
        c = nodes[2];
        d3_layout_packPlace(a, b, c);
        bound(c);
        d3_layout_packInsert(a, c);
        a._pack_prev = c;
        d3_layout_packInsert(c, b);
        b = a._pack_next;
        for (i = 3; i < n; i++) {
          d3_layout_packPlace(a, b, c = nodes[i]);
          var isect = 0, s1 = 1, s2 = 1;
          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
            if (d3_layout_packIntersects(j, c)) {
              isect = 1;
              break;
            }
          }
          if (isect == 1) {
            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
              if (d3_layout_packIntersects(k, c)) {
                break;
              }
            }
          }
          if (isect) {
            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
            i--;
          } else {
            d3_layout_packInsert(a, c);
            b = c;
            bound(c);
          }
        }
      }
    }
    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
    for (i = 0; i < n; i++) {
      c = nodes[i];
      c.x -= cx;
      c.y -= cy;
      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
    }
    node.r = cr;
    nodes.forEach(d3_layout_packUnlink);
  }
  function d3_layout_packLink(node) {
    node._pack_next = node._pack_prev = node;
  }
  function d3_layout_packUnlink(node) {
    delete node._pack_next;
    delete node._pack_prev;
  }
  function d3_layout_packTransform(node, x, y, k) {
    var children = node.children;
    node.x = x += k * node.x;
    node.y = y += k * node.y;
    node.r *= k;
    if (children) {
      var i = -1, n = children.length;
      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
    }
  }
  function d3_layout_packPlace(a, b, c) {
    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
    if (db && (dx || dy)) {
      var da = b.r + c.r, dc = dx * dx + dy * dy;
      da *= da;
      db *= db;
      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
      c.x = a.x + x * dx + y * dy;
      c.y = a.y + x * dy - y * dx;
    } else {
      c.x = a.x + db;
      c.y = a.y;
    }
  }
  d3.layout.tree = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = null;
    function tree(d, i) {
      var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
      d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
      d3_layout_hierarchyVisitBefore(root1, secondWalk);
      if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode); else {
        var left = root0, right = root0, bottom = root0;
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          if (node.x < left.x) left = node;
          if (node.x > right.x) right = node;
          if (node.depth > bottom.depth) bottom = node;
        });
        var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          node.x = (node.x + tx) * kx;
          node.y = node.depth * ky;
        });
      }
      return nodes;
    }
    function wrapTree(root0) {
      var root1 = {
        A: null,
        children: [ root0 ]
      }, queue = [ root1 ], node1;
      while ((node1 = queue.pop()) != null) {
        for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
          queue.push((children[i] = child = {
            _: children[i],
            parent: node1,
            children: (child = children[i].children) && child.slice() || [],
            A: null,
            a: null,
            z: 0,
            m: 0,
            c: 0,
            s: 0,
            t: null,
            i: i
          }).a = child);
        }
      }
      return root1.children[0];
    }
    function firstWalk(v) {
      var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
      if (children.length) {
        d3_layout_treeShift(v);
        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
        if (w) {
          v.z = w.z + separation(v._, w._);
          v.m = v.z - midpoint;
        } else {
          v.z = midpoint;
        }
      } else if (w) {
        v.z = w.z + separation(v._, w._);
      }
      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
    }
    function secondWalk(v) {
      v._.x = v.z + v.parent.m;
      v.m += v.parent.m;
    }
    function apportion(v, w, ancestor) {
      if (w) {
        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
          vom = d3_layout_treeLeft(vom);
          vop = d3_layout_treeRight(vop);
          vop.a = v;
          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
          if (shift > 0) {
            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
            sip += shift;
            sop += shift;
          }
          sim += vim.m;
          sip += vip.m;
          som += vom.m;
          sop += vop.m;
        }
        if (vim && !d3_layout_treeRight(vop)) {
          vop.t = vim;
          vop.m += sim - sop;
        }
        if (vip && !d3_layout_treeLeft(vom)) {
          vom.t = vip;
          vom.m += sip - som;
          ancestor = v;
        }
      }
      return ancestor;
    }
    function sizeNode(node) {
      node.x *= size[0];
      node.y = node.depth * size[1];
    }
    tree.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return tree;
    };
    tree.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null ? sizeNode : null;
      return tree;
    };
    tree.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) == null ? null : sizeNode;
      return tree;
    };
    return d3_layout_hierarchyRebind(tree, hierarchy);
  };
  function d3_layout_treeSeparation(a, b) {
    return a.parent == b.parent ? 1 : 2;
  }
  function d3_layout_treeLeft(v) {
    var children = v.children;
    return children.length ? children[0] : v.t;
  }
  function d3_layout_treeRight(v) {
    var children = v.children, n;
    return (n = children.length) ? children[n - 1] : v.t;
  }
  function d3_layout_treeMove(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
  }
  function d3_layout_treeShift(v) {
    var shift = 0, change = 0, children = v.children, i = children.length, w;
    while (--i >= 0) {
      w = children[i];
      w.z += shift;
      w.m += shift;
      shift += w.s + (change += w.c);
    }
  }
  function d3_layout_treeAncestor(vim, v, ancestor) {
    return vim.a.parent === v.parent ? vim.a : ancestor;
  }
  d3.layout.cluster = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
    function cluster(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var children = node.children;
        if (children && children.length) {
          node.x = d3_layout_clusterX(children);
          node.y = d3_layout_clusterY(children);
        } else {
          node.x = previousNode ? x += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
      d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
        node.x = (node.x - root.x) * size[0];
        node.y = (root.y - node.y) * size[1];
      } : function(node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
      });
      return nodes;
    }
    cluster.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return cluster;
    };
    cluster.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null;
      return cluster;
    };
    cluster.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) != null;
      return cluster;
    };
    return d3_layout_hierarchyRebind(cluster, hierarchy);
  };
  function d3_layout_clusterY(children) {
    return 1 + d3.max(children, function(child) {
      return child.y;
    });
  }
  function d3_layout_clusterX(children) {
    return children.reduce(function(x, child) {
      return x + child.x;
    }, 0) / children.length;
  }
  function d3_layout_clusterLeft(node) {
    var children = node.children;
    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
  }
  function d3_layout_clusterRight(node) {
    var children = node.children, n;
    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
  }
  d3.layout.treemap = function() {
    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
    function scale(children, k) {
      var i = -1, n = children.length, child, area;
      while (++i < n) {
        area = (child = children[i]).value * (k < 0 ? 0 : k);
        child.area = isNaN(area) || area <= 0 ? 0 : area;
      }
    }
    function squarify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while ((n = remaining.length) > 0) {
          row.push(child = remaining[n - 1]);
          row.area += child.area;
          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
            remaining.pop();
            best = score;
          } else {
            row.area -= row.pop().area;
            position(row, u, rect, false);
            u = Math.min(rect.dx, rect.dy);
            row.length = row.area = 0;
            best = Infinity;
          }
        }
        if (row.length) {
          position(row, u, rect, true);
          row.length = row.area = 0;
        }
        children.forEach(squarify);
      }
    }
    function stickify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), remaining = children.slice(), child, row = [];
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while (child = remaining.pop()) {
          row.push(child);
          row.area += child.area;
          if (child.z != null) {
            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
            row.length = row.area = 0;
          }
        }
        children.forEach(stickify);
      }
    }
    function worst(row, u) {
      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
      while (++i < n) {
        if (!(r = row[i].area)) continue;
        if (r < rmin) rmin = r;
        if (r > rmax) rmax = r;
      }
      s *= s;
      u *= u;
      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
    }
    function position(row, u, rect, flush) {
      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
      if (u == rect.dx) {
        if (flush || v > rect.dy) v = rect.dy;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dy = v;
          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
        }
        o.z = true;
        o.dx += rect.x + rect.dx - x;
        rect.y += v;
        rect.dy -= v;
      } else {
        if (flush || v > rect.dx) v = rect.dx;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dx = v;
          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
        }
        o.z = false;
        o.dy += rect.y + rect.dy - y;
        rect.x += v;
        rect.dx -= v;
      }
    }
    function treemap(d) {
      var nodes = stickies || hierarchy(d), root = nodes[0];
      root.x = root.y = 0;
      if (root.value) root.dx = size[0], root.dy = size[1]; else root.dx = root.dy = 0;
      if (stickies) hierarchy.revalue(root);
      scale([ root ], root.dx * root.dy / root.value);
      (stickies ? stickify : squarify)(root);
      if (sticky) stickies = nodes;
      return nodes;
    }
    treemap.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return treemap;
    };
    treemap.padding = function(x) {
      if (!arguments.length) return padding;
      function padFunction(node) {
        var p = x.call(treemap, node, node.depth);
        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
      }
      function padConstant(node) {
        return d3_layout_treemapPad(node, x);
      }
      var type;
      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
      padConstant) : padConstant;
      return treemap;
    };
    treemap.round = function(x) {
      if (!arguments.length) return round != Number;
      round = x ? Math.round : Number;
      return treemap;
    };
    treemap.sticky = function(x) {
      if (!arguments.length) return sticky;
      sticky = x;
      stickies = null;
      return treemap;
    };
    treemap.ratio = function(x) {
      if (!arguments.length) return ratio;
      ratio = x;
      return treemap;
    };
    treemap.mode = function(x) {
      if (!arguments.length) return mode;
      mode = x + "";
      return treemap;
    };
    return d3_layout_hierarchyRebind(treemap, hierarchy);
  };
  function d3_layout_treemapPadNull(node) {
    return {
      x: node.x,
      y: node.y,
      dx: node.dx,
      dy: node.dy
    };
  }
  function d3_layout_treemapPad(node, padding) {
    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
    if (dx < 0) {
      x += dx / 2;
      dx = 0;
    }
    if (dy < 0) {
      y += dy / 2;
      dy = 0;
    }
    return {
      x: x,
      y: y,
      dx: dx,
      dy: dy
    };
  }
  d3.random = {
    normal: function(µ, σ) {
      var n = arguments.length;
      if (n < 2) σ = 1;
      if (n < 1) µ = 0;
      return function() {
        var x, y, r;
        do {
          x = Math.random() * 2 - 1;
          y = Math.random() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);
        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
      };
    },
    logNormal: function() {
      var random = d3.random.normal.apply(d3, arguments);
      return function() {
        return Math.exp(random());
      };
    },
    bates: function(m) {
      var random = d3.random.irwinHall(m);
      return function() {
        return random() / m;
      };
    },
    irwinHall: function(m) {
      return function() {
        for (var s = 0, j = 0; j < m; j++) s += Math.random();
        return s;
      };
    }
  };
  d3.scale = {};
  function d3_scaleExtent(domain) {
    var start = domain[0], stop = domain[domain.length - 1];
    return start < stop ? [ start, stop ] : [ stop, start ];
  }
  function d3_scaleRange(scale) {
    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
  }
  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
    return function(x) {
      return i(u(x));
    };
  }
  function d3_scale_nice(domain, nice) {
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
    if (x1 < x0) {
      dx = i0, i0 = i1, i1 = dx;
      dx = x0, x0 = x1, x1 = dx;
    }
    domain[i0] = nice.floor(x0);
    domain[i1] = nice.ceil(x1);
    return domain;
  }
  function d3_scale_niceStep(step) {
    return step ? {
      floor: function(x) {
        return Math.floor(x / step) * step;
      },
      ceil: function(x) {
        return Math.ceil(x / step) * step;
      }
    } : d3_scale_niceIdentity;
  }
  var d3_scale_niceIdentity = {
    floor: d3_identity,
    ceil: d3_identity
  };
  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
    if (domain[k] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++j <= k) {
      u.push(uninterpolate(domain[j - 1], domain[j]));
      i.push(interpolate(range[j - 1], range[j]));
    }
    return function(x) {
      var j = d3.bisect(domain, x, 1, k) - 1;
      return i[j](u[j](x));
    };
  }
  d3.scale.linear = function() {
    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
  };
  function d3_scale_linear(domain, range, interpolate, clamp) {
    var output, input;
    function rescale() {
      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
      output = linear(domain, range, uninterpolate, interpolate);
      input = linear(range, domain, uninterpolate, d3_interpolate);
      return scale;
    }
    function scale(x) {
      return output(x);
    }
    scale.invert = function(y) {
      return input(y);
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(Number);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.rangeRound = function(x) {
      return scale.range(x).interpolate(d3_interpolateRound);
    };
    scale.clamp = function(x) {
      if (!arguments.length) return clamp;
      clamp = x;
      return rescale();
    };
    scale.interpolate = function(x) {
      if (!arguments.length) return interpolate;
      interpolate = x;
      return rescale();
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      d3_scale_linearNice(domain, m);
      return rescale();
    };
    scale.copy = function() {
      return d3_scale_linear(domain, range, interpolate, clamp);
    };
    return rescale();
  }
  function d3_scale_linearRebind(scale, linear) {
    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
  }
  function d3_scale_linearNice(domain, m) {
    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
    return domain;
  }
  function d3_scale_linearTickRange(domain, m) {
    if (m == null) m = 10;
    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
    extent[0] = Math.ceil(extent[0] / step) * step;
    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
    extent[2] = step;
    return extent;
  }
  function d3_scale_linearTicks(domain, m) {
    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
  }
  function d3_scale_linearTickFormat(domain, m, format) {
    var range = d3_scale_linearTickRange(domain, m);
    if (format) {
      var match = d3_format_re.exec(format);
      match.shift();
      if (match[8] === "s") {
        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
        match[8] = "f";
        format = d3.format(match.join(""));
        return function(d) {
          return format(prefix.scale(d)) + prefix.symbol;
        };
      }
      if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
      format = match.join("");
    } else {
      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
    }
    return d3.format(format);
  }
  var d3_scale_linearFormatSignificant = {
    s: 1,
    g: 1,
    p: 1,
    r: 1,
    e: 1
  };
  function d3_scale_linearPrecision(value) {
    return -Math.floor(Math.log(value) / Math.LN10 + .01);
  }
  function d3_scale_linearFormatPrecision(type, range) {
    var p = d3_scale_linearPrecision(range[2]);
    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
  }
  d3.scale.log = function() {
    return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
  };
  function d3_scale_log(linear, base, positive, domain) {
    function log(x) {
      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
    }
    function pow(x) {
      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
    }
    function scale(x) {
      return linear(log(x));
    }
    scale.invert = function(x) {
      return pow(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      positive = x[0] >= 0;
      linear.domain((domain = x.map(Number)).map(log));
      return scale;
    };
    scale.base = function(_) {
      if (!arguments.length) return base;
      base = +_;
      linear.domain(domain.map(log));
      return scale;
    };
    scale.nice = function() {
      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
      linear.domain(niced);
      domain = niced.map(pow);
      return scale;
    };
    scale.ticks = function() {
      var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
      if (isFinite(j - i)) {
        if (positive) {
          for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
          ticks.push(pow(i));
        } else {
          ticks.push(pow(i));
          for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
        }
        for (i = 0; ticks[i] < u; i++) {}
        for (j = ticks.length; ticks[j - 1] > v; j--) {}
        ticks = ticks.slice(i, j);
      }
      return ticks;
    };
    scale.tickFormat = function(n, format) {
      if (!arguments.length) return d3_scale_logFormat;
      if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
      var k = Math.max(1, base * n / scale.ticks().length);
      return function(d) {
        var i = d / pow(Math.round(log(d)));
        if (i * base < base - .5) i *= base;
        return i <= k ? format(d) : "";
      };
    };
    scale.copy = function() {
      return d3_scale_log(linear.copy(), base, positive, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
    floor: function(x) {
      return -Math.ceil(-x);
    },
    ceil: function(x) {
      return -Math.floor(-x);
    }
  };
  d3.scale.pow = function() {
    return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
  };
  function d3_scale_pow(linear, exponent, domain) {
    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
    function scale(x) {
      return linear(powp(x));
    }
    scale.invert = function(x) {
      return powb(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      linear.domain((domain = x.map(Number)).map(powp));
      return scale;
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      return scale.domain(d3_scale_linearNice(domain, m));
    };
    scale.exponent = function(x) {
      if (!arguments.length) return exponent;
      powp = d3_scale_powPow(exponent = x);
      powb = d3_scale_powPow(1 / exponent);
      linear.domain(domain.map(powp));
      return scale;
    };
    scale.copy = function() {
      return d3_scale_pow(linear.copy(), exponent, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_scale_powPow(e) {
    return function(x) {
      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
    };
  }
  d3.scale.sqrt = function() {
    return d3.scale.pow().exponent(.5);
  };
  d3.scale.ordinal = function() {
    return d3_scale_ordinal([], {
      t: "range",
      a: [ [] ]
    });
  };
  function d3_scale_ordinal(domain, ranger) {
    var index, range, rangeBand;
    function scale(x) {
      return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
    }
    function steps(start, step) {
      return d3.range(domain.length).map(function(i) {
        return start + step * i;
      });
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = [];
      index = new d3_Map();
      var i = -1, n = x.length, xi;
      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
      return scale[ranger.t].apply(scale, ranger.a);
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      rangeBand = 0;
      ranger = {
        t: "range",
        a: arguments
      };
      return scale;
    };
    scale.rangePoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = (start + stop) / 2, 
      0) : (stop - start) / (domain.length - 1 + padding);
      range = steps(start + step * padding / 2, step);
      rangeBand = 0;
      ranger = {
        t: "rangePoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundPoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 
      0) : (stop - start) / (domain.length - 1 + padding) | 0;
      range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
      rangeBand = 0;
      ranger = {
        t: "rangeRoundPoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
      range = steps(start + step * outerPadding, step);
      if (reverse) range.reverse();
      rangeBand = step * (1 - padding);
      ranger = {
        t: "rangeBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
      range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
      if (reverse) range.reverse();
      rangeBand = Math.round(step * (1 - padding));
      ranger = {
        t: "rangeRoundBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeBand = function() {
      return rangeBand;
    };
    scale.rangeExtent = function() {
      return d3_scaleExtent(ranger.a[0]);
    };
    scale.copy = function() {
      return d3_scale_ordinal(domain, ranger);
    };
    return scale.domain(domain);
  }
  d3.scale.category10 = function() {
    return d3.scale.ordinal().range(d3_category10);
  };
  d3.scale.category20 = function() {
    return d3.scale.ordinal().range(d3_category20);
  };
  d3.scale.category20b = function() {
    return d3.scale.ordinal().range(d3_category20b);
  };
  d3.scale.category20c = function() {
    return d3.scale.ordinal().range(d3_category20c);
  };
  var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
  var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
  var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
  var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
  d3.scale.quantile = function() {
    return d3_scale_quantile([], []);
  };
  function d3_scale_quantile(domain, range) {
    var thresholds;
    function rescale() {
      var k = 0, q = range.length;
      thresholds = [];
      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
      return scale;
    }
    function scale(x) {
      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.quantiles = function() {
      return thresholds;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
    };
    scale.copy = function() {
      return d3_scale_quantile(domain, range);
    };
    return rescale();
  }
  d3.scale.quantize = function() {
    return d3_scale_quantize(0, 1, [ 0, 1 ]);
  };
  function d3_scale_quantize(x0, x1, range) {
    var kx, i;
    function scale(x) {
      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
    }
    function rescale() {
      kx = range.length / (x1 - x0);
      i = range.length - 1;
      return scale;
    }
    scale.domain = function(x) {
      if (!arguments.length) return [ x0, x1 ];
      x0 = +x[0];
      x1 = +x[x.length - 1];
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      y = y < 0 ? NaN : y / kx + x0;
      return [ y, y + 1 / kx ];
    };
    scale.copy = function() {
      return d3_scale_quantize(x0, x1, range);
    };
    return rescale();
  }
  d3.scale.threshold = function() {
    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
  };
  function d3_scale_threshold(domain, range) {
    function scale(x) {
      if (x <= x) return range[d3.bisect(domain, x)];
    }
    scale.domain = function(_) {
      if (!arguments.length) return domain;
      domain = _;
      return scale;
    };
    scale.range = function(_) {
      if (!arguments.length) return range;
      range = _;
      return scale;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return [ domain[y - 1], domain[y] ];
    };
    scale.copy = function() {
      return d3_scale_threshold(domain, range);
    };
    return scale;
  }
  d3.scale.identity = function() {
    return d3_scale_identity([ 0, 1 ]);
  };
  function d3_scale_identity(domain) {
    function identity(x) {
      return +x;
    }
    identity.invert = identity;
    identity.domain = identity.range = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(identity);
      return identity;
    };
    identity.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    identity.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    identity.copy = function() {
      return d3_scale_identity(domain);
    };
    return identity;
  }
  d3.svg = {};
  function d3_zero() {
    return 0;
  }
  d3.svg.arc = function() {
    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, cornerRadius = d3_zero, padRadius = d3_svg_arcAuto, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle, padAngle = d3_svg_arcPadAngle;
    function arc() {
      var r0 = Math.max(0, +innerRadius.apply(this, arguments)), r1 = Math.max(0, +outerRadius.apply(this, arguments)), a0 = startAngle.apply(this, arguments) - halfπ, a1 = endAngle.apply(this, arguments) - halfπ, da = Math.abs(a1 - a0), cw = a0 > a1 ? 0 : 1;
      if (r1 < r0) rc = r1, r1 = r0, r0 = rc;
      if (da >= τε) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
      var rc, cr, rp, ap, p0 = 0, p1 = 0, x0, y0, x1, y1, x2, y2, x3, y3, path = [];
      if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
        rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
        if (!cw) p1 *= -1;
        if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap));
        if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap));
      }
      if (r1) {
        x0 = r1 * Math.cos(a0 + p1);
        y0 = r1 * Math.sin(a0 + p1);
        x1 = r1 * Math.cos(a1 - p1);
        y1 = r1 * Math.sin(a1 - p1);
        var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
        if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
          var h1 = (a0 + a1) / 2;
          x0 = r1 * Math.cos(h1);
          y0 = r1 * Math.sin(h1);
          x1 = y1 = null;
        }
      } else {
        x0 = y0 = 0;
      }
      if (r0) {
        x2 = r0 * Math.cos(a1 - p0);
        y2 = r0 * Math.sin(a1 - p0);
        x3 = r0 * Math.cos(a0 + p0);
        y3 = r0 * Math.sin(a0 + p0);
        var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
        if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
          var h0 = (a0 + a1) / 2;
          x2 = r0 * Math.cos(h0);
          y2 = r0 * Math.sin(h0);
          x3 = y3 = null;
        }
      } else {
        x2 = y2 = 0;
      }
      if (da > ε && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
        cr = r0 < r1 ^ cw ? 0 : 1;
        var rc1 = rc, rc0 = rc;
        if (da < π) {
          var oc = x3 == null ? [ x2, y2 ] : x1 == null ? [ x0, y0 ] : d3_geom_polygonIntersect([ x0, y0 ], [ x3, y3 ], [ x1, y1 ], [ x2, y2 ]), ax = x0 - oc[0], ay = y0 - oc[1], bx = x1 - oc[0], by = y1 - oc[1], kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2), lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
          rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
        }
        if (x1 != null) {
          var t30 = d3_svg_arcCornerTangents(x3 == null ? [ x2, y2 ] : [ x3, y3 ], [ x0, y0 ], r1, rc1, cw), t12 = d3_svg_arcCornerTangents([ x1, y1 ], [ x2, y2 ], r1, rc1, cw);
          if (rc === rc1) {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
          } else {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
          }
        } else {
          path.push("M", x0, ",", y0);
        }
        if (x3 != null) {
          var t03 = d3_svg_arcCornerTangents([ x0, y0 ], [ x3, y3 ], r0, -rc0, cw), t21 = d3_svg_arcCornerTangents([ x2, y2 ], x1 == null ? [ x0, y0 ] : [ x1, y1 ], r0, -rc0, cw);
          if (rc === rc0) {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          } else {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          }
        } else {
          path.push("L", x2, ",", y2);
        }
      } else {
        path.push("M", x0, ",", y0);
        if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
        path.push("L", x2, ",", y2);
        if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
      }
      path.push("Z");
      return path.join("");
    }
    function circleSegment(r1, cw) {
      return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
    }
    arc.innerRadius = function(v) {
      if (!arguments.length) return innerRadius;
      innerRadius = d3_functor(v);
      return arc;
    };
    arc.outerRadius = function(v) {
      if (!arguments.length) return outerRadius;
      outerRadius = d3_functor(v);
      return arc;
    };
    arc.cornerRadius = function(v) {
      if (!arguments.length) return cornerRadius;
      cornerRadius = d3_functor(v);
      return arc;
    };
    arc.padRadius = function(v) {
      if (!arguments.length) return padRadius;
      padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
      return arc;
    };
    arc.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return arc;
    };
    arc.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return arc;
    };
    arc.padAngle = function(v) {
      if (!arguments.length) return padAngle;
      padAngle = d3_functor(v);
      return arc;
    };
    arc.centroid = function() {
      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
      return [ Math.cos(a) * r, Math.sin(a) * r ];
    };
    return arc;
  };
  var d3_svg_arcAuto = "auto";
  function d3_svg_arcInnerRadius(d) {
    return d.innerRadius;
  }
  function d3_svg_arcOuterRadius(d) {
    return d.outerRadius;
  }
  function d3_svg_arcStartAngle(d) {
    return d.startAngle;
  }
  function d3_svg_arcEndAngle(d) {
    return d.endAngle;
  }
  function d3_svg_arcPadAngle(d) {
    return d && d.padAngle;
  }
  function d3_svg_arcSweep(x0, y0, x1, y1) {
    return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
  }
  function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
    var x01 = p0[0] - p1[0], y01 = p0[1] - p1[1], lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x1 = p0[0] + ox, y1 = p0[1] + oy, x2 = p1[0] + ox, y2 = p1[1] + oy, x3 = (x1 + x2) / 2, y3 = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy, r = r1 - rc, D = x1 * y2 - x2 * y1, d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x3, dy0 = cy0 - y3, dx1 = cx1 - x3, dy1 = cy1 - y3;
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
    return [ [ cx0 - ox, cy0 - oy ], [ cx0 * r1 / r, cy0 * r1 / r ] ];
  }
  function d3_svg_line(projection) {
    var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
    function line(data) {
      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
      function segment() {
        segments.push("M", interpolate(projection(points), tension));
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
        } else if (points.length) {
          segment();
          points = [];
        }
      }
      if (points.length) segment();
      return segments.length ? segments.join("") : null;
    }
    line.x = function(_) {
      if (!arguments.length) return x;
      x = _;
      return line;
    };
    line.y = function(_) {
      if (!arguments.length) return y;
      y = _;
      return line;
    };
    line.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return line;
    };
    line.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      return line;
    };
    line.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return line;
    };
    return line;
  }
  d3.svg.line = function() {
    return d3_svg_line(d3_identity);
  };
  var d3_svg_lineInterpolators = d3.map({
    linear: d3_svg_lineLinear,
    "linear-closed": d3_svg_lineLinearClosed,
    step: d3_svg_lineStep,
    "step-before": d3_svg_lineStepBefore,
    "step-after": d3_svg_lineStepAfter,
    basis: d3_svg_lineBasis,
    "basis-open": d3_svg_lineBasisOpen,
    "basis-closed": d3_svg_lineBasisClosed,
    bundle: d3_svg_lineBundle,
    cardinal: d3_svg_lineCardinal,
    "cardinal-open": d3_svg_lineCardinalOpen,
    "cardinal-closed": d3_svg_lineCardinalClosed,
    monotone: d3_svg_lineMonotone
  });
  d3_svg_lineInterpolators.forEach(function(key, value) {
    value.key = key;
    value.closed = /-closed$/.test(key);
  });
  function d3_svg_lineLinear(points) {
    return points.length > 1 ? points.join("L") : points + "Z";
  }
  function d3_svg_lineLinearClosed(points) {
    return points.join("L") + "Z";
  }
  function d3_svg_lineStep(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
    if (n > 1) path.push("H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepBefore(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepAfter(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
    return path.join("");
  }
  function d3_svg_lineCardinalOpen(points, tension) {
    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineCardinalClosed(points, tension) {
    return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
  }
  function d3_svg_lineCardinal(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineHermite(points, tangents) {
    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
      return d3_svg_lineLinear(points);
    }
    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
    if (quad) {
      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
      p0 = points[1];
      pi = 2;
    }
    if (tangents.length > 1) {
      t = tangents[1];
      p = points[pi];
      pi++;
      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      for (var i = 2; i < tangents.length; i++, pi++) {
        p = points[pi];
        t = tangents[i];
        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      }
    }
    if (quad) {
      var lp = points[pi];
      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
    }
    return path;
  }
  function d3_svg_lineCardinalTangents(points, tension) {
    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
    while (++i < n) {
      p0 = p1;
      p1 = p2;
      p2 = points[i];
      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
    }
    return tangents;
  }
  function d3_svg_lineBasis(points) {
    if (points.length < 3) return d3_svg_lineLinear(points);
    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    points.push(points[n - 1]);
    while (++i <= n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    points.pop();
    path.push("L", pi);
    return path.join("");
  }
  function d3_svg_lineBasisOpen(points) {
    if (points.length < 4) return d3_svg_lineLinear(points);
    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
    while (++i < 3) {
      pi = points[i];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
    --i;
    while (++i < n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBasisClosed(points) {
    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
    while (++i < 4) {
      pi = points[i % n];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    --i;
    while (++i < m) {
      pi = points[i % n];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBundle(points, tension) {
    var n = points.length - 1;
    if (n) {
      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
      while (++i <= n) {
        p = points[i];
        t = i / n;
        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
      }
    }
    return d3_svg_lineBasis(points);
  }
  function d3_svg_lineDot4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
  function d3_svg_lineBasisBezier(path, x, y) {
    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
  }
  function d3_svg_lineSlope(p0, p1) {
    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
  }
  function d3_svg_lineFiniteDifferences(points) {
    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
    while (++i < j) {
      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
    }
    m[i] = d;
    return m;
  }
  function d3_svg_lineMonotoneTangents(points) {
    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
    while (++i < j) {
      d = d3_svg_lineSlope(points[i], points[i + 1]);
      if (abs(d) < ε) {
        m[i] = m[i + 1] = 0;
      } else {
        a = m[i] / d;
        b = m[i + 1] / d;
        s = a * a + b * b;
        if (s > 9) {
          s = d * 3 / Math.sqrt(s);
          m[i] = s * a;
          m[i + 1] = s * b;
        }
      }
    }
    i = -1;
    while (++i <= j) {
      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
      tangents.push([ s || 0, m[i] * s || 0 ]);
    }
    return tangents;
  }
  function d3_svg_lineMonotone(points) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
  }
  d3.svg.line.radial = function() {
    var line = d3_svg_line(d3_svg_lineRadial);
    line.radius = line.x, delete line.x;
    line.angle = line.y, delete line.y;
    return line;
  };
  function d3_svg_lineRadial(points) {
    var point, i = -1, n = points.length, r, a;
    while (++i < n) {
      point = points[i];
      r = point[0];
      a = point[1] - halfπ;
      point[0] = r * Math.cos(a);
      point[1] = r * Math.sin(a);
    }
    return points;
  }
  function d3_svg_area(projection) {
    var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
    function area(data) {
      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
        return x;
      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
        return y;
      } : d3_functor(y1), x, y;
      function segment() {
        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
        } else if (points0.length) {
          segment();
          points0 = [];
          points1 = [];
        }
      }
      if (points0.length) segment();
      return segments.length ? segments.join("") : null;
    }
    area.x = function(_) {
      if (!arguments.length) return x1;
      x0 = x1 = _;
      return area;
    };
    area.x0 = function(_) {
      if (!arguments.length) return x0;
      x0 = _;
      return area;
    };
    area.x1 = function(_) {
      if (!arguments.length) return x1;
      x1 = _;
      return area;
    };
    area.y = function(_) {
      if (!arguments.length) return y1;
      y0 = y1 = _;
      return area;
    };
    area.y0 = function(_) {
      if (!arguments.length) return y0;
      y0 = _;
      return area;
    };
    area.y1 = function(_) {
      if (!arguments.length) return y1;
      y1 = _;
      return area;
    };
    area.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return area;
    };
    area.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      interpolateReverse = interpolate.reverse || interpolate;
      L = interpolate.closed ? "M" : "L";
      return area;
    };
    area.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return area;
    };
    return area;
  }
  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
  d3.svg.area = function() {
    return d3_svg_area(d3_identity);
  };
  d3.svg.area.radial = function() {
    var area = d3_svg_area(d3_svg_lineRadial);
    area.radius = area.x, delete area.x;
    area.innerRadius = area.x0, delete area.x0;
    area.outerRadius = area.x1, delete area.x1;
    area.angle = area.y, delete area.y;
    area.startAngle = area.y0, delete area.y0;
    area.endAngle = area.y1, delete area.y1;
    return area;
  };
  d3.svg.chord = function() {
    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
    function chord(d, i) {
      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
    }
    function subgroup(self, f, d, i) {
      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) - halfπ, a1 = endAngle.call(self, subgroup, i) - halfπ;
      return {
        r: r,
        a0: a0,
        a1: a1,
        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
      };
    }
    function equals(a, b) {
      return a.a0 == b.a0 && a.a1 == b.a1;
    }
    function arc(r, p, a) {
      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
    }
    function curve(r0, p0, r1, p1) {
      return "Q 0,0 " + p1;
    }
    chord.radius = function(v) {
      if (!arguments.length) return radius;
      radius = d3_functor(v);
      return chord;
    };
    chord.source = function(v) {
      if (!arguments.length) return source;
      source = d3_functor(v);
      return chord;
    };
    chord.target = function(v) {
      if (!arguments.length) return target;
      target = d3_functor(v);
      return chord;
    };
    chord.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return chord;
    };
    chord.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return chord;
    };
    return chord;
  };
  function d3_svg_chordRadius(d) {
    return d.radius;
  }
  d3.svg.diagonal = function() {
    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
    function diagonal(d, i) {
      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
        x: p0.x,
        y: m
      }, {
        x: p3.x,
        y: m
      }, p3 ];
      p = p.map(projection);
      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
    }
    diagonal.source = function(x) {
      if (!arguments.length) return source;
      source = d3_functor(x);
      return diagonal;
    };
    diagonal.target = function(x) {
      if (!arguments.length) return target;
      target = d3_functor(x);
      return diagonal;
    };
    diagonal.projection = function(x) {
      if (!arguments.length) return projection;
      projection = x;
      return diagonal;
    };
    return diagonal;
  };
  function d3_svg_diagonalProjection(d) {
    return [ d.x, d.y ];
  }
  d3.svg.diagonal.radial = function() {
    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
    diagonal.projection = function(x) {
      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
    };
    return diagonal;
  };
  function d3_svg_diagonalRadialProjection(projection) {
    return function() {
      var d = projection.apply(this, arguments), r = d[0], a = d[1] - halfπ;
      return [ r * Math.cos(a), r * Math.sin(a) ];
    };
  }
  d3.svg.symbol = function() {
    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
    function symbol(d, i) {
      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
    }
    symbol.type = function(x) {
      if (!arguments.length) return type;
      type = d3_functor(x);
      return symbol;
    };
    symbol.size = function(x) {
      if (!arguments.length) return size;
      size = d3_functor(x);
      return symbol;
    };
    return symbol;
  };
  function d3_svg_symbolSize() {
    return 64;
  }
  function d3_svg_symbolType() {
    return "circle";
  }
  function d3_svg_symbolCircle(size) {
    var r = Math.sqrt(size / π);
    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
  }
  var d3_svg_symbols = d3.map({
    circle: d3_svg_symbolCircle,
    cross: function(size) {
      var r = Math.sqrt(size / 5) / 2;
      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
    },
    diamond: function(size) {
      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
    },
    square: function(size) {
      var r = Math.sqrt(size) / 2;
      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
    },
    "triangle-down": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
    },
    "triangle-up": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
    }
  });
  d3.svg.symbolTypes = d3_svg_symbols.keys();
  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
  d3_selectionPrototype.transition = function(name) {
    var id = d3_transitionInheritId || ++d3_transitionId, ns = d3_transitionNamespace(name), subgroups = [], subgroup, node, transition = d3_transitionInherit || {
      time: Date.now(),
      ease: d3_ease_cubicInOut,
      delay: 0,
      duration: 250
    };
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_selectionPrototype.interrupt = function(name) {
    return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
  };
  var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
  function d3_selection_interruptNS(ns) {
    return function() {
      var lock, activeId, active;
      if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
        active.timer.c = null;
        active.timer.t = NaN;
        if (--lock.count) delete lock[activeId]; else delete this[ns];
        lock.active += .5;
        active.event && active.event.interrupt.call(this, this.__data__, active.index);
      }
    };
  }
  function d3_transition(groups, ns, id) {
    d3_subclass(groups, d3_transitionPrototype);
    groups.namespace = ns;
    groups.id = id;
    return groups;
  }
  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
  d3_transitionPrototype.call = d3_selectionPrototype.call;
  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
  d3_transitionPrototype.node = d3_selectionPrototype.node;
  d3_transitionPrototype.size = d3_selectionPrototype.size;
  d3.transition = function(selection, name) {
    return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3.selection().transition(selection);
  };
  d3.transition.prototype = d3_transitionPrototype;
  d3_transitionPrototype.select = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnode, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          d3_transitionNode(subnode, i, ns, id, node[ns][id]);
          subgroup.push(subnode);
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.selectAll = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnodes, node, subnode, transition;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          transition = node[ns][id];
          subnodes = selector.call(node, node.__data__, i, j);
          subgroups.push(subgroup = []);
          for (var k = -1, o = subnodes.length; ++k < o; ) {
            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
            subgroup.push(subnode);
          }
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_transition(subgroups, this.namespace, this.id);
  };
  d3_transitionPrototype.tween = function(name, tween) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
    return d3_selection_each(this, tween == null ? function(node) {
      node[ns][id].tween.remove(name);
    } : function(node) {
      node[ns][id].tween.set(name, tween);
    });
  };
  function d3_transition_tween(groups, name, value, tween) {
    var id = groups.id, ns = groups.namespace;
    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
      node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
    } : (value = tween(value), function(node) {
      node[ns][id].tween.set(name, value);
    }));
  }
  d3_transitionPrototype.attr = function(nameNS, value) {
    if (arguments.length < 2) {
      for (value in nameNS) this.attr(value, nameNS[value]);
      return this;
    }
    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrTween(b) {
      return b == null ? attrNull : (b += "", function() {
        var a = this.getAttribute(name), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttribute(name, i(t));
        });
      });
    }
    function attrTweenNS(b) {
      return b == null ? attrNullNS : (b += "", function() {
        var a = this.getAttributeNS(name.space, name.local), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttributeNS(name.space, name.local, i(t));
        });
      });
    }
    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.attrTween = function(nameNS, tween) {
    var name = d3.ns.qualify(nameNS);
    function attrTween(d, i) {
      var f = tween.call(this, d, i, this.getAttribute(name));
      return f && function(t) {
        this.setAttribute(name, f(t));
      };
    }
    function attrTweenNS(d, i) {
      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
      return f && function(t) {
        this.setAttributeNS(name.space, name.local, f(t));
      };
    }
    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.style(priority, name[priority], value);
        return this;
      }
      priority = "";
    }
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleString(b) {
      return b == null ? styleNull : (b += "", function() {
        var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name), i;
        return a !== b && (i = d3_interpolate(a, b), function(t) {
          this.style.setProperty(name, i(t), priority);
        });
      });
    }
    return d3_transition_tween(this, "style." + name, value, styleString);
  };
  d3_transitionPrototype.styleTween = function(name, tween, priority) {
    if (arguments.length < 3) priority = "";
    function styleTween(d, i) {
      var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
      return f && function(t) {
        this.style.setProperty(name, f(t), priority);
      };
    }
    return this.tween("style." + name, styleTween);
  };
  d3_transitionPrototype.text = function(value) {
    return d3_transition_tween(this, "text", value, d3_transition_text);
  };
  function d3_transition_text(b) {
    if (b == null) b = "";
    return function() {
      this.textContent = b;
    };
  }
  d3_transitionPrototype.remove = function() {
    var ns = this.namespace;
    return this.each("end.transition", function() {
      var p;
      if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this);
    });
  };
  d3_transitionPrototype.ease = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].ease;
    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
    return d3_selection_each(this, function(node) {
      node[ns][id].ease = value;
    });
  };
  d3_transitionPrototype.delay = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].delay;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].delay = +value.call(node, node.__data__, i, j);
    } : (value = +value, function(node) {
      node[ns][id].delay = value;
    }));
  };
  d3_transitionPrototype.duration = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].duration;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
    } : (value = Math.max(1, value), function(node) {
      node[ns][id].duration = value;
    }));
  };
  d3_transitionPrototype.each = function(type, listener) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) {
      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
      try {
        d3_transitionInheritId = id;
        d3_selection_each(this, function(node, i, j) {
          d3_transitionInherit = node[ns][id];
          type.call(node, node.__data__, i, j);
        });
      } finally {
        d3_transitionInherit = inherit;
        d3_transitionInheritId = inheritId;
      }
    } else {
      d3_selection_each(this, function(node) {
        var transition = node[ns][id];
        (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
      });
    }
    return this;
  };
  d3_transitionPrototype.transition = function() {
    var id0 = this.id, id1 = ++d3_transitionId, ns = this.namespace, subgroups = [], subgroup, group, node, transition;
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if (node = group[i]) {
          transition = node[ns][id0];
          d3_transitionNode(node, i, ns, id1, {
            time: transition.time,
            ease: transition.ease,
            delay: transition.delay + transition.duration,
            duration: transition.duration
          });
        }
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id1);
  };
  function d3_transitionNamespace(name) {
    return name == null ? "__transition__" : "__transition_" + name + "__";
  }
  function d3_transitionNode(node, i, ns, id, inherit) {
    var lock = node[ns] || (node[ns] = {
      active: 0,
      count: 0
    }), transition = lock[id], time, timer, duration, ease, tweens;
    function schedule(elapsed) {
      var delay = transition.delay;
      timer.t = delay + time;
      if (delay <= elapsed) return start(elapsed - delay);
      timer.c = start;
    }
    function start(elapsed) {
      var activeId = lock.active, active = lock[activeId];
      if (active) {
        active.timer.c = null;
        active.timer.t = NaN;
        --lock.count;
        delete lock[activeId];
        active.event && active.event.interrupt.call(node, node.__data__, active.index);
      }
      for (var cancelId in lock) {
        if (+cancelId < id) {
          var cancel = lock[cancelId];
          cancel.timer.c = null;
          cancel.timer.t = NaN;
          --lock.count;
          delete lock[cancelId];
        }
      }
      timer.c = tick;
      d3_timer(function() {
        if (timer.c && tick(elapsed || 1)) {
          timer.c = null;
          timer.t = NaN;
        }
        return 1;
      }, 0, time);
      lock.active = id;
      transition.event && transition.event.start.call(node, node.__data__, i);
      tweens = [];
      transition.tween.forEach(function(key, value) {
        if (value = value.call(node, node.__data__, i)) {
          tweens.push(value);
        }
      });
      ease = transition.ease;
      duration = transition.duration;
    }
    function tick(elapsed) {
      var t = elapsed / duration, e = ease(t), n = tweens.length;
      while (n > 0) {
        tweens[--n].call(node, e);
      }
      if (t >= 1) {
        transition.event && transition.event.end.call(node, node.__data__, i);
        if (--lock.count) delete lock[id]; else delete node[ns];
        return 1;
      }
    }
    if (!transition) {
      time = inherit.time;
      timer = d3_timer(schedule, 0, time);
      transition = lock[id] = {
        tween: new d3_Map(),
        time: time,
        timer: timer,
        delay: inherit.delay,
        duration: inherit.duration,
        ease: inherit.ease,
        index: i
      };
      inherit = null;
      ++lock.count;
    }
  }
  d3.svg.axis = function() {
    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
    function axis(g) {
      g.each(function() {
        var g = d3.select(this);
        var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d3.transition(tick.order()).style("opacity", 1), tickSpacing = Math.max(innerTickSize, 0) + tickPadding, tickTransform;
        var range = d3_scaleRange(scale1), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
        d3.transition(path));
        tickEnter.append("line");
        tickEnter.append("text");
        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text"), sign = orient === "top" || orient === "left" ? -1 : 1, x1, x2, y1, y2;
        if (orient === "bottom" || orient === "top") {
          tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
          text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
          pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
        } else {
          tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
          text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
          pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
        }
        lineEnter.attr(y2, sign * innerTickSize);
        textEnter.attr(y1, sign * tickSpacing);
        lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
        textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
        if (scale1.rangeBand) {
          var x = scale1, dx = x.rangeBand() / 2;
          scale0 = scale1 = function(d) {
            return x(d) + dx;
          };
        } else if (scale0.rangeBand) {
          scale0 = scale1;
        } else {
          tickExit.call(tickTransform, scale1, scale0);
        }
        tickEnter.call(tickTransform, scale0, scale1);
        tickUpdate.call(tickTransform, scale1, scale1);
      });
    }
    axis.scale = function(x) {
      if (!arguments.length) return scale;
      scale = x;
      return axis;
    };
    axis.orient = function(x) {
      if (!arguments.length) return orient;
      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
      return axis;
    };
    axis.ticks = function() {
      if (!arguments.length) return tickArguments_;
      tickArguments_ = d3_array(arguments);
      return axis;
    };
    axis.tickValues = function(x) {
      if (!arguments.length) return tickValues;
      tickValues = x;
      return axis;
    };
    axis.tickFormat = function(x) {
      if (!arguments.length) return tickFormat_;
      tickFormat_ = x;
      return axis;
    };
    axis.tickSize = function(x) {
      var n = arguments.length;
      if (!n) return innerTickSize;
      innerTickSize = +x;
      outerTickSize = +arguments[n - 1];
      return axis;
    };
    axis.innerTickSize = function(x) {
      if (!arguments.length) return innerTickSize;
      innerTickSize = +x;
      return axis;
    };
    axis.outerTickSize = function(x) {
      if (!arguments.length) return outerTickSize;
      outerTickSize = +x;
      return axis;
    };
    axis.tickPadding = function(x) {
      if (!arguments.length) return tickPadding;
      tickPadding = +x;
      return axis;
    };
    axis.tickSubdivide = function() {
      return arguments.length && axis;
    };
    return axis;
  };
  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  };
  function d3_svg_axisX(selection, x0, x1) {
    selection.attr("transform", function(d) {
      var v0 = x0(d);
      return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
    });
  }
  function d3_svg_axisY(selection, y0, y1) {
    selection.attr("transform", function(d) {
      var v0 = y0(d);
      return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
    });
  }
  d3.svg.brush = function() {
    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
    function brush(g) {
      g.each(function() {
        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
        var background = g.selectAll(".background").data([ 0 ]);
        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
        g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
        var resize = g.selectAll(".resize").data(resizes, d3_identity);
        resize.exit().remove();
        resize.enter().append("g").attr("class", function(d) {
          return "resize " + d;
        }).style("cursor", function(d) {
          return d3_svg_brushCursor[d];
        }).append("rect").attr("x", function(d) {
          return /[ew]$/.test(d) ? -3 : null;
        }).attr("y", function(d) {
          return /^[ns]/.test(d) ? -3 : null;
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
        resize.style("display", brush.empty() ? "none" : null);
        var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
        if (x) {
          range = d3_scaleRange(x);
          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
          redrawX(gUpdate);
        }
        if (y) {
          range = d3_scaleRange(y);
          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
          redrawY(gUpdate);
        }
        redraw(gUpdate);
      });
    }
    brush.event = function(g) {
      g.each(function() {
        var event_ = event.of(this, arguments), extent1 = {
          x: xExtent,
          y: yExtent,
          i: xExtentDomain,
          j: yExtentDomain
        }, extent0 = this.__chart__ || extent1;
        this.__chart__ = extent1;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.brush", function() {
            xExtentDomain = extent0.i;
            yExtentDomain = extent0.j;
            xExtent = extent0.x;
            yExtent = extent0.y;
            event_({
              type: "brushstart"
            });
          }).tween("brush:brush", function() {
            var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
            xExtentDomain = yExtentDomain = null;
            return function(t) {
              xExtent = extent1.x = xi(t);
              yExtent = extent1.y = yi(t);
              event_({
                type: "brush",
                mode: "resize"
              });
            };
          }).each("end.brush", function() {
            xExtentDomain = extent1.i;
            yExtentDomain = extent1.j;
            event_({
              type: "brush",
              mode: "resize"
            });
            event_({
              type: "brushend"
            });
          });
        } else {
          event_({
            type: "brushstart"
          });
          event_({
            type: "brush",
            mode: "resize"
          });
          event_({
            type: "brushend"
          });
        }
      });
    };
    function redraw(g) {
      g.selectAll(".resize").attr("transform", function(d) {
        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
      });
    }
    function redrawX(g) {
      g.select(".extent").attr("x", xExtent[0]);
      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
    }
    function redrawY(g) {
      g.select(".extent").attr("y", yExtent[0]);
      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
    }
    function brushstart() {
      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(target), center, origin = d3.mouse(target), offset;
      var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
      if (d3.event.changedTouches) {
        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
      } else {
        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
      }
      g.interrupt().selectAll("*").interrupt();
      if (dragging) {
        origin[0] = xExtent[0] - origin[0];
        origin[1] = yExtent[0] - origin[1];
      } else if (resizing) {
        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
        offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
        origin[0] = xExtent[ex];
        origin[1] = yExtent[ey];
      } else if (d3.event.altKey) center = origin.slice();
      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
      d3.select("body").style("cursor", eventTarget.style("cursor"));
      event_({
        type: "brushstart"
      });
      brushmove();
      function keydown() {
        if (d3.event.keyCode == 32) {
          if (!dragging) {
            center = null;
            origin[0] -= xExtent[1];
            origin[1] -= yExtent[1];
            dragging = 2;
          }
          d3_eventPreventDefault();
        }
      }
      function keyup() {
        if (d3.event.keyCode == 32 && dragging == 2) {
          origin[0] += xExtent[1];
          origin[1] += yExtent[1];
          dragging = 0;
          d3_eventPreventDefault();
        }
      }
      function brushmove() {
        var point = d3.mouse(target), moved = false;
        if (offset) {
          point[0] += offset[0];
          point[1] += offset[1];
        }
        if (!dragging) {
          if (d3.event.altKey) {
            if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
            origin[0] = xExtent[+(point[0] < center[0])];
            origin[1] = yExtent[+(point[1] < center[1])];
          } else center = null;
        }
        if (resizingX && move1(point, x, 0)) {
          redrawX(g);
          moved = true;
        }
        if (resizingY && move1(point, y, 1)) {
          redrawY(g);
          moved = true;
        }
        if (moved) {
          redraw(g);
          event_({
            type: "brush",
            mode: dragging ? "move" : "resize"
          });
        }
      }
      function move1(point, scale, i) {
        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
        if (dragging) {
          r0 -= position;
          r1 -= size + position;
        }
        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
        if (dragging) {
          max = (min += position) + size;
        } else {
          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
          if (position < min) {
            max = min;
            min = position;
          } else {
            max = position;
          }
        }
        if (extent[0] != min || extent[1] != max) {
          if (i) yExtentDomain = null; else xExtentDomain = null;
          extent[0] = min;
          extent[1] = max;
          return true;
        }
      }
      function brushend() {
        brushmove();
        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
        d3.select("body").style("cursor", null);
        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
        dragRestore();
        event_({
          type: "brushend"
        });
      }
    }
    brush.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.clamp = function(z) {
      if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
      if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
      return brush;
    };
    brush.extent = function(z) {
      var x0, x1, y0, y1, t;
      if (!arguments.length) {
        if (x) {
          if (xExtentDomain) {
            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
          } else {
            x0 = xExtent[0], x1 = xExtent[1];
            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
            if (x1 < x0) t = x0, x0 = x1, x1 = t;
          }
        }
        if (y) {
          if (yExtentDomain) {
            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
          } else {
            y0 = yExtent[0], y1 = yExtent[1];
            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
            if (y1 < y0) t = y0, y0 = y1, y1 = t;
          }
        }
        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
      }
      if (x) {
        x0 = z[0], x1 = z[1];
        if (y) x0 = x0[0], x1 = x1[0];
        xExtentDomain = [ x0, x1 ];
        if (x.invert) x0 = x(x0), x1 = x(x1);
        if (x1 < x0) t = x0, x0 = x1, x1 = t;
        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
      }
      if (y) {
        y0 = z[0], y1 = z[1];
        if (x) y0 = y0[1], y1 = y1[1];
        yExtentDomain = [ y0, y1 ];
        if (y.invert) y0 = y(y0), y1 = y(y1);
        if (y1 < y0) t = y0, y0 = y1, y1 = t;
        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
      }
      return brush;
    };
    brush.clear = function() {
      if (!brush.empty()) {
        xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
        xExtentDomain = yExtentDomain = null;
      }
      return brush;
    };
    brush.empty = function() {
      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
    };
    return d3.rebind(brush, event, "on");
  };
  var d3_svg_brushCursor = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  };
  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
  var d3_time_formatUtc = d3_time_format.utc;
  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
  function d3_time_formatIsoNative(date) {
    return date.toISOString();
  }
  d3_time_formatIsoNative.parse = function(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  };
  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
  d3_time.second = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 1e3) * 1e3);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
  }, function(date) {
    return date.getSeconds();
  });
  d3_time.seconds = d3_time.second.range;
  d3_time.seconds.utc = d3_time.second.utc.range;
  d3_time.minute = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 6e4) * 6e4);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
  }, function(date) {
    return date.getMinutes();
  });
  d3_time.minutes = d3_time.minute.range;
  d3_time.minutes.utc = d3_time.minute.utc.range;
  d3_time.hour = d3_time_interval(function(date) {
    var timezone = date.getTimezoneOffset() / 60;
    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
  }, function(date) {
    return date.getHours();
  });
  d3_time.hours = d3_time.hour.range;
  d3_time.hours.utc = d3_time.hour.utc.range;
  d3_time.month = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setDate(1);
    return date;
  }, function(date, offset) {
    date.setMonth(date.getMonth() + offset);
  }, function(date) {
    return date.getMonth();
  });
  d3_time.months = d3_time.month.range;
  d3_time.months.utc = d3_time.month.utc.range;
  function d3_time_scale(linear, methods, format) {
    function scale(x) {
      return linear(x);
    }
    scale.invert = function(x) {
      return d3_time_scaleDate(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
      linear.domain(x);
      return scale;
    };
    function tickMethod(extent, count) {
      var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
      return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
        return d / 31536e6;
      }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
    }
    scale.nice = function(interval, skip) {
      var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
      if (method) interval = method[0], skip = method[1];
      function skipped(date) {
        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
      }
      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
        floor: function(date) {
          while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
          return date;
        },
        ceil: function(date) {
          while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
          return date;
        }
      } : interval));
    };
    scale.ticks = function(interval, skip) {
      var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
        range: interval
      }, skip ];
      if (method) interval = method[0], skip = method[1];
      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
    };
    scale.tickFormat = function() {
      return format;
    };
    scale.copy = function() {
      return d3_time_scale(linear.copy(), methods, format);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_time_scaleDate(t) {
    return new Date(t);
  }
  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
  var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
  var d3_time_scaleLocalFormat = d3_time_format.multi([ [ ".%L", function(d) {
    return d.getMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getMinutes();
  } ], [ "%I %p", function(d) {
    return d.getHours();
  } ], [ "%a %d", function(d) {
    return d.getDay() && d.getDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getDate() != 1;
  } ], [ "%B", function(d) {
    return d.getMonth();
  } ], [ "%Y", d3_true ] ]);
  var d3_time_scaleMilliseconds = {
    range: function(start, stop, step) {
      return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
    },
    floor: d3_identity,
    ceil: d3_identity
  };
  d3_time_scaleLocalMethods.year = d3_time.year;
  d3_time.scale = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
  };
  var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
    return [ m[0].utc, m[1] ];
  });
  var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([ [ ".%L", function(d) {
    return d.getUTCMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getUTCSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getUTCMinutes();
  } ], [ "%I %p", function(d) {
    return d.getUTCHours();
  } ], [ "%a %d", function(d) {
    return d.getUTCDay() && d.getUTCDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getUTCDate() != 1;
  } ], [ "%B", function(d) {
    return d.getUTCMonth();
  } ], [ "%Y", d3_true ] ]);
  d3_time_scaleUtcMethods.year = d3_time.year.utc;
  d3_time.scale.utc = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
  };
  d3.text = d3_xhrType(function(request) {
    return request.responseText;
  });
  d3.json = function(url, callback) {
    return d3_xhr(url, "application/json", d3_json, callback);
  };
  function d3_json(request) {
    return JSON.parse(request.responseText);
  }
  d3.html = function(url, callback) {
    return d3_xhr(url, "text/html", d3_html, callback);
  };
  function d3_html(request) {
    var range = d3_document.createRange();
    range.selectNode(d3_document.body);
    return range.createContextualFragment(request.responseText);
  }
  d3.xml = d3_xhrType(function(request) {
    return request.responseXML;
  });
  if (true) this.d3 = d3, !(__WEBPACK_AMD_DEFINE_FACTORY__ = (d3),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else {}
}();

/***/ }),

/***/ "./src/Marimekko.js":
/*!**************************!*\
  !*** ./src/Marimekko.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Marimekko": () => (/* binding */ Marimekko)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
// @ts-ignore

 


async function Marimekko(mod, context, dataView, windowSize, showBorders, showLabels) {
    /**
 * Helper functions  
 */
    function invertHex(hex) {
        hex = hex.slice(1, hex.length)
        //return "#" + (Number(`0x1${hex}`) ^ 0xffffff).toString(16).substr(1).toUpperCase()
        return context.styling.scales.font.color
    }

    //hide icon button settings if in read only
    d3__WEBPACK_IMPORTED_MODULE_0__.select(".icon-button.settings").classed("visible", context.isEditing)


    //set popup
    //1 show a popup when clicked
    //1.1 create popup contents
    const popoutContent = () => [
        mod.controls.popout.section({
            heading: "Marimekko Chart Options",
            children: [
                mod.controls.popout.components.checkbox({
                    name: "chk_values",
                    text: "Show values",
                    checked: true,
                    enabled: true
                }),
                mod.controls.popout.components.checkbox({
                    name: "chk_borders",
                    text: "Show borders",
                    checked: showBorders.value(),
                    enabled: true
                })
            ]
        })
    ]; 


    //show a right click menu on mod
    document.querySelector(".settings").onclick = (e) => {
        mod.controls.contextMenu.show(
            e.clientX - 100, e.clientY, [
            { text: "Borders", enabled: true, checked: showBorders.value() },
            { text: "Labels", enabled: true, checked: showLabels.value() },
        ]
        ).then(clickedItem => {
            if (clickedItem.text == "Borders") showBorders.set(!showBorders.value())
            if (clickedItem.text == "Labels") showLabels.set(!showLabels.value())
            drawMekko();
        })
    }


    //recreate demo data with spotfire data     
    let spotfireData = [];
    try {
        (await dataView.allRows()).forEach((r, i) => {
            let jsonData = {};
            jsonData["market"] = r.categorical("Category").value()[0].key;;
            jsonData["segment"] = r.categorical("Segment").value()[0].key;
            jsonData["color"] = r.color().hexCode;
            jsonData["value"] = r.continuous("Value").value();
            jsonData["index"] = i;

            spotfireData.push(jsonData);
        })
    } catch (error) {
        mod.controls.errorOverlay.show(error);
    }

    const data = spotfireData

    //mark categories and segments with shift+click or alt+click
    async function markRow(d, e) {
        if (!e.ctrlKey) dataView.clearMarking();
        (await dataView.allRows()).forEach(r => {
            let aCategory = r.categorical("Category").value()[0].key
            let aSsegment = r.categorical("Segment").value()[0].key
            if (e.shiftKey && d.market == aCategory) { r.mark("Toggle") } else
                if (e.altKey && d.segment == aSsegment) { r.mark("Toggle") } else
                    if (d.market == aCategory && d.segment == aSsegment) r.mark("Toggle")
        })
    }


    async function drawMekko() {

        //clear mod container contents
        d3__WEBPACK_IMPORTED_MODULE_0__.select("#mod-container").html("");


        var width = windowSize.width,
            height = windowSize.height,
            margin = 20;

        var x = d3__WEBPACK_IMPORTED_MODULE_0__.scale.linear()
            .range([0, width - 3 * margin]);

        var y = d3__WEBPACK_IMPORTED_MODULE_0__.scale.linear()
            .range([0, height - 2 * margin]);

        // var z = d3.scale.category10();

        var n = d3__WEBPACK_IMPORTED_MODULE_0__.format("#,#"),
            p = d3__WEBPACK_IMPORTED_MODULE_0__.format("%");


        var svg = d3__WEBPACK_IMPORTED_MODULE_0__.select("#mod-container").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + 2 * margin + "," + margin + ")");

        var offset = 0;

        // Nest values by segment. We assume each segment+market is unique.
        var segments = d3__WEBPACK_IMPORTED_MODULE_0__.nest()
            .key(function (d) { return d.segment; })
            .entries(data);

        // Compute the total sum, the per-segment sum, and the per-market offset.
        // You can use reduce rather than reduceRight to reverse the ordering.
        // We also record a reference to the parent segment for each market.
        var sum = segments.reduce(function (v, p) {
            return (p.offset = v) + (p.sum = p.values.reduceRight(function (v, d) {
                d.parent = p;
                return (d.offset = v) + d.value;
            }, 0));
        }, 0);

        // Add x-axis ticks.
        var xtick = svg.selectAll(".x")
            .data(x.ticks(10))
            .enter().append("g")
            .attr("class", "x")
            .attr("transform", function (d) { return "translate(" + x(d) + "," + y(1) + ")"; });

        xtick.append("line")
            .attr("y2", 6)
            .style("stroke", context.styling.scales.font.color);

        xtick.append("text")
            .attr("y", 8)
            .attr("text-anchor", "middle")
            .attr("dy", ".71em")
            .text(p)
            .attr("fill", context.styling.scales.font.color)

        // Add y-axis ticks.
        var ytick = svg.selectAll(".y")
            .data(y.ticks(10))
            .enter().append("g")
            .attr("class", "y")
            .attr("transform", function (d) { return "translate(0," + y(1 - d) + ")"; });

        ytick.append("line")
            .attr("x1", -6)
            .style("stroke", context.styling.scales.font.color);

        ytick.append("text")
            .attr("x", -8)
            .attr("text-anchor", "end")
            .attr("dy", ".35em")
            .text(p)
            .attr("fill", context.styling.scales.font.color);

        // Add a group for each segment.
        var segments = svg.selectAll(".segment")
            .data(segments)
            .enter().append("g")
            .attr("class", "segment")
            .attr("transform", function (d) { return "translate(" + x(d.offset / sum) + ")"; })
            .attr("xlink:title", function (d) { return d.key; })
            .on("click", function (d) {
                // console.log("sclick",d) 
            });

        // Add a rect for each market.
        var markets = segments.selectAll(".market")
            .data(function (d) { return d.values; })
            .enter().append("a")
            .attr("class", "market")
            .append("rect")
            .attr("y", function (d) { return y(d.offset / d.parent.sum); })
            .attr("height", function (d) { return y(d.value / d.parent.sum); })
            .attr("width", function (d) { return x(d.parent.sum / sum); })
            .on("mousedown", function (d) {
                markRow(d, d3__WEBPACK_IMPORTED_MODULE_0__.event)
            })
            .on("mouseover", function (d) {
                mod.controls.tooltip.show(d.market + " " + d.parent.key + ": " + n(d.value));
            })
            .on("mouseout", mod.controls.tooltip.hide)
            .style("fill", function (d) { return d.color; });

        //show labels
        if (showLabels.value()) {
            d3__WEBPACK_IMPORTED_MODULE_0__.selectAll(".market").append("text")
                .attr("y", d => {return y(d.offset / d.parent.sum) + (y(d.value / d.parent.sum)) / 2 })
                .attr("x", d => { return (x(d.parent.sum / sum)) / 2 })
                .attr("dy", ".35em")
                .text(d => { return n(d.value) }) 
                .attr("fill", d => {
                    return context.styling.scales.font.color
                })
        }

        //show borders
        d3__WEBPACK_IMPORTED_MODULE_0__.selectAll(".market rect").attr("stroke", d => { return showBorders.value() ? invertHex(d.color) : "none" })

    }
    drawMekko();

} 

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Marimekko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Marimekko */ "./src/Marimekko.js");
/*
 * Copyright © 2020. TIBCO Software Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */



//@ts-check - Get type warnings from the TypeScript language server. Remove if not wanted.

/**
 * Get access to the Spotfire Mod API by providing a callback to the initialize method.
 * @param {Spotfire.Mod} mod - mod api
 */
 Spotfire.initialize(async (mod) => {

    const reader = mod.createReader(mod.visualization.data(), mod.windowSize(), mod.property("showBorders"), mod.property("showLabels"));
    const context = mod.getRenderContext();
    reader.subscribe(render);

    async function render(dataView, windowSize, showBorders, showLabels) {
        /**
         * Check the data view for errors
         */
        let errors = await dataView.getErrors();
        if (errors.length > 0) {
            // Showing an error overlay will hide the mod iframe.
            // Clear the mod content here to avoid flickering effect of
            // an old configuration when next valid data view is received.
            mod.controls.errorOverlay.show(errors);
            return;
        }
        mod.controls.errorOverlay.hide();

        (0,_Marimekko__WEBPACK_IMPORTED_MODULE_0__.Marimekko)(mod,context, dataView, windowSize, showBorders, showLabels)
        /**
         * Signal that the mod is ready for export.
         */
        context.signalRenderComplete();
    }
});
 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RSxNQUFNO0FBQ04seUZBQXlGO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsU0FBUztBQUNoRyw2REFBNkQsU0FBUztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0EseUVBQXlFO0FBQ3pFLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELE9BQU87QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsRUFBRTtBQUNwRCxzQkFBc0I7QUFDdEI7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFNBQVM7QUFDL0M7QUFDQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFNBQVM7QUFDL0MsMERBQTBELFNBQVM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLHFCQUFxQixVQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFNBQVM7QUFDL0MsNkVBQTZFLFVBQVU7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsU0FBUztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QyxpRUFBaUUsT0FBTztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUMseURBQXlELE9BQU87QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsU0FBUztBQUMvQztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELE9BQU87QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE9BQU87QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsT0FBTztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxPQUFPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCx3Q0FBd0M7QUFDL0Y7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlGQUFpRjtBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxTQUFTLGdCQUFnQjtBQUN6QjtBQUNBO0FBQ0EsVUFBVTtBQUNWLE9BQU87QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLFVBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixFQUFFO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSw2QkFBNkI7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxPQUFPO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLFFBQVE7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxPQUFPO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxPQUFPO0FBQ3RELFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BELFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IscUVBQXFFLE9BQU87QUFDNUU7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlDQUFpQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDLDBCQUEwQiw4QkFBOEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhCQUE4QjtBQUM3RDtBQUNBLGdEQUFnRDtBQUNoRCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsaUJBQWlCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxPQUFPO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsTUFBTTtBQUNOLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEIsVUFBVSxRQUFRO0FBQ2xCLFVBQVUsUUFBUTtBQUNsQjtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsOEJBQThCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDhCQUE4QjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxPQUFPLDJEQUEyRCxpQkFBaUIsT0FBTztBQUNwSjtBQUNBLDBEQUEwRCxPQUFPLDJEQUEyRCxpQkFBaUIsT0FBTztBQUNwSjtBQUNBLG9EQUFvRCxPQUFPLG1EQUFtRCxpQkFBaUIsT0FBTztBQUN0STtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLDRCQUE0QixPQUFPO0FBQ25DLHdEQUF3RCxPQUFPO0FBQy9ELDJFQUEyRSxPQUFPO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLDJCQUEyQixPQUFPO0FBQ2xDLDJCQUEyQixPQUFPLHlCQUF5QixpQkFBaUIsT0FBTztBQUNuRjtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBLGlDQUFpQyxTQUFTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvQkFBb0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGO0FBQ2xGO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsK0VBQStFLE9BQU87QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0NBQWdDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU8scUJBQXFCLE9BQU87QUFDbkQ7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxnQkFBZ0IsU0FBUyxzQkFBc0IsT0FBTztBQUN0RDtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFNBQVM7QUFDL0M7QUFDQSwwREFBMEQsU0FBUztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFNBQVM7QUFDL0M7QUFDQSwwREFBMEQsU0FBUztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsU0FBUztBQUMvQywwREFBMEQsU0FBUztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBLHlEQUF5RCxPQUFPO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0EseURBQXlELE9BQU87QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCwwQkFBMEI7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsTUFBTSxJQUEwQyxnQkFBZ0Isb0NBQU8sRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtHQUFDLEVBQUUsS0FBSyxFQUF5RjtBQUMxSyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2oxU0Q7QUFDQTtBQUN5QjtBQUN6QjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLElBQUk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNDQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4REFBOEQ7QUFDNUUsY0FBYyw0REFBNEQ7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsbUJBQW1CO0FBQzFFLDBEQUEwRCxtQkFBbUI7QUFDN0U7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQ0FBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNENBQWU7QUFDL0I7QUFDQTtBQUNBLGdCQUFnQiw0Q0FBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzQ0FBUztBQUN6QixnQkFBZ0Isc0NBQVM7QUFDekI7QUFDQTtBQUNBLGtCQUFrQixzQ0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9DQUFPO0FBQzlCLGdDQUFnQyxtQkFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsZ0RBQWdEO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMseUNBQXlDO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsZ0RBQWdEO0FBQzlGLGdEQUFnRCxlQUFlO0FBQy9EO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msb0NBQW9DO0FBQzFFLDJDQUEyQyxtQ0FBbUM7QUFDOUUsMENBQTBDLCtCQUErQjtBQUN6RTtBQUNBLDJCQUEyQixxQ0FBUTtBQUNuQyxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDBDQUEwQyxpQkFBaUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5Q0FBWTtBQUN4QixpQ0FBaUMscUVBQXFFO0FBQ3RHLGtDQUFrQyxvQ0FBb0M7QUFDdEU7QUFDQSw2QkFBNkIsbUJBQW1CO0FBQ2hEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5Q0FBWSx1Q0FBdUMsMERBQTBEO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQzFOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFDOztBQUVyQzs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEscURBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9kLW1hcmtpbWVra28vLi9ub2RlX21vZHVsZXMvZDMvZDMuanMiLCJ3ZWJwYWNrOi8vbW9kLW1hcmtpbWVra28vLi9zcmMvTWFyaW1la2tvLmpzIiwid2VicGFjazovL21vZC1tYXJraW1la2tvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21vZC1tYXJraW1la2tvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21vZC1tYXJraW1la2tvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tb2QtbWFya2ltZWtrby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21vZC1tYXJraW1la2tvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbW9kLW1hcmtpbWVra28vLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oKSB7XG4gIHZhciBkMyA9IHtcbiAgICB2ZXJzaW9uOiBcIjMuNS4xN1wiXG4gIH07XG4gIHZhciBkM19hcnJheVNsaWNlID0gW10uc2xpY2UsIGQzX2FycmF5ID0gZnVuY3Rpb24obGlzdCkge1xuICAgIHJldHVybiBkM19hcnJheVNsaWNlLmNhbGwobGlzdCk7XG4gIH07XG4gIHZhciBkM19kb2N1bWVudCA9IHRoaXMuZG9jdW1lbnQ7XG4gIGZ1bmN0aW9uIGQzX2RvY3VtZW50RWxlbWVudChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUgJiYgKG5vZGUub3duZXJEb2N1bWVudCB8fCBub2RlLmRvY3VtZW50IHx8IG5vZGUpLmRvY3VtZW50RWxlbWVudDtcbiAgfVxuICBmdW5jdGlvbiBkM193aW5kb3cobm9kZSkge1xuICAgIHJldHVybiBub2RlICYmIChub2RlLm93bmVyRG9jdW1lbnQgJiYgbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IG5vZGUuZG9jdW1lbnQgJiYgbm9kZSB8fCBub2RlLmRlZmF1bHRWaWV3KTtcbiAgfVxuICBpZiAoZDNfZG9jdW1lbnQpIHtcbiAgICB0cnkge1xuICAgICAgZDNfYXJyYXkoZDNfZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNoaWxkTm9kZXMpWzBdLm5vZGVUeXBlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGQzX2FycmF5ID0gZnVuY3Rpb24obGlzdCkge1xuICAgICAgICB2YXIgaSA9IGxpc3QubGVuZ3RoLCBhcnJheSA9IG5ldyBBcnJheShpKTtcbiAgICAgICAgd2hpbGUgKGktLSkgYXJyYXlbaV0gPSBsaXN0W2ldO1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBpZiAoIURhdGUubm93KSBEYXRlLm5vdyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiArbmV3IERhdGUoKTtcbiAgfTtcbiAgaWYgKGQzX2RvY3VtZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGQzX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIikuc3R5bGUuc2V0UHJvcGVydHkoXCJvcGFjaXR5XCIsIDAsIFwiXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB2YXIgZDNfZWxlbWVudF9wcm90b3R5cGUgPSB0aGlzLkVsZW1lbnQucHJvdG90eXBlLCBkM19lbGVtZW50X3NldEF0dHJpYnV0ZSA9IGQzX2VsZW1lbnRfcHJvdG90eXBlLnNldEF0dHJpYnV0ZSwgZDNfZWxlbWVudF9zZXRBdHRyaWJ1dGVOUyA9IGQzX2VsZW1lbnRfcHJvdG90eXBlLnNldEF0dHJpYnV0ZU5TLCBkM19zdHlsZV9wcm90b3R5cGUgPSB0aGlzLkNTU1N0eWxlRGVjbGFyYXRpb24ucHJvdG90eXBlLCBkM19zdHlsZV9zZXRQcm9wZXJ0eSA9IGQzX3N0eWxlX3Byb3RvdHlwZS5zZXRQcm9wZXJ0eTtcbiAgICAgIGQzX2VsZW1lbnRfcHJvdG90eXBlLnNldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGQzX2VsZW1lbnRfc2V0QXR0cmlidXRlLmNhbGwodGhpcywgbmFtZSwgdmFsdWUgKyBcIlwiKTtcbiAgICAgIH07XG4gICAgICBkM19lbGVtZW50X3Byb3RvdHlwZS5zZXRBdHRyaWJ1dGVOUyA9IGZ1bmN0aW9uKHNwYWNlLCBsb2NhbCwgdmFsdWUpIHtcbiAgICAgICAgZDNfZWxlbWVudF9zZXRBdHRyaWJ1dGVOUy5jYWxsKHRoaXMsIHNwYWNlLCBsb2NhbCwgdmFsdWUgKyBcIlwiKTtcbiAgICAgIH07XG4gICAgICBkM19zdHlsZV9wcm90b3R5cGUuc2V0UHJvcGVydHkgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgZDNfc3R5bGVfc2V0UHJvcGVydHkuY2FsbCh0aGlzLCBuYW1lLCB2YWx1ZSArIFwiXCIsIHByaW9yaXR5KTtcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGQzLmFzY2VuZGluZyA9IGQzX2FzY2VuZGluZztcbiAgZnVuY3Rpb24gZDNfYXNjZW5kaW5nKGEsIGIpIHtcbiAgICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IGEgPj0gYiA/IDAgOiBOYU47XG4gIH1cbiAgZDMuZGVzY2VuZGluZyA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gYiA8IGEgPyAtMSA6IGIgPiBhID8gMSA6IGIgPj0gYSA/IDAgOiBOYU47XG4gIH07XG4gIGQzLm1pbiA9IGZ1bmN0aW9uKGFycmF5LCBmKSB7XG4gICAgdmFyIGkgPSAtMSwgbiA9IGFycmF5Lmxlbmd0aCwgYSwgYjtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICgoYiA9IGFycmF5W2ldKSAhPSBudWxsICYmIGIgPj0gYikge1xuICAgICAgICBhID0gYjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKChiID0gYXJyYXlbaV0pICE9IG51bGwgJiYgYSA+IGIpIGEgPSBiO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKChiID0gZi5jYWxsKGFycmF5LCBhcnJheVtpXSwgaSkpICE9IG51bGwgJiYgYiA+PSBiKSB7XG4gICAgICAgIGEgPSBiO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoKGIgPSBmLmNhbGwoYXJyYXksIGFycmF5W2ldLCBpKSkgIT0gbnVsbCAmJiBhID4gYikgYSA9IGI7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9O1xuICBkMy5tYXggPSBmdW5jdGlvbihhcnJheSwgZikge1xuICAgIHZhciBpID0gLTEsIG4gPSBhcnJheS5sZW5ndGgsIGEsIGI7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoKGIgPSBhcnJheVtpXSkgIT0gbnVsbCAmJiBiID49IGIpIHtcbiAgICAgICAgYSA9IGI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICgoYiA9IGFycmF5W2ldKSAhPSBudWxsICYmIGIgPiBhKSBhID0gYjtcbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICgoYiA9IGYuY2FsbChhcnJheSwgYXJyYXlbaV0sIGkpKSAhPSBudWxsICYmIGIgPj0gYikge1xuICAgICAgICBhID0gYjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKChiID0gZi5jYWxsKGFycmF5LCBhcnJheVtpXSwgaSkpICE9IG51bGwgJiYgYiA+IGEpIGEgPSBiO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfTtcbiAgZDMuZXh0ZW50ID0gZnVuY3Rpb24oYXJyYXksIGYpIHtcbiAgICB2YXIgaSA9IC0xLCBuID0gYXJyYXkubGVuZ3RoLCBhLCBiLCBjO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKChiID0gYXJyYXlbaV0pICE9IG51bGwgJiYgYiA+PSBiKSB7XG4gICAgICAgIGEgPSBjID0gYjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKChiID0gYXJyYXlbaV0pICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGEgPiBiKSBhID0gYjtcbiAgICAgICAgaWYgKGMgPCBiKSBjID0gYjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICgoYiA9IGYuY2FsbChhcnJheSwgYXJyYXlbaV0sIGkpKSAhPSBudWxsICYmIGIgPj0gYikge1xuICAgICAgICBhID0gYyA9IGI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICgoYiA9IGYuY2FsbChhcnJheSwgYXJyYXlbaV0sIGkpKSAhPSBudWxsKSB7XG4gICAgICAgIGlmIChhID4gYikgYSA9IGI7XG4gICAgICAgIGlmIChjIDwgYikgYyA9IGI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbIGEsIGMgXTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfbnVtYmVyKHgpIHtcbiAgICByZXR1cm4geCA9PT0gbnVsbCA/IE5hTiA6ICt4O1xuICB9XG4gIGZ1bmN0aW9uIGQzX251bWVyaWMoeCkge1xuICAgIHJldHVybiAhaXNOYU4oeCk7XG4gIH1cbiAgZDMuc3VtID0gZnVuY3Rpb24oYXJyYXksIGYpIHtcbiAgICB2YXIgcyA9IDAsIG4gPSBhcnJheS5sZW5ndGgsIGEsIGkgPSAtMTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmIChkM19udW1lcmljKGEgPSArYXJyYXlbaV0pKSBzICs9IGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoZDNfbnVtZXJpYyhhID0gK2YuY2FsbChhcnJheSwgYXJyYXlbaV0sIGkpKSkgcyArPSBhO1xuICAgIH1cbiAgICByZXR1cm4gcztcbiAgfTtcbiAgZDMubWVhbiA9IGZ1bmN0aW9uKGFycmF5LCBmKSB7XG4gICAgdmFyIHMgPSAwLCBuID0gYXJyYXkubGVuZ3RoLCBhLCBpID0gLTEsIGogPSBuO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKGQzX251bWVyaWMoYSA9IGQzX251bWJlcihhcnJheVtpXSkpKSBzICs9IGE7IGVsc2UgLS1qO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKGQzX251bWVyaWMoYSA9IGQzX251bWJlcihmLmNhbGwoYXJyYXksIGFycmF5W2ldLCBpKSkpKSBzICs9IGE7IGVsc2UgLS1qO1xuICAgIH1cbiAgICBpZiAoaikgcmV0dXJuIHMgLyBqO1xuICB9O1xuICBkMy5xdWFudGlsZSA9IGZ1bmN0aW9uKHZhbHVlcywgcCkge1xuICAgIHZhciBIID0gKHZhbHVlcy5sZW5ndGggLSAxKSAqIHAgKyAxLCBoID0gTWF0aC5mbG9vcihIKSwgdiA9ICt2YWx1ZXNbaCAtIDFdLCBlID0gSCAtIGg7XG4gICAgcmV0dXJuIGUgPyB2ICsgZSAqICh2YWx1ZXNbaF0gLSB2KSA6IHY7XG4gIH07XG4gIGQzLm1lZGlhbiA9IGZ1bmN0aW9uKGFycmF5LCBmKSB7XG4gICAgdmFyIG51bWJlcnMgPSBbXSwgbiA9IGFycmF5Lmxlbmd0aCwgYSwgaSA9IC0xO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKGQzX251bWVyaWMoYSA9IGQzX251bWJlcihhcnJheVtpXSkpKSBudW1iZXJzLnB1c2goYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoZDNfbnVtZXJpYyhhID0gZDNfbnVtYmVyKGYuY2FsbChhcnJheSwgYXJyYXlbaV0sIGkpKSkpIG51bWJlcnMucHVzaChhKTtcbiAgICB9XG4gICAgaWYgKG51bWJlcnMubGVuZ3RoKSByZXR1cm4gZDMucXVhbnRpbGUobnVtYmVycy5zb3J0KGQzX2FzY2VuZGluZyksIC41KTtcbiAgfTtcbiAgZDMudmFyaWFuY2UgPSBmdW5jdGlvbihhcnJheSwgZikge1xuICAgIHZhciBuID0gYXJyYXkubGVuZ3RoLCBtID0gMCwgYSwgZCwgcyA9IDAsIGkgPSAtMSwgaiA9IDA7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgIGlmIChkM19udW1lcmljKGEgPSBkM19udW1iZXIoYXJyYXlbaV0pKSkge1xuICAgICAgICAgIGQgPSBhIC0gbTtcbiAgICAgICAgICBtICs9IGQgLyArK2o7XG4gICAgICAgICAgcyArPSBkICogKGEgLSBtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICBpZiAoZDNfbnVtZXJpYyhhID0gZDNfbnVtYmVyKGYuY2FsbChhcnJheSwgYXJyYXlbaV0sIGkpKSkpIHtcbiAgICAgICAgICBkID0gYSAtIG07XG4gICAgICAgICAgbSArPSBkIC8gKytqO1xuICAgICAgICAgIHMgKz0gZCAqIChhIC0gbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGogPiAxKSByZXR1cm4gcyAvIChqIC0gMSk7XG4gIH07XG4gIGQzLmRldmlhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gZDMudmFyaWFuY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gdiA/IE1hdGguc3FydCh2KSA6IHY7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2Jpc2VjdG9yKGNvbXBhcmUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGVmdDogZnVuY3Rpb24oYSwgeCwgbG8sIGhpKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykgbG8gPSAwO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDQpIGhpID0gYS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChsbyA8IGhpKSB7XG4gICAgICAgICAgdmFyIG1pZCA9IGxvICsgaGkgPj4+IDE7XG4gICAgICAgICAgaWYgKGNvbXBhcmUoYVttaWRdLCB4KSA8IDApIGxvID0gbWlkICsgMTsgZWxzZSBoaSA9IG1pZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG87XG4gICAgICB9LFxuICAgICAgcmlnaHQ6IGZ1bmN0aW9uKGEsIHgsIGxvLCBoaSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIGxvID0gMDtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCA0KSBoaSA9IGEubGVuZ3RoO1xuICAgICAgICB3aGlsZSAobG8gPCBoaSkge1xuICAgICAgICAgIHZhciBtaWQgPSBsbyArIGhpID4+PiAxO1xuICAgICAgICAgIGlmIChjb21wYXJlKGFbbWlkXSwgeCkgPiAwKSBoaSA9IG1pZDsgZWxzZSBsbyA9IG1pZCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgdmFyIGQzX2Jpc2VjdCA9IGQzX2Jpc2VjdG9yKGQzX2FzY2VuZGluZyk7XG4gIGQzLmJpc2VjdExlZnQgPSBkM19iaXNlY3QubGVmdDtcbiAgZDMuYmlzZWN0ID0gZDMuYmlzZWN0UmlnaHQgPSBkM19iaXNlY3QucmlnaHQ7XG4gIGQzLmJpc2VjdG9yID0gZnVuY3Rpb24oZikge1xuICAgIHJldHVybiBkM19iaXNlY3RvcihmLmxlbmd0aCA9PT0gMSA/IGZ1bmN0aW9uKGQsIHgpIHtcbiAgICAgIHJldHVybiBkM19hc2NlbmRpbmcoZihkKSwgeCk7XG4gICAgfSA6IGYpO1xuICB9O1xuICBkMy5zaHVmZmxlID0gZnVuY3Rpb24oYXJyYXksIGkwLCBpMSkge1xuICAgIGlmICgobSA9IGFyZ3VtZW50cy5sZW5ndGgpIDwgMykge1xuICAgICAgaTEgPSBhcnJheS5sZW5ndGg7XG4gICAgICBpZiAobSA8IDIpIGkwID0gMDtcbiAgICB9XG4gICAgdmFyIG0gPSBpMSAtIGkwLCB0LCBpO1xuICAgIHdoaWxlIChtKSB7XG4gICAgICBpID0gTWF0aC5yYW5kb20oKSAqIG0tLSB8IDA7XG4gICAgICB0ID0gYXJyYXlbbSArIGkwXSwgYXJyYXlbbSArIGkwXSA9IGFycmF5W2kgKyBpMF0sIGFycmF5W2kgKyBpMF0gPSB0O1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH07XG4gIGQzLnBlcm11dGUgPSBmdW5jdGlvbihhcnJheSwgaW5kZXhlcykge1xuICAgIHZhciBpID0gaW5kZXhlcy5sZW5ndGgsIHBlcm11dGVzID0gbmV3IEFycmF5KGkpO1xuICAgIHdoaWxlIChpLS0pIHBlcm11dGVzW2ldID0gYXJyYXlbaW5kZXhlc1tpXV07XG4gICAgcmV0dXJuIHBlcm11dGVzO1xuICB9O1xuICBkMy5wYWlycyA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIGkgPSAwLCBuID0gYXJyYXkubGVuZ3RoIC0gMSwgcDAsIHAxID0gYXJyYXlbMF0sIHBhaXJzID0gbmV3IEFycmF5KG4gPCAwID8gMCA6IG4pO1xuICAgIHdoaWxlIChpIDwgbikgcGFpcnNbaV0gPSBbIHAwID0gcDEsIHAxID0gYXJyYXlbKytpXSBdO1xuICAgIHJldHVybiBwYWlycztcbiAgfTtcbiAgZDMudHJhbnNwb3NlID0gZnVuY3Rpb24obWF0cml4KSB7XG4gICAgaWYgKCEobiA9IG1hdHJpeC5sZW5ndGgpKSByZXR1cm4gW107XG4gICAgZm9yICh2YXIgaSA9IC0xLCBtID0gZDMubWluKG1hdHJpeCwgZDNfdHJhbnNwb3NlTGVuZ3RoKSwgdHJhbnNwb3NlID0gbmV3IEFycmF5KG0pOyArK2kgPCBtOyApIHtcbiAgICAgIGZvciAodmFyIGogPSAtMSwgbiwgcm93ID0gdHJhbnNwb3NlW2ldID0gbmV3IEFycmF5KG4pOyArK2ogPCBuOyApIHtcbiAgICAgICAgcm93W2pdID0gbWF0cml4W2pdW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJhbnNwb3NlO1xuICB9O1xuICBmdW5jdGlvbiBkM190cmFuc3Bvc2VMZW5ndGgoZCkge1xuICAgIHJldHVybiBkLmxlbmd0aDtcbiAgfVxuICBkMy56aXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDMudHJhbnNwb3NlKGFyZ3VtZW50cyk7XG4gIH07XG4gIGQzLmtleXMgPSBmdW5jdGlvbihtYXApIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBtYXApIGtleXMucHVzaChrZXkpO1xuICAgIHJldHVybiBrZXlzO1xuICB9O1xuICBkMy52YWx1ZXMgPSBmdW5jdGlvbihtYXApIHtcbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG1hcCkgdmFsdWVzLnB1c2gobWFwW2tleV0pO1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH07XG4gIGQzLmVudHJpZXMgPSBmdW5jdGlvbihtYXApIHtcbiAgICB2YXIgZW50cmllcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBtYXApIGVudHJpZXMucHVzaCh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIHZhbHVlOiBtYXBba2V5XVxuICAgIH0pO1xuICAgIHJldHVybiBlbnRyaWVzO1xuICB9O1xuICBkMy5tZXJnZSA9IGZ1bmN0aW9uKGFycmF5cykge1xuICAgIHZhciBuID0gYXJyYXlzLmxlbmd0aCwgbSwgaSA9IC0xLCBqID0gMCwgbWVyZ2VkLCBhcnJheTtcbiAgICB3aGlsZSAoKytpIDwgbikgaiArPSBhcnJheXNbaV0ubGVuZ3RoO1xuICAgIG1lcmdlZCA9IG5ldyBBcnJheShqKTtcbiAgICB3aGlsZSAoLS1uID49IDApIHtcbiAgICAgIGFycmF5ID0gYXJyYXlzW25dO1xuICAgICAgbSA9IGFycmF5Lmxlbmd0aDtcbiAgICAgIHdoaWxlICgtLW0gPj0gMCkge1xuICAgICAgICBtZXJnZWRbLS1qXSA9IGFycmF5W21dO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9O1xuICB2YXIgYWJzID0gTWF0aC5hYnM7XG4gIGQzLnJhbmdlID0gZnVuY3Rpb24oc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIHtcbiAgICAgIHN0ZXAgPSAxO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHN0b3AgPSBzdGFydDtcbiAgICAgICAgc3RhcnQgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoKHN0b3AgLSBzdGFydCkgLyBzdGVwID09PSBJbmZpbml0eSkgdGhyb3cgbmV3IEVycm9yKFwiaW5maW5pdGUgcmFuZ2VcIik7XG4gICAgdmFyIHJhbmdlID0gW10sIGsgPSBkM19yYW5nZV9pbnRlZ2VyU2NhbGUoYWJzKHN0ZXApKSwgaSA9IC0xLCBqO1xuICAgIHN0YXJ0ICo9IGssIHN0b3AgKj0gaywgc3RlcCAqPSBrO1xuICAgIGlmIChzdGVwIDwgMCkgd2hpbGUgKChqID0gc3RhcnQgKyBzdGVwICogKytpKSA+IHN0b3ApIHJhbmdlLnB1c2goaiAvIGspOyBlbHNlIHdoaWxlICgoaiA9IHN0YXJ0ICsgc3RlcCAqICsraSkgPCBzdG9wKSByYW5nZS5wdXNoKGogLyBrKTtcbiAgICByZXR1cm4gcmFuZ2U7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3JhbmdlX2ludGVnZXJTY2FsZSh4KSB7XG4gICAgdmFyIGsgPSAxO1xuICAgIHdoaWxlICh4ICogayAlIDEpIGsgKj0gMTA7XG4gICAgcmV0dXJuIGs7XG4gIH1cbiAgZnVuY3Rpb24gZDNfY2xhc3MoY3RvciwgcHJvcGVydGllcykge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3Rvci5wcm90b3R5cGUsIGtleSwge1xuICAgICAgICB2YWx1ZTogcHJvcGVydGllc1trZXldLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGQzLm1hcCA9IGZ1bmN0aW9uKG9iamVjdCwgZikge1xuICAgIHZhciBtYXAgPSBuZXcgZDNfTWFwKCk7XG4gICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIGQzX01hcCkge1xuICAgICAgb2JqZWN0LmZvckVhY2goZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICBtYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcbiAgICAgIHZhciBpID0gLTEsIG4gPSBvYmplY3QubGVuZ3RoLCBvO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHdoaWxlICgrK2kgPCBuKSBtYXAuc2V0KGksIG9iamVjdFtpXSk7IGVsc2Ugd2hpbGUgKCsraSA8IG4pIG1hcC5zZXQoZi5jYWxsKG9iamVjdCwgbyA9IG9iamVjdFtpXSwgaSksIG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSBtYXAuc2V0KGtleSwgb2JqZWN0W2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gbWFwO1xuICB9O1xuICBmdW5jdGlvbiBkM19NYXAoKSB7XG4gICAgdGhpcy5fID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgfVxuICB2YXIgZDNfbWFwX3Byb3RvID0gXCJfX3Byb3RvX19cIiwgZDNfbWFwX3plcm8gPSBcIlxceDAwXCI7XG4gIGQzX2NsYXNzKGQzX01hcCwge1xuICAgIGhhczogZDNfbWFwX2hhcyxcbiAgICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX1tkM19tYXBfZXNjYXBlKGtleSldO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fW2QzX21hcF9lc2NhcGUoa2V5KV0gPSB2YWx1ZTtcbiAgICB9LFxuICAgIHJlbW92ZTogZDNfbWFwX3JlbW92ZSxcbiAgICBrZXlzOiBkM19tYXBfa2V5cyxcbiAgICB2YWx1ZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuXykgdmFsdWVzLnB1c2godGhpcy5fW2tleV0pO1xuICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9LFxuICAgIGVudHJpZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVudHJpZXMgPSBbXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLl8pIGVudHJpZXMucHVzaCh7XG4gICAgICAgIGtleTogZDNfbWFwX3VuZXNjYXBlKGtleSksXG4gICAgICAgIHZhbHVlOiB0aGlzLl9ba2V5XVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZW50cmllcztcbiAgICB9LFxuICAgIHNpemU6IGQzX21hcF9zaXplLFxuICAgIGVtcHR5OiBkM19tYXBfZW1wdHksXG4gICAgZm9yRWFjaDogZnVuY3Rpb24oZikge1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuXykgZi5jYWxsKHRoaXMsIGQzX21hcF91bmVzY2FwZShrZXkpLCB0aGlzLl9ba2V5XSk7XG4gICAgfVxuICB9KTtcbiAgZnVuY3Rpb24gZDNfbWFwX2VzY2FwZShrZXkpIHtcbiAgICByZXR1cm4gKGtleSArPSBcIlwiKSA9PT0gZDNfbWFwX3Byb3RvIHx8IGtleVswXSA9PT0gZDNfbWFwX3plcm8gPyBkM19tYXBfemVybyArIGtleSA6IGtleTtcbiAgfVxuICBmdW5jdGlvbiBkM19tYXBfdW5lc2NhcGUoa2V5KSB7XG4gICAgcmV0dXJuIChrZXkgKz0gXCJcIilbMF0gPT09IGQzX21hcF96ZXJvID8ga2V5LnNsaWNlKDEpIDoga2V5O1xuICB9XG4gIGZ1bmN0aW9uIGQzX21hcF9oYXMoa2V5KSB7XG4gICAgcmV0dXJuIGQzX21hcF9lc2NhcGUoa2V5KSBpbiB0aGlzLl87XG4gIH1cbiAgZnVuY3Rpb24gZDNfbWFwX3JlbW92ZShrZXkpIHtcbiAgICByZXR1cm4gKGtleSA9IGQzX21hcF9lc2NhcGUoa2V5KSkgaW4gdGhpcy5fICYmIGRlbGV0ZSB0aGlzLl9ba2V5XTtcbiAgfVxuICBmdW5jdGlvbiBkM19tYXBfa2V5cygpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLl8pIGtleXMucHVzaChkM19tYXBfdW5lc2NhcGUoa2V5KSk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbWFwX3NpemUoKSB7XG4gICAgdmFyIHNpemUgPSAwO1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLl8pICsrc2l6ZTtcbiAgICByZXR1cm4gc2l6ZTtcbiAgfVxuICBmdW5jdGlvbiBkM19tYXBfZW1wdHkoKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuXykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGQzLm5lc3QgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbmVzdCA9IHt9LCBrZXlzID0gW10sIHNvcnRLZXlzID0gW10sIHNvcnRWYWx1ZXMsIHJvbGx1cDtcbiAgICBmdW5jdGlvbiBtYXAobWFwVHlwZSwgYXJyYXksIGRlcHRoKSB7XG4gICAgICBpZiAoZGVwdGggPj0ga2V5cy5sZW5ndGgpIHJldHVybiByb2xsdXAgPyByb2xsdXAuY2FsbChuZXN0LCBhcnJheSkgOiBzb3J0VmFsdWVzID8gYXJyYXkuc29ydChzb3J0VmFsdWVzKSA6IGFycmF5O1xuICAgICAgdmFyIGkgPSAtMSwgbiA9IGFycmF5Lmxlbmd0aCwga2V5ID0ga2V5c1tkZXB0aCsrXSwga2V5VmFsdWUsIG9iamVjdCwgc2V0dGVyLCB2YWx1ZXNCeUtleSA9IG5ldyBkM19NYXAoKSwgdmFsdWVzO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgaWYgKHZhbHVlcyA9IHZhbHVlc0J5S2V5LmdldChrZXlWYWx1ZSA9IGtleShvYmplY3QgPSBhcnJheVtpXSkpKSB7XG4gICAgICAgICAgdmFsdWVzLnB1c2gob2JqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZXNCeUtleS5zZXQoa2V5VmFsdWUsIFsgb2JqZWN0IF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWFwVHlwZSkge1xuICAgICAgICBvYmplY3QgPSBtYXBUeXBlKCk7XG4gICAgICAgIHNldHRlciA9IGZ1bmN0aW9uKGtleVZhbHVlLCB2YWx1ZXMpIHtcbiAgICAgICAgICBvYmplY3Quc2V0KGtleVZhbHVlLCBtYXAobWFwVHlwZSwgdmFsdWVzLCBkZXB0aCkpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0ID0ge307XG4gICAgICAgIHNldHRlciA9IGZ1bmN0aW9uKGtleVZhbHVlLCB2YWx1ZXMpIHtcbiAgICAgICAgICBvYmplY3Rba2V5VmFsdWVdID0gbWFwKG1hcFR5cGUsIHZhbHVlcywgZGVwdGgpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdmFsdWVzQnlLZXkuZm9yRWFjaChzZXR0ZXIpO1xuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZW50cmllcyhtYXAsIGRlcHRoKSB7XG4gICAgICBpZiAoZGVwdGggPj0ga2V5cy5sZW5ndGgpIHJldHVybiBtYXA7XG4gICAgICB2YXIgYXJyYXkgPSBbXSwgc29ydEtleSA9IHNvcnRLZXlzW2RlcHRoKytdO1xuICAgICAgbWFwLmZvckVhY2goZnVuY3Rpb24oa2V5LCBrZXlNYXApIHtcbiAgICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgdmFsdWVzOiBlbnRyaWVzKGtleU1hcCwgZGVwdGgpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc29ydEtleSA/IGFycmF5LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gc29ydEtleShhLmtleSwgYi5rZXkpO1xuICAgICAgfSkgOiBhcnJheTtcbiAgICB9XG4gICAgbmVzdC5tYXAgPSBmdW5jdGlvbihhcnJheSwgbWFwVHlwZSkge1xuICAgICAgcmV0dXJuIG1hcChtYXBUeXBlLCBhcnJheSwgMCk7XG4gICAgfTtcbiAgICBuZXN0LmVudHJpZXMgPSBmdW5jdGlvbihhcnJheSkge1xuICAgICAgcmV0dXJuIGVudHJpZXMobWFwKGQzLm1hcCwgYXJyYXksIDApLCAwKTtcbiAgICB9O1xuICAgIG5lc3Qua2V5ID0gZnVuY3Rpb24oZCkge1xuICAgICAga2V5cy5wdXNoKGQpO1xuICAgICAgcmV0dXJuIG5lc3Q7XG4gICAgfTtcbiAgICBuZXN0LnNvcnRLZXlzID0gZnVuY3Rpb24ob3JkZXIpIHtcbiAgICAgIHNvcnRLZXlzW2tleXMubGVuZ3RoIC0gMV0gPSBvcmRlcjtcbiAgICAgIHJldHVybiBuZXN0O1xuICAgIH07XG4gICAgbmVzdC5zb3J0VmFsdWVzID0gZnVuY3Rpb24ob3JkZXIpIHtcbiAgICAgIHNvcnRWYWx1ZXMgPSBvcmRlcjtcbiAgICAgIHJldHVybiBuZXN0O1xuICAgIH07XG4gICAgbmVzdC5yb2xsdXAgPSBmdW5jdGlvbihmKSB7XG4gICAgICByb2xsdXAgPSBmO1xuICAgICAgcmV0dXJuIG5lc3Q7XG4gICAgfTtcbiAgICByZXR1cm4gbmVzdDtcbiAgfTtcbiAgZDMuc2V0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgc2V0ID0gbmV3IGQzX1NldCgpO1xuICAgIGlmIChhcnJheSkgZm9yICh2YXIgaSA9IDAsIG4gPSBhcnJheS5sZW5ndGg7IGkgPCBuOyArK2kpIHNldC5hZGQoYXJyYXlbaV0pO1xuICAgIHJldHVybiBzZXQ7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX1NldCgpIHtcbiAgICB0aGlzLl8gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9XG4gIGQzX2NsYXNzKGQzX1NldCwge1xuICAgIGhhczogZDNfbWFwX2hhcyxcbiAgICBhZGQ6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgdGhpcy5fW2QzX21hcF9lc2NhcGUoa2V5ICs9IFwiXCIpXSA9IHRydWU7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH0sXG4gICAgcmVtb3ZlOiBkM19tYXBfcmVtb3ZlLFxuICAgIHZhbHVlczogZDNfbWFwX2tleXMsXG4gICAgc2l6ZTogZDNfbWFwX3NpemUsXG4gICAgZW1wdHk6IGQzX21hcF9lbXB0eSxcbiAgICBmb3JFYWNoOiBmdW5jdGlvbihmKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5fKSBmLmNhbGwodGhpcywgZDNfbWFwX3VuZXNjYXBlKGtleSkpO1xuICAgIH1cbiAgfSk7XG4gIGQzLmJlaGF2aW9yID0ge307XG4gIGZ1bmN0aW9uIGQzX2lkZW50aXR5KGQpIHtcbiAgICByZXR1cm4gZDtcbiAgfVxuICBkMy5yZWJpbmQgPSBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSkge1xuICAgIHZhciBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1ldGhvZDtcbiAgICB3aGlsZSAoKytpIDwgbikgdGFyZ2V0W21ldGhvZCA9IGFyZ3VtZW50c1tpXV0gPSBkM19yZWJpbmQodGFyZ2V0LCBzb3VyY2UsIHNvdXJjZVttZXRob2RdKTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICBmdW5jdGlvbiBkM19yZWJpbmQodGFyZ2V0LCBzb3VyY2UsIG1ldGhvZCkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB2YWx1ZSA9IG1ldGhvZC5hcHBseShzb3VyY2UsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IHNvdXJjZSA/IHRhcmdldCA6IHZhbHVlO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZDNfdmVuZG9yU3ltYm9sKG9iamVjdCwgbmFtZSkge1xuICAgIGlmIChuYW1lIGluIG9iamVjdCkgcmV0dXJuIG5hbWU7XG4gICAgbmFtZSA9IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gZDNfdmVuZG9yUHJlZml4ZXMubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICB2YXIgcHJlZml4TmFtZSA9IGQzX3ZlbmRvclByZWZpeGVzW2ldICsgbmFtZTtcbiAgICAgIGlmIChwcmVmaXhOYW1lIGluIG9iamVjdCkgcmV0dXJuIHByZWZpeE5hbWU7XG4gICAgfVxuICB9XG4gIHZhciBkM192ZW5kb3JQcmVmaXhlcyA9IFsgXCJ3ZWJraXRcIiwgXCJtc1wiLCBcIm1velwiLCBcIk1velwiLCBcIm9cIiwgXCJPXCIgXTtcbiAgZnVuY3Rpb24gZDNfbm9vcCgpIHt9XG4gIGQzLmRpc3BhdGNoID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gbmV3IGQzX2Rpc3BhdGNoKCksIGkgPSAtMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IG4pIGRpc3BhdGNoW2FyZ3VtZW50c1tpXV0gPSBkM19kaXNwYXRjaF9ldmVudChkaXNwYXRjaCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoO1xuICB9O1xuICBmdW5jdGlvbiBkM19kaXNwYXRjaCgpIHt9XG4gIGQzX2Rpc3BhdGNoLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgdmFyIGkgPSB0eXBlLmluZGV4T2YoXCIuXCIpLCBuYW1lID0gXCJcIjtcbiAgICBpZiAoaSA+PSAwKSB7XG4gICAgICBuYW1lID0gdHlwZS5zbGljZShpICsgMSk7XG4gICAgICB0eXBlID0gdHlwZS5zbGljZSgwLCBpKTtcbiAgICB9XG4gICAgaWYgKHR5cGUpIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IHRoaXNbdHlwZV0ub24obmFtZSkgOiB0aGlzW3R5cGVdLm9uKG5hbWUsIGxpc3RlbmVyKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgaWYgKGxpc3RlbmVyID09IG51bGwpIGZvciAodHlwZSBpbiB0aGlzKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHR5cGUpKSB0aGlzW3R5cGVdLm9uKG5hbWUsIG51bGwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBkM19kaXNwYXRjaF9ldmVudChkaXNwYXRjaCkge1xuICAgIHZhciBsaXN0ZW5lcnMgPSBbXSwgbGlzdGVuZXJCeU5hbWUgPSBuZXcgZDNfTWFwKCk7XG4gICAgZnVuY3Rpb24gZXZlbnQoKSB7XG4gICAgICB2YXIgeiA9IGxpc3RlbmVycywgaSA9IC0xLCBuID0gei5sZW5ndGgsIGw7XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKGwgPSB6W2ldLm9uKSBsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gZGlzcGF0Y2g7XG4gICAgfVxuICAgIGV2ZW50Lm9uID0gZnVuY3Rpb24obmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsID0gbGlzdGVuZXJCeU5hbWUuZ2V0KG5hbWUpLCBpO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSByZXR1cm4gbCAmJiBsLm9uO1xuICAgICAgaWYgKGwpIHtcbiAgICAgICAgbC5vbiA9IG51bGw7XG4gICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgwLCBpID0gbGlzdGVuZXJzLmluZGV4T2YobCkpLmNvbmNhdChsaXN0ZW5lcnMuc2xpY2UoaSArIDEpKTtcbiAgICAgICAgbGlzdGVuZXJCeU5hbWUucmVtb3ZlKG5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKGxpc3RlbmVyKSBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lckJ5TmFtZS5zZXQobmFtZSwge1xuICAgICAgICBvbjogbGlzdGVuZXJcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiBkaXNwYXRjaDtcbiAgICB9O1xuICAgIHJldHVybiBldmVudDtcbiAgfVxuICBkMy5ldmVudCA9IG51bGw7XG4gIGZ1bmN0aW9uIGQzX2V2ZW50UHJldmVudERlZmF1bHQoKSB7XG4gICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBmdW5jdGlvbiBkM19ldmVudFNvdXJjZSgpIHtcbiAgICB2YXIgZSA9IGQzLmV2ZW50LCBzO1xuICAgIHdoaWxlIChzID0gZS5zb3VyY2VFdmVudCkgZSA9IHM7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZXZlbnREaXNwYXRjaCh0YXJnZXQpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSBuZXcgZDNfZGlzcGF0Y2goKSwgaSA9IDAsIG4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHdoaWxlICgrK2kgPCBuKSBkaXNwYXRjaFthcmd1bWVudHNbaV1dID0gZDNfZGlzcGF0Y2hfZXZlbnQoZGlzcGF0Y2gpO1xuICAgIGRpc3BhdGNoLm9mID0gZnVuY3Rpb24odGhpeiwgYXJndW1lbnR6KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZTEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgZTAgPSBlMS5zb3VyY2VFdmVudCA9IGQzLmV2ZW50O1xuICAgICAgICAgIGUxLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICBkMy5ldmVudCA9IGUxO1xuICAgICAgICAgIGRpc3BhdGNoW2UxLnR5cGVdLmFwcGx5KHRoaXosIGFyZ3VtZW50eik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgZDMuZXZlbnQgPSBlMDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBkaXNwYXRjaDtcbiAgfVxuICBkMy5yZXF1b3RlID0gZnVuY3Rpb24ocykge1xuICAgIHJldHVybiBzLnJlcGxhY2UoZDNfcmVxdW90ZV9yZSwgXCJcXFxcJCZcIik7XG4gIH07XG4gIHZhciBkM19yZXF1b3RlX3JlID0gL1tcXFxcXFxeXFwkXFwqXFwrXFw/XFx8XFxbXFxdXFwoXFwpXFwuXFx7XFx9XS9nO1xuICB2YXIgZDNfc3ViY2xhc3MgPSB7fS5fX3Byb3RvX18gPyBmdW5jdGlvbihvYmplY3QsIHByb3RvdHlwZSkge1xuICAgIG9iamVjdC5fX3Byb3RvX18gPSBwcm90b3R5cGU7XG4gIH0gOiBmdW5jdGlvbihvYmplY3QsIHByb3RvdHlwZSkge1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHByb3RvdHlwZSkgb2JqZWN0W3Byb3BlcnR5XSA9IHByb3RvdHlwZVtwcm9wZXJ0eV07XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3NlbGVjdGlvbihncm91cHMpIHtcbiAgICBkM19zdWJjbGFzcyhncm91cHMsIGQzX3NlbGVjdGlvblByb3RvdHlwZSk7XG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfVxuICB2YXIgZDNfc2VsZWN0ID0gZnVuY3Rpb24ocywgbikge1xuICAgIHJldHVybiBuLnF1ZXJ5U2VsZWN0b3Iocyk7XG4gIH0sIGQzX3NlbGVjdEFsbCA9IGZ1bmN0aW9uKHMsIG4pIHtcbiAgICByZXR1cm4gbi5xdWVyeVNlbGVjdG9yQWxsKHMpO1xuICB9LCBkM19zZWxlY3RNYXRjaGVzID0gZnVuY3Rpb24obiwgcykge1xuICAgIHZhciBkM19zZWxlY3RNYXRjaGVyID0gbi5tYXRjaGVzIHx8IG5bZDNfdmVuZG9yU3ltYm9sKG4sIFwibWF0Y2hlc1NlbGVjdG9yXCIpXTtcbiAgICBkM19zZWxlY3RNYXRjaGVzID0gZnVuY3Rpb24obiwgcykge1xuICAgICAgcmV0dXJuIGQzX3NlbGVjdE1hdGNoZXIuY2FsbChuLCBzKTtcbiAgICB9O1xuICAgIHJldHVybiBkM19zZWxlY3RNYXRjaGVzKG4sIHMpO1xuICB9O1xuICBpZiAodHlwZW9mIFNpenpsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZDNfc2VsZWN0ID0gZnVuY3Rpb24ocywgbikge1xuICAgICAgcmV0dXJuIFNpenpsZShzLCBuKVswXSB8fCBudWxsO1xuICAgIH07XG4gICAgZDNfc2VsZWN0QWxsID0gU2l6emxlO1xuICAgIGQzX3NlbGVjdE1hdGNoZXMgPSBTaXp6bGUubWF0Y2hlc1NlbGVjdG9yO1xuICB9XG4gIGQzLnNlbGVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkMy5zZWxlY3QoZDNfZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgfTtcbiAgdmFyIGQzX3NlbGVjdGlvblByb3RvdHlwZSA9IGQzLnNlbGVjdGlvbi5wcm90b3R5cGUgPSBbXTtcbiAgZDNfc2VsZWN0aW9uUHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgdmFyIHN1Ymdyb3VwcyA9IFtdLCBzdWJncm91cCwgc3Vibm9kZSwgZ3JvdXAsIG5vZGU7XG4gICAgc2VsZWN0b3IgPSBkM19zZWxlY3Rpb25fc2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGZvciAodmFyIGogPSAtMSwgbSA9IHRoaXMubGVuZ3RoOyArK2ogPCBtOyApIHtcbiAgICAgIHN1Ymdyb3Vwcy5wdXNoKHN1Ymdyb3VwID0gW10pO1xuICAgICAgc3ViZ3JvdXAucGFyZW50Tm9kZSA9IChncm91cCA9IHRoaXNbal0pLnBhcmVudE5vZGU7XG4gICAgICBmb3IgKHZhciBpID0gLTEsIG4gPSBncm91cC5sZW5ndGg7ICsraSA8IG47ICkge1xuICAgICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgICAgc3ViZ3JvdXAucHVzaChzdWJub2RlID0gc2VsZWN0b3IuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBqKSk7XG4gICAgICAgICAgaWYgKHN1Ym5vZGUgJiYgXCJfX2RhdGFfX1wiIGluIG5vZGUpIHN1Ym5vZGUuX19kYXRhX18gPSBub2RlLl9fZGF0YV9fO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1Ymdyb3VwLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGQzX3NlbGVjdGlvbihzdWJncm91cHMpO1xuICB9O1xuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25fc2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIgPyBzZWxlY3RvciA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGQzX3NlbGVjdChzZWxlY3RvciwgdGhpcyk7XG4gICAgfTtcbiAgfVxuICBkM19zZWxlY3Rpb25Qcm90b3R5cGUuc2VsZWN0QWxsID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICB2YXIgc3ViZ3JvdXBzID0gW10sIHN1Ymdyb3VwLCBub2RlO1xuICAgIHNlbGVjdG9yID0gZDNfc2VsZWN0aW9uX3NlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICBmb3IgKHZhciBqID0gLTEsIG0gPSB0aGlzLmxlbmd0aDsgKytqIDwgbTsgKSB7XG4gICAgICBmb3IgKHZhciBncm91cCA9IHRoaXNbal0sIGkgPSAtMSwgbiA9IGdyb3VwLmxlbmd0aDsgKytpIDwgbjsgKSB7XG4gICAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgICBzdWJncm91cHMucHVzaChzdWJncm91cCA9IGQzX2FycmF5KHNlbGVjdG9yLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgaikpKTtcbiAgICAgICAgICBzdWJncm91cC5wYXJlbnROb2RlID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZDNfc2VsZWN0aW9uKHN1Ymdyb3Vwcyk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3NlbGVjdGlvbl9zZWxlY3RvckFsbChzZWxlY3Rvcikge1xuICAgIHJldHVybiB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIiA/IHNlbGVjdG9yIDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZDNfc2VsZWN0QWxsKHNlbGVjdG9yLCB0aGlzKTtcbiAgICB9O1xuICB9XG4gIHZhciBkM19uc1hodG1sID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI7XG4gIHZhciBkM19uc1ByZWZpeCA9IHtcbiAgICBzdmc6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICB4aHRtbDogZDNfbnNYaHRtbCxcbiAgICB4bGluazogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gICAgeG1sOiBcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCJcbiAgfTtcbiAgZDMubnMgPSB7XG4gICAgcHJlZml4OiBkM19uc1ByZWZpeCxcbiAgICBxdWFsaWZ5OiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICB2YXIgaSA9IG5hbWUuaW5kZXhPZihcIjpcIiksIHByZWZpeCA9IG5hbWU7XG4gICAgICBpZiAoaSA+PSAwICYmIChwcmVmaXggPSBuYW1lLnNsaWNlKDAsIGkpKSAhPT0gXCJ4bWxuc1wiKSBuYW1lID0gbmFtZS5zbGljZShpICsgMSk7XG4gICAgICByZXR1cm4gZDNfbnNQcmVmaXguaGFzT3duUHJvcGVydHkocHJlZml4KSA/IHtcbiAgICAgICAgc3BhY2U6IGQzX25zUHJlZml4W3ByZWZpeF0sXG4gICAgICAgIGxvY2FsOiBuYW1lXG4gICAgICB9IDogbmFtZTtcbiAgICB9XG4gIH07XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMubm9kZSgpO1xuICAgICAgICBuYW1lID0gZDMubnMucXVhbGlmeShuYW1lKTtcbiAgICAgICAgcmV0dXJuIG5hbWUubG9jYWwgPyBub2RlLmdldEF0dHJpYnV0ZU5TKG5hbWUuc3BhY2UsIG5hbWUubG9jYWwpIDogbm9kZS5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhbHVlIGluIG5hbWUpIHRoaXMuZWFjaChkM19zZWxlY3Rpb25fYXR0cih2YWx1ZSwgbmFtZVt2YWx1ZV0pKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lYWNoKGQzX3NlbGVjdGlvbl9hdHRyKG5hbWUsIHZhbHVlKSk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3NlbGVjdGlvbl9hdHRyKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IGQzLm5zLnF1YWxpZnkobmFtZSk7XG4gICAgZnVuY3Rpb24gYXR0ck51bGwoKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXR0ck51bGxOUygpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMobmFtZS5zcGFjZSwgbmFtZS5sb2NhbCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dHJDb25zdGFudCgpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXR0ckNvbnN0YW50TlMoKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZU5TKG5hbWUuc3BhY2UsIG5hbWUubG9jYWwsIHZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXR0ckZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHggPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKHggPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IGVsc2UgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgeCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dHJGdW5jdGlvbk5TKCkge1xuICAgICAgdmFyIHggPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKHggPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhuYW1lLnNwYWNlLCBuYW1lLmxvY2FsKTsgZWxzZSB0aGlzLnNldEF0dHJpYnV0ZU5TKG5hbWUuc3BhY2UsIG5hbWUubG9jYWwsIHgpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IG5hbWUubG9jYWwgPyBhdHRyTnVsbE5TIDogYXR0ck51bGwgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IG5hbWUubG9jYWwgPyBhdHRyRnVuY3Rpb25OUyA6IGF0dHJGdW5jdGlvbiA6IG5hbWUubG9jYWwgPyBhdHRyQ29uc3RhbnROUyA6IGF0dHJDb25zdGFudDtcbiAgfVxuICBmdW5jdGlvbiBkM19jb2xsYXBzZShzKSB7XG4gICAgcmV0dXJuIHMudHJpbSgpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpO1xuICB9XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS5jbGFzc2VkID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMubm9kZSgpLCBuID0gKG5hbWUgPSBkM19zZWxlY3Rpb25fY2xhc3NlcyhuYW1lKSkubGVuZ3RoLCBpID0gLTE7XG4gICAgICAgIGlmICh2YWx1ZSA9IG5vZGUuY2xhc3NMaXN0KSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICghdmFsdWUuY29udGFpbnMobmFtZVtpXSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICghZDNfc2VsZWN0aW9uX2NsYXNzZWRSZShuYW1lW2ldKS50ZXN0KHZhbHVlKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgZm9yICh2YWx1ZSBpbiBuYW1lKSB0aGlzLmVhY2goZDNfc2VsZWN0aW9uX2NsYXNzZWQodmFsdWUsIG5hbWVbdmFsdWVdKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZWFjaChkM19zZWxlY3Rpb25fY2xhc3NlZChuYW1lLCB2YWx1ZSkpO1xuICB9O1xuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25fY2xhc3NlZFJlKG5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/Ol58XFxcXHMrKVwiICsgZDMucmVxdW90ZShuYW1lKSArIFwiKD86XFxcXHMrfCQpXCIsIFwiZ1wiKTtcbiAgfVxuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25fY2xhc3NlcyhuYW1lKSB7XG4gICAgcmV0dXJuIChuYW1lICsgXCJcIikudHJpbSgpLnNwbGl0KC9efFxccysvKTtcbiAgfVxuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25fY2xhc3NlZChuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBkM19zZWxlY3Rpb25fY2xhc3NlcyhuYW1lKS5tYXAoZDNfc2VsZWN0aW9uX2NsYXNzZWROYW1lKTtcbiAgICB2YXIgbiA9IG5hbWUubGVuZ3RoO1xuICAgIGZ1bmN0aW9uIGNsYXNzZWRDb25zdGFudCgpIHtcbiAgICAgIHZhciBpID0gLTE7XG4gICAgICB3aGlsZSAoKytpIDwgbikgbmFtZVtpXSh0aGlzLCB2YWx1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsYXNzZWRGdW5jdGlvbigpIHtcbiAgICAgIHZhciBpID0gLTEsIHggPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIG5hbWVbaV0odGhpcywgeCk7XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IGNsYXNzZWRGdW5jdGlvbiA6IGNsYXNzZWRDb25zdGFudDtcbiAgfVxuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25fY2xhc3NlZE5hbWUobmFtZSkge1xuICAgIHZhciByZSA9IGQzX3NlbGVjdGlvbl9jbGFzc2VkUmUobmFtZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUsIHZhbHVlKSB7XG4gICAgICBpZiAoYyA9IG5vZGUuY2xhc3NMaXN0KSByZXR1cm4gdmFsdWUgPyBjLmFkZChuYW1lKSA6IGMucmVtb3ZlKG5hbWUpO1xuICAgICAgdmFyIGMgPSBub2RlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCI7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgcmUubGFzdEluZGV4ID0gMDtcbiAgICAgICAgaWYgKCFyZS50ZXN0KGMpKSBub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGQzX2NvbGxhcHNlKGMgKyBcIiBcIiArIG5hbWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgZDNfY29sbGFwc2UoYy5yZXBsYWNlKHJlLCBcIiBcIikpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS5zdHlsZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICAgIHZhciBuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAobiA8IDMpIHtcbiAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAobiA8IDIpIHZhbHVlID0gXCJcIjtcbiAgICAgICAgZm9yIChwcmlvcml0eSBpbiBuYW1lKSB0aGlzLmVhY2goZDNfc2VsZWN0aW9uX3N0eWxlKHByaW9yaXR5LCBuYW1lW3ByaW9yaXR5XSwgdmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpZiAobiA8IDIpIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLm5vZGUoKTtcbiAgICAgICAgcmV0dXJuIGQzX3dpbmRvdyhub2RlKS5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUobmFtZSk7XG4gICAgICB9XG4gICAgICBwcmlvcml0eSA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVhY2goZDNfc2VsZWN0aW9uX3N0eWxlKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkpO1xuICB9O1xuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25fc3R5bGUobmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gICAgZnVuY3Rpb24gc3R5bGVOdWxsKCkge1xuICAgICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3R5bGVDb25zdGFudCgpIHtcbiAgICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUsIHByaW9yaXR5KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3R5bGVGdW5jdGlvbigpIHtcbiAgICAgIHZhciB4ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIGlmICh4ID09IG51bGwpIHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7IGVsc2UgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB4LCBwcmlvcml0eSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gc3R5bGVOdWxsIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBzdHlsZUZ1bmN0aW9uIDogc3R5bGVDb25zdGFudDtcbiAgfVxuICBkM19zZWxlY3Rpb25Qcm90b3R5cGUucHJvcGVydHkgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKSByZXR1cm4gdGhpcy5ub2RlKClbbmFtZV07XG4gICAgICBmb3IgKHZhbHVlIGluIG5hbWUpIHRoaXMuZWFjaChkM19zZWxlY3Rpb25fcHJvcGVydHkodmFsdWUsIG5hbWVbdmFsdWVdKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZWFjaChkM19zZWxlY3Rpb25fcHJvcGVydHkobmFtZSwgdmFsdWUpKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc2VsZWN0aW9uX3Byb3BlcnR5KG5hbWUsIHZhbHVlKSB7XG4gICAgZnVuY3Rpb24gcHJvcGVydHlOdWxsKCkge1xuICAgICAgZGVsZXRlIHRoaXNbbmFtZV07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByb3BlcnR5Q29uc3RhbnQoKSB7XG4gICAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByb3BlcnR5RnVuY3Rpb24oKSB7XG4gICAgICB2YXIgeCA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBpZiAoeCA9PSBudWxsKSBkZWxldGUgdGhpc1tuYW1lXTsgZWxzZSB0aGlzW25hbWVdID0geDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBwcm9wZXJ0eU51bGwgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IHByb3BlcnR5RnVuY3Rpb24gOiBwcm9wZXJ0eUNvbnN0YW50O1xuICB9XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMuZWFjaCh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgdGhpcy50ZXh0Q29udGVudCA9IHYgPT0gbnVsbCA/IFwiXCIgOiB2O1xuICAgIH0gOiB2YWx1ZSA9PSBudWxsID8gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9IDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgfSkgOiB0aGlzLm5vZGUoKS50ZXh0Q29udGVudDtcbiAgfTtcbiAgZDNfc2VsZWN0aW9uUHJvdG90eXBlLmh0bWwgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy5lYWNoKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB0aGlzLmlubmVySFRNTCA9IHYgPT0gbnVsbCA/IFwiXCIgOiB2O1xuICAgIH0gOiB2YWx1ZSA9PSBudWxsID8gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfSA6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICB9KSA6IHRoaXMubm9kZSgpLmlubmVySFRNTDtcbiAgfTtcbiAgZDNfc2VsZWN0aW9uUHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gZDNfc2VsZWN0aW9uX2NyZWF0b3IobmFtZSk7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0KGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQobmFtZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9KTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc2VsZWN0aW9uX2NyZWF0b3IobmFtZSkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBkb2N1bWVudCA9IHRoaXMub3duZXJEb2N1bWVudCwgbmFtZXNwYWNlID0gdGhpcy5uYW1lc3BhY2VVUkk7XG4gICAgICByZXR1cm4gbmFtZXNwYWNlID09PSBkM19uc1hodG1sICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IGQzX25zWGh0bWwgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5TKCkge1xuICAgICAgcmV0dXJuIHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZS5zcGFjZSwgbmFtZS5sb2NhbCk7XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IChuYW1lID0gZDMubnMucXVhbGlmeShuYW1lKSkubG9jYWwgPyBjcmVhdGVOUyA6IGNyZWF0ZTtcbiAgfVxuICBkM19zZWxlY3Rpb25Qcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24obmFtZSwgYmVmb3JlKSB7XG4gICAgbmFtZSA9IGQzX3NlbGVjdGlvbl9jcmVhdG9yKG5hbWUpO1xuICAgIGJlZm9yZSA9IGQzX3NlbGVjdGlvbl9zZWxlY3RvcihiZWZvcmUpO1xuICAgIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShuYW1lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIGJlZm9yZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IG51bGwpO1xuICAgIH0pO1xuICB9O1xuICBkM19zZWxlY3Rpb25Qcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChkM19zZWxlY3Rpb25SZW1vdmUpO1xuICB9O1xuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25SZW1vdmUoKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG4gIH1cbiAgZDNfc2VsZWN0aW9uUHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgdmFyIGkgPSAtMSwgbiA9IHRoaXMubGVuZ3RoLCBncm91cCwgbm9kZTtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gbmV3IEFycmF5KG4gPSAoZ3JvdXAgPSB0aGlzWzBdKS5sZW5ndGgpO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICAgIHZhbHVlW2ldID0gbm9kZS5fX2RhdGFfXztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBiaW5kKGdyb3VwLCBncm91cERhdGEpIHtcbiAgICAgIHZhciBpLCBuID0gZ3JvdXAubGVuZ3RoLCBtID0gZ3JvdXBEYXRhLmxlbmd0aCwgbjAgPSBNYXRoLm1pbihuLCBtKSwgdXBkYXRlTm9kZXMgPSBuZXcgQXJyYXkobSksIGVudGVyTm9kZXMgPSBuZXcgQXJyYXkobSksIGV4aXROb2RlcyA9IG5ldyBBcnJheShuKSwgbm9kZSwgbm9kZURhdGE7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciBub2RlQnlLZXlWYWx1ZSA9IG5ldyBkM19NYXAoKSwga2V5VmFsdWVzID0gbmV3IEFycmF5KG4pLCBrZXlWYWx1ZTtcbiAgICAgICAgZm9yIChpID0gLTE7ICsraSA8IG47ICkge1xuICAgICAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgICAgIGlmIChub2RlQnlLZXlWYWx1ZS5oYXMoa2V5VmFsdWUgPSBrZXkuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpKSkpIHtcbiAgICAgICAgICAgICAgZXhpdE5vZGVzW2ldID0gbm9kZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vZGVCeUtleVZhbHVlLnNldChrZXlWYWx1ZSwgbm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlWYWx1ZXNbaV0gPSBrZXlWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gLTE7ICsraSA8IG07ICkge1xuICAgICAgICAgIGlmICghKG5vZGUgPSBub2RlQnlLZXlWYWx1ZS5nZXQoa2V5VmFsdWUgPSBrZXkuY2FsbChncm91cERhdGEsIG5vZGVEYXRhID0gZ3JvdXBEYXRhW2ldLCBpKSkpKSB7XG4gICAgICAgICAgICBlbnRlck5vZGVzW2ldID0gZDNfc2VsZWN0aW9uX2RhdGFOb2RlKG5vZGVEYXRhKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHVwZGF0ZU5vZGVzW2ldID0gbm9kZTtcbiAgICAgICAgICAgIG5vZGUuX19kYXRhX18gPSBub2RlRGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbm9kZUJ5S2V5VmFsdWUuc2V0KGtleVZhbHVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAtMTsgKytpIDwgbjsgKSB7XG4gICAgICAgICAgaWYgKGkgaW4ga2V5VmFsdWVzICYmIG5vZGVCeUtleVZhbHVlLmdldChrZXlWYWx1ZXNbaV0pICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBleGl0Tm9kZXNbaV0gPSBncm91cFtpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaSA9IC0xOyArK2kgPCBuMDsgKSB7XG4gICAgICAgICAgbm9kZSA9IGdyb3VwW2ldO1xuICAgICAgICAgIG5vZGVEYXRhID0gZ3JvdXBEYXRhW2ldO1xuICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBub2RlLl9fZGF0YV9fID0gbm9kZURhdGE7XG4gICAgICAgICAgICB1cGRhdGVOb2Rlc1tpXSA9IG5vZGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVudGVyTm9kZXNbaV0gPSBkM19zZWxlY3Rpb25fZGF0YU5vZGUobm9kZURhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKDtpIDwgbTsgKytpKSB7XG4gICAgICAgICAgZW50ZXJOb2Rlc1tpXSA9IGQzX3NlbGVjdGlvbl9kYXRhTm9kZShncm91cERhdGFbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoO2kgPCBuOyArK2kpIHtcbiAgICAgICAgICBleGl0Tm9kZXNbaV0gPSBncm91cFtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZW50ZXJOb2Rlcy51cGRhdGUgPSB1cGRhdGVOb2RlcztcbiAgICAgIGVudGVyTm9kZXMucGFyZW50Tm9kZSA9IHVwZGF0ZU5vZGVzLnBhcmVudE5vZGUgPSBleGl0Tm9kZXMucGFyZW50Tm9kZSA9IGdyb3VwLnBhcmVudE5vZGU7XG4gICAgICBlbnRlci5wdXNoKGVudGVyTm9kZXMpO1xuICAgICAgdXBkYXRlLnB1c2godXBkYXRlTm9kZXMpO1xuICAgICAgZXhpdC5wdXNoKGV4aXROb2Rlcyk7XG4gICAgfVxuICAgIHZhciBlbnRlciA9IGQzX3NlbGVjdGlvbl9lbnRlcihbXSksIHVwZGF0ZSA9IGQzX3NlbGVjdGlvbihbXSksIGV4aXQgPSBkM19zZWxlY3Rpb24oW10pO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgYmluZChncm91cCA9IHRoaXNbaV0sIHZhbHVlLmNhbGwoZ3JvdXAsIGdyb3VwLnBhcmVudE5vZGUuX19kYXRhX18sIGkpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgYmluZChncm91cCA9IHRoaXNbaV0sIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlLmVudGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZW50ZXI7XG4gICAgfTtcbiAgICB1cGRhdGUuZXhpdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4aXQ7XG4gICAgfTtcbiAgICByZXR1cm4gdXBkYXRlO1xuICB9O1xuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25fZGF0YU5vZGUoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBfX2RhdGFfXzogZGF0YVxuICAgIH07XG4gIH1cbiAgZDNfc2VsZWN0aW9uUHJvdG90eXBlLmRhdHVtID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMucHJvcGVydHkoXCJfX2RhdGFfX1wiLCB2YWx1ZSkgOiB0aGlzLnByb3BlcnR5KFwiX19kYXRhX19cIik7XG4gIH07XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXIpIHtcbiAgICB2YXIgc3ViZ3JvdXBzID0gW10sIHN1Ymdyb3VwLCBncm91cCwgbm9kZTtcbiAgICBpZiAodHlwZW9mIGZpbHRlciAhPT0gXCJmdW5jdGlvblwiKSBmaWx0ZXIgPSBkM19zZWxlY3Rpb25fZmlsdGVyKGZpbHRlcik7XG4gICAgZm9yICh2YXIgaiA9IDAsIG0gPSB0aGlzLmxlbmd0aDsgaiA8IG07IGorKykge1xuICAgICAgc3ViZ3JvdXBzLnB1c2goc3ViZ3JvdXAgPSBbXSk7XG4gICAgICBzdWJncm91cC5wYXJlbnROb2RlID0gKGdyb3VwID0gdGhpc1tqXSkucGFyZW50Tm9kZTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiBmaWx0ZXIuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBqKSkge1xuICAgICAgICAgIHN1Ymdyb3VwLnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGQzX3NlbGVjdGlvbihzdWJncm91cHMpO1xuICB9O1xuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25fZmlsdGVyKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGQzX3NlbGVjdE1hdGNoZXModGhpcywgc2VsZWN0b3IpO1xuICAgIH07XG4gIH1cbiAgZDNfc2VsZWN0aW9uUHJvdG90eXBlLm9yZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaiA9IC0xLCBtID0gdGhpcy5sZW5ndGg7ICsraiA8IG07ICkge1xuICAgICAgZm9yICh2YXIgZ3JvdXAgPSB0aGlzW2pdLCBpID0gZ3JvdXAubGVuZ3RoIC0gMSwgbmV4dCA9IGdyb3VwW2ldLCBub2RlOyAtLWkgPj0gMDsgKSB7XG4gICAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgICBpZiAobmV4dCAmJiBuZXh0ICE9PSBub2RlLm5leHRTaWJsaW5nKSBuZXh0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG5leHQpO1xuICAgICAgICAgIG5leHQgPSBub2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBkM19zZWxlY3Rpb25Qcm90b3R5cGUuc29ydCA9IGZ1bmN0aW9uKGNvbXBhcmF0b3IpIHtcbiAgICBjb21wYXJhdG9yID0gZDNfc2VsZWN0aW9uX3NvcnRDb21wYXJhdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgZm9yICh2YXIgaiA9IC0xLCBtID0gdGhpcy5sZW5ndGg7ICsraiA8IG07ICkgdGhpc1tqXS5zb3J0KGNvbXBhcmF0b3IpO1xuICAgIHJldHVybiB0aGlzLm9yZGVyKCk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3NlbGVjdGlvbl9zb3J0Q29tcGFyYXRvcihjb21wYXJhdG9yKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSBjb21wYXJhdG9yID0gZDNfYXNjZW5kaW5nO1xuICAgIHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICByZXR1cm4gYSAmJiBiID8gY29tcGFyYXRvcihhLl9fZGF0YV9fLCBiLl9fZGF0YV9fKSA6ICFhIC0gIWI7XG4gICAgfTtcbiAgfVxuICBkM19zZWxlY3Rpb25Qcm90b3R5cGUuZWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGQzX3NlbGVjdGlvbl9lYWNoKHRoaXMsIGZ1bmN0aW9uKG5vZGUsIGksIGopIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgaik7XG4gICAgfSk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3NlbGVjdGlvbl9lYWNoKGdyb3VwcywgY2FsbGJhY2spIHtcbiAgICBmb3IgKHZhciBqID0gMCwgbSA9IGdyb3Vwcy5sZW5ndGg7IGogPCBtOyBqKyspIHtcbiAgICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZTsgaSA8IG47IGkrKykge1xuICAgICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSBjYWxsYmFjayhub2RlLCBpLCBqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfVxuICBkM19zZWxlY3Rpb25Qcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgdmFyIGFyZ3MgPSBkM19hcnJheShhcmd1bWVudHMpO1xuICAgIGNhbGxiYWNrLmFwcGx5KGFyZ3NbMF0gPSB0aGlzLCBhcmdzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZDNfc2VsZWN0aW9uUHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICF0aGlzLm5vZGUoKTtcbiAgfTtcbiAgZDNfc2VsZWN0aW9uUHJvdG90eXBlLm5vZGUgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBqID0gMCwgbSA9IHRoaXMubGVuZ3RoOyBqIDwgbTsgaisrKSB7XG4gICAgICBmb3IgKHZhciBncm91cCA9IHRoaXNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHZhciBub2RlID0gZ3JvdXBbaV07XG4gICAgICAgIGlmIChub2RlKSByZXR1cm4gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG4gPSAwO1xuICAgIGQzX3NlbGVjdGlvbl9lYWNoKHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgICAgKytuO1xuICAgIH0pO1xuICAgIHJldHVybiBuO1xuICB9O1xuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25fZW50ZXIoc2VsZWN0aW9uKSB7XG4gICAgZDNfc3ViY2xhc3Moc2VsZWN0aW9uLCBkM19zZWxlY3Rpb25fZW50ZXJQcm90b3R5cGUpO1xuICAgIHJldHVybiBzZWxlY3Rpb247XG4gIH1cbiAgdmFyIGQzX3NlbGVjdGlvbl9lbnRlclByb3RvdHlwZSA9IFtdO1xuICBkMy5zZWxlY3Rpb24uZW50ZXIgPSBkM19zZWxlY3Rpb25fZW50ZXI7XG4gIGQzLnNlbGVjdGlvbi5lbnRlci5wcm90b3R5cGUgPSBkM19zZWxlY3Rpb25fZW50ZXJQcm90b3R5cGU7XG4gIGQzX3NlbGVjdGlvbl9lbnRlclByb3RvdHlwZS5hcHBlbmQgPSBkM19zZWxlY3Rpb25Qcm90b3R5cGUuYXBwZW5kO1xuICBkM19zZWxlY3Rpb25fZW50ZXJQcm90b3R5cGUuZW1wdHkgPSBkM19zZWxlY3Rpb25Qcm90b3R5cGUuZW1wdHk7XG4gIGQzX3NlbGVjdGlvbl9lbnRlclByb3RvdHlwZS5ub2RlID0gZDNfc2VsZWN0aW9uUHJvdG90eXBlLm5vZGU7XG4gIGQzX3NlbGVjdGlvbl9lbnRlclByb3RvdHlwZS5jYWxsID0gZDNfc2VsZWN0aW9uUHJvdG90eXBlLmNhbGw7XG4gIGQzX3NlbGVjdGlvbl9lbnRlclByb3RvdHlwZS5zaXplID0gZDNfc2VsZWN0aW9uUHJvdG90eXBlLnNpemU7XG4gIGQzX3NlbGVjdGlvbl9lbnRlclByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIHZhciBzdWJncm91cHMgPSBbXSwgc3ViZ3JvdXAsIHN1Ym5vZGUsIHVwZ3JvdXAsIGdyb3VwLCBub2RlO1xuICAgIGZvciAodmFyIGogPSAtMSwgbSA9IHRoaXMubGVuZ3RoOyArK2ogPCBtOyApIHtcbiAgICAgIHVwZ3JvdXAgPSAoZ3JvdXAgPSB0aGlzW2pdKS51cGRhdGU7XG4gICAgICBzdWJncm91cHMucHVzaChzdWJncm91cCA9IFtdKTtcbiAgICAgIHN1Ymdyb3VwLnBhcmVudE5vZGUgPSBncm91cC5wYXJlbnROb2RlO1xuICAgICAgZm9yICh2YXIgaSA9IC0xLCBuID0gZ3JvdXAubGVuZ3RoOyArK2kgPCBuOyApIHtcbiAgICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICAgIHN1Ymdyb3VwLnB1c2godXBncm91cFtpXSA9IHN1Ym5vZGUgPSBzZWxlY3Rvci5jYWxsKGdyb3VwLnBhcmVudE5vZGUsIG5vZGUuX19kYXRhX18sIGksIGopKTtcbiAgICAgICAgICBzdWJub2RlLl9fZGF0YV9fID0gbm9kZS5fX2RhdGFfXztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdWJncm91cC5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkM19zZWxlY3Rpb24oc3ViZ3JvdXBzKTtcbiAgfTtcbiAgZDNfc2VsZWN0aW9uX2VudGVyUHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uKG5hbWUsIGJlZm9yZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgYmVmb3JlID0gZDNfc2VsZWN0aW9uX2VudGVySW5zZXJ0QmVmb3JlKHRoaXMpO1xuICAgIHJldHVybiBkM19zZWxlY3Rpb25Qcm90b3R5cGUuaW5zZXJ0LmNhbGwodGhpcywgbmFtZSwgYmVmb3JlKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc2VsZWN0aW9uX2VudGVySW5zZXJ0QmVmb3JlKGVudGVyKSB7XG4gICAgdmFyIGkwLCBqMDtcbiAgICByZXR1cm4gZnVuY3Rpb24oZCwgaSwgaikge1xuICAgICAgdmFyIGdyb3VwID0gZW50ZXJbal0udXBkYXRlLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlO1xuICAgICAgaWYgKGogIT0gajApIGowID0gaiwgaTAgPSAwO1xuICAgICAgaWYgKGkgPj0gaTApIGkwID0gaSArIDE7XG4gICAgICB3aGlsZSAoIShub2RlID0gZ3JvdXBbaTBdKSAmJiArK2kwIDwgbikgO1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgfVxuICBkMy5zZWxlY3QgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIGdyb3VwO1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgZ3JvdXAgPSBbIGQzX3NlbGVjdChub2RlLCBkM19kb2N1bWVudCkgXTtcbiAgICAgIGdyb3VwLnBhcmVudE5vZGUgPSBkM19kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdyb3VwID0gWyBub2RlIF07XG4gICAgICBncm91cC5wYXJlbnROb2RlID0gZDNfZG9jdW1lbnRFbGVtZW50KG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gZDNfc2VsZWN0aW9uKFsgZ3JvdXAgXSk7XG4gIH07XG4gIGQzLnNlbGVjdEFsbCA9IGZ1bmN0aW9uKG5vZGVzKSB7XG4gICAgdmFyIGdyb3VwO1xuICAgIGlmICh0eXBlb2Ygbm9kZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGdyb3VwID0gZDNfYXJyYXkoZDNfc2VsZWN0QWxsKG5vZGVzLCBkM19kb2N1bWVudCkpO1xuICAgICAgZ3JvdXAucGFyZW50Tm9kZSA9IGQzX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgZ3JvdXAgPSBkM19hcnJheShub2Rlcyk7XG4gICAgICBncm91cC5wYXJlbnROb2RlID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGQzX3NlbGVjdGlvbihbIGdyb3VwIF0pO1xuICB9O1xuICBkM19zZWxlY3Rpb25Qcm90b3R5cGUub24gPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICAgIHZhciBuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAobiA8IDMpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAobiA8IDIpIGxpc3RlbmVyID0gZmFsc2U7XG4gICAgICAgIGZvciAoY2FwdHVyZSBpbiB0eXBlKSB0aGlzLmVhY2goZDNfc2VsZWN0aW9uX29uKGNhcHR1cmUsIHR5cGVbY2FwdHVyZV0sIGxpc3RlbmVyKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgaWYgKG4gPCAyKSByZXR1cm4gKG4gPSB0aGlzLm5vZGUoKVtcIl9fb25cIiArIHR5cGVdKSAmJiBuLl87XG4gICAgICBjYXB0dXJlID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVhY2goZDNfc2VsZWN0aW9uX29uKHR5cGUsIGxpc3RlbmVyLCBjYXB0dXJlKSk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3NlbGVjdGlvbl9vbih0eXBlLCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICAgIHZhciBuYW1lID0gXCJfX29uXCIgKyB0eXBlLCBpID0gdHlwZS5pbmRleE9mKFwiLlwiKSwgd3JhcCA9IGQzX3NlbGVjdGlvbl9vbkxpc3RlbmVyO1xuICAgIGlmIChpID4gMCkgdHlwZSA9IHR5cGUuc2xpY2UoMCwgaSk7XG4gICAgdmFyIGZpbHRlciA9IGQzX3NlbGVjdGlvbl9vbkZpbHRlcnMuZ2V0KHR5cGUpO1xuICAgIGlmIChmaWx0ZXIpIHR5cGUgPSBmaWx0ZXIsIHdyYXAgPSBkM19zZWxlY3Rpb25fb25GaWx0ZXI7XG4gICAgZnVuY3Rpb24gb25SZW1vdmUoKSB7XG4gICAgICB2YXIgbCA9IHRoaXNbbmFtZV07XG4gICAgICBpZiAobCkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbCwgbC4kKTtcbiAgICAgICAgZGVsZXRlIHRoaXNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQWRkKCkge1xuICAgICAgdmFyIGwgPSB3cmFwKGxpc3RlbmVyLCBkM19hcnJheShhcmd1bWVudHMpKTtcbiAgICAgIG9uUmVtb3ZlLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgdGhpc1tuYW1lXSA9IGwsIGwuJCA9IGNhcHR1cmUpO1xuICAgICAgbC5fID0gbGlzdGVuZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbCgpIHtcbiAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCJeX19vbihbXi5dKylcIiArIGQzLnJlcXVvdGUodHlwZSkgKyBcIiRcIiksIG1hdGNoO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgIGlmIChtYXRjaCA9IG5hbWUubWF0Y2gocmUpKSB7XG4gICAgICAgICAgdmFyIGwgPSB0aGlzW25hbWVdO1xuICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihtYXRjaFsxXSwgbCwgbC4kKTtcbiAgICAgICAgICBkZWxldGUgdGhpc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaSA/IGxpc3RlbmVyID8gb25BZGQgOiBvblJlbW92ZSA6IGxpc3RlbmVyID8gZDNfbm9vcCA6IHJlbW92ZUFsbDtcbiAgfVxuICB2YXIgZDNfc2VsZWN0aW9uX29uRmlsdGVycyA9IGQzLm1hcCh7XG4gICAgbW91c2VlbnRlcjogXCJtb3VzZW92ZXJcIixcbiAgICBtb3VzZWxlYXZlOiBcIm1vdXNlb3V0XCJcbiAgfSk7XG4gIGlmIChkM19kb2N1bWVudCkge1xuICAgIGQzX3NlbGVjdGlvbl9vbkZpbHRlcnMuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgICBpZiAoXCJvblwiICsgayBpbiBkM19kb2N1bWVudCkgZDNfc2VsZWN0aW9uX29uRmlsdGVycy5yZW1vdmUoayk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc2VsZWN0aW9uX29uTGlzdGVuZXIobGlzdGVuZXIsIGFyZ3VtZW50eikge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgbyA9IGQzLmV2ZW50O1xuICAgICAgZDMuZXZlbnQgPSBlO1xuICAgICAgYXJndW1lbnR6WzBdID0gdGhpcy5fX2RhdGFfXztcbiAgICAgIHRyeSB7XG4gICAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50eik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBkMy5ldmVudCA9IG87XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkM19zZWxlY3Rpb25fb25GaWx0ZXIobGlzdGVuZXIsIGFyZ3VtZW50eikge1xuICAgIHZhciBsID0gZDNfc2VsZWN0aW9uX29uTGlzdGVuZXIobGlzdGVuZXIsIGFyZ3VtZW50eik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSB0aGlzLCByZWxhdGVkID0gZS5yZWxhdGVkVGFyZ2V0O1xuICAgICAgaWYgKCFyZWxhdGVkIHx8IHJlbGF0ZWQgIT09IHRhcmdldCAmJiAhKHJlbGF0ZWQuY29tcGFyZURvY3VtZW50UG9zaXRpb24odGFyZ2V0KSAmIDgpKSB7XG4gICAgICAgIGwuY2FsbCh0YXJnZXQsIGUpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgdmFyIGQzX2V2ZW50X2RyYWdTZWxlY3QsIGQzX2V2ZW50X2RyYWdJZCA9IDA7XG4gIGZ1bmN0aW9uIGQzX2V2ZW50X2RyYWdTdXBwcmVzcyhub2RlKSB7XG4gICAgdmFyIG5hbWUgPSBcIi5kcmFnc3VwcHJlc3MtXCIgKyArK2QzX2V2ZW50X2RyYWdJZCwgY2xpY2sgPSBcImNsaWNrXCIgKyBuYW1lLCB3ID0gZDMuc2VsZWN0KGQzX3dpbmRvdyhub2RlKSkub24oXCJ0b3VjaG1vdmVcIiArIG5hbWUsIGQzX2V2ZW50UHJldmVudERlZmF1bHQpLm9uKFwiZHJhZ3N0YXJ0XCIgKyBuYW1lLCBkM19ldmVudFByZXZlbnREZWZhdWx0KS5vbihcInNlbGVjdHN0YXJ0XCIgKyBuYW1lLCBkM19ldmVudFByZXZlbnREZWZhdWx0KTtcbiAgICBpZiAoZDNfZXZlbnRfZHJhZ1NlbGVjdCA9PSBudWxsKSB7XG4gICAgICBkM19ldmVudF9kcmFnU2VsZWN0ID0gXCJvbnNlbGVjdHN0YXJ0XCIgaW4gbm9kZSA/IGZhbHNlIDogZDNfdmVuZG9yU3ltYm9sKG5vZGUuc3R5bGUsIFwidXNlclNlbGVjdFwiKTtcbiAgICB9XG4gICAgaWYgKGQzX2V2ZW50X2RyYWdTZWxlY3QpIHtcbiAgICAgIHZhciBzdHlsZSA9IGQzX2RvY3VtZW50RWxlbWVudChub2RlKS5zdHlsZSwgc2VsZWN0ID0gc3R5bGVbZDNfZXZlbnRfZHJhZ1NlbGVjdF07XG4gICAgICBzdHlsZVtkM19ldmVudF9kcmFnU2VsZWN0XSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24oc3VwcHJlc3NDbGljaykge1xuICAgICAgdy5vbihuYW1lLCBudWxsKTtcbiAgICAgIGlmIChkM19ldmVudF9kcmFnU2VsZWN0KSBzdHlsZVtkM19ldmVudF9kcmFnU2VsZWN0XSA9IHNlbGVjdDtcbiAgICAgIGlmIChzdXBwcmVzc0NsaWNrKSB7XG4gICAgICAgIHZhciBvZmYgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB3Lm9uKGNsaWNrLCBudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgdy5vbihjbGljaywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDNfZXZlbnRQcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIG9mZigpO1xuICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dChvZmYsIDApO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZDMubW91c2UgPSBmdW5jdGlvbihjb250YWluZXIpIHtcbiAgICByZXR1cm4gZDNfbW91c2VQb2ludChjb250YWluZXIsIGQzX2V2ZW50U291cmNlKCkpO1xuICB9O1xuICB2YXIgZDNfbW91c2VfYnVnNDQwODMgPSB0aGlzLm5hdmlnYXRvciAmJiAvV2ViS2l0Ly50ZXN0KHRoaXMubmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAtMSA6IDA7XG4gIGZ1bmN0aW9uIGQzX21vdXNlUG9pbnQoY29udGFpbmVyLCBlKSB7XG4gICAgaWYgKGUuY2hhbmdlZFRvdWNoZXMpIGUgPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgIHZhciBzdmcgPSBjb250YWluZXIub3duZXJTVkdFbGVtZW50IHx8IGNvbnRhaW5lcjtcbiAgICBpZiAoc3ZnLmNyZWF0ZVNWR1BvaW50KSB7XG4gICAgICB2YXIgcG9pbnQgPSBzdmcuY3JlYXRlU1ZHUG9pbnQoKTtcbiAgICAgIGlmIChkM19tb3VzZV9idWc0NDA4MyA8IDApIHtcbiAgICAgICAgdmFyIHdpbmRvdyA9IGQzX3dpbmRvdyhjb250YWluZXIpO1xuICAgICAgICBpZiAod2luZG93LnNjcm9sbFggfHwgd2luZG93LnNjcm9sbFkpIHtcbiAgICAgICAgICBzdmcgPSBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcInN2Z1wiKS5zdHlsZSh7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiXG4gICAgICAgICAgfSwgXCJpbXBvcnRhbnRcIik7XG4gICAgICAgICAgdmFyIGN0bSA9IHN2Z1swXVswXS5nZXRTY3JlZW5DVE0oKTtcbiAgICAgICAgICBkM19tb3VzZV9idWc0NDA4MyA9ICEoY3RtLmYgfHwgY3RtLmUpO1xuICAgICAgICAgIHN2Zy5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGQzX21vdXNlX2J1ZzQ0MDgzKSBwb2ludC54ID0gZS5wYWdlWCwgcG9pbnQueSA9IGUucGFnZVk7IGVsc2UgcG9pbnQueCA9IGUuY2xpZW50WCwgXG4gICAgICBwb2ludC55ID0gZS5jbGllbnRZO1xuICAgICAgcG9pbnQgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0oY29udGFpbmVyLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKSk7XG4gICAgICByZXR1cm4gWyBwb2ludC54LCBwb2ludC55IF07XG4gICAgfVxuICAgIHZhciByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiBbIGUuY2xpZW50WCAtIHJlY3QubGVmdCAtIGNvbnRhaW5lci5jbGllbnRMZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcCAtIGNvbnRhaW5lci5jbGllbnRUb3AgXTtcbiAgfVxuICBkMy50b3VjaCA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgdG91Y2hlcywgaWRlbnRpZmllcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykgaWRlbnRpZmllciA9IHRvdWNoZXMsIHRvdWNoZXMgPSBkM19ldmVudFNvdXJjZSgpLmNoYW5nZWRUb3VjaGVzO1xuICAgIGlmICh0b3VjaGVzKSBmb3IgKHZhciBpID0gMCwgbiA9IHRvdWNoZXMubGVuZ3RoLCB0b3VjaDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKCh0b3VjaCA9IHRvdWNoZXNbaV0pLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIGQzX21vdXNlUG9pbnQoY29udGFpbmVyLCB0b3VjaCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBkMy5iZWhhdmlvci5kcmFnID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV2ZW50ID0gZDNfZXZlbnREaXNwYXRjaChkcmFnLCBcImRyYWdcIiwgXCJkcmFnc3RhcnRcIiwgXCJkcmFnZW5kXCIpLCBvcmlnaW4gPSBudWxsLCBtb3VzZWRvd24gPSBkcmFnc3RhcnQoZDNfbm9vcCwgZDMubW91c2UsIGQzX3dpbmRvdywgXCJtb3VzZW1vdmVcIiwgXCJtb3VzZXVwXCIpLCB0b3VjaHN0YXJ0ID0gZHJhZ3N0YXJ0KGQzX2JlaGF2aW9yX2RyYWdUb3VjaElkLCBkMy50b3VjaCwgZDNfaWRlbnRpdHksIFwidG91Y2htb3ZlXCIsIFwidG91Y2hlbmRcIik7XG4gICAgZnVuY3Rpb24gZHJhZygpIHtcbiAgICAgIHRoaXMub24oXCJtb3VzZWRvd24uZHJhZ1wiLCBtb3VzZWRvd24pLm9uKFwidG91Y2hzdGFydC5kcmFnXCIsIHRvdWNoc3RhcnQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkcmFnc3RhcnQoaWQsIHBvc2l0aW9uLCBzdWJqZWN0LCBtb3ZlLCBlbmQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzLCB0YXJnZXQgPSBkMy5ldmVudC50YXJnZXQuY29ycmVzcG9uZGluZ0VsZW1lbnQgfHwgZDMuZXZlbnQudGFyZ2V0LCBwYXJlbnQgPSB0aGF0LnBhcmVudE5vZGUsIGRpc3BhdGNoID0gZXZlbnQub2YodGhhdCwgYXJndW1lbnRzKSwgZHJhZ2dlZCA9IDAsIGRyYWdJZCA9IGlkKCksIGRyYWdOYW1lID0gXCIuZHJhZ1wiICsgKGRyYWdJZCA9PSBudWxsID8gXCJcIiA6IFwiLVwiICsgZHJhZ0lkKSwgZHJhZ09mZnNldCwgZHJhZ1N1YmplY3QgPSBkMy5zZWxlY3Qoc3ViamVjdCh0YXJnZXQpKS5vbihtb3ZlICsgZHJhZ05hbWUsIG1vdmVkKS5vbihlbmQgKyBkcmFnTmFtZSwgZW5kZWQpLCBkcmFnUmVzdG9yZSA9IGQzX2V2ZW50X2RyYWdTdXBwcmVzcyh0YXJnZXQpLCBwb3NpdGlvbjAgPSBwb3NpdGlvbihwYXJlbnQsIGRyYWdJZCk7XG4gICAgICAgIGlmIChvcmlnaW4pIHtcbiAgICAgICAgICBkcmFnT2Zmc2V0ID0gb3JpZ2luLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgZHJhZ09mZnNldCA9IFsgZHJhZ09mZnNldC54IC0gcG9zaXRpb24wWzBdLCBkcmFnT2Zmc2V0LnkgLSBwb3NpdGlvbjBbMV0gXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnT2Zmc2V0ID0gWyAwLCAwIF07XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFwiZHJhZ3N0YXJ0XCJcbiAgICAgICAgfSk7XG4gICAgICAgIGZ1bmN0aW9uIG1vdmVkKCkge1xuICAgICAgICAgIHZhciBwb3NpdGlvbjEgPSBwb3NpdGlvbihwYXJlbnQsIGRyYWdJZCksIGR4LCBkeTtcbiAgICAgICAgICBpZiAoIXBvc2l0aW9uMSkgcmV0dXJuO1xuICAgICAgICAgIGR4ID0gcG9zaXRpb24xWzBdIC0gcG9zaXRpb24wWzBdO1xuICAgICAgICAgIGR5ID0gcG9zaXRpb24xWzFdIC0gcG9zaXRpb24wWzFdO1xuICAgICAgICAgIGRyYWdnZWQgfD0gZHggfCBkeTtcbiAgICAgICAgICBwb3NpdGlvbjAgPSBwb3NpdGlvbjE7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJkcmFnXCIsXG4gICAgICAgICAgICB4OiBwb3NpdGlvbjFbMF0gKyBkcmFnT2Zmc2V0WzBdLFxuICAgICAgICAgICAgeTogcG9zaXRpb24xWzFdICsgZHJhZ09mZnNldFsxXSxcbiAgICAgICAgICAgIGR4OiBkeCxcbiAgICAgICAgICAgIGR5OiBkeVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGVuZGVkKCkge1xuICAgICAgICAgIGlmICghcG9zaXRpb24ocGFyZW50LCBkcmFnSWQpKSByZXR1cm47XG4gICAgICAgICAgZHJhZ1N1YmplY3Qub24obW92ZSArIGRyYWdOYW1lLCBudWxsKS5vbihlbmQgKyBkcmFnTmFtZSwgbnVsbCk7XG4gICAgICAgICAgZHJhZ1Jlc3RvcmUoZHJhZ2dlZCk7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJkcmFnZW5kXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgZHJhZy5vcmlnaW4gPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBvcmlnaW47XG4gICAgICBvcmlnaW4gPSB4O1xuICAgICAgcmV0dXJuIGRyYWc7XG4gICAgfTtcbiAgICByZXR1cm4gZDMucmViaW5kKGRyYWcsIGV2ZW50LCBcIm9uXCIpO1xuICB9O1xuICBmdW5jdGlvbiBkM19iZWhhdmlvcl9kcmFnVG91Y2hJZCgpIHtcbiAgICByZXR1cm4gZDMuZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllcjtcbiAgfVxuICBkMy50b3VjaGVzID0gZnVuY3Rpb24oY29udGFpbmVyLCB0b3VjaGVzKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB0b3VjaGVzID0gZDNfZXZlbnRTb3VyY2UoKS50b3VjaGVzO1xuICAgIHJldHVybiB0b3VjaGVzID8gZDNfYXJyYXkodG91Y2hlcykubWFwKGZ1bmN0aW9uKHRvdWNoKSB7XG4gICAgICB2YXIgcG9pbnQgPSBkM19tb3VzZVBvaW50KGNvbnRhaW5lciwgdG91Y2gpO1xuICAgICAgcG9pbnQuaWRlbnRpZmllciA9IHRvdWNoLmlkZW50aWZpZXI7XG4gICAgICByZXR1cm4gcG9pbnQ7XG4gICAgfSkgOiBbXTtcbiAgfTtcbiAgdmFyIM61ID0gMWUtNiwgzrUyID0gzrUgKiDOtSwgz4AgPSBNYXRoLlBJLCDPhCA9IDIgKiDPgCwgz4TOtSA9IM+EIC0gzrUsIGhhbGbPgCA9IM+AIC8gMiwgZDNfcmFkaWFucyA9IM+AIC8gMTgwLCBkM19kZWdyZWVzID0gMTgwIC8gz4A7XG4gIGZ1bmN0aW9uIGQzX3Nnbih4KSB7XG4gICAgcmV0dXJuIHggPiAwID8gMSA6IHggPCAwID8gLTEgOiAwO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2Nyb3NzMmQoYSwgYiwgYykge1xuICAgIHJldHVybiAoYlswXSAtIGFbMF0pICogKGNbMV0gLSBhWzFdKSAtIChiWzFdIC0gYVsxXSkgKiAoY1swXSAtIGFbMF0pO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2Fjb3MoeCkge1xuICAgIHJldHVybiB4ID4gMSA/IDAgOiB4IDwgLTEgPyDPgCA6IE1hdGguYWNvcyh4KTtcbiAgfVxuICBmdW5jdGlvbiBkM19hc2luKHgpIHtcbiAgICByZXR1cm4geCA+IDEgPyBoYWxmz4AgOiB4IDwgLTEgPyAtaGFsZs+AIDogTWF0aC5hc2luKHgpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3NpbmgoeCkge1xuICAgIHJldHVybiAoKHggPSBNYXRoLmV4cCh4KSkgLSAxIC8geCkgLyAyO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2Nvc2goeCkge1xuICAgIHJldHVybiAoKHggPSBNYXRoLmV4cCh4KSkgKyAxIC8geCkgLyAyO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RhbmgoeCkge1xuICAgIHJldHVybiAoKHggPSBNYXRoLmV4cCgyICogeCkpIC0gMSkgLyAoeCArIDEpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2hhdmVyc2luKHgpIHtcbiAgICByZXR1cm4gKHggPSBNYXRoLnNpbih4IC8gMikpICogeDtcbiAgfVxuICB2YXIgz4EgPSBNYXRoLlNRUlQyLCDPgTIgPSAyLCDPgTQgPSA0O1xuICBkMy5pbnRlcnBvbGF0ZVpvb20gPSBmdW5jdGlvbihwMCwgcDEpIHtcbiAgICB2YXIgdXgwID0gcDBbMF0sIHV5MCA9IHAwWzFdLCB3MCA9IHAwWzJdLCB1eDEgPSBwMVswXSwgdXkxID0gcDFbMV0sIHcxID0gcDFbMl0sIGR4ID0gdXgxIC0gdXgwLCBkeSA9IHV5MSAtIHV5MCwgZDIgPSBkeCAqIGR4ICsgZHkgKiBkeSwgaSwgUztcbiAgICBpZiAoZDIgPCDOtTIpIHtcbiAgICAgIFMgPSBNYXRoLmxvZyh3MSAvIHcwKSAvIM+BO1xuICAgICAgaSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIFsgdXgwICsgdCAqIGR4LCB1eTAgKyB0ICogZHksIHcwICogTWF0aC5leHAoz4EgKiB0ICogUykgXTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBkMSA9IE1hdGguc3FydChkMiksIGIwID0gKHcxICogdzEgLSB3MCAqIHcwICsgz4E0ICogZDIpIC8gKDIgKiB3MCAqIM+BMiAqIGQxKSwgYjEgPSAodzEgKiB3MSAtIHcwICogdzAgLSDPgTQgKiBkMikgLyAoMiAqIHcxICogz4EyICogZDEpLCByMCA9IE1hdGgubG9nKE1hdGguc3FydChiMCAqIGIwICsgMSkgLSBiMCksIHIxID0gTWF0aC5sb2coTWF0aC5zcXJ0KGIxICogYjEgKyAxKSAtIGIxKTtcbiAgICAgIFMgPSAocjEgLSByMCkgLyDPgTtcbiAgICAgIGkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBzID0gdCAqIFMsIGNvc2hyMCA9IGQzX2Nvc2gocjApLCB1ID0gdzAgLyAoz4EyICogZDEpICogKGNvc2hyMCAqIGQzX3Rhbmgoz4EgKiBzICsgcjApIC0gZDNfc2luaChyMCkpO1xuICAgICAgICByZXR1cm4gWyB1eDAgKyB1ICogZHgsIHV5MCArIHUgKiBkeSwgdzAgKiBjb3NocjAgLyBkM19jb3NoKM+BICogcyArIHIwKSBdO1xuICAgICAgfTtcbiAgICB9XG4gICAgaS5kdXJhdGlvbiA9IFMgKiAxZTM7XG4gICAgcmV0dXJuIGk7XG4gIH07XG4gIGQzLmJlaGF2aW9yLnpvb20gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmlldyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgazogMVxuICAgIH0sIHRyYW5zbGF0ZTAsIGNlbnRlcjAsIGNlbnRlciwgc2l6ZSA9IFsgOTYwLCA1MDAgXSwgc2NhbGVFeHRlbnQgPSBkM19iZWhhdmlvcl96b29tSW5maW5pdHksIGR1cmF0aW9uID0gMjUwLCB6b29taW5nID0gMCwgbW91c2Vkb3duID0gXCJtb3VzZWRvd24uem9vbVwiLCBtb3VzZW1vdmUgPSBcIm1vdXNlbW92ZS56b29tXCIsIG1vdXNldXAgPSBcIm1vdXNldXAuem9vbVwiLCBtb3VzZXdoZWVsVGltZXIsIHRvdWNoc3RhcnQgPSBcInRvdWNoc3RhcnQuem9vbVwiLCB0b3VjaHRpbWUsIGV2ZW50ID0gZDNfZXZlbnREaXNwYXRjaCh6b29tLCBcInpvb21zdGFydFwiLCBcInpvb21cIiwgXCJ6b29tZW5kXCIpLCB4MCwgeDEsIHkwLCB5MTtcbiAgICBpZiAoIWQzX2JlaGF2aW9yX3pvb21XaGVlbCkge1xuICAgICAgZDNfYmVoYXZpb3Jfem9vbVdoZWVsID0gXCJvbndoZWVsXCIgaW4gZDNfZG9jdW1lbnQgPyAoZDNfYmVoYXZpb3Jfem9vbURlbHRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAtZDMuZXZlbnQuZGVsdGFZICogKGQzLmV2ZW50LmRlbHRhTW9kZSA/IDEyMCA6IDEpO1xuICAgICAgfSwgXCJ3aGVlbFwiKSA6IFwib25tb3VzZXdoZWVsXCIgaW4gZDNfZG9jdW1lbnQgPyAoZDNfYmVoYXZpb3Jfem9vbURlbHRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBkMy5ldmVudC53aGVlbERlbHRhO1xuICAgICAgfSwgXCJtb3VzZXdoZWVsXCIpIDogKGQzX2JlaGF2aW9yX3pvb21EZWx0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gLWQzLmV2ZW50LmRldGFpbDtcbiAgICAgIH0sIFwiTW96TW91c2VQaXhlbFNjcm9sbFwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gem9vbShnKSB7XG4gICAgICBnLm9uKG1vdXNlZG93biwgbW91c2Vkb3duZWQpLm9uKGQzX2JlaGF2aW9yX3pvb21XaGVlbCArIFwiLnpvb21cIiwgbW91c2V3aGVlbGVkKS5vbihcImRibGNsaWNrLnpvb21cIiwgZGJsY2xpY2tlZCkub24odG91Y2hzdGFydCwgdG91Y2hzdGFydGVkKTtcbiAgICB9XG4gICAgem9vbS5ldmVudCA9IGZ1bmN0aW9uKGcpIHtcbiAgICAgIGcuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRpc3BhdGNoID0gZXZlbnQub2YodGhpcywgYXJndW1lbnRzKSwgdmlldzEgPSB2aWV3O1xuICAgICAgICBpZiAoZDNfdHJhbnNpdGlvbkluaGVyaXRJZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKCkuZWFjaChcInN0YXJ0Lnpvb21cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2aWV3ID0gdGhpcy5fX2NoYXJ0X18gfHwge1xuICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICBrOiAxXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgem9vbXN0YXJ0ZWQoZGlzcGF0Y2gpO1xuICAgICAgICAgIH0pLnR3ZWVuKFwiem9vbTp6b29tXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGR4ID0gc2l6ZVswXSwgZHkgPSBzaXplWzFdLCBjeCA9IGNlbnRlcjAgPyBjZW50ZXIwWzBdIDogZHggLyAyLCBjeSA9IGNlbnRlcjAgPyBjZW50ZXIwWzFdIDogZHkgLyAyLCBpID0gZDMuaW50ZXJwb2xhdGVab29tKFsgKGN4IC0gdmlldy54KSAvIHZpZXcuaywgKGN5IC0gdmlldy55KSAvIHZpZXcuaywgZHggLyB2aWV3LmsgXSwgWyAoY3ggLSB2aWV3MS54KSAvIHZpZXcxLmssIChjeSAtIHZpZXcxLnkpIC8gdmlldzEuaywgZHggLyB2aWV3MS5rIF0pO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgdmFyIGwgPSBpKHQpLCBrID0gZHggLyBsWzJdO1xuICAgICAgICAgICAgICB0aGlzLl9fY2hhcnRfXyA9IHZpZXcgPSB7XG4gICAgICAgICAgICAgICAgeDogY3ggLSBsWzBdICogayxcbiAgICAgICAgICAgICAgICB5OiBjeSAtIGxbMV0gKiBrLFxuICAgICAgICAgICAgICAgIGs6IGtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgem9vbWVkKGRpc3BhdGNoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSkuZWFjaChcImludGVycnVwdC56b29tXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgem9vbWVuZGVkKGRpc3BhdGNoKTtcbiAgICAgICAgICB9KS5lYWNoKFwiZW5kLnpvb21cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB6b29tZW5kZWQoZGlzcGF0Y2gpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX19jaGFydF9fID0gdmlldztcbiAgICAgICAgICB6b29tc3RhcnRlZChkaXNwYXRjaCk7XG4gICAgICAgICAgem9vbWVkKGRpc3BhdGNoKTtcbiAgICAgICAgICB6b29tZW5kZWQoZGlzcGF0Y2gpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHpvb20udHJhbnNsYXRlID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gWyB2aWV3LngsIHZpZXcueSBdO1xuICAgICAgdmlldyA9IHtcbiAgICAgICAgeDogK19bMF0sXG4gICAgICAgIHk6ICtfWzFdLFxuICAgICAgICBrOiB2aWV3LmtcbiAgICAgIH07XG4gICAgICByZXNjYWxlKCk7XG4gICAgICByZXR1cm4gem9vbTtcbiAgICB9O1xuICAgIHpvb20uc2NhbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB2aWV3Lms7XG4gICAgICB2aWV3ID0ge1xuICAgICAgICB4OiB2aWV3LngsXG4gICAgICAgIHk6IHZpZXcueSxcbiAgICAgICAgazogbnVsbFxuICAgICAgfTtcbiAgICAgIHNjYWxlVG8oK18pO1xuICAgICAgcmVzY2FsZSgpO1xuICAgICAgcmV0dXJuIHpvb207XG4gICAgfTtcbiAgICB6b29tLnNjYWxlRXh0ZW50ID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc2NhbGVFeHRlbnQ7XG4gICAgICBzY2FsZUV4dGVudCA9IF8gPT0gbnVsbCA/IGQzX2JlaGF2aW9yX3pvb21JbmZpbml0eSA6IFsgK19bMF0sICtfWzFdIF07XG4gICAgICByZXR1cm4gem9vbTtcbiAgICB9O1xuICAgIHpvb20uY2VudGVyID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gY2VudGVyO1xuICAgICAgY2VudGVyID0gXyAmJiBbICtfWzBdLCArX1sxXSBdO1xuICAgICAgcmV0dXJuIHpvb207XG4gICAgfTtcbiAgICB6b29tLnNpemUgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBzaXplO1xuICAgICAgc2l6ZSA9IF8gJiYgWyArX1swXSwgK19bMV0gXTtcbiAgICAgIHJldHVybiB6b29tO1xuICAgIH07XG4gICAgem9vbS5kdXJhdGlvbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGR1cmF0aW9uO1xuICAgICAgZHVyYXRpb24gPSArXztcbiAgICAgIHJldHVybiB6b29tO1xuICAgIH07XG4gICAgem9vbS54ID0gZnVuY3Rpb24oeikge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4geDE7XG4gICAgICB4MSA9IHo7XG4gICAgICB4MCA9IHouY29weSgpO1xuICAgICAgdmlldyA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgazogMVxuICAgICAgfTtcbiAgICAgIHJldHVybiB6b29tO1xuICAgIH07XG4gICAgem9vbS55ID0gZnVuY3Rpb24oeikge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4geTE7XG4gICAgICB5MSA9IHo7XG4gICAgICB5MCA9IHouY29weSgpO1xuICAgICAgdmlldyA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgazogMVxuICAgICAgfTtcbiAgICAgIHJldHVybiB6b29tO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbG9jYXRpb24ocCkge1xuICAgICAgcmV0dXJuIFsgKHBbMF0gLSB2aWV3LngpIC8gdmlldy5rLCAocFsxXSAtIHZpZXcueSkgLyB2aWV3LmsgXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcG9pbnQobCkge1xuICAgICAgcmV0dXJuIFsgbFswXSAqIHZpZXcuayArIHZpZXcueCwgbFsxXSAqIHZpZXcuayArIHZpZXcueSBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY2FsZVRvKHMpIHtcbiAgICAgIHZpZXcuayA9IE1hdGgubWF4KHNjYWxlRXh0ZW50WzBdLCBNYXRoLm1pbihzY2FsZUV4dGVudFsxXSwgcykpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVUbyhwLCBsKSB7XG4gICAgICBsID0gcG9pbnQobCk7XG4gICAgICB2aWV3LnggKz0gcFswXSAtIGxbMF07XG4gICAgICB2aWV3LnkgKz0gcFsxXSAtIGxbMV07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHpvb21Ubyh0aGF0LCBwLCBsLCBrKSB7XG4gICAgICB0aGF0Ll9fY2hhcnRfXyA9IHtcbiAgICAgICAgeDogdmlldy54LFxuICAgICAgICB5OiB2aWV3LnksXG4gICAgICAgIGs6IHZpZXcua1xuICAgICAgfTtcbiAgICAgIHNjYWxlVG8oTWF0aC5wb3coMiwgaykpO1xuICAgICAgdHJhbnNsYXRlVG8oY2VudGVyMCA9IHAsIGwpO1xuICAgICAgdGhhdCA9IGQzLnNlbGVjdCh0aGF0KTtcbiAgICAgIGlmIChkdXJhdGlvbiA+IDApIHRoYXQgPSB0aGF0LnRyYW5zaXRpb24oKS5kdXJhdGlvbihkdXJhdGlvbik7XG4gICAgICB0aGF0LmNhbGwoem9vbS5ldmVudCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc2NhbGUoKSB7XG4gICAgICBpZiAoeDEpIHgxLmRvbWFpbih4MC5yYW5nZSgpLm1hcChmdW5jdGlvbih4KSB7XG4gICAgICAgIHJldHVybiAoeCAtIHZpZXcueCkgLyB2aWV3Lms7XG4gICAgICB9KS5tYXAoeDAuaW52ZXJ0KSk7XG4gICAgICBpZiAoeTEpIHkxLmRvbWFpbih5MC5yYW5nZSgpLm1hcChmdW5jdGlvbih5KSB7XG4gICAgICAgIHJldHVybiAoeSAtIHZpZXcueSkgLyB2aWV3Lms7XG4gICAgICB9KS5tYXAoeTAuaW52ZXJ0KSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHpvb21zdGFydGVkKGRpc3BhdGNoKSB7XG4gICAgICBpZiAoIXpvb21pbmcrKykgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcInpvb21zdGFydFwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gem9vbWVkKGRpc3BhdGNoKSB7XG4gICAgICByZXNjYWxlKCk7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwiem9vbVwiLFxuICAgICAgICBzY2FsZTogdmlldy5rLFxuICAgICAgICB0cmFuc2xhdGU6IFsgdmlldy54LCB2aWV3LnkgXVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHpvb21lbmRlZChkaXNwYXRjaCkge1xuICAgICAgaWYgKCEtLXpvb21pbmcpIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJ6b29tZW5kXCJcbiAgICAgIH0pLCBjZW50ZXIwID0gbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbW91c2Vkb3duZWQoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXMsIGRpc3BhdGNoID0gZXZlbnQub2YodGhhdCwgYXJndW1lbnRzKSwgZHJhZ2dlZCA9IDAsIHN1YmplY3QgPSBkMy5zZWxlY3QoZDNfd2luZG93KHRoYXQpKS5vbihtb3VzZW1vdmUsIG1vdmVkKS5vbihtb3VzZXVwLCBlbmRlZCksIGxvY2F0aW9uMCA9IGxvY2F0aW9uKGQzLm1vdXNlKHRoYXQpKSwgZHJhZ1Jlc3RvcmUgPSBkM19ldmVudF9kcmFnU3VwcHJlc3ModGhhdCk7XG4gICAgICBkM19zZWxlY3Rpb25faW50ZXJydXB0LmNhbGwodGhhdCk7XG4gICAgICB6b29tc3RhcnRlZChkaXNwYXRjaCk7XG4gICAgICBmdW5jdGlvbiBtb3ZlZCgpIHtcbiAgICAgICAgZHJhZ2dlZCA9IDE7XG4gICAgICAgIHRyYW5zbGF0ZVRvKGQzLm1vdXNlKHRoYXQpLCBsb2NhdGlvbjApO1xuICAgICAgICB6b29tZWQoZGlzcGF0Y2gpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gZW5kZWQoKSB7XG4gICAgICAgIHN1YmplY3Qub24obW91c2Vtb3ZlLCBudWxsKS5vbihtb3VzZXVwLCBudWxsKTtcbiAgICAgICAgZHJhZ1Jlc3RvcmUoZHJhZ2dlZCk7XG4gICAgICAgIHpvb21lbmRlZChkaXNwYXRjaCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvdWNoc3RhcnRlZCgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcywgZGlzcGF0Y2ggPSBldmVudC5vZih0aGF0LCBhcmd1bWVudHMpLCBsb2NhdGlvbnMwID0ge30sIGRpc3RhbmNlMCA9IDAsIHNjYWxlMCwgem9vbU5hbWUgPSBcIi56b29tLVwiICsgZDMuZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllciwgdG91Y2htb3ZlID0gXCJ0b3VjaG1vdmVcIiArIHpvb21OYW1lLCB0b3VjaGVuZCA9IFwidG91Y2hlbmRcIiArIHpvb21OYW1lLCB0YXJnZXRzID0gW10sIHN1YmplY3QgPSBkMy5zZWxlY3QodGhhdCksIGRyYWdSZXN0b3JlID0gZDNfZXZlbnRfZHJhZ1N1cHByZXNzKHRoYXQpO1xuICAgICAgc3RhcnRlZCgpO1xuICAgICAgem9vbXN0YXJ0ZWQoZGlzcGF0Y2gpO1xuICAgICAgc3ViamVjdC5vbihtb3VzZWRvd24sIG51bGwpLm9uKHRvdWNoc3RhcnQsIHN0YXJ0ZWQpO1xuICAgICAgZnVuY3Rpb24gcmVsb2NhdGUoKSB7XG4gICAgICAgIHZhciB0b3VjaGVzID0gZDMudG91Y2hlcyh0aGF0KTtcbiAgICAgICAgc2NhbGUwID0gdmlldy5rO1xuICAgICAgICB0b3VjaGVzLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgICAgIGlmICh0LmlkZW50aWZpZXIgaW4gbG9jYXRpb25zMCkgbG9jYXRpb25zMFt0LmlkZW50aWZpZXJdID0gbG9jYXRpb24odCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdG91Y2hlcztcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHN0YXJ0ZWQoKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBkMy5ldmVudC50YXJnZXQ7XG4gICAgICAgIGQzLnNlbGVjdCh0YXJnZXQpLm9uKHRvdWNobW92ZSwgbW92ZWQpLm9uKHRvdWNoZW5kLCBlbmRlZCk7XG4gICAgICAgIHRhcmdldHMucHVzaCh0YXJnZXQpO1xuICAgICAgICB2YXIgY2hhbmdlZCA9IGQzLmV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbiA9IGNoYW5nZWQubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgbG9jYXRpb25zMFtjaGFuZ2VkW2ldLmlkZW50aWZpZXJdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG91Y2hlcyA9IHJlbG9jYXRlKCksIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGlmICh0b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGlmIChub3cgLSB0b3VjaHRpbWUgPCA1MDApIHtcbiAgICAgICAgICAgIHZhciBwID0gdG91Y2hlc1swXTtcbiAgICAgICAgICAgIHpvb21Ubyh0aGF0LCBwLCBsb2NhdGlvbnMwW3AuaWRlbnRpZmllcl0sIE1hdGguZmxvb3IoTWF0aC5sb2codmlldy5rKSAvIE1hdGguTE4yKSArIDEpO1xuICAgICAgICAgICAgZDNfZXZlbnRQcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0b3VjaHRpbWUgPSBub3c7XG4gICAgICAgIH0gZWxzZSBpZiAodG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdmFyIHAgPSB0b3VjaGVzWzBdLCBxID0gdG91Y2hlc1sxXSwgZHggPSBwWzBdIC0gcVswXSwgZHkgPSBwWzFdIC0gcVsxXTtcbiAgICAgICAgICBkaXN0YW5jZTAgPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gbW92ZWQoKSB7XG4gICAgICAgIHZhciB0b3VjaGVzID0gZDMudG91Y2hlcyh0aGF0KSwgcDAsIGwwLCBwMSwgbDE7XG4gICAgICAgIGQzX3NlbGVjdGlvbl9pbnRlcnJ1cHQuY2FsbCh0aGF0KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIG4gPSB0b3VjaGVzLmxlbmd0aDsgaSA8IG47ICsraSwgbDEgPSBudWxsKSB7XG4gICAgICAgICAgcDEgPSB0b3VjaGVzW2ldO1xuICAgICAgICAgIGlmIChsMSA9IGxvY2F0aW9uczBbcDEuaWRlbnRpZmllcl0pIHtcbiAgICAgICAgICAgIGlmIChsMCkgYnJlYWs7XG4gICAgICAgICAgICBwMCA9IHAxLCBsMCA9IGwxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobDEpIHtcbiAgICAgICAgICB2YXIgZGlzdGFuY2UxID0gKGRpc3RhbmNlMSA9IHAxWzBdIC0gcDBbMF0pICogZGlzdGFuY2UxICsgKGRpc3RhbmNlMSA9IHAxWzFdIC0gcDBbMV0pICogZGlzdGFuY2UxLCBzY2FsZTEgPSBkaXN0YW5jZTAgJiYgTWF0aC5zcXJ0KGRpc3RhbmNlMSAvIGRpc3RhbmNlMCk7XG4gICAgICAgICAgcDAgPSBbIChwMFswXSArIHAxWzBdKSAvIDIsIChwMFsxXSArIHAxWzFdKSAvIDIgXTtcbiAgICAgICAgICBsMCA9IFsgKGwwWzBdICsgbDFbMF0pIC8gMiwgKGwwWzFdICsgbDFbMV0pIC8gMiBdO1xuICAgICAgICAgIHNjYWxlVG8oc2NhbGUxICogc2NhbGUwKTtcbiAgICAgICAgfVxuICAgICAgICB0b3VjaHRpbWUgPSBudWxsO1xuICAgICAgICB0cmFuc2xhdGVUbyhwMCwgbDApO1xuICAgICAgICB6b29tZWQoZGlzcGF0Y2gpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gZW5kZWQoKSB7XG4gICAgICAgIGlmIChkMy5ldmVudC50b3VjaGVzLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBjaGFuZ2VkID0gZDMuZXZlbnQuY2hhbmdlZFRvdWNoZXM7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG4gPSBjaGFuZ2VkLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICAgICAgZGVsZXRlIGxvY2F0aW9uczBbY2hhbmdlZFtpXS5pZGVudGlmaWVyXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yICh2YXIgaWRlbnRpZmllciBpbiBsb2NhdGlvbnMwKSB7XG4gICAgICAgICAgICByZXR1cm4gdm9pZCByZWxvY2F0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkMy5zZWxlY3RBbGwodGFyZ2V0cykub24oem9vbU5hbWUsIG51bGwpO1xuICAgICAgICBzdWJqZWN0Lm9uKG1vdXNlZG93biwgbW91c2Vkb3duZWQpLm9uKHRvdWNoc3RhcnQsIHRvdWNoc3RhcnRlZCk7XG4gICAgICAgIGRyYWdSZXN0b3JlKCk7XG4gICAgICAgIHpvb21lbmRlZChkaXNwYXRjaCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vdXNld2hlZWxlZCgpIHtcbiAgICAgIHZhciBkaXNwYXRjaCA9IGV2ZW50Lm9mKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBpZiAobW91c2V3aGVlbFRpbWVyKSBjbGVhclRpbWVvdXQobW91c2V3aGVlbFRpbWVyKTsgZWxzZSBkM19zZWxlY3Rpb25faW50ZXJydXB0LmNhbGwodGhpcyksIFxuICAgICAgdHJhbnNsYXRlMCA9IGxvY2F0aW9uKGNlbnRlcjAgPSBjZW50ZXIgfHwgZDMubW91c2UodGhpcykpLCB6b29tc3RhcnRlZChkaXNwYXRjaCk7XG4gICAgICBtb3VzZXdoZWVsVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBtb3VzZXdoZWVsVGltZXIgPSBudWxsO1xuICAgICAgICB6b29tZW5kZWQoZGlzcGF0Y2gpO1xuICAgICAgfSwgNTApO1xuICAgICAgZDNfZXZlbnRQcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2NhbGVUbyhNYXRoLnBvdygyLCBkM19iZWhhdmlvcl96b29tRGVsdGEoKSAqIC4wMDIpICogdmlldy5rKTtcbiAgICAgIHRyYW5zbGF0ZVRvKGNlbnRlcjAsIHRyYW5zbGF0ZTApO1xuICAgICAgem9vbWVkKGRpc3BhdGNoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGJsY2xpY2tlZCgpIHtcbiAgICAgIHZhciBwID0gZDMubW91c2UodGhpcyksIGsgPSBNYXRoLmxvZyh2aWV3LmspIC8gTWF0aC5MTjI7XG4gICAgICB6b29tVG8odGhpcywgcCwgbG9jYXRpb24ocCksIGQzLmV2ZW50LnNoaWZ0S2V5ID8gTWF0aC5jZWlsKGspIC0gMSA6IE1hdGguZmxvb3IoaykgKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGQzLnJlYmluZCh6b29tLCBldmVudCwgXCJvblwiKTtcbiAgfTtcbiAgdmFyIGQzX2JlaGF2aW9yX3pvb21JbmZpbml0eSA9IFsgMCwgSW5maW5pdHkgXSwgZDNfYmVoYXZpb3Jfem9vbURlbHRhLCBkM19iZWhhdmlvcl96b29tV2hlZWw7XG4gIGQzLmNvbG9yID0gZDNfY29sb3I7XG4gIGZ1bmN0aW9uIGQzX2NvbG9yKCkge31cbiAgZDNfY29sb3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmdiKCkgKyBcIlwiO1xuICB9O1xuICBkMy5oc2wgPSBkM19oc2w7XG4gIGZ1bmN0aW9uIGQzX2hzbChoLCBzLCBsKSB7XG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBkM19oc2wgPyB2b2lkICh0aGlzLmggPSAraCwgdGhpcy5zID0gK3MsIHRoaXMubCA9ICtsKSA6IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gaCBpbnN0YW5jZW9mIGQzX2hzbCA/IG5ldyBkM19oc2woaC5oLCBoLnMsIGgubCkgOiBkM19yZ2JfcGFyc2UoXCJcIiArIGgsIGQzX3JnYl9oc2wsIGQzX2hzbCkgOiBuZXcgZDNfaHNsKGgsIHMsIGwpO1xuICB9XG4gIHZhciBkM19oc2xQcm90b3R5cGUgPSBkM19oc2wucHJvdG90eXBlID0gbmV3IGQzX2NvbG9yKCk7XG4gIGQzX2hzbFByb3RvdHlwZS5icmlnaHRlciA9IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gTWF0aC5wb3coLjcsIGFyZ3VtZW50cy5sZW5ndGggPyBrIDogMSk7XG4gICAgcmV0dXJuIG5ldyBkM19oc2wodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAvIGspO1xuICB9O1xuICBkM19oc2xQcm90b3R5cGUuZGFya2VyID0gZnVuY3Rpb24oaykge1xuICAgIGsgPSBNYXRoLnBvdyguNywgYXJndW1lbnRzLmxlbmd0aCA/IGsgOiAxKTtcbiAgICByZXR1cm4gbmV3IGQzX2hzbCh0aGlzLmgsIHRoaXMucywgayAqIHRoaXMubCk7XG4gIH07XG4gIGQzX2hzbFByb3RvdHlwZS5yZ2IgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfaHNsX3JnYih0aGlzLmgsIHRoaXMucywgdGhpcy5sKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfaHNsX3JnYihoLCBzLCBsKSB7XG4gICAgdmFyIG0xLCBtMjtcbiAgICBoID0gaXNOYU4oaCkgPyAwIDogKGggJT0gMzYwKSA8IDAgPyBoICsgMzYwIDogaDtcbiAgICBzID0gaXNOYU4ocykgPyAwIDogcyA8IDAgPyAwIDogcyA+IDEgPyAxIDogcztcbiAgICBsID0gbCA8IDAgPyAwIDogbCA+IDEgPyAxIDogbDtcbiAgICBtMiA9IGwgPD0gLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgbTEgPSAyICogbCAtIG0yO1xuICAgIGZ1bmN0aW9uIHYoaCkge1xuICAgICAgaWYgKGggPiAzNjApIGggLT0gMzYwOyBlbHNlIGlmIChoIDwgMCkgaCArPSAzNjA7XG4gICAgICBpZiAoaCA8IDYwKSByZXR1cm4gbTEgKyAobTIgLSBtMSkgKiBoIC8gNjA7XG4gICAgICBpZiAoaCA8IDE4MCkgcmV0dXJuIG0yO1xuICAgICAgaWYgKGggPCAyNDApIHJldHVybiBtMSArIChtMiAtIG0xKSAqICgyNDAgLSBoKSAvIDYwO1xuICAgICAgcmV0dXJuIG0xO1xuICAgIH1cbiAgICBmdW5jdGlvbiB2dihoKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh2KGgpICogMjU1KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBkM19yZ2IodnYoaCArIDEyMCksIHZ2KGgpLCB2dihoIC0gMTIwKSk7XG4gIH1cbiAgZDMuaGNsID0gZDNfaGNsO1xuICBmdW5jdGlvbiBkM19oY2woaCwgYywgbCkge1xuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgZDNfaGNsID8gdm9pZCAodGhpcy5oID0gK2gsIHRoaXMuYyA9ICtjLCB0aGlzLmwgPSArbCkgOiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGggaW5zdGFuY2VvZiBkM19oY2wgPyBuZXcgZDNfaGNsKGguaCwgaC5jLCBoLmwpIDogaCBpbnN0YW5jZW9mIGQzX2xhYiA/IGQzX2xhYl9oY2woaC5sLCBoLmEsIGguYikgOiBkM19sYWJfaGNsKChoID0gZDNfcmdiX2xhYigoaCA9IGQzLnJnYihoKSkuciwgaC5nLCBoLmIpKS5sLCBoLmEsIGguYikgOiBuZXcgZDNfaGNsKGgsIGMsIGwpO1xuICB9XG4gIHZhciBkM19oY2xQcm90b3R5cGUgPSBkM19oY2wucHJvdG90eXBlID0gbmV3IGQzX2NvbG9yKCk7XG4gIGQzX2hjbFByb3RvdHlwZS5icmlnaHRlciA9IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gbmV3IGQzX2hjbCh0aGlzLmgsIHRoaXMuYywgTWF0aC5taW4oMTAwLCB0aGlzLmwgKyBkM19sYWJfSyAqIChhcmd1bWVudHMubGVuZ3RoID8gayA6IDEpKSk7XG4gIH07XG4gIGQzX2hjbFByb3RvdHlwZS5kYXJrZXIgPSBmdW5jdGlvbihrKSB7XG4gICAgcmV0dXJuIG5ldyBkM19oY2wodGhpcy5oLCB0aGlzLmMsIE1hdGgubWF4KDAsIHRoaXMubCAtIGQzX2xhYl9LICogKGFyZ3VtZW50cy5sZW5ndGggPyBrIDogMSkpKTtcbiAgfTtcbiAgZDNfaGNsUHJvdG90eXBlLnJnYiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkM19oY2xfbGFiKHRoaXMuaCwgdGhpcy5jLCB0aGlzLmwpLnJnYigpO1xuICB9O1xuICBmdW5jdGlvbiBkM19oY2xfbGFiKGgsIGMsIGwpIHtcbiAgICBpZiAoaXNOYU4oaCkpIGggPSAwO1xuICAgIGlmIChpc05hTihjKSkgYyA9IDA7XG4gICAgcmV0dXJuIG5ldyBkM19sYWIobCwgTWF0aC5jb3MoaCAqPSBkM19yYWRpYW5zKSAqIGMsIE1hdGguc2luKGgpICogYyk7XG4gIH1cbiAgZDMubGFiID0gZDNfbGFiO1xuICBmdW5jdGlvbiBkM19sYWIobCwgYSwgYikge1xuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgZDNfbGFiID8gdm9pZCAodGhpcy5sID0gK2wsIHRoaXMuYSA9ICthLCB0aGlzLmIgPSArYikgOiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGwgaW5zdGFuY2VvZiBkM19sYWIgPyBuZXcgZDNfbGFiKGwubCwgbC5hLCBsLmIpIDogbCBpbnN0YW5jZW9mIGQzX2hjbCA/IGQzX2hjbF9sYWIobC5oLCBsLmMsIGwubCkgOiBkM19yZ2JfbGFiKChsID0gZDNfcmdiKGwpKS5yLCBsLmcsIGwuYikgOiBuZXcgZDNfbGFiKGwsIGEsIGIpO1xuICB9XG4gIHZhciBkM19sYWJfSyA9IDE4O1xuICB2YXIgZDNfbGFiX1ggPSAuOTUwNDcsIGQzX2xhYl9ZID0gMSwgZDNfbGFiX1ogPSAxLjA4ODgzO1xuICB2YXIgZDNfbGFiUHJvdG90eXBlID0gZDNfbGFiLnByb3RvdHlwZSA9IG5ldyBkM19jb2xvcigpO1xuICBkM19sYWJQcm90b3R5cGUuYnJpZ2h0ZXIgPSBmdW5jdGlvbihrKSB7XG4gICAgcmV0dXJuIG5ldyBkM19sYWIoTWF0aC5taW4oMTAwLCB0aGlzLmwgKyBkM19sYWJfSyAqIChhcmd1bWVudHMubGVuZ3RoID8gayA6IDEpKSwgdGhpcy5hLCB0aGlzLmIpO1xuICB9O1xuICBkM19sYWJQcm90b3R5cGUuZGFya2VyID0gZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBuZXcgZDNfbGFiKE1hdGgubWF4KDAsIHRoaXMubCAtIGQzX2xhYl9LICogKGFyZ3VtZW50cy5sZW5ndGggPyBrIDogMSkpLCB0aGlzLmEsIHRoaXMuYik7XG4gIH07XG4gIGQzX2xhYlByb3RvdHlwZS5yZ2IgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfbGFiX3JnYih0aGlzLmwsIHRoaXMuYSwgdGhpcy5iKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfbGFiX3JnYihsLCBhLCBiKSB7XG4gICAgdmFyIHkgPSAobCArIDE2KSAvIDExNiwgeCA9IHkgKyBhIC8gNTAwLCB6ID0geSAtIGIgLyAyMDA7XG4gICAgeCA9IGQzX2xhYl94eXooeCkgKiBkM19sYWJfWDtcbiAgICB5ID0gZDNfbGFiX3h5eih5KSAqIGQzX2xhYl9ZO1xuICAgIHogPSBkM19sYWJfeHl6KHopICogZDNfbGFiX1o7XG4gICAgcmV0dXJuIG5ldyBkM19yZ2IoZDNfeHl6X3JnYigzLjI0MDQ1NDIgKiB4IC0gMS41MzcxMzg1ICogeSAtIC40OTg1MzE0ICogeiksIGQzX3h5el9yZ2IoLS45NjkyNjYgKiB4ICsgMS44NzYwMTA4ICogeSArIC4wNDE1NTYgKiB6KSwgZDNfeHl6X3JnYiguMDU1NjQzNCAqIHggLSAuMjA0MDI1OSAqIHkgKyAxLjA1NzIyNTIgKiB6KSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGFiX2hjbChsLCBhLCBiKSB7XG4gICAgcmV0dXJuIGwgPiAwID8gbmV3IGQzX2hjbChNYXRoLmF0YW4yKGIsIGEpICogZDNfZGVncmVlcywgTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpLCBsKSA6IG5ldyBkM19oY2woTmFOLCBOYU4sIGwpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xhYl94eXooeCkge1xuICAgIHJldHVybiB4ID4gLjIwNjg5MzAzNCA/IHggKiB4ICogeCA6ICh4IC0gNCAvIDI5KSAvIDcuNzg3MDM3O1xuICB9XG4gIGZ1bmN0aW9uIGQzX3h5el9sYWIoeCkge1xuICAgIHJldHVybiB4ID4gLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6IDcuNzg3MDM3ICogeCArIDQgLyAyOTtcbiAgfVxuICBmdW5jdGlvbiBkM194eXpfcmdiKHIpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgyNTUgKiAociA8PSAuMDAzMDQgPyAxMi45MiAqIHIgOiAxLjA1NSAqIE1hdGgucG93KHIsIDEgLyAyLjQpIC0gLjA1NSkpO1xuICB9XG4gIGQzLnJnYiA9IGQzX3JnYjtcbiAgZnVuY3Rpb24gZDNfcmdiKHIsIGcsIGIpIHtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGQzX3JnYiA/IHZvaWQgKHRoaXMuciA9IH5+ciwgdGhpcy5nID0gfn5nLCB0aGlzLmIgPSB+fmIpIDogYXJndW1lbnRzLmxlbmd0aCA8IDIgPyByIGluc3RhbmNlb2YgZDNfcmdiID8gbmV3IGQzX3JnYihyLnIsIHIuZywgci5iKSA6IGQzX3JnYl9wYXJzZShcIlwiICsgciwgZDNfcmdiLCBkM19oc2xfcmdiKSA6IG5ldyBkM19yZ2IociwgZywgYik7XG4gIH1cbiAgZnVuY3Rpb24gZDNfcmdiTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBkM19yZ2IodmFsdWUgPj4gMTYsIHZhbHVlID4+IDggJiAyNTUsIHZhbHVlICYgMjU1KTtcbiAgfVxuICBmdW5jdGlvbiBkM19yZ2JTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gZDNfcmdiTnVtYmVyKHZhbHVlKSArIFwiXCI7XG4gIH1cbiAgdmFyIGQzX3JnYlByb3RvdHlwZSA9IGQzX3JnYi5wcm90b3R5cGUgPSBuZXcgZDNfY29sb3IoKTtcbiAgZDNfcmdiUHJvdG90eXBlLmJyaWdodGVyID0gZnVuY3Rpb24oaykge1xuICAgIGsgPSBNYXRoLnBvdyguNywgYXJndW1lbnRzLmxlbmd0aCA/IGsgOiAxKTtcbiAgICB2YXIgciA9IHRoaXMuciwgZyA9IHRoaXMuZywgYiA9IHRoaXMuYiwgaSA9IDMwO1xuICAgIGlmICghciAmJiAhZyAmJiAhYikgcmV0dXJuIG5ldyBkM19yZ2IoaSwgaSwgaSk7XG4gICAgaWYgKHIgJiYgciA8IGkpIHIgPSBpO1xuICAgIGlmIChnICYmIGcgPCBpKSBnID0gaTtcbiAgICBpZiAoYiAmJiBiIDwgaSkgYiA9IGk7XG4gICAgcmV0dXJuIG5ldyBkM19yZ2IoTWF0aC5taW4oMjU1LCByIC8gayksIE1hdGgubWluKDI1NSwgZyAvIGspLCBNYXRoLm1pbigyNTUsIGIgLyBrKSk7XG4gIH07XG4gIGQzX3JnYlByb3RvdHlwZS5kYXJrZXIgPSBmdW5jdGlvbihrKSB7XG4gICAgayA9IE1hdGgucG93KC43LCBhcmd1bWVudHMubGVuZ3RoID8gayA6IDEpO1xuICAgIHJldHVybiBuZXcgZDNfcmdiKGsgKiB0aGlzLnIsIGsgKiB0aGlzLmcsIGsgKiB0aGlzLmIpO1xuICB9O1xuICBkM19yZ2JQcm90b3R5cGUuaHNsID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX3JnYl9oc2wodGhpcy5yLCB0aGlzLmcsIHRoaXMuYik7XG4gIH07XG4gIGQzX3JnYlByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIiNcIiArIGQzX3JnYl9oZXgodGhpcy5yKSArIGQzX3JnYl9oZXgodGhpcy5nKSArIGQzX3JnYl9oZXgodGhpcy5iKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfcmdiX2hleCh2KSB7XG4gICAgcmV0dXJuIHYgPCAxNiA/IFwiMFwiICsgTWF0aC5tYXgoMCwgdikudG9TdHJpbmcoMTYpIDogTWF0aC5taW4oMjU1LCB2KS50b1N0cmluZygxNik7XG4gIH1cbiAgZnVuY3Rpb24gZDNfcmdiX3BhcnNlKGZvcm1hdCwgcmdiLCBoc2wpIHtcbiAgICB2YXIgciA9IDAsIGcgPSAwLCBiID0gMCwgbTEsIG0yLCBjb2xvcjtcbiAgICBtMSA9IC8oW2Etel0rKVxcKCguKilcXCkvLmV4ZWMoZm9ybWF0ID0gZm9ybWF0LnRvTG93ZXJDYXNlKCkpO1xuICAgIGlmIChtMSkge1xuICAgICAgbTIgPSBtMVsyXS5zcGxpdChcIixcIik7XG4gICAgICBzd2l0Y2ggKG0xWzFdKSB7XG4gICAgICAgY2FzZSBcImhzbFwiOlxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIGhzbChwYXJzZUZsb2F0KG0yWzBdKSwgcGFyc2VGbG9hdChtMlsxXSkgLyAxMDAsIHBhcnNlRmxvYXQobTJbMl0pIC8gMTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgY2FzZSBcInJnYlwiOlxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIHJnYihkM19yZ2JfcGFyc2VOdW1iZXIobTJbMF0pLCBkM19yZ2JfcGFyc2VOdW1iZXIobTJbMV0pLCBkM19yZ2JfcGFyc2VOdW1iZXIobTJbMl0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29sb3IgPSBkM19yZ2JfbmFtZXMuZ2V0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiByZ2IoY29sb3IuciwgY29sb3IuZywgY29sb3IuYik7XG4gICAgfVxuICAgIGlmIChmb3JtYXQgIT0gbnVsbCAmJiBmb3JtYXQuY2hhckF0KDApID09PSBcIiNcIiAmJiAhaXNOYU4oY29sb3IgPSBwYXJzZUludChmb3JtYXQuc2xpY2UoMSksIDE2KSkpIHtcbiAgICAgIGlmIChmb3JtYXQubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHIgPSAoY29sb3IgJiAzODQwKSA+PiA0O1xuICAgICAgICByID0gciA+PiA0IHwgcjtcbiAgICAgICAgZyA9IGNvbG9yICYgMjQwO1xuICAgICAgICBnID0gZyA+PiA0IHwgZztcbiAgICAgICAgYiA9IGNvbG9yICYgMTU7XG4gICAgICAgIGIgPSBiIDw8IDQgfCBiO1xuICAgICAgfSBlbHNlIGlmIChmb3JtYXQubGVuZ3RoID09PSA3KSB7XG4gICAgICAgIHIgPSAoY29sb3IgJiAxNjcxMTY4MCkgPj4gMTY7XG4gICAgICAgIGcgPSAoY29sb3IgJiA2NTI4MCkgPj4gODtcbiAgICAgICAgYiA9IGNvbG9yICYgMjU1O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmdiKHIsIGcsIGIpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3JnYl9oc2wociwgZywgYikge1xuICAgIHZhciBtaW4gPSBNYXRoLm1pbihyIC89IDI1NSwgZyAvPSAyNTUsIGIgLz0gMjU1KSwgbWF4ID0gTWF0aC5tYXgociwgZywgYiksIGQgPSBtYXggLSBtaW4sIGgsIHMsIGwgPSAobWF4ICsgbWluKSAvIDI7XG4gICAgaWYgKGQpIHtcbiAgICAgIHMgPSBsIDwgLjUgPyBkIC8gKG1heCArIG1pbikgOiBkIC8gKDIgLSBtYXggLSBtaW4pO1xuICAgICAgaWYgKHIgPT0gbWF4KSBoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCk7IGVsc2UgaWYgKGcgPT0gbWF4KSBoID0gKGIgLSByKSAvIGQgKyAyOyBlbHNlIGggPSAociAtIGcpIC8gZCArIDQ7XG4gICAgICBoICo9IDYwO1xuICAgIH0gZWxzZSB7XG4gICAgICBoID0gTmFOO1xuICAgICAgcyA9IGwgPiAwICYmIGwgPCAxID8gMCA6IGg7XG4gICAgfVxuICAgIHJldHVybiBuZXcgZDNfaHNsKGgsIHMsIGwpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3JnYl9sYWIociwgZywgYikge1xuICAgIHIgPSBkM19yZ2JfeHl6KHIpO1xuICAgIGcgPSBkM19yZ2JfeHl6KGcpO1xuICAgIGIgPSBkM19yZ2JfeHl6KGIpO1xuICAgIHZhciB4ID0gZDNfeHl6X2xhYigoLjQxMjQ1NjQgKiByICsgLjM1NzU3NjEgKiBnICsgLjE4MDQzNzUgKiBiKSAvIGQzX2xhYl9YKSwgeSA9IGQzX3h5el9sYWIoKC4yMTI2NzI5ICogciArIC43MTUxNTIyICogZyArIC4wNzIxNzUgKiBiKSAvIGQzX2xhYl9ZKSwgeiA9IGQzX3h5el9sYWIoKC4wMTkzMzM5ICogciArIC4xMTkxOTIgKiBnICsgLjk1MDMwNDEgKiBiKSAvIGQzX2xhYl9aKTtcbiAgICByZXR1cm4gZDNfbGFiKDExNiAqIHkgLSAxNiwgNTAwICogKHggLSB5KSwgMjAwICogKHkgLSB6KSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfcmdiX3h5eihyKSB7XG4gICAgcmV0dXJuIChyIC89IDI1NSkgPD0gLjA0MDQ1ID8gciAvIDEyLjkyIDogTWF0aC5wb3coKHIgKyAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3JnYl9wYXJzZU51bWJlcihjKSB7XG4gICAgdmFyIGYgPSBwYXJzZUZsb2F0KGMpO1xuICAgIHJldHVybiBjLmNoYXJBdChjLmxlbmd0aCAtIDEpID09PSBcIiVcIiA/IE1hdGgucm91bmQoZiAqIDIuNTUpIDogZjtcbiAgfVxuICB2YXIgZDNfcmdiX25hbWVzID0gZDMubWFwKHtcbiAgICBhbGljZWJsdWU6IDE1NzkyMzgzLFxuICAgIGFudGlxdWV3aGl0ZTogMTY0NDQzNzUsXG4gICAgYXF1YTogNjU1MzUsXG4gICAgYXF1YW1hcmluZTogODM4ODU2NCxcbiAgICBhenVyZTogMTU3OTQxNzUsXG4gICAgYmVpZ2U6IDE2MTE5MjYwLFxuICAgIGJpc3F1ZTogMTY3NzAyNDQsXG4gICAgYmxhY2s6IDAsXG4gICAgYmxhbmNoZWRhbG1vbmQ6IDE2NzcyMDQ1LFxuICAgIGJsdWU6IDI1NSxcbiAgICBibHVldmlvbGV0OiA5MDU1MjAyLFxuICAgIGJyb3duOiAxMDgyNDIzNCxcbiAgICBidXJseXdvb2Q6IDE0NTk2MjMxLFxuICAgIGNhZGV0Ymx1ZTogNjI2NjUyOCxcbiAgICBjaGFydHJldXNlOiA4Mzg4MzUyLFxuICAgIGNob2NvbGF0ZTogMTM3ODk0NzAsXG4gICAgY29yYWw6IDE2NzQ0MjcyLFxuICAgIGNvcm5mbG93ZXJibHVlOiA2NTkxOTgxLFxuICAgIGNvcm5zaWxrOiAxNjc3NTM4OCxcbiAgICBjcmltc29uOiAxNDQyMzEwMCxcbiAgICBjeWFuOiA2NTUzNSxcbiAgICBkYXJrYmx1ZTogMTM5LFxuICAgIGRhcmtjeWFuOiAzNTcyMyxcbiAgICBkYXJrZ29sZGVucm9kOiAxMjA5MjkzOSxcbiAgICBkYXJrZ3JheTogMTExMTkwMTcsXG4gICAgZGFya2dyZWVuOiAyNTYwMCxcbiAgICBkYXJrZ3JleTogMTExMTkwMTcsXG4gICAgZGFya2toYWtpOiAxMjQzMzI1OSxcbiAgICBkYXJrbWFnZW50YTogOTEwOTY0MyxcbiAgICBkYXJrb2xpdmVncmVlbjogNTU5Nzk5OSxcbiAgICBkYXJrb3JhbmdlOiAxNjc0NzUyMCxcbiAgICBkYXJrb3JjaGlkOiAxMDA0MDAxMixcbiAgICBkYXJrcmVkOiA5MTA5NTA0LFxuICAgIGRhcmtzYWxtb246IDE1MzA4NDEwLFxuICAgIGRhcmtzZWFncmVlbjogOTQxOTkxOSxcbiAgICBkYXJrc2xhdGVibHVlOiA0NzM0MzQ3LFxuICAgIGRhcmtzbGF0ZWdyYXk6IDMxMDA0OTUsXG4gICAgZGFya3NsYXRlZ3JleTogMzEwMDQ5NSxcbiAgICBkYXJrdHVycXVvaXNlOiA1Mjk0NSxcbiAgICBkYXJrdmlvbGV0OiA5Njk5NTM5LFxuICAgIGRlZXBwaW5rOiAxNjcxNjk0NyxcbiAgICBkZWVwc2t5Ymx1ZTogNDkxNTEsXG4gICAgZGltZ3JheTogNjkwODI2NSxcbiAgICBkaW1ncmV5OiA2OTA4MjY1LFxuICAgIGRvZGdlcmJsdWU6IDIwMDMxOTksXG4gICAgZmlyZWJyaWNrOiAxMTY3NDE0NixcbiAgICBmbG9yYWx3aGl0ZTogMTY3NzU5MjAsXG4gICAgZm9yZXN0Z3JlZW46IDIyNjM4NDIsXG4gICAgZnVjaHNpYTogMTY3MTE5MzUsXG4gICAgZ2FpbnNib3JvOiAxNDQ3NDQ2MCxcbiAgICBnaG9zdHdoaXRlOiAxNjMxNjY3MSxcbiAgICBnb2xkOiAxNjc2NjcyMCxcbiAgICBnb2xkZW5yb2Q6IDE0MzI5MTIwLFxuICAgIGdyYXk6IDg0MjE1MDQsXG4gICAgZ3JlZW46IDMyNzY4LFxuICAgIGdyZWVueWVsbG93OiAxMTQwMzA1NSxcbiAgICBncmV5OiA4NDIxNTA0LFxuICAgIGhvbmV5ZGV3OiAxNTc5NDE2MCxcbiAgICBob3RwaW5rOiAxNjczODc0MCxcbiAgICBpbmRpYW5yZWQ6IDEzNDU4NTI0LFxuICAgIGluZGlnbzogNDkxNTMzMCxcbiAgICBpdm9yeTogMTY3NzcyMDAsXG4gICAga2hha2k6IDE1Nzg3NjYwLFxuICAgIGxhdmVuZGVyOiAxNTEzMjQxMCxcbiAgICBsYXZlbmRlcmJsdXNoOiAxNjc3MzM2NSxcbiAgICBsYXduZ3JlZW46IDgxOTA5NzYsXG4gICAgbGVtb25jaGlmZm9uOiAxNjc3NTg4NSxcbiAgICBsaWdodGJsdWU6IDExMzkzMjU0LFxuICAgIGxpZ2h0Y29yYWw6IDE1NzYxNTM2LFxuICAgIGxpZ2h0Y3lhbjogMTQ3NDU1OTksXG4gICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IDE2NDQ4MjEwLFxuICAgIGxpZ2h0Z3JheTogMTM4ODIzMjMsXG4gICAgbGlnaHRncmVlbjogOTQ5ODI1NixcbiAgICBsaWdodGdyZXk6IDEzODgyMzIzLFxuICAgIGxpZ2h0cGluazogMTY3NTg0NjUsXG4gICAgbGlnaHRzYWxtb246IDE2NzUyNzYyLFxuICAgIGxpZ2h0c2VhZ3JlZW46IDIxNDI4OTAsXG4gICAgbGlnaHRza3libHVlOiA4OTAwMzQ2LFxuICAgIGxpZ2h0c2xhdGVncmF5OiA3ODMzNzUzLFxuICAgIGxpZ2h0c2xhdGVncmV5OiA3ODMzNzUzLFxuICAgIGxpZ2h0c3RlZWxibHVlOiAxMTU4NDczNCxcbiAgICBsaWdodHllbGxvdzogMTY3NzcxODQsXG4gICAgbGltZTogNjUyODAsXG4gICAgbGltZWdyZWVuOiAzMzI5MzMwLFxuICAgIGxpbmVuOiAxNjQ0NTY3MCxcbiAgICBtYWdlbnRhOiAxNjcxMTkzNSxcbiAgICBtYXJvb246IDgzODg2MDgsXG4gICAgbWVkaXVtYXF1YW1hcmluZTogNjczNzMyMixcbiAgICBtZWRpdW1ibHVlOiAyMDUsXG4gICAgbWVkaXVtb3JjaGlkOiAxMjIxMTY2NyxcbiAgICBtZWRpdW1wdXJwbGU6IDk2NjI2ODMsXG4gICAgbWVkaXVtc2VhZ3JlZW46IDM5NzgwOTcsXG4gICAgbWVkaXVtc2xhdGVibHVlOiA4MDg3NzkwLFxuICAgIG1lZGl1bXNwcmluZ2dyZWVuOiA2NDE1NCxcbiAgICBtZWRpdW10dXJxdW9pc2U6IDQ3NzIzMDAsXG4gICAgbWVkaXVtdmlvbGV0cmVkOiAxMzA0NzE3MyxcbiAgICBtaWRuaWdodGJsdWU6IDE2NDQ5MTIsXG4gICAgbWludGNyZWFtOiAxNjEyMTg1MCxcbiAgICBtaXN0eXJvc2U6IDE2NzcwMjczLFxuICAgIG1vY2Nhc2luOiAxNjc3MDIyOSxcbiAgICBuYXZham93aGl0ZTogMTY3Njg2ODUsXG4gICAgbmF2eTogMTI4LFxuICAgIG9sZGxhY2U6IDE2NjQzNTU4LFxuICAgIG9saXZlOiA4NDIxMzc2LFxuICAgIG9saXZlZHJhYjogNzA0ODczOSxcbiAgICBvcmFuZ2U6IDE2NzUzOTIwLFxuICAgIG9yYW5nZXJlZDogMTY3MjkzNDQsXG4gICAgb3JjaGlkOiAxNDMxNTczNCxcbiAgICBwYWxlZ29sZGVucm9kOiAxNTY1NzEzMCxcbiAgICBwYWxlZ3JlZW46IDEwMDI1ODgwLFxuICAgIHBhbGV0dXJxdW9pc2U6IDExNTI5OTY2LFxuICAgIHBhbGV2aW9sZXRyZWQ6IDE0MzgxMjAzLFxuICAgIHBhcGF5YXdoaXA6IDE2NzczMDc3LFxuICAgIHBlYWNocHVmZjogMTY3Njc2NzMsXG4gICAgcGVydTogMTM0Njg5OTEsXG4gICAgcGluazogMTY3NjEwMzUsXG4gICAgcGx1bTogMTQ1MjQ2MzcsXG4gICAgcG93ZGVyYmx1ZTogMTE1OTE5MTAsXG4gICAgcHVycGxlOiA4Mzg4NzM2LFxuICAgIHJlYmVjY2FwdXJwbGU6IDY2OTc4ODEsXG4gICAgcmVkOiAxNjcxMTY4MCxcbiAgICByb3N5YnJvd246IDEyMzU3NTE5LFxuICAgIHJveWFsYmx1ZTogNDI4Njk0NSxcbiAgICBzYWRkbGVicm93bjogOTEyNzE4NyxcbiAgICBzYWxtb246IDE2NDE2ODgyLFxuICAgIHNhbmR5YnJvd246IDE2MDMyODY0LFxuICAgIHNlYWdyZWVuOiAzMDUwMzI3LFxuICAgIHNlYXNoZWxsOiAxNjc3NDYzOCxcbiAgICBzaWVubmE6IDEwNTA2Nzk3LFxuICAgIHNpbHZlcjogMTI2MzIyNTYsXG4gICAgc2t5Ymx1ZTogODkwMDMzMSxcbiAgICBzbGF0ZWJsdWU6IDY5NzAwNjEsXG4gICAgc2xhdGVncmF5OiA3MzcyOTQ0LFxuICAgIHNsYXRlZ3JleTogNzM3Mjk0NCxcbiAgICBzbm93OiAxNjc3NTkzMCxcbiAgICBzcHJpbmdncmVlbjogNjU0MDcsXG4gICAgc3RlZWxibHVlOiA0NjIwOTgwLFxuICAgIHRhbjogMTM4MDg3ODAsXG4gICAgdGVhbDogMzI4OTYsXG4gICAgdGhpc3RsZTogMTQyMDQ4ODgsXG4gICAgdG9tYXRvOiAxNjczNzA5NSxcbiAgICB0dXJxdW9pc2U6IDQyNTE4NTYsXG4gICAgdmlvbGV0OiAxNTYzMTA4NixcbiAgICB3aGVhdDogMTYxMTMzMzEsXG4gICAgd2hpdGU6IDE2Nzc3MjE1LFxuICAgIHdoaXRlc21va2U6IDE2MTE5Mjg1LFxuICAgIHllbGxvdzogMTY3NzY5NjAsXG4gICAgeWVsbG93Z3JlZW46IDEwMTQ1MDc0XG4gIH0pO1xuICBkM19yZ2JfbmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgZDNfcmdiX25hbWVzLnNldChrZXksIGQzX3JnYk51bWJlcih2YWx1ZSkpO1xuICB9KTtcbiAgZnVuY3Rpb24gZDNfZnVuY3Rvcih2KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcImZ1bmN0aW9uXCIgPyB2IDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdjtcbiAgICB9O1xuICB9XG4gIGQzLmZ1bmN0b3IgPSBkM19mdW5jdG9yO1xuICBkMy54aHIgPSBkM194aHJUeXBlKGQzX2lkZW50aXR5KTtcbiAgZnVuY3Rpb24gZDNfeGhyVHlwZShyZXNwb25zZSkge1xuICAgIHJldHVybiBmdW5jdGlvbih1cmwsIG1pbWVUeXBlLCBjYWxsYmFjaykge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIG1pbWVUeXBlID09PSBcImZ1bmN0aW9uXCIpIGNhbGxiYWNrID0gbWltZVR5cGUsIFxuICAgICAgbWltZVR5cGUgPSBudWxsO1xuICAgICAgcmV0dXJuIGQzX3hocih1cmwsIG1pbWVUeXBlLCByZXNwb25zZSwgY2FsbGJhY2spO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZDNfeGhyKHVybCwgbWltZVR5cGUsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICAgIHZhciB4aHIgPSB7fSwgZGlzcGF0Y2ggPSBkMy5kaXNwYXRjaChcImJlZm9yZXNlbmRcIiwgXCJwcm9ncmVzc1wiLCBcImxvYWRcIiwgXCJlcnJvclwiKSwgaGVhZGVycyA9IHt9LCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksIHJlc3BvbnNlVHlwZSA9IG51bGw7XG4gICAgaWYgKHRoaXMuWERvbWFpblJlcXVlc3QgJiYgIShcIndpdGhDcmVkZW50aWFsc1wiIGluIHJlcXVlc3QpICYmIC9eKGh0dHAocyk/Oik/XFwvXFwvLy50ZXN0KHVybCkpIHJlcXVlc3QgPSBuZXcgWERvbWFpblJlcXVlc3QoKTtcbiAgICBcIm9ubG9hZFwiIGluIHJlcXVlc3QgPyByZXF1ZXN0Lm9ubG9hZCA9IHJlcXVlc3Qub25lcnJvciA9IHJlc3BvbmQgOiByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVxdWVzdC5yZWFkeVN0YXRlID4gMyAmJiByZXNwb25kKCk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiByZXNwb25kKCkge1xuICAgICAgdmFyIHN0YXR1cyA9IHJlcXVlc3Quc3RhdHVzLCByZXN1bHQ7XG4gICAgICBpZiAoIXN0YXR1cyAmJiBkM194aHJIYXNSZXNwb25zZShyZXF1ZXN0KSB8fCBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMCB8fCBzdGF0dXMgPT09IDMwNCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlLmNhbGwoeGhyLCByZXF1ZXN0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGRpc3BhdGNoLmVycm9yLmNhbGwoeGhyLCBlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2gubG9hZC5jYWxsKHhociwgcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoLmVycm9yLmNhbGwoeGhyLCByZXF1ZXN0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciBvID0gZDMuZXZlbnQ7XG4gICAgICBkMy5ldmVudCA9IGV2ZW50O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGlzcGF0Y2gucHJvZ3Jlc3MuY2FsbCh4aHIsIHJlcXVlc3QpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgZDMuZXZlbnQgPSBvO1xuICAgICAgfVxuICAgIH07XG4gICAgeGhyLmhlYWRlciA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICBuYW1lID0gKG5hbWUgKyBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSByZXR1cm4gaGVhZGVyc1tuYW1lXTtcbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSBkZWxldGUgaGVhZGVyc1tuYW1lXTsgZWxzZSBoZWFkZXJzW25hbWVdID0gdmFsdWUgKyBcIlwiO1xuICAgICAgcmV0dXJuIHhocjtcbiAgICB9O1xuICAgIHhoci5taW1lVHlwZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBtaW1lVHlwZTtcbiAgICAgIG1pbWVUeXBlID0gdmFsdWUgPT0gbnVsbCA/IG51bGwgOiB2YWx1ZSArIFwiXCI7XG4gICAgICByZXR1cm4geGhyO1xuICAgIH07XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiByZXNwb25zZVR5cGU7XG4gICAgICByZXNwb25zZVR5cGUgPSB2YWx1ZTtcbiAgICAgIHJldHVybiB4aHI7XG4gICAgfTtcbiAgICB4aHIucmVzcG9uc2UgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmVzcG9uc2UgPSB2YWx1ZTtcbiAgICAgIHJldHVybiB4aHI7XG4gICAgfTtcbiAgICBbIFwiZ2V0XCIsIFwicG9zdFwiIF0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHhoclttZXRob2RdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB4aHIuc2VuZC5hcHBseSh4aHIsIFsgbWV0aG9kIF0uY29uY2F0KGQzX2FycmF5KGFyZ3VtZW50cykpKTtcbiAgICAgIH07XG4gICAgfSk7XG4gICAgeGhyLnNlbmQgPSBmdW5jdGlvbihtZXRob2QsIGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgZGF0YSA9PT0gXCJmdW5jdGlvblwiKSBjYWxsYmFjayA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICAgICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICAgIGlmIChtaW1lVHlwZSAhPSBudWxsICYmICEoXCJhY2NlcHRcIiBpbiBoZWFkZXJzKSkgaGVhZGVyc1tcImFjY2VwdFwiXSA9IG1pbWVUeXBlICsgXCIsKi8qXCI7XG4gICAgICBpZiAocmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKSBmb3IgKHZhciBuYW1lIGluIGhlYWRlcnMpIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihuYW1lLCBoZWFkZXJzW25hbWVdKTtcbiAgICAgIGlmIChtaW1lVHlwZSAhPSBudWxsICYmIHJlcXVlc3Qub3ZlcnJpZGVNaW1lVHlwZSkgcmVxdWVzdC5vdmVycmlkZU1pbWVUeXBlKG1pbWVUeXBlKTtcbiAgICAgIGlmIChyZXNwb25zZVR5cGUgIT0gbnVsbCkgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGU7XG4gICAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCkgeGhyLm9uKFwiZXJyb3JcIiwgY2FsbGJhY2spLm9uKFwibG9hZFwiLCBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcXVlc3QpO1xuICAgICAgfSk7XG4gICAgICBkaXNwYXRjaC5iZWZvcmVzZW5kLmNhbGwoeGhyLCByZXF1ZXN0KTtcbiAgICAgIHJlcXVlc3Quc2VuZChkYXRhID09IG51bGwgPyBudWxsIDogZGF0YSk7XG4gICAgICByZXR1cm4geGhyO1xuICAgIH07XG4gICAgeGhyLmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICByZXR1cm4geGhyO1xuICAgIH07XG4gICAgZDMucmViaW5kKHhociwgZGlzcGF0Y2gsIFwib25cIik7XG4gICAgcmV0dXJuIGNhbGxiYWNrID09IG51bGwgPyB4aHIgOiB4aHIuZ2V0KGQzX3hocl9maXhDYWxsYmFjayhjYWxsYmFjaykpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3hocl9maXhDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHJldHVybiBjYWxsYmFjay5sZW5ndGggPT09IDEgPyBmdW5jdGlvbihlcnJvciwgcmVxdWVzdCkge1xuICAgICAgY2FsbGJhY2soZXJyb3IgPT0gbnVsbCA/IHJlcXVlc3QgOiBudWxsKTtcbiAgICB9IDogY2FsbGJhY2s7XG4gIH1cbiAgZnVuY3Rpb24gZDNfeGhySGFzUmVzcG9uc2UocmVxdWVzdCkge1xuICAgIHZhciB0eXBlID0gcmVxdWVzdC5yZXNwb25zZVR5cGU7XG4gICAgcmV0dXJuIHR5cGUgJiYgdHlwZSAhPT0gXCJ0ZXh0XCIgPyByZXF1ZXN0LnJlc3BvbnNlIDogcmVxdWVzdC5yZXNwb25zZVRleHQ7XG4gIH1cbiAgZDMuZHN2ID0gZnVuY3Rpb24oZGVsaW1pdGVyLCBtaW1lVHlwZSkge1xuICAgIHZhciByZUZvcm1hdCA9IG5ldyBSZWdFeHAoJ1tcIicgKyBkZWxpbWl0ZXIgKyBcIlxcbl1cIiksIGRlbGltaXRlckNvZGUgPSBkZWxpbWl0ZXIuY2hhckNvZGVBdCgwKTtcbiAgICBmdW5jdGlvbiBkc3YodXJsLCByb3csIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIGNhbGxiYWNrID0gcm93LCByb3cgPSBudWxsO1xuICAgICAgdmFyIHhociA9IGQzX3hocih1cmwsIG1pbWVUeXBlLCByb3cgPT0gbnVsbCA/IHJlc3BvbnNlIDogdHlwZWRSZXNwb25zZShyb3cpLCBjYWxsYmFjayk7XG4gICAgICB4aHIucm93ID0gZnVuY3Rpb24oXykge1xuICAgICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHhoci5yZXNwb25zZSgocm93ID0gXykgPT0gbnVsbCA/IHJlc3BvbnNlIDogdHlwZWRSZXNwb25zZShfKSkgOiByb3c7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHhocjtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzcG9uc2UocmVxdWVzdCkge1xuICAgICAgcmV0dXJuIGRzdi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHR5cGVkUmVzcG9uc2UoZikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIGRzdi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCwgZik7XG4gICAgICB9O1xuICAgIH1cbiAgICBkc3YucGFyc2UgPSBmdW5jdGlvbih0ZXh0LCBmKSB7XG4gICAgICB2YXIgbztcbiAgICAgIHJldHVybiBkc3YucGFyc2VSb3dzKHRleHQsIGZ1bmN0aW9uKHJvdywgaSkge1xuICAgICAgICBpZiAobykgcmV0dXJuIG8ocm93LCBpIC0gMSk7XG4gICAgICAgIHZhciBhID0gbmV3IEZ1bmN0aW9uKFwiZFwiLCBcInJldHVybiB7XCIgKyByb3cubWFwKGZ1bmN0aW9uKG5hbWUsIGkpIHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobmFtZSkgKyBcIjogZFtcIiArIGkgKyBcIl1cIjtcbiAgICAgICAgfSkuam9pbihcIixcIikgKyBcIn1cIik7XG4gICAgICAgIG8gPSBmID8gZnVuY3Rpb24ocm93LCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGYoYShyb3cpLCBpKTtcbiAgICAgICAgfSA6IGE7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGRzdi5wYXJzZVJvd3MgPSBmdW5jdGlvbih0ZXh0LCBmKSB7XG4gICAgICB2YXIgRU9MID0ge30sIEVPRiA9IHt9LCByb3dzID0gW10sIE4gPSB0ZXh0Lmxlbmd0aCwgSSA9IDAsIG4gPSAwLCB0LCBlb2w7XG4gICAgICBmdW5jdGlvbiB0b2tlbigpIHtcbiAgICAgICAgaWYgKEkgPj0gTikgcmV0dXJuIEVPRjtcbiAgICAgICAgaWYgKGVvbCkgcmV0dXJuIGVvbCA9IGZhbHNlLCBFT0w7XG4gICAgICAgIHZhciBqID0gSTtcbiAgICAgICAgaWYgKHRleHQuY2hhckNvZGVBdChqKSA9PT0gMzQpIHtcbiAgICAgICAgICB2YXIgaSA9IGo7XG4gICAgICAgICAgd2hpbGUgKGkrKyA8IE4pIHtcbiAgICAgICAgICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQoaSkgPT09IDM0KSB7XG4gICAgICAgICAgICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQoaSArIDEpICE9PSAzNCkgYnJlYWs7XG4gICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgSSA9IGkgKyAyO1xuICAgICAgICAgIHZhciBjID0gdGV4dC5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgICBpZiAoYyA9PT0gMTMpIHtcbiAgICAgICAgICAgIGVvbCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGV4dC5jaGFyQ29kZUF0KGkgKyAyKSA9PT0gMTApICsrSTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGMgPT09IDEwKSB7XG4gICAgICAgICAgICBlb2wgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGV4dC5zbGljZShqICsgMSwgaSkucmVwbGFjZSgvXCJcIi9nLCAnXCInKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoSSA8IE4pIHtcbiAgICAgICAgICB2YXIgYyA9IHRleHQuY2hhckNvZGVBdChJKyspLCBrID0gMTtcbiAgICAgICAgICBpZiAoYyA9PT0gMTApIGVvbCA9IHRydWU7IGVsc2UgaWYgKGMgPT09IDEzKSB7XG4gICAgICAgICAgICBlb2wgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRleHQuY2hhckNvZGVBdChJKSA9PT0gMTApICsrSSwgKytrO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYyAhPT0gZGVsaW1pdGVyQ29kZSkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHRleHQuc2xpY2UoaiwgSSAtIGspO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0LnNsaWNlKGopO1xuICAgICAgfVxuICAgICAgd2hpbGUgKCh0ID0gdG9rZW4oKSkgIT09IEVPRikge1xuICAgICAgICB2YXIgYSA9IFtdO1xuICAgICAgICB3aGlsZSAodCAhPT0gRU9MICYmIHQgIT09IEVPRikge1xuICAgICAgICAgIGEucHVzaCh0KTtcbiAgICAgICAgICB0ID0gdG9rZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZiAmJiAoYSA9IGYoYSwgbisrKSkgPT0gbnVsbCkgY29udGludWU7XG4gICAgICAgIHJvd3MucHVzaChhKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByb3dzO1xuICAgIH07XG4gICAgZHN2LmZvcm1hdCA9IGZ1bmN0aW9uKHJvd3MpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd3NbMF0pKSByZXR1cm4gZHN2LmZvcm1hdFJvd3Mocm93cyk7XG4gICAgICB2YXIgZmllbGRTZXQgPSBuZXcgZDNfU2V0KCksIGZpZWxkcyA9IFtdO1xuICAgICAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uKHJvdykge1xuICAgICAgICBmb3IgKHZhciBmaWVsZCBpbiByb3cpIHtcbiAgICAgICAgICBpZiAoIWZpZWxkU2V0LmhhcyhmaWVsZCkpIHtcbiAgICAgICAgICAgIGZpZWxkcy5wdXNoKGZpZWxkU2V0LmFkZChmaWVsZCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gWyBmaWVsZHMubWFwKGZvcm1hdFZhbHVlKS5qb2luKGRlbGltaXRlcikgXS5jb25jYXQocm93cy5tYXAoZnVuY3Rpb24ocm93KSB7XG4gICAgICAgIHJldHVybiBmaWVsZHMubWFwKGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgcmV0dXJuIGZvcm1hdFZhbHVlKHJvd1tmaWVsZF0pO1xuICAgICAgICB9KS5qb2luKGRlbGltaXRlcik7XG4gICAgICB9KSkuam9pbihcIlxcblwiKTtcbiAgICB9O1xuICAgIGRzdi5mb3JtYXRSb3dzID0gZnVuY3Rpb24ocm93cykge1xuICAgICAgcmV0dXJuIHJvd3MubWFwKGZvcm1hdFJvdykuam9pbihcIlxcblwiKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGZvcm1hdFJvdyhyb3cpIHtcbiAgICAgIHJldHVybiByb3cubWFwKGZvcm1hdFZhbHVlKS5qb2luKGRlbGltaXRlcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvcm1hdFZhbHVlKHRleHQpIHtcbiAgICAgIHJldHVybiByZUZvcm1hdC50ZXN0KHRleHQpID8gJ1wiJyArIHRleHQucmVwbGFjZSgvXFxcIi9nLCAnXCJcIicpICsgJ1wiJyA6IHRleHQ7XG4gICAgfVxuICAgIHJldHVybiBkc3Y7XG4gIH07XG4gIGQzLmNzdiA9IGQzLmRzdihcIixcIiwgXCJ0ZXh0L2NzdlwiKTtcbiAgZDMudHN2ID0gZDMuZHN2KFwiXHRcIiwgXCJ0ZXh0L3RhYi1zZXBhcmF0ZWQtdmFsdWVzXCIpO1xuICB2YXIgZDNfdGltZXJfcXVldWVIZWFkLCBkM190aW1lcl9xdWV1ZVRhaWwsIGQzX3RpbWVyX2ludGVydmFsLCBkM190aW1lcl90aW1lb3V0LCBkM190aW1lcl9mcmFtZSA9IHRoaXNbZDNfdmVuZG9yU3ltYm9sKHRoaXMsIFwicmVxdWVzdEFuaW1hdGlvbkZyYW1lXCIpXSB8fCBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIDE3KTtcbiAgfTtcbiAgZDMudGltZXIgPSBmdW5jdGlvbigpIHtcbiAgICBkM190aW1lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuICBmdW5jdGlvbiBkM190aW1lcihjYWxsYmFjaywgZGVsYXksIHRoZW4pIHtcbiAgICB2YXIgbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKG4gPCAyKSBkZWxheSA9IDA7XG4gICAgaWYgKG4gPCAzKSB0aGVuID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgdGltZSA9IHRoZW4gKyBkZWxheSwgdGltZXIgPSB7XG4gICAgICBjOiBjYWxsYmFjayxcbiAgICAgIHQ6IHRpbWUsXG4gICAgICBuOiBudWxsXG4gICAgfTtcbiAgICBpZiAoZDNfdGltZXJfcXVldWVUYWlsKSBkM190aW1lcl9xdWV1ZVRhaWwubiA9IHRpbWVyOyBlbHNlIGQzX3RpbWVyX3F1ZXVlSGVhZCA9IHRpbWVyO1xuICAgIGQzX3RpbWVyX3F1ZXVlVGFpbCA9IHRpbWVyO1xuICAgIGlmICghZDNfdGltZXJfaW50ZXJ2YWwpIHtcbiAgICAgIGQzX3RpbWVyX3RpbWVvdXQgPSBjbGVhclRpbWVvdXQoZDNfdGltZXJfdGltZW91dCk7XG4gICAgICBkM190aW1lcl9pbnRlcnZhbCA9IDE7XG4gICAgICBkM190aW1lcl9mcmFtZShkM190aW1lcl9zdGVwKTtcbiAgICB9XG4gICAgcmV0dXJuIHRpbWVyO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVyX3N0ZXAoKSB7XG4gICAgdmFyIG5vdyA9IGQzX3RpbWVyX21hcmsoKSwgZGVsYXkgPSBkM190aW1lcl9zd2VlcCgpIC0gbm93O1xuICAgIGlmIChkZWxheSA+IDI0KSB7XG4gICAgICBpZiAoaXNGaW5pdGUoZGVsYXkpKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChkM190aW1lcl90aW1lb3V0KTtcbiAgICAgICAgZDNfdGltZXJfdGltZW91dCA9IHNldFRpbWVvdXQoZDNfdGltZXJfc3RlcCwgZGVsYXkpO1xuICAgICAgfVxuICAgICAgZDNfdGltZXJfaW50ZXJ2YWwgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBkM190aW1lcl9pbnRlcnZhbCA9IDE7XG4gICAgICBkM190aW1lcl9mcmFtZShkM190aW1lcl9zdGVwKTtcbiAgICB9XG4gIH1cbiAgZDMudGltZXIuZmx1c2ggPSBmdW5jdGlvbigpIHtcbiAgICBkM190aW1lcl9tYXJrKCk7XG4gICAgZDNfdGltZXJfc3dlZXAoKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfdGltZXJfbWFyaygpIHtcbiAgICB2YXIgbm93ID0gRGF0ZS5ub3coKSwgdGltZXIgPSBkM190aW1lcl9xdWV1ZUhlYWQ7XG4gICAgd2hpbGUgKHRpbWVyKSB7XG4gICAgICBpZiAobm93ID49IHRpbWVyLnQgJiYgdGltZXIuYyhub3cgLSB0aW1lci50KSkgdGltZXIuYyA9IG51bGw7XG4gICAgICB0aW1lciA9IHRpbWVyLm47XG4gICAgfVxuICAgIHJldHVybiBub3c7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZXJfc3dlZXAoKSB7XG4gICAgdmFyIHQwLCB0MSA9IGQzX3RpbWVyX3F1ZXVlSGVhZCwgdGltZSA9IEluZmluaXR5O1xuICAgIHdoaWxlICh0MSkge1xuICAgICAgaWYgKHQxLmMpIHtcbiAgICAgICAgaWYgKHQxLnQgPCB0aW1lKSB0aW1lID0gdDEudDtcbiAgICAgICAgdDEgPSAodDAgPSB0MSkubjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHQxID0gdDAgPyB0MC5uID0gdDEubiA6IGQzX3RpbWVyX3F1ZXVlSGVhZCA9IHQxLm47XG4gICAgICB9XG4gICAgfVxuICAgIGQzX3RpbWVyX3F1ZXVlVGFpbCA9IHQwO1xuICAgIHJldHVybiB0aW1lO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2Zvcm1hdF9wcmVjaXNpb24oeCwgcCkge1xuICAgIHJldHVybiBwIC0gKHggPyBNYXRoLmNlaWwoTWF0aC5sb2coeCkgLyBNYXRoLkxOMTApIDogMSk7XG4gIH1cbiAgZDMucm91bmQgPSBmdW5jdGlvbih4LCBuKSB7XG4gICAgcmV0dXJuIG4gPyBNYXRoLnJvdW5kKHggKiAobiA9IE1hdGgucG93KDEwLCBuKSkpIC8gbiA6IE1hdGgucm91bmQoeCk7XG4gIH07XG4gIHZhciBkM19mb3JtYXRQcmVmaXhlcyA9IFsgXCJ5XCIsIFwielwiLCBcImFcIiwgXCJmXCIsIFwicFwiLCBcIm5cIiwgXCLCtVwiLCBcIm1cIiwgXCJcIiwgXCJrXCIsIFwiTVwiLCBcIkdcIiwgXCJUXCIsIFwiUFwiLCBcIkVcIiwgXCJaXCIsIFwiWVwiIF0ubWFwKGQzX2Zvcm1hdFByZWZpeCk7XG4gIGQzLmZvcm1hdFByZWZpeCA9IGZ1bmN0aW9uKHZhbHVlLCBwcmVjaXNpb24pIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgaWYgKHZhbHVlID0gK3ZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPCAwKSB2YWx1ZSAqPSAtMTtcbiAgICAgIGlmIChwcmVjaXNpb24pIHZhbHVlID0gZDMucm91bmQodmFsdWUsIGQzX2Zvcm1hdF9wcmVjaXNpb24odmFsdWUsIHByZWNpc2lvbikpO1xuICAgICAgaSA9IDEgKyBNYXRoLmZsb29yKDFlLTEyICsgTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjEwKTtcbiAgICAgIGkgPSBNYXRoLm1heCgtMjQsIE1hdGgubWluKDI0LCBNYXRoLmZsb29yKChpIC0gMSkgLyAzKSAqIDMpKTtcbiAgICB9XG4gICAgcmV0dXJuIGQzX2Zvcm1hdFByZWZpeGVzWzggKyBpIC8gM107XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2Zvcm1hdFByZWZpeChkLCBpKSB7XG4gICAgdmFyIGsgPSBNYXRoLnBvdygxMCwgYWJzKDggLSBpKSAqIDMpO1xuICAgIHJldHVybiB7XG4gICAgICBzY2FsZTogaSA+IDggPyBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkIC8gaztcbiAgICAgIH0gOiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkICogaztcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6IGRcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xvY2FsZV9udW1iZXJGb3JtYXQobG9jYWxlKSB7XG4gICAgdmFyIGxvY2FsZV9kZWNpbWFsID0gbG9jYWxlLmRlY2ltYWwsIGxvY2FsZV90aG91c2FuZHMgPSBsb2NhbGUudGhvdXNhbmRzLCBsb2NhbGVfZ3JvdXBpbmcgPSBsb2NhbGUuZ3JvdXBpbmcsIGxvY2FsZV9jdXJyZW5jeSA9IGxvY2FsZS5jdXJyZW5jeSwgZm9ybWF0R3JvdXAgPSBsb2NhbGVfZ3JvdXBpbmcgJiYgbG9jYWxlX3Rob3VzYW5kcyA/IGZ1bmN0aW9uKHZhbHVlLCB3aWR0aCkge1xuICAgICAgdmFyIGkgPSB2YWx1ZS5sZW5ndGgsIHQgPSBbXSwgaiA9IDAsIGcgPSBsb2NhbGVfZ3JvdXBpbmdbMF0sIGxlbmd0aCA9IDA7XG4gICAgICB3aGlsZSAoaSA+IDAgJiYgZyA+IDApIHtcbiAgICAgICAgaWYgKGxlbmd0aCArIGcgKyAxID4gd2lkdGgpIGcgPSBNYXRoLm1heCgxLCB3aWR0aCAtIGxlbmd0aCk7XG4gICAgICAgIHQucHVzaCh2YWx1ZS5zdWJzdHJpbmcoaSAtPSBnLCBpICsgZykpO1xuICAgICAgICBpZiAoKGxlbmd0aCArPSBnICsgMSkgPiB3aWR0aCkgYnJlYWs7XG4gICAgICAgIGcgPSBsb2NhbGVfZ3JvdXBpbmdbaiA9IChqICsgMSkgJSBsb2NhbGVfZ3JvdXBpbmcubGVuZ3RoXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0LnJldmVyc2UoKS5qb2luKGxvY2FsZV90aG91c2FuZHMpO1xuICAgIH0gOiBkM19pZGVudGl0eTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3BlY2lmaWVyKSB7XG4gICAgICB2YXIgbWF0Y2ggPSBkM19mb3JtYXRfcmUuZXhlYyhzcGVjaWZpZXIpLCBmaWxsID0gbWF0Y2hbMV0gfHwgXCIgXCIsIGFsaWduID0gbWF0Y2hbMl0gfHwgXCI+XCIsIHNpZ24gPSBtYXRjaFszXSB8fCBcIi1cIiwgc3ltYm9sID0gbWF0Y2hbNF0gfHwgXCJcIiwgemZpbGwgPSBtYXRjaFs1XSwgd2lkdGggPSArbWF0Y2hbNl0sIGNvbW1hID0gbWF0Y2hbN10sIHByZWNpc2lvbiA9IG1hdGNoWzhdLCB0eXBlID0gbWF0Y2hbOV0sIHNjYWxlID0gMSwgcHJlZml4ID0gXCJcIiwgc3VmZml4ID0gXCJcIiwgaW50ZWdlciA9IGZhbHNlLCBleHBvbmVudCA9IHRydWU7XG4gICAgICBpZiAocHJlY2lzaW9uKSBwcmVjaXNpb24gPSArcHJlY2lzaW9uLnN1YnN0cmluZygxKTtcbiAgICAgIGlmICh6ZmlsbCB8fCBmaWxsID09PSBcIjBcIiAmJiBhbGlnbiA9PT0gXCI9XCIpIHtcbiAgICAgICAgemZpbGwgPSBmaWxsID0gXCIwXCI7XG4gICAgICAgIGFsaWduID0gXCI9XCI7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICBjYXNlIFwiblwiOlxuICAgICAgICBjb21tYSA9IHRydWU7XG4gICAgICAgIHR5cGUgPSBcImdcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICBjYXNlIFwiJVwiOlxuICAgICAgICBzY2FsZSA9IDEwMDtcbiAgICAgICAgc3VmZml4ID0gXCIlXCI7XG4gICAgICAgIHR5cGUgPSBcImZcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICBjYXNlIFwicFwiOlxuICAgICAgICBzY2FsZSA9IDEwMDtcbiAgICAgICAgc3VmZml4ID0gXCIlXCI7XG4gICAgICAgIHR5cGUgPSBcInJcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICBjYXNlIFwiYlwiOlxuICAgICAgIGNhc2UgXCJvXCI6XG4gICAgICAgY2FzZSBcInhcIjpcbiAgICAgICBjYXNlIFwiWFwiOlxuICAgICAgICBpZiAoc3ltYm9sID09PSBcIiNcIikgcHJlZml4ID0gXCIwXCIgKyB0eXBlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICBleHBvbmVudCA9IGZhbHNlO1xuXG4gICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgaW50ZWdlciA9IHRydWU7XG4gICAgICAgIHByZWNpc2lvbiA9IDA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgc2NhbGUgPSAtMTtcbiAgICAgICAgdHlwZSA9IFwiclwiO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChzeW1ib2wgPT09IFwiJFwiKSBwcmVmaXggPSBsb2NhbGVfY3VycmVuY3lbMF0sIHN1ZmZpeCA9IGxvY2FsZV9jdXJyZW5jeVsxXTtcbiAgICAgIGlmICh0eXBlID09IFwiclwiICYmICFwcmVjaXNpb24pIHR5cGUgPSBcImdcIjtcbiAgICAgIGlmIChwcmVjaXNpb24gIT0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZSA9PSBcImdcIikgcHJlY2lzaW9uID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oMjEsIHByZWNpc2lvbikpOyBlbHNlIGlmICh0eXBlID09IFwiZVwiIHx8IHR5cGUgPT0gXCJmXCIpIHByZWNpc2lvbiA9IE1hdGgubWF4KDAsIE1hdGgubWluKDIwLCBwcmVjaXNpb24pKTtcbiAgICAgIH1cbiAgICAgIHR5cGUgPSBkM19mb3JtYXRfdHlwZXMuZ2V0KHR5cGUpIHx8IGQzX2Zvcm1hdF90eXBlRGVmYXVsdDtcbiAgICAgIHZhciB6Y29tbWEgPSB6ZmlsbCAmJiBjb21tYTtcbiAgICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB2YXIgZnVsbFN1ZmZpeCA9IHN1ZmZpeDtcbiAgICAgICAgaWYgKGludGVnZXIgJiYgdmFsdWUgJSAxKSByZXR1cm4gXCJcIjtcbiAgICAgICAgdmFyIG5lZ2F0aXZlID0gdmFsdWUgPCAwIHx8IHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDAgPyAodmFsdWUgPSAtdmFsdWUsIFwiLVwiKSA6IHNpZ24gPT09IFwiLVwiID8gXCJcIiA6IHNpZ247XG4gICAgICAgIGlmIChzY2FsZSA8IDApIHtcbiAgICAgICAgICB2YXIgdW5pdCA9IGQzLmZvcm1hdFByZWZpeCh2YWx1ZSwgcHJlY2lzaW9uKTtcbiAgICAgICAgICB2YWx1ZSA9IHVuaXQuc2NhbGUodmFsdWUpO1xuICAgICAgICAgIGZ1bGxTdWZmaXggPSB1bml0LnN5bWJvbCArIHN1ZmZpeDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSAqPSBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IHR5cGUodmFsdWUsIHByZWNpc2lvbik7XG4gICAgICAgIHZhciBpID0gdmFsdWUubGFzdEluZGV4T2YoXCIuXCIpLCBiZWZvcmUsIGFmdGVyO1xuICAgICAgICBpZiAoaSA8IDApIHtcbiAgICAgICAgICB2YXIgaiA9IGV4cG9uZW50ID8gdmFsdWUubGFzdEluZGV4T2YoXCJlXCIpIDogLTE7XG4gICAgICAgICAgaWYgKGogPCAwKSBiZWZvcmUgPSB2YWx1ZSwgYWZ0ZXIgPSBcIlwiOyBlbHNlIGJlZm9yZSA9IHZhbHVlLnN1YnN0cmluZygwLCBqKSwgYWZ0ZXIgPSB2YWx1ZS5zdWJzdHJpbmcoaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmVmb3JlID0gdmFsdWUuc3Vic3RyaW5nKDAsIGkpO1xuICAgICAgICAgIGFmdGVyID0gbG9jYWxlX2RlY2ltYWwgKyB2YWx1ZS5zdWJzdHJpbmcoaSArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghemZpbGwgJiYgY29tbWEpIGJlZm9yZSA9IGZvcm1hdEdyb3VwKGJlZm9yZSwgSW5maW5pdHkpO1xuICAgICAgICB2YXIgbGVuZ3RoID0gcHJlZml4Lmxlbmd0aCArIGJlZm9yZS5sZW5ndGggKyBhZnRlci5sZW5ndGggKyAoemNvbW1hID8gMCA6IG5lZ2F0aXZlLmxlbmd0aCksIHBhZGRpbmcgPSBsZW5ndGggPCB3aWR0aCA/IG5ldyBBcnJheShsZW5ndGggPSB3aWR0aCAtIGxlbmd0aCArIDEpLmpvaW4oZmlsbCkgOiBcIlwiO1xuICAgICAgICBpZiAoemNvbW1hKSBiZWZvcmUgPSBmb3JtYXRHcm91cChwYWRkaW5nICsgYmVmb3JlLCBwYWRkaW5nLmxlbmd0aCA/IHdpZHRoIC0gYWZ0ZXIubGVuZ3RoIDogSW5maW5pdHkpO1xuICAgICAgICBuZWdhdGl2ZSArPSBwcmVmaXg7XG4gICAgICAgIHZhbHVlID0gYmVmb3JlICsgYWZ0ZXI7XG4gICAgICAgIHJldHVybiAoYWxpZ24gPT09IFwiPFwiID8gbmVnYXRpdmUgKyB2YWx1ZSArIHBhZGRpbmcgOiBhbGlnbiA9PT0gXCI+XCIgPyBwYWRkaW5nICsgbmVnYXRpdmUgKyB2YWx1ZSA6IGFsaWduID09PSBcIl5cIiA/IHBhZGRpbmcuc3Vic3RyaW5nKDAsIGxlbmd0aCA+Pj0gMSkgKyBuZWdhdGl2ZSArIHZhbHVlICsgcGFkZGluZy5zdWJzdHJpbmcobGVuZ3RoKSA6IG5lZ2F0aXZlICsgKHpjb21tYSA/IHZhbHVlIDogcGFkZGluZyArIHZhbHVlKSkgKyBmdWxsU3VmZml4O1xuICAgICAgfTtcbiAgICB9O1xuICB9XG4gIHZhciBkM19mb3JtYXRfcmUgPSAvKD86KFtee10pPyhbPD49Xl0pKT8oWytcXC0gXSk/KFskI10pPygwKT8oXFxkKyk/KCwpPyhcXC4tP1xcZCspPyhbYS16JV0pPy9pO1xuICB2YXIgZDNfZm9ybWF0X3R5cGVzID0gZDMubWFwKHtcbiAgICBiOiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4geC50b1N0cmluZygyKTtcbiAgICB9LFxuICAgIGM6IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHgpO1xuICAgIH0sXG4gICAgbzogZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHgudG9TdHJpbmcoOCk7XG4gICAgfSxcbiAgICB4OiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4geC50b1N0cmluZygxNik7XG4gICAgfSxcbiAgICBYOiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4geC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgICB9LFxuICAgIGc6IGZ1bmN0aW9uKHgsIHApIHtcbiAgICAgIHJldHVybiB4LnRvUHJlY2lzaW9uKHApO1xuICAgIH0sXG4gICAgZTogZnVuY3Rpb24oeCwgcCkge1xuICAgICAgcmV0dXJuIHgudG9FeHBvbmVudGlhbChwKTtcbiAgICB9LFxuICAgIGY6IGZ1bmN0aW9uKHgsIHApIHtcbiAgICAgIHJldHVybiB4LnRvRml4ZWQocCk7XG4gICAgfSxcbiAgICByOiBmdW5jdGlvbih4LCBwKSB7XG4gICAgICByZXR1cm4gKHggPSBkMy5yb3VuZCh4LCBkM19mb3JtYXRfcHJlY2lzaW9uKHgsIHApKSkudG9GaXhlZChNYXRoLm1heCgwLCBNYXRoLm1pbigyMCwgZDNfZm9ybWF0X3ByZWNpc2lvbih4ICogKDEgKyAxZS0xNSksIHApKSkpO1xuICAgIH1cbiAgfSk7XG4gIGZ1bmN0aW9uIGQzX2Zvcm1hdF90eXBlRGVmYXVsdCh4KSB7XG4gICAgcmV0dXJuIHggKyBcIlwiO1xuICB9XG4gIHZhciBkM190aW1lID0gZDMudGltZSA9IHt9LCBkM19kYXRlID0gRGF0ZTtcbiAgZnVuY3Rpb24gZDNfZGF0ZV91dGMoKSB7XG4gICAgdGhpcy5fID0gbmV3IERhdGUoYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBEYXRlLlVUQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogYXJndW1lbnRzWzBdKTtcbiAgfVxuICBkM19kYXRlX3V0Yy5wcm90b3R5cGUgPSB7XG4gICAgZ2V0RGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fLmdldFVUQ0RhdGUoKTtcbiAgICB9LFxuICAgIGdldERheTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fLmdldFVUQ0RheSgpO1xuICAgIH0sXG4gICAgZ2V0RnVsbFllYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuXy5nZXRVVENGdWxsWWVhcigpO1xuICAgIH0sXG4gICAgZ2V0SG91cnM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuXy5nZXRVVENIb3VycygpO1xuICAgIH0sXG4gICAgZ2V0TWlsbGlzZWNvbmRzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl8uZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgfSxcbiAgICBnZXRNaW51dGVzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl8uZ2V0VVRDTWludXRlcygpO1xuICAgIH0sXG4gICAgZ2V0TW9udGg6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuXy5nZXRVVENNb250aCgpO1xuICAgIH0sXG4gICAgZ2V0U2Vjb25kczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fLmdldFVUQ1NlY29uZHMoKTtcbiAgICB9LFxuICAgIGdldFRpbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuXy5nZXRUaW1lKCk7XG4gICAgfSxcbiAgICBnZXRUaW1lem9uZU9mZnNldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9LFxuICAgIHZhbHVlT2Y6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuXy52YWx1ZU9mKCk7XG4gICAgfSxcbiAgICBzZXREYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIGQzX3RpbWVfcHJvdG90eXBlLnNldFVUQ0RhdGUuYXBwbHkodGhpcy5fLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgc2V0RGF5OiBmdW5jdGlvbigpIHtcbiAgICAgIGQzX3RpbWVfcHJvdG90eXBlLnNldFVUQ0RheS5hcHBseSh0aGlzLl8sIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBzZXRGdWxsWWVhcjogZnVuY3Rpb24oKSB7XG4gICAgICBkM190aW1lX3Byb3RvdHlwZS5zZXRVVENGdWxsWWVhci5hcHBseSh0aGlzLl8sIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBzZXRIb3VyczogZnVuY3Rpb24oKSB7XG4gICAgICBkM190aW1lX3Byb3RvdHlwZS5zZXRVVENIb3Vycy5hcHBseSh0aGlzLl8sIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBzZXRNaWxsaXNlY29uZHM6IGZ1bmN0aW9uKCkge1xuICAgICAgZDNfdGltZV9wcm90b3R5cGUuc2V0VVRDTWlsbGlzZWNvbmRzLmFwcGx5KHRoaXMuXywgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHNldE1pbnV0ZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgZDNfdGltZV9wcm90b3R5cGUuc2V0VVRDTWludXRlcy5hcHBseSh0aGlzLl8sIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBzZXRNb250aDogZnVuY3Rpb24oKSB7XG4gICAgICBkM190aW1lX3Byb3RvdHlwZS5zZXRVVENNb250aC5hcHBseSh0aGlzLl8sIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBzZXRTZWNvbmRzOiBmdW5jdGlvbigpIHtcbiAgICAgIGQzX3RpbWVfcHJvdG90eXBlLnNldFVUQ1NlY29uZHMuYXBwbHkodGhpcy5fLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgc2V0VGltZTogZnVuY3Rpb24oKSB7XG4gICAgICBkM190aW1lX3Byb3RvdHlwZS5zZXRUaW1lLmFwcGx5KHRoaXMuXywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG4gIHZhciBkM190aW1lX3Byb3RvdHlwZSA9IERhdGUucHJvdG90eXBlO1xuICBmdW5jdGlvbiBkM190aW1lX2ludGVydmFsKGxvY2FsLCBzdGVwLCBudW1iZXIpIHtcbiAgICBmdW5jdGlvbiByb3VuZChkYXRlKSB7XG4gICAgICB2YXIgZDAgPSBsb2NhbChkYXRlKSwgZDEgPSBvZmZzZXQoZDAsIDEpO1xuICAgICAgcmV0dXJuIGRhdGUgLSBkMCA8IGQxIC0gZGF0ZSA/IGQwIDogZDE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNlaWwoZGF0ZSkge1xuICAgICAgc3RlcChkYXRlID0gbG9jYWwobmV3IGQzX2RhdGUoZGF0ZSAtIDEpKSwgMSk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb2Zmc2V0KGRhdGUsIGspIHtcbiAgICAgIHN0ZXAoZGF0ZSA9IG5ldyBkM19kYXRlKCtkYXRlKSwgayk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmFuZ2UodDAsIHQxLCBkdCkge1xuICAgICAgdmFyIHRpbWUgPSBjZWlsKHQwKSwgdGltZXMgPSBbXTtcbiAgICAgIGlmIChkdCA+IDEpIHtcbiAgICAgICAgd2hpbGUgKHRpbWUgPCB0MSkge1xuICAgICAgICAgIGlmICghKG51bWJlcih0aW1lKSAlIGR0KSkgdGltZXMucHVzaChuZXcgRGF0ZSgrdGltZSkpO1xuICAgICAgICAgIHN0ZXAodGltZSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlICh0aW1lIDwgdDEpIHRpbWVzLnB1c2gobmV3IERhdGUoK3RpbWUpKSwgc3RlcCh0aW1lLCAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aW1lcztcbiAgICB9XG4gICAgZnVuY3Rpb24gcmFuZ2VfdXRjKHQwLCB0MSwgZHQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGQzX2RhdGUgPSBkM19kYXRlX3V0YztcbiAgICAgICAgdmFyIHV0YyA9IG5ldyBkM19kYXRlX3V0YygpO1xuICAgICAgICB1dGMuXyA9IHQwO1xuICAgICAgICByZXR1cm4gcmFuZ2UodXRjLCB0MSwgZHQpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgZDNfZGF0ZSA9IERhdGU7XG4gICAgICB9XG4gICAgfVxuICAgIGxvY2FsLmZsb29yID0gbG9jYWw7XG4gICAgbG9jYWwucm91bmQgPSByb3VuZDtcbiAgICBsb2NhbC5jZWlsID0gY2VpbDtcbiAgICBsb2NhbC5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgbG9jYWwucmFuZ2UgPSByYW5nZTtcbiAgICB2YXIgdXRjID0gbG9jYWwudXRjID0gZDNfdGltZV9pbnRlcnZhbF91dGMobG9jYWwpO1xuICAgIHV0Yy5mbG9vciA9IHV0YztcbiAgICB1dGMucm91bmQgPSBkM190aW1lX2ludGVydmFsX3V0Yyhyb3VuZCk7XG4gICAgdXRjLmNlaWwgPSBkM190aW1lX2ludGVydmFsX3V0YyhjZWlsKTtcbiAgICB1dGMub2Zmc2V0ID0gZDNfdGltZV9pbnRlcnZhbF91dGMob2Zmc2V0KTtcbiAgICB1dGMucmFuZ2UgPSByYW5nZV91dGM7XG4gICAgcmV0dXJuIGxvY2FsO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfaW50ZXJ2YWxfdXRjKG1ldGhvZCkge1xuICAgIHJldHVybiBmdW5jdGlvbihkYXRlLCBrKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkM19kYXRlID0gZDNfZGF0ZV91dGM7XG4gICAgICAgIHZhciB1dGMgPSBuZXcgZDNfZGF0ZV91dGMoKTtcbiAgICAgICAgdXRjLl8gPSBkYXRlO1xuICAgICAgICByZXR1cm4gbWV0aG9kKHV0YywgaykuXztcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGQzX2RhdGUgPSBEYXRlO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZDNfdGltZS55ZWFyID0gZDNfdGltZV9pbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgZGF0ZSA9IGQzX3RpbWUuZGF5KGRhdGUpO1xuICAgIGRhdGUuc2V0TW9udGgoMCwgMSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH0sIGZ1bmN0aW9uKGRhdGUsIG9mZnNldCkge1xuICAgIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpICsgb2Zmc2V0KTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIH0pO1xuICBkM190aW1lLnllYXJzID0gZDNfdGltZS55ZWFyLnJhbmdlO1xuICBkM190aW1lLnllYXJzLnV0YyA9IGQzX3RpbWUueWVhci51dGMucmFuZ2U7XG4gIGQzX3RpbWUuZGF5ID0gZDNfdGltZV9pbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgdmFyIGRheSA9IG5ldyBkM19kYXRlKDJlMywgMCk7XG4gICAgZGF5LnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSk7XG4gICAgcmV0dXJuIGRheTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgb2Zmc2V0KSB7XG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgb2Zmc2V0KTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldERhdGUoKSAtIDE7XG4gIH0pO1xuICBkM190aW1lLmRheXMgPSBkM190aW1lLmRheS5yYW5nZTtcbiAgZDNfdGltZS5kYXlzLnV0YyA9IGQzX3RpbWUuZGF5LnV0Yy5yYW5nZTtcbiAgZDNfdGltZS5kYXlPZlllYXIgPSBmdW5jdGlvbihkYXRlKSB7XG4gICAgdmFyIHllYXIgPSBkM190aW1lLnllYXIoZGF0ZSk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKGRhdGUgLSB5ZWFyIC0gKGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAtIHllYXIuZ2V0VGltZXpvbmVPZmZzZXQoKSkgKiA2ZTQpIC8gODY0ZTUpO1xuICB9O1xuICBbIFwic3VuZGF5XCIsIFwibW9uZGF5XCIsIFwidHVlc2RheVwiLCBcIndlZG5lc2RheVwiLCBcInRodXJzZGF5XCIsIFwiZnJpZGF5XCIsIFwic2F0dXJkYXlcIiBdLmZvckVhY2goZnVuY3Rpb24oZGF5LCBpKSB7XG4gICAgaSA9IDcgLSBpO1xuICAgIHZhciBpbnRlcnZhbCA9IGQzX3RpbWVbZGF5XSA9IGQzX3RpbWVfaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgICAgKGRhdGUgPSBkM190aW1lLmRheShkYXRlKSkuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIChkYXRlLmdldERheSgpICsgaSkgJSA3KTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH0sIGZ1bmN0aW9uKGRhdGUsIG9mZnNldCkge1xuICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgTWF0aC5mbG9vcihvZmZzZXQpICogNyk7XG4gICAgfSwgZnVuY3Rpb24oZGF0ZSkge1xuICAgICAgdmFyIGRheSA9IGQzX3RpbWUueWVhcihkYXRlKS5nZXREYXkoKTtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKChkM190aW1lLmRheU9mWWVhcihkYXRlKSArIChkYXkgKyBpKSAlIDcpIC8gNykgLSAoZGF5ICE9PSBpKTtcbiAgICB9KTtcbiAgICBkM190aW1lW2RheSArIFwic1wiXSA9IGludGVydmFsLnJhbmdlO1xuICAgIGQzX3RpbWVbZGF5ICsgXCJzXCJdLnV0YyA9IGludGVydmFsLnV0Yy5yYW5nZTtcbiAgICBkM190aW1lW2RheSArIFwiT2ZZZWFyXCJdID0gZnVuY3Rpb24oZGF0ZSkge1xuICAgICAgdmFyIGRheSA9IGQzX3RpbWUueWVhcihkYXRlKS5nZXREYXkoKTtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKChkM190aW1lLmRheU9mWWVhcihkYXRlKSArIChkYXkgKyBpKSAlIDcpIC8gNyk7XG4gICAgfTtcbiAgfSk7XG4gIGQzX3RpbWUud2VlayA9IGQzX3RpbWUuc3VuZGF5O1xuICBkM190aW1lLndlZWtzID0gZDNfdGltZS5zdW5kYXkucmFuZ2U7XG4gIGQzX3RpbWUud2Vla3MudXRjID0gZDNfdGltZS5zdW5kYXkudXRjLnJhbmdlO1xuICBkM190aW1lLndlZWtPZlllYXIgPSBkM190aW1lLnN1bmRheU9mWWVhcjtcbiAgZnVuY3Rpb24gZDNfbG9jYWxlX3RpbWVGb3JtYXQobG9jYWxlKSB7XG4gICAgdmFyIGxvY2FsZV9kYXRlVGltZSA9IGxvY2FsZS5kYXRlVGltZSwgbG9jYWxlX2RhdGUgPSBsb2NhbGUuZGF0ZSwgbG9jYWxlX3RpbWUgPSBsb2NhbGUudGltZSwgbG9jYWxlX3BlcmlvZHMgPSBsb2NhbGUucGVyaW9kcywgbG9jYWxlX2RheXMgPSBsb2NhbGUuZGF5cywgbG9jYWxlX3Nob3J0RGF5cyA9IGxvY2FsZS5zaG9ydERheXMsIGxvY2FsZV9tb250aHMgPSBsb2NhbGUubW9udGhzLCBsb2NhbGVfc2hvcnRNb250aHMgPSBsb2NhbGUuc2hvcnRNb250aHM7XG4gICAgZnVuY3Rpb24gZDNfdGltZV9mb3JtYXQodGVtcGxhdGUpIHtcbiAgICAgIHZhciBuID0gdGVtcGxhdGUubGVuZ3RoO1xuICAgICAgZnVuY3Rpb24gZm9ybWF0KGRhdGUpIHtcbiAgICAgICAgdmFyIHN0cmluZyA9IFtdLCBpID0gLTEsIGogPSAwLCBjLCBwLCBmO1xuICAgICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICAgIGlmICh0ZW1wbGF0ZS5jaGFyQ29kZUF0KGkpID09PSAzNykge1xuICAgICAgICAgICAgc3RyaW5nLnB1c2godGVtcGxhdGUuc2xpY2UoaiwgaSkpO1xuICAgICAgICAgICAgaWYgKChwID0gZDNfdGltZV9mb3JtYXRQYWRzW2MgPSB0ZW1wbGF0ZS5jaGFyQXQoKytpKV0pICE9IG51bGwpIGMgPSB0ZW1wbGF0ZS5jaGFyQXQoKytpKTtcbiAgICAgICAgICAgIGlmIChmID0gZDNfdGltZV9mb3JtYXRzW2NdKSBjID0gZihkYXRlLCBwID09IG51bGwgPyBjID09PSBcImVcIiA/IFwiIFwiIDogXCIwXCIgOiBwKTtcbiAgICAgICAgICAgIHN0cmluZy5wdXNoKGMpO1xuICAgICAgICAgICAgaiA9IGkgKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdHJpbmcucHVzaCh0ZW1wbGF0ZS5zbGljZShqLCBpKSk7XG4gICAgICAgIHJldHVybiBzdHJpbmcuam9pbihcIlwiKTtcbiAgICAgIH1cbiAgICAgIGZvcm1hdC5wYXJzZSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICB2YXIgZCA9IHtcbiAgICAgICAgICB5OiAxOTAwLFxuICAgICAgICAgIG06IDAsXG4gICAgICAgICAgZDogMSxcbiAgICAgICAgICBIOiAwLFxuICAgICAgICAgIE06IDAsXG4gICAgICAgICAgUzogMCxcbiAgICAgICAgICBMOiAwLFxuICAgICAgICAgIFo6IG51bGxcbiAgICAgICAgfSwgaSA9IGQzX3RpbWVfcGFyc2UoZCwgdGVtcGxhdGUsIHN0cmluZywgMCk7XG4gICAgICAgIGlmIChpICE9IHN0cmluZy5sZW5ndGgpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoXCJwXCIgaW4gZCkgZC5IID0gZC5IICUgMTIgKyBkLnAgKiAxMjtcbiAgICAgICAgdmFyIGxvY2FsWiA9IGQuWiAhPSBudWxsICYmIGQzX2RhdGUgIT09IGQzX2RhdGVfdXRjLCBkYXRlID0gbmV3IChsb2NhbFogPyBkM19kYXRlX3V0YyA6IGQzX2RhdGUpKCk7XG4gICAgICAgIGlmIChcImpcIiBpbiBkKSBkYXRlLnNldEZ1bGxZZWFyKGQueSwgMCwgZC5qKTsgZWxzZSBpZiAoXCJXXCIgaW4gZCB8fCBcIlVcIiBpbiBkKSB7XG4gICAgICAgICAgaWYgKCEoXCJ3XCIgaW4gZCkpIGQudyA9IFwiV1wiIGluIGQgPyAxIDogMDtcbiAgICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKGQueSwgMCwgMSk7XG4gICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcihkLnksIDAsIFwiV1wiIGluIGQgPyAoZC53ICsgNikgJSA3ICsgZC5XICogNyAtIChkYXRlLmdldERheSgpICsgNSkgJSA3IDogZC53ICsgZC5VICogNyAtIChkYXRlLmdldERheSgpICsgNikgJSA3KTtcbiAgICAgICAgfSBlbHNlIGRhdGUuc2V0RnVsbFllYXIoZC55LCBkLm0sIGQuZCk7XG4gICAgICAgIGRhdGUuc2V0SG91cnMoZC5IICsgKGQuWiAvIDEwMCB8IDApLCBkLk0gKyBkLlogJSAxMDAsIGQuUywgZC5MKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsWiA/IGRhdGUuXyA6IGRhdGU7XG4gICAgICB9O1xuICAgICAgZm9ybWF0LnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gZm9ybWF0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBkM190aW1lX3BhcnNlKGRhdGUsIHRlbXBsYXRlLCBzdHJpbmcsIGopIHtcbiAgICAgIHZhciBjLCBwLCB0LCBpID0gMCwgbiA9IHRlbXBsYXRlLmxlbmd0aCwgbSA9IHN0cmluZy5sZW5ndGg7XG4gICAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgICAgaWYgKGogPj0gbSkgcmV0dXJuIC0xO1xuICAgICAgICBjID0gdGVtcGxhdGUuY2hhckNvZGVBdChpKyspO1xuICAgICAgICBpZiAoYyA9PT0gMzcpIHtcbiAgICAgICAgICB0ID0gdGVtcGxhdGUuY2hhckF0KGkrKyk7XG4gICAgICAgICAgcCA9IGQzX3RpbWVfcGFyc2Vyc1t0IGluIGQzX3RpbWVfZm9ybWF0UGFkcyA/IHRlbXBsYXRlLmNoYXJBdChpKyspIDogdF07XG4gICAgICAgICAgaWYgKCFwIHx8IChqID0gcChkYXRlLCBzdHJpbmcsIGopKSA8IDApIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIGlmIChjICE9IHN0cmluZy5jaGFyQ29kZUF0KGorKykpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBqO1xuICAgIH1cbiAgICBkM190aW1lX2Zvcm1hdC51dGMgPSBmdW5jdGlvbih0ZW1wbGF0ZSkge1xuICAgICAgdmFyIGxvY2FsID0gZDNfdGltZV9mb3JtYXQodGVtcGxhdGUpO1xuICAgICAgZnVuY3Rpb24gZm9ybWF0KGRhdGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkM19kYXRlID0gZDNfZGF0ZV91dGM7XG4gICAgICAgICAgdmFyIHV0YyA9IG5ldyBkM19kYXRlKCk7XG4gICAgICAgICAgdXRjLl8gPSBkYXRlO1xuICAgICAgICAgIHJldHVybiBsb2NhbCh1dGMpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGQzX2RhdGUgPSBEYXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3JtYXQucGFyc2UgPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkM19kYXRlID0gZDNfZGF0ZV91dGM7XG4gICAgICAgICAgdmFyIGRhdGUgPSBsb2NhbC5wYXJzZShzdHJpbmcpO1xuICAgICAgICAgIHJldHVybiBkYXRlICYmIGRhdGUuXztcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBkM19kYXRlID0gRGF0ZTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZvcm1hdC50b1N0cmluZyA9IGxvY2FsLnRvU3RyaW5nO1xuICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9O1xuICAgIGQzX3RpbWVfZm9ybWF0Lm11bHRpID0gZDNfdGltZV9mb3JtYXQudXRjLm11bHRpID0gZDNfdGltZV9mb3JtYXRNdWx0aTtcbiAgICB2YXIgZDNfdGltZV9wZXJpb2RMb29rdXAgPSBkMy5tYXAoKSwgZDNfdGltZV9kYXlSZSA9IGQzX3RpbWVfZm9ybWF0UmUobG9jYWxlX2RheXMpLCBkM190aW1lX2RheUxvb2t1cCA9IGQzX3RpbWVfZm9ybWF0TG9va3VwKGxvY2FsZV9kYXlzKSwgZDNfdGltZV9kYXlBYmJyZXZSZSA9IGQzX3RpbWVfZm9ybWF0UmUobG9jYWxlX3Nob3J0RGF5cyksIGQzX3RpbWVfZGF5QWJicmV2TG9va3VwID0gZDNfdGltZV9mb3JtYXRMb29rdXAobG9jYWxlX3Nob3J0RGF5cyksIGQzX3RpbWVfbW9udGhSZSA9IGQzX3RpbWVfZm9ybWF0UmUobG9jYWxlX21vbnRocyksIGQzX3RpbWVfbW9udGhMb29rdXAgPSBkM190aW1lX2Zvcm1hdExvb2t1cChsb2NhbGVfbW9udGhzKSwgZDNfdGltZV9tb250aEFiYnJldlJlID0gZDNfdGltZV9mb3JtYXRSZShsb2NhbGVfc2hvcnRNb250aHMpLCBkM190aW1lX21vbnRoQWJicmV2TG9va3VwID0gZDNfdGltZV9mb3JtYXRMb29rdXAobG9jYWxlX3Nob3J0TW9udGhzKTtcbiAgICBsb2NhbGVfcGVyaW9kcy5mb3JFYWNoKGZ1bmN0aW9uKHAsIGkpIHtcbiAgICAgIGQzX3RpbWVfcGVyaW9kTG9va3VwLnNldChwLnRvTG93ZXJDYXNlKCksIGkpO1xuICAgIH0pO1xuICAgIHZhciBkM190aW1lX2Zvcm1hdHMgPSB7XG4gICAgICBhOiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGVfc2hvcnREYXlzW2QuZ2V0RGF5KCldO1xuICAgICAgfSxcbiAgICAgIEE6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZV9kYXlzW2QuZ2V0RGF5KCldO1xuICAgICAgfSxcbiAgICAgIGI6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZV9zaG9ydE1vbnRoc1tkLmdldE1vbnRoKCldO1xuICAgICAgfSxcbiAgICAgIEI6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZV9tb250aHNbZC5nZXRNb250aCgpXTtcbiAgICAgIH0sXG4gICAgICBjOiBkM190aW1lX2Zvcm1hdChsb2NhbGVfZGF0ZVRpbWUpLFxuICAgICAgZDogZnVuY3Rpb24oZCwgcCkge1xuICAgICAgICByZXR1cm4gZDNfdGltZV9mb3JtYXRQYWQoZC5nZXREYXRlKCksIHAsIDIpO1xuICAgICAgfSxcbiAgICAgIGU6IGZ1bmN0aW9uKGQsIHApIHtcbiAgICAgICAgcmV0dXJuIGQzX3RpbWVfZm9ybWF0UGFkKGQuZ2V0RGF0ZSgpLCBwLCAyKTtcbiAgICAgIH0sXG4gICAgICBIOiBmdW5jdGlvbihkLCBwKSB7XG4gICAgICAgIHJldHVybiBkM190aW1lX2Zvcm1hdFBhZChkLmdldEhvdXJzKCksIHAsIDIpO1xuICAgICAgfSxcbiAgICAgIEk6IGZ1bmN0aW9uKGQsIHApIHtcbiAgICAgICAgcmV0dXJuIGQzX3RpbWVfZm9ybWF0UGFkKGQuZ2V0SG91cnMoKSAlIDEyIHx8IDEyLCBwLCAyKTtcbiAgICAgIH0sXG4gICAgICBqOiBmdW5jdGlvbihkLCBwKSB7XG4gICAgICAgIHJldHVybiBkM190aW1lX2Zvcm1hdFBhZCgxICsgZDNfdGltZS5kYXlPZlllYXIoZCksIHAsIDMpO1xuICAgICAgfSxcbiAgICAgIEw6IGZ1bmN0aW9uKGQsIHApIHtcbiAgICAgICAgcmV0dXJuIGQzX3RpbWVfZm9ybWF0UGFkKGQuZ2V0TWlsbGlzZWNvbmRzKCksIHAsIDMpO1xuICAgICAgfSxcbiAgICAgIG06IGZ1bmN0aW9uKGQsIHApIHtcbiAgICAgICAgcmV0dXJuIGQzX3RpbWVfZm9ybWF0UGFkKGQuZ2V0TW9udGgoKSArIDEsIHAsIDIpO1xuICAgICAgfSxcbiAgICAgIE06IGZ1bmN0aW9uKGQsIHApIHtcbiAgICAgICAgcmV0dXJuIGQzX3RpbWVfZm9ybWF0UGFkKGQuZ2V0TWludXRlcygpLCBwLCAyKTtcbiAgICAgIH0sXG4gICAgICBwOiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGVfcGVyaW9kc1srKGQuZ2V0SG91cnMoKSA+PSAxMildO1xuICAgICAgfSxcbiAgICAgIFM6IGZ1bmN0aW9uKGQsIHApIHtcbiAgICAgICAgcmV0dXJuIGQzX3RpbWVfZm9ybWF0UGFkKGQuZ2V0U2Vjb25kcygpLCBwLCAyKTtcbiAgICAgIH0sXG4gICAgICBVOiBmdW5jdGlvbihkLCBwKSB7XG4gICAgICAgIHJldHVybiBkM190aW1lX2Zvcm1hdFBhZChkM190aW1lLnN1bmRheU9mWWVhcihkKSwgcCwgMik7XG4gICAgICB9LFxuICAgICAgdzogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC5nZXREYXkoKTtcbiAgICAgIH0sXG4gICAgICBXOiBmdW5jdGlvbihkLCBwKSB7XG4gICAgICAgIHJldHVybiBkM190aW1lX2Zvcm1hdFBhZChkM190aW1lLm1vbmRheU9mWWVhcihkKSwgcCwgMik7XG4gICAgICB9LFxuICAgICAgeDogZDNfdGltZV9mb3JtYXQobG9jYWxlX2RhdGUpLFxuICAgICAgWDogZDNfdGltZV9mb3JtYXQobG9jYWxlX3RpbWUpLFxuICAgICAgeTogZnVuY3Rpb24oZCwgcCkge1xuICAgICAgICByZXR1cm4gZDNfdGltZV9mb3JtYXRQYWQoZC5nZXRGdWxsWWVhcigpICUgMTAwLCBwLCAyKTtcbiAgICAgIH0sXG4gICAgICBZOiBmdW5jdGlvbihkLCBwKSB7XG4gICAgICAgIHJldHVybiBkM190aW1lX2Zvcm1hdFBhZChkLmdldEZ1bGxZZWFyKCkgJSAxZTQsIHAsIDQpO1xuICAgICAgfSxcbiAgICAgIFo6IGQzX3RpbWVfem9uZSxcbiAgICAgIFwiJVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFwiJVwiO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIGQzX3RpbWVfcGFyc2VycyA9IHtcbiAgICAgIGE6IGQzX3RpbWVfcGFyc2VXZWVrZGF5QWJicmV2LFxuICAgICAgQTogZDNfdGltZV9wYXJzZVdlZWtkYXksXG4gICAgICBiOiBkM190aW1lX3BhcnNlTW9udGhBYmJyZXYsXG4gICAgICBCOiBkM190aW1lX3BhcnNlTW9udGgsXG4gICAgICBjOiBkM190aW1lX3BhcnNlTG9jYWxlRnVsbCxcbiAgICAgIGQ6IGQzX3RpbWVfcGFyc2VEYXksXG4gICAgICBlOiBkM190aW1lX3BhcnNlRGF5LFxuICAgICAgSDogZDNfdGltZV9wYXJzZUhvdXIyNCxcbiAgICAgIEk6IGQzX3RpbWVfcGFyc2VIb3VyMjQsXG4gICAgICBqOiBkM190aW1lX3BhcnNlRGF5T2ZZZWFyLFxuICAgICAgTDogZDNfdGltZV9wYXJzZU1pbGxpc2Vjb25kcyxcbiAgICAgIG06IGQzX3RpbWVfcGFyc2VNb250aE51bWJlcixcbiAgICAgIE06IGQzX3RpbWVfcGFyc2VNaW51dGVzLFxuICAgICAgcDogZDNfdGltZV9wYXJzZUFtUG0sXG4gICAgICBTOiBkM190aW1lX3BhcnNlU2Vjb25kcyxcbiAgICAgIFU6IGQzX3RpbWVfcGFyc2VXZWVrTnVtYmVyU3VuZGF5LFxuICAgICAgdzogZDNfdGltZV9wYXJzZVdlZWtkYXlOdW1iZXIsXG4gICAgICBXOiBkM190aW1lX3BhcnNlV2Vla051bWJlck1vbmRheSxcbiAgICAgIHg6IGQzX3RpbWVfcGFyc2VMb2NhbGVEYXRlLFxuICAgICAgWDogZDNfdGltZV9wYXJzZUxvY2FsZVRpbWUsXG4gICAgICB5OiBkM190aW1lX3BhcnNlWWVhcixcbiAgICAgIFk6IGQzX3RpbWVfcGFyc2VGdWxsWWVhcixcbiAgICAgIFo6IGQzX3RpbWVfcGFyc2Vab25lLFxuICAgICAgXCIlXCI6IGQzX3RpbWVfcGFyc2VMaXRlcmFsUGVyY2VudFxuICAgIH07XG4gICAgZnVuY3Rpb24gZDNfdGltZV9wYXJzZVdlZWtkYXlBYmJyZXYoZGF0ZSwgc3RyaW5nLCBpKSB7XG4gICAgICBkM190aW1lX2RheUFiYnJldlJlLmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgbiA9IGQzX3RpbWVfZGF5QWJicmV2UmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICAgICAgcmV0dXJuIG4gPyAoZGF0ZS53ID0gZDNfdGltZV9kYXlBYmJyZXZMb29rdXAuZ2V0KG5bMF0udG9Mb3dlckNhc2UoKSksIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZDNfdGltZV9wYXJzZVdlZWtkYXkoZGF0ZSwgc3RyaW5nLCBpKSB7XG4gICAgICBkM190aW1lX2RheVJlLmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgbiA9IGQzX3RpbWVfZGF5UmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICAgICAgcmV0dXJuIG4gPyAoZGF0ZS53ID0gZDNfdGltZV9kYXlMb29rdXAuZ2V0KG5bMF0udG9Mb3dlckNhc2UoKSksIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZDNfdGltZV9wYXJzZU1vbnRoQWJicmV2KGRhdGUsIHN0cmluZywgaSkge1xuICAgICAgZDNfdGltZV9tb250aEFiYnJldlJlLmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgbiA9IGQzX3RpbWVfbW9udGhBYmJyZXZSZS5leGVjKHN0cmluZy5zbGljZShpKSk7XG4gICAgICByZXR1cm4gbiA/IChkYXRlLm0gPSBkM190aW1lX21vbnRoQWJicmV2TG9va3VwLmdldChuWzBdLnRvTG93ZXJDYXNlKCkpLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGQzX3RpbWVfcGFyc2VNb250aChkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICAgIGQzX3RpbWVfbW9udGhSZS5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIG4gPSBkM190aW1lX21vbnRoUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICAgICAgcmV0dXJuIG4gPyAoZGF0ZS5tID0gZDNfdGltZV9tb250aExvb2t1cC5nZXQoblswXS50b0xvd2VyQ2FzZSgpKSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkM190aW1lX3BhcnNlTG9jYWxlRnVsbChkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICAgIHJldHVybiBkM190aW1lX3BhcnNlKGRhdGUsIGQzX3RpbWVfZm9ybWF0cy5jLnRvU3RyaW5nKCksIHN0cmluZywgaSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGQzX3RpbWVfcGFyc2VMb2NhbGVEYXRlKGRhdGUsIHN0cmluZywgaSkge1xuICAgICAgcmV0dXJuIGQzX3RpbWVfcGFyc2UoZGF0ZSwgZDNfdGltZV9mb3JtYXRzLngudG9TdHJpbmcoKSwgc3RyaW5nLCBpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZDNfdGltZV9wYXJzZUxvY2FsZVRpbWUoZGF0ZSwgc3RyaW5nLCBpKSB7XG4gICAgICByZXR1cm4gZDNfdGltZV9wYXJzZShkYXRlLCBkM190aW1lX2Zvcm1hdHMuWC50b1N0cmluZygpLCBzdHJpbmcsIGkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkM190aW1lX3BhcnNlQW1QbShkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICAgIHZhciBuID0gZDNfdGltZV9wZXJpb2RMb29rdXAuZ2V0KHN0cmluZy5zbGljZShpLCBpICs9IDIpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgcmV0dXJuIG4gPT0gbnVsbCA/IC0xIDogKGRhdGUucCA9IG4sIGkpO1xuICAgIH1cbiAgICByZXR1cm4gZDNfdGltZV9mb3JtYXQ7XG4gIH1cbiAgdmFyIGQzX3RpbWVfZm9ybWF0UGFkcyA9IHtcbiAgICBcIi1cIjogXCJcIixcbiAgICBfOiBcIiBcIixcbiAgICBcIjBcIjogXCIwXCJcbiAgfSwgZDNfdGltZV9udW1iZXJSZSA9IC9eXFxzKlxcZCsvLCBkM190aW1lX3BlcmNlbnRSZSA9IC9eJS87XG4gIGZ1bmN0aW9uIGQzX3RpbWVfZm9ybWF0UGFkKHZhbHVlLCBmaWxsLCB3aWR0aCkge1xuICAgIHZhciBzaWduID0gdmFsdWUgPCAwID8gXCItXCIgOiBcIlwiLCBzdHJpbmcgPSAoc2lnbiA/IC12YWx1ZSA6IHZhbHVlKSArIFwiXCIsIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gICAgcmV0dXJuIHNpZ24gKyAobGVuZ3RoIDwgd2lkdGggPyBuZXcgQXJyYXkod2lkdGggLSBsZW5ndGggKyAxKS5qb2luKGZpbGwpICsgc3RyaW5nIDogc3RyaW5nKTtcbiAgfVxuICBmdW5jdGlvbiBkM190aW1lX2Zvcm1hdFJlKG5hbWVzKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyBuYW1lcy5tYXAoZDMucmVxdW90ZSkuam9pbihcInxcIikgKyBcIilcIiwgXCJpXCIpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfZm9ybWF0TG9va3VwKG5hbWVzKSB7XG4gICAgdmFyIG1hcCA9IG5ldyBkM19NYXAoKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICAgIHdoaWxlICgrK2kgPCBuKSBtYXAuc2V0KG5hbWVzW2ldLnRvTG93ZXJDYXNlKCksIGkpO1xuICAgIHJldHVybiBtYXA7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZV9wYXJzZVdlZWtkYXlOdW1iZXIoZGF0ZSwgc3RyaW5nLCBpKSB7XG4gICAgZDNfdGltZV9udW1iZXJSZS5sYXN0SW5kZXggPSAwO1xuICAgIHZhciBuID0gZDNfdGltZV9udW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMSkpO1xuICAgIHJldHVybiBuID8gKGRhdGUudyA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZV9wYXJzZVdlZWtOdW1iZXJTdW5kYXkoZGF0ZSwgc3RyaW5nLCBpKSB7XG4gICAgZDNfdGltZV9udW1iZXJSZS5sYXN0SW5kZXggPSAwO1xuICAgIHZhciBuID0gZDNfdGltZV9udW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpKSk7XG4gICAgcmV0dXJuIG4gPyAoZGF0ZS5VID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuICBmdW5jdGlvbiBkM190aW1lX3BhcnNlV2Vla051bWJlck1vbmRheShkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICBkM190aW1lX251bWJlclJlLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIG4gPSBkM190aW1lX251bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgICByZXR1cm4gbiA/IChkYXRlLlcgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfcGFyc2VGdWxsWWVhcihkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICBkM190aW1lX251bWJlclJlLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIG4gPSBkM190aW1lX251bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyA0KSk7XG4gICAgcmV0dXJuIG4gPyAoZGF0ZS55ID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuICBmdW5jdGlvbiBkM190aW1lX3BhcnNlWWVhcihkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICBkM190aW1lX251bWJlclJlLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIG4gPSBkM190aW1lX251bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gICAgcmV0dXJuIG4gPyAoZGF0ZS55ID0gZDNfdGltZV9leHBhbmRZZWFyKCtuWzBdKSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfcGFyc2Vab25lKGRhdGUsIHN0cmluZywgaSkge1xuICAgIHJldHVybiAvXlsrLV1cXGR7NH0kLy50ZXN0KHN0cmluZyA9IHN0cmluZy5zbGljZShpLCBpICsgNSkpID8gKGRhdGUuWiA9IC1zdHJpbmcsIFxuICAgIGkgKyA1KSA6IC0xO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfZXhwYW5kWWVhcihkKSB7XG4gICAgcmV0dXJuIGQgKyAoZCA+IDY4ID8gMTkwMCA6IDJlMyk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZV9wYXJzZU1vbnRoTnVtYmVyKGRhdGUsIHN0cmluZywgaSkge1xuICAgIGQzX3RpbWVfbnVtYmVyUmUubGFzdEluZGV4ID0gMDtcbiAgICB2YXIgbiA9IGQzX3RpbWVfbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgICByZXR1cm4gbiA/IChkYXRlLm0gPSBuWzBdIC0gMSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfcGFyc2VEYXkoZGF0ZSwgc3RyaW5nLCBpKSB7XG4gICAgZDNfdGltZV9udW1iZXJSZS5sYXN0SW5kZXggPSAwO1xuICAgIHZhciBuID0gZDNfdGltZV9udW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICAgIHJldHVybiBuID8gKGRhdGUuZCA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZV9wYXJzZURheU9mWWVhcihkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICBkM190aW1lX251bWJlclJlLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIG4gPSBkM190aW1lX251bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAzKSk7XG4gICAgcmV0dXJuIG4gPyAoZGF0ZS5qID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuICBmdW5jdGlvbiBkM190aW1lX3BhcnNlSG91cjI0KGRhdGUsIHN0cmluZywgaSkge1xuICAgIGQzX3RpbWVfbnVtYmVyUmUubGFzdEluZGV4ID0gMDtcbiAgICB2YXIgbiA9IGQzX3RpbWVfbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgICByZXR1cm4gbiA/IChkYXRlLkggPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfcGFyc2VNaW51dGVzKGRhdGUsIHN0cmluZywgaSkge1xuICAgIGQzX3RpbWVfbnVtYmVyUmUubGFzdEluZGV4ID0gMDtcbiAgICB2YXIgbiA9IGQzX3RpbWVfbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgICByZXR1cm4gbiA/IChkYXRlLk0gPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfcGFyc2VTZWNvbmRzKGRhdGUsIHN0cmluZywgaSkge1xuICAgIGQzX3RpbWVfbnVtYmVyUmUubGFzdEluZGV4ID0gMDtcbiAgICB2YXIgbiA9IGQzX3RpbWVfbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgICByZXR1cm4gbiA/IChkYXRlLlMgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfcGFyc2VNaWxsaXNlY29uZHMoZGF0ZSwgc3RyaW5nLCBpKSB7XG4gICAgZDNfdGltZV9udW1iZXJSZS5sYXN0SW5kZXggPSAwO1xuICAgIHZhciBuID0gZDNfdGltZV9udW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMykpO1xuICAgIHJldHVybiBuID8gKGRhdGUuTCA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZV96b25lKGQpIHtcbiAgICB2YXIgeiA9IGQuZ2V0VGltZXpvbmVPZmZzZXQoKSwgenMgPSB6ID4gMCA/IFwiLVwiIDogXCIrXCIsIHpoID0gYWJzKHopIC8gNjAgfCAwLCB6bSA9IGFicyh6KSAlIDYwO1xuICAgIHJldHVybiB6cyArIGQzX3RpbWVfZm9ybWF0UGFkKHpoLCBcIjBcIiwgMikgKyBkM190aW1lX2Zvcm1hdFBhZCh6bSwgXCIwXCIsIDIpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfcGFyc2VMaXRlcmFsUGVyY2VudChkYXRlLCBzdHJpbmcsIGkpIHtcbiAgICBkM190aW1lX3BlcmNlbnRSZS5sYXN0SW5kZXggPSAwO1xuICAgIHZhciBuID0gZDNfdGltZV9wZXJjZW50UmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDEpKTtcbiAgICByZXR1cm4gbiA/IGkgKyBuWzBdLmxlbmd0aCA6IC0xO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RpbWVfZm9ybWF0TXVsdGkoZm9ybWF0cykge1xuICAgIHZhciBuID0gZm9ybWF0cy5sZW5ndGgsIGkgPSAtMTtcbiAgICB3aGlsZSAoKytpIDwgbikgZm9ybWF0c1tpXVswXSA9IHRoaXMoZm9ybWF0c1tpXVswXSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGUpIHtcbiAgICAgIHZhciBpID0gMCwgZiA9IGZvcm1hdHNbaV07XG4gICAgICB3aGlsZSAoIWZbMV0oZGF0ZSkpIGYgPSBmb3JtYXRzWysraV07XG4gICAgICByZXR1cm4gZlswXShkYXRlKTtcbiAgICB9O1xuICB9XG4gIGQzLmxvY2FsZSA9IGZ1bmN0aW9uKGxvY2FsZSkge1xuICAgIHJldHVybiB7XG4gICAgICBudW1iZXJGb3JtYXQ6IGQzX2xvY2FsZV9udW1iZXJGb3JtYXQobG9jYWxlKSxcbiAgICAgIHRpbWVGb3JtYXQ6IGQzX2xvY2FsZV90aW1lRm9ybWF0KGxvY2FsZSlcbiAgICB9O1xuICB9O1xuICB2YXIgZDNfbG9jYWxlX2VuVVMgPSBkMy5sb2NhbGUoe1xuICAgIGRlY2ltYWw6IFwiLlwiLFxuICAgIHRob3VzYW5kczogXCIsXCIsXG4gICAgZ3JvdXBpbmc6IFsgMyBdLFxuICAgIGN1cnJlbmN5OiBbIFwiJFwiLCBcIlwiIF0sXG4gICAgZGF0ZVRpbWU6IFwiJWEgJWIgJWUgJVggJVlcIixcbiAgICBkYXRlOiBcIiVtLyVkLyVZXCIsXG4gICAgdGltZTogXCIlSDolTTolU1wiLFxuICAgIHBlcmlvZHM6IFsgXCJBTVwiLCBcIlBNXCIgXSxcbiAgICBkYXlzOiBbIFwiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIiBdLFxuICAgIHNob3J0RGF5czogWyBcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiIF0sXG4gICAgbW9udGhzOiBbIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIiBdLFxuICAgIHNob3J0TW9udGhzOiBbIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCIgXVxuICB9KTtcbiAgZDMuZm9ybWF0ID0gZDNfbG9jYWxlX2VuVVMubnVtYmVyRm9ybWF0O1xuICBkMy5nZW8gPSB7fTtcbiAgZnVuY3Rpb24gZDNfYWRkZXIoKSB7fVxuICBkM19hZGRlci5wcm90b3R5cGUgPSB7XG4gICAgczogMCxcbiAgICB0OiAwLFxuICAgIGFkZDogZnVuY3Rpb24oeSkge1xuICAgICAgZDNfYWRkZXJTdW0oeSwgdGhpcy50LCBkM19hZGRlclRlbXApO1xuICAgICAgZDNfYWRkZXJTdW0oZDNfYWRkZXJUZW1wLnMsIHRoaXMucywgdGhpcyk7XG4gICAgICBpZiAodGhpcy5zKSB0aGlzLnQgKz0gZDNfYWRkZXJUZW1wLnQ7IGVsc2UgdGhpcy5zID0gZDNfYWRkZXJUZW1wLnQ7XG4gICAgfSxcbiAgICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnMgPSB0aGlzLnQgPSAwO1xuICAgIH0sXG4gICAgdmFsdWVPZjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zO1xuICAgIH1cbiAgfTtcbiAgdmFyIGQzX2FkZGVyVGVtcCA9IG5ldyBkM19hZGRlcigpO1xuICBmdW5jdGlvbiBkM19hZGRlclN1bShhLCBiLCBvKSB7XG4gICAgdmFyIHggPSBvLnMgPSBhICsgYiwgYnYgPSB4IC0gYSwgYXYgPSB4IC0gYnY7XG4gICAgby50ID0gYSAtIGF2ICsgKGIgLSBidik7XG4gIH1cbiAgZDMuZ2VvLnN0cmVhbSA9IGZ1bmN0aW9uKG9iamVjdCwgbGlzdGVuZXIpIHtcbiAgICBpZiAob2JqZWN0ICYmIGQzX2dlb19zdHJlYW1PYmplY3RUeXBlLmhhc093blByb3BlcnR5KG9iamVjdC50eXBlKSkge1xuICAgICAgZDNfZ2VvX3N0cmVhbU9iamVjdFR5cGVbb2JqZWN0LnR5cGVdKG9iamVjdCwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkM19nZW9fc3RyZWFtR2VvbWV0cnkob2JqZWN0LCBsaXN0ZW5lcik7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBkM19nZW9fc3RyZWFtR2VvbWV0cnkoZ2VvbWV0cnksIGxpc3RlbmVyKSB7XG4gICAgaWYgKGdlb21ldHJ5ICYmIGQzX2dlb19zdHJlYW1HZW9tZXRyeVR5cGUuaGFzT3duUHJvcGVydHkoZ2VvbWV0cnkudHlwZSkpIHtcbiAgICAgIGQzX2dlb19zdHJlYW1HZW9tZXRyeVR5cGVbZ2VvbWV0cnkudHlwZV0oZ2VvbWV0cnksIGxpc3RlbmVyKTtcbiAgICB9XG4gIH1cbiAgdmFyIGQzX2dlb19zdHJlYW1PYmplY3RUeXBlID0ge1xuICAgIEZlYXR1cmU6IGZ1bmN0aW9uKGZlYXR1cmUsIGxpc3RlbmVyKSB7XG4gICAgICBkM19nZW9fc3RyZWFtR2VvbWV0cnkoZmVhdHVyZS5nZW9tZXRyeSwgbGlzdGVuZXIpO1xuICAgIH0sXG4gICAgRmVhdHVyZUNvbGxlY3Rpb246IGZ1bmN0aW9uKG9iamVjdCwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBmZWF0dXJlcyA9IG9iamVjdC5mZWF0dXJlcywgaSA9IC0xLCBuID0gZmVhdHVyZXMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGQzX2dlb19zdHJlYW1HZW9tZXRyeShmZWF0dXJlc1tpXS5nZW9tZXRyeSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGQzX2dlb19zdHJlYW1HZW9tZXRyeVR5cGUgPSB7XG4gICAgU3BoZXJlOiBmdW5jdGlvbihvYmplY3QsIGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lci5zcGhlcmUoKTtcbiAgICB9LFxuICAgIFBvaW50OiBmdW5jdGlvbihvYmplY3QsIGxpc3RlbmVyKSB7XG4gICAgICBvYmplY3QgPSBvYmplY3QuY29vcmRpbmF0ZXM7XG4gICAgICBsaXN0ZW5lci5wb2ludChvYmplY3RbMF0sIG9iamVjdFsxXSwgb2JqZWN0WzJdKTtcbiAgICB9LFxuICAgIE11bHRpUG9pbnQ6IGZ1bmN0aW9uKG9iamVjdCwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBjb29yZGluYXRlcyA9IG9iamVjdC5jb29yZGluYXRlcywgaSA9IC0xLCBuID0gY29vcmRpbmF0ZXMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIG9iamVjdCA9IGNvb3JkaW5hdGVzW2ldLCBsaXN0ZW5lci5wb2ludChvYmplY3RbMF0sIG9iamVjdFsxXSwgb2JqZWN0WzJdKTtcbiAgICB9LFxuICAgIExpbmVTdHJpbmc6IGZ1bmN0aW9uKG9iamVjdCwgbGlzdGVuZXIpIHtcbiAgICAgIGQzX2dlb19zdHJlYW1MaW5lKG9iamVjdC5jb29yZGluYXRlcywgbGlzdGVuZXIsIDApO1xuICAgIH0sXG4gICAgTXVsdGlMaW5lU3RyaW5nOiBmdW5jdGlvbihvYmplY3QsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgY29vcmRpbmF0ZXMgPSBvYmplY3QuY29vcmRpbmF0ZXMsIGkgPSAtMSwgbiA9IGNvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBkM19nZW9fc3RyZWFtTGluZShjb29yZGluYXRlc1tpXSwgbGlzdGVuZXIsIDApO1xuICAgIH0sXG4gICAgUG9seWdvbjogZnVuY3Rpb24ob2JqZWN0LCBsaXN0ZW5lcikge1xuICAgICAgZDNfZ2VvX3N0cmVhbVBvbHlnb24ob2JqZWN0LmNvb3JkaW5hdGVzLCBsaXN0ZW5lcik7XG4gICAgfSxcbiAgICBNdWx0aVBvbHlnb246IGZ1bmN0aW9uKG9iamVjdCwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBjb29yZGluYXRlcyA9IG9iamVjdC5jb29yZGluYXRlcywgaSA9IC0xLCBuID0gY29vcmRpbmF0ZXMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGQzX2dlb19zdHJlYW1Qb2x5Z29uKGNvb3JkaW5hdGVzW2ldLCBsaXN0ZW5lcik7XG4gICAgfSxcbiAgICBHZW9tZXRyeUNvbGxlY3Rpb246IGZ1bmN0aW9uKG9iamVjdCwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBnZW9tZXRyaWVzID0gb2JqZWN0Lmdlb21ldHJpZXMsIGkgPSAtMSwgbiA9IGdlb21ldHJpZXMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGQzX2dlb19zdHJlYW1HZW9tZXRyeShnZW9tZXRyaWVzW2ldLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBkM19nZW9fc3RyZWFtTGluZShjb29yZGluYXRlcywgbGlzdGVuZXIsIGNsb3NlZCkge1xuICAgIHZhciBpID0gLTEsIG4gPSBjb29yZGluYXRlcy5sZW5ndGggLSBjbG9zZWQsIGNvb3JkaW5hdGU7XG4gICAgbGlzdGVuZXIubGluZVN0YXJ0KCk7XG4gICAgd2hpbGUgKCsraSA8IG4pIGNvb3JkaW5hdGUgPSBjb29yZGluYXRlc1tpXSwgbGlzdGVuZXIucG9pbnQoY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXSwgY29vcmRpbmF0ZVsyXSk7XG4gICAgbGlzdGVuZXIubGluZUVuZCgpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19zdHJlYW1Qb2x5Z29uKGNvb3JkaW5hdGVzLCBsaXN0ZW5lcikge1xuICAgIHZhciBpID0gLTEsIG4gPSBjb29yZGluYXRlcy5sZW5ndGg7XG4gICAgbGlzdGVuZXIucG9seWdvblN0YXJ0KCk7XG4gICAgd2hpbGUgKCsraSA8IG4pIGQzX2dlb19zdHJlYW1MaW5lKGNvb3JkaW5hdGVzW2ldLCBsaXN0ZW5lciwgMSk7XG4gICAgbGlzdGVuZXIucG9seWdvbkVuZCgpO1xuICB9XG4gIGQzLmdlby5hcmVhID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgZDNfZ2VvX2FyZWFTdW0gPSAwO1xuICAgIGQzLmdlby5zdHJlYW0ob2JqZWN0LCBkM19nZW9fYXJlYSk7XG4gICAgcmV0dXJuIGQzX2dlb19hcmVhU3VtO1xuICB9O1xuICB2YXIgZDNfZ2VvX2FyZWFTdW0sIGQzX2dlb19hcmVhUmluZ1N1bSA9IG5ldyBkM19hZGRlcigpO1xuICB2YXIgZDNfZ2VvX2FyZWEgPSB7XG4gICAgc3BoZXJlOiBmdW5jdGlvbigpIHtcbiAgICAgIGQzX2dlb19hcmVhU3VtICs9IDQgKiDPgDtcbiAgICB9LFxuICAgIHBvaW50OiBkM19ub29wLFxuICAgIGxpbmVTdGFydDogZDNfbm9vcCxcbiAgICBsaW5lRW5kOiBkM19ub29wLFxuICAgIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICBkM19nZW9fYXJlYVJpbmdTdW0ucmVzZXQoKTtcbiAgICAgIGQzX2dlb19hcmVhLmxpbmVTdGFydCA9IGQzX2dlb19hcmVhUmluZ1N0YXJ0O1xuICAgIH0sXG4gICAgcG9seWdvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYXJlYSA9IDIgKiBkM19nZW9fYXJlYVJpbmdTdW07XG4gICAgICBkM19nZW9fYXJlYVN1bSArPSBhcmVhIDwgMCA/IDQgKiDPgCArIGFyZWEgOiBhcmVhO1xuICAgICAgZDNfZ2VvX2FyZWEubGluZVN0YXJ0ID0gZDNfZ2VvX2FyZWEubGluZUVuZCA9IGQzX2dlb19hcmVhLnBvaW50ID0gZDNfbm9vcDtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2dlb19hcmVhUmluZ1N0YXJ0KCkge1xuICAgIHZhciDOuzAwLCDPhjAwLCDOuzAsIGNvc8+GMCwgc2luz4YwO1xuICAgIGQzX2dlb19hcmVhLnBvaW50ID0gZnVuY3Rpb24ozrssIM+GKSB7XG4gICAgICBkM19nZW9fYXJlYS5wb2ludCA9IG5leHRQb2ludDtcbiAgICAgIM67MCA9ICjOuzAwID0gzrspICogZDNfcmFkaWFucywgY29zz4YwID0gTWF0aC5jb3Moz4YgPSAoz4YwMCA9IM+GKSAqIGQzX3JhZGlhbnMgLyAyICsgz4AgLyA0KSwgXG4gICAgICBzaW7PhjAgPSBNYXRoLnNpbijPhik7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBuZXh0UG9pbnQozrssIM+GKSB7XG4gICAgICDOuyAqPSBkM19yYWRpYW5zO1xuICAgICAgz4YgPSDPhiAqIGQzX3JhZGlhbnMgLyAyICsgz4AgLyA0O1xuICAgICAgdmFyIGTOuyA9IM67IC0gzrswLCBzZM67ID0gZM67ID49IDAgPyAxIDogLTEsIGFkzrsgPSBzZM67ICogZM67LCBjb3PPhiA9IE1hdGguY29zKM+GKSwgc2luz4YgPSBNYXRoLnNpbijPhiksIGsgPSBzaW7PhjAgKiBzaW7PhiwgdSA9IGNvc8+GMCAqIGNvc8+GICsgayAqIE1hdGguY29zKGFkzrspLCB2ID0gayAqIHNkzrsgKiBNYXRoLnNpbihhZM67KTtcbiAgICAgIGQzX2dlb19hcmVhUmluZ1N1bS5hZGQoTWF0aC5hdGFuMih2LCB1KSk7XG4gICAgICDOuzAgPSDOuywgY29zz4YwID0gY29zz4YsIHNpbs+GMCA9IHNpbs+GO1xuICAgIH1cbiAgICBkM19nZW9fYXJlYS5saW5lRW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICBuZXh0UG9pbnQozrswMCwgz4YwMCk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2FydGVzaWFuKHNwaGVyaWNhbCkge1xuICAgIHZhciDOuyA9IHNwaGVyaWNhbFswXSwgz4YgPSBzcGhlcmljYWxbMV0sIGNvc8+GID0gTWF0aC5jb3Moz4YpO1xuICAgIHJldHVybiBbIGNvc8+GICogTWF0aC5jb3MozrspLCBjb3PPhiAqIE1hdGguc2luKM67KSwgTWF0aC5zaW4oz4YpIF07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX2NhcnRlc2lhbkRvdChhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2FydGVzaWFuQ3Jvc3MoYSwgYikge1xuICAgIHJldHVybiBbIGFbMV0gKiBiWzJdIC0gYVsyXSAqIGJbMV0sIGFbMl0gKiBiWzBdIC0gYVswXSAqIGJbMl0sIGFbMF0gKiBiWzFdIC0gYVsxXSAqIGJbMF0gXTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2FydGVzaWFuQWRkKGEsIGIpIHtcbiAgICBhWzBdICs9IGJbMF07XG4gICAgYVsxXSArPSBiWzFdO1xuICAgIGFbMl0gKz0gYlsyXTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2FydGVzaWFuU2NhbGUodmVjdG9yLCBrKSB7XG4gICAgcmV0dXJuIFsgdmVjdG9yWzBdICogaywgdmVjdG9yWzFdICogaywgdmVjdG9yWzJdICogayBdO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19jYXJ0ZXNpYW5Ob3JtYWxpemUoZCkge1xuICAgIHZhciBsID0gTWF0aC5zcXJ0KGRbMF0gKiBkWzBdICsgZFsxXSAqIGRbMV0gKyBkWzJdICogZFsyXSk7XG4gICAgZFswXSAvPSBsO1xuICAgIGRbMV0gLz0gbDtcbiAgICBkWzJdIC89IGw7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX3NwaGVyaWNhbChjYXJ0ZXNpYW4pIHtcbiAgICByZXR1cm4gWyBNYXRoLmF0YW4yKGNhcnRlc2lhblsxXSwgY2FydGVzaWFuWzBdKSwgZDNfYXNpbihjYXJ0ZXNpYW5bMl0pIF07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX3NwaGVyaWNhbEVxdWFsKGEsIGIpIHtcbiAgICByZXR1cm4gYWJzKGFbMF0gLSBiWzBdKSA8IM61ICYmIGFicyhhWzFdIC0gYlsxXSkgPCDOtTtcbiAgfVxuICBkMy5nZW8uYm91bmRzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIM67MCwgz4YwLCDOuzEsIM+GMSwgzrtfLCDOu19fLCDPhl9fLCBwMCwgZM67U3VtLCByYW5nZXMsIHJhbmdlO1xuICAgIHZhciBib3VuZCA9IHtcbiAgICAgIHBvaW50OiBwb2ludCxcbiAgICAgIGxpbmVTdGFydDogbGluZVN0YXJ0LFxuICAgICAgbGluZUVuZDogbGluZUVuZCxcbiAgICAgIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGJvdW5kLnBvaW50ID0gcmluZ1BvaW50O1xuICAgICAgICBib3VuZC5saW5lU3RhcnQgPSByaW5nU3RhcnQ7XG4gICAgICAgIGJvdW5kLmxpbmVFbmQgPSByaW5nRW5kO1xuICAgICAgICBkzrtTdW0gPSAwO1xuICAgICAgICBkM19nZW9fYXJlYS5wb2x5Z29uU3RhcnQoKTtcbiAgICAgIH0sXG4gICAgICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgZDNfZ2VvX2FyZWEucG9seWdvbkVuZCgpO1xuICAgICAgICBib3VuZC5wb2ludCA9IHBvaW50O1xuICAgICAgICBib3VuZC5saW5lU3RhcnQgPSBsaW5lU3RhcnQ7XG4gICAgICAgIGJvdW5kLmxpbmVFbmQgPSBsaW5lRW5kO1xuICAgICAgICBpZiAoZDNfZ2VvX2FyZWFSaW5nU3VtIDwgMCkgzrswID0gLSjOuzEgPSAxODApLCDPhjAgPSAtKM+GMSA9IDkwKTsgZWxzZSBpZiAoZM67U3VtID4gzrUpIM+GMSA9IDkwOyBlbHNlIGlmIChkzrtTdW0gPCAtzrUpIM+GMCA9IC05MDtcbiAgICAgICAgcmFuZ2VbMF0gPSDOuzAsIHJhbmdlWzFdID0gzrsxO1xuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gcG9pbnQozrssIM+GKSB7XG4gICAgICByYW5nZXMucHVzaChyYW5nZSA9IFsgzrswID0gzrssIM67MSA9IM67IF0pO1xuICAgICAgaWYgKM+GIDwgz4YwKSDPhjAgPSDPhjtcbiAgICAgIGlmICjPhiA+IM+GMSkgz4YxID0gz4Y7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpbmVQb2ludCjOuywgz4YpIHtcbiAgICAgIHZhciBwID0gZDNfZ2VvX2NhcnRlc2lhbihbIM67ICogZDNfcmFkaWFucywgz4YgKiBkM19yYWRpYW5zIF0pO1xuICAgICAgaWYgKHAwKSB7XG4gICAgICAgIHZhciBub3JtYWwgPSBkM19nZW9fY2FydGVzaWFuQ3Jvc3MocDAsIHApLCBlcXVhdG9yaWFsID0gWyBub3JtYWxbMV0sIC1ub3JtYWxbMF0sIDAgXSwgaW5mbGVjdGlvbiA9IGQzX2dlb19jYXJ0ZXNpYW5Dcm9zcyhlcXVhdG9yaWFsLCBub3JtYWwpO1xuICAgICAgICBkM19nZW9fY2FydGVzaWFuTm9ybWFsaXplKGluZmxlY3Rpb24pO1xuICAgICAgICBpbmZsZWN0aW9uID0gZDNfZ2VvX3NwaGVyaWNhbChpbmZsZWN0aW9uKTtcbiAgICAgICAgdmFyIGTOuyA9IM67IC0gzrtfLCBzID0gZM67ID4gMCA/IDEgOiAtMSwgzrtpID0gaW5mbGVjdGlvblswXSAqIGQzX2RlZ3JlZXMgKiBzLCBhbnRpbWVyaWRpYW4gPSBhYnMoZM67KSA+IDE4MDtcbiAgICAgICAgaWYgKGFudGltZXJpZGlhbiBeIChzICogzrtfIDwgzrtpICYmIM67aSA8IHMgKiDOuykpIHtcbiAgICAgICAgICB2YXIgz4ZpID0gaW5mbGVjdGlvblsxXSAqIGQzX2RlZ3JlZXM7XG4gICAgICAgICAgaWYgKM+GaSA+IM+GMSkgz4YxID0gz4ZpO1xuICAgICAgICB9IGVsc2UgaWYgKM67aSA9ICjOu2kgKyAzNjApICUgMzYwIC0gMTgwLCBhbnRpbWVyaWRpYW4gXiAocyAqIM67XyA8IM67aSAmJiDOu2kgPCBzICogzrspKSB7XG4gICAgICAgICAgdmFyIM+GaSA9IC1pbmZsZWN0aW9uWzFdICogZDNfZGVncmVlcztcbiAgICAgICAgICBpZiAoz4ZpIDwgz4YwKSDPhjAgPSDPhmk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKM+GIDwgz4YwKSDPhjAgPSDPhjtcbiAgICAgICAgICBpZiAoz4YgPiDPhjEpIM+GMSA9IM+GO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbnRpbWVyaWRpYW4pIHtcbiAgICAgICAgICBpZiAozrsgPCDOu18pIHtcbiAgICAgICAgICAgIGlmIChhbmdsZSjOuzAsIM67KSA+IGFuZ2xlKM67MCwgzrsxKSkgzrsxID0gzrs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhbmdsZSjOuywgzrsxKSA+IGFuZ2xlKM67MCwgzrsxKSkgzrswID0gzrs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICjOuzEgPj0gzrswKSB7XG4gICAgICAgICAgICBpZiAozrsgPCDOuzApIM67MCA9IM67O1xuICAgICAgICAgICAgaWYgKM67ID4gzrsxKSDOuzEgPSDOuztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKM67ID4gzrtfKSB7XG4gICAgICAgICAgICAgIGlmIChhbmdsZSjOuzAsIM67KSA+IGFuZ2xlKM67MCwgzrsxKSkgzrsxID0gzrs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoYW5nbGUozrssIM67MSkgPiBhbmdsZSjOuzAsIM67MSkpIM67MCA9IM67O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9pbnQozrssIM+GKTtcbiAgICAgIH1cbiAgICAgIHAwID0gcCwgzrtfID0gzrs7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpbmVTdGFydCgpIHtcbiAgICAgIGJvdW5kLnBvaW50ID0gbGluZVBvaW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaW5lRW5kKCkge1xuICAgICAgcmFuZ2VbMF0gPSDOuzAsIHJhbmdlWzFdID0gzrsxO1xuICAgICAgYm91bmQucG9pbnQgPSBwb2ludDtcbiAgICAgIHAwID0gbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmluZ1BvaW50KM67LCDPhikge1xuICAgICAgaWYgKHAwKSB7XG4gICAgICAgIHZhciBkzrsgPSDOuyAtIM67XztcbiAgICAgICAgZM67U3VtICs9IGFicyhkzrspID4gMTgwID8gZM67ICsgKGTOuyA+IDAgPyAzNjAgOiAtMzYwKSA6IGTOuztcbiAgICAgIH0gZWxzZSDOu19fID0gzrssIM+GX18gPSDPhjtcbiAgICAgIGQzX2dlb19hcmVhLnBvaW50KM67LCDPhik7XG4gICAgICBsaW5lUG9pbnQozrssIM+GKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmluZ1N0YXJ0KCkge1xuICAgICAgZDNfZ2VvX2FyZWEubGluZVN0YXJ0KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJpbmdFbmQoKSB7XG4gICAgICByaW5nUG9pbnQozrtfXywgz4ZfXyk7XG4gICAgICBkM19nZW9fYXJlYS5saW5lRW5kKCk7XG4gICAgICBpZiAoYWJzKGTOu1N1bSkgPiDOtSkgzrswID0gLSjOuzEgPSAxODApO1xuICAgICAgcmFuZ2VbMF0gPSDOuzAsIHJhbmdlWzFdID0gzrsxO1xuICAgICAgcDAgPSBudWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhbmdsZSjOuzAsIM67MSkge1xuICAgICAgcmV0dXJuICjOuzEgLT0gzrswKSA8IDAgPyDOuzEgKyAzNjAgOiDOuzE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbXBhcmVSYW5nZXMoYSwgYikge1xuICAgICAgcmV0dXJuIGFbMF0gLSBiWzBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiB3aXRoaW5SYW5nZSh4LCByYW5nZSkge1xuICAgICAgcmV0dXJuIHJhbmdlWzBdIDw9IHJhbmdlWzFdID8gcmFuZ2VbMF0gPD0geCAmJiB4IDw9IHJhbmdlWzFdIDogeCA8IHJhbmdlWzBdIHx8IHJhbmdlWzFdIDwgeDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgIM+GMSA9IM67MSA9IC0ozrswID0gz4YwID0gSW5maW5pdHkpO1xuICAgICAgcmFuZ2VzID0gW107XG4gICAgICBkMy5nZW8uc3RyZWFtKGZlYXR1cmUsIGJvdW5kKTtcbiAgICAgIHZhciBuID0gcmFuZ2VzLmxlbmd0aDtcbiAgICAgIGlmIChuKSB7XG4gICAgICAgIHJhbmdlcy5zb3J0KGNvbXBhcmVSYW5nZXMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMSwgYSA9IHJhbmdlc1swXSwgYiwgbWVyZ2VkID0gWyBhIF07IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICBiID0gcmFuZ2VzW2ldO1xuICAgICAgICAgIGlmICh3aXRoaW5SYW5nZShiWzBdLCBhKSB8fCB3aXRoaW5SYW5nZShiWzFdLCBhKSkge1xuICAgICAgICAgICAgaWYgKGFuZ2xlKGFbMF0sIGJbMV0pID4gYW5nbGUoYVswXSwgYVsxXSkpIGFbMV0gPSBiWzFdO1xuICAgICAgICAgICAgaWYgKGFuZ2xlKGJbMF0sIGFbMV0pID4gYW5nbGUoYVswXSwgYVsxXSkpIGFbMF0gPSBiWzBdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXJnZWQucHVzaChhID0gYik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBiZXN0ID0gLUluZmluaXR5LCBkzrs7XG4gICAgICAgIGZvciAodmFyIG4gPSBtZXJnZWQubGVuZ3RoIC0gMSwgaSA9IDAsIGEgPSBtZXJnZWRbbl0sIGI7IGkgPD0gbjsgYSA9IGIsICsraSkge1xuICAgICAgICAgIGIgPSBtZXJnZWRbaV07XG4gICAgICAgICAgaWYgKChkzrsgPSBhbmdsZShhWzFdLCBiWzBdKSkgPiBiZXN0KSBiZXN0ID0gZM67LCDOuzAgPSBiWzBdLCDOuzEgPSBhWzFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByYW5nZXMgPSByYW5nZSA9IG51bGw7XG4gICAgICByZXR1cm4gzrswID09PSBJbmZpbml0eSB8fCDPhjAgPT09IEluZmluaXR5ID8gWyBbIE5hTiwgTmFOIF0sIFsgTmFOLCBOYU4gXSBdIDogWyBbIM67MCwgz4YwIF0sIFsgzrsxLCDPhjEgXSBdO1xuICAgIH07XG4gIH0oKTtcbiAgZDMuZ2VvLmNlbnRyb2lkID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgZDNfZ2VvX2NlbnRyb2lkVzAgPSBkM19nZW9fY2VudHJvaWRXMSA9IGQzX2dlb19jZW50cm9pZFgwID0gZDNfZ2VvX2NlbnRyb2lkWTAgPSBkM19nZW9fY2VudHJvaWRaMCA9IGQzX2dlb19jZW50cm9pZFgxID0gZDNfZ2VvX2NlbnRyb2lkWTEgPSBkM19nZW9fY2VudHJvaWRaMSA9IGQzX2dlb19jZW50cm9pZFgyID0gZDNfZ2VvX2NlbnRyb2lkWTIgPSBkM19nZW9fY2VudHJvaWRaMiA9IDA7XG4gICAgZDMuZ2VvLnN0cmVhbShvYmplY3QsIGQzX2dlb19jZW50cm9pZCk7XG4gICAgdmFyIHggPSBkM19nZW9fY2VudHJvaWRYMiwgeSA9IGQzX2dlb19jZW50cm9pZFkyLCB6ID0gZDNfZ2VvX2NlbnRyb2lkWjIsIG0gPSB4ICogeCArIHkgKiB5ICsgeiAqIHo7XG4gICAgaWYgKG0gPCDOtTIpIHtcbiAgICAgIHggPSBkM19nZW9fY2VudHJvaWRYMSwgeSA9IGQzX2dlb19jZW50cm9pZFkxLCB6ID0gZDNfZ2VvX2NlbnRyb2lkWjE7XG4gICAgICBpZiAoZDNfZ2VvX2NlbnRyb2lkVzEgPCDOtSkgeCA9IGQzX2dlb19jZW50cm9pZFgwLCB5ID0gZDNfZ2VvX2NlbnRyb2lkWTAsIHogPSBkM19nZW9fY2VudHJvaWRaMDtcbiAgICAgIG0gPSB4ICogeCArIHkgKiB5ICsgeiAqIHo7XG4gICAgICBpZiAobSA8IM61MikgcmV0dXJuIFsgTmFOLCBOYU4gXTtcbiAgICB9XG4gICAgcmV0dXJuIFsgTWF0aC5hdGFuMih5LCB4KSAqIGQzX2RlZ3JlZXMsIGQzX2FzaW4oeiAvIE1hdGguc3FydChtKSkgKiBkM19kZWdyZWVzIF07XG4gIH07XG4gIHZhciBkM19nZW9fY2VudHJvaWRXMCwgZDNfZ2VvX2NlbnRyb2lkVzEsIGQzX2dlb19jZW50cm9pZFgwLCBkM19nZW9fY2VudHJvaWRZMCwgZDNfZ2VvX2NlbnRyb2lkWjAsIGQzX2dlb19jZW50cm9pZFgxLCBkM19nZW9fY2VudHJvaWRZMSwgZDNfZ2VvX2NlbnRyb2lkWjEsIGQzX2dlb19jZW50cm9pZFgyLCBkM19nZW9fY2VudHJvaWRZMiwgZDNfZ2VvX2NlbnRyb2lkWjI7XG4gIHZhciBkM19nZW9fY2VudHJvaWQgPSB7XG4gICAgc3BoZXJlOiBkM19ub29wLFxuICAgIHBvaW50OiBkM19nZW9fY2VudHJvaWRQb2ludCxcbiAgICBsaW5lU3RhcnQ6IGQzX2dlb19jZW50cm9pZExpbmVTdGFydCxcbiAgICBsaW5lRW5kOiBkM19nZW9fY2VudHJvaWRMaW5lRW5kLFxuICAgIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICBkM19nZW9fY2VudHJvaWQubGluZVN0YXJ0ID0gZDNfZ2VvX2NlbnRyb2lkUmluZ1N0YXJ0O1xuICAgIH0sXG4gICAgcG9seWdvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgICBkM19nZW9fY2VudHJvaWQubGluZVN0YXJ0ID0gZDNfZ2VvX2NlbnRyb2lkTGluZVN0YXJ0O1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gZDNfZ2VvX2NlbnRyb2lkUG9pbnQozrssIM+GKSB7XG4gICAgzrsgKj0gZDNfcmFkaWFucztcbiAgICB2YXIgY29zz4YgPSBNYXRoLmNvcyjPhiAqPSBkM19yYWRpYW5zKTtcbiAgICBkM19nZW9fY2VudHJvaWRQb2ludFhZWihjb3PPhiAqIE1hdGguY29zKM67KSwgY29zz4YgKiBNYXRoLnNpbijOuyksIE1hdGguc2luKM+GKSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX2NlbnRyb2lkUG9pbnRYWVooeCwgeSwgeikge1xuICAgICsrZDNfZ2VvX2NlbnRyb2lkVzA7XG4gICAgZDNfZ2VvX2NlbnRyb2lkWDAgKz0gKHggLSBkM19nZW9fY2VudHJvaWRYMCkgLyBkM19nZW9fY2VudHJvaWRXMDtcbiAgICBkM19nZW9fY2VudHJvaWRZMCArPSAoeSAtIGQzX2dlb19jZW50cm9pZFkwKSAvIGQzX2dlb19jZW50cm9pZFcwO1xuICAgIGQzX2dlb19jZW50cm9pZFowICs9ICh6IC0gZDNfZ2VvX2NlbnRyb2lkWjApIC8gZDNfZ2VvX2NlbnRyb2lkVzA7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX2NlbnRyb2lkTGluZVN0YXJ0KCkge1xuICAgIHZhciB4MCwgeTAsIHowO1xuICAgIGQzX2dlb19jZW50cm9pZC5wb2ludCA9IGZ1bmN0aW9uKM67LCDPhikge1xuICAgICAgzrsgKj0gZDNfcmFkaWFucztcbiAgICAgIHZhciBjb3PPhiA9IE1hdGguY29zKM+GICo9IGQzX3JhZGlhbnMpO1xuICAgICAgeDAgPSBjb3PPhiAqIE1hdGguY29zKM67KTtcbiAgICAgIHkwID0gY29zz4YgKiBNYXRoLnNpbijOuyk7XG4gICAgICB6MCA9IE1hdGguc2luKM+GKTtcbiAgICAgIGQzX2dlb19jZW50cm9pZC5wb2ludCA9IG5leHRQb2ludDtcbiAgICAgIGQzX2dlb19jZW50cm9pZFBvaW50WFlaKHgwLCB5MCwgejApO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbmV4dFBvaW50KM67LCDPhikge1xuICAgICAgzrsgKj0gZDNfcmFkaWFucztcbiAgICAgIHZhciBjb3PPhiA9IE1hdGguY29zKM+GICo9IGQzX3JhZGlhbnMpLCB4ID0gY29zz4YgKiBNYXRoLmNvcyjOuyksIHkgPSBjb3PPhiAqIE1hdGguc2luKM67KSwgeiA9IE1hdGguc2luKM+GKSwgdyA9IE1hdGguYXRhbjIoTWF0aC5zcXJ0KCh3ID0geTAgKiB6IC0gejAgKiB5KSAqIHcgKyAodyA9IHowICogeCAtIHgwICogeikgKiB3ICsgKHcgPSB4MCAqIHkgLSB5MCAqIHgpICogdyksIHgwICogeCArIHkwICogeSArIHowICogeik7XG4gICAgICBkM19nZW9fY2VudHJvaWRXMSArPSB3O1xuICAgICAgZDNfZ2VvX2NlbnRyb2lkWDEgKz0gdyAqICh4MCArICh4MCA9IHgpKTtcbiAgICAgIGQzX2dlb19jZW50cm9pZFkxICs9IHcgKiAoeTAgKyAoeTAgPSB5KSk7XG4gICAgICBkM19nZW9fY2VudHJvaWRaMSArPSB3ICogKHowICsgKHowID0geikpO1xuICAgICAgZDNfZ2VvX2NlbnRyb2lkUG9pbnRYWVooeDAsIHkwLCB6MCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19jZW50cm9pZExpbmVFbmQoKSB7XG4gICAgZDNfZ2VvX2NlbnRyb2lkLnBvaW50ID0gZDNfZ2VvX2NlbnRyb2lkUG9pbnQ7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX2NlbnRyb2lkUmluZ1N0YXJ0KCkge1xuICAgIHZhciDOuzAwLCDPhjAwLCB4MCwgeTAsIHowO1xuICAgIGQzX2dlb19jZW50cm9pZC5wb2ludCA9IGZ1bmN0aW9uKM67LCDPhikge1xuICAgICAgzrswMCA9IM67LCDPhjAwID0gz4Y7XG4gICAgICBkM19nZW9fY2VudHJvaWQucG9pbnQgPSBuZXh0UG9pbnQ7XG4gICAgICDOuyAqPSBkM19yYWRpYW5zO1xuICAgICAgdmFyIGNvc8+GID0gTWF0aC5jb3Moz4YgKj0gZDNfcmFkaWFucyk7XG4gICAgICB4MCA9IGNvc8+GICogTWF0aC5jb3MozrspO1xuICAgICAgeTAgPSBjb3PPhiAqIE1hdGguc2luKM67KTtcbiAgICAgIHowID0gTWF0aC5zaW4oz4YpO1xuICAgICAgZDNfZ2VvX2NlbnRyb2lkUG9pbnRYWVooeDAsIHkwLCB6MCk7XG4gICAgfTtcbiAgICBkM19nZW9fY2VudHJvaWQubGluZUVuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgbmV4dFBvaW50KM67MDAsIM+GMDApO1xuICAgICAgZDNfZ2VvX2NlbnRyb2lkLmxpbmVFbmQgPSBkM19nZW9fY2VudHJvaWRMaW5lRW5kO1xuICAgICAgZDNfZ2VvX2NlbnRyb2lkLnBvaW50ID0gZDNfZ2VvX2NlbnRyb2lkUG9pbnQ7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBuZXh0UG9pbnQozrssIM+GKSB7XG4gICAgICDOuyAqPSBkM19yYWRpYW5zO1xuICAgICAgdmFyIGNvc8+GID0gTWF0aC5jb3Moz4YgKj0gZDNfcmFkaWFucyksIHggPSBjb3PPhiAqIE1hdGguY29zKM67KSwgeSA9IGNvc8+GICogTWF0aC5zaW4ozrspLCB6ID0gTWF0aC5zaW4oz4YpLCBjeCA9IHkwICogeiAtIHowICogeSwgY3kgPSB6MCAqIHggLSB4MCAqIHosIGN6ID0geDAgKiB5IC0geTAgKiB4LCBtID0gTWF0aC5zcXJ0KGN4ICogY3ggKyBjeSAqIGN5ICsgY3ogKiBjeiksIHUgPSB4MCAqIHggKyB5MCAqIHkgKyB6MCAqIHosIHYgPSBtICYmIC1kM19hY29zKHUpIC8gbSwgdyA9IE1hdGguYXRhbjIobSwgdSk7XG4gICAgICBkM19nZW9fY2VudHJvaWRYMiArPSB2ICogY3g7XG4gICAgICBkM19nZW9fY2VudHJvaWRZMiArPSB2ICogY3k7XG4gICAgICBkM19nZW9fY2VudHJvaWRaMiArPSB2ICogY3o7XG4gICAgICBkM19nZW9fY2VudHJvaWRXMSArPSB3O1xuICAgICAgZDNfZ2VvX2NlbnRyb2lkWDEgKz0gdyAqICh4MCArICh4MCA9IHgpKTtcbiAgICAgIGQzX2dlb19jZW50cm9pZFkxICs9IHcgKiAoeTAgKyAoeTAgPSB5KSk7XG4gICAgICBkM19nZW9fY2VudHJvaWRaMSArPSB3ICogKHowICsgKHowID0geikpO1xuICAgICAgZDNfZ2VvX2NlbnRyb2lkUG9pbnRYWVooeDAsIHkwLCB6MCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19jb21wb3NlKGEsIGIpIHtcbiAgICBmdW5jdGlvbiBjb21wb3NlKHgsIHkpIHtcbiAgICAgIHJldHVybiB4ID0gYSh4LCB5KSwgYih4WzBdLCB4WzFdKTtcbiAgICB9XG4gICAgaWYgKGEuaW52ZXJ0ICYmIGIuaW52ZXJ0KSBjb21wb3NlLmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIHJldHVybiB4ID0gYi5pbnZlcnQoeCwgeSksIHggJiYgYS5pbnZlcnQoeFswXSwgeFsxXSk7XG4gICAgfTtcbiAgICByZXR1cm4gY29tcG9zZTtcbiAgfVxuICBmdW5jdGlvbiBkM190cnVlKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19jbGlwUG9seWdvbihzZWdtZW50cywgY29tcGFyZSwgY2xpcFN0YXJ0SW5zaWRlLCBpbnRlcnBvbGF0ZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgc3ViamVjdCA9IFtdLCBjbGlwID0gW107XG4gICAgc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbihzZWdtZW50KSB7XG4gICAgICBpZiAoKG4gPSBzZWdtZW50Lmxlbmd0aCAtIDEpIDw9IDApIHJldHVybjtcbiAgICAgIHZhciBuLCBwMCA9IHNlZ21lbnRbMF0sIHAxID0gc2VnbWVudFtuXTtcbiAgICAgIGlmIChkM19nZW9fc3BoZXJpY2FsRXF1YWwocDAsIHAxKSkge1xuICAgICAgICBsaXN0ZW5lci5saW5lU3RhcnQoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpIGxpc3RlbmVyLnBvaW50KChwMCA9IHNlZ21lbnRbaV0pWzBdLCBwMFsxXSk7XG4gICAgICAgIGxpc3RlbmVyLmxpbmVFbmQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGEgPSBuZXcgZDNfZ2VvX2NsaXBQb2x5Z29uSW50ZXJzZWN0aW9uKHAwLCBzZWdtZW50LCBudWxsLCB0cnVlKSwgYiA9IG5ldyBkM19nZW9fY2xpcFBvbHlnb25JbnRlcnNlY3Rpb24ocDAsIG51bGwsIGEsIGZhbHNlKTtcbiAgICAgIGEubyA9IGI7XG4gICAgICBzdWJqZWN0LnB1c2goYSk7XG4gICAgICBjbGlwLnB1c2goYik7XG4gICAgICBhID0gbmV3IGQzX2dlb19jbGlwUG9seWdvbkludGVyc2VjdGlvbihwMSwgc2VnbWVudCwgbnVsbCwgZmFsc2UpO1xuICAgICAgYiA9IG5ldyBkM19nZW9fY2xpcFBvbHlnb25JbnRlcnNlY3Rpb24ocDEsIG51bGwsIGEsIHRydWUpO1xuICAgICAgYS5vID0gYjtcbiAgICAgIHN1YmplY3QucHVzaChhKTtcbiAgICAgIGNsaXAucHVzaChiKTtcbiAgICB9KTtcbiAgICBjbGlwLnNvcnQoY29tcGFyZSk7XG4gICAgZDNfZ2VvX2NsaXBQb2x5Z29uTGlua0NpcmN1bGFyKHN1YmplY3QpO1xuICAgIGQzX2dlb19jbGlwUG9seWdvbkxpbmtDaXJjdWxhcihjbGlwKTtcbiAgICBpZiAoIXN1YmplY3QubGVuZ3RoKSByZXR1cm47XG4gICAgZm9yICh2YXIgaSA9IDAsIGVudHJ5ID0gY2xpcFN0YXJ0SW5zaWRlLCBuID0gY2xpcC5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgIGNsaXBbaV0uZSA9IGVudHJ5ID0gIWVudHJ5O1xuICAgIH1cbiAgICB2YXIgc3RhcnQgPSBzdWJqZWN0WzBdLCBwb2ludHMsIHBvaW50O1xuICAgIHdoaWxlICgxKSB7XG4gICAgICB2YXIgY3VycmVudCA9IHN0YXJ0LCBpc1N1YmplY3QgPSB0cnVlO1xuICAgICAgd2hpbGUgKGN1cnJlbnQudikgaWYgKChjdXJyZW50ID0gY3VycmVudC5uKSA9PT0gc3RhcnQpIHJldHVybjtcbiAgICAgIHBvaW50cyA9IGN1cnJlbnQuejtcbiAgICAgIGxpc3RlbmVyLmxpbmVTdGFydCgpO1xuICAgICAgZG8ge1xuICAgICAgICBjdXJyZW50LnYgPSBjdXJyZW50Lm8udiA9IHRydWU7XG4gICAgICAgIGlmIChjdXJyZW50LmUpIHtcbiAgICAgICAgICBpZiAoaXNTdWJqZWN0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbiA9IHBvaW50cy5sZW5ndGg7IGkgPCBuOyArK2kpIGxpc3RlbmVyLnBvaW50KChwb2ludCA9IHBvaW50c1tpXSlbMF0sIHBvaW50WzFdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW50ZXJwb2xhdGUoY3VycmVudC54LCBjdXJyZW50Lm4ueCwgMSwgbGlzdGVuZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpc1N1YmplY3QpIHtcbiAgICAgICAgICAgIHBvaW50cyA9IGN1cnJlbnQucC56O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHBvaW50cy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgbGlzdGVuZXIucG9pbnQoKHBvaW50ID0gcG9pbnRzW2ldKVswXSwgcG9pbnRbMV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnRlcnBvbGF0ZShjdXJyZW50LngsIGN1cnJlbnQucC54LCAtMSwgbGlzdGVuZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm87XG4gICAgICAgIHBvaW50cyA9IGN1cnJlbnQuejtcbiAgICAgICAgaXNTdWJqZWN0ID0gIWlzU3ViamVjdDtcbiAgICAgIH0gd2hpbGUgKCFjdXJyZW50LnYpO1xuICAgICAgbGlzdGVuZXIubGluZUVuZCgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2xpcFBvbHlnb25MaW5rQ2lyY3VsYXIoYXJyYXkpIHtcbiAgICBpZiAoIShuID0gYXJyYXkubGVuZ3RoKSkgcmV0dXJuO1xuICAgIHZhciBuLCBpID0gMCwgYSA9IGFycmF5WzBdLCBiO1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBhLm4gPSBiID0gYXJyYXlbaV07XG4gICAgICBiLnAgPSBhO1xuICAgICAgYSA9IGI7XG4gICAgfVxuICAgIGEubiA9IGIgPSBhcnJheVswXTtcbiAgICBiLnAgPSBhO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19jbGlwUG9seWdvbkludGVyc2VjdGlvbihwb2ludCwgcG9pbnRzLCBvdGhlciwgZW50cnkpIHtcbiAgICB0aGlzLnggPSBwb2ludDtcbiAgICB0aGlzLnogPSBwb2ludHM7XG4gICAgdGhpcy5vID0gb3RoZXI7XG4gICAgdGhpcy5lID0gZW50cnk7XG4gICAgdGhpcy52ID0gZmFsc2U7XG4gICAgdGhpcy5uID0gdGhpcy5wID0gbnVsbDtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2xpcChwb2ludFZpc2libGUsIGNsaXBMaW5lLCBpbnRlcnBvbGF0ZSwgY2xpcFN0YXJ0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJvdGF0ZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaW5lID0gY2xpcExpbmUobGlzdGVuZXIpLCByb3RhdGVkQ2xpcFN0YXJ0ID0gcm90YXRlLmludmVydChjbGlwU3RhcnRbMF0sIGNsaXBTdGFydFsxXSk7XG4gICAgICB2YXIgY2xpcCA9IHtcbiAgICAgICAgcG9pbnQ6IHBvaW50LFxuICAgICAgICBsaW5lU3RhcnQ6IGxpbmVTdGFydCxcbiAgICAgICAgbGluZUVuZDogbGluZUVuZCxcbiAgICAgICAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjbGlwLnBvaW50ID0gcG9pbnRSaW5nO1xuICAgICAgICAgIGNsaXAubGluZVN0YXJ0ID0gcmluZ1N0YXJ0O1xuICAgICAgICAgIGNsaXAubGluZUVuZCA9IHJpbmdFbmQ7XG4gICAgICAgICAgc2VnbWVudHMgPSBbXTtcbiAgICAgICAgICBwb2x5Z29uID0gW107XG4gICAgICAgIH0sXG4gICAgICAgIHBvbHlnb25FbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNsaXAucG9pbnQgPSBwb2ludDtcbiAgICAgICAgICBjbGlwLmxpbmVTdGFydCA9IGxpbmVTdGFydDtcbiAgICAgICAgICBjbGlwLmxpbmVFbmQgPSBsaW5lRW5kO1xuICAgICAgICAgIHNlZ21lbnRzID0gZDMubWVyZ2Uoc2VnbWVudHMpO1xuICAgICAgICAgIHZhciBjbGlwU3RhcnRJbnNpZGUgPSBkM19nZW9fcG9pbnRJblBvbHlnb24ocm90YXRlZENsaXBTdGFydCwgcG9seWdvbik7XG4gICAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCFwb2x5Z29uU3RhcnRlZCkgbGlzdGVuZXIucG9seWdvblN0YXJ0KCksIHBvbHlnb25TdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGQzX2dlb19jbGlwUG9seWdvbihzZWdtZW50cywgZDNfZ2VvX2NsaXBTb3J0LCBjbGlwU3RhcnRJbnNpZGUsIGludGVycG9sYXRlLCBsaXN0ZW5lcik7XG4gICAgICAgICAgfSBlbHNlIGlmIChjbGlwU3RhcnRJbnNpZGUpIHtcbiAgICAgICAgICAgIGlmICghcG9seWdvblN0YXJ0ZWQpIGxpc3RlbmVyLnBvbHlnb25TdGFydCgpLCBwb2x5Z29uU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICBsaXN0ZW5lci5saW5lU3RhcnQoKTtcbiAgICAgICAgICAgIGludGVycG9sYXRlKG51bGwsIG51bGwsIDEsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIGxpc3RlbmVyLmxpbmVFbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBvbHlnb25TdGFydGVkKSBsaXN0ZW5lci5wb2x5Z29uRW5kKCksIHBvbHlnb25TdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgc2VnbWVudHMgPSBwb2x5Z29uID0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc3BoZXJlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsaXN0ZW5lci5wb2x5Z29uU3RhcnQoKTtcbiAgICAgICAgICBsaXN0ZW5lci5saW5lU3RhcnQoKTtcbiAgICAgICAgICBpbnRlcnBvbGF0ZShudWxsLCBudWxsLCAxLCBsaXN0ZW5lcik7XG4gICAgICAgICAgbGlzdGVuZXIubGluZUVuZCgpO1xuICAgICAgICAgIGxpc3RlbmVyLnBvbHlnb25FbmQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZ1bmN0aW9uIHBvaW50KM67LCDPhikge1xuICAgICAgICB2YXIgcG9pbnQgPSByb3RhdGUozrssIM+GKTtcbiAgICAgICAgaWYgKHBvaW50VmlzaWJsZSjOuyA9IHBvaW50WzBdLCDPhiA9IHBvaW50WzFdKSkgbGlzdGVuZXIucG9pbnQozrssIM+GKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHBvaW50TGluZSjOuywgz4YpIHtcbiAgICAgICAgdmFyIHBvaW50ID0gcm90YXRlKM67LCDPhik7XG4gICAgICAgIGxpbmUucG9pbnQocG9pbnRbMF0sIHBvaW50WzFdKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGxpbmVTdGFydCgpIHtcbiAgICAgICAgY2xpcC5wb2ludCA9IHBvaW50TGluZTtcbiAgICAgICAgbGluZS5saW5lU3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGxpbmVFbmQoKSB7XG4gICAgICAgIGNsaXAucG9pbnQgPSBwb2ludDtcbiAgICAgICAgbGluZS5saW5lRW5kKCk7XG4gICAgICB9XG4gICAgICB2YXIgc2VnbWVudHM7XG4gICAgICB2YXIgYnVmZmVyID0gZDNfZ2VvX2NsaXBCdWZmZXJMaXN0ZW5lcigpLCByaW5nTGlzdGVuZXIgPSBjbGlwTGluZShidWZmZXIpLCBwb2x5Z29uU3RhcnRlZCA9IGZhbHNlLCBwb2x5Z29uLCByaW5nO1xuICAgICAgZnVuY3Rpb24gcG9pbnRSaW5nKM67LCDPhikge1xuICAgICAgICByaW5nLnB1c2goWyDOuywgz4YgXSk7XG4gICAgICAgIHZhciBwb2ludCA9IHJvdGF0ZSjOuywgz4YpO1xuICAgICAgICByaW5nTGlzdGVuZXIucG9pbnQocG9pbnRbMF0sIHBvaW50WzFdKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHJpbmdTdGFydCgpIHtcbiAgICAgICAgcmluZ0xpc3RlbmVyLmxpbmVTdGFydCgpO1xuICAgICAgICByaW5nID0gW107XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiByaW5nRW5kKCkge1xuICAgICAgICBwb2ludFJpbmcocmluZ1swXVswXSwgcmluZ1swXVsxXSk7XG4gICAgICAgIHJpbmdMaXN0ZW5lci5saW5lRW5kKCk7XG4gICAgICAgIHZhciBjbGVhbiA9IHJpbmdMaXN0ZW5lci5jbGVhbigpLCByaW5nU2VnbWVudHMgPSBidWZmZXIuYnVmZmVyKCksIHNlZ21lbnQsIG4gPSByaW5nU2VnbWVudHMubGVuZ3RoO1xuICAgICAgICByaW5nLnBvcCgpO1xuICAgICAgICBwb2x5Z29uLnB1c2gocmluZyk7XG4gICAgICAgIHJpbmcgPSBudWxsO1xuICAgICAgICBpZiAoIW4pIHJldHVybjtcbiAgICAgICAgaWYgKGNsZWFuICYgMSkge1xuICAgICAgICAgIHNlZ21lbnQgPSByaW5nU2VnbWVudHNbMF07XG4gICAgICAgICAgdmFyIG4gPSBzZWdtZW50Lmxlbmd0aCAtIDEsIGkgPSAtMSwgcG9pbnQ7XG4gICAgICAgICAgaWYgKG4gPiAwKSB7XG4gICAgICAgICAgICBpZiAoIXBvbHlnb25TdGFydGVkKSBsaXN0ZW5lci5wb2x5Z29uU3RhcnQoKSwgcG9seWdvblN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgbGlzdGVuZXIubGluZVN0YXJ0KCk7XG4gICAgICAgICAgICB3aGlsZSAoKytpIDwgbikgbGlzdGVuZXIucG9pbnQoKHBvaW50ID0gc2VnbWVudFtpXSlbMF0sIHBvaW50WzFdKTtcbiAgICAgICAgICAgIGxpc3RlbmVyLmxpbmVFbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuID4gMSAmJiBjbGVhbiAmIDIpIHJpbmdTZWdtZW50cy5wdXNoKHJpbmdTZWdtZW50cy5wb3AoKS5jb25jYXQocmluZ1NlZ21lbnRzLnNoaWZ0KCkpKTtcbiAgICAgICAgc2VnbWVudHMucHVzaChyaW5nU2VnbWVudHMuZmlsdGVyKGQzX2dlb19jbGlwU2VnbWVudExlbmd0aDEpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbGlwO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX2NsaXBTZWdtZW50TGVuZ3RoMShzZWdtZW50KSB7XG4gICAgcmV0dXJuIHNlZ21lbnQubGVuZ3RoID4gMTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2xpcEJ1ZmZlckxpc3RlbmVyKCkge1xuICAgIHZhciBsaW5lcyA9IFtdLCBsaW5lO1xuICAgIHJldHVybiB7XG4gICAgICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsaW5lcy5wdXNoKGxpbmUgPSBbXSk7XG4gICAgICB9LFxuICAgICAgcG9pbnQ6IGZ1bmN0aW9uKM67LCDPhikge1xuICAgICAgICBsaW5lLnB1c2goWyDOuywgz4YgXSk7XG4gICAgICB9LFxuICAgICAgbGluZUVuZDogZDNfbm9vcCxcbiAgICAgIGJ1ZmZlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBidWZmZXIgPSBsaW5lcztcbiAgICAgICAgbGluZXMgPSBbXTtcbiAgICAgICAgbGluZSA9IG51bGw7XG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICB9LFxuICAgICAgcmVqb2luOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA+IDEpIGxpbmVzLnB1c2gobGluZXMucG9wKCkuY29uY2F0KGxpbmVzLnNoaWZ0KCkpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19jbGlwU29ydChhLCBiKSB7XG4gICAgcmV0dXJuICgoYSA9IGEueClbMF0gPCAwID8gYVsxXSAtIGhhbGbPgCAtIM61IDogaGFsZs+AIC0gYVsxXSkgLSAoKGIgPSBiLngpWzBdIDwgMCA/IGJbMV0gLSBoYWxmz4AgLSDOtSA6IGhhbGbPgCAtIGJbMV0pO1xuICB9XG4gIHZhciBkM19nZW9fY2xpcEFudGltZXJpZGlhbiA9IGQzX2dlb19jbGlwKGQzX3RydWUsIGQzX2dlb19jbGlwQW50aW1lcmlkaWFuTGluZSwgZDNfZ2VvX2NsaXBBbnRpbWVyaWRpYW5JbnRlcnBvbGF0ZSwgWyAtz4AsIC3PgCAvIDIgXSk7XG4gIGZ1bmN0aW9uIGQzX2dlb19jbGlwQW50aW1lcmlkaWFuTGluZShsaXN0ZW5lcikge1xuICAgIHZhciDOuzAgPSBOYU4sIM+GMCA9IE5hTiwgc867MCA9IE5hTiwgY2xlYW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxpc3RlbmVyLmxpbmVTdGFydCgpO1xuICAgICAgICBjbGVhbiA9IDE7XG4gICAgICB9LFxuICAgICAgcG9pbnQ6IGZ1bmN0aW9uKM67MSwgz4YxKSB7XG4gICAgICAgIHZhciBzzrsxID0gzrsxID4gMCA/IM+AIDogLc+ALCBkzrsgPSBhYnMozrsxIC0gzrswKTtcbiAgICAgICAgaWYgKGFicyhkzrsgLSDPgCkgPCDOtSkge1xuICAgICAgICAgIGxpc3RlbmVyLnBvaW50KM67MCwgz4YwID0gKM+GMCArIM+GMSkgLyAyID4gMCA/IGhhbGbPgCA6IC1oYWxmz4ApO1xuICAgICAgICAgIGxpc3RlbmVyLnBvaW50KHPOuzAsIM+GMCk7XG4gICAgICAgICAgbGlzdGVuZXIubGluZUVuZCgpO1xuICAgICAgICAgIGxpc3RlbmVyLmxpbmVTdGFydCgpO1xuICAgICAgICAgIGxpc3RlbmVyLnBvaW50KHPOuzEsIM+GMCk7XG4gICAgICAgICAgbGlzdGVuZXIucG9pbnQozrsxLCDPhjApO1xuICAgICAgICAgIGNsZWFuID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChzzrswICE9PSBzzrsxICYmIGTOuyA+PSDPgCkge1xuICAgICAgICAgIGlmIChhYnMozrswIC0gc867MCkgPCDOtSkgzrswIC09IHPOuzAgKiDOtTtcbiAgICAgICAgICBpZiAoYWJzKM67MSAtIHPOuzEpIDwgzrUpIM67MSAtPSBzzrsxICogzrU7XG4gICAgICAgICAgz4YwID0gZDNfZ2VvX2NsaXBBbnRpbWVyaWRpYW5JbnRlcnNlY3QozrswLCDPhjAsIM67MSwgz4YxKTtcbiAgICAgICAgICBsaXN0ZW5lci5wb2ludChzzrswLCDPhjApO1xuICAgICAgICAgIGxpc3RlbmVyLmxpbmVFbmQoKTtcbiAgICAgICAgICBsaXN0ZW5lci5saW5lU3RhcnQoKTtcbiAgICAgICAgICBsaXN0ZW5lci5wb2ludChzzrsxLCDPhjApO1xuICAgICAgICAgIGNsZWFuID0gMDtcbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW5lci5wb2ludCjOuzAgPSDOuzEsIM+GMCA9IM+GMSk7XG4gICAgICAgIHPOuzAgPSBzzrsxO1xuICAgICAgfSxcbiAgICAgIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsaXN0ZW5lci5saW5lRW5kKCk7XG4gICAgICAgIM67MCA9IM+GMCA9IE5hTjtcbiAgICAgIH0sXG4gICAgICBjbGVhbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAyIC0gY2xlYW47XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY2xpcEFudGltZXJpZGlhbkludGVyc2VjdCjOuzAsIM+GMCwgzrsxLCDPhjEpIHtcbiAgICB2YXIgY29zz4YwLCBjb3PPhjEsIHNpbs67MF/OuzEgPSBNYXRoLnNpbijOuzAgLSDOuzEpO1xuICAgIHJldHVybiBhYnMoc2luzrswX867MSkgPiDOtSA/IE1hdGguYXRhbigoTWF0aC5zaW4oz4YwKSAqIChjb3PPhjEgPSBNYXRoLmNvcyjPhjEpKSAqIE1hdGguc2luKM67MSkgLSBNYXRoLnNpbijPhjEpICogKGNvc8+GMCA9IE1hdGguY29zKM+GMCkpICogTWF0aC5zaW4ozrswKSkgLyAoY29zz4YwICogY29zz4YxICogc2luzrswX867MSkpIDogKM+GMCArIM+GMSkgLyAyO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19jbGlwQW50aW1lcmlkaWFuSW50ZXJwb2xhdGUoZnJvbSwgdG8sIGRpcmVjdGlvbiwgbGlzdGVuZXIpIHtcbiAgICB2YXIgz4Y7XG4gICAgaWYgKGZyb20gPT0gbnVsbCkge1xuICAgICAgz4YgPSBkaXJlY3Rpb24gKiBoYWxmz4A7XG4gICAgICBsaXN0ZW5lci5wb2ludCgtz4AsIM+GKTtcbiAgICAgIGxpc3RlbmVyLnBvaW50KDAsIM+GKTtcbiAgICAgIGxpc3RlbmVyLnBvaW50KM+ALCDPhik7XG4gICAgICBsaXN0ZW5lci5wb2ludCjPgCwgMCk7XG4gICAgICBsaXN0ZW5lci5wb2ludCjPgCwgLc+GKTtcbiAgICAgIGxpc3RlbmVyLnBvaW50KDAsIC3Phik7XG4gICAgICBsaXN0ZW5lci5wb2ludCgtz4AsIC3Phik7XG4gICAgICBsaXN0ZW5lci5wb2ludCgtz4AsIDApO1xuICAgICAgbGlzdGVuZXIucG9pbnQoLc+ALCDPhik7XG4gICAgfSBlbHNlIGlmIChhYnMoZnJvbVswXSAtIHRvWzBdKSA+IM61KSB7XG4gICAgICB2YXIgcyA9IGZyb21bMF0gPCB0b1swXSA/IM+AIDogLc+AO1xuICAgICAgz4YgPSBkaXJlY3Rpb24gKiBzIC8gMjtcbiAgICAgIGxpc3RlbmVyLnBvaW50KC1zLCDPhik7XG4gICAgICBsaXN0ZW5lci5wb2ludCgwLCDPhik7XG4gICAgICBsaXN0ZW5lci5wb2ludChzLCDPhik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RlbmVyLnBvaW50KHRvWzBdLCB0b1sxXSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19wb2ludEluUG9seWdvbihwb2ludCwgcG9seWdvbikge1xuICAgIHZhciBtZXJpZGlhbiA9IHBvaW50WzBdLCBwYXJhbGxlbCA9IHBvaW50WzFdLCBtZXJpZGlhbk5vcm1hbCA9IFsgTWF0aC5zaW4obWVyaWRpYW4pLCAtTWF0aC5jb3MobWVyaWRpYW4pLCAwIF0sIHBvbGFyQW5nbGUgPSAwLCB3aW5kaW5nID0gMDtcbiAgICBkM19nZW9fYXJlYVJpbmdTdW0ucmVzZXQoKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IHBvbHlnb24ubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICB2YXIgcmluZyA9IHBvbHlnb25baV0sIG0gPSByaW5nLmxlbmd0aDtcbiAgICAgIGlmICghbSkgY29udGludWU7XG4gICAgICB2YXIgcG9pbnQwID0gcmluZ1swXSwgzrswID0gcG9pbnQwWzBdLCDPhjAgPSBwb2ludDBbMV0gLyAyICsgz4AgLyA0LCBzaW7PhjAgPSBNYXRoLnNpbijPhjApLCBjb3PPhjAgPSBNYXRoLmNvcyjPhjApLCBqID0gMTtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGlmIChqID09PSBtKSBqID0gMDtcbiAgICAgICAgcG9pbnQgPSByaW5nW2pdO1xuICAgICAgICB2YXIgzrsgPSBwb2ludFswXSwgz4YgPSBwb2ludFsxXSAvIDIgKyDPgCAvIDQsIHNpbs+GID0gTWF0aC5zaW4oz4YpLCBjb3PPhiA9IE1hdGguY29zKM+GKSwgZM67ID0gzrsgLSDOuzAsIHNkzrsgPSBkzrsgPj0gMCA/IDEgOiAtMSwgYWTOuyA9IHNkzrsgKiBkzrssIGFudGltZXJpZGlhbiA9IGFkzrsgPiDPgCwgayA9IHNpbs+GMCAqIHNpbs+GO1xuICAgICAgICBkM19nZW9fYXJlYVJpbmdTdW0uYWRkKE1hdGguYXRhbjIoayAqIHNkzrsgKiBNYXRoLnNpbihhZM67KSwgY29zz4YwICogY29zz4YgKyBrICogTWF0aC5jb3MoYWTOuykpKTtcbiAgICAgICAgcG9sYXJBbmdsZSArPSBhbnRpbWVyaWRpYW4gPyBkzrsgKyBzZM67ICogz4QgOiBkzrs7XG4gICAgICAgIGlmIChhbnRpbWVyaWRpYW4gXiDOuzAgPj0gbWVyaWRpYW4gXiDOuyA+PSBtZXJpZGlhbikge1xuICAgICAgICAgIHZhciBhcmMgPSBkM19nZW9fY2FydGVzaWFuQ3Jvc3MoZDNfZ2VvX2NhcnRlc2lhbihwb2ludDApLCBkM19nZW9fY2FydGVzaWFuKHBvaW50KSk7XG4gICAgICAgICAgZDNfZ2VvX2NhcnRlc2lhbk5vcm1hbGl6ZShhcmMpO1xuICAgICAgICAgIHZhciBpbnRlcnNlY3Rpb24gPSBkM19nZW9fY2FydGVzaWFuQ3Jvc3MobWVyaWRpYW5Ob3JtYWwsIGFyYyk7XG4gICAgICAgICAgZDNfZ2VvX2NhcnRlc2lhbk5vcm1hbGl6ZShpbnRlcnNlY3Rpb24pO1xuICAgICAgICAgIHZhciDPhmFyYyA9IChhbnRpbWVyaWRpYW4gXiBkzrsgPj0gMCA/IC0xIDogMSkgKiBkM19hc2luKGludGVyc2VjdGlvblsyXSk7XG4gICAgICAgICAgaWYgKHBhcmFsbGVsID4gz4ZhcmMgfHwgcGFyYWxsZWwgPT09IM+GYXJjICYmIChhcmNbMF0gfHwgYXJjWzFdKSkge1xuICAgICAgICAgICAgd2luZGluZyArPSBhbnRpbWVyaWRpYW4gXiBkzrsgPj0gMCA/IDEgOiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFqKyspIGJyZWFrO1xuICAgICAgICDOuzAgPSDOuywgc2luz4YwID0gc2luz4YsIGNvc8+GMCA9IGNvc8+GLCBwb2ludDAgPSBwb2ludDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChwb2xhckFuZ2xlIDwgLc61IHx8IHBvbGFyQW5nbGUgPCDOtSAmJiBkM19nZW9fYXJlYVJpbmdTdW0gPCAtzrUpIF4gd2luZGluZyAmIDE7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX2NsaXBDaXJjbGUocmFkaXVzKSB7XG4gICAgdmFyIGNyID0gTWF0aC5jb3MocmFkaXVzKSwgc21hbGxSYWRpdXMgPSBjciA+IDAsIG5vdEhlbWlzcGhlcmUgPSBhYnMoY3IpID4gzrUsIGludGVycG9sYXRlID0gZDNfZ2VvX2NpcmNsZUludGVycG9sYXRlKHJhZGl1cywgNiAqIGQzX3JhZGlhbnMpO1xuICAgIHJldHVybiBkM19nZW9fY2xpcCh2aXNpYmxlLCBjbGlwTGluZSwgaW50ZXJwb2xhdGUsIHNtYWxsUmFkaXVzID8gWyAwLCAtcmFkaXVzIF0gOiBbIC3PgCwgcmFkaXVzIC0gz4AgXSk7XG4gICAgZnVuY3Rpb24gdmlzaWJsZSjOuywgz4YpIHtcbiAgICAgIHJldHVybiBNYXRoLmNvcyjOuykgKiBNYXRoLmNvcyjPhikgPiBjcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xpcExpbmUobGlzdGVuZXIpIHtcbiAgICAgIHZhciBwb2ludDAsIGMwLCB2MCwgdjAwLCBjbGVhbjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdjAwID0gdjAgPSBmYWxzZTtcbiAgICAgICAgICBjbGVhbiA9IDE7XG4gICAgICAgIH0sXG4gICAgICAgIHBvaW50OiBmdW5jdGlvbijOuywgz4YpIHtcbiAgICAgICAgICB2YXIgcG9pbnQxID0gWyDOuywgz4YgXSwgcG9pbnQyLCB2ID0gdmlzaWJsZSjOuywgz4YpLCBjID0gc21hbGxSYWRpdXMgPyB2ID8gMCA6IGNvZGUozrssIM+GKSA6IHYgPyBjb2RlKM67ICsgKM67IDwgMCA/IM+AIDogLc+AKSwgz4YpIDogMDtcbiAgICAgICAgICBpZiAoIXBvaW50MCAmJiAodjAwID0gdjAgPSB2KSkgbGlzdGVuZXIubGluZVN0YXJ0KCk7XG4gICAgICAgICAgaWYgKHYgIT09IHYwKSB7XG4gICAgICAgICAgICBwb2ludDIgPSBpbnRlcnNlY3QocG9pbnQwLCBwb2ludDEpO1xuICAgICAgICAgICAgaWYgKGQzX2dlb19zcGhlcmljYWxFcXVhbChwb2ludDAsIHBvaW50MikgfHwgZDNfZ2VvX3NwaGVyaWNhbEVxdWFsKHBvaW50MSwgcG9pbnQyKSkge1xuICAgICAgICAgICAgICBwb2ludDFbMF0gKz0gzrU7XG4gICAgICAgICAgICAgIHBvaW50MVsxXSArPSDOtTtcbiAgICAgICAgICAgICAgdiA9IHZpc2libGUocG9pbnQxWzBdLCBwb2ludDFbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodiAhPT0gdjApIHtcbiAgICAgICAgICAgIGNsZWFuID0gMDtcbiAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpbmVTdGFydCgpO1xuICAgICAgICAgICAgICBwb2ludDIgPSBpbnRlcnNlY3QocG9pbnQxLCBwb2ludDApO1xuICAgICAgICAgICAgICBsaXN0ZW5lci5wb2ludChwb2ludDJbMF0sIHBvaW50MlsxXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwb2ludDIgPSBpbnRlcnNlY3QocG9pbnQwLCBwb2ludDEpO1xuICAgICAgICAgICAgICBsaXN0ZW5lci5wb2ludChwb2ludDJbMF0sIHBvaW50MlsxXSk7XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpbmVFbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50MCA9IHBvaW50MjtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5vdEhlbWlzcGhlcmUgJiYgcG9pbnQwICYmIHNtYWxsUmFkaXVzIF4gdikge1xuICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICBpZiAoIShjICYgYzApICYmICh0ID0gaW50ZXJzZWN0KHBvaW50MSwgcG9pbnQwLCB0cnVlKSkpIHtcbiAgICAgICAgICAgICAgY2xlYW4gPSAwO1xuICAgICAgICAgICAgICBpZiAoc21hbGxSYWRpdXMpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5saW5lU3RhcnQoKTtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5wb2ludCh0WzBdWzBdLCB0WzBdWzFdKTtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5wb2ludCh0WzFdWzBdLCB0WzFdWzFdKTtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5saW5lRW5kKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIucG9pbnQodFsxXVswXSwgdFsxXVsxXSk7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIubGluZUVuZCgpO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpbmVTdGFydCgpO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLnBvaW50KHRbMF1bMF0sIHRbMF1bMV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2ICYmICghcG9pbnQwIHx8ICFkM19nZW9fc3BoZXJpY2FsRXF1YWwocG9pbnQwLCBwb2ludDEpKSkge1xuICAgICAgICAgICAgbGlzdGVuZXIucG9pbnQocG9pbnQxWzBdLCBwb2ludDFbMV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwb2ludDAgPSBwb2ludDEsIHYwID0gdiwgYzAgPSBjO1xuICAgICAgICB9LFxuICAgICAgICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAodjApIGxpc3RlbmVyLmxpbmVFbmQoKTtcbiAgICAgICAgICBwb2ludDAgPSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGNsZWFuIHwgKHYwMCAmJiB2MCkgPDwgMTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW50ZXJzZWN0KGEsIGIsIHR3bykge1xuICAgICAgdmFyIHBhID0gZDNfZ2VvX2NhcnRlc2lhbihhKSwgcGIgPSBkM19nZW9fY2FydGVzaWFuKGIpO1xuICAgICAgdmFyIG4xID0gWyAxLCAwLCAwIF0sIG4yID0gZDNfZ2VvX2NhcnRlc2lhbkNyb3NzKHBhLCBwYiksIG4ybjIgPSBkM19nZW9fY2FydGVzaWFuRG90KG4yLCBuMiksIG4xbjIgPSBuMlswXSwgZGV0ZXJtaW5hbnQgPSBuMm4yIC0gbjFuMiAqIG4xbjI7XG4gICAgICBpZiAoIWRldGVybWluYW50KSByZXR1cm4gIXR3byAmJiBhO1xuICAgICAgdmFyIGMxID0gY3IgKiBuMm4yIC8gZGV0ZXJtaW5hbnQsIGMyID0gLWNyICogbjFuMiAvIGRldGVybWluYW50LCBuMXhuMiA9IGQzX2dlb19jYXJ0ZXNpYW5Dcm9zcyhuMSwgbjIpLCBBID0gZDNfZ2VvX2NhcnRlc2lhblNjYWxlKG4xLCBjMSksIEIgPSBkM19nZW9fY2FydGVzaWFuU2NhbGUobjIsIGMyKTtcbiAgICAgIGQzX2dlb19jYXJ0ZXNpYW5BZGQoQSwgQik7XG4gICAgICB2YXIgdSA9IG4xeG4yLCB3ID0gZDNfZ2VvX2NhcnRlc2lhbkRvdChBLCB1KSwgdXUgPSBkM19nZW9fY2FydGVzaWFuRG90KHUsIHUpLCB0MiA9IHcgKiB3IC0gdXUgKiAoZDNfZ2VvX2NhcnRlc2lhbkRvdChBLCBBKSAtIDEpO1xuICAgICAgaWYgKHQyIDwgMCkgcmV0dXJuO1xuICAgICAgdmFyIHQgPSBNYXRoLnNxcnQodDIpLCBxID0gZDNfZ2VvX2NhcnRlc2lhblNjYWxlKHUsICgtdyAtIHQpIC8gdXUpO1xuICAgICAgZDNfZ2VvX2NhcnRlc2lhbkFkZChxLCBBKTtcbiAgICAgIHEgPSBkM19nZW9fc3BoZXJpY2FsKHEpO1xuICAgICAgaWYgKCF0d28pIHJldHVybiBxO1xuICAgICAgdmFyIM67MCA9IGFbMF0sIM67MSA9IGJbMF0sIM+GMCA9IGFbMV0sIM+GMSA9IGJbMV0sIHo7XG4gICAgICBpZiAozrsxIDwgzrswKSB6ID0gzrswLCDOuzAgPSDOuzEsIM67MSA9IHo7XG4gICAgICB2YXIgzrTOuyA9IM67MSAtIM67MCwgcG9sYXIgPSBhYnMozrTOuyAtIM+AKSA8IM61LCBtZXJpZGlhbiA9IHBvbGFyIHx8IM60zrsgPCDOtTtcbiAgICAgIGlmICghcG9sYXIgJiYgz4YxIDwgz4YwKSB6ID0gz4YwLCDPhjAgPSDPhjEsIM+GMSA9IHo7XG4gICAgICBpZiAobWVyaWRpYW4gPyBwb2xhciA/IM+GMCArIM+GMSA+IDAgXiBxWzFdIDwgKGFicyhxWzBdIC0gzrswKSA8IM61ID8gz4YwIDogz4YxKSA6IM+GMCA8PSBxWzFdICYmIHFbMV0gPD0gz4YxIDogzrTOuyA+IM+AIF4gKM67MCA8PSBxWzBdICYmIHFbMF0gPD0gzrsxKSkge1xuICAgICAgICB2YXIgcTEgPSBkM19nZW9fY2FydGVzaWFuU2NhbGUodSwgKC13ICsgdCkgLyB1dSk7XG4gICAgICAgIGQzX2dlb19jYXJ0ZXNpYW5BZGQocTEsIEEpO1xuICAgICAgICByZXR1cm4gWyBxLCBkM19nZW9fc3BoZXJpY2FsKHExKSBdO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjb2RlKM67LCDPhikge1xuICAgICAgdmFyIHIgPSBzbWFsbFJhZGl1cyA/IHJhZGl1cyA6IM+AIC0gcmFkaXVzLCBjb2RlID0gMDtcbiAgICAgIGlmICjOuyA8IC1yKSBjb2RlIHw9IDE7IGVsc2UgaWYgKM67ID4gcikgY29kZSB8PSAyO1xuICAgICAgaWYgKM+GIDwgLXIpIGNvZGUgfD0gNDsgZWxzZSBpZiAoz4YgPiByKSBjb2RlIHw9IDg7XG4gICAgICByZXR1cm4gY29kZTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvbV9jbGlwTGluZSh4MCwgeTAsIHgxLCB5MSkge1xuICAgIHJldHVybiBmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgYSA9IGxpbmUuYSwgYiA9IGxpbmUuYiwgYXggPSBhLngsIGF5ID0gYS55LCBieCA9IGIueCwgYnkgPSBiLnksIHQwID0gMCwgdDEgPSAxLCBkeCA9IGJ4IC0gYXgsIGR5ID0gYnkgLSBheSwgcjtcbiAgICAgIHIgPSB4MCAtIGF4O1xuICAgICAgaWYgKCFkeCAmJiByID4gMCkgcmV0dXJuO1xuICAgICAgciAvPSBkeDtcbiAgICAgIGlmIChkeCA8IDApIHtcbiAgICAgICAgaWYgKHIgPCB0MCkgcmV0dXJuO1xuICAgICAgICBpZiAociA8IHQxKSB0MSA9IHI7XG4gICAgICB9IGVsc2UgaWYgKGR4ID4gMCkge1xuICAgICAgICBpZiAociA+IHQxKSByZXR1cm47XG4gICAgICAgIGlmIChyID4gdDApIHQwID0gcjtcbiAgICAgIH1cbiAgICAgIHIgPSB4MSAtIGF4O1xuICAgICAgaWYgKCFkeCAmJiByIDwgMCkgcmV0dXJuO1xuICAgICAgciAvPSBkeDtcbiAgICAgIGlmIChkeCA8IDApIHtcbiAgICAgICAgaWYgKHIgPiB0MSkgcmV0dXJuO1xuICAgICAgICBpZiAociA+IHQwKSB0MCA9IHI7XG4gICAgICB9IGVsc2UgaWYgKGR4ID4gMCkge1xuICAgICAgICBpZiAociA8IHQwKSByZXR1cm47XG4gICAgICAgIGlmIChyIDwgdDEpIHQxID0gcjtcbiAgICAgIH1cbiAgICAgIHIgPSB5MCAtIGF5O1xuICAgICAgaWYgKCFkeSAmJiByID4gMCkgcmV0dXJuO1xuICAgICAgciAvPSBkeTtcbiAgICAgIGlmIChkeSA8IDApIHtcbiAgICAgICAgaWYgKHIgPCB0MCkgcmV0dXJuO1xuICAgICAgICBpZiAociA8IHQxKSB0MSA9IHI7XG4gICAgICB9IGVsc2UgaWYgKGR5ID4gMCkge1xuICAgICAgICBpZiAociA+IHQxKSByZXR1cm47XG4gICAgICAgIGlmIChyID4gdDApIHQwID0gcjtcbiAgICAgIH1cbiAgICAgIHIgPSB5MSAtIGF5O1xuICAgICAgaWYgKCFkeSAmJiByIDwgMCkgcmV0dXJuO1xuICAgICAgciAvPSBkeTtcbiAgICAgIGlmIChkeSA8IDApIHtcbiAgICAgICAgaWYgKHIgPiB0MSkgcmV0dXJuO1xuICAgICAgICBpZiAociA+IHQwKSB0MCA9IHI7XG4gICAgICB9IGVsc2UgaWYgKGR5ID4gMCkge1xuICAgICAgICBpZiAociA8IHQwKSByZXR1cm47XG4gICAgICAgIGlmIChyIDwgdDEpIHQxID0gcjtcbiAgICAgIH1cbiAgICAgIGlmICh0MCA+IDApIGxpbmUuYSA9IHtcbiAgICAgICAgeDogYXggKyB0MCAqIGR4LFxuICAgICAgICB5OiBheSArIHQwICogZHlcbiAgICAgIH07XG4gICAgICBpZiAodDEgPCAxKSBsaW5lLmIgPSB7XG4gICAgICAgIHg6IGF4ICsgdDEgKiBkeCxcbiAgICAgICAgeTogYXkgKyB0MSAqIGR5XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGxpbmU7XG4gICAgfTtcbiAgfVxuICB2YXIgZDNfZ2VvX2NsaXBFeHRlbnRNQVggPSAxZTk7XG4gIGQzLmdlby5jbGlwRXh0ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHgwLCB5MCwgeDEsIHkxLCBzdHJlYW0sIGNsaXAsIGNsaXBFeHRlbnQgPSB7XG4gICAgICBzdHJlYW06IGZ1bmN0aW9uKG91dHB1dCkge1xuICAgICAgICBpZiAoc3RyZWFtKSBzdHJlYW0udmFsaWQgPSBmYWxzZTtcbiAgICAgICAgc3RyZWFtID0gY2xpcChvdXRwdXQpO1xuICAgICAgICBzdHJlYW0udmFsaWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgICAgfSxcbiAgICAgIGV4dGVudDogZnVuY3Rpb24oXykge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBbIFsgeDAsIHkwIF0sIFsgeDEsIHkxIF0gXTtcbiAgICAgICAgY2xpcCA9IGQzX2dlb19jbGlwRXh0ZW50KHgwID0gK19bMF1bMF0sIHkwID0gK19bMF1bMV0sIHgxID0gK19bMV1bMF0sIHkxID0gK19bMV1bMV0pO1xuICAgICAgICBpZiAoc3RyZWFtKSBzdHJlYW0udmFsaWQgPSBmYWxzZSwgc3RyZWFtID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGNsaXBFeHRlbnQ7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gY2xpcEV4dGVudC5leHRlbnQoWyBbIDAsIDAgXSwgWyA5NjAsIDUwMCBdIF0pO1xuICB9O1xuICBmdW5jdGlvbiBkM19nZW9fY2xpcEV4dGVudCh4MCwgeTAsIHgxLCB5MSkge1xuICAgIHJldHVybiBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3RlbmVyXyA9IGxpc3RlbmVyLCBidWZmZXJMaXN0ZW5lciA9IGQzX2dlb19jbGlwQnVmZmVyTGlzdGVuZXIoKSwgY2xpcExpbmUgPSBkM19nZW9tX2NsaXBMaW5lKHgwLCB5MCwgeDEsIHkxKSwgc2VnbWVudHMsIHBvbHlnb24sIHJpbmc7XG4gICAgICB2YXIgY2xpcCA9IHtcbiAgICAgICAgcG9pbnQ6IHBvaW50LFxuICAgICAgICBsaW5lU3RhcnQ6IGxpbmVTdGFydCxcbiAgICAgICAgbGluZUVuZDogbGluZUVuZCxcbiAgICAgICAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsaXN0ZW5lciA9IGJ1ZmZlckxpc3RlbmVyO1xuICAgICAgICAgIHNlZ21lbnRzID0gW107XG4gICAgICAgICAgcG9seWdvbiA9IFtdO1xuICAgICAgICAgIGNsZWFuID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9seWdvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lcl87XG4gICAgICAgICAgc2VnbWVudHMgPSBkMy5tZXJnZShzZWdtZW50cyk7XG4gICAgICAgICAgdmFyIGNsaXBTdGFydEluc2lkZSA9IGluc2lkZVBvbHlnb24oWyB4MCwgeTEgXSksIGluc2lkZSA9IGNsZWFuICYmIGNsaXBTdGFydEluc2lkZSwgdmlzaWJsZSA9IHNlZ21lbnRzLmxlbmd0aDtcbiAgICAgICAgICBpZiAoaW5zaWRlIHx8IHZpc2libGUpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnBvbHlnb25TdGFydCgpO1xuICAgICAgICAgICAgaWYgKGluc2lkZSkge1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saW5lU3RhcnQoKTtcbiAgICAgICAgICAgICAgaW50ZXJwb2xhdGUobnVsbCwgbnVsbCwgMSwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saW5lRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgICBkM19nZW9fY2xpcFBvbHlnb24oc2VnbWVudHMsIGNvbXBhcmUsIGNsaXBTdGFydEluc2lkZSwgaW50ZXJwb2xhdGUsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpc3RlbmVyLnBvbHlnb25FbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VnbWVudHMgPSBwb2x5Z29uID0gcmluZyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBmdW5jdGlvbiBpbnNpZGVQb2x5Z29uKHApIHtcbiAgICAgICAgdmFyIHduID0gMCwgbiA9IHBvbHlnb24ubGVuZ3RoLCB5ID0gcFsxXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICBmb3IgKHZhciBqID0gMSwgdiA9IHBvbHlnb25baV0sIG0gPSB2Lmxlbmd0aCwgYSA9IHZbMF0sIGI7IGogPCBtOyArK2opIHtcbiAgICAgICAgICAgIGIgPSB2W2pdO1xuICAgICAgICAgICAgaWYgKGFbMV0gPD0geSkge1xuICAgICAgICAgICAgICBpZiAoYlsxXSA+IHkgJiYgZDNfY3Jvc3MyZChhLCBiLCBwKSA+IDApICsrd247XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoYlsxXSA8PSB5ICYmIGQzX2Nyb3NzMmQoYSwgYiwgcCkgPCAwKSAtLXduO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSA9IGI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3biAhPT0gMDtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGludGVycG9sYXRlKGZyb20sIHRvLCBkaXJlY3Rpb24sIGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBhID0gMCwgYTEgPSAwO1xuICAgICAgICBpZiAoZnJvbSA9PSBudWxsIHx8IChhID0gY29ybmVyKGZyb20sIGRpcmVjdGlvbikpICE9PSAoYTEgPSBjb3JuZXIodG8sIGRpcmVjdGlvbikpIHx8IGNvbXBhcmVQb2ludHMoZnJvbSwgdG8pIDwgMCBeIGRpcmVjdGlvbiA+IDApIHtcbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBsaXN0ZW5lci5wb2ludChhID09PSAwIHx8IGEgPT09IDMgPyB4MCA6IHgxLCBhID4gMSA/IHkxIDogeTApO1xuICAgICAgICAgIH0gd2hpbGUgKChhID0gKGEgKyBkaXJlY3Rpb24gKyA0KSAlIDQpICE9PSBhMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdGVuZXIucG9pbnQodG9bMF0sIHRvWzFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gcG9pbnRWaXNpYmxlKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHgwIDw9IHggJiYgeCA8PSB4MSAmJiB5MCA8PSB5ICYmIHkgPD0geTE7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBwb2ludCh4LCB5KSB7XG4gICAgICAgIGlmIChwb2ludFZpc2libGUoeCwgeSkpIGxpc3RlbmVyLnBvaW50KHgsIHkpO1xuICAgICAgfVxuICAgICAgdmFyIHhfXywgeV9fLCB2X18sIHhfLCB5Xywgdl8sIGZpcnN0LCBjbGVhbjtcbiAgICAgIGZ1bmN0aW9uIGxpbmVTdGFydCgpIHtcbiAgICAgICAgY2xpcC5wb2ludCA9IGxpbmVQb2ludDtcbiAgICAgICAgaWYgKHBvbHlnb24pIHBvbHlnb24ucHVzaChyaW5nID0gW10pO1xuICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIHZfID0gZmFsc2U7XG4gICAgICAgIHhfID0geV8gPSBOYU47XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBsaW5lRW5kKCkge1xuICAgICAgICBpZiAoc2VnbWVudHMpIHtcbiAgICAgICAgICBsaW5lUG9pbnQoeF9fLCB5X18pO1xuICAgICAgICAgIGlmICh2X18gJiYgdl8pIGJ1ZmZlckxpc3RlbmVyLnJlam9pbigpO1xuICAgICAgICAgIHNlZ21lbnRzLnB1c2goYnVmZmVyTGlzdGVuZXIuYnVmZmVyKCkpO1xuICAgICAgICB9XG4gICAgICAgIGNsaXAucG9pbnQgPSBwb2ludDtcbiAgICAgICAgaWYgKHZfKSBsaXN0ZW5lci5saW5lRW5kKCk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBsaW5lUG9pbnQoeCwgeSkge1xuICAgICAgICB4ID0gTWF0aC5tYXgoLWQzX2dlb19jbGlwRXh0ZW50TUFYLCBNYXRoLm1pbihkM19nZW9fY2xpcEV4dGVudE1BWCwgeCkpO1xuICAgICAgICB5ID0gTWF0aC5tYXgoLWQzX2dlb19jbGlwRXh0ZW50TUFYLCBNYXRoLm1pbihkM19nZW9fY2xpcEV4dGVudE1BWCwgeSkpO1xuICAgICAgICB2YXIgdiA9IHBvaW50VmlzaWJsZSh4LCB5KTtcbiAgICAgICAgaWYgKHBvbHlnb24pIHJpbmcucHVzaChbIHgsIHkgXSk7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgIHhfXyA9IHgsIHlfXyA9IHksIHZfXyA9IHY7XG4gICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgbGlzdGVuZXIubGluZVN0YXJ0KCk7XG4gICAgICAgICAgICBsaXN0ZW5lci5wb2ludCh4LCB5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHYgJiYgdl8pIGxpc3RlbmVyLnBvaW50KHgsIHkpOyBlbHNlIHtcbiAgICAgICAgICAgIHZhciBsID0ge1xuICAgICAgICAgICAgICBhOiB7XG4gICAgICAgICAgICAgICAgeDogeF8sXG4gICAgICAgICAgICAgICAgeTogeV9cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYjoge1xuICAgICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgICAgeTogeVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGNsaXBMaW5lKGwpKSB7XG4gICAgICAgICAgICAgIGlmICghdl8pIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5saW5lU3RhcnQoKTtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5wb2ludChsLmEueCwgbC5hLnkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxpc3RlbmVyLnBvaW50KGwuYi54LCBsLmIueSk7XG4gICAgICAgICAgICAgIGlmICghdikgbGlzdGVuZXIubGluZUVuZCgpO1xuICAgICAgICAgICAgICBjbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2KSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpbmVTdGFydCgpO1xuICAgICAgICAgICAgICBsaXN0ZW5lci5wb2ludCh4LCB5KTtcbiAgICAgICAgICAgICAgY2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeF8gPSB4LCB5XyA9IHksIHZfID0gdjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbGlwO1xuICAgIH07XG4gICAgZnVuY3Rpb24gY29ybmVyKHAsIGRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuIGFicyhwWzBdIC0geDApIDwgzrUgPyBkaXJlY3Rpb24gPiAwID8gMCA6IDMgOiBhYnMocFswXSAtIHgxKSA8IM61ID8gZGlyZWN0aW9uID4gMCA/IDIgOiAxIDogYWJzKHBbMV0gLSB5MCkgPCDOtSA/IGRpcmVjdGlvbiA+IDAgPyAxIDogMCA6IGRpcmVjdGlvbiA+IDAgPyAzIDogMjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gICAgICByZXR1cm4gY29tcGFyZVBvaW50cyhhLngsIGIueCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbXBhcmVQb2ludHMoYSwgYikge1xuICAgICAgdmFyIGNhID0gY29ybmVyKGEsIDEpLCBjYiA9IGNvcm5lcihiLCAxKTtcbiAgICAgIHJldHVybiBjYSAhPT0gY2IgPyBjYSAtIGNiIDogY2EgPT09IDAgPyBiWzFdIC0gYVsxXSA6IGNhID09PSAxID8gYVswXSAtIGJbMF0gOiBjYSA9PT0gMiA/IGFbMV0gLSBiWzFdIDogYlswXSAtIGFbMF07XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19jb25pYyhwcm9qZWN0QXQpIHtcbiAgICB2YXIgz4YwID0gMCwgz4YxID0gz4AgLyAzLCBtID0gZDNfZ2VvX3Byb2plY3Rpb25NdXRhdG9yKHByb2plY3RBdCksIHAgPSBtKM+GMCwgz4YxKTtcbiAgICBwLnBhcmFsbGVscyA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIFsgz4YwIC8gz4AgKiAxODAsIM+GMSAvIM+AICogMTgwIF07XG4gICAgICByZXR1cm4gbSjPhjAgPSBfWzBdICogz4AgLyAxODAsIM+GMSA9IF9bMV0gKiDPgCAvIDE4MCk7XG4gICAgfTtcbiAgICByZXR1cm4gcDtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fY29uaWNFcXVhbEFyZWEoz4YwLCDPhjEpIHtcbiAgICB2YXIgc2luz4YwID0gTWF0aC5zaW4oz4YwKSwgbiA9IChzaW7PhjAgKyBNYXRoLnNpbijPhjEpKSAvIDIsIEMgPSAxICsgc2luz4YwICogKDIgKiBuIC0gc2luz4YwKSwgz4EwID0gTWF0aC5zcXJ0KEMpIC8gbjtcbiAgICBmdW5jdGlvbiBmb3J3YXJkKM67LCDPhikge1xuICAgICAgdmFyIM+BID0gTWF0aC5zcXJ0KEMgLSAyICogbiAqIE1hdGguc2luKM+GKSkgLyBuO1xuICAgICAgcmV0dXJuIFsgz4EgKiBNYXRoLnNpbijOuyAqPSBuKSwgz4EwIC0gz4EgKiBNYXRoLmNvcyjOuykgXTtcbiAgICB9XG4gICAgZm9yd2FyZC5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICB2YXIgz4EwX3kgPSDPgTAgLSB5O1xuICAgICAgcmV0dXJuIFsgTWF0aC5hdGFuMih4LCDPgTBfeSkgLyBuLCBkM19hc2luKChDIC0gKHggKiB4ICsgz4EwX3kgKiDPgTBfeSkgKiBuICogbikgLyAoMiAqIG4pKSBdO1xuICAgIH07XG4gICAgcmV0dXJuIGZvcndhcmQ7XG4gIH1cbiAgKGQzLmdlby5jb25pY0VxdWFsQXJlYSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkM19nZW9fY29uaWMoZDNfZ2VvX2NvbmljRXF1YWxBcmVhKTtcbiAgfSkucmF3ID0gZDNfZ2VvX2NvbmljRXF1YWxBcmVhO1xuICBkMy5nZW8uYWxiZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzLmdlby5jb25pY0VxdWFsQXJlYSgpLnJvdGF0ZShbIDk2LCAwIF0pLmNlbnRlcihbIC0uNiwgMzguNyBdKS5wYXJhbGxlbHMoWyAyOS41LCA0NS41IF0pLnNjYWxlKDEwNzApO1xuICB9O1xuICBkMy5nZW8uYWxiZXJzVXNhID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxvd2VyNDggPSBkMy5nZW8uYWxiZXJzKCk7XG4gICAgdmFyIGFsYXNrYSA9IGQzLmdlby5jb25pY0VxdWFsQXJlYSgpLnJvdGF0ZShbIDE1NCwgMCBdKS5jZW50ZXIoWyAtMiwgNTguNSBdKS5wYXJhbGxlbHMoWyA1NSwgNjUgXSk7XG4gICAgdmFyIGhhd2FpaSA9IGQzLmdlby5jb25pY0VxdWFsQXJlYSgpLnJvdGF0ZShbIDE1NywgMCBdKS5jZW50ZXIoWyAtMywgMTkuOSBdKS5wYXJhbGxlbHMoWyA4LCAxOCBdKTtcbiAgICB2YXIgcG9pbnQsIHBvaW50U3RyZWFtID0ge1xuICAgICAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgcG9pbnQgPSBbIHgsIHkgXTtcbiAgICAgIH1cbiAgICB9LCBsb3dlcjQ4UG9pbnQsIGFsYXNrYVBvaW50LCBoYXdhaWlQb2ludDtcbiAgICBmdW5jdGlvbiBhbGJlcnNVc2EoY29vcmRpbmF0ZXMpIHtcbiAgICAgIHZhciB4ID0gY29vcmRpbmF0ZXNbMF0sIHkgPSBjb29yZGluYXRlc1sxXTtcbiAgICAgIHBvaW50ID0gbnVsbDtcbiAgICAgIChsb3dlcjQ4UG9pbnQoeCwgeSksIHBvaW50KSB8fCAoYWxhc2thUG9pbnQoeCwgeSksIHBvaW50KSB8fCBoYXdhaWlQb2ludCh4LCB5KTtcbiAgICAgIHJldHVybiBwb2ludDtcbiAgICB9XG4gICAgYWxiZXJzVXNhLmludmVydCA9IGZ1bmN0aW9uKGNvb3JkaW5hdGVzKSB7XG4gICAgICB2YXIgayA9IGxvd2VyNDguc2NhbGUoKSwgdCA9IGxvd2VyNDgudHJhbnNsYXRlKCksIHggPSAoY29vcmRpbmF0ZXNbMF0gLSB0WzBdKSAvIGssIHkgPSAoY29vcmRpbmF0ZXNbMV0gLSB0WzFdKSAvIGs7XG4gICAgICByZXR1cm4gKHkgPj0gLjEyICYmIHkgPCAuMjM0ICYmIHggPj0gLS40MjUgJiYgeCA8IC0uMjE0ID8gYWxhc2thIDogeSA+PSAuMTY2ICYmIHkgPCAuMjM0ICYmIHggPj0gLS4yMTQgJiYgeCA8IC0uMTE1ID8gaGF3YWlpIDogbG93ZXI0OCkuaW52ZXJ0KGNvb3JkaW5hdGVzKTtcbiAgICB9O1xuICAgIGFsYmVyc1VzYS5zdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgIHZhciBsb3dlcjQ4U3RyZWFtID0gbG93ZXI0OC5zdHJlYW0oc3RyZWFtKSwgYWxhc2thU3RyZWFtID0gYWxhc2thLnN0cmVhbShzdHJlYW0pLCBoYXdhaWlTdHJlYW0gPSBoYXdhaWkuc3RyZWFtKHN0cmVhbSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICAgIGxvd2VyNDhTdHJlYW0ucG9pbnQoeCwgeSk7XG4gICAgICAgICAgYWxhc2thU3RyZWFtLnBvaW50KHgsIHkpO1xuICAgICAgICAgIGhhd2FpaVN0cmVhbS5wb2ludCh4LCB5KTtcbiAgICAgICAgfSxcbiAgICAgICAgc3BoZXJlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsb3dlcjQ4U3RyZWFtLnNwaGVyZSgpO1xuICAgICAgICAgIGFsYXNrYVN0cmVhbS5zcGhlcmUoKTtcbiAgICAgICAgICBoYXdhaWlTdHJlYW0uc3BoZXJlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbG93ZXI0OFN0cmVhbS5saW5lU3RhcnQoKTtcbiAgICAgICAgICBhbGFza2FTdHJlYW0ubGluZVN0YXJ0KCk7XG4gICAgICAgICAgaGF3YWlpU3RyZWFtLmxpbmVTdGFydCgpO1xuICAgICAgICB9LFxuICAgICAgICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsb3dlcjQ4U3RyZWFtLmxpbmVFbmQoKTtcbiAgICAgICAgICBhbGFza2FTdHJlYW0ubGluZUVuZCgpO1xuICAgICAgICAgIGhhd2FpaVN0cmVhbS5saW5lRW5kKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbG93ZXI0OFN0cmVhbS5wb2x5Z29uU3RhcnQoKTtcbiAgICAgICAgICBhbGFza2FTdHJlYW0ucG9seWdvblN0YXJ0KCk7XG4gICAgICAgICAgaGF3YWlpU3RyZWFtLnBvbHlnb25TdGFydCgpO1xuICAgICAgICB9LFxuICAgICAgICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsb3dlcjQ4U3RyZWFtLnBvbHlnb25FbmQoKTtcbiAgICAgICAgICBhbGFza2FTdHJlYW0ucG9seWdvbkVuZCgpO1xuICAgICAgICAgIGhhd2FpaVN0cmVhbS5wb2x5Z29uRW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBhbGJlcnNVc2EucHJlY2lzaW9uID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gbG93ZXI0OC5wcmVjaXNpb24oKTtcbiAgICAgIGxvd2VyNDgucHJlY2lzaW9uKF8pO1xuICAgICAgYWxhc2thLnByZWNpc2lvbihfKTtcbiAgICAgIGhhd2FpaS5wcmVjaXNpb24oXyk7XG4gICAgICByZXR1cm4gYWxiZXJzVXNhO1xuICAgIH07XG4gICAgYWxiZXJzVXNhLnNjYWxlID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gbG93ZXI0OC5zY2FsZSgpO1xuICAgICAgbG93ZXI0OC5zY2FsZShfKTtcbiAgICAgIGFsYXNrYS5zY2FsZShfICogLjM1KTtcbiAgICAgIGhhd2FpaS5zY2FsZShfKTtcbiAgICAgIHJldHVybiBhbGJlcnNVc2EudHJhbnNsYXRlKGxvd2VyNDgudHJhbnNsYXRlKCkpO1xuICAgIH07XG4gICAgYWxiZXJzVXNhLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGxvd2VyNDgudHJhbnNsYXRlKCk7XG4gICAgICB2YXIgayA9IGxvd2VyNDguc2NhbGUoKSwgeCA9ICtfWzBdLCB5ID0gK19bMV07XG4gICAgICBsb3dlcjQ4UG9pbnQgPSBsb3dlcjQ4LnRyYW5zbGF0ZShfKS5jbGlwRXh0ZW50KFsgWyB4IC0gLjQ1NSAqIGssIHkgLSAuMjM4ICogayBdLCBbIHggKyAuNDU1ICogaywgeSArIC4yMzggKiBrIF0gXSkuc3RyZWFtKHBvaW50U3RyZWFtKS5wb2ludDtcbiAgICAgIGFsYXNrYVBvaW50ID0gYWxhc2thLnRyYW5zbGF0ZShbIHggLSAuMzA3ICogaywgeSArIC4yMDEgKiBrIF0pLmNsaXBFeHRlbnQoWyBbIHggLSAuNDI1ICogayArIM61LCB5ICsgLjEyICogayArIM61IF0sIFsgeCAtIC4yMTQgKiBrIC0gzrUsIHkgKyAuMjM0ICogayAtIM61IF0gXSkuc3RyZWFtKHBvaW50U3RyZWFtKS5wb2ludDtcbiAgICAgIGhhd2FpaVBvaW50ID0gaGF3YWlpLnRyYW5zbGF0ZShbIHggLSAuMjA1ICogaywgeSArIC4yMTIgKiBrIF0pLmNsaXBFeHRlbnQoWyBbIHggLSAuMjE0ICogayArIM61LCB5ICsgLjE2NiAqIGsgKyDOtSBdLCBbIHggLSAuMTE1ICogayAtIM61LCB5ICsgLjIzNCAqIGsgLSDOtSBdIF0pLnN0cmVhbShwb2ludFN0cmVhbSkucG9pbnQ7XG4gICAgICByZXR1cm4gYWxiZXJzVXNhO1xuICAgIH07XG4gICAgcmV0dXJuIGFsYmVyc1VzYS5zY2FsZSgxMDcwKTtcbiAgfTtcbiAgdmFyIGQzX2dlb19wYXRoQXJlYVN1bSwgZDNfZ2VvX3BhdGhBcmVhUG9seWdvbiwgZDNfZ2VvX3BhdGhBcmVhID0ge1xuICAgIHBvaW50OiBkM19ub29wLFxuICAgIGxpbmVTdGFydDogZDNfbm9vcCxcbiAgICBsaW5lRW5kOiBkM19ub29wLFxuICAgIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICBkM19nZW9fcGF0aEFyZWFQb2x5Z29uID0gMDtcbiAgICAgIGQzX2dlb19wYXRoQXJlYS5saW5lU3RhcnQgPSBkM19nZW9fcGF0aEFyZWFSaW5nU3RhcnQ7XG4gICAgfSxcbiAgICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgIGQzX2dlb19wYXRoQXJlYS5saW5lU3RhcnQgPSBkM19nZW9fcGF0aEFyZWEubGluZUVuZCA9IGQzX2dlb19wYXRoQXJlYS5wb2ludCA9IGQzX25vb3A7XG4gICAgICBkM19nZW9fcGF0aEFyZWFTdW0gKz0gYWJzKGQzX2dlb19wYXRoQXJlYVBvbHlnb24gLyAyKTtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2dlb19wYXRoQXJlYVJpbmdTdGFydCgpIHtcbiAgICB2YXIgeDAwLCB5MDAsIHgwLCB5MDtcbiAgICBkM19nZW9fcGF0aEFyZWEucG9pbnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICBkM19nZW9fcGF0aEFyZWEucG9pbnQgPSBuZXh0UG9pbnQ7XG4gICAgICB4MDAgPSB4MCA9IHgsIHkwMCA9IHkwID0geTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIG5leHRQb2ludCh4LCB5KSB7XG4gICAgICBkM19nZW9fcGF0aEFyZWFQb2x5Z29uICs9IHkwICogeCAtIHgwICogeTtcbiAgICAgIHgwID0geCwgeTAgPSB5O1xuICAgIH1cbiAgICBkM19nZW9fcGF0aEFyZWEubGluZUVuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgbmV4dFBvaW50KHgwMCwgeTAwKTtcbiAgICB9O1xuICB9XG4gIHZhciBkM19nZW9fcGF0aEJvdW5kc1gwLCBkM19nZW9fcGF0aEJvdW5kc1kwLCBkM19nZW9fcGF0aEJvdW5kc1gxLCBkM19nZW9fcGF0aEJvdW5kc1kxO1xuICB2YXIgZDNfZ2VvX3BhdGhCb3VuZHMgPSB7XG4gICAgcG9pbnQ6IGQzX2dlb19wYXRoQm91bmRzUG9pbnQsXG4gICAgbGluZVN0YXJ0OiBkM19ub29wLFxuICAgIGxpbmVFbmQ6IGQzX25vb3AsXG4gICAgcG9seWdvblN0YXJ0OiBkM19ub29wLFxuICAgIHBvbHlnb25FbmQ6IGQzX25vb3BcbiAgfTtcbiAgZnVuY3Rpb24gZDNfZ2VvX3BhdGhCb3VuZHNQb2ludCh4LCB5KSB7XG4gICAgaWYgKHggPCBkM19nZW9fcGF0aEJvdW5kc1gwKSBkM19nZW9fcGF0aEJvdW5kc1gwID0geDtcbiAgICBpZiAoeCA+IGQzX2dlb19wYXRoQm91bmRzWDEpIGQzX2dlb19wYXRoQm91bmRzWDEgPSB4O1xuICAgIGlmICh5IDwgZDNfZ2VvX3BhdGhCb3VuZHNZMCkgZDNfZ2VvX3BhdGhCb3VuZHNZMCA9IHk7XG4gICAgaWYgKHkgPiBkM19nZW9fcGF0aEJvdW5kc1kxKSBkM19nZW9fcGF0aEJvdW5kc1kxID0geTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fcGF0aEJ1ZmZlcigpIHtcbiAgICB2YXIgcG9pbnRDaXJjbGUgPSBkM19nZW9fcGF0aEJ1ZmZlckNpcmNsZSg0LjUpLCBidWZmZXIgPSBbXTtcbiAgICB2YXIgc3RyZWFtID0ge1xuICAgICAgcG9pbnQ6IHBvaW50LFxuICAgICAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgc3RyZWFtLnBvaW50ID0gcG9pbnRMaW5lU3RhcnQ7XG4gICAgICB9LFxuICAgICAgbGluZUVuZDogbGluZUVuZCxcbiAgICAgIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHN0cmVhbS5saW5lRW5kID0gbGluZUVuZFBvbHlnb247XG4gICAgICB9LFxuICAgICAgcG9seWdvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHN0cmVhbS5saW5lRW5kID0gbGluZUVuZDtcbiAgICAgICAgc3RyZWFtLnBvaW50ID0gcG9pbnQ7XG4gICAgICB9LFxuICAgICAgcG9pbnRSYWRpdXM6IGZ1bmN0aW9uKF8pIHtcbiAgICAgICAgcG9pbnRDaXJjbGUgPSBkM19nZW9fcGF0aEJ1ZmZlckNpcmNsZShfKTtcbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoYnVmZmVyLmxlbmd0aCkge1xuICAgICAgICAgIHZhciByZXN1bHQgPSBidWZmZXIuam9pbihcIlwiKTtcbiAgICAgICAgICBidWZmZXIgPSBbXTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBwb2ludCh4LCB5KSB7XG4gICAgICBidWZmZXIucHVzaChcIk1cIiwgeCwgXCIsXCIsIHksIHBvaW50Q2lyY2xlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcG9pbnRMaW5lU3RhcnQoeCwgeSkge1xuICAgICAgYnVmZmVyLnB1c2goXCJNXCIsIHgsIFwiLFwiLCB5KTtcbiAgICAgIHN0cmVhbS5wb2ludCA9IHBvaW50TGluZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcG9pbnRMaW5lKHgsIHkpIHtcbiAgICAgIGJ1ZmZlci5wdXNoKFwiTFwiLCB4LCBcIixcIiwgeSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpbmVFbmQoKSB7XG4gICAgICBzdHJlYW0ucG9pbnQgPSBwb2ludDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbGluZUVuZFBvbHlnb24oKSB7XG4gICAgICBidWZmZXIucHVzaChcIlpcIik7XG4gICAgfVxuICAgIHJldHVybiBzdHJlYW07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX3BhdGhCdWZmZXJDaXJjbGUocmFkaXVzKSB7XG4gICAgcmV0dXJuIFwibTAsXCIgKyByYWRpdXMgKyBcImFcIiArIHJhZGl1cyArIFwiLFwiICsgcmFkaXVzICsgXCIgMCAxLDEgMCxcIiArIC0yICogcmFkaXVzICsgXCJhXCIgKyByYWRpdXMgKyBcIixcIiArIHJhZGl1cyArIFwiIDAgMSwxIDAsXCIgKyAyICogcmFkaXVzICsgXCJ6XCI7XG4gIH1cbiAgdmFyIGQzX2dlb19wYXRoQ2VudHJvaWQgPSB7XG4gICAgcG9pbnQ6IGQzX2dlb19wYXRoQ2VudHJvaWRQb2ludCxcbiAgICBsaW5lU3RhcnQ6IGQzX2dlb19wYXRoQ2VudHJvaWRMaW5lU3RhcnQsXG4gICAgbGluZUVuZDogZDNfZ2VvX3BhdGhDZW50cm9pZExpbmVFbmQsXG4gICAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgIGQzX2dlb19wYXRoQ2VudHJvaWQubGluZVN0YXJ0ID0gZDNfZ2VvX3BhdGhDZW50cm9pZFJpbmdTdGFydDtcbiAgICB9LFxuICAgIHBvbHlnb25FbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgZDNfZ2VvX3BhdGhDZW50cm9pZC5wb2ludCA9IGQzX2dlb19wYXRoQ2VudHJvaWRQb2ludDtcbiAgICAgIGQzX2dlb19wYXRoQ2VudHJvaWQubGluZVN0YXJ0ID0gZDNfZ2VvX3BhdGhDZW50cm9pZExpbmVTdGFydDtcbiAgICAgIGQzX2dlb19wYXRoQ2VudHJvaWQubGluZUVuZCA9IGQzX2dlb19wYXRoQ2VudHJvaWRMaW5lRW5kO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gZDNfZ2VvX3BhdGhDZW50cm9pZFBvaW50KHgsIHkpIHtcbiAgICBkM19nZW9fY2VudHJvaWRYMCArPSB4O1xuICAgIGQzX2dlb19jZW50cm9pZFkwICs9IHk7XG4gICAgKytkM19nZW9fY2VudHJvaWRaMDtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fcGF0aENlbnRyb2lkTGluZVN0YXJ0KCkge1xuICAgIHZhciB4MCwgeTA7XG4gICAgZDNfZ2VvX3BhdGhDZW50cm9pZC5wb2ludCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIGQzX2dlb19wYXRoQ2VudHJvaWQucG9pbnQgPSBuZXh0UG9pbnQ7XG4gICAgICBkM19nZW9fcGF0aENlbnRyb2lkUG9pbnQoeDAgPSB4LCB5MCA9IHkpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbmV4dFBvaW50KHgsIHkpIHtcbiAgICAgIHZhciBkeCA9IHggLSB4MCwgZHkgPSB5IC0geTAsIHogPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgZDNfZ2VvX2NlbnRyb2lkWDEgKz0geiAqICh4MCArIHgpIC8gMjtcbiAgICAgIGQzX2dlb19jZW50cm9pZFkxICs9IHogKiAoeTAgKyB5KSAvIDI7XG4gICAgICBkM19nZW9fY2VudHJvaWRaMSArPSB6O1xuICAgICAgZDNfZ2VvX3BhdGhDZW50cm9pZFBvaW50KHgwID0geCwgeTAgPSB5KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX3BhdGhDZW50cm9pZExpbmVFbmQoKSB7XG4gICAgZDNfZ2VvX3BhdGhDZW50cm9pZC5wb2ludCA9IGQzX2dlb19wYXRoQ2VudHJvaWRQb2ludDtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fcGF0aENlbnRyb2lkUmluZ1N0YXJ0KCkge1xuICAgIHZhciB4MDAsIHkwMCwgeDAsIHkwO1xuICAgIGQzX2dlb19wYXRoQ2VudHJvaWQucG9pbnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICBkM19nZW9fcGF0aENlbnRyb2lkLnBvaW50ID0gbmV4dFBvaW50O1xuICAgICAgZDNfZ2VvX3BhdGhDZW50cm9pZFBvaW50KHgwMCA9IHgwID0geCwgeTAwID0geTAgPSB5KTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIG5leHRQb2ludCh4LCB5KSB7XG4gICAgICB2YXIgZHggPSB4IC0geDAsIGR5ID0geSAtIHkwLCB6ID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgIGQzX2dlb19jZW50cm9pZFgxICs9IHogKiAoeDAgKyB4KSAvIDI7XG4gICAgICBkM19nZW9fY2VudHJvaWRZMSArPSB6ICogKHkwICsgeSkgLyAyO1xuICAgICAgZDNfZ2VvX2NlbnRyb2lkWjEgKz0gejtcbiAgICAgIHogPSB5MCAqIHggLSB4MCAqIHk7XG4gICAgICBkM19nZW9fY2VudHJvaWRYMiArPSB6ICogKHgwICsgeCk7XG4gICAgICBkM19nZW9fY2VudHJvaWRZMiArPSB6ICogKHkwICsgeSk7XG4gICAgICBkM19nZW9fY2VudHJvaWRaMiArPSB6ICogMztcbiAgICAgIGQzX2dlb19wYXRoQ2VudHJvaWRQb2ludCh4MCA9IHgsIHkwID0geSk7XG4gICAgfVxuICAgIGQzX2dlb19wYXRoQ2VudHJvaWQubGluZUVuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgbmV4dFBvaW50KHgwMCwgeTAwKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19wYXRoQ29udGV4dChjb250ZXh0KSB7XG4gICAgdmFyIHBvaW50UmFkaXVzID0gNC41O1xuICAgIHZhciBzdHJlYW0gPSB7XG4gICAgICBwb2ludDogcG9pbnQsXG4gICAgICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzdHJlYW0ucG9pbnQgPSBwb2ludExpbmVTdGFydDtcbiAgICAgIH0sXG4gICAgICBsaW5lRW5kOiBsaW5lRW5kLFxuICAgICAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgc3RyZWFtLmxpbmVFbmQgPSBsaW5lRW5kUG9seWdvbjtcbiAgICAgIH0sXG4gICAgICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgc3RyZWFtLmxpbmVFbmQgPSBsaW5lRW5kO1xuICAgICAgICBzdHJlYW0ucG9pbnQgPSBwb2ludDtcbiAgICAgIH0sXG4gICAgICBwb2ludFJhZGl1czogZnVuY3Rpb24oXykge1xuICAgICAgICBwb2ludFJhZGl1cyA9IF87XG4gICAgICAgIHJldHVybiBzdHJlYW07XG4gICAgICB9LFxuICAgICAgcmVzdWx0OiBkM19ub29wXG4gICAgfTtcbiAgICBmdW5jdGlvbiBwb2ludCh4LCB5KSB7XG4gICAgICBjb250ZXh0Lm1vdmVUbyh4ICsgcG9pbnRSYWRpdXMsIHkpO1xuICAgICAgY29udGV4dC5hcmMoeCwgeSwgcG9pbnRSYWRpdXMsIDAsIM+EKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcG9pbnRMaW5lU3RhcnQoeCwgeSkge1xuICAgICAgY29udGV4dC5tb3ZlVG8oeCwgeSk7XG4gICAgICBzdHJlYW0ucG9pbnQgPSBwb2ludExpbmU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBvaW50TGluZSh4LCB5KSB7XG4gICAgICBjb250ZXh0LmxpbmVUbyh4LCB5KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbGluZUVuZCgpIHtcbiAgICAgIHN0cmVhbS5wb2ludCA9IHBvaW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaW5lRW5kUG9seWdvbigpIHtcbiAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiBzdHJlYW07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX3Jlc2FtcGxlKHByb2plY3QpIHtcbiAgICB2YXIgzrQyID0gLjUsIGNvc01pbkRpc3RhbmNlID0gTWF0aC5jb3MoMzAgKiBkM19yYWRpYW5zKSwgbWF4RGVwdGggPSAxNjtcbiAgICBmdW5jdGlvbiByZXNhbXBsZShzdHJlYW0pIHtcbiAgICAgIHJldHVybiAobWF4RGVwdGggPyByZXNhbXBsZVJlY3Vyc2l2ZSA6IHJlc2FtcGxlTm9uZSkoc3RyZWFtKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzYW1wbGVOb25lKHN0cmVhbSkge1xuICAgICAgcmV0dXJuIGQzX2dlb190cmFuc2Zvcm1Qb2ludChzdHJlYW0sIGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgeCA9IHByb2plY3QoeCwgeSk7XG4gICAgICAgIHN0cmVhbS5wb2ludCh4WzBdLCB4WzFdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXNhbXBsZVJlY3Vyc2l2ZShzdHJlYW0pIHtcbiAgICAgIHZhciDOuzAwLCDPhjAwLCB4MDAsIHkwMCwgYTAwLCBiMDAsIGMwMCwgzrswLCB4MCwgeTAsIGEwLCBiMCwgYzA7XG4gICAgICB2YXIgcmVzYW1wbGUgPSB7XG4gICAgICAgIHBvaW50OiBwb2ludCxcbiAgICAgICAgbGluZVN0YXJ0OiBsaW5lU3RhcnQsXG4gICAgICAgIGxpbmVFbmQ6IGxpbmVFbmQsXG4gICAgICAgIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc3RyZWFtLnBvbHlnb25TdGFydCgpO1xuICAgICAgICAgIHJlc2FtcGxlLmxpbmVTdGFydCA9IHJpbmdTdGFydDtcbiAgICAgICAgfSxcbiAgICAgICAgcG9seWdvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc3RyZWFtLnBvbHlnb25FbmQoKTtcbiAgICAgICAgICByZXNhbXBsZS5saW5lU3RhcnQgPSBsaW5lU3RhcnQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBmdW5jdGlvbiBwb2ludCh4LCB5KSB7XG4gICAgICAgIHggPSBwcm9qZWN0KHgsIHkpO1xuICAgICAgICBzdHJlYW0ucG9pbnQoeFswXSwgeFsxXSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBsaW5lU3RhcnQoKSB7XG4gICAgICAgIHgwID0gTmFOO1xuICAgICAgICByZXNhbXBsZS5wb2ludCA9IGxpbmVQb2ludDtcbiAgICAgICAgc3RyZWFtLmxpbmVTdGFydCgpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gbGluZVBvaW50KM67LCDPhikge1xuICAgICAgICB2YXIgYyA9IGQzX2dlb19jYXJ0ZXNpYW4oWyDOuywgz4YgXSksIHAgPSBwcm9qZWN0KM67LCDPhik7XG4gICAgICAgIHJlc2FtcGxlTGluZVRvKHgwLCB5MCwgzrswLCBhMCwgYjAsIGMwLCB4MCA9IHBbMF0sIHkwID0gcFsxXSwgzrswID0gzrssIGEwID0gY1swXSwgYjAgPSBjWzFdLCBjMCA9IGNbMl0sIG1heERlcHRoLCBzdHJlYW0pO1xuICAgICAgICBzdHJlYW0ucG9pbnQoeDAsIHkwKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGxpbmVFbmQoKSB7XG4gICAgICAgIHJlc2FtcGxlLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHN0cmVhbS5saW5lRW5kKCk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiByaW5nU3RhcnQoKSB7XG4gICAgICAgIGxpbmVTdGFydCgpO1xuICAgICAgICByZXNhbXBsZS5wb2ludCA9IHJpbmdQb2ludDtcbiAgICAgICAgcmVzYW1wbGUubGluZUVuZCA9IHJpbmdFbmQ7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiByaW5nUG9pbnQozrssIM+GKSB7XG4gICAgICAgIGxpbmVQb2ludCjOuzAwID0gzrssIM+GMDAgPSDPhiksIHgwMCA9IHgwLCB5MDAgPSB5MCwgYTAwID0gYTAsIGIwMCA9IGIwLCBjMDAgPSBjMDtcbiAgICAgICAgcmVzYW1wbGUucG9pbnQgPSBsaW5lUG9pbnQ7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiByaW5nRW5kKCkge1xuICAgICAgICByZXNhbXBsZUxpbmVUbyh4MCwgeTAsIM67MCwgYTAsIGIwLCBjMCwgeDAwLCB5MDAsIM67MDAsIGEwMCwgYjAwLCBjMDAsIG1heERlcHRoLCBzdHJlYW0pO1xuICAgICAgICByZXNhbXBsZS5saW5lRW5kID0gbGluZUVuZDtcbiAgICAgICAgbGluZUVuZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc2FtcGxlO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXNhbXBsZUxpbmVUbyh4MCwgeTAsIM67MCwgYTAsIGIwLCBjMCwgeDEsIHkxLCDOuzEsIGExLCBiMSwgYzEsIGRlcHRoLCBzdHJlYW0pIHtcbiAgICAgIHZhciBkeCA9IHgxIC0geDAsIGR5ID0geTEgLSB5MCwgZDIgPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICAgIGlmIChkMiA+IDQgKiDOtDIgJiYgZGVwdGgtLSkge1xuICAgICAgICB2YXIgYSA9IGEwICsgYTEsIGIgPSBiMCArIGIxLCBjID0gYzAgKyBjMSwgbSA9IE1hdGguc3FydChhICogYSArIGIgKiBiICsgYyAqIGMpLCDPhjIgPSBNYXRoLmFzaW4oYyAvPSBtKSwgzrsyID0gYWJzKGFicyhjKSAtIDEpIDwgzrUgfHwgYWJzKM67MCAtIM67MSkgPCDOtSA/ICjOuzAgKyDOuzEpIC8gMiA6IE1hdGguYXRhbjIoYiwgYSksIHAgPSBwcm9qZWN0KM67Miwgz4YyKSwgeDIgPSBwWzBdLCB5MiA9IHBbMV0sIGR4MiA9IHgyIC0geDAsIGR5MiA9IHkyIC0geTAsIGR6ID0gZHkgKiBkeDIgLSBkeCAqIGR5MjtcbiAgICAgICAgaWYgKGR6ICogZHogLyBkMiA+IM60MiB8fCBhYnMoKGR4ICogZHgyICsgZHkgKiBkeTIpIC8gZDIgLSAuNSkgPiAuMyB8fCBhMCAqIGExICsgYjAgKiBiMSArIGMwICogYzEgPCBjb3NNaW5EaXN0YW5jZSkge1xuICAgICAgICAgIHJlc2FtcGxlTGluZVRvKHgwLCB5MCwgzrswLCBhMCwgYjAsIGMwLCB4MiwgeTIsIM67MiwgYSAvPSBtLCBiIC89IG0sIGMsIGRlcHRoLCBzdHJlYW0pO1xuICAgICAgICAgIHN0cmVhbS5wb2ludCh4MiwgeTIpO1xuICAgICAgICAgIHJlc2FtcGxlTGluZVRvKHgyLCB5MiwgzrsyLCBhLCBiLCBjLCB4MSwgeTEsIM67MSwgYTEsIGIxLCBjMSwgZGVwdGgsIHN0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzYW1wbGUucHJlY2lzaW9uID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gTWF0aC5zcXJ0KM60Mik7XG4gICAgICBtYXhEZXB0aCA9ICjOtDIgPSBfICogXykgPiAwICYmIDE2O1xuICAgICAgcmV0dXJuIHJlc2FtcGxlO1xuICAgIH07XG4gICAgcmV0dXJuIHJlc2FtcGxlO1xuICB9XG4gIGQzLmdlby5wYXRoID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHBvaW50UmFkaXVzID0gNC41LCBwcm9qZWN0aW9uLCBjb250ZXh0LCBwcm9qZWN0U3RyZWFtLCBjb250ZXh0U3RyZWFtLCBjYWNoZVN0cmVhbTtcbiAgICBmdW5jdGlvbiBwYXRoKG9iamVjdCkge1xuICAgICAgaWYgKG9iamVjdCkge1xuICAgICAgICBpZiAodHlwZW9mIHBvaW50UmFkaXVzID09PSBcImZ1bmN0aW9uXCIpIGNvbnRleHRTdHJlYW0ucG9pbnRSYWRpdXMoK3BvaW50UmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgICBpZiAoIWNhY2hlU3RyZWFtIHx8ICFjYWNoZVN0cmVhbS52YWxpZCkgY2FjaGVTdHJlYW0gPSBwcm9qZWN0U3RyZWFtKGNvbnRleHRTdHJlYW0pO1xuICAgICAgICBkMy5nZW8uc3RyZWFtKG9iamVjdCwgY2FjaGVTdHJlYW0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRleHRTdHJlYW0ucmVzdWx0KCk7XG4gICAgfVxuICAgIHBhdGguYXJlYSA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgZDNfZ2VvX3BhdGhBcmVhU3VtID0gMDtcbiAgICAgIGQzLmdlby5zdHJlYW0ob2JqZWN0LCBwcm9qZWN0U3RyZWFtKGQzX2dlb19wYXRoQXJlYSkpO1xuICAgICAgcmV0dXJuIGQzX2dlb19wYXRoQXJlYVN1bTtcbiAgICB9O1xuICAgIHBhdGguY2VudHJvaWQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgIGQzX2dlb19jZW50cm9pZFgwID0gZDNfZ2VvX2NlbnRyb2lkWTAgPSBkM19nZW9fY2VudHJvaWRaMCA9IGQzX2dlb19jZW50cm9pZFgxID0gZDNfZ2VvX2NlbnRyb2lkWTEgPSBkM19nZW9fY2VudHJvaWRaMSA9IGQzX2dlb19jZW50cm9pZFgyID0gZDNfZ2VvX2NlbnRyb2lkWTIgPSBkM19nZW9fY2VudHJvaWRaMiA9IDA7XG4gICAgICBkMy5nZW8uc3RyZWFtKG9iamVjdCwgcHJvamVjdFN0cmVhbShkM19nZW9fcGF0aENlbnRyb2lkKSk7XG4gICAgICByZXR1cm4gZDNfZ2VvX2NlbnRyb2lkWjIgPyBbIGQzX2dlb19jZW50cm9pZFgyIC8gZDNfZ2VvX2NlbnRyb2lkWjIsIGQzX2dlb19jZW50cm9pZFkyIC8gZDNfZ2VvX2NlbnRyb2lkWjIgXSA6IGQzX2dlb19jZW50cm9pZFoxID8gWyBkM19nZW9fY2VudHJvaWRYMSAvIGQzX2dlb19jZW50cm9pZFoxLCBkM19nZW9fY2VudHJvaWRZMSAvIGQzX2dlb19jZW50cm9pZFoxIF0gOiBkM19nZW9fY2VudHJvaWRaMCA/IFsgZDNfZ2VvX2NlbnRyb2lkWDAgLyBkM19nZW9fY2VudHJvaWRaMCwgZDNfZ2VvX2NlbnRyb2lkWTAgLyBkM19nZW9fY2VudHJvaWRaMCBdIDogWyBOYU4sIE5hTiBdO1xuICAgIH07XG4gICAgcGF0aC5ib3VuZHMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgIGQzX2dlb19wYXRoQm91bmRzWDEgPSBkM19nZW9fcGF0aEJvdW5kc1kxID0gLShkM19nZW9fcGF0aEJvdW5kc1gwID0gZDNfZ2VvX3BhdGhCb3VuZHNZMCA9IEluZmluaXR5KTtcbiAgICAgIGQzLmdlby5zdHJlYW0ob2JqZWN0LCBwcm9qZWN0U3RyZWFtKGQzX2dlb19wYXRoQm91bmRzKSk7XG4gICAgICByZXR1cm4gWyBbIGQzX2dlb19wYXRoQm91bmRzWDAsIGQzX2dlb19wYXRoQm91bmRzWTAgXSwgWyBkM19nZW9fcGF0aEJvdW5kc1gxLCBkM19nZW9fcGF0aEJvdW5kc1kxIF0gXTtcbiAgICB9O1xuICAgIHBhdGgucHJvamVjdGlvbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHByb2plY3Rpb247XG4gICAgICBwcm9qZWN0U3RyZWFtID0gKHByb2plY3Rpb24gPSBfKSA/IF8uc3RyZWFtIHx8IGQzX2dlb19wYXRoUHJvamVjdFN0cmVhbShfKSA6IGQzX2lkZW50aXR5O1xuICAgICAgcmV0dXJuIHJlc2V0KCk7XG4gICAgfTtcbiAgICBwYXRoLmNvbnRleHQgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBjb250ZXh0O1xuICAgICAgY29udGV4dFN0cmVhbSA9IChjb250ZXh0ID0gXykgPT0gbnVsbCA/IG5ldyBkM19nZW9fcGF0aEJ1ZmZlcigpIDogbmV3IGQzX2dlb19wYXRoQ29udGV4dChfKTtcbiAgICAgIGlmICh0eXBlb2YgcG9pbnRSYWRpdXMgIT09IFwiZnVuY3Rpb25cIikgY29udGV4dFN0cmVhbS5wb2ludFJhZGl1cyhwb2ludFJhZGl1cyk7XG4gICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICB9O1xuICAgIHBhdGgucG9pbnRSYWRpdXMgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwb2ludFJhZGl1cztcbiAgICAgIHBvaW50UmFkaXVzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiAoY29udGV4dFN0cmVhbS5wb2ludFJhZGl1cygrXyksICtfKTtcbiAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICBjYWNoZVN0cmVhbSA9IG51bGw7XG4gICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGgucHJvamVjdGlvbihkMy5nZW8uYWxiZXJzVXNhKCkpLmNvbnRleHQobnVsbCk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2dlb19wYXRoUHJvamVjdFN0cmVhbShwcm9qZWN0KSB7XG4gICAgdmFyIHJlc2FtcGxlID0gZDNfZ2VvX3Jlc2FtcGxlKGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0KFsgeCAqIGQzX2RlZ3JlZXMsIHkgKiBkM19kZWdyZWVzIF0pO1xuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgIHJldHVybiBkM19nZW9fcHJvamVjdGlvblJhZGlhbnMocmVzYW1wbGUoc3RyZWFtKSk7XG4gICAgfTtcbiAgfVxuICBkMy5nZW8udHJhbnNmb3JtID0gZnVuY3Rpb24obWV0aG9kcykge1xuICAgIHJldHVybiB7XG4gICAgICBzdHJlYW06IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICB2YXIgdHJhbnNmb3JtID0gbmV3IGQzX2dlb190cmFuc2Zvcm0oc3RyZWFtKTtcbiAgICAgICAgZm9yICh2YXIgayBpbiBtZXRob2RzKSB0cmFuc2Zvcm1ba10gPSBtZXRob2RzW2tdO1xuICAgICAgICByZXR1cm4gdHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH07XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2dlb190cmFuc2Zvcm0oc3RyZWFtKSB7XG4gICAgdGhpcy5zdHJlYW0gPSBzdHJlYW07XG4gIH1cbiAgZDNfZ2VvX3RyYW5zZm9ybS5wcm90b3R5cGUgPSB7XG4gICAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIHRoaXMuc3RyZWFtLnBvaW50KHgsIHkpO1xuICAgIH0sXG4gICAgc3BoZXJlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuc3RyZWFtLnNwaGVyZSgpO1xuICAgIH0sXG4gICAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuc3RyZWFtLmxpbmVTdGFydCgpO1xuICAgIH0sXG4gICAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnN0cmVhbS5saW5lRW5kKCk7XG4gICAgfSxcbiAgICBwb2x5Z29uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5zdHJlYW0ucG9seWdvblN0YXJ0KCk7XG4gICAgfSxcbiAgICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuc3RyZWFtLnBvbHlnb25FbmQoKTtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2dlb190cmFuc2Zvcm1Qb2ludChzdHJlYW0sIHBvaW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvaW50OiBwb2ludCxcbiAgICAgIHNwaGVyZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHN0cmVhbS5zcGhlcmUoKTtcbiAgICAgIH0sXG4gICAgICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzdHJlYW0ubGluZVN0YXJ0KCk7XG4gICAgICB9LFxuICAgICAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHN0cmVhbS5saW5lRW5kKCk7XG4gICAgICB9LFxuICAgICAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgc3RyZWFtLnBvbHlnb25TdGFydCgpO1xuICAgICAgfSxcbiAgICAgIHBvbHlnb25FbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzdHJlYW0ucG9seWdvbkVuZCgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZDMuZ2VvLnByb2plY3Rpb24gPSBkM19nZW9fcHJvamVjdGlvbjtcbiAgZDMuZ2VvLnByb2plY3Rpb25NdXRhdG9yID0gZDNfZ2VvX3Byb2plY3Rpb25NdXRhdG9yO1xuICBmdW5jdGlvbiBkM19nZW9fcHJvamVjdGlvbihwcm9qZWN0KSB7XG4gICAgcmV0dXJuIGQzX2dlb19wcm9qZWN0aW9uTXV0YXRvcihmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH0pKCk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX3Byb2plY3Rpb25NdXRhdG9yKHByb2plY3RBdCkge1xuICAgIHZhciBwcm9qZWN0LCByb3RhdGUsIHByb2plY3RSb3RhdGUsIHByb2plY3RSZXNhbXBsZSA9IGQzX2dlb19yZXNhbXBsZShmdW5jdGlvbih4LCB5KSB7XG4gICAgICB4ID0gcHJvamVjdCh4LCB5KTtcbiAgICAgIHJldHVybiBbIHhbMF0gKiBrICsgzrR4LCDOtHkgLSB4WzFdICogayBdO1xuICAgIH0pLCBrID0gMTUwLCB4ID0gNDgwLCB5ID0gMjUwLCDOuyA9IDAsIM+GID0gMCwgzrTOuyA9IDAsIM60z4YgPSAwLCDOtM6zID0gMCwgzrR4LCDOtHksIHByZWNsaXAgPSBkM19nZW9fY2xpcEFudGltZXJpZGlhbiwgcG9zdGNsaXAgPSBkM19pZGVudGl0eSwgY2xpcEFuZ2xlID0gbnVsbCwgY2xpcEV4dGVudCA9IG51bGwsIHN0cmVhbTtcbiAgICBmdW5jdGlvbiBwcm9qZWN0aW9uKHBvaW50KSB7XG4gICAgICBwb2ludCA9IHByb2plY3RSb3RhdGUocG9pbnRbMF0gKiBkM19yYWRpYW5zLCBwb2ludFsxXSAqIGQzX3JhZGlhbnMpO1xuICAgICAgcmV0dXJuIFsgcG9pbnRbMF0gKiBrICsgzrR4LCDOtHkgLSBwb2ludFsxXSAqIGsgXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW52ZXJ0KHBvaW50KSB7XG4gICAgICBwb2ludCA9IHByb2plY3RSb3RhdGUuaW52ZXJ0KChwb2ludFswXSAtIM60eCkgLyBrLCAozrR5IC0gcG9pbnRbMV0pIC8gayk7XG4gICAgICByZXR1cm4gcG9pbnQgJiYgWyBwb2ludFswXSAqIGQzX2RlZ3JlZXMsIHBvaW50WzFdICogZDNfZGVncmVlcyBdO1xuICAgIH1cbiAgICBwcm9qZWN0aW9uLnN0cmVhbSA9IGZ1bmN0aW9uKG91dHB1dCkge1xuICAgICAgaWYgKHN0cmVhbSkgc3RyZWFtLnZhbGlkID0gZmFsc2U7XG4gICAgICBzdHJlYW0gPSBkM19nZW9fcHJvamVjdGlvblJhZGlhbnMocHJlY2xpcChyb3RhdGUsIHByb2plY3RSZXNhbXBsZShwb3N0Y2xpcChvdXRwdXQpKSkpO1xuICAgICAgc3RyZWFtLnZhbGlkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBzdHJlYW07XG4gICAgfTtcbiAgICBwcm9qZWN0aW9uLmNsaXBBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGNsaXBBbmdsZTtcbiAgICAgIHByZWNsaXAgPSBfID09IG51bGwgPyAoY2xpcEFuZ2xlID0gXywgZDNfZ2VvX2NsaXBBbnRpbWVyaWRpYW4pIDogZDNfZ2VvX2NsaXBDaXJjbGUoKGNsaXBBbmdsZSA9ICtfKSAqIGQzX3JhZGlhbnMpO1xuICAgICAgcmV0dXJuIGludmFsaWRhdGUoKTtcbiAgICB9O1xuICAgIHByb2plY3Rpb24uY2xpcEV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGNsaXBFeHRlbnQ7XG4gICAgICBjbGlwRXh0ZW50ID0gXztcbiAgICAgIHBvc3RjbGlwID0gXyA/IGQzX2dlb19jbGlwRXh0ZW50KF9bMF1bMF0sIF9bMF1bMV0sIF9bMV1bMF0sIF9bMV1bMV0pIDogZDNfaWRlbnRpdHk7XG4gICAgICByZXR1cm4gaW52YWxpZGF0ZSgpO1xuICAgIH07XG4gICAgcHJvamVjdGlvbi5zY2FsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGs7XG4gICAgICBrID0gK187XG4gICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICB9O1xuICAgIHByb2plY3Rpb24udHJhbnNsYXRlID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gWyB4LCB5IF07XG4gICAgICB4ID0gK19bMF07XG4gICAgICB5ID0gK19bMV07XG4gICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICB9O1xuICAgIHByb2plY3Rpb24uY2VudGVyID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gWyDOuyAqIGQzX2RlZ3JlZXMsIM+GICogZDNfZGVncmVlcyBdO1xuICAgICAgzrsgPSBfWzBdICUgMzYwICogZDNfcmFkaWFucztcbiAgICAgIM+GID0gX1sxXSAlIDM2MCAqIGQzX3JhZGlhbnM7XG4gICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICB9O1xuICAgIHByb2plY3Rpb24ucm90YXRlID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gWyDOtM67ICogZDNfZGVncmVlcywgzrTPhiAqIGQzX2RlZ3JlZXMsIM60zrMgKiBkM19kZWdyZWVzIF07XG4gICAgICDOtM67ID0gX1swXSAlIDM2MCAqIGQzX3JhZGlhbnM7XG4gICAgICDOtM+GID0gX1sxXSAlIDM2MCAqIGQzX3JhZGlhbnM7XG4gICAgICDOtM6zID0gXy5sZW5ndGggPiAyID8gX1syXSAlIDM2MCAqIGQzX3JhZGlhbnMgOiAwO1xuICAgICAgcmV0dXJuIHJlc2V0KCk7XG4gICAgfTtcbiAgICBkMy5yZWJpbmQocHJvamVjdGlvbiwgcHJvamVjdFJlc2FtcGxlLCBcInByZWNpc2lvblwiKTtcbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHByb2plY3RSb3RhdGUgPSBkM19nZW9fY29tcG9zZShyb3RhdGUgPSBkM19nZW9fcm90YXRpb24ozrTOuywgzrTPhiwgzrTOsyksIHByb2plY3QpO1xuICAgICAgdmFyIGNlbnRlciA9IHByb2plY3QozrssIM+GKTtcbiAgICAgIM60eCA9IHggLSBjZW50ZXJbMF0gKiBrO1xuICAgICAgzrR5ID0geSArIGNlbnRlclsxXSAqIGs7XG4gICAgICByZXR1cm4gaW52YWxpZGF0ZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbnZhbGlkYXRlKCkge1xuICAgICAgaWYgKHN0cmVhbSkgc3RyZWFtLnZhbGlkID0gZmFsc2UsIHN0cmVhbSA9IG51bGw7XG4gICAgICByZXR1cm4gcHJvamVjdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcHJvamVjdCA9IHByb2plY3RBdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcHJvamVjdGlvbi5pbnZlcnQgPSBwcm9qZWN0LmludmVydCAmJiBpbnZlcnQ7XG4gICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19wcm9qZWN0aW9uUmFkaWFucyhzdHJlYW0pIHtcbiAgICByZXR1cm4gZDNfZ2VvX3RyYW5zZm9ybVBvaW50KHN0cmVhbSwgZnVuY3Rpb24oeCwgeSkge1xuICAgICAgc3RyZWFtLnBvaW50KHggKiBkM19yYWRpYW5zLCB5ICogZDNfcmFkaWFucyk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX2VxdWlyZWN0YW5ndWxhcijOuywgz4YpIHtcbiAgICByZXR1cm4gWyDOuywgz4YgXTtcbiAgfVxuICAoZDMuZ2VvLmVxdWlyZWN0YW5ndWxhciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkM19nZW9fcHJvamVjdGlvbihkM19nZW9fZXF1aXJlY3Rhbmd1bGFyKTtcbiAgfSkucmF3ID0gZDNfZ2VvX2VxdWlyZWN0YW5ndWxhci5pbnZlcnQgPSBkM19nZW9fZXF1aXJlY3Rhbmd1bGFyO1xuICBkMy5nZW8ucm90YXRpb24gPSBmdW5jdGlvbihyb3RhdGUpIHtcbiAgICByb3RhdGUgPSBkM19nZW9fcm90YXRpb24ocm90YXRlWzBdICUgMzYwICogZDNfcmFkaWFucywgcm90YXRlWzFdICogZDNfcmFkaWFucywgcm90YXRlLmxlbmd0aCA+IDIgPyByb3RhdGVbMl0gKiBkM19yYWRpYW5zIDogMCk7XG4gICAgZnVuY3Rpb24gZm9yd2FyZChjb29yZGluYXRlcykge1xuICAgICAgY29vcmRpbmF0ZXMgPSByb3RhdGUoY29vcmRpbmF0ZXNbMF0gKiBkM19yYWRpYW5zLCBjb29yZGluYXRlc1sxXSAqIGQzX3JhZGlhbnMpO1xuICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzWzBdICo9IGQzX2RlZ3JlZXMsIGNvb3JkaW5hdGVzWzFdICo9IGQzX2RlZ3JlZXMsIGNvb3JkaW5hdGVzO1xuICAgIH1cbiAgICBmb3J3YXJkLmludmVydCA9IGZ1bmN0aW9uKGNvb3JkaW5hdGVzKSB7XG4gICAgICBjb29yZGluYXRlcyA9IHJvdGF0ZS5pbnZlcnQoY29vcmRpbmF0ZXNbMF0gKiBkM19yYWRpYW5zLCBjb29yZGluYXRlc1sxXSAqIGQzX3JhZGlhbnMpO1xuICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzWzBdICo9IGQzX2RlZ3JlZXMsIGNvb3JkaW5hdGVzWzFdICo9IGQzX2RlZ3JlZXMsIGNvb3JkaW5hdGVzO1xuICAgIH07XG4gICAgcmV0dXJuIGZvcndhcmQ7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2dlb19pZGVudGl0eVJvdGF0aW9uKM67LCDPhikge1xuICAgIHJldHVybiBbIM67ID4gz4AgPyDOuyAtIM+EIDogzrsgPCAtz4AgPyDOuyArIM+EIDogzrssIM+GIF07XG4gIH1cbiAgZDNfZ2VvX2lkZW50aXR5Um90YXRpb24uaW52ZXJ0ID0gZDNfZ2VvX2VxdWlyZWN0YW5ndWxhcjtcbiAgZnVuY3Rpb24gZDNfZ2VvX3JvdGF0aW9uKM60zrssIM60z4YsIM60zrMpIHtcbiAgICByZXR1cm4gzrTOuyA/IM60z4YgfHwgzrTOsyA/IGQzX2dlb19jb21wb3NlKGQzX2dlb19yb3RhdGlvbs67KM60zrspLCBkM19nZW9fcm90YXRpb27Phs6zKM60z4YsIM60zrMpKSA6IGQzX2dlb19yb3RhdGlvbs67KM60zrspIDogzrTPhiB8fCDOtM6zID8gZDNfZ2VvX3JvdGF0aW9uz4bOsyjOtM+GLCDOtM6zKSA6IGQzX2dlb19pZGVudGl0eVJvdGF0aW9uO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19mb3J3YXJkUm90YXRpb27OuyjOtM67KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKM67LCDPhikge1xuICAgICAgcmV0dXJuIM67ICs9IM60zrssIFsgzrsgPiDPgCA/IM67IC0gz4QgOiDOuyA8IC3PgCA/IM67ICsgz4QgOiDOuywgz4YgXTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19yb3RhdGlvbs67KM60zrspIHtcbiAgICB2YXIgcm90YXRpb24gPSBkM19nZW9fZm9yd2FyZFJvdGF0aW9uzrsozrTOuyk7XG4gICAgcm90YXRpb24uaW52ZXJ0ID0gZDNfZ2VvX2ZvcndhcmRSb3RhdGlvbs67KC3OtM67KTtcbiAgICByZXR1cm4gcm90YXRpb247XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvX3JvdGF0aW9uz4bOsyjOtM+GLCDOtM6zKSB7XG4gICAgdmFyIGNvc860z4YgPSBNYXRoLmNvcyjOtM+GKSwgc2luzrTPhiA9IE1hdGguc2luKM60z4YpLCBjb3POtM6zID0gTWF0aC5jb3MozrTOsyksIHNpbs60zrMgPSBNYXRoLnNpbijOtM6zKTtcbiAgICBmdW5jdGlvbiByb3RhdGlvbijOuywgz4YpIHtcbiAgICAgIHZhciBjb3PPhiA9IE1hdGguY29zKM+GKSwgeCA9IE1hdGguY29zKM67KSAqIGNvc8+GLCB5ID0gTWF0aC5zaW4ozrspICogY29zz4YsIHogPSBNYXRoLnNpbijPhiksIGsgPSB6ICogY29zzrTPhiArIHggKiBzaW7OtM+GO1xuICAgICAgcmV0dXJuIFsgTWF0aC5hdGFuMih5ICogY29zzrTOsyAtIGsgKiBzaW7OtM6zLCB4ICogY29zzrTPhiAtIHogKiBzaW7OtM+GKSwgZDNfYXNpbihrICogY29zzrTOsyArIHkgKiBzaW7OtM6zKSBdO1xuICAgIH1cbiAgICByb3RhdGlvbi5pbnZlcnQgPSBmdW5jdGlvbijOuywgz4YpIHtcbiAgICAgIHZhciBjb3PPhiA9IE1hdGguY29zKM+GKSwgeCA9IE1hdGguY29zKM67KSAqIGNvc8+GLCB5ID0gTWF0aC5zaW4ozrspICogY29zz4YsIHogPSBNYXRoLnNpbijPhiksIGsgPSB6ICogY29zzrTOsyAtIHkgKiBzaW7OtM6zO1xuICAgICAgcmV0dXJuIFsgTWF0aC5hdGFuMih5ICogY29zzrTOsyArIHogKiBzaW7OtM6zLCB4ICogY29zzrTPhiArIGsgKiBzaW7OtM+GKSwgZDNfYXNpbihrICogY29zzrTPhiAtIHggKiBzaW7OtM+GKSBdO1xuICAgIH07XG4gICAgcmV0dXJuIHJvdGF0aW9uO1xuICB9XG4gIGQzLmdlby5jaXJjbGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgb3JpZ2luID0gWyAwLCAwIF0sIGFuZ2xlLCBwcmVjaXNpb24gPSA2LCBpbnRlcnBvbGF0ZTtcbiAgICBmdW5jdGlvbiBjaXJjbGUoKSB7XG4gICAgICB2YXIgY2VudGVyID0gdHlwZW9mIG9yaWdpbiA9PT0gXCJmdW5jdGlvblwiID8gb3JpZ2luLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBvcmlnaW4sIHJvdGF0ZSA9IGQzX2dlb19yb3RhdGlvbigtY2VudGVyWzBdICogZDNfcmFkaWFucywgLWNlbnRlclsxXSAqIGQzX3JhZGlhbnMsIDApLmludmVydCwgcmluZyA9IFtdO1xuICAgICAgaW50ZXJwb2xhdGUobnVsbCwgbnVsbCwgMSwge1xuICAgICAgICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICAgIHJpbmcucHVzaCh4ID0gcm90YXRlKHgsIHkpKTtcbiAgICAgICAgICB4WzBdICo9IGQzX2RlZ3JlZXMsIHhbMV0gKj0gZDNfZGVncmVlcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIlBvbHlnb25cIixcbiAgICAgICAgY29vcmRpbmF0ZXM6IFsgcmluZyBdXG4gICAgICB9O1xuICAgIH1cbiAgICBjaXJjbGUub3JpZ2luID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gb3JpZ2luO1xuICAgICAgb3JpZ2luID0geDtcbiAgICAgIHJldHVybiBjaXJjbGU7XG4gICAgfTtcbiAgICBjaXJjbGUuYW5nbGUgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBhbmdsZTtcbiAgICAgIGludGVycG9sYXRlID0gZDNfZ2VvX2NpcmNsZUludGVycG9sYXRlKChhbmdsZSA9ICt4KSAqIGQzX3JhZGlhbnMsIHByZWNpc2lvbiAqIGQzX3JhZGlhbnMpO1xuICAgICAgcmV0dXJuIGNpcmNsZTtcbiAgICB9O1xuICAgIGNpcmNsZS5wcmVjaXNpb24gPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwcmVjaXNpb247XG4gICAgICBpbnRlcnBvbGF0ZSA9IGQzX2dlb19jaXJjbGVJbnRlcnBvbGF0ZShhbmdsZSAqIGQzX3JhZGlhbnMsIChwcmVjaXNpb24gPSArXykgKiBkM19yYWRpYW5zKTtcbiAgICAgIHJldHVybiBjaXJjbGU7XG4gICAgfTtcbiAgICByZXR1cm4gY2lyY2xlLmFuZ2xlKDkwKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfZ2VvX2NpcmNsZUludGVycG9sYXRlKHJhZGl1cywgcHJlY2lzaW9uKSB7XG4gICAgdmFyIGNyID0gTWF0aC5jb3MocmFkaXVzKSwgc3IgPSBNYXRoLnNpbihyYWRpdXMpO1xuICAgIHJldHVybiBmdW5jdGlvbihmcm9tLCB0bywgZGlyZWN0aW9uLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIHN0ZXAgPSBkaXJlY3Rpb24gKiBwcmVjaXNpb247XG4gICAgICBpZiAoZnJvbSAhPSBudWxsKSB7XG4gICAgICAgIGZyb20gPSBkM19nZW9fY2lyY2xlQW5nbGUoY3IsIGZyb20pO1xuICAgICAgICB0byA9IGQzX2dlb19jaXJjbGVBbmdsZShjciwgdG8pO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID4gMCA/IGZyb20gPCB0byA6IGZyb20gPiB0bykgZnJvbSArPSBkaXJlY3Rpb24gKiDPhDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyb20gPSByYWRpdXMgKyBkaXJlY3Rpb24gKiDPhDtcbiAgICAgICAgdG8gPSByYWRpdXMgLSAuNSAqIHN0ZXA7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBwb2ludCwgdCA9IGZyb207IGRpcmVjdGlvbiA+IDAgPyB0ID4gdG8gOiB0IDwgdG87IHQgLT0gc3RlcCkge1xuICAgICAgICBsaXN0ZW5lci5wb2ludCgocG9pbnQgPSBkM19nZW9fc3BoZXJpY2FsKFsgY3IsIC1zciAqIE1hdGguY29zKHQpLCAtc3IgKiBNYXRoLnNpbih0KSBdKSlbMF0sIHBvaW50WzFdKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb19jaXJjbGVBbmdsZShjciwgcG9pbnQpIHtcbiAgICB2YXIgYSA9IGQzX2dlb19jYXJ0ZXNpYW4ocG9pbnQpO1xuICAgIGFbMF0gLT0gY3I7XG4gICAgZDNfZ2VvX2NhcnRlc2lhbk5vcm1hbGl6ZShhKTtcbiAgICB2YXIgYW5nbGUgPSBkM19hY29zKC1hWzFdKTtcbiAgICByZXR1cm4gKCgtYVsyXSA8IDAgPyAtYW5nbGUgOiBhbmdsZSkgKyAyICogTWF0aC5QSSAtIM61KSAlICgyICogTWF0aC5QSSk7XG4gIH1cbiAgZDMuZ2VvLmRpc3RhbmNlID0gZnVuY3Rpb24oYSwgYikge1xuICAgIHZhciDOlM67ID0gKGJbMF0gLSBhWzBdKSAqIGQzX3JhZGlhbnMsIM+GMCA9IGFbMV0gKiBkM19yYWRpYW5zLCDPhjEgPSBiWzFdICogZDNfcmFkaWFucywgc2luzpTOuyA9IE1hdGguc2luKM6UzrspLCBjb3POlM67ID0gTWF0aC5jb3MozpTOuyksIHNpbs+GMCA9IE1hdGguc2luKM+GMCksIGNvc8+GMCA9IE1hdGguY29zKM+GMCksIHNpbs+GMSA9IE1hdGguc2luKM+GMSksIGNvc8+GMSA9IE1hdGguY29zKM+GMSksIHQ7XG4gICAgcmV0dXJuIE1hdGguYXRhbjIoTWF0aC5zcXJ0KCh0ID0gY29zz4YxICogc2luzpTOuykgKiB0ICsgKHQgPSBjb3PPhjAgKiBzaW7PhjEgLSBzaW7PhjAgKiBjb3PPhjEgKiBjb3POlM67KSAqIHQpLCBzaW7PhjAgKiBzaW7PhjEgKyBjb3PPhjAgKiBjb3PPhjEgKiBjb3POlM67KTtcbiAgfTtcbiAgZDMuZ2VvLmdyYXRpY3VsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB4MSwgeDAsIFgxLCBYMCwgeTEsIHkwLCBZMSwgWTAsIGR4ID0gMTAsIGR5ID0gZHgsIERYID0gOTAsIERZID0gMzYwLCB4LCB5LCBYLCBZLCBwcmVjaXNpb24gPSAyLjU7XG4gICAgZnVuY3Rpb24gZ3JhdGljdWxlKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJNdWx0aUxpbmVTdHJpbmdcIixcbiAgICAgICAgY29vcmRpbmF0ZXM6IGxpbmVzKClcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpbmVzKCkge1xuICAgICAgcmV0dXJuIGQzLnJhbmdlKE1hdGguY2VpbChYMCAvIERYKSAqIERYLCBYMSwgRFgpLm1hcChYKS5jb25jYXQoZDMucmFuZ2UoTWF0aC5jZWlsKFkwIC8gRFkpICogRFksIFkxLCBEWSkubWFwKFkpKS5jb25jYXQoZDMucmFuZ2UoTWF0aC5jZWlsKHgwIC8gZHgpICogZHgsIHgxLCBkeCkuZmlsdGVyKGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgcmV0dXJuIGFicyh4ICUgRFgpID4gzrU7XG4gICAgICB9KS5tYXAoeCkpLmNvbmNhdChkMy5yYW5nZShNYXRoLmNlaWwoeTAgLyBkeSkgKiBkeSwgeTEsIGR5KS5maWx0ZXIoZnVuY3Rpb24oeSkge1xuICAgICAgICByZXR1cm4gYWJzKHkgJSBEWSkgPiDOtTtcbiAgICAgIH0pLm1hcCh5KSk7XG4gICAgfVxuICAgIGdyYXRpY3VsZS5saW5lcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGxpbmVzKCkubWFwKGZ1bmN0aW9uKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXG4gICAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdyYXRpY3VsZS5vdXRsaW5lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIlBvbHlnb25cIixcbiAgICAgICAgY29vcmRpbmF0ZXM6IFsgWChYMCkuY29uY2F0KFkoWTEpLnNsaWNlKDEpLCBYKFgxKS5yZXZlcnNlKCkuc2xpY2UoMSksIFkoWTApLnJldmVyc2UoKS5zbGljZSgxKSkgXVxuICAgICAgfTtcbiAgICB9O1xuICAgIGdyYXRpY3VsZS5leHRlbnQgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBncmF0aWN1bGUubWlub3JFeHRlbnQoKTtcbiAgICAgIHJldHVybiBncmF0aWN1bGUubWFqb3JFeHRlbnQoXykubWlub3JFeHRlbnQoXyk7XG4gICAgfTtcbiAgICBncmF0aWN1bGUubWFqb3JFeHRlbnQgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBbIFsgWDAsIFkwIF0sIFsgWDEsIFkxIF0gXTtcbiAgICAgIFgwID0gK19bMF1bMF0sIFgxID0gK19bMV1bMF07XG4gICAgICBZMCA9ICtfWzBdWzFdLCBZMSA9ICtfWzFdWzFdO1xuICAgICAgaWYgKFgwID4gWDEpIF8gPSBYMCwgWDAgPSBYMSwgWDEgPSBfO1xuICAgICAgaWYgKFkwID4gWTEpIF8gPSBZMCwgWTAgPSBZMSwgWTEgPSBfO1xuICAgICAgcmV0dXJuIGdyYXRpY3VsZS5wcmVjaXNpb24ocHJlY2lzaW9uKTtcbiAgICB9O1xuICAgIGdyYXRpY3VsZS5taW5vckV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIFsgWyB4MCwgeTAgXSwgWyB4MSwgeTEgXSBdO1xuICAgICAgeDAgPSArX1swXVswXSwgeDEgPSArX1sxXVswXTtcbiAgICAgIHkwID0gK19bMF1bMV0sIHkxID0gK19bMV1bMV07XG4gICAgICBpZiAoeDAgPiB4MSkgXyA9IHgwLCB4MCA9IHgxLCB4MSA9IF87XG4gICAgICBpZiAoeTAgPiB5MSkgXyA9IHkwLCB5MCA9IHkxLCB5MSA9IF87XG4gICAgICByZXR1cm4gZ3JhdGljdWxlLnByZWNpc2lvbihwcmVjaXNpb24pO1xuICAgIH07XG4gICAgZ3JhdGljdWxlLnN0ZXAgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBncmF0aWN1bGUubWlub3JTdGVwKCk7XG4gICAgICByZXR1cm4gZ3JhdGljdWxlLm1ham9yU3RlcChfKS5taW5vclN0ZXAoXyk7XG4gICAgfTtcbiAgICBncmF0aWN1bGUubWFqb3JTdGVwID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gWyBEWCwgRFkgXTtcbiAgICAgIERYID0gK19bMF0sIERZID0gK19bMV07XG4gICAgICByZXR1cm4gZ3JhdGljdWxlO1xuICAgIH07XG4gICAgZ3JhdGljdWxlLm1pbm9yU3RlcCA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIFsgZHgsIGR5IF07XG4gICAgICBkeCA9ICtfWzBdLCBkeSA9ICtfWzFdO1xuICAgICAgcmV0dXJuIGdyYXRpY3VsZTtcbiAgICB9O1xuICAgIGdyYXRpY3VsZS5wcmVjaXNpb24gPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwcmVjaXNpb247XG4gICAgICBwcmVjaXNpb24gPSArXztcbiAgICAgIHggPSBkM19nZW9fZ3JhdGljdWxlWCh5MCwgeTEsIDkwKTtcbiAgICAgIHkgPSBkM19nZW9fZ3JhdGljdWxlWSh4MCwgeDEsIHByZWNpc2lvbik7XG4gICAgICBYID0gZDNfZ2VvX2dyYXRpY3VsZVgoWTAsIFkxLCA5MCk7XG4gICAgICBZID0gZDNfZ2VvX2dyYXRpY3VsZVkoWDAsIFgxLCBwcmVjaXNpb24pO1xuICAgICAgcmV0dXJuIGdyYXRpY3VsZTtcbiAgICB9O1xuICAgIHJldHVybiBncmF0aWN1bGUubWFqb3JFeHRlbnQoWyBbIC0xODAsIC05MCArIM61IF0sIFsgMTgwLCA5MCAtIM61IF0gXSkubWlub3JFeHRlbnQoWyBbIC0xODAsIC04MCAtIM61IF0sIFsgMTgwLCA4MCArIM61IF0gXSk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2dlb19ncmF0aWN1bGVYKHkwLCB5MSwgZHkpIHtcbiAgICB2YXIgeSA9IGQzLnJhbmdlKHkwLCB5MSAtIM61LCBkeSkuY29uY2F0KHkxKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHkubWFwKGZ1bmN0aW9uKHkpIHtcbiAgICAgICAgcmV0dXJuIFsgeCwgeSBdO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fZ3JhdGljdWxlWSh4MCwgeDEsIGR4KSB7XG4gICAgdmFyIHggPSBkMy5yYW5nZSh4MCwgeDEgLSDOtSwgZHgpLmNvbmNhdCh4MSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHkpIHtcbiAgICAgIHJldHVybiB4Lm1hcChmdW5jdGlvbih4KSB7XG4gICAgICAgIHJldHVybiBbIHgsIHkgXTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZDNfc291cmNlKGQpIHtcbiAgICByZXR1cm4gZC5zb3VyY2U7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGFyZ2V0KGQpIHtcbiAgICByZXR1cm4gZC50YXJnZXQ7XG4gIH1cbiAgZDMuZ2VvLmdyZWF0QXJjID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNvdXJjZSA9IGQzX3NvdXJjZSwgc291cmNlXywgdGFyZ2V0ID0gZDNfdGFyZ2V0LCB0YXJnZXRfO1xuICAgIGZ1bmN0aW9uIGdyZWF0QXJjKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbIHNvdXJjZV8gfHwgc291cmNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHRhcmdldF8gfHwgdGFyZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgXVxuICAgICAgfTtcbiAgICB9XG4gICAgZ3JlYXRBcmMuZGlzdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkMy5nZW8uZGlzdGFuY2Uoc291cmNlXyB8fCBzb3VyY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgdGFyZ2V0XyB8fCB0YXJnZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgICBncmVhdEFyYy5zb3VyY2UgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBzb3VyY2U7XG4gICAgICBzb3VyY2UgPSBfLCBzb3VyY2VfID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IG51bGwgOiBfO1xuICAgICAgcmV0dXJuIGdyZWF0QXJjO1xuICAgIH07XG4gICAgZ3JlYXRBcmMudGFyZ2V0ID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0O1xuICAgICAgdGFyZ2V0ID0gXywgdGFyZ2V0XyA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBudWxsIDogXztcbiAgICAgIHJldHVybiBncmVhdEFyYztcbiAgICB9O1xuICAgIGdyZWF0QXJjLnByZWNpc2lvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBncmVhdEFyYyA6IDA7XG4gICAgfTtcbiAgICByZXR1cm4gZ3JlYXRBcmM7XG4gIH07XG4gIGQzLmdlby5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uKHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgcmV0dXJuIGQzX2dlb19pbnRlcnBvbGF0ZShzb3VyY2VbMF0gKiBkM19yYWRpYW5zLCBzb3VyY2VbMV0gKiBkM19yYWRpYW5zLCB0YXJnZXRbMF0gKiBkM19yYWRpYW5zLCB0YXJnZXRbMV0gKiBkM19yYWRpYW5zKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfZ2VvX2ludGVycG9sYXRlKHgwLCB5MCwgeDEsIHkxKSB7XG4gICAgdmFyIGN5MCA9IE1hdGguY29zKHkwKSwgc3kwID0gTWF0aC5zaW4oeTApLCBjeTEgPSBNYXRoLmNvcyh5MSksIHN5MSA9IE1hdGguc2luKHkxKSwga3gwID0gY3kwICogTWF0aC5jb3MoeDApLCBreTAgPSBjeTAgKiBNYXRoLnNpbih4MCksIGt4MSA9IGN5MSAqIE1hdGguY29zKHgxKSwga3kxID0gY3kxICogTWF0aC5zaW4oeDEpLCBkID0gMiAqIE1hdGguYXNpbihNYXRoLnNxcnQoZDNfaGF2ZXJzaW4oeTEgLSB5MCkgKyBjeTAgKiBjeTEgKiBkM19oYXZlcnNpbih4MSAtIHgwKSkpLCBrID0gMSAvIE1hdGguc2luKGQpO1xuICAgIHZhciBpbnRlcnBvbGF0ZSA9IGQgPyBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgQiA9IE1hdGguc2luKHQgKj0gZCkgKiBrLCBBID0gTWF0aC5zaW4oZCAtIHQpICogaywgeCA9IEEgKiBreDAgKyBCICoga3gxLCB5ID0gQSAqIGt5MCArIEIgKiBreTEsIHogPSBBICogc3kwICsgQiAqIHN5MTtcbiAgICAgIHJldHVybiBbIE1hdGguYXRhbjIoeSwgeCkgKiBkM19kZWdyZWVzLCBNYXRoLmF0YW4yKHosIE1hdGguc3FydCh4ICogeCArIHkgKiB5KSkgKiBkM19kZWdyZWVzIF07XG4gICAgfSA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFsgeDAgKiBkM19kZWdyZWVzLCB5MCAqIGQzX2RlZ3JlZXMgXTtcbiAgICB9O1xuICAgIGludGVycG9sYXRlLmRpc3RhbmNlID0gZDtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGU7XG4gIH1cbiAgZDMuZ2VvLmxlbmd0aCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGQzX2dlb19sZW5ndGhTdW0gPSAwO1xuICAgIGQzLmdlby5zdHJlYW0ob2JqZWN0LCBkM19nZW9fbGVuZ3RoKTtcbiAgICByZXR1cm4gZDNfZ2VvX2xlbmd0aFN1bTtcbiAgfTtcbiAgdmFyIGQzX2dlb19sZW5ndGhTdW07XG4gIHZhciBkM19nZW9fbGVuZ3RoID0ge1xuICAgIHNwaGVyZTogZDNfbm9vcCxcbiAgICBwb2ludDogZDNfbm9vcCxcbiAgICBsaW5lU3RhcnQ6IGQzX2dlb19sZW5ndGhMaW5lU3RhcnQsXG4gICAgbGluZUVuZDogZDNfbm9vcCxcbiAgICBwb2x5Z29uU3RhcnQ6IGQzX25vb3AsXG4gICAgcG9seWdvbkVuZDogZDNfbm9vcFxuICB9O1xuICBmdW5jdGlvbiBkM19nZW9fbGVuZ3RoTGluZVN0YXJ0KCkge1xuICAgIHZhciDOuzAsIHNpbs+GMCwgY29zz4YwO1xuICAgIGQzX2dlb19sZW5ndGgucG9pbnQgPSBmdW5jdGlvbijOuywgz4YpIHtcbiAgICAgIM67MCA9IM67ICogZDNfcmFkaWFucywgc2luz4YwID0gTWF0aC5zaW4oz4YgKj0gZDNfcmFkaWFucyksIGNvc8+GMCA9IE1hdGguY29zKM+GKTtcbiAgICAgIGQzX2dlb19sZW5ndGgucG9pbnQgPSBuZXh0UG9pbnQ7XG4gICAgfTtcbiAgICBkM19nZW9fbGVuZ3RoLmxpbmVFbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGQzX2dlb19sZW5ndGgucG9pbnQgPSBkM19nZW9fbGVuZ3RoLmxpbmVFbmQgPSBkM19ub29wO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbmV4dFBvaW50KM67LCDPhikge1xuICAgICAgdmFyIHNpbs+GID0gTWF0aC5zaW4oz4YgKj0gZDNfcmFkaWFucyksIGNvc8+GID0gTWF0aC5jb3Moz4YpLCB0ID0gYWJzKCjOuyAqPSBkM19yYWRpYW5zKSAtIM67MCksIGNvc86UzrsgPSBNYXRoLmNvcyh0KTtcbiAgICAgIGQzX2dlb19sZW5ndGhTdW0gKz0gTWF0aC5hdGFuMihNYXRoLnNxcnQoKHQgPSBjb3PPhiAqIE1hdGguc2luKHQpKSAqIHQgKyAodCA9IGNvc8+GMCAqIHNpbs+GIC0gc2luz4YwICogY29zz4YgKiBjb3POlM67KSAqIHQpLCBzaW7PhjAgKiBzaW7PhiArIGNvc8+GMCAqIGNvc8+GICogY29zzpTOuyk7XG4gICAgICDOuzAgPSDOuywgc2luz4YwID0gc2luz4YsIGNvc8+GMCA9IGNvc8+GO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkM19nZW9fYXppbXV0aGFsKHNjYWxlLCBhbmdsZSkge1xuICAgIGZ1bmN0aW9uIGF6aW11dGhhbCjOuywgz4YpIHtcbiAgICAgIHZhciBjb3POuyA9IE1hdGguY29zKM67KSwgY29zz4YgPSBNYXRoLmNvcyjPhiksIGsgPSBzY2FsZShjb3POuyAqIGNvc8+GKTtcbiAgICAgIHJldHVybiBbIGsgKiBjb3PPhiAqIE1hdGguc2luKM67KSwgayAqIE1hdGguc2luKM+GKSBdO1xuICAgIH1cbiAgICBhemltdXRoYWwuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICAgICAgdmFyIM+BID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpLCBjID0gYW5nbGUoz4EpLCBzaW5jID0gTWF0aC5zaW4oYyksIGNvc2MgPSBNYXRoLmNvcyhjKTtcbiAgICAgIHJldHVybiBbIE1hdGguYXRhbjIoeCAqIHNpbmMsIM+BICogY29zYyksIE1hdGguYXNpbijPgSAmJiB5ICogc2luYyAvIM+BKSBdO1xuICAgIH07XG4gICAgcmV0dXJuIGF6aW11dGhhbDtcbiAgfVxuICB2YXIgZDNfZ2VvX2F6aW11dGhhbEVxdWFsQXJlYSA9IGQzX2dlb19hemltdXRoYWwoZnVuY3Rpb24oY29zzrtjb3PPhikge1xuICAgIHJldHVybiBNYXRoLnNxcnQoMiAvICgxICsgY29zzrtjb3PPhikpO1xuICB9LCBmdW5jdGlvbijPgSkge1xuICAgIHJldHVybiAyICogTWF0aC5hc2luKM+BIC8gMik7XG4gIH0pO1xuICAoZDMuZ2VvLmF6aW11dGhhbEVxdWFsQXJlYSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkM19nZW9fcHJvamVjdGlvbihkM19nZW9fYXppbXV0aGFsRXF1YWxBcmVhKTtcbiAgfSkucmF3ID0gZDNfZ2VvX2F6aW11dGhhbEVxdWFsQXJlYTtcbiAgdmFyIGQzX2dlb19hemltdXRoYWxFcXVpZGlzdGFudCA9IGQzX2dlb19hemltdXRoYWwoZnVuY3Rpb24oY29zzrtjb3PPhikge1xuICAgIHZhciBjID0gTWF0aC5hY29zKGNvc867Y29zz4YpO1xuICAgIHJldHVybiBjICYmIGMgLyBNYXRoLnNpbihjKTtcbiAgfSwgZDNfaWRlbnRpdHkpO1xuICAoZDMuZ2VvLmF6aW11dGhhbEVxdWlkaXN0YW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX2dlb19wcm9qZWN0aW9uKGQzX2dlb19hemltdXRoYWxFcXVpZGlzdGFudCk7XG4gIH0pLnJhdyA9IGQzX2dlb19hemltdXRoYWxFcXVpZGlzdGFudDtcbiAgZnVuY3Rpb24gZDNfZ2VvX2NvbmljQ29uZm9ybWFsKM+GMCwgz4YxKSB7XG4gICAgdmFyIGNvc8+GMCA9IE1hdGguY29zKM+GMCksIHQgPSBmdW5jdGlvbijPhikge1xuICAgICAgcmV0dXJuIE1hdGgudGFuKM+AIC8gNCArIM+GIC8gMik7XG4gICAgfSwgbiA9IM+GMCA9PT0gz4YxID8gTWF0aC5zaW4oz4YwKSA6IE1hdGgubG9nKGNvc8+GMCAvIE1hdGguY29zKM+GMSkpIC8gTWF0aC5sb2codCjPhjEpIC8gdCjPhjApKSwgRiA9IGNvc8+GMCAqIE1hdGgucG93KHQoz4YwKSwgbikgLyBuO1xuICAgIGlmICghbikgcmV0dXJuIGQzX2dlb19tZXJjYXRvcjtcbiAgICBmdW5jdGlvbiBmb3J3YXJkKM67LCDPhikge1xuICAgICAgaWYgKEYgPiAwKSB7XG4gICAgICAgIGlmICjPhiA8IC1oYWxmz4AgKyDOtSkgz4YgPSAtaGFsZs+AICsgzrU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoz4YgPiBoYWxmz4AgLSDOtSkgz4YgPSBoYWxmz4AgLSDOtTtcbiAgICAgIH1cbiAgICAgIHZhciDPgSA9IEYgLyBNYXRoLnBvdyh0KM+GKSwgbik7XG4gICAgICByZXR1cm4gWyDPgSAqIE1hdGguc2luKG4gKiDOuyksIEYgLSDPgSAqIE1hdGguY29zKG4gKiDOuykgXTtcbiAgICB9XG4gICAgZm9yd2FyZC5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICB2YXIgz4EwX3kgPSBGIC0geSwgz4EgPSBkM19zZ24obikgKiBNYXRoLnNxcnQoeCAqIHggKyDPgTBfeSAqIM+BMF95KTtcbiAgICAgIHJldHVybiBbIE1hdGguYXRhbjIoeCwgz4EwX3kpIC8gbiwgMiAqIE1hdGguYXRhbihNYXRoLnBvdyhGIC8gz4EsIDEgLyBuKSkgLSBoYWxmz4AgXTtcbiAgICB9O1xuICAgIHJldHVybiBmb3J3YXJkO1xuICB9XG4gIChkMy5nZW8uY29uaWNDb25mb3JtYWwgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfZ2VvX2NvbmljKGQzX2dlb19jb25pY0NvbmZvcm1hbCk7XG4gIH0pLnJhdyA9IGQzX2dlb19jb25pY0NvbmZvcm1hbDtcbiAgZnVuY3Rpb24gZDNfZ2VvX2NvbmljRXF1aWRpc3RhbnQoz4YwLCDPhjEpIHtcbiAgICB2YXIgY29zz4YwID0gTWF0aC5jb3Moz4YwKSwgbiA9IM+GMCA9PT0gz4YxID8gTWF0aC5zaW4oz4YwKSA6IChjb3PPhjAgLSBNYXRoLmNvcyjPhjEpKSAvICjPhjEgLSDPhjApLCBHID0gY29zz4YwIC8gbiArIM+GMDtcbiAgICBpZiAoYWJzKG4pIDwgzrUpIHJldHVybiBkM19nZW9fZXF1aXJlY3Rhbmd1bGFyO1xuICAgIGZ1bmN0aW9uIGZvcndhcmQozrssIM+GKSB7XG4gICAgICB2YXIgz4EgPSBHIC0gz4Y7XG4gICAgICByZXR1cm4gWyDPgSAqIE1hdGguc2luKG4gKiDOuyksIEcgLSDPgSAqIE1hdGguY29zKG4gKiDOuykgXTtcbiAgICB9XG4gICAgZm9yd2FyZC5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICB2YXIgz4EwX3kgPSBHIC0geTtcbiAgICAgIHJldHVybiBbIE1hdGguYXRhbjIoeCwgz4EwX3kpIC8gbiwgRyAtIGQzX3NnbihuKSAqIE1hdGguc3FydCh4ICogeCArIM+BMF95ICogz4EwX3kpIF07XG4gICAgfTtcbiAgICByZXR1cm4gZm9yd2FyZDtcbiAgfVxuICAoZDMuZ2VvLmNvbmljRXF1aWRpc3RhbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfZ2VvX2NvbmljKGQzX2dlb19jb25pY0VxdWlkaXN0YW50KTtcbiAgfSkucmF3ID0gZDNfZ2VvX2NvbmljRXF1aWRpc3RhbnQ7XG4gIHZhciBkM19nZW9fZ25vbW9uaWMgPSBkM19nZW9fYXppbXV0aGFsKGZ1bmN0aW9uKGNvc867Y29zz4YpIHtcbiAgICByZXR1cm4gMSAvIGNvc867Y29zz4Y7XG4gIH0sIE1hdGguYXRhbik7XG4gIChkMy5nZW8uZ25vbW9uaWMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfZ2VvX3Byb2plY3Rpb24oZDNfZ2VvX2dub21vbmljKTtcbiAgfSkucmF3ID0gZDNfZ2VvX2dub21vbmljO1xuICBmdW5jdGlvbiBkM19nZW9fbWVyY2F0b3IozrssIM+GKSB7XG4gICAgcmV0dXJuIFsgzrssIE1hdGgubG9nKE1hdGgudGFuKM+AIC8gNCArIM+GIC8gMikpIF07XG4gIH1cbiAgZDNfZ2VvX21lcmNhdG9yLmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICByZXR1cm4gWyB4LCAyICogTWF0aC5hdGFuKE1hdGguZXhwKHkpKSAtIGhhbGbPgCBdO1xuICB9O1xuICBmdW5jdGlvbiBkM19nZW9fbWVyY2F0b3JQcm9qZWN0aW9uKHByb2plY3QpIHtcbiAgICB2YXIgbSA9IGQzX2dlb19wcm9qZWN0aW9uKHByb2plY3QpLCBzY2FsZSA9IG0uc2NhbGUsIHRyYW5zbGF0ZSA9IG0udHJhbnNsYXRlLCBjbGlwRXh0ZW50ID0gbS5jbGlwRXh0ZW50LCBjbGlwQXV0bztcbiAgICBtLnNjYWxlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdiA9IHNjYWxlLmFwcGx5KG0sIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gdiA9PT0gbSA/IGNsaXBBdXRvID8gbS5jbGlwRXh0ZW50KG51bGwpIDogbSA6IHY7XG4gICAgfTtcbiAgICBtLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHYgPSB0cmFuc2xhdGUuYXBwbHkobSwgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiB2ID09PSBtID8gY2xpcEF1dG8gPyBtLmNsaXBFeHRlbnQobnVsbCkgOiBtIDogdjtcbiAgICB9O1xuICAgIG0uY2xpcEV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHZhciB2ID0gY2xpcEV4dGVudC5hcHBseShtLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKHYgPT09IG0pIHtcbiAgICAgICAgaWYgKGNsaXBBdXRvID0gXyA9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIGsgPSDPgCAqIHNjYWxlKCksIHQgPSB0cmFuc2xhdGUoKTtcbiAgICAgICAgICBjbGlwRXh0ZW50KFsgWyB0WzBdIC0gaywgdFsxXSAtIGsgXSwgWyB0WzBdICsgaywgdFsxXSArIGsgXSBdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjbGlwQXV0bykge1xuICAgICAgICB2ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2O1xuICAgIH07XG4gICAgcmV0dXJuIG0uY2xpcEV4dGVudChudWxsKTtcbiAgfVxuICAoZDMuZ2VvLm1lcmNhdG9yID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX2dlb19tZXJjYXRvclByb2plY3Rpb24oZDNfZ2VvX21lcmNhdG9yKTtcbiAgfSkucmF3ID0gZDNfZ2VvX21lcmNhdG9yO1xuICB2YXIgZDNfZ2VvX29ydGhvZ3JhcGhpYyA9IGQzX2dlb19hemltdXRoYWwoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0sIE1hdGguYXNpbik7XG4gIChkMy5nZW8ub3J0aG9ncmFwaGljID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX2dlb19wcm9qZWN0aW9uKGQzX2dlb19vcnRob2dyYXBoaWMpO1xuICB9KS5yYXcgPSBkM19nZW9fb3J0aG9ncmFwaGljO1xuICB2YXIgZDNfZ2VvX3N0ZXJlb2dyYXBoaWMgPSBkM19nZW9fYXppbXV0aGFsKGZ1bmN0aW9uKGNvc867Y29zz4YpIHtcbiAgICByZXR1cm4gMSAvICgxICsgY29zzrtjb3PPhik7XG4gIH0sIGZ1bmN0aW9uKM+BKSB7XG4gICAgcmV0dXJuIDIgKiBNYXRoLmF0YW4oz4EpO1xuICB9KTtcbiAgKGQzLmdlby5zdGVyZW9ncmFwaGljID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX2dlb19wcm9qZWN0aW9uKGQzX2dlb19zdGVyZW9ncmFwaGljKTtcbiAgfSkucmF3ID0gZDNfZ2VvX3N0ZXJlb2dyYXBoaWM7XG4gIGZ1bmN0aW9uIGQzX2dlb190cmFuc3ZlcnNlTWVyY2F0b3IozrssIM+GKSB7XG4gICAgcmV0dXJuIFsgTWF0aC5sb2coTWF0aC50YW4oz4AgLyA0ICsgz4YgLyAyKSksIC3OuyBdO1xuICB9XG4gIGQzX2dlb190cmFuc3ZlcnNlTWVyY2F0b3IuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHJldHVybiBbIC15LCAyICogTWF0aC5hdGFuKE1hdGguZXhwKHgpKSAtIGhhbGbPgCBdO1xuICB9O1xuICAoZDMuZ2VvLnRyYW5zdmVyc2VNZXJjYXRvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcm9qZWN0aW9uID0gZDNfZ2VvX21lcmNhdG9yUHJvamVjdGlvbihkM19nZW9fdHJhbnN2ZXJzZU1lcmNhdG9yKSwgY2VudGVyID0gcHJvamVjdGlvbi5jZW50ZXIsIHJvdGF0ZSA9IHByb2plY3Rpb24ucm90YXRlO1xuICAgIHByb2plY3Rpb24uY2VudGVyID0gZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIF8gPyBjZW50ZXIoWyAtX1sxXSwgX1swXSBdKSA6IChfID0gY2VudGVyKCksIFsgX1sxXSwgLV9bMF0gXSk7XG4gICAgfTtcbiAgICBwcm9qZWN0aW9uLnJvdGF0ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBfID8gcm90YXRlKFsgX1swXSwgX1sxXSwgXy5sZW5ndGggPiAyID8gX1syXSArIDkwIDogOTAgXSkgOiAoXyA9IHJvdGF0ZSgpLCBcbiAgICAgIFsgX1swXSwgX1sxXSwgX1syXSAtIDkwIF0pO1xuICAgIH07XG4gICAgcmV0dXJuIHJvdGF0ZShbIDAsIDAsIDkwIF0pO1xuICB9KS5yYXcgPSBkM19nZW9fdHJhbnN2ZXJzZU1lcmNhdG9yO1xuICBkMy5nZW9tID0ge307XG4gIGZ1bmN0aW9uIGQzX2dlb21fcG9pbnRYKGQpIHtcbiAgICByZXR1cm4gZFswXTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9tX3BvaW50WShkKSB7XG4gICAgcmV0dXJuIGRbMV07XG4gIH1cbiAgZDMuZ2VvbS5odWxsID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICB2YXIgeCA9IGQzX2dlb21fcG9pbnRYLCB5ID0gZDNfZ2VvbV9wb2ludFk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBodWxsKHZlcnRpY2VzKTtcbiAgICBmdW5jdGlvbiBodWxsKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLmxlbmd0aCA8IDMpIHJldHVybiBbXTtcbiAgICAgIHZhciBmeCA9IGQzX2Z1bmN0b3IoeCksIGZ5ID0gZDNfZnVuY3Rvcih5KSwgaSwgbiA9IGRhdGEubGVuZ3RoLCBwb2ludHMgPSBbXSwgZmxpcHBlZFBvaW50cyA9IFtdO1xuICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICBwb2ludHMucHVzaChbICtmeC5jYWxsKHRoaXMsIGRhdGFbaV0sIGkpLCArZnkuY2FsbCh0aGlzLCBkYXRhW2ldLCBpKSwgaSBdKTtcbiAgICAgIH1cbiAgICAgIHBvaW50cy5zb3J0KGQzX2dlb21faHVsbE9yZGVyKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIGZsaXBwZWRQb2ludHMucHVzaChbIHBvaW50c1tpXVswXSwgLXBvaW50c1tpXVsxXSBdKTtcbiAgICAgIHZhciB1cHBlciA9IGQzX2dlb21faHVsbFVwcGVyKHBvaW50cyksIGxvd2VyID0gZDNfZ2VvbV9odWxsVXBwZXIoZmxpcHBlZFBvaW50cyk7XG4gICAgICB2YXIgc2tpcExlZnQgPSBsb3dlclswXSA9PT0gdXBwZXJbMF0sIHNraXBSaWdodCA9IGxvd2VyW2xvd2VyLmxlbmd0aCAtIDFdID09PSB1cHBlclt1cHBlci5sZW5ndGggLSAxXSwgcG9seWdvbiA9IFtdO1xuICAgICAgZm9yIChpID0gdXBwZXIubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHBvbHlnb24ucHVzaChkYXRhW3BvaW50c1t1cHBlcltpXV1bMl1dKTtcbiAgICAgIGZvciAoaSA9ICtza2lwTGVmdDsgaSA8IGxvd2VyLmxlbmd0aCAtIHNraXBSaWdodDsgKytpKSBwb2x5Z29uLnB1c2goZGF0YVtwb2ludHNbbG93ZXJbaV1dWzJdXSk7XG4gICAgICByZXR1cm4gcG9seWdvbjtcbiAgICB9XG4gICAgaHVsbC54ID0gZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeCA9IF8sIGh1bGwpIDogeDtcbiAgICB9O1xuICAgIGh1bGwueSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkgPSBfLCBodWxsKSA6IHk7XG4gICAgfTtcbiAgICByZXR1cm4gaHVsbDtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfZ2VvbV9odWxsVXBwZXIocG9pbnRzKSB7XG4gICAgdmFyIG4gPSBwb2ludHMubGVuZ3RoLCBodWxsID0gWyAwLCAxIF0sIGhzID0gMjtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IG47IGkrKykge1xuICAgICAgd2hpbGUgKGhzID4gMSAmJiBkM19jcm9zczJkKHBvaW50c1todWxsW2hzIC0gMl1dLCBwb2ludHNbaHVsbFtocyAtIDFdXSwgcG9pbnRzW2ldKSA8PSAwKSAtLWhzO1xuICAgICAgaHVsbFtocysrXSA9IGk7XG4gICAgfVxuICAgIHJldHVybiBodWxsLnNsaWNlKDAsIGhzKTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9tX2h1bGxPcmRlcihhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gLSBiWzBdIHx8IGFbMV0gLSBiWzFdO1xuICB9XG4gIGQzLmdlb20ucG9seWdvbiA9IGZ1bmN0aW9uKGNvb3JkaW5hdGVzKSB7XG4gICAgZDNfc3ViY2xhc3MoY29vcmRpbmF0ZXMsIGQzX2dlb21fcG9seWdvblByb3RvdHlwZSk7XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9O1xuICB2YXIgZDNfZ2VvbV9wb2x5Z29uUHJvdG90eXBlID0gZDMuZ2VvbS5wb2x5Z29uLnByb3RvdHlwZSA9IFtdO1xuICBkM19nZW9tX3BvbHlnb25Qcm90b3R5cGUuYXJlYSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpID0gLTEsIG4gPSB0aGlzLmxlbmd0aCwgYSwgYiA9IHRoaXNbbiAtIDFdLCBhcmVhID0gMDtcbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgYSA9IGI7XG4gICAgICBiID0gdGhpc1tpXTtcbiAgICAgIGFyZWEgKz0gYVsxXSAqIGJbMF0gLSBhWzBdICogYlsxXTtcbiAgICB9XG4gICAgcmV0dXJuIGFyZWEgKiAuNTtcbiAgfTtcbiAgZDNfZ2VvbV9wb2x5Z29uUHJvdG90eXBlLmNlbnRyb2lkID0gZnVuY3Rpb24oaykge1xuICAgIHZhciBpID0gLTEsIG4gPSB0aGlzLmxlbmd0aCwgeCA9IDAsIHkgPSAwLCBhLCBiID0gdGhpc1tuIC0gMV0sIGM7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSBrID0gLTEgLyAoNiAqIHRoaXMuYXJlYSgpKTtcbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgYSA9IGI7XG4gICAgICBiID0gdGhpc1tpXTtcbiAgICAgIGMgPSBhWzBdICogYlsxXSAtIGJbMF0gKiBhWzFdO1xuICAgICAgeCArPSAoYVswXSArIGJbMF0pICogYztcbiAgICAgIHkgKz0gKGFbMV0gKyBiWzFdKSAqIGM7XG4gICAgfVxuICAgIHJldHVybiBbIHggKiBrLCB5ICogayBdO1xuICB9O1xuICBkM19nZW9tX3BvbHlnb25Qcm90b3R5cGUuY2xpcCA9IGZ1bmN0aW9uKHN1YmplY3QpIHtcbiAgICB2YXIgaW5wdXQsIGNsb3NlZCA9IGQzX2dlb21fcG9seWdvbkNsb3NlZChzdWJqZWN0KSwgaSA9IC0xLCBuID0gdGhpcy5sZW5ndGggLSBkM19nZW9tX3BvbHlnb25DbG9zZWQodGhpcyksIGosIG0sIGEgPSB0aGlzW24gLSAxXSwgYiwgYywgZDtcbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgaW5wdXQgPSBzdWJqZWN0LnNsaWNlKCk7XG4gICAgICBzdWJqZWN0Lmxlbmd0aCA9IDA7XG4gICAgICBiID0gdGhpc1tpXTtcbiAgICAgIGMgPSBpbnB1dFsobSA9IGlucHV0Lmxlbmd0aCAtIGNsb3NlZCkgLSAxXTtcbiAgICAgIGogPSAtMTtcbiAgICAgIHdoaWxlICgrK2ogPCBtKSB7XG4gICAgICAgIGQgPSBpbnB1dFtqXTtcbiAgICAgICAgaWYgKGQzX2dlb21fcG9seWdvbkluc2lkZShkLCBhLCBiKSkge1xuICAgICAgICAgIGlmICghZDNfZ2VvbV9wb2x5Z29uSW5zaWRlKGMsIGEsIGIpKSB7XG4gICAgICAgICAgICBzdWJqZWN0LnB1c2goZDNfZ2VvbV9wb2x5Z29uSW50ZXJzZWN0KGMsIGQsIGEsIGIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3ViamVjdC5wdXNoKGQpO1xuICAgICAgICB9IGVsc2UgaWYgKGQzX2dlb21fcG9seWdvbkluc2lkZShjLCBhLCBiKSkge1xuICAgICAgICAgIHN1YmplY3QucHVzaChkM19nZW9tX3BvbHlnb25JbnRlcnNlY3QoYywgZCwgYSwgYikpO1xuICAgICAgICB9XG4gICAgICAgIGMgPSBkO1xuICAgICAgfVxuICAgICAgaWYgKGNsb3NlZCkgc3ViamVjdC5wdXNoKHN1YmplY3RbMF0pO1xuICAgICAgYSA9IGI7XG4gICAgfVxuICAgIHJldHVybiBzdWJqZWN0O1xuICB9O1xuICBmdW5jdGlvbiBkM19nZW9tX3BvbHlnb25JbnNpZGUocCwgYSwgYikge1xuICAgIHJldHVybiAoYlswXSAtIGFbMF0pICogKHBbMV0gLSBhWzFdKSA8IChiWzFdIC0gYVsxXSkgKiAocFswXSAtIGFbMF0pO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb21fcG9seWdvbkludGVyc2VjdChjLCBkLCBhLCBiKSB7XG4gICAgdmFyIHgxID0gY1swXSwgeDMgPSBhWzBdLCB4MjEgPSBkWzBdIC0geDEsIHg0MyA9IGJbMF0gLSB4MywgeTEgPSBjWzFdLCB5MyA9IGFbMV0sIHkyMSA9IGRbMV0gLSB5MSwgeTQzID0gYlsxXSAtIHkzLCB1YSA9ICh4NDMgKiAoeTEgLSB5MykgLSB5NDMgKiAoeDEgLSB4MykpIC8gKHk0MyAqIHgyMSAtIHg0MyAqIHkyMSk7XG4gICAgcmV0dXJuIFsgeDEgKyB1YSAqIHgyMSwgeTEgKyB1YSAqIHkyMSBdO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb21fcG9seWdvbkNsb3NlZChjb29yZGluYXRlcykge1xuICAgIHZhciBhID0gY29vcmRpbmF0ZXNbMF0sIGIgPSBjb29yZGluYXRlc1tjb29yZGluYXRlcy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gIShhWzBdIC0gYlswXSB8fCBhWzFdIC0gYlsxXSk7XG4gIH1cbiAgdmFyIGQzX2dlb21fdm9yb25vaUVkZ2VzLCBkM19nZW9tX3Zvcm9ub2lDZWxscywgZDNfZ2VvbV92b3Jvbm9pQmVhY2hlcywgZDNfZ2VvbV92b3Jvbm9pQmVhY2hQb29sID0gW10sIGQzX2dlb21fdm9yb25vaUZpcnN0Q2lyY2xlLCBkM19nZW9tX3Zvcm9ub2lDaXJjbGVzLCBkM19nZW9tX3Zvcm9ub2lDaXJjbGVQb29sID0gW107XG4gIGZ1bmN0aW9uIGQzX2dlb21fdm9yb25vaUJlYWNoKCkge1xuICAgIGQzX2dlb21fdm9yb25vaVJlZEJsYWNrTm9kZSh0aGlzKTtcbiAgICB0aGlzLmVkZ2UgPSB0aGlzLnNpdGUgPSB0aGlzLmNpcmNsZSA9IG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvbV92b3Jvbm9pQ3JlYXRlQmVhY2goc2l0ZSkge1xuICAgIHZhciBiZWFjaCA9IGQzX2dlb21fdm9yb25vaUJlYWNoUG9vbC5wb3AoKSB8fCBuZXcgZDNfZ2VvbV92b3Jvbm9pQmVhY2goKTtcbiAgICBiZWFjaC5zaXRlID0gc2l0ZTtcbiAgICByZXR1cm4gYmVhY2g7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvbV92b3Jvbm9pRGV0YWNoQmVhY2goYmVhY2gpIHtcbiAgICBkM19nZW9tX3Zvcm9ub2lEZXRhY2hDaXJjbGUoYmVhY2gpO1xuICAgIGQzX2dlb21fdm9yb25vaUJlYWNoZXMucmVtb3ZlKGJlYWNoKTtcbiAgICBkM19nZW9tX3Zvcm9ub2lCZWFjaFBvb2wucHVzaChiZWFjaCk7XG4gICAgZDNfZ2VvbV92b3Jvbm9pUmVkQmxhY2tOb2RlKGJlYWNoKTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9tX3Zvcm9ub2lSZW1vdmVCZWFjaChiZWFjaCkge1xuICAgIHZhciBjaXJjbGUgPSBiZWFjaC5jaXJjbGUsIHggPSBjaXJjbGUueCwgeSA9IGNpcmNsZS5jeSwgdmVydGV4ID0ge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9LCBwcmV2aW91cyA9IGJlYWNoLlAsIG5leHQgPSBiZWFjaC5OLCBkaXNhcHBlYXJpbmcgPSBbIGJlYWNoIF07XG4gICAgZDNfZ2VvbV92b3Jvbm9pRGV0YWNoQmVhY2goYmVhY2gpO1xuICAgIHZhciBsQXJjID0gcHJldmlvdXM7XG4gICAgd2hpbGUgKGxBcmMuY2lyY2xlICYmIGFicyh4IC0gbEFyYy5jaXJjbGUueCkgPCDOtSAmJiBhYnMoeSAtIGxBcmMuY2lyY2xlLmN5KSA8IM61KSB7XG4gICAgICBwcmV2aW91cyA9IGxBcmMuUDtcbiAgICAgIGRpc2FwcGVhcmluZy51bnNoaWZ0KGxBcmMpO1xuICAgICAgZDNfZ2VvbV92b3Jvbm9pRGV0YWNoQmVhY2gobEFyYyk7XG4gICAgICBsQXJjID0gcHJldmlvdXM7XG4gICAgfVxuICAgIGRpc2FwcGVhcmluZy51bnNoaWZ0KGxBcmMpO1xuICAgIGQzX2dlb21fdm9yb25vaURldGFjaENpcmNsZShsQXJjKTtcbiAgICB2YXIgckFyYyA9IG5leHQ7XG4gICAgd2hpbGUgKHJBcmMuY2lyY2xlICYmIGFicyh4IC0gckFyYy5jaXJjbGUueCkgPCDOtSAmJiBhYnMoeSAtIHJBcmMuY2lyY2xlLmN5KSA8IM61KSB7XG4gICAgICBuZXh0ID0gckFyYy5OO1xuICAgICAgZGlzYXBwZWFyaW5nLnB1c2gockFyYyk7XG4gICAgICBkM19nZW9tX3Zvcm9ub2lEZXRhY2hCZWFjaChyQXJjKTtcbiAgICAgIHJBcmMgPSBuZXh0O1xuICAgIH1cbiAgICBkaXNhcHBlYXJpbmcucHVzaChyQXJjKTtcbiAgICBkM19nZW9tX3Zvcm9ub2lEZXRhY2hDaXJjbGUockFyYyk7XG4gICAgdmFyIG5BcmNzID0gZGlzYXBwZWFyaW5nLmxlbmd0aCwgaUFyYztcbiAgICBmb3IgKGlBcmMgPSAxOyBpQXJjIDwgbkFyY3M7ICsraUFyYykge1xuICAgICAgckFyYyA9IGRpc2FwcGVhcmluZ1tpQXJjXTtcbiAgICAgIGxBcmMgPSBkaXNhcHBlYXJpbmdbaUFyYyAtIDFdO1xuICAgICAgZDNfZ2VvbV92b3Jvbm9pU2V0RWRnZUVuZChyQXJjLmVkZ2UsIGxBcmMuc2l0ZSwgckFyYy5zaXRlLCB2ZXJ0ZXgpO1xuICAgIH1cbiAgICBsQXJjID0gZGlzYXBwZWFyaW5nWzBdO1xuICAgIHJBcmMgPSBkaXNhcHBlYXJpbmdbbkFyY3MgLSAxXTtcbiAgICByQXJjLmVkZ2UgPSBkM19nZW9tX3Zvcm9ub2lDcmVhdGVFZGdlKGxBcmMuc2l0ZSwgckFyYy5zaXRlLCBudWxsLCB2ZXJ0ZXgpO1xuICAgIGQzX2dlb21fdm9yb25vaUF0dGFjaENpcmNsZShsQXJjKTtcbiAgICBkM19nZW9tX3Zvcm9ub2lBdHRhY2hDaXJjbGUockFyYyk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvbV92b3Jvbm9pQWRkQmVhY2goc2l0ZSkge1xuICAgIHZhciB4ID0gc2l0ZS54LCBkaXJlY3RyaXggPSBzaXRlLnksIGxBcmMsIHJBcmMsIGR4bCwgZHhyLCBub2RlID0gZDNfZ2VvbV92b3Jvbm9pQmVhY2hlcy5fO1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBkeGwgPSBkM19nZW9tX3Zvcm9ub2lMZWZ0QnJlYWtQb2ludChub2RlLCBkaXJlY3RyaXgpIC0geDtcbiAgICAgIGlmIChkeGwgPiDOtSkgbm9kZSA9IG5vZGUuTDsgZWxzZSB7XG4gICAgICAgIGR4ciA9IHggLSBkM19nZW9tX3Zvcm9ub2lSaWdodEJyZWFrUG9pbnQobm9kZSwgZGlyZWN0cml4KTtcbiAgICAgICAgaWYgKGR4ciA+IM61KSB7XG4gICAgICAgICAgaWYgKCFub2RlLlIpIHtcbiAgICAgICAgICAgIGxBcmMgPSBub2RlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5vZGUgPSBub2RlLlI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGR4bCA+IC3OtSkge1xuICAgICAgICAgICAgbEFyYyA9IG5vZGUuUDtcbiAgICAgICAgICAgIHJBcmMgPSBub2RlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZHhyID4gLc61KSB7XG4gICAgICAgICAgICBsQXJjID0gbm9kZTtcbiAgICAgICAgICAgIHJBcmMgPSBub2RlLk47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxBcmMgPSByQXJjID0gbm9kZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIG5ld0FyYyA9IGQzX2dlb21fdm9yb25vaUNyZWF0ZUJlYWNoKHNpdGUpO1xuICAgIGQzX2dlb21fdm9yb25vaUJlYWNoZXMuaW5zZXJ0KGxBcmMsIG5ld0FyYyk7XG4gICAgaWYgKCFsQXJjICYmICFyQXJjKSByZXR1cm47XG4gICAgaWYgKGxBcmMgPT09IHJBcmMpIHtcbiAgICAgIGQzX2dlb21fdm9yb25vaURldGFjaENpcmNsZShsQXJjKTtcbiAgICAgIHJBcmMgPSBkM19nZW9tX3Zvcm9ub2lDcmVhdGVCZWFjaChsQXJjLnNpdGUpO1xuICAgICAgZDNfZ2VvbV92b3Jvbm9pQmVhY2hlcy5pbnNlcnQobmV3QXJjLCByQXJjKTtcbiAgICAgIG5ld0FyYy5lZGdlID0gckFyYy5lZGdlID0gZDNfZ2VvbV92b3Jvbm9pQ3JlYXRlRWRnZShsQXJjLnNpdGUsIG5ld0FyYy5zaXRlKTtcbiAgICAgIGQzX2dlb21fdm9yb25vaUF0dGFjaENpcmNsZShsQXJjKTtcbiAgICAgIGQzX2dlb21fdm9yb25vaUF0dGFjaENpcmNsZShyQXJjKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFyQXJjKSB7XG4gICAgICBuZXdBcmMuZWRnZSA9IGQzX2dlb21fdm9yb25vaUNyZWF0ZUVkZ2UobEFyYy5zaXRlLCBuZXdBcmMuc2l0ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGQzX2dlb21fdm9yb25vaURldGFjaENpcmNsZShsQXJjKTtcbiAgICBkM19nZW9tX3Zvcm9ub2lEZXRhY2hDaXJjbGUockFyYyk7XG4gICAgdmFyIGxTaXRlID0gbEFyYy5zaXRlLCBheCA9IGxTaXRlLngsIGF5ID0gbFNpdGUueSwgYnggPSBzaXRlLnggLSBheCwgYnkgPSBzaXRlLnkgLSBheSwgclNpdGUgPSByQXJjLnNpdGUsIGN4ID0gclNpdGUueCAtIGF4LCBjeSA9IHJTaXRlLnkgLSBheSwgZCA9IDIgKiAoYnggKiBjeSAtIGJ5ICogY3gpLCBoYiA9IGJ4ICogYnggKyBieSAqIGJ5LCBoYyA9IGN4ICogY3ggKyBjeSAqIGN5LCB2ZXJ0ZXggPSB7XG4gICAgICB4OiAoY3kgKiBoYiAtIGJ5ICogaGMpIC8gZCArIGF4LFxuICAgICAgeTogKGJ4ICogaGMgLSBjeCAqIGhiKSAvIGQgKyBheVxuICAgIH07XG4gICAgZDNfZ2VvbV92b3Jvbm9pU2V0RWRnZUVuZChyQXJjLmVkZ2UsIGxTaXRlLCByU2l0ZSwgdmVydGV4KTtcbiAgICBuZXdBcmMuZWRnZSA9IGQzX2dlb21fdm9yb25vaUNyZWF0ZUVkZ2UobFNpdGUsIHNpdGUsIG51bGwsIHZlcnRleCk7XG4gICAgckFyYy5lZGdlID0gZDNfZ2VvbV92b3Jvbm9pQ3JlYXRlRWRnZShzaXRlLCByU2l0ZSwgbnVsbCwgdmVydGV4KTtcbiAgICBkM19nZW9tX3Zvcm9ub2lBdHRhY2hDaXJjbGUobEFyYyk7XG4gICAgZDNfZ2VvbV92b3Jvbm9pQXR0YWNoQ2lyY2xlKHJBcmMpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb21fdm9yb25vaUxlZnRCcmVha1BvaW50KGFyYywgZGlyZWN0cml4KSB7XG4gICAgdmFyIHNpdGUgPSBhcmMuc2l0ZSwgcmZvY3ggPSBzaXRlLngsIHJmb2N5ID0gc2l0ZS55LCBwYnkyID0gcmZvY3kgLSBkaXJlY3RyaXg7XG4gICAgaWYgKCFwYnkyKSByZXR1cm4gcmZvY3g7XG4gICAgdmFyIGxBcmMgPSBhcmMuUDtcbiAgICBpZiAoIWxBcmMpIHJldHVybiAtSW5maW5pdHk7XG4gICAgc2l0ZSA9IGxBcmMuc2l0ZTtcbiAgICB2YXIgbGZvY3ggPSBzaXRlLngsIGxmb2N5ID0gc2l0ZS55LCBwbGJ5MiA9IGxmb2N5IC0gZGlyZWN0cml4O1xuICAgIGlmICghcGxieTIpIHJldHVybiBsZm9jeDtcbiAgICB2YXIgaGwgPSBsZm9jeCAtIHJmb2N4LCBhYnkyID0gMSAvIHBieTIgLSAxIC8gcGxieTIsIGIgPSBobCAvIHBsYnkyO1xuICAgIGlmIChhYnkyKSByZXR1cm4gKC1iICsgTWF0aC5zcXJ0KGIgKiBiIC0gMiAqIGFieTIgKiAoaGwgKiBobCAvICgtMiAqIHBsYnkyKSAtIGxmb2N5ICsgcGxieTIgLyAyICsgcmZvY3kgLSBwYnkyIC8gMikpKSAvIGFieTIgKyByZm9jeDtcbiAgICByZXR1cm4gKHJmb2N4ICsgbGZvY3gpIC8gMjtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9tX3Zvcm9ub2lSaWdodEJyZWFrUG9pbnQoYXJjLCBkaXJlY3RyaXgpIHtcbiAgICB2YXIgckFyYyA9IGFyYy5OO1xuICAgIGlmIChyQXJjKSByZXR1cm4gZDNfZ2VvbV92b3Jvbm9pTGVmdEJyZWFrUG9pbnQockFyYywgZGlyZWN0cml4KTtcbiAgICB2YXIgc2l0ZSA9IGFyYy5zaXRlO1xuICAgIHJldHVybiBzaXRlLnkgPT09IGRpcmVjdHJpeCA/IHNpdGUueCA6IEluZmluaXR5O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb21fdm9yb25vaUNlbGwoc2l0ZSkge1xuICAgIHRoaXMuc2l0ZSA9IHNpdGU7XG4gICAgdGhpcy5lZGdlcyA9IFtdO1xuICB9XG4gIGQzX2dlb21fdm9yb25vaUNlbGwucHJvdG90eXBlLnByZXBhcmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaGFsZkVkZ2VzID0gdGhpcy5lZGdlcywgaUhhbGZFZGdlID0gaGFsZkVkZ2VzLmxlbmd0aCwgZWRnZTtcbiAgICB3aGlsZSAoaUhhbGZFZGdlLS0pIHtcbiAgICAgIGVkZ2UgPSBoYWxmRWRnZXNbaUhhbGZFZGdlXS5lZGdlO1xuICAgICAgaWYgKCFlZGdlLmIgfHwgIWVkZ2UuYSkgaGFsZkVkZ2VzLnNwbGljZShpSGFsZkVkZ2UsIDEpO1xuICAgIH1cbiAgICBoYWxmRWRnZXMuc29ydChkM19nZW9tX3Zvcm9ub2lIYWxmRWRnZU9yZGVyKTtcbiAgICByZXR1cm4gaGFsZkVkZ2VzLmxlbmd0aDtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfZ2VvbV92b3Jvbm9pQ2xvc2VDZWxscyhleHRlbnQpIHtcbiAgICB2YXIgeDAgPSBleHRlbnRbMF1bMF0sIHgxID0gZXh0ZW50WzFdWzBdLCB5MCA9IGV4dGVudFswXVsxXSwgeTEgPSBleHRlbnRbMV1bMV0sIHgyLCB5MiwgeDMsIHkzLCBjZWxscyA9IGQzX2dlb21fdm9yb25vaUNlbGxzLCBpQ2VsbCA9IGNlbGxzLmxlbmd0aCwgY2VsbCwgaUhhbGZFZGdlLCBoYWxmRWRnZXMsIG5IYWxmRWRnZXMsIHN0YXJ0LCBlbmQ7XG4gICAgd2hpbGUgKGlDZWxsLS0pIHtcbiAgICAgIGNlbGwgPSBjZWxsc1tpQ2VsbF07XG4gICAgICBpZiAoIWNlbGwgfHwgIWNlbGwucHJlcGFyZSgpKSBjb250aW51ZTtcbiAgICAgIGhhbGZFZGdlcyA9IGNlbGwuZWRnZXM7XG4gICAgICBuSGFsZkVkZ2VzID0gaGFsZkVkZ2VzLmxlbmd0aDtcbiAgICAgIGlIYWxmRWRnZSA9IDA7XG4gICAgICB3aGlsZSAoaUhhbGZFZGdlIDwgbkhhbGZFZGdlcykge1xuICAgICAgICBlbmQgPSBoYWxmRWRnZXNbaUhhbGZFZGdlXS5lbmQoKSwgeDMgPSBlbmQueCwgeTMgPSBlbmQueTtcbiAgICAgICAgc3RhcnQgPSBoYWxmRWRnZXNbKytpSGFsZkVkZ2UgJSBuSGFsZkVkZ2VzXS5zdGFydCgpLCB4MiA9IHN0YXJ0LngsIHkyID0gc3RhcnQueTtcbiAgICAgICAgaWYgKGFicyh4MyAtIHgyKSA+IM61IHx8IGFicyh5MyAtIHkyKSA+IM61KSB7XG4gICAgICAgICAgaGFsZkVkZ2VzLnNwbGljZShpSGFsZkVkZ2UsIDAsIG5ldyBkM19nZW9tX3Zvcm9ub2lIYWxmRWRnZShkM19nZW9tX3Zvcm9ub2lDcmVhdGVCb3JkZXJFZGdlKGNlbGwuc2l0ZSwgZW5kLCBhYnMoeDMgLSB4MCkgPCDOtSAmJiB5MSAtIHkzID4gzrUgPyB7XG4gICAgICAgICAgICB4OiB4MCxcbiAgICAgICAgICAgIHk6IGFicyh4MiAtIHgwKSA8IM61ID8geTIgOiB5MVxuICAgICAgICAgIH0gOiBhYnMoeTMgLSB5MSkgPCDOtSAmJiB4MSAtIHgzID4gzrUgPyB7XG4gICAgICAgICAgICB4OiBhYnMoeTIgLSB5MSkgPCDOtSA/IHgyIDogeDEsXG4gICAgICAgICAgICB5OiB5MVxuICAgICAgICAgIH0gOiBhYnMoeDMgLSB4MSkgPCDOtSAmJiB5MyAtIHkwID4gzrUgPyB7XG4gICAgICAgICAgICB4OiB4MSxcbiAgICAgICAgICAgIHk6IGFicyh4MiAtIHgxKSA8IM61ID8geTIgOiB5MFxuICAgICAgICAgIH0gOiBhYnMoeTMgLSB5MCkgPCDOtSAmJiB4MyAtIHgwID4gzrUgPyB7XG4gICAgICAgICAgICB4OiBhYnMoeTIgLSB5MCkgPCDOtSA/IHgyIDogeDAsXG4gICAgICAgICAgICB5OiB5MFxuICAgICAgICAgIH0gOiBudWxsKSwgY2VsbC5zaXRlLCBudWxsKSk7XG4gICAgICAgICAgKytuSGFsZkVkZ2VzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb21fdm9yb25vaUhhbGZFZGdlT3JkZXIoYSwgYikge1xuICAgIHJldHVybiBiLmFuZ2xlIC0gYS5hbmdsZTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9tX3Zvcm9ub2lDaXJjbGUoKSB7XG4gICAgZDNfZ2VvbV92b3Jvbm9pUmVkQmxhY2tOb2RlKHRoaXMpO1xuICAgIHRoaXMueCA9IHRoaXMueSA9IHRoaXMuYXJjID0gdGhpcy5zaXRlID0gdGhpcy5jeSA9IG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvbV92b3Jvbm9pQXR0YWNoQ2lyY2xlKGFyYykge1xuICAgIHZhciBsQXJjID0gYXJjLlAsIHJBcmMgPSBhcmMuTjtcbiAgICBpZiAoIWxBcmMgfHwgIXJBcmMpIHJldHVybjtcbiAgICB2YXIgbFNpdGUgPSBsQXJjLnNpdGUsIGNTaXRlID0gYXJjLnNpdGUsIHJTaXRlID0gckFyYy5zaXRlO1xuICAgIGlmIChsU2l0ZSA9PT0gclNpdGUpIHJldHVybjtcbiAgICB2YXIgYnggPSBjU2l0ZS54LCBieSA9IGNTaXRlLnksIGF4ID0gbFNpdGUueCAtIGJ4LCBheSA9IGxTaXRlLnkgLSBieSwgY3ggPSByU2l0ZS54IC0gYngsIGN5ID0gclNpdGUueSAtIGJ5O1xuICAgIHZhciBkID0gMiAqIChheCAqIGN5IC0gYXkgKiBjeCk7XG4gICAgaWYgKGQgPj0gLc61MikgcmV0dXJuO1xuICAgIHZhciBoYSA9IGF4ICogYXggKyBheSAqIGF5LCBoYyA9IGN4ICogY3ggKyBjeSAqIGN5LCB4ID0gKGN5ICogaGEgLSBheSAqIGhjKSAvIGQsIHkgPSAoYXggKiBoYyAtIGN4ICogaGEpIC8gZCwgY3kgPSB5ICsgYnk7XG4gICAgdmFyIGNpcmNsZSA9IGQzX2dlb21fdm9yb25vaUNpcmNsZVBvb2wucG9wKCkgfHwgbmV3IGQzX2dlb21fdm9yb25vaUNpcmNsZSgpO1xuICAgIGNpcmNsZS5hcmMgPSBhcmM7XG4gICAgY2lyY2xlLnNpdGUgPSBjU2l0ZTtcbiAgICBjaXJjbGUueCA9IHggKyBieDtcbiAgICBjaXJjbGUueSA9IGN5ICsgTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIGNpcmNsZS5jeSA9IGN5O1xuICAgIGFyYy5jaXJjbGUgPSBjaXJjbGU7XG4gICAgdmFyIGJlZm9yZSA9IG51bGwsIG5vZGUgPSBkM19nZW9tX3Zvcm9ub2lDaXJjbGVzLl87XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIGlmIChjaXJjbGUueSA8IG5vZGUueSB8fCBjaXJjbGUueSA9PT0gbm9kZS55ICYmIGNpcmNsZS54IDw9IG5vZGUueCkge1xuICAgICAgICBpZiAobm9kZS5MKSBub2RlID0gbm9kZS5MOyBlbHNlIHtcbiAgICAgICAgICBiZWZvcmUgPSBub2RlLlA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChub2RlLlIpIG5vZGUgPSBub2RlLlI7IGVsc2Uge1xuICAgICAgICAgIGJlZm9yZSA9IG5vZGU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZDNfZ2VvbV92b3Jvbm9pQ2lyY2xlcy5pbnNlcnQoYmVmb3JlLCBjaXJjbGUpO1xuICAgIGlmICghYmVmb3JlKSBkM19nZW9tX3Zvcm9ub2lGaXJzdENpcmNsZSA9IGNpcmNsZTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9tX3Zvcm9ub2lEZXRhY2hDaXJjbGUoYXJjKSB7XG4gICAgdmFyIGNpcmNsZSA9IGFyYy5jaXJjbGU7XG4gICAgaWYgKGNpcmNsZSkge1xuICAgICAgaWYgKCFjaXJjbGUuUCkgZDNfZ2VvbV92b3Jvbm9pRmlyc3RDaXJjbGUgPSBjaXJjbGUuTjtcbiAgICAgIGQzX2dlb21fdm9yb25vaUNpcmNsZXMucmVtb3ZlKGNpcmNsZSk7XG4gICAgICBkM19nZW9tX3Zvcm9ub2lDaXJjbGVQb29sLnB1c2goY2lyY2xlKTtcbiAgICAgIGQzX2dlb21fdm9yb25vaVJlZEJsYWNrTm9kZShjaXJjbGUpO1xuICAgICAgYXJjLmNpcmNsZSA9IG51bGw7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb21fdm9yb25vaUNsaXBFZGdlcyhleHRlbnQpIHtcbiAgICB2YXIgZWRnZXMgPSBkM19nZW9tX3Zvcm9ub2lFZGdlcywgY2xpcCA9IGQzX2dlb21fY2xpcExpbmUoZXh0ZW50WzBdWzBdLCBleHRlbnRbMF1bMV0sIGV4dGVudFsxXVswXSwgZXh0ZW50WzFdWzFdKSwgaSA9IGVkZ2VzLmxlbmd0aCwgZTtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBlID0gZWRnZXNbaV07XG4gICAgICBpZiAoIWQzX2dlb21fdm9yb25vaUNvbm5lY3RFZGdlKGUsIGV4dGVudCkgfHwgIWNsaXAoZSkgfHwgYWJzKGUuYS54IC0gZS5iLngpIDwgzrUgJiYgYWJzKGUuYS55IC0gZS5iLnkpIDwgzrUpIHtcbiAgICAgICAgZS5hID0gZS5iID0gbnVsbDtcbiAgICAgICAgZWRnZXMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkM19nZW9tX3Zvcm9ub2lDb25uZWN0RWRnZShlZGdlLCBleHRlbnQpIHtcbiAgICB2YXIgdmIgPSBlZGdlLmI7XG4gICAgaWYgKHZiKSByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgdmEgPSBlZGdlLmEsIHgwID0gZXh0ZW50WzBdWzBdLCB4MSA9IGV4dGVudFsxXVswXSwgeTAgPSBleHRlbnRbMF1bMV0sIHkxID0gZXh0ZW50WzFdWzFdLCBsU2l0ZSA9IGVkZ2UubCwgclNpdGUgPSBlZGdlLnIsIGx4ID0gbFNpdGUueCwgbHkgPSBsU2l0ZS55LCByeCA9IHJTaXRlLngsIHJ5ID0gclNpdGUueSwgZnggPSAobHggKyByeCkgLyAyLCBmeSA9IChseSArIHJ5KSAvIDIsIGZtLCBmYjtcbiAgICBpZiAocnkgPT09IGx5KSB7XG4gICAgICBpZiAoZnggPCB4MCB8fCBmeCA+PSB4MSkgcmV0dXJuO1xuICAgICAgaWYgKGx4ID4gcngpIHtcbiAgICAgICAgaWYgKCF2YSkgdmEgPSB7XG4gICAgICAgICAgeDogZngsXG4gICAgICAgICAgeTogeTBcbiAgICAgICAgfTsgZWxzZSBpZiAodmEueSA+PSB5MSkgcmV0dXJuO1xuICAgICAgICB2YiA9IHtcbiAgICAgICAgICB4OiBmeCxcbiAgICAgICAgICB5OiB5MVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCF2YSkgdmEgPSB7XG4gICAgICAgICAgeDogZngsXG4gICAgICAgICAgeTogeTFcbiAgICAgICAgfTsgZWxzZSBpZiAodmEueSA8IHkwKSByZXR1cm47XG4gICAgICAgIHZiID0ge1xuICAgICAgICAgIHg6IGZ4LFxuICAgICAgICAgIHk6IHkwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZtID0gKGx4IC0gcngpIC8gKHJ5IC0gbHkpO1xuICAgICAgZmIgPSBmeSAtIGZtICogZng7XG4gICAgICBpZiAoZm0gPCAtMSB8fCBmbSA+IDEpIHtcbiAgICAgICAgaWYgKGx4ID4gcngpIHtcbiAgICAgICAgICBpZiAoIXZhKSB2YSA9IHtcbiAgICAgICAgICAgIHg6ICh5MCAtIGZiKSAvIGZtLFxuICAgICAgICAgICAgeTogeTBcbiAgICAgICAgICB9OyBlbHNlIGlmICh2YS55ID49IHkxKSByZXR1cm47XG4gICAgICAgICAgdmIgPSB7XG4gICAgICAgICAgICB4OiAoeTEgLSBmYikgLyBmbSxcbiAgICAgICAgICAgIHk6IHkxXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIXZhKSB2YSA9IHtcbiAgICAgICAgICAgIHg6ICh5MSAtIGZiKSAvIGZtLFxuICAgICAgICAgICAgeTogeTFcbiAgICAgICAgICB9OyBlbHNlIGlmICh2YS55IDwgeTApIHJldHVybjtcbiAgICAgICAgICB2YiA9IHtcbiAgICAgICAgICAgIHg6ICh5MCAtIGZiKSAvIGZtLFxuICAgICAgICAgICAgeTogeTBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobHkgPCByeSkge1xuICAgICAgICAgIGlmICghdmEpIHZhID0ge1xuICAgICAgICAgICAgeDogeDAsXG4gICAgICAgICAgICB5OiBmbSAqIHgwICsgZmJcbiAgICAgICAgICB9OyBlbHNlIGlmICh2YS54ID49IHgxKSByZXR1cm47XG4gICAgICAgICAgdmIgPSB7XG4gICAgICAgICAgICB4OiB4MSxcbiAgICAgICAgICAgIHk6IGZtICogeDEgKyBmYlxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCF2YSkgdmEgPSB7XG4gICAgICAgICAgICB4OiB4MSxcbiAgICAgICAgICAgIHk6IGZtICogeDEgKyBmYlxuICAgICAgICAgIH07IGVsc2UgaWYgKHZhLnggPCB4MCkgcmV0dXJuO1xuICAgICAgICAgIHZiID0ge1xuICAgICAgICAgICAgeDogeDAsXG4gICAgICAgICAgICB5OiBmbSAqIHgwICsgZmJcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVkZ2UuYSA9IHZhO1xuICAgIGVkZ2UuYiA9IHZiO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb21fdm9yb25vaUVkZ2UobFNpdGUsIHJTaXRlKSB7XG4gICAgdGhpcy5sID0gbFNpdGU7XG4gICAgdGhpcy5yID0gclNpdGU7XG4gICAgdGhpcy5hID0gdGhpcy5iID0gbnVsbDtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9tX3Zvcm9ub2lDcmVhdGVFZGdlKGxTaXRlLCByU2l0ZSwgdmEsIHZiKSB7XG4gICAgdmFyIGVkZ2UgPSBuZXcgZDNfZ2VvbV92b3Jvbm9pRWRnZShsU2l0ZSwgclNpdGUpO1xuICAgIGQzX2dlb21fdm9yb25vaUVkZ2VzLnB1c2goZWRnZSk7XG4gICAgaWYgKHZhKSBkM19nZW9tX3Zvcm9ub2lTZXRFZGdlRW5kKGVkZ2UsIGxTaXRlLCByU2l0ZSwgdmEpO1xuICAgIGlmICh2YikgZDNfZ2VvbV92b3Jvbm9pU2V0RWRnZUVuZChlZGdlLCByU2l0ZSwgbFNpdGUsIHZiKTtcbiAgICBkM19nZW9tX3Zvcm9ub2lDZWxsc1tsU2l0ZS5pXS5lZGdlcy5wdXNoKG5ldyBkM19nZW9tX3Zvcm9ub2lIYWxmRWRnZShlZGdlLCBsU2l0ZSwgclNpdGUpKTtcbiAgICBkM19nZW9tX3Zvcm9ub2lDZWxsc1tyU2l0ZS5pXS5lZGdlcy5wdXNoKG5ldyBkM19nZW9tX3Zvcm9ub2lIYWxmRWRnZShlZGdlLCByU2l0ZSwgbFNpdGUpKTtcbiAgICByZXR1cm4gZWRnZTtcbiAgfVxuICBmdW5jdGlvbiBkM19nZW9tX3Zvcm9ub2lDcmVhdGVCb3JkZXJFZGdlKGxTaXRlLCB2YSwgdmIpIHtcbiAgICB2YXIgZWRnZSA9IG5ldyBkM19nZW9tX3Zvcm9ub2lFZGdlKGxTaXRlLCBudWxsKTtcbiAgICBlZGdlLmEgPSB2YTtcbiAgICBlZGdlLmIgPSB2YjtcbiAgICBkM19nZW9tX3Zvcm9ub2lFZGdlcy5wdXNoKGVkZ2UpO1xuICAgIHJldHVybiBlZGdlO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb21fdm9yb25vaVNldEVkZ2VFbmQoZWRnZSwgbFNpdGUsIHJTaXRlLCB2ZXJ0ZXgpIHtcbiAgICBpZiAoIWVkZ2UuYSAmJiAhZWRnZS5iKSB7XG4gICAgICBlZGdlLmEgPSB2ZXJ0ZXg7XG4gICAgICBlZGdlLmwgPSBsU2l0ZTtcbiAgICAgIGVkZ2UuciA9IHJTaXRlO1xuICAgIH0gZWxzZSBpZiAoZWRnZS5sID09PSByU2l0ZSkge1xuICAgICAgZWRnZS5iID0gdmVydGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBlZGdlLmEgPSB2ZXJ0ZXg7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb21fdm9yb25vaUhhbGZFZGdlKGVkZ2UsIGxTaXRlLCByU2l0ZSkge1xuICAgIHZhciB2YSA9IGVkZ2UuYSwgdmIgPSBlZGdlLmI7XG4gICAgdGhpcy5lZGdlID0gZWRnZTtcbiAgICB0aGlzLnNpdGUgPSBsU2l0ZTtcbiAgICB0aGlzLmFuZ2xlID0gclNpdGUgPyBNYXRoLmF0YW4yKHJTaXRlLnkgLSBsU2l0ZS55LCByU2l0ZS54IC0gbFNpdGUueCkgOiBlZGdlLmwgPT09IGxTaXRlID8gTWF0aC5hdGFuMih2Yi54IC0gdmEueCwgdmEueSAtIHZiLnkpIDogTWF0aC5hdGFuMih2YS54IC0gdmIueCwgdmIueSAtIHZhLnkpO1xuICB9XG4gIGQzX2dlb21fdm9yb25vaUhhbGZFZGdlLnByb3RvdHlwZSA9IHtcbiAgICBzdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5lZGdlLmwgPT09IHRoaXMuc2l0ZSA/IHRoaXMuZWRnZS5hIDogdGhpcy5lZGdlLmI7XG4gICAgfSxcbiAgICBlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWRnZS5sID09PSB0aGlzLnNpdGUgPyB0aGlzLmVkZ2UuYiA6IHRoaXMuZWRnZS5hO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gZDNfZ2VvbV92b3Jvbm9pUmVkQmxhY2tUcmVlKCkge1xuICAgIHRoaXMuXyA9IG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvbV92b3Jvbm9pUmVkQmxhY2tOb2RlKG5vZGUpIHtcbiAgICBub2RlLlUgPSBub2RlLkMgPSBub2RlLkwgPSBub2RlLlIgPSBub2RlLlAgPSBub2RlLk4gPSBudWxsO1xuICB9XG4gIGQzX2dlb21fdm9yb25vaVJlZEJsYWNrVHJlZS5wcm90b3R5cGUgPSB7XG4gICAgaW5zZXJ0OiBmdW5jdGlvbihhZnRlciwgbm9kZSkge1xuICAgICAgdmFyIHBhcmVudCwgZ3JhbmRwYSwgdW5jbGU7XG4gICAgICBpZiAoYWZ0ZXIpIHtcbiAgICAgICAgbm9kZS5QID0gYWZ0ZXI7XG4gICAgICAgIG5vZGUuTiA9IGFmdGVyLk47XG4gICAgICAgIGlmIChhZnRlci5OKSBhZnRlci5OLlAgPSBub2RlO1xuICAgICAgICBhZnRlci5OID0gbm9kZTtcbiAgICAgICAgaWYgKGFmdGVyLlIpIHtcbiAgICAgICAgICBhZnRlciA9IGFmdGVyLlI7XG4gICAgICAgICAgd2hpbGUgKGFmdGVyLkwpIGFmdGVyID0gYWZ0ZXIuTDtcbiAgICAgICAgICBhZnRlci5MID0gbm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZnRlci5SID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQgPSBhZnRlcjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fKSB7XG4gICAgICAgIGFmdGVyID0gZDNfZ2VvbV92b3Jvbm9pUmVkQmxhY2tGaXJzdCh0aGlzLl8pO1xuICAgICAgICBub2RlLlAgPSBudWxsO1xuICAgICAgICBub2RlLk4gPSBhZnRlcjtcbiAgICAgICAgYWZ0ZXIuUCA9IGFmdGVyLkwgPSBub2RlO1xuICAgICAgICBwYXJlbnQgPSBhZnRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuUCA9IG5vZGUuTiA9IG51bGw7XG4gICAgICAgIHRoaXMuXyA9IG5vZGU7XG4gICAgICAgIHBhcmVudCA9IG51bGw7XG4gICAgICB9XG4gICAgICBub2RlLkwgPSBub2RlLlIgPSBudWxsO1xuICAgICAgbm9kZS5VID0gcGFyZW50O1xuICAgICAgbm9kZS5DID0gdHJ1ZTtcbiAgICAgIGFmdGVyID0gbm9kZTtcbiAgICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50LkMpIHtcbiAgICAgICAgZ3JhbmRwYSA9IHBhcmVudC5VO1xuICAgICAgICBpZiAocGFyZW50ID09PSBncmFuZHBhLkwpIHtcbiAgICAgICAgICB1bmNsZSA9IGdyYW5kcGEuUjtcbiAgICAgICAgICBpZiAodW5jbGUgJiYgdW5jbGUuQykge1xuICAgICAgICAgICAgcGFyZW50LkMgPSB1bmNsZS5DID0gZmFsc2U7XG4gICAgICAgICAgICBncmFuZHBhLkMgPSB0cnVlO1xuICAgICAgICAgICAgYWZ0ZXIgPSBncmFuZHBhO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYWZ0ZXIgPT09IHBhcmVudC5SKSB7XG4gICAgICAgICAgICAgIGQzX2dlb21fdm9yb25vaVJlZEJsYWNrUm90YXRlTGVmdCh0aGlzLCBwYXJlbnQpO1xuICAgICAgICAgICAgICBhZnRlciA9IHBhcmVudDtcbiAgICAgICAgICAgICAgcGFyZW50ID0gYWZ0ZXIuVTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudC5DID0gZmFsc2U7XG4gICAgICAgICAgICBncmFuZHBhLkMgPSB0cnVlO1xuICAgICAgICAgICAgZDNfZ2VvbV92b3Jvbm9pUmVkQmxhY2tSb3RhdGVSaWdodCh0aGlzLCBncmFuZHBhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5jbGUgPSBncmFuZHBhLkw7XG4gICAgICAgICAgaWYgKHVuY2xlICYmIHVuY2xlLkMpIHtcbiAgICAgICAgICAgIHBhcmVudC5DID0gdW5jbGUuQyA9IGZhbHNlO1xuICAgICAgICAgICAgZ3JhbmRwYS5DID0gdHJ1ZTtcbiAgICAgICAgICAgIGFmdGVyID0gZ3JhbmRwYTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFmdGVyID09PSBwYXJlbnQuTCkge1xuICAgICAgICAgICAgICBkM19nZW9tX3Zvcm9ub2lSZWRCbGFja1JvdGF0ZVJpZ2h0KHRoaXMsIHBhcmVudCk7XG4gICAgICAgICAgICAgIGFmdGVyID0gcGFyZW50O1xuICAgICAgICAgICAgICBwYXJlbnQgPSBhZnRlci5VO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyZW50LkMgPSBmYWxzZTtcbiAgICAgICAgICAgIGdyYW5kcGEuQyA9IHRydWU7XG4gICAgICAgICAgICBkM19nZW9tX3Zvcm9ub2lSZWRCbGFja1JvdGF0ZUxlZnQodGhpcywgZ3JhbmRwYSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhcmVudCA9IGFmdGVyLlU7XG4gICAgICB9XG4gICAgICB0aGlzLl8uQyA9IGZhbHNlO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICBpZiAobm9kZS5OKSBub2RlLk4uUCA9IG5vZGUuUDtcbiAgICAgIGlmIChub2RlLlApIG5vZGUuUC5OID0gbm9kZS5OO1xuICAgICAgbm9kZS5OID0gbm9kZS5QID0gbnVsbDtcbiAgICAgIHZhciBwYXJlbnQgPSBub2RlLlUsIHNpYmxpbmcsIGxlZnQgPSBub2RlLkwsIHJpZ2h0ID0gbm9kZS5SLCBuZXh0LCByZWQ7XG4gICAgICBpZiAoIWxlZnQpIG5leHQgPSByaWdodDsgZWxzZSBpZiAoIXJpZ2h0KSBuZXh0ID0gbGVmdDsgZWxzZSBuZXh0ID0gZDNfZ2VvbV92b3Jvbm9pUmVkQmxhY2tGaXJzdChyaWdodCk7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQuTCA9PT0gbm9kZSkgcGFyZW50LkwgPSBuZXh0OyBlbHNlIHBhcmVudC5SID0gbmV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuXyA9IG5leHQ7XG4gICAgICB9XG4gICAgICBpZiAobGVmdCAmJiByaWdodCkge1xuICAgICAgICByZWQgPSBuZXh0LkM7XG4gICAgICAgIG5leHQuQyA9IG5vZGUuQztcbiAgICAgICAgbmV4dC5MID0gbGVmdDtcbiAgICAgICAgbGVmdC5VID0gbmV4dDtcbiAgICAgICAgaWYgKG5leHQgIT09IHJpZ2h0KSB7XG4gICAgICAgICAgcGFyZW50ID0gbmV4dC5VO1xuICAgICAgICAgIG5leHQuVSA9IG5vZGUuVTtcbiAgICAgICAgICBub2RlID0gbmV4dC5SO1xuICAgICAgICAgIHBhcmVudC5MID0gbm9kZTtcbiAgICAgICAgICBuZXh0LlIgPSByaWdodDtcbiAgICAgICAgICByaWdodC5VID0gbmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0LlUgPSBwYXJlbnQ7XG4gICAgICAgICAgcGFyZW50ID0gbmV4dDtcbiAgICAgICAgICBub2RlID0gbmV4dC5SO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWQgPSBub2RlLkM7XG4gICAgICAgIG5vZGUgPSBuZXh0O1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUpIG5vZGUuVSA9IHBhcmVudDtcbiAgICAgIGlmIChyZWQpIHJldHVybjtcbiAgICAgIGlmIChub2RlICYmIG5vZGUuQykge1xuICAgICAgICBub2RlLkMgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZG8ge1xuICAgICAgICBpZiAobm9kZSA9PT0gdGhpcy5fKSBicmVhaztcbiAgICAgICAgaWYgKG5vZGUgPT09IHBhcmVudC5MKSB7XG4gICAgICAgICAgc2libGluZyA9IHBhcmVudC5SO1xuICAgICAgICAgIGlmIChzaWJsaW5nLkMpIHtcbiAgICAgICAgICAgIHNpYmxpbmcuQyA9IGZhbHNlO1xuICAgICAgICAgICAgcGFyZW50LkMgPSB0cnVlO1xuICAgICAgICAgICAgZDNfZ2VvbV92b3Jvbm9pUmVkQmxhY2tSb3RhdGVMZWZ0KHRoaXMsIHBhcmVudCk7XG4gICAgICAgICAgICBzaWJsaW5nID0gcGFyZW50LlI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzaWJsaW5nLkwgJiYgc2libGluZy5MLkMgfHwgc2libGluZy5SICYmIHNpYmxpbmcuUi5DKSB7XG4gICAgICAgICAgICBpZiAoIXNpYmxpbmcuUiB8fCAhc2libGluZy5SLkMpIHtcbiAgICAgICAgICAgICAgc2libGluZy5MLkMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgc2libGluZy5DID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZDNfZ2VvbV92b3Jvbm9pUmVkQmxhY2tSb3RhdGVSaWdodCh0aGlzLCBzaWJsaW5nKTtcbiAgICAgICAgICAgICAgc2libGluZyA9IHBhcmVudC5SO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2libGluZy5DID0gcGFyZW50LkM7XG4gICAgICAgICAgICBwYXJlbnQuQyA9IHNpYmxpbmcuUi5DID0gZmFsc2U7XG4gICAgICAgICAgICBkM19nZW9tX3Zvcm9ub2lSZWRCbGFja1JvdGF0ZUxlZnQodGhpcywgcGFyZW50KTtcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLl87XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2libGluZyA9IHBhcmVudC5MO1xuICAgICAgICAgIGlmIChzaWJsaW5nLkMpIHtcbiAgICAgICAgICAgIHNpYmxpbmcuQyA9IGZhbHNlO1xuICAgICAgICAgICAgcGFyZW50LkMgPSB0cnVlO1xuICAgICAgICAgICAgZDNfZ2VvbV92b3Jvbm9pUmVkQmxhY2tSb3RhdGVSaWdodCh0aGlzLCBwYXJlbnQpO1xuICAgICAgICAgICAgc2libGluZyA9IHBhcmVudC5MO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2libGluZy5MICYmIHNpYmxpbmcuTC5DIHx8IHNpYmxpbmcuUiAmJiBzaWJsaW5nLlIuQykge1xuICAgICAgICAgICAgaWYgKCFzaWJsaW5nLkwgfHwgIXNpYmxpbmcuTC5DKSB7XG4gICAgICAgICAgICAgIHNpYmxpbmcuUi5DID0gZmFsc2U7XG4gICAgICAgICAgICAgIHNpYmxpbmcuQyA9IHRydWU7XG4gICAgICAgICAgICAgIGQzX2dlb21fdm9yb25vaVJlZEJsYWNrUm90YXRlTGVmdCh0aGlzLCBzaWJsaW5nKTtcbiAgICAgICAgICAgICAgc2libGluZyA9IHBhcmVudC5MO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2libGluZy5DID0gcGFyZW50LkM7XG4gICAgICAgICAgICBwYXJlbnQuQyA9IHNpYmxpbmcuTC5DID0gZmFsc2U7XG4gICAgICAgICAgICBkM19nZW9tX3Zvcm9ub2lSZWRCbGFja1JvdGF0ZVJpZ2h0KHRoaXMsIHBhcmVudCk7XG4gICAgICAgICAgICBub2RlID0gdGhpcy5fO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNpYmxpbmcuQyA9IHRydWU7XG4gICAgICAgIG5vZGUgPSBwYXJlbnQ7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5VO1xuICAgICAgfSB3aGlsZSAoIW5vZGUuQyk7XG4gICAgICBpZiAobm9kZSkgbm9kZS5DID0gZmFsc2U7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBkM19nZW9tX3Zvcm9ub2lSZWRCbGFja1JvdGF0ZUxlZnQodHJlZSwgbm9kZSkge1xuICAgIHZhciBwID0gbm9kZSwgcSA9IG5vZGUuUiwgcGFyZW50ID0gcC5VO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGlmIChwYXJlbnQuTCA9PT0gcCkgcGFyZW50LkwgPSBxOyBlbHNlIHBhcmVudC5SID0gcTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJlZS5fID0gcTtcbiAgICB9XG4gICAgcS5VID0gcGFyZW50O1xuICAgIHAuVSA9IHE7XG4gICAgcC5SID0gcS5MO1xuICAgIGlmIChwLlIpIHAuUi5VID0gcDtcbiAgICBxLkwgPSBwO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb21fdm9yb25vaVJlZEJsYWNrUm90YXRlUmlnaHQodHJlZSwgbm9kZSkge1xuICAgIHZhciBwID0gbm9kZSwgcSA9IG5vZGUuTCwgcGFyZW50ID0gcC5VO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGlmIChwYXJlbnQuTCA9PT0gcCkgcGFyZW50LkwgPSBxOyBlbHNlIHBhcmVudC5SID0gcTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJlZS5fID0gcTtcbiAgICB9XG4gICAgcS5VID0gcGFyZW50O1xuICAgIHAuVSA9IHE7XG4gICAgcC5MID0gcS5SO1xuICAgIGlmIChwLkwpIHAuTC5VID0gcDtcbiAgICBxLlIgPSBwO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb21fdm9yb25vaVJlZEJsYWNrRmlyc3Qobm9kZSkge1xuICAgIHdoaWxlIChub2RlLkwpIG5vZGUgPSBub2RlLkw7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvbV92b3Jvbm9pKHNpdGVzLCBiYm94KSB7XG4gICAgdmFyIHNpdGUgPSBzaXRlcy5zb3J0KGQzX2dlb21fdm9yb25vaVZlcnRleE9yZGVyKS5wb3AoKSwgeDAsIHkwLCBjaXJjbGU7XG4gICAgZDNfZ2VvbV92b3Jvbm9pRWRnZXMgPSBbXTtcbiAgICBkM19nZW9tX3Zvcm9ub2lDZWxscyA9IG5ldyBBcnJheShzaXRlcy5sZW5ndGgpO1xuICAgIGQzX2dlb21fdm9yb25vaUJlYWNoZXMgPSBuZXcgZDNfZ2VvbV92b3Jvbm9pUmVkQmxhY2tUcmVlKCk7XG4gICAgZDNfZ2VvbV92b3Jvbm9pQ2lyY2xlcyA9IG5ldyBkM19nZW9tX3Zvcm9ub2lSZWRCbGFja1RyZWUoKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY2lyY2xlID0gZDNfZ2VvbV92b3Jvbm9pRmlyc3RDaXJjbGU7XG4gICAgICBpZiAoc2l0ZSAmJiAoIWNpcmNsZSB8fCBzaXRlLnkgPCBjaXJjbGUueSB8fCBzaXRlLnkgPT09IGNpcmNsZS55ICYmIHNpdGUueCA8IGNpcmNsZS54KSkge1xuICAgICAgICBpZiAoc2l0ZS54ICE9PSB4MCB8fCBzaXRlLnkgIT09IHkwKSB7XG4gICAgICAgICAgZDNfZ2VvbV92b3Jvbm9pQ2VsbHNbc2l0ZS5pXSA9IG5ldyBkM19nZW9tX3Zvcm9ub2lDZWxsKHNpdGUpO1xuICAgICAgICAgIGQzX2dlb21fdm9yb25vaUFkZEJlYWNoKHNpdGUpO1xuICAgICAgICAgIHgwID0gc2l0ZS54LCB5MCA9IHNpdGUueTtcbiAgICAgICAgfVxuICAgICAgICBzaXRlID0gc2l0ZXMucG9wKCk7XG4gICAgICB9IGVsc2UgaWYgKGNpcmNsZSkge1xuICAgICAgICBkM19nZW9tX3Zvcm9ub2lSZW1vdmVCZWFjaChjaXJjbGUuYXJjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYmJveCkgZDNfZ2VvbV92b3Jvbm9pQ2xpcEVkZ2VzKGJib3gpLCBkM19nZW9tX3Zvcm9ub2lDbG9zZUNlbGxzKGJib3gpO1xuICAgIHZhciBkaWFncmFtID0ge1xuICAgICAgY2VsbHM6IGQzX2dlb21fdm9yb25vaUNlbGxzLFxuICAgICAgZWRnZXM6IGQzX2dlb21fdm9yb25vaUVkZ2VzXG4gICAgfTtcbiAgICBkM19nZW9tX3Zvcm9ub2lCZWFjaGVzID0gZDNfZ2VvbV92b3Jvbm9pQ2lyY2xlcyA9IGQzX2dlb21fdm9yb25vaUVkZ2VzID0gZDNfZ2VvbV92b3Jvbm9pQ2VsbHMgPSBudWxsO1xuICAgIHJldHVybiBkaWFncmFtO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb21fdm9yb25vaVZlcnRleE9yZGVyKGEsIGIpIHtcbiAgICByZXR1cm4gYi55IC0gYS55IHx8IGIueCAtIGEueDtcbiAgfVxuICBkMy5nZW9tLnZvcm9ub2kgPSBmdW5jdGlvbihwb2ludHMpIHtcbiAgICB2YXIgeCA9IGQzX2dlb21fcG9pbnRYLCB5ID0gZDNfZ2VvbV9wb2ludFksIGZ4ID0geCwgZnkgPSB5LCBjbGlwRXh0ZW50ID0gZDNfZ2VvbV92b3Jvbm9pQ2xpcEV4dGVudDtcbiAgICBpZiAocG9pbnRzKSByZXR1cm4gdm9yb25vaShwb2ludHMpO1xuICAgIGZ1bmN0aW9uIHZvcm9ub2koZGF0YSkge1xuICAgICAgdmFyIHBvbHlnb25zID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKSwgeDAgPSBjbGlwRXh0ZW50WzBdWzBdLCB5MCA9IGNsaXBFeHRlbnRbMF1bMV0sIHgxID0gY2xpcEV4dGVudFsxXVswXSwgeTEgPSBjbGlwRXh0ZW50WzFdWzFdO1xuICAgICAgZDNfZ2VvbV92b3Jvbm9pKHNpdGVzKGRhdGEpLCBjbGlwRXh0ZW50KS5jZWxscy5mb3JFYWNoKGZ1bmN0aW9uKGNlbGwsIGkpIHtcbiAgICAgICAgdmFyIGVkZ2VzID0gY2VsbC5lZGdlcywgc2l0ZSA9IGNlbGwuc2l0ZSwgcG9seWdvbiA9IHBvbHlnb25zW2ldID0gZWRnZXMubGVuZ3RoID8gZWRnZXMubWFwKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICB2YXIgcyA9IGUuc3RhcnQoKTtcbiAgICAgICAgICByZXR1cm4gWyBzLngsIHMueSBdO1xuICAgICAgICB9KSA6IHNpdGUueCA+PSB4MCAmJiBzaXRlLnggPD0geDEgJiYgc2l0ZS55ID49IHkwICYmIHNpdGUueSA8PSB5MSA/IFsgWyB4MCwgeTEgXSwgWyB4MSwgeTEgXSwgWyB4MSwgeTAgXSwgWyB4MCwgeTAgXSBdIDogW107XG4gICAgICAgIHBvbHlnb24ucG9pbnQgPSBkYXRhW2ldO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcG9seWdvbnM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNpdGVzKGRhdGEpIHtcbiAgICAgIHJldHVybiBkYXRhLm1hcChmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogTWF0aC5yb3VuZChmeChkLCBpKSAvIM61KSAqIM61LFxuICAgICAgICAgIHk6IE1hdGgucm91bmQoZnkoZCwgaSkgLyDOtSkgKiDOtSxcbiAgICAgICAgICBpOiBpXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gICAgdm9yb25vaS5saW5rcyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHJldHVybiBkM19nZW9tX3Zvcm9ub2koc2l0ZXMoZGF0YSkpLmVkZ2VzLmZpbHRlcihmdW5jdGlvbihlZGdlKSB7XG4gICAgICAgIHJldHVybiBlZGdlLmwgJiYgZWRnZS5yO1xuICAgICAgfSkubWFwKGZ1bmN0aW9uKGVkZ2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzb3VyY2U6IGRhdGFbZWRnZS5sLmldLFxuICAgICAgICAgIHRhcmdldDogZGF0YVtlZGdlLnIuaV1cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdm9yb25vaS50cmlhbmdsZXMgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB2YXIgdHJpYW5nbGVzID0gW107XG4gICAgICBkM19nZW9tX3Zvcm9ub2koc2l0ZXMoZGF0YSkpLmNlbGxzLmZvckVhY2goZnVuY3Rpb24oY2VsbCwgaSkge1xuICAgICAgICB2YXIgc2l0ZSA9IGNlbGwuc2l0ZSwgZWRnZXMgPSBjZWxsLmVkZ2VzLnNvcnQoZDNfZ2VvbV92b3Jvbm9pSGFsZkVkZ2VPcmRlciksIGogPSAtMSwgbSA9IGVkZ2VzLmxlbmd0aCwgZTAsIHMwLCBlMSA9IGVkZ2VzW20gLSAxXS5lZGdlLCBzMSA9IGUxLmwgPT09IHNpdGUgPyBlMS5yIDogZTEubDtcbiAgICAgICAgd2hpbGUgKCsraiA8IG0pIHtcbiAgICAgICAgICBlMCA9IGUxO1xuICAgICAgICAgIHMwID0gczE7XG4gICAgICAgICAgZTEgPSBlZGdlc1tqXS5lZGdlO1xuICAgICAgICAgIHMxID0gZTEubCA9PT0gc2l0ZSA/IGUxLnIgOiBlMS5sO1xuICAgICAgICAgIGlmIChpIDwgczAuaSAmJiBpIDwgczEuaSAmJiBkM19nZW9tX3Zvcm9ub2lUcmlhbmdsZUFyZWEoc2l0ZSwgczAsIHMxKSA8IDApIHtcbiAgICAgICAgICAgIHRyaWFuZ2xlcy5wdXNoKFsgZGF0YVtpXSwgZGF0YVtzMC5pXSwgZGF0YVtzMS5pXSBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRyaWFuZ2xlcztcbiAgICB9O1xuICAgIHZvcm9ub2kueCA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGZ4ID0gZDNfZnVuY3Rvcih4ID0gXyksIHZvcm9ub2kpIDogeDtcbiAgICB9O1xuICAgIHZvcm9ub2kueSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGZ5ID0gZDNfZnVuY3Rvcih5ID0gXyksIHZvcm9ub2kpIDogeTtcbiAgICB9O1xuICAgIHZvcm9ub2kuY2xpcEV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGNsaXBFeHRlbnQgPT09IGQzX2dlb21fdm9yb25vaUNsaXBFeHRlbnQgPyBudWxsIDogY2xpcEV4dGVudDtcbiAgICAgIGNsaXBFeHRlbnQgPSBfID09IG51bGwgPyBkM19nZW9tX3Zvcm9ub2lDbGlwRXh0ZW50IDogXztcbiAgICAgIHJldHVybiB2b3Jvbm9pO1xuICAgIH07XG4gICAgdm9yb25vaS5zaXplID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gY2xpcEV4dGVudCA9PT0gZDNfZ2VvbV92b3Jvbm9pQ2xpcEV4dGVudCA/IG51bGwgOiBjbGlwRXh0ZW50ICYmIGNsaXBFeHRlbnRbMV07XG4gICAgICByZXR1cm4gdm9yb25vaS5jbGlwRXh0ZW50KF8gJiYgWyBbIDAsIDAgXSwgXyBdKTtcbiAgICB9O1xuICAgIHJldHVybiB2b3Jvbm9pO1xuICB9O1xuICB2YXIgZDNfZ2VvbV92b3Jvbm9pQ2xpcEV4dGVudCA9IFsgWyAtMWU2LCAtMWU2IF0sIFsgMWU2LCAxZTYgXSBdO1xuICBmdW5jdGlvbiBkM19nZW9tX3Zvcm9ub2lUcmlhbmdsZUFyZWEoYSwgYiwgYykge1xuICAgIHJldHVybiAoYS54IC0gYy54KSAqIChiLnkgLSBhLnkpIC0gKGEueCAtIGIueCkgKiAoYy55IC0gYS55KTtcbiAgfVxuICBkMy5nZW9tLmRlbGF1bmF5ID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICByZXR1cm4gZDMuZ2VvbS52b3Jvbm9pKCkudHJpYW5nbGVzKHZlcnRpY2VzKTtcbiAgfTtcbiAgZDMuZ2VvbS5xdWFkdHJlZSA9IGZ1bmN0aW9uKHBvaW50cywgeDEsIHkxLCB4MiwgeTIpIHtcbiAgICB2YXIgeCA9IGQzX2dlb21fcG9pbnRYLCB5ID0gZDNfZ2VvbV9wb2ludFksIGNvbXBhdDtcbiAgICBpZiAoY29tcGF0ID0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgeCA9IGQzX2dlb21fcXVhZHRyZWVDb21wYXRYO1xuICAgICAgeSA9IGQzX2dlb21fcXVhZHRyZWVDb21wYXRZO1xuICAgICAgaWYgKGNvbXBhdCA9PT0gMykge1xuICAgICAgICB5MiA9IHkxO1xuICAgICAgICB4MiA9IHgxO1xuICAgICAgICB5MSA9IHgxID0gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBxdWFkdHJlZShwb2ludHMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBxdWFkdHJlZShkYXRhKSB7XG4gICAgICB2YXIgZCwgZnggPSBkM19mdW5jdG9yKHgpLCBmeSA9IGQzX2Z1bmN0b3IoeSksIHhzLCB5cywgaSwgbiwgeDFfLCB5MV8sIHgyXywgeTJfO1xuICAgICAgaWYgKHgxICE9IG51bGwpIHtcbiAgICAgICAgeDFfID0geDEsIHkxXyA9IHkxLCB4Ml8gPSB4MiwgeTJfID0geTI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4Ml8gPSB5Ml8gPSAtKHgxXyA9IHkxXyA9IEluZmluaXR5KTtcbiAgICAgICAgeHMgPSBbXSwgeXMgPSBbXTtcbiAgICAgICAgbiA9IGRhdGEubGVuZ3RoO1xuICAgICAgICBpZiAoY29tcGF0KSBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgZCA9IGRhdGFbaV07XG4gICAgICAgICAgaWYgKGQueCA8IHgxXykgeDFfID0gZC54O1xuICAgICAgICAgIGlmIChkLnkgPCB5MV8pIHkxXyA9IGQueTtcbiAgICAgICAgICBpZiAoZC54ID4geDJfKSB4Ml8gPSBkLng7XG4gICAgICAgICAgaWYgKGQueSA+IHkyXykgeTJfID0gZC55O1xuICAgICAgICAgIHhzLnB1c2goZC54KTtcbiAgICAgICAgICB5cy5wdXNoKGQueSk7XG4gICAgICAgIH0gZWxzZSBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgdmFyIHhfID0gK2Z4KGQgPSBkYXRhW2ldLCBpKSwgeV8gPSArZnkoZCwgaSk7XG4gICAgICAgICAgaWYgKHhfIDwgeDFfKSB4MV8gPSB4XztcbiAgICAgICAgICBpZiAoeV8gPCB5MV8pIHkxXyA9IHlfO1xuICAgICAgICAgIGlmICh4XyA+IHgyXykgeDJfID0geF87XG4gICAgICAgICAgaWYgKHlfID4geTJfKSB5Ml8gPSB5XztcbiAgICAgICAgICB4cy5wdXNoKHhfKTtcbiAgICAgICAgICB5cy5wdXNoKHlfKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGR4ID0geDJfIC0geDFfLCBkeSA9IHkyXyAtIHkxXztcbiAgICAgIGlmIChkeCA+IGR5KSB5Ml8gPSB5MV8gKyBkeDsgZWxzZSB4Ml8gPSB4MV8gKyBkeTtcbiAgICAgIGZ1bmN0aW9uIGluc2VydChuLCBkLCB4LCB5LCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICBpZiAoaXNOYU4oeCkgfHwgaXNOYU4oeSkpIHJldHVybjtcbiAgICAgICAgaWYgKG4ubGVhZikge1xuICAgICAgICAgIHZhciBueCA9IG4ueCwgbnkgPSBuLnk7XG4gICAgICAgICAgaWYgKG54ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChhYnMobnggLSB4KSArIGFicyhueSAtIHkpIDwgLjAxKSB7XG4gICAgICAgICAgICAgIGluc2VydENoaWxkKG4sIGQsIHgsIHksIHgxLCB5MSwgeDIsIHkyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBuUG9pbnQgPSBuLnBvaW50O1xuICAgICAgICAgICAgICBuLnggPSBuLnkgPSBuLnBvaW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgaW5zZXJ0Q2hpbGQobiwgblBvaW50LCBueCwgbnksIHgxLCB5MSwgeDIsIHkyKTtcbiAgICAgICAgICAgICAgaW5zZXJ0Q2hpbGQobiwgZCwgeCwgeSwgeDEsIHkxLCB4MiwgeTIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuLnggPSB4LCBuLnkgPSB5LCBuLnBvaW50ID0gZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5zZXJ0Q2hpbGQobiwgZCwgeCwgeSwgeDEsIHkxLCB4MiwgeTIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBpbnNlcnRDaGlsZChuLCBkLCB4LCB5LCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICB2YXIgeG0gPSAoeDEgKyB4MikgKiAuNSwgeW0gPSAoeTEgKyB5MikgKiAuNSwgcmlnaHQgPSB4ID49IHhtLCBiZWxvdyA9IHkgPj0geW0sIGkgPSBiZWxvdyA8PCAxIHwgcmlnaHQ7XG4gICAgICAgIG4ubGVhZiA9IGZhbHNlO1xuICAgICAgICBuID0gbi5ub2Rlc1tpXSB8fCAobi5ub2Rlc1tpXSA9IGQzX2dlb21fcXVhZHRyZWVOb2RlKCkpO1xuICAgICAgICBpZiAocmlnaHQpIHgxID0geG07IGVsc2UgeDIgPSB4bTtcbiAgICAgICAgaWYgKGJlbG93KSB5MSA9IHltOyBlbHNlIHkyID0geW07XG4gICAgICAgIGluc2VydChuLCBkLCB4LCB5LCB4MSwgeTEsIHgyLCB5Mik7XG4gICAgICB9XG4gICAgICB2YXIgcm9vdCA9IGQzX2dlb21fcXVhZHRyZWVOb2RlKCk7XG4gICAgICByb290LmFkZCA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgaW5zZXJ0KHJvb3QsIGQsICtmeChkLCArK2kpLCArZnkoZCwgaSksIHgxXywgeTFfLCB4Ml8sIHkyXyk7XG4gICAgICB9O1xuICAgICAgcm9vdC52aXNpdCA9IGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgZDNfZ2VvbV9xdWFkdHJlZVZpc2l0KGYsIHJvb3QsIHgxXywgeTFfLCB4Ml8sIHkyXyk7XG4gICAgICB9O1xuICAgICAgcm9vdC5maW5kID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIGQzX2dlb21fcXVhZHRyZWVGaW5kKHJvb3QsIHBvaW50WzBdLCBwb2ludFsxXSwgeDFfLCB5MV8sIHgyXywgeTJfKTtcbiAgICAgIH07XG4gICAgICBpID0gLTE7XG4gICAgICBpZiAoeDEgPT0gbnVsbCkge1xuICAgICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICAgIGluc2VydChyb290LCBkYXRhW2ldLCB4c1tpXSwgeXNbaV0sIHgxXywgeTFfLCB4Ml8sIHkyXyk7XG4gICAgICAgIH1cbiAgICAgICAgLS1pO1xuICAgICAgfSBlbHNlIGRhdGEuZm9yRWFjaChyb290LmFkZCk7XG4gICAgICB4cyA9IHlzID0gZGF0YSA9IGQgPSBudWxsO1xuICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuICAgIHF1YWR0cmVlLnggPSBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4ID0gXywgcXVhZHRyZWUpIDogeDtcbiAgICB9O1xuICAgIHF1YWR0cmVlLnkgPSBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh5ID0gXywgcXVhZHRyZWUpIDogeTtcbiAgICB9O1xuICAgIHF1YWR0cmVlLmV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHgxID09IG51bGwgPyBudWxsIDogWyBbIHgxLCB5MSBdLCBbIHgyLCB5MiBdIF07XG4gICAgICBpZiAoXyA9PSBudWxsKSB4MSA9IHkxID0geDIgPSB5MiA9IG51bGw7IGVsc2UgeDEgPSArX1swXVswXSwgeTEgPSArX1swXVsxXSwgeDIgPSArX1sxXVswXSwgXG4gICAgICB5MiA9ICtfWzFdWzFdO1xuICAgICAgcmV0dXJuIHF1YWR0cmVlO1xuICAgIH07XG4gICAgcXVhZHRyZWUuc2l6ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHgxID09IG51bGwgPyBudWxsIDogWyB4MiAtIHgxLCB5MiAtIHkxIF07XG4gICAgICBpZiAoXyA9PSBudWxsKSB4MSA9IHkxID0geDIgPSB5MiA9IG51bGw7IGVsc2UgeDEgPSB5MSA9IDAsIHgyID0gK19bMF0sIHkyID0gK19bMV07XG4gICAgICByZXR1cm4gcXVhZHRyZWU7XG4gICAgfTtcbiAgICByZXR1cm4gcXVhZHRyZWU7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2dlb21fcXVhZHRyZWVDb21wYXRYKGQpIHtcbiAgICByZXR1cm4gZC54O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb21fcXVhZHRyZWVDb21wYXRZKGQpIHtcbiAgICByZXR1cm4gZC55O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb21fcXVhZHRyZWVOb2RlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsZWFmOiB0cnVlLFxuICAgICAgbm9kZXM6IFtdLFxuICAgICAgcG9pbnQ6IG51bGwsXG4gICAgICB4OiBudWxsLFxuICAgICAgeTogbnVsbFxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZ2VvbV9xdWFkdHJlZVZpc2l0KGYsIG5vZGUsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgaWYgKCFmKG5vZGUsIHgxLCB5MSwgeDIsIHkyKSkge1xuICAgICAgdmFyIHN4ID0gKHgxICsgeDIpICogLjUsIHN5ID0gKHkxICsgeTIpICogLjUsIGNoaWxkcmVuID0gbm9kZS5ub2RlcztcbiAgICAgIGlmIChjaGlsZHJlblswXSkgZDNfZ2VvbV9xdWFkdHJlZVZpc2l0KGYsIGNoaWxkcmVuWzBdLCB4MSwgeTEsIHN4LCBzeSk7XG4gICAgICBpZiAoY2hpbGRyZW5bMV0pIGQzX2dlb21fcXVhZHRyZWVWaXNpdChmLCBjaGlsZHJlblsxXSwgc3gsIHkxLCB4Miwgc3kpO1xuICAgICAgaWYgKGNoaWxkcmVuWzJdKSBkM19nZW9tX3F1YWR0cmVlVmlzaXQoZiwgY2hpbGRyZW5bMl0sIHgxLCBzeSwgc3gsIHkyKTtcbiAgICAgIGlmIChjaGlsZHJlblszXSkgZDNfZ2VvbV9xdWFkdHJlZVZpc2l0KGYsIGNoaWxkcmVuWzNdLCBzeCwgc3ksIHgyLCB5Mik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGQzX2dlb21fcXVhZHRyZWVGaW5kKHJvb3QsIHgsIHksIHgwLCB5MCwgeDMsIHkzKSB7XG4gICAgdmFyIG1pbkRpc3RhbmNlMiA9IEluZmluaXR5LCBjbG9zZXN0UG9pbnQ7XG4gICAgKGZ1bmN0aW9uIGZpbmQobm9kZSwgeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgIGlmICh4MSA+IHgzIHx8IHkxID4geTMgfHwgeDIgPCB4MCB8fCB5MiA8IHkwKSByZXR1cm47XG4gICAgICBpZiAocG9pbnQgPSBub2RlLnBvaW50KSB7XG4gICAgICAgIHZhciBwb2ludCwgZHggPSB4IC0gbm9kZS54LCBkeSA9IHkgLSBub2RlLnksIGRpc3RhbmNlMiA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgICBpZiAoZGlzdGFuY2UyIDwgbWluRGlzdGFuY2UyKSB7XG4gICAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KG1pbkRpc3RhbmNlMiA9IGRpc3RhbmNlMik7XG4gICAgICAgICAgeDAgPSB4IC0gZGlzdGFuY2UsIHkwID0geSAtIGRpc3RhbmNlO1xuICAgICAgICAgIHgzID0geCArIGRpc3RhbmNlLCB5MyA9IHkgKyBkaXN0YW5jZTtcbiAgICAgICAgICBjbG9zZXN0UG9pbnQgPSBwb2ludDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5ub2RlcywgeG0gPSAoeDEgKyB4MikgKiAuNSwgeW0gPSAoeTEgKyB5MikgKiAuNSwgcmlnaHQgPSB4ID49IHhtLCBiZWxvdyA9IHkgPj0geW07XG4gICAgICBmb3IgKHZhciBpID0gYmVsb3cgPDwgMSB8IHJpZ2h0LCBqID0gaSArIDQ7IGkgPCBqOyArK2kpIHtcbiAgICAgICAgaWYgKG5vZGUgPSBjaGlsZHJlbltpICYgM10pIHN3aXRjaCAoaSAmIDMpIHtcbiAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBmaW5kKG5vZGUsIHgxLCB5MSwgeG0sIHltKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGZpbmQobm9kZSwgeG0sIHkxLCB4MiwgeW0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgZmluZChub2RlLCB4MSwgeW0sIHhtLCB5Mik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBmaW5kKG5vZGUsIHhtLCB5bSwgeDIsIHkyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pKHJvb3QsIHgwLCB5MCwgeDMsIHkzKTtcbiAgICByZXR1cm4gY2xvc2VzdFBvaW50O1xuICB9XG4gIGQzLmludGVycG9sYXRlUmdiID0gZDNfaW50ZXJwb2xhdGVSZ2I7XG4gIGZ1bmN0aW9uIGQzX2ludGVycG9sYXRlUmdiKGEsIGIpIHtcbiAgICBhID0gZDMucmdiKGEpO1xuICAgIGIgPSBkMy5yZ2IoYik7XG4gICAgdmFyIGFyID0gYS5yLCBhZyA9IGEuZywgYWIgPSBhLmIsIGJyID0gYi5yIC0gYXIsIGJnID0gYi5nIC0gYWcsIGJiID0gYi5iIC0gYWI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiBcIiNcIiArIGQzX3JnYl9oZXgoTWF0aC5yb3VuZChhciArIGJyICogdCkpICsgZDNfcmdiX2hleChNYXRoLnJvdW5kKGFnICsgYmcgKiB0KSkgKyBkM19yZ2JfaGV4KE1hdGgucm91bmQoYWIgKyBiYiAqIHQpKTtcbiAgICB9O1xuICB9XG4gIGQzLmludGVycG9sYXRlT2JqZWN0ID0gZDNfaW50ZXJwb2xhdGVPYmplY3Q7XG4gIGZ1bmN0aW9uIGQzX2ludGVycG9sYXRlT2JqZWN0KGEsIGIpIHtcbiAgICB2YXIgaSA9IHt9LCBjID0ge30sIGs7XG4gICAgZm9yIChrIGluIGEpIHtcbiAgICAgIGlmIChrIGluIGIpIHtcbiAgICAgICAgaVtrXSA9IGQzX2ludGVycG9sYXRlKGFba10sIGJba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY1trXSA9IGFba107XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoayBpbiBiKSB7XG4gICAgICBpZiAoIShrIGluIGEpKSB7XG4gICAgICAgIGNba10gPSBiW2tdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgZm9yIChrIGluIGkpIGNba10gPSBpW2tdKHQpO1xuICAgICAgcmV0dXJuIGM7XG4gICAgfTtcbiAgfVxuICBkMy5pbnRlcnBvbGF0ZU51bWJlciA9IGQzX2ludGVycG9sYXRlTnVtYmVyO1xuICBmdW5jdGlvbiBkM19pbnRlcnBvbGF0ZU51bWJlcihhLCBiKSB7XG4gICAgYSA9ICthLCBiID0gK2I7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiBhICogKDEgLSB0KSArIGIgKiB0O1xuICAgIH07XG4gIH1cbiAgZDMuaW50ZXJwb2xhdGVTdHJpbmcgPSBkM19pbnRlcnBvbGF0ZVN0cmluZztcbiAgZnVuY3Rpb24gZDNfaW50ZXJwb2xhdGVTdHJpbmcoYSwgYikge1xuICAgIHZhciBiaSA9IGQzX2ludGVycG9sYXRlX251bWJlckEubGFzdEluZGV4ID0gZDNfaW50ZXJwb2xhdGVfbnVtYmVyQi5sYXN0SW5kZXggPSAwLCBhbSwgYm0sIGJzLCBpID0gLTEsIHMgPSBbXSwgcSA9IFtdO1xuICAgIGEgPSBhICsgXCJcIiwgYiA9IGIgKyBcIlwiO1xuICAgIHdoaWxlICgoYW0gPSBkM19pbnRlcnBvbGF0ZV9udW1iZXJBLmV4ZWMoYSkpICYmIChibSA9IGQzX2ludGVycG9sYXRlX251bWJlckIuZXhlYyhiKSkpIHtcbiAgICAgIGlmICgoYnMgPSBibS5pbmRleCkgPiBiaSkge1xuICAgICAgICBicyA9IGIuc2xpY2UoYmksIGJzKTtcbiAgICAgICAgaWYgKHNbaV0pIHNbaV0gKz0gYnM7IGVsc2Ugc1srK2ldID0gYnM7XG4gICAgICB9XG4gICAgICBpZiAoKGFtID0gYW1bMF0pID09PSAoYm0gPSBibVswXSkpIHtcbiAgICAgICAgaWYgKHNbaV0pIHNbaV0gKz0gYm07IGVsc2Ugc1srK2ldID0gYm07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzWysraV0gPSBudWxsO1xuICAgICAgICBxLnB1c2goe1xuICAgICAgICAgIGk6IGksXG4gICAgICAgICAgeDogZDNfaW50ZXJwb2xhdGVOdW1iZXIoYW0sIGJtKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGJpID0gZDNfaW50ZXJwb2xhdGVfbnVtYmVyQi5sYXN0SW5kZXg7XG4gICAgfVxuICAgIGlmIChiaSA8IGIubGVuZ3RoKSB7XG4gICAgICBicyA9IGIuc2xpY2UoYmkpO1xuICAgICAgaWYgKHNbaV0pIHNbaV0gKz0gYnM7IGVsc2Ugc1srK2ldID0gYnM7XG4gICAgfVxuICAgIHJldHVybiBzLmxlbmd0aCA8IDIgPyBxWzBdID8gKGIgPSBxWzBdLngsIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiBiKHQpICsgXCJcIjtcbiAgICB9KSA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGI7XG4gICAgfSA6IChiID0gcS5sZW5ndGgsIGZ1bmN0aW9uKHQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBvOyBpIDwgYjsgKytpKSBzWyhvID0gcVtpXSkuaV0gPSBvLngodCk7XG4gICAgICByZXR1cm4gcy5qb2luKFwiXCIpO1xuICAgIH0pO1xuICB9XG4gIHZhciBkM19pbnRlcnBvbGF0ZV9udW1iZXJBID0gL1stK10/KD86XFxkK1xcLj9cXGQqfFxcLj9cXGQrKSg/OltlRV1bLStdP1xcZCspPy9nLCBkM19pbnRlcnBvbGF0ZV9udW1iZXJCID0gbmV3IFJlZ0V4cChkM19pbnRlcnBvbGF0ZV9udW1iZXJBLnNvdXJjZSwgXCJnXCIpO1xuICBkMy5pbnRlcnBvbGF0ZSA9IGQzX2ludGVycG9sYXRlO1xuICBmdW5jdGlvbiBkM19pbnRlcnBvbGF0ZShhLCBiKSB7XG4gICAgdmFyIGkgPSBkMy5pbnRlcnBvbGF0b3JzLmxlbmd0aCwgZjtcbiAgICB3aGlsZSAoLS1pID49IDAgJiYgIShmID0gZDMuaW50ZXJwb2xhdG9yc1tpXShhLCBiKSkpIDtcbiAgICByZXR1cm4gZjtcbiAgfVxuICBkMy5pbnRlcnBvbGF0b3JzID0gWyBmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHQgPSB0eXBlb2YgYjtcbiAgICByZXR1cm4gKHQgPT09IFwic3RyaW5nXCIgPyBkM19yZ2JfbmFtZXMuaGFzKGIudG9Mb3dlckNhc2UoKSkgfHwgL14oI3xyZ2JcXCh8aHNsXFwoKS9pLnRlc3QoYikgPyBkM19pbnRlcnBvbGF0ZVJnYiA6IGQzX2ludGVycG9sYXRlU3RyaW5nIDogYiBpbnN0YW5jZW9mIGQzX2NvbG9yID8gZDNfaW50ZXJwb2xhdGVSZ2IgOiBBcnJheS5pc0FycmF5KGIpID8gZDNfaW50ZXJwb2xhdGVBcnJheSA6IHQgPT09IFwib2JqZWN0XCIgJiYgaXNOYU4oYikgPyBkM19pbnRlcnBvbGF0ZU9iamVjdCA6IGQzX2ludGVycG9sYXRlTnVtYmVyKShhLCBiKTtcbiAgfSBdO1xuICBkMy5pbnRlcnBvbGF0ZUFycmF5ID0gZDNfaW50ZXJwb2xhdGVBcnJheTtcbiAgZnVuY3Rpb24gZDNfaW50ZXJwb2xhdGVBcnJheShhLCBiKSB7XG4gICAgdmFyIHggPSBbXSwgYyA9IFtdLCBuYSA9IGEubGVuZ3RoLCBuYiA9IGIubGVuZ3RoLCBuMCA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aCksIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IG4wOyArK2kpIHgucHVzaChkM19pbnRlcnBvbGF0ZShhW2ldLCBiW2ldKSk7XG4gICAgZm9yICg7aSA8IG5hOyArK2kpIGNbaV0gPSBhW2ldO1xuICAgIGZvciAoO2kgPCBuYjsgKytpKSBjW2ldID0gYltpXTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IG4wOyArK2kpIGNbaV0gPSB4W2ldKHQpO1xuICAgICAgcmV0dXJuIGM7XG4gICAgfTtcbiAgfVxuICB2YXIgZDNfZWFzZV9kZWZhdWx0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX2lkZW50aXR5O1xuICB9O1xuICB2YXIgZDNfZWFzZSA9IGQzLm1hcCh7XG4gICAgbGluZWFyOiBkM19lYXNlX2RlZmF1bHQsXG4gICAgcG9seTogZDNfZWFzZV9wb2x5LFxuICAgIHF1YWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGQzX2Vhc2VfcXVhZDtcbiAgICB9LFxuICAgIGN1YmljOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM19lYXNlX2N1YmljO1xuICAgIH0sXG4gICAgc2luOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM19lYXNlX3NpbjtcbiAgICB9LFxuICAgIGV4cDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZDNfZWFzZV9leHA7XG4gICAgfSxcbiAgICBjaXJjbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGQzX2Vhc2VfY2lyY2xlO1xuICAgIH0sXG4gICAgZWxhc3RpYzogZDNfZWFzZV9lbGFzdGljLFxuICAgIGJhY2s6IGQzX2Vhc2VfYmFjayxcbiAgICBib3VuY2U6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGQzX2Vhc2VfYm91bmNlO1xuICAgIH1cbiAgfSk7XG4gIHZhciBkM19lYXNlX21vZGUgPSBkMy5tYXAoe1xuICAgIFwiaW5cIjogZDNfaWRlbnRpdHksXG4gICAgb3V0OiBkM19lYXNlX3JldmVyc2UsXG4gICAgXCJpbi1vdXRcIjogZDNfZWFzZV9yZWZsZWN0LFxuICAgIFwib3V0LWluXCI6IGZ1bmN0aW9uKGYpIHtcbiAgICAgIHJldHVybiBkM19lYXNlX3JlZmxlY3QoZDNfZWFzZV9yZXZlcnNlKGYpKTtcbiAgICB9XG4gIH0pO1xuICBkMy5lYXNlID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpID0gbmFtZS5pbmRleE9mKFwiLVwiKSwgdCA9IGkgPj0gMCA/IG5hbWUuc2xpY2UoMCwgaSkgOiBuYW1lLCBtID0gaSA+PSAwID8gbmFtZS5zbGljZShpICsgMSkgOiBcImluXCI7XG4gICAgdCA9IGQzX2Vhc2UuZ2V0KHQpIHx8IGQzX2Vhc2VfZGVmYXVsdDtcbiAgICBtID0gZDNfZWFzZV9tb2RlLmdldChtKSB8fCBkM19pZGVudGl0eTtcbiAgICByZXR1cm4gZDNfZWFzZV9jbGFtcChtKHQuYXBwbHkobnVsbCwgZDNfYXJyYXlTbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpKSk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2Vhc2VfY2xhbXAoZikge1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdCA8PSAwID8gMCA6IHQgPj0gMSA/IDEgOiBmKHQpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZWFzZV9yZXZlcnNlKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIDEgLSBmKDEgLSB0KTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2Vhc2VfcmVmbGVjdChmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiAuNSAqICh0IDwgLjUgPyBmKDIgKiB0KSA6IDIgLSBmKDIgLSAyICogdCkpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZWFzZV9xdWFkKHQpIHtcbiAgICByZXR1cm4gdCAqIHQ7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZWFzZV9jdWJpYyh0KSB7XG4gICAgcmV0dXJuIHQgKiB0ICogdDtcbiAgfVxuICBmdW5jdGlvbiBkM19lYXNlX2N1YmljSW5PdXQodCkge1xuICAgIGlmICh0IDw9IDApIHJldHVybiAwO1xuICAgIGlmICh0ID49IDEpIHJldHVybiAxO1xuICAgIHZhciB0MiA9IHQgKiB0LCB0MyA9IHQyICogdDtcbiAgICByZXR1cm4gNCAqICh0IDwgLjUgPyB0MyA6IDMgKiAodCAtIHQyKSArIHQzIC0gLjc1KTtcbiAgfVxuICBmdW5jdGlvbiBkM19lYXNlX3BvbHkoZSkge1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gTWF0aC5wb3codCwgZSk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkM19lYXNlX3Npbih0KSB7XG4gICAgcmV0dXJuIDEgLSBNYXRoLmNvcyh0ICogaGFsZs+AKTtcbiAgfVxuICBmdW5jdGlvbiBkM19lYXNlX2V4cCh0KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZWFzZV9jaXJjbGUodCkge1xuICAgIHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSB0ICogdCk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfZWFzZV9lbGFzdGljKGEsIHApIHtcbiAgICB2YXIgcztcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHAgPSAuNDU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHMgPSBwIC8gz4QgKiBNYXRoLmFzaW4oMSAvIGEpOyBlbHNlIGEgPSAxLCBzID0gcCAvIDQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiAxICsgYSAqIE1hdGgucG93KDIsIC0xMCAqIHQpICogTWF0aC5zaW4oKHQgLSBzKSAqIM+EIC8gcCk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkM19lYXNlX2JhY2socykge1xuICAgIGlmICghcykgcyA9IDEuNzAxNTg7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiB0ICogdCAqICgocyArIDEpICogdCAtIHMpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZDNfZWFzZV9ib3VuY2UodCkge1xuICAgIHJldHVybiB0IDwgMSAvIDIuNzUgPyA3LjU2MjUgKiB0ICogdCA6IHQgPCAyIC8gMi43NSA/IDcuNTYyNSAqICh0IC09IDEuNSAvIDIuNzUpICogdCArIC43NSA6IHQgPCAyLjUgLyAyLjc1ID8gNy41NjI1ICogKHQgLT0gMi4yNSAvIDIuNzUpICogdCArIC45Mzc1IDogNy41NjI1ICogKHQgLT0gMi42MjUgLyAyLjc1KSAqIHQgKyAuOTg0Mzc1O1xuICB9XG4gIGQzLmludGVycG9sYXRlSGNsID0gZDNfaW50ZXJwb2xhdGVIY2w7XG4gIGZ1bmN0aW9uIGQzX2ludGVycG9sYXRlSGNsKGEsIGIpIHtcbiAgICBhID0gZDMuaGNsKGEpO1xuICAgIGIgPSBkMy5oY2woYik7XG4gICAgdmFyIGFoID0gYS5oLCBhYyA9IGEuYywgYWwgPSBhLmwsIGJoID0gYi5oIC0gYWgsIGJjID0gYi5jIC0gYWMsIGJsID0gYi5sIC0gYWw7XG4gICAgaWYgKGlzTmFOKGJjKSkgYmMgPSAwLCBhYyA9IGlzTmFOKGFjKSA/IGIuYyA6IGFjO1xuICAgIGlmIChpc05hTihiaCkpIGJoID0gMCwgYWggPSBpc05hTihhaCkgPyBiLmggOiBhaDsgZWxzZSBpZiAoYmggPiAxODApIGJoIC09IDM2MDsgZWxzZSBpZiAoYmggPCAtMTgwKSBiaCArPSAzNjA7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiBkM19oY2xfbGFiKGFoICsgYmggKiB0LCBhYyArIGJjICogdCwgYWwgKyBibCAqIHQpICsgXCJcIjtcbiAgICB9O1xuICB9XG4gIGQzLmludGVycG9sYXRlSHNsID0gZDNfaW50ZXJwb2xhdGVIc2w7XG4gIGZ1bmN0aW9uIGQzX2ludGVycG9sYXRlSHNsKGEsIGIpIHtcbiAgICBhID0gZDMuaHNsKGEpO1xuICAgIGIgPSBkMy5oc2woYik7XG4gICAgdmFyIGFoID0gYS5oLCBhcyA9IGEucywgYWwgPSBhLmwsIGJoID0gYi5oIC0gYWgsIGJzID0gYi5zIC0gYXMsIGJsID0gYi5sIC0gYWw7XG4gICAgaWYgKGlzTmFOKGJzKSkgYnMgPSAwLCBhcyA9IGlzTmFOKGFzKSA/IGIucyA6IGFzO1xuICAgIGlmIChpc05hTihiaCkpIGJoID0gMCwgYWggPSBpc05hTihhaCkgPyBiLmggOiBhaDsgZWxzZSBpZiAoYmggPiAxODApIGJoIC09IDM2MDsgZWxzZSBpZiAoYmggPCAtMTgwKSBiaCArPSAzNjA7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiBkM19oc2xfcmdiKGFoICsgYmggKiB0LCBhcyArIGJzICogdCwgYWwgKyBibCAqIHQpICsgXCJcIjtcbiAgICB9O1xuICB9XG4gIGQzLmludGVycG9sYXRlTGFiID0gZDNfaW50ZXJwb2xhdGVMYWI7XG4gIGZ1bmN0aW9uIGQzX2ludGVycG9sYXRlTGFiKGEsIGIpIHtcbiAgICBhID0gZDMubGFiKGEpO1xuICAgIGIgPSBkMy5sYWIoYik7XG4gICAgdmFyIGFsID0gYS5sLCBhYSA9IGEuYSwgYWIgPSBhLmIsIGJsID0gYi5sIC0gYWwsIGJhID0gYi5hIC0gYWEsIGJiID0gYi5iIC0gYWI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiBkM19sYWJfcmdiKGFsICsgYmwgKiB0LCBhYSArIGJhICogdCwgYWIgKyBiYiAqIHQpICsgXCJcIjtcbiAgICB9O1xuICB9XG4gIGQzLmludGVycG9sYXRlUm91bmQgPSBkM19pbnRlcnBvbGF0ZVJvdW5kO1xuICBmdW5jdGlvbiBkM19pbnRlcnBvbGF0ZVJvdW5kKGEsIGIpIHtcbiAgICBiIC09IGE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKGEgKyBiICogdCk7XG4gICAgfTtcbiAgfVxuICBkMy50cmFuc2Zvcm0gPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICB2YXIgZyA9IGQzX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhkMy5ucy5wcmVmaXguc3ZnLCBcImdcIik7XG4gICAgcmV0dXJuIChkMy50cmFuc2Zvcm0gPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgIGlmIChzdHJpbmcgIT0gbnVsbCkge1xuICAgICAgICBnLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBzdHJpbmcpO1xuICAgICAgICB2YXIgdCA9IGcudHJhbnNmb3JtLmJhc2VWYWwuY29uc29saWRhdGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgZDNfdHJhbnNmb3JtKHQgPyB0Lm1hdHJpeCA6IGQzX3RyYW5zZm9ybUlkZW50aXR5KTtcbiAgICB9KShzdHJpbmcpO1xuICB9O1xuICBmdW5jdGlvbiBkM190cmFuc2Zvcm0obSkge1xuICAgIHZhciByMCA9IFsgbS5hLCBtLmIgXSwgcjEgPSBbIG0uYywgbS5kIF0sIGt4ID0gZDNfdHJhbnNmb3JtTm9ybWFsaXplKHIwKSwga3ogPSBkM190cmFuc2Zvcm1Eb3QocjAsIHIxKSwga3kgPSBkM190cmFuc2Zvcm1Ob3JtYWxpemUoZDNfdHJhbnNmb3JtQ29tYmluZShyMSwgcjAsIC1reikpIHx8IDA7XG4gICAgaWYgKHIwWzBdICogcjFbMV0gPCByMVswXSAqIHIwWzFdKSB7XG4gICAgICByMFswXSAqPSAtMTtcbiAgICAgIHIwWzFdICo9IC0xO1xuICAgICAga3ggKj0gLTE7XG4gICAgICBreiAqPSAtMTtcbiAgICB9XG4gICAgdGhpcy5yb3RhdGUgPSAoa3ggPyBNYXRoLmF0YW4yKHIwWzFdLCByMFswXSkgOiBNYXRoLmF0YW4yKC1yMVswXSwgcjFbMV0pKSAqIGQzX2RlZ3JlZXM7XG4gICAgdGhpcy50cmFuc2xhdGUgPSBbIG0uZSwgbS5mIF07XG4gICAgdGhpcy5zY2FsZSA9IFsga3gsIGt5IF07XG4gICAgdGhpcy5za2V3ID0ga3kgPyBNYXRoLmF0YW4yKGt6LCBreSkgKiBkM19kZWdyZWVzIDogMDtcbiAgfVxuICBkM190cmFuc2Zvcm0ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgdGhpcy50cmFuc2xhdGUgKyBcIilyb3RhdGUoXCIgKyB0aGlzLnJvdGF0ZSArIFwiKXNrZXdYKFwiICsgdGhpcy5za2V3ICsgXCIpc2NhbGUoXCIgKyB0aGlzLnNjYWxlICsgXCIpXCI7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3RyYW5zZm9ybURvdChhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV07XG4gIH1cbiAgZnVuY3Rpb24gZDNfdHJhbnNmb3JtTm9ybWFsaXplKGEpIHtcbiAgICB2YXIgayA9IE1hdGguc3FydChkM190cmFuc2Zvcm1Eb3QoYSwgYSkpO1xuICAgIGlmIChrKSB7XG4gICAgICBhWzBdIC89IGs7XG4gICAgICBhWzFdIC89IGs7XG4gICAgfVxuICAgIHJldHVybiBrO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RyYW5zZm9ybUNvbWJpbmUoYSwgYiwgaykge1xuICAgIGFbMF0gKz0gayAqIGJbMF07XG4gICAgYVsxXSArPSBrICogYlsxXTtcbiAgICByZXR1cm4gYTtcbiAgfVxuICB2YXIgZDNfdHJhbnNmb3JtSWRlbnRpdHkgPSB7XG4gICAgYTogMSxcbiAgICBiOiAwLFxuICAgIGM6IDAsXG4gICAgZDogMSxcbiAgICBlOiAwLFxuICAgIGY6IDBcbiAgfTtcbiAgZDMuaW50ZXJwb2xhdGVUcmFuc2Zvcm0gPSBkM19pbnRlcnBvbGF0ZVRyYW5zZm9ybTtcbiAgZnVuY3Rpb24gZDNfaW50ZXJwb2xhdGVUcmFuc2Zvcm1Qb3Aocykge1xuICAgIHJldHVybiBzLmxlbmd0aCA/IHMucG9wKCkgKyBcIixcIiA6IFwiXCI7XG4gIH1cbiAgZnVuY3Rpb24gZDNfaW50ZXJwb2xhdGVUcmFuc2xhdGUodGEsIHRiLCBzLCBxKSB7XG4gICAgaWYgKHRhWzBdICE9PSB0YlswXSB8fCB0YVsxXSAhPT0gdGJbMV0pIHtcbiAgICAgIHZhciBpID0gcy5wdXNoKFwidHJhbnNsYXRlKFwiLCBudWxsLCBcIixcIiwgbnVsbCwgXCIpXCIpO1xuICAgICAgcS5wdXNoKHtcbiAgICAgICAgaTogaSAtIDQsXG4gICAgICAgIHg6IGQzX2ludGVycG9sYXRlTnVtYmVyKHRhWzBdLCB0YlswXSlcbiAgICAgIH0sIHtcbiAgICAgICAgaTogaSAtIDIsXG4gICAgICAgIHg6IGQzX2ludGVycG9sYXRlTnVtYmVyKHRhWzFdLCB0YlsxXSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGJbMF0gfHwgdGJbMV0pIHtcbiAgICAgIHMucHVzaChcInRyYW5zbGF0ZShcIiArIHRiICsgXCIpXCIpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkM19pbnRlcnBvbGF0ZVJvdGF0ZShyYSwgcmIsIHMsIHEpIHtcbiAgICBpZiAocmEgIT09IHJiKSB7XG4gICAgICBpZiAocmEgLSByYiA+IDE4MCkgcmIgKz0gMzYwOyBlbHNlIGlmIChyYiAtIHJhID4gMTgwKSByYSArPSAzNjA7XG4gICAgICBxLnB1c2goe1xuICAgICAgICBpOiBzLnB1c2goZDNfaW50ZXJwb2xhdGVUcmFuc2Zvcm1Qb3AocykgKyBcInJvdGF0ZShcIiwgbnVsbCwgXCIpXCIpIC0gMixcbiAgICAgICAgeDogZDNfaW50ZXJwb2xhdGVOdW1iZXIocmEsIHJiKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChyYikge1xuICAgICAgcy5wdXNoKGQzX2ludGVycG9sYXRlVHJhbnNmb3JtUG9wKHMpICsgXCJyb3RhdGUoXCIgKyByYiArIFwiKVwiKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZDNfaW50ZXJwb2xhdGVTa2V3KHdhLCB3YiwgcywgcSkge1xuICAgIGlmICh3YSAhPT0gd2IpIHtcbiAgICAgIHEucHVzaCh7XG4gICAgICAgIGk6IHMucHVzaChkM19pbnRlcnBvbGF0ZVRyYW5zZm9ybVBvcChzKSArIFwic2tld1goXCIsIG51bGwsIFwiKVwiKSAtIDIsXG4gICAgICAgIHg6IGQzX2ludGVycG9sYXRlTnVtYmVyKHdhLCB3YilcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAod2IpIHtcbiAgICAgIHMucHVzaChkM19pbnRlcnBvbGF0ZVRyYW5zZm9ybVBvcChzKSArIFwic2tld1goXCIgKyB3YiArIFwiKVwiKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZDNfaW50ZXJwb2xhdGVTY2FsZShrYSwga2IsIHMsIHEpIHtcbiAgICBpZiAoa2FbMF0gIT09IGtiWzBdIHx8IGthWzFdICE9PSBrYlsxXSkge1xuICAgICAgdmFyIGkgPSBzLnB1c2goZDNfaW50ZXJwb2xhdGVUcmFuc2Zvcm1Qb3AocykgKyBcInNjYWxlKFwiLCBudWxsLCBcIixcIiwgbnVsbCwgXCIpXCIpO1xuICAgICAgcS5wdXNoKHtcbiAgICAgICAgaTogaSAtIDQsXG4gICAgICAgIHg6IGQzX2ludGVycG9sYXRlTnVtYmVyKGthWzBdLCBrYlswXSlcbiAgICAgIH0sIHtcbiAgICAgICAgaTogaSAtIDIsXG4gICAgICAgIHg6IGQzX2ludGVycG9sYXRlTnVtYmVyKGthWzFdLCBrYlsxXSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoa2JbMF0gIT09IDEgfHwga2JbMV0gIT09IDEpIHtcbiAgICAgIHMucHVzaChkM19pbnRlcnBvbGF0ZVRyYW5zZm9ybVBvcChzKSArIFwic2NhbGUoXCIgKyBrYiArIFwiKVwiKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZDNfaW50ZXJwb2xhdGVUcmFuc2Zvcm0oYSwgYikge1xuICAgIHZhciBzID0gW10sIHEgPSBbXTtcbiAgICBhID0gZDMudHJhbnNmb3JtKGEpLCBiID0gZDMudHJhbnNmb3JtKGIpO1xuICAgIGQzX2ludGVycG9sYXRlVHJhbnNsYXRlKGEudHJhbnNsYXRlLCBiLnRyYW5zbGF0ZSwgcywgcSk7XG4gICAgZDNfaW50ZXJwb2xhdGVSb3RhdGUoYS5yb3RhdGUsIGIucm90YXRlLCBzLCBxKTtcbiAgICBkM19pbnRlcnBvbGF0ZVNrZXcoYS5za2V3LCBiLnNrZXcsIHMsIHEpO1xuICAgIGQzX2ludGVycG9sYXRlU2NhbGUoYS5zY2FsZSwgYi5zY2FsZSwgcywgcSk7XG4gICAgYSA9IGIgPSBudWxsO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgaSA9IC0xLCBuID0gcS5sZW5ndGgsIG87XG4gICAgICB3aGlsZSAoKytpIDwgbikgc1sobyA9IHFbaV0pLmldID0gby54KHQpO1xuICAgICAgcmV0dXJuIHMuam9pbihcIlwiKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGQzX3VuaW50ZXJwb2xhdGVOdW1iZXIoYSwgYikge1xuICAgIGIgPSAoYiAtPSBhID0gK2EpIHx8IDEgLyBiO1xuICAgIHJldHVybiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gKHggLSBhKSAvIGI7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkM191bmludGVycG9sYXRlQ2xhbXAoYSwgYikge1xuICAgIGIgPSAoYiAtPSBhID0gK2EpIHx8IDEgLyBiO1xuICAgIHJldHVybiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKHggLSBhKSAvIGIpKTtcbiAgICB9O1xuICB9XG4gIGQzLmxheW91dCA9IHt9O1xuICBkMy5sYXlvdXQuYnVuZGxlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGxpbmtzKSB7XG4gICAgICB2YXIgcGF0aHMgPSBbXSwgaSA9IC0xLCBuID0gbGlua3MubGVuZ3RoO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIHBhdGhzLnB1c2goZDNfbGF5b3V0X2J1bmRsZVBhdGgobGlua3NbaV0pKTtcbiAgICAgIHJldHVybiBwYXRocztcbiAgICB9O1xuICB9O1xuICBmdW5jdGlvbiBkM19sYXlvdXRfYnVuZGxlUGF0aChsaW5rKSB7XG4gICAgdmFyIHN0YXJ0ID0gbGluay5zb3VyY2UsIGVuZCA9IGxpbmsudGFyZ2V0LCBsY2EgPSBkM19sYXlvdXRfYnVuZGxlTGVhc3RDb21tb25BbmNlc3RvcihzdGFydCwgZW5kKSwgcG9pbnRzID0gWyBzdGFydCBdO1xuICAgIHdoaWxlIChzdGFydCAhPT0gbGNhKSB7XG4gICAgICBzdGFydCA9IHN0YXJ0LnBhcmVudDtcbiAgICAgIHBvaW50cy5wdXNoKHN0YXJ0KTtcbiAgICB9XG4gICAgdmFyIGsgPSBwb2ludHMubGVuZ3RoO1xuICAgIHdoaWxlIChlbmQgIT09IGxjYSkge1xuICAgICAgcG9pbnRzLnNwbGljZShrLCAwLCBlbmQpO1xuICAgICAgZW5kID0gZW5kLnBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIHBvaW50cztcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfYnVuZGxlQW5jZXN0b3JzKG5vZGUpIHtcbiAgICB2YXIgYW5jZXN0b3JzID0gW10sIHBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgIHdoaWxlIChwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgYW5jZXN0b3JzLnB1c2gobm9kZSk7XG4gICAgICBub2RlID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICB9XG4gICAgYW5jZXN0b3JzLnB1c2gobm9kZSk7XG4gICAgcmV0dXJuIGFuY2VzdG9ycztcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfYnVuZGxlTGVhc3RDb21tb25BbmNlc3RvcihhLCBiKSB7XG4gICAgaWYgKGEgPT09IGIpIHJldHVybiBhO1xuICAgIHZhciBhTm9kZXMgPSBkM19sYXlvdXRfYnVuZGxlQW5jZXN0b3JzKGEpLCBiTm9kZXMgPSBkM19sYXlvdXRfYnVuZGxlQW5jZXN0b3JzKGIpLCBhTm9kZSA9IGFOb2Rlcy5wb3AoKSwgYk5vZGUgPSBiTm9kZXMucG9wKCksIHNoYXJlZE5vZGUgPSBudWxsO1xuICAgIHdoaWxlIChhTm9kZSA9PT0gYk5vZGUpIHtcbiAgICAgIHNoYXJlZE5vZGUgPSBhTm9kZTtcbiAgICAgIGFOb2RlID0gYU5vZGVzLnBvcCgpO1xuICAgICAgYk5vZGUgPSBiTm9kZXMucG9wKCk7XG4gICAgfVxuICAgIHJldHVybiBzaGFyZWROb2RlO1xuICB9XG4gIGQzLmxheW91dC5jaG9yZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjaG9yZCA9IHt9LCBjaG9yZHMsIGdyb3VwcywgbWF0cml4LCBuLCBwYWRkaW5nID0gMCwgc29ydEdyb3Vwcywgc29ydFN1Ymdyb3Vwcywgc29ydENob3JkcztcbiAgICBmdW5jdGlvbiByZWxheW91dCgpIHtcbiAgICAgIHZhciBzdWJncm91cHMgPSB7fSwgZ3JvdXBTdW1zID0gW10sIGdyb3VwSW5kZXggPSBkMy5yYW5nZShuKSwgc3ViZ3JvdXBJbmRleCA9IFtdLCBrLCB4LCB4MCwgaSwgajtcbiAgICAgIGNob3JkcyA9IFtdO1xuICAgICAgZ3JvdXBzID0gW107XG4gICAgICBrID0gMCwgaSA9IC0xO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgeCA9IDAsIGogPSAtMTtcbiAgICAgICAgd2hpbGUgKCsraiA8IG4pIHtcbiAgICAgICAgICB4ICs9IG1hdHJpeFtpXVtqXTtcbiAgICAgICAgfVxuICAgICAgICBncm91cFN1bXMucHVzaCh4KTtcbiAgICAgICAgc3ViZ3JvdXBJbmRleC5wdXNoKGQzLnJhbmdlKG4pKTtcbiAgICAgICAgayArPSB4O1xuICAgICAgfVxuICAgICAgaWYgKHNvcnRHcm91cHMpIHtcbiAgICAgICAgZ3JvdXBJbmRleC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gc29ydEdyb3Vwcyhncm91cFN1bXNbYV0sIGdyb3VwU3Vtc1tiXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHNvcnRTdWJncm91cHMpIHtcbiAgICAgICAgc3ViZ3JvdXBJbmRleC5mb3JFYWNoKGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICBkLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIHNvcnRTdWJncm91cHMobWF0cml4W2ldW2FdLCBtYXRyaXhbaV1bYl0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGsgPSAoz4QgLSBwYWRkaW5nICogbikgLyBrO1xuICAgICAgeCA9IDAsIGkgPSAtMTtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgIHgwID0geCwgaiA9IC0xO1xuICAgICAgICB3aGlsZSAoKytqIDwgbikge1xuICAgICAgICAgIHZhciBkaSA9IGdyb3VwSW5kZXhbaV0sIGRqID0gc3ViZ3JvdXBJbmRleFtkaV1bal0sIHYgPSBtYXRyaXhbZGldW2RqXSwgYTAgPSB4LCBhMSA9IHggKz0gdiAqIGs7XG4gICAgICAgICAgc3ViZ3JvdXBzW2RpICsgXCItXCIgKyBkal0gPSB7XG4gICAgICAgICAgICBpbmRleDogZGksXG4gICAgICAgICAgICBzdWJpbmRleDogZGosXG4gICAgICAgICAgICBzdGFydEFuZ2xlOiBhMCxcbiAgICAgICAgICAgIGVuZEFuZ2xlOiBhMSxcbiAgICAgICAgICAgIHZhbHVlOiB2XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBncm91cHNbZGldID0ge1xuICAgICAgICAgIGluZGV4OiBkaSxcbiAgICAgICAgICBzdGFydEFuZ2xlOiB4MCxcbiAgICAgICAgICBlbmRBbmdsZTogeCxcbiAgICAgICAgICB2YWx1ZTogZ3JvdXBTdW1zW2RpXVxuICAgICAgICB9O1xuICAgICAgICB4ICs9IHBhZGRpbmc7XG4gICAgICB9XG4gICAgICBpID0gLTE7XG4gICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICBqID0gaSAtIDE7XG4gICAgICAgIHdoaWxlICgrK2ogPCBuKSB7XG4gICAgICAgICAgdmFyIHNvdXJjZSA9IHN1Ymdyb3Vwc1tpICsgXCItXCIgKyBqXSwgdGFyZ2V0ID0gc3ViZ3JvdXBzW2ogKyBcIi1cIiArIGldO1xuICAgICAgICAgIGlmIChzb3VyY2UudmFsdWUgfHwgdGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICBjaG9yZHMucHVzaChzb3VyY2UudmFsdWUgPCB0YXJnZXQudmFsdWUgPyB7XG4gICAgICAgICAgICAgIHNvdXJjZTogdGFyZ2V0LFxuICAgICAgICAgICAgICB0YXJnZXQ6IHNvdXJjZVxuICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzb3J0Q2hvcmRzKSByZXNvcnQoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzb3J0KCkge1xuICAgICAgY2hvcmRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gc29ydENob3JkcygoYS5zb3VyY2UudmFsdWUgKyBhLnRhcmdldC52YWx1ZSkgLyAyLCAoYi5zb3VyY2UudmFsdWUgKyBiLnRhcmdldC52YWx1ZSkgLyAyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjaG9yZC5tYXRyaXggPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBtYXRyaXg7XG4gICAgICBuID0gKG1hdHJpeCA9IHgpICYmIG1hdHJpeC5sZW5ndGg7XG4gICAgICBjaG9yZHMgPSBncm91cHMgPSBudWxsO1xuICAgICAgcmV0dXJuIGNob3JkO1xuICAgIH07XG4gICAgY2hvcmQucGFkZGluZyA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHBhZGRpbmc7XG4gICAgICBwYWRkaW5nID0geDtcbiAgICAgIGNob3JkcyA9IGdyb3VwcyA9IG51bGw7XG4gICAgICByZXR1cm4gY2hvcmQ7XG4gICAgfTtcbiAgICBjaG9yZC5zb3J0R3JvdXBzID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc29ydEdyb3VwcztcbiAgICAgIHNvcnRHcm91cHMgPSB4O1xuICAgICAgY2hvcmRzID0gZ3JvdXBzID0gbnVsbDtcbiAgICAgIHJldHVybiBjaG9yZDtcbiAgICB9O1xuICAgIGNob3JkLnNvcnRTdWJncm91cHMgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBzb3J0U3ViZ3JvdXBzO1xuICAgICAgc29ydFN1Ymdyb3VwcyA9IHg7XG4gICAgICBjaG9yZHMgPSBudWxsO1xuICAgICAgcmV0dXJuIGNob3JkO1xuICAgIH07XG4gICAgY2hvcmQuc29ydENob3JkcyA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHNvcnRDaG9yZHM7XG4gICAgICBzb3J0Q2hvcmRzID0geDtcbiAgICAgIGlmIChjaG9yZHMpIHJlc29ydCgpO1xuICAgICAgcmV0dXJuIGNob3JkO1xuICAgIH07XG4gICAgY2hvcmQuY2hvcmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWNob3JkcykgcmVsYXlvdXQoKTtcbiAgICAgIHJldHVybiBjaG9yZHM7XG4gICAgfTtcbiAgICBjaG9yZC5ncm91cHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghZ3JvdXBzKSByZWxheW91dCgpO1xuICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9O1xuICAgIHJldHVybiBjaG9yZDtcbiAgfTtcbiAgZDMubGF5b3V0LmZvcmNlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZvcmNlID0ge30sIGV2ZW50ID0gZDMuZGlzcGF0Y2goXCJzdGFydFwiLCBcInRpY2tcIiwgXCJlbmRcIiksIHRpbWVyLCBzaXplID0gWyAxLCAxIF0sIGRyYWcsIGFscGhhLCBmcmljdGlvbiA9IC45LCBsaW5rRGlzdGFuY2UgPSBkM19sYXlvdXRfZm9yY2VMaW5rRGlzdGFuY2UsIGxpbmtTdHJlbmd0aCA9IGQzX2xheW91dF9mb3JjZUxpbmtTdHJlbmd0aCwgY2hhcmdlID0gLTMwLCBjaGFyZ2VEaXN0YW5jZTIgPSBkM19sYXlvdXRfZm9yY2VDaGFyZ2VEaXN0YW5jZTIsIGdyYXZpdHkgPSAuMSwgdGhldGEyID0gLjY0LCBub2RlcyA9IFtdLCBsaW5rcyA9IFtdLCBkaXN0YW5jZXMsIHN0cmVuZ3RocywgY2hhcmdlcztcbiAgICBmdW5jdGlvbiByZXB1bHNlKG5vZGUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihxdWFkLCB4MSwgXywgeDIpIHtcbiAgICAgICAgaWYgKHF1YWQucG9pbnQgIT09IG5vZGUpIHtcbiAgICAgICAgICB2YXIgZHggPSBxdWFkLmN4IC0gbm9kZS54LCBkeSA9IHF1YWQuY3kgLSBub2RlLnksIGR3ID0geDIgLSB4MSwgZG4gPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICAgICAgICBpZiAoZHcgKiBkdyAvIHRoZXRhMiA8IGRuKSB7XG4gICAgICAgICAgICBpZiAoZG4gPCBjaGFyZ2VEaXN0YW5jZTIpIHtcbiAgICAgICAgICAgICAgdmFyIGsgPSBxdWFkLmNoYXJnZSAvIGRuO1xuICAgICAgICAgICAgICBub2RlLnB4IC09IGR4ICogaztcbiAgICAgICAgICAgICAgbm9kZS5weSAtPSBkeSAqIGs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHF1YWQucG9pbnQgJiYgZG4gJiYgZG4gPCBjaGFyZ2VEaXN0YW5jZTIpIHtcbiAgICAgICAgICAgIHZhciBrID0gcXVhZC5wb2ludENoYXJnZSAvIGRuO1xuICAgICAgICAgICAgbm9kZS5weCAtPSBkeCAqIGs7XG4gICAgICAgICAgICBub2RlLnB5IC09IGR5ICogaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICFxdWFkLmNoYXJnZTtcbiAgICAgIH07XG4gICAgfVxuICAgIGZvcmNlLnRpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgoYWxwaGEgKj0gLjk5KSA8IC4wMDUpIHtcbiAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICBldmVudC5lbmQoe1xuICAgICAgICAgIHR5cGU6IFwiZW5kXCIsXG4gICAgICAgICAgYWxwaGE6IGFscGhhID0gMFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICB2YXIgbiA9IG5vZGVzLmxlbmd0aCwgbSA9IGxpbmtzLmxlbmd0aCwgcSwgaSwgbywgcywgdCwgbCwgaywgeCwgeTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBtOyArK2kpIHtcbiAgICAgICAgbyA9IGxpbmtzW2ldO1xuICAgICAgICBzID0gby5zb3VyY2U7XG4gICAgICAgIHQgPSBvLnRhcmdldDtcbiAgICAgICAgeCA9IHQueCAtIHMueDtcbiAgICAgICAgeSA9IHQueSAtIHMueTtcbiAgICAgICAgaWYgKGwgPSB4ICogeCArIHkgKiB5KSB7XG4gICAgICAgICAgbCA9IGFscGhhICogc3RyZW5ndGhzW2ldICogKChsID0gTWF0aC5zcXJ0KGwpKSAtIGRpc3RhbmNlc1tpXSkgLyBsO1xuICAgICAgICAgIHggKj0gbDtcbiAgICAgICAgICB5ICo9IGw7XG4gICAgICAgICAgdC54IC09IHggKiAoayA9IHMud2VpZ2h0ICsgdC53ZWlnaHQgPyBzLndlaWdodCAvIChzLndlaWdodCArIHQud2VpZ2h0KSA6IC41KTtcbiAgICAgICAgICB0LnkgLT0geSAqIGs7XG4gICAgICAgICAgcy54ICs9IHggKiAoayA9IDEgLSBrKTtcbiAgICAgICAgICBzLnkgKz0geSAqIGs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrID0gYWxwaGEgKiBncmF2aXR5KSB7XG4gICAgICAgIHggPSBzaXplWzBdIC8gMjtcbiAgICAgICAgeSA9IHNpemVbMV0gLyAyO1xuICAgICAgICBpID0gLTE7XG4gICAgICAgIGlmIChrKSB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICAgIG8gPSBub2Rlc1tpXTtcbiAgICAgICAgICBvLnggKz0gKHggLSBvLngpICogaztcbiAgICAgICAgICBvLnkgKz0gKHkgLSBvLnkpICogaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNoYXJnZSkge1xuICAgICAgICBkM19sYXlvdXRfZm9yY2VBY2N1bXVsYXRlKHEgPSBkMy5nZW9tLnF1YWR0cmVlKG5vZGVzKSwgYWxwaGEsIGNoYXJnZXMpO1xuICAgICAgICBpID0gLTE7XG4gICAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgICAgaWYgKCEobyA9IG5vZGVzW2ldKS5maXhlZCkge1xuICAgICAgICAgICAgcS52aXNpdChyZXB1bHNlKG8pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGkgPSAtMTtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgIG8gPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG8uZml4ZWQpIHtcbiAgICAgICAgICBvLnggPSBvLnB4O1xuICAgICAgICAgIG8ueSA9IG8ucHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgby54IC09IChvLnB4IC0gKG8ucHggPSBvLngpKSAqIGZyaWN0aW9uO1xuICAgICAgICAgIG8ueSAtPSAoby5weSAtIChvLnB5ID0gby55KSkgKiBmcmljdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXZlbnQudGljayh7XG4gICAgICAgIHR5cGU6IFwidGlja1wiLFxuICAgICAgICBhbHBoYTogYWxwaGFcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZm9yY2Uubm9kZXMgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBub2RlcztcbiAgICAgIG5vZGVzID0geDtcbiAgICAgIHJldHVybiBmb3JjZTtcbiAgICB9O1xuICAgIGZvcmNlLmxpbmtzID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gbGlua3M7XG4gICAgICBsaW5rcyA9IHg7XG4gICAgICByZXR1cm4gZm9yY2U7XG4gICAgfTtcbiAgICBmb3JjZS5zaXplID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc2l6ZTtcbiAgICAgIHNpemUgPSB4O1xuICAgICAgcmV0dXJuIGZvcmNlO1xuICAgIH07XG4gICAgZm9yY2UubGlua0Rpc3RhbmNlID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gbGlua0Rpc3RhbmNlO1xuICAgICAgbGlua0Rpc3RhbmNlID0gdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIiA/IHggOiAreDtcbiAgICAgIHJldHVybiBmb3JjZTtcbiAgICB9O1xuICAgIGZvcmNlLmRpc3RhbmNlID0gZm9yY2UubGlua0Rpc3RhbmNlO1xuICAgIGZvcmNlLmxpbmtTdHJlbmd0aCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGxpbmtTdHJlbmd0aDtcbiAgICAgIGxpbmtTdHJlbmd0aCA9IHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCIgPyB4IDogK3g7XG4gICAgICByZXR1cm4gZm9yY2U7XG4gICAgfTtcbiAgICBmb3JjZS5mcmljdGlvbiA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGZyaWN0aW9uO1xuICAgICAgZnJpY3Rpb24gPSAreDtcbiAgICAgIHJldHVybiBmb3JjZTtcbiAgICB9O1xuICAgIGZvcmNlLmNoYXJnZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGNoYXJnZTtcbiAgICAgIGNoYXJnZSA9IHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCIgPyB4IDogK3g7XG4gICAgICByZXR1cm4gZm9yY2U7XG4gICAgfTtcbiAgICBmb3JjZS5jaGFyZ2VEaXN0YW5jZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIE1hdGguc3FydChjaGFyZ2VEaXN0YW5jZTIpO1xuICAgICAgY2hhcmdlRGlzdGFuY2UyID0geCAqIHg7XG4gICAgICByZXR1cm4gZm9yY2U7XG4gICAgfTtcbiAgICBmb3JjZS5ncmF2aXR5ID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZ3Jhdml0eTtcbiAgICAgIGdyYXZpdHkgPSAreDtcbiAgICAgIHJldHVybiBmb3JjZTtcbiAgICB9O1xuICAgIGZvcmNlLnRoZXRhID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gTWF0aC5zcXJ0KHRoZXRhMik7XG4gICAgICB0aGV0YTIgPSB4ICogeDtcbiAgICAgIHJldHVybiBmb3JjZTtcbiAgICB9O1xuICAgIGZvcmNlLmFscGhhID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gYWxwaGE7XG4gICAgICB4ID0gK3g7XG4gICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgaWYgKHggPiAwKSB7XG4gICAgICAgICAgYWxwaGEgPSB4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVyLmMgPSBudWxsLCB0aW1lci50ID0gTmFOLCB0aW1lciA9IG51bGw7XG4gICAgICAgICAgZXZlbnQuZW5kKHtcbiAgICAgICAgICAgIHR5cGU6IFwiZW5kXCIsXG4gICAgICAgICAgICBhbHBoYTogYWxwaGEgPSAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoeCA+IDApIHtcbiAgICAgICAgZXZlbnQuc3RhcnQoe1xuICAgICAgICAgIHR5cGU6IFwic3RhcnRcIixcbiAgICAgICAgICBhbHBoYTogYWxwaGEgPSB4XG4gICAgICAgIH0pO1xuICAgICAgICB0aW1lciA9IGQzX3RpbWVyKGZvcmNlLnRpY2spO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcmNlO1xuICAgIH07XG4gICAgZm9yY2Uuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpLCBuID0gbm9kZXMubGVuZ3RoLCBtID0gbGlua3MubGVuZ3RoLCB3ID0gc2l6ZVswXSwgaCA9IHNpemVbMV0sIG5laWdoYm9ycywgbztcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgKG8gPSBub2Rlc1tpXSkuaW5kZXggPSBpO1xuICAgICAgICBvLndlaWdodCA9IDA7XG4gICAgICB9XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbTsgKytpKSB7XG4gICAgICAgIG8gPSBsaW5rc1tpXTtcbiAgICAgICAgaWYgKHR5cGVvZiBvLnNvdXJjZSA9PSBcIm51bWJlclwiKSBvLnNvdXJjZSA9IG5vZGVzW28uc291cmNlXTtcbiAgICAgICAgaWYgKHR5cGVvZiBvLnRhcmdldCA9PSBcIm51bWJlclwiKSBvLnRhcmdldCA9IG5vZGVzW28udGFyZ2V0XTtcbiAgICAgICAgKytvLnNvdXJjZS53ZWlnaHQ7XG4gICAgICAgICsrby50YXJnZXQud2VpZ2h0O1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICBvID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChpc05hTihvLngpKSBvLnggPSBwb3NpdGlvbihcInhcIiwgdyk7XG4gICAgICAgIGlmIChpc05hTihvLnkpKSBvLnkgPSBwb3NpdGlvbihcInlcIiwgaCk7XG4gICAgICAgIGlmIChpc05hTihvLnB4KSkgby5weCA9IG8ueDtcbiAgICAgICAgaWYgKGlzTmFOKG8ucHkpKSBvLnB5ID0gby55O1xuICAgICAgfVxuICAgICAgZGlzdGFuY2VzID0gW107XG4gICAgICBpZiAodHlwZW9mIGxpbmtEaXN0YW5jZSA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKGkgPSAwOyBpIDwgbTsgKytpKSBkaXN0YW5jZXNbaV0gPSArbGlua0Rpc3RhbmNlLmNhbGwodGhpcywgbGlua3NbaV0sIGkpOyBlbHNlIGZvciAoaSA9IDA7IGkgPCBtOyArK2kpIGRpc3RhbmNlc1tpXSA9IGxpbmtEaXN0YW5jZTtcbiAgICAgIHN0cmVuZ3RocyA9IFtdO1xuICAgICAgaWYgKHR5cGVvZiBsaW5rU3RyZW5ndGggPT09IFwiZnVuY3Rpb25cIikgZm9yIChpID0gMDsgaSA8IG07ICsraSkgc3RyZW5ndGhzW2ldID0gK2xpbmtTdHJlbmd0aC5jYWxsKHRoaXMsIGxpbmtzW2ldLCBpKTsgZWxzZSBmb3IgKGkgPSAwOyBpIDwgbTsgKytpKSBzdHJlbmd0aHNbaV0gPSBsaW5rU3RyZW5ndGg7XG4gICAgICBjaGFyZ2VzID0gW107XG4gICAgICBpZiAodHlwZW9mIGNoYXJnZSA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSBjaGFyZ2VzW2ldID0gK2NoYXJnZS5jYWxsKHRoaXMsIG5vZGVzW2ldLCBpKTsgZWxzZSBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSBjaGFyZ2VzW2ldID0gY2hhcmdlO1xuICAgICAgZnVuY3Rpb24gcG9zaXRpb24oZGltZW5zaW9uLCBzaXplKSB7XG4gICAgICAgIGlmICghbmVpZ2hib3JzKSB7XG4gICAgICAgICAgbmVpZ2hib3JzID0gbmV3IEFycmF5KG4pO1xuICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuOyArK2opIHtcbiAgICAgICAgICAgIG5laWdoYm9yc1tqXSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgICAgICAgICB2YXIgbyA9IGxpbmtzW2pdO1xuICAgICAgICAgICAgbmVpZ2hib3JzW28uc291cmNlLmluZGV4XS5wdXNoKG8udGFyZ2V0KTtcbiAgICAgICAgICAgIG5laWdoYm9yc1tvLnRhcmdldC5pbmRleF0ucHVzaChvLnNvdXJjZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjYW5kaWRhdGVzID0gbmVpZ2hib3JzW2ldLCBqID0gLTEsIGwgPSBjYW5kaWRhdGVzLmxlbmd0aCwgeDtcbiAgICAgICAgd2hpbGUgKCsraiA8IGwpIGlmICghaXNOYU4oeCA9IGNhbmRpZGF0ZXNbal1bZGltZW5zaW9uXSkpIHJldHVybiB4O1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIHNpemU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm9yY2UucmVzdW1lKCk7XG4gICAgfTtcbiAgICBmb3JjZS5yZXN1bWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmb3JjZS5hbHBoYSguMSk7XG4gICAgfTtcbiAgICBmb3JjZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZm9yY2UuYWxwaGEoMCk7XG4gICAgfTtcbiAgICBmb3JjZS5kcmFnID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWRyYWcpIGRyYWcgPSBkMy5iZWhhdmlvci5kcmFnKCkub3JpZ2luKGQzX2lkZW50aXR5KS5vbihcImRyYWdzdGFydC5mb3JjZVwiLCBkM19sYXlvdXRfZm9yY2VEcmFnc3RhcnQpLm9uKFwiZHJhZy5mb3JjZVwiLCBkcmFnbW92ZSkub24oXCJkcmFnZW5kLmZvcmNlXCIsIGQzX2xheW91dF9mb3JjZURyYWdlbmQpO1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZHJhZztcbiAgICAgIHRoaXMub24oXCJtb3VzZW92ZXIuZm9yY2VcIiwgZDNfbGF5b3V0X2ZvcmNlTW91c2VvdmVyKS5vbihcIm1vdXNlb3V0LmZvcmNlXCIsIGQzX2xheW91dF9mb3JjZU1vdXNlb3V0KS5jYWxsKGRyYWcpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gZHJhZ21vdmUoZCkge1xuICAgICAgZC5weCA9IGQzLmV2ZW50LngsIGQucHkgPSBkMy5ldmVudC55O1xuICAgICAgZm9yY2UucmVzdW1lKCk7XG4gICAgfVxuICAgIHJldHVybiBkMy5yZWJpbmQoZm9yY2UsIGV2ZW50LCBcIm9uXCIpO1xuICB9O1xuICBmdW5jdGlvbiBkM19sYXlvdXRfZm9yY2VEcmFnc3RhcnQoZCkge1xuICAgIGQuZml4ZWQgfD0gMjtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfZm9yY2VEcmFnZW5kKGQpIHtcbiAgICBkLmZpeGVkICY9IH42O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9mb3JjZU1vdXNlb3ZlcihkKSB7XG4gICAgZC5maXhlZCB8PSA0O1xuICAgIGQucHggPSBkLngsIGQucHkgPSBkLnk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X2ZvcmNlTW91c2VvdXQoZCkge1xuICAgIGQuZml4ZWQgJj0gfjQ7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X2ZvcmNlQWNjdW11bGF0ZShxdWFkLCBhbHBoYSwgY2hhcmdlcykge1xuICAgIHZhciBjeCA9IDAsIGN5ID0gMDtcbiAgICBxdWFkLmNoYXJnZSA9IDA7XG4gICAgaWYgKCFxdWFkLmxlYWYpIHtcbiAgICAgIHZhciBub2RlcyA9IHF1YWQubm9kZXMsIG4gPSBub2Rlcy5sZW5ndGgsIGkgPSAtMSwgYztcbiAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgIGMgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKGMgPT0gbnVsbCkgY29udGludWU7XG4gICAgICAgIGQzX2xheW91dF9mb3JjZUFjY3VtdWxhdGUoYywgYWxwaGEsIGNoYXJnZXMpO1xuICAgICAgICBxdWFkLmNoYXJnZSArPSBjLmNoYXJnZTtcbiAgICAgICAgY3ggKz0gYy5jaGFyZ2UgKiBjLmN4O1xuICAgICAgICBjeSArPSBjLmNoYXJnZSAqIGMuY3k7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChxdWFkLnBvaW50KSB7XG4gICAgICBpZiAoIXF1YWQubGVhZikge1xuICAgICAgICBxdWFkLnBvaW50LnggKz0gTWF0aC5yYW5kb20oKSAtIC41O1xuICAgICAgICBxdWFkLnBvaW50LnkgKz0gTWF0aC5yYW5kb20oKSAtIC41O1xuICAgICAgfVxuICAgICAgdmFyIGsgPSBhbHBoYSAqIGNoYXJnZXNbcXVhZC5wb2ludC5pbmRleF07XG4gICAgICBxdWFkLmNoYXJnZSArPSBxdWFkLnBvaW50Q2hhcmdlID0gaztcbiAgICAgIGN4ICs9IGsgKiBxdWFkLnBvaW50Lng7XG4gICAgICBjeSArPSBrICogcXVhZC5wb2ludC55O1xuICAgIH1cbiAgICBxdWFkLmN4ID0gY3ggLyBxdWFkLmNoYXJnZTtcbiAgICBxdWFkLmN5ID0gY3kgLyBxdWFkLmNoYXJnZTtcbiAgfVxuICB2YXIgZDNfbGF5b3V0X2ZvcmNlTGlua0Rpc3RhbmNlID0gMjAsIGQzX2xheW91dF9mb3JjZUxpbmtTdHJlbmd0aCA9IDEsIGQzX2xheW91dF9mb3JjZUNoYXJnZURpc3RhbmNlMiA9IEluZmluaXR5O1xuICBkMy5sYXlvdXQuaGllcmFyY2h5ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNvcnQgPSBkM19sYXlvdXRfaGllcmFyY2h5U29ydCwgY2hpbGRyZW4gPSBkM19sYXlvdXRfaGllcmFyY2h5Q2hpbGRyZW4sIHZhbHVlID0gZDNfbGF5b3V0X2hpZXJhcmNoeVZhbHVlO1xuICAgIGZ1bmN0aW9uIGhpZXJhcmNoeShyb290KSB7XG4gICAgICB2YXIgc3RhY2sgPSBbIHJvb3QgXSwgbm9kZXMgPSBbXSwgbm9kZTtcbiAgICAgIHJvb3QuZGVwdGggPSAwO1xuICAgICAgd2hpbGUgKChub2RlID0gc3RhY2sucG9wKCkpICE9IG51bGwpIHtcbiAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgaWYgKChjaGlsZHMgPSBjaGlsZHJlbi5jYWxsKGhpZXJhcmNoeSwgbm9kZSwgbm9kZS5kZXB0aCkpICYmIChuID0gY2hpbGRzLmxlbmd0aCkpIHtcbiAgICAgICAgICB2YXIgbiwgY2hpbGRzLCBjaGlsZDtcbiAgICAgICAgICB3aGlsZSAoLS1uID49IDApIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2goY2hpbGQgPSBjaGlsZHNbbl0pO1xuICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gbm9kZTtcbiAgICAgICAgICAgIGNoaWxkLmRlcHRoID0gbm9kZS5kZXB0aCArIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2YWx1ZSkgbm9kZS52YWx1ZSA9IDA7XG4gICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IGNoaWxkcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodmFsdWUpIG5vZGUudmFsdWUgPSArdmFsdWUuY2FsbChoaWVyYXJjaHksIG5vZGUsIG5vZGUuZGVwdGgpIHx8IDA7XG4gICAgICAgICAgZGVsZXRlIG5vZGUuY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGQzX2xheW91dF9oaWVyYXJjaHlWaXNpdEFmdGVyKHJvb3QsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdmFyIGNoaWxkcywgcGFyZW50O1xuICAgICAgICBpZiAoc29ydCAmJiAoY2hpbGRzID0gbm9kZS5jaGlsZHJlbikpIGNoaWxkcy5zb3J0KHNvcnQpO1xuICAgICAgICBpZiAodmFsdWUgJiYgKHBhcmVudCA9IG5vZGUucGFyZW50KSkgcGFyZW50LnZhbHVlICs9IG5vZGUudmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBub2RlcztcbiAgICB9XG4gICAgaGllcmFyY2h5LnNvcnQgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBzb3J0O1xuICAgICAgc29ydCA9IHg7XG4gICAgICByZXR1cm4gaGllcmFyY2h5O1xuICAgIH07XG4gICAgaGllcmFyY2h5LmNoaWxkcmVuID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gY2hpbGRyZW47XG4gICAgICBjaGlsZHJlbiA9IHg7XG4gICAgICByZXR1cm4gaGllcmFyY2h5O1xuICAgIH07XG4gICAgaGllcmFyY2h5LnZhbHVlID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdmFsdWU7XG4gICAgICB2YWx1ZSA9IHg7XG4gICAgICByZXR1cm4gaGllcmFyY2h5O1xuICAgIH07XG4gICAgaGllcmFyY2h5LnJldmFsdWUgPSBmdW5jdGlvbihyb290KSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZDNfbGF5b3V0X2hpZXJhcmNoeVZpc2l0QmVmb3JlKHJvb3QsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikgbm9kZS52YWx1ZSA9IDA7XG4gICAgICAgIH0pO1xuICAgICAgICBkM19sYXlvdXRfaGllcmFyY2h5VmlzaXRBZnRlcihyb290LCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgdmFyIHBhcmVudDtcbiAgICAgICAgICBpZiAoIW5vZGUuY2hpbGRyZW4pIG5vZGUudmFsdWUgPSArdmFsdWUuY2FsbChoaWVyYXJjaHksIG5vZGUsIG5vZGUuZGVwdGgpIHx8IDA7XG4gICAgICAgICAgaWYgKHBhcmVudCA9IG5vZGUucGFyZW50KSBwYXJlbnQudmFsdWUgKz0gbm9kZS52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcm9vdDtcbiAgICB9O1xuICAgIHJldHVybiBoaWVyYXJjaHk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9oaWVyYXJjaHlSZWJpbmQob2JqZWN0LCBoaWVyYXJjaHkpIHtcbiAgICBkMy5yZWJpbmQob2JqZWN0LCBoaWVyYXJjaHksIFwic29ydFwiLCBcImNoaWxkcmVuXCIsIFwidmFsdWVcIik7XG4gICAgb2JqZWN0Lm5vZGVzID0gb2JqZWN0O1xuICAgIG9iamVjdC5saW5rcyA9IGQzX2xheW91dF9oaWVyYXJjaHlMaW5rcztcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9oaWVyYXJjaHlWaXNpdEJlZm9yZShub2RlLCBjYWxsYmFjaykge1xuICAgIHZhciBub2RlcyA9IFsgbm9kZSBdO1xuICAgIHdoaWxlICgobm9kZSA9IG5vZGVzLnBvcCgpKSAhPSBudWxsKSB7XG4gICAgICBjYWxsYmFjayhub2RlKTtcbiAgICAgIGlmICgoY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuKSAmJiAobiA9IGNoaWxkcmVuLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIG4sIGNoaWxkcmVuO1xuICAgICAgICB3aGlsZSAoLS1uID49IDApIG5vZGVzLnB1c2goY2hpbGRyZW5bbl0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfaGllcmFyY2h5VmlzaXRBZnRlcihub2RlLCBjYWxsYmFjaykge1xuICAgIHZhciBub2RlcyA9IFsgbm9kZSBdLCBub2RlczIgPSBbXTtcbiAgICB3aGlsZSAoKG5vZGUgPSBub2Rlcy5wb3AoKSkgIT0gbnVsbCkge1xuICAgICAgbm9kZXMyLnB1c2gobm9kZSk7XG4gICAgICBpZiAoKGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbikgJiYgKG4gPSBjaGlsZHJlbi5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG4sIGNoaWxkcmVuO1xuICAgICAgICB3aGlsZSAoKytpIDwgbikgbm9kZXMucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHdoaWxlICgobm9kZSA9IG5vZGVzMi5wb3AoKSkgIT0gbnVsbCkge1xuICAgICAgY2FsbGJhY2sobm9kZSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9oaWVyYXJjaHlDaGlsZHJlbihkKSB7XG4gICAgcmV0dXJuIGQuY2hpbGRyZW47XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X2hpZXJhcmNoeVZhbHVlKGQpIHtcbiAgICByZXR1cm4gZC52YWx1ZTtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfaGllcmFyY2h5U29ydChhLCBiKSB7XG4gICAgcmV0dXJuIGIudmFsdWUgLSBhLnZhbHVlO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9oaWVyYXJjaHlMaW5rcyhub2Rlcykge1xuICAgIHJldHVybiBkMy5tZXJnZShub2Rlcy5tYXAoZnVuY3Rpb24ocGFyZW50KSB7XG4gICAgICByZXR1cm4gKHBhcmVudC5jaGlsZHJlbiB8fCBbXSkubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc291cmNlOiBwYXJlbnQsXG4gICAgICAgICAgdGFyZ2V0OiBjaGlsZFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSkpO1xuICB9XG4gIGQzLmxheW91dC5wYXJ0aXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaGllcmFyY2h5ID0gZDMubGF5b3V0LmhpZXJhcmNoeSgpLCBzaXplID0gWyAxLCAxIF07XG4gICAgZnVuY3Rpb24gcG9zaXRpb24obm9kZSwgeCwgZHgsIGR5KSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xuICAgICAgbm9kZS54ID0geDtcbiAgICAgIG5vZGUueSA9IG5vZGUuZGVwdGggKiBkeTtcbiAgICAgIG5vZGUuZHggPSBkeDtcbiAgICAgIG5vZGUuZHkgPSBkeTtcbiAgICAgIGlmIChjaGlsZHJlbiAmJiAobiA9IGNoaWxkcmVuLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbiwgYywgZDtcbiAgICAgICAgZHggPSBub2RlLnZhbHVlID8gZHggLyBub2RlLnZhbHVlIDogMDtcbiAgICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgICBwb3NpdGlvbihjID0gY2hpbGRyZW5baV0sIHgsIGQgPSBjLnZhbHVlICogZHgsIGR5KTtcbiAgICAgICAgICB4ICs9IGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZGVwdGgobm9kZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbiwgZCA9IDA7XG4gICAgICBpZiAoY2hpbGRyZW4gJiYgKG4gPSBjaGlsZHJlbi5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG47XG4gICAgICAgIHdoaWxlICgrK2kgPCBuKSBkID0gTWF0aC5tYXgoZCwgZGVwdGgoY2hpbGRyZW5baV0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAxICsgZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGFydGl0aW9uKGQsIGkpIHtcbiAgICAgIHZhciBub2RlcyA9IGhpZXJhcmNoeS5jYWxsKHRoaXMsIGQsIGkpO1xuICAgICAgcG9zaXRpb24obm9kZXNbMF0sIDAsIHNpemVbMF0sIHNpemVbMV0gLyBkZXB0aChub2Rlc1swXSkpO1xuICAgICAgcmV0dXJuIG5vZGVzO1xuICAgIH1cbiAgICBwYXJ0aXRpb24uc2l6ZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHNpemU7XG4gICAgICBzaXplID0geDtcbiAgICAgIHJldHVybiBwYXJ0aXRpb247XG4gICAgfTtcbiAgICByZXR1cm4gZDNfbGF5b3V0X2hpZXJhcmNoeVJlYmluZChwYXJ0aXRpb24sIGhpZXJhcmNoeSk7XG4gIH07XG4gIGQzLmxheW91dC5waWUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUgPSBOdW1iZXIsIHNvcnQgPSBkM19sYXlvdXRfcGllU29ydEJ5VmFsdWUsIHN0YXJ0QW5nbGUgPSAwLCBlbmRBbmdsZSA9IM+ELCBwYWRBbmdsZSA9IDA7XG4gICAgZnVuY3Rpb24gcGllKGRhdGEpIHtcbiAgICAgIHZhciBuID0gZGF0YS5sZW5ndGgsIHZhbHVlcyA9IGRhdGEubWFwKGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuICt2YWx1ZS5jYWxsKHBpZSwgZCwgaSk7XG4gICAgICB9KSwgYSA9ICsodHlwZW9mIHN0YXJ0QW5nbGUgPT09IFwiZnVuY3Rpb25cIiA/IHN0YXJ0QW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IHN0YXJ0QW5nbGUpLCBkYSA9ICh0eXBlb2YgZW5kQW5nbGUgPT09IFwiZnVuY3Rpb25cIiA/IGVuZEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBlbmRBbmdsZSkgLSBhLCBwID0gTWF0aC5taW4oTWF0aC5hYnMoZGEpIC8gbiwgKyh0eXBlb2YgcGFkQW5nbGUgPT09IFwiZnVuY3Rpb25cIiA/IHBhZEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBwYWRBbmdsZSkpLCBwYSA9IHAgKiAoZGEgPCAwID8gLTEgOiAxKSwgc3VtID0gZDMuc3VtKHZhbHVlcyksIGsgPSBzdW0gPyAoZGEgLSBuICogcGEpIC8gc3VtIDogMCwgaW5kZXggPSBkMy5yYW5nZShuKSwgYXJjcyA9IFtdLCB2O1xuICAgICAgaWYgKHNvcnQgIT0gbnVsbCkgaW5kZXguc29ydChzb3J0ID09PSBkM19sYXlvdXRfcGllU29ydEJ5VmFsdWUgPyBmdW5jdGlvbihpLCBqKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXNbal0gLSB2YWx1ZXNbaV07XG4gICAgICB9IDogZnVuY3Rpb24oaSwgaikge1xuICAgICAgICByZXR1cm4gc29ydChkYXRhW2ldLCBkYXRhW2pdKTtcbiAgICAgIH0pO1xuICAgICAgaW5kZXguZm9yRWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgIGFyY3NbaV0gPSB7XG4gICAgICAgICAgZGF0YTogZGF0YVtpXSxcbiAgICAgICAgICB2YWx1ZTogdiA9IHZhbHVlc1tpXSxcbiAgICAgICAgICBzdGFydEFuZ2xlOiBhLFxuICAgICAgICAgIGVuZEFuZ2xlOiBhICs9IHYgKiBrICsgcGEsXG4gICAgICAgICAgcGFkQW5nbGU6IHBcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFyY3M7XG4gICAgfVxuICAgIHBpZS52YWx1ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHZhbHVlO1xuICAgICAgdmFsdWUgPSBfO1xuICAgICAgcmV0dXJuIHBpZTtcbiAgICB9O1xuICAgIHBpZS5zb3J0ID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc29ydDtcbiAgICAgIHNvcnQgPSBfO1xuICAgICAgcmV0dXJuIHBpZTtcbiAgICB9O1xuICAgIHBpZS5zdGFydEFuZ2xlID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc3RhcnRBbmdsZTtcbiAgICAgIHN0YXJ0QW5nbGUgPSBfO1xuICAgICAgcmV0dXJuIHBpZTtcbiAgICB9O1xuICAgIHBpZS5lbmRBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGVuZEFuZ2xlO1xuICAgICAgZW5kQW5nbGUgPSBfO1xuICAgICAgcmV0dXJuIHBpZTtcbiAgICB9O1xuICAgIHBpZS5wYWRBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHBhZEFuZ2xlO1xuICAgICAgcGFkQW5nbGUgPSBfO1xuICAgICAgcmV0dXJuIHBpZTtcbiAgICB9O1xuICAgIHJldHVybiBwaWU7XG4gIH07XG4gIHZhciBkM19sYXlvdXRfcGllU29ydEJ5VmFsdWUgPSB7fTtcbiAgZDMubGF5b3V0LnN0YWNrID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlcyA9IGQzX2lkZW50aXR5LCBvcmRlciA9IGQzX2xheW91dF9zdGFja09yZGVyRGVmYXVsdCwgb2Zmc2V0ID0gZDNfbGF5b3V0X3N0YWNrT2Zmc2V0WmVybywgb3V0ID0gZDNfbGF5b3V0X3N0YWNrT3V0LCB4ID0gZDNfbGF5b3V0X3N0YWNrWCwgeSA9IGQzX2xheW91dF9zdGFja1k7XG4gICAgZnVuY3Rpb24gc3RhY2soZGF0YSwgaW5kZXgpIHtcbiAgICAgIGlmICghKG4gPSBkYXRhLmxlbmd0aCkpIHJldHVybiBkYXRhO1xuICAgICAgdmFyIHNlcmllcyA9IGRhdGEubWFwKGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5jYWxsKHN0YWNrLCBkLCBpKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHBvaW50cyA9IHNlcmllcy5tYXAoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC5tYXAoZnVuY3Rpb24odiwgaSkge1xuICAgICAgICAgIHJldHVybiBbIHguY2FsbChzdGFjaywgdiwgaSksIHkuY2FsbChzdGFjaywgdiwgaSkgXTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBvcmRlcnMgPSBvcmRlci5jYWxsKHN0YWNrLCBwb2ludHMsIGluZGV4KTtcbiAgICAgIHNlcmllcyA9IGQzLnBlcm11dGUoc2VyaWVzLCBvcmRlcnMpO1xuICAgICAgcG9pbnRzID0gZDMucGVybXV0ZShwb2ludHMsIG9yZGVycyk7XG4gICAgICB2YXIgb2Zmc2V0cyA9IG9mZnNldC5jYWxsKHN0YWNrLCBwb2ludHMsIGluZGV4KTtcbiAgICAgIHZhciBtID0gc2VyaWVzWzBdLmxlbmd0aCwgbiwgaSwgaiwgbztcbiAgICAgIGZvciAoaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICAgICAgb3V0LmNhbGwoc3RhY2ssIHNlcmllc1swXVtqXSwgbyA9IG9mZnNldHNbal0sIHBvaW50c1swXVtqXVsxXSk7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICBvdXQuY2FsbChzdGFjaywgc2VyaWVzW2ldW2pdLCBvICs9IHBvaW50c1tpIC0gMV1bal1bMV0sIHBvaW50c1tpXVtqXVsxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBzdGFjay52YWx1ZXMgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB2YWx1ZXM7XG4gICAgICB2YWx1ZXMgPSB4O1xuICAgICAgcmV0dXJuIHN0YWNrO1xuICAgIH07XG4gICAgc3RhY2sub3JkZXIgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBvcmRlcjtcbiAgICAgIG9yZGVyID0gdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIiA/IHggOiBkM19sYXlvdXRfc3RhY2tPcmRlcnMuZ2V0KHgpIHx8IGQzX2xheW91dF9zdGFja09yZGVyRGVmYXVsdDtcbiAgICAgIHJldHVybiBzdGFjaztcbiAgICB9O1xuICAgIHN0YWNrLm9mZnNldCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIG9mZnNldDtcbiAgICAgIG9mZnNldCA9IHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCIgPyB4IDogZDNfbGF5b3V0X3N0YWNrT2Zmc2V0cy5nZXQoeCkgfHwgZDNfbGF5b3V0X3N0YWNrT2Zmc2V0WmVybztcbiAgICAgIHJldHVybiBzdGFjaztcbiAgICB9O1xuICAgIHN0YWNrLnggPSBmdW5jdGlvbih6KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB4O1xuICAgICAgeCA9IHo7XG4gICAgICByZXR1cm4gc3RhY2s7XG4gICAgfTtcbiAgICBzdGFjay55ID0gZnVuY3Rpb24oeikge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4geTtcbiAgICAgIHkgPSB6O1xuICAgICAgcmV0dXJuIHN0YWNrO1xuICAgIH07XG4gICAgc3RhY2sub3V0ID0gZnVuY3Rpb24oeikge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gb3V0O1xuICAgICAgb3V0ID0gejtcbiAgICAgIHJldHVybiBzdGFjaztcbiAgICB9O1xuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3N0YWNrWChkKSB7XG4gICAgcmV0dXJuIGQueDtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfc3RhY2tZKGQpIHtcbiAgICByZXR1cm4gZC55O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9zdGFja091dChkLCB5MCwgeSkge1xuICAgIGQueTAgPSB5MDtcbiAgICBkLnkgPSB5O1xuICB9XG4gIHZhciBkM19sYXlvdXRfc3RhY2tPcmRlcnMgPSBkMy5tYXAoe1xuICAgIFwiaW5zaWRlLW91dFwiOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB2YXIgbiA9IGRhdGEubGVuZ3RoLCBpLCBqLCBtYXggPSBkYXRhLm1hcChkM19sYXlvdXRfc3RhY2tNYXhJbmRleCksIHN1bXMgPSBkYXRhLm1hcChkM19sYXlvdXRfc3RhY2tSZWR1Y2VTdW0pLCBpbmRleCA9IGQzLnJhbmdlKG4pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gbWF4W2FdIC0gbWF4W2JdO1xuICAgICAgfSksIHRvcCA9IDAsIGJvdHRvbSA9IDAsIHRvcHMgPSBbXSwgYm90dG9tcyA9IFtdO1xuICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICBqID0gaW5kZXhbaV07XG4gICAgICAgIGlmICh0b3AgPCBib3R0b20pIHtcbiAgICAgICAgICB0b3AgKz0gc3Vtc1tqXTtcbiAgICAgICAgICB0b3BzLnB1c2goaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYm90dG9tICs9IHN1bXNbal07XG4gICAgICAgICAgYm90dG9tcy5wdXNoKGopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYm90dG9tcy5yZXZlcnNlKCkuY29uY2F0KHRvcHMpO1xuICAgIH0sXG4gICAgcmV2ZXJzZTogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcmV0dXJuIGQzLnJhbmdlKGRhdGEubGVuZ3RoKS5yZXZlcnNlKCk7XG4gICAgfSxcbiAgICBcImRlZmF1bHRcIjogZDNfbGF5b3V0X3N0YWNrT3JkZXJEZWZhdWx0XG4gIH0pO1xuICB2YXIgZDNfbGF5b3V0X3N0YWNrT2Zmc2V0cyA9IGQzLm1hcCh7XG4gICAgc2lsaG91ZXR0ZTogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdmFyIG4gPSBkYXRhLmxlbmd0aCwgbSA9IGRhdGFbMF0ubGVuZ3RoLCBzdW1zID0gW10sIG1heCA9IDAsIGksIGosIG8sIHkwID0gW107XG4gICAgICBmb3IgKGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgICAgIGZvciAoaSA9IDAsIG8gPSAwOyBpIDwgbjsgaSsrKSBvICs9IGRhdGFbaV1bal1bMV07XG4gICAgICAgIGlmIChvID4gbWF4KSBtYXggPSBvO1xuICAgICAgICBzdW1zLnB1c2gobyk7XG4gICAgICB9XG4gICAgICBmb3IgKGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgICAgIHkwW2pdID0gKG1heCAtIHN1bXNbal0pIC8gMjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB5MDtcbiAgICB9LFxuICAgIHdpZ2dsZTogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdmFyIG4gPSBkYXRhLmxlbmd0aCwgeCA9IGRhdGFbMF0sIG0gPSB4Lmxlbmd0aCwgaSwgaiwgaywgczEsIHMyLCBzMywgZHgsIG8sIG8wLCB5MCA9IFtdO1xuICAgICAgeTBbMF0gPSBvID0gbzAgPSAwO1xuICAgICAgZm9yIChqID0gMTsgaiA8IG07ICsraikge1xuICAgICAgICBmb3IgKGkgPSAwLCBzMSA9IDA7IGkgPCBuOyArK2kpIHMxICs9IGRhdGFbaV1bal1bMV07XG4gICAgICAgIGZvciAoaSA9IDAsIHMyID0gMCwgZHggPSB4W2pdWzBdIC0geFtqIC0gMV1bMF07IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICBmb3IgKGsgPSAwLCBzMyA9IChkYXRhW2ldW2pdWzFdIC0gZGF0YVtpXVtqIC0gMV1bMV0pIC8gKDIgKiBkeCk7IGsgPCBpOyArK2spIHtcbiAgICAgICAgICAgIHMzICs9IChkYXRhW2tdW2pdWzFdIC0gZGF0YVtrXVtqIC0gMV1bMV0pIC8gZHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHMyICs9IHMzICogZGF0YVtpXVtqXVsxXTtcbiAgICAgICAgfVxuICAgICAgICB5MFtqXSA9IG8gLT0gczEgPyBzMiAvIHMxICogZHggOiAwO1xuICAgICAgICBpZiAobyA8IG8wKSBvMCA9IG87XG4gICAgICB9XG4gICAgICBmb3IgKGogPSAwOyBqIDwgbTsgKytqKSB5MFtqXSAtPSBvMDtcbiAgICAgIHJldHVybiB5MDtcbiAgICB9LFxuICAgIGV4cGFuZDogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdmFyIG4gPSBkYXRhLmxlbmd0aCwgbSA9IGRhdGFbMF0ubGVuZ3RoLCBrID0gMSAvIG4sIGksIGosIG8sIHkwID0gW107XG4gICAgICBmb3IgKGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgICAgIGZvciAoaSA9IDAsIG8gPSAwOyBpIDwgbjsgaSsrKSBvICs9IGRhdGFbaV1bal1bMV07XG4gICAgICAgIGlmIChvKSBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSBkYXRhW2ldW2pdWzFdIC89IG87IGVsc2UgZm9yIChpID0gMDsgaSA8IG47IGkrKykgZGF0YVtpXVtqXVsxXSA9IGs7XG4gICAgICB9XG4gICAgICBmb3IgKGogPSAwOyBqIDwgbTsgKytqKSB5MFtqXSA9IDA7XG4gICAgICByZXR1cm4geTA7XG4gICAgfSxcbiAgICB6ZXJvOiBkM19sYXlvdXRfc3RhY2tPZmZzZXRaZXJvXG4gIH0pO1xuICBmdW5jdGlvbiBkM19sYXlvdXRfc3RhY2tPcmRlckRlZmF1bHQoZGF0YSkge1xuICAgIHJldHVybiBkMy5yYW5nZShkYXRhLmxlbmd0aCk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3N0YWNrT2Zmc2V0WmVybyhkYXRhKSB7XG4gICAgdmFyIGogPSAtMSwgbSA9IGRhdGFbMF0ubGVuZ3RoLCB5MCA9IFtdO1xuICAgIHdoaWxlICgrK2ogPCBtKSB5MFtqXSA9IDA7XG4gICAgcmV0dXJuIHkwO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9zdGFja01heEluZGV4KGFycmF5KSB7XG4gICAgdmFyIGkgPSAxLCBqID0gMCwgdiA9IGFycmF5WzBdWzFdLCBrLCBuID0gYXJyYXkubGVuZ3RoO1xuICAgIGZvciAoO2kgPCBuOyArK2kpIHtcbiAgICAgIGlmICgoayA9IGFycmF5W2ldWzFdKSA+IHYpIHtcbiAgICAgICAgaiA9IGk7XG4gICAgICAgIHYgPSBrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gajtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfc3RhY2tSZWR1Y2VTdW0oZCkge1xuICAgIHJldHVybiBkLnJlZHVjZShkM19sYXlvdXRfc3RhY2tTdW0sIDApO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9zdGFja1N1bShwLCBkKSB7XG4gICAgcmV0dXJuIHAgKyBkWzFdO1xuICB9XG4gIGQzLmxheW91dC5oaXN0b2dyYW0gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZnJlcXVlbmN5ID0gdHJ1ZSwgdmFsdWVyID0gTnVtYmVyLCByYW5nZXIgPSBkM19sYXlvdXRfaGlzdG9ncmFtUmFuZ2UsIGJpbm5lciA9IGQzX2xheW91dF9oaXN0b2dyYW1CaW5TdHVyZ2VzO1xuICAgIGZ1bmN0aW9uIGhpc3RvZ3JhbShkYXRhLCBpKSB7XG4gICAgICB2YXIgYmlucyA9IFtdLCB2YWx1ZXMgPSBkYXRhLm1hcCh2YWx1ZXIsIHRoaXMpLCByYW5nZSA9IHJhbmdlci5jYWxsKHRoaXMsIHZhbHVlcywgaSksIHRocmVzaG9sZHMgPSBiaW5uZXIuY2FsbCh0aGlzLCByYW5nZSwgdmFsdWVzLCBpKSwgYmluLCBpID0gLTEsIG4gPSB2YWx1ZXMubGVuZ3RoLCBtID0gdGhyZXNob2xkcy5sZW5ndGggLSAxLCBrID0gZnJlcXVlbmN5ID8gMSA6IDEgLyBuLCB4O1xuICAgICAgd2hpbGUgKCsraSA8IG0pIHtcbiAgICAgICAgYmluID0gYmluc1tpXSA9IFtdO1xuICAgICAgICBiaW4uZHggPSB0aHJlc2hvbGRzW2kgKyAxXSAtIChiaW4ueCA9IHRocmVzaG9sZHNbaV0pO1xuICAgICAgICBiaW4ueSA9IDA7XG4gICAgICB9XG4gICAgICBpZiAobSA+IDApIHtcbiAgICAgICAgaSA9IC0xO1xuICAgICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICAgIHggPSB2YWx1ZXNbaV07XG4gICAgICAgICAgaWYgKHggPj0gcmFuZ2VbMF0gJiYgeCA8PSByYW5nZVsxXSkge1xuICAgICAgICAgICAgYmluID0gYmluc1tkMy5iaXNlY3QodGhyZXNob2xkcywgeCwgMSwgbSkgLSAxXTtcbiAgICAgICAgICAgIGJpbi55ICs9IGs7XG4gICAgICAgICAgICBiaW4ucHVzaChkYXRhW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBiaW5zO1xuICAgIH1cbiAgICBoaXN0b2dyYW0udmFsdWUgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB2YWx1ZXI7XG4gICAgICB2YWx1ZXIgPSB4O1xuICAgICAgcmV0dXJuIGhpc3RvZ3JhbTtcbiAgICB9O1xuICAgIGhpc3RvZ3JhbS5yYW5nZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHJhbmdlcjtcbiAgICAgIHJhbmdlciA9IGQzX2Z1bmN0b3IoeCk7XG4gICAgICByZXR1cm4gaGlzdG9ncmFtO1xuICAgIH07XG4gICAgaGlzdG9ncmFtLmJpbnMgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBiaW5uZXI7XG4gICAgICBiaW5uZXIgPSB0eXBlb2YgeCA9PT0gXCJudW1iZXJcIiA/IGZ1bmN0aW9uKHJhbmdlKSB7XG4gICAgICAgIHJldHVybiBkM19sYXlvdXRfaGlzdG9ncmFtQmluRml4ZWQocmFuZ2UsIHgpO1xuICAgICAgfSA6IGQzX2Z1bmN0b3IoeCk7XG4gICAgICByZXR1cm4gaGlzdG9ncmFtO1xuICAgIH07XG4gICAgaGlzdG9ncmFtLmZyZXF1ZW5jeSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGZyZXF1ZW5jeTtcbiAgICAgIGZyZXF1ZW5jeSA9ICEheDtcbiAgICAgIHJldHVybiBoaXN0b2dyYW07XG4gICAgfTtcbiAgICByZXR1cm4gaGlzdG9ncmFtO1xuICB9O1xuICBmdW5jdGlvbiBkM19sYXlvdXRfaGlzdG9ncmFtQmluU3R1cmdlcyhyYW5nZSwgdmFsdWVzKSB7XG4gICAgcmV0dXJuIGQzX2xheW91dF9oaXN0b2dyYW1CaW5GaXhlZChyYW5nZSwgTWF0aC5jZWlsKE1hdGgubG9nKHZhbHVlcy5sZW5ndGgpIC8gTWF0aC5MTjIgKyAxKSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X2hpc3RvZ3JhbUJpbkZpeGVkKHJhbmdlLCBuKSB7XG4gICAgdmFyIHggPSAtMSwgYiA9ICtyYW5nZVswXSwgbSA9IChyYW5nZVsxXSAtIGIpIC8gbiwgZiA9IFtdO1xuICAgIHdoaWxlICgrK3ggPD0gbikgZlt4XSA9IG0gKiB4ICsgYjtcbiAgICByZXR1cm4gZjtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfaGlzdG9ncmFtUmFuZ2UodmFsdWVzKSB7XG4gICAgcmV0dXJuIFsgZDMubWluKHZhbHVlcyksIGQzLm1heCh2YWx1ZXMpIF07XG4gIH1cbiAgZDMubGF5b3V0LnBhY2sgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaGllcmFyY2h5ID0gZDMubGF5b3V0LmhpZXJhcmNoeSgpLnNvcnQoZDNfbGF5b3V0X3BhY2tTb3J0KSwgcGFkZGluZyA9IDAsIHNpemUgPSBbIDEsIDEgXSwgcmFkaXVzO1xuICAgIGZ1bmN0aW9uIHBhY2soZCwgaSkge1xuICAgICAgdmFyIG5vZGVzID0gaGllcmFyY2h5LmNhbGwodGhpcywgZCwgaSksIHJvb3QgPSBub2Rlc1swXSwgdyA9IHNpemVbMF0sIGggPSBzaXplWzFdLCByID0gcmFkaXVzID09IG51bGwgPyBNYXRoLnNxcnQgOiB0eXBlb2YgcmFkaXVzID09PSBcImZ1bmN0aW9uXCIgPyByYWRpdXMgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJhZGl1cztcbiAgICAgIH07XG4gICAgICByb290LnggPSByb290LnkgPSAwO1xuICAgICAgZDNfbGF5b3V0X2hpZXJhcmNoeVZpc2l0QWZ0ZXIocm9vdCwgZnVuY3Rpb24oZCkge1xuICAgICAgICBkLnIgPSArcihkLnZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgZDNfbGF5b3V0X2hpZXJhcmNoeVZpc2l0QWZ0ZXIocm9vdCwgZDNfbGF5b3V0X3BhY2tTaWJsaW5ncyk7XG4gICAgICBpZiAocGFkZGluZykge1xuICAgICAgICB2YXIgZHIgPSBwYWRkaW5nICogKHJhZGl1cyA/IDEgOiBNYXRoLm1heCgyICogcm9vdC5yIC8gdywgMiAqIHJvb3QuciAvIGgpKSAvIDI7XG4gICAgICAgIGQzX2xheW91dF9oaWVyYXJjaHlWaXNpdEFmdGVyKHJvb3QsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkLnIgKz0gZHI7XG4gICAgICAgIH0pO1xuICAgICAgICBkM19sYXlvdXRfaGllcmFyY2h5VmlzaXRBZnRlcihyb290LCBkM19sYXlvdXRfcGFja1NpYmxpbmdzKTtcbiAgICAgICAgZDNfbGF5b3V0X2hpZXJhcmNoeVZpc2l0QWZ0ZXIocm9vdCwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQuciAtPSBkcjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBkM19sYXlvdXRfcGFja1RyYW5zZm9ybShyb290LCB3IC8gMiwgaCAvIDIsIHJhZGl1cyA/IDEgOiAxIC8gTWF0aC5tYXgoMiAqIHJvb3QuciAvIHcsIDIgKiByb290LnIgLyBoKSk7XG4gICAgICByZXR1cm4gbm9kZXM7XG4gICAgfVxuICAgIHBhY2suc2l6ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHNpemU7XG4gICAgICBzaXplID0gXztcbiAgICAgIHJldHVybiBwYWNrO1xuICAgIH07XG4gICAgcGFjay5yYWRpdXMgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiByYWRpdXM7XG4gICAgICByYWRpdXMgPSBfID09IG51bGwgfHwgdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiArXztcbiAgICAgIHJldHVybiBwYWNrO1xuICAgIH07XG4gICAgcGFjay5wYWRkaW5nID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcGFkZGluZztcbiAgICAgIHBhZGRpbmcgPSArXztcbiAgICAgIHJldHVybiBwYWNrO1xuICAgIH07XG4gICAgcmV0dXJuIGQzX2xheW91dF9oaWVyYXJjaHlSZWJpbmQocGFjaywgaGllcmFyY2h5KTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3BhY2tTb3J0KGEsIGIpIHtcbiAgICByZXR1cm4gYS52YWx1ZSAtIGIudmFsdWU7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3BhY2tJbnNlcnQoYSwgYikge1xuICAgIHZhciBjID0gYS5fcGFja19uZXh0O1xuICAgIGEuX3BhY2tfbmV4dCA9IGI7XG4gICAgYi5fcGFja19wcmV2ID0gYTtcbiAgICBiLl9wYWNrX25leHQgPSBjO1xuICAgIGMuX3BhY2tfcHJldiA9IGI7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3BhY2tTcGxpY2UoYSwgYikge1xuICAgIGEuX3BhY2tfbmV4dCA9IGI7XG4gICAgYi5fcGFja19wcmV2ID0gYTtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfcGFja0ludGVyc2VjdHMoYSwgYikge1xuICAgIHZhciBkeCA9IGIueCAtIGEueCwgZHkgPSBiLnkgLSBhLnksIGRyID0gYS5yICsgYi5yO1xuICAgIHJldHVybiAuOTk5ICogZHIgKiBkciA+IGR4ICogZHggKyBkeSAqIGR5O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9wYWNrU2libGluZ3Mobm9kZSkge1xuICAgIGlmICghKG5vZGVzID0gbm9kZS5jaGlsZHJlbikgfHwgIShuID0gbm9kZXMubGVuZ3RoKSkgcmV0dXJuO1xuICAgIHZhciBub2RlcywgeE1pbiA9IEluZmluaXR5LCB4TWF4ID0gLUluZmluaXR5LCB5TWluID0gSW5maW5pdHksIHlNYXggPSAtSW5maW5pdHksIGEsIGIsIGMsIGksIGosIGssIG47XG4gICAgZnVuY3Rpb24gYm91bmQobm9kZSkge1xuICAgICAgeE1pbiA9IE1hdGgubWluKG5vZGUueCAtIG5vZGUuciwgeE1pbik7XG4gICAgICB4TWF4ID0gTWF0aC5tYXgobm9kZS54ICsgbm9kZS5yLCB4TWF4KTtcbiAgICAgIHlNaW4gPSBNYXRoLm1pbihub2RlLnkgLSBub2RlLnIsIHlNaW4pO1xuICAgICAgeU1heCA9IE1hdGgubWF4KG5vZGUueSArIG5vZGUuciwgeU1heCk7XG4gICAgfVxuICAgIG5vZGVzLmZvckVhY2goZDNfbGF5b3V0X3BhY2tMaW5rKTtcbiAgICBhID0gbm9kZXNbMF07XG4gICAgYS54ID0gLWEucjtcbiAgICBhLnkgPSAwO1xuICAgIGJvdW5kKGEpO1xuICAgIGlmIChuID4gMSkge1xuICAgICAgYiA9IG5vZGVzWzFdO1xuICAgICAgYi54ID0gYi5yO1xuICAgICAgYi55ID0gMDtcbiAgICAgIGJvdW5kKGIpO1xuICAgICAgaWYgKG4gPiAyKSB7XG4gICAgICAgIGMgPSBub2Rlc1syXTtcbiAgICAgICAgZDNfbGF5b3V0X3BhY2tQbGFjZShhLCBiLCBjKTtcbiAgICAgICAgYm91bmQoYyk7XG4gICAgICAgIGQzX2xheW91dF9wYWNrSW5zZXJ0KGEsIGMpO1xuICAgICAgICBhLl9wYWNrX3ByZXYgPSBjO1xuICAgICAgICBkM19sYXlvdXRfcGFja0luc2VydChjLCBiKTtcbiAgICAgICAgYiA9IGEuX3BhY2tfbmV4dDtcbiAgICAgICAgZm9yIChpID0gMzsgaSA8IG47IGkrKykge1xuICAgICAgICAgIGQzX2xheW91dF9wYWNrUGxhY2UoYSwgYiwgYyA9IG5vZGVzW2ldKTtcbiAgICAgICAgICB2YXIgaXNlY3QgPSAwLCBzMSA9IDEsIHMyID0gMTtcbiAgICAgICAgICBmb3IgKGogPSBiLl9wYWNrX25leHQ7IGogIT09IGI7IGogPSBqLl9wYWNrX25leHQsIHMxKyspIHtcbiAgICAgICAgICAgIGlmIChkM19sYXlvdXRfcGFja0ludGVyc2VjdHMoaiwgYykpIHtcbiAgICAgICAgICAgICAgaXNlY3QgPSAxO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzZWN0ID09IDEpIHtcbiAgICAgICAgICAgIGZvciAoayA9IGEuX3BhY2tfcHJldjsgayAhPT0gai5fcGFja19wcmV2OyBrID0gay5fcGFja19wcmV2LCBzMisrKSB7XG4gICAgICAgICAgICAgIGlmIChkM19sYXlvdXRfcGFja0ludGVyc2VjdHMoaywgYykpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNlY3QpIHtcbiAgICAgICAgICAgIGlmIChzMSA8IHMyIHx8IHMxID09IHMyICYmIGIuciA8IGEucikgZDNfbGF5b3V0X3BhY2tTcGxpY2UoYSwgYiA9IGopOyBlbHNlIGQzX2xheW91dF9wYWNrU3BsaWNlKGEgPSBrLCBiKTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZDNfbGF5b3V0X3BhY2tJbnNlcnQoYSwgYyk7XG4gICAgICAgICAgICBiID0gYztcbiAgICAgICAgICAgIGJvdW5kKGMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgY3ggPSAoeE1pbiArIHhNYXgpIC8gMiwgY3kgPSAoeU1pbiArIHlNYXgpIC8gMiwgY3IgPSAwO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGMgPSBub2Rlc1tpXTtcbiAgICAgIGMueCAtPSBjeDtcbiAgICAgIGMueSAtPSBjeTtcbiAgICAgIGNyID0gTWF0aC5tYXgoY3IsIGMuciArIE1hdGguc3FydChjLnggKiBjLnggKyBjLnkgKiBjLnkpKTtcbiAgICB9XG4gICAgbm9kZS5yID0gY3I7XG4gICAgbm9kZXMuZm9yRWFjaChkM19sYXlvdXRfcGFja1VubGluayk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3BhY2tMaW5rKG5vZGUpIHtcbiAgICBub2RlLl9wYWNrX25leHQgPSBub2RlLl9wYWNrX3ByZXYgPSBub2RlO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9wYWNrVW5saW5rKG5vZGUpIHtcbiAgICBkZWxldGUgbm9kZS5fcGFja19uZXh0O1xuICAgIGRlbGV0ZSBub2RlLl9wYWNrX3ByZXY7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3BhY2tUcmFuc2Zvcm0obm9kZSwgeCwgeSwgaykge1xuICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgbm9kZS54ID0geCArPSBrICogbm9kZS54O1xuICAgIG5vZGUueSA9IHkgKz0gayAqIG5vZGUueTtcbiAgICBub2RlLnIgKj0gaztcbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIHZhciBpID0gLTEsIG4gPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICB3aGlsZSAoKytpIDwgbikgZDNfbGF5b3V0X3BhY2tUcmFuc2Zvcm0oY2hpbGRyZW5baV0sIHgsIHksIGspO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfcGFja1BsYWNlKGEsIGIsIGMpIHtcbiAgICB2YXIgZGIgPSBhLnIgKyBjLnIsIGR4ID0gYi54IC0gYS54LCBkeSA9IGIueSAtIGEueTtcbiAgICBpZiAoZGIgJiYgKGR4IHx8IGR5KSkge1xuICAgICAgdmFyIGRhID0gYi5yICsgYy5yLCBkYyA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgZGEgKj0gZGE7XG4gICAgICBkYiAqPSBkYjtcbiAgICAgIHZhciB4ID0gLjUgKyAoZGIgLSBkYSkgLyAoMiAqIGRjKSwgeSA9IE1hdGguc3FydChNYXRoLm1heCgwLCAyICogZGEgKiAoZGIgKyBkYykgLSAoZGIgLT0gZGMpICogZGIgLSBkYSAqIGRhKSkgLyAoMiAqIGRjKTtcbiAgICAgIGMueCA9IGEueCArIHggKiBkeCArIHkgKiBkeTtcbiAgICAgIGMueSA9IGEueSArIHggKiBkeSAtIHkgKiBkeDtcbiAgICB9IGVsc2Uge1xuICAgICAgYy54ID0gYS54ICsgZGI7XG4gICAgICBjLnkgPSBhLnk7XG4gICAgfVxuICB9XG4gIGQzLmxheW91dC50cmVlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGhpZXJhcmNoeSA9IGQzLmxheW91dC5oaWVyYXJjaHkoKS5zb3J0KG51bGwpLnZhbHVlKG51bGwpLCBzZXBhcmF0aW9uID0gZDNfbGF5b3V0X3RyZWVTZXBhcmF0aW9uLCBzaXplID0gWyAxLCAxIF0sIG5vZGVTaXplID0gbnVsbDtcbiAgICBmdW5jdGlvbiB0cmVlKGQsIGkpIHtcbiAgICAgIHZhciBub2RlcyA9IGhpZXJhcmNoeS5jYWxsKHRoaXMsIGQsIGkpLCByb290MCA9IG5vZGVzWzBdLCByb290MSA9IHdyYXBUcmVlKHJvb3QwKTtcbiAgICAgIGQzX2xheW91dF9oaWVyYXJjaHlWaXNpdEFmdGVyKHJvb3QxLCBmaXJzdFdhbGspLCByb290MS5wYXJlbnQubSA9IC1yb290MS56O1xuICAgICAgZDNfbGF5b3V0X2hpZXJhcmNoeVZpc2l0QmVmb3JlKHJvb3QxLCBzZWNvbmRXYWxrKTtcbiAgICAgIGlmIChub2RlU2l6ZSkgZDNfbGF5b3V0X2hpZXJhcmNoeVZpc2l0QmVmb3JlKHJvb3QwLCBzaXplTm9kZSk7IGVsc2Uge1xuICAgICAgICB2YXIgbGVmdCA9IHJvb3QwLCByaWdodCA9IHJvb3QwLCBib3R0b20gPSByb290MDtcbiAgICAgICAgZDNfbGF5b3V0X2hpZXJhcmNoeVZpc2l0QmVmb3JlKHJvb3QwLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgaWYgKG5vZGUueCA8IGxlZnQueCkgbGVmdCA9IG5vZGU7XG4gICAgICAgICAgaWYgKG5vZGUueCA+IHJpZ2h0LngpIHJpZ2h0ID0gbm9kZTtcbiAgICAgICAgICBpZiAobm9kZS5kZXB0aCA+IGJvdHRvbS5kZXB0aCkgYm90dG9tID0gbm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0eCA9IHNlcGFyYXRpb24obGVmdCwgcmlnaHQpIC8gMiAtIGxlZnQueCwga3ggPSBzaXplWzBdIC8gKHJpZ2h0LnggKyBzZXBhcmF0aW9uKHJpZ2h0LCBsZWZ0KSAvIDIgKyB0eCksIGt5ID0gc2l6ZVsxXSAvIChib3R0b20uZGVwdGggfHwgMSk7XG4gICAgICAgIGQzX2xheW91dF9oaWVyYXJjaHlWaXNpdEJlZm9yZShyb290MCwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgIG5vZGUueCA9IChub2RlLnggKyB0eCkgKiBreDtcbiAgICAgICAgICBub2RlLnkgPSBub2RlLmRlcHRoICoga3k7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGVzO1xuICAgIH1cbiAgICBmdW5jdGlvbiB3cmFwVHJlZShyb290MCkge1xuICAgICAgdmFyIHJvb3QxID0ge1xuICAgICAgICBBOiBudWxsLFxuICAgICAgICBjaGlsZHJlbjogWyByb290MCBdXG4gICAgICB9LCBxdWV1ZSA9IFsgcm9vdDEgXSwgbm9kZTE7XG4gICAgICB3aGlsZSAoKG5vZGUxID0gcXVldWUucG9wKCkpICE9IG51bGwpIHtcbiAgICAgICAgZm9yICh2YXIgY2hpbGRyZW4gPSBub2RlMS5jaGlsZHJlbiwgY2hpbGQsIGkgPSAwLCBuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgcXVldWUucHVzaCgoY2hpbGRyZW5baV0gPSBjaGlsZCA9IHtcbiAgICAgICAgICAgIF86IGNoaWxkcmVuW2ldLFxuICAgICAgICAgICAgcGFyZW50OiBub2RlMSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiAoY2hpbGQgPSBjaGlsZHJlbltpXS5jaGlsZHJlbikgJiYgY2hpbGQuc2xpY2UoKSB8fCBbXSxcbiAgICAgICAgICAgIEE6IG51bGwsXG4gICAgICAgICAgICBhOiBudWxsLFxuICAgICAgICAgICAgejogMCxcbiAgICAgICAgICAgIG06IDAsXG4gICAgICAgICAgICBjOiAwLFxuICAgICAgICAgICAgczogMCxcbiAgICAgICAgICAgIHQ6IG51bGwsXG4gICAgICAgICAgICBpOiBpXG4gICAgICAgICAgfSkuYSA9IGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvb3QxLmNoaWxkcmVuWzBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmaXJzdFdhbGsodikge1xuICAgICAgdmFyIGNoaWxkcmVuID0gdi5jaGlsZHJlbiwgc2libGluZ3MgPSB2LnBhcmVudC5jaGlsZHJlbiwgdyA9IHYuaSA/IHNpYmxpbmdzW3YuaSAtIDFdIDogbnVsbDtcbiAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgZDNfbGF5b3V0X3RyZWVTaGlmdCh2KTtcbiAgICAgICAgdmFyIG1pZHBvaW50ID0gKGNoaWxkcmVuWzBdLnogKyBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXS56KSAvIDI7XG4gICAgICAgIGlmICh3KSB7XG4gICAgICAgICAgdi56ID0gdy56ICsgc2VwYXJhdGlvbih2Ll8sIHcuXyk7XG4gICAgICAgICAgdi5tID0gdi56IC0gbWlkcG9pbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdi56ID0gbWlkcG9pbnQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodykge1xuICAgICAgICB2LnogPSB3LnogKyBzZXBhcmF0aW9uKHYuXywgdy5fKTtcbiAgICAgIH1cbiAgICAgIHYucGFyZW50LkEgPSBhcHBvcnRpb24odiwgdywgdi5wYXJlbnQuQSB8fCBzaWJsaW5nc1swXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNlY29uZFdhbGsodikge1xuICAgICAgdi5fLnggPSB2LnogKyB2LnBhcmVudC5tO1xuICAgICAgdi5tICs9IHYucGFyZW50Lm07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcG9ydGlvbih2LCB3LCBhbmNlc3Rvcikge1xuICAgICAgaWYgKHcpIHtcbiAgICAgICAgdmFyIHZpcCA9IHYsIHZvcCA9IHYsIHZpbSA9IHcsIHZvbSA9IHZpcC5wYXJlbnQuY2hpbGRyZW5bMF0sIHNpcCA9IHZpcC5tLCBzb3AgPSB2b3AubSwgc2ltID0gdmltLm0sIHNvbSA9IHZvbS5tLCBzaGlmdDtcbiAgICAgICAgd2hpbGUgKHZpbSA9IGQzX2xheW91dF90cmVlUmlnaHQodmltKSwgdmlwID0gZDNfbGF5b3V0X3RyZWVMZWZ0KHZpcCksIHZpbSAmJiB2aXApIHtcbiAgICAgICAgICB2b20gPSBkM19sYXlvdXRfdHJlZUxlZnQodm9tKTtcbiAgICAgICAgICB2b3AgPSBkM19sYXlvdXRfdHJlZVJpZ2h0KHZvcCk7XG4gICAgICAgICAgdm9wLmEgPSB2O1xuICAgICAgICAgIHNoaWZ0ID0gdmltLnogKyBzaW0gLSB2aXAueiAtIHNpcCArIHNlcGFyYXRpb24odmltLl8sIHZpcC5fKTtcbiAgICAgICAgICBpZiAoc2hpZnQgPiAwKSB7XG4gICAgICAgICAgICBkM19sYXlvdXRfdHJlZU1vdmUoZDNfbGF5b3V0X3RyZWVBbmNlc3Rvcih2aW0sIHYsIGFuY2VzdG9yKSwgdiwgc2hpZnQpO1xuICAgICAgICAgICAgc2lwICs9IHNoaWZ0O1xuICAgICAgICAgICAgc29wICs9IHNoaWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzaW0gKz0gdmltLm07XG4gICAgICAgICAgc2lwICs9IHZpcC5tO1xuICAgICAgICAgIHNvbSArPSB2b20ubTtcbiAgICAgICAgICBzb3AgKz0gdm9wLm07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpbSAmJiAhZDNfbGF5b3V0X3RyZWVSaWdodCh2b3ApKSB7XG4gICAgICAgICAgdm9wLnQgPSB2aW07XG4gICAgICAgICAgdm9wLm0gKz0gc2ltIC0gc29wO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2aXAgJiYgIWQzX2xheW91dF90cmVlTGVmdCh2b20pKSB7XG4gICAgICAgICAgdm9tLnQgPSB2aXA7XG4gICAgICAgICAgdm9tLm0gKz0gc2lwIC0gc29tO1xuICAgICAgICAgIGFuY2VzdG9yID0gdjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFuY2VzdG9yO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzaXplTm9kZShub2RlKSB7XG4gICAgICBub2RlLnggKj0gc2l6ZVswXTtcbiAgICAgIG5vZGUueSA9IG5vZGUuZGVwdGggKiBzaXplWzFdO1xuICAgIH1cbiAgICB0cmVlLnNlcGFyYXRpb24gPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBzZXBhcmF0aW9uO1xuICAgICAgc2VwYXJhdGlvbiA9IHg7XG4gICAgICByZXR1cm4gdHJlZTtcbiAgICB9O1xuICAgIHRyZWUuc2l6ZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIG5vZGVTaXplID8gbnVsbCA6IHNpemU7XG4gICAgICBub2RlU2l6ZSA9IChzaXplID0geCkgPT0gbnVsbCA/IHNpemVOb2RlIDogbnVsbDtcbiAgICAgIHJldHVybiB0cmVlO1xuICAgIH07XG4gICAgdHJlZS5ub2RlU2l6ZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIG5vZGVTaXplID8gc2l6ZSA6IG51bGw7XG4gICAgICBub2RlU2l6ZSA9IChzaXplID0geCkgPT0gbnVsbCA/IG51bGwgOiBzaXplTm9kZTtcbiAgICAgIHJldHVybiB0cmVlO1xuICAgIH07XG4gICAgcmV0dXJuIGQzX2xheW91dF9oaWVyYXJjaHlSZWJpbmQodHJlZSwgaGllcmFyY2h5KTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3RyZWVTZXBhcmF0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gYS5wYXJlbnQgPT0gYi5wYXJlbnQgPyAxIDogMjtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfdHJlZUxlZnQodikge1xuICAgIHZhciBjaGlsZHJlbiA9IHYuY2hpbGRyZW47XG4gICAgcmV0dXJuIGNoaWxkcmVuLmxlbmd0aCA/IGNoaWxkcmVuWzBdIDogdi50O1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF90cmVlUmlnaHQodikge1xuICAgIHZhciBjaGlsZHJlbiA9IHYuY2hpbGRyZW4sIG47XG4gICAgcmV0dXJuIChuID0gY2hpbGRyZW4ubGVuZ3RoKSA/IGNoaWxkcmVuW24gLSAxXSA6IHYudDtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfdHJlZU1vdmUod20sIHdwLCBzaGlmdCkge1xuICAgIHZhciBjaGFuZ2UgPSBzaGlmdCAvICh3cC5pIC0gd20uaSk7XG4gICAgd3AuYyAtPSBjaGFuZ2U7XG4gICAgd3AucyArPSBzaGlmdDtcbiAgICB3bS5jICs9IGNoYW5nZTtcbiAgICB3cC56ICs9IHNoaWZ0O1xuICAgIHdwLm0gKz0gc2hpZnQ7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X3RyZWVTaGlmdCh2KSB7XG4gICAgdmFyIHNoaWZ0ID0gMCwgY2hhbmdlID0gMCwgY2hpbGRyZW4gPSB2LmNoaWxkcmVuLCBpID0gY2hpbGRyZW4ubGVuZ3RoLCB3O1xuICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgdyA9IGNoaWxkcmVuW2ldO1xuICAgICAgdy56ICs9IHNoaWZ0O1xuICAgICAgdy5tICs9IHNoaWZ0O1xuICAgICAgc2hpZnQgKz0gdy5zICsgKGNoYW5nZSArPSB3LmMpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfdHJlZUFuY2VzdG9yKHZpbSwgdiwgYW5jZXN0b3IpIHtcbiAgICByZXR1cm4gdmltLmEucGFyZW50ID09PSB2LnBhcmVudCA/IHZpbS5hIDogYW5jZXN0b3I7XG4gIH1cbiAgZDMubGF5b3V0LmNsdXN0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaGllcmFyY2h5ID0gZDMubGF5b3V0LmhpZXJhcmNoeSgpLnNvcnQobnVsbCkudmFsdWUobnVsbCksIHNlcGFyYXRpb24gPSBkM19sYXlvdXRfdHJlZVNlcGFyYXRpb24sIHNpemUgPSBbIDEsIDEgXSwgbm9kZVNpemUgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBjbHVzdGVyKGQsIGkpIHtcbiAgICAgIHZhciBub2RlcyA9IGhpZXJhcmNoeS5jYWxsKHRoaXMsIGQsIGkpLCByb290ID0gbm9kZXNbMF0sIHByZXZpb3VzTm9kZSwgeCA9IDA7XG4gICAgICBkM19sYXlvdXRfaGllcmFyY2h5VmlzaXRBZnRlcihyb290LCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgICAgIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICBub2RlLnggPSBkM19sYXlvdXRfY2x1c3RlclgoY2hpbGRyZW4pO1xuICAgICAgICAgIG5vZGUueSA9IGQzX2xheW91dF9jbHVzdGVyWShjaGlsZHJlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS54ID0gcHJldmlvdXNOb2RlID8geCArPSBzZXBhcmF0aW9uKG5vZGUsIHByZXZpb3VzTm9kZSkgOiAwO1xuICAgICAgICAgIG5vZGUueSA9IDA7XG4gICAgICAgICAgcHJldmlvdXNOb2RlID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB2YXIgbGVmdCA9IGQzX2xheW91dF9jbHVzdGVyTGVmdChyb290KSwgcmlnaHQgPSBkM19sYXlvdXRfY2x1c3RlclJpZ2h0KHJvb3QpLCB4MCA9IGxlZnQueCAtIHNlcGFyYXRpb24obGVmdCwgcmlnaHQpIC8gMiwgeDEgPSByaWdodC54ICsgc2VwYXJhdGlvbihyaWdodCwgbGVmdCkgLyAyO1xuICAgICAgZDNfbGF5b3V0X2hpZXJhcmNoeVZpc2l0QWZ0ZXIocm9vdCwgbm9kZVNpemUgPyBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIG5vZGUueCA9IChub2RlLnggLSByb290LngpICogc2l6ZVswXTtcbiAgICAgICAgbm9kZS55ID0gKHJvb3QueSAtIG5vZGUueSkgKiBzaXplWzFdO1xuICAgICAgfSA6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgbm9kZS54ID0gKG5vZGUueCAtIHgwKSAvICh4MSAtIHgwKSAqIHNpemVbMF07XG4gICAgICAgIG5vZGUueSA9ICgxIC0gKHJvb3QueSA/IG5vZGUueSAvIHJvb3QueSA6IDEpKSAqIHNpemVbMV07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBub2RlcztcbiAgICB9XG4gICAgY2x1c3Rlci5zZXBhcmF0aW9uID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc2VwYXJhdGlvbjtcbiAgICAgIHNlcGFyYXRpb24gPSB4O1xuICAgICAgcmV0dXJuIGNsdXN0ZXI7XG4gICAgfTtcbiAgICBjbHVzdGVyLnNpemUgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBub2RlU2l6ZSA/IG51bGwgOiBzaXplO1xuICAgICAgbm9kZVNpemUgPSAoc2l6ZSA9IHgpID09IG51bGw7XG4gICAgICByZXR1cm4gY2x1c3RlcjtcbiAgICB9O1xuICAgIGNsdXN0ZXIubm9kZVNpemUgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBub2RlU2l6ZSA/IHNpemUgOiBudWxsO1xuICAgICAgbm9kZVNpemUgPSAoc2l6ZSA9IHgpICE9IG51bGw7XG4gICAgICByZXR1cm4gY2x1c3RlcjtcbiAgICB9O1xuICAgIHJldHVybiBkM19sYXlvdXRfaGllcmFyY2h5UmViaW5kKGNsdXN0ZXIsIGhpZXJhcmNoeSk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9jbHVzdGVyWShjaGlsZHJlbikge1xuICAgIHJldHVybiAxICsgZDMubWF4KGNoaWxkcmVuLCBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkLnk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X2NsdXN0ZXJYKGNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuLnJlZHVjZShmdW5jdGlvbih4LCBjaGlsZCkge1xuICAgICAgcmV0dXJuIHggKyBjaGlsZC54O1xuICAgIH0sIDApIC8gY2hpbGRyZW4ubGVuZ3RoO1xuICB9XG4gIGZ1bmN0aW9uIGQzX2xheW91dF9jbHVzdGVyTGVmdChub2RlKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcbiAgICByZXR1cm4gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoID8gZDNfbGF5b3V0X2NsdXN0ZXJMZWZ0KGNoaWxkcmVuWzBdKSA6IG5vZGU7XG4gIH1cbiAgZnVuY3Rpb24gZDNfbGF5b3V0X2NsdXN0ZXJSaWdodChub2RlKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbiwgbjtcbiAgICByZXR1cm4gY2hpbGRyZW4gJiYgKG4gPSBjaGlsZHJlbi5sZW5ndGgpID8gZDNfbGF5b3V0X2NsdXN0ZXJSaWdodChjaGlsZHJlbltuIC0gMV0pIDogbm9kZTtcbiAgfVxuICBkMy5sYXlvdXQudHJlZW1hcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoaWVyYXJjaHkgPSBkMy5sYXlvdXQuaGllcmFyY2h5KCksIHJvdW5kID0gTWF0aC5yb3VuZCwgc2l6ZSA9IFsgMSwgMSBdLCBwYWRkaW5nID0gbnVsbCwgcGFkID0gZDNfbGF5b3V0X3RyZWVtYXBQYWROdWxsLCBzdGlja3kgPSBmYWxzZSwgc3RpY2tpZXMsIG1vZGUgPSBcInNxdWFyaWZ5XCIsIHJhdGlvID0gLjUgKiAoMSArIE1hdGguc3FydCg1KSk7XG4gICAgZnVuY3Rpb24gc2NhbGUoY2hpbGRyZW4sIGspIHtcbiAgICAgIHZhciBpID0gLTEsIG4gPSBjaGlsZHJlbi5sZW5ndGgsIGNoaWxkLCBhcmVhO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgYXJlYSA9IChjaGlsZCA9IGNoaWxkcmVuW2ldKS52YWx1ZSAqIChrIDwgMCA/IDAgOiBrKTtcbiAgICAgICAgY2hpbGQuYXJlYSA9IGlzTmFOKGFyZWEpIHx8IGFyZWEgPD0gMCA/IDAgOiBhcmVhO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzcXVhcmlmeShub2RlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xuICAgICAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICB2YXIgcmVjdCA9IHBhZChub2RlKSwgcm93ID0gW10sIHJlbWFpbmluZyA9IGNoaWxkcmVuLnNsaWNlKCksIGNoaWxkLCBiZXN0ID0gSW5maW5pdHksIHNjb3JlLCB1ID0gbW9kZSA9PT0gXCJzbGljZVwiID8gcmVjdC5keCA6IG1vZGUgPT09IFwiZGljZVwiID8gcmVjdC5keSA6IG1vZGUgPT09IFwic2xpY2UtZGljZVwiID8gbm9kZS5kZXB0aCAmIDEgPyByZWN0LmR5IDogcmVjdC5keCA6IE1hdGgubWluKHJlY3QuZHgsIHJlY3QuZHkpLCBuO1xuICAgICAgICBzY2FsZShyZW1haW5pbmcsIHJlY3QuZHggKiByZWN0LmR5IC8gbm9kZS52YWx1ZSk7XG4gICAgICAgIHJvdy5hcmVhID0gMDtcbiAgICAgICAgd2hpbGUgKChuID0gcmVtYWluaW5nLmxlbmd0aCkgPiAwKSB7XG4gICAgICAgICAgcm93LnB1c2goY2hpbGQgPSByZW1haW5pbmdbbiAtIDFdKTtcbiAgICAgICAgICByb3cuYXJlYSArPSBjaGlsZC5hcmVhO1xuICAgICAgICAgIGlmIChtb2RlICE9PSBcInNxdWFyaWZ5XCIgfHwgKHNjb3JlID0gd29yc3Qocm93LCB1KSkgPD0gYmVzdCkge1xuICAgICAgICAgICAgcmVtYWluaW5nLnBvcCgpO1xuICAgICAgICAgICAgYmVzdCA9IHNjb3JlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3cuYXJlYSAtPSByb3cucG9wKCkuYXJlYTtcbiAgICAgICAgICAgIHBvc2l0aW9uKHJvdywgdSwgcmVjdCwgZmFsc2UpO1xuICAgICAgICAgICAgdSA9IE1hdGgubWluKHJlY3QuZHgsIHJlY3QuZHkpO1xuICAgICAgICAgICAgcm93Lmxlbmd0aCA9IHJvdy5hcmVhID0gMDtcbiAgICAgICAgICAgIGJlc3QgPSBJbmZpbml0eTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdy5sZW5ndGgpIHtcbiAgICAgICAgICBwb3NpdGlvbihyb3csIHUsIHJlY3QsIHRydWUpO1xuICAgICAgICAgIHJvdy5sZW5ndGggPSByb3cuYXJlYSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChzcXVhcmlmeSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0aWNraWZ5KG5vZGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIHZhciByZWN0ID0gcGFkKG5vZGUpLCByZW1haW5pbmcgPSBjaGlsZHJlbi5zbGljZSgpLCBjaGlsZCwgcm93ID0gW107XG4gICAgICAgIHNjYWxlKHJlbWFpbmluZywgcmVjdC5keCAqIHJlY3QuZHkgLyBub2RlLnZhbHVlKTtcbiAgICAgICAgcm93LmFyZWEgPSAwO1xuICAgICAgICB3aGlsZSAoY2hpbGQgPSByZW1haW5pbmcucG9wKCkpIHtcbiAgICAgICAgICByb3cucHVzaChjaGlsZCk7XG4gICAgICAgICAgcm93LmFyZWEgKz0gY2hpbGQuYXJlYTtcbiAgICAgICAgICBpZiAoY2hpbGQueiAhPSBudWxsKSB7XG4gICAgICAgICAgICBwb3NpdGlvbihyb3csIGNoaWxkLnogPyByZWN0LmR4IDogcmVjdC5keSwgcmVjdCwgIXJlbWFpbmluZy5sZW5ndGgpO1xuICAgICAgICAgICAgcm93Lmxlbmd0aCA9IHJvdy5hcmVhID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChzdGlja2lmeSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdvcnN0KHJvdywgdSkge1xuICAgICAgdmFyIHMgPSByb3cuYXJlYSwgciwgcm1heCA9IDAsIHJtaW4gPSBJbmZpbml0eSwgaSA9IC0xLCBuID0gcm93Lmxlbmd0aDtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgIGlmICghKHIgPSByb3dbaV0uYXJlYSkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAociA8IHJtaW4pIHJtaW4gPSByO1xuICAgICAgICBpZiAociA+IHJtYXgpIHJtYXggPSByO1xuICAgICAgfVxuICAgICAgcyAqPSBzO1xuICAgICAgdSAqPSB1O1xuICAgICAgcmV0dXJuIHMgPyBNYXRoLm1heCh1ICogcm1heCAqIHJhdGlvIC8gcywgcyAvICh1ICogcm1pbiAqIHJhdGlvKSkgOiBJbmZpbml0eTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcG9zaXRpb24ocm93LCB1LCByZWN0LCBmbHVzaCkge1xuICAgICAgdmFyIGkgPSAtMSwgbiA9IHJvdy5sZW5ndGgsIHggPSByZWN0LngsIHkgPSByZWN0LnksIHYgPSB1ID8gcm91bmQocm93LmFyZWEgLyB1KSA6IDAsIG87XG4gICAgICBpZiAodSA9PSByZWN0LmR4KSB7XG4gICAgICAgIGlmIChmbHVzaCB8fCB2ID4gcmVjdC5keSkgdiA9IHJlY3QuZHk7XG4gICAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgICAgbyA9IHJvd1tpXTtcbiAgICAgICAgICBvLnggPSB4O1xuICAgICAgICAgIG8ueSA9IHk7XG4gICAgICAgICAgby5keSA9IHY7XG4gICAgICAgICAgeCArPSBvLmR4ID0gTWF0aC5taW4ocmVjdC54ICsgcmVjdC5keCAtIHgsIHYgPyByb3VuZChvLmFyZWEgLyB2KSA6IDApO1xuICAgICAgICB9XG4gICAgICAgIG8ueiA9IHRydWU7XG4gICAgICAgIG8uZHggKz0gcmVjdC54ICsgcmVjdC5keCAtIHg7XG4gICAgICAgIHJlY3QueSArPSB2O1xuICAgICAgICByZWN0LmR5IC09IHY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZmx1c2ggfHwgdiA+IHJlY3QuZHgpIHYgPSByZWN0LmR4O1xuICAgICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICAgIG8gPSByb3dbaV07XG4gICAgICAgICAgby54ID0geDtcbiAgICAgICAgICBvLnkgPSB5O1xuICAgICAgICAgIG8uZHggPSB2O1xuICAgICAgICAgIHkgKz0gby5keSA9IE1hdGgubWluKHJlY3QueSArIHJlY3QuZHkgLSB5LCB2ID8gcm91bmQoby5hcmVhIC8gdikgOiAwKTtcbiAgICAgICAgfVxuICAgICAgICBvLnogPSBmYWxzZTtcbiAgICAgICAgby5keSArPSByZWN0LnkgKyByZWN0LmR5IC0geTtcbiAgICAgICAgcmVjdC54ICs9IHY7XG4gICAgICAgIHJlY3QuZHggLT0gdjtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdHJlZW1hcChkKSB7XG4gICAgICB2YXIgbm9kZXMgPSBzdGlja2llcyB8fCBoaWVyYXJjaHkoZCksIHJvb3QgPSBub2Rlc1swXTtcbiAgICAgIHJvb3QueCA9IHJvb3QueSA9IDA7XG4gICAgICBpZiAocm9vdC52YWx1ZSkgcm9vdC5keCA9IHNpemVbMF0sIHJvb3QuZHkgPSBzaXplWzFdOyBlbHNlIHJvb3QuZHggPSByb290LmR5ID0gMDtcbiAgICAgIGlmIChzdGlja2llcykgaGllcmFyY2h5LnJldmFsdWUocm9vdCk7XG4gICAgICBzY2FsZShbIHJvb3QgXSwgcm9vdC5keCAqIHJvb3QuZHkgLyByb290LnZhbHVlKTtcbiAgICAgIChzdGlja2llcyA/IHN0aWNraWZ5IDogc3F1YXJpZnkpKHJvb3QpO1xuICAgICAgaWYgKHN0aWNreSkgc3RpY2tpZXMgPSBub2RlcztcbiAgICAgIHJldHVybiBub2RlcztcbiAgICB9XG4gICAgdHJlZW1hcC5zaXplID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc2l6ZTtcbiAgICAgIHNpemUgPSB4O1xuICAgICAgcmV0dXJuIHRyZWVtYXA7XG4gICAgfTtcbiAgICB0cmVlbWFwLnBhZGRpbmcgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwYWRkaW5nO1xuICAgICAgZnVuY3Rpb24gcGFkRnVuY3Rpb24obm9kZSkge1xuICAgICAgICB2YXIgcCA9IHguY2FsbCh0cmVlbWFwLCBub2RlLCBub2RlLmRlcHRoKTtcbiAgICAgICAgcmV0dXJuIHAgPT0gbnVsbCA/IGQzX2xheW91dF90cmVlbWFwUGFkTnVsbChub2RlKSA6IGQzX2xheW91dF90cmVlbWFwUGFkKG5vZGUsIHR5cGVvZiBwID09PSBcIm51bWJlclwiID8gWyBwLCBwLCBwLCBwIF0gOiBwKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHBhZENvbnN0YW50KG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGQzX2xheW91dF90cmVlbWFwUGFkKG5vZGUsIHgpO1xuICAgICAgfVxuICAgICAgdmFyIHR5cGU7XG4gICAgICBwYWQgPSAocGFkZGluZyA9IHgpID09IG51bGwgPyBkM19sYXlvdXRfdHJlZW1hcFBhZE51bGwgOiAodHlwZSA9IHR5cGVvZiB4KSA9PT0gXCJmdW5jdGlvblwiID8gcGFkRnVuY3Rpb24gOiB0eXBlID09PSBcIm51bWJlclwiID8gKHggPSBbIHgsIHgsIHgsIHggXSwgXG4gICAgICBwYWRDb25zdGFudCkgOiBwYWRDb25zdGFudDtcbiAgICAgIHJldHVybiB0cmVlbWFwO1xuICAgIH07XG4gICAgdHJlZW1hcC5yb3VuZCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHJvdW5kICE9IE51bWJlcjtcbiAgICAgIHJvdW5kID0geCA/IE1hdGgucm91bmQgOiBOdW1iZXI7XG4gICAgICByZXR1cm4gdHJlZW1hcDtcbiAgICB9O1xuICAgIHRyZWVtYXAuc3RpY2t5ID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc3RpY2t5O1xuICAgICAgc3RpY2t5ID0geDtcbiAgICAgIHN0aWNraWVzID0gbnVsbDtcbiAgICAgIHJldHVybiB0cmVlbWFwO1xuICAgIH07XG4gICAgdHJlZW1hcC5yYXRpbyA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHJhdGlvO1xuICAgICAgcmF0aW8gPSB4O1xuICAgICAgcmV0dXJuIHRyZWVtYXA7XG4gICAgfTtcbiAgICB0cmVlbWFwLm1vZGUgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBtb2RlO1xuICAgICAgbW9kZSA9IHggKyBcIlwiO1xuICAgICAgcmV0dXJuIHRyZWVtYXA7XG4gICAgfTtcbiAgICByZXR1cm4gZDNfbGF5b3V0X2hpZXJhcmNoeVJlYmluZCh0cmVlbWFwLCBoaWVyYXJjaHkpO1xuICB9O1xuICBmdW5jdGlvbiBkM19sYXlvdXRfdHJlZW1hcFBhZE51bGwobm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBub2RlLngsXG4gICAgICB5OiBub2RlLnksXG4gICAgICBkeDogbm9kZS5keCxcbiAgICAgIGR5OiBub2RlLmR5XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkM19sYXlvdXRfdHJlZW1hcFBhZChub2RlLCBwYWRkaW5nKSB7XG4gICAgdmFyIHggPSBub2RlLnggKyBwYWRkaW5nWzNdLCB5ID0gbm9kZS55ICsgcGFkZGluZ1swXSwgZHggPSBub2RlLmR4IC0gcGFkZGluZ1sxXSAtIHBhZGRpbmdbM10sIGR5ID0gbm9kZS5keSAtIHBhZGRpbmdbMF0gLSBwYWRkaW5nWzJdO1xuICAgIGlmIChkeCA8IDApIHtcbiAgICAgIHggKz0gZHggLyAyO1xuICAgICAgZHggPSAwO1xuICAgIH1cbiAgICBpZiAoZHkgPCAwKSB7XG4gICAgICB5ICs9IGR5IC8gMjtcbiAgICAgIGR5ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5LFxuICAgICAgZHg6IGR4LFxuICAgICAgZHk6IGR5XG4gICAgfTtcbiAgfVxuICBkMy5yYW5kb20gPSB7XG4gICAgbm9ybWFsOiBmdW5jdGlvbijCtSwgz4MpIHtcbiAgICAgIHZhciBuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIGlmIChuIDwgMikgz4MgPSAxO1xuICAgICAgaWYgKG4gPCAxKSDCtSA9IDA7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB4LCB5LCByO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgeCA9IE1hdGgucmFuZG9tKCkgKiAyIC0gMTtcbiAgICAgICAgICB5ID0gTWF0aC5yYW5kb20oKSAqIDIgLSAxO1xuICAgICAgICAgIHIgPSB4ICogeCArIHkgKiB5O1xuICAgICAgICB9IHdoaWxlICghciB8fCByID4gMSk7XG4gICAgICAgIHJldHVybiDCtSArIM+DICogeCAqIE1hdGguc3FydCgtMiAqIE1hdGgubG9nKHIpIC8gcik7XG4gICAgICB9O1xuICAgIH0sXG4gICAgbG9nTm9ybWFsOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByYW5kb20gPSBkMy5yYW5kb20ubm9ybWFsLmFwcGx5KGQzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5leHAocmFuZG9tKCkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGJhdGVzOiBmdW5jdGlvbihtKSB7XG4gICAgICB2YXIgcmFuZG9tID0gZDMucmFuZG9tLmlyd2luSGFsbChtKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJhbmRvbSgpIC8gbTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBpcndpbkhhbGw6IGZ1bmN0aW9uKG0pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgcyA9IDAsIGogPSAwOyBqIDwgbTsgaisrKSBzICs9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIHJldHVybiBzO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG4gIGQzLnNjYWxlID0ge307XG4gIGZ1bmN0aW9uIGQzX3NjYWxlRXh0ZW50KGRvbWFpbikge1xuICAgIHZhciBzdGFydCA9IGRvbWFpblswXSwgc3RvcCA9IGRvbWFpbltkb21haW4ubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHN0YXJ0IDwgc3RvcCA/IFsgc3RhcnQsIHN0b3AgXSA6IFsgc3RvcCwgc3RhcnQgXTtcbiAgfVxuICBmdW5jdGlvbiBkM19zY2FsZVJhbmdlKHNjYWxlKSB7XG4gICAgcmV0dXJuIHNjYWxlLnJhbmdlRXh0ZW50ID8gc2NhbGUucmFuZ2VFeHRlbnQoKSA6IGQzX3NjYWxlRXh0ZW50KHNjYWxlLnJhbmdlKCkpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3NjYWxlX2JpbGluZWFyKGRvbWFpbiwgcmFuZ2UsIHVuaW50ZXJwb2xhdGUsIGludGVycG9sYXRlKSB7XG4gICAgdmFyIHUgPSB1bmludGVycG9sYXRlKGRvbWFpblswXSwgZG9tYWluWzFdKSwgaSA9IGludGVycG9sYXRlKHJhbmdlWzBdLCByYW5nZVsxXSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiBpKHUoeCkpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZDNfc2NhbGVfbmljZShkb21haW4sIG5pY2UpIHtcbiAgICB2YXIgaTAgPSAwLCBpMSA9IGRvbWFpbi5sZW5ndGggLSAxLCB4MCA9IGRvbWFpbltpMF0sIHgxID0gZG9tYWluW2kxXSwgZHg7XG4gICAgaWYgKHgxIDwgeDApIHtcbiAgICAgIGR4ID0gaTAsIGkwID0gaTEsIGkxID0gZHg7XG4gICAgICBkeCA9IHgwLCB4MCA9IHgxLCB4MSA9IGR4O1xuICAgIH1cbiAgICBkb21haW5baTBdID0gbmljZS5mbG9vcih4MCk7XG4gICAgZG9tYWluW2kxXSA9IG5pY2UuY2VpbCh4MSk7XG4gICAgcmV0dXJuIGRvbWFpbjtcbiAgfVxuICBmdW5jdGlvbiBkM19zY2FsZV9uaWNlU3RlcChzdGVwKSB7XG4gICAgcmV0dXJuIHN0ZXAgPyB7XG4gICAgICBmbG9vcjogZnVuY3Rpb24oeCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih4IC8gc3RlcCkgKiBzdGVwO1xuICAgICAgfSxcbiAgICAgIGNlaWw6IGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh4IC8gc3RlcCkgKiBzdGVwO1xuICAgICAgfVxuICAgIH0gOiBkM19zY2FsZV9uaWNlSWRlbnRpdHk7XG4gIH1cbiAgdmFyIGQzX3NjYWxlX25pY2VJZGVudGl0eSA9IHtcbiAgICBmbG9vcjogZDNfaWRlbnRpdHksXG4gICAgY2VpbDogZDNfaWRlbnRpdHlcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc2NhbGVfcG9seWxpbmVhcihkb21haW4sIHJhbmdlLCB1bmludGVycG9sYXRlLCBpbnRlcnBvbGF0ZSkge1xuICAgIHZhciB1ID0gW10sIGkgPSBbXSwgaiA9IDAsIGsgPSBNYXRoLm1pbihkb21haW4ubGVuZ3RoLCByYW5nZS5sZW5ndGgpIC0gMTtcbiAgICBpZiAoZG9tYWluW2tdIDwgZG9tYWluWzBdKSB7XG4gICAgICBkb21haW4gPSBkb21haW4uc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgICByYW5nZSA9IHJhbmdlLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgIH1cbiAgICB3aGlsZSAoKytqIDw9IGspIHtcbiAgICAgIHUucHVzaCh1bmludGVycG9sYXRlKGRvbWFpbltqIC0gMV0sIGRvbWFpbltqXSkpO1xuICAgICAgaS5wdXNoKGludGVycG9sYXRlKHJhbmdlW2ogLSAxXSwgcmFuZ2Vbal0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICAgIHZhciBqID0gZDMuYmlzZWN0KGRvbWFpbiwgeCwgMSwgaykgLSAxO1xuICAgICAgcmV0dXJuIGlbal0odVtqXSh4KSk7XG4gICAgfTtcbiAgfVxuICBkMy5zY2FsZS5saW5lYXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfc2NhbGVfbGluZWFyKFsgMCwgMSBdLCBbIDAsIDEgXSwgZDNfaW50ZXJwb2xhdGUsIGZhbHNlKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc2NhbGVfbGluZWFyKGRvbWFpbiwgcmFuZ2UsIGludGVycG9sYXRlLCBjbGFtcCkge1xuICAgIHZhciBvdXRwdXQsIGlucHV0O1xuICAgIGZ1bmN0aW9uIHJlc2NhbGUoKSB7XG4gICAgICB2YXIgbGluZWFyID0gTWF0aC5taW4oZG9tYWluLmxlbmd0aCwgcmFuZ2UubGVuZ3RoKSA+IDIgPyBkM19zY2FsZV9wb2x5bGluZWFyIDogZDNfc2NhbGVfYmlsaW5lYXIsIHVuaW50ZXJwb2xhdGUgPSBjbGFtcCA/IGQzX3VuaW50ZXJwb2xhdGVDbGFtcCA6IGQzX3VuaW50ZXJwb2xhdGVOdW1iZXI7XG4gICAgICBvdXRwdXQgPSBsaW5lYXIoZG9tYWluLCByYW5nZSwgdW5pbnRlcnBvbGF0ZSwgaW50ZXJwb2xhdGUpO1xuICAgICAgaW5wdXQgPSBsaW5lYXIocmFuZ2UsIGRvbWFpbiwgdW5pbnRlcnBvbGF0ZSwgZDNfaW50ZXJwb2xhdGUpO1xuICAgICAgcmV0dXJuIHNjYWxlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY2FsZSh4KSB7XG4gICAgICByZXR1cm4gb3V0cHV0KHgpO1xuICAgIH1cbiAgICBzY2FsZS5pbnZlcnQgPSBmdW5jdGlvbih5KSB7XG4gICAgICByZXR1cm4gaW5wdXQoeSk7XG4gICAgfTtcbiAgICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBkb21haW47XG4gICAgICBkb21haW4gPSB4Lm1hcChOdW1iZXIpO1xuICAgICAgcmV0dXJuIHJlc2NhbGUoKTtcbiAgICB9O1xuICAgIHNjYWxlLnJhbmdlID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcmFuZ2U7XG4gICAgICByYW5nZSA9IHg7XG4gICAgICByZXR1cm4gcmVzY2FsZSgpO1xuICAgIH07XG4gICAgc2NhbGUucmFuZ2VSb3VuZCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiBzY2FsZS5yYW5nZSh4KS5pbnRlcnBvbGF0ZShkM19pbnRlcnBvbGF0ZVJvdW5kKTtcbiAgICB9O1xuICAgIHNjYWxlLmNsYW1wID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gY2xhbXA7XG4gICAgICBjbGFtcCA9IHg7XG4gICAgICByZXR1cm4gcmVzY2FsZSgpO1xuICAgIH07XG4gICAgc2NhbGUuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBpbnRlcnBvbGF0ZTtcbiAgICAgIGludGVycG9sYXRlID0geDtcbiAgICAgIHJldHVybiByZXNjYWxlKCk7XG4gICAgfTtcbiAgICBzY2FsZS50aWNrcyA9IGZ1bmN0aW9uKG0pIHtcbiAgICAgIHJldHVybiBkM19zY2FsZV9saW5lYXJUaWNrcyhkb21haW4sIG0pO1xuICAgIH07XG4gICAgc2NhbGUudGlja0Zvcm1hdCA9IGZ1bmN0aW9uKG0sIGZvcm1hdCkge1xuICAgICAgcmV0dXJuIGQzX3NjYWxlX2xpbmVhclRpY2tGb3JtYXQoZG9tYWluLCBtLCBmb3JtYXQpO1xuICAgIH07XG4gICAgc2NhbGUubmljZSA9IGZ1bmN0aW9uKG0pIHtcbiAgICAgIGQzX3NjYWxlX2xpbmVhck5pY2UoZG9tYWluLCBtKTtcbiAgICAgIHJldHVybiByZXNjYWxlKCk7XG4gICAgfTtcbiAgICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZDNfc2NhbGVfbGluZWFyKGRvbWFpbiwgcmFuZ2UsIGludGVycG9sYXRlLCBjbGFtcCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVzY2FsZSgpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3NjYWxlX2xpbmVhclJlYmluZChzY2FsZSwgbGluZWFyKSB7XG4gICAgcmV0dXJuIGQzLnJlYmluZChzY2FsZSwgbGluZWFyLCBcInJhbmdlXCIsIFwicmFuZ2VSb3VuZFwiLCBcImludGVycG9sYXRlXCIsIFwiY2xhbXBcIik7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc2NhbGVfbGluZWFyTmljZShkb21haW4sIG0pIHtcbiAgICBkM19zY2FsZV9uaWNlKGRvbWFpbiwgZDNfc2NhbGVfbmljZVN0ZXAoZDNfc2NhbGVfbGluZWFyVGlja1JhbmdlKGRvbWFpbiwgbSlbMl0pKTtcbiAgICBkM19zY2FsZV9uaWNlKGRvbWFpbiwgZDNfc2NhbGVfbmljZVN0ZXAoZDNfc2NhbGVfbGluZWFyVGlja1JhbmdlKGRvbWFpbiwgbSlbMl0pKTtcbiAgICByZXR1cm4gZG9tYWluO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3NjYWxlX2xpbmVhclRpY2tSYW5nZShkb21haW4sIG0pIHtcbiAgICBpZiAobSA9PSBudWxsKSBtID0gMTA7XG4gICAgdmFyIGV4dGVudCA9IGQzX3NjYWxlRXh0ZW50KGRvbWFpbiksIHNwYW4gPSBleHRlbnRbMV0gLSBleHRlbnRbMF0sIHN0ZXAgPSBNYXRoLnBvdygxMCwgTWF0aC5mbG9vcihNYXRoLmxvZyhzcGFuIC8gbSkgLyBNYXRoLkxOMTApKSwgZXJyID0gbSAvIHNwYW4gKiBzdGVwO1xuICAgIGlmIChlcnIgPD0gLjE1KSBzdGVwICo9IDEwOyBlbHNlIGlmIChlcnIgPD0gLjM1KSBzdGVwICo9IDU7IGVsc2UgaWYgKGVyciA8PSAuNzUpIHN0ZXAgKj0gMjtcbiAgICBleHRlbnRbMF0gPSBNYXRoLmNlaWwoZXh0ZW50WzBdIC8gc3RlcCkgKiBzdGVwO1xuICAgIGV4dGVudFsxXSA9IE1hdGguZmxvb3IoZXh0ZW50WzFdIC8gc3RlcCkgKiBzdGVwICsgc3RlcCAqIC41O1xuICAgIGV4dGVudFsyXSA9IHN0ZXA7XG4gICAgcmV0dXJuIGV4dGVudDtcbiAgfVxuICBmdW5jdGlvbiBkM19zY2FsZV9saW5lYXJUaWNrcyhkb21haW4sIG0pIHtcbiAgICByZXR1cm4gZDMucmFuZ2UuYXBwbHkoZDMsIGQzX3NjYWxlX2xpbmVhclRpY2tSYW5nZShkb21haW4sIG0pKTtcbiAgfVxuICBmdW5jdGlvbiBkM19zY2FsZV9saW5lYXJUaWNrRm9ybWF0KGRvbWFpbiwgbSwgZm9ybWF0KSB7XG4gICAgdmFyIHJhbmdlID0gZDNfc2NhbGVfbGluZWFyVGlja1JhbmdlKGRvbWFpbiwgbSk7XG4gICAgaWYgKGZvcm1hdCkge1xuICAgICAgdmFyIG1hdGNoID0gZDNfZm9ybWF0X3JlLmV4ZWMoZm9ybWF0KTtcbiAgICAgIG1hdGNoLnNoaWZ0KCk7XG4gICAgICBpZiAobWF0Y2hbOF0gPT09IFwic1wiKSB7XG4gICAgICAgIHZhciBwcmVmaXggPSBkMy5mb3JtYXRQcmVmaXgoTWF0aC5tYXgoYWJzKHJhbmdlWzBdKSwgYWJzKHJhbmdlWzFdKSkpO1xuICAgICAgICBpZiAoIW1hdGNoWzddKSBtYXRjaFs3XSA9IFwiLlwiICsgZDNfc2NhbGVfbGluZWFyUHJlY2lzaW9uKHByZWZpeC5zY2FsZShyYW5nZVsyXSkpO1xuICAgICAgICBtYXRjaFs4XSA9IFwiZlwiO1xuICAgICAgICBmb3JtYXQgPSBkMy5mb3JtYXQobWF0Y2guam9pbihcIlwiKSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIGZvcm1hdChwcmVmaXguc2NhbGUoZCkpICsgcHJlZml4LnN5bWJvbDtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICghbWF0Y2hbN10pIG1hdGNoWzddID0gXCIuXCIgKyBkM19zY2FsZV9saW5lYXJGb3JtYXRQcmVjaXNpb24obWF0Y2hbOF0sIHJhbmdlKTtcbiAgICAgIGZvcm1hdCA9IG1hdGNoLmpvaW4oXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1hdCA9IFwiLC5cIiArIGQzX3NjYWxlX2xpbmVhclByZWNpc2lvbihyYW5nZVsyXSkgKyBcImZcIjtcbiAgICB9XG4gICAgcmV0dXJuIGQzLmZvcm1hdChmb3JtYXQpO1xuICB9XG4gIHZhciBkM19zY2FsZV9saW5lYXJGb3JtYXRTaWduaWZpY2FudCA9IHtcbiAgICBzOiAxLFxuICAgIGc6IDEsXG4gICAgcDogMSxcbiAgICByOiAxLFxuICAgIGU6IDFcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc2NhbGVfbGluZWFyUHJlY2lzaW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIC1NYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4xMCArIC4wMSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc2NhbGVfbGluZWFyRm9ybWF0UHJlY2lzaW9uKHR5cGUsIHJhbmdlKSB7XG4gICAgdmFyIHAgPSBkM19zY2FsZV9saW5lYXJQcmVjaXNpb24ocmFuZ2VbMl0pO1xuICAgIHJldHVybiB0eXBlIGluIGQzX3NjYWxlX2xpbmVhckZvcm1hdFNpZ25pZmljYW50ID8gTWF0aC5hYnMocCAtIGQzX3NjYWxlX2xpbmVhclByZWNpc2lvbihNYXRoLm1heChhYnMocmFuZ2VbMF0pLCBhYnMocmFuZ2VbMV0pKSkpICsgKyh0eXBlICE9PSBcImVcIikgOiBwIC0gKHR5cGUgPT09IFwiJVwiKSAqIDI7XG4gIH1cbiAgZDMuc2NhbGUubG9nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX3NjYWxlX2xvZyhkMy5zY2FsZS5saW5lYXIoKS5kb21haW4oWyAwLCAxIF0pLCAxMCwgdHJ1ZSwgWyAxLCAxMCBdKTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc2NhbGVfbG9nKGxpbmVhciwgYmFzZSwgcG9zaXRpdmUsIGRvbWFpbikge1xuICAgIGZ1bmN0aW9uIGxvZyh4KSB7XG4gICAgICByZXR1cm4gKHBvc2l0aXZlID8gTWF0aC5sb2coeCA8IDAgPyAwIDogeCkgOiAtTWF0aC5sb2coeCA+IDAgPyAwIDogLXgpKSAvIE1hdGgubG9nKGJhc2UpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwb3coeCkge1xuICAgICAgcmV0dXJuIHBvc2l0aXZlID8gTWF0aC5wb3coYmFzZSwgeCkgOiAtTWF0aC5wb3coYmFzZSwgLXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY2FsZSh4KSB7XG4gICAgICByZXR1cm4gbGluZWFyKGxvZyh4KSk7XG4gICAgfVxuICAgIHNjYWxlLmludmVydCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiBwb3cobGluZWFyLmludmVydCh4KSk7XG4gICAgfTtcbiAgICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBkb21haW47XG4gICAgICBwb3NpdGl2ZSA9IHhbMF0gPj0gMDtcbiAgICAgIGxpbmVhci5kb21haW4oKGRvbWFpbiA9IHgubWFwKE51bWJlcikpLm1hcChsb2cpKTtcbiAgICAgIHJldHVybiBzY2FsZTtcbiAgICB9O1xuICAgIHNjYWxlLmJhc2UgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBiYXNlO1xuICAgICAgYmFzZSA9ICtfO1xuICAgICAgbGluZWFyLmRvbWFpbihkb21haW4ubWFwKGxvZykpO1xuICAgICAgcmV0dXJuIHNjYWxlO1xuICAgIH07XG4gICAgc2NhbGUubmljZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5pY2VkID0gZDNfc2NhbGVfbmljZShkb21haW4ubWFwKGxvZyksIHBvc2l0aXZlID8gTWF0aCA6IGQzX3NjYWxlX2xvZ05pY2VOZWdhdGl2ZSk7XG4gICAgICBsaW5lYXIuZG9tYWluKG5pY2VkKTtcbiAgICAgIGRvbWFpbiA9IG5pY2VkLm1hcChwb3cpO1xuICAgICAgcmV0dXJuIHNjYWxlO1xuICAgIH07XG4gICAgc2NhbGUudGlja3MgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBleHRlbnQgPSBkM19zY2FsZUV4dGVudChkb21haW4pLCB0aWNrcyA9IFtdLCB1ID0gZXh0ZW50WzBdLCB2ID0gZXh0ZW50WzFdLCBpID0gTWF0aC5mbG9vcihsb2codSkpLCBqID0gTWF0aC5jZWlsKGxvZyh2KSksIG4gPSBiYXNlICUgMSA/IDIgOiBiYXNlO1xuICAgICAgaWYgKGlzRmluaXRlKGogLSBpKSkge1xuICAgICAgICBpZiAocG9zaXRpdmUpIHtcbiAgICAgICAgICBmb3IgKDtpIDwgajsgaSsrKSBmb3IgKHZhciBrID0gMTsgayA8IG47IGsrKykgdGlja3MucHVzaChwb3coaSkgKiBrKTtcbiAgICAgICAgICB0aWNrcy5wdXNoKHBvdyhpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGlja3MucHVzaChwb3coaSkpO1xuICAgICAgICAgIGZvciAoO2krKyA8IGo7ICkgZm9yICh2YXIgayA9IG4gLSAxOyBrID4gMDsgay0tKSB0aWNrcy5wdXNoKHBvdyhpKSAqIGspO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IHRpY2tzW2ldIDwgdTsgaSsrKSB7fVxuICAgICAgICBmb3IgKGogPSB0aWNrcy5sZW5ndGg7IHRpY2tzW2ogLSAxXSA+IHY7IGotLSkge31cbiAgICAgICAgdGlja3MgPSB0aWNrcy5zbGljZShpLCBqKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aWNrcztcbiAgICB9O1xuICAgIHNjYWxlLnRpY2tGb3JtYXQgPSBmdW5jdGlvbihuLCBmb3JtYXQpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGQzX3NjYWxlX2xvZ0Zvcm1hdDtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgZm9ybWF0ID0gZDNfc2NhbGVfbG9nRm9ybWF0OyBlbHNlIGlmICh0eXBlb2YgZm9ybWF0ICE9PSBcImZ1bmN0aW9uXCIpIGZvcm1hdCA9IGQzLmZvcm1hdChmb3JtYXQpO1xuICAgICAgdmFyIGsgPSBNYXRoLm1heCgxLCBiYXNlICogbiAvIHNjYWxlLnRpY2tzKCkubGVuZ3RoKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHZhciBpID0gZCAvIHBvdyhNYXRoLnJvdW5kKGxvZyhkKSkpO1xuICAgICAgICBpZiAoaSAqIGJhc2UgPCBiYXNlIC0gLjUpIGkgKj0gYmFzZTtcbiAgICAgICAgcmV0dXJuIGkgPD0gayA/IGZvcm1hdChkKSA6IFwiXCI7XG4gICAgICB9O1xuICAgIH07XG4gICAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGQzX3NjYWxlX2xvZyhsaW5lYXIuY29weSgpLCBiYXNlLCBwb3NpdGl2ZSwgZG9tYWluKTtcbiAgICB9O1xuICAgIHJldHVybiBkM19zY2FsZV9saW5lYXJSZWJpbmQoc2NhbGUsIGxpbmVhcik7XG4gIH1cbiAgdmFyIGQzX3NjYWxlX2xvZ0Zvcm1hdCA9IGQzLmZvcm1hdChcIi4wZVwiKSwgZDNfc2NhbGVfbG9nTmljZU5lZ2F0aXZlID0ge1xuICAgIGZsb29yOiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gLU1hdGguY2VpbCgteCk7XG4gICAgfSxcbiAgICBjZWlsOiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gLU1hdGguZmxvb3IoLXgpO1xuICAgIH1cbiAgfTtcbiAgZDMuc2NhbGUucG93ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX3NjYWxlX3BvdyhkMy5zY2FsZS5saW5lYXIoKSwgMSwgWyAwLCAxIF0pO1xuICB9O1xuICBmdW5jdGlvbiBkM19zY2FsZV9wb3cobGluZWFyLCBleHBvbmVudCwgZG9tYWluKSB7XG4gICAgdmFyIHBvd3AgPSBkM19zY2FsZV9wb3dQb3coZXhwb25lbnQpLCBwb3diID0gZDNfc2NhbGVfcG93UG93KDEgLyBleHBvbmVudCk7XG4gICAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgICAgcmV0dXJuIGxpbmVhcihwb3dwKHgpKTtcbiAgICB9XG4gICAgc2NhbGUuaW52ZXJ0ID0gZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHBvd2IobGluZWFyLmludmVydCh4KSk7XG4gICAgfTtcbiAgICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBkb21haW47XG4gICAgICBsaW5lYXIuZG9tYWluKChkb21haW4gPSB4Lm1hcChOdW1iZXIpKS5tYXAocG93cCkpO1xuICAgICAgcmV0dXJuIHNjYWxlO1xuICAgIH07XG4gICAgc2NhbGUudGlja3MgPSBmdW5jdGlvbihtKSB7XG4gICAgICByZXR1cm4gZDNfc2NhbGVfbGluZWFyVGlja3MoZG9tYWluLCBtKTtcbiAgICB9O1xuICAgIHNjYWxlLnRpY2tGb3JtYXQgPSBmdW5jdGlvbihtLCBmb3JtYXQpIHtcbiAgICAgIHJldHVybiBkM19zY2FsZV9saW5lYXJUaWNrRm9ybWF0KGRvbWFpbiwgbSwgZm9ybWF0KTtcbiAgICB9O1xuICAgIHNjYWxlLm5pY2UgPSBmdW5jdGlvbihtKSB7XG4gICAgICByZXR1cm4gc2NhbGUuZG9tYWluKGQzX3NjYWxlX2xpbmVhck5pY2UoZG9tYWluLCBtKSk7XG4gICAgfTtcbiAgICBzY2FsZS5leHBvbmVudCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGV4cG9uZW50O1xuICAgICAgcG93cCA9IGQzX3NjYWxlX3Bvd1BvdyhleHBvbmVudCA9IHgpO1xuICAgICAgcG93YiA9IGQzX3NjYWxlX3Bvd1BvdygxIC8gZXhwb25lbnQpO1xuICAgICAgbGluZWFyLmRvbWFpbihkb21haW4ubWFwKHBvd3ApKTtcbiAgICAgIHJldHVybiBzY2FsZTtcbiAgICB9O1xuICAgIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM19zY2FsZV9wb3cobGluZWFyLmNvcHkoKSwgZXhwb25lbnQsIGRvbWFpbik7XG4gICAgfTtcbiAgICByZXR1cm4gZDNfc2NhbGVfbGluZWFyUmViaW5kKHNjYWxlLCBsaW5lYXIpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3NjYWxlX3Bvd1BvdyhlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB4IDwgMCA/IC1NYXRoLnBvdygteCwgZSkgOiBNYXRoLnBvdyh4LCBlKTtcbiAgICB9O1xuICB9XG4gIGQzLnNjYWxlLnNxcnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDMuc2NhbGUucG93KCkuZXhwb25lbnQoLjUpO1xuICB9O1xuICBkMy5zY2FsZS5vcmRpbmFsID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX3NjYWxlX29yZGluYWwoW10sIHtcbiAgICAgIHQ6IFwicmFuZ2VcIixcbiAgICAgIGE6IFsgW10gXVxuICAgIH0pO1xuICB9O1xuICBmdW5jdGlvbiBkM19zY2FsZV9vcmRpbmFsKGRvbWFpbiwgcmFuZ2VyKSB7XG4gICAgdmFyIGluZGV4LCByYW5nZSwgcmFuZ2VCYW5kO1xuICAgIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICAgIHJldHVybiByYW5nZVsoKGluZGV4LmdldCh4KSB8fCAocmFuZ2VyLnQgPT09IFwicmFuZ2VcIiA/IGluZGV4LnNldCh4LCBkb21haW4ucHVzaCh4KSkgOiBOYU4pKSAtIDEpICUgcmFuZ2UubGVuZ3RoXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RlcHMoc3RhcnQsIHN0ZXApIHtcbiAgICAgIHJldHVybiBkMy5yYW5nZShkb21haW4ubGVuZ3RoKS5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgICByZXR1cm4gc3RhcnQgKyBzdGVwICogaTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBkb21haW47XG4gICAgICBkb21haW4gPSBbXTtcbiAgICAgIGluZGV4ID0gbmV3IGQzX01hcCgpO1xuICAgICAgdmFyIGkgPSAtMSwgbiA9IHgubGVuZ3RoLCB4aTtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoIWluZGV4Lmhhcyh4aSA9IHhbaV0pKSBpbmRleC5zZXQoeGksIGRvbWFpbi5wdXNoKHhpKSk7XG4gICAgICByZXR1cm4gc2NhbGVbcmFuZ2VyLnRdLmFwcGx5KHNjYWxlLCByYW5nZXIuYSk7XG4gICAgfTtcbiAgICBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHJhbmdlO1xuICAgICAgcmFuZ2UgPSB4O1xuICAgICAgcmFuZ2VCYW5kID0gMDtcbiAgICAgIHJhbmdlciA9IHtcbiAgICAgICAgdDogXCJyYW5nZVwiLFxuICAgICAgICBhOiBhcmd1bWVudHNcbiAgICAgIH07XG4gICAgICByZXR1cm4gc2NhbGU7XG4gICAgfTtcbiAgICBzY2FsZS5yYW5nZVBvaW50cyA9IGZ1bmN0aW9uKHgsIHBhZGRpbmcpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgcGFkZGluZyA9IDA7XG4gICAgICB2YXIgc3RhcnQgPSB4WzBdLCBzdG9wID0geFsxXSwgc3RlcCA9IGRvbWFpbi5sZW5ndGggPCAyID8gKHN0YXJ0ID0gKHN0YXJ0ICsgc3RvcCkgLyAyLCBcbiAgICAgIDApIDogKHN0b3AgLSBzdGFydCkgLyAoZG9tYWluLmxlbmd0aCAtIDEgKyBwYWRkaW5nKTtcbiAgICAgIHJhbmdlID0gc3RlcHMoc3RhcnQgKyBzdGVwICogcGFkZGluZyAvIDIsIHN0ZXApO1xuICAgICAgcmFuZ2VCYW5kID0gMDtcbiAgICAgIHJhbmdlciA9IHtcbiAgICAgICAgdDogXCJyYW5nZVBvaW50c1wiLFxuICAgICAgICBhOiBhcmd1bWVudHNcbiAgICAgIH07XG4gICAgICByZXR1cm4gc2NhbGU7XG4gICAgfTtcbiAgICBzY2FsZS5yYW5nZVJvdW5kUG9pbnRzID0gZnVuY3Rpb24oeCwgcGFkZGluZykge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSBwYWRkaW5nID0gMDtcbiAgICAgIHZhciBzdGFydCA9IHhbMF0sIHN0b3AgPSB4WzFdLCBzdGVwID0gZG9tYWluLmxlbmd0aCA8IDIgPyAoc3RhcnQgPSBzdG9wID0gTWF0aC5yb3VuZCgoc3RhcnQgKyBzdG9wKSAvIDIpLCBcbiAgICAgIDApIDogKHN0b3AgLSBzdGFydCkgLyAoZG9tYWluLmxlbmd0aCAtIDEgKyBwYWRkaW5nKSB8IDA7XG4gICAgICByYW5nZSA9IHN0ZXBzKHN0YXJ0ICsgTWF0aC5yb3VuZChzdGVwICogcGFkZGluZyAvIDIgKyAoc3RvcCAtIHN0YXJ0IC0gKGRvbWFpbi5sZW5ndGggLSAxICsgcGFkZGluZykgKiBzdGVwKSAvIDIpLCBzdGVwKTtcbiAgICAgIHJhbmdlQmFuZCA9IDA7XG4gICAgICByYW5nZXIgPSB7XG4gICAgICAgIHQ6IFwicmFuZ2VSb3VuZFBvaW50c1wiLFxuICAgICAgICBhOiBhcmd1bWVudHNcbiAgICAgIH07XG4gICAgICByZXR1cm4gc2NhbGU7XG4gICAgfTtcbiAgICBzY2FsZS5yYW5nZUJhbmRzID0gZnVuY3Rpb24oeCwgcGFkZGluZywgb3V0ZXJQYWRkaW5nKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHBhZGRpbmcgPSAwO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSBvdXRlclBhZGRpbmcgPSBwYWRkaW5nO1xuICAgICAgdmFyIHJldmVyc2UgPSB4WzFdIDwgeFswXSwgc3RhcnQgPSB4W3JldmVyc2UgLSAwXSwgc3RvcCA9IHhbMSAtIHJldmVyc2VdLCBzdGVwID0gKHN0b3AgLSBzdGFydCkgLyAoZG9tYWluLmxlbmd0aCAtIHBhZGRpbmcgKyAyICogb3V0ZXJQYWRkaW5nKTtcbiAgICAgIHJhbmdlID0gc3RlcHMoc3RhcnQgKyBzdGVwICogb3V0ZXJQYWRkaW5nLCBzdGVwKTtcbiAgICAgIGlmIChyZXZlcnNlKSByYW5nZS5yZXZlcnNlKCk7XG4gICAgICByYW5nZUJhbmQgPSBzdGVwICogKDEgLSBwYWRkaW5nKTtcbiAgICAgIHJhbmdlciA9IHtcbiAgICAgICAgdDogXCJyYW5nZUJhbmRzXCIsXG4gICAgICAgIGE6IGFyZ3VtZW50c1xuICAgICAgfTtcbiAgICAgIHJldHVybiBzY2FsZTtcbiAgICB9O1xuICAgIHNjYWxlLnJhbmdlUm91bmRCYW5kcyA9IGZ1bmN0aW9uKHgsIHBhZGRpbmcsIG91dGVyUGFkZGluZykge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSBwYWRkaW5nID0gMDtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykgb3V0ZXJQYWRkaW5nID0gcGFkZGluZztcbiAgICAgIHZhciByZXZlcnNlID0geFsxXSA8IHhbMF0sIHN0YXJ0ID0geFtyZXZlcnNlIC0gMF0sIHN0b3AgPSB4WzEgLSByZXZlcnNlXSwgc3RlcCA9IE1hdGguZmxvb3IoKHN0b3AgLSBzdGFydCkgLyAoZG9tYWluLmxlbmd0aCAtIHBhZGRpbmcgKyAyICogb3V0ZXJQYWRkaW5nKSk7XG4gICAgICByYW5nZSA9IHN0ZXBzKHN0YXJ0ICsgTWF0aC5yb3VuZCgoc3RvcCAtIHN0YXJ0IC0gKGRvbWFpbi5sZW5ndGggLSBwYWRkaW5nKSAqIHN0ZXApIC8gMiksIHN0ZXApO1xuICAgICAgaWYgKHJldmVyc2UpIHJhbmdlLnJldmVyc2UoKTtcbiAgICAgIHJhbmdlQmFuZCA9IE1hdGgucm91bmQoc3RlcCAqICgxIC0gcGFkZGluZykpO1xuICAgICAgcmFuZ2VyID0ge1xuICAgICAgICB0OiBcInJhbmdlUm91bmRCYW5kc1wiLFxuICAgICAgICBhOiBhcmd1bWVudHNcbiAgICAgIH07XG4gICAgICByZXR1cm4gc2NhbGU7XG4gICAgfTtcbiAgICBzY2FsZS5yYW5nZUJhbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiByYW5nZUJhbmQ7XG4gICAgfTtcbiAgICBzY2FsZS5yYW5nZUV4dGVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGQzX3NjYWxlRXh0ZW50KHJhbmdlci5hWzBdKTtcbiAgICB9O1xuICAgIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM19zY2FsZV9vcmRpbmFsKGRvbWFpbiwgcmFuZ2VyKTtcbiAgICB9O1xuICAgIHJldHVybiBzY2FsZS5kb21haW4oZG9tYWluKTtcbiAgfVxuICBkMy5zY2FsZS5jYXRlZ29yeTEwID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlLm9yZGluYWwoKS5yYW5nZShkM19jYXRlZ29yeTEwKTtcbiAgfTtcbiAgZDMuc2NhbGUuY2F0ZWdvcnkyMCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkMy5zY2FsZS5vcmRpbmFsKCkucmFuZ2UoZDNfY2F0ZWdvcnkyMCk7XG4gIH07XG4gIGQzLnNjYWxlLmNhdGVnb3J5MjBiID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlLm9yZGluYWwoKS5yYW5nZShkM19jYXRlZ29yeTIwYik7XG4gIH07XG4gIGQzLnNjYWxlLmNhdGVnb3J5MjBjID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlLm9yZGluYWwoKS5yYW5nZShkM19jYXRlZ29yeTIwYyk7XG4gIH07XG4gIHZhciBkM19jYXRlZ29yeTEwID0gWyAyMDYyMjYwLCAxNjc0NDIwNiwgMjkyNDU4OCwgMTQwMzQ3MjgsIDk3MjU4ODUsIDkxOTcxMzEsIDE0OTA3MzMwLCA4MzU1NzExLCAxMjM2OTE4NiwgMTU1NjE3NSBdLm1hcChkM19yZ2JTdHJpbmcpO1xuICB2YXIgZDNfY2F0ZWdvcnkyMCA9IFsgMjA2MjI2MCwgMTE0NTQ0NDAsIDE2NzQ0MjA2LCAxNjc1OTY3MiwgMjkyNDU4OCwgMTAwMTg2OTgsIDE0MDM0NzI4LCAxNjc1MDc0MiwgOTcyNTg4NSwgMTI5NTU4NjEsIDkxOTcxMzEsIDEyODg1MTQwLCAxNDkwNzMzMCwgMTYyMzQxOTQsIDgzNTU3MTEsIDEzMDkyODA3LCAxMjM2OTE4NiwgMTQ0MDg1ODksIDE1NTYxNzUsIDEwNDEwNzI1IF0ubWFwKGQzX3JnYlN0cmluZyk7XG4gIHZhciBkM19jYXRlZ29yeTIwYiA9IFsgMzc1MDc3NywgNTM5NTYxOSwgNzA0MDcxOSwgMTAyNjQyODYsIDY1MTkwOTcsIDkyMTY1OTQsIDExOTE1MTE1LCAxMzU1NjYzNiwgOTIwMjk5MywgMTI0MjY4MDksIDE1MTg2NTE0LCAxNTE5MDkzMiwgODY2NjE2OSwgMTEzNTY0OTAsIDE0MDQ5NjQzLCAxNTE3NzM3MiwgODA3NzY4MywgMTA4MzQzMjQsIDEzNTI4NTA5LCAxNDU4OTY1NCBdLm1hcChkM19yZ2JTdHJpbmcpO1xuICB2YXIgZDNfY2F0ZWdvcnkyMGMgPSBbIDMyNDQ3MzMsIDcwNTcxMTAsIDEwNDA2NjI1LCAxMzAzMjQzMSwgMTUwOTUwNTMsIDE2NjE2NzY0LCAxNjYyNTI1OSwgMTY2MzQwMTgsIDMyNTMwNzYsIDc2NTI0NzAsIDEwNjA3MDAzLCAxMzEwMTUwNCwgNzY5NTI4MSwgMTAzOTQzMTIsIDEyMzY5MzcyLCAxNDM0Mjg5MSwgNjUxMzUwNywgOTg2ODk1MCwgMTI0MzQ4NzcsIDE0Mjc3MDgxIF0ubWFwKGQzX3JnYlN0cmluZyk7XG4gIGQzLnNjYWxlLnF1YW50aWxlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX3NjYWxlX3F1YW50aWxlKFtdLCBbXSk7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3NjYWxlX3F1YW50aWxlKGRvbWFpbiwgcmFuZ2UpIHtcbiAgICB2YXIgdGhyZXNob2xkcztcbiAgICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgICAgdmFyIGsgPSAwLCBxID0gcmFuZ2UubGVuZ3RoO1xuICAgICAgdGhyZXNob2xkcyA9IFtdO1xuICAgICAgd2hpbGUgKCsrayA8IHEpIHRocmVzaG9sZHNbayAtIDFdID0gZDMucXVhbnRpbGUoZG9tYWluLCBrIC8gcSk7XG4gICAgICByZXR1cm4gc2NhbGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICAgIGlmICghaXNOYU4oeCA9ICt4KSkgcmV0dXJuIHJhbmdlW2QzLmJpc2VjdCh0aHJlc2hvbGRzLCB4KV07XG4gICAgfVxuICAgIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGRvbWFpbjtcbiAgICAgIGRvbWFpbiA9IHgubWFwKGQzX251bWJlcikuZmlsdGVyKGQzX251bWVyaWMpLnNvcnQoZDNfYXNjZW5kaW5nKTtcbiAgICAgIHJldHVybiByZXNjYWxlKCk7XG4gICAgfTtcbiAgICBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHJhbmdlO1xuICAgICAgcmFuZ2UgPSB4O1xuICAgICAgcmV0dXJuIHJlc2NhbGUoKTtcbiAgICB9O1xuICAgIHNjYWxlLnF1YW50aWxlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRocmVzaG9sZHM7XG4gICAgfTtcbiAgICBzY2FsZS5pbnZlcnRFeHRlbnQgPSBmdW5jdGlvbih5KSB7XG4gICAgICB5ID0gcmFuZ2UuaW5kZXhPZih5KTtcbiAgICAgIHJldHVybiB5IDwgMCA/IFsgTmFOLCBOYU4gXSA6IFsgeSA+IDAgPyB0aHJlc2hvbGRzW3kgLSAxXSA6IGRvbWFpblswXSwgeSA8IHRocmVzaG9sZHMubGVuZ3RoID8gdGhyZXNob2xkc1t5XSA6IGRvbWFpbltkb21haW4ubGVuZ3RoIC0gMV0gXTtcbiAgICB9O1xuICAgIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM19zY2FsZV9xdWFudGlsZShkb21haW4sIHJhbmdlKTtcbiAgICB9O1xuICAgIHJldHVybiByZXNjYWxlKCk7XG4gIH1cbiAgZDMuc2NhbGUucXVhbnRpemUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfc2NhbGVfcXVhbnRpemUoMCwgMSwgWyAwLCAxIF0pO1xuICB9O1xuICBmdW5jdGlvbiBkM19zY2FsZV9xdWFudGl6ZSh4MCwgeDEsIHJhbmdlKSB7XG4gICAgdmFyIGt4LCBpO1xuICAgIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICAgIHJldHVybiByYW5nZVtNYXRoLm1heCgwLCBNYXRoLm1pbihpLCBNYXRoLmZsb29yKGt4ICogKHggLSB4MCkpKSldO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgICAga3ggPSByYW5nZS5sZW5ndGggLyAoeDEgLSB4MCk7XG4gICAgICBpID0gcmFuZ2UubGVuZ3RoIC0gMTtcbiAgICAgIHJldHVybiBzY2FsZTtcbiAgICB9XG4gICAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gWyB4MCwgeDEgXTtcbiAgICAgIHgwID0gK3hbMF07XG4gICAgICB4MSA9ICt4W3gubGVuZ3RoIC0gMV07XG4gICAgICByZXR1cm4gcmVzY2FsZSgpO1xuICAgIH07XG4gICAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiByYW5nZTtcbiAgICAgIHJhbmdlID0geDtcbiAgICAgIHJldHVybiByZXNjYWxlKCk7XG4gICAgfTtcbiAgICBzY2FsZS5pbnZlcnRFeHRlbnQgPSBmdW5jdGlvbih5KSB7XG4gICAgICB5ID0gcmFuZ2UuaW5kZXhPZih5KTtcbiAgICAgIHkgPSB5IDwgMCA/IE5hTiA6IHkgLyBreCArIHgwO1xuICAgICAgcmV0dXJuIFsgeSwgeSArIDEgLyBreCBdO1xuICAgIH07XG4gICAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGQzX3NjYWxlX3F1YW50aXplKHgwLCB4MSwgcmFuZ2UpO1xuICAgIH07XG4gICAgcmV0dXJuIHJlc2NhbGUoKTtcbiAgfVxuICBkMy5zY2FsZS50aHJlc2hvbGQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfc2NhbGVfdGhyZXNob2xkKFsgLjUgXSwgWyAwLCAxIF0pO1xuICB9O1xuICBmdW5jdGlvbiBkM19zY2FsZV90aHJlc2hvbGQoZG9tYWluLCByYW5nZSkge1xuICAgIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICAgIGlmICh4IDw9IHgpIHJldHVybiByYW5nZVtkMy5iaXNlY3QoZG9tYWluLCB4KV07XG4gICAgfVxuICAgIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGRvbWFpbjtcbiAgICAgIGRvbWFpbiA9IF87XG4gICAgICByZXR1cm4gc2NhbGU7XG4gICAgfTtcbiAgICBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHJhbmdlO1xuICAgICAgcmFuZ2UgPSBfO1xuICAgICAgcmV0dXJuIHNjYWxlO1xuICAgIH07XG4gICAgc2NhbGUuaW52ZXJ0RXh0ZW50ID0gZnVuY3Rpb24oeSkge1xuICAgICAgeSA9IHJhbmdlLmluZGV4T2YoeSk7XG4gICAgICByZXR1cm4gWyBkb21haW5beSAtIDFdLCBkb21haW5beV0gXTtcbiAgICB9O1xuICAgIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM19zY2FsZV90aHJlc2hvbGQoZG9tYWluLCByYW5nZSk7XG4gICAgfTtcbiAgICByZXR1cm4gc2NhbGU7XG4gIH1cbiAgZDMuc2NhbGUuaWRlbnRpdHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfc2NhbGVfaWRlbnRpdHkoWyAwLCAxIF0pO1xuICB9O1xuICBmdW5jdGlvbiBkM19zY2FsZV9pZGVudGl0eShkb21haW4pIHtcbiAgICBmdW5jdGlvbiBpZGVudGl0eSh4KSB7XG4gICAgICByZXR1cm4gK3g7XG4gICAgfVxuICAgIGlkZW50aXR5LmludmVydCA9IGlkZW50aXR5O1xuICAgIGlkZW50aXR5LmRvbWFpbiA9IGlkZW50aXR5LnJhbmdlID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZG9tYWluO1xuICAgICAgZG9tYWluID0geC5tYXAoaWRlbnRpdHkpO1xuICAgICAgcmV0dXJuIGlkZW50aXR5O1xuICAgIH07XG4gICAgaWRlbnRpdHkudGlja3MgPSBmdW5jdGlvbihtKSB7XG4gICAgICByZXR1cm4gZDNfc2NhbGVfbGluZWFyVGlja3MoZG9tYWluLCBtKTtcbiAgICB9O1xuICAgIGlkZW50aXR5LnRpY2tGb3JtYXQgPSBmdW5jdGlvbihtLCBmb3JtYXQpIHtcbiAgICAgIHJldHVybiBkM19zY2FsZV9saW5lYXJUaWNrRm9ybWF0KGRvbWFpbiwgbSwgZm9ybWF0KTtcbiAgICB9O1xuICAgIGlkZW50aXR5LmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkM19zY2FsZV9pZGVudGl0eShkb21haW4pO1xuICAgIH07XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGQzLnN2ZyA9IHt9O1xuICBmdW5jdGlvbiBkM196ZXJvKCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGQzLnN2Zy5hcmMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5uZXJSYWRpdXMgPSBkM19zdmdfYXJjSW5uZXJSYWRpdXMsIG91dGVyUmFkaXVzID0gZDNfc3ZnX2FyY091dGVyUmFkaXVzLCBjb3JuZXJSYWRpdXMgPSBkM196ZXJvLCBwYWRSYWRpdXMgPSBkM19zdmdfYXJjQXV0bywgc3RhcnRBbmdsZSA9IGQzX3N2Z19hcmNTdGFydEFuZ2xlLCBlbmRBbmdsZSA9IGQzX3N2Z19hcmNFbmRBbmdsZSwgcGFkQW5nbGUgPSBkM19zdmdfYXJjUGFkQW5nbGU7XG4gICAgZnVuY3Rpb24gYXJjKCkge1xuICAgICAgdmFyIHIwID0gTWF0aC5tYXgoMCwgK2lubmVyUmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpLCByMSA9IE1hdGgubWF4KDAsICtvdXRlclJhZGl1cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSwgYTAgPSBzdGFydEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgLSBoYWxmz4AsIGExID0gZW5kQW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSAtIGhhbGbPgCwgZGEgPSBNYXRoLmFicyhhMSAtIGEwKSwgY3cgPSBhMCA+IGExID8gMCA6IDE7XG4gICAgICBpZiAocjEgPCByMCkgcmMgPSByMSwgcjEgPSByMCwgcjAgPSByYztcbiAgICAgIGlmIChkYSA+PSDPhM61KSByZXR1cm4gY2lyY2xlU2VnbWVudChyMSwgY3cpICsgKHIwID8gY2lyY2xlU2VnbWVudChyMCwgMSAtIGN3KSA6IFwiXCIpICsgXCJaXCI7XG4gICAgICB2YXIgcmMsIGNyLCBycCwgYXAsIHAwID0gMCwgcDEgPSAwLCB4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCB4MywgeTMsIHBhdGggPSBbXTtcbiAgICAgIGlmIChhcCA9ICgrcGFkQW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwKSAvIDIpIHtcbiAgICAgICAgcnAgPSBwYWRSYWRpdXMgPT09IGQzX3N2Z19hcmNBdXRvID8gTWF0aC5zcXJ0KHIwICogcjAgKyByMSAqIHIxKSA6ICtwYWRSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKCFjdykgcDEgKj0gLTE7XG4gICAgICAgIGlmIChyMSkgcDEgPSBkM19hc2luKHJwIC8gcjEgKiBNYXRoLnNpbihhcCkpO1xuICAgICAgICBpZiAocjApIHAwID0gZDNfYXNpbihycCAvIHIwICogTWF0aC5zaW4oYXApKTtcbiAgICAgIH1cbiAgICAgIGlmIChyMSkge1xuICAgICAgICB4MCA9IHIxICogTWF0aC5jb3MoYTAgKyBwMSk7XG4gICAgICAgIHkwID0gcjEgKiBNYXRoLnNpbihhMCArIHAxKTtcbiAgICAgICAgeDEgPSByMSAqIE1hdGguY29zKGExIC0gcDEpO1xuICAgICAgICB5MSA9IHIxICogTWF0aC5zaW4oYTEgLSBwMSk7XG4gICAgICAgIHZhciBsMSA9IE1hdGguYWJzKGExIC0gYTAgLSAyICogcDEpIDw9IM+AID8gMCA6IDE7XG4gICAgICAgIGlmIChwMSAmJiBkM19zdmdfYXJjU3dlZXAoeDAsIHkwLCB4MSwgeTEpID09PSBjdyBeIGwxKSB7XG4gICAgICAgICAgdmFyIGgxID0gKGEwICsgYTEpIC8gMjtcbiAgICAgICAgICB4MCA9IHIxICogTWF0aC5jb3MoaDEpO1xuICAgICAgICAgIHkwID0gcjEgKiBNYXRoLnNpbihoMSk7XG4gICAgICAgICAgeDEgPSB5MSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHgwID0geTAgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKHIwKSB7XG4gICAgICAgIHgyID0gcjAgKiBNYXRoLmNvcyhhMSAtIHAwKTtcbiAgICAgICAgeTIgPSByMCAqIE1hdGguc2luKGExIC0gcDApO1xuICAgICAgICB4MyA9IHIwICogTWF0aC5jb3MoYTAgKyBwMCk7XG4gICAgICAgIHkzID0gcjAgKiBNYXRoLnNpbihhMCArIHAwKTtcbiAgICAgICAgdmFyIGwwID0gTWF0aC5hYnMoYTAgLSBhMSArIDIgKiBwMCkgPD0gz4AgPyAwIDogMTtcbiAgICAgICAgaWYgKHAwICYmIGQzX3N2Z19hcmNTd2VlcCh4MiwgeTIsIHgzLCB5MykgPT09IDEgLSBjdyBeIGwwKSB7XG4gICAgICAgICAgdmFyIGgwID0gKGEwICsgYTEpIC8gMjtcbiAgICAgICAgICB4MiA9IHIwICogTWF0aC5jb3MoaDApO1xuICAgICAgICAgIHkyID0gcjAgKiBNYXRoLnNpbihoMCk7XG4gICAgICAgICAgeDMgPSB5MyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHgyID0geTIgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKGRhID4gzrUgJiYgKHJjID0gTWF0aC5taW4oTWF0aC5hYnMocjEgLSByMCkgLyAyLCArY29ybmVyUmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpKSA+IC4wMDEpIHtcbiAgICAgICAgY3IgPSByMCA8IHIxIF4gY3cgPyAwIDogMTtcbiAgICAgICAgdmFyIHJjMSA9IHJjLCByYzAgPSByYztcbiAgICAgICAgaWYgKGRhIDwgz4ApIHtcbiAgICAgICAgICB2YXIgb2MgPSB4MyA9PSBudWxsID8gWyB4MiwgeTIgXSA6IHgxID09IG51bGwgPyBbIHgwLCB5MCBdIDogZDNfZ2VvbV9wb2x5Z29uSW50ZXJzZWN0KFsgeDAsIHkwIF0sIFsgeDMsIHkzIF0sIFsgeDEsIHkxIF0sIFsgeDIsIHkyIF0pLCBheCA9IHgwIC0gb2NbMF0sIGF5ID0geTAgLSBvY1sxXSwgYnggPSB4MSAtIG9jWzBdLCBieSA9IHkxIC0gb2NbMV0sIGtjID0gMSAvIE1hdGguc2luKE1hdGguYWNvcygoYXggKiBieCArIGF5ICogYnkpIC8gKE1hdGguc3FydChheCAqIGF4ICsgYXkgKiBheSkgKiBNYXRoLnNxcnQoYnggKiBieCArIGJ5ICogYnkpKSkgLyAyKSwgbGMgPSBNYXRoLnNxcnQob2NbMF0gKiBvY1swXSArIG9jWzFdICogb2NbMV0pO1xuICAgICAgICAgIHJjMCA9IE1hdGgubWluKHJjLCAocjAgLSBsYykgLyAoa2MgLSAxKSk7XG4gICAgICAgICAgcmMxID0gTWF0aC5taW4ocmMsIChyMSAtIGxjKSAvIChrYyArIDEpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeDEgIT0gbnVsbCkge1xuICAgICAgICAgIHZhciB0MzAgPSBkM19zdmdfYXJjQ29ybmVyVGFuZ2VudHMoeDMgPT0gbnVsbCA/IFsgeDIsIHkyIF0gOiBbIHgzLCB5MyBdLCBbIHgwLCB5MCBdLCByMSwgcmMxLCBjdyksIHQxMiA9IGQzX3N2Z19hcmNDb3JuZXJUYW5nZW50cyhbIHgxLCB5MSBdLCBbIHgyLCB5MiBdLCByMSwgcmMxLCBjdyk7XG4gICAgICAgICAgaWYgKHJjID09PSByYzEpIHtcbiAgICAgICAgICAgIHBhdGgucHVzaChcIk1cIiwgdDMwWzBdLCBcIkFcIiwgcmMxLCBcIixcIiwgcmMxLCBcIiAwIDAsXCIsIGNyLCBcIiBcIiwgdDMwWzFdLCBcIkFcIiwgcjEsIFwiLFwiLCByMSwgXCIgMCBcIiwgMSAtIGN3IF4gZDNfc3ZnX2FyY1N3ZWVwKHQzMFsxXVswXSwgdDMwWzFdWzFdLCB0MTJbMV1bMF0sIHQxMlsxXVsxXSksIFwiLFwiLCBjdywgXCIgXCIsIHQxMlsxXSwgXCJBXCIsIHJjMSwgXCIsXCIsIHJjMSwgXCIgMCAwLFwiLCBjciwgXCIgXCIsIHQxMlswXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhdGgucHVzaChcIk1cIiwgdDMwWzBdLCBcIkFcIiwgcmMxLCBcIixcIiwgcmMxLCBcIiAwIDEsXCIsIGNyLCBcIiBcIiwgdDEyWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGF0aC5wdXNoKFwiTVwiLCB4MCwgXCIsXCIsIHkwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeDMgIT0gbnVsbCkge1xuICAgICAgICAgIHZhciB0MDMgPSBkM19zdmdfYXJjQ29ybmVyVGFuZ2VudHMoWyB4MCwgeTAgXSwgWyB4MywgeTMgXSwgcjAsIC1yYzAsIGN3KSwgdDIxID0gZDNfc3ZnX2FyY0Nvcm5lclRhbmdlbnRzKFsgeDIsIHkyIF0sIHgxID09IG51bGwgPyBbIHgwLCB5MCBdIDogWyB4MSwgeTEgXSwgcjAsIC1yYzAsIGN3KTtcbiAgICAgICAgICBpZiAocmMgPT09IHJjMCkge1xuICAgICAgICAgICAgcGF0aC5wdXNoKFwiTFwiLCB0MjFbMF0sIFwiQVwiLCByYzAsIFwiLFwiLCByYzAsIFwiIDAgMCxcIiwgY3IsIFwiIFwiLCB0MjFbMV0sIFwiQVwiLCByMCwgXCIsXCIsIHIwLCBcIiAwIFwiLCBjdyBeIGQzX3N2Z19hcmNTd2VlcCh0MjFbMV1bMF0sIHQyMVsxXVsxXSwgdDAzWzFdWzBdLCB0MDNbMV1bMV0pLCBcIixcIiwgMSAtIGN3LCBcIiBcIiwgdDAzWzFdLCBcIkFcIiwgcmMwLCBcIixcIiwgcmMwLCBcIiAwIDAsXCIsIGNyLCBcIiBcIiwgdDAzWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGF0aC5wdXNoKFwiTFwiLCB0MjFbMF0sIFwiQVwiLCByYzAsIFwiLFwiLCByYzAsIFwiIDAgMCxcIiwgY3IsIFwiIFwiLCB0MDNbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXRoLnB1c2goXCJMXCIsIHgyLCBcIixcIiwgeTIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoLnB1c2goXCJNXCIsIHgwLCBcIixcIiwgeTApO1xuICAgICAgICBpZiAoeDEgIT0gbnVsbCkgcGF0aC5wdXNoKFwiQVwiLCByMSwgXCIsXCIsIHIxLCBcIiAwIFwiLCBsMSwgXCIsXCIsIGN3LCBcIiBcIiwgeDEsIFwiLFwiLCB5MSk7XG4gICAgICAgIHBhdGgucHVzaChcIkxcIiwgeDIsIFwiLFwiLCB5Mik7XG4gICAgICAgIGlmICh4MyAhPSBudWxsKSBwYXRoLnB1c2goXCJBXCIsIHIwLCBcIixcIiwgcjAsIFwiIDAgXCIsIGwwLCBcIixcIiwgMSAtIGN3LCBcIiBcIiwgeDMsIFwiLFwiLCB5Myk7XG4gICAgICB9XG4gICAgICBwYXRoLnB1c2goXCJaXCIpO1xuICAgICAgcmV0dXJuIHBhdGguam9pbihcIlwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2lyY2xlU2VnbWVudChyMSwgY3cpIHtcbiAgICAgIHJldHVybiBcIk0wLFwiICsgcjEgKyBcIkFcIiArIHIxICsgXCIsXCIgKyByMSArIFwiIDAgMSxcIiArIGN3ICsgXCIgMCxcIiArIC1yMSArIFwiQVwiICsgcjEgKyBcIixcIiArIHIxICsgXCIgMCAxLFwiICsgY3cgKyBcIiAwLFwiICsgcjE7XG4gICAgfVxuICAgIGFyYy5pbm5lclJhZGl1cyA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGlubmVyUmFkaXVzO1xuICAgICAgaW5uZXJSYWRpdXMgPSBkM19mdW5jdG9yKHYpO1xuICAgICAgcmV0dXJuIGFyYztcbiAgICB9O1xuICAgIGFyYy5vdXRlclJhZGl1cyA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIG91dGVyUmFkaXVzO1xuICAgICAgb3V0ZXJSYWRpdXMgPSBkM19mdW5jdG9yKHYpO1xuICAgICAgcmV0dXJuIGFyYztcbiAgICB9O1xuICAgIGFyYy5jb3JuZXJSYWRpdXMgPSBmdW5jdGlvbih2KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBjb3JuZXJSYWRpdXM7XG4gICAgICBjb3JuZXJSYWRpdXMgPSBkM19mdW5jdG9yKHYpO1xuICAgICAgcmV0dXJuIGFyYztcbiAgICB9O1xuICAgIGFyYy5wYWRSYWRpdXMgPSBmdW5jdGlvbih2KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwYWRSYWRpdXM7XG4gICAgICBwYWRSYWRpdXMgPSB2ID09IGQzX3N2Z19hcmNBdXRvID8gZDNfc3ZnX2FyY0F1dG8gOiBkM19mdW5jdG9yKHYpO1xuICAgICAgcmV0dXJuIGFyYztcbiAgICB9O1xuICAgIGFyYy5zdGFydEFuZ2xlID0gZnVuY3Rpb24odikge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc3RhcnRBbmdsZTtcbiAgICAgIHN0YXJ0QW5nbGUgPSBkM19mdW5jdG9yKHYpO1xuICAgICAgcmV0dXJuIGFyYztcbiAgICB9O1xuICAgIGFyYy5lbmRBbmdsZSA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGVuZEFuZ2xlO1xuICAgICAgZW5kQW5nbGUgPSBkM19mdW5jdG9yKHYpO1xuICAgICAgcmV0dXJuIGFyYztcbiAgICB9O1xuICAgIGFyYy5wYWRBbmdsZSA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHBhZEFuZ2xlO1xuICAgICAgcGFkQW5nbGUgPSBkM19mdW5jdG9yKHYpO1xuICAgICAgcmV0dXJuIGFyYztcbiAgICB9O1xuICAgIGFyYy5jZW50cm9pZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHIgPSAoK2lubmVyUmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgKyArb3V0ZXJSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgLyAyLCBhID0gKCtzdGFydEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgKyArZW5kQW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgLyAyIC0gaGFsZs+AO1xuICAgICAgcmV0dXJuIFsgTWF0aC5jb3MoYSkgKiByLCBNYXRoLnNpbihhKSAqIHIgXTtcbiAgICB9O1xuICAgIHJldHVybiBhcmM7XG4gIH07XG4gIHZhciBkM19zdmdfYXJjQXV0byA9IFwiYXV0b1wiO1xuICBmdW5jdGlvbiBkM19zdmdfYXJjSW5uZXJSYWRpdXMoZCkge1xuICAgIHJldHVybiBkLmlubmVyUmFkaXVzO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3N2Z19hcmNPdXRlclJhZGl1cyhkKSB7XG4gICAgcmV0dXJuIGQub3V0ZXJSYWRpdXM7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2FyY1N0YXJ0QW5nbGUoZCkge1xuICAgIHJldHVybiBkLnN0YXJ0QW5nbGU7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2FyY0VuZEFuZ2xlKGQpIHtcbiAgICByZXR1cm4gZC5lbmRBbmdsZTtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfYXJjUGFkQW5nbGUoZCkge1xuICAgIHJldHVybiBkICYmIGQucGFkQW5nbGU7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2FyY1N3ZWVwKHgwLCB5MCwgeDEsIHkxKSB7XG4gICAgcmV0dXJuICh4MCAtIHgxKSAqIHkwIC0gKHkwIC0geTEpICogeDAgPiAwID8gMCA6IDE7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2FyY0Nvcm5lclRhbmdlbnRzKHAwLCBwMSwgcjEsIHJjLCBjdykge1xuICAgIHZhciB4MDEgPSBwMFswXSAtIHAxWzBdLCB5MDEgPSBwMFsxXSAtIHAxWzFdLCBsbyA9IChjdyA/IHJjIDogLXJjKSAvIE1hdGguc3FydCh4MDEgKiB4MDEgKyB5MDEgKiB5MDEpLCBveCA9IGxvICogeTAxLCBveSA9IC1sbyAqIHgwMSwgeDEgPSBwMFswXSArIG94LCB5MSA9IHAwWzFdICsgb3ksIHgyID0gcDFbMF0gKyBveCwgeTIgPSBwMVsxXSArIG95LCB4MyA9ICh4MSArIHgyKSAvIDIsIHkzID0gKHkxICsgeTIpIC8gMiwgZHggPSB4MiAtIHgxLCBkeSA9IHkyIC0geTEsIGQyID0gZHggKiBkeCArIGR5ICogZHksIHIgPSByMSAtIHJjLCBEID0geDEgKiB5MiAtIHgyICogeTEsIGQgPSAoZHkgPCAwID8gLTEgOiAxKSAqIE1hdGguc3FydChNYXRoLm1heCgwLCByICogciAqIGQyIC0gRCAqIEQpKSwgY3gwID0gKEQgKiBkeSAtIGR4ICogZCkgLyBkMiwgY3kwID0gKC1EICogZHggLSBkeSAqIGQpIC8gZDIsIGN4MSA9IChEICogZHkgKyBkeCAqIGQpIC8gZDIsIGN5MSA9ICgtRCAqIGR4ICsgZHkgKiBkKSAvIGQyLCBkeDAgPSBjeDAgLSB4MywgZHkwID0gY3kwIC0geTMsIGR4MSA9IGN4MSAtIHgzLCBkeTEgPSBjeTEgLSB5MztcbiAgICBpZiAoZHgwICogZHgwICsgZHkwICogZHkwID4gZHgxICogZHgxICsgZHkxICogZHkxKSBjeDAgPSBjeDEsIGN5MCA9IGN5MTtcbiAgICByZXR1cm4gWyBbIGN4MCAtIG94LCBjeTAgLSBveSBdLCBbIGN4MCAqIHIxIC8gciwgY3kwICogcjEgLyByIF0gXTtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZShwcm9qZWN0aW9uKSB7XG4gICAgdmFyIHggPSBkM19nZW9tX3BvaW50WCwgeSA9IGQzX2dlb21fcG9pbnRZLCBkZWZpbmVkID0gZDNfdHJ1ZSwgaW50ZXJwb2xhdGUgPSBkM19zdmdfbGluZUxpbmVhciwgaW50ZXJwb2xhdGVLZXkgPSBpbnRlcnBvbGF0ZS5rZXksIHRlbnNpb24gPSAuNztcbiAgICBmdW5jdGlvbiBsaW5lKGRhdGEpIHtcbiAgICAgIHZhciBzZWdtZW50cyA9IFtdLCBwb2ludHMgPSBbXSwgaSA9IC0xLCBuID0gZGF0YS5sZW5ndGgsIGQsIGZ4ID0gZDNfZnVuY3Rvcih4KSwgZnkgPSBkM19mdW5jdG9yKHkpO1xuICAgICAgZnVuY3Rpb24gc2VnbWVudCgpIHtcbiAgICAgICAgc2VnbWVudHMucHVzaChcIk1cIiwgaW50ZXJwb2xhdGUocHJvamVjdGlvbihwb2ludHMpLCB0ZW5zaW9uKSk7XG4gICAgICB9XG4gICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICBpZiAoZGVmaW5lZC5jYWxsKHRoaXMsIGQgPSBkYXRhW2ldLCBpKSkge1xuICAgICAgICAgIHBvaW50cy5wdXNoKFsgK2Z4LmNhbGwodGhpcywgZCwgaSksICtmeS5jYWxsKHRoaXMsIGQsIGkpIF0pO1xuICAgICAgICB9IGVsc2UgaWYgKHBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBzZWdtZW50KCk7XG4gICAgICAgICAgcG9pbnRzID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwb2ludHMubGVuZ3RoKSBzZWdtZW50KCk7XG4gICAgICByZXR1cm4gc2VnbWVudHMubGVuZ3RoID8gc2VnbWVudHMuam9pbihcIlwiKSA6IG51bGw7XG4gICAgfVxuICAgIGxpbmUueCA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHg7XG4gICAgICB4ID0gXztcbiAgICAgIHJldHVybiBsaW5lO1xuICAgIH07XG4gICAgbGluZS55ID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4geTtcbiAgICAgIHkgPSBfO1xuICAgICAgcmV0dXJuIGxpbmU7XG4gICAgfTtcbiAgICBsaW5lLmRlZmluZWQgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBkZWZpbmVkO1xuICAgICAgZGVmaW5lZCA9IF87XG4gICAgICByZXR1cm4gbGluZTtcbiAgICB9O1xuICAgIGxpbmUuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBpbnRlcnBvbGF0ZUtleTtcbiAgICAgIGlmICh0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiKSBpbnRlcnBvbGF0ZUtleSA9IGludGVycG9sYXRlID0gXzsgZWxzZSBpbnRlcnBvbGF0ZUtleSA9IChpbnRlcnBvbGF0ZSA9IGQzX3N2Z19saW5lSW50ZXJwb2xhdG9ycy5nZXQoXykgfHwgZDNfc3ZnX2xpbmVMaW5lYXIpLmtleTtcbiAgICAgIHJldHVybiBsaW5lO1xuICAgIH07XG4gICAgbGluZS50ZW5zaW9uID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGVuc2lvbjtcbiAgICAgIHRlbnNpb24gPSBfO1xuICAgICAgcmV0dXJuIGxpbmU7XG4gICAgfTtcbiAgICByZXR1cm4gbGluZTtcbiAgfVxuICBkMy5zdmcubGluZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkM19zdmdfbGluZShkM19pZGVudGl0eSk7XG4gIH07XG4gIHZhciBkM19zdmdfbGluZUludGVycG9sYXRvcnMgPSBkMy5tYXAoe1xuICAgIGxpbmVhcjogZDNfc3ZnX2xpbmVMaW5lYXIsXG4gICAgXCJsaW5lYXItY2xvc2VkXCI6IGQzX3N2Z19saW5lTGluZWFyQ2xvc2VkLFxuICAgIHN0ZXA6IGQzX3N2Z19saW5lU3RlcCxcbiAgICBcInN0ZXAtYmVmb3JlXCI6IGQzX3N2Z19saW5lU3RlcEJlZm9yZSxcbiAgICBcInN0ZXAtYWZ0ZXJcIjogZDNfc3ZnX2xpbmVTdGVwQWZ0ZXIsXG4gICAgYmFzaXM6IGQzX3N2Z19saW5lQmFzaXMsXG4gICAgXCJiYXNpcy1vcGVuXCI6IGQzX3N2Z19saW5lQmFzaXNPcGVuLFxuICAgIFwiYmFzaXMtY2xvc2VkXCI6IGQzX3N2Z19saW5lQmFzaXNDbG9zZWQsXG4gICAgYnVuZGxlOiBkM19zdmdfbGluZUJ1bmRsZSxcbiAgICBjYXJkaW5hbDogZDNfc3ZnX2xpbmVDYXJkaW5hbCxcbiAgICBcImNhcmRpbmFsLW9wZW5cIjogZDNfc3ZnX2xpbmVDYXJkaW5hbE9wZW4sXG4gICAgXCJjYXJkaW5hbC1jbG9zZWRcIjogZDNfc3ZnX2xpbmVDYXJkaW5hbENsb3NlZCxcbiAgICBtb25vdG9uZTogZDNfc3ZnX2xpbmVNb25vdG9uZVxuICB9KTtcbiAgZDNfc3ZnX2xpbmVJbnRlcnBvbGF0b3JzLmZvckVhY2goZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIHZhbHVlLmtleSA9IGtleTtcbiAgICB2YWx1ZS5jbG9zZWQgPSAvLWNsb3NlZCQvLnRlc3Qoa2V5KTtcbiAgfSk7XG4gIGZ1bmN0aW9uIGQzX3N2Z19saW5lTGluZWFyKHBvaW50cykge1xuICAgIHJldHVybiBwb2ludHMubGVuZ3RoID4gMSA/IHBvaW50cy5qb2luKFwiTFwiKSA6IHBvaW50cyArIFwiWlwiO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3N2Z19saW5lTGluZWFyQ2xvc2VkKHBvaW50cykge1xuICAgIHJldHVybiBwb2ludHMuam9pbihcIkxcIikgKyBcIlpcIjtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZVN0ZXAocG9pbnRzKSB7XG4gICAgdmFyIGkgPSAwLCBuID0gcG9pbnRzLmxlbmd0aCwgcCA9IHBvaW50c1swXSwgcGF0aCA9IFsgcFswXSwgXCIsXCIsIHBbMV0gXTtcbiAgICB3aGlsZSAoKytpIDwgbikgcGF0aC5wdXNoKFwiSFwiLCAocFswXSArIChwID0gcG9pbnRzW2ldKVswXSkgLyAyLCBcIlZcIiwgcFsxXSk7XG4gICAgaWYgKG4gPiAxKSBwYXRoLnB1c2goXCJIXCIsIHBbMF0pO1xuICAgIHJldHVybiBwYXRoLmpvaW4oXCJcIik7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2xpbmVTdGVwQmVmb3JlKHBvaW50cykge1xuICAgIHZhciBpID0gMCwgbiA9IHBvaW50cy5sZW5ndGgsIHAgPSBwb2ludHNbMF0sIHBhdGggPSBbIHBbMF0sIFwiLFwiLCBwWzFdIF07XG4gICAgd2hpbGUgKCsraSA8IG4pIHBhdGgucHVzaChcIlZcIiwgKHAgPSBwb2ludHNbaV0pWzFdLCBcIkhcIiwgcFswXSk7XG4gICAgcmV0dXJuIHBhdGguam9pbihcIlwiKTtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZVN0ZXBBZnRlcihwb2ludHMpIHtcbiAgICB2YXIgaSA9IDAsIG4gPSBwb2ludHMubGVuZ3RoLCBwID0gcG9pbnRzWzBdLCBwYXRoID0gWyBwWzBdLCBcIixcIiwgcFsxXSBdO1xuICAgIHdoaWxlICgrK2kgPCBuKSBwYXRoLnB1c2goXCJIXCIsIChwID0gcG9pbnRzW2ldKVswXSwgXCJWXCIsIHBbMV0pO1xuICAgIHJldHVybiBwYXRoLmpvaW4oXCJcIik7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2xpbmVDYXJkaW5hbE9wZW4ocG9pbnRzLCB0ZW5zaW9uKSB7XG4gICAgcmV0dXJuIHBvaW50cy5sZW5ndGggPCA0ID8gZDNfc3ZnX2xpbmVMaW5lYXIocG9pbnRzKSA6IHBvaW50c1sxXSArIGQzX3N2Z19saW5lSGVybWl0ZShwb2ludHMuc2xpY2UoMSwgLTEpLCBkM19zdmdfbGluZUNhcmRpbmFsVGFuZ2VudHMocG9pbnRzLCB0ZW5zaW9uKSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2xpbmVDYXJkaW5hbENsb3NlZChwb2ludHMsIHRlbnNpb24pIHtcbiAgICByZXR1cm4gcG9pbnRzLmxlbmd0aCA8IDMgPyBkM19zdmdfbGluZUxpbmVhckNsb3NlZChwb2ludHMpIDogcG9pbnRzWzBdICsgZDNfc3ZnX2xpbmVIZXJtaXRlKChwb2ludHMucHVzaChwb2ludHNbMF0pLCBcbiAgICBwb2ludHMpLCBkM19zdmdfbGluZUNhcmRpbmFsVGFuZ2VudHMoWyBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDJdIF0uY29uY2F0KHBvaW50cywgWyBwb2ludHNbMV0gXSksIHRlbnNpb24pKTtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZUNhcmRpbmFsKHBvaW50cywgdGVuc2lvbikge1xuICAgIHJldHVybiBwb2ludHMubGVuZ3RoIDwgMyA/IGQzX3N2Z19saW5lTGluZWFyKHBvaW50cykgOiBwb2ludHNbMF0gKyBkM19zdmdfbGluZUhlcm1pdGUocG9pbnRzLCBkM19zdmdfbGluZUNhcmRpbmFsVGFuZ2VudHMocG9pbnRzLCB0ZW5zaW9uKSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2xpbmVIZXJtaXRlKHBvaW50cywgdGFuZ2VudHMpIHtcbiAgICBpZiAodGFuZ2VudHMubGVuZ3RoIDwgMSB8fCBwb2ludHMubGVuZ3RoICE9IHRhbmdlbnRzLmxlbmd0aCAmJiBwb2ludHMubGVuZ3RoICE9IHRhbmdlbnRzLmxlbmd0aCArIDIpIHtcbiAgICAgIHJldHVybiBkM19zdmdfbGluZUxpbmVhcihwb2ludHMpO1xuICAgIH1cbiAgICB2YXIgcXVhZCA9IHBvaW50cy5sZW5ndGggIT0gdGFuZ2VudHMubGVuZ3RoLCBwYXRoID0gXCJcIiwgcDAgPSBwb2ludHNbMF0sIHAgPSBwb2ludHNbMV0sIHQwID0gdGFuZ2VudHNbMF0sIHQgPSB0MCwgcGkgPSAxO1xuICAgIGlmIChxdWFkKSB7XG4gICAgICBwYXRoICs9IFwiUVwiICsgKHBbMF0gLSB0MFswXSAqIDIgLyAzKSArIFwiLFwiICsgKHBbMV0gLSB0MFsxXSAqIDIgLyAzKSArIFwiLFwiICsgcFswXSArIFwiLFwiICsgcFsxXTtcbiAgICAgIHAwID0gcG9pbnRzWzFdO1xuICAgICAgcGkgPSAyO1xuICAgIH1cbiAgICBpZiAodGFuZ2VudHMubGVuZ3RoID4gMSkge1xuICAgICAgdCA9IHRhbmdlbnRzWzFdO1xuICAgICAgcCA9IHBvaW50c1twaV07XG4gICAgICBwaSsrO1xuICAgICAgcGF0aCArPSBcIkNcIiArIChwMFswXSArIHQwWzBdKSArIFwiLFwiICsgKHAwWzFdICsgdDBbMV0pICsgXCIsXCIgKyAocFswXSAtIHRbMF0pICsgXCIsXCIgKyAocFsxXSAtIHRbMV0pICsgXCIsXCIgKyBwWzBdICsgXCIsXCIgKyBwWzFdO1xuICAgICAgZm9yICh2YXIgaSA9IDI7IGkgPCB0YW5nZW50cy5sZW5ndGg7IGkrKywgcGkrKykge1xuICAgICAgICBwID0gcG9pbnRzW3BpXTtcbiAgICAgICAgdCA9IHRhbmdlbnRzW2ldO1xuICAgICAgICBwYXRoICs9IFwiU1wiICsgKHBbMF0gLSB0WzBdKSArIFwiLFwiICsgKHBbMV0gLSB0WzFdKSArIFwiLFwiICsgcFswXSArIFwiLFwiICsgcFsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHF1YWQpIHtcbiAgICAgIHZhciBscCA9IHBvaW50c1twaV07XG4gICAgICBwYXRoICs9IFwiUVwiICsgKHBbMF0gKyB0WzBdICogMiAvIDMpICsgXCIsXCIgKyAocFsxXSArIHRbMV0gKiAyIC8gMykgKyBcIixcIiArIGxwWzBdICsgXCIsXCIgKyBscFsxXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2xpbmVDYXJkaW5hbFRhbmdlbnRzKHBvaW50cywgdGVuc2lvbikge1xuICAgIHZhciB0YW5nZW50cyA9IFtdLCBhID0gKDEgLSB0ZW5zaW9uKSAvIDIsIHAwLCBwMSA9IHBvaW50c1swXSwgcDIgPSBwb2ludHNbMV0sIGkgPSAxLCBuID0gcG9pbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgcDAgPSBwMTtcbiAgICAgIHAxID0gcDI7XG4gICAgICBwMiA9IHBvaW50c1tpXTtcbiAgICAgIHRhbmdlbnRzLnB1c2goWyBhICogKHAyWzBdIC0gcDBbMF0pLCBhICogKHAyWzFdIC0gcDBbMV0pIF0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFuZ2VudHM7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2xpbmVCYXNpcyhwb2ludHMpIHtcbiAgICBpZiAocG9pbnRzLmxlbmd0aCA8IDMpIHJldHVybiBkM19zdmdfbGluZUxpbmVhcihwb2ludHMpO1xuICAgIHZhciBpID0gMSwgbiA9IHBvaW50cy5sZW5ndGgsIHBpID0gcG9pbnRzWzBdLCB4MCA9IHBpWzBdLCB5MCA9IHBpWzFdLCBweCA9IFsgeDAsIHgwLCB4MCwgKHBpID0gcG9pbnRzWzFdKVswXSBdLCBweSA9IFsgeTAsIHkwLCB5MCwgcGlbMV0gXSwgcGF0aCA9IFsgeDAsIFwiLFwiLCB5MCwgXCJMXCIsIGQzX3N2Z19saW5lRG90NChkM19zdmdfbGluZUJhc2lzQmV6aWVyMywgcHgpLCBcIixcIiwgZDNfc3ZnX2xpbmVEb3Q0KGQzX3N2Z19saW5lQmFzaXNCZXppZXIzLCBweSkgXTtcbiAgICBwb2ludHMucHVzaChwb2ludHNbbiAtIDFdKTtcbiAgICB3aGlsZSAoKytpIDw9IG4pIHtcbiAgICAgIHBpID0gcG9pbnRzW2ldO1xuICAgICAgcHguc2hpZnQoKTtcbiAgICAgIHB4LnB1c2gocGlbMF0pO1xuICAgICAgcHkuc2hpZnQoKTtcbiAgICAgIHB5LnB1c2gocGlbMV0pO1xuICAgICAgZDNfc3ZnX2xpbmVCYXNpc0JlemllcihwYXRoLCBweCwgcHkpO1xuICAgIH1cbiAgICBwb2ludHMucG9wKCk7XG4gICAgcGF0aC5wdXNoKFwiTFwiLCBwaSk7XG4gICAgcmV0dXJuIHBhdGguam9pbihcIlwiKTtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZUJhc2lzT3Blbihwb2ludHMpIHtcbiAgICBpZiAocG9pbnRzLmxlbmd0aCA8IDQpIHJldHVybiBkM19zdmdfbGluZUxpbmVhcihwb2ludHMpO1xuICAgIHZhciBwYXRoID0gW10sIGkgPSAtMSwgbiA9IHBvaW50cy5sZW5ndGgsIHBpLCBweCA9IFsgMCBdLCBweSA9IFsgMCBdO1xuICAgIHdoaWxlICgrK2kgPCAzKSB7XG4gICAgICBwaSA9IHBvaW50c1tpXTtcbiAgICAgIHB4LnB1c2gocGlbMF0pO1xuICAgICAgcHkucHVzaChwaVsxXSk7XG4gICAgfVxuICAgIHBhdGgucHVzaChkM19zdmdfbGluZURvdDQoZDNfc3ZnX2xpbmVCYXNpc0JlemllcjMsIHB4KSArIFwiLFwiICsgZDNfc3ZnX2xpbmVEb3Q0KGQzX3N2Z19saW5lQmFzaXNCZXppZXIzLCBweSkpO1xuICAgIC0taTtcbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgcGkgPSBwb2ludHNbaV07XG4gICAgICBweC5zaGlmdCgpO1xuICAgICAgcHgucHVzaChwaVswXSk7XG4gICAgICBweS5zaGlmdCgpO1xuICAgICAgcHkucHVzaChwaVsxXSk7XG4gICAgICBkM19zdmdfbGluZUJhc2lzQmV6aWVyKHBhdGgsIHB4LCBweSk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoLmpvaW4oXCJcIik7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2xpbmVCYXNpc0Nsb3NlZChwb2ludHMpIHtcbiAgICB2YXIgcGF0aCwgaSA9IC0xLCBuID0gcG9pbnRzLmxlbmd0aCwgbSA9IG4gKyA0LCBwaSwgcHggPSBbXSwgcHkgPSBbXTtcbiAgICB3aGlsZSAoKytpIDwgNCkge1xuICAgICAgcGkgPSBwb2ludHNbaSAlIG5dO1xuICAgICAgcHgucHVzaChwaVswXSk7XG4gICAgICBweS5wdXNoKHBpWzFdKTtcbiAgICB9XG4gICAgcGF0aCA9IFsgZDNfc3ZnX2xpbmVEb3Q0KGQzX3N2Z19saW5lQmFzaXNCZXppZXIzLCBweCksIFwiLFwiLCBkM19zdmdfbGluZURvdDQoZDNfc3ZnX2xpbmVCYXNpc0JlemllcjMsIHB5KSBdO1xuICAgIC0taTtcbiAgICB3aGlsZSAoKytpIDwgbSkge1xuICAgICAgcGkgPSBwb2ludHNbaSAlIG5dO1xuICAgICAgcHguc2hpZnQoKTtcbiAgICAgIHB4LnB1c2gocGlbMF0pO1xuICAgICAgcHkuc2hpZnQoKTtcbiAgICAgIHB5LnB1c2gocGlbMV0pO1xuICAgICAgZDNfc3ZnX2xpbmVCYXNpc0JlemllcihwYXRoLCBweCwgcHkpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aC5qb2luKFwiXCIpO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3N2Z19saW5lQnVuZGxlKHBvaW50cywgdGVuc2lvbikge1xuICAgIHZhciBuID0gcG9pbnRzLmxlbmd0aCAtIDE7XG4gICAgaWYgKG4pIHtcbiAgICAgIHZhciB4MCA9IHBvaW50c1swXVswXSwgeTAgPSBwb2ludHNbMF1bMV0sIGR4ID0gcG9pbnRzW25dWzBdIC0geDAsIGR5ID0gcG9pbnRzW25dWzFdIC0geTAsIGkgPSAtMSwgcCwgdDtcbiAgICAgIHdoaWxlICgrK2kgPD0gbikge1xuICAgICAgICBwID0gcG9pbnRzW2ldO1xuICAgICAgICB0ID0gaSAvIG47XG4gICAgICAgIHBbMF0gPSB0ZW5zaW9uICogcFswXSArICgxIC0gdGVuc2lvbikgKiAoeDAgKyB0ICogZHgpO1xuICAgICAgICBwWzFdID0gdGVuc2lvbiAqIHBbMV0gKyAoMSAtIHRlbnNpb24pICogKHkwICsgdCAqIGR5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGQzX3N2Z19saW5lQmFzaXMocG9pbnRzKTtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZURvdDQoYSwgYikge1xuICAgIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl0gKyBhWzNdICogYlszXTtcbiAgfVxuICB2YXIgZDNfc3ZnX2xpbmVCYXNpc0JlemllcjEgPSBbIDAsIDIgLyAzLCAxIC8gMywgMCBdLCBkM19zdmdfbGluZUJhc2lzQmV6aWVyMiA9IFsgMCwgMSAvIDMsIDIgLyAzLCAwIF0sIGQzX3N2Z19saW5lQmFzaXNCZXppZXIzID0gWyAwLCAxIC8gNiwgMiAvIDMsIDEgLyA2IF07XG4gIGZ1bmN0aW9uIGQzX3N2Z19saW5lQmFzaXNCZXppZXIocGF0aCwgeCwgeSkge1xuICAgIHBhdGgucHVzaChcIkNcIiwgZDNfc3ZnX2xpbmVEb3Q0KGQzX3N2Z19saW5lQmFzaXNCZXppZXIxLCB4KSwgXCIsXCIsIGQzX3N2Z19saW5lRG90NChkM19zdmdfbGluZUJhc2lzQmV6aWVyMSwgeSksIFwiLFwiLCBkM19zdmdfbGluZURvdDQoZDNfc3ZnX2xpbmVCYXNpc0JlemllcjIsIHgpLCBcIixcIiwgZDNfc3ZnX2xpbmVEb3Q0KGQzX3N2Z19saW5lQmFzaXNCZXppZXIyLCB5KSwgXCIsXCIsIGQzX3N2Z19saW5lRG90NChkM19zdmdfbGluZUJhc2lzQmV6aWVyMywgeCksIFwiLFwiLCBkM19zdmdfbGluZURvdDQoZDNfc3ZnX2xpbmVCYXNpc0JlemllcjMsIHkpKTtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZVNsb3BlKHAwLCBwMSkge1xuICAgIHJldHVybiAocDFbMV0gLSBwMFsxXSkgLyAocDFbMF0gLSBwMFswXSk7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2xpbmVGaW5pdGVEaWZmZXJlbmNlcyhwb2ludHMpIHtcbiAgICB2YXIgaSA9IDAsIGogPSBwb2ludHMubGVuZ3RoIC0gMSwgbSA9IFtdLCBwMCA9IHBvaW50c1swXSwgcDEgPSBwb2ludHNbMV0sIGQgPSBtWzBdID0gZDNfc3ZnX2xpbmVTbG9wZShwMCwgcDEpO1xuICAgIHdoaWxlICgrK2kgPCBqKSB7XG4gICAgICBtW2ldID0gKGQgKyAoZCA9IGQzX3N2Z19saW5lU2xvcGUocDAgPSBwMSwgcDEgPSBwb2ludHNbaSArIDFdKSkpIC8gMjtcbiAgICB9XG4gICAgbVtpXSA9IGQ7XG4gICAgcmV0dXJuIG07XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2xpbmVNb25vdG9uZVRhbmdlbnRzKHBvaW50cykge1xuICAgIHZhciB0YW5nZW50cyA9IFtdLCBkLCBhLCBiLCBzLCBtID0gZDNfc3ZnX2xpbmVGaW5pdGVEaWZmZXJlbmNlcyhwb2ludHMpLCBpID0gLTEsIGogPSBwb2ludHMubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAoKytpIDwgaikge1xuICAgICAgZCA9IGQzX3N2Z19saW5lU2xvcGUocG9pbnRzW2ldLCBwb2ludHNbaSArIDFdKTtcbiAgICAgIGlmIChhYnMoZCkgPCDOtSkge1xuICAgICAgICBtW2ldID0gbVtpICsgMV0gPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYSA9IG1baV0gLyBkO1xuICAgICAgICBiID0gbVtpICsgMV0gLyBkO1xuICAgICAgICBzID0gYSAqIGEgKyBiICogYjtcbiAgICAgICAgaWYgKHMgPiA5KSB7XG4gICAgICAgICAgcyA9IGQgKiAzIC8gTWF0aC5zcXJ0KHMpO1xuICAgICAgICAgIG1baV0gPSBzICogYTtcbiAgICAgICAgICBtW2kgKyAxXSA9IHMgKiBiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGkgPSAtMTtcbiAgICB3aGlsZSAoKytpIDw9IGopIHtcbiAgICAgIHMgPSAocG9pbnRzW01hdGgubWluKGosIGkgKyAxKV1bMF0gLSBwb2ludHNbTWF0aC5tYXgoMCwgaSAtIDEpXVswXSkgLyAoNiAqICgxICsgbVtpXSAqIG1baV0pKTtcbiAgICAgIHRhbmdlbnRzLnB1c2goWyBzIHx8IDAsIG1baV0gKiBzIHx8IDAgXSk7XG4gICAgfVxuICAgIHJldHVybiB0YW5nZW50cztcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfbGluZU1vbm90b25lKHBvaW50cykge1xuICAgIHJldHVybiBwb2ludHMubGVuZ3RoIDwgMyA/IGQzX3N2Z19saW5lTGluZWFyKHBvaW50cykgOiBwb2ludHNbMF0gKyBkM19zdmdfbGluZUhlcm1pdGUocG9pbnRzLCBkM19zdmdfbGluZU1vbm90b25lVGFuZ2VudHMocG9pbnRzKSk7XG4gIH1cbiAgZDMuc3ZnLmxpbmUucmFkaWFsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxpbmUgPSBkM19zdmdfbGluZShkM19zdmdfbGluZVJhZGlhbCk7XG4gICAgbGluZS5yYWRpdXMgPSBsaW5lLngsIGRlbGV0ZSBsaW5lLng7XG4gICAgbGluZS5hbmdsZSA9IGxpbmUueSwgZGVsZXRlIGxpbmUueTtcbiAgICByZXR1cm4gbGluZTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc3ZnX2xpbmVSYWRpYWwocG9pbnRzKSB7XG4gICAgdmFyIHBvaW50LCBpID0gLTEsIG4gPSBwb2ludHMubGVuZ3RoLCByLCBhO1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBwb2ludCA9IHBvaW50c1tpXTtcbiAgICAgIHIgPSBwb2ludFswXTtcbiAgICAgIGEgPSBwb2ludFsxXSAtIGhhbGbPgDtcbiAgICAgIHBvaW50WzBdID0gciAqIE1hdGguY29zKGEpO1xuICAgICAgcG9pbnRbMV0gPSByICogTWF0aC5zaW4oYSk7XG4gICAgfVxuICAgIHJldHVybiBwb2ludHM7XG4gIH1cbiAgZnVuY3Rpb24gZDNfc3ZnX2FyZWEocHJvamVjdGlvbikge1xuICAgIHZhciB4MCA9IGQzX2dlb21fcG9pbnRYLCB4MSA9IGQzX2dlb21fcG9pbnRYLCB5MCA9IDAsIHkxID0gZDNfZ2VvbV9wb2ludFksIGRlZmluZWQgPSBkM190cnVlLCBpbnRlcnBvbGF0ZSA9IGQzX3N2Z19saW5lTGluZWFyLCBpbnRlcnBvbGF0ZUtleSA9IGludGVycG9sYXRlLmtleSwgaW50ZXJwb2xhdGVSZXZlcnNlID0gaW50ZXJwb2xhdGUsIEwgPSBcIkxcIiwgdGVuc2lvbiA9IC43O1xuICAgIGZ1bmN0aW9uIGFyZWEoZGF0YSkge1xuICAgICAgdmFyIHNlZ21lbnRzID0gW10sIHBvaW50czAgPSBbXSwgcG9pbnRzMSA9IFtdLCBpID0gLTEsIG4gPSBkYXRhLmxlbmd0aCwgZCwgZngwID0gZDNfZnVuY3Rvcih4MCksIGZ5MCA9IGQzX2Z1bmN0b3IoeTApLCBmeDEgPSB4MCA9PT0geDEgPyBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgICB9IDogZDNfZnVuY3Rvcih4MSksIGZ5MSA9IHkwID09PSB5MSA/IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4geTtcbiAgICAgIH0gOiBkM19mdW5jdG9yKHkxKSwgeCwgeTtcbiAgICAgIGZ1bmN0aW9uIHNlZ21lbnQoKSB7XG4gICAgICAgIHNlZ21lbnRzLnB1c2goXCJNXCIsIGludGVycG9sYXRlKHByb2plY3Rpb24ocG9pbnRzMSksIHRlbnNpb24pLCBMLCBpbnRlcnBvbGF0ZVJldmVyc2UocHJvamVjdGlvbihwb2ludHMwLnJldmVyc2UoKSksIHRlbnNpb24pLCBcIlpcIik7XG4gICAgICB9XG4gICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICBpZiAoZGVmaW5lZC5jYWxsKHRoaXMsIGQgPSBkYXRhW2ldLCBpKSkge1xuICAgICAgICAgIHBvaW50czAucHVzaChbIHggPSArZngwLmNhbGwodGhpcywgZCwgaSksIHkgPSArZnkwLmNhbGwodGhpcywgZCwgaSkgXSk7XG4gICAgICAgICAgcG9pbnRzMS5wdXNoKFsgK2Z4MS5jYWxsKHRoaXMsIGQsIGkpLCArZnkxLmNhbGwodGhpcywgZCwgaSkgXSk7XG4gICAgICAgIH0gZWxzZSBpZiAocG9pbnRzMC5sZW5ndGgpIHtcbiAgICAgICAgICBzZWdtZW50KCk7XG4gICAgICAgICAgcG9pbnRzMCA9IFtdO1xuICAgICAgICAgIHBvaW50czEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBvaW50czAubGVuZ3RoKSBzZWdtZW50KCk7XG4gICAgICByZXR1cm4gc2VnbWVudHMubGVuZ3RoID8gc2VnbWVudHMuam9pbihcIlwiKSA6IG51bGw7XG4gICAgfVxuICAgIGFyZWEueCA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHgxO1xuICAgICAgeDAgPSB4MSA9IF87XG4gICAgICByZXR1cm4gYXJlYTtcbiAgICB9O1xuICAgIGFyZWEueDAgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB4MDtcbiAgICAgIHgwID0gXztcbiAgICAgIHJldHVybiBhcmVhO1xuICAgIH07XG4gICAgYXJlYS54MSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHgxO1xuICAgICAgeDEgPSBfO1xuICAgICAgcmV0dXJuIGFyZWE7XG4gICAgfTtcbiAgICBhcmVhLnkgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB5MTtcbiAgICAgIHkwID0geTEgPSBfO1xuICAgICAgcmV0dXJuIGFyZWE7XG4gICAgfTtcbiAgICBhcmVhLnkwID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4geTA7XG4gICAgICB5MCA9IF87XG4gICAgICByZXR1cm4gYXJlYTtcbiAgICB9O1xuICAgIGFyZWEueTEgPSBmdW5jdGlvbihfKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB5MTtcbiAgICAgIHkxID0gXztcbiAgICAgIHJldHVybiBhcmVhO1xuICAgIH07XG4gICAgYXJlYS5kZWZpbmVkID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZGVmaW5lZDtcbiAgICAgIGRlZmluZWQgPSBfO1xuICAgICAgcmV0dXJuIGFyZWE7XG4gICAgfTtcbiAgICBhcmVhLmludGVycG9sYXRlID0gZnVuY3Rpb24oXykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gaW50ZXJwb2xhdGVLZXk7XG4gICAgICBpZiAodHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIikgaW50ZXJwb2xhdGVLZXkgPSBpbnRlcnBvbGF0ZSA9IF87IGVsc2UgaW50ZXJwb2xhdGVLZXkgPSAoaW50ZXJwb2xhdGUgPSBkM19zdmdfbGluZUludGVycG9sYXRvcnMuZ2V0KF8pIHx8IGQzX3N2Z19saW5lTGluZWFyKS5rZXk7XG4gICAgICBpbnRlcnBvbGF0ZVJldmVyc2UgPSBpbnRlcnBvbGF0ZS5yZXZlcnNlIHx8IGludGVycG9sYXRlO1xuICAgICAgTCA9IGludGVycG9sYXRlLmNsb3NlZCA/IFwiTVwiIDogXCJMXCI7XG4gICAgICByZXR1cm4gYXJlYTtcbiAgICB9O1xuICAgIGFyZWEudGVuc2lvbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRlbnNpb247XG4gICAgICB0ZW5zaW9uID0gXztcbiAgICAgIHJldHVybiBhcmVhO1xuICAgIH07XG4gICAgcmV0dXJuIGFyZWE7XG4gIH1cbiAgZDNfc3ZnX2xpbmVTdGVwQmVmb3JlLnJldmVyc2UgPSBkM19zdmdfbGluZVN0ZXBBZnRlcjtcbiAgZDNfc3ZnX2xpbmVTdGVwQWZ0ZXIucmV2ZXJzZSA9IGQzX3N2Z19saW5lU3RlcEJlZm9yZTtcbiAgZDMuc3ZnLmFyZWEgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZDNfc3ZnX2FyZWEoZDNfaWRlbnRpdHkpO1xuICB9O1xuICBkMy5zdmcuYXJlYS5yYWRpYWwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJlYSA9IGQzX3N2Z19hcmVhKGQzX3N2Z19saW5lUmFkaWFsKTtcbiAgICBhcmVhLnJhZGl1cyA9IGFyZWEueCwgZGVsZXRlIGFyZWEueDtcbiAgICBhcmVhLmlubmVyUmFkaXVzID0gYXJlYS54MCwgZGVsZXRlIGFyZWEueDA7XG4gICAgYXJlYS5vdXRlclJhZGl1cyA9IGFyZWEueDEsIGRlbGV0ZSBhcmVhLngxO1xuICAgIGFyZWEuYW5nbGUgPSBhcmVhLnksIGRlbGV0ZSBhcmVhLnk7XG4gICAgYXJlYS5zdGFydEFuZ2xlID0gYXJlYS55MCwgZGVsZXRlIGFyZWEueTA7XG4gICAgYXJlYS5lbmRBbmdsZSA9IGFyZWEueTEsIGRlbGV0ZSBhcmVhLnkxO1xuICAgIHJldHVybiBhcmVhO1xuICB9O1xuICBkMy5zdmcuY2hvcmQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc291cmNlID0gZDNfc291cmNlLCB0YXJnZXQgPSBkM190YXJnZXQsIHJhZGl1cyA9IGQzX3N2Z19jaG9yZFJhZGl1cywgc3RhcnRBbmdsZSA9IGQzX3N2Z19hcmNTdGFydEFuZ2xlLCBlbmRBbmdsZSA9IGQzX3N2Z19hcmNFbmRBbmdsZTtcbiAgICBmdW5jdGlvbiBjaG9yZChkLCBpKSB7XG4gICAgICB2YXIgcyA9IHN1Ymdyb3VwKHRoaXMsIHNvdXJjZSwgZCwgaSksIHQgPSBzdWJncm91cCh0aGlzLCB0YXJnZXQsIGQsIGkpO1xuICAgICAgcmV0dXJuIFwiTVwiICsgcy5wMCArIGFyYyhzLnIsIHMucDEsIHMuYTEgLSBzLmEwKSArIChlcXVhbHMocywgdCkgPyBjdXJ2ZShzLnIsIHMucDEsIHMuciwgcy5wMCkgOiBjdXJ2ZShzLnIsIHMucDEsIHQuciwgdC5wMCkgKyBhcmModC5yLCB0LnAxLCB0LmExIC0gdC5hMCkgKyBjdXJ2ZSh0LnIsIHQucDEsIHMuciwgcy5wMCkpICsgXCJaXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN1Ymdyb3VwKHNlbGYsIGYsIGQsIGkpIHtcbiAgICAgIHZhciBzdWJncm91cCA9IGYuY2FsbChzZWxmLCBkLCBpKSwgciA9IHJhZGl1cy5jYWxsKHNlbGYsIHN1Ymdyb3VwLCBpKSwgYTAgPSBzdGFydEFuZ2xlLmNhbGwoc2VsZiwgc3ViZ3JvdXAsIGkpIC0gaGFsZs+ALCBhMSA9IGVuZEFuZ2xlLmNhbGwoc2VsZiwgc3ViZ3JvdXAsIGkpIC0gaGFsZs+AO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcjogcixcbiAgICAgICAgYTA6IGEwLFxuICAgICAgICBhMTogYTEsXG4gICAgICAgIHAwOiBbIHIgKiBNYXRoLmNvcyhhMCksIHIgKiBNYXRoLnNpbihhMCkgXSxcbiAgICAgICAgcDE6IFsgciAqIE1hdGguY29zKGExKSwgciAqIE1hdGguc2luKGExKSBdXG4gICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICAgICAgcmV0dXJuIGEuYTAgPT0gYi5hMCAmJiBhLmExID09IGIuYTE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFyYyhyLCBwLCBhKSB7XG4gICAgICByZXR1cm4gXCJBXCIgKyByICsgXCIsXCIgKyByICsgXCIgMCBcIiArICsoYSA+IM+AKSArIFwiLDEgXCIgKyBwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjdXJ2ZShyMCwgcDAsIHIxLCBwMSkge1xuICAgICAgcmV0dXJuIFwiUSAwLDAgXCIgKyBwMTtcbiAgICB9XG4gICAgY2hvcmQucmFkaXVzID0gZnVuY3Rpb24odikge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcmFkaXVzO1xuICAgICAgcmFkaXVzID0gZDNfZnVuY3Rvcih2KTtcbiAgICAgIHJldHVybiBjaG9yZDtcbiAgICB9O1xuICAgIGNob3JkLnNvdXJjZSA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHNvdXJjZTtcbiAgICAgIHNvdXJjZSA9IGQzX2Z1bmN0b3Iodik7XG4gICAgICByZXR1cm4gY2hvcmQ7XG4gICAgfTtcbiAgICBjaG9yZC50YXJnZXQgPSBmdW5jdGlvbih2KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0YXJnZXQ7XG4gICAgICB0YXJnZXQgPSBkM19mdW5jdG9yKHYpO1xuICAgICAgcmV0dXJuIGNob3JkO1xuICAgIH07XG4gICAgY2hvcmQuc3RhcnRBbmdsZSA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHN0YXJ0QW5nbGU7XG4gICAgICBzdGFydEFuZ2xlID0gZDNfZnVuY3Rvcih2KTtcbiAgICAgIHJldHVybiBjaG9yZDtcbiAgICB9O1xuICAgIGNob3JkLmVuZEFuZ2xlID0gZnVuY3Rpb24odikge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZW5kQW5nbGU7XG4gICAgICBlbmRBbmdsZSA9IGQzX2Z1bmN0b3Iodik7XG4gICAgICByZXR1cm4gY2hvcmQ7XG4gICAgfTtcbiAgICByZXR1cm4gY2hvcmQ7XG4gIH07XG4gIGZ1bmN0aW9uIGQzX3N2Z19jaG9yZFJhZGl1cyhkKSB7XG4gICAgcmV0dXJuIGQucmFkaXVzO1xuICB9XG4gIGQzLnN2Zy5kaWFnb25hbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzb3VyY2UgPSBkM19zb3VyY2UsIHRhcmdldCA9IGQzX3RhcmdldCwgcHJvamVjdGlvbiA9IGQzX3N2Z19kaWFnb25hbFByb2plY3Rpb247XG4gICAgZnVuY3Rpb24gZGlhZ29uYWwoZCwgaSkge1xuICAgICAgdmFyIHAwID0gc291cmNlLmNhbGwodGhpcywgZCwgaSksIHAzID0gdGFyZ2V0LmNhbGwodGhpcywgZCwgaSksIG0gPSAocDAueSArIHAzLnkpIC8gMiwgcCA9IFsgcDAsIHtcbiAgICAgICAgeDogcDAueCxcbiAgICAgICAgeTogbVxuICAgICAgfSwge1xuICAgICAgICB4OiBwMy54LFxuICAgICAgICB5OiBtXG4gICAgICB9LCBwMyBdO1xuICAgICAgcCA9IHAubWFwKHByb2plY3Rpb24pO1xuICAgICAgcmV0dXJuIFwiTVwiICsgcFswXSArIFwiQ1wiICsgcFsxXSArIFwiIFwiICsgcFsyXSArIFwiIFwiICsgcFszXTtcbiAgICB9XG4gICAgZGlhZ29uYWwuc291cmNlID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc291cmNlO1xuICAgICAgc291cmNlID0gZDNfZnVuY3Rvcih4KTtcbiAgICAgIHJldHVybiBkaWFnb25hbDtcbiAgICB9O1xuICAgIGRpYWdvbmFsLnRhcmdldCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRhcmdldDtcbiAgICAgIHRhcmdldCA9IGQzX2Z1bmN0b3IoeCk7XG4gICAgICByZXR1cm4gZGlhZ29uYWw7XG4gICAgfTtcbiAgICBkaWFnb25hbC5wcm9qZWN0aW9uID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcHJvamVjdGlvbjtcbiAgICAgIHByb2plY3Rpb24gPSB4O1xuICAgICAgcmV0dXJuIGRpYWdvbmFsO1xuICAgIH07XG4gICAgcmV0dXJuIGRpYWdvbmFsO1xuICB9O1xuICBmdW5jdGlvbiBkM19zdmdfZGlhZ29uYWxQcm9qZWN0aW9uKGQpIHtcbiAgICByZXR1cm4gWyBkLngsIGQueSBdO1xuICB9XG4gIGQzLnN2Zy5kaWFnb25hbC5yYWRpYWwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGlhZ29uYWwgPSBkMy5zdmcuZGlhZ29uYWwoKSwgcHJvamVjdGlvbiA9IGQzX3N2Z19kaWFnb25hbFByb2plY3Rpb24sIHByb2plY3Rpb25fID0gZGlhZ29uYWwucHJvamVjdGlvbjtcbiAgICBkaWFnb25hbC5wcm9qZWN0aW9uID0gZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBwcm9qZWN0aW9uXyhkM19zdmdfZGlhZ29uYWxSYWRpYWxQcm9qZWN0aW9uKHByb2plY3Rpb24gPSB4KSkgOiBwcm9qZWN0aW9uO1xuICAgIH07XG4gICAgcmV0dXJuIGRpYWdvbmFsO1xuICB9O1xuICBmdW5jdGlvbiBkM19zdmdfZGlhZ29uYWxSYWRpYWxQcm9qZWN0aW9uKHByb2plY3Rpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZCA9IHByb2plY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSwgciA9IGRbMF0sIGEgPSBkWzFdIC0gaGFsZs+AO1xuICAgICAgcmV0dXJuIFsgciAqIE1hdGguY29zKGEpLCByICogTWF0aC5zaW4oYSkgXTtcbiAgICB9O1xuICB9XG4gIGQzLnN2Zy5zeW1ib2wgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdHlwZSA9IGQzX3N2Z19zeW1ib2xUeXBlLCBzaXplID0gZDNfc3ZnX3N5bWJvbFNpemU7XG4gICAgZnVuY3Rpb24gc3ltYm9sKGQsIGkpIHtcbiAgICAgIHJldHVybiAoZDNfc3ZnX3N5bWJvbHMuZ2V0KHR5cGUuY2FsbCh0aGlzLCBkLCBpKSkgfHwgZDNfc3ZnX3N5bWJvbENpcmNsZSkoc2l6ZS5jYWxsKHRoaXMsIGQsIGkpKTtcbiAgICB9XG4gICAgc3ltYm9sLnR5cGUgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0eXBlO1xuICAgICAgdHlwZSA9IGQzX2Z1bmN0b3IoeCk7XG4gICAgICByZXR1cm4gc3ltYm9sO1xuICAgIH07XG4gICAgc3ltYm9sLnNpemUgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBzaXplO1xuICAgICAgc2l6ZSA9IGQzX2Z1bmN0b3IoeCk7XG4gICAgICByZXR1cm4gc3ltYm9sO1xuICAgIH07XG4gICAgcmV0dXJuIHN5bWJvbDtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfc3ZnX3N5bWJvbFNpemUoKSB7XG4gICAgcmV0dXJuIDY0O1xuICB9XG4gIGZ1bmN0aW9uIGQzX3N2Z19zeW1ib2xUeXBlKCkge1xuICAgIHJldHVybiBcImNpcmNsZVwiO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3N2Z19zeW1ib2xDaXJjbGUoc2l6ZSkge1xuICAgIHZhciByID0gTWF0aC5zcXJ0KHNpemUgLyDPgCk7XG4gICAgcmV0dXJuIFwiTTAsXCIgKyByICsgXCJBXCIgKyByICsgXCIsXCIgKyByICsgXCIgMCAxLDEgMCxcIiArIC1yICsgXCJBXCIgKyByICsgXCIsXCIgKyByICsgXCIgMCAxLDEgMCxcIiArIHIgKyBcIlpcIjtcbiAgfVxuICB2YXIgZDNfc3ZnX3N5bWJvbHMgPSBkMy5tYXAoe1xuICAgIGNpcmNsZTogZDNfc3ZnX3N5bWJvbENpcmNsZSxcbiAgICBjcm9zczogZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgdmFyIHIgPSBNYXRoLnNxcnQoc2l6ZSAvIDUpIC8gMjtcbiAgICAgIHJldHVybiBcIk1cIiArIC0zICogciArIFwiLFwiICsgLXIgKyBcIkhcIiArIC1yICsgXCJWXCIgKyAtMyAqIHIgKyBcIkhcIiArIHIgKyBcIlZcIiArIC1yICsgXCJIXCIgKyAzICogciArIFwiVlwiICsgciArIFwiSFwiICsgciArIFwiVlwiICsgMyAqIHIgKyBcIkhcIiArIC1yICsgXCJWXCIgKyByICsgXCJIXCIgKyAtMyAqIHIgKyBcIlpcIjtcbiAgICB9LFxuICAgIGRpYW1vbmQ6IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgIHZhciByeSA9IE1hdGguc3FydChzaXplIC8gKDIgKiBkM19zdmdfc3ltYm9sVGFuMzApKSwgcnggPSByeSAqIGQzX3N2Z19zeW1ib2xUYW4zMDtcbiAgICAgIHJldHVybiBcIk0wLFwiICsgLXJ5ICsgXCJMXCIgKyByeCArIFwiLDBcIiArIFwiIDAsXCIgKyByeSArIFwiIFwiICsgLXJ4ICsgXCIsMFwiICsgXCJaXCI7XG4gICAgfSxcbiAgICBzcXVhcmU6IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgIHZhciByID0gTWF0aC5zcXJ0KHNpemUpIC8gMjtcbiAgICAgIHJldHVybiBcIk1cIiArIC1yICsgXCIsXCIgKyAtciArIFwiTFwiICsgciArIFwiLFwiICsgLXIgKyBcIiBcIiArIHIgKyBcIixcIiArIHIgKyBcIiBcIiArIC1yICsgXCIsXCIgKyByICsgXCJaXCI7XG4gICAgfSxcbiAgICBcInRyaWFuZ2xlLWRvd25cIjogZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgdmFyIHJ4ID0gTWF0aC5zcXJ0KHNpemUgLyBkM19zdmdfc3ltYm9sU3FydDMpLCByeSA9IHJ4ICogZDNfc3ZnX3N5bWJvbFNxcnQzIC8gMjtcbiAgICAgIHJldHVybiBcIk0wLFwiICsgcnkgKyBcIkxcIiArIHJ4ICsgXCIsXCIgKyAtcnkgKyBcIiBcIiArIC1yeCArIFwiLFwiICsgLXJ5ICsgXCJaXCI7XG4gICAgfSxcbiAgICBcInRyaWFuZ2xlLXVwXCI6IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgIHZhciByeCA9IE1hdGguc3FydChzaXplIC8gZDNfc3ZnX3N5bWJvbFNxcnQzKSwgcnkgPSByeCAqIGQzX3N2Z19zeW1ib2xTcXJ0MyAvIDI7XG4gICAgICByZXR1cm4gXCJNMCxcIiArIC1yeSArIFwiTFwiICsgcnggKyBcIixcIiArIHJ5ICsgXCIgXCIgKyAtcnggKyBcIixcIiArIHJ5ICsgXCJaXCI7XG4gICAgfVxuICB9KTtcbiAgZDMuc3ZnLnN5bWJvbFR5cGVzID0gZDNfc3ZnX3N5bWJvbHMua2V5cygpO1xuICB2YXIgZDNfc3ZnX3N5bWJvbFNxcnQzID0gTWF0aC5zcXJ0KDMpLCBkM19zdmdfc3ltYm9sVGFuMzAgPSBNYXRoLnRhbigzMCAqIGQzX3JhZGlhbnMpO1xuICBkM19zZWxlY3Rpb25Qcm90b3R5cGUudHJhbnNpdGlvbiA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaWQgPSBkM190cmFuc2l0aW9uSW5oZXJpdElkIHx8ICsrZDNfdHJhbnNpdGlvbklkLCBucyA9IGQzX3RyYW5zaXRpb25OYW1lc3BhY2UobmFtZSksIHN1Ymdyb3VwcyA9IFtdLCBzdWJncm91cCwgbm9kZSwgdHJhbnNpdGlvbiA9IGQzX3RyYW5zaXRpb25Jbmhlcml0IHx8IHtcbiAgICAgIHRpbWU6IERhdGUubm93KCksXG4gICAgICBlYXNlOiBkM19lYXNlX2N1YmljSW5PdXQsXG4gICAgICBkZWxheTogMCxcbiAgICAgIGR1cmF0aW9uOiAyNTBcbiAgICB9O1xuICAgIGZvciAodmFyIGogPSAtMSwgbSA9IHRoaXMubGVuZ3RoOyArK2ogPCBtOyApIHtcbiAgICAgIHN1Ymdyb3Vwcy5wdXNoKHN1Ymdyb3VwID0gW10pO1xuICAgICAgZm9yICh2YXIgZ3JvdXAgPSB0aGlzW2pdLCBpID0gLTEsIG4gPSBncm91cC5sZW5ndGg7ICsraSA8IG47ICkge1xuICAgICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSBkM190cmFuc2l0aW9uTm9kZShub2RlLCBpLCBucywgaWQsIHRyYW5zaXRpb24pO1xuICAgICAgICBzdWJncm91cC5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZDNfdHJhbnNpdGlvbihzdWJncm91cHMsIG5zLCBpZCk7XG4gIH07XG4gIGQzX3NlbGVjdGlvblByb3RvdHlwZS5pbnRlcnJ1cHQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChuYW1lID09IG51bGwgPyBkM19zZWxlY3Rpb25faW50ZXJydXB0IDogZDNfc2VsZWN0aW9uX2ludGVycnVwdE5TKGQzX3RyYW5zaXRpb25OYW1lc3BhY2UobmFtZSkpKTtcbiAgfTtcbiAgdmFyIGQzX3NlbGVjdGlvbl9pbnRlcnJ1cHQgPSBkM19zZWxlY3Rpb25faW50ZXJydXB0TlMoZDNfdHJhbnNpdGlvbk5hbWVzcGFjZSgpKTtcbiAgZnVuY3Rpb24gZDNfc2VsZWN0aW9uX2ludGVycnVwdE5TKG5zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxvY2ssIGFjdGl2ZUlkLCBhY3RpdmU7XG4gICAgICBpZiAoKGxvY2sgPSB0aGlzW25zXSkgJiYgKGFjdGl2ZSA9IGxvY2tbYWN0aXZlSWQgPSBsb2NrLmFjdGl2ZV0pKSB7XG4gICAgICAgIGFjdGl2ZS50aW1lci5jID0gbnVsbDtcbiAgICAgICAgYWN0aXZlLnRpbWVyLnQgPSBOYU47XG4gICAgICAgIGlmICgtLWxvY2suY291bnQpIGRlbGV0ZSBsb2NrW2FjdGl2ZUlkXTsgZWxzZSBkZWxldGUgdGhpc1tuc107XG4gICAgICAgIGxvY2suYWN0aXZlICs9IC41O1xuICAgICAgICBhY3RpdmUuZXZlbnQgJiYgYWN0aXZlLmV2ZW50LmludGVycnVwdC5jYWxsKHRoaXMsIHRoaXMuX19kYXRhX18sIGFjdGl2ZS5pbmRleCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkM190cmFuc2l0aW9uKGdyb3VwcywgbnMsIGlkKSB7XG4gICAgZDNfc3ViY2xhc3MoZ3JvdXBzLCBkM190cmFuc2l0aW9uUHJvdG90eXBlKTtcbiAgICBncm91cHMubmFtZXNwYWNlID0gbnM7XG4gICAgZ3JvdXBzLmlkID0gaWQ7XG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfVxuICB2YXIgZDNfdHJhbnNpdGlvblByb3RvdHlwZSA9IFtdLCBkM190cmFuc2l0aW9uSWQgPSAwLCBkM190cmFuc2l0aW9uSW5oZXJpdElkLCBkM190cmFuc2l0aW9uSW5oZXJpdDtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS5jYWxsID0gZDNfc2VsZWN0aW9uUHJvdG90eXBlLmNhbGw7XG4gIGQzX3RyYW5zaXRpb25Qcm90b3R5cGUuZW1wdHkgPSBkM19zZWxlY3Rpb25Qcm90b3R5cGUuZW1wdHk7XG4gIGQzX3RyYW5zaXRpb25Qcm90b3R5cGUubm9kZSA9IGQzX3NlbGVjdGlvblByb3RvdHlwZS5ub2RlO1xuICBkM190cmFuc2l0aW9uUHJvdG90eXBlLnNpemUgPSBkM19zZWxlY3Rpb25Qcm90b3R5cGUuc2l6ZTtcbiAgZDMudHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNlbGVjdGlvbiwgbmFtZSkge1xuICAgIHJldHVybiBzZWxlY3Rpb24gJiYgc2VsZWN0aW9uLnRyYW5zaXRpb24gPyBkM190cmFuc2l0aW9uSW5oZXJpdElkID8gc2VsZWN0aW9uLnRyYW5zaXRpb24obmFtZSkgOiBzZWxlY3Rpb24gOiBkMy5zZWxlY3Rpb24oKS50cmFuc2l0aW9uKHNlbGVjdGlvbik7XG4gIH07XG4gIGQzLnRyYW5zaXRpb24ucHJvdG90eXBlID0gZDNfdHJhbnNpdGlvblByb3RvdHlwZTtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIHZhciBpZCA9IHRoaXMuaWQsIG5zID0gdGhpcy5uYW1lc3BhY2UsIHN1Ymdyb3VwcyA9IFtdLCBzdWJncm91cCwgc3Vibm9kZSwgbm9kZTtcbiAgICBzZWxlY3RvciA9IGQzX3NlbGVjdGlvbl9zZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgZm9yICh2YXIgaiA9IC0xLCBtID0gdGhpcy5sZW5ndGg7ICsraiA8IG07ICkge1xuICAgICAgc3ViZ3JvdXBzLnB1c2goc3ViZ3JvdXAgPSBbXSk7XG4gICAgICBmb3IgKHZhciBncm91cCA9IHRoaXNbal0sIGkgPSAtMSwgbiA9IGdyb3VwLmxlbmd0aDsgKytpIDwgbjsgKSB7XG4gICAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAoc3Vibm9kZSA9IHNlbGVjdG9yLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgaikpKSB7XG4gICAgICAgICAgaWYgKFwiX19kYXRhX19cIiBpbiBub2RlKSBzdWJub2RlLl9fZGF0YV9fID0gbm9kZS5fX2RhdGFfXztcbiAgICAgICAgICBkM190cmFuc2l0aW9uTm9kZShzdWJub2RlLCBpLCBucywgaWQsIG5vZGVbbnNdW2lkXSk7XG4gICAgICAgICAgc3ViZ3JvdXAucHVzaChzdWJub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdWJncm91cC5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkM190cmFuc2l0aW9uKHN1Ymdyb3VwcywgbnMsIGlkKTtcbiAgfTtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS5zZWxlY3RBbGwgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIHZhciBpZCA9IHRoaXMuaWQsIG5zID0gdGhpcy5uYW1lc3BhY2UsIHN1Ymdyb3VwcyA9IFtdLCBzdWJncm91cCwgc3Vibm9kZXMsIG5vZGUsIHN1Ym5vZGUsIHRyYW5zaXRpb247XG4gICAgc2VsZWN0b3IgPSBkM19zZWxlY3Rpb25fc2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIGZvciAodmFyIGogPSAtMSwgbSA9IHRoaXMubGVuZ3RoOyArK2ogPCBtOyApIHtcbiAgICAgIGZvciAodmFyIGdyb3VwID0gdGhpc1tqXSwgaSA9IC0xLCBuID0gZ3JvdXAubGVuZ3RoOyArK2kgPCBuOyApIHtcbiAgICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICAgIHRyYW5zaXRpb24gPSBub2RlW25zXVtpZF07XG4gICAgICAgICAgc3Vibm9kZXMgPSBzZWxlY3Rvci5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGopO1xuICAgICAgICAgIHN1Ymdyb3Vwcy5wdXNoKHN1Ymdyb3VwID0gW10pO1xuICAgICAgICAgIGZvciAodmFyIGsgPSAtMSwgbyA9IHN1Ym5vZGVzLmxlbmd0aDsgKytrIDwgbzsgKSB7XG4gICAgICAgICAgICBpZiAoc3Vibm9kZSA9IHN1Ym5vZGVzW2tdKSBkM190cmFuc2l0aW9uTm9kZShzdWJub2RlLCBrLCBucywgaWQsIHRyYW5zaXRpb24pO1xuICAgICAgICAgICAgc3ViZ3JvdXAucHVzaChzdWJub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGQzX3RyYW5zaXRpb24oc3ViZ3JvdXBzLCBucywgaWQpO1xuICB9O1xuICBkM190cmFuc2l0aW9uUHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcikge1xuICAgIHZhciBzdWJncm91cHMgPSBbXSwgc3ViZ3JvdXAsIGdyb3VwLCBub2RlO1xuICAgIGlmICh0eXBlb2YgZmlsdGVyICE9PSBcImZ1bmN0aW9uXCIpIGZpbHRlciA9IGQzX3NlbGVjdGlvbl9maWx0ZXIoZmlsdGVyKTtcbiAgICBmb3IgKHZhciBqID0gMCwgbSA9IHRoaXMubGVuZ3RoOyBqIDwgbTsgaisrKSB7XG4gICAgICBzdWJncm91cHMucHVzaChzdWJncm91cCA9IFtdKTtcbiAgICAgIGZvciAodmFyIGdyb3VwID0gdGhpc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIGZpbHRlci5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGopKSB7XG4gICAgICAgICAgc3ViZ3JvdXAucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZDNfdHJhbnNpdGlvbihzdWJncm91cHMsIHRoaXMubmFtZXNwYWNlLCB0aGlzLmlkKTtcbiAgfTtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS50d2VlbiA9IGZ1bmN0aW9uKG5hbWUsIHR3ZWVuKSB7XG4gICAgdmFyIGlkID0gdGhpcy5pZCwgbnMgPSB0aGlzLm5hbWVzcGFjZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHJldHVybiB0aGlzLm5vZGUoKVtuc11baWRdLnR3ZWVuLmdldChuYW1lKTtcbiAgICByZXR1cm4gZDNfc2VsZWN0aW9uX2VhY2godGhpcywgdHdlZW4gPT0gbnVsbCA/IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIG5vZGVbbnNdW2lkXS50d2Vlbi5yZW1vdmUobmFtZSk7XG4gICAgfSA6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIG5vZGVbbnNdW2lkXS50d2Vlbi5zZXQobmFtZSwgdHdlZW4pO1xuICAgIH0pO1xuICB9O1xuICBmdW5jdGlvbiBkM190cmFuc2l0aW9uX3R3ZWVuKGdyb3VwcywgbmFtZSwgdmFsdWUsIHR3ZWVuKSB7XG4gICAgdmFyIGlkID0gZ3JvdXBzLmlkLCBucyA9IGdyb3Vwcy5uYW1lc3BhY2U7XG4gICAgcmV0dXJuIGQzX3NlbGVjdGlvbl9lYWNoKGdyb3VwcywgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBmdW5jdGlvbihub2RlLCBpLCBqKSB7XG4gICAgICBub2RlW25zXVtpZF0udHdlZW4uc2V0KG5hbWUsIHR3ZWVuKHZhbHVlLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgaikpKTtcbiAgICB9IDogKHZhbHVlID0gdHdlZW4odmFsdWUpLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICBub2RlW25zXVtpZF0udHdlZW4uc2V0KG5hbWUsIHZhbHVlKTtcbiAgICB9KSk7XG4gIH1cbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24obmFtZU5TLCB2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgZm9yICh2YWx1ZSBpbiBuYW1lTlMpIHRoaXMuYXR0cih2YWx1ZSwgbmFtZU5TW3ZhbHVlXSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdmFyIGludGVycG9sYXRlID0gbmFtZU5TID09IFwidHJhbnNmb3JtXCIgPyBkM19pbnRlcnBvbGF0ZVRyYW5zZm9ybSA6IGQzX2ludGVycG9sYXRlLCBuYW1lID0gZDMubnMucXVhbGlmeShuYW1lTlMpO1xuICAgIGZ1bmN0aW9uIGF0dHJOdWxsKCkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dHJOdWxsTlMoKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKG5hbWUuc3BhY2UsIG5hbWUubG9jYWwpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdHRyVHdlZW4oYikge1xuICAgICAgcmV0dXJuIGIgPT0gbnVsbCA/IGF0dHJOdWxsIDogKGIgKz0gXCJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSksIGk7XG4gICAgICAgIHJldHVybiBhICE9PSBiICYmIChpID0gaW50ZXJwb2xhdGUoYSwgYiksIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCBpKHQpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXR0clR3ZWVuTlMoYikge1xuICAgICAgcmV0dXJuIGIgPT0gbnVsbCA/IGF0dHJOdWxsTlMgOiAoYiArPSBcIlwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzLmdldEF0dHJpYnV0ZU5TKG5hbWUuc3BhY2UsIG5hbWUubG9jYWwpLCBpO1xuICAgICAgICByZXR1cm4gYSAhPT0gYiAmJiAoaSA9IGludGVycG9sYXRlKGEsIGIpLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVOUyhuYW1lLnNwYWNlLCBuYW1lLmxvY2FsLCBpKHQpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGQzX3RyYW5zaXRpb25fdHdlZW4odGhpcywgXCJhdHRyLlwiICsgbmFtZU5TLCB2YWx1ZSwgbmFtZS5sb2NhbCA/IGF0dHJUd2Vlbk5TIDogYXR0clR3ZWVuKTtcbiAgfTtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS5hdHRyVHdlZW4gPSBmdW5jdGlvbihuYW1lTlMsIHR3ZWVuKSB7XG4gICAgdmFyIG5hbWUgPSBkMy5ucy5xdWFsaWZ5KG5hbWVOUyk7XG4gICAgZnVuY3Rpb24gYXR0clR3ZWVuKGQsIGkpIHtcbiAgICAgIHZhciBmID0gdHdlZW4uY2FsbCh0aGlzLCBkLCBpLCB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKSk7XG4gICAgICByZXR1cm4gZiAmJiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIGYodCkpO1xuICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXR0clR3ZWVuTlMoZCwgaSkge1xuICAgICAgdmFyIGYgPSB0d2Vlbi5jYWxsKHRoaXMsIGQsIGksIHRoaXMuZ2V0QXR0cmlidXRlTlMobmFtZS5zcGFjZSwgbmFtZS5sb2NhbCkpO1xuICAgICAgcmV0dXJuIGYgJiYgZnVuY3Rpb24odCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZU5TKG5hbWUuc3BhY2UsIG5hbWUubG9jYWwsIGYodCkpO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudHdlZW4oXCJhdHRyLlwiICsgbmFtZU5TLCBuYW1lLmxvY2FsID8gYXR0clR3ZWVuTlMgOiBhdHRyVHdlZW4pO1xuICB9O1xuICBkM190cmFuc2l0aW9uUHJvdG90eXBlLnN0eWxlID0gZnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gICAgdmFyIG4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmIChuIDwgMykge1xuICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChuIDwgMikgdmFsdWUgPSBcIlwiO1xuICAgICAgICBmb3IgKHByaW9yaXR5IGluIG5hbWUpIHRoaXMuc3R5bGUocHJpb3JpdHksIG5hbWVbcHJpb3JpdHldLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcHJpb3JpdHkgPSBcIlwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdHlsZU51bGwoKSB7XG4gICAgICB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdHlsZVN0cmluZyhiKSB7XG4gICAgICByZXR1cm4gYiA9PSBudWxsID8gc3R5bGVOdWxsIDogKGIgKz0gXCJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhID0gZDNfd2luZG93KHRoaXMpLmdldENvbXB1dGVkU3R5bGUodGhpcywgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKSwgaTtcbiAgICAgICAgcmV0dXJuIGEgIT09IGIgJiYgKGkgPSBkM19pbnRlcnBvbGF0ZShhLCBiKSwgZnVuY3Rpb24odCkge1xuICAgICAgICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgaSh0KSwgcHJpb3JpdHkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZDNfdHJhbnNpdGlvbl90d2Vlbih0aGlzLCBcInN0eWxlLlwiICsgbmFtZSwgdmFsdWUsIHN0eWxlU3RyaW5nKTtcbiAgfTtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS5zdHlsZVR3ZWVuID0gZnVuY3Rpb24obmFtZSwgdHdlZW4sIHByaW9yaXR5KSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSBwcmlvcml0eSA9IFwiXCI7XG4gICAgZnVuY3Rpb24gc3R5bGVUd2VlbihkLCBpKSB7XG4gICAgICB2YXIgZiA9IHR3ZWVuLmNhbGwodGhpcywgZCwgaSwgZDNfd2luZG93KHRoaXMpLmdldENvbXB1dGVkU3R5bGUodGhpcywgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKSk7XG4gICAgICByZXR1cm4gZiAmJiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgZih0KSwgcHJpb3JpdHkpO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudHdlZW4oXCJzdHlsZS5cIiArIG5hbWUsIHN0eWxlVHdlZW4pO1xuICB9O1xuICBkM190cmFuc2l0aW9uUHJvdG90eXBlLnRleHQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBkM190cmFuc2l0aW9uX3R3ZWVuKHRoaXMsIFwidGV4dFwiLCB2YWx1ZSwgZDNfdHJhbnNpdGlvbl90ZXh0KTtcbiAgfTtcbiAgZnVuY3Rpb24gZDNfdHJhbnNpdGlvbl90ZXh0KGIpIHtcbiAgICBpZiAoYiA9PSBudWxsKSBiID0gXCJcIjtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnRleHRDb250ZW50ID0gYjtcbiAgICB9O1xuICB9XG4gIGQzX3RyYW5zaXRpb25Qcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5zID0gdGhpcy5uYW1lc3BhY2U7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChcImVuZC50cmFuc2l0aW9uXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHA7XG4gICAgICBpZiAodGhpc1tuc10uY291bnQgPCAyICYmIChwID0gdGhpcy5wYXJlbnROb2RlKSkgcC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICB9KTtcbiAgfTtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS5lYXNlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgaWQgPSB0aGlzLmlkLCBucyA9IHRoaXMubmFtZXNwYWNlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMSkgcmV0dXJuIHRoaXMubm9kZSgpW25zXVtpZF0uZWFzZTtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHZhbHVlID0gZDMuZWFzZS5hcHBseShkMywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gZDNfc2VsZWN0aW9uX2VhY2godGhpcywgZnVuY3Rpb24obm9kZSkge1xuICAgICAgbm9kZVtuc11baWRdLmVhc2UgPSB2YWx1ZTtcbiAgICB9KTtcbiAgfTtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS5kZWxheSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIGlkID0gdGhpcy5pZCwgbnMgPSB0aGlzLm5hbWVzcGFjZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEpIHJldHVybiB0aGlzLm5vZGUoKVtuc11baWRdLmRlbGF5O1xuICAgIHJldHVybiBkM19zZWxlY3Rpb25fZWFjaCh0aGlzLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IGZ1bmN0aW9uKG5vZGUsIGksIGopIHtcbiAgICAgIG5vZGVbbnNdW2lkXS5kZWxheSA9ICt2YWx1ZS5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGopO1xuICAgIH0gOiAodmFsdWUgPSArdmFsdWUsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIG5vZGVbbnNdW2lkXS5kZWxheSA9IHZhbHVlO1xuICAgIH0pKTtcbiAgfTtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS5kdXJhdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIGlkID0gdGhpcy5pZCwgbnMgPSB0aGlzLm5hbWVzcGFjZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEpIHJldHVybiB0aGlzLm5vZGUoKVtuc11baWRdLmR1cmF0aW9uO1xuICAgIHJldHVybiBkM19zZWxlY3Rpb25fZWFjaCh0aGlzLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IGZ1bmN0aW9uKG5vZGUsIGksIGopIHtcbiAgICAgIG5vZGVbbnNdW2lkXS5kdXJhdGlvbiA9IE1hdGgubWF4KDEsIHZhbHVlLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgaikpO1xuICAgIH0gOiAodmFsdWUgPSBNYXRoLm1heCgxLCB2YWx1ZSksIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIG5vZGVbbnNdW2lkXS5kdXJhdGlvbiA9IHZhbHVlO1xuICAgIH0pKTtcbiAgfTtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS5lYWNoID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgaWQgPSB0aGlzLmlkLCBucyA9IHRoaXMubmFtZXNwYWNlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgdmFyIGluaGVyaXQgPSBkM190cmFuc2l0aW9uSW5oZXJpdCwgaW5oZXJpdElkID0gZDNfdHJhbnNpdGlvbkluaGVyaXRJZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGQzX3RyYW5zaXRpb25Jbmhlcml0SWQgPSBpZDtcbiAgICAgICAgZDNfc2VsZWN0aW9uX2VhY2godGhpcywgZnVuY3Rpb24obm9kZSwgaSwgaikge1xuICAgICAgICAgIGQzX3RyYW5zaXRpb25Jbmhlcml0ID0gbm9kZVtuc11baWRdO1xuICAgICAgICAgIHR5cGUuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBqKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBkM190cmFuc2l0aW9uSW5oZXJpdCA9IGluaGVyaXQ7XG4gICAgICAgIGQzX3RyYW5zaXRpb25Jbmhlcml0SWQgPSBpbmhlcml0SWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGQzX3NlbGVjdGlvbl9lYWNoKHRoaXMsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb24gPSBub2RlW25zXVtpZF07XG4gICAgICAgICh0cmFuc2l0aW9uLmV2ZW50IHx8ICh0cmFuc2l0aW9uLmV2ZW50ID0gZDMuZGlzcGF0Y2goXCJzdGFydFwiLCBcImVuZFwiLCBcImludGVycnVwdFwiKSkpLm9uKHR5cGUsIGxpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZDNfdHJhbnNpdGlvblByb3RvdHlwZS50cmFuc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlkMCA9IHRoaXMuaWQsIGlkMSA9ICsrZDNfdHJhbnNpdGlvbklkLCBucyA9IHRoaXMubmFtZXNwYWNlLCBzdWJncm91cHMgPSBbXSwgc3ViZ3JvdXAsIGdyb3VwLCBub2RlLCB0cmFuc2l0aW9uO1xuICAgIGZvciAodmFyIGogPSAwLCBtID0gdGhpcy5sZW5ndGg7IGogPCBtOyBqKyspIHtcbiAgICAgIHN1Ymdyb3Vwcy5wdXNoKHN1Ymdyb3VwID0gW10pO1xuICAgICAgZm9yICh2YXIgZ3JvdXAgPSB0aGlzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgICAgdHJhbnNpdGlvbiA9IG5vZGVbbnNdW2lkMF07XG4gICAgICAgICAgZDNfdHJhbnNpdGlvbk5vZGUobm9kZSwgaSwgbnMsIGlkMSwge1xuICAgICAgICAgICAgdGltZTogdHJhbnNpdGlvbi50aW1lLFxuICAgICAgICAgICAgZWFzZTogdHJhbnNpdGlvbi5lYXNlLFxuICAgICAgICAgICAgZGVsYXk6IHRyYW5zaXRpb24uZGVsYXkgKyB0cmFuc2l0aW9uLmR1cmF0aW9uLFxuICAgICAgICAgICAgZHVyYXRpb246IHRyYW5zaXRpb24uZHVyYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzdWJncm91cC5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZDNfdHJhbnNpdGlvbihzdWJncm91cHMsIG5zLCBpZDEpO1xuICB9O1xuICBmdW5jdGlvbiBkM190cmFuc2l0aW9uTmFtZXNwYWNlKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZSA9PSBudWxsID8gXCJfX3RyYW5zaXRpb25fX1wiIDogXCJfX3RyYW5zaXRpb25fXCIgKyBuYW1lICsgXCJfX1wiO1xuICB9XG4gIGZ1bmN0aW9uIGQzX3RyYW5zaXRpb25Ob2RlKG5vZGUsIGksIG5zLCBpZCwgaW5oZXJpdCkge1xuICAgIHZhciBsb2NrID0gbm9kZVtuc10gfHwgKG5vZGVbbnNdID0ge1xuICAgICAgYWN0aXZlOiAwLFxuICAgICAgY291bnQ6IDBcbiAgICB9KSwgdHJhbnNpdGlvbiA9IGxvY2tbaWRdLCB0aW1lLCB0aW1lciwgZHVyYXRpb24sIGVhc2UsIHR3ZWVucztcbiAgICBmdW5jdGlvbiBzY2hlZHVsZShlbGFwc2VkKSB7XG4gICAgICB2YXIgZGVsYXkgPSB0cmFuc2l0aW9uLmRlbGF5O1xuICAgICAgdGltZXIudCA9IGRlbGF5ICsgdGltZTtcbiAgICAgIGlmIChkZWxheSA8PSBlbGFwc2VkKSByZXR1cm4gc3RhcnQoZWxhcHNlZCAtIGRlbGF5KTtcbiAgICAgIHRpbWVyLmMgPSBzdGFydDtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RhcnQoZWxhcHNlZCkge1xuICAgICAgdmFyIGFjdGl2ZUlkID0gbG9jay5hY3RpdmUsIGFjdGl2ZSA9IGxvY2tbYWN0aXZlSWRdO1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICBhY3RpdmUudGltZXIuYyA9IG51bGw7XG4gICAgICAgIGFjdGl2ZS50aW1lci50ID0gTmFOO1xuICAgICAgICAtLWxvY2suY291bnQ7XG4gICAgICAgIGRlbGV0ZSBsb2NrW2FjdGl2ZUlkXTtcbiAgICAgICAgYWN0aXZlLmV2ZW50ICYmIGFjdGl2ZS5ldmVudC5pbnRlcnJ1cHQuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBhY3RpdmUuaW5kZXgpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgY2FuY2VsSWQgaW4gbG9jaykge1xuICAgICAgICBpZiAoK2NhbmNlbElkIDwgaWQpIHtcbiAgICAgICAgICB2YXIgY2FuY2VsID0gbG9ja1tjYW5jZWxJZF07XG4gICAgICAgICAgY2FuY2VsLnRpbWVyLmMgPSBudWxsO1xuICAgICAgICAgIGNhbmNlbC50aW1lci50ID0gTmFOO1xuICAgICAgICAgIC0tbG9jay5jb3VudDtcbiAgICAgICAgICBkZWxldGUgbG9ja1tjYW5jZWxJZF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRpbWVyLmMgPSB0aWNrO1xuICAgICAgZDNfdGltZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aW1lci5jICYmIHRpY2soZWxhcHNlZCB8fCAxKSkge1xuICAgICAgICAgIHRpbWVyLmMgPSBudWxsO1xuICAgICAgICAgIHRpbWVyLnQgPSBOYU47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9LCAwLCB0aW1lKTtcbiAgICAgIGxvY2suYWN0aXZlID0gaWQ7XG4gICAgICB0cmFuc2l0aW9uLmV2ZW50ICYmIHRyYW5zaXRpb24uZXZlbnQuc3RhcnQuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpKTtcbiAgICAgIHR3ZWVucyA9IFtdO1xuICAgICAgdHJhbnNpdGlvbi50d2Vlbi5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID0gdmFsdWUuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpKSkge1xuICAgICAgICAgIHR3ZWVucy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBlYXNlID0gdHJhbnNpdGlvbi5lYXNlO1xuICAgICAgZHVyYXRpb24gPSB0cmFuc2l0aW9uLmR1cmF0aW9uO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0aWNrKGVsYXBzZWQpIHtcbiAgICAgIHZhciB0ID0gZWxhcHNlZCAvIGR1cmF0aW9uLCBlID0gZWFzZSh0KSwgbiA9IHR3ZWVucy5sZW5ndGg7XG4gICAgICB3aGlsZSAobiA+IDApIHtcbiAgICAgICAgdHdlZW5zWy0tbl0uY2FsbChub2RlLCBlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0ID49IDEpIHtcbiAgICAgICAgdHJhbnNpdGlvbi5ldmVudCAmJiB0cmFuc2l0aW9uLmV2ZW50LmVuZC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGkpO1xuICAgICAgICBpZiAoLS1sb2NrLmNvdW50KSBkZWxldGUgbG9ja1tpZF07IGVsc2UgZGVsZXRlIG5vZGVbbnNdO1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0cmFuc2l0aW9uKSB7XG4gICAgICB0aW1lID0gaW5oZXJpdC50aW1lO1xuICAgICAgdGltZXIgPSBkM190aW1lcihzY2hlZHVsZSwgMCwgdGltZSk7XG4gICAgICB0cmFuc2l0aW9uID0gbG9ja1tpZF0gPSB7XG4gICAgICAgIHR3ZWVuOiBuZXcgZDNfTWFwKCksXG4gICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgIHRpbWVyOiB0aW1lcixcbiAgICAgICAgZGVsYXk6IGluaGVyaXQuZGVsYXksXG4gICAgICAgIGR1cmF0aW9uOiBpbmhlcml0LmR1cmF0aW9uLFxuICAgICAgICBlYXNlOiBpbmhlcml0LmVhc2UsXG4gICAgICAgIGluZGV4OiBpXG4gICAgICB9O1xuICAgICAgaW5oZXJpdCA9IG51bGw7XG4gICAgICArK2xvY2suY291bnQ7XG4gICAgfVxuICB9XG4gIGQzLnN2Zy5heGlzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjYWxlID0gZDMuc2NhbGUubGluZWFyKCksIG9yaWVudCA9IGQzX3N2Z19heGlzRGVmYXVsdE9yaWVudCwgaW5uZXJUaWNrU2l6ZSA9IDYsIG91dGVyVGlja1NpemUgPSA2LCB0aWNrUGFkZGluZyA9IDMsIHRpY2tBcmd1bWVudHNfID0gWyAxMCBdLCB0aWNrVmFsdWVzID0gbnVsbCwgdGlja0Zvcm1hdF87XG4gICAgZnVuY3Rpb24gYXhpcyhnKSB7XG4gICAgICBnLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBnID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgICB2YXIgc2NhbGUwID0gdGhpcy5fX2NoYXJ0X18gfHwgc2NhbGUsIHNjYWxlMSA9IHRoaXMuX19jaGFydF9fID0gc2NhbGUuY29weSgpO1xuICAgICAgICB2YXIgdGlja3MgPSB0aWNrVmFsdWVzID09IG51bGwgPyBzY2FsZTEudGlja3MgPyBzY2FsZTEudGlja3MuYXBwbHkoc2NhbGUxLCB0aWNrQXJndW1lbnRzXykgOiBzY2FsZTEuZG9tYWluKCkgOiB0aWNrVmFsdWVzLCB0aWNrRm9ybWF0ID0gdGlja0Zvcm1hdF8gPT0gbnVsbCA/IHNjYWxlMS50aWNrRm9ybWF0ID8gc2NhbGUxLnRpY2tGb3JtYXQuYXBwbHkoc2NhbGUxLCB0aWNrQXJndW1lbnRzXykgOiBkM19pZGVudGl0eSA6IHRpY2tGb3JtYXRfLCB0aWNrID0gZy5zZWxlY3RBbGwoXCIudGlja1wiKS5kYXRhKHRpY2tzLCBzY2FsZTEpLCB0aWNrRW50ZXIgPSB0aWNrLmVudGVyKCkuaW5zZXJ0KFwiZ1wiLCBcIi5kb21haW5cIikuYXR0cihcImNsYXNzXCIsIFwidGlja1wiKS5zdHlsZShcIm9wYWNpdHlcIiwgzrUpLCB0aWNrRXhpdCA9IGQzLnRyYW5zaXRpb24odGljay5leGl0KCkpLnN0eWxlKFwib3BhY2l0eVwiLCDOtSkucmVtb3ZlKCksIHRpY2tVcGRhdGUgPSBkMy50cmFuc2l0aW9uKHRpY2sub3JkZXIoKSkuc3R5bGUoXCJvcGFjaXR5XCIsIDEpLCB0aWNrU3BhY2luZyA9IE1hdGgubWF4KGlubmVyVGlja1NpemUsIDApICsgdGlja1BhZGRpbmcsIHRpY2tUcmFuc2Zvcm07XG4gICAgICAgIHZhciByYW5nZSA9IGQzX3NjYWxlUmFuZ2Uoc2NhbGUxKSwgcGF0aCA9IGcuc2VsZWN0QWxsKFwiLmRvbWFpblwiKS5kYXRhKFsgMCBdKSwgcGF0aFVwZGF0ZSA9IChwYXRoLmVudGVyKCkuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJkb21haW5cIiksIFxuICAgICAgICBkMy50cmFuc2l0aW9uKHBhdGgpKTtcbiAgICAgICAgdGlja0VudGVyLmFwcGVuZChcImxpbmVcIik7XG4gICAgICAgIHRpY2tFbnRlci5hcHBlbmQoXCJ0ZXh0XCIpO1xuICAgICAgICB2YXIgbGluZUVudGVyID0gdGlja0VudGVyLnNlbGVjdChcImxpbmVcIiksIGxpbmVVcGRhdGUgPSB0aWNrVXBkYXRlLnNlbGVjdChcImxpbmVcIiksIHRleHQgPSB0aWNrLnNlbGVjdChcInRleHRcIikudGV4dCh0aWNrRm9ybWF0KSwgdGV4dEVudGVyID0gdGlja0VudGVyLnNlbGVjdChcInRleHRcIiksIHRleHRVcGRhdGUgPSB0aWNrVXBkYXRlLnNlbGVjdChcInRleHRcIiksIHNpZ24gPSBvcmllbnQgPT09IFwidG9wXCIgfHwgb3JpZW50ID09PSBcImxlZnRcIiA/IC0xIDogMSwgeDEsIHgyLCB5MSwgeTI7XG4gICAgICAgIGlmIChvcmllbnQgPT09IFwiYm90dG9tXCIgfHwgb3JpZW50ID09PSBcInRvcFwiKSB7XG4gICAgICAgICAgdGlja1RyYW5zZm9ybSA9IGQzX3N2Z19heGlzWCwgeDEgPSBcInhcIiwgeTEgPSBcInlcIiwgeDIgPSBcIngyXCIsIHkyID0gXCJ5MlwiO1xuICAgICAgICAgIHRleHQuYXR0cihcImR5XCIsIHNpZ24gPCAwID8gXCIwZW1cIiA6IFwiLjcxZW1cIikuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcbiAgICAgICAgICBwYXRoVXBkYXRlLmF0dHIoXCJkXCIsIFwiTVwiICsgcmFuZ2VbMF0gKyBcIixcIiArIHNpZ24gKiBvdXRlclRpY2tTaXplICsgXCJWMEhcIiArIHJhbmdlWzFdICsgXCJWXCIgKyBzaWduICogb3V0ZXJUaWNrU2l6ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGlja1RyYW5zZm9ybSA9IGQzX3N2Z19heGlzWSwgeDEgPSBcInlcIiwgeTEgPSBcInhcIiwgeDIgPSBcInkyXCIsIHkyID0gXCJ4MlwiO1xuICAgICAgICAgIHRleHQuYXR0cihcImR5XCIsIFwiLjMyZW1cIikuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBzaWduIDwgMCA/IFwiZW5kXCIgOiBcInN0YXJ0XCIpO1xuICAgICAgICAgIHBhdGhVcGRhdGUuYXR0cihcImRcIiwgXCJNXCIgKyBzaWduICogb3V0ZXJUaWNrU2l6ZSArIFwiLFwiICsgcmFuZ2VbMF0gKyBcIkgwVlwiICsgcmFuZ2VbMV0gKyBcIkhcIiArIHNpZ24gKiBvdXRlclRpY2tTaXplKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5lRW50ZXIuYXR0cih5Miwgc2lnbiAqIGlubmVyVGlja1NpemUpO1xuICAgICAgICB0ZXh0RW50ZXIuYXR0cih5MSwgc2lnbiAqIHRpY2tTcGFjaW5nKTtcbiAgICAgICAgbGluZVVwZGF0ZS5hdHRyKHgyLCAwKS5hdHRyKHkyLCBzaWduICogaW5uZXJUaWNrU2l6ZSk7XG4gICAgICAgIHRleHRVcGRhdGUuYXR0cih4MSwgMCkuYXR0cih5MSwgc2lnbiAqIHRpY2tTcGFjaW5nKTtcbiAgICAgICAgaWYgKHNjYWxlMS5yYW5nZUJhbmQpIHtcbiAgICAgICAgICB2YXIgeCA9IHNjYWxlMSwgZHggPSB4LnJhbmdlQmFuZCgpIC8gMjtcbiAgICAgICAgICBzY2FsZTAgPSBzY2FsZTEgPSBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4geChkKSArIGR4O1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoc2NhbGUwLnJhbmdlQmFuZCkge1xuICAgICAgICAgIHNjYWxlMCA9IHNjYWxlMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aWNrRXhpdC5jYWxsKHRpY2tUcmFuc2Zvcm0sIHNjYWxlMSwgc2NhbGUwKTtcbiAgICAgICAgfVxuICAgICAgICB0aWNrRW50ZXIuY2FsbCh0aWNrVHJhbnNmb3JtLCBzY2FsZTAsIHNjYWxlMSk7XG4gICAgICAgIHRpY2tVcGRhdGUuY2FsbCh0aWNrVHJhbnNmb3JtLCBzY2FsZTEsIHNjYWxlMSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgYXhpcy5zY2FsZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHNjYWxlO1xuICAgICAgc2NhbGUgPSB4O1xuICAgICAgcmV0dXJuIGF4aXM7XG4gICAgfTtcbiAgICBheGlzLm9yaWVudCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIG9yaWVudDtcbiAgICAgIG9yaWVudCA9IHggaW4gZDNfc3ZnX2F4aXNPcmllbnRzID8geCArIFwiXCIgOiBkM19zdmdfYXhpc0RlZmF1bHRPcmllbnQ7XG4gICAgICByZXR1cm4gYXhpcztcbiAgICB9O1xuICAgIGF4aXMudGlja3MgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRpY2tBcmd1bWVudHNfO1xuICAgICAgdGlja0FyZ3VtZW50c18gPSBkM19hcnJheShhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIGF4aXM7XG4gICAgfTtcbiAgICBheGlzLnRpY2tWYWx1ZXMgPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aWNrVmFsdWVzO1xuICAgICAgdGlja1ZhbHVlcyA9IHg7XG4gICAgICByZXR1cm4gYXhpcztcbiAgICB9O1xuICAgIGF4aXMudGlja0Zvcm1hdCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRpY2tGb3JtYXRfO1xuICAgICAgdGlja0Zvcm1hdF8gPSB4O1xuICAgICAgcmV0dXJuIGF4aXM7XG4gICAgfTtcbiAgICBheGlzLnRpY2tTaXplID0gZnVuY3Rpb24oeCkge1xuICAgICAgdmFyIG4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgaWYgKCFuKSByZXR1cm4gaW5uZXJUaWNrU2l6ZTtcbiAgICAgIGlubmVyVGlja1NpemUgPSAreDtcbiAgICAgIG91dGVyVGlja1NpemUgPSArYXJndW1lbnRzW24gLSAxXTtcbiAgICAgIHJldHVybiBheGlzO1xuICAgIH07XG4gICAgYXhpcy5pbm5lclRpY2tTaXplID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gaW5uZXJUaWNrU2l6ZTtcbiAgICAgIGlubmVyVGlja1NpemUgPSAreDtcbiAgICAgIHJldHVybiBheGlzO1xuICAgIH07XG4gICAgYXhpcy5vdXRlclRpY2tTaXplID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gb3V0ZXJUaWNrU2l6ZTtcbiAgICAgIG91dGVyVGlja1NpemUgPSAreDtcbiAgICAgIHJldHVybiBheGlzO1xuICAgIH07XG4gICAgYXhpcy50aWNrUGFkZGluZyA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRpY2tQYWRkaW5nO1xuICAgICAgdGlja1BhZGRpbmcgPSAreDtcbiAgICAgIHJldHVybiBheGlzO1xuICAgIH07XG4gICAgYXhpcy50aWNrU3ViZGl2aWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCAmJiBheGlzO1xuICAgIH07XG4gICAgcmV0dXJuIGF4aXM7XG4gIH07XG4gIHZhciBkM19zdmdfYXhpc0RlZmF1bHRPcmllbnQgPSBcImJvdHRvbVwiLCBkM19zdmdfYXhpc09yaWVudHMgPSB7XG4gICAgdG9wOiAxLFxuICAgIHJpZ2h0OiAxLFxuICAgIGJvdHRvbTogMSxcbiAgICBsZWZ0OiAxXG4gIH07XG4gIGZ1bmN0aW9uIGQzX3N2Z19heGlzWChzZWxlY3Rpb24sIHgwLCB4MSkge1xuICAgIHNlbGVjdGlvbi5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgIHZhciB2MCA9IHgwKGQpO1xuICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgKGlzRmluaXRlKHYwKSA/IHYwIDogeDEoZCkpICsgXCIsMClcIjtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBkM19zdmdfYXhpc1koc2VsZWN0aW9uLCB5MCwgeTEpIHtcbiAgICBzZWxlY3Rpb24uYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICB2YXIgdjAgPSB5MChkKTtcbiAgICAgIHJldHVybiBcInRyYW5zbGF0ZSgwLFwiICsgKGlzRmluaXRlKHYwKSA/IHYwIDogeTEoZCkpICsgXCIpXCI7XG4gICAgfSk7XG4gIH1cbiAgZDMuc3ZnLmJydXNoID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV2ZW50ID0gZDNfZXZlbnREaXNwYXRjaChicnVzaCwgXCJicnVzaHN0YXJ0XCIsIFwiYnJ1c2hcIiwgXCJicnVzaGVuZFwiKSwgeCA9IG51bGwsIHkgPSBudWxsLCB4RXh0ZW50ID0gWyAwLCAwIF0sIHlFeHRlbnQgPSBbIDAsIDAgXSwgeEV4dGVudERvbWFpbiwgeUV4dGVudERvbWFpbiwgeENsYW1wID0gdHJ1ZSwgeUNsYW1wID0gdHJ1ZSwgcmVzaXplcyA9IGQzX3N2Z19icnVzaFJlc2l6ZXNbMF07XG4gICAgZnVuY3Rpb24gYnJ1c2goZykge1xuICAgICAgZy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZyA9IGQzLnNlbGVjdCh0aGlzKS5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIFwiYWxsXCIpLnN0eWxlKFwiLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yXCIsIFwicmdiYSgwLDAsMCwwKVwiKS5vbihcIm1vdXNlZG93bi5icnVzaFwiLCBicnVzaHN0YXJ0KS5vbihcInRvdWNoc3RhcnQuYnJ1c2hcIiwgYnJ1c2hzdGFydCk7XG4gICAgICAgIHZhciBiYWNrZ3JvdW5kID0gZy5zZWxlY3RBbGwoXCIuYmFja2dyb3VuZFwiKS5kYXRhKFsgMCBdKTtcbiAgICAgICAgYmFja2dyb3VuZC5lbnRlcigpLmFwcGVuZChcInJlY3RcIikuYXR0cihcImNsYXNzXCIsIFwiYmFja2dyb3VuZFwiKS5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIikuc3R5bGUoXCJjdXJzb3JcIiwgXCJjcm9zc2hhaXJcIik7XG4gICAgICAgIGcuc2VsZWN0QWxsKFwiLmV4dGVudFwiKS5kYXRhKFsgMCBdKS5lbnRlcigpLmFwcGVuZChcInJlY3RcIikuYXR0cihcImNsYXNzXCIsIFwiZXh0ZW50XCIpLnN0eWxlKFwiY3Vyc29yXCIsIFwibW92ZVwiKTtcbiAgICAgICAgdmFyIHJlc2l6ZSA9IGcuc2VsZWN0QWxsKFwiLnJlc2l6ZVwiKS5kYXRhKHJlc2l6ZXMsIGQzX2lkZW50aXR5KTtcbiAgICAgICAgcmVzaXplLmV4aXQoKS5yZW1vdmUoKTtcbiAgICAgICAgcmVzaXplLmVudGVyKCkuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBcInJlc2l6ZSBcIiArIGQ7XG4gICAgICAgIH0pLnN0eWxlKFwiY3Vyc29yXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gZDNfc3ZnX2JydXNoQ3Vyc29yW2RdO1xuICAgICAgICB9KS5hcHBlbmQoXCJyZWN0XCIpLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gL1tld10kLy50ZXN0KGQpID8gLTMgOiBudWxsO1xuICAgICAgICB9KS5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIC9eW25zXS8udGVzdChkKSA/IC0zIDogbnVsbDtcbiAgICAgICAgfSkuYXR0cihcIndpZHRoXCIsIDYpLmF0dHIoXCJoZWlnaHRcIiwgNikuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICByZXNpemUuc3R5bGUoXCJkaXNwbGF5XCIsIGJydXNoLmVtcHR5KCkgPyBcIm5vbmVcIiA6IG51bGwpO1xuICAgICAgICB2YXIgZ1VwZGF0ZSA9IGQzLnRyYW5zaXRpb24oZyksIGJhY2tncm91bmRVcGRhdGUgPSBkMy50cmFuc2l0aW9uKGJhY2tncm91bmQpLCByYW5nZTtcbiAgICAgICAgaWYgKHgpIHtcbiAgICAgICAgICByYW5nZSA9IGQzX3NjYWxlUmFuZ2UoeCk7XG4gICAgICAgICAgYmFja2dyb3VuZFVwZGF0ZS5hdHRyKFwieFwiLCByYW5nZVswXSkuYXR0cihcIndpZHRoXCIsIHJhbmdlWzFdIC0gcmFuZ2VbMF0pO1xuICAgICAgICAgIHJlZHJhd1goZ1VwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkpIHtcbiAgICAgICAgICByYW5nZSA9IGQzX3NjYWxlUmFuZ2UoeSk7XG4gICAgICAgICAgYmFja2dyb3VuZFVwZGF0ZS5hdHRyKFwieVwiLCByYW5nZVswXSkuYXR0cihcImhlaWdodFwiLCByYW5nZVsxXSAtIHJhbmdlWzBdKTtcbiAgICAgICAgICByZWRyYXdZKGdVcGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJlZHJhdyhnVXBkYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBicnVzaC5ldmVudCA9IGZ1bmN0aW9uKGcpIHtcbiAgICAgIGcuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGV2ZW50XyA9IGV2ZW50Lm9mKHRoaXMsIGFyZ3VtZW50cyksIGV4dGVudDEgPSB7XG4gICAgICAgICAgeDogeEV4dGVudCxcbiAgICAgICAgICB5OiB5RXh0ZW50LFxuICAgICAgICAgIGk6IHhFeHRlbnREb21haW4sXG4gICAgICAgICAgajogeUV4dGVudERvbWFpblxuICAgICAgICB9LCBleHRlbnQwID0gdGhpcy5fX2NoYXJ0X18gfHwgZXh0ZW50MTtcbiAgICAgICAgdGhpcy5fX2NoYXJ0X18gPSBleHRlbnQxO1xuICAgICAgICBpZiAoZDNfdHJhbnNpdGlvbkluaGVyaXRJZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKCkuZWFjaChcInN0YXJ0LmJydXNoXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgeEV4dGVudERvbWFpbiA9IGV4dGVudDAuaTtcbiAgICAgICAgICAgIHlFeHRlbnREb21haW4gPSBleHRlbnQwLmo7XG4gICAgICAgICAgICB4RXh0ZW50ID0gZXh0ZW50MC54O1xuICAgICAgICAgICAgeUV4dGVudCA9IGV4dGVudDAueTtcbiAgICAgICAgICAgIGV2ZW50Xyh7XG4gICAgICAgICAgICAgIHR5cGU6IFwiYnJ1c2hzdGFydFwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KS50d2VlbihcImJydXNoOmJydXNoXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHhpID0gZDNfaW50ZXJwb2xhdGVBcnJheSh4RXh0ZW50LCBleHRlbnQxLngpLCB5aSA9IGQzX2ludGVycG9sYXRlQXJyYXkoeUV4dGVudCwgZXh0ZW50MS55KTtcbiAgICAgICAgICAgIHhFeHRlbnREb21haW4gPSB5RXh0ZW50RG9tYWluID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHhFeHRlbnQgPSBleHRlbnQxLnggPSB4aSh0KTtcbiAgICAgICAgICAgICAgeUV4dGVudCA9IGV4dGVudDEueSA9IHlpKHQpO1xuICAgICAgICAgICAgICBldmVudF8oe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiYnJ1c2hcIixcbiAgICAgICAgICAgICAgICBtb2RlOiBcInJlc2l6ZVwiXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KS5lYWNoKFwiZW5kLmJydXNoXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgeEV4dGVudERvbWFpbiA9IGV4dGVudDEuaTtcbiAgICAgICAgICAgIHlFeHRlbnREb21haW4gPSBleHRlbnQxLmo7XG4gICAgICAgICAgICBldmVudF8oe1xuICAgICAgICAgICAgICB0eXBlOiBcImJydXNoXCIsXG4gICAgICAgICAgICAgIG1vZGU6IFwicmVzaXplXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnRfKHtcbiAgICAgICAgICAgICAgdHlwZTogXCJicnVzaGVuZFwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBldmVudF8oe1xuICAgICAgICAgICAgdHlwZTogXCJicnVzaHN0YXJ0XCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBldmVudF8oe1xuICAgICAgICAgICAgdHlwZTogXCJicnVzaFwiLFxuICAgICAgICAgICAgbW9kZTogXCJyZXNpemVcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGV2ZW50Xyh7XG4gICAgICAgICAgICB0eXBlOiBcImJydXNoZW5kXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiByZWRyYXcoZykge1xuICAgICAgZy5zZWxlY3RBbGwoXCIucmVzaXplXCIpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB4RXh0ZW50WysvZSQvLnRlc3QoZCldICsgXCIsXCIgKyB5RXh0ZW50WysvXnMvLnRlc3QoZCldICsgXCIpXCI7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVkcmF3WChnKSB7XG4gICAgICBnLnNlbGVjdChcIi5leHRlbnRcIikuYXR0cihcInhcIiwgeEV4dGVudFswXSk7XG4gICAgICBnLnNlbGVjdEFsbChcIi5leHRlbnQsLm4+cmVjdCwucz5yZWN0XCIpLmF0dHIoXCJ3aWR0aFwiLCB4RXh0ZW50WzFdIC0geEV4dGVudFswXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlZHJhd1koZykge1xuICAgICAgZy5zZWxlY3QoXCIuZXh0ZW50XCIpLmF0dHIoXCJ5XCIsIHlFeHRlbnRbMF0pO1xuICAgICAgZy5zZWxlY3RBbGwoXCIuZXh0ZW50LC5lPnJlY3QsLnc+cmVjdFwiKS5hdHRyKFwiaGVpZ2h0XCIsIHlFeHRlbnRbMV0gLSB5RXh0ZW50WzBdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYnJ1c2hzdGFydCgpIHtcbiAgICAgIHZhciB0YXJnZXQgPSB0aGlzLCBldmVudFRhcmdldCA9IGQzLnNlbGVjdChkMy5ldmVudC50YXJnZXQpLCBldmVudF8gPSBldmVudC5vZih0YXJnZXQsIGFyZ3VtZW50cyksIGcgPSBkMy5zZWxlY3QodGFyZ2V0KSwgcmVzaXppbmcgPSBldmVudFRhcmdldC5kYXR1bSgpLCByZXNpemluZ1ggPSAhL14obnxzKSQvLnRlc3QocmVzaXppbmcpICYmIHgsIHJlc2l6aW5nWSA9ICEvXihlfHcpJC8udGVzdChyZXNpemluZykgJiYgeSwgZHJhZ2dpbmcgPSBldmVudFRhcmdldC5jbGFzc2VkKFwiZXh0ZW50XCIpLCBkcmFnUmVzdG9yZSA9IGQzX2V2ZW50X2RyYWdTdXBwcmVzcyh0YXJnZXQpLCBjZW50ZXIsIG9yaWdpbiA9IGQzLm1vdXNlKHRhcmdldCksIG9mZnNldDtcbiAgICAgIHZhciB3ID0gZDMuc2VsZWN0KGQzX3dpbmRvdyh0YXJnZXQpKS5vbihcImtleWRvd24uYnJ1c2hcIiwga2V5ZG93bikub24oXCJrZXl1cC5icnVzaFwiLCBrZXl1cCk7XG4gICAgICBpZiAoZDMuZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgICAgdy5vbihcInRvdWNobW92ZS5icnVzaFwiLCBicnVzaG1vdmUpLm9uKFwidG91Y2hlbmQuYnJ1c2hcIiwgYnJ1c2hlbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdy5vbihcIm1vdXNlbW92ZS5icnVzaFwiLCBicnVzaG1vdmUpLm9uKFwibW91c2V1cC5icnVzaFwiLCBicnVzaGVuZCk7XG4gICAgICB9XG4gICAgICBnLmludGVycnVwdCgpLnNlbGVjdEFsbChcIipcIikuaW50ZXJydXB0KCk7XG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgb3JpZ2luWzBdID0geEV4dGVudFswXSAtIG9yaWdpblswXTtcbiAgICAgICAgb3JpZ2luWzFdID0geUV4dGVudFswXSAtIG9yaWdpblsxXTtcbiAgICAgIH0gZWxzZSBpZiAocmVzaXppbmcpIHtcbiAgICAgICAgdmFyIGV4ID0gKy93JC8udGVzdChyZXNpemluZyksIGV5ID0gKy9ebi8udGVzdChyZXNpemluZyk7XG4gICAgICAgIG9mZnNldCA9IFsgeEV4dGVudFsxIC0gZXhdIC0gb3JpZ2luWzBdLCB5RXh0ZW50WzEgLSBleV0gLSBvcmlnaW5bMV0gXTtcbiAgICAgICAgb3JpZ2luWzBdID0geEV4dGVudFtleF07XG4gICAgICAgIG9yaWdpblsxXSA9IHlFeHRlbnRbZXldO1xuICAgICAgfSBlbHNlIGlmIChkMy5ldmVudC5hbHRLZXkpIGNlbnRlciA9IG9yaWdpbi5zbGljZSgpO1xuICAgICAgZy5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIFwibm9uZVwiKS5zZWxlY3RBbGwoXCIucmVzaXplXCIpLnN0eWxlKFwiZGlzcGxheVwiLCBudWxsKTtcbiAgICAgIGQzLnNlbGVjdChcImJvZHlcIikuc3R5bGUoXCJjdXJzb3JcIiwgZXZlbnRUYXJnZXQuc3R5bGUoXCJjdXJzb3JcIikpO1xuICAgICAgZXZlbnRfKHtcbiAgICAgICAgdHlwZTogXCJicnVzaHN0YXJ0XCJcbiAgICAgIH0pO1xuICAgICAgYnJ1c2htb3ZlKCk7XG4gICAgICBmdW5jdGlvbiBrZXlkb3duKCkge1xuICAgICAgICBpZiAoZDMuZXZlbnQua2V5Q29kZSA9PSAzMikge1xuICAgICAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgICAgIGNlbnRlciA9IG51bGw7XG4gICAgICAgICAgICBvcmlnaW5bMF0gLT0geEV4dGVudFsxXTtcbiAgICAgICAgICAgIG9yaWdpblsxXSAtPSB5RXh0ZW50WzFdO1xuICAgICAgICAgICAgZHJhZ2dpbmcgPSAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkM19ldmVudFByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGtleXVwKCkge1xuICAgICAgICBpZiAoZDMuZXZlbnQua2V5Q29kZSA9PSAzMiAmJiBkcmFnZ2luZyA9PSAyKSB7XG4gICAgICAgICAgb3JpZ2luWzBdICs9IHhFeHRlbnRbMV07XG4gICAgICAgICAgb3JpZ2luWzFdICs9IHlFeHRlbnRbMV07XG4gICAgICAgICAgZHJhZ2dpbmcgPSAwO1xuICAgICAgICAgIGQzX2V2ZW50UHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gYnJ1c2htb3ZlKCkge1xuICAgICAgICB2YXIgcG9pbnQgPSBkMy5tb3VzZSh0YXJnZXQpLCBtb3ZlZCA9IGZhbHNlO1xuICAgICAgICBpZiAob2Zmc2V0KSB7XG4gICAgICAgICAgcG9pbnRbMF0gKz0gb2Zmc2V0WzBdO1xuICAgICAgICAgIHBvaW50WzFdICs9IG9mZnNldFsxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgICAgaWYgKGQzLmV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgaWYgKCFjZW50ZXIpIGNlbnRlciA9IFsgKHhFeHRlbnRbMF0gKyB4RXh0ZW50WzFdKSAvIDIsICh5RXh0ZW50WzBdICsgeUV4dGVudFsxXSkgLyAyIF07XG4gICAgICAgICAgICBvcmlnaW5bMF0gPSB4RXh0ZW50WysocG9pbnRbMF0gPCBjZW50ZXJbMF0pXTtcbiAgICAgICAgICAgIG9yaWdpblsxXSA9IHlFeHRlbnRbKyhwb2ludFsxXSA8IGNlbnRlclsxXSldO1xuICAgICAgICAgIH0gZWxzZSBjZW50ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNpemluZ1ggJiYgbW92ZTEocG9pbnQsIHgsIDApKSB7XG4gICAgICAgICAgcmVkcmF3WChnKTtcbiAgICAgICAgICBtb3ZlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc2l6aW5nWSAmJiBtb3ZlMShwb2ludCwgeSwgMSkpIHtcbiAgICAgICAgICByZWRyYXdZKGcpO1xuICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW92ZWQpIHtcbiAgICAgICAgICByZWRyYXcoZyk7XG4gICAgICAgICAgZXZlbnRfKHtcbiAgICAgICAgICAgIHR5cGU6IFwiYnJ1c2hcIixcbiAgICAgICAgICAgIG1vZGU6IGRyYWdnaW5nID8gXCJtb3ZlXCIgOiBcInJlc2l6ZVwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIG1vdmUxKHBvaW50LCBzY2FsZSwgaSkge1xuICAgICAgICB2YXIgcmFuZ2UgPSBkM19zY2FsZVJhbmdlKHNjYWxlKSwgcjAgPSByYW5nZVswXSwgcjEgPSByYW5nZVsxXSwgcG9zaXRpb24gPSBvcmlnaW5baV0sIGV4dGVudCA9IGkgPyB5RXh0ZW50IDogeEV4dGVudCwgc2l6ZSA9IGV4dGVudFsxXSAtIGV4dGVudFswXSwgbWluLCBtYXg7XG4gICAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICAgIHIwIC09IHBvc2l0aW9uO1xuICAgICAgICAgIHIxIC09IHNpemUgKyBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBtaW4gPSAoaSA/IHlDbGFtcCA6IHhDbGFtcCkgPyBNYXRoLm1heChyMCwgTWF0aC5taW4ocjEsIHBvaW50W2ldKSkgOiBwb2ludFtpXTtcbiAgICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgICAgbWF4ID0gKG1pbiArPSBwb3NpdGlvbikgKyBzaXplO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjZW50ZXIpIHBvc2l0aW9uID0gTWF0aC5tYXgocjAsIE1hdGgubWluKHIxLCAyICogY2VudGVyW2ldIC0gbWluKSk7XG4gICAgICAgICAgaWYgKHBvc2l0aW9uIDwgbWluKSB7XG4gICAgICAgICAgICBtYXggPSBtaW47XG4gICAgICAgICAgICBtaW4gPSBwb3NpdGlvbjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF4ID0gcG9zaXRpb247XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChleHRlbnRbMF0gIT0gbWluIHx8IGV4dGVudFsxXSAhPSBtYXgpIHtcbiAgICAgICAgICBpZiAoaSkgeUV4dGVudERvbWFpbiA9IG51bGw7IGVsc2UgeEV4dGVudERvbWFpbiA9IG51bGw7XG4gICAgICAgICAgZXh0ZW50WzBdID0gbWluO1xuICAgICAgICAgIGV4dGVudFsxXSA9IG1heDtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gYnJ1c2hlbmQoKSB7XG4gICAgICAgIGJydXNobW92ZSgpO1xuICAgICAgICBnLnN0eWxlKFwicG9pbnRlci1ldmVudHNcIiwgXCJhbGxcIikuc2VsZWN0QWxsKFwiLnJlc2l6ZVwiKS5zdHlsZShcImRpc3BsYXlcIiwgYnJ1c2guZW1wdHkoKSA/IFwibm9uZVwiIDogbnVsbCk7XG4gICAgICAgIGQzLnNlbGVjdChcImJvZHlcIikuc3R5bGUoXCJjdXJzb3JcIiwgbnVsbCk7XG4gICAgICAgIHcub24oXCJtb3VzZW1vdmUuYnJ1c2hcIiwgbnVsbCkub24oXCJtb3VzZXVwLmJydXNoXCIsIG51bGwpLm9uKFwidG91Y2htb3ZlLmJydXNoXCIsIG51bGwpLm9uKFwidG91Y2hlbmQuYnJ1c2hcIiwgbnVsbCkub24oXCJrZXlkb3duLmJydXNoXCIsIG51bGwpLm9uKFwia2V5dXAuYnJ1c2hcIiwgbnVsbCk7XG4gICAgICAgIGRyYWdSZXN0b3JlKCk7XG4gICAgICAgIGV2ZW50Xyh7XG4gICAgICAgICAgdHlwZTogXCJicnVzaGVuZFwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBicnVzaC54ID0gZnVuY3Rpb24oeikge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4geDtcbiAgICAgIHggPSB6O1xuICAgICAgcmVzaXplcyA9IGQzX3N2Z19icnVzaFJlc2l6ZXNbIXggPDwgMSB8ICF5XTtcbiAgICAgIHJldHVybiBicnVzaDtcbiAgICB9O1xuICAgIGJydXNoLnkgPSBmdW5jdGlvbih6KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB5O1xuICAgICAgeSA9IHo7XG4gICAgICByZXNpemVzID0gZDNfc3ZnX2JydXNoUmVzaXplc1sheCA8PCAxIHwgIXldO1xuICAgICAgcmV0dXJuIGJydXNoO1xuICAgIH07XG4gICAgYnJ1c2guY2xhbXAgPSBmdW5jdGlvbih6KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB4ICYmIHkgPyBbIHhDbGFtcCwgeUNsYW1wIF0gOiB4ID8geENsYW1wIDogeSA/IHlDbGFtcCA6IG51bGw7XG4gICAgICBpZiAoeCAmJiB5KSB4Q2xhbXAgPSAhIXpbMF0sIHlDbGFtcCA9ICEhelsxXTsgZWxzZSBpZiAoeCkgeENsYW1wID0gISF6OyBlbHNlIGlmICh5KSB5Q2xhbXAgPSAhIXo7XG4gICAgICByZXR1cm4gYnJ1c2g7XG4gICAgfTtcbiAgICBicnVzaC5leHRlbnQgPSBmdW5jdGlvbih6KSB7XG4gICAgICB2YXIgeDAsIHgxLCB5MCwgeTEsIHQ7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHgpIHtcbiAgICAgICAgICBpZiAoeEV4dGVudERvbWFpbikge1xuICAgICAgICAgICAgeDAgPSB4RXh0ZW50RG9tYWluWzBdLCB4MSA9IHhFeHRlbnREb21haW5bMV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHgwID0geEV4dGVudFswXSwgeDEgPSB4RXh0ZW50WzFdO1xuICAgICAgICAgICAgaWYgKHguaW52ZXJ0KSB4MCA9IHguaW52ZXJ0KHgwKSwgeDEgPSB4LmludmVydCh4MSk7XG4gICAgICAgICAgICBpZiAoeDEgPCB4MCkgdCA9IHgwLCB4MCA9IHgxLCB4MSA9IHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh5KSB7XG4gICAgICAgICAgaWYgKHlFeHRlbnREb21haW4pIHtcbiAgICAgICAgICAgIHkwID0geUV4dGVudERvbWFpblswXSwgeTEgPSB5RXh0ZW50RG9tYWluWzFdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5MCA9IHlFeHRlbnRbMF0sIHkxID0geUV4dGVudFsxXTtcbiAgICAgICAgICAgIGlmICh5LmludmVydCkgeTAgPSB5LmludmVydCh5MCksIHkxID0geS5pbnZlcnQoeTEpO1xuICAgICAgICAgICAgaWYgKHkxIDwgeTApIHQgPSB5MCwgeTAgPSB5MSwgeTEgPSB0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geCAmJiB5ID8gWyBbIHgwLCB5MCBdLCBbIHgxLCB5MSBdIF0gOiB4ID8gWyB4MCwgeDEgXSA6IHkgJiYgWyB5MCwgeTEgXTtcbiAgICAgIH1cbiAgICAgIGlmICh4KSB7XG4gICAgICAgIHgwID0gelswXSwgeDEgPSB6WzFdO1xuICAgICAgICBpZiAoeSkgeDAgPSB4MFswXSwgeDEgPSB4MVswXTtcbiAgICAgICAgeEV4dGVudERvbWFpbiA9IFsgeDAsIHgxIF07XG4gICAgICAgIGlmICh4LmludmVydCkgeDAgPSB4KHgwKSwgeDEgPSB4KHgxKTtcbiAgICAgICAgaWYgKHgxIDwgeDApIHQgPSB4MCwgeDAgPSB4MSwgeDEgPSB0O1xuICAgICAgICBpZiAoeDAgIT0geEV4dGVudFswXSB8fCB4MSAhPSB4RXh0ZW50WzFdKSB4RXh0ZW50ID0gWyB4MCwgeDEgXTtcbiAgICAgIH1cbiAgICAgIGlmICh5KSB7XG4gICAgICAgIHkwID0gelswXSwgeTEgPSB6WzFdO1xuICAgICAgICBpZiAoeCkgeTAgPSB5MFsxXSwgeTEgPSB5MVsxXTtcbiAgICAgICAgeUV4dGVudERvbWFpbiA9IFsgeTAsIHkxIF07XG4gICAgICAgIGlmICh5LmludmVydCkgeTAgPSB5KHkwKSwgeTEgPSB5KHkxKTtcbiAgICAgICAgaWYgKHkxIDwgeTApIHQgPSB5MCwgeTAgPSB5MSwgeTEgPSB0O1xuICAgICAgICBpZiAoeTAgIT0geUV4dGVudFswXSB8fCB5MSAhPSB5RXh0ZW50WzFdKSB5RXh0ZW50ID0gWyB5MCwgeTEgXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBicnVzaDtcbiAgICB9O1xuICAgIGJydXNoLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWJydXNoLmVtcHR5KCkpIHtcbiAgICAgICAgeEV4dGVudCA9IFsgMCwgMCBdLCB5RXh0ZW50ID0gWyAwLCAwIF07XG4gICAgICAgIHhFeHRlbnREb21haW4gPSB5RXh0ZW50RG9tYWluID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBicnVzaDtcbiAgICB9O1xuICAgIGJydXNoLmVtcHR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gISF4ICYmIHhFeHRlbnRbMF0gPT0geEV4dGVudFsxXSB8fCAhIXkgJiYgeUV4dGVudFswXSA9PSB5RXh0ZW50WzFdO1xuICAgIH07XG4gICAgcmV0dXJuIGQzLnJlYmluZChicnVzaCwgZXZlbnQsIFwib25cIik7XG4gIH07XG4gIHZhciBkM19zdmdfYnJ1c2hDdXJzb3IgPSB7XG4gICAgbjogXCJucy1yZXNpemVcIixcbiAgICBlOiBcImV3LXJlc2l6ZVwiLFxuICAgIHM6IFwibnMtcmVzaXplXCIsXG4gICAgdzogXCJldy1yZXNpemVcIixcbiAgICBudzogXCJud3NlLXJlc2l6ZVwiLFxuICAgIG5lOiBcIm5lc3ctcmVzaXplXCIsXG4gICAgc2U6IFwibndzZS1yZXNpemVcIixcbiAgICBzdzogXCJuZXN3LXJlc2l6ZVwiXG4gIH07XG4gIHZhciBkM19zdmdfYnJ1c2hSZXNpemVzID0gWyBbIFwiblwiLCBcImVcIiwgXCJzXCIsIFwid1wiLCBcIm53XCIsIFwibmVcIiwgXCJzZVwiLCBcInN3XCIgXSwgWyBcImVcIiwgXCJ3XCIgXSwgWyBcIm5cIiwgXCJzXCIgXSwgW10gXTtcbiAgdmFyIGQzX3RpbWVfZm9ybWF0ID0gZDNfdGltZS5mb3JtYXQgPSBkM19sb2NhbGVfZW5VUy50aW1lRm9ybWF0O1xuICB2YXIgZDNfdGltZV9mb3JtYXRVdGMgPSBkM190aW1lX2Zvcm1hdC51dGM7XG4gIHZhciBkM190aW1lX2Zvcm1hdElzbyA9IGQzX3RpbWVfZm9ybWF0VXRjKFwiJVktJW0tJWRUJUg6JU06JVMuJUxaXCIpO1xuICBkM190aW1lX2Zvcm1hdC5pc28gPSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZyAmJiArbmV3IERhdGUoXCIyMDAwLTAxLTAxVDAwOjAwOjAwLjAwMFpcIikgPyBkM190aW1lX2Zvcm1hdElzb05hdGl2ZSA6IGQzX3RpbWVfZm9ybWF0SXNvO1xuICBmdW5jdGlvbiBkM190aW1lX2Zvcm1hdElzb05hdGl2ZShkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKTtcbiAgfVxuICBkM190aW1lX2Zvcm1hdElzb05hdGl2ZS5wYXJzZSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoc3RyaW5nKTtcbiAgICByZXR1cm4gaXNOYU4oZGF0ZSkgPyBudWxsIDogZGF0ZTtcbiAgfTtcbiAgZDNfdGltZV9mb3JtYXRJc29OYXRpdmUudG9TdHJpbmcgPSBkM190aW1lX2Zvcm1hdElzby50b1N0cmluZztcbiAgZDNfdGltZS5zZWNvbmQgPSBkM190aW1lX2ludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgICByZXR1cm4gbmV3IGQzX2RhdGUoTWF0aC5mbG9vcihkYXRlIC8gMWUzKSAqIDFlMyk7XG4gIH0sIGZ1bmN0aW9uKGRhdGUsIG9mZnNldCkge1xuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIE1hdGguZmxvb3Iob2Zmc2V0KSAqIDFlMyk7XG4gIH0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gIH0pO1xuICBkM190aW1lLnNlY29uZHMgPSBkM190aW1lLnNlY29uZC5yYW5nZTtcbiAgZDNfdGltZS5zZWNvbmRzLnV0YyA9IGQzX3RpbWUuc2Vjb25kLnV0Yy5yYW5nZTtcbiAgZDNfdGltZS5taW51dGUgPSBkM190aW1lX2ludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgICByZXR1cm4gbmV3IGQzX2RhdGUoTWF0aC5mbG9vcihkYXRlIC8gNmU0KSAqIDZlNCk7XG4gIH0sIGZ1bmN0aW9uKGRhdGUsIG9mZnNldCkge1xuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIE1hdGguZmxvb3Iob2Zmc2V0KSAqIDZlNCk7XG4gIH0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRNaW51dGVzKCk7XG4gIH0pO1xuICBkM190aW1lLm1pbnV0ZXMgPSBkM190aW1lLm1pbnV0ZS5yYW5nZTtcbiAgZDNfdGltZS5taW51dGVzLnV0YyA9IGQzX3RpbWUubWludXRlLnV0Yy5yYW5nZTtcbiAgZDNfdGltZS5ob3VyID0gZDNfdGltZV9pbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgdmFyIHRpbWV6b25lID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpIC8gNjA7XG4gICAgcmV0dXJuIG5ldyBkM19kYXRlKChNYXRoLmZsb29yKGRhdGUgLyAzNmU1IC0gdGltZXpvbmUpICsgdGltZXpvbmUpICogMzZlNSk7XG4gIH0sIGZ1bmN0aW9uKGRhdGUsIG9mZnNldCkge1xuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIE1hdGguZmxvb3Iob2Zmc2V0KSAqIDM2ZTUpO1xuICB9LCBmdW5jdGlvbihkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0SG91cnMoKTtcbiAgfSk7XG4gIGQzX3RpbWUuaG91cnMgPSBkM190aW1lLmhvdXIucmFuZ2U7XG4gIGQzX3RpbWUuaG91cnMudXRjID0gZDNfdGltZS5ob3VyLnV0Yy5yYW5nZTtcbiAgZDNfdGltZS5tb250aCA9IGQzX3RpbWVfaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUgPSBkM190aW1lLmRheShkYXRlKTtcbiAgICBkYXRlLnNldERhdGUoMSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH0sIGZ1bmN0aW9uKGRhdGUsIG9mZnNldCkge1xuICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgb2Zmc2V0KTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldE1vbnRoKCk7XG4gIH0pO1xuICBkM190aW1lLm1vbnRocyA9IGQzX3RpbWUubW9udGgucmFuZ2U7XG4gIGQzX3RpbWUubW9udGhzLnV0YyA9IGQzX3RpbWUubW9udGgudXRjLnJhbmdlO1xuICBmdW5jdGlvbiBkM190aW1lX3NjYWxlKGxpbmVhciwgbWV0aG9kcywgZm9ybWF0KSB7XG4gICAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgICAgcmV0dXJuIGxpbmVhcih4KTtcbiAgICB9XG4gICAgc2NhbGUuaW52ZXJ0ID0gZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIGQzX3RpbWVfc2NhbGVEYXRlKGxpbmVhci5pbnZlcnQoeCkpO1xuICAgIH07XG4gICAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gbGluZWFyLmRvbWFpbigpLm1hcChkM190aW1lX3NjYWxlRGF0ZSk7XG4gICAgICBsaW5lYXIuZG9tYWluKHgpO1xuICAgICAgcmV0dXJuIHNjYWxlO1xuICAgIH07XG4gICAgZnVuY3Rpb24gdGlja01ldGhvZChleHRlbnQsIGNvdW50KSB7XG4gICAgICB2YXIgc3BhbiA9IGV4dGVudFsxXSAtIGV4dGVudFswXSwgdGFyZ2V0ID0gc3BhbiAvIGNvdW50LCBpID0gZDMuYmlzZWN0KGQzX3RpbWVfc2NhbGVTdGVwcywgdGFyZ2V0KTtcbiAgICAgIHJldHVybiBpID09IGQzX3RpbWVfc2NhbGVTdGVwcy5sZW5ndGggPyBbIG1ldGhvZHMueWVhciwgZDNfc2NhbGVfbGluZWFyVGlja1JhbmdlKGV4dGVudC5tYXAoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZCAvIDMxNTM2ZTY7XG4gICAgICB9KSwgY291bnQpWzJdIF0gOiAhaSA/IFsgZDNfdGltZV9zY2FsZU1pbGxpc2Vjb25kcywgZDNfc2NhbGVfbGluZWFyVGlja1JhbmdlKGV4dGVudCwgY291bnQpWzJdIF0gOiBtZXRob2RzW3RhcmdldCAvIGQzX3RpbWVfc2NhbGVTdGVwc1tpIC0gMV0gPCBkM190aW1lX3NjYWxlU3RlcHNbaV0gLyB0YXJnZXQgPyBpIC0gMSA6IGldO1xuICAgIH1cbiAgICBzY2FsZS5uaWNlID0gZnVuY3Rpb24oaW50ZXJ2YWwsIHNraXApIHtcbiAgICAgIHZhciBkb21haW4gPSBzY2FsZS5kb21haW4oKSwgZXh0ZW50ID0gZDNfc2NhbGVFeHRlbnQoZG9tYWluKSwgbWV0aG9kID0gaW50ZXJ2YWwgPT0gbnVsbCA/IHRpY2tNZXRob2QoZXh0ZW50LCAxMCkgOiB0eXBlb2YgaW50ZXJ2YWwgPT09IFwibnVtYmVyXCIgJiYgdGlja01ldGhvZChleHRlbnQsIGludGVydmFsKTtcbiAgICAgIGlmIChtZXRob2QpIGludGVydmFsID0gbWV0aG9kWzBdLCBza2lwID0gbWV0aG9kWzFdO1xuICAgICAgZnVuY3Rpb24gc2tpcHBlZChkYXRlKSB7XG4gICAgICAgIHJldHVybiAhaXNOYU4oZGF0ZSkgJiYgIWludGVydmFsLnJhbmdlKGRhdGUsIGQzX3RpbWVfc2NhbGVEYXRlKCtkYXRlICsgMSksIHNraXApLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzY2FsZS5kb21haW4oZDNfc2NhbGVfbmljZShkb21haW4sIHNraXAgPiAxID8ge1xuICAgICAgICBmbG9vcjogZnVuY3Rpb24oZGF0ZSkge1xuICAgICAgICAgIHdoaWxlIChza2lwcGVkKGRhdGUgPSBpbnRlcnZhbC5mbG9vcihkYXRlKSkpIGRhdGUgPSBkM190aW1lX3NjYWxlRGF0ZShkYXRlIC0gMSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICAgIH0sXG4gICAgICAgIGNlaWw6IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICAgICAgICB3aGlsZSAoc2tpcHBlZChkYXRlID0gaW50ZXJ2YWwuY2VpbChkYXRlKSkpIGRhdGUgPSBkM190aW1lX3NjYWxlRGF0ZSgrZGF0ZSArIDEpO1xuICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICB9XG4gICAgICB9IDogaW50ZXJ2YWwpKTtcbiAgICB9O1xuICAgIHNjYWxlLnRpY2tzID0gZnVuY3Rpb24oaW50ZXJ2YWwsIHNraXApIHtcbiAgICAgIHZhciBleHRlbnQgPSBkM19zY2FsZUV4dGVudChzY2FsZS5kb21haW4oKSksIG1ldGhvZCA9IGludGVydmFsID09IG51bGwgPyB0aWNrTWV0aG9kKGV4dGVudCwgMTApIDogdHlwZW9mIGludGVydmFsID09PSBcIm51bWJlclwiID8gdGlja01ldGhvZChleHRlbnQsIGludGVydmFsKSA6ICFpbnRlcnZhbC5yYW5nZSAmJiBbIHtcbiAgICAgICAgcmFuZ2U6IGludGVydmFsXG4gICAgICB9LCBza2lwIF07XG4gICAgICBpZiAobWV0aG9kKSBpbnRlcnZhbCA9IG1ldGhvZFswXSwgc2tpcCA9IG1ldGhvZFsxXTtcbiAgICAgIHJldHVybiBpbnRlcnZhbC5yYW5nZShleHRlbnRbMF0sIGQzX3RpbWVfc2NhbGVEYXRlKCtleHRlbnRbMV0gKyAxKSwgc2tpcCA8IDEgPyAxIDogc2tpcCk7XG4gICAgfTtcbiAgICBzY2FsZS50aWNrRm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZm9ybWF0O1xuICAgIH07XG4gICAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGQzX3RpbWVfc2NhbGUobGluZWFyLmNvcHkoKSwgbWV0aG9kcywgZm9ybWF0KTtcbiAgICB9O1xuICAgIHJldHVybiBkM19zY2FsZV9saW5lYXJSZWJpbmQoc2NhbGUsIGxpbmVhcik7XG4gIH1cbiAgZnVuY3Rpb24gZDNfdGltZV9zY2FsZURhdGUodCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0KTtcbiAgfVxuICB2YXIgZDNfdGltZV9zY2FsZVN0ZXBzID0gWyAxZTMsIDVlMywgMTVlMywgM2U0LCA2ZTQsIDNlNSwgOWU1LCAxOGU1LCAzNmU1LCAxMDhlNSwgMjE2ZTUsIDQzMmU1LCA4NjRlNSwgMTcyOGU1LCA2MDQ4ZTUsIDI1OTJlNiwgNzc3NmU2LCAzMTUzNmU2IF07XG4gIHZhciBkM190aW1lX3NjYWxlTG9jYWxNZXRob2RzID0gWyBbIGQzX3RpbWUuc2Vjb25kLCAxIF0sIFsgZDNfdGltZS5zZWNvbmQsIDUgXSwgWyBkM190aW1lLnNlY29uZCwgMTUgXSwgWyBkM190aW1lLnNlY29uZCwgMzAgXSwgWyBkM190aW1lLm1pbnV0ZSwgMSBdLCBbIGQzX3RpbWUubWludXRlLCA1IF0sIFsgZDNfdGltZS5taW51dGUsIDE1IF0sIFsgZDNfdGltZS5taW51dGUsIDMwIF0sIFsgZDNfdGltZS5ob3VyLCAxIF0sIFsgZDNfdGltZS5ob3VyLCAzIF0sIFsgZDNfdGltZS5ob3VyLCA2IF0sIFsgZDNfdGltZS5ob3VyLCAxMiBdLCBbIGQzX3RpbWUuZGF5LCAxIF0sIFsgZDNfdGltZS5kYXksIDIgXSwgWyBkM190aW1lLndlZWssIDEgXSwgWyBkM190aW1lLm1vbnRoLCAxIF0sIFsgZDNfdGltZS5tb250aCwgMyBdLCBbIGQzX3RpbWUueWVhciwgMSBdIF07XG4gIHZhciBkM190aW1lX3NjYWxlTG9jYWxGb3JtYXQgPSBkM190aW1lX2Zvcm1hdC5tdWx0aShbIFsgXCIuJUxcIiwgZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBkLmdldE1pbGxpc2Vjb25kcygpO1xuICB9IF0sIFsgXCI6JVNcIiwgZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBkLmdldFNlY29uZHMoKTtcbiAgfSBdLCBbIFwiJUk6JU1cIiwgZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBkLmdldE1pbnV0ZXMoKTtcbiAgfSBdLCBbIFwiJUkgJXBcIiwgZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBkLmdldEhvdXJzKCk7XG4gIH0gXSwgWyBcIiVhICVkXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gZC5nZXREYXkoKSAmJiBkLmdldERhdGUoKSAhPSAxO1xuICB9IF0sIFsgXCIlYiAlZFwiLCBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGQuZ2V0RGF0ZSgpICE9IDE7XG4gIH0gXSwgWyBcIiVCXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gZC5nZXRNb250aCgpO1xuICB9IF0sIFsgXCIlWVwiLCBkM190cnVlIF0gXSk7XG4gIHZhciBkM190aW1lX3NjYWxlTWlsbGlzZWNvbmRzID0ge1xuICAgIHJhbmdlOiBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgICAgcmV0dXJuIGQzLnJhbmdlKE1hdGguY2VpbChzdGFydCAvIHN0ZXApICogc3RlcCwgK3N0b3AsIHN0ZXApLm1hcChkM190aW1lX3NjYWxlRGF0ZSk7XG4gICAgfSxcbiAgICBmbG9vcjogZDNfaWRlbnRpdHksXG4gICAgY2VpbDogZDNfaWRlbnRpdHlcbiAgfTtcbiAgZDNfdGltZV9zY2FsZUxvY2FsTWV0aG9kcy55ZWFyID0gZDNfdGltZS55ZWFyO1xuICBkM190aW1lLnNjYWxlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGQzX3RpbWVfc2NhbGUoZDMuc2NhbGUubGluZWFyKCksIGQzX3RpbWVfc2NhbGVMb2NhbE1ldGhvZHMsIGQzX3RpbWVfc2NhbGVMb2NhbEZvcm1hdCk7XG4gIH07XG4gIHZhciBkM190aW1lX3NjYWxlVXRjTWV0aG9kcyA9IGQzX3RpbWVfc2NhbGVMb2NhbE1ldGhvZHMubWFwKGZ1bmN0aW9uKG0pIHtcbiAgICByZXR1cm4gWyBtWzBdLnV0YywgbVsxXSBdO1xuICB9KTtcbiAgdmFyIGQzX3RpbWVfc2NhbGVVdGNGb3JtYXQgPSBkM190aW1lX2Zvcm1hdFV0Yy5tdWx0aShbIFsgXCIuJUxcIiwgZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBkLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICB9IF0sIFsgXCI6JVNcIiwgZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBkLmdldFVUQ1NlY29uZHMoKTtcbiAgfSBdLCBbIFwiJUk6JU1cIiwgZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBkLmdldFVUQ01pbnV0ZXMoKTtcbiAgfSBdLCBbIFwiJUkgJXBcIiwgZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBkLmdldFVUQ0hvdXJzKCk7XG4gIH0gXSwgWyBcIiVhICVkXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gZC5nZXRVVENEYXkoKSAmJiBkLmdldFVUQ0RhdGUoKSAhPSAxO1xuICB9IF0sIFsgXCIlYiAlZFwiLCBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGQuZ2V0VVRDRGF0ZSgpICE9IDE7XG4gIH0gXSwgWyBcIiVCXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gZC5nZXRVVENNb250aCgpO1xuICB9IF0sIFsgXCIlWVwiLCBkM190cnVlIF0gXSk7XG4gIGQzX3RpbWVfc2NhbGVVdGNNZXRob2RzLnllYXIgPSBkM190aW1lLnllYXIudXRjO1xuICBkM190aW1lLnNjYWxlLnV0YyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkM190aW1lX3NjYWxlKGQzLnNjYWxlLmxpbmVhcigpLCBkM190aW1lX3NjYWxlVXRjTWV0aG9kcywgZDNfdGltZV9zY2FsZVV0Y0Zvcm1hdCk7XG4gIH07XG4gIGQzLnRleHQgPSBkM194aHJUeXBlKGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICByZXR1cm4gcmVxdWVzdC5yZXNwb25zZVRleHQ7XG4gIH0pO1xuICBkMy5qc29uID0gZnVuY3Rpb24odXJsLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBkM194aHIodXJsLCBcImFwcGxpY2F0aW9uL2pzb25cIiwgZDNfanNvbiwgY2FsbGJhY2spO1xuICB9O1xuICBmdW5jdGlvbiBkM19qc29uKHJlcXVlc3QpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gIH1cbiAgZDMuaHRtbCA9IGZ1bmN0aW9uKHVybCwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZDNfeGhyKHVybCwgXCJ0ZXh0L2h0bWxcIiwgZDNfaHRtbCwgY2FsbGJhY2spO1xuICB9O1xuICBmdW5jdGlvbiBkM19odG1sKHJlcXVlc3QpIHtcbiAgICB2YXIgcmFuZ2UgPSBkM19kb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHJhbmdlLnNlbGVjdE5vZGUoZDNfZG9jdW1lbnQuYm9keSk7XG4gICAgcmV0dXJuIHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gIH1cbiAgZDMueG1sID0gZDNfeGhyVHlwZShmdW5jdGlvbihyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHJlcXVlc3QucmVzcG9uc2VYTUw7XG4gIH0pO1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHRoaXMuZDMgPSBkMywgZGVmaW5lKGQzKTsgZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkMzsgZWxzZSB0aGlzLmQzID0gZDM7XG59KCk7IiwiLy8gQHRzLWlnbm9yZVxyXG5cclxuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7IFxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBNYXJpbWVra28obW9kLCBjb250ZXh0LCBkYXRhVmlldywgd2luZG93U2l6ZSwgc2hvd0JvcmRlcnMsIHNob3dMYWJlbHMpIHtcclxuICAgIC8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb25zICBcclxuICovXHJcbiAgICBmdW5jdGlvbiBpbnZlcnRIZXgoaGV4KSB7XHJcbiAgICAgICAgaGV4ID0gaGV4LnNsaWNlKDEsIGhleC5sZW5ndGgpXHJcbiAgICAgICAgLy9yZXR1cm4gXCIjXCIgKyAoTnVtYmVyKGAweDEke2hleH1gKSBeIDB4ZmZmZmZmKS50b1N0cmluZygxNikuc3Vic3RyKDEpLnRvVXBwZXJDYXNlKClcclxuICAgICAgICByZXR1cm4gY29udGV4dC5zdHlsaW5nLnNjYWxlcy5mb250LmNvbG9yXHJcbiAgICB9XHJcblxyXG4gICAgLy9oaWRlIGljb24gYnV0dG9uIHNldHRpbmdzIGlmIGluIHJlYWQgb25seVxyXG4gICAgZDMuc2VsZWN0KFwiLmljb24tYnV0dG9uLnNldHRpbmdzXCIpLmNsYXNzZWQoXCJ2aXNpYmxlXCIsIGNvbnRleHQuaXNFZGl0aW5nKVxyXG5cclxuXHJcbiAgICAvL3NldCBwb3B1cFxyXG4gICAgLy8xIHNob3cgYSBwb3B1cCB3aGVuIGNsaWNrZWRcclxuICAgIC8vMS4xIGNyZWF0ZSBwb3B1cCBjb250ZW50c1xyXG4gICAgY29uc3QgcG9wb3V0Q29udGVudCA9ICgpID0+IFtcclxuICAgICAgICBtb2QuY29udHJvbHMucG9wb3V0LnNlY3Rpb24oe1xyXG4gICAgICAgICAgICBoZWFkaW5nOiBcIk1hcmltZWtrbyBDaGFydCBPcHRpb25zXCIsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICBtb2QuY29udHJvbHMucG9wb3V0LmNvbXBvbmVudHMuY2hlY2tib3goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY2hrX3ZhbHVlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU2hvdyB2YWx1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgbW9kLmNvbnRyb2xzLnBvcG91dC5jb21wb25lbnRzLmNoZWNrYm94KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNoa19ib3JkZXJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTaG93IGJvcmRlcnNcIixcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBzaG93Qm9yZGVycy52YWx1ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KVxyXG4gICAgXTsgXHJcblxyXG5cclxuICAgIC8vc2hvdyBhIHJpZ2h0IGNsaWNrIG1lbnUgb24gbW9kXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldHRpbmdzXCIpLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIG1vZC5jb250cm9scy5jb250ZXh0TWVudS5zaG93KFxyXG4gICAgICAgICAgICBlLmNsaWVudFggLSAxMDAsIGUuY2xpZW50WSwgW1xyXG4gICAgICAgICAgICB7IHRleHQ6IFwiQm9yZGVyc1wiLCBlbmFibGVkOiB0cnVlLCBjaGVja2VkOiBzaG93Qm9yZGVycy52YWx1ZSgpIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogXCJMYWJlbHNcIiwgZW5hYmxlZDogdHJ1ZSwgY2hlY2tlZDogc2hvd0xhYmVscy52YWx1ZSgpIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICAgICkudGhlbihjbGlja2VkSXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjbGlja2VkSXRlbS50ZXh0ID09IFwiQm9yZGVyc1wiKSBzaG93Qm9yZGVycy5zZXQoIXNob3dCb3JkZXJzLnZhbHVlKCkpXHJcbiAgICAgICAgICAgIGlmIChjbGlja2VkSXRlbS50ZXh0ID09IFwiTGFiZWxzXCIpIHNob3dMYWJlbHMuc2V0KCFzaG93TGFiZWxzLnZhbHVlKCkpXHJcbiAgICAgICAgICAgIGRyYXdNZWtrbygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vcmVjcmVhdGUgZGVtbyBkYXRhIHdpdGggc3BvdGZpcmUgZGF0YSAgICAgXHJcbiAgICBsZXQgc3BvdGZpcmVEYXRhID0gW107XHJcbiAgICB0cnkge1xyXG4gICAgICAgIChhd2FpdCBkYXRhVmlldy5hbGxSb3dzKCkpLmZvckVhY2goKHIsIGkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGpzb25EYXRhID0ge307XHJcbiAgICAgICAgICAgIGpzb25EYXRhW1wibWFya2V0XCJdID0gci5jYXRlZ29yaWNhbChcIkNhdGVnb3J5XCIpLnZhbHVlKClbMF0ua2V5OztcclxuICAgICAgICAgICAganNvbkRhdGFbXCJzZWdtZW50XCJdID0gci5jYXRlZ29yaWNhbChcIlNlZ21lbnRcIikudmFsdWUoKVswXS5rZXk7XHJcbiAgICAgICAgICAgIGpzb25EYXRhW1wiY29sb3JcIl0gPSByLmNvbG9yKCkuaGV4Q29kZTtcclxuICAgICAgICAgICAganNvbkRhdGFbXCJ2YWx1ZVwiXSA9IHIuY29udGludW91cyhcIlZhbHVlXCIpLnZhbHVlKCk7XHJcbiAgICAgICAgICAgIGpzb25EYXRhW1wiaW5kZXhcIl0gPSBpO1xyXG5cclxuICAgICAgICAgICAgc3BvdGZpcmVEYXRhLnB1c2goanNvbkRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIG1vZC5jb250cm9scy5lcnJvck92ZXJsYXkuc2hvdyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHNwb3RmaXJlRGF0YVxyXG5cclxuICAgIC8vbWFyayBjYXRlZ29yaWVzIGFuZCBzZWdtZW50cyB3aXRoIHNoaWZ0K2NsaWNrIG9yIGFsdCtjbGlja1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gbWFya1JvdyhkLCBlKSB7XHJcbiAgICAgICAgaWYgKCFlLmN0cmxLZXkpIGRhdGFWaWV3LmNsZWFyTWFya2luZygpO1xyXG4gICAgICAgIChhd2FpdCBkYXRhVmlldy5hbGxSb3dzKCkpLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhQ2F0ZWdvcnkgPSByLmNhdGVnb3JpY2FsKFwiQ2F0ZWdvcnlcIikudmFsdWUoKVswXS5rZXlcclxuICAgICAgICAgICAgbGV0IGFTc2VnbWVudCA9IHIuY2F0ZWdvcmljYWwoXCJTZWdtZW50XCIpLnZhbHVlKClbMF0ua2V5XHJcbiAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5ICYmIGQubWFya2V0ID09IGFDYXRlZ29yeSkgeyByLm1hcmsoXCJUb2dnbGVcIikgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAoZS5hbHRLZXkgJiYgZC5zZWdtZW50ID09IGFTc2VnbWVudCkgeyByLm1hcmsoXCJUb2dnbGVcIikgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQubWFya2V0ID09IGFDYXRlZ29yeSAmJiBkLnNlZ21lbnQgPT0gYVNzZWdtZW50KSByLm1hcmsoXCJUb2dnbGVcIilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBkcmF3TWVra28oKSB7XHJcblxyXG4gICAgICAgIC8vY2xlYXIgbW9kIGNvbnRhaW5lciBjb250ZW50c1xyXG4gICAgICAgIGQzLnNlbGVjdChcIiNtb2QtY29udGFpbmVyXCIpLmh0bWwoXCJcIik7XHJcblxyXG5cclxuICAgICAgICB2YXIgd2lkdGggPSB3aW5kb3dTaXplLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQgPSB3aW5kb3dTaXplLmhlaWdodCxcclxuICAgICAgICAgICAgbWFyZ2luID0gMjA7XHJcblxyXG4gICAgICAgIHZhciB4ID0gZDMuc2NhbGUubGluZWFyKClcclxuICAgICAgICAgICAgLnJhbmdlKFswLCB3aWR0aCAtIDMgKiBtYXJnaW5dKTtcclxuXHJcbiAgICAgICAgdmFyIHkgPSBkMy5zY2FsZS5saW5lYXIoKVxyXG4gICAgICAgICAgICAucmFuZ2UoWzAsIGhlaWdodCAtIDIgKiBtYXJnaW5dKTtcclxuXHJcbiAgICAgICAgLy8gdmFyIHogPSBkMy5zY2FsZS5jYXRlZ29yeTEwKCk7XHJcblxyXG4gICAgICAgIHZhciBuID0gZDMuZm9ybWF0KFwiIywjXCIpLFxyXG4gICAgICAgICAgICBwID0gZDMuZm9ybWF0KFwiJVwiKTtcclxuXHJcblxyXG4gICAgICAgIHZhciBzdmcgPSBkMy5zZWxlY3QoXCIjbW9kLWNvbnRhaW5lclwiKS5hcHBlbmQoXCJzdmdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcclxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIDIgKiBtYXJnaW4gKyBcIixcIiArIG1hcmdpbiArIFwiKVwiKTtcclxuXHJcbiAgICAgICAgdmFyIG9mZnNldCA9IDA7XHJcblxyXG4gICAgICAgIC8vIE5lc3QgdmFsdWVzIGJ5IHNlZ21lbnQuIFdlIGFzc3VtZSBlYWNoIHNlZ21lbnQrbWFya2V0IGlzIHVuaXF1ZS5cclxuICAgICAgICB2YXIgc2VnbWVudHMgPSBkMy5uZXN0KClcclxuICAgICAgICAgICAgLmtleShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5zZWdtZW50OyB9KVxyXG4gICAgICAgICAgICAuZW50cmllcyhkYXRhKTtcclxuXHJcbiAgICAgICAgLy8gQ29tcHV0ZSB0aGUgdG90YWwgc3VtLCB0aGUgcGVyLXNlZ21lbnQgc3VtLCBhbmQgdGhlIHBlci1tYXJrZXQgb2Zmc2V0LlxyXG4gICAgICAgIC8vIFlvdSBjYW4gdXNlIHJlZHVjZSByYXRoZXIgdGhhbiByZWR1Y2VSaWdodCB0byByZXZlcnNlIHRoZSBvcmRlcmluZy5cclxuICAgICAgICAvLyBXZSBhbHNvIHJlY29yZCBhIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IHNlZ21lbnQgZm9yIGVhY2ggbWFya2V0LlxyXG4gICAgICAgIHZhciBzdW0gPSBzZWdtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKHYsIHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIChwLm9mZnNldCA9IHYpICsgKHAuc3VtID0gcC52YWx1ZXMucmVkdWNlUmlnaHQoZnVuY3Rpb24gKHYsIGQpIHtcclxuICAgICAgICAgICAgICAgIGQucGFyZW50ID0gcDtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoZC5vZmZzZXQgPSB2KSArIGQudmFsdWU7XHJcbiAgICAgICAgICAgIH0sIDApKTtcclxuICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIHgtYXhpcyB0aWNrcy5cclxuICAgICAgICB2YXIgeHRpY2sgPSBzdmcuc2VsZWN0QWxsKFwiLnhcIilcclxuICAgICAgICAgICAgLmRhdGEoeC50aWNrcygxMCkpXHJcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInhcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgeChkKSArIFwiLFwiICsgeSgxKSArIFwiKVwiOyB9KTtcclxuXHJcbiAgICAgICAgeHRpY2suYXBwZW5kKFwibGluZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInkyXCIsIDYpXHJcbiAgICAgICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBjb250ZXh0LnN0eWxpbmcuc2NhbGVzLmZvbnQuY29sb3IpO1xyXG5cclxuICAgICAgICB4dGljay5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCA4KVxyXG4gICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCIuNzFlbVwiKVxyXG4gICAgICAgICAgICAudGV4dChwKVxyXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgY29udGV4dC5zdHlsaW5nLnNjYWxlcy5mb250LmNvbG9yKVxyXG5cclxuICAgICAgICAvLyBBZGQgeS1heGlzIHRpY2tzLlxyXG4gICAgICAgIHZhciB5dGljayA9IHN2Zy5zZWxlY3RBbGwoXCIueVwiKVxyXG4gICAgICAgICAgICAuZGF0YSh5LnRpY2tzKDEwKSlcclxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIHkoMSAtIGQpICsgXCIpXCI7IH0pO1xyXG5cclxuICAgICAgICB5dGljay5hcHBlbmQoXCJsaW5lXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwieDFcIiwgLTYpXHJcbiAgICAgICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBjb250ZXh0LnN0eWxpbmcuc2NhbGVzLmZvbnQuY29sb3IpO1xyXG5cclxuICAgICAgICB5dGljay5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCAtOClcclxuICAgICAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImR5XCIsIFwiLjM1ZW1cIilcclxuICAgICAgICAgICAgLnRleHQocClcclxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGNvbnRleHQuc3R5bGluZy5zY2FsZXMuZm9udC5jb2xvcik7XHJcblxyXG4gICAgICAgIC8vIEFkZCBhIGdyb3VwIGZvciBlYWNoIHNlZ21lbnQuXHJcbiAgICAgICAgdmFyIHNlZ21lbnRzID0gc3ZnLnNlbGVjdEFsbChcIi5zZWdtZW50XCIpXHJcbiAgICAgICAgICAgIC5kYXRhKHNlZ21lbnRzKVxyXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJzZWdtZW50XCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBcInRyYW5zbGF0ZShcIiArIHgoZC5vZmZzZXQgLyBzdW0pICsgXCIpXCI7IH0pXHJcbiAgICAgICAgICAgIC5hdHRyKFwieGxpbms6dGl0bGVcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQua2V5OyB9KVxyXG4gICAgICAgICAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzY2xpY2tcIixkKSBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBhIHJlY3QgZm9yIGVhY2ggbWFya2V0LlxyXG4gICAgICAgIHZhciBtYXJrZXRzID0gc2VnbWVudHMuc2VsZWN0QWxsKFwiLm1hcmtldFwiKVxyXG4gICAgICAgICAgICAuZGF0YShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC52YWx1ZXM7IH0pXHJcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcImFcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1hcmtldFwiKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHkoZC5vZmZzZXQgLyBkLnBhcmVudC5zdW0pOyB9KVxyXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkLnZhbHVlIC8gZC5wYXJlbnQuc3VtKTsgfSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geChkLnBhcmVudC5zdW0gLyBzdW0pOyB9KVxyXG4gICAgICAgICAgICAub24oXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgICAgIG1hcmtSb3coZCwgZDMuZXZlbnQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICAgICAgbW9kLmNvbnRyb2xzLnRvb2x0aXAuc2hvdyhkLm1hcmtldCArIFwiIFwiICsgZC5wYXJlbnQua2V5ICsgXCI6IFwiICsgbihkLnZhbHVlKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIG1vZC5jb250cm9scy50b29sdGlwLmhpZGUpXHJcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuY29sb3I7IH0pO1xyXG5cclxuICAgICAgICAvL3Nob3cgbGFiZWxzXHJcbiAgICAgICAgaWYgKHNob3dMYWJlbHMudmFsdWUoKSkge1xyXG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubWFya2V0XCIpLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBkID0+IHtyZXR1cm4geShkLm9mZnNldCAvIGQucGFyZW50LnN1bSkgKyAoeShkLnZhbHVlIC8gZC5wYXJlbnQuc3VtKSkgLyAyIH0pXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgZCA9PiB7IHJldHVybiAoeChkLnBhcmVudC5zdW0gLyBzdW0pKSAvIDIgfSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCIuMzVlbVwiKVxyXG4gICAgICAgICAgICAgICAgLnRleHQoZCA9PiB7IHJldHVybiBuKGQudmFsdWUpIH0pIFxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnN0eWxpbmcuc2NhbGVzLmZvbnQuY29sb3JcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3Nob3cgYm9yZGVyc1xyXG4gICAgICAgIGQzLnNlbGVjdEFsbChcIi5tYXJrZXQgcmVjdFwiKS5hdHRyKFwic3Ryb2tlXCIsIGQgPT4geyByZXR1cm4gc2hvd0JvcmRlcnMudmFsdWUoKSA/IGludmVydEhleChkLmNvbG9yKSA6IFwibm9uZVwiIH0pXHJcblxyXG4gICAgfVxyXG4gICAgZHJhd01la2tvKCk7XHJcblxyXG59ICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxuICogQ29weXJpZ2h0IMKpIDIwMjAuIFRJQkNPIFNvZnR3YXJlIEluYy5cbiAqIFRoaXMgZmlsZSBpcyBzdWJqZWN0IHRvIHRoZSBsaWNlbnNlIHRlcm1zIGNvbnRhaW5lZFxuICogaW4gdGhlIGxpY2Vuc2UgZmlsZSB0aGF0IGlzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLlxuICovXG5cbmltcG9ydCB7TWFyaW1la2tvfSBmcm9tIFwiLi9NYXJpbWVra29cIlxuXG4vL0B0cy1jaGVjayAtIEdldCB0eXBlIHdhcm5pbmdzIGZyb20gdGhlIFR5cGVTY3JpcHQgbGFuZ3VhZ2Ugc2VydmVyLiBSZW1vdmUgaWYgbm90IHdhbnRlZC5cblxuLyoqXG4gKiBHZXQgYWNjZXNzIHRvIHRoZSBTcG90ZmlyZSBNb2QgQVBJIGJ5IHByb3ZpZGluZyBhIGNhbGxiYWNrIHRvIHRoZSBpbml0aWFsaXplIG1ldGhvZC5cbiAqIEBwYXJhbSB7U3BvdGZpcmUuTW9kfSBtb2QgLSBtb2QgYXBpXG4gKi9cbiBTcG90ZmlyZS5pbml0aWFsaXplKGFzeW5jIChtb2QpID0+IHtcblxuICAgIGNvbnN0IHJlYWRlciA9IG1vZC5jcmVhdGVSZWFkZXIobW9kLnZpc3VhbGl6YXRpb24uZGF0YSgpLCBtb2Qud2luZG93U2l6ZSgpLCBtb2QucHJvcGVydHkoXCJzaG93Qm9yZGVyc1wiKSwgbW9kLnByb3BlcnR5KFwic2hvd0xhYmVsc1wiKSk7XG4gICAgY29uc3QgY29udGV4dCA9IG1vZC5nZXRSZW5kZXJDb250ZXh0KCk7XG4gICAgcmVhZGVyLnN1YnNjcmliZShyZW5kZXIpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVuZGVyKGRhdGFWaWV3LCB3aW5kb3dTaXplLCBzaG93Qm9yZGVycywgc2hvd0xhYmVscykge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgdGhlIGRhdGEgdmlldyBmb3IgZXJyb3JzXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgZXJyb3JzID0gYXdhaXQgZGF0YVZpZXcuZ2V0RXJyb3JzKCk7XG4gICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gU2hvd2luZyBhbiBlcnJvciBvdmVybGF5IHdpbGwgaGlkZSB0aGUgbW9kIGlmcmFtZS5cbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBtb2QgY29udGVudCBoZXJlIHRvIGF2b2lkIGZsaWNrZXJpbmcgZWZmZWN0IG9mXG4gICAgICAgICAgICAvLyBhbiBvbGQgY29uZmlndXJhdGlvbiB3aGVuIG5leHQgdmFsaWQgZGF0YSB2aWV3IGlzIHJlY2VpdmVkLlxuICAgICAgICAgICAgbW9kLmNvbnRyb2xzLmVycm9yT3ZlcmxheS5zaG93KGVycm9ycyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbW9kLmNvbnRyb2xzLmVycm9yT3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgTWFyaW1la2tvKG1vZCxjb250ZXh0LCBkYXRhVmlldywgd2luZG93U2l6ZSwgc2hvd0JvcmRlcnMsIHNob3dMYWJlbHMpXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaWduYWwgdGhhdCB0aGUgbW9kIGlzIHJlYWR5IGZvciBleHBvcnQuXG4gICAgICAgICAqL1xuICAgICAgICBjb250ZXh0LnNpZ25hbFJlbmRlckNvbXBsZXRlKCk7XG4gICAgfVxufSk7XG4gIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9