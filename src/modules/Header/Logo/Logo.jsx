// Importaciones
import React from 'react'
import { Link } from 'react-router-dom'

// Módulo contenedor del logo
function Logo() {
    // Carga de recursos
    const sources = {
        logo: {
            link: "https://res.cloudinary.com/devsy44f3/image/upload/v1673167522/Magibell/Identidad%20Corporativa/logo-magibell_qdtytw.svg",
            alt: ""
        }
    }
    // Exportación del módulo
    return (
        <Link to="/">
            <div className="container-logo">
                <img src={sources.logo.link} alt={sources.logo.alt} />
            </div>
        </Link>
    )
}
// Exportación
export default Logo