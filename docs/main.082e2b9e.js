// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"HJDO":[function(require,module,exports) {
// JavaScript functions from original HTML
var frameworks = ['React', 'Vue.js', 'Angular', 'Svelte', 'Solid', 'Alpine.js', 'Lit', 'Preact', 'Qwik', 'SvelteKit', 'Next.js', 'Nuxt.js'];
function filterFrameworks(value) {
  var results = document.getElementById('js-results');
  if (!value) {
    results.style.display = 'none';
    return;
  }
  var filtered = frameworks.filter(function (fw) {
    return fw.toLowerCase().includes(value.toLowerCase());
  });
  results.innerHTML = filtered.map(function (fw) {
    return "<div style=\"padding:8px; cursor:pointer;\" onclick=\"selectFramework('".concat(fw, "')\">").concat(fw, "</div>");
  }).join('');
  results.style.display = filtered.length ? 'block' : 'none';
}
function selectFramework(fw) {
  document.getElementById('js-search').value = fw;
  document.getElementById('js-results').style.display = 'none';
}
function startNativeProgress() {
  var progress = document.getElementById('nativeProgress');
  var text = document.getElementById('nativeProgressText');
  var value = 0;
  var interval = setInterval(function () {
    value += Math.random() * 15;
    if (value >= 100) {
      value = 100;
      clearInterval(interval);
    }
    progress.value = value;
    text.textContent = Math.round(value) + '%';
  }, 200);
}
function toggleContent(id) {
  document.getElementById(id).classList.toggle("active");
}
function openJSModal() {
  document.getElementById('jsModal').style.display = 'flex';
}
function closeJSModal() {
  document.getElementById('jsModal').style.display = 'none';
}
function validateJSForm(event) {
  event.preventDefault();
  alert('Custom validation would run here');
  return false;
}
function startJSProgress() {
  var bar = document.getElementById('jsProgress');
  var text = document.getElementById('jsProgressText');
  var width = 0;
  var interval = setInterval(function () {
    width += Math.random() * 15;
    if (width >= 100) {
      width = 100;
      clearInterval(interval);
    }
    bar.style.width = width + '%';
    text.textContent = Math.round(width) + '%';
  }, 200);
}
function openDatePicker() {
  var picker = document.getElementById('datePicker');
  picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
}
},{}]},{},["HJDO"], null)
//# sourceMappingURL=/html-over-js/main.082e2b9e.js.map