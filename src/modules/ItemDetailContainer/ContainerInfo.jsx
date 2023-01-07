import React from 'react'
import IconInfo from '../../assets/svg/IconInfo'
import IconMessages from '../../assets/svg/IconMessages'

function ContainerInfo() {
    const titleInfo = "Información del producto"
    const titleComments = "Opiniones y preguntas"
    let productInfo = "info"
    return (
        <div className="container-comments">
            <div className='comments'>
                <h6><span><IconMessages /></span>{titleComments}</h6>
                <div className="comments-body">

                </div>

            </div>
            <div className='info-product'>
                <h6><span><IconInfo /></span>{titleInfo}</h6>
                <div className='info'>
                    <div className='info-title'>
                        <div className="title">Beneficios</div>
                        <div className="title">Descripción</div>
                        <div className="title">Detalles</div>
                    </div>
                    <div className='container-info'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed sapiente suscipit sunt alias quo earum porro delectus itaque est hic iusto, ut pariatur eos maiores rem! Quas, eius ab.
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContainerInfo
