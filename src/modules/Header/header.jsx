// Importaciones
import React from "react";
import CartContainer from "../CartWidget/CartContainer";
import Menu from "./Menu/Menu";
import Profile from "../../assets/svg/profile";
import Track from "../../assets/svg/track";
import SearchBar from "./SearchBar/SearchBar";
import Logo from "./Logo/Logo";
import SocialBar from "./SocialBar/SocialBar";
import NewsBar from "./NewsBar/NewsBar";

// Modulo contenedor de header
const Header = () => {
    
    // Return del componente
    return (
        <header>
            <NewsBar />
            <div className="container-principal">
                <div className="principal">
                    <div className="container-first">
                        <SocialBar />
                    </div>
                    <div className="container-second">
                        <Logo />
                        <div className="container-search">
                            <SearchBar />
                        </div>
                        <div className="container-tools">
                            <Profile />
                            <Track />
                            <div className="container-cart">
                                <CartContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-menu">
                <Menu />
            </div>
        </header>
    )
}

export default Header;