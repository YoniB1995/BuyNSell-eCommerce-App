import {createStore,combineReducers,applyMiddleware} from 'redux' ;
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

import {cartReducer} from './reducers/cartReducers'
import {getProductsDetails,getProductsReducer} from './reducers/productReducers'

const reducer = combineReducers({
    cart: cartReducer,
    getAllShoes: getProductsReducer,
    getAllScreens: getProductsReducer,
    getAllGames: getProductsReducer,
    getAllBags: getProductsReducer,
    getAllWatches: getProductsReducer,
    getAllBlazers: getProductsReducer,
    getShoesDetails: getProductsDetails,
    getScreensDetails: getProductsDetails,
    getGameDetails: getProductsDetails,
    getBagDetails: getProductsDetails,
    getWatchDetails: getProductsDetails,
    getBlazerDetails: getProductsDetails
})

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;