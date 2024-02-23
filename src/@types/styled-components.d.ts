import type { CSSProp } from 'styled-components'
import 'styled-components'
import { defaultTheme } from './../styles/themes/default'

type ThemeType = typeof defaultTheme

// reaproveitando os tipos já configurado do styled-components e adicionando novos types
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp
  }
}
