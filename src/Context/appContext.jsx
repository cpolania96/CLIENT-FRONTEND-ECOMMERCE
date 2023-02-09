// Imports **
import { useState, useEffect } from "react";
import { createContext } from "react";
import StorefrontIcon from '@mui/icons-material/Storefront';
import axios from "axios";

// Export del App Context
export const AppContext = createContext()

// Export Provider del AppContext
export const AppContextProvider = ({ children }) => {

    // Config General
    // const { URL_CONNECT_SERVER } = process.env
    // console.log(URL_CONNECT_SERVER)

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

    // Proveedor de carousel carousel
    const [carouselData, setCarouselData] = useState({
        ok: false,
        src: []
    })
    const setCarouselDataService = () => {
        const link = 'http://localhost:4000/api/ecommerce/carousel/get-sources'
        axios
            .get(link)
            .then(data => setCarouselData({
                ok: data.data.ok,
                src: data.data.src
            }))
           .catch(err => console.log(err))
    }
    useEffect(() => { setCarouselDataService() }, [])

    // Return del componente
    return (
        <AppContext.Provider
            value={{
                menu,
                logo,
                carouselData
            }}>
            {children}
        </AppContext.Provider>
    )
}
