import { Route, Switch } from 'wouter'
import { Box, Container, CssBaseline } from '@material-ui/core'
import red from '@material-ui/core/colors/red'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import axios from 'axios'
import { SWRConfig } from 'swr'
import Home from './components/Home'
import AddComment from './components/AddComment'
import User from './components/User'
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
      default: 'beige',
    },
  },
})

function App() {
  const route = {
    AddComment,
    Home,
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SWRConfig value={{ fetcher: (url) => axios(url).then((r) => r.data) }}>
        <Container maxWidth={false}>
          <Switch>
            <Route path="/">
              <AddComment />
              <Home />
            </Route>
            <Route path="/user/:id">
              {(params) => <User id={params.id} />}
            </Route>
            <Route>404, Not Found!</Route>
          </Switch>
        </Container>
      </SWRConfig>
    </ThemeProvider>
  )
}

export default App
