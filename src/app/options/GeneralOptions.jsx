import React from "react";
import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Liste des wifis",
      handler: props.actionProvider.handleWifiList,
      id: 1,
    },
    {
      name: "Configuration",
      handler: props.actionProvider.handleConfig,
      id: 2,
    },
  ];

  return <Options options={options} />;
};

export default GeneralOptions;
