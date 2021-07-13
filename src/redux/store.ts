import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers';
// import { setLocalStorage } from '../utils/storage';

const activeEnhancers = [
  applyMiddleware(thunk)
];

if (process.env.NODE_ENV !== 'production') {
  activeEnhancers.push(devToolsEnhancer({
    name: 'station-head'
  }))
}

const store = createStore(
  rootReducer,
  compose(...activeEnhancers)
);



// store.subscribe(() => {
//   setLocalStorage(store.getState());
// })

export default store;