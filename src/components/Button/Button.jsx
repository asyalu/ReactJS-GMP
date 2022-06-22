import { forwardRef } from 'react'
import {
  ButtonStyled, OptionButton, ResetButton
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

export { Button }
