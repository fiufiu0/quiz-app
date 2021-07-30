import './App.css';
import React, { useState } from 'react';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import Finish from './components/Finish';
import { QuizContext } from './helpers/Context';


function App() {
  const [gameState, setGameState] = useState("menu");
  return (
    <div className="App">
      <h1>Quiz App</h1>

      <QuizContext.Provider value={{ gameState, setGameState }}>
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "finish" && <Finish />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
