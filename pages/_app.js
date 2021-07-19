
import '../styles/globals.css';

// Material ui
import { StylesProvider } from '@material-ui/core/styles';

// redux
import { Provider } from 'react-redux'
import { store, persistor } from '../src/store';

import { appWithTranslation } from 'next-i18next';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <StylesProvider injectFirst>
          <Component {...pageProps} />
        </StylesProvider>
      {/* </PersistGate> */}
    </Provider>
  )
}

export default appWithTranslation(MyApp)
