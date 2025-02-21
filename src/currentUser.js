import { ChatManager, TokenProvider } from "@pusher/chatkit-client";
const INSTANCE_LOCATOR = process.env.REACT_APP_INSTANCE_LOCATOR;
const TOKEN_URL = process.env.REACT_APP_TOKEN_URL;
const MESSAGE_LIMIT = Number(process.env.REACT_APP_MESSAGE_LIMIT) || 10;

export default async function currentUser (userId){
    const chatManager = new ChatManager({
        instanceLocator: INSTANCE_LOCATOR,
        tokenProvider: new TokenProvider({ url: TOKEN_URL }),
        userId
      });

    return await chatManager.connect();
}

