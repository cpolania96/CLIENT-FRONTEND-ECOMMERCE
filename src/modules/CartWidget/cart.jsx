import React from 'react'
import CartIco from '../../assets/svg/icon-cart';
import CartItem from './CartItem';
import { CartContext } from '../../Context/cartContext'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
    const { cartList, vaciarCarrito, borrarItem, getTotal } = useContext(CartContext)

    function showCart() {
        if (cartList.length === 0) {
            return (
                <div id="empty-message">
                    <h6 id='empty-label'>Tu carrito esta vacío<br /> ¡Esperamos lo llenes pronto!</h6>
                </div>
            )
        } else {
            return (
                <div className="list">
                    {cartList.map(item => <CartItem item={item} borrarItem={borrarItem} />)}
                </div>
            )
        }
    }

    return (
        <main>
            <div className="container-content" id='container-cart'>
                <h6><span><CartIco /></span>Mi carrito</h6>
                <div className='cart'>
                    <div className='cart-list'>
                        {showCart()}
                    </div>
                    <div className='cart-checkout'>
                        <h6>El valor total de tu compra es: <br />${getTotal().toLocaleString('de-DE')}</h6>
                        <div className='options'>
                            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                            <Link to="donbigotes/"><button>Seguir Comprando</button></Link>
                            <Link to="/cart/checkout"><button>Finalizar compra</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Cart;