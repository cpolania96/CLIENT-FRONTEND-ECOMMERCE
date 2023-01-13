// Imports **
import React, { useEffect, useState } from 'react'
import ArrowIco from '../../../../assets/svg/icon-arrow'

//Módulo de carousell de imagenes principal del Inicio
function ButtonCarousell({setSelector}) {
    // Recursos del componente
    const sources = {
        arrowIcon: <ArrowIco />
    }
    // Controlador de los botones
    const clickBtn = (prop) => {    
        setSelector(prop)
    }
    const buttons = [
        {
            id: 'BtnCarousell1',
            className: 'selector-iz',
            type: 'left'
        },
        {
            id: 'BtnCarousell2',
            className: 'selector-der',
            type: 'right'
        }
    ]

    // Return del componente ButtonCarousell
    return (
        <div className="buttons">
            {buttons.map(item => (
                <button
                    key={item.id}
                    className={`selector ${item.className}`}
                    onClick={() => clickBtn(item.type)}
                >
                    {sources.arrowIcon}
                </button>
            ))}
        </div>
    )
}

//Exports**
export default ButtonCarousell