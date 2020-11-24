import React from 'react';
//import { Route, Redirect } from 'react-router-dom'
import NavBar from './components/Navbar'
//import PrivateRoute from '../src/components/PrivateRoute.js'
import ChannelBar from '../src/components/ChannelBar.js'
import MainChat from '../src/components/MainChat'
import MessageFrom from '../src/components/MessageForm'
import './App.css';

function App() {
  return (
    <>
    <div className="marginLeftAdjustment">
    <NavBar  />
    <MainChat />
    <MessageFrom />
    </div>
    <ChannelBar style={{position:'relative'}}/>
    
  
    
    </>
  );
}

export default App;
