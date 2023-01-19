// Imports
import { SwipeableDrawer } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import IconMenu from "../../../assets/svg/icon-menu";
// Módulo de gestión del menu de inicio
const Menu = () => {
    // Lista del menu
    const [open, setOpen] = useState(false)
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
        <div className="container-menu">
            <menu className="menu-desktop">
                {
                    menuItems.map(item => (
                        <Link to={item.to} key={item.id}>
                            <h2>{item.title}</h2>
                        </Link>
                    ))
                }
            </menu>
            <>
                <button
                    onClick={() => setOpen(true)}
                    className="btn-menu-mobile">
                    <IconMenu />
                </button>
                <SwipeableDrawer
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    ModalProps={{
                        keepMounted: false
                    }}
                >
                    <div className="menu-container">
                        {menuItems.map(item => (
                            <Link
                                to={item.to}
                                key={item.id}
                                onClick={() => setOpen(false)}>
                                {item.title}
                            </Link>
                        ))}

                    </div>
                </SwipeableDrawer>
            </>
        </div>
    )
}
export default Menu;