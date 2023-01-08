// Imports
import { Link } from "react-router-dom";

// Módulo de gestión del menu de inicio
const Menu = () => {
    // Lista del menu
    const menuItems = [
        {
            id: 'MENU_01',
            title: 'Tienda',
            to: '/tienda'
        },
        {
            id: 'MENU_02',
            title: 'Ofertas',
            to: '/ofertas'
        },
        {
            id: 'MENU_03',
            title: 'Blog',
            to: '/blog'
        },
        {
            id: 'MENU_04',
            title: 'Conócenos',
            to: '/conocenos'
        },
        {
            id: 'MENU_05',
            title: 'Contacto',
            to: '/contacto'
        },
    ]
    // Return del componente
    return (
        <menu>
            {
                menuItems.map(item => (
                    <Link to={item.to}>
                        <h2>{item.title}</h2>
                    </Link>
                ))
            }
        </menu>
    )
}
export default Menu;