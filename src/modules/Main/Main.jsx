import React from 'react'
import ContainerBanner from './ContainerBanner'
import BannerIcons from './BannerIcons/BannerIcons'
import BannerCarousel from './Carousel/BannerCarousell'

function Main() {
    const TITLE2 = "Los más vendidos..."
    return (
        <div className="container-content">
            <BannerIcons />
            <BannerCarousel />
            {/* <ContainerBanner TITLE={TITLE2} /> */}
        </div>
    )
}

export default Main
