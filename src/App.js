import { Box, Container, CssBaseline } from '@material-ui/core'
import red from '@material-ui/core/colors/red'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import axios from 'axios'
// import React from 'react'
import { SWRConfig } from 'swr'
import Home from './components/Home'
import AddComment from './components/AddComment'
import './App.css'

axios.defaults.baseURL = 'http://localhost:4001'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SWRConfig value={{ fetcher: (url) => axios(url).then((r) => r.data) }}>
        <Container maxWidth={false}>
          <Box marginTop={2}>
            <AddComment />
          </Box>
          <Box marginTop={2}>
            <Home />
          </Box>
        </Container>
      </SWRConfig>
    </ThemeProvider>
  )
}

export default App
