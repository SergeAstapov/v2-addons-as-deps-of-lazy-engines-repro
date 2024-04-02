define("test-lazy-engine/components/dummy-component", ["exports", "v2-addon/components/dummy-component"], function (_exports, _dummyComponent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"v2-addon/components/dummy-component"eaimeta@70e063a35619d71f
  var _default = _exports.default = _dummyComponent.default;
});
define("test-lazy-engine/config/environment", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
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
  0; //eaimeta@70e063a35619d71f0,"@ember/engine",0,"ember-load-initializers",0,"ember-resolver",0,"test-lazy-engine/config/environment"eaimeta@70e063a35619d71f
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
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    Hi from lazy loaded engine.
  
  <DummyComponent />
  
  {{outlet}}
  
  */
  {
    "id": "TE5eUHHK",
    "block": "[[[1,\"Hi from lazy loaded engine.\\n\\n\"],[8,[39,0],null,null,null],[1,\"\\n\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\"]],[],false,[\"dummy-component\",\"component\",\"-outlet\"]]",
    "moduleName": "test-lazy-engine/templates/application.hbs",
    "isStrictMode": false
  });
});