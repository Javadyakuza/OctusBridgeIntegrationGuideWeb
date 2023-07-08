import {
  require_fs,
  require_path
} from "./chunk-4YDDAD4M.js";
import {
  __commonJS,
  __toESM
} from "./chunk-QY3AG7D4.js";

// browser-external:module
var require_module = __commonJS({
  "browser-external:module"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "module" has been externalized for browser compatibility. Cannot access "module.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/vite-plugin-wasm/dist/wasm-helper.js
var require_wasm_helper = __commonJS({
  "node_modules/vite-plugin-wasm/dist/wasm-helper.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.code = exports.id = void 0;
    exports.id = "/__vite-plugin-wasm-helper";
    var wasmHelper = async (opts = {}, url) => {
      let result;
      if (url.startsWith("data:")) {
        const urlContent = url.replace(/^data:.*?base64,/, "");
        let bytes;
        if (typeof Buffer === "function" && typeof Buffer.from === "function") {
          bytes = Buffer.from(urlContent, "base64");
        } else if (typeof atob === "function") {
          const binaryString = atob(urlContent);
          bytes = new Uint8Array(binaryString.length);
          for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
        } else {
          throw new Error("Cannot decode base64-encoded data URL");
        }
        result = await WebAssembly.instantiate(bytes, opts);
      } else {
        const response = await fetch(url);
        const contentType = response.headers.get("Content-Type") || "";
        if ("instantiateStreaming" in WebAssembly && contentType.startsWith("application/wasm")) {
          result = await WebAssembly.instantiateStreaming(response, opts);
        } else {
          const buffer = await response.arrayBuffer();
          result = await WebAssembly.instantiate(buffer, opts);
        }
      }
      return result.instance.exports;
    };
    exports.code = wasmHelper.toString();
  }
});

// node_modules/vite-plugin-wasm/dist/wasm-parser.js
var require_wasm_parser = __commonJS({
  "node_modules/vite-plugin-wasm/dist/wasm-parser.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generateGlueCode = exports.parseWasm = void 0;
    var fs_1 = __importDefault(require_fs());
    async function parseWasm(wasmFilePath) {
      try {
        const wasmBinary = await fs_1.default.promises.readFile(wasmFilePath);
        const wasmModule = await WebAssembly.compile(wasmBinary);
        const imports = Object.entries(WebAssembly.Module.imports(wasmModule).reduce((result, item) => ({
          ...result,
          [item.module]: [...result[item.module] || [], item.name]
        }), {})).map(([from, names]) => ({ from, names }));
        const exports2 = WebAssembly.Module.exports(wasmModule).map((item) => item.name);
        return { imports, exports: exports2 };
      } catch (e) {
        throw new Error(`Failed to parse WASM file: ${e.message}`);
      }
    }
    exports.parseWasm = parseWasm;
    async function generateGlueCode(wasmFilePath, names) {
      const { imports, exports: exports2 } = await parseWasm(wasmFilePath);
      return `
${imports.map(({ from, names: names2 }, i) => `import { ${names2.map((name, j) => `${name} as __vite__wasmImport_${i}_${j}`).join(", ")} } from ${JSON.stringify(from)};`).join("\n")}
const __vite__wasmModule = await ${names.initWasm}({ ${imports.map(({ from, names: names2 }, i) => `${JSON.stringify(from)}: { ${names2.map((name, j) => `${name}: __vite__wasmImport_${i}_${j}`).join(", ")} }`).join(", ")} }, ${names.wasmUrl});
${exports2.map((name) => `export ${name === "default" ? "default" : `const ${name} =`} __vite__wasmModule.${name};`).join("\n")}`;
    }
    exports.generateGlueCode = generateGlueCode;
  }
});

// node_modules/vite-plugin-wasm/dist/util.js
var require_util = __commonJS({
  "node_modules/vite-plugin-wasm/dist/util.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createBase64UriForWasm = void 0;
    var fs_1 = __importDefault(require_fs());
    async function createBase64UriForWasm(filePath) {
      const base64 = await fs_1.default.promises.readFile(filePath, "base64");
      return "data:application/wasm;base64," + base64;
    }
    exports.createBase64UriForWasm = createBase64UriForWasm;
  }
});

