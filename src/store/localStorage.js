
export function localStorage(){
    try{
        const serializeState = localStorage.getItem('state');
        if(serializeState === null){
            return undefined;
        }
        return JSON.parse(serializeState);
    } catch (err){
        console.log('Error in LocalStorage.js')
        return undefined
    }
}