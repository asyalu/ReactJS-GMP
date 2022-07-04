import {
  InputStyled, InputNumberStyled, InputCheckboxStyled
} from './Input.styles'

const Input = ({ ...props }) => (
  <InputStyled {...props} />
)

Input.Number = ({ ...props }) => (
  <InputNumberStyled {...props} />
)

Input.Date = ({ ...props }) => (
  <Input {...props} />
)

Input.Checkbox = ({ ...props }) => (
  <InputCheckboxStyled {...props} type="checkbox" />
)

export { Input }
