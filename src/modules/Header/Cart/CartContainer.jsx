import { useContext, useState, createRef } from "react";
import ArrowIco from "../../../assets/svg/icon-arrow";
import CartIco from "../../../assets/svg/icon-cart";
import { CartContext } from "../../../Context/cartContext";
import ContainerCart from "../../CartWidget/CartDropdown";
import CartBar from "./CartBar/CartBar";

const CartContainer = () => {
    const { getTotal, getTotalItems } = useContext(CartContext)
    const [openCart, setOpenCart] = useState(false)


    const globoIsVisible = () => {
        if (getTotalItems() !== 0) {
            return (<><CartIco /><span>{getTotalItems()}</span></>)
        } else {
            return <CartIco />
        }
    }
    return (
        <div className="container-cart">
            <button
                className="cart-desktop"
                onClick={() => setOpenCart(true)}
            >
                {globoIsVisible()}
            </button>
            <div
                className="cart-mobile"
                onClick={() => setOpenCart(true)}>
                {globoIsVisible()}
            </div>
            <CartBar
                isOpen={openCart}
                setIsOpen={setOpenCart}
            />
        </div>
    )
}
export default CartContainer;