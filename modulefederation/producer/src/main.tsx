import { useEffect } from "react";
import * as ReactM from "react";

console.log("module", ReactM);

export default () => {
  useEffect(() => {
    console.log("render main");
  }, []);
  return <div>Main</div>;
};
