import styled from 'styled-components'
import { COLORS } from '../../application/GlobalStyles'

const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  background: ${COLORS.primary6};
  border: none;
  margin-right: 15px;
  color: ${COLORS.primary5};
  padding-left: 15px;
  outline:none;
  border-radius: 5px;

  &::placeholder {
      opacity: 0.3;
  }
`

const InputNumberStyled = styled(InputStyled)`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
`

const InputCheckboxStyled = styled.input`
  
`

export {
  InputStyled, InputNumberStyled, InputCheckboxStyled
}
