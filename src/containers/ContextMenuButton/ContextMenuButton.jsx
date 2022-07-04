import { useState } from 'react'
import PropTypes from 'prop-types'
import {
  ContextMenuStyledButton, ContextMenu, ContextMenuWrapper
} from './ContextMenuButton.styles'
import dots from '../../assets/icons/dots.svg'
import { DeleteMovieModalButton } from '../DeleteMovieModalButton/DeleteMovieModalButton'
import { EditMovieModalButton } from '../EditMovieModalButton/EditMovieModalButton'

const ContextMenuButton = ({ menuVisibl, setMenuVisibl }) => {
  const [visiblMenu, setVisiblMenu] = useState(false)

  return (
    <ContextMenuWrapper menuVisibl={menuVisibl}>
      {visiblMenu
        ? (
          <ContextMenu onMouseLeave={() => setVisiblMenu(false)}>
            <EditMovieModalButton closeMenu={setMenuVisibl} />
            <DeleteMovieModalButton closeMenu={setMenuVisibl} />
          </ContextMenu>
        )
        : (
          <ContextMenuStyledButton onMouseOver={() => setVisiblMenu(true)}>
            <img src={dots} alt="close" />
          </ContextMenuStyledButton>
        )}
    </ContextMenuWrapper>
  )
}

ContextMenuButton.propTypes = {
  menuVisibl: PropTypes.bool,
  setMenuVisibl: PropTypes.func
}

export { ContextMenuButton }
