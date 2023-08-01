import { useState } from 'react'
import './App.css'
import GamePlay from './components/GamePlay'
import StartGame from './components/StartGame'

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame setIsGameStarted={setIsGameStarted}/>}
    </>
  )
}

export default App
