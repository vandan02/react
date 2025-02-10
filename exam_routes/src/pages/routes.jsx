
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Details from './details'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
             <Route path='/Signup' element={<Signup/>}/>
             <Route path="/product/:id" element={<Details />} />
           
        </Routes>
      
    </div>
  )
}

export default AllRoutes
