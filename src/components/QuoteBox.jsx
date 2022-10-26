import React, { useState } from 'react';
import quotes from '../quotes.json'


const QuoteBox = ({ getRandomInt }) => {

    let color = `rgb(${getRandomInt(256)} ${getRandomInt(255)} ${getRandomInt(255)})`

    document.body.style = `background: ${color}`

    const numberQuotes = quotes.length

    const [currentQuote, setCurrentQuote] = useState(getRandomInt(numberQuotes))

    const randomQuote = () => setCurrentQuote(getRandomInt(numberQuotes))

    return (
        <div style={{ color: color }}>
            <div className='d-flex gap-3'>
                <i className="fa-solid fa-quote-left" style={{fontSize:'3rem'}}></i>
                <p style={{textAlign:'justify', fontSize:'2rem', fontWeight:'bold'}}>{`${quotes[currentQuote].quote}`}</p> 
            </div>
            <p className='text-end fw-bold fst-italic' style={{fontSize:'2.5rem'}}>{`${quotes[currentQuote].author}`}</p>
            <div className='d-flex justify-content-end'>
                <button onClick={randomQuote} className='btn shadow rounded-4' style={{ color: 'white', background: `${color}` }}>
                    <i className="fa-solid fa-forward"></i>
                </button>
            </div>
        </div>
    );
};

export default QuoteBox;