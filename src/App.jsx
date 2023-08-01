import { useState } from 'react'
import './App.css'
import GamePlay from './components/GamePlay'
import StartGame from './components/StartGame'

function App() {

  const [isGameStarted, setIsGameStarted] = useState(true)

  return (
    <>
      {isGameStarted ? <StartGame setIsGameStarted={setIsGameStarted} /> : <GamePlay />}
    </>
  )
}

export default App
