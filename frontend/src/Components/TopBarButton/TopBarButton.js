import React from "react";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";


const TopBarButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "black",
    height: "80%",
    alignItems: "center",
    borderRadius: '1rem',
    "&:hover": {
        backgroundColor: "inherit",
    },
}));

export default TopBarButton;