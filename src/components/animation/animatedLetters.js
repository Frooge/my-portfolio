import React from 'react'

import './animatedLetters.scss'

export default function AnimatedLetters({ text, idx}) {
    var textArr = text.split('');
    return (
        <span>
            {
                textArr.map((char, i) => (
                    <span key={char + i} className={`text-animate _${i + parseInt(idx, 10)}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}
