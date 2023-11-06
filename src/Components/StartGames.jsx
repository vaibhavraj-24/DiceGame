import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGames = ({toggle}) => {
  return (
    <Container>
     <div><img src="/public/images/dice/dices.png" /></div> 
      <div>
       <h1 className="content">Dice Game</h1>
       <Button onClick={toggle}>Play Now  </Button>

      </div>
    </Container>
  );
};

export default StartGames;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content{
  h1{
    font-size: 96px;
  }
    
  }
`;


