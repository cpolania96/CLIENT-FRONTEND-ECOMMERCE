import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { HandleAssets } from '../../../assets/HandleAssets';
import { AppContext } from '../../../Context/appContext';
import CarouselComponent from './Carousel/Carousel'

function BannerCarousel() {
  // Import del context
  const { carouselData } = useContext(AppContext)

  // Sources
  const assets = {
    IconHand: HandleAssets.src.icons.HandClick
  }

  // Mensaje botón 
  const btnMsgBanner = 'Encuentra el mejor duo para el cuidado de tus uñas'

  // Estado donde se almacena la data
  const [sources, setSources] = useState({
    ok: false,
    mobile: [],
    desktop: []
  })

  // Filtro de sources para mediaqueries
  const filterData = () => {
    if (carouselData.ok) {
      let mobileData = carouselData.src.filter(item => item.display === 'Mobile')
      let desktopData = carouselData.src.filter(item => item.display === 'Desktop')
      setSources({
        ok: true,
        mobile: mobileData,
        desktop: desktopData
      })
    } else
      setSources({
        ok: false,
        mobile: [],
        desktop: []
      })
  }
  useEffect(() => { filterData() }, [carouselData])

  // Renderizado del carousel
  const renderCarousel = () => {
    // if (!sources.ok) {
    //   return (
    //     <div className="container-offline">
    //       Ups! El servidor esta offline
    //     </div>
    //   )
    // }
    if (sources.ok) {
      return (
        <>
          <div className="carousel-container-desktop">
            <CarouselComponent items={sources.desktop} />
          </div>
          {/* <div className='btn-link-carousel'>
            <Link to=''>
              Encuentra el duo Magibel para el cuidado de tus uñas
            </Link>
          </div> */}
          <div className="carousel-container-mobile">
            <CarouselComponent items={sources.mobile} />
          </div>
          <div className='btn-link-carousel'>
            <Link to=''>
              <h2>{btnMsgBanner}</h2>
              {assets.IconHand}
            </Link>
          </div>
        </>
      )
    }
  }
  // Return del componente
  return renderCarousel()
}

export default BannerCarousel