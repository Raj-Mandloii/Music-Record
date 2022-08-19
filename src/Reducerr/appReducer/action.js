import * as type from "./actionTypes"
import axios from "axios"

const getMusic = (query) => (dispatch) =>{

    dispatch({type:type.REQUEST})

    return axios.get("http://localhost:8080/albums",query)
    .then(r => {
        return dispatch({type:type.SUCCESS,payload:r.data})
    }).catch(e=>{
        return dispatch({type:type.FAILURE})
    })
}

const updateMusic = (id,payload) => (dispatch) =>{

    dispatch({type:type.UPDATEMUSICRECORDREQUEST})

    return axios.patch(`http://localhost:8080/albums/${id}`,payload)
    .then(r => {
        return dispatch({type:type.UPDATEMUSICRECORDSUCCESS})
    }).catch(e=>{
        return dispatch({type:type.UPDATEMUSICRECORDFAILURE})
    })
}

export {getMusic,updateMusic }