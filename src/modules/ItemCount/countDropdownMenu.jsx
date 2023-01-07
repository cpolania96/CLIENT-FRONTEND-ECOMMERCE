import React from 'react'
import { useState } from 'react'

function CountDropdownMenu({ onAdd, buttonLabel }) {
    const [count, setCount] = useState(1)
    const [disable, setDisable] = useState(false)

    const handleCount = () => {
        setCount(count + 1)
    }
    const lessCount = () => {
        if (count <= 1) {
            setDisable(true)
        }
        else {
            setCount(count - 1)
        }
    }
    function isVisible() {
        const buttonDisable = {
            opacity: 0.9
        }
        if (disable === false) {
            <>
                <button className="btnless" onClick={lessCount(), () => onAdd(count)}>-</button>
                <button className="btnplus" onClick={handleCount(), () => onAdd(count)}>+</button>
            </>
        } else {
            <>
                <button className="btnless" style={buttonDisable}>-</button>
                <button className="btnplus" onClick={handleCount(), onAdd(count)}>+</button>
            </>
        }
    }
    return (
        <>
            <div className="ItemCount">
                {isVisible()}
            </div>
        </>
    )

}
export default CountDropdownMenu