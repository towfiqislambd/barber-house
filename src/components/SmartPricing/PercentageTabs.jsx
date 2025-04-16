import { useState } from "react";
import { Segmented } from "antd";
import { BigPercentageSvg, CoinSvgSvg } from "../svgContainer/SvgContainer";

const PercentageTabs = () => {
  const [alignValue, setAlignValue] = useState("option1");
  return (
    <div>
      <Segmented
        value={alignValue}
        style={{
          // marginBottom: 8,
          height: "56px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
        onChange={setAlignValue}
        options={[
          { label: <CoinSvgSvg />, value: "option1" },
          { label: <BigPercentageSvg />, value: "option2" },
        ]}
      />
    </div>
  );
};

export default PercentageTabs;
