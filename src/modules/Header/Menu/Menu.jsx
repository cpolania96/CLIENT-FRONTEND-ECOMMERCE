// Imports
import { SwipeableDrawer } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import IconMenu from "../../../assets/svg/icon-menu";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PinDropIcon from '@mui/icons-material/PinDrop';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from "react";
import { AppContext } from "../../../Context/appContext";

// Módulo de gestión del menu de inicio
const Menu = () => {
    // Lista del menu
    const [open, setOpen] = useState(false)
    const { menu } = useContext(AppContext)

    const menuSecond = [
        {
            id: 'MS_01',
            title: 'Ingresar',
            icon: <AssignmentIndIcon />,
            to: 'auth'
        },
        {
            id: 'MS_01',
            title: 'Sigue tu pedido',
            icon: <PinDropIcon />,
            to: 'seguimiento'
        }
    ]

    // Return del componente
    return (
        <div className="container-menu">
            <menu className="menu-desktop">
                {
                    menu.map(item => (
                        <Link to={item.to} key={item.id}>
                            <h2>{item.title}</h2>
                        </Link>
                    ))
                }
            </menu>
            {/* Menu mobile */}
            <>
                <button
                    onClick={() => setOpen(true)}
                    className="btn-menu-mobile"
                >
                    <IconMenu />
                </button>
                <SwipeableDrawer
                    className="menu-mobile-swip"
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                >
                    <div className="menu-container">
                        <ul className="menu-primary">
                            {menu.map(item => (
                                <li>
                                    <Link
                                        to={item.to}
                                        key={item.id}
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.icon}
                                        <h2>
                                            {item.title}
                                        </h2>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="menu-secondary">
                            {menuSecond.map(item => (
                                <li key={item.id}>
                                    <Link
                                        to={item.to}
                                        onClick={() => setOpen(false)}>
                                        {item.icon}
                                        <h2>{item.title}</h2>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button
                            className="btn-menu-close"
                            onClick={() => setOpen(false)}>
                            <CloseIcon />
                        </button>
                    </div>
                </SwipeableDrawer>
            </>
        </div>
    )
}
export default Menu;