import React from 'react';
import Navbar from './Components/Navbar';
import HomePg from './HomePg';
import { Routes,Route } from 'react-router';
import login from './Components/LOGIN/login';
import signup from './Components/SIGNUP/signup.js';
import setings from './Components/SETINGS/setings';
import TryNow from './Components/TRYNOW/trynow'



function App() {
  return (
    <div className='div'>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePg} />
        <Route path='/login' Component={login} />
        <Route path='/signup' Component={signup} />
        <Route path='/setings' Component={setings} />
        <Route path='/setings/youraccount' Component={setings} />
        <Route path='/trynow' Component={TryNow} />
      </Routes>
    </div>
  )
}

export default App;
