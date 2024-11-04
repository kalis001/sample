import {configurestore} from '@reduxjs/toolkit'
import CounterReducer from './Counterslice'


export default configurestore({
    reducer:{
        Count:CounterReducer
    }

})