System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel@4.7.16",
    "babel-runtime": "npm:babel-runtime@4.7.16",
    "diff-dom": "npm:diff-dom@1.0.0",
    "html-to-vdom": "npm:html-to-vdom@0.5.5",
    "lodash": "npm:lodash@3.6.0",
    "virtual-dom": "npm:virtual-dom@2.0.1",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.1.2"
    },
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@4.7.16": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.1.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.4",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:dom-serializer@0.1.0": {
      "domelementtype": "npm:domelementtype@1.1.3",
      "entities": "npm:entities@1.1.1"
    },
    "npm:domhandler@2.3.0": {
      "domelementtype": "npm:domelementtype@1.1.3"
    },
    "npm:domutils@1.5.1": {
      "dom-serializer": "npm:dom-serializer@0.1.0",
      "domelementtype": "npm:domelementtype@1.1.3"
    },
    "npm:ent@2.2.0": {
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:entities@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:entities@1.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:error@4.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelize": "npm:camelize@1.0.0",
      "string-template": "npm:string-template@0.2.0",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:ev-store@7.0.0": {
      "individual": "npm:individual@3.0.0"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:global@4.3.0": {
      "min-document": "npm:min-document@2.14.0",
      "process": "npm:process@0.5.2"
    },
    "npm:html-to-vdom@0.5.5": {
      "ent": "npm:ent@2.2.0",
      "htmlparser2": "npm:htmlparser2@3.8.2"
    },
    "npm:htmlparser2@3.8.2": {
      "domelementtype": "npm:domelementtype@1.1.3",
      "domhandler": "npm:domhandler@2.3.0",
      "domutils": "npm:domutils@1.5.1",
      "entities": "npm:entities@1.0.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash@3.6.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:min-document@2.14.0": {
      "dom-walk": "npm:dom-walk@0.1.1"
    },
    "npm:next-tick@0.2.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string-template@0.2.0": {
      "js-string-escape": "npm:js-string-escape@1.0.0"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:virtual-dom@2.0.1": {
      "browser-split": "npm:browser-split@0.0.1",
      "error": "npm:error@4.4.0",
      "ev-store": "npm:ev-store@7.0.0",
      "global": "npm:global@4.3.0",
      "is-object": "npm:is-object@1.0.1",
      "next-tick": "npm:next-tick@0.2.2",
      "x-is-array": "npm:x-is-array@0.1.0",
      "x-is-string": "npm:x-is-string@0.1.0"
    }
  }
});

