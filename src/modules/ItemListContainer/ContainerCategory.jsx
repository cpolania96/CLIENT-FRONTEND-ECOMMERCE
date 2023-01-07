import ItemListContainer from './ItemListContainer'
import { useState } from 'react'


function ContainerCategory() {
    const [title, setTitle] = useState()

    return (
        <main>
            <div className="container-content container-detail" id='container-category'>
                <h6 className='title'>{title}</h6>
                <div className="container-items">
                    <ItemListContainer title={setTitle} />
                </div>
            </div>
        </main>
    )
}

export default ContainerCategory
