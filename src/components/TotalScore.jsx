import React from 'react'
import {styled} from 'styled-components'
import { useContext } from 'react'
import { diceGameContext } from './GamePlay'

const TotalScore = () => {

  const {score} = useContext(diceGameContext)

  return (
    <Score>
          <div className="score">{score}</div>
          <div>Total Score</div>
    </Score>
  )
}

const Score = styled.div`
  width: 8rem;
  height: 9.5rem;
  text-align: center;
  div {
    font-size: 1.5rem;
    font-weight: 500;
  }
  .score {
    font-size: 100px;
  }
`;

export default TotalScore