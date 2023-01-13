import React, { useRef, useState, useEffect } from 'react';
import ButtonCarousell from './Button/ButtonCarousell';
function BannerCarousell() {
    const [selector, setSelector] = useState(null)
    let carousell = useRef()
    const sources =
    {
        desktop: [
            {
                id: 'BC-2',
                source: 'https://res.cloudinary.com/devsy44f3/image/upload/v1673583484/Magibell/Recursos/Inicio-Carousell/banner_3_hj70xk.png'
            },
            {
                id: 'BC-3',
                source: 'https://res.cloudinary.com/devsy44f3/image/upload/v1673583692/Magibell/Recursos/Inicio-Carousell/banner_4_etcskp.png'
            },
        ],
        mobile: [
            {
                id: 'BCm-1',
                source: 'https://res.cloudinary.com/devsy44f3/image/upload/v1673558609/Magibell/Recursos/Inicio-Carousell/2_saga5z.jpg'
            }
        ]
    }
    console.log(carousell);


    const btnSelected = (prop) => {
        let windowWidth = window.innerWidth
        if (prop === 'right') {
            carousell.current.scrollLeft = carousell.current.scrollLeft + windowWidth
        } else if (prop === 'left') {
            carousell.current.scrollLeft = carousell.current.scrollLeft - windowWidth
        }
    }
    useEffect(() => {
        btnSelected(selector)
    }, [selector])


    return (
        <div className="banner-carousell">
            <ButtonCarousell setSelector={setSelector} selector={selector} />
            <div
                className='view'
                ref={carousell}
            >
                {
                    sources.desktop.map(item => (
                        <>
                            <img key={item.id} src={item.source} alt="" />
                            <div className="container-indicator">
                                {sources.desktop.map(ind => (
                                <div
                                key={ind.id}
                                    className={`indicator`} 
                                >
                                </div>
                                ))}
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default BannerCarousell
