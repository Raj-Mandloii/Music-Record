
import * as type from "./actionType";
import axios from "axios";

const login = (params) => (dispatch) => {
    dispatch({ type: type.LOGINREQUEST })

    return axios.post('https://reqres.in/api/login', params).then((res) => {
        return dispatch({ type: type.LOGINSUCCESS, payload: res.data.token })
       
    }).catch((e) => dispatch({ type: type.LOGINFAILURE }))
}




export {login}