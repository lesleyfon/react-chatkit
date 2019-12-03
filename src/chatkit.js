import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import moment from 'moment';
const INSTANCE_LOCATOR = process.env.REACT_APP_INSTANCE_LOCATOR;
const TOKEN_URL = process.env.REACT_APP_TOKEN_URL;
const MESSAGE_LIMIT = Number(process.env.REACT_APP_MESSAGE_LIMIT) || 10;

let currentUser = null;
let activeRoom = null;

async function connectUser (userId){
    const chatManager = new ChatManager({
        instanceLocator: INSTANCE_LOCATOR,
        tokenProvider: new TokenProvider({ url: TOKEN_URL }),
        userId
    });

    currentUser = await chatManager.connect();

    return currentUser;
}
function setmembers(){

    return ( dispatch, getState) => {
        const state = getState();

        const memebers = activeRoom.users.map(user => ({
            username: user.id,
            name: user.name,
            presence: user.presence.state
        }))
        dispatch({type: 'SET_USERS', payload: memebers})
    }
}


export default {
    connectUser
}