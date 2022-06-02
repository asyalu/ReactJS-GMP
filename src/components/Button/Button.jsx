import { forwardRef } from 'react'
import { ButtonStyled } from './Button.styled'

const Button = forwardRef((props, ref) => (
  <ButtonStyled ref={ref} {...props} />
))

export { Button }
