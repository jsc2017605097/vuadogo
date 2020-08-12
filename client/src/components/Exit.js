import React from 'react'
import CancelSVG from '../images/cancel-24px.svg'

export default function Exit({ handleClick }) {
    return (
        <div className='exit' onClick={handleClick}>
            <img src={CancelSVG} alt='Exit' />
        </div>
    )
}
