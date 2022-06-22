import styled from 'styled-components'
import { COLORS } from '../../application/GlobalStyles'

const ContextMenuWrapper = styled.div`

`

const ContextMenuStyledButton = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 15px;
  right: 15px;
  position: absolute;
  border-radius: 100%;
  background-color: ${COLORS.contextMenu};
  cursor: pointer;
  z-index: 3;
`

const ContextMenu = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: ${COLORS.primary3};
  z-index: 3;
`

export {
  ContextMenuWrapper, ContextMenuStyledButton, ContextMenu
}
