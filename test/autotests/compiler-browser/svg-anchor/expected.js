"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/compiler-browser/svg-anchor/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("5e5668"),
    marko_node0 = marko_createElement("svg", {
        width: "140",
        height: "30"
      }, "0", null, 1, 1, {
        i: marko_const_nextId()
      })
      .e("a", {
          "xlink:href": "https://developer.mozilla.org/en-US/docs/SVG",
          target: "_blank"
        }, "1", null, 0, 1);

function render(input, out, __component, component, state) {
  var data = input;

  out.n(marko_node0, component);
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
