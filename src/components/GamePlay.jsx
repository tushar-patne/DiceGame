import React from 'react'
import { styled } from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import Rules from './Rules'
import { useState } from 'react'

export const diceGameContext = React.createContext();

const GamePlay = () => {

    const [errMsg, setErrMsg] = useState("");
    const [rule, showRule] = useState(false);
    const [diceValue, setDiceValue] = useState(1);
    const [score, setScore] = useState(0);
    const [selectedNum, setSelectedNum] = useState(null);

    const randomImageHandler = (e) => {
        if (!selectedNum) {
            setErrMsg("You have not selected any number");
            return;
        }
        let randomNum = Math.floor(Math.random() * 6) + 1;
        setDiceValue(randomNum);
        if (selectedNum != null && selectedNum == randomNum) {
            setScore(prevScore => prevScore + randomNum)
        } else {
            setScore(prevScore => prevScore - 2)
        }
        setSelectedNum(null)
    }

    return (
        <Main>
            <diceGameContext.Provider
                value={{
                    errMsg, setErrMsg,
                    rule, showRule,
                    diceValue, setDiceValue,
                    score, setScore,
                    selectedNum, setSelectedNum,
                    randomImageHandler
                }}
            >
                    <GameHeader>
                        <TotalScore />
                        <NumberSelector/>
                    </GameHeader>
                    <RollDice/>
                    {rule && <Rules />}
            </diceGameContext.Provider>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100vh;
    padding: 1rem 5rem ;
`

const GameHeader = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export default GamePlay