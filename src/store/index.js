// redux
import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

// persist redux store
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


// reducers
import TikkounReducer from './reducers/TikkounReducer';
import PsaumesReducer from './reducers/PsaumesReducer';
import AppReducer from './reducers/AppReducer';



const reducers = combineReducers({
    tikkoun: TikkounReducer,
    psaumes: PsaumesReducer,
    app: AppReducer
})


const rootPersistConfig = {
    key: 'data-tehilims',
    storage: storage,
    blacklist: ['tikkoun','psaumes'],
};

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const pReducer = persistReducer(rootPersistConfig, reducers);

const enhancer = composeEnhancers(
    applyMiddleware(ReduxThunk),
    // other store enhancers if any
  );


const store = createStore(pReducer, enhancer);
const persistor = persistStore(store);


export {
    persistor,
    store
}