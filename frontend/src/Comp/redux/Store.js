import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './Counterslice';

export default configureStore({
    reducer:{
        Count:CounterReducer
    }

})












