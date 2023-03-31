import React from 'react';
import Navbar from './Components/Navbar';
import HomePg from './HomePg';
import { Routes,Route } from 'react-router';
import login from './Components/LOGIN/login';
import signup from './Components/SIGNUP/signup.js';
import setings from './Components/SETINGS/setings';
import { createContext } from 'react';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePg} />
        <Route path='/login' Component={login} />
        <Route path='/signup' Component={signup} />
        <Route path='/setings' Component={setings} />
      </Routes>
    </div>
  )
}

export default App;
