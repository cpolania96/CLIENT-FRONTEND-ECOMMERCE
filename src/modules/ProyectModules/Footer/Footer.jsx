import React from 'react'
import { Link } from 'react-router-dom'
import IconHome from '../../../assets/svg/IconHome'

function Footer() {
    const mensajeBanner = "Suscríbete a nuestro boletín y recibe un cupón del 20% de descuento"
    const mensajeBoton = "Quiero mi cupón"
    // const BannerPayment = require('./bannerpayment.png')
    // const bannerLogo = require('./bannerlogo.png')
    const infoTitle = "Información"
    const paymentTitle = "Medios de pago"
    const contactTitle = "Contacto"
    const footerInfo = "Copyrigth © 2022 Don Bigotes. Todos lo derechos reservados. Desarrollado por Camilo Polania"
    return (
        <div className='footer'>
            <div className="banner-discount">
                <div className="banner_container">
                    <div className="message">{mensajeBanner}</div>
                    <button>
                        {mensajeBoton}
                    </button>
                </div>
            </div>
            <div className="footer-row_1">
                <div className="f1 footer-logo">
                    <img src="" alt="" />
                </div>
                <div className="f1 footer-nav">
                    <div className='nav1 info'>
                        <h6>{infoTitle}</h6>
                        <div className="container-info">
                            <ul>
                                <li>¿Quienes somos?</li>
                                <li>Política de entregas</li>
                                <li>Términos y condiciones</li>
                                <li>Devoluciones y garantía</li>
                            </ul>
                        </div>
                    </div>
                    <div className='nav1 contact'>
                        <h6>{contactTitle}</h6>
                        <div className='container-contact'>
                            <ul>
                                <li className='item'><span></span>Bogotá-Colombia</li>
                                <li className='item'><span></span>info@donbigotes.co</li>
                                <li className='item container-info'>
                                    <h6 className='item_title'>Escríbenos al whatsapp:</h6>
                                    <h6 className='item_info'>+57 3204571674</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="btn-home">
                        <Link to="/">
                            <IconHome />
                        </Link>
                    </div>
                </div>
                <div className="f1 footer-payment">
                    <h6 className='payment_title'>{paymentTitle}</h6>
                    <img src="" className="payment" alt="" />
                </div>
            </div>
            <div className="footer-info">
                <div className="info">
                    {footerInfo}
                </div>
            </div>

        </div>
    )
}

export default Footer
