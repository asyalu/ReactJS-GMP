import styled from 'styled-components'
import { COLORS } from '../../application/GlobalStyles'
import { Button } from '../Button/Button'

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.6);
  color: ${COLORS.primary5};
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  z-index: 3;
`

const ModalStyled = styled.form`
  position: relative;
  background-color: ${COLORS.primary3};
  padding: 30px 60px;
`

const ModalTitle = styled.h2`
  font-size: 40px;
  font-weight: 300;
  color: ${COLORS.primary5};
  text-transform: uppercase;
  margin-bottom: 40px;
`

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`

const CloseModalButton = styled(Button)`
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  position: absolute;
`

export {
  ModalStyled, ModalWrapper, ModalTitle, ButtonsWrapper, CloseModalButton
}
