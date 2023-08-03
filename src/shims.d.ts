declare module "*.vue" {
  import type { ComponentOptions } from "vue";
  const Component: ComponentOptions;
  export default Component;
}

declare module "*.md" {
  import type { ComponentOptions } from "vue";
  const Component: ComponentOptions;
  export default Component;
}

declare module "*.wasm" {
  function initWasm(
    options: WebAssembly.Imports,
    getInstance: true
  ): Promise<WebAssembly.Instance>;
  function initWasm(
    options: WebAssembly.Imports,
    getInstance: false
  ): Promise<WebAssembly.Exports>; // added
  function initWasm(options: WebAssembly.Imports): Promise<WebAssembly.Exports>;

  export default initWasm;
}

declare module "vue-toastification/dist/index.mjs" {
  export * from "vue-toastification";
}
