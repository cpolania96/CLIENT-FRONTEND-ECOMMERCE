// Imports **
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../Context/appContext'

// Mdódulo del menu del footer
function MenuFooter() {

    // Menu 
    const menuTitle = 'Navegar'
    const { menu } = useContext(AppContext)
    
    // Return del componente
    return (
        <div className='menu-footer'>
            <h2>
                {menuTitle}
            </h2>
            <ul>
                {
                    menu.map(item => (
                        <li key={item.id}>
                            <Link to={item.to}>
                                <h3>{item.title}</h3>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MenuFooter