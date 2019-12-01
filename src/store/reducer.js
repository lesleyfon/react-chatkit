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

const test = {
    loading: false,
    sending: false,
    error: 'Relax! This is just a drill error message',
    user: {
      username: 'Jack',
      name: 'Jack Sparrow'
    },
    reconnect: false,
    activeRoom: {
      id: '124'
    },
    rooms: [
      {
        id: '123',
        name: 'Ships'
      },
      {
        id: '124',
        name: 'Treasure'
      }
    ],
    users: [
      {
        username: 'Jack',
        name: 'Jack Sparrow',
        presence: 'online'
      },
      {
        username: 'Barbossa',
        name: 'Hector Barbossa',
        presence: 'offline'
      },
      {
        username: 'Lesley',
        name: 'Lesley Banadzem',
        presence: 'offLine'
      }
    ],
    messages: [
      {
        username: 'Jack',
        date: '11/12/1644',
        text: 'Not all treasure is silver and gold mate'
      },
      {
        username: 'Lesley',
        date: '11/12/1644',
        text: 'Not all treasure is silver and gold mate'
      },
      {
        username: 'Jack',
        date: '12/12/1644',
        text: 'If you were waiting for the opportune moment, that was it'
      },
      {
        username: 'Hector',
        date: '12/12/1644',
        text: 'You know Jack, I thought I had you figured out'
      },
      {
        username: 'Hector',
        date: '12/12/1644',
        text: 'You know Jack, I thought I had you figured out'
      },
      {
        username: 'Lesley',
        date: '12/12/1644',
        text: 'You know Jack, I thought I had you figured out'
      },
    ],
    userTyping: null
  }
export function reducer(state = test, action){

switch (action.type) {
    case 'hasError':
        return{
            ...state,
            error: state.error ? true : false
        }
    case 'SET_ACTIVE_ROOM':
        console.log('hello')
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