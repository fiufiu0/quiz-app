import './App.css';
import React, { useState } from 'react';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import Finish from './components/Finish';
import { QuizContext } from './helpers/Context';


function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="App">
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore, name, setName }}>
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "finish" && <Finish />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
