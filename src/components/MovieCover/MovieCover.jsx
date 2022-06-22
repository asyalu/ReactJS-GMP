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

const MovieCover = ({ title, genre, year, image }) => {
  const [menuVisibl, setMenuVisibl] = useState(false);

  const showButton = () => setMenuVisibl(true)
  const hideButton = () => setMenuVisibl(false)

  return (
    <MovieCoverStyled
      onMouseOver={showButton}
      onMouseLeave={hideButton}
    >
      {menuVisibl && <ContextMenuButton />}
      <Poster src={image} alt={title} />
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
  image: PropTypes.string
}

export { MovieCover }
