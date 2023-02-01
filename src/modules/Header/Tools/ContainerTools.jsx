import React from 'react'
import Profile from './Profile'
import Track from './Track'
import CartContainer from '../Cart/CartContainer'

function ContainerTools() {
    return (
        <div className="container-tools">
            <Profile />
            <Track />
            <CartContainer />
        </div>
    )
}

export default ContainerTools