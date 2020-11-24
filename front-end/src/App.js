import React from 'react';
import { Route} from 'react-router-dom'
import NavBar from './components/Navbar'
import PrivateRoute from '../src/components/PrivateRoute.js'
import ChannelBar from '../src/components/ChannelBar.js'
import MainChat from '../src/components/MainChat.js'
import Homepage from './components/Homepage.js'
import MessageForm from './components/MessageForm'
import './App.css';

function App() {

  return (
    
      <>
      <Route exact path='/'>
        <Homepage />
      </Route>

      <PrivateRoute path='/chatroom'>
        <div className="marginLeftAdjustment">
        <NavBar />
        <MainChat />
        <MessageForm />
        </div>
        <ChannelBar />
      </PrivateRoute>

      {/* <PrivateRoute path='/profile'>
        <Profile />
      </PrivateRoute> */}


    </>
    
  );
}

export default App;

