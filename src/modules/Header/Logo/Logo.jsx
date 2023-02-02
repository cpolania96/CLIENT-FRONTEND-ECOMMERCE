// Importaciones
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../Context/appContext'

// Módulo contenedor del logo
function Logo() {
    // Carga de recursos
    const { logo } = useContext(AppContext)
    const { link, alt } = logo.header || {}

    // Return del módulo
    return (
        <div className="container-logo">
            <Link to="/">
                <img src={link} alt={alt} />
            </Link>
        </div>
    )
}
// Exportación
export default Logo