import React, { useContext } from 'react';
import { QuizContext } from "../helpers/Context";
import { Questions } from '../helpers/Question';
import "../App.css";

function Finish() {
    const { score, setScore, setGameState } = useContext(QuizContext);

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    }

    return (
        <div className="Finish">
            <h1>You finish QUIZ!</h1>
            <h3>{score} / {Questions.length}</h3>
            <button className="Button" onClick={restartQuiz}>Restart Quiz</button>
        </div>

    )
}

export default Finish
