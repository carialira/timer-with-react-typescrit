import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    //0 no eixo x - 0 no eixo y - 0 de blur e 2px de tamanho
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};;
  }

  body {
    ${(props) => {
      return css`
        background: ${props.theme['gray-900']};
        color: ${props.theme['gray-300']};
      `
    }}

    -webkit-font-smoothing: antialiased;
  }

  body, input-security, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

`
