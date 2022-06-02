import PropTypes from 'prop-types'
import { MovieCoverStyled } from './MovieCover.styles'

const MovieCover = ({
  title, genre, year, image
}) => (
  <MovieCoverStyled>
    <img src={image} alt={title} />
    {title}
    {genre}
    {year}
  </MovieCoverStyled>
)

MovieCover.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.string,
  image: PropTypes.string
}

export { MovieCover }
