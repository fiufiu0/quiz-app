import './App.css';
import React, { useState } from 'react';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import Finish from './components/Finish';
import { QuizContext } from './helpers/Context';


function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h3>Quiz App in React</h3>

      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "finish" && <Finish />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
