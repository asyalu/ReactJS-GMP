import { useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Modal } from '../../components/Modal/Modal'

const RESOURCE_DELETE = 'Delete'
const RESOURCE_CONFIRM = 'CONFIRM'
const RESOURCE_DELETE_MOVIE = 'DELETE MOVIE'

const DeleteMovieModalButton = () => {
  const [visible, setVisible] = useState(false)

  const getContent = () => (
    <p>Are you sure you want to delete this movie?</p>
  )
  const okButton = () => (
    <Button>{RESOURCE_CONFIRM}</Button>
  )

  const openModal = () => setVisible(true)
  const closeModal = () => setVisible(false)

  return (
    <>
      <Button.Option onClick={openModal}>{RESOURCE_DELETE}</Button.Option>
      { visible && (
      <Modal
        modalTitle={RESOURCE_DELETE_MOVIE}
        content={getContent()}
        onClose={closeModal}
        okButton={okButton()}
      />
      )}
    </>
  )
}

export { DeleteMovieModalButton }
