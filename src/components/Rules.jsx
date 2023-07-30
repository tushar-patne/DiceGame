import React from 'react'
import {styled} from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h1>How to play dice game</h1>
        <div>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </RulesContainer>
  )
}

const RulesContainer = styled.div`
    width: 49.5rem;
    height: 13rem;
    background-color: #FBF1F1;
    padding: 1.2rem;
    margin: 0 auto;
    h1{
        font-size: 24px;
        font-weight: 700;
        padding-bottom: 1.3rem;
    }
`

export default Rules