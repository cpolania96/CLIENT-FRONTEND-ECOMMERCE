// Imports **
import { useState, useEffect } from "react";
import { createContext } from "react";
import StorefrontIcon from '@mui/icons-material/Storefront';

// Export del App Context
export const AppContext = createContext()

// Export Provider del AppContext
export const AppContextProvider = ({ children }) => {

    // Funcion para setear estado

    // Proveedor del logo
    const [logo, setLogo] = useState({})
    const logoItem = {
        header: {
            link: "https://res.cloudinary.com/devsy44f3/image/upload/v1673167522/Magibell/Identidad%20Corporativa/logo-magibell_qdtytw.svg",
            alt: ""
        },
        footer: {
            link: "https://res.cloudinary.com/devsy44f3/image/upload/v1675297478/Magibell/Identidad%20Corporativa/logo_footer_vjxhcq.svg",
            alt: ""
        }
    }
    const setLogoState = (prop) => setLogo(prop)
    useEffect(() => setLogoState(logoItem), [])

    // Lista del menu
    const [menu, setMenu] = useState([])
    const menuList = [
        {
            id: 'MENU_01',
            title: 'Tienda',
            to: '/tienda',
            icon: <StorefrontIcon />
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
    const setMenuState = (prop) => setMenu(prop)
    useEffect(() => setMenuState(menuList), [])

    // Return del componente
    return (
        <AppContext.Provider
            value={{
                menu,
                logo
            }}>
            {children}
        </AppContext.Provider>
    )
}