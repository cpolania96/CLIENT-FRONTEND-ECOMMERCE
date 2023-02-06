import React from 'react'
import Copyright from './Copyright'
import Form from './Form/Form'
import LogoFooter from './LogoFooter'
import MenuFooter from './Menu/MenuFooter'

function Footer() {

    return (
        <div className='footer'>
            <div className="footer-container">
                <Form />
                <MenuFooter />
                <LogoFooter />
            </div>
            <Copyright />
        </div>
    )
}

export default Footer
