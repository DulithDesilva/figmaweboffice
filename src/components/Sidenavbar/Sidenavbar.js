import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { NavLink as RouterLink } from "react-router-dom";
import { Avatar, Divider, Hidden, Icon, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const cashierNavItems = [
  {
    href: "/Homepage",
    icon: HomeIcon,
    title: "Home",
  },
  {
    href: "/Secondpage",
    icon: FolderIcon,
    title: "My project",
  },
  {
    href: "/Thirdpage",
    icon: MailOutlineIcon,
    title: "Messages",
  },
];

const cashierNavItems1 = [
  {
    href: "/cashier/products",
    icon: AccountBoxIcon,
    title: "My Profile",
  },
  {
    href: "/Addproject",
    icon: AddCircleIcon,
    title: "Add new project",
  },
];

const Sidenavbar = () => {
  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Avatar
        // component={RouterLink}
        src={"/static/images/img4.png"}
        sx={{
          cursor: "pointer",
          width: 300,
          height: 200,
          borderRadius: "0px",
        }}
        // to="/app/account"
      />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          p: 2,
          w: 100,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <SearchIcon sx={{ color: "primary", mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Search" variant="standard" />
        </Box>
        <Box sx={{ p: 2 }}>
          <List>
            {cashierNavItems.map((item, index) => (
              <ListItem
                key={index}
                disableGutters
                sx={{
                  display: "flex",
                  py: 0,
                }}
              >
                <Button
                  component={RouterLink}
                  sx={{
                    color: "text.secondary",
                    fontWeight: "medium",
                    justifyContent: "flex-start",
                    letterSpacing: 0,
                    py: 1.25,
                    textTransform: "none",
                    width: "100%",
                  }}
                  to={item.href}
                >
                  {item.icon && <item.icon size="20" />}
                  <span>{item.title}</span>
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Divider variant="middle" />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        <Box sx={{ p: 2 }}>
          <List>
            {cashierNavItems1.map((item, index) => (
              <ListItem
                key={index}
                disableGutters
                sx={{
                  display: "flex",
                  py: 0,
                }}
              >
                <Button
                  component={RouterLink}
                  sx={{
                    color: "text.secondary",
                    fontWeight: "medium",
                    justifyContent: "flex-start",
                    letterSpacing: 0,
                    py: 1.25,
                    textTransform: "none",
                    width: "100%",
                  }}
                  to={item.href}
                >
                  {item.icon && <item.icon size="20" />}
                  <span>{item.title}</span>
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              height: "100%",
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

export default Sidenavbar;
