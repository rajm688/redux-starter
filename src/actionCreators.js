import { ADD_BUG, REMOVE_BUG, RESOLVE_BUG } from "./actiontypes";

export const bugAdded = description =>({
        type:ADD_BUG,
        payload:{
            description:description
        }
    })
export function bugRemoved(id){
    return{
        type:REMOVE_BUG,
        payload:{
            id:id
        }
    }
}
export const bugResolved =  id => ({
    type:RESOLVE_BUG,
    payload:{
        id
    }
})