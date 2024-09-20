"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { signOut } from "next-auth/react";
import {
  Avatar,
  Menu,
  MenuItem,
  List,
  IconButton,
  Popover,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchComponent from "../search";
import { useRouter } from "next/navigation";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
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
  const router = useRouter();
  return (
    <>
      {/* Main Navbar */}
      <div className="flex justify-between items-center p-3 md:px-8   text-md text-slate-600 shadow-lg  z-[900] bg-card">
        {/* Menu Icon for Mobile */}
        <div className="flex gap-2 items-center">
          <div className=" md:hidden">
            <IconButton
              className="block "
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </div>
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
            <button
              className="flex gap-2"
              aria-label="categories"
              id="categories-button"
              onClick={handleCategoriesMouseEnter}
            >
              <p className="text-base font-normal capitalize">Categories</p>
              <ArrowDropDownIcon />
            </button>
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
              sx={{ maxWidth: 350, marginTop: 3}}
            >
              <ul className=" p-3 w-60">
                {options.map((option: any) => (
                  <li key={option} onClick={handleCategoriesMenuClose}>
                    <div className="flex justify-between p-2 text-base">
                      {option}
                      <KeyboardArrowRightIcon fontSize="small" />
                    </div>
                  </li>
                ))}
              </ul>
            </Popover>
          </div>
        </div>

        {/* Search Bar */}

        <SearchComponent />

        <button
          className="hover:font-medium p-2 px-3 hidden md:block "
          onClick={() => router.push("/admin/dashboard")}
        >
          Teach on LMS
        </button>

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
          sx={{ marginTop: 2 }}
        >
          <MenuItem
            onClick={() => {
              signOut();
              handleProfileMenuClose();
            }}
            sx={{ width: 100 }}
          >
            Logout
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default NavBarComponent;
