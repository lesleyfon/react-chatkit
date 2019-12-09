
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
