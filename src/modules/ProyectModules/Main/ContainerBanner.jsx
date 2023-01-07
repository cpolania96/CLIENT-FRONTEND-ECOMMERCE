import Ad from '../button/Ad'
import At from '../button/At'
import ItemListContainer from '../../ItemListContainer/ItemListContainer'

function ContainerBanner({ TITLE }) {
    const ID = "cards"
    return (
        <div className="banner">
            <div className="title">
                <h6>{TITLE}</h6>
                <div className="selector">
                </div>
            </div>
            <div className="container-cards">
                <div className={ID}>
                    <ItemListContainer />
                </div>
            </div>
        </div>
    )
}

export default ContainerBanner
