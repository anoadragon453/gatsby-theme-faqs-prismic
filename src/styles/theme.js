export const theme = {
  space: [0, 4, 8, 16, 32],
  breakpoints: [
    '500px', '800px', '1080px',
  ],
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
    heading: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
  },
  fontSizes: [14, 16, 20, 24, 36, 44, 64, 80],
  fontWeights: {
    body: 300,
    regular: 300,
    medium: 400,
    subheading: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.1,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  colors: {
    text: "#241E1E",
    background: "#FFFFFF",
    primary: "#2D235F",
    primaryLighter: "#965ADC",
    primaryEvenLighter: "#E6D7FA",
    secondary: "#00C9BA",
    secondaryLight: "#CDF0F5",
    secondaryDark: "#0B4141",
    white: "#FFFFFF",
    offWhite: "#FAF0DC",
    black: "#241E1E",
    offBlack: "#241E1E",
    grey: "#F3F3F3",
  },
  sizes: {
    wrapper: "1240px",
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      color: 'text'
    },
  },
  styles: {
    Main: {
      backgroundColor: "background"
    },
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    h1: {
      variant: 'textStyles.heading',
      fontSize: [ 5, 6, 6, 7],
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 0,
    },
  }
}

export default theme
