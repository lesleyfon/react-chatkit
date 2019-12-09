const initialState = {
  loggedIn: false,
  loading: false,
  sending: false,
  error: null,
  user: [],
  reconnect: false,
  activeRoom: null,
  rooms: [],
  users: [],
  messages: [],
  userTyping: null, 
  userId : null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case'SET_USER_ID':
    return{
      ...state,
      payload: action.userId
    }
    case "IS_LOGGED_IN":
      return {
        ...state,
        loggedIn: action.payload
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
      };
    case "SET_SENDING":
      return {
        ...state,
        sending: action.payload
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload
      };
    case "SET_RECONNECTED":
      return {
        ...state,
        reconnect: action.payload
      };
    case "SET_ACTIVE_ROOM":
      return {
        ...state,
        activeRoom: {
          id: action.payload
        }
      };
    case "SET_ROOMS":
      return {
        ...state,
        rooms: action.payload
      };
    case "SET_MULTIPLE_USERS":
      return {
        ...state,
        users: action.payload
      };
    case "CLEAR_CHAT_ROOM":
      return {
        ...state,
        users: [],
        messages: []
      };
    case "SET_MESSAGES":
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };

    case "SET_USER_TYPING":
      return {
        ...state,
        userTyping: action.payload
      };
    default:
      return state;
  }
}
