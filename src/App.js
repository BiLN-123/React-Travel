import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './container/home/Home'
import About from './container/about/About'
import Service from './container/service/Service'
import Contact from './container/contact/Contact'


export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}
