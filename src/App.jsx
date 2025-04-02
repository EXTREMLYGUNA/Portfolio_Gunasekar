/* eslint-disable no-unused-vars */
import React ,{useState} from 'react'
import Cards from './components/Cards'
import Blank from './components/Blank'
import { BrowserRouter , Routes , Route, Navigate } from 'react-router-dom'


function App() {

  return <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Cards/>} />
    <Route path='/blank' element={<Blank />}/>
    <Route path = "*" element = {<Navigate to='/'/>}/>
  </Routes>
  </BrowserRouter>
  </>
  //<h1 style={{color:"black",margin:"100px 0px 0px 500px"}} >404 page not found <sub style={{color:"red"}}>Wroung router...</sub></h1>
}
export default App
