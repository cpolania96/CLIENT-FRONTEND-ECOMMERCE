import React from 'react'
import { toast, Toaster } from 'react-hot-toast'
import ContainerBanner from './ContainerBanner'
import InfoLabel from '../BannerIcons/BannerIcons'

function Main() {
    const TITLE2 = "Los más vendidos..."
    return (
        <div className="container-content">
            <InfoLabel />
            <ContainerBanner TITLE={TITLE2} />
        </div>
    )
}

export default Main
