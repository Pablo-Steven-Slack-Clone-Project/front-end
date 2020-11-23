import React from 'react';
//import { Route, Redirect } from 'react-router-dom'
import NavBar from './components/Navbar'
import PrivateRoute from '../src/components/PrivateRoute.js'
import ChannelBar from '../src/components/ChannelBar.js'
import './App.css';

function App() {
  return (
    <>
    <ChannelBar />
    <div>
      <NavBar />
     <h1>Nothing to see here Render</h1>
    </div>
    </>
  );
}

export default App;
