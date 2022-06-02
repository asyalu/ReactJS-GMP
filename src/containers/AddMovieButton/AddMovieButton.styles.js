import styled from 'styled-components'
import { COLORS } from '../../application/GlobalStyles'
import { Button } from '../../components/Button/Button'

const AddMovieButtonStyled = styled(Button)`
  width: 176px;
  height: 46px;

  color: ${COLORS.primary1};

  background-color: rgba(96, 96, 96, 0.68);
  border: none;
  border-radius: 4px;

`
export { AddMovieButtonStyled }
