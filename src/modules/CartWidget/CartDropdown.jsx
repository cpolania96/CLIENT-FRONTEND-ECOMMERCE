import React, { useRef } from 'react'
import IconDelete from '../../assets/svg/IconDelete'
import { useContext } from 'react'
import { CartContext } from '../../Context/cartContext'
import { Link } from 'react-router-dom'

function ContainerCart() {
    const cartIsVisible = useRef()
    const { cartList, vaciarCarrito, borrarItem } = useContext(CartContext)

    function showCart() {
        if (cartList.length === 0) {
            return (
                <div id="empty-message-dropdown">
                    <h6>Tu carrito está vacio <br /> ¡Llénalo!</h6>
                </div>
            )
        } else {
            return (
                <div className="products">
                    {cartList.map(prod =>
                        <div className="item-cart">
                            <div className="image">
                                <img src={prod.imageURL} alt="" />
                            </div>
                            <div className="description">
                                <div className="name">{prod.title}</div>
                                <div className="descript"> {prod.weight}g</div>
                                <div className="price">${prod.price.toLocaleString('de-DE')}</div>
                            </div>
                            <button className='close' onClick={() => borrarItem(prod.id)}>X</button>
                            <span className='item-count'>{prod.cantidad}</span>
                        </div>)}
                </div>
            )
        }
    }

    return (
        <div id="cart-style" ref={cartIsVisible}>
            <div className="container-products">
                {showCart()}
            </div>
            <div className="container-button">
                <Link to="/cart">
                    <button>
                        Finalizar Compra
                    </button>
                </Link>
                <button className='delete-all' onClick={vaciarCarrito}>
                    <IconDelete />
                </button>
            </div>
        </div>
    )
}

export default ContainerCart

