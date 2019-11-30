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
    console.log(state);
    console.log(initialState)
switch (action.type) {
    case 'hasError':
        return{
            ...state,
            error: state.error ? true : false
        }
    default:
        return state
}
}