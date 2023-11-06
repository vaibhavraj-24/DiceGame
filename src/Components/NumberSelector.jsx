import { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({  seterror , error ,  selectedNumber, setSelectedNumber }) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    const numberSelectorHandler = (value) => {
        setSelectedNumber(value);
        seterror("");
    }
    
    console.log(selectedNumber);
    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
        <div className="flex">
            {
                arrNumber.map((value, i) => (
                    <Box
                    issSelected={value == selectedNumber}
                    
                    
                    key={i} onClick={() => numberSelectorHandler(value)}>
                        {value}
                    </Box>
                ))
            }
        </div >
        <p>Select Number</p>
        </NumberSelectorContainer>
    );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
.error {
    color: red;
}
.flex {
    display: flex;
    gap: 24px;
}
p {
    font-size: 24px;
    font-weight: 700; // Corrected value
}



`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=> props.issSelected ? "black" : "white"};
    color: ${(props)=> !props.issSelected ? "black" : "white"};;
`;
