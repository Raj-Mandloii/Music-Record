

import * as types from "./actionType";

const init = {
    isAuth : false,
    token:"",
    error: false,
    loading: false
}

const reducer = (oldState = init,action) => {
const {type,payload} = action
    switch(type){
        case types.LOGINREQUEST: {
            return {
                ...oldState,
                loading : true,

            }
            
        } 

        case types.LOGINSUCCESS: {
            return {
                ...oldState,
                isAuth : true,
                token:  payload,
                error: false,
                loading : false,

            }
            
        } 

        case types.LOGINFAILURE: {
            return {
                ...oldState,
                token:"",
                loading : false,
                error : true,

            }
            
        } 
        default:
            return oldState
    } 
    
}

export {reducer}