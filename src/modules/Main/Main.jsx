import React from 'react'
import ContainerBanner from './ContainerBanner'
import BannerIcons from './BannerIcons/BannerIcons'
import BannerCarousel from './Carousel/BannerCarousell'
import Title from '../../layout/Title'

function Main() {7
    // Mensaje de bienvenida
    const msgWelcome = 'ENCUENTRA TODO LO QUE NECESITAS EN UN SOLO LUGAR'
    
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
