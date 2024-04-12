import React from "react";
import {Container} from "@mui/material";
import { SignUpBox,SignUpButton } from "./SignUp.style";
import TopBar from "../TopBar/TopBar";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate=useNavigate();
    return (
        <>
            <TopBar/>
            <Container
            sx={{
                backgroundColor: "inherit",
                height: "93vh",
                display: "flex",
                marginTop: "0.5 rem",
                marginBottom: "0.5 rem",
            }}>
               <SignUpBox>
                    <SignUpButton onClick={
                        ()=>{
                            navigate('/signup/customer')
                        }
                    
                    }>Customer signup</SignUpButton>
               </SignUpBox>
               <SignUpBox>
                    <SignUpButton onClick={
                        ()=>{
                            navigate('/signup/driver')
                        }
                    }>Driver signup</SignUpButton>
               </SignUpBox>
            </Container>
        </>
    )
}
export default SignUp;