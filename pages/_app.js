import '../styles/globals.css';


// translation
import '../src/translation/i18n';

// Material ui
import { StylesProvider } from '@material-ui/core/styles';


// redux
import { Provider } from 'react-redux'

// persist redux store
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../src/store';


const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StylesProvider injectFirst>
          <Component {...pageProps} />
        </StylesProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
