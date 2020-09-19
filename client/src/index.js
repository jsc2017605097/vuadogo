import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import userReducer from './reducers/user'
import categoryReducer from './reducers/category'
import productReducers from './reducers/product'
import filter from './reducers/filter'
import checkDataReducer from './reducers/checkGetData'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'
import cartReducer from './reducers/cart'

const reducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  product: productReducers.productReducer,
  selectedProduct: productReducers.selectedProduct,
  filter: filter,
  checkGetProduct: checkDataReducer.getProduct,
  cart: cartReducer.cartReducer,
  alert:cartReducer.alertSuccess
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
