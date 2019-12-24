import React from 'react';

import Count from 'react-countdown-to-future-date'

import './styles.css'
 
const date = new Date()

// função corrige os dias após o natal para o próximo ano
const xmassYear = () => {
    // 11 é o número equivalente à Dezembro
    if (date.getMonth() == '11' && date.getDay() >= 25){
        return 1 + date.getFullYear()
    } else {
        return date.getFullYear()
    }
}

const Countdown = () => {
    return <div>
        <h1>Days left to Christmass</h1>
        <div className='counter'>
            <Count givenDate={`Dec, 25, ${xmassYear()}`} />
        </div>
        <h1>Days left to New Year</h1>
        <div className='counter'>
            <Count givenDate={`Jan, 1, ${1 + date.getFullYear()}`} />
        </div>
    </div>
}

export default Countdown