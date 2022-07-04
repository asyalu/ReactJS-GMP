import styled from 'styled-components'

const StyledMovieForm = styled.div`
  width: 1000px;
  display: grid;
  grid-template-areas:
  "A A B"
  "C C C";
  column-gap: 30px;
`

const LeftPart = styled.div`
  grid-area: A;  
`

const RightPart = styled.div`
  grid-area: B;  
`

const BotPart = styled.div`
  grid-area: C;  
`

export {
  StyledMovieForm, LeftPart, RightPart, BotPart
}
