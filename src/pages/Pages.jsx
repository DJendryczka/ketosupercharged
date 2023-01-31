import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom';
import Cusine from './Cusine';


const Pages = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/cusine/:type' element={<Cusine />} />
    </Routes>
    
  )
}

export default Pages