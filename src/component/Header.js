import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomAppBar = styled(AppBar)`

`

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar sx={{height:'50px'}}
       /*  style={{ background: "transparent", boxShadow: "none" }} */
        position="static"
      >
        <Toolbar>
          <Button style={{backgroundColor:"green"}} sx={{ marginLeft: "auto", }} color="inherit">
            NEW THREAD
          </Button>
        </Toolbar>
      </CustomAppBar>
    </Box>
  );
};

export default Header;