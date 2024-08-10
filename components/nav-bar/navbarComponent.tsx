"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { MouseEvent, useState } from "react";
import { signOut } from "next-auth/react";
import { Avatar, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NavBarComponent: React.FC = () => {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex justify-between items-center gap-4 p-4 px-8 h-[10dvh] shadow border-b border-primary  border-opacity-15 ">
      <div className="flex items-center gap-16">
        <div className="font-semibold flex items-center gap-4 text-primary text-2xl">
          <Image src={"/logo.svg"} alt="logo" height={30} width={30} />
          <span className="text-base">Learn Online</span>
        </div>
        <div>Categories</div>
      </div>
      <div>Search</div>
      <button onClick={handleClick}>
        <div className="flex gap-2 items-center text-sm font-normal">
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
          <h2>{session?.user?.email}</h2>
          <ArrowDropDownIcon />
        </div>
      </button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            signOut();
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavBarComponent;
