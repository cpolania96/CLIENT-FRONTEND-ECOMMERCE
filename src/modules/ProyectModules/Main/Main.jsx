import React from 'react'
import ContainerBanner from './ContainerBanner'
import InfoLabel from './InfoLabel'

function Main() {
    const TITLE2 = "Los más vendidos..."
    return (
        <main>
            <div className="container-content">
                <InfoLabel />
                <ContainerBanner TITLE={TITLE2} />
            </div>
        </main>
    )
}

export default Main
