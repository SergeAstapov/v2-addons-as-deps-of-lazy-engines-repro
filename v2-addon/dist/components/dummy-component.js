import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("Hi from Dummy Component!\n");

var dummyComponent = setComponentTemplate(TEMPLATE, templateOnly());

export { dummyComponent as default };
//# sourceMappingURL=dummy-component.js.map
