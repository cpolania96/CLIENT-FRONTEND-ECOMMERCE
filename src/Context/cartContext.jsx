// Creación de contexto
import { createContext, useState } from 'react';
export const CartContext = createContext([])
// Creacion del provider
export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])

  function agregarAlCarrito(items) {
    const index = cartList.findIndex(i => i.id === items.id)
    if (index > -1) {
      const cantAnt = cartList[index].cantidad
      let cantNuev = cantAnt + items.cantidad
      cartList[index].cantidad = cantNuev
      let arrN = [...cartList]
      setCartList(arrN)
    } else {
      setCartList([...cartList, items])
    }
  }

  function vaciarCarrito() {
    setCartList([])
  }

  function borrarItem(id) {
    const filtrarItem = cartList.filter((prod) => prod.id !== id)
    setCartList(filtrarItem)
  }

  function getTotal() {
    const totalCarrito = cartList.reduce((prev, curr) => prev + curr.price * curr.cantidad,
      0
    )
    return totalCarrito
  }
  function getTotalItems() {
    const totalItems = cartList.reduce((prev, curr) => prev + curr.cantidad,
      0
    )
    return totalItems
  }


  return (
    <CartContext.Provider value={{
      cartList,
      agregarAlCarrito,
      vaciarCarrito,
      borrarItem,
      getTotal,
      getTotalItems,
      setCartList
    }}>
      {children}
    </CartContext.Provider>
  )
}



