import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
  Popover,
} from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import SearchComponent from "@/components/search/index";
import {
  Settings,
  CircleUserRound,
  LayoutDashboard,
  School,
} from "lucide-react";

import React from "react";

interface DrawerProps {
  drawerOpen: any;
  handleDrawerClose: any;
  handleCategoriesMouseEnter: any;
  handleCategoriesMenuClose: any;
  categoriesAnchorEl: any;
  categoriesOpen: any;
  options: any;
}
const DrawerComponent: React.FC<DrawerProps> = ({
  drawerOpen,
  handleDrawerClose,
  handleCategoriesMouseEnter,
  handleCategoriesMenuClose,
  categoriesAnchorEl,
  categoriesOpen,
  options,
}) => {
  return (
    <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
      <div className="h-[90dvh] flex flex-col justify-between">
        <div
          style={{ width: 250, display: "flex", flexDirection: "column" }}
          role="presentation"
          // onClick={handleDrawerClose}
          // onKeyDown={handleDrawerClose}
        >
          {/* Logo and Title Section */}
          <div className="font-semibold flex items-center justify-between w-full gap-4 p-6  text-2xl">
            <div className="flex items-center gap-4 text-primary">
              {" "}
              <Image src="/logo.svg" alt="logo" height={30} width={30} />
              <span className="text-base">Learn Online</span>
            </div>
            <button>
              <CloseIcon onClick={handleDrawerClose} />
            </button>
          </div>
          <Divider />
          <List>
            <ListItemButton>
              <ListItem className="flex gap-2">
                <LayoutDashboard />
                <span>Dashboard</span>
              </ListItem>
            </ListItemButton>
            <ListItemButton>
              <ListItem className="flex gap-2">
                <School />
                <span>Teach on LMS</span>
              </ListItem>
            </ListItemButton>
          </List>
        </div>
        <div>
          <List>
            <ListItemButton>
              <ListItem className="flex gap-2">
                <CircleUserRound />
                <span>Profile</span>
              </ListItem>
            </ListItemButton>
            <ListItemButton>
              <ListItem className="flex gap-2">
                <Settings /> <span>Setting</span>
              </ListItem>
            </ListItemButton>
          </List>
        </div>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
