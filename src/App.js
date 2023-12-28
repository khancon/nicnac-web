import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'; 
import HomeScreen from './screens/HomeScreen';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function MainScreen() {
  const [themeMode, setThemeMode] = React.useState('dark'); // State to manage theme mode

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#ffffff', // Replace '#YOUR_COLOR_CODE' with your desired color
      },
    },
    typography: {
      fontFamily: 'Source Sans Pro, sans-serif',
    },
  });

  const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light'); // Toggle theme mode

  return (
    <ThemeProvider theme={theme}>
        <HomeScreen toggleTheme={toggleTheme} currentTheme={themeMode}/>
    </ThemeProvider>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </Provider>
  );
};



export default App;
