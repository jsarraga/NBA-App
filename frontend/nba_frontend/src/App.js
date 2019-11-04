import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme'
import { Box } from 'rebass'
import Header from './components/Header/Header';
import './App.css';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <div className="App"> 
            <Header />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
