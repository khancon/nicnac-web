import React from 'react';
import { InputBase, IconButton, Paper, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const theme = useTheme();
    const [searchQuery, setSearchQuery] = React.useState('');

    const backgroundColor = theme.palette.mode === 'dark' ? '#262626' : '#f0f0f0';

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(searchQuery); // Replace with actual search logic
    };

    return (
      <Paper
        component="form"
        elevation={0} // Set elevation to 0 to remove the shadow
        onSubmit={handleSearch}
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: backgroundColor,
          width: 500, // Adjust width as needed
          borderRadius: 20, // Rounded edges
        }}
      >
        <InputBase
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  };
  
  export default SearchBar;
  