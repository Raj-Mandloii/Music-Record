
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


export default function ReqAuth ({children}){
    const location = useLocation();
    const auth = useSelector((store)=> store.authReducer.isAuth)
    // console.log("AUTH :::::::::::",auth);
    
    
    if(!auth){
       return  <Navigate to={"/login"} state={{from:location}} replace></Navigate>
    }
    return children
    
    
}