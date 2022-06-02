import styled from 'styled-components'
import { COLORS } from '../../application/GlobalStyles'

const ButtonStyled = styled.button`
  width: ${(props) => (props.size === 'large' ? '233px' : '180px')};
  height: 57px;
  background-color: ${COLORS.primary1};
  border: none;
  border-radius: 4px;
  color: ${COLORS.primary5};
  
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    cursor: pointer; 
  }
`

export { ButtonStyled }
