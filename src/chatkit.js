import { ChatManager, TokenProvider } from "@pusher/chatkit-client";
import moment from "moment";
import chatManager from "./currentUser";
const INSTANCE_LOCATOR = process.env.REACT_APP_INSTANCE_LOCATOR;
const TOKEN_URL = process.env.REACT_APP_TOKEN_URL;
const MESSAGE_LIMIT = Number(process.env.REACT_APP_MESSAGE_LIMIT) || 10;

let activeRoom = null;
async function connectUser(userId) {
  const currentUser = await chatManager(userId);

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
      throw new Error("error:", error);
    });
};

async function subscribeToRoom(roomid, dispatch, userId) {
  const currentUser = await chatManager(userId);
  dispatch(CLEAR_CHAT_ROOM());
  activeRoom = await currentUser.subscribeToRoomMultipart({ roomId: roomid });
  setMembers(dispatch);
  SET_MESSAGES(dispatch, userId, roomid);

  return activeRoom;
}

async function sendMessage(text, dispatch) {
  const { user, activeRoom } = JSON.parse(localStorage.getItem("state"));
  chatManager(user.username)
    .then(userInstance => {
      userInstance
        .sendMessage({ text: text, roomId: activeRoom.id.id })
        .then(messageId => {
          SET_MESSAGES(dispatch, user.username, activeRoom.id.id)
          return messageId;
        })
        .catch(err => {
          throw new Error(err)
        });
    })
    .catch(err => {
      throw new Error(err)

    });

}

export function isTyping(roomId) {
  const { user } = JSON.parse(localStorage.getItem("state"));
  const currentUser = chatManager(user.username);
  currentUser.isTypingIn({ roomId });
}

function disconnectUser() {
  const { user } = JSON.parse(localStorage.getItem("state"));
  const currentUser = chatManager(user.username);
  currentUser.disconnect();
}

export default {
  connectUser,
  subscribeToRoom,
  CLEAR_CHAT_ROOM,
  sendMessage,
  disconnectUser
};
