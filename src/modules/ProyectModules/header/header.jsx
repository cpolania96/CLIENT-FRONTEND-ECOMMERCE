import React from "react";
import CartContainer from "../../CartWidget/CartContainer";
import Menu from "./menu";
import News from "./news";
import Profile from "../../../assets/svg/profile";
import Search from "./search";
import Social from "../../../assets/svg/social";
import Track from "../../../assets/svg/track";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <News />
            <div className="container-principal">
                <div className="principal">
                    <div className="container-first">
                        <Social />
                    </div>
                    <div className="container-second">
                        <Link to="donbigotes/">
                            <div className="container-logo">
                                <div className="logo"></div>
                            </div>
                        </Link>
                        <div className="container-search">
                            <Search />
                        </div>
                        <div className="container-tools">
                            <Profile />
                            <Track />
                            <div className="container-cart">
                                <CartContainer />
                            </div>
                        </div>
                    </div>
                    <div className="container-third">
                        <div></div>
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