import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TopBarButton from "../TopBarButton/TopBarButton";
// import axios from "axios";
import { useNavigate } from 'react-router-dom';
const TopBar = () => {
  const navigate=useNavigate();
  return (
    <>
      <Box
        sx={{
          top: 0,
          backgroundColor: "black",
          width: "100%",
          height: "6vh",
          display: "flex",
        }}
      >
        <Box
          sx={{
            backgroundColor: "inherit",
            display: "flex",
            height: "100%",
            alignItems: "center",
            paddingLeft: "5rem",
            paddingRight: "1rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
              backgroundColor: "black",
              display: "flex",
              height: "100%",
              alignItems: "center",
              //   paddingTop:'0.4rem',
            }}
          >
            Ride Booking{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "1rem",
            paddingRight: "0.5rem",
          }}
        >
          <TopBarButton>Ride</TopBarButton>
        </Box>
        <Box
          sx={{
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
        >
          <TopBarButton>Drive</TopBarButton>
        </Box>
        <Box
          sx={{
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "70rem",
            paddingRight: "0.5rem",
          }}
        >
          <TopBarButton
          onClick={()=>{
            navigate('/login')
          }}>Login</TopBarButton>
        </Box>
        <Box
          sx={{
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
        >
          <TopBarButton
            onClick={() => {
              navigate('/signup');
            }}
            sx={{
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            Sign Up{" "}
          </TopBarButton>
        </Box>
      </Box>
    </>
  );
};

export default TopBar;
