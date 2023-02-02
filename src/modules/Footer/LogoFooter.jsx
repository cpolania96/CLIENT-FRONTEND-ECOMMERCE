import React, { useContext } from 'react'
import { AppContext } from '../../Context/appContext'

function LogoFooter() {
  const { logo } = useContext(AppContext)
  const { link, alt } = logo.footer || {}
  const footerMsg = 'By Magibell Team'
  return (
    <div className='logo-footer'>
      <img src={link} alt={alt} />
      <h3>{footerMsg}</h3>
    </div>
  )
}

export default LogoFooter