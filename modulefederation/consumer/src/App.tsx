import "./App.css";
import { Suspense, lazy, useEffect } from "react";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { init, loadShareSync } from "@module-federation/enhanced/runtime";
import Button from "federation_provider/button";
import Main from "federation_provider";

const federationHost = init({
  name: "myApp",
  remotes: [
    {
      name: "fedcon",
      // mf-manifest.json is a file type generated in the new version of Module Federation build tools, providing richer functionality compared to remoteEntry
      // Preloading depends on the use of the mf-manifest.json file type
      entry: "http://localhost:3000/mf-manifest.json",
    },
  ],
  shared: {
    react: {
      version: "17.0.3",
      scope: "default",
      lib: () => React,
      shareConfig: {
        singleton: true,
        requiredVersion: "^17.0.0",
        eager: true,
      },
    },
    "react-dom": {
      version: "17.0.3",
      scope: "default",
      lib: () => ReactDOM,
      shareConfig: {
        singleton: true,
        requiredVersion: "^17.0.0",
        eager: true,
      },
    },
  },
});

const Placeholder = () => <div>Placeholder</div>;

// Load using alias
export const RuntimeTest = React.lazy(() =>
  federationHost
    .loadRemote<{
      default: React.ComponentType<any>;
    }>("fedcon")
    .then((md) => ({ default: md?.default ?? Placeholder }))
);

const App = () => {
  useEffect(() => {
    console.log("load App");
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RuntimeTest />
      {/* <Button />
      <Main /> */}
    </Suspense>
  );
};

export default App;
