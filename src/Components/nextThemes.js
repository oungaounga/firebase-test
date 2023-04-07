/** @format */

// 1. Import `createTheme`
import {createTheme} from '@nextui-org/react'

// 2. Call `createTheme` and pass your custom values
const nextTheme = createTheme({
  type: 'dark', // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$yellow200',
      primaryLightHover: '$yellow300',
      primaryLightActive: '$yellow400',
      primaryLightContrast: '$yellow600',
      primary: '#4ADE7B',
      primaryBorder: '$yellow500',
      primaryBorderHover: '$yellow600',
      primarySolidHover: '$yellow700',
      primarySolidContrast: '$white',
      primaryShadow: '$yellow500',

      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd',

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
})

export default nextTheme

// 3. Pass the new theme to `NextUIProvider`
