import {Box,Button} from "@mui/material";
import {styled} from "@mui/material/styles";

const SignUpBox=styled(Box)(({theme})=>({
    backgroundColor:"white",
    width:"50%",
    height:"auto",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    boxShadow:"0 0 10px 0 black",
    marginTop:"0.5rem",
    marginBottom:"0.5rem",
    
  
}));

const SignUpButton=styled(Button)(({theme})=>({
    color:"black",
    backgroundColor:"inherit",
    height:"30%",
    alignItems:"center",
    borderRadius:'1rem',
    fontSize:"1.5rem",
    "&:hover":{
        backgroundColor:"inherit",
        color:"grey",
    },
}));

export {SignUpBox,SignUpButton}