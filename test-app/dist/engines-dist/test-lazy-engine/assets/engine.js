define("test-lazy-engine/config/environment", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var config;
  try {
    var metaName = 'test-lazy-engine/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }
  var _default = _exports.default = config;
});
define("test-lazy-engine/engine", ["exports", "@ember/engine", "ember-load-initializers", "ember-resolver", "test-lazy-engine/config/environment"], function (_exports, _engine, _emberLoadInitializers, _emberResolver, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  const {
    modulePrefix
  } = _environment.default;
  class YourEngine extends _engine.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", modulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = YourEngine;
  (0, _emberLoadInitializers.default)(YourEngine, modulePrefix);
});
define("test-lazy-engine/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    Hi from lazy loaded engine.
  
  {{outlet}}
  
  */
  {
    "id": "oJ85Fw5v",
    "block": "[[[1,\"Hi from lazy loaded engine.\\n\\n\"],[46,[28,[37,1],null,null],null,null,null],[1,\"\\n\"]],[],false,[\"component\",\"-outlet\"]]",
    "moduleName": "test-lazy-engine/templates/application.hbs",
    "isStrictMode": false
  });
});