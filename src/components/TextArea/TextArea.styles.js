import styled from 'styled-components'
import { COLORS } from '../../application/GlobalStyles'

const StyledTextArea = styled.textarea`
  height: 120px;
  background-color: ${COLORS.primary6};
  border: none;
  outline:none;
  border-radius: 5px;
  color: ${COLORS.primary5};
  padding: 10px;
`

export { StyledTextArea }
