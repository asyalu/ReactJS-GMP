import { useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Modal } from '../../components/Modal/Modal'
import { MovieForm } from '../../components/MovieForm/MovieForm'

const RESOURCE_DELETE = 'Edit'
const RESOURCE_SUBMIT = 'SUBMIT'
const RESOURCE_EDIT_MOVIE = 'EDIT MOVIE'
const RESOURCE_RESET = 'RESET'

const EditMovieModalButton = () => {
  const [visible, setVisible] = useState(false)

  const getContent = () => (
    <MovieForm />
  )
  const okButton = () => (
    <Button>{RESOURCE_SUBMIT}</Button>
  )

  const renderResetButton = () => (
    <Button.Reset>
      {RESOURCE_RESET}
    </Button.Reset>
  )

  const openModal = () => setVisible(true)
  const closeModal = () => setVisible(false)

  return (
    <>
      <Button.Option onClick={openModal}>{RESOURCE_DELETE}</Button.Option>
      { visible && (
      <Modal
        modalTitle={RESOURCE_EDIT_MOVIE}
        content={getContent()}
        onClose={closeModal}
        okButton={okButton()}
        cancelButton={renderResetButton()}
      />
      )}
    </>
  )
}

export { EditMovieModalButton }
