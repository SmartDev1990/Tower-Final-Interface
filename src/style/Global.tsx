import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: linear-gradient(90deg, rgba(0,254,242,0.6759746134782038) 13%, rgba(68,250,254,0.502305145691089) 96%);

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
