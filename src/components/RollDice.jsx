import {styled} from "styled-components"
import {BsArrowDownSquare} from 'react-icons/bs'
import { useContext } from "react"
import { diceGameContext } from "./GamePlay"
import { PrimaryButton, SecondaryButton } from "../styled/Button"

const RollDice = () => {

    const {rule, showRule, diceValue, randomImageHandler, setScore} = useContext(diceGameContext);

  return (
    <DiceContainer>
        <img src={`/images/dice_${diceValue}.png`} alt="" onClick={randomImageHandler}/>
        <p>Click on Dice to roll</p>
        <div className='btns'>
            <SecondaryButton onClick={() => setScore(0)}>Reset Score</SecondaryButton>
            <PrimaryButton  onClick={() => showRule(prev => !prev)}>{rule ? 'Hide' : 'Show'} Rules <BsArrowDownSquare /></PrimaryButton>
        </div>
    </DiceContainer>
  )
}

const DiceContainer = styled.div`
    width: 16rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    img{
        cursor: pointer;
    }
    p{
        font-size: 24px;
        text-align: center;
    }
    div{
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
`



export default RollDice