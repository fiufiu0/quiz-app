import React, { useContext } from 'react';
import { QuizContext } from "../helpers/Context";
import "../App.css";



function Menu() {
    const { gameState, setGameState, name, setName } = useContext(QuizContext);

    return (
        <div className="Menu">
            <label className="Name">Enter player name to play.</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button className="Button" onClick={() => { setGameState("quiz") }} disabled={name.length === 0}>Start Quiz</button>

            <a href="https://github.com/lukaszgromadzki/quiz-app"><img src="https://i.imgur.com/mbDLKTY.png" alt="GitHub" /></a>
        </div >
    )
}

export default Menu
