import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import NavBar from './components/Navbar'
// import PrivateRoute from '../src/components/PrivateRoute.js'
import ChannelBar from '../src/components/ChannelBar.js'
import MainChat from '../src/components/MainChat.js'
import Homepage from './components/Homepage.js'
import './App.css';

function App() {
  return (
    <>
    <Route exact path='/'>
      <Homepage />
    </Route>
    <Route path='/chatroom'>
      <NavBar />
      <ChannelBar />
      <MainChat />
    </Route>
    </>
  );
}

export default App;
