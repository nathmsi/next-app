import '../styles/globals.css';


// translation
import '../src/translation/i18n';


// redux
import { Provider } from 'react-redux'

// persist redux store
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../src/store';

// theme provider
import { Provider as ThemeProvider } from '../src/contexts/themeContext';

// theme provider
import { Provider as NavigationProvider } from '../src/contexts/navigationContext';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';


import useInitializeTheme from '../src/hooks/useInitializeTheme';

const MainRoute = ({ Component, ...props }) => {

  const { theme } = useInitializeTheme();

  return (
    <MuiThemeProvider theme={createMuiTheme(theme.state.theme)}>
      <CssBaseline />
      <Component {...props} />
    </MuiThemeProvider>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <NavigationProvider>
            <MainRoute Component={Component} {...pageProps} />
          </NavigationProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
