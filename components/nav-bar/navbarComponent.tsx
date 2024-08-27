"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { MouseEvent, useState } from "react";
import { signOut } from "next-auth/react";
import { Avatar, Menu, MenuItem, Drawer, List, ListItem, ListItemText, TextField, IconButton, Button, Popover } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled, alpha } from "@mui/material/styles";
import SearchComponent from "../search";
import CloseIcon from '@mui/icons-material/Close';


// Options for the categories dropdown
const options = [
  "None",
  "IELS",
  "FrontEnd",
  "BackEnd",
  "Software",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];


// Styled components for search
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:active": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em -4px ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "54ch",
    },
  },
}));

const NavBarComponent: React.FC = () => {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categoriesAnchorEl, setCategoriesAnchorEl] = useState<null | HTMLElement>(null);

  const menuOpen = Boolean(anchorEl);
  const categoriesOpen = Boolean(categoriesAnchorEl);

  /*open menu icon for responsive*/
  const handleProfileMenuClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

/*for the drawer open and close*/
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  }

  /* for the categories option open section  */
  const handleCategoriesMouseEnter = (event: MouseEvent<HTMLButtonElement>) => {
    setCategoriesAnchorEl(event.currentTarget);
  };
  const handleCategoriesMenuClose = () => {
    setCategoriesAnchorEl(null);
  };


  return (
    <>
      {/* Main Navbar */}
      <div className="flex justify-between items-center p-4 text-md text-slate-600 shadow-lg relative">
        {/* Menu Icon for Mobile */}
        <IconButton
          className="block lg:hidden"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo and Title */}
        <div className="flex items-center gap-16">
          <div className="font-semibold flex items-center gap-4 text-primary text-2xl">
            <Image className="block" src="/logo.svg" alt="logo" height={30} width={30} />
            <span className="text-base">Learn Online</span>
          </div>

          {/* Categories Button with Popover */}
          <div className="text-dark">
            <Button
              aria-label="categories"
              id="categories-button"
              aria-controls={categoriesOpen ? "categories-popover" : undefined}
              aria-expanded={categoriesOpen ? "true" : undefined}
              aria-haspopup="true"
              onMouseEnter={handleCategoriesMouseEnter}
              color="inherit"
            >
              Categories
              <ArrowDropDownIcon />
            </Button>
            <Popover
              id="categories-popover"
              anchorEl={categoriesAnchorEl}
              open={categoriesOpen}
              onClose={handleCategoriesMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{ maxWidth: 200 }}
            >
              <List>
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    onClick={handleCategoriesMenuClose}
                  >
                    {option}
                  </MenuItem>
                ))}
              </List>
            </Popover>
          </div>
        </div>

        {/* Search Bar */}
        <SearchComponent/>

        {/* Profile Button */}
        <button
          className="flex gap-2 items-center text-sm font-normal"
          onClick={handleProfileMenuClick}
        >
          {session?.user?.image ? (
            <Image
              className="rounded-full"
              src={session?.user?.image as string}
              alt="ProfileImage"
              height={40}
              width={40}
            />
          ) : (
            <Avatar alt="profile">{session?.user?.name?.charAt(0)}</Avatar>
          )}
          <h2 className="hidden lg:block">{session?.user?.email}</h2>
          <ArrowDropDownIcon />
        </button>

        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleProfileMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem
            onClick={() => {
              signOut();
              handleProfileMenuClose();
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </div>

      {/* Drawer Menu for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <div
          style={{ width: 250, display: 'flex', flexDirection: 'column'}}
          role="presentation"
          // onClick={handleDrawerClose}
          // onKeyDown={handleDrawerClose}
        >

          <List>
            {/* Logo and Title Section */}
            <ListItem>
              <div className="font-semibold flex items-center gap-4 text-primary text-2xl">
                <Image className="sm:block lg:block" src="/logo.svg" alt="logo" height={30} width={30} />
                <span className="text-base">Learn Online</span>
              </div>
            </ListItem>
            <CloseIcon className="absolute top-0 right-0 m-2 cursor-pointer" 
             onClick={handleDrawerClose}
            />


            {/* Search Bar Section */}
            <ListItem>
              <Search sx={{ width: 'auto'}}>
                <StyledInputBase
                  type="text"
                  name="search"
                  placeholder="Search for anything..."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </ListItem>

            {/* Categories Button Section */}
            <ListItem>
              <Button className="text-dark" onClick={handleCategoriesMouseEnter} onMouseLeave={handleCategoriesMenuClose}>
                Categories
              </Button>
              <Popover
                anchorEl={categoriesAnchorEl}
                open={categoriesOpen}
                onMouseLeave={handleCategoriesMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                sx={{ maxWidth: 200 }}
              >
                <List>
                  {options.map((option) => (
                    <MenuItem
                      key={option}
                      onClick={handleCategoriesMenuClose}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </List>
              </Popover>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default NavBarComponent;
