import React, { useContext } from 'react';
import { QuizContext } from "../helpers/Context";
import { Questions } from '../helpers/Question';
import "../App.css";

function Finish() {
    const { score, setScore, setGameState, name, setName } = useContext(QuizContext);

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
        setName("");
    }

    return (
        <div className="Finish">
            <h2>{name}, you finish quiz!</h2>
            <h3>Score: {score} / {Questions.length}</h3>
            <button className="Button" onClick={restartQuiz}>Restart Quiz</button>
        </div>

    )
}

export default Finish
