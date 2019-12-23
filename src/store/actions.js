import chatkit from "./../chatkit";

function login(userId) {
  return async (dispatch, getState) => {
    const state = getState();

    try {
      dispatch({ type: "SET_ERROR", payload: "" });
      dispatch({ type: "SET_LOADING", payload: true });
      dispatch({ type: "SET_USER_ID", payload: userId });
      const currentUser = await chatkit.connectUser(userId);

      dispatch({
        type: "SET_USER",
        payload: {
          username: currentUser.id,
          name: currentUser.name
        }
      });
      // Saving list of user's room in store;
      const rooms = currentUser.rooms.map(room => ({
        id: room.id,
        name: room.name
      }));

      // subscribing user to a room
      const activeRoom = state.activeRoom || rooms[0]; // Pick the last users Room or the first one

      dispatch({
        type: "SET_ACTIVE_ROOM",
        payload: {
          id: activeRoom.id,
          name: activeRoom.name
        }
      });

      dispatch({ type: "SET_ROOMS", payload: rooms });
      dispatch({ type: "SET_RECONNECTED", payload: false });

      chatkit.subscribeToRoom(activeRoom.id, dispatch, userId);
    } catch (err) {
      const message = err.message || err.info.error_description;

      dispatch({ type: "SET_ERROR", payload: message });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({ type: "IS_LOGGED_IN", payload: true });
    }
  };
}

 function changeRoom(roomId, userId) {
  return async (dispatch) => {
    try {
      const { id, name } = await chatkit.subscribeToRoom(roomId.id, dispatch, userId);
      
      dispatch( {
          type: "SET_ACTIVE_ROOM",  
          payload :{
            id,
            name
            }
        });
    } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error });
    }
  };
}

function sendMessage(message){
  return async (dispatch)=> {
    try {
      dispatch({type: "SET_SENDING", payload: true});
      const messageId = await chatkit.sendMessage(message, dispatch);
      return messageId
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error });
    } finally {
      dispatch({ type: "SET_SENDING", payload: false });
    }
  }
}
function  logOut() {
    chatkit.disconnectUser();
    window.localStorage.clear();
}
export default {
    login,
    changeRoom,
    sendMessage,
    logOut
}
