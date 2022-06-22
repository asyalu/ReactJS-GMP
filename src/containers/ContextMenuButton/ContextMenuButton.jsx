import { useState } from 'react'
import {
  ContextMenuStyledButton, ContextMenu, ContextMenuWrapper
} from './ContextMenuButton.styles'
import dots from '../../assets/icons/dots.svg'
import { DeleteMovieModalButton } from '../DeleteMovieModalButton/DeleteMovieModalButton'
import { EditMovieModalButton } from '../EditMovieModalButton/EditMovieModalButton'

const ContextMenuButton = () => {
  const [visiblMenu, setVisiblMenu] = useState(false)

  const openMenu = () => setVisiblMenu(true)
  const closeMenu = () => setVisiblMenu(false)

  return (
    <ContextMenuWrapper onMouseLeave={closeMenu}>
      { visiblMenu
        ? (
          <ContextMenu>
            <EditMovieModalButton />
            <DeleteMovieModalButton />
          </ContextMenu>
        )
        : (
          <ContextMenuStyledButton onMouseOver={openMenu}>
            <img src={dots} alt="close" />
          </ContextMenuStyledButton>
        )}
    </ContextMenuWrapper>
  )
}

export { ContextMenuButton }
