import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom';
import Cusine from './Cusine';
import Searched from './Searched';


const Pages = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/cusine/:type' element={<Cusine />} />
        <Route path='/searched/:search' element={<Searched />} />
    </Routes>
    
  )
}

export default Pages