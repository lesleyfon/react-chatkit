
export function localState(){
    try{
        const serializeState = localStorage.getItem('state');
        if(serializeState === null){
            return undefined;
        }
        return JSON.parse(serializeState);
    } catch (err){
        return undefined
    }
}

export function  saveState(state){
    try{
        const serializeState = JSON.stringify(state);
        localStorage.setItem('state', serializeState);
    }
    catch(err){
        throw new Error('error in the saveState')
        return undefined}
}