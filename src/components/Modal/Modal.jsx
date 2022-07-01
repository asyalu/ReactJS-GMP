import PropTypes from 'prop-types'
import {
  ModalStyled, ModalWrapper, ModalTitle, ButtonsWrapper, CloseModalButton
} from './Modal.styles'
import close from '../../assets/icons/close.svg'
import { COLORS } from '../../application/GlobalStyles'

const Modal = (
  {
    modalTitle,
    content,
    okButton,
    cancelButton = null,
    onClose
  }
) => {
  const closeHandler = (e) => {
    if (e.target.classList[0] === ModalWrapper.styledComponentId) {
      onClose()
    }
  }

  return (
    <ModalWrapper onClick={closeHandler}>
      <ModalStyled>
        <CloseModalButton bg={COLORS.transparent} onClick={onClose}>
          <img src={close} alt="close" />
        </CloseModalButton>
        <ModalTitle>
          {modalTitle}
        </ModalTitle>
        {content}
        {okButton && (
          <ButtonsWrapper>
            {cancelButton}
            {okButton}
          </ButtonsWrapper>
        )}
      </ModalStyled>
    </ModalWrapper>
  )
}

Modal.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  content: PropTypes.element,
  okButton: PropTypes.element,
  cancelButton: PropTypes.element,
  onClose: PropTypes.func.isRequired
}

export { Modal }
