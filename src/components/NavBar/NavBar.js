import React from "react";
import { useRef, useEffect } from "react";
import ArcText from "arc-text";
import Avatar from '@mui/material/Avatar';


import Box from "@mui/material/Box";
import NotificationsIcon from "@mui/icons-material/Notifications";


const NavBar = () => {
 
  const h1Ref = useRef(null);

  useEffect(() => {
    if (h1Ref.current) {
      const arcText = new ArcText(h1Ref.current);
      arcText.arc(150);
    }
  }, []);

  <script src="arc-text.js"></script>;
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: 'center',
        background:'black',
        color:'white',
        padding:"20px"
      }}
    >
      <div>
        <h2 ref={h1Ref}>To Do List</h2>
      </div>
      <div style={{display:"flex", alignItems:'center'}}>
        <NotificationsIcon />
        <Avatar />
      </div>
    </Box>
  );
};
export default NavBar;
