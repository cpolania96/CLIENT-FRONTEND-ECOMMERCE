import BtnAdopt from "./menu-btn_adopt";
import BtnBlog from "./menu-btn_blog";
import BtnMasc from "./menu-btn_masc";
import BtnOfert from "./menu-btn_ofert";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <menu>
            <Link to="/categoria/cremas-y-balsamos"><BtnMasc /></Link>
            <Link to="/categoria/limpiadores-corporales"><BtnOfert /></Link>
            <Link to="/categoria/champus"><BtnBlog /></Link>
            <Link to="/categoria/acondicionadores"><BtnAdopt /></Link>
        </menu>
    )
}
export default Menu;