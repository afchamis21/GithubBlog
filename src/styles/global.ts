import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1, h2, h3 {
  color: ${(props) => props.theme['gray-50']}
}

p {
  color: ${(props) => props.theme['gray-200']}
}

body, button, input {
  line-height: 1.6;
  font-family: 'Nunito', sans-serif;
}

body {
  background: ${(props) => props.theme['gray-800']}
}

a {
  text-decoration: none;

  font-size: 0.75rem;
  gap: 0.5rem;
}

`
