import chatkit from './../chatkit';


function login(userId){
    return async dispatch => {
        try{
            
            dispatch( { type: 'SET_ERROR', payload: ''});
            dispatch({ type: 'SET_LOADING',  payload: true});
            const currentUser =  await chatkit.connectUser(userId);
            dispatch({
                 type: 'SET_USER',
                 payload: {
                    username: currentUser.id,
                    name: currentUser.name
            }});

            dispatch({type: 'SET_RECONNECTED',  payload: false})
    
        } catch(err){
            const message = err.message || err.info.error_description;

            dispatch( { type: 'SET_ERROR', payload: message});
        } finally{
            dispatch({type: 'SET_LOADING',  payload: false}) 
            dispatch({type: 'IS_LOGGED_IN', payload: true})    
        }
    }
}

export default login
