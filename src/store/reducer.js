const initialState = {
    loggedIn: false,
    loading: false,
    sending: false,
    error: null,
    user: [],
    reconnect: false,
    activeRoom: null,
    rooms:[],
    users: [],
    messages: [],
    userTyping: null,
}

export function reducer(state = initialState, action){
  switch (action.type) {
      case 'IS_LOGGED_IN': 
      return{
          ...state,
          loggedIn: action.payload
      }
      case 'SET_ERROR':
          return{
              ...state,
              error: action.payload
          }
      case 'SET_LOADING':
        return{
          ...state,
          loading: action.payload
        }
      case 'SET_ACTIVE_ROOM':
        
          return{
              ...state,
              activeRoom: {
                  id : action.payload
              }
          }
        case 'SET_USER': 
          return {
              ...state,
              user: action.payload
          }
        case 'SET_RECONNECTED': 
            return {
                ...state,
            reconnect: action.payload,
        }
      default:
          return state
  }
}