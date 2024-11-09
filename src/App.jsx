import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Products } from './pages/Products';
import { Shop } from './pages/Shop';
import { ShopCategory } from './pages/ShopCategory';
import { Cart } from './pages/Cart';
import { LoginSignup } from './pages/LoginSignup';
import { Footer } from './components/footer/Footer';
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'
import all_product from './assets/all_product';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category='men' banner={men_banner}/>}/>
        <Route path='/women' element={<ShopCategory category='women' banner={women_banner}/>}/>
        <Route path='/kids' element={<ShopCategory category='kid' banner={kid_banner}/>}/>
        <Route path='/product' element={<Products/>}>
          <Route path=':productId' element={<Products/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/> 
      </BrowserRouter>
    </div>
  );
}

export default App;