import React from 'react'
import CarouselComponent from './Carousel/Carousel'

function BannerCarousel() {
  const itemsDesktop = [
    {
      src: 'https://res.cloudinary.com/devsy44f3/image/upload/v1673583692/Magibell/Recursos/Inicio-Carousell/banner_4_etcskp.png',
      link: 'https://google.com/'
    },
    {
      src: 'https://res.cloudinary.com/devsy44f3/image/upload/v1673583484/Magibell/Recursos/Inicio-Carousell/banner_3_hj70xk.png',
      link: ''
    }
  ];
  const itemsMobile = [
    {
      src: 'https://res.cloudinary.com/devsy44f3/image/upload/v1674538828/Magibell/Recursos/Inicio-Carousell/Mobile/3_yj8xlf.png',
      link: ''
    },
    {
      src: 'https://res.cloudinary.com/devsy44f3/image/upload/v1674538633/Magibell/Recursos/Inicio-Carousell/Mobile/Mesa_de_trabajo_4_ftlf5o.png',
      link: ''
    }
  ]

  return (
    <>
      <div className="carousel-container-desktop">
        <CarouselComponent items={itemsDesktop}/>
      </div>
      <div className="carousel-container-mobile">
        <CarouselComponent items={itemsMobile}/>
      </div>
    </>

  )
}

export default BannerCarousel