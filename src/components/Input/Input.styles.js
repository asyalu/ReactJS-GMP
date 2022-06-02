import styled from 'styled-components'

const InputStyled = styled.input`
  width: 100%;
  background: rgba(50, 50, 50, 0.8);
  border: none;

  &::placeholder {
      padding-left: 15px;
      opacity: 0.3;
  }
`

export { InputStyled }
