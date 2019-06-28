import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import { orange, teal} from 'material-ui/colors'
import { hot } from 'react-hot-loader'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#52c7b8',
    main: '#009688',
    dark: '#00675b',
    contrastText: '#fff',
  },
  secondary: {
    light: '#5281c7',
   main: '#005f96',
   dark: '#003067',
    contrastText: '#000',
  },
    openTitle: teal['700'],
    protectedTitle: orange['700'],
    type: 'dark'
  }
})

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)

export default hot(module)(App)
