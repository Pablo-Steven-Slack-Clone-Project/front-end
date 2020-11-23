import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import PrivateRoute from '../src/components/PrivateRoute.js'
import ChannelBar from '../src/components/ChannelBar.js'
import './App.css';

function App() {
  return (
    <>
    <ChannelBar />
    <div>
     <h1>Test Render</h1>
    </div>
    </>
  );
}

export default App;
