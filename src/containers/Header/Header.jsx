import { memo } from 'react'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { Logo } from '../../components/Logo/Logo'
import { AddMovieButton } from '../AddMovieButton/AddMovieButton'
import {
  BackgroundImage, HeaderWrapper, LogoAddMovieWrapper, InputClarify, SearchMovieWrapper
} from './Header.styles'

const RESOURCE_INPUT_CLARIFY = 'FIND YOUR MOVE'
const RESOURCE_INPUT_PLACEHOLDER = 'What do you want to watch?'
const RESOURCE_SEARCH = 'SEARCH'

const Header = () => (
  <HeaderWrapper>
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
  </HeaderWrapper>
)

const MemoHeader = memo(Header)

export { MemoHeader as Header }
