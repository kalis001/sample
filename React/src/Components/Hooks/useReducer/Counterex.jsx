import React, {useReducer} from 'react'

const cashreducer = (state,action)=>{
    switch (action.type){
        case 'increment' :
            return{
                cash : state.cash += 1
            }
        case 'decrement' :
            return{
                cash : state.cash -= 1
            }
            default:
            return state
            
    }
}

export default function Counterex() {

    const initialstate = {
        cash: 20
    }

    const [count, dispatch] = useReducer(cashreducer, initialstate)


    function plus() {
        dispatch({
            type: 'Increment',
        })
    }

    function minus() {
        dispatch({
            type: 'Decrement',
        })
    }
    
    

    
  return (
    <div>

        <h1>Counter : {count.cash}</h1>
        <button className='btn btn-success' onClick={plus}>Increase</button>
        <button className='btn btn-danger' onClick={minus}>Decrease</button>
    </div>
  )
}
