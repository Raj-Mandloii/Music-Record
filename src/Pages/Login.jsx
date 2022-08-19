import { Box, Button, Container, Input } from "@chakra-ui/react"
import { useState } from "react";
import { login } from "../Reducerr/authReducer/action";
import { useDispatch, } from "react-redux";
import { LOGINSUCCESS } from "../Reducerr/authReducer/actionType";
import { useLocation, useNavigate } from "react-router-dom";
export default function Login() {
    const [input, setInput] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleInputChangeEmail = (e) => setInput(e.target.value)
    const handleInputChangePass = (e) => setPassword(e.target.value)
    const navigate = useNavigate();
    const location = useLocation()
    const comingFrom = location.state?.from?.pathname || "/"
    
    const handleLogin = () => {
        // console.log("handle log in running ");
        if (input && password) {

            const params = {
                email: input,
                password: password
            }
            dispatch(login(params)).then((res) => {
                if(res.type === LOGINSUCCESS){
                    // console.log("N A V I G A T E",comingFrom);
                    navigate(comingFrom,{replace:true})
                }
            })
        }
        // console.log("handle login running done :::::");
    }

    return (
        <Box>
            <Container p={"3em"} >
                <Box fontSize={"3em"}>LOGIN</Box>
                <br />
                <hr color="black" />
                <br />
                <Input borderColor={"black"} m={"1em"}
                    name={input}
                    type='email'
                    value={input}
                    onChange={handleInputChangeEmail}
                />
                <Input borderColor={"black"} m={"1em"}
                    name={input}
                    type=''
                    value={password}
                    onChange={handleInputChangePass}
                />
                <Button onClick={handleLogin}>Submit</Button>


            </Container>
        </Box>
    )
}