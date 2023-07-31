import React from "react";
import { styled } from "styled-components";
import { useContext } from "react";
import { diceGameContext } from "./GamePlay";

const NumberSelector = () => {
  const {selectedNum, setSelectedNum, errMsg, setErrMsg} = useContext(diceGameContext);
  const select_numbers = [1, 2, 3, 4, 5, 6];

  const selectNumHandler = (num) => {
    setSelectedNum(num);
    setErrMsg("");
  }

  return (
    <NumberSelection>
      <p className="errMsg">{errMsg}</p>
      <ul className="select_numbers">
        {select_numbers.map((num, index) => (
          <li
            key={index}
            className={num == selectedNum ? "secondary" : "primary"}
            onClick={() => selectNumHandler(num)}
          >
            {num}
          </li>
        ))}
      </ul>
      <p>Select Number</p>
    </NumberSelection>
  );
};

const NumberSelection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 2rem;

  ul {
    display: flex;
    gap: 24px;
    font-size: 24px;
    font-weight: 700;
    li {
      list-style: none;
      padding: 18px 0;
      width: 4.5rem;
      height: 4.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .primary {
      border: 1px solid #000;
    }
    .secondary {
      color: #fff;
      background-color: #000;
    }
  }
  p {
    font-weight: 700;
  }

  .errMsg{
    font-weight: 500;
    font-size: 24px;
    color: #ff0c0c;
  }
`;

export default NumberSelector;
