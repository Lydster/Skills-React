import styled, { css } from "styled-components";

const red = "#f44336";
const teal = "#4db6ac";
const blue = "#03a9f4";

// widths
const widest = 1230;
const mid = 820;

export const FlexDisplay = styled.div`
    display: flex;
    flex-direction: column
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    @media(min-width: 400px){
        width: min-content;
        max-width: 100%;
        flex-direction: row;
    }
    @media(min-width: 900px){
        width: ${mid}px
        justify-content: unset;
    }
    @media(min-width: 1230px){
        width: ${widest}px
    }
`;
/**
 * props: bgColor: text, margin: num
 */
export const Card = styled.div`
  min-width: 400px;

  margin: 5px;
  background-color: ${teal};
  ${props =>
    props.bgColor &&
    css`
      background: ${props.bgColor};
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin}px;
    `}
    border-radius: 5px;
  @media (max-width: 400px) {
    min-width: 90%;
  }
`;

export const Input = styled.input`
  -webkit-appearance: none;
  padding: 5px;
  border: none;
  display: block;
  margin: 5px auto;
`;

export const Button = styled.button`
  -webkit-appearance: none;
  background-color: ${blue};
  border: none;
  padding: 5px;
  font-size: 0.7em;
`;
