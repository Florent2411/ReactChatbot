// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message)
    const lowercase = message.toLowerCase()
    
    if(lowercase.includes('liste des wifis')) {
        this.actionProvider.greet()
    }
  }
}

export default MessageParser;