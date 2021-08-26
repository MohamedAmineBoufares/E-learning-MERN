import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import loadingReducer from "./reducers/loadingReducers";
import messageReducer from "./reducers/messageReducers";
import categoryReducers from "./reducers/categoryReducers";
import productReducer from "./reducers/productReducers";
import cartReducers from "./reducers/cartReducers";
import favoriteReducers from "./reducers/favoriteReducers";
import adminReducers from "./reducers/adminReducers";
import userReducers from "./reducers/userReducers";

const reducer = combineReducers({
  loading: loadingReducer,
  messages: messageReducer,
  categories: categoryReducers,
  products: productReducer,
  cart: cartReducers,
  favorite: favoriteReducers,
  orders: adminReducers,
  courses: userReducers,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
