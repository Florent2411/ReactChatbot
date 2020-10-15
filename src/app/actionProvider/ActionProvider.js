// ActionProvider starter code

import { createChatBotMessage } from "react-chatbot-kit";

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    greet = () => {
        const message = this.createChatBotMessage('Liste');
        this.addMessageToState(message)
    }

    addMessageToState = (message) => {
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message],
        })
        )
    }

    handleWifiList = () => {
        const message = this.createChatBotMessage(
            "Liste des wifis disponibles. Cliquez sur un bouton pour en connaitre les détails.",
            {
                widget: "wifiList",
                loading: true,
                terminateLoading: true,
                withAvatar: true,
            }
        );

        this.addMessageToState(message);
    };

    handleWifiBelgrace = () => {
        const message = 
            this.createChatBotMessage(
                "Wifi Belgrace",
            )
        this.addMessageToState(message);

        const message1 = 
            this.createChatBotMessage(
                "SSID : Belgrace",
                {
                    key: 2,
                    loading: true,
                    delay: 1000,
                    terminateLoading: true,
                }
            )
        this.addMessageToState(message1);

        const message2 = 
            this.createChatBotMessage(
                "Mot De Passe : Ornella20",
                {
                    key: 3,
                    loading: true,
                    delay: 1000,
                    terminateLoading: true,
                    widget: 'overview'
                }
            )
        this.addMessageToState(message2);
    };

    handleWifiRC = () => {
        const message = 
            this.createChatBotMessage(
                "Wifi Resarch Center",
            )
        this.addMessageToState(message);

        const message1 = 
            this.createChatBotMessage(
                "SSID : Research Center",
                {
                    key: 4,
                    loading: true,
                    delay: 1000,
                    terminateLoading: true,
                }
            )
        this.addMessageToState(message1);

        const message2 = 
            this.createChatBotMessage(
                "Mot De Passe : RCenter2017",
                {
                    key: 5,
                    loading: true,
                    delay: 1000,
                    terminateLoading: true,
                    widget: 'overview'
                }
            )
        this.addMessageToState(message2);
    };

    handleWifiSM = () => {
        const message = 
            this.createChatBotMessage(
                "Wifi SF-Modem",
            )
        this.addMessageToState(message);

        const message1 = 
            this.createChatBotMessage(
                "SSID : SF-Modem",
                {
                    key: 6,
                    loading: true,
                    delay: 1000,
                    terminateLoading: true,
                }
            )
        this.addMessageToState(message1);

        const message2 = 
            this.createChatBotMessage(
                "Mot De Passe : SM0123456",
                {
                    key: 7,
                    loading: true,
                    delay: 1000,
                    terminateLoading: true,
                    widget: 'overview'
                }
            )
        this.addMessageToState(message2);
    };
}

export default ActionProvider;