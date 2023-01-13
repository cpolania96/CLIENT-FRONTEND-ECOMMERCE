import React from 'react'
import ContainerBanner from './ContainerBanner'
import BannerIcons from './BannerIcons/BannerIcons'
import BannerCarousell from './Carousell/BannerCarousell'

function Main() {
    const TITLE2 = "Los más vendidos..."
    return (
        <div className="container-content">
            <BannerIcons />
            <BannerCarousell />
            <ContainerBanner TITLE={TITLE2} />
        </div>
    )
}

export default Main
