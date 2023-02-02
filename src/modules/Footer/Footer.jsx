import React from 'react'
import Form from './Form/Form'
import LogoFooter from './LogoFooter'
import MenuFooter from './Menu/MenuFooter'

function Footer() {
    
    return (
        <div className='footer'>
            <Form />
            <MenuFooter />
            <LogoFooter />
        </div>
    )
}

export default Footer
