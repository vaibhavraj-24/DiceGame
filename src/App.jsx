import { useState } from "react"
import StartGames from "./Components/StartGames"
import styled from "styled-components"
import GamePlay from "./Components/GamePlay";
function App() {
const [isGameStarted, setIsGameStarted] = useState(false);

const toggleGamePlay = () => {
 setIsGameStarted((prev) => !prev);


 
}

  return (
    <>
    {isGameStarted ? <GamePlay /> : <StartGames toggle={toggleGamePlay} />}   
     </>
  )
}

export default App



