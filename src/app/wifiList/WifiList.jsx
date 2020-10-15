import React from "react";
import WifiOptions from "../options/WifiOptions";

const WifiList = (props) => {
  return (
    <div>
      <WifiOptions actionProvider={props.actionProvider} /> 
    </div>
  );
};

export default WifiList;
