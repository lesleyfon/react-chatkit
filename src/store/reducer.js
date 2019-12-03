const initialState = {
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
      default:
          return state
  }
}