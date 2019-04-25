import React, { Component } from 'react'
import {VERIFY_USER} from '../chatBox/Events'

export default class Loginform extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:"",
            error:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setUser = this.setUser.bind(this);
    }

    componentDidMount(){
      this.focus()
    }

    setUser = ({user, isUser}) => {
        console.log(user, isUser);
        if(isUser){
            this.setError("Username Taken")
        }else{
            this.setError("")
            this.props.setUser(user)
        }
    }

    handleSubmit = (e) => {
       e.preventDefault()

       const {socket} = this.props
       const {username} = this.state
       socket.emit(VERIFY_USER, username, this.setUser)
    }

    handleChange = (e) => {
      this.setState({username:e.target.value})
    }

    setError = (error) =>{
        this.setState({error})
    }

    focus(){
      this.textInput.focus()
    }

    randomPlaceholder(){
      const rand = ["Ricky32","trille","SexyCat","BadGuy","Stiles349","Dany","Minipapa"]
      return rand[Math.floor(Math.random()*3000)%rand.length]
    }


  render() {
      const {username,error} = this.state
    return (
      <div className="login" style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",}}>
        <form onSubmit={this.handleSubmit} style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
           <label htmlFor="username">
               <h2>Input your Username to get Started</h2>
           </label>
           <input
              onChange={this.handleChange}
              style={{backgroundColor:"transparent",maxWidth:"100%",borderTop:"none",borderLeft:"none",borderRight:"none",height:"20px",lineHeight:"20px",fontSize:"20px",borderBottomStyle:"solid",transitionDuration:" .23s",borderBottomColor:"#b3b2ca",borderBottomWidth:"3px",transitionProperty:"all",transitionTimingFunction:"ease-in",outline:"none"}}
              ref={(input) => {this.textInput = input}}
              type="text"
              autoComplete={"off"}
              id = "username"
              value={username}
              placeholder={this.randomPlaceholder()}/>
              <div className= "error" style={{textAlign:"center",marginTop:"5px",marginRight:0,paddingTop:"5px",paddingRight:"10px",color:"#c92c43"}}>{error ? error : null}</div>
        </form>
      </div>
    );
  }
 
}
