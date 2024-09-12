"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { MouseEvent, useContext, useState } from "react";
import { signOut } from "next-auth/react";
import {
  Avatar,
  Menu,
  MenuItem,
  List,
  IconButton,
  Button,
  Popover,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchComponent from "../search";

interface NavbarProps {
  handleDrawerToggle: () => void;
  categoriesOpen: any;
  handleCategoriesMouseEnter: any;
  options: any;
  handleProfileMenuClick: any;
  anchorEl: any;
  categoriesAnchorEl: any;
  handleCategoriesMenuClose: any;
  handleProfileMenuClose: any;
}
const NavBarComponent: React.FC<NavbarProps> = ({
  handleDrawerToggle,
  categoriesOpen,
  handleCategoriesMouseEnter,
  options,
  handleProfileMenuClick,
  anchorEl,
  categoriesAnchorEl,
  handleCategoriesMenuClose,
  handleProfileMenuClose,
}) => {
  const { data: session } = useSession();

  return (
    <>
      {/* Main Navbar */}
      <div className="flex justify-between items-center p-4 text-md text-slate-600 shadow-lg sticky  md:top-0 z-[900] bg-card">
        {/* Menu Icon for Mobile */}
        <div className="flex gap-2 items-center">
          <IconButton
            className="block "
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <div className="font-semibold flex items-center gap-4 text-primary text-2xl">
            <Image
              className="block"
              src="/logo.svg"
              alt="logo"
              height={30}
              width={30}
            />
            <span className="text-base">Learn Online</span>
          </div>
        </div>

        {/* Logo and Title */}
        <div className="flex items-center gap-16">
          {/* Categories Button with Popover */}
          <div className="text-dark hidden md:block">
            <Button
              aria-label="categories"
              id="categories-button"
              aria-controls={categoriesOpen ? "categories-popover" : undefined}
              aria-expanded={categoriesOpen ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleCategoriesMouseEnter}
              color="inherit"
            >
              <p className="text-base font-normal capitalize">Categories</p>
              <ArrowDropDownIcon />
            </Button>
            <Popover
              id="categories-popover"
              anchorEl={categoriesAnchorEl}
              open={categoriesOpen}
              onClose={handleCategoriesMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
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
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:block">
          <SearchComponent />
        </div>
        <div>Explore</div>
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
    </>
  );
};

export default NavBarComponent;
