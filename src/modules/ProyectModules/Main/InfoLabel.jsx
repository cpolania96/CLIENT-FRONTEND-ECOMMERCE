import React from 'react'
import IconDelivery from '../../../assets/svg/IconDelivery'
import IconSecure from '../../../assets/svg/IconSecure'
import IconWallet from '../../../assets/svg/IconWallet'

function InfoLabel() {
    return (
        <div className="info-label">
            <div className="label l1">
                <span>
                    <IconDelivery />
                </span>
                <h6>¡Envios gratis a Bogotá y Soacha!</h6>
            </div>
            <div className="label l2">
                <span>
                    <IconSecure />
                </span>
                <h6>Compras seguras en línea</h6>
            </div>
            <div className="label last">
                <span>
                    <IconWallet />
                </span>
                <h6>Pagos contraentrega</h6>
            </div>
        </div>
    )
}

export default InfoLabel
