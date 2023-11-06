import React from 'react';
import styled from 'styled-components';
import NumberSelector from './NumberSelector';
import TotalScore from './TotalScore';
import RoleDice from './RoleDice';
import { useState } from 'react';
import { Button, OutlineButton } from "../styled/Button";
import Rules from './Rules';



const GamePlay = () => {

  const [score , setscore] = useState (0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [error ,seterror] = useState("")
  const [showRules, setShowRules] = useState(false);
  
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min); 
  }

  const roledice = () => {
    if(!selectedNumber) {
    seterror("you have not selected any number");
    return;
  }
     const randomnumber = generateRandomNumber(1,7);
     setCurrentDice ((prev) =>  randomnumber);


   if(selectedNumber == randomnumber ){
    setscore ((prev) => prev + randomnumber);
   } else {
      setscore  ((prev) => prev-2);
 
   }

   setSelectedNumber(undefined)

  }

  const resetScore = () => {
    setscore(0);

  };
  


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector  seterror={seterror}  error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />

      </div>
      <RoleDice currentDice={currentDice} roledice={roledice}/>
      <div className="btns">
      <OutlineButton onClick={resetScore}>Reset</OutlineButton>
      <Button onClick={() => setShowRules(prev => !prev)}
      
      >{showRules ? "Hide" : "Show"} Rules </Button>
        
      </div>
    {showRules &&  <Rules/>} 
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .btns{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:20px;

  }
`;
