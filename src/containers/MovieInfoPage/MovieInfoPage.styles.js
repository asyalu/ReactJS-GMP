import styled from 'styled-components'
import { COLORS } from '../../application/GlobalStyles'

const StyledMovieInfoPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.primary3};
`
const ButtonLogoWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-atems: center;
  margin: 20px;
`

const DescriptionWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const Poster = styled.img`
  width: 400px;
  height: 500px;
  object-fit: fill;
  margin-right: 5%;
`

const InfoWrapper = styled.div`
  width: 100%;
`

const TitleRatingWrapper = styled.div`
  display: flex;
`

const MovieTitle = styled.h2`
  font-weight: 300;
  font-size: 40px;
  line-height: px;
  color: ${COLORS.primary5};
  text-transform: uppercase;
`

const Rating = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-atems: center;
  text-align: center;
  margin-left: 20px;
  font-weight: 300;
  font-size: 20px;
  line-height: 58px;
  border: 1px solid ${COLORS.primary5};
  border-radius: 100%;
  color: ${COLORS.primary5};
`

const YearRuntimeWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  font-weight: 300;
  font-size: 24px;
  color: ${COLORS.primary1};
`

const Genre = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: 14px;
  color: ${COLORS.primary5};
  opacity: 0.5;
`

const Overview = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: ${COLORS.primary5};
  opacity: 0.5;
`

export {
  StyledMovieInfoPage,
  ButtonLogoWrapper,
  DescriptionWrapper,
  Poster,
  InfoWrapper,
  MovieTitle,
  Rating,
  Genre,
  YearRuntimeWrapper,
  Overview,
  TitleRatingWrapper
}
