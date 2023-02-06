import React from 'react'

function Copyright() {
    const year = new Date()
    const copyrightMsg = `${year.getFullYear()}® Copyright Magibell. Todos los derechos reservados `
    return (
        <div className='copyright'>
            <h3>{copyrightMsg}</h3>
        </div>
    )
}

export default Copyright