import { ChatManager, TokenProvider } from "@pusher/chatkit-client";
import moment from "moment";
const INSTANCE_LOCATOR = process.env.REACT_APP_INSTANCE_LOCATOR;
const TOKEN_URL = process.env.REACT_APP_TOKEN_URL;
const MESSAGE_LIMIT = Number(process.env.REACT_APP_MESSAGE_LIMIT) || 10;

let currentUser = null;
let activeRoom = null;
// const signedInUser = JSON.parse(localStorage.getItem('state')).user.username;
async function connectUser(userId) {
  const chatManager = new ChatManager({
    instanceLocator: INSTANCE_LOCATOR,
    tokenProvider: new TokenProvider({ url: TOKEN_URL }),
    userId
  });

  currentUser = await chatManager.connect();
  
  return currentUser;
}
async function setMembers(dispatch) {
  const hold = await activeRoom;
  let members = [];

  if (hold) {
    members = hold.users.map(user => ({
      username: user.id,
      name: user.name,
      presence: user.presence.state
    }));
  }
  dispatch({ type: "SET_MULTIPLE_USERS", payload: members });
}
// action creators
const CLEAR_CHAT_ROOM = () => {
  return {
    type: "CLEAR_CHAT_ROOM"
  };
};

const SET_MESSAGES = (dispatch, userId, roomId) => {
  const chatManager = new ChatManager({
    instanceLocator: INSTANCE_LOCATOR,
    tokenProvider: new TokenProvider({ url: TOKEN_URL }),
    userId
  });

  chatManager
    .connect()
    .then(currentUser => {
      currentUser.subscribeToRoomMultipart({
        roomId: roomId,
        messageLimit: MESSAGE_LIMIT,
        hooks: {
          onMessage: message => {
            
            dispatch({
              type: "SET_MESSAGES",
              payload: {
                name: message.sender.name,
                username: message.senderId,
                text: message.parts[0].payload.content,
                date: moment(message.createdAt).format("h:mm:ss a D-MM-YYYY")
              }
            });
          }
        }
      });
    })
    .catch(error => {
      console.error("error:", error);
    });
};
const SET_USER_TYPING = userTyping => {
  return {
    type: "SET_USER_TYPING",
    action: userTyping
  };
};
async function subscribeToRoom(roomid, dispatch, userId ) {
  dispatch(CLEAR_CHAT_ROOM());
  activeRoom = await currentUser.subscribeToRoomMultipart({ roomId: roomid });
  setMembers(dispatch);
  SET_MESSAGES(dispatch, userId, roomid);

  return activeRoom;
}

// async function sendMessage(text, activeRoom){
//     const chatManager = new ChatManager({
//         instanceLocator: INSTANCE_LOCATOR,
//         tokenProvider: new TokenProvider({ url: TOKEN_URL }),
//         userId: signedInUser
//      });
//      currentUser = await chatManager.connect()
//      console.log(activeRoom)
//      const messageId = await currentUser.sendSimpleMessage({
//          text,
//          roomId: activeRoom
//      })

//      console.log(messageId)

// }

export default {
  connectUser,
  subscribeToRoom,
  CLEAR_CHAT_ROOM,
//   sendMessage
};
