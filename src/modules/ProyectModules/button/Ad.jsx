import React from 'react'
import { useState } from 'react'

function Ad({ Id }) {
    const [translateXder, settranslateXder] = useState()
    const ID = Id
    const AdBtn = (ID) => {
        settranslateXder(ID.style.transform = "translate-x(-67%)")
    }
    console.log(Id);

    return (
        <button className="ad" onClick={AdBtn}>
            <svg width="9" height="17" viewBox="0 0 9 17" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.18958 1.1948L8.62484 7.97813C8.86807 8.25208 9 8.5884 9 8.93447C9 9.28054 8.86807 9.61686 8.62484 9.89081L2.18958 16.6733C2.08441 16.7761 1.95542 16.8583 1.81109 16.9146C1.66676 16.9709 1.51036 17 1.35217 17C1.19397 17 1.03757 16.9709 0.893246 16.9146C0.748917 16.8583 0.619928 16.7761 0.514761 16.6733C-0.0246992 16.1868 -0.0878277 15.3295 0.374157 14.7606L5.89597 8.93946L0.374157 3.10664C0.131545 2.83246 0 2.49623 0 2.1503C0 1.80437 0.131545 1.46815 0.374157 1.19396C0.876314 0.668396 1.68742 0.668396 2.18958 1.1948Z"
                    fill="white" />
            </svg>
        </button>

    )
}

export default Ad
