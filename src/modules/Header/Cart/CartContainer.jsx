import { useContext, useState, createRef } from "react";
import ArrowIco from "../../../assets/svg/icon-arrow";
import CartIco from "../../../assets/svg/icon-cart";
import { CartContext } from "../../../Context/cartContext";
import ContainerCart from "../../CartWidget/CartDropdown";

const CartContainer = () => {
    const [cartVisible, setCartVisible] = useState(false)
    const { getTotal, getTotalItems } = useContext(CartContext)

    const globoIsVisible = () => {
        const globoStyle = "translate(10, -3)"
        if (getTotalItems() !== 0) {
            return (<><CartIco /><span>{getTotalItems()}</span></>)
        } else {
            return <CartIco styles={globoStyle} />
        }
    }
    let totalPrice = getTotal()
    return (
        <div className="container-cart">
            <div className="cart-desktop"
                onMouseEnter={() => { setCartVisible(true) }}
                onMouseLeave={() => { setCartVisible(false) }}
            >
                <div className="icon">
                    {globoIsVisible()}

                </div>
                <h6>${' '}{totalPrice}</h6>
                <div className="icon-2">
                    <ArrowIco />
                </div>
                {cartVisible && <ContainerCart />}
                {/* <ContainerCart /> */}
            </div>
            <div className="cart-mobile">
                {globoIsVisible()}
            </div>
        </div>
    )
}
export default CartContainer;