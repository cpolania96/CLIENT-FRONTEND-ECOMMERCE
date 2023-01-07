import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from './Detail.jsx';

function ItemDetailContainer() {
    const [detail, setDetail] = useState({})
    const { detailId } = useParams()
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const db = getFirestore()
    //     const queryProd = doc(db, 'items', detailId)
    //     getDoc(queryProd)
    //         .then(res => setDetail({ id: res.id, ...res.data() }))
    //         .finally(() => setTimeout(() => setLoading(false)), 3000)
    //     console.log(queryProd);
    // }, [])

    return (
        <main>
            <div className="container-detail">
                {loading ?
                    <h3 id="loading"> Cargando </h3>
                    :
                    <Detail prod={detail} />
                }
            </div>
        </main>
    )
}

export default ItemDetailContainer;
