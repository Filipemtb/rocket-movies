import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components';
import GlobalSyles from './styles/global';

import { Routes }  from './routes';

import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalSyles />
    <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)