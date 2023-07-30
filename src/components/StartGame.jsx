import styled from 'styled-components'

const StartGame = () => {
  return (
    <StartContainer className='start_container'>
        <div className="dices">
            <img src="/images/dices.png" alt="" />
        </div>
        <div className="play">
            <h1>
                DICE GAME
            </h1>
            <Button>
                Play Now
            </Button>
        </div>
    </StartContainer>
  )
}

const StartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1182px;
    margin: 0 auto;
    height: 100vh;

    .dices{
        width: 649px;
        img{
            width: 100%;
        }
    }

    .play{
        h1{
            font-size: 96px;
            white-space: nowrap;
            font-weight: 700;
        }
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
    min-width: 220px;
    text-align: center;
    float: right;
`

export default StartGame