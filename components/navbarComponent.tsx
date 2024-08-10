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
    <div className="flex justify-between items-center gap-4 p-4 px-8  shadow ">
      <div className="font-semibold text-primary text-2xl">LMS</div>
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
