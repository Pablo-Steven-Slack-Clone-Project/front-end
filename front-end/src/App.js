import React from 'react';
//import { Route, Redirect } from 'react-router-dom'
import NavBar from './components/Navbar'
// import PrivateRoute from '../src/components/PrivateRoute.js'
import ChannelBar from '../src/components/ChannelBar.js'
import MainChat from '../src/components/MainChat.js'
import './App.css';

function App() {
  return (
    <>
    <NavBar />
    <ChannelBar />
    <div>
    <MainChat />
    </div>
     <h1>Nothing to see here Render</h1>
    </>
  );
}

export default App;
