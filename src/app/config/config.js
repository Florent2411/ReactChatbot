
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "../overview/Overview";
import WifiList from "../wifiList/WifiList";

const botName = "WifiBot";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hey, je suis ${botName}. Je suis ici pour vous expliquer comment je fonctionne.`
    ),
    createChatBotMessage(
      "Voici un bref menu sur ce dont j'ai connaissance. Interrogez-moi sur les différentes parties pour approfondir.",
      {
        withAvatar: false,
        delay: 1000,
        widget: "overview",
      }
    ),
  ],
  state: {
    gist: "",
  },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["gist"],
      props: {} 
    },
    {
      widgetName: "wifiList",
      widgetFunc: (props) => <WifiList {...props} />,
      //mapStateToProps: ["gist"],
      //props: {} 
    }
  ],
};

export default config;
