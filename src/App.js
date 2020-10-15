import React from 'react';
import ChatBot from 'react-chatbot-kit';
import bg from './app/assets/Maah_1.png'
import config from './app/config/config';
import ActionProvider from './app/actionProvider/ActionProvider';
import MessageParser from './app/messageParser/MessageParser';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundImage:`url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
        <ChatBot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </header>
    </div>
  );
}

export default App;