// node_modules/vite-plugin-wasm/dist/esbuild-plugin.js
var require_esbuild_plugin = __commonJS({
  "node_modules/vite-plugin-wasm/dist/esbuild-plugin.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m2, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m2, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m2[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esbuildPlugin = void 0;
    var path_1 = __importDefault(require_path());
    var module_1 = require_module();
    var wasmHelper = __importStar(require_wasm_helper());
    var wasm_parser_1 = require_wasm_parser();
    var util_1 = require_util();
    function esbuildPlugin() {
      return {
        name: "vite-plugin-wasm",
        setup(build) {
          const NAMESPACE = "vite-plugin-wasm-namespace";
          build.onResolve({ filter: /\.wasm$/ }, (args) => ({
            path: (0, module_1.createRequire)(args.importer).resolve(args.path),
            namespace: NAMESPACE
          }));
          build.onLoad({ filter: /.*/, namespace: NAMESPACE }, async (args) => {
            const dataUri = await (0, util_1.createBase64UriForWasm)(args.path);
            return {
              contents: `
const wasmUrl = "${dataUri}";
const initWasm = ${wasmHelper.code};
${await (0, wasm_parser_1.generateGlueCode)(args.path, { initWasm: "initWasm", wasmUrl: "wasmUrl" })}
`,
              loader: "js",
              resolveDir: path_1.default.dirname(args.path)
            };
          });
        }
      };
    }
    exports.esbuildPlugin = esbuildPlugin;
  }
});

// node_modules/vite-plugin-wasm/dist/index.js
var require_dist = __commonJS({
  "node_modules/vite-plugin-wasm/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m2, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m2, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m2[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var esbuild_plugin_1 = require_esbuild_plugin();
    var wasm_parser_1 = require_wasm_parser();
    var wasmHelper = __importStar(require_wasm_helper());
    var util_1 = require_util();
    function wasm() {
      let runningInVitest = false;
      return {
        name: "vite-plugin-wasm",
        enforce: "pre",
        configResolved(config) {
          var _a;
          runningInVitest = config.plugins.some((plugin) => plugin.name === "vitest");
          if ((_a = config.optimizeDeps) == null ? void 0 : _a.esbuildOptions) {
            if (!config.optimizeDeps.esbuildOptions.plugins) {
              config.optimizeDeps.esbuildOptions.plugins = [];
            }
            config.optimizeDeps.esbuildOptions.plugins.push((0, esbuild_plugin_1.esbuildPlugin)());
            config.optimizeDeps.esbuildOptions.target = "esnext";
          }
        },
        resolveId(id) {
          if (id === wasmHelper.id) {
            return id;
          }
        },
        async load(id, options) {
          if (id === wasmHelper.id) {
            return `export default ${wasmHelper.code}`;
          }
          if (!id.toLowerCase().endsWith(".wasm")) {
            return;
          }
          const wasmUrlUrl = id + "?url";
          const wasmUrlDeclaration = (options == null ? void 0 : options.ssr) || runningInVitest ? `const __vite__wasmUrl = ${JSON.stringify(await (0, util_1.createBase64UriForWasm)(id))}` : `import __vite__wasmUrl from ${JSON.stringify(wasmUrlUrl)}`;
          return `
URL = globalThis.URL
${wasmUrlDeclaration}
import __vite__initWasm from "${wasmHelper.id}"
${await (0, wasm_parser_1.generateGlueCode)(id, { initWasm: "__vite__initWasm", wasmUrl: "__vite__wasmUrl" })}
`;
        }
      };
    }
    exports.default = wasm;
  }
});

// node_modules/vite-plugin-wasm/exports/import.mjs
var import_dist = __toESM(require_dist(), 1);
var import_default = import_dist.default.default;
export {
  import_default as default
};
//# sourceMappingURL=vite-plugin-wasm.js.map
