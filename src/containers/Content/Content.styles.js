import styled from 'styled-components'
import { COLORS } from '../../application/GlobalStyles'

const ContentWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  background-color: ${COLORS.primary3}
`

const MoviesWrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`

export { ContentWrapper, MoviesWrapper }
