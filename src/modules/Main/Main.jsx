import React from 'react'
import ContainerBanner from './ContainerBanner'
import BannerIcons from './BannerIcons/BannerIcons'
import BannerCarousel from './Carousel/BannerCarousell'

function Main() {7
    // Mensaje de bienvenida
    const msgWelcome = 'Bienvenida a tu tienda favorita de productos para el cuidado corporal'
    return (
        <div className="container-content">
            <BannerIcons />
            <BannerCarousel />
            <h2 className='msg-welcome'>{msgWelcome}</h2>
            {/* <ContainerBanner TITLE={TITLE2} /> */}
        </div>
    )
}

export default Main
