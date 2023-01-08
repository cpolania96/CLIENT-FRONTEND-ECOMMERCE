import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './modules/Header/Header';
import Main from './modules/Main/Main';
import Footer from './modules/ProyectModules/Footer/Footer.jsx';
import ItemDetailContainer from './modules/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './Context/cartContext';
import ContainerCategory from './modules/ItemListContainer/ContainerCategory';
import Checkout from './modules/CartWidget/Checkout'
import Cart from './modules/CartWidget/cart';

// Módulo principal de app
const App = () => {
    return (
        <CartContextProvider >
            <BrowserRouter >
                <Header />
                <Routes >
                    <Route exact path="/" element={<Main />} />
                    <Route exact path='/detalle/:detailId' element={<ItemDetailContainer />} />
                    <Route exact path='/categoria/:categoryId' element={<ContainerCategory />} />
                    <Route exact path='/cart' element={<Cart />} />
                    <Route exact path='/cart/checkout' element={<Checkout />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartContextProvider>

    )
}

export default App;
