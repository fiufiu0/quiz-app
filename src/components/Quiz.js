import React, { useState } from 'react'
import { Questions } from '../helpers/Question';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].question}</h1>
            <div className="Options">
                <button onClick={() => setOptionChosen("A")}>{Questions[currentQuestion].optionA}</button>
                <button onClick={() => setOptionChosen("B")}>{Questions[currentQuestion].optionB}</button>
                <button onClick={() => setOptionChosen("C")}>{Questions[currentQuestion].optionC}</button>
                <button onClick={() => setOptionChosen("D")}>{Questions[currentQuestion].optionD}</button>
            </div>
            <button>Next Question</button>
        </div>
    )
}

export default Quiz
