import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./Users/user-reducer";
import cartReducer from "./Cart/cart-reducer";
import DirectoryReducer from "./Directory/directory-reducer";
import ShopReducer from "./Shop/shop-reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: DirectoryReducer,
  shop: ShopReducer,
});
export default persistReducer(persistConfig, rootReducer);
