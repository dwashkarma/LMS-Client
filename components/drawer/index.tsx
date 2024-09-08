import {
  Button,
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
        // onClick={handleDrawerClose}
        // onKeyDown={handleDrawerClose}
      >
        <List>
          {/* Logo and Title Section */}
          <ListItem>
            <div className="font-semibold flex items-center gap-4 text-primary text-2xl">
              <Image
                className="sm:block lg:block"
                src="/logo.svg"
                alt="logo"
                height={30}
                width={30}
              />
              <span className="text-base">Learn Online</span>
            </div>
          </ListItem>
          <CloseIcon
            className="absolute top-0 right-0 m-2 cursor-pointer"
            onClick={handleDrawerClose}
          />

          {/* Search Bar Section */}
          <ListItem>
            <SearchComponent />
          </ListItem>

          {/* Categories Button Section */}
          <ListItem>
            <Button
              className="text-dark"
              onClick={handleCategoriesMouseEnter}
              onMouseLeave={handleCategoriesMenuClose}
            >
              Categories
            </Button>
            <Popover
              anchorEl={categoriesAnchorEl}
              open={categoriesOpen}
              onMouseLeave={handleCategoriesMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{ maxWidth: 200 }}
            >
              <List>
                {options.map((option: any) => (
                  <MenuItem key={option} onClick={handleCategoriesMenuClose}>
                    {option}
                  </MenuItem>
                ))}
              </List>
            </Popover>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
