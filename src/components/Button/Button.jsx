import { forwardRef } from 'react'
import {
  ButtonStyled,
  OptionButton,
  ResetButton,
  IconButton
} from './Button.styled'

const Button = forwardRef((props, ref) => (
  <ButtonStyled ref={ref} {...props} />
))

Button.Option = forwardRef((props, ref) => (
  <OptionButton ref={ref} {...props} />
))

Button.Reset = forwardRef((props, ref) => (
  <ResetButton ref={ref} {...props} />
))

Button.Icon = forwardRef((props, ref) => (
  <IconButton ref={ref} {...props} />
))

export { Button }
