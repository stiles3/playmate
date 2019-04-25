import React, { Component } from 'react'

export default class MessageInput extends Component {
  constructor(props){
     super(props)
     this.state = {
       message:"",
       isTyping:false
     };
  }

  handleSubmit = (e) =>{
      e.preventDefault()
      this.sendMessage()
      this.setState({message:""})
  }

  sendMessage = () => {
    this.props.sendMessage(this.state.message)
  }

  componentWillUnmount(){
    this.stopCheckingTyping()
  }
  sendTyping = () => {
     this.lastUpdateTime = Date.now()
     if(!this.state.isTyping){
       this.setState({isTyping:true})
       this.props.sendTyping(true)
       this.startCheckingTyping()
     }
  }

  startCheckingTyping = () => {
    console.log("Typing");
    this.typingInterval = setInterval(() =>{
      if((Date.now() - this.lastUpdateTime) > 300)  {
        this.setState({isTyping:false})
        this.stopCheckingTyping()
      }
    },300)
  }

  stopCheckingTyping = () =>{
    console.log("Stop Typing")
    if(this.typingInterval){
        clearInterval(this.typingInterval)
        this.props.sendTyping(false)
    }
  }
  render() {
    const {message} = this.state
    return (
      <div className="message-input">
         <form 
             onSubmit = {this.handleSubmit}
             className="message-form">

        <input
       //     style={{backgroundColor:"transparent",borderRadius:25,width:650,height:50,outline:"none",borderColor:"#e91e63"}}
            
            id="message"
            ref={"messageinput"} 
            type="text"
            className="form-control"
            value = {message}
            autoComplete={'off'}
            placeholder="Type a message"
            onKeyUp={e => {e.keyCode !== 13 && this.sendTyping()}}
            onChange = {
              ({target}) =>{
                  this.setState({message:target.value})
   }
  }
            /> 
            <button
          //     style={{backgroundColor:"transparent",width:100,height:50,borderRadius:30,outline:"none",borderColor:"#e91e63"}}
               disabled = {message.length < 1}
               type = "submit"
               className = "send"
            >
            Send
            </button>   
        </form>
      </div>
    )
  }
}
