import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  MenuItem,
  Popover,
} from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import SearchComponent from "@/components/search/index";
import React from "react";
import SideBarComponent from "../side-bar";
import SearchBar from "@/components/search/index";

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
      <div
        style={{ width: 250, display: "flex", flexDirection: "column" }}
        role="presentation"
        
      >
        <div className="font-semibold flex items-center justify-between w-full gap-4 p-6 text-primary text-2xl">
          <div className="flex items-center gap-4">
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
          <ListItem><SearchBar/></ListItem>
          <ListItem><SideBarComponent/></ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
