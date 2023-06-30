import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import './App.scss'
import Home from './Pages/Home/Home'
import BlogContainer from './Pages/BlogContainer/BlogContainer'
import ShopContainer from './Pages/ShopContainer/ShopContainer'
import ViewSection from './ViewSection/ViewSection'
import Bag from './Bag/Bag'
import Contact from './Pages/Contact/Contact'
import Order from './Pages/Order/Order'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path="/ShopContainer" element={<ShopContainer/>}></Route>
            <Route path="/BlogContainer" element={<BlogContainer/>}></Route>
            <Route path="/ViewSection/:id" element={<ViewSection/>}/>
            <Route path="/Bag" element={<Bag/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Order" element={<Order/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
