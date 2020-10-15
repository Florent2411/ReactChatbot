import React from "react";
import Options from "./Options";

const WifiOptions = (props) => {
    const options = [
        {
            name: "Belgrace",
            handler: props.actionProvider.handleWifiBelgrace,
            id: 1,
        },
        {
            name: "Research Center",
            handler: props.actionProvider.handleWifiRC,
            id: 2,
        },
        {
            name: "SF-Modem",
            handler: props.actionProvider.handleWifiSM,
            id: 3,
        },
    ];

    return <Options options={options} />;
};

export default WifiOptions;
