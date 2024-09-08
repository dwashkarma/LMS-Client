import React, { useState } from "react";
import { InputBase, IconButton, Paper, MenuItem } from "@mui/material";
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
    <div className="relative">
      <div>
        <InputField
          type="text"
          placeholder="Search for anything..."
          value={search}
          handleChange={handleInputChange}
          onKeyDown={() => handleSearch()}
          name="search"
          showAndornment={<SearchIcon />}
        ></InputField>
      </div>
      {/* Dropdown to show filtered results */}
      {search && filteredData.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 10,
            backgroundColor: "white",
            width: "70%",
            // border: '1px solid #ccc',
            borderRadius: "4px",
          }}
        >
          {filteredData.map((item) => (
            <MenuItem key={item.id}>{item.first_name}</MenuItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
