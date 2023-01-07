import React from 'react'
import IconCheck from '../../assets/svg/IconCheck'
import IconHome from '../../assets/svg/IconHome'
import { Link } from 'react-router-dom'

function MessageCheck({ id }) {
    return (
        <div id="order-ok">
            <span><IconCheck /></span>
            <h6>¡Tu compra ha sido exitosa!</h6>
            <h6 id="title-check">Tu numero de pedido es: <br />{id}</h6>
            <span><Link to="/donbigotes/"><IconHome /></Link></span>
        </div>
    )
}

export default MessageCheck