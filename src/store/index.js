
 export function setError(error) {
     return {
         type: 'SET_ERROR',
         payload: error
        }
    }
    
    export function   setLoading(loading) {
        return{
            type: 'SET_LOADING',
            payload: loading,
        }
    }
    
    export function setUser(user){
        return {
            type: 'SET_USER',
            payload: user
        }
    }
    export function setReconnect(reconnect){
        return {
            type: 'SET_RECONNECTED',
            payload: reconnect,
        }
    }
    export function setActiveRoom(roomID){
        return {
            type: 'SET_ACTIVE_ROOM',
            payload: roomID
        }
}
 // export default {
     
 //     setLoading(state, loading) {
 //       state.loading = loading;
 //     },
 //     setUser(state, user) {
 //       state.user = user;
 //     },
 //     setReconnect(state, reconnect) {
 //       state.reconnect = reconnect;
 //     },
 //     setActiveRoom(state, roomId) {
 //       state.activeRoom = roomId;
 //     },
 //     setRooms(state, rooms) {
 //       state.rooms = rooms
 //     },
 //     setUsers(state, users) {
 //       state.users = users
 //     },
 //    clearChatRoom(state) {
 //       state.users = [];
 //       state.messages = [];
 //     },
 //     setMessages(state, messages) {
 //       state.messages = messages
 //     },
 //     addMessage(state, message) {
 //       state.messages.push(message)
 //     },
 //     setSending(state, status) {
 //       state.sending = status
 //     },
 //     setUserTyping(state, userId) {
 //       state.userTyping = userId
 //     },
 //     reset(state) {
 //       state.error = null;
 //       state.users = [];
 //       state.messages = [];
 //       state.rooms = [];
 //       state.user = null
 //     }
 //   }