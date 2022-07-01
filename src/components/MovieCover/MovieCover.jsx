import PropTypes from 'prop-types'
import { useState } from 'react'
import { ContextMenuButton } from '../../containers/ContextMenuButton/ContextMenuButton'
import {
  MovieCoverStyled,
  Poster,
  MovieDescription,
  MovieTitle,
  MovieGenre,
  MovieYear
} from './MovieCover.styles'

const MovieCover = ({ title, genre, year, image, onClick }) => {
  const [menuVisibl, setMenuVisibl] = useState(false)

  const showButton = () => setMenuVisibl(true)
  const hideButton = () => setMenuVisibl(false)

  return (
    <MovieCoverStyled
      onMouseOver={showButton}
      onMouseLeave={hideButton}
    >
      <ContextMenuButton menuVisibl={menuVisibl} setMenuVisibl={setMenuVisibl} />
      <Poster src={image} alt={title} onClick={onClick} />
      <MovieDescription>
        <MovieTitle>{title}</MovieTitle>
        <MovieYear>{year}</MovieYear>
        <MovieGenre>{genre}</MovieGenre>
      </MovieDescription>
    </MovieCoverStyled>
  )
}

MovieCover.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func
}

export { MovieCover }
