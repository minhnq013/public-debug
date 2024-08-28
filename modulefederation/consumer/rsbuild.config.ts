// rsbuild.config.ts
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  server: {
    port: 2000,
  },
  plugins: [pluginReact()],
  // tools: {
  //   rspack: {
  //     plugins: [
  //       new ModuleFederationPlugin({
  //         name: "federation_consumer",
  //         remotes: {
  //           // The name before url doesn't really matter it seems.
  //           federation_provider: "test@http://localhost:3000/mf-manifest.json",
  //         },
  //         shared: ["react", "react-dom"],
  //       }),
  //     ],
  //   },
  // },
});
