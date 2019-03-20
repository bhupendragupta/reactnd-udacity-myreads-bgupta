import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'
import {MuiThemeProvider,createMuiTheme} from "@material-ui/core"

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#344900',
        },
      secondary: {
        light: '#0066ff',
        main: '#344955',
        contrastText: '#ffcc00',
      },
       error: {
           main: "#E30425"
       }
      
    },
  });

ReactDOM.render(
<BrowserRouter>
<MuiThemeProvider theme = {theme}>
<App />
</MuiThemeProvider>
</BrowserRouter>, 
document.getElementById('root'))
