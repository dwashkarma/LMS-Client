"use client";
import DrawerComponent from "@/components/drawer";
import NavBarComponent from "@/components/nav-bar/navbarComponent";
import { useState, MouseEvent } from "react";

// Options for the categories dropdown
const options = [
  "NextJs",
  "ReactJs",
  "Python",
  "Web Development",
  "NestJs",
  "Figma (UI/UX)",
];

type Props = {};

export default function Layout({}: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [categoriesAnchorEl, setCategoriesAnchorEl] =
    useState<null | HTMLElement>(null);
  const categoriesOpen = Boolean(categoriesAnchorEl);

  /*for the drawer open and close*/
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  /* for the categories option open section  */
  const handleCategoriesMouseEnter = (event: MouseEvent<HTMLButtonElement>) => {
    setCategoriesAnchorEl(event.currentTarget);
  };
  const handleCategoriesMenuClose = () => {
    setCategoriesAnchorEl(null);
  };
  const handleProfileMenuClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <NavBarComponent
        anchorEl={anchorEl}
        categoriesAnchorEl={categoriesAnchorEl}
        categoriesOpen={categoriesOpen}
        handleCategoriesMenuClose={handleCategoriesMenuClose}
        handleCategoriesMouseEnter={handleCategoriesMouseEnter}
        handleProfileMenuClose={handleProfileMenuClose}
        options={options}
        handleProfileMenuClick={handleProfileMenuClick}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* <SideBarComponent /> */}
      {/* Drawer Menu for Mobile */}
      <DrawerComponent
        categoriesAnchorEl={categoriesAnchorEl}
        categoriesOpen={categoriesOpen}
        drawerOpen={drawerOpen}
        handleCategoriesMenuClose={handleCategoriesMenuClose}
        handleCategoriesMouseEnter={handleCategoriesMouseEnter}
        handleDrawerClose={handleDrawerClose}
        options={options}
      />
    </div>
  );
}
