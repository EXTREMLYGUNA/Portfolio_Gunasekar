/* eslint-disable no-unused-vars */
import React ,{useState} from 'react'
import Cards from './components/Cards'
import Blank from './components/Blank'
import { BrowserRouter , Routes , Route } from 'react-router-dom'


function App() {

  return <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Cards/>} />
    <Route path='/blank' element={<Blank />}/>
    <Route path = "*" element = {<h1 style={{color:"black",margin:"100px 0px 0px 500px"}} >404 page not found <sub style={{color:"red"}}>Wroung router...</sub></h1>}/>
  </Routes>
  </BrowserRouter>
  </>
}
export default App
