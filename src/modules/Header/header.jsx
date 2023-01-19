// Importaciones
import React from "react";
import CartContainer from "./Cart/CartContainer";
import Menu from "./Menu/Menu";
import Profile from "./Tools/Profile";
import Track from "./Tools/Track";
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
            <div className="container-header">
                <div className="container-social">
                    <SocialBar />
                </div>
                <div className="container-principal">
                    <Logo />
                    <SearchBar />
                    <div className="container-tools">
                        <Profile />
                        <Track />
                        <CartContainer />
                    </div>
                </div>
            </div>
            <Menu />
        </header>
    )
}

export default Header;