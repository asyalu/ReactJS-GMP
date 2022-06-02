import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { Logo } from '../../components/Logo/Logo'
import { AddMovieButton } from '../AddMovieButton/AddMovieButton'
import {
  BackgroundImage, HeaderWrapper, LogoAddMovieWrapper, InputClarify, SearchMovieWrapper
} from './Header.styles'

const INPUT_CLARIFY = 'FIND YOUR MOVE'
const INPUT_PLACEHOLDER = 'What do you want to watch?'
const SEARCH = 'SEARCH'

const Header = () => (
  <HeaderWrapper>
    <BackgroundImage />
    <LogoAddMovieWrapper>
      <Logo />
      <AddMovieButton />
    </LogoAddMovieWrapper>
    <InputClarify>{INPUT_CLARIFY}</InputClarify>
    <SearchMovieWrapper>
      <Input placeholder={INPUT_PLACEHOLDER} />
      <Button size="large">{SEARCH}</Button>
    </SearchMovieWrapper>
  </HeaderWrapper>
)

export { Header }
