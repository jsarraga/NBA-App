import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import emotion from '@rebass/preset';
import Header from './components/Header/Header';
import './App.css';


function App() {
  return (
    <ThemeProvider theme={emotion}>
      <div className="App" background-image='/components/Header/img/background.jpg'>
          <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
