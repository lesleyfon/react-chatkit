import chatkit from './../chatkit';
import { setError, setLoading, setUser, setReconnect } from './index'


function login(userId){
    return async dispatch => {
        try{
            setError('');
            setLoading(true);
            const currentUser =  await chatkit.connectUser(userId);
            setUser({
                username: currentUser.id,
                name: currentUser.name
            });
            setReconnect(false)
    
        } catch(err){
            const message = err.message || err.info.error_description;
    
            dispatch( { type: 'SET_ERROR', payload: message});
        } finally{
            setReconnect(false)
        }
    }
}

export default login
