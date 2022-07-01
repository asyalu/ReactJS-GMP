import styled from 'styled-components'
import { COLORS } from '../../application/GlobalStyles'

const ButtonStyled = styled.button`
  width: ${(props) => (props.size === 'large' ? '233px' : '180px')};
  height: 57px;
  background-color: ${(props) => (props.bg || `${COLORS.primary1}`)};
  border: none;
  border-radius: 4px;
  color: ${COLORS.primary5};
  
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    cursor: pointer; 
  }
`

const OptionButton = styled.button`
  background-color: transparent;
  margin: 5px 0;
  border: none;
  cursor: pointer;
  color: ${COLORS.primary5};

  &:hover {
    background-color: ${COLORS.primary1}
  }
`

const ResetButton = styled(ButtonStyled)`
  border: 1px solid ${COLORS.primary1};
  background-color: ${COLORS.transparent};
  margin-right: 25px;
`

const IconButton = styled(ButtonStyled)`
  width: auto;
  border: none;
  background-color: ${COLORS.transparent};
  cursor: pointer;
`

export {
  ButtonStyled,
  OptionButton,
  ResetButton,
  IconButton
}
