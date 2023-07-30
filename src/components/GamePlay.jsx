import React from 'react'
import {styled} from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import Rules from './Rules'
import { useState } from 'react'

const GamePlay = () => {
    
    const [errMsg, setErrMsg]       = useState("");
    const [rule, showRule]          = useState(false);
    const [diceValue, setDiceValue] = useState(1);
    const [score, setScore]         = useState(0);
    const [selectedNum, setSelectedNum] = useState(null);

    const randomImageHandler = (e) => {
        if(!selectedNum){
            setErrMsg("You have not selected any number");
            return;
        }
        let randomNum = Math.floor(Math.random()*6) + 1;
        setDiceValue(randomNum);
        if(selectedNum!=null && selectedNum == randomNum){
            setScore(prevScore => prevScore+randomNum)
        }else{
            setScore(prevScore => prevScore-2)
        }
        setSelectedNum(null)
    }


  return (
    <Main>
        
        <GameHeader>
            <TotalScore score={score}/>
            <NumberSelector 
                selectedNum={selectedNum} 
                setSelectedNum={setSelectedNum} 
                errMsg={errMsg}
                setErrMsg={setErrMsg}
            />
        </GameHeader>
        <RollDice 
            rule={rule} 
            showRule={showRule} 
            diceValue={diceValue} 
            randomImageHandler={randomImageHandler} 
            setScore={setScore} 
        />
        {rule && <Rules/>}
    </Main>
  )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    height: 100vh;
    padding: 4rem 5rem ;
`

const GameHeader = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export default GamePlay