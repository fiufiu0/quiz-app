import React, { useState, useContext } from 'react'
import { QuizContext } from '../helpers/Context';
import { Questions } from '../helpers/Question';

function Quiz() {
    const { score, setScore, setGameState } = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        console.log(score, optionChosen);
        setCurrentQuestion(currentQuestion + 1);
    };

    const finishQuiz = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState("finish");
    }


    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].question}</h1>
            <div className="Options">
                <button onClick={() => setOptionChosen("A")}>{Questions[currentQuestion].optionA}</button>
                <button onClick={() => setOptionChosen("B")}>{Questions[currentQuestion].optionB}</button>
                <button onClick={() => setOptionChosen("C")}>{Questions[currentQuestion].optionC}</button>
                <button onClick={() => setOptionChosen("D")}>{Questions[currentQuestion].optionD}</button>
            </div>
            {currentQuestion === Questions.length - 1 ? (<button className="Button" onClick={finishQuiz}>Finish Quiz</button>) : <button className="Button" onClick={nextQuestion}>Next Question</button>}

        </div>
    )
}

export default Quiz
