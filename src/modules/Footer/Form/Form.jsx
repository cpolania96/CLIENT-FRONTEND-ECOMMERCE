// Imports **
import React from 'react'
import { Link } from 'react-router-dom'

// Componente del formulario del footer
function Form() {
    // Data del formulario
    const formInfo = {
        title: 'Suscríbete y recibe promociones exclusivas',
        labelName: 'Nombre',
        labelEmail: 'Email',
        termsMsg: 'Regístrate para recibir las ultimas noticias y promociones de los productos que más te gustan',
        terms: 'Términos y condiciones'
    }
    // Return del componente
    return (
        <div className="form-footer">
            <form action="">
                <ul>
                    <li>
                        <h2>{formInfo.title}</h2>
                    </li>
                    <li>
                        <label>{formInfo.labelName}:</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label>{formInfo.labelEmail}:</label>
                        <input type="text" />
                    </li>
                    <li className='terms'>
                        <input type="checkbox" />
                        <h3>{formInfo.termsMsg}
                            <Link to=''>{formInfo.terms}</Link>
                        </h3>

                    </li>
                    <li>
                        <input type="submit" value='Suscribirme' />
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default Form