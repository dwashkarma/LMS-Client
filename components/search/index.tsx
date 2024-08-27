import { alpha, styled, TextField } from '@mui/material';
import React, { useState } from 'react';

// Styled TextField component
const StyledInputBase = styled(TextField)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + -3px${theme.spacing(1)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "54ch", // Expand width for medium and larger screens
      },
    },
}));

// Styled Search component
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:avtie": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%", // Make sure it takes full width on smaller screens
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(3),
      width: "auto", // Adjust width for larger screens
    },
}));

const SearchComponent = () => {
  const [value,setValue] = useState('');
  console.log("success get the value from search element"+setValue)

  const newValue=(e: { target: { value: React.SetStateAction<string>; }; })=>{
    setValue(e.target.value)
  }
  const searchValue = (searchItem: string)=>{
    console.log("search success",searchItem)
  }
  return (
    <div className='hidden md:block lg:block'>
      <Search>
        <StyledInputBase
          type="text"
          name="search"
          placeholder="Search for anything..."
          inputProps={{ "aria-label": "search" }}
          value={value}
          onChange={newValue}
          onKeyDown={()=>searchValue(value)}

        />
      </Search>
      <div className="flex items-center gap-4 text-2xl">
        <button onClick={()=>searchValue}>search</button>
      </div>

    </div>
  );
}

export default SearchComponent;
