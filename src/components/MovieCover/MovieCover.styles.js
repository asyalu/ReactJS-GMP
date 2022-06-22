import styled from 'styled-components'
import { COLORS } from '../../application/GlobalStyles'

const MovieCoverStyled = styled.div`
  position: relative;
  width: 330px;
  height: 500px;
  margin-bottom: 30px;
`

const Poster = styled.img`
  width: 100%;
  height: 450px;
  object-fit: fill;
`

const MovieDescription = styled.div`
  display: grid;
  grid-template-areas:
  "A B"
  "C C";
  justify-content: space-between;
  margin-top: 20px;

  color: ${COLORS.primary5};
`

const MovieTitle = styled.span`
  opacity: 0.7;
`

const MovieGenre = styled.span`
  opacity: 0.5;
`

const MovieYear = styled.span`
  border: 1px solid ${COLORS.primary4};
  border-radius: 4px;
  padding: 2px 5px;
  opacity: 0.5;
`

export {
  MovieCoverStyled, Poster, MovieDescription, MovieTitle, MovieGenre, MovieYear
}
