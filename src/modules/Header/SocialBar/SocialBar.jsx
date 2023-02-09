import YoutubeIco from "../../../assets/svg/icon-youtube";
import InstagramIco from "../../../assets/svg/icon-instagram";
import FacebookIco from "../../../assets/svg/icon-facebook";
import { Link } from "react-router-dom";

// Módulo de SocialBar
const SocialBar = () => {
    const socialBar = [
        {
            id: "SB_01",
            icon: <YoutubeIco />,
            link: ''
        },
        {
            id: "SB_02",
            icon: <InstagramIco />,
            link: ''
        },
        {
            id: "SB_03",
            icon: <FacebookIco />,
            link: ''
        }
    ]
    // Return del componente
    return (
        <div className="social">
            <div className="label">Síguenos</div>
            {
                socialBar.map(item => (
                    <Link
                        className="icon"
                        key={item.id}
                        to={item.link}
                    >
                        {item.icon}
                    </Link>
                ))
            }
        </div>
    );
}

export default SocialBar;