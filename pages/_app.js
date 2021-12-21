
import '../styles/globals.css';

// Material ui
import { StylesProvider } from '@material-ui/core/styles';

// redux
import { Provider } from 'react-redux'
import { store, persistor } from '../src/store';


const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
        <StylesProvider injectFirst>
          <Component {...pageProps} />
        </StylesProvider>
    </Provider>
  )
}

export default MyApp;
