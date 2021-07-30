import React, { useContext } from 'react';
import { QuizContext } from "../helpers/Context";
import "../App.css";

function Menu() {
    const { gameState, setGameState } = useContext(QuizContext);


    return (
        <div className="Menu">
            <button className="Button" onClick={() => { setGameState("quiz") }}>Start Quiz</button>
        </div>
    )
}

export default Menu
