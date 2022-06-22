import { MovieCover } from '../../components/MovieCover/MovieCover'
import {
  ContentWrapper, MoviesWrapper, NumberOfFilms, GenresSortWrapper
} from './Content.styles'
import { mockData } from '../../mocks/mockData'
import { GenreSelection } from '../GenreSelection/GenreSelection'
import { Sorting } from '../Sorting/Sorting'

const RESOURCE_MOVIES_FOUND = 'movies found'

const Content = () => (
  <ContentWrapper>
    <GenresSortWrapper>
      <GenreSelection />
      <Sorting />
    </GenresSortWrapper>
    <NumberOfFilms>
      {`4 ${RESOURCE_MOVIES_FOUND}`}
    </NumberOfFilms>
    <MoviesWrapper>
      {mockData.map((movie) => <MovieCover key={movie.title} {...movie} />)}
    </MoviesWrapper>
  </ContentWrapper>
)

export { Content }
