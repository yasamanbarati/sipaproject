export const palette = {
  neutral: {
    main: '#fff',
    contrastText: '#444444',
  },
  dark: {
    main: '#444444',
    contrastText: '#fff',
  },
  orange: {
    main: '#FFC426',
    contrastText: '#000',
  },
  blue: {
    main: '#4834D4',
    contrastText: '#4834D4',
  },
  black: '#000000',
  red: '#EE6D57',
  footerBG: '#042030',
  footerfootnoteBG: '#032C43',
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
    dark: Palette['primary']
    orange: Palette['primary']
    blue: Palette['primary']
    black: string
    red: string
    footerBG: string
    footerfootnoteBG: string
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
    dark?: PaletteOptions['primary']
    orange?: PaletteOptions['primary']
    blue?: PaletteOptions['primary']
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true
    dark: true
    orange: true
    blue: true
  }
}
