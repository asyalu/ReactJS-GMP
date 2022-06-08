import { createGlobalStyle } from 'styled-components'

const COLORS = {
  primary1: '#f65261',
  primary2: '#424242',
  primary3: '#232323',
  primary4: '#555555',
  primary5: '#ffffff'
}

const GlobalStyles = createGlobalStyle`
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: ${COLORS.primary4};
    font-family: "Montserrat";
    z-index: -2;
  }
`

export { GlobalStyles, COLORS }