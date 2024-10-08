import { Suspense, lazy, useEffect } from "react";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { init } from "@module-federation/enhanced/runtime";
// import Button from "federation_provider/button";
// import Main from "federation_provider";

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
    react: React,
    "react-dom": ReactDOM,
  },
});

const Placeholder = () => <div>Placeholder</div>;

// Load using alias
export const RuntimeTest = React.lazy(() =>
  federationHost
    .loadRemote<{
      default: React.ComponentType<any>;
    }>("fedcon/main")
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
