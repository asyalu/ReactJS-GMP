import styled from 'styled-components'
import { COLORS } from '../../application/GlobalStyles'

const StyledGenreSelection = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
  margin: 0;
  border-bottom: 2px solid  ${COLORS.primary2};
`

const Genre = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 30px;
  color: ${COLORS.primary5};
  cursor: pointer;
  border-bottom: ${(props) => (props.active === props.genre ? '2px solid red' : '')}
`

export { StyledGenreSelection, Genre }
