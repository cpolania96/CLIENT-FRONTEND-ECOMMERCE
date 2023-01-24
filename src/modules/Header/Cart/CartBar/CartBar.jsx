import { SwipeableDrawer } from '@mui/material'
import React, { useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CartContext } from '../../../../Context/cartContext';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function CartBar({ isOpen, setIsOpen }) {
    const { borrarItem, cartList } = useContext(CartContext)

    const showCart = () => {
        if (cartList.length === 0) {
            return (
                <div className="empty-cart">
                    <h6>Tu carrito está vacio <br /> ¡Llénalo!</h6>
                    <RemoveShoppingCartIcon />
                </div>
            )
        } else {
            return (
                <>
                    <h3>Productos agregados</h3>
                    {cartList.map(item => (
                        <li
                            className='item'
                            key={item.id}
                        >
                            <div className="img">
                                <img src="" alt="" />
                            </div>
                            <div className="item-detail">
                                <h4>{item.title}</h4>
                                <h5></h5>
                            </div>
                            <button
                                onClick={() => borrarItem(item.id)}
                                className='btn-delete-cartitem'>
                                <DeleteForeverIcon />
                            </button>
                        </li>
                    ))}
                </>
            )
        }
    }

    const showDetails = () => {
        if (cartList.length === 0) {
            return (
                <>
                    <li className='empty-cart-btn'>
                        <button>
                            Ir a la tienda
                        </button>
                        <button>
                            Sigue comprando
                        </button>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li className='subtotal-container'>
                        <h4>Subtotal</h4>
                        <h4>$300.000</h4>
                    </li>
                    <li className='btn-list-cart'>
                        <button>Ver carrito</button>
                        <button>Sigue comprando</button>
                    </li>
                    <li className='btn-finish'>
                        <button>
                            Finalizar compra
                        </button>
                    </li>
                </>
            )
        }
    }
    return (
        <SwipeableDrawer
            open={isOpen}
            anchor="right"
        >
            <div className='cart-container'>
                <button
                    onClick={() => setIsOpen(false)}
                    className="btn-close-cart">
                    <CloseIcon />
                </button>
                <h2>Carrito de compras</h2>
                <ul className={`cart-list ${cartList.length === 0 ? 'active-cart' : ''}`}>
                    {showCart()}
                </ul>
                <ul className={`cart-details ${cartList.length === 0 ? 'active-cart-details' : 'non-active-cart-details'}`}>
                    {showDetails()}
                </ul>
            </div>
        </SwipeableDrawer>
    )
}

export default CartBar