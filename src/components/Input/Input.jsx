import PropTypes from 'prop-types'
import { InputStyled } from './Input.styles'

const Input = ({ placeholder }) => (
  <InputStyled placeholder={placeholder} />
)

Input.propTypes = {
  placeholder: PropTypes.string
}

export { Input }
