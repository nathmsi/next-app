// redux
import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import ReduxThunk from 'redux-thunk'



// reducers
import PsaumesReducer from './reducers/PsaumesReducer';


const reducers = combineReducers({
    psaumes: PsaumesReducer
})



const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

// const pReducer = persistReducer(rootPersistConfig, reducers);

const enhancer = composeEnhancers(
    applyMiddleware(ReduxThunk),
    // other store enhancers if any
  );


const store = createStore(reducers, enhancer);


export {
    store
}