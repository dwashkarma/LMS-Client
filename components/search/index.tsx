import React, { useState } from 'react';
import { InputBase, IconButton, Paper, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { data } from '../jsonData/Data'; // Assuming your data is coming from here

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleInputChange = (e:any) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', search);
  };
  const filteredData = data.filter((item) =>
    search.toLowerCase() === '' ? false : item.first_name.toLowerCase().includes(search)
  );

  return (
    <div className='relative  md:block lg:block'>
      <Paper
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '24px',    
          padding: '2px 4px',       
          width: '100%',    
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
          maxWidth: { xs: '50%', sm: '60%', md: '80%', lg: '100%' },
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for anything..."
          inputProps={{ 'aria-label': 'search for anything' }}
          value={search}
          onChange={handleInputChange} 
          onKeyDown={() => handleSearch()} 
        />

        <IconButton
          type="button"
          sx={{ p: '10px' }}
          aria-label="search"
          onClick={handleSearch} 
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      {/* Dropdown to show filtered results */}
      {search && filteredData.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: 10,
            backgroundColor: 'white',
            width: '70%',
            // border: '1px solid #ccc',
            borderRadius: '4px',
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
