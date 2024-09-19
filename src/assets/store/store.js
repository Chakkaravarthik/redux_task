import { configureStore } from "@reduxjs/toolkit";
import QuantityReducer from "./Quantity/Quantity";
import ProductReducer from "../../../public/products";



const store = configureStore({
    reducer:{
        QuantityReducer,
        ProductReducer,
    },
    devTools:true,
})

export default store;