import PropTypes from 'prop-types'
import { StyledLabel } from './Label.styles'

const Label = ({ label }) => (
  <StyledLabel>{label}</StyledLabel>
)

Label.propTypes = {
  label: PropTypes.string.isRequired
}

export { Label }
