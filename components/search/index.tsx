import React, { useState } from "react";
import {
  InputBase,
  IconButton,
  Paper,
  MenuItem,
  MenuList,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { data } from "../jsonData/Data"; // Assuming your data is coming from here
import InputField from "../shared/InputField";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", search);
  };
  const filteredData = data.filter((item) =>
    search.toLowerCase() === ""
      ? false
      : item.first_name.toLowerCase().includes(search)
  );

  return (
    <>
      <div className="relative ">
        <InputField
          type="text"
          placeholder="Search for anything..."
          value={search}
          handleChange={handleInputChange}
          onKeyDown={() => handleSearch()}
          name="search"
          showAndornment={<SearchIcon />}
        />
        {/* Dropdown to show filtered results */}

        <div
          style={{
            position: "absolute",
            top: "100%",
            width: "100%",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        >
          {filteredData.map((item) => (
            <MenuItem key={item.id}>{item.first_name}</MenuItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
