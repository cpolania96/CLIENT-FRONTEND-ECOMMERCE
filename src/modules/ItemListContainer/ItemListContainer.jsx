import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList/ItemList';
// import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore'

function ItemListContainer({ title }) {
   const { categoryId } = useParams()
   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(true)

   // useEffect(() => {
   //    const db = getFirestore()
   //    if (categoryId) {
   //       const queryFilter = query(collection(db, 'items'), where("category", "==", categoryId))
   //       getDocs(queryFilter)
   //          .then(res => setProducts(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
   //          .then(title("Productos"))
   //          .finally(() => setTimeout(() => setLoading(false)), 3000)
   //    } else {
   //       const queryCollection = query(collection(db, 'items'))
   //       getDocs(queryCollection)
   //          .then(res => setProducts(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
   //          .finally(() => setLoading(false))
   //    }
   // }, [categoryId])
   return (
      <>
         {loading ?
            <h3 id="loading"> Cargando </h3>
            :
            <ItemList items={products} />
         }

      </>
   )
}

export default ItemListContainer


