import { createTheme } from '@mui/material/styles';

const display = '"Poppins", "Inter Variable", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';

export const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'class' },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#4f46e5' },
        secondary: { main: '#0891b2' },
        background: { default: '#f6f7fb', paper: '#ffffff' },
        divider: '#e2e5f0',
        text: { primary: '#141627', secondary: '#4b5068' },
      },
    },
    dark: {
      palette: {
        primary: { main: '#8b84ff' },
        secondary: { main: '#22d3ee' },
        background: { default: '#0a0c17', paper: '#11142a' },
        divider: '#232848',
        text: { primary: '#eef0ff', secondary: '#a7acc9' },
      },
    },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: '"Inter Variable", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: { fontFamily: display, fontWeight: 800 },
    h2: { fontFamily: display, fontWeight: 700 },
    h3: { fontFamily: display, fontWeight: 700 },
    h4: { fontFamily: display, fontWeight: 700, letterSpacing: '-0.02em' },
    h5: { fontFamily: display, fontWeight: 700 },
    h6: { fontFamily: display, fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiCard: { defaultProps: { variant: 'outlined' } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 999, paddingInline: 22 }, sizeSmall: { paddingInline: 14 } },
    },
    MuiChip: { styleOverrides: { root: { fontWeight: 500 } } },
  },
});
