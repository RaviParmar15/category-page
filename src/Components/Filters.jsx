import React from "react";
import "./css/filters.css";
import "./css/header.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoGift } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";


const Filters = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          "Home",
          "Eprofile",
          "Templates",
          "Brand Kit",
          "Content planner",
          "Schedule post",
          "Upload",
          "Recomendation",
          "Custom Order",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <AiFillHome /> : <FaUser />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Refer and earn", "Draft", "Trash"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <IoGift /> : <FaRegPenToSquare />                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="filters-div ">
      <div className="btn">
        <img
          className="btn-img"
          onClick={toggleDrawer(true)}
          src="./Filter_Button.png"
          alt=""
        />
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
      <div className="navbar filter-nav ">
        <li>
          Home <img src="./Vector (Stroke) (2).png" alt="" />
        </li>
        <li>Templates </li>
        <li>
          Invitation <img src="./Vector (Stroke) (2).png" alt="" />
        </li>
        <li style={{ color: "#ABB2C7" }}>Events</li>
      </div>
    </div>
  );
};

export default Filters;
