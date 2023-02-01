// Imports **
import React from 'react'
import IconDelivery from '../../../assets/svg/IconDelivery'
import IconSecure from '../../../assets/svg/IconSecure'
import IconWallet from '../../../assets/svg/IconWallet'

// Módulo de iconos
function BannerIcons() {
    // Recursos
    const sources = [
        {
            id: 'BI-01',
            icon: <IconDelivery />,
            title: 'Envíos rápidos',
            subtitle: 'Recibe en 24 horas'
        },
        {
            id: 'BI-02',
            icon: <IconSecure />,
            title: 'Compras seguras',
            subtitle: 'Compra con confianza'
        },
        {
            id: 'BI-03',
            icon: <IconWallet />,
            title: 'Paga contraentrega',
            subtitle: 'Cobertura nacional'
        },

    ]

    // Return del componente
    return (
        <div className="banner-icons">
            <ul>
                {sources.map(item => (
                    <li key={item.id}>
                        <span>
                            {item.icon}
                        </span>
                        <div>
                            <h3>{item.title}</h3>
                            <h3>{item.subtitle}</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BannerIcons
