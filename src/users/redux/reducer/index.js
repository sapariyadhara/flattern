import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { priceReducer } from "../../../redux/reducer/price.reducer";

export const rootReducer = combineReducers({
    Counter : counterReducer ,
    price : priceReducer
})