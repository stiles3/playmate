const io = require('./index.js').io
const {createUser, createMessage, createChat}= require('../chatBox/Factories')
const {VERIFY_USER,USER_CONNECTED,TYPING,LOGOUT,USER_DISCONNECTED,
  COMMUNITY_CHAT,MESSAGE_RECEIVED,MESSAGE_SENT}= require('../chatBox/Events')
let connectedUsers ={ }

let communityChat = createChat()

module.exports = function(socket){
    console.log("Socket Id:" + socket.id)

    let sendMessageToChatFromUser;
    let sendTypingFromUser; 

    //Verify Username
    socket.on(VERIFY_USER, (username,callback)=>{
      if(isUser(connectedUsers, username)){
        callback({isUser:true, user:null})
      }
      else{
        callback({isUser:false,user:createUser({name:username})})
      }
    }) 

     //User Connnects with username
     socket.on(USER_CONNECTED, (user)=>{
        connectedUsers = addUser(connectedUsers, user)
        socket.user = user
        
        sendMessageToChatFromUser = sendMessageToChat(user.name)
        sendTypingFromUser = sendTypingToChat(user.name)

        io.emit(USER_CONNECTED, connectedUsers)
        console.log(connectedUsers);
    }) 

    //User Disconnects
    socket.on('disconnect',() => {
      if ("user" in socket){
        connectedUsers = removeUser(connectedUsers, socket.user.name)
        io.emit(USER_DISCONNECTED, connectedUsers)
        console.log("Disconnect",connectedUsers)
      }
    })

    //User Logout
    socket.on(LOGOUT, () =>{
        connectedUsers = removeUser(connectedUsers, socket.user.name)
        io.emit(USER_DISCONNECTED, connectedUsers)
        console.log("Disconnect", connectedUsers)
    })

    //COMMUNITY_CHAT
    socket.on(COMMUNITY_CHAT, (callback) =>{
      callback(communityChat)
    })

    socket.on(MESSAGE_SENT, ({chatId, message}) => {
      sendMessageToChatFromUser(chatId,message)
    })

    socket.on(TYPING,({chatId,isTyping}) =>{
      sendTypingFromUser(chatId, isTyping)
        console.log(chatId, isTyping);
    })
 
  }
function sendTypingToChat(user){
  return(chatId, isTyping)=>{
    io.emit(`${TYPING}-${chatId}`, {user, isTyping})
  }
}

function sendMessageToChat(sender){
  return(chatId,message) => {
       io.emit(`${MESSAGE_RECEIVED}-${chatId}`, createMessage({message,sender}))
  }
}

function addUser(userList, user){
  let newList = Object.assign({}, userList)
  newList[user.name] = user
  return newList
}
function removeUser(userList, userName){
  let newList = Object.assign({}, userList)
  delete newList[userName]
  return newList
}

function isUser(userList, userName){
  return userName in userList
}