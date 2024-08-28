import { useEffect } from "react";

const Button = () => {
  useEffect(() => {
    console.log("load Button");
  }, []);
  return <div>My button</div>;
};
export default Button;
