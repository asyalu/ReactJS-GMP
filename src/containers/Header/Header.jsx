import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { Logo } from '../../components/Logo/Logo'
import { AddMovieButton } from '../AddMovieButton/AddMovieButton'
import { MovieInfoPage } from '../MovieInfoPage/MovieInfoPage'
import {
  BackgroundImage,
  HeaderWrapper,
  LogoAddMovieWrapper,
  InputClarify,
  SearchMovieWrapper,
  SearchBlock,
  MovieDescription
} from './Header.styles'

const RESOURCE_INPUT_CLARIFY = 'FIND YOUR MOVE'
const RESOURCE_INPUT_PLACEHOLDER = 'What do you want to watch?'
const RESOURCE_SEARCH = 'SEARCH'

const Header = ({ view, setView }) => {
  const res = useRef(null)

  useEffect(() => {
    res.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })

  return (
    <HeaderWrapper ref={res} view={view}>
      <SearchBlock view={view}>
        <BackgroundImage />
        <LogoAddMovieWrapper>
          <Logo />
          <AddMovieButton />
        </LogoAddMovieWrapper>
        <InputClarify>{RESOURCE_INPUT_CLARIFY}</InputClarify>
        <SearchMovieWrapper>
          <Input placeholder={RESOURCE_INPUT_PLACEHOLDER} />
          <Button size="large">{RESOURCE_SEARCH}</Button>
        </SearchMovieWrapper>
      </SearchBlock>
      <MovieDescription view={view}>
        <MovieInfoPage setView={setView} />
      </MovieDescription>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  view: PropTypes.bool,
  setView: PropTypes.func
}

export { Header }
