import PropTypes from 'prop-types'
import { Logo } from '../../components/Logo/Logo'
import {
  StyledMovieInfoPage,
  ButtonLogoWrapper,
  DescriptionWrapper,
  Poster, InfoWrapper,
  MovieTitle,
  Rating,
  Genre,
  YearRuntimeWrapper,
  Overview,
  TitleRatingWrapper
} from './MovieInfoPage.styles'
import searchButton from '../../assets/icons/searchButton.svg'
import { Button } from '../../components/Button/Button'
import { mockData } from '../../mocks/mockData'

const MovieInfoPage = ({ setView }) => {
  const { title, image, rating, genre, year, runtime, overview } = mockData[0]
  return (
    <StyledMovieInfoPage>
      <ButtonLogoWrapper>
        <Logo />
        <Button.Icon onClick={() => setView(false)}>
          <img src={searchButton} alt="search" />
        </Button.Icon>
      </ButtonLogoWrapper>
      <DescriptionWrapper>
        <Poster src={image} alt={title} />
        <InfoWrapper>
          <TitleRatingWrapper>
            <MovieTitle>
              {title}
            </MovieTitle>
            <Rating>
              {rating}
            </Rating>
          </TitleRatingWrapper>
          <Genre>
            {genre}
          </Genre>
          <YearRuntimeWrapper>
            <p>{year}</p>
            <p>{runtime}</p>
          </YearRuntimeWrapper>
          <Overview>
            {overview}
          </Overview>
        </InfoWrapper>
      </DescriptionWrapper>
    </StyledMovieInfoPage>
  )
}

MovieInfoPage.propTypes = {
  setView: PropTypes.func
}

export { MovieInfoPage }
