import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

function CartItem({ item, borrarItem }) {
    const imageURL = "https://res.cloudinary.com/devsy44f3/image/upload/v1643168330/Products/Mesa_de_trabajo_2_l8bbxg.png"
    return (
        <div className='cart-item'>
            <div className="image">
                <img src={item.imageURL} alt="" />
            </div>
            <div className="container-descript">
                <div className="name">{item.title}</div>
                <div className="descript">Descripción</div>
            </div>
            <div className="price">
                {/* <ItemCount /> */}
                <h6>${item.price.toLocaleString('de-DE')}</h6>
            </div>
            <button className='close' onClick={() => borrarItem(item.id)} > X </button>
        </div>
    )
}

export default CartItem