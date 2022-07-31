import React from 'react'
import Signin from './component/signin'
import Signup from './component/signup'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserDashboard from './component/dashboard';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/dashboard" element={<UserDashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App