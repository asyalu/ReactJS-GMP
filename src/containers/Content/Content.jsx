import { MovieCover } from '../../components/MovieCover/MovieCover'
import { ContentWrapper, MoviesWrapper } from './Content.styles'
import { mockData } from '../../mocks/mockData'

const Content = () => (
  <ContentWrapper>
    <MoviesWrapper>
      {mockData.map((movie) => <MovieCover key={movie.title} {...movie} />)}
    </MoviesWrapper>
  </ContentWrapper>
)

export { Content }
