import React, { useContext } from 'react';
import { QuizContext } from "../helpers/Context";
import "../App.css";

function Menu() {
    const { gameState, setGameState, name, setName } = useContext(QuizContext);

    return (
        <div className="Menu">
            <label className="Name">Player name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button className="Button" onClick={() => { setGameState("quiz") }}>Start Quiz</button>
        </div>
    )
}

export default Menu
