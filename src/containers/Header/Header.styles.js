import styled from 'styled-components'
import { COLORS } from '../../application/GlobalStyles'
import headerBackground from '../../assets/images/headerBackground.jpg'

const HeaderWrapper = styled.header`
  width: 100%;
  height: 50vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.primary3};
  overflow: hidden;
`

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${headerBackground});
  filter: brightness(0.3) blur(3px);
`

const LogoAddMovieWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 20px;
  z-index: 1;
`

const InputClarify = styled.h1`
  width: 75%;
  margin: 15px;
  color: ${COLORS.primary5};
  font-weight: 300;
  line-height: 49px;
  font-size: 40px;
  letter-spacing: 1px;
  z-index: 1;
`

const SearchMovieWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`

export {
  HeaderWrapper, BackgroundImage, LogoAddMovieWrapper, InputClarify, SearchMovieWrapper
}
