import styled from 'styled-components'
import { COLORS } from '../../application/GlobalStyles'

const ContentWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  background-color: ${COLORS.primary3};
`

const MoviesWrapper = styled.div`
  width: 90%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, 330px);
  justify-content: space-between;
  padding-bottom: 50px;
`

const NumberOfFilms = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  margin: 15px 0;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  color: ${COLORS.primary5};
`

const GenresSortWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
`

export {
  ContentWrapper, MoviesWrapper, NumberOfFilms, GenresSortWrapper
}
