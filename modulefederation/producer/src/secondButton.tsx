import VChart from "@visactor/vchart";
import { useEffect, useMemo, useRef } from "react";

const Button = () => {
  const ref = useRef<HTMLDivElement>(null);
  const spec = useMemo(
    () => ({
      type: "line",
      data: {
        values: [
          {
            time: "2:00",
            value: 8,
          },
          {
            time: "4:00",
            value: 9,
          },
          {
            time: "6:00",
            value: 11,
          },
          {
            time: "8:00",
            value: 14,
          },
          {
            time: "10:00",
            value: 16,
          },
          {
            time: "12:00",
            value: 17,
          },
          {
            time: "14:00",
            value: 17,
          },
          {
            time: "16:00",
            value: 16,
          },
          {
            time: "18:00",
            value: 15,
          },
        ],
      },
      xField: "time",
      yField: "value",
    }),
    []
  );

  useEffect(() => {
    console.log("render line", ref.current);
    if (ref.current) {
      const vchart = new VChart(spec, { dom: ref.current });
      vchart.renderSync();
    }
  }, [spec]);
  return (
    <div style={{ width: "500px", height: "500px" }} ref={ref}>
      My 2 button
    </div>
  );
};
export default Button;
