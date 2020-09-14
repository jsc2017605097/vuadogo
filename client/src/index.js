import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import userReducer from './reducers/user'
import categoryReducer from './reducers/category'
import productReducers from './reducers/product'
import filter from './reducers/filter'
import checkDataReducer from './reducers/checkGetData'

const reducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  product: productReducers.productReducer,
  filter: filter,
  checkGetProduct: checkDataReducer.getProduct
})

const store = createStore(reducer, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
