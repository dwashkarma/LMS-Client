import { alpha, styled, TextField } from '@mui/material';
import React from 'react';

// Styled TextField component
const StyledInputBase = styled(TextField)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "55ch", // Expand width for medium and larger screens
      },
    },
}));

// Styled Search component
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%", // Make sure it takes full width on smaller screens
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto", // Adjust width for larger screens
    },
}));

const SearchComponent = () => {
  return (
    <div className='hidden md:block lg:block'>
      <Search>
        <StyledInputBase
          type="text"
          name="search"
          placeholder="Search for anything..."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </div>
  );
}

export default SearchComponent;
