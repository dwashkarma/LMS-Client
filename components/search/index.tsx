"use client";

import React, { useState } from "react";
import { MenuItem, Popover } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { data } from "../jsonData/Data"; // Assuming your data is coming from here
import InputField from "../shared/InputField";
import AutoCompleteComponent from "../shared/AutoCompleteComponent";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [open, setopen] = useState(false);

  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
    setopen(true);
  };

  // const handleChange = (event: any, newValue: string | null) => {
  //   console.log(newValue);
  //   console.log(event.target);
  //   setSearch(event.target.value);
  // };

  const handleSearch = () => {};
  console.log("Searching for:", search);
  const filteredData = data.filter((item) =>
    search.toLowerCase() === ""
      ? false
      : item.first_name.toLowerCase().includes(search)
  );

  return (
    <>
      <div className="relative hidden md:block ">
        <InputField
          type="text"
          placeholder="Search for anything..."
          value={search}
          width="30rem"
          handleChange={handleInputChange}
          onKeyDown={() => handleSearch()}
          name="search"
          variant="standard"
          showAndornment={<SearchIcon />}
        />
        {/* Dropdown to show filtered results */}

        {/* <Popover open={open}>
          {filteredData.map((item) => (
            <MenuItem key={item.id}>{item.first_name}</MenuItem>
          ))}
        </Popover> */}
        {/* <AutoCompleteComponent
          value={search}
          options={filteredData}
          handleChange={handleChange}
        /> */}
      </div>
    </>
  );
};

export default SearchBar;
