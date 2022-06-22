import styled from 'styled-components'
import { COLORS } from '../../application/GlobalStyles'

const StyledSorting = styled.div`
  width: 270px;
  height: 60px;
  display flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid  ${COLORS.primary2};
`

const SortBy = styled.div`
  color: ${COLORS.primary5};
  opacity: 0.6;
  text-transform: uppercase;
`

const ReleaseDateButton = styled.div`
  width: 140px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${COLORS.primary5};
`

export {
  StyledSorting, SortBy, ReleaseDateButton
}
