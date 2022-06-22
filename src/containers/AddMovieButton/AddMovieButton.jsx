import { useState } from 'react'
import { AddMovieButtonStyled } from './AddMovieButton.styles'
import { Modal } from '../../components/Modal/Modal'
import { MovieForm } from '../../components/MovieForm/MovieForm'
import { Button } from '../../components/Button/Button'

const RESOURCE_ADD_MOVIE = 'ADD MOVIE'
const RESOURCE_RESET = 'RESET'
const RESOURCE_SUBMIT = 'SUBMIT'

const AddMovieButton = () => {
  const [visible, setVisible] = useState(false)

  const openModal = () => setVisible(true)
  const closeModal = () => setVisible(false)

  const renderResetButton = () => (
    <Button.Reset>
      {RESOURCE_RESET}
    </Button.Reset>
  )

  const getContent = () => (
    <MovieForm />
  )

  const renderSubmitButton = () => (
    <Button>
      {RESOURCE_SUBMIT}
    </Button>
  )

  return (
    <>
      <AddMovieButtonStyled onClick={openModal}>{`+ ${RESOURCE_ADD_MOVIE}`}</AddMovieButtonStyled>
      { visible && (
      <Modal
        modalTitle={RESOURCE_ADD_MOVIE}
        content={getContent()}
        onClose={closeModal}
        cancelButton={renderResetButton()}
        okButton={renderSubmitButton()}
      />
      )}
    </>
  )
}

export { AddMovieButton }
