import { React, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../../Context/cartContext";
// import { collection, getFirestore, getDocs, query, addDoc } from 'firebase/firestore'
import MessageCheck from './MessageCheck';
import IconHome from '../../assets/svg/IconHome';
import IconBack from '../../assets/svg/IconBack';
import { useForm } from '../../hooks/useForm';

function Checkout() {
    const { cartList, getTotal } = useContext(CartContext)
    const [orderId, setOrderId] = useState({})
    const [isBuy, setIsBuy] = useState(false)
    const [Loading, setLoading] = useState(false)

    const initialForm = {
        nombres: '',
        apellidos: '',
        direccion: '',
        email: '',
        ciudad: '',
        codigoPostal: '',
        celular: ''
    }

    const validationsForm = (form) => {
        let errors = {}
        const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        const regexNumber = /^[0-9]*(\.?)[0-9]+$/
        if (!form.nombres.trim()) {
            errors.name = '*El campo "nombre" es requerido'
        } else if (!regexName.test(form.nombres.trim())) {
            errors.name = '*El campo "nombre" no puede contener números ni carácteres especiales'
        }
        if (!form.apellidos.trim()) {
            errors.surname = '*El campo "apellido" es requerido'
        } else if (!regexName.test(form.apellidos.trim())) {
            errors.surname = '*El campo "apellidos" no puede contener números ni carácteres especiales'
        }
        if (!form.direccion.trim()) {
            errors.address = '*El campo "dirección" es requerido'
        }
        if (!form.email.trim()) {
            errors.email = '*El campo "e-mail" es requerido'
        } else if (!regexEmail.test(form.email.trim())) {
            errors.email = '*El e-mail es inválido'
        }
        if (!form.ciudad.trim()) {
            errors.city = '*El campo "ciudad" es requerido'
        }
        if (!form.codigoPostal.trim()) {
            errors.postalcode = '*El campo "código postal" es requerido'
        } else if (!regexNumber.test(form.codigoPostal.trim())) {
            errors.postalcode = '*El campo "celular" sólo puede contener números'
        }
        if (!form.celular.trim()) {
            errors.celular = '*El campo "celular" es requerido'
        } else if (!regexNumber.test(form.celular.trim())) {
            errors.celular = '*El campo "celular" sólo puede contener números'
        }



        return errors
    }

    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, validationsForm)



    const realizarCompra = async () => {
        setLoading(true)
        let orden = {};
        console.log(orderId);
        orden.buyer = form;
        orden.total = getTotal();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.title;
            const precio = cartItem.price * cartItem.cantidad;
            return { id, nombre, precio };
        });
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        await addDoc(orderCollection, orden)
            .then(res => setOrderId(() => res.id))
            .then(setTimeout(() => {
                setLoading(false)
            }, 5000))
            .finally(setIsBuy(true))
    }
    function showForm() {
        if (cartList.length === 0) {
            return (
                <>
                    <div id="empty-message">
                        <h6>Tu carrito esta vacío<br /> ¡Esperamos lo llenes pronto!</h6>
                        <div className="buttons">
                            <Link to="/donbigotes/" ><button>Elige productos</button></Link>
                        </div>
                    </div>
                </>
            )
        } else if (cartList.length !== 0) {
            function getDiv() {
                const id = orderId.toString()
                if (isBuy === false) {
                    return (
                        <>
                            <h6>Finalizar Compra</h6>
                            <div className="checkout">
                                <div className="form">
                                    <form onSubmit={realizarCompra}>
                                        <div className='row'>
                                            <label htmlFor="">Nombres: </label>
                                            <input
                                                type="text"
                                                name="nombres"
                                                id='nombres'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={form.nombres}
                                                required
                                            />
                                            {errors.name && <p id='error-label'>{errors.name}</p>}
                                        </div>
                                        <div className="row">
                                            <label htmlFor="">Apellidos: </label>
                                            <input
                                                type="text"
                                                name='apellidos'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={form.apellidos}
                                                required
                                            />
                                            {errors.surname && <p id='error-label'>{errors.surname}</p>}
                                        </div>
                                        <div className="row" >
                                            <label htmlFor="">Dirección: </label>
                                            <input
                                                type="text"
                                                name='direccion'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={form.direccion}
                                                required
                                            />
                                            {errors.address && <p id='error-label'>{errors.address}</p>}
                                        </div>
                                        <div className="row">
                                            <label htmlFor="">E-mail: </label>
                                            <input
                                                type="text"
                                                name='email'
                                                value={form.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required
                                            />
                                            {errors.email && <p id='error-label'>{errors.email}</p>}
                                        </div>
                                        <div className="row">
                                            <label htmlFor="">Ciudad: </label>
                                            <input type="text"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name='ciudad'
                                                value={form.ciudad}
                                                required
                                            />
                                            {errors.city && <p id='error-label'>{errors.city}</p>}
                                        </div>
                                        <div className="row">
                                            <label htmlFor="">Codigo postal:</label>
                                            <input
                                                type="text"
                                                name='codigoPostal'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={form.codigoPostal}
                                                required
                                            />
                                            {errors.postalcode && <p id='error-label'>{errors.postalcode}</p>}
                                        </div>
                                        <div className="row">
                                            <label htmlFor="">Celular: </label>
                                            <input
                                                type="text"
                                                name='celular'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={form.celular}
                                                required
                                            />
                                            {errors.celular && <p id='error-label'>{errors.celular}</p>}
                                        </div>
                                        <input type='submit' value="Comprar"></input>
                                    </form>

                                </div>
                                <div className="buttons">
                                    <Link to="/"> <button className='home'><IconHome /></button></Link>
                                    <Link to="/cart/"><button className='back'><IconBack /></button></Link>
                                </div>
                                <div className="resumen">
                                    <h6>Resumen</h6>
                                    <div className="resumen-content">
                                        <ul>
                                            {cartList.map(item => <><li><span className='cant'>{item.cantidad}</span><span>{item.title}</span><span className='price'>$ {item.price.toLocaleString('de-DE')}</span></li></>)}
                                        </ul>
                                    </div>
                                    <div className="total">Total: ${getTotal().toLocaleString('de-DE')}</div>
                                </div>
                            </div>
                        </>
                    )
                } else {
                    return (
                        <>
                            {Loading ?
                                <h3 id='loading-check'>Procesando pedido </h3>
                                :
                                isBuy && <MessageCheck id={id} />
                            }
                        </>
                    )
                }
            }
            return getDiv()

        }

    }
    return (
        <main>
            <div className="container-content" id='checkout'>
                {showForm()}
            </div>
        </main>
    )
}


export default Checkout