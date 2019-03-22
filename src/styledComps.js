import styled from 'styled-components'

const red = '#f44336'


// widths
const widest= 1230
const mid = 820


export const FlexDisplay = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    @media(min-width: 400px){
        width: min-content;
        max-width: 100%;
    }
    @media(min-width: 900px){
        width: ${mid}px
        justify-content: unset;
    }
    @media(min-width: 1230px){
        width: ${widest}px
    }
    
`

export const Card = styled.div`
    max-width: 100%;
    min-width: 400px;
    height: 200px;
    margin: 5px;
    background-color: ${red};
    border-radius: 5px;
    @media(max-width: 400px){
        min-width: 90%
    }
`