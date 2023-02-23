import React from 'react'
import ContainerBanner from './ContainerBanner'
import BannerIcons from './BannerIcons/BannerIcons'
import BannerCarousel from './Carousel/BannerCarousell'
import Title from '../../layout/Title'

function Main() {7
    // Mensaje de bienvenida
    const msgWelcome = 'BIENVENIDA A TU TIENDA FAVORITA DE PRODUCTOS PARA EL CUIDADO CORPORAL'
    
    return (
        <div className="container-content">
            <BannerIcons />
            <BannerCarousel />
            <Title msg={msgWelcome}/>
            {/* <ContainerBanner TITLE={TITLE2} /> */}
        </div>
    )
}

export default Main
