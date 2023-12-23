// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <p>
//             Edited!
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'; // Adjust the path to your store
// import { Button as AntdButton } from 'antd';
import NavBar from './components/NavBar';
// import CustomButton from './components/Button'
import './App.css'; // Include if you have App-specific CSS
import HomeFeed from './components/HomeFeed';
// import SideBar from './components/SideBar';
// import VideoFeed from './components/VideoFeed';

function HomeScreen() {
  // const handleCustomButtonClick = () => {
  //   console.log("Custom Button clicked!");
  // };

  return (
    <div style={styles.container}>
      <NavBar/>
      <HomeFeed/>
      {/* <HomeScreen/> */}
      {/* <p style={{color: '#ffffff'}}>Home Screen</p>
      <CustomButton text="Ant Button" onClick={handleCustomButtonClick}/>
      <AntdButton style={styles.greenButton}>
        <span style={styles.buttonText}>My Green Button</span>
      </AntdButton>     */}
    </div>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </Provider>
  );
};


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1f1f1f',
  },
  text: {
    // Additional styles for the text if needed
    marginBottom: '10px', // Space between text and button
  },
  greenButton: {
    backgroundColor: 'green',
    borderRadius: '15px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    padding: '25px 20px',
    display: 'flex',        // Added for centering text
    justifyContent: 'center', // Added for centering text
    alignItems: 'center',    // Added for centering text
  },
  buttonText: {
    textAlign: 'center', // Center align text
  },
};



export default App;
