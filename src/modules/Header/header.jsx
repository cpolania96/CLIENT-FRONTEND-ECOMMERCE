// Importaciones
import React from "react";
import Menu from "./Menu/Menu";
import SearchBar from "./SearchBar/SearchBar";
import Logo from "./Logo/Logo";
import SocialBar from "./SocialBar/SocialBar";
import NewsBar from "./NewsBar/NewsBar";
import ContainerTools from "./Tools/ContainerTools";

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
                    <ContainerTools />
                </div>
            </div>
            <Menu />
        </header>
    )
}

export default Header;