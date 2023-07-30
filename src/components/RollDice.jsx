import {styled} from "styled-components"
import {BsArrowDownSquare} from 'react-icons/bs'

const RollDice = ({showRule, diceValue, randomImageHandler, setScore}) => {

  return (
    <DiceContainer>
        <img src={`/images/dice_${diceValue}.png`} alt="" onClick={randomImageHandler}/>
        <p>Click on Dice to roll</p>
        <div className='btns'>
            <Button onClick={() => setScore(0)}>Reset Score</Button>
            <Button  onClick={() => showRule(prev => !prev)}>Show Rules <BsArrowDownSquare /></Button>
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

const Button = styled.button`
    all: unset;
    outline: none;
    cursor: pointer;
    color: #fff;
    background-color: #000;
    padding: 10px 18px;
    border-radius: 5px;
    min-width: 12rem;
    text-align: center;
    float: right;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

export default RollDice