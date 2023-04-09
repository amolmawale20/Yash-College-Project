import React from 'react'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './Pages/SignUp'

import SignIn from './Pages/SignIn'
import MyProperties from './Pages/MyProperties'
import PropertyRegister from './Pages/PropertyRegister'
const App = () => {
  return (

    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/myproperties' element={<MyProperties />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/LogOut' element={<SignIn />} />
        <Route path='/registerproperty' element={<PropertyRegister/>}/>
      </Routes>
    </BrowserRouter>


  );

}

export default App;








  

