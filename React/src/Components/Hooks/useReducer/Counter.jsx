import React, { useReducer } from 'react'



const cashreducer = (state, action) => {

    switch (action.type) {
        case 'Increment':
            return {

                cash: state.cash += 1
            }
        case 'Decrement':
            return {

                cash: state.cash -= 1
            }
        default:
            return state
    }

}

export default function Counter() {
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
            <h1>counter:{count.cash}</h1>
            <button onClick={plus}>plus</button>
            <button onClick={minus}>minus</button>
        </div>
    )
}
